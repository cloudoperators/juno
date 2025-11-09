/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Modal } from "@cloudoperators/juno-ui-components"
import PeakForm from "./PeakForm"

interface CreatePeakModalProps {
  isOpen: boolean
  title: string
  onClose: () => void
}

const CreatePeakModal: React.FC<CreatePeakModalProps> = ({ isOpen, title, onClose }) => (
  <Modal title={title} open={isOpen} size="large" closeable={false}>
    <PeakForm closeCallback={onClose} />
  </Modal>
)

export default CreatePeakModal
