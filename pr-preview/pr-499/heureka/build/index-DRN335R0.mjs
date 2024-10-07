function Qb(X, le) {
  for (var A = 0; A < le.length; A++) {
    const nt = le[A];
    if (typeof nt != "string" && !Array.isArray(nt)) {
      for (const xt in nt)
        if (xt !== "default" && !(xt in X)) {
          const Zt = Object.getOwnPropertyDescriptor(nt, xt);
          Zt && Object.defineProperty(X, xt, Zt.get ? Zt : {
            enumerable: !0,
            get: () => nt[xt]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(X, Symbol.toStringTag, { value: "Module" }));
}
function J1(X) {
  return X && X.__esModule && Object.prototype.hasOwnProperty.call(X, "default") ? X.default : X;
}
var o0 = { exports: {} }, _a = {}, s0 = { exports: {} }, lt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var I1;
function Wb() {
  if (I1) return lt;
  I1 = 1;
  var X = Symbol.for("react.element"), le = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), nt = Symbol.for("react.strict_mode"), xt = Symbol.for("react.profiler"), Zt = Symbol.for("react.provider"), ut = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), Yt = Symbol.for("react.suspense"), He = Symbol.for("react.memo"), _e = Symbol.for("react.lazy"), qe = Symbol.iterator;
  function ue(T) {
    return T === null || typeof T != "object" ? null : (T = qe && T[qe] || T["@@iterator"], typeof T == "function" ? T : null);
  }
  var je = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ee = Object.assign, Ce = {};
  function rt(T, P, ve) {
    this.props = T, this.context = P, this.refs = Ce, this.updater = ve || je;
  }
  rt.prototype.isReactComponent = {}, rt.prototype.setState = function(T, P) {
    if (typeof T != "object" && typeof T != "function" && T != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, T, P, "setState");
  }, rt.prototype.forceUpdate = function(T) {
    this.updater.enqueueForceUpdate(this, T, "forceUpdate");
  };
  function An() {
  }
  An.prototype = rt.prototype;
  function Fn(T, P, ve) {
    this.props = T, this.context = P, this.refs = Ce, this.updater = ve || je;
  }
  var Bt = Fn.prototype = new An();
  Bt.constructor = Fn, ee(Bt, rt.prototype), Bt.isPureReactComponent = !0;
  var Me = Array.isArray, gt = Object.prototype.hasOwnProperty, Ee = { current: null }, Ze = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ve(T, P, ve) {
    var Ne, ze = {}, Je = null, Ge = null;
    if (P != null) for (Ne in P.ref !== void 0 && (Ge = P.ref), P.key !== void 0 && (Je = "" + P.key), P) gt.call(P, Ne) && !Ze.hasOwnProperty(Ne) && (ze[Ne] = P[Ne]);
    var dt = arguments.length - 2;
    if (dt === 1) ze.children = ve;
    else if (1 < dt) {
      for (var et = Array(dt), mn = 0; mn < dt; mn++) et[mn] = arguments[mn + 2];
      ze.children = et;
    }
    if (T && T.defaultProps) for (Ne in dt = T.defaultProps, dt) ze[Ne] === void 0 && (ze[Ne] = dt[Ne]);
    return { $$typeof: X, type: T, key: Je, ref: Ge, props: ze, _owner: Ee.current };
  }
  function Cn(T, P) {
    return { $$typeof: X, type: T.type, key: P, ref: T.ref, props: T.props, _owner: T._owner };
  }
  function Tn(T) {
    return typeof T == "object" && T !== null && T.$$typeof === X;
  }
  function Pt(T) {
    var P = { "=": "=0", ":": "=2" };
    return "$" + T.replace(/[=:]/g, function(ve) {
      return P[ve];
    });
  }
  var ft = /\/+/g;
  function Jt(T, P) {
    return typeof T == "object" && T !== null && T.key != null ? Pt("" + T.key) : P.toString(36);
  }
  function Ie(T, P, ve, Ne, ze) {
    var Je = typeof T;
    (Je === "undefined" || Je === "boolean") && (T = null);
    var Ge = !1;
    if (T === null) Ge = !0;
    else switch (Je) {
      case "string":
      case "number":
        Ge = !0;
        break;
      case "object":
        switch (T.$$typeof) {
          case X:
          case le:
            Ge = !0;
        }
    }
    if (Ge) return Ge = T, ze = ze(Ge), T = Ne === "" ? "." + Jt(Ge, 0) : Ne, Me(ze) ? (ve = "", T != null && (ve = T.replace(ft, "$&/") + "/"), Ie(ze, P, ve, "", function(mn) {
      return mn;
    })) : ze != null && (Tn(ze) && (ze = Cn(ze, ve + (!ze.key || Ge && Ge.key === ze.key ? "" : ("" + ze.key).replace(ft, "$&/") + "/") + T)), P.push(ze)), 1;
    if (Ge = 0, Ne = Ne === "" ? "." : Ne + ":", Me(T)) for (var dt = 0; dt < T.length; dt++) {
      Je = T[dt];
      var et = Ne + Jt(Je, dt);
      Ge += Ie(Je, P, ve, et, ze);
    }
    else if (et = ue(T), typeof et == "function") for (T = et.call(T), dt = 0; !(Je = T.next()).done; ) Je = Je.value, et = Ne + Jt(Je, dt++), Ge += Ie(Je, P, ve, et, ze);
    else if (Je === "object") throw P = String(T), Error("Objects are not valid as a React child (found: " + (P === "[object Object]" ? "object with keys {" + Object.keys(T).join(", ") + "}" : P) + "). If you meant to render a collection of children, use an array instead.");
    return Ge;
  }
  function ot(T, P, ve) {
    if (T == null) return T;
    var Ne = [], ze = 0;
    return Ie(T, Ne, "", "", function(Je) {
      return P.call(ve, Je, ze++);
    }), Ne;
  }
  function _t(T) {
    if (T._status === -1) {
      var P = T._result;
      P = P(), P.then(function(ve) {
        (T._status === 0 || T._status === -1) && (T._status = 1, T._result = ve);
      }, function(ve) {
        (T._status === 0 || T._status === -1) && (T._status = 2, T._result = ve);
      }), T._status === -1 && (T._status = 0, T._result = P);
    }
    if (T._status === 1) return T._result.default;
    throw T._result;
  }
  var Qe = { current: null }, B = { transition: null }, pe = { ReactCurrentDispatcher: Qe, ReactCurrentBatchConfig: B, ReactCurrentOwner: Ee };
  return lt.Children = { map: ot, forEach: function(T, P, ve) {
    ot(T, function() {
      P.apply(this, arguments);
    }, ve);
  }, count: function(T) {
    var P = 0;
    return ot(T, function() {
      P++;
    }), P;
  }, toArray: function(T) {
    return ot(T, function(P) {
      return P;
    }) || [];
  }, only: function(T) {
    if (!Tn(T)) throw Error("React.Children.only expected to receive a single React element child.");
    return T;
  } }, lt.Component = rt, lt.Fragment = A, lt.Profiler = xt, lt.PureComponent = Fn, lt.StrictMode = nt, lt.Suspense = Yt, lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pe, lt.cloneElement = function(T, P, ve) {
    if (T == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + T + ".");
    var Ne = ee({}, T.props), ze = T.key, Je = T.ref, Ge = T._owner;
    if (P != null) {
      if (P.ref !== void 0 && (Je = P.ref, Ge = Ee.current), P.key !== void 0 && (ze = "" + P.key), T.type && T.type.defaultProps) var dt = T.type.defaultProps;
      for (et in P) gt.call(P, et) && !Ze.hasOwnProperty(et) && (Ne[et] = P[et] === void 0 && dt !== void 0 ? dt[et] : P[et]);
    }
    var et = arguments.length - 2;
    if (et === 1) Ne.children = ve;
    else if (1 < et) {
      dt = Array(et);
      for (var mn = 0; mn < et; mn++) dt[mn] = arguments[mn + 2];
      Ne.children = dt;
    }
    return { $$typeof: X, type: T.type, key: ze, ref: Je, props: Ne, _owner: Ge };
  }, lt.createContext = function(T) {
    return T = { $$typeof: ut, _currentValue: T, _currentValue2: T, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, T.Provider = { $$typeof: Zt, _context: T }, T.Consumer = T;
  }, lt.createElement = Ve, lt.createFactory = function(T) {
    var P = Ve.bind(null, T);
    return P.type = T, P;
  }, lt.createRef = function() {
    return { current: null };
  }, lt.forwardRef = function(T) {
    return { $$typeof: E, render: T };
  }, lt.isValidElement = Tn, lt.lazy = function(T) {
    return { $$typeof: _e, _payload: { _status: -1, _result: T }, _init: _t };
  }, lt.memo = function(T, P) {
    return { $$typeof: He, type: T, compare: P === void 0 ? null : P };
  }, lt.startTransition = function(T) {
    var P = B.transition;
    B.transition = {};
    try {
      T();
    } finally {
      B.transition = P;
    }
  }, lt.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, lt.useCallback = function(T, P) {
    return Qe.current.useCallback(T, P);
  }, lt.useContext = function(T) {
    return Qe.current.useContext(T);
  }, lt.useDebugValue = function() {
  }, lt.useDeferredValue = function(T) {
    return Qe.current.useDeferredValue(T);
  }, lt.useEffect = function(T, P) {
    return Qe.current.useEffect(T, P);
  }, lt.useId = function() {
    return Qe.current.useId();
  }, lt.useImperativeHandle = function(T, P, ve) {
    return Qe.current.useImperativeHandle(T, P, ve);
  }, lt.useInsertionEffect = function(T, P) {
    return Qe.current.useInsertionEffect(T, P);
  }, lt.useLayoutEffect = function(T, P) {
    return Qe.current.useLayoutEffect(T, P);
  }, lt.useMemo = function(T, P) {
    return Qe.current.useMemo(T, P);
  }, lt.useReducer = function(T, P, ve) {
    return Qe.current.useReducer(T, P, ve);
  }, lt.useRef = function(T) {
    return Qe.current.useRef(T);
  }, lt.useState = function(T) {
    return Qe.current.useState(T);
  }, lt.useSyncExternalStore = function(T, P, ve) {
    return Qe.current.useSyncExternalStore(T, P, ve);
  }, lt.useTransition = function() {
    return Qe.current.useTransition();
  }, lt.version = "18.2.0", lt;
}
var Bp = { exports: {} };
Bp.exports;
var Q1;
function Gb() {
  return Q1 || (Q1 = 1, function(X, le) {
    var A = {};
    /**
     * @license React
     * react.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    A.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var nt = "18.2.0", xt = Symbol.for("react.element"), Zt = Symbol.for("react.portal"), ut = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), Yt = Symbol.for("react.profiler"), He = Symbol.for("react.provider"), _e = Symbol.for("react.context"), qe = Symbol.for("react.forward_ref"), ue = Symbol.for("react.suspense"), je = Symbol.for("react.suspense_list"), ee = Symbol.for("react.memo"), Ce = Symbol.for("react.lazy"), rt = Symbol.for("react.offscreen"), An = Symbol.iterator, Fn = "@@iterator";
      function Bt(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = An && h[An] || h[Fn];
        return typeof C == "function" ? C : null;
      }
      var Me = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, gt = {
        transition: null
      }, Ee = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, Ze = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Ve = {}, Cn = null;
      function Tn(h) {
        Cn = h;
      }
      Ve.setExtraStackFrame = function(h) {
        Cn = h;
      }, Ve.getCurrentStack = null, Ve.getStackAddendum = function() {
        var h = "";
        Cn && (h += Cn);
        var C = Ve.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var Pt = !1, ft = !1, Jt = !1, Ie = !1, ot = !1, _t = {
        ReactCurrentDispatcher: Me,
        ReactCurrentBatchConfig: gt,
        ReactCurrentOwner: Ze
      };
      _t.ReactDebugCurrentFrame = Ve, _t.ReactCurrentActQueue = Ee;
      function Qe(h) {
        {
          for (var C = arguments.length, L = new Array(C > 1 ? C - 1 : 0), U = 1; U < C; U++)
            L[U - 1] = arguments[U];
          pe("warn", h, L);
        }
      }
      function B(h) {
        {
          for (var C = arguments.length, L = new Array(C > 1 ? C - 1 : 0), U = 1; U < C; U++)
            L[U - 1] = arguments[U];
          pe("error", h, L);
        }
      }
      function pe(h, C, L) {
        {
          var U = _t.ReactDebugCurrentFrame, W = U.getStackAddendum();
          W !== "" && (C += "%s", L = L.concat([W]));
          var de = L.map(function(re) {
            return String(re);
          });
          de.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, de);
        }
      }
      var T = {};
      function P(h, C) {
        {
          var L = h.constructor, U = L && (L.displayName || L.name) || "ReactClass", W = U + "." + C;
          if (T[W])
            return;
          B("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, U), T[W] = !0;
        }
      }
      var ve = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(h, C, L) {
          P(h, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(h, C, L, U) {
          P(h, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(h, C, L, U) {
          P(h, "setState");
        }
      }, Ne = Object.assign, ze = {};
      Object.freeze(ze);
      function Je(h, C, L) {
        this.props = h, this.context = C, this.refs = ze, this.updater = L || ve;
      }
      Je.prototype.isReactComponent = {}, Je.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, Je.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var Ge = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, dt = function(h, C) {
          Object.defineProperty(Je.prototype, h, {
            get: function() {
              Qe("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var et in Ge)
          Ge.hasOwnProperty(et) && dt(et, Ge[et]);
      }
      function mn() {
      }
      mn.prototype = Je.prototype;
      function Vr(h, C, L) {
        this.props = h, this.context = C, this.refs = ze, this.updater = L || ve;
      }
      var ea = Vr.prototype = new mn();
      ea.constructor = Vr, Ne(ea, Je.prototype), ea.isPureReactComponent = !0;
      function ta() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var Br = Array.isArray;
      function yn(h) {
        return Br(h);
      }
      function nr(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, L = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return L;
        }
      }
      function yr(h) {
        try {
          return rr(h), !1;
        } catch {
          return !0;
        }
      }
      function rr(h) {
        return "" + h;
      }
      function Hn(h) {
        if (yr(h))
          return B("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", nr(h)), rr(h);
      }
      function na(h, C, L) {
        var U = h.displayName;
        if (U)
          return U;
        var W = C.displayName || C.name || "";
        return W !== "" ? L + "(" + W + ")" : L;
      }
      function Da(h) {
        return h.displayName || "Context";
      }
      function jn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && B("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case ut:
            return "Fragment";
          case Zt:
            return "Portal";
          case Yt:
            return "Profiler";
          case E:
            return "StrictMode";
          case ue:
            return "Suspense";
          case je:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case _e:
              var C = h;
              return Da(C) + ".Consumer";
            case He:
              var L = h;
              return Da(L._context) + ".Provider";
            case qe:
              return na(h, h.render, "ForwardRef");
            case ee:
              var U = h.displayName || null;
              return U !== null ? U : jn(h.type) || "Memo";
            case Ce: {
              var W = h, de = W._payload, re = W._init;
              try {
                return jn(re(de));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var ka = Object.prototype.hasOwnProperty, vi = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, gr, Oa, Sr;
      Sr = {};
      function ra(h) {
        if (ka.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function kn(h) {
        if (ka.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function La(h, C) {
        var L = function() {
          gr || (gr = !0, B("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        L.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: L,
          configurable: !0
        });
      }
      function $a(h, C) {
        var L = function() {
          Oa || (Oa = !0, B("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        L.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: L,
          configurable: !0
        });
      }
      function Ya(h) {
        if (typeof h.ref == "string" && Ze.current && h.__self && Ze.current.stateNode !== h.__self) {
          var C = jn(Ze.current.type);
          Sr[C] || (B('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), Sr[C] = !0);
        }
      }
      var Z = function(h, C, L, U, W, de, re) {
        var Oe = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: xt,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: L,
          props: re,
          // Record the component responsible for creating this element.
          _owner: de
        };
        return Oe._store = {}, Object.defineProperty(Oe._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Oe, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: U
        }), Object.defineProperty(Oe, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: W
        }), Object.freeze && (Object.freeze(Oe.props), Object.freeze(Oe)), Oe;
      };
      function Te(h, C, L) {
        var U, W = {}, de = null, re = null, Oe = null, Ye = null;
        if (C != null) {
          ra(C) && (re = C.ref, Ya(C)), kn(C) && (Hn(C.key), de = "" + C.key), Oe = C.__self === void 0 ? null : C.__self, Ye = C.__source === void 0 ? null : C.__source;
          for (U in C)
            ka.call(C, U) && !vi.hasOwnProperty(U) && (W[U] = C[U]);
        }
        var Et = arguments.length - 2;
        if (Et === 1)
          W.children = L;
        else if (Et > 1) {
          for (var Tt = Array(Et), Rt = 0; Rt < Et; Rt++)
            Tt[Rt] = arguments[Rt + 2];
          Object.freeze && Object.freeze(Tt), W.children = Tt;
        }
        if (h && h.defaultProps) {
          var wt = h.defaultProps;
          for (U in wt)
            W[U] === void 0 && (W[U] = wt[U]);
        }
        if (de || re) {
          var Ft = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          de && La(W, Ft), re && $a(W, Ft);
        }
        return Z(h, de, re, Oe, Ye, Ze.current, W);
      }
      function We(h, C) {
        var L = Z(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return L;
      }
      function bt(h, C, L) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var U, W = Ne({}, h.props), de = h.key, re = h.ref, Oe = h._self, Ye = h._source, Et = h._owner;
        if (C != null) {
          ra(C) && (re = C.ref, Et = Ze.current), kn(C) && (Hn(C.key), de = "" + C.key);
          var Tt;
          h.type && h.type.defaultProps && (Tt = h.type.defaultProps);
          for (U in C)
            ka.call(C, U) && !vi.hasOwnProperty(U) && (C[U] === void 0 && Tt !== void 0 ? W[U] = Tt[U] : W[U] = C[U]);
        }
        var Rt = arguments.length - 2;
        if (Rt === 1)
          W.children = L;
        else if (Rt > 1) {
          for (var wt = Array(Rt), Ft = 0; Ft < Rt; Ft++)
            wt[Ft] = arguments[Ft + 2];
          W.children = wt;
        }
        return Z(h.type, de, re, Oe, Ye, Et, W);
      }
      function St(h) {
        return typeof h == "object" && h !== null && h.$$typeof === xt;
      }
      var Rn = ".", on = ":";
      function Er(h) {
        var C = /[=:]/g, L = {
          "=": "=0",
          ":": "=2"
        }, U = h.replace(C, function(W) {
          return L[W];
        });
        return "$" + U;
      }
      var Ut = !1, ar = /\/+/g;
      function It(h) {
        return h.replace(ar, "$&/");
      }
      function en(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (Hn(h.key), Er("" + h.key)) : C.toString(36);
      }
      function Ll(h, C, L, U, W) {
        var de = typeof h;
        (de === "undefined" || de === "boolean") && (h = null);
        var re = !1;
        if (h === null)
          re = !0;
        else
          switch (de) {
            case "string":
            case "number":
              re = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case xt:
                case Zt:
                  re = !0;
              }
          }
        if (re) {
          var Oe = h, Ye = W(Oe), Et = U === "" ? Rn + en(Oe, 0) : U;
          if (yn(Ye)) {
            var Tt = "";
            Et != null && (Tt = It(Et) + "/"), Ll(Ye, C, Tt, "", function(Yf) {
              return Yf;
            });
          } else Ye != null && (St(Ye) && (Ye.key && (!Oe || Oe.key !== Ye.key) && Hn(Ye.key), Ye = We(
            Ye,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            L + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (Ye.key && (!Oe || Oe.key !== Ye.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              It("" + Ye.key) + "/"
            ) : "") + Et
          )), C.push(Ye));
          return 1;
        }
        var Rt, wt, Ft = 0, ct = U === "" ? Rn : U + on;
        if (yn(h))
          for (var tl = 0; tl < h.length; tl++)
            Rt = h[tl], wt = ct + en(Rt, tl), Ft += Ll(Rt, C, L, wt, W);
        else {
          var Au = Bt(h);
          if (typeof Au == "function") {
            var qo = h;
            Au === qo.entries && (Ut || Qe("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ut = !0);
            for (var Xo = Au.call(qo), Ti, Ko = 0; !(Ti = Xo.next()).done; )
              Rt = Ti.value, wt = ct + en(Rt, Ko++), Ft += Ll(Rt, C, L, wt, W);
          } else if (de === "object") {
            var Zo = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (Zo === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : Zo) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Ft;
      }
      function hi(h, C, L) {
        if (h == null)
          return h;
        var U = [], W = 0;
        return Ll(h, U, "", "", function(de) {
          return C.call(L, de, W++);
        }), U;
      }
      function wu(h) {
        var C = 0;
        return hi(h, function() {
          C++;
        }), C;
      }
      function rc(h, C, L) {
        hi(h, function() {
          C.apply(this, arguments);
        }, L);
      }
      function zo(h) {
        return hi(h, function(C) {
          return C;
        }) || [];
      }
      function Uo(h) {
        if (!St(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function Gi(h) {
        var C = {
          $$typeof: _e,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        C.Provider = {
          $$typeof: He,
          _context: C
        };
        var L = !1, U = !1, W = !1;
        {
          var de = {
            $$typeof: _e,
            _context: C
          };
          Object.defineProperties(de, {
            Provider: {
              get: function() {
                return U || (U = !0, B("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(re) {
                C.Provider = re;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(re) {
                C._currentValue = re;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(re) {
                C._currentValue2 = re;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(re) {
                C._threadCount = re;
              }
            },
            Consumer: {
              get: function() {
                return L || (L = !0, B("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(re) {
                W || (Qe("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", re), W = !0);
              }
            }
          }), C.Consumer = de;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var mi = -1, Ia = 0, xu = 1, aa = 2;
      function ia(h) {
        if (h._status === mi) {
          var C = h._result, L = C();
          if (L.then(function(de) {
            if (h._status === Ia || h._status === mi) {
              var re = h;
              re._status = xu, re._result = de;
            }
          }, function(de) {
            if (h._status === Ia || h._status === mi) {
              var re = h;
              re._status = aa, re._result = de;
            }
          }), h._status === mi) {
            var U = h;
            U._status = Ia, U._result = L;
          }
        }
        if (h._status === xu) {
          var W = h._result;
          return W === void 0 && B(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, W), "default" in W || B(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, W), W.default;
        } else
          throw h._result;
      }
      function Ma(h) {
        var C = {
          // We use these fields to store the result.
          _status: mi,
          _result: h
        }, L = {
          $$typeof: Ce,
          _payload: C,
          _init: ia
        };
        {
          var U, W;
          Object.defineProperties(L, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return U;
              },
              set: function(de) {
                B("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), U = de, Object.defineProperty(L, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return W;
              },
              set: function(de) {
                B("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), W = de, Object.defineProperty(L, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return L;
      }
      function Ml(h) {
        h != null && h.$$typeof === ee ? B("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? B("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && B("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && B("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: qe,
          render: h
        };
        {
          var L;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return L;
            },
            set: function(U) {
              L = U, !h.name && !h.displayName && (h.displayName = U);
            }
          });
        }
        return C;
      }
      var _u;
      _u = Symbol.for("react.module.reference");
      function bu(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === ut || h === Yt || ot || h === E || h === ue || h === je || Ie || h === rt || Pt || ft || Jt || typeof h == "object" && h !== null && (h.$$typeof === Ce || h.$$typeof === ee || h.$$typeof === He || h.$$typeof === _e || h.$$typeof === qe || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === _u || h.getModuleId !== void 0));
      }
      function Ao(h, C) {
        bu(h) || B("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var L = {
          $$typeof: ee,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var U;
          Object.defineProperty(L, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return U;
            },
            set: function(W) {
              U = W, !h.name && !h.displayName && (h.displayName = W);
            }
          });
        }
        return L;
      }
      function Dt() {
        var h = Me.current;
        return h === null && B(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function Nl(h) {
        var C = Dt();
        if (h._context !== void 0) {
          var L = h._context;
          L.Consumer === h ? B("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : L.Provider === h && B("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function zl(h) {
        var C = Dt();
        return C.useState(h);
      }
      function Ul(h, C, L) {
        var U = Dt();
        return U.useReducer(h, C, L);
      }
      function On(h) {
        var C = Dt();
        return C.useRef(h);
      }
      function ac(h, C) {
        var L = Dt();
        return L.useEffect(h, C);
      }
      function ic(h, C) {
        var L = Dt();
        return L.useInsertionEffect(h, C);
      }
      function Fo(h, C) {
        var L = Dt();
        return L.useLayoutEffect(h, C);
      }
      function Pf(h, C) {
        var L = Dt();
        return L.useCallback(h, C);
      }
      function $f(h, C) {
        var L = Dt();
        return L.useMemo(h, C);
      }
      function Qt(h, C, L) {
        var U = Dt();
        return U.useImperativeHandle(h, C, L);
      }
      function lc(h, C) {
        {
          var L = Dt();
          return L.useDebugValue(h, C);
        }
      }
      function Ho() {
        var h = Dt();
        return h.useTransition();
      }
      function Qa(h) {
        var C = Dt();
        return C.useDeferredValue(h);
      }
      function $e() {
        var h = Dt();
        return h.useId();
      }
      function Al(h, C, L) {
        var U = Dt();
        return U.useSyncExternalStore(h, C, L);
      }
      var yi = 0, qi, Cr, jo, ir, Vo, Bo, Po;
      function Fl() {
      }
      Fl.__reactDisabledLog = !0;
      function Du() {
        {
          if (yi === 0) {
            qi = console.log, Cr = console.info, jo = console.warn, ir = console.error, Vo = console.group, Bo = console.groupCollapsed, Po = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: Fl,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          yi++;
        }
      }
      function gi() {
        {
          if (yi--, yi === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: Ne({}, h, {
                value: qi
              }),
              info: Ne({}, h, {
                value: Cr
              }),
              warn: Ne({}, h, {
                value: jo
              }),
              error: Ne({}, h, {
                value: ir
              }),
              group: Ne({}, h, {
                value: Vo
              }),
              groupCollapsed: Ne({}, h, {
                value: Bo
              }),
              groupEnd: Ne({}, h, {
                value: Po
              })
            });
          }
          yi < 0 && B("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Wa = _t.ReactCurrentDispatcher, la;
      function Xi(h, C, L) {
        {
          if (la === void 0)
            try {
              throw Error();
            } catch (W) {
              var U = W.stack.trim().match(/\n( *(at )?)/);
              la = U && U[1] || "";
            }
          return `
` + la + h;
        }
      }
      var Ga = !1, Hl;
      {
        var jl = typeof WeakMap == "function" ? WeakMap : Map;
        Hl = new jl();
      }
      function Ki(h, C) {
        if (!h || Ga)
          return "";
        {
          var L = Hl.get(h);
          if (L !== void 0)
            return L;
        }
        var U;
        Ga = !0;
        var W = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var de;
        de = Wa.current, Wa.current = null, Du();
        try {
          if (C) {
            var re = function() {
              throw Error();
            };
            if (Object.defineProperty(re.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(re, []);
              } catch (ct) {
                U = ct;
              }
              Reflect.construct(h, [], re);
            } else {
              try {
                re.call();
              } catch (ct) {
                U = ct;
              }
              h.call(re.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (ct) {
              U = ct;
            }
            h();
          }
        } catch (ct) {
          if (ct && U && typeof ct.stack == "string") {
            for (var Oe = ct.stack.split(`
`), Ye = U.stack.split(`
`), Et = Oe.length - 1, Tt = Ye.length - 1; Et >= 1 && Tt >= 0 && Oe[Et] !== Ye[Tt]; )
              Tt--;
            for (; Et >= 1 && Tt >= 0; Et--, Tt--)
              if (Oe[Et] !== Ye[Tt]) {
                if (Et !== 1 || Tt !== 1)
                  do
                    if (Et--, Tt--, Tt < 0 || Oe[Et] !== Ye[Tt]) {
                      var Rt = `
` + Oe[Et].replace(" at new ", " at ");
                      return h.displayName && Rt.includes("<anonymous>") && (Rt = Rt.replace("<anonymous>", h.displayName)), typeof h == "function" && Hl.set(h, Rt), Rt;
                    }
                  while (Et >= 1 && Tt >= 0);
                break;
              }
          }
        } finally {
          Ga = !1, Wa.current = de, gi(), Error.prepareStackTrace = W;
        }
        var wt = h ? h.displayName || h.name : "", Ft = wt ? Xi(wt) : "";
        return typeof h == "function" && Hl.set(h, Ft), Ft;
      }
      function $o(h, C, L) {
        return Ki(h, !1);
      }
      function Yo(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function tt(h, C, L) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return Ki(h, Yo(h));
        if (typeof h == "string")
          return Xi(h);
        switch (h) {
          case ue:
            return Xi("Suspense");
          case je:
            return Xi("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case qe:
              return $o(h.render);
            case ee:
              return tt(h.type, C, L);
            case Ce: {
              var U = h, W = U._payload, de = U._init;
              try {
                return tt(de(W), C, L);
              } catch {
              }
            }
          }
        return "";
      }
      var Io = {}, ku = _t.ReactDebugCurrentFrame;
      function Zi(h) {
        if (h) {
          var C = h._owner, L = tt(h.type, h._source, C ? C.type : null);
          ku.setExtraStackFrame(L);
        } else
          ku.setExtraStackFrame(null);
      }
      function Qo(h, C, L, U, W) {
        {
          var de = Function.call.bind(ka);
          for (var re in h)
            if (de(h, re)) {
              var Oe = void 0;
              try {
                if (typeof h[re] != "function") {
                  var Ye = Error((U || "React class") + ": " + L + " type `" + re + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[re] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Ye.name = "Invariant Violation", Ye;
                }
                Oe = h[re](C, re, U, L, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Et) {
                Oe = Et;
              }
              Oe && !(Oe instanceof Error) && (Zi(W), B("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", U || "React class", L, re, typeof Oe), Zi(null)), Oe instanceof Error && !(Oe.message in Io) && (Io[Oe.message] = !0, Zi(W), B("Failed %s type: %s", L, Oe.message), Zi(null));
            }
        }
      }
      function st(h) {
        if (h) {
          var C = h._owner, L = tt(h.type, h._source, C ? C.type : null);
          Tn(L);
        } else
          Tn(null);
      }
      var Ou;
      Ou = !1;
      function Vl() {
        if (Ze.current) {
          var h = jn(Ze.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function Ue(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), L = h.lineNumber;
          return `

Check your code at ` + C + ":" + L + ".";
        }
        return "";
      }
      function Na(h) {
        return h != null ? Ue(h.__source) : "";
      }
      var Wt = {};
      function Tr(h) {
        var C = Vl();
        if (!C) {
          var L = typeof h == "string" ? h : h.displayName || h.name;
          L && (C = `

Check the top-level render call using <` + L + ">.");
        }
        return C;
      }
      function ua(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var L = Tr(C);
          if (!Wt[L]) {
            Wt[L] = !0;
            var U = "";
            h && h._owner && h._owner !== Ze.current && (U = " It was passed a child from " + jn(h._owner.type) + "."), st(h), B('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', L, U), st(null);
          }
        }
      }
      function Ji(h, C) {
        if (typeof h == "object") {
          if (yn(h))
            for (var L = 0; L < h.length; L++) {
              var U = h[L];
              St(U) && ua(U, C);
            }
          else if (St(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var W = Bt(h);
            if (typeof W == "function" && W !== h.entries)
              for (var de = W.call(h), re; !(re = de.next()).done; )
                St(re.value) && ua(re.value, C);
          }
        }
      }
      function At(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var L;
          if (typeof C == "function")
            L = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === qe || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === ee))
            L = C.propTypes;
          else
            return;
          if (L) {
            var U = jn(C);
            Qo(L, h.props, "prop", U, h);
          } else if (C.PropTypes !== void 0 && !Ou) {
            Ou = !0;
            var W = jn(C);
            B("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", W || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && B("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Gt(h) {
        {
          for (var C = Object.keys(h.props), L = 0; L < C.length; L++) {
            var U = C[L];
            if (U !== "children" && U !== "key") {
              st(h), B("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", U), st(null);
              break;
            }
          }
          h.ref !== null && (st(h), B("Invalid attribute `ref` supplied to `React.Fragment`."), st(null));
        }
      }
      function Wo(h, C, L) {
        var U = bu(h);
        if (!U) {
          var W = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (W += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var de = Na(C);
          de ? W += de : W += Vl();
          var re;
          h === null ? re = "null" : yn(h) ? re = "array" : h !== void 0 && h.$$typeof === xt ? (re = "<" + (jn(h.type) || "Unknown") + " />", W = " Did you accidentally export a JSX literal instead of a component?") : re = typeof h, B("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", re, W);
        }
        var Oe = Te.apply(this, arguments);
        if (Oe == null)
          return Oe;
        if (U)
          for (var Ye = 2; Ye < arguments.length; Ye++)
            Ji(arguments[Ye], h);
        return h === ut ? Gt(Oe) : At(Oe), Oe;
      }
      var Vn = !1;
      function Rr(h) {
        var C = Wo.bind(null, h);
        return C.type = h, Vn || (Vn = !0, Qe("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return Qe("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function za(h, C, L) {
        for (var U = bt.apply(this, arguments), W = 2; W < arguments.length; W++)
          Ji(arguments[W], U.type);
        return At(U), U;
      }
      function Lu(h, C) {
        var L = gt.transition;
        gt.transition = {};
        var U = gt.transition;
        gt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (gt.transition = L, L === null && U._updatedFibers) {
            var W = U._updatedFibers.size;
            W > 10 && Qe("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), U._updatedFibers.clear();
          }
        }
      }
      var Bl = !1, Pl = null;
      function el(h) {
        if (Pl === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), L = X && X[C];
            Pl = L.call(X, "timers").setImmediate;
          } catch {
            Pl = function(W) {
              Bl === !1 && (Bl = !0, typeof MessageChannel > "u" && B("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var de = new MessageChannel();
              de.port1.onmessage = W, de.port2.postMessage(void 0);
            };
          }
        return Pl(h);
      }
      var oa = 0, Si = !1;
      function Mu(h) {
        {
          var C = oa;
          oa++, Ee.current === null && (Ee.current = []);
          var L = Ee.isBatchingLegacy, U;
          try {
            if (Ee.isBatchingLegacy = !0, U = h(), !L && Ee.didScheduleLegacyUpdate) {
              var W = Ee.current;
              W !== null && (Ee.didScheduleLegacyUpdate = !1, Ci(W));
            }
          } catch (wt) {
            throw Ei(C), wt;
          } finally {
            Ee.isBatchingLegacy = L;
          }
          if (U !== null && typeof U == "object" && typeof U.then == "function") {
            var de = U, re = !1, Oe = {
              then: function(wt, Ft) {
                re = !0, de.then(function(ct) {
                  Ei(C), oa === 0 ? Nu(ct, wt, Ft) : wt(ct);
                }, function(ct) {
                  Ei(C), Ft(ct);
                });
              }
            };
            return !Si && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              re || (Si = !0, B("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Oe;
          } else {
            var Ye = U;
            if (Ei(C), oa === 0) {
              var Et = Ee.current;
              Et !== null && (Ci(Et), Ee.current = null);
              var Tt = {
                then: function(wt, Ft) {
                  Ee.current === null ? (Ee.current = [], Nu(Ye, wt, Ft)) : wt(Ye);
                }
              };
              return Tt;
            } else {
              var Rt = {
                then: function(wt, Ft) {
                  wt(Ye);
                }
              };
              return Rt;
            }
          }
        }
      }
      function Ei(h) {
        h !== oa - 1 && B("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), oa = h;
      }
      function Nu(h, C, L) {
        {
          var U = Ee.current;
          if (U !== null)
            try {
              Ci(U), el(function() {
                U.length === 0 ? (Ee.current = null, C(h)) : Nu(h, C, L);
              });
            } catch (W) {
              L(W);
            }
          else
            C(h);
        }
      }
      var qa = !1;
      function Ci(h) {
        if (!qa) {
          qa = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var L = h[C];
              do
                L = L(!0);
              while (L !== null);
            }
            h.length = 0;
          } catch (U) {
            throw h = h.slice(C + 1), U;
          } finally {
            qa = !1;
          }
        }
      }
      var zu = Wo, Go = za, Ua = Rr, Uu = {
        map: hi,
        forEach: rc,
        count: wu,
        toArray: zo,
        only: Uo
      };
      le.Children = Uu, le.Component = Je, le.Fragment = ut, le.Profiler = Yt, le.PureComponent = Vr, le.StrictMode = E, le.Suspense = ue, le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _t, le.cloneElement = Go, le.createContext = Gi, le.createElement = zu, le.createFactory = Ua, le.createRef = ta, le.forwardRef = Ml, le.isValidElement = St, le.lazy = Ma, le.memo = Ao, le.startTransition = Lu, le.unstable_act = Mu, le.useCallback = Pf, le.useContext = Nl, le.useDebugValue = lc, le.useDeferredValue = Qa, le.useEffect = ac, le.useId = $e, le.useImperativeHandle = Qt, le.useInsertionEffect = ic, le.useLayoutEffect = Fo, le.useMemo = $f, le.useReducer = Ul, le.useRef = On, le.useState = zl, le.useSyncExternalStore = Al, le.useTransition = Ho, le.version = nt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Bp, Bp.exports)), Bp.exports;
}
var qb = {};
qb.NODE_ENV === "production" ? s0.exports = Wb() : s0.exports = Gb();
var zm = s0.exports;
const eT = /* @__PURE__ */ J1(zm), aD = /* @__PURE__ */ Qb({
  __proto__: null,
  default: eT
}, [zm]);
var Lm = { exports: {} }, l0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var W1;
function Xb() {
  return W1 || (W1 = 1, function(X) {
    function le(B, pe) {
      var T = B.length;
      B.push(pe);
      e: for (; 0 < T; ) {
        var P = T - 1 >>> 1, ve = B[P];
        if (0 < xt(ve, pe)) B[P] = pe, B[T] = ve, T = P;
        else break e;
      }
    }
    function A(B) {
      return B.length === 0 ? null : B[0];
    }
    function nt(B) {
      if (B.length === 0) return null;
      var pe = B[0], T = B.pop();
      if (T !== pe) {
        B[0] = T;
        e: for (var P = 0, ve = B.length, Ne = ve >>> 1; P < Ne; ) {
          var ze = 2 * (P + 1) - 1, Je = B[ze], Ge = ze + 1, dt = B[Ge];
          if (0 > xt(Je, T)) Ge < ve && 0 > xt(dt, Je) ? (B[P] = dt, B[Ge] = T, P = Ge) : (B[P] = Je, B[ze] = T, P = ze);
          else if (Ge < ve && 0 > xt(dt, T)) B[P] = dt, B[Ge] = T, P = Ge;
          else break e;
        }
      }
      return pe;
    }
    function xt(B, pe) {
      var T = B.sortIndex - pe.sortIndex;
      return T !== 0 ? T : B.id - pe.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var Zt = performance;
      X.unstable_now = function() {
        return Zt.now();
      };
    } else {
      var ut = Date, E = ut.now();
      X.unstable_now = function() {
        return ut.now() - E;
      };
    }
    var Yt = [], He = [], _e = 1, qe = null, ue = 3, je = !1, ee = !1, Ce = !1, rt = typeof setTimeout == "function" ? setTimeout : null, An = typeof clearTimeout == "function" ? clearTimeout : null, Fn = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Bt(B) {
      for (var pe = A(He); pe !== null; ) {
        if (pe.callback === null) nt(He);
        else if (pe.startTime <= B) nt(He), pe.sortIndex = pe.expirationTime, le(Yt, pe);
        else break;
        pe = A(He);
      }
    }
    function Me(B) {
      if (Ce = !1, Bt(B), !ee) if (A(Yt) !== null) ee = !0, _t(gt);
      else {
        var pe = A(He);
        pe !== null && Qe(Me, pe.startTime - B);
      }
    }
    function gt(B, pe) {
      ee = !1, Ce && (Ce = !1, An(Ve), Ve = -1), je = !0;
      var T = ue;
      try {
        for (Bt(pe), qe = A(Yt); qe !== null && (!(qe.expirationTime > pe) || B && !Pt()); ) {
          var P = qe.callback;
          if (typeof P == "function") {
            qe.callback = null, ue = qe.priorityLevel;
            var ve = P(qe.expirationTime <= pe);
            pe = X.unstable_now(), typeof ve == "function" ? qe.callback = ve : qe === A(Yt) && nt(Yt), Bt(pe);
          } else nt(Yt);
          qe = A(Yt);
        }
        if (qe !== null) var Ne = !0;
        else {
          var ze = A(He);
          ze !== null && Qe(Me, ze.startTime - pe), Ne = !1;
        }
        return Ne;
      } finally {
        qe = null, ue = T, je = !1;
      }
    }
    var Ee = !1, Ze = null, Ve = -1, Cn = 5, Tn = -1;
    function Pt() {
      return !(X.unstable_now() - Tn < Cn);
    }
    function ft() {
      if (Ze !== null) {
        var B = X.unstable_now();
        Tn = B;
        var pe = !0;
        try {
          pe = Ze(!0, B);
        } finally {
          pe ? Jt() : (Ee = !1, Ze = null);
        }
      } else Ee = !1;
    }
    var Jt;
    if (typeof Fn == "function") Jt = function() {
      Fn(ft);
    };
    else if (typeof MessageChannel < "u") {
      var Ie = new MessageChannel(), ot = Ie.port2;
      Ie.port1.onmessage = ft, Jt = function() {
        ot.postMessage(null);
      };
    } else Jt = function() {
      rt(ft, 0);
    };
    function _t(B) {
      Ze = B, Ee || (Ee = !0, Jt());
    }
    function Qe(B, pe) {
      Ve = rt(function() {
        B(X.unstable_now());
      }, pe);
    }
    X.unstable_IdlePriority = 5, X.unstable_ImmediatePriority = 1, X.unstable_LowPriority = 4, X.unstable_NormalPriority = 3, X.unstable_Profiling = null, X.unstable_UserBlockingPriority = 2, X.unstable_cancelCallback = function(B) {
      B.callback = null;
    }, X.unstable_continueExecution = function() {
      ee || je || (ee = !0, _t(gt));
    }, X.unstable_forceFrameRate = function(B) {
      0 > B || 125 < B ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Cn = 0 < B ? Math.floor(1e3 / B) : 5;
    }, X.unstable_getCurrentPriorityLevel = function() {
      return ue;
    }, X.unstable_getFirstCallbackNode = function() {
      return A(Yt);
    }, X.unstable_next = function(B) {
      switch (ue) {
        case 1:
        case 2:
        case 3:
          var pe = 3;
          break;
        default:
          pe = ue;
      }
      var T = ue;
      ue = pe;
      try {
        return B();
      } finally {
        ue = T;
      }
    }, X.unstable_pauseExecution = function() {
    }, X.unstable_requestPaint = function() {
    }, X.unstable_runWithPriority = function(B, pe) {
      switch (B) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          B = 3;
      }
      var T = ue;
      ue = B;
      try {
        return pe();
      } finally {
        ue = T;
      }
    }, X.unstable_scheduleCallback = function(B, pe, T) {
      var P = X.unstable_now();
      switch (typeof T == "object" && T !== null ? (T = T.delay, T = typeof T == "number" && 0 < T ? P + T : P) : T = P, B) {
        case 1:
          var ve = -1;
          break;
        case 2:
          ve = 250;
          break;
        case 5:
          ve = 1073741823;
          break;
        case 4:
          ve = 1e4;
          break;
        default:
          ve = 5e3;
      }
      return ve = T + ve, B = { id: _e++, callback: pe, priorityLevel: B, startTime: T, expirationTime: ve, sortIndex: -1 }, T > P ? (B.sortIndex = T, le(He, B), A(Yt) === null && B === A(He) && (Ce ? (An(Ve), Ve = -1) : Ce = !0, Qe(Me, T - P))) : (B.sortIndex = ve, le(Yt, B), ee || je || (ee = !0, _t(gt))), B;
    }, X.unstable_shouldYield = Pt, X.unstable_wrapCallback = function(B) {
      var pe = ue;
      return function() {
        var T = ue;
        ue = pe;
        try {
          return B.apply(this, arguments);
        } finally {
          ue = T;
        }
      };
    };
  }(l0)), l0;
}
var u0 = {}, G1;
function Kb() {
  return G1 || (G1 = 1, function(X) {
    var le = {};
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    le.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var A = !1, nt = !1, xt = 5;
      function Zt(Z, Te) {
        var We = Z.length;
        Z.push(Te), Yt(Z, Te, We);
      }
      function ut(Z) {
        return Z.length === 0 ? null : Z[0];
      }
      function E(Z) {
        if (Z.length === 0)
          return null;
        var Te = Z[0], We = Z.pop();
        return We !== Te && (Z[0] = We, He(Z, We, 0)), Te;
      }
      function Yt(Z, Te, We) {
        for (var bt = We; bt > 0; ) {
          var St = bt - 1 >>> 1, Rn = Z[St];
          if (_e(Rn, Te) > 0)
            Z[St] = Te, Z[bt] = Rn, bt = St;
          else
            return;
        }
      }
      function He(Z, Te, We) {
        for (var bt = We, St = Z.length, Rn = St >>> 1; bt < Rn; ) {
          var on = (bt + 1) * 2 - 1, Er = Z[on], Ut = on + 1, ar = Z[Ut];
          if (_e(Er, Te) < 0)
            Ut < St && _e(ar, Er) < 0 ? (Z[bt] = ar, Z[Ut] = Te, bt = Ut) : (Z[bt] = Er, Z[on] = Te, bt = on);
          else if (Ut < St && _e(ar, Te) < 0)
            Z[bt] = ar, Z[Ut] = Te, bt = Ut;
          else
            return;
        }
      }
      function _e(Z, Te) {
        var We = Z.sortIndex - Te.sortIndex;
        return We !== 0 ? We : Z.id - Te.id;
      }
      var qe = 1, ue = 2, je = 3, ee = 4, Ce = 5;
      function rt(Z, Te) {
      }
      var An = typeof performance == "object" && typeof performance.now == "function";
      if (An) {
        var Fn = performance;
        X.unstable_now = function() {
          return Fn.now();
        };
      } else {
        var Bt = Date, Me = Bt.now();
        X.unstable_now = function() {
          return Bt.now() - Me;
        };
      }
      var gt = 1073741823, Ee = -1, Ze = 250, Ve = 5e3, Cn = 1e4, Tn = gt, Pt = [], ft = [], Jt = 1, Ie = null, ot = je, _t = !1, Qe = !1, B = !1, pe = typeof setTimeout == "function" ? setTimeout : null, T = typeof clearTimeout == "function" ? clearTimeout : null, P = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function ve(Z) {
        for (var Te = ut(ft); Te !== null; ) {
          if (Te.callback === null)
            E(ft);
          else if (Te.startTime <= Z)
            E(ft), Te.sortIndex = Te.expirationTime, Zt(Pt, Te);
          else
            return;
          Te = ut(ft);
        }
      }
      function Ne(Z) {
        if (B = !1, ve(Z), !Qe)
          if (ut(Pt) !== null)
            Qe = !0, ra(ze);
          else {
            var Te = ut(ft);
            Te !== null && kn(Ne, Te.startTime - Z);
          }
      }
      function ze(Z, Te) {
        Qe = !1, B && (B = !1, La()), _t = !0;
        var We = ot;
        try {
          var bt;
          if (!nt) return Je(Z, Te);
        } finally {
          Ie = null, ot = We, _t = !1;
        }
      }
      function Je(Z, Te) {
        var We = Te;
        for (ve(We), Ie = ut(Pt); Ie !== null && !A && !(Ie.expirationTime > We && (!Z || Da())); ) {
          var bt = Ie.callback;
          if (typeof bt == "function") {
            Ie.callback = null, ot = Ie.priorityLevel;
            var St = Ie.expirationTime <= We, Rn = bt(St);
            We = X.unstable_now(), typeof Rn == "function" ? Ie.callback = Rn : Ie === ut(Pt) && E(Pt), ve(We);
          } else
            E(Pt);
          Ie = ut(Pt);
        }
        if (Ie !== null)
          return !0;
        var on = ut(ft);
        return on !== null && kn(Ne, on.startTime - We), !1;
      }
      function Ge(Z, Te) {
        switch (Z) {
          case qe:
          case ue:
          case je:
          case ee:
          case Ce:
            break;
          default:
            Z = je;
        }
        var We = ot;
        ot = Z;
        try {
          return Te();
        } finally {
          ot = We;
        }
      }
      function dt(Z) {
        var Te;
        switch (ot) {
          case qe:
          case ue:
          case je:
            Te = je;
            break;
          default:
            Te = ot;
            break;
        }
        var We = ot;
        ot = Te;
        try {
          return Z();
        } finally {
          ot = We;
        }
      }
      function et(Z) {
        var Te = ot;
        return function() {
          var We = ot;
          ot = Te;
          try {
            return Z.apply(this, arguments);
          } finally {
            ot = We;
          }
        };
      }
      function mn(Z, Te, We) {
        var bt = X.unstable_now(), St;
        if (typeof We == "object" && We !== null) {
          var Rn = We.delay;
          typeof Rn == "number" && Rn > 0 ? St = bt + Rn : St = bt;
        } else
          St = bt;
        var on;
        switch (Z) {
          case qe:
            on = Ee;
            break;
          case ue:
            on = Ze;
            break;
          case Ce:
            on = Tn;
            break;
          case ee:
            on = Cn;
            break;
          case je:
          default:
            on = Ve;
            break;
        }
        var Er = St + on, Ut = {
          id: Jt++,
          callback: Te,
          priorityLevel: Z,
          startTime: St,
          expirationTime: Er,
          sortIndex: -1
        };
        return St > bt ? (Ut.sortIndex = St, Zt(ft, Ut), ut(Pt) === null && Ut === ut(ft) && (B ? La() : B = !0, kn(Ne, St - bt))) : (Ut.sortIndex = Er, Zt(Pt, Ut), !Qe && !_t && (Qe = !0, ra(ze))), Ut;
      }
      function Vr() {
      }
      function ea() {
        !Qe && !_t && (Qe = !0, ra(ze));
      }
      function ta() {
        return ut(Pt);
      }
      function Br(Z) {
        Z.callback = null;
      }
      function yn() {
        return ot;
      }
      var nr = !1, yr = null, rr = -1, Hn = xt, na = -1;
      function Da() {
        var Z = X.unstable_now() - na;
        return !(Z < Hn);
      }
      function jn() {
      }
      function ka(Z) {
        if (Z < 0 || Z > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        Z > 0 ? Hn = Math.floor(1e3 / Z) : Hn = xt;
      }
      var vi = function() {
        if (yr !== null) {
          var Z = X.unstable_now();
          na = Z;
          var Te = !0, We = !0;
          try {
            We = yr(Te, Z);
          } finally {
            We ? gr() : (nr = !1, yr = null);
          }
        } else
          nr = !1;
      }, gr;
      if (typeof P == "function")
        gr = function() {
          P(vi);
        };
      else if (typeof MessageChannel < "u") {
        var Oa = new MessageChannel(), Sr = Oa.port2;
        Oa.port1.onmessage = vi, gr = function() {
          Sr.postMessage(null);
        };
      } else
        gr = function() {
          pe(vi, 0);
        };
      function ra(Z) {
        yr = Z, nr || (nr = !0, gr());
      }
      function kn(Z, Te) {
        rr = pe(function() {
          Z(X.unstable_now());
        }, Te);
      }
      function La() {
        T(rr), rr = -1;
      }
      var $a = jn, Ya = null;
      X.unstable_IdlePriority = Ce, X.unstable_ImmediatePriority = qe, X.unstable_LowPriority = ee, X.unstable_NormalPriority = je, X.unstable_Profiling = Ya, X.unstable_UserBlockingPriority = ue, X.unstable_cancelCallback = Br, X.unstable_continueExecution = ea, X.unstable_forceFrameRate = ka, X.unstable_getCurrentPriorityLevel = yn, X.unstable_getFirstCallbackNode = ta, X.unstable_next = dt, X.unstable_pauseExecution = Vr, X.unstable_requestPaint = $a, X.unstable_runWithPriority = Ge, X.unstable_scheduleCallback = mn, X.unstable_shouldYield = Da, X.unstable_wrapCallback = et, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(u0)), u0;
}
var q1;
function tT() {
  if (q1) return Lm.exports;
  q1 = 1;
  var X = {};
  return X.NODE_ENV === "production" ? Lm.exports = Xb() : Lm.exports = Kb(), Lm.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var X1;
function Zb() {
  if (X1) return _a;
  X1 = 1;
  var X = zm, le = tT();
  function A(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var nt = /* @__PURE__ */ new Set(), xt = {};
  function Zt(n, r) {
    ut(n, r), ut(n + "Capture", r);
  }
  function ut(n, r) {
    for (xt[n] = r, n = 0; n < r.length; n++) nt.add(r[n]);
  }
  var E = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Yt = Object.prototype.hasOwnProperty, He = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, _e = {}, qe = {};
  function ue(n) {
    return Yt.call(qe, n) ? !0 : Yt.call(_e, n) ? !1 : He.test(n) ? qe[n] = !0 : (_e[n] = !0, !1);
  }
  function je(n, r, l, o) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function ee(n, r, l, o) {
    if (r === null || typeof r > "u" || je(n, r, l, o)) return !0;
    if (o) return !1;
    if (l !== null) switch (l.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function Ce(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var rt = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    rt[n] = new Ce(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    rt[r] = new Ce(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    rt[n] = new Ce(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    rt[n] = new Ce(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    rt[n] = new Ce(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    rt[n] = new Ce(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    rt[n] = new Ce(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    rt[n] = new Ce(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    rt[n] = new Ce(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var An = /[\-:]([a-z])/g;
  function Fn(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      An,
      Fn
    );
    rt[r] = new Ce(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(An, Fn);
    rt[r] = new Ce(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(An, Fn);
    rt[r] = new Ce(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    rt[n] = new Ce(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), rt.xlinkHref = new Ce("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    rt[n] = new Ce(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Bt(n, r, l, o) {
    var c = rt.hasOwnProperty(r) ? rt[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (ee(r, l, c, o) && (l = null), o || c === null ? ue(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var Me = X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, gt = Symbol.for("react.element"), Ee = Symbol.for("react.portal"), Ze = Symbol.for("react.fragment"), Ve = Symbol.for("react.strict_mode"), Cn = Symbol.for("react.profiler"), Tn = Symbol.for("react.provider"), Pt = Symbol.for("react.context"), ft = Symbol.for("react.forward_ref"), Jt = Symbol.for("react.suspense"), Ie = Symbol.for("react.suspense_list"), ot = Symbol.for("react.memo"), _t = Symbol.for("react.lazy"), Qe = Symbol.for("react.offscreen"), B = Symbol.iterator;
  function pe(n) {
    return n === null || typeof n != "object" ? null : (n = B && n[B] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var T = Object.assign, P;
  function ve(n) {
    if (P === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      P = r && r[1] || "";
    }
    return `
` + P + n;
  }
  var Ne = !1;
  function ze(n, r) {
    if (!n || Ne) return "";
    Ne = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (z) {
          var o = z;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (z) {
          o = z;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (z) {
          o = z;
        }
        n();
      }
    } catch (z) {
      if (z && o && typeof z.stack == "string") {
        for (var c = z.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, S = d.length - 1; 1 <= m && 0 <= S && c[m] !== d[S]; ) S--;
        for (; 1 <= m && 0 <= S; m--, S--) if (c[m] !== d[S]) {
          if (m !== 1 || S !== 1)
            do
              if (m--, S--, 0 > S || c[m] !== d[S]) {
                var R = `
` + c[m].replace(" at new ", " at ");
                return n.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", n.displayName)), R;
              }
            while (1 <= m && 0 <= S);
          break;
        }
      }
    } finally {
      Ne = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? ve(n) : "";
  }
  function Je(n) {
    switch (n.tag) {
      case 5:
        return ve(n.type);
      case 16:
        return ve("Lazy");
      case 13:
        return ve("Suspense");
      case 19:
        return ve("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = ze(n.type, !1), n;
      case 11:
        return n = ze(n.type.render, !1), n;
      case 1:
        return n = ze(n.type, !0), n;
      default:
        return "";
    }
  }
  function Ge(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case Ze:
        return "Fragment";
      case Ee:
        return "Portal";
      case Cn:
        return "Profiler";
      case Ve:
        return "StrictMode";
      case Jt:
        return "Suspense";
      case Ie:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case Pt:
        return (n.displayName || "Context") + ".Consumer";
      case Tn:
        return (n._context.displayName || "Context") + ".Provider";
      case ft:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case ot:
        return r = n.displayName || null, r !== null ? r : Ge(n.type) || "Memo";
      case _t:
        r = n._payload, n = n._init;
        try {
          return Ge(n(r));
        } catch {
        }
    }
    return null;
  }
  function dt(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Ge(r);
      case 8:
        return r === Ve ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function et(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function mn(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Vr(n) {
    var r = mn(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function ea(n) {
    n._valueTracker || (n._valueTracker = Vr(n));
  }
  function ta(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = mn(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function Br(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function yn(n, r) {
    var l = r.checked;
    return T({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function nr(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = et(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function yr(n, r) {
    r = r.checked, r != null && Bt(n, "checked", r, !1);
  }
  function rr(n, r) {
    yr(n, r);
    var l = et(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? na(n, r.type, l) : r.hasOwnProperty("defaultValue") && na(n, r.type, et(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Hn(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function na(n, r, l) {
    (r !== "number" || Br(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Da = Array.isArray;
  function jn(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + et(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function ka(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(A(91));
    return T({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function vi(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(A(92));
        if (Da(l)) {
          if (1 < l.length) throw Error(A(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: et(l) };
  }
  function gr(n, r) {
    var l = et(r.value), o = et(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function Oa(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Sr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ra(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Sr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var kn, La = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (kn = kn || document.createElement("div"), kn.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = kn.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function $a(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Ya = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Z = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Ya).forEach(function(n) {
    Z.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Ya[r] = Ya[n];
    });
  });
  function Te(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || Ya.hasOwnProperty(n) && Ya[n] ? ("" + r).trim() : r + "px";
  }
  function We(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = Te(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var bt = T({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function St(n, r) {
    if (r) {
      if (bt[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(A(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(A(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(A(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(A(62));
    }
  }
  function Rn(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var on = null;
  function Er(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Ut = null, ar = null, It = null;
  function en(n) {
    if (n = Ka(n)) {
      if (typeof Ut != "function") throw Error(A(280));
      var r = n.stateNode;
      r && (r = yc(r), Ut(n.stateNode, n.type, r));
    }
  }
  function Ll(n) {
    ar ? It ? It.push(n) : It = [n] : ar = n;
  }
  function hi() {
    if (ar) {
      var n = ar, r = It;
      if (It = ar = null, en(n), r) for (n = 0; n < r.length; n++) en(r[n]);
    }
  }
  function wu(n, r) {
    return n(r);
  }
  function rc() {
  }
  var zo = !1;
  function Uo(n, r, l) {
    if (zo) return n(r, l);
    zo = !0;
    try {
      return wu(n, r, l);
    } finally {
      zo = !1, (ar !== null || It !== null) && (rc(), hi());
    }
  }
  function Gi(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = yc(l);
    if (o === null) return null;
    l = o[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(A(231, r, typeof l));
    return l;
  }
  var mi = !1;
  if (E) try {
    var Ia = {};
    Object.defineProperty(Ia, "passive", { get: function() {
      mi = !0;
    } }), window.addEventListener("test", Ia, Ia), window.removeEventListener("test", Ia, Ia);
  } catch {
    mi = !1;
  }
  function xu(n, r, l, o, c, d, m, S, R) {
    var z = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, z);
    } catch (Y) {
      this.onError(Y);
    }
  }
  var aa = !1, ia = null, Ma = !1, Ml = null, _u = { onError: function(n) {
    aa = !0, ia = n;
  } };
  function bu(n, r, l, o, c, d, m, S, R) {
    aa = !1, ia = null, xu.apply(_u, arguments);
  }
  function Ao(n, r, l, o, c, d, m, S, R) {
    if (bu.apply(this, arguments), aa) {
      if (aa) {
        var z = ia;
        aa = !1, ia = null;
      } else throw Error(A(198));
      Ma || (Ma = !0, Ml = z);
    }
  }
  function Dt(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function Nl(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function zl(n) {
    if (Dt(n) !== n) throw Error(A(188));
  }
  function Ul(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Dt(n), r === null) throw Error(A(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l) return zl(c), n;
          if (d === o) return zl(c), r;
          d = d.sibling;
        }
        throw Error(A(188));
      }
      if (l.return !== o.return) l = c, o = d;
      else {
        for (var m = !1, S = c.child; S; ) {
          if (S === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (S === o) {
            m = !0, o = c, l = d;
            break;
          }
          S = S.sibling;
        }
        if (!m) {
          for (S = d.child; S; ) {
            if (S === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (S === o) {
              m = !0, o = d, l = c;
              break;
            }
            S = S.sibling;
          }
          if (!m) throw Error(A(189));
        }
      }
      if (l.alternate !== o) throw Error(A(190));
    }
    if (l.tag !== 3) throw Error(A(188));
    return l.stateNode.current === l ? n : r;
  }
  function On(n) {
    return n = Ul(n), n !== null ? ac(n) : null;
  }
  function ac(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = ac(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var ic = le.unstable_scheduleCallback, Fo = le.unstable_cancelCallback, Pf = le.unstable_shouldYield, $f = le.unstable_requestPaint, Qt = le.unstable_now, lc = le.unstable_getCurrentPriorityLevel, Ho = le.unstable_ImmediatePriority, Qa = le.unstable_UserBlockingPriority, $e = le.unstable_NormalPriority, Al = le.unstable_LowPriority, yi = le.unstable_IdlePriority, qi = null, Cr = null;
  function jo(n) {
    if (Cr && typeof Cr.onCommitFiberRoot == "function") try {
      Cr.onCommitFiberRoot(qi, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var ir = Math.clz32 ? Math.clz32 : Po, Vo = Math.log, Bo = Math.LN2;
  function Po(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Vo(n) / Bo | 0) | 0;
  }
  var Fl = 64, Du = 4194304;
  function gi(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Wa(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var S = m & ~c;
      S !== 0 ? o = gi(S) : (d &= m, d !== 0 && (o = gi(d)));
    } else m = l & ~c, m !== 0 ? o = gi(m) : d !== 0 && (o = gi(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - ir(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function la(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Xi(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - ir(d), S = 1 << m, R = c[m];
      R === -1 ? (!(S & l) || S & o) && (c[m] = la(S, r)) : R <= r && (n.expiredLanes |= S), d &= ~S;
    }
  }
  function Ga(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Hl() {
    var n = Fl;
    return Fl <<= 1, !(Fl & 4194240) && (Fl = 64), n;
  }
  function jl(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function Ki(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - ir(r), n[r] = l;
  }
  function $o(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - ir(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Yo(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - ir(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var tt = 0;
  function Io(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var ku, Zi, Qo, st, Ou, Vl = !1, Ue = [], Na = null, Wt = null, Tr = null, ua = /* @__PURE__ */ new Map(), Ji = /* @__PURE__ */ new Map(), At = [], Gt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Wo(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Na = null;
        break;
      case "dragenter":
      case "dragleave":
        Wt = null;
        break;
      case "mouseover":
      case "mouseout":
        Tr = null;
        break;
      case "pointerover":
      case "pointerout":
        ua.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ji.delete(r.pointerId);
    }
  }
  function Vn(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = Ka(r), r !== null && Zi(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Rr(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Na = Vn(Na, n, r, l, o, c), !0;
      case "dragenter":
        return Wt = Vn(Wt, n, r, l, o, c), !0;
      case "mouseover":
        return Tr = Vn(Tr, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return ua.set(d, Vn(ua.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Ji.set(d, Vn(Ji.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function za(n) {
    var r = ki(n.target);
    if (r !== null) {
      var l = Dt(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Nl(l), r !== null) {
            n.blockedOn = r, Ou(n.priority, function() {
              Qo(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Lu(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = zu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        on = o, l.target.dispatchEvent(o), on = null;
      } else return r = Ka(l), r !== null && Zi(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function Bl(n, r, l) {
    Lu(n) && l.delete(r);
  }
  function Pl() {
    Vl = !1, Na !== null && Lu(Na) && (Na = null), Wt !== null && Lu(Wt) && (Wt = null), Tr !== null && Lu(Tr) && (Tr = null), ua.forEach(Bl), Ji.forEach(Bl);
  }
  function el(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Vl || (Vl = !0, le.unstable_scheduleCallback(le.unstable_NormalPriority, Pl)));
  }
  function oa(n) {
    function r(c) {
      return el(c, n);
    }
    if (0 < Ue.length) {
      el(Ue[0], n);
      for (var l = 1; l < Ue.length; l++) {
        var o = Ue[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Na !== null && el(Na, n), Wt !== null && el(Wt, n), Tr !== null && el(Tr, n), ua.forEach(r), Ji.forEach(r), l = 0; l < At.length; l++) o = At[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < At.length && (l = At[0], l.blockedOn === null); ) za(l), l.blockedOn === null && At.shift();
  }
  var Si = Me.ReactCurrentBatchConfig, Mu = !0;
  function Ei(n, r, l, o) {
    var c = tt, d = Si.transition;
    Si.transition = null;
    try {
      tt = 1, qa(n, r, l, o);
    } finally {
      tt = c, Si.transition = d;
    }
  }
  function Nu(n, r, l, o) {
    var c = tt, d = Si.transition;
    Si.transition = null;
    try {
      tt = 4, qa(n, r, l, o);
    } finally {
      tt = c, Si.transition = d;
    }
  }
  function qa(n, r, l, o) {
    if (Mu) {
      var c = zu(n, r, l, o);
      if (c === null) nd(n, r, o, Ci, l), Wo(n, o);
      else if (Rr(c, n, r, l, o)) o.stopPropagation();
      else if (Wo(n, o), r & 4 && -1 < Gt.indexOf(n)) {
        for (; c !== null; ) {
          var d = Ka(c);
          if (d !== null && ku(d), d = zu(n, r, l, o), d === null && nd(n, r, o, Ci, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else nd(n, r, o, null, l);
    }
  }
  var Ci = null;
  function zu(n, r, l, o) {
    if (Ci = null, n = Er(o), n = ki(n), n !== null) if (r = Dt(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = Nl(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return Ci = n, null;
  }
  function Go(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (lc()) {
          case Ho:
            return 1;
          case Qa:
            return 4;
          case $e:
          case Al:
            return 16;
          case yi:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ua = null, Uu = null, h = null;
  function C() {
    if (h) return h;
    var n, r = Uu, l = r.length, o, c = "value" in Ua ? Ua.value : Ua.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return h = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function L(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function U() {
    return !0;
  }
  function W() {
    return !1;
  }
  function de(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var S in n) n.hasOwnProperty(S) && (l = n[S], this[S] = l ? l(d) : d[S]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? U : W, this.isPropagationStopped = W, this;
    }
    return T(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = U);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = U);
    }, persist: function() {
    }, isPersistent: U }), r;
  }
  var re = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Oe = de(re), Ye = T({}, re, { view: 0, detail: 0 }), Et = de(Ye), Tt, Rt, wt, Ft = T({}, Ye, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: uc, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== wt && (wt && n.type === "mousemove" ? (Tt = n.screenX - wt.screenX, Rt = n.screenY - wt.screenY) : Rt = Tt = 0, wt = n), Tt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Rt;
  } }), ct = de(Ft), tl = T({}, Ft, { dataTransfer: 0 }), Au = de(tl), qo = T({}, Ye, { relatedTarget: 0 }), Xo = de(qo), Ti = T({}, re, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Ko = de(Ti), Zo = T({}, re, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Yf = de(Zo), Um = T({}, re, { data: 0 }), Pp = de(Um), $p = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, If = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Yp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Ip(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Yp[n]) ? !!r[n] : !1;
  }
  function uc() {
    return Ip;
  }
  var Am = T({}, Ye, { key: function(n) {
    if (n.key) {
      var r = $p[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = L(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? If[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: uc, charCode: function(n) {
    return n.type === "keypress" ? L(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? L(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Ri = de(Am), Fm = T({}, Ft, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), oc = de(Fm), Qf = T({}, Ye, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: uc }), Wf = de(Qf), Hm = T({}, re, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), sc = de(Hm), Qp = T({}, Ft, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), wr = de(Qp), wi = [9, 13, 27, 32], tn = E && "CompositionEvent" in window, Pr = null;
  E && "documentMode" in document && (Pr = document.documentMode);
  var Gf = E && "TextEvent" in window && !Pr, Jo = E && (!tn || Pr && 8 < Pr && 11 >= Pr), Wp = " ", Fu = !1;
  function Gp(n, r) {
    switch (n) {
      case "keyup":
        return wi.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function qp(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var nl = !1;
  function jm(n, r) {
    switch (n) {
      case "compositionend":
        return qp(r);
      case "keypress":
        return r.which !== 32 ? null : (Fu = !0, Wp);
      case "textInput":
        return n = r.data, n === Wp && Fu ? null : n;
      default:
        return null;
    }
  }
  function Vm(n, r) {
    if (nl) return n === "compositionend" || !tn && Gp(n, r) ? (n = C(), h = Uu = Ua = null, nl = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Jo && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Bm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function qf(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Bm[n.type] : r === "textarea";
  }
  function Xp(n, r, l, o) {
    Ll(o), r = hc(r, "onChange"), 0 < r.length && (l = new Oe("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var es = null, ts = null;
  function Kp(n) {
    pv(n, 0);
  }
  function xi(n) {
    var r = Bu(n);
    if (ta(r)) return n;
  }
  function Xf(n, r) {
    if (n === "change") return r;
  }
  var Kf = !1;
  if (E) {
    var cc;
    if (E) {
      var Zf = "oninput" in document;
      if (!Zf) {
        var Zp = document.createElement("div");
        Zp.setAttribute("oninput", "return;"), Zf = typeof Zp.oninput == "function";
      }
      cc = Zf;
    } else cc = !1;
    Kf = cc && (!document.documentMode || 9 < document.documentMode);
  }
  function Jp() {
    es && (es.detachEvent("onpropertychange", ev), ts = es = null);
  }
  function ev(n) {
    if (n.propertyName === "value" && xi(ts)) {
      var r = [];
      Xp(r, ts, n, Er(n)), Uo(Kp, r);
    }
  }
  function Pm(n, r, l) {
    n === "focusin" ? (Jp(), es = r, ts = l, es.attachEvent("onpropertychange", ev)) : n === "focusout" && Jp();
  }
  function $m(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return xi(ts);
  }
  function Ym(n, r) {
    if (n === "click") return xi(r);
  }
  function Im(n, r) {
    if (n === "input" || n === "change") return xi(r);
  }
  function tv(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Aa = typeof Object.is == "function" ? Object.is : tv;
  function Hu(n, r) {
    if (Aa(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!Yt.call(r, c) || !Aa(n[c], r[c])) return !1;
    }
    return !0;
  }
  function nv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function rv(n, r) {
    var l = nv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r) return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = nv(l);
    }
  }
  function av(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? av(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function iv() {
    for (var n = window, r = Br(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = Br(n.document);
    }
    return r;
  }
  function ns(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function $l(n) {
    var r = iv(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && av(l.ownerDocument.documentElement, l)) {
      if (o !== null && ns(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = rv(l, d);
          var m = rv(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var fc = E && "documentMode" in document && 11 >= document.documentMode, Yl = null, rl = null, rs = null, Jf = !1;
  function lv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Jf || Yl == null || Yl !== Br(o) || (o = Yl, "selectionStart" in o && ns(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), rs && Hu(rs, o) || (rs = o, o = hc(rl, "onSelect"), 0 < o.length && (r = new Oe("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = Yl)));
  }
  function dc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var ju = { animationend: dc("Animation", "AnimationEnd"), animationiteration: dc("Animation", "AnimationIteration"), animationstart: dc("Animation", "AnimationStart"), transitionend: dc("Transition", "TransitionEnd") }, pc = {}, uv = {};
  E && (uv = document.createElement("div").style, "AnimationEvent" in window || (delete ju.animationend.animation, delete ju.animationiteration.animation, delete ju.animationstart.animation), "TransitionEvent" in window || delete ju.transitionend.transition);
  function as(n) {
    if (pc[n]) return pc[n];
    if (!ju[n]) return n;
    var r = ju[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in uv) return pc[n] = r[l];
    return n;
  }
  var Zn = as("animationend"), ed = as("animationiteration"), ov = as("animationstart"), sv = as("transitionend"), cv = /* @__PURE__ */ new Map(), fv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function al(n, r) {
    cv.set(n, r), Zt(r, [n]);
  }
  for (var vc = 0; vc < fv.length; vc++) {
    var is = fv[vc], ls = is.toLowerCase(), Qm = is[0].toUpperCase() + is.slice(1);
    al(ls, "on" + Qm);
  }
  al(Zn, "onAnimationEnd"), al(ed, "onAnimationIteration"), al(ov, "onAnimationStart"), al("dblclick", "onDoubleClick"), al("focusin", "onFocus"), al("focusout", "onBlur"), al(sv, "onTransitionEnd"), ut("onMouseEnter", ["mouseout", "mouseover"]), ut("onMouseLeave", ["mouseout", "mouseover"]), ut("onPointerEnter", ["pointerout", "pointerover"]), ut("onPointerLeave", ["pointerout", "pointerover"]), Zt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Zt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Zt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Zt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Zt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Zt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var _i = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Wm = new Set("cancel close invalid load scroll toggle".split(" ").concat(_i));
  function dv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, Ao(o, r, void 0, n), n.currentTarget = null;
  }
  function pv(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var S = o[m], R = S.instance, z = S.currentTarget;
          if (S = S.listener, R !== d && c.isPropagationStopped()) break e;
          dv(c, S, z), d = R;
        }
        else for (m = 0; m < o.length; m++) {
          if (S = o[m], R = S.instance, z = S.currentTarget, S = S.listener, R !== d && c.isPropagationStopped()) break e;
          dv(c, S, z), d = R;
        }
      }
    }
    if (Ma) throw n = Ml, Ma = !1, Ml = null, n;
  }
  function Lt(n, r) {
    var l = r[cd];
    l === void 0 && (l = r[cd] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (td(r, n, 2, !1), l.add(o));
  }
  function us(n, r, l) {
    var o = 0;
    r && (o |= 4), td(l, n, o, r);
  }
  var bi = "_reactListening" + Math.random().toString(36).slice(2);
  function Xa(n) {
    if (!n[bi]) {
      n[bi] = !0, nt.forEach(function(l) {
        l !== "selectionchange" && (Wm.has(l) || us(l, !1, n), us(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[bi] || (r[bi] = !0, us("selectionchange", !1, r));
    }
  }
  function td(n, r, l, o) {
    switch (Go(r)) {
      case 1:
        var c = Ei;
        break;
      case 4:
        c = Nu;
        break;
      default:
        c = qa;
    }
    l = c.bind(null, r, l, n), c = void 0, !mi || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function nd(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null) e: for (; ; ) {
      if (o === null) return;
      var m = o.tag;
      if (m === 3 || m === 4) {
        var S = o.stateNode.containerInfo;
        if (S === c || S.nodeType === 8 && S.parentNode === c) break;
        if (m === 4) for (m = o.return; m !== null; ) {
          var R = m.tag;
          if ((R === 3 || R === 4) && (R = m.stateNode.containerInfo, R === c || R.nodeType === 8 && R.parentNode === c)) return;
          m = m.return;
        }
        for (; S !== null; ) {
          if (m = ki(S), m === null) return;
          if (R = m.tag, R === 5 || R === 6) {
            o = d = m;
            continue e;
          }
          S = S.parentNode;
        }
      }
      o = o.return;
    }
    Uo(function() {
      var z = d, Y = Er(l), I = [];
      e: {
        var $ = cv.get(n);
        if ($ !== void 0) {
          var te = Oe, se = n;
          switch (n) {
            case "keypress":
              if (L(l) === 0) break e;
            case "keydown":
            case "keyup":
              te = Ri;
              break;
            case "focusin":
              se = "focus", te = Xo;
              break;
            case "focusout":
              se = "blur", te = Xo;
              break;
            case "beforeblur":
            case "afterblur":
              te = Xo;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              te = ct;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              te = Au;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              te = Wf;
              break;
            case Zn:
            case ed:
            case ov:
              te = Ko;
              break;
            case sv:
              te = sc;
              break;
            case "scroll":
              te = Et;
              break;
            case "wheel":
              te = wr;
              break;
            case "copy":
            case "cut":
            case "paste":
              te = Yf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              te = oc;
          }
          var he = (r & 4) !== 0, vn = !he && n === "scroll", b = he ? $ !== null ? $ + "Capture" : null : $;
          he = [];
          for (var x = z, O; x !== null; ) {
            O = x;
            var G = O.stateNode;
            if (O.tag === 5 && G !== null && (O = G, b !== null && (G = Gi(x, b), G != null && he.push(Vu(x, G, O)))), vn) break;
            x = x.return;
          }
          0 < he.length && ($ = new te($, se, null, l, Y), I.push({ event: $, listeners: he }));
        }
      }
      if (!(r & 7)) {
        e: {
          if ($ = n === "mouseover" || n === "pointerover", te = n === "mouseout" || n === "pointerout", $ && l !== on && (se = l.relatedTarget || l.fromElement) && (ki(se) || se[Fa])) break e;
          if ((te || $) && ($ = Y.window === Y ? Y : ($ = Y.ownerDocument) ? $.defaultView || $.parentWindow : window, te ? (se = l.relatedTarget || l.toElement, te = z, se = se ? ki(se) : null, se !== null && (vn = Dt(se), se !== vn || se.tag !== 5 && se.tag !== 6) && (se = null)) : (te = null, se = z), te !== se)) {
            if (he = ct, G = "onMouseLeave", b = "onMouseEnter", x = "mouse", (n === "pointerout" || n === "pointerover") && (he = oc, G = "onPointerLeave", b = "onPointerEnter", x = "pointer"), vn = te == null ? $ : Bu(te), O = se == null ? $ : Bu(se), $ = new he(G, x + "leave", te, l, Y), $.target = vn, $.relatedTarget = O, G = null, ki(Y) === z && (he = new he(b, x + "enter", se, l, Y), he.target = O, he.relatedTarget = vn, G = he), vn = G, te && se) t: {
              for (he = te, b = se, x = 0, O = he; O; O = Il(O)) x++;
              for (O = 0, G = b; G; G = Il(G)) O++;
              for (; 0 < x - O; ) he = Il(he), x--;
              for (; 0 < O - x; ) b = Il(b), O--;
              for (; x--; ) {
                if (he === b || b !== null && he === b.alternate) break t;
                he = Il(he), b = Il(b);
              }
              he = null;
            }
            else he = null;
            te !== null && rd(I, $, te, he, !1), se !== null && vn !== null && rd(I, vn, se, he, !0);
          }
        }
        e: {
          if ($ = z ? Bu(z) : window, te = $.nodeName && $.nodeName.toLowerCase(), te === "select" || te === "input" && $.type === "file") var ye = Xf;
          else if (qf($)) if (Kf) ye = Im;
          else {
            ye = $m;
            var De = Pm;
          }
          else (te = $.nodeName) && te.toLowerCase() === "input" && ($.type === "checkbox" || $.type === "radio") && (ye = Ym);
          if (ye && (ye = ye(n, z))) {
            Xp(I, ye, l, Y);
            break e;
          }
          De && De(n, $, z), n === "focusout" && (De = $._wrapperState) && De.controlled && $.type === "number" && na($, "number", $.value);
        }
        switch (De = z ? Bu(z) : window, n) {
          case "focusin":
            (qf(De) || De.contentEditable === "true") && (Yl = De, rl = z, rs = null);
            break;
          case "focusout":
            rs = rl = Yl = null;
            break;
          case "mousedown":
            Jf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Jf = !1, lv(I, l, Y);
            break;
          case "selectionchange":
            if (fc) break;
          case "keydown":
          case "keyup":
            lv(I, l, Y);
        }
        var ce;
        if (tn) e: {
          switch (n) {
            case "compositionstart":
              var ke = "onCompositionStart";
              break e;
            case "compositionend":
              ke = "onCompositionEnd";
              break e;
            case "compositionupdate":
              ke = "onCompositionUpdate";
              break e;
          }
          ke = void 0;
        }
        else nl ? Gp(n, l) && (ke = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (ke = "onCompositionStart");
        ke && (Jo && l.locale !== "ko" && (nl || ke !== "onCompositionStart" ? ke === "onCompositionEnd" && nl && (ce = C()) : (Ua = Y, Uu = "value" in Ua ? Ua.value : Ua.textContent, nl = !0)), De = hc(z, ke), 0 < De.length && (ke = new Pp(ke, n, null, l, Y), I.push({ event: ke, listeners: De }), ce ? ke.data = ce : (ce = qp(l), ce !== null && (ke.data = ce)))), (ce = Gf ? jm(n, l) : Vm(n, l)) && (z = hc(z, "onBeforeInput"), 0 < z.length && (Y = new Pp("onBeforeInput", "beforeinput", null, l, Y), I.push({ event: Y, listeners: z }), Y.data = ce));
      }
      pv(I, r);
    });
  }
  function Vu(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function hc(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = Gi(n, l), d != null && o.unshift(Vu(n, d, c)), d = Gi(n, r), d != null && o.push(Vu(n, d, c))), n = n.return;
    }
    return o;
  }
  function Il(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function rd(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var S = l, R = S.alternate, z = S.stateNode;
      if (R !== null && R === o) break;
      S.tag === 5 && z !== null && (S = z, c ? (R = Gi(l, d), R != null && m.unshift(Vu(l, R, S))) : c || (R = Gi(l, d), R != null && m.push(Vu(l, R, S)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var vv = /\r\n?/g, ad = /\u0000|\uFFFD/g;
  function hv(n) {
    return (typeof n == "string" ? n : "" + n).replace(vv, `
`).replace(ad, "");
  }
  function os(n, r, l) {
    if (r = hv(r), hv(n) !== r && l) throw Error(A(425));
  }
  function mc() {
  }
  var id = null, ld = null;
  function Ql(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var ss = typeof setTimeout == "function" ? setTimeout : void 0, cs = typeof clearTimeout == "function" ? clearTimeout : void 0, ud = typeof Promise == "function" ? Promise : void 0, mv = typeof queueMicrotask == "function" ? queueMicrotask : typeof ud < "u" ? function(n) {
    return ud.resolve(null).then(n).catch(od);
  } : ss;
  function od(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function sd(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), oa(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    oa(r);
  }
  function $r(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function fs(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Di = Math.random().toString(36).slice(2), sa = "__reactFiber$" + Di, ds = "__reactProps$" + Di, Fa = "__reactContainer$" + Di, cd = "__reactEvents$" + Di, Gm = "__reactListeners$" + Di, qm = "__reactHandles$" + Di;
  function ki(n) {
    var r = n[sa];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Fa] || l[sa]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = fs(n); n !== null; ) {
          if (l = n[sa]) return l;
          n = fs(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function Ka(n) {
    return n = n[sa] || n[Fa], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Bu(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(A(33));
  }
  function yc(n) {
    return n[ds] || null;
  }
  var Re = [], Ha = -1;
  function Mt(n) {
    return { current: n };
  }
  function me(n) {
    0 > Ha || (n.current = Re[Ha], Re[Ha] = null, Ha--);
  }
  function vt(n, r) {
    Ha++, Re[Ha] = n.current, n.current = r;
  }
  var ca = {}, Ln = Mt(ca), Ae = Mt(!1), lr = ca;
  function Yr(n, r) {
    var l = n.type.contextTypes;
    if (!l) return ca;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function gn(n) {
    return n = n.childContextTypes, n != null;
  }
  function xr() {
    me(Ae), me(Ln);
  }
  function Za(n, r, l) {
    if (Ln.current !== ca) throw Error(A(168));
    vt(Ln, r), vt(Ae, l);
  }
  function il(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(A(108, dt(n) || "Unknown", c));
    return T({}, l, o);
  }
  function Wl(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || ca, lr = Ln.current, vt(Ln, n), vt(Ae, Ae.current), !0;
  }
  function yv(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(A(169));
    l ? (n = il(n, r, lr), o.__reactInternalMemoizedMergedChildContext = n, me(Ae), me(Ln), vt(Ln, n)) : me(Ae), vt(Ae, l);
  }
  var Oi = null, ll = !1, Bn = !1;
  function gc(n) {
    Oi === null ? Oi = [n] : Oi.push(n);
  }
  function gv(n) {
    ll = !0, gc(n);
  }
  function Ja() {
    if (!Bn && Oi !== null) {
      Bn = !0;
      var n = 0, r = tt;
      try {
        var l = Oi;
        for (tt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Oi = null, ll = !1;
      } catch (c) {
        throw Oi !== null && (Oi = Oi.slice(n + 1)), ic(Ho, Ja), c;
      } finally {
        tt = r, Bn = !1;
      }
    }
    return null;
  }
  var fa = [], ul = 0, da = null, Gl = 0, _r = [], br = 0, ja = null, Dr = 1, Pn = "";
  function ql(n, r) {
    fa[ul++] = Gl, fa[ul++] = da, da = n, Gl = r;
  }
  function ol(n, r, l) {
    _r[br++] = Dr, _r[br++] = Pn, _r[br++] = ja, ja = n;
    var o = Dr;
    n = Pn;
    var c = 32 - ir(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - ir(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, Dr = 1 << 32 - ir(r) + c | l << c | o, Pn = d + n;
    } else Dr = 1 << d | l << c | o, Pn = n;
  }
  function Sc(n) {
    n.return !== null && (ql(n, 1), ol(n, 1, 0));
  }
  function Ec(n) {
    for (; n === da; ) da = fa[--ul], fa[ul] = null, Gl = fa[--ul], fa[ul] = null;
    for (; n === ja; ) ja = _r[--br], _r[br] = null, Pn = _r[--br], _r[br] = null, Dr = _r[--br], _r[br] = null;
  }
  var Ir = null, Qr = null, Ht = !1, pa = null;
  function fd(n, r) {
    var l = Ea(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function dd(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Ir = n, Qr = $r(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Ir = n, Qr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = ja !== null ? { id: Dr, overflow: Pn } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Ea(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Ir = n, Qr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function pd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Cc(n) {
    if (Ht) {
      var r = Qr;
      if (r) {
        var l = r;
        if (!dd(n, r)) {
          if (pd(n)) throw Error(A(418));
          r = $r(l.nextSibling);
          var o = Ir;
          r && dd(n, r) ? fd(o, l) : (n.flags = n.flags & -4097 | 2, Ht = !1, Ir = n);
        }
      } else {
        if (pd(n)) throw Error(A(418));
        n.flags = n.flags & -4097 | 2, Ht = !1, Ir = n;
      }
    }
  }
  function vd(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Ir = n;
  }
  function Tc(n) {
    if (n !== Ir) return !1;
    if (!Ht) return vd(n), Ht = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Ql(n.type, n.memoizedProps)), r && (r = Qr)) {
      if (pd(n)) throw Sv(), Error(A(418));
      for (; r; ) fd(n, r), r = $r(r.nextSibling);
    }
    if (vd(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(A(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Qr = $r(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Qr = null;
      }
    } else Qr = Ir ? $r(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Sv() {
    for (var n = Qr; n; ) n = $r(n.nextSibling);
  }
  function Pu() {
    Qr = Ir = null, Ht = !1;
  }
  function Sn(n) {
    pa === null ? pa = [n] : pa.push(n);
  }
  var Xm = Me.ReactCurrentBatchConfig;
  function kr(n, r) {
    if (n && n.defaultProps) {
      r = T({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  var $u = Mt(null), ei = null, Yu = null, ps = null;
  function hd() {
    ps = Yu = ei = null;
  }
  function md(n) {
    var r = $u.current;
    me($u), n._currentValue = r;
  }
  function sl(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function sn(n, r) {
    ei = n, ps = Yu = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Mr = !0), n.firstContext = null);
  }
  function q(n) {
    var r = n._currentValue;
    if (ps !== n) if (n = { context: n, memoizedValue: r, next: null }, Yu === null) {
      if (ei === null) throw Error(A(308));
      Yu = n, ei.dependencies = { lanes: 0, firstContext: n };
    } else Yu = Yu.next = n;
    return r;
  }
  var Jn = null;
  function Wr(n) {
    Jn === null ? Jn = [n] : Jn.push(n);
  }
  function Ev(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, Wr(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Li(n, o);
  }
  function Li(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var cl = !1;
  function yd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Cv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Nt(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function fl(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, Xe & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Li(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, Wr(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Li(n, l);
  }
  function Rc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Yo(n, l);
    }
  }
  function Tv(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function vs(n, r, l, o) {
    var c = n.updateQueue;
    cl = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, S = c.shared.pending;
    if (S !== null) {
      c.shared.pending = null;
      var R = S, z = R.next;
      R.next = null, m === null ? d = z : m.next = z, m = R;
      var Y = n.alternate;
      Y !== null && (Y = Y.updateQueue, S = Y.lastBaseUpdate, S !== m && (S === null ? Y.firstBaseUpdate = z : S.next = z, Y.lastBaseUpdate = R));
    }
    if (d !== null) {
      var I = c.baseState;
      m = 0, Y = z = R = null, S = d;
      do {
        var $ = S.lane, te = S.eventTime;
        if ((o & $) === $) {
          Y !== null && (Y = Y.next = {
            eventTime: te,
            lane: 0,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null
          });
          e: {
            var se = n, he = S;
            switch ($ = r, te = l, he.tag) {
              case 1:
                if (se = he.payload, typeof se == "function") {
                  I = se.call(te, I, $);
                  break e;
                }
                I = se;
                break e;
              case 3:
                se.flags = se.flags & -65537 | 128;
              case 0:
                if (se = he.payload, $ = typeof se == "function" ? se.call(te, I, $) : se, $ == null) break e;
                I = T({}, I, $);
                break e;
              case 2:
                cl = !0;
            }
          }
          S.callback !== null && S.lane !== 0 && (n.flags |= 64, $ = c.effects, $ === null ? c.effects = [S] : $.push(S));
        } else te = { eventTime: te, lane: $, tag: S.tag, payload: S.payload, callback: S.callback, next: null }, Y === null ? (z = Y = te, R = I) : Y = Y.next = te, m |= $;
        if (S = S.next, S === null) {
          if (S = c.shared.pending, S === null) break;
          $ = S, S = $.next, $.next = null, c.lastBaseUpdate = $, c.shared.pending = null;
        }
      } while (!0);
      if (Y === null && (R = I), c.baseState = R, c.firstBaseUpdate = z, c.lastBaseUpdate = Y, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      uu |= m, n.lanes = m, n.memoizedState = I;
    }
  }
  function Iu(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(A(191, c));
        c.call(o);
      }
    }
  }
  var Xl = new X.Component().refs;
  function gd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : T({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var wc = { isMounted: function(n) {
    return (n = n._reactInternals) ? Dt(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = zn(), c = Ui(n), d = Nt(o, c);
    d.payload = r, l != null && (d.callback = l), r = fl(n, d, c), r !== null && (Xt(r, n, c, o), Rc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = zn(), c = Ui(n), d = Nt(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = fl(n, d, c), r !== null && (Xt(r, n, c, o), Rc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = zn(), o = Ui(n), c = Nt(l, o);
    c.tag = 2, r != null && (c.callback = r), r = fl(n, c, o), r !== null && (Xt(r, n, o, l), Rc(r, n, o));
  } };
  function Rv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !Hu(l, o) || !Hu(c, d) : !0;
  }
  function wv(n, r, l) {
    var o = !1, c = ca, d = r.contextType;
    return typeof d == "object" && d !== null ? d = q(d) : (c = gn(r) ? lr : Ln.current, o = r.contextTypes, d = (o = o != null) ? Yr(n, c) : ca), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = wc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function xv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && wc.enqueueReplaceState(r, r.state, null);
  }
  function Sd(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = Xl, yd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = q(d) : (d = gn(r) ? lr : Ln.current, c.context = Yr(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (gd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && wc.enqueueReplaceState(c, c.state, null), vs(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Qu(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(A(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(A(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var S = c.refs;
          S === Xl && (S = c.refs = {}), m === null ? delete S[d] : S[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(A(284));
      if (!l._owner) throw Error(A(290, n));
    }
    return n;
  }
  function hs(n, r) {
    throw n = Object.prototype.toString.call(r), Error(A(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function _v(n) {
    var r = n._init;
    return r(n._payload);
  }
  function bv(n) {
    function r(b, x) {
      if (n) {
        var O = b.deletions;
        O === null ? (b.deletions = [x], b.flags |= 16) : O.push(x);
      }
    }
    function l(b, x) {
      if (!n) return null;
      for (; x !== null; ) r(b, x), x = x.sibling;
      return null;
    }
    function o(b, x) {
      for (b = /* @__PURE__ */ new Map(); x !== null; ) x.key !== null ? b.set(x.key, x) : b.set(x.index, x), x = x.sibling;
      return b;
    }
    function c(b, x) {
      return b = Sl(b, x), b.index = 0, b.sibling = null, b;
    }
    function d(b, x, O) {
      return b.index = O, n ? (O = b.alternate, O !== null ? (O = O.index, O < x ? (b.flags |= 2, x) : O) : (b.flags |= 2, x)) : (b.flags |= 1048576, x);
    }
    function m(b) {
      return n && b.alternate === null && (b.flags |= 2), b;
    }
    function S(b, x, O, G) {
      return x === null || x.tag !== 6 ? (x = lf(O, b.mode, G), x.return = b, x) : (x = c(x, O), x.return = b, x);
    }
    function R(b, x, O, G) {
      var ye = O.type;
      return ye === Ze ? Y(b, x, O.props.children, G, O.key) : x !== null && (x.elementType === ye || typeof ye == "object" && ye !== null && ye.$$typeof === _t && _v(ye) === x.type) ? (G = c(x, O.props), G.ref = Qu(b, x, O), G.return = b, G) : (G = rf(O.type, O.key, O.props, null, b.mode, G), G.ref = Qu(b, x, O), G.return = b, G);
    }
    function z(b, x, O, G) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== O.containerInfo || x.stateNode.implementation !== O.implementation ? (x = zs(O, b.mode, G), x.return = b, x) : (x = c(x, O.children || []), x.return = b, x);
    }
    function Y(b, x, O, G, ye) {
      return x === null || x.tag !== 7 ? (x = fu(O, b.mode, G, ye), x.return = b, x) : (x = c(x, O), x.return = b, x);
    }
    function I(b, x, O) {
      if (typeof x == "string" && x !== "" || typeof x == "number") return x = lf("" + x, b.mode, O), x.return = b, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case gt:
            return O = rf(x.type, x.key, x.props, null, b.mode, O), O.ref = Qu(b, null, x), O.return = b, O;
          case Ee:
            return x = zs(x, b.mode, O), x.return = b, x;
          case _t:
            var G = x._init;
            return I(b, G(x._payload), O);
        }
        if (Da(x) || pe(x)) return x = fu(x, b.mode, O, null), x.return = b, x;
        hs(b, x);
      }
      return null;
    }
    function $(b, x, O, G) {
      var ye = x !== null ? x.key : null;
      if (typeof O == "string" && O !== "" || typeof O == "number") return ye !== null ? null : S(b, x, "" + O, G);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case gt:
            return O.key === ye ? R(b, x, O, G) : null;
          case Ee:
            return O.key === ye ? z(b, x, O, G) : null;
          case _t:
            return ye = O._init, $(
              b,
              x,
              ye(O._payload),
              G
            );
        }
        if (Da(O) || pe(O)) return ye !== null ? null : Y(b, x, O, G, null);
        hs(b, O);
      }
      return null;
    }
    function te(b, x, O, G, ye) {
      if (typeof G == "string" && G !== "" || typeof G == "number") return b = b.get(O) || null, S(x, b, "" + G, ye);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case gt:
            return b = b.get(G.key === null ? O : G.key) || null, R(x, b, G, ye);
          case Ee:
            return b = b.get(G.key === null ? O : G.key) || null, z(x, b, G, ye);
          case _t:
            var De = G._init;
            return te(b, x, O, De(G._payload), ye);
        }
        if (Da(G) || pe(G)) return b = b.get(O) || null, Y(x, b, G, ye, null);
        hs(x, G);
      }
      return null;
    }
    function se(b, x, O, G) {
      for (var ye = null, De = null, ce = x, ke = x = 0, bn = null; ce !== null && ke < O.length; ke++) {
        ce.index > ke ? (bn = ce, ce = null) : bn = ce.sibling;
        var ht = $(b, ce, O[ke], G);
        if (ht === null) {
          ce === null && (ce = bn);
          break;
        }
        n && ce && ht.alternate === null && r(b, ce), x = d(ht, x, ke), De === null ? ye = ht : De.sibling = ht, De = ht, ce = bn;
      }
      if (ke === O.length) return l(b, ce), Ht && ql(b, ke), ye;
      if (ce === null) {
        for (; ke < O.length; ke++) ce = I(b, O[ke], G), ce !== null && (x = d(ce, x, ke), De === null ? ye = ce : De.sibling = ce, De = ce);
        return Ht && ql(b, ke), ye;
      }
      for (ce = o(b, ce); ke < O.length; ke++) bn = te(ce, b, ke, O[ke], G), bn !== null && (n && bn.alternate !== null && ce.delete(bn.key === null ? ke : bn.key), x = d(bn, x, ke), De === null ? ye = bn : De.sibling = bn, De = bn);
      return n && ce.forEach(function(Ai) {
        return r(b, Ai);
      }), Ht && ql(b, ke), ye;
    }
    function he(b, x, O, G) {
      var ye = pe(O);
      if (typeof ye != "function") throw Error(A(150));
      if (O = ye.call(O), O == null) throw Error(A(151));
      for (var De = ye = null, ce = x, ke = x = 0, bn = null, ht = O.next(); ce !== null && !ht.done; ke++, ht = O.next()) {
        ce.index > ke ? (bn = ce, ce = null) : bn = ce.sibling;
        var Ai = $(b, ce, ht.value, G);
        if (Ai === null) {
          ce === null && (ce = bn);
          break;
        }
        n && ce && Ai.alternate === null && r(b, ce), x = d(Ai, x, ke), De === null ? ye = Ai : De.sibling = Ai, De = Ai, ce = bn;
      }
      if (ht.done) return l(
        b,
        ce
      ), Ht && ql(b, ke), ye;
      if (ce === null) {
        for (; !ht.done; ke++, ht = O.next()) ht = I(b, ht.value, G), ht !== null && (x = d(ht, x, ke), De === null ? ye = ht : De.sibling = ht, De = ht);
        return Ht && ql(b, ke), ye;
      }
      for (ce = o(b, ce); !ht.done; ke++, ht = O.next()) ht = te(ce, b, ke, ht.value, G), ht !== null && (n && ht.alternate !== null && ce.delete(ht.key === null ? ke : ht.key), x = d(ht, x, ke), De === null ? ye = ht : De.sibling = ht, De = ht);
      return n && ce.forEach(function(hy) {
        return r(b, hy);
      }), Ht && ql(b, ke), ye;
    }
    function vn(b, x, O, G) {
      if (typeof O == "object" && O !== null && O.type === Ze && O.key === null && (O = O.props.children), typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case gt:
            e: {
              for (var ye = O.key, De = x; De !== null; ) {
                if (De.key === ye) {
                  if (ye = O.type, ye === Ze) {
                    if (De.tag === 7) {
                      l(b, De.sibling), x = c(De, O.props.children), x.return = b, b = x;
                      break e;
                    }
                  } else if (De.elementType === ye || typeof ye == "object" && ye !== null && ye.$$typeof === _t && _v(ye) === De.type) {
                    l(b, De.sibling), x = c(De, O.props), x.ref = Qu(b, De, O), x.return = b, b = x;
                    break e;
                  }
                  l(b, De);
                  break;
                } else r(b, De);
                De = De.sibling;
              }
              O.type === Ze ? (x = fu(O.props.children, b.mode, G, O.key), x.return = b, b = x) : (G = rf(O.type, O.key, O.props, null, b.mode, G), G.ref = Qu(b, x, O), G.return = b, b = G);
            }
            return m(b);
          case Ee:
            e: {
              for (De = O.key; x !== null; ) {
                if (x.key === De) if (x.tag === 4 && x.stateNode.containerInfo === O.containerInfo && x.stateNode.implementation === O.implementation) {
                  l(b, x.sibling), x = c(x, O.children || []), x.return = b, b = x;
                  break e;
                } else {
                  l(b, x);
                  break;
                }
                else r(b, x);
                x = x.sibling;
              }
              x = zs(O, b.mode, G), x.return = b, b = x;
            }
            return m(b);
          case _t:
            return De = O._init, vn(b, x, De(O._payload), G);
        }
        if (Da(O)) return se(b, x, O, G);
        if (pe(O)) return he(b, x, O, G);
        hs(b, O);
      }
      return typeof O == "string" && O !== "" || typeof O == "number" ? (O = "" + O, x !== null && x.tag === 6 ? (l(b, x.sibling), x = c(x, O), x.return = b, b = x) : (l(b, x), x = lf(O, b.mode, G), x.return = b, b = x), m(b)) : l(b, x);
    }
    return vn;
  }
  var Wu = bv(!0), Dv = bv(!1), ms = {}, ti = Mt(ms), Gu = Mt(ms), ys = Mt(ms);
  function dl(n) {
    if (n === ms) throw Error(A(174));
    return n;
  }
  function Ed(n, r) {
    switch (vt(ys, r), vt(Gu, n), vt(ti, ms), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : ra(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = ra(r, n);
    }
    me(ti), vt(ti, r);
  }
  function qu() {
    me(ti), me(Gu), me(ys);
  }
  function xc(n) {
    dl(ys.current);
    var r = dl(ti.current), l = ra(r, n.type);
    r !== l && (vt(Gu, n), vt(ti, l));
  }
  function we(n) {
    Gu.current === n && (me(ti), me(Gu));
  }
  var ge = Mt(0);
  function pt(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var nn = [];
  function va() {
    for (var n = 0; n < nn.length; n++) nn[n]._workInProgressVersionPrimary = null;
    nn.length = 0;
  }
  var gs = Me.ReactCurrentDispatcher, Cd = Me.ReactCurrentBatchConfig, Kl = 0, qt = null, cn = null, j = null, fn = !1, be = !1, ni = 0, Mi = 0;
  function rn() {
    throw Error(A(321));
  }
  function ha(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!Aa(n[l], r[l])) return !1;
    return !0;
  }
  function Zl(n, r, l, o, c, d) {
    if (Kl = d, qt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, gs.current = n === null || n.memoizedState === null ? Km : Zm, n = l(o, c), be) {
      d = 0;
      do {
        if (be = !1, ni = 0, 25 <= d) throw Error(A(301));
        d += 1, j = cn = null, r.updateQueue = null, gs.current = Jm, n = l(o, c);
      } while (be);
    }
    if (gs.current = jc, r = cn !== null && cn.next !== null, Kl = 0, j = cn = qt = null, fn = !1, r) throw Error(A(300));
    return n;
  }
  function pl() {
    var n = ni !== 0;
    return ni = 0, n;
  }
  function Or() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return j === null ? qt.memoizedState = j = n : j = j.next = n, j;
  }
  function Lr() {
    if (cn === null) {
      var n = qt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = cn.next;
    var r = j === null ? qt.memoizedState : j.next;
    if (r !== null) j = r, cn = n;
    else {
      if (n === null) throw Error(A(310));
      cn = n, n = { memoizedState: cn.memoizedState, baseState: cn.baseState, baseQueue: cn.baseQueue, queue: cn.queue, next: null }, j === null ? qt.memoizedState = j = n : j = j.next = n;
    }
    return j;
  }
  function Jl(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Ss(n) {
    var r = Lr(), l = r.queue;
    if (l === null) throw Error(A(311));
    l.lastRenderedReducer = n;
    var o = cn, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var S = m = null, R = null, z = d;
      do {
        var Y = z.lane;
        if ((Kl & Y) === Y) R !== null && (R = R.next = { lane: 0, action: z.action, hasEagerState: z.hasEagerState, eagerState: z.eagerState, next: null }), o = z.hasEagerState ? z.eagerState : n(o, z.action);
        else {
          var I = {
            lane: Y,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null
          };
          R === null ? (S = R = I, m = o) : R = R.next = I, qt.lanes |= Y, uu |= Y;
        }
        z = z.next;
      } while (z !== null && z !== d);
      R === null ? m = o : R.next = S, Aa(o, r.memoizedState) || (Mr = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = R, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, qt.lanes |= d, uu |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Es(n) {
    var r = Lr(), l = r.queue;
    if (l === null) throw Error(A(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      Aa(d, r.memoizedState) || (Mr = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function _c() {
  }
  function bc(n, r) {
    var l = qt, o = Lr(), c = r(), d = !Aa(o.memoizedState, c);
    if (d && (o.memoizedState = c, Mr = !0), o = o.queue, Cs(Oc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || j !== null && j.memoizedState.tag & 1) {
      if (l.flags |= 2048, eu(9, kc.bind(null, l, o, c, r), void 0, null), ln === null) throw Error(A(349));
      Kl & 30 || Dc(l, r, c);
    }
    return c;
  }
  function Dc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = qt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, qt.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function kc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Lc(r) && Mc(n);
  }
  function Oc(n, r, l) {
    return l(function() {
      Lc(r) && Mc(n);
    });
  }
  function Lc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !Aa(n, l);
    } catch {
      return !0;
    }
  }
  function Mc(n) {
    var r = Li(n, 1);
    r !== null && Xt(r, n, 1, -1);
  }
  function Nc(n) {
    var r = Or();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Jl, lastRenderedState: n }, r.queue = n, n = n.dispatch = Hc.bind(null, qt, n), [r.memoizedState, n];
  }
  function eu(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = qt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, qt.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function zc() {
    return Lr().memoizedState;
  }
  function Xu(n, r, l, o) {
    var c = Or();
    qt.flags |= n, c.memoizedState = eu(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function tu(n, r, l, o) {
    var c = Lr();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (cn !== null) {
      var m = cn.memoizedState;
      if (d = m.destroy, o !== null && ha(o, m.deps)) {
        c.memoizedState = eu(r, l, d, o);
        return;
      }
    }
    qt.flags |= n, c.memoizedState = eu(1 | r, l, d, o);
  }
  function nu(n, r) {
    return Xu(8390656, 8, n, r);
  }
  function Cs(n, r) {
    return tu(2048, 8, n, r);
  }
  function Uc(n, r) {
    return tu(4, 2, n, r);
  }
  function Ac(n, r) {
    return tu(4, 4, n, r);
  }
  function Fc(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Td(n, r, l) {
    return l = l != null ? l.concat([n]) : null, tu(4, 4, Fc.bind(null, r, n), l);
  }
  function ru() {
  }
  function Rd(n, r) {
    var l = Lr();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && ha(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Ku(n, r) {
    var l = Lr();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && ha(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function vl(n, r, l) {
    return Kl & 21 ? (Aa(l, r) || (l = Hl(), qt.lanes |= l, uu |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Mr = !0), n.memoizedState = l);
  }
  function Gr(n, r) {
    var l = tt;
    tt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Cd.transition;
    Cd.transition = {};
    try {
      n(!1), r();
    } finally {
      tt = l, Cd.transition = o;
    }
  }
  function kv() {
    return Lr().memoizedState;
  }
  function zt(n, r, l) {
    var o = Ui(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, Ts(n)) Zu(r, l);
    else if (l = Ev(n, r, l, o), l !== null) {
      var c = zn();
      Xt(l, n, o, c), Rs(l, r, o);
    }
  }
  function Hc(n, r, l) {
    var o = Ui(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (Ts(n)) Zu(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, S = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = S, Aa(S, m)) {
          var R = r.interleaved;
          R === null ? (c.next = c, Wr(r)) : (c.next = R.next, R.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = Ev(n, r, c, o), l !== null && (c = zn(), Xt(l, n, o, c), Rs(l, r, o));
    }
  }
  function Ts(n) {
    var r = n.alternate;
    return n === qt || r !== null && r === qt;
  }
  function Zu(n, r) {
    be = fn = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Rs(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Yo(n, l);
    }
  }
  var jc = { readContext: q, useCallback: rn, useContext: rn, useEffect: rn, useImperativeHandle: rn, useInsertionEffect: rn, useLayoutEffect: rn, useMemo: rn, useReducer: rn, useRef: rn, useState: rn, useDebugValue: rn, useDeferredValue: rn, useTransition: rn, useMutableSource: rn, useSyncExternalStore: rn, useId: rn, unstable_isNewReconciler: !1 }, Km = { readContext: q, useCallback: function(n, r) {
    return Or().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: q, useEffect: nu, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, Xu(
      4194308,
      4,
      Fc.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return Xu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return Xu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Or();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Or();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = zt.bind(null, qt, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Or();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Nc, useDebugValue: ru, useDeferredValue: function(n) {
    return Or().memoizedState = n;
  }, useTransition: function() {
    var n = Nc(!1), r = n[0];
    return n = Gr.bind(null, n[1]), Or().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = qt, c = Or();
    if (Ht) {
      if (l === void 0) throw Error(A(407));
      l = l();
    } else {
      if (l = r(), ln === null) throw Error(A(349));
      Kl & 30 || Dc(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, nu(Oc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, eu(9, kc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Or(), r = ln.identifierPrefix;
    if (Ht) {
      var l = Pn, o = Dr;
      l = (o & ~(1 << 32 - ir(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = ni++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = Mi++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Zm = {
    readContext: q,
    useCallback: Rd,
    useContext: q,
    useEffect: Cs,
    useImperativeHandle: Td,
    useInsertionEffect: Uc,
    useLayoutEffect: Ac,
    useMemo: Ku,
    useReducer: Ss,
    useRef: zc,
    useState: function() {
      return Ss(Jl);
    },
    useDebugValue: ru,
    useDeferredValue: function(n) {
      var r = Lr();
      return vl(r, cn.memoizedState, n);
    },
    useTransition: function() {
      var n = Ss(Jl)[0], r = Lr().memoizedState;
      return [n, r];
    },
    useMutableSource: _c,
    useSyncExternalStore: bc,
    useId: kv,
    unstable_isNewReconciler: !1
  }, Jm = { readContext: q, useCallback: Rd, useContext: q, useEffect: Cs, useImperativeHandle: Td, useInsertionEffect: Uc, useLayoutEffect: Ac, useMemo: Ku, useReducer: Es, useRef: zc, useState: function() {
    return Es(Jl);
  }, useDebugValue: ru, useDeferredValue: function(n) {
    var r = Lr();
    return cn === null ? r.memoizedState = n : vl(r, cn.memoizedState, n);
  }, useTransition: function() {
    var n = Es(Jl)[0], r = Lr().memoizedState;
    return [n, r];
  }, useMutableSource: _c, useSyncExternalStore: bc, useId: kv, unstable_isNewReconciler: !1 };
  function hl(n, r) {
    try {
      var l = "", o = r;
      do
        l += Je(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function wd(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function ws(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var Ov = typeof WeakMap == "function" ? WeakMap : Map;
  function Lv(n, r, l) {
    l = Nt(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      Kc || (Kc = !0, Nd = o), ws(n, r);
    }, l;
  }
  function Mv(n, r, l) {
    l = Nt(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        ws(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      ws(n, r), typeof o != "function" && (ga === null ? ga = /* @__PURE__ */ new Set([this]) : ga.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function xs(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new Ov();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = sy.bind(null, n, r, l), r.then(n, n));
  }
  function Nv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function xd(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Nt(-1, 1), r.tag = 2, fl(l, r, 1))), l.lanes |= 1), n);
  }
  var zv = Me.ReactCurrentOwner, Mr = !1;
  function dn(n, r, l, o) {
    r.child = n === null ? Dv(r, null, l, o) : Wu(r, n.child, l, o);
  }
  function Ju(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return sn(r, c), o = Zl(n, r, l, o, d, c), l = pl(), n !== null && !Mr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, pn(n, r, c)) : (Ht && l && Sc(r), r.flags |= 1, dn(n, r, o, c), r.child);
  }
  function ml(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Hd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Vc(n, r, d, o, c)) : (n = rf(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Hu, l(m, o) && n.ref === r.ref) return pn(n, r, c);
    }
    return r.flags |= 1, n = Sl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Vc(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (Hu(d, o) && n.ref === r.ref) if (Mr = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (Mr = !0);
      else return r.lanes = n.lanes, pn(n, r, c);
    }
    return Pe(n, r, l, o, c);
  }
  function Nr(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, vt(so, zr), zr |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, vt(so, zr), zr |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, vt(so, zr), zr |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, vt(so, zr), zr |= o;
    return dn(n, r, c, l), r.child;
  }
  function au(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Pe(n, r, l, o, c) {
    var d = gn(l) ? lr : Ln.current;
    return d = Yr(r, d), sn(r, c), l = Zl(n, r, l, o, d, c), o = pl(), n !== null && !Mr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, pn(n, r, c)) : (Ht && o && Sc(r), r.flags |= 1, dn(n, r, l, c), r.child);
  }
  function _s(n, r, l, o, c) {
    if (gn(l)) {
      var d = !0;
      Wl(r);
    } else d = !1;
    if (sn(r, c), r.stateNode === null) Ds(n, r), wv(r, l, o), Sd(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, S = r.memoizedProps;
      m.props = S;
      var R = m.context, z = l.contextType;
      typeof z == "object" && z !== null ? z = q(z) : (z = gn(l) ? lr : Ln.current, z = Yr(r, z));
      var Y = l.getDerivedStateFromProps, I = typeof Y == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      I || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (S !== o || R !== z) && xv(r, m, o, z), cl = !1;
      var $ = r.memoizedState;
      m.state = $, vs(r, o, m, c), R = r.memoizedState, S !== o || $ !== R || Ae.current || cl ? (typeof Y == "function" && (gd(r, l, Y, o), R = r.memoizedState), (S = cl || Rv(r, l, S, o, $, R, z)) ? (I || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = R), m.props = o, m.state = R, m.context = z, o = S) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, Cv(n, r), S = r.memoizedProps, z = r.type === r.elementType ? S : kr(r.type, S), m.props = z, I = r.pendingProps, $ = m.context, R = l.contextType, typeof R == "object" && R !== null ? R = q(R) : (R = gn(l) ? lr : Ln.current, R = Yr(r, R));
      var te = l.getDerivedStateFromProps;
      (Y = typeof te == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (S !== I || $ !== R) && xv(r, m, o, R), cl = !1, $ = r.memoizedState, m.state = $, vs(r, o, m, c);
      var se = r.memoizedState;
      S !== I || $ !== se || Ae.current || cl ? (typeof te == "function" && (gd(r, l, te, o), se = r.memoizedState), (z = cl || Rv(r, l, z, o, $, se, R) || !1) ? (Y || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, se, R), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, se, R)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || S === n.memoizedProps && $ === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || S === n.memoizedProps && $ === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = se), m.props = o, m.state = se, m.context = R, o = z) : (typeof m.componentDidUpdate != "function" || S === n.memoizedProps && $ === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || S === n.memoizedProps && $ === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Bc(n, r, l, o, d, c);
  }
  function Bc(n, r, l, o, c, d) {
    au(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && yv(r, l, !1), pn(n, r, d);
    o = r.stateNode, zv.current = r;
    var S = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = Wu(r, n.child, null, d), r.child = Wu(r, null, S, d)) : dn(n, r, S, d), r.memoizedState = o.state, c && yv(r, l, !0), r.child;
  }
  function ey(n) {
    var r = n.stateNode;
    r.pendingContext ? Za(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Za(n, r.context, !1), Ed(n, r.containerInfo);
  }
  function Uv(n, r, l, o, c) {
    return Pu(), Sn(c), r.flags |= 256, dn(n, r, l, o), r.child;
  }
  var bs = { dehydrated: null, treeContext: null, retryLane: 0 };
  function iu(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Av(n, r, l) {
    var o = r.pendingProps, c = ge.current, d = !1, m = (r.flags & 128) !== 0, S;
    if ((S = m) || (S = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), S ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), vt(ge, c & 1), n === null)
      return Cc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = af(m, o, 0, null), n = fu(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = iu(l), r.memoizedState = bs, n) : Pc(r, m));
    if (c = n.memoizedState, c !== null && (S = c.dehydrated, S !== null)) return _d(n, r, m, o, S, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, S = c.sibling;
      var R = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = R, r.deletions = null) : (o = Sl(c, R), o.subtreeFlags = c.subtreeFlags & 14680064), S !== null ? d = Sl(S, d) : (d = fu(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? iu(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = bs, o;
    }
    return d = n.child, n = d.sibling, o = Sl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Pc(n, r) {
    return r = af({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function $c(n, r, l, o) {
    return o !== null && Sn(o), Wu(r, n.child, null, l), n = Pc(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function _d(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = wd(Error(A(422))), $c(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = af({ mode: "visible", children: o.children }, c, 0, null), d = fu(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && Wu(r, n.child, null, m), r.child.memoizedState = iu(m), r.memoizedState = bs, d);
    if (!(r.mode & 1)) return $c(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var S = o.dgst;
      return o = S, d = Error(A(419)), o = wd(d, o, void 0), $c(n, r, m, o);
    }
    if (S = (m & n.childLanes) !== 0, Mr || S) {
      if (o = ln, o !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Li(n, c), Xt(o, n, c, -1));
      }
      return Ns(), o = wd(Error(A(421))), $c(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Fd.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Qr = $r(c.nextSibling), Ir = r, Ht = !0, pa = null, n !== null && (_r[br++] = Dr, _r[br++] = Pn, _r[br++] = ja, Dr = n.id, Pn = n.overflow, ja = r), r = Pc(r, o.children), r.flags |= 4096, r);
  }
  function Fv(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), sl(n.return, r, l);
  }
  function Yc(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function bd(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (dn(n, r, o.children, l), o = ge.current, o & 2) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Fv(n, l, r);
        else if (n.tag === 19) Fv(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      o &= 1;
    }
    if (vt(ge, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && pt(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Yc(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && pt(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        Yc(r, !0, l, null, d);
        break;
      case "together":
        Yc(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function Ds(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function pn(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), uu |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(A(153));
    if (r.child !== null) {
      for (n = r.child, l = Sl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = Sl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Ni(n, r, l) {
    switch (r.tag) {
      case 3:
        ey(r), Pu();
        break;
      case 5:
        xc(r);
        break;
      case 1:
        gn(r.type) && Wl(r);
        break;
      case 4:
        Ed(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        vt($u, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (vt(ge, ge.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Av(n, r, l) : (vt(ge, ge.current & 1), n = pn(n, r, l), n !== null ? n.sibling : null);
        vt(ge, ge.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return bd(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), vt(ge, ge.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Nr(n, r, l);
    }
    return pn(n, r, l);
  }
  var ri, eo, to, ma;
  ri = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, eo = function() {
  }, to = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, dl(ti.current);
      var d = null;
      switch (l) {
        case "input":
          c = yn(n, c), o = yn(n, o), d = [];
          break;
        case "select":
          c = T({}, c, { value: void 0 }), o = T({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = ka(n, c), o = ka(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = mc);
      }
      St(l, o);
      var m;
      l = null;
      for (z in c) if (!o.hasOwnProperty(z) && c.hasOwnProperty(z) && c[z] != null) if (z === "style") {
        var S = c[z];
        for (m in S) S.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else z !== "dangerouslySetInnerHTML" && z !== "children" && z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && z !== "autoFocus" && (xt.hasOwnProperty(z) ? d || (d = []) : (d = d || []).push(z, null));
      for (z in o) {
        var R = o[z];
        if (S = c != null ? c[z] : void 0, o.hasOwnProperty(z) && R !== S && (R != null || S != null)) if (z === "style") if (S) {
          for (m in S) !S.hasOwnProperty(m) || R && R.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in R) R.hasOwnProperty(m) && S[m] !== R[m] && (l || (l = {}), l[m] = R[m]);
        } else l || (d || (d = []), d.push(
          z,
          l
        )), l = R;
        else z === "dangerouslySetInnerHTML" ? (R = R ? R.__html : void 0, S = S ? S.__html : void 0, R != null && S !== R && (d = d || []).push(z, R)) : z === "children" ? typeof R != "string" && typeof R != "number" || (d = d || []).push(z, "" + R) : z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && (xt.hasOwnProperty(z) ? (R != null && z === "onScroll" && Lt("scroll", n), d || S === R || (d = [])) : (d = d || []).push(z, R));
      }
      l && (d = d || []).push("style", l);
      var z = d;
      (r.updateQueue = z) && (r.flags |= 4);
    }
  }, ma = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function an(n, r) {
    if (!Ht) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var o = null; l !== null; ) l.alternate !== null && (o = l), l = l.sibling;
        o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
    }
  }
  function er(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function ty(n, r, l) {
    var o = r.pendingProps;
    switch (Ec(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return er(r), null;
      case 1:
        return gn(r.type) && xr(), er(r), null;
      case 3:
        return o = r.stateNode, qu(), me(Ae), me(Ln), va(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Tc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, pa !== null && (zd(pa), pa = null))), eo(n, r), er(r), null;
      case 5:
        we(r);
        var c = dl(ys.current);
        if (l = r.type, n !== null && r.stateNode != null) to(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(A(166));
            return er(r), null;
          }
          if (n = dl(ti.current), Tc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[sa] = r, o[ds] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Lt("cancel", o), Lt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Lt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < _i.length; c++) Lt(_i[c], o);
                break;
              case "source":
                Lt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Lt(
                  "error",
                  o
                ), Lt("load", o);
                break;
              case "details":
                Lt("toggle", o);
                break;
              case "input":
                nr(o, d), Lt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Lt("invalid", o);
                break;
              case "textarea":
                vi(o, d), Lt("invalid", o);
            }
            St(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var S = d[m];
              m === "children" ? typeof S == "string" ? o.textContent !== S && (d.suppressHydrationWarning !== !0 && os(o.textContent, S, n), c = ["children", S]) : typeof S == "number" && o.textContent !== "" + S && (d.suppressHydrationWarning !== !0 && os(
                o.textContent,
                S,
                n
              ), c = ["children", "" + S]) : xt.hasOwnProperty(m) && S != null && m === "onScroll" && Lt("scroll", o);
            }
            switch (l) {
              case "input":
                ea(o), Hn(o, d, !0);
                break;
              case "textarea":
                ea(o), Oa(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = mc);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Sr(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[sa] = r, n[ds] = o, ri(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = Rn(l, o), l) {
                case "dialog":
                  Lt("cancel", n), Lt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Lt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < _i.length; c++) Lt(_i[c], n);
                  c = o;
                  break;
                case "source":
                  Lt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Lt(
                    "error",
                    n
                  ), Lt("load", n), c = o;
                  break;
                case "details":
                  Lt("toggle", n), c = o;
                  break;
                case "input":
                  nr(n, o), c = yn(n, o), Lt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = T({}, o, { value: void 0 }), Lt("invalid", n);
                  break;
                case "textarea":
                  vi(n, o), c = ka(n, o), Lt("invalid", n);
                  break;
                default:
                  c = o;
              }
              St(l, c), S = c;
              for (d in S) if (S.hasOwnProperty(d)) {
                var R = S[d];
                d === "style" ? We(n, R) : d === "dangerouslySetInnerHTML" ? (R = R ? R.__html : void 0, R != null && La(n, R)) : d === "children" ? typeof R == "string" ? (l !== "textarea" || R !== "") && $a(n, R) : typeof R == "number" && $a(n, "" + R) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (xt.hasOwnProperty(d) ? R != null && d === "onScroll" && Lt("scroll", n) : R != null && Bt(n, d, R, m));
              }
              switch (l) {
                case "input":
                  ea(n), Hn(n, o, !1);
                  break;
                case "textarea":
                  ea(n), Oa(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + et(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? jn(n, !!o.multiple, d, !1) : o.defaultValue != null && jn(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = mc);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return er(r), null;
      case 6:
        if (n && r.stateNode != null) ma(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(A(166));
          if (l = dl(ys.current), dl(ti.current), Tc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[sa] = r, (d = o.nodeValue !== l) && (n = Ir, n !== null)) switch (n.tag) {
              case 3:
                os(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && os(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[sa] = r, r.stateNode = o;
        }
        return er(r), null;
      case 13:
        if (me(ge), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (Ht && Qr !== null && r.mode & 1 && !(r.flags & 128)) Sv(), Pu(), r.flags |= 98560, d = !1;
          else if (d = Tc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(A(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(A(317));
              d[sa] = r;
            } else Pu(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            er(r), d = !1;
          } else pa !== null && (zd(pa), pa = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || ge.current & 1 ? xn === 0 && (xn = 3) : Ns())), r.updateQueue !== null && (r.flags |= 4), er(r), null);
      case 4:
        return qu(), eo(n, r), n === null && Xa(r.stateNode.containerInfo), er(r), null;
      case 10:
        return md(r.type._context), er(r), null;
      case 17:
        return gn(r.type) && xr(), er(r), null;
      case 19:
        if (me(ge), d = r.memoizedState, d === null) return er(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) an(d, !1);
        else {
          if (xn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = pt(n), m !== null) {
              for (r.flags |= 128, an(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return vt(ge, ge.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && Qt() > fo && (r.flags |= 128, o = !0, an(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = pt(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), an(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !Ht) return er(r), null;
          } else 2 * Qt() - d.renderingStartTime > fo && l !== 1073741824 && (r.flags |= 128, o = !0, an(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Qt(), r.sibling = null, l = ge.current, vt(ge, o ? l & 1 | 2 : l & 1), r) : (er(r), null);
      case 22:
      case 23:
        return tf(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? zr & 1073741824 && (er(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : er(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(A(156, r.tag));
  }
  function ny(n, r) {
    switch (Ec(r), r.tag) {
      case 1:
        return gn(r.type) && xr(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return qu(), me(Ae), me(Ln), va(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return we(r), null;
      case 13:
        if (me(ge), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(A(340));
          Pu();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return me(ge), null;
      case 4:
        return qu(), null;
      case 10:
        return md(r.type._context), null;
      case 22:
      case 23:
        return tf(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var no = !1, $n = !1, Ic = typeof WeakSet == "function" ? WeakSet : Set, oe = null;
  function ro(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      un(n, r, o);
    }
    else l.current = null;
  }
  function Dd(n, r, l) {
    try {
      l();
    } catch (o) {
      un(n, r, o);
    }
  }
  var Qc = !1;
  function ry(n, r) {
    if (id = Mu, n = iv(), ns(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var o = l.getSelection && l.getSelection();
        if (o && o.rangeCount !== 0) {
          l = o.anchorNode;
          var c = o.anchorOffset, d = o.focusNode;
          o = o.focusOffset;
          try {
            l.nodeType, d.nodeType;
          } catch {
            l = null;
            break e;
          }
          var m = 0, S = -1, R = -1, z = 0, Y = 0, I = n, $ = null;
          t: for (; ; ) {
            for (var te; I !== l || c !== 0 && I.nodeType !== 3 || (S = m + c), I !== d || o !== 0 && I.nodeType !== 3 || (R = m + o), I.nodeType === 3 && (m += I.nodeValue.length), (te = I.firstChild) !== null; )
              $ = I, I = te;
            for (; ; ) {
              if (I === n) break t;
              if ($ === l && ++z === c && (S = m), $ === d && ++Y === o && (R = m), (te = I.nextSibling) !== null) break;
              I = $, $ = I.parentNode;
            }
            I = te;
          }
          l = S === -1 || R === -1 ? null : { start: S, end: R };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (ld = { focusedElem: n, selectionRange: l }, Mu = !1, oe = r; oe !== null; ) if (r = oe, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, oe = n;
    else for (; oe !== null; ) {
      r = oe;
      try {
        var se = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (se !== null) {
              var he = se.memoizedProps, vn = se.memoizedState, b = r.stateNode, x = b.getSnapshotBeforeUpdate(r.elementType === r.type ? he : kr(r.type, he), vn);
              b.__reactInternalSnapshotBeforeUpdate = x;
            }
            break;
          case 3:
            var O = r.stateNode.containerInfo;
            O.nodeType === 1 ? O.textContent = "" : O.nodeType === 9 && O.documentElement && O.removeChild(O.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(A(163));
        }
      } catch (G) {
        un(r, r.return, G);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, oe = n;
        break;
      }
      oe = r.return;
    }
    return se = Qc, Qc = !1, se;
  }
  function ao(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && Dd(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Wc(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Gc(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Hv(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Hv(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[sa], delete r[ds], delete r[cd], delete r[Gm], delete r[qm])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function kd(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function jv(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || kd(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function ks(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = mc));
    else if (o !== 4 && (n = n.child, n !== null)) for (ks(n, r, l), n = n.sibling; n !== null; ) ks(n, r, l), n = n.sibling;
  }
  function io(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (io(n, r, l), n = n.sibling; n !== null; ) io(n, r, l), n = n.sibling;
  }
  var $t = null, Mn = !1;
  function ur(n, r, l) {
    for (l = l.child; l !== null; ) lo(n, r, l), l = l.sibling;
  }
  function lo(n, r, l) {
    if (Cr && typeof Cr.onCommitFiberUnmount == "function") try {
      Cr.onCommitFiberUnmount(qi, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        $n || ro(l, r);
      case 6:
        var o = $t, c = Mn;
        $t = null, ur(n, r, l), $t = o, Mn = c, $t !== null && (Mn ? (n = $t, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : $t.removeChild(l.stateNode));
        break;
      case 18:
        $t !== null && (Mn ? (n = $t, l = l.stateNode, n.nodeType === 8 ? sd(n.parentNode, l) : n.nodeType === 1 && sd(n, l), oa(n)) : sd($t, l.stateNode));
        break;
      case 4:
        o = $t, c = Mn, $t = l.stateNode.containerInfo, Mn = !0, ur(n, r, l), $t = o, Mn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!$n && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && Dd(l, r, m), c = c.next;
          } while (c !== o);
        }
        ur(n, r, l);
        break;
      case 1:
        if (!$n && (ro(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (S) {
          un(l, r, S);
        }
        ur(n, r, l);
        break;
      case 21:
        ur(n, r, l);
        break;
      case 22:
        l.mode & 1 ? ($n = (o = $n) || l.memoizedState !== null, ur(n, r, l), $n = o) : ur(n, r, l);
        break;
      default:
        ur(n, r, l);
    }
  }
  function uo(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Ic()), r.forEach(function(o) {
        var c = cy.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function Nn(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, m = r, S = m;
        e: for (; S !== null; ) {
          switch (S.tag) {
            case 5:
              $t = S.stateNode, Mn = !1;
              break e;
            case 3:
              $t = S.stateNode.containerInfo, Mn = !0;
              break e;
            case 4:
              $t = S.stateNode.containerInfo, Mn = !0;
              break e;
          }
          S = S.return;
        }
        if ($t === null) throw Error(A(160));
        lo(d, m, c), $t = null, Mn = !1;
        var R = c.alternate;
        R !== null && (R.return = null), c.return = null;
      } catch (z) {
        un(c, r, z);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Vv(r, n), r = r.sibling;
  }
  function Vv(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Nn(r, n), ai(n), o & 4) {
          try {
            ao(3, n, n.return), Wc(3, n);
          } catch (he) {
            un(n, n.return, he);
          }
          try {
            ao(5, n, n.return);
          } catch (he) {
            un(n, n.return, he);
          }
        }
        break;
      case 1:
        Nn(r, n), ai(n), o & 512 && l !== null && ro(l, l.return);
        break;
      case 5:
        if (Nn(r, n), ai(n), o & 512 && l !== null && ro(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            $a(c, "");
          } catch (he) {
            un(n, n.return, he);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, S = n.type, R = n.updateQueue;
          if (n.updateQueue = null, R !== null) try {
            S === "input" && d.type === "radio" && d.name != null && yr(c, d), Rn(S, m);
            var z = Rn(S, d);
            for (m = 0; m < R.length; m += 2) {
              var Y = R[m], I = R[m + 1];
              Y === "style" ? We(c, I) : Y === "dangerouslySetInnerHTML" ? La(c, I) : Y === "children" ? $a(c, I) : Bt(c, Y, I, z);
            }
            switch (S) {
              case "input":
                rr(c, d);
                break;
              case "textarea":
                gr(c, d);
                break;
              case "select":
                var $ = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var te = d.value;
                te != null ? jn(c, !!d.multiple, te, !1) : $ !== !!d.multiple && (d.defaultValue != null ? jn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : jn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[ds] = d;
          } catch (he) {
            un(n, n.return, he);
          }
        }
        break;
      case 6:
        if (Nn(r, n), ai(n), o & 4) {
          if (n.stateNode === null) throw Error(A(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (he) {
            un(n, n.return, he);
          }
        }
        break;
      case 3:
        if (Nn(r, n), ai(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          oa(r.containerInfo);
        } catch (he) {
          un(n, n.return, he);
        }
        break;
      case 4:
        Nn(r, n), ai(n);
        break;
      case 13:
        Nn(r, n), ai(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Xc = Qt())), o & 4 && uo(n);
        break;
      case 22:
        if (Y = l !== null && l.memoizedState !== null, n.mode & 1 ? ($n = (z = $n) || Y, Nn(r, n), $n = z) : Nn(r, n), ai(n), o & 8192) {
          if (z = n.memoizedState !== null, (n.stateNode.isHidden = z) && !Y && n.mode & 1) for (oe = n, Y = n.child; Y !== null; ) {
            for (I = oe = Y; oe !== null; ) {
              switch ($ = oe, te = $.child, $.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ao(4, $, $.return);
                  break;
                case 1:
                  ro($, $.return);
                  var se = $.stateNode;
                  if (typeof se.componentWillUnmount == "function") {
                    o = $, l = $.return;
                    try {
                      r = o, se.props = r.memoizedProps, se.state = r.memoizedState, se.componentWillUnmount();
                    } catch (he) {
                      un(o, l, he);
                    }
                  }
                  break;
                case 5:
                  ro($, $.return);
                  break;
                case 22:
                  if ($.memoizedState !== null) {
                    Bv(I);
                    continue;
                  }
              }
              te !== null ? (te.return = $, oe = te) : Bv(I);
            }
            Y = Y.sibling;
          }
          e: for (Y = null, I = n; ; ) {
            if (I.tag === 5) {
              if (Y === null) {
                Y = I;
                try {
                  c = I.stateNode, z ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (S = I.stateNode, R = I.memoizedProps.style, m = R != null && R.hasOwnProperty("display") ? R.display : null, S.style.display = Te("display", m));
                } catch (he) {
                  un(n, n.return, he);
                }
              }
            } else if (I.tag === 6) {
              if (Y === null) try {
                I.stateNode.nodeValue = z ? "" : I.memoizedProps;
              } catch (he) {
                un(n, n.return, he);
              }
            } else if ((I.tag !== 22 && I.tag !== 23 || I.memoizedState === null || I === n) && I.child !== null) {
              I.child.return = I, I = I.child;
              continue;
            }
            if (I === n) break e;
            for (; I.sibling === null; ) {
              if (I.return === null || I.return === n) break e;
              Y === I && (Y = null), I = I.return;
            }
            Y === I && (Y = null), I.sibling.return = I.return, I = I.sibling;
          }
        }
        break;
      case 19:
        Nn(r, n), ai(n), o & 4 && uo(n);
        break;
      case 21:
        break;
      default:
        Nn(
          r,
          n
        ), ai(n);
    }
  }
  function ai(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (kd(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(A(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && ($a(c, ""), o.flags &= -33);
            var d = jv(n);
            io(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, S = jv(n);
            ks(n, S, m);
            break;
          default:
            throw Error(A(161));
        }
      } catch (R) {
        un(n, n.return, R);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function ay(n, r, l) {
    oe = n, Od(n);
  }
  function Od(n, r, l) {
    for (var o = (n.mode & 1) !== 0; oe !== null; ) {
      var c = oe, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || no;
        if (!m) {
          var S = c.alternate, R = S !== null && S.memoizedState !== null || $n;
          S = no;
          var z = $n;
          if (no = m, ($n = R) && !z) for (oe = c; oe !== null; ) m = oe, R = m.child, m.tag === 22 && m.memoizedState !== null ? Ld(c) : R !== null ? (R.return = m, oe = R) : Ld(c);
          for (; d !== null; ) oe = d, Od(d), d = d.sibling;
          oe = c, no = S, $n = z;
        }
        oo(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, oe = d) : oo(n);
    }
  }
  function oo(n) {
    for (; oe !== null; ) {
      var r = oe;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              $n || Wc(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !$n) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : kr(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && Iu(r, d, o);
              break;
            case 3:
              var m = r.updateQueue;
              if (m !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                Iu(r, m, l);
              }
              break;
            case 5:
              var S = r.stateNode;
              if (l === null && r.flags & 4) {
                l = S;
                var R = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    R.autoFocus && l.focus();
                    break;
                  case "img":
                    R.src && (l.src = R.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var z = r.alternate;
                if (z !== null) {
                  var Y = z.memoizedState;
                  if (Y !== null) {
                    var I = Y.dehydrated;
                    I !== null && oa(I);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(A(163));
          }
          $n || r.flags & 512 && Gc(r);
        } catch ($) {
          un(r, r.return, $);
        }
      }
      if (r === n) {
        oe = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, oe = l;
        break;
      }
      oe = r.return;
    }
  }
  function Bv(n) {
    for (; oe !== null; ) {
      var r = oe;
      if (r === n) {
        oe = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, oe = l;
        break;
      }
      oe = r.return;
    }
  }
  function Ld(n) {
    for (; oe !== null; ) {
      var r = oe;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Wc(4, r);
            } catch (R) {
              un(r, l, R);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (R) {
                un(r, c, R);
              }
            }
            var d = r.return;
            try {
              Gc(r);
            } catch (R) {
              un(r, d, R);
            }
            break;
          case 5:
            var m = r.return;
            try {
              Gc(r);
            } catch (R) {
              un(r, m, R);
            }
        }
      } catch (R) {
        un(r, r.return, R);
      }
      if (r === n) {
        oe = null;
        break;
      }
      var S = r.sibling;
      if (S !== null) {
        S.return = r.return, oe = S;
        break;
      }
      oe = r.return;
    }
  }
  var iy = Math.ceil, lu = Me.ReactCurrentDispatcher, qc = Me.ReactCurrentOwner, ya = Me.ReactCurrentBatchConfig, Xe = 0, ln = null, jt = null, wn = 0, zr = 0, so = Mt(0), xn = 0, Os = null, uu = 0, co = 0, Md = 0, yl = null, tr = null, Xc = 0, fo = 1 / 0, zi = null, Kc = !1, Nd = null, ga = null, po = !1, Sa = null, Zc = 0, Ls = 0, Jc = null, Ms = -1, ou = 0;
  function zn() {
    return Xe & 6 ? Qt() : Ms !== -1 ? Ms : Ms = Qt();
  }
  function Ui(n) {
    return n.mode & 1 ? Xe & 2 && wn !== 0 ? wn & -wn : Xm.transition !== null ? (ou === 0 && (ou = Hl()), ou) : (n = tt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Go(n.type)), n) : 1;
  }
  function Xt(n, r, l, o) {
    if (50 < Ls) throw Ls = 0, Jc = null, Error(A(185));
    Ki(n, l, o), (!(Xe & 2) || n !== ln) && (n === ln && (!(Xe & 2) && (co |= l), xn === 4 && ii(n, wn)), _n(n, o), l === 1 && Xe === 0 && !(r.mode & 1) && (fo = Qt() + 500, ll && Ja()));
  }
  function _n(n, r) {
    var l = n.callbackNode;
    Xi(n, r);
    var o = Wa(n, n === ln ? wn : 0);
    if (o === 0) l !== null && Fo(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && Fo(l), r === 1) n.tag === 0 ? gv(vo.bind(null, n)) : gc(vo.bind(null, n)), mv(function() {
        !(Xe & 6) && Ja();
      }), l = null;
      else {
        switch (Io(o)) {
          case 1:
            l = Ho;
            break;
          case 4:
            l = Qa;
            break;
          case 16:
            l = $e;
            break;
          case 536870912:
            l = yi;
            break;
          default:
            l = $e;
        }
        l = qv(l, ef.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function ef(n, r) {
    if (Ms = -1, ou = 0, Xe & 6) throw Error(A(327));
    var l = n.callbackNode;
    if (ho() && n.callbackNode !== l) return null;
    var o = Wa(n, n === ln ? wn : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = nf(n, o);
    else {
      r = o;
      var c = Xe;
      Xe |= 2;
      var d = $v();
      (ln !== n || wn !== r) && (zi = null, fo = Qt() + 500, cu(n, r));
      do
        try {
          uy();
          break;
        } catch (S) {
          Pv(n, S);
        }
      while (!0);
      hd(), lu.current = d, Xe = c, jt !== null ? r = 0 : (ln = null, wn = 0, r = xn);
    }
    if (r !== 0) {
      if (r === 2 && (c = Ga(n), c !== 0 && (o = c, r = su(n, c))), r === 1) throw l = Os, cu(n, 0), ii(n, o), _n(n, Qt()), l;
      if (r === 6) ii(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !Ud(c) && (r = nf(n, o), r === 2 && (d = Ga(n), d !== 0 && (o = d, r = su(n, d))), r === 1)) throw l = Os, cu(n, 0), ii(n, o), _n(n, Qt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(A(345));
          case 2:
            gl(n, tr, zi);
            break;
          case 3:
            if (ii(n, o), (o & 130023424) === o && (r = Xc + 500 - Qt(), 10 < r)) {
              if (Wa(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                zn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = ss(gl.bind(null, n, tr, zi), r);
              break;
            }
            gl(n, tr, zi);
            break;
          case 4:
            if (ii(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - ir(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = Qt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * iy(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = ss(gl.bind(null, n, tr, zi), o);
              break;
            }
            gl(n, tr, zi);
            break;
          case 5:
            gl(n, tr, zi);
            break;
          default:
            throw Error(A(329));
        }
      }
    }
    return _n(n, Qt()), n.callbackNode === l ? ef.bind(null, n) : null;
  }
  function su(n, r) {
    var l = yl;
    return n.current.memoizedState.isDehydrated && (cu(n, r).flags |= 256), n = nf(n, r), n !== 2 && (r = tr, tr = l, r !== null && zd(r)), n;
  }
  function zd(n) {
    tr === null ? tr = n : tr.push.apply(tr, n);
  }
  function Ud(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!Aa(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function ii(n, r) {
    for (r &= ~Md, r &= ~co, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - ir(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function vo(n) {
    if (Xe & 6) throw Error(A(327));
    ho();
    var r = Wa(n, 0);
    if (!(r & 1)) return _n(n, Qt()), null;
    var l = nf(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = Ga(n);
      o !== 0 && (r = o, l = su(n, o));
    }
    if (l === 1) throw l = Os, cu(n, 0), ii(n, r), _n(n, Qt()), l;
    if (l === 6) throw Error(A(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, gl(n, tr, zi), _n(n, Qt()), null;
  }
  function Ad(n, r) {
    var l = Xe;
    Xe |= 1;
    try {
      return n(r);
    } finally {
      Xe = l, Xe === 0 && (fo = Qt() + 500, ll && Ja());
    }
  }
  function li(n) {
    Sa !== null && Sa.tag === 0 && !(Xe & 6) && ho();
    var r = Xe;
    Xe |= 1;
    var l = ya.transition, o = tt;
    try {
      if (ya.transition = null, tt = 1, n) return n();
    } finally {
      tt = o, ya.transition = l, Xe = r, !(Xe & 6) && Ja();
    }
  }
  function tf() {
    zr = so.current, me(so);
  }
  function cu(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, cs(l)), jt !== null) for (l = jt.return; l !== null; ) {
      var o = l;
      switch (Ec(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && xr();
          break;
        case 3:
          qu(), me(Ae), me(Ln), va();
          break;
        case 5:
          we(o);
          break;
        case 4:
          qu();
          break;
        case 13:
          me(ge);
          break;
        case 19:
          me(ge);
          break;
        case 10:
          md(o.type._context);
          break;
        case 22:
        case 23:
          tf();
      }
      l = l.return;
    }
    if (ln = n, jt = n = Sl(n.current, null), wn = zr = r, xn = 0, Os = null, Md = co = uu = 0, tr = yl = null, Jn !== null) {
      for (r = 0; r < Jn.length; r++) if (l = Jn[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var m = d.next;
          d.next = c, o.next = m;
        }
        l.pending = o;
      }
      Jn = null;
    }
    return n;
  }
  function Pv(n, r) {
    do {
      var l = jt;
      try {
        if (hd(), gs.current = jc, fn) {
          for (var o = qt.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          fn = !1;
        }
        if (Kl = 0, j = cn = qt = null, be = !1, ni = 0, qc.current = null, l === null || l.return === null) {
          xn = 1, Os = r, jt = null;
          break;
        }
        e: {
          var d = n, m = l.return, S = l, R = r;
          if (r = wn, S.flags |= 32768, R !== null && typeof R == "object" && typeof R.then == "function") {
            var z = R, Y = S, I = Y.tag;
            if (!(Y.mode & 1) && (I === 0 || I === 11 || I === 15)) {
              var $ = Y.alternate;
              $ ? (Y.updateQueue = $.updateQueue, Y.memoizedState = $.memoizedState, Y.lanes = $.lanes) : (Y.updateQueue = null, Y.memoizedState = null);
            }
            var te = Nv(m);
            if (te !== null) {
              te.flags &= -257, xd(te, m, S, d, r), te.mode & 1 && xs(d, z, r), r = te, R = z;
              var se = r.updateQueue;
              if (se === null) {
                var he = /* @__PURE__ */ new Set();
                he.add(R), r.updateQueue = he;
              } else se.add(R);
              break e;
            } else {
              if (!(r & 1)) {
                xs(d, z, r), Ns();
                break e;
              }
              R = Error(A(426));
            }
          } else if (Ht && S.mode & 1) {
            var vn = Nv(m);
            if (vn !== null) {
              !(vn.flags & 65536) && (vn.flags |= 256), xd(vn, m, S, d, r), Sn(hl(R, S));
              break e;
            }
          }
          d = R = hl(R, S), xn !== 4 && (xn = 2), yl === null ? yl = [d] : yl.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var b = Lv(d, R, r);
                Tv(d, b);
                break e;
              case 1:
                S = R;
                var x = d.type, O = d.stateNode;
                if (!(d.flags & 128) && (typeof x.getDerivedStateFromError == "function" || O !== null && typeof O.componentDidCatch == "function" && (ga === null || !ga.has(O)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var G = Mv(d, S, r);
                  Tv(d, G);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        Iv(l);
      } catch (ye) {
        r = ye, jt === l && l !== null && (jt = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function $v() {
    var n = lu.current;
    return lu.current = jc, n === null ? jc : n;
  }
  function Ns() {
    (xn === 0 || xn === 3 || xn === 2) && (xn = 4), ln === null || !(uu & 268435455) && !(co & 268435455) || ii(ln, wn);
  }
  function nf(n, r) {
    var l = Xe;
    Xe |= 2;
    var o = $v();
    (ln !== n || wn !== r) && (zi = null, cu(n, r));
    do
      try {
        ly();
        break;
      } catch (c) {
        Pv(n, c);
      }
    while (!0);
    if (hd(), Xe = l, lu.current = o, jt !== null) throw Error(A(261));
    return ln = null, wn = 0, xn;
  }
  function ly() {
    for (; jt !== null; ) Yv(jt);
  }
  function uy() {
    for (; jt !== null && !Pf(); ) Yv(jt);
  }
  function Yv(n) {
    var r = Gv(n.alternate, n, zr);
    n.memoizedProps = n.pendingProps, r === null ? Iv(n) : jt = r, qc.current = null;
  }
  function Iv(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = ny(l, r), l !== null) {
          l.flags &= 32767, jt = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          xn = 6, jt = null;
          return;
        }
      } else if (l = ty(l, r, zr), l !== null) {
        jt = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        jt = r;
        return;
      }
      jt = r = n;
    } while (r !== null);
    xn === 0 && (xn = 5);
  }
  function gl(n, r, l) {
    var o = tt, c = ya.transition;
    try {
      ya.transition = null, tt = 1, oy(n, r, l, o);
    } finally {
      ya.transition = c, tt = o;
    }
    return null;
  }
  function oy(n, r, l, o) {
    do
      ho();
    while (Sa !== null);
    if (Xe & 6) throw Error(A(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(A(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if ($o(n, d), n === ln && (jt = ln = null, wn = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || po || (po = !0, qv($e, function() {
      return ho(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = ya.transition, ya.transition = null;
      var m = tt;
      tt = 1;
      var S = Xe;
      Xe |= 4, qc.current = null, ry(n, l), Vv(l, n), $l(ld), Mu = !!id, ld = id = null, n.current = l, ay(l), $f(), Xe = S, tt = m, ya.transition = d;
    } else n.current = l;
    if (po && (po = !1, Sa = n, Zc = c), d = n.pendingLanes, d === 0 && (ga = null), jo(l.stateNode), _n(n, Qt()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (Kc) throw Kc = !1, n = Nd, Nd = null, n;
    return Zc & 1 && n.tag !== 0 && ho(), d = n.pendingLanes, d & 1 ? n === Jc ? Ls++ : (Ls = 0, Jc = n) : Ls = 0, Ja(), null;
  }
  function ho() {
    if (Sa !== null) {
      var n = Io(Zc), r = ya.transition, l = tt;
      try {
        if (ya.transition = null, tt = 16 > n ? 16 : n, Sa === null) var o = !1;
        else {
          if (n = Sa, Sa = null, Zc = 0, Xe & 6) throw Error(A(331));
          var c = Xe;
          for (Xe |= 4, oe = n.current; oe !== null; ) {
            var d = oe, m = d.child;
            if (oe.flags & 16) {
              var S = d.deletions;
              if (S !== null) {
                for (var R = 0; R < S.length; R++) {
                  var z = S[R];
                  for (oe = z; oe !== null; ) {
                    var Y = oe;
                    switch (Y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ao(8, Y, d);
                    }
                    var I = Y.child;
                    if (I !== null) I.return = Y, oe = I;
                    else for (; oe !== null; ) {
                      Y = oe;
                      var $ = Y.sibling, te = Y.return;
                      if (Hv(Y), Y === z) {
                        oe = null;
                        break;
                      }
                      if ($ !== null) {
                        $.return = te, oe = $;
                        break;
                      }
                      oe = te;
                    }
                  }
                }
                var se = d.alternate;
                if (se !== null) {
                  var he = se.child;
                  if (he !== null) {
                    se.child = null;
                    do {
                      var vn = he.sibling;
                      he.sibling = null, he = vn;
                    } while (he !== null);
                  }
                }
                oe = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, oe = m;
            else e: for (; oe !== null; ) {
              if (d = oe, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  ao(9, d, d.return);
              }
              var b = d.sibling;
              if (b !== null) {
                b.return = d.return, oe = b;
                break e;
              }
              oe = d.return;
            }
          }
          var x = n.current;
          for (oe = x; oe !== null; ) {
            m = oe;
            var O = m.child;
            if (m.subtreeFlags & 2064 && O !== null) O.return = m, oe = O;
            else e: for (m = x; oe !== null; ) {
              if (S = oe, S.flags & 2048) try {
                switch (S.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Wc(9, S);
                }
              } catch (ye) {
                un(S, S.return, ye);
              }
              if (S === m) {
                oe = null;
                break e;
              }
              var G = S.sibling;
              if (G !== null) {
                G.return = S.return, oe = G;
                break e;
              }
              oe = S.return;
            }
          }
          if (Xe = c, Ja(), Cr && typeof Cr.onPostCommitFiberRoot == "function") try {
            Cr.onPostCommitFiberRoot(qi, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        tt = l, ya.transition = r;
      }
    }
    return !1;
  }
  function Qv(n, r, l) {
    r = hl(l, r), r = Lv(n, r, 1), n = fl(n, r, 1), r = zn(), n !== null && (Ki(n, 1, r), _n(n, r));
  }
  function un(n, r, l) {
    if (n.tag === 3) Qv(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        Qv(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (ga === null || !ga.has(o))) {
          n = hl(l, n), n = Mv(r, n, 1), r = fl(r, n, 1), n = zn(), r !== null && (Ki(r, 1, n), _n(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function sy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = zn(), n.pingedLanes |= n.suspendedLanes & l, ln === n && (wn & l) === l && (xn === 4 || xn === 3 && (wn & 130023424) === wn && 500 > Qt() - Xc ? cu(n, 0) : Md |= l), _n(n, r);
  }
  function Wv(n, r) {
    r === 0 && (n.mode & 1 ? (r = Du, Du <<= 1, !(Du & 130023424) && (Du = 4194304)) : r = 1);
    var l = zn();
    n = Li(n, r), n !== null && (Ki(n, r, l), _n(n, l));
  }
  function Fd(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), Wv(n, l);
  }
  function cy(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(A(314));
    }
    o !== null && o.delete(r), Wv(n, l);
  }
  var Gv;
  Gv = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Ae.current) Mr = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return Mr = !1, Ni(n, r, l);
      Mr = !!(n.flags & 131072);
    }
    else Mr = !1, Ht && r.flags & 1048576 && ol(r, Gl, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Ds(n, r), n = r.pendingProps;
        var c = Yr(r, Ln.current);
        sn(r, l), c = Zl(null, r, o, n, c, l);
        var d = pl();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, gn(o) ? (d = !0, Wl(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, yd(r), c.updater = wc, r.stateNode = c, c._reactInternals = r, Sd(r, o, n, l), r = Bc(null, r, o, !0, d, l)) : (r.tag = 0, Ht && d && Sc(r), dn(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Ds(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = fy(o), n = kr(o, n), c) {
            case 0:
              r = Pe(null, r, o, n, l);
              break e;
            case 1:
              r = _s(null, r, o, n, l);
              break e;
            case 11:
              r = Ju(null, r, o, n, l);
              break e;
            case 14:
              r = ml(null, r, o, kr(o.type, n), l);
              break e;
          }
          throw Error(A(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : kr(o, c), Pe(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : kr(o, c), _s(n, r, o, c, l);
      case 3:
        e: {
          if (ey(r), n === null) throw Error(A(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, Cv(n, r), vs(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = hl(Error(A(423)), r), r = Uv(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = hl(Error(A(424)), r), r = Uv(n, r, o, l, c);
            break e;
          } else for (Qr = $r(r.stateNode.containerInfo.firstChild), Ir = r, Ht = !0, pa = null, l = Dv(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Pu(), o === c) {
              r = pn(n, r, l);
              break e;
            }
            dn(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return xc(r), n === null && Cc(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, Ql(o, c) ? m = null : d !== null && Ql(o, d) && (r.flags |= 32), au(n, r), dn(n, r, m, l), r.child;
      case 6:
        return n === null && Cc(r), null;
      case 13:
        return Av(n, r, l);
      case 4:
        return Ed(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = Wu(r, null, o, l) : dn(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : kr(o, c), Ju(n, r, o, c, l);
      case 7:
        return dn(n, r, r.pendingProps, l), r.child;
      case 8:
        return dn(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return dn(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, vt($u, o._currentValue), o._currentValue = m, d !== null) if (Aa(d.value, m)) {
            if (d.children === c.children && !Ae.current) {
              r = pn(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var S = d.dependencies;
            if (S !== null) {
              m = d.child;
              for (var R = S.firstContext; R !== null; ) {
                if (R.context === o) {
                  if (d.tag === 1) {
                    R = Nt(-1, l & -l), R.tag = 2;
                    var z = d.updateQueue;
                    if (z !== null) {
                      z = z.shared;
                      var Y = z.pending;
                      Y === null ? R.next = R : (R.next = Y.next, Y.next = R), z.pending = R;
                    }
                  }
                  d.lanes |= l, R = d.alternate, R !== null && (R.lanes |= l), sl(
                    d.return,
                    l,
                    r
                  ), S.lanes |= l;
                  break;
                }
                R = R.next;
              }
            } else if (d.tag === 10) m = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (m = d.return, m === null) throw Error(A(341));
              m.lanes |= l, S = m.alternate, S !== null && (S.lanes |= l), sl(m, l, r), m = d.sibling;
            } else m = d.child;
            if (m !== null) m.return = d;
            else for (m = d; m !== null; ) {
              if (m === r) {
                m = null;
                break;
              }
              if (d = m.sibling, d !== null) {
                d.return = m.return, m = d;
                break;
              }
              m = m.return;
            }
            d = m;
          }
          dn(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, sn(r, l), c = q(c), o = o(c), r.flags |= 1, dn(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = kr(o, r.pendingProps), c = kr(o.type, c), ml(n, r, o, c, l);
      case 15:
        return Vc(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : kr(o, c), Ds(n, r), r.tag = 1, gn(o) ? (n = !0, Wl(r)) : n = !1, sn(r, l), wv(r, o, c), Sd(r, o, c, l), Bc(null, r, o, !0, n, l);
      case 19:
        return bd(n, r, l);
      case 22:
        return Nr(n, r, l);
    }
    throw Error(A(156, r.tag));
  };
  function qv(n, r) {
    return ic(n, r);
  }
  function Xv(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ea(n, r, l, o) {
    return new Xv(n, r, l, o);
  }
  function Hd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function fy(n) {
    if (typeof n == "function") return Hd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === ft) return 11;
      if (n === ot) return 14;
    }
    return 2;
  }
  function Sl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Ea(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function rf(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Hd(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case Ze:
        return fu(l.children, c, d, r);
      case Ve:
        m = 8, c |= 8;
        break;
      case Cn:
        return n = Ea(12, l, r, c | 2), n.elementType = Cn, n.lanes = d, n;
      case Jt:
        return n = Ea(13, l, r, c), n.elementType = Jt, n.lanes = d, n;
      case Ie:
        return n = Ea(19, l, r, c), n.elementType = Ie, n.lanes = d, n;
      case Qe:
        return af(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case Tn:
            m = 10;
            break e;
          case Pt:
            m = 9;
            break e;
          case ft:
            m = 11;
            break e;
          case ot:
            m = 14;
            break e;
          case _t:
            m = 16, o = null;
            break e;
        }
        throw Error(A(130, n == null ? n : typeof n, ""));
    }
    return r = Ea(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function fu(n, r, l, o) {
    return n = Ea(7, n, o, r), n.lanes = l, n;
  }
  function af(n, r, l, o) {
    return n = Ea(22, n, o, r), n.elementType = Qe, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function lf(n, r, l) {
    return n = Ea(6, n, null, r), n.lanes = l, n;
  }
  function zs(n, r, l) {
    return r = Ea(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Us(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = jl(0), this.expirationTimes = jl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = jl(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function jd(n, r, l, o, c, d, m, S, R) {
    return n = new Us(n, r, l, S, R), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Ea(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, yd(d), n;
  }
  function Kv(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Ee, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Vd(n) {
    if (!n) return ca;
    n = n._reactInternals;
    e: {
      if (Dt(n) !== n || n.tag !== 1) throw Error(A(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (gn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(A(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (gn(l)) return il(n, l, r);
    }
    return r;
  }
  function Bd(n, r, l, o, c, d, m, S, R) {
    return n = jd(l, o, !0, n, c, d, m, S, R), n.context = Vd(null), l = n.current, o = zn(), c = Ui(l), d = Nt(o, c), d.callback = r ?? null, fl(l, d, c), n.current.lanes = c, Ki(n, c, o), _n(n, o), n;
  }
  function uf(n, r, l, o) {
    var c = r.current, d = zn(), m = Ui(c);
    return l = Vd(l), r.context === null ? r.context = l : r.pendingContext = l, r = Nt(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = fl(c, r, m), n !== null && (Xt(n, c, m, d), Rc(n, c, m)), m;
  }
  function As(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Zv(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Pd(n, r) {
    Zv(n, r), (n = n.alternate) && Zv(n, r);
  }
  function dy() {
    return null;
  }
  var $d = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function of(n) {
    this._internalRoot = n;
  }
  Fs.prototype.render = of.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(A(409));
    uf(n, r, null, null);
  }, Fs.prototype.unmount = of.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      li(function() {
        uf(null, n, null, null);
      }), r[Fa] = null;
    }
  };
  function Fs(n) {
    this._internalRoot = n;
  }
  Fs.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = st();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < At.length && r !== 0 && r < At[l].priority; l++) ;
      At.splice(l, 0, n), l === 0 && za(n);
    }
  };
  function El(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function sf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Jv() {
  }
  function py(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var z = As(m);
          d.call(z);
        };
      }
      var m = Bd(r, o, n, 0, null, !1, !1, "", Jv);
      return n._reactRootContainer = m, n[Fa] = m.current, Xa(n.nodeType === 8 ? n.parentNode : n), li(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var S = o;
      o = function() {
        var z = As(R);
        S.call(z);
      };
    }
    var R = jd(n, 0, !1, null, null, !1, !1, "", Jv);
    return n._reactRootContainer = R, n[Fa] = R.current, Xa(n.nodeType === 8 ? n.parentNode : n), li(function() {
      uf(r, R, l, o);
    }), R;
  }
  function cf(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var S = c;
        c = function() {
          var R = As(m);
          S.call(R);
        };
      }
      uf(r, m, n, c);
    } else m = py(l, r, n, c, o);
    return As(m);
  }
  ku = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = gi(r.pendingLanes);
          l !== 0 && (Yo(r, l | 1), _n(r, Qt()), !(Xe & 6) && (fo = Qt() + 500, Ja()));
        }
        break;
      case 13:
        li(function() {
          var o = Li(n, 1);
          if (o !== null) {
            var c = zn();
            Xt(o, n, 1, c);
          }
        }), Pd(n, 1);
    }
  }, Zi = function(n) {
    if (n.tag === 13) {
      var r = Li(n, 134217728);
      if (r !== null) {
        var l = zn();
        Xt(r, n, 134217728, l);
      }
      Pd(n, 134217728);
    }
  }, Qo = function(n) {
    if (n.tag === 13) {
      var r = Ui(n), l = Li(n, r);
      if (l !== null) {
        var o = zn();
        Xt(l, n, r, o);
      }
      Pd(n, r);
    }
  }, st = function() {
    return tt;
  }, Ou = function(n, r) {
    var l = tt;
    try {
      return tt = n, r();
    } finally {
      tt = l;
    }
  }, Ut = function(n, r, l) {
    switch (r) {
      case "input":
        if (rr(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = yc(o);
              if (!c) throw Error(A(90));
              ta(o), rr(o, c);
            }
          }
        }
        break;
      case "textarea":
        gr(n, l);
        break;
      case "select":
        r = l.value, r != null && jn(n, !!l.multiple, r, !1);
    }
  }, wu = Ad, rc = li;
  var vy = { usingClientEntryPoint: !1, Events: [Ka, Bu, yc, Ll, hi, Ad] }, Hs = { findFiberByHostInstance: ki, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, eh = { bundleType: Hs.bundleType, version: Hs.version, rendererPackageName: Hs.rendererPackageName, rendererConfig: Hs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Me.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = On(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Hs.findFiberByHostInstance || dy, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ff = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ff.isDisabled && ff.supportsFiber) try {
      qi = ff.inject(eh), Cr = ff;
    } catch {
    }
  }
  return _a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vy, _a.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!El(r)) throw Error(A(200));
    return Kv(n, r, null, l);
  }, _a.createRoot = function(n, r) {
    if (!El(n)) throw Error(A(299));
    var l = !1, o = "", c = $d;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = jd(n, 1, !1, null, null, l, !1, o, c), n[Fa] = r.current, Xa(n.nodeType === 8 ? n.parentNode : n), new of(r);
  }, _a.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(A(188)) : (n = Object.keys(n).join(","), Error(A(268, n)));
    return n = On(r), n = n === null ? null : n.stateNode, n;
  }, _a.flushSync = function(n) {
    return li(n);
  }, _a.hydrate = function(n, r, l) {
    if (!sf(r)) throw Error(A(200));
    return cf(null, n, r, !0, l);
  }, _a.hydrateRoot = function(n, r, l) {
    if (!El(n)) throw Error(A(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = $d;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = Bd(r, null, n, 1, l ?? null, c, !1, d, m), n[Fa] = r.current, Xa(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new Fs(r);
  }, _a.render = function(n, r, l) {
    if (!sf(r)) throw Error(A(200));
    return cf(null, n, r, !1, l);
  }, _a.unmountComponentAtNode = function(n) {
    if (!sf(n)) throw Error(A(40));
    return n._reactRootContainer ? (li(function() {
      cf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Fa] = null;
      });
    }), !0) : !1;
  }, _a.unstable_batchedUpdates = Ad, _a.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!sf(l)) throw Error(A(200));
    if (n == null || n._reactInternals === void 0) throw Error(A(38));
    return cf(n, r, l, !1, o);
  }, _a.version = "18.2.0-next-9e3b772b8-20220608", _a;
}
var ba = {}, K1;
function Jb() {
  if (K1) return ba;
  K1 = 1;
  var X = {};
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return X.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var le = zm, A = tT(), nt = le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, xt = !1;
    function Zt(e) {
      xt = e;
    }
    function ut(e) {
      if (!xt) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Yt("warn", e, a);
      }
    }
    function E(e) {
      if (!xt) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Yt("error", e, a);
      }
    }
    function Yt(e, t, a) {
      {
        var i = nt.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var He = 0, _e = 1, qe = 2, ue = 3, je = 4, ee = 5, Ce = 6, rt = 7, An = 8, Fn = 9, Bt = 10, Me = 11, gt = 12, Ee = 13, Ze = 14, Ve = 15, Cn = 16, Tn = 17, Pt = 18, ft = 19, Jt = 21, Ie = 22, ot = 23, _t = 24, Qe = 25, B = !0, pe = !1, T = !1, P = !1, ve = !1, Ne = !0, ze = !1, Je = !1, Ge = !0, dt = !0, et = !0, mn = /* @__PURE__ */ new Set(), Vr = {}, ea = {};
    function ta(e, t) {
      Br(e, t), Br(e + "Capture", t);
    }
    function Br(e, t) {
      Vr[e] && E("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Vr[e] = t;
      {
        var a = e.toLowerCase();
        ea[a] = e, e === "onDoubleClick" && (ea.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        mn.add(t[i]);
    }
    var yn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", nr = Object.prototype.hasOwnProperty;
    function yr(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function rr(e) {
      try {
        return Hn(e), !1;
      } catch {
        return !0;
      }
    }
    function Hn(e) {
      return "" + e;
    }
    function na(e, t) {
      if (rr(e))
        return E("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, yr(e)), Hn(e);
    }
    function Da(e) {
      if (rr(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", yr(e)), Hn(e);
    }
    function jn(e, t) {
      if (rr(e))
        return E("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, yr(e)), Hn(e);
    }
    function ka(e, t) {
      if (rr(e))
        return E("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, yr(e)), Hn(e);
    }
    function vi(e) {
      if (rr(e))
        return E("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", yr(e)), Hn(e);
    }
    function gr(e) {
      if (rr(e))
        return E("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", yr(e)), Hn(e);
    }
    var Oa = 0, Sr = 1, ra = 2, kn = 3, La = 4, $a = 5, Ya = 6, Z = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Te = Z + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", We = new RegExp("^[" + Z + "][" + Te + "]*$"), bt = {}, St = {};
    function Rn(e) {
      return nr.call(St, e) ? !0 : nr.call(bt, e) ? !1 : We.test(e) ? (St[e] = !0, !0) : (bt[e] = !0, E("Invalid attribute name: `%s`", e), !1);
    }
    function on(e, t, a) {
      return t !== null ? t.type === Oa : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Er(e, t, a, i) {
      if (a !== null && a.type === Oa)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Ut(e, t, a, i) {
      if (t === null || typeof t > "u" || Er(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case kn:
            return !t;
          case La:
            return t === !1;
          case $a:
            return isNaN(t);
          case Ya:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function ar(e) {
      return en.hasOwnProperty(e) ? en[e] : null;
    }
    function It(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === ra || t === kn || t === La, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var en = {}, Ll = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Ll.forEach(function(e) {
      en[e] = new It(
        e,
        Oa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      en[t] = new It(
        t,
        Sr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      en[e] = new It(
        e,
        ra,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      en[e] = new It(
        e,
        ra,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      en[e] = new It(
        e,
        kn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      en[e] = new It(
        e,
        kn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      en[e] = new It(
        e,
        La,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      en[e] = new It(
        e,
        Ya,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      en[e] = new It(
        e,
        $a,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var hi = /[\-\:]([a-z])/g, wu = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(hi, wu);
      en[t] = new It(
        t,
        Sr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(hi, wu);
      en[t] = new It(
        t,
        Sr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(hi, wu);
      en[t] = new It(
        t,
        Sr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      en[e] = new It(
        e,
        Sr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var rc = "xlinkHref";
    en[rc] = new It(
      "xlinkHref",
      Sr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      en[e] = new It(
        e,
        Sr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var zo = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Uo = !1;
    function Gi(e) {
      !Uo && zo.test(e) && (Uo = !0, E("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function mi(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        na(a, t), i.sanitizeURL && Gi("" + a);
        var s = i.attributeName, f = null;
        if (i.type === La) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Ut(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Ut(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === kn)
            return a;
          f = e.getAttribute(s);
        }
        return Ut(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function Ia(e, t, a, i) {
      {
        if (!Rn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return na(a, t), u === "" + a ? a : u;
      }
    }
    function xu(e, t, a, i) {
      var u = ar(t);
      if (!on(t, u, i)) {
        if (Ut(t, a, u, i) && (a = null), i || u === null) {
          if (Rn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (na(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === kn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var _ = u.type, w;
          _ === kn || _ === La && a === !0 ? w = "" : (na(a, y), w = "" + a, u.sanitizeURL && Gi(w.toString())), g ? e.setAttributeNS(g, y, w) : e.setAttribute(y, w);
        }
      }
    }
    var aa = Symbol.for("react.element"), ia = Symbol.for("react.portal"), Ma = Symbol.for("react.fragment"), Ml = Symbol.for("react.strict_mode"), _u = Symbol.for("react.profiler"), bu = Symbol.for("react.provider"), Ao = Symbol.for("react.context"), Dt = Symbol.for("react.forward_ref"), Nl = Symbol.for("react.suspense"), zl = Symbol.for("react.suspense_list"), Ul = Symbol.for("react.memo"), On = Symbol.for("react.lazy"), ac = Symbol.for("react.scope"), ic = Symbol.for("react.debug_trace_mode"), Fo = Symbol.for("react.offscreen"), Pf = Symbol.for("react.legacy_hidden"), $f = Symbol.for("react.cache"), Qt = Symbol.for("react.tracing_marker"), lc = Symbol.iterator, Ho = "@@iterator";
    function Qa(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = lc && e[lc] || e[Ho];
      return typeof t == "function" ? t : null;
    }
    var $e = Object.assign, Al = 0, yi, qi, Cr, jo, ir, Vo, Bo;
    function Po() {
    }
    Po.__reactDisabledLog = !0;
    function Fl() {
      {
        if (Al === 0) {
          yi = console.log, qi = console.info, Cr = console.warn, jo = console.error, ir = console.group, Vo = console.groupCollapsed, Bo = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Po,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Al++;
      }
    }
    function Du() {
      {
        if (Al--, Al === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: $e({}, e, {
              value: yi
            }),
            info: $e({}, e, {
              value: qi
            }),
            warn: $e({}, e, {
              value: Cr
            }),
            error: $e({}, e, {
              value: jo
            }),
            group: $e({}, e, {
              value: ir
            }),
            groupCollapsed: $e({}, e, {
              value: Vo
            }),
            groupEnd: $e({}, e, {
              value: Bo
            })
          });
        }
        Al < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var gi = nt.ReactCurrentDispatcher, Wa;
    function la(e, t, a) {
      {
        if (Wa === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            Wa = i && i[1] || "";
          }
        return `
` + Wa + e;
      }
    }
    var Xi = !1, Ga;
    {
      var Hl = typeof WeakMap == "function" ? WeakMap : Map;
      Ga = new Hl();
    }
    function jl(e, t) {
      if (!e || Xi)
        return "";
      {
        var a = Ga.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Xi = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = gi.current, gi.current = null, Fl();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (N) {
              i = N;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (N) {
              i = N;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (N) {
            i = N;
          }
          e();
        }
      } catch (N) {
        if (N && i && typeof N.stack == "string") {
          for (var p = N.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, g = v.length - 1; y >= 1 && g >= 0 && p[y] !== v[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (p[y] !== v[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || p[y] !== v[g]) {
                    var _ = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && Ga.set(e, _), _;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        Xi = !1, gi.current = s, Du(), Error.prepareStackTrace = u;
      }
      var w = e ? e.displayName || e.name : "", M = w ? la(w) : "";
      return typeof e == "function" && Ga.set(e, M), M;
    }
    function Ki(e, t, a) {
      return jl(e, !0);
    }
    function $o(e, t, a) {
      return jl(e, !1);
    }
    function Yo(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function tt(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return jl(e, Yo(e));
      if (typeof e == "string")
        return la(e);
      switch (e) {
        case Nl:
          return la("Suspense");
        case zl:
          return la("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Dt:
            return $o(e.render);
          case Ul:
            return tt(e.type, t, a);
          case On: {
            var i = e, u = i._payload, s = i._init;
            try {
              return tt(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Io(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case ee:
          return la(e.type);
        case Cn:
          return la("Lazy");
        case Ee:
          return la("Suspense");
        case ft:
          return la("SuspenseList");
        case He:
        case qe:
        case Ve:
          return $o(e.type);
        case Me:
          return $o(e.type.render);
        case _e:
          return Ki(e.type);
        default:
          return "";
      }
    }
    function ku(e) {
      try {
        var t = "", a = e;
        do
          t += Io(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Zi(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Qo(e) {
      return e.displayName || "Context";
    }
    function st(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Ma:
          return "Fragment";
        case ia:
          return "Portal";
        case _u:
          return "Profiler";
        case Ml:
          return "StrictMode";
        case Nl:
          return "Suspense";
        case zl:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Ao:
            var t = e;
            return Qo(t) + ".Consumer";
          case bu:
            var a = e;
            return Qo(a._context) + ".Provider";
          case Dt:
            return Zi(e, e.render, "ForwardRef");
          case Ul:
            var i = e.displayName || null;
            return i !== null ? i : st(e.type) || "Memo";
          case On: {
            var u = e, s = u._payload, f = u._init;
            try {
              return st(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Ou(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Vl(e) {
      return e.displayName || "Context";
    }
    function Ue(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case _t:
          return "Cache";
        case Fn:
          var i = a;
          return Vl(i) + ".Consumer";
        case Bt:
          var u = a;
          return Vl(u._context) + ".Provider";
        case Pt:
          return "DehydratedFragment";
        case Me:
          return Ou(a, a.render, "ForwardRef");
        case rt:
          return "Fragment";
        case ee:
          return a;
        case je:
          return "Portal";
        case ue:
          return "Root";
        case Ce:
          return "Text";
        case Cn:
          return st(a);
        case An:
          return a === Ml ? "StrictMode" : "Mode";
        case Ie:
          return "Offscreen";
        case gt:
          return "Profiler";
        case Jt:
          return "Scope";
        case Ee:
          return "Suspense";
        case ft:
          return "SuspenseList";
        case Qe:
          return "TracingMarker";
        case _e:
        case He:
        case Tn:
        case qe:
        case Ze:
        case Ve:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Na = nt.ReactDebugCurrentFrame, Wt = null, Tr = !1;
    function ua() {
      {
        if (Wt === null)
          return null;
        var e = Wt._debugOwner;
        if (e !== null && typeof e < "u")
          return Ue(e);
      }
      return null;
    }
    function Ji() {
      return Wt === null ? "" : ku(Wt);
    }
    function At() {
      Na.getCurrentStack = null, Wt = null, Tr = !1;
    }
    function Gt(e) {
      Na.getCurrentStack = e === null ? null : Ji, Wt = e, Tr = !1;
    }
    function Wo() {
      return Wt;
    }
    function Vn(e) {
      Tr = e;
    }
    function Rr(e) {
      return "" + e;
    }
    function za(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return gr(e), e;
        default:
          return "";
      }
    }
    var Lu = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Bl(e, t) {
      Lu[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || E("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || E("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Pl(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function el(e) {
      return e._valueTracker;
    }
    function oa(e) {
      e._valueTracker = null;
    }
    function Si(e) {
      var t = "";
      return e && (Pl(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Mu(e) {
      var t = Pl(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      gr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            gr(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            gr(p), i = "" + p;
          },
          stopTracking: function() {
            oa(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Ei(e) {
      el(e) || (e._valueTracker = Mu(e));
    }
    function Nu(e) {
      if (!e)
        return !1;
      var t = el(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Si(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function qa(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Ci = !1, zu = !1, Go = !1, Ua = !1;
    function Uu(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function h(e, t) {
      var a = e, i = t.checked, u = $e({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function C(e, t) {
      Bl("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !zu && (E("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ua() || "A component", t.type), zu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Ci && (E("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ua() || "A component", t.type), Ci = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: za(t.value != null ? t.value : i),
        controlled: Uu(t)
      };
    }
    function L(e, t) {
      var a = e, i = t.checked;
      i != null && xu(a, "checked", i, !1);
    }
    function U(e, t) {
      var a = e;
      {
        var i = Uu(t);
        !a._wrapperState.controlled && i && !Ua && (E("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Ua = !0), a._wrapperState.controlled && !i && !Go && (E("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Go = !0);
      }
      L(e, t);
      var u = za(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Rr(u)) : a.value !== Rr(u) && (a.value = Rr(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Oe(a, t.type, u) : t.hasOwnProperty("defaultValue") && Oe(a, t.type, za(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function W(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Rr(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function de(e, t) {
      var a = e;
      U(a, t), re(a, t);
    }
    function re(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        na(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = yh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Nu(f), U(f, p);
          }
        }
      }
    }
    function Oe(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || qa(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Rr(e._wrapperState.initialValue) : e.defaultValue !== Rr(a) && (e.defaultValue = Rr(a)));
    }
    var Ye = !1, Et = !1, Tt = !1;
    function Rt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? le.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Et || (Et = !0, E("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Tt || (Tt = !0, E("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Ye && (E("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Ye = !0);
    }
    function wt(e, t) {
      t.value != null && e.setAttribute("value", Rr(za(t.value)));
    }
    var Ft = Array.isArray;
    function ct(e) {
      return Ft(e);
    }
    var tl;
    tl = !1;
    function Au() {
      var e = ua();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var qo = ["value", "defaultValue"];
    function Xo(e) {
      {
        Bl("select", e);
        for (var t = 0; t < qo.length; t++) {
          var a = qo[t];
          if (e[a] != null) {
            var i = ct(e[a]);
            e.multiple && !i ? E("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Au()) : !e.multiple && i && E("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Au());
          }
        }
      }
    }
    function Ti(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = Rr(za(a)), _ = null, w = 0; w < u.length; w++) {
          if (u[w].value === g) {
            u[w].selected = !0, i && (u[w].defaultSelected = !0);
            return;
          }
          _ === null && !u[w].disabled && (_ = u[w]);
        }
        _ !== null && (_.selected = !0);
      }
    }
    function Ko(e, t) {
      return $e({}, t, {
        value: void 0
      });
    }
    function Zo(e, t) {
      var a = e;
      Xo(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !tl && (E("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), tl = !0);
    }
    function Yf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Ti(a, !!t.multiple, i, !1) : t.defaultValue != null && Ti(a, !!t.multiple, t.defaultValue, !0);
    }
    function Um(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Ti(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Ti(a, !!t.multiple, t.defaultValue, !0) : Ti(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Pp(e, t) {
      var a = e, i = t.value;
      i != null && Ti(a, !!t.multiple, i, !1);
    }
    var $p = !1;
    function If(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = $e({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Rr(a._wrapperState.initialValue)
      });
      return i;
    }
    function Yp(e, t) {
      var a = e;
      Bl("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !$p && (E("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", ua() || "A component"), $p = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          E("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (ct(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: za(i)
      };
    }
    function Ip(e, t) {
      var a = e, i = za(t.value), u = za(t.defaultValue);
      if (i != null) {
        var s = Rr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Rr(u));
    }
    function uc(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Am(e, t) {
      Ip(e, t);
    }
    var Ri = "http://www.w3.org/1999/xhtml", Fm = "http://www.w3.org/1998/Math/MathML", oc = "http://www.w3.org/2000/svg";
    function Qf(e) {
      switch (e) {
        case "svg":
          return oc;
        case "math":
          return Fm;
        default:
          return Ri;
      }
    }
    function Wf(e, t) {
      return e == null || e === Ri ? Qf(t) : e === oc && t === "foreignObject" ? Ri : e;
    }
    var Hm = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, sc, Qp = Hm(function(e, t) {
      if (e.namespaceURI === oc && !("innerHTML" in e)) {
        sc = sc || document.createElement("div"), sc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = sc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), wr = 1, wi = 3, tn = 8, Pr = 9, Gf = 11, Jo = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === wi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Wp = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Fu = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Gp(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var qp = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Fu).forEach(function(e) {
      qp.forEach(function(t) {
        Fu[Gp(t, e)] = Fu[e];
      });
    });
    function nl(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Fu.hasOwnProperty(e) && Fu[e]) ? t + "px" : (ka(t, e), ("" + t).trim());
    }
    var jm = /([A-Z])/g, Vm = /^ms-/;
    function Bm(e) {
      return e.replace(jm, "-$1").toLowerCase().replace(Vm, "-ms-");
    }
    var qf = function() {
    };
    {
      var Xp = /^(?:webkit|moz|o)[A-Z]/, es = /^-ms-/, ts = /-(.)/g, Kp = /;\s*$/, xi = {}, Xf = {}, Kf = !1, cc = !1, Zf = function(e) {
        return e.replace(ts, function(t, a) {
          return a.toUpperCase();
        });
      }, Zp = function(e) {
        xi.hasOwnProperty(e) && xi[e] || (xi[e] = !0, E(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Zf(e.replace(es, "ms-"))
        ));
      }, Jp = function(e) {
        xi.hasOwnProperty(e) && xi[e] || (xi[e] = !0, E("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, ev = function(e, t) {
        Xf.hasOwnProperty(t) && Xf[t] || (Xf[t] = !0, E(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Kp, "")));
      }, Pm = function(e, t) {
        Kf || (Kf = !0, E("`NaN` is an invalid value for the `%s` css style property.", e));
      }, $m = function(e, t) {
        cc || (cc = !0, E("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      qf = function(e, t) {
        e.indexOf("-") > -1 ? Zp(e) : Xp.test(e) ? Jp(e) : Kp.test(t) && ev(e, t), typeof t == "number" && (isNaN(t) ? Pm(e, t) : isFinite(t) || $m(e, t));
      };
    }
    var Ym = qf;
    function Im(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Bm(i)) + ":", t += nl(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function tv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Ym(i, t[i]);
          var s = nl(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Aa(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Hu(e) {
      var t = {};
      for (var a in e)
        for (var i = Wp[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function nv(e, t) {
      {
        if (!t)
          return;
        var a = Hu(e), i = Hu(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, E("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Aa(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var rv = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, av = $e({
      menuitem: !0
    }, rv), iv = "__html";
    function ns(e, t) {
      if (t) {
        if (av[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(iv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && E("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function $l(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var fc = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Yl = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, rl = {}, rs = new RegExp("^(aria)-[" + Te + "]*$"), Jf = new RegExp("^(aria)[A-Z][" + Te + "]*$");
    function lv(e, t) {
      {
        if (nr.call(rl, t) && rl[t])
          return !0;
        if (Jf.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Yl.hasOwnProperty(a) ? a : null;
          if (i == null)
            return E("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), rl[t] = !0, !0;
          if (t !== i)
            return E("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), rl[t] = !0, !0;
        }
        if (rs.test(t)) {
          var u = t.toLowerCase(), s = Yl.hasOwnProperty(u) ? u : null;
          if (s == null)
            return rl[t] = !0, !1;
          if (t !== s)
            return E("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), rl[t] = !0, !0;
        }
      }
      return !0;
    }
    function dc(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = lv(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? E("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && E("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function ju(e, t) {
      $l(e, t) || dc(e, t);
    }
    var pc = !1;
    function uv(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !pc && (pc = !0, e === "select" && t.multiple ? E("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : E("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var as = function() {
    };
    {
      var Zn = {}, ed = /^on./, ov = /^on[^A-Z]/, sv = new RegExp("^(aria)-[" + Te + "]*$"), cv = new RegExp("^(aria)[A-Z][" + Te + "]*$");
      as = function(e, t, a, i) {
        if (nr.call(Zn, t) && Zn[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return E("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Zn[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return E("Invalid event handler property `%s`. Did you mean `%s`?", t, p), Zn[t] = !0, !0;
          if (ed.test(t))
            return E("Unknown event handler property `%s`. It will be ignored.", t), Zn[t] = !0, !0;
        } else if (ed.test(t))
          return ov.test(t) && E("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Zn[t] = !0, !0;
        if (sv.test(t) || cv.test(t))
          return !0;
        if (u === "innerhtml")
          return E("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Zn[t] = !0, !0;
        if (u === "aria")
          return E("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Zn[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return E("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Zn[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return E("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Zn[t] = !0, !0;
        var v = ar(t), y = v !== null && v.type === Oa;
        if (fc.hasOwnProperty(u)) {
          var g = fc[u];
          if (g !== t)
            return E("Invalid DOM property `%s`. Did you mean `%s`?", t, g), Zn[t] = !0, !0;
        } else if (!y && t !== u)
          return E("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), Zn[t] = !0, !0;
        return typeof a == "boolean" && Er(t, a, v, !1) ? (a ? E('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : E('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Zn[t] = !0, !0) : y ? !0 : Er(t, a, v, !1) ? (Zn[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === kn && (E("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Zn[t] = !0), !0);
      };
    }
    var fv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = as(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? E("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && E("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function al(e, t, a) {
      $l(e, t) || fv(e, t, a);
    }
    var vc = 1, is = 2, ls = 4, Qm = vc | is | ls, _i = null;
    function Wm(e) {
      _i !== null && E("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), _i = e;
    }
    function dv() {
      _i === null && E("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), _i = null;
    }
    function pv(e) {
      return e === _i;
    }
    function Lt(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === wi ? t.parentNode : t;
    }
    var us = null, bi = null, Xa = null;
    function td(e) {
      var t = go(e);
      if (t) {
        if (typeof us != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = yh(a);
          us(t.stateNode, t.type, i);
        }
      }
    }
    function nd(e) {
      us = e;
    }
    function Vu(e) {
      bi ? Xa ? Xa.push(e) : Xa = [e] : bi = e;
    }
    function hc() {
      return bi !== null || Xa !== null;
    }
    function Il() {
      if (bi) {
        var e = bi, t = Xa;
        if (bi = null, Xa = null, td(e), t)
          for (var a = 0; a < t.length; a++)
            td(t[a]);
      }
    }
    var rd = function(e, t) {
      return e(t);
    }, vv = function() {
    }, ad = !1;
    function hv() {
      var e = hc();
      e && (vv(), Il());
    }
    function os(e, t, a) {
      if (ad)
        return e(t, a);
      ad = !0;
      try {
        return rd(e, t, a);
      } finally {
        ad = !1, hv();
      }
    }
    function mc(e, t, a) {
      rd = e, vv = a;
    }
    function id(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function ld(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && id(t));
        default:
          return !1;
      }
    }
    function Ql(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = yh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (ld(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var ss = !1;
    if (yn)
      try {
        var cs = {};
        Object.defineProperty(cs, "passive", {
          get: function() {
            ss = !0;
          }
        }), window.addEventListener("test", cs, cs), window.removeEventListener("test", cs, cs);
      } catch {
        ss = !1;
      }
    function ud(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var mv = ud;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var od = document.createElement("react");
      mv = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), _ = !1, w = !0, M = window.event, N = Object.getOwnPropertyDescriptor(window, "event");
        function F() {
          od.removeEventListener(H, xe, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = M);
        }
        var ae = Array.prototype.slice.call(arguments, 3);
        function xe() {
          _ = !0, F(), a.apply(i, ae), w = !1;
        }
        var Se, it = !1, Ke = !1;
        function D(k) {
          if (Se = k.error, it = !0, Se === null && k.colno === 0 && k.lineno === 0 && (Ke = !0), k.defaultPrevented && Se != null && typeof Se == "object")
            try {
              Se._suppressLogging = !0;
            } catch {
            }
        }
        var H = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", D), od.addEventListener(H, xe, !1), g.initEvent(H, !1, !1), od.dispatchEvent(g), N && Object.defineProperty(window, "event", N), _ && w && (it ? Ke && (Se = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Se = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Se)), window.removeEventListener("error", D), !_)
          return F(), ud.apply(this, arguments);
      };
    }
    var sd = mv, $r = !1, fs = null, Di = !1, sa = null, ds = {
      onError: function(e) {
        $r = !0, fs = e;
      }
    };
    function Fa(e, t, a, i, u, s, f, p, v) {
      $r = !1, fs = null, sd.apply(ds, arguments);
    }
    function cd(e, t, a, i, u, s, f, p, v) {
      if (Fa.apply(this, arguments), $r) {
        var y = ki();
        Di || (Di = !0, sa = y);
      }
    }
    function Gm() {
      if (Di) {
        var e = sa;
        throw Di = !1, sa = null, e;
      }
    }
    function qm() {
      return $r;
    }
    function ki() {
      if ($r) {
        var e = fs;
        return $r = !1, fs = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ka(e) {
      return e._reactInternals;
    }
    function Bu(e) {
      return e._reactInternals !== void 0;
    }
    function yc(e, t) {
      e._reactInternals = t;
    }
    var Re = (
      /*                      */
      0
    ), Ha = (
      /*                */
      1
    ), Mt = (
      /*                    */
      2
    ), me = (
      /*                       */
      4
    ), vt = (
      /*                */
      16
    ), ca = (
      /*                 */
      32
    ), Ln = (
      /*                     */
      64
    ), Ae = (
      /*                   */
      128
    ), lr = (
      /*            */
      256
    ), Yr = (
      /*                          */
      512
    ), gn = (
      /*                     */
      1024
    ), xr = (
      /*                      */
      2048
    ), Za = (
      /*                    */
      4096
    ), il = (
      /*                   */
      8192
    ), Wl = (
      /*             */
      16384
    ), yv = xr | me | Ln | Yr | gn | Wl, Oi = (
      /*               */
      32767
    ), ll = (
      /*                   */
      32768
    ), Bn = (
      /*                */
      65536
    ), gc = (
      /* */
      131072
    ), gv = (
      /*                       */
      1048576
    ), Ja = (
      /*                    */
      2097152
    ), fa = (
      /*                 */
      4194304
    ), ul = (
      /*                */
      8388608
    ), da = (
      /*               */
      16777216
    ), Gl = (
      /*              */
      33554432
    ), _r = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      me | gn | 0
    ), br = Mt | me | vt | ca | Yr | Za | il, ja = me | Ln | Yr | il, Dr = xr | vt, Pn = fa | ul | Ja, ql = nt.ReactCurrentOwner;
    function ol(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Mt | Za)) !== Re && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === ue ? a : null;
    }
    function Sc(e) {
      if (e.tag === Ee) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Ec(e) {
      return e.tag === ue ? e.stateNode.containerInfo : null;
    }
    function Ir(e) {
      return ol(e) === e;
    }
    function Qr(e) {
      {
        var t = ql.current;
        if (t !== null && t.tag === _e) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || E("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ue(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = Ka(e);
      return u ? ol(u) === u : !1;
    }
    function Ht(e) {
      if (ol(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function pa(e) {
      var t = e.alternate;
      if (!t) {
        var a = ol(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return Ht(s), e;
            if (v === u)
              return Ht(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var y = !1, g = s.child; g; ) {
            if (g === i) {
              y = !0, i = s, u = f;
              break;
            }
            if (g === u) {
              y = !0, u = s, i = f;
              break;
            }
            g = g.sibling;
          }
          if (!y) {
            for (g = f.child; g; ) {
              if (g === i) {
                y = !0, i = f, u = s;
                break;
              }
              if (g === u) {
                y = !0, u = f, i = s;
                break;
              }
              g = g.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== ue)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function fd(e) {
      var t = pa(e);
      return t !== null ? dd(t) : null;
    }
    function dd(e) {
      if (e.tag === ee || e.tag === Ce)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = dd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function pd(e) {
      var t = pa(e);
      return t !== null ? Cc(t) : null;
    }
    function Cc(e) {
      if (e.tag === ee || e.tag === Ce)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== je) {
          var a = Cc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var vd = A.unstable_scheduleCallback, Tc = A.unstable_cancelCallback, Sv = A.unstable_shouldYield, Pu = A.unstable_requestPaint, Sn = A.unstable_now, Xm = A.unstable_getCurrentPriorityLevel, kr = A.unstable_ImmediatePriority, $u = A.unstable_UserBlockingPriority, ei = A.unstable_NormalPriority, Yu = A.unstable_LowPriority, ps = A.unstable_IdlePriority, hd = A.unstable_yieldValue, md = A.unstable_setDisableYieldValue, sl = null, sn = null, q = null, Jn = !1, Wr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Ev(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return E("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Ge && (e = $e({}, e, {
          getLaneLabelMap: Rc,
          injectProfilingHooks: fl
        })), sl = t.inject(e), sn = t;
      } catch (a) {
        E("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Li(e, t) {
      if (sn && typeof sn.onScheduleFiberRoot == "function")
        try {
          sn.onScheduleFiberRoot(sl, e, t);
        } catch (a) {
          Jn || (Jn = !0, E("React instrumentation encountered an error: %s", a));
        }
    }
    function cl(e, t) {
      if (sn && typeof sn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Ae) === Ae;
          if (dt) {
            var i;
            switch (t) {
              case pn:
                i = kr;
                break;
              case Ni:
                i = $u;
                break;
              case ri:
                i = ei;
                break;
              case eo:
                i = ps;
                break;
              default:
                i = ei;
                break;
            }
            sn.onCommitFiberRoot(sl, e, i, a);
          }
        } catch (u) {
          Jn || (Jn = !0, E("React instrumentation encountered an error: %s", u));
        }
    }
    function yd(e) {
      if (sn && typeof sn.onPostCommitFiberRoot == "function")
        try {
          sn.onPostCommitFiberRoot(sl, e);
        } catch (t) {
          Jn || (Jn = !0, E("React instrumentation encountered an error: %s", t));
        }
    }
    function Cv(e) {
      if (sn && typeof sn.onCommitFiberUnmount == "function")
        try {
          sn.onCommitFiberUnmount(sl, e);
        } catch (t) {
          Jn || (Jn = !0, E("React instrumentation encountered an error: %s", t));
        }
    }
    function Nt(e) {
      if (typeof hd == "function" && (md(e), Zt(e)), sn && typeof sn.setStrictMode == "function")
        try {
          sn.setStrictMode(sl, e);
        } catch (t) {
          Jn || (Jn = !0, E("React instrumentation encountered an error: %s", t));
        }
    }
    function fl(e) {
      q = e;
    }
    function Rc() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < cn; a++) {
          var i = kv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Tv(e) {
      q !== null && typeof q.markCommitStarted == "function" && q.markCommitStarted(e);
    }
    function vs() {
      q !== null && typeof q.markCommitStopped == "function" && q.markCommitStopped();
    }
    function Iu(e) {
      q !== null && typeof q.markComponentRenderStarted == "function" && q.markComponentRenderStarted(e);
    }
    function Xl() {
      q !== null && typeof q.markComponentRenderStopped == "function" && q.markComponentRenderStopped();
    }
    function gd(e) {
      q !== null && typeof q.markComponentPassiveEffectMountStarted == "function" && q.markComponentPassiveEffectMountStarted(e);
    }
    function wc() {
      q !== null && typeof q.markComponentPassiveEffectMountStopped == "function" && q.markComponentPassiveEffectMountStopped();
    }
    function Rv(e) {
      q !== null && typeof q.markComponentPassiveEffectUnmountStarted == "function" && q.markComponentPassiveEffectUnmountStarted(e);
    }
    function wv() {
      q !== null && typeof q.markComponentPassiveEffectUnmountStopped == "function" && q.markComponentPassiveEffectUnmountStopped();
    }
    function xv(e) {
      q !== null && typeof q.markComponentLayoutEffectMountStarted == "function" && q.markComponentLayoutEffectMountStarted(e);
    }
    function Sd() {
      q !== null && typeof q.markComponentLayoutEffectMountStopped == "function" && q.markComponentLayoutEffectMountStopped();
    }
    function Qu(e) {
      q !== null && typeof q.markComponentLayoutEffectUnmountStarted == "function" && q.markComponentLayoutEffectUnmountStarted(e);
    }
    function hs() {
      q !== null && typeof q.markComponentLayoutEffectUnmountStopped == "function" && q.markComponentLayoutEffectUnmountStopped();
    }
    function _v(e, t, a) {
      q !== null && typeof q.markComponentErrored == "function" && q.markComponentErrored(e, t, a);
    }
    function bv(e, t, a) {
      q !== null && typeof q.markComponentSuspended == "function" && q.markComponentSuspended(e, t, a);
    }
    function Wu(e) {
      q !== null && typeof q.markLayoutEffectsStarted == "function" && q.markLayoutEffectsStarted(e);
    }
    function Dv() {
      q !== null && typeof q.markLayoutEffectsStopped == "function" && q.markLayoutEffectsStopped();
    }
    function ms(e) {
      q !== null && typeof q.markPassiveEffectsStarted == "function" && q.markPassiveEffectsStarted(e);
    }
    function ti() {
      q !== null && typeof q.markPassiveEffectsStopped == "function" && q.markPassiveEffectsStopped();
    }
    function Gu(e) {
      q !== null && typeof q.markRenderStarted == "function" && q.markRenderStarted(e);
    }
    function ys() {
      q !== null && typeof q.markRenderYielded == "function" && q.markRenderYielded();
    }
    function dl() {
      q !== null && typeof q.markRenderStopped == "function" && q.markRenderStopped();
    }
    function Ed(e) {
      q !== null && typeof q.markRenderScheduled == "function" && q.markRenderScheduled(e);
    }
    function qu(e, t) {
      q !== null && typeof q.markForceUpdateScheduled == "function" && q.markForceUpdateScheduled(e, t);
    }
    function xc(e, t) {
      q !== null && typeof q.markStateUpdateScheduled == "function" && q.markStateUpdateScheduled(e, t);
    }
    var we = (
      /*                         */
      0
    ), ge = (
      /*                 */
      1
    ), pt = (
      /*                    */
      2
    ), nn = (
      /*               */
      8
    ), va = (
      /*              */
      16
    ), gs = Math.clz32 ? Math.clz32 : qt, Cd = Math.log, Kl = Math.LN2;
    function qt(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Cd(t) / Kl | 0) | 0;
    }
    var cn = 31, j = (
      /*                        */
      0
    ), fn = (
      /*                          */
      0
    ), be = (
      /*                        */
      1
    ), ni = (
      /*    */
      2
    ), Mi = (
      /*             */
      4
    ), rn = (
      /*            */
      8
    ), ha = (
      /*                     */
      16
    ), Zl = (
      /*                */
      32
    ), pl = (
      /*                       */
      4194240
    ), Or = (
      /*                        */
      64
    ), Lr = (
      /*                        */
      128
    ), Jl = (
      /*                        */
      256
    ), Ss = (
      /*                        */
      512
    ), Es = (
      /*                        */
      1024
    ), _c = (
      /*                        */
      2048
    ), bc = (
      /*                        */
      4096
    ), Dc = (
      /*                        */
      8192
    ), kc = (
      /*                        */
      16384
    ), Oc = (
      /*                       */
      32768
    ), Lc = (
      /*                       */
      65536
    ), Mc = (
      /*                       */
      131072
    ), Nc = (
      /*                       */
      262144
    ), eu = (
      /*                       */
      524288
    ), zc = (
      /*                       */
      1048576
    ), Xu = (
      /*                       */
      2097152
    ), tu = (
      /*                            */
      130023424
    ), nu = (
      /*                             */
      4194304
    ), Cs = (
      /*                             */
      8388608
    ), Uc = (
      /*                             */
      16777216
    ), Ac = (
      /*                             */
      33554432
    ), Fc = (
      /*                             */
      67108864
    ), Td = nu, ru = (
      /*          */
      134217728
    ), Rd = (
      /*                          */
      268435455
    ), Ku = (
      /*               */
      268435456
    ), vl = (
      /*                        */
      536870912
    ), Gr = (
      /*                   */
      1073741824
    );
    function kv(e) {
      {
        if (e & be)
          return "Sync";
        if (e & ni)
          return "InputContinuousHydration";
        if (e & Mi)
          return "InputContinuous";
        if (e & rn)
          return "DefaultHydration";
        if (e & ha)
          return "Default";
        if (e & Zl)
          return "TransitionHydration";
        if (e & pl)
          return "Transition";
        if (e & tu)
          return "Retry";
        if (e & ru)
          return "SelectiveHydration";
        if (e & Ku)
          return "IdleHydration";
        if (e & vl)
          return "Idle";
        if (e & Gr)
          return "Offscreen";
      }
    }
    var zt = -1, Hc = Or, Ts = nu;
    function Zu(e) {
      switch (dn(e)) {
        case be:
          return be;
        case ni:
          return ni;
        case Mi:
          return Mi;
        case rn:
          return rn;
        case ha:
          return ha;
        case Zl:
          return Zl;
        case Or:
        case Lr:
        case Jl:
        case Ss:
        case Es:
        case _c:
        case bc:
        case Dc:
        case kc:
        case Oc:
        case Lc:
        case Mc:
        case Nc:
        case eu:
        case zc:
        case Xu:
          return e & pl;
        case nu:
        case Cs:
        case Uc:
        case Ac:
        case Fc:
          return e & tu;
        case ru:
          return ru;
        case Ku:
          return Ku;
        case vl:
          return vl;
        case Gr:
          return Gr;
        default:
          return E("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Rs(e, t) {
      var a = e.pendingLanes;
      if (a === j)
        return j;
      var i = j, u = e.suspendedLanes, s = e.pingedLanes, f = a & Rd;
      if (f !== j) {
        var p = f & ~u;
        if (p !== j)
          i = Zu(p);
        else {
          var v = f & s;
          v !== j && (i = Zu(v));
        }
      } else {
        var y = a & ~u;
        y !== j ? i = Zu(y) : s !== j && (i = Zu(s));
      }
      if (i === j)
        return j;
      if (t !== j && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === j) {
        var g = dn(i), _ = dn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= _ || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === ha && (_ & pl) !== j
        )
          return t;
      }
      (i & Mi) !== j && (i |= a & ha);
      var w = e.entangledLanes;
      if (w !== j)
        for (var M = e.entanglements, N = i & w; N > 0; ) {
          var F = ml(N), ae = 1 << F;
          i |= M[F], N &= ~ae;
        }
      return i;
    }
    function jc(e, t) {
      for (var a = e.eventTimes, i = zt; t > 0; ) {
        var u = ml(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Km(e, t) {
      switch (e) {
        case be:
        case ni:
        case Mi:
          return t + 250;
        case rn:
        case ha:
        case Zl:
        case Or:
        case Lr:
        case Jl:
        case Ss:
        case Es:
        case _c:
        case bc:
        case Dc:
        case kc:
        case Oc:
        case Lc:
        case Mc:
        case Nc:
        case eu:
        case zc:
        case Xu:
          return t + 5e3;
        case nu:
        case Cs:
        case Uc:
        case Ac:
        case Fc:
          return zt;
        case ru:
        case Ku:
        case vl:
        case Gr:
          return zt;
        default:
          return E("Should have found matching lanes. This is a bug in React."), zt;
      }
    }
    function Zm(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = ml(f), v = 1 << p, y = s[p];
        y === zt ? ((v & i) === j || (v & u) !== j) && (s[p] = Km(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Jm(e) {
      return Zu(e.pendingLanes);
    }
    function hl(e) {
      var t = e.pendingLanes & ~Gr;
      return t !== j ? t : t & Gr ? Gr : j;
    }
    function wd(e) {
      return (e & be) !== j;
    }
    function ws(e) {
      return (e & Rd) !== j;
    }
    function Ov(e) {
      return (e & tu) === e;
    }
    function Lv(e) {
      var t = be | Mi | ha;
      return (e & t) === j;
    }
    function Mv(e) {
      return (e & pl) === e;
    }
    function xs(e, t) {
      var a = ni | Mi | rn | ha;
      return (t & a) !== j;
    }
    function Nv(e, t) {
      return (t & e.expiredLanes) !== j;
    }
    function xd(e) {
      return (e & pl) !== j;
    }
    function zv() {
      var e = Hc;
      return Hc <<= 1, (Hc & pl) === j && (Hc = Or), e;
    }
    function Mr() {
      var e = Ts;
      return Ts <<= 1, (Ts & tu) === j && (Ts = nu), e;
    }
    function dn(e) {
      return e & -e;
    }
    function Ju(e) {
      return dn(e);
    }
    function ml(e) {
      return 31 - gs(e);
    }
    function Vc(e) {
      return ml(e);
    }
    function Nr(e, t) {
      return (e & t) !== j;
    }
    function au(e, t) {
      return (e & t) === t;
    }
    function Pe(e, t) {
      return e | t;
    }
    function _s(e, t) {
      return e & ~t;
    }
    function Bc(e, t) {
      return e & t;
    }
    function ey(e) {
      return e;
    }
    function Uv(e, t) {
      return e !== fn && e < t ? e : t;
    }
    function bs(e) {
      for (var t = [], a = 0; a < cn; a++)
        t.push(e);
      return t;
    }
    function iu(e, t, a) {
      e.pendingLanes |= t, t !== vl && (e.suspendedLanes = j, e.pingedLanes = j);
      var i = e.eventTimes, u = Vc(t);
      i[u] = a;
    }
    function Av(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = ml(i), s = 1 << u;
        a[u] = zt, i &= ~s;
      }
    }
    function Pc(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function $c(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = j, e.pingedLanes = j, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = ml(f), v = 1 << p;
        i[p] = j, u[p] = zt, s[p] = zt, f &= ~v;
      }
    }
    function _d(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = ml(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Fv(e, t) {
      var a = dn(t), i;
      switch (a) {
        case Mi:
          i = ni;
          break;
        case ha:
          i = rn;
          break;
        case Or:
        case Lr:
        case Jl:
        case Ss:
        case Es:
        case _c:
        case bc:
        case Dc:
        case kc:
        case Oc:
        case Lc:
        case Mc:
        case Nc:
        case eu:
        case zc:
        case Xu:
        case nu:
        case Cs:
        case Uc:
        case Ac:
        case Fc:
          i = Zl;
          break;
        case vl:
          i = Ku;
          break;
        default:
          i = fn;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== fn ? fn : i;
    }
    function Yc(e, t, a) {
      if (Wr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Vc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function bd(e, t) {
      if (Wr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = Vc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Ds(e, t) {
      return null;
    }
    var pn = be, Ni = Mi, ri = ha, eo = vl, to = fn;
    function ma() {
      return to;
    }
    function an(e) {
      to = e;
    }
    function er(e, t) {
      var a = to;
      try {
        return to = e, t();
      } finally {
        to = a;
      }
    }
    function ty(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function ny(e, t) {
      return e > t ? e : t;
    }
    function no(e, t) {
      return e !== 0 && e < t;
    }
    function $n(e) {
      var t = dn(e);
      return no(pn, t) ? no(Ni, t) ? ws(t) ? ri : eo : Ni : pn;
    }
    function Ic(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var oe;
    function ro(e) {
      oe = e;
    }
    function Dd(e) {
      oe(e);
    }
    var Qc;
    function ry(e) {
      Qc = e;
    }
    var ao;
    function Wc(e) {
      ao = e;
    }
    var Gc;
    function Hv(e) {
      Gc = e;
    }
    var kd;
    function jv(e) {
      kd = e;
    }
    var ks = !1, io = [], $t = null, Mn = null, ur = null, lo = /* @__PURE__ */ new Map(), uo = /* @__PURE__ */ new Map(), Nn = [], Vv = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function ai(e) {
      return Vv.indexOf(e) > -1;
    }
    function ay(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Od(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          $t = null;
          break;
        case "dragenter":
        case "dragleave":
          Mn = null;
          break;
        case "mouseover":
        case "mouseout":
          ur = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          lo.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          uo.delete(i);
          break;
        }
      }
    }
    function oo(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = ay(t, a, i, u, s);
        if (t !== null) {
          var p = go(t);
          p !== null && Qc(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function Bv(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return $t = oo($t, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return Mn = oo(Mn, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return ur = oo(ur, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return lo.set(y, oo(lo.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, _ = g.pointerId;
          return uo.set(_, oo(uo.get(_) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function Ld(e) {
      var t = Bs(e.target);
      if (t !== null) {
        var a = ol(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Ee) {
            var u = Sc(a);
            if (u !== null) {
              e.blockedOn = u, kd(e.priority, function() {
                ao(a);
              });
              return;
            }
          } else if (i === ue) {
            var s = a.stateNode;
            if (Ic(s)) {
              e.blockedOn = Ec(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function iy(e) {
      for (var t = Gc(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Nn.length && no(t, Nn[i].priority); i++)
        ;
      Nn.splice(i, 0, a), i === 0 && Ld(a);
    }
    function lu(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = tr(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          Wm(s), u.target.dispatchEvent(s), dv();
        } else {
          var f = go(i);
          return f !== null && Qc(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function qc(e, t, a) {
      lu(e) && a.delete(t);
    }
    function ya() {
      ks = !1, $t !== null && lu($t) && ($t = null), Mn !== null && lu(Mn) && (Mn = null), ur !== null && lu(ur) && (ur = null), lo.forEach(qc), uo.forEach(qc);
    }
    function Xe(e, t) {
      e.blockedOn === t && (e.blockedOn = null, ks || (ks = !0, A.unstable_scheduleCallback(A.unstable_NormalPriority, ya)));
    }
    function ln(e) {
      if (io.length > 0) {
        Xe(io[0], e);
        for (var t = 1; t < io.length; t++) {
          var a = io[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      $t !== null && Xe($t, e), Mn !== null && Xe(Mn, e), ur !== null && Xe(ur, e);
      var i = function(p) {
        return Xe(p, e);
      };
      lo.forEach(i), uo.forEach(i);
      for (var u = 0; u < Nn.length; u++) {
        var s = Nn[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Nn.length > 0; ) {
        var f = Nn[0];
        if (f.blockedOn !== null)
          break;
        Ld(f), f.blockedOn === null && Nn.shift();
      }
    }
    var jt = nt.ReactCurrentBatchConfig, wn = !0;
    function zr(e) {
      wn = !!e;
    }
    function so() {
      return wn;
    }
    function xn(e, t, a) {
      var i = Xc(t), u;
      switch (i) {
        case pn:
          u = Os;
          break;
        case Ni:
          u = uu;
          break;
        case ri:
        default:
          u = co;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function Os(e, t, a, i) {
      var u = ma(), s = jt.transition;
      jt.transition = null;
      try {
        an(pn), co(e, t, a, i);
      } finally {
        an(u), jt.transition = s;
      }
    }
    function uu(e, t, a, i) {
      var u = ma(), s = jt.transition;
      jt.transition = null;
      try {
        an(Ni), co(e, t, a, i);
      } finally {
        an(u), jt.transition = s;
      }
    }
    function co(e, t, a, i) {
      wn && Md(e, t, a, i);
    }
    function Md(e, t, a, i) {
      var u = tr(e, t, a, i);
      if (u === null) {
        Ty(e, t, i, yl, a), Od(e, i);
        return;
      }
      if (Bv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Od(e, i), t & ls && ai(e)) {
        for (; u !== null; ) {
          var s = go(u);
          s !== null && Dd(s);
          var f = tr(e, t, a, i);
          if (f === null && Ty(e, t, i, yl, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      Ty(e, t, i, null, a);
    }
    var yl = null;
    function tr(e, t, a, i) {
      yl = null;
      var u = Lt(i), s = Bs(u);
      if (s !== null) {
        var f = ol(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Ee) {
            var v = Sc(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === ue) {
            var y = f.stateNode;
            if (Ic(y))
              return Ec(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return yl = s, null;
    }
    function Xc(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return pn;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Ni;
        case "message": {
          var t = Xm();
          switch (t) {
            case kr:
              return pn;
            case $u:
              return Ni;
            case ei:
            case Yu:
              return ri;
            case ps:
              return eo;
            default:
              return ri;
          }
        }
        default:
          return ri;
      }
    }
    function fo(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function zi(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Kc(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Nd(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var ga = null, po = null, Sa = null;
    function Zc(e) {
      return ga = e, po = Ms(), !0;
    }
    function Ls() {
      ga = null, po = null, Sa = null;
    }
    function Jc() {
      if (Sa)
        return Sa;
      var e, t = po, a = t.length, i, u = Ms(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Sa = u.slice(e, p), Sa;
    }
    function Ms() {
      return "value" in ga ? ga.value : ga.textContent;
    }
    function ou(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function zn() {
      return !0;
    }
    function Ui() {
      return !1;
    }
    function Xt(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = zn : this.isDefaultPrevented = Ui, this.isPropagationStopped = Ui, this;
      }
      return $e(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = zn);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = zn);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: zn
      }), t;
    }
    var _n = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, ef = Xt(_n), su = $e({}, _n, {
      view: 0,
      detail: 0
    }), zd = Xt(su), Ud, ii, vo;
    function Ad(e) {
      e !== vo && (vo && e.type === "mousemove" ? (Ud = e.screenX - vo.screenX, ii = e.screenY - vo.screenY) : (Ud = 0, ii = 0), vo = e);
    }
    var li = $e({}, su, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Fd,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Ad(e), Ud);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : ii;
      }
    }), tf = Xt(li), cu = $e({}, li, {
      dataTransfer: 0
    }), Pv = Xt(cu), $v = $e({}, su, {
      relatedTarget: 0
    }), Ns = Xt($v), nf = $e({}, _n, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), ly = Xt(nf), uy = $e({}, _n, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Yv = Xt(uy), Iv = $e({}, _n, {
      data: 0
    }), gl = Xt(Iv), oy = gl, ho = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Qv = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function un(e) {
      if (e.key) {
        var t = ho[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = ou(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Qv[e.keyCode] || "Unidentified" : "";
    }
    var sy = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Wv(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = sy[e];
      return i ? !!a[i] : !1;
    }
    function Fd(e) {
      return Wv;
    }
    var cy = $e({}, su, {
      key: un,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Fd,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? ou(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? ou(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Gv = Xt(cy), qv = $e({}, li, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Xv = Xt(qv), Ea = $e({}, su, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Fd
    }), Hd = Xt(Ea), fy = $e({}, _n, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Sl = Xt(fy), rf = $e({}, li, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), fu = Xt(rf), af = [9, 13, 27, 32], lf = 229, zs = yn && "CompositionEvent" in window, Us = null;
    yn && "documentMode" in document && (Us = document.documentMode);
    var jd = yn && "TextEvent" in window && !Us, Kv = yn && (!zs || Us && Us > 8 && Us <= 11), Vd = 32, Bd = String.fromCharCode(Vd);
    function uf() {
      ta("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ta("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ta("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ta("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var As = !1;
    function Zv(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Pd(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function dy(e, t) {
      return e === "keydown" && t.keyCode === lf;
    }
    function $d(e, t) {
      switch (e) {
        case "keyup":
          return af.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== lf;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function of(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Fs(e) {
      return e.locale === "ko";
    }
    var El = !1;
    function sf(e, t, a, i, u) {
      var s, f;
      if (zs ? s = Pd(t) : El ? $d(t, i) && (s = "onCompositionEnd") : dy(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Kv && !Fs(i) && (!El && s === "onCompositionStart" ? El = Zc(u) : s === "onCompositionEnd" && El && (f = Jc()));
      var p = ah(a, s);
      if (p.length > 0) {
        var v = new gl(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = of(i);
          y !== null && (v.data = y);
        }
      }
    }
    function Jv(e, t) {
      switch (e) {
        case "compositionend":
          return of(t);
        case "keypress":
          var a = t.which;
          return a !== Vd ? null : (As = !0, Bd);
        case "textInput":
          var i = t.data;
          return i === Bd && As ? null : i;
        default:
          return null;
      }
    }
    function py(e, t) {
      if (El) {
        if (e === "compositionend" || !zs && $d(e, t)) {
          var a = Jc();
          return Ls(), El = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Zv(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Kv && !Fs(t) ? null : t.data;
        default:
          return null;
      }
    }
    function cf(e, t, a, i, u) {
      var s;
      if (jd ? s = Jv(t, i) : s = py(t, i), !s)
        return null;
      var f = ah(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new oy("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function vy(e, t, a, i, u, s, f) {
      sf(e, t, a, i, u), cf(e, t, a, i, u);
    }
    var Hs = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function eh(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Hs[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function ff(e) {
      if (!yn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function n() {
      ta("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function r(e, t, a, i) {
      Vu(i);
      var u = ah(t, "onChange");
      if (u.length > 0) {
        var s = new ef("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var l = null, o = null;
    function c(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function d(e) {
      var t = [];
      r(t, o, e, Lt(e)), os(m, t);
    }
    function m(e) {
      R0(e, 0);
    }
    function S(e) {
      var t = yf(e);
      if (Nu(t))
        return e;
    }
    function R(e, t) {
      if (e === "change")
        return t;
    }
    var z = !1;
    yn && (z = ff("input") && (!document.documentMode || document.documentMode > 9));
    function Y(e, t) {
      l = e, o = t, l.attachEvent("onpropertychange", $);
    }
    function I() {
      l && (l.detachEvent("onpropertychange", $), l = null, o = null);
    }
    function $(e) {
      e.propertyName === "value" && S(o) && d(e);
    }
    function te(e, t, a) {
      e === "focusin" ? (I(), Y(t, a)) : e === "focusout" && I();
    }
    function se(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return S(o);
    }
    function he(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function vn(e, t) {
      if (e === "click")
        return S(t);
    }
    function b(e, t) {
      if (e === "input" || e === "change")
        return S(t);
    }
    function x(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Oe(e, "number", e.value);
    }
    function O(e, t, a, i, u, s, f) {
      var p = a ? yf(a) : window, v, y;
      if (c(p) ? v = R : eh(p) ? z ? v = b : (v = se, y = te) : he(p) && (v = vn), v) {
        var g = v(t, a);
        if (g) {
          r(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && x(p);
    }
    function G() {
      Br("onMouseEnter", ["mouseout", "mouseover"]), Br("onMouseLeave", ["mouseout", "mouseover"]), Br("onPointerEnter", ["pointerout", "pointerover"]), Br("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function ye(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !pv(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (Bs(y) || rp(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var _ = u.ownerDocument;
          _ ? g = _.defaultView || _.parentWindow : g = window;
        }
        var w, M;
        if (v) {
          var N = i.relatedTarget || i.toElement;
          if (w = a, M = N ? Bs(N) : null, M !== null) {
            var F = ol(M);
            (M !== F || M.tag !== ee && M.tag !== Ce) && (M = null);
          }
        } else
          w = null, M = a;
        if (w !== M) {
          var ae = tf, xe = "onMouseLeave", Se = "onMouseEnter", it = "mouse";
          (t === "pointerout" || t === "pointerover") && (ae = Xv, xe = "onPointerLeave", Se = "onPointerEnter", it = "pointer");
          var Ke = w == null ? g : yf(w), D = M == null ? g : yf(M), H = new ae(xe, it + "leave", w, i, u);
          H.target = Ke, H.relatedTarget = D;
          var k = null, Q = Bs(u);
          if (Q === a) {
            var ie = new ae(Se, it + "enter", M, i, u);
            ie.target = D, ie.relatedTarget = Ke, k = ie;
          }
          xT(e, H, k, w, M);
        }
      }
    }
    function De(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var ce = typeof Object.is == "function" ? Object.is : De;
    function ke(e, t) {
      if (ce(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!nr.call(t, s) || !ce(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function bn(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function ht(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Ai(e, t) {
      for (var a = bn(e), i = 0, u = 0; a; ) {
        if (a.nodeType === wi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = bn(ht(a));
      }
    }
    function hy(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return iT(e, u, s, f, p);
    }
    function iT(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, _ = null;
      e: for (; ; ) {
        for (var w = null; g === t && (a === 0 || g.nodeType === wi) && (f = s + a), g === i && (u === 0 || g.nodeType === wi) && (p = s + u), g.nodeType === wi && (s += g.nodeValue.length), (w = g.firstChild) !== null; )
          _ = g, g = w;
        for (; ; ) {
          if (g === e)
            break e;
          if (_ === t && ++v === a && (f = s), _ === i && ++y === u && (p = s), (w = g.nextSibling) !== null)
            break;
          g = _, _ = g.parentNode;
        }
        g = w;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function lT(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = Ai(e, f), g = Ai(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var _ = a.createRange();
          _.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(_), u.extend(g.node, g.offset)) : (_.setEnd(g.node, g.offset), u.addRange(_));
        }
      }
    }
    function f0(e) {
      return e && e.nodeType === wi;
    }
    function d0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : f0(e) ? !1 : f0(t) ? d0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function uT(e) {
      return e && e.ownerDocument && d0(e.ownerDocument.documentElement, e);
    }
    function oT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function p0() {
      for (var e = window, t = qa(); t instanceof e.HTMLIFrameElement; ) {
        if (oT(t))
          e = t.contentWindow;
        else
          return t;
        t = qa(e.document);
      }
      return t;
    }
    function my(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function sT() {
      var e = p0();
      return {
        focusedElem: e,
        selectionRange: my(e) ? fT(e) : null
      };
    }
    function cT(e) {
      var t = p0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && uT(a)) {
        i !== null && my(a) && dT(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === wr && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function fT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = hy(e), t || {
        start: 0,
        end: 0
      };
    }
    function dT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : lT(e, t);
    }
    var pT = yn && "documentMode" in document && document.documentMode <= 11;
    function vT() {
      ta("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var df = null, yy = null, Yd = null, gy = !1;
    function hT(e) {
      if ("selectionStart" in e && my(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function mT(e) {
      return e.window === e ? e.document : e.nodeType === Pr ? e : e.ownerDocument;
    }
    function v0(e, t, a) {
      var i = mT(a);
      if (!(gy || df == null || df !== qa(i))) {
        var u = hT(df);
        if (!Yd || !ke(Yd, u)) {
          Yd = u;
          var s = ah(yy, "onSelect");
          if (s.length > 0) {
            var f = new ef("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = df;
          }
        }
      }
    }
    function yT(e, t, a, i, u, s, f) {
      var p = a ? yf(a) : window;
      switch (t) {
        case "focusin":
          (eh(p) || p.contentEditable === "true") && (df = p, yy = a, Yd = null);
          break;
        case "focusout":
          df = null, yy = null, Yd = null;
          break;
        case "mousedown":
          gy = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          gy = !1, v0(e, i, u);
          break;
        case "selectionchange":
          if (pT)
            break;
        case "keydown":
        case "keyup":
          v0(e, i, u);
      }
    }
    function th(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var pf = {
      animationend: th("Animation", "AnimationEnd"),
      animationiteration: th("Animation", "AnimationIteration"),
      animationstart: th("Animation", "AnimationStart"),
      transitionend: th("Transition", "TransitionEnd")
    }, Sy = {}, h0 = {};
    yn && (h0 = document.createElement("div").style, "AnimationEvent" in window || (delete pf.animationend.animation, delete pf.animationiteration.animation, delete pf.animationstart.animation), "TransitionEvent" in window || delete pf.transitionend.transition);
    function nh(e) {
      if (Sy[e])
        return Sy[e];
      if (!pf[e])
        return e;
      var t = pf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in h0)
          return Sy[e] = t[a];
      return e;
    }
    var m0 = nh("animationend"), y0 = nh("animationiteration"), g0 = nh("animationstart"), S0 = nh("transitionend"), E0 = /* @__PURE__ */ new Map(), C0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function mo(e, t) {
      E0.set(e, t), ta(t, [e]);
    }
    function gT() {
      for (var e = 0; e < C0.length; e++) {
        var t = C0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        mo(a, "on" + i);
      }
      mo(m0, "onAnimationEnd"), mo(y0, "onAnimationIteration"), mo(g0, "onAnimationStart"), mo("dblclick", "onDoubleClick"), mo("focusin", "onFocus"), mo("focusout", "onBlur"), mo(S0, "onTransitionEnd");
    }
    function ST(e, t, a, i, u, s, f) {
      var p = E0.get(t);
      if (p !== void 0) {
        var v = ef, y = t;
        switch (t) {
          case "keypress":
            if (ou(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = Gv;
            break;
          case "focusin":
            y = "focus", v = Ns;
            break;
          case "focusout":
            y = "blur", v = Ns;
            break;
          case "beforeblur":
          case "afterblur":
            v = Ns;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = tf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Pv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Hd;
            break;
          case m0:
          case y0:
          case g0:
            v = ly;
            break;
          case S0:
            v = Sl;
            break;
          case "scroll":
            v = zd;
            break;
          case "wheel":
            v = fu;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Yv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Xv;
            break;
        }
        var g = (s & ls) !== 0;
        {
          var _ = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", w = RT(a, p, i.type, g, _);
          if (w.length > 0) {
            var M = new v(p, y, null, i, u);
            e.push({
              event: M,
              listeners: w
            });
          }
        }
      }
    }
    gT(), G(), n(), vT(), uf();
    function ET(e, t, a, i, u, s, f) {
      ST(e, t, a, i, u, s);
      var p = (s & Qm) === 0;
      p && (ye(e, t, a, i, u), O(e, t, a, i, u), yT(e, t, a, i, u), vy(e, t, a, i, u));
    }
    var Id = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Ey = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Id));
    function T0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, cd(i, t, void 0, e), e.currentTarget = null;
    }
    function CT(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          T0(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], _ = g.instance, w = g.currentTarget, M = g.listener;
          if (_ !== i && e.isPropagationStopped())
            return;
          T0(e, M, w), i = _;
        }
    }
    function R0(e, t) {
      for (var a = (t & ls) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        CT(s, f, a);
      }
      Gm();
    }
    function TT(e, t, a, i, u) {
      var s = Lt(a), f = [];
      ET(f, e, i, a, s, t), R0(f, t);
    }
    function Kt(e, t) {
      Ey.has(e) || E('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = ZR(t), u = _T(e);
      i.has(u) || (w0(t, e, is, a), i.add(u));
    }
    function Cy(e, t, a) {
      Ey.has(e) && !t && E('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= ls), w0(a, e, i, t);
    }
    var rh = "_reactListening" + Math.random().toString(36).slice(2);
    function Qd(e) {
      if (!e[rh]) {
        e[rh] = !0, mn.forEach(function(a) {
          a !== "selectionchange" && (Ey.has(a) || Cy(a, !1, e), Cy(a, !0, e));
        });
        var t = e.nodeType === Pr ? e : e.ownerDocument;
        t !== null && (t[rh] || (t[rh] = !0, Cy("selectionchange", !1, t)));
      }
    }
    function w0(e, t, a, i, u) {
      var s = xn(e, t, a), f = void 0;
      ss && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Kc(e, t, s, f) : zi(e, t, s) : f !== void 0 ? Nd(e, t, s, f) : fo(e, t, s);
    }
    function x0(e, t) {
      return e === t || e.nodeType === tn && e.parentNode === t;
    }
    function Ty(e, t, a, i, u) {
      var s = i;
      if (!(t & vc) && !(t & is)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === ue || v === je) {
              var y = p.stateNode.containerInfo;
              if (x0(y, f))
                break;
              if (v === je)
                for (var g = p.return; g !== null; ) {
                  var _ = g.tag;
                  if (_ === ue || _ === je) {
                    var w = g.stateNode.containerInfo;
                    if (x0(w, f))
                      return;
                  }
                  g = g.return;
                }
              for (; y !== null; ) {
                var M = Bs(y);
                if (M === null)
                  return;
                var N = M.tag;
                if (N === ee || N === Ce) {
                  p = s = M;
                  continue e;
                }
                y = y.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      os(function() {
        return TT(e, t, a, s);
      });
    }
    function Wd(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function RT(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var _ = y, w = _.stateNode, M = _.tag;
        if (M === ee && w !== null && (g = w, p !== null)) {
          var N = Ql(y, p);
          N != null && v.push(Wd(y, N, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function ah(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === ee && f !== null) {
          var v = f, y = Ql(u, a);
          y != null && i.unshift(Wd(u, y, v));
          var g = Ql(u, t);
          g != null && i.push(Wd(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function vf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== ee);
      return e || null;
    }
    function wT(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = vf(s))
        u++;
      for (var f = 0, p = i; p; p = vf(p))
        f++;
      for (; u - f > 0; )
        a = vf(a), u--;
      for (; f - u > 0; )
        i = vf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = vf(a), i = vf(i);
      }
      return null;
    }
    function _0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, _ = v.tag;
        if (y !== null && y === i)
          break;
        if (_ === ee && g !== null) {
          var w = g;
          if (u) {
            var M = Ql(p, s);
            M != null && f.unshift(Wd(p, M, w));
          } else if (!u) {
            var N = Ql(p, s);
            N != null && f.push(Wd(p, N, w));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function xT(e, t, a, i, u) {
      var s = i && u ? wT(i, u) : null;
      i !== null && _0(e, t, i, s, !1), u !== null && a !== null && _0(e, a, u, s, !0);
    }
    function _T(e, t) {
      return e + "__bubble";
    }
    var Ca = !1, Gd = "dangerouslySetInnerHTML", ih = "suppressContentEditableWarning", yo = "suppressHydrationWarning", b0 = "autoFocus", js = "children", Vs = "style", lh = "__html", Ry, uh, qd, D0, oh, k0, O0;
    Ry = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, uh = function(e, t) {
      ju(e, t), uv(e, t), al(e, t, {
        registrationNameDependencies: Vr,
        possibleRegistrationNames: ea
      });
    }, k0 = yn && !document.documentMode, qd = function(e, t, a) {
      if (!Ca) {
        var i = sh(a), u = sh(t);
        u !== i && (Ca = !0, E("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, D0 = function(e) {
      if (!Ca) {
        Ca = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), E("Extra attributes from the server: %s", t);
      }
    }, oh = function(e, t) {
      t === !1 ? E("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : E("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, O0 = function(e, t) {
      var a = e.namespaceURI === Ri ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var bT = /\r\n?/g, DT = /\u0000|\uFFFD/g;
    function sh(e) {
      vi(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(bT, `
`).replace(DT, "");
    }
    function ch(e, t, a, i) {
      var u = sh(t), s = sh(e);
      if (s !== u && (i && (Ca || (Ca = !0, E('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && B))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function L0(e) {
      return e.nodeType === Pr ? e : e.ownerDocument;
    }
    function kT() {
    }
    function fh(e) {
      e.onclick = kT;
    }
    function OT(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Vs)
            f && Object.freeze(f), tv(t, f);
          else if (s === Gd) {
            var p = f ? f[lh] : void 0;
            p != null && Qp(t, p);
          } else if (s === js)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && Jo(t, f);
            } else typeof f == "number" && Jo(t, "" + f);
          else s === ih || s === yo || s === b0 || (Vr.hasOwnProperty(s) ? f != null && (typeof f != "function" && oh(s, f), s === "onScroll" && Kt("scroll", t)) : f != null && xu(t, s, f, u));
        }
    }
    function LT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Vs ? tv(e, f) : s === Gd ? Qp(e, f) : s === js ? Jo(e, f) : xu(e, s, f, i);
      }
    }
    function MT(e, t, a, i) {
      var u, s = L0(a), f, p = i;
      if (p === Ri && (p = Qf(e)), p === Ri) {
        if (u = $l(e, t), !u && e !== e.toLowerCase() && E("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var g = f;
          t.multiple ? g.multiple = !0 : t.size && (g.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Ri && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !nr.call(Ry, e) && (Ry[e] = !0, E("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function NT(e, t) {
      return L0(t).createTextNode(e);
    }
    function zT(e, t, a, i) {
      var u = $l(t, a);
      uh(t, a);
      var s;
      switch (t) {
        case "dialog":
          Kt("cancel", e), Kt("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Kt("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Id.length; f++)
            Kt(Id[f], e);
          s = a;
          break;
        case "source":
          Kt("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          Kt("error", e), Kt("load", e), s = a;
          break;
        case "details":
          Kt("toggle", e), s = a;
          break;
        case "input":
          C(e, a), s = h(e, a), Kt("invalid", e);
          break;
        case "option":
          Rt(e, a), s = a;
          break;
        case "select":
          Zo(e, a), s = Ko(e, a), Kt("invalid", e);
          break;
        case "textarea":
          Yp(e, a), s = If(e, a), Kt("invalid", e);
          break;
        default:
          s = a;
      }
      switch (ns(t, s), OT(t, e, i, s, u), t) {
        case "input":
          Ei(e), W(e, a, !1);
          break;
        case "textarea":
          Ei(e), uc(e);
          break;
        case "option":
          wt(e, a);
          break;
        case "select":
          Yf(e, a);
          break;
        default:
          typeof s.onClick == "function" && fh(e);
          break;
      }
    }
    function UT(e, t, a, i, u) {
      uh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = h(e, a), p = h(e, i), s = [];
          break;
        case "select":
          f = Ko(e, a), p = Ko(e, i), s = [];
          break;
        case "textarea":
          f = If(e, a), p = If(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && fh(e);
          break;
      }
      ns(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Vs) {
            var _ = f[v];
            for (y in _)
              _.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else v === Gd || v === js || v === ih || v === yo || v === b0 || (Vr.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var w = p[v], M = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || w === M || w == null && M == null))
          if (v === Vs)
            if (w && Object.freeze(w), M) {
              for (y in M)
                M.hasOwnProperty(y) && (!w || !w.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in w)
                w.hasOwnProperty(y) && M[y] !== w[y] && (g || (g = {}), g[y] = w[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = w;
          else if (v === Gd) {
            var N = w ? w[lh] : void 0, F = M ? M[lh] : void 0;
            N != null && F !== N && (s = s || []).push(v, N);
          } else v === js ? (typeof w == "string" || typeof w == "number") && (s = s || []).push(v, "" + w) : v === ih || v === yo || (Vr.hasOwnProperty(v) ? (w != null && (typeof w != "function" && oh(v, w), v === "onScroll" && Kt("scroll", e)), !s && M !== w && (s = [])) : (s = s || []).push(v, w));
      }
      return g && (nv(g, p[Vs]), (s = s || []).push(Vs, g)), s;
    }
    function AT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && L(e, u);
      var s = $l(a, i), f = $l(a, u);
      switch (LT(e, t, s, f), a) {
        case "input":
          U(e, u);
          break;
        case "textarea":
          Ip(e, u);
          break;
        case "select":
          Um(e, u);
          break;
      }
    }
    function FT(e) {
      {
        var t = e.toLowerCase();
        return fc.hasOwnProperty(t) && fc[t] || null;
      }
    }
    function HT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = $l(t, a), uh(t, a), t) {
        case "dialog":
          Kt("cancel", e), Kt("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Kt("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Id.length; y++)
            Kt(Id[y], e);
          break;
        case "source":
          Kt("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Kt("error", e), Kt("load", e);
          break;
        case "details":
          Kt("toggle", e);
          break;
        case "input":
          C(e, a), Kt("invalid", e);
          break;
        case "option":
          Rt(e, a);
          break;
        case "select":
          Zo(e, a), Kt("invalid", e);
          break;
        case "textarea":
          Yp(e, a), Kt("invalid", e);
          break;
      }
      ns(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, _ = 0; _ < g.length; _++) {
          var w = g[_].name.toLowerCase();
          switch (w) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[_].name);
          }
        }
      }
      var M = null;
      for (var N in a)
        if (a.hasOwnProperty(N)) {
          var F = a[N];
          if (N === js)
            typeof F == "string" ? e.textContent !== F && (a[yo] !== !0 && ch(e.textContent, F, s, f), M = [js, F]) : typeof F == "number" && e.textContent !== "" + F && (a[yo] !== !0 && ch(e.textContent, F, s, f), M = [js, "" + F]);
          else if (Vr.hasOwnProperty(N))
            F != null && (typeof F != "function" && oh(N, F), N === "onScroll" && Kt("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var ae = void 0, xe = p && ze ? null : ar(N);
            if (a[yo] !== !0) {
              if (!(N === ih || N === yo || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              N === "value" || N === "checked" || N === "selected")) {
                if (N === Gd) {
                  var Se = e.innerHTML, it = F ? F[lh] : void 0;
                  if (it != null) {
                    var Ke = O0(e, it);
                    Ke !== Se && qd(N, Se, Ke);
                  }
                } else if (N === Vs) {
                  if (v.delete(N), k0) {
                    var D = Im(F);
                    ae = e.getAttribute("style"), D !== ae && qd(N, ae, D);
                  }
                } else if (p && !ze)
                  v.delete(N.toLowerCase()), ae = Ia(e, N, F), F !== ae && qd(N, ae, F);
                else if (!on(N, xe, p) && !Ut(N, F, xe, p)) {
                  var H = !1;
                  if (xe !== null)
                    v.delete(xe.attributeName), ae = mi(e, N, F, xe);
                  else {
                    var k = i;
                    if (k === Ri && (k = Qf(t)), k === Ri)
                      v.delete(N.toLowerCase());
                    else {
                      var Q = FT(N);
                      Q !== null && Q !== N && (H = !0, v.delete(Q)), v.delete(N);
                    }
                    ae = Ia(e, N, F);
                  }
                  var ie = ze;
                  !ie && F !== ae && !H && qd(N, ae, F);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[yo] !== !0 && D0(v), t) {
        case "input":
          Ei(e), W(e, a, !0);
          break;
        case "textarea":
          Ei(e), uc(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && fh(e);
          break;
      }
      return M;
    }
    function jT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function wy(e, t) {
      {
        if (Ca)
          return;
        Ca = !0, E("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function xy(e, t) {
      {
        if (Ca)
          return;
        Ca = !0, E('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function _y(e, t, a) {
      {
        if (Ca)
          return;
        Ca = !0, E("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function by(e, t) {
      {
        if (t === "" || Ca)
          return;
        Ca = !0, E('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function VT(e, t, a) {
      switch (t) {
        case "input":
          de(e, a);
          return;
        case "textarea":
          Am(e, a);
          return;
        case "select":
          Pp(e, a);
          return;
      }
    }
    var Xd = function() {
    }, Kd = function() {
    };
    {
      var BT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], M0 = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], PT = M0.concat(["button"]), $T = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], N0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Kd = function(e, t) {
        var a = $e({}, e || N0), i = {
          tag: t
        };
        return M0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), PT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), BT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var YT = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return $T.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, IT = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, z0 = {};
      Xd = function(e, t, a) {
        a = a || N0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && E("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = YT(e, u) ? null : i, f = s ? null : IT(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!z0[y]) {
            z0[y] = !0;
            var g = e, _ = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", _ = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var w = "";
              v === "table" && e === "tr" && (w += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), E("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, _, w);
            } else
              E("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var dh = "suppressHydrationWarning", ph = "$", vh = "/$", Zd = "$?", Jd = "$!", QT = "style", Dy = null, ky = null;
    function WT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Pr:
        case Gf: {
          t = i === Pr ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : Wf(null, "");
          break;
        }
        default: {
          var s = i === tn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = Wf(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = Kd(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function GT(e, t, a) {
      {
        var i = e, u = Wf(i.namespace, t), s = Kd(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function tD(e) {
      return e;
    }
    function qT(e) {
      Dy = so(), ky = sT();
      var t = null;
      return zr(!1), t;
    }
    function XT(e) {
      cT(ky), zr(Dy), Dy = null, ky = null;
    }
    function KT(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (Xd(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = Kd(f.ancestorInfo, e);
          Xd(null, p, v);
        }
        s = f.namespace;
      }
      var y = MT(e, t, a, s);
      return np(u, y), Fy(y, t), y;
    }
    function ZT(e, t) {
      e.appendChild(t);
    }
    function JT(e, t, a, i, u) {
      switch (zT(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function eR(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = Kd(f.ancestorInfo, t);
          Xd(null, p, v);
        }
      }
      return UT(e, t, a, i);
    }
    function Oy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function tR(e, t, a, i) {
      {
        var u = a;
        Xd(null, e, u.ancestorInfo);
      }
      var s = NT(e, t);
      return np(i, s), s;
    }
    function nR() {
      var e = window.event;
      return e === void 0 ? ri : Xc(e.type);
    }
    var Ly = typeof setTimeout == "function" ? setTimeout : void 0, rR = typeof clearTimeout == "function" ? clearTimeout : void 0, My = -1, U0 = typeof Promise == "function" ? Promise : void 0, aR = typeof queueMicrotask == "function" ? queueMicrotask : typeof U0 < "u" ? function(e) {
      return U0.resolve(null).then(e).catch(iR);
    } : Ly;
    function iR(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function lR(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function uR(e, t, a, i, u, s) {
      AT(e, t, a, i, u), Fy(e, u);
    }
    function A0(e) {
      Jo(e, "");
    }
    function oR(e, t, a) {
      e.nodeValue = a;
    }
    function sR(e, t) {
      e.appendChild(t);
    }
    function cR(e, t) {
      var a;
      e.nodeType === tn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && fh(a);
    }
    function fR(e, t, a) {
      e.insertBefore(t, a);
    }
    function dR(e, t, a) {
      e.nodeType === tn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function pR(e, t) {
      e.removeChild(t);
    }
    function vR(e, t) {
      e.nodeType === tn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Ny(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === tn) {
          var s = u.data;
          if (s === vh)
            if (i === 0) {
              e.removeChild(u), ln(t);
              return;
            } else
              i--;
          else (s === ph || s === Zd || s === Jd) && i++;
        }
        a = u;
      } while (a);
      ln(t);
    }
    function hR(e, t) {
      e.nodeType === tn ? Ny(e.parentNode, t) : e.nodeType === wr && Ny(e, t), ln(e);
    }
    function mR(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function yR(e) {
      e.nodeValue = "";
    }
    function gR(e, t) {
      e = e;
      var a = t[QT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = nl("display", i);
    }
    function SR(e, t) {
      e.nodeValue = t;
    }
    function ER(e) {
      e.nodeType === wr ? e.textContent = "" : e.nodeType === Pr && e.documentElement && e.removeChild(e.documentElement);
    }
    function CR(e, t, a) {
      return e.nodeType !== wr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function TR(e, t) {
      return t === "" || e.nodeType !== wi ? null : e;
    }
    function RR(e) {
      return e.nodeType !== tn ? null : e;
    }
    function F0(e) {
      return e.data === Zd;
    }
    function zy(e) {
      return e.data === Jd;
    }
    function wR(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function xR(e, t) {
      e._reactRetry = t;
    }
    function hh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === wr || t === wi)
          break;
        if (t === tn) {
          var a = e.data;
          if (a === ph || a === Jd || a === Zd)
            break;
          if (a === vh)
            return null;
        }
      }
      return e;
    }
    function ep(e) {
      return hh(e.nextSibling);
    }
    function _R(e) {
      return hh(e.firstChild);
    }
    function bR(e) {
      return hh(e.firstChild);
    }
    function DR(e) {
      return hh(e.nextSibling);
    }
    function kR(e, t, a, i, u, s, f) {
      np(s, e), Fy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & ge) !== we;
      return HT(e, t, a, p, i, y, f);
    }
    function OR(e, t, a, i) {
      return np(a, e), a.mode & ge, jT(e, t);
    }
    function LR(e, t) {
      np(t, e);
    }
    function MR(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === tn) {
          var i = t.data;
          if (i === vh) {
            if (a === 0)
              return ep(t);
            a--;
          } else (i === ph || i === Jd || i === Zd) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function H0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === tn) {
          var i = t.data;
          if (i === ph || i === Jd || i === Zd) {
            if (a === 0)
              return t;
            a--;
          } else i === vh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function NR(e) {
      ln(e);
    }
    function zR(e) {
      ln(e);
    }
    function UR(e) {
      return e !== "head" && e !== "body";
    }
    function AR(e, t, a, i) {
      var u = !0;
      ch(t.nodeValue, a, i, u);
    }
    function FR(e, t, a, i, u, s) {
      if (t[dh] !== !0) {
        var f = !0;
        ch(i.nodeValue, u, s, f);
      }
    }
    function HR(e, t) {
      t.nodeType === wr ? wy(e, t) : t.nodeType === tn || xy(e, t);
    }
    function jR(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === wr ? wy(a, t) : t.nodeType === tn || xy(a, t));
      }
    }
    function VR(e, t, a, i, u) {
      (u || t[dh] !== !0) && (i.nodeType === wr ? wy(a, i) : i.nodeType === tn || xy(a, i));
    }
    function BR(e, t, a) {
      _y(e, t);
    }
    function PR(e, t) {
      by(e, t);
    }
    function $R(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && _y(i, t);
      }
    }
    function YR(e, t) {
      {
        var a = e.parentNode;
        a !== null && by(a, t);
      }
    }
    function IR(e, t, a, i, u, s) {
      (s || t[dh] !== !0) && _y(a, i);
    }
    function QR(e, t, a, i, u) {
      (u || t[dh] !== !0) && by(a, i);
    }
    function WR(e) {
      E("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function GR(e) {
      Qd(e);
    }
    var hf = Math.random().toString(36).slice(2), mf = "__reactFiber$" + hf, Uy = "__reactProps$" + hf, tp = "__reactContainer$" + hf, Ay = "__reactEvents$" + hf, qR = "__reactListeners$" + hf, XR = "__reactHandles$" + hf;
    function KR(e) {
      delete e[mf], delete e[Uy], delete e[Ay], delete e[qR], delete e[XR];
    }
    function np(e, t) {
      t[mf] = e;
    }
    function mh(e, t) {
      t[tp] = e;
    }
    function j0(e) {
      e[tp] = null;
    }
    function rp(e) {
      return !!e[tp];
    }
    function Bs(e) {
      var t = e[mf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[tp] || a[mf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = H0(e); u !== null; ) {
              var s = u[mf];
              if (s)
                return s;
              u = H0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function go(e) {
      var t = e[mf] || e[tp];
      return t && (t.tag === ee || t.tag === Ce || t.tag === Ee || t.tag === ue) ? t : null;
    }
    function yf(e) {
      if (e.tag === ee || e.tag === Ce)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function yh(e) {
      return e[Uy] || null;
    }
    function Fy(e, t) {
      e[Uy] = t;
    }
    function ZR(e) {
      var t = e[Ay];
      return t === void 0 && (t = e[Ay] = /* @__PURE__ */ new Set()), t;
    }
    var V0 = {}, B0 = nt.ReactDebugCurrentFrame;
    function gh(e) {
      if (e) {
        var t = e._owner, a = tt(e.type, e._source, t ? t.type : null);
        B0.setExtraStackFrame(a);
      } else
        B0.setExtraStackFrame(null);
    }
    function Fi(e, t, a, i, u) {
      {
        var s = Function.call.bind(nr);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (gh(u), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), gh(null)), p instanceof Error && !(p.message in V0) && (V0[p.message] = !0, gh(u), E("Failed %s type: %s", a, p.message), gh(null));
          }
      }
    }
    var Hy = [], Sh;
    Sh = [];
    var du = -1;
    function So(e) {
      return {
        current: e
      };
    }
    function Ur(e, t) {
      if (du < 0) {
        E("Unexpected pop.");
        return;
      }
      t !== Sh[du] && E("Unexpected Fiber popped."), e.current = Hy[du], Hy[du] = null, Sh[du] = null, du--;
    }
    function Ar(e, t, a) {
      du++, Hy[du] = e.current, Sh[du] = a, e.current = t;
    }
    var jy;
    jy = {};
    var Va = {};
    Object.freeze(Va);
    var pu = So(Va), Cl = So(!1), Vy = Va;
    function gf(e, t, a) {
      return a && Tl(t) ? Vy : pu.current;
    }
    function P0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Sf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return Va;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Ue(e) || "Unknown";
          Fi(i, s, "context", p);
        }
        return u && P0(e, t, s), s;
      }
    }
    function Eh() {
      return Cl.current;
    }
    function Tl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Ch(e) {
      Ur(Cl, e), Ur(pu, e);
    }
    function By(e) {
      Ur(Cl, e), Ur(pu, e);
    }
    function $0(e, t, a) {
      {
        if (pu.current !== Va)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Ar(pu, t, e), Ar(Cl, a, e);
      }
    }
    function Y0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Ue(e) || "Unknown";
            jy[s] || (jy[s] = !0, E("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Ue(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Ue(e) || "Unknown";
          Fi(u, f, "child context", v);
        }
        return $e({}, a, f);
      }
    }
    function Th(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || Va;
        return Vy = pu.current, Ar(pu, a, e), Ar(Cl, Cl.current, e), !0;
      }
    }
    function I0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = Y0(e, t, Vy);
          i.__reactInternalMemoizedMergedChildContext = u, Ur(Cl, e), Ur(pu, e), Ar(pu, u, e), Ar(Cl, a, e);
        } else
          Ur(Cl, e), Ar(Cl, a, e);
      }
    }
    function JR(e) {
      {
        if (!Ir(e) || e.tag !== _e)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case ue:
              return t.stateNode.context;
            case _e: {
              var a = t.type;
              if (Tl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Eo = 0, Rh = 1, vu = null, Py = !1, $y = !1;
    function Q0(e) {
      vu === null ? vu = [e] : vu.push(e);
    }
    function ew(e) {
      Py = !0, Q0(e);
    }
    function W0() {
      Py && Co();
    }
    function Co() {
      if (!$y && vu !== null) {
        $y = !0;
        var e = 0, t = ma();
        try {
          var a = !0, i = vu;
          for (an(pn); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          vu = null, Py = !1;
        } catch (s) {
          throw vu !== null && (vu = vu.slice(e + 1)), vd(kr, Co), s;
        } finally {
          an(t), $y = !1;
        }
      }
      return null;
    }
    var Ef = [], Cf = 0, wh = null, xh = 0, ui = [], oi = 0, Ps = null, hu = 1, mu = "";
    function tw(e) {
      return Ys(), (e.flags & gv) !== Re;
    }
    function nw(e) {
      return Ys(), xh;
    }
    function rw() {
      var e = mu, t = hu, a = t & ~aw(t);
      return a.toString(32) + e;
    }
    function $s(e, t) {
      Ys(), Ef[Cf++] = xh, Ef[Cf++] = wh, wh = e, xh = t;
    }
    function G0(e, t, a) {
      Ys(), ui[oi++] = hu, ui[oi++] = mu, ui[oi++] = Ps, Ps = e;
      var i = hu, u = mu, s = _h(i) - 1, f = i & ~(1 << s), p = a + 1, v = _h(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, _ = (f & g).toString(32), w = f >> y, M = s - y, N = _h(t) + M, F = p << M, ae = F | w, xe = _ + u;
        hu = 1 << N | ae, mu = xe;
      } else {
        var Se = p << s, it = Se | f, Ke = u;
        hu = 1 << v | it, mu = Ke;
      }
    }
    function Yy(e) {
      Ys();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        $s(e, a), G0(e, a, i);
      }
    }
    function _h(e) {
      return 32 - gs(e);
    }
    function aw(e) {
      return 1 << _h(e) - 1;
    }
    function Iy(e) {
      for (; e === wh; )
        wh = Ef[--Cf], Ef[Cf] = null, xh = Ef[--Cf], Ef[Cf] = null;
      for (; e === Ps; )
        Ps = ui[--oi], ui[oi] = null, mu = ui[--oi], ui[oi] = null, hu = ui[--oi], ui[oi] = null;
    }
    function iw() {
      return Ys(), Ps !== null ? {
        id: hu,
        overflow: mu
      } : null;
    }
    function lw(e, t) {
      Ys(), ui[oi++] = hu, ui[oi++] = mu, ui[oi++] = Ps, hu = t.id, mu = t.overflow, Ps = e;
    }
    function Ys() {
      sr() || E("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var or = null, si = null, Hi = !1, Is = !1, To = null;
    function uw() {
      Hi && E("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function q0() {
      Is = !0;
    }
    function ow() {
      return Is;
    }
    function sw(e) {
      var t = e.stateNode.containerInfo;
      return si = bR(t), or = e, Hi = !0, To = null, Is = !1, !0;
    }
    function cw(e, t, a) {
      return si = DR(t), or = e, Hi = !0, To = null, Is = !1, a !== null && lw(e, a), !0;
    }
    function X0(e, t) {
      switch (e.tag) {
        case ue: {
          HR(e.stateNode.containerInfo, t);
          break;
        }
        case ee: {
          var a = (e.mode & ge) !== we;
          VR(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case Ee: {
          var i = e.memoizedState;
          i.dehydrated !== null && jR(i.dehydrated, t);
          break;
        }
      }
    }
    function K0(e, t) {
      X0(e, t);
      var a = pb();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= vt) : i.push(a);
    }
    function Qy(e, t) {
      {
        if (Is)
          return;
        switch (e.tag) {
          case ue: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case ee:
                var i = t.type;
                t.pendingProps, BR(a, i);
                break;
              case Ce:
                var u = t.pendingProps;
                PR(a, u);
                break;
            }
            break;
          }
          case ee: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case ee: {
                var v = t.type, y = t.pendingProps, g = (e.mode & ge) !== we;
                IR(
                  s,
                  f,
                  p,
                  v,
                  y,
                  // TODO: Delete this argument when we remove the legacy root API.
                  g
                );
                break;
              }
              case Ce: {
                var _ = t.pendingProps, w = (e.mode & ge) !== we;
                QR(
                  s,
                  f,
                  p,
                  _,
                  // TODO: Delete this argument when we remove the legacy root API.
                  w
                );
                break;
              }
            }
            break;
          }
          case Ee: {
            var M = e.memoizedState, N = M.dehydrated;
            if (N !== null) switch (t.tag) {
              case ee:
                var F = t.type;
                t.pendingProps, $R(N, F);
                break;
              case Ce:
                var ae = t.pendingProps;
                YR(N, ae);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function Z0(e, t) {
      t.flags = t.flags & ~Za | Mt, Qy(e, t);
    }
    function J0(e, t) {
      switch (e.tag) {
        case ee: {
          var a = e.type;
          e.pendingProps;
          var i = CR(t, a);
          return i !== null ? (e.stateNode = i, or = e, si = _R(i), !0) : !1;
        }
        case Ce: {
          var u = e.pendingProps, s = TR(t, u);
          return s !== null ? (e.stateNode = s, or = e, si = null, !0) : !1;
        }
        case Ee: {
          var f = RR(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: iw(),
              retryLane: Gr
            };
            e.memoizedState = p;
            var v = vb(f);
            return v.return = e, e.child = v, or = e, si = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Wy(e) {
      return (e.mode & ge) !== we && (e.flags & Ae) === Re;
    }
    function Gy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function qy(e) {
      if (Hi) {
        var t = si;
        if (!t) {
          Wy(e) && (Qy(or, e), Gy()), Z0(or, e), Hi = !1, or = e;
          return;
        }
        var a = t;
        if (!J0(e, t)) {
          Wy(e) && (Qy(or, e), Gy()), t = ep(a);
          var i = or;
          if (!t || !J0(e, t)) {
            Z0(or, e), Hi = !1, or = e;
            return;
          }
          K0(i, a);
        }
      }
    }
    function fw(e, t, a) {
      var i = e.stateNode, u = !Is, s = kR(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function dw(e) {
      var t = e.stateNode, a = e.memoizedProps, i = OR(t, a, e);
      if (i) {
        var u = or;
        if (u !== null)
          switch (u.tag) {
            case ue: {
              var s = u.stateNode.containerInfo, f = (u.mode & ge) !== we;
              AR(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case ee: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & ge) !== we;
              FR(
                p,
                v,
                y,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                g
              );
              break;
            }
          }
      }
      return i;
    }
    function pw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      LR(a, e);
    }
    function vw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return MR(a);
    }
    function eE(e) {
      for (var t = e.return; t !== null && t.tag !== ee && t.tag !== ue && t.tag !== Ee; )
        t = t.return;
      or = t;
    }
    function bh(e) {
      if (e !== or)
        return !1;
      if (!Hi)
        return eE(e), Hi = !0, !1;
      if (e.tag !== ue && (e.tag !== ee || UR(e.type) && !Oy(e.type, e.memoizedProps))) {
        var t = si;
        if (t)
          if (Wy(e))
            tE(e), Gy();
          else
            for (; t; )
              K0(e, t), t = ep(t);
      }
      return eE(e), e.tag === Ee ? si = vw(e) : si = or ? ep(e.stateNode) : null, !0;
    }
    function hw() {
      return Hi && si !== null;
    }
    function tE(e) {
      for (var t = si; t; )
        X0(e, t), t = ep(t);
    }
    function Tf() {
      or = null, si = null, Hi = !1, Is = !1;
    }
    function nE() {
      To !== null && (XC(To), To = null);
    }
    function sr() {
      return Hi;
    }
    function Xy(e) {
      To === null ? To = [e] : To.push(e);
    }
    var mw = nt.ReactCurrentBatchConfig, yw = null;
    function gw() {
      return mw.transition;
    }
    var ji = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var Sw = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & nn && (t = a), a = a.return;
        return t;
      }, Qs = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, ap = [], ip = [], lp = [], up = [], op = [], sp = [], Ws = /* @__PURE__ */ new Set();
      ji.recordUnsafeLifecycleWarnings = function(e, t) {
        Ws.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && ap.push(e), e.mode & nn && typeof t.UNSAFE_componentWillMount == "function" && ip.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && lp.push(e), e.mode & nn && typeof t.UNSAFE_componentWillReceiveProps == "function" && up.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && op.push(e), e.mode & nn && typeof t.UNSAFE_componentWillUpdate == "function" && sp.push(e));
      }, ji.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        ap.length > 0 && (ap.forEach(function(w) {
          e.add(Ue(w) || "Component"), Ws.add(w.type);
        }), ap = []);
        var t = /* @__PURE__ */ new Set();
        ip.length > 0 && (ip.forEach(function(w) {
          t.add(Ue(w) || "Component"), Ws.add(w.type);
        }), ip = []);
        var a = /* @__PURE__ */ new Set();
        lp.length > 0 && (lp.forEach(function(w) {
          a.add(Ue(w) || "Component"), Ws.add(w.type);
        }), lp = []);
        var i = /* @__PURE__ */ new Set();
        up.length > 0 && (up.forEach(function(w) {
          i.add(Ue(w) || "Component"), Ws.add(w.type);
        }), up = []);
        var u = /* @__PURE__ */ new Set();
        op.length > 0 && (op.forEach(function(w) {
          u.add(Ue(w) || "Component"), Ws.add(w.type);
        }), op = []);
        var s = /* @__PURE__ */ new Set();
        if (sp.length > 0 && (sp.forEach(function(w) {
          s.add(Ue(w) || "Component"), Ws.add(w.type);
        }), sp = []), t.size > 0) {
          var f = Qs(t);
          E(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Qs(i);
          E(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Qs(s);
          E(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = Qs(e);
          ut(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = Qs(a);
          ut(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var _ = Qs(u);
          ut(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, _);
        }
      };
      var Dh = /* @__PURE__ */ new Map(), rE = /* @__PURE__ */ new Set();
      ji.recordLegacyContextWarning = function(e, t) {
        var a = Sw(e);
        if (a === null) {
          E("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!rE.has(e.type)) {
          var i = Dh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Dh.set(a, i)), i.push(e));
        }
      }, ji.flushLegacyContextWarning = function() {
        Dh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Ue(s) || "Component"), rE.add(s.type);
            });
            var u = Qs(i);
            try {
              Gt(a), E(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              At();
            }
          }
        });
      }, ji.discardPendingWarnings = function() {
        ap = [], ip = [], lp = [], up = [], op = [], sp = [], Dh = /* @__PURE__ */ new Map();
      };
    }
    function Vi(e, t) {
      if (e && e.defaultProps) {
        var a = $e({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var Ky = So(null), Zy;
    Zy = {};
    var kh = null, Rf = null, Jy = null, Oh = !1;
    function Lh() {
      kh = null, Rf = null, Jy = null, Oh = !1;
    }
    function aE() {
      Oh = !0;
    }
    function iE() {
      Oh = !1;
    }
    function lE(e, t, a) {
      Ar(Ky, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Zy && E("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Zy;
    }
    function eg(e, t) {
      var a = Ky.current;
      Ur(Ky, t), e._currentValue = a;
    }
    function tg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (au(i.childLanes, t) ? u !== null && !au(u.childLanes, t) && (u.childLanes = Pe(u.childLanes, t)) : (i.childLanes = Pe(i.childLanes, t), u !== null && (u.childLanes = Pe(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && E("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ew(e, t, a) {
      Cw(e, t, a);
    }
    function Cw(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === _e) {
                var p = Ju(a), v = yu(zt, p);
                v.tag = Nh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, _ = g.pending;
                  _ === null ? v.next = v : (v.next = _.next, _.next = v), g.pending = v;
                }
              }
              i.lanes = Pe(i.lanes, a);
              var w = i.alternate;
              w !== null && (w.lanes = Pe(w.lanes, a)), tg(i.return, a, e), s.lanes = Pe(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === Bt)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Pt) {
          var M = i.return;
          if (M === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          M.lanes = Pe(M.lanes, a);
          var N = M.alternate;
          N !== null && (N.lanes = Pe(N.lanes, a)), tg(M, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var F = u.sibling;
            if (F !== null) {
              F.return = u.return, u = F;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function wf(e, t) {
      kh = e, Rf = null, Jy = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Nr(a.lanes, t) && Rp(), a.firstContext = null);
      }
    }
    function Un(e) {
      Oh && E("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Jy !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Rf === null) {
          if (kh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Rf = a, kh.dependencies = {
            lanes: j,
            firstContext: a
          };
        } else
          Rf = Rf.next = a;
      }
      return t;
    }
    var Gs = null;
    function ng(e) {
      Gs === null ? Gs = [e] : Gs.push(e);
    }
    function Tw() {
      if (Gs !== null) {
        for (var e = 0; e < Gs.length; e++) {
          var t = Gs[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        Gs = null;
      }
    }
    function uE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, ng(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Mh(e, i);
    }
    function Rw(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, ng(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function ww(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, ng(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Mh(e, i);
    }
    function Ta(e, t) {
      return Mh(e, t);
    }
    var xw = Mh;
    function Mh(e, t) {
      e.lanes = Pe(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Pe(a.lanes, t)), a === null && (e.flags & (Mt | Za)) !== Re && o1(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = Pe(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = Pe(a.childLanes, t) : (u.flags & (Mt | Za)) !== Re && o1(e), i = u, u = u.return;
      if (i.tag === ue) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var oE = 0, sE = 1, Nh = 2, rg = 3, zh = !1, ag, Uh;
    ag = !1, Uh = null;
    function ig(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: j
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function cE(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function yu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: oE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Ro(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Uh === u && !ag && (E("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), ag = !0), x_()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, xw(e, a);
      } else
        return ww(e, u, t, a);
    }
    function Ah(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (xd(a)) {
          var s = u.lanes;
          s = Bc(s, e.pendingLanes);
          var f = Pe(s, a);
          u.lanes = f, _d(e, f);
        }
      }
    }
    function lg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var g = a.lastBaseUpdate;
      g === null ? a.firstBaseUpdate = t : g.next = t, a.lastBaseUpdate = t;
    }
    function _w(e, t, a, i, u, s) {
      switch (a.tag) {
        case sE: {
          var f = a.payload;
          if (typeof f == "function") {
            aE();
            var p = f.call(s, i, u);
            {
              if (e.mode & nn) {
                Nt(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  Nt(!1);
                }
              }
              iE();
            }
            return p;
          }
          return f;
        }
        case rg:
          e.flags = e.flags & ~Bn | Ae;
        case oE: {
          var v = a.payload, y;
          if (typeof v == "function") {
            aE(), y = v.call(s, i, u);
            {
              if (e.mode & nn) {
                Nt(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  Nt(!1);
                }
              }
              iE();
            }
          } else
            y = v;
          return y == null ? i : $e({}, i, y);
        }
        case Nh:
          return zh = !0, i;
      }
      return i;
    }
    function Fh(e, t, a, i) {
      var u = e.updateQueue;
      zh = !1, Uh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var _ = g.updateQueue, w = _.lastBaseUpdate;
          w !== f && (w === null ? _.firstBaseUpdate = y : w.next = y, _.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var M = u.baseState, N = j, F = null, ae = null, xe = null, Se = s;
        do {
          var it = Se.lane, Ke = Se.eventTime;
          if (au(i, it)) {
            if (xe !== null) {
              var H = {
                eventTime: Ke,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: fn,
                tag: Se.tag,
                payload: Se.payload,
                callback: Se.callback,
                next: null
              };
              xe = xe.next = H;
            }
            M = _w(e, u, Se, M, t, a);
            var k = Se.callback;
            if (k !== null && // If the update was already committed, we should not queue its
            // callback again.
            Se.lane !== fn) {
              e.flags |= Ln;
              var Q = u.effects;
              Q === null ? u.effects = [Se] : Q.push(Se);
            }
          } else {
            var D = {
              eventTime: Ke,
              lane: it,
              tag: Se.tag,
              payload: Se.payload,
              callback: Se.callback,
              next: null
            };
            xe === null ? (ae = xe = D, F = M) : xe = xe.next = D, N = Pe(N, it);
          }
          if (Se = Se.next, Se === null) {
            if (p = u.shared.pending, p === null)
              break;
            var ie = p, J = ie.next;
            ie.next = null, Se = J, u.lastBaseUpdate = ie, u.shared.pending = null;
          }
        } while (!0);
        xe === null && (F = M), u.baseState = F, u.firstBaseUpdate = ae, u.lastBaseUpdate = xe;
        var Le = u.shared.interleaved;
        if (Le !== null) {
          var Be = Le;
          do
            N = Pe(N, Be.lane), Be = Be.next;
          while (Be !== Le);
        } else s === null && (u.shared.lanes = j);
        Up(N), e.lanes = N, e.memoizedState = M;
      }
      Uh = null;
    }
    function bw(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function fE() {
      zh = !1;
    }
    function Hh() {
      return zh;
    }
    function dE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, bw(f, a));
        }
    }
    var ug = {}, pE = new le.Component().refs, og, sg, cg, fg, dg, vE, jh, pg, vg, hg;
    {
      og = /* @__PURE__ */ new Set(), sg = /* @__PURE__ */ new Set(), cg = /* @__PURE__ */ new Set(), fg = /* @__PURE__ */ new Set(), pg = /* @__PURE__ */ new Set(), dg = /* @__PURE__ */ new Set(), vg = /* @__PURE__ */ new Set(), hg = /* @__PURE__ */ new Set();
      var hE = /* @__PURE__ */ new Set();
      jh = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          hE.has(a) || (hE.add(a), E("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, vE = function(e, t) {
        if (t === void 0) {
          var a = st(e) || "Component";
          dg.has(a) || (dg.add(a), E("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(ug, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(ug);
    }
    function mg(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & nn) {
          Nt(!0);
          try {
            s = a(i, u);
          } finally {
            Nt(!1);
          }
        }
        vE(t, s);
      }
      var f = s == null ? u : $e({}, u, s);
      if (e.memoizedState = f, e.lanes === j) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var yg = {
      isMounted: Qr,
      enqueueSetState: function(e, t, a) {
        var i = Ka(e), u = Kr(), s = Lo(i), f = yu(u, s);
        f.payload = t, a != null && (jh(a, "setState"), f.callback = a);
        var p = Ro(i, f, s);
        p !== null && (Kn(p, i, s, u), Ah(p, i, s)), xc(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Ka(e), u = Kr(), s = Lo(i), f = yu(u, s);
        f.tag = sE, f.payload = t, a != null && (jh(a, "replaceState"), f.callback = a);
        var p = Ro(i, f, s);
        p !== null && (Kn(p, i, s, u), Ah(p, i, s)), xc(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Ka(e), i = Kr(), u = Lo(a), s = yu(i, u);
        s.tag = Nh, t != null && (jh(t, "forceUpdate"), s.callback = t);
        var f = Ro(a, s, u);
        f !== null && (Kn(f, a, u, i), Ah(f, a, u)), qu(a, u);
      }
    };
    function mE(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & nn) {
            Nt(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              Nt(!1);
            }
          }
          v === void 0 && E("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", st(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !ke(a, i) || !ke(u, s) : !0;
    }
    function Dw(e, t, a) {
      var i = e.stateNode;
      {
        var u = st(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? E("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : E("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && E("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && E("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && E("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && E("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), i.contextTypes && E("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !vg.has(t) && (vg.add(t), E("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && E("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && E("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", st(t) || "A pure component"), typeof i.componentDidUnmount == "function" && E("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && E("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && E("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && E("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && E("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && E("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !cg.has(t) && (cg.add(t), E("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", st(t))), typeof i.getDerivedStateFromProps == "function" && E("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && E("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && E("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || ct(p)) && E("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && E("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function yE(e, t) {
      t.updater = yg, e.stateNode = t, yc(t, e), t._reactInternalInstance = ug;
    }
    function gE(e, t, a) {
      var i = !1, u = Va, s = Va, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === Ao && f._context === void 0
        );
        if (!p && !hg.has(t)) {
          hg.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === bu ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", E("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", st(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = Un(f);
      else {
        u = gf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? Sf(e, u) : Va;
      }
      var g = new t(a, s);
      if (e.mode & nn) {
        Nt(!0);
        try {
          g = new t(a, s);
        } finally {
          Nt(!1);
        }
      }
      var _ = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      yE(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && _ === null) {
          var w = st(t) || "Component";
          sg.has(w) || (sg.add(w), E("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", w, g.state === null ? "null" : "undefined", w));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var M = null, N = null, F = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? M = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (M = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? N = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (N = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? F = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (F = "UNSAFE_componentWillUpdate"), M !== null || N !== null || F !== null) {
            var ae = st(t) || "Component", xe = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            fg.has(ae) || (fg.add(ae), E(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ae, xe, M !== null ? `
  ` + M : "", N !== null ? `
  ` + N : "", F !== null ? `
  ` + F : ""));
          }
        }
      }
      return i && P0(e, u, s), g;
    }
    function kw(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (E("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ue(e) || "Component"), yg.enqueueReplaceState(t, t.state, null));
    }
    function SE(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Ue(e) || "Component";
          og.has(s) || (og.add(s), E("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        yg.enqueueReplaceState(t, t.state, null);
      }
    }
    function gg(e, t, a, i) {
      Dw(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = pE, ig(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = Un(s);
      else {
        var f = gf(e, t, !0);
        u.context = Sf(e, f);
      }
      {
        if (u.state === a) {
          var p = st(t) || "Component";
          pg.has(p) || (pg.add(p), E("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & nn && ji.recordLegacyContextWarning(e, u), ji.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (mg(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (kw(e, u), Fh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = me;
        y |= fa, (e.mode & va) !== we && (y |= da), e.flags |= y;
      }
    }
    function Ow(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = Va;
      if (typeof p == "object" && p !== null)
        v = Un(p);
      else {
        var y = gf(e, t, !0);
        v = Sf(e, y);
      }
      var g = t.getDerivedStateFromProps, _ = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !_ && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && SE(e, u, a, v), fE();
      var w = e.memoizedState, M = u.state = w;
      if (Fh(e, a, u, i), M = e.memoizedState, s === a && w === M && !Eh() && !Hh()) {
        if (typeof u.componentDidMount == "function") {
          var N = me;
          N |= fa, (e.mode & va) !== we && (N |= da), e.flags |= N;
        }
        return !1;
      }
      typeof g == "function" && (mg(e, t, g, a), M = e.memoizedState);
      var F = Hh() || mE(e, t, s, a, w, M, v);
      if (F) {
        if (!_ && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var ae = me;
          ae |= fa, (e.mode & va) !== we && (ae |= da), e.flags |= ae;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var xe = me;
          xe |= fa, (e.mode & va) !== we && (xe |= da), e.flags |= xe;
        }
        e.memoizedProps = a, e.memoizedState = M;
      }
      return u.props = a, u.state = M, u.context = v, F;
    }
    function Lw(e, t, a, i, u) {
      var s = t.stateNode;
      cE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : Vi(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, _ = Va;
      if (typeof g == "object" && g !== null)
        _ = Un(g);
      else {
        var w = gf(t, a, !0);
        _ = Sf(t, w);
      }
      var M = a.getDerivedStateFromProps, N = typeof M == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !N && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== _) && SE(t, s, i, _), fE();
      var F = t.memoizedState, ae = s.state = F;
      if (Fh(t, i, s, u), ae = t.memoizedState, f === v && F === ae && !Eh() && !Hh() && !T)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= me), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= gn), !1;
      typeof M == "function" && (mg(t, a, M, i), ae = t.memoizedState);
      var xe = Hh() || mE(t, a, p, i, F, ae, _) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      T;
      return xe ? (!N && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, ae, _), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, ae, _)), typeof s.componentDidUpdate == "function" && (t.flags |= me), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= gn)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= me), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= gn), t.memoizedProps = i, t.memoizedState = ae), s.props = i, s.state = ae, s.context = _, xe;
    }
    var Sg, Eg, Cg, Tg, Rg, EE = function(e, t) {
    };
    Sg = !1, Eg = !1, Cg = {}, Tg = {}, Rg = {}, EE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ue(t) || "Component";
        Tg[a] || (Tg[a] = !0, E('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function cp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & nn || Je) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var u = Ue(e) || "Component";
          Cg[u] || (E('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), Cg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== _e)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          jn(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(_) {
            var w = v.refs;
            w === pE && (w = v.refs = {}), _ === null ? delete w[y] : w[y] = _;
          };
          return g._stringRef = y, g;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Vh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Bh(e) {
      {
        var t = Ue(e) || "Component";
        if (Rg[t])
          return;
        Rg[t] = !0, E("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function CE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function TE(e) {
      function t(D, H) {
        if (e) {
          var k = D.deletions;
          k === null ? (D.deletions = [H], D.flags |= vt) : k.push(H);
        }
      }
      function a(D, H) {
        if (!e)
          return null;
        for (var k = H; k !== null; )
          t(D, k), k = k.sibling;
        return null;
      }
      function i(D, H) {
        for (var k = /* @__PURE__ */ new Map(), Q = H; Q !== null; )
          Q.key !== null ? k.set(Q.key, Q) : k.set(Q.index, Q), Q = Q.sibling;
        return k;
      }
      function u(D, H) {
        var k = nc(D, H);
        return k.index = 0, k.sibling = null, k;
      }
      function s(D, H, k) {
        if (D.index = k, !e)
          return D.flags |= gv, H;
        var Q = D.alternate;
        if (Q !== null) {
          var ie = Q.index;
          return ie < H ? (D.flags |= Mt, H) : ie;
        } else
          return D.flags |= Mt, H;
      }
      function f(D) {
        return e && D.alternate === null && (D.flags |= Mt), D;
      }
      function p(D, H, k, Q) {
        if (H === null || H.tag !== Ce) {
          var ie = XS(k, D.mode, Q);
          return ie.return = D, ie;
        } else {
          var J = u(H, k);
          return J.return = D, J;
        }
      }
      function v(D, H, k, Q) {
        var ie = k.type;
        if (ie === Ma)
          return g(D, H, k.props.children, Q, k.key);
        if (H !== null && (H.elementType === ie || // Keep this check inline so it only runs on the false path:
        d1(H, k) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof ie == "object" && ie !== null && ie.$$typeof === On && CE(ie) === H.type)) {
          var J = u(H, k.props);
          return J.ref = cp(D, H, k), J.return = D, J._debugSource = k._source, J._debugOwner = k._owner, J;
        }
        var Le = qS(k, D.mode, Q);
        return Le.ref = cp(D, H, k), Le.return = D, Le;
      }
      function y(D, H, k, Q) {
        if (H === null || H.tag !== je || H.stateNode.containerInfo !== k.containerInfo || H.stateNode.implementation !== k.implementation) {
          var ie = KS(k, D.mode, Q);
          return ie.return = D, ie;
        } else {
          var J = u(H, k.children || []);
          return J.return = D, J;
        }
      }
      function g(D, H, k, Q, ie) {
        if (H === null || H.tag !== rt) {
          var J = No(k, D.mode, Q, ie);
          return J.return = D, J;
        } else {
          var Le = u(H, k);
          return Le.return = D, Le;
        }
      }
      function _(D, H, k) {
        if (typeof H == "string" && H !== "" || typeof H == "number") {
          var Q = XS("" + H, D.mode, k);
          return Q.return = D, Q;
        }
        if (typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case aa: {
              var ie = qS(H, D.mode, k);
              return ie.ref = cp(D, null, H), ie.return = D, ie;
            }
            case ia: {
              var J = KS(H, D.mode, k);
              return J.return = D, J;
            }
            case On: {
              var Le = H._payload, Be = H._init;
              return _(D, Be(Le), k);
            }
          }
          if (ct(H) || Qa(H)) {
            var Ot = No(H, D.mode, k, null);
            return Ot.return = D, Ot;
          }
          Vh(D, H);
        }
        return typeof H == "function" && Bh(D), null;
      }
      function w(D, H, k, Q) {
        var ie = H !== null ? H.key : null;
        if (typeof k == "string" && k !== "" || typeof k == "number")
          return ie !== null ? null : p(D, H, "" + k, Q);
        if (typeof k == "object" && k !== null) {
          switch (k.$$typeof) {
            case aa:
              return k.key === ie ? v(D, H, k, Q) : null;
            case ia:
              return k.key === ie ? y(D, H, k, Q) : null;
            case On: {
              var J = k._payload, Le = k._init;
              return w(D, H, Le(J), Q);
            }
          }
          if (ct(k) || Qa(k))
            return ie !== null ? null : g(D, H, k, Q, null);
          Vh(D, k);
        }
        return typeof k == "function" && Bh(D), null;
      }
      function M(D, H, k, Q, ie) {
        if (typeof Q == "string" && Q !== "" || typeof Q == "number") {
          var J = D.get(k) || null;
          return p(H, J, "" + Q, ie);
        }
        if (typeof Q == "object" && Q !== null) {
          switch (Q.$$typeof) {
            case aa: {
              var Le = D.get(Q.key === null ? k : Q.key) || null;
              return v(H, Le, Q, ie);
            }
            case ia: {
              var Be = D.get(Q.key === null ? k : Q.key) || null;
              return y(H, Be, Q, ie);
            }
            case On:
              var Ot = Q._payload, mt = Q._init;
              return M(D, H, k, mt(Ot), ie);
          }
          if (ct(Q) || Qa(Q)) {
            var Dn = D.get(k) || null;
            return g(H, Dn, Q, ie, null);
          }
          Vh(H, Q);
        }
        return typeof Q == "function" && Bh(H), null;
      }
      function N(D, H, k) {
        {
          if (typeof D != "object" || D === null)
            return H;
          switch (D.$$typeof) {
            case aa:
            case ia:
              EE(D, k);
              var Q = D.key;
              if (typeof Q != "string")
                break;
              if (H === null) {
                H = /* @__PURE__ */ new Set(), H.add(Q);
                break;
              }
              if (!H.has(Q)) {
                H.add(Q);
                break;
              }
              E("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", Q);
              break;
            case On:
              var ie = D._payload, J = D._init;
              N(J(ie), H, k);
              break;
          }
        }
        return H;
      }
      function F(D, H, k, Q) {
        for (var ie = null, J = 0; J < k.length; J++) {
          var Le = k[J];
          ie = N(Le, ie, D);
        }
        for (var Be = null, Ot = null, mt = H, Dn = 0, yt = 0, En = null; mt !== null && yt < k.length; yt++) {
          mt.index > yt ? (En = mt, mt = null) : En = mt.sibling;
          var Hr = w(D, mt, k[yt], Q);
          if (Hr === null) {
            mt === null && (mt = En);
            break;
          }
          e && mt && Hr.alternate === null && t(D, mt), Dn = s(Hr, Dn, yt), Ot === null ? Be = Hr : Ot.sibling = Hr, Ot = Hr, mt = En;
        }
        if (yt === k.length) {
          if (a(D, mt), sr()) {
            var mr = yt;
            $s(D, mr);
          }
          return Be;
        }
        if (mt === null) {
          for (; yt < k.length; yt++) {
            var Pa = _(D, k[yt], Q);
            Pa !== null && (Dn = s(Pa, Dn, yt), Ot === null ? Be = Pa : Ot.sibling = Pa, Ot = Pa);
          }
          if (sr()) {
            var Zr = yt;
            $s(D, Zr);
          }
          return Be;
        }
        for (var Jr = i(D, mt); yt < k.length; yt++) {
          var jr = M(Jr, D, yt, k[yt], Q);
          jr !== null && (e && jr.alternate !== null && Jr.delete(jr.key === null ? yt : jr.key), Dn = s(jr, Dn, yt), Ot === null ? Be = jr : Ot.sibling = jr, Ot = jr);
        }
        if (e && Jr.forEach(function(Bf) {
          return t(D, Bf);
        }), sr()) {
          var Ru = yt;
          $s(D, Ru);
        }
        return Be;
      }
      function ae(D, H, k, Q) {
        var ie = Qa(k);
        if (typeof ie != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          k[Symbol.toStringTag] === "Generator" && (Eg || E("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Eg = !0), k.entries === ie && (Sg || E("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Sg = !0);
          var J = ie.call(k);
          if (J)
            for (var Le = null, Be = J.next(); !Be.done; Be = J.next()) {
              var Ot = Be.value;
              Le = N(Ot, Le, D);
            }
        }
        var mt = ie.call(k);
        if (mt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Dn = null, yt = null, En = H, Hr = 0, mr = 0, Pa = null, Zr = mt.next(); En !== null && !Zr.done; mr++, Zr = mt.next()) {
          En.index > mr ? (Pa = En, En = null) : Pa = En.sibling;
          var Jr = w(D, En, Zr.value, Q);
          if (Jr === null) {
            En === null && (En = Pa);
            break;
          }
          e && En && Jr.alternate === null && t(D, En), Hr = s(Jr, Hr, mr), yt === null ? Dn = Jr : yt.sibling = Jr, yt = Jr, En = Pa;
        }
        if (Zr.done) {
          if (a(D, En), sr()) {
            var jr = mr;
            $s(D, jr);
          }
          return Dn;
        }
        if (En === null) {
          for (; !Zr.done; mr++, Zr = mt.next()) {
            var Ru = _(D, Zr.value, Q);
            Ru !== null && (Hr = s(Ru, Hr, mr), yt === null ? Dn = Ru : yt.sibling = Ru, yt = Ru);
          }
          if (sr()) {
            var Bf = mr;
            $s(D, Bf);
          }
          return Dn;
        }
        for (var Vp = i(D, En); !Zr.done; mr++, Zr = mt.next()) {
          var Ol = M(Vp, D, mr, Zr.value, Q);
          Ol !== null && (e && Ol.alternate !== null && Vp.delete(Ol.key === null ? mr : Ol.key), Hr = s(Ol, Hr, mr), yt === null ? Dn = Ol : yt.sibling = Ol, yt = Ol);
        }
        if (e && Vp.forEach(function(Ib) {
          return t(D, Ib);
        }), sr()) {
          var Yb = mr;
          $s(D, Yb);
        }
        return Dn;
      }
      function xe(D, H, k, Q) {
        if (H !== null && H.tag === Ce) {
          a(D, H.sibling);
          var ie = u(H, k);
          return ie.return = D, ie;
        }
        a(D, H);
        var J = XS(k, D.mode, Q);
        return J.return = D, J;
      }
      function Se(D, H, k, Q) {
        for (var ie = k.key, J = H; J !== null; ) {
          if (J.key === ie) {
            var Le = k.type;
            if (Le === Ma) {
              if (J.tag === rt) {
                a(D, J.sibling);
                var Be = u(J, k.props.children);
                return Be.return = D, Be._debugSource = k._source, Be._debugOwner = k._owner, Be;
              }
            } else if (J.elementType === Le || // Keep this check inline so it only runs on the false path:
            d1(J, k) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Le == "object" && Le !== null && Le.$$typeof === On && CE(Le) === J.type) {
              a(D, J.sibling);
              var Ot = u(J, k.props);
              return Ot.ref = cp(D, J, k), Ot.return = D, Ot._debugSource = k._source, Ot._debugOwner = k._owner, Ot;
            }
            a(D, J);
            break;
          } else
            t(D, J);
          J = J.sibling;
        }
        if (k.type === Ma) {
          var mt = No(k.props.children, D.mode, Q, k.key);
          return mt.return = D, mt;
        } else {
          var Dn = qS(k, D.mode, Q);
          return Dn.ref = cp(D, H, k), Dn.return = D, Dn;
        }
      }
      function it(D, H, k, Q) {
        for (var ie = k.key, J = H; J !== null; ) {
          if (J.key === ie)
            if (J.tag === je && J.stateNode.containerInfo === k.containerInfo && J.stateNode.implementation === k.implementation) {
              a(D, J.sibling);
              var Le = u(J, k.children || []);
              return Le.return = D, Le;
            } else {
              a(D, J);
              break;
            }
          else
            t(D, J);
          J = J.sibling;
        }
        var Be = KS(k, D.mode, Q);
        return Be.return = D, Be;
      }
      function Ke(D, H, k, Q) {
        var ie = typeof k == "object" && k !== null && k.type === Ma && k.key === null;
        if (ie && (k = k.props.children), typeof k == "object" && k !== null) {
          switch (k.$$typeof) {
            case aa:
              return f(Se(D, H, k, Q));
            case ia:
              return f(it(D, H, k, Q));
            case On:
              var J = k._payload, Le = k._init;
              return Ke(D, H, Le(J), Q);
          }
          if (ct(k))
            return F(D, H, k, Q);
          if (Qa(k))
            return ae(D, H, k, Q);
          Vh(D, k);
        }
        return typeof k == "string" && k !== "" || typeof k == "number" ? f(xe(D, H, "" + k, Q)) : (typeof k == "function" && Bh(D), a(D, H));
      }
      return Ke;
    }
    var xf = TE(!0), RE = TE(!1);
    function Mw(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = nc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = nc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Nw(e, t) {
      for (var a = e.child; a !== null; )
        ob(a, t), a = a.sibling;
    }
    var fp = {}, wo = So(fp), dp = So(fp), Ph = So(fp);
    function $h(e) {
      if (e === fp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function wE() {
      var e = $h(Ph.current);
      return e;
    }
    function wg(e, t) {
      Ar(Ph, t, e), Ar(dp, e, e), Ar(wo, fp, e);
      var a = WT(t);
      Ur(wo, e), Ar(wo, a, e);
    }
    function _f(e) {
      Ur(wo, e), Ur(dp, e), Ur(Ph, e);
    }
    function xg() {
      var e = $h(wo.current);
      return e;
    }
    function xE(e) {
      $h(Ph.current);
      var t = $h(wo.current), a = GT(t, e.type);
      t !== a && (Ar(dp, e, e), Ar(wo, a, e));
    }
    function _g(e) {
      dp.current === e && (Ur(wo, e), Ur(dp, e));
    }
    var zw = 0, _E = 1, bE = 1, pp = 2, Bi = So(zw);
    function bg(e, t) {
      return (e & t) !== 0;
    }
    function bf(e) {
      return e & _E;
    }
    function Dg(e, t) {
      return e & _E | t;
    }
    function Uw(e, t) {
      return e | t;
    }
    function xo(e, t) {
      Ar(Bi, t, e);
    }
    function Df(e) {
      Ur(Bi, e);
    }
    function Aw(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Yh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Ee) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || F0(i) || zy(i))
              return t;
          }
        } else if (t.tag === ft && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Ae) !== Re;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Ra = (
      /*   */
      0
    ), Yn = (
      /* */
      1
    ), Rl = (
      /*  */
      2
    ), In = (
      /*    */
      4
    ), cr = (
      /*   */
      8
    ), kg = [];
    function Og() {
      for (var e = 0; e < kg.length; e++) {
        var t = kg[e];
        t._workInProgressVersionPrimary = null;
      }
      kg.length = 0;
    }
    function Fw(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var ne = nt.ReactCurrentDispatcher, vp = nt.ReactCurrentBatchConfig, Lg, kf;
    Lg = /* @__PURE__ */ new Set();
    var qs = j, kt = null, Qn = null, Wn = null, Ih = !1, hp = !1, mp = 0, Hw = 0, jw = 25, V = null, ci = null, _o = -1, Mg = !1;
    function Ct() {
      {
        var e = V;
        ci === null ? ci = [e] : ci.push(e);
      }
    }
    function K() {
      {
        var e = V;
        ci !== null && (_o++, ci[_o] !== e && Vw(e));
      }
    }
    function Of(e) {
      e != null && !ct(e) && E("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", V, typeof e);
    }
    function Vw(e) {
      {
        var t = Ue(kt);
        if (!Lg.has(t) && (Lg.add(t), ci !== null)) {
          for (var a = "", i = 30, u = 0; u <= _o; u++) {
            for (var s = ci[u], f = u === _o ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          E(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function Fr() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Ng(e, t) {
      if (Mg)
        return !1;
      if (t === null)
        return E("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", V), !1;
      e.length !== t.length && E(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, V, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!ce(e[a], t[a]))
          return !1;
      return !0;
    }
    function Lf(e, t, a, i, u, s) {
      qs = s, kt = t, ci = e !== null ? e._debugHookTypes : null, _o = -1, Mg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = j, e !== null && e.memoizedState !== null ? ne.current = qE : ci !== null ? ne.current = GE : ne.current = WE;
      var f = a(i, u);
      if (hp) {
        var p = 0;
        do {
          if (hp = !1, mp = 0, p >= jw)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Mg = !1, Qn = null, Wn = null, t.updateQueue = null, _o = -1, ne.current = XE, f = a(i, u);
        } while (hp);
      }
      ne.current = am, t._debugHookTypes = ci;
      var v = Qn !== null && Qn.next !== null;
      if (qs = j, kt = null, Qn = null, Wn = null, V = null, ci = null, _o = -1, e !== null && (e.flags & Pn) !== (t.flags & Pn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & ge) !== we && E("Internal React error: Expected static flag was missing. Please notify the React team."), Ih = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Mf() {
      var e = mp !== 0;
      return mp = 0, e;
    }
    function DE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & va) !== we ? t.flags &= ~(Gl | da | xr | me) : t.flags &= ~(xr | me), e.lanes = _s(e.lanes, a);
    }
    function kE() {
      if (ne.current = am, Ih) {
        for (var e = kt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Ih = !1;
      }
      qs = j, kt = null, Qn = null, Wn = null, ci = null, _o = -1, V = null, PE = !1, hp = !1, mp = 0;
    }
    function wl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Wn === null ? kt.memoizedState = Wn = e : Wn = Wn.next = e, Wn;
    }
    function fi() {
      var e;
      if (Qn === null) {
        var t = kt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Qn.next;
      var a;
      if (Wn === null ? a = kt.memoizedState : a = Wn.next, a !== null)
        Wn = a, a = Wn.next, Qn = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Qn = e;
        var i = {
          memoizedState: Qn.memoizedState,
          baseState: Qn.baseState,
          baseQueue: Qn.baseQueue,
          queue: Qn.queue,
          next: null
        };
        Wn === null ? kt.memoizedState = Wn = i : Wn = Wn.next = i;
      }
      return Wn;
    }
    function OE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function zg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Ug(e, t, a) {
      var i = wl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: j,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = Yw.bind(null, kt, s);
      return [i.memoizedState, f];
    }
    function Ag(e, t, a) {
      var i = fi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = Qn, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && E("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, _ = s.baseState, w = null, M = null, N = null, F = g;
        do {
          var ae = F.lane;
          if (au(qs, ae)) {
            if (N !== null) {
              var Se = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: fn,
                action: F.action,
                hasEagerState: F.hasEagerState,
                eagerState: F.eagerState,
                next: null
              };
              N = N.next = Se;
            }
            if (F.hasEagerState)
              _ = F.eagerState;
            else {
              var it = F.action;
              _ = e(_, it);
            }
          } else {
            var xe = {
              lane: ae,
              action: F.action,
              hasEagerState: F.hasEagerState,
              eagerState: F.eagerState,
              next: null
            };
            N === null ? (M = N = xe, w = _) : N = N.next = xe, kt.lanes = Pe(kt.lanes, ae), Up(ae);
          }
          F = F.next;
        } while (F !== null && F !== g);
        N === null ? w = _ : N.next = M, ce(_, i.memoizedState) || Rp(), i.memoizedState = _, i.baseState = w, i.baseQueue = N, u.lastRenderedState = _;
      }
      var Ke = u.interleaved;
      if (Ke !== null) {
        var D = Ke;
        do {
          var H = D.lane;
          kt.lanes = Pe(kt.lanes, H), Up(H), D = D.next;
        } while (D !== Ke);
      } else f === null && (u.lanes = j);
      var k = u.dispatch;
      return [i.memoizedState, k];
    }
    function Fg(e, t, a) {
      var i = fi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, y = v;
        do {
          var g = y.action;
          p = e(p, g), y = y.next;
        } while (y !== v);
        ce(p, i.memoizedState) || Rp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function nD(e, t, a) {
    }
    function rD(e, t, a) {
    }
    function Hg(e, t, a) {
      var i = kt, u = wl(), s, f = sr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), kf || s !== a() && (E("The result of getServerSnapshot should be cached to avoid an infinite loop"), kf = !0);
      } else {
        if (s = t(), !kf) {
          var p = t();
          ce(s, p) || (E("The result of getSnapshot should be cached to avoid an infinite loop"), kf = !0);
        }
        var v = Tm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        xs(v, qs) || LE(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, Xh(NE.bind(null, i, y, e), [e]), i.flags |= xr, yp(Yn | cr, ME.bind(null, i, y, s, t), void 0, null), s;
    }
    function Qh(e, t, a) {
      var i = kt, u = fi(), s = t();
      if (!kf) {
        var f = t();
        ce(s, f) || (E("The result of getSnapshot should be cached to avoid an infinite loop"), kf = !0);
      }
      var p = u.memoizedState, v = !ce(p, s);
      v && (u.memoizedState = s, Rp());
      var y = u.queue;
      if (Sp(NE.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Wn !== null && Wn.memoizedState.tag & Yn) {
        i.flags |= xr, yp(Yn | cr, ME.bind(null, i, y, s, t), void 0, null);
        var g = Tm();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        xs(g, qs) || LE(i, t, s);
      }
      return s;
    }
    function LE(e, t, a) {
      e.flags |= Wl;
      var i = {
        getSnapshot: t,
        value: a
      }, u = kt.updateQueue;
      if (u === null)
        u = OE(), kt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function ME(e, t, a, i) {
      t.value = a, t.getSnapshot = i, zE(t) && UE(e);
    }
    function NE(e, t, a) {
      var i = function() {
        zE(t) && UE(e);
      };
      return a(i);
    }
    function zE(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !ce(a, i);
      } catch {
        return !0;
      }
    }
    function UE(e) {
      var t = Ta(e, be);
      t !== null && Kn(t, e, be, zt);
    }
    function Wh(e) {
      var t = wl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: j,
        dispatch: null,
        lastRenderedReducer: zg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Iw.bind(null, kt, a);
      return [t.memoizedState, i];
    }
    function jg(e) {
      return Ag(zg);
    }
    function Vg(e) {
      return Fg(zg);
    }
    function yp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = kt.updateQueue;
      if (s === null)
        s = OE(), kt.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function Bg(e) {
      var t = wl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Gh(e) {
      var t = fi();
      return t.memoizedState;
    }
    function gp(e, t, a, i) {
      var u = wl(), s = i === void 0 ? null : i;
      kt.flags |= e, u.memoizedState = yp(Yn | t, a, void 0, s);
    }
    function qh(e, t, a, i) {
      var u = fi(), s = i === void 0 ? null : i, f = void 0;
      if (Qn !== null) {
        var p = Qn.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (Ng(s, v)) {
            u.memoizedState = yp(t, a, f, s);
            return;
          }
        }
      }
      kt.flags |= e, u.memoizedState = yp(Yn | t, a, f, s);
    }
    function Xh(e, t) {
      return (kt.mode & va) !== we ? gp(Gl | xr | ul, cr, e, t) : gp(xr | ul, cr, e, t);
    }
    function Sp(e, t) {
      return qh(xr, cr, e, t);
    }
    function Pg(e, t) {
      return gp(me, Rl, e, t);
    }
    function Kh(e, t) {
      return qh(me, Rl, e, t);
    }
    function $g(e, t) {
      var a = me;
      return a |= fa, (kt.mode & va) !== we && (a |= da), gp(a, In, e, t);
    }
    function Zh(e, t) {
      return qh(me, In, e, t);
    }
    function AE(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || E("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function Yg(e, t, a) {
      typeof t != "function" && E("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = me;
      return u |= fa, (kt.mode & va) !== we && (u |= da), gp(u, In, AE.bind(null, t, e), i);
    }
    function Jh(e, t, a) {
      typeof t != "function" && E("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return qh(me, In, AE.bind(null, t, e), i);
    }
    function Bw(e, t) {
    }
    var em = Bw;
    function Ig(e, t) {
      var a = wl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function tm(e, t) {
      var a = fi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Ng(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Qg(e, t) {
      var a = wl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function nm(e, t) {
      var a = fi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Ng(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Wg(e) {
      var t = wl();
      return t.memoizedState = e, e;
    }
    function FE(e) {
      var t = fi(), a = Qn, i = a.memoizedState;
      return jE(t, i, e);
    }
    function HE(e) {
      var t = fi();
      if (Qn === null)
        return t.memoizedState = e, e;
      var a = Qn.memoizedState;
      return jE(t, a, e);
    }
    function jE(e, t, a) {
      var i = !Lv(qs);
      if (i) {
        if (!ce(a, t)) {
          var u = zv();
          kt.lanes = Pe(kt.lanes, u), Up(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Rp()), e.memoizedState = a, a;
    }
    function Pw(e, t, a) {
      var i = ma();
      an(ty(i, Ni)), e(!0);
      var u = vp.transition;
      vp.transition = {};
      var s = vp.transition;
      vp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (an(i), vp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && ut("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Gg() {
      var e = Wh(!1), t = e[0], a = e[1], i = Pw.bind(null, a), u = wl();
      return u.memoizedState = i, [t, i];
    }
    function VE() {
      var e = jg(), t = e[0], a = fi(), i = a.memoizedState;
      return [t, i];
    }
    function BE() {
      var e = Vg(), t = e[0], a = fi(), i = a.memoizedState;
      return [t, i];
    }
    var PE = !1;
    function $w() {
      return PE;
    }
    function qg() {
      var e = wl(), t = Tm(), a = t.identifierPrefix, i;
      if (sr()) {
        var u = rw();
        i = ":" + a + "R" + u;
        var s = mp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Hw++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function rm() {
      var e = fi(), t = e.memoizedState;
      return t;
    }
    function Yw(e, t, a) {
      typeof arguments[3] == "function" && E("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Lo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if ($E(e))
        YE(t, u);
      else {
        var s = uE(e, t, u, i);
        if (s !== null) {
          var f = Kr();
          Kn(s, e, i, f), IE(s, t, i);
        }
      }
      QE(e, i);
    }
    function Iw(e, t, a) {
      typeof arguments[3] == "function" && E("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Lo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if ($E(e))
        YE(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === j && (s === null || s.lanes === j)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = ne.current, ne.current = Pi;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, ce(y, v)) {
                Rw(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              ne.current = p;
            }
          }
        }
        var g = uE(e, t, u, i);
        if (g !== null) {
          var _ = Kr();
          Kn(g, e, i, _), IE(g, t, i);
        }
      }
      QE(e, i);
    }
    function $E(e) {
      var t = e.alternate;
      return e === kt || t !== null && t === kt;
    }
    function YE(e, t) {
      hp = Ih = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function IE(e, t, a) {
      if (xd(a)) {
        var i = t.lanes;
        i = Bc(i, e.pendingLanes);
        var u = Pe(i, a);
        t.lanes = u, _d(e, u);
      }
    }
    function QE(e, t, a) {
      xc(e, t);
    }
    var am = {
      readContext: Un,
      useCallback: Fr,
      useContext: Fr,
      useEffect: Fr,
      useImperativeHandle: Fr,
      useInsertionEffect: Fr,
      useLayoutEffect: Fr,
      useMemo: Fr,
      useReducer: Fr,
      useRef: Fr,
      useState: Fr,
      useDebugValue: Fr,
      useDeferredValue: Fr,
      useTransition: Fr,
      useMutableSource: Fr,
      useSyncExternalStore: Fr,
      useId: Fr,
      unstable_isNewReconciler: pe
    }, WE = null, GE = null, qE = null, XE = null, xl = null, Pi = null, im = null;
    {
      var Xg = function() {
        E("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Fe = function() {
        E("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      WE = {
        readContext: function(e) {
          return Un(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Ct(), Of(t), Ig(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Ct(), Un(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Ct(), Of(t), Xh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Ct(), Of(a), Yg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Ct(), Of(t), Pg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Ct(), Of(t), $g(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Ct(), Of(t);
          var a = ne.current;
          ne.current = xl;
          try {
            return Qg(e, t);
          } finally {
            ne.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Ct();
          var i = ne.current;
          ne.current = xl;
          try {
            return Ug(e, t, a);
          } finally {
            ne.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Ct(), Bg(e);
        },
        useState: function(e) {
          V = "useState", Ct();
          var t = ne.current;
          ne.current = xl;
          try {
            return Wh(e);
          } finally {
            ne.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Ct(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Ct(), Wg(e);
        },
        useTransition: function() {
          return V = "useTransition", Ct(), Gg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Ct(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Ct(), Hg(e, t, a);
        },
        useId: function() {
          return V = "useId", Ct(), qg();
        },
        unstable_isNewReconciler: pe
      }, GE = {
        readContext: function(e) {
          return Un(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", K(), Ig(e, t);
        },
        useContext: function(e) {
          return V = "useContext", K(), Un(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", K(), Xh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", K(), Yg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", K(), Pg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", K(), $g(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", K();
          var a = ne.current;
          ne.current = xl;
          try {
            return Qg(e, t);
          } finally {
            ne.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", K();
          var i = ne.current;
          ne.current = xl;
          try {
            return Ug(e, t, a);
          } finally {
            ne.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", K(), Bg(e);
        },
        useState: function(e) {
          V = "useState", K();
          var t = ne.current;
          ne.current = xl;
          try {
            return Wh(e);
          } finally {
            ne.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", K(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", K(), Wg(e);
        },
        useTransition: function() {
          return V = "useTransition", K(), Gg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", K(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", K(), Hg(e, t, a);
        },
        useId: function() {
          return V = "useId", K(), qg();
        },
        unstable_isNewReconciler: pe
      }, qE = {
        readContext: function(e) {
          return Un(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", K(), tm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", K(), Un(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", K(), Sp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", K(), Jh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", K(), Kh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", K(), Zh(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", K();
          var a = ne.current;
          ne.current = Pi;
          try {
            return nm(e, t);
          } finally {
            ne.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", K();
          var i = ne.current;
          ne.current = Pi;
          try {
            return Ag(e, t, a);
          } finally {
            ne.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", K(), Gh();
        },
        useState: function(e) {
          V = "useState", K();
          var t = ne.current;
          ne.current = Pi;
          try {
            return jg(e);
          } finally {
            ne.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", K(), em();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", K(), FE(e);
        },
        useTransition: function() {
          return V = "useTransition", K(), VE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", K(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", K(), Qh(e, t);
        },
        useId: function() {
          return V = "useId", K(), rm();
        },
        unstable_isNewReconciler: pe
      }, XE = {
        readContext: function(e) {
          return Un(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", K(), tm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", K(), Un(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", K(), Sp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", K(), Jh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", K(), Kh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", K(), Zh(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", K();
          var a = ne.current;
          ne.current = im;
          try {
            return nm(e, t);
          } finally {
            ne.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", K();
          var i = ne.current;
          ne.current = im;
          try {
            return Fg(e, t, a);
          } finally {
            ne.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", K(), Gh();
        },
        useState: function(e) {
          V = "useState", K();
          var t = ne.current;
          ne.current = im;
          try {
            return Vg(e);
          } finally {
            ne.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", K(), em();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", K(), HE(e);
        },
        useTransition: function() {
          return V = "useTransition", K(), BE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", K(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", K(), Qh(e, t);
        },
        useId: function() {
          return V = "useId", K(), rm();
        },
        unstable_isNewReconciler: pe
      }, xl = {
        readContext: function(e) {
          return Xg(), Un(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Fe(), Ct(), Ig(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Fe(), Ct(), Un(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Fe(), Ct(), Xh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Fe(), Ct(), Yg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Fe(), Ct(), Pg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Fe(), Ct(), $g(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Fe(), Ct();
          var a = ne.current;
          ne.current = xl;
          try {
            return Qg(e, t);
          } finally {
            ne.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Fe(), Ct();
          var i = ne.current;
          ne.current = xl;
          try {
            return Ug(e, t, a);
          } finally {
            ne.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Fe(), Ct(), Bg(e);
        },
        useState: function(e) {
          V = "useState", Fe(), Ct();
          var t = ne.current;
          ne.current = xl;
          try {
            return Wh(e);
          } finally {
            ne.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Fe(), Ct(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Fe(), Ct(), Wg(e);
        },
        useTransition: function() {
          return V = "useTransition", Fe(), Ct(), Gg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Fe(), Ct(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Fe(), Ct(), Hg(e, t, a);
        },
        useId: function() {
          return V = "useId", Fe(), Ct(), qg();
        },
        unstable_isNewReconciler: pe
      }, Pi = {
        readContext: function(e) {
          return Xg(), Un(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Fe(), K(), tm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Fe(), K(), Un(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Fe(), K(), Sp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Fe(), K(), Jh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Fe(), K(), Kh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Fe(), K(), Zh(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Fe(), K();
          var a = ne.current;
          ne.current = Pi;
          try {
            return nm(e, t);
          } finally {
            ne.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Fe(), K();
          var i = ne.current;
          ne.current = Pi;
          try {
            return Ag(e, t, a);
          } finally {
            ne.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Fe(), K(), Gh();
        },
        useState: function(e) {
          V = "useState", Fe(), K();
          var t = ne.current;
          ne.current = Pi;
          try {
            return jg(e);
          } finally {
            ne.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Fe(), K(), em();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Fe(), K(), FE(e);
        },
        useTransition: function() {
          return V = "useTransition", Fe(), K(), VE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Fe(), K(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Fe(), K(), Qh(e, t);
        },
        useId: function() {
          return V = "useId", Fe(), K(), rm();
        },
        unstable_isNewReconciler: pe
      }, im = {
        readContext: function(e) {
          return Xg(), Un(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Fe(), K(), tm(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Fe(), K(), Un(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Fe(), K(), Sp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Fe(), K(), Jh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Fe(), K(), Kh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Fe(), K(), Zh(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Fe(), K();
          var a = ne.current;
          ne.current = Pi;
          try {
            return nm(e, t);
          } finally {
            ne.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Fe(), K();
          var i = ne.current;
          ne.current = Pi;
          try {
            return Fg(e, t, a);
          } finally {
            ne.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Fe(), K(), Gh();
        },
        useState: function(e) {
          V = "useState", Fe(), K();
          var t = ne.current;
          ne.current = Pi;
          try {
            return Vg(e);
          } finally {
            ne.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Fe(), K(), em();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Fe(), K(), HE(e);
        },
        useTransition: function() {
          return V = "useTransition", Fe(), K(), BE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Fe(), K(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Fe(), K(), Qh(e, t);
        },
        useId: function() {
          return V = "useId", Fe(), K(), rm();
        },
        unstable_isNewReconciler: pe
      };
    }
    var bo = A.unstable_now, KE = 0, lm = -1, Ep = -1, um = -1, Kg = !1, om = !1;
    function ZE() {
      return Kg;
    }
    function Qw() {
      om = !0;
    }
    function Ww() {
      Kg = !1, om = !1;
    }
    function Gw() {
      Kg = om, om = !1;
    }
    function JE() {
      return KE;
    }
    function eC() {
      KE = bo();
    }
    function Zg(e) {
      Ep = bo(), e.actualStartTime < 0 && (e.actualStartTime = bo());
    }
    function tC(e) {
      Ep = -1;
    }
    function sm(e, t) {
      if (Ep >= 0) {
        var a = bo() - Ep;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Ep = -1;
      }
    }
    function _l(e) {
      if (lm >= 0) {
        var t = bo() - lm;
        lm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case ue:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case gt:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Jg(e) {
      if (um >= 0) {
        var t = bo() - um;
        um = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case ue:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case gt:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function bl() {
      lm = bo();
    }
    function eS() {
      um = bo();
    }
    function tS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Xs(e, t) {
      return {
        value: e,
        source: t,
        stack: ku(t),
        digest: null
      };
    }
    function nS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function qw(e, t) {
      return !0;
    }
    function rS(e, t) {
      try {
        var a = qw(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === _e)
            return;
          console.error(i);
        }
        var p = u ? Ue(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === ue)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Ue(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var _ = v + `
` + f + `

` + ("" + y);
        console.error(_);
      } catch (w) {
        setTimeout(function() {
          throw w;
        });
      }
    }
    var Xw = typeof WeakMap == "function" ? WeakMap : Map;
    function nC(e, t, a) {
      var i = yu(zt, a);
      i.tag = rg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        P_(u), rS(e, t);
      }, i;
    }
    function aS(e, t, a) {
      var i = yu(zt, a);
      i.tag = rg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          p1(e), rS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        p1(e), rS(e, t), typeof u != "function" && V_(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (Nr(e.lanes, be) || E("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ue(e) || "Unknown"));
      }), i;
    }
    function rC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new Xw(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = $_.bind(null, e, t, a);
        Wr && Ap(e, a), t.then(s, s);
      }
    }
    function Kw(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function Zw(e, t) {
      var a = e.tag;
      if ((e.mode & ge) === we && (a === He || a === Me || a === Ve)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function aC(e) {
      var t = e;
      do {
        if (t.tag === Ee && Aw(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function iC(e, t, a, i, u) {
      if ((e.mode & ge) === we) {
        if (e === t)
          e.flags |= Bn;
        else {
          if (e.flags |= Ae, a.flags |= gc, a.flags &= ~(yv | ll), a.tag === _e) {
            var s = a.alternate;
            if (s === null)
              a.tag = Tn;
            else {
              var f = yu(zt, be);
              f.tag = Nh, Ro(a, f, be);
            }
          }
          a.lanes = Pe(a.lanes, be);
        }
        return e;
      }
      return e.flags |= Bn, e.lanes = u, e;
    }
    function Jw(e, t, a, i, u) {
      if (a.flags |= ll, Wr && Ap(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        Zw(a), sr() && a.mode & ge && q0();
        var f = aC(t);
        if (f !== null) {
          f.flags &= ~lr, iC(f, t, a, e, u), f.mode & ge && rC(e, s, u), Kw(f, e, s);
          return;
        } else {
          if (!wd(u)) {
            rC(e, s, u), FS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (sr() && a.mode & ge) {
        q0();
        var v = aC(t);
        if (v !== null) {
          (v.flags & Bn) === Re && (v.flags |= lr), iC(v, t, a, e, u), Xy(Xs(i, a));
          return;
        }
      }
      i = Xs(i, a), M_(i);
      var y = t;
      do {
        switch (y.tag) {
          case ue: {
            var g = i;
            y.flags |= Bn;
            var _ = Ju(u);
            y.lanes = Pe(y.lanes, _);
            var w = nC(y, g, _);
            lg(y, w);
            return;
          }
          case _e:
            var M = i, N = y.type, F = y.stateNode;
            if ((y.flags & Ae) === Re && (typeof N.getDerivedStateFromError == "function" || F !== null && typeof F.componentDidCatch == "function" && !a1(F))) {
              y.flags |= Bn;
              var ae = Ju(u);
              y.lanes = Pe(y.lanes, ae);
              var xe = aS(y, M, ae);
              lg(y, xe);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function ex() {
      return null;
    }
    var Cp = nt.ReactCurrentOwner, $i = !1, iS, Tp, lS, uS, oS, Ks, sS, cm;
    iS = {}, Tp = {}, lS = {}, uS = {}, oS = {}, Ks = !1, sS = {}, cm = {};
    function qr(e, t, a, i) {
      e === null ? t.child = RE(t, null, a, i) : t.child = xf(t, e.child, a, i);
    }
    function tx(e, t, a, i) {
      t.child = xf(t, e.child, null, i), t.child = xf(t, null, a, i);
    }
    function lC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Fi(
          s,
          i,
          // Resolved props
          "prop",
          st(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      wf(t, u), Iu(t);
      {
        if (Cp.current = t, Vn(!0), v = Lf(e, t, f, i, p, u), y = Mf(), t.mode & nn) {
          Nt(!0);
          try {
            v = Lf(e, t, f, i, p, u), y = Mf();
          } finally {
            Nt(!1);
          }
        }
        Vn(!1);
      }
      return Xl(), e !== null && !$i ? (DE(e, t, u), gu(e, t, u)) : (sr() && y && Yy(t), t.flags |= Ha, qr(e, t, v, u), t.child);
    }
    function uC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (lb(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Vf(s), t.tag = Ve, t.type = f, dS(t, s), oC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          p && Fi(
            p,
            i,
            // Resolved props
            "prop",
            st(s)
          );
        }
        var v = GS(a.type, null, i, t, t.mode, u);
        return v.ref = t.ref, v.return = t, t.child = v, v;
      }
      {
        var y = a.type, g = y.propTypes;
        g && Fi(
          g,
          i,
          // Resolved props
          "prop",
          st(y)
        );
      }
      var _ = e.child, w = gS(e, u);
      if (!w) {
        var M = _.memoizedProps, N = a.compare;
        if (N = N !== null ? N : ke, N(M, i) && e.ref === t.ref)
          return gu(e, t, u);
      }
      t.flags |= Ha;
      var F = nc(_, i);
      return F.ref = t.ref, F.return = t, t.child = F, F;
    }
    function oC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === On) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && Fi(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            st(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (ke(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if ($i = !1, t.pendingProps = i = g, gS(e, u))
            (e.flags & gc) !== Re && ($i = !0);
          else return t.lanes = e.lanes, gu(e, t, u);
      }
      return cS(e, t, a, i, u);
    }
    function sC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || P)
        if ((t.mode & ge) === we) {
          var f = {
            baseLanes: j,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Rm(t, a);
        } else if (Nr(a, Gr)) {
          var _ = {
            baseLanes: j,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = _;
          var w = s !== null ? s.baseLanes : a;
          Rm(t, w);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = Pe(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = Gr;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, Rm(t, v), null;
        }
      else {
        var M;
        s !== null ? (M = Pe(s.baseLanes, a), t.memoizedState = null) : M = a, Rm(t, M);
      }
      return qr(e, t, u, a), t.child;
    }
    function nx(e, t, a) {
      var i = t.pendingProps;
      return qr(e, t, i, a), t.child;
    }
    function rx(e, t, a) {
      var i = t.pendingProps.children;
      return qr(e, t, i, a), t.child;
    }
    function ax(e, t, a) {
      {
        t.flags |= me;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return qr(e, t, s, a), t.child;
    }
    function cC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Yr, t.flags |= Ja);
    }
    function cS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Fi(
          s,
          i,
          // Resolved props
          "prop",
          st(a)
        );
      }
      var f;
      {
        var p = gf(t, a, !0);
        f = Sf(t, p);
      }
      var v, y;
      wf(t, u), Iu(t);
      {
        if (Cp.current = t, Vn(!0), v = Lf(e, t, a, i, f, u), y = Mf(), t.mode & nn) {
          Nt(!0);
          try {
            v = Lf(e, t, a, i, f, u), y = Mf();
          } finally {
            Nt(!1);
          }
        }
        Vn(!1);
      }
      return Xl(), e !== null && !$i ? (DE(e, t, u), gu(e, t, u)) : (sr() && y && Yy(t), t.flags |= Ha, qr(e, t, v, u), t.child);
    }
    function fC(e, t, a, i, u) {
      {
        switch (Cb(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= Ae, t.flags |= Bn;
            var y = new Error("Simulated error coming from DevTools"), g = Ju(u);
            t.lanes = Pe(t.lanes, g);
            var _ = aS(t, Xs(y, t), g);
            lg(t, _);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var w = a.propTypes;
          w && Fi(
            w,
            i,
            // Resolved props
            "prop",
            st(a)
          );
        }
      }
      var M;
      Tl(a) ? (M = !0, Th(t)) : M = !1, wf(t, u);
      var N = t.stateNode, F;
      N === null ? (dm(e, t), gE(t, a, i), gg(t, a, i, u), F = !0) : e === null ? F = Ow(t, a, i, u) : F = Lw(e, t, a, i, u);
      var ae = fS(e, t, a, F, M, u);
      {
        var xe = t.stateNode;
        F && xe.props !== i && (Ks || E("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ue(t) || "a component"), Ks = !0);
      }
      return ae;
    }
    function fS(e, t, a, i, u, s) {
      cC(e, t);
      var f = (t.flags & Ae) !== Re;
      if (!i && !f)
        return u && I0(t, a, !1), gu(e, t, s);
      var p = t.stateNode;
      Cp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, tC();
      else {
        Iu(t);
        {
          if (Vn(!0), v = p.render(), t.mode & nn) {
            Nt(!0);
            try {
              p.render();
            } finally {
              Nt(!1);
            }
          }
          Vn(!1);
        }
        Xl();
      }
      return t.flags |= Ha, e !== null && f ? tx(e, t, v, s) : qr(e, t, v, s), t.memoizedState = p.state, u && I0(t, a, !0), t.child;
    }
    function dC(e) {
      var t = e.stateNode;
      t.pendingContext ? $0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && $0(e, t.context, !1), wg(e, t.containerInfo);
    }
    function ix(e, t, a) {
      if (dC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      cE(e, t), Fh(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & lr) {
          var g = Xs(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return pC(e, t, p, a, g);
        } else if (p !== s) {
          var _ = Xs(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return pC(e, t, p, a, _);
        } else {
          sw(t);
          var w = RE(t, null, p, a);
          t.child = w;
          for (var M = w; M; )
            M.flags = M.flags & ~Mt | Za, M = M.sibling;
        }
      } else {
        if (Tf(), p === s)
          return gu(e, t, a);
        qr(e, t, p, a);
      }
      return t.child;
    }
    function pC(e, t, a, i, u) {
      return Tf(), Xy(u), t.flags |= lr, qr(e, t, a, i), t.child;
    }
    function lx(e, t, a) {
      xE(t), e === null && qy(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Oy(i, u);
      return p ? f = null : s !== null && Oy(i, s) && (t.flags |= ca), cC(e, t), qr(e, t, f, a), t.child;
    }
    function ux(e, t) {
      return e === null && qy(t), null;
    }
    function ox(e, t, a, i) {
      dm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = ub(v), g = Vi(v, u), _;
      switch (y) {
        case He:
          return dS(t, v), t.type = v = Vf(v), _ = cS(null, t, v, g, i), _;
        case _e:
          return t.type = v = PS(v), _ = fC(null, t, v, g, i), _;
        case Me:
          return t.type = v = $S(v), _ = lC(null, t, v, g, i), _;
        case Ze: {
          if (t.type !== t.elementType) {
            var w = v.propTypes;
            w && Fi(
              w,
              g,
              // Resolved for outer only
              "prop",
              st(v)
            );
          }
          return _ = uC(
            null,
            t,
            v,
            Vi(v.type, g),
            // The inner type can have defaults too
            i
          ), _;
        }
      }
      var M = "";
      throw v !== null && typeof v == "object" && v.$$typeof === On && (M = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + M));
    }
    function sx(e, t, a, i, u) {
      dm(e, t), t.tag = _e;
      var s;
      return Tl(a) ? (s = !0, Th(t)) : s = !1, wf(t, u), gE(t, a, i), gg(t, a, i, u), fS(null, t, a, !0, s, u);
    }
    function cx(e, t, a, i) {
      dm(e, t);
      var u = t.pendingProps, s;
      {
        var f = gf(t, a, !1);
        s = Sf(t, f);
      }
      wf(t, i);
      var p, v;
      Iu(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = st(a) || "Unknown";
          iS[y] || (E("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), iS[y] = !0);
        }
        t.mode & nn && ji.recordLegacyContextWarning(t, null), Vn(!0), Cp.current = t, p = Lf(null, t, a, u, s, i), v = Mf(), Vn(!1);
      }
      if (Xl(), t.flags |= Ha, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = st(a) || "Unknown";
        Tp[g] || (E("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), Tp[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var _ = st(a) || "Unknown";
          Tp[_] || (E("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _, _, _), Tp[_] = !0);
        }
        t.tag = _e, t.memoizedState = null, t.updateQueue = null;
        var w = !1;
        return Tl(a) ? (w = !0, Th(t)) : w = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, ig(t), yE(t, p), gg(t, a, u, i), fS(null, t, a, !0, w, i);
      } else {
        if (t.tag = He, t.mode & nn) {
          Nt(!0);
          try {
            p = Lf(null, t, a, u, s, i), v = Mf();
          } finally {
            Nt(!1);
          }
        }
        return sr() && v && Yy(t), qr(null, t, p, i), dS(t, a), t.child;
      }
    }
    function dS(e, t) {
      {
        if (t && t.childContextTypes && E("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = ua();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), oS[u] || (oS[u] = !0, E("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var f = st(t) || "Unknown";
          uS[f] || (E("%s: Function components do not support getDerivedStateFromProps.", f), uS[f] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var p = st(t) || "Unknown";
          lS[p] || (E("%s: Function components do not support contextType.", p), lS[p] = !0);
        }
      }
    }
    var pS = {
      dehydrated: null,
      treeContext: null,
      retryLane: fn
    };
    function vS(e) {
      return {
        baseLanes: e,
        cachePool: ex(),
        transitions: null
      };
    }
    function fx(e, t) {
      var a = null;
      return {
        baseLanes: Pe(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function dx(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return bg(e, pp);
    }
    function px(e, t) {
      return _s(e.childLanes, t);
    }
    function vC(e, t, a) {
      var i = t.pendingProps;
      Tb(t) && (t.flags |= Ae);
      var u = Bi.current, s = !1, f = (t.flags & Ae) !== Re;
      if (f || dx(u, e) ? (s = !0, t.flags &= ~Ae) : (e === null || e.memoizedState !== null) && (u = Uw(u, bE)), u = bf(u), xo(t, u), e === null) {
        qy(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return gx(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var _ = vx(t, y, g, a), w = t.child;
          return w.memoizedState = vS(a), t.memoizedState = pS, _;
        } else
          return hS(t, y);
      } else {
        var M = e.memoizedState;
        if (M !== null) {
          var N = M.dehydrated;
          if (N !== null)
            return Sx(e, t, f, i, N, M, a);
        }
        if (s) {
          var F = i.fallback, ae = i.children, xe = mx(e, t, ae, F, a), Se = t.child, it = e.child.memoizedState;
          return Se.memoizedState = it === null ? vS(a) : fx(it, a), Se.childLanes = px(e, a), t.memoizedState = pS, xe;
        } else {
          var Ke = i.children, D = hx(e, t, Ke, a);
          return t.memoizedState = null, D;
        }
      }
    }
    function hS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = mS(u, i);
      return s.return = e, e.child = s, s;
    }
    function vx(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & ge) === we && s !== null ? (p = s, p.childLanes = j, p.pendingProps = f, e.mode & pt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = No(a, u, i, null)) : (p = mS(f, u), v = No(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function mS(e, t, a) {
      return h1(e, t, j, null);
    }
    function hC(e, t) {
      return nc(e, t);
    }
    function hx(e, t, a, i) {
      var u = e.child, s = u.sibling, f = hC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & ge) === we && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= vt) : p.push(s);
      }
      return t.child = f, f;
    }
    function mx(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & ge) === we && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = j, y.pendingProps = v, t.mode & pt && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = hC(f, v), y.subtreeFlags = f.subtreeFlags & Pn;
      var _;
      return p !== null ? _ = nc(p, i) : (_ = No(i, s, u, null), _.flags |= Mt), _.return = t, y.return = t, y.sibling = _, t.child = y, _;
    }
    function fm(e, t, a, i) {
      i !== null && Xy(i), xf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = hS(t, s);
      return f.flags |= Mt, t.memoizedState = null, f;
    }
    function yx(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = mS(f, s), v = No(i, s, u, null);
      return v.flags |= Mt, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & ge) !== we && xf(t, e.child, null, u), v;
    }
    function gx(e, t, a) {
      return (e.mode & ge) === we ? (E("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = be) : zy(t) ? e.lanes = rn : e.lanes = Gr, null;
    }
    function Sx(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & lr) {
          t.flags &= ~lr;
          var D = nS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return fm(e, t, f, D);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Ae, null;
          var H = i.children, k = i.fallback, Q = yx(e, t, H, k, f), ie = t.child;
          return ie.memoizedState = vS(f), t.memoizedState = pS, Q;
        }
      else {
        if (uw(), (t.mode & ge) === we)
          return fm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (zy(u)) {
          var p, v, y;
          {
            var g = wR(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var _;
          v ? _ = new Error(v) : _ = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var w = nS(_, p, y);
          return fm(e, t, f, w);
        }
        var M = Nr(f, e.childLanes);
        if ($i || M) {
          var N = Tm();
          if (N !== null) {
            var F = Fv(N, f);
            if (F !== fn && F !== s.retryLane) {
              s.retryLane = F;
              var ae = zt;
              Ta(e, F), Kn(N, e, F, ae);
            }
          }
          FS();
          var xe = nS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return fm(e, t, f, xe);
        } else if (F0(u)) {
          t.flags |= Ae, t.child = e.child;
          var Se = Y_.bind(null, e);
          return xR(u, Se), null;
        } else {
          cw(t, u, s.treeContext);
          var it = i.children, Ke = hS(t, it);
          return Ke.flags |= Za, Ke;
        }
      }
    }
    function mC(e, t, a) {
      e.lanes = Pe(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Pe(i.lanes, t)), tg(e.return, t, a);
    }
    function Ex(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Ee) {
          var u = i.memoizedState;
          u !== null && mC(i, a, e);
        } else if (i.tag === ft)
          mC(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function Cx(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Yh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Tx(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !sS[e])
        if (sS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              E('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              E('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              E('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          E('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function Rx(e, t) {
      e !== void 0 && !cm[e] && (e !== "collapsed" && e !== "hidden" ? (cm[e] = !0, E('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (cm[e] = !0, E('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function yC(e, t) {
      {
        var a = ct(e), i = !a && typeof Qa(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return E("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function wx(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (ct(e)) {
          for (var a = 0; a < e.length; a++)
            if (!yC(e[a], a))
              return;
        } else {
          var i = Qa(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!yC(s.value, f))
                  return;
                f++;
              }
          } else
            E('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function yS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function gC(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      Tx(u), Rx(s, u), wx(f, u), qr(e, t, f, a);
      var p = Bi.current, v = bg(p, pp);
      if (v)
        p = Dg(p, pp), t.flags |= Ae;
      else {
        var y = e !== null && (e.flags & Ae) !== Re;
        y && Ex(t, t.child, a), p = bf(p);
      }
      if (xo(t, p), (t.mode & ge) === we)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = Cx(t.child), _;
            g === null ? (_ = t.child, t.child = null) : (_ = g.sibling, g.sibling = null), yS(
              t,
              !1,
              // isBackwards
              _,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var w = null, M = t.child;
            for (t.child = null; M !== null; ) {
              var N = M.alternate;
              if (N !== null && Yh(N) === null) {
                t.child = M;
                break;
              }
              var F = M.sibling;
              M.sibling = w, w = M, M = F;
            }
            yS(
              t,
              !0,
              // isBackwards
              w,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            yS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function xx(e, t, a) {
      wg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = xf(t, null, i, a) : qr(e, t, i, a), t.child;
    }
    var SC = !1;
    function _x(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || SC || (SC = !0, E("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Fi(v, s, "prop", "Context.Provider");
      }
      if (lE(t, u, p), f !== null) {
        var y = f.value;
        if (ce(y, p)) {
          if (f.children === s.children && !Eh())
            return gu(e, t, a);
        } else
          Ew(t, u, a);
      }
      var g = s.children;
      return qr(e, t, g, a), t.child;
    }
    var EC = !1;
    function bx(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (EC || (EC = !0, E("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && E("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), wf(t, a);
      var f = Un(i);
      Iu(t);
      var p;
      return Cp.current = t, Vn(!0), p = s(f), Vn(!1), Xl(), t.flags |= Ha, qr(e, t, p, a), t.child;
    }
    function Rp() {
      $i = !0;
    }
    function dm(e, t) {
      (t.mode & ge) === we && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Mt);
    }
    function gu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), tC(), Up(t.lanes), Nr(a, t.childLanes) ? (Mw(e, t), t.child) : null;
    }
    function Dx(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= vt) : s.push(e), a.flags |= Mt, a;
      }
    }
    function gS(e, t) {
      var a = e.lanes;
      return !!Nr(a, t);
    }
    function kx(e, t, a) {
      switch (t.tag) {
        case ue:
          dC(t), t.stateNode, Tf();
          break;
        case ee:
          xE(t);
          break;
        case _e: {
          var i = t.type;
          Tl(i) && Th(t);
          break;
        }
        case je:
          wg(t, t.stateNode.containerInfo);
          break;
        case Bt: {
          var u = t.memoizedProps.value, s = t.type._context;
          lE(t, s, u);
          break;
        }
        case gt:
          {
            var f = Nr(a, t.childLanes);
            f && (t.flags |= me);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Ee: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return xo(t, bf(Bi.current)), t.flags |= Ae, null;
            var y = t.child, g = y.childLanes;
            if (Nr(a, g))
              return vC(e, t, a);
            xo(t, bf(Bi.current));
            var _ = gu(e, t, a);
            return _ !== null ? _.sibling : null;
          } else
            xo(t, bf(Bi.current));
          break;
        }
        case ft: {
          var w = (e.flags & Ae) !== Re, M = Nr(a, t.childLanes);
          if (w) {
            if (M)
              return gC(e, t, a);
            t.flags |= Ae;
          }
          var N = t.memoizedState;
          if (N !== null && (N.rendering = null, N.tail = null, N.lastEffect = null), xo(t, Bi.current), M)
            break;
          return null;
        }
        case Ie:
        case ot:
          return t.lanes = j, sC(e, t, a);
      }
      return gu(e, t, a);
    }
    function CC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Dx(e, t, GS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Eh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          $i = !0;
        else {
          var s = gS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Ae) === Re)
            return $i = !1, kx(e, t, a);
          (e.flags & gc) !== Re ? $i = !0 : $i = !1;
        }
      } else if ($i = !1, sr() && tw(t)) {
        var f = t.index, p = nw();
        G0(t, p, f);
      }
      switch (t.lanes = j, t.tag) {
        case qe:
          return cx(e, t, t.type, a);
        case Cn: {
          var v = t.elementType;
          return ox(e, t, v, a);
        }
        case He: {
          var y = t.type, g = t.pendingProps, _ = t.elementType === y ? g : Vi(y, g);
          return cS(e, t, y, _, a);
        }
        case _e: {
          var w = t.type, M = t.pendingProps, N = t.elementType === w ? M : Vi(w, M);
          return fC(e, t, w, N, a);
        }
        case ue:
          return ix(e, t, a);
        case ee:
          return lx(e, t, a);
        case Ce:
          return ux(e, t);
        case Ee:
          return vC(e, t, a);
        case je:
          return xx(e, t, a);
        case Me: {
          var F = t.type, ae = t.pendingProps, xe = t.elementType === F ? ae : Vi(F, ae);
          return lC(e, t, F, xe, a);
        }
        case rt:
          return nx(e, t, a);
        case An:
          return rx(e, t, a);
        case gt:
          return ax(e, t, a);
        case Bt:
          return _x(e, t, a);
        case Fn:
          return bx(e, t, a);
        case Ze: {
          var Se = t.type, it = t.pendingProps, Ke = Vi(Se, it);
          if (t.type !== t.elementType) {
            var D = Se.propTypes;
            D && Fi(
              D,
              Ke,
              // Resolved for outer only
              "prop",
              st(Se)
            );
          }
          return Ke = Vi(Se.type, Ke), uC(e, t, Se, Ke, a);
        }
        case Ve:
          return oC(e, t, t.type, t.pendingProps, a);
        case Tn: {
          var H = t.type, k = t.pendingProps, Q = t.elementType === H ? k : Vi(H, k);
          return sx(e, t, H, Q, a);
        }
        case ft:
          return gC(e, t, a);
        case Jt:
          break;
        case Ie:
          return sC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Nf(e) {
      e.flags |= me;
    }
    function TC(e) {
      e.flags |= Yr, e.flags |= Ja;
    }
    var RC, SS, wC, xC;
    RC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === ee || u.tag === Ce)
          ZT(e, u.stateNode);
        else if (u.tag !== je) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, SS = function(e, t) {
    }, wC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = xg(), v = eR(f, a, s, i, u, p);
        t.updateQueue = v, v && Nf(t);
      }
    }, xC = function(e, t, a, i) {
      a !== i && Nf(t);
    };
    function wp(e, t) {
      if (!sr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function fr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = j, i = Re;
      if (t) {
        if ((e.mode & pt) !== we) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = Pe(a, Pe(y.lanes, y.childLanes)), i |= y.subtreeFlags & Pn, i |= y.flags & Pn, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = Pe(a, Pe(g.lanes, g.childLanes)), i |= g.subtreeFlags & Pn, i |= g.flags & Pn, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & pt) !== we) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Pe(a, Pe(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = Pe(a, Pe(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Ox(e, t, a) {
      if (hw() && (t.mode & ge) !== we && (t.flags & Ae) === Re)
        return tE(t), Tf(), t.flags |= lr | ll | Bn, !1;
      var i = bh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (pw(t), fr(t), (t.mode & pt) !== we) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Tf(), (t.flags & Ae) === Re && (t.memoizedState = null), t.flags |= me, fr(t), (t.mode & pt) !== we) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return nE(), !0;
    }
    function _C(e, t, a) {
      var i = t.pendingProps;
      switch (Iy(t), t.tag) {
        case qe:
        case Cn:
        case Ve:
        case He:
        case Me:
        case rt:
        case An:
        case gt:
        case Fn:
        case Ze:
          return fr(t), null;
        case _e: {
          var u = t.type;
          return Tl(u) && Ch(t), fr(t), null;
        }
        case ue: {
          var s = t.stateNode;
          if (_f(t), By(t), Og(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = bh(t);
            if (f)
              Nf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & lr) !== Re) && (t.flags |= gn, nE());
            }
          }
          return SS(e, t), fr(t), null;
        }
        case ee: {
          _g(t);
          var v = wE(), y = t.type;
          if (e !== null && t.stateNode != null)
            wC(e, t, y, i, v), e.ref !== t.ref && TC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return fr(t), null;
            }
            var g = xg(), _ = bh(t);
            if (_)
              fw(t, v, g) && Nf(t);
            else {
              var w = KT(y, i, v, g, t);
              RC(w, t, !1, !1), t.stateNode = w, JT(w, y, i, v) && Nf(t);
            }
            t.ref !== null && TC(t);
          }
          return fr(t), null;
        }
        case Ce: {
          var M = i;
          if (e && t.stateNode != null) {
            var N = e.memoizedProps;
            xC(e, t, N, M);
          } else {
            if (typeof M != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var F = wE(), ae = xg(), xe = bh(t);
            xe ? dw(t) && Nf(t) : t.stateNode = tR(M, F, ae, t);
          }
          return fr(t), null;
        }
        case Ee: {
          Df(t);
          var Se = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var it = Ox(e, t, Se);
            if (!it)
              return t.flags & Bn ? t : null;
          }
          if ((t.flags & Ae) !== Re)
            return t.lanes = a, (t.mode & pt) !== we && tS(t), t;
          var Ke = Se !== null, D = e !== null && e.memoizedState !== null;
          if (Ke !== D && Ke) {
            var H = t.child;
            if (H.flags |= il, (t.mode & ge) !== we) {
              var k = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !ve);
              k || bg(Bi.current, bE) ? L_() : FS();
            }
          }
          var Q = t.updateQueue;
          if (Q !== null && (t.flags |= me), fr(t), (t.mode & pt) !== we && Ke) {
            var ie = t.child;
            ie !== null && (t.treeBaseDuration -= ie.treeBaseDuration);
          }
          return null;
        }
        case je:
          return _f(t), SS(e, t), e === null && GR(t.stateNode.containerInfo), fr(t), null;
        case Bt:
          var J = t.type._context;
          return eg(J, t), fr(t), null;
        case Tn: {
          var Le = t.type;
          return Tl(Le) && Ch(t), fr(t), null;
        }
        case ft: {
          Df(t);
          var Be = t.memoizedState;
          if (Be === null)
            return fr(t), null;
          var Ot = (t.flags & Ae) !== Re, mt = Be.rendering;
          if (mt === null)
            if (Ot)
              wp(Be, !1);
            else {
              var Dn = N_() && (e === null || (e.flags & Ae) === Re);
              if (!Dn)
                for (var yt = t.child; yt !== null; ) {
                  var En = Yh(yt);
                  if (En !== null) {
                    Ot = !0, t.flags |= Ae, wp(Be, !1);
                    var Hr = En.updateQueue;
                    return Hr !== null && (t.updateQueue = Hr, t.flags |= me), t.subtreeFlags = Re, Nw(t, a), xo(t, Dg(Bi.current, pp)), t.child;
                  }
                  yt = yt.sibling;
                }
              Be.tail !== null && Sn() > WC() && (t.flags |= Ae, Ot = !0, wp(Be, !1), t.lanes = Td);
            }
          else {
            if (!Ot) {
              var mr = Yh(mt);
              if (mr !== null) {
                t.flags |= Ae, Ot = !0;
                var Pa = mr.updateQueue;
                if (Pa !== null && (t.updateQueue = Pa, t.flags |= me), wp(Be, !0), Be.tail === null && Be.tailMode === "hidden" && !mt.alternate && !sr())
                  return fr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Sn() * 2 - Be.renderingStartTime > WC() && a !== Gr && (t.flags |= Ae, Ot = !0, wp(Be, !1), t.lanes = Td);
            }
            if (Be.isBackwards)
              mt.sibling = t.child, t.child = mt;
            else {
              var Zr = Be.last;
              Zr !== null ? Zr.sibling = mt : t.child = mt, Be.last = mt;
            }
          }
          if (Be.tail !== null) {
            var Jr = Be.tail;
            Be.rendering = Jr, Be.tail = Jr.sibling, Be.renderingStartTime = Sn(), Jr.sibling = null;
            var jr = Bi.current;
            return Ot ? jr = Dg(jr, pp) : jr = bf(jr), xo(t, jr), Jr;
          }
          return fr(t), null;
        }
        case Jt:
          break;
        case Ie:
        case ot: {
          AS(t);
          var Ru = t.memoizedState, Bf = Ru !== null;
          if (e !== null) {
            var Vp = e.memoizedState, Ol = Vp !== null;
            Ol !== Bf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !P && (t.flags |= il);
          }
          return !Bf || (t.mode & ge) === we ? fr(t) : Nr(kl, Gr) && (fr(t), t.subtreeFlags & (Mt | me) && (t.flags |= il)), null;
        }
        case _t:
          return null;
        case Qe:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Lx(e, t, a) {
      switch (Iy(t), t.tag) {
        case _e: {
          var i = t.type;
          Tl(i) && Ch(t);
          var u = t.flags;
          return u & Bn ? (t.flags = u & ~Bn | Ae, (t.mode & pt) !== we && tS(t), t) : null;
        }
        case ue: {
          t.stateNode, _f(t), By(t), Og();
          var s = t.flags;
          return (s & Bn) !== Re && (s & Ae) === Re ? (t.flags = s & ~Bn | Ae, t) : null;
        }
        case ee:
          return _g(t), null;
        case Ee: {
          Df(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Tf();
          }
          var p = t.flags;
          return p & Bn ? (t.flags = p & ~Bn | Ae, (t.mode & pt) !== we && tS(t), t) : null;
        }
        case ft:
          return Df(t), null;
        case je:
          return _f(t), null;
        case Bt:
          var v = t.type._context;
          return eg(v, t), null;
        case Ie:
        case ot:
          return AS(t), null;
        case _t:
          return null;
        default:
          return null;
      }
    }
    function bC(e, t, a) {
      switch (Iy(t), t.tag) {
        case _e: {
          var i = t.type.childContextTypes;
          i != null && Ch(t);
          break;
        }
        case ue: {
          t.stateNode, _f(t), By(t), Og();
          break;
        }
        case ee: {
          _g(t);
          break;
        }
        case je:
          _f(t);
          break;
        case Ee:
          Df(t);
          break;
        case ft:
          Df(t);
          break;
        case Bt:
          var u = t.type._context;
          eg(u, t);
          break;
        case Ie:
        case ot:
          AS(t);
          break;
      }
    }
    var DC = null;
    DC = /* @__PURE__ */ new Set();
    var pm = !1, dr = !1, Mx = typeof WeakSet == "function" ? WeakSet : Set, fe = null, zf = null, Uf = null;
    function Nx(e) {
      Fa(null, function() {
        throw e;
      }), ki();
    }
    var zx = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & pt)
        try {
          bl(), t.componentWillUnmount();
        } finally {
          _l(e);
        }
      else
        t.componentWillUnmount();
    };
    function kC(e, t) {
      try {
        Do(In, e);
      } catch (a) {
        Vt(e, t, a);
      }
    }
    function ES(e, t, a) {
      try {
        zx(e, a);
      } catch (i) {
        Vt(e, t, i);
      }
    }
    function Ux(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        Vt(e, t, i);
      }
    }
    function OC(e, t) {
      try {
        MC(e);
      } catch (a) {
        Vt(e, t, a);
      }
    }
    function Af(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (dt && et && e.mode & pt)
              try {
                bl(), i = a(null);
              } finally {
                _l(e);
              }
            else
              i = a(null);
          } catch (u) {
            Vt(e, t, u);
          }
          typeof i == "function" && E("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ue(e));
        } else
          a.current = null;
    }
    function vm(e, t, a) {
      try {
        a();
      } catch (i) {
        Vt(e, t, i);
      }
    }
    var LC = !1;
    function Ax(e, t) {
      qT(e.containerInfo), fe = t, Fx();
      var a = LC;
      return LC = !1, a;
    }
    function Fx() {
      for (; fe !== null; ) {
        var e = fe, t = e.child;
        (e.subtreeFlags & _r) !== Re && t !== null ? (t.return = e, fe = t) : Hx();
      }
    }
    function Hx() {
      for (; fe !== null; ) {
        var e = fe;
        Gt(e);
        try {
          jx(e);
        } catch (a) {
          Vt(e, e.return, a);
        }
        At();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, fe = t;
          return;
        }
        fe = e.return;
      }
    }
    function jx(e) {
      var t = e.alternate, a = e.flags;
      if ((a & gn) !== Re) {
        switch (Gt(e), e.tag) {
          case He:
          case Me:
          case Ve:
            break;
          case _e: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Ks && (s.props !== e.memoizedProps && E("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ue(e) || "instance"), s.state !== e.memoizedState && E("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ue(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : Vi(e.type, i), u);
              {
                var p = DC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), E("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ue(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case ue: {
            {
              var v = e.stateNode;
              ER(v.containerInfo);
            }
            break;
          }
          case ee:
          case Ce:
          case je:
          case Tn:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        At();
      }
    }
    function Yi(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & cr) !== Ra ? Rv(t) : (e & In) !== Ra && Qu(t), (e & Rl) !== Ra && Fp(!0), vm(t, a, p), (e & Rl) !== Ra && Fp(!1), (e & cr) !== Ra ? wv() : (e & In) !== Ra && hs());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Do(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & cr) !== Ra ? gd(t) : (e & In) !== Ra && xv(t);
            var f = s.create;
            (e & Rl) !== Ra && Fp(!0), s.destroy = f(), (e & Rl) !== Ra && Fp(!1), (e & cr) !== Ra ? wc() : (e & In) !== Ra && Sd();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & In) !== Re ? v = "useLayoutEffect" : (s.tag & Rl) !== Re ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, E("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function Vx(e, t) {
      if ((t.flags & me) !== Re)
        switch (t.tag) {
          case gt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = JE(), p = t.alternate === null ? "mount" : "update";
            ZE() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case ue:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case gt:
                  var g = v.stateNode;
                  g.passiveEffectDuration += a;
                  break e;
              }
              v = v.return;
            }
            break;
          }
        }
    }
    function Bx(e, t, a, i) {
      if ((a.flags & ja) !== Re)
        switch (a.tag) {
          case He:
          case Me:
          case Ve: {
            if (!dr)
              if (a.mode & pt)
                try {
                  bl(), Do(In | Yn, a);
                } finally {
                  _l(a);
                }
              else
                Do(In | Yn, a);
            break;
          }
          case _e: {
            var u = a.stateNode;
            if (a.flags & me && !dr)
              if (t === null)
                if (a.type === a.elementType && !Ks && (u.props !== a.memoizedProps && E("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ue(a) || "instance"), u.state !== a.memoizedState && E("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ue(a) || "instance")), a.mode & pt)
                  try {
                    bl(), u.componentDidMount();
                  } finally {
                    _l(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : Vi(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Ks && (u.props !== a.memoizedProps && E("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ue(a) || "instance"), u.state !== a.memoizedState && E("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ue(a) || "instance")), a.mode & pt)
                  try {
                    bl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    _l(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Ks && (u.props !== a.memoizedProps && E("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ue(a) || "instance"), u.state !== a.memoizedState && E("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ue(a) || "instance")), dE(a, p, u));
            break;
          }
          case ue: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case ee:
                    y = a.child.stateNode;
                    break;
                  case _e:
                    y = a.child.stateNode;
                    break;
                }
              dE(a, v, y);
            }
            break;
          }
          case ee: {
            var g = a.stateNode;
            if (t === null && a.flags & me) {
              var _ = a.type, w = a.memoizedProps;
              lR(g, _, w);
            }
            break;
          }
          case Ce:
            break;
          case je:
            break;
          case gt: {
            {
              var M = a.memoizedProps, N = M.onCommit, F = M.onRender, ae = a.stateNode.effectDuration, xe = JE(), Se = t === null ? "mount" : "update";
              ZE() && (Se = "nested-update"), typeof F == "function" && F(a.memoizedProps.id, Se, a.actualDuration, a.treeBaseDuration, a.actualStartTime, xe);
              {
                typeof N == "function" && N(a.memoizedProps.id, Se, ae, xe), H_(a);
                var it = a.return;
                e: for (; it !== null; ) {
                  switch (it.tag) {
                    case ue:
                      var Ke = it.stateNode;
                      Ke.effectDuration += ae;
                      break e;
                    case gt:
                      var D = it.stateNode;
                      D.effectDuration += ae;
                      break e;
                  }
                  it = it.return;
                }
              }
            }
            break;
          }
          case Ee: {
            qx(e, a);
            break;
          }
          case ft:
          case Tn:
          case Jt:
          case Ie:
          case ot:
          case Qe:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      dr || a.flags & Yr && MC(a);
    }
    function Px(e) {
      switch (e.tag) {
        case He:
        case Me:
        case Ve: {
          if (e.mode & pt)
            try {
              bl(), kC(e, e.return);
            } finally {
              _l(e);
            }
          else
            kC(e, e.return);
          break;
        }
        case _e: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Ux(e, e.return, t), OC(e, e.return);
          break;
        }
        case ee: {
          OC(e, e.return);
          break;
        }
      }
    }
    function $x(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === ee) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? mR(u) : gR(i.stateNode, i.memoizedProps);
            } catch (f) {
              Vt(e, e.return, f);
            }
          }
        } else if (i.tag === Ce) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? yR(s) : SR(s, i.memoizedProps);
            } catch (f) {
              Vt(e, e.return, f);
            }
        } else if (!((i.tag === Ie || i.tag === ot) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function MC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case ee:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & pt)
            try {
              bl(), u = t(i);
            } finally {
              _l(e);
            }
          else
            u = t(i);
          typeof u == "function" && E("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ue(e));
        } else
          t.hasOwnProperty("current") || E("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ue(e)), t.current = i;
      }
    }
    function Yx(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function NC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, NC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === ee) {
          var a = e.stateNode;
          a !== null && KR(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Ix(e) {
      for (var t = e.return; t !== null; ) {
        if (zC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function zC(e) {
      return e.tag === ee || e.tag === ue || e.tag === je;
    }
    function UC(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || zC(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== ee && t.tag !== Ce && t.tag !== Pt; ) {
          if (t.flags & Mt || t.child === null || t.tag === je)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Mt))
          return t.stateNode;
      }
    }
    function Qx(e) {
      var t = Ix(e);
      switch (t.tag) {
        case ee: {
          var a = t.stateNode;
          t.flags & ca && (A0(a), t.flags &= ~ca);
          var i = UC(e);
          TS(e, i, a);
          break;
        }
        case ue:
        case je: {
          var u = t.stateNode.containerInfo, s = UC(e);
          CS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function CS(e, t, a) {
      var i = e.tag, u = i === ee || i === Ce;
      if (u) {
        var s = e.stateNode;
        t ? dR(a, s, t) : cR(a, s);
      } else if (i !== je) {
        var f = e.child;
        if (f !== null) {
          CS(f, t, a);
          for (var p = f.sibling; p !== null; )
            CS(p, t, a), p = p.sibling;
        }
      }
    }
    function TS(e, t, a) {
      var i = e.tag, u = i === ee || i === Ce;
      if (u) {
        var s = e.stateNode;
        t ? fR(a, s, t) : sR(a, s);
      } else if (i !== je) {
        var f = e.child;
        if (f !== null) {
          TS(f, t, a);
          for (var p = f.sibling; p !== null; )
            TS(p, t, a), p = p.sibling;
        }
      }
    }
    var pr = null, Ii = !1;
    function Wx(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case ee: {
              pr = i.stateNode, Ii = !1;
              break e;
            }
            case ue: {
              pr = i.stateNode.containerInfo, Ii = !0;
              break e;
            }
            case je: {
              pr = i.stateNode.containerInfo, Ii = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (pr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        AC(e, t, a), pr = null, Ii = !1;
      }
      Yx(a);
    }
    function ko(e, t, a) {
      for (var i = a.child; i !== null; )
        AC(e, t, i), i = i.sibling;
    }
    function AC(e, t, a) {
      switch (Cv(a), a.tag) {
        case ee:
          dr || Af(a, t);
        case Ce: {
          {
            var i = pr, u = Ii;
            pr = null, ko(e, t, a), pr = i, Ii = u, pr !== null && (Ii ? vR(pr, a.stateNode) : pR(pr, a.stateNode));
          }
          return;
        }
        case Pt: {
          pr !== null && (Ii ? hR(pr, a.stateNode) : Ny(pr, a.stateNode));
          return;
        }
        case je: {
          {
            var s = pr, f = Ii;
            pr = a.stateNode.containerInfo, Ii = !0, ko(e, t, a), pr = s, Ii = f;
          }
          return;
        }
        case He:
        case Me:
        case Ze:
        case Ve: {
          if (!dr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var _ = g, w = _.destroy, M = _.tag;
                  w !== void 0 && ((M & Rl) !== Ra ? vm(a, t, w) : (M & In) !== Ra && (Qu(a), a.mode & pt ? (bl(), vm(a, t, w), _l(a)) : vm(a, t, w), hs())), g = g.next;
                } while (g !== y);
              }
            }
          }
          ko(e, t, a);
          return;
        }
        case _e: {
          if (!dr) {
            Af(a, t);
            var N = a.stateNode;
            typeof N.componentWillUnmount == "function" && ES(a, t, N);
          }
          ko(e, t, a);
          return;
        }
        case Jt: {
          ko(e, t, a);
          return;
        }
        case Ie: {
          if (
            // TODO: Remove this dead flag
            a.mode & ge
          ) {
            var F = dr;
            dr = F || a.memoizedState !== null, ko(e, t, a), dr = F;
          } else
            ko(e, t, a);
          break;
        }
        default: {
          ko(e, t, a);
          return;
        }
      }
    }
    function Gx(e) {
      e.memoizedState;
    }
    function qx(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && zR(s);
          }
        }
      }
    }
    function FC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Mx()), t.forEach(function(i) {
          var u = I_.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Wr)
              if (zf !== null && Uf !== null)
                Ap(Uf, zf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function Xx(e, t, a) {
      zf = a, Uf = e, Gt(t), HC(t, e), Gt(t), zf = null, Uf = null;
    }
    function Qi(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            Wx(e, t, s);
          } catch (v) {
            Vt(s, t, v);
          }
        }
      var f = Wo();
      if (t.subtreeFlags & br)
        for (var p = t.child; p !== null; )
          Gt(p), HC(p, e), p = p.sibling;
      Gt(f);
    }
    function HC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case He:
        case Me:
        case Ze:
        case Ve: {
          if (Qi(t, e), Dl(e), u & me) {
            try {
              Yi(Rl | Yn, e, e.return), Do(Rl | Yn, e);
            } catch (Le) {
              Vt(e, e.return, Le);
            }
            if (e.mode & pt) {
              try {
                bl(), Yi(In | Yn, e, e.return);
              } catch (Le) {
                Vt(e, e.return, Le);
              }
              _l(e);
            } else
              try {
                Yi(In | Yn, e, e.return);
              } catch (Le) {
                Vt(e, e.return, Le);
              }
          }
          return;
        }
        case _e: {
          Qi(t, e), Dl(e), u & Yr && i !== null && Af(i, i.return);
          return;
        }
        case ee: {
          Qi(t, e), Dl(e), u & Yr && i !== null && Af(i, i.return);
          {
            if (e.flags & ca) {
              var s = e.stateNode;
              try {
                A0(s);
              } catch (Le) {
                Vt(e, e.return, Le);
              }
            }
            if (u & me) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    uR(f, g, y, v, p, e);
                  } catch (Le) {
                    Vt(e, e.return, Le);
                  }
              }
            }
          }
          return;
        }
        case Ce: {
          if (Qi(t, e), Dl(e), u & me) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var _ = e.stateNode, w = e.memoizedProps, M = i !== null ? i.memoizedProps : w;
            try {
              oR(_, M, w);
            } catch (Le) {
              Vt(e, e.return, Le);
            }
          }
          return;
        }
        case ue: {
          if (Qi(t, e), Dl(e), u & me && i !== null) {
            var N = i.memoizedState;
            if (N.isDehydrated)
              try {
                NR(t.containerInfo);
              } catch (Le) {
                Vt(e, e.return, Le);
              }
          }
          return;
        }
        case je: {
          Qi(t, e), Dl(e);
          return;
        }
        case Ee: {
          Qi(t, e), Dl(e);
          var F = e.child;
          if (F.flags & il) {
            var ae = F.stateNode, xe = F.memoizedState, Se = xe !== null;
            if (ae.isHidden = Se, Se) {
              var it = F.alternate !== null && F.alternate.memoizedState !== null;
              it || O_();
            }
          }
          if (u & me) {
            try {
              Gx(e);
            } catch (Le) {
              Vt(e, e.return, Le);
            }
            FC(e);
          }
          return;
        }
        case Ie: {
          var Ke = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & ge
          ) {
            var D = dr;
            dr = D || Ke, Qi(t, e), dr = D;
          } else
            Qi(t, e);
          if (Dl(e), u & il) {
            var H = e.stateNode, k = e.memoizedState, Q = k !== null, ie = e;
            if (H.isHidden = Q, Q && !Ke && (ie.mode & ge) !== we) {
              fe = ie;
              for (var J = ie.child; J !== null; )
                fe = J, Zx(J), J = J.sibling;
            }
            $x(ie, Q);
          }
          return;
        }
        case ft: {
          Qi(t, e), Dl(e), u & me && FC(e);
          return;
        }
        case Jt:
          return;
        default: {
          Qi(t, e), Dl(e);
          return;
        }
      }
    }
    function Dl(e) {
      var t = e.flags;
      if (t & Mt) {
        try {
          Qx(e);
        } catch (a) {
          Vt(e, e.return, a);
        }
        e.flags &= ~Mt;
      }
      t & Za && (e.flags &= ~Za);
    }
    function Kx(e, t, a) {
      zf = a, Uf = t, fe = e, jC(e, t, a), zf = null, Uf = null;
    }
    function jC(e, t, a) {
      for (var i = (e.mode & ge) !== we; fe !== null; ) {
        var u = fe, s = u.child;
        if (u.tag === Ie && i) {
          var f = u.memoizedState !== null, p = f || pm;
          if (p) {
            RS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || dr, _ = pm, w = dr;
            pm = p, dr = g, dr && !w && (fe = u, Jx(u));
            for (var M = s; M !== null; )
              fe = M, jC(
                M,
                // New root; bubble back up to here and stop.
                t,
                a
              ), M = M.sibling;
            fe = u, pm = _, dr = w, RS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & ja) !== Re && s !== null ? (s.return = u, fe = s) : RS(e, t, a);
      }
    }
    function RS(e, t, a) {
      for (; fe !== null; ) {
        var i = fe;
        if ((i.flags & ja) !== Re) {
          var u = i.alternate;
          Gt(i);
          try {
            Bx(t, u, i, a);
          } catch (f) {
            Vt(i, i.return, f);
          }
          At();
        }
        if (i === e) {
          fe = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, fe = s;
          return;
        }
        fe = i.return;
      }
    }
    function Zx(e) {
      for (; fe !== null; ) {
        var t = fe, a = t.child;
        switch (t.tag) {
          case He:
          case Me:
          case Ze:
          case Ve: {
            if (t.mode & pt)
              try {
                bl(), Yi(In, t, t.return);
              } finally {
                _l(t);
              }
            else
              Yi(In, t, t.return);
            break;
          }
          case _e: {
            Af(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && ES(t, t.return, i);
            break;
          }
          case ee: {
            Af(t, t.return);
            break;
          }
          case Ie: {
            var u = t.memoizedState !== null;
            if (u) {
              VC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, fe = a) : VC(e);
      }
    }
    function VC(e) {
      for (; fe !== null; ) {
        var t = fe;
        if (t === e) {
          fe = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, fe = a;
          return;
        }
        fe = t.return;
      }
    }
    function Jx(e) {
      for (; fe !== null; ) {
        var t = fe, a = t.child;
        if (t.tag === Ie) {
          var i = t.memoizedState !== null;
          if (i) {
            BC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, fe = a) : BC(e);
      }
    }
    function BC(e) {
      for (; fe !== null; ) {
        var t = fe;
        Gt(t);
        try {
          Px(t);
        } catch (i) {
          Vt(t, t.return, i);
        }
        if (At(), t === e) {
          fe = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, fe = a;
          return;
        }
        fe = t.return;
      }
    }
    function e_(e, t, a, i) {
      fe = t, t_(t, e, a, i);
    }
    function t_(e, t, a, i) {
      for (; fe !== null; ) {
        var u = fe, s = u.child;
        (u.subtreeFlags & Dr) !== Re && s !== null ? (s.return = u, fe = s) : n_(e, t, a, i);
      }
    }
    function n_(e, t, a, i) {
      for (; fe !== null; ) {
        var u = fe;
        if ((u.flags & xr) !== Re) {
          Gt(u);
          try {
            r_(t, u, a, i);
          } catch (f) {
            Vt(u, u.return, f);
          }
          At();
        }
        if (u === e) {
          fe = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, fe = s;
          return;
        }
        fe = u.return;
      }
    }
    function r_(e, t, a, i) {
      switch (t.tag) {
        case He:
        case Me:
        case Ve: {
          if (t.mode & pt) {
            eS();
            try {
              Do(cr | Yn, t);
            } finally {
              Jg(t);
            }
          } else
            Do(cr | Yn, t);
          break;
        }
      }
    }
    function a_(e) {
      fe = e, i_();
    }
    function i_() {
      for (; fe !== null; ) {
        var e = fe, t = e.child;
        if ((fe.flags & vt) !== Re) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              fe = u, o_(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            fe = e;
          }
        }
        (e.subtreeFlags & Dr) !== Re && t !== null ? (t.return = e, fe = t) : l_();
      }
    }
    function l_() {
      for (; fe !== null; ) {
        var e = fe;
        (e.flags & xr) !== Re && (Gt(e), u_(e), At());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, fe = t;
          return;
        }
        fe = e.return;
      }
    }
    function u_(e) {
      switch (e.tag) {
        case He:
        case Me:
        case Ve: {
          e.mode & pt ? (eS(), Yi(cr | Yn, e, e.return), Jg(e)) : Yi(cr | Yn, e, e.return);
          break;
        }
      }
    }
    function o_(e, t) {
      for (; fe !== null; ) {
        var a = fe;
        Gt(a), c_(a, t), At();
        var i = a.child;
        i !== null ? (i.return = a, fe = i) : s_(e);
      }
    }
    function s_(e) {
      for (; fe !== null; ) {
        var t = fe, a = t.sibling, i = t.return;
        if (NC(t), t === e) {
          fe = null;
          return;
        }
        if (a !== null) {
          a.return = i, fe = a;
          return;
        }
        fe = i;
      }
    }
    function c_(e, t) {
      switch (e.tag) {
        case He:
        case Me:
        case Ve: {
          e.mode & pt ? (eS(), Yi(cr, e, t), Jg(e)) : Yi(cr, e, t);
          break;
        }
      }
    }
    function f_(e) {
      switch (e.tag) {
        case He:
        case Me:
        case Ve: {
          try {
            Do(In | Yn, e);
          } catch (a) {
            Vt(e, e.return, a);
          }
          break;
        }
        case _e: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            Vt(e, e.return, a);
          }
          break;
        }
      }
    }
    function d_(e) {
      switch (e.tag) {
        case He:
        case Me:
        case Ve: {
          try {
            Do(cr | Yn, e);
          } catch (t) {
            Vt(e, e.return, t);
          }
          break;
        }
      }
    }
    function p_(e) {
      switch (e.tag) {
        case He:
        case Me:
        case Ve: {
          try {
            Yi(In | Yn, e, e.return);
          } catch (a) {
            Vt(e, e.return, a);
          }
          break;
        }
        case _e: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && ES(e, e.return, t);
          break;
        }
      }
    }
    function v_(e) {
      switch (e.tag) {
        case He:
        case Me:
        case Ve:
          try {
            Yi(cr | Yn, e, e.return);
          } catch (t) {
            Vt(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var xp = Symbol.for;
      xp("selector.component"), xp("selector.has_pseudo_class"), xp("selector.role"), xp("selector.test_id"), xp("selector.text");
    }
    var h_ = [];
    function m_() {
      h_.forEach(function(e) {
        return e();
      });
    }
    var y_ = nt.ReactCurrentActQueue;
    function g_(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function PC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && y_.current !== null && E("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var S_ = Math.ceil, wS = nt.ReactCurrentDispatcher, xS = nt.ReactCurrentOwner, vr = nt.ReactCurrentBatchConfig, Wi = nt.ReactCurrentActQueue, Gn = (
      /*             */
      0
    ), $C = (
      /*               */
      1
    ), hr = (
      /*                */
      2
    ), di = (
      /*                */
      4
    ), Su = 0, _p = 1, Zs = 2, hm = 3, bp = 4, YC = 5, _S = 6, at = Gn, Xr = null, hn = null, qn = j, kl = j, bS = So(j), Xn = Su, Dp = null, mm = j, kp = j, ym = j, Op = null, wa = null, DS = 0, IC = 500, QC = 1 / 0, E_ = 500, Eu = null;
    function Lp() {
      QC = Sn() + E_;
    }
    function WC() {
      return QC;
    }
    var gm = !1, kS = null, Ff = null, Js = !1, Oo = null, Mp = j, OS = [], LS = null, C_ = 50, Np = 0, MS = null, NS = !1, Sm = !1, T_ = 50, Hf = 0, Em = null, zp = zt, Cm = j, GC = !1;
    function Tm() {
      return Xr;
    }
    function Kr() {
      return (at & (hr | di)) !== Gn ? Sn() : (zp !== zt || (zp = Sn()), zp);
    }
    function Lo(e) {
      var t = e.mode;
      if ((t & ge) === we)
        return be;
      if ((at & hr) !== Gn && qn !== j)
        return Ju(qn);
      var a = gw() !== yw;
      if (a) {
        if (vr.transition !== null) {
          var i = vr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Cm === fn && (Cm = zv()), Cm;
      }
      var u = ma();
      if (u !== fn)
        return u;
      var s = nR();
      return s;
    }
    function R_(e) {
      var t = e.mode;
      return (t & ge) === we ? be : Mr();
    }
    function Kn(e, t, a, i) {
      W_(), GC && E("useInsertionEffect must not schedule updates."), NS && (Sm = !0), iu(e, a, i), (at & hr) !== j && e === Xr ? X_(t) : (Wr && Yc(e, t, a), K_(t), e === Xr && ((at & hr) === Gn && (kp = Pe(kp, a)), Xn === bp && Mo(e, qn)), xa(e, i), a === be && at === Gn && (t.mode & ge) === we && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Wi.isBatchingLegacy && (Lp(), W0()));
    }
    function w_(e, t, a) {
      var i = e.current;
      i.lanes = t, iu(e, t, a), xa(e, a);
    }
    function x_(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (at & hr) !== Gn
      );
    }
    function xa(e, t) {
      var a = e.callbackNode;
      Zm(e, t);
      var i = Rs(e, e === Xr ? qn : j);
      if (i === j) {
        a !== null && c1(a), e.callbackNode = null, e.callbackPriority = fn;
        return;
      }
      var u = dn(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(Wi.current !== null && a !== VS)) {
        a == null && s !== be && E("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && c1(a);
      var f;
      if (u === be)
        e.tag === Eo ? (Wi.isBatchingLegacy !== null && (Wi.didScheduleLegacyUpdate = !0), ew(KC.bind(null, e))) : Q0(KC.bind(null, e)), Wi.current !== null ? Wi.current.push(Co) : aR(function() {
          (at & (hr | di)) === Gn && Co();
        }), f = null;
      else {
        var p;
        switch ($n(i)) {
          case pn:
            p = kr;
            break;
          case Ni:
            p = $u;
            break;
          case ri:
            p = ei;
            break;
          case eo:
            p = ps;
            break;
          default:
            p = ei;
            break;
        }
        f = BS(p, qC.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function qC(e, t) {
      if (Ww(), zp = zt, Cm = j, (at & (hr | di)) !== Gn)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Tu();
      if (i && e.callbackNode !== a)
        return null;
      var u = Rs(e, e === Xr ? qn : j);
      if (u === j)
        return null;
      var s = !xs(e, u) && !Nv(e, u) && !t, f = s ? U_(e, u) : wm(e, u);
      if (f !== Su) {
        if (f === Zs) {
          var p = hl(e);
          p !== j && (u = p, f = zS(e, p));
        }
        if (f === _p) {
          var v = Dp;
          throw ec(e, j), Mo(e, u), xa(e, Sn()), v;
        }
        if (f === _S)
          Mo(e, u);
        else {
          var y = !xs(e, u), g = e.current.alternate;
          if (y && !b_(g)) {
            if (f = wm(e, u), f === Zs) {
              var _ = hl(e);
              _ !== j && (u = _, f = zS(e, _));
            }
            if (f === _p) {
              var w = Dp;
              throw ec(e, j), Mo(e, u), xa(e, Sn()), w;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, __(e, f, u);
        }
      }
      return xa(e, Sn()), e.callbackNode === a ? qC.bind(null, e) : null;
    }
    function zS(e, t) {
      var a = Op;
      if (Ic(e)) {
        var i = ec(e, t);
        i.flags |= lr, WR(e.containerInfo);
      }
      var u = wm(e, t);
      if (u !== Zs) {
        var s = wa;
        wa = a, s !== null && XC(s);
      }
      return u;
    }
    function XC(e) {
      wa === null ? wa = e : wa.push.apply(wa, e);
    }
    function __(e, t, a) {
      switch (t) {
        case Su:
        case _p:
          throw new Error("Root did not complete. This is a bug in React.");
        case Zs: {
          tc(e, wa, Eu);
          break;
        }
        case hm: {
          if (Mo(e, a), Ov(a) && // do not delay if we're inside an act() scope
          !f1()) {
            var i = DS + IC - Sn();
            if (i > 10) {
              var u = Rs(e, j);
              if (u !== j)
                break;
              var s = e.suspendedLanes;
              if (!au(s, a)) {
                Kr(), Pc(e, s);
                break;
              }
              e.timeoutHandle = Ly(tc.bind(null, e, wa, Eu), i);
              break;
            }
          }
          tc(e, wa, Eu);
          break;
        }
        case bp: {
          if (Mo(e, a), Mv(a))
            break;
          if (!f1()) {
            var f = jc(e, a), p = f, v = Sn() - p, y = Q_(v) - v;
            if (y > 10) {
              e.timeoutHandle = Ly(tc.bind(null, e, wa, Eu), y);
              break;
            }
          }
          tc(e, wa, Eu);
          break;
        }
        case YC: {
          tc(e, wa, Eu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function b_(e) {
      for (var t = e; ; ) {
        if (t.flags & Wl) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!ce(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & Wl && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Mo(e, t) {
      t = _s(t, ym), t = _s(t, kp), Av(e, t);
    }
    function KC(e) {
      if (Gw(), (at & (hr | di)) !== Gn)
        throw new Error("Should not already be working.");
      Tu();
      var t = Rs(e, j);
      if (!Nr(t, be))
        return xa(e, Sn()), null;
      var a = wm(e, t);
      if (e.tag !== Eo && a === Zs) {
        var i = hl(e);
        i !== j && (t = i, a = zS(e, i));
      }
      if (a === _p) {
        var u = Dp;
        throw ec(e, j), Mo(e, t), xa(e, Sn()), u;
      }
      if (a === _S)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, tc(e, wa, Eu), xa(e, Sn()), null;
    }
    function D_(e, t) {
      t !== j && (_d(e, Pe(t, be)), xa(e, Sn()), (at & (hr | di)) === Gn && (Lp(), Co()));
    }
    function US(e, t) {
      var a = at;
      at |= $C;
      try {
        return e(t);
      } finally {
        at = a, at === Gn && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !Wi.isBatchingLegacy && (Lp(), W0());
      }
    }
    function k_(e, t, a, i, u) {
      var s = ma(), f = vr.transition;
      try {
        return vr.transition = null, an(pn), e(t, a, i, u);
      } finally {
        an(s), vr.transition = f, at === Gn && Lp();
      }
    }
    function Cu(e) {
      Oo !== null && Oo.tag === Eo && (at & (hr | di)) === Gn && Tu();
      var t = at;
      at |= $C;
      var a = vr.transition, i = ma();
      try {
        return vr.transition = null, an(pn), e ? e() : void 0;
      } finally {
        an(i), vr.transition = a, at = t, (at & (hr | di)) === Gn && Co();
      }
    }
    function ZC() {
      return (at & (hr | di)) !== Gn;
    }
    function Rm(e, t) {
      Ar(bS, kl, e), kl = Pe(kl, t);
    }
    function AS(e) {
      kl = bS.current, Ur(bS, e);
    }
    function ec(e, t) {
      e.finishedWork = null, e.finishedLanes = j;
      var a = e.timeoutHandle;
      if (a !== My && (e.timeoutHandle = My, rR(a)), hn !== null)
        for (var i = hn.return; i !== null; ) {
          var u = i.alternate;
          bC(u, i), i = i.return;
        }
      Xr = e;
      var s = nc(e.current, null);
      return hn = s, qn = kl = t, Xn = Su, Dp = null, mm = j, kp = j, ym = j, Op = null, wa = null, Tw(), ji.discardPendingWarnings(), s;
    }
    function JC(e, t) {
      do {
        var a = hn;
        try {
          if (Lh(), kE(), At(), xS.current = null, a === null || a.return === null) {
            Xn = _p, Dp = t, hn = null;
            return;
          }
          if (dt && a.mode & pt && sm(a, !0), Ge)
            if (Xl(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              bv(a, i, qn);
            } else
              _v(a, t, qn);
          Jw(e, a.return, a, t, qn), r1(a);
        } catch (u) {
          t = u, hn === a && a !== null ? (a = a.return, hn = a) : a = hn;
          continue;
        }
        return;
      } while (!0);
    }
    function e1() {
      var e = wS.current;
      return wS.current = am, e === null ? am : e;
    }
    function t1(e) {
      wS.current = e;
    }
    function O_() {
      DS = Sn();
    }
    function Up(e) {
      mm = Pe(e, mm);
    }
    function L_() {
      Xn === Su && (Xn = hm);
    }
    function FS() {
      (Xn === Su || Xn === hm || Xn === Zs) && (Xn = bp), Xr !== null && (ws(mm) || ws(kp)) && Mo(Xr, qn);
    }
    function M_(e) {
      Xn !== bp && (Xn = Zs), Op === null ? Op = [e] : Op.push(e);
    }
    function N_() {
      return Xn === Su;
    }
    function wm(e, t) {
      var a = at;
      at |= hr;
      var i = e1();
      if (Xr !== e || qn !== t) {
        if (Wr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Ap(e, qn), u.clear()), bd(e, t);
        }
        Eu = Ds(), ec(e, t);
      }
      Gu(t);
      do
        try {
          z_();
          break;
        } catch (s) {
          JC(e, s);
        }
      while (!0);
      if (Lh(), at = a, t1(i), hn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return dl(), Xr = null, qn = j, Xn;
    }
    function z_() {
      for (; hn !== null; )
        n1(hn);
    }
    function U_(e, t) {
      var a = at;
      at |= hr;
      var i = e1();
      if (Xr !== e || qn !== t) {
        if (Wr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Ap(e, qn), u.clear()), bd(e, t);
        }
        Eu = Ds(), Lp(), ec(e, t);
      }
      Gu(t);
      do
        try {
          A_();
          break;
        } catch (s) {
          JC(e, s);
        }
      while (!0);
      return Lh(), t1(i), at = a, hn !== null ? (ys(), Su) : (dl(), Xr = null, qn = j, Xn);
    }
    function A_() {
      for (; hn !== null && !Sv(); )
        n1(hn);
    }
    function n1(e) {
      var t = e.alternate;
      Gt(e);
      var a;
      (e.mode & pt) !== we ? (Zg(e), a = HS(t, e, kl), sm(e, !0)) : a = HS(t, e, kl), At(), e.memoizedProps = e.pendingProps, a === null ? r1(e) : hn = a, xS.current = null;
    }
    function r1(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & ll) === Re) {
          Gt(t);
          var u = void 0;
          if ((t.mode & pt) === we ? u = _C(a, t, kl) : (Zg(t), u = _C(a, t, kl), sm(t, !1)), At(), u !== null) {
            hn = u;
            return;
          }
        } else {
          var s = Lx(a, t);
          if (s !== null) {
            s.flags &= Oi, hn = s;
            return;
          }
          if ((t.mode & pt) !== we) {
            sm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= ll, i.subtreeFlags = Re, i.deletions = null;
          else {
            Xn = _S, hn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          hn = v;
          return;
        }
        t = i, hn = t;
      } while (t !== null);
      Xn === Su && (Xn = YC);
    }
    function tc(e, t, a) {
      var i = ma(), u = vr.transition;
      try {
        vr.transition = null, an(pn), F_(e, t, a, i);
      } finally {
        vr.transition = u, an(i);
      }
      return null;
    }
    function F_(e, t, a, i) {
      do
        Tu();
      while (Oo !== null);
      if (G_(), (at & (hr | di)) !== Gn)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Tv(s), u === null)
        return vs(), null;
      if (s === j && E("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = j, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = fn;
      var f = Pe(u.lanes, u.childLanes);
      $c(e, f), e === Xr && (Xr = null, hn = null, qn = j), ((u.subtreeFlags & Dr) !== Re || (u.flags & Dr) !== Re) && (Js || (Js = !0, LS = a, BS(ei, function() {
        return Tu(), null;
      })));
      var p = (u.subtreeFlags & (_r | br | ja | Dr)) !== Re, v = (u.flags & (_r | br | ja | Dr)) !== Re;
      if (p || v) {
        var y = vr.transition;
        vr.transition = null;
        var g = ma();
        an(pn);
        var _ = at;
        at |= di, xS.current = null, Ax(e, u), eC(), Xx(e, u, s), XT(e.containerInfo), e.current = u, Wu(s), Kx(u, e, s), Dv(), Pu(), at = _, an(g), vr.transition = y;
      } else
        e.current = u, eC();
      var w = Js;
      if (Js ? (Js = !1, Oo = e, Mp = s) : (Hf = 0, Em = null), f = e.pendingLanes, f === j && (Ff = null), w || u1(e.current, !1), cl(u.stateNode, i), Wr && e.memoizedUpdaters.clear(), m_(), xa(e, Sn()), t !== null)
        for (var M = e.onRecoverableError, N = 0; N < t.length; N++) {
          var F = t[N], ae = F.stack, xe = F.digest;
          M(F.value, {
            componentStack: ae,
            digest: xe
          });
        }
      if (gm) {
        gm = !1;
        var Se = kS;
        throw kS = null, Se;
      }
      return Nr(Mp, be) && e.tag !== Eo && Tu(), f = e.pendingLanes, Nr(f, be) ? (Qw(), e === MS ? Np++ : (Np = 0, MS = e)) : Np = 0, Co(), vs(), null;
    }
    function Tu() {
      if (Oo !== null) {
        var e = $n(Mp), t = ny(ri, e), a = vr.transition, i = ma();
        try {
          return vr.transition = null, an(t), j_();
        } finally {
          an(i), vr.transition = a;
        }
      }
      return !1;
    }
    function H_(e) {
      OS.push(e), Js || (Js = !0, BS(ei, function() {
        return Tu(), null;
      }));
    }
    function j_() {
      if (Oo === null)
        return !1;
      var e = LS;
      LS = null;
      var t = Oo, a = Mp;
      if (Oo = null, Mp = j, (at & (hr | di)) !== Gn)
        throw new Error("Cannot flush passive effects while already rendering.");
      NS = !0, Sm = !1, ms(a);
      var i = at;
      at |= di, a_(t.current), e_(t, t.current, a, e);
      {
        var u = OS;
        OS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Vx(t, f);
        }
      }
      ti(), u1(t.current, !0), at = i, Co(), Sm ? t === Em ? Hf++ : (Hf = 0, Em = t) : Hf = 0, NS = !1, Sm = !1, yd(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function a1(e) {
      return Ff !== null && Ff.has(e);
    }
    function V_(e) {
      Ff === null ? Ff = /* @__PURE__ */ new Set([e]) : Ff.add(e);
    }
    function B_(e) {
      gm || (gm = !0, kS = e);
    }
    var P_ = B_;
    function i1(e, t, a) {
      var i = Xs(a, t), u = nC(e, i, be), s = Ro(e, u, be), f = Kr();
      s !== null && (iu(s, be, f), xa(s, f));
    }
    function Vt(e, t, a) {
      if (Nx(a), Fp(!1), e.tag === ue) {
        i1(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === ue) {
          i1(i, e, a);
          return;
        } else if (i.tag === _e) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !a1(s)) {
            var f = Xs(a, e), p = aS(i, f, be), v = Ro(i, p, be), y = Kr();
            v !== null && (iu(v, be, y), xa(v, y));
            return;
          }
        }
        i = i.return;
      }
      E(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function $_(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Kr();
      Pc(e, a), Z_(e), Xr === e && au(qn, a) && (Xn === bp || Xn === hm && Ov(qn) && Sn() - DS < IC ? ec(e, j) : ym = Pe(ym, a)), xa(e, u);
    }
    function l1(e, t) {
      t === fn && (t = R_(e));
      var a = Kr(), i = Ta(e, t);
      i !== null && (iu(i, t, a), xa(i, a));
    }
    function Y_(e) {
      var t = e.memoizedState, a = fn;
      t !== null && (a = t.retryLane), l1(e, a);
    }
    function I_(e, t) {
      var a = fn, i;
      switch (e.tag) {
        case Ee:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case ft:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), l1(e, a);
    }
    function Q_(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : S_(e / 1960) * 1960;
    }
    function W_() {
      if (Np > C_)
        throw Np = 0, MS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Hf > T_ && (Hf = 0, Em = null, E("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function G_() {
      ji.flushLegacyContextWarning(), ji.flushPendingUnsafeLifecycleWarnings();
    }
    function u1(e, t) {
      Gt(e), xm(e, da, p_), t && xm(e, Gl, v_), xm(e, da, f_), t && xm(e, Gl, d_), At();
    }
    function xm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== Re ? i = i.child : ((i.flags & t) !== Re && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var _m = null;
    function o1(e) {
      {
        if ((at & hr) !== Gn || !(e.mode & ge))
          return;
        var t = e.tag;
        if (t !== qe && t !== ue && t !== _e && t !== He && t !== Me && t !== Ze && t !== Ve)
          return;
        var a = Ue(e) || "ReactComponent";
        if (_m !== null) {
          if (_m.has(a))
            return;
          _m.add(a);
        } else
          _m = /* @__PURE__ */ new Set([a]);
        var i = Wt;
        try {
          Gt(e), E("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Gt(e) : At();
        }
      }
    }
    var HS;
    {
      var q_ = null;
      HS = function(e, t, a) {
        var i = m1(q_, t);
        try {
          return CC(e, t, a);
        } catch (s) {
          if (ow() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Lh(), kE(), bC(e, t), m1(t, i), t.mode & pt && Zg(t), Fa(null, CC, null, e, t, a), qm()) {
            var u = ki();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var s1 = !1, jS;
    jS = /* @__PURE__ */ new Set();
    function X_(e) {
      if (Tr && !$w())
        switch (e.tag) {
          case He:
          case Me:
          case Ve: {
            var t = hn && Ue(hn) || "Unknown", a = t;
            if (!jS.has(a)) {
              jS.add(a);
              var i = Ue(e) || "Unknown";
              E("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case _e: {
            s1 || (E("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), s1 = !0);
            break;
          }
        }
    }
    function Ap(e, t) {
      if (Wr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Yc(e, i, t);
        });
      }
    }
    var VS = {};
    function BS(e, t) {
      {
        var a = Wi.current;
        return a !== null ? (a.push(t), VS) : vd(e, t);
      }
    }
    function c1(e) {
      if (e !== VS)
        return Tc(e);
    }
    function f1() {
      return Wi.current !== null;
    }
    function K_(e) {
      {
        if (e.mode & ge) {
          if (!PC())
            return;
        } else if (!g_() || at !== Gn || e.tag !== He && e.tag !== Me && e.tag !== Ve)
          return;
        if (Wi.current === null) {
          var t = Wt;
          try {
            Gt(e), E(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ue(e));
          } finally {
            t ? Gt(e) : At();
          }
        }
      }
    }
    function Z_(e) {
      e.tag !== Eo && PC() && Wi.current === null && E(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Fp(e) {
      GC = e;
    }
    var pi = null, jf = null, J_ = function(e) {
      pi = e;
    };
    function Vf(e) {
      {
        if (pi === null)
          return e;
        var t = pi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function PS(e) {
      return Vf(e);
    }
    function $S(e) {
      {
        if (pi === null)
          return e;
        var t = pi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Vf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: Dt,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function d1(e, t) {
      {
        if (pi === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case _e: {
            typeof i == "function" && (u = !0);
            break;
          }
          case He: {
            (typeof i == "function" || s === On) && (u = !0);
            break;
          }
          case Me: {
            (s === Dt || s === On) && (u = !0);
            break;
          }
          case Ze:
          case Ve: {
            (s === Ul || s === On) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = pi(a);
          if (f !== void 0 && f === pi(i))
            return !0;
        }
        return !1;
      }
    }
    function p1(e) {
      {
        if (pi === null || typeof WeakSet != "function")
          return;
        jf === null && (jf = /* @__PURE__ */ new WeakSet()), jf.add(e);
      }
    }
    var eb = function(e, t) {
      {
        if (pi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Tu(), Cu(function() {
          YS(e.current, i, a);
        });
      }
    }, tb = function(e, t) {
      {
        if (e.context !== Va)
          return;
        Tu(), Cu(function() {
          Hp(t, e, null, null);
        });
      }
    };
    function YS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case He:
          case Ve:
          case _e:
            v = p;
            break;
          case Me:
            v = p.render;
            break;
        }
        if (pi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var _ = pi(v);
          _ !== void 0 && (a.has(_) ? g = !0 : t.has(_) && (f === _e ? g = !0 : y = !0));
        }
        if (jf !== null && (jf.has(e) || i !== null && jf.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var w = Ta(e, be);
          w !== null && Kn(w, e, be, zt);
        }
        u !== null && !g && YS(u, t, a), s !== null && YS(s, t, a);
      }
    }
    var nb = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return IS(e.current, i, a), a;
      }
    };
    function IS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case He:
          case Ve:
          case _e:
            p = f;
            break;
          case Me:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? rb(e, a) : i !== null && IS(i, t, a), u !== null && IS(u, t, a);
      }
    }
    function rb(e, t) {
      {
        var a = ab(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case ee:
              t.add(i.stateNode);
              return;
            case je:
              t.add(i.stateNode.containerInfo);
              return;
            case ue:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function ab(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === ee)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var QS;
    {
      QS = !1;
      try {
        var v1 = Object.preventExtensions({});
      } catch {
        QS = !0;
      }
    }
    function ib(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Re, this.subtreeFlags = Re, this.deletions = null, this.lanes = j, this.childLanes = j, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !QS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Ba = function(e, t, a, i) {
      return new ib(e, t, a, i);
    };
    function WS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function lb(e) {
      return typeof e == "function" && !WS(e) && e.defaultProps === void 0;
    }
    function ub(e) {
      if (typeof e == "function")
        return WS(e) ? _e : He;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Dt)
          return Me;
        if (t === Ul)
          return Ze;
      }
      return qe;
    }
    function nc(e, t) {
      var a = e.alternate;
      a === null ? (a = Ba(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Re, a.subtreeFlags = Re, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Pn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case qe:
        case He:
        case Ve:
          a.type = Vf(e.type);
          break;
        case _e:
          a.type = PS(e.type);
          break;
        case Me:
          a.type = $S(e.type);
          break;
      }
      return a;
    }
    function ob(e, t) {
      e.flags &= Pn | Mt;
      var a = e.alternate;
      if (a === null)
        e.childLanes = j, e.lanes = t, e.child = null, e.subtreeFlags = Re, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Re, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function sb(e, t, a) {
      var i;
      return e === Rh ? (i = ge, t === !0 && (i |= nn, i |= va)) : i = we, Wr && (i |= pt), Ba(ue, null, null, i);
    }
    function GS(e, t, a, i, u, s) {
      var f = qe, p = e;
      if (typeof e == "function")
        WS(e) ? (f = _e, p = PS(p)) : p = Vf(p);
      else if (typeof e == "string")
        f = ee;
      else
        e: switch (e) {
          case Ma:
            return No(a.children, u, s, t);
          case Ml:
            f = An, u |= nn, (u & ge) !== we && (u |= va);
            break;
          case _u:
            return cb(a, u, s, t);
          case Nl:
            return fb(a, u, s, t);
          case zl:
            return db(a, u, s, t);
          case Fo:
            return h1(a, u, s, t);
          case Pf:
          case ac:
          case $f:
          case Qt:
          case ic:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case bu:
                  f = Bt;
                  break e;
                case Ao:
                  f = Fn;
                  break e;
                case Dt:
                  f = Me, p = $S(p);
                  break e;
                case Ul:
                  f = Ze;
                  break e;
                case On:
                  f = Cn, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var y = i ? Ue(i) : null;
              y && (v += `

Check the render method of \`` + y + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var g = Ba(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function qS(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = GS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function No(e, t, a, i) {
      var u = Ba(rt, e, i, t);
      return u.lanes = a, u;
    }
    function cb(e, t, a, i) {
      typeof e.id != "string" && E('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = Ba(gt, e, i, t | pt);
      return u.elementType = _u, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function fb(e, t, a, i) {
      var u = Ba(Ee, e, i, t);
      return u.elementType = Nl, u.lanes = a, u;
    }
    function db(e, t, a, i) {
      var u = Ba(ft, e, i, t);
      return u.elementType = zl, u.lanes = a, u;
    }
    function h1(e, t, a, i) {
      var u = Ba(Ie, e, i, t);
      u.elementType = Fo, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function XS(e, t, a) {
      var i = Ba(Ce, e, null, t);
      return i.lanes = a, i;
    }
    function pb() {
      var e = Ba(ee, null, null, we);
      return e.elementType = "DELETED", e;
    }
    function vb(e) {
      var t = Ba(Pt, null, null, we);
      return t.stateNode = e, t;
    }
    function KS(e, t, a) {
      var i = e.children !== null ? e.children : [], u = Ba(je, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function m1(e, t) {
      return e === null && (e = Ba(qe, null, null, we)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function hb(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = My, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = fn, this.eventTimes = bs(j), this.expirationTimes = bs(zt), this.pendingLanes = j, this.suspendedLanes = j, this.pingedLanes = j, this.expiredLanes = j, this.mutableReadLanes = j, this.finishedLanes = j, this.entangledLanes = j, this.entanglements = bs(j), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < cn; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Rh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Eo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function y1(e, t, a, i, u, s, f, p, v, y) {
      var g = new hb(e, t, a, p, v), _ = sb(t, s);
      g.current = _, _.stateNode = g;
      {
        var w = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        _.memoizedState = w;
      }
      return ig(_), g;
    }
    var ZS = "18.2.0";
    function mb(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Da(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: ia,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var JS, e0;
    JS = !1, e0 = {};
    function g1(e) {
      if (!e)
        return Va;
      var t = Ka(e), a = JR(t);
      if (t.tag === _e) {
        var i = t.type;
        if (Tl(i))
          return Y0(t, i, a);
      }
      return a;
    }
    function yb(e, t) {
      {
        var a = Ka(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = fd(a);
        if (u === null)
          return null;
        if (u.mode & nn) {
          var s = Ue(a) || "Component";
          if (!e0[s]) {
            e0[s] = !0;
            var f = Wt;
            try {
              Gt(u), a.mode & nn ? E("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : E("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Gt(f) : At();
            }
          }
        }
        return u.stateNode;
      }
    }
    function S1(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return y1(e, t, v, y, a, i, u, s, f);
    }
    function E1(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, _ = y1(a, i, g, e, u, s, f, p, v);
      _.context = g1(null);
      var w = _.current, M = Kr(), N = Lo(w), F = yu(M, N);
      return F.callback = t ?? null, Ro(w, F, N), w_(_, N, M), _;
    }
    function Hp(e, t, a, i) {
      Li(t, e);
      var u = t.current, s = Kr(), f = Lo(u);
      Ed(f);
      var p = g1(a);
      t.context === null ? t.context = p : t.pendingContext = p, Tr && Wt !== null && !JS && (JS = !0, E(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ue(Wt) || "Unknown"));
      var v = yu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && E("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = Ro(u, v, f);
      return y !== null && (Kn(y, u, f, s), Ah(y, u, f)), f;
    }
    function bm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case ee:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function gb(e) {
      switch (e.tag) {
        case ue: {
          var t = e.stateNode;
          if (Ic(t)) {
            var a = Jm(t);
            D_(t, a);
          }
          break;
        }
        case Ee: {
          Cu(function() {
            var u = Ta(e, be);
            if (u !== null) {
              var s = Kr();
              Kn(u, e, be, s);
            }
          });
          var i = be;
          t0(e, i);
          break;
        }
      }
    }
    function C1(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Uv(a.retryLane, t));
    }
    function t0(e, t) {
      C1(e, t);
      var a = e.alternate;
      a && C1(a, t);
    }
    function Sb(e) {
      if (e.tag === Ee) {
        var t = ru, a = Ta(e, t);
        if (a !== null) {
          var i = Kr();
          Kn(a, e, t, i);
        }
        t0(e, t);
      }
    }
    function Eb(e) {
      if (e.tag === Ee) {
        var t = Lo(e), a = Ta(e, t);
        if (a !== null) {
          var i = Kr();
          Kn(a, e, t, i);
        }
        t0(e, t);
      }
    }
    function T1(e) {
      var t = pd(e);
      return t === null ? null : t.stateNode;
    }
    var R1 = function(e) {
      return null;
    };
    function Cb(e) {
      return R1(e);
    }
    var w1 = function(e) {
      return !1;
    };
    function Tb(e) {
      return w1(e);
    }
    var x1 = null, _1 = null, b1 = null, D1 = null, k1 = null, O1 = null, L1 = null, M1 = null, N1 = null;
    {
      var z1 = function(e, t, a) {
        var i = t[a], u = ct(e) ? e.slice() : $e({}, e);
        return a + 1 === t.length ? (ct(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = z1(e[i], t, a + 1), u);
      }, U1 = function(e, t) {
        return z1(e, t, 0);
      }, A1 = function(e, t, a, i) {
        var u = t[i], s = ct(e) ? e.slice() : $e({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], ct(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = A1(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, F1 = function(e, t, a) {
        if (t.length !== a.length) {
          ut("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              ut("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return A1(e, t, a, 0);
      }, H1 = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = ct(e) ? e.slice() : $e({}, e);
        return s[u] = H1(e[u], t, a + 1, i), s;
      }, j1 = function(e, t, a) {
        return H1(e, t, 0, a);
      }, n0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      x1 = function(e, t, a, i) {
        var u = n0(e, t);
        if (u !== null) {
          var s = j1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = $e({}, e.memoizedProps);
          var f = Ta(e, be);
          f !== null && Kn(f, e, be, zt);
        }
      }, _1 = function(e, t, a) {
        var i = n0(e, t);
        if (i !== null) {
          var u = U1(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = $e({}, e.memoizedProps);
          var s = Ta(e, be);
          s !== null && Kn(s, e, be, zt);
        }
      }, b1 = function(e, t, a, i) {
        var u = n0(e, t);
        if (u !== null) {
          var s = F1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = $e({}, e.memoizedProps);
          var f = Ta(e, be);
          f !== null && Kn(f, e, be, zt);
        }
      }, D1 = function(e, t, a) {
        e.pendingProps = j1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ta(e, be);
        i !== null && Kn(i, e, be, zt);
      }, k1 = function(e, t) {
        e.pendingProps = U1(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ta(e, be);
        a !== null && Kn(a, e, be, zt);
      }, O1 = function(e, t, a) {
        e.pendingProps = F1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ta(e, be);
        i !== null && Kn(i, e, be, zt);
      }, L1 = function(e) {
        var t = Ta(e, be);
        t !== null && Kn(t, e, be, zt);
      }, M1 = function(e) {
        R1 = e;
      }, N1 = function(e) {
        w1 = e;
      };
    }
    function Rb(e) {
      var t = fd(e);
      return t === null ? null : t.stateNode;
    }
    function wb(e) {
      return null;
    }
    function xb() {
      return Wt;
    }
    function _b(e) {
      var t = e.findFiberByHostInstance, a = nt.ReactCurrentDispatcher;
      return Ev({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: x1,
        overrideHookStateDeletePath: _1,
        overrideHookStateRenamePath: b1,
        overrideProps: D1,
        overridePropsDeletePath: k1,
        overridePropsRenamePath: O1,
        setErrorHandler: M1,
        setSuspenseHandler: N1,
        scheduleUpdate: L1,
        currentDispatcherRef: a,
        findHostInstanceByFiber: Rb,
        findFiberByHostInstance: t || wb,
        // React Refresh
        findHostInstancesForRefresh: nb,
        scheduleRefresh: eb,
        scheduleRoot: tb,
        setRefreshHandler: J_,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: xb,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: ZS
      });
    }
    var V1 = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function r0(e) {
      this._internalRoot = e;
    }
    Dm.prototype.render = r0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? E("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : km(arguments[1]) ? E("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && E("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== tn) {
          var i = T1(t.current);
          i && i.parentNode !== a && E("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Hp(e, t, null, null);
    }, Dm.prototype.unmount = r0.prototype.unmount = function() {
      typeof arguments[0] == "function" && E("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        ZC() && E("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Cu(function() {
          Hp(null, e, null, null);
        }), j0(t);
      }
    };
    function bb(e, t) {
      if (!km(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      B1(e);
      var a = !1, i = !1, u = "", s = V1;
      t != null && (t.hydrate ? ut("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === aa && E(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = S1(e, Rh, null, a, i, u, s);
      mh(f.current, e);
      var p = e.nodeType === tn ? e.parentNode : e;
      return Qd(p), new r0(f);
    }
    function Dm(e) {
      this._internalRoot = e;
    }
    function Db(e) {
      e && iy(e);
    }
    Dm.prototype.unstable_scheduleHydration = Db;
    function kb(e, t, a) {
      if (!km(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      B1(e), t === void 0 && E("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = V1;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = E1(t, null, e, Rh, i, s, f, p, v);
      if (mh(y.current, e), Qd(e), u)
        for (var g = 0; g < u.length; g++) {
          var _ = u[g];
          Fw(y, _);
        }
      return new Dm(y);
    }
    function km(e) {
      return !!(e && (e.nodeType === wr || e.nodeType === Pr || e.nodeType === Gf || !Ne));
    }
    function jp(e) {
      return !!(e && (e.nodeType === wr || e.nodeType === Pr || e.nodeType === Gf || e.nodeType === tn && e.nodeValue === " react-mount-point-unstable "));
    }
    function B1(e) {
      e.nodeType === wr && e.tagName && e.tagName.toUpperCase() === "BODY" && E("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), rp(e) && (e._reactRootContainer ? E("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : E("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var Ob = nt.ReactCurrentOwner, P1;
    P1 = function(e) {
      if (e._reactRootContainer && e.nodeType !== tn) {
        var t = T1(e._reactRootContainer.current);
        t && t.parentNode !== e && E("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = a0(e), u = !!(i && go(i));
      u && !a && E("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === wr && e.tagName && e.tagName.toUpperCase() === "BODY" && E("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function a0(e) {
      return e ? e.nodeType === Pr ? e.documentElement : e.firstChild : null;
    }
    function $1() {
    }
    function Lb(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var w = bm(f);
            s.call(w);
          };
        }
        var f = E1(
          t,
          i,
          e,
          Eo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          $1
        );
        e._reactRootContainer = f, mh(f.current, e);
        var p = e.nodeType === tn ? e.parentNode : e;
        return Qd(p), Cu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var w = bm(g);
            y.call(w);
          };
        }
        var g = S1(
          e,
          Eo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          $1
        );
        e._reactRootContainer = g, mh(g.current, e);
        var _ = e.nodeType === tn ? e.parentNode : e;
        return Qd(_), Cu(function() {
          Hp(t, g, a, i);
        }), g;
      }
    }
    function Mb(e, t) {
      e !== null && typeof e != "function" && E("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Om(e, t, a, i, u) {
      P1(a), Mb(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = Lb(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = bm(f);
            p.call(v);
          };
        }
        Hp(t, f, e, u);
      }
      return bm(f);
    }
    function Nb(e) {
      {
        var t = Ob.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || E("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", st(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === wr ? e : yb(e, "findDOMNode");
    }
    function zb(e, t, a) {
      if (E("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !jp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = rp(t) && t._reactRootContainer === void 0;
        i && E("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Om(null, e, t, !0, a);
    }
    function Ub(e, t, a) {
      if (E("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !jp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = rp(t) && t._reactRootContainer === void 0;
        i && E("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Om(null, e, t, !1, a);
    }
    function Ab(e, t, a, i) {
      if (E("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !jp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !Bu(e))
        throw new Error("parentComponent must be a valid React Component");
      return Om(e, t, a, !1, i);
    }
    function Fb(e) {
      if (!jp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = rp(e) && e._reactRootContainer === void 0;
        t && E("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = a0(e), i = a && !go(a);
          i && E("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Cu(function() {
          Om(null, null, e, !1, function() {
            e._reactRootContainer = null, j0(e);
          });
        }), !0;
      } else {
        {
          var u = a0(e), s = !!(u && go(u)), f = e.nodeType === wr && jp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && E("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    ro(gb), ry(Sb), Wc(Eb), Hv(ma), jv(er), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && E("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), nd(VT), mc(US, k_, Cu);
    function Hb(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!km(t))
        throw new Error("Target container is not a DOM element.");
      return mb(e, t, null, a);
    }
    function jb(e, t, a, i) {
      return Ab(e, t, a, i);
    }
    var i0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [go, yf, yh, Vu, Il, US]
    };
    function Vb(e, t) {
      return i0.usingClientEntryPoint || E('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), bb(e, t);
    }
    function Bb(e, t, a) {
      return i0.usingClientEntryPoint || E('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), kb(e, t, a);
    }
    function Pb(e) {
      return ZC() && E("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Cu(e);
    }
    var $b = _b({
      findFiberByHostInstance: Bs,
      bundleType: 1,
      version: ZS,
      rendererPackageName: "react-dom"
    });
    if (!$b && yn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var Y1 = window.location.protocol;
      /^(https?|file):$/.test(Y1) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (Y1 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = i0, ba.createPortal = Hb, ba.createRoot = Vb, ba.findDOMNode = Nb, ba.flushSync = Pb, ba.hydrate = zb, ba.hydrateRoot = Bb, ba.render = Ub, ba.unmountComponentAtNode = Fb, ba.unstable_batchedUpdates = US, ba.unstable_renderSubtreeIntoContainer = jb, ba.version = ZS, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), ba;
}
var nT = {};
function rT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (nT.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rT);
    } catch (X) {
      console.error(X);
    }
  }
}
nT.NODE_ENV === "production" ? (rT(), o0.exports = Zb()) : o0.exports = Jb();
var aT = o0.exports;
const iD = /* @__PURE__ */ J1(aT);
var c0, eD = {}, Mm = aT;
if (eD.NODE_ENV === "production")
  c0 = Mm.createRoot, Mm.hydrateRoot;
else {
  var Z1 = Mm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  c0 = function(X, le) {
    Z1.usingClientEntryPoint = !0;
    try {
      return Mm.createRoot(X, le);
    } finally {
      Z1.usingClientEntryPoint = !1;
    }
  };
}
const Nm = (X, le = {}) => {
  import("./App-CndswFAW.mjs").then((A) => {
    Nm.root = c0(X), Nm.root.render(eT.createElement(A.default, le == null ? void 0 : le.props));
  });
}, lD = () => Nm.root && Nm.root.unmount();
export {
  iD as R,
  aT as a,
  J1 as g,
  eT as j,
  Nm as m,
  zm as r,
  lD as u,
  aD as x
};
