/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */
import { vi } from "vitest"

vi.restoreAllMocks();

globalThis.console.error = vi.fn()
globalThis.console.warn = vi.fn()
globalThis.console.info = vi.fn()

vi.stubGlobal('location', {
  ancestorOrigins: null,
  hash: null,
  host: "dummy.com",
  port: "80",
  protocol: "http:",
  hostname: "dummy.com",
  href: "http://dummy.com",
  origin: "http://dummy.com",
  pathname: null,
  search: null,
  assign: null,
  reload: null,
  replace: null,
});

const mockResponse = {
  ok: true,
  statusText: "OK",
  json: async () => {},
} as Response;
global.fetch = vi.fn().mockResolvedValue(mockResponse);
