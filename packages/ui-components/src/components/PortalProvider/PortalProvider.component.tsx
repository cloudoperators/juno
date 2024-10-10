/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useRef, useContext, useEffect, useState } from "react"
import { createPortal } from "react-dom"

const DEFAULT_PORTAL_ROOT_ID = "juno-portal-root"

interface PortalContextType {
  current: HTMLDivElement | null
}
export const PortalContext = createContext<PortalContextType | undefined>(undefined)

const portalRootStyles :React.CSSProperties = {
  position: "absolute",
  top: "0",
  left: "0",
}

const portalStyles :React.CSSProperties = {
  position: "relative",
  zIndex: "1",
}

/** A PortalProvider.Portal component to directly use from within other components:
 *  ```
 *   <PortalProvider.Portal>
 *     <MyComponent />
 *   </PortalProvider.Portal>
 *  ```
 */
const Portal = ({ children = null } :PortalProviderPortalProps) => {
  const rootRef = useContext(PortalContext)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    if (rootRef?.current) {
      setIsMounted(true)
    }
  }, [rootRef])

  if (!isMounted) {
    return null
  }

  const wrappedChildren = (
    <div className={`juno-portal`} style={portalStyles}>
      {children}
    </div>
  )
  return createPortal(wrappedChildren, rootRef!.current || document.body)
}

/** A hook that creates a portal container in the current portal root, and returns this newly created container as a node to use in other components:
 * ```
 *   const portalRef = usePortalRef()
 *
 *   createPortal(<MyComponent />, portalRef ? portalRef : document.body)
 * ```
 *  The ref to the portal container element can also be passed as a parameter to components that expect a reference element for positioning, such as Flatpickr / DateTimePickr.
 */
export function usePortalRef() {
  const rootRef = useContext(PortalContext)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if (!rootRef || !rootRef?.current) {
      console.warn(
        "usePortalRef must be called inside a PortalProvider. You are probably using a component that renders a portal, e.g. Modal or Select. Make sure your app is wrapped in an AppShellProvider. Alternatively, a PortalProvider can be included manually."
      )
      return
    }
    // Create a portal container element, add the styles, and append it to the portal root container when the root container is ready:
    const containerElement = document.createElement("div")
    containerElement.style.position = "relative"
    containerElement.style.zIndex = "1"
    containerElement.classList.add("juno-portal")
    rootRef.current.append(containerElement)
    containerRef.current = containerElement
    // mark the newly created container ready
    setIsReady(true)

    return () => {
      // Clean up the portal element when unmounting:
      if (containerRef.current && rootRef?.current) {
        rootRef.current.removeChild(containerRef.current)
        containerRef.current = null
      }
    }
  }, [rootRef])

  if (!containerRef?.current) {
    return null
  }
  // return the current of the ref or null if not yet ready
  return isReady ? containerRef.current : null
}

/** A PortalProvider component that helps using and managing portals.
 * It renders a portal root container, creates a context to expose a ref the container, a `PortalProvider.Portal` component to render content into a portal, and a `usePortalRef` hook to render content into a portal.
 * Normally, there is no need to include `PortalProvider` manually, when using `AppShell` `PortalProvider` is already included in the app.
 */
export const PortalProvider = ({ children = null, className = "", id = DEFAULT_PORTAL_ROOT_ID } :PortalProviderProps) => {
  const portalRootRef = useRef<HTMLDivElement | null>(null)
  const [isMounted, setIsMounted] = useState(false)

  // Wait for the ref to be set after the initial render in order to make sure the context will provide a valid ref that points to an existing portal-root node:
  useEffect(() => {
    if (portalRootRef.current) {
      setIsMounted(true)
    }
  }, [])

  return (
    <PortalContext.Provider value={portalRootRef}>
      {isMounted && children}
      <div className={`juno-portal-root ${className}`} id={id} ref={portalRootRef} style={portalRootStyles} />
    </PortalContext.Provider>
  )
}

// Bind Portal to PortalProvider:
PortalProvider.Portal = Portal
Portal.displayName = "PortalProvider.Portal"

export interface PortalProviderProps {
  /** Optionally a class name can be passed to the portal container which is the container where portals are created by PortalProvider */
  className?: string
  /** Optionally an id can be passed to the portal container which is the container where portals are created by PortalProvider */
  id?: string
  /** The PortalProvider must have children. It is typically used as a wrapper for the whole app. */
  children?: React.ReactNode
}

export interface PortalProviderPortalProps {
  /** The children to mount in a portal. Typically, these will be menus, modal dialogs, etc. */
  children?: React.ReactNode
}