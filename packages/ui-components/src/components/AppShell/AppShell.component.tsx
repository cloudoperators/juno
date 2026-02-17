/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { HTMLAttributes, ReactNode } from "react"
import { AppBody } from "../AppBody/index"
import { PageHeader } from "../PageHeader/index"
import { MainContainer } from "../MainContainer/index"
import { MainContainerInner } from "../MainContainerInner/index"
import { ContentContainer } from "../ContentContainer/index"
import { PageFooter } from "../PageFooter/index"
import { HeaderContainer } from "../HeaderContainer/index"

/**
 * The `AppShell` component provides the foundational layout structure for the application.
 * It acts similarly to an HTML `body` element, organizing pages with headers, footers,
 * navigation, and content areas. For simpler manual layout setup, consider using `AppBody`.
 */
export const AppShell = ({
  children,
  className = "",
  embedded = false,
  pageHeader = <PageHeader />,
  pageFooter = <PageFooter />,
  fullWidthContent, // Must be undefined by default, as we need to differentiate between explicitly passed false and not passed at all.
  sideNavigation,
  topNavigation,
  ...props
}: AppShellProps): ReactNode => {
  // Determine whether to set fullWidth to true in embedded mode or not:
  // In embedded mode (i.e., embedded === true), fullWidthContent defaults to true unless explicitly set to false.
  // In non-embedded mode, fullWidthContent defaults to false unless explicitly set to true.
  const fullWidthOrDefault = embedded ? fullWidthContent !== false : fullWidthContent === true

  return (
    <AppBody className={className} {...props}>
      {embedded ? (
        <>
          {topNavigation && <HeaderContainer fullWidth={fullWidthOrDefault}>{topNavigation}</HeaderContainer>}
          <MainContainer>
            <MainContainerInner fullWidth={fullWidthOrDefault} className={`${topNavigation ? "jn:mt-[3.875rem]" : ""}`}>
              {sideNavigation}
              <ContentContainer>{children}</ContentContainer>
            </MainContainerInner>
          </MainContainer>
        </>
      ) : (
        <>
          <HeaderContainer fullWidth={fullWidthOrDefault}>
            {pageHeader && typeof pageHeader === "string" ? <PageHeader applicationName={pageHeader} /> : pageHeader}
            {topNavigation}
          </HeaderContainer>
          {/* Wrap everything except page header and footer and navigations in a main container. Add top margin to MainContainerInner as we are not in embedded mode here. */}
          <MainContainer>
            <MainContainerInner fullWidth={fullWidthOrDefault} className="jn:mt-[3.875rem]">
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

export interface AppShellProps extends HTMLAttributes<HTMLElement> {
  /**
   * The main content of the app.
   */
  children?: ReactNode

  /**
   * Add a custom class name to style the component.
   * @default ""
   */
  className?: string

  /**
   * Determines if the app should be rendered in embedded mode, reducing layout components to core content.
   * @default false
   */
  embedded?: boolean

  /**
   * Pass either a `<PageHeader>` component or a string to be used as the application name in the standard page header.
   * @default `<PageHeader />`
   */
  pageHeader?: ReactNode

  /**
   * An optional `<PageFooter>` component if specified. Uses the default `<PageFooter />` if undefined.
   * @default `<PageFooter />`
   */
  pageFooter?: ReactNode

  /**
   * Optional `<TopNavigation>` component. Only rendered if provided.
   */
  topNavigation?: ReactNode

  /**
   * Optional `<SideNavigation>` component. Only rendered if provided.
   */
  sideNavigation?: ReactNode

  /**
   * Indicates whether the main content should span the full viewport width.
   * Defaults to `false` unless embedded, allowing content to occupy full width.
   */
  fullWidthContent?: boolean
}
