/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { useQuery } from "@tanstack/react-query"
// @ts-expect-error TS(6142): Module './PeaksList' was resolved to '/Users/I5313... Remove this comment to see the full error message
import PeaksList from "./PeaksList"
// @ts-expect-error TS(2307): Cannot find module '@cloudoperators/juno-ui-compon... Remove this comment to see the full error message
import { Spinner, Message } from "@cloudoperators/juno-ui-components"
// @ts-expect-error TS(6142): Module '../StoreProvider' was resolved to '/Users/... Remove this comment to see the full error message
import { useGlobalsQueryClientFnReady } from "../StoreProvider"

const Peaks = () => {
  const queryClientFnReady = useGlobalsQueryClientFnReady()

  const { isLoading, isError, data, error } = useQuery({
    queryKey: [`peaks`],
    enabled: !!queryClientFnReady,
  })

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      {isError && (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Message variant="danger">{`${error.statusCode ? `${error.statusCode}, ` : ""}${error?.message}`}</Message>
      )}
      {/* Loading indicator for page content */}
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see
      the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove
      this comment to see the full error message
      {isLoading && <Spinner variant="primary" />}
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see
      the full error message // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove
      this comment to see the full error message
      <PeaksList isLoading={isLoading} isError={isError} peaks={data} error={error} />
    </>
  )
}

export default Peaks
