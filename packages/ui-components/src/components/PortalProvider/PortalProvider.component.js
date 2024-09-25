import React, { createContext, useRef, useContext, useLayoutEffect } from "react"
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
  console.log(rootRef)
  const wrappedChildren = (
    <div className={`juno-portal`} style={portalStyles}>
      {children}
    </div>
  )
  return createPortal(wrappedChildren, rootRef.current || document.body)
}

/** A hook that creates a portal container in the current portal root, and returns a ref to this newly created container to use in other components:
 * ```
 *   const portalRef = usePortalRef()
 *
 *   createPortal(<MyComponent />, portalRef ? portalRef : document.body)
 * ```
 *  The ref to the portal container element can also be passed as a parameter to components that expect a reference element for positioning, such as Flatpickr / DateTimePickr
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

/** A PortalProvider component that renders a portal root container and creates a context to expose a ref to this portal root container container:
 *
 */
export const PortalProvider = ({ children = null, id = DEFAULT_PORTAL_ROOT_ID }) => {
  const portalRootRef = useRef()
  return (
    <PortalContext.Provider value={portalRootRef}>
      {children}
      <div className={`juno-portal-root`} id={id} ref={portalRootRef} style={portalRootStyles} />
    </PortalContext.Provider>
  )
}

// Bind Portal to PortalProvider:
PortalProvider.Portal = Portal
Portal.displayName = "PortalProvider.Portal"

PortalProvider.propTypes = {
  /** Optionally a class name can be passed to the portal container which is the container where portals are created by PortalProvider */
  className: PropTypes.string,
  /** Optionally an id can be passed to the portal container which is the container where portals are created by PortalProvider */
  id: PropTypes.string,
  /** The PortalProvider must have children. It is typically used as a wrapper for the whole app. */
  children: PropTypes.node,
}
