import React, { useState, useEffect, useCallback, ChangeEvent } from "react"
import {
  PanelBody,
  PanelFooter,
  Button,
  Stack,
  Message,
  Modal,
  ModalFooter,
  Form,
  IntroBox,
  TextInput,
  FormRow,
} from "@cloudoperators/juno-ui-components"
import { validateFormField } from "../utils/validateFormFields"
import { PeakFields } from "../../constants"
import { useDebounce } from "../../hooks/useDebounce"

export type TextInputType = "text" | "url"

interface FormState {
  id?: string
  name?: string
  height?: string
  range?: string
  region?: string
  country?: string
  url?: string
}

interface PeakFormProps {
  initialValues?: FormState
  closeCallback: () => void
}

const Errors = {
  INVALID_PEAK: "Invalid peak data. Please correct the name field and try again.",
  CREATION_FAILURE: "Failed to add a new peak",
}

const Hints = {
  MANDATORY_FIELD_SYMBOL: "Mandatory fields are marked with a blue circle.",
  UNSAVED_CHANGES: "You have unsaved changes. Are you sure you want to close and discard them?",
}

const Labels = {
  CANCEL: "Cancel",
  SAVE: "Save",
  KEEP_EDITING: "Keep Editing",
  DISCARD: "Discard Changes",
  UNSAVED_CHANGES: "Unsaved Changes",
}

const INITIAL_VALUES: FormState = {
  id: "",
  name: "",
  height: "",
  range: "",
  region: "",
  country: "",
  url: "",
}

const PeakForm: React.FC<PeakFormProps> = ({ initialValues = INITIAL_VALUES, closeCallback }) => {
  const [formState, setFormState] = useState<FormState>(initialValues)
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [backendError, setBackendError] = useState(false)
  const [isSaveEnabled, setIsSaveEnabled] = useState(false)

  // Determine if the form has changed
  const isFormChanged = useCallback(
    () => JSON.stringify(formState) !== JSON.stringify(initialValues),
    [formState, initialValues]
  )

  // Enable Save once any form field changes
  const debouncedValidation = useDebounce(() => {
    setIsSaveEnabled(isFormChanged())
  }, 300)

  useEffect(() => {
    debouncedValidation()
  }, [formState, debouncedValidation])

  const handleAttrChange = (key: keyof FormState, value: string) => {
    setFormState((prevState) => ({ ...prevState, [key]: value }))
    if (key === "name") {
      setBackendError(false)
    }
    setIsSaveEnabled(true)
  }

  const handleFieldBlur = (key: keyof FormState) => {
    const errorMsg = validateFormField(key, formState[key] || "")
    setErrors((prevErrors) => ({ ...prevErrors, [key]: errorMsg }))
  }

  const handleSubmit = () => {
    if (!isSaveEnabled) return
    setLoading(true)
    setErrorMessage(null)

    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      setBackendError(true)
      setErrorMessage(Errors.INVALID_PEAK)
    }, 2000)
  }

  // Handle Cancel operation, showing modal only if form has changed
  const handleCloseClick = () => {
    if (isFormChanged()) {
      setIsModalOpen(true)
    } else {
      closeCallback()
    }
  }

  // Confirm cancellation
  const handleModalConfirm = () => {
    setIsModalOpen(false)
    closeCallback()
  }

  // Continue editing, dismiss modal
  const handleKeepEditing = () => {
    setIsModalOpen(false)
  }

  return (
    <PanelBody
      footer={
        <PanelFooter>
          <Stack direction="horizontal" gap="2" distribution="end">
            <Button label={Labels.CANCEL} variant="subdued" onClick={handleCloseClick} disabled={loading} />
            <Button
              label={Labels.SAVE}
              variant="primary"
              onClick={handleSubmit}
              progress={loading}
              disabled={!isSaveEnabled || loading}
            />
          </Stack>
        </PanelFooter>
      }
    >
      {errorMessage && <Message title={Errors.CREATION_FAILURE} text={errorMessage} variant="error" className="mb-5" />}
      <IntroBox text={Hints.MANDATORY_FIELD_SYMBOL} />
      <Form>
        {[
          { label: PeakFields.NAME, key: "name", required: true, autoFocus: true, invalid: backendError },
          { label: PeakFields.HEIGHT, key: "height", required: true },
          { label: PeakFields.RANGE, key: "mainrange", required: true },
          { label: PeakFields.REGION, key: "region", required: true },
          { label: PeakFields.COUNTRY, key: "countries", required: true },
          { label: PeakFields.URL, key: "url", type: "url" as TextInputType },
        ].map(({ label, key, type = "text", required, autoFocus, invalid }) => (
          <FormRow key={key}>
            <TextInput
              label={label}
              type={type}
              value={formState[key as keyof FormState] || ""}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleAttrChange(key as keyof FormState, e.target.value)}
              onBlur={() => handleFieldBlur(key as keyof FormState)}
              errortext={errors[key as keyof FormState]}
              maxLength={200}
              disabled={loading}
              required={required}
              autoFocus={autoFocus}
              invalid={invalid}
            />
          </FormRow>
        ))}
      </Form>
      <Modal
        title={Labels.UNSAVED_CHANGES}
        open={isModalOpen}
        modalFooter={
          <ModalFooter className="jn-justify-between jn-items-center" style={{ justifyContent: "flex-end" }}>
            <Stack gap="2">
              <Button label={Labels.KEEP_EDITING} variant="subdued" onClick={handleKeepEditing} />
              <Button label={Labels.DISCARD} variant="primary-danger" onClick={handleModalConfirm} />
            </Stack>
          </ModalFooter>
        }
      >
        <div>{Hints.UNSAVED_CHANGES}</div>
      </Modal>
    </PanelBody>
  )
}

export default PeakForm
