/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Modal, ModalProps } from "./Modal.component"
import { ModalFooter } from "../ModalFooter/index"
import { Button } from "../Button/index"
import { ButtonRow } from "../ButtonRow/index"
import { Checkbox } from "../Checkbox/index"
import { Form } from "../Form/index"
import { FormRow } from "../FormRow/index"
import { TextInput } from "../TextInput/index"
import { Icon } from "../Icon/index"
import { PortalProvider } from "../PortalProvider/index"
import { Select } from "../Select/index"
import { SelectOption } from "../SelectOption/index"
import { ComboBox } from "../ComboBox/index"
import { ComboBoxOption } from "../ComboBoxOption/index"

type TemplateProps = {
  closeOnConfirm?: boolean
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
      <Modal open={isOpen} onCancel={close} onConfirm={closeOnConfirm ? close : undefined} {...args} />
    </>
  )
}

const meta: Meta<typeof Modal> = {
  title: "Components/Modal/Modal",
  component: Modal,
  argTypes: {
    children: {
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
    },
    modalFooter: {
      control: false,
      table: {
        type: { summary: "ReactElement" },
      },
    },
  },
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      source: {
        transform: (source: string): string => {
          // Remove :jn prefix for docs, internal use only
          return source.replace(/jn:/g, "")
        },
      },
    },
  },
  decorators: [
    (Story) => (
      <PortalProvider>
        <div className="jn:m-20 jn:flex jn:justify-center">
          <Story />
        </div>
      </PortalProvider>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "A modal dialog for simple acknowledgement.",
      },
    },
  },
  args: {
    title: "Maintenance Mode Enabled for 'cluster-eu-1'",
    children:
      "Automated alerts and health checks for this cluster have been suspended. Turn off maintenance mode to resume normal monitoring.",
  },
}

export const SimpleConfirmNonDestructiveAction: Story = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "A modal dialog for confirming or canceling a non-destructive action.",
      },
    },
  },
  args: {
    title: "Assign Role to user@example.com",
    children:
      "Assign the role Operator to user@example.com? This will grant access to all resources in the selected project.",
    cancelButtonLabel: "Cancel",
    confirmButtonLabel: "Assign Role",
  },
}

export const ConfirmDesctructiveActionLowRisk: Story = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "A user-initiated low risk destructive action. Note the Confirm button is always enabled.",
      },
    },
  },
  args: {
    title: "Delete Snapshot 'snap-20240115'",
    children: "Snapshot 'snap-20240115' will be permanently deleted and cannot be recovered.",
    confirmButtonVariant: "primary-danger",
    confirmButtonLabel: "Delete Snapshot",
  },
}

const MediumRiskTemplate = (args: ModalProps) => {
  const [isOpen, setOpen] = useState(false)
  const [confirmed, setConfirmed] = useState(false)
  return (
    <>
      <Button label="Open Modal" variant="primary" onClick={() => setOpen(true)} />
      <Modal
        open={isOpen}
        onCancel={() => {
          setOpen(false)
          setConfirmed(false)
        }}
        disableConfirmButton={!confirmed}
        {...args}
      >
        <div>
          <p className="jn:mb-4">
            Removing user &apos;jsmith&apos; will immediately revoke all their access to project resources.
          </p>
          <Checkbox
            label="Check the box to confirm removing user 'jsmith'"
            checked={confirmed}
            onChange={(e) => setConfirmed(e.target.checked)}
          />
        </div>
      </Modal>
    </>
  )
}

export const ConfirmDesctructiveActionMediumRisk: Story = {
  render: MediumRiskTemplate,
  parameters: {
    docs: {
      description: {
        story:
          "A user-initiated medium risk destructive action. Note the Confirm button is initially disabled, will be enabled once user checks the checkbox.",
      },
    },
  },
  args: {
    title: "Remove User 'jsmith'",
    confirmButtonVariant: "primary-danger",
    confirmButtonLabel: "Remove User",
  },
}

