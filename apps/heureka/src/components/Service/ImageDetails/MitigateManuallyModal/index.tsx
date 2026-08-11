/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { RemediationInput, RemediationTypeValues } from "../../../../generated/graphql"
import { RemediationModal } from "../RemediationModal"

type MitigateManuallyModalProps = {
  open: boolean
  onClose: () => void
  onConfirm: (input: RemediationInput) => Promise<{ error: string } | void>
  vulnerability: string
  severity?: string
  service: string
  image: string
}

export const MitigateManuallyModal: React.FC<MitigateManuallyModalProps> = (props) => (
  <RemediationModal
    {...props}
    title="Mitigate Manually"
    confirmLabel="Mitigate Manually"
    remediationType={RemediationTypeValues.Mitigation}
    descriptionPlaceholder="Add a description explaining the manual mitigation applied..."
    expirationHelptext="When this mitigation should no longer be considered valid."
  />
)
