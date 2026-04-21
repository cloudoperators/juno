/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Meta, StoryObj } from "@storybook/react-vite"

import { NotificationManager, toast } from "./index"
import { PortalProvider } from "../PortalProvider"
import { Modal } from "../Modal"
import { Button } from "../Button"
import { AppShellProvider } from "../AppShellProvider"

const STORY_TOASTER_IDS = {
  simple: "nm-story-simple",
  semantics: "nm-story-semantics",
  modal: "nm-story-modal",
  shadowRootOff: "nm-story-shadow-root-off",
  shadowRootOn: "nm-story-shadow-root-on",
} as const

const meta: Meta<typeof NotificationManager> = {
  title: "WIP/NotificationManager",
  component: NotificationManager,
  decorators: [
    (Story) => (
      <PortalProvider>
        <Story />
      </PortalProvider>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const SimpleMountAndClick: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Mount NotificationManager once and trigger a toast with a simple click handler. This demonstrates the minimum integration pattern for app entrypoints.",
      },
    },
  },
  render: () => (
    <div className="jn:flex jn:items-center jn:gap-3">
      <Button
        label="Show notification"
        onClick={() => {
          toast("NotificationManager mounted and working", {
            description: "Clicking this button triggers a standard toast.",
            duration: 5000,
            toasterId: STORY_TOASTER_IDS.simple,
          })
        }}
      />
      <NotificationManager id={STORY_TOASTER_IDS.simple} />
    </div>
  ),
}

export const AllSemanticButtons: Story = {
  parameters: {
    docs: {
      description: {
        story: "Shows all semantic helpers: info, success, warning, error, and danger.",
      },
    },
  },
  render: () => (
    <div className="jn:flex jn:flex-wrap jn:gap-2">
      <Button
        label="Info"
        onClick={() =>
          toast.info("Info notification", {
            description: "Semantic info variant",
            toasterId: STORY_TOASTER_IDS.semantics,
          })
        }
      />
      <Button
        label="Success"
        onClick={() =>
          toast.success("Success notification", {
            description: "Semantic success variant",
            toasterId: STORY_TOASTER_IDS.semantics,
          })
        }
      />
      <Button
        label="Warning"
        onClick={() =>
          toast.warning("Warning notification", {
            description: "Semantic warning variant",
            toasterId: STORY_TOASTER_IDS.semantics,
          })
        }
      />
      <Button
        label="Error"
        onClick={() =>
          toast.error("Error notification", {
            description: "Semantic error variant",
            toasterId: STORY_TOASTER_IDS.semantics,
          })
        }
      />
      <Button
        label="Danger"
        onClick={() =>
          toast.danger("Danger notification", {
            description: "Semantic danger variant",
            toasterId: STORY_TOASTER_IDS.semantics,
          })
        }
      />
      <NotificationManager id={STORY_TOASTER_IDS.semantics} />
    </div>
  ),
}

export const InsideModalOverlaysModal: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Triggers a toast from inside modal content. The toast renders above the modal, showing that notification rendering stays visible over layered portal content.",
      },
    },
  },
  render: () => {
    const [isOpen, setOpen] = React.useState(false)

    return (
      <div className="jn:flex jn:gap-2">
        <Button label="Open modal" onClick={() => setOpen(true)} />
        <Modal title="Modal with toast trigger" open={isOpen} onCancel={() => setOpen(false)}>
          <p>Click the button below while modal is open.</p>
          <Button
            className="jn:mt-3"
            label="Show toast from modal"
            onClick={() => {
              toast.success("Toast triggered inside modal", {
                description: "This should render above modal content.",
                toasterId: STORY_TOASTER_IDS.modal,
              })
            }}
          />
        </Modal>
        <NotificationManager id={STORY_TOASTER_IDS.modal} />
      </div>
    )
  },
}

export const ShadowRootFalseWorks: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Rendering without ShadowRoot works correctly out of the box. This story uses AppShellProvider with shadowRoot={false} and shows NotificationManager working as expected.",
      },
    },
  },
  render: () => (
    <AppShellProvider shadowRoot={false}>
      <div className="jn:flex jn:items-center jn:gap-3 jn:p-3">
        <Button
          label="Show toast (shadowRoot=false)"
          onClick={() => {
            toast.success("Rendered without ShadowRoot", {
              description: "NotificationManager works correctly when shadowRoot is disabled.",
              toasterId: STORY_TOASTER_IDS.shadowRootOff,
            })
          }}
        />
        <NotificationManager id={STORY_TOASTER_IDS.shadowRootOff} />
      </div>
    </AppShellProvider>
  ),
}

export const ShadowRootTrueNeedsFix: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Rendering with ShadowRoot currently needs an additional fix/workaround. This story uses AppShellProvider with shadowRoot={true} and mounts NotificationManager, mounting NotificationManager inside PortalProvider.Portal doesn't fix behavior. See: https://github.com/emilkowalski/sonner/issues/361",
      },
    },
  },
  render: () => (
    <AppShellProvider shadowRoot={true}>
      <div className="jn:flex jn:items-center jn:gap-3 jn:p-3">
        <Button
          label="Show toast (shadowRoot=true)"
          onClick={() => {
            toast.warning("Rendered inside ShadowRoot", {
              description: "Known caveat: this setup may need a fix/workaround for Sonner.",
              toasterId: STORY_TOASTER_IDS.shadowRootOn,
            })
          }}
        />
        <NotificationManager id={STORY_TOASTER_IDS.shadowRootOn} />
      </div>
    </AppShellProvider>
  ),
}
