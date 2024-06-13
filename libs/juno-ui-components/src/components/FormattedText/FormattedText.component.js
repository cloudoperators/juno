import React from "react"
import PropTypes from "prop-types"

const proseStyles = `
  jn-prose
`

/**
 * A very basic layout container with padding.
 */
export const FormattedText = ({ className, children, ...props }) => {
  return (
    <div className={`formatted-text-container ${proseStyles} ${className} `} {...props}>
      {children}
    </div>
  )
}

FormattedText.propTypes = {
  /** Add custom class name */
  className: PropTypes.string,
  children: PropTypes.node,
}

FormattedText.defaultProps = {
  className: "",
  children: null,
}
