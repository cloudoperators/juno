/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Route, Switch } from "wouter"
import { Container, ContentHeading } from "@cloudoperators/juno-ui-components"

const AppContent = () => {
  return (
    <Container py>
      {/*Routes below are matched exclusively - the first matched route gets rendered*/}
      <Switch>
        <Route path="/" component={() => <div>Home page!</div>} />
        <Route path="admin/:name">
          {(params) => (
            <>
              <ContentHeading>
                <p>{params.name}!</p>
              </ContentHeading>{" "}
              Content goes here...
            </>
          )}
        </Route>

        {/* Default route in a switch */}
        <Route>404: No such page!</Route>
      </Switch>
    </Container>
  )
}

export default AppContent
