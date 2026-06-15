/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { RemediationInput, RemediationTypeValues } from "../../../../generated/graphql"
import { RemediationModal } from "../RemediationModal"

type FalsePositiveModalProps = {
  open: boolean
  onClose: () => void
  onConfirm: (input: RemediationInput) => Promise<{ error: string } | void>
  vulnerability: string
  severity?: string
  service: string
  image: string
}

export const FalsePositiveModal: React.FC<FalsePositiveModalProps> = (props) => (
  <RemediationModal
    {...props}
    title="Mark as False Positive"
    confirmLabel="Mark as False Positive"
    remediationType={RemediationTypeValues.FalsePositive}
    descriptionPlaceholder="Add a description explaining why this is a false positive..."
    expirationHelptext="When this false positive should no longer be considered valid."
  />
)
