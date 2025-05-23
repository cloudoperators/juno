/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Panel, PanelBody, Stack } from "@cloudoperators/juno-ui-components"
import React from "react"
import useStore from "../store"
import SecretFormBody from "./SecretFormBody"
import SecretFormButtons from "./SecretFormButtons"
import SecretFormHeader from "./SecretFormHeader"

const SecretEdit: React.FC<any> = () => {
  const showSecretEdit = useStore((state: any) => state.showSecretEdit)

  const setShowSecretEdit = useStore((state: any) => state.setShowSecretEdit)
  const setSecretDetail = useStore((state: any) => state.setSecretDetail)
  const setIsSecretEditMode = useStore((state: any) => state.setIsSecretEditMode)

  const onPanelClose = () => {
    setShowSecretEdit(false)
    setSecretDetail(undefined)
    setIsSecretEditMode(false)
  }

  return (
    <Panel
      heading={
        <Stack gap="2">
          <span>Edit Secret</span>
        </Stack>
      }
      opened={!!showSecretEdit}
      onClose={onPanelClose}
      size="large"
    >
      <PanelBody>
        <SecretFormHeader />
        <SecretFormBody />
        <SecretFormButtons />
      </PanelBody>
    </Panel>
  )
}

export default SecretEdit
