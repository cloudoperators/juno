/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

import { AppShell } from "./index.js"
import { PageHeader } from "../PageHeader/index"
import { PageFooter } from "../PageFooter/index"
import { SideNavigation } from "../SideNavigation/"
import { SideNavigationItem } from "../SideNavigationItem/"
import { TopNavigation } from "../TopNavigation/index"
import { TopNavigationItem } from "../TopNavigationItem/index"
import { TabNavigation } from "../TabNavigation/index"
import { TabNavigationItem } from "../TabNavigationItem/index"
import { ContentHeading } from "../ContentHeading/index"

export default {
  title: "Layout/AppShell",
  component: AppShell,
  argTypes: {
    pageHeader: {
      control: false
    },
    pageFooter: {
      control: false
    },
    topNavigation: {
      control: false
    },
    sideNavigation: {
      control: false
    },
    children: {
      control: false
    },
  },
}

const Template = ({children, ...args}) => <AppShell {...args}>
                              { children }
                            </AppShell>

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    description: {
      story:
        "Responsive shell for your application with content heading and default header and footer.",
    },
  },
}
Default.args = {
  children: [
      <ContentHeading key="1">My Page</ContentHeading>,
      <p key="2">Content goes here</p>
  ]
}

export const AppName = Template.bind({})
AppName.parameters = {
  docs: {
    description: {
      story:
        "Responsive shell for your application with provided app name for the header and default footer.",
    },
  },
}
AppName.args = {
  pageHeader: "My App",
  children: [
      <ContentHeading key="1">My Page</ContentHeading>,
      <p key="2">Content goes here</p>
  ]
}

export const CustomPageHeader = Template.bind({})
CustomPageHeader.parameters = {
  docs: {
    description: {
      story:
        "Responsive shell for your application with custom page header and default footer.",
    },
  },
}
CustomPageHeader.args = {
  pageHeader: <PageHeader heading="My Custom Header" />,
  children: [
      <ContentHeading key="1">My Page</ContentHeading>,
      <p key="2">Content goes here</p>
  ]
}

export const CustomPageFooter = Template.bind({})
CustomPageFooter.parameters = {
  docs: {
    description: {
      story:
        "Responsive shell for your application with default header and custom footer.",
    },
  },
}
CustomPageFooter.args = {
  pageFooter: <PageFooter>My custom footer</PageFooter>,
  children: [
      <ContentHeading key="1">My Page</ContentHeading>,
      <p key="2">Content goes here</p>
  ]
}

export const WithSideNavigation = Template.bind({})
WithSideNavigation.parameters = {
  docs: {
    description: {
      story:
        "Responsive shell for your application with a side navigation.",
    },
  },
}
WithSideNavigation.args = {
  sideNavigation: <SideNavigation>
                    <SideNavigationItem active label="Item 1"/>
                    <SideNavigationItem label="Item 2" />
                    <SideNavigationItem label="Item 3" />
                  </SideNavigation>,
  children: [
      <ContentHeading key="1">My Page</ContentHeading>,
      <p key="2">Content goes here</p>
  ]
}

export const WithTopNavigation = Template.bind({})
WithTopNavigation.parameters = {
  docs: {
    description: {
      story:
        "Responsive shell for your application with top navigation.",
    },
  },
}
WithTopNavigation.args = {
  topNavigation:  <TopNavigation>
                    <TopNavigationItem
                      icon="home"
                      label="Home"
                    />
                    <TopNavigationItem
                      active
                      label="Navigation Item"
                    />
                  </TopNavigation>,
  children: [
      <ContentHeading key="1">My Page</ContentHeading>,
      <p key="2">Content goes here</p>
  ]
}

export const WithSideAndTopNavigation = Template.bind({})
WithSideAndTopNavigation.parameters = {
  docs: {
    description: {
      story:
        "Responsive shell for your application with both a top navigation and side navigation.",
    },
  },
}
WithSideAndTopNavigation.args = {
  topNavigation:  <TopNavigation>
                    <TopNavigationItem
                      icon="home"
                      label="Home"
                    />
                    <TopNavigationItem
                      active
                      label="Navigation Item"
                    />
                  </TopNavigation>,
  sideNavigation: <SideNavigation>
                    <SideNavigationItem active label="Item 1"/>
                    <SideNavigationItem label="Item 2" />
                    <SideNavigationItem label="Item 3" />
                  </SideNavigation>,
  children: [
      <ContentHeading key="1">My Page</ContentHeading>,
      <p key="2">Content goes here</p>
  ]
}

export const WithTabNavigation = Template.bind({})
WithTabNavigation.parameters = {}
WithTabNavigation.args = {
  children: [
    <TabNavigation key="1">
      <TabNavigationItem label="Item 1" active />
      <TabNavigationItem label="Item 2" />
      <TabNavigationItem label="Item 3" />
    </TabNavigation>,
    <ContentHeading key="2">My Page</ContentHeading>
  ]

}
