/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useMemo, useState } from "react"
import {
  Form,
  Stack,
  TextInput,
  Icon,
  Button,
  FormRow,
} from "juno-ui-components"

const formAreaCss = (show) => {
  return `      
      transition-all
      ease-out
      max-h-0
      overflow-y-scroll
			${show ? "duration-1000 max-h-[34rem]" : `duration-300`}
		`
    .replace(/\n/g, " ")
    .replace(/\s+/g, " ")
}

const PreviewAppPropsForm = ({ asset, onAppPropsChange }) => {
  const [formState, setFormState] = useState({})
  const [show, setShow] = useState(false)

  useEffect(() => {
    // reset state on asset change
    setFormState({})
    setShow(false)
  }, [asset])

  const appProps = useMemo(() => {
    return asset?.appProps || {}
  }, [asset])

  const onShowClick = () => {
    setShow(!show)
  }

  // on enter key submit the form
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onAppPropsChange(formState)
    }
  }

  const onInputChanged = (key, value) => {
    setFormState({ ...formState, [key]: value })
  }

  return (
    <div className="py-4">
      <Stack className="mb-4" alignment="center" distribution="end">
        <div className="cursor-pointer" onClick={onShowClick}>
          <Stack alignment="center">
            <Icon
              color="jn-global-text"
              icon={show ? "expandLess" : "expandMore"}
            />
            Set configuration
          </Stack>
        </div>
      </Stack>

      <div className="overflow-hidden">
        <div className={formAreaCss(show)}>
          <Form className="p-1">
            {Object.keys(appProps).map((key) => (
              <FormRow key={key}>
                <TextInput
                  id={key}
                  label={key}
                  required={appProps[key]?.type === "required"}
                  helptext={`${appProps[key]?.description}`}
                  onChange={(e) => onInputChanged(key, e?.target?.value)}
                  onKeyDown={handleKeyDown}
                />
              </FormRow>
            ))}
            <Stack className="mb-4" alignment="center" distribution="end">
              <Button
                label="Apply"
                onClick={() => onAppPropsChange(formState)}
                variant="primary"
              />
            </Stack>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default PreviewAppPropsForm
