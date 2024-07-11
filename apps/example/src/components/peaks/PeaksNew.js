/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useActions } from "@cloudoperators/juno-messages-provider"
import {
  PanelBody,
  PanelFooter,
  Button,
  FormRow,
  TextInput,
} from "@cloudoperators/juno-ui-components"

const PeaksNew = ({ closeCallback }) => {
  const queryClient = useQueryClient()
  const [formState, setFormState] = useState({})
  const { addMessage } = useActions()

  const { isLoading, isError, error, data, isSuccess, mutate } = useMutation({
    mutationKey: ["peakAdd"],
  })

  const onSubmit = () => {
    mutate(
      { formState: formState },
      {
        onSuccess: (data, variables, context) => {
          addMessage({
            variant: "success",
            text: `Successfully added Peak`,
          })
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
        <PanelFooter>
          <Button label="Cancel" variant="subdued" onClick={closeCallback} />
          <Button label="Save" variant="primary" onClick={onSubmit} />
        </PanelFooter>
      }
    >
      <FormRow>
        <TextInput
          label="Name"
          autoFocus
          onChange={(e) => onAttrChanged("name", e.target.value)}
        />
      </FormRow>
      <FormRow>
        <TextInput
          label="Height"
          onChange={(e) => onAttrChanged("height", e.target.value)}
        />
      </FormRow>
      <FormRow>
        <TextInput
          label="Main Range"
          onChange={(e) => onAttrChanged("range", e.target.value)}
        />
      </FormRow>
      <FormRow>
        <TextInput
          label="Region"
          onChange={(e) => onAttrChanged("region", e.target.value)}
        />
      </FormRow>
      <FormRow>
        <TextInput
          label="Country"
          onChange={(e) => onAttrChanged("country", e.target.value)}
        />
      </FormRow>
      <FormRow>
        <TextInput
          type="url"
          label="URL"
          onChange={(e) => onAttrChanged("url", e.target.value)}
        />
      </FormRow>
    </PanelBody>
  )
}

export default PeaksNew
