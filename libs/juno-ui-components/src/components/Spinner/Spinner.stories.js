/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

import { Spinner } from './index.js';

export default {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {
    // backgroundColor: { control: "color" },
    // labelColor: { control: "color" },
    // hoverColor: { control: "color" },
    // outlineColor: { control: "color" },
  },
};

export const Primary = {
  args: {
    variant: 'primary',
  },
};

export const Danger = {
  args: { variant: 'danger' },
};

export const Success = {
  args: { variant: 'success' },
};

export const Warning = {
  args: { variant: 'warning' },
};

export const Light = {
  args: {},
};

export const WithCustomColor = {
  args: {
    color: 'text-theme-button-primary',
  },
};

export const Small = {
  args: {
    size: 'small',
  },
};

export const Large = {
  args: {
    size: 'large',
  },
};
