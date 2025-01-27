/* eslint-disable no-unused-vars */

/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, ChangeEvent } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useActions } from "@cloudoperators/juno-messages-provider"
import { PanelBody, PanelFooter, Button, FormRow, TextInput } from "@cloudoperators/juno-ui-components"

interface FormState {
  name?: string
  height?: string
  range?: string
  region?: string
  country?: string
  url?: string
}

interface PeaksNewProps {
  closeCallback: () => void
}

interface AddMessage {
  variant: "success" | "error" | "info" | "warning"
  text: string
}

const PeaksNew: React.FC<PeaksNewProps> = ({ closeCallback }) => {
  const queryClient = useQueryClient()
  const [formState, setFormState] = useState<FormState>({})
  // To do: Fix type in package
  const { addMessage } = useActions() as { addMessage: (message: AddMessage) => void }

  const { mutateAsync } = useMutation({
    mutationKey: ["peakAdd"],
    mutationFn: async (data: { formState: FormState }) => {
      const response = await fetch("/api/peaks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data.formState),
      })
      if (!response.ok) {
        throw new Error("Network response was not ok")
      }
      return response.json()
    },
  })

  const onSubmit = async () => {
    try {
      await mutateAsync({ formState })
      addMessage({
        variant: "success",
        text: `Successfully added Peak`,
      })
      closeCallback()
      await queryClient.invalidateQueries(["peaks"])
    } catch (error) {
      // TODO display error
      console.error("Error adding peak:", error)
    }
  }

  const handleOnSubmit = () => {
    void onSubmit()
  }

  const onAttrChanged = (key: keyof FormState, value: string) => {
    setFormState({ ...formState, [key]: value })
  }

  return (
    <PanelBody
      footer={
        <PanelFooter>
          <Button label="Cancel" variant="subdued" onClick={closeCallback} />
          <Button label="Save" variant="primary" onClick={handleOnSubmit} />
        </PanelFooter>
      }
    >
      <FormRow>
        <TextInput
          label="Name"
          autoFocus
          onChange={(e: ChangeEvent<HTMLInputElement>) => onAttrChanged("name", e.target.value)}
        />
      </FormRow>
      <FormRow>
        <TextInput
          label="Height"
          onChange={(e: ChangeEvent<HTMLInputElement>) => onAttrChanged("height", e.target.value)}
        />
      </FormRow>
      <FormRow>
        <TextInput
          label="Main Range"
          onChange={(e: ChangeEvent<HTMLInputElement>) => onAttrChanged("range", e.target.value)}
        />
      </FormRow>
      <FormRow>
        <TextInput
          label="Region"
          onChange={(e: ChangeEvent<HTMLInputElement>) => onAttrChanged("region", e.target.value)}
        />
      </FormRow>
      <FormRow>
        <TextInput
          label="Country"
          onChange={(e: ChangeEvent<HTMLInputElement>) => onAttrChanged("country", e.target.value)}
        />
      </FormRow>
      <FormRow>
        <TextInput
          type="url"
          label="URL"
          onChange={(e: ChangeEvent<HTMLInputElement>) => onAttrChanged("url", e.target.value)}
        />
      </FormRow>
    </PanelBody>
  )
}

export default PeaksNew
