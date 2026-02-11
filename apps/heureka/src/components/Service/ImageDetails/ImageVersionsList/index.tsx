/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, MouseEvent } from "react"
import { Stack, Icon } from "@cloudoperators/juno-ui-components"
import { useNavigate } from "@tanstack/react-router"
import { ImageVersion } from "../../../Services/utils"
import SectionContentHeading from "../../../common/SectionContentHeading"

type ImageVersionsListProps = {
  versions: ImageVersion[]
  service: string
  imageRepository: string
}

export const ImageVersionsList = ({ versions, service, imageRepository }: ImageVersionsListProps) => {
  const [displayVersions, setDisplayVersions] = useState(false)
  const navigate = useNavigate()

  const onShowMoreClicked = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setDisplayVersions(!displayVersions)
  }

  const handleVersionClick = (version: string) => {
    navigate({
      to: "/services/$service/images/$image/versions/$version",
      params: {
        service: encodeURIComponent(service),
        image: encodeURIComponent(imageRepository),
        version: encodeURIComponent(version),
      },
    })
  }

  if (!versions || versions.length === 0) {
    return null
  }

  return (
    <>
      <SectionContentHeading>Image Versions</SectionContentHeading>
      {displayVersions && (
        <div className="my-4">
          <Stack gap="2" direction="vertical">
            {versions.map((version) => (
              <a
                key={version.id}
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  handleVersionClick(version.version)
                }}
                className="link-hover"
              >
                <Stack gap="2" direction="horizontal" alignment="center">
                  <Icon icon="info" size="16" />
                  <span>{version.version}</span>
                </Stack>
              </a>
            ))}
          </Stack>
        </div>
      )}

      <div className="advance-link">
        <a href="#" rel="noopener noreferrer" onClick={onShowMoreClicked}>
          <Stack alignment="center">
            {displayVersions ? "Hide Versions" : "Display Versions"}
            <Icon color="global-text" icon={displayVersions ? "expandLess" : "expandMore"} />
          </Stack>
        </a>
      </div>
    </>
  )
}
