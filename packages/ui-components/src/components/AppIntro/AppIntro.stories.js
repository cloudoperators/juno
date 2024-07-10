/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

import { AppIntro } from './index.js';

export default {
  title: 'Layout/AppIntro',
  component: AppIntro,
  argTypes: {
    children: {
      control: false,
    },
  },
};

const Template = (args) => (
  <AppIntro {...args}>
    Intro text here. Explain what this app is in a short lead text. Lorem ipsum dolor sit amet. At
    vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
    sanctus est. Lorem ipsum dolor sit amet.
  </AppIntro>
);

export const Intro = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story: 'OBSOLETE: Will be deleted!',
      },
    },
  },

  args: {},
};
