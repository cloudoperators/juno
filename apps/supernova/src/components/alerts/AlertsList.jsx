/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo, useState, useRef, useCallback, useEffect } from "react"
import {
  DataGrid,
  DataGridHeadCell,
  DataGridRow,
  DataGridCell,
  Icon,
  Stack,
  Spinner,
} from "@cloudoperators/juno-ui-components"
import Alert from "./Alert"
import { useAlertsItemsFiltered, useAlertsActions, useGlobalsApiEndpoint } from "../StoreProvider"
import { useQuery } from "@tanstack/react-query"

import { fetchAlerts } from "../../workers/alerts"

const AlertsList = () => {
  const [visibleAmount, setVisibleAmount] = useState(20)
  const [isAddingItems, setIsAddingItems] = useState(false)
  const timeoutRef = React.useRef(null)
  const endpoint = useGlobalsApiEndpoint()

  const itemsFiltered = useAlertsItemsFiltered()
  const { setAlertsData, setError, setIsLoading } = useAlertsActions()

  const { data, error, isLoading } = useQuery({
    queryKey: ["alerts", endpoint], // Pass the query key as part of the object
    queryFn: () => fetchAlerts(endpoint), // Pass the query function
    enabled: !!endpoint, // Add any other options here
    cacheTime: 5 * 60 * 1000, // 5 Min
  })

  useEffect(() => {
    if (data) {
      setAlertsData({ items: data.alerts, counts: data.counts })
    }
  }, [data])

  useEffect(() => {
    if (error) {
      setError(error)
    }
  }, [error])

  useEffect(() => {
    if (isLoading) {
      setIsLoading(isLoading)
    }
  }, [isLoading])

  const alertsSorted = useMemo(() => {
    if (itemsFiltered) {
      return itemsFiltered.slice(0, visibleAmount)
    }
  }, [itemsFiltered, visibleAmount])

  React.useEffect(() => {
    return () => clearTimeout(timeoutRef.current) // clear when component is unmounted
  }, [])

  // endless scroll observer
  const observer = useRef()
  const lastListElementRef = useCallback(
    (node) => {
      // no fetch if loading original data
      if (isLoading || isAddingItems) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        console.debug("IntersectionObserver: callback")
        if (entries[0].isIntersecting && visibleAmount <= alertsSorted.length) {
          // setVisibleAmount((prev) => prev + 10)
          clearTimeout(timeoutRef.current)
          setIsAddingItems(true)
          timeoutRef.current = setTimeout(() => {
            setIsAddingItems(false)
            setVisibleAmount((prev) => prev + 10)
          }, 500)
        }
      })
      if (node) observer.current.observe(node)
    },
    [isLoading, isAddingItems]
  )

  return (
    <DataGrid columns={7} minContentColumns={[0, 2, 5]} cellVerticalAlignment="top" className="alerts">
      {!isLoading ? (
        <>
          <DataGridRow>
            <DataGridHeadCell>
              <Icon icon="monitorHeart" />
            </DataGridHeadCell>
            <DataGridHeadCell>Region</DataGridHeadCell>
            <DataGridHeadCell>Service</DataGridHeadCell>
            <DataGridHeadCell>Description</DataGridHeadCell>
            <DataGridHeadCell>Firing Since</DataGridHeadCell>
            <DataGridHeadCell>Status</DataGridHeadCell>
            <DataGridHeadCell></DataGridHeadCell>
          </DataGridRow>
          {alertsSorted?.length > 0 ? (
            alertsSorted?.map((alert, index) => {
              if (alertsSorted.length === index + 1) {
                // DataRow in alerts muss implement forwardRef
                return <Alert ref={lastListElementRef} key={alert.fingerprint} alert={alert} />
              }
              return <Alert key={alert.fingerprint} alert={alert} />
            })
          ) : (
            <DataGridRow className="no-hover">
              <DataGridCell colSpan={7}>
                <Stack gap="3">
                  <Icon icon="info" color="text-theme-info" />
                  <div>
                    We couldn&apos;t find anything. It&apos;s possible that the matching alerts are not active at the
                    moment, or the chosen filters could be overly limiting.
                  </div>
                </Stack>
              </DataGridCell>
            </DataGridRow>
          )}
          {isAddingItems && (
            <DataGridRow className="no-hover">
              <DataGridCell colSpan={7}>Loading ...</DataGridCell>
            </DataGridRow>
          )}{" "}
        </>
      ) : (
        <Stack gap="2">
          <span>Loading</span>
          <Spinner variant="primary" />
        </Stack>
      )}
    </DataGrid>
  )
}

export default AlertsList
