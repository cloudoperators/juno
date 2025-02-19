/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

export const DEFAULT_DURATION_OPTIONS = [
  { label: "2 hours", value: "2" },
  { label: "12 hours", value: "12" },
  { label: "1 day", value: "24" },
  { label: "3 days", value: "72" },
  { label: "7 days", value: "168" },
]

// get the "latest" expiration date from the given silences
export const latestExpirationDate = (silences: any) => {
  if (silences?.length > 0) {
    const sortedSilences = silences.sort((a: any, b: any) => {
      // @ts-expect-error TS(2362) FIXME: The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
      return new Date(b.endsAt) - new Date(a.endsAt)
    })
    return sortedSilences[0].endsAt
  }
}

// returns options for duration select dropdown. Options with which exceeds the expiration date are marked as "covered"
// return also the first option which is not covered by the expiration date
export const getSelectOptions = (expirationDate: any) => {
  if (!expirationDate) return { items: DEFAULT_DURATION_OPTIONS }
  const now = new Date()
  const expiration = new Date(expirationDate)
  // @ts-expect-error TS(2362) FIXME: The left-hand side of an arithmetic operation must... Remove this comment to see the full error message
  const diff = expiration - now
  const diffInHours = diff / (1000 * 60 * 60)
  const options = DEFAULT_DURATION_OPTIONS.map((o) => {
    // @ts-expect-error TS(2365) FIXME: Operator '<=' cannot be applied to types 'string' ... Remove this comment to see the full error message
    if (o.value <= diffInHours) {
      return {
        ...o,
        label: o.label + " (covered with the existing silence)",
        covered: true,
      }
    }
    return o
  })
  // find the first option which is not covered by the expiration date
  const firstNotCovered = options.find((o: any) => !o?.covered)

  return { items: options, firstNotCovered }
}

// Setup the matchers for the silence removing the excluded labels
// These excluded labels are those that not included by default when generating a silence configuration.
// The enrichedLabels are those that are added by the worker just for UI purposes when the alert is received.
export const setupMatchers = (alertLabels: any, excludedLabels = [], enrichedLabels = []) => {
  if (!alertLabels || !excludedLabels) return
  let items: any = []

  Object.keys(alertLabels).forEach((label) => {
    const value = alertLabels?.[label]
    if (value) {
      const matcher = {
        name: label,
        value: value,
        isRegex: false, // for now hardcode isRegex to false since we take the exact value
        excluded: false,
        configurable: false,
      }
      // @ts-expect-error TS(2550) FIXME: Property 'includes' does not exist on type 'never[... Remove this comment to see the full error message
      if (enrichedLabels.includes(label)) {
        // do not add enriched labels, skip
        // @ts-expect-error TS(2550) FIXME: Property 'includes' does not exist on type 'never[... Remove this comment to see the full error message
      } else if (excludedLabels.includes(label)) {
        // mark excluded label
        items.push({ ...matcher, excluded: true, configurable: true })
      } else {
        items.push(matcher)
      }
    }
  })
  return items
}
