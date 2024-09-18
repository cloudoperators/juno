/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useId, useMemo, useState } from "react"
import PropTypes from "prop-types"
import flatpickr from "flatpickr"
import { FormHint } from "../../deprecated_js/FormHint/"
import { Icon } from "../../deprecated_js/Icon"
import { Label } from "../../deprecated_js/Label"
import "./datetimepicker.scss"

// TMP:
import { usePortalRef } from "../PortalProvider/"

/* 
TODO:
* add enable prop (or leave out if no success)
* add position prop (if possible, otherwise leave out)
* Allow to use the expected date format as a placeholder in the input element (placeholder="dateFormat" or smth similar?) when direct input is enabled?
*/

const inputWrapperStyles = `
  jn-relative
`

const inputStyles = `
  jn-bg-theme-textinput
  jn-bg-no-repeat
  jn-bg-[top_0.375rem_right_1rem]
  jn-text-theme-textinput
  jn-fill-theme-textinput-default
  jn-border
  jn-text-base
  jn-leading-4
  jn-px-4
  jn-h-textinput
  jn-rounded-3px
  focus:jn-outline-none
  focus:jn-ring-2
  focus:jn-ring-theme-focus
  disabled:jn-opacity-50
  disabled:jn-cursor-not-allowed
  autofill:jn-bg-theme-textinput-autofill
  autofill:jn-text-theme-textinput-autofill
`

const inputWithLabelStyles = `
  jn-pt-[1.125rem] 
  jn-pb-1
`

const inputWithoutLabelStyles = `
  jn-py-4
`

const inputDefaultBorderStyles = `
  jn-border-theme-textinput-default
`

const inputInvalidStyles = `
  jn-border-theme-error
`

const inputValidStyles = `
  jn-border-theme-success
`

const labelStyles = `
  peer-autofill:jn-text-theme-textinput-autofill-label
  jn-pointer-events-none
  jn-top-2
  jn-left-[0.9375rem]
`

const iconContainerStyles = `
  jn-absolute
  jn-inline-flex
  jn-top-2
  jn-right-[2.75rem]
  jn-gap-1.5
`

/** A all-purpose date and time picker component. Highly configurable, based on Flatpickr. */

