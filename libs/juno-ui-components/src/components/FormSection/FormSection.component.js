import React from "react"
import PropTypes from "prop-types"

const formSection = `
`

const formSectionHeading = `
`

/** A Form section to group form groups with an optional title. */
export const FormSection = ({
	layout,
	title,
	children,
	...props
}) => {
	return (
		<section 
			className={`${formSection}`}
			{...props}
		>
			{title ?  <h1 className={`${formSectionHeading}`}>{title}</h1> : ""}
			{children}
		</section>
		
	)
}

FormSection.propTypes = { 
	/** Layout direction */
	layout: PropTypes.oneOf(["horizontal", "vertical"]),
	/** Title, will be rendering as an `<h1>`. */
	title: PropTypes.string,
	/** Children to render in the form section */
	children: PropTypes.node,
}

FormSection.defaultProps = {
	layout: "horizontal",
	title: null,
	children: null,
}