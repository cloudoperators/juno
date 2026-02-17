/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { HTMLAttributes, ReactNode, useMemo } from "react"

const introbox = (variant: string, heroImage: string) => {
  return `
            jn:bg-theme-introbox
            jn:text-theme-default
            jn:flex
            jn:rounded-l
            jn:overflow-hidden
            jn:mb-8

            ${
              variant === "hero" && heroImage
                ? `
                    jn:bg-right-top
                    jn:bg-no-repeat
                `
                : ""
            }
        `
}

const introboxBorder = `
    jn:border-l-4
    jn:border-theme-introbox
`

const introboxContent = (variant: string, heroImage: string) => {
  return `
        ${heroImage ? `jn:pl-4 jn:pr-56` : `jn:px-4`}

        ${
          variant === "hero"
            ? `
            jn:text-xl
            jn:min-h-[8rem]
            jn:py-4
            jn:flex
            jn:flex-col
            jn:justify-center
        `
            : `
            jn:py-3
        `
        }
    `
}

const introboxHeading = `
    jn:font-bold
`

export interface IntroBoxProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  /**
   * Pass an optional title.
   * @default ""
   */
  title?: string

  /**
   * Pass a string of text to be rendered as contents. Alternatively, contents can be passed as children (see below).
   * @default ""
   */
  text?: string

  /**
   * Pass a variant style to affect the layout of the intro box.
   * @default "default"
   */
  variant?: "default" | "hero"

  /**
   * Optional "hero" flavor image for hero variant. Specify as css bg image string pointing to an image.
   */
  heroImage?: string

  /**
   * Pass a custom class or classes for styling the intro box.
   * @default ""
   */
  className?: string

  /**
   * Pass child nodes to be rendered as content, taking precedence over `text`.
   */
  children?: ReactNode
}

/**
 * The `IntroBox` component presents important information about the contents,
 * purpose, or state of a page or view, using distinct styles for emphasis.
 * Supports "hero" variant with optional background images.
 * @see https://cloudoperators.github.io/juno/?path=/docs/components-introbox--docs
 * @see {@link IntroBoxProps}
 */
export const IntroBox = ({
  title = "",
  text = "",
  variant = "default",
  heroImage = "",
  className = "",
  children,
  ...props
}: IntroBoxProps): ReactNode => {
  const isHeroWithImage = useMemo(() => {
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
