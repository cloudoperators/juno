/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo, useState, useEffect } from "react"
import {
  Pill,
  Stack,
  Button,
  ContentHeading,
  DataGrid,
  DataGridCell,
  DataGridHeadCell,
  DataGridRow,
  ComboBox,
  ComboBoxOption,
  Icon,
  Modal,
  Container,
} from "@cloudoperators/juno-ui-components"
import { useGlobalsQueryClientFnReady, useGlobalsShowServiceDetail } from "../StoreProvider"
import { useQuery, useMutation } from "@tanstack/react-query"
import LoadElement from "../shared/LoadElement"
import { useActions as messageActions } from "@cloudoperators/juno-messages-provider"
import { parseError } from "../../helpers"
import { listOfCommaSeparatedObjs } from "../shared/Helper"
import ComponentInstancesList from "./ComponentInstancesList"

const ServicesDetail = () => {
  const showServiceDetail = useGlobalsShowServiceDetail()
  const queryClientFnReady = useGlobalsQueryClientFnReady()
  const { addMessage, resetMessages } = messageActions()

  const serviceElem = useQuery({
    queryKey: ["ServicesDetails", { filter: { serviceCcrn: [showServiceDetail] } }],
    enabled: !!queryClientFnReady && !!showServiceDetail,
  })

  const users = useQuery({
    queryKey: ["Users"],
    enabled: !!queryClientFnReady,
  })

  const service = useMemo(() => {
    if (!serviceElem) return null
    // @ts-expect-error TS(2339): Property 'data' does not exist on type 'never'.
    return serviceElem?.data?.Services?.edges[0]?.node
  }, [serviceElem])

  const [selectedOwners, setSelectedOwners] = useState([])
  const [newOwner, setNewOwner] = useState(null) // Store the full user object
  const [showComboBox, setShowComboBox] = useState(false) // State to control ComboBox visibility
  const [confirmRemoveOwner, setConfirmRemoveOwner] = useState(null) // Store user to confirm removal
  const [ownerToRemove, setOwnerToRemove] = useState(null) // Store owner name to remove

  // Pre-populate selected owners
  useEffect(() => {
    if (service && service.owners?.edges) {
      const preSelectedOwners = service.owners.edges.map((owner: any) => owner.node)
      setSelectedOwners(preSelectedOwners)
    }
  }, [service])

  // Hide ComboBox when service details change (new service selected)
  useEffect(() => {
    // When the service changes, reset the state to hide ComboBox and ensure read-only mode
    setShowComboBox(false)
    setNewOwner(null) // Clear new owner selection as well
    resetMessages()
  }, [service?.id])

  // Mutation for adding an owner
  const addOwnerMutation = useMutation({
    mutationKey: ["addOwnerToService"],
    // @ts-expect-error TS(2339): Property 'enabled' does not exist on type 'never'.
    enabled: !!queryClientFnReady,
  })

  // Mutation for removing an owner
  const removeOwnerMutation = useMutation({
    mutationKey: ["removeOwnerFromService"],
    // @ts-expect-error TS(2339): Property 'enabled' does not exist on type 'never'.
    enabled: !!queryClientFnReady,
  })

  // Add a new owner to the service
  const handleAddOwner = () => {
    if (newOwner) {
      addOwnerMutation.mutate(
        // @ts-ignore
        {
          serviceId: service.id,
          // @ts-ignore
          userId: newOwner.id,
        },
        {
          onSuccess: () => {
            addMessage({
              variant: "success",
              // @ts-expect-error TS(2339): Property 'name' does not exist on type 'never'.
              text: `${newOwner.name} added as owner.`,
            })
            setSelectedOwners((prev) => [...prev, newOwner])
            setShowComboBox(false)
            setNewOwner(null)
          },
          onError: (error: any) => {
            addMessage({
              variant: "error",
              text: parseError(error),
            })
          },
        }
      )
    }
  }

  // Remove an owner from the service
  const handleRemoveOwner = (userId: any) => {
    const variables = {
      serviceId: service.id,
      userId: userId,
    }
    // @ts-ignore
    removeOwnerMutation.mutate(variables, {
      onSuccess: () => {
        const removedUser = selectedOwners.find((owner: any) => owner.id === userId)
        addMessage({
          variant: "success",
          // @ts-ignore
          text: `${removedUser.name} removed as owner.`,
        })
        // @ts-expect-error TS(2339): Property 'id' does not exist on type 'never'.
        setSelectedOwners((prev) => prev.filter((owner) => owner.id !== userId))
        setConfirmRemoveOwner(null) // Close the modal
      },
      onError: (error: any) => {
        addMessage({
          variant: "error",
          text: parseError(error),
        })
      },
    })
  }

  const handleCancelAdd = () => {
    setShowComboBox(false)
    setNewOwner(null)
  }

  // Set owner to remove and show confirmation modal
  const handleConfirmRemoveOwner = (owner: any) => {
    setConfirmRemoveOwner(owner?.id)
    setOwnerToRemove(owner?.name)
  }

  return (
    <>
      <ContentHeading heading="Service Details" className="mb-2" />

      <DataGrid minContentColumns={[0]} columns={2}>
        <DataGridRow>
          <DataGridHeadCell nowrap={true}>Owners</DataGridHeadCell>
          <DataGridCell>
            {!showComboBox && (
              <Stack gap="2" wrap={true} alignment="center">
                {selectedOwners.length > 0 &&
                  selectedOwners.map((owner, i) => (
                    <Pill
                      key={i}
                      // @ts-expect-error TS(2339): Property 'name' does not exist on type 'never'.
                      pillValue={owner?.name}
                      // @ts-expect-error TS(2339): Property 'name' does not exist on type 'never'.
                      pillValueLabel={owner?.name}
                      closeable
                      onClose={() => handleConfirmRemoveOwner(owner)}
                    />
                  ))}
                <Icon color="jn-global-text" icon="addCircle" onClick={() => setShowComboBox(true)} className="ml-2" />
              </Stack>
            )}

            {showComboBox && (
              <Stack direction="horizontal" gap="2">
                <ComboBox
                  onChange={(selectedUniqueUserId: any) => {
                    // @ts-ignore
                    const selectedUser = users?.data?.Users?.edges?.find(
                      (user: any) => user.node.uniqueUserId === selectedUniqueUserId
                    )?.node
                    setNewOwner(selectedUser)
                  }}
                >
                  {/* @ts-ignore */}
                  {users?.data?.Users?.edges
                    ?.filter(
                      // @ts-ignore
                      (user: any) => !selectedOwners.some((owner) => owner.uniqueUserId === user.node.uniqueUserId)
                    )
                    .map((user: any, i: any) => (
                      <ComboBoxOption key={i} value={user?.node?.uniqueUserId}>
                        {user?.node?.name}
                      </ComboBoxOption>
                    ))}
                </ComboBox>
                <Button variant="primary" onClick={handleAddOwner}>
                  Add
                </Button>
                <Button variant="subdued" onClick={handleCancelAdd}>
                  Cancel
                </Button>
              </Stack>
            )}
          </DataGridCell>
        </DataGridRow>

        {/* Modal for remove confirmation */}
        {confirmRemoveOwner && (
          <Modal
            cancelButtonLabel="Cancel"
            confirmButtonLabel="Yes, Proceed"
            open={!!confirmRemoveOwner}
            onCancel={() => setConfirmRemoveOwner(null)}
            onConfirm={() => handleRemoveOwner(confirmRemoveOwner)}
          >
            <p>Are you sure you want to remove {ownerToRemove} from the owners?</p>
          </Modal>
        )}

        <DataGridRow>
          <DataGridHeadCell nowrap={true}>Support Group</DataGridHeadCell>
          <DataGridCell>
            <LoadElement elem={<ul>{listOfCommaSeparatedObjs(service?.supportGroups, "ccrn")}</ul>} />
          </DataGridCell>
        </DataGridRow>
      </DataGrid>

      <Container py px={false}>
        <ComponentInstancesList serviceCcrn={showServiceDetail} />
      </Container>
    </>
  )
}

export default ServicesDetail
