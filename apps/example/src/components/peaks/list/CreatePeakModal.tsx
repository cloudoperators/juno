/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Modal } from "@cloudoperators/juno-ui-components"
import PeakForm from "./PeakForm"

interface CreatePeakModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
}

const CreatePeakModal: React.FC<CreatePeakModalProps> = ({ isOpen, onClose, title }) => (
  <Modal title={title} open={isOpen} modalFooter={undefined} size="large" closeable={false}>
    <PeakForm hasButtons={false} closeCallback={onClose} />
  </Modal>
)

export default CreatePeakModal
