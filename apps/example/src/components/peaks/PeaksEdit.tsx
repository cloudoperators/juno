/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, ChangeEvent } from "react"
import { Button, Form, PanelBody, PanelFooter, FormRow, TextInput } from "@cloudoperators/juno-ui-components"
import { useQuery, useMutation, useQueryClient, QueryObserverResult } from "@tanstack/react-query"

import HintLoading from "../shared/HintLoading"
import { useGlobalsQueryClientFnReady } from "../StoreProvider"
import { Peak } from "./Peaks"

interface FormState {
  name?: string
  height?: string
  mainrange?: string
  region?: string
  countries?: string
  url?: string
}

interface PeaksEditProps {
  peakId: string
  closeCallback: () => void
}

const toFormState = (peak: Peak): FormState => ({
  name: peak.name,
  height: peak.height.toString(),
  mainrange: peak.mainrange,
  region: peak.region,
  countries: peak.countries,
})

const PeaksEdit: React.FC<PeaksEditProps> = ({ peakId, closeCallback }) => {
  const queryClient = useQueryClient()
  const queryClientFnReady = useGlobalsQueryClientFnReady()
  const [formState, setFormState] = useState<FormState>({})

  const fetchPeakData = async (): Promise<Peak> => {
    const response: Response = await fetch(`/api/peaks/${peakId}`)
    if (!response.ok) {
      throw new Error("Network response was not ok")
    }
    return response.json() as Promise<Peak>
  }

  const peakFetch: QueryObserverResult<Peak, Error> = useQuery({
    queryKey: ["peaks", peakId],
    enabled: !!queryClientFnReady,
    queryFn: fetchPeakData,
  })

  const updatePeakData = async (data: { id: string; formState: FormState }): Promise<Peak> => {
    const response: Response = await fetch(`/api/peaks/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data.formState),
    })
    if (!response.ok) {
      throw new Error("Network response was not ok")
    }
    return response.json() as Promise<Peak>
  }

  const peakMutation = useMutation({
    mutationKey: ["peakEdit"],
    mutationFn: updatePeakData,
  })

  useEffect(() => {
    if (peakFetch.isSuccess && peakFetch.data) {
      setFormState(toFormState(peakFetch.data))
    }
  }, [peakFetch.isSuccess, peakFetch.data])

  const onSubmit = () => {
    peakMutation.mutate(
      {
        id: peakId,
        formState: formState,
      },
      {
        onSuccess: () => {
          closeCallback()
          void queryClient.invalidateQueries(["peaks"])
        },
        onError: (error) => {
          console.error("Error updating peak:", error)
        },
      }
    )
  }

  const onAttrChanged = (key: keyof FormState, value: string) => {
    setFormState({ ...formState, [key]: value })
  }

  return (
    <PanelBody
      footer={
        !peakFetch.isLoading ? (
          <PanelFooter>
            <Button label="Cancel" variant="subdued" onClick={closeCallback} />
            <Button label="Save" variant="primary" onClick={onSubmit} />
          </PanelFooter>
        ) : undefined
      }
    >
      {peakFetch.isLoading ? (
        <HintLoading />
      ) : (
        //NEEDS TO BE REUSED FOR CREATE AND EDIT
        <Form>
          <FormRow>
            <TextInput
              label="Name"
              value={formState.name || ""}
              onChange={(e: ChangeEvent<HTMLInputElement>) => onAttrChanged("name", e.target.value)}
            />
          </FormRow>
          <FormRow>
            <TextInput
              label="Height"
              value={formState.height || ""}
              onChange={(e: ChangeEvent<HTMLInputElement>) => onAttrChanged("height", e.target.value)}
            />
          </FormRow>
          <FormRow>
            <TextInput
              label="Main Range"
              value={formState.mainrange || ""}
              onChange={(e: ChangeEvent<HTMLInputElement>) => onAttrChanged("mainrange", e.target.value)}
            />
          </FormRow>
          <FormRow>
            <TextInput
              label="Region"
              value={formState.region || ""}
              onChange={(e: ChangeEvent<HTMLInputElement>) => onAttrChanged("region", e.target.value)}
            />
          </FormRow>
          <FormRow>
            <TextInput
              label="Country"
              value={formState.countries || ""}
              onChange={(e: ChangeEvent<HTMLInputElement>) => onAttrChanged("countries", e.target.value)}
            />
          </FormRow>
          <FormRow>
            <TextInput
              type="url"
              label="URL"
              onChange={(e: ChangeEvent<HTMLInputElement>) => onAttrChanged("url", e.target.value)}
            />
          </FormRow>
        </Form>
      )}
    </PanelBody>
  )
}

export default PeaksEdit
