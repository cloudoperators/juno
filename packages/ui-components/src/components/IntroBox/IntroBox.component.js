/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import PropTypes from "prop-types"

const introbox = (variant, heroImage) => {
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

const introboxContent = (variant, heroImage) => {
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
}) => {
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

IntroBox.propTypes = {
  /** Pass an optional title */
  title: PropTypes.string,
  /** Pass a string of text to be rendered as contents. Alternatively, contents can be passed as children (see below) */
  text: PropTypes.string,
  /** Pass a custom class */
  variant: PropTypes.oneOf(["default", "hero"]),
  /** optional "hero" flavor image for hero variant. Specify as css bg image string pointing to an image in your app (see template app for an example). Will always be positioned top and right */
  heroImage: PropTypes.string,
  /** Pass a custom class */
  className: PropTypes.string,
  /** Pass child nodes to be rendered as contents */
  children: PropTypes.node,
}
