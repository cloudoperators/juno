/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/*
 * Used by the Juno PR Preview app to render the list of available previews.
 *
 * During the preview build, this file is copied into the template app
 * (apps/template/src/components/AppContent.tsx), after which the template
 * is built as a static app.
 */

import React from "react"

const AppContent: React.FC = () => {
  return (
    <div>
      Following previews are available:
      <br />
      <br />
      <ul>
        <li>
          <a href="/greenhouse/index.html#/demo">Greenhouse</a>
        </li>
        <li>
          <a href="/supernova/index.html">Supernova</a>
        </li>
        <li>
          <a href="/doop/index.html">Doop</a>
        </li>
        <li>
          <a href="/heureka/index.html">Heureka</a>
        </li>
      </ul>
    </div>
  )
}

export default AppContent
