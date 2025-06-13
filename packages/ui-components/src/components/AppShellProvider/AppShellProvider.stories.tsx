/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Message } from "../Message"
import { AppShellProvider } from "./AppShellProvider.component"
import { CodeBlock } from "../CodeBlock"

const meta: Meta<typeof AppShellProvider> = {
  title: "Layout/AppShellProvider",
  component: AppShellProvider,
  argTypes: {
    children: {
      control: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: [
      <Message key={0}>Juno styles are added inline</Message>,
      <CodeBlock key={1}>
        {`
  export default (props) => {
    return (
      <AppShellProvider>
        <style>{/* app styles */}</style>
        <App {...props} />
      </AppShellProvider>
    )
  }`}
      </CodeBlock>,
    ],
  },
}

export const NoShadowRoot: Story = {
  args: {
    shadowRoot: false,
    children: [
      <Message key={0}>No ShadowRoot, but the styles are still inline (default)</Message>,
      <CodeBlock key={1}>
        {`
  export default (props) => {
    return (
      <AppShellProvider shadowRoot={false}>
        <style>{/* app styles */}</style>
        <App {...props} />
      </AppShellProvider>
    )
  }`}
      </CodeBlock>,
    ],
  },
}

export const StylesInHead: Story = {
  args: {
    shadowRoot: false,
    stylesWrapper: "head",
    children: [
      <Message key={0}>Juno styles are added to the head tag</Message>,
      <CodeBlock key={1}>
        {`
  export default (props) => {
    return (
      <AppShellProvider shadowRoot={false} stylesWrapper="head">
        <style>{/* app styles */}</style>
        <App {...props} />
      </AppShellProvider>
    )
  }`}
      </CodeBlock>,
    ],
  },
}

export const StylesInline: Story = {
  args: {
    shadowRoot: false,
    stylesWrapper: "inline",
    children: [
      <Message key={0}>Juno style are added inline</Message>,
      <CodeBlock key={1}>
        {`
  export default (props) => {
    return (
      <AppShellProvider shadowRoot={false} stylesWrapper="inline">
        <style>{/* app styles */}</style>
        <App {...props} />
      </AppShellProvider>
    )
  }`}
      </CodeBlock>,
    ],
  },
}

export const ThemeLight: Story = {
  args: {
    theme: "theme-light",
    children: [
      <Message key={0}>Light Theme</Message>,
      <CodeBlock key={1}>{`
  <AppShellProvider theme="theme-light">
    <style>{/* app styles */}</style>
    <App>
      {/* App Body */}
    </App>
  </AppShellProvider>`}</CodeBlock>,
    ],
  },
}
