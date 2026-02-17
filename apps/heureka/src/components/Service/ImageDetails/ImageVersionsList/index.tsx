/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import { Stack, Icon } from "@cloudoperators/juno-ui-components"
import { useNavigate } from "@tanstack/react-router"
import { ImageVersion } from "../../../Services/utils"
import SectionContentHeading from "../../../common/SectionContentHeading"
import { getShortSha256 } from "../../../../utils"

const VERSIONS_INITIAL = 30

type ImageVersionsListProps = {
  versions: ImageVersion[]
  service: string
  imageRepository: string
}

export const ImageVersionsList = ({ versions, service, imageRepository }: ImageVersionsListProps) => {
  const [showAllVersions, setShowAllVersions] = useState(false)
  const navigate = useNavigate()
  const displayedVersions = showAllVersions ? versions : versions.slice(0, VERSIONS_INITIAL)
  const hasMoreVersions = versions.length > VERSIONS_INITIAL

  const handleVersionClick = (version: string) => {
    navigate({
      to: "/services/$service/images/$image/versions/$version",
      params: {
        service: encodeURIComponent(service),
        image: encodeURIComponent(imageRepository),
        version: encodeURIComponent(version),
      },
      search: {},
    })
  }

  if (!versions || versions.length === 0) {
    return null
  }

  return (
    <>
      <SectionContentHeading>Image Versions</SectionContentHeading>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(5rem,_auto))] gap-x-4 gap-y-1 mt-4">
        {displayedVersions.map((version) => (
          <a
            key={version.id}
            href="#"
            title={version.version}
            onClick={(e) => {
              e.preventDefault()
              handleVersionClick(version.version)
            }}
            className="link-hover w-fit"
          >
            {getShortSha256(version.version)}
          </a>
        ))}
      </div>
      {hasMoreVersions && (
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            setShowAllVersions((prev) => !prev)
          }}
          className="link-hover mt-2 inline-flex items-center gap-1"
        >
          {showAllVersions ? (
            <Stack alignment="center" direction="horizontal" gap="1">
              <span>Show less</span>
              <Icon color="global-text" icon="expandLess" />
            </Stack>
          ) : (
            <Stack alignment="center" direction="horizontal" gap="1">
              <span>Show more ({versions.length - VERSIONS_INITIAL} more)</span>
              <Icon color="global-text" icon="expandMore" />
            </Stack>
          )}
        </a>
      )}
    </>
  )
}
