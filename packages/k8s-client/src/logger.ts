// Adding a tag to all console logs!
const PREFIX = "k8sClient:"

type ConsoleType = "log" | "error" | "debug" | "info"

// Add prefix to all log functions
const prefixedLog = (name: ConsoleType) => {
  return function (...args: any[]) {
    try {
      const prefixedArgs = [PREFIX, ...args]
      console[name](...prefixedArgs)
    } catch (e) {
      console.error(PREFIX, "Logging error:", e)
    }
  }
}

export const log = prefixedLog("log")
export const error = prefixedLog("error")
export const debug = prefixedLog("debug")
export const info = prefixedLog("info")
