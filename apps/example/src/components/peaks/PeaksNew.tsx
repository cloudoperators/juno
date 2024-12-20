/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useActions } from "@cloudoperators/juno-messages-provider"
import { PanelBody, PanelFooter, Button, FormRow, TextInput } from "@cloudoperators/juno-ui-components"

const PeaksNew = ({ closeCallback }: any) => {
  const queryClient = useQueryClient()
  const [formState, setFormState] = useState({})
  const { addMessage } = useActions()

  const { mutate } = useMutation({
    mutationKey: ["peakAdd"],
  })

  const onSubmit = () => {
    mutate(
      //@ts-ignore
      { formState: formState },
      {
        onSuccess: (/*data, variables, context*/) => {
          addMessage({
            variant: "success",
            text: `Successfully added Peak`,
          })
          closeCallback()
          // refetch peaks
          //@ts-ignore
          queryClient.invalidateQueries("peaks")
        },
        onError: (/*error, variables, context*/) => {
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
        <PanelFooter>
          {/* @ts-ignore */}
          <Button label="Cancel" variant="subdued" onClick={closeCallback} />
          {/* @ts-ignore */}
          <Button label="Save" variant="primary" onClick={onSubmit} />
        </PanelFooter>
      }
    >
      <FormRow>
        {/* @ts-ignore */}
        <TextInput label="Name" autoFocus onChange={(e: any) => onAttrChanged("name", e.target.value)} />
      </FormRow>
      <FormRow>
        {/* @ts-ignore */}
        <TextInput label="Height" onChange={(e: any) => onAttrChanged("height", e.target.value)} />
      </FormRow>
      <FormRow>
        {/* @ts-ignore */}
        <TextInput label="Main Range" onChange={(e: any) => onAttrChanged("range", e.target.value)} />
      </FormRow>
      <FormRow>
        {/* @ts-ignore */}
        <TextInput label="Region" onChange={(e: any) => onAttrChanged("region", e.target.value)} />
      </FormRow>
      <FormRow>
        {/* @ts-ignore */}
        <TextInput label="Country" onChange={(e: any) => onAttrChanged("country", e.target.value)} />
      </FormRow>
      <FormRow>
        {/* @ts-ignore */}
        <TextInput type="url" label="URL" onChange={(e: any) => onAttrChanged("url", e.target.value)} />
      </FormRow>
    </PanelBody>
  )
}

PeaksNew.propTypes = {
  closeCallback: PropTypes.func,
}

export default PeaksNew
