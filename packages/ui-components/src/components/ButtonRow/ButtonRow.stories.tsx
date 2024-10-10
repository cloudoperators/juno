/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { ButtonRow } from "./index"
import { Button } from "../Button/index"

export default {
  title: "Forms/ButtonRow",
  component: ButtonRow,
  argTypes: {
    items: {
      table: {
        disable: true,
      },
    },
    children: {
      control: false,
    },
  },
}

const Template = ({ children, ...args }: TemplateProps) => <ButtonRow {...args}>{children}</ButtonRow>
interface TemplateProps {
  children?: React.ReactNode
}

export const Default = {
  render: Template,

  args: {
    name: "Default ButtonRow",
    children: [
      <Button key="1" label="Cancel" title="Cancel" />,
      <Button key="2" label="Save" title="Save" variant="primary" />,
    ],
  },
}
