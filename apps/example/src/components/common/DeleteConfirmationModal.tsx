/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Modal, ModalFooter, Button, ButtonRow } from "@cloudoperators/juno-ui-components"

interface DeleteConfirmationModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  title: string
}

const DELETE_LABEL = "Delete"
const CANCEL_LABEL = "Cancel"
const DELETION_WARNING = "This will permanently delete this peak. You cannot undo this action."

const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({ isOpen, onClose, onConfirm, title }) => (
  <Modal
    title={title}
    open={isOpen}
    modalFooter={
      <ModalFooter className="flex justify-end">
        <ButtonRow>
          <Button onClick={onClose} label={CANCEL_LABEL} />
          <Button onClick={onConfirm} label={DELETE_LABEL} variant="primary-danger" />
        </ButtonRow>
      </ModalFooter>
    }
  >
    {DELETION_WARNING}
  </Modal>
)

export default DeleteConfirmationModal
