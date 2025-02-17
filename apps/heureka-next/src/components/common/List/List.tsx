import React, { useState } from "react"
import {
  Stack,
  DataGrid,
  DataGridRow,
  DataGridHeadCell,
  DataGridCell,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@cloudoperators/juno-ui-components"
import { Loading } from "../Loading"
import { NotFound } from "../NotFound"
import ListItem from "./ListItem/ListItem"

export type Service = {
  id: number
  name: string
  issuesCount: {
    critical: number
    high: number
  }
  serviceDetails: {
    supportGroups: string[]
    region: string
    integrity: string
  }
  regions: number
  components: number
  remediationDate: string
  serviceOwners: string[]
}

const ITEMS: Service[] = [
  {
    id: 1,
    name: "Service 1",
    issuesCount: {
      critical: 2,
      high: 1,
    },
    serviceDetails: {
      supportGroups: ["Support Group 1", "Support Group 2"],
      region: "Region 1",
      integrity: "High",
    },
    regions: 1,
    components: 1,
    remediationDate: "2023-01-01",
    serviceOwners: ["owner1@example.com", "owner2@example.com"],
  },
  {
    id: 2,
    name: "Service 2",
    issuesCount: {
      critical: 1,
      high: 0,
    },
    serviceDetails: {
      supportGroups: ["Support Group 1"],
      region: "Region 2",
      integrity: "Low",
    },
    regions: 1,
    components: 1,
    remediationDate: "2023-01-01",
    serviceOwners: ["owner1@example.com"],
  },
]

export const List = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [items, setItems] = useState<Service[]>(ITEMS)
  return (
    <DataGrid minContentColumns={[3, 4]} columns={7} className="clickableTable">
      <DataGridRow>
        <DataGridHeadCell>Service</DataGridHeadCell>
        <DataGridHeadCell>Issues count</DataGridHeadCell>
        <DataGridHeadCell>Service details</DataGridHeadCell>
        <DataGridHeadCell>No. Regions</DataGridHeadCell>
        <DataGridHeadCell>No. Components</DataGridHeadCell>
        <DataGridHeadCell>Target remediation</DataGridHeadCell>
        <DataGridHeadCell>Service owners</DataGridHeadCell>
      </DataGridRow>
      {loading && items.length === 0 ? (
        <DataGridRow>
          <DataGridCell colSpan={7}>
            <Loading className="my-4" text="Loading services..." />
          </DataGridCell>
        </DataGridRow>
      ) : (
        <>
          {items?.length > 0 ? (
            <>
              {items.map((item) => (
                <ListItem key={item.id} item={item} />
              ))}
            </>
          ) : (
            <DataGridRow>
              <DataGridCell colSpan={5}>
                <NotFound text="No services found" />
              </DataGridCell>
            </DataGridRow>
          )}
        </>
      )}
    </DataGrid>
  )
}
