/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Button, Panel, PanelFooter } from "juno-ui-components"
import { useCertIsFormSubmitting } from "../hooks/useStore"

const NewCertificateFormPanelFooter = ({ onCancel, onSave }) => {
  const isFormSubmitting = useCertIsFormSubmitting()
  return (
    <PanelFooter>
      <Button onClick={onCancel} variant="subdued" disabled={isFormSubmitting}>
        Cancel
      </Button>
      <Button
        className="ml-2"
        onClick={onSave}
        variant="primary"
        disabled={isFormSubmitting}
        progress={isFormSubmitting}
      >
        Create
      </Button>
    </PanelFooter>
  )
}

export default NewCertificateFormPanelFooter
