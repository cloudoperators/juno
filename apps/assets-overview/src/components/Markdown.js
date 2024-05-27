/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react"
import { Stack, Spinner } from "juno-ui-components"
import { useQuery } from "@tanstack/react-query"
import { fetchMarkdown } from "../actions"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { useActions } from "messages-provider"
import { parseError } from "../helpers"

const Markdown = ({ path }) => {
  const { addMessage } = useActions()

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["markdown", path],
    queryFn: fetchMarkdown,
    enabled: !!path,
    staleTime: Infinity,
  })

  // if error send error to the message store
  useEffect(() => {
    if (error) {
      addMessage({
        variant: "error",
        text: parseError(error),
      })
    }
  }, [error])

  return (
    <>
      {isLoading && !data ? (
        <Stack className="pt-2" alignment="center">
          <Spinner variant="primary" />
          Loading ...
        </Stack>
      ) : (
        <article className="markdown-body">
          {data && (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{data}</ReactMarkdown>
          )}
        </article>
      )}
    </>
  )
}

export default Markdown
