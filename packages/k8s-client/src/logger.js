// adding a tag to all console logs!
const PREFIX = "k8sClient:"

// add prefix to all log functions
const prefixedLog = (name) => {
  return function () {
    const args = Array.prototype.slice.call(arguments)
    args.unshift(PREFIX)
    console[name].apply(console, args)
  }
}

export const log = prefixedLog("log")
export const error = prefixedLog("error")
export const debug = prefixedLog("debug")
export const info = prefixedLog("info")
