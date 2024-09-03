/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react"
import { DateTimePicker } from "./index.js"
import { Modal } from "../Modal/index.js"
import { PortalProvider } from "../PortalProvider/index.js"
import { Form } from "../Form/index.js"
import { FormRow } from "../FormRow/index.js"
import { TextInput } from "../TextInput/index.js"
import { Textarea } from "../Textarea/index.js"

export default {
  title: "WIP/DateTimePicker/DateTimePicker",
  component: DateTimePicker,
  argTypes: {
    mode: {
      options: ["single", "multiple", "range", "time"],
      control: { type: "select" },
    },
    value: {
      control: false,
    },
    errortext: {
      control: false,
    },
    helptext: {
      control: false,
    },
    successtext: {
      control: false,
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
  },
  decorators: [
    (Story) => (
      <div className="jn-pb-12">
        <PortalProvider>
          <Story />
        </PortalProvider>
      </div>
    ),
  ],
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

const InModalTemplate = ({ ...args }) => (
  <Modal open={true}>
    <Form>
      <div style={{ display: "inline-flex", gap: "8px" }}>
        <FormRow>
          <DateTimePicker />
        </FormRow>
        <FormRow>
          <DateTimePicker />
        </FormRow>
      </div>
      <FormRow>
        <TextInput />
      </FormRow>
      <FormRow>
        <TextInput />
      </FormRow>
      <FormRow>
        <Textarea />
      </FormRow>
      <FormRow>
        <Textarea />
      </FormRow>
    </Form>
  </Modal>
)

export const Default = {
  render: Template,
  args: {},
}

export const InModal = {
  render: InModalTemplate,
}

export const RangeWithTime = {
  render: Template,
  args: {
    mode: "range",
    enableTime: true,
  },
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
  args: {
    value: new Date(),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Set the selected date of the datePicker. `value`, `defaultValue`, and `defaultDate` do the exact same thing and can be used interchangeably.",
      },
    },
  },
}

export const WithDefaultDate = {
  render: Template,
  args: {
    defaultDate: new Date(),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Set the selected date of the datePicker. `value`, `defaultValue`, and `defaultDate` do the exact same thing and can be used interchangeably.",
      },
    },
  },
}

export const WithDefaultHourAndMinute = {
  render: Template,
  args: {
    defaultHour: 9,
    defaultMinute: 13,
    enableTime: true,
    helptext: "The hour and minute input elements in the dropdown calendar have been set to default values (09:13 AM).",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Pass `defaultHour` and `defaultMinute` to set default values for the date and time input elements. Note: this will not set a selected date with these values in the DateTimePicker input element, the user still has to make a selection.",
      },
    },
  },
}

export const WithDefaultValue = {
  render: Template,
  args: {
    defaultValue: new Date(),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Set the selected date of the datePicker. `value`, `defaultValue`, and `defaultDate` do the exact same thing and can be used interchangeably.",
      },
    },
  },
}

export const WithValueAsDateString = {
  render: Template,
  args: {
    value: "2024-01-24",
  },
  parameters: {
    docs: {
      description: {
        story:
          'Pass a string as a `value`, `defaultValue`, or `defaultDate` that is compatible with the current `dateFormat` prop, e.g. `"2024-01-24"` if the current `dateFormat` is `"Y-m-d"` (as is the default). The DateTimePicker component will not convert these.',
      },
    },
  },
}

export const WithValueAsIsoDateString = {
  render: Template,
  args: {
    value: "2034-02-26T19:40:03.243Z",
  },
  parameters: {
    docs: {
      description: {
        story: "Pass an ISO-compatible date string to display the corresponding date in the Datepicker.",
      },
    },
  },
}

export const WithValueAsTimestamp = {
  render: Template,
  args: {
    value: 1706273787000,
  },
  parameters: {
    docs: {
      description: {
        story: "Pass a timestamp with milliseconds as `value` to display the corresponding date in the Datepicker.",
      },
    },
  },
}

export const WithValueAsTodayShortcut = {
  render: Template,
  args: {
    value: "today",
  },
  parameters: {
    docs: {
      description: {
        story: 'Pass `"today"` as `value` as a shortcut to display the current Date in the Datepicker.',
      },
    },
  },
}

export const WithCustomDateFormat = {
  render: Template,
  args: {
    value: "today",
    dateFormat: "F d, Y",
  },
}

export const WithTime = {
  render: Template,
  args: {
    enableTime: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "To also show a time picker to allow users to select a date and a time, set `enableTime` to `true`. Set the `dateFormat` accordingly to have the selected time reflected in the DateTimePicker input element. More about formatting dates here: https://flatpickr.js.org/formatting/.",
      },
    },
  },
}

export const WithTimeAndSeconds = {
  render: Template,
  args: {
    enableTime: true,
    enableSeconds: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "To allow selecting seconds when showing a time picker, set `enableSeconds` to `true`. To reflect seconds in the selected date in the DateTimePicker, adjust the `dateFormat` accordingly: https://flatpickr.js.org/formatting/.",
      },
    },
  },
}

