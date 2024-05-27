/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react"
import {
  Button,
  Form,
  PanelBody,
  PanelFooter,
  FormRow,
  TextInput,
} from "juno-ui-components"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import HintLoading from "../shared/HintLoading"
import { useGlobalsQueryClientFnReady } from "../StoreProvider"

const PeaksEdit = ({ peakId, closeCallback }) => {
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
      setFormState(peakFeach.data)
    }
  }, [peakFeach.isSuccess])

  const onSubmit = () => {
    // TODO form validation
    peakMutation.mutate(
      {
        id: peakId,
        formState: formState,
      },
      {
        onSuccess: (data, variables, context) => {
          closeCallback()
          // refetch peaks
          queryClient.invalidateQueries("peaks")
        },
        onError: (error, variables, context) => {
          // TODO display error
        },
      }
    )
  }

  const onAttrChanged = (key, value) => {
    setFormState({ ...formState, [key]: value })
  }

  return (
    <PanelBody
      footer={
        peakFeach?.data && (
          <PanelFooter>
            <Button label="Cancel" variant="subdued" onClick={closeCallback} />
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
              label="Name"
              value={formState?.name}
              onChange={(e) => onAttrChanged("name", e.target.value)}
            />
          </FormRow>
          <FormRow>
            <TextInput
              label="Height"
              value={formState?.height}
              onChange={(e) => onAttrChanged("height", e.target.value)}
            />
          </FormRow>
          <FormRow>
            <TextInput
              label="Main Range"
              value={formState?.mainrange}
              onChange={(e) => onAttrChanged("mainrange", e.target.value)}
            />
          </FormRow>
          <FormRow>
            <TextInput
              label="Region"
              value={formState?.region}
              onChange={(e) => onAttrChanged("region", e.target.value)}
            />
          </FormRow>
          <FormRow>
            <TextInput
              label="Country"
              value={formState?.countries}
              onChange={(e) => onAttrChanged("countries", e.target.value)}
            />
          </FormRow>
        </Form>
      )}
    </PanelBody>
  )
}

export default PeaksEdit
