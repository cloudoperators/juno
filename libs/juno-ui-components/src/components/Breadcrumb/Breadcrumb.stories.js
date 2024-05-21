/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Breadcrumb } from "./index"
import { BreadcrumbItem } from "../BreadcrumbItem/index"
// import { Default as Item } from '../BreadcrumbItem/BreadcrumbItem.stories';
// import { Home as HomeItem } from '../BreadcrumbItem/BreadcrumbItem.stories';
// import { Active as ActiveItem } from '../BreadcrumbItem/BreadcrumbItem.stories';
// import { Disabled as DisabledItem } from '../BreadcrumbItem/BreadcrumbItem.stories';
// import { WithIcon as ItemWithIcon } from '../BreadcrumbItem/BreadcrumbItem.stories';

const Template = ({ children, ...args }) => {
  return <Breadcrumb {...args}>{children}</Breadcrumb>
}

export default {
  title: "Components/Breadcrumb/Breadcrumb",
  component: Breadcrumb,
  argTypes: {
    children: {
      control: false,
    },
  },
}

export const Default = {
  render: Template,
  args: {
    children: [
      <BreadcrumbItem key="1" label="" icon="home" />,
      <BreadcrumbItem key="2" label="Breadcrumb Item" />,
      <BreadcrumbItem key="3" label="Breadcrumb Item with Icon" icon="place" />,
      <BreadcrumbItem key="4" label="Disabled Item " disabled />,
      <BreadcrumbItem key="5" label="Active Item" active />,
    ],
  },
}
