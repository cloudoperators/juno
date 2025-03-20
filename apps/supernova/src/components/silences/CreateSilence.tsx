/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useLayoutEffect, useMemo, useState } from "react"
import {
  Modal,
  Button,
  Box,
  Form,
  Textarea,
  TextInput,
  Select,
  SelectOption,
  Message,
  FormRow,
} from "@cloudoperators/juno-ui-components"
import {
  useSilencesExcludedLabels,
  useSilencesActions,
  useAlertEnrichedLabels,
  useGlobalsUsername,
  useSilencesItems,
} from "../StoreProvider"
import AlertDescription from "../alerts/shared/AlertDescription"
import { useActions } from "@cloudoperators/juno-messages-provider"
import CreateSilenceAdvanced from "./CreateSilenceAdvanced"
import { DateTime } from "luxon"
import { latestExpirationDate, getSelectOptions, setupMatchers } from "./silenceHelpers"
import { parseError } from "../../helpers"

import { debounce } from "../../helpers"
import constants from "../../constants"

import { useQueryClient } from "@tanstack/react-query"
import { useBoundMutation } from "../../hooks/useBoundMutation"

const validateForm = (values: any) => {
  const minCommentLength = 3
  const minUserNameLength = 1

  const invalidItems: Record<string, string[]> = {}
  if (values?.comment?.length < minCommentLength) {
    if (!invalidItems["comment"]) invalidItems["comment"] = []
    invalidItems["comment"].push(`Please enter at least 3 characters`)
  }

  if (values?.createdBy?.length < minUserNameLength) {
    if (!invalidItems["createdBy"]) invalidItems["createdBy"] = []
    invalidItems["createdBy"].push(`Please enter a name`)
  }

  return invalidItems
}

const errorHelpText = (messages: any) => {
  return messages.map((msg: any, i: any) => (
    <span key={i} className="block text-theme-danger ">
      {msg}
    </span>
  ))
}

const DEFAULT_FORM_VALUES: Record<string, any> = { duration: 2, comment: "" }

