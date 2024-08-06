/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"

const introbox = (variant: string, heroImage: string | null) => {
  return `
            jn-bg-theme-introbox
            jn-text-theme-default
            jn-flex
            jn-rounded-l
            jn-overflow-hidden
            jn-mb-8

            ${
              variant === "hero" && heroImage
                ? `
                    jn-bg-right-top
                    jn-bg-no-repeat
                `
                : ""
            }
        `
}

const introboxBorder = `
    jn-border-l-4
    jn-border-theme-introbox
`

const introboxContent = (variant: string, heroImage: string | null) => {
  return `
        ${heroImage ? `jn-pl-4 jn-pr-56` : `jn-px-4`}

        ${
          variant === "hero"
            ? `
            jn-text-xl
            jn-min-h-[8rem]
            jn-py-4
            jn-flex
            jn-flex-col
            jn-justify-center
        `
            : `
            jn-py-3
        `
        }
    `
}

const introboxHeading = `
    jn-font-bold
`

export interface IntroBoxProps {
  /** Pass an optional title */
  title?: string | null
  /** Pass a string of text to be rendered as contents. Alternatively, contents can be passed as children (see below) */
  text?: string | null
  /** Pass a custom class */
  variant?: "default" | "hero"
  /** optional "hero" flavor image for hero variant. Specify as css bg image string pointing to an image in your app (see template app for an example). Will always be positioned top and right */
  heroImage?: string | null
  /** Pass a custom class */
  className?: string
  /** Pass child nodes to be rendered as contents */
  children?: React.ReactNode
  /** For additional props*/
  [key: string]: any
}

/**
* An Introbox holds generally important information to help understand the contents, purpose, or state of a whole page or view, or individual sections on longer pages.
Use sparingly, there should never be any two or more subsequent instances of Introbox as direct siblings/neighbors on an individual view.
*/
export const IntroBox = ({
  title = null,
  text = null,
  variant = "default",
  heroImage = null,
  className = "",
  children,
  ...props
}: IntroBoxProps) => {
  const isHeroWithImage = React.useMemo(() => {
    return heroImage && variant === "hero"
  }, [variant, heroImage])

  return (
    <div
      className={`juno-introbox ${introbox(variant, heroImage)} ${className}`}
      style={isHeroWithImage ? { backgroundImage: `${heroImage}` } : {}}
      {...props}
    >
      <div className={`${introboxBorder}`}></div>
      <div className={`${introboxContent(variant, heroImage)}`}>
        {title ? <h1 className={`${introboxHeading}`}>{title}</h1> : ""}
        {children ? children : <p>{text}</p>}
      </div>
    </div>
  )
}
