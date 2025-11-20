/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { SideNavigation, SideNavigationItemProps } from "@cloudoperators/juno-ui-components"
import { SideNavigationItem } from "@cloudoperators/juno-ui-components"
import { SideNavigationList } from "@cloudoperators/juno-ui-components"

import { Pages } from "../constants"
import useNavigationStore from "../../store/useNavigationStore"

const SideNavigationComponent: React.FC = () => {
  const { currentPage, setCurrentPage } = useNavigationStore()

  const handleActiveItemChange = (newPage: React.ReactNode): void => {
    if (typeof newPage === "string") {
      setCurrentPage(newPage)
    }
  }

  const renderNavigationItems = (): React.ReactElement<SideNavigationItemProps>[] =>
    // Convert page key constants to an array and map each to a SideNavigationItem component
    Object.values(Pages).map((page) => (
      <SideNavigationItem
        key={page}
        label={page}
        selected={currentPage === page}
        onClick={() => handleActiveItemChange(page)}
        icon="help"
      >
        <SideNavigationList>
          <SideNavigationItem label="Item 1" icon="addCircle" href="#" />
          <SideNavigationItem label="Item 2" icon="addCircle">
            <SideNavigationItem label="Sub-Child 1" />
            <SideNavigationItem label="Sub-Child 2" />
          </SideNavigationItem>
        </SideNavigationList>
      </SideNavigationItem>
    ))

  return (
    <SideNavigation activeItem={currentPage} onActiveItemChange={handleActiveItemChange} ariaLabel="Main Navigation">
      <SideNavigationList>{renderNavigationItems()}</SideNavigationList>
    </SideNavigation>
  )
}

export default SideNavigationComponent
