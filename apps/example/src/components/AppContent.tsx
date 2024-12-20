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
  // @ts-expect-error TS(2307): Cannot find module '@cloudoperators/juno-ui-compon... Remove this comment to see the full error message
} from "@cloudoperators/juno-ui-components"
// @ts-expect-error TS(6142): Module './StoreProvider' was resolved to '/Users/I... Remove this comment to see the full error message
import { useGlobalsActions, useGlobalsTabIndex, useAuthLoggedIn, useAuthError } from "./StoreProvider"
// @ts-expect-error TS(7016): Could not find a declaration file for module '@clo... Remove this comment to see the full error message
import { useActions, Messages } from "@cloudoperators/juno-messages-provider"
// @ts-expect-error TS(6142): Module './ModalManager' was resolved to '/Users/I5... Remove this comment to see the full error message
import ModalManager from "./ModalManager"
// @ts-expect-error TS(6142): Module './PanelManager' was resolved to '/Users/I5... Remove this comment to see the full error message
import PanelManager from "./PanelManager"
// @ts-expect-error TS(6142): Module './peaks/Peaks' was resolved to '/Users/I53... Remove this comment to see the full error message
import Peaks from "./peaks/Peaks"
// @ts-expect-error TS(6142): Module './WelcomeView' was resolved to '/Users/I53... Remove this comment to see the full error message
import WelcomeView from "./WelcomeView"

const AppContent = () => {
  // @ts-expect-error TS(2339): Property 'setTabIndex' does not exist on type 'unk... Remove this comment to see the full error message
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

  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return (
    <>
      {loggedIn && !authError ? (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to
          see the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
          provided... Remove this comment to see the full error message
          <Breadcrumb>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to
            see the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
            provided... Remove this comment to see the full error message
            <BreadcrumbItem icon="home" label="Example App Home" />
          </Breadcrumb>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to
          see the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
          provided... Remove this comment to see the full error message
          <Container py>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to
            see the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
            provided... Remove this comment to see the full error message
            <MainTabs selectedIndex={tabIndex} onSelect={onTabSelected}>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment
              to see the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
              provided... Remove this comment to see the full error message
              <TabList>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment
                to see the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
                provided... Remove this comment to see the full error message
                <Tab>Peaks</Tab>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment
                to see the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
                provided... Remove this comment to see the full error message
                <Tab>Tab Two</Tab>
              </TabList>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment
              to see the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
              provided... Remove this comment to see the full error message
              <TabPanel>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment
                to see the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
                provided... Remove this comment to see the full error message
                <Container py px={false}>
                  {/* Set the background graphic using tailwind background image syntax as below. The image must exist at the specified location in your app */}
                  {/*<IntroBox variant="hero" heroImage="bg-[url('img/app_bg_example.svg')]">
                  This is the fancy introbox variant for apps that have some app specific flavor branding with a special background graphic.
                </IntroBox> */}
                  {/* Messages always at the top of the content area or if there is a hero introbox directly underneath that */}
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this
                  comment to see the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
                  flag is provided... Remove this comment to see the full error message
                  <Messages className="pb-6" />
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this
                  comment to see the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
                  flag is provided... Remove this comment to see the full error message
                  <PanelManager />
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this
                  comment to see the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
                  flag is provided... Remove this comment to see the full error message
                  <Peaks />
                </Container>
              </TabPanel>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment
              to see the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
              provided... Remove this comment to see the full error message
              <TabPanel>
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment
                to see the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
                provided... Remove this comment to see the full error message
                <Container py px={false}>
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this
                  comment to see the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
                  flag is provided... Remove this comment to see the full error message
                  <p>Test a panel pressing the Button</p>
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this
                  comment to see the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
                  flag is provided... Remove this comment to see the full error message
                  <Button label="Button" onClick={() => setCurrentModal("TestModal")} />
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this
                  comment to see the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
                  flag is provided... Remove this comment to see the full error message
                  <p>Test a select</p>
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this
                  comment to see the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
                  flag is provided... Remove this comment to see the full error message
                  <Select
                    name="filter"
                    className="filter-label-select w-64 mb-0"
                    label="Filter"
                    onChange={(e: any) => console.debug(e)}
                  >
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this
                    comment to see the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the
                    '--jsx' flag is provided... Remove this comment to see the full error message
                    <SelectOption value="0" label="Option 0" />
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this
                    comment to see the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the
                    '--jsx' flag is provided... Remove this comment to see the full error message
                    <SelectOption value="1" label="Option 1" />
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this
                    comment to see the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the
                    '--jsx' flag is provided... Remove this comment to see the full error message
                    <SelectOption value="2" label="Option 2" />
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this
                    comment to see the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the
                    '--jsx' flag is provided... Remove this comment to see the full error message
                    <SelectOption value="3" label="Option 3" />
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this
                    comment to see the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the
                    '--jsx' flag is provided... Remove this comment to see the full error message
                    <SelectOption value="4" label="Option 4" />
                  </Select>
                </Container>
              </TabPanel>
            </MainTabs>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to
            see the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
            provided... Remove this comment to see the full error message
            <ModalManager />
          </Container>
        </>
      ) : (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <WelcomeView />
      )}
    </>
  )
}

export default AppContent
