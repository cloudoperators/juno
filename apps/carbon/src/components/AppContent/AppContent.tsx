/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Redirect, Route, Switch } from "wouter"
import Navigation from "../Navigation"
import Extension from "../Extension/Extension"
import NoExtensionFound from "./NoExtensionFound"

// @ts-ignore
const AppContent = ({ extensions }: { extensions: Extension[] }) => (
  <div className="h-screen flex">
    <Navigation extensions={extensions} />
    <div className="flex-1 bg-theme-global-bg" data-testid="extension-container">
      <Switch>
        <Route path="/">
          <Redirect to={extensions[0].url} />
        </Route>
        {extensions.map((extension) => (
          <Route key={extension.name} path={extension.url}>
            <Extension extension={extension} />
          </Route>
        ))}
        <Route>
          <NoExtensionFound />
        </Route>
      </Switch>
    </div>
  </div>
)

export default AppContent
