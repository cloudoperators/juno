/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Radio } from './index.js';

export default {
  title: 'Forms/Radio',
  component: Radio,
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
  args: {
    value: '1',
  },
};

export const Checked = {
  args: {
    checked: true,
  },
};

export const WithLabel = {
  args: {
    id: 'radio-with-label',
    label: 'Radio with label',
  },
};

export const Required = {
  args: {
    required: true,
    label: 'Required Radio',
    helptext: 'Only a Radio with a label passed will render a required marker.',
  },
};

export const WithHelptext = {
  args: {
    label: 'A Radio',
    helptext: 'Never comes alone',
  },
};

export const WithHelpTextAsNode = {
  args: {
    label: 'A Radio',
    helptext: (
      <>
        Helptext with a <a href="#">Link</a>
      </>
    ),
  },
};

export const Disabled = {
  args: {
    checked: true,
    disabled: true,
    label: 'Disabled Radio with label',
  },
};

export const Valid = {
  args: {
    valid: true,
    label: 'This Radio is valid',
  },
};

export const Invalid = {
  args: {
    invalid: true,
    label: 'This Radio is invalid',
  },
};

export const ValidWithLabel = {
  args: {
    valid: true,
    label: 'Validated Radio with label and icon',
    successtext: 'This option is valid',
    helptext: 'Validation icons will only show when there is a label on the Radio',
  },
};

export const InvalidWithLabel = {
  args: {
    invalid: true,
    label: 'Invalidated Radio with label and icon',
    helptext: 'Validation icons will only show when there is a label on the Radio',
    errortext: 'This option is invalid.',
  },
};
