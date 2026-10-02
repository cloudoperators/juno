/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { AppShell, AppShellProps } from "./index"
import { PageHeader } from "../PageHeader/index"
import { PageFooter } from "../PageFooter/index"
import { SideNavigation } from "../SideNavigation/index"
import { SideNavigationItem } from "../SideNavigationItem/index"
import { TopNavigation } from "../TopNavigation/index"
import { TopNavigationItem } from "../TopNavigationItem/index"
import { TabBar } from "../TabBar/index"
import { TabBarItem } from "../TabBarItem/index"
import { ContentHeading } from "../ContentHeading/index"
import { Container } from "../Container/index"

const meta: Meta<typeof AppShell> = {
  title: "Layout/AppShell",
  component: AppShell,
  argTypes: {
    pageHeader: {
      control: false,
    },
    pageFooter: {
      control: false,
    },
    topNavigation: {
      control: false,
    },
    sideNavigation: {
      control: false,
    },
    children: {
      control: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const Template = ({ children, ...args }: AppShellProps) => (
  <AppShell {...args}>
    <Container py={true}>{children}</Container>
  </AppShell>
)

export const Default: Story = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Responsive shell for your application with content heading and default header and footer.",
      },
    },
  },
  args: {
    children: [<ContentHeading key="1">My Page</ContentHeading>, <p key="2">Content goes here</p>],
  },
}

export const Embedded: Story = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story:
          "Responsive shell for your application in embedded mode (typical use case for MFEs, i.e. if your app is to be embedded somewhere).",
      },
    },
  },
  args: {
    embedded: true,
    children: [<ContentHeading key="1">My Page</ContentHeading>, <p key="2">Content goes here</p>],
  },
}

export const EmbeddedWithTopNav: Story = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story:
          "Responsive shell for your application in embedded mode (typical use case for MFEs, i.e. if your app is to be embedded somewhere). TopNavigation can be used in embedded mode.",
      },
    },
  },
  args: {
    embedded: true,
    topNavigation: (
      <TopNavigation>
        <TopNavigationItem icon="home" label="Home" />
        <TopNavigationItem active label="Navigation Item" />
      </TopNavigation>
    ),
    children: [<ContentHeading key="1">My Page</ContentHeading>, <p key="2">Content goes here</p>],
  },
}

export const EmbeddedWithSideNav: Story = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story:
          "Responsive shell for your application in embedded mode (typical use case for MFEs, i.e. if your app is to be embedded somewhere). SideNavigation can be used in embedded mode.",
      },
    },
  },
  args: {
    embedded: true,
    sideNavigation: (
      <SideNavigation>
        <SideNavigationItem selected label="Item 1" />
        <SideNavigationItem label="Item 2" />
        <SideNavigationItem label="Item 3" />
      </SideNavigation>
    ),
    children: [<ContentHeading key="1">My Page</ContentHeading>, <p key="2">Content goes here</p>],
  },
}

export const AppName: Story = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Responsive shell for your application with provided app name for the header and default footer.",
      },
    },
  },
  args: {
    pageHeader: "My App",
    children: [<ContentHeading key="1">My Page</ContentHeading>, <p key="2">Content goes here</p>],
  },
}

export const CustomPageHeader: Story = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Responsive shell for your application with custom page header and default footer.",
      },
    },
  },
  args: {
    pageHeader: <PageHeader applicationName="My Custom Header" />,
    children: [<ContentHeading key="1">My Page</ContentHeading>, <p key="2">Content goes here</p>],
  },
}

export const CustomPageFooter: Story = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Responsive shell for your application with default header and custom footer.",
      },
    },
  },
  args: {
    pageFooter: <PageFooter>My custom footer</PageFooter>,
    children: [<ContentHeading key="1">My Page</ContentHeading>, <p key="2">Content goes here</p>],
  },
}

export const WithSideNavigation: Story = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Responsive shell for your application with a side navigation.",
      },
    },
  },
  args: {
    sideNavigation: (
      <SideNavigation>
        <SideNavigationItem selected label="Item 1" />
        <SideNavigationItem label="Item 2" />
        <SideNavigationItem label="Item 3" />
      </SideNavigation>
    ),
    children: [<ContentHeading key="1">My Page</ContentHeading>, <p key="2">Content goes here</p>],
  },
}

export const WithTopNavigation: Story = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Responsive shell for your application with top navigation.",
      },
    },
  },
  args: {
    topNavigation: (
      <TopNavigation>
        <TopNavigationItem icon="home" label="Home" />
        <TopNavigationItem active label="Navigation Item" />
      </TopNavigation>
    ),
    children: [<ContentHeading key="1">My Page</ContentHeading>, <p key="2">Content goes here</p>],
  },
}

export const WithSideAndTopNavigation: Story = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Responsive shell for your application with both a top navigation and side navigation.",
      },
    },
  },
  args: {
    topNavigation: (
      <TopNavigation>
        <TopNavigationItem icon="home" label="Home" />
        <TopNavigationItem active label="Navigation Item" />
      </TopNavigation>
    ),
    sideNavigation: (
      <SideNavigation>
        <SideNavigationItem selected label="Item 1" />
        <SideNavigationItem label="Item 2" />
        <SideNavigationItem label="Item 3" />
      </SideNavigation>
    ),
    children: [<ContentHeading key="1">My Page</ContentHeading>, <p key="2">Content goes here</p>],
  },
}

export const WithTabBar: Story = {
  render: Template,
  parameters: {},
  args: {
    children: [
      <TabBar key="1">
        <TabBarItem label="Item 1" active />
        <TabBarItem label="Item 2" />
        <TabBarItem label="Item 3" />
      </TabBar>,
      <ContentHeading key="2">My Page</ContentHeading>,
    ],
  },
}
