/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

const Collapsible = ({ show, maxHeight = 300, children }: any) => {
  const duration = 300
  const [shouldRender, setShouldRender] = React.useState(false)
  const containerRef = React.useRef()
  const contentRef = React.useRef()

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
      // @ts-expect-error TS(2322) FIXME: Type 'MutableRefObject<undefined>' is not assignab... Remove this comment to see the full error message
      ref={containerRef}
      className={`transition-all overflow-y-auto overflow-x-hidden ease-in-out duration-${duration}`}
      style={{ maxHeight: show ? maxHeight : 0 }}
    >
      {/* @ts-expect-error TS(2339) FIXME: Property 'undefined' does not exist on type 'JSX.I... Remove this comment to see the full error message */}
      <div ref={contentRef}>{children}</div>
    </div>
  )
}

export default Collapsible
