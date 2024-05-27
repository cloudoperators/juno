// helpers for console log
function colorize(color, output) {
  return ["\x1b[", color, "m", output, "\x1b[0m"].join("")
}
export const clear = "\x1b[2J\x1b[H"
export const green = (text) => colorize(32, text)
export const yellow = (text) => colorize(33, text)
export const red = (text) => colorize(31, text)
export const blue = (text) => colorize(34, text)
export const cyan = (text) => colorize(36, text)
