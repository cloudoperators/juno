/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */
import { createRouter, createHashHistory, createBrowserHistory } from "@tanstack/react-router"
import { routeTree } from "./routeTree.gen"

export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const getRouter = ({ enableHashedRouting }: { enableHashedRouting?: boolean }) =>
  createRouter({
    routeTree,
    history: enableHashedRouting ? createHashHistory() : createBrowserHistory(),
    context: {
      appProps: undefined!,
    },
  })
