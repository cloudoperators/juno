/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback } from "react"
import { Stack, Button } from "juno-ui-components"
import IconCertificateAuthority from "../img/Icon_Certificate_Authority.svg"
import {
  useGlobalsDocumentationLinks,
  useGlobalsActions,
} from "../hooks/useStore"

export const cardHeaderCss = `
font-bold
text-lg
`

const cardCss = `
card
bg-theme-background-lvl-1
rounded
p-8
h-full
w-full
`

const CAsListItem = ({ ca }) => {
  const docuLinks = useGlobalsDocumentationLinks()
  const { setSelectedCA } = useGlobalsActions()

  const onCASelected = (caName) => {
    // update URL state
    setSelectedCA(caName)
  }

  return (
    <div className={cardCss}>
      <Stack direction="vertical" alignment="start" className="h-full w-full">
        <div className={cardHeaderCss}>{ca.display_name || ca.name}</div>
        <div className="mt-4">{ca.description}</div>
        <div className="mb-12">
          {docuLinks[ca.name] && (
            <a href={docuLinks[ca.name]} target="_blank">
              Read more...
            </a>
          )}
        </div>
        <div className="mt-auto w-full">
          <Stack alignment="center">
            <div className="w-full">
              <Button
                label="Show"
                icon="description"
                onClick={() => onCASelected(ca.name)}
              />
            </div>
            <IconCertificateAuthority
              width={150}
              className="fill-current text-theme-background-lvl-0"
              alt="Certificate Authority"
              title="Icon certificate authority"
              role="img"
            />
          </Stack>
        </div>
      </Stack>
    </div>
  )
}

export default CAsListItem
