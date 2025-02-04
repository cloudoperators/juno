/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { SERVICES, IMAGES, VULNERABILITIES } from "../../../constants"
import Services from "../../Services"
import Vulnerabilities from "../../Vulnerabilities"
import Images from "../../Images"

const getView = (view: ItemKeyType) => {
  switch (view) {
    case SERVICES:
      return Services
    case VULNERABILITIES:
      return Vulnerabilities
    case IMAGES:
      return Images
    default:
      return () => null
  }
}

const View = ({ view }: { view: ItemKeyType }) => {
  const Component = getView(view)
  return <Component />
}

export default View
