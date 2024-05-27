/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import {
  DataGrid,
  DataGridRow,
  DataGridHeadCell,
  DataGridCell,
} from "juno-ui-components"
import AssetsListItem from "./AssetsListItem"
import HintNotFound from "./HintNotFound"
import HintLoading from "./HintLoading"

const AssetsList = ({ assets, isLoading, error }) => {
  const size = React.useMemo(
    () => (assets ? Object.keys(assets).length : 0),
    [assets]
  )

  if (isLoading && !assets) return <HintLoading text="Loading assets..." />
  return (
    <DataGrid columns={4}>
      <DataGridRow>
        <DataGridHeadCell>Name</DataGridHeadCell>
        <DataGridHeadCell>Latest Version</DataGridHeadCell>
        <DataGridHeadCell>Updated At</DataGridHeadCell>
        <DataGridHeadCell>Size</DataGridHeadCell>
      </DataGridRow>
      {size > 0 ? (
        Object.keys(assets)
          .sort()
          .map((assetName, i) => (
            <AssetsListItem
              key={i}
              name={assetName}
              versions={assets[assetName]}
            />
          ))
      ) : (
        <DataGridRow>
          <DataGridCell colSpan={4}>
            <HintNotFound text="No assets found" />
          </DataGridCell>
        </DataGridRow>
      )}
    </DataGrid>
  )
}
export default AssetsList
