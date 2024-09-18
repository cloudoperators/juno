/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { ModalFooter } from "./index.js"
import { Button } from "../Button/index.js"
import { ButtonRow } from "../ButtonRow/index.js"
import { Stack } from "../Stack/index.js"
import { Icon } from "../../deprecated_js/Icon/index.js"

const Template = (args) => {
  return <ModalFooter {...args}></ModalFooter>
}

export default {
  title: "Components/Modal/ModalFooter",
  component: ModalFooter,
  argTypes: {
    children: {
      control: false,
    },
  },
  parameters: { actions: { argTypesRegex: null } },
}

export const Default = {
  render: Template,
  args: {},
}

export const Configure = {
  render: Template,

  args: {
    confirmButtonLabel: "Confirm Action",
    cancelButtonLabel: "Cancel Action",
  },
}

export const Custom = {
  render: Template,

  args: {
    className: "jn-justify-between jn-items-center",
    children: [
      <Stack gap="2" key="s1">
        <Icon />
        <span>Some status here</span>
      </Stack>,
      <ButtonRow key="br-1">
        <Button variant="primary-danger" label="Destruction" key="b-1" />
        <Button variant="primary" label="World Peace" key="b-2" />
        <Button variant="subdued" label="Surprise Me!" key="b-3" />
      </ButtonRow>,
    ],
  },
}
