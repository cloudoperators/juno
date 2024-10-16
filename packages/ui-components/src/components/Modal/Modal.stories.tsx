/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import { Modal, ModalProps } from "./Modal.component"
import { ModalFooter } from "../ModalFooter/index"
import { Button } from "../Button/index"
import { ButtonRow } from "../ButtonRow/index"
import { Icon } from "../Icon/index"
import { PortalProvider } from "../PortalProvider/index"
import { TextInput } from "../TextInput"

type TemplateProps = {
  closeOnConfirm: boolean
} & ModalProps

const Template = ({ closeOnConfirm, ...args }: TemplateProps) => {
  const [isOpen, setOpen] = useState(false)

  const open = () => {
    setOpen(true)
  }

  const close = () => {
    setOpen(false)
  }

  return (
    <>
      <Button label="Open Modal" variant="primary" onClick={open} />
      <PortalProvider.Portal>
        <Modal open={isOpen} onCancel={close} onConfirm={closeOnConfirm ? close : null} {...args} />
      </PortalProvider.Portal>
    </>
  )
}

type StoryFunction = () => React.ReactNode

export default {
  title: "Components/Modal/Modal",
  component: Modal,
  argTypes: {
    children: {
      control: false,
    },
    modalFooter: {
      control: false,
    },
  },
  parameters: { actions: { argTypesRegex: null } },
  decorators: [(story: StoryFunction) => <PortalProvider>{story()}</PortalProvider>],
}

export const Default = {
  render: Template,
  args: {
    children: <p>A default modal.</p>,
  },
}

export const SimpleConfirmDialog = {
  render: Template,
  args: {
    children: <p>Are you sure you want to proceed?</p>,
    cancelButtonLabel: "Cancel",
    confirmButtonLabel: "Yes, Proceed",
  },
}

export const AutoFocusDialog = {
  render: Template,
  args: {
    children: <TextInput id="focusOnMe" />,
    initialFocus: "#focusOnMe",
  },
}

export const LargeWithTitle = {
  render: Template,
  args: {
    size: "large",
    title: "Large Modal",
    confirmButtonLabel: "OK",
    closeOnConfirm: true /* Only relevant for storybook, this is not a native prop of the component! */,
    children: <p>A large modal with a title</p>,
  },
}

export const NonCloseable = {
  render: Template,
  args: {
    title: "Non-Closeable Modal",
    children:
      "Use only if all else fails. If you need to inform users about something, in 99.9% of cases <Message> is the better choice.",
    closeable: false,
  },
}

export const CloseOnBackdropClick = {
  render: Template,
  args: {
    title: "Close on Backdrop Click",
    children: <p>This Modal closes when clicking the backdrop.</p>,
    closeOnBackdropClick: true,
  },
}

export const CustomModalFooter = {
  render: Template,
  args: {
    title: "Modal with Custom ModalFooter",
    size: "large",
    children: <p>This Modal renders a custom footer with three buttons and a custom hint.</p>,
    modalFooter: (
      <ModalFooter className="jn-justify-between jn-items-center">
        <span>
          <Icon icon="info" className="jn-mr-1" />
          Have some custom content
        </span>
        <ButtonRow>
          <Button variant="primary-danger">Button 1</Button>
          <Button variant="primary">Button 2</Button>
          <Button>Button 3</Button>
        </ButtonRow>
      </ModalFooter>
    ),
  },
}
