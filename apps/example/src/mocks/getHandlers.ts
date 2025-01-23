/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { http, HttpResponse } from "msw"

import db from "./db"

const getPeaks = ({ endpoint }: any) => {
  return http.get(`${endpoint}/peaks`, () => HttpResponse.json(db.peaks))
}

const getPeak = ({ endpoint }: any) => {
  return http.get(`${endpoint}/peaks/:id`, ({ params }: any) => {
    const { id } = params
    const peak = db.peaks.find((peak: any) => peak.id === Number(id))
    //@ts-ignore
    return peak ? HttpResponse.json(peak) : HttpResponse.notFound()
  })
}

const deletePeak = ({ endpoint }: any) => {
  return http.delete(`${endpoint}/peaks/:id`, ({ params }: any) => {
    const { id } = params
    db.peaks = [...db.peaks.filter((peak: any) => peak.id !== Number(id))]
    return HttpResponse.json({})
  })
}

const updatePeak = ({ endpoint }: any) => {
  return http.put(`${endpoint}/peaks/:id`, async ({ params, request }: any) => {
    const { id } = params
    const updatedPeak = await request.json()
    db.peaks = db.peaks.map((peak: any) => (peak.id === Number(id) ? updatedPeak : peak))
    return HttpResponse.json({})
  })
}

const addPeak = ({ endpoint }: any) => {
  return http.post(`${endpoint}/peaks`, async ({ request }: any) => {
    const newPeak = await request.json()
    const id = Math.max(...db.peaks.map((peak: any) => peak.id)) + 1
    db.peaks = [...db.peaks, { ...newPeak, id }]
    return HttpResponse.json({})
  })
}

export default (options: any) => [
  getPeaks(options),
  getPeak(options),
  deletePeak(options),
  updatePeak(options),
  addPeak(options),
  // add more request handlers here
]
