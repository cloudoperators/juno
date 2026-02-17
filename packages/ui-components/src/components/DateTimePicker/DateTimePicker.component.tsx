/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useId, useMemo, useState, ReactNode, HTMLAttributes } from "react"
import flatpickr from "flatpickr"
import { FormHint } from "../FormHint/"
import { Icon } from "../Icon"
import { Label } from "../Label"
import { Options, DateOption, DateLimit } from "flatpickr/dist/types/options"
import { key as LocaleKey, CustomLocale } from "flatpickr/dist/types/locale"

import "./datetimepicker.css"

/* 
TODO:
* add enable prop (or leave out if no success)
* add position prop (if possible, otherwise leave out)
* Allow to use the expected date format as a placeholder in the input element (placeholder="dateFormat" or smth similar?) when direct input is enabled?
*/

const inputWrapperStyles = `
  jn:relative
`

const inputStyles = `
  jn:bg-theme-textinput
  jn:bg-no-repeat
  jn:bg-[top_0.375rem_right_1rem]
  jn:text-theme-textinput
  jn:fill-theme-textinput-default
  jn:border
  jn:text-base
  jn:leading-4
  jn:px-4
  jn:h-textinput
  jn:rounded-3px
  jn:focus:outline-hidden
  jn:focus:ring-2
  jn:focus:ring-theme-focus
  jn:disabled:opacity-50
  jn:disabled:cursor-not-allowed
  jn:autofill:bg-theme-textinput-autofill
  jn:autofill:text-theme-textinput-autofill
`

const inputWithLabelStyles = `
  jn:pt-[1.125rem] 
  jn:pb-1
`

const inputWithoutLabelStyles = `
  jn:py-4
`

const inputDefaultBorderStyles = `
  jn:border-theme-textinput-default
`

const inputInvalidStyles = `
  jn:border-theme-error
`

const inputValidStyles = `
  jn:border-theme-success
`

const labelStyles = `
  jn:peer-autofill:text-theme-textinput-autofill-label
  jn:pointer-events-none
  jn:top-2
  jn:left-[0.9375rem]
`

const iconContainerStyles = `
  jn:absolute
  jn:inline-flex
  jn:top-2
  jn:right-[2.75rem]
  jn:gap-1.5
`

interface SelectedDate {
  selectedDate?: Date[]
  selectedDateStr?: string
}

/**
 * `DateTimePicker` is a versatile and highly configurable component for date and time selection,
 * powered by Flatpickr. It supports options like direct input, localization, and validation states.
 * @see https://cloudoperators.github.io/juno/?path=/docs/wip-datetimepicker-datetimepicker--docs
 * @see {@link DateTimePickerProps}
 */
