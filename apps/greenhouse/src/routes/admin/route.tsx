/*
 * SPDX-FileCopyrightText: 2025 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { createFileRoute } from "@tanstack/react-router"
import { Layout } from "../../components/admin/Layout"

export const Route = createFileRoute("/admin")({
  component: Layout,
  errorComponent: Layout,
})
