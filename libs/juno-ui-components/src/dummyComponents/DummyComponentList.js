/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import DummyComponent from "./DummyComponent"

const DummyComponentList = ({ count }) => {
  return (
    <>
      {[...Array(count)].map((_, i) => {
        return <DummyComponent key={i} label={i} />
      })}
    </>
  )
}

export default DummyComponentList
