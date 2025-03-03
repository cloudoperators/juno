/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useLayoutEffect, useMemo, useState } from "react"
import {
  Modal,
  Button,
  Form,
  Textarea,
  TextInput,
  Select,
  SelectOption,
  Message,
  FormRow,
  Pill,
  Stack,
} from "@cloudoperators/juno-ui-components"
import { useBoundMutation } from "../../hooks/useBoundMutation"
import { useGlobalsUsername, useSilencesItems, useSilencesActions } from "../StoreProvider"

import { useActions } from "@cloudoperators/juno-messages-provider"
import { getSelectOptions } from "./silenceHelpers"
import { debounce, parseError } from "../../helpers"
import { useQueryClient } from "@tanstack/react-query"
import constants from "../../constants"

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

const RecreateSilence = (props: any) => {
  const silence = props.silence

  const { addMessage } = useActions()
  const user = useGlobalsUsername()

  const silences = useSilencesItems()
  const { setSilences } = useSilencesActions()

  const queryClient = useQueryClient()

  const [displayNewSilence, setDisplayNewSilence] = useState(false)
  const [formState, setFormState] = useState(DEFAULT_FORM_VALUES)
  const [showValidation, setShowValidation] = useState<Record<string, string[]>>({})
  const [error, setError] = useState(null)

  // Initialize form state on modal open
  // Removed alert from dependencies since we take an screenshot of the global state on opening the modal
  // This is due to if the alert changes (e.g. the alert receives a new silenceBy) while the modal is open, the form state will be reset
  useLayoutEffect(() => {
    if (!displayNewSilence) return

    // reset form state with default values
    setFormState({
      ...formState,
      ...DEFAULT_FORM_VALUES,
      createdBy: user || "", // empty sting to prevent undefined for TextInput
      matchers: silence.matchers,
      comment: silence.comment,
    })

    // reset other states
    setError(null)
    setShowValidation({})
  }, [displayNewSilence])

  // collect options for select dropdown with time (2 hours, 12 hours, 1 day, 3 days, 7 days) which exceeds the expiration date
  // on open panel retrigger the calculation
  const durationOptions = useMemo(() => {
    const options = getSelectOptions(0)
    if (options.firstNotCovered) {
      // reset the first option which is not covered by the existing silence
      setFormState({ ...formState, duration: options.firstNotCovered.value })
    }
    return options.items
  }, [])

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
    setError(null)
    const formValidation = validateForm(formState)
    setShowValidation(formValidation)
    if (Object.keys(formValidation).length > 0) return
    let newFormState = { ...formState }

    // add extra attributes
    const startsAt = new Date()
    const endsAt = new Date()
    endsAt.setHours(endsAt.getHours() + Number.parseInt(newFormState.duration || 4))

    const newSilence = {
      ...newFormState,
      startsAt: startsAt.toISOString(),
      endsAt: endsAt.toISOString(),
    }

    // calling createSilence with variable silence: newSilence
    createSilence({ silence: newSilence })
  }, 200)

  const onInputChanged = ({ key, value }: any) => {
    if (!value) return
    setFormState({ ...formState, [key]: value })
  }

  return (
    <>
      <Button
        onClick={(e: any) => {
          e.stopPropagation()
          setDisplayNewSilence(!displayNewSilence)
        }}
      >
        Recreate
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
          {error && <Message text={error} variant="danger" />}

          <>
            <div className="advanced-area overflow-hidden">
              <p className="mt-2">Matchers attached to this silence</p>

              <Stack gap="2" alignment="start" wrap={true} className="mt-2">
                {formState?.matchers &&
                  Object.keys(formState?.matchers).map((label, index) => (
                    <Pill
                      key={index}
                      pillKey={silence?.matchers[label]?.name}
                      pillKeyLabel={silence?.matchers[label]?.name}
                      pillValue={silence?.matchers[label]?.value}
                      pillValueLabel={silence?.matchers[label]?.value}
                    />
                  ))}
              </Stack>
            </div>

            <Form className="mt-6">
              <FormRow>
                <TextInput
                  required
                  label="Silenced by"
                  value={formState.createdBy}
                  disabled={!!user}
                  onChange={(e: any) => onInputChanged({ key: "createdBy", value: e.target.value })}
                  errortext={showValidation["createdBy"] && errorHelpText(showValidation["createdBy"])}
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

export default RecreateSilence
