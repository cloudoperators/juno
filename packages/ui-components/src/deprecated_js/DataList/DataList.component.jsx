/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"

const DataListContext = React.createContext()

export const useDataListContext = () => React.useContext(DataListContext)

export const DataList = ({ selectable = false, className = "", children = null, ...props }) => {
  const dataListConf = {
    selectable: selectable,
  }
  return (
    <DataListContext.Provider value={dataListConf}>
      <div className={`juno-datalist-container`}>
        <ul className={`juno-datalist ${className}`} {...props}>
          {children}
        </ul>
      </div>
    </DataListContext.Provider>
  )
}

DataList.propTypes = {
  /** Whether the items of a DataList should be selectable */
  selectable: PropTypes.bool,
  /** Custom classname */
  className: PropTypes.string,
  /** Children to render in the DataList */
  children: PropTypes.node,
}
