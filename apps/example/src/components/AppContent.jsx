/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react"
import {
  Breadcrumb,
  BreadcrumbItem,
  Container,
  Button,
  MainTabs,
  Tab,
  TabList,
  TabPanel,
  Select,
  SelectOption,
} from "@cloudoperators/juno-ui-components"
import { useGlobalsActions, useGlobalsTabIndex, useAuthLoggedIn, useAuthError } from "./StoreProvider"
import { useActions, Messages } from "@cloudoperators/juno-messages-provider"
import ModalManager from "./ModalManager"
import PanelManager from "./PanelManager"
import Peaks from "./peaks/Peaks"
import WelcomeView from "./WelcomeView"

const AppContent = () => {
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
  }, [authError])

  const onTabSelected = (index) => {
    setTabIndex(index)
  }

  return (
    <>
      {loggedIn && !authError ? (
        <>
          <Breadcrumb>
            <BreadcrumbItem icon="home" label="Example App Home" />
          </Breadcrumb>

          <Container py>
            <MainTabs selectedIndex={tabIndex} onSelect={onTabSelected}>
              <TabList>
                <Tab>Peaks</Tab>
                <Tab>Tab Two</Tab>
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
                <Container py px={false}>
                  <p>Test a panel pressing the Button</p>
                  <Button label="Button" onClick={() => setCurrentModal("TestModal")} />
                  <p>Test a select</p>
                  <Select
                    name="filter"
                    className="filter-label-select w-64 mb-0"
                    label="Filter"
                    onChange={(e) => console.debug(e)}
                  >
                    <SelectOption value="0" label="Option 0" />
                    <SelectOption value="1" label="Option 1" />
                    <SelectOption value="2" label="Option 2" />
                    <SelectOption value="3" label="Option 3" />
                    <SelectOption value="4" label="Option 4" />
                  </Select>
                </Container>
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
