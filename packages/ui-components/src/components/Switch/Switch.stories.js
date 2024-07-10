/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Switch } from './index';

export default {
  title: 'Forms/Switch',
  component: Switch,
  parameters: {
    docs: {
      description: {
        component:
          'The basic switch component. Use for interactions that produce an immediate result when switching between two states/options. IN the context of forms that require to be submitted in order to take effect, use checkboxes instead.',
      },
    },
  },
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
  parameters: {
    docs: {
      description: { story: 'Default Switch. Defaults to "off".' },
    },
  },

  args: {
    label: 'Switch',
    id: 'switch-default',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Small Switch',
    id: 'switch-small',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Large Switch',
    id: 'switch-large',
  },
};

export const On = {
  parameters: {
    docs: {
      description: { story: 'Render a checked Switch by passing bool "on".' },
    },
  },

  args: {
    on: true,
  },
};

export const Disabled = {
  parameters: {
    docs: {
      description: { story: 'Disable a Switch by passing bool "disabled".' },
    },
  },

  args: {
    on: true,
    disabled: true,
    label: 'Disabled Switch',
    id: 'switch-disabled',
  },
};

export const Invalid = {
  args: {
    invalid: true,
    label: 'Invalid Switch',
    id: 'switch-invalid',
  },
};

export const Valid = {
  args: {
    valid: true,
    label: 'Valid Switch',
    id: 'switch-valid',
  },
};

export const WithHelpText = {
  args: {
    label: 'Switch',
    helptext: 'This is an explanatory text referring to the input',
  },
};

export const WithHelpTextAsNode = {
  args: {
    label: 'Switch',
    helptext: (
      <>
        This is a helptext with a <a href="#">Link</a>
      </>
    ),
  },
};

export const WithSuccessText = {
  args: {
    label: 'Switch',
    successtext: 'This field is a great success!',
  },
};

export const WithErrorText = {
  args: {
    label: 'Switch',
    errortext: 'This field has an error',
  },
};
