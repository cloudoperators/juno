/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import { Modal, ModalFooter, Button, Stack, Textarea } from "@cloudoperators/juno-ui-components"
import { RemediationInput, RemediationTypeValues } from "../../../../generated/graphql"

type FalsePositiveModalProps = {
  open: boolean
  onClose: () => void
  onConfirm: (input: RemediationInput) => Promise<void>
  vulnerability: string
  service: string
  image: string
}

const CONFIRM_LABEL = "Mark as False Positive"
const CANCEL_LABEL = "Cancel"

export const FalsePositiveModal: React.FC<FalsePositiveModalProps> = ({
  open,
  onClose,
  onConfirm,
  vulnerability,
  service,
  image,
}) => {
  const [description, setDescription] = useState<string>("")
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
      }
      await onConfirm(input)
      setDescription("")
    } catch (error) {
      console.error("Failed to create remediation:", error)
      // Error handling is done in the parent component
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    setDescription("")
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
          <Textarea
            label="Description *"
            placeholder="Add a description explaining why this is a false positive..."
            value={description}
            onChange={handleDescriptionChange}
            rows={4}
            required
            error={descriptionError || undefined}
          />
        </div>
      </Stack>
    </Modal>
  )
}