const CreateSilence = ({ alert, size, variant }: any) => {
  const queryClient = useQueryClient()
  const excludedLabels = useSilencesExcludedLabels()
  const { getMappingSilences, setSilences } = useSilencesActions()
  const enrichedLabels = useAlertEnrichedLabels()
  const user = useGlobalsUsername()
  const [displayNewSilence, setDisplayNewSilence] = useState(false)
  const [formState, setFormState] = useState(DEFAULT_FORM_VALUES)
  const [expirationDate, setExpirationDate] = useState(null)
  const [showValidation, setShowValidation] = useState<Record<string, string[]>>({})
  const { addMessage } = useActions()

  const silences = useSilencesItems()

  // Initialize form state on modal open
  // Removed alert from dependencies since we take an screenshot of the global state on opening the modal
  // This is due to if the alert changes (e.g. the alert receives a new silenceBy) while the modal is open, the form state will be reset
  useLayoutEffect(() => {
    // reset form state with default values
    setFormState({
      ...formState,
      ...DEFAULT_FORM_VALUES,
      createdBy: user || "", // empty string to prevent undefined for TextInput
      matchers: setupMatchers(alert?.labels, excludedLabels, enrichedLabels),
    })

    // get the latest expiration date from the existing silences
    // recalculate always on open modal due to the fact that the silences or local silences
    // may change without change in the alert
    setExpirationDate(latestExpirationDate(getMappingSilences(alert)))
    // reset other states
    setShowValidation({})
  }, [displayNewSilence])

  // collect options for select dropdown with time (2 hours, 12 hours, 1 day, 3 days, 7 days) which exceeds the expiration date
  // on open panel retrigger the calculation
  const durationOptions = useMemo(() => {
    const options = getSelectOptions(expirationDate ?? 0)
    if (options.firstNotCovered) {
      // reset the first option which is not covered by the existing silence
      setFormState({ ...formState, duration: options.firstNotCovered.value })
    }
    return options.items
  }, [expirationDate])

  const { mutate: createSilence } = useBoundMutation("createSilences", {
    onMutate: (data: any) => {
      queryClient.cancelQueries({ queryKey: ["silences"] })

      const newSilence = { ...data.silence, status: { state: constants.SILENCE_ACTIVE } }
      const newSilences = [...silences, newSilence]

      setSilences({
        items: newSilences,
      })

      setDisplayNewSilence(false)
    },

    onSuccess: (data: any) => {
      addMessage({
        variant: "success",
        text: `A silence object with id ${data?.silenceID} was created successfully. Please note that it may
            take up to 5 minutes for the alert to show up as silenced.`,
      })
    },
    onError: (error: any) => {
      // add a error message in UI
      addMessage({
        variant: "error",
        text: parseError(error),
      })
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["silences"] })
    },
  })

  // debounce to prevent accidental double clicks from creating multiple silences
  const onSubmitForm = debounce(() => {
    const formValidation = validateForm(formState)
    setShowValidation(formValidation)
    if (Object.keys(formValidation).length > 0) return
    const newFormState = { ...formState }
    // clean up attributes in matchers and remove excluded
    if (newFormState.matchers?.length > 0) {
      newFormState.matchers = newFormState.matchers.filter((m: any) => !m.excluded).map(({ ...keepAttrs }) => keepAttrs)
    }
    // add extra attributes
    const startsAt = new Date()
    const endsAt = new Date()
    endsAt.setHours(endsAt.getHours() + Number.parseInt(newFormState.duration || 4))

    const newSilence = {
      ...newFormState,
      status: { state: constants.SILENCE_ACTIVE },
      startsAt: startsAt.toISOString(),
      endsAt: endsAt.toISOString(),
      alertFingerprint: alert.fingerprint,
    }

    // calling createSilence with variable silence: newSilence
    createSilence({ silence: newSilence })
  }, 200)

  const onInputChanged = ({ key, value }: any) => {
    if (!value) return
    setFormState({ ...formState, [key]: value })
  }

  const onMatchersChanged = (matcher: any) => {
    const index = formState.matchers.findIndex((item: any) => item.name == matcher.name)
    const items = formState.matchers.slice()
    // update item
    if (index >= 0) {
      items[index] = { ...items[index], excluded: !matcher.excluded }
    }

    setFormState({ ...formState, matchers: items })
  }

  return (
    <>
      <Button
        size={size}
        variant={variant}
        onClick={(e: any) => {
          e.stopPropagation()
          setDisplayNewSilence(!displayNewSilence)
        }}
      >
        Silence
      </Button>
      {displayNewSilence && (
        <Modal
          title="New Silence for"
          size="large"
          open={true}
          confirmButtonLabel={"Save"}
          onCancel={() => setDisplayNewSilence(false)}
          onConfirm={onSubmitForm}
        >
          {expirationDate && (
            <Message className="mb-6" variant="info">
              There is already a silence for this alert that expires at
              <b>{DateTime.fromISO(expirationDate).toLocaleString(DateTime.DATETIME_SHORT)}</b>
            </Message>
          )}

          <span className="text-lg font-bold">{alert?.labels?.alertname}</span>

          <Box className="mt-2">
            <AlertDescription description={alert.annotations?.description} />
          </Box>

          <>
            <CreateSilenceAdvanced matchers={formState.matchers} onMatchersChanged={onMatchersChanged} />
            <Form className="mt-6">
              <FormRow>
                <TextInput
                  required
                  label="Silenced by"
                  value={formState.createdBy}
                  onChange={(e: any) => onInputChanged({ key: "createdBy", value: e.target.value })}
                  errortext={showValidation["createdBy"] && errorHelpText(showValidation["createdBy"])}
                  disabled={!!user}
                />
              </FormRow>
              <FormRow>
                <Textarea
                  className="h-20"
                  label="Description"
                  value={formState.comment}
                  onChange={(e: any) => onInputChanged({ key: "comment", value: e.target.value })}
                  errortext={showValidation["comment"] && errorHelpText(showValidation["comment"])}
                  required
                />
              </FormRow>
              <FormRow>
                <Select
                  required
                  label="Duration"
                  value={formState.duration}
                  onChange={(value: any) =>
                    onInputChanged({
                      key: "duration",
                      value,
                    })
                  }
                >
                  {durationOptions?.map((option) => (
                    <SelectOption key={option.value} label={option.label} value={String(option.value)} />
                  ))}
                </Select>
              </FormRow>
            </Form>
          </>
        </Modal>
      )}
    </>
  )
}

export default CreateSilence
