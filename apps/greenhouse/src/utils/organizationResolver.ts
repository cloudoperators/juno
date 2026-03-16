/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Represents the context of organization resolution
 */
export interface OrganizationContext {
  /** The organization name (e.g., "demo", "prod") */
  name: string | undefined
  /** Where the organization was detected from */
  source: "subdomain" | "path" | "token" | "none"
  /** The static mount point for the app (e.g., "/greenhouse") */
  staticBasePath: string
}

/**
 * Options for resolving organization from various sources
 */
export interface OrganizationResolverOptions {
  /** The current URL to parse */
  url?: URL
  /** Static mount point where the app is embedded (e.g., "/greenhouse") */
  staticBasePath?: string
  /** Whether the app uses hash-based routing */
  enableHashedRouting?: boolean
  /** Auth groups from the token (e.g., ["organization:demo", "role:admin"]) */
  authGroups?: string[]
}

/**
 * Normalizes a basePath to always start with "/" and never end with "/"
 * Returns empty string for "/" or undefined/empty inputs
 */
function normalizeBasePath(basePath: string | undefined): string {
  if (!basePath || basePath === "/") return ""
  const normalized = basePath.startsWith("/") ? basePath : `/${basePath}`
  return normalized.endsWith("/") ? normalized.slice(0, -1) : normalized
}

/**
 * Extracts organization name from a subdomain pattern
 * Expected pattern: {org}.dashboard.{domain}
 */
function extractFromSubdomain(hostname: string): string | undefined {
  const match = hostname.match(/^(.+)\.dashboard\..+/)
  return match ? match[1] : undefined
}

/**
 * Extracts organization name from a path by stripping the static basePath
 */
function extractFromPath(path: string, staticBasePath: string): string | undefined {
  let workingPath = path

  // Strip static basePath if provided
  if (staticBasePath) {
    if (workingPath.startsWith(staticBasePath)) {
      workingPath = workingPath.substring(staticBasePath.length)
    }
  }

  // Extract first path segment
  const pathParts = workingPath.split("/").filter(Boolean)
  return pathParts.length > 0 ? pathParts[0] : undefined
}

/**
 * Extracts organization name from auth token groups
 * Expected format: ["organization:demo", ...]
 */
function extractFromAuthGroups(groups: string[] | undefined): string | undefined {
  if (!groups) return undefined
  const orgString = groups.find((g) => g.startsWith("organization:"))
  return orgString ? orgString.split(":")[1] : undefined
}

/**
 * Resolves the organization context from URL, auth, and configuration
 *
 * Resolution order:
 * 1. Check subdomain (e.g., demo.dashboard.com)
 * 2. Check URL path (after stripping static basePath)
 * 3. Check auth token groups (if provided)
 *
 * @param options - Configuration for organization resolution
 * @returns Organization context with name, source, and basePath info
 *
 * @example
 * // Subdomain detection
 * resolveOrganization({
 *   url: new URL("https://demo.dashboard.com/admin")
 * })
 * // => { name: "demo", source: "subdomain", staticBasePath: "" }
 *
 * @example
 * // Path detection with static basePath
 * resolveOrganization({
 *   url: new URL("http://localhost:3000/greenhouse/demo/admin"),
 *   staticBasePath: "/greenhouse"
 * })
 * // => { name: "demo", source: "path", staticBasePath: "/greenhouse" }
 *
 * @example
 * // Auth token fallback
 * resolveOrganization({
 *   authGroups: ["organization:demo", "role:admin"]
 * })
 * // => { name: "demo", source: "token", staticBasePath: "" }
 */
export function resolveOrganization(options: OrganizationResolverOptions = {}): OrganizationContext {
  const { url, staticBasePath, enableHashedRouting = false, authGroups } = options

  const normalizedBasePath = normalizeBasePath(staticBasePath)
  const currentUrl = url || (typeof window !== "undefined" ? new URL(window.location.href) : undefined)

  // Try subdomain first (highest priority)
  if (currentUrl) {
    const orgFromSubdomain = extractFromSubdomain(currentUrl.hostname)
    if (orgFromSubdomain) {
      return {
        name: orgFromSubdomain,
        source: "subdomain",
        staticBasePath: normalizedBasePath,
      }
    }
  }

  // Try path extraction (after stripping static basePath)
  if (currentUrl) {
    const path = enableHashedRouting ? currentUrl.hash.replace("#/", "") : currentUrl.pathname
    const orgFromPath = extractFromPath(path, normalizedBasePath)
    if (orgFromPath) {
      return {
        name: orgFromPath,
        source: "path",
        staticBasePath: normalizedBasePath,
      }
    }
  }

  // Try auth token groups (lowest priority)
  const orgFromToken = extractFromAuthGroups(authGroups)
  if (orgFromToken) {
    return {
      name: orgFromToken,
      source: "token",
      staticBasePath: normalizedBasePath,
    }
  }

  // No organization found
  return {
    name: undefined,
    source: "none",
    staticBasePath: normalizedBasePath,
  }
}

/**
 * Computes the TanStack Router basePath from organization context
 *
 * Rules:
 * - If org is in subdomain: return only staticBasePath (or "/" if none)
 * - If org is in path: return staticBasePath + /orgName
 * - If no org: return staticBasePath (or "/" if none)
 *
 * @param orgContext - The resolved organization context
 * @returns The basePath to use for TanStack Router
 *
 * @example
 * // Subdomain: org not in path
 * computeRouterBasePath({
 *   name: "demo",
 *   source: "subdomain",
 *   staticBasePath: ""
 * })
 * // => "/"
 *
 * @example
 * // Path-based: org in path
 * computeRouterBasePath({
 *   name: "demo",
 *   source: "path",
 *   staticBasePath: "/greenhouse"
 * })
 * // => "/greenhouse/demo"
 *
 * @example
 * // Token-based: org from auth, needs to be added to path
 * computeRouterBasePath({
 *   name: "demo",
 *   source: "token",
 *   staticBasePath: ""
 * })
 * // => "/demo"
 */
export function computeRouterBasePath(orgContext: OrganizationContext): string {
  const { name, source, staticBasePath } = orgContext

  // If org is in subdomain, it's not part of the path
  if (source === "subdomain") {
    return staticBasePath || "/"
  }

  // If org exists and is path-based or from token, include it in basePath
  if (name) {
    return staticBasePath ? `${staticBasePath}/${name}` : `/${name}`
  }

  // No org, return just the static basePath
  return staticBasePath || "/"
}

/**
 * Convenience function to extract organization name from URL
 * (backward compatible with extractOrganizationName)
 */
export function extractOrganizationName(enableHashedRouting: boolean, staticBasePath?: string): string | undefined {
  const orgContext = resolveOrganization({
    staticBasePath,
    enableHashedRouting,
  })
  return orgContext.name
}

/**
 * Convenience function to get router basePath from auth data
 * (backward compatible with getBasePath)
 */
export function getRouterBasePath(authGroups: string[] | undefined, staticBasePath?: string): string {
  const orgContext = resolveOrganization({
    authGroups,
    staticBasePath,
  })
  return computeRouterBasePath(orgContext)
}
