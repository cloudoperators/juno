/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Stack } from "juno-ui-components"

import ResultItem from "./ResultItem"

const leftColumn = `
  w-1/6
`

const rightColumn = `
  w-5/6
`

const Results = ({ items, processing }) => {
  return (
    <div className="whois-main">
      {!processing && items && (
        <div>
          <h2 className="text-2xl mb-3">
            Search Results {items.length > 1 && `(${items.length} found)`}
          </h2>

          <Stack
            direction="vertical"
            gap="8"
            className="bg-theme-background-lvl-0 p-8"
          >
            {items.length > 0 ? (
              <>
                <Stack gap="4">
                  <div className={leftColumn}>IP</div>
                  <div className={rightColumn}>Details</div>
                </Stack>
                {items.map((item, index) => (
                  <ResultItem
                    key={index}
                    content={item}
                    expand={items.length === 1}
                  />
                ))}
              </>
            ) : (
              "Not found"
            )}
          </Stack>
        </div>
      )}
    </div>
  )
}

export default Results