export const DateTimePicker = ({
  allowInput,
  allowInvalidPreload,
  ariaDateFormat,
  className,
  conjunction,
  dateFormat,
  defaultHour,
  defaultMinute,
  defaultDate,
  defaultValue,
  disable = [],
  disabled,
  enableSeconds,
  enableTime,
  errortext,
  helptext,
  hourIncrement,
  id,
  invalid,
  label,
  locale,
  maxDate,
  minDate,
  minuteIncrement,
  mode,
  monthSelectorType,
  name,
  noCalendar,
  onBlur,
  onChange,
  onClear,
  onClose,
  onFocus,
  onMonthChange,
  onOpen,
  onReady,
  onYearChange,
  placeholder,
  required,
  shorthandCurrentMonth,
  showMonths,
  successtext,
  time_24hr,
  valid,
  value,
  weekNumbers,
  width,
  wrapperClassName,
  ...props
}) => {
  // always generate auto-id string using the useId hook to avoid "more hooks than in previous render" error when removing custom id:
  const autoId = "juno-datetimepicker-" + useId()
  const theId = id && id.length ? id : autoId

  const fpRef = useRef(null) // the dom node flatpickr instance will be bound to
  let flatpickrInstanceRef = useRef({}) // The actual flatpickr instance
  const calendarTargetRef = useRef(null) // The DOM node the flatpickr calendar should be rendered to

  // TMP
  const portalRef = usePortalRef()

  const [theDate, setTheDate] = useState({})
  // variables starting with underscore are not linted
  const [_hasFocus, setHasFocus] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isInvalid, setIsInvalid] = useState(false)
  const [isValid, setIsValid] = useState(false)

  const updateFlatpickrInstance = (newKeys) =>
    (flatpickrInstanceRef.current = {
      ...flatpickrInstanceRef.current,
      ...Object.keys(newKeys).reduce((a, key) => {
        a[key] = newKeys[key]
        return a
      }, {}),
    })

  const invalidated = useMemo(() => (invalid || (errortext && errortext.length) ? true : false), [invalid, errortext])
  const validated = useMemo(() => (valid || (successtext && successtext.length) ? true : false), [valid, successtext])

  useEffect(() => {
    setIsInvalid(invalidated)
  }, [invalidated])

  useEffect(() => {
    setIsValid(validated)
  }, [validated])

  const handleBlur = () => {
    setHasFocus(false)
    onBlur && onBlur(theDate.selectedDate, theDate.selectedDateStr)
  }

  const handleChange = (selectedDate, dateStr, _instance) => {
    setTheDate({ selectedDate: selectedDate, selectedDateStr: dateStr })
    onChange && onChange(selectedDate, dateStr)
  }

  const handleClose = (selectedDate, dateStr, _instance) => {
    setIsOpen(false)
    onClose && onClose(selectedDate, dateStr)
  }

  const handleMonthChange = (selectedDate, dateStr, _instance) => {
    setTheDate({ selectedDate: selectedDate, selectedDateStr: dateStr })
    onMonthChange && onMonthChange(selectedDate, dateStr)
  }

  const handleOpen = (selectedDate, dateStr, _instance) => {
    setIsOpen(true)
    onOpen && onOpen(selectedDate, dateStr)
  }

  const handleReady = (selectedDate, dateStr, _instance) => {
    onReady && onReady(selectedDate, dateStr)
  }

  const handleYearChange = (selectedDate, dateStr, _instance) => {
    setTheDate({ selectedDate: selectedDate, selectedDateStr: dateStr })
    onYearChange && onYearChange(selectedDate, dateStr)
  }

  const handleInputFocus = () => {
    setHasFocus(true)
    onFocus && onFocus(theDate.selectedDate, theDate.selectedDateStr)
  }

  const handleClearIconClick = () => {
    setTheDate({})
    flatpickrInstanceRef.current?.clear()
    onClear && onClear([], "")
  }

  // Create stringified versions of the value prop and its aliases in order to use them in a useEffect dependency array later.
  const stringifiedValue = JSON.stringify(value)
  const stringifiedDefaultDate = JSON.stringify(defaultDate)
  const stringifiedDefaultValue = JSON.stringify(defaultValue)

  // Function to determine the date format. Will return the dateFormat if passed as a prop, or a useful defaultFormat depending on whether the DateTimePicker is set to show the time, seconds, or no calendar at all (time picker only).
  const getDateFormat = () => {
    const defaultDateFormat = enableTime
      ? noCalendar
        ? enableSeconds
          ? "H:i:S"
          : "H:i"
        : enableSeconds
          ? "Y-m-d H:i:S"
          : "Y-m-d H:i"
      : "Y-m-d"

    const theDateFormat = dateFormat === undefined ? defaultDateFormat : dateFormat

    return theDateFormat
  }

  const theDateFormat = getDateFormat()

  const createFlatpickrInstance = () => {
    const options = {
      allowInput: allowInput,
      allowInvalidPreload: allowInvalidPreload,
      ariaDateFormat: ariaDateFormat,
      //appendTo: calendarTargetRef.current,
      appendTo: portalRef,
      conjunction: conjunction,
      dateFormat: theDateFormat,
      defaultDate: defaultDate || defaultValue,
      defaultHour: defaultHour,
      defaultMinute: defaultMinute,
      disable: disable,
      enableSeconds: enableSeconds,
      enableTime: enableTime,
      hourIncrement: hourIncrement,
      locale: locale,
      maxDate: maxDate,
      minDate: minDate,
      minuteIncrement: minuteIncrement,
      mode: mode,
      monthSelectorType,
      noCalendar: noCalendar,
      onChange: handleChange,
      onClose: handleClose,
      onMonthChange: handleMonthChange,
      onOpen: handleOpen,
      onReady: handleReady,
      onYearChange: handleYearChange,
      positionElement: calendarTargetRef.current,
      shorthandCurrentMonth: shorthandCurrentMonth,
      showMonths: showMonths,
      time_24hr: time_24hr,
      weekNumbers: weekNumbers,
    }
    const FP = calendarTargetRef && fpRef.current && flatpickr(fpRef.current, options)
    updateFlatpickrInstance(FP)
  }

  const destroyFlatpickrInstance = () => {
    flatpickrInstanceRef.current.destroy()
    setTheDate({})
    flatpickrInstanceRef = null // Not sure if this is actually necessary?
  }

  useEffect(() => {
    createFlatpickrInstance()
    //console.log(flatpickrInstanceRef.current?._positionCalendar)
    //flatpickrInstanceRef.current?._positionCalendar()
    return () => {
      destroyFlatpickrInstance()
    }
  }, [])

  /* 
  Some config options on the flatpickr instance can not be set with immediate effect, a new instance needs to be created.
  For the corresponding props we have some logic that makes sure we destroy the current instance and create a new one only when absolutely necessary. Also, we need to reduce doing that to only once, even if multiple of the props were updated at the same time for the sake of efficiency, and to make sure we do not call event handlers more often than needed and expected by the user.
  */

  // Store current props that will require creating a new instance when their value changes:
  const prevRerenderingProps = useRef({
    allowInput: allowInput,
    defaultHour: defaultHour,
    defaultMinute: defaultMinute,
    enableTime: enableTime,
    enableSeconds: enableSeconds,
    hourIncrement: hourIncrement,
    minuteIncrement: minuteIncrement,
    mode: mode,
    noCalendar: noCalendar,
    weekNumbers: weekNumbers,
  })

  // Apply a use effect to handle the logic bound to the props that require creating a new faltpickr instance:
  useEffect(() => {
    // set a variable to be set to true once we know we need to destroy the current instance and create  a new one:
    let hasChanged = false

    // For each of the props…
    Object.keys(prevRerenderingProps.current).forEach((propKey) => {
      const prevValue = prevRerenderingProps.current[propKey]
      const currentValue = {
        allowInput,
        defaultHour,
        defaultMinute,
        enableTime,
        enableSeconds,
        hourIncrement,
        minuteIncrement,
        mode,
        monthSelectorType,
        noCalendar,
        showMonths,
        weekNumbers,
      }[propKey]

      // … we need to check whether their value has actually changed
      if (prevValue !== currentValue) {
        hasChanged = true
      }
    })

    // After we have checked if any one or multiple of the relevant props have changed, we actually destroy the current instance and create a new one:
    if (hasChanged) {
      flatpickrInstanceRef?.current?.destroy()
      createFlatpickrInstance()
    }

    // Also make sure we update our stored props in order to be ready for the next update:
    prevRerenderingProps.current = {
      allowInput: allowInput,
      defaultHour: defaultHour,
      defaultMinute: defaultMinute,
      enableTime: enableTime,
      enableSeconds: enableSeconds,
      hourIncrement: hourIncrement,
      minuteIncrement: minuteIncrement,
      mode: mode,
      monthSelectorType: monthSelectorType,
      noCalendar: noCalendar,
      showMonths: showMonths,
      weekNumbers: weekNumbers,
    }
  }, [
    allowInput,
    defaultHour,
    defaultMinute,
    enableTime,
    enableSeconds,
    hourIncrement,
    minuteIncrement,
    mode,
    monthSelectorType,
    noCalendar,
    showMonths,
    weekNumbers,
  ])

  // useEffects for props that represent config options that can be set on an existing flatpickr instance with immediate effect:
  useEffect(() => {
    flatpickrInstanceRef.current?.set("allowInvalidPreload", allowInvalidPreload)
  }, [allowInvalidPreload])

  useEffect(() => {
    flatpickrInstanceRef.current?.set("ariaDateFormat", ariaDateFormat)
  }, [ariaDateFormat])

  useEffect(() => {
    flatpickrInstanceRef.current?.set("conjunction", conjunction)
  }, [conjunction])

  useEffect(() => {
    const newDateFormat = getDateFormat()
    flatpickrInstanceRef.current?.set("dateFormat", newDateFormat)
  }, [dateFormat])

  useEffect(() => {
    flatpickrInstanceRef.current?.set("disable", disable)
  }, [disable])

  useEffect(() => {
    flatpickrInstanceRef.current?.set("hourIncrement", hourIncrement)
  }, [hourIncrement])

  useEffect(() => {
    flatpickrInstanceRef.current?.set("locale", locale)
  }, [locale])

  useEffect(() => {
    flatpickrInstanceRef.current?.set("maxDate", maxDate)
  }, [maxDate])

  useEffect(() => {
    flatpickrInstanceRef.current?.set("minDate", minDate)
  }, [minDate])

  useEffect(() => {
    flatpickrInstanceRef.current?.set("shorthandCurrentMonth", shorthandCurrentMonth)
  }, [shorthandCurrentMonth])

  useEffect(() => {
    flatpickrInstanceRef.current?.set("time_24hr", time_24hr)
  }, [time_24hr])

  // Update the flatpickr instance whenever the value prop (or any of its aliases) changes, and force the flatpickr instance to fire onChange event. These props may contain an array of one or multiple objects. These will never pass React's identity comparison, and will be regarded as a new object with any render regardless of their contents, thus creating an endless loop by updating the flatpickr instance updating the parent state (via onChange above) updating the flatpickr instance (…). We prevent this by checking on the stringified versions of the props in the dependency array.
  useEffect(() => {
    flatpickrInstanceRef.current?.setDate(
      value || defaultDate || defaultValue,
      true // enforce firing change event that in turn will update our state via handleChange.
    )
  }, [stringifiedValue, stringifiedDefaultDate, stringifiedDefaultValue])

  useEffect(() => {
    flatpickrInstanceRef.current?.set("weekNumbers", weekNumbers)
  }, [weekNumbers])

  return (
    <div
      className={`
      juno-datetimepicker-wrapper
      ${width == "auto" ? "jn-inline-block" : "jn-block"}
      ${width == "auto" ? "jn-w-auto" : "jn-w-full"}
      ${wrapperClassName}
    `}
    >
      <div className={`juno-datetimepicker-input-wrapper ${inputWrapperStyles}`}>
        <input
          className={`
            juno-datetimepicker-input 
            ${inputStyles}
            ${label ? inputWithLabelStyles : inputWithoutLabelStyles}
            ${isInvalid ? "juno-datetimepicker-input-invalid " + inputInvalidStyles : ""} 
            ${isValid ? "juno-datetimepicker-input-valid" + inputValidStyles : ""}  
            ${isValid || isInvalid ? "" : inputDefaultBorderStyles} 
            ${width == "auto" ? "jn-w-auto" : "jn-w-full"}
            ${enableTime && noCalendar ? "juno-datetimepicker-input-timepicker" : "juno-datetimepicker-input-default"}
            ${className}
          `}
          data-mode={mode}
          disabled={disabled}
          id={theId}
          name={name && name.length ? name : null}
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={handleInputFocus}
          placeholder={placeholder}
          ref={fpRef}
          type="text"
          {...props}
        />

        {label && label.length ? (
          <Label
            text={label}
            htmlFor={theId}
            className={`${labelStyles}`}
            disabled={disabled}
            required={required}
            floating
            minimized={
              placeholder || isOpen || theDate.selectedDate?.length || theDate.selectedDateStr?.length ? true : false
            }
          />
        ) : (
          ""
        )}

        <div className={`juno-datetimepicker-icon-container ${iconContainerStyles}`}>
          {theDate.selectedDate?.length || theDate.selectedDateStr?.length ? (
            <Icon icon="close" onClick={handleClearIconClick} disabled={disabled} title="Clear" />
          ) : (
            ""
          )}
          {isInvalid ? <Icon icon="dangerous" color="jn-text-theme-error" /> : ""}
          {isValid ? <Icon icon="checkCircle" color="jn-text-theme-success" /> : ""}
        </div>
      </div>
      <div ref={calendarTargetRef}></div>

      {errortext && errortext.length ? <FormHint text={errortext} variant="error" className="jn-mt-0" /> : ""}
      {successtext && successtext.length ? <FormHint text={successtext} variant="success" className="jn-mt-0" /> : ""}
      {helptext && helptext.length ? <FormHint text={helptext} className="jn-mt-0" /> : ""}
    </div>
  )
}

