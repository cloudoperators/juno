/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Pagination } from "@cloudoperators/juno-ui-components"

interface PeaksPaginationControlsProps {
  currentPage: number
  setCurrentPage: (page: number) => void
  pages: number
}

const PeaksPaginationControls: React.FC<PeaksPaginationControlsProps> = ({ currentPage, setCurrentPage, pages }) => (
  <div className="flex justify-center py-4">
    <Pagination
      currentPage={currentPage}
      onPressNext={() => setCurrentPage(Math.min(currentPage + 1, pages))}
      onPressPrevious={() => setCurrentPage(Math.max(currentPage - 1, 1))}
      onSelectChange={(newPage) => setCurrentPage(newPage)}
      pages={pages}
      variant="input"
    />
  </div>
)

export default PeaksPaginationControls
