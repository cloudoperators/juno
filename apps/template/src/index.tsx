/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { createRoot } from "react-dom/client"
import "tailwindcss/tailwind.css"
import App from "./App"

const container = document.getElementById("root") as HTMLDivElement
const root = createRoot(container)

root.render(<App />)
