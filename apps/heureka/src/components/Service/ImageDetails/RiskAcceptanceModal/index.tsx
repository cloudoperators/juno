/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { RemediationInput, RemediationTypeValues } from "../../../../generated/graphql"
import { RemediationModal } from "../RemediationModal"

type RiskAcceptanceModalProps = {
  open: boolean
  onClose: () => void
  onConfirm: (input: RemediationInput) => Promise<{ error: string } | void>
  vulnerability: string
  severity?: string
  service: string
  image: string
}

export const RiskAcceptanceModal: React.FC<RiskAcceptanceModalProps> = (props) => (
  <RemediationModal
    {...props}
    title="Accept Risk"
    confirmLabel="Accept Risk"
    remediationType={RemediationTypeValues.RiskAccepted}
    descriptionPlaceholder="Add a description explaining the reason for accepting this risk..."
    expirationHelptext="When this risk acceptance should no longer be considered valid."
    sourceTicketRequired
  />
)
