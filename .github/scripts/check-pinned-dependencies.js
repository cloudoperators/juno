#!/usr/bin/env node

/**
 * SPDX-FileCopyrightText: 2026 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * Security script to verify all dependencies use pinned versions (no ^ or ~ ranges)
 *
 * This prevents supply chain attacks where package updates could introduce malicious code.
 * Runs in CI/CD to block PRs that introduce unpinned dependencies.
 */

const fs = require("fs")
const path = require("path")

// ANSI color codes for terminal output
const colors = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  cyan: "\x1b[36m",
}

// Configuration
const config = {
  // Patterns that indicate unpinned versions
  unpinnedPatterns: [/^\^/, /^~/, /^>=/, /^<=/, /^>/, /^</, /^\*/],

  // Allowed unpinned patterns (workspace dependencies, etc.)
  allowedPatterns: [
    /^workspace:/, // Monorepo workspace dependencies
    /^npm:/, // npm protocol (usually pinned in lockfile)
    /^file:/, // Local file dependencies
    /^link:/, // Linked dependencies
    /^portal:/, // Portal dependencies (yarn)
    /^patch:/, // Patched dependencies (pnpm)
  ],

  // Fields to check in package.json
  dependencyFields: ["dependencies", "devDependencies", "optionalDependencies"],

  // Fields to skip (these are allowed to have ranges)
  skipFields: ["peerDependencies", "peerDependenciesMeta"],

  // Specific packages that are allowed to have ranges (add exceptions here)
  allowedUnpinnedPackages: [
    // Example: 'some-internal-package'
  ],

  // Packages to always ignore (like workspace internal packages)
  ignorePackages: [],
}

class DependencyChecker {
  constructor() {
    this.errors = []
    this.warnings = []
    this.checkedFiles = 0
  }

  /**
   * Check if a version string is pinned (exact version)
   */
  isPinned(version) {
    // Check if it's an allowed pattern first
    if (config.allowedPatterns.some((pattern) => pattern.test(version))) {
      return true
    }

    // Check if it matches any unpinned pattern
    if (config.unpinnedPatterns.some((pattern) => pattern.test(version))) {
      return false
    }

    // If no pattern matches, it's likely a pinned version (e.g., "1.2.3")
    return true
  }

  /**
   * Check a single package.json file
   */
  checkPackageJson(filePath) {
    try {
      const content = fs.readFileSync(filePath, "utf8")
      const pkg = JSON.parse(content)

      const relPath = path.relative(process.cwd(), filePath)
      let fileHasErrors = false

      // Check each dependency field
      for (const field of config.dependencyFields) {
        if (!pkg[field]) continue

        for (const [name, version] of Object.entries(pkg[field])) {
          // Skip ignored packages
          if (config.ignorePackages.includes(name)) {
            continue
          }

          // Check if pinned
          if (!this.isPinned(version)) {
            // Check if it's in the allowed list
            if (config.allowedUnpinnedPackages.includes(name)) {
              this.warnings.push({
                file: relPath,
                field,
                package: name,
                version,
                message: `Allowed unpinned dependency: ${name}@${version}`,
              })
            } else {
              fileHasErrors = true
              this.errors.push({
                file: relPath,
                field,
                package: name,
                version,
                message: `Unpinned dependency: ${name}@${version}`,
              })
            }
          }
        }
      }

      // Check peerDependencies for info only (warnings, not errors)
      if (pkg.peerDependencies) {
        for (const [name, version] of Object.entries(pkg.peerDependencies)) {
          if (!this.isPinned(version) && !config.allowedPatterns.some((p) => p.test(version))) {
            // This is expected for peer deps, just note it
            // Don't add to warnings to avoid noise
          }
        }
      }

      this.checkedFiles++

      if (!fileHasErrors) {
        console.log(`${colors.green}✓${colors.reset} ${relPath}`)
      }
    } catch (error) {
      console.error(`${colors.red}✗${colors.reset} Error reading ${filePath}: ${error.message}`)
    }
  }

  /**
   * Print summary report
   */
  printReport() {
    console.log("\n" + "=".repeat(70))
    console.log(`${colors.cyan}Dependency Pinning Check Summary${colors.reset}`)
    console.log("=".repeat(70) + "\n")

    console.log(`${colors.blue}Files checked:${colors.reset} ${this.checkedFiles}`)

    if (this.errors.length === 0 && this.warnings.length === 0) {
      console.log(`${colors.green}✓ All dependencies are properly pinned!${colors.reset}\n`)
      return 0
    }

    // Print errors
    if (this.errors.length > 0) {
      console.log(`\n${colors.red}✗ Found ${this.errors.length} unpinned dependencies:${colors.reset}\n`)

      // Group errors by file
      const errorsByFile = {}
      for (const error of this.errors) {
        if (!errorsByFile[error.file]) {
          errorsByFile[error.file] = []
        }
        errorsByFile[error.file].push(error)
      }

      for (const [file, errors] of Object.entries(errorsByFile)) {
        console.log(`${colors.yellow}${file}:${colors.reset}`)
        for (const error of errors) {
          console.log(`  ${colors.red}✗${colors.reset} ${error.field}.${error.package}: "${error.version}"`)
        }
        console.log("")
      }

      console.log(`${colors.red}ERROR: Unpinned dependencies found!${colors.reset}`)
      console.log(`\nTo fix: Remove version range prefixes (^, ~, >=, etc.) from package.json`)
      console.log(`Example: Change "^1.2.3" to "1.2.3"\n`)
    }

    // Print warnings
    if (this.warnings.length > 0) {
      console.log(`\n${colors.yellow}⚠ ${this.warnings.length} allowed unpinned dependencies:${colors.reset}\n`)
      for (const warning of this.warnings) {
        console.log(`  ${colors.yellow}⚠${colors.reset} ${warning.file}: ${warning.package}@${warning.version}`)
      }
      console.log("")
    }

    return this.errors.length > 0 ? 1 : 0
  }
}

/**
 * Recursively find all package.json files
 */
function findPackageJsonFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir)

  for (const file of files) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    // Skip node_modules, build, dist, .turbo, etc.
    if (file === "node_modules" || file === "build" || file === "dist" || file === ".turbo" || file === ".git") {
      continue
    }

    if (stat.isDirectory()) {
      findPackageJsonFiles(filePath, fileList)
    } else if (file === "package.json") {
      fileList.push(filePath)
    }
  }

  return fileList
}

/**
 * Main execution
 */
async function main() {
  console.log(`${colors.cyan}Checking for pinned dependencies...${colors.reset}\n`)

  const checker = new DependencyChecker()

  try {
    // Find all package.json files
    const packageFiles = findPackageJsonFiles(process.cwd())

    if (packageFiles.length === 0) {
      console.error(`${colors.red}No package.json files found!${colors.reset}`)
      process.exit(1)
    }

    // Check each package.json
    for (const file of packageFiles) {
      checker.checkPackageJson(file)
    }

    // Print report and exit with appropriate code
    const exitCode = checker.printReport()
    process.exit(exitCode)
  } catch (error) {
    console.error(`${colors.red}Fatal error: ${error.message}${colors.reset}`)
    process.exit(1)
  }
}

// Run if called directly
if (require.main === module) {
  main()
}

module.exports = { DependencyChecker }
