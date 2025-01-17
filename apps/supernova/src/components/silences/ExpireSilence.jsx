/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import { Button, Modal } from "@cloudoperators/juno-ui-components"
import { useActions } from "@cloudoperators/juno-messages-provider"
import { parseError } from "../../helpers"
import { useSilenceMutation } from "../../hooks/useSilenceMutation"
import { useQueryClient } from "@tanstack/react-query"
import { debounce } from "../../helpers"
import constants from "../../constants"

const ExpireSilence = (props) => {
  const { addMessage } = useActions()
  const silence = props.silence
  const [confirmationDialog, setConfirmationDialog] = useState(false)
  const queryClient = useQueryClient()
  const { mutate: deleteSilences } = useSilenceMutation("deleteSilences", {
    onMutate: async (deletedSilence) => {
      await queryClient.cancelQueries(["silences"])

      // Snapshot the previous value for rollback
      const prevData = queryClient.getQueryData(["silences"])

      if (!prevData || !Array.isArray(prevData.silences)) {
        return { prevData }
      }

      // Optimistic update
      const updatedSilences = prevData.silences.filter((item) => item.id !== deletedSilence.id)
      let updatedSilence = prevData.silences.find((item) => item.id === deletedSilence.id)
      if (updatedSilence) {
        updatedSilence = { ...updatedSilence, status: { state: constants.SILENCE_EXPIRED } }
        updatedSilences.push(updatedSilence) // Add the updated silence back
      }
      queryClient.setQueryData(["silences"], {
        ...prevData,
        silences: updatedSilences,
      })

      // Return the previous data for rollback
      return { prevData }
    },

    onSuccess: () => {
      addMessage({
        variant: "success",
        text: `Silence expired successfully. Please note that it may take up to 5 minutes for the silence to show up as expired.`,
      })
    },

    onError: (error, context) => {
      // Rollback to previous data
      if (context?.prevData) {
        queryClient.setQueryData(["silences"], context.prevData)
      }

      addMessage({
        variant: "error",
        text: parseError(error),
      })
    },

    onSettled: () => {
      queryClient.invalidateQueries(["silences"])
    },
  })

  const onExpire = debounce(() => {
    deleteSilences({ id: silence.id })
    setConfirmationDialog(false)
  }, 200)

  return (
    <>
      <Button onClick={() => setConfirmationDialog(true)}>Expire</Button>
      {confirmationDialog && (
        <Modal
          cancelButtonLabel="Cancel"
          confirmButtonLabel="Expire Silence"
          onCancel={() => setConfirmationDialog(false)}
          onConfirm={onExpire}
          open={true}
          title="Confirmation needed"
        >
          <p>
            Do you really want to expire the silence <b>{silence.id}</b>?
          </p>
          <p>
            Comment for the silence: <b>{silence?.comment}</b>
          </p>
        </Modal>
      )}
    </>
  )
}
export default ExpireSilence