const HighRiskTemplate = (args: ModalProps) => {
  const [isOpen, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState("")
  return (
    <>
      <Button label="Open Modal" variant="primary" onClick={() => setOpen(true)} />
      <Modal
        open={isOpen}
        onCancel={() => {
          setOpen(false)
          setInputValue("")
        }}
        disableConfirmButton={inputValue !== "DELETE"}
        {...args}
      >
        <div>
          <p className="jn:mb-4">
            This will permanently delete the project &apos;production-eu&apos; and all associated resources, including
            clusters, configurations, and stored data.
          </p>
          <p className="jn:mb-4">This action cannot be undone.</p>
          <p className="jn:mb-4">Type &apos;DELETE&apos; (all caps, no quotes) in the field below to confirm:</p>
          <TextInput
            placeholder="Type 'DELETE' to confirm deletion"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
      </Modal>
    </>
  )
}

export const ConfirmDesctructiveActionHighRisk: Story = {
  render: HighRiskTemplate,
  parameters: {
    docs: {
      description: {
        story:
          "A user-initiated high risk destructive action. Note the Confirm button is initially disabled, and will be enabled once the user re-types a given phrase.",
      },
    },
  },
  args: {
    title: "Delete Project 'production-eu'",
    confirmButtonVariant: "primary-danger",
    confirmButtonLabel: "Delete Project",
  },
}

export const SimpleConfirmDialogWithDisabledButtons: Story = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story:
          "In order to disable all buttons on a Modal, both `disableConfirmButton` and `disableCancelButton` need to be set to `true`.",
      },
    },
  },
  args: {
    title: "Assign Role to user@example.com",
    children:
      "Assign the role Operator to user@example.com? This will grant access to all resources in the selected project.",
    cancelButtonLabel: "Cancel",
    confirmButtonLabel: "Assign Role",
    disableConfirmButton: true,
    disableCancelButton: true,
  },
}

export const AutoFocusDialog: Story = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story:
          "In order to auto-focus an interactive element in the modal, assign an `id` and pass this `id` to the `initialFocus` prop.",
      },
    },
  },
  args: {
    title: "Enter a Phrase",
    children: <TextInput id="focusOnMe" />,
    initialFocus: "#focusOnMe",
  },
}

const ReusableForm = () => (
  <Form>
    <FormRow>
      <TextInput label="First Name" id="firstname" />
    </FormRow>
    <FormRow>
      <TextInput label="Last Name" id="lastname" />
    </FormRow>
    <FormRow>
      <TextInput label="Email" id="email" type="email" />
    </FormRow>
    <FormRow>
      <TextInput label="Password" id="password" type="password" />
    </FormRow>
    <FormRow>
      <TextInput label="Retype Password" id="retype-password" type="password" />
    </FormRow>
    <FormRow>
      <Select label="Role">
        <SelectOption>Private Person</SelectOption>
        <SelectOption>Small Business</SelectOption>
      </Select>
    </FormRow>
    <FormRow>
      <ComboBox label="Country">
        <ComboBoxOption value="germany" key="DE">
          Germany
        </ComboBoxOption>
        <ComboBoxOption value="uk" key="UK">
          United Kingdom
        </ComboBoxOption>
        <ComboBoxOption value="us" key="US">
          USA
        </ComboBoxOption>
      </ComboBox>
    </FormRow>
  </Form>
)

export const DefaultWithForm: Story = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "A default size Modal with a form.",
      },
    },
  },
  args: {
    title: "Default Modal Form",
    initialFocus: "#firstname",
    cancelButtonLabel: "Cancel",
    confirmButtonLabel: "Register now",
    children: <ReusableForm />,
  },
}

