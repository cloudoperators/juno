/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import { PortalProvider, Toast } from "@cloudoperators/juno-ui-components"

import ActionButtons from "../../common/ActionButtons"
import usePeakActions from "../../hooks/usePeakActions"
import DeleteConfirmationModal from "../../common/DeleteConfirmationModal"

import { PeaksListItemProps } from "./PeaksListItem"

const PeaksListItemActions: React.FC<PeaksListItemProps> = ({ peak }) => {
  const [isOpen, setOpen] = useState(false)
  const [showToast, setShowToast] = useState(false)

  const { handleEdit, handleDelete } = usePeakActions()

  const open = () => setOpen(true)
  const close = () => setOpen(false)

  const handleDeletePeak = () => {
    close()
    setShowToast(true)
    handleDelete()
  }

  const handleToastDismiss = () => setShowToast(false)

  return (
    <>
      <ActionButtons onEdit={() => handleEdit(peak.id)} onDelete={open} linkUrl={peak.url} appearance="icon" />
      <PortalProvider.Portal>
        <DeleteConfirmationModal
          isOpen={isOpen}
          onClose={close}
          onConfirm={handleDeletePeak}
          title={`Delete ${peak.name}?`}
        />
      </PortalProvider.Portal>
      <PortalProvider.Portal>
        {/* WARNING: Provisional Toast component, not redy for use as notifications manager missing. */}
        {showToast && (
          <Toast
            onDismiss={handleToastDismiss}
            text={`${peak.name} was deleted.`}
            style={{ position: "fixed", top: "20px", right: "20px", zIndex: 1000 }}
          />
        )}
      </PortalProvider.Portal>
    </>
  )
}

export default PeaksListItemActions
