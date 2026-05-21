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

type RemediationModalProps = {
  open: boolean
  onClose: () => void
  onConfirm: (input: RemediationInput) => Promise<{ error: string } | void>
  vulnerability: string
  severity?: string
  service: string
  image: string
  title: string
  confirmLabel: string
  remediationType: RemediationTypeValues
  descriptionPlaceholder: string
  expirationHelptext: string
  showSourceTicket?: boolean
  /** When true: source ticket field is shown as required, validated, and sent as the `url` field (not embedded in description). */
  sourceTicketRequired?: boolean
}

const EMPTY_FORM = { description: "", manualUserId: "", sourceTicket: "", expirationDate: null as Date | null }
const EMPTY_ERRORS = { description: "", userId: "", sourceTicket: "", expirationDate: "" }

const toSeverityValue = (severity: string): SeverityValues | undefined => {
  if (!severity) return undefined
  const normalized = severity.charAt(0).toUpperCase() + severity.slice(1).toLowerCase()
  const value = normalized as SeverityValues
  return Object.values(SeverityValues).includes(value) ? value : undefined
}

export const RemediationModal: React.FC<RemediationModalProps> = ({
  open,
  onClose,
  onConfirm,
  vulnerability,
  severity,
  service,
  image,
  title,
  confirmLabel,
  remediationType,
  descriptionPlaceholder,
  expirationHelptext,
  showSourceTicket = false,
  sourceTicketRequired = false,
}) => {
  const auth = useAuth()
  const authUserId = auth.status === "authenticated" ? auth.userId || auth.userName : null
  const [form, setForm] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState(EMPTY_ERRORS)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [apiError, setApiError] = useState<string | null>(null)
  const isMountedRef = useRef(true)

  const manualUserIdTrimmed = form.manualUserId.trim()
  const remediatedBy = authUserId ?? (manualUserIdTrimmed || undefined)
  const isUserIdValid = !!remediatedBy

  useEffect(() => {
    isMountedRef.current = true
    return () => {
      isMountedRef.current = false
    }
  }, [])

  useEffect(() => {
    if (!open) {
      setForm(EMPTY_FORM)
      setErrors(EMPTY_ERRORS)
      setApiError(null)
    }
  }, [open])

  const descriptionTrimmed = form.description.trim()
  const sourceTicketTrimmed = form.sourceTicket.trim()

  const buildDescription = () => {
    if (showSourceTicket && !sourceTicketRequired && sourceTicketTrimmed) {
      return `Source Ticket: ${sourceTicketTrimmed}\n\n${descriptionTrimmed}`
    }
    return descriptionTrimmed
  }

  const handleConfirm = async () => {
    if (!descriptionTrimmed) {
      setErrors((prev) => ({ ...prev, description: "Description is required" }))
      return
    }
    if (!remediatedBy) {
      setErrors((prev) => ({ ...prev, userId: "User ID is required" }))
      return
    }
    if (sourceTicketRequired && !sourceTicketTrimmed) {
      setErrors((prev) => ({ ...prev, sourceTicket: "Jira ticket is required" }))
      return
    }
    if (!form.expirationDate) {
      setErrors((prev) => ({ ...prev, expirationDate: "Expiration date is required" }))
      return
    }

    setErrors(EMPTY_ERRORS)
    setIsSubmitting(true)
    try {
      const severityValue = severity ? toSeverityValue(severity) : undefined
      const input: RemediationInput = {
        type: remediationType,
        vulnerability,
        service,
        image,
        description: buildDescription(),
        ...(remediatedBy && { remediatedBy }),
        ...(severityValue !== undefined && { severity: severityValue }),
        expirationDate: form.expirationDate.toISOString(),
        ...(sourceTicketRequired && sourceTicketTrimmed ? { url: sourceTicketTrimmed } : {}),
      }
      const result = await onConfirm(input)
      if (result?.error) {
        setApiError(result.error)
      } else if (isMountedRef.current) {
        setForm(EMPTY_FORM)
        onClose()
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to create remediation"
      setApiError(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    setForm(EMPTY_FORM)
    setErrors(EMPTY_ERRORS)
    setApiError(null)
    onClose()
  }

  return (
    <Modal
      title={title}
      open={open}
      onCancel={handleClose}
      modalFooter={
        <ModalFooter>
          <Stack direction="horizontal" gap="2" distribution="end" className="w-full">
            <Button onClick={handleClose} label="Cancel" disabled={isSubmitting} />
            <Button
              onClick={handleConfirm}
              label={confirmLabel}
              variant="primary"
              disabled={
                isSubmitting ||
                !descriptionTrimmed ||
                !isUserIdValid ||
                !form.expirationDate ||
                (sourceTicketRequired && !sourceTicketTrimmed)
              }
            />
          </Stack>
        </ModalFooter>
      }
    >
      <Stack gap="4" direction="vertical">
        {apiError && <Message text={apiError} variant="error" />}
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
            value={authUserId ?? form.manualUserId}
            onChange={(e) => {
              setForm((prev) => ({ ...prev, manualUserId: e.target.value }))
              if (errors.userId) setErrors((prev) => ({ ...prev, userId: "" }))
            }}
            disabled={!!authUserId}
            required
            invalid={!!errors.userId}
            errortext={errors.userId}
            placeholder={authUserId ? undefined : "Enter your user ID"}
            helptext={authUserId ? "User ID from current session (read-only)." : "Enter your user ID."}
          />
        </div>
        {(showSourceTicket || sourceTicketRequired) && (
          <div>
            <TextInput
              label="Jira Ticket / Risk Acceptance Source Ticket"
              value={form.sourceTicket}
              onChange={(e) => {
                setForm((prev) => ({ ...prev, sourceTicket: e.target.value }))
                if (errors.sourceTicket) setErrors((prev) => ({ ...prev, sourceTicket: "" }))
              }}
              placeholder="e.g. JIRA-1234"
              required={sourceTicketRequired}
              invalid={!!errors.sourceTicket}
              errortext={errors.sourceTicket}
              helptext={
                sourceTicketRequired
                  ? "Reference ticket for this risk acceptance decision."
                  : "Optional. Reference ticket for this risk acceptance decision."
              }
            />
          </div>
        )}
        <div>
          <DateTimePicker
            label="Expiration Date"
            value={form.expirationDate ?? undefined}
            onChange={(dates) => {
              setForm((prev) => ({ ...prev, expirationDate: dates?.[0] ?? null }))
              if (errors.expirationDate) setErrors((prev) => ({ ...prev, expirationDate: "" }))
            }}
            minDate="today"
            required
            invalid={!!errors.expirationDate}
            errortext={errors.expirationDate}
            helptext={expirationHelptext}
          />
        </div>
        <div>
          <Textarea
            label="Description"
            placeholder={descriptionPlaceholder}
            value={form.description}
            onChange={(e) => {
              setForm((prev) => ({ ...prev, description: e.target.value }))
              if (errors.description) setErrors((prev) => ({ ...prev, description: "" }))
            }}
            rows={14}
            required
            invalid={!!errors.description}
            errortext={errors.description || ""}
          />
        </div>
      </Stack>
    </Modal>
  )
}
