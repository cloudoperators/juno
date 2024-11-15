/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { produce } from "immer"
import constants from "../../components/shared/constants"

const createGlobalsSlice = (set, get, options) => ({
  globals: {
    embedded: options?.embedded === true || options?.embedded === "true", //Set to true if app is to be embedded in another existing app or page.
    apiEndpoint: options?.apiEndpoint, //The API endpoint to use for fetching data.
    isUrlStateSetup: false, //Set to true when the URL state has been set up.
    queryClientFnReady: false, //Set to true when the queryClient function is ready to be used.
    activeView: "Services", //Set to the active view.
    showPanel: constants.PANEL_NONE, //Set to the which panel should be shown (e.g service details panel, issue matches details panel and so on), if any.

    showServiceDetail: null,
    showIssueDetail: null,
    views: {
      Services: {
        queryOptions: {
          first: 20,
        },
      },
      IssueMatches: {
        queryOptions: {
          first: 20,
        },
      },
      Components: {
        queryOptions: {
          first: 20,
        },
      },
      ComponentInstancesOfService: {
        queryOptions: {
          first: 8,
        },
      },
    },

    actions: {
      setQueryClientFnReady: (readiness) =>
        set(
          produce((state) => {
            state.globals.queryClientFnReady = readiness
          }),
          false,
          "globals/setQueryClientFnReady"
        ),

      setQueryOptions: (viewName, options) =>
        set(
          produce((state) => {
            state.globals.views[viewName].queryOptions = options
          }),
          false,
          "globals/setQueryOptions"
        ),
      setEmbedded: (embedded) =>
        set((state) => ({ globals: { ...state.globals, embedded: embedded } }), false, "globals/setEmbedded"),
      setApiEndpoint: (apiEndpoint) =>
        set(
          (state) => ({
            globals: { ...state.globals, apiEndpoint: apiEndpoint },
          }),
          false,
          "globals/setApiEndpoint"
        ),
      setActiveView: (activeView) =>
        set(
          (state) => ({
            globals: { ...state.globals, activeView: activeView },
          }),
          false,
          "globals/setActiveView"
        ),
      setShowPanel: (panel) =>
        set(
          (state) => ({
            globals: { ...state.globals, showPanel: panel },
          }),
          false,
          "globals/setShowPanel"
        ),
      setShowServiceDetail: (serviceId) =>
        set(
          (state) => ({
            globals: { ...state.globals, showServiceDetail: serviceId },
          }),
          false,
          "globals/setShowServiceDetail"
        ),

      setShowIssueDetail: (issueName) =>
        set(
          (state) => ({
            globals: { ...state.globals, showIssueDetail: issueName },
          }),
          false,
          "globals/setShowIssueDetail"
        ),
      // Helper function to set the service detail for deep linking
      setServiceDetail: (serviceId) =>
        set(
          produce((state) => {
            state.globals.showPanel = constants.PANEL_SERVICE
            state.globals.showServiceDetail = serviceId
          }),
          false,
          "globals/setServiceDetail"
        ),

      // Helper function to set the issue detail for deep linking
      setIssueDetail: (issueId) =>
        set(
          produce((state) => {
            state.globals.showPanel = constants.PANEL_ISSUE
            state.globals.showIssueDetail = issueId
          }),
          false,
          "globals/setIssueDetail"
        ),

      // Sync details state with the URL
      syncDetailsWithURL: (serviceDetail, issueDetail, panelType) => {
        if (panelType === undefined || panelType === null) {
          return {
            [constants.DETAILS_FOR]: panelType,
            [constants.SERVICE_NAME]: undefined,
            [constants.ISSUE_ID]: undefined,
          }
        }
        const updatedState = {
          [constants.DETAILS_FOR]: panelType,
          // Include `iid` or `svn` immediately after `d:issue/service` in the URL
          [panelType === constants.PANEL_SERVICE ? constants.SERVICE_NAME : constants.ISSUE_ID]:
            panelType === constants.PANEL_SERVICE ? serviceDetail : issueDetail,
        }
        return updatedState
      },
    },
  },
})

export default createGlobalsSlice
