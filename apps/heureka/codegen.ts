/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CodegenConfig } from "@graphql-codegen/cli"
//@ts-ignore
import * as dotenv from "dotenv"

// Load environment variables from .env file
dotenv.config()

const config: CodegenConfig = {
  schema: process.env.API_ENDPOINT,
  documents: "src/**/*.graphql",

  generates: {
    "src/generated/graphql.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-react-apollo"],
      config: {
        withHooks: false,
        withHOC: false,
        withComponent: false,
      },
    },
  },
}

export default config
