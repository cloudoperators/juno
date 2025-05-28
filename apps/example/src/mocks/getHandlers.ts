/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { http } from "msw"
import db, { Peak } from "./db"

interface Options {
  endpoint: string
}

// Mock response handling utility
class MockHttpResponse {
  static json = <T>(data: T) => {
    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    })
  }

  static notFound = (message: object) => {
    return new Response(JSON.stringify(message), { status: 404 })
  }
}

const getPeaks = ({ endpoint }: Options) => {
  return http.get(`${endpoint}/peaks`, () => MockHttpResponse.json(db.peaks))
}

const getPeak = ({ endpoint }: Options) => {
  return http.get(`${endpoint}/peaks/:id`, ({ params }) => {
    const { id } = params
    const peak = db.peaks.find((peak: Peak) => peak.id === id)
    if (peak) {
      return MockHttpResponse.json(peak)
    } else {
      return MockHttpResponse.notFound({ message: "Peak not found" })
    }
  })
}

const deletePeak = ({ endpoint }: Options) => {
  return http.delete(`${endpoint}/peaks/:id`, ({ params }) => {
    const { id } = params
    db.peaks = db.peaks.filter((peak: Peak) => peak.id !== id)
    return MockHttpResponse.json({})
  })
}

const updatePeak = ({ endpoint }: Options) => {
  return http.put(`${endpoint}/peaks/:id`, async ({ params, request }) => {
    const { id } = params
    const updatedPeak = (await request.json()) as Peak
    db.peaks = db.peaks.map((peak: Peak) => (peak.id === id ? updatedPeak : peak))
    return MockHttpResponse.json({})
  })
}

const addPeak = ({ endpoint }: Options) => {
  return http.post(`${endpoint}/peaks`, async ({ request }) => {
    const newPeak = (await request.json()) as Peak
    const id = Math.max(...db.peaks.map((peak: Peak) => peak.id)) + 1
    db.peaks = [...db.peaks, { ...newPeak, id }]
    return MockHttpResponse.json({})
  })
}

export default (options: Options) => [
  getPeaks(options),
  getPeak(options),
  deletePeak(options),
  updatePeak(options),
  addPeak(options),
]
