/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Container } from "@cloudoperators/juno-ui-components"
import { BasicInformation } from "./BasicInformation"
import { Conditions } from "./Conditions"
import { Configuration } from "./Configuration"
import { ExposedServices } from "./ExposedServices"
import { Plugin } from "../../types/k8sTypes"

const Section = ({ children, ...rest }: React.HTMLAttributes<HTMLDivElement>) => (
  <Container px={false} py {...rest}>
    {children}
  </Container>
)

export const Overview = ({ plugin }: { plugin: Plugin }) => (
  <>
    <Section>
      <Conditions plugin={plugin} />
    </Section>
    <Section className="flex">
      <BasicInformation plugin={plugin} />
    </Section>
    <Section>
      <ExposedServices plugin={plugin} />
    </Section>
    <Section>
      <Configuration plugin={plugin} />
    </Section>
  </>
)
