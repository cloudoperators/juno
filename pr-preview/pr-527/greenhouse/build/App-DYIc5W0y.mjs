import { c as B, v as V, j as o, f as K, F, i as E, B as S, r as P, p as j, e as W, d as z, C as R, P as G, n as U, D as H, h as C, o as q, m as Y, g as $, S as L, x as J, A as Q } from "./Shell-DTMmoMZV.mjs";
import { r as b } from "./index-Bjb47Pyo.mjs";
import { C as O, A as X } from "./Container.component-B8M3UgGG-DiQmRU9u.mjs";
import { T as v, D as Z } from "./TextInput.component-BBTA8JYe-Ct7toqui.mjs";
import { T as tt } from "./Textarea.component-Bn-CfmYI-C-BGXNLB.mjs";
const et = (t) => ({
  globals: {
    urlStateKey: "",
    apiEndpoint: null,
    loggedIn: !1,
    authData: null,
    actions: {
      setUrlStateKey: (e) => t((a) => ({
        globals: { ...a.globals, urlStateKey: e }
      })),
      setLoggedIn: (e) => t((a) => ({
        globals: { ...a.globals, loggedIn: e }
      })),
      setAuthData: (e) => t((a) => ({ globals: { ...a.globals, authData: e } })),
      setEndpoint: (e) => t((a) => ({
        globals: { ...a.globals, apiEndpoint: e }
      }))
    }
  }
}), at = () => B(
  V((t, e) => ({
    ...et(t)
  }))
), rt = b.createContext(), ot = ({ children: t }) => /* @__PURE__ */ o.jsx(rt.Provider, { value: at(), children: t }), d = K((t) => ({
  endpoint: "",
  token: "",
  namespace: "",
  initialize: (e, a, n) => t((l) => ({ endpoint: e, token: a, namespace: n })),
  urlStateKey: "secret-admin",
  setUrlStateKey: (e) => t((a) => ({ urlStateKey: e })),
  secrets: [],
  modifySecrets: (e) => t((a) => {
    let n = [...a.secrets];
    return e.forEach((l) => {
      const i = n.findIndex((w) => w.metadata.name === l.metadata.name);
      i >= 0 ? n[i] = l : n.push(l);
    }), { ...a, secrets: n };
  }),
  deleteSecrets: (e) => t((a) => ({ secrets: a.secrets.filter((l) => !e.some((i) => l.metadata.name === i.metadata.name)) })),
  secretDetail: void 0,
  setSecretDetail: (e) => t((a) => ({ secretDetail: e })),
  showSecretEdit: !1,
  setShowSecretEdit: (e) => t((a) => ({ showSecretEdit: e })),
  isSecretEditMode: !1,
  setIsSecretEditMode: (e) => t((a) => ({ isSecretEditMode: e }))
})), I = (t) => {
  const e = t.dataName ? t.dataName : "Data", a = t.isSecret ? t.isSecret : !1, n = (w, s) => {
    let p = w.split("."), x = p[0], c = p[1];
    switch (x) {
      case "dataKey":
        let r = { ...t.data }, g = r[c];
        delete r[c], r[s] = g, t.setData(r);
        break;
      case "dataValue":
        t.mutateValue && (s = t.mutateValue(s)), t.setData({
          ...t.data,
          [c]: s
        });
        break;
      default:
        console.log("keyIdentifier not found");
        break;
    }
  }, l = (w) => {
    let s = { ...t.data };
    delete s[w], t.setData(s);
  }, i = () => {
    t.setData({
      ...t.data,
      "": ""
    });
  };
  return /* @__PURE__ */ o.jsxs(F, { title: t.title, children: [
    t.data && Object.keys(t.data).length > 0 && Object.keys(t.data).map((w) => /* @__PURE__ */ o.jsxs(E, { distribution: "evenly", children: [
      /* @__PURE__ */ o.jsx(
        v,
        {
          id: "dataKey." + w,
          label: `${e} Key`,
          value: w,
          onBlur: (s) => n("dataKey." + w, s.target.value)
        }
      ),
      /* @__PURE__ */ o.jsx(
        tt,
        {
          id: "dataValue" + w,
          type: a ? "password" : "text",
          label: `${e} Value`,
          value: t.data[w],
          onBlur: (s) => n("dataValue." + w, s.target.value)
        }
      ),
      /* @__PURE__ */ o.jsx(S, { icon: "deleteForever", onClick: () => l(w) })
    ] }, w)),
    /* @__PURE__ */ o.jsx(S, { icon: "addCircle", label: `Add ${e}`, onClick: i })
  ] });
}, nt = () => {
  const t = d((s) => s.setSecretDetail), e = d((s) => s.secretDetail), a = d((s) => s.isSecretEditMode), n = (s) => {
    t({
      ...e,
      metadata: {
        ...e == null ? void 0 : e.metadata,
        name: s
      }
    });
  }, l = (s) => {
    t({
      ...e,
      type: s
    });
  }, i = (s) => {
    t({
      ...e,
      data: s
    });
  }, w = (s) => {
    t({
      ...e,
      metadata: {
        ...e == null ? void 0 : e.metadata,
        labels: s
      }
    });
  };
  return /* @__PURE__ */ o.jsxs(P, { children: [
    /* @__PURE__ */ o.jsxs(F, { title: "General", children: [
      /* @__PURE__ */ o.jsx(j, { children: /* @__PURE__ */ o.jsx(
        v,
        {
          id: "name",
          label: "Name",
          placeholder: "Name of this secret",
          ...a && { disabled: !0 },
          value: e == null ? void 0 : e.metadata.name,
          onBlur: (s) => n(s.target.value)
        }
      ) }),
      /* @__PURE__ */ o.jsx(j, { children: /* @__PURE__ */ o.jsx(
        v,
        {
          id: "type",
          label: "Type",
          placeholder: 'Type of this secret, leave empty for default "Opaque" type',
          ...a && { disabled: !0 },
          value: e == null ? void 0 : e.type,
          onBlur: (s) => l(s.target.value)
        }
      ) })
    ] }),
    /* @__PURE__ */ o.jsx(
      I,
      {
        title: "Labels",
        dataName: "Label",
        data: e.metadata.labels,
        setData: w
      }
    ),
    /* @__PURE__ */ o.jsx(I, { title: "Data", data: e.data, setData: i, isSecret: !0 })
  ] });
}, st = () => {
  const t = d((n) => n.endpoint), e = d((n) => n.token);
  return {
    client: t && e ? W({ apiEndpoint: t, token: e }) : null
  };
}, it = (t) => {
  const e = d((c) => c.namespace), { client: a } = st(), n = b.useCallback(
    async (c, r, g) => !a || !e ? { ok: !1, message: "Client or namespace not available" } : await a.get(c + "/" + r.metadata.name, {
      params: g
    }).then((m) => m.kind !== r.kind ? {
      ok: !1,
      message: `Failed getting ${r.kind}`,
      response: m
    } : {
      ok: !0,
      response: m,
      message: `Successfully got ${r.kind}`
    }).catch((m) => ({
      ok: !1,
      message: `Failed getting ${r.kind}: ${m}`
    })),
    [a, e]
  ), l = b.useCallback(
    async (c, r) => !a || !e ? { ok: !1, message: "Client or namespace not available" } : await a.post(c, r).then((g) => g.kind !== r.kind ? { ok: !1, message: `Failed creating ${r.kind}` } : {
      ok: !0,
      response: g,
      message: `Successfully created ${r.kind}`
    }).catch((g) => ({
      ok: !1,
      message: `Failed creating ${r.kind}: ${g}`
    })),
    [a, e]
  ), i = b.useCallback(
    async (c, r) => !a || !e ? { ok: !1, message: "Client or namespace not available" } : await a.put(c + "/" + r.metadata.name, r).then((g) => g.kind !== r.kind ? { ok: !1, message: `Failed updating ${r.kind}` } : {
      ok: !0,
      response: g,
      message: `Successfully updated ${r.kind}`
    }).catch((g) => ({
      ok: !1,
      message: `Failed updating ${r.kind}: ${g}`
    })),
    [a, e]
  ), w = b.useCallback(
    async (c, r, g) => !a || !e ? { ok: !1, message: "Client or namespace not available" } : await a.delete(c + "/" + r.metadata.name, {
      params: g
    }).then((m) => m.kind == r.kind || m.kind == "Status" && m.status == "Success" ? { ok: !0, message: `Successfully deleted ${r.kind}` } : { ok: !1, message: `Failed deleting ${r.kind}` }).catch((m) => ({
      ok: !1,
      message: `Failed deleting ${r.kind}: ${m}`
    })),
    [a, e]
  ), s = b.useCallback(
    async (c, r, g, m, u, f) => !a || !e ? (console.log(
      "Cannot initialize watch: client or namespace not available, waiting for client or namespace to become available"
    ), { ok: !1, message: "Client or namespace not available" }) : x(c, r).then((k) => k.ok ? (a.watch(c, {
      params: f
    }).on(a.WATCH_ERROR, () => {
      console.log("ERROR: Failed to watch resource");
    }).on(a.WATCH_ADDED, (h) => {
      console.log(`added ${h}`), p(h, r), g(h);
    }).on(a.WATCH_MODIFIED, (h) => {
      console.log(`modified ${h}`), p(h, r), m(h);
    }).on(a.WATCH_DELETED, (h) => {
      console.log(`deleted ${h}`), p(h, r), u(h);
    }).start(), { ok: !0, message: `Successfully watching ${r}s` }) : {
      ok: !1,
      message: `Cannot initialize watch for ${r}: ${k.message}`,
      status: 403
    }),
    [a, e]
  ), p = (c, r) => {
    c.forEach((g) => {
      g.kind = r;
    });
  }, x = b.useCallback(
    async (c, r) => {
      var u;
      let m = await n(c, { metadata: { name: "" }, kind: r });
      return ((u = m.response) == null ? void 0 : u.kind) == `${r}List` ? { ok: !0, message: "" } : { ok: m.ok, message: m.message };
    },
    [a, e]
  );
  return {
    get: n,
    create: l,
    update: i,
    deleteObject: w,
    watch: s
  };
}, N = () => {
  const { get: t, create: e, update: a, deleteObject: n, watch: l } = it(), i = d((u) => u.namespace), w = d((u) => u.modifySecrets), s = d((u) => u.deleteSecrets);
  return {
    getSecret: (u) => t(`/api/v1/namespaces/${i}/secrets`, u),
    createSecret: (u) => e(`/api/v1/namespaces/${i}/secrets`, u),
    updateSecret: (u) => a(`/api/v1/namespaces/${i}/secrets`, u),
    deleteSecret: (u) => n(`/api/v1/namespaces/${i}/secrets`, u),
    watchSecrets: () => l(
      `/api/v1/namespaces/${i}/secrets`,
      "Secret",
      w,
      w,
      s
    ),
    watchSecretsWithoutHelm: () => {
      const D = { fieldSelector: "type!=helm.sh/release.v1" };
      return l(
        `/api/v1/namespaces/${i}/secrets`,
        "Secret",
        w,
        w,
        s,
        D
      );
    }
  };
}, ct = () => ({
  kind: "Secret",
  metadata: {
    name: "",
    namespace: ""
  },
  data: {}
}), lt = (t) => {
  if (t.data) {
    let e = {};
    Object.keys(t.data).forEach((a) => {
      e[a] = btoa(t.data[a]);
    }), t.data = e;
  }
  return t;
}, _ = (t) => {
  if (t.data) {
    let e = {};
    Object.keys(t.data).forEach((a) => {
      e[a] = atob(t.data[a]);
    }), t.data = e;
  }
  return t;
}, dt = () => {
  const { createSecret: t, updateSecret: e, deleteSecret: a } = N(), n = d((r) => r.secretDetail), l = d((r) => r.isSecretEditMode), i = d((r) => r.setShowSecretEdit), w = d((r) => r.setSecretDetail), s = d((r) => r.setIsSecretEditMode), { addMessage: p } = z(), x = async () => {
    let r = await a(n);
    p({
      variant: r.ok ? "success" : "error",
      text: r.message
    }), r.ok && setTimeout(() => {
      i(!1), w(void 0), s(!1);
    }, 3e3);
  }, c = () => {
    let r = lt(n);
    (l ? e(r) : t(r)).then(async (m) => {
      p({
        variant: m.ok ? "success" : "error",
        text: m.message
      }), m.ok && (s(!0), m.response && w(_(m.response)));
    });
  };
  return /* @__PURE__ */ o.jsxs(E, { distribution: "between", children: [
    /* @__PURE__ */ o.jsx(S, { onClick: x, variant: "primary-danger", children: "Delete Secret" }),
    /* @__PURE__ */ o.jsx(S, { onClick: c, variant: "primary", children: l ? "Update Secret" : "Create Secret" })
  ] });
}, wt = () => /* @__PURE__ */ o.jsx(R, {}), mt = () => {
  const t = d((i) => i.showSecretEdit), e = d((i) => i.setShowSecretEdit), a = d((i) => i.setSecretDetail), n = d((i) => i.setIsSecretEditMode), l = () => {
    e(!1), a(void 0), n(!1);
  };
  return /* @__PURE__ */ o.jsx(
    G,
    {
      heading: /* @__PURE__ */ o.jsx(E, { gap: "2", children: /* @__PURE__ */ o.jsx("span", { children: "Edit Secret" }) }),
      opened: !!t,
      onClose: l,
      size: "large",
      children: /* @__PURE__ */ o.jsxs(U, { children: [
        /* @__PURE__ */ o.jsx(wt, {}),
        /* @__PURE__ */ o.jsx(nt, {}),
        /* @__PURE__ */ o.jsx(dt, {})
      ] })
    }
  );
}, gt = (t) => {
  const e = d((i) => i.setSecretDetail), a = d((i) => i.setShowSecretEdit), n = d((i) => i.setIsSecretEditMode), l = () => {
    let i = _(t.secret);
    e(i), n(!0), a(!0);
  };
  return /* @__PURE__ */ o.jsxs(H, { className: "cursor-pointer", onClick: l, children: [
    /* @__PURE__ */ o.jsx(C, { children: t.secret.metadata.name }),
    /* @__PURE__ */ o.jsx(C, { children: t.secret.data ? Object.keys(t.secret.data).join(", ") : "No keys found" })
  ] });
}, ut = () => {
  const t = d((l) => l.setShowSecretEdit), e = d((l) => l.setSecretDetail), a = () => {
    t(!0), e(ct());
  }, n = d((l) => l.secrets);
  return /* @__PURE__ */ o.jsx(o.Fragment, { children: /* @__PURE__ */ o.jsxs(O, { children: [
    /* @__PURE__ */ o.jsx(Z, { children: /* @__PURE__ */ o.jsx(q, { children: /* @__PURE__ */ o.jsx(S, { icon: "addCircle", label: "Add Secret", onClick: a }) }) }),
    /* @__PURE__ */ o.jsxs(Y, { columns: 2, className: "secrets", children: [
      /* @__PURE__ */ o.jsxs(H, { children: [
        /* @__PURE__ */ o.jsx($, { children: "Name" }),
        /* @__PURE__ */ o.jsx($, { children: "Keys" })
      ] }),
      n.map((l) => /* @__PURE__ */ o.jsx(gt, { secret: l }, l.metadata.name))
    ] }),
    /* @__PURE__ */ o.jsx(R, {})
  ] }) });
}, pt = () => {
  const t = d((e) => e.showSecretEdit);
  return /* @__PURE__ */ o.jsxs(O, { children: [
    /* @__PURE__ */ o.jsx(ut, {}),
    t && /* @__PURE__ */ o.jsx(L, { children: /* @__PURE__ */ o.jsx(mt, {}) })
  ] });
}, ht = "*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}@media (min-width: 1856px){.container{max-width:1856px}}.isolate{isolation:isolate}.mx-4{margin-left:1rem;margin-right:1rem}.mx-6{margin-left:1.5rem;margin-right:1.5rem}.my-px{margin-top:1px;margin-bottom:1px}.mb-0{margin-bottom:0}.mb-2{margin-bottom:.5rem}.mb-3{margin-bottom:.75rem}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.mb-8{margin-bottom:2rem}.ml-2{margin-left:.5rem}.mr-3{margin-right:.75rem}.mt-3{margin-top:.75rem}.mt-4{margin-top:1rem}.mt-8{margin-top:2rem}.mt-auto{margin-top:auto}.inline{display:inline}.table{display:table}.grid{display:grid}.h-8{height:2rem}.h-full{height:100%}.h-screen{height:100vh}.w-64{width:16rem}.w-8{width:2rem}.w-full{width:100%}.cursor-pointer{cursor:pointer}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-\\[max-content_auto\\]{grid-template-columns:max-content auto}.grid-rows-\\[minmax\\(100vh\\,100\\%\\)\\]{grid-template-rows:minmax(100vh,100%)}.gap-4{gap:1rem}.break-all{word-break:break-all}.rounded{border-radius:.25rem}.rounded-full{border-radius:9999px}.border-y-2{border-top-width:2px;border-bottom-width:2px}.border-b-0{border-bottom-width:0}.border-l-4{border-left-width:4px}.border-theme-background-lvl-1{--tw-border-opacity: 1;border-color:rgba(var(--color-background-lvl-1-raw),var(--tw-border-opacity))}.bg-juno-grey-blue-11{--tw-bg-opacity: 1;background-color:rgba(var(--color-juno-grey-blue-11-raw),var(--tw-bg-opacity))}.bg-theme-accent\\/30{background-color:rgba(var(--color-accent-raw),.3)}.bg-theme-background-lvl-0{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-0-raw),var(--tw-bg-opacity))}.bg-theme-background-lvl-1{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-1-raw),var(--tw-bg-opacity))}.bg-theme-background-lvl-2{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-2-raw),var(--tw-bg-opacity))}.bg-theme-global-bg{--tw-bg-opacity: 1;background-color:rgba(var(--color-global-bg-raw),var(--tw-bg-opacity))}.bg-cover{background-size:cover}.fill-current{fill:currentColor}.p-8{padding:2rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-4{padding-left:1rem;padding-right:1rem}.py-0{padding-top:0;padding-bottom:0}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.pb-6{padding-bottom:1.5rem}.pl-4{padding-left:1rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.text-theme-accent{--tw-text-opacity: 1;color:rgba(var(--color-accent-raw),var(--tw-text-opacity))}.text-theme-danger{--tw-text-opacity: 1;color:rgba(var(--color-danger-raw),var(--tw-text-opacity))}.text-theme-default{--tw-text-opacity: 1;color:rgba(var(--color-text-default-raw),var(--tw-text-opacity))}.text-theme-disabled{--tw-text-opacity: 1;color:rgba(var(--color-text-disabled-raw),var(--tw-text-opacity))}.text-theme-high{--tw-text-opacity: 1;color:rgba(var(--color-text-high-raw),var(--tw-text-opacity))}.text-theme-info{--tw-text-opacity: 1;color:rgba(var(--color-info-raw),var(--tw-text-opacity))}.text-theme-light{--tw-text-opacity: 1;color:rgba(var(--color-text-light-raw),var(--tw-text-opacity))}.text-theme-link{--tw-text-opacity: 1;color:rgba(var(--color-text-link-raw),var(--tw-text-opacity))}.text-white{--tw-text-opacity: 1;color:rgba(var(--color-white-raw),var(--tw-text-opacity))}.text-opacity-50{--tw-text-opacity: .5}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.plugins .juno-datagrid-row:hover .juno-datagrid-cell{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-1-raw),var(--tw-bg-opacity))}.plugins .juno-datagrid-row.active .juno-datagrid-cell{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-2-raw),var(--tw-bg-opacity))}.filtered{filter:grayscale(100%)}.markdown-body{background-color:transparent!important}.hover\\:bg-theme-background-lvl-2:hover{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-2-raw),var(--tw-bg-opacity))}.hover\\:text-theme-high:hover{--tw-text-opacity: 1;color:rgba(var(--color-text-high-raw),var(--tw-text-opacity))}.hover\\:text-white:hover{--tw-text-opacity: 1;color:rgba(var(--color-white-raw),var(--tw-text-opacity))}", y = "greenhouse-secrets-admin", M = "sd", T = "sse", A = "isem", bt = (t) => {
  const [e, a] = b.useState(!1), n = J(t || y), l = d((c) => c.showSecretEdit), i = d((c) => c.setShowSecretEdit), w = d((c) => c.secretDetail), s = d((c) => c.setSecretDetail), p = d((c) => c.isSecretEditMode), x = d((c) => c.setIsSecretEditMode);
  b.useEffect(() => {
    var m, u, f;
    if (e) return;
    console.log(`${y}: (${t || y}) setting up state from url:`, n.currentState());
    const c = (m = n.currentState()) == null ? void 0 : m[T], r = (u = n.currentState()) == null ? void 0 : u[M], g = (f = n.currentState()) == null ? void 0 : f[A];
    c && i(c), r && s(r), g && x(g), a(!0);
  }, [i]), b.useEffect(() => {
    e && n.push({
      [T]: l,
      [M]: w,
      [A]: p
    });
  }, [l]);
}, xt = (t) => {
  bt(t.consumerId);
  const { addMessage: e } = z(), { watchSecretsWithoutHelm: a } = N();
  return b.useEffect(() => {
    a().then((n) => {
      n.ok || n.message && n.status == 403 && e({
        variant: "error",
        text: n.message
      });
    });
  }, []), null;
}, ft = (t = {}) => (d((a) => a.initialize)(t.apiEndpoint, t.token, t.namespace), /* @__PURE__ */ o.jsx(L, { children: /* @__PURE__ */ o.jsxs(X, { pageHeader: "Converged Cloud | Secrets", embedded: t.embedded === "true" || t.embedded === !0, children: [
  /* @__PURE__ */ o.jsx(xt, {}),
  /* @__PURE__ */ o.jsx(pt, { props: t })
] }) })), Dt = (t) => /* @__PURE__ */ o.jsxs(Q, { theme: `${t.theme ? t.theme : "theme-dark"}`, children: [
  /* @__PURE__ */ o.jsx("style", { children: ht.toString() }),
  /* @__PURE__ */ o.jsx(ot, { children: /* @__PURE__ */ o.jsx(ft, { ...t }) })
] });
export {
  Dt as default
};
