/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ComponentType, useEffect, useRef, FC } from "react"

function withDeprecationWarning<T extends object>(WrappedComponent: ComponentType<T>, message: string) {
  const ComponentWithDeprecationWarning: FC<T> = (props: T) => {
    const warned = useRef(false)

    useEffect(() => {
      // Guard against React StrictMode's intentional double-mount in development,
      // which would otherwise fire the warning twice per usage.
      if (!warned.current) {
        warned.current = true
        console.warn(message)
      }
    }, [])

    return <WrappedComponent {...props} />
  }

  ComponentWithDeprecationWarning.displayName = `Deprecated(${WrappedComponent.displayName ?? WrappedComponent.name})`

  return ComponentWithDeprecationWarning
}

export { withDeprecationWarning }
