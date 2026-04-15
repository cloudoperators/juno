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
import { useAuth } from "@cloudoperators/greenhouse-auth-provider"

type RiskAcceptanceModalProps = {
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

const CONFIRM_LABEL = "Mark as Risk Accepted"
const CANCEL_LABEL = "Cancel"

const toSeverityValue = (severity: string): SeverityValues | undefined => {
  if (!severity) return undefined
  const normalized = severity.charAt(0).toUpperCase() + severity.slice(1).toLowerCase()
  const value = normalized as SeverityValues
  return Object.values(SeverityValues).includes(value) ? value : undefined
}

export const RiskAcceptanceModal: React.FC<RiskAcceptanceModalProps> = ({
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
  const auth = useAuth()
  const authUserId = auth.status === "authenticated" ? auth.userId : null
  const [description, setDescription] = useState<string>("")
  const [manualUserId, setManualUserId] = useState<string>("")
  const [sourceTicket, setSourceTicket] = useState<string>("")
  const [expirationDate, setExpirationDate] = useState<Date | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [descriptionError, setDescriptionError] = useState<string>("")
  const [userIdError, setUserIdError] = useState<string>("")
  const [expirationDateError, setExpirationDateError] = useState<string>("")
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
  const sourceTicketTrimmed = sourceTicket.trim()

  const buildDescription = () => {
    if (sourceTicketTrimmed) {
      return `Source Ticket: ${sourceTicketTrimmed}\n\n${descriptionTrimmed}`
    }
    return descriptionTrimmed
  }

  const handleConfirm = async () => {
    if (!descriptionTrimmed) {
      setDescriptionError("Description is required")
      return
    }
    if (!remediatedBy) {
      setUserIdError("User ID is required")
      return
    }
    if (!expirationDate) {
      setExpirationDateError("Expiration date is required")
      return
    }

    setDescriptionError("")
    setUserIdError("")
    setExpirationDateError("")
    setIsSubmitting(true)
    try {
      const input: RemediationInput = {
        type: RemediationTypeValues.RiskAccepted,
        vulnerability,
        service,
        image,
        description: buildDescription(),
        ...(remediatedBy && { remediatedBy }),
        ...(severity && { severity: toSeverityValue(severity) }),
        expirationDate: expirationDate.toISOString(),
      }
      const result = await onConfirm(input)
      if (isMountedRef.current) {
        if (result?.error) {
          onSetError?.(result.error)
        } else {
          setDescription("")
          setManualUserId("")
          setSourceTicket("")
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
    setSourceTicket("")
    setExpirationDate(null)
    setDescriptionError("")
    setUserIdError("")
    setExpirationDateError("")
    onSetError?.(null)
    onClose()
  }

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value)
    if (descriptionError) {
      setDescriptionError("")
    }
  }

  return (
    <Modal
      title="Mark as Risk Accepted"
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
              disabled={isSubmitting || !descriptionTrimmed || !isUserIdValid || !expirationDate}
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
          <TextInput
            label="Jira Ticket / Risk Acceptance Source Ticket"
            value={sourceTicket}
            onChange={(e) => setSourceTicket(e.target.value)}
            placeholder="e.g. JIRA-1234"
            helptext="Optional. Reference ticket for this risk acceptance decision."
          />
        </div>
        <div>
          <DateTimePicker
            label="Expiration Date"
            value={expirationDate ?? undefined}
            onChange={(dates) => {
              setExpirationDate(dates?.[0] ?? null)
              if (expirationDateError) setExpirationDateError("")
            }}
            minDate="today"
            required
            invalid={!!expirationDateError}
            errortext={expirationDateError}
            helptext="When this risk acceptance should no longer be considered valid."
          />
        </div>
        <div>
          <Textarea
            label="Description"
            placeholder="Add a description explaining the reason for accepting this risk..."
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
