/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

import { ContentAreaWrapper } from './index.js';
import { ContentArea } from '../ContentArea/index.js';
import { ContentAreaToolbar } from '../ContentAreaToolbar/index.js';
import { Button } from '../Button/index.js';

export default {
  title: 'Internal/ContentAreaWrapper',
  component: ContentAreaWrapper,
  argTypes: {
    children: {
      control: false,
    },
  },
};

const Template = (args) => (
  <ContentAreaWrapper {...args}>
    <ContentAreaToolbar>
      <Button>Example</Button>
    </ContentAreaToolbar>
    <ContentArea>Content goes here</ContentArea>
  </ContentAreaWrapper>
);

export const Basic = {
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
