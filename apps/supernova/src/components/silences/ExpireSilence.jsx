/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import { Button, Modal } from "@cloudoperators/juno-ui-components"
import { useActions } from "@cloudoperators/juno-messages-provider"
import { parseError } from "../../helpers"
import { useBoundMutation } from "../../hooks/useBoundMutation"
import { useQueryClient } from "@tanstack/react-query"
import { debounce } from "../../helpers"
import { useSilencesItems, useSilencesActions } from "../StoreProvider"
import constants from "../../constants"

const ExpireSilence = (props) => {
  const { addMessage } = useActions()
  const silence = props.silence
  const [confirmationDialog, setConfirmationDialog] = useState(false)
  const queryClient = useQueryClient()
  const silences = useSilencesItems()
  const { setSilences } = useSilencesActions()

  const { mutate: deleteSilences } = useBoundMutation("deleteSilences", {
    onSuccess: (data) => {
      queryClient.cancelQueries("silences")

      const updatedSilences = silences.filter((item) => item.id === data.id)
      let updatedSilence = updatedSilences.length > 0 ? updatedSilences[0] : null
      updatedSilence = { ...updatedSilence, status: { state: constants.SILENCE_EXPIRED } }

      const newSilences = [...silences.filter((item) => item?.id !== data?.id), updatedSilence]

      setSilences({
        items: newSilences,
      })
      addMessage({
        variant: "success",
        text: `Silence expired successfully. Please note that it may take up to 5 minutes for the silence to show up as expired.`,
      })
    },

    onError: (error) => {
      // add a error message in UI
      addMessage({
        variant: "error",
        text: parseError(error),
      })
    },

    onSettled: () => {
      // Optionale zusätzliche Aktionen, wie das erneute Abrufen von Daten
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
