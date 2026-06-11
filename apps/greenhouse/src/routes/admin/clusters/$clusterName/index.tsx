/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createFileRoute } from "@tanstack/react-router"
import { ClusterDetail } from "../../../../components/admin/ClusterDetail"

export const Route = createFileRoute("/admin/clusters/$clusterName/")({
  component: ClusterDetail,
})
