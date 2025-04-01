/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Modal, ModalFooter, Button, ButtonRow } from "@cloudoperators/juno-ui-components"
import PeakForm from "./PeakForm"

interface CreatePeakModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  title: string
}

const SAVE_LABEL = "Save"
const CANCEL_LABEL = "Cancel"

const CreatePeakModal: React.FC<CreatePeakModalProps> = ({ isOpen, onClose, title }) => (
  <Modal title={title} open={isOpen} modalFooter={undefined} size="large" closeable={false}>
    <PeakForm hasButtons={false} closeCallback={onClose} />
  </Modal>
)

export default CreatePeakModal
