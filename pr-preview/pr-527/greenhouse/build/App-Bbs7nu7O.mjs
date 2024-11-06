import { c as $t, j as f, u as Tt, e as jt, d as ot, D as W, h as D, m as St, g as U, i as At, z as Ot, E as Nt, C as Et, x as Ct, A as Pt, S as kt } from "./Shell-DTMmoMZV.mjs";
import { r as T, d as K, g as It, R as E } from "./index-Bjb47Pyo.mjs";
import { C as Dt, A as Lt } from "./Container.component-B8M3UgGG-DiQmRU9u.mjs";
const Rt = () => $t((t, r) => ({
  endpoint: "",
  namespace: "",
  token: "",
  currentTeam: "",
  defaultTeam: "",
  teamMemberships: [],
  namespace: "",
  isMock: !1,
  actions: {
    initialize: (a, n, i, o) => t({ endpoint: a, namespace: i, token: n, currentTeam: o }),
    setCurrentTeam: (a) => t({ currentTeam: a }),
    setTeamMemberships: (a) => {
      var i, o;
      let n = r().currentTeam;
      (n === "" || n === void 0 || n === null) && (n = (o = (i = a == null ? void 0 : a[0]) == null ? void 0 : i.metadata) == null ? void 0 : o.name), t({ teamMemberships: a, currentTeam: n });
    },
    setMock: (a) => t({ isMock: a })
  }
})), it = T.createContext(), Mt = ({ children: t }) => /* @__PURE__ */ f.jsx(it.Provider, { value: Rt(), children: t }), C = (t) => Tt(T.useContext(it), t), st = () => C((t) => t.endpoint), Gt = () => C((t) => t.namespace), zt = () => C((t) => t.token), Ht = () => C((t) => t.isMock), _e = () => C((t) => t.currentTeam), ct = () => C((t) => t.defaultTeam), Q = () => C((t) => t.teamMemberships), ee = () => C((t) => t.actions), Ft = () => {
  const t = st(), r = zt();
  return { client: t && r ? jt({ apiEndpoint: t, token: r }) : null };
}, me = (t) => {
  let r = t;
  return typeof t == "string" && (r = Oe(t)), typeof t == "object" && (console.log("Error parsing error message::object"), t != null && t.message && (r = Oe(t == null ? void 0 : t.message))), r;
}, Oe = (t) => {
  let r = t;
  try {
    r = JSON.parse(t), r != null && r.message && (r = (r != null && r.code ? `${r.code}, ` : "") + (r == null ? void 0 : r.message));
  } catch (a) {
    console.error(a);
  }
  return r;
};
function Bt() {
  this.__data__ = [], this.size = 0;
}
var Ut = Bt;
function Kt(t, r) {
  return t === r || t !== t && r !== r;
}
var lt = Kt, qt = lt;
function Wt(t, r) {
  for (var a = t.length; a--; )
    if (qt(t[a][0], r))
      return a;
  return -1;
}
var te = Wt, Jt = te, Vt = Array.prototype, Xt = Vt.splice;
function Yt(t) {
  var r = this.__data__, a = Jt(r, t);
  if (a < 0)
    return !1;
  var n = r.length - 1;
  return a == n ? r.pop() : Xt.call(r, a, 1), --this.size, !0;
}
var Zt = Yt, Qt = te;
function er(t) {
  var r = this.__data__, a = Qt(r, t);
  return a < 0 ? void 0 : r[a][1];
}
var tr = er, rr = te;
function ar(t) {
  return rr(this.__data__, t) > -1;
}
var nr = ar, or = te;
function ir(t, r) {
  var a = this.__data__, n = or(a, t);
  return n < 0 ? (++this.size, a.push([t, r])) : a[n][1] = r, this;
}
var sr = ir, cr = Ut, lr = Zt, ur = tr, dr = nr, fr = sr;
function L(t) {
  var r = -1, a = t == null ? 0 : t.length;
  for (this.clear(); ++r < a; ) {
    var n = t[r];
    this.set(n[0], n[1]);
  }
}
L.prototype.clear = cr;
L.prototype.delete = lr;
L.prototype.get = ur;
L.prototype.has = dr;
L.prototype.set = fr;
var re = L, pr = re;
function mr() {
  this.__data__ = new pr(), this.size = 0;
}
var vr = mr;
function gr(t) {
  var r = this.__data__, a = r.delete(t);
  return this.size = r.size, a;
}
var hr = gr;
function wr(t) {
  return this.__data__.get(t);
}
var br = wr;
function yr(t) {
  return this.__data__.has(t);
}
var xr = yr, _r = typeof K == "object" && K && K.Object === Object && K, ut = _r, $r = ut, Tr = typeof self == "object" && self && self.Object === Object && self, jr = $r || Tr || Function("return this")(), N = jr, Sr = N, Ar = Sr.Symbol, $e = Ar, Ne = $e, dt = Object.prototype, Or = dt.hasOwnProperty, Nr = dt.toString, B = Ne ? Ne.toStringTag : void 0;
function Er(t) {
  var r = Or.call(t, B), a = t[B];
  try {
    t[B] = void 0;
    var n = !0;
  } catch {
  }
  var i = Nr.call(t);
  return n && (r ? t[B] = a : delete t[B]), i;
}
var Cr = Er, Pr = Object.prototype, kr = Pr.toString;
function Ir(t) {
  return kr.call(t);
}
var Dr = Ir, Ee = $e, Lr = Cr, Rr = Dr, Mr = "[object Null]", Gr = "[object Undefined]", Ce = Ee ? Ee.toStringTag : void 0;
function zr(t) {
  return t == null ? t === void 0 ? Gr : Mr : Ce && Ce in Object(t) ? Lr(t) : Rr(t);
}
var ae = zr;
function Hr(t) {
  var r = typeof t;
  return t != null && (r == "object" || r == "function");
}
var ft = Hr, Fr = ae, Br = ft, Ur = "[object AsyncFunction]", Kr = "[object Function]", qr = "[object GeneratorFunction]", Wr = "[object Proxy]";
function Jr(t) {
  if (!Br(t))
    return !1;
  var r = Fr(t);
  return r == Kr || r == qr || r == Ur || r == Wr;
}
var pt = Jr, Vr = N, Xr = Vr["__core-js_shared__"], Yr = Xr, se = Yr, Pe = function() {
  var t = /[^.]+$/.exec(se && se.keys && se.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Zr(t) {
  return !!Pe && Pe in t;
}
var Qr = Zr, ea = Function.prototype, ta = ea.toString;
function ra(t) {
  if (t != null) {
    try {
      return ta.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var mt = ra, aa = pt, na = Qr, oa = ft, ia = mt, sa = /[\\^$.*+?()[\]{}|]/g, ca = /^\[object .+?Constructor\]$/, la = Function.prototype, ua = Object.prototype, da = la.toString, fa = ua.hasOwnProperty, pa = RegExp(
  "^" + da.call(fa).replace(sa, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ma(t) {
  if (!oa(t) || na(t))
    return !1;
  var r = aa(t) ? pa : ca;
  return r.test(ia(t));
}
var va = ma;
function ga(t, r) {
  return t == null ? void 0 : t[r];
}
var ha = ga, wa = va, ba = ha;
function ya(t, r) {
  var a = ba(t, r);
  return wa(a) ? a : void 0;
}
var R = ya, xa = R, _a = N, $a = xa(_a, "Map"), Te = $a, Ta = R, ja = Ta(Object, "create"), ne = ja, ke = ne;
function Sa() {
  this.__data__ = ke ? ke(null) : {}, this.size = 0;
}
var Aa = Sa;
function Oa(t) {
  var r = this.has(t) && delete this.__data__[t];
  return this.size -= r ? 1 : 0, r;
}
var Na = Oa, Ea = ne, Ca = "__lodash_hash_undefined__", Pa = Object.prototype, ka = Pa.hasOwnProperty;
function Ia(t) {
  var r = this.__data__;
  if (Ea) {
    var a = r[t];
    return a === Ca ? void 0 : a;
  }
  return ka.call(r, t) ? r[t] : void 0;
}
var Da = Ia, La = ne, Ra = Object.prototype, Ma = Ra.hasOwnProperty;
function Ga(t) {
  var r = this.__data__;
  return La ? r[t] !== void 0 : Ma.call(r, t);
}
var za = Ga, Ha = ne, Fa = "__lodash_hash_undefined__";
function Ba(t, r) {
  var a = this.__data__;
  return this.size += this.has(t) ? 0 : 1, a[t] = Ha && r === void 0 ? Fa : r, this;
}
var Ua = Ba, Ka = Aa, qa = Na, Wa = Da, Ja = za, Va = Ua;
function M(t) {
  var r = -1, a = t == null ? 0 : t.length;
  for (this.clear(); ++r < a; ) {
    var n = t[r];
    this.set(n[0], n[1]);
  }
}
M.prototype.clear = Ka;
M.prototype.delete = qa;
M.prototype.get = Wa;
M.prototype.has = Ja;
M.prototype.set = Va;
var Xa = M, Ie = Xa, Ya = re, Za = Te;
function Qa() {
  this.size = 0, this.__data__ = {
    hash: new Ie(),
    map: new (Za || Ya)(),
    string: new Ie()
  };
}
var en = Qa;
function tn(t) {
  var r = typeof t;
  return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
}
var rn = tn, an = rn;
function nn(t, r) {
  var a = t.__data__;
  return an(r) ? a[typeof r == "string" ? "string" : "hash"] : a.map;
}
var oe = nn, on = oe;
function sn(t) {
  var r = on(this, t).delete(t);
  return this.size -= r ? 1 : 0, r;
}
var cn = sn, ln = oe;
function un(t) {
  return ln(this, t).get(t);
}
var dn = un, fn = oe;
function pn(t) {
  return fn(this, t).has(t);
}
var mn = pn, vn = oe;
function gn(t, r) {
  var a = vn(this, t), n = a.size;
  return a.set(t, r), this.size += a.size == n ? 0 : 1, this;
}
var hn = gn, wn = en, bn = cn, yn = dn, xn = mn, _n = hn;
function G(t) {
  var r = -1, a = t == null ? 0 : t.length;
  for (this.clear(); ++r < a; ) {
    var n = t[r];
    this.set(n[0], n[1]);
  }
}
G.prototype.clear = wn;
G.prototype.delete = bn;
G.prototype.get = yn;
G.prototype.has = xn;
G.prototype.set = _n;
var vt = G, $n = re, Tn = Te, jn = vt, Sn = 200;
function An(t, r) {
  var a = this.__data__;
  if (a instanceof $n) {
    var n = a.__data__;
    if (!Tn || n.length < Sn - 1)
      return n.push([t, r]), this.size = ++a.size, this;
    a = this.__data__ = new jn(n);
  }
  return a.set(t, r), this.size = a.size, this;
}
var On = An, Nn = re, En = vr, Cn = hr, Pn = br, kn = xr, In = On;
function z(t) {
  var r = this.__data__ = new Nn(t);
  this.size = r.size;
}
z.prototype.clear = En;
z.prototype.delete = Cn;
z.prototype.get = Pn;
z.prototype.has = kn;
z.prototype.set = In;
var Dn = z, Ln = "__lodash_hash_undefined__";
function Rn(t) {
  return this.__data__.set(t, Ln), this;
}
var Mn = Rn;
function Gn(t) {
  return this.__data__.has(t);
}
var zn = Gn, Hn = vt, Fn = Mn, Bn = zn;
function V(t) {
  var r = -1, a = t == null ? 0 : t.length;
  for (this.__data__ = new Hn(); ++r < a; )
    this.add(t[r]);
}
V.prototype.add = V.prototype.push = Fn;
V.prototype.has = Bn;
var Un = V;
function Kn(t, r) {
  for (var a = -1, n = t == null ? 0 : t.length; ++a < n; )
    if (r(t[a], a, t))
      return !0;
  return !1;
}
var qn = Kn;
function Wn(t, r) {
  return t.has(r);
}
var Jn = Wn, Vn = Un, Xn = qn, Yn = Jn, Zn = 1, Qn = 2;
function eo(t, r, a, n, i, o) {
  var l = a & Zn, c = t.length, s = r.length;
  if (c != s && !(l && s > c))
    return !1;
  var u = o.get(t), p = o.get(r);
  if (u && p)
    return u == r && p == t;
  var w = -1, v = !0, j = a & Qn ? new Vn() : void 0;
  for (o.set(t, r), o.set(r, t); ++w < c; ) {
    var d = t[w], g = r[w];
    if (n)
      var $ = l ? n(g, d, w, r, t, o) : n(d, g, w, t, r, o);
    if ($ !== void 0) {
      if ($)
        continue;
      v = !1;
      break;
    }
    if (j) {
      if (!Xn(r, function(m, b) {
        if (!Yn(j, b) && (d === m || i(d, m, a, n, o)))
          return j.push(b);
      })) {
        v = !1;
        break;
      }
    } else if (!(d === g || i(d, g, a, n, o))) {
      v = !1;
      break;
    }
  }
  return o.delete(t), o.delete(r), v;
}
var gt = eo, to = N, ro = to.Uint8Array, ao = ro;
function no(t) {
  var r = -1, a = Array(t.size);
  return t.forEach(function(n, i) {
    a[++r] = [i, n];
  }), a;
}
var oo = no;
function io(t) {
  var r = -1, a = Array(t.size);
  return t.forEach(function(n) {
    a[++r] = n;
  }), a;
}
var so = io, De = $e, Le = ao, co = lt, lo = gt, uo = oo, fo = so, po = 1, mo = 2, vo = "[object Boolean]", go = "[object Date]", ho = "[object Error]", wo = "[object Map]", bo = "[object Number]", yo = "[object RegExp]", xo = "[object Set]", _o = "[object String]", $o = "[object Symbol]", To = "[object ArrayBuffer]", jo = "[object DataView]", Re = De ? De.prototype : void 0, ce = Re ? Re.valueOf : void 0;
function So(t, r, a, n, i, o, l) {
  switch (a) {
    case jo:
      if (t.byteLength != r.byteLength || t.byteOffset != r.byteOffset)
        return !1;
      t = t.buffer, r = r.buffer;
    case To:
      return !(t.byteLength != r.byteLength || !o(new Le(t), new Le(r)));
    case vo:
    case go:
    case bo:
      return co(+t, +r);
    case ho:
      return t.name == r.name && t.message == r.message;
    case yo:
    case _o:
      return t == r + "";
    case wo:
      var c = uo;
    case xo:
      var s = n & po;
      if (c || (c = fo), t.size != r.size && !s)
        return !1;
      var u = l.get(t);
      if (u)
        return u == r;
      n |= mo, l.set(t, r);
      var p = lo(c(t), c(r), n, i, o, l);
      return l.delete(t), p;
    case $o:
      if (ce)
        return ce.call(t) == ce.call(r);
  }
  return !1;
}
var Ao = So;
function Oo(t, r) {
  for (var a = -1, n = r.length, i = t.length; ++a < n; )
    t[i + a] = r[a];
  return t;
}
var No = Oo, Eo = Array.isArray, je = Eo, Co = No, Po = je;
function ko(t, r, a) {
  var n = r(t);
  return Po(t) ? n : Co(n, a(t));
}
var Io = ko;
function Do(t, r) {
  for (var a = -1, n = t == null ? 0 : t.length, i = 0, o = []; ++a < n; ) {
    var l = t[a];
    r(l, a, t) && (o[i++] = l);
  }
  return o;
}
var Lo = Do;
function Ro() {
  return [];
}
var Mo = Ro, Go = Lo, zo = Mo, Ho = Object.prototype, Fo = Ho.propertyIsEnumerable, Me = Object.getOwnPropertySymbols, Bo = Me ? function(t) {
  return t == null ? [] : (t = Object(t), Go(Me(t), function(r) {
    return Fo.call(t, r);
  }));
} : zo, Uo = Bo;
function Ko(t, r) {
  for (var a = -1, n = Array(t); ++a < t; )
    n[a] = r(a);
  return n;
}
var qo = Ko;
function Wo(t) {
  return t != null && typeof t == "object";
}
var ie = Wo, Jo = ae, Vo = ie, Xo = "[object Arguments]";
function Yo(t) {
  return Vo(t) && Jo(t) == Xo;
}
var Zo = Yo, Ge = Zo, Qo = ie, ht = Object.prototype, ei = ht.hasOwnProperty, ti = ht.propertyIsEnumerable, ri = Ge(/* @__PURE__ */ function() {
  return arguments;
}()) ? Ge : function(t) {
  return Qo(t) && ei.call(t, "callee") && !ti.call(t, "callee");
}, ai = ri, X = { exports: {} };
function ni() {
  return !1;
}
var oi = ni;
X.exports;
(function(t, r) {
  var a = N, n = oi, i = r && !r.nodeType && r, o = i && !0 && t && !t.nodeType && t, l = o && o.exports === i, c = l ? a.Buffer : void 0, s = c ? c.isBuffer : void 0, u = s || n;
  t.exports = u;
})(X, X.exports);
var wt = X.exports, ii = 9007199254740991, si = /^(?:0|[1-9]\d*)$/;
function ci(t, r) {
  var a = typeof t;
  return r = r ?? ii, !!r && (a == "number" || a != "symbol" && si.test(t)) && t > -1 && t % 1 == 0 && t < r;
}
var li = ci, ui = 9007199254740991;
function di(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= ui;
}
var bt = di, fi = ae, pi = bt, mi = ie, vi = "[object Arguments]", gi = "[object Array]", hi = "[object Boolean]", wi = "[object Date]", bi = "[object Error]", yi = "[object Function]", xi = "[object Map]", _i = "[object Number]", $i = "[object Object]", Ti = "[object RegExp]", ji = "[object Set]", Si = "[object String]", Ai = "[object WeakMap]", Oi = "[object ArrayBuffer]", Ni = "[object DataView]", Ei = "[object Float32Array]", Ci = "[object Float64Array]", Pi = "[object Int8Array]", ki = "[object Int16Array]", Ii = "[object Int32Array]", Di = "[object Uint8Array]", Li = "[object Uint8ClampedArray]", Ri = "[object Uint16Array]", Mi = "[object Uint32Array]", h = {};
h[Ei] = h[Ci] = h[Pi] = h[ki] = h[Ii] = h[Di] = h[Li] = h[Ri] = h[Mi] = !0;
h[vi] = h[gi] = h[Oi] = h[hi] = h[Ni] = h[wi] = h[bi] = h[yi] = h[xi] = h[_i] = h[$i] = h[Ti] = h[ji] = h[Si] = h[Ai] = !1;
function Gi(t) {
  return mi(t) && pi(t.length) && !!h[fi(t)];
}
var zi = Gi;
function Hi(t) {
  return function(r) {
    return t(r);
  };
}
var Fi = Hi, Y = { exports: {} };
Y.exports;
(function(t, r) {
  var a = ut, n = r && !r.nodeType && r, i = n && !0 && t && !t.nodeType && t, o = i && i.exports === n, l = o && a.process, c = function() {
    try {
      var s = i && i.require && i.require("util").types;
      return s || l && l.binding && l.binding("util");
    } catch {
    }
  }();
  t.exports = c;
})(Y, Y.exports);
var Bi = Y.exports, Ui = zi, Ki = Fi, ze = Bi, He = ze && ze.isTypedArray, qi = He ? Ki(He) : Ui, yt = qi, Wi = qo, Ji = ai, Vi = je, Xi = wt, Yi = li, Zi = yt, Qi = Object.prototype, es = Qi.hasOwnProperty;
function ts(t, r) {
  var a = Vi(t), n = !a && Ji(t), i = !a && !n && Xi(t), o = !a && !n && !i && Zi(t), l = a || n || i || o, c = l ? Wi(t.length, String) : [], s = c.length;
  for (var u in t)
    (r || es.call(t, u)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Yi(u, s))) && c.push(u);
  return c;
}
var rs = ts, as = Object.prototype;
function ns(t) {
  var r = t && t.constructor, a = typeof r == "function" && r.prototype || as;
  return t === a;
}
var os = ns;
function is(t, r) {
  return function(a) {
    return t(r(a));
  };
}
var ss = is, cs = ss, ls = cs(Object.keys, Object), us = ls, ds = os, fs = us, ps = Object.prototype, ms = ps.hasOwnProperty;
function vs(t) {
  if (!ds(t))
    return fs(t);
  var r = [];
  for (var a in Object(t))
    ms.call(t, a) && a != "constructor" && r.push(a);
  return r;
}
var gs = vs, hs = pt, ws = bt;
function bs(t) {
  return t != null && ws(t.length) && !hs(t);
}
var ys = bs, xs = rs, _s = gs, $s = ys;
function Ts(t) {
  return $s(t) ? xs(t) : _s(t);
}
var js = Ts, Ss = Io, As = Uo, Os = js;
function Ns(t) {
  return Ss(t, Os, As);
}
var Es = Ns, Fe = Es, Cs = 1, Ps = Object.prototype, ks = Ps.hasOwnProperty;
function Is(t, r, a, n, i, o) {
  var l = a & Cs, c = Fe(t), s = c.length, u = Fe(r), p = u.length;
  if (s != p && !l)
    return !1;
  for (var w = s; w--; ) {
    var v = c[w];
    if (!(l ? v in r : ks.call(r, v)))
      return !1;
  }
  var j = o.get(t), d = o.get(r);
  if (j && d)
    return j == r && d == t;
  var g = !0;
  o.set(t, r), o.set(r, t);
  for (var $ = l; ++w < s; ) {
    v = c[w];
    var m = t[v], b = r[v];
    if (n)
      var x = l ? n(b, m, v, r, t, o) : n(m, b, v, t, r, o);
    if (!(x === void 0 ? m === b || i(m, b, a, n, o) : x)) {
      g = !1;
      break;
    }
    $ || ($ = v == "constructor");
  }
  if (g && !$) {
    var _ = t.constructor, S = r.constructor;
    _ != S && "constructor" in t && "constructor" in r && !(typeof _ == "function" && _ instanceof _ && typeof S == "function" && S instanceof S) && (g = !1);
  }
  return o.delete(t), o.delete(r), g;
}
var Ds = Is, Ls = R, Rs = N, Ms = Ls(Rs, "DataView"), Gs = Ms, zs = R, Hs = N, Fs = zs(Hs, "Promise"), Bs = Fs, Us = R, Ks = N, qs = Us(Ks, "Set"), Ws = qs, Js = R, Vs = N, Xs = Js(Vs, "WeakMap"), Ys = Xs, ve = Gs, ge = Te, he = Bs, we = Ws, be = Ys, xt = ae, H = mt, Be = "[object Map]", Zs = "[object Object]", Ue = "[object Promise]", Ke = "[object Set]", qe = "[object WeakMap]", We = "[object DataView]", Qs = H(ve), ec = H(ge), tc = H(he), rc = H(we), ac = H(be), k = xt;
(ve && k(new ve(new ArrayBuffer(1))) != We || ge && k(new ge()) != Be || he && k(he.resolve()) != Ue || we && k(new we()) != Ke || be && k(new be()) != qe) && (k = function(t) {
  var r = xt(t), a = r == Zs ? t.constructor : void 0, n = a ? H(a) : "";
  if (n)
    switch (n) {
      case Qs:
        return We;
      case ec:
        return Be;
      case tc:
        return Ue;
      case rc:
        return Ke;
      case ac:
        return qe;
    }
  return r;
});
var nc = k, le = Dn, oc = gt, ic = Ao, sc = Ds, Je = nc, Ve = je, Xe = wt, cc = yt, lc = 1, Ye = "[object Arguments]", Ze = "[object Array]", q = "[object Object]", uc = Object.prototype, Qe = uc.hasOwnProperty;
function dc(t, r, a, n, i, o) {
  var l = Ve(t), c = Ve(r), s = l ? Ze : Je(t), u = c ? Ze : Je(r);
  s = s == Ye ? q : s, u = u == Ye ? q : u;
  var p = s == q, w = u == q, v = s == u;
  if (v && Xe(t)) {
    if (!Xe(r))
      return !1;
    l = !0, p = !1;
  }
  if (v && !p)
    return o || (o = new le()), l || cc(t) ? oc(t, r, a, n, i, o) : ic(t, r, s, a, n, i, o);
  if (!(a & lc)) {
    var j = p && Qe.call(t, "__wrapped__"), d = w && Qe.call(r, "__wrapped__");
    if (j || d) {
      var g = j ? t.value() : t, $ = d ? r.value() : r;
      return o || (o = new le()), i(g, $, a, n, o);
    }
  }
  return v ? (o || (o = new le()), sc(t, r, a, n, i, o)) : !1;
}
var fc = dc, pc = fc, et = ie;
function _t(t, r, a, n, i) {
  return t === r ? !0 : t == null || r == null || !et(t) && !et(r) ? t !== t && r !== r : pc(t, r, a, n, _t, i);
}
var mc = _t, vc = mc;
function gc(t, r) {
  return vc(t, r);
}
var hc = gc;
const tt = /* @__PURE__ */ It(hc);
function ue(t) {
  return t == null ? !1 : typeof t[Symbol.iterator] == "function";
}
function de(t, r, { added: a, modified: n, deleted: i }) {
  var c;
  let o = [...t];
  function l(s) {
    return t.findIndex(function(u) {
      return s === u.metadata.name;
    });
  }
  if (a) {
    if (!ue(a)) return;
    (c = Object.values(a)) == null || c.forEach((s) => {
      o.some(
        (p) => {
          var w, v;
          return ((w = s == null ? void 0 : s.metadata) == null ? void 0 : w.name) === ((v = p == null ? void 0 : p.metadata) == null ? void 0 : v.name);
        }
      ) || o.push(s);
    });
  }
  if (n) {
    if (!ue(n)) return;
    n.forEach((s) => {
      var p;
      let u = l((p = s == null ? void 0 : s.metadata) == null ? void 0 : p.name);
      u !== -1 && (tt(o[u], s) || (o[u] = s));
    });
  }
  if (i) {
    if (!ue(i)) return;
    i.forEach((s) => {
      var p;
      let u = l((p = s == null ? void 0 : s.metadata) == null ? void 0 : p.name);
      u !== -1 && (o = o.filter((w, v) => v !== u));
    });
  }
  tt(o, t) || r(o);
}
const wc = () => {
  const t = Gt(), { client: r } = Ft(), { addMessage: a } = ot(), { setTeamMemberships: n } = ee(), i = Q();
  return { watchTeamMembers: T.useCallback(() => {
    if (!r || !t) return;
    const l = r.watch(`/apis/greenhouse.sap/v1alpha1/namespaces/${t}/teammemberships`);
    return l.on(r.WATCH_ERROR, (c) => {
      console.log("ERROR: Failed to watch resource", c), a({
        variant: "error",
        text: me(c.message)
      });
    }), l.on(r.WATCH_ADDED, (c) => {
      de(i, n, {
        added: c
      });
    }), l.on(r.WATCH_MODIFIED, (c) => {
      de(i, n, {
        modified: c
      });
    }), l.on(r.WATCH_DELETED, (c) => {
      de(i, n, {
        deleted: c
      });
    }), l.start(), l.cancel();
  }, [r, t, i, n, a, me]) };
}, bc = ({ teamMember: t }) => /* @__PURE__ */ f.jsxs(W, { children: [
  /* @__PURE__ */ f.jsx(D, { children: t.id }),
  /* @__PURE__ */ f.jsx(D, { children: t.firstName }),
  /* @__PURE__ */ f.jsx(D, { children: t.lastName }),
  /* @__PURE__ */ f.jsx(D, { children: t.email })
] });
function rt(t, r) {
  (r == null || r > t.length) && (r = t.length);
  for (var a = 0, n = Array(r); a < r; a++) n[a] = t[a];
  return n;
}
function yc(t) {
  if (Array.isArray(t)) return t;
}
function xc(t, r, a) {
  return (r = Ac(r)) in t ? Object.defineProperty(t, r, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : t[r] = a, t;
}
function _c(t, r) {
  var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (a != null) {
    var n, i, o, l, c = [], s = !0, u = !1;
    try {
      if (o = (a = a.call(t)).next, r === 0) {
        if (Object(a) !== a) return;
        s = !1;
      } else for (; !(s = (n = o.call(a)).done) && (c.push(n.value), c.length !== r); s = !0) ;
    } catch (p) {
      u = !0, i = p;
    } finally {
      try {
        if (!s && a.return != null && (l = a.return(), Object(l) !== l)) return;
      } finally {
        if (u) throw i;
      }
    }
    return c;
  }
}
function $c() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function at(t, r) {
  var a = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    r && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), a.push.apply(a, n);
  }
  return a;
}
function fe(t) {
  for (var r, a = 1; a < arguments.length; a++) r = arguments[a] == null ? {} : arguments[a], a % 2 ? at(Object(r), !0).forEach(function(n) {
    xc(t, n, r[n]);
  }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : at(Object(r)).forEach(function(n) {
    Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
  });
  return t;
}
function Tc(t, r) {
  if (t == null) return {};
  var a, n, i = jc(t, r);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (n = 0; n < o.length; n++) a = o[n], r.includes(a) || {}.propertyIsEnumerable.call(t, a) && (i[a] = t[a]);
  }
  return i;
}
function jc(t, r) {
  if (t == null) return {};
  var a = {};
  for (var n in t) if ({}.hasOwnProperty.call(t, n)) {
    if (r.includes(n)) continue;
    a[n] = t[n];
  }
  return a;
}
function Z(t, r) {
  return yc(t) || _c(t, r) || Oc(t, r) || $c();
}
function Sc(t, r) {
  if (typeof t != "object" || !t) return t;
  var a = t[Symbol.toPrimitive];
  if (a !== void 0) {
    var n = a.call(t, r || "default");
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(t);
}
function Ac(t) {
  var r = Sc(t, "string");
  return typeof r == "symbol" ? r : r + "";
}
function ye(t) {
  "@babel/helpers - typeof";
  return ye = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, ye(t);
}
function Oc(t, r) {
  if (t) {
    if (typeof t == "string") return rt(t, r);
    var a = {}.toString.call(t).slice(8, -1);
    return a === "Object" && t.constructor && (a = t.constructor.name), a === "Map" || a === "Set" ? Array.from(t) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? rt(t, r) : void 0;
  }
}
var Nc = function(t) {
  var r = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}, a = T.useState(20), n = Z(a, 2), i = n[0], o = n[1], l = T.useState(!1), c = Z(l, 2), s = c[0], u = c[1], p = T.useRef(null), w = T.useRef();
  T.useEffect(function() {
    return function() {
      return clearTimeout(p.current);
    };
  }, []);
  var v = T.useMemo(function() {
    if (t) return t.slice(0, i);
  }, [t, i]), j = T.useCallback(function(g) {
    s || (w.current && w.current.disconnect(), w.current = new IntersectionObserver(function($) {
      $[0].isIntersecting && i <= t.length && (clearTimeout(p.current), u(!0), p.current = setTimeout(function() {
        u(!1), o(function(m) {
          return m + 10;
        });
      }, (r == null ? void 0 : r.delay) || 500));
    }), g && w.current.observe(g));
  }, [t, s]), d = T.useMemo(function() {
    return { map: function(g) {
      var $ = v.map(g);
      return E.createElement(E.Fragment, null, $, s && (r == null ? void 0 : r.showLoading) !== !1 && E.createElement(E.Fragment, null, r != null && r.loadingObject ? r.loadingObject : E.createElement("span", { id: "endlessScrollListLoading" }, "Loading...")), (r == null ? void 0 : r.showRef) !== !1 && E.createElement(E.Fragment, null, r != null && r.refFunction ? r.refFunction(j) : E.createElement("span", { id: "endlessScrollListLastItemRef", ref: j })));
    } };
  }, [v, j]);
  return { scrollListItems: v, iterator: d };
}, Ec = ["mock"], P = function(t) {
  return new Response(JSON.stringify(t), { status: 200, headers: { "Content-Type": "application/json", Accept: "application/json" } });
}, O = function(t) {
  return new Response(t, { status: 404, headers: { "Content-Type": "application/json", Accept: "application/json" } });
}, y = null, J = null, xe = null, I = !1, Cc = function(t) {
  var r = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {};
  if (r != null && r.debug && (I = !0), t === null) return I && console.log("fetchProxyInitDB:: Reset localDB"), void (y = null);
  if (y && console.warn('fetchProxyInitDB:: localDB already initialized. This typically occurs when the component or hook, responsible for local database initialization, is accidentally re-rendered. If you intend to reset the local database, please ensure to set localDB to null first by invoking fetchProxyInitDB(null) before providing new data."'), ye(t) !== "object") throw new Error("It seems that jsonData is not a valid JSON object.");
  if (r != null && r.rewriteRoutes) {
    I && console.log("fetchProxyInitDB:: rewriteRoutes::", r == null ? void 0 : r.rewriteRoutes);
    var a = Object.fromEntries(Object.entries(r == null ? void 0 : r.rewriteRoutes).filter(function(o) {
      var l = Z(o, 1), c = l[0];
      try {
        return new RegExp(c), !0;
      } catch {
        return console.warn("It seems that the given rewrite rule ".concat(c, " for routes is not a valid regex expresion.")), !1;
      }
    }));
    J = a;
  }
  if (r != null && r.rewriteResponses) {
    var n = ["GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS"], i = {};
    I && console.log("fetchProxyInitDB:: rewriteResponses::", r == null ? void 0 : r.rewriteResponses), Object.keys(r == null ? void 0 : r.rewriteResponses).forEach(function(o) {
      if (!n.includes(o)) return void console.warn("It seems that the given rewrite rule ".concat(o, " for responses is not a valid method."));
      var l = r == null ? void 0 : r.rewriteResponses[o], c = Object.fromEntries(Object.entries(l).filter(function(s) {
        var u = Z(s, 1), p = u[0];
        try {
          return new RegExp(p), !0;
        } catch {
          return console.warn("It seems that the given rewrite rule ".concat(p, " for responses is not a valid regex expresion.")), !1;
        }
      }));
      i[o] = c;
    }), xe = i;
  }
  if (Object.keys(t).some(function(o) {
    return !Array.isArray(t[o]);
  })) throw new Error("It seems that jsonData is not a collection of key value pairs with values as arrays.");
  I && console.log("fetchProxyInitDB:: jsonData::", t), y = t;
}, Pc = function(t, r) {
  var a, n = r.mock, i = Tc(r, Ec);
  if (n !== !0 && n !== "true") return console.log("fetchProxy:: real fetch for::", t), fetch(t, i);
  if (!y) throw new Error(`localDB not initialized.
    Please use fetchProxyInitDB(jsonData) to initialize the localDB.`);
  var o = null;
  try {
    o = new URL(t);
  } catch {
    throw new Error("Invalid URL: ".concat(t));
  }
  var l = r == null ? void 0 : r.method;
  l || (l = "GET");
  var c = o.pathname, s = null;
  if ((a = xe) !== null && a !== void 0 && a[l]) {
    var u = xe[l];
    for (var p in u) {
      var w = new RegExp(p);
      if (w.test(c)) {
        s = P(u[p]);
        break;
      }
    }
  }
  if (J) for (var v in J) {
    var j = new RegExp(v);
    if (j.test(c)) {
      c = c.replace(j, J[v]);
      break;
    }
  }
  var d = c.split("/")[1], g = c.split("/")[2];
  I && console.log("fetchProxy:: mock fetch with method: ", l, ", path: ", c, ", object: ", d, ", id: ", g, ", customResponse: ", s);
  var $ = r == null ? void 0 : r.body;
  return l === "GET" ? new Promise(function(m) {
    if (d) {
      var b;
      if ((b = y) !== null && b !== void 0 && b[d]) {
        var x;
        if (g) {
          var _, S = (_ = y) === null || _ === void 0 ? void 0 : _[d].findIndex(function(F) {
            return F.id == g;
          });
          if (0 <= S) {
            var A;
            return m(s || P((A = y) === null || A === void 0 || (A = A[d]) === null || A === void 0 ? void 0 : A[S]));
          }
          return m(O("No id ".concat(g, " for object ").concat(d, " found")));
        }
        return m(s || P((x = y) === null || x === void 0 ? void 0 : x[d]));
      }
      return m(O("No object ".concat(d, " found")));
    }
    m(P(s || y));
  }) : l === "POST" ? new Promise(function(m) {
    var b, x, _;
    d && $ || m(O("No object '".concat(d, "' or body '").concat($, "' given"))), (b = y) !== null && b !== void 0 && b[d] || m(O("No object '".concat(d, "' found")));
    var S = JSON.parse($);
    if (S.id = 1, 0 < ((x = y) === null || x === void 0 || (x = x[d]) === null || x === void 0 ? void 0 : x.length)) {
      var A, F = (A = y) === null || A === void 0 ? void 0 : A[d].reduce(function(Se, Ae) {
        return Ae.id > Se.id ? Ae : Se;
      });
      S.id = ((F == null ? void 0 : F.id) || 0) + 1;
    }
    (_ = y) === null || _ === void 0 || _[d].push(S), m(s || P(S));
  }) : l === "PUT" ? new Promise(function(m) {
    var b, x;
    d && g || m(O("No object '".concat(d, "' or id '").concat(g, "' given"))), (b = y) !== null && b !== void 0 && b[d] || m(O("No object '".concat(d, "' found")));
    var _ = (x = y) === null || x === void 0 ? void 0 : x[d].findIndex(function(S) {
      return S.id == g;
    });
    return 0 <= _ ? (y[d][_] = fe(fe(fe({}, y[d][_]), JSON.parse($)), {}, { id: y[d][_].id }), void m(s || P(y[d][_]))) : m(O("No item with id '".concat(g, "' found")));
  }) : l === "DELETE" ? new Promise(function(m) {
    var b, x;
    d && g || m(O("No object '".concat(d, "' or id '").concat(g, "' given"))), (b = y) !== null && b !== void 0 && b[d] || m(O("No object '".concat(d, "' found")));
    var _ = (x = y) === null || x === void 0 ? void 0 : x[d].findIndex(function(S) {
      return S.id == g;
    });
    return 0 <= _ ? (y[d].splice(_, 1), void m(s || P("Object deleted"))) : m(O("No item with id '".concat(g, "' found")));
  }) : void 0;
};
const kc = () => {
  const t = _e(), r = ct(), a = Q(), n = t || r, i = T.useMemo(() => {
    var s;
    if (!n || !a) return [];
    const c = a.find((u) => u.metadata.name === n);
    return ((s = c == null ? void 0 : c.spec) == null ? void 0 : s.members) || [];
  }, [n, a]), { scrollListItems: o, iterator: l } = Nc(i, {
    loadingObject: /* @__PURE__ */ f.jsx(W, { children: /* @__PURE__ */ f.jsx(D, { colSpan: 4, children: /* @__PURE__ */ f.jsx("span", { children: "Loading ..." }) }) }),
    refFunction: (c) => /* @__PURE__ */ f.jsx(W, { children: /* @__PURE__ */ f.jsx(D, { colSpan: 4, className: "border-b-0 py-0", children: /* @__PURE__ */ f.jsx("span", { ref: c }) }) })
  });
  return (o == null ? void 0 : o.length) > 0 ? /* @__PURE__ */ f.jsx(f.Fragment, { children: /* @__PURE__ */ f.jsxs(St, { columns: 4, children: [
    /* @__PURE__ */ f.jsxs(W, { children: [
      /* @__PURE__ */ f.jsx(U, { children: "ID" }),
      /* @__PURE__ */ f.jsx(U, { children: "Firstname" }),
      /* @__PURE__ */ f.jsx(U, { children: "Lastname" }),
      /* @__PURE__ */ f.jsx(U, { children: "E-Mail" })
    ] }),
    l.map((c) => /* @__PURE__ */ f.jsx(bc, { teamMember: c }, c.id))
  ] }) }) : /* @__PURE__ */ f.jsx("div", { children: "There are no Team Members to display." });
}, Ic = `
  bg-theme-background-lvl-1
  py-2
  px-4
  my-px`, Dc = ({ onTeamChange: t }) => {
  const r = _e(), a = Q();
  return /* @__PURE__ */ f.jsx(At, { direction: "vertical", gap: "4", className: `filters ${Ic}`, children: /* @__PURE__ */ f.jsx(
    Ot,
    {
      name: "team",
      className: "filter-label-select w-64 mb-0",
      label: "Team",
      value: r || defaultTeam,
      onChange: t,
      children: a == null ? void 0 : a.map((n, i) => {
        var o, l;
        return /* @__PURE__ */ f.jsx(Nt, { value: (o = n == null ? void 0 : n.metadata) == null ? void 0 : o.name, label: (l = n == null ? void 0 : n.metadata) == null ? void 0 : l.name }, i);
      })
    }
  ) });
}, Lc = () => {
  const t = Q(), r = Ht(), a = st(), { watchTeamMembers: n } = wc(), { setCurrentTeam: i, setTeamMemberships: o } = ee(), { addMessage: l } = ot();
  T.useEffect(() => !n || r ? void 0 : n(), [n]), T.useEffect(() => {
    r && Pc(`${a}/teammemberships`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      mock: !0
    }).then((s) => (s.ok || l({
      variant: "error",
      text: me(e.message)
    }), s.json())).then((s) => {
      o(s);
    });
  }, [r]);
  function c(s) {
    i(s);
  }
  return /* @__PURE__ */ f.jsxs(Dt, { py: !0, px: !0, children: [
    /* @__PURE__ */ f.jsx(Et, { className: "pb-6" }),
    (t == null ? void 0 : t.length) > 0 && /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
      /* @__PURE__ */ f.jsx(Dc, { onTeamChange: c }),
      /* @__PURE__ */ f.jsx(kc, {})
    ] })
  ] });
}, Rc = "*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}@media (min-width: 1856px){.container{max-width:1856px}}.isolate{isolation:isolate}.mx-4{margin-left:1rem;margin-right:1rem}.mx-6{margin-left:1.5rem;margin-right:1.5rem}.my-px{margin-top:1px;margin-bottom:1px}.mb-0{margin-bottom:0}.mb-2{margin-bottom:.5rem}.mb-3{margin-bottom:.75rem}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.mb-8{margin-bottom:2rem}.ml-2{margin-left:.5rem}.mr-3{margin-right:.75rem}.mt-3{margin-top:.75rem}.mt-4{margin-top:1rem}.mt-8{margin-top:2rem}.mt-auto{margin-top:auto}.inline{display:inline}.table{display:table}.grid{display:grid}.h-8{height:2rem}.h-full{height:100%}.h-screen{height:100vh}.w-64{width:16rem}.w-8{width:2rem}.w-full{width:100%}.cursor-pointer{cursor:pointer}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-\\[max-content_auto\\]{grid-template-columns:max-content auto}.grid-rows-\\[minmax\\(100vh\\,100\\%\\)\\]{grid-template-rows:minmax(100vh,100%)}.gap-4{gap:1rem}.break-all{word-break:break-all}.rounded{border-radius:.25rem}.rounded-full{border-radius:9999px}.border-y-2{border-top-width:2px;border-bottom-width:2px}.border-b-0{border-bottom-width:0}.border-l-4{border-left-width:4px}.border-theme-background-lvl-1{--tw-border-opacity: 1;border-color:rgba(var(--color-background-lvl-1-raw),var(--tw-border-opacity))}.bg-juno-grey-blue-11{--tw-bg-opacity: 1;background-color:rgba(var(--color-juno-grey-blue-11-raw),var(--tw-bg-opacity))}.bg-theme-accent\\/30{background-color:rgba(var(--color-accent-raw),.3)}.bg-theme-background-lvl-0{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-0-raw),var(--tw-bg-opacity))}.bg-theme-background-lvl-1{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-1-raw),var(--tw-bg-opacity))}.bg-theme-background-lvl-2{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-2-raw),var(--tw-bg-opacity))}.bg-theme-global-bg{--tw-bg-opacity: 1;background-color:rgba(var(--color-global-bg-raw),var(--tw-bg-opacity))}.bg-cover{background-size:cover}.fill-current{fill:currentColor}.p-8{padding:2rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-4{padding-left:1rem;padding-right:1rem}.py-0{padding-top:0;padding-bottom:0}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.pb-6{padding-bottom:1.5rem}.pl-4{padding-left:1rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.text-theme-accent{--tw-text-opacity: 1;color:rgba(var(--color-accent-raw),var(--tw-text-opacity))}.text-theme-danger{--tw-text-opacity: 1;color:rgba(var(--color-danger-raw),var(--tw-text-opacity))}.text-theme-default{--tw-text-opacity: 1;color:rgba(var(--color-text-default-raw),var(--tw-text-opacity))}.text-theme-disabled{--tw-text-opacity: 1;color:rgba(var(--color-text-disabled-raw),var(--tw-text-opacity))}.text-theme-high{--tw-text-opacity: 1;color:rgba(var(--color-text-high-raw),var(--tw-text-opacity))}.text-theme-info{--tw-text-opacity: 1;color:rgba(var(--color-info-raw),var(--tw-text-opacity))}.text-theme-light{--tw-text-opacity: 1;color:rgba(var(--color-text-light-raw),var(--tw-text-opacity))}.text-theme-link{--tw-text-opacity: 1;color:rgba(var(--color-text-link-raw),var(--tw-text-opacity))}.text-white{--tw-text-opacity: 1;color:rgba(var(--color-white-raw),var(--tw-text-opacity))}.text-opacity-50{--tw-text-opacity: .5 }.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.hover\\:bg-theme-background-lvl-2:hover{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-2-raw),var(--tw-bg-opacity))}.hover\\:text-theme-high:hover{--tw-text-opacity: 1;color:rgba(var(--color-text-high-raw),var(--tw-text-opacity))}.hover\\:text-white:hover{--tw-text-opacity: 1;color:rgba(var(--color-white-raw),var(--tw-text-opacity))}", nt = "greenhouse-team-admin", pe = "team", Mc = (t) => {
  const [r, a] = T.useState(!1), n = Ct(t || nt), { setCurrentTeam: i } = ee(), o = _e(), l = ct();
  T.useEffect(() => {
    var s;
    if (r) return;
    console.log(`Team-Admin: (${t || nt}) setting up state from url:`, n.currentState());
    const c = (s = n.currentState()) == null ? void 0 : s[pe];
    c && i(c), a(!0);
  }, [i]), T.useEffect(() => {
    var c;
    r && (n.push({
      [pe]: o || l
    }), console.log("useUrlStateKey - after  urlStateManager.push: ", (c = n.currentState()) == null ? void 0 : c[pe]));
  }, [r, o, l]);
}, Gc = ({ consumerId: t }) => (Mc(t), null), zc = [
  {
    metadata: {
      name: "team1",
      namespace: "ns1"
    },
    spec: {
      members: [
        {
          email: "new1@example.com",
          firstName: "Maximilian",
          id: "abc123",
          lastName: "Müller"
        },
        {
          email: "new2@example.com",
          firstName: "Sophie",
          id: "def456",
          lastName: "Schmidt"
        }
      ]
    }
  },
  {
    metadata: {
      name: "team2",
      namespace: "ns1"
    },
    spec: {
      members: [
        {
          email: "new3@example.com",
          firstName: "Felix",
          id: "ghi789",
          lastName: "Schulz"
        },
        {
          email: "new4@example.com",
          firstName: "Emilia",
          id: "jkl012",
          lastName: "Becker"
        },
        {
          email: "new5@example.com",
          firstName: "Lukas",
          id: "mno345",
          lastName: "Koch"
        },
        {
          email: "new6@example.com",
          firstName: "Julia",
          id: "pqr678",
          lastName: "Wagner"
        },
        {
          email: "new7@example.com",
          firstName: "Leonie",
          id: "stu901",
          lastName: "Hoffmann"
        }
      ]
    }
  },
  {
    metadata: {
      name: "team3",
      namespace: "ns1"
    },
    spec: {
      members: [
        {
          email: "new8@example.com",
          firstName: "Matthias",
          id: "vwx234",
          lastName: "Schäfer"
        },
        {
          email: "new9@example.com",
          firstName: "Laura",
          id: "yza567",
          lastName: "Bauer"
        },
        {
          email: "new10@example.com",
          firstName: "Tim",
          id: "bcd890",
          lastName: "Hofmann"
        },
        {
          email: "new11@example.com",
          firstName: "Nina",
          id: "efg123",
          lastName: "Lehmann"
        },
        {
          email: "new12@example.com",
          firstName: "Sebastian",
          id: "hij456",
          lastName: "Krause"
        },
        {
          email: "new13@example.com",
          firstName: "Vanessa",
          id: "klm789",
          lastName: "Richter"
        },
        {
          email: "new14@example.com",
          firstName: "Max",
          id: "nop012",
          lastName: "Fischer"
        },
        {
          email: "new15@example.com",
          firstName: "Carolin",
          id: "qrs345",
          lastName: "Schneider"
        },
        {
          email: "new16@example.com",
          firstName: "Tobias",
          id: "tuv678",
          lastName: "Gluch"
        },
        {
          email: "new17@example.com",
          firstName: "Elena",
          id: "wxy901",
          lastName: "Beck"
        },
        {
          email: "new18@example.com",
          firstName: "Lars",
          id: "zab234",
          lastName: "Lorenz"
        },
        {
          email: "new19@example.com",
          firstName: "Julian",
          id: "cde567",
          lastName: "Vogel"
        },
        {
          email: "new20@example.com",
          firstName: "Johanna",
          id: "efg890",
          lastName: "Schwarz"
        },
        {
          email: "new21@example.com",
          firstName: "Dominik",
          id: "hij123",
          lastName: "Wolf"
        },
        {
          email: "new22@example.com",
          firstName: "Marie",
          id: "klm456",
          lastName: "Roth"
        },
        {
          email: "new23@example.com",
          firstName: "Moritz",
          id: "nop789",
          lastName: "Walter"
        },
        {
          email: "new24@example.com",
          firstName: "Lisa",
          id: "qrs012",
          lastName: "Kühn"
        }
      ]
    }
  },
  {
    apiVersion: "greenhouse.sap/v1alpha1",
    kind: "TeamMembership",
    metadata: {
      name: "team4",
      namespace: "ns1"
    },
    spec: {
      members: [
        {
          email: "new25@example.com",
          firstName: "Jonathan",
          id: "tuv123",
          lastName: "Fuchs"
        },
        {
          email: "new26@example.com",
          firstName: "Hannah",
          id: "wxy456",
          lastName: "Herrmann"
        },
        {
          email: "new27@example.com",
          firstName: "Muhammad",
          id: "zab789",
          lastName: "Salz"
        },
        {
          email: "new28@example.com",
          firstName: "Laura",
          id: "cde012",
          lastName: "Günther"
        },
        {
          email: "new29@example.com",
          firstName: "Maximilian",
          id: "efg345",
          lastName: "Wenzel"
        },
        {
          email: "new30@example.com",
          firstName: "Sophia",
          id: "hij678",
          lastName: "Krüger"
        },
        {
          email: "new31@example.com",
          firstName: "Lukas",
          id: "klm901",
          lastName: "Hein"
        },
        {
          email: "new32@example.com",
          firstName: "Marie",
          id: "nop234",
          lastName: "Sauer"
        },
        {
          email: "new33@example.com",
          firstName: "Tim",
          id: "qrs567",
          lastName: "Schubert"
        },
        {
          email: "new34@example.com",
          firstName: "Vanessa",
          id: "tuv890",
          lastName: "Hahn"
        }
      ]
    }
  }
], Hc = {
  teammemberships: zc
}, Fc = (t = {}) => {
  const { initialize: r, setMock: a } = ee();
  return t.isMock === !0 || t.isMock === "true" ? (a(!0), Cc(Hc, {
    debug: !0,
    rewriteRoutes: {
      "/(?:apis/greenhouse\\.sap/v1alpha1/namespaces/[^/]+/teammemberships/(.*))": "/$1"
    }
  }), r(window.location.origin, null, null, null)) : r(t.apiEndpoint, t.token, t.namespace, t.userGroup), /* @__PURE__ */ f.jsxs(kt, { children: [
    /* @__PURE__ */ f.jsx(Gc, {}),
    /* @__PURE__ */ f.jsx(
      Lt,
      {
        pageHeader: "Converged Cloud | Team Members",
        embedded: t.embedded === "true" || t.embedded === !0,
        children: /* @__PURE__ */ f.jsx(Lc, { props: t })
      }
    )
  ] });
}, qc = (t) => /* @__PURE__ */ f.jsxs(Pt, { theme: `${t.theme ? t.theme : "theme-dark"}`, children: [
  /* @__PURE__ */ f.jsx("style", { children: Rc.toString() }),
  /* @__PURE__ */ f.jsx(Mt, { children: /* @__PURE__ */ f.jsx(Fc, { ...t }) })
] });
export {
  qc as default
};