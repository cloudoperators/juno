/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShadowRoot } from '.';

const Template = (args) => (
  <ShadowRoot {...args}>
    <h1>Welcome</h1>
  </ShadowRoot>
);

export default {
  title: 'Layout/ShadowRoot',
  component: ShadowRoot,
  argTypes: {
    children: {
      control: false,
    },
  },
};

export const EncapsulateStyles = {
  render: Template,

  args: {
    mode: 'closed',
  },
};
