/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { useQuery, useMutation } from "@tanstack/react-query"
import {
  cas,
  certificates,
  createCertificate,
  revokeCertificate,
} from "./actions"

// get all CAs
export const getCAs = (bearerToken, endpoint, disabledCAs, isMock) => {
  return useQuery({
    queryKey: ["cas", bearerToken, endpoint, disabledCAs, isMock],
    queryFn: cas,
    // The query will not execute until the bearerToken exists
    enabled: !!bearerToken && !!endpoint,
  })
}

// get all certificates
export const getCertificates = (
  bearerToken,
  endpoint,
  ca,
  revokedList,
  isMock
) => {
  return useQuery({
    queryKey: ["certificates", bearerToken, endpoint, ca, isMock],
    queryFn: certificates,
    // The query will not execute until the bearerToken exists
    enabled: !!bearerToken && !!endpoint,
    // refetch until the list of revoked list is empty
    refetchInterval: () => {
      const count = revokedList.filter((obj) => obj.ca === ca)
      if (count.length > 0) return 5000
      return false
    },
  })
}

// add new cert
export const newCertificateMutation = () => {
  return useMutation({
    mutationFn: ({ endpoint, ca, bearerToken, formState, isMock }) =>
      createCertificate(endpoint, ca, bearerToken, formState, isMock),
  })
}

// revoke cert
export const revokeCertificateMutation = () => {
  return useMutation({
    mutationFn: ({ endpoint, ca, bearerToken, serial, isMock }) =>
      revokeCertificate(endpoint, ca, bearerToken, serial, isMock),
  })
}