export const LargeWithForm: Story = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "A `large` size Modal with a form.",
      },
    },
  },
  args: {
    size: "large",
    title: "Large Modal Form",
    initialFocus: "#firstname",
    cancelButtonLabel: "Cancel",
    confirmButtonLabel: "Register now",
    children: <ReusableForm />,
  },
}

export const XLWithForm: Story = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "An `xl` size Modal with a form.",
      },
    },
  },
  args: {
    size: "xl",
    title: "XL With Form",
    initialFocus: "#firstname",
    cancelButtonLabel: "Cancel",
    confirmButtonLabel: "Register now",
    children: <ReusableForm />,
  },
}

export const XXLWithForm: Story = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "An `2xl` size Modal with a form.",
      },
    },
  },
  args: {
    size: "2xl",
    title: "2XL With Form",
    initialFocus: "#firstname",
    cancelButtonLabel: "Cancel",
    confirmButtonLabel: "Register now",
    children: <ReusableForm />,
  },
}

export const NonCloseable: Story = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story:
          "A modal that can not be closed. Generally considered an antipattern, there may be cases where this is needed. Set `closeable` to `false`.",
      },
    },
  },
  args: {
    title: "Non-Closeable Modal",
    children:
      "Use only if all else fails. If you need to inform users about something, in 99.9% of cases <Message> is the better choice.",
    closeable: false,
  },
}

export const CloseOnBackdropClick: Story = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story:
          "Modals can feel more lightweight and less intrusive when the user can click outside the Modal to close it. Set `closeOnBackdropClick` to `true` to enable this behaviour.",
      },
    },
  },
  args: {
    title: "Close on Backdrop Click",
    children: <p>This Modal closes when clicking the backdrop.</p>,
    closeOnBackdropClick: true,
  },
}

export const DisabledCloseButton: Story = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "In order to specifically disable the X-Close button, set `disableCloseButton`to `true`.",
      },
    },
  },
  args: {
    title: "Disabled X-Close Button Modal",
    children: <p>This Modal has a disabled top-right close button.</p>,
    disableCloseButton: true,
    cancelButtonLabel: "Cancel",
  },
}

export const CustomModalFooter: Story = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story:
          "For complex use cases that require more than a Confirm and a Cancel button, a custom `ModalFooter` with buttons and additional elements can be passed to `Modal`.",
      },
    },
  },
  args: {
    title: "Modal with Custom ModalFooter",
    size: "large",
    children: <p>This Modal renders a custom footer with three buttons and a custom hint.</p>,
    modalFooter: (
      <ModalFooter className="jn:justify-between jn:items-center">
        <span>
          <Icon icon="info" className="jn:mr-1" />
          Have some custom content
        </span>
        <ButtonRow>
          <Button variant="subdued">Cancel</Button>
          <Button variant="primary-danger">Destroy</Button>
          <Button variant="primary">Proceed</Button>
        </ButtonRow>
      </ModalFooter>
    ),
  },
}

export const TestSelectInModal: Story = {
  render: Template,
  args: {
    title: "Modal with Select inside",
    size: "small",
    children: (
      <>
        <Select>
          <SelectOption value="1" label="Option 1" key="o-1" />
          <SelectOption value="2" label="Option 2" key="o-2" />
          <SelectOption value="3" label="Option 3" key="o-3" />
        </Select>
      </>
    ),
  },
}

export const TestComboBoxInModal: Story = {
  render: Template,
  args: {
    title: <p>Hello</p>,
    size: "small",
    children: (
      <>
        <ComboBox>
          <ComboBoxOption value="Rhubarb" key="1">
            Rhubarb
          </ComboBoxOption>
          <ComboBoxOption value="Carrots" key="2">
            Carrots
          </ComboBoxOption>
          <ComboBoxOption value="Spinach" key="3">
            Spinach
          </ComboBoxOption>
          <ComboBoxOption value="Tomatoes" key="4">
            Tomatoes
          </ComboBoxOption>
        </ComboBox>
      </>
    ),
  },
}
