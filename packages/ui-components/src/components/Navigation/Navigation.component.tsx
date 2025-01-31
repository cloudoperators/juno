/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useEffect, useState } from "react"

// eslint-disable-next-line no-unused-vars
type ItemChangeHandler = (value: React.ReactNode) => void

// eslint-disable-next-line no-unused-vars
type AddItemFunction = (key: React.ReactNode, children: React.ReactNode | null, label: string, value: string) => void

type PrioritizedKeyType = "children" | "value" | "label"

export interface NavigationContextType {
  activeItem?: React.ReactNode
  addItem?: AddItemFunction
  handleActiveItemChange?: ItemChangeHandler
  navigationDisabled?: boolean
  navigationRole?: string
}

export const NavigationContext = createContext<NavigationContextType | undefined>(undefined)

interface NavigationMappingItem {
  // store the associated key of the item in the map inside the object, so we can easily get the key later if we have to find an object by any of its keys
  id: React.ReactNode
  value: string
  label: string
  children: React.ReactNode
  // priority of what to actually render in each item
  displayName: React.ReactNode | string
}

/** A generic Navigation component providing all the necessary functionality for a navigation. For internal use only. Not to be used directly, but to be wrapped by more role-specific / semantic navigation components such as `TabNavigation`, `TopNavigation`, `SideNavigation`. */
export const Navigation: React.FC<NavigationProps> = ({
  activeItem = "",
  ariaLabel = "",
  children,
  className = "",
  disabled = false,
  onActiveItemChange,
  ...props
}) => {
  const [activeItm, setActiveItm] = useState<React.ReactNode | undefined>("")
  const [items, setItems] = useState(new Map<React.ReactNode, NavigationMappingItem>())

  const findItemIdByKeyValue = (valueToFind: React.ReactNode) => {
    // The prioritized sequence of individual item keys to check for a value:
    const stringValueToFind = String(valueToFind)
    const prioritizedKeys: PrioritizedKeyType[] = ["value", "children", "label"]
    const itemsKeys = Array.from(items.keys())
    if (itemsKeys.includes(stringValueToFind)) {
      return stringValueToFind
    } else {
      // If the value is not found in the keys of the items map, search for the value in the individual items according to the sequence in prioritizedKeys. If a matching item is found, return its id or null:
      let foundItemId: React.ReactNode | undefined = undefined
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
      const activeItemId = findItemIdByKeyValue(String(activeItem))
      setActiveItm(activeItemId)
    }
  }, [activeItem])

  useEffect(() => {
    if (activeItem) {
      const activeItemId = findItemIdByKeyValue(String(activeItem))
      setActiveItm(activeItemId)
    }
  }, [items])

  // Key is set as established by the child item according to priority: value || children || label
  const addItem = (key: React.ReactNode, children: React.ReactNode, label: string, value: string) => {
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

  const handleActiveItemChange = (key: React.ReactNode) => {
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
  /** The currently active item. Pass the `value`, `label` prop, or the child string of the respective NavigationItem. */
  activeItem?: React.ReactNode
  /** The aria label of the navigation */
  ariaLabel?: string
  /** The child navigation items of the navigation  */
  children?: React.ReactNode
  /** Pass a custom className to the navigation parent element */
  className?: string
  /** Whether the navigation is disabled. Will disable all children. */
  disabled?: boolean
  /** Handler to execute when the active item changes. Alias to `onChange`. */
  onActiveItemChange?: ItemChangeHandler
  /** Handler to execute when the active item changes.Alias to `onActiveItemChange`. */
  onChange?: React.FormEventHandler<EventTarget>
  /** Pass the role of navigation */
}
