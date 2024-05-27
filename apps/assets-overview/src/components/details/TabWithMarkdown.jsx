/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react"
import { Container } from "juno-ui-components"
import Markdown from "../Markdown"
import { Messages } from "messages-provider"
import useStore from "../../store"

const TabWithMarkdown = ({ path }) => {
  const origin = useStore((state) => state.origin)
  const url = React.useMemo(() => {
    if (!origin || !path) return null
    return `${origin}/${path}`
  }, [origin, path])

  return (
    <Container py px={false}>
      {url && (
        <>
          <Messages className="pb-6" />
          <Markdown path={url} />
        </>
      )}
    </Container>
  )
}

export default TabWithMarkdown
