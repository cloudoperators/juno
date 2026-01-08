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

  const handleConfirm = async () => {
    setIsSubmitting(true)
    try {
      const input: RemediationInput = {
        type: RemediationTypeValues.FalsePositive,
        vulnerability,
        service,
        image,
        description: description || undefined,
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
    onClose()
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
            <Button onClick={handleConfirm} label={CONFIRM_LABEL} variant="primary" disabled={isSubmitting} />
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
            label="Description (optional)"
            placeholder="Add a description explaining why this is a false positive..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
          />
        </div>
      </Stack>
    </Modal>
  )
}
