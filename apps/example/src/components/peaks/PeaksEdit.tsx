/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Button, Form, PanelBody, PanelFooter, FormRow, TextInput } from "@cloudoperators/juno-ui-components"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import HintLoading from "../shared/HintLoading"
import { useGlobalsQueryClientFnReady } from "../StoreProvider"

const PeaksEdit = ({ peakId, closeCallback }: any) => {
  const queryClient = useQueryClient()
  const queryClientFnReady = useGlobalsQueryClientFnReady()
  const [formState, setFormState] = useState({})

  const peakFeach = useQuery({
    queryKey: [`peaks`, peakId],
    enabled: !!queryClientFnReady,
  })

  const peakMutation = useMutation({
    mutationKey: ["peakEdit"],
  })

  useEffect(() => {
    if (peakFeach.isSuccess) {
      //@ts-ignore
      setFormState(peakFeach.data)
    }
  }, [peakFeach.isSuccess])

  const onSubmit = () => {
    // TODO form validation
    peakMutation.mutate(
      //@ts-ignore
      {
        id: peakId,
        formState: formState,
      },
      {
        onSuccess: () => {
          closeCallback()
          // refetch peaks
          //@ts-ignore
          queryClient.invalidateQueries("peaks")
        },
        onError: () => {
          // TODO display error
        },
      }
    )
  }

  const onAttrChanged = (key: any, value: any) => {
    setFormState({ ...formState, [key]: value })
  }

  return (
    <PanelBody
      footer={
        peakFeach?.data && (
          <PanelFooter>
            {/* @ts-ignore */}
            <Button label="Cancel" variant="subdued" onClick={closeCallback} />
            {/* @ts-ignore */}
            <Button label="Save" variant="primary" onClick={onSubmit} />
          </PanelFooter>
        )
      }
    >
      {peakFeach.isLoading ? (
        <HintLoading />
      ) : (
        <Form>
          <FormRow>
            <TextInput
              //@ts-ignore
              label="Name"
              //@ts-ignore
              value={formState?.name}
              //@ts-ignore
              onChange={(e: any) => onAttrChanged("name", e.target.value)}
            />
          </FormRow>
          <FormRow>
            <TextInput
              //@ts-ignore
              label="Height"
              // @ts-expect-error TS(2339): Property 'height' does not exist on type '{}'.
              value={formState?.height}
              //@ts-ignore
              onChange={(e: any) => onAttrChanged("height", e.target.value)}
            />
          </FormRow>
          <FormRow>
            <TextInput
              //@ts-ignore
              label="Main Range"
              // @ts-expect-error TS(2339): Property 'mainrange' does not exist on type '{}'.
              value={formState?.mainrange}
              //@ts-ignore
              onChange={(e: any) => onAttrChanged("mainrange", e.target.value)}
            />
          </FormRow>
          <FormRow>
            <TextInput
              //@ts-ignore
              label="Region"
              // @ts-expect-error TS(2339): Property 'region' does not exist on type '{}'.
              value={formState?.region}
              //@ts-ignore
              onChange={(e: any) => onAttrChanged("region", e.target.value)}
            />
          </FormRow>
          <FormRow>
            <TextInput
              //@ts-ignore
              label="Country"
              // @ts-expect-error TS(2339): Property 'countries' does not exist on type '{}'.
              value={formState?.countries}
              //@ts-ignore
              onChange={(e: any) => onAttrChanged("countries", e.target.value)}
            />
          </FormRow>
        </Form>
      )}
    </PanelBody>
  )
}

PeaksEdit.propTypes = {
  peakId: PropTypes.string,
  closeCallback: PropTypes.func,
}

export default PeaksEdit
