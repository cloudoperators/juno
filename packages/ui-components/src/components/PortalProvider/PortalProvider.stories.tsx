/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite"
import React from "react"
import { createPortal } from "react-dom"
import { PortalProvider, usePortalRef } from "./PortalProvider.component"
import { Button } from "../Button/index"

const meta: Meta<typeof PortalProvider> = {
  title: "WiP/PortalProvider",
  component: PortalProvider,
  subcomponents: {
    "PortalProvider.Portal": PortalProvider.Portal as React.ComponentType<unknown>,
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const PortalMessage = () => {
  const portalRef = usePortalRef()
  if (!portalRef) return null
  const content = <Button label="I'm inside a portal using the usePortalref hook in a custom component." />
  return createPortal(content, portalRef)
}

export const WithPortalComponent: Story = {
  args: {
    children: (
      <PortalProvider.Portal>
        <Button label="I'm inside a portal using the Portal component as provided by PortalProvider." />
      </PortalProvider.Portal>
    ),
  },
}

export const WithHook: Story = {
  args: {
    children: (
      <>
        <span> Some non-portalled content</span>
        <PortalMessage />
      </>
    ),
  },
}

export const MultiplePortals: Story = {
  args: {
    children: (
      <>
        <div>Some non-portaled content.</div>
        <PortalProvider.Portal>
          <Button label="I'm inside a portal using the Portal component as provided by PortalProvider." />
        </PortalProvider.Portal>
        <PortalMessage />
      </>
    ),
  },
}
