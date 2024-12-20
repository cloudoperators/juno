/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { http, HttpResponse } from "msw"

import db from "./db"

const getPeaks = ({ endpoint }) => {
  return http.get(`${endpoint}/peaks`, () => HttpResponse.json(db.peaks))
}

const getPeak = ({ endpoint }) => {
  return http.get(`${endpoint}/peaks/:id`, ({ params }) => {
    const { id } = params
    const peak = db.peaks.find((peak) => peak.id === Number(id))
    return peak ? HttpResponse.json(peak) : HttpResponse.notFound()
  })
}

const deletePeak = ({ endpoint }) => {
  return http.delete(`${endpoint}/peaks/:id`, ({ params }) => {
    const { id } = params
    db.peaks = [...db.peaks.filter((peak) => peak.id !== Number(id))]
    return HttpResponse.json({})
  })
}

const updatePeak = ({ endpoint }) => {
  return http.put(`${endpoint}/peaks/:id`, async ({ params, request }) => {
    const { id } = params
    const updatedPeak = await request.json()
    db.peaks = db.peaks.map((peak) => (peak.id === Number(id) ? updatedPeak : peak))
    return HttpResponse.json({})
  })
}

const addPeak = ({ endpoint }) => {
  return http.post(`${endpoint}/peaks`, async ({ request }) => {
    const newPeak = await request.json()
    const id = Math.max(...db.peaks.map((peak) => peak.id)) + 1
    db.peaks = [...db.peaks, { ...newPeak, id }]
    return HttpResponse.json({})
  })
}

export default (options) => [
  getPeaks(options),
  getPeak(options),
  deletePeak(options),
  updatePeak(options),
  addPeak(options),
  // add more request handlers here
]
