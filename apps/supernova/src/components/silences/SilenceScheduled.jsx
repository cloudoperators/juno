/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from "react"
import { produce } from "immer"
import { useActions } from "@cloudoperators/juno-messages-provider"
import {
  Modal,
  Box,
  Form,
  Textarea,
  TextInput,
  Select,
  SelectOption,
  Message,
  FormRow,
  Stack,
  Pill,
  Button,
  FormSection,
  DateTimePicker,
} from "@cloudoperators/juno-ui-components"
import { useGlobalsUsername, useSilenceTemplates } from "../StoreProvider"
import { parseError } from "../../helpers"
import { useBoundMutation } from "../../hooks/useBoundMutation"
import { useQueryClient } from "@tanstack/react-query"
// import { debounce } from "../../helpers"
import { DEFAULT_FORM_VALUES, validateForm } from "./silenceScheduledHelpers"
import { debounce } from "../../helpers"

const SilenceScheduled = () => {
  const user = useGlobalsUsername()
  const { addMessage } = useActions()
  const silenceTemplates = useSilenceTemplates()
  const [error, setError] = useState(null)

  const queryClient = useQueryClient()

  // set the selected template
  const [selected, setSelected] = useState(null)

  // default time for DateTimePicker

  const defaultDate = useMemo(() => {
    const date = new Date()
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  }, [])

  // Formular which will be used to create the silence
  const [formState, setFormState] = useState(DEFAULT_FORM_VALUES)

  const [closed, setClosed] = useState(true)

  const { mutate: createSilence } = useBoundMutation("createSilences", {
    onMutate: async (newSilence) => {
      await queryClient.cancelQueries(["silences"])

      // Snapshot the previous value for rollback
      const prevData = queryClient.getQueryData(["silences"])

      if (!prevData || !Array.isArray(prevData.silences)) {
        return { prevData }
      }

      const activeSilence = {
        ...newSilence.silence,
        status: {
          ...newSilence.silence.status,
          state: constants.SILENCE_ACTIVE,
        },
      }

      const newCacheData = Array.isArray(prevData.silences) ? [...prevData.silences, activeSilence] : [newSilence]
      queryClient.setQueryData(["silences"], {
        ...prevData,
        silences: newCacheData,
      })

      setDisplayNewSilence(false)

      // Return the previous data for possible rollback
      return { prevData }
    },

    onSuccess: (data) => {
      addMessage({
        variant: "success",
        text: `A silence object with id ${data?.silenceID} was created successfully. Please note that it may
            take up to 5 minutes for the alert to show up as silenced.`,
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

  // submit
  const onSubmitForm = debounce(() => {
    // reset errors.
    setError(null)

    // validate form and sets in case of errors messages and stops the submit
    let errorFormState = validateForm(formState)

    if (errorFormState) {
      setFormState(errorFormState)
      setError("Please fix the errors in the form")
      return
    }

    const silence = {
      startsAt: formState.date.start,
      endsAt: formState.date.end,
      comment: formState.comment.value,
      createdBy: formState.createdBy.value,
      matchers: [],
    }

    for (const [key, value] of Object.entries(formState.editable_labels)) {
      silence.matchers.push({
        name: key,
        value: value.value,
        isRegex: true,
      })
    }

    for (const [key, value] of Object.entries(formState.fixed_labels)) {
      silence.matchers.push({
        name: key,
        value: value,
        isRegex: true,
      })
    }

    // calling createSilence with variable silence: newSilence
    createSilence({ silence: silence })
  }, 200)

  //////
  ////// OnClick

  const onChangeTemplate = (value) => {
    const newSelectedOption = silenceTemplates.find((option) => option.id === value)

    const newFormState = {
      ...DEFAULT_FORM_VALUES,
      fixed_labels: newSelectedOption?.fixed_labels || {},
      createdBy: { value: user, error: null },
      editable_labels: newSelectedOption?.editable_labels?.reduce(
        (acc, label) => ({
          ...acc,
          [label]: {
            value: "",
            error: null,
          },
        }),
        {}
      ),
    }
    setFormState(newFormState)

    setSelected(newSelectedOption)
  }

  const onInputChanged = ({ key, value }) => {
    setFormState({ ...formState, [key]: { value: value, error: null } })
  }

  // todo delete other input change functions
  const onChangeLabelValue = (e) => {
    const editable_label = e.target.id
    setFormState(
      produce((formState) => {
        formState.editable_labels[editable_label].value = e.target.value
        formState.editable_labels[editable_label].error = null
      })
    )
  }

  const setStartDate = (e, f) => {
    setFormState(
      produce((formState) => {
        formState.date.start = f
        formState.date.error = null
      })
    )
  }

  const setEndDate = (e, f) => {
    setFormState(
      produce((formState) => {
        formState.date.end = f
        formState.date.error = null
      })
    )
  }

  return (
    <>
      {silenceTemplates && silenceTemplates?.length > 0 && (
        <>
          <Button
            onClick={(e) => {
              e.stopPropagation()
              setClosed(false)
            }}
          >
            Schedule Silence
          </Button>
          {!closed && (
            <Modal
              title="Schedule new silence"
              size="large"
              open={true}
              confirmButtonLabel={!selected || selected?.invalid ? null : "Save"}
              onConfirm={!selected || selected?.invalid ? null : onSubmitForm}
              onCancel={() => setClosed(true)}
            >
              {error && <Message text={error} variant="danger" />}

              <Form className="mt-6">
                {selected && selected?.invalid && (
                  <FormRow>
                    <Message text={`This silence template is invalid. ${selected.invalid}`} variant="error" />
                  </FormRow>
                )}

                <FormRow>
                  <Select
                    required
                    label="Silence Template"
                    value={selected?.id || "Select"}
                    onValueChange={(value) => {
                      onChangeTemplate(value)
                    }}
                  >
                    {silenceTemplates?.map((option) => (
                      <SelectOption key={option.id} id={option.id} label={option.title} value={option.id} />
                    ))}
                  </Select>
                </FormRow>

                {selected && !selected?.invalid && (
                  <FormRow>
                    <Box>{selected?.description}</Box>
                  </FormRow>
                )}
              </Form>

              {selected && !selected?.invalid && (
                <Form>
                  <FormSection>
                    <FormRow>
                      <TextInput
                        required
                        label="Silenced by"
                        value={formState?.createdBy?.value}
                        errortext={formState?.createdBy?.error}
                        onChange={(e) => onInputChanged({ key: "createdBy", value: e.target.value })}
                        disabled={!!user}
                      />
                    </FormRow>
                    <FormRow>
                      <div className="grid gap-2 grid-cols-2">
                        <DateTimePicker
                          value={formState?.date?.start || defaultDate}
                          dateFormat="Y-m-d H:i:S"
                          label="Select a start date"
                          enableTime
                          time_24hr
                          required
                          errortext={formState?.date?.error}
                          onChange={setStartDate}
                          enableSeconds
                        />
                        <DateTimePicker
                          value={formState?.date?.end || defaultDate}
                          dateFormat="Y-m-d H:i:S"
                          label="Select a end date"
                          enableTime
                          time_24hr
                          required
                          errortext={formState?.date?.error}
                          onChange={setEndDate}
                          enableSeconds
                        />
                      </div>
                    </FormRow>

                    <FormRow>
                      <Textarea
                        label="Comment"
                        value={formState.comment.value}
                        errortext={formState.comment.error}
                        onChange={(e) => onInputChanged({ key: "comment", value: e.target.value })}
                        required
                      ></Textarea>
                    </FormRow>
                  </FormSection>

                  {formState?.editable_labels && Object.keys(formState?.editable_labels).length > 0 && (
                    <FormSection>
                      <FormRow>
                        <p>Editable Labels are labels that are editable. You can use regular expressions.</p>
                      </FormRow>

                      <FormRow>
                        <div className="grid gap-2 grid-cols-2">
                          {Object.keys(formState.editable_labels).map((editable_label, index) => (
                            <TextInput
                              required
                              label={editable_label}
                              key={index}
                              id={editable_label}
                              value={formState?.editable_labels[editable_label].value}
                              errortext={formState?.editable_labels[editable_label]?.error}
                              onChange={onChangeLabelValue}
                            />
                          ))}
                        </div>
                      </FormRow>
                    </FormSection>
                  )}

                  {Object.keys(formState?.fixed_labels).length > 0 && (
                    <FormSection>
                      <FormRow>
                        <p>Fixed Labels are labels that are not editable.</p>
                      </FormRow>

                      <FormRow>
                        <Stack gap="2" alignment="start" wrap={true} className="mt-2">
                          {Object.keys(formState.fixed_labels).map((label, index) => (
                            <Pill
                              key={index}
                              pillKey={label}
                              pillKeyLabel={label}
                              pillValue={formState?.fixed_labels[label]}
                              pillValueLabel={formState?.fixed_labels[label]}
                            />
                          ))}
                        </Stack>
                      </FormRow>
                    </FormSection>
                  )}
                </Form>
              )}
            </Modal>
          )}{" "}
        </>
      )}
    </>
  )
}

export default SilenceScheduled
