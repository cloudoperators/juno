/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// TO DO: Remove constants for easier searching in app
// If kept, rename to be more explanatory e.g. keys, labels etc.

export const APP_NAME = "Juno UI Peaks Monitoring Dashboard"

export const Pages = {
  PEAKS: "Peaks",
  COUNTRIES: "Countries",
  ALERTS: "Alerts",
}

export const Panels = {
  EDIT_PEAKS: "EditPeaks",
  SHOW_PEAK: "ShowPeak",
}

export type ViewType = "grid" | "card" | "json"

export const Views = {
  GRID: "grid",
  CARD: "card",
  JSON: "json",
} as const

export const TooltipExplanation = {
  SAFETY_STATUS:
    "The safety indicator reflects climbing suitability based on height. Safe: < 6000m, Caution: 6000-7000m, Unsafe: > 8000m",
  HEIGHT: "Measured from sea level to peak.",
  PROMINENCE: "The vertical distance between the peak and the lowest contour line encircling it but no higher peak.",
  COORDINATES: "Geographical coordinates of the peak.",
  CLIMATE: "Climate type of the region where the peak is located.",
  LOCAL_FAUNA: "Animals native to the area surrounding the peak.",
  GEO_ORIGIN: "How the geological structure of the peak was formed.",
}

export const PeakFields = {
  SAFETY: "Safety",
  NAME: "Name",
  HEIGHT: "Height",
  RANGE: "Main Range",
  REGION: "Region",
  COUNTRY: "Country",
  ACTIONS: "Actions",
  URL: "URL",
}

export const PeakMetrics = {
  TOTAL: "Total Peaks",
  HIGHEST: "Highest Peak",
  LOWEST: "Lowest Peak",
  TOTAL_COUNTRIES: "Total Countries",
}

export const FormLabels = {
  INVALID_PEAK: "Invalid peak data. Please correct the name field and try again.",
  CREATION_FAILURE: "Failed to add a new peak. This is a simulation.",
  MANDATORY_FIELD_SYMBOL: "Mandatory fields are marked with a blue circle.",
}

export const ModalLabels = {
  CANCEL: "Cancel",
  SAVE: "Save",
}

export const DEFAULT_SMALL_APP_MARGIN = "2"
export const DEFAULT_MEDIUM_APP_MARGIN = "5"
