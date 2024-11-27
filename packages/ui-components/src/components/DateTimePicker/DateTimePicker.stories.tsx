/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import { DateTimePicker } from "./index"

export default {
  title: "WIP/DateTimePicker/DateTimePicker",
  component: DateTimePicker,
  argTypes: {
    mode: {
      options: ["single", "multiple", "range", "time"],
      control: { type: "select" },
    },
    defaultDate: {
      table: {
        type: { summary: "DateOption | DateOption[] | null" },
      },
    },
    defaultValue: {
      table: {
        type: { summary: "DateOption | DateOption[]" },
      },
    },
    locale: {
      table: {
        type: { summary: "LocaleKey | Partial<CustomLocale> | null" },
      },
    },
    maxDate: {
      table: {
        type: { summary: "DateOption | null" },
      },
    },
    minDate: {
      table: {
        type: { summary: "DateOption | null" },
      },
    },
    value: {
      control: false,
      table: {
        type: { summary: "DateOption | DateOption[]" },
      },
    },
    errortext: {
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
    },
    helptext: {
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
    },
    successtext: {
      control: false,
      table: {
        type: { summary: "ReactNode" },
      },
    },
    monthSelectorType: {
      options: ["dropdown", "static"],
      control: { type: "radio" },
    },
    width: {
      options: ["auto", "full"],
      control: { type: "radio" },
    },
    disable: {
      control: false,
    },
    onBlur: {
      control: false,
    },
    onChange: {
      control: false,
    },
    onClear: {
      control: false,
    },
    onClose: {
      control: false,
    },
    onFocus: {
      control: false,
    },
    onReady: {
      control: false,
    },
    onOpen: {
      control: false,
    },
    onMonthChange: {
      control: false,
    },
    onYearChange: {
      control: false,
    },
  },
}

const Template = ({ ...args }) => (
  <DateTimePicker
    {...args}
    onChange={() => {}}
    onClose={() => {}}
    onReady={() => {}}
    onOpen={() => {}}
    onMonthChange={() => {}}
    onYearChange={() => {}}
  />
)

export const Default = {
  render: Template,
  args: {},
}

export const WithLabel = {
  render: Template,
  args: {
    label: "Select a date",
  },
}

export const Required = {
  render: Template,
  args: {
    label: "Select a date",
    required: true,
  },
}

export const Disabled = {
  render: Template,
  args: {
    label: "Select a date",
    disabled: true,
  },
}

export const WithPlaceholder = {
  render: Template,
  args: {
    placeholder: "Select a date…",
  },
}

export const WithValue = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story:
          "Set the selected date of the datePicker. `value`, `defaultValue`, and `defaultDate` do the exact same thing and can be used interchangeably.",
      },
    },
  },
  args: {
    value: new Date(),
  },
}

export const WithDefaultDate = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story:
          "Set the selected date of the datePicker. `value`, `defaultValue`, and `defaultDate` do the exact same thing and can be used interchangeably.",
      },
    },
  },
  args: {
    defaultDate: new Date(),
  },
}

export const WithDefaultHourAndMinute = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story:
          "Pass `defaultHour` and `defaultMinute` to set default values for the date and time input elements. Note: this will not set a selected date with these values in the DateTimePicker input element, the user still has to make a selection.",
      },
    },
  },
  args: {
    defaultHour: 9,
    defaultMinute: 13,
    enableTime: true,
    helptext: "The hour and minute input elements in the dropdown calendar have been set to default values (09:13 AM).",
  },
}

export const WithDefaultValue = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story:
          "Set the selected date of the datePicker. `value`, `defaultValue`, and `defaultDate` do the exact same thing and can be used interchangeably.",
      },
    },
  },
  args: {
    defaultValue: new Date(),
  },
}

export const WithValueAsDateString = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story:
          'Pass a string as a `value`, `defaultValue`, or `defaultDate` that is compatible with the current `dateFormat` prop, e.g. `"2024-01-24"` if the current `dateFormat` is `"Y-m-d"` (as is the default). The DateTimePicker component will not convert these.',
      },
    },
  },
  args: {
    value: "2024-01-24",
  },
}

export const WithValueAsIsoDateString = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Pass an ISO-compatible date string to display the corresponding date in the Datepicker.",
      },
    },
  },
  args: {
    value: "2034-02-26T19:40:03.243Z",
  },
}

export const WithValueAsTimestamp = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Pass a timestamp with milliseconds as `value` to display the corresponding date in the Datepicker.",
      },
    },
  },
  args: {
    value: 1706273787000,
  },
}

export const WithValueAsTodayShortcut = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'Pass `"today"` as `value` as a shortcut to display the current Date in the Datepicker.',
      },
    },
  },
  args: {
    value: "today",
  },
}

export const WithCustomDateFormat = {
  render: Template,
  parameters: {},
  args: {
    value: "today",
    dateFormat: "F d, Y",
  },
}

export const WithTime = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story:
          "To also show a time picker to allow users to select a date and a time, set `enableTime` to `true`. Set the `dateFormat` accordingly to have the selected time reflected in the DateTimePicker input element. More about formatting dates here: https://flatpickr.js.org/formatting/.",
      },
    },
  },
  args: {
    enableTime: true,
  },
}

export const WithTimeAndSeconds = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story:
          "To allow selecting seconds when showing a time picker, set `enableSeconds` to `true`. To reflect seconds in the selected date in the DateTimePicker, adjust the `dateFormat` accordingly: https://flatpickr.js.org/formatting/.",
      },
    },
  },
  args: {
    enableTime: true,
    enableSeconds: true,
  },
}

