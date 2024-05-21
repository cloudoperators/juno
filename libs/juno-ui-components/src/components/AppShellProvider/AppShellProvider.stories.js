/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppShellProvider } from '.';
import { CodeBlock } from '../CodeBlock/index.js';
import { Message } from '../Message/Message.component';

export default {
  title: 'Layout/AppShellProvider',
  component: AppShellProvider,
  argTypes: {
    children: {
      control: false,
    },
  },
};

const Template = (args) => <AppShellProvider {...args}>{args.children}</AppShellProvider>;

export const Default = {
  render: Template,

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
};

export const NoShadowRoot = {
  render: Template,

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
};

export const StylesInHead = {
  render: Template,

  args: {
    shadowRoot: false,
    stylesWrapper: 'head',
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
};

export const StylesInline = {
  render: Template,

  args: {
    shadowRoot: false,
    stylesWrapper: 'inline',
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
};

export const ThemeLight = {
  render: Template,

  args: {
    theme: 'theme-light',
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
};
