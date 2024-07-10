/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Box } from './index';

export default {
  title: 'Components/Box',
  component: Box,
  argTypes: {},
};

export const Default = {
  parameters: {
    docs: {
      description: {
        story: 'A default Box',
      },
    },
  },

  args: {
    children: 'Some content in a Box.',
  },
};

export const UnpaddedBox = {
  parameters: {
    docs: {
      description: {
        story: 'To remove the padding, set `unpad` prop.',
      },
    },
  },

  args: {
    children: 'Unpadded Box',
    unpad: true,
  },
};
