/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

import { Form, FormRow, FormSection, TextInput } from "@cloudoperators/juno-ui-components"
import useStore from "../store"
import KeyValueInput from "./KeyValueInput"

const SecretFormBody: React.FC = () => {
  const setSecretDetail = useStore((state: any) => state.setSecretDetail)
  const secretDetail = useStore((state: any) => state.secretDetail)
  const isSecretEditMode = useStore((state: any) => state.isSecretEditMode)

  const handleNameChange = (value: string) => {
    setSecretDetail({
      ...secretDetail,
      metadata: {
        ...secretDetail?.metadata,
        name: value,
      },
    })
  }

  const handleTypeChange = (value: string) => {
    setSecretDetail({
      ...secretDetail,
      type: value,
    })
  }

  const setSecretData = (data: { [key: string]: string }) => {
    setSecretDetail({
      ...secretDetail,
      data: data,
    })
  }

  const setSecretLabels = (labels: { [key: string]: string }) => {
    setSecretDetail({
      ...secretDetail,
      metadata: {
        ...secretDetail?.metadata,
        labels: labels,
      },
    })
  }

  return (
    <Form>
      <FormSection title="General">
        <FormRow>
          <TextInput
            id="name"
            label="Name"
            placeholder="Name of this secret"
            {...(isSecretEditMode && { disabled: true })}
            value={secretDetail?.metadata!.name}
            onBlur={(e: any) => handleNameChange(e.target.value)}
          />
        </FormRow>
        <FormRow>
          <TextInput
            id="type"
            label="Type"
            placeholder='Type of this secret, leave empty for default "Opaque" type'
            {...(isSecretEditMode && { disabled: true })}
            value={secretDetail?.type}
            onBlur={(e: any) => handleTypeChange(e.target.value)}
          ></TextInput>
        </FormRow>
      </FormSection>
      <KeyValueInput
        title="Labels"
        dataName="Label"
        data={secretDetail!.metadata!.labels}
        setData={setSecretLabels}
      ></KeyValueInput>
      <KeyValueInput title="Data" data={secretDetail!.data} setData={setSecretData} isSecret={true}></KeyValueInput>
    </Form>
  )
}

export default SecretFormBody
