/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Greenhouse contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"

import { renderHook, act } from "@testing-library/react"
import StoreProvider, { usePluginActions, usePluginConfig } from "../../components/StoreProvider"

describe("createPluginSlice", () => {
  describe("setPluginConfig", () => {
    it("test if pluginConfig are saved sorted correctly", () => {
      const wrapper = ({ children }: any) => <StoreProvider>{children}</StoreProvider>
      const store = renderHook(
        () => ({
          pluginActions: usePluginActions(),
          pluginConfig: usePluginConfig(),
        }),
        { wrapper }
      )

      act(() => {
        store.result.current.pluginActions.setPluginConfig([
          {
            spec: { displayName: "onePlugin", disabled: false },
          },
          { spec: { displayName: "alert", disabled: false } },
          { spec: { displayName: "example app", disabled: true } },
        ])
      })

      expect(store.result.current.pluginConfig).toEqual([
        { spec: { displayName: "alert", disabled: false } },
        { spec: { displayName: "onePlugin", disabled: false } },
        { spec: { displayName: "example app", disabled: true } },
      ])
    })
    it("test if pluginConfig is saved correctly without disabled field", () => {
      const wrapper = ({ children }: any) => <StoreProvider>{children}</StoreProvider>
      const store = renderHook(
        () => ({
          pluginActions: usePluginActions(),
          pluginConfig: usePluginConfig(),
        }),
        { wrapper }
      )

      act(() => {
        store.result.current.pluginActions.setPluginConfig([
          { spec: { displayName: "onePlugin", disabled: false } },
          { spec: { displayName: "alert" } },
          { spec: { displayName: "example app", disabled: true } },
        ])
      })

      expect(store.result.current.pluginConfig).toEqual([
        { spec: { displayName: "alert" } },
        { spec: { displayName: "onePlugin", disabled: false } },
        { spec: { displayName: "example app", disabled: true } },
      ])
    })
  })
})
