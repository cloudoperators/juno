/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Internal type mappers to convert between DateTimePicker public types and flatpickr types.
 * This file is NOT exported in index.ts - it's used only internally within DateTimePicker.
 *
 * These mappers provide a boundary between our public API (DateTimePicker types) and
 * the internal implementation (flatpickr types), preventing type leakage.
 */

import { DateOption as FlatpickrDateOption, DateLimit as FlatpickrDateLimit } from "flatpickr/dist/types/options"
import { key as FlatpickrLocaleKey, CustomLocale as FlatpickrCustomLocale } from "flatpickr/dist/types/locale"
import type { DateOption, DateLimit, LocaleKey, CustomLocale } from "./DateTimePicker.types"

/**
 * Maps public DateTimePicker date option to flatpickr DateOption.
 * Both types are structurally identical (string | Date | number),
 * but TypeScript treats them as distinct types.
 */
export function mapDateOption(date: DateOption): FlatpickrDateOption {
  return date as unknown as FlatpickrDateOption
}

/**
 * Maps public DateTimePicker date limit to flatpickr DateLimit.
 * Handles simple dates, date ranges, and filter functions.
 */
export function mapDateLimit(limit: DateLimit): FlatpickrDateLimit<FlatpickrDateOption> {
  // If it's a function, map it directly
  if (typeof limit === "function") {
    return limit as unknown as FlatpickrDateLimit<FlatpickrDateOption>
  }

  // If it's a date range object { from, to }
  if (typeof limit === "object" && limit !== null && !(limit instanceof Date)) {
    if ("from" in limit && "to" in limit) {
      return {
        from: mapDateOption(limit.from),
        to: mapDateOption(limit.to),
      } as FlatpickrDateLimit<FlatpickrDateOption>
    }
  }

  // Otherwise it's a simple date option
  return mapDateOption(limit as DateOption) as unknown as FlatpickrDateLimit<FlatpickrDateOption>
}

/**
 * Maps array of public DateTimePicker date limits to flatpickr DateLimit array.
 */
export function mapDateLimits(limits: DateLimit[]): FlatpickrDateLimit<FlatpickrDateOption>[] {
  return limits.map(mapDateLimit)
}

/**
 * Maps public DateTimePicker locale to flatpickr locale.
 * Handles both locale key strings and custom locale objects.
 */
export function mapLocale(
  locale: LocaleKey | Partial<CustomLocale>
): FlatpickrLocaleKey | Partial<FlatpickrCustomLocale> {
  // If it's a string locale key, map directly
  if (typeof locale === "string") {
    return locale as unknown as FlatpickrLocaleKey
  }

  // If it's a custom locale object, map it
  // Since both types are structurally compatible, we can safely cast
  return locale as unknown as Partial<FlatpickrCustomLocale>
}
