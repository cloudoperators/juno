/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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
  // @ts-ignore
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

  const onTabSelected = (index: any) => {
    setTabIndex(index)
  }

  return (
    <>
      {loggedIn && !authError ? (
        <>
          <Breadcrumb>
            {/* @ts-ignore */}
            <BreadcrumbItem icon="home" label="Example App Home" />
          </Breadcrumb>

          <Container py>
            {/* @ts-ignore */}
            <MainTabs selectedIndex={tabIndex} onSelect={onTabSelected}>
              {/* @ts-ignore */}
              <TabList>
                {/* @ts-ignore */}
                <Tab>Peaks</Tab>
                {/* @ts-ignore */}
                <Tab>Tab Two</Tab>
              </TabList>

              <TabPanel>
                {/* @ts-ignore */}
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
                {/* @ts-ignore */}
                <Container py px={false}>
                  <p>Test a panel pressing the Button</p>
                  {/* @ts-ignore */}
                  <Button label="Button" onClick={() => setCurrentModal("TestModal")} />
                  <p>Test a select</p>
                  {/* @ts-ignore */}
                  <Select
                    name="filter"
                    className="filter-label-select w-64 mb-0"
                    label="Filter"
                    onChange={(e: any) => console.debug(e)}
                  >
                    {/* @ts-ignore */}
                    <SelectOption value="0" label="Option 0" />
                    {/* @ts-ignore */}
                    <SelectOption value="1" label="Option 1" />
                    {/* @ts-ignore */}
                    <SelectOption value="2" label="Option 2" />
                    {/* @ts-ignore */}
                    <SelectOption value="3" label="Option 3" />
                    {/* @ts-ignore */}
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
