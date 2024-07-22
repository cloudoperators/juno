/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react"
import PropTypes from "prop-types"
import { createPortal } from "react-dom"

const PortalContext = createContext()

export function usePortalRef() {
  const ref = useContext(PortalContext)
  const [_, setInitialized] = useState(ref?.current)

  useEffect(() => {
    if (!ref) {
      console.warn(
        "usePortalRef should be called inside a PortalProvider! You are probably using a component that renders a portal, e.g. Modal or Select. Be sure that your app is wrapped in an AppShellProvider."
      )
      return
    }
    if (ref.current) setInitialized(true)
  }, [ref])
  return ref?.current
}

const Portal = ({ children }) => {
  const ref = usePortalRef()
  return ref ? createPortal(children, ref) : null
}

Portal.propTypes = {
  children: PropTypes.any,
}

Portal.propTypes = {}

/**
 * This provider acts as a container for portals. All portals within a Juno app should be added as children to this.
 * The PortalProvider itself needs to be placed inside the Juno StyleProvider, otherwise styles might not be applied correctly on children of portals.
 *
 * The main task of the PortalProvider is to offer a place (portal) where certain components
 * such as modals are mounted. Many existing libs place such components outside of the
 * current application's DOM tree, because the control over creating and scheduling
 * the components is not with the application but with the lib. This is not a problem
 * as long as the application is in the global document tree. Once shadow root comes
 * into play, it changes. In this case, such components are placed outside of the
 * shadow root and individual app styles are not applied. The PortalProvider solves
 * this problem by creating the portal that lives in the same DOM tree as the actual app.
 *
 * The PortalProvider is appended at the top of the application tree and all lower
 * components are children of it. This means that all children can access the portal.
 * There are two ways you can do this. Via the ProtalProvider.Portal component or via
 * a usePortalRef hook. While the component places all children in the portal, the hook
 * returns a React reference object to the DOM element.
 */
export const PortalProvider = ({
  className = "",
  id = "",
  children = null,
}) => {
  const ref = useRef()

  return (
    <PortalContext.Provider value={ref}>
      {children}
      <div className={`juno-portal-container ${className}`} id={id} ref={ref} />
    </PortalContext.Provider>
  )
}
// bind Portal to PortalProvider
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
