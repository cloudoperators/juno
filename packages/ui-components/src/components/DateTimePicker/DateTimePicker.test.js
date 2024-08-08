/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { cleanup, render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { DateTimePicker } from "./index"
import { AppShellProvider } from "../AppShellProvider"

const mockOnOpen = jest.fn()
const mockOnClear = jest.fn()
const mockOnClose = jest.fn()
const mockOnChange = jest.fn()
const mockOnMonthChange = jest.fn()
const mockOnYearChange = jest.fn()
// const mockOnValueUpdate = jest.fn()

describe("DateTimePicker", () => {
  afterEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  test("renders a DateTimePicker", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveAttribute("type", "text")
    expect(screen.getByRole("textbox")).toHaveClass("juno-datetimepicker-input")
  })

  test("renders a label as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker label="The DateTimePicker Label" id="my-textinput" />
        </AppShellProvider>
      )
    )
    expect(document.querySelector(".juno-label")).toBeInTheDocument()
    expect(document.querySelector(".juno-label")).toHaveTextContent("The DateTimePicker Label")
  })

  test("renders an id as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker id="my-datetimepicker" />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveAttribute("id", "my-datetimepicker")
  })

  test("renders a name as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker name="my-name" />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveAttribute("name", "my-name")
  })

  test("renders a DateTimePicker with an auto-generated id if no id is passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveAttribute("id")
    expect(screen.getByRole("textbox").getAttribute("id")).toMatch("juno-datetimepicker")
  })

  test("renders a DateTimePicker with a label associated by an id as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker label="The DateTimePicker Label" id="dp-1" />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveAttribute("id")
    expect(screen.getByRole("textbox").getAttribute("id")).toMatch("dp-1")
    expect(screen.getByLabelText("The DateTimePicker Label")).toBeInTheDocument()
  })

  test("renders a DateTimePicker with a label associated by an auto-generated id if no id was passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker label="This is a DateTimePicker" />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByLabelText("This is a DateTimePicker")).toBeInTheDocument()
  })

  test("renders a DateTimePicker with a placholder as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker placeholder="This is a placeholder" />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveAttribute("placeholder", "This is a placeholder")
  })

  test("renders a disabled DateTimePicker as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker disabled />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toBeDisabled()
  })

  test("renders a Clear button if passed and when a date is set", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker value="2027-01-12" />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByTitle("Clear")).toBeInTheDocument()
  })

  test("does not render a Clear button when no date is set", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.queryByTitle("Clear")).not.toBeInTheDocument()
  })

  test("renders a DateTimePicker marked as required", async () => {
    // DateTimePicker needs a label passed since the Label subcomponent is responsible for rendering the Required marker:
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker label="Required DateTimePicker" required />
        </AppShellProvider>
      )
    )
    expect(document.querySelector(".juno-required")).toBeInTheDocument()
  })

  test("renders a helptext as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker helptext="this is a helptext" />
        </AppShellProvider>
      )
    )
    expect(document.querySelector(".juno-form-hint")).toBeInTheDocument()
    expect(document.querySelector(".juno-form-hint")).toHaveClass("juno-form-hint-help")
    expect(document.querySelector(".juno-form-hint")).toHaveTextContent("this is a helptext")
  })

  test("renders a valid DateTimePicker as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker valid />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveClass("juno-datetimepicker-input-valid")
    expect(screen.getByTitle("CheckCircle")).toBeInTheDocument()
  })

  test("renders an invalid DateTimePicker as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker invalid />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveClass("juno-datetimepicker-input-invalid")
    expect(screen.getByTitle("Dangerous")).toBeInTheDocument()
  })

  test("renders a successtext as passed and validates the element", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker successtext="great success!" />
        </AppShellProvider>
      )
    )
    expect(document.querySelector(".juno-form-hint")).toBeInTheDocument()
    expect(document.querySelector(".juno-form-hint")).toHaveClass("juno-form-hint-success")
    expect(document.querySelector(".juno-form-hint")).toHaveTextContent("great success!")
    expect(screen.getByRole("textbox")).toHaveClass("juno-datetimepicker-input-valid")
    expect(screen.getByTitle("CheckCircle")).toBeInTheDocument()
  })

  test("renders an errortext as passed and invalidates the element", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker errortext="this is an error!" />
        </AppShellProvider>
      )
    )
    expect(document.querySelector(".juno-form-hint")).toBeInTheDocument()
    expect(document.querySelector(".juno-form-hint")).toHaveClass("juno-form-hint-error")
    expect(document.querySelector(".juno-form-hint")).toHaveTextContent("this is an error!")
    expect(screen.getByRole("textbox")).toHaveClass("juno-datetimepicker-input-invalid")
    expect(screen.getByTitle("Dangerous")).toBeInTheDocument()
  })

  test("renders a DateTimePicker with a time picker as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker enableTime={true} dateFormat="Y-m-d H:i:S" />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(document.querySelector(".flatpickr-time")).toBeInTheDocument()
    expect(screen.getByLabelText("Hour")).toBeInTheDocument()
    expect(screen.getByLabelText("Minute")).toBeInTheDocument()
  })

  test("renders a DateTimePicker with a time picker with seconds as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker enableTime={true} enableSeconds={true} />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(document.querySelector(".flatpickr-time")).toBeInTheDocument()
    expect(screen.getByLabelText("Hour")).toBeInTheDocument()
    expect(screen.getByLabelText("Minute")).toBeInTheDocument()
    // We need to check for the flatpickr className as flatpickr does not assign an aria-label to the seconds input:
    expect(document.querySelector(".flatpickr-second")).toBeInTheDocument()
  })

  test("displays the date as passed as a date object", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker value={new Date(2099, 0, 1)} />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveValue("2099-01-01")
  })

  test("displays the date as passed as a date string", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker value="2024-01-26" />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveValue("2024-01-26")
  })

  test("diplays the date as passed as an ISO date string", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker value="2034-02-26T19:40:03.243Z" />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveValue("2034-02-26")
  })

  test("displays the date as passed as a timestamp", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker value={1706273787000} />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveValue("2024-01-26")
  })

  test("displays the date as passed by shortcut 'today'", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker value="today" />
        </AppShellProvider>
      )
    )
    const today = new Date()
    const year = today.getFullYear()
    const month = (today.getMonth() + 1).toString().padStart(2, "0")
    const day = today.getDate().toString().padStart(2, "0")
    const todayAsString = `${year}-${month}-${day}`
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveValue(todayAsString)
  })

  test("displays the date in a custom format as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker dateFormat="F d Y" value={1706273787000} />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveValue("January 26 2024")
  })

  test("uses the default dateFormat (Y-m-d) in default (non-time picker) mode)", async () => {
    const today = new Date()
    const fullYear = today.getFullYear()
    const month = (today.getMonth() + 1).toString().padStart(2, "0")
    const day = today.getDate().toString().padStart(2, "0")
    const todayAsString = `${fullYear}-${month}-${day}`
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker value={today} />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveValue(todayAsString)
  })

  test("uses the correct default dateFormat (Y-m-d H:i) in date-time-picker mode without seconds", async () => {
    const now = new Date()
    const fullYear = now.getFullYear()
    const month = (now.getMonth() + 1).toString().padStart(2, "0")
    const day = now.getDate().toString().padStart(2, "0")
    const hours = now.getHours().toString().padStart(2, "0")
    const minutes = now.getMinutes().toString().padStart(2, "0")
    const nowAsString = `${fullYear}-${month}-${day} ${hours}:${minutes}`
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker enableTime value={now} />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveValue(nowAsString)
  })

  test("uses the correct default dateFormat (Y-m-d H:i:S) in date-time-picker mode with seconds enabled", async () => {
    const now = new Date()
    const fullYear = now.getFullYear()
    const month = (now.getMonth() + 1).toString().padStart(2, "0")
    const day = now.getDate().toString().padStart(2, "0")
    const hours = now.getHours().toString().padStart(2, "0")
    const minutes = now.getMinutes().toString().padStart(2, "0")
    const seconds = now.getSeconds().toString().padStart(2, "0")
    const nowAsStringWithSeconds = `${fullYear}-${month}-${day} ${hours}:${minutes}:${seconds}`
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker enableTime enableSeconds value={now} />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveValue(nowAsStringWithSeconds)
  })

  test("uses the correct default dateFormat (H:i) in time-picker-only mode without seconds", async () => {
    const now = new Date()
    const hours = now.getHours().toString().padStart(2, "0")
    const minutes = now.getMinutes().toString().padStart(2, "0")
    const nowAsStringWithOnlyHoursAndMinutes = `${hours}:${minutes}`
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker enableTime noCalendar value={now} />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveValue(nowAsStringWithOnlyHoursAndMinutes)
  })

  test("uses the correct defaultDateFormat (H:i:S) in time-picker-only mode with seconds enabled", async () => {
    const now = new Date()
    const hours = now.getHours().toString().padStart(2, "0")
    const minutes = now.getMinutes().toString().padStart(2, "0")
    const seconds = now.getSeconds().toString().padStart(2, "0")
    const nowAsStringWithOnlyHoursMinutesAndSeconds = `${hours}:${minutes}:${seconds}`
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker enableTime enableSeconds noCalendar value={now} />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveValue(nowAsStringWithOnlyHoursMinutesAndSeconds)
  })

  test("displays the date as passed as defaultDate instead of value or defaultDate", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker defaultDate={new Date(2099, 0, 1)} />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveValue("2099-01-01")
  })

  test("displays the date as passed as defaultValue instead of value or defaultDate", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker defaultValue={new Date(2099, 0, 1)} />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveValue("2099-01-01")
  })

  test("updates the date accordingly when value changes", async () => {
    const { rerender } = render(<DateTimePicker value={new Date(2024, 0, 12)} />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveValue("2024-01-12")
    await waitFor(() =>
      rerender(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker value={new Date(2025, 7, 18)} />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("textbox")).toHaveValue("2025-08-18")
  })

  test("updates the date accordingly when defaultValue changes", async () => {
    const { rerender } = render(<DateTimePicker defaultValue={new Date(2024, 0, 12)} />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveValue("2024-01-12")
    await waitFor(() =>
      rerender(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker defaultValue={new Date(2025, 7, 18)} />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("textbox")).toHaveValue("2025-08-18")
  })

  test("updates the date accordingly when defaultDate changes", async () => {
    const { rerender } = render(<DateTimePicker defaultDate={new Date(2024, 0, 12)} />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveValue("2024-01-12")
    await waitFor(() =>
      rerender(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker defaultDate={new Date(2025, 7, 18)} />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("textbox")).toHaveValue("2025-08-18")
  })

  test("allows typing in the field when configured to do so", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker allowInput />
        </AppShellProvider>
      )
    )
    const input = screen.getByRole("textbox")
    const user = userEvent.setup()
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue("")
    await waitFor(() => userEvent.click(input))
    await waitFor(() => user.type(input, "12"))
    expect(input).toHaveValue("12")
  })

  test("updates accordingly when the allowInput prop changes", async () => {
    const { rerender } = await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker />
        </AppShellProvider>
      )
    )
    const input = screen.getByRole("textbox")
    const user = userEvent.setup()
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue("")
    expect(input).toHaveAttribute("readonly", "readonly")
    await waitFor(() =>
      rerender(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker allowInput />
        </AppShellProvider>
      )
    )
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue("")
    expect(input).not.toHaveAttribute("readonly")
    await waitFor(() => userEvent.click(input))
    await waitFor(() => user.type(input, "123"))
    expect(input).toHaveValue("123")
  })

  test("renders a DateTimePicker with week numbers as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker weekNumbers />
        </AppShellProvider>
      )
    )
    const input = screen.getByRole("textbox")
    const user = userEvent.setup()
    expect(input).toBeInTheDocument()
    // click to open the calendar:
    await waitFor(() => user.click(input))
    expect(document.querySelector(".flatpickr-weekwrapper")).toBeInTheDocument()
    expect(document.querySelector(".flatpickr-weekday")).toBeInTheDocument()
    expect(document.querySelector(".flatpickr-weekday")).toHaveTextContent("Wk")
    expect(document.querySelector(".flatpickr-weeks")).toBeInTheDocument()
    expect(document.querySelector(".flatpickr-weeks").childElementCount).toBe(6)
  })

  test("renders a DateTimePicker in single mode per default", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveAttribute("data-mode", "single")
  })

  test("renders a DateTimePicker in multiple mode as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker mode="multiple" />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveAttribute("data-mode", "multiple")
  })

  test("renders a DateTimePicker in range mode as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker mode="range" />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveAttribute("data-mode", "range")
  })

  test("Updates the mode accordingly when the mode prop changes", async () => {
    const { rerender } = await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveAttribute("data-mode", "single")
    await waitFor(() =>
      rerender(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker mode="range" />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveAttribute("data-mode", "range")
  })

  test("allows setting an otherwise invalid value on first load as configured", async () => {
    render(<DateTimePicker value="2024-01-30" disable={["2024-01-30"]} allowInvalidPreload />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveValue("2024-01-30")
  })

  test("clicking the clear button clears the input", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker value="2024-01-31" />
        </AppShellProvider>
      )
    )
    const input = screen.getByRole("textbox")
    const clearButton = screen.getByTitle("Clear")
    const user = userEvent.setup()
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue("2024-01-31")
    expect(clearButton).toBeInTheDocument()
    await waitFor(() => user.click(clearButton))
    expect(input).toHaveValue("")
  })

  test("sets a custom aria-label format for calendar dates as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker ariaDateFormat="l, F j, Y" />
        </AppShellProvider>
      )
    )
    const input = screen.getByRole("textbox")
    const user = userEvent.setup()
    expect(input).toBeInTheDocument()
    // click to open the calendar:
    await waitFor(() => user.click(input))
    //Match something like "Monday, January 31, 2024" to pattern like [word, comma, space, word, space, one or two-digit number, comma, space, four-digit number] assuming this is precise enough:
    expect(document.querySelectorAll(".flatpickr-day")[0].getAttribute("aria-label")).toMatch(
      new RegExp(/^\b\w+\b, \b\w+\b \d{1,2}, \d{4}$/)
    )
  })

  test("uses a custom conjunction between dates in multiple mode as passed", async () => {
    render(<DateTimePicker mode="multiple" conjunction=" || " value={["2024-02-01", "2099-03-12"]} />)
    const input = screen.getByRole("textbox")
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue("2024-02-01 || 2099-03-12")
  })

  test("updates the displayed value accordingly when the conjunction prop changes", async () => {
    const { rerender } = render(<DateTimePicker mode="multiple" value={["2024-02-01", "2099-03-12"]} />)
    const input = screen.getByRole("textbox")
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue("2024-02-01, 2099-03-12")
    rerender(<DateTimePicker mode="multiple" value={["2024-02-01", "2099-03-12"]} conjunction=" --- " />)
    expect(input).toHaveValue("2024-02-01 --- 2099-03-12")
  })

  test("sets a default hour as passed", async () => {
    render(<DateTimePicker enableTime={true} dateFormat="Y-m-d H:i" defaultHour={5} />)
    const input = screen.getByRole("textbox")
    const user = userEvent.setup()
    expect(input).toBeInTheDocument()
    await waitFor(() => user.click(input))
    const hourInput = document.querySelector("input.flatpickr-hour")
    expect(hourInput).toHaveValue(5)
  })

  test("sets a default minute as passed", async () => {
    render(<DateTimePicker enableTime dateFormat="Y-m-d H:i" defaultMinute={13} />)
    const input = screen.getByRole("textbox")
    const user = userEvent.setup()
    expect(input).toBeInTheDocument()
    await waitFor(() => user.click(input))
    const minuteInput = document.querySelector("input.flatpickr-minute")
    expect(minuteInput).toHaveValue(13)
  })

  test("opens a calendar when clicking in the datepicker field", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker />
        </AppShellProvider>
      )
    )
    const input = screen.getByRole("textbox")
    const calendar = document.querySelector(".flatpickr-calendar")
    const user = userEvent.setup()
    expect(input).toBeInTheDocument()
    expect(calendar).toBeInTheDocument()
    expect(calendar).not.toHaveClass("open")
    await waitFor(() => user.click(input))
    expect(calendar).toHaveClass("open")
  })

  test("uses a custom hour increment as passed", async () => {
    render(<DateTimePicker enableTime dateFormat="Y-m-d H:i" hourIncrement={6} />)
    const hourInput = document.querySelector("input.flatpickr-hour")
    expect(hourInput).toHaveAttribute("step", "6")
  })

  test("uses a custom minute increment as passed", async () => {
    render(<DateTimePicker enableTime dateFormat="Y-m-d H:i" minuteIncrement={7} />)
    const hourInput = document.querySelector("input.flatpickr-minute")
    expect(hourInput).toHaveAttribute("step", "7")
  })

  test("does not allow selection of dates before a minDate as passed", async () => {
    // Select yesterday element in calendar by label (formed like "January 31, 2024"), and test if disabled.
    const user = userEvent.setup()
    const today = new Date()
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    const fullMonth = yesterday.toLocaleString("default", { month: "long" })
    const day = yesterday.getDate()
    const fullYear = yesterday.getFullYear()
    const yesterdayLabel = `${fullMonth} ${day}, ${fullYear}`
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker minDate={today} />
        </AppShellProvider>
      )
    )
    const input = screen.getByRole("textbox")
    await waitFor(() => user.click(input))
    const yesterdayEl = screen.getByLabelText(yesterdayLabel)
    expect(yesterdayEl).toHaveClass("flatpickr-disabled")
  })

  test("allows selection of dates after a minDate as passed", async () => {
    const user = userEvent.setup()
    const today = new Date()
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    const fullMonth = tomorrow.toLocaleString("default", { month: "long" })
    const day = tomorrow.getDate()
    const fullYear = tomorrow.getFullYear()
    const tomorrowLabel = `${fullMonth} ${day}, ${fullYear}`
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker minDate={today} />
        </AppShellProvider>
      )
    )
    const input = screen.getByRole("textbox")
    await waitFor(() => user.click(input))
    const yesterdayEl = screen.getByLabelText(tomorrowLabel)
    expect(yesterdayEl).not.toHaveClass("flatpickr-disabled")
  })

  test("does not allow selection of dates after a maxDate as passed", async () => {
    const user = userEvent.setup()
    const today = new Date()
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    const tomorrowFullMonth = tomorrow.toLocaleString("default", {
      month: "long",
    })
    const tomorrowDay = tomorrow.getDate()
    const tomorrowFullYear = tomorrow.getFullYear()
    const tomorrowLabel = `${tomorrowFullMonth} ${tomorrowDay}, ${tomorrowFullYear}`
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker maxDate={today} />
        </AppShellProvider>
      )
    )
    const input = screen.getByRole("textbox")
    await waitFor(() => user.click(input))
    const tomorrowEl = screen.getByLabelText(tomorrowLabel)
    expect(tomorrowEl).toHaveClass("flatpickr-disabled")
  })

  test("allows selection of dates before a maxDate as passed", async () => {
    const user = userEvent.setup()
    const today = new Date()
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    const todayFullMonth = today.toLocaleString("default", { month: "long" })
    const todayDay = today.getDate()
    const todayFullYear = today.getFullYear()
    const todayLabel = `${todayFullMonth} ${todayDay}, ${todayFullYear}`
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker maxDate={tomorrow} />
        </AppShellProvider>
      )
    )
    const input = screen.getByRole("textbox")
    await waitFor(() => user.click(input))
    const todayEl = screen.getByLabelText(todayLabel)
    expect(todayEl).not.toHaveClass("flatpickr-disabled")
  })

  test("renders a time picker only if configured to do so", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker enableTime noCalendar />
        </AppShellProvider>
      )
    )
    expect(document.querySelector(".flatpickr-days")).not.toBeInTheDocument()
    expect(document.querySelector("input.flatpickr-hour")).toBeInTheDocument()
    expect(document.querySelector("input.flatpickr-minute")).toBeInTheDocument()
  })

  test("executes an onOpen handler when the user clicks the Datepicker and the calendar opens", async () => {
    const user = userEvent.setup()
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker onOpen={mockOnOpen} />
        </AppShellProvider>
      )
    )
    const input = screen.getByRole("textbox")
    await waitFor(() => user.click(input))
    expect(mockOnOpen).toHaveBeenCalled()
  })

  test("closes the calendar and executes an onClose handler when the user clicks outside the calendar", async () => {
    const user = userEvent.setup()
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker onClose={mockOnClose} />
        </AppShellProvider>
      )
    )
    const input = screen.getByRole("textbox")
    await waitFor(() => user.click(input))
    await waitFor(() => user.click(document.body))
    expect(mockOnClose).toHaveBeenCalled()
  })

  test("executes an onClear handler when the user clears the DateTimePicker by clicking the clear icon", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker value="2024-01-31" onClear={mockOnClear} />
        </AppShellProvider>
      )
    )
    const input = screen.getByRole("textbox")
    const clearButton = screen.getByTitle("Clear")
    const user = userEvent.setup()
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue("2024-01-31")
    expect(clearButton).toBeInTheDocument()
    await waitFor(() => user.click(clearButton))
    expect(mockOnClear).toHaveBeenCalled()
  })

  test("executes an onChange handler when the user changes the selected date", async () => {
    const user = userEvent.setup()
    const today = new Date()
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    const tomorrowFullMonth = tomorrow.toLocaleString("default", {
      month: "long",
    })
    const tomorrowDay = tomorrow.getDate()
    const tomorrowFullYear = tomorrow.getFullYear()
    const tomorrowLabel = `${tomorrowFullMonth} ${tomorrowDay}, ${tomorrowFullYear}`
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker value={today} onChange={mockOnChange} />
        </AppShellProvider>
      )
    )
    const input = screen.getByRole("textbox")
    await waitFor(() => user.click(input))
    const tomorrowEl = screen.getByLabelText(tomorrowLabel)
    await waitFor(() => user.click(tomorrowEl))
    expect(mockOnChange).toHaveBeenCalled()
  })

  test("executes an onYearChange handler when the user changes the year", async () => {
    const user = userEvent.setup()
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker onYearChange={mockOnYearChange} />
        </AppShellProvider>
      )
    )
    const input = screen.getByRole("textbox")
    await waitFor(() => user.click(input))
    const yearInputUp = document.querySelector(".numInputWrapper > .arrowUp")
    await waitFor(() => user.click(yearInputUp))
    expect(mockOnYearChange).toHaveBeenCalled()
  })

  test("executes an onMonthChange handler when the user changes the month by clicking an arrow", async () => {
    const user = userEvent.setup()
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker onMonthChange={mockOnMonthChange} />
        </AppShellProvider>
      )
    )
    const input = screen.getByRole("textbox")
    await waitFor(() => user.click(input))
    const nextMonthButton = document.querySelector(".flatpickr-next-month")
    await waitFor(() => user.click(nextMonthButton))
    expect(mockOnMonthChange).toHaveBeenCalled()
  })

  test("renders a wrapperClassName to the outer wrapping element", async () => {
    render(<DateTimePicker wrapperClassName="my-wrapper-class" />)
    expect(document.querySelector(".juno-datetimepicker-wrapper")).toBeInTheDocument()
    expect(document.querySelector(".juno-datetimepicker-wrapper")).toHaveClass("my-wrapper-class")
  })

  test("renders a className as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker className="my-custom-class" />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveClass("my-custom-class")
  })

  test("renders other props as passed", async () => {
    await waitFor(() =>
      render(
        <AppShellProvider shadowRoot={false}>
          <DateTimePicker data-lolol="527" />
        </AppShellProvider>
      )
    )
    expect(screen.getByRole("textbox")).toBeInTheDocument()
    expect(screen.getByRole("textbox")).toHaveAttribute("data-lolol", "527")
  })
})
