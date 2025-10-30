/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactElement } from "react"
import { DescriptionTermProps } from "../DescriptionTerm/DescriptionTerm.component"
import { DescriptionDefinitionProps } from "../DescriptionDefinition/DescriptionDefinition.component"

const descListStyles = `
  jn:space-y-[0.25rem]
`

export interface DescriptionListProps {
  children:
    | ReactElement<DescriptionDefinitionProps>
    | ReactElement<DescriptionDefinitionProps>[]
    | ReactElement<DescriptionTermProps>
    | ReactElement<DescriptionTermProps>[]
}

export const DescriptionList: React.FC<DescriptionListProps> = ({ children }) => {
  return <dl className={`list-none p-0 m-0 ${descListStyles}`}>{children}</dl>
}
