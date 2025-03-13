/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

import { InputGroup } from "./InputGroup.component"

import { Button } from "../Button/Button.component"
import { TextInput } from "../TextInput/TextInput.component"
import { Select } from "../Select"
import { SelectOption } from "../SelectOption"
import { SelectProps } from "../Select/Select.component"
import { PortalProvider } from "../PortalProvider"

type StoryFunction = () => JSX.Element

const SelectInput = (props: SelectProps) => (
  <Select {...props}>
    <SelectOption value="value1" label="Label 1" />
    <SelectOption value="value2" label="Label 2" />
    <SelectOption value="value3" label="Label 3" />
  </Select>
)

export default {
  title: "WiP/InputGroup",
  component: InputGroup,
  argTypes: {
    children: {
      control: false,
    },
  },
  decorators: [
    (story: StoryFunction) => (
      <div className="jn-pb-12" style={{ minHeight: "250px" }}>
        <PortalProvider>{story()}</PortalProvider>
      </div>
    ),
  ],
}

export const Default = {
  args: {
    children: [
      <Button key={0} label="Button 1" />,
      <Button key={1}>Button 2</Button>,
      <Button key={2} label="Button 3" />,
    ],
  },
}

export const PrimaryInputGroup = {
  args: {
    variant: "primary",
    children: [
      <Button key={0} label="Primary Button" />,
      <Button key={1} label="Primary Button" />,
      <Button key={2} label="Primary Button" />,
    ],
  },
}

export const PrimaryDangerInputGroup = {
  args: {
    variant: "primary-danger",
    children: [
      <Button key={0} label="Primary Danger Button" />,
      <Button key={1} label="Primary Danger Button" variant="primary" />,
      <Button key={2} label="Primary Danger Button" />,
    ],
  },
}

export const SubduedInputGroup = {
  args: {
    variant: "subdued",
    children: [
      <Button key={0} label="Subdued Button" />,
      <Button key={1} label="Subdued Button" />,
      <Button key={2} label="Subdued Button" />,
    ],
  },
}

export const Disabled = {
  args: {
    disabled: true,
    children: [<Button key={0} label="Button" />, <Button key={1} label="Button" />, <Button key={2} label="Button" />],
  },
}

export const IconButtons = {
  args: {
    children: [<Button key={0} icon="home" />, <Button key={1} icon="help" />, <Button key={2} icon="forum" />],
  },
}

export const TextInputWithButton = {
  args: {
    children: [<TextInput key={0} placeholder="Enter a value…" />, <Button key={1} label="Submit" />],
  },
}

export const MultipleTextInputsWithButton = {
  args: {
    children: [
      <TextInput key={0} placeholder="First Name" />,
      <TextInput key={1} placeholder="Last Name" />,
      <Button key={2} label="Submit" />,
    ],
  },
}

export const SelectInputsWithButton = {
  args: {
    variant: "subdued",
    children: [
      <SelectInput key={0} label="Some label" />,
      <SelectInput key={1} />,
      <SelectInput key={2} />,
      <Button key={3} icon="filterAlt" />,
    ],
  },
}
