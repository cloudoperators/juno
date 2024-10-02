/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import WelcomeView from "./WelcomeView"
import { Link, Route, Switch } from "wouter"

const AppContent = () => {
  return (
    <>
      <Link href="/admin/teams">Teams View</Link>
      <Link href="/admin/org">Org View</Link>
      <Link href="/admin/cluster">Cluster View</Link>
      <Link href="/admin/secret">Secret View</Link>
      <Link href="/admin/plugin">Plugin View</Link>
      {/* 
      Routes below are matched exclusively -
      the first matched route gets rendered
    */}
      <Switch>
        <Route path="/welcome" component={WelcomeView} />
        <Route path="admin/:name">{(params) => <>Hello, {params.name}!</>}</Route>

        {/* Default route in a switch */}
        <Route>404: No such page!</Route>
      </Switch>
    </>
  )
}

export default AppContent
