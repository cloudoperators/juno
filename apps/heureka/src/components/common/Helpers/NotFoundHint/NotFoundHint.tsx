import React from "react"
import { Container } from "@cloudoperators/juno-ui-components"

export type NotFoundHintProps = {
  text: string
}

export const NotFoundHint = ({ text }: NotFoundHintProps) => {
  return (
    <Container py px={false}>
      <span>{text}</span>
    </Container>
  )
}
