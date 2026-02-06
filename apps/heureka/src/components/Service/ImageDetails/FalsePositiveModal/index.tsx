/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import {
  Modal,
  ModalFooter,
  Button,
  Stack,
  Textarea,
  DateTimePicker,
  Message,
} from "@cloudoperators/juno-ui-components"
import { RemediationInput, RemediationTypeValues, SeverityValues } from "../../../../generated/graphql"

type FalsePositiveModalProps = {
  open: boolean
  onClose: () => void
  onConfirm: (input: RemediationInput) => Promise<void>
  vulnerability: string
  severity?: string
  service: string
  image: string
  /** Error message to show when createRemediation fails. Shown above the form content. */
  errorMessage?: string | null
}

const CONFIRM_LABEL = "Mark as False Positive"
const CANCEL_LABEL = "Cancel"

const toSeverityValue = (severity: string): SeverityValues | undefined => {
  if (!severity) return undefined
  const normalized = severity.charAt(0).toUpperCase() + severity.slice(1).toLowerCase()
  const value = normalized as SeverityValues
  return Object.values(SeverityValues).includes(value) ? value : undefined
}

export const FalsePositiveModal: React.FC<FalsePositiveModalProps> = ({
  open,
  onClose,
  onConfirm,
  vulnerability,
  severity,
  service,
  image,
  errorMessage,
}) => {
  const [description, setDescription] = useState<string>("")
  const [expirationDate, setExpirationDate] = useState<Date | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [descriptionError, setDescriptionError] = useState<string>("")

  const handleConfirm = async () => {
    // Validate description
    if (!description.trim()) {
      setDescriptionError("Description is required")
      return
    }

    setDescriptionError("")
    setIsSubmitting(true)
    try {
      const input: RemediationInput = {
        type: RemediationTypeValues.FalsePositive,
        vulnerability,
        service,
        image,
        description: description.trim(),
        ...(severity && { severity: toSeverityValue(severity) }),
        ...(expirationDate && { expirationDate: expirationDate.toISOString() }),
      }
      await onConfirm(input)
      setDescription("")
      setExpirationDate(null)
    } catch (error) {
      console.error("Failed to create remediation:", error)
      // Error is shown in modal via errorMessage from parent
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    setDescription("")
    setExpirationDate(null)
    setDescriptionError("")
    onClose()
  }

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value)
    // Clear error when user starts typing
    if (descriptionError) {
      setDescriptionError("")
    }
  }

  return (
    <Modal
      title="Mark as False Positive"
      open={open}
      onCancel={handleClose}
      modalFooter={
        <ModalFooter>
          <Stack direction="horizontal" gap="2" distribution="end" className="w-full">
            <Button onClick={handleClose} label={CANCEL_LABEL} disabled={isSubmitting} />
            <Button
              onClick={handleConfirm}
              label={CONFIRM_LABEL}
              variant="primary"
              disabled={isSubmitting || !description.trim()}
            />
          </Stack>
        </ModalFooter>
      }
    >
      <Stack gap="4" direction="vertical">
        {errorMessage && <Message text={errorMessage} variant="error" />}
        <div>
          <strong>Vulnerability:</strong> {vulnerability}
        </div>
        <div>
          <strong>Service:</strong> {service}
        </div>
        <div>
          <strong>Image:</strong> {image}
        </div>
        <div>
          <DateTimePicker
            label="Expiration Date"
            value={expirationDate ?? undefined}
            onChange={(dates) => setExpirationDate(dates?.[0] ?? null)}
            minDate="today"
            helptext="Optional. When this false positive should no longer be considered valid."
          />
        </div>
        <div>
          <Textarea
            label="Description"
            placeholder="Add a description explaining why this is a false positive..."
            value={description}
            onChange={handleDescriptionChange}
            rows={4}
            required
            invalid={!!descriptionError}
            errortext={descriptionError || ""}
          />
        </div>
      </Stack>
    </Modal>
  )
}
