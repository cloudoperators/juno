/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo } from "react"
import CAsListItem from "./CAsListItem"
import CustomIntroBox from "./CustomIntroBox"
import HintLoading from "./HintLoading"
import HintNotFound from "./HintNotFound"
import { Container } from "juno-ui-components"

const cardsContainerCss = `
card-container 
grid 
gap-4
grid-cols-3
`

const CAsList = ({ cas, isLoading }) => {
  return (
    <>
      <CustomIntroBox />

      <Container px={false} py>
        <h1 className="font-bold text-xl mb-8">
          Please select the Certificate Authority you need
        </h1>
        {isLoading && !cas ? (
          <HintLoading text="Loading CAs..." />
        ) : (
          <>
            {cas && cas.length > 0 ? (
              <div className={cardsContainerCss}>
                {cas.map((ca, index) => (
                  <CAsListItem key={index} ca={ca} />
                ))}
              </div>
            ) : (
              <HintNotFound text="No CAs found" />
            )}
          </>
        )}
      </Container>
    </>
  )
}

export default CAsList
