/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
// @ts-expect-error TS(2307): Cannot find module '@cloudoperators/juno-ui-compon... Remove this comment to see the full error message
import { Button, Form, PanelBody, PanelFooter, FormRow, TextInput } from "@cloudoperators/juno-ui-components"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
// @ts-expect-error TS(6142): Module '../shared/HintLoading' was resolved to '/U... Remove this comment to see the full error message
import HintLoading from "../shared/HintLoading"
// @ts-expect-error TS(6142): Module '../StoreProvider' was resolved to '/Users/... Remove this comment to see the full error message
import { useGlobalsQueryClientFnReady } from "../StoreProvider"

const PeaksEdit = ({
  peakId,
  closeCallback
}: any) => {
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
      // @ts-expect-error TS(2345): Argument of type 'unknown' is not assignable to pa... Remove this comment to see the full error message
      setFormState(peakFeach.data)
    }
  }, [peakFeach.isSuccess])

  const onSubmit = () => {
    // TODO form validation
    peakMutation.mutate(
      // @ts-expect-error TS(2345): Argument of type '{ id: any; formState: {}; }' is ... Remove this comment to see the full error message
      {
        id: peakId,
        formState: formState,
      },
      {
        onSuccess: () => {
          closeCallback()
          // refetch peaks
          // @ts-expect-error TS(2769): No overload matches this call.
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
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <PanelBody
      footer={
        peakFeach?.data && (
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <PanelFooter>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Button label="Cancel" variant="subdued" onClick={closeCallback} />
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Button label="Save" variant="primary" onClick={onSubmit} />
          </PanelFooter>
        )
      }
    >
      {peakFeach.isLoading ? (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <HintLoading />
      ) : (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Form>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <FormRow>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <TextInput label="Name" value={formState?.name} onChange={(e: any) => onAttrChanged("name", e.target.value)} />
          </FormRow>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <FormRow>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <TextInput
              label="Height"
              // @ts-expect-error TS(2339): Property 'height' does not exist on type '{}'.
              value={formState?.height}
              onChange={(e: any) => onAttrChanged("height", e.target.value)}
            />
          </FormRow>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <FormRow>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <TextInput
              label="Main Range"
              // @ts-expect-error TS(2339): Property 'mainrange' does not exist on type '{}'.
              value={formState?.mainrange}
              onChange={(e: any) => onAttrChanged("mainrange", e.target.value)}
            />
          </FormRow>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <FormRow>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <TextInput
              label="Region"
              // @ts-expect-error TS(2339): Property 'region' does not exist on type '{}'.
              value={formState?.region}
              onChange={(e: any) => onAttrChanged("region", e.target.value)}
            />
          </FormRow>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <FormRow>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <TextInput
              label="Country"
              // @ts-expect-error TS(2339): Property 'countries' does not exist on type '{}'.
              value={formState?.countries}
              onChange={(e: any) => onAttrChanged("countries", e.target.value)}
            />
          </FormRow>
        </Form>
      )}
    </PanelBody>
  );
}

PeaksEdit.propTypes = {
  peakId: PropTypes.string,
  closeCallback: PropTypes.func,
}

export default PeaksEdit
