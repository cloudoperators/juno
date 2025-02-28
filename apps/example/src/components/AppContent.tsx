/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react"
import {
  Badge,
  Container,
  ContentHeading,
  Icon,
  MainTabs,
  Stack,
  Tab,
  TabList,
  TabPanel,
  Message,
} from "@cloudoperators/juno-ui-components"
import { useGlobalsActions, useGlobalsTabIndex, useAuthLoggedIn, useAuthError } from "./StoreProvider"
import { useActions, Messages } from "@cloudoperators/juno-messages-provider"

import ModalManager from "./ModalManager"
import PanelManager from "./PanelManager"
import Peaks from "./peaks/Peaks"
import WelcomeView from "./WelcomeView"
import Home from "./Home"

const AppContent: React.FC = () => {
  const { setTabIndex, setCurrentModal } = useGlobalsActions()
  const loggedIn = useAuthLoggedIn()
  const authError = useAuthError()
  const tabIndex = useGlobalsTabIndex()
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

  const onTabSelected = (index: number) => {
    setTabIndex(index)
  }

  return (
    <>
      {loggedIn && !authError ? (
        <>
          <Container py>
            <Message title={"Work in Progress"} dismissible={true}>
              <>
                This is an example, developed to showcase how the Juno UI Component Library may be used to build an app.
                Not all functionality works. See{" "}
                <a
                  href="https://cloudoperators.github.io/juno/?path=/docs/components-badge--docs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Juno UI documentation
                </a>{" "}
                for more info.
              </>
            </Message>
            <MainTabs selectedIndex={tabIndex} onSelect={onTabSelected}>
              <TabList>
                <Tab>Overview</Tab>
                <Tab>Countries</Tab>
              </TabList>
              <TabPanel>
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
              </TabPanel>
              <TabPanel>
                <Home />
              </TabPanel>
            </MainTabs>
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
