/*
 * SPDX-FileCopyrightText: 2024 SAP SE or an SAP affiliate company and Juno contributors
 * SPDX-License-Identifier: Apache-2.0
 */

export default (message) => {
  const colors = {
    yellow: "\x1b[33m",
    cyan: "\x1b[36m",
    green: "\x1b[32m",
    red: "\x1b[31m",
    reset: "\x1b[0m",
  }
  let trace = colors.cyan + message + colors.reset
  let level = 1
  return {
    increaseLevel: () => level++,
    decreaseLevel: () => level--,
    add: (expression, result) => {
      let tab = "    "
      let tabs = tab
      for (let i = 1; i < level; i++) tabs += tab

      trace += "\n" + tabs + "\u02EA " + colors.cyan + expression
      if (typeof result !== "undefined")
        trace += " = " + (result ? colors.green : colors.red) + result
      trace += colors.reset
    },
    trace: () => trace,
    log: () => console.log(trace),
  }
}
