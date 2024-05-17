/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MenuItem } from './MenuItem.component';
import { Menu } from '../Menu/Menu.component';
import { Button } from '../Button/index';
import { knownIcons } from '../Icon/Icon.component';

export default {
  title: 'WiP/Menu/MenuItem',
  component: MenuItem,
  argTypes: {
    icon: {
      options: ['default', ...knownIcons],
      control: { type: 'select' },
    },
    children: {
      control: false,
    },
  },
};

const Template = (args) => (
  <Menu>
    <MenuItem {...args} />
  </Menu>
);

const SmallTemplate = (args) => (
  <Menu variant="small">
    <MenuItem {...args} />
  </Menu>
);

export const Default = {
  render: Template,

  args: {
    label: 'Menu Item',
  },
};

export const SmallMenuItem = {
  render: SmallTemplate,

  args: {
    label: 'Small menu item',
  },
};

export const WithIcon = {
  render: Template,

  args: {
    label: 'Menu Item with Icon',
    icon: 'deleteForever',
  },
};

export const AsLink = {
  render: Template,

  args: {
    label: 'Menu Item as Link',
    href: 'https://github.com/sapcc/juno',
  },
};

export const AsButton = {
  render: Template,

  args: {
    label: 'Menu Item as Button',
  },
};

export const WithChildren = {
  render: Template,

  args: {
    children: [
      <Button
        label="Delete"
        size="small"
        variant="subdued"
        icon="deleteForever"
        className="jn-w-full"
        key="1"
      />,
    ],
  },
};

export const Disabled = {
  render: Template,

  args: {
    disabled: true,
    label: 'Disabled Item',
  },
};

export const DisabledLink = {
  render: Template,

  args: {
    disabled: true,
    label: 'Disabled Item as Link',
    href: 'https://github.com/sapcc/juno',
  },
};
