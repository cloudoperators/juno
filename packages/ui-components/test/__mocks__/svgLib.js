/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

// Mock idea from here: https://github.com/gregberge/svgr/issues/83#issuecomment-575038115

import React from "react"

const SvgrMock = React.forwardRef((props, ref) => <span ref={ref} {...props} />)

export const ReactComponent = SvgrMock
SvgrMock.displayName = "mock"
export default SvgrMock
