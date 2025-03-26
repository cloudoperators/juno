/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InitialFilters } from "../../App"
import { ServiceType } from "../../components/Services/Services"

export enum UserView {
  Services = "services",
  Issues = "issues",
  ServiceDetails = "service_details",
}

export enum ActionType {
  SelectView = "select_view",
  SelectServiceComponent = "select_service_component",
}

export type ServiceDetailViewParams = {
  service?: ServiceType
  imageVersion?: string
}

export type UserViewParams = ServiceDetailViewParams // | ParamsForOtherViews

export type SelectUserViewActionPayload = {
  viewId: UserView
  params?: UserViewParams
}

export type SelectUserViewAction = {
  type: ActionType.SelectView
  payload: SelectUserViewActionPayload
}

export type Action = SelectUserViewAction

export type State = {
  selectedView: SelectUserViewActionPayload
  initialFilters?: InitialFilters
}
