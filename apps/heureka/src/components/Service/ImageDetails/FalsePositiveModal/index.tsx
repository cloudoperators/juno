/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from "react"
import {
  Modal,
  ModalFooter,
  Button,
  Stack,
  Textarea,
  TextInput,
  DateTimePicker,
  Message,
} from "@cloudoperators/juno-ui-components"
import { RemediationInput, RemediationTypeValues, SeverityValues } from "../../../../generated/graphql"
import { useAuthUserId } from "../../../../App"

type FalsePositiveModalProps = {
  open: boolean
  onClose: () => void
  onConfirm: (input: RemediationInput) => Promise<{ error: string } | void>
  vulnerability: string
  severity?: string
  service: string
  image: string
  /** Error message to show when createRemediation fails. */
  errorMessage?: string | null
  /** Called when submit fails so the parent can set errorMessage. */
  onSetError?: (message: string | null) => void
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
  onSetError,
}) => {
  const authUserId = useAuthUserId()
  const [description, setDescription] = useState<string>("")
  const [manualUserId, setManualUserId] = useState<string>("")
  const [expirationDate, setExpirationDate] = useState<Date | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [descriptionError, setDescriptionError] = useState<string>("")
  const [userIdError, setUserIdError] = useState<string>("")
  const isMountedRef = useRef(true)

  const manualUserIdTrimmed = manualUserId.trim()
  const remediatedBy = authUserId ?? (manualUserIdTrimmed || undefined)
  const isUserIdValid = !!remediatedBy

  useEffect(() => {
    return () => {
      isMountedRef.current = false
    }
  }, [])

  const descriptionTrimmed = description.trim()

  const handleConfirm = async () => {
    if (!descriptionTrimmed) {
      setDescriptionError("Description is required")
      return
    }
    if (!remediatedBy) {
      setUserIdError("User ID is required")
      return
    }

    setDescriptionError("")
    setUserIdError("")
    setIsSubmitting(true)
    try {
      const input: RemediationInput = {
        type: RemediationTypeValues.FalsePositive,
        vulnerability,
        service,
        image,
        description: descriptionTrimmed,
        ...(remediatedBy && { remediatedBy }),
        ...(severity && { severity: toSeverityValue(severity) }),
        ...(expirationDate && { expirationDate: expirationDate.toISOString() }),
      }
      const result = await onConfirm(input)
      if (isMountedRef.current) {
        if (result?.error) {
          onSetError?.(result.error)
        } else {
          setDescription("")
          setManualUserId("")
          setExpirationDate(null)
          onClose()
        }
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to create remediation"
      if (isMountedRef.current) {
        onSetError?.(message)
      }
    } finally {
      if (isMountedRef.current) {
        setIsSubmitting(false)
      }
    }
  }

  const handleClose = () => {
    setDescription("")
    setManualUserId("")
    setExpirationDate(null)
    setDescriptionError("")
    setUserIdError("")
    onSetError?.(null)
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
              disabled={isSubmitting || !descriptionTrimmed || !isUserIdValid}
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
          <TextInput
            label="User ID"
            value={authUserId ?? manualUserId}
            onChange={(e) => {
              setManualUserId(e.target.value)
              if (userIdError) setUserIdError("")
            }}
            disabled={!!authUserId}
            required
            invalid={!!userIdError}
            errortext={userIdError}
            placeholder={authUserId ? undefined : "Enter your user ID"}
            helptext={authUserId ? "User ID from current session (read-only)." : "Enter your user ID."}
          />
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
            rows={14}
            required
            invalid={!!descriptionError}
            errortext={descriptionError || ""}
          />
        </div>
      </Stack>
    </Modal>
  )
}
