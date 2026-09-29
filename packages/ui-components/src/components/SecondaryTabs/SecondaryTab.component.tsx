/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { forwardRef, ButtonHTMLAttributes, ReactNode } from "react"
import { Icon } from "../Icon/Icon.component"
import { KnownIcons } from "../Icon/Icon.component.js"
import { useSecondaryTabsContext } from "./SecondaryTabs.component"

export interface SecondaryTabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Must match the `value` of the corresponding `SecondaryTabPanel`. */
  value: string
  /** Icon rendered to the left of the label. */
  iconLeft?: KnownIcons
  /** Icon rendered to the right of the label. */
  iconRight?: KnownIcons
  children?: ReactNode
  /** @default false */
  disabled?: boolean
  /** @default "" */
  className?: string
  /** Managed by roving tabindex; consumer value is ignored. */
  tabIndex?: number
}

const tabBaseStyles = `
  jn:relative
  jn:flex
  jn:items-center
  jn:gap-[0.375rem]
  jn:rounded-[0.1875rem]
  jn:px-[0.625rem]
  jn:py-[0.4375rem]
  jn:text-sm
  jn:font-bold
  jn:leading-[1.4]
  jn:select-none
  jn:transition-colors
  jn:duration-150
  jn:border
  jn:focus-visible:outline-hidden
  jn:focus-visible:ring-2
  jn:focus-visible:ring-theme-focus
  jn:focus-visible:ring-offset-1
  jn:focus-visible:ring-offset-theme-focus
`

const tabDefaultStyles = `
  jn:cursor-pointer
  jn:bg-transparent
  jn:border-transparent
  jn:text-theme-secondary-tab
`

const tabHoverStyles = `jn:hover:text-theme-secondary-tab-hover`

const tabActiveStyles = `
  jn:cursor-default
  jn:bg-theme-secondary-tab-active
  jn:border-theme-secondary-tab-active
  jn:text-theme-secondary-tab-active
`

const tabDisabledStyles = `
  jn:cursor-not-allowed
  jn:opacity-50
  jn:text-theme-secondary-tab-disabled
`

/**
 * A single selectable tab inside `SecondaryTabs`.
 * @see {@link SecondaryTabProps}
 */
export const SecondaryTab = forwardRef<HTMLButtonElement, SecondaryTabProps>(
  (
    {
      value,
      iconLeft,
      iconRight,
      disabled: disabledProp,
      onClick,
      onKeyDown: onKeyDownProp,
      tabIndex: _tabIndex,
      children,
      className = "",
      ...rest
    },
    ref
  ) => {
    const { activeTab, setActiveTab, disabled: contextDisabled, tabsId } = useSecondaryTabsContext()

    const isActive = activeTab === value
    const isDisabled = disabledProp ?? contextDisabled

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (isDisabled) return
      setActiveTab(value)
      onClick?.(e)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      const tablist = e.currentTarget.closest('[role="tablist"]')
      if (tablist) {
        const enabledTabs = Array.from(
          tablist.querySelectorAll<HTMLButtonElement>('[role="tab"]:not([aria-disabled="true"])')
        )
        const currentIndex = enabledTabs.indexOf(e.currentTarget)
        let nextTab: HTMLButtonElement | null = null

        if (e.key === "ArrowRight") {
          e.preventDefault()
          nextTab = enabledTabs[(currentIndex + 1) % enabledTabs.length]
        } else if (e.key === "ArrowLeft") {
          e.preventDefault()
          nextTab = enabledTabs[(currentIndex - 1 + enabledTabs.length) % enabledTabs.length]
        } else if (e.key === "Home") {
          e.preventDefault()
          nextTab = enabledTabs[0]
        } else if (e.key === "End") {
          e.preventDefault()
          nextTab = enabledTabs[enabledTabs.length - 1]
        }

        if (nextTab) {
          const nextValue = nextTab.dataset.value
          if (nextValue) {
            setActiveTab(nextValue)
            nextTab.focus()
          }
        }
      }
      onKeyDownProp?.(e)
    }

    return (
      <button
        ref={ref}
        {...rest}
        role="tab"
        aria-selected={isActive}
        aria-disabled={isDisabled ? true : undefined}
        aria-controls={`${tabsId}-tabpanel-${value}`}
        id={`${tabsId}-tab-${value}`}
        data-value={value}
        tabIndex={isActive && !isDisabled ? 0 : -1}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className={`juno-secondary-tab ${isActive ? "juno-secondary-tab-active" : ""} ${isDisabled ? "juno-secondary-tab-disabled" : ""} ${tabBaseStyles} ${isActive ? tabActiveStyles : `${tabDefaultStyles} ${!isDisabled ? tabHoverStyles : ""}`} ${isDisabled ? tabDisabledStyles : ""} ${className}`}
      >
        {iconLeft && <Icon icon={iconLeft} size="1rem" />}
        {children}
        {iconRight && <Icon icon={iconRight} size="1rem" />}
      </button>
    )
  }
)

SecondaryTab.displayName = "SecondaryTab"
