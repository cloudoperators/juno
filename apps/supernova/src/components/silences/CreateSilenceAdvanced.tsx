/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, MouseEvent } from "react"
import { Stack, Icon } from "@cloudoperators/juno-ui-components"
import SilenceMatchers from "./SilenceMatchers"
import { Matcher } from "../../lib/createSilencesSlice"

type OnMatchersChanged = (matchers: Matcher[]) => void
interface SilenceNewAdvancedProps {
  matchers: Matcher[]
  onMatchersChanged: OnMatchersChanged
}

const detailsCss = (show: any) => {
  return `
      transition-all
      ease-out
      max-h-0
      overflow-y-auto
			${show ? "duration-1000 max-h-[34rem]" : `duration-300`}
		`
    .replace(/\n/g, " ")
    .replace(/\s+/g, " ")
}

const SilenceNewAdvanced = ({ matchers, onMatchersChanged }: SilenceNewAdvancedProps) => {
  const [showDetails, setShowDetails] = useState(false)

  const onShowDetailsClicked = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setShowDetails(!showDetails)
  }

  return (
    <>
      {matchers && (
        <>
          <div className="advance-link mt-4">
            <a href="#" rel="noopener noreferrer" onClick={onShowDetailsClicked}>
              <Stack alignment="center">
                Advanced options
                <Icon color="jn-global-text" icon={showDetails ? "expandLess" : "expandMore"} />
              </Stack>
            </a>
          </div>

          <div className="advanced-area overflow-hidden">
            <div className={detailsCss(showDetails)}>
              <p className="mt-2">Matchers attached to this silence</p>
              <div className="mt-2">
                <SilenceMatchers
                  matchers={matchers.filter((m) => !m.excluded)}
                  onClickCallback={onMatchersChanged}
                  closeable={true}
                />
              </div>
              <p className="mt-4">
                The default silence configuration excludes the following matchers because they typically make the
                silence too specific which can lead to alerts bypassing the silence unexpectedly. If you do want to
                include any of these matchers in the silence configuration, click on them to add them. If you change
                your mind, click again to remove.
              </p>
              <div className="my-2">
                <SilenceMatchers
                  matchers={matchers.filter((m) => m.excluded)}
                  onClickCallback={onMatchersChanged}
                  closeable={false}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default SilenceNewAdvanced
