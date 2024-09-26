import React, { createContext, useRef, useContext, useEffect, useState } from "react"
import PropTypes from "prop-types"
import { createPortal } from "react-dom"

const DEFAULT_PORTAL_ROOT_ID = "juno-portal-root"

const PortalContext = createContext()

const portalRootStyles = {
  position: "absolute",
  top: "0",
  left: "0",
}

const portalStyles = {
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
const Portal = ({ children = null }) => {
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
  return createPortal(wrappedChildren, rootRef.current || document.body)
}

Portal.propTypes = {
  /** The children to mount in a portal. Typically, these will be menus, modal dialogs, etc. */
  children: PropTypes.node,
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
  const containerRef = useRef(null)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if (!rootRef || !rootRef.current) {
      console.warn(
        "usePortalRef must be called inside a PortalProvider. You are probably using a component that renders a portal, e.g. Modal or Select. Make sure your app is wrapped in an AppShellProvider. Alternatively, a PortalProvider can be included manually."
      )
      return
    }
    const containerElement = document.createElement("div")
    containerElement.style.position = "relative"
    containerElement.style.zIndex = "1"
    containerElement.classList.add("juno-portal")
    rootRef.current.append(containerElement)
    containerRef.current = containerElement
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

  return isReady ? containerRef.current : null
}

/** A PortalProvider component that helps using and managing portals.
 * It renders a portal root container, creates a context to expose a ref the container, a `PortalProvider.Portal` component to render content into a portal, and a `usePortalRef` hook to render content into a portal.
 * Normally, there is no need to include `PortalProvider` manually, when using `AppShell` `PortalProvider` is already included in the app.
 */
export const PortalProvider = ({ children = null, className = "", id = DEFAULT_PORTAL_ROOT_ID }) => {
  const portalRootRef = useRef()

  return (
    <PortalContext.Provider value={portalRootRef}>
      {children}
      <div className={`juno-portal-root ${className}`} id={id} ref={portalRootRef} style={portalRootStyles} />
    </PortalContext.Provider>
  )
}

// Bind Portal to PortalProvider:
PortalProvider.Portal = Portal
Portal.displayName = "PortalProvider.Portal"

PortalProvider.propTypes = {
  /** Pass a custom className to the portal root container in which portals will be mounted */
  className: PropTypes.string,
  /** Pass a custom id to the portal root container in which portals will be mounted */
  id: PropTypes.string,
  /** The children of the PortalProvider. Typically, this will be the whole app.  */
  children: PropTypes.node,
}

PortalProvider.Portal.propTypes = {
  /** The children to mount in a portal. Typically, these will be menus, modal dialogs, etc. */
  children: PropTypes.node,
}
