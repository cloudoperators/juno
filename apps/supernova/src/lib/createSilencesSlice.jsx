/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

const initialSilencesState = {
  items: [],
  itemsHash: {},
  itemsByState: {},
  excludedLabels: [],
  updatedAt: null,
  status: "active",
  regEx: "",

  // silence templates for maintanance
  templates: [],
}

const validateExcludedLabels = (labels) => {
  if (!Array.isArray(labels) || !labels.some((element) => typeof element === "string")) {
    console.warn("[supernova]::validateExcludedLabels: labels object is not an array of strings")
    return initialSilencesState.excludedLabels
  }

  return labels
}

const validateTemplates = (templates) => {
  // check if the templates are an array
  if (!Array.isArray(templates)) {
    console.warn("[supernova]::validateTemplates: templates object is not an array")
    return [
      {
        id: "1",
        title: "Invalid template object",
        invalid: "Templates object is not an array",
      },
    ]
  }

  // check if every element in the array is an object
  if (!templates.every((element) => typeof element === "object")) {
    console.warn("[supernova]::validateTemplates: templates object is not an array of objects")
    return [
      {
        id: "1",
        title: "Invalid template object",
        invalid: "Templates object is not an array of objects",
      },
    ]
  }

  // check if every object
  return templates
    ?.map((template, index) => {
      // check if status is active
      if (template?.status === "active") {
        // check if title and discription is a string, fixed_labels is an object and editable_labels is an array of strings
        if (
          typeof template?.title !== "string" ||
          typeof template?.description !== "string" ||
          typeof template?.fixed_labels !== "object" ||
          !Array.isArray(template?.editable_labels) ||
          !template?.editable_labels.every((element) => typeof element === "string")
        ) {
          let brokenElement = "Following elements are not well formed: "

          ;(brokenElement += typeof template?.title !== "string" ? "title " : ""),
            (brokenElement += typeof template?.description !== "string" ? "description " : ""),
            (brokenElement += typeof template?.fixed_labels !== "object" ? "fixed_labels " : ""),
            (brokenElement += !Array.isArray(template?.editable_labels) ? "editable_labels " : "")
          return {
            id: "elem" + index,
            title: typeof template?.title === "string" ? template?.title : "Invalid template",
            invalid: brokenElement,
          }
        }
        // if all ok, return the template
        return {
          id: "elem" + index,
          title: template?.title,
          description: template?.description,
          fixed_labels: template?.fixed_labels || {},
          editable_labels: template?.editable_labels || [],
          invalid: false,
        }
      }
      // if status is not active, return null to filter it out
      return null
    })
    .filter((template) => template !== null)
}

const createSilencesSlice = (set, get, options) => ({
  silences: {
    ...initialSilencesState,

    // silence templates for maintanance
    templates: options?.silenceTemplates ? validateTemplates(options?.silenceTemplates) : [],
    excludedLabels: validateExcludedLabels(options?.silenceExcludedLabels),
    actions: {
      setSilencesStatus: (status) =>
        set(
          (state) => ({
            silences: { ...state.silences, status: status },
          }),
          false,
          "silences.setSilencesStatus"
        ),
      setSilencesRegEx: (regEx) =>
        set(
          (state) => ({
            silences: { ...state.silences, regEx: regEx },
          }),
          false,
          "silences.setSilencesRegEx"
        ),

      getSilenceById: (id) => {
        return get().silences.items.find((silence) => silence.id === id)
      },

      setSilences: ({ items, itemsHash, itemsByState }) => {
        if (!items) return

        set((state) => ({
          silences: {
            ...state.silences,
            items: items,
            itemsHash: itemsHash,
            itemsByState: itemsByState,
            updatedAt: Date.now(),
          },
        })),
          false,
          "silences.setSilencesData"
      },

      /* 
      Given an alert fingerprint, this function returns all silences referenced by silencingBy. It also 
      check if there are local silences with the same alert fingerprint and return them as well.
      */
      getMappingSilences: (alert) => {
        if (!alert) return
        const externalSilences = get().silences.itemsHash
        let silencedBy = alert?.status?.silencedBy || []

        // ensure silencedBy is an array
        if (!Array.isArray(silencedBy)) silencedBy = [silencedBy]
        let mappingSilences = []
        silencedBy.forEach((id) => {
          if (externalSilences[id]) {
            mappingSilences.push(externalSilences[id])
          }
        })
        return mappingSilences
      },
      /*
      Find all silences in itemsByState with key expired that matches all labels (key&value) from the alert but omit the labels that are excluded (excludedLabels)
      */
      getExpiredSilences: (alert) => {
        if (!alert) return
        const alertLabels = alert?.labels || {}
        const silences = get().silences.itemsByState?.expired || []
        const excludedLabels = get().silences.excludedLabels || []
        const enrichedLabels = get().alerts.enrichedLabels || []
        // combine the arrays containing the labels that shouldn't be used for matching into one for easier checking
        const labelsExcludedForMatching = [...excludedLabels, ...enrichedLabels]

        // find all expired silences that matches all labels from the alert excluding the excluded excludedLabels
        return silences.filter((silence) => {
          const silenceMatchers = silence?.matchers || []
          // check if all labels from the alert are included in the silence
          return Object.keys(alertLabels).every((label) => {
            // check if the label is excluded
            if (labelsExcludedForMatching.includes(label)) return true
            // check if the label is included in the silence
            return silenceMatchers.some(
              (silenceLabel) => silenceLabel?.name === label && silenceLabel?.value === alertLabels?.[label]
            )
          })
        })
      },

      /*
      Find all silences (also expired ones) in items that matches all labels (key&value) from the alert but omit the labels that are excluded (excludedLabels)
      */
      getSilencesForAlert: (alert) => {
        if (!alert) return

        const alertLabels = alert?.labels || {}

        // collect all silences
        let silences = [...get().silences.items]

        // collect all excluded Labels
        const excludedLabels = get().silences.excludedLabels || []
        const enrichedLabels = get().alerts.enrichedLabels || []
        // combine the arrays containing the labels that shouldn't be used for matching into one for easier checking
        const labelsExcludedForMatching = [...excludedLabels, ...enrichedLabels]

        console.log(labelsExcludedForMatching, "sdf")
        console.log(silences, "sdf")

        // Find all silences where all silence.labels are a subset of alerts.labels (excluding the excluded excludedLabels)
        return silences.filter((silence) => {
          const silenceMatchers = silence?.matchers || []

          // Check if all non-excluded labels from the silence are included in the alert
          return silenceMatchers.every((silenceLabel) => {
            if (labelsExcludedForMatching.includes(silenceLabel.name)) return true
            const alertLabelValue = alertLabels[silenceLabel.name]

            // If the label is not a regex, check if the values are equal
            if (!silenceLabel.isRegex) {
              return silenceLabel.value === alertLabelValue
            }

            // SilenceLabel.isRegex is true so we need to check if the alertLabelValue matches the regex
            const regex = new RegExp(silenceLabel.value)
            return regex.test(alertLabelValue)
          })
        })
      },
      /*
        Returns the silence (including the local ones) with the latest expiration time for an alert. Useful to display when the alert will be active again.
      */
      getLatestMappingSilence: (alert) => {
        if (!alert) return
        const silences = get().silences.actions.getMappingSilences(alert)
        if (!silences?.length) return
        // return the latest expired silence
        return silences.reduce((prev, current) => (prev.endsAt > current.endsAt ? prev : current))
      },
    },
  },
})

export default createSilencesSlice
