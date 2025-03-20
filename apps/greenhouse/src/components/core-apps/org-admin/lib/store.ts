/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createStore } from "zustand"

export default () =>
  createStore((set: any) => ({
    active: "",

    actions: {
      setActive: (active: any) => set({ active }),
    },
  }))
