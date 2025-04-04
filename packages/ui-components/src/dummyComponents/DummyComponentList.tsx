/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactNode } from "react"
import DummyComponent from "./DummyComponent"

interface DummyComponentListProps {
  count: number
}

const DummyComponentList = ({ count }: DummyComponentListProps) => {
  return (
    <>
      {[...Array<ReactNode>(count)].map((_, i) => {
        return <DummyComponent key={i} label={`${i}`} />
      })}
    </>
  )
}

export default DummyComponentList
