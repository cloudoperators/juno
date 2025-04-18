/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { produce } from "immer"
import constants from "../../components/shared/constants"
// @ts-ignore
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
      setQueryClientFnReady: (readiness: any) =>
        set(
          produce((state: any) => {
            state.globals.queryClientFnReady = readiness
          }),
          false,
          "globals/setQueryClientFnReady"
        ),

      setQueryOptions: (viewName: any, options: any) =>
        set(
          produce((state: any) => {
            state.globals.views[viewName].queryOptions = {
              ...state.globals.views[viewName].queryOptions,
              ...options,
            }
          }),
          false,
          "globals/setQueryOptions"
        ),
      setEmbedded: (embedded: any) =>
        set(
          (state: any) => ({
            globals: { ...state.globals, embedded: embedded },
          }),
          false,
          "globals/setEmbedded"
        ),
      setApiEndpoint: (apiEndpoint: any) =>
        set(
          (state: any) => ({
            globals: { ...state.globals, apiEndpoint: apiEndpoint },
          }),
          false,
          "globals/setApiEndpoint"
        ),
      setActiveView: (activeView: any) =>
        set(
          (state: any) => ({
            globals: { ...state.globals, activeView: activeView },
          }),
          false,
          "globals/setActiveView"
        ),
      setShowPanel: (panel: any) =>
        set(
          (state: any) => ({
            globals: { ...state.globals, showPanel: panel },
          }),
          false,
          "globals/setShowPanel"
        ),
      setShowServiceDetail: (serviceId: any) =>
        set(
          (state: any) => ({
            globals: { ...state.globals, showServiceDetail: serviceId },
          }),
          false,
          "globals/setShowServiceDetail"
        ),

      setShowIssueDetail: (issueName: any) =>
        set(
          (state: any) => ({
            globals: { ...state.globals, showIssueDetail: issueName },
          }),
          false,
          "globals/setShowIssueDetail"
        ),
      // Helper function to set the service detail for deep linking
      setServiceDetail: (serviceId: any) =>
        set(
          produce((state: any) => {
            state.globals.showPanel = constants.PANEL_SERVICE
            state.globals.showServiceDetail = serviceId
          }),
          false,
          "globals/setServiceDetail"
        ),

      // Helper function to set the issue detail for deep linking
      setIssueDetail: (issueId: any) =>
        set(
          produce((state: any) => {
            state.globals.showPanel = constants.PANEL_ISSUE
            state.globals.showIssueDetail = issueId
          }),
          false,
          "globals/setIssueDetail"
        ),

      // Sync details state with the URL
      syncDetailsWithURL: (serviceDetail: any, issueDetail: any, panelType: any) => {
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
