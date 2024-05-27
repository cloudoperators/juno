/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Stack, Message, Checkbox, CodeBlock } from "juno-ui-components"

const preClasses = `
whitespace-pre-wrap
bg-theme-background-lvl-2
p-4
mt-2
rounded
max-h-40
overflow-y-scroll
`
const codeClasses = `
w-full 
break-all
`

const NewCertificateResutls = ({ pk, ssoCert, onCopied }) => {
  return (
    <div>
      {pk && (
        <>
          <Message
            className="mb-6"
            text="Please make sure to copy the private key below used to create the SSO certificate and store it in a safe place, you won’t be able to see it again! This key was used to create the SSO certificate and it is not store anywhere!"
            variant="warning"
          />
          <CodeBlock heading="Private key" size="small">
            {pk}
          </CodeBlock>
        </>
      )}

      <div className="mt-8">
        <CodeBlock heading="SSO certificate" size="small">
          {ssoCert}
        </CodeBlock>
      </div>

      <Stack alignment="center" className="mt-8">
        <Checkbox
          onChange={(e) => {
            onCopied(e.target.checked)
          }}
          label={`I am sure I have copyed and stored the sso certificate ${
            pk ? "and the provided private key" : ""
          }`}
        />
      </Stack>
    </div>
  )
}

export default NewCertificateResutls
