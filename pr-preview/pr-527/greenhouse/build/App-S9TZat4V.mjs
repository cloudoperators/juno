import { _ as x, a as v, I as J, K as ot, N as it, b as ct, c as lt, j as r, u as st, S as X, d as dt, e as mt, x as gt, A as wt, C as bt } from "./Shell-DTMmoMZV.mjs";
import { R as w, r as d } from "./index-Bjb47Pyo.mjs";
var pt = `
  jn-flex
  jn-flex-col
  jn-h-full
`, vt = function(t) {
  var e = t.className, n = e === void 0 ? "" : e, a = t.children, o = x(t, ["className", "children"]);
  return w.createElement("div", v({ className: "juno-body ".concat(pt, " ").concat(n) }, o), a);
}, ut = `
  jn-flex
  jn-grow
  jn-bg-theme-global-bg
`, xt = function(t) {
  var e = t.className, n = e === void 0 ? "" : e, a = t.children, o = a === void 0 ? null : a, c = x(t, ["className", "children"]);
  return w.createElement("main", v({ className: "juno-main ".concat(ut, " ").concat(n) }, c), o);
}, ht = `
  jn-flex
  jn-grow
`, ft = `
  2xl:jn-container
  2xl:jn-mx-auto
`, jt = `
  3xl:jn-container
  3xl:jn-mx-auto
`, yt = function(t) {
  var e = t.children, n = e === void 0 ? null : e, a = t.fullWidth, o = t.hasSideNav, c = t.className, l = c === void 0 ? "" : c, s = x(t, ["children", "fullWidth", "hasSideNav", "className"]);
  return w.createElement("div", v({ className: `
        juno-main-inner
         `.concat(ht, `
         `).concat(a !== void 0 && a ? "juno-main-inner-fullwidth" : o !== void 0 && o ? jt : ft, `
         `).concat(l) }, s), n);
}, kt = `
  jn-flex-col
  jn-grow
  jn-bg-[right_top_1rem]
  jn-bg-no-repeat
  jn-bg-theme-content-area-bg
  jn-relative
`, Nt = function(t) {
  var e = t.className, n = e === void 0 ? "" : e, a = t.children, o = a === void 0 ? null : a, c = x(t, ["className", "children"]);
  return w.createElement("div", v({ className: "juno-content-container ".concat(kt, " ").concat(n) }, c), o);
}, St = `
  jn-rounded
  jn-text-sm
  jn-text-theme-default
  jn-py-0.5
  jn-px-1
  jn-justify-center
  jn-items-center
`, q = { default: "jn-bg-theme-badge-default", info: "jn-bg-theme-info/25", success: "jn-bg-theme-success/25", warning: "jn-bg-theme-warning/25", danger: "jn-bg-theme-danger/25", error: "jn-bg-theme-error/25" }, Ct = "jn-mr-1 jn-items-center", It = function(t) {
  return q[t] || q.default;
}, At = function(t, e) {
  return typeof t == "string" && zt(t) ? t : t === !0 ? e : void 0;
}, Et = function(t, e) {
  return t === !0 ? "jn-text-theme-".concat(e) : void 0;
}, zt = function(t) {
  var e = new Set(Object.values(ot));
  return e.has(t);
}, Lt = function(t) {
  var e = t.variant, n = e === void 0 ? "default" : e, a = t.icon, o = a !== void 0 && a, c = t.text, l = c === void 0 ? "" : c, s = t.className, i = s === void 0 ? "" : s, m = t.children, g = m === void 0 ? null : m, u = x(t, ["variant", "icon", "text", "className", "children"]), b = At(o, n), j = Et(o, n);
  return w.createElement("span", v({ className: `
        juno-badge 
        juno-badge-`.concat(n, ` 
        `).concat(St, ` 
        `).concat(It(n), ` 
        `).concat(o ? "jn-inline-flex" : "", ` 
        `).concat(i) }, u), b && w.createElement(J, { icon: b, size: "1.125rem", className: Ct, color: j }), g || l);
}, _t = `
  jn-min-w-[7.5rem]
  jn-max-w-[20rem]
`, Pt = function(t) {
  var e = t.activeItem, n = e === void 0 ? "" : e, a = t.ariaLabel, o = t.children, c = o === void 0 ? null : o, l = t.className, s = l === void 0 ? "" : l, i = t.disabled, m = t.onActiveItemChange, g = x(t, ["activeItem", "ariaLabel", "children", "className", "disabled", "onActiveItemChange"]);
  return w.createElement(it, v({ activeItem: n, ariaLabel: a, className: "juno-sidenavigation ".concat(_t, " ").concat(s), disabled: i !== void 0 && i, onActiveItemChange: m }, g), c);
}, Y = `
  jn-flex
  jn-items-center
`, H = `
  jn-opacity-50
  jn-cursor-not-allowed
`, Tt = function(t) {
  var e = t.active, n = e !== void 0 && e, a = t.activeItemStyles, o = a === void 0 ? "" : a, c = t.ariaLabel, l = c === void 0 ? "" : c, s = t.children, i = s === void 0 ? null : s, m = t.className, g = m === void 0 ? "" : m, u = t.disabled, b = u !== void 0 && u, j = t.icon, y = j === void 0 ? null : j, N = t.inactiveItemStyles, E = N === void 0 ? "" : N, z = t.label, S = z === void 0 ? "" : z, K = t.href, P = K === void 0 ? "" : K, R = t.onClick, B = t.value, p = B === void 0 ? "" : B, V = t.wrapperClassName, nt = V === void 0 ? "" : V, D = x(t, ["active", "activeItemStyles", "ariaLabel", "children", "className", "disabled", "icon", "inactiveItemStyles", "label", "href", "onClick", "value", "wrapperClassName"]), at = function(A) {
    return typeof A != "string" || A.trim().length !== 0;
  }, h = d.useContext(ct), L = p || i || S, C = h || {}, _ = C.activeItem, F = C.addItem, T = C.handleActiveItemChange, I = C.navigationDisabled, k = C.navigationRole, rt = function() {
    return h != null && h.activeItem && at(h == null ? void 0 : h.activeItem) ? _ === L : n;
  }, G = d.useState(function() {
    return rt();
  }), f = G[0], W = G[1];
  d.useEffect(function() {
    F && F(L, i, S, p);
  }, [i, S, p]), d.useEffect(function() {
    return _ ? void W(_ === L) : void W(n);
  }, [_, n]);
  var U = function(A) {
    b ? A.preventDefault() : (!f && T && typeof T == "function" && T(L), R && R(A));
  };
  return w.createElement("li", { className: "juno-navigation-item-wrapper ".concat(nt) }, P && P.length ? w.createElement("a", v({ "aria-disabled": !!(I || b) || void 0, "aria-label": l && l.length ? l : void 0, "aria-selected": !!f || void 0, className: `
            juno-navigation-item 
            `.concat(Y, `
            `).concat(k ? "juno-" + k.toLowerCase() + "-item " + (f ? "juno-" + k.toLowerCase() + "-item-active" : "") : "", `
            `).concat(f ? "juno-navigation-item-active " + o : E, `
            `).concat(I || b ? "juno-navigation-item-disabled " + H : "", `
            `).concat(g), "data-value": p && p.length ? p : null, href: P, onClick: U }, D), y ? w.createElement(J, { icon: y, size: "18", className: "jn-mr-2" }) : "", i || S || p) : w.createElement("button", v({ "aria-disabled": !!(I || b) || void 0, "aria-label": l && l.length ? l : void 0, "aria-selected": !!f || void 0, className: `
            juno-navigation-item 
            `.concat(Y, `
            `).concat(k ? "juno-" + k.toLowerCase() + "-item " + (f ? "juno-" + k.toLowerCase() + "-item-active" : "") : "", `
            `).concat(f ? "juno-navigation-item-active " + o : E, `
            `).concat(I || b ? "juno-navigation-item-disabled " + H : "", `
            `).concat(g), "data-value": p && p.length ? p : null, disabled: I || b, onClick: U }, D), y ? w.createElement(J, { icon: y, size: "18", className: "jn-mr-2" }) : "", i || S || p));
}, Wt = `
  jn-flex
  jn-items-center
  jn-w-full
  jn-py-1.5
  jn-px-8
  jn-text-theme-default
  jn-font-bold
  jn-cursor-pointer
  focus-visible:jn-outline-none
  focus-visible:jn-ring-2
  focus-visible:jn-ring-theme-focus
`, Mt = `
  jn-font-bold
  jn-text-theme-sidenavigation-item-active
  jn-bg-theme-sidenavigation-item-active
`, Ot = function(t) {
  var e = t.active, n = t.ariaLabel, a = n === void 0 ? "" : n, o = t.children, c = t.className, l = c === void 0 ? "" : c, s = t.disabled, i = t.icon, m = i === void 0 ? null : i, g = t.label, u = g === void 0 ? "" : g, b = t.href, j = b === void 0 ? "" : b, y = t.onClick, N = t.value, E = N === void 0 ? "" : N, z = x(t, ["active", "ariaLabel", "children", "className", "disabled", "icon", "label", "href", "onClick", "value"]);
  return w.createElement(Tt, v({ active: e !== void 0 && e, activeItemStyles: Mt, ariaLabel: a, className: "juno-sidenavigation-item ".concat(Wt, " ").concat(l), disabled: s !== void 0 && s, icon: m, label: u, href: j, onClick: y, value: E }, z), o);
};
const Jt = () => lt((t) => ({
  active: "",
  actions: {
    setActive: (e) => t({ active: e })
  }
})), Z = d.createContext(), $t = ({ options: t, children: e }) => /* @__PURE__ */ r.jsx(Z.Provider, { value: Jt(), children: e }), tt = (t) => st(d.useContext(Z), t), $ = () => tt((t) => t.active), et = () => tt((t) => t.actions), Q = d.lazy(() => import("./App-CtPN8AqQ.mjs")), Kt = d.lazy(() => import("./App-DYIc5W0y.mjs")), Rt = d.lazy(() => import("./App-CgT2ItdQ.mjs")), Bt = d.lazy(() => import("./App-Bbs7nu7O.mjs")), Vt = ({ apiEndpoint: t, auth: e }) => {
  var o, c, l, s;
  const n = $();
  let a;
  switch (n) {
    case "clusters":
      a = Q;
      break;
    case "secrets":
      a = Kt;
      break;
    case "plugins":
      a = Rt;
      break;
    case "teams":
      a = Bt;
      break;
    default:
      a = Q;
  }
  return e != null && e.JWT ? /* @__PURE__ */ r.jsx(X, { children: /* @__PURE__ */ r.jsx(d.Suspense, { fallback: "Loading...", children: /* @__PURE__ */ r.jsx(
    a,
    {
      apiEndpoint: t,
      token: e == null ? void 0 : e.JWT,
      namespace: (c = (o = e == null ? void 0 : e.parsed) == null ? void 0 : o.organizations) == null ? void 0 : c[0],
      expires: e == null ? void 0 : e.parsed.expiresAt,
      userGroup: (s = (l = e == null ? void 0 : e.parsed) == null ? void 0 : l.teams) == null ? void 0 : s[0],
      embedded: !0
    }
  ) }) }) : /* @__PURE__ */ r.jsx("div", { children: "Authenticating" });
}, Dt = "*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}@media (min-width: 1856px){.container{max-width:1856px}}.isolate{isolation:isolate}.mx-4{margin-left:1rem;margin-right:1rem}.mx-6{margin-left:1.5rem;margin-right:1.5rem}.my-px{margin-top:1px;margin-bottom:1px}.mb-0{margin-bottom:0}.mb-2{margin-bottom:.5rem}.mb-3{margin-bottom:.75rem}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.mb-8{margin-bottom:2rem}.ml-2{margin-left:.5rem}.mr-3{margin-right:.75rem}.mt-3{margin-top:.75rem}.mt-4{margin-top:1rem}.mt-8{margin-top:2rem}.mt-auto{margin-top:auto}.inline{display:inline}.table{display:table}.grid{display:grid}.h-8{height:2rem}.h-full{height:100%}.h-screen{height:100vh}.w-64{width:16rem}.w-8{width:2rem}.w-full{width:100%}.cursor-pointer{cursor:pointer}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-\\[max-content_auto\\]{grid-template-columns:max-content auto}.grid-rows-\\[minmax\\(100vh\\,100\\%\\)\\]{grid-template-rows:minmax(100vh,100%)}.gap-4{gap:1rem}.break-all{word-break:break-all}.rounded{border-radius:.25rem}.rounded-full{border-radius:9999px}.border-y-2{border-top-width:2px;border-bottom-width:2px}.border-b-0{border-bottom-width:0}.border-l-4{border-left-width:4px}.border-theme-background-lvl-1{--tw-border-opacity: 1;border-color:rgba(var(--color-background-lvl-1-raw),var(--tw-border-opacity))}.bg-juno-grey-blue-11{--tw-bg-opacity: 1;background-color:rgba(var(--color-juno-grey-blue-11-raw),var(--tw-bg-opacity))}.bg-theme-accent\\/30{background-color:rgba(var(--color-accent-raw),.3)}.bg-theme-background-lvl-0{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-0-raw),var(--tw-bg-opacity))}.bg-theme-background-lvl-1{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-1-raw),var(--tw-bg-opacity))}.bg-theme-background-lvl-2{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-2-raw),var(--tw-bg-opacity))}.bg-theme-global-bg{--tw-bg-opacity: 1;background-color:rgba(var(--color-global-bg-raw),var(--tw-bg-opacity))}.bg-cover{background-size:cover}.fill-current{fill:currentColor}.p-8{padding:2rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-4{padding-left:1rem;padding-right:1rem}.py-0{padding-top:0;padding-bottom:0}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.pb-6{padding-bottom:1.5rem}.pl-4{padding-left:1rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.text-theme-accent{--tw-text-opacity: 1;color:rgba(var(--color-accent-raw),var(--tw-text-opacity))}.text-theme-danger{--tw-text-opacity: 1;color:rgba(var(--color-danger-raw),var(--tw-text-opacity))}.text-theme-default{--tw-text-opacity: 1;color:rgba(var(--color-text-default-raw),var(--tw-text-opacity))}.text-theme-disabled{--tw-text-opacity: 1;color:rgba(var(--color-text-disabled-raw),var(--tw-text-opacity))}.text-theme-high{--tw-text-opacity: 1;color:rgba(var(--color-text-high-raw),var(--tw-text-opacity))}.text-theme-info{--tw-text-opacity: 1;color:rgba(var(--color-info-raw),var(--tw-text-opacity))}.text-theme-light{--tw-text-opacity: 1;color:rgba(var(--color-text-light-raw),var(--tw-text-opacity))}.text-theme-link{--tw-text-opacity: 1;color:rgba(var(--color-text-link-raw),var(--tw-text-opacity))}.text-white{--tw-text-opacity: 1;color:rgba(var(--color-white-raw),var(--tw-text-opacity))}.text-opacity-50{--tw-text-opacity: .5}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.svg-bg-test{background:url(assets/juno-danger.svg)}.hover\\:bg-theme-background-lvl-2:hover{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-2-raw),var(--tw-bg-opacity))}.hover\\:text-theme-high:hover{--tw-text-opacity: 1;color:rgba(var(--color-text-high-raw),var(--tw-text-opacity))}.hover\\:text-white:hover{--tw-text-opacity: 1;color:rgba(var(--color-white-raw),var(--tw-text-opacity))}", Ft = ({ apiEndpoint: t, auth: e }) => {
  var s;
  const [n, a] = d.useState(null), { addMessage: o } = dt(), c = d.useMemo(() => {
    var m, g;
    if (!((m = e == null ? void 0 : e.raw) != null && m.groups)) return null;
    const i = (g = e == null ? void 0 : e.raw) == null ? void 0 : g.groups.find((u) => u.indexOf("organization:") === 0);
    return i ? i.split(":")[1] : null;
  }, [(s = e == null ? void 0 : e.raw) == null ? void 0 : s.groups]), l = d.useMemo(() => !t || !(e != null && e.JWT) ? null : mt({ apiEndpoint: t, token: e == null ? void 0 : e.JWT }), [t, e == null ? void 0 : e.JWT]);
  return d.useEffect(() => {
    !l || !c || l.get(`/apis/greenhouse.sap/v1alpha1/organizations/${c}`).then((i) => {
      var m, g;
      a({
        name: (m = i == null ? void 0 : i.spec) == null ? void 0 : m.displayName,
        description: (g = i == null ? void 0 : i.spec) == null ? void 0 : g.description
      });
    }).catch((i) => {
      o({
        variant: "error",
        text: `Failed to fetch organization info. ${i.message}`
      });
    });
  }, [l, c]), /* @__PURE__ */ r.jsxs("div", { className: "org-info p-8 mb-8 bg-theme-background-lvl-0", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "org-name", children: [
      /* @__PURE__ */ r.jsx("p", { className: "text-xs", children: "Organization" }),
      (n == null ? void 0 : n.name) && /* @__PURE__ */ r.jsx("h1", { className: "text-xl font-bold", children: n == null ? void 0 : n.name }),
      !(n != null && n.name) && /* @__PURE__ */ r.jsx("h1", { className: "text-xl font-bold", children: "Loading..." })
    ] }),
    (n == null ? void 0 : n.description) && /* @__PURE__ */ r.jsx("p", { className: "org-description", children: n == null ? void 0 : n.description }),
    !(n != null && n.name) && /* @__PURE__ */ r.jsx("p", { className: "org-description" })
  ] });
}, Gt = [
  { name: "clusters", label: "Clusters" },
  { name: "teams", label: "Teams" },
  { name: "plugins", label: "Plugins", beta: !0 },
  { name: "secrets", label: "Secrets", beta: !0 }
], Ut = () => {
  const t = $(), { setActive: e } = et();
  return /* @__PURE__ */ r.jsx(Pt, { children: Gt.map((n, a) => /* @__PURE__ */ r.jsxs(Ot, { active: n.name === t, onClick: () => e(n.name), children: [
    n.label,
    " ",
    n.beta && /* @__PURE__ */ r.jsx(Lt, { text: "beta", variant: "info" })
  ] }, a)) });
}, qt = "greenhouse-org-admin", M = "a", O = gt(qt), Yt = () => {
  const { setActive: t } = et(), e = $();
  d.useLayoutEffect(() => {
    var a;
    let n = (a = O.currentState()) == null ? void 0 : a[M];
    n && t(n);
  }, []), d.useEffect(() => {
    var n;
    ((n = O.currentState()) == null ? void 0 : n[M]) !== e && O.push({ [M]: e });
  }, [e]);
}, Ht = () => (Yt(), null), Qt = (t = {}) => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
  /* @__PURE__ */ r.jsx(Ht, {}),
  /* @__PURE__ */ r.jsxs(vt, { "data-testid": "greenhouse-org-admin", children: [
    /* @__PURE__ */ r.jsx(bt, { className: "mb-4" }),
    /* @__PURE__ */ r.jsx(Ft, { auth: t.auth, apiEndpoint: t.apiEndpoint }),
    /* @__PURE__ */ r.jsx(xt, { children: /* @__PURE__ */ r.jsxs(yt, { fullWidth: !0, children: [
      /* @__PURE__ */ r.jsx(Ut, {}),
      /* @__PURE__ */ r.jsx(Nt, { children: /* @__PURE__ */ r.jsx(Vt, { ...t }) })
    ] }) })
  ] })
] }), Xt = (t) => /* @__PURE__ */ r.jsxs(wt, { theme: `${t.theme ? t.theme : "theme-dark"}`, children: [
  /* @__PURE__ */ r.jsx("style", { children: Dt.toString() }),
  /* @__PURE__ */ r.jsx(X, { children: /* @__PURE__ */ r.jsx($t, { options: t, children: /* @__PURE__ */ r.jsx(Qt, { ...t }) }) })
] }), ee = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xt
}, Symbol.toStringTag, { value: "Module" }));
export {
  vt as A,
  Nt as C,
  xt as M,
  yt as a,
  ee as b
};
