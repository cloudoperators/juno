/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from "react"
import { DateTime } from "luxon"
import { JsonViewer, Icon, Stack } from "juno-ui-components"

const leftColumn = `
  w-1/6
  overflow-hidden
`

const rightColumn = `
  w-5/6
`

const resultStyles = (isExpanded) => {
  return `
    overflow-hidden
    transition-max-height
    duration-700
    ease-in-out

    ${
      isExpanded
        ? `
      max-h-full
    `
        : `
      max-h-96
      fade
    `
    }
    `
}

const capitalize = (string) => {
  return string[0].toUpperCase() + string.slice(1)
}

const ResultItem = ({ content, expand }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const responsibles = useMemo(() => {
    if (!content?.responsibles) return null
    // billing api do not return anymore following values. We extract them active and we leave the rest as it is.
    const { controller, securityExpert, productOwner, ...rest } =
      content.responsibles
    return rest
  }, [content.responsibles])

  useEffect(() => {
    setIsExpanded(expand)
  }, [expand])

  return (
    <Stack gap="4">
      <div className={leftColumn}>
        {content.ip ? (
          <div className="font-bold">{content.ip}</div>
        ) : (
          content.fixedIPs && (
            <div className="font-bold">{content.fixedIPs[0]}</div>
          )
        )}
        {(content.domainName || content.projectName) && (
          <div className="text-theme-light">
            {content.domainName} / {content.projectName}
          </div>
        )}
        {content.region && (
          <div className="text-theme-light">{content.region}</div>
        )}
        {responsibles && (
          <>
            <h4 className="font-bold mt-3">Responsible Persons:</h4>
            <Stack direction="vertical" gap="2">
              {Object.entries(responsibles).map(
                ([contactType, contactInfo]) => (
                  <div key={contactType}>
                    <h5>{capitalize(contactType)}:</h5>
                    {contactInfo ? (
                      <div className="truncate">
                        <span className="italic pr-1">{contactInfo.ID}</span>
                        {contactInfo.email && (
                          <>
                            <span className="text-theme-light">|</span>{" "}
                            <a href={`mailto:${contactInfo.email}`}>
                              {contactInfo.email}
                            </a>
                          </>
                        )}
                      </div>
                    ) : (
                      <span className="text-theme-light">--</span>
                    )}
                  </div>
                )
              )}
            </Stack>
          </>
        )}
      </div>
      <div className={`${rightColumn} p-6 bg-theme-background-lvl-2`}>
        {isExpanded && (
          <Stack
            gap="3"
            className="cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div className="ml-auto">
              {isExpanded ? "Collapse" : "Expand"} result{" "}
            </div>
            <Icon icon={isExpanded ? "expandLess" : "expandMore"} />
          </Stack>
        )}

        <div className={resultStyles(isExpanded)}>
          <JsonViewer data={content} expanded={3} />
        </div>

        <Stack
          gap="3"
          className="cursor-pointer mt-4"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="text-theme-default text-opacity-30">
            Added to cache: {DateTime.fromISO(content.timestamp).toRelative()}
          </div>
          <div className="ml-auto">
            {isExpanded ? "Collapse" : "Expand"} result{" "}
          </div>
          <Icon icon={isExpanded ? "expandLess" : "expandMore"} />
        </Stack>
      </div>
    </Stack>
  )
}

export default ResultItem
