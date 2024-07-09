/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { NativeSelectOption } from './index.js';

export default {
  title: 'Forms/NativeSelect/NativeSelectOption',
  component: NativeSelectOption,
  argTypes: {},
};

export const Default = {
  args: {
    value: 'my-option-value',
    label: 'My option',
  },
};

export const Disabled = {
  args: {
    value: 'my-disabled-option-value',
    label: 'My disabled option',
    disabled: true,
  },
};
