/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// TO DO: Remove constants for easier searching in app
// If kept, rename to be more explanatory e.g. keys, labels etc.

export const Pages = {
  PEAKS: "Peaks",
  COUNTRIES: "Countries",
  ALERTS: "Alerts",
}

export const Panels = {
  EDIT_PEAKS: "EditPeaks",
  ADD_PEAKS: "AddPeaks",
}

export const Views = {
  GRID: "grid",
  CARD: "card",
  JSON: "json",
}

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
