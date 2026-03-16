/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Custom types to replace flatpickr types and eliminate type leakage.
 * These types mirror the functionality of flatpickr without depending on its type definitions.
 */

/**
 * Date option type that can represent a date in various formats.
 * Replaces flatpickr's DateOption type.
 */
export type DateOption = string | Date | number

/**
 * Date limit function type for disabling specific dates.
 * Replaces flatpickr's DateLimit type.
 */
export type DateLimit = DateOption | { from: DateOption; to: DateOption } | ((_date: Date) => boolean)

/**
 * Locale key type for predefined locales.
 * Replaces flatpickr's LocaleKey type.
 */
export type LocaleKey =
  | "ar"
  | "at"
  | "az"
  | "be"
  | "bg"
  | "bn"
  | "bs"
  | "ca"
  | "cat"
  | "ckb"
  | "cs"
  | "cy"
  | "da"
  | "de"
  | "default"
  | "en"
  | "eo"
  | "es"
  | "et"
  | "fa"
  | "fi"
  | "fo"
  | "fr"
  | "gr"
  | "he"
  | "hi"
  | "hr"
  | "hu"
  | "hy"
  | "id"
  | "is"
  | "it"
  | "ja"
  | "ka"
  | "ko"
  | "km"
  | "kz"
  | "lt"
  | "lv"
  | "mk"
  | "mn"
  | "ms"
  | "my"
  | "nl"
  | "nn"
  | "no"
  | "pa"
  | "pl"
  | "pt"
  | "ro"
  | "ru"
  | "si"
  | "sk"
  | "sl"
  | "sq"
  | "sr"
  | "sv"
  | "th"
  | "tr"
  | "uk"
  | "vn"
  | "zh"
  | "uz"
  | "uz_latn"
  | "zh_tw"

type Locale = {
  weekdays: {
    shorthand: [string, string, string, string, string, string, string]
    longhand: [string, string, string, string, string, string, string]
  }
  months: {
    shorthand: [string, string, string, string, string, string, string, string, string, string, string, string]
    longhand: [string, string, string, string, string, string, string, string, string, string, string, string]
  }
  daysInMonth: [number, number, number, number, number, number, number, number, number, number, number, number]
  firstDayOfWeek: number
  ordinal: (_nth: number) => string
  rangeSeparator: string
  weekAbbreviation: string
  scrollTitle: string
  toggleTitle: string
  amPM: [string, string]
  yearAriaLabel: string
  monthAriaLabel: string
  hourAriaLabel: string
  minuteAriaLabel: string
  time_24hr: boolean
}

/**
 * Custom locale configuration object.
 * Replaces flatpickr's CustomLocale type.
 */
export interface CustomLocale {
  ordinal?: Locale["ordinal"]
  daysInMonth?: Locale["daysInMonth"]
  firstDayOfWeek?: Locale["firstDayOfWeek"]
  rangeSeparator?: Locale["rangeSeparator"]
  weekAbbreviation?: Locale["weekAbbreviation"]
  toggleTitle?: Locale["toggleTitle"]
  scrollTitle?: Locale["scrollTitle"]
  yearAriaLabel?: string
  monthAriaLabel?: string
  hourAriaLabel?: string
  minuteAriaLabel?: string
  amPM?: Locale["amPM"]
  time_24hr?: Locale["time_24hr"]
  weekdays: {
    shorthand: [string, string, string, string, string, string, string]
    longhand: [string, string, string, string, string, string, string]
  }
  months: {
    shorthand: [string, string, string, string, string, string, string, string, string, string, string, string]
    longhand: [string, string, string, string, string, string, string, string, string, string, string, string]
  }
}

/**
 * Date change handler type.
 * Provides the same interface as flatpickr's onChange handlers but without flatpickr.Instance dependency.
 */
export type DateChangeHandler = (_dates?: Date[], _dateStr?: string) => void
