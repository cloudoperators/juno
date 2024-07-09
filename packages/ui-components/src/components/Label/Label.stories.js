/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Label } from './index.js';

export default {
  title: 'Forms/Label',
  component: Label,
  argTypes: {},
};

export const Default = {
  args: {
    text: 'My Label',
  },
};

export const Disabled = {
  args: {
    text: 'My disabled label',
    disabled: true,
  },
};

export const Required = {
  args: {
    text: 'My required label',
    required: true,
  },
};
