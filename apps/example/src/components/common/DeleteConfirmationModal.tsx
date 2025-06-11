/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Modal, ModalFooter, Button, Stack } from "@cloudoperators/juno-ui-components"
import { DEFAULT_SMALL_APP_MARGIN } from "../constants"

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
      <ModalFooter>
        <Stack direction="horizontal" gap={DEFAULT_SMALL_APP_MARGIN} distribution="end" className="w-full">
          <Button onClick={onClose} label={CANCEL_LABEL} />
          <Button onClick={onConfirm} label={DELETE_LABEL} variant="primary-danger" />
        </Stack>
      </ModalFooter>
    }
  >
    {DELETION_WARNING}
  </Modal>
)

export default DeleteConfirmationModal
