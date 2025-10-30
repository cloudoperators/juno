/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { ReactElement, ReactNode } from "react"

const descDefStyles = `
  jn:space-y-[0.25rem]
`

export interface DescriptionDefinitionProps {
  children?: ReactElement<ReactNode> | ReactElement<ReactNode>[]
  className?: string
}

export const DescriptionDefinition: React.FC<DescriptionDefinitionProps> = ({ children }) => {
  return <dd className={`list-none p-0 m-0 ${descDefStyles}`}>{children}</dd>
}
