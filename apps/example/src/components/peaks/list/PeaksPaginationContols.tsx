/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Pagination } from "@cloudoperators/juno-ui-components"

const PeaksPaginationControls = ({ currentPage, setCurrentPage, pages }) => (
  <div style={{ display: "flex", justifyContent: "center", padding: "1rem 0" }}>
    <Pagination
      currentPage={currentPage}
      onPressNext={() => setCurrentPage((prevPage) => Math.min(prevPage + 1, pages))}
      onPressPrevious={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
      onSelectChange={(newPage) => setCurrentPage(newPage)}
      pages={pages}
      variant="number"
    />
  </div>
)

export default PeaksPaginationControls
