/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Modal, Button, Stack, Container } from "@cloudoperators/juno-ui-components"

import useAuthStore from "../../../store/useAuthStore"
import JunoUILogo from "../../../assets/juno_logo.svg?react"

import { APP_NAME } from "../../constants"

const LOGIN_BUTTON_LABEL = "Log In"
const WELCOME_MESSAGE = "Log in to get access to the peaks of the world!"

const HeaderLoginModal: React.FC = () => {
  const setIsUserAuthenticated = useAuthStore((state) => state.setIsUserAuthenticated)

  const login = () => {
    setIsUserAuthenticated(true)
  }

  return (
    <Modal title={APP_NAME} open closeable={false} size="large">
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
