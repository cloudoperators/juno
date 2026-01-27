/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useEffect, useState, ReactNode } from "react"

// eslint-disable-next-line no-unused-vars
type ItemChangeHandler = (value: ReactNode) => void

// eslint-disable-next-line no-unused-vars
type AddItemFunction = (key: ReactNode, children: ReactNode, label: string, value: string) => void

type PrioritizedKeyType = "children" | "value" | "label"

export interface NavigationContextType {
  activeItem?: ReactNode
  addItem?: AddItemFunction
  handleActiveItemChange?: ItemChangeHandler
  navigationDisabled?: boolean
  navigationRole?: string
}

export const NavigationContext = createContext<NavigationContextType | undefined>(undefined)

interface NavigationMappingItem {
  // store the associated key of the item in the map inside the object, so we can easily get the key later if we have to find an object by any of its keys
  id: ReactNode
  value: string
  label: string
  children: ReactNode
  // priority of what to actually render in each item
  displayName: ReactNode
}

/**
 * A generic `Navigation` component that offers context-managed item selection,
 * designed for internal use with semantic wrappers like `SideNavigation`,
 * `TabNavigation`, and `TopNavigation`.
 *
 * @component
 * @param {ReactNode} [activeItem] Currently active item within the navigation context.
 * @param {string} [ariaLabel] Descriptive label for navigation, aiding accessibility.
 * @param {ReactNode} [children] Navigation items rendered within the container.
 * @param {string} [className] Custom class names for styling navigation elements. Defaults to an empty string.
 * @param {boolean} [disabled] Disables navigation state and its children. Defaults to `false`.
 * @param {ItemChangeHandler} [onActiveItemChange] Callback fired on active item updates.
 * @returns {React.ReactElement} A flexible navigation component serving organized item management.
 */
export const Navigation: React.FC<NavigationProps> = ({
  activeItem = "",
  ariaLabel = "",
  children,
  className = "",
  disabled = false,
  onActiveItemChange,
  ...props
}) => {
  const [activeItm, setActiveItm] = useState<ReactNode>("")
  const [items, setItems] = useState(new Map<ReactNode, NavigationMappingItem>())

  const findItemIdByKeyValue = (valueToFind: ReactNode) => {
    // The prioritized sequence of individual item keys to check for a value:
    const stringValueToFind =
      typeof valueToFind === "string" || typeof valueToFind === "number"
        ? String(valueToFind)
        : JSON.stringify(valueToFind)
    const prioritizedKeys: PrioritizedKeyType[] = ["value", "children", "label"]
    const itemsKeys = Array.from(items.keys())
    if (itemsKeys.includes(stringValueToFind)) {
      return stringValueToFind
    } else {
      // If the value is not found in the keys of the items map, search for the value in the individual items according to the sequence in prioritizedKeys. If a matching item is found, return its id or null:
      let foundItemId: ReactNode = undefined
      for (const key of itemsKeys) {
        const obj = items.get(key)
        prioritizedKeys.forEach((pKey: PrioritizedKeyType) => {
          if (obj && obj[pKey] === stringValueToFind) {
            foundItemId = obj.id
          }
        })
      }
      return foundItemId
    }
  }

  useEffect(() => {
    if (activeItem) {
      const activeItemId = findItemIdByKeyValue(String(activeItem as string | number))
      setActiveItm(activeItemId)
    }
  }, [activeItem])

  useEffect(() => {
    if (activeItem) {
      const activeItemId = findItemIdByKeyValue(String(activeItem as string | number))
      setActiveItm(activeItemId)
    }
  }, [items])

  // Key is set as established by the child item according to priority: value || children || label
  const addItem = (key: ReactNode, children: ReactNode, label: string, value: string) => {
    setItems((oldMap) =>
      new Map(oldMap).set(key, {
        id: key,
        value: value,
        label: label,
        children: children,
        displayName: children || label || value,
      })
    )
  }

  const handleActiveItemChange = (key: ReactNode) => {
    setActiveItm(key)
    onActiveItemChange && onActiveItemChange(key)
  }

  return (
    <NavigationContext.Provider
      value={{
        activeItem: activeItm,
        addItem: addItem,
        handleActiveItemChange: handleActiveItemChange,
        navigationDisabled: disabled,
      }}
    >
      <ul
        aria-disabled={disabled ? true : false}
        aria-label={ariaLabel && ariaLabel.length ? ariaLabel : ""}
        className={`juno-navigation 
          ${disabled ? "juno-navigation-disabled" : ""} 
          ${className}`}
        role="navigation"
        {...props}
      >
        {children}
      </ul>
    </NavigationContext.Provider>
  )
}

export interface NavigationProps extends React.HTMLAttributes<HTMLUListElement> {
  /**
   * The currently active item. Pass the `value`, `label` prop, or the child string of the respective NavigationItem.
   */
  activeItem?: ReactNode

  /**
   * The aria label of the navigation for accessibility purposes.
   */
  ariaLabel?: string

  /**
   * The child navigation items to be rendered within the navigation component.
   */
  children?: ReactNode

  /**
   * Pass a custom className to the navigation parent element.
   * @default ""
   */
  className?: string

  /**
   * Whether the navigation is disabled, affecting interactivity for all children.
   * @default false
   */
  disabled?: boolean

  /**
   * Handler to execute when the active item changes.
   */
  onActiveItemChange?: ItemChangeHandler
}
