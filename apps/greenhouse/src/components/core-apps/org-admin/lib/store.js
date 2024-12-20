/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createStore } from "zustand"

export default () =>
  createStore((set) => ({
    active: "",
    actions: {
      setActive: (active) => set({ active }),
    },
  }))
