/*
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { render, screen } from "@testing-library/react"
import AlertLinks from "./AlertLinks"

describe("AlertLinks", () => {
  describe("Perses regional dashboard link", () => {
    it("renders when both persesDashboard and region labels are present", () => {
      const alert = {
        labels: {
          persesDashboard: "observability/dashboards/blackbox-overview",
          region: "region-1",
        },
      }
      render(<AlertLinks alert={alert} />)
      const link = screen.getByText("Perses")
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute(
        "href",
        "https://perses.region-1.cloud.sap/projects/observability/dashboards/blackbox-overview"
      )
      expect(link).toHaveAttribute("target", "_blank")
      expect(link).toHaveAttribute("rel", "noopener noreferrer")
    })

    it("does not render when persesDashboard is present but region is missing", () => {
      const alert = {
        labels: {
          persesDashboard: "observability/dashboards/blackbox-overview",
        },
      }
      render(<AlertLinks alert={alert} />)
      expect(screen.queryByText("Perses")).not.toBeInTheDocument()
    })

    it("does not render when region is present but persesDashboard is missing", () => {
      const alert = {
        labels: {
          region: "region-1",
        },
      }
      render(<AlertLinks alert={alert} />)
      expect(screen.queryByText("Perses")).not.toBeInTheDocument()
    })
  })

  describe("Perses Global dashboard link", () => {
    it("renders when persesGlobalDashboard label is present", () => {
      const alert = {
        labels: {
          persesGlobalDashboard: "observability/dashboards/global-sci-logs",
        },
      }
      render(<AlertLinks alert={alert} />)
      const link = screen.getByText("Perses Global")
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute(
        "href",
        "https://perses.global.cloud.sap/projects/observability/dashboards/global-sci-logs"
      )
      expect(link).toHaveAttribute("target", "_blank")
      expect(link).toHaveAttribute("rel", "noopener noreferrer")
    })

    it("does not render when persesGlobalDashboard label is missing", () => {
      const alert = {
        labels: {},
      }
      render(<AlertLinks alert={alert} />)
      expect(screen.queryByText("Perses Global")).not.toBeInTheDocument()
    })
  })

  describe("both Perses links together", () => {
    it("renders both links when both labels are present", () => {
      const alert = {
        labels: {
          persesDashboard: "compute/dashboards/nova-health",
          persesGlobalDashboard: "observability/dashboards/global-sci-logs",
          region: "region-1",
        },
      }
      render(<AlertLinks alert={alert} />)
      const regionalLink = screen.getByText("Perses")
      const globalLink = screen.getByText("Perses Global")
      expect(regionalLink).toBeInTheDocument()
      expect(regionalLink).toHaveAttribute(
        "href",
        "https://perses.region-1.cloud.sap/projects/compute/dashboards/nova-health"
      )
      expect(globalLink).toBeInTheDocument()
      expect(globalLink).toHaveAttribute(
        "href",
        "https://perses.global.cloud.sap/projects/observability/dashboards/global-sci-logs"
      )
    })
  })
})