const datePropType = PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object, PropTypes.number])

DateTimePicker.propTypes = {
  /** Whether the DateTimePicker input element allows direct user keyboard input. Default is `false`. */
  allowInput: PropTypes.bool,
  /** Allows the preloading of an invalid date (e.g. a date that hass been disable by passing `disable`). When disabled, the field will be cleared if the provided date is invalid */
  allowInvalidPreload: PropTypes.bool,
  /** How the `aria-label` date for each day in the calendar will be formed. Uses the same rules/tokens as `dateFormat´ as described here: https://flatpickr.js.org/formatting/. When changing this, make sure the outcome makes sense when using a screenreader.*/
  ariaDateFormat: PropTypes.string,
  /** Pass custom classNames. These will be appended to the input element of the DateTimePicker. */
  className: PropTypes.string,
  /** A custom string to separate individual dates in `multiple` mode. */
  conjunction: PropTypes.string,
  /** A string of characters to customize how a date will be formatted in the input field. Available options: https://flatpickr.js.org/formatting/ */
  dateFormat: PropTypes.string,
  /** Sets the default date of the DateTimePicker. Same as `value`, only here for compatibility with the original Flatpickr library. If both `value` and `defaultDate` are being passed, `value` will win. Date Objects, timestamps, ISO date strings, chronological date strings `YYYY-MM-DD HH:MM` (must be compatible to current `dateFormat`), and the shortcut `today` are all accepted. */
  defaultDate: datePropType,
  /** The initial value of the hour input element. Only effective if time is enabled. Note this will only set the hour input element to the value specified. Setting this options will not set a selected value on the DateTimePicker. */
  defaultHour: PropTypes.number,
  /** The initial value of the minute input element. Only effective if time is enabled. Note this will only set the minute input element to the value specified. Setting this options will not set a selected value on the DateTimePicker. */
  defaultMinute: PropTypes.number,
  /** Same as value, defaultDate */
  defaultValue: datePropType,
  /** Pass an array of dates, date strings, date ranges or functions to disable dates. More on disabling dates: https://flatpickr.js.org/examples/#disabling-specific-dates */
  disable: PropTypes.array,
  /** Whether the DateTimePicker is disabled */
  disabled: PropTypes.bool,
  /** Whether to show seconds when showing a time picker. */
  enableSeconds: PropTypes.bool,
  /** Whether to show a time picker.  */
  enableTime: PropTypes.bool,
  /** A text to render when the DateTimePicker has an error or could not be validated. */
  errortext: PropTypes.node,
  /** A helptext to render to explain meaning and significance of the DateTimePicker. */
  helptext: PropTypes.node,
  /** The step for the hour input. Only has an effect when a time picker is enabled via `enableTime`. */
  hourIncrement: PropTypes.number,
  /** The id of the DateTimePicker input element. If none is passed, an automatically generated id will be used. */
  id: PropTypes.string,
  /** Whether the DateTimePicker selected date was negatively validated.  */
  invalid: PropTypes.bool,
  /** The label of the DateTimePicker input element. */
  label: PropTypes.string,
  /** Localization string or object. Can be used to set starting day of the week, e.g. Mondays instead of Sundays. More on localization: https://flatpickr.js.org/localization/ */
  locale: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /** The maximum / latest date a user can select (inclusive). */
  maxDate: datePropType,
  /** The minimum / earliest date a user can select (inclusive). */
  minDate: datePropType,
  /**  The step for the minute input. Only has an effect when a time picker is enabled via `enableTime`.  */
  minuteIncrement: PropTypes.number,
  /** The mode of the Datepicker. */
  mode: PropTypes.oneOf(["single", "multiple", "range"]),
  /** Whether to show a dropdown to select the current month. Default is "static". If `showMonths` is set to be greater than 1, it will always be displayed as static. Arrows to scroll through the months as well as through years will still be displayed and working. */
  monthSelectorType: PropTypes.oneOf(["static", "dropdown"]),
  /** The name of the DateTimePicker input element */
  name: PropTypes.string,
  /** Set to `true` to not display a calendar at all. To create a time picker, set `enableTime` to true, too. */
  noCalendar: PropTypes.bool,
  /** A handler to be executed when the DateTimePicker input element looses focus. */
  onBlur: PropTypes.func,
  /** A handler to be executed when the selected date(s), date range or time changes */
  onChange: PropTypes.func,
  /** A handler to be executed when the DateTimePicker value is reset by clicking the clear icon. The onChnage handler will be fired in this event too, onClear is more specific. */
  onClear: PropTypes.func,
  /** A handler to be executed when the DateTimePicker calendar closes */
  onClose: PropTypes.func,
  /** A handler to be executed when the DateTimePicker input element receives focus. */
  onFocus: PropTypes.func,
  /** A handler to be executed when the selected month changes */
  onMonthChange: PropTypes.func,
  /** A handler to be executed when the DateTimePicker calendar opens */
  onOpen: PropTypes.func,
  /** A handler to be executed when the DateTimePicker component is ready */
  onReady: PropTypes.func,
  /** A handler to be executed when the selected year changes */
  onYearChange: PropTypes.func,
  /** The placeholder of the DateTimePicker input element */
  placeholder: PropTypes.string,
  /** Whether the DateTimePicker should be marked as required. Requires a `Label` to be set. */
  required: PropTypes.bool,
  /** Whether the current month in the date picker should be displayed as shorthand, e.g. "Jan" instead of "January" */
  shorthandCurrentMonth: PropTypes.bool,
  /** The number of months to show in the date picker */
  showMonths: PropTypes.number,
  /** A text to render when the DateTimePicker was successfully validated */
  successtext: PropTypes.node,
  /** Displays time picker in 24 hour mode without AM/PM selection when enabled. Requires `enableTime` to be set, too. Default is `false`. */
  time_24hr: PropTypes.bool,
  /** Whether the DateTimePicker has been successfully validated */
  valid: PropTypes.bool,
  /** The value of the datepicker. Date Objects, timestamps, ISO date strings, chronological date strings `YYYY-MM-DD HH:MM` (must be compatible to current `dateFormat`), and the shortcut `today` are all accepted. */
  value: datePropType,
  /** Whether to render week numbers. Default is `false`. */
  weekNumbers: PropTypes.bool,
  /** The width of the datepicker input. Either 'full' (default) or 'auto'. */
  width: PropTypes.oneOf(["full", "auto"]),
  /** Pass a custom className to the wrapping element. This can be useful if you must add styling to the outermost wrapping element of this component, e.g. for positioning. */
  wrapperClassName: PropTypes.string,
}

