/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createStore } from "zustand"

// global zustand store. See how this works here: https://github.com/pmndrs/zustand
export default () =>
  createStore((set, get) => ({
    endpoint: "",
    namespace: "",
    token: "",
    currentTeam: "",
    defaultTeam: "",
    teamMemberships: [],
    // @ts-expect-error TS(1117): An object literal cannot have multiple properties ... Remove this comment to see the full error message
    namespace: "",

    actions: {
      initialize: (endpoint: any, token: any, namespace: any, userGroup: any) =>
        set({ endpoint, namespace, token, currentTeam: userGroup }),
      setCurrentTeam: (team: any) => set({ currentTeam: team }),
      setTeamMemberships: (teamMemberships: any) => {
        // @ts-ignore
        let currentTeam = get().currentTeam
        if (currentTeam === "" || currentTeam === undefined || currentTeam === null) {
          currentTeam = teamMemberships?.[0]?.metadata?.name
        }
        set({ teamMemberships: teamMemberships, currentTeam })
      },
    },
  }))
