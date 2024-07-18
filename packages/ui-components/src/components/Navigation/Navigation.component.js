/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useEffect, useState } from "react"
import PropTypes from "prop-types"
// import { NavigationItem } from "../NavigationItem/"

export const NavigationContext = createContext()

/** A generic Navigation component providing all the necessary functionality for a navigation. For internal use only. Not to be used directly, but to be wrapped by more role-specific / semantic navigation components such as `TabNavigation`, `TopNavigation`, `SideNavigation`. */
export const Navigation = ({
  activeItem,
  ariaLabel,
  children,
  className,
  disabled,
  onActiveItemChange,
  // onChange,
  ...props
}) => {
  const [activeItm, setActiveItm] = useState("")
  const [items, setItems] = useState(new Map())

  const findItemIdByKeyValue = (valueToFind) => {
    // The prioritized sequence of individual item keys to check for a value:
    const prioritizedKeys = ["value", "children", "label"]
    const itemsKeys = Array.from(items.keys())
    if (itemsKeys.includes(valueToFind)) {
      // return the value if it is found in the keys of the items map
      return valueToFind
    } else {
      // If the value is not found in the keys of the items map, search for the value in the individual items according to the sequence in prioritizedKeys. If a matching item is found, return its id or null:
      let foundItemId
      for (let [_key, obj] of items.entries()) {
        prioritizedKeys.forEach((pKey) => {
          if (obj[pKey] === valueToFind) {
            foundItemId = obj.id
          }
        })
      }
      return foundItemId
    }
  }

  useEffect(() => {
    if (activeItem) {
      const activeItemId = findItemIdByKeyValue(activeItem)
      setActiveItm(activeItemId)
    }
  }, [activeItem])

  // Re-evaluate active item when items map changes (essential to set the active item properly on first render!):
  useEffect(() => {
    if (activeItem) {
      const activeItemId = findItemIdByKeyValue(activeItem)
      setActiveItm(activeItemId)
    }
  }, [items])

  // Key is set as established by the child item according to priority: value || children || label
  const addItem = (key, children, label, value) => {
    setItems((oldMap) =>
      new Map(oldMap).set(key, {
        id: key, // store the associated key of the item in the map inside the object, so we can easily get the key later if we have to find an object by any of its keys
        value: value,
        label: label,
        children: children,
        displayName: children || label || value, // priority of what to actually render in each item
      })
    )
  }

  const handleActiveItemChange = (key) => {
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
        aria-disabled={disabled ? true : null}
        aria-label={ariaLabel && ariaLabel.length ? ariaLabel : null}
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

// TODO: validate whether children are instances of NavigationItem

Navigation.propTypes = {
  /** The currently active item. Pass the `value`, `label` prop, or the child string of the respective NavigationItem. */
  activeItem: PropTypes.string,
  /** The aria label of the navigation */
  ariaLabel: PropTypes.string,
  /** The child navigation items of the navigation  */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  /** Pass a custom className to the navigation parent element */
  className: PropTypes.string,
  /** Whether the navigation is disabled. Will disable all children. */
  disabled: PropTypes.bool,
  /** Handler to execute when the active item changes. Alias to `onChange`. */
  onActiveItemChange: PropTypes.func,
  /** Handler to execute when the active item changes. Alias to `onActiveItemChange`. */
  onChange: PropTypes.func,
}

Navigation.defaultProps = {
  activeItem: "",
  ariaLabel: "",
  children: null,
  className: "",
  disabled: false,
  onActiveItemChange: undefined,
  onChange: undefined,
}
