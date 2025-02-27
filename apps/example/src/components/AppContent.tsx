/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react"
import { Container } from "@cloudoperators/juno-ui-components"
import { useAuthLoggedIn, useAuthError } from "./StoreProvider"
import { useActions, Messages } from "@cloudoperators/juno-messages-provider"

import ModalManager from "./ModalManager"
import PanelManager from "./PanelManager"
import Peaks from "./peaks/Peaks"
import WelcomeView from "./WelcomeView"

const AppContent: React.FC = () => {
  const loggedIn = useAuthLoggedIn()
  const authError = useAuthError()
  const { addMessage } = useActions()

  // set an error message when oidc fails
  useEffect(() => {
    if (authError) {
      addMessage({
        variant: "error",
        text: JSON.stringify(authError),
      })
    }
  }, [authError, addMessage])

  return (
    <>
      {loggedIn && !authError ? (
        <>
          {/* <Breadcrumb>
            <BreadcrumbItem icon="home" label="Example App Home" />
          </Breadcrumb> */}
          <Container py>
            <Container py px={false}>
              {/* Set the background graphic using tailwind background image syntax as below. The image must exist at the specified location in your app */}
              {/*<IntroBox variant="hero" heroImage="bg-[url('img/app_bg_example.svg')]">
                  This is the fancy introbox variant for apps that have some app specific flavor branding with a special background graphic.
                </IntroBox> */}
              {/* Messages always at the top of the content area or if there is a hero introbox directly underneath that */}
              <Messages className="pb-6" />
              <PanelManager />
              <Peaks />
            </Container>
            <ModalManager />
          </Container>
        </>
      ) : (
        <WelcomeView />
      )}
    </>
  )
}

export default AppContent
