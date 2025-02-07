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
  const silences = useSilencesItems()
  // @ts-ignore
  const { setSilences } = useSilencesActions()

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
    onMutate: (data: any) => {
      // @ts-ignore FIXME: Property 'silence' does not exist on type 'unknown'.
      queryClient.cancelQueries("silences")

      const newSilence = { ...data.silence, status: { state: constants.SILENCE_ACTIVE } }
      // @ts-ignore FIXME: Property 'silences' does not exist on type 'unknown'.
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
      // @ts-ignore
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
      // @ts-expect-error TS(2345) FIXME: Argument of type '"Please fix the errors in the fo... Remove this comment to see the full error message
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
      const matcher = {
        name: key,
        // @ts-expect-error TS(7006) FIXME: Parameter 'acc' implicitly has an 'any' type.
        value: value.value,
        isRegex: true,
      }
      // @ts-ignore
      silence.matchers.push(matcher)
    }

    for (const [key, value] of Object.entries(formState.fixed_labels)) {
      const matcher = {
        name: key,
        value: value,
        isRegex: true,
      }
      // @ts-ignore
      silence.matchers.push(matcher)
    }

    // calling createSilence with variable silence: newSilence
    createSilence({ silence: silence })
  }, 200)

  //////
  ////// OnClick

  const onChangeTemplate = (value: any) => {
    // @ts-ignore
    const newSelectedOption = silenceTemplates.find((option: any) => option.id === value)

    const newFormState = {
      ...DEFAULT_FORM_VALUES,
      fixed_labels: newSelectedOption?.fixed_labels || {},
      createdBy: { value: user, error: null },
      editable_labels: newSelectedOption?.editable_labels?.reduce(
        // @ts-expect-error TS(7006) FIXME: Parameter 'acc' implicitly has an 'any' type.
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
    // @ts-ignore
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
    // @ts-ignore
    <>
      {
        /* @ts-ignore */
        renderSilenceScheduledModal(
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
        )
      }
    </>
  )
}

function renderSilenceScheduledModal(
  silenceTemplates: unknown,
  setClosed: React.Dispatch<React.SetStateAction<boolean>>,
  closed: boolean,
  selected: null,
  onSubmitForm: (this: any, ...args: any[]) => void,
  error: null,
  onChangeTemplate: (value: any) => void,
  formState: {
    fixed_labels: {}
    editable_labels: {}
    comment: { value: string; error: null }
    createdBy: { value: string; error: null }
    date: { start: null; end: null; error: null }
  },
  onInputChanged: ({ key, value }: any) => void,
  user: unknown,
  defaultDate: string,
  setStartDate: (e: any, f: any) => void,
  setEndDate: (e: any, f: any) => void,
  onChangeLabelValue: (e: any) => void
) {
  return (
    silenceTemplates &&
    // @ts-ignore
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
            // @ts-expect-error TS(2339) FIXME: Property 'invalid' does not exist on type 'never'.
            confirmButtonLabel={!selected || selected?.invalid ? null : "Save"}
            // @ts-expect-error TS(2339) FIXME: Property 'invalid' does not exist on type 'never'.
            onConfirm={!selected || selected?.invalid ? null : onSubmitForm}
            onCancel={() => setClosed(true)}
          >
            {error && <Message text={error} variant="danger" />}
            <Form className="mt-6">
              {/* @ts-expect-error TS(2339): Property 'invalid' does not exist on type 'never'. // @ts-expect-error */}
              {selected && selected?.invalid && (
                <FormRow>
                  {/* @ts-expect-error TS(2339): Property 'invalid' does not exist on type 'never'. // */}
                  <Message text={`This silence template is invalid. ${selected.invalid}`} variant="error" />
                </FormRow>
              )}
              <FormRow>
                <Select
                  required
                  label="Silence Template"
                  // @ts-expect-error TS(2339) FIXME: Property 'id' does not exist on type 'never'.
                  value={selected?.id || "Select"}
                  onValueChange={(value: any) => {
                    onChangeTemplate(value)
                  }}
                >
                  {// @ts-ignore
                  silenceTemplates?.map((option: any) => (
                    <SelectOption key={option.id} id={option.id} label={option.title} value={option.id} />
                  ))}
                </Select>
              </FormRow>
              {/* @ts-expect-error TS(2339): Property 'invalid' does not exist on type 'never'. // @ts-expect-error */}
              {selected && !selected?.invalid && (
                <FormRow>
                  {/* @ts-expect-error TS(2339): Property 'description' does not exist on type 'nev... Remove this */}
                  <Box>{selected?.description}</Box>
                </FormRow>
              )}
            </Form>
            {/* @ts-expect-error TS(2339): Property 'invalid' does not exist on type 'never'. // @ts-expect-error */}
            {selected && !selected?.invalid && (
              <Form>
                <FormSection>
                  <FormRow>
                    <TextInput
                      required
                      label="Silenced by"
                      value={formState?.createdBy?.value}
                      // @ts-ignore
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
                            // @ts-expect-error TS(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
                            value={formState?.editable_labels[editable_label].value}
                            // @ts-expect-error TS(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
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
                            // @ts-expect-error TS(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
                            pillValue={formState?.fixed_labels[label]}
                            // @ts-expect-error TS(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
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
