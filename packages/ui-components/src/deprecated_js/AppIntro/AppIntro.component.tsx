/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { withDeprecationWarning } from "../../components/withDeprecationWarning/withDeprecationWarning.component"

const introStyles = `
  jn-pt-16
  jn-pb-14
  jn-text-xl
  in-pr-[45%]
`

/**
 * DEPRECATED: Will be deleted!
 */
export const AppIntro: React.FC<AppIntroProps> = ({ className = "", children, ...props }) => {
  return (
    <div className={`juno-app-intro ${introStyles} ${className}`} {...props}>
      {children}
    </div>
  )
}

export interface AppIntroProps extends React.HTMLProps<HTMLDivElement> {
  /** Add custom class name */
  className?: string
  children?: React.ReactNode
}

export default withDeprecationWarning(AppIntro, "AppIntro is deprecated and will be removed in future versions.")
