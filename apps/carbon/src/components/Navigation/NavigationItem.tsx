/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Stack } from "@cloudoperators/juno-ui-components"
import classNames from "classnames"
import { Link, useRoute } from "wouter"
import SupernovaIcon from "../../assets/juno_supernova.svg?react"
import DoopIcon from "../../assets/juno_doop.svg?react"
import HeurekaIcon from "../../assets/juno_heureka.svg?react"

const AppIcon = ({ name }: { name: string }) => {
  switch (name) {
    case "alerts":
      return <SupernovaIcon />
    case "doop":
      return <DoopIcon />
    case "heureka":
      return <HeurekaIcon />
  }
}

const Border = () => <div className="absolute w-1 h-full top-0 left-0 bg-white" />

const getClassName = (isActive: boolean) =>
  classNames("relative px-5 py-3 cursor-pointer", {
    "bg-theme-global-bg text-white": isActive,
    "hover:text-theme-high": !isActive,
  })

type NavigationItemProps = {
  name: string
  title: string
  url: string
}

const NavigationItem = ({ name, title, url }: NavigationItemProps) => {
  const [isActive] = useRoute(url)
  return (
    <Link href={url} asChild>
      <Stack
        key={name}
        aria-label={title}
        direction="vertical"
        alignment="center"
        role="link"
        tabIndex={0}
        className={getClassName(isActive)}
      >
        {isActive && <Border />}
        <AppIcon name={name} />
        <span className="select-none break-all text-xs">{title}</span>
      </Stack>
    </Link>
  )
}

export default NavigationItem
