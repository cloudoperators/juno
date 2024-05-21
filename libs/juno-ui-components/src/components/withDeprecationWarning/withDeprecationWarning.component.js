/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react'

export const withDeprecationWarning = (WrappedComponent, message) => {
  
  const ComponentWithDeprecationWarning = (props) => {
    useEffect(() => {
      console.warn(message)
    }, [])

    return <WrappedComponent {...props} />
  }
  
  // assign the defaultProps of the wrapped component to the higher-order component, otherwise these would be lost:
  ComponentWithDeprecationWarning.defaultProps = WrappedComponent.defaultProps

  return ComponentWithDeprecationWarning
}

