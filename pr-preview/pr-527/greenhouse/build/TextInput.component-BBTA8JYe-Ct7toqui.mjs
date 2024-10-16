import { _ as ae, a as le, L as je, I as oe, y as g } from "./Shell-DTMmoMZV.mjs";
import { R as n, r as t } from "./index-Bjb47Pyo.mjs";
var fe = `
	jn-flex
	jn-items-center
	jn-bg-theme-background-lvl-1
	jn-py-3
	jn-px-6
	jn-mb-px
`, xe = `
	jn-ml-auto
`, Ie = function(e) {
  var c = e.search, r = e.className, s = r === void 0 ? "" : r, u = e.children, d = u === void 0 ? null : u, j = ae(e, ["search", "className", "children"]);
  return n.createElement("div", le({ className: "juno-datagrid-toolbar ".concat(fe, " ").concat(s) }, j), c && n.createElement("div", null, c), n.createElement("div", { className: xe }, d));
}, be = `
  jn-bg-theme-textinput
  jn-text-theme-textinput
  jn-border
  jn-text-base
  jn-leading-4
  jn-px-4
  jn-h-textinput
  jn-rounded-3px
  focus:jn-outline-none
  focus:jn-ring-2
  focus:jn-ring-theme-focus
  disabled:jn-opacity-50
  autofill:jn-bg-theme-textinput-autofill
  autofill:jn-text-theme-textinput-autofill
  peer
`, he = `
  jn-border-theme-textinput-default
`, ye = `
  jn-border-theme-error
`, ge = `
  jn-border-theme-success
`, Ee = `
  jn-pt-[1.125rem] 
  jn-pb-1
`, Ne = `
  jn-py-4
`, we = `
  jn-inline-block
  jn-relative
`, Se = `
  peer-autofill:jn-text-theme-textinput-autofill-label
  jn-pointer-events-none
  jn-top-2
  jn-left-[0.9375rem]
`, Ce = `
  jn-inline-flex
  jn-absolute
  jn-top-[.4rem]
  jn-right-3
`, Fe = `
  jn-opacity-50
`, E = `
  jn-mt-0
`, Le = function(e) {
  var c = e.value, r = c === void 0 ? "" : c, s = e.id, u = s === void 0 ? "" : s, d = e.name, j = d === void 0 ? void 0 : d, N = e.placeholder, w = N === void 0 ? "" : N, S = e.disabled, f = S !== void 0 && S, C = e.readOnly, F = e.required, k = e.invalid, _ = k !== void 0 && k, I = e.valid, L = I !== void 0 && I, q = e.autoFocus, B = e.className, ie = B === void 0 ? "" : B, O = e.autoComplete, ce = O === void 0 ? "off" : O, R = e.helptext, x = R === void 0 ? "" : R, T = e.successtext, a = T === void 0 ? "" : T, D = e.errortext, l = D === void 0 ? "" : D, M = e.onChange, z = M === void 0 ? void 0 : M, G = e.onFocus, H = G === void 0 ? void 0 : G, W = e.onBlur, A = W === void 0 ? void 0 : W, J = e.type, re = J === void 0 ? void 0 : J, K = e.label, m = K === void 0 ? void 0 : K, P = e.width, b = P === void 0 ? "full" : P, Q = e.wrapperClassName, se = Q === void 0 ? "" : Q, ue = ae(e, ["value", "id", "name", "placeholder", "disabled", "readOnly", "required", "invalid", "valid", "autoFocus", "className", "autoComplete", "helptext", "successtext", "errortext", "onChange", "onFocus", "onBlur", "type", "label", "width", "wrapperClassName"]), i = function(o) {
    return typeof o != "string" || o.trim().length !== 0;
  }, U = t.useRef(null), V = t.useState(""), h = V[0], X = V[1], Y = t.useState(!1), de = Y[0], y = Y[1], Z = t.useState(!1), v = Z[0], me = Z[1], $ = t.useState(!1), p = $[0], ve = $[1];
  t.useEffect(function() {
    document.hasFocus() && U.current.contains(document.activeElement) && y(!0);
  }, []), t.useEffect(function() {
    X(r);
  }, [r]);
  var ee = t.useMemo(function() {
    return _ || !!(l && i(l));
  }, [_, l]), ne = t.useMemo(function() {
    return L || !!(a && i(a));
  }, [L, a]);
  t.useEffect(function() {
    me(ee);
  }, [ee]), t.useEffect(function() {
    ve(ne);
  }, [ne]);
  var te = u || function() {
    return "juno-textinput-" + t.useId();
  }();
  return n.createElement("div", null, n.createElement("span", { className: `
          juno-textinput-wrapper 
          `.concat(we, `
          `).concat(b == "auto" ? "jn-inline-block" : "jn-block", `
          `).concat(b == "auto" ? "jn-w-auto" : "jn-w-full", `
          `).concat(se, `
          `) }, n.createElement("input", le({ type: re, name: j, autoComplete: ce, value: h, id: te, ref: U, placeholder: w, disabled: f, readOnly: C !== void 0 && C, autoFocus: q !== void 0 && q, onChange: function(o) {
    X(o.target.value), z && z(o);
  }, onFocus: function(o) {
    y(!0), H && H(o);
  }, onBlur: function(o) {
    y(!1), A && A(o);
  }, className: `juno-textinput 
            `.concat(be, `
            `).concat(m ? Ee : Ne, `
            `).concat(v ? "juno-textinput-invalid " + ye : "", ` 
            `).concat(p ? "juno-textinput-valid " + ge : "", `  
            `).concat(p || v ? "" : he, ` 
            `).concat(b == "auto" ? "jn-w-auto" : "jn-w-full", `
            `).concat(ie, `
          `) }, ue)), m && m.length ? n.createElement(je, { text: m, htmlFor: te, className: "".concat(Se), disabled: f, required: F !== void 0 && F, floating: !0, minimized: !!(w || de || h && i(h)) }) : "", n.createElement(function(o) {
    var pe = o.disabled;
    return p || v ? n.createElement("div", { className: "juno-textinput-row-icon-container ".concat(Ce, " ").concat(pe ? Fe : "") }, v ? n.createElement(oe, { icon: "dangerous", color: "jn-text-theme-error" }) : null, p ? n.createElement(oe, { icon: "checkCircle", color: "jn-text-theme-success" }) : null) : "";
  }, { disabled: f })), l && i(l) ? n.createElement(g, { text: l, variant: "error", className: "".concat(E) }) : "", a && i(a) ? n.createElement(g, { text: a, variant: "success", className: "".concat(E) }) : "", x && i(x) ? n.createElement(g, { text: x, className: "".concat(E) }) : "");
};
export {
  Ie as D,
  Le as T
};
