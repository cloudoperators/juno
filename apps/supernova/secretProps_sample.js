// when running in dev mode, rename this file to secretProps.js and add your config values

module.exports = {
  // This is the URL of the Alertmanager API, e.g. "https://myalertmanager.com/api/v2"
  endpoint: "",
  // These are the labels that are used to filter alerts in the UI, e.g. ["app", "severity", "status"]
  filterLabels: [],
  // These are the labels that are excluded by default from the silence matchers, e.g. ["pod", "pod_name", "instance"]
  silenceExcludedLabels: [],
  // choose "theme_light" or "theme_dark" (default)
  theme: "theme_dark",
  // predefined filters for more complex filter categories, see README.md for more information
  predefinedFilters: [],
  // silence templates, see README.md for more information
  silenceTemplates: [],
}