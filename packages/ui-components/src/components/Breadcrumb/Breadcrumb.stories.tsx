/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

import { BreadcrumbItem } from "../BreadcrumbItem"
import { Breadcrumb, BreadcrumbProps } from "./Breadcrumb.component"

const Template: React.FC<BreadcrumbProps> = ({ children, ...args }) => {
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
