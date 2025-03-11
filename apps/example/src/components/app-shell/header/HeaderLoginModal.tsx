/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Modal, Button, Stack, Container } from "@cloudoperators/juno-ui-components"
import JunoUILogo from "../../../assets/juno_logo.svg?react"

interface HeaderLoginModalProps {
  login: () => void
}

const WELCOME_TITLE = "Juno UI Peaks Monitoring Dashboard"
const WELCOME_MESSAGE = "Log in to get access to the peaks of the world!"
const LOGIN_BUTTON_LABEL = "Log In"

const HeaderLoginModal: React.FC<HeaderLoginModalProps> = ({ login }) => {
  const [isOpen] = React.useState(true) // Modal should be initially open

  return (
    <Modal title={WELCOME_TITLE} open={isOpen} closeable={false} size="large">
      <Container py={true}>
        <Stack direction={"vertical"} gap={"8"} alignment={"center"}>
          <JunoUILogo />
          {WELCOME_MESSAGE}
          <Button label={LOGIN_BUTTON_LABEL} variant="primary" onClick={login} className="w-full mb-3" />
        </Stack>
      </Container>
    </Modal>
  )
}

export default HeaderLoginModal
