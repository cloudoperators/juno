/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
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
    namespace: "",
    isMock: false,
    actions: {
      initialize: (endpoint, token, namespace, userGroup) =>
        set({ endpoint, namespace, token, currentTeam: userGroup }),
      setCurrentTeam: (team) => set({ currentTeam: team }),
      setTeamMemberships: (teamMemberships) => {
        let currentTeam = get().currentTeam
        if (currentTeam === "" || currentTeam === undefined || currentTeam === null) {
          currentTeam = teamMemberships?.[0]?.metadata?.name
        }
        set({ teamMemberships: teamMemberships, currentTeam })
      },
      setMock: (isMock) => set({ isMock: isMock }),
    },
  }))
