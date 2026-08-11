/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"

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
  infinite: "nm-story-infinite",
  callbacks: "nm-story-callbacks",
  nonDismissible: "nm-story-non-dismissible",
  perToastDismissible: "nm-story-per-toast-dismissible",
} as const

const meta: Meta<typeof NotificationManager> = {
  title: "WIP/NotificationManager",
  component: NotificationManager,
  argTypes: {
    id: {
      control: "text",
      description: "Optional Sonner toaster id to scope notifications to this instance",
    },
    dismissible: {
      control: "boolean",
      description: "Controls whether notifications can be dismissed manually",
    },
    duration: {
      control: { type: "number", min: 1000, max: 10000, step: 500 },
      description: "Default display time for notifications in milliseconds",
    },
    visibleToasts: {
      control: { type: "number", min: 1, max: 10, step: 1 },
      description: "Maximum number of notifications visible on screen at once",
    },
    position: {
      control: "select",
      options: ["top-left", "top-right", "bottom-left", "bottom-right", "top-center", "bottom-center"],
      description: "Position of the notification stack on screen",
    },
  },
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
  args: {
    position: "bottom-right",
  },
  render: (args) => (
    <div className="jn:flex jn:items-center jn:gap-3">
      <Button
        label="Show notification"
        onClick={() => {
          toast("NotificationManager mounted and working (edit props above)", {
            description: "Clicking this button triggers a standard toast.",
            duration: 5000,
            toasterId: STORY_TOASTER_IDS.simple,
          })
        }}
      />
      <NotificationManager {...args} id={STORY_TOASTER_IDS.simple} />
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
  args: {
    dismissible: true,
    duration: 4000,
    visibleToasts: 3,
    position: "bottom-right",
  },
  render: (args) => (
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
      <NotificationManager {...args} id={STORY_TOASTER_IDS.semantics} />
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
  render: (args) => {
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
        <NotificationManager {...args} id={STORY_TOASTER_IDS.modal} />
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
  args: {
    dismissible: true,
    duration: 4000,
    visibleToasts: 3,
    position: "bottom-right",
  },
  render: (args) => (
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
        <NotificationManager {...args} id={STORY_TOASTER_IDS.shadowRootOff} />
      </div>
    </AppShellProvider>
  ),
}

export const ShadowRootTrue: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Rendering with ShadowRoot currently needs an additional workaround. This story uses AppShellProvider with shadowRoot={true} and mounts NotificationManager, mounting NotificationManager inside PortalProvider.Portal doesn't fix behavior. See: https://github.com/emilkowalski/sonner/issues/361",
      },
    },
  },
  args: {
    dismissible: true,
    duration: 4000,
    visibleToasts: 3,
    position: "bottom-right",
  },
  render: (args) => (
    <AppShellProvider shadowRoot={true}>
      <div className="jn:flex jn:items-center jn:gap-3 jn:p-3">
        <Button
          label="Show toast (shadowRoot=true)"
          onClick={() => {
            toast.warning("Rendered inside ShadowRoot", {
              description: "Known caveat: this setup may need a workaround for Sonner.",
              toasterId: STORY_TOASTER_IDS.shadowRootOn,
            })
          }}
        />
        <NotificationManager {...args} id={STORY_TOASTER_IDS.shadowRootOn} />
      </div>
    </AppShellProvider>
  ),
}

export const InfiniteDuration: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Notifications can be created with infinite duration by passing Infinity. These notifications stay visible until manually dismissed by the user, useful for critical alerts or persistent messages that require explicit action.",
      },
    },
  },
  args: {
    dismissible: true,
    duration: Infinity,
    visibleToasts: 3,
    position: "bottom-right",
  },
  render: (args) => (
    <>
      <Button
        label="Critical Alert (no auto-close)"
        onClick={() => {
          toast.info("Important information", {
            description: "Duration is set to Infinity, so it persists until dismissed.",
            toasterId: STORY_TOASTER_IDS.infinite,
          })
        }}
      />
      <NotificationManager {...args} id={STORY_TOASTER_IDS.infinite} />
    </>
  ),
}

export const DismissCallbacks: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Individual notifications can receive lifecycle callbacks via toast options. `onDismiss` fires when the user manually closes the toast, `onAutoClose` fires when it expires after its duration. Check the browser console to see the callbacks firing.",
      },
    },
  },
  args: {
    dismissible: true,
    duration: 4000,
    visibleToasts: 3,
    position: "bottom-right",
  },
  render: (args) => (
    <div className="jn:flex jn:flex-wrap jn:gap-2">
      <Button
        label="With onDismiss"
        onClick={() => {
          toast.info("Dismiss me manually", {
            description: "Click the close button — check the console.",
            toasterId: STORY_TOASTER_IDS.callbacks,
            onDismiss: () => console.log("onDismiss fired"),
          })
        }}
      />
      <Button
        label="With onAutoClose"
        onClick={() => {
          toast.success("Wait for auto-close", {
            description: "Will auto-close after 4s — check the console.",
            toasterId: STORY_TOASTER_IDS.callbacks,
            onAutoClose: () => console.log("onAutoClose fired"),
          })
        }}
      />
      <Button
        label="With both callbacks"
        onClick={() => {
          toast.warning("Dismiss or wait", {
            description: "Either action logs to the console.",
            toasterId: STORY_TOASTER_IDS.callbacks,
            onDismiss: () => console.log("onDismiss fired"),
            onAutoClose: () => console.log("onAutoClose fired"),
          })
        }}
      />
      <NotificationManager {...args} id={STORY_TOASTER_IDS.callbacks} />
    </div>
  ),
}

export const ManagerLevelNonDismissible: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "When `dismissible={false}` is set on NotificationManager, all toasts rendered by that instance have no close icon and cannot be manually dismissed. They will disappear only after their duration expires.",
      },
    },
  },
  args: {
    dismissible: false,
    duration: 4000,
    visibleToasts: 3,
    position: "bottom-right",
  },
  render: (args) => (
    <div className="jn:flex jn:flex-wrap jn:gap-2">
      <Button
        label="Show non-dismissible toast"
        onClick={() => {
          toast.warning("This toast has no close button", {
            description: "Manager-level dismissible={false} — wait for auto-close.",
            toasterId: STORY_TOASTER_IDS.nonDismissible,
          })
        }}
      />
      <NotificationManager {...args} id={STORY_TOASTER_IDS.nonDismissible} />
    </div>
  ),
}

export const PerToastDismissibleOverride: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Individual `toast()` calls can override the manager-level `dismissible` setting. Here the manager defaults to `dismissible={false}`, but one specific toast passes `dismissible: true` to opt back in to manual dismissal.",
      },
    },
  },
  args: {
    dismissible: false,
    duration: 8000,
    visibleToasts: 3,
    position: "bottom-right",
  },
  render: (args) => (
    <div className="jn:flex jn:flex-wrap jn:gap-2">
      <Button
        label="Non-dismissible (manager default)"
        onClick={() => {
          toast.error("No close button — manager default", {
            description: "Inherits dismissible={false} from the manager.",
            toasterId: STORY_TOASTER_IDS.perToastDismissible,
          })
        }}
      />
      <Button
        label="Dismissible (per-toast override)"
        onClick={() => {
          toast.success("Has close button — per-toast override", {
            description: "Passes dismissible: true, overriding the manager.",
            toasterId: STORY_TOASTER_IDS.perToastDismissible,
            dismissible: true,
          })
        }}
      />
      <NotificationManager {...args} id={STORY_TOASTER_IDS.perToastDismissible} />
    </div>
  ),
}
