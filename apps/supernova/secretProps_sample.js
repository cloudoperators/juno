// when running in dev mode, rename this file to secretProps.js and add your config values

module.exports = {
  // This is the URL of the Alertmanager API, e.g. "https://myalertmanager.com/api/v2"
  endpoint: "",
  // These are the labels that are used to filter alerts in the UI, e.g. ["app", "severity", "status"]
  filterLabels: [],
  // initial filters that are applied when the app is loaded, see README.md for more information
  initialFilters: [],
  // predefined filters for more complex filter categories, see README.md for more information
  predefinedFilters: {},
  // These are the labels that are excluded by default from the silence matchers, e.g. ["pod", "pod_name", "instance"]
  silenceExcludedLabels: [],
  // silence templates, see README.md for more information
  silenceTemplates: [],
  // choose "theme_light" or "theme_dark" (default)
  theme: "theme_dark",
  // Object containing the user information
  user: {
    fullName: "Jane Doe",
  },
}
