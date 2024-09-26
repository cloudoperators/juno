import React, { createContext, useRef, useContext, useEffect, useLayoutEffect, useState } from "react"
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
  const portalRootRef = useContext(PortalContext)
  const containerRef = useRef(null)

  useLayoutEffect(() => {
    if (!portalRootRef || !portalRootRef.current) {
      console.warn(
        "usePortalRef must be called inside a PortalProvider. You are probably using a component that renders a portal, e.g. Modal or Select. Make sure your app is wrapped in an AppShellProvider. Alternatively, you can include a PortalProvider manually."
      )
      return
    }
    const portalElement = document.createElement("div")
    portalRootRef.current.append(portalElement)
    containerRef.current = portalElement

    return () => {
      // Clean up the portal element when unmounting:
      if (containerRef.current) {
        portalRootRef.current.removeChild(containerRef.current)
        containerRef.current = null
      }
    }
  }, [portalRootRef])

  return containerRef.current
}

/** A PortalProvider component that helps using and managing portals. It renders a portal root container, creates a context to expose a ref the container, a `PortalProvider.Portal` component to render content into a portal, and a `usePortalRef` hook to render content into a portal.
 *
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
