/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Checkbox } from './index.js';

export default {
  title: 'Forms/Checkbox/Checkbox',
  component: Checkbox,
  argTypes: {
    errortext: {
      control: false,
    },
    helptext: {
      control: false,
    },
    successtext: {
      control: false,
    },
  },
};

export const Default = {
  args: {},
};

export const Checked = {
  args: {
    checked: true,
  },
};

export const WithLabel = {
  args: {
    label: 'Checkbox with Label',
  },
};

export const Required = {
  args: {
    required: true,
    label: 'Required Checkbox',
  },
};

export const Disabled = {
  args: {
    disabled: true,
  },
};

export const Indeterminate = {
  args: {
    indeterminate: true,
  },
};

export const Valid = {
  args: {
    valid: true,
  },
};

export const Invalid = {
  args: {
    invalid: true,
  },
};

export const ValidWithLabel = {
  args: {
    valid: true,
    label: 'Validated checkbox with label and icon',
    successtext: 'This option is valid.',
    helptext: 'Validation icons will only show when there is a label on the Checkbox',
  },
};

export const InvalidWithLabel = {
  args: {
    invalid: true,
    label: 'Invalidated checkbox with label and icon',
    errortext: 'This option is invalid.',
    helptext: 'Validation icons will only show when there is a label on the Checkbox',
  },
};

export const IndeterminateWithLabel = {
  args: {
    indeterminate: true,
    label: 'Indeterminate checkbox with label',
    helptext:
      'A checkbox can be indeterminate as parent of multiple checkboxes with mixed checked states',
  },
};
