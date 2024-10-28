/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

import { InputGroup } from "./"

import { Button } from "../Button"
import { TextInput } from "../TextInput"

export default {
  title: "WiP/InputGroup",
  component: InputGroup,
  argTypes: {
    children: {
      control: false,
    },
  },
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
