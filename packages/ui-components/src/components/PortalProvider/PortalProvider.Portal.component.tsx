/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useContext, useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { PortalContext } from "./PortalProvider.component"

const portalStyles: React.CSSProperties = {
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
export const Portal = ({ children = null }: PortalProviderPortalProps) => {
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

  Portal.displayName = "PortalProvider.Portal"

  export interface PortalProviderPortalProps {
    /** The children to mount in a portal. Typically, these will be menus, modal dialogs, etc. */
    children?: React.ReactNode
  }