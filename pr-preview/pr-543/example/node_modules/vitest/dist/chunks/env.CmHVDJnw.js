import 'std-env';

const isNode = typeof process < "u" && typeof process.stdout < "u" && !process.versions?.deno && !globalThis.window;
const isDeno = typeof process < "u" && typeof process.stdout < "u" && process.versions?.deno !== void 0;
const isWindows = (isNode || isDeno) && process.platform === "win32";

export { isNode as a, isDeno as b, isWindows as i };
