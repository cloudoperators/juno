import { CodegenConfig } from "@graphql-codegen/cli"
import * as dotenv from "dotenv"

// Load environment variables from .env file
dotenv.config()
const schemaUrl = ""

const config: CodegenConfig = {
  schema: schemaUrl,
  documents: "src/**/*.graphql",

  generates: {
    "src/generated/graphql.tsx": {
      plugins: ["typescript", "typescript-operations", "typescript-react-apollo"],
      config: {
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
  },
}

export default config
