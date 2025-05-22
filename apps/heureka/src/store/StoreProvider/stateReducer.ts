/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Action, ActionType, State, UserView } from "./types"

/*
 * draft is a mutable copy of the current state which guarantees that our reducer is pure
 * and doesn't mutate the state directly
 */
export const servicesReducer = (draft: State, action: Action) => {
  switch (action.type) {
    case ActionType.SelectView: {
      draft.selectedView = {
        viewId: action.payload?.viewId,
        params: action.payload.params,
      }
      return
    }
    case ActionType.SelectImageVersion: {
      draft.selectedView = {
        viewId: UserView.ServiceDetails,
        params: action.payload,
      }
      return
    }
    default: {
      throw Error("Unknown action")
    }
  }
}
