import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

const inputstyles = `
	w-4
	h-4
	opacity-0
	cursor-pointer
	z-50
`

const checkedstyles = `
	inline-block
	absolute
	bg-theme-radio-checked
	rounded-full
	w-3
	h-3
	top-1
	left-1
`

const mockradiostyles = `
	w-4
	h-4
	rounded-full
	bg-theme-radio
	cursor-pointer
	relative
	focus:outline-none
	focus:ring-2
	focus:ring-focus
`

const mockdisabledradiostyles = `
	opacity-50
`

export const Radio = ({
	name,
	id,
	value,
	checked,
	className,
	disabled,
	onChange,
	...props
}) => {
	const [isChecked, setIsChecked] = useState(false)
	const [hasFocus, setHasFocus] = useState(false)
	
	useEffect( () => {
		setIsChecked(checked)
	}, [checked])
	
	const handleChange = (event) => {
		setIsChecked(!isChecked)
		onChange(event)
	}
	
	const handleFocus = () => {
		setHasFocus(true)
	}
	
	const handleBlur = () => {
		setHasFocus(false)
	}
	
	return (
		<div
			className={`${mockradiostyles} ${ disabled ? mockdisabledradiostyles : "" } ${className}`}
			{...props}
		>
			<input 
				type="radio"
				name={name || "unnamed radio"}
				value={value}
				id={id}
				checked={isChecked}
				className={`${inputstyles}`}
				disabled={disabled}
				onChange={handleChange}
				onFocus={handleFocus}
				onBlur={handleBlur}
			/>
			{ isChecked ? 
				<span className={`${checkedstyles}`}></span>
			:
				""
			}
		</div>
	)
}

Radio.propTypes = {
	/** Name attribute */
	name: PropTypes.string,
	/** Id of the checkbox */
	id: PropTypes.string,
	/** Pass a value the checkbox should represent.*/
	value: PropTypes.string,
	/**  Pass checked state  */
	checked: PropTypes.bool,
	/** Pass a className */
	className: PropTypes.string,
	/** Whether the checkbox is disabled */
	disabled: PropTypes.bool,
	/** Pass a handler */
	onChange: PropTypes.func,
}

Radio.defaultProps = {
	checked: false,
	value: "",
	id: "",
	className: "",
	disabled: false,
	onChange: undefined,
}
