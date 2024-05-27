/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useCallback, useEffect } from "react"
import { DataGridRow, DataGridCell, Icon, Badge } from "juno-ui-components"
import InlineConfirmRemove from "./InlineConfirmRemove"
import { revokeCertificateMutation } from "../queries"
import {
  useGlobalsEndpoint,
  useAuthData,
  useRevokedList,
  useCertActions,
  useGlobalsIsMock,
} from "../hooks/useStore"
import { useQueryClient } from "@tanstack/react-query"
import { parseError } from "../helpers"
import { DateTime } from "luxon"
import { useActions } from "messages-provider"

const PROCESSING_STATE = "Processing"

// if remove row shows
// - remove cell bottom border so the 2 cells belongs together
// - change the background color so it is easier to difference from the other rows
// - text text color to red
const cellClasses = (isConfirmOpen) => {
  return `
			${
        isConfirmOpen &&
        `border-b-0 
         bg-theme-background-lvl-2
         text-theme-danger
         transition
         ease-out
         duration-300`
      }
      justify-start
		`
    .replace(/\n/g, " ")
    .replace(/\s+/g, " ")
}

const certIdClasses = (isConfirmOpen) => {
  return `
      text-sm 
      pt-1
      whitespace-nowrap
			${isConfirmOpen ? `text-theme-danger` : `text-theme-disabled`}
		`
    .replace(/\n/g, " ")
    .replace(/\s+/g, " ")
}

const expirationDateClasses = `
whitespace-nowrap
`

const CertificateListItem = ({ item, ca }) => {
  const { addMessage } = useActions()
  const authData = useAuthData()
  const endpoint = useGlobalsEndpoint()
  const revokedList = useRevokedList()
  const { addRevokedCert, removeRevokedCert } = useCertActions()
  const isMock = useGlobalsIsMock()

  const queryClient = useQueryClient()
  const [showConfirm, setShowConfirm] = useState(false)

  // useMutation can't create a subscription like for useQuery. State can't be shared
  // https://github.com/tannerlinsley/react-query/issues/2304
  const { isLoading, isError, error, data, isSuccess, mutate } =
    revokeCertificateMutation()

  const isCertRevoked = React.useMemo(() => {
    return revokedList.find(
      (element) => element?.ca === ca?.name && element?.certSN === item?.serial
    )
  }, [item?.serial, ca?.name, revokedList])

  useEffect(
    () => {
      if (isCertRevoked && item?.status?.toLowerCase() === "revoked")
        removeRevokedCert(ca?.name, item?.serial)
    },
    [item?.status],
    isCertRevoked
  )

  const expiresAtString = React.useMemo(() => {
    if (!item.not_after) return "No date available"
    return DateTime.fromISO(item.not_after).toLocaleString(
      DateTime.DATETIME_FULL
    )
  }, [item?.not_after])

  const isCertAvtive = React.useMemo(() => {
    return item?.status?.toLowerCase() === "active"
  }, [item?.status])

  const status = React.useMemo(() => {
    if (isCertRevoked && item?.status?.toLowerCase() !== "revoked") {
      // set to processing until is finished revoked
      return PROCESSING_STATE
    }
    return item?.status
  }, [[item?.status], isCertRevoked])

  const variant = React.useMemo(() => {
    // Active, Expired, Pending, Revoked
    switch (status) {
      case "Active":
        return "success"
      case "Expired":
        return "danger"
      case "Pending":
        return "warning"
      case "Revoked":
        return "default"
      case PROCESSING_STATE:
        return "warning"
      default:
        return "default"
    }
  }, [status])

  const onRevokeConfirmed = () => {
    setShowConfirm(false)
    mutate(
      {
        endpoint: endpoint,
        ca: ca.name,
        bearerToken: authData?.JWT,
        serial: item.serial,
        isMock: isMock,
      },
      {
        onSuccess: (data, variables, context) => {
          addMessage({
            variant: "success",
            text: (
              <span>
                Successfully revoked cert with serial <b>{item.serial}</b>
              </span>
            ),
          })
          // keep track of the revoked certs so the list get polled until the state is reflected
          addRevokedCert(ca.name, item.serial)
          // Invalidate every query with a key that starts with `certificates`
          queryClient.invalidateQueries({ queryKey: ["certificates"] })
        },
        onError: (error, variables, context) => {
          addMessage({
            variant: "error",
            text: parseError(error),
          })
        },
      }
    )
  }

  const inlineConfirmText = useMemo(() => {
    let name = item?.name
    if (!name || name.length === 0) name = "this"
    return (
      <span>
        Are you sure you want to revoke <b>{name}</b> cert?
      </span>
    )
  }, [item?.name])

  return (
    <>
      <DataGridRow>
        <DataGridCell className={cellClasses(showConfirm)}>
          <span>{item.name}</span>
          <div className={certIdClasses(showConfirm)}>{item.serial}</div>
        </DataGridCell>
        <DataGridCell className={cellClasses(showConfirm)}>
          {item.description}
        </DataGridCell>
        <DataGridCell className={cellClasses(showConfirm)}>
          {item.identity}
        </DataGridCell>
        <DataGridCell className={cellClasses(showConfirm)}>
          <div>
            <Badge variant={variant} text={status} />
          </div>
        </DataGridCell>
        <DataGridCell className={cellClasses(showConfirm)}>
          <span className={expirationDateClasses}>{expiresAtString}</span>
        </DataGridCell>
        <DataGridCell className={cellClasses(showConfirm)}>
          {isCertAvtive && (
            <Icon
              disabled={showConfirm || status === PROCESSING_STATE}
              icon="deleteForever"
              onClick={() => setShowConfirm(true)}
            />
          )}
        </DataGridCell>
      </DataGridRow>

      <InlineConfirmRemove
        text={inlineConfirmText}
        actionText="Revoke"
        actionIcon="deleteForever"
        show={showConfirm}
        onConfirm={onRevokeConfirmed}
        onCancel={() => setShowConfirm(false)}
      />
    </>
  )
}

export default CertificateListItem
