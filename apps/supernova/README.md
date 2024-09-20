## Supernova

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
[![Built with Juno](https://cloudoperators.github.io/juno/built-with-juno.svg)](https://github.com/cloudoperators/juno)

Supernova is an enhanced UI for Prometheus Alertmanager.

![supernova_alerts](https://github.com/user-attachments/assets/5e3b4272-d12a-4524-9c6e-669d1dd32ffb)

Supernova offers several quality-of-life improvements:

- Predefined filter categories for quick, one-click filtering of the alerts list using label and regex combinations.
- Configurable labels for flexible alert filtering.
- Convenient silencing of alerts directly from the alerts list.
- Display of both active and expired silences for any given alert, with the ability to recreate expired silences or expire active ones.
- Aggregation and count of alerts by region and severity.
- Automatic hyperlinking for URLs found in alert descriptions.
- Parsing of alert labels to identify paths to external tools and turning them into hyperlinks on the alert.
- Notification when creating new silences that overlap with existing ones.
- Micro frontend design that allows embedding into existing applications via a script tag.

**Coming soon:**

- Configurable initial filters to automatically apply at app startup.
- Aggregation by customizable labels, replacing the current hardcoded region label.
- Configurable URL patterns for automatic linking in labels (replacing the current hardcoded patterns).

## Screenshots

Alert detail:
![supernova_alerts_details](https://github.com/user-attachments/assets/232059cd-61e6-4140-8d07-775c5145caaf)

Silence information per alert:

![supernova_alerts_details_silences](https://github.com/user-attachments/assets/33e192dd-759b-441c-8fd2-2b94164d7b74)

## Getting Started

### Docker image

We publish a self-hostable docker image [in our registry](https://github.com/cloudoperators/juno/pkgs/container/juno-app-supernova). The README for it can be found [here in the docker folder](https://github.com/cloudoperators/juno/tree/main/apps/supernova/docker)

### Dev mode

To start Supernova in dev mode, make a copy of the included `secretProps_sample.js` file, rename it `secretProps.js` and enter your configuration options (see below). Then:

```shell
npm i
npm run dev
```

## Concepts

### Alerts

Alerting rules offer the capability to define alert conditions using expressions in the Prometheus expression language. These rules enable you to specify conditions that trigger alerts, and subsequently send notifications regarding the firing alerts to an external service. Whenever the alert expression results in one or more vector elements at a given point in time, the alert counts as active for these elements `label sets`.

#### Labels

The labels clause allows specifying a set of additional labels to be attached to the alert. They look something like the below:

```js
{
  ...
  "labels": {
    "alertname": "PodOOMKilled",
    "cluster": "eu-de-2",
    "cluster_type": "metal",
    "context": "memory",
    "meta": "Pod kube-system/kube-system-metal-owner-label-injector-28150200-2vgk5 OOMKilled",
    "namespace": "kube-system",
    "no_alert_on_absence": "true",
    "playbook": "docs/support/playbook/kubernetes/k8s_pod_oomkilled",
    "pod_name": "kube-system-metal-owner-label-injector-28150200-2vgk5",
    "prometheus": "kube-monitoring/kubernetes",
    "region": "eu-de-2",
    "service": "resources",
    "severity": "info",
    "tier": "k8s",
    "status": "active"
  }
  ...
}
```

### Silences

Silences are a straightforward way to simply mute alerts for a given time. A silence is configured based on matchers. Incoming alerts are checked whether they match all the equality matchers of an active silence. If they do, no notifications will be sent out for that alert.

#### Matchers

A matcher is a string with a syntax inspired by PromQL and OpenMetrics. Matchers are ANDed together, meaning that all matchers must evaluate to "true" when tested against the labels on a given alert.

When utilizing Supernova to add a silence, the matchers will be preselected based on the alert you selected. Moreover, through the advanced section, you have the option to include additional labels that are excluded by default. These exclusions are dependent on the configured excluded labels, which will be explained in detail in the section below.

Given an alert with following labels:

```js
{
  ...
  fingerprint: "alert123",
  labels: {
    severity: "critical",
    service: "automation",
  }
  ...
}
```

In order to prevent the alert from continuing to trigger, we require a silence that includes the following matchers:

```js
{
  ...
  id: "silence123",
  matchers: [
    { name: "severity", value: "critical" },
    { name: "service", value: "automation" },
  ],
  ...
}
```

## Configuration

When running Supernova in dev mode the configuration is pulled from a `secretProps.js` file (see sample `secretProps.sample.js`). When loading the app via script tag the configuration can be passed via attribute on the script tag. For configuration when running the image built with docker see the `README.md` in the `/docker` folder.

### Endpoint

Sets the Alertmanager API Endpoint URL. Provide the full URL of the Alertmanager API endpoint to which the application will connect.

To set the endpoint:

- Configured via app prop `endpoint`, which is used during the setup of the script tag.

Example:

```json
"https://myalertmanager.com/api/v2"
```

### Filter labels

Filter labels are a set of labels that are utilized to define the criteria by which alerts will be filtered, if those labels exist within the fetched alerts. These filter labels enable you to selectively narrow down the alerts based on specific label values, resulting in a more targeted and refined alert filtering process.

To set the filter labels which are made available for filtering:

- Configured via the app prop `filterLabels`

Example value:

```json
["severity", "region", "app", "namespace"]
```

### Silence excluded alert labels

Excluded labels are a collection of labels that are automatically excluded by default when configuring silence matchers. These labels, such as `pod`, `pod_name` or `instance`, often undergo frequent value changes, causing new alerts to be triggered that are not covered by the existing silence.

Consider the following example: an alert is triggered when a pod runs out of memory and gets killed `Out Of Memory killed`. When this pod is recreated, it receives a different name. If the pod runs again out of memory because of the same issue, a new alarm will be triggered, but it won't be covered if we had used the `pod_name` as a matcher in the silence configuration.

PodOOMKilled alarm labels example:

```js
{
  "alertname": "PodOOMKilled",
  "cluster": "eu-de-1",
  "cluster_type": "metal",
  "context": "memory",
  "meta": "Pod keppel/keppel-janitor-6dc777bcbf-5xrns OOMKilled",
  "namespace": "keppel",
  "no_alert_on_absence": "true",
  "playbook": "docs/support/playbook/kubernetes/k8s_pod_oomkilled",
  "pod_name": "keppel-janitor-6dc777bcbf-5xrns",
  "prometheus": "kube-monitoring/kubernetes",
  "region": "eu-de-1",
  "service": "resources",
  "severity": "info",
  "tier": "k8s",
  "status": "active"
}
```

If the end user wishes to include any excluded labels as matchers, they can easily do so by expanding the advanced section during the silence creation process. This allows for greater flexibility and customization when configuring the silence matchers.

To set the excluded alert labels:

- Configured via app prop `silenceExcludedLabels`

Example:

```json
["pod", "pod_name", "instance"]
```

### Theme

Set this attribute to specify a custom theme for your application. Possible values are `"theme-light"` or `"theme-dark"` (default)

To set the theme:

- Configured via app prop `theme`

### Predefined Filters

PredefinedFilters are groups of filters comprised of a list of filter labels and a regex that is used to filter on the values of that label. They can be thought of as filter categories where the filter logic can be more complex than simple label+values pairs. Predefined filters are defined as an array of objects, where each object is a predefined filter which contains the display name for the UI as well as a list of filter label + value regex pairs which are AND concatenated when they are being evaluated.

Example:

```json
[
  {
    "name": "prod",
    "displayName": "Prod",
    "matchers": {
      "region": "^prod-.*"
    }
  }
]
```

To set the predefined Filter:

- Configured via app prop `predefinedFilters`

### Initial FIlters

InitialFilters are the filters that are applied when the app is loaded. The filters must be an object where the key is the label and the value are the values to filter on.

Example:

```json
{ "cluster": ["prod-1", "prod-2"], "status": ["critical"] }
```

To set the inital Filters:

- Configured via app prop `initialFilters`

### Silence Templates

Defines pre-configured silences available in the schedule silence modal for scheduling future silences. For example when setting up maintenance windows where it is known that certain alerts will fire. The format consists of a list of objects including description, editable_labels (array of strings specifying the labels that users can modify), fixed_labels (map containing fixed labels and their corresponding values), status, and title.

Example:

```json
"silenceTemplates": [
    {
      "description": "Description of the silence template",
      "editable_labels": ["region"],
      "fixed_labels": {
        "name": "Marvin",
      },
      "status": "active",
      "title": "Silence"
    }
  ]
```

To set the silence templates:

- Configured via app prop `silenceTemplates`, which is used during the setup of the script tag.
