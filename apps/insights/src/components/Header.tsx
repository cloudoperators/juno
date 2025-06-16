/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { IntroBox } from "@cloudoperators/juno-ui-components"
import React from "react"

const Header = () => (
  <IntroBox variant="hero">
    <p>
      This dashboard provides operational insights into your Greenhouse platform. It aggregates real-time metrics from
      your central cluster and all onboarded remote clusters, giving administrators a comprehensive view of the
      platform. <br />
      <br />
    </p>
  </IntroBox>
)

export default Header
