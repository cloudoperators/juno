/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { AppBody } from "../AppBody/index"
import { PageHeader } from "../PageHeader/index"
import { MainContainer } from "../MainContainer/index"
import { MainContainerInner } from "../MainContainerInner/index"
import { ContentContainer } from "../ContentContainer/index"
import { PageFooter } from "../PageFooter/index"

/**
 * Body of the app. Treat this like the body tag of an html page.
 */
export const AppShell = ({
  children,
  className = "",
  contentHeading = "",
  embedded = false,
  fullWidthContent,
  pageHeader = <PageHeader />,
  pageFooter = <PageFooter />,
  sideNavigation,
  topNavigation,
  ...props
}: AppShellProps) => {
  // Determine whether to pass set fullWidth to true in embedded mode or not:
  // In non-embedded mode, fullWidthContent should default to false, unless explicitly set to true.
  // In embedded mode though, fullWidthContent should default to true, unless explicitly passed as false.

  if (contentHeading && contentHeading.length) {
    console.warn(
      "AppShell: The contentHeading prop is obsolete and will be removed in a future version. In order to render a content heading, use a ContentHeading element as a child in your main content."
    )
  }

  return (
    <AppBody className={className} {...props}>
      {contentHeading || ""}
      {embedded ? (
        <>
          {topNavigation && topNavigation}
          <MainContainer>
            <MainContainerInner
              fullWidth={fullWidthContent === false ? false : true}
              hasSideNav={sideNavigation ? true : false}
              className={`${topNavigation ? "jn-mt-[3.875rem]" : ""}`}
            >
              {sideNavigation && sideNavigation}
              <ContentContainer>{children}</ContentContainer>
            </MainContainerInner>
          </MainContainer>
        </>
      ) : (
        <>
          {pageHeader && (typeof pageHeader === "string" || pageHeader instanceof String) ? (
            <PageHeader heading={pageHeader} />
          ) : (
            pageHeader
          )}
          {topNavigation && topNavigation}
          {/* Wrap everything except page header and footer and navigations in a main container. Add top margin to MainContainerInner as we are not in embedded mode here. */}
          <MainContainer>
            <MainContainerInner
              fullWidth={fullWidthContent === true ? true : false}
              hasSideNav={sideNavigation ? true : false}
              className="jn-mt-[3.875rem]"
            >
              {sideNavigation && sideNavigation}
              {/* Content Container. This is the place to add the app's main content. Render left margin only if no SideNavigation is present. */}
              <ContentContainer className={sideNavigation ? "" : "jn-ml-8"}>{children}</ContentContainer>
            </MainContainerInner>
          </MainContainer>

          {pageFooter ? pageFooter : <PageFooter />}
        </>
      )}
    </AppBody>
  )
}

export interface AppShellProps {
  /** The main content of the app. */
  children?: React.ReactNode
  /** Pass either the `<PageHeader>` component or if you don't need to add any content to the page header pass a string to be used as the app name in the standard page header. */
  pageHeader?: string | React.ReactNode
  /** Optional. If specified pass a `<PageFooter>` component. If undefined will use default PageFooter */
  pageFooter?: React.ReactNode
  /** Optional. If specified expects a `<TopNavigation>` component. If undefined no top navigation is rendered. */
  topNavigation?: React.ReactNode
  /** Optional. If specified expects a `<SideNavigation>` component. If undefined no side navigation is rendered. */
  sideNavigation?: React.ReactNode
  /** OBSOLETE: The contentHeading prop is obsolete and will be removed in a future version. In order to render a content heading, use a `<ContentHeading>` element as a child in your main content. */
  contentHeading?: string
  /** Optional: Defaults to false. Set embedded to true if app is to be rendered embedded in another app/page.
   * In this case only the content area and children are rendered, a TopNavigation if passed, but no header/footer or remaining layout components */
  embedded?: boolean
  /** Whether the main page / view content can spread over the full available width of the viewport or not. Default is `false` (resulting in a width-constrained, centred content column on very wide screens) UNLESS the AppShell is rendered with embedded as true, then the main content will be full-width by default. In embedded mode, `fullWidthContent` can still be passed as `false` explicitly. */
  fullWidthContent?: boolean
  /** Add a custom class name */
  className?: string
}
