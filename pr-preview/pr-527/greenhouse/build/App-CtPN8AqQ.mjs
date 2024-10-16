import { f as $n, j as c, D as Z, g as F, h as L, i as de, B as oe, T as Rn, k as zn, l as Un, I as It, m as Mt, P as at, n as ot, o as Fs, F as kt, p as Qe, q as Pn, e as Zn, r as Hn, s as qn, t as Yn, x as Gn, A as Bn } from "./Shell-DTMmoMZV.mjs";
import { r as H, R as ae, g as Jn } from "./index-Bjb47Pyo.mjs";
import { g as jt, P as Ls, r as Kn, M as Qn } from "./resourceStatus-DDhgp7nQ.mjs";
import { C as xe, A as Xn } from "./Container.component-B8M3UgGG-DiQmRU9u.mjs";
import { D as Ws, T as st } from "./TextInput.component-BBTA8JYe-Ct7toqui.mjs";
const b = $n((s) => ({
  endpoint: "",
  token: "",
  namespace: "",
  initialize: (e, t, n) => s(() => ({ endpoint: e, token: t, namespace: n })),
  urlStateKey: "",
  setUrlStateKey: (e) => s((t) => ({ urlStateKey: e })),
  clusters: [],
  modifyClusters: (e) => s((t) => {
    let n = [...t.clusters];
    return e.forEach((r) => {
      const i = n.findIndex((a) => a.metadata.name === r.metadata.name);
      i >= 0 ? n[i] = r : n.push(r);
    }), { ...t, clusters: n };
  }),
  deleteClusters: (e) => s((t) => ({ clusters: t.clusters.filter((r) => !e.some((i) => r.metadata.name === i.metadata.name)) })),
  clusterDetails: {
    cluster: null,
    clusterStatus: null,
    plugins: []
  },
  setClusterDetails: (e) => s((t) => {
    var r, i;
    if (!e)
      return {
        ...t,
        clusterDetails: {
          cluster: null,
          clusterStatus: null,
          plugins: []
        }
      };
    let n = jt(
      ((i = (r = e.status) == null ? void 0 : r.statusConditions) == null ? void 0 : i.conditions) ?? []
    );
    return {
      ...t,
      clusterDetails: {
        cluster: e,
        clusterStatus: n,
        plugins: []
      }
    };
  }),
  setClusterDetailPlugins: (e) => s((t) => ({
    ...t,
    clusterDetails: {
      ...t.clusterDetails,
      plugins: e
    }
  })),
  showClusterDetails: !1,
  setShowClusterDetails: (e) => s((t) => ({ ...t, showClusterDetails: e })),
  showOnBoardCluster: !1,
  setShowOnBoardCluster: (e) => s((t) => ({ ...t, showOnBoardCluster: e })),
  showDownloadKubeConfig: !1,
  setShowDownloadKubeConfig: (e) => {
    s((t) => ({
      ...t,
      showDownloadKubeConfig: e
    }));
  },
  clusterInEdit: void 0,
  setClusterInEdit: (e) => s((t) => ({ clusterInEdit: e }))
}));
class le extends Error {
}
class er extends le {
  constructor(e) {
    super(`Invalid DateTime: ${e.toMessage()}`);
  }
}
class tr extends le {
  constructor(e) {
    super(`Invalid Duration: ${e.toMessage()}`);
  }
}
class sr extends le {
  constructor(e) {
    super(`Invalid Interval: ${e.toMessage()}`);
  }
}
class lt extends le {
  constructor(e) {
    super(`Invalid unit ${e}`), Object.setPrototypeOf(this, lt.prototype);
  }
}
class Ft extends le {
  constructor(e) {
    super(`${e} is an invalid or unknown zone specifier`), Object.setPrototypeOf(this, Ft.prototype);
  }
}
class ie extends le {
  constructor(e) {
    super(e), Object.setPrototypeOf(this, ie.prototype);
  }
}
class j extends le {
  constructor(e) {
    super(e), Object.setPrototypeOf(this, j.prototype);
  }
}
class Q extends le {
  constructor() {
    super("Zone is an abstract class"), Object.setPrototypeOf(this, Q.prototype);
  }
}
function Ue(...s) {
  s.length;
}
class Ae {
  /**
   * The type of zone
   * @abstract
   * @type {string}
   */
  get type() {
    throw new Q();
  }
  /**
   * The IANA name of this zone.
   * Defaults to `name` if not overwritten by a subclass.
   * @abstract
   * @type {string}
   */
  get ianaName() {
    return this.name;
  }
  /**
   * The name of this zone.
   * @abstract
   * @type {string}
   */
  get name() {
    throw new Q();
  }
  /**
   * Returns whether the offset is known to be fixed for the whole year.
   * @abstract
   * @type {boolean}
   */
  get isUniversal() {
    throw new Q();
  }
  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @abstract
   * @param {number} [ts] - Epoch milliseconds for which to get the name
   * @param {Object} [options] - Options to affect the format
   * @param {string} [options.format] - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} [options.locale] - What locale to return the offset name in.
   * @return {string | null}
   */
  offsetName(e, t) {
    throw Ue(e, t), new Q();
  }
  /**
   * Returns the offset's value as a string
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  formatOffset(e, t) {
    throw Ue(e, t), new Q();
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  offset(e) {
    throw Ue(e), new Q();
  }
  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} other - the zone to compare
   * @return {boolean}
   */
  equals(e) {
    throw Ue(e), new Q();
  }
  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */
  get isValid() {
    throw new Q();
  }
}
var W = Intl;
let Xe = {};
function nr(s) {
  if (!Xe[s])
    try {
      Xe[s] = new W.DateTimeFormat("en-US", {
        hour12: !1,
        timeZone: s,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        era: "short"
      });
    } catch {
      throw new Ft(s);
    }
  return Xe[s];
}
const rr = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6
};
function ir(s, e) {
  const t = s.format(e).replace(/\u200E/g, ""), n = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(t), [, r, i, a, o, l, u, f] = n;
  return [a, r, i, o, l, u, f];
}
function ar(s, e) {
  const t = s.formatToParts(e), n = [];
  for (let r = 0; r < t.length; r++) {
    const { type: i, value: a } = t[r], o = rr[i];
    i === "era" ? n[o] = a : A(o) || (n[o] = parseInt(a, 10));
  }
  return n;
}
let Pe = {};
class se extends Ae {
  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  static create(e) {
    return Pe[e] || (Pe[e] = new se(e)), Pe[e];
  }
  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCache() {
    Pe = {}, Xe = {};
  }
  /**
   * Returns whether the provided string is a valid specifier.
   * This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
   * @param {string} s - The string to check validity on
   * @example IANAZone.isValidSpecifier("America/New_York") //=> true
   * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
   * @deprecated This method returns false for some valid IANA names. Use isValidZone instead.
   * @return {boolean}
   */
  static isValidSpecifier(e) {
    return this.isValidZone(e);
  }
  /**
   * Returns whether the provided string identifies a real zone
   * @param {string} zone - The string to check
   * @example IANAZone.isValidZone("America/New_York") //=> true
   * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
   * @example IANAZone.isValidZone("Sport~~blorp") //=> false
   * @return {boolean}
   */
  static isValidZone(e) {
    if (!e)
      return !1;
    try {
      return new W.DateTimeFormat("en-US", { timeZone: e }).format(), !0;
    } catch {
      return !1;
    }
  }
  constructor(e) {
    super(), this._zoneName = e, this._valid = se.isValidZone(e);
  }
  /** @override **/
  get type() {
    return "iana";
  }
  /** @override **/
  get name() {
    return this._zoneName;
  }
  /** @override **/
  get isUniversal() {
    return !1;
  }
  /** @override **/
  offsetName(e, { format: t, locale: n } = {}) {
    return yn(e, t, n, this.name);
  }
  /** @override **/
  formatOffset(e, t) {
    return Le(this.offset(e), t);
  }
  /** @override **/
  offset(e) {
    const t = new Date(e);
    if (isNaN(+t))
      return NaN;
    const n = nr(this.name);
    let r;
    const [i, a, o, l, u, f, d] = typeof n.formatToParts == typeof isNaN ? ar(n, t) : ir(n, t);
    l === "BC" && (r = -Math.abs(+i) + 1);
    const h = u === 24 ? 0 : u, m = nt({
      year: r || +i,
      month: +a,
      day: +o,
      hour: +h,
      minute: +f,
      second: +d,
      millisecond: 0
    });
    let p = +t;
    const w = p % 1e3;
    return p -= w >= 0 ? w : 1e3 + w, (m - p) / (60 * 1e3);
  }
  /** @override **/
  equals(e) {
    return e.type === "iana" && e.name === this.name;
  }
  /** @override **/
  get isValid() {
    return this._valid;
  }
}
function or(s, e) {
  var t = {};
  for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && e.indexOf(n) < 0 && (t[n] = s[n]);
  if (s != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, n = Object.getOwnPropertySymbols(s); r < n.length; r++)
      e.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(s, n[r]) && (t[n[r]] = s[n[r]]);
  return t;
}
const y = "numeric", K = "short", U = "long", ct = {
  year: y,
  month: y,
  day: y
}, As = {
  year: y,
  month: K,
  day: y
}, lr = {
  year: y,
  month: K,
  day: y,
  weekday: K
}, Vs = {
  year: y,
  month: U,
  day: y
}, $s = {
  year: y,
  month: U,
  day: y,
  weekday: U
}, Rs = {
  hour: y,
  minute: y
}, zs = {
  hour: y,
  minute: y,
  second: y
}, Us = {
  hour: y,
  minute: y,
  second: y,
  timeZoneName: K
}, Ps = {
  hour: y,
  minute: y,
  second: y,
  timeZoneName: U
}, Zs = {
  hour: y,
  minute: y,
  hourCycle: "h23"
}, Hs = {
  hour: y,
  minute: y,
  second: y,
  hourCycle: "h23"
}, qs = {
  hour: y,
  minute: y,
  second: y,
  hourCycle: "h23",
  timeZoneName: K
}, Ys = {
  hour: y,
  minute: y,
  second: y,
  hourCycle: "h23",
  timeZoneName: U
}, Gs = {
  year: y,
  month: y,
  day: y,
  hour: y,
  minute: y
}, Bs = {
  year: y,
  month: y,
  day: y,
  hour: y,
  minute: y,
  second: y
}, Js = {
  year: y,
  month: K,
  day: y,
  hour: y,
  minute: y
}, Ks = {
  year: y,
  month: K,
  day: y,
  hour: y,
  minute: y,
  second: y
}, cr = {
  year: y,
  month: K,
  day: y,
  weekday: K,
  hour: y,
  minute: y
}, Qs = {
  year: y,
  month: U,
  day: y,
  hour: y,
  minute: y,
  timeZoneName: K
}, Xs = {
  year: y,
  month: U,
  day: y,
  hour: y,
  minute: y,
  second: y,
  timeZoneName: K
}, en = {
  year: y,
  month: U,
  day: y,
  weekday: U,
  hour: y,
  minute: y,
  timeZoneName: U
}, tn = {
  year: y,
  month: U,
  day: y,
  weekday: U,
  hour: y,
  minute: y,
  second: y,
  timeZoneName: U
}, ur = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
], sn = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
], dr = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function nn(s) {
  switch (s) {
    case "narrow":
      return [...dr];
    case "short":
      return [...sn];
    case "long":
      return [...ur];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
  }
}
const rn = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
], an = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], hr = ["M", "T", "W", "T", "F", "S", "S"];
function on(s) {
  switch (s) {
    case "narrow":
      return [...hr];
    case "short":
      return [...an];
    case "long":
      return [...rn];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
  }
}
const ln = ["AM", "PM"], fr = ["Before Christ", "Anno Domini"], mr = ["BC", "AD"], gr = ["B", "A"];
function cn(s) {
  switch (s) {
    case "narrow":
      return [...gr];
    case "short":
      return [...mr];
    case "long":
      return [...fr];
  }
}
function yr(s) {
  return ln[s.hour < 12 ? 0 : 1];
}
function pr(s, e) {
  return on(e)[s.weekday - 1];
}
function wr(s, e) {
  return nn(e)[s.month - 1];
}
function br(s, e) {
  return cn(e)[s.year < 0 ? 0 : 1];
}
function kr(s, e, t = "always", n = !1) {
  const r = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."],
    milliseconds: []
    // never used
  }, i = k.normalizeUnit(s), a = r[i], o = ["hours", "minutes", "seconds"].indexOf(i) === -1;
  if (t === "auto" && o) {
    const h = i === "days";
    switch (e) {
      case 1:
        return h ? "tomorrow" : `next ${a[0]}`;
      case -1:
        return h ? "yesterday" : `last ${a[0]}`;
      case 0:
        return h ? "today" : `this ${a[0]}`;
    }
  }
  const l = Object.is(e, -0) || e < 0, u = Math.abs(e), f = u === 1, d = n ? f ? a[1] : a[2] || a[1] : f ? a[0] : i;
  return l ? `${u} ${d} ago` : `in ${u} ${d}`;
}
let xt = {};
function xr(s, e = {}) {
  const t = JSON.stringify([s, e]);
  let n = xt[t];
  return n || (n = new W.ListFormat(s, e), xt[t] = n), n;
}
let Ot = {};
function _t(s, e = {}) {
  const t = JSON.stringify([s, e]);
  let n = Ot[t];
  return n || (n = new W.DateTimeFormat(s, e), Ot[t] = n), n;
}
let vt = {};
function Or(s, e) {
  const t = JSON.stringify([s, e]);
  let n = vt[t];
  return n || (n = new W.NumberFormat(s, e), vt[t] = n), n;
}
let Tt = {};
function _r(s, e = {}) {
  const t = JSON.stringify([s, e]);
  let n = Tt[t];
  return n || (n = new W.RelativeTimeFormat(s, e), Tt[t] = n), n;
}
let et;
function vr() {
  return et || (et = new W.DateTimeFormat().resolvedOptions().locale), et;
}
function Tr(s) {
  const e = s.indexOf("-x-");
  e !== -1 && (s = s.substring(0, e));
  const t = s.indexOf("-u-");
  if (t === -1)
    return [s];
  {
    let n, r;
    try {
      n = _t(s).resolvedOptions(), r = s;
    } catch {
      const l = s.substring(0, t);
      n = _t(l).resolvedOptions(), r = l;
    }
    const { numberingSystem: i, calendar: a } = n;
    return [r, i, a];
  }
}
function Sr(s, e, t) {
  return (t || e) && (s.includes("-u-") || (s += "-u"), t && (s += `-ca-${t}`), e && (s += `-nu-${e}`)), s;
}
function Er(s) {
  const e = [];
  for (let t = 1; t <= 12; t++) {
    const n = g.utc(2009, t, 1);
    e.push(s(n));
  }
  return e;
}
function Cr(s) {
  const e = [];
  for (let t = 1; t <= 7; t++) {
    const n = g.utc(2016, 11, 13 + t);
    e.push(s(n));
  }
  return e;
}
function Ze(s, e, t, n) {
  return s.listingMode() === "en" ? t(e) : n(e);
}
class Dr {
  constructor(e, t, n) {
    const { padTo: r, floor: i } = n, a = or(n, ["padTo", "floor"]);
    if (this._padTo = r || 0, this._floor = i || !1, !t || Object.keys(a).length > 0) {
      const o = Object.assign({ useGrouping: !1 }, n);
      this._padTo > 0 && (o.minimumIntegerDigits = r), this._inf = Or(e, o);
    }
  }
  format(e) {
    if (this._inf) {
      const t = this._floor ? Math.floor(e) : e;
      return this._inf.format(t);
    } else {
      const t = this._floor ? Math.floor(e) : Rt(e, 3);
      return N(t, this._padTo);
    }
  }
}
class Nr {
  get dtf() {
    return this._dtf;
  }
  constructor(e, t, n) {
    this._opts = n;
    let r;
    if (this._opts.timeZone)
      this._dt = e;
    else if (e.zone.type === "fixed") {
      const a = -1 * (e.offset / 60), o = a >= 0 ? `Etc/GMT+${a}` : `Etc/GMT${a}`;
      e.offset !== 0 && se.create(o).isValid ? (r = o, this._dt = e) : (r = "UTC", this._dt = e.offset === 0 ? e : e.setZone("UTC").plus({ minutes: e.offset }), this._originalZone = e.zone);
    } else e.zone.type === "system" ? this._dt = e : e.zone.type === "iana" ? (this._dt = e, r = e.zone.name) : (r = "UTC", this._dt = e.setZone("UTC").plus({ minutes: e.offset }), this._originalZone = e.zone);
    const i = Object.assign(Object.assign({}, this._opts), { timeZone: this._opts.timeZone || r });
    this._dtf = _t(t, i);
  }
  format() {
    return this._originalZone ? this.formatToParts().map(({ value: e }) => e).join("") : this.dtf.format(this._dt.toJSDate());
  }
  formatToParts() {
    const e = this.dtf.formatToParts(this._dt.toJSDate());
    return this._originalZone ? e.map((t) => {
      if (t.type === "timeZoneName") {
        const n = this._originalZone.offsetName(this._dt.ts, {
          locale: this._dt.locale,
          format: this._opts.timeZoneName
        });
        return Object.assign(Object.assign({}, t), {
          // tslint:disable-next-line:no-non-null-assertion
          value: n
        });
      } else
        return t;
    }) : e;
  }
  resolvedOptions() {
    return this._dtf.resolvedOptions();
  }
}
class Ir {
  constructor(e, t, n) {
    this._opts = Object.assign({ style: "long" }, n), !t && mn() && (this._rtf = _r(e, n));
  }
  format(e, t) {
    return this._rtf ? this._rtf.format(e, t) : kr(t, e, this._opts.numeric, this._opts.style !== "long");
  }
  formatToParts(e, t) {
    return this._rtf ? this._rtf.formatToParts(e, t) : [];
  }
}
class x {
  get fastNumbers() {
    return this._fastNumbersCached === void 0 && (this._fastNumbersCached = this._supportsFastNumbers()), this._fastNumbersCached;
  }
  constructor(e, t, n, r, i) {
    const [a, o, l] = Tr(e);
    this.locale = a, this.numberingSystem = t || o, this.outputCalendar = n || l, this._intl = Sr(this.locale, this.numberingSystem, this.outputCalendar), this._weekSettings = r, this._weekdaysCache = { format: {}, standalone: {} }, this._monthsCache = { format: {}, standalone: {} }, this._meridiemCache = void 0, this._eraCache = {}, this._specifiedLocale = i, this._fastNumbersCached = void 0;
  }
  static create(e, t, n, r, i = !1) {
    const a = e || D.defaultLocale, o = a || (i ? "en-US" : vr()), l = t || D.defaultNumberingSystem, u = n || D.defaultOutputCalendar, f = St(r) || D.defaultWeekSettings;
    return new x(o, l, u, f, a);
  }
  static fromObject({ locale: e, numberingSystem: t, outputCalendar: n, weekSettings: r } = {}) {
    return x.create(e, t, n, r);
  }
  static fromOpts(e) {
    return x.create(e.locale, e.numberingSystem, e.outputCalendar, e.weekSettings, e.defaultToEN);
  }
  static resetCache() {
    et = void 0, xt = {}, Ot = {}, vt = {}, Tt = {};
  }
  //
  clone(e) {
    return !e || Object.getOwnPropertyNames(e).length === 0 ? this : x.create(e.locale || this._specifiedLocale, e.numberingSystem || this.numberingSystem, e.outputCalendar || this.outputCalendar, St(e.weekSettings) || this._weekSettings, e.defaultToEN || !1);
  }
  dtFormatter(e, t = {}) {
    return new Nr(e, this._intl, t);
  }
  equals(e) {
    return this.locale === e.locale && this.numberingSystem === e.numberingSystem && this.outputCalendar === e.outputCalendar;
  }
  eras(e) {
    return Ze(this, e, cn, (t) => {
      const n = { era: t };
      return this._eraCache[t] || (this._eraCache[t] = [g.utc(-40, 1, 1), g.utc(2017, 1, 1)].map((r) => this.extract(r, n, "era"))), this._eraCache[t];
    });
  }
  extract(e, t, n) {
    const r = this.dtFormatter(e, t), i = r.formatToParts(), a = i.find((o) => o.type.toLowerCase() === n.toLowerCase());
    if (!a)
      throw new Error(`Invalid extract field ${n}`);
    return a.value;
  }
  getMinDaysInFirstWeek() {
    return this.getWeekSettings().minimalDays;
  }
  getStartOfWeek() {
    return this.getWeekSettings().firstDay;
  }
  getWeekSettings() {
    return this._weekSettings ? this._weekSettings : gn() ? this._getCachedWeekInfo(this.locale) : he;
  }
  getWeekendDays() {
    return this.getWeekSettings().weekend;
  }
  isEnglish() {
    return (
      // tslint:disable-next-line:no-bitwise
      !!~["en", "en-us"].indexOf(this.locale.toLowerCase()) || new W.DateTimeFormat(this._intl).resolvedOptions().locale.startsWith("en-us")
    );
  }
  listFormatter(e = {}) {
    return xr(this._intl, e);
  }
  // In Luxon boolean param "defaultOK" was still there, although unused
  listingMode() {
    const e = this.isEnglish(), t = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
    return e && t ? "en" : "intl";
  }
  meridiems() {
    return Ze(
      this,
      "long",
      // arbitrary unused value
      () => ln,
      () => (this._meridiemCache === void 0 && (this._meridiemCache = [
        g.utc(2016, 11, 13, 9),
        g.utc(2016, 11, 13, 19)
      ].map((e) => this.extract(e, { hour: "numeric", hourCycle: "h12" }, "dayPeriod"))), this._meridiemCache)
    );
  }
  months(e, t = !1) {
    return Ze(this, e, nn, (n) => {
      const r = t ? { month: n, day: "numeric" } : { month: n }, i = t ? "format" : "standalone";
      return this._monthsCache[i][n] || (this._monthsCache[i][n] = Er((a) => this.extract(a, r, "month"))), this._monthsCache[i][n];
    });
  }
  numberFormatter(e = {}) {
    return new Dr(this._intl, this.fastNumbers, e);
  }
  redefaultToEN(e = {}) {
    return this.clone(Object.assign(Object.assign({}, e), { defaultToEN: !0 }));
  }
  redefaultToSystem(e = {}) {
    return this.clone(Object.assign(Object.assign({}, e), { defaultToEN: !1 }));
  }
  relFormatter(e = {}) {
    return new Ir(this._intl, this.isEnglish(), e);
  }
  toString() {
    return `Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`;
  }
  weekdays(e, t = !1) {
    return Ze(this, e, on, (n) => {
      const r = t ? { weekday: n, year: "numeric", month: "long", day: "numeric" } : { weekday: n }, i = t ? "format" : "standalone";
      return this._weekdaysCache[i][n] || (this._weekdaysCache[i][n] = Cr((a) => this.extract(a, r, "weekday"))), this._weekdaysCache[i][n];
    });
  }
  //
  _getCachedWeekInfo(e) {
    let t = x._weekInfoCache[e];
    if (!t) {
      const n = new W.Locale(e);
      t = "getWeekInfo" in n ? n.getWeekInfo() : n.weekInfo, x._weekInfoCache[e] = t;
    }
    return t;
  }
  _supportsFastNumbers() {
    return this.numberingSystem && this.numberingSystem !== "latn" ? !1 : this.numberingSystem === "latn" || !this.locale || this.locale.startsWith("en") || W.DateTimeFormat(this._intl).resolvedOptions().numberingSystem === "latn";
  }
}
x._weekInfoCache = {};
let mt = null;
class z extends Ae {
  /**
   * Get a singleton instance of UTC
   * @return {FixedOffsetZone}
   */
  static get utcInstance() {
    return mt === null && (mt = new z(0)), mt;
  }
  /**
   * The IANA name of this zone, i.e. `Etc/UTC` or `Etc/GMT+/-nn`
   *
   * @override
   * @type {string}
   */
  get ianaName() {
    return this._fixed === 0 ? "Etc/UTC" : `Etc/GMT${Le(-this._fixed, "narrow")}`;
  }
  /**
   * Returns whether the offset is known to be fixed for the whole year:
   * Always returns true for all fixed offset zones.
   * @override
   * @type {boolean}
   */
  get isUniversal() {
    return !0;
  }
  /**
   * Return whether this Zone is valid:
   * All fixed offset zones are valid.
   * @override
   * @type {boolean}
   */
  get isValid() {
    return !0;
  }
  /**
   * The name of this zone.
   * All fixed zones' names always start with "UTC" (plus optional offset)
   * @override
   * @type {string}
   */
  get name() {
    return this._fixed === 0 ? "UTC" : `UTC${Le(this._fixed, "narrow")}`;
  }
  /**
   * The type of zone. `fixed` for all instances of `FixedOffsetZone`.
   * @override
   * @type {string}
   */
  get type() {
    return "fixed";
  }
  constructor(e) {
    super(), this._fixed = e;
  }
  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */
  static instance(e) {
    return e === 0 ? z.utcInstance : new z(e);
  }
  /**
   * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
   * @param {string} s - The offset string to parse
   * @example FixedOffsetZone.parseSpecifier("UTC+6")
   * @example FixedOffsetZone.parseSpecifier("UTC+06")
   * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
   * @return {FixedOffsetZone}
   */
  static parseSpecifier(e) {
    if (e) {
      const t = e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (t)
        return new z(ht(t[1], t[2]));
    }
    return null;
  }
  /**
   * Return whether this Zone is equal to another zone (i.e. also fixed and same offset)
   * @override
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(e) {
    return e.type === "fixed" && e._fixed === this._fixed;
  }
  /**
   * Returns the offset's value as a string
   * @override
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  formatOffset(e, t) {
    return Le(this._fixed, t);
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   *
   * For fixed offset zones, this is constant and does not depend on a timestamp.
   * @override
   * @return {number}
   */
  offset() {
    return this._fixed;
  }
  /**
   * Returns the offset's common name at the specified timestamp.
   *
   * For fixed offset zones this equals to the zone name.
   * @override
   */
  offsetName() {
    return this.name;
  }
}
class Lt extends Ae {
  constructor(e) {
    super(), this._zoneName = e, Object.setPrototypeOf(this, Lt.prototype);
  }
  /** @override **/
  get type() {
    return "invalid";
  }
  /** @override **/
  get name() {
    return this._zoneName;
  }
  /** @override **/
  get isUniversal() {
    return !1;
  }
  /** @override **/
  offsetName() {
    return null;
  }
  /** @override **/
  formatOffset() {
    return "";
  }
  /** @override **/
  offset() {
    return NaN;
  }
  /** @override **/
  equals() {
    return !1;
  }
  /** @override **/
  get isValid() {
    return !1;
  }
}
let gt = null;
class ut extends Ae {
  /**
   * Get a singleton instance of the local zone
   * @return {SystemZone}
   */
  static get instance() {
    return gt === null && (gt = new ut()), gt;
  }
  /** @override **/
  get type() {
    return "system";
  }
  /** @override **/
  get name() {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  /** @override **/
  get isUniversal() {
    return !1;
  }
  /** @override **/
  offsetName(e, { format: t, locale: n }) {
    return yn(e, t, n);
  }
  /** @override **/
  formatOffset(e, t) {
    return Le(this.offset(e), t);
  }
  /** @override **/
  offset(e) {
    return -new Date(e).getTimezoneOffset();
  }
  /** @override **/
  equals(e) {
    return e.type === "system";
  }
  /** @override **/
  get isValid() {
    return !0;
  }
}
const ne = (s, e) => {
  if (A(s) || s === null)
    return e;
  if (s instanceof Ae)
    return s;
  if (Ar(s)) {
    const t = s.toLowerCase();
    return t === "default" ? e : t === "local" || t === "system" ? ut.instance : t === "utc" || t === "gmt" ? z.utcInstance : z.parseSpecifier(t) || se.create(s);
  } else return X(s) ? z.instance(s) : typeof s == "object" && "offset" in s && typeof s.offset == "function" ? s : new Lt(s);
}, Wt = {
  arab: "[٠-٩]",
  arabext: "[۰-۹]",
  bali: "[᭐-᭙]",
  beng: "[০-৯]",
  deva: "[०-९]",
  fullwide: "[０-９]",
  gujr: "[૦-૯]",
  hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
  khmr: "[០-៩]",
  knda: "[೦-೯]",
  laoo: "[໐-໙]",
  limb: "[᥆-᥏]",
  mlym: "[൦-൯]",
  mong: "[᠐-᠙]",
  mymr: "[၀-၉]",
  orya: "[୦-୯]",
  tamldec: "[௦-௯]",
  telu: "[౦-౯]",
  thai: "[๐-๙]",
  tibt: "[༠-༩]",
  latn: "\\d"
}, es = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881]
}, Mr = Wt.hanidec.replace(/[\[|\]]/g, "").split("");
function jr(s) {
  const e = parseInt(s, 10);
  if (!isNaN(e))
    return e;
  let t = "";
  for (let n = 0; n < s.length; n++) {
    const r = s.charCodeAt(n);
    if (s[n].search(Wt.hanidec) !== -1)
      t += Mr.indexOf(s[n]);
    else
      for (const i in es) {
        const [a, o] = es[i];
        if (r >= a && r <= o) {
          t += r - a;
          break;
        }
      }
  }
  return parseInt(t, 10);
}
let pe = {};
function Fr() {
  pe = {};
}
function G({ numberingSystem: s }, e = "") {
  const t = s || "latn";
  return pe[t] || (pe[t] = {}), pe[t][e] || (pe[t][e] = new RegExp(`${Wt[t]}${e}`)), pe[t][e];
}
let ts = () => Date.now(), yt = "system", ss, ns, rs, is = 60, as = !1, os;
class D {
  /**
   * Set the default locale to create DateTimes with. Does not affect existing instances.
   */
  static set defaultLocale(e) {
    ss = e;
  }
  /**
   * Get the default locale to create DateTimes with. Does not affect existing instances.
   */
  static get defaultLocale() {
    return ss;
  }
  /**
   * Set the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultNumberingSystem(e) {
    ns = e;
  }
  /**
   * Get the default numbering system to create DateTimes with. Does not affect existing instances.
   */
  static get defaultNumberingSystem() {
    return ns;
  }
  /**
   * Set the default output calendar to create DateTimes with. Does not affect existing instances.
   */
  static set defaultOutputCalendar(e) {
    rs = e;
  }
  /**
   * Get the default output calendar to create DateTimes with. Does not affect existing instances.
   */
  static get defaultOutputCalendar() {
    return rs;
  }
  /**
   * Allows overriding the default locale week settings, i.e. the start of the week, the weekend and
   * how many days are required in the first week of a year.
   * Does not affect existing instances.
   */
  static set defaultWeekSettings(e) {
    os = St(e);
  }
  static get defaultWeekSettings() {
    return os;
  }
  /**
   * [TS] had to use type Zone here. I created another setter to use a ZoneLike instead
   * Let's face it. This is ugly. The original should have this approach as well.
   * Set the default time zone to create DateTimes in. Does not affect existing instances.
   * Use the value "system" to reset this value to the system's time zone.
   */
  static set defaultZone(e) {
    yt = e;
  }
  /**
   * Get the default time zone object to create DateTimes in. Does not affect existing instances.
   */
  static get defaultZone() {
    return ne(yt, ut.instance);
  }
  /**
   * [TS] can't use the real setter here because set and get must have the same type.
   * Let's face this. This is bullshit. But I get that you want to make life easier for users.
   * Set the default time zone to create DateTimes in. Does not affect existing instances.
   * Use the value "system" to reset this value to the system's time zone.
   */
  static set defaultZoneLike(e) {
    yt = e;
  }
  /**
   * Set the callback for returning the current timestamp.
   * The function should return a number, which will be interpreted as an Epoch millisecond count
   * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
   * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
   */
  // eslint-disable-next-line @typescript-eslint/naming-convention
  static set now(e) {
    ts = e;
  }
  /**
   * Get the callback for returning the current timestamp.
   */
  // eslint-disable-next-line @typescript-eslint/naming-convention
  static get now() {
    return ts;
  }
  /**
   * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static set throwOnInvalid(e) {
    as = e;
  }
  /**
   * Get whether TSLuxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   */
  static get throwOnInvalid() {
    return as;
  }
  /**
   * Set the cutoff year for whether a 2-digit year string is interpreted in the current or previous century. Numbers higher than the cutoff will be considered to mean 19xx and numbers lower or equal to the cutoff will be considered 20xx.
   * @type {number}
   * @example Settings.twoDigitCutoffYear = 0 // all 'yy' are interpreted as 20th century
   * @example Settings.twoDigitCutoffYear = 99 // all 'yy' are interpreted as 21st century
   * @example Settings.twoDigitCutoffYear = 50 // '49' -> 2049; '50' -> 1950
   * @example Settings.twoDigitCutoffYear = 1950 // interpreted as 50
   * @example Settings.twoDigitCutoffYear = 2050 // ALSO interpreted as 50
   */
  static set twoDigitCutoffYear(e) {
    is = e % 100;
  }
  /**
   * Get the cutoff year for whether a 2-digit year string is interpreted in the current or previous century. Numbers higher than the cutoff will be considered to mean 19xx and numbers lower or equal to the cutoff will be considered 20xx.
   * @type {number}
   */
  static get twoDigitCutoffYear() {
    return is;
  }
  // Methods
  /**
   * Reset TSLuxon's global caches. Should only be necessary in testing scenarios.
   */
  static resetCaches() {
    x.resetCache(), se.resetCache(), g.resetCache(), Fr();
  }
}
class J {
  constructor(e, t) {
    this.reason = e, this.explanation = t, this._formattedExplanation = "", t && (this._formattedExplanation = `: ${t}`);
  }
  toMessage() {
    return `${this.reason}${this._formattedExplanation}`;
  }
}
const un = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], dn = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function q(s, e) {
  return new J("unit out of range", `you specified ${e} (of type ${typeof e}) as a ${s}, which is invalid`);
}
function hn(s, e, t) {
  return t + (Ve(s) ? dn : un)[e - 1];
}
function fn(s, e) {
  const t = Ve(s) ? dn : un, n = t.findIndex((i) => i < e), r = e - t[n];
  return { month: n + 1, day: r };
}
function At(s, e, t) {
  const n = new Date(Date.UTC(s, e - 1, t));
  s < 100 && s >= 0 && n.setUTCFullYear(n.getUTCFullYear() - 1900);
  const r = n.getUTCDay();
  return r === 0 ? 7 : r;
}
function He(s, e = he.minimalDays, t = he.firstDay) {
  const { year: n, month: r, day: i } = s, a = hn(n, r, i), o = Vt(At(n, r, i), t);
  let l = Math.floor((a - o + 14 - e) / 7), u;
  return l < 1 ? (u = n - 1, l = We(u, e, t)) : l > We(n, e, t) ? (u = n + 1, l = 1) : u = n, Object.assign({ weekYear: u, weekNumber: l, weekday: o }, ft(s));
}
function ls(s, e = he.minimalDays, t = he.firstDay) {
  const { weekYear: n, weekNumber: r, weekday: i } = s, a = Vt(At(n, 1, e), t), o = be(n);
  let l = r * 7 + i - a - 7 + e, u;
  l < 1 ? (u = n - 1, l += be(u)) : l > o ? (u = n + 1, l -= be(n)) : u = n;
  const { month: f, day: d } = fn(u, l);
  return Object.assign({ year: u, month: f, day: d }, ft(s));
}
function pt(s) {
  const { year: e, month: t, day: n } = s, r = hn(e, t, n);
  return Object.assign({ year: e, ordinal: r }, ft(s));
}
function cs(s) {
  const { year: e, ordinal: t } = s, { month: n, day: r } = fn(e, t);
  return Object.assign({ year: e, month: n, day: r }, ft(s));
}
function Lr(s, e = 4, t = 1) {
  const n = dt(s.weekYear), r = Y(s.weekNumber, 1, We(s.weekYear, e, t)), i = Y(s.weekday, 1, 7);
  if (n)
    if (r) {
      if (!i)
        return q("weekday", s.weekday);
    } else return q("week", s.weekNumber);
  else return q("weekYear", s.weekYear);
  return !1;
}
function Wr(s) {
  const e = dt(s.year), t = Y(s.ordinal, 1, be(s.year));
  if (e) {
    if (!t)
      return q("ordinal", s.ordinal);
  } else return q("year", s.year);
  return !1;
}
function us(s) {
  const e = dt(s.year), t = Y(s.month, 1, 12), n = Y(s.day, 1, tt(s.year, s.month));
  if (e)
    if (t) {
      if (!n)
        return q("day", s.day);
    } else return q("month", s.month);
  else return q("year", s.year);
  return !1;
}
function ds(s) {
  const { hour: e, minute: t, second: n, millisecond: r } = s, i = Y(e, 0, 23) || e === 24 && t === 0 && n === 0 && r === 0, a = Y(t, 0, 59), o = Y(n, 0, 59), l = Y(r, 0, 999);
  if (i)
    if (a)
      if (o) {
        if (!l)
          return q("millisecond", r);
      } else return q("second", n);
    else return q("minute", t);
  else return q("hour", e);
  return !1;
}
function Vt(s, e) {
  return (s - e + 7) % 7 + 1;
}
function hs(s, e) {
  if (T(s.localWeekday) || T(s.localWeekNumber) || T(s.localWeekYear)) {
    if (T(s.weekday) || T(s.weekNumber) || T(s.weekYear))
      throw new ie("Cannot mix locale-based week fields with ISO-based week fields");
    return T(s.localWeekday) && (s.weekday = s.localWeekday), T(s.localWeekNumber) && (s.weekNumber = s.localWeekNumber), T(s.localWeekYear) && (s.weekYear = s.localWeekYear), delete s.localWeekday, delete s.localWeekNumber, delete s.localWeekYear, {
      minDaysInFirstWeek: e.getMinDaysInFirstWeek(),
      startOfWeek: e.getStartOfWeek()
    };
  } else
    return { minDaysInFirstWeek: he.minimalDays, startOfWeek: he.firstDay };
}
function T(s) {
  return typeof s < "u";
}
function A(s) {
  return typeof s > "u";
}
function X(s) {
  return typeof s == "number";
}
function dt(s) {
  return X(s) && s % 1 === 0;
}
function Ar(s) {
  return typeof s == "string";
}
function Vr(s) {
  return Object.prototype.toString.call(s) === "[object Date]";
}
function mn() {
  try {
    return typeof W < "u" && !!W.RelativeTimeFormat;
  } catch {
    return !1;
  }
}
function gn() {
  try {
    return typeof W < "u" && !!W.Locale && ("weekInfo" in W.Locale.prototype || "getWeekInfo" in W.Locale.prototype);
  } catch {
    return !1;
  }
}
function $r(s) {
  return Array.isArray(s) ? s : [s];
}
function fs(s, e, t) {
  return s.length === 0 ? void 0 : s.reduce((r, i) => {
    const a = [e(i), i];
    return t(r[0], a[0]) === r[0] ? r : a;
  }, [e(s[0]), s[0]])[1];
}
function Rr(s, e) {
  return e.reduce((t, n) => (t[n] = s[n], t), {});
}
function St(s) {
  if (s) {
    if (typeof s != "object")
      throw new j("Week settings must be an object");
    if (!Y(s.firstDay, 1, 7) || !Y(s.minimalDays, 1, 7) || !Array.isArray(s.weekend) || s.weekend.some((e) => !Y(e, 1, 7)))
      throw new j("Invalid week settings");
    return {
      firstDay: s.firstDay,
      minimalDays: s.minimalDays,
      weekend: s.weekend
    };
  } else return;
}
function Y(s, e, t) {
  return dt(s) && s >= e && s <= t;
}
function zr(s, e) {
  return s - e * Math.floor(s / e);
}
function N(s, e = 2) {
  const t = +s < 0 ? "-" : "", n = t ? +s * -1 : s;
  let r;
  return n.toString().length < e ? r = ("0".repeat(e) + n).slice(-e) : r = n.toString(), `${t}${r}`;
}
function re(s) {
  if (s)
    return parseInt(s, 10);
}
function ce(s) {
  if (s)
    return parseFloat(s);
}
function $t(s) {
  if (!(A(s) || s === null || s === "")) {
    const e = parseFloat("0." + s) * 1e3;
    return Math.floor(e);
  }
}
function Rt(s, e, t = !1) {
  const n = Math.pow(10, e);
  return (t ? Math.trunc : Math.round)(s * n) / n;
}
function Ve(s) {
  return s % 4 === 0 && (s % 100 !== 0 || s % 400 === 0);
}
function be(s) {
  return Ve(s) ? 366 : 365;
}
function tt(s, e) {
  const t = zr(e - 1, 12) + 1, n = s + (e - t) / 12;
  return [31, Ve(n) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t - 1];
}
function nt(s) {
  let e = Date.UTC(s.year, s.month - 1, s.day, s.hour, s.minute, s.second, s.millisecond);
  return s.year < 100 && s.year >= 0 && (e = new Date(e), e.setUTCFullYear(s.year, s.month - 1, s.day)), +e;
}
function ms(s, e, t) {
  return -Vt(At(s, 1, e), t) + e - 1;
}
function We(s, e = 4, t = 1) {
  const n = ms(s, e, t), r = ms(s + 1, e, t);
  return (be(s) - n + r) / 7;
}
function Et(s) {
  return s > 99 ? s : s > D.twoDigitCutoffYear ? 1900 + s : 2e3 + s;
}
function yn(s, e, t, n) {
  const r = new Date(s), a = Object.assign({ timeZoneName: e }, {
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: n
  }), o = new W.DateTimeFormat(t, a).formatToParts(r).find((l) => l.type.toLowerCase() === "timezonename");
  return o ? o.value : null;
}
function ht(s, e) {
  let t = parseInt(s, 10);
  Number.isNaN(t) && (t = 0);
  const n = parseInt(e, 10) || 0, r = t < 0 || Object.is(t, -0) ? -n : n;
  return t * 60 + r;
}
function pn(s) {
  const e = Number(s);
  if (typeof s == "boolean" || s === "" || Number.isNaN(e))
    throw new j(`Invalid unit value ${s}`);
  return e;
}
function rt(s, e) {
  return Object.keys(s).reduce((t, n) => (s[n] !== void 0 && s[n] !== null && (t[e(n)] = pn(s[n])), t), {});
}
function Le(s, e) {
  const t = Math.trunc(Math.abs(s / 60)), n = Math.trunc(Math.abs(s % 60)), r = s >= 0 ? "+" : "-";
  switch (e) {
    case "short":
      return `${r}${N(t, 2)}:${N(n, 2)}`;
    case "narrow":
      return `${r}${t}${n > 0 ? `:${n}` : ""}`;
    case "techie":
      return `${r}${N(t, 2)}${N(n, 2)}`;
    default:
      throw new RangeError(`Value format ${e} is out of range for property format`);
  }
}
function ft(s) {
  return Rr(s, ["hour", "minute", "second", "millisecond"]);
}
const ue = [
  "years",
  "quarters",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds"
], zt = ue.slice(0).reverse(), gs = [
  "years",
  "months",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds"
], Ur = {
  year: "year",
  years: "year",
  quarter: "quarter",
  quarters: "quarter",
  month: "month",
  months: "month",
  day: "day",
  days: "day",
  hour: "hour",
  hours: "hour",
  localweeknumber: "localWeekNumber",
  localweeknumbers: "localWeekNumber",
  localweekday: "localWeekday",
  localweekdays: "localWeekday",
  localweekyear: "localWeekYear",
  localweekyears: "localWeekYear",
  minute: "minute",
  minutes: "minute",
  second: "second",
  seconds: "second",
  millisecond: "millisecond",
  milliseconds: "millisecond",
  weekday: "weekday",
  weekdays: "weekday",
  weeknumber: "weekNumber",
  weeksnumber: "weekNumber",
  weeknumbers: "weekNumber",
  weekyear: "weekYear",
  weekyears: "weekYear",
  ordinal: "ordinal"
}, he = {
  firstDay: 1,
  minimalDays: 4,
  weekend: [6, 7]
};
function ys(s, e) {
  let t = "";
  for (const n of s)
    n.literal ? t += n.val : t += e(n.val);
  return t;
}
const Pr = {
  /* eslint-disable @typescript-eslint/naming-convention */
  D: ct,
  DD: As,
  DDD: Vs,
  DDDD: $s,
  t: Rs,
  tt: zs,
  ttt: Us,
  tttt: Ps,
  T: Zs,
  TT: Hs,
  TTT: qs,
  TTTT: Ys,
  f: Gs,
  ff: Js,
  fff: Qs,
  ffff: en,
  F: Bs,
  FF: Ks,
  FFF: Xs,
  FFFF: tn
  /* eslint-enable @typescript-eslint/naming-convention */
};
class V {
  constructor(e, t) {
    this._opts = t, this._loc = e, this._systemLoc = void 0;
  }
  static create(e, t = {}) {
    return new V(e, t);
  }
  static macroTokenToFormatOpts(e) {
    return Pr[e];
  }
  static parseFormat(e) {
    let t = null, n = "", r = !1;
    const i = [];
    for (let a = 0; a < e.length; a++) {
      const o = e.charAt(a);
      o === "'" ? (n.length > 0 && i.push({ literal: r || /^\s+$/.test(n), val: n }), t = null, n = "", r = !r) : r || o === t ? n += o : (n.length > 0 && i.push({ literal: /^\s+$/.test(n), val: n }), n = o, t = o);
    }
    return n.length > 0 && i.push({ literal: r || /^\s+$/.test(n), val: n }), i;
  }
  dtFormatter(e, t = {}) {
    return this._loc.dtFormatter(e, Object.assign(Object.assign({}, this._opts), t));
  }
  formatDateTime(e, t) {
    return this.dtFormatter(e, t).format();
  }
  formatDateTimeFromString(e, t) {
    const n = this._loc.listingMode() === "en", r = this._loc.outputCalendar && this._loc.outputCalendar !== "gregory", i = (m, p) => this._loc.extract(e, m, p), a = (m) => e.isOffsetFixed && e.offset === 0 && m.allowZ ? "Z" : e.isValid ? e.zone.formatOffset(e.ts, m.format) : "", o = () => n ? yr(e) : i({ hour: "numeric", hourCycle: "h12" }, "dayPeriod"), l = (m, p) => n ? wr(e, m) : i(p ? { month: m } : { month: m, day: "numeric" }, "month"), u = (m, p) => n ? pr(e, m) : i(p ? { weekday: m } : { weekday: m, month: "long", day: "numeric" }, "weekday"), f = (m) => {
      const p = V.macroTokenToFormatOpts(m);
      return p ? this.formatWithSystemDefault(e, p) : m;
    }, d = (m) => n ? br(e, m) : i({ era: m }, "era"), h = (m) => {
      switch (m) {
        case "S":
          return this.num(e.millisecond);
        case "u":
        case "SSS":
          return this.num(e.millisecond, 3);
        case "s":
          return this.num(e.second);
        case "ss":
          return this.num(e.second, 2);
        case "uu":
          return this.num(Math.floor(e.millisecond / 10), 2);
        case "uuu":
          return this.num(Math.floor(e.millisecond / 100));
        case "m":
          return this.num(e.minute);
        case "mm":
          return this.num(e.minute, 2);
        case "h":
          return this.num(e.hour % 12 === 0 ? 12 : e.hour % 12);
        case "hh":
          return this.num(e.hour % 12 === 0 ? 12 : e.hour % 12, 2);
        case "H":
          return this.num(e.hour);
        case "HH":
          return this.num(e.hour, 2);
        case "Z":
          return a({ format: "narrow", allowZ: this._opts.allowZ });
        case "ZZ":
          return a({ format: "short", allowZ: this._opts.allowZ });
        case "ZZZ":
          return a({ format: "techie", allowZ: this._opts.allowZ });
        case "ZZZZ":
          return e.zone.offsetName(e.ts, { format: "short", locale: this._loc.locale }) || "";
        case "ZZZZZ":
          return e.zone.offsetName(e.ts, { format: "long", locale: this._loc.locale }) || "";
        case "z":
          return e.zoneName || "";
        case "a":
          return o();
        case "d":
          return r ? i({ day: "numeric" }, "day") : this.num(e.day);
        case "dd":
          return r ? i({ day: "2-digit" }, "day") : this.num(e.day, 2);
        case "c":
          return this.num(e.weekday);
        case "ccc":
          return u("short", !0);
        case "cccc":
          return u("long", !0);
        case "ccccc":
          return u("narrow", !0);
        case "E":
          return this.num(e.weekday);
        case "EEE":
          return u("short", !1);
        case "EEEE":
          return u("long", !1);
        case "EEEEE":
          return u("narrow", !1);
        case "L":
          return r ? i({ month: "numeric", day: "numeric" }, "month") : this.num(e.month);
        case "LL":
          return r ? i({ month: "2-digit", day: "numeric" }, "month") : this.num(e.month, 2);
        case "LLL":
          return l("short", !0);
        case "LLLL":
          return l("long", !0);
        case "LLLLL":
          return l("narrow", !0);
        case "M":
          return r ? i({ month: "numeric" }, "month") : this.num(e.month);
        case "MM":
          return r ? i({ month: "2-digit" }, "month") : this.num(e.month, 2);
        case "MMM":
          return l("short", !1);
        case "MMMM":
          return l("long", !1);
        case "MMMMM":
          return l("narrow", !1);
        case "y":
          return r ? i({ year: "numeric" }, "year") : this.num(e.year);
        case "yy":
          return r ? i({ year: "2-digit" }, "year") : this.num(parseInt(e.year.toString().slice(-2), 10), 2);
        case "yyyy":
          return r ? i({ year: "numeric" }, "year") : this.num(e.year, 4);
        case "yyyyyy":
          return r ? i({ year: "numeric" }, "year") : this.num(e.year, 6);
        case "G":
          return d("short");
        case "GG":
          return d("long");
        case "GGGGG":
          return d("narrow");
        case "kk":
          return this.num(parseInt(e.weekYear.toString().slice(-2), 10), 2);
        case "kkkk":
          return this.num(e.weekYear, 4);
        case "W":
          return this.num(e.weekNumber);
        case "WW":
          return this.num(e.weekNumber, 2);
        case "o":
          return this.num(e.ordinal);
        case "ooo":
          return this.num(e.ordinal, 3);
        case "q":
          return this.num(e.quarter);
        case "qq":
          return this.num(e.quarter, 2);
        case "X":
          return this.num(Math.floor(e.ts / 1e3));
        case "x":
          return this.num(e.ts);
        default:
          return f(m);
      }
    };
    return ys(V.parseFormat(t), h);
  }
  formatDateTimeParts(e, t) {
    return this.dtFormatter(e, t).formatToParts();
  }
  formatDurationFromString(e, t) {
    const n = (l) => {
      switch (l[0]) {
        case "S":
          return "milliseconds";
        case "s":
          return "seconds";
        case "m":
          return "minutes";
        case "h":
          return "hours";
        case "d":
          return "days";
        case "M":
          return "months";
        case "y":
          return "years";
        default:
          return;
      }
    }, r = (l) => (u) => {
      const f = n(u);
      return f ? this.num(l.get(f), u.length) : u;
    }, i = V.parseFormat(t), a = i.reduce((l, { literal: u, val: f }) => u ? l : l.concat(f), []), o = e.shiftTo(...a.map(n).filter((l) => !!l));
    return ys(i, r(o));
  }
  formatInterval(e, t = {}) {
    if (!e.isValid)
      throw Error("Invalid Interval provided!");
    return this.dtFormatter(e.start, t).dtf.formatRange(e.start.toJSDate(), e.end.toJSDate());
  }
  formatWithSystemDefault(e, t) {
    return this._systemLoc === void 0 && (this._systemLoc = this._loc.redefaultToSystem()), this._systemLoc.dtFormatter(e, Object.assign(Object.assign({}, this._opts), t)).format();
  }
  num(e, t = 0) {
    if (this._opts.forceSimple)
      return N(e, t);
    const n = Object.assign({}, this._opts);
    return t > 0 && (n.padTo = t), this._loc.numberFormatter(n).format(e);
  }
  resolvedOptions(e, t = {}) {
    return this.dtFormatter(e, t).resolvedOptions();
  }
}
function Oe(...s) {
  const e = s.reduce((t, n) => t + n.source, "");
  return RegExp(`^${e}$`);
}
function _e(...s) {
  return (e) => s.reduce(([t, n, r], i) => {
    const [a, o, l] = i(e, r);
    return [Object.assign(Object.assign({}, t), a), o || n, l];
  }, [{}, null, 1]).slice(0, 2);
}
function ve(s, ...e) {
  if (s == null)
    return [null, null];
  for (const [t, n] of e) {
    const r = t.exec(s);
    if (r)
      return n(r);
  }
  return [null, null];
}
function wn(...s) {
  return (e, t) => {
    const n = {};
    let r;
    for (r = 0; r < s.length; r++)
      n[s[r]] = re(e[t + r]);
    return [n, null, t + r];
  };
}
const bn = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/, kn = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/, Zr = `(?:${kn.source}?(?:\\[(${bn.source})\\])?)?`, Ut = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, xn = RegExp(`${Ut.source}${Zr}`), Pt = RegExp(`(?:T${xn.source})?`), Hr = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, qr = /(\d{4})-?W(\d\d)(?:-?(\d))?/, Yr = /(\d{4})-?(\d{3})/, Gr = wn("weekYear", "weekNumber", "weekday"), Br = wn("year", "ordinal"), Jr = /(\d{4})-(\d\d)-(\d\d)/, On = RegExp(`${Ut.source} ?(?:${kn.source}|(${bn.source}))?`), Kr = RegExp(`(?: ${On.source})?`);
function ke(s, e, t) {
  return A(s[e]) ? t : re(s[e]);
}
function Qr(s, e) {
  return [{
    year: ke(s, e, 0),
    month: ke(s, e + 1, 1),
    day: ke(s, e + 2, 1)
  }, null, e + 3];
}
function Te(s, e) {
  return [{
    hour: ke(s, e, 0),
    minute: ke(s, e + 1, 0),
    second: ke(s, e + 2, 0),
    millisecond: $t(s[e + 3])
  }, null, e + 4];
}
function $e(s, e) {
  const t = !s[e] && !s[e + 1], n = ht(s[e + 1], s[e + 2]), r = t ? null : z.instance(n);
  return [{}, r, e + 3];
}
function Re(s, e) {
  const t = s[e] ? se.create(s[e]) : null;
  return [{}, t, e + 1];
}
const Xr = RegExp(`^T?${Ut.source}$`), ei = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function ti(s) {
  const [e, t, n, r, i, a, o, l, u] = s, f = e.startsWith("-"), d = !!l && l.startsWith("-"), h = (m, p = !1) => typeof m == "number" && (p || m && f) ? -m : m;
  return [{
    years: h(ce(t)),
    months: h(ce(n)),
    weeks: h(ce(r)),
    days: h(ce(i)),
    hours: h(ce(a)),
    minutes: h(ce(o)),
    seconds: h(ce(l), l === "-0"),
    milliseconds: h($t(u), d)
  }];
}
const si = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function Zt(s, e, t, n, r, i, a) {
  let o;
  return s && (o = s.length > 3 ? rn.indexOf(s) + 1 : an.indexOf(s) + 1), {
    year: e.length === 2 ? Et(re(e)) : re(e),
    month: sn.indexOf(t) + 1,
    day: re(n),
    hour: re(r),
    minute: re(i),
    second: re(a),
    weekday: o
  };
}
const ni = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function ri(s) {
  const [, e, t, n, r, i, a, o, l, u, f, d] = s, h = Zt(e, r, n, t, i, a, o);
  let m;
  return l ? m = si[l] : u ? m = 0 : m = ht(f, d), [h, new z(m)];
}
function ii(s) {
  return s.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
const ai = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, oi = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, li = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function ps(s) {
  const [, e, t, n, r, i, a, o] = s;
  return [Zt(e, r, n, t, i, a, o), z.utcInstance];
}
function ci(s) {
  const [, e, t, n, r, i, a, o] = s;
  return [Zt(e, o, t, n, r, i, a), z.utcInstance];
}
const ui = Oe(Hr, Pt), di = Oe(qr, Pt), hi = Oe(Yr, Pt), fi = Oe(xn), _n = _e(Qr, Te, $e, Re), mi = _e(Gr, Te, $e, Re), gi = _e(Br, Te, $e, Re), yi = _e(Te, $e, Re);
function pi(s) {
  return ve(s, [ai, ps], [oi, ps], [li, ci]);
}
function wi(s) {
  return ve(s, [ui, _n], [di, mi], [hi, gi], [fi, yi]);
}
function bi(s) {
  return ve(s, [ei, ti]);
}
function ki(s) {
  return ve(s, [Xr, _e(Te)]);
}
function xi(s) {
  return ve(ii(s), [ni, ri]);
}
const Oi = Oe(Jr, Kr), _i = Oe(On), vi = _e(Te, $e, Re);
function Ti(s) {
  return ve(s, [Oi, _n], [_i, vi]);
}
const vn = {
  weeks: {
    days: 7,
    hours: 7 * 24,
    minutes: 7 * 24 * 60,
    seconds: 7 * 24 * 60 * 60,
    milliseconds: 7 * 24 * 60 * 60 * 1e3
  },
  days: {
    hours: 24,
    minutes: 24 * 60,
    seconds: 24 * 60 * 60,
    milliseconds: 24 * 60 * 60 * 1e3
  },
  hours: { minutes: 60, seconds: 60 * 60, milliseconds: 60 * 60 * 1e3 },
  minutes: { seconds: 60, milliseconds: 60 * 1e3 },
  seconds: { milliseconds: 1e3 }
}, Si = Object.assign({ years: {
  quarters: 4,
  months: 12,
  weeks: 52,
  days: 365,
  hours: 365 * 24,
  minutes: 365 * 24 * 60,
  seconds: 365 * 24 * 60 * 60,
  milliseconds: 365 * 24 * 60 * 60 * 1e3
}, quarters: {
  months: 3,
  weeks: 13,
  days: 91,
  hours: 91 * 24,
  minutes: 91 * 24 * 60,
  seconds: 91 * 24 * 60 * 60,
  milliseconds: 91 * 24 * 60 * 60 * 1e3
}, months: {
  weeks: 4,
  days: 30,
  hours: 30 * 24,
  minutes: 30 * 24 * 60,
  seconds: 30 * 24 * 60 * 60,
  milliseconds: 30 * 24 * 60 * 60 * 1e3
} }, vn), P = 146097 / 400, me = 146097 / 4800, Ei = Object.assign({ years: {
  quarters: 4,
  months: 12,
  weeks: P / 7,
  days: P,
  hours: P * 24,
  minutes: P * 24 * 60,
  seconds: P * 24 * 60 * 60,
  milliseconds: P * 24 * 60 * 60 * 1e3
}, quarters: {
  months: 3,
  weeks: P / 28,
  days: P / 4,
  hours: P * 24 / 4,
  minutes: P * 24 * 60 / 4,
  seconds: P * 24 * 60 * 60 / 4,
  milliseconds: P * 24 * 60 * 60 * 1e3 / 4
}, months: {
  weeks: me / 7,
  days: me,
  hours: me * 24,
  minutes: me * 24 * 60,
  seconds: me * 24 * 60 * 60,
  milliseconds: me * 24 * 60 * 60 * 1e3
} }, vn);
function Tn(s, e) {
  var t;
  let n = (t = e.milliseconds) !== null && t !== void 0 ? t : 0;
  for (const r of zt.slice(1))
    e[r] && (n += e[r] * s[r].milliseconds);
  return n;
}
function Ci(s, e) {
  return s === void 0 || s === 0 ? e === void 0 || e === 0 : s === e;
}
function Di(s, e) {
  const t = Tn(s, e) < 0 ? -1 : 1;
  zt.reduce((n, r) => {
    if (A(e[r]))
      return n;
    if (n) {
      const i = e[n] * t, a = s[r][n], o = Math.floor(i / a);
      e[r] += o * t, e[n] -= o * a * t;
    }
    return r;
  }, null), ue.reduce((n, r) => {
    if (A(e[r]))
      return n;
    if (n) {
      const i = e[n] % 1;
      e[n] -= i, e[r] += i * s[n][r];
    }
    return r;
  }, null);
}
function Ni(s = {}) {
  return Object.entries(s).reduce((e, [t, n]) => (n !== 0 && (e[t] = n), e), {});
}
class k {
  static get _INVALID() {
    return "Invalid Duration";
  }
  /**
   * Returns the conversion system to use
   * @type {ConversionAccuracy}
   */
  get conversionAccuracy() {
    return this._conversionAccuracy;
  }
  /**
   * Get the days.
   * @type {number}
   */
  get days() {
    return this.isValid ? this._values.days || 0 : NaN;
  }
  /**
   * Get the hours.
   * @type {number}
   */
  get hours() {
    return this.isValid ? this._values.hours || 0 : NaN;
  }
  /**
   * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this._invalid ? this._invalid.explanation : null;
  }
  /**
   * Returns an error code if this Duration became invalid, or null if the Duration is valid
   * @return {string}
   */
  get invalidReason() {
    return this._invalid ? this._invalid.reason : null;
  }
  /**
   * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
   * on invalid DateTimes or Intervals.
   * @return {boolean}
   */
  get isValid() {
    return this._invalid === null;
  }
  /**
   * Get  the locale of a Duration, such 'en-GB'
   * @type {string}
   */
  get locale() {
    return this.isValid ? this._loc.locale : void 0;
  }
  /**
   * Get the conversion matrix of a Duration
   * @type {ConversionMatrix}
   */
  get matrix() {
    return this._matrix;
  }
  /**
   * Get the milliseconds.
   * @return {number}
   */
  get milliseconds() {
    return this.isValid ? this._values.milliseconds || 0 : NaN;
  }
  /**
   * Get the minutes.
   * @type {number}
   */
  get minutes() {
    return this.isValid ? this._values.minutes || 0 : NaN;
  }
  /**
   * Get the months.
   * @type {number}
   */
  get months() {
    return this.isValid ? this._values.months || 0 : NaN;
  }
  /**
   * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
   *
   * @type {NumberingSystem}
   */
  get numberingSystem() {
    return this.isValid ? this._loc.numberingSystem : void 0;
  }
  /**
   * Get the quarters.
   * @type {number}
   */
  get quarters() {
    return this.isValid ? this._values.quarters || 0 : NaN;
  }
  /**
   * Get the seconds.
   * @return {number}
   */
  get seconds() {
    return this.isValid ? this._values.seconds || 0 : NaN;
  }
  /**
   * Get the weeks
   * @type {number}
   */
  get weeks() {
    return this.isValid ? this._values.weeks || 0 : NaN;
  }
  /**
   * Get the years.
   * @type {number}
   */
  get years() {
    return this.isValid ? this._values.years || 0 : NaN;
  }
  /**
   * @private
   */
  constructor(e) {
    const t = e.conversionAccuracy === "longterm" || !1;
    let n, r;
    t ? (r = "longterm", n = Ei) : (r = "casual", n = Si), e.matrix && (n = e.matrix), this._values = e.values || {}, this._loc = e.loc || x.create(), this._conversionAccuracy = r, this._invalid = e.invalid || null, this._matrix = n, this._isLuxonDuration = !0;
  }
  /**
   * Create a Duration from DurationLike.
   *
   * @param {Object | number | Duration} durationLike
   * One of:
   * - object with keys like 'years' and 'hours'.
   * - number representing milliseconds
   * - Duration instance
   * @return {Duration}
   */
  static fromDurationLike(e) {
    if (X(e))
      return k.fromMillis(e);
    if (k.isDuration(e))
      return e;
    if (typeof e == "object")
      return k.fromObject(e);
    throw new j(`Unknown duration argument ${e} of type ${typeof e}`);
  }
  /**
   * Create a Duration from an ISO 8601 duration string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the preset conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
   * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
   * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
   * @return {Duration}
   */
  static fromISO(e, t) {
    const [n] = bi(e);
    return n ? k.fromObject(n, t) : k.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  /**
   * Create a Duration from an ISO 8601 time string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @example Duration.fromISOTime('11:22:33.444').toObject() //=> { hours: 11, minutes: 22, seconds: 33, milliseconds: 444 }
   * @example Duration.fromISOTime('11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @return {Duration}
   */
  static fromISOTime(e, t = {}) {
    const [n] = ki(e);
    return n ? k.fromObject(n, t) : k.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  /**
   * Create Duration from a number of milliseconds.
   * @param {number} milliseconds of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  static fromMillis(e, t = {}) {
    return k.fromObject({ milliseconds: e }, t);
  }
  /**
   * Create a Duration from a JavaScript object with keys like 'years' and 'hours'.
   * If this object is empty then a zero milliseconds duration is returned.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.years
   * @param {number} obj.quarters
   * @param {number} obj.months
   * @param {number} obj.weeks
   * @param {number} obj.days
   * @param {number} obj.hours
   * @param {number} obj.minutes
   * @param {number} obj.seconds
   * @param {number} obj.milliseconds
   * @param {Object} [opts=[]] - options for creating this Duration
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the custom conversion system to use
   * @return {Duration}
   */
  static fromObject(e, t = {}) {
    if (e == null || typeof e != "object")
      throw new j(`Duration.fromObject: argument expected to be an object, got ${e === null ? "null" : typeof e}`);
    return new k({
      values: rt(e, k.normalizeUnit),
      loc: x.fromObject(t),
      conversionAccuracy: t.conversionAccuracy,
      matrix: t.matrix
    });
  }
  /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */
  static invalid(e, t) {
    if (!e)
      throw new j("need to specify a reason the Duration is invalid");
    const n = e instanceof J ? e : new J(e, t);
    if (D.throwOnInvalid)
      throw new tr(n);
    return new k({ invalid: n });
  }
  /**
   * Check if an object is a Duration. Works across context boundaries
   * @param {Object} o
   * @return {boolean}
   */
  static isDuration(e) {
    return !!e && e._isLuxonDuration || !1;
  }
  /**
   * @private
   */
  static normalizeUnit(e) {
    const t = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      localWeekNumber: "localWeekNumbers",
      localWeekYear: "localWeekYears",
      localWeekday: "localWeekdays",
      localWeekNumbers: "localWeekNumbers",
      localWeekYears: "localWeekYears",
      localWeekdays: "localWeekdays",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds"
    }[e];
    if (!t)
      throw new lt(e);
    return t;
  }
  // PUBLIC INSTANCE
  /**
   * Returns a string representation of this Duration appropriate for the REPL.
   * @return {string}
   */
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.isValid ? `Duration { values: ${JSON.stringify(this._values)} }` : `Duration { Invalid, reason: ${this.invalidReason} }`;
  }
  /**
   * Return the length of the duration in the specified unit.
   * @param {string} unit - a unit such as 'minutes' or 'days'
   * @example Duration.fromObject({years: 1}).as('days') //=> 365
   * @example Duration.fromObject({years: 1}).as('months') //=> 12
   * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
   * @return {number}
   */
  as(e) {
    return this.shiftTo(e).get(e);
  }
  /**
   * Equality check
   * Two Durations are equal iff they have the same units and the same values for each unit.
   * @param {Duration} other
   * @return {boolean}
   */
  equals(e) {
    if (!this.isValid || !e.isValid || !this._loc.equals(e._loc))
      return !1;
    for (const t of ue)
      if (!Ci(this._values[t], e._values[t]))
        return !1;
    return !0;
  }
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example Duration.fromObject({years: 2, days: 3}).get('years') //=> 2
   * @example Duration.fromObject({years: 2, days: 3}).get('months') //=> 0
   * @example Duration.fromObject({years: 2, days: 3}).get('days') //=> 3
   * @return {number}
   */
  get(e) {
    return this[k.normalizeUnit(e)];
  }
  getMaxUnit(e = !1) {
    const t = e ? gs : ue, n = this.shiftTo(...t).toObject();
    return t.find((r) => (n[r] || 0) > 0) || zt[0];
  }
  /**
   * Scale this Duration by the specified amount. Return a newly-constructed Duration.
   * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits(x => x * 2) //=> { hours: 2, minutes: 60 }
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits((x, u) => u === "hours" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
   * @return {Duration}
   */
  mapUnits(e) {
    if (!this.isValid)
      return this;
    const t = {};
    return Object.keys(this._values).forEach((n) => {
      t[n] = pn(e(this._values[n], n));
    }), this._clone(this, { values: t }, !0);
  }
  /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object} duration - The amount to subtract. Either a Luxon Duration or the object argument to Duration.fromObject()
   * @return {Duration}
   */
  minus(e) {
    if (!this.isValid)
      return this;
    const t = k.fromDurationLike(e);
    return this.plus(t.negate());
  }
  /**
   * Return the negative of this Duration.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
   * @return {Duration}
   */
  negate() {
    if (!this.isValid)
      return this;
    const e = {};
    return Object.keys(this._values).forEach((t) => {
      e[t] = this._values[t] === 0 ? 0 : -this._values[t];
    }), this._clone(this, { values: e }, !0);
  }
  /**
   * Reduce this Duration to its canonical representation in its current units.
   * Assuming the overall value of the Duration is positive, this means:
   * - excessive values for lower-order units are converted to higher order units (if possible, see first and second example)
   * - negative lower-order units are converted to higher order units (there must be such a higher order unit, otherwise
   *   the overall value would be negative, see third example)
   *
   * If the overall value is negative, the result of this method is equivalent to `this.negate().normalize().negate()`.
   * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
   * @example Duration.fromObject({ days: 5000 }).normalize().toObject() //=> { days: 5000 }
   * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
   * @return {Duration}
   */
  normalize() {
    if (!this.isValid)
      return this;
    const e = this.toObject();
    return Di(this._matrix, e), this._clone(this, { values: e }, !0);
  }
  /**
   * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object} duration - The amount to add. Either a Luxon Duration or the object argument to Duration.fromObject()
   * @return {Duration}
   */
  plus(e) {
    if (!this.isValid)
      return this;
    const t = k.fromDurationLike(e), n = {};
    return ue.forEach((r) => {
      (t._values[r] !== void 0 || this._values[r] !== void 0) && (n[r] = t.get(r) + this.get(r));
    }), this._clone(this, { values: n }, !0);
  }
  /**
   * "Set" the locale and/or numberingSystem and/or conversionAccuracy. Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */
  reconfigure({ locale: e, numberingSystem: t, conversionAccuracy: n, matrix: r } = {}) {
    const a = { loc: this._loc.clone({ locale: e, numberingSystem: t }), matrix: r, conversionAccuracy: n };
    return this._clone(this, a);
  }
  /**
   * Rescale units to its largest representation
   * @example Duration.fromObject({ milliseconds: 90000 }).rescale().toObject() //=> { minutes: 1, seconds: 30 }
   * @return {Duration}
   */
  rescale() {
    if (!this.isValid)
      return this;
    const e = Ni(this.normalize().shiftToAll().toObject());
    return this._clone(this, { values: e }, !0);
  }
  /**
   * "Set" the values of specified units. Non-specified units stay unchanged. Return a newly-constructed Duration.
   * @param {Object} values - a mapping of units to numbers
   * @example dur.set({ years: 2017 })
   * @example dur.set({ hours: 8, minutes: 30 })
   * @return {Duration}
   */
  set(e) {
    if (!this.isValid)
      return this;
    const t = Object.assign(Object.assign({}, this._values), rt(e, k.normalizeUnit));
    return this._clone(this, { values: t });
  }
  /**
   * Convert this Duration into its representation in a different set of units.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
   * @return {Duration}
   */
  shiftTo(...e) {
    if (!this.isValid || e.length === 0)
      return this;
    e = e.map((a) => k.normalizeUnit(a));
    const t = {}, n = {}, r = this.toObject();
    let i;
    return ue.forEach((a) => {
      if (e.indexOf(a) >= 0) {
        i = a;
        let o = 0;
        Object.keys(n).forEach((u) => {
          o += this._matrix[u][a] * n[u], n[u] = 0;
        }), X(r[a]) && (o += r[a]);
        const l = Math.trunc(o);
        t[a] = l, n[a] = (o * 1e3 - l * 1e3) / 1e3;
      } else X(r[a]) && (n[a] = r[a]);
    }), Object.keys(n).forEach((a) => {
      const o = n[a];
      o !== 0 && (t[i] += a === i ? o : o / this._matrix[i][a]);
    }), this._clone(this, { values: t }, !0).normalize();
  }
  /**
   * Shift this Duration to all available units.
   * Same as shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds")
   * @return {Duration}
   */
  shiftToAll() {
    return this.isValid ? this.shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds") : this;
  }
  /**
   * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
   * * `S` for milliseconds
   * * `s` for seconds
   * * `m` for minutes
   * * `h` for hours
   * * `d` for days
   * * `w` for weeks
   * * `M` for months
   * * `y` for years
   * Notes:
   * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
   * * Tokens can be escaped by wrapping with single quotes.
   * * The duration will be converted to the set of units in the format string using {@link Duration#shiftTo} and the Durations' conversion accuracy setting.
   * @param {string} fmt - the format string
   * @param {Object} opts - options
   * @param {boolean} [opts.floor=true] - floor numerical values
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
   * @return {string}
   */
  toFormat(e, t = { floor: !0 }) {
    const n = Object.assign(Object.assign({}, t), { floor: t.round !== !1 && t.floor !== !1 });
    return this.isValid ? V.create(this._loc, n).formatDurationFromString(this, e) : k._INVALID;
  }
  /**
   * Returns a string representation of a Duration with all units included.
   * To modify its behavior, use `listStyle` and any Intl.NumberFormat option, though `unitDisplay` is especially relevant.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options
   * @param {Object} opts - Formatting options. Accepts the same keys as the options parameter of the native `Intl.NumberFormat` constructor, as well as `listStyle`.
   * @param {string} [opts.listStyle='narrow'] - How to format the merged list. Corresponds to the `style` property of the options parameter of the native `Intl.ListFormat` constructor.
   * @example
   * ```js
   * var dur = Duration.fromObject({ days: 1, hours: 5, minutes: 6 })
   * dur.toHuman() //=> '1 day, 5 hours, 6 minutes'
   * dur.toHuman({ listStyle: "long" }) //=> '1 day, 5 hours, and 6 minutes'
   * dur.toHuman({ unitDisplay: "short" }) //=> '1 day, 5 hr, 6 min'
   * ```
   */
  toHuman(e = {}) {
    if (!this.isValid)
      return k._INVALID;
    const t = this.getMaxUnit(!0), n = e.onlyHumanUnits ? gs : ue, i = this.shiftTo(...n.slice(n.indexOf(t))).toObject(), a = n.map((l) => {
      const u = i[l];
      return A(u) || u === 0 ? null : this._loc.numberFormatter(Object.assign(Object.assign({ style: "unit", unitDisplay: "long" }, e), { unit: l.slice(0, -1) })).format(u);
    }).filter((l) => l), o = Object.assign({ type: "conjunction", style: e.listStyle || "narrow" }, e);
    return this._loc.listFormatter(o).format(a);
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
   * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
   * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
   * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
   * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
   * @return {string}
   */
  toISO() {
    if (!this.isValid)
      return null;
    let e = "P";
    return this.years !== 0 && (e += this.years + "Y"), (this.months !== 0 || this.quarters !== 0) && (e += this.months + this.quarters * 3 + "M"), this.weeks !== 0 && (e += this.weeks + "W"), this.days !== 0 && (e += this.days + "D"), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (e += "T"), this.hours !== 0 && (e += this.hours + "H"), this.minutes !== 0 && (e += this.minutes + "M"), (this.seconds !== 0 || this.milliseconds !== 0) && (e += Rt(this.seconds + this.milliseconds / 1e3, 3) + "S"), e === "P" && (e += "T0S"), e;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration, formatted as a time of day.
   * Note that this will return null if the duration is invalid, negative, or equal to or greater than 24 hours.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example Duration.fromObject({ hours: 11 }).toISOTime() //=> '11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressMilliseconds: true }) //=> '11:00:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressSeconds: true }) //=> '11:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ includePrefix: true }) //=> 'T11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ format: 'basic' }) //=> '110000.000'
   * @return {string}
   */
  toISOTime(e = {}) {
    if (!this.isValid)
      return null;
    const t = this.toMillis();
    return t < 0 || t >= 864e5 ? null : (e = Object.assign(Object.assign({ suppressMilliseconds: !1, suppressSeconds: !1, includePrefix: !1, format: "extended" }, e), { includeOffset: !1 }), g.fromMillis(t, { zone: "UTC" }).toISOTime(e));
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }
  /**
   * Returns the value of this Duration in milliseconds.
   * @return {number}
   */
  toMillis() {
    return this.isValid ? Tn(this.matrix, this._values) : NaN;
  }
  /**
   * Returns a JavaScript object with this Duration's values.
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
   * @return {Object}
   */
  toObject() {
    return this.isValid ? Object.assign({}, this._values) : {};
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
   * @return {string}
   */
  toString() {
    return this.toISO();
  }
  /**
   * Returns a milliseconds value of this Duration. Alias of {@link toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }
  /**
   * @private
   */
  // clone really means "create another instance just like this one, but with these changes"
  _clone(e, t, n = !1) {
    const r = {
      values: n ? t.values : Object.assign(Object.assign({}, e._values), t.values || {}),
      loc: e._loc.clone(t.loc),
      conversionAccuracy: t.conversionAccuracy || e.conversionAccuracy,
      matrix: t.matrix || e.matrix
    };
    return new k(r);
  }
}
const ge = "Invalid Interval";
function Ii(s, e) {
  if (!s || !s.isValid)
    return C.invalid("missing or invalid start");
  if (!e || !e.isValid)
    return C.invalid("missing or invalid end");
  if (e < s)
    return C.invalid("end before start", `The end of an interval must be after its start, but you had start=${s.toISO()} and end=${e.toISO()}`);
}
function je(s) {
  if (g.isDateTime(s))
    return s;
  if (s && s.valueOf && X(s.valueOf()))
    return g.fromJSDate(s);
  if (s && typeof s == "object")
    return g.fromObject(s);
  throw new j(`Unknown datetime argument: ${s}, of type ${typeof s}`);
}
class C {
  /**
   * Returns the end of the Interval
   */
  get end() {
    return this.isValid ? this._e : null;
  }
  /**
   * Returns an error code if this Interval is invalid, or null if the Interval is valid
   */
  get invalidReason() {
    return this._invalid ? this._invalid.reason : null;
  }
  /**
   * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
   */
  get isValid() {
    return this.invalidReason === null;
  }
  /**
   * Returns the start of the Interval
   */
  get start() {
    return this.isValid ? this._s : null;
  }
  /**
   * @private
   */
  constructor(e) {
    this._s = e.start, this._e = e.end, this._invalid = e.invalid || null, this._isLuxonInterval = !0;
  }
  /**
   * Create an Interval from a start DateTime and a Duration to extend to.
   * @param {DateTime|Date|Object} start
   * @param {Duration|Object} duration - the length of the Interval, as a Duration object.
   */
  static after(e, t) {
    const n = k.fromDurationLike(t), r = je(e);
    return new C({
      start: r,
      end: r ? r.plus(n) : void 0
    });
  }
  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object} duration - the length of the Interval, as a Duration object.
   */
  static before(e, t) {
    const n = k.fromDurationLike(t), r = je(e);
    return new C({
      start: r ? r.minus(n) : void 0,
      end: r
    });
  }
  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   */
  static fromDateTimes(e, t) {
    const n = je(e), r = je(t);
    return Ii(n, r) || new C({
      start: n,
      end: r
    });
  }
  /**
   * Create an Interval from an ISO 8601 string.
   * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
   * @param {string} text - the ISO string to parse
   * @param {Object} [opts] - options to pass {@link DateTime.fromISO} and optionally {@link Duration.fromISO}
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   */
  static fromISO(e, t = {}) {
    const [n, r] = (e || "").split("/", 2);
    if (n && r) {
      let i, a;
      try {
        i = g.fromISO(n, t), a = i.isValid;
      } catch {
        a = !1;
      }
      let o, l;
      try {
        o = g.fromISO(r, t), l = o.isValid;
      } catch {
        l = !1;
      }
      if (a && l)
        return C.fromDateTimes(i, o);
      if (a) {
        const u = k.fromISO(r, t);
        if (u.isValid)
          return C.after(i, u);
      } else if (l) {
        const u = k.fromISO(n, t);
        if (u.isValid)
          return C.before(o, u);
      }
    }
    return C.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  /**
   * Create an invalid Interval.
   * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   */
  static invalid(e, t) {
    if (!e)
      throw new j("need to specify a reason the Interval is invalid");
    const n = e instanceof J ? e : new J(e, t);
    if (D.throwOnInvalid)
      throw new sr(n);
    return new C({ invalid: n });
  }
  /**
   * Check if an object is an Interval. Works across context boundaries
   * @param {Object} o
   */
  static isInterval(e) {
    return !!e && e._isLuxonInterval || !1;
  }
  /**
   * Merge an array of Intervals into a equivalent minimal set of Intervals.
   * Combines overlapping and adjacent Intervals.
   * @param {Interval[]} intervals
   */
  static merge(e) {
    const [t, n] = e.sort((r, i) => r._s.valueOf() - i._s.valueOf()).reduce(([r, i], a) => i ? i.overlaps(a) || i.abutsStart(a) ? [r, i.union(a)] : [r.concat([i]), a] : [r, a], [[], null]);
    return n && t.push(n), t;
  }
  /**
   * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
   * @param {Interval[]} intervals
   * @return {Interval[]}
   */
  static xor(e) {
    let t = null, n = 0;
    const r = [], i = e.map((l) => [
      { time: l._s, type: "s" },
      { time: l._e, type: "e" }
    ]), a = Array.prototype.concat(...i), o = a.sort((l, u) => +l.time - +u.time);
    for (const l of o)
      n += l.type === "s" ? 1 : -1, n === 1 ? t = l.time : (t && t.valueOf() !== l.time.valueOf() && r.push(C.fromDateTimes(t, l.time)), t = null);
    return C.merge(r);
  }
  // PUBLIC INSTANCE
  /**
   * Returns a string representation of this Interval appropriate for the REPL.
   * @return {string}
   */
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.isValid ? `Interval { start: ${this._s.toISO()}, end: ${this._e.toISO()} }` : `Interval { Invalid, reason: ${this.invalidReason} }`;
  }
  /**
   * Return whether this Interval's start is adjacent to the specified Interval's end.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsEnd(e) {
    return +e._e == +this._s;
  }
  /**
   * Return whether this Interval's end is adjacent to the specified Interval's start.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsStart(e) {
    return +this._e == +e._s;
  }
  /**
   * Return whether this Interval contains the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  contains(e) {
    return this._s <= e && this._e > e;
  }
  /**
   * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
   * Unlike {@link Interval#length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
   * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
   * @param {string} [unit='milliseconds'] - the unit of time to count.
   * @param {Object} opts - options
   */
  count(e = "milliseconds", t) {
    if (!this.isValid)
      return NaN;
    const n = this.start.startOf(e, t);
    let r;
    return t != null && t.useLocaleWeeks ? r = this.end.reconfigure({ locale: n.locale }) : r = this.end, r = r.startOf(e, t), Math.floor(r.diff(n, e).get(e)) + +(r.valueOf() !== this.end.valueOf());
  }
  /**
   * Returns Intervals representing the span(s) of time in this Interval that don't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {Interval[]}
   */
  difference(...e) {
    return C.xor([this].concat(e)).map((t) => this.intersection(t)).filter((t) => t && !t.isEmpty());
  }
  /**
   * Split this Interval into the specified number of smaller intervals.
   * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
   * @return {Interval[]}
   */
  divideEqually(e) {
    return this.isValid ? this.splitBy({ milliseconds: this.length() / e }).slice(0, e) : [];
  }
  /**
   * Returns true if this Interval fully contains the specified Interval,
   * specifically if the intersection (of this Interval and the other Interval) is equal to the other Interval;
   * false otherwise.
   * @param {Interval} other
   * @return {boolean}
   */
  engulfs(e) {
    return this.isValid ? this._s <= e._s && this._e >= e._e : !1;
  }
  /**
   * Return whether this Interval has the same start and end as the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  equals(e) {
    return !this.isValid || !e.isValid ? !1 : this._s.equals(e._s) && this._e.equals(e._e);
  }
  /**
   * Returns whether this Interval's start and end are both in the same unit of time
   * @param {string} unit - the unit of time to check sameness on
   * @return {boolean}
   */
  hasSame(e) {
    return this.isValid ? this.isEmpty() || this._e.minus(1).hasSame(this._s, e) : !1;
  }
  /**
   * Return an Interval representing the intersection of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
   * Returns null if the intersection is empty, meaning, the intervals don't intersect.
   * @param {Interval} other
   * @return {Interval|null}
   */
  intersection(e) {
    if (!this.isValid)
      return this;
    const t = this._s > e._s ? this._s : e._s, n = this._e < e._e ? this._e : e._e;
    return t >= n ? null : C.fromDateTimes(t, n);
  }
  /**
   * Return whether this Interval's start is after the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isAfter(e) {
    return this.isValid ? this._s > e : !1;
  }
  /**
   * Return whether this Interval's end is before the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isBefore(e) {
    return this.isValid ? this._e <= e : !1;
  }
  /**
   * Return whether this Interval has the same start and end DateTimes.
   * @return {boolean}
   */
  isEmpty() {
    return this._s.valueOf() === this._e.valueOf();
  }
  /**
   * Returns the length of the Interval in the specified unit.
   * @param {string} [unit='milliseconds'] - the unit (such as 'hours' or 'days') to return the length in.
   */
  length(e = "milliseconds") {
    return this.toDuration(e).get(e);
  }
  /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */
  mapEndpoints(e) {
    return C.fromDateTimes(e(this._s), e(this._e));
  }
  /**
   * Return whether this Interval overlaps with the specified Interval
   * @param {Interval} other
   * @return {boolean}
   */
  overlaps(e) {
    return this._e > e._s && this._s < e._e;
  }
  /**
   * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
   * @param {Object} values - the values to set
   * @param {DateTime} values.start - the starting DateTime
   * @param {DateTime} values.end - the ending DateTime
   * @return {Interval}
   */
  set({ start: e, end: t } = {}) {
    return this.isValid ? C.fromDateTimes(e || this._s, t || this._e) : this;
  }
  /**
   * Split this Interval at each of the specified DateTimes
   * @param {...[DateTime]} dateTimes - the unit of time to count.
   * @return {Interval[]}
   */
  splitAt(...e) {
    const t = e.map(je).filter((a) => this.contains(a)).sort((a, o) => a.toMillis() - o.toMillis()), n = [];
    let r = this._s, i = 0;
    for (; r < this._e; ) {
      const a = t[i] || this._e, o = +a > +this._e ? this._e : a;
      n.push(C.fromDateTimes(r, o)), r = o, i += 1;
    }
    return n;
  }
  /**
   * Split this Interval into smaller Intervals, each of the specified length.
   * Left over time is grouped into a smaller interval
   * @param {Duration|Object} duration - The length of each resulting interval, as a Duration object.
   * @return {Interval[]}
   */
  splitBy(e) {
    const t = k.fromDurationLike(e);
    if (!this.isValid || !t.isValid || t.as("milliseconds") === 0)
      return [];
    let n = this._s, r = 1, i;
    const a = [];
    for (; n < this._e; ) {
      const o = this.start.plus(t.mapUnits((l) => l * r));
      i = +o > +this._e ? this._e : o, a.push(C.fromDateTimes(n, i)), n = i, r += 1;
    }
    return a;
  }
  /**
   * Return a Duration representing the time spanned by this interval.
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
   * @return {Duration}
   */
  toDuration(e = "milliseconds", t = {}) {
    return this.isValid ? this._e.diff(this._s, e, t) : k.invalid(this._invalid.reason);
  }
  /**
   * Returns a string representation of this Interval formatted according to the specified format
   * string. **You may not want this.** See {@link Interval#toLocaleString} for a more flexible
   * formatting tool.
   * @param {string} dateFormat - The format string. This string formats the start and end time.
   * See {@link DateTime#toFormat} for details.
   * @param {Object} opts - Options.
   * @param {string} [opts.separator =  ' – '] - A separator to place between the start and end
   * representations.
   * @return {string}
   */
  toFormat(e, { separator: t = " - " } = {}) {
    return this.isValid ? `${this._s.toFormat(e)}${t}${this._e.toFormat(e)}` : ge;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} options - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISO(e = {}) {
    return this.isValid ? `${this._s.toISO(e)}/${this._e.toISO(e)}` : ge;
  }
  /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */
  toISODate() {
    return this.isValid ? `${this._s.toISODate()}/${this._e.toISODate()}` : ge;
  }
  /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} options - The same options as {@link DateTime#toISO}
   * @return {string}
   *
   */
  toISOTime(e = {}) {
    return this.isValid ? `${this._s.toISOTime(e)}/${this._e.toISOTime(e)}` : ge;
  }
  /**
   * Returns a localized string representing this Interval. Accepts the same options as the
   * Intl.DateTimeFormat constructor and any presets defined by Luxon, such as
   * {@link DateTime.DATE_FULL} or {@link DateTime.TIME_SIMPLE}. The exact behavior of this method
   * is browser-specific, but in general it will return an appropriate representation of the
   * Interval in the assigned locale. Defaults to the system's locale if no locale has been
   * specified.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {Object} [formatOpts=DateTime.DATE_SHORT] - Either a DateTime preset or
   * Intl.DateTimeFormat constructor options.
   * @param {Object} opts - Options to override the configuration of the start DateTime.
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(); //=> 11/7/2022 – 11/8/2022
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL); //=> November 7 – 8, 2022
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL, { locale: 'fr-FR' }); //=> 7–8 novembre 2022
   * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString(DateTime.TIME_SIMPLE); //=> 6:00 – 8:00 PM
   * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> Mon, Nov 07, 6:00 – 8:00 p
   * @return {string}
   */
  toLocaleString(e = ct, t = {}) {
    return this.isValid ? V.create(this._s.loc.clone(t), e).formatInterval(this) : ge;
  }
  /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */
  toString() {
    return this.isValid ? `[${this._s.toISO()} – ${this._e.toISO()})` : ge;
  }
  /**
   * Return an Interval representing the union of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
   * @param {Interval} other
   * @return {Interval}
   */
  union(e) {
    if (!this.isValid)
      return this;
    const t = this._s < e._s ? this._s : e._s, n = this._e > e._e ? this._e : e._e;
    return C.fromDateTimes(t, n);
  }
}
class qe {
  /**
   * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
   * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
   * @param {Object} options - options
   * @param {string} [options.locale] - the locale code
   * @example Info.eras() //=> [ 'BC', 'AD' ]
   * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
   * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
   * @return {string[]}
   */
  static eras(e = "short", { locale: t } = {}) {
    return x.create(t, void 0, "gregory").eras(e);
  }
  /**
   * Return the set of available features in this environment.
   * Some features of Luxon are not available in all environments. For example, on older browsers, relative time formatting support is not available. Use this function to figure out if that's the case.
   * Keys:
   * * `relative`: whether this environment supports relative time formatting
   * @example Info.features() //=> { relative: false }
   */
  static features() {
    return { relative: mn(), localeWeek: gn() };
  }
  /**
   * Get the minimum number of days necessary in a week before it is considered part of the next year according
   * to the given locale.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   */
  static getMinimumDaysInFirstWeek({ locale: e, locObj: t } = {}) {
    return (t || x.create(e)).getMinDaysInFirstWeek();
  }
  /**
   * Get the weekday on which the week starts according to the given locale.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number} the start of the week, 1 for Monday through 7 for Sunday
   */
  static getStartOfWeek({ locale: e, locObj: t } = {}) {
    return (t || x.create(e)).getStartOfWeek();
  }
  /**
   * Get the weekdays, which are considered the weekend according to the given locale
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number[]} an array of weekdays, 1 for Monday through 7 for Sunday
   */
  static getWeekendWeekdays({ locale: e, locObj: t } = {}) {
    return (t || x.create(e)).getWeekendDays().slice();
  }
  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  static hasDST(e = D.defaultZone) {
    const t = g.now().setZone(e).set({ month: 12 });
    return !e.isUniversal && t.offset !== t.set({ month: 6 }).offset;
  }
  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */
  static isValidIANAZone(e) {
    return se.isValidZone(e);
  }
  /**
   * Return an array of meridiems.
   * @param {Object} options - options
   * @param {string} [options.locale] - the locale code
   * @example Info.meridiems() //=> [ 'AM', 'PM' ]
   * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
   * @return {string[]}
   */
  static meridiems({ locale: e } = {}) {
    return x.create(e).meridiems();
  }
  /**
   * Return an array of standalone month names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @example Info.months()[0] //=> 'January'
   * @example Info.months('short')[0] //=> 'Jan'
   * @example Info.months('numeric')[0] //=> '1'
   * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
   * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
   * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
   * @return {string[]}
   */
  static months(e = "long", { locale: t = null, locObj: n = null, numberingSystem: r = null, outputCalendar: i = "gregory" } = {}) {
    return (n || x.create(t, r, i)).months(e);
  }
  /**
   * Return an array of format month names.
   * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
   * changes the string.
   * See {@link Info.months}
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locObj] - an existing locale object to use
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem] - the numbering system
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @return {string[]}
   */
  static monthsFormat(e = "long", { locale: t, locObj: n, numberingSystem: r, outputCalendar: i = "gregory" } = {}) {
    return (n || x.create(t, r, i)).months(e, !0);
  }
  /**
   * Converts the input into a {@link Zone} instance.
   *
   * * If `input` is already a Zone instance, it is returned unchanged.
   * * If `input` is a string containing a valid IANA time zone name, a Zone instance
   *   with that name is returned.
   * * If `input` is the string "system", the system's time zone is returned.
   * * If `input` is the string "default", the default time zone, as defined in
   *   Settings.defaultZone is returned.
   * * If `input` is a string that doesn't refer to a known time zone, a Zone
   *   instance with {@link Zone#isValid} == false is returned.
   * * If `input is a number, a Zone instance with the specified fixed offset
   *   in minutes is returned.
   * * If `input` is `null` or `undefined`, the default zone is returned.
   * @param {string|Zone|number} [input] - the value to be converted
   * @return {Zone}
   */
  static normalizeZone(e) {
    return ne(e, D.defaultZone);
  }
  /**
   * Return an array of standalone week names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj] - an existing locale object to use
   * @param {string} [opts.numberingSystem] - the numbering system
   * @example Info.weekdays()[0] //=> 'Monday'
   * @example Info.weekdays('short')[0] //=> 'Mon'
   * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
   * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
   * @return {string[]}
   */
  static weekdays(e = "long", { locale: t, locObj: n, numberingSystem: r } = {}) {
    return (n || x.create(t, r)).weekdays(e);
  }
  /**
   * Return an array of format week names.
   * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
   * changes the string.
   * See {@link Info#weekdays}
   * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
   * @param {Object} options - options
   * @param {string} [options.locale] - the locale code
   * @param {string} [options.numberingSystem] - the numbering system
   * @return {string[]}
   */
  static weekdaysFormat(e = "long", { locale: t, locObj: n, numberingSystem: r } = {}) {
    return (n || x.create(t, r)).weekdays(e, !0);
  }
}
function ws(s, e) {
  const t = (r) => r.toUTC(0, { keepLocalTime: !0 }).startOf("days").valueOf(), n = t(e) - t(s);
  return Math.floor(k.fromMillis(n).as("days"));
}
function Mi(s, e, t) {
  const n = [
    ["years", (l, u) => u.year - l.year],
    ["quarters", (l, u) => u.quarter - l.quarter + (u.year - l.year) * 4],
    ["months", (l, u) => u.month - l.month + (u.year - l.year) * 12],
    [
      "weeks",
      (l, u) => {
        const f = ws(l, u);
        return (f - f % 7) / 7;
      }
    ],
    ["days", ws]
  ], r = {}, i = s;
  let a, o;
  for (const [l, u] of n)
    t.indexOf(l) >= 0 && (a = l, r[l] = u(s, e), o = i.plus(r), o > e ? (r[l]--, s = i.plus(r), s > e && (o = s, r[l]--, s = i.plus(r))) : s = o);
  return [s, r, o, a];
}
const ji = (s, e, t, n) => {
  let [r, i, a, o] = Mi(s, e, t);
  const l = +e - +r, u = t.filter((d) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(d) >= 0);
  u.length === 0 && (a < e && (a = r.plus({ [o]: 1 })), a !== r && (i[o] = (i[o] || 0) + l / (+a - +r)));
  const f = k.fromObject(i, n);
  return u.length > 0 ? k.fromMillis(l, n).shiftTo(...u).plus(f) : f;
}, Fi = "missing Intl.DateTimeFormat.formatToParts support";
function O(s, e = (t) => t) {
  return { regex: s, deser: ([t]) => e(jr(t)) };
}
const Sn = "[  ]", En = new RegExp(Sn, "g");
function Li(s) {
  return s.replace(/\./g, "\\.?").replace(En, Sn);
}
function bs(s) {
  return s.replace(/\./g, "").replace(En, " ").toLowerCase();
}
function B(s, e) {
  return {
    regex: RegExp(s.map(Li).join("|")),
    deser: ([t]) => s.findIndex((n) => bs(t) === bs(n)) + e
  };
}
function ks(s, e) {
  return { regex: s, deser: ([, t, n]) => ht(t, n), groups: e };
}
function xs(s) {
  return { regex: s, deser: ([e]) => e };
}
function Wi(s) {
  return s.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function Ai(s, e) {
  const t = G(e), n = G(e, "{2}"), r = G(e, "{3}"), i = G(e, "{4}"), a = G(e, "{6}"), o = G(e, "{1,2}"), l = G(e, "{1,3}"), u = G(e, "{1,6}"), f = G(e, "{1,9}"), d = G(e, "{2,4}"), h = G(e, "{4,6}"), m = (_) => ({
    regex: RegExp(Wi(_.val)),
    deser: ([E]) => E,
    literal: !0
  }), w = ((_) => {
    if (s.literal)
      return m(_);
    switch (_.val) {
      case "G":
        return B(e.eras("short"), 0);
      case "GG":
        return B(e.eras("long"), 0);
      case "y":
        return O(u);
      case "yy":
        return O(d, Et);
      case "yyyy":
        return O(i);
      case "yyyyy":
        return O(h);
      case "yyyyyy":
        return O(a);
      case "M":
        return O(o);
      case "MM":
        return O(n);
      case "MMM":
        return B(e.months("short", !0), 1);
      case "MMMM":
        return B(e.months("long", !0), 1);
      case "L":
        return O(o);
      case "LL":
        return O(n);
      case "LLL":
        return B(e.months("short", !1), 1);
      case "LLLL":
        return B(e.months("long", !1), 1);
      case "d":
        return O(o);
      case "dd":
        return O(n);
      case "o":
        return O(l);
      case "ooo":
        return O(r);
      case "HH":
        return O(n);
      case "H":
        return O(o);
      case "hh":
        return O(n);
      case "h":
        return O(o);
      case "mm":
        return O(n);
      case "m":
        return O(o);
      case "q":
        return O(o);
      case "qq":
        return O(n);
      case "s":
        return O(o);
      case "ss":
        return O(n);
      case "S":
        return O(l);
      case "SSS":
        return O(r);
      case "u":
        return xs(f);
      case "a":
        return B(e.meridiems(), 0);
      case "kkkk":
        return O(i);
      case "kk":
        return O(d, Et);
      case "W":
        return O(o);
      case "WW":
        return O(n);
      case "E":
      case "c":
        return O(t);
      case "EEE":
        return B(e.weekdays("short", !1), 1);
      case "EEEE":
        return B(e.weekdays("long", !1), 1);
      case "ccc":
        return B(e.weekdays("short", !0), 1);
      case "cccc":
        return B(e.weekdays("long", !0), 1);
      case "Z":
      case "ZZ":
        return ks(new RegExp(`([+-]${o.source})(?::(${n.source}))?`), 2);
      case "ZZZ":
        return ks(new RegExp(`([+-]${o.source})(${n.source})?`), 2);
      case "z":
        return xs(/[a-z_+-/]{1,256}?/i);
      default:
        return m(_);
    }
  })(s) || {
    invalidReason: Fi
  };
  return Object.assign(Object.assign({}, w), { token: s });
}
const Vi = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy"
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM"
  },
  day: {
    numeric: "d",
    "2-digit": "dd"
  },
  weekday: {
    short: "EEE",
    long: "EEEE"
  },
  dayPeriod: "a",
  hour12: {
    numeric: "h",
    "2-digit": "hh"
  },
  hour24: {
    numeric: "H",
    "2-digit": "HH"
  },
  hour: {
    numeric: "h",
    "2-digit": "hh"
  },
  minute: {
    numeric: "m",
    "2-digit": "mm"
  },
  second: {
    numeric: "s",
    "2-digit": "ss"
  },
  timeZoneName: {
    long: "ZZZZZ",
    short: "ZZZ"
  }
};
function $i(s, e, t) {
  const { type: n, value: r } = s;
  if (n === "literal") {
    const l = /^\s+$/.test(r);
    return {
      literal: !l,
      val: l ? " " : r
    };
  }
  const i = e[n];
  let a = n;
  n === "hour" && (e.hour12 != null ? a = e.hour12 ? "hour12" : "hour24" : e.hourCycle != null ? e.hourCycle === "h11" || e.hourCycle === "h12" ? a = "hour12" : a = "hour24" : a = t.hour12 ? "hour12" : "hour24");
  let o = Vi[a];
  if (typeof o == "object" && (o = o[i]), o)
    return {
      literal: !1,
      val: o
    };
}
function Ri(s) {
  return [`^${s.map((t) => t.regex).reduce((t, n) => `${t}(${n.source})`, "")}$`, s];
}
function zi(s, e, t) {
  const n = e.exec(s), r = {};
  if (n !== null) {
    let i = 1;
    t.forEach((a) => {
      const o = a.groups ? a.groups + 1 : 1;
      a.literal || (r[a.token.val[0]] = a.deser(n.slice(i, i + o))), i += o;
    });
  }
  return [n, r];
}
function Ui(s) {
  const e = (i) => {
    switch (i) {
      case "S":
        return "millisecond";
      case "s":
        return "second";
      case "m":
        return "minute";
      case "h":
      case "H":
        return "hour";
      case "d":
        return "day";
      case "o":
        return "ordinal";
      case "L":
      case "M":
        return "month";
      case "y":
        return "year";
      case "E":
      case "c":
        return "weekday";
      case "W":
        return "weekNumber";
      case "k":
        return "weekYear";
      case "q":
        return "quarter";
      default:
        return null;
    }
  };
  let t = null, n;
  return T(s.z) && (t = se.create(s.z)), T(s.Z) && (t || (t = new z(+s.Z)), n = +s.Z), T(s.q) && (s.M = (s.q - 1) * 3 + 1), T(s.h) && (+s.h < 12 && s.a === 1 ? s.h = s.h + 12 : s.h === 12 && s.a === 0 && (s.h = 0)), s.G === 0 && s.y && (s.y = -s.y), T(s.u) && (s.S = $t(s.u) || 0), [Object.keys(s).reduce((i, a) => {
    const o = e(a);
    return o && (i[o] = s[a]), i;
  }, {}), t, n];
}
let wt;
function Pi(s) {
  return wt === void 0 && (wt = g.fromMillis(1555555555555, {
    locale: s.locale
  })), wt;
}
function Zi(s, e) {
  if (s.literal)
    return s;
  const t = V.macroTokenToFormatOpts(s.val), n = In(t, e);
  return n == null || n.includes(void 0) ? s : n;
}
function Cn(s, e) {
  return Array.prototype.concat(...s.map((t) => Zi(t, e)));
}
class Dn {
  get invalidReason() {
    return this.disqualifyingUnit ? this.disqualifyingUnit.invalidReason : null;
  }
  get isValid() {
    return !this.disqualifyingUnit;
  }
  constructor(e, t) {
    this.locale = e, this.format = t, this._mapTokens();
  }
  explainFromTokens(e) {
    if (this.isValid) {
      const [t, n] = zi(e, this.regex, this.handlers), [r, i, a] = n ? Ui(n) : [null, null, void 0];
      if (n.hasOwnProperty("a") && n.hasOwnProperty("H"))
        throw new ie("Can't include meridiem when specifying 24-hour format");
      return {
        input: e,
        tokens: this.tokens,
        regex: this.regex,
        rawMatches: t,
        matches: n,
        result: r,
        zone: i,
        specificOffset: a
      };
    } else
      return { input: e, tokens: this.tokens, invalidReason: this.invalidReason };
  }
  _mapTokens() {
    this.tokens = Cn(V.parseFormat(this.format), this.locale);
    const e = this.tokens.map((t) => Ai(t, this.locale));
    if (this.disqualifyingUnit = e.find((t) => t.invalidReason), this.units = e.filter((t) => !t.invalidReason), !this.disqualifyingUnit) {
      const [t, n] = Ri(this.units);
      this.regex = RegExp(t, "i"), this.handlers = n;
    }
  }
}
function Nn(s, e, t) {
  return new Dn(s, t).explainFromTokens(e);
}
function Os(s) {
  return s.replace(/\u202F/g, " ");
}
function Hi(s, e, t) {
  const { result: n, zone: r, specificOffset: i, invalidReason: a } = Nn(s, Os(e), Os(t));
  return [n, r, i, a];
}
function In(s, e) {
  if (!s)
    return null;
  const n = V.create(e, s).dtFormatter(Pi(e)), r = n.formatToParts(), i = n.resolvedOptions();
  return r.map((a) => $i(a, s, i));
}
const bt = "Invalid DateTime", _s = 864e13;
function Mn(s, e, t) {
  let n = s - e * 60 * 1e3;
  const r = t.offset(n);
  if (e === r)
    return [n, e];
  n -= (r - e) * 60 * 1e3;
  const i = t.offset(n);
  return r === i ? [n, r] : [s - Math.min(r, i) * 60 * 1e3, Math.max(r, i)];
}
function Ye(s, e) {
  s += e * 60 * 1e3;
  const t = new Date(s);
  return {
    year: t.getUTCFullYear(),
    month: t.getUTCMonth() + 1,
    day: t.getUTCDate(),
    hour: t.getUTCHours(),
    minute: t.getUTCMinutes(),
    second: t.getUTCSeconds(),
    millisecond: t.getUTCMilliseconds()
  };
}
function Ge(s, e, t) {
  return Mn(nt(s), e, t);
}
function ye(s, e, t, n, r, i) {
  const { setZone: a, zone: o } = t;
  if (s && Object.keys(s).length !== 0 || e) {
    const l = e || o, u = g.fromObject(s || void 0, Object.assign(Object.assign({}, t), { zone: l, specificOffset: i }));
    return a ? u : u.setZone(o);
  } else
    return g.invalid(new J("unparsable", `the input "${r}" can't be parsed as ${n}`));
}
function Be(s, e, t = !0) {
  return s.isValid ? V.create(x.create("en-US"), {
    allowZ: t,
    forceSimple: !0
  }).formatDateTimeFromString(s, e) : null;
}
const vs = {
  year: 0,
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, qi = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, Yi = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, Ts = [
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
], Gi = [
  "weekYear",
  "weekNumber",
  "weekday",
  "hour",
  "minute",
  "second",
  "millisecond"
], Bi = [
  "year",
  "ordinal",
  "hour",
  "minute",
  "second",
  "millisecond"
];
function Ss(s) {
  const e = Ur[s.toLowerCase()];
  if (!e)
    throw new lt(s);
  return e;
}
class g {
  /**
   * Get the day of the month (1-30ish).
   * @example DateTime.local(2017, 5, 25).day //=> 25
   */
  get day() {
    return this.isValid ? this._c.day : NaN;
  }
  /**
   * Returns the number of days in this DateTime's month
   * @example DateTime.local(2016, 2).daysInMonth //=> 29
   * @example DateTime.local(2016, 3).daysInMonth //=> 31
   */
  get daysInMonth() {
    return tt(this.year, this.month);
  }
  /**
   * Returns the number of days in this DateTime's year
   * @example DateTime.local(2016).daysInYear //=> 366
   * @example DateTime.local(2013).daysInYear //=> 365
   */
  get daysInYear() {
    return this.isValid ? be(this.year) : NaN;
  }
  /**
   * Get the hour of the day (0-23).
   * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
   */
  get hour() {
    return this.isValid ? this._c.hour : NaN;
  }
  /**
   * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
   */
  get invalidExplanation() {
    return this._invalid ? this._invalid.explanation : void 0;
  }
  /**
   * Returns an error code if this Duration became invalid, or null if the Duration is valid
   */
  get invalidReason() {
    return this._invalid ? this._invalid.reason : void 0;
  }
  /**
   * Get whether the DateTime is in a DST.
   */
  get isInDST() {
    return this.isOffsetFixed ? !1 : this.offset > this.set({ month: 1, day: 1 }).offset || this.offset > this.set({ month: 5 }).offset;
  }
  /**
   * Returns true if this DateTime is in a leap year, false otherwise
   * @example DateTime.local(2016).isInLeapYear //=> true
   * @example DateTime.local(2013).isInLeapYear //=> false
   */
  get isInLeapYear() {
    return Ve(this.year);
  }
  /**
   * Get whether this zone's offset ever changes, as in a DST.
   */
  get isOffsetFixed() {
    return this.isValid ? this.zone.isUniversal : null;
  }
  /**
   * Returns whether the DateTime is valid. Invalid DateTimes occur when:
   * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
   * * The DateTime was created by an operation on another invalid date
   */
  get isValid() {
    return this._invalid === null;
  }
  /**
   * Returns true if this date is on a weekend according to the locale, false otherwise
   * @returns {boolean}
   */
  get isWeekend() {
    return this.isValid && this.loc.getWeekendDays().includes(this.weekday);
  }
  /**
   * Get a clone of the Locale instance of a DateTime.
   */
  get loc() {
    return this.isValid ? this._loc.clone() : void 0;
  }
  /**
   * Get the week number of the week year according to the locale. Different locales assign week numbers differently,
   * because the week can start on different days of the week (see localWeekday) and because a different number of days
   * is required for a week to count as the first week of a year.
   */
  get localWeekNumber() {
    return this.isValid ? this._possiblyCachedLocalWeekData(this).weekNumber : NaN;
  }
  /**
   * Get the week year according to the locale. Different locales assign week numbers (and therefor week years)
   * differently, see localWeekNumber.
   */
  get localWeekYear() {
    return this.isValid ? this._possiblyCachedLocalWeekData(this).weekYear : NaN;
  }
  /**
   * Get the day of the week according to the locale.
   * 1 is the first day of the week and 7 is the last day of the week.
   * If the locale assigns Sunday as the first day of the week, then a date which is a Sunday will return 1,
   */
  get localWeekday() {
    return this.isValid ? this._possiblyCachedLocalWeekData(this).weekday : NaN;
  }
  /**
   * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
   */
  get locale() {
    return this.isValid ? this._loc.locale : void 0;
  }
  /**
   * Get the millisecond of the second (0-999).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
   */
  get millisecond() {
    return this.isValid ? this._c.millisecond : NaN;
  }
  /**
   * Get the minute of the hour (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
   */
  get minute() {
    return this.isValid ? this._c.minute : NaN;
  }
  /**
   * Get the month (1-12).
   * @example DateTime.local(2017, 5, 25).month //=> 5
   */
  get month() {
    return this.isValid ? this._c.month : NaN;
  }
  /**
   * Get the human-readable long month name, such as 'October'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthLong //=> October
   */
  get monthLong() {
    return this.isValid ? qe.months("long", { locObj: this._loc })[this.month - 1] : null;
  }
  /**
   * Get the human-readable short month name, such as 'Oct'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
   */
  get monthShort() {
    return this.isValid ? qe.months("short", { locObj: this._loc })[this.month - 1] : null;
  }
  /**
   * Get the numbering system of a DateTime, such as "beng". The numbering system is used when formatting the DateTime
   */
  get numberingSystem() {
    return this.isValid ? this._loc.numberingSystem : void 0;
  }
  /**
   * Get the UTC offset of this DateTime in minutes
   * @example DateTime.now().offset //=> -240
   * @example DateTime.utc().offset //=> 0
   */
  get offset() {
    return this.isValid ? +this._o : NaN;
  }
  /**
   * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
   * Defaults to the system's locale if no locale has been specified
   */
  get offsetNameLong() {
    return this.isValid ? this.zone.offsetName(this._ts, {
      format: "long",
      locale: this.locale
    }) : null;
  }
  /**
   * Get the short human name for the zone's current offset, for example "EST" or "EDT".
   * Defaults to the system's locale if no locale has been specified
   */
  get offsetNameShort() {
    return this.isValid ? this.zone.offsetName(this._ts, {
      format: "short",
      locale: this.locale
    }) : null;
  }
  /**
   * Get the ordinal (meaning the day of the year)
   * @example DateTime.local(2017, 5, 25).ordinal //=> 145
   */
  get ordinal() {
    return this.isValid ? pt(this._c).ordinal : NaN;
  }
  /**
   * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
   */
  get outputCalendar() {
    return this.isValid ? this._loc.outputCalendar : void 0;
  }
  /**
   * Get the quarter
   * @example DateTime.local(2017, 5, 25).quarter //=> 2
   */
  get quarter() {
    return this.isValid ? Math.ceil(this._c.month / 3) : NaN;
  }
  /**
   * Get the second of the minute (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
   */
  get second() {
    return this.isValid ? this._c.second : NaN;
  }
  /**
   * Get the timestamp.
   * @example DateTime.local(1970, 1, 1, 0, 0, 0, 654).ts //=> 654
   */
  get ts() {
    return this._ts;
  }
  /**
   * Get the week number of the week year (1-52ish).
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
   */
  get weekNumber() {
    return this.isValid ? this._possiblyCachedWeekData(this).weekNumber : NaN;
  }
  /**
   * Get the week year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 12, 31).weekYear //=> 2015
   */
  get weekYear() {
    return this.isValid ? this._possiblyCachedWeekData(this).weekYear : NaN;
  }
  /**
   * Get the day of the week.
   * 1 is Monday and 7 is Sunday
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 11, 31).weekday //=> 4
   */
  get weekday() {
    return this.isValid ? this._possiblyCachedWeekData(this).weekday : NaN;
  }
  /**
   * Get the human-readable long weekday, such as 'Monday'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
   */
  get weekdayLong() {
    return this.isValid ? qe.weekdays("long", { locObj: this._loc })[this.weekday - 1] : null;
  }
  /**
   * Get the human-readable short weekday, such as 'Mon'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
   */
  get weekdayShort() {
    return this.isValid ? qe.weekdays("short", { locObj: this._loc })[this.weekday - 1] : null;
  }
  /**
   * Returns the number of weeks in this DateTime's local week year
   * @example DateTime.local(2020, 6, {locale: 'en-US'}).weeksInLocalWeekYear //=> 52
   * @example DateTime.local(2020, 6, {locale: 'de-DE'}).weeksInLocalWeekYear //=> 53
   * @type {number}
   */
  get weeksInLocalWeekYear() {
    return this.isValid ? We(this.localWeekYear, this.loc.getMinDaysInFirstWeek(), this.loc.getStartOfWeek()) : NaN;
  }
  /**
   * Returns the number of weeks in this DateTime's year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2004).weeksInWeekYear //=> 53
   * @example DateTime.local(2013).weeksInWeekYear //=> 52
   */
  get weeksInWeekYear() {
    return this.isValid ? We(this.weekYear) : NaN;
  }
  /**
   * Get the year
   * @example DateTime.local(2017, 5, 25).year //=> 2017
   */
  get year() {
    return this.isValid ? this._c.year : NaN;
  }
  /**
   * Get the time zone associated with this DateTime.
   */
  get zone() {
    return this._zone;
  }
  /**
   * Get the name of the time zone.
   */
  get zoneName() {
    return this.isValid ? this.zone.name : null;
  }
  /**
   * @access private
   */
  constructor(e) {
    const t = e.zone || D.defaultZone;
    let n = e.invalid || // invalid timestamp can happen when using plus or minus with 1E8 days resulting in overflows
    (Number.isNaN(e.ts) ? new J("invalid timestamp") : null) || (t.isValid ? null : g._unsupportedZone(t));
    this._ts = A(e.ts) ? D.now() : e.ts;
    let r, i;
    if (!n)
      if (!!e.old && e.old.ts === this._ts && e.old.zone.equals(t))
        [i, r] = [e.old.c, e.old.o];
      else {
        const o = X(e.o) && !e.old ? e.o : t.offset(this.ts);
        i = Ye(this._ts, o), n = Number.isNaN(i.year) ? new J("invalid input") : null, i = n ? void 0 : i, r = n ? void 0 : o;
      }
    this._zone = t, this._loc = e.loc || x.create(), this._invalid = n, this._weekData = null, this._c = i, this._o = r, this._isLuxonDateTime = !0;
  }
  /**
   * Build a parser for `fmt` using the given locale. This parser can be passed
   * to {@link DateTime.fromFormatParser} to a parse a date in this format. This
   * can be used to optimize cases where many dates need to be parsed in a
   * specific format.
   *
   * @param {String} fmt - the format the string is expected to be in (see
   * description)
   * @param {Object} options - options used to set locale and numberingSystem
   * for parser
   * @returns {TokenParser} - opaque object to be used
   */
  static buildFormatParser(e, t = {}) {
    const { locale: n = null, numberingSystem: r = null } = t, i = x.fromOpts({
      locale: n,
      numberingSystem: r,
      defaultToEN: !0
    });
    return new Dn(i, e);
  }
  /**
   * Produce the fully expanded format token for the locale
   * Does NOT quote characters, so quoted tokens will not round trip correctly
   * @param fmt
   * @param localeOpts
   */
  static expandFormat(e, t = {}) {
    return Cn(V.parseFormat(e), x.fromObject(t)).map((r) => r.val).join("");
  }
  /**
   * Create a DateTime from an input string and format string.
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @see https://moment.github.io/luxon/docs/manual/parsing.html#table-of-tokens
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone="local"] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   */
  static fromFormat(e, t, n = {}) {
    if (A(e) || A(t))
      throw new j("fromFormat requires an input string and a format");
    const { locale: r, numberingSystem: i } = n, a = x.fromOpts({
      locale: r,
      numberingSystem: i,
      defaultToEN: !0
    }), [o, l, u, f] = Hi(a, e, t);
    return f ? g.invalid(f) : ye(o, l || null, n, `format ${t}`, e, u);
  }
  /**
   * Explain how a string would be parsed by fromFormat()
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {DateTimeOptions} options - options taken by fromFormat()
   */
  static fromFormatExplain(e, t, n = {}) {
    const { locale: r, numberingSystem: i } = n, a = x.fromOpts({
      locale: r,
      numberingSystem: i,
      defaultToEN: !0
    });
    return Nn(a, e, t);
  }
  /**
   * Create a DateTime from an input string and format parser.
   *
   * The format parser must have been created with the same locale as this call.
   *
   * @param {String} text - the string to parse
   * @param {TokenParser} formatParser - parser from {@link DateTime.buildFormatParser}
   * @param {DateTimeOptions} opts - options taken by fromFormat()
   * @returns {DateTime}
   */
  static fromFormatParser(e, t, n = {}) {
    if (A(e) || A(t))
      throw new j("fromFormatParser requires an input string and a format parser");
    const { locale: r = null, numberingSystem: i = null } = n, a = x.fromOpts({
      locale: r,
      numberingSystem: i,
      defaultToEN: !0
    });
    if (!a.equals(t.locale))
      throw new j(`fromFormatParser called with a locale of ${a}, but the format parser was created for ${t.locale}`);
    const { result: o, zone: l, specificOffset: u, invalidReason: f } = t.explainFromTokens(e);
    return f ? g.invalid(f) : ye(o, l, n, `format ${t.format}`, e, u);
  }
  /**
   * Create a DateTime from an HTTP header date
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @param {string} text - the HTTP header date
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone="local"] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
   * @param {string} [opts.locale="system's locale"] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
   */
  static fromHTTP(e, t = {}) {
    const [n, r] = pi(e);
    return ye(n, r, t, "HTTP", e);
  }
  /**
   * Create a DateTime from an ISO 8601 string
   * @param {string} text - the ISO string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone="local"] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} [opts.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [opts.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromISO('2016-05-25T09:08:34.123')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
   * @example DateTime.fromISO("2016-05-25T09:08:34.123+06:00", {setZone: true})
   * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
   * @example DateTime.fromISO('2016-W05-4')
   * @return {DateTime}
   */
  static fromISO(e, t = {}) {
    const [n, r] = wi(e);
    return ye(n, r, t, "ISO 8601", e);
  }
  /**
   * Create a DateTime from a Javascript Date object. Uses the default zone.
   * @param {Date} date - a Javascript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone="local"] - the zone to place the DateTime into
   * @return {DateTime}
   */
  static fromJSDate(e, t = {}) {
    const n = Vr(e) ? e.valueOf() : NaN;
    if (Number.isNaN(n))
      return g.invalid("invalid input");
    const r = ne(t.zone, D.defaultZone);
    return r.isValid ? new g({
      ts: n,
      zone: r,
      loc: x.fromObject(t)
    }) : g.invalid(g._unsupportedZone(r));
  }
  /**
   * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} milliseconds - a number of milliseconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone="local"] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} [options.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [options.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromMillis(e, t = {}) {
    if (X(e))
      return e < -_s || e > _s ? g.invalid("Timestamp out of range") : new g({
        ts: e,
        zone: ne(t.zone, D.defaultZone),
        loc: x.fromObject(t)
      });
    throw new j(`fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`);
  }
  /**
   * Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.year - a year, such as 1987
   * @param {number} obj.month - a month, 1-12
   * @param {number} obj.day - a day of the month, 1-31, depending on the month
   * @param {number} obj.ordinal - day of the year, 1-365 or 366
   * @param {number} obj.weekYear - an ISO week year
   * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
   * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
   * @param {number} obj.localWeekYear - a week year, according to the locale
   * @param {number} obj.localWeekNumber - a week number, between 1 and 52 or 53, depending on the year, according to the locale
   * @param {number} obj.localWeekday - a weekday, 1-7, where 1 is the first and 7 is the last day of the week, according to the locale
   * @param {number} obj.hour - hour of the day, 0-23
   * @param {number} obj.minute - minute of the hour, 0-59
   * @param {number} obj.second - second of the minute, 0-59
   * @param {number} obj.millisecond - millisecond of the second, 0-999
   * @param {Object} opts - options for creating this DateTime
   * @param {string|Zone} [opts.zone="local"] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
   * @param {string} [opts.locale="system's locale"] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
   * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'utc' }),
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'local' })
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'America/New_York' })
   * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
   * @example DateTime.fromObject({ localWeekYear: 2022, localWeekNumber: 1, localWeekday: 1 }, { locale: "en-US" }).toISODate() //=> '2021-12-26'
   * @return {DateTime}
   */
  static fromObject(e = {}, t = {}) {
    const n = ne(t.zone, D.defaultZone);
    if (!n.isValid)
      return g.invalid(g._unsupportedZone(n));
    const r = x.fromObject(t), i = rt(e, Ss), a = D.now(), o = X(t.specificOffset) ? t.specificOffset : n.offset(a), l = T(i.ordinal), u = T(i.year), f = T(i.month) || T(i.day), d = u || f, h = i.weekYear || i.weekNumber;
    if ((d || l) && h)
      throw new ie("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
    if (f && l)
      throw new ie("Can't mix ordinal dates with month/day");
    const m = h || i.weekday && !d, { minDaysInFirstWeek: p, startOfWeek: w } = hs(i, r), _ = Ye(a, o), E = {
      containsGregor: d,
      containsOrdinal: l,
      loc: r,
      normalized: i,
      obj: e,
      offsetProvis: o,
      useWeekData: m,
      zoneToUse: n
    };
    return m ? g._buildObject(E, Gi, qi, He(_, p, w)) : l ? g._buildObject(E, Bi, Yi, pt(_)) : g._buildObject(E, Ts, vs, _);
  }
  /**
   * Create a DateTime from an RFC 2822 string
   * @param {string} text - the RFC 2822 string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone="local"] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale="system's locale"] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
   * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
   */
  static fromRFC2822(e, t = {}) {
    const [n, r] = xi(e);
    return ye(n, r, t, "RFC 2822", e);
  }
  /**
   * Create a DateTime from a SQL date, time, or datetime
   * Defaults to en-US if no locale has been specified, regardless of the system's locale
   * @param {string} text - the string to parse
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone="local"] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @example DateTime.fromSQL('2017-05-15')
   * @example DateTime.fromSQL('2017-05-15 09:12:34')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
   * @example DateTime.fromSQL('09:12:34.342')
   */
  static fromSQL(e, t = {}) {
    const [n, r] = Ti(e);
    return ye(n, r, t, "SQL", e);
  }
  /**
   * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} seconds - a number of seconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone="local"] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} [options.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [options.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromSeconds(e, t = {}) {
    if (!X(e))
      throw new j("fromSeconds requires a numerical input");
    return new g({
      ts: e * 1e3,
      zone: ne(t.zone, D.defaultZone),
      loc: x.fromObject(t)
    });
  }
  /**
   * @deprecated use fromFormat instead
   */
  static fromString(e, t, n = {}) {
    return g.fromFormat(e, t, n);
  }
  /**
   * @deprecated use fromFormatExplain instead
   */
  static fromStringExplain(e, t, n = {}) {
    return g.fromFormatExplain(e, t, n);
  }
  /**
   * Create an invalid DateTime.
   * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent.
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   */
  static invalid(e, t) {
    if (!e)
      throw new j("need to specify a reason the DateTime is invalid");
    const n = e instanceof J ? e : new J(e, t);
    if (D.throwOnInvalid)
      throw new er(n);
    return new g({ invalid: n });
  }
  /**
   * Check if an object is an instance of DateTime. Works across context boundaries
   * @param {Object} o
   */
  static isDateTime(e) {
    return !!(e && e._isLuxonDateTime);
  }
  /**
   * Create a local DateTime
   * @param args - The date values (year, month, etc.) and/or the configuration options for the DateTime
   * @example {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
   * @example {number} [month=1] - The month, 1-indexed
   * @example {number} [day=1] - The day of the month, 1-indexed
   * @example {number} [hour=0] - The hour of the day, in 24-hour time
   * @example {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @example {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @example {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.local()                                //~> now
   * @example DateTime.local({ zone: "America/New_York" })    //~> now, in US east coast time
   * @example DateTime.local(2017)                            //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                         //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12, { locale: "fr" })     //~> 2017-03-12T00:00:00, with a French locale
   * @example DateTime.local(2017, 3, 12, 5)                  //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, { zone: "utc" }) //~> 2017-03-12T05:00:00, in UTC
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)          //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765)     //~> 2017-03-12T05:45:10.765
   * @return {DateTime}
   */
  static local(...e) {
    const [t, n] = this._lastOpts(e), [r, i, a, o, l, u, f] = n;
    return g._quickDT({
      year: r,
      month: i,
      day: a,
      hour: o,
      minute: l,
      second: u,
      millisecond: f
    }, t);
  }
  static max(...e) {
    if (!e.every(g.isDateTime))
      throw new j("max requires all arguments be DateTimes");
    return fs(e, (t) => t.valueOf(), Math.max);
  }
  static min(...e) {
    if (!e.every(g.isDateTime))
      throw new j("min requires all arguments be DateTimes");
    return fs(e, (t) => t.valueOf(), Math.min);
  }
  /**
   * Create a DateTime for the current instant, in the system's time zone.
   *
   * Use Settings to override these default values if needed.
   * @example DateTime.now().toISO() //~> now in the ISO format
   * @return {DateTime}
   */
  static now() {
    return new g({});
  }
  /**
   * Produce the format string for a set of options
   * @param formatOpts
   * @param localeOpts
   * @returns {string}
   */
  static parseFormatForOpts(e, t = {}) {
    const n = In(e, x.fromObject(t));
    return n ? n.map((r) => r ? r.val : null).join("") : null;
  }
  static resetCache() {
    this._zoneOffsetTs = void 0, this._zoneOffsetGuessCache = /* @__PURE__ */ new Map();
  }
  /**
   * Create a DateTime in UTC
   * @param args - The date values (year, month, etc.) and/or the configuration options for the DateTime
   * @example {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
   * @example {number} [month=1] - The month, 1-indexed
   * @example {number} [day=1] - The day of the month
   * @example {number} [hour=0] - The hour of the day, in 24-hour time
   * @example {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @example {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @example {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example {Object} options - configuration options for the DateTime
   * @example {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @example {string} [options.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @example {string} [options.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.utc()                            //~> now
   * @example DateTime.utc(2017)                        //~> 2017-01-01T00:00:00Z
   * @example DateTime.utc(2017, 3)                     //~> 2017-03-01T00:00:00Z
   * @example DateTime.utc(2017, 3, 12)                 //~> 2017-03-12T00:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5)              //~> 2017-03-12T05:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45)          //~> 2017-03-12T05:45:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, { locale: "fr" } )       //~> 2017-03-12T05:45:00Z with a French locale
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10)      //~> 2017-03-12T05:45:10Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765, { locale: "fr }) //~> 2017-03-12T05:45:10.765Z
   * @return {DateTime}
   */
  static utc(...e) {
    const [t, n] = this._lastOpts(e), [r, i, a, o, l, u, f] = n;
    return t.zone = z.utcInstance, this._quickDT({ year: r, month: i, day: a, hour: o, minute: l, second: u, millisecond: f }, t);
  }
  /**
   * @private
   */
  static _buildObject(e, t, n, r) {
    let i = !1;
    t.forEach((h) => {
      const m = e.normalized[h];
      T(m) ? i = !0 : i ? e.normalized[h] = n[h] : e.normalized[h] = r[h];
    });
    const o = (e.useWeekData ? Lr(e.normalized) : e.containsOrdinal ? Wr(e.normalized) : us(e.normalized)) || ds(e.normalized);
    if (o)
      return g.invalid(o);
    const l = e.useWeekData ? ls(e.normalized) : e.containsOrdinal ? cs(e.normalized) : e.normalized, [u, f] = Ge(l, e.offsetProvis, e.zoneToUse), d = new g({
      ts: u,
      zone: e.zoneToUse,
      o: f,
      loc: e.loc
    });
    return e.normalized.weekday && e.containsGregor && e.obj.weekday !== d.weekday ? g.invalid("mismatched weekday", `you can't specify both a weekday of ${e.normalized.weekday} and a date of ${d.toISO()}`) : d.isValid ? d : g.invalid(d._invalid);
  }
  /**
   * @private
   */
  static _diffRelative(e, t, n) {
    const r = A(n.round) ? !0 : n.round, i = (o, l) => (o = Rt(o, r || n.calendary ? 0 : 2, !0), t._loc.clone(n).relFormatter(n).format(o, l)), a = (o) => n.calendary ? t.hasSame(e, o) ? 0 : t.startOf(o).diff(e.startOf(o), o).get(o) : t.diff(e, o).get(o);
    if (n.unit)
      return i(a(n.unit), n.unit);
    for (const o of n.units) {
      const l = a(o);
      if (Math.abs(l) >= 1)
        return i(l, o);
    }
    return i(e > t ? -0 : 0, n.units[n.units.length - 1]);
  }
  /**
   * @private
   * cache offsets for zones based on the current timestamp when this function is
   * first called. When we are handling a datetime from components like (year,
   * month, day, hour) in a time zone, we need a guess about what the timezone
   * offset is so that we can convert into a UTC timestamp. One way is to find the
   * offset of now in the zone. The actual date may have a different offset (for
   * example, if we handle a date in June while we're in December in a zone that
   * observes DST), but we can check and adjust that.
   * When handling many dates, calculating the offset for now every time is
   * expensive. It's just a guess, so we can cache the offset to use even if we
   * are right on a time change boundary (we'll just correct in the other
   * direction). Using a timestamp from first read is a slight optimization for
   * handling dates close to the current date, since those dates will usually be
   * in the same offset (we could set the timestamp statically, instead). We use a
   * single timestamp for all zones to make things a bit more predictable.
   * This is safe for quickDT (used by local() and utc()) because we don't fill in
   * higher-order units from tsNow (as we do in fromObject, this requires that
   * offset is calculated from tsNow).
   */
  static _guessOffsetForZone(e) {
    return this._zoneOffsetGuessCache.has(e) || (this._zoneOffsetTs === void 0 && (this._zoneOffsetTs = D.now()), this._zoneOffsetGuessCache.set(e, e.offset(this._zoneOffsetTs))), this._zoneOffsetGuessCache.get(e);
  }
  /**
   * @private
   */
  static _lastOpts(e) {
    let t = {}, n;
    return e.length > 0 && typeof e[e.length - 1] == "object" ? (t = e.pop(), n = e) : n = Array.from(e), [t, n];
  }
  /**
   * @private
   */
  // this is a dumbed down version of fromObject() that runs about 60% faster
  // but doesn't do any validation, makes a bunch of assumptions about what units
  // are present, and so on.
  static _quickDT(e, t) {
    const n = ne(t.zone, D.defaultZone);
    if (!n.isValid)
      return g.invalid(this._unsupportedZone(n));
    const r = x.fromObject(t), i = D.now();
    let a, o;
    if (T(e.year)) {
      for (const f of Ts)
        A(e[f]) && (e[f] = vs[f]);
      const l = us(e) || ds(e);
      if (l)
        return g.invalid(l);
      const u = this._guessOffsetForZone(n);
      [a, o] = Ge(e, u, n);
    } else
      a = i;
    return new g({ ts: a, zone: n, loc: r, o });
  }
  /**
   * @private
   */
  static _unsupportedZone(e) {
    return new J("unsupported zone", `the zone "${e.name}" is not supported`);
  }
  // PUBLIC
  /**
   * Returns a string representation of this DateTime appropriate for the REPL.
   * @return {string}
   */
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.isValid ? `DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }` : `DateTime { Invalid, reason: ${this.invalidReason} }`;
  }
  /**
   * Returns the difference between two DateTimes as a Duration.
   * @param {DateTime} otherDateTime - the DateTime to compare this one to
   * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example
   * var i1 = DateTime.fromISO('1982-05-25T09:45'),
   *     i2 = DateTime.fromISO('1983-10-14T10:30');
   * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
   * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
   * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
   * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
   * @return {Duration}
   */
  diff(e, t = "milliseconds", n = {}) {
    if (!this.isValid || !e.isValid) {
      const u = this.invalidReason || e.invalidReason;
      return k.invalid(u, "created by diffing an invalid DateTime");
    }
    const r = $r(t).map(k.normalizeUnit), i = e.valueOf() > this.valueOf(), a = i ? this : e, o = i ? e : this, l = ji(a, o, r, Object.assign({ locale: this.locale, numberingSystem: this.numberingSystem }, n));
    return i ? l.negate() : l;
  }
  /**
   * Returns the difference between this DateTime and right now.
   * See {@link DateTime#diff}
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  diffNow(e = "milliseconds", t = {}) {
    return this.diff(g.now(), e, t);
  }
  /**
   * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
   * @param {string} unit - The unit to go to the end of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week
   * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
   * @return {DateTime}
   */
  endOf(e, { useLocaleWeeks: t = !1 } = {}) {
    return this.plus({ [e]: 1 }).startOf(e, { useLocaleWeeks: t }).minus({ milliseconds: 1 });
  }
  /**
   * Equality check
   * Two DateTimes are equal if and only if they represent the same millisecond, have the same zone and location, and are both valid.
   * To compare just the millisecond values, use `+dt1 === +dt2`.
   * @param {DateTime} other - the other DateTime
   */
  equals(e) {
    return this.valueOf() === e.valueOf() && this.zone.equals(e.zone) && this._loc.equals(e._loc);
  }
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
   * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
   * @return {number}
   */
  get(e) {
    return this[e];
  }
  /**
   * Get those DateTimes which have the same local time as this DateTime, but a different offset from UTC
   * in this DateTime's zone. During DST changes local time can be ambiguous, for example
   * `2023-10-29T02:30:00` in `Europe/Berlin` can have offset `+01:00` or `+02:00`.
   * This method will return both possible DateTimes if this DateTime's local time is ambiguous.
   */
  getPossibleOffsets() {
    if (!this.isValid || this.isOffsetFixed)
      return [this];
    const e = 864e5, t = 6e4, n = nt(this._c), r = this.zone.offset(n - e), i = this.zone.offset(n + e), a = this.zone.offset(n - r * t), o = this.zone.offset(n - i * t);
    if (a === o)
      return [this];
    const l = n - a * t, u = n - o * t, f = Ye(l, a), d = Ye(u, o);
    return f.hour === d.hour && f.minute === d.minute && f.second === d.second && f.millisecond === d.millisecond ? [this._clone({ ts: l }), this._clone({ ts: u })] : [this];
  }
  /**
   * Return whether this DateTime is in the same unit of time as another DateTime.
   * Higher-order units must also be identical for this function to return `true`.
   * Note that time zones are **ignored** in this comparison, which compares the **local** calendar time. Use {@link DateTime#setZone} to convert one of the dates if needed.
   * @param {DateTime} otherDateTime - the other DateTime
   * @param {string} unit - the unit of time to check sameness on
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week; only the locale of this DateTime is used
   * @example DateTime.now().hasSame(otherDT, 'day'); //~> true if otherDT is in the same current calendar day
   */
  hasSame(e, t, n) {
    if (!this.isValid)
      return !1;
    const r = e.valueOf(), i = this.setZone(e.zone, { keepLocalTime: !0 });
    return +i.startOf(t) <= r && r <= +i.endOf(t, n);
  }
  /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link DateTime#plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
   */
  minus(e) {
    if (!this.isValid)
      return this;
    const t = k.fromDurationLike(e).negate();
    return this._clone(this._adjustTime(t));
  }
  /**
   * Add a period of time to this DateTime and return the resulting DateTime
   *
   * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
   * @param {Duration|Object} duration - The amount to add. Either a Luxon Duration or the object argument to Duration.fromObject()
   * @example DateTime.now().plus(123) //~> in 123 milliseconds
   * @example DateTime.now().plus({ minutes: 15 }) //~> in 15 minutes
   * @example DateTime.now().plus({ days: 1 }) //~> this time tomorrow
   * @example DateTime.now().plus({ days: -1 }) //~> this time yesterday
   * @example DateTime.now().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
   * @example DateTime.now().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
   * @return {DateTime}
   */
  plus(e) {
    if (!this.isValid)
      return this;
    const t = k.fromDurationLike(e);
    return this._clone(this._adjustTime(t));
  }
  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} [options] - the options to set
   * @param {string} [options.locale] - ;
   * @param {CalendarSystem} [options.outputCalendar] - ;
   * @param {NumberingSystem} [options.numberingSystem] - ;
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */
  reconfigure(e) {
    const t = this._loc.clone(e);
    return this._clone({ loc: t });
  }
  /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */
  resolvedLocaleOptions(e = {}) {
    const { locale: t, numberingSystem: n, calendar: r } = V.create(this._loc.clone(e), e).resolvedOptions(this);
    return { locale: t, numberingSystem: n, outputCalendar: r };
  }
  /**
   * "Set" the values of specified units. Returns a newly-constructed DateTime.
   * You can only set units with this method; for "setting" metadata, see {@link DateTime#reconfigure} and {@link DateTime#setZone}.
   *
   * This method also supports setting locale-based week units, i.e. `localWeekday`, `localWeekNumber` and `localWeekYear`.
   * They cannot be mixed with ISO-week units like `weekday`.
   * @param {Object} values - a mapping of units to numbers
   * @example dt.set({ year: 2017 })
   * @example dt.set({ hour: 8, minute: 30 })
   * @example dt.set({ weekday: 5 })
   * @example dt.set({ year: 2005, ordinal: 234 })
   */
  set(e) {
    if (!this.isValid)
      return this;
    const t = rt(e, Ss), { minDaysInFirstWeek: n, startOfWeek: r } = hs(t, this.loc), i = T(t.weekYear) || T(t.weekNumber) || T(t.weekday), a = T(t.ordinal), o = T(t.year), l = T(t.month) || T(t.day), u = o || l, f = t.weekYear || t.weekNumber;
    if ((u || a) && f)
      throw new ie("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
    if (l && a)
      throw new ie("Can't mix ordinal dates with month/day");
    let d;
    i ? d = ls(Object.assign(Object.assign({}, He(this._c, n, r)), t), n, r) : A(t.ordinal) ? (d = Object.assign(Object.assign({}, this.toObject()), t), A(t.day) && (d.day = Math.min(tt(d.year, d.month), d.day))) : d = cs(Object.assign(Object.assign({}, pt(this._c)), t));
    const [h, m] = Ge(d, this._o, this.zone);
    return this._clone({ ts: h, o: m });
  }
  /**
   * "Set" the locale. Returns a newly-constructed DateTime.
   * Just a convenient alias for reconfigure({ locale })
   * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
   * @return {DateTime}
   */
  setLocale(e) {
    return this.reconfigure({ locale: e });
  }
  /**
   * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
   *
   * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link DateTime#plus}. You may wish to use {@link DateTime#toLocal} and {@link DateTime#toUTC} which provide simple convenience wrappers for commonly used zones.
   * @param {string|Zone} [zone="local"] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link Zone} class.
   * @param {Object} opts - options
   * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
   * @return {DateTime}
   */
  setZone(e, { keepLocalTime: t = !1, keepCalendarTime: n = !1 } = {}) {
    if (e = ne(e, D.defaultZone), e.equals(this.zone))
      return this;
    if (e.isValid) {
      let r = this._ts;
      if (t || n) {
        const i = e.offset(this._ts), a = this.toObject();
        r = Ge(a, i, e)[0];
      }
      return this._clone({ ts: r, zone: e });
    } else
      return g.invalid(g._unsupportedZone(e));
  }
  /**
   * "Set" this DateTime to the beginning of a unit of time.
   * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week
   * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
   * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('week').toISOTime(); //=> '2014-03-03', weeks always start on a Monday
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
   */
  startOf(e, { useLocaleWeeks: t = !1 } = {}) {
    if (!this.isValid)
      return this;
    const n = {}, r = k.normalizeUnit(e);
    switch (r) {
      case "years":
        n.month = 1;
      case "quarters":
      case "months":
        n.day = 1;
      case "weeks":
      case "days":
        n.hour = 0;
      case "hours":
        n.minute = 0;
      case "minutes":
        n.second = 0;
      case "seconds":
        n.millisecond = 0;
        break;
    }
    if (r === "weeks")
      if (t) {
        const i = this.loc.getStartOfWeek(), { weekday: a } = this;
        a < i && (n.weekNumber = this.weekNumber - 1), n.weekday = i;
      } else
        n.weekday = 1;
    if (r === "quarters") {
      const i = Math.ceil(this.month / 3);
      n.month = (i - 1) * 3 + 1;
    }
    return this.set(n);
  }
  /**
   * Returns a BSON serializable equivalent to this DateTime.
   * @return {Date}
   */
  toBSON() {
    return this.toJSDate();
  }
  /**
   * Returns a string representation of this DateTime formatted according to the specified format string.
   * **You may not want this.** See {@link DateTime#toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @param {string} fmt - the format string
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
   * @example DateTime.now().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
   * @example DateTime.now().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
   * @example DateTime.now().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
   * @return {string}
   */
  toFormat(e, t = {}) {
    return this.isValid ? V.create(this._loc.redefaultToEN(t)).formatDateTimeFromString(this, e) : bt;
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in HTTP headers. The output is always expressed in GMT
   * Specifically, the string conforms to RFC 1123.
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
   * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
   * @return {string}
   */
  toHTTP() {
    return Be(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime
   * @param {Object} options - options
   * @param {boolean} [options.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [options.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [options.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [options.extendedZone=false] - add the time zone format extension
   * @param {string} [options.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1983, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
   * @example DateTime.now().toISO() //=> '2017-04-22T20:47:05.335-04:00'
   * @example DateTime.now().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
   * @example DateTime.now().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
   * @return {string}
   */
  toISO({ format: e = "extended", suppressSeconds: t = !1, suppressMilliseconds: n = !1, includeOffset: r = !0, extendedZone: i = !1 } = {}) {
    if (!this.isValid)
      return null;
    const a = e === "extended";
    return [
      this._toISODate(a),
      "T",
      this._toISOTime(a, t, n, r, i)
    ].join("");
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's date component
   * @param {Object} options - options
   * @param {string} [options.format="extended"] - choose between the basic and extended (default) format
   * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
   * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
   * @return {string}
   */
  toISODate({ format: e = "extended" } = { format: "extended" }) {
    return this.isValid ? this._toISODate(e === "extended") : null;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's time component
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=true] - add the time zone format extension
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ includePrefix: true }) //=> 'T07:34:19.361Z'
   * @return {string}
   */
  toISOTime({ suppressMilliseconds: e = !1, suppressSeconds: t = !1, includeOffset: n = !0, includePrefix: r = !1, extendedZone: i = !1, format: a = "extended" } = {}) {
    return this.isValid ? [
      r ? "T" : "",
      this._toISOTime(a === "extended", t, e, n, i)
    ].join("") : null;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */
  toISOWeekDate() {
    return Be(this, "kkkk-'W'WW-c");
  }
  /**
   * Returns a Javascript Date equivalent to this DateTime.
   * @return {Date}
   */
  toJSDate() {
    return new Date(this.isValid ? this._ts : NaN);
  }
  /**
   * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }
  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */
  toLocal() {
    return this.setZone(D.defaultZone);
  }
  /**
   * Returns an array of format "parts", meaning individual tokens along with metadata. This allows callers to post-process individual sections of the formatted output.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
   * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
   * @example DateTime.now().toLocaleParts(); //=> [
   *                                   //=>   { type: "day", value: "25" },
   *                                   //=>   { type: "literal", value: "/" },
   *                                   //=>   { type: 'month', value: '05' },
   *                                   //=>   { type: "literal", value: "/" },
   *                                   //=>   { type: "year", value: "1982" }
   *                                   //=> ]
   */
  toLocaleParts(e = {}) {
    return this.isValid ? V.create(this._loc.clone(e), e).formatDateTimeParts(this) : [];
  }
  /**
   * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
   * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
   * of the DateTime in the assigned locale.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param formatOpts {Object} - Intl.DateTimeFormat constructor options and configuration options
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toLocaleString(); //=> 4/20/2017
   * @example DateTime.now().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL, { locale: 'fr' }); //=> '28 août 2022'
   * @example DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
   * @example DateTime.now().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
   * @example DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
   * @example DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
   * @example DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }); //=> '11:32'
   * @return {string}
   */
  toLocaleString(e = ct, t = {}) {
    return this.isValid ? V.create(this._loc.clone(t), e).formatDateTime(this) : bt;
  }
  /**
   * Returns the epoch milliseconds of this DateTime.
   * @return {number}
   */
  toMillis() {
    return this.isValid ? this.ts : NaN;
  }
  /**
   * Returns a JavaScript object with this DateTime's year, month, day, and so on.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example DateTime.now().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
   * @return {Object}
   */
  toObject(e = { includeConfig: !1 }) {
    if (!this.isValid)
      return {};
    const t = Object.assign({}, this._c);
    return e.includeConfig && (t.outputCalendar = this.outputCalendar, t.numberingSystem = this._loc.numberingSystem, t.locale = this._loc.locale), t;
  }
  /**
   * Returns an RFC 2822-compatible string representation of this DateTime
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */
  toRFC2822() {
    return Be(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
  }
  /**
   * Returns a string representation of a time relative to now, such as "in two days". Can only internationalize if your
   * platform supports Intl.RelativeTimeFormat. Rounds down by default.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
   * @param {string|string[]} options.unit - use a specific unit or array of units; if omitted, or an array, the method will pick the best unit. Use an array or one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"     * @param {boolean} [options.round=true] - whether to round the numbers in the output.
   * @param {number} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
   * @param {string} [options.locale] - override the locale of this DateTime
   * @param {string} [options.numberingSystem] - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelative() //=> "in 1 day"
   * @example DateTime.now().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
   * @example DateTime.now().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
   * @example DateTime.now().minus({ days: 2 }).toRelative() //=> "2 days ago"
   * @example DateTime.now().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
   * @example DateTime.now().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
   */
  toRelative(e = {}) {
    if (!this.isValid)
      return null;
    const t = e.base || g.fromObject({}, { zone: this.zone }), n = e.padding ? this < t ? -e.padding : e.padding : 0;
    let r = ["years", "months", "days", "hours", "minutes", "seconds"], i = e.unit;
    return Array.isArray(e.unit) && (r = e.unit, i = void 0), g._diffRelative(t, this.plus(n), Object.assign(Object.assign({}, e), {
      numeric: "always",
      units: r,
      unit: i
    }));
  }
  /**
   * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
   * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} [options.locale] - override the locale of this DateTime
   * @param {string} [options.unit] - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
   * @param {string} [options.numberingSystem] - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
   * @example DateTime.now().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
   * @example DateTime.now().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
   */
  toRelativeCalendar(e = {}) {
    return this.isValid ? g._diffRelative(e.base || g.fromObject({}, { zone: this.zone }), this, Object.assign(Object.assign({}, e), { numeric: "auto", units: ["years", "months", "days"], calendary: !0 })) : null;
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
   * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
   * @return {string}
   */
  toSQL(e = {}) {
    return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(e)}` : null;
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string}
   */
  toSQLDate() {
    return this.isValid ? this._toISODate(!0) : null;
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Time
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc().toSQL() //=> '05:15:16.345'
   * @example DateTime.now().toSQL() //=> '05:15:16.345 -04:00'
   * @example DateTime.now().toSQL({ includeOffset: false }) //=> '05:15:16.345'
   * @example DateTime.now().toSQL({ includeZone: false }) //=> "05:15:16.345 America/New_York"
   * @return {string}
   */
  toSQLTime({ includeOffset: e = !0, includeZone: t = !1, includeOffsetSpace: n = !0 } = {}) {
    let r = "HH:mm:ss.SSS";
    return (t || e) && (n && (r += " "), t ? r += "z" : e && (r += "ZZ")), Be(this, r, !0);
  }
  /**
   * Returns the epoch seconds of this DateTime.
   * @return {number}
   */
  toSeconds() {
    return this.isValid ? this._ts / 1e3 : NaN;
  }
  /**
   * Returns a string representation of this DateTime appropriate for debugging
   * @return {string}
   */
  toString() {
    return this.isValid ? this.toISO() : bt;
  }
  /**
   * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
   *
   * Equivalent to {@link setZone}('utc')
   * @param {number} [offset=0] - optionally, an offset from UTC in minutes
   * @param {Object} [opts={}] - options to pass to `setZone()`
   * @return {DateTime}
   */
  toUTC(e = 0, t = {}) {
    return this.setZone(z.instance(e), t);
  }
  /**
   * Returns the epoch seconds (as a whole number) of this DateTime.
   * @return {number}
   */
  toUnixInteger() {
    return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
  }
  /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} other - the other end point of the Interval
   */
  until(e) {
    return C.fromDateTimes(this, e);
  }
  /**
   * Returns the epoch milliseconds of this DateTime. Alias of {@link DateTime#toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }
  // PRIVATE
  /**
   * @private
   */
  /**
   * create a new DT instance by adding a duration, adjusting for DSTs
   * Remember that compared to Luxon.js I don't need to pass the instance as argument here,
   * because it's a private member of the instance itself.
   * Honestly don't know why he didn't do this way!
   * @param dur
   * @private
   */
  _adjustTime(e) {
    const t = this._o, n = this._c.year + Math.trunc(e.years), r = this._c.month + Math.trunc(e.months) + Math.trunc(e.quarters) * 3, i = Object.assign(Object.assign({}, this._c), {
      year: n,
      month: r,
      day: Math.min(this._c.day, tt(n, r)) + Math.trunc(e.days) + Math.trunc(e.weeks) * 7
    }), a = k.fromObject({
      years: e.years - Math.trunc(e.years),
      quarters: e.quarters - Math.trunc(e.quarters),
      months: e.months - Math.trunc(e.months),
      weeks: e.weeks - Math.trunc(e.weeks),
      days: e.days - Math.trunc(e.days),
      hours: e.hours,
      minutes: e.minutes,
      seconds: e.seconds,
      milliseconds: e.milliseconds
    }).as("milliseconds"), o = nt(i);
    let [l, u] = Mn(o, t, this.zone);
    return a !== 0 && (l += a, u = this.zone.offset(l)), { ts: l, o: u };
  }
  /**
   * @private
   */
  // clone really means, "make a new object with these modifications". all "setters" really use this
  // to create a new object while only changing some of the properties
  _clone(e) {
    const t = {
      ts: this._ts,
      zone: this.zone,
      c: this._c,
      o: this._o,
      loc: this._loc,
      invalid: this._invalid || void 0
    };
    return new g(Object.assign(Object.assign(Object.assign({}, t), e), { old: t }));
  }
  _possiblyCachedLocalWeekData(e) {
    return e._localWeekData || (e._localWeekData = He(e._c, e.loc.getMinDaysInFirstWeek(), e.loc.getStartOfWeek())), e._localWeekData;
  }
  /**
   * @private
   */
  // we cache week data on the DT object and this method intermediates the cache
  _possiblyCachedWeekData(e) {
    return e._weekData === null && (e._weekData = He(e._c)), e._weekData;
  }
  _toISODate(e) {
    const t = this._c.year > 9999 || this._c.year < 0;
    let n = "";
    return t && this._c.year >= 0 && (n += "+"), n += N(this._c.year, t ? 6 : 4), e ? (n += "-", n += N(this._c.month), n += "-", n += N(this._c.day)) : (n += N(this._c.month), n += N(this._c.day)), n;
  }
  _toISOTime(e, t, n, r, i) {
    let a = N(this._c.hour);
    return e ? (a += ":", a += N(this._c.minute), (this._c.millisecond !== 0 || this._c.second !== 0 || !t) && (a += ":")) : a += N(this._c.minute), (this._c.millisecond !== 0 || this._c.second !== 0 || !t) && (a += N(this._c.second), (this._c.millisecond !== 0 || !n) && (a += ".", a += N(this._c.millisecond, 3))), r && (this.isOffsetFixed && this.offset === 0 && !i ? a += "Z" : this._o < 0 ? (a += "-", a += N(Math.trunc(-this._o / 60)), a += ":", a += N(Math.trunc(-this._o % 60))) : (a += "+", a += N(Math.trunc(this._o / 60)), a += ":", a += N(Math.trunc(this._o % 60)))), i && (a += "[" + this.zone.ianaName + "]"), a;
  }
}
g.DATETIME_FULL = Qs;
g.DATETIME_FULL_WITH_SECONDS = Xs;
g.DATETIME_HUGE = en;
g.DATETIME_HUGE_WITH_SECONDS = tn;
g.DATETIME_MED = Js;
g.DATETIME_MED_WITH_SECONDS = Ks;
g.DATETIME_MED_WITH_WEEKDAY = cr;
g.DATETIME_SHORT = Gs;
g.DATETIME_SHORT_WITH_SECONDS = Bs;
g.DATE_FULL = Vs;
g.DATE_HUGE = $s;
g.DATE_MED = As;
g.DATE_MED_WITH_WEEKDAY = lr;
g.DATE_SHORT = ct;
g.TIME_24_SIMPLE = Zs;
g.TIME_24_WITH_LONG_OFFSET = Ys;
g.TIME_24_WITH_SECONDS = Hs;
g.TIME_24_WITH_SHORT_OFFSET = qs;
g.TIME_SIMPLE = Rs;
g.TIME_WITH_LONG_OFFSET = Ps;
g.TIME_WITH_SECONDS = zs;
g.TIME_WITH_SHORT_OFFSET = Us;
g._zoneOffsetGuessCache = /* @__PURE__ */ new Map();
const Ht = (s) => {
  const e = g.fromJSDate(new Date(s)), t = g.now().diff(e, ["years", "months", "days", "hours", "minutes"]);
  return Object.keys(t.toObject()).reduce((r, i) => (t.toObject()[i] !== 0 && r.push(`${Math.round(Math.abs(t.toObject()[i]))} ${i}`), r), []).join(", ");
}, Ji = (s) => {
  let e = "";
  return s.plugins.map((t) => {
    e += t.metadata.name + ", ";
  }), s.plugins.length > 0 && /* @__PURE__ */ c.jsxs(Z, { children: [
    /* @__PURE__ */ c.jsx(F, { children: "Enabled Plugins" }),
    /* @__PURE__ */ c.jsx(L, { children: /* @__PURE__ */ c.jsx(de, { gap: "2", alignment: "start", wrap: !0, children: s.plugins.map((t) => /* @__PURE__ */ c.jsx(
      oe,
      {
        style: { cursor: "default" },
        size: "small",
        onClick: () => console.debug("go to plugin config page of " + t.metadata.name),
        children: t.metadata.name
      },
      t.metadata.name
    )) }) })
  ] });
}, Ki = (s) => /* @__PURE__ */ c.jsx(de, { gap: "2", alignment: "start", wrap: !0, children: s.conditionArray.map((e) => /* @__PURE__ */ c.jsxs(Rn, { triggerEvent: "hover", children: [
  /* @__PURE__ */ c.jsx(zn, { children: /* @__PURE__ */ c.jsx(
    Ls,
    {
      pillKeyLabel: e.type,
      pillKey: e.type,
      pillkeyvalue: e.status,
      pillValue: e.status
    }
  ) }),
  /* @__PURE__ */ c.jsx(Un, { children: /* @__PURE__ */ c.jsxs("ul", { children: [
    /* @__PURE__ */ c.jsxs("li", { children: [
      Ht(e.lastTransitionTime),
      " ago"
    ] }),
    /* @__PURE__ */ c.jsx("li", { children: e.message })
  ] }) })
] }, e.type)) }), qt = (s) => s.status !== null && /* @__PURE__ */ c.jsx(It, { icon: s.status.icon, color: s.status.color }), Qi = (s) => {
  const e = s.nodeConditions ? jt(s.nodeConditions) : Kn;
  return /* @__PURE__ */ c.jsxs(Z, { children: [
    /* @__PURE__ */ c.jsx(L, { children: /* @__PURE__ */ c.jsx(qt, { status: e }) }),
    /* @__PURE__ */ c.jsx(L, { children: s.nodeName }),
    /* @__PURE__ */ c.jsx(L, { children: e.state }),
    /* @__PURE__ */ c.jsx(L, { children: e.message })
  ] });
}, Xi = (s) => {
  var t;
  const e = (t = s.cluster.status) == null ? void 0 : t.nodes;
  return /* @__PURE__ */ c.jsx(c.Fragment, { children: /* @__PURE__ */ c.jsxs(Mt, { columns: 4, children: [
    /* @__PURE__ */ c.jsxs(Z, { children: [
      /* @__PURE__ */ c.jsx(F, { children: /* @__PURE__ */ c.jsx(It, { icon: "monitorHeart" }) }),
      /* @__PURE__ */ c.jsx(F, { children: "Name" }),
      /* @__PURE__ */ c.jsx(F, { children: "State" }),
      /* @__PURE__ */ c.jsx(F, { children: "Message" })
    ] }),
    Object.keys(e).map((n) => {
      var i;
      const r = e[n];
      return /* @__PURE__ */ c.jsx(Qi, { nodeName: n, nodeConditions: (i = r.statusConditions) == null ? void 0 : i.conditions }, n);
    })
  ] }) });
}, ea = () => {
  var o, l, u, f, d, h, m, p, w, _, E, I, $, Se, Ee, Ce, De, ze, Yt, Gt, Bt, Jt, Kt, Qt, Xt;
  const s = b((R) => R.clusterDetails), e = b((R) => R.showClusterDetails), t = b((R) => R.setShowClusterDetails), n = b((R) => R.setClusterInEdit), r = H.useMemo(() => {
    var R, Ne, Ie, Me;
    return (Ne = (R = s.cluster) == null ? void 0 : R.metadata) != null && Ne.creationTimestamp ? Ht((Me = (Ie = s.cluster) == null ? void 0 : Ie.metadata) == null ? void 0 : Me.creationTimestamp) : "unknown";
  }, [(l = (o = s.cluster) == null ? void 0 : o.metadata) == null ? void 0 : l.creationTimestamp]), i = () => {
    t(!1);
  }, a = () => {
    t(!1), n(s.cluster);
  };
  return /* @__PURE__ */ c.jsx(
    at,
    {
      heading: /* @__PURE__ */ c.jsxs(de, { gap: "2", children: [
        /* @__PURE__ */ c.jsx(qt, { status: s.clusterStatus }),
        /* @__PURE__ */ c.jsx("span", { children: ((f = (u = s.cluster) == null ? void 0 : u.metadata) == null ? void 0 : f.name) || "Not found" })
      ] }),
      opened: !!e,
      onClose: i,
      size: "large",
      children: /* @__PURE__ */ c.jsx(ot, { children: /* @__PURE__ */ c.jsxs(xe, { px: !1, py: !0, children: [
        /* @__PURE__ */ c.jsx(Ws, { children: /* @__PURE__ */ c.jsx(Fs, { children: /* @__PURE__ */ c.jsx(oe, { icon: "addCircle", label: "Edit Cluster", onClick: () => a() }) }) }),
        /* @__PURE__ */ c.jsxs(Mt, { columns: 2, children: [
          /* @__PURE__ */ c.jsxs(Z, { children: [
            /* @__PURE__ */ c.jsx(F, { children: "State" }),
            /* @__PURE__ */ c.jsx(L, { children: (d = s.clusterStatus) == null ? void 0 : d.state })
          ] }),
          /* @__PURE__ */ c.jsxs(Z, { children: [
            /* @__PURE__ */ c.jsx(F, { children: "Age" }),
            /* @__PURE__ */ c.jsx(L, { children: r })
          ] }),
          /* @__PURE__ */ c.jsxs(Z, { children: [
            /* @__PURE__ */ c.jsx(F, { children: "Kubernetes Version" }),
            /* @__PURE__ */ c.jsx(L, { children: ((m = (h = s.cluster) == null ? void 0 : h.status) == null ? void 0 : m.kubernetesVersion) ?? "unknown" })
          ] }),
          /* @__PURE__ */ c.jsxs(Z, { children: [
            /* @__PURE__ */ c.jsx(F, { children: "Access Mode" }),
            /* @__PURE__ */ c.jsx(L, { children: ((w = (p = s.cluster) == null ? void 0 : p.spec) == null ? void 0 : w.accessMode) ?? "unknown" })
          ] }),
          ((_ = s.clusterStatus) == null ? void 0 : _.message) && /* @__PURE__ */ c.jsxs(Z, { children: [
            /* @__PURE__ */ c.jsx(F, { children: "Message" }),
            /* @__PURE__ */ c.jsx(L, { children: (E = s.clusterStatus) == null ? void 0 : E.message })
          ] }),
          (($ = (I = s.cluster) == null ? void 0 : I.metadata) == null ? void 0 : $.labels) && /* @__PURE__ */ c.jsxs(Z, { children: [
            /* @__PURE__ */ c.jsx(F, { children: "Labels" }),
            /* @__PURE__ */ c.jsx(L, { children: /* @__PURE__ */ c.jsx(de, { gap: "2", alignment: "start", wrap: !0, children: Object.keys((Ee = (Se = s.cluster) == null ? void 0 : Se.metadata) == null ? void 0 : Ee.labels).map((R) => {
              var Ie, Me;
              const Ne = (Me = (Ie = s.cluster) == null ? void 0 : Ie.metadata) == null ? void 0 : Me.labels[R];
              return /* @__PURE__ */ c.jsx(
                Ls,
                {
                  pillKeyLabel: R,
                  pillKey: R,
                  pillkeyvalue: Ne,
                  pillValue: Ne
                },
                R
              );
            }) }) })
          ] }),
          ((ze = (De = (Ce = s.cluster) == null ? void 0 : Ce.status) == null ? void 0 : De.statusConditions) == null ? void 0 : ze.conditions) && /* @__PURE__ */ c.jsxs(Z, { children: [
            /* @__PURE__ */ c.jsx(F, { children: "Conditions" }),
            /* @__PURE__ */ c.jsx(L, { children: /* @__PURE__ */ c.jsx(Ki, { conditionArray: (Bt = (Gt = (Yt = s.cluster) == null ? void 0 : Yt.status) == null ? void 0 : Gt.statusConditions) == null ? void 0 : Bt.conditions }) })
          ] }),
          s.plugins && /* @__PURE__ */ c.jsx(Ji, { plugins: s.plugins })
        ] }),
        ((Kt = (Jt = s.cluster) == null ? void 0 : Jt.status) == null ? void 0 : Kt.nodes) && Object.keys((Xt = (Qt = s.cluster) == null ? void 0 : Qt.status) == null ? void 0 : Xt.nodes).length > 0 && /* @__PURE__ */ c.jsxs(xe, { px: !1, py: !0, children: [
          /* @__PURE__ */ c.jsx("h2", { className: "text-xl font-bold mb-2 mt-8", children: "Nodes" }),
          /* @__PURE__ */ c.jsx(Xi, { cluster: s.cluster })
        ] })
      ] }) })
    }
  );
}, ta = (s) => {
  const e = s.dataName ? s.dataName : "Data", t = s.isSecret ? s.isSecret : !1, n = (a, o) => {
    let l = a.split("."), u = l[0], f = l[1];
    switch (u) {
      case "dataKey":
        let d = { ...s.data }, h = d[f];
        delete d[f], d[o] = h, s.setData(d);
        break;
      case "dataValue":
        s.mutateValue && (o = s.mutateValue(o)), s.setData({
          ...s.data,
          [f]: o
        });
        break;
      default:
        console.log("keyIdentifier not found");
        break;
    }
  }, r = (a) => {
    let o = { ...s.data };
    delete o[a], s.setData(o);
  }, i = () => {
    s.setData({
      ...s.data,
      "": ""
    });
  };
  return /* @__PURE__ */ c.jsxs(kt, { title: s.title, children: [
    s.data && Object.keys(s.data).length > 0 && Object.keys(s.data).map((a, o) => /* @__PURE__ */ c.jsx(Qe, { children: /* @__PURE__ */ c.jsxs(Pn, { children: [
      /* @__PURE__ */ c.jsx(
        st,
        {
          id: "dataKey." + a,
          label: `${e} Key`,
          value: a,
          onBlur: (l) => n("dataKey." + a, l.target.value)
        }
      ),
      /* @__PURE__ */ c.jsx(
        st,
        {
          id: "dataValue" + a,
          type: t ? "password" : "text",
          label: `${e} Value`,
          value: s.data[a],
          onBlur: (l) => n("dataValue." + a, l.target.value)
        }
      ),
      /* @__PURE__ */ c.jsx(oe, { icon: "deleteForever", onClick: () => r(a) })
    ] }) }, o)),
    /* @__PURE__ */ c.jsx(oe, { icon: "addCircle", label: `Add ${e}`, onClick: i })
  ] });
}, sa = (s) => (s.submitMessage.variant || (s.submitMessage.variant = s.submitMessage.ok ? "success" : "error"), /* @__PURE__ */ c.jsx(
  Qn,
  {
    autoDismissTimeout: 3e3,
    autoDismiss: s.submitMessage.ok,
    onDismiss: s.onMessageDismiss,
    variant: s.submitMessage.variant,
    text: s.submitMessage.message
  }
)), jn = () => {
  const s = b((n) => n.endpoint), e = b((n) => n.token);
  return {
    client: s && e && Zn({ apiEndpoint: s, token: e })
  };
}, na = (s) => {
  const e = b((f) => f.namespace), { client: t } = jn(), n = H.useCallback(
    async (f, d, h) => !t || !e ? { ok: !1, message: "Client or namespace not available" } : await t.get(f + "/" + d.metadata.name, {
      params: h
    }).then((m) => m.kind !== d.kind ? {
      ok: !1,
      message: `Failed getting ${d.kind}`,
      response: m
    } : {
      ok: !0,
      response: m,
      message: `Successfully got ${d.kind}`
    }).catch((m) => ({
      ok: !1,
      message: `Failed getting ${d.kind}: ${m}`
    })),
    [t, e]
  ), r = H.useCallback(
    async (f, d) => !t || !e ? { ok: !1, message: "Client or namespace not available" } : await t.post(f, d).then((h) => h.kind !== d.kind ? { ok: !1, message: `Failed creating ${d.kind}` } : {
      ok: !0,
      response: h,
      message: `Successfully created ${d.kind}`
    }).catch((h) => ({
      ok: !1,
      message: `Failed creating ${d.kind}: ${h}`
    })),
    [t, e]
  ), i = H.useCallback(
    async (f, d) => !t || !e ? { ok: !1, message: "Client or namespace not available" } : await t.put(f + "/" + d.metadata.name, d).then((h) => h.kind !== d.kind ? { ok: !1, message: `Failed updating ${d.kind}` } : {
      ok: !0,
      response: h,
      message: `Successfully updated ${d.kind}`
    }).catch((h) => ({
      ok: !1,
      message: `Failed updating ${d.kind}: ${h}`
    })),
    [t, e]
  ), a = H.useCallback(
    async (f, d, h) => !t || !e ? { ok: !1, message: "Client or namespace not available" } : await t.delete(f + "/" + d.metadata.name, {
      params: h
    }).then((m) => m.kind == d.kind || m.kind == "Status" && m.status == "Success" ? { ok: !0, message: `Successfully deleted ${d.kind}` } : { ok: !1, message: `Failed deleting ${d.kind}` }).catch((m) => ({
      ok: !1,
      message: `Failed deleting ${d.kind}: ${m}`
    })),
    [t, e]
  ), o = H.useCallback(
    async (f, d, h, m, p, w) => !t || !e ? (console.debug(
      "Cannot initialize watch: client or namespace not available, waiting for client or namespace to become available"
    ), { ok: !1, message: "Client or namespace not available" }) : u(f, d).then((_) => _.ok ? (t.watch(f, {
      params: w
    }).on(t.WATCH_ERROR, () => {
      console.debug("ERROR: Failed to watch resource");
    }).on(t.WATCH_ADDED, (I) => {
      l(I, d), h(I);
    }).on(t.WATCH_MODIFIED, (I) => {
      l(I, d), m(I);
    }).on(t.WATCH_DELETED, (I) => {
      l(I, d), p(I);
    }).start(), { ok: !0, message: `Successfully watching ${d}s` }) : {
      ok: !1,
      message: `Cannot initialize watch for ${d}: ${_.message}`,
      status: 403
    }),
    [t, e]
  ), l = (f, d) => {
    f.forEach((h) => {
      h.kind = d;
    });
  }, u = H.useCallback(
    async (f, d) => {
      var p;
      let m = await n(f, { metadata: { name: "" }, kind: d });
      return ((p = m.response) == null ? void 0 : p.kind) == `${d}List` ? { ok: !0, message: "" } : { ok: m.ok, message: m.message };
    },
    [t, e]
  );
  return {
    get: n,
    create: r,
    update: i,
    deleteObject: a,
    watch: o
  };
}, Fn = () => {
  const { get: s, create: e, update: t, deleteObject: n, watch: r } = na(), i = b((m) => m.namespace), a = b((m) => m.modifyClusters), o = b((m) => m.deleteClusters);
  return {
    getCluster: (m) => s(
      `/apis/greenhouse.sap/v1alpha1/namespaces/${i}/clusters`,
      m
    ),
    createCluster: (m) => e(
      `/apis/greenhouse.sap/v1alpha1/namespaces/${i}/clusters`,
      m
    ),
    updateCluster: (m) => t(
      `/apis/greenhouse.sap/v1alpha1/namespaces/${i}/clusters`,
      m
    ),
    deleteCluster: (m) => n(
      `/apis/greenhouse.sap/v1alpha1/namespaces/${i}/clusters`,
      m
    ),
    watchClusters: () => r(
      `/apis/greenhouse.sap/v1alpha1/namespaces/${i}/clusters`,
      "Cluster",
      a,
      a,
      o
    )
  };
}, ra = () => {
  var l, u, f, d;
  const s = b((h) => h.clusterInEdit);
  s == null || s.spec;
  const e = b((h) => h.setClusterInEdit), [t, n] = ae.useState({ message: "", ok: !1 }), { updateCluster: r } = Fn(), i = () => {
    e(void 0);
  }, a = (h) => {
    e({
      ...s,
      metadata: {
        ...s == null ? void 0 : s.metadata,
        labels: h
      }
    });
  }, o = async () => {
    r(s).then((m) => {
      n(m);
    });
  };
  return /* @__PURE__ */ c.jsx(
    at,
    {
      heading: ((l = s.metadata) == null ? void 0 : l.name) || "Not found",
      opened: !!s,
      onClose: i,
      size: "large",
      children: /* @__PURE__ */ c.jsx(ot, { children: /* @__PURE__ */ c.jsx(xe, { px: !1, py: !0, children: /* @__PURE__ */ c.jsxs(Hn, { children: [
        /* @__PURE__ */ c.jsxs(kt, { title: "General", children: [
          /* @__PURE__ */ c.jsx(Qe, { children: /* @__PURE__ */ c.jsx(
            st,
            {
              id: "metadata.name",
              label: "Name",
              placeholder: "Name of this Cluster",
              value: (u = s.metadata) == null ? void 0 : u.name,
              disabled: !0
            }
          ) }),
          /* @__PURE__ */ c.jsx(Qe, { children: /* @__PURE__ */ c.jsx(
            st,
            {
              id: "spec.accessmode",
              label: "Accessmode",
              placeholder: "Accessmode of this Cluster",
              value: (f = s.spec) == null ? void 0 : f.accessMode,
              disabled: !0
            }
          ) }),
          /* @__PURE__ */ c.jsx(Qe, { children: /* @__PURE__ */ c.jsx(
            ta,
            {
              data: (d = s.metadata) == null ? void 0 : d.labels,
              setData: a,
              title: "Labels",
              dataName: "Label"
            }
          ) })
        ] }),
        /* @__PURE__ */ c.jsx(kt, { children: /* @__PURE__ */ c.jsxs(de, { distribution: "end", gap: "2", children: [
          t.message != "" && /* @__PURE__ */ c.jsx(sa, { submitMessage: t }),
          /* @__PURE__ */ c.jsx(oe, { onClick: o, variant: "primary", children: "Update Cluster" })
        ] }) })
      ] }) }) })
    }
  );
}, ia = () => {
  const s = b((n) => n.namespace), { client: e } = jn();
  return {
    getPluginsforCluster: H.useCallback(
      async (n) => {
        var o;
        let r = [];
        const i = "greenhouse.sap/cluster";
        if (!e || !s || !((o = n == null ? void 0 : n.metadata) != null && o.namespace))
          return r;
        const a = `${i}=${n.metadata.name}`;
        return r = await e.get(`/apis/greenhouse.sap/v1alpha1/namespaces/${s}/plugins`, {
          params: {
            labelSelector: a
          }
        }).then((l) => l.kind !== "PluginList" ? (console.debug("ERROR: Failed to get Plugins for cluster, did not get PluginList"), []) : l.items), r;
      },
      [e, s]
    )
  };
}, aa = (s) => {
  var d, h, m, p, w, _, E, I;
  const e = b(($) => $.setClusterDetails), t = b(($) => $.clusterDetails), n = b(($) => $.setClusterDetailPlugins), r = b(($) => $.setShowOnBoardCluster), { getPluginsforCluster: i } = ia(), a = b(($) => $.setShowClusterDetails), o = b(($) => $.showClusterDetails);
  let l = jt(
    ((h = (d = s.cluster.status) == null ? void 0 : d.statusConditions) == null ? void 0 : h.conditions) ?? []
  ), u = ((m = l.message) == null ? void 0 : m.substring(0, 66)) ?? "";
  u += u.length > 50 ? "..." : "";
  const f = () => {
    var Se, Ee, Ce, De;
    e(s.cluster), ((Ee = (Se = t == null ? void 0 : t.cluster) == null ? void 0 : Se.metadata) == null ? void 0 : Ee.name) === ((De = (Ce = s == null ? void 0 : s.cluster) == null ? void 0 : Ce.metadata) == null ? void 0 : De.name) && o ? a(!1) : a(!0), r(!1), i(s.cluster).then((ze) => {
      n(ze);
    });
  };
  return /* @__PURE__ */ c.jsxs(
    Z,
    {
      className: `cursor-pointer ${((w = (p = t == null ? void 0 : t.cluster) == null ? void 0 : p.metadata) == null ? void 0 : w.name) === ((E = (_ = s == null ? void 0 : s.cluster) == null ? void 0 : _.metadata) == null ? void 0 : E.name) && o ? "active" : ""}`,
      onClick: () => f(),
      children: [
        /* @__PURE__ */ c.jsx(L, { children: /* @__PURE__ */ c.jsx(qt, { status: l }) }),
        /* @__PURE__ */ c.jsx(L, { children: s.cluster.metadata.name }),
        /* @__PURE__ */ c.jsx(L, { children: l.state }),
        /* @__PURE__ */ c.jsx(L, { children: (I = s.cluster.status) == null ? void 0 : I.kubernetesVersion }),
        /* @__PURE__ */ c.jsx(L, { children: u })
      ]
    }
  );
}, oa = (s) => /* @__PURE__ */ c.jsx(c.Fragment, { children: /* @__PURE__ */ c.jsxs(Mt, { columns: 5, minContentColumns: [0], className: "clusters", children: [
  /* @__PURE__ */ c.jsxs(Z, { children: [
    /* @__PURE__ */ c.jsx(F, { children: /* @__PURE__ */ c.jsx(It, { icon: "monitorHeart" }) }),
    /* @__PURE__ */ c.jsx(F, { children: "Name" }),
    /* @__PURE__ */ c.jsx(F, { children: "State" }),
    /* @__PURE__ */ c.jsx(F, { children: "Version" }),
    /* @__PURE__ */ c.jsx(F, { children: "Message" })
  ] }),
  s.clusters.map((e) => /* @__PURE__ */ c.jsx(aa, { cluster: e }, e.metadata.name))
] }) }), la = `apiVersion: v1
kind: Config
clusters:
- cluster:
    server: ##ENDPOINT##
  name: default
contexts:
- context:
    cluster: default
    user: default
    namespace: ##NAMESPACE##
  name: default
current-context: default
preferences: {}
users:
- name: default
  user:
    token: ##TOKEN##`, ca = "##ENDPOINT##", ua = "##NAMESPACE##", da = "##TOKEN##", ha = (s) => {
  const e = b((l) => l.setShowDownloadKubeConfig), t = b((l) => l.showDownloadKubeConfig), r = la.replace(da, s.token).replace(ua, s.namespace).replace(ca, s.endpoint), i = new Blob([r], { type: "text/plain" }), a = URL.createObjectURL(i), o = () => {
    e(!1);
  };
  return /* @__PURE__ */ c.jsx(at, { heading: "greenhouse Kubeconfig", opened: !!t, onClose: o, children: /* @__PURE__ */ c.jsx(ot, { children: /* @__PURE__ */ c.jsx(xe, { px: !1, py: !0, children: /* @__PURE__ */ c.jsxs(de, { direction: "vertical", gap: "3", wrap: !0, children: [
    /* @__PURE__ */ c.jsx("p", { children: "This is a kubeconfig generated based on your personal access permissions in the greenhouse cluster. These will be limited to your organizations namespace. Only organization admins have write permissions on resources." }),
    /* @__PURE__ */ c.jsx(qn, { heading: "greenhouse kubeconfig", size: "small", content: r }),
    /* @__PURE__ */ c.jsx("a", { href: a, download: "greenhouse.kubeconfig", target: "_blank", children: /* @__PURE__ */ c.jsx(oe, { icon: "download", label: "Download kubeconfig" }) }),
    /* @__PURE__ */ c.jsxs("p", { children: [
      "The token used for authentication is valid for another",
      " ",
      /* @__PURE__ */ c.jsx("strong", { children: Ht(s.expiry) })
    ] }),
    /* @__PURE__ */ c.jsx("p", { children: "Download the kubeconfig file and use it with kubectl to access the cluster:" }),
    /* @__PURE__ */ c.jsx(Yn, { content: "kubectl --kubeconfig /your/path/to/greenhouse.kubeconfig get teams" })
  ] }) }) }) });
}, v = 1, Ln = 2, Wn = 4, M = 8, Ct = 16, Je = 32, ee = 64, Dt = {
  a: {
    content: v | M,
    self: !1,
    type: v | M | Je | ee
  },
  address: {
    invalid: ["h1", "h2", "h3", "h4", "h5", "h6", "address", "article", "aside", "section", "div", "header", "footer"],
    self: !1
  },
  audio: {
    children: ["track", "source"]
  },
  br: {
    type: v | M,
    void: !0
  },
  body: {
    content: v | Ln | Wn | M | Ct | Je | ee
  },
  button: {
    content: M,
    type: v | M | Je | ee
  },
  caption: {
    content: v,
    parent: ["table"]
  },
  col: {
    parent: ["colgroup"],
    void: !0
  },
  colgroup: {
    children: ["col"],
    parent: ["table"]
  },
  details: {
    children: ["summary"],
    type: v | Je | ee
  },
  dd: {
    content: v,
    parent: ["dl"]
  },
  dl: {
    children: ["dt", "dd"],
    type: v
  },
  dt: {
    content: v,
    invalid: ["footer", "header"],
    parent: ["dl"]
  },
  figcaption: {
    content: v,
    parent: ["figure"]
  },
  footer: {
    invalid: ["footer", "header"]
  },
  header: {
    invalid: ["footer", "header"]
  },
  hr: {
    type: v,
    void: !0
  },
  img: {
    void: !0
  },
  li: {
    content: v,
    parent: ["ul", "ol", "menu"]
  },
  main: {
    self: !1
  },
  ol: {
    children: ["li"],
    type: v
  },
  picture: {
    children: ["source", "img"],
    type: v | M | Ct
  },
  rb: {
    parent: ["ruby", "rtc"]
  },
  rp: {
    parent: ["ruby", "rtc"]
  },
  rt: {
    content: M,
    parent: ["ruby", "rtc"]
  },
  rtc: {
    content: M,
    parent: ["ruby"]
  },
  ruby: {
    children: ["rb", "rp", "rt", "rtc"]
  },
  source: {
    parent: ["audio", "video", "picture"],
    void: !0
  },
  summary: {
    content: M,
    parent: ["details"]
  },
  table: {
    children: ["caption", "colgroup", "thead", "tbody", "tfoot", "tr"],
    type: v
  },
  tbody: {
    parent: ["table"],
    children: ["tr"]
  },
  td: {
    content: v,
    parent: ["tr"]
  },
  tfoot: {
    parent: ["table"],
    children: ["tr"]
  },
  th: {
    content: v,
    parent: ["tr"]
  },
  thead: {
    parent: ["table"],
    children: ["tr"]
  },
  tr: {
    parent: ["table", "tbody", "thead", "tfoot"],
    children: ["th", "td"]
  },
  track: {
    parent: ["audio", "video"],
    void: !0
  },
  ul: {
    children: ["li"],
    type: v
  },
  video: {
    children: ["track", "source"]
  },
  wbr: {
    type: v | M,
    void: !0
  }
};
function fe(s) {
  return (e) => {
    Dt[e] = {
      ...s,
      ...Dt[e]
    };
  };
}
["address", "main", "div", "figure", "p", "pre"].forEach(fe({
  content: v,
  type: v | ee
}));
["abbr", "b", "bdi", "bdo", "cite", "code", "data", "dfn", "em", "i", "kbd", "mark", "q", "ruby", "samp", "strong", "sub", "sup", "time", "u", "var"].forEach(fe({
  content: M,
  type: v | M | ee
}));
["p", "pre"].forEach(fe({
  content: M,
  type: v | ee
}));
["s", "small", "span", "del", "ins"].forEach(fe({
  content: M,
  type: v | M
}));
["article", "aside", "footer", "header", "nav", "section", "blockquote"].forEach(fe({
  content: v,
  type: v | Ln | ee
}));
["h1", "h2", "h3", "h4", "h5", "h6"].forEach(fe({
  content: M,
  type: v | Wn | ee
}));
["audio", "canvas", "iframe", "img", "video"].forEach(fe({
  type: v | M | Ct | ee
}));
const Nt = Object.freeze(Dt), fa = ["applet", "base", "body", "command", "embed", "frame", "frameset", "head", "html", "link", "meta", "noscript", "object", "script", "style", "title"], ma = Object.keys(Nt).filter((s) => s !== "canvas" && s !== "iframe"), S = 1, ga = 2, Fe = 3, we = 4, An = 5, Es = Object.freeze({
  alt: S,
  cite: S,
  class: S,
  colspan: Fe,
  controls: we,
  datetime: S,
  default: we,
  disabled: we,
  dir: S,
  height: S,
  href: S,
  id: S,
  kind: S,
  label: S,
  lang: S,
  loading: S,
  loop: we,
  media: S,
  muted: we,
  poster: S,
  rel: S,
  role: S,
  rowspan: Fe,
  scope: S,
  sizes: S,
  span: Fe,
  start: Fe,
  style: An,
  src: S,
  srclang: S,
  srcset: S,
  tabindex: S,
  target: S,
  title: S,
  type: S,
  width: S
}), ya = Object.freeze({
  class: "className",
  colspan: "colSpan",
  datetime: "dateTime",
  rowspan: "rowSpan",
  srclang: "srcLang",
  srcset: "srcSet",
  tabindex: "tabIndex"
});
function it() {
  return it = Object.assign || function(s) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (s[n] = t[n]);
    }
    return s;
  }, it.apply(this, arguments);
}
function Vn({
  attributes: s = {},
  className: e,
  children: t = null,
  selfClose: n = !1,
  tagName: r
}) {
  const i = r;
  return n ? /* @__PURE__ */ ae.createElement(i, it({
    className: e
  }, s)) : /* @__PURE__ */ ae.createElement(i, it({
    className: e
  }, s), t);
}
class pa {
  /**
   * Filter and clean an HTML attribute value.
   */
  attribute(e, t) {
    return t;
  }
  /**
   * Filter and clean an HTML node.
   */
  node(e, t) {
    return t;
  }
}
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */
var wa = /["'&<>]/, ba = ka;
function ka(s) {
  var e = "" + s, t = wa.exec(e);
  if (!t)
    return e;
  var n, r = "", i = 0, a = 0;
  for (i = t.index; i < e.length; i++) {
    switch (e.charCodeAt(i)) {
      case 34:
        n = "&quot;";
        break;
      case 38:
        n = "&amp;";
        break;
      case 39:
        n = "&#39;";
        break;
      case 60:
        n = "&lt;";
        break;
      case 62:
        n = "&gt;";
        break;
      default:
        continue;
    }
    a !== i && (r += e.substring(a, i)), a = i + 1, r += n;
  }
  return a !== i ? r + e.substring(a, i) : r;
}
const xa = /* @__PURE__ */ Jn(ba);
var Ke = {};
function te(s, e, t) {
  return e in s ? Object.defineProperty(s, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : s[e] = t, s;
}
const Oa = /(url|image|image-set)\(/i;
class _a extends pa {
  attribute(e, t) {
    return e === "style" && Object.keys(t).forEach((n) => {
      String(t[n]).match(Oa) && delete t[n];
    }), t;
  }
}
const Cs = 1, va = 3, Ta = /^<(!doctype|(html|head|body)(\s|>))/i, Sa = /^(aria-|data-|\w+:)/iu, Ea = /{{{(\w+)\/?}}}/;
function Ca() {
  if (!(typeof window > "u" || typeof document > "u"))
    return document.implementation.createHTMLDocument("Interweave");
}
class Da {
  constructor(e, t = {}, n = [], r = []) {
    var i;
    if (te(this, "allowed", void 0), te(this, "banned", void 0), te(this, "blocked", void 0), te(this, "container", void 0), te(this, "content", []), te(this, "props", void 0), te(this, "matchers", void 0), te(this, "filters", void 0), te(this, "keyIndex", void 0), Ke.NODE_ENV !== "production" && e && typeof e != "string")
      throw new TypeError("Interweave parser requires a valid string.");
    this.props = t, this.matchers = n, this.filters = [...r, new _a()], this.keyIndex = -1, this.container = this.createContainer(e || ""), this.allowed = new Set((i = t.allowList) !== null && i !== void 0 ? i : ma), this.banned = new Set(fa), this.blocked = new Set(t.blockList);
  }
  /**
   * Loop through and apply all registered attribute filters.
   */
  applyAttributeFilters(e, t) {
    return this.filters.reduce((n, r) => n !== null && typeof r.attribute == "function" ? r.attribute(e, n) : n, t);
  }
  /**
   * Loop through and apply all registered node filters.
   */
  applyNodeFilters(e, t) {
    return this.filters.reduce((n, r) => n !== null && typeof r.node == "function" ? r.node(e, n) : n, t);
  }
  /**
   * Loop through and apply all registered matchers to the string.
   * If a match is found, create a React element, and build a new array.
   * This array allows React to interpolate and render accordingly.
   */
  applyMatchers(e, t) {
    const n = {}, {
      props: r
    } = this;
    let i = e, a = 0, o = null;
    return this.matchers.forEach((l) => {
      const u = l.asTag().toLowerCase(), f = this.getTagConfig(u);
      if (r[l.inverseName] || !this.isTagAllowed(u) || !this.canRenderChild(t, f))
        return;
      let d = "";
      for (; i && (o = l.match(i)); ) {
        const {
          index: h,
          length: m,
          match: p,
          valid: w,
          void: _,
          ...E
        } = o, I = l.propName + String(a);
        h > 0 && (d += i.slice(0, h)), w ? (d += _ ? `{{{${I}/}}}` : `{{{${I}}}}${p}{{{/${I}}}}`, this.keyIndex += 1, a += 1, n[I] = {
          children: p,
          matcher: l,
          props: {
            ...r,
            ...E,
            key: this.keyIndex
          }
        }) : d += p, l.greedy ? (i = d + i.slice(h + m), d = "") : i = i.slice(h + (m || p.length));
      }
      l.greedy || (i = d + i);
    }), a === 0 ? e : this.replaceTokens(i, n);
  }
  /**
   * Determine whether the child can be rendered within the parent.
   */
  canRenderChild(e, t) {
    return !e.tagName || !t.tagName || e.void ? !1 : e.children.length > 0 ? e.children.includes(t.tagName) : e.invalid.length > 0 && e.invalid.includes(t.tagName) ? !1 : t.parent.length > 0 ? t.parent.includes(e.tagName) : !e.self && e.tagName === t.tagName ? !1 : !!(e && e.content & t.type);
  }
  /**
   * Convert line breaks in a string to HTML `<br/>` tags.
   * If the string contains HTML, we should not convert anything,
   * as line breaks should be handled by `<br/>`s in the markup itself.
   */
  convertLineBreaks(e) {
    const {
      noHtml: t,
      disableLineBreaks: n
    } = this.props;
    if (t || n || e.match(/<((?:\/[ a-z]+)|(?:[ a-z]+\/))>/gi))
      return e;
    let r = e.replace(/\r\n/g, `
`);
    return r = r.replace(/\n{3,}/g, `


`), r = r.replace(/\n/g, "<br/>"), r;
  }
  /**
   * Create a detached HTML document that allows for easy HTML
   * parsing while not triggering scripts or loading external
   * resources.
   */
  createContainer(e) {
    var t;
    const r = (typeof global < "u" && global.INTERWEAVE_SSR_POLYFILL || Ca)();
    if (!r)
      return;
    const i = (t = this.props.containerTagName) !== null && t !== void 0 ? t : "body", a = i === "body" || i === "fragment" ? r.body : r.createElement(i);
    if (e.match(Ta)) {
      if (Ke.NODE_ENV !== "production")
        throw new Error("HTML documents as Interweave content are not supported.");
    } else
      a.innerHTML = this.convertLineBreaks(this.props.escapeHtml ? xa(e) : e);
    return a;
  }
  /**
   * Convert an elements attribute map to an object map.
   * Returns null if no attributes are defined.
   */
  extractAttributes(e) {
    const {
      allowAttributes: t
    } = this.props, n = {};
    let r = 0;
    return e.nodeType !== Cs || !e.attributes || ([...e.attributes].forEach((i) => {
      const {
        name: a,
        value: o
      } = i, l = a.toLowerCase(), u = Es[l] || Es[a];
      if (!this.isSafe(e) || !l.match(Sa) && (!t && (!u || u === ga) || l.startsWith("on") || o.replace(/(\s|\0|&#x0([9AD]);)/, "").match(/(javascript|vbscript|livescript|xss):/i)))
        return;
      let f = l === "style" ? this.extractStyleAttribute(e) : o;
      u === we ? f = !0 : u === Fe ? f = Number.parseFloat(String(f)) : u !== An && (f = String(f)), n[ya[l] || l] = this.applyAttributeFilters(l, f), r += 1;
    }), r === 0) ? null : n;
  }
  /**
   * Extract the style attribute as an object and remove values that allow for attack vectors.
   */
  extractStyleAttribute(e) {
    const t = {};
    return Array.from(e.style).forEach((n) => {
      const r = e.style[n];
      (typeof r == "string" || typeof r == "number") && (t[n.replace(/-([a-z])/g, (i, a) => String(a).toUpperCase())] = r);
    }), t;
  }
  /**
   * Return configuration for a specific tag.
   */
  getTagConfig(e) {
    const t = {
      children: [],
      content: 0,
      invalid: [],
      parent: [],
      self: !0,
      tagName: "",
      type: 0,
      void: !1
    };
    return Nt[e] ? {
      ...t,
      ...Nt[e],
      tagName: e
    } : t;
  }
  /**
   * Verify that a node is safe from XSS and injection attacks.
   */
  isSafe(e) {
    if (typeof HTMLAnchorElement < "u" && e instanceof HTMLAnchorElement) {
      const t = e.getAttribute("href");
      if (t != null && t.startsWith("#"))
        return !0;
      const n = e.protocol.toLowerCase();
      return n === ":" || n === "http:" || n === "https:" || n === "mailto:" || n === "tel:";
    }
    return !0;
  }
  /**
   * Verify that an HTML tag is allowed to render.
   */
  isTagAllowed(e) {
    return this.banned.has(e) || this.blocked.has(e) ? !1 : this.props.allowElements || this.allowed.has(e);
  }
  /**
   * Parse the markup by injecting it into a detached document,
   * while looping over all child nodes and generating an
   * array to interpolate into JSX.
   */
  parse() {
    return this.container ? this.parseNode(this.container, this.getTagConfig(this.container.nodeName.toLowerCase())) : [];
  }
  /**
   * Loop over the nodes children and generate a
   * list of text nodes and React elements.
   */
  parseNode(e, t) {
    const {
      noHtml: n,
      noHtmlExceptMatchers: r,
      allowElements: i,
      transform: a,
      transformOnlyAllowList: o
    } = this.props;
    let l = [], u = "";
    return [...e.childNodes].forEach((f) => {
      if (f.nodeType === Cs) {
        const h = f.nodeName.toLowerCase(), m = this.getTagConfig(h);
        u && (l.push(u), u = "");
        const p = this.applyNodeFilters(h, f);
        if (!p)
          return;
        let w;
        if (a && !(o && !this.isTagAllowed(h))) {
          this.keyIndex += 1;
          const _ = this.keyIndex;
          w = this.parseNode(p, m);
          const E = a(p, w, m);
          if (E === null)
            return;
          if (typeof E < "u") {
            l.push(/* @__PURE__ */ ae.cloneElement(E, {
              key: _
            }));
            return;
          }
          this.keyIndex = _ - 1;
        }
        if (this.banned.has(h))
          return;
        if (!(n || r && h !== "br") && this.isTagAllowed(h) && (i || this.canRenderChild(t, m))) {
          var d;
          this.keyIndex += 1;
          const _ = this.extractAttributes(p), E = {
            tagName: h
          };
          _ && (E.attributes = _), m.void && (E.selfClose = m.void), l.push(/* @__PURE__ */ ae.createElement(Vn, {
            ...E,
            key: this.keyIndex
          }, (d = w) !== null && d !== void 0 ? d : this.parseNode(p, m)));
        } else
          l = [...l, ...this.parseNode(p, m.tagName ? m : t)];
      } else if (f.nodeType === va) {
        const h = n && !r ? f.textContent : (
          // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
          this.applyMatchers(f.textContent || "", t)
        );
        Array.isArray(h) ? l = [...l, ...h] : u += h;
      }
    }), u && l.push(u), l;
  }
  /**
   * Deconstruct the string into an array, by replacing custom tokens with React elements,
   * so that React can render it correctly.
   */
  replaceTokens(e, t) {
    if (!e.includes("{{{"))
      return e;
    const n = [];
    let r = e, i = null;
    for (; i = r.match(Ea); ) {
      const [a, o] = i, l = i.index, u = a.includes("/");
      if (Ke.NODE_ENV !== "production" && !t[o])
        throw new Error(`Token "${o}" found but no matching element to replace with.`);
      l > 0 && (n.push(r.slice(0, l)), r = r.slice(l));
      const {
        children: f,
        matcher: d,
        props: h
      } = t[o];
      let m;
      if (u)
        m = a.length, n.push(d.createElement(f, h));
      else {
        const p = r.match(new RegExp(`{{{/${o}}}}`));
        if (Ke.NODE_ENV !== "production" && !p)
          throw new Error(`Closing token missing for interpolated element "${o}".`);
        m = p.index + p[0].length, n.push(d.createElement(this.replaceTokens(r.slice(a.length, p.index), t), h));
      }
      r = r.slice(m);
    }
    return r.length > 0 && n.push(r), n.length === 0 ? "" : n.length === 1 && typeof n[0] == "string" ? n[0] : n;
  }
}
function Na(s) {
  var e;
  const {
    attributes: t,
    className: n,
    containerTagName: r,
    content: i,
    emptyContent: a,
    parsedContent: o,
    tagName: l,
    noWrap: u
  } = s, f = (e = r ?? l) !== null && e !== void 0 ? e : "span", d = f === "fragment" ? !0 : u;
  let h;
  if (o)
    h = o;
  else {
    const m = new Da(i ?? "", s).parse();
    m.length > 0 && (h = m);
  }
  return h || (h = a), d ? /* @__PURE__ */ ae.createElement(ae.Fragment, null, h) : /* @__PURE__ */ ae.createElement(Vn, {
    attributes: t,
    className: n,
    tagName: f
  }, h);
}
const Ia = () => {
  const s = b((i) => i.namespace), e = b((i) => i.showOnBoardCluster), t = b((i) => i.setShowOnBoardCluster), n = () => {
    t(!1);
  }, r = `
  <p>Download the latest <i>greenhousectl</i> binary from <a target='_blank' href='https://github.com/cloudoperators/greenhouse/releases'>here</a>. </p>
  <p>Place a valid kubeconfig file for the cluster to be onboarded in <code>/path/to/kubeconfig</code> </p>
  <p>Execute the following command to onboard your cluster: <br><br>
  <code>greenhousectl cluster bootstrap --org ${s} --bootstrap-kubeconfig /path/to/kubeconfig</code> </p>
  <br>
  <p>For more information, visit <a target='blank' href='https://cloudoperators.github.io/greenhouse/docs/user-guides/cluster/onboarding/'>the docs</a> </p>
  `;
  return /* @__PURE__ */ c.jsx(at, { heading: "How to onboard a cluster", opened: !!e, onClose: n, children: /* @__PURE__ */ c.jsx(ot, { children: /* @__PURE__ */ c.jsx(xe, { px: !1, py: !0, children: /* @__PURE__ */ c.jsx(de, { distribution: "center", alignment: "center", wrap: !0, children: /* @__PURE__ */ c.jsx(Na, { content: r }) }) }) }) });
}, Ma = ({ expires: s }) => {
  const e = b((w) => w.token), t = b((w) => w.namespace), n = b((w) => w.clusters), r = b((w) => w.clusterDetails), i = b((w) => w.showClusterDetails), a = b((w) => w.showOnBoardCluster), o = b((w) => w.showDownloadKubeConfig), l = b((w) => w.clusterInEdit), u = b((w) => w.endpoint), f = b((w) => w.setShowOnBoardCluster), d = b((w) => w.setShowClusterDetails), h = b((w) => w.setShowDownloadKubeConfig), m = () => {
    f(!0), d(!1), h(!1);
  }, p = () => {
    f(!1), d(!1), h(!0);
  };
  return /* @__PURE__ */ c.jsx(xe, { children: /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsx(Ws, { children: /* @__PURE__ */ c.jsxs(Fs, { children: [
      /* @__PURE__ */ c.jsx(
        oe,
        {
          icon: "openInBrowser",
          label: "Access greenhouse cluster",
          onClick: () => p()
        }
      ),
      /* @__PURE__ */ c.jsx(oe, { icon: "addCircle", label: "Onboard Cluster", onClick: () => m() })
    ] }) }),
    a && /* @__PURE__ */ c.jsx(Ia, {}),
    o && /* @__PURE__ */ c.jsx(ha, { namespace: t, token: e, endpoint: u, expiry: s }),
    n.length > 0 && /* @__PURE__ */ c.jsx(oa, { clusters: n }),
    i && r.cluster && /* @__PURE__ */ c.jsx(ea, {}),
    l && /* @__PURE__ */ c.jsx(ra, {})
  ] }) });
}, ja = "*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}@media (min-width: 1856px){.container{max-width:1856px}}.isolate{isolation:isolate}.mx-4{margin-left:1rem;margin-right:1rem}.mx-6{margin-left:1.5rem;margin-right:1.5rem}.my-px{margin-top:1px;margin-bottom:1px}.mb-0{margin-bottom:0}.mb-2{margin-bottom:.5rem}.mb-3{margin-bottom:.75rem}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.mb-8{margin-bottom:2rem}.ml-2{margin-left:.5rem}.mr-3{margin-right:.75rem}.mt-3{margin-top:.75rem}.mt-4{margin-top:1rem}.mt-8{margin-top:2rem}.mt-auto{margin-top:auto}.inline{display:inline}.table{display:table}.grid{display:grid}.h-8{height:2rem}.h-full{height:100%}.h-screen{height:100vh}.w-64{width:16rem}.w-8{width:2rem}.w-full{width:100%}.cursor-pointer{cursor:pointer}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-\\[max-content_auto\\]{grid-template-columns:max-content auto}.grid-rows-\\[minmax\\(100vh\\,100\\%\\)\\]{grid-template-rows:minmax(100vh,100%)}.gap-4{gap:1rem}.break-all{word-break:break-all}.rounded{border-radius:.25rem}.rounded-full{border-radius:9999px}.border-y-2{border-top-width:2px;border-bottom-width:2px}.border-b-0{border-bottom-width:0}.border-l-4{border-left-width:4px}.border-theme-background-lvl-1{--tw-border-opacity: 1;border-color:rgba(var(--color-background-lvl-1-raw),var(--tw-border-opacity))}.bg-juno-grey-blue-11{--tw-bg-opacity: 1;background-color:rgba(var(--color-juno-grey-blue-11-raw),var(--tw-bg-opacity))}.bg-theme-accent\\/30{background-color:rgba(var(--color-accent-raw),.3)}.bg-theme-background-lvl-0{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-0-raw),var(--tw-bg-opacity))}.bg-theme-background-lvl-1{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-1-raw),var(--tw-bg-opacity))}.bg-theme-background-lvl-2{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-2-raw),var(--tw-bg-opacity))}.bg-theme-global-bg{--tw-bg-opacity: 1;background-color:rgba(var(--color-global-bg-raw),var(--tw-bg-opacity))}.bg-cover{background-size:cover}.fill-current{fill:currentColor}.p-8{padding:2rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-4{padding-left:1rem;padding-right:1rem}.py-0{padding-top:0;padding-bottom:0}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.pb-6{padding-bottom:1.5rem}.pl-4{padding-left:1rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.text-theme-accent{--tw-text-opacity: 1;color:rgba(var(--color-accent-raw),var(--tw-text-opacity))}.text-theme-danger{--tw-text-opacity: 1;color:rgba(var(--color-danger-raw),var(--tw-text-opacity))}.text-theme-default{--tw-text-opacity: 1;color:rgba(var(--color-text-default-raw),var(--tw-text-opacity))}.text-theme-disabled{--tw-text-opacity: 1;color:rgba(var(--color-text-disabled-raw),var(--tw-text-opacity))}.text-theme-high{--tw-text-opacity: 1;color:rgba(var(--color-text-high-raw),var(--tw-text-opacity))}.text-theme-info{--tw-text-opacity: 1;color:rgba(var(--color-info-raw),var(--tw-text-opacity))}.text-theme-light{--tw-text-opacity: 1;color:rgba(var(--color-text-light-raw),var(--tw-text-opacity))}.text-theme-link{--tw-text-opacity: 1;color:rgba(var(--color-text-link-raw),var(--tw-text-opacity))}.text-white{--tw-text-opacity: 1;color:rgba(var(--color-white-raw),var(--tw-text-opacity))}.text-opacity-50{--tw-text-opacity: .5 }.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.clusters .juno-datagrid-row:hover .juno-datagrid-cell{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-1-raw),var(--tw-bg-opacity))}.clusters .juno-datagrid-row.active .juno-datagrid-cell,.hover\\:bg-theme-background-lvl-2:hover{--tw-bg-opacity: 1;background-color:rgba(var(--color-background-lvl-2-raw),var(--tw-bg-opacity))}.hover\\:text-theme-high:hover{--tw-text-opacity: 1;color:rgba(var(--color-text-high-raw),var(--tw-text-opacity))}.hover\\:text-white:hover{--tw-text-opacity: 1;color:rgba(var(--color-white-raw),var(--tw-text-opacity))}", Ds = "greenhouse-cluster-admin", Ns = "scd", Is = "soc", Ms = "cd", Fa = (s) => {
  const [e, t] = H.useState(!1), n = Gn(s || Ds), r = b((h) => h.loggedIn), i = b((h) => h.showClusterDetails), a = b((h) => h.setShowClusterDetails), o = b((h) => h.showOnBoardCluster), l = b((h) => h.setShowOnBoardCluster), u = b((h) => h.clusterDetails), f = b((h) => h.setClusterDetails), d = b((h) => h.setClusterDetailPlugins);
  H.useEffect(() => {
    var w, _, E;
    if (e || !r) return;
    console.debug(
      `greenhouse-cluster-admin: (${s || Ds}) setting up state from url:`,
      n.currentState()
    );
    const h = (w = n.currentState()) == null ? void 0 : w[Ns], m = (_ = n.currentState()) == null ? void 0 : _[Is], p = (E = n.currentState()) == null ? void 0 : E[Ms];
    h && a(h), m && l(m), p && (f(p.cluster), d(p.plugins)), t(!0);
  }, [r, a, l, f]), H.useEffect(() => {
    !e || !r || n.push({
      [Ns]: i,
      [Is]: o,
      [Ms]: u
    });
  }, [r, i, o, u]);
}, La = (s) => {
  Fa(s.consumerId);
  const { watchClusters: e } = Fn();
  return H.useEffect(() => {
    e();
  }, []), null;
}, js = "greenhouse-cluster-admin", Wa = (s = {}) => {
  const e = b((n) => n.initialize), t = b((n) => n.setUrlStateKey);
  return e(s.apiEndpoint, s.token, s.namespace), t(js), /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsx(La, { consumerId: js }),
    /* @__PURE__ */ c.jsx(Xn, { pageHeader: "Converged Cloud | Clusters", embedded: !0, children: /* @__PURE__ */ c.jsx(Ma, {}) })
  ] });
}, Ua = (s) => /* @__PURE__ */ c.jsxs(Bn, { theme: `${s.theme ? s.theme : "theme-dark"}`, children: [
  /* @__PURE__ */ c.jsx("style", { children: ja.toString() }),
  /* @__PURE__ */ c.jsx(Wa, { ...s })
] });
export {
  Ua as default
};
