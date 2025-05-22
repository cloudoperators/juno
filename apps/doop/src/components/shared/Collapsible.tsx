/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

const Collapsible = ({ show, maxHeight = 300, children }: any) => {
  const duration = 300
  const [shouldRender, setShouldRender] = React.useState(false)
  const containerRef = React.useRef(null)
  const contentRef = React.useRef(null)

  React.useLayoutEffect(() => {
    let timer: any
    if (!show) {
      timer = setTimeout(() => setShouldRender(false), duration)
    } else setShouldRender(true)
    return () => clearTimeout(timer)
  }, [show])

  React.useLayoutEffect(() => {
    //setHeight(contentRef.current?.offsetHeight)
    if (show && containerRef.current && contentRef.current) {
      // let height = maxHeight
      //   ? Math.min(maxHeight, contentRef.current?.offsetHeight)
      //   : contentRef.current?.offsetHeight

      // @ts-expect-error TS(2339) FIXME: Property 'style' does not exist on type 'never'.
      containerRef.current.style.maxHeight = `1000px`
    }
  }, [shouldRender])

  if (!shouldRender) return null
  return (
    <div
      ref={containerRef}
      className={`transition-all overflow-y-auto overflow-x-hidden ease-in-out duration-${duration}`}
      style={{ maxHeight: show ? maxHeight : 0 }}
    >
      <div ref={contentRef}>{children}</div>
    </div>
  )
}

export default Collapsible
