import { _ as V, a as D, I as N, K as I } from "./Shell-DTMmoMZV.mjs";
import { r as w, R as s } from "./index-Bjb47Pyo.mjs";
var L = `
    jn-text-theme-high
    jn-flex
    jn-rounded
    jn-leading-5
    jn-overflow-hidden
    jn-items-center
`, _ = `
    jn-font-bold
`, R = `
    jn-py-3
    jn-pr-4
    jn-ml-7
`, F = `
    jn-w-[4px]
    jn-self-stretch
    jn-border-l-4
    jn-mr-6
    jn-shrink-0
`, q = `
    jn-ml-auto
    jn-self-stretch
    jn-flex
    jn-flex-col
    jn-py-2.5
    jn-pr-2.5
`, l = { default: "jn-border-theme-message-default", defaultBg: "jn-bg-theme-message-default", error: "jn-border-theme-message-error", errorBg: "jn-bg-theme-message-error", warning: "jn-border-theme-message-warning", warningBg: "jn-bg-theme-message-warning", danger: "jn-border-theme-message-danger", dangerBg: "jn-bg-theme-message-danger", success: "jn-border-theme-message-success", successBg: "jn-bg-theme-message-success" }, A = function(e) {
  return e === "error" ? l.errorBg : e === "warning" ? l.warningBg : e === "success" ? l.successBg : e === "info" ? l.defaultBg : e === "danger" ? l.dangerBg : l.defaultBg;
}, M = function(e) {
  return e === "error" ? l.error : e === "warning" ? l.warning : e === "success" ? l.success : e === "info" ? l.default : e === "danger" ? l.danger : l.default;
}, P = function(e) {
  var t = new Set(Object.values(I));
  return t.has(e);
}, z = function(e) {
  return e === "error" ? "dangerous" : P(e) ? e : "default";
}, H = function(e, t, a, n) {
  !e || 1 > t || (n.current !== null && clearTimeout(n.current), n.current = window.setTimeout(function() {
    a();
  }, t));
}, O = function(e) {
  e.current !== null && (clearTimeout(e.current), e.current = null);
}, X = function(e) {
  var t = e.title, a = t === void 0 ? null : t, n = e.text, m = n === void 0 ? null : n, g = e.variant, o = g === void 0 ? "info" : g, d = e.dismissible, i = e.autoDismiss, j = i !== void 0 && i, f = e.autoDismissTimeout, h = f === void 0 ? 1e4 : f, p = e.onDismiss, c = e.className, b = c === void 0 ? "" : c, y = e.children, x = V(e, ["title", "text", "variant", "dismissible", "autoDismiss", "autoDismissTimeout", "onDismiss", "className", "children"]), k = w.useState(!0), E = k[0], B = k[1], v = w.useRef(null), r = function() {
    B(!1), p && p();
  };
  if (w.useEffect(function() {
    return function() {
      O(v);
    };
  }, []), w.useEffect(function() {
    H(j, h, r, v);
  }, [j, h]), !E) return null;
  var K = z(o), T = A(o), C = M(o);
  return s.createElement("div", D({ className: "juno-message juno-message-".concat(o, " ").concat(L, " ").concat(T, " ").concat(b) }, x), s.createElement("div", { className: "juno-message-border ".concat(F, " ").concat(C) }), s.createElement(N, { icon: K, color: "jn-text-theme-".concat(o), className: "jn-shrink-0" }), s.createElement("div", { className: "juno-message-content ".concat(R) }, a && s.createElement("h1", { className: _ }, a), s.createElement("div", null, y || m)), d !== void 0 && d && s.createElement("div", { className: q }, s.createElement(N, { icon: "close", onClick: r, className: "juno-message-close-button jn-opacity-50 hover:jn-opacity-100" })));
}, U = function(e) {
  return `
    jn-inline-flex
    jn-basis-auto
    jn-shrink
    jn-items-center
    jn-flex-nowrap
    jn-text-xs
    jn-p-px
    jn-border
    jn-rounded
    jn-border-theme-background-lvl-4
    jn-group
    `.concat(e ? "jn-cursor-pointer" : "", `
  `);
}, G = function(e) {
  return `
    jn-bg-theme-background-lvl-4
    jn-text-theme-high
    `.concat(e ? "group-hover:jn-text-theme-highest" : "", `
    jn-px-1
    jn-py-0.5
    jn-rounded-sm
    jn-inline-block
  `);
}, S = function(e) {
  return `
    jn-px-1
    jn-py-0.5
    jn-text-theme-high
    `.concat(e ? "group-hover:jn-text-theme-highest" : "", `
    jn-inline-block
  `);
}, Y = function(e) {
  var t = e.uid, a = t === void 0 ? "" : t, n = e.pillKey, m = n === void 0 ? "" : n, g = e.pillKeyLabel, o = g === void 0 ? "" : g, d = e.pillValue, i = d === void 0 ? "" : d, j = e.pillValueLabel, f = j === void 0 ? "" : j, h = e.closeable, p = e.onClick, c = p === void 0 ? void 0 : p, b = e.onClose, y = b === void 0 ? void 0 : b, x = e.className, k = x === void 0 ? "" : x, E = V(e, ["uid", "pillKey", "pillKeyLabel", "pillValue", "pillValueLabel", "closeable", "onClick", "onClose", "className"]), B = function(r) {
    y && y(r, a || m || i);
  }, v = function(r) {
    c && c(r, a || m || i);
  };
  return s.createElement("div", D({ className: "juno-pill ".concat(U(!!c), " ").concat(k) }, E), i || f ? s.createElement(s.Fragment, null, (o || m) && s.createElement("span", { className: "pill-key ".concat(G(!!c)), onClick: function(r) {
    return v(r);
  } }, o || m), s.createElement("span", { className: "pill-value ".concat(S(!!c)), onClick: function(r) {
    return v(r);
  } }, f || i)) : s.createElement("span", { className: "".concat(S(!1)) }, "set pillValue or pillValueLabel"), h !== void 0 && h && s.createElement(N, { icon: "close", size: 18, onClick: function(r) {
    return B(r);
  } }));
}, u = /* @__PURE__ */ ((e) => (e[e.ready = 0] = "ready", e[e.unkown = 1] = "unkown", e[e.notReady = 2] = "notReady", e))(u || {});
const J = {
  state: u[u.unkown],
  color: "text-theme-default",
  icon: "warning"
}, Z = (e) => {
  let t = "";
  return e.some((n) => (t = n.message ?? "", n.type === "Ready" && n.status === "True")) ? {
    state: u[u.ready],
    color: "text-theme-accent",
    icon: "success",
    message: t
  } : e.some((n) => (t = n.message ?? "", n.type === "Ready" && n.status === "False")) ? {
    state: u[u.notReady],
    color: "text-theme-danger",
    icon: "danger",
    message: t
  } : J;
};
export {
  X as M,
  Y as P,
  Z as g,
  J as r
};
