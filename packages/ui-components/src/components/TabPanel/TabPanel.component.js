/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { TabPanel as ReactTabPanel } from "react-tabs"
import PropTypes from "prop-types"

/**
The TabPanel holds content related to a Tab in a TabList in a wrapping Tab component. Not to be used standalone / outside a Tabs wrapper.
*/

const TabPanel = ({ children = null, className = "", ...props }) => {
  return (
    <ReactTabPanel
      className={`juno-tabpanel ${className}`}
      selectedClassName="juno-tabpanel-selected"
      {...props}
    >
      {children}
    </ReactTabPanel>
  )
}

TabPanel.tabsRole = "TabPanel"

TabPanel.propTypes = {
  /** The content to show/render when the associated Tab is selected */
  children: PropTypes.node,
  /** Add a custom classList to the TabPanel */
  className: PropTypes.string,
}

export { TabPanel }