export const WithTimeWithCustomHourIncrement = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Set a custom hour increment by which to change the hour in the respective element.",
      },
    },
  },
  args: {
    enableTime: true,
    hourIncrement: 6,
    helptext: "The hour input of this DateTimePicker has a 6 hour increment.",
  },
}

export const WithTimeWithCustomMinuteIncrement = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Set a custom minute increment by which to change the minute in the respective element.",
      },
    },
  },
  args: {
    enableTime: true,
    minuteIncrement: 5,
    helptext: "The minute input of this DateTimePicker has a 5 minute increment.",
  },
}

export const With24hTime = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Set the time picker to use 24h time mode without AM/PM selection.",
      },
    },
  },
  args: {
    enableTime: true,
    time_24hr: true,
  },
}

export const ShowTwoMonths = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Set the number of months to be displayed side by side in the calendar.",
      },
    },
  },
  args: {
    showMonths: 2,
  },
}

export const WithWeekNumbers = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Set `weekNumbers` to `true` to display week numbers in the calendar.",
      },
    },
  },
  args: {
    weekNumbers: true,
  },
}

export const WithShorthandCurrentMonth = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Set `shorthandCurrentMonth` to `true` to show shorthand month names, e.g. 'Jan' instead of 'January'.",
      },
    },
  },
  args: {
    shorthandCurrentMonth: true,
  },
}

export const WithMonthSelectorDropdown = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story:
          'Set `monthSelectorType` to "dropdown" in order to show a select element to switch months in the calndar.',
      },
    },
  },
  args: {
    monthSelectorType: "dropdown",
  },
}

export const AllowInput = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Set `allowInput` to `true` to allow direct user input by typing into the DateTimePicker input element.",
      },
    },
  },
  args: {
    allowInput: true,
  },
}

export const Multiple = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'To select multiple dates, set `mode` to "multiple".',
      },
    },
  },
  args: {
    mode: "multiple",
  },
}

export const Range = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story: 'To select a date range instead of individual date(s), set `mode` to "range".',
      },
    },
  },
  args: {
    mode: "range",
  },
}

export const TimePicker = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story:
          "In order to create a pure timepicker, set the `dateFormat` accordingly, and set `noCalendar` and `enableTime` to `true`. If seconds are required, set `enableSeconds` to `true`.",
      },
    },
  },
  args: {
    enableTime: true,
    noCalendar: true,
    enableSeconds: true,
  },
}

export const WithMinDate = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Set a `minDate` to allow selecting only later dates.",
      },
    },
  },
  args: {
    minDate: new Date(),
    helptext: "Only dates in the future including today can be selected.",
  },
}

export const WithMaxDate = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Set a `maxDate` to allow selecting only earlier dates.",
      },
    },
  },
  args: {
    maxDate: new Date(),
    helptext: "Only dates in the past including today can be selected.",
  },
}

export const DisableDate = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story: "Pass an array of dates to be disabled, making it impossible for the user to select these dates.",
      },
    },
  },
  args: {
    disable: [new Date()],
    helptext: "The current date (today) can not be selected.",
  },
}

export const DisableByFunction = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story:
          "Pass an array of functions such as `function(date) {// return true to disable date}` as `disable` to be run for each date in the calendar in order to disable dates that match custom criteria. Pass a locale string or object to modify the sequence of week days rendered in the calendar.",
      },
    },
  },
  args: {
    disable: [
      function (date: Date) {
        return date.getDay() === 0 || date.getDay() === 6
      },
    ],
    locale: {
      firstDayOfWeek: 1, // set week to start on Monday
    },
    helptext: "Only work days can be selected, week in calendar starts with Monday.",
  },
}

export const Valid = {
  render: Template,
  args: {
    valid: true,
  },
}

export const Invalid = {
  render: Template,
  args: {
    invalid: true,
  },
}

export const WithErrortext = {
  render: Template,
  args: {
    errortext: "This DateTimePicker has an error or is invalid.",
  },
}

export const WithSuccesstext = {
  render: Template,
  args: {
    successtext: "This DateTimePicker was susccessfully validated.",
  },
}

export const WithHelptext = {
  render: Template,
  args: {
    helptext: "Some useful information goes here.",
  },
}

export const InvalidPreload = {
  render: Template,
  parameters: {
    docs: {
      description: {
        story:
          "Normally, the text input element oif the datepicker would be cleared when passing a date as `value` or `defaultDate` that is disabled from selection. By setting `allowInvalidPreload` such dates can be initially displayed in the datepicker, even though they are not available for user selection in the calendar.",
      },
    },
  },
  args: {
    allowInvalidPreload: true,
    value: "2024-01-30",
    disable: ["2024-01-30"],
    helptext:
      "The datpicker initially shows Jan 30, 2024 as value even though this date has been set as disabled and thus can not be selected by a user.",
  },
}

interface ControlledTemplateDate {
  date: {
    end: Date[] | undefined | null
  }
}

const ControlledTemplate = ({ ...args }) => {
  const [testState, setTestState] = useState<ControlledTemplateDate>({ date: { end: null } })

  // variables starting with underscore are not linted
  const handleChange = (dObj: Date[] | undefined, _dStr: string | undefined) => {
    setTestState({ date: { end: dObj } })
  }

  return (
    <DateTimePicker
      {...args}
      onChange={handleChange}
      onClose={() => {}}
      onReady={() => {}}
      onOpen={() => {}}
      onMonthChange={() => {}}
      onYearChange={() => {}}
      value={testState?.date?.end}
    />
  )
}

export const ControlledDateTimePicker = {
  render: ControlledTemplate,
  parameters: {
    docs: {
      description: {
        story:
          "Example of controlled usage, using the date object array as returned by the onChange handler in the parent story state. This used to create an endless loop and should be fixed now.",
      },
    },
  },
  args: {},
}
