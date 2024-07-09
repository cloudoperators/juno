/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TabPanel } from './index.js';

export default {
  title: 'Layout/Tabs/TabPanel',
  component: TabPanel,
  argTypes: {
    children: {
      control: false,
    },
  },
};

export const Default = {
  args: {
    children: 'Tab panel content goes here.',
  },
};
