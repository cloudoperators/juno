/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { TopNavigation, TopNavigationItem } from "@cloudoperators/juno-ui-components"

import { Pages } from "../constants"
import useNavigationStore from "../../store/useNavigationStore"

const TopNavigationComponent: React.FC = () => {
  const { currentPage, setCurrentPage } = useNavigationStore()

  const handleActiveItemChange = (newPage: React.ReactNode): void => {
    if (typeof newPage === "string") {
      setCurrentPage(newPage)
    }
  }

  const renderNavigationItems = (): React.ReactNode[] =>
    // Convert page key constants to an array and map each to a TopNavigationItem component
    Object.values(Pages).map((page) => <TopNavigationItem key={page} label={page} value={page} />)

  return (
    <TopNavigation activeItem={currentPage} onActiveItemChange={handleActiveItemChange}>
      {renderNavigationItems()}
    </TopNavigation>
  )
}
export default TopNavigationComponent
