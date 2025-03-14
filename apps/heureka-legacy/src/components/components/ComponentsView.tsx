/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import ComponentsList from "./ComponentsList"
import ListController from "../shared/ListController"
import { Messages, MessagesProvider } from "@cloudoperators/juno-messages-provider"

const ComponentsView = () => {
  return (
    <>
      <MessagesProvider>
        <Messages />
        <ListController
          queryKey="Components"
          entityName="Components"
          ListComponent={ComponentsList}
          enableSearchAndFilter={false}
        />
      </MessagesProvider>
    </>
  )
}

export default ComponentsView
