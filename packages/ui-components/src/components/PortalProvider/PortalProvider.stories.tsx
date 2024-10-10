/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { createPortal } from "react-dom"
import { PortalProvider, usePortalRef } from "."
// import { Message } from "../Message" // TODO: use Message after it is available in TS

export default {
  title: "WiP/PortalProvider",
  component: PortalProvider,
  subcomponents: { "PortalProvider.Portal": PortalProvider.Portal },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: false,
    },
  },
}

interface MessageProps {
  text :string
}
const Message = ({ text } :MessageProps) => {
  return <div>{text}</div>
}

const PortalMessage = () => {
  const portalRef = usePortalRef()
  if (!portalRef) return null
  const content = <Message text="I'm inside a portal using the usePortalref hook in a custom component." />
  return createPortal(content, portalRef)
}

const Template = ({ children, ...args } :TemplateProps) => <PortalProvider {...args}>{children}</PortalProvider>

interface TemplateProps {
  children?: React.ReactNode
}

export const WithPortalComponent = {
  render: Template,
  args: {
    children: (
      <PortalProvider.Portal>
        <Message text="I'm inside a portal using the Portal component as provided by PortalProvider." />
      </PortalProvider.Portal>
    ),
  },
}

export const WithHook = {
  render: Template,
  args: {
    children: (
      <>
        <span> Some non-portalled content</span>
        <PortalMessage />
      </>
    ),
  },
}

export const MultiplePortals = {
  render: Template,
  args: {
    children: (
      <>
        <div>Some non-portaled content.</div>
        <PortalProvider.Portal>
          <Message text="I'm inside a portal using the Portal component as provided by PortalProvider." />
        </PortalProvider.Portal>
        <PortalMessage />
      </>
    ),
  },
}