export const DateTimePicker = ({
  allowInput = false,
  allowInvalidPreload = false,
  ariaDateFormat = "F j, Y",
  className = "",
  conjunction = ", ",
  dateFormat = undefined,
  defaultHour = 12,
  defaultMinute = 0,
  defaultDate = undefined,
  defaultValue = "",
  disable = [],
  disabled = false,
  enableSeconds = false,
  enableTime = false,
  errortext = "",
  helptext = "",
  hourIncrement = 1,
  id = "",
  invalid = false,
  label = "",
  locale = undefined,
  maxDate = undefined,
  minDate = undefined,
  minuteIncrement = 1,
  mode = "single",
  monthSelectorType = "static",
  name = "",
  noCalendar = false,
  onBlur = undefined,
  onChange = undefined,
  onClear = undefined,
  onClose = undefined,
  onFocus = undefined,
  onMonthChange = undefined,
  onOpen = undefined,
  onReady = undefined,
  onYearChange = undefined,
  placeholder = "",
  required = false,
  shorthandCurrentMonth = false,
  showMonths = 1,
  successtext = "",
  time_24hr = false,
  valid = false,
  value = "",
  weekNumbers = false,
  width = "full",
  wrapperClassName = "",
  ...props
}: DateTimePickerProps): ReactNode => {
  // always generate auto-id string using the useId hook to avoid "more hooks than in previous render" error when removing custom id:
  const autoId = "juno-datetimepicker-" + useId()
  const theId = id && id.length ? id : autoId

  const fpRef = useRef<HTMLInputElement | null>(null) // the DOM node flatpickr instance will be bound to
  const flatpickrInstanceRef = useRef<flatpickr.Instance | null>(null) // The actual flatpickr instance
  const calendarTargetRef = useRef<HTMLDivElement | null>(null) // The DOM node the flatpickr calendar should be rendered to
  const isCalendarClickRef = useRef<boolean>(false) // Track if click is within calendar

  const [theDate, setTheDate] = useState<SelectedDate>({})
  // variables starting with underscore are not linted
  const [_hasFocus, setHasFocus] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isInvalid, setIsInvalid] = useState<boolean>(false)
  const [isValid, setIsValid] = useState<boolean>(false)

  const hasLength = (node: ReactNode) => (typeof node === "string" || Array.isArray(node)) && node.length

  const updateFlatpickrInstance = (newKeys: flatpickr.Instance | null) => {
    if (flatpickrInstanceRef.current === null) {
      flatpickrInstanceRef.current = newKeys
    } else if (newKeys !== null) {
      flatpickrInstanceRef.current = {
        ...flatpickrInstanceRef.current,
        ...newKeys,
      }
    }
  }

  const invalidated = useMemo(
    () => (invalid || (errortext && hasLength(errortext)) ? true : false),
    [invalid, errortext]
  )
  const validated = useMemo(
    () => (valid || (successtext && hasLength(successtext)) ? true : false),
    [valid, successtext]
  )

  useEffect(() => {
    setIsInvalid(invalidated)
  }, [invalidated])

  useEffect(() => {
    setIsValid(validated)
  }, [validated])

  // FIX: Modified blur handler to check calendar click status
  const handleBlur = () => {
    // Don't process blur if the click was inside the calendar
    if (isCalendarClickRef.current) {
      isCalendarClickRef.current = false
      return
    }

    setHasFocus(false)
    onBlur && onBlur(theDate.selectedDate, theDate.selectedDateStr)
  }

  const handleChange = (selectedDate: Date[], dateStr: string, _instance: flatpickr.Instance) => {
    setTheDate({ selectedDate: selectedDate, selectedDateStr: dateStr })
    onChange && onChange(selectedDate, dateStr)
  }

  const handleClose = (selectedDate: Date[], dateStr: string, _instance: flatpickr.Instance) => {
    setIsOpen(false)
    onClose && onClose(selectedDate, dateStr)
  }

  const handleMonthChange = (selectedDate: Date[], dateStr: string, _instance: flatpickr.Instance) => {
    setTheDate({ selectedDate: selectedDate, selectedDateStr: dateStr })
    onMonthChange && onMonthChange(selectedDate, dateStr)
  }

  const handleOpen = (selectedDate: Date[], dateStr: string, _instance: flatpickr.Instance) => {
    setIsOpen(true)
    onOpen && onOpen(selectedDate, dateStr)
  }

  const handleReady = (selectedDate: Date[], dateStr: string, _instance: flatpickr.Instance) => {
    onReady && onReady(selectedDate, dateStr)
  }

  const handleYearChange = (selectedDate: Date[], dateStr: string, _instance: flatpickr.Instance) => {
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
    const options: Options = {
      allowInput: allowInput,
      allowInvalidPreload: allowInvalidPreload,
      ariaDateFormat: ariaDateFormat,
      appendTo: calendarTargetRef.current || undefined,
      conjunction: conjunction,
      dateFormat: theDateFormat,
      defaultDate: defaultDate || defaultValue,
      defaultHour: defaultHour,
      defaultMinute: defaultMinute,
      disable: disable,
      enableSeconds: enableSeconds,
      enableTime: enableTime,
      hourIncrement: hourIncrement,
      locale: locale || "default",
      maxDate: maxDate || undefined,
      minDate: minDate || undefined,
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
      positionElement: calendarTargetRef.current || undefined,
      shorthandCurrentMonth: shorthandCurrentMonth,
      showMonths: showMonths,
      time_24hr: time_24hr,
      weekNumbers: weekNumbers,
    }

    const FP = calendarTargetRef && fpRef.current && flatpickr(fpRef.current, options)
    updateFlatpickrInstance(FP)

    // FIX: Add event listeners to track calendar clicks
    if (FP && FP.calendarContainer) {
      FP.calendarContainer.addEventListener("mousedown", () => {
        isCalendarClickRef.current = true
      })

      // Set up event delegation for date cell clicks
      FP.calendarContainer.addEventListener("click", (e) => {
        const target = e.target as HTMLElement
        // Check if clicked element is a date cell or a child of one
        if (target.classList.contains("flatpickr-day") || target.closest(".flatpickr-day")) {
          // Keep input focused when clicking on calendar days
          if (fpRef.current) {
            setTimeout(() => {
              fpRef.current?.focus()
            }, 0)
          }
        }
      })
    }
  }

  const destroyFlatpickrInstance = () => {
    flatpickrInstanceRef.current?.destroy()
    setTheDate({})
    flatpickrInstanceRef.current = null
  }

  useEffect(() => {
    createFlatpickrInstance()
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
    monthSelectorType: monthSelectorType,
    showMonths: showMonths,
  })

  // Apply a use effect to handle the logic bound to the props that require creating a new faltpickr instance:
  useEffect(() => {
    // set a variable to be set to true once we know we need to destroy the current instance and create  a new one:
    let hasChanged = false

    // For each of the props…
    Object.keys(prevRerenderingProps.current).forEach((propKey) => {
      const currentProps = prevRerenderingProps.current
      const typedKey = propKey as keyof typeof currentProps
      const prevValue = currentProps[typedKey]
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

    // After we have checked if any one or multiple of the relevant props have changed, we actually destroy the curent instance and create a new one:
    if (hasChanged) {
      flatpickrInstanceRef.current?.destroy()
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
    flatpickrInstanceRef.current?.set("locale", locale || "default")
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
      (value || defaultDate || defaultValue) as DateOption | DateOption[],
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
      ${width == "auto" ? "jn:inline-block" : "jn:block"}
      ${width == "auto" ? "jn:w-auto" : "jn:w-full"}
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
            ${width == "auto" ? "jn:w-auto" : "jn:w-full"}
            ${enableTime && noCalendar ? "juno-datetimepicker-input-timepicker" : "juno-datetimepicker-input-default"}
            ${className}
          `}
          data-mode={mode}
          disabled={disabled}
          id={theId}
          name={name && name.length ? name : undefined}
          onBlur={handleBlur}
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
          {isInvalid ? <Icon icon="dangerous" color="jn:text-theme-error" /> : ""}
          {isValid ? <Icon icon="checkCircle" color="jn:text-theme-success" /> : ""}
        </div>
      </div>
      <div ref={calendarTargetRef}></div>

      {errortext && hasLength(errortext) ? <FormHint text={errortext} variant="error" className="jn:mt-0" /> : ""}
      {successtext && hasLength(successtext) ? (
        <FormHint text={successtext} variant="success" className="jn:mt-0" />
      ) : (
        ""
      )}
      {helptext && hasLength(helptext) ? <FormHint text={helptext} className="jn:mt-0" /> : ""}
    </div>
  )
}

// eslint-disable-next-line no-unused-vars
type DateChangeHandler = (dates?: Date[], dateStr?: string, instance?: flatpickr.Instance) => void

export interface DateTimePickerProps
  extends Omit<HTMLAttributes<HTMLInputElement>, "defaultValue" | "onFocus" | "onBlur" | "onChange"> {
  /**
   * Determines if the DateTimePicker input element allows direct keyboard input.
   * @default false
   */
  allowInput?: boolean

  /**
   * Allows preloading of invalid dates which clear if disabled.
   */
  allowInvalidPreload?: boolean

  /** ARIA date formatting string for calendar accessibility. */
  ariaDateFormat?: string

  /**
   * Custom class names appended to the DateTimePicker input element.
   * @default ""
   */
  className?: string

  /** Delimiter for dates in multiple selection mode.
   * @default ", "
   */
  conjunction?: string

  /** Custom date format string for input and display, per Flatpickr. */
  dateFormat?: string

  /**
   * Default date(s) set on initialization, secondary to `value`.
   */
  defaultDate?: string | number | Date | DateOption[]

  /**
   * Initial hour setting in the time component.
   */
  defaultHour?: number

  /**
   * Initial minute setting in the time component.
   */
  defaultMinute?: number

  /** Alternative default value representation. */
  defaultValue?: string | number | Date | DateOption[]

  /** Array of dates or ranges to disable. */
  disable?: DateLimit<DateOption>[]

  /**
   * Disables the DateTimePicker entirely.
   * @default false
   */
  disabled?: boolean

  /** Enables seconds in the time picker.
   * @default false
   */
  enableSeconds?: boolean

  /**
   * Enables a time selection feature.
   * @default false
   */
  enableTime?: boolean

  /** Error message accompanying validation failure. */
  errortext?: ReactNode

  /** Helper text to offer additional context or instructions. */
  helptext?: ReactNode

  /**
   * Hour step increment in time-picking mode.
   */
  hourIncrement?: number

  /**
   * Unique input ID, generated if absent.
   * @default Auto-generated ID
   */
  id?: string

  /** Invalid state representation.
   * @default false
   */
  invalid?: boolean

  /** Descriptive label for the time or date field. */
  label?: string

  /** Locale setting for calendar interaction, allowing adjustments like first day of the week. */
  locale?: LocaleKey | Partial<CustomLocale>

  /**
   * Maximum selectable date.
   */
  maxDate?: DateOption

  /**
   * Minimum selectable date.
   */
  minDate?: DateOption

  /**
   * Minute step increment in time-picking mode.
   */
  minuteIncrement?: number

  /** Selection mode: single, multiple, or range. */
  mode?: "single" | "multiple" | "range"

  /** Dropdown setting for month selection.
   * @default static
   */
  monthSelectorType?: "static" | "dropdown"

  /** Name attribute for the input, for form handling. */
  name?: string

  /**
   * Hides the calendar, showing only time selectors if `enableTime` is true.
   */
  noCalendar?: boolean

  /** Handler for when the input field loses focus. */
  onBlur?: DateChangeHandler

  /** Handler for changes in date or time. */
  onChange?: DateChangeHandler

  /** Specific handler for reset actions using the clear icon. */
  onClear?: DateChangeHandler

  /** Handler when closing the date picker. */
  onClose?: DateChangeHandler

  /** Handler for when the input field is focused. */
  onFocus?: DateChangeHandler

  /** Handler for changes in selected month. */
  onMonthChange?: DateChangeHandler

  /** Handler when the calendar is opened. */
  onOpen?: DateChangeHandler

  /** Handler for when the date-time picker is initialized. */
  onReady?: DateChangeHandler

  /** Handler for changes in selected year. */
  onYearChange?: DateChangeHandler

  /** Placeholder text in the input. */
  placeholder?: string

  /**
   * Marks the field as required, often with a visual prompt.
   * @default false
   */
  required?: boolean

  /** Displays abbreviated month names,
   * @default false
   */
  shorthandCurrentMonth?: boolean

  /** Number of months to show at once. */
  showMonths?: number

  /** Success message shown on validation completion. */
  successtext?: ReactNode

  /** Uses a 24-hour clock format.
   * @default false
   */
  time_24hr?: boolean

  /**
   * Validation success state.
   * @default false
   */
  valid?: boolean

  /** Current date or time value selection. */
  value?: string | number | Date | DateOption[]

  /**
   * Shows week numbers in the calendar.
   * @default false
   */
  weekNumbers?: boolean

  /**
   * Input width setting: "full" (default) or "auto".
   * @default "full"
   */
  width?: "full" | "auto"

  /**
   * Additional classes for the wrapper element, aiding layout management.
   */
  wrapperClassName?: string
}
