import React from "react"
import PropTypes from "prop-types"
import { PortalProvider } from "."
import { Toast } from "../Toast/"

export default {
  title: "WiP/PortalProvider",
  component: PortalProvider,
  subcomponents: { "PortalProvider.Portal": PortalProvider.Portal },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: false,
    },
  },
  decorators: [(story) => <PortalProvider>{story()}</PortalProvider>],
}

const Template = ({ children, ...args }) => <PortalProvider.Portal {...args}>{children}</PortalProvider.Portal>

Template.propTypes = {
  children: PropTypes.node,
}

export const WithPortalComponent = {
  render: Template,
  args: {
    children: <Toast text="I'm inside a portal." />,
  },
}

// const Default = () => (
//   <PortalProvider>
//     <PortalProvider.Portal>
//       <Toast text="I'm inside a portal." />
//     </PortalProvider.Portal>
//   </PortalProvider>
// )
//
// const PortalRef = () => (
//   <PortalProvider>
//     <div>Something</div>
//   </PortalProvider>
// )
