/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import Navigation from "../Navigation"
import Extension from "../Extension/Extension"
import NoExtensionFound from "./NoExtensionFound"

// @ts-ignore
const AppContent = ({ extensions }: { extensions: Extension[] }) => (
  <div className="h-screen flex">
    <Navigation extensions={extensions} />
    <div className="flex-1 bg-theme-global-bg" data-testid="extension-container">
      {extensions.map((extension) => (
        <Extension key={extension.name} extension={extension} />
      ))}
      <NoExtensionFound />
    </div>
  </div>
)

export default AppContent
