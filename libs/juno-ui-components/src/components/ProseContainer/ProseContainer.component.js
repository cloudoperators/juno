import React from "react"
import PropTypes from "prop-types"

const proseStyles = `
  jn-prose
`

/**
 * A very basic layout container with padding.
 */
export const ProseContainer = ({ className, children, ...props }) => {
  return (
    <div className={`prose-container ${proseStyles} ${className} `} {...props}>
      {children}
    </div>
  )
}

ProseContainer.propTypes = {
  /** Add custom class name */
  className: PropTypes.string,
  children: PropTypes.node,
}

ProseContainer.defaultProps = {
  className: "",
  children: null,
}
