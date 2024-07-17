/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo } from "react"
import {
  Button,
  ComboBox,
  ComboBoxOption,
  ContextMenu,
  Form,
  FormRow,
  FormSection,
  Select,
  SelectOption
} from "@cloudoperators/juno-ui-components"

/** A component to include anywhere in the example app, just to try out things and validate behaviour in an app environment */
const Playground = ({
  ...props
}) => {
  return (
    <div>
      <Form>
        <FormRow>
          <ComboBox>
          
          </ComboBox>
        </FormRow>
        <FormRow>
          <Select>
            <SelectOption value="China"/>
            <SelectOption value="Georgia"/>
            <SelectOption value="Germany"/>
            <SelectOption value="Nepal" />
            <SelectOption value="Switzerland"/>
          </Select>
        </FormRow>
      </Form>
    
    </div>
  )
}

export default Playground