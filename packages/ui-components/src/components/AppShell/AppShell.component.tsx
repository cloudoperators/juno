/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode } from "react"
import { AppBody } from "../AppBody/index"
import { PageHeader } from "../PageHeader/index"
import { MainContainer } from "../MainContainer/index"
import { MainContainerInner } from "../MainContainerInner/index"
import { ContentContainer } from "../ContentContainer/index"
import { PageFooter } from "../PageFooter/index"
import { HeaderContainer } from "../HeaderContainer/index"

/**
 * Body of the app. Treat this like the body tag of an html page.
 */
export const AppShell: React.FC<AppShellProps> = ({
  children,
  className = "",
  embedded = false,
  pageHeader = <PageHeader />,
  pageFooter = <PageFooter />,
  fullWidthContent, // Must be undefined by default, as we need to differentiate between explicitly passed false and not passed at all.
  sideNavigation,
  topNavigation,
  ...props
}) => {
  // Determine whether to pass set fullWidth to true in embedded mode or not:
  // In embedded mode (i.e. embedded == true), fullWidthContent should default to true, unless explicitly passed as false.
  // In non-embedded mode, fullWidthContent should default to false, unless explicitly set to true.
  const fullWidthOrDefault = embedded ? fullWidthContent !== false : fullWidthContent === true

  return (
    <AppBody className={className} {...props}>
      {embedded ? (
        <>
          {topNavigation && <HeaderContainer fullWidth={fullWidthOrDefault}>{topNavigation}</HeaderContainer>}
          <MainContainer>
            <MainContainerInner
              fullWidth={fullWidthOrDefault}
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
          <HeaderContainer fullWidth={fullWidthOrDefault}>
            {pageHeader && typeof pageHeader === "string" ? <PageHeader heading={pageHeader} /> : pageHeader}
            {topNavigation}
          </HeaderContainer>
          {/* Wrap everything except page header and footer and navigations in a main container. Add top margin to MainContainerInner as we are not in embedded mode here. */}
          <MainContainer>
            <MainContainerInner
              fullWidth={fullWidthOrDefault}
              hasSideNav={sideNavigation ? true : false}
              className="jn-mt-[3.875rem]"
            >
              {sideNavigation}
              <ContentContainer>{children}</ContentContainer>
            </MainContainerInner>
          </MainContainer>

          {pageFooter ? pageFooter : <PageFooter />}
        </>
      )}
    </AppBody>
  )
}

export interface AppShellProps extends React.HTMLAttributes<HTMLElement> {
  /** The main content of the app. */
  children?: ReactNode
  /** Pass either the `<PageHeader>` component or if you don't need to add any content to the page header pass a string to be used as the app name in the standard page header. */
  pageHeader?: ReactNode
  /** Optional. If specified pass a `<PageFooter>` component. If undefined will use default PageFooter */
  pageFooter?: ReactNode
  /** Optional. If specified expects a `<TopNavigation>` component. If undefined no top navigation is rendered. */
  topNavigation?: ReactNode
  /** Optional. If specified expects a `<SideNavigation>` component. If undefined no side navigation is rendered. */
  sideNavigation?: ReactNode
  /** Optional: Defaults to false. Set embedded to true if app is to be rendered embedded in another app/page.
   * In this case only the content area and children are rendered, a TopNavigation if passed, but no header/footer or remaining layout components */
  embedded?: boolean
  /** Whether the main page / view content can spread over the full available width of the viewport or not. Default is `false` (resulting in a width-constrained, centred content column on very wide screens) UNLESS the AppShell is rendered with embedded as true, then the main content will be full-width by default. In embedded mode, `fullWidthContent` can still be passed as `false` explicitly. */
  fullWidthContent?: boolean
  /** Add a custom class name */
  className?: string
}