export const WithTimeWithCustomHourIncrement = {
  render: Template,
  args: {
    enableTime: true,
    hourIncrement: 6,
    helptext: "The hour input of this DateTimePicker has a 6 hour increment.",
  },
  parameters: {
    docs: {
      description: {
        story: "Set a custom hour increment by which to change the hour in the respective element.",
      },
    },
  },
}

export const WithTimeWithCustomMinuteIncrement = {
  render: Template,
  args: {
    enableTime: true,
    minuteIncrement: 5,
    helptext: "The minute input of this DateTimePicker has a 5 minute increment.",
  },
  parameters: {
    docs: {
      description: {
        story: "Set a custom minute increment by which to change the minute in the respective element.",
      },
    },
  },
}

export const With24hTime = {
  render: Template,
  args: {
    enableTime: true,
    time_24hr: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Set the time picker to use 24h time mode without AM/PM selection.",
      },
    },
  },
}

export const ShowTwoMonths = {
  render: Template,
  args: {
    showMonths: 2,
  },
  parameters: {
    docs: {
      description: {
        story: "Set the number of months to be displayed side by side in the calendar.",
      },
    },
  },
}

export const WithWeekNumbers = {
  render: Template,
  args: {
    weekNumbers: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Set `weekNumbers` to `true` to display week numbers in the calendar.",
      },
    },
  },
}

export const WithShorthandCurrentMonth = {
  render: Template,
  args: {
    shorthandCurrentMonth: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Set `shorthandCurrentMonth` to `true` to show shorthand month names, e.g. 'Jan' instead of 'January'.",
      },
    },
  },
}

export const WithMonthSelectorDropdown = {
  render: Template,
  args: {
    monthSelectorType: "dropdown",
  },
  parameters: {
    docs: {
      description: {
        story:
          'Set `monthSelectorType` to "dropdown" in order to show a select element to switch months in the calndar.',
      },
    },
  },
}

export const AllowInput = {
  render: Template,
  args: {
    allowInput: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Set `allowInput` to `true` to allow direct user input by typing into the DateTimePicker input element.",
      },
    },
  },
}

export const Multiple = {
  render: Template,
  args: {
    mode: "multiple",
  },
  parameters: {
    docs: {
      description: {
        story: 'To select multiple dates, set `mode` to "multiple".',
      },
    },
  },
}

export const Range = {
  render: Template,
  args: {
    mode: "range",
  },
  parameters: {
    docs: {
      description: {
        story: 'To select a date range instead of individual date(s), set `mode` to "range".',
      },
    },
  },
}

export const TimePicker = {
  render: Template,
  args: {
    enableTime: true,
    noCalendar: true,
    enableSeconds: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "In order to create a pure timepicker, set the `dateFormat` accordingly, and set `noCalendar` and `enableTime` to `true`. If seconds are required, set `enableSeconds` to `true`.",
      },
    },
  },
}

export const WithMinDate = {
  render: Template,
  args: {
    minDate: new Date(),
    helptext: "Only dates in the future including today can be selected.",
  },
  parameters: {
    docs: {
      description: {
        story: "Set a `minDate` to allow selecting only later dates.",
      },
    },
  },
}

export const WithMaxDate = {
  render: Template,
  args: {
    maxDate: new Date(),
    helptext: "Only dates in the past including today can be selected.",
  },
  parameters: {
    docs: {
      description: {
        story: "Set a `maxDate` to allow selecting only earlier dates.",
      },
    },
  },
}

export const DisableDate = {
  render: Template,
  args: {
    disable: [new Date()],
    helptext: "The current date (today) can not be selected.",
  },
  parameters: {
    docs: {
      description: {
        story: "Pass an array of dates to be disabled, making it impossible for the user to select these dates.",
      },
    },
  },
}

export const DisableByFunction = {
  render: Template,
  args: {
    disable: [
      function (date) {
        return date.getDay() === 0 || date.getDay() === 6
      },
    ],
    locale: {
      firstDayOfWeek: 1, // set week to start on Monday
    },
    helptext: "Only work days can be selected, week in calendar starts with Monday.",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Pass an array of functions such as `function(date) {// return true to disable date}` as `disable` to be run for each date in the calendar in order to disable dates that match custom criteria. Pass a locale string or object to modify the sequence of week days rendered in the calendar.",
      },
    },
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
WithHelptext.args = {}

export const InvalidPreload = {
  render: Template,
  args: {
    allowInvalidPreload: true,
    value: "2024-01-30",
    disable: ["2024-01-30"],
    helptext:
      "The datpicker initially shows Jan 30, 2024 as value even though this date has been set as disabled and thus can not be selected by a user.",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Normally, the text input element oif the datepicker would be cleared when passing a date as `value` or `defaultDate` that is disabled from selection. By setting `allowInvalidPreload` such dates can be initially displayed in the datepicker, even though they are not available for user selection in the calendar.",
      },
    },
  },
}

const ControlledTemplate = ({ ...args }) => {
  const [testState, setTestState] = useState({ date: { end: null } })

  // variables starting with underscore are not linted
  const handleChange = (dObj, _dStr) => {
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
