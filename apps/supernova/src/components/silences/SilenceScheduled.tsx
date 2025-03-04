/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from "react"
import { produce } from "immer"
import { useActions } from "@cloudoperators/juno-messages-provider"
import constants from "../../constants"
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
import { useGlobalsUsername, useSilenceTemplates, useSilencesItems, useSilencesActions } from "../StoreProvider"
import { SilenceTemplate } from "../../lib/createSilencesSlice"
import { parseError } from "../../helpers"
import { useBoundMutation } from "../../hooks/useBoundMutation"
import { useQueryClient } from "@tanstack/react-query"
import { validateForm } from "./silenceScheduledHelpers"
import { debounce } from "../../helpers"

interface FormState {
  fixed_labels: { [key: string]: string }
  editable_labels: { [key: string]: { value: string; error: string | null } }
  comment: { value: string; error: null }
  createdBy: { value: string; error: null }
  date: { start: string | null; end: string | null; error: string | null }
}

const DEFAULT_FORM_VALUES: FormState = {
  fixed_labels: {},
  editable_labels: {},
  comment: {
    value: "",
    error: null,
  },
  createdBy: {
    value: "",
    error: null,
  },
  date: {
    start: null,
    end: null,
    error: null,
  },
}

const SilenceScheduled = () => {
  const user = useGlobalsUsername()
  const { addMessage } = useActions()
  const silenceTemplates = useSilenceTemplates()
  const [error, setError] = useState<string | null>(null)

  const queryClient = useQueryClient()
  const silences = useSilencesItems()
  const { setSilences } = useSilencesActions()

  // set the selected template
  const [selected, setSelected] = useState<Record<string, any> | null>(null)

  // default time for DateTimePicker

  const defaultDate = useMemo(() => {
    const date = new Date()
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  }, [])

  // Formular which will be used to create the silence
  const [formState, setFormState] = useState<FormState>(DEFAULT_FORM_VALUES)

  const [closed, setClosed] = useState(true)

  const { mutate: createSilence } = useBoundMutation("createSilences", {
    onMutate: (data: any) => {
      queryClient.cancelQueries({ queryKey: ["silences"] })

      const newSilence = { ...data.silence, status: { state: constants.SILENCE_ACTIVE } }
      const newSilences = [...silences, newSilence]

      setSilences({
        items: newSilences,
      })
    },

    onSuccess: (data: any) => {
      setClosed(true)
      addMessage({
        variant: "success",
        text: `A silence object with id ${data?.silenceID} was created successfully. Please note that it may take up
          to 5 minutes for the alert to show up as silenced.`,
      })
    },
    onError: (error: any) => {
      // add a error message in UI
      setError(parseError(error))
    },

    onSettled: () => {
      // Optionale zusätzliche Aktionen, wie das erneute Abrufen von Daten
      queryClient.invalidateQueries({ queryKey: ["silences"] })
    },
  })

  // submit
  const onSubmitForm = debounce(() => {
    // reset errors.
    setError(null)

    // validate form and sets in case of errors messages and stops the submit
    const errorFormState = validateForm(formState)

    if (errorFormState) {
      setFormState(errorFormState)
      setError("Please fix the errors in the form")
      return
    }

    const silence: Record<string, any> = {
      startsAt: formState.date.start,
      endsAt: formState.date.end,
      comment: formState.comment.value,
      createdBy: formState.createdBy.value,
      matchers: [],
    }

    for (const [key, value] of Object.entries(formState.editable_labels)) {
      const matcher = {
        name: key,
        value: value.value,
        isRegex: true,
      }
      silence.matchers.push(matcher)
    }

    for (const [key, value] of Object.entries(formState.fixed_labels)) {
      const matcher = {
        name: key,
        value: value,
        isRegex: true,
      }
      silence.matchers.push(matcher)
    }

    // calling createSilence with variable silence: newSilence
    createSilence({ silence: silence })
  }, 200)

  //////
  ////// OnClick

  const onChangeTemplate = (value: any) => {
    const newSelectedOption: Record<string, any> = silenceTemplates.find((option: any) => option.id === value)

    const newFormState = {
      ...DEFAULT_FORM_VALUES,
      fixed_labels: newSelectedOption?.fixed_labels || {},
      createdBy: { value: user, error: null },
      editable_labels: newSelectedOption?.editable_labels?.reduce(
        (acc: any, label: string) => ({
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

  const onInputChanged = ({ key, value }: any) => {
    setFormState({ ...formState, [key]: { value: value, error: null } })
  }

  // todo delete other input change functions
  const onChangeLabelValue = (e: any) => {
    const editable_label = e.target.id
    setFormState(
      produce((formState: any) => {
        formState.editable_labels[editable_label].value = e.target.value
        formState.editable_labels[editable_label].error = null
      })
    )
  }

  const setStartDate = (e: any, f: any) => {
    setFormState(
      produce((formState: any) => {
        formState.date.start = f
        formState.date.error = null
      })
    )
  }

  const setEndDate = (e: any, f: any) => {
    setFormState(
      produce((formState: any) => {
        formState.date.end = f
        formState.date.error = null
      })
    )
  }
  return (
    <>
      {renderSilenceScheduledModal(
        silenceTemplates,
        setClosed,
        closed,
        selected,
        onSubmitForm,
        error,
        onChangeTemplate,
        formState,
        onInputChanged,
        user,
        defaultDate,
        setStartDate,
        setEndDate,
        onChangeLabelValue
      )}
    </>
  )
}

function renderSilenceScheduledModal(
  silenceTemplates: SilenceTemplate,
  setClosed: React.Dispatch<React.SetStateAction<boolean>>,
  closed: boolean,
  selected: Record<string, any> | null,
  onSubmitForm: (this: any, ...args: any[]) => void,
  error: string | null,
  onChangeTemplate: (value: any) => void,
  formState: FormState,
  onInputChanged: ({ key, value }: any) => void,
  user: unknown,
  defaultDate: string,
  setStartDate: (e: any, f: any) => void,
  setEndDate: (e: any, f: any) => void,
  onChangeLabelValue: (e: any) => void
) {
  return (
    silenceTemplates &&
    silenceTemplates?.length > 0 && (
      <>
        <Button
          onClick={(e: any) => {
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
            confirmButtonLabel={!selected || selected?.invalid ? undefined : "Save"}
            onConfirm={!selected || selected?.invalid ? undefined : onSubmitForm}
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
                  onValueChange={(value: any) => {
                    onChangeTemplate(value)
                  }}
                >
                  {silenceTemplates?.map((option: any) => (
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
                      onChange={(e: any) => onInputChanged({ key: "createdBy", value: e.target.value })}
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
                      onChange={(e: any) => onInputChanged({ key: "comment", value: e.target.value })}
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
    )
  )
}
export default SilenceScheduled