// can't get rid of this, as if we transform it to a default values using vanilla JS, two tests will fail
// the disable prop causes problems in the tests
DateTimePicker.defaultProps = {
  allowInput: false,
  allowInvalidPreload: false,
  ariaDateFormat: "F j, Y",
  className: "",
  conjunction: ", ",
  dateFormat: undefined,
  defaultHour: 12,
  defaultMinute: 0,
  defaultDate: null,
  defaultValue: "",
  disable: [],
  disabled: false,
  enableSeconds: false,
  enableTime: false,
  errortext: "",
  helptext: "",
  hourIncrement: 1,
  id: "",
  invalid: false,
  label: "",
  locale: null,
  maxDate: null,
  minDate: null,
  minuteIncrement: 1,
  mode: "single",
  monthSelectorType: "static",
  name: "",
  noCalendar: false,
  onBlur: undefined,
  onChange: undefined,
  onClear: undefined,
  onClose: undefined,
  onFocus: undefined,
  onMonthChange: undefined,
  onOpen: undefined,
  onReady: undefined,
  onYearChange: undefined,
  placeholder: "",
  required: false,
  shorthandCurrentMonth: false,
  showMonths: 1,
  successtext: "",
  time_24hr: false,
  valid: false,
  value: "",
  weekNumbers: false,
  width: "full",
  wrapperClassName: "",
}
