/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InitialFilters } from "../../App"
import { ServiceType } from "../../components/Services"
import { ServiceImageVersion } from "../../components/Services/utils"

export enum UserView {
  Services = "services",
  ServiceDetails = "service_details",
}

export enum ActionType {
  SelectView = "select_view",
  SelectServiceComponent = "select_service_component",
  SelectImageVersion = "select_image_version",
}

export type ServiceDetailViewParams = {
  service: ServiceType
  imageVersion?: ServiceImageVersion
}

export type UserViewParams = ServiceDetailViewParams // | ParamsForOtherViews

export type SelectUserViewActionPayload = {
  viewId: UserView
  params?: UserViewParams
}

export type SelectServiceDetailsPayload = Required<SelectUserViewActionPayload>

export type SelectUserViewAction = {
  type: ActionType.SelectView
  payload: SelectServiceDetailsPayload | SelectUserViewActionPayload
}

export type SelectImageVersionAction = {
  type: ActionType.SelectImageVersion
  payload: ServiceDetailViewParams & {
    showPanel?: boolean
  }
}

export type Action = SelectUserViewAction | SelectImageVersionAction

export type State = {
  selectedView: SelectServiceDetailsPayload | SelectUserViewActionPayload
  initialFilters?: InitialFilters
}
