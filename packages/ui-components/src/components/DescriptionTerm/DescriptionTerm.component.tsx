/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactElement } from "react"
import { DescriptionDefinitionProps } from "../DescriptionDefinition"

const descTermStyles = `
  jn:space-y-[0.25rem]
`

export interface DescriptionTermProps {
  children:
    | ReactElement<DescriptionDefinitionProps>
    | ReactElement<DescriptionDefinitionProps>[]
    | ReactElement<DescriptionTermProps>
    | ReactElement<DescriptionTermProps>[]
}

export const DescriptionTerm: React.FC<DescriptionTermProps> = ({ children }) => {
  return <dt className={`list-none p-0 m-0 ${descTermStyles}`}>{children}</dt>
}
