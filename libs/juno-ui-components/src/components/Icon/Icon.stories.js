/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Icon } from './index.js';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {},
  parameters: {
    docs: {
      description: {
        component:
          "A generic icon component. Accepts text color classes for color. Please note that the 'jn-' prefix for tailwind classes is only necessary within the juno ui design system itself. When using icons in your own applications use the normal tailwing-generated text color classes starting with 'text-'",
      },
    },
  },
};

export const Default = {
  args: {
    icon: 'help',
    color: 'jn-global-text',
  },
};

export const Info_Colored = {
  args: {
    icon: 'info',
    color: 'jn-text-theme-info',
  },
};

export const Danger_Colored = {
  args: {
    icon: 'danger',
    color: 'jn-text-theme-danger',
  },
};

export const Success_Colored = {
  args: {
    icon: 'success',
    color: 'jn-text-theme-success',
  },
};

export const Warning_Colored = {
  args: {
    icon: 'warning',
    color: 'jn-text-theme-warning',
  },
};

export const ThemeColor = {
  args: {
    icon: 'help',
    color: 'jn-global-text',
  },
};

export const Smaller = {
  args: {
    ...Default.args,
    icon: 'help',
    size: '18',
  },
};

export const Larger = {
  args: {
    ...Default.args,
    icon: 'help',
    size: '64',
  },
};

export const IconAsLink = {
  args: {
    ...Default.args,
    href: '#',
    title: 'The Icon is a link',
  },
};

export const IconAsButton = {
  args: {
    ...Default.args,
    title: 'The Icon is a button',
    onClick: () => {
      console.log('click');
    },
  },
};

export const Account_Circle = {
  args: {
    ...Default.args,
    icon: 'accountCircle',
  },
};

export const Add_Circle = {
  args: {
    ...Default.args,
    icon: 'addCircle',
  },
};

export const Auto_Awesome_Mosaic = {
  args: {
    ...Default.args,
    icon: 'autoAwesomeMosaic',
  },
};

export const Auto_Awesome_Motion = {
  args: {
    ...Default.args,
    icon: 'autoAwesomeMotion',
  },
};

export const Bolt = {
  args: {
    ...Default.args,
    icon: 'bolt',
  },
};

export const Cancel = {
  args: {
    ...Default.args,
    icon: 'cancel',
  },
};

export const Check = {
  args: {
    icon: 'check',
  },
};

export const CheckCircle = {
  args: {
    icon: 'checkCircle',
  },
};

export const ChevronLeft = {
  args: {
    icon: 'chevronLeft',
  },
};

export const ChevronRight = {
  args: {
    icon: 'chevronRight',
  },
};

export const Close = {
  args: {
    icon: 'close',
  },
};

export const Comment = {
  args: {
    ...Default.args,
    icon: 'comment',
  },
};

export const ContentCopy = {
  args: {
    icon: 'contentCopy',
  },
};

export const Danger = {
  args: {
    ...Default.args,
    icon: 'danger',
  },
};

export const Dangerous = {
  args: {
    icon: 'dangerous',
  },
};

export const DeleteForever = {
  args: {
    icon: 'deleteForever',
  },
};

export const Description = {
  args: {
    ...Default.args,
    icon: 'description',
  },
};

export const DNS = {
  args: {
    ...Default.args,
    icon: 'dns',
  },
};

export const Download = {
  args: {
    icon: 'download',
  },
};

export const Edit = {
  args: {
    ...Default.args,
    icon: 'edit',
  },
};

export const Error = {
  args: {
    ...Default.args,
    icon: 'dangerous',
  },
};

export const Error_Outline = {
  args: {
    ...Default.args,
    icon: 'errorOutline',
  },
};

export const Exit_To_App = {
  args: {
    ...Default.args,
    icon: 'exitToApp',
  },
};

export const Expand_Less = {
  args: {
    ...Default.args,
    icon: 'expandLess',
  },
};

export const Expand_More = {
  args: {
    ...Default.args,
    icon: 'expandMore',
  },
};

export const Filter_Alt = {
  args: {
    ...Default.args,
    icon: 'filterAlt',
  },
};

export const Forum = {
  args: {
    ...Default.args,
    icon: 'forum',
  },
};

export const Help = {
  args: {
    ...Default.args,
    icon: 'help',
  },
};

export const Home = {
  args: {
    ...Default.args,
    icon: 'home',
  },
};

export const Info = {
  args: {
    ...Default.args,
    icon: 'info',
  },
};

export const Manage_Accounts = {
  args: {
    ...Default.args,
    icon: 'manageAccounts',
  },
};

export const Monitor_Heart = {
  args: {
    ...Default.args,
    icon: 'monitorHeart',
  },
};

export const More_Vert = {
  args: {
    ...Default.args,
    icon: 'moreVert',
  },
};

export const Notifications_Off = {
  args: {
    ...Default.args,
    icon: 'notificationsOff',
  },
};

export const Open_In_Browser = {
  args: {
    ...Default.args,
    icon: 'openInBrowser',
  },
};

export const Open_In_New = {
  args: {
    ...Default.args,
    icon: 'openInNew',
  },
};

export const Place = {
  args: {
    ...Default.args,
    icon: 'place',
  },
};

export const Search = {
  args: {
    ...Default.args,
    icon: 'search',
  },
};

export const SeverityLow = {
  args: {
    ...Default.args,
    icon: 'severityLow',
  },
};

export const SeverityMedium = {
  args: {
    ...Default.args,
    icon: 'severityMedium',
  },
};

export const SeverityHigh = {
  args: {
    ...Default.args,
    icon: 'severityHigh',
  },
};

export const SeverityCritical = {
  args: {
    ...Default.args,
    icon: 'severityCritical',
  },
};

export const Success = {
  args: {
    ...Default.args,
    icon: 'success',
  },
};

export const Warning = {
  args: {
    ...Default.args,
    icon: 'warning',
  },
};

export const Widgets = {
  args: {
    ...Default.args,
    icon: 'widgets',
  },
};
