/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Pagination } from "@cloudoperators/juno-ui-components"

interface PeaksPaginationControlsProps {
  currentPage: number
  // eslint-disable-next-line no-unused-vars
  setCurrentPage: (page: number) => void
  pages: number
}

const PeaksPaginationControls: React.FC<PeaksPaginationControlsProps> = ({ currentPage, setCurrentPage, pages }) => (
  <div style={{ display: "flex", justifyContent: "center", padding: "1rem 0" }}>
    <Pagination
      currentPage={currentPage}
      onPressNext={() => setCurrentPage(Math.min(currentPage + 1, pages))}
      onPressPrevious={() => setCurrentPage(Math.max(currentPage - 1, 1))}
      onSelectChange={(newPage) => setCurrentPage(newPage)}
      pages={pages}
      variant="number"
    />
  </div>
)

export default PeaksPaginationControls
