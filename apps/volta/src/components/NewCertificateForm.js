/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import React, {
  useState,
  useMemo,
  useEffect,
  useImperativeHandle,
  forwardRef,
  useCallback,
} from "react"
import {
  Button,
  Stack,
  TextInput,
  Textarea,
  Form,
  FormRow,
} from "juno-ui-components"
import {
  generateKeys,
  pemEncodeKey,
  generateCsr,
  getAlgorithm,
} from "../lib/csrUtils"
import { newCertificateMutation } from "../queries"
import { useCertState } from "../hooks/useCertState"
import { parseError } from "../helpers"
import { useQueryClient } from "@tanstack/react-query"
import { useActions } from "messages-provider"
import {
  useCertActions,
  useAuthData,
  useGlobalsEndpoint,
  useGlobalsIsMock,
} from "../hooks/useStore"

const ALGORITHM_KEY = "RSA-2048"

const NewCertificateForm = ({ ca, onFormSuccess }, ref) => {
  const { setIsFormSubmitting } = useCertActions()
  const { addMessage, resetMessages } = useActions()

  // the form state is being handeled in a zustand context store. Since the complexity
  // in this form is very low could be removed from here.
  const formState = useCertState(useCallback((state) => state.formState))
  const setAttribute = useCertState(useCallback((state) => state.setAttribute))
  const formValidation = useCertState(
    useCallback((state) => state.formValidation)
  )

  const authData = useAuthData()
  const endpoint = useGlobalsEndpoint()
  const queryClient = useQueryClient()
  const isMock = useGlobalsIsMock()

  const [pemPrivateKey, setPemPrivateKey] = useState(null)
  const [showValidation, setShowValidation] = useState({})

  const algorithm = useMemo(() => getAlgorithm(ALGORITHM_KEY), [ALGORITHM_KEY])

  // useMutation can't create a subscription like for useQuery. State can't be shared
  // https://github.com/tannerlinsley/react-query/issues/2304
  const { isLoading, mutate } = newCertificateMutation()

  // save when the form is submitting to disable the save button
  useEffect(() => {
    setIsFormSubmitting(isLoading)
  }, [isLoading])

  // on form init set the identity attributes
  useEffect(() => {
    if (!setAttribute) return
    const userId = authData?.parsed?.userId?.toUpperCase()
    if (userId) {
      setAttribute({ key: "identity", value: userId })
    }
  }, [setAttribute])

  const onGenerateCSRError = () => {
    addMessage({
      variant: "error",
      text: "Error generating certificate signing request. Please check the console for details.",
    })
  }

  const generateCSR = () => {
    setPemPrivateKey(null)
    setAttribute({ key: "csr", value: "" })
    // get the keys first
    generateKeys(algorithm).then((newKeys) => {
      // encode private key
      pemEncodeKey(newKeys?.privateKey)
        .then((pemKey) => {
          // save the private key pem encoded
          setPemPrivateKey(pemKey)
          // create csr
          generateCsr(algorithm, newKeys)
            .then((csr) => {
              onAttrChanged("csr", csr.toString("pem"))
            })
            .catch((error) => {
              onGenerateCSRError()
            })
        })
        .catch((error) => {
          onGenerateCSRError()
        })
    })
  }

  useImperativeHandle(
    ref,
    () => {
      return {
        submit() {
          // reset panel messages
          resetMessages()
          // check validaton
          setShowValidation(formValidation)
          if (Object.keys(formValidation).length > 0) return
          mutate(
            {
              endpoint: endpoint,
              ca: ca,
              bearerToken: authData?.JWT,
              formState: formState,
              isMock: isMock,
            },
            {
              onSuccess: (data, variables, context) => {
                addMessage({
                  variant: "success",
                  text: <span>Successfully create SSO cert</span>,
                })
                // return response to the parent
                if (onFormSuccess) {
                  onFormSuccess(pemPrivateKey, data?.certificate)
                }
                // Invalidate every query with a key that starts with `certificates`
                queryClient.invalidateQueries({ queryKey: ["certificates"] })
              },
              onError: (error, variables, context) => {
                addMessage({
                  variant: "error",
                  text: parseError(error),
                })
              },
            }
          )
        },
      }
    },
    [
      resetMessages,
      setShowValidation,
      endpoint,
      ca,
      authData,
      addMessage,
      onFormSuccess,
      pemPrivateKey,
      queryClient,
      parseError,
      formState,
      formValidation,
    ]
  )

  const textAreaHelpText = () => {
    return (
      <>
        You can either create your own certificate signing request (CSR) using
        an existing private key or we can create one for you (this will also
        create a new private key; we will not store this key). Please see
        following information and examples for creating a certificate signing
        request:{" "}
        <a
          href="https://github.wdf.sap.corp/cc/volta/blob/master/docs/api-v1.md#Sign-a-certificate"
          target="_blank"
        >
          Documentation | Signing a certificate
        </a>
      </>
    )
  }

  const errorHelpText = (messages) => {
    return messages.map((msg, i) => (
      <span key={i} className="block text-theme-danger ">
        {msg}
      </span>
    ))
  }

  const onAttrChanged = (key, value) => {
    setAttribute({ key: key, value: value })
  }

  return (
    <Form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
      <Stack gap="2" direction="vertical" distribution="end">
        <FormRow>
          <TextInput
            label="Name"
            required
            onChange={(e) => {
              onAttrChanged("name", e.target.value)
            }}
            helptext={
              showValidation["name"] && errorHelpText(showValidation["name"])
            }
            className={
              showValidation["name"] && "text-theme-danger border-2 mb-2"
            }
          />
        </FormRow>
        <FormRow>
          <TextInput
            label="Description"
            onChange={(e) => {
              onAttrChanged("description", e.target.value)
            }}
            helptext={
              showValidation["description"] &&
              errorHelpText(showValidation["description"])
            }
            className={
              showValidation["description"] && "text-theme-danger border-2"
            }
          />
        </FormRow>
        <FormRow>
          <TextInput
            label="User ID"
            value={formState.identity}
            onChange={(e) => {
              onAttrChanged("identity", e.target.value?.toUpperCase())
            }}
            helptext={
              showValidation["identity"]
                ? errorHelpText(showValidation["identity"])
                : "Owner for whom the certificate will be issued. Owner can be also a technical user or technical team user which belongs to the user who is creating the SSO certificate."
            }
            className={
              showValidation["identity"] && "text-theme-danger border-2"
            }
          />
        </FormRow>
      </Stack>
      <Stack alignment="center" className="mb-2" distribution="end">
        <Button label="Generate CSR" size="small" onClick={generateCSR} />
      </Stack>
      <Textarea
        required
        label="Certificate sign request (CSR)"
        value={formState.csr}
        onChange={(e) => {
          setPemPrivateKey(null)
          onAttrChanged("csr", e.target.value)
        }}
        helptext={
          showValidation["csr"]
            ? errorHelpText(showValidation["csr"])
            : textAreaHelpText()
        }
        className={showValidation["csr"] && "text-theme-danger border-2"}
        rows="15"
      />
    </Form>
  )
}

export default forwardRef(NewCertificateForm)
