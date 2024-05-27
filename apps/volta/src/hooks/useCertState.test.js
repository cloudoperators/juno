/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import * as React from "react"
import { renderHook, act, waitFor } from "@testing-library/react"
import { useCertState, CertStateProvider } from "./useCertState"

describe("useCertState", () => {
  it("return initial values for the form", () => {
    const wrapper = ({ children }) => (
      <CertStateProvider>{children}</CertStateProvider>
    )
    const { result } = renderHook(() => useCertState(), { wrapper })
    expect(result.current.formState.name).toBe("")
    expect(result.current.formState.description).toBe("")
    expect(result.current.formState.identity).toBe("")
    expect(result.current.formState.csr).toBe("")
  })
  it("sets given attribute", () => {
    const wrapper = ({ children }) => (
      <CertStateProvider>{children}</CertStateProvider>
    )
    const { result } = renderHook(() => useCertState(), { wrapper })

    act(() => result.current.setAttribute({ key: "name", value: "Arturo" }))
    act(() =>
      result.current.setAttribute({ key: "description", value: "new_cert" })
    )
    act(() => result.current.setAttribute({ key: "identity", value: "XXXYYY" }))
    act(() => result.current.setAttribute({ key: "csr", value: "test_csr" }))

    waitFor(() => {
      expect(result.current.formState.name).toBe("Arturo")
      expect(result.current.formState.description).toBe("Arturo")
      expect(result.current.formState.identity).toBe("XXXYYY")
      expect(result.current.formState.csr).toBe("test_csr")
    })
  })
})

describe("validation", () => {
  it("return initial values for the validation", () => {
    const wrapper = ({ children }) => (
      <CertStateProvider>{children}</CertStateProvider>
    )
    const { result } = renderHook(() => useCertState(), { wrapper })
    expect(result.current.formValidation.name.length).toBe(1)
    expect(result.current.formValidation.name[0]).toMatch(/blank/)
    expect(result.current.formValidation.csr.length).toBe(1)
    expect(result.current.formValidation.csr[0]).toMatch(/blank/)
  })
  it("checks empty name", () => {
    const wrapper = ({ children }) => (
      <CertStateProvider>{children}</CertStateProvider>
    )
    const { result } = renderHook(() => useCertState(), { wrapper })

    act(() => result.current.setAttribute({ key: "name", value: "" }))

    waitFor(() => {
      expect(result.current.formValidation.name.length).toBe(1)
      expect(result.current.formValidation.name[0]).toMatch(/blank/)
    })
  })
  it("checks names longer than 30 chars", () => {
    const wrapper = ({ children }) => (
      <CertStateProvider>{children}</CertStateProvider>
    )
    const { result } = renderHook(() => useCertState(), { wrapper })

    act(() =>
      result.current.setAttribute({
        key: "name",
        value: "Lorem ipsum dolor sit amet, con",
      })
    )

    waitFor(() => {
      expect(result.current.formValidation.name.length).toBe(1)
      expect(result.current.formValidation.name[0]).toMatch(/30 characters/)
    })
  })
  it("checks names shorter than 3 chars", () => {
    const wrapper = ({ children }) => (
      <CertStateProvider>{children}</CertStateProvider>
    )
    const { result } = renderHook(() => useCertState(), { wrapper })

    act(() =>
      result.current.setAttribute({
        key: "name",
        value: "aa",
      })
    )

    waitFor(() => {
      expect(result.current.formValidation.name.length).toBe(1)
      expect(result.current.formValidation.name[0]).toMatch(/3 characters/)
    })
  })
  it("checks descriptions longer than 100 chars", () => {
    const wrapper = ({ children }) => (
      <CertStateProvider>{children}</CertStateProvider>
    )
    const { result } = renderHook(() => useCertState(), { wrapper })

    act(() =>
      result.current.setAttribute({
        key: "description",
        value:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean ms",
      })
    )

    waitFor(() => {
      expect(result.current.formValidation.description.length).toBe(1)
      expect(result.current.formValidation.description[0]).toMatch(
        /100 characters/
      )
    })
  })
  it("checks empty csr", () => {
    const wrapper = ({ children }) => (
      <CertStateProvider>{children}</CertStateProvider>
    )
    const { result } = renderHook(() => useCertState(), { wrapper })

    act(() => result.current.setAttribute({ key: "csr", value: "" }))

    waitFor(() => {
      expect(result.current.formValidation.csr.length).toBe(1)
      expect(result.current.formValidation.csr[0]).toMatch(/blank/)
    })
  })
  it("checks validaton passes", () => {
    const wrapper = ({ children }) => (
      <CertStateProvider>{children}</CertStateProvider>
    )
    const { result } = renderHook(() => useCertState(), { wrapper })

    act(() => result.current.setAttribute({ key: "name", value: "Arturo" }))
    act(() =>
      result.current.setAttribute({ key: "description", value: "new_cert" })
    )
    act(() => result.current.setAttribute({ key: "identity", value: "XXXYYY" }))
    act(() => result.current.setAttribute({ key: "csr", value: "test_csr" }))

    waitFor(() => {
      expect(Object.keys(result.current.formValidation).length).toBe(0)
    })
  })
})
