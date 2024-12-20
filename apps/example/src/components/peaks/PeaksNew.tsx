/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useMutation, useQueryClient } from "@tanstack/react-query"
// @ts-expect-error TS(7016): Could not find a declaration file for module '@clo... Remove this comment to see the full error message
import { useActions } from "@cloudoperators/juno-messages-provider"
// @ts-expect-error TS(2307): Cannot find module '@cloudoperators/juno-ui-compon... Remove this comment to see the full error message
import { PanelBody, PanelFooter, Button, FormRow, TextInput } from "@cloudoperators/juno-ui-components"

const PeaksNew = ({
  closeCallback
}: any) => {
  const queryClient = useQueryClient()
  const [formState, setFormState] = useState({})
  const { addMessage } = useActions()

  const { mutate } = useMutation({
    mutationKey: ["peakAdd"],
  })

  const onSubmit = () => {
    mutate(
      // @ts-expect-error TS(2345): Argument of type '{ formState: {}; }' is not assig... Remove this comment to see the full error message
      { formState: formState },
      {
        onSuccess: (/*data, variables, context*/) => {
          addMessage({
            variant: "success",
            text: `Successfully added Peak`,
          })
          closeCallback()
          // refetch peaks
          // @ts-expect-error TS(2769): No overload matches this call.
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
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <PanelBody
      footer={
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <PanelFooter>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Button label="Cancel" variant="subdued" onClick={closeCallback} />
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Button label="Save" variant="primary" onClick={onSubmit} />
        </PanelFooter>
      }
    >
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <FormRow>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <TextInput label="Name" autoFocus onChange={(e: any) => onAttrChanged("name", e.target.value)} />
      </FormRow>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <FormRow>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <TextInput label="Height" onChange={(e: any) => onAttrChanged("height", e.target.value)} />
      </FormRow>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <FormRow>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <TextInput label="Main Range" onChange={(e: any) => onAttrChanged("range", e.target.value)} />
      </FormRow>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <FormRow>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <TextInput label="Region" onChange={(e: any) => onAttrChanged("region", e.target.value)} />
      </FormRow>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <FormRow>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <TextInput label="Country" onChange={(e: any) => onAttrChanged("country", e.target.value)} />
      </FormRow>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <FormRow>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <TextInput type="url" label="URL" onChange={(e: any) => onAttrChanged("url", e.target.value)} />
      </FormRow>
    </PanelBody>
  );
}

PeaksNew.propTypes = {
  closeCallback: PropTypes.func,
}

export default PeaksNew
