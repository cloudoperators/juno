function qb(X, se) {
  for (var A = 0; A < se.length; A++) {
    const rt = se[A];
    if (typeof rt != "string" && !Array.isArray(rt)) {
      for (const bt in rt)
        if (bt !== "default" && !(bt in X)) {
          const tn = Object.getOwnPropertyDescriptor(rt, bt);
          tn && Object.defineProperty(X, bt, tn.get ? tn : {
            enumerable: !0,
            get: () => rt[bt]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(X, Symbol.toStringTag, { value: "Module" }));
}
var oD = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function tT(X) {
  return X && X.__esModule && Object.prototype.hasOwnProperty.call(X, "default") ? X.default : X;
}
var s0 = { exports: {} }, Ta = {}, c0 = { exports: {} }, nt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var W1;
function Kb() {
  if (W1) return nt;
  W1 = 1;
  var X = Symbol.for("react.element"), se = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), rt = Symbol.for("react.strict_mode"), bt = Symbol.for("react.profiler"), tn = Symbol.for("react.provider"), ot = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), Gt = Symbol.for("react.suspense"), je = Symbol.for("react.memo"), xe = Symbol.for("react.lazy"), Ke = Symbol.iterator;
  function ce(_) {
    return _ === null || typeof _ != "object" ? null : (_ = Ke && _[Ke] || _["@@iterator"], typeof _ == "function" ? _ : null);
  }
  var Ve = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ae = Object.assign, Te = {};
  function at(_, B, De) {
    this.props = _, this.context = B, this.refs = Te, this.updater = De || Ve;
  }
  at.prototype.isReactComponent = {}, at.prototype.setState = function(_, B) {
    if (typeof _ != "object" && typeof _ != "function" && _ != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, _, B, "setState");
  }, at.prototype.forceUpdate = function(_) {
    this.updater.enqueueForceUpdate(this, _, "forceUpdate");
  };
  function Mn() {
  }
  Mn.prototype = at.prototype;
  function Nn(_, B, De) {
    this.props = _, this.context = B, this.refs = Te, this.updater = De || Ve;
  }
  var It = Nn.prototype = new Mn();
  It.constructor = Nn, ae(It, at.prototype), It.isPureReactComponent = !0;
  var Ne = Array.isArray, St = Object.prototype.hasOwnProperty, Ce = { current: null }, Je = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Be(_, B, De) {
    var ze, Ye = {}, Xe = null, ht = null;
    if (B != null) for (ze in B.ref !== void 0 && (ht = B.ref), B.key !== void 0 && (Xe = "" + B.key), B) St.call(B, ze) && !Je.hasOwnProperty(ze) && (Ye[ze] = B[ze]);
    var it = arguments.length - 2;
    if (it === 1) Ye.children = De;
    else if (1 < it) {
      for (var Et = Array(it), Ht = 0; Ht < it; Ht++) Et[Ht] = arguments[Ht + 2];
      Ye.children = Et;
    }
    if (_ && _.defaultProps) for (ze in it = _.defaultProps, it) Ye[ze] === void 0 && (Ye[ze] = it[ze]);
    return { $$typeof: X, type: _, key: Xe, ref: ht, props: Ye, _owner: Ce.current };
  }
  function Sn(_, B) {
    return { $$typeof: X, type: _.type, key: B, ref: _.ref, props: _.props, _owner: _._owner };
  }
  function En(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === X;
  }
  function Qt(_) {
    var B = { "=": "=0", ":": "=2" };
    return "$" + _.replace(/[=:]/g, function(De) {
      return B[De];
    });
  }
  var ft = /\/+/g;
  function nn(_, B) {
    return typeof _ == "object" && _ !== null && _.key != null ? Qt("" + _.key) : B.toString(36);
  }
  function We(_, B, De, ze, Ye) {
    var Xe = typeof _;
    (Xe === "undefined" || Xe === "boolean") && (_ = null);
    var ht = !1;
    if (_ === null) ht = !0;
    else switch (Xe) {
      case "string":
      case "number":
        ht = !0;
        break;
      case "object":
        switch (_.$$typeof) {
          case X:
          case se:
            ht = !0;
        }
    }
    if (ht) return ht = _, Ye = Ye(ht), _ = ze === "" ? "." + nn(ht, 0) : ze, Ne(Ye) ? (De = "", _ != null && (De = _.replace(ft, "$&/") + "/"), We(Ye, B, De, "", function(Ht) {
      return Ht;
    })) : Ye != null && (En(Ye) && (Ye = Sn(Ye, De + (!Ye.key || ht && ht.key === Ye.key ? "" : ("" + Ye.key).replace(ft, "$&/") + "/") + _)), B.push(Ye)), 1;
    if (ht = 0, ze = ze === "" ? "." : ze + ":", Ne(_)) for (var it = 0; it < _.length; it++) {
      Xe = _[it];
      var Et = ze + nn(Xe, it);
      ht += We(Xe, B, De, Et, Ye);
    }
    else if (Et = ce(_), typeof Et == "function") for (_ = Et.call(_), it = 0; !(Xe = _.next()).done; ) Xe = Xe.value, Et = ze + nn(Xe, it++), ht += We(Xe, B, De, Et, Ye);
    else if (Xe === "object") throw B = String(_), Error("Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead.");
    return ht;
  }
  function st(_, B, De) {
    if (_ == null) return _;
    var ze = [], Ye = 0;
    return We(_, ze, "", "", function(Xe) {
      return B.call(De, Xe, Ye++);
    }), ze;
  }
  function Dt(_) {
    if (_._status === -1) {
      var B = _._result;
      B = B(), B.then(function(De) {
        (_._status === 0 || _._status === -1) && (_._status = 1, _._result = De);
      }, function(De) {
        (_._status === 0 || _._status === -1) && (_._status = 2, _._result = De);
      }), _._status === -1 && (_._status = 0, _._result = B);
    }
    if (_._status === 1) return _._result.default;
    throw _._result;
  }
  var Ge = { current: null }, V = { transition: null }, ve = { ReactCurrentDispatcher: Ge, ReactCurrentBatchConfig: V, ReactCurrentOwner: Ce };
  function ne() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return nt.Children = { map: st, forEach: function(_, B, De) {
    st(_, function() {
      B.apply(this, arguments);
    }, De);
  }, count: function(_) {
    var B = 0;
    return st(_, function() {
      B++;
    }), B;
  }, toArray: function(_) {
    return st(_, function(B) {
      return B;
    }) || [];
  }, only: function(_) {
    if (!En(_)) throw Error("React.Children.only expected to receive a single React element child.");
    return _;
  } }, nt.Component = at, nt.Fragment = A, nt.Profiler = bt, nt.PureComponent = Nn, nt.StrictMode = rt, nt.Suspense = Gt, nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ve, nt.act = ne, nt.cloneElement = function(_, B, De) {
    if (_ == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + _ + ".");
    var ze = ae({}, _.props), Ye = _.key, Xe = _.ref, ht = _._owner;
    if (B != null) {
      if (B.ref !== void 0 && (Xe = B.ref, ht = Ce.current), B.key !== void 0 && (Ye = "" + B.key), _.type && _.type.defaultProps) var it = _.type.defaultProps;
      for (Et in B) St.call(B, Et) && !Je.hasOwnProperty(Et) && (ze[Et] = B[Et] === void 0 && it !== void 0 ? it[Et] : B[Et]);
    }
    var Et = arguments.length - 2;
    if (Et === 1) ze.children = De;
    else if (1 < Et) {
      it = Array(Et);
      for (var Ht = 0; Ht < Et; Ht++) it[Ht] = arguments[Ht + 2];
      ze.children = it;
    }
    return { $$typeof: X, type: _.type, key: Ye, ref: Xe, props: ze, _owner: ht };
  }, nt.createContext = function(_) {
    return _ = { $$typeof: ot, _currentValue: _, _currentValue2: _, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, _.Provider = { $$typeof: tn, _context: _ }, _.Consumer = _;
  }, nt.createElement = Be, nt.createFactory = function(_) {
    var B = Be.bind(null, _);
    return B.type = _, B;
  }, nt.createRef = function() {
    return { current: null };
  }, nt.forwardRef = function(_) {
    return { $$typeof: S, render: _ };
  }, nt.isValidElement = En, nt.lazy = function(_) {
    return { $$typeof: xe, _payload: { _status: -1, _result: _ }, _init: Dt };
  }, nt.memo = function(_, B) {
    return { $$typeof: je, type: _, compare: B === void 0 ? null : B };
  }, nt.startTransition = function(_) {
    var B = V.transition;
    V.transition = {};
    try {
      _();
    } finally {
      V.transition = B;
    }
  }, nt.unstable_act = ne, nt.useCallback = function(_, B) {
    return Ge.current.useCallback(_, B);
  }, nt.useContext = function(_) {
    return Ge.current.useContext(_);
  }, nt.useDebugValue = function() {
  }, nt.useDeferredValue = function(_) {
    return Ge.current.useDeferredValue(_);
  }, nt.useEffect = function(_, B) {
    return Ge.current.useEffect(_, B);
  }, nt.useId = function() {
    return Ge.current.useId();
  }, nt.useImperativeHandle = function(_, B, De) {
    return Ge.current.useImperativeHandle(_, B, De);
  }, nt.useInsertionEffect = function(_, B) {
    return Ge.current.useInsertionEffect(_, B);
  }, nt.useLayoutEffect = function(_, B) {
    return Ge.current.useLayoutEffect(_, B);
  }, nt.useMemo = function(_, B) {
    return Ge.current.useMemo(_, B);
  }, nt.useReducer = function(_, B, De) {
    return Ge.current.useReducer(_, B, De);
  }, nt.useRef = function(_) {
    return Ge.current.useRef(_);
  }, nt.useState = function(_) {
    return Ge.current.useState(_);
  }, nt.useSyncExternalStore = function(_, B, De) {
    return Ge.current.useSyncExternalStore(_, B, De);
  }, nt.useTransition = function() {
    return Ge.current.useTransition();
  }, nt.version = "18.3.1", nt;
}
var Wp = { exports: {} };
Wp.exports;
var G1;
function Zb() {
  return G1 || (G1 = 1, function(X, se) {
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
      var rt = "18.3.1", bt = Symbol.for("react.element"), tn = Symbol.for("react.portal"), ot = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), Gt = Symbol.for("react.profiler"), je = Symbol.for("react.provider"), xe = Symbol.for("react.context"), Ke = Symbol.for("react.forward_ref"), ce = Symbol.for("react.suspense"), Ve = Symbol.for("react.suspense_list"), ae = Symbol.for("react.memo"), Te = Symbol.for("react.lazy"), at = Symbol.for("react.offscreen"), Mn = Symbol.iterator, Nn = "@@iterator";
      function It(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = Mn && h[Mn] || h[Nn];
        return typeof C == "function" ? C : null;
      }
      var Ne = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, St = {
        transition: null
      }, Ce = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, Je = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Be = {}, Sn = null;
      function En(h) {
        Sn = h;
      }
      Be.setExtraStackFrame = function(h) {
        Sn = h;
      }, Be.getCurrentStack = null, Be.getStackAddendum = function() {
        var h = "";
        Sn && (h += Sn);
        var C = Be.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var Qt = !1, ft = !1, nn = !1, We = !1, st = !1, Dt = {
        ReactCurrentDispatcher: Ne,
        ReactCurrentBatchConfig: St,
        ReactCurrentOwner: Je
      };
      Dt.ReactDebugCurrentFrame = Be, Dt.ReactCurrentActQueue = Ce;
      function Ge(h) {
        {
          for (var C = arguments.length, L = new Array(C > 1 ? C - 1 : 0), U = 1; U < C; U++)
            L[U - 1] = arguments[U];
          ve("warn", h, L);
        }
      }
      function V(h) {
        {
          for (var C = arguments.length, L = new Array(C > 1 ? C - 1 : 0), U = 1; U < C; U++)
            L[U - 1] = arguments[U];
          ve("error", h, L);
        }
      }
      function ve(h, C, L) {
        {
          var U = Dt.ReactDebugCurrentFrame, W = U.getStackAddendum();
          W !== "" && (C += "%s", L = L.concat([W]));
          var pe = L.map(function(le) {
            return String(le);
          });
          pe.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, pe);
        }
      }
      var ne = {};
      function _(h, C) {
        {
          var L = h.constructor, U = L && (L.displayName || L.name) || "ReactClass", W = U + "." + C;
          if (ne[W])
            return;
          V("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, U), ne[W] = !0;
        }
      }
      var B = {
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
          _(h, "forceUpdate");
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
          _(h, "replaceState");
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
          _(h, "setState");
        }
      }, De = Object.assign, ze = {};
      Object.freeze(ze);
      function Ye(h, C, L) {
        this.props = h, this.context = C, this.refs = ze, this.updater = L || B;
      }
      Ye.prototype.isReactComponent = {}, Ye.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, Ye.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var Xe = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, ht = function(h, C) {
          Object.defineProperty(Ye.prototype, h, {
            get: function() {
              Ge("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var it in Xe)
          Xe.hasOwnProperty(it) && ht(it, Xe[it]);
      }
      function Et() {
      }
      Et.prototype = Ye.prototype;
      function Ht(h, C, L) {
        this.props = h, this.context = C, this.refs = ze, this.updater = L || B;
      }
      var ea = Ht.prototype = new Et();
      ea.constructor = Ht, De(ea, Ye.prototype), ea.isPureReactComponent = !0;
      function ta() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var Ar = Array.isArray;
      function vn(h) {
        return Ar(h);
      }
      function qn(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, L = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return L;
        }
      }
      function mr(h) {
        try {
          return Kn(h), !1;
        } catch {
          return !0;
        }
      }
      function Kn(h) {
        return "" + h;
      }
      function zn(h) {
        if (mr(h))
          return V("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qn(h)), Kn(h);
      }
      function na(h, C, L) {
        var U = h.displayName;
        if (U)
          return U;
        var W = C.displayName || C.name || "";
        return W !== "" ? L + "(" + W + ")" : L;
      }
      function wa(h) {
        return h.displayName || "Context";
      }
      function Un(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && V("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case ot:
            return "Fragment";
          case tn:
            return "Portal";
          case Gt:
            return "Profiler";
          case S:
            return "StrictMode";
          case ce:
            return "Suspense";
          case Ve:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case xe:
              var C = h;
              return wa(C) + ".Consumer";
            case je:
              var L = h;
              return wa(L._context) + ".Provider";
            case Ke:
              return na(h, h.render, "ForwardRef");
            case ae:
              var U = h.displayName || null;
              return U !== null ? U : Un(h.type) || "Memo";
            case Te: {
              var W = h, pe = W._payload, le = W._init;
              try {
                return Un(le(pe));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var xa = Object.prototype.hasOwnProperty, hi = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, yr, _a, gr;
      gr = {};
      function ra(h) {
        if (xa.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function xn(h) {
        if (xa.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function ba(h, C) {
        var L = function() {
          yr || (yr = !0, V("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        L.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: L,
          configurable: !0
        });
      }
      function $a(h, C) {
        var L = function() {
          _a || (_a = !0, V("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        L.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: L,
          configurable: !0
        });
      }
      function Ya(h) {
        if (typeof h.ref == "string" && Je.current && h.__self && Je.current.stateNode !== h.__self) {
          var C = Un(Je.current.type);
          gr[C] || (V('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), gr[C] = !0);
        }
      }
      var ee = function(h, C, L, U, W, pe, le) {
        var Le = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: bt,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: L,
          props: le,
          // Record the component responsible for creating this element.
          _owner: pe
        };
        return Le._store = {}, Object.defineProperty(Le._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Le, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: U
        }), Object.defineProperty(Le, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: W
        }), Object.freeze && (Object.freeze(Le.props), Object.freeze(Le)), Le;
      };
      function Re(h, C, L) {
        var U, W = {}, pe = null, le = null, Le = null, Qe = null;
        if (C != null) {
          ra(C) && (le = C.ref, Ya(C)), xn(C) && (zn(C.key), pe = "" + C.key), Le = C.__self === void 0 ? null : C.__self, Qe = C.__source === void 0 ? null : C.__source;
          for (U in C)
            xa.call(C, U) && !hi.hasOwnProperty(U) && (W[U] = C[U]);
        }
        var Tt = arguments.length - 2;
        if (Tt === 1)
          W.children = L;
        else if (Tt > 1) {
          for (var wt = Array(Tt), xt = 0; xt < Tt; xt++)
            wt[xt] = arguments[xt + 2];
          Object.freeze && Object.freeze(wt), W.children = wt;
        }
        if (h && h.defaultProps) {
          var _t = h.defaultProps;
          for (U in _t)
            W[U] === void 0 && (W[U] = _t[U]);
        }
        if (pe || le) {
          var Bt = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          pe && ba(W, Bt), le && $a(W, Bt);
        }
        return ee(h, pe, le, Le, Qe, Je.current, W);
      }
      function qe(h, C) {
        var L = ee(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return L;
      }
      function kt(h, C, L) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var U, W = De({}, h.props), pe = h.key, le = h.ref, Le = h._self, Qe = h._source, Tt = h._owner;
        if (C != null) {
          ra(C) && (le = C.ref, Tt = Je.current), xn(C) && (zn(C.key), pe = "" + C.key);
          var wt;
          h.type && h.type.defaultProps && (wt = h.type.defaultProps);
          for (U in C)
            xa.call(C, U) && !hi.hasOwnProperty(U) && (C[U] === void 0 && wt !== void 0 ? W[U] = wt[U] : W[U] = C[U]);
        }
        var xt = arguments.length - 2;
        if (xt === 1)
          W.children = L;
        else if (xt > 1) {
          for (var _t = Array(xt), Bt = 0; Bt < xt; Bt++)
            _t[Bt] = arguments[Bt + 2];
          W.children = _t;
        }
        return ee(h.type, pe, le, Le, Qe, Tt, W);
      }
      function Ct(h) {
        return typeof h == "object" && h !== null && h.$$typeof === bt;
      }
      var Cn = ".", cn = ":";
      function Sr(h) {
        var C = /[=:]/g, L = {
          "=": "=0",
          ":": "=2"
        }, U = h.replace(C, function(W) {
          return L[W];
        });
        return "$" + U;
      }
      var jt = !1, Zn = /\/+/g;
      function Xt(h) {
        return h.replace(Zn, "$&/");
      }
      function rn(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (zn(h.key), Sr("" + h.key)) : C.toString(36);
      }
      function Al(h, C, L, U, W) {
        var pe = typeof h;
        (pe === "undefined" || pe === "boolean") && (h = null);
        var le = !1;
        if (h === null)
          le = !0;
        else
          switch (pe) {
            case "string":
            case "number":
              le = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case bt:
                case tn:
                  le = !0;
              }
          }
        if (le) {
          var Le = h, Qe = W(Le), Tt = U === "" ? Cn + rn(Le, 0) : U;
          if (vn(Qe)) {
            var wt = "";
            Tt != null && (wt = Xt(Tt) + "/"), Al(Qe, C, wt, "", function(Hf) {
              return Hf;
            });
          } else Qe != null && (Ct(Qe) && (Qe.key && (!Le || Le.key !== Qe.key) && zn(Qe.key), Qe = qe(
            Qe,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            L + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (Qe.key && (!Le || Le.key !== Qe.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              Xt("" + Qe.key) + "/"
            ) : "") + Tt
          )), C.push(Qe));
          return 1;
        }
        var xt, _t, Bt = 0, ct = U === "" ? Cn : U + cn;
        if (vn(h))
          for (var al = 0; al < h.length; al++)
            xt = h[al], _t = ct + rn(xt, al), Bt += Al(xt, C, L, _t, W);
        else {
          var Bu = It(h);
          if (typeof Bu == "function") {
            var Zo = h;
            Bu === Zo.entries && (jt || Ge("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), jt = !0);
            for (var Jo = Bu.call(Zo), Ri, es = 0; !(Ri = Jo.next()).done; )
              xt = Ri.value, _t = ct + rn(xt, es++), Bt += Al(xt, C, L, _t, W);
          } else if (pe === "object") {
            var ts = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (ts === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : ts) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return Bt;
      }
      function mi(h, C, L) {
        if (h == null)
          return h;
        var U = [], W = 0;
        return Al(h, U, "", "", function(pe) {
          return C.call(L, pe, W++);
        }), U;
      }
      function Ou(h) {
        var C = 0;
        return mi(h, function() {
          C++;
        }), C;
      }
      function oc(h, C, L) {
        mi(h, function() {
          C.apply(this, arguments);
        }, L);
      }
      function Fo(h) {
        return mi(h, function(C) {
          return C;
        }) || [];
      }
      function Ho(h) {
        if (!Ct(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function Ki(h) {
        var C = {
          $$typeof: xe,
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
          $$typeof: je,
          _context: C
        };
        var L = !1, U = !1, W = !1;
        {
          var pe = {
            $$typeof: xe,
            _context: C
          };
          Object.defineProperties(pe, {
            Provider: {
              get: function() {
                return U || (U = !0, V("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(le) {
                C.Provider = le;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(le) {
                C._currentValue = le;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(le) {
                C._currentValue2 = le;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(le) {
                C._threadCount = le;
              }
            },
            Consumer: {
              get: function() {
                return L || (L = !0, V("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(le) {
                W || (Ge("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", le), W = !0);
              }
            }
          }), C.Consumer = pe;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var yi = -1, Ia = 0, Lu = 1, aa = 2;
      function ia(h) {
        if (h._status === yi) {
          var C = h._result, L = C();
          if (L.then(function(pe) {
            if (h._status === Ia || h._status === yi) {
              var le = h;
              le._status = Lu, le._result = pe;
            }
          }, function(pe) {
            if (h._status === Ia || h._status === yi) {
              var le = h;
              le._status = aa, le._result = pe;
            }
          }), h._status === yi) {
            var U = h;
            U._status = Ia, U._result = L;
          }
        }
        if (h._status === Lu) {
          var W = h._result;
          return W === void 0 && V(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, W), "default" in W || V(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, W), W.default;
        } else
          throw h._result;
      }
      function Da(h) {
        var C = {
          // We use these fields to store the result.
          _status: yi,
          _result: h
        }, L = {
          $$typeof: Te,
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
              set: function(pe) {
                V("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), U = pe, Object.defineProperty(L, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return W;
              },
              set: function(pe) {
                V("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), W = pe, Object.defineProperty(L, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return L;
      }
      function Fl(h) {
        h != null && h.$$typeof === ae ? V("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? V("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && V("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && V("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: Ke,
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
      var Mu;
      Mu = Symbol.for("react.module.reference");
      function Nu(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === ot || h === Gt || st || h === S || h === ce || h === Ve || We || h === at || Qt || ft || nn || typeof h == "object" && h !== null && (h.$$typeof === Te || h.$$typeof === ae || h.$$typeof === je || h.$$typeof === xe || h.$$typeof === Ke || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === Mu || h.getModuleId !== void 0));
      }
      function jo(h, C) {
        Nu(h) || V("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var L = {
          $$typeof: ae,
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
      function Ot() {
        var h = Ne.current;
        return h === null && V(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function Hl(h) {
        var C = Ot();
        if (h._context !== void 0) {
          var L = h._context;
          L.Consumer === h ? V("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : L.Provider === h && V("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function jl(h) {
        var C = Ot();
        return C.useState(h);
      }
      function Vl(h, C, L) {
        var U = Ot();
        return U.useReducer(h, C, L);
      }
      function _n(h) {
        var C = Ot();
        return C.useRef(h);
      }
      function sc(h, C) {
        var L = Ot();
        return L.useEffect(h, C);
      }
      function cc(h, C) {
        var L = Ot();
        return L.useInsertionEffect(h, C);
      }
      function Vo(h, C) {
        var L = Ot();
        return L.useLayoutEffect(h, C);
      }
      function Af(h, C) {
        var L = Ot();
        return L.useCallback(h, C);
      }
      function Ff(h, C) {
        var L = Ot();
        return L.useMemo(h, C);
      }
      function qt(h, C, L) {
        var U = Ot();
        return U.useImperativeHandle(h, C, L);
      }
      function fc(h, C) {
        {
          var L = Ot();
          return L.useDebugValue(h, C);
        }
      }
      function Bo() {
        var h = Ot();
        return h.useTransition();
      }
      function Qa(h) {
        var C = Ot();
        return C.useDeferredValue(h);
      }
      function Ie() {
        var h = Ot();
        return h.useId();
      }
      function Bl(h, C, L) {
        var U = Ot();
        return U.useSyncExternalStore(h, C, L);
      }
      var gi = 0, Zi, Er, Po, Jn, $o, Yo, Io;
      function Pl() {
      }
      Pl.__reactDisabledLog = !0;
      function zu() {
        {
          if (gi === 0) {
            Zi = console.log, Er = console.info, Po = console.warn, Jn = console.error, $o = console.group, Yo = console.groupCollapsed, Io = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: Pl,
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
          gi++;
        }
      }
      function Si() {
        {
          if (gi--, gi === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: De({}, h, {
                value: Zi
              }),
              info: De({}, h, {
                value: Er
              }),
              warn: De({}, h, {
                value: Po
              }),
              error: De({}, h, {
                value: Jn
              }),
              group: De({}, h, {
                value: $o
              }),
              groupCollapsed: De({}, h, {
                value: Yo
              }),
              groupEnd: De({}, h, {
                value: Io
              })
            });
          }
          gi < 0 && V("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Wa = Dt.ReactCurrentDispatcher, la;
      function Ji(h, C, L) {
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
      var Ga = !1, $l;
      {
        var Yl = typeof WeakMap == "function" ? WeakMap : Map;
        $l = new Yl();
      }
      function el(h, C) {
        if (!h || Ga)
          return "";
        {
          var L = $l.get(h);
          if (L !== void 0)
            return L;
        }
        var U;
        Ga = !0;
        var W = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var pe;
        pe = Wa.current, Wa.current = null, zu();
        try {
          if (C) {
            var le = function() {
              throw Error();
            };
            if (Object.defineProperty(le.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(le, []);
              } catch (ct) {
                U = ct;
              }
              Reflect.construct(h, [], le);
            } else {
              try {
                le.call();
              } catch (ct) {
                U = ct;
              }
              h.call(le.prototype);
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
            for (var Le = ct.stack.split(`
`), Qe = U.stack.split(`
`), Tt = Le.length - 1, wt = Qe.length - 1; Tt >= 1 && wt >= 0 && Le[Tt] !== Qe[wt]; )
              wt--;
            for (; Tt >= 1 && wt >= 0; Tt--, wt--)
              if (Le[Tt] !== Qe[wt]) {
                if (Tt !== 1 || wt !== 1)
                  do
                    if (Tt--, wt--, wt < 0 || Le[Tt] !== Qe[wt]) {
                      var xt = `
` + Le[Tt].replace(" at new ", " at ");
                      return h.displayName && xt.includes("<anonymous>") && (xt = xt.replace("<anonymous>", h.displayName)), typeof h == "function" && $l.set(h, xt), xt;
                    }
                  while (Tt >= 1 && wt >= 0);
                break;
              }
          }
        } finally {
          Ga = !1, Wa.current = pe, Si(), Error.prepareStackTrace = W;
        }
        var _t = h ? h.displayName || h.name : "", Bt = _t ? Ji(_t) : "";
        return typeof h == "function" && $l.set(h, Bt), Bt;
      }
      function Qo(h, C, L) {
        return el(h, !1);
      }
      function Wo(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function et(h, C, L) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return el(h, Wo(h));
        if (typeof h == "string")
          return Ji(h);
        switch (h) {
          case ce:
            return Ji("Suspense");
          case Ve:
            return Ji("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case Ke:
              return Qo(h.render);
            case ae:
              return et(h.type, C, L);
            case Te: {
              var U = h, W = U._payload, pe = U._init;
              try {
                return et(pe(W), C, L);
              } catch {
              }
            }
          }
        return "";
      }
      var Go = {}, Uu = Dt.ReactDebugCurrentFrame;
      function tl(h) {
        if (h) {
          var C = h._owner, L = et(h.type, h._source, C ? C.type : null);
          Uu.setExtraStackFrame(L);
        } else
          Uu.setExtraStackFrame(null);
      }
      function Xo(h, C, L, U, W) {
        {
          var pe = Function.call.bind(xa);
          for (var le in h)
            if (pe(h, le)) {
              var Le = void 0;
              try {
                if (typeof h[le] != "function") {
                  var Qe = Error((U || "React class") + ": " + L + " type `" + le + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[le] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw Qe.name = "Invariant Violation", Qe;
                }
                Le = h[le](C, le, U, L, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Tt) {
                Le = Tt;
              }
              Le && !(Le instanceof Error) && (tl(W), V("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", U || "React class", L, le, typeof Le), tl(null)), Le instanceof Error && !(Le.message in Go) && (Go[Le.message] = !0, tl(W), V("Failed %s type: %s", L, Le.message), tl(null));
            }
        }
      }
      function tt(h) {
        if (h) {
          var C = h._owner, L = et(h.type, h._source, C ? C.type : null);
          En(L);
        } else
          En(null);
      }
      var Au;
      Au = !1;
      function Il() {
        if (Je.current) {
          var h = Un(Je.current.type);
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
      function ka(h) {
        return h != null ? Ue(h.__source) : "";
      }
      var Kt = {};
      function Cr(h) {
        var C = Il();
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
          var L = Cr(C);
          if (!Kt[L]) {
            Kt[L] = !0;
            var U = "";
            h && h._owner && h._owner !== Je.current && (U = " It was passed a child from " + Un(h._owner.type) + "."), tt(h), V('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', L, U), tt(null);
          }
        }
      }
      function nl(h, C) {
        if (typeof h == "object") {
          if (vn(h))
            for (var L = 0; L < h.length; L++) {
              var U = h[L];
              Ct(U) && ua(U, C);
            }
          else if (Ct(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var W = It(h);
            if (typeof W == "function" && W !== h.entries)
              for (var pe = W.call(h), le; !(le = pe.next()).done; )
                Ct(le.value) && ua(le.value, C);
          }
        }
      }
      function Vt(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var L;
          if (typeof C == "function")
            L = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === Ke || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === ae))
            L = C.propTypes;
          else
            return;
          if (L) {
            var U = Un(C);
            Xo(L, h.props, "prop", U, h);
          } else if (C.PropTypes !== void 0 && !Au) {
            Au = !0;
            var W = Un(C);
            V("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", W || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && V("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Zt(h) {
        {
          for (var C = Object.keys(h.props), L = 0; L < C.length; L++) {
            var U = C[L];
            if (U !== "children" && U !== "key") {
              tt(h), V("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", U), tt(null);
              break;
            }
          }
          h.ref !== null && (tt(h), V("Invalid attribute `ref` supplied to `React.Fragment`."), tt(null));
        }
      }
      function qo(h, C, L) {
        var U = Nu(h);
        if (!U) {
          var W = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (W += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var pe = ka(C);
          pe ? W += pe : W += Il();
          var le;
          h === null ? le = "null" : vn(h) ? le = "array" : h !== void 0 && h.$$typeof === bt ? (le = "<" + (Un(h.type) || "Unknown") + " />", W = " Did you accidentally export a JSX literal instead of a component?") : le = typeof h, V("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", le, W);
        }
        var Le = Re.apply(this, arguments);
        if (Le == null)
          return Le;
        if (U)
          for (var Qe = 2; Qe < arguments.length; Qe++)
            nl(arguments[Qe], h);
        return h === ot ? Zt(Le) : Vt(Le), Le;
      }
      var An = !1;
      function Tr(h) {
        var C = qo.bind(null, h);
        return C.type = h, An || (An = !0, Ge("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return Ge("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function Oa(h, C, L) {
        for (var U = kt.apply(this, arguments), W = 2; W < arguments.length; W++)
          nl(arguments[W], U.type);
        return Vt(U), U;
      }
      function Fu(h, C) {
        var L = St.transition;
        St.transition = {};
        var U = St.transition;
        St.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (St.transition = L, L === null && U._updatedFibers) {
            var W = U._updatedFibers.size;
            W > 10 && Ge("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), U._updatedFibers.clear();
          }
        }
      }
      var Ql = !1, Wl = null;
      function rl(h) {
        if (Wl === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), L = X && X[C];
            Wl = L.call(X, "timers").setImmediate;
          } catch {
            Wl = function(W) {
              Ql === !1 && (Ql = !0, typeof MessageChannel > "u" && V("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var pe = new MessageChannel();
              pe.port1.onmessage = W, pe.port2.postMessage(void 0);
            };
          }
        return Wl(h);
      }
      var oa = 0, Ei = !1;
      function Gl(h) {
        {
          var C = oa;
          oa++, Ce.current === null && (Ce.current = []);
          var L = Ce.isBatchingLegacy, U;
          try {
            if (Ce.isBatchingLegacy = !0, U = h(), !L && Ce.didScheduleLegacyUpdate) {
              var W = Ce.current;
              W !== null && (Ce.didScheduleLegacyUpdate = !1, Ti(W));
            }
          } catch (_t) {
            throw Ci(C), _t;
          } finally {
            Ce.isBatchingLegacy = L;
          }
          if (U !== null && typeof U == "object" && typeof U.then == "function") {
            var pe = U, le = !1, Le = {
              then: function(_t, Bt) {
                le = !0, pe.then(function(ct) {
                  Ci(C), oa === 0 ? Hu(ct, _t, Bt) : _t(ct);
                }, function(ct) {
                  Ci(C), Bt(ct);
                });
              }
            };
            return !Ei && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              le || (Ei = !0, V("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Le;
          } else {
            var Qe = U;
            if (Ci(C), oa === 0) {
              var Tt = Ce.current;
              Tt !== null && (Ti(Tt), Ce.current = null);
              var wt = {
                then: function(_t, Bt) {
                  Ce.current === null ? (Ce.current = [], Hu(Qe, _t, Bt)) : _t(Qe);
                }
              };
              return wt;
            } else {
              var xt = {
                then: function(_t, Bt) {
                  _t(Qe);
                }
              };
              return xt;
            }
          }
        }
      }
      function Ci(h) {
        h !== oa - 1 && V("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), oa = h;
      }
      function Hu(h, C, L) {
        {
          var U = Ce.current;
          if (U !== null)
            try {
              Ti(U), rl(function() {
                U.length === 0 ? (Ce.current = null, C(h)) : Hu(h, C, L);
              });
            } catch (W) {
              L(W);
            }
          else
            C(h);
        }
      }
      var Xa = !1;
      function Ti(h) {
        if (!Xa) {
          Xa = !0;
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
            Xa = !1;
          }
        }
      }
      var ju = qo, Ko = Oa, La = Tr, Vu = {
        map: mi,
        forEach: oc,
        count: Ou,
        toArray: Fo,
        only: Ho
      };
      se.Children = Vu, se.Component = Ye, se.Fragment = ot, se.Profiler = Gt, se.PureComponent = Ht, se.StrictMode = S, se.Suspense = ce, se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dt, se.act = Gl, se.cloneElement = Ko, se.createContext = Ki, se.createElement = ju, se.createFactory = La, se.createRef = ta, se.forwardRef = Fl, se.isValidElement = Ct, se.lazy = Da, se.memo = jo, se.startTransition = Fu, se.unstable_act = Gl, se.useCallback = Af, se.useContext = Hl, se.useDebugValue = fc, se.useDeferredValue = Qa, se.useEffect = sc, se.useId = Ie, se.useImperativeHandle = qt, se.useInsertionEffect = cc, se.useLayoutEffect = Vo, se.useMemo = Ff, se.useReducer = Vl, se.useRef = _n, se.useState = jl, se.useSyncExternalStore = Bl, se.useTransition = Bo, se.version = rt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Wp, Wp.exports)), Wp.exports;
}
var Jb = {};
Jb.NODE_ENV === "production" ? c0.exports = Kb() : c0.exports = Zb();
var Um = c0.exports;
const nT = /* @__PURE__ */ tT(Um), sD = /* @__PURE__ */ qb({
  __proto__: null,
  default: nT
}, [Um]);
var Mm = { exports: {} }, u0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var X1;
function eD() {
  return X1 || (X1 = 1, function(X) {
    function se(V, ve) {
      var ne = V.length;
      V.push(ve);
      e: for (; 0 < ne; ) {
        var _ = ne - 1 >>> 1, B = V[_];
        if (0 < bt(B, ve)) V[_] = ve, V[ne] = B, ne = _;
        else break e;
      }
    }
    function A(V) {
      return V.length === 0 ? null : V[0];
    }
    function rt(V) {
      if (V.length === 0) return null;
      var ve = V[0], ne = V.pop();
      if (ne !== ve) {
        V[0] = ne;
        e: for (var _ = 0, B = V.length, De = B >>> 1; _ < De; ) {
          var ze = 2 * (_ + 1) - 1, Ye = V[ze], Xe = ze + 1, ht = V[Xe];
          if (0 > bt(Ye, ne)) Xe < B && 0 > bt(ht, Ye) ? (V[_] = ht, V[Xe] = ne, _ = Xe) : (V[_] = Ye, V[ze] = ne, _ = ze);
          else if (Xe < B && 0 > bt(ht, ne)) V[_] = ht, V[Xe] = ne, _ = Xe;
          else break e;
        }
      }
      return ve;
    }
    function bt(V, ve) {
      var ne = V.sortIndex - ve.sortIndex;
      return ne !== 0 ? ne : V.id - ve.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var tn = performance;
      X.unstable_now = function() {
        return tn.now();
      };
    } else {
      var ot = Date, S = ot.now();
      X.unstable_now = function() {
        return ot.now() - S;
      };
    }
    var Gt = [], je = [], xe = 1, Ke = null, ce = 3, Ve = !1, ae = !1, Te = !1, at = typeof setTimeout == "function" ? setTimeout : null, Mn = typeof clearTimeout == "function" ? clearTimeout : null, Nn = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function It(V) {
      for (var ve = A(je); ve !== null; ) {
        if (ve.callback === null) rt(je);
        else if (ve.startTime <= V) rt(je), ve.sortIndex = ve.expirationTime, se(Gt, ve);
        else break;
        ve = A(je);
      }
    }
    function Ne(V) {
      if (Te = !1, It(V), !ae) if (A(Gt) !== null) ae = !0, Dt(St);
      else {
        var ve = A(je);
        ve !== null && Ge(Ne, ve.startTime - V);
      }
    }
    function St(V, ve) {
      ae = !1, Te && (Te = !1, Mn(Be), Be = -1), Ve = !0;
      var ne = ce;
      try {
        for (It(ve), Ke = A(Gt); Ke !== null && (!(Ke.expirationTime > ve) || V && !Qt()); ) {
          var _ = Ke.callback;
          if (typeof _ == "function") {
            Ke.callback = null, ce = Ke.priorityLevel;
            var B = _(Ke.expirationTime <= ve);
            ve = X.unstable_now(), typeof B == "function" ? Ke.callback = B : Ke === A(Gt) && rt(Gt), It(ve);
          } else rt(Gt);
          Ke = A(Gt);
        }
        if (Ke !== null) var De = !0;
        else {
          var ze = A(je);
          ze !== null && Ge(Ne, ze.startTime - ve), De = !1;
        }
        return De;
      } finally {
        Ke = null, ce = ne, Ve = !1;
      }
    }
    var Ce = !1, Je = null, Be = -1, Sn = 5, En = -1;
    function Qt() {
      return !(X.unstable_now() - En < Sn);
    }
    function ft() {
      if (Je !== null) {
        var V = X.unstable_now();
        En = V;
        var ve = !0;
        try {
          ve = Je(!0, V);
        } finally {
          ve ? nn() : (Ce = !1, Je = null);
        }
      } else Ce = !1;
    }
    var nn;
    if (typeof Nn == "function") nn = function() {
      Nn(ft);
    };
    else if (typeof MessageChannel < "u") {
      var We = new MessageChannel(), st = We.port2;
      We.port1.onmessage = ft, nn = function() {
        st.postMessage(null);
      };
    } else nn = function() {
      at(ft, 0);
    };
    function Dt(V) {
      Je = V, Ce || (Ce = !0, nn());
    }
    function Ge(V, ve) {
      Be = at(function() {
        V(X.unstable_now());
      }, ve);
    }
    X.unstable_IdlePriority = 5, X.unstable_ImmediatePriority = 1, X.unstable_LowPriority = 4, X.unstable_NormalPriority = 3, X.unstable_Profiling = null, X.unstable_UserBlockingPriority = 2, X.unstable_cancelCallback = function(V) {
      V.callback = null;
    }, X.unstable_continueExecution = function() {
      ae || Ve || (ae = !0, Dt(St));
    }, X.unstable_forceFrameRate = function(V) {
      0 > V || 125 < V ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Sn = 0 < V ? Math.floor(1e3 / V) : 5;
    }, X.unstable_getCurrentPriorityLevel = function() {
      return ce;
    }, X.unstable_getFirstCallbackNode = function() {
      return A(Gt);
    }, X.unstable_next = function(V) {
      switch (ce) {
        case 1:
        case 2:
        case 3:
          var ve = 3;
          break;
        default:
          ve = ce;
      }
      var ne = ce;
      ce = ve;
      try {
        return V();
      } finally {
        ce = ne;
      }
    }, X.unstable_pauseExecution = function() {
    }, X.unstable_requestPaint = function() {
    }, X.unstable_runWithPriority = function(V, ve) {
      switch (V) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          V = 3;
      }
      var ne = ce;
      ce = V;
      try {
        return ve();
      } finally {
        ce = ne;
      }
    }, X.unstable_scheduleCallback = function(V, ve, ne) {
      var _ = X.unstable_now();
      switch (typeof ne == "object" && ne !== null ? (ne = ne.delay, ne = typeof ne == "number" && 0 < ne ? _ + ne : _) : ne = _, V) {
        case 1:
          var B = -1;
          break;
        case 2:
          B = 250;
          break;
        case 5:
          B = 1073741823;
          break;
        case 4:
          B = 1e4;
          break;
        default:
          B = 5e3;
      }
      return B = ne + B, V = { id: xe++, callback: ve, priorityLevel: V, startTime: ne, expirationTime: B, sortIndex: -1 }, ne > _ ? (V.sortIndex = ne, se(je, V), A(Gt) === null && V === A(je) && (Te ? (Mn(Be), Be = -1) : Te = !0, Ge(Ne, ne - _))) : (V.sortIndex = B, se(Gt, V), ae || Ve || (ae = !0, Dt(St))), V;
    }, X.unstable_shouldYield = Qt, X.unstable_wrapCallback = function(V) {
      var ve = ce;
      return function() {
        var ne = ce;
        ce = ve;
        try {
          return V.apply(this, arguments);
        } finally {
          ce = ne;
        }
      };
    };
  }(u0)), u0;
}
var o0 = {}, q1;
function tD() {
  return q1 || (q1 = 1, function(X) {
    var se = {};
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    se.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var A = !1, rt = !1, bt = 5;
      function tn(ee, Re) {
        var qe = ee.length;
        ee.push(Re), Gt(ee, Re, qe);
      }
      function ot(ee) {
        return ee.length === 0 ? null : ee[0];
      }
      function S(ee) {
        if (ee.length === 0)
          return null;
        var Re = ee[0], qe = ee.pop();
        return qe !== Re && (ee[0] = qe, je(ee, qe, 0)), Re;
      }
      function Gt(ee, Re, qe) {
        for (var kt = qe; kt > 0; ) {
          var Ct = kt - 1 >>> 1, Cn = ee[Ct];
          if (xe(Cn, Re) > 0)
            ee[Ct] = Re, ee[kt] = Cn, kt = Ct;
          else
            return;
        }
      }
      function je(ee, Re, qe) {
        for (var kt = qe, Ct = ee.length, Cn = Ct >>> 1; kt < Cn; ) {
          var cn = (kt + 1) * 2 - 1, Sr = ee[cn], jt = cn + 1, Zn = ee[jt];
          if (xe(Sr, Re) < 0)
            jt < Ct && xe(Zn, Sr) < 0 ? (ee[kt] = Zn, ee[jt] = Re, kt = jt) : (ee[kt] = Sr, ee[cn] = Re, kt = cn);
          else if (jt < Ct && xe(Zn, Re) < 0)
            ee[kt] = Zn, ee[jt] = Re, kt = jt;
          else
            return;
        }
      }
      function xe(ee, Re) {
        var qe = ee.sortIndex - Re.sortIndex;
        return qe !== 0 ? qe : ee.id - Re.id;
      }
      var Ke = 1, ce = 2, Ve = 3, ae = 4, Te = 5;
      function at(ee, Re) {
      }
      var Mn = typeof performance == "object" && typeof performance.now == "function";
      if (Mn) {
        var Nn = performance;
        X.unstable_now = function() {
          return Nn.now();
        };
      } else {
        var It = Date, Ne = It.now();
        X.unstable_now = function() {
          return It.now() - Ne;
        };
      }
      var St = 1073741823, Ce = -1, Je = 250, Be = 5e3, Sn = 1e4, En = St, Qt = [], ft = [], nn = 1, We = null, st = Ve, Dt = !1, Ge = !1, V = !1, ve = typeof setTimeout == "function" ? setTimeout : null, ne = typeof clearTimeout == "function" ? clearTimeout : null, _ = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function B(ee) {
        for (var Re = ot(ft); Re !== null; ) {
          if (Re.callback === null)
            S(ft);
          else if (Re.startTime <= ee)
            S(ft), Re.sortIndex = Re.expirationTime, tn(Qt, Re);
          else
            return;
          Re = ot(ft);
        }
      }
      function De(ee) {
        if (V = !1, B(ee), !Ge)
          if (ot(Qt) !== null)
            Ge = !0, ra(ze);
          else {
            var Re = ot(ft);
            Re !== null && xn(De, Re.startTime - ee);
          }
      }
      function ze(ee, Re) {
        Ge = !1, V && (V = !1, ba()), Dt = !0;
        var qe = st;
        try {
          var kt;
          if (!rt) return Ye(ee, Re);
        } finally {
          We = null, st = qe, Dt = !1;
        }
      }
      function Ye(ee, Re) {
        var qe = Re;
        for (B(qe), We = ot(Qt); We !== null && !A && !(We.expirationTime > qe && (!ee || wa())); ) {
          var kt = We.callback;
          if (typeof kt == "function") {
            We.callback = null, st = We.priorityLevel;
            var Ct = We.expirationTime <= qe, Cn = kt(Ct);
            qe = X.unstable_now(), typeof Cn == "function" ? We.callback = Cn : We === ot(Qt) && S(Qt), B(qe);
          } else
            S(Qt);
          We = ot(Qt);
        }
        if (We !== null)
          return !0;
        var cn = ot(ft);
        return cn !== null && xn(De, cn.startTime - qe), !1;
      }
      function Xe(ee, Re) {
        switch (ee) {
          case Ke:
          case ce:
          case Ve:
          case ae:
          case Te:
            break;
          default:
            ee = Ve;
        }
        var qe = st;
        st = ee;
        try {
          return Re();
        } finally {
          st = qe;
        }
      }
      function ht(ee) {
        var Re;
        switch (st) {
          case Ke:
          case ce:
          case Ve:
            Re = Ve;
            break;
          default:
            Re = st;
            break;
        }
        var qe = st;
        st = Re;
        try {
          return ee();
        } finally {
          st = qe;
        }
      }
      function it(ee) {
        var Re = st;
        return function() {
          var qe = st;
          st = Re;
          try {
            return ee.apply(this, arguments);
          } finally {
            st = qe;
          }
        };
      }
      function Et(ee, Re, qe) {
        var kt = X.unstable_now(), Ct;
        if (typeof qe == "object" && qe !== null) {
          var Cn = qe.delay;
          typeof Cn == "number" && Cn > 0 ? Ct = kt + Cn : Ct = kt;
        } else
          Ct = kt;
        var cn;
        switch (ee) {
          case Ke:
            cn = Ce;
            break;
          case ce:
            cn = Je;
            break;
          case Te:
            cn = En;
            break;
          case ae:
            cn = Sn;
            break;
          case Ve:
          default:
            cn = Be;
            break;
        }
        var Sr = Ct + cn, jt = {
          id: nn++,
          callback: Re,
          priorityLevel: ee,
          startTime: Ct,
          expirationTime: Sr,
          sortIndex: -1
        };
        return Ct > kt ? (jt.sortIndex = Ct, tn(ft, jt), ot(Qt) === null && jt === ot(ft) && (V ? ba() : V = !0, xn(De, Ct - kt))) : (jt.sortIndex = Sr, tn(Qt, jt), !Ge && !Dt && (Ge = !0, ra(ze))), jt;
      }
      function Ht() {
      }
      function ea() {
        !Ge && !Dt && (Ge = !0, ra(ze));
      }
      function ta() {
        return ot(Qt);
      }
      function Ar(ee) {
        ee.callback = null;
      }
      function vn() {
        return st;
      }
      var qn = !1, mr = null, Kn = -1, zn = bt, na = -1;
      function wa() {
        var ee = X.unstable_now() - na;
        return !(ee < zn);
      }
      function Un() {
      }
      function xa(ee) {
        if (ee < 0 || ee > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ee > 0 ? zn = Math.floor(1e3 / ee) : zn = bt;
      }
      var hi = function() {
        if (mr !== null) {
          var ee = X.unstable_now();
          na = ee;
          var Re = !0, qe = !0;
          try {
            qe = mr(Re, ee);
          } finally {
            qe ? yr() : (qn = !1, mr = null);
          }
        } else
          qn = !1;
      }, yr;
      if (typeof _ == "function")
        yr = function() {
          _(hi);
        };
      else if (typeof MessageChannel < "u") {
        var _a = new MessageChannel(), gr = _a.port2;
        _a.port1.onmessage = hi, yr = function() {
          gr.postMessage(null);
        };
      } else
        yr = function() {
          ve(hi, 0);
        };
      function ra(ee) {
        mr = ee, qn || (qn = !0, yr());
      }
      function xn(ee, Re) {
        Kn = ve(function() {
          ee(X.unstable_now());
        }, Re);
      }
      function ba() {
        ne(Kn), Kn = -1;
      }
      var $a = Un, Ya = null;
      X.unstable_IdlePriority = Te, X.unstable_ImmediatePriority = Ke, X.unstable_LowPriority = ae, X.unstable_NormalPriority = Ve, X.unstable_Profiling = Ya, X.unstable_UserBlockingPriority = ce, X.unstable_cancelCallback = Ar, X.unstable_continueExecution = ea, X.unstable_forceFrameRate = xa, X.unstable_getCurrentPriorityLevel = vn, X.unstable_getFirstCallbackNode = ta, X.unstable_next = ht, X.unstable_pauseExecution = Ht, X.unstable_requestPaint = $a, X.unstable_runWithPriority = Xe, X.unstable_scheduleCallback = Et, X.unstable_shouldYield = wa, X.unstable_wrapCallback = it, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(o0)), o0;
}
var K1;
function rT() {
  if (K1) return Mm.exports;
  K1 = 1;
  var X = {};
  return X.NODE_ENV === "production" ? Mm.exports = eD() : Mm.exports = tD(), Mm.exports;
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
var Z1;
function nD() {
  if (Z1) return Ta;
  Z1 = 1;
  var X = Um, se = rT();
  function A(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var rt = /* @__PURE__ */ new Set(), bt = {};
  function tn(n, r) {
    ot(n, r), ot(n + "Capture", r);
  }
  function ot(n, r) {
    for (bt[n] = r, n = 0; n < r.length; n++) rt.add(r[n]);
  }
  var S = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Gt = Object.prototype.hasOwnProperty, je = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, xe = {}, Ke = {};
  function ce(n) {
    return Gt.call(Ke, n) ? !0 : Gt.call(xe, n) ? !1 : je.test(n) ? Ke[n] = !0 : (xe[n] = !0, !1);
  }
  function Ve(n, r, l, o) {
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
  function ae(n, r, l, o) {
    if (r === null || typeof r > "u" || Ve(n, r, l, o)) return !0;
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
  function Te(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var at = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    at[n] = new Te(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    at[r] = new Te(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    at[n] = new Te(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    at[n] = new Te(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    at[n] = new Te(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    at[n] = new Te(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    at[n] = new Te(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    at[n] = new Te(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    at[n] = new Te(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Mn = /[\-:]([a-z])/g;
  function Nn(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Mn,
      Nn
    );
    at[r] = new Te(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Mn, Nn);
    at[r] = new Te(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Mn, Nn);
    at[r] = new Te(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    at[n] = new Te(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), at.xlinkHref = new Te("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    at[n] = new Te(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function It(n, r, l, o) {
    var c = at.hasOwnProperty(r) ? at[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (ae(r, l, c, o) && (l = null), o || c === null ? ce(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var Ne = X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, St = Symbol.for("react.element"), Ce = Symbol.for("react.portal"), Je = Symbol.for("react.fragment"), Be = Symbol.for("react.strict_mode"), Sn = Symbol.for("react.profiler"), En = Symbol.for("react.provider"), Qt = Symbol.for("react.context"), ft = Symbol.for("react.forward_ref"), nn = Symbol.for("react.suspense"), We = Symbol.for("react.suspense_list"), st = Symbol.for("react.memo"), Dt = Symbol.for("react.lazy"), Ge = Symbol.for("react.offscreen"), V = Symbol.iterator;
  function ve(n) {
    return n === null || typeof n != "object" ? null : (n = V && n[V] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ne = Object.assign, _;
  function B(n) {
    if (_ === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      _ = r && r[1] || "";
    }
    return `
` + _ + n;
  }
  var De = !1;
  function ze(n, r) {
    if (!n || De) return "";
    De = !0;
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
        } catch (N) {
          var o = N;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (N) {
          o = N;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (N) {
          o = N;
        }
        n();
      }
    } catch (N) {
      if (N && o && typeof N.stack == "string") {
        for (var c = N.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, E = d.length - 1; 1 <= m && 0 <= E && c[m] !== d[E]; ) E--;
        for (; 1 <= m && 0 <= E; m--, E--) if (c[m] !== d[E]) {
          if (m !== 1 || E !== 1)
            do
              if (m--, E--, 0 > E || c[m] !== d[E]) {
                var T = `
` + c[m].replace(" at new ", " at ");
                return n.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", n.displayName)), T;
              }
            while (1 <= m && 0 <= E);
          break;
        }
      }
    } finally {
      De = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? B(n) : "";
  }
  function Ye(n) {
    switch (n.tag) {
      case 5:
        return B(n.type);
      case 16:
        return B("Lazy");
      case 13:
        return B("Suspense");
      case 19:
        return B("SuspenseList");
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
  function Xe(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case Je:
        return "Fragment";
      case Ce:
        return "Portal";
      case Sn:
        return "Profiler";
      case Be:
        return "StrictMode";
      case nn:
        return "Suspense";
      case We:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case Qt:
        return (n.displayName || "Context") + ".Consumer";
      case En:
        return (n._context.displayName || "Context") + ".Provider";
      case ft:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case st:
        return r = n.displayName || null, r !== null ? r : Xe(n.type) || "Memo";
      case Dt:
        r = n._payload, n = n._init;
        try {
          return Xe(n(r));
        } catch {
        }
    }
    return null;
  }
  function ht(n) {
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
        return Xe(r);
      case 8:
        return r === Be ? "StrictMode" : "Mode";
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
  function it(n) {
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
  function Et(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Ht(n) {
    var r = Et(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
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
    n._valueTracker || (n._valueTracker = Ht(n));
  }
  function ta(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = Et(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function Ar(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function vn(n, r) {
    var l = r.checked;
    return ne({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function qn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = it(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function mr(n, r) {
    r = r.checked, r != null && It(n, "checked", r, !1);
  }
  function Kn(n, r) {
    mr(n, r);
    var l = it(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? na(n, r.type, l) : r.hasOwnProperty("defaultValue") && na(n, r.type, it(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function zn(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function na(n, r, l) {
    (r !== "number" || Ar(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var wa = Array.isArray;
  function Un(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + it(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function xa(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(A(91));
    return ne({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function hi(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(A(92));
        if (wa(l)) {
          if (1 < l.length) throw Error(A(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: it(l) };
  }
  function yr(n, r) {
    var l = it(r.value), o = it(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function _a(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function gr(n) {
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
    return n == null || n === "http://www.w3.org/1999/xhtml" ? gr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var xn, ba = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (xn = xn || document.createElement("div"), xn.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = xn.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
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
  }, ee = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Ya).forEach(function(n) {
    ee.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Ya[r] = Ya[n];
    });
  });
  function Re(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || Ya.hasOwnProperty(n) && Ya[n] ? ("" + r).trim() : r + "px";
  }
  function qe(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = Re(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var kt = ne({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ct(n, r) {
    if (r) {
      if (kt[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(A(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(A(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(A(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(A(62));
    }
  }
  function Cn(n, r) {
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
  var cn = null;
  function Sr(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var jt = null, Zn = null, Xt = null;
  function rn(n) {
    if (n = Ka(n)) {
      if (typeof jt != "function") throw Error(A(280));
      var r = n.stateNode;
      r && (r = Tc(r), jt(n.stateNode, n.type, r));
    }
  }
  function Al(n) {
    Zn ? Xt ? Xt.push(n) : Xt = [n] : Zn = n;
  }
  function mi() {
    if (Zn) {
      var n = Zn, r = Xt;
      if (Xt = Zn = null, rn(n), r) for (n = 0; n < r.length; n++) rn(r[n]);
    }
  }
  function Ou(n, r) {
    return n(r);
  }
  function oc() {
  }
  var Fo = !1;
  function Ho(n, r, l) {
    if (Fo) return n(r, l);
    Fo = !0;
    try {
      return Ou(n, r, l);
    } finally {
      Fo = !1, (Zn !== null || Xt !== null) && (oc(), mi());
    }
  }
  function Ki(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = Tc(l);
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
  var yi = !1;
  if (S) try {
    var Ia = {};
    Object.defineProperty(Ia, "passive", { get: function() {
      yi = !0;
    } }), window.addEventListener("test", Ia, Ia), window.removeEventListener("test", Ia, Ia);
  } catch {
    yi = !1;
  }
  function Lu(n, r, l, o, c, d, m, E, T) {
    var N = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, N);
    } catch (Y) {
      this.onError(Y);
    }
  }
  var aa = !1, ia = null, Da = !1, Fl = null, Mu = { onError: function(n) {
    aa = !0, ia = n;
  } };
  function Nu(n, r, l, o, c, d, m, E, T) {
    aa = !1, ia = null, Lu.apply(Mu, arguments);
  }
  function jo(n, r, l, o, c, d, m, E, T) {
    if (Nu.apply(this, arguments), aa) {
      if (aa) {
        var N = ia;
        aa = !1, ia = null;
      } else throw Error(A(198));
      Da || (Da = !0, Fl = N);
    }
  }
  function Ot(n) {
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
  function Hl(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function jl(n) {
    if (Ot(n) !== n) throw Error(A(188));
  }
  function Vl(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Ot(n), r === null) throw Error(A(188));
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
          if (d === l) return jl(c), n;
          if (d === o) return jl(c), r;
          d = d.sibling;
        }
        throw Error(A(188));
      }
      if (l.return !== o.return) l = c, o = d;
      else {
        for (var m = !1, E = c.child; E; ) {
          if (E === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (E === o) {
            m = !0, o = c, l = d;
            break;
          }
          E = E.sibling;
        }
        if (!m) {
          for (E = d.child; E; ) {
            if (E === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (E === o) {
              m = !0, o = d, l = c;
              break;
            }
            E = E.sibling;
          }
          if (!m) throw Error(A(189));
        }
      }
      if (l.alternate !== o) throw Error(A(190));
    }
    if (l.tag !== 3) throw Error(A(188));
    return l.stateNode.current === l ? n : r;
  }
  function _n(n) {
    return n = Vl(n), n !== null ? sc(n) : null;
  }
  function sc(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = sc(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var cc = se.unstable_scheduleCallback, Vo = se.unstable_cancelCallback, Af = se.unstable_shouldYield, Ff = se.unstable_requestPaint, qt = se.unstable_now, fc = se.unstable_getCurrentPriorityLevel, Bo = se.unstable_ImmediatePriority, Qa = se.unstable_UserBlockingPriority, Ie = se.unstable_NormalPriority, Bl = se.unstable_LowPriority, gi = se.unstable_IdlePriority, Zi = null, Er = null;
  function Po(n) {
    if (Er && typeof Er.onCommitFiberRoot == "function") try {
      Er.onCommitFiberRoot(Zi, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Jn = Math.clz32 ? Math.clz32 : Io, $o = Math.log, Yo = Math.LN2;
  function Io(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - ($o(n) / Yo | 0) | 0;
  }
  var Pl = 64, zu = 4194304;
  function Si(n) {
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
      var E = m & ~c;
      E !== 0 ? o = Si(E) : (d &= m, d !== 0 && (o = Si(d)));
    } else m = l & ~c, m !== 0 ? o = Si(m) : d !== 0 && (o = Si(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - Jn(r), c = 1 << l, o |= n[l], r &= ~c;
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
  function Ji(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - Jn(d), E = 1 << m, T = c[m];
      T === -1 ? (!(E & l) || E & o) && (c[m] = la(E, r)) : T <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function Ga(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function $l() {
    var n = Pl;
    return Pl <<= 1, !(Pl & 4194240) && (Pl = 64), n;
  }
  function Yl(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function el(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Jn(r), n[r] = l;
  }
  function Qo(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Jn(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Wo(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Jn(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var et = 0;
  function Go(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Uu, tl, Xo, tt, Au, Il = !1, Ue = [], ka = null, Kt = null, Cr = null, ua = /* @__PURE__ */ new Map(), nl = /* @__PURE__ */ new Map(), Vt = [], Zt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function qo(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        ka = null;
        break;
      case "dragenter":
      case "dragleave":
        Kt = null;
        break;
      case "mouseover":
      case "mouseout":
        Cr = null;
        break;
      case "pointerover":
      case "pointerout":
        ua.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        nl.delete(r.pointerId);
    }
  }
  function An(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = Ka(r), r !== null && tl(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Tr(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return ka = An(ka, n, r, l, o, c), !0;
      case "dragenter":
        return Kt = An(Kt, n, r, l, o, c), !0;
      case "mouseover":
        return Cr = An(Cr, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return ua.set(d, An(ua.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, nl.set(d, An(nl.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Oa(n) {
    var r = Oi(n.target);
    if (r !== null) {
      var l = Ot(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Hl(l), r !== null) {
            n.blockedOn = r, Au(n.priority, function() {
              Xo(l);
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
  function Fu(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = ju(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        cn = o, l.target.dispatchEvent(o), cn = null;
      } else return r = Ka(l), r !== null && tl(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function Ql(n, r, l) {
    Fu(n) && l.delete(r);
  }
  function Wl() {
    Il = !1, ka !== null && Fu(ka) && (ka = null), Kt !== null && Fu(Kt) && (Kt = null), Cr !== null && Fu(Cr) && (Cr = null), ua.forEach(Ql), nl.forEach(Ql);
  }
  function rl(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Il || (Il = !0, se.unstable_scheduleCallback(se.unstable_NormalPriority, Wl)));
  }
  function oa(n) {
    function r(c) {
      return rl(c, n);
    }
    if (0 < Ue.length) {
      rl(Ue[0], n);
      for (var l = 1; l < Ue.length; l++) {
        var o = Ue[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (ka !== null && rl(ka, n), Kt !== null && rl(Kt, n), Cr !== null && rl(Cr, n), ua.forEach(r), nl.forEach(r), l = 0; l < Vt.length; l++) o = Vt[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Vt.length && (l = Vt[0], l.blockedOn === null); ) Oa(l), l.blockedOn === null && Vt.shift();
  }
  var Ei = Ne.ReactCurrentBatchConfig, Gl = !0;
  function Ci(n, r, l, o) {
    var c = et, d = Ei.transition;
    Ei.transition = null;
    try {
      et = 1, Xa(n, r, l, o);
    } finally {
      et = c, Ei.transition = d;
    }
  }
  function Hu(n, r, l, o) {
    var c = et, d = Ei.transition;
    Ei.transition = null;
    try {
      et = 4, Xa(n, r, l, o);
    } finally {
      et = c, Ei.transition = d;
    }
  }
  function Xa(n, r, l, o) {
    if (Gl) {
      var c = ju(n, r, l, o);
      if (c === null) qf(n, r, o, Ti, l), qo(n, o);
      else if (Tr(c, n, r, l, o)) o.stopPropagation();
      else if (qo(n, o), r & 4 && -1 < Zt.indexOf(n)) {
        for (; c !== null; ) {
          var d = Ka(c);
          if (d !== null && Uu(d), d = ju(n, r, l, o), d === null && qf(n, r, o, Ti, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else qf(n, r, o, null, l);
    }
  }
  var Ti = null;
  function ju(n, r, l, o) {
    if (Ti = null, n = Sr(o), n = Oi(n), n !== null) if (r = Ot(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = Hl(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return Ti = n, null;
  }
  function Ko(n) {
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
        switch (fc()) {
          case Bo:
            return 1;
          case Qa:
            return 4;
          case Ie:
          case Bl:
            return 16;
          case gi:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var La = null, Vu = null, h = null;
  function C() {
    if (h) return h;
    var n, r = Vu, l = r.length, o, c = "value" in La ? La.value : La.textContent, d = c.length;
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
  function pe(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n) n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? U : W, this.isPropagationStopped = W, this;
    }
    return ne(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = U);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = U);
    }, persist: function() {
    }, isPersistent: U }), r;
  }
  var le = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Le = pe(le), Qe = ne({}, le, { view: 0, detail: 0 }), Tt = pe(Qe), wt, xt, _t, Bt = ne({}, Qe, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: dc, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== _t && (_t && n.type === "mousemove" ? (wt = n.screenX - _t.screenX, xt = n.screenY - _t.screenY) : xt = wt = 0, _t = n), wt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : xt;
  } }), ct = pe(Bt), al = ne({}, Bt, { dataTransfer: 0 }), Bu = pe(al), Zo = ne({}, Qe, { relatedTarget: 0 }), Jo = pe(Zo), Ri = ne({}, le, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), es = pe(Ri), ts = ne({}, le, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Hf = pe(ts), Am = ne({}, le, { data: 0 }), Gp = pe(Am), Xp = {
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
  }, jf = {
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
  }, qp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Kp(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = qp[n]) ? !!r[n] : !1;
  }
  function dc() {
    return Kp;
  }
  var Fm = ne({}, Qe, { key: function(n) {
    if (n.key) {
      var r = Xp[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = L(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? jf[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: dc, charCode: function(n) {
    return n.type === "keypress" ? L(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? L(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), wi = pe(Fm), Hm = ne({}, Bt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), pc = pe(Hm), Vf = ne({}, Qe, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: dc }), Bf = pe(Vf), jm = ne({}, le, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), vc = pe(jm), Zp = ne({}, Bt, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Rr = pe(Zp), xi = [9, 13, 27, 32], an = S && "CompositionEvent" in window, Fr = null;
  S && "documentMode" in document && (Fr = document.documentMode);
  var Pf = S && "TextEvent" in window && !Fr, ns = S && (!an || Fr && 8 < Fr && 11 >= Fr), Jp = " ", Pu = !1;
  function ev(n, r) {
    switch (n) {
      case "keyup":
        return xi.indexOf(r.keyCode) !== -1;
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
  function tv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var il = !1;
  function Vm(n, r) {
    switch (n) {
      case "compositionend":
        return tv(r);
      case "keypress":
        return r.which !== 32 ? null : (Pu = !0, Jp);
      case "textInput":
        return n = r.data, n === Jp && Pu ? null : n;
      default:
        return null;
    }
  }
  function Bm(n, r) {
    if (il) return n === "compositionend" || !an && ev(n, r) ? (n = C(), h = Vu = La = null, il = !1, n) : null;
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
        return ns && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Pm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function $f(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Pm[n.type] : r === "textarea";
  }
  function nv(n, r, l, o) {
    Al(o), r = Ec(r, "onChange"), 0 < r.length && (l = new Le("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var rs = null, as = null;
  function rv(n) {
    Sv(n, 0);
  }
  function _i(n) {
    var r = Qu(n);
    if (ta(r)) return n;
  }
  function Yf(n, r) {
    if (n === "change") return r;
  }
  var If = !1;
  if (S) {
    var hc;
    if (S) {
      var Qf = "oninput" in document;
      if (!Qf) {
        var av = document.createElement("div");
        av.setAttribute("oninput", "return;"), Qf = typeof av.oninput == "function";
      }
      hc = Qf;
    } else hc = !1;
    If = hc && (!document.documentMode || 9 < document.documentMode);
  }
  function iv() {
    rs && (rs.detachEvent("onpropertychange", lv), as = rs = null);
  }
  function lv(n) {
    if (n.propertyName === "value" && _i(as)) {
      var r = [];
      nv(r, as, n, Sr(n)), Ho(rv, r);
    }
  }
  function $m(n, r, l) {
    n === "focusin" ? (iv(), rs = r, as = l, rs.attachEvent("onpropertychange", lv)) : n === "focusout" && iv();
  }
  function Ym(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return _i(as);
  }
  function Im(n, r) {
    if (n === "click") return _i(r);
  }
  function Qm(n, r) {
    if (n === "input" || n === "change") return _i(r);
  }
  function uv(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Ma = typeof Object.is == "function" ? Object.is : uv;
  function $u(n, r) {
    if (Ma(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!Gt.call(r, c) || !Ma(n[c], r[c])) return !1;
    }
    return !0;
  }
  function ov(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function sv(n, r) {
    var l = ov(n);
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
      l = ov(l);
    }
  }
  function cv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? cv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function fv() {
    for (var n = window, r = Ar(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = Ar(n.document);
    }
    return r;
  }
  function is(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Xl(n) {
    var r = fv(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && cv(l.ownerDocument.documentElement, l)) {
      if (o !== null && is(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = sv(l, d);
          var m = sv(
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
  var mc = S && "documentMode" in document && 11 >= document.documentMode, ql = null, ll = null, ls = null, Wf = !1;
  function dv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Wf || ql == null || ql !== Ar(o) || (o = ql, "selectionStart" in o && is(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), ls && $u(ls, o) || (ls = o, o = Ec(ll, "onSelect"), 0 < o.length && (r = new Le("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = ql)));
  }
  function yc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var Yu = { animationend: yc("Animation", "AnimationEnd"), animationiteration: yc("Animation", "AnimationIteration"), animationstart: yc("Animation", "AnimationStart"), transitionend: yc("Transition", "TransitionEnd") }, gc = {}, pv = {};
  S && (pv = document.createElement("div").style, "AnimationEvent" in window || (delete Yu.animationend.animation, delete Yu.animationiteration.animation, delete Yu.animationstart.animation), "TransitionEvent" in window || delete Yu.transitionend.transition);
  function us(n) {
    if (gc[n]) return gc[n];
    if (!Yu[n]) return n;
    var r = Yu[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in pv) return gc[n] = r[l];
    return n;
  }
  var Gn = us("animationend"), Gf = us("animationiteration"), vv = us("animationstart"), hv = us("transitionend"), mv = /* @__PURE__ */ new Map(), yv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ul(n, r) {
    mv.set(n, r), tn(r, [n]);
  }
  for (var Sc = 0; Sc < yv.length; Sc++) {
    var os = yv[Sc], ss = os.toLowerCase(), Wm = os[0].toUpperCase() + os.slice(1);
    ul(ss, "on" + Wm);
  }
  ul(Gn, "onAnimationEnd"), ul(Gf, "onAnimationIteration"), ul(vv, "onAnimationStart"), ul("dblclick", "onDoubleClick"), ul("focusin", "onFocus"), ul("focusout", "onBlur"), ul(hv, "onTransitionEnd"), ot("onMouseEnter", ["mouseout", "mouseover"]), ot("onMouseLeave", ["mouseout", "mouseover"]), ot("onPointerEnter", ["pointerout", "pointerover"]), ot("onPointerLeave", ["pointerout", "pointerover"]), tn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), tn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), tn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), tn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), tn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), tn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var bi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Gm = new Set("cancel close invalid load scroll toggle".split(" ").concat(bi));
  function gv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, jo(o, r, void 0, n), n.currentTarget = null;
  }
  function Sv(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var E = o[m], T = E.instance, N = E.currentTarget;
          if (E = E.listener, T !== d && c.isPropagationStopped()) break e;
          gv(c, E, N), d = T;
        }
        else for (m = 0; m < o.length; m++) {
          if (E = o[m], T = E.instance, N = E.currentTarget, E = E.listener, T !== d && c.isPropagationStopped()) break e;
          gv(c, E, N), d = T;
        }
      }
    }
    if (Da) throw n = Fl, Da = !1, Fl = null, n;
  }
  function Nt(n, r) {
    var l = r[ad];
    l === void 0 && (l = r[ad] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (Xf(r, n, 2, !1), l.add(o));
  }
  function cs(n, r, l) {
    var o = 0;
    r && (o |= 4), Xf(l, n, o, r);
  }
  var Di = "_reactListening" + Math.random().toString(36).slice(2);
  function qa(n) {
    if (!n[Di]) {
      n[Di] = !0, rt.forEach(function(l) {
        l !== "selectionchange" && (Gm.has(l) || cs(l, !1, n), cs(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Di] || (r[Di] = !0, cs("selectionchange", !1, r));
    }
  }
  function Xf(n, r, l, o) {
    switch (Ko(r)) {
      case 1:
        var c = Ci;
        break;
      case 4:
        c = Hu;
        break;
      default:
        c = Xa;
    }
    l = c.bind(null, r, l, n), c = void 0, !yi || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function qf(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null) e: for (; ; ) {
      if (o === null) return;
      var m = o.tag;
      if (m === 3 || m === 4) {
        var E = o.stateNode.containerInfo;
        if (E === c || E.nodeType === 8 && E.parentNode === c) break;
        if (m === 4) for (m = o.return; m !== null; ) {
          var T = m.tag;
          if ((T === 3 || T === 4) && (T = m.stateNode.containerInfo, T === c || T.nodeType === 8 && T.parentNode === c)) return;
          m = m.return;
        }
        for (; E !== null; ) {
          if (m = Oi(E), m === null) return;
          if (T = m.tag, T === 5 || T === 6) {
            o = d = m;
            continue e;
          }
          E = E.parentNode;
        }
      }
      o = o.return;
    }
    Ho(function() {
      var N = d, Y = Sr(l), I = [];
      e: {
        var $ = mv.get(n);
        if ($ !== void 0) {
          var re = Le, fe = n;
          switch (n) {
            case "keypress":
              if (L(l) === 0) break e;
            case "keydown":
            case "keyup":
              re = wi;
              break;
            case "focusin":
              fe = "focus", re = Jo;
              break;
            case "focusout":
              fe = "blur", re = Jo;
              break;
            case "beforeblur":
            case "afterblur":
              re = Jo;
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
              re = ct;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              re = Bu;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              re = Bf;
              break;
            case Gn:
            case Gf:
            case vv:
              re = es;
              break;
            case hv:
              re = vc;
              break;
            case "scroll":
              re = Tt;
              break;
            case "wheel":
              re = Rr;
              break;
            case "copy":
            case "cut":
            case "paste":
              re = Hf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              re = pc;
          }
          var he = (r & 4) !== 0, dn = !he && n === "scroll", b = he ? $ !== null ? $ + "Capture" : null : $;
          he = [];
          for (var w = N, O; w !== null; ) {
            O = w;
            var G = O.stateNode;
            if (O.tag === 5 && G !== null && (O = G, b !== null && (G = Ki(w, b), G != null && he.push(Iu(w, G, O)))), dn) break;
            w = w.return;
          }
          0 < he.length && ($ = new re($, fe, null, l, Y), I.push({ event: $, listeners: he }));
        }
      }
      if (!(r & 7)) {
        e: {
          if ($ = n === "mouseover" || n === "pointerover", re = n === "mouseout" || n === "pointerout", $ && l !== cn && (fe = l.relatedTarget || l.fromElement) && (Oi(fe) || fe[Na])) break e;
          if ((re || $) && ($ = Y.window === Y ? Y : ($ = Y.ownerDocument) ? $.defaultView || $.parentWindow : window, re ? (fe = l.relatedTarget || l.toElement, re = N, fe = fe ? Oi(fe) : null, fe !== null && (dn = Ot(fe), fe !== dn || fe.tag !== 5 && fe.tag !== 6) && (fe = null)) : (re = null, fe = N), re !== fe)) {
            if (he = ct, G = "onMouseLeave", b = "onMouseEnter", w = "mouse", (n === "pointerout" || n === "pointerover") && (he = pc, G = "onPointerLeave", b = "onPointerEnter", w = "pointer"), dn = re == null ? $ : Qu(re), O = fe == null ? $ : Qu(fe), $ = new he(G, w + "leave", re, l, Y), $.target = dn, $.relatedTarget = O, G = null, Oi(Y) === N && (he = new he(b, w + "enter", fe, l, Y), he.target = O, he.relatedTarget = dn, G = he), dn = G, re && fe) t: {
              for (he = re, b = fe, w = 0, O = he; O; O = Kl(O)) w++;
              for (O = 0, G = b; G; G = Kl(G)) O++;
              for (; 0 < w - O; ) he = Kl(he), w--;
              for (; 0 < O - w; ) b = Kl(b), O--;
              for (; w--; ) {
                if (he === b || b !== null && he === b.alternate) break t;
                he = Kl(he), b = Kl(b);
              }
              he = null;
            }
            else he = null;
            re !== null && Kf(I, $, re, he, !1), fe !== null && dn !== null && Kf(I, dn, fe, he, !0);
          }
        }
        e: {
          if ($ = N ? Qu(N) : window, re = $.nodeName && $.nodeName.toLowerCase(), re === "select" || re === "input" && $.type === "file") var ye = Yf;
          else if ($f($)) if (If) ye = Qm;
          else {
            ye = Ym;
            var ke = $m;
          }
          else (re = $.nodeName) && re.toLowerCase() === "input" && ($.type === "checkbox" || $.type === "radio") && (ye = Im);
          if (ye && (ye = ye(n, N))) {
            nv(I, ye, l, Y);
            break e;
          }
          ke && ke(n, $, N), n === "focusout" && (ke = $._wrapperState) && ke.controlled && $.type === "number" && na($, "number", $.value);
        }
        switch (ke = N ? Qu(N) : window, n) {
          case "focusin":
            ($f(ke) || ke.contentEditable === "true") && (ql = ke, ll = N, ls = null);
            break;
          case "focusout":
            ls = ll = ql = null;
            break;
          case "mousedown":
            Wf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Wf = !1, dv(I, l, Y);
            break;
          case "selectionchange":
            if (mc) break;
          case "keydown":
          case "keyup":
            dv(I, l, Y);
        }
        var Oe;
        if (an) e: {
          switch (n) {
            case "compositionstart":
              var Se = "onCompositionStart";
              break e;
            case "compositionend":
              Se = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Se = "onCompositionUpdate";
              break e;
          }
          Se = void 0;
        }
        else il ? ev(n, l) && (Se = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Se = "onCompositionStart");
        Se && (ns && l.locale !== "ko" && (il || Se !== "onCompositionStart" ? Se === "onCompositionEnd" && il && (Oe = C()) : (La = Y, Vu = "value" in La ? La.value : La.textContent, il = !0)), ke = Ec(N, Se), 0 < ke.length && (Se = new Gp(Se, n, null, l, Y), I.push({ event: Se, listeners: ke }), Oe ? Se.data = Oe : (Oe = tv(l), Oe !== null && (Se.data = Oe)))), (Oe = Pf ? Vm(n, l) : Bm(n, l)) && (N = Ec(N, "onBeforeInput"), 0 < N.length && (Y = new Gp("onBeforeInput", "beforeinput", null, l, Y), I.push({ event: Y, listeners: N }), Y.data = Oe));
      }
      Sv(I, r);
    });
  }
  function Iu(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function Ec(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = Ki(n, l), d != null && o.unshift(Iu(n, d, c)), d = Ki(n, r), d != null && o.push(Iu(n, d, c))), n = n.return;
    }
    return o;
  }
  function Kl(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Kf(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, T = E.alternate, N = E.stateNode;
      if (T !== null && T === o) break;
      E.tag === 5 && N !== null && (E = N, c ? (T = Ki(l, d), T != null && m.unshift(Iu(l, T, E))) : c || (T = Ki(l, d), T != null && m.push(Iu(l, T, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var Ev = /\r\n?/g, Zf = /\u0000|\uFFFD/g;
  function Cv(n) {
    return (typeof n == "string" ? n : "" + n).replace(Ev, `
`).replace(Zf, "");
  }
  function fs(n, r, l) {
    if (r = Cv(r), Cv(n) !== r && l) throw Error(A(425));
  }
  function Cc() {
  }
  var Jf = null, ed = null;
  function Zl(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var ds = typeof setTimeout == "function" ? setTimeout : void 0, ps = typeof clearTimeout == "function" ? clearTimeout : void 0, td = typeof Promise == "function" ? Promise : void 0, Tv = typeof queueMicrotask == "function" ? queueMicrotask : typeof td < "u" ? function(n) {
    return td.resolve(null).then(n).catch(nd);
  } : ds;
  function nd(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function rd(n, r) {
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
  function Hr(n) {
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
  function vs(n) {
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
  var ki = Math.random().toString(36).slice(2), sa = "__reactFiber$" + ki, hs = "__reactProps$" + ki, Na = "__reactContainer$" + ki, ad = "__reactEvents$" + ki, Xm = "__reactListeners$" + ki, qm = "__reactHandles$" + ki;
  function Oi(n) {
    var r = n[sa];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Na] || l[sa]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = vs(n); n !== null; ) {
          if (l = n[sa]) return l;
          n = vs(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function Ka(n) {
    return n = n[sa] || n[Na], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Qu(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(A(33));
  }
  function Tc(n) {
    return n[hs] || null;
  }
  var _e = [], za = -1;
  function zt(n) {
    return { current: n };
  }
  function me(n) {
    0 > za || (n.current = _e[za], _e[za] = null, za--);
  }
  function mt(n, r) {
    za++, _e[za] = n.current, n.current = r;
  }
  var ca = {}, bn = zt(ca), Fe = zt(!1), er = ca;
  function jr(n, r) {
    var l = n.type.contextTypes;
    if (!l) return ca;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function hn(n) {
    return n = n.childContextTypes, n != null;
  }
  function wr() {
    me(Fe), me(bn);
  }
  function Za(n, r, l) {
    if (bn.current !== ca) throw Error(A(168));
    mt(bn, r), mt(Fe, l);
  }
  function ol(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(A(108, ht(n) || "Unknown", c));
    return ne({}, l, o);
  }
  function Jl(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || ca, er = bn.current, mt(bn, n), mt(Fe, Fe.current), !0;
  }
  function Rv(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(A(169));
    l ? (n = ol(n, r, er), o.__reactInternalMemoizedMergedChildContext = n, me(Fe), me(bn), mt(bn, n)) : me(Fe), mt(Fe, l);
  }
  var Li = null, sl = !1, Fn = !1;
  function Rc(n) {
    Li === null ? Li = [n] : Li.push(n);
  }
  function wv(n) {
    sl = !0, Rc(n);
  }
  function Ja() {
    if (!Fn && Li !== null) {
      Fn = !0;
      var n = 0, r = et;
      try {
        var l = Li;
        for (et = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Li = null, sl = !1;
      } catch (c) {
        throw Li !== null && (Li = Li.slice(n + 1)), cc(Bo, Ja), c;
      } finally {
        et = r, Fn = !1;
      }
    }
    return null;
  }
  var fa = [], cl = 0, da = null, eu = 0, xr = [], _r = 0, Ua = null, br = 1, Hn = "";
  function tu(n, r) {
    fa[cl++] = eu, fa[cl++] = da, da = n, eu = r;
  }
  function fl(n, r, l) {
    xr[_r++] = br, xr[_r++] = Hn, xr[_r++] = Ua, Ua = n;
    var o = br;
    n = Hn;
    var c = 32 - Jn(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - Jn(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, br = 1 << 32 - Jn(r) + c | l << c | o, Hn = d + n;
    } else br = 1 << d | l << c | o, Hn = n;
  }
  function wc(n) {
    n.return !== null && (tu(n, 1), fl(n, 1, 0));
  }
  function xc(n) {
    for (; n === da; ) da = fa[--cl], fa[cl] = null, eu = fa[--cl], fa[cl] = null;
    for (; n === Ua; ) Ua = xr[--_r], xr[_r] = null, Hn = xr[--_r], xr[_r] = null, br = xr[--_r], xr[_r] = null;
  }
  var Vr = null, Br = null, Pt = !1, pa = null;
  function id(n, r) {
    var l = Gr(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function ld(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Vr = n, Br = Hr(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Vr = n, Br = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = Ua !== null ? { id: br, overflow: Hn } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Gr(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Vr = n, Br = null, !0) : !1;
      default:
        return !1;
    }
  }
  function ud(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function _c(n) {
    if (Pt) {
      var r = Br;
      if (r) {
        var l = r;
        if (!ld(n, r)) {
          if (ud(n)) throw Error(A(418));
          r = Hr(l.nextSibling);
          var o = Vr;
          r && ld(n, r) ? id(o, l) : (n.flags = n.flags & -4097 | 2, Pt = !1, Vr = n);
        }
      } else {
        if (ud(n)) throw Error(A(418));
        n.flags = n.flags & -4097 | 2, Pt = !1, Vr = n;
      }
    }
  }
  function od(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Vr = n;
  }
  function bc(n) {
    if (n !== Vr) return !1;
    if (!Pt) return od(n), Pt = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Zl(n.type, n.memoizedProps)), r && (r = Br)) {
      if (ud(n)) throw xv(), Error(A(418));
      for (; r; ) id(n, r), r = Hr(r.nextSibling);
    }
    if (od(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(A(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Br = Hr(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Br = null;
      }
    } else Br = Vr ? Hr(n.stateNode.nextSibling) : null;
    return !0;
  }
  function xv() {
    for (var n = Br; n; ) n = Hr(n.nextSibling);
  }
  function Wu() {
    Br = Vr = null, Pt = !1;
  }
  function mn(n) {
    pa === null ? pa = [n] : pa.push(n);
  }
  var Km = Ne.ReactCurrentBatchConfig;
  function dl(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(A(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(A(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(A(284));
      if (!l._owner) throw Error(A(290, n));
    }
    return n;
  }
  function Gu(n, r) {
    throw n = Object.prototype.toString.call(r), Error(A(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function pl(n) {
    var r = n._init;
    return r(n._payload);
  }
  function _v(n) {
    function r(b, w) {
      if (n) {
        var O = b.deletions;
        O === null ? (b.deletions = [w], b.flags |= 16) : O.push(w);
      }
    }
    function l(b, w) {
      if (!n) return null;
      for (; w !== null; ) r(b, w), w = w.sibling;
      return null;
    }
    function o(b, w) {
      for (b = /* @__PURE__ */ new Map(); w !== null; ) w.key !== null ? b.set(w.key, w) : b.set(w.index, w), w = w.sibling;
      return b;
    }
    function c(b, w) {
      return b = wl(b, w), b.index = 0, b.sibling = null, b;
    }
    function d(b, w, O) {
      return b.index = O, n ? (O = b.alternate, O !== null ? (O = O.index, O < w ? (b.flags |= 2, w) : O) : (b.flags |= 2, w)) : (b.flags |= 1048576, w);
    }
    function m(b) {
      return n && b.alternate === null && (b.flags |= 2), b;
    }
    function E(b, w, O, G) {
      return w === null || w.tag !== 6 ? (w = Pd(O, b.mode, G), w.return = b, w) : (w = c(w, O), w.return = b, w);
    }
    function T(b, w, O, G) {
      var ye = O.type;
      return ye === Je ? Y(b, w, O.props.children, G, O.key) : w !== null && (w.elementType === ye || typeof ye == "object" && ye !== null && ye.$$typeof === Dt && pl(ye) === w.type) ? (G = c(w, O.props), G.ref = dl(b, w, O), G.return = b, G) : (G = Zc(O.type, O.key, O.props, null, b.mode, G), G.ref = dl(b, w, O), G.return = b, G);
    }
    function N(b, w, O, G) {
      return w === null || w.tag !== 4 || w.stateNode.containerInfo !== O.containerInfo || w.stateNode.implementation !== O.implementation ? (w = ef(O, b.mode, G), w.return = b, w) : (w = c(w, O.children || []), w.return = b, w);
    }
    function Y(b, w, O, G, ye) {
      return w === null || w.tag !== 7 ? (w = mu(O, b.mode, G, ye), w.return = b, w) : (w = c(w, O), w.return = b, w);
    }
    function I(b, w, O) {
      if (typeof w == "string" && w !== "" || typeof w == "number") return w = Pd("" + w, b.mode, O), w.return = b, w;
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case St:
            return O = Zc(w.type, w.key, w.props, null, b.mode, O), O.ref = dl(b, null, w), O.return = b, O;
          case Ce:
            return w = ef(w, b.mode, O), w.return = b, w;
          case Dt:
            var G = w._init;
            return I(b, G(w._payload), O);
        }
        if (wa(w) || ve(w)) return w = mu(w, b.mode, O, null), w.return = b, w;
        Gu(b, w);
      }
      return null;
    }
    function $(b, w, O, G) {
      var ye = w !== null ? w.key : null;
      if (typeof O == "string" && O !== "" || typeof O == "number") return ye !== null ? null : E(b, w, "" + O, G);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case St:
            return O.key === ye ? T(b, w, O, G) : null;
          case Ce:
            return O.key === ye ? N(b, w, O, G) : null;
          case Dt:
            return ye = O._init, $(
              b,
              w,
              ye(O._payload),
              G
            );
        }
        if (wa(O) || ve(O)) return ye !== null ? null : Y(b, w, O, G, null);
        Gu(b, O);
      }
      return null;
    }
    function re(b, w, O, G, ye) {
      if (typeof G == "string" && G !== "" || typeof G == "number") return b = b.get(O) || null, E(w, b, "" + G, ye);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case St:
            return b = b.get(G.key === null ? O : G.key) || null, T(w, b, G, ye);
          case Ce:
            return b = b.get(G.key === null ? O : G.key) || null, N(w, b, G, ye);
          case Dt:
            var ke = G._init;
            return re(b, w, O, ke(G._payload), ye);
        }
        if (wa(G) || ve(G)) return b = b.get(O) || null, Y(w, b, G, ye, null);
        Gu(w, G);
      }
      return null;
    }
    function fe(b, w, O, G) {
      for (var ye = null, ke = null, Oe = w, Se = w = 0, sn = null; Oe !== null && Se < O.length; Se++) {
        Oe.index > Se ? (sn = Oe, Oe = null) : sn = Oe.sibling;
        var vt = $(b, Oe, O[Se], G);
        if (vt === null) {
          Oe === null && (Oe = sn);
          break;
        }
        n && Oe && vt.alternate === null && r(b, Oe), w = d(vt, w, Se), ke === null ? ye = vt : ke.sibling = vt, ke = vt, Oe = sn;
      }
      if (Se === O.length) return l(b, Oe), Pt && tu(b, Se), ye;
      if (Oe === null) {
        for (; Se < O.length; Se++) Oe = I(b, O[Se], G), Oe !== null && (w = d(Oe, w, Se), ke === null ? ye = Oe : ke.sibling = Oe, ke = Oe);
        return Pt && tu(b, Se), ye;
      }
      for (Oe = o(b, Oe); Se < O.length; Se++) sn = re(Oe, b, Se, O[Se], G), sn !== null && (n && sn.alternate !== null && Oe.delete(sn.key === null ? Se : sn.key), w = d(sn, w, Se), ke === null ? ye = sn : ke.sibling = sn, ke = sn);
      return n && Oe.forEach(function(xl) {
        return r(b, xl);
      }), Pt && tu(b, Se), ye;
    }
    function he(b, w, O, G) {
      var ye = ve(O);
      if (typeof ye != "function") throw Error(A(150));
      if (O = ye.call(O), O == null) throw Error(A(151));
      for (var ke = ye = null, Oe = w, Se = w = 0, sn = null, vt = O.next(); Oe !== null && !vt.done; Se++, vt = O.next()) {
        Oe.index > Se ? (sn = Oe, Oe = null) : sn = Oe.sibling;
        var xl = $(b, Oe, vt.value, G);
        if (xl === null) {
          Oe === null && (Oe = sn);
          break;
        }
        n && Oe && xl.alternate === null && r(b, Oe), w = d(xl, w, Se), ke === null ? ye = xl : ke.sibling = xl, ke = xl, Oe = sn;
      }
      if (vt.done) return l(
        b,
        Oe
      ), Pt && tu(b, Se), ye;
      if (Oe === null) {
        for (; !vt.done; Se++, vt = O.next()) vt = I(b, vt.value, G), vt !== null && (w = d(vt, w, Se), ke === null ? ye = vt : ke.sibling = vt, ke = vt);
        return Pt && tu(b, Se), ye;
      }
      for (Oe = o(b, Oe); !vt.done; Se++, vt = O.next()) vt = re(Oe, b, Se, vt.value, G), vt !== null && (n && vt.alternate !== null && Oe.delete(vt.key === null ? Se : vt.key), w = d(vt, w, Se), ke === null ? ye = vt : ke.sibling = vt, ke = vt);
      return n && Oe.forEach(function(th) {
        return r(b, th);
      }), Pt && tu(b, Se), ye;
    }
    function dn(b, w, O, G) {
      if (typeof O == "object" && O !== null && O.type === Je && O.key === null && (O = O.props.children), typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case St:
            e: {
              for (var ye = O.key, ke = w; ke !== null; ) {
                if (ke.key === ye) {
                  if (ye = O.type, ye === Je) {
                    if (ke.tag === 7) {
                      l(b, ke.sibling), w = c(ke, O.props.children), w.return = b, b = w;
                      break e;
                    }
                  } else if (ke.elementType === ye || typeof ye == "object" && ye !== null && ye.$$typeof === Dt && pl(ye) === ke.type) {
                    l(b, ke.sibling), w = c(ke, O.props), w.ref = dl(b, ke, O), w.return = b, b = w;
                    break e;
                  }
                  l(b, ke);
                  break;
                } else r(b, ke);
                ke = ke.sibling;
              }
              O.type === Je ? (w = mu(O.props.children, b.mode, G, O.key), w.return = b, b = w) : (G = Zc(O.type, O.key, O.props, null, b.mode, G), G.ref = dl(b, w, O), G.return = b, b = G);
            }
            return m(b);
          case Ce:
            e: {
              for (ke = O.key; w !== null; ) {
                if (w.key === ke) if (w.tag === 4 && w.stateNode.containerInfo === O.containerInfo && w.stateNode.implementation === O.implementation) {
                  l(b, w.sibling), w = c(w, O.children || []), w.return = b, b = w;
                  break e;
                } else {
                  l(b, w);
                  break;
                }
                else r(b, w);
                w = w.sibling;
              }
              w = ef(O, b.mode, G), w.return = b, b = w;
            }
            return m(b);
          case Dt:
            return ke = O._init, dn(b, w, ke(O._payload), G);
        }
        if (wa(O)) return fe(b, w, O, G);
        if (ve(O)) return he(b, w, O, G);
        Gu(b, O);
      }
      return typeof O == "string" && O !== "" || typeof O == "number" ? (O = "" + O, w !== null && w.tag === 6 ? (l(b, w.sibling), w = c(w, O), w.return = b, b = w) : (l(b, w), w = Pd(O, b.mode, G), w.return = b, b = w), m(b)) : l(b, w);
    }
    return dn;
  }
  var vl = _v(!0), bv = _v(!1), Dc = zt(null), Mi = null, fn = null, Z = null;
  function va() {
    Z = fn = Mi = null;
  }
  function Pr(n) {
    var r = Dc.current;
    me(Dc), n._currentValue = r;
  }
  function sd(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function Xu(n, r) {
    Mi = n, Z = fn = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (tr = !0), n.firstContext = null);
  }
  function ha(n) {
    var r = n._currentValue;
    if (Z !== n) if (n = { context: n, memoizedValue: r, next: null }, fn === null) {
      if (Mi === null) throw Error(A(308));
      fn = n, Mi.dependencies = { lanes: 0, firstContext: n };
    } else fn = fn.next = n;
    return r;
  }
  var nu = null;
  function cd(n) {
    nu === null ? nu = [n] : nu.push(n);
  }
  function Tn(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, cd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Ni(n, o);
  }
  function Ni(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var hl = !1;
  function fd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function dd(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function $r(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Yr(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, pt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Ni(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, cd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Ni(n, l);
  }
  function kc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Wo(n, l);
    }
  }
  function Dv(n, r) {
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
  function Oc(n, r, l, o) {
    var c = n.updateQueue;
    hl = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var T = E, N = T.next;
      T.next = null, m === null ? d = N : m.next = N, m = T;
      var Y = n.alternate;
      Y !== null && (Y = Y.updateQueue, E = Y.lastBaseUpdate, E !== m && (E === null ? Y.firstBaseUpdate = N : E.next = N, Y.lastBaseUpdate = T));
    }
    if (d !== null) {
      var I = c.baseState;
      m = 0, Y = N = T = null, E = d;
      do {
        var $ = E.lane, re = E.eventTime;
        if ((o & $) === $) {
          Y !== null && (Y = Y.next = {
            eventTime: re,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var fe = n, he = E;
            switch ($ = r, re = l, he.tag) {
              case 1:
                if (fe = he.payload, typeof fe == "function") {
                  I = fe.call(re, I, $);
                  break e;
                }
                I = fe;
                break e;
              case 3:
                fe.flags = fe.flags & -65537 | 128;
              case 0:
                if (fe = he.payload, $ = typeof fe == "function" ? fe.call(re, I, $) : fe, $ == null) break e;
                I = ne({}, I, $);
                break e;
              case 2:
                hl = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, $ = c.effects, $ === null ? c.effects = [E] : $.push(E));
        } else re = { eventTime: re, lane: $, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, Y === null ? (N = Y = re, T = I) : Y = Y.next = re, m |= $;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          $ = E, E = $.next, $.next = null, c.lastBaseUpdate = $, c.shared.pending = null;
        }
      } while (!0);
      if (Y === null && (T = I), c.baseState = T, c.firstBaseUpdate = N, c.lastBaseUpdate = Y, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      su |= m, n.lanes = m, n.memoizedState = I;
    }
  }
  function kv(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(A(191, c));
        c.call(o);
      }
    }
  }
  var ms = {}, ei = zt(ms), qu = zt(ms), Ku = zt(ms);
  function ru(n) {
    if (n === ms) throw Error(A(174));
    return n;
  }
  function pd(n, r) {
    switch (mt(Ku, r), mt(qu, n), mt(ei, ms), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : ra(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = ra(r, n);
    }
    me(ei), mt(ei, r);
  }
  function Zu() {
    me(ei), me(qu), me(Ku);
  }
  function Ov(n) {
    ru(Ku.current);
    var r = ru(ei.current), l = ra(r, n.type);
    r !== l && (mt(qu, n), mt(ei, l));
  }
  function vd(n) {
    qu.current === n && (me(ei), me(qu));
  }
  var Jt = zt(0);
  function ys(n) {
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
  var hd = [];
  function Lc() {
    for (var n = 0; n < hd.length; n++) hd[n]._workInProgressVersionPrimary = null;
    hd.length = 0;
  }
  var Mc = Ne.ReactCurrentDispatcher, md = Ne.ReactCurrentBatchConfig, zi = 0, K = null, we = null, Ae = null, $t = !1, Dr = !1, Ju = 0, Zm = 0;
  function Xn() {
    throw Error(A(321));
  }
  function yd(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!Ma(n[l], r[l])) return !1;
    return !0;
  }
  function gs(n, r, l, o, c, d) {
    if (zi = d, K = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Mc.current = n === null || n.memoizedState === null ? Ir : Jm, n = l(o, c), Dr) {
      d = 0;
      do {
        if (Dr = !1, Ju = 0, 25 <= d) throw Error(A(301));
        d += 1, Ae = we = null, r.updateQueue = null, Mc.current = At, n = l(o, c);
      } while (Dr);
    }
    if (Mc.current = ni, r = we !== null && we.next !== null, zi = 0, Ae = we = K = null, $t = !1, r) throw Error(A(300));
    return n;
  }
  function P() {
    var n = Ju !== 0;
    return Ju = 0, n;
  }
  function Ut() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ae === null ? K.memoizedState = Ae = n : Ae = Ae.next = n, Ae;
  }
  function ge() {
    if (we === null) {
      var n = K.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = we.next;
    var r = Ae === null ? K.memoizedState : Ae.next;
    if (r !== null) Ae = r, we = n;
    else {
      if (n === null) throw Error(A(310));
      we = n, n = { memoizedState: we.memoizedState, baseState: we.baseState, baseQueue: we.baseQueue, queue: we.queue, next: null }, Ae === null ? K.memoizedState = Ae = n : Ae = Ae.next = n;
    }
    return Ae;
  }
  function ti(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Aa(n) {
    var r = ge(), l = r.queue;
    if (l === null) throw Error(A(311));
    l.lastRenderedReducer = n;
    var o = we, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var E = m = null, T = null, N = d;
      do {
        var Y = N.lane;
        if ((zi & Y) === Y) T !== null && (T = T.next = { lane: 0, action: N.action, hasEagerState: N.hasEagerState, eagerState: N.eagerState, next: null }), o = N.hasEagerState ? N.eagerState : n(o, N.action);
        else {
          var I = {
            lane: Y,
            action: N.action,
            hasEagerState: N.hasEagerState,
            eagerState: N.eagerState,
            next: null
          };
          T === null ? (E = T = I, m = o) : T = T.next = I, K.lanes |= Y, su |= Y;
        }
        N = N.next;
      } while (N !== null && N !== d);
      T === null ? m = o : T.next = E, Ma(o, r.memoizedState) || (tr = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = T, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, K.lanes |= d, su |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Ui(n) {
    var r = ge(), l = r.queue;
    if (l === null) throw Error(A(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      Ma(d, r.memoizedState) || (tr = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function Fa() {
  }
  function eo(n, r) {
    var l = K, o = ge(), c = r(), d = !Ma(o.memoizedState, c);
    if (d && (o.memoizedState = c, tr = !0), o = o.queue, Ss(Nc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Ae !== null && Ae.memoizedState.tag & 1) {
      if (l.flags |= 2048, iu(9, to.bind(null, l, o, c, r), void 0, null), ln === null) throw Error(A(349));
      zi & 30 || au(l, r, c);
    }
    return c;
  }
  function au(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = K.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, K.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function to(n, r, l, o) {
    r.value = l, r.getSnapshot = o, zc(r) && Uc(n);
  }
  function Nc(n, r, l) {
    return l(function() {
      zc(r) && Uc(n);
    });
  }
  function zc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !Ma(n, l);
    } catch {
      return !0;
    }
  }
  function Uc(n) {
    var r = Ni(n, 1);
    r !== null && ma(r, n, 1, -1);
  }
  function Ac(n) {
    var r = Ut();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ti, lastRenderedState: n }, r.queue = n, n = n.dispatch = Lv.bind(null, K, n), [r.memoizedState, n];
  }
  function iu(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = K.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, K.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Fc() {
    return ge().memoizedState;
  }
  function no(n, r, l, o) {
    var c = Ut();
    K.flags |= n, c.memoizedState = iu(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function ro(n, r, l, o) {
    var c = ge();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (we !== null) {
      var m = we.memoizedState;
      if (d = m.destroy, o !== null && yd(o, m.deps)) {
        c.memoizedState = iu(r, l, d, o);
        return;
      }
    }
    K.flags |= n, c.memoizedState = iu(1 | r, l, d, o);
  }
  function Hc(n, r) {
    return no(8390656, 8, n, r);
  }
  function Ss(n, r) {
    return ro(2048, 8, n, r);
  }
  function jc(n, r) {
    return ro(4, 2, n, r);
  }
  function Vc(n, r) {
    return ro(4, 4, n, r);
  }
  function Bc(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Pc(n, r, l) {
    return l = l != null ? l.concat([n]) : null, ro(4, 4, Bc.bind(null, r, n), l);
  }
  function Es() {
  }
  function Cs(n, r) {
    var l = ge();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && yd(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function lu(n, r) {
    var l = ge();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && yd(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function $c(n, r, l) {
    return zi & 21 ? (Ma(l, r) || (l = $l(), K.lanes |= l, su |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, tr = !0), n.memoizedState = l);
  }
  function gd(n, r) {
    var l = et;
    et = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = md.transition;
    md.transition = {};
    try {
      n(!1), r();
    } finally {
      et = l, md.transition = o;
    }
  }
  function Yc() {
    return ge().memoizedState;
  }
  function Sd(n, r, l) {
    var o = ja(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, ao(n)) Ed(r, l);
    else if (l = Tn(n, r, l, o), l !== null) {
      var c = On();
      ma(l, n, o, c), io(l, r, o);
    }
  }
  function Lv(n, r, l) {
    var o = ja(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (ao(n)) Ed(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, E = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = E, Ma(E, m)) {
          var T = r.interleaved;
          T === null ? (c.next = c, cd(r)) : (c.next = T.next, T.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = Tn(n, r, c, o), l !== null && (c = On(), ma(l, n, o, c), io(l, r, o));
    }
  }
  function ao(n) {
    var r = n.alternate;
    return n === K || r !== null && r === K;
  }
  function Ed(n, r) {
    Dr = $t = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function io(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Wo(n, l);
    }
  }
  var ni = { readContext: ha, useCallback: Xn, useContext: Xn, useEffect: Xn, useImperativeHandle: Xn, useInsertionEffect: Xn, useLayoutEffect: Xn, useMemo: Xn, useReducer: Xn, useRef: Xn, useState: Xn, useDebugValue: Xn, useDeferredValue: Xn, useTransition: Xn, useMutableSource: Xn, useSyncExternalStore: Xn, useId: Xn, unstable_isNewReconciler: !1 }, Ir = { readContext: ha, useCallback: function(n, r) {
    return Ut().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: ha, useEffect: Hc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, no(
      4194308,
      4,
      Bc.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return no(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return no(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Ut();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Ut();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Sd.bind(null, K, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Ut();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Ac, useDebugValue: Es, useDeferredValue: function(n) {
    return Ut().memoizedState = n;
  }, useTransition: function() {
    var n = Ac(!1), r = n[0];
    return n = gd.bind(null, n[1]), Ut().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = K, c = Ut();
    if (Pt) {
      if (l === void 0) throw Error(A(407));
      l = l();
    } else {
      if (l = r(), ln === null) throw Error(A(349));
      zi & 30 || au(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Hc(Nc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, iu(9, to.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Ut(), r = ln.identifierPrefix;
    if (Pt) {
      var l = Hn, o = br;
      l = (o & ~(1 << 32 - Jn(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Ju++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = Zm++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Jm = {
    readContext: ha,
    useCallback: Cs,
    useContext: ha,
    useEffect: Ss,
    useImperativeHandle: Pc,
    useInsertionEffect: jc,
    useLayoutEffect: Vc,
    useMemo: lu,
    useReducer: Aa,
    useRef: Fc,
    useState: function() {
      return Aa(ti);
    },
    useDebugValue: Es,
    useDeferredValue: function(n) {
      var r = ge();
      return $c(r, we.memoizedState, n);
    },
    useTransition: function() {
      var n = Aa(ti)[0], r = ge().memoizedState;
      return [n, r];
    },
    useMutableSource: Fa,
    useSyncExternalStore: eo,
    useId: Yc,
    unstable_isNewReconciler: !1
  }, At = { readContext: ha, useCallback: Cs, useContext: ha, useEffect: Ss, useImperativeHandle: Pc, useInsertionEffect: jc, useLayoutEffect: Vc, useMemo: lu, useReducer: Ui, useRef: Fc, useState: function() {
    return Ui(ti);
  }, useDebugValue: Es, useDeferredValue: function(n) {
    var r = ge();
    return we === null ? r.memoizedState = n : $c(r, we.memoizedState, n);
  }, useTransition: function() {
    var n = Ui(ti)[0], r = ge().memoizedState;
    return [n, r];
  }, useMutableSource: Fa, useSyncExternalStore: eo, useId: Yc, unstable_isNewReconciler: !1 };
  function kr(n, r) {
    if (n && n.defaultProps) {
      r = ne({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function lo(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : ne({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var ml = { isMounted: function(n) {
    return (n = n._reactInternals) ? Ot(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = On(), c = ja(n), d = $r(o, c);
    d.payload = r, l != null && (d.callback = l), r = Yr(n, d, c), r !== null && (ma(r, n, c, o), kc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = On(), c = ja(n), d = $r(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Yr(n, d, c), r !== null && (ma(r, n, c, o), kc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = On(), o = ja(n), c = $r(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Yr(n, c, o), r !== null && (ma(r, n, o, l), kc(r, n, o));
  } };
  function Ts(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !$u(l, o) || !$u(c, d) : !0;
  }
  function Mv(n, r, l) {
    var o = !1, c = ca, d = r.contextType;
    return typeof d == "object" && d !== null ? d = ha(d) : (c = hn(r) ? er : bn.current, o = r.contextTypes, d = (o = o != null) ? jr(n, c) : ca), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = ml, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Nv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && ml.enqueueReplaceState(r, r.state, null);
  }
  function Cd(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, fd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = ha(d) : (d = hn(r) ? er : bn.current, c.context = jr(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (lo(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && ml.enqueueReplaceState(c, c.state, null), Oc(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function uo(n, r) {
    try {
      var l = "", o = r;
      do
        l += Ye(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Rs(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Td(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var Rd = typeof WeakMap == "function" ? WeakMap : Map;
  function wd(n, r, l) {
    l = $r(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      qc || (qc = !0, Fd = o), Td(n, r);
    }, l;
  }
  function zv(n, r, l) {
    l = $r(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Td(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Td(n, r), typeof o != "function" && (El === null ? El = /* @__PURE__ */ new Set([this]) : El.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Uv(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new Rd();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = oy.bind(null, n, r, l), r.then(n, n));
  }
  function ws(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Av(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = $r(-1, 1), r.tag = 2, Yr(l, r, 1))), l.lanes |= 1), n);
  }
  var Fv = Ne.ReactCurrentOwner, tr = !1;
  function nr(n, r, l, o) {
    r.child = n === null ? bv(r, null, l, o) : vl(r, n.child, l, o);
  }
  function yl(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return Xu(r, c), o = gs(n, r, l, o, d, c), l = P(), n !== null && !tr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, ri(n, r, c)) : (Pt && l && wc(r), r.flags |= 1, nr(n, r, o, c), r.child);
  }
  function oo(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Bd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, gl(n, r, d, o, c)) : (n = Zc(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : $u, l(m, o) && n.ref === r.ref) return ri(n, r, c);
    }
    return r.flags |= 1, n = wl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function gl(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if ($u(d, o) && n.ref === r.ref) if (tr = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (tr = !0);
      else return r.lanes = n.lanes, ri(n, r, c);
    }
    return Sl(n, r, l, o, c);
  }
  function Ic(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, mt(ou, lr), lr |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, mt(ou, lr), lr |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, mt(ou, lr), lr |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, mt(ou, lr), lr |= o;
    return nr(n, r, c, l), r.child;
  }
  function Or(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Sl(n, r, l, o, c) {
    var d = hn(l) ? er : bn.current;
    return d = jr(r, d), Xu(r, c), l = gs(n, r, l, o, d, c), o = P(), n !== null && !tr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, ri(n, r, c)) : (Pt && o && wc(r), r.flags |= 1, nr(n, r, l, c), r.child);
  }
  function $e(n, r, l, o, c) {
    if (hn(l)) {
      var d = !0;
      Jl(r);
    } else d = !1;
    if (Xu(r, c), r.stateNode === null) bs(n, r), Mv(r, l, o), Cd(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var T = m.context, N = l.contextType;
      typeof N == "object" && N !== null ? N = ha(N) : (N = hn(l) ? er : bn.current, N = jr(r, N));
      var Y = l.getDerivedStateFromProps, I = typeof Y == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      I || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || T !== N) && Nv(r, m, o, N), hl = !1;
      var $ = r.memoizedState;
      m.state = $, Oc(r, o, m, c), T = r.memoizedState, E !== o || $ !== T || Fe.current || hl ? (typeof Y == "function" && (lo(r, l, Y, o), T = r.memoizedState), (E = hl || Ts(r, l, E, o, $, T, N)) ? (I || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), m.props = o, m.state = T, m.context = N, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, dd(n, r), E = r.memoizedProps, N = r.type === r.elementType ? E : kr(r.type, E), m.props = N, I = r.pendingProps, $ = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = ha(T) : (T = hn(l) ? er : bn.current, T = jr(r, T));
      var re = l.getDerivedStateFromProps;
      (Y = typeof re == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== I || $ !== T) && Nv(r, m, o, T), hl = !1, $ = r.memoizedState, m.state = $, Oc(r, o, m, c);
      var fe = r.memoizedState;
      E !== I || $ !== fe || Fe.current || hl ? (typeof re == "function" && (lo(r, l, re, o), fe = r.memoizedState), (N = hl || Ts(r, l, N, o, $, fe, T) || !1) ? (Y || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, fe, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, fe, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = fe), m.props = o, m.state = fe, m.context = T, o = N) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && $ === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return so(n, r, l, o, d, c);
  }
  function so(n, r, l, o, c, d) {
    Or(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && Rv(r, l, !1), ri(n, r, d);
    o = r.stateNode, Fv.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = vl(r, n.child, null, d), r.child = vl(r, null, E, d)) : nr(n, r, E, d), r.memoizedState = o.state, c && Rv(r, l, !0), r.child;
  }
  function xd(n) {
    var r = n.stateNode;
    r.pendingContext ? Za(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Za(n, r.context, !1), pd(n, r.containerInfo);
  }
  function ey(n, r, l, o, c) {
    return Wu(), mn(c), r.flags |= 256, nr(n, r, l, o), r.child;
  }
  var _d = { dehydrated: null, treeContext: null, retryLane: 0 };
  function xs(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function co(n, r, l) {
    var o = r.pendingProps, c = Jt.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), mt(Jt, c & 1), n === null)
      return _c(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = Jc(m, o, 0, null), n = mu(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = xs(l), r.memoizedState = _d, n) : bd(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return ty(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var T = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = wl(c, T), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = wl(E, d) : (d = mu(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? xs(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = _d, o;
    }
    return d = n.child, n = d.sibling, o = wl(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function bd(n, r) {
    return r = Jc({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function _s(n, r, l, o) {
    return o !== null && mn(o), vl(r, n.child, null, l), n = bd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function ty(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Rs(Error(A(422))), _s(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Jc({ mode: "visible", children: o.children }, c, 0, null), d = mu(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && vl(r, n.child, null, m), r.child.memoizedState = xs(m), r.memoizedState = _d, d);
    if (!(r.mode & 1)) return _s(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var E = o.dgst;
      return o = E, d = Error(A(419)), o = Rs(d, o, void 0), _s(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, tr || E) {
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
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Ni(n, c), ma(o, n, c, -1));
      }
      return jd(), o = Rs(Error(A(421))), _s(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = sy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Br = Hr(c.nextSibling), Vr = r, Pt = !0, pa = null, n !== null && (xr[_r++] = br, xr[_r++] = Hn, xr[_r++] = Ua, br = n.id, Hn = n.overflow, Ua = r), r = bd(r, o.children), r.flags |= 4096, r);
  }
  function Qc(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), sd(n.return, r, l);
  }
  function Dd(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function kd(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (nr(n, r, o.children, l), o = Jt.current, o & 2) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Qc(n, l, r);
        else if (n.tag === 19) Qc(n, l, r);
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
    if (mt(Jt, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && ys(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Dd(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && ys(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        Dd(r, !0, l, null, d);
        break;
      case "together":
        Dd(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function bs(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function ri(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), su |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(A(153));
    if (r.child !== null) {
      for (n = r.child, l = wl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = wl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Qr(n, r, l) {
    switch (r.tag) {
      case 3:
        xd(r), Wu();
        break;
      case 5:
        Ov(r);
        break;
      case 1:
        hn(r.type) && Jl(r);
        break;
      case 4:
        pd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        mt(Dc, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (mt(Jt, Jt.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? co(n, r, l) : (mt(Jt, Jt.current & 1), n = ri(n, r, l), n !== null ? n.sibling : null);
        mt(Jt, Jt.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return kd(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), mt(Jt, Jt.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Ic(n, r, l);
    }
    return ri(n, r, l);
  }
  var ai, Ha, Ds, fo;
  ai = function(n, r) {
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
  }, Ha = function() {
  }, Ds = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, ru(ei.current);
      var d = null;
      switch (l) {
        case "input":
          c = vn(n, c), o = vn(n, o), d = [];
          break;
        case "select":
          c = ne({}, c, { value: void 0 }), o = ne({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = xa(n, c), o = xa(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = Cc);
      }
      Ct(l, o);
      var m;
      l = null;
      for (N in c) if (!o.hasOwnProperty(N) && c.hasOwnProperty(N) && c[N] != null) if (N === "style") {
        var E = c[N];
        for (m in E) E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else N !== "dangerouslySetInnerHTML" && N !== "children" && N !== "suppressContentEditableWarning" && N !== "suppressHydrationWarning" && N !== "autoFocus" && (bt.hasOwnProperty(N) ? d || (d = []) : (d = d || []).push(N, null));
      for (N in o) {
        var T = o[N];
        if (E = c != null ? c[N] : void 0, o.hasOwnProperty(N) && T !== E && (T != null || E != null)) if (N === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in T) T.hasOwnProperty(m) && E[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
        } else l || (d || (d = []), d.push(
          N,
          l
        )), l = T;
        else N === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (d = d || []).push(N, T)) : N === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(N, "" + T) : N !== "suppressContentEditableWarning" && N !== "suppressHydrationWarning" && (bt.hasOwnProperty(N) ? (T != null && N === "onScroll" && Nt("scroll", n), d || E === T || (d = [])) : (d = d || []).push(N, T));
      }
      l && (d = d || []).push("style", l);
      var N = d;
      (r.updateQueue = N) && (r.flags |= 4);
    }
  }, fo = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function rr(n, r) {
    if (!Pt) switch (n.tailMode) {
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
  function dt(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function ny(n, r, l) {
    var o = r.pendingProps;
    switch (xc(r), r.tag) {
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
        return dt(r), null;
      case 1:
        return hn(r.type) && wr(), dt(r), null;
      case 3:
        return o = r.stateNode, Zu(), me(Fe), me(bn), Lc(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (bc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, pa !== null && (du(pa), pa = null))), Ha(n, r), dt(r), null;
      case 5:
        vd(r);
        var c = ru(Ku.current);
        if (l = r.type, n !== null && r.stateNode != null) Ds(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(A(166));
            return dt(r), null;
          }
          if (n = ru(ei.current), bc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[sa] = r, o[hs] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Nt("cancel", o), Nt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Nt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < bi.length; c++) Nt(bi[c], o);
                break;
              case "source":
                Nt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Nt(
                  "error",
                  o
                ), Nt("load", o);
                break;
              case "details":
                Nt("toggle", o);
                break;
              case "input":
                qn(o, d), Nt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Nt("invalid", o);
                break;
              case "textarea":
                hi(o, d), Nt("invalid", o);
            }
            Ct(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var E = d[m];
              m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && fs(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && fs(
                o.textContent,
                E,
                n
              ), c = ["children", "" + E]) : bt.hasOwnProperty(m) && E != null && m === "onScroll" && Nt("scroll", o);
            }
            switch (l) {
              case "input":
                ea(o), zn(o, d, !0);
                break;
              case "textarea":
                ea(o), _a(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = Cc);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = gr(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[sa] = r, n[hs] = o, ai(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = Cn(l, o), l) {
                case "dialog":
                  Nt("cancel", n), Nt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Nt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < bi.length; c++) Nt(bi[c], n);
                  c = o;
                  break;
                case "source":
                  Nt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Nt(
                    "error",
                    n
                  ), Nt("load", n), c = o;
                  break;
                case "details":
                  Nt("toggle", n), c = o;
                  break;
                case "input":
                  qn(n, o), c = vn(n, o), Nt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = ne({}, o, { value: void 0 }), Nt("invalid", n);
                  break;
                case "textarea":
                  hi(n, o), c = xa(n, o), Nt("invalid", n);
                  break;
                default:
                  c = o;
              }
              Ct(l, c), E = c;
              for (d in E) if (E.hasOwnProperty(d)) {
                var T = E[d];
                d === "style" ? qe(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && ba(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && $a(n, T) : typeof T == "number" && $a(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (bt.hasOwnProperty(d) ? T != null && d === "onScroll" && Nt("scroll", n) : T != null && It(n, d, T, m));
              }
              switch (l) {
                case "input":
                  ea(n), zn(n, o, !1);
                  break;
                case "textarea":
                  ea(n), _a(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + it(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Un(n, !!o.multiple, d, !1) : o.defaultValue != null && Un(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = Cc);
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
        return dt(r), null;
      case 6:
        if (n && r.stateNode != null) fo(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(A(166));
          if (l = ru(Ku.current), ru(ei.current), bc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[sa] = r, (d = o.nodeValue !== l) && (n = Vr, n !== null)) switch (n.tag) {
              case 3:
                fs(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && fs(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[sa] = r, r.stateNode = o;
        }
        return dt(r), null;
      case 13:
        if (me(Jt), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (Pt && Br !== null && r.mode & 1 && !(r.flags & 128)) xv(), Wu(), r.flags |= 98560, d = !1;
          else if (d = bc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(A(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(A(317));
              d[sa] = r;
            } else Wu(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            dt(r), d = !1;
          } else pa !== null && (du(pa), pa = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || Jt.current & 1 ? Rn === 0 && (Rn = 3) : jd())), r.updateQueue !== null && (r.flags |= 4), dt(r), null);
      case 4:
        return Zu(), Ha(n, r), n === null && qa(r.stateNode.containerInfo), dt(r), null;
      case 10:
        return Pr(r.type._context), dt(r), null;
      case 17:
        return hn(r.type) && wr(), dt(r), null;
      case 19:
        if (me(Jt), d = r.memoizedState, d === null) return dt(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) rr(d, !1);
        else {
          if (Rn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = ys(n), m !== null) {
              for (r.flags |= 128, rr(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return mt(Jt, Jt.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && qt() > cu && (r.flags |= 128, o = !0, rr(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = ys(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), rr(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !Pt) return dt(r), null;
          } else 2 * qt() - d.renderingStartTime > cu && l !== 1073741824 && (r.flags |= 128, o = !0, rr(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = qt(), r.sibling = null, l = Jt.current, mt(Jt, o ? l & 1 | 2 : l & 1), r) : (dt(r), null);
      case 22:
      case 23:
        return mo(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? lr & 1073741824 && (dt(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : dt(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(A(156, r.tag));
  }
  function ry(n, r) {
    switch (xc(r), r.tag) {
      case 1:
        return hn(r.type) && wr(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Zu(), me(Fe), me(bn), Lc(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return vd(r), null;
      case 13:
        if (me(Jt), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(A(340));
          Wu();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return me(Jt), null;
      case 4:
        return Zu(), null;
      case 10:
        return Pr(r.type._context), null;
      case 22:
      case 23:
        return mo(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Wc = !1, Dn = !1, Hv = typeof WeakSet == "function" ? WeakSet : Set, ue = null;
  function uu(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      on(n, r, o);
    }
    else l.current = null;
  }
  function Od(n, r, l) {
    try {
      l();
    } catch (o) {
      on(n, r, o);
    }
  }
  var jv = !1;
  function Ld(n, r) {
    if (Jf = Gl, n = fv(), is(n)) {
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
          var m = 0, E = -1, T = -1, N = 0, Y = 0, I = n, $ = null;
          t: for (; ; ) {
            for (var re; I !== l || c !== 0 && I.nodeType !== 3 || (E = m + c), I !== d || o !== 0 && I.nodeType !== 3 || (T = m + o), I.nodeType === 3 && (m += I.nodeValue.length), (re = I.firstChild) !== null; )
              $ = I, I = re;
            for (; ; ) {
              if (I === n) break t;
              if ($ === l && ++N === c && (E = m), $ === d && ++Y === o && (T = m), (re = I.nextSibling) !== null) break;
              I = $, $ = I.parentNode;
            }
            I = re;
          }
          l = E === -1 || T === -1 ? null : { start: E, end: T };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (ed = { focusedElem: n, selectionRange: l }, Gl = !1, ue = r; ue !== null; ) if (r = ue, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, ue = n;
    else for (; ue !== null; ) {
      r = ue;
      try {
        var fe = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (fe !== null) {
              var he = fe.memoizedProps, dn = fe.memoizedState, b = r.stateNode, w = b.getSnapshotBeforeUpdate(r.elementType === r.type ? he : kr(r.type, he), dn);
              b.__reactInternalSnapshotBeforeUpdate = w;
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
        on(r, r.return, G);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, ue = n;
        break;
      }
      ue = r.return;
    }
    return fe = jv, jv = !1, fe;
  }
  function ks(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && Od(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Os(n, r) {
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
  function Md(n) {
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
  function Nd(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Nd(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[sa], delete r[hs], delete r[ad], delete r[Xm], delete r[qm])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Vv(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function zd(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Vv(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Ud(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Cc));
    else if (o !== 4 && (n = n.child, n !== null)) for (Ud(n, r, l), n = n.sibling; n !== null; ) Ud(n, r, l), n = n.sibling;
  }
  function Ls(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (Ls(n, r, l), n = n.sibling; n !== null; ) Ls(n, r, l), n = n.sibling;
  }
  var yn = null, kn = !1;
  function ar(n, r, l) {
    for (l = l.child; l !== null; ) Ai(n, r, l), l = l.sibling;
  }
  function Ai(n, r, l) {
    if (Er && typeof Er.onCommitFiberUnmount == "function") try {
      Er.onCommitFiberUnmount(Zi, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        Dn || uu(l, r);
      case 6:
        var o = yn, c = kn;
        yn = null, ar(n, r, l), yn = o, kn = c, yn !== null && (kn ? (n = yn, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : yn.removeChild(l.stateNode));
        break;
      case 18:
        yn !== null && (kn ? (n = yn, l = l.stateNode, n.nodeType === 8 ? rd(n.parentNode, l) : n.nodeType === 1 && rd(n, l), oa(n)) : rd(yn, l.stateNode));
        break;
      case 4:
        o = yn, c = kn, yn = l.stateNode.containerInfo, kn = !0, ar(n, r, l), yn = o, kn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Dn && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && Od(l, r, m), c = c.next;
          } while (c !== o);
        }
        ar(n, r, l);
        break;
      case 1:
        if (!Dn && (uu(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (E) {
          on(l, r, E);
        }
        ar(n, r, l);
        break;
      case 21:
        ar(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (Dn = (o = Dn) || l.memoizedState !== null, ar(n, r, l), Dn = o) : ar(n, r, l);
        break;
      default:
        ar(n, r, l);
    }
  }
  function po(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Hv()), r.forEach(function(o) {
        var c = Vd.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function ir(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, m = r, E = m;
        e: for (; E !== null; ) {
          switch (E.tag) {
            case 5:
              yn = E.stateNode, kn = !1;
              break e;
            case 3:
              yn = E.stateNode.containerInfo, kn = !0;
              break e;
            case 4:
              yn = E.stateNode.containerInfo, kn = !0;
              break e;
          }
          E = E.return;
        }
        if (yn === null) throw Error(A(160));
        Ai(d, m, c), yn = null, kn = !1;
        var T = c.alternate;
        T !== null && (T.return = null), c.return = null;
      } catch (N) {
        on(c, r, N);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) Fi(r, n), r = r.sibling;
  }
  function Fi(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ir(r, n), ii(n), o & 4) {
          try {
            ks(3, n, n.return), Os(3, n);
          } catch (he) {
            on(n, n.return, he);
          }
          try {
            ks(5, n, n.return);
          } catch (he) {
            on(n, n.return, he);
          }
        }
        break;
      case 1:
        ir(r, n), ii(n), o & 512 && l !== null && uu(l, l.return);
        break;
      case 5:
        if (ir(r, n), ii(n), o & 512 && l !== null && uu(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            $a(c, "");
          } catch (he) {
            on(n, n.return, he);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null) try {
            E === "input" && d.type === "radio" && d.name != null && mr(c, d), Cn(E, m);
            var N = Cn(E, d);
            for (m = 0; m < T.length; m += 2) {
              var Y = T[m], I = T[m + 1];
              Y === "style" ? qe(c, I) : Y === "dangerouslySetInnerHTML" ? ba(c, I) : Y === "children" ? $a(c, I) : It(c, Y, I, N);
            }
            switch (E) {
              case "input":
                Kn(c, d);
                break;
              case "textarea":
                yr(c, d);
                break;
              case "select":
                var $ = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var re = d.value;
                re != null ? Un(c, !!d.multiple, re, !1) : $ !== !!d.multiple && (d.defaultValue != null ? Un(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Un(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[hs] = d;
          } catch (he) {
            on(n, n.return, he);
          }
        }
        break;
      case 6:
        if (ir(r, n), ii(n), o & 4) {
          if (n.stateNode === null) throw Error(A(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (he) {
            on(n, n.return, he);
          }
        }
        break;
      case 3:
        if (ir(r, n), ii(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          oa(r.containerInfo);
        } catch (he) {
          on(n, n.return, he);
        }
        break;
      case 4:
        ir(r, n), ii(n);
        break;
      case 13:
        ir(r, n), ii(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Us = qt())), o & 4 && po(n);
        break;
      case 22:
        if (Y = l !== null && l.memoizedState !== null, n.mode & 1 ? (Dn = (N = Dn) || Y, ir(r, n), Dn = N) : ir(r, n), ii(n), o & 8192) {
          if (N = n.memoizedState !== null, (n.stateNode.isHidden = N) && !Y && n.mode & 1) for (ue = n, Y = n.child; Y !== null; ) {
            for (I = ue = Y; ue !== null; ) {
              switch ($ = ue, re = $.child, $.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ks(4, $, $.return);
                  break;
                case 1:
                  uu($, $.return);
                  var fe = $.stateNode;
                  if (typeof fe.componentWillUnmount == "function") {
                    o = $, l = $.return;
                    try {
                      r = o, fe.props = r.memoizedProps, fe.state = r.memoizedState, fe.componentWillUnmount();
                    } catch (he) {
                      on(o, l, he);
                    }
                  }
                  break;
                case 5:
                  uu($, $.return);
                  break;
                case 22:
                  if ($.memoizedState !== null) {
                    vo(I);
                    continue;
                  }
              }
              re !== null ? (re.return = $, ue = re) : vo(I);
            }
            Y = Y.sibling;
          }
          e: for (Y = null, I = n; ; ) {
            if (I.tag === 5) {
              if (Y === null) {
                Y = I;
                try {
                  c = I.stateNode, N ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = I.stateNode, T = I.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = Re("display", m));
                } catch (he) {
                  on(n, n.return, he);
                }
              }
            } else if (I.tag === 6) {
              if (Y === null) try {
                I.stateNode.nodeValue = N ? "" : I.memoizedProps;
              } catch (he) {
                on(n, n.return, he);
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
        ir(r, n), ii(n), o & 4 && po(n);
        break;
      case 21:
        break;
      default:
        ir(
          r,
          n
        ), ii(n);
    }
  }
  function ii(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Vv(l)) {
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
            var d = zd(n);
            Ls(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = zd(n);
            Ud(n, E, m);
            break;
          default:
            throw Error(A(161));
        }
      } catch (T) {
        on(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function ay(n, r, l) {
    ue = n, Bv(n);
  }
  function Bv(n, r, l) {
    for (var o = (n.mode & 1) !== 0; ue !== null; ) {
      var c = ue, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || Wc;
        if (!m) {
          var E = c.alternate, T = E !== null && E.memoizedState !== null || Dn;
          E = Wc;
          var N = Dn;
          if (Wc = m, (Dn = T) && !N) for (ue = c; ue !== null; ) m = ue, T = m.child, m.tag === 22 && m.memoizedState !== null ? Pv(c) : T !== null ? (T.return = m, ue = T) : Pv(c);
          for (; d !== null; ) ue = d, Bv(d), d = d.sibling;
          ue = c, Wc = E, Dn = N;
        }
        Ad(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, ue = d) : Ad(n);
    }
  }
  function Ad(n) {
    for (; ue !== null; ) {
      var r = ue;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              Dn || Os(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !Dn) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : kr(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && kv(r, d, o);
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
                kv(r, m, l);
              }
              break;
            case 5:
              var E = r.stateNode;
              if (l === null && r.flags & 4) {
                l = E;
                var T = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    T.autoFocus && l.focus();
                    break;
                  case "img":
                    T.src && (l.src = T.src);
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
                var N = r.alternate;
                if (N !== null) {
                  var Y = N.memoizedState;
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
          Dn || r.flags & 512 && Md(r);
        } catch ($) {
          on(r, r.return, $);
        }
      }
      if (r === n) {
        ue = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, ue = l;
        break;
      }
      ue = r.return;
    }
  }
  function vo(n) {
    for (; ue !== null; ) {
      var r = ue;
      if (r === n) {
        ue = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, ue = l;
        break;
      }
      ue = r.return;
    }
  }
  function Pv(n) {
    for (; ue !== null; ) {
      var r = ue;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Os(4, r);
            } catch (T) {
              on(r, l, T);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (T) {
                on(r, c, T);
              }
            }
            var d = r.return;
            try {
              Md(r);
            } catch (T) {
              on(r, d, T);
            }
            break;
          case 5:
            var m = r.return;
            try {
              Md(r);
            } catch (T) {
              on(r, m, T);
            }
        }
      } catch (T) {
        on(r, r.return, T);
      }
      if (r === n) {
        ue = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, ue = E;
        break;
      }
      ue = r.return;
    }
  }
  var $v = Math.ceil, Gc = Ne.ReactCurrentDispatcher, ho = Ne.ReactCurrentOwner, Wr = Ne.ReactCurrentBatchConfig, pt = 0, ln = null, Wt = null, un = 0, lr = 0, ou = zt(0), Rn = 0, Ms = null, su = 0, Xc = 0, Ns = 0, zs = null, jn = null, Us = 0, cu = 1 / 0, Hi = null, qc = !1, Fd = null, El = null, Cl = !1, li = null, Tl = 0, As = 0, Hd = null, Fs = -1, Hs = 0;
  function On() {
    return pt & 6 ? qt() : Fs !== -1 ? Fs : Fs = qt();
  }
  function ja(n) {
    return n.mode & 1 ? pt & 2 && un !== 0 ? un & -un : Km.transition !== null ? (Hs === 0 && (Hs = $l()), Hs) : (n = et, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Ko(n.type)), n) : 1;
  }
  function ma(n, r, l, o) {
    if (50 < As) throw As = 0, Hd = null, Error(A(185));
    el(n, l, o), (!(pt & 2) || n !== ln) && (n === ln && (!(pt & 2) && (Xc |= l), Rn === 4 && ui(n, un)), Ft(n, o), l === 1 && pt === 0 && !(r.mode & 1) && (cu = qt() + 500, sl && Ja()));
  }
  function Ft(n, r) {
    var l = n.callbackNode;
    Ji(n, r);
    var o = Wa(n, n === ln ? un : 0);
    if (o === 0) l !== null && Vo(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && Vo(l), r === 1) n.tag === 0 ? wv(Kc.bind(null, n)) : Rc(Kc.bind(null, n)), Tv(function() {
        !(pt & 6) && Ja();
      }), l = null;
      else {
        switch (Go(o)) {
          case 1:
            l = Bo;
            break;
          case 4:
            l = Qa;
            break;
          case 16:
            l = Ie;
            break;
          case 536870912:
            l = gi;
            break;
          default:
            l = Ie;
        }
        l = Zv(l, fu.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function fu(n, r) {
    if (Fs = -1, Hs = 0, pt & 6) throw Error(A(327));
    var l = n.callbackNode;
    if (go() && n.callbackNode !== l) return null;
    var o = Wa(n, n === ln ? un : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = yo(n, o);
    else {
      r = o;
      var c = pt;
      pt |= 2;
      var d = Iv();
      (ln !== n || un !== r) && (Hi = null, cu = qt() + 500, Rl(n, r));
      do
        try {
          uy();
          break;
        } catch (E) {
          Yv(n, E);
        }
      while (!0);
      va(), Gc.current = d, pt = c, Wt !== null ? r = 0 : (ln = null, un = 0, r = Rn);
    }
    if (r !== 0) {
      if (r === 2 && (c = Ga(n), c !== 0 && (o = c, r = js(n, c))), r === 1) throw l = Ms, Rl(n, 0), ui(n, o), Ft(n, qt()), l;
      if (r === 6) ui(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !iy(c) && (r = yo(n, o), r === 2 && (d = Ga(n), d !== 0 && (o = d, r = js(n, d))), r === 1)) throw l = Ms, Rl(n, 0), ui(n, o), Ft(n, qt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(A(345));
          case 2:
            hu(n, jn, Hi);
            break;
          case 3:
            if (ui(n, o), (o & 130023424) === o && (r = Us + 500 - qt(), 10 < r)) {
              if (Wa(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                On(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = ds(hu.bind(null, n, jn, Hi), r);
              break;
            }
            hu(n, jn, Hi);
            break;
          case 4:
            if (ui(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - Jn(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = qt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * $v(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = ds(hu.bind(null, n, jn, Hi), o);
              break;
            }
            hu(n, jn, Hi);
            break;
          case 5:
            hu(n, jn, Hi);
            break;
          default:
            throw Error(A(329));
        }
      }
    }
    return Ft(n, qt()), n.callbackNode === l ? fu.bind(null, n) : null;
  }
  function js(n, r) {
    var l = zs;
    return n.current.memoizedState.isDehydrated && (Rl(n, r).flags |= 256), n = yo(n, r), n !== 2 && (r = jn, jn = l, r !== null && du(r)), n;
  }
  function du(n) {
    jn === null ? jn = n : jn.push.apply(jn, n);
  }
  function iy(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!Ma(d(), c)) return !1;
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
  function ui(n, r) {
    for (r &= ~Ns, r &= ~Xc, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Jn(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function Kc(n) {
    if (pt & 6) throw Error(A(327));
    go();
    var r = Wa(n, 0);
    if (!(r & 1)) return Ft(n, qt()), null;
    var l = yo(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = Ga(n);
      o !== 0 && (r = o, l = js(n, o));
    }
    if (l === 1) throw l = Ms, Rl(n, 0), ui(n, r), Ft(n, qt()), l;
    if (l === 6) throw Error(A(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, hu(n, jn, Hi), Ft(n, qt()), null;
  }
  function pu(n, r) {
    var l = pt;
    pt |= 1;
    try {
      return n(r);
    } finally {
      pt = l, pt === 0 && (cu = qt() + 500, sl && Ja());
    }
  }
  function vu(n) {
    li !== null && li.tag === 0 && !(pt & 6) && go();
    var r = pt;
    pt |= 1;
    var l = Wr.transition, o = et;
    try {
      if (Wr.transition = null, et = 1, n) return n();
    } finally {
      et = o, Wr.transition = l, pt = r, !(pt & 6) && Ja();
    }
  }
  function mo() {
    lr = ou.current, me(ou);
  }
  function Rl(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, ps(l)), Wt !== null) for (l = Wt.return; l !== null; ) {
      var o = l;
      switch (xc(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && wr();
          break;
        case 3:
          Zu(), me(Fe), me(bn), Lc();
          break;
        case 5:
          vd(o);
          break;
        case 4:
          Zu();
          break;
        case 13:
          me(Jt);
          break;
        case 19:
          me(Jt);
          break;
        case 10:
          Pr(o.type._context);
          break;
        case 22:
        case 23:
          mo();
      }
      l = l.return;
    }
    if (ln = n, Wt = n = wl(n.current, null), un = lr = r, Rn = 0, Ms = null, Ns = Xc = su = 0, jn = zs = null, nu !== null) {
      for (r = 0; r < nu.length; r++) if (l = nu[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var m = d.next;
          d.next = c, o.next = m;
        }
        l.pending = o;
      }
      nu = null;
    }
    return n;
  }
  function Yv(n, r) {
    do {
      var l = Wt;
      try {
        if (va(), Mc.current = ni, $t) {
          for (var o = K.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          $t = !1;
        }
        if (zi = 0, Ae = we = K = null, Dr = !1, Ju = 0, ho.current = null, l === null || l.return === null) {
          Rn = 1, Ms = r, Wt = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, T = r;
          if (r = un, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var N = T, Y = E, I = Y.tag;
            if (!(Y.mode & 1) && (I === 0 || I === 11 || I === 15)) {
              var $ = Y.alternate;
              $ ? (Y.updateQueue = $.updateQueue, Y.memoizedState = $.memoizedState, Y.lanes = $.lanes) : (Y.updateQueue = null, Y.memoizedState = null);
            }
            var re = ws(m);
            if (re !== null) {
              re.flags &= -257, Av(re, m, E, d, r), re.mode & 1 && Uv(d, N, r), r = re, T = N;
              var fe = r.updateQueue;
              if (fe === null) {
                var he = /* @__PURE__ */ new Set();
                he.add(T), r.updateQueue = he;
              } else fe.add(T);
              break e;
            } else {
              if (!(r & 1)) {
                Uv(d, N, r), jd();
                break e;
              }
              T = Error(A(426));
            }
          } else if (Pt && E.mode & 1) {
            var dn = ws(m);
            if (dn !== null) {
              !(dn.flags & 65536) && (dn.flags |= 256), Av(dn, m, E, d, r), mn(uo(T, E));
              break e;
            }
          }
          d = T = uo(T, E), Rn !== 4 && (Rn = 2), zs === null ? zs = [d] : zs.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var b = wd(d, T, r);
                Dv(d, b);
                break e;
              case 1:
                E = T;
                var w = d.type, O = d.stateNode;
                if (!(d.flags & 128) && (typeof w.getDerivedStateFromError == "function" || O !== null && typeof O.componentDidCatch == "function" && (El === null || !El.has(O)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var G = zv(d, E, r);
                  Dv(d, G);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        Wv(l);
      } catch (ye) {
        r = ye, Wt === l && l !== null && (Wt = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Iv() {
    var n = Gc.current;
    return Gc.current = ni, n === null ? ni : n;
  }
  function jd() {
    (Rn === 0 || Rn === 3 || Rn === 2) && (Rn = 4), ln === null || !(su & 268435455) && !(Xc & 268435455) || ui(ln, un);
  }
  function yo(n, r) {
    var l = pt;
    pt |= 2;
    var o = Iv();
    (ln !== n || un !== r) && (Hi = null, Rl(n, r));
    do
      try {
        ly();
        break;
      } catch (c) {
        Yv(n, c);
      }
    while (!0);
    if (va(), pt = l, Gc.current = o, Wt !== null) throw Error(A(261));
    return ln = null, un = 0, Rn;
  }
  function ly() {
    for (; Wt !== null; ) Qv(Wt);
  }
  function uy() {
    for (; Wt !== null && !Af(); ) Qv(Wt);
  }
  function Qv(n) {
    var r = Kv(n.alternate, n, lr);
    n.memoizedProps = n.pendingProps, r === null ? Wv(n) : Wt = r, ho.current = null;
  }
  function Wv(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = ry(l, r), l !== null) {
          l.flags &= 32767, Wt = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Rn = 6, Wt = null;
          return;
        }
      } else if (l = ny(l, r, lr), l !== null) {
        Wt = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        Wt = r;
        return;
      }
      Wt = r = n;
    } while (r !== null);
    Rn === 0 && (Rn = 5);
  }
  function hu(n, r, l) {
    var o = et, c = Wr.transition;
    try {
      Wr.transition = null, et = 1, Gv(n, r, l, o);
    } finally {
      Wr.transition = c, et = o;
    }
    return null;
  }
  function Gv(n, r, l, o) {
    do
      go();
    while (li !== null);
    if (pt & 6) throw Error(A(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(A(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Qo(n, d), n === ln && (Wt = ln = null, un = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || Cl || (Cl = !0, Zv(Ie, function() {
      return go(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = Wr.transition, Wr.transition = null;
      var m = et;
      et = 1;
      var E = pt;
      pt |= 4, ho.current = null, Ld(n, l), Fi(l, n), Xl(ed), Gl = !!Jf, ed = Jf = null, n.current = l, ay(l), Ff(), pt = E, et = m, Wr.transition = d;
    } else n.current = l;
    if (Cl && (Cl = !1, li = n, Tl = c), d = n.pendingLanes, d === 0 && (El = null), Po(l.stateNode), Ft(n, qt()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (qc) throw qc = !1, n = Fd, Fd = null, n;
    return Tl & 1 && n.tag !== 0 && go(), d = n.pendingLanes, d & 1 ? n === Hd ? As++ : (As = 0, Hd = n) : As = 0, Ja(), null;
  }
  function go() {
    if (li !== null) {
      var n = Go(Tl), r = Wr.transition, l = et;
      try {
        if (Wr.transition = null, et = 16 > n ? 16 : n, li === null) var o = !1;
        else {
          if (n = li, li = null, Tl = 0, pt & 6) throw Error(A(331));
          var c = pt;
          for (pt |= 4, ue = n.current; ue !== null; ) {
            var d = ue, m = d.child;
            if (ue.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var T = 0; T < E.length; T++) {
                  var N = E[T];
                  for (ue = N; ue !== null; ) {
                    var Y = ue;
                    switch (Y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ks(8, Y, d);
                    }
                    var I = Y.child;
                    if (I !== null) I.return = Y, ue = I;
                    else for (; ue !== null; ) {
                      Y = ue;
                      var $ = Y.sibling, re = Y.return;
                      if (Nd(Y), Y === N) {
                        ue = null;
                        break;
                      }
                      if ($ !== null) {
                        $.return = re, ue = $;
                        break;
                      }
                      ue = re;
                    }
                  }
                }
                var fe = d.alternate;
                if (fe !== null) {
                  var he = fe.child;
                  if (he !== null) {
                    fe.child = null;
                    do {
                      var dn = he.sibling;
                      he.sibling = null, he = dn;
                    } while (he !== null);
                  }
                }
                ue = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, ue = m;
            else e: for (; ue !== null; ) {
              if (d = ue, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  ks(9, d, d.return);
              }
              var b = d.sibling;
              if (b !== null) {
                b.return = d.return, ue = b;
                break e;
              }
              ue = d.return;
            }
          }
          var w = n.current;
          for (ue = w; ue !== null; ) {
            m = ue;
            var O = m.child;
            if (m.subtreeFlags & 2064 && O !== null) O.return = m, ue = O;
            else e: for (m = w; ue !== null; ) {
              if (E = ue, E.flags & 2048) try {
                switch (E.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Os(9, E);
                }
              } catch (ye) {
                on(E, E.return, ye);
              }
              if (E === m) {
                ue = null;
                break e;
              }
              var G = E.sibling;
              if (G !== null) {
                G.return = E.return, ue = G;
                break e;
              }
              ue = E.return;
            }
          }
          if (pt = c, Ja(), Er && typeof Er.onPostCommitFiberRoot == "function") try {
            Er.onPostCommitFiberRoot(Zi, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        et = l, Wr.transition = r;
      }
    }
    return !1;
  }
  function Xv(n, r, l) {
    r = uo(l, r), r = wd(n, r, 1), n = Yr(n, r, 1), r = On(), n !== null && (el(n, 1, r), Ft(n, r));
  }
  function on(n, r, l) {
    if (n.tag === 3) Xv(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        Xv(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (El === null || !El.has(o))) {
          n = uo(l, n), n = zv(r, n, 1), r = Yr(r, n, 1), n = On(), r !== null && (el(r, 1, n), Ft(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function oy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = On(), n.pingedLanes |= n.suspendedLanes & l, ln === n && (un & l) === l && (Rn === 4 || Rn === 3 && (un & 130023424) === un && 500 > qt() - Us ? Rl(n, 0) : Ns |= l), Ft(n, r);
  }
  function qv(n, r) {
    r === 0 && (n.mode & 1 ? (r = zu, zu <<= 1, !(zu & 130023424) && (zu = 4194304)) : r = 1);
    var l = On();
    n = Ni(n, r), n !== null && (el(n, r, l), Ft(n, l));
  }
  function sy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), qv(n, l);
  }
  function Vd(n, r) {
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
    o !== null && o.delete(r), qv(n, l);
  }
  var Kv;
  Kv = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Fe.current) tr = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return tr = !1, Qr(n, r, l);
      tr = !!(n.flags & 131072);
    }
    else tr = !1, Pt && r.flags & 1048576 && fl(r, eu, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        bs(n, r), n = r.pendingProps;
        var c = jr(r, bn.current);
        Xu(r, l), c = gs(null, r, o, n, c, l);
        var d = P();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, hn(o) ? (d = !0, Jl(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, fd(r), c.updater = ml, r.stateNode = c, c._reactInternals = r, Cd(r, o, n, l), r = so(null, r, o, !0, d, l)) : (r.tag = 0, Pt && d && wc(r), nr(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (bs(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = fy(o), n = kr(o, n), c) {
            case 0:
              r = Sl(null, r, o, n, l);
              break e;
            case 1:
              r = $e(null, r, o, n, l);
              break e;
            case 11:
              r = yl(null, r, o, n, l);
              break e;
            case 14:
              r = oo(null, r, o, kr(o.type, n), l);
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
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : kr(o, c), Sl(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : kr(o, c), $e(n, r, o, c, l);
      case 3:
        e: {
          if (xd(r), n === null) throw Error(A(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, dd(n, r), Oc(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = uo(Error(A(423)), r), r = ey(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = uo(Error(A(424)), r), r = ey(n, r, o, l, c);
            break e;
          } else for (Br = Hr(r.stateNode.containerInfo.firstChild), Vr = r, Pt = !0, pa = null, l = bv(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Wu(), o === c) {
              r = ri(n, r, l);
              break e;
            }
            nr(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Ov(r), n === null && _c(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, Zl(o, c) ? m = null : d !== null && Zl(o, d) && (r.flags |= 32), Or(n, r), nr(n, r, m, l), r.child;
      case 6:
        return n === null && _c(r), null;
      case 13:
        return co(n, r, l);
      case 4:
        return pd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = vl(r, null, o, l) : nr(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : kr(o, c), yl(n, r, o, c, l);
      case 7:
        return nr(n, r, r.pendingProps, l), r.child;
      case 8:
        return nr(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return nr(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, mt(Dc, o._currentValue), o._currentValue = m, d !== null) if (Ma(d.value, m)) {
            if (d.children === c.children && !Fe.current) {
              r = ri(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var E = d.dependencies;
            if (E !== null) {
              m = d.child;
              for (var T = E.firstContext; T !== null; ) {
                if (T.context === o) {
                  if (d.tag === 1) {
                    T = $r(-1, l & -l), T.tag = 2;
                    var N = d.updateQueue;
                    if (N !== null) {
                      N = N.shared;
                      var Y = N.pending;
                      Y === null ? T.next = T : (T.next = Y.next, Y.next = T), N.pending = T;
                    }
                  }
                  d.lanes |= l, T = d.alternate, T !== null && (T.lanes |= l), sd(
                    d.return,
                    l,
                    r
                  ), E.lanes |= l;
                  break;
                }
                T = T.next;
              }
            } else if (d.tag === 10) m = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (m = d.return, m === null) throw Error(A(341));
              m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), sd(m, l, r), m = d.sibling;
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
          nr(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, Xu(r, l), c = ha(c), o = o(c), r.flags |= 1, nr(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = kr(o, r.pendingProps), c = kr(o.type, c), oo(n, r, o, c, l);
      case 15:
        return gl(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : kr(o, c), bs(n, r), r.tag = 1, hn(o) ? (n = !0, Jl(r)) : n = !1, Xu(r, l), Mv(r, o, c), Cd(r, o, c, l), so(null, r, o, !0, n, l);
      case 19:
        return kd(n, r, l);
      case 22:
        return Ic(n, r, l);
    }
    throw Error(A(156, r.tag));
  };
  function Zv(n, r) {
    return cc(n, r);
  }
  function cy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Gr(n, r, l, o) {
    return new cy(n, r, l, o);
  }
  function Bd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function fy(n) {
    if (typeof n == "function") return Bd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === ft) return 11;
      if (n === st) return 14;
    }
    return 2;
  }
  function wl(n, r) {
    var l = n.alternate;
    return l === null ? (l = Gr(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Zc(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Bd(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case Je:
        return mu(l.children, c, d, r);
      case Be:
        m = 8, c |= 8;
        break;
      case Sn:
        return n = Gr(12, l, r, c | 2), n.elementType = Sn, n.lanes = d, n;
      case nn:
        return n = Gr(13, l, r, c), n.elementType = nn, n.lanes = d, n;
      case We:
        return n = Gr(19, l, r, c), n.elementType = We, n.lanes = d, n;
      case Ge:
        return Jc(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case En:
            m = 10;
            break e;
          case Qt:
            m = 9;
            break e;
          case ft:
            m = 11;
            break e;
          case st:
            m = 14;
            break e;
          case Dt:
            m = 16, o = null;
            break e;
        }
        throw Error(A(130, n == null ? n : typeof n, ""));
    }
    return r = Gr(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function mu(n, r, l, o) {
    return n = Gr(7, n, o, r), n.lanes = l, n;
  }
  function Jc(n, r, l, o) {
    return n = Gr(22, n, o, r), n.elementType = Ge, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Pd(n, r, l) {
    return n = Gr(6, n, null, r), n.lanes = l, n;
  }
  function ef(n, r, l) {
    return r = Gr(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function $d(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Yl(0), this.expirationTimes = Yl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Yl(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function yu(n, r, l, o, c, d, m, E, T) {
    return n = new $d(n, r, l, E, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Gr(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, fd(d), n;
  }
  function dy(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Ce, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Yd(n) {
    if (!n) return ca;
    n = n._reactInternals;
    e: {
      if (Ot(n) !== n || n.tag !== 1) throw Error(A(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (hn(r.type)) {
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
      if (hn(l)) return ol(n, l, r);
    }
    return r;
  }
  function Id(n, r, l, o, c, d, m, E, T) {
    return n = yu(l, o, !0, n, c, d, m, E, T), n.context = Yd(null), l = n.current, o = On(), c = ja(l), d = $r(o, c), d.callback = r ?? null, Yr(l, d, c), n.current.lanes = c, el(n, c, o), Ft(n, o), n;
  }
  function Vs(n, r, l, o) {
    var c = r.current, d = On(), m = ja(c);
    return l = Yd(l), r.context === null ? r.context = l : r.pendingContext = l, r = $r(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Yr(c, r, m), n !== null && (ma(n, c, m, d), kc(n, c, m)), m;
  }
  function tf(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Qd(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Wd(n, r) {
    Qd(n, r), (n = n.alternate) && Qd(n, r);
  }
  function py() {
    return null;
  }
  var Jv = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function nf(n) {
    this._internalRoot = n;
  }
  Bs.prototype.render = nf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(A(409));
    Vs(n, r, null, null);
  }, Bs.prototype.unmount = nf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      vu(function() {
        Vs(null, n, null, null);
      }), r[Na] = null;
    }
  };
  function Bs(n) {
    this._internalRoot = n;
  }
  Bs.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = tt();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Vt.length && r !== 0 && r < Vt[l].priority; l++) ;
      Vt.splice(l, 0, n), l === 0 && Oa(n);
    }
  };
  function rf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function ji(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function eh() {
  }
  function vy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var N = tf(m);
          d.call(N);
        };
      }
      var m = Id(r, o, n, 0, null, !1, !1, "", eh);
      return n._reactRootContainer = m, n[Na] = m.current, qa(n.nodeType === 8 ? n.parentNode : n), vu(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var N = tf(T);
        E.call(N);
      };
    }
    var T = yu(n, 0, !1, null, null, !1, !1, "", eh);
    return n._reactRootContainer = T, n[Na] = T.current, qa(n.nodeType === 8 ? n.parentNode : n), vu(function() {
      Vs(r, T, l, o);
    }), T;
  }
  function af(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var T = tf(m);
          E.call(T);
        };
      }
      Vs(r, m, n, c);
    } else m = vy(l, r, n, c, o);
    return tf(m);
  }
  Uu = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Si(r.pendingLanes);
          l !== 0 && (Wo(r, l | 1), Ft(r, qt()), !(pt & 6) && (cu = qt() + 500, Ja()));
        }
        break;
      case 13:
        vu(function() {
          var o = Ni(n, 1);
          if (o !== null) {
            var c = On();
            ma(o, n, 1, c);
          }
        }), Wd(n, 1);
    }
  }, tl = function(n) {
    if (n.tag === 13) {
      var r = Ni(n, 134217728);
      if (r !== null) {
        var l = On();
        ma(r, n, 134217728, l);
      }
      Wd(n, 134217728);
    }
  }, Xo = function(n) {
    if (n.tag === 13) {
      var r = ja(n), l = Ni(n, r);
      if (l !== null) {
        var o = On();
        ma(l, n, r, o);
      }
      Wd(n, r);
    }
  }, tt = function() {
    return et;
  }, Au = function(n, r) {
    var l = et;
    try {
      return et = n, r();
    } finally {
      et = l;
    }
  }, jt = function(n, r, l) {
    switch (r) {
      case "input":
        if (Kn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = Tc(o);
              if (!c) throw Error(A(90));
              ta(o), Kn(o, c);
            }
          }
        }
        break;
      case "textarea":
        yr(n, l);
        break;
      case "select":
        r = l.value, r != null && Un(n, !!l.multiple, r, !1);
    }
  }, Ou = pu, oc = vu;
  var hy = { usingClientEntryPoint: !1, Events: [Ka, Qu, Tc, Al, mi, pu] }, Ps = { findFiberByHostInstance: Oi, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, my = { bundleType: Ps.bundleType, version: Ps.version, rendererPackageName: Ps.rendererPackageName, rendererConfig: Ps.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ne.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = _n(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Ps.findFiberByHostInstance || py, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var $s = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!$s.isDisabled && $s.supportsFiber) try {
      Zi = $s.inject(my), Er = $s;
    } catch {
    }
  }
  return Ta.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hy, Ta.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!rf(r)) throw Error(A(200));
    return dy(n, r, null, l);
  }, Ta.createRoot = function(n, r) {
    if (!rf(n)) throw Error(A(299));
    var l = !1, o = "", c = Jv;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = yu(n, 1, !1, null, null, l, !1, o, c), n[Na] = r.current, qa(n.nodeType === 8 ? n.parentNode : n), new nf(r);
  }, Ta.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(A(188)) : (n = Object.keys(n).join(","), Error(A(268, n)));
    return n = _n(r), n = n === null ? null : n.stateNode, n;
  }, Ta.flushSync = function(n) {
    return vu(n);
  }, Ta.hydrate = function(n, r, l) {
    if (!ji(r)) throw Error(A(200));
    return af(null, n, r, !0, l);
  }, Ta.hydrateRoot = function(n, r, l) {
    if (!rf(n)) throw Error(A(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = Jv;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = Id(r, null, n, 1, l ?? null, c, !1, d, m), n[Na] = r.current, qa(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new Bs(r);
  }, Ta.render = function(n, r, l) {
    if (!ji(r)) throw Error(A(200));
    return af(null, n, r, !1, l);
  }, Ta.unmountComponentAtNode = function(n) {
    if (!ji(n)) throw Error(A(40));
    return n._reactRootContainer ? (vu(function() {
      af(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Na] = null;
      });
    }), !0) : !1;
  }, Ta.unstable_batchedUpdates = pu, Ta.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!ji(l)) throw Error(A(200));
    if (n == null || n._reactInternals === void 0) throw Error(A(38));
    return af(n, r, l, !1, o);
  }, Ta.version = "18.3.1-next-f1338f8080-20240426", Ta;
}
var Ra = {}, J1;
function rD() {
  if (J1) return Ra;
  J1 = 1;
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
    var se = Um, A = rT(), rt = se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, bt = !1;
    function tn(e) {
      bt = e;
    }
    function ot(e) {
      if (!bt) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Gt("warn", e, a);
      }
    }
    function S(e) {
      if (!bt) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Gt("error", e, a);
      }
    }
    function Gt(e, t, a) {
      {
        var i = rt.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var je = 0, xe = 1, Ke = 2, ce = 3, Ve = 4, ae = 5, Te = 6, at = 7, Mn = 8, Nn = 9, It = 10, Ne = 11, St = 12, Ce = 13, Je = 14, Be = 15, Sn = 16, En = 17, Qt = 18, ft = 19, nn = 21, We = 22, st = 23, Dt = 24, Ge = 25, V = !0, ve = !1, ne = !1, _ = !1, B = !1, De = !0, ze = !1, Ye = !0, Xe = !0, ht = !0, it = !0, Et = /* @__PURE__ */ new Set(), Ht = {}, ea = {};
    function ta(e, t) {
      Ar(e, t), Ar(e + "Capture", t);
    }
    function Ar(e, t) {
      Ht[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Ht[e] = t;
      {
        var a = e.toLowerCase();
        ea[a] = e, e === "onDoubleClick" && (ea.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Et.add(t[i]);
    }
    var vn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", qn = Object.prototype.hasOwnProperty;
    function mr(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Kn(e) {
      try {
        return zn(e), !1;
      } catch {
        return !0;
      }
    }
    function zn(e) {
      return "" + e;
    }
    function na(e, t) {
      if (Kn(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, mr(e)), zn(e);
    }
    function wa(e) {
      if (Kn(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", mr(e)), zn(e);
    }
    function Un(e, t) {
      if (Kn(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, mr(e)), zn(e);
    }
    function xa(e, t) {
      if (Kn(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, mr(e)), zn(e);
    }
    function hi(e) {
      if (Kn(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", mr(e)), zn(e);
    }
    function yr(e) {
      if (Kn(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", mr(e)), zn(e);
    }
    var _a = 0, gr = 1, ra = 2, xn = 3, ba = 4, $a = 5, Ya = 6, ee = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Re = ee + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", qe = new RegExp("^[" + ee + "][" + Re + "]*$"), kt = {}, Ct = {};
    function Cn(e) {
      return qn.call(Ct, e) ? !0 : qn.call(kt, e) ? !1 : qe.test(e) ? (Ct[e] = !0, !0) : (kt[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function cn(e, t, a) {
      return t !== null ? t.type === _a : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Sr(e, t, a, i) {
      if (a !== null && a.type === _a)
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
    function jt(e, t, a, i) {
      if (t === null || typeof t > "u" || Sr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case xn:
            return !t;
          case ba:
            return t === !1;
          case $a:
            return isNaN(t);
          case Ya:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Zn(e) {
      return rn.hasOwnProperty(e) ? rn[e] : null;
    }
    function Xt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === ra || t === xn || t === ba, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var rn = {}, Al = [
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
    Al.forEach(function(e) {
      rn[e] = new Xt(
        e,
        _a,
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
      rn[t] = new Xt(
        t,
        gr,
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
      rn[e] = new Xt(
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
      rn[e] = new Xt(
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
      rn[e] = new Xt(
        e,
        xn,
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
      rn[e] = new Xt(
        e,
        xn,
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
      rn[e] = new Xt(
        e,
        ba,
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
      rn[e] = new Xt(
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
      rn[e] = new Xt(
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
    var mi = /[\-\:]([a-z])/g, Ou = function(e) {
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
      var t = e.replace(mi, Ou);
      rn[t] = new Xt(
        t,
        gr,
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
      var t = e.replace(mi, Ou);
      rn[t] = new Xt(
        t,
        gr,
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
      var t = e.replace(mi, Ou);
      rn[t] = new Xt(
        t,
        gr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      rn[e] = new Xt(
        e,
        gr,
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
    var oc = "xlinkHref";
    rn[oc] = new Xt(
      "xlinkHref",
      gr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      rn[e] = new Xt(
        e,
        gr,
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
    var Fo = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Ho = !1;
    function Ki(e) {
      !Ho && Fo.test(e) && (Ho = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function yi(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        na(a, t), i.sanitizeURL && Ki("" + a);
        var s = i.attributeName, f = null;
        if (i.type === ba) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : jt(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (jt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === xn)
            return a;
          f = e.getAttribute(s);
        }
        return jt(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function Ia(e, t, a, i) {
      {
        if (!Cn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return na(a, t), u === "" + a ? a : u;
      }
    }
    function Lu(e, t, a, i) {
      var u = Zn(t);
      if (!cn(t, u, i)) {
        if (jt(t, a, u, i) && (a = null), i || u === null) {
          if (Cn(t)) {
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
            e[p] = v === xn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var x = u.type, R;
          x === xn || x === ba && a === !0 ? R = "" : (na(a, y), R = "" + a, u.sanitizeURL && Ki(R.toString())), g ? e.setAttributeNS(g, y, R) : e.setAttribute(y, R);
        }
      }
    }
    var aa = Symbol.for("react.element"), ia = Symbol.for("react.portal"), Da = Symbol.for("react.fragment"), Fl = Symbol.for("react.strict_mode"), Mu = Symbol.for("react.profiler"), Nu = Symbol.for("react.provider"), jo = Symbol.for("react.context"), Ot = Symbol.for("react.forward_ref"), Hl = Symbol.for("react.suspense"), jl = Symbol.for("react.suspense_list"), Vl = Symbol.for("react.memo"), _n = Symbol.for("react.lazy"), sc = Symbol.for("react.scope"), cc = Symbol.for("react.debug_trace_mode"), Vo = Symbol.for("react.offscreen"), Af = Symbol.for("react.legacy_hidden"), Ff = Symbol.for("react.cache"), qt = Symbol.for("react.tracing_marker"), fc = Symbol.iterator, Bo = "@@iterator";
    function Qa(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = fc && e[fc] || e[Bo];
      return typeof t == "function" ? t : null;
    }
    var Ie = Object.assign, Bl = 0, gi, Zi, Er, Po, Jn, $o, Yo;
    function Io() {
    }
    Io.__reactDisabledLog = !0;
    function Pl() {
      {
        if (Bl === 0) {
          gi = console.log, Zi = console.info, Er = console.warn, Po = console.error, Jn = console.group, $o = console.groupCollapsed, Yo = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Io,
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
        Bl++;
      }
    }
    function zu() {
      {
        if (Bl--, Bl === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ie({}, e, {
              value: gi
            }),
            info: Ie({}, e, {
              value: Zi
            }),
            warn: Ie({}, e, {
              value: Er
            }),
            error: Ie({}, e, {
              value: Po
            }),
            group: Ie({}, e, {
              value: Jn
            }),
            groupCollapsed: Ie({}, e, {
              value: $o
            }),
            groupEnd: Ie({}, e, {
              value: Yo
            })
          });
        }
        Bl < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Si = rt.ReactCurrentDispatcher, Wa;
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
    var Ji = !1, Ga;
    {
      var $l = typeof WeakMap == "function" ? WeakMap : Map;
      Ga = new $l();
    }
    function Yl(e, t) {
      if (!e || Ji)
        return "";
      {
        var a = Ga.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Ji = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Si.current, Si.current = null, Pl();
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
            } catch (z) {
              i = z;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (z) {
              i = z;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (z) {
            i = z;
          }
          e();
        }
      } catch (z) {
        if (z && i && typeof z.stack == "string") {
          for (var p = z.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, g = v.length - 1; y >= 1 && g >= 0 && p[y] !== v[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (p[y] !== v[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || p[y] !== v[g]) {
                    var x = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", e.displayName)), typeof e == "function" && Ga.set(e, x), x;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        Ji = !1, Si.current = s, zu(), Error.prepareStackTrace = u;
      }
      var R = e ? e.displayName || e.name : "", M = R ? la(R) : "";
      return typeof e == "function" && Ga.set(e, M), M;
    }
    function el(e, t, a) {
      return Yl(e, !0);
    }
    function Qo(e, t, a) {
      return Yl(e, !1);
    }
    function Wo(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function et(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Yl(e, Wo(e));
      if (typeof e == "string")
        return la(e);
      switch (e) {
        case Hl:
          return la("Suspense");
        case jl:
          return la("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Ot:
            return Qo(e.render);
          case Vl:
            return et(e.type, t, a);
          case _n: {
            var i = e, u = i._payload, s = i._init;
            try {
              return et(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Go(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case ae:
          return la(e.type);
        case Sn:
          return la("Lazy");
        case Ce:
          return la("Suspense");
        case ft:
          return la("SuspenseList");
        case je:
        case Ke:
        case Be:
          return Qo(e.type);
        case Ne:
          return Qo(e.type.render);
        case xe:
          return el(e.type);
        default:
          return "";
      }
    }
    function Uu(e) {
      try {
        var t = "", a = e;
        do
          t += Go(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function tl(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Xo(e) {
      return e.displayName || "Context";
    }
    function tt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Da:
          return "Fragment";
        case ia:
          return "Portal";
        case Mu:
          return "Profiler";
        case Fl:
          return "StrictMode";
        case Hl:
          return "Suspense";
        case jl:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case jo:
            var t = e;
            return Xo(t) + ".Consumer";
          case Nu:
            var a = e;
            return Xo(a._context) + ".Provider";
          case Ot:
            return tl(e, e.render, "ForwardRef");
          case Vl:
            var i = e.displayName || null;
            return i !== null ? i : tt(e.type) || "Memo";
          case _n: {
            var u = e, s = u._payload, f = u._init;
            try {
              return tt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Au(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Il(e) {
      return e.displayName || "Context";
    }
    function Ue(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Dt:
          return "Cache";
        case Nn:
          var i = a;
          return Il(i) + ".Consumer";
        case It:
          var u = a;
          return Il(u._context) + ".Provider";
        case Qt:
          return "DehydratedFragment";
        case Ne:
          return Au(a, a.render, "ForwardRef");
        case at:
          return "Fragment";
        case ae:
          return a;
        case Ve:
          return "Portal";
        case ce:
          return "Root";
        case Te:
          return "Text";
        case Sn:
          return tt(a);
        case Mn:
          return a === Fl ? "StrictMode" : "Mode";
        case We:
          return "Offscreen";
        case St:
          return "Profiler";
        case nn:
          return "Scope";
        case Ce:
          return "Suspense";
        case ft:
          return "SuspenseList";
        case Ge:
          return "TracingMarker";
        case xe:
        case je:
        case En:
        case Ke:
        case Je:
        case Be:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var ka = rt.ReactDebugCurrentFrame, Kt = null, Cr = !1;
    function ua() {
      {
        if (Kt === null)
          return null;
        var e = Kt._debugOwner;
        if (e !== null && typeof e < "u")
          return Ue(e);
      }
      return null;
    }
    function nl() {
      return Kt === null ? "" : Uu(Kt);
    }
    function Vt() {
      ka.getCurrentStack = null, Kt = null, Cr = !1;
    }
    function Zt(e) {
      ka.getCurrentStack = e === null ? null : nl, Kt = e, Cr = !1;
    }
    function qo() {
      return Kt;
    }
    function An(e) {
      Cr = e;
    }
    function Tr(e) {
      return "" + e;
    }
    function Oa(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return yr(e), e;
        default:
          return "";
      }
    }
    var Fu = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Ql(e, t) {
      Fu[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Wl(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function rl(e) {
      return e._valueTracker;
    }
    function oa(e) {
      e._valueTracker = null;
    }
    function Ei(e) {
      var t = "";
      return e && (Wl(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Gl(e) {
      var t = Wl(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      yr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            yr(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            yr(p), i = "" + p;
          },
          stopTracking: function() {
            oa(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Ci(e) {
      rl(e) || (e._valueTracker = Gl(e));
    }
    function Hu(e) {
      if (!e)
        return !1;
      var t = rl(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Ei(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Xa(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Ti = !1, ju = !1, Ko = !1, La = !1;
    function Vu(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function h(e, t) {
      var a = e, i = t.checked, u = Ie({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function C(e, t) {
      Ql("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !ju && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ua() || "A component", t.type), ju = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Ti && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ua() || "A component", t.type), Ti = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Oa(t.value != null ? t.value : i),
        controlled: Vu(t)
      };
    }
    function L(e, t) {
      var a = e, i = t.checked;
      i != null && Lu(a, "checked", i, !1);
    }
    function U(e, t) {
      var a = e;
      {
        var i = Vu(t);
        !a._wrapperState.controlled && i && !La && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), La = !0), a._wrapperState.controlled && !i && !Ko && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Ko = !0);
      }
      L(e, t);
      var u = Oa(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Tr(u)) : a.value !== Tr(u) && (a.value = Tr(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Le(a, t.type, u) : t.hasOwnProperty("defaultValue") && Le(a, t.type, Oa(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function W(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Tr(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function pe(e, t) {
      var a = e;
      U(a, t), le(a, t);
    }
    function le(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        na(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = gh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Hu(f), U(f, p);
          }
        }
      }
    }
    function Le(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Xa(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Tr(e._wrapperState.initialValue) : e.defaultValue !== Tr(a) && (e.defaultValue = Tr(a)));
    }
    var Qe = !1, Tt = !1, wt = !1;
    function xt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? se.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Tt || (Tt = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (wt || (wt = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Qe && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Qe = !0);
    }
    function _t(e, t) {
      t.value != null && e.setAttribute("value", Tr(Oa(t.value)));
    }
    var Bt = Array.isArray;
    function ct(e) {
      return Bt(e);
    }
    var al;
    al = !1;
    function Bu() {
      var e = ua();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Zo = ["value", "defaultValue"];
    function Jo(e) {
      {
        Ql("select", e);
        for (var t = 0; t < Zo.length; t++) {
          var a = Zo[t];
          if (e[a] != null) {
            var i = ct(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Bu()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Bu());
          }
        }
      }
    }
    function Ri(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = Tr(Oa(a)), x = null, R = 0; R < u.length; R++) {
          if (u[R].value === g) {
            u[R].selected = !0, i && (u[R].defaultSelected = !0);
            return;
          }
          x === null && !u[R].disabled && (x = u[R]);
        }
        x !== null && (x.selected = !0);
      }
    }
    function es(e, t) {
      return Ie({}, t, {
        value: void 0
      });
    }
    function ts(e, t) {
      var a = e;
      Jo(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !al && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), al = !0);
    }
    function Hf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Ri(a, !!t.multiple, i, !1) : t.defaultValue != null && Ri(a, !!t.multiple, t.defaultValue, !0);
    }
    function Am(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Ri(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Ri(a, !!t.multiple, t.defaultValue, !0) : Ri(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Gp(e, t) {
      var a = e, i = t.value;
      i != null && Ri(a, !!t.multiple, i, !1);
    }
    var Xp = !1;
    function jf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Ie({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Tr(a._wrapperState.initialValue)
      });
      return i;
    }
    function qp(e, t) {
      var a = e;
      Ql("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Xp && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", ua() || "A component"), Xp = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
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
        initialValue: Oa(i)
      };
    }
    function Kp(e, t) {
      var a = e, i = Oa(t.value), u = Oa(t.defaultValue);
      if (i != null) {
        var s = Tr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Tr(u));
    }
    function dc(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Fm(e, t) {
      Kp(e, t);
    }
    var wi = "http://www.w3.org/1999/xhtml", Hm = "http://www.w3.org/1998/Math/MathML", pc = "http://www.w3.org/2000/svg";
    function Vf(e) {
      switch (e) {
        case "svg":
          return pc;
        case "math":
          return Hm;
        default:
          return wi;
      }
    }
    function Bf(e, t) {
      return e == null || e === wi ? Vf(t) : e === pc && t === "foreignObject" ? wi : e;
    }
    var jm = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, vc, Zp = jm(function(e, t) {
      if (e.namespaceURI === pc && !("innerHTML" in e)) {
        vc = vc || document.createElement("div"), vc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = vc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Rr = 1, xi = 3, an = 8, Fr = 9, Pf = 11, ns = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === xi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Jp = {
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
    }, Pu = {
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
    function ev(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var tv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Pu).forEach(function(e) {
      tv.forEach(function(t) {
        Pu[ev(t, e)] = Pu[e];
      });
    });
    function il(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Pu.hasOwnProperty(e) && Pu[e]) ? t + "px" : (xa(t, e), ("" + t).trim());
    }
    var Vm = /([A-Z])/g, Bm = /^ms-/;
    function Pm(e) {
      return e.replace(Vm, "-$1").toLowerCase().replace(Bm, "-ms-");
    }
    var $f = function() {
    };
    {
      var nv = /^(?:webkit|moz|o)[A-Z]/, rs = /^-ms-/, as = /-(.)/g, rv = /;\s*$/, _i = {}, Yf = {}, If = !1, hc = !1, Qf = function(e) {
        return e.replace(as, function(t, a) {
          return a.toUpperCase();
        });
      }, av = function(e) {
        _i.hasOwnProperty(e) && _i[e] || (_i[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Qf(e.replace(rs, "ms-"))
        ));
      }, iv = function(e) {
        _i.hasOwnProperty(e) && _i[e] || (_i[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, lv = function(e, t) {
        Yf.hasOwnProperty(t) && Yf[t] || (Yf[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(rv, "")));
      }, $m = function(e, t) {
        If || (If = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Ym = function(e, t) {
        hc || (hc = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      $f = function(e, t) {
        e.indexOf("-") > -1 ? av(e) : nv.test(e) ? iv(e) : rv.test(t) && lv(e, t), typeof t == "number" && (isNaN(t) ? $m(e, t) : isFinite(t) || Ym(e, t));
      };
    }
    var Im = $f;
    function Qm(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Pm(i)) + ":", t += il(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function uv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Im(i, t[i]);
          var s = il(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Ma(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function $u(e) {
      var t = {};
      for (var a in e)
        for (var i = Jp[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function ov(e, t) {
      {
        if (!t)
          return;
        var a = $u(e), i = $u(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Ma(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var sv = {
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
    }, cv = Ie({
      menuitem: !0
    }, sv), fv = "__html";
    function is(e, t) {
      if (t) {
        if (cv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(fv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Xl(e, t) {
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
    var mc = {
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
    }, ql = {
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
    }, ll = {}, ls = new RegExp("^(aria)-[" + Re + "]*$"), Wf = new RegExp("^(aria)[A-Z][" + Re + "]*$");
    function dv(e, t) {
      {
        if (qn.call(ll, t) && ll[t])
          return !0;
        if (Wf.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = ql.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), ll[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), ll[t] = !0, !0;
        }
        if (ls.test(t)) {
          var u = t.toLowerCase(), s = ql.hasOwnProperty(u) ? u : null;
          if (s == null)
            return ll[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), ll[t] = !0, !0;
        }
      }
      return !0;
    }
    function yc(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = dv(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Yu(e, t) {
      Xl(e, t) || yc(e, t);
    }
    var gc = !1;
    function pv(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !gc && (gc = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var us = function() {
    };
    {
      var Gn = {}, Gf = /^on./, vv = /^on[^A-Z]/, hv = new RegExp("^(aria)-[" + Re + "]*$"), mv = new RegExp("^(aria)[A-Z][" + Re + "]*$");
      us = function(e, t, a, i) {
        if (qn.call(Gn, t) && Gn[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Gn[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), Gn[t] = !0, !0;
          if (Gf.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), Gn[t] = !0, !0;
        } else if (Gf.test(t))
          return vv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Gn[t] = !0, !0;
        if (hv.test(t) || mv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Gn[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Gn[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Gn[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Gn[t] = !0, !0;
        var v = Zn(t), y = v !== null && v.type === _a;
        if (mc.hasOwnProperty(u)) {
          var g = mc[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), Gn[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), Gn[t] = !0, !0;
        return typeof a == "boolean" && Sr(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Gn[t] = !0, !0) : y ? !0 : Sr(t, a, v, !1) ? (Gn[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === xn && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Gn[t] = !0), !0);
      };
    }
    var yv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = us(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function ul(e, t, a) {
      Xl(e, t) || yv(e, t, a);
    }
    var Sc = 1, os = 2, ss = 4, Wm = Sc | os | ss, bi = null;
    function Gm(e) {
      bi !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), bi = e;
    }
    function gv() {
      bi === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), bi = null;
    }
    function Sv(e) {
      return e === bi;
    }
    function Nt(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === xi ? t.parentNode : t;
    }
    var cs = null, Di = null, qa = null;
    function Xf(e) {
      var t = Co(e);
      if (t) {
        if (typeof cs != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = gh(a);
          cs(t.stateNode, t.type, i);
        }
      }
    }
    function qf(e) {
      cs = e;
    }
    function Iu(e) {
      Di ? qa ? qa.push(e) : qa = [e] : Di = e;
    }
    function Ec() {
      return Di !== null || qa !== null;
    }
    function Kl() {
      if (Di) {
        var e = Di, t = qa;
        if (Di = null, qa = null, Xf(e), t)
          for (var a = 0; a < t.length; a++)
            Xf(t[a]);
      }
    }
    var Kf = function(e, t) {
      return e(t);
    }, Ev = function() {
    }, Zf = !1;
    function Cv() {
      var e = Ec();
      e && (Ev(), Kl());
    }
    function fs(e, t, a) {
      if (Zf)
        return e(t, a);
      Zf = !0;
      try {
        return Kf(e, t, a);
      } finally {
        Zf = !1, Cv();
      }
    }
    function Cc(e, t, a) {
      Kf = e, Ev = a;
    }
    function Jf(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function ed(e, t, a) {
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
          return !!(a.disabled && Jf(t));
        default:
          return !1;
      }
    }
    function Zl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = gh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (ed(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var ds = !1;
    if (vn)
      try {
        var ps = {};
        Object.defineProperty(ps, "passive", {
          get: function() {
            ds = !0;
          }
        }), window.addEventListener("test", ps, ps), window.removeEventListener("test", ps, ps);
      } catch {
        ds = !1;
      }
    function td(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var Tv = td;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var nd = document.createElement("react");
      Tv = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), x = !1, R = !0, M = window.event, z = Object.getOwnPropertyDescriptor(window, "event");
        function F() {
          nd.removeEventListener(H, be, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = M);
        }
        var J = Array.prototype.slice.call(arguments, 3);
        function be() {
          x = !0, F(), a.apply(i, J), R = !1;
        }
        var Ee, ut = !1, Ze = !1;
        function D(k) {
          if (Ee = k.error, ut = !0, Ee === null && k.colno === 0 && k.lineno === 0 && (Ze = !0), k.defaultPrevented && Ee != null && typeof Ee == "object")
            try {
              Ee._suppressLogging = !0;
            } catch {
            }
        }
        var H = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", D), nd.addEventListener(H, be, !1), g.initEvent(H, !1, !1), nd.dispatchEvent(g), z && Object.defineProperty(window, "event", z), x && R && (ut ? Ze && (Ee = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Ee = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Ee)), window.removeEventListener("error", D), !x)
          return F(), td.apply(this, arguments);
      };
    }
    var rd = Tv, Hr = !1, vs = null, ki = !1, sa = null, hs = {
      onError: function(e) {
        Hr = !0, vs = e;
      }
    };
    function Na(e, t, a, i, u, s, f, p, v) {
      Hr = !1, vs = null, rd.apply(hs, arguments);
    }
    function ad(e, t, a, i, u, s, f, p, v) {
      if (Na.apply(this, arguments), Hr) {
        var y = Oi();
        ki || (ki = !0, sa = y);
      }
    }
    function Xm() {
      if (ki) {
        var e = sa;
        throw ki = !1, sa = null, e;
      }
    }
    function qm() {
      return Hr;
    }
    function Oi() {
      if (Hr) {
        var e = vs;
        return Hr = !1, vs = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ka(e) {
      return e._reactInternals;
    }
    function Qu(e) {
      return e._reactInternals !== void 0;
    }
    function Tc(e, t) {
      e._reactInternals = t;
    }
    var _e = (
      /*                      */
      0
    ), za = (
      /*                */
      1
    ), zt = (
      /*                    */
      2
    ), me = (
      /*                       */
      4
    ), mt = (
      /*                */
      16
    ), ca = (
      /*                 */
      32
    ), bn = (
      /*                     */
      64
    ), Fe = (
      /*                   */
      128
    ), er = (
      /*            */
      256
    ), jr = (
      /*                          */
      512
    ), hn = (
      /*                     */
      1024
    ), wr = (
      /*                      */
      2048
    ), Za = (
      /*                    */
      4096
    ), ol = (
      /*                   */
      8192
    ), Jl = (
      /*             */
      16384
    ), Rv = wr | me | bn | jr | hn | Jl, Li = (
      /*               */
      32767
    ), sl = (
      /*                   */
      32768
    ), Fn = (
      /*                */
      65536
    ), Rc = (
      /* */
      131072
    ), wv = (
      /*                       */
      1048576
    ), Ja = (
      /*                    */
      2097152
    ), fa = (
      /*                 */
      4194304
    ), cl = (
      /*                */
      8388608
    ), da = (
      /*               */
      16777216
    ), eu = (
      /*              */
      33554432
    ), xr = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      me | hn | 0
    ), _r = zt | me | mt | ca | jr | Za | ol, Ua = me | bn | jr | ol, br = wr | mt, Hn = fa | cl | Ja, tu = rt.ReactCurrentOwner;
    function fl(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (zt | Za)) !== _e && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === ce ? a : null;
    }
    function wc(e) {
      if (e.tag === Ce) {
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
    function xc(e) {
      return e.tag === ce ? e.stateNode.containerInfo : null;
    }
    function Vr(e) {
      return fl(e) === e;
    }
    function Br(e) {
      {
        var t = tu.current;
        if (t !== null && t.tag === xe) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ue(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = Ka(e);
      return u ? fl(u) === u : !1;
    }
    function Pt(e) {
      if (fl(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function pa(e) {
      var t = e.alternate;
      if (!t) {
        var a = fl(e);
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
              return Pt(s), e;
            if (v === u)
              return Pt(s), t;
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
      if (i.tag !== ce)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function id(e) {
      var t = pa(e);
      return t !== null ? ld(t) : null;
    }
    function ld(e) {
      if (e.tag === ae || e.tag === Te)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = ld(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function ud(e) {
      var t = pa(e);
      return t !== null ? _c(t) : null;
    }
    function _c(e) {
      if (e.tag === ae || e.tag === Te)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== Ve) {
          var a = _c(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var od = A.unstable_scheduleCallback, bc = A.unstable_cancelCallback, xv = A.unstable_shouldYield, Wu = A.unstable_requestPaint, mn = A.unstable_now, Km = A.unstable_getCurrentPriorityLevel, dl = A.unstable_ImmediatePriority, Gu = A.unstable_UserBlockingPriority, pl = A.unstable_NormalPriority, _v = A.unstable_LowPriority, vl = A.unstable_IdlePriority, bv = A.unstable_yieldValue, Dc = A.unstable_setDisableYieldValue, Mi = null, fn = null, Z = null, va = !1, Pr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function sd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Xe && (e = Ie({}, e, {
          getLaneLabelMap: hl,
          injectProfilingHooks: Ni
        })), Mi = t.inject(e), fn = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Xu(e, t) {
      if (fn && typeof fn.onScheduleFiberRoot == "function")
        try {
          fn.onScheduleFiberRoot(Mi, e, t);
        } catch (a) {
          va || (va = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function ha(e, t) {
      if (fn && typeof fn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Fe) === Fe;
          if (ht) {
            var i;
            switch (t) {
              case Qr:
                i = dl;
                break;
              case ai:
                i = Gu;
                break;
              case Ha:
                i = pl;
                break;
              case Ds:
                i = vl;
                break;
              default:
                i = pl;
                break;
            }
            fn.onCommitFiberRoot(Mi, e, i, a);
          }
        } catch (u) {
          va || (va = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function nu(e) {
      if (fn && typeof fn.onPostCommitFiberRoot == "function")
        try {
          fn.onPostCommitFiberRoot(Mi, e);
        } catch (t) {
          va || (va = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function cd(e) {
      if (fn && typeof fn.onCommitFiberUnmount == "function")
        try {
          fn.onCommitFiberUnmount(Mi, e);
        } catch (t) {
          va || (va = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Tn(e) {
      if (typeof bv == "function" && (Dc(e), tn(e)), fn && typeof fn.setStrictMode == "function")
        try {
          fn.setStrictMode(Mi, e);
        } catch (t) {
          va || (va = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Ni(e) {
      Z = e;
    }
    function hl() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < gs; a++) {
          var i = Jm(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function fd(e) {
      Z !== null && typeof Z.markCommitStarted == "function" && Z.markCommitStarted(e);
    }
    function dd() {
      Z !== null && typeof Z.markCommitStopped == "function" && Z.markCommitStopped();
    }
    function $r(e) {
      Z !== null && typeof Z.markComponentRenderStarted == "function" && Z.markComponentRenderStarted(e);
    }
    function Yr() {
      Z !== null && typeof Z.markComponentRenderStopped == "function" && Z.markComponentRenderStopped();
    }
    function kc(e) {
      Z !== null && typeof Z.markComponentPassiveEffectMountStarted == "function" && Z.markComponentPassiveEffectMountStarted(e);
    }
    function Dv() {
      Z !== null && typeof Z.markComponentPassiveEffectMountStopped == "function" && Z.markComponentPassiveEffectMountStopped();
    }
    function Oc(e) {
      Z !== null && typeof Z.markComponentPassiveEffectUnmountStarted == "function" && Z.markComponentPassiveEffectUnmountStarted(e);
    }
    function kv() {
      Z !== null && typeof Z.markComponentPassiveEffectUnmountStopped == "function" && Z.markComponentPassiveEffectUnmountStopped();
    }
    function ms(e) {
      Z !== null && typeof Z.markComponentLayoutEffectMountStarted == "function" && Z.markComponentLayoutEffectMountStarted(e);
    }
    function ei() {
      Z !== null && typeof Z.markComponentLayoutEffectMountStopped == "function" && Z.markComponentLayoutEffectMountStopped();
    }
    function qu(e) {
      Z !== null && typeof Z.markComponentLayoutEffectUnmountStarted == "function" && Z.markComponentLayoutEffectUnmountStarted(e);
    }
    function Ku() {
      Z !== null && typeof Z.markComponentLayoutEffectUnmountStopped == "function" && Z.markComponentLayoutEffectUnmountStopped();
    }
    function ru(e, t, a) {
      Z !== null && typeof Z.markComponentErrored == "function" && Z.markComponentErrored(e, t, a);
    }
    function pd(e, t, a) {
      Z !== null && typeof Z.markComponentSuspended == "function" && Z.markComponentSuspended(e, t, a);
    }
    function Zu(e) {
      Z !== null && typeof Z.markLayoutEffectsStarted == "function" && Z.markLayoutEffectsStarted(e);
    }
    function Ov() {
      Z !== null && typeof Z.markLayoutEffectsStopped == "function" && Z.markLayoutEffectsStopped();
    }
    function vd(e) {
      Z !== null && typeof Z.markPassiveEffectsStarted == "function" && Z.markPassiveEffectsStarted(e);
    }
    function Jt() {
      Z !== null && typeof Z.markPassiveEffectsStopped == "function" && Z.markPassiveEffectsStopped();
    }
    function ys(e) {
      Z !== null && typeof Z.markRenderStarted == "function" && Z.markRenderStarted(e);
    }
    function hd() {
      Z !== null && typeof Z.markRenderYielded == "function" && Z.markRenderYielded();
    }
    function Lc() {
      Z !== null && typeof Z.markRenderStopped == "function" && Z.markRenderStopped();
    }
    function Mc(e) {
      Z !== null && typeof Z.markRenderScheduled == "function" && Z.markRenderScheduled(e);
    }
    function md(e, t) {
      Z !== null && typeof Z.markForceUpdateScheduled == "function" && Z.markForceUpdateScheduled(e, t);
    }
    function zi(e, t) {
      Z !== null && typeof Z.markStateUpdateScheduled == "function" && Z.markStateUpdateScheduled(e, t);
    }
    var K = (
      /*                         */
      0
    ), we = (
      /*                 */
      1
    ), Ae = (
      /*                    */
      2
    ), $t = (
      /*               */
      8
    ), Dr = (
      /*              */
      16
    ), Ju = Math.clz32 ? Math.clz32 : yd, Zm = Math.log, Xn = Math.LN2;
    function yd(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Zm(t) / Xn | 0) | 0;
    }
    var gs = 31, P = (
      /*                        */
      0
    ), Ut = (
      /*                          */
      0
    ), ge = (
      /*                        */
      1
    ), ti = (
      /*    */
      2
    ), Aa = (
      /*             */
      4
    ), Ui = (
      /*            */
      8
    ), Fa = (
      /*                     */
      16
    ), eo = (
      /*                */
      32
    ), au = (
      /*                       */
      4194240
    ), to = (
      /*                        */
      64
    ), Nc = (
      /*                        */
      128
    ), zc = (
      /*                        */
      256
    ), Uc = (
      /*                        */
      512
    ), Ac = (
      /*                        */
      1024
    ), iu = (
      /*                        */
      2048
    ), Fc = (
      /*                        */
      4096
    ), no = (
      /*                        */
      8192
    ), ro = (
      /*                        */
      16384
    ), Hc = (
      /*                       */
      32768
    ), Ss = (
      /*                       */
      65536
    ), jc = (
      /*                       */
      131072
    ), Vc = (
      /*                       */
      262144
    ), Bc = (
      /*                       */
      524288
    ), Pc = (
      /*                       */
      1048576
    ), Es = (
      /*                       */
      2097152
    ), Cs = (
      /*                            */
      130023424
    ), lu = (
      /*                             */
      4194304
    ), $c = (
      /*                             */
      8388608
    ), gd = (
      /*                             */
      16777216
    ), Yc = (
      /*                             */
      33554432
    ), Sd = (
      /*                             */
      67108864
    ), Lv = lu, ao = (
      /*          */
      134217728
    ), Ed = (
      /*                          */
      268435455
    ), io = (
      /*               */
      268435456
    ), ni = (
      /*                        */
      536870912
    ), Ir = (
      /*                   */
      1073741824
    );
    function Jm(e) {
      {
        if (e & ge)
          return "Sync";
        if (e & ti)
          return "InputContinuousHydration";
        if (e & Aa)
          return "InputContinuous";
        if (e & Ui)
          return "DefaultHydration";
        if (e & Fa)
          return "Default";
        if (e & eo)
          return "TransitionHydration";
        if (e & au)
          return "Transition";
        if (e & Cs)
          return "Retry";
        if (e & ao)
          return "SelectiveHydration";
        if (e & io)
          return "IdleHydration";
        if (e & ni)
          return "Idle";
        if (e & Ir)
          return "Offscreen";
      }
    }
    var At = -1, kr = to, lo = lu;
    function ml(e) {
      switch (yl(e)) {
        case ge:
          return ge;
        case ti:
          return ti;
        case Aa:
          return Aa;
        case Ui:
          return Ui;
        case Fa:
          return Fa;
        case eo:
          return eo;
        case to:
        case Nc:
        case zc:
        case Uc:
        case Ac:
        case iu:
        case Fc:
        case no:
        case ro:
        case Hc:
        case Ss:
        case jc:
        case Vc:
        case Bc:
        case Pc:
        case Es:
          return e & au;
        case lu:
        case $c:
        case gd:
        case Yc:
        case Sd:
          return e & Cs;
        case ao:
          return ao;
        case io:
          return io;
        case ni:
          return ni;
        case Ir:
          return Ir;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Ts(e, t) {
      var a = e.pendingLanes;
      if (a === P)
        return P;
      var i = P, u = e.suspendedLanes, s = e.pingedLanes, f = a & Ed;
      if (f !== P) {
        var p = f & ~u;
        if (p !== P)
          i = ml(p);
        else {
          var v = f & s;
          v !== P && (i = ml(v));
        }
      } else {
        var y = a & ~u;
        y !== P ? i = ml(y) : s !== P && (i = ml(s));
      }
      if (i === P)
        return P;
      if (t !== P && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === P) {
        var g = yl(i), x = yl(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= x || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === Fa && (x & au) !== P
        )
          return t;
      }
      (i & Aa) !== P && (i |= a & Fa);
      var R = e.entangledLanes;
      if (R !== P)
        for (var M = e.entanglements, z = i & R; z > 0; ) {
          var F = gl(z), J = 1 << F;
          i |= M[F], z &= ~J;
        }
      return i;
    }
    function Mv(e, t) {
      for (var a = e.eventTimes, i = At; t > 0; ) {
        var u = gl(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Nv(e, t) {
      switch (e) {
        case ge:
        case ti:
        case Aa:
          return t + 250;
        case Ui:
        case Fa:
        case eo:
        case to:
        case Nc:
        case zc:
        case Uc:
        case Ac:
        case iu:
        case Fc:
        case no:
        case ro:
        case Hc:
        case Ss:
        case jc:
        case Vc:
        case Bc:
        case Pc:
        case Es:
          return t + 5e3;
        case lu:
        case $c:
        case gd:
        case Yc:
        case Sd:
          return At;
        case ao:
        case io:
        case ni:
        case Ir:
          return At;
        default:
          return S("Should have found matching lanes. This is a bug in React."), At;
      }
    }
    function Cd(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = gl(f), v = 1 << p, y = s[p];
        y === At ? ((v & i) === P || (v & u) !== P) && (s[p] = Nv(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function uo(e) {
      return ml(e.pendingLanes);
    }
    function Rs(e) {
      var t = e.pendingLanes & ~Ir;
      return t !== P ? t : t & Ir ? Ir : P;
    }
    function Td(e) {
      return (e & ge) !== P;
    }
    function Rd(e) {
      return (e & Ed) !== P;
    }
    function wd(e) {
      return (e & Cs) === e;
    }
    function zv(e) {
      var t = ge | Aa | Fa;
      return (e & t) === P;
    }
    function Uv(e) {
      return (e & au) === e;
    }
    function ws(e, t) {
      var a = ti | Aa | Ui | Fa;
      return (t & a) !== P;
    }
    function Av(e, t) {
      return (t & e.expiredLanes) !== P;
    }
    function Fv(e) {
      return (e & au) !== P;
    }
    function tr() {
      var e = kr;
      return kr <<= 1, (kr & au) === P && (kr = to), e;
    }
    function nr() {
      var e = lo;
      return lo <<= 1, (lo & Cs) === P && (lo = lu), e;
    }
    function yl(e) {
      return e & -e;
    }
    function oo(e) {
      return yl(e);
    }
    function gl(e) {
      return 31 - Ju(e);
    }
    function Ic(e) {
      return gl(e);
    }
    function Or(e, t) {
      return (e & t) !== P;
    }
    function Sl(e, t) {
      return (e & t) === t;
    }
    function $e(e, t) {
      return e | t;
    }
    function so(e, t) {
      return e & ~t;
    }
    function xd(e, t) {
      return e & t;
    }
    function ey(e) {
      return e;
    }
    function _d(e, t) {
      return e !== Ut && e < t ? e : t;
    }
    function xs(e) {
      for (var t = [], a = 0; a < gs; a++)
        t.push(e);
      return t;
    }
    function co(e, t, a) {
      e.pendingLanes |= t, t !== ni && (e.suspendedLanes = P, e.pingedLanes = P);
      var i = e.eventTimes, u = Ic(t);
      i[u] = a;
    }
    function bd(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = gl(i), s = 1 << u;
        a[u] = At, i &= ~s;
      }
    }
    function _s(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function ty(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = P, e.pingedLanes = P, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = gl(f), v = 1 << p;
        i[p] = P, u[p] = At, s[p] = At, f &= ~v;
      }
    }
    function Qc(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = gl(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Dd(e, t) {
      var a = yl(t), i;
      switch (a) {
        case Aa:
          i = ti;
          break;
        case Fa:
          i = Ui;
          break;
        case to:
        case Nc:
        case zc:
        case Uc:
        case Ac:
        case iu:
        case Fc:
        case no:
        case ro:
        case Hc:
        case Ss:
        case jc:
        case Vc:
        case Bc:
        case Pc:
        case Es:
        case lu:
        case $c:
        case gd:
        case Yc:
        case Sd:
          i = eo;
          break;
        case ni:
          i = io;
          break;
        default:
          i = Ut;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Ut ? Ut : i;
    }
    function kd(e, t, a) {
      if (Pr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Ic(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function bs(e, t) {
      if (Pr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = Ic(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function ri(e, t) {
      return null;
    }
    var Qr = ge, ai = Aa, Ha = Fa, Ds = ni, fo = Ut;
    function rr() {
      return fo;
    }
    function dt(e) {
      fo = e;
    }
    function ny(e, t) {
      var a = fo;
      try {
        return fo = e, t();
      } finally {
        fo = a;
      }
    }
    function ry(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Wc(e, t) {
      return e > t ? e : t;
    }
    function Dn(e, t) {
      return e !== 0 && e < t;
    }
    function Hv(e) {
      var t = yl(e);
      return Dn(Qr, t) ? Dn(ai, t) ? Rd(t) ? Ha : Ds : ai : Qr;
    }
    function ue(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var uu;
    function Od(e) {
      uu = e;
    }
    function jv(e) {
      uu(e);
    }
    var Ld;
    function ks(e) {
      Ld = e;
    }
    var Os;
    function Md(e) {
      Os = e;
    }
    var Nd;
    function Vv(e) {
      Nd = e;
    }
    var zd;
    function Ud(e) {
      zd = e;
    }
    var Ls = !1, yn = [], kn = null, ar = null, Ai = null, po = /* @__PURE__ */ new Map(), ir = /* @__PURE__ */ new Map(), Fi = [], ii = [
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
    function ay(e) {
      return ii.indexOf(e) > -1;
    }
    function Bv(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Ad(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          kn = null;
          break;
        case "dragenter":
        case "dragleave":
          ar = null;
          break;
        case "mouseover":
        case "mouseout":
          Ai = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          po.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          ir.delete(i);
          break;
        }
      }
    }
    function vo(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = Bv(t, a, i, u, s);
        if (t !== null) {
          var p = Co(t);
          p !== null && Ld(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function Pv(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return kn = vo(kn, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return ar = vo(ar, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return Ai = vo(Ai, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return po.set(y, vo(po.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, x = g.pointerId;
          return ir.set(x, vo(ir.get(x) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function $v(e) {
      var t = Qs(e.target);
      if (t !== null) {
        var a = fl(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Ce) {
            var u = wc(a);
            if (u !== null) {
              e.blockedOn = u, zd(e.priority, function() {
                Os(a);
              });
              return;
            }
          } else if (i === ce) {
            var s = a.stateNode;
            if (ue(s)) {
              e.blockedOn = xc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Gc(e) {
      for (var t = Nd(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Fi.length && Dn(t, Fi[i].priority); i++)
        ;
      Fi.splice(i, 0, a), i === 0 && $v(a);
    }
    function ho(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Us(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          Gm(s), u.target.dispatchEvent(s), gv();
        } else {
          var f = Co(i);
          return f !== null && Ld(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Wr(e, t, a) {
      ho(e) && a.delete(t);
    }
    function pt() {
      Ls = !1, kn !== null && ho(kn) && (kn = null), ar !== null && ho(ar) && (ar = null), Ai !== null && ho(Ai) && (Ai = null), po.forEach(Wr), ir.forEach(Wr);
    }
    function ln(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Ls || (Ls = !0, A.unstable_scheduleCallback(A.unstable_NormalPriority, pt)));
    }
    function Wt(e) {
      if (yn.length > 0) {
        ln(yn[0], e);
        for (var t = 1; t < yn.length; t++) {
          var a = yn[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      kn !== null && ln(kn, e), ar !== null && ln(ar, e), Ai !== null && ln(Ai, e);
      var i = function(p) {
        return ln(p, e);
      };
      po.forEach(i), ir.forEach(i);
      for (var u = 0; u < Fi.length; u++) {
        var s = Fi[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Fi.length > 0; ) {
        var f = Fi[0];
        if (f.blockedOn !== null)
          break;
        $v(f), f.blockedOn === null && Fi.shift();
      }
    }
    var un = rt.ReactCurrentBatchConfig, lr = !0;
    function ou(e) {
      lr = !!e;
    }
    function Rn() {
      return lr;
    }
    function Ms(e, t, a) {
      var i = cu(t), u;
      switch (i) {
        case Qr:
          u = su;
          break;
        case ai:
          u = Xc;
          break;
        case Ha:
        default:
          u = Ns;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function su(e, t, a, i) {
      var u = rr(), s = un.transition;
      un.transition = null;
      try {
        dt(Qr), Ns(e, t, a, i);
      } finally {
        dt(u), un.transition = s;
      }
    }
    function Xc(e, t, a, i) {
      var u = rr(), s = un.transition;
      un.transition = null;
      try {
        dt(ai), Ns(e, t, a, i);
      } finally {
        dt(u), un.transition = s;
      }
    }
    function Ns(e, t, a, i) {
      lr && zs(e, t, a, i);
    }
    function zs(e, t, a, i) {
      var u = Us(e, t, a, i);
      if (u === null) {
        Ry(e, t, i, jn, a), Ad(e, i);
        return;
      }
      if (Pv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Ad(e, i), t & ss && ay(e)) {
        for (; u !== null; ) {
          var s = Co(u);
          s !== null && jv(s);
          var f = Us(e, t, a, i);
          if (f === null && Ry(e, t, i, jn, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      Ry(e, t, i, null, a);
    }
    var jn = null;
    function Us(e, t, a, i) {
      jn = null;
      var u = Nt(i), s = Qs(u);
      if (s !== null) {
        var f = fl(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Ce) {
            var v = wc(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === ce) {
            var y = f.stateNode;
            if (ue(y))
              return xc(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return jn = s, null;
    }
    function cu(e) {
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
          return Qr;
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
          return ai;
        case "message": {
          var t = Km();
          switch (t) {
            case dl:
              return Qr;
            case Gu:
              return ai;
            case pl:
            case _v:
              return Ha;
            case vl:
              return Ds;
            default:
              return Ha;
          }
        }
        default:
          return Ha;
      }
    }
    function Hi(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function qc(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Fd(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function El(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Cl = null, li = null, Tl = null;
    function As(e) {
      return Cl = e, li = Hs(), !0;
    }
    function Hd() {
      Cl = null, li = null, Tl = null;
    }
    function Fs() {
      if (Tl)
        return Tl;
      var e, t = li, a = t.length, i, u = Hs(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Tl = u.slice(e, p), Tl;
    }
    function Hs() {
      return "value" in Cl ? Cl.value : Cl.textContent;
    }
    function On(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function ja() {
      return !0;
    }
    function ma() {
      return !1;
    }
    function Ft(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = ja : this.isDefaultPrevented = ma, this.isPropagationStopped = ma, this;
      }
      return Ie(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = ja);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = ja);
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
        isPersistent: ja
      }), t;
    }
    var fu = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, js = Ft(fu), du = Ie({}, fu, {
      view: 0,
      detail: 0
    }), iy = Ft(du), ui, Kc, pu;
    function vu(e) {
      e !== pu && (pu && e.type === "mousemove" ? (ui = e.screenX - pu.screenX, Kc = e.screenY - pu.screenY) : (ui = 0, Kc = 0), pu = e);
    }
    var mo = Ie({}, du, {
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
      getModifierState: Vd,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (vu(e), ui);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Kc;
      }
    }), Rl = Ft(mo), Yv = Ie({}, mo, {
      dataTransfer: 0
    }), Iv = Ft(Yv), jd = Ie({}, du, {
      relatedTarget: 0
    }), yo = Ft(jd), ly = Ie({}, fu, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), uy = Ft(ly), Qv = Ie({}, fu, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Wv = Ft(Qv), hu = Ie({}, fu, {
      data: 0
    }), Gv = Ft(hu), go = Gv, Xv = {
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
    }, on = {
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
    function oy(e) {
      if (e.key) {
        var t = Xv[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = On(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? on[e.keyCode] || "Unidentified" : "";
    }
    var qv = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function sy(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = qv[e];
      return i ? !!a[i] : !1;
    }
    function Vd(e) {
      return sy;
    }
    var Kv = Ie({}, du, {
      key: oy,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Vd,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? On(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? On(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Zv = Ft(Kv), cy = Ie({}, mo, {
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
    }), Gr = Ft(cy), Bd = Ie({}, du, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Vd
    }), fy = Ft(Bd), wl = Ie({}, fu, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Zc = Ft(wl), mu = Ie({}, mo, {
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
    }), Jc = Ft(mu), Pd = [9, 13, 27, 32], ef = 229, $d = vn && "CompositionEvent" in window, yu = null;
    vn && "documentMode" in document && (yu = document.documentMode);
    var dy = vn && "TextEvent" in window && !yu, Yd = vn && (!$d || yu && yu > 8 && yu <= 11), Id = 32, Vs = String.fromCharCode(Id);
    function tf() {
      ta("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ta("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ta("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ta("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Qd = !1;
    function Wd(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function py(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Jv(e, t) {
      return e === "keydown" && t.keyCode === ef;
    }
    function nf(e, t) {
      switch (e) {
        case "keyup":
          return Pd.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== ef;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Bs(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function rf(e) {
      return e.locale === "ko";
    }
    var ji = !1;
    function eh(e, t, a, i, u) {
      var s, f;
      if ($d ? s = py(t) : ji ? nf(t, i) && (s = "onCompositionEnd") : Jv(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Yd && !rf(i) && (!ji && s === "onCompositionStart" ? ji = As(u) : s === "onCompositionEnd" && ji && (f = Fs()));
      var p = ih(a, s);
      if (p.length > 0) {
        var v = new Gv(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = Bs(i);
          y !== null && (v.data = y);
        }
      }
    }
    function vy(e, t) {
      switch (e) {
        case "compositionend":
          return Bs(t);
        case "keypress":
          var a = t.which;
          return a !== Id ? null : (Qd = !0, Vs);
        case "textInput":
          var i = t.data;
          return i === Vs && Qd ? null : i;
        default:
          return null;
      }
    }
    function af(e, t) {
      if (ji) {
        if (e === "compositionend" || !$d && nf(e, t)) {
          var a = Fs();
          return Hd(), ji = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Wd(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Yd && !rf(t) ? null : t.data;
        default:
          return null;
      }
    }
    function hy(e, t, a, i, u) {
      var s;
      if (dy ? s = vy(t, i) : s = af(t, i), !s)
        return null;
      var f = ih(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new go("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function Ps(e, t, a, i, u, s, f) {
      eh(e, t, a, i, u), hy(e, t, a, i, u);
    }
    var my = {
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
    function $s(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!my[e.type] : t === "textarea";
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
    function n(e) {
      if (!vn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function r() {
      ta("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function l(e, t, a, i) {
      Iu(i);
      var u = ih(t, "onChange");
      if (u.length > 0) {
        var s = new js("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var o = null, c = null;
    function d(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function m(e) {
      var t = [];
      l(t, c, e, Nt(e)), fs(E, t);
    }
    function E(e) {
      w0(e, 0);
    }
    function T(e) {
      var t = ff(e);
      if (Hu(t))
        return e;
    }
    function N(e, t) {
      if (e === "change")
        return t;
    }
    var Y = !1;
    vn && (Y = n("input") && (!document.documentMode || document.documentMode > 9));
    function I(e, t) {
      o = e, c = t, o.attachEvent("onpropertychange", re);
    }
    function $() {
      o && (o.detachEvent("onpropertychange", re), o = null, c = null);
    }
    function re(e) {
      e.propertyName === "value" && T(c) && m(e);
    }
    function fe(e, t, a) {
      e === "focusin" ? ($(), I(t, a)) : e === "focusout" && $();
    }
    function he(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return T(c);
    }
    function dn(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function b(e, t) {
      if (e === "click")
        return T(t);
    }
    function w(e, t) {
      if (e === "input" || e === "change")
        return T(t);
    }
    function O(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Le(e, "number", e.value);
    }
    function G(e, t, a, i, u, s, f) {
      var p = a ? ff(a) : window, v, y;
      if (d(p) ? v = N : $s(p) ? Y ? v = w : (v = he, y = fe) : dn(p) && (v = b), v) {
        var g = v(t, a);
        if (g) {
          l(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && O(p);
    }
    function ye() {
      Ar("onMouseEnter", ["mouseout", "mouseover"]), Ar("onMouseLeave", ["mouseout", "mouseover"]), Ar("onPointerEnter", ["pointerout", "pointerover"]), Ar("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function ke(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !Sv(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (Qs(y) || up(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var x = u.ownerDocument;
          x ? g = x.defaultView || x.parentWindow : g = window;
        }
        var R, M;
        if (v) {
          var z = i.relatedTarget || i.toElement;
          if (R = a, M = z ? Qs(z) : null, M !== null) {
            var F = fl(M);
            (M !== F || M.tag !== ae && M.tag !== Te) && (M = null);
          }
        } else
          R = null, M = a;
        if (R !== M) {
          var J = Rl, be = "onMouseLeave", Ee = "onMouseEnter", ut = "mouse";
          (t === "pointerout" || t === "pointerover") && (J = Gr, be = "onPointerLeave", Ee = "onPointerEnter", ut = "pointer");
          var Ze = R == null ? g : ff(R), D = M == null ? g : ff(M), H = new J(be, ut + "leave", R, i, u);
          H.target = Ze, H.relatedTarget = D;
          var k = null, Q = Qs(u);
          if (Q === a) {
            var oe = new J(Ee, ut + "enter", M, i, u);
            oe.target = D, oe.relatedTarget = Ze, k = oe;
          }
          DT(e, H, k, R, M);
        }
      }
    }
    function Oe(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Se = typeof Object.is == "function" ? Object.is : Oe;
    function sn(e, t) {
      if (Se(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!qn.call(t, s) || !Se(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function vt(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function xl(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function th(e, t) {
      for (var a = vt(e), i = 0, u = 0; a; ) {
        if (a.nodeType === xi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = vt(xl(a));
      }
    }
    function uT(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return oT(e, u, s, f, p);
    }
    function oT(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, x = null;
      e: for (; ; ) {
        for (var R = null; g === t && (a === 0 || g.nodeType === xi) && (f = s + a), g === i && (u === 0 || g.nodeType === xi) && (p = s + u), g.nodeType === xi && (s += g.nodeValue.length), (R = g.firstChild) !== null; )
          x = g, g = R;
        for (; ; ) {
          if (g === e)
            break e;
          if (x === t && ++v === a && (f = s), x === i && ++y === u && (p = s), (R = g.nextSibling) !== null)
            break;
          g = x, x = g.parentNode;
        }
        g = R;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function sT(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = th(e, f), g = th(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var x = a.createRange();
          x.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(x), u.extend(g.node, g.offset)) : (x.setEnd(g.node, g.offset), u.addRange(x));
        }
      }
    }
    function d0(e) {
      return e && e.nodeType === xi;
    }
    function p0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : d0(e) ? !1 : d0(t) ? p0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function cT(e) {
      return e && e.ownerDocument && p0(e.ownerDocument.documentElement, e);
    }
    function fT(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function v0() {
      for (var e = window, t = Xa(); t instanceof e.HTMLIFrameElement; ) {
        if (fT(t))
          e = t.contentWindow;
        else
          return t;
        t = Xa(e.document);
      }
      return t;
    }
    function yy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function dT() {
      var e = v0();
      return {
        focusedElem: e,
        selectionRange: yy(e) ? vT(e) : null
      };
    }
    function pT(e) {
      var t = v0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && cT(a)) {
        i !== null && yy(a) && hT(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Rr && u.push({
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
    function vT(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = uT(e), t || {
        start: 0,
        end: 0
      };
    }
    function hT(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : sT(e, t);
    }
    var mT = vn && "documentMode" in document && document.documentMode <= 11;
    function yT() {
      ta("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var lf = null, gy = null, Gd = null, Sy = !1;
    function gT(e) {
      if ("selectionStart" in e && yy(e))
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
    function ST(e) {
      return e.window === e ? e.document : e.nodeType === Fr ? e : e.ownerDocument;
    }
    function h0(e, t, a) {
      var i = ST(a);
      if (!(Sy || lf == null || lf !== Xa(i))) {
        var u = gT(lf);
        if (!Gd || !sn(Gd, u)) {
          Gd = u;
          var s = ih(gy, "onSelect");
          if (s.length > 0) {
            var f = new js("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = lf;
          }
        }
      }
    }
    function ET(e, t, a, i, u, s, f) {
      var p = a ? ff(a) : window;
      switch (t) {
        case "focusin":
          ($s(p) || p.contentEditable === "true") && (lf = p, gy = a, Gd = null);
          break;
        case "focusout":
          lf = null, gy = null, Gd = null;
          break;
        case "mousedown":
          Sy = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Sy = !1, h0(e, i, u);
          break;
        case "selectionchange":
          if (mT)
            break;
        case "keydown":
        case "keyup":
          h0(e, i, u);
      }
    }
    function nh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var uf = {
      animationend: nh("Animation", "AnimationEnd"),
      animationiteration: nh("Animation", "AnimationIteration"),
      animationstart: nh("Animation", "AnimationStart"),
      transitionend: nh("Transition", "TransitionEnd")
    }, Ey = {}, m0 = {};
    vn && (m0 = document.createElement("div").style, "AnimationEvent" in window || (delete uf.animationend.animation, delete uf.animationiteration.animation, delete uf.animationstart.animation), "TransitionEvent" in window || delete uf.transitionend.transition);
    function rh(e) {
      if (Ey[e])
        return Ey[e];
      if (!uf[e])
        return e;
      var t = uf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in m0)
          return Ey[e] = t[a];
      return e;
    }
    var y0 = rh("animationend"), g0 = rh("animationiteration"), S0 = rh("animationstart"), E0 = rh("transitionend"), C0 = /* @__PURE__ */ new Map(), T0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function So(e, t) {
      C0.set(e, t), ta(t, [e]);
    }
    function CT() {
      for (var e = 0; e < T0.length; e++) {
        var t = T0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        So(a, "on" + i);
      }
      So(y0, "onAnimationEnd"), So(g0, "onAnimationIteration"), So(S0, "onAnimationStart"), So("dblclick", "onDoubleClick"), So("focusin", "onFocus"), So("focusout", "onBlur"), So(E0, "onTransitionEnd");
    }
    function TT(e, t, a, i, u, s, f) {
      var p = C0.get(t);
      if (p !== void 0) {
        var v = js, y = t;
        switch (t) {
          case "keypress":
            if (On(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = Zv;
            break;
          case "focusin":
            y = "focus", v = yo;
            break;
          case "focusout":
            y = "blur", v = yo;
            break;
          case "beforeblur":
          case "afterblur":
            v = yo;
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
            v = Rl;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Iv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = fy;
            break;
          case y0:
          case g0:
          case S0:
            v = uy;
            break;
          case E0:
            v = Zc;
            break;
          case "scroll":
            v = iy;
            break;
          case "wheel":
            v = Jc;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Wv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Gr;
            break;
        }
        var g = (s & ss) !== 0;
        {
          var x = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", R = _T(a, p, i.type, g, x);
          if (R.length > 0) {
            var M = new v(p, y, null, i, u);
            e.push({
              event: M,
              listeners: R
            });
          }
        }
      }
    }
    CT(), ye(), r(), yT(), tf();
    function RT(e, t, a, i, u, s, f) {
      TT(e, t, a, i, u, s);
      var p = (s & Wm) === 0;
      p && (ke(e, t, a, i, u), G(e, t, a, i, u), ET(e, t, a, i, u), Ps(e, t, a, i, u));
    }
    var Xd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Cy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Xd));
    function R0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, ad(i, t, void 0, e), e.currentTarget = null;
    }
    function wT(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          R0(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], x = g.instance, R = g.currentTarget, M = g.listener;
          if (x !== i && e.isPropagationStopped())
            return;
          R0(e, M, R), i = x;
        }
    }
    function w0(e, t) {
      for (var a = (t & ss) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        wT(s, f, a);
      }
      Xm();
    }
    function xT(e, t, a, i, u) {
      var s = Nt(a), f = [];
      RT(f, e, i, a, s, t), w0(f, t);
    }
    function en(e, t) {
      Cy.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = tw(t), u = kT(e);
      i.has(u) || (x0(t, e, os, a), i.add(u));
    }
    function Ty(e, t, a) {
      Cy.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= ss), x0(a, e, i, t);
    }
    var ah = "_reactListening" + Math.random().toString(36).slice(2);
    function qd(e) {
      if (!e[ah]) {
        e[ah] = !0, Et.forEach(function(a) {
          a !== "selectionchange" && (Cy.has(a) || Ty(a, !1, e), Ty(a, !0, e));
        });
        var t = e.nodeType === Fr ? e : e.ownerDocument;
        t !== null && (t[ah] || (t[ah] = !0, Ty("selectionchange", !1, t)));
      }
    }
    function x0(e, t, a, i, u) {
      var s = Ms(e, t, a), f = void 0;
      ds && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Fd(e, t, s, f) : qc(e, t, s) : f !== void 0 ? El(e, t, s, f) : Hi(e, t, s);
    }
    function _0(e, t) {
      return e === t || e.nodeType === an && e.parentNode === t;
    }
    function Ry(e, t, a, i, u) {
      var s = i;
      if (!(t & Sc) && !(t & os)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === ce || v === Ve) {
              var y = p.stateNode.containerInfo;
              if (_0(y, f))
                break;
              if (v === Ve)
                for (var g = p.return; g !== null; ) {
                  var x = g.tag;
                  if (x === ce || x === Ve) {
                    var R = g.stateNode.containerInfo;
                    if (_0(R, f))
                      return;
                  }
                  g = g.return;
                }
              for (; y !== null; ) {
                var M = Qs(y);
                if (M === null)
                  return;
                var z = M.tag;
                if (z === ae || z === Te) {
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
      fs(function() {
        return xT(e, t, a, s);
      });
    }
    function Kd(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function _T(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var x = y, R = x.stateNode, M = x.tag;
        if (M === ae && R !== null && (g = R, p !== null)) {
          var z = Zl(y, p);
          z != null && v.push(Kd(y, z, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function ih(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === ae && f !== null) {
          var v = f, y = Zl(u, a);
          y != null && i.unshift(Kd(u, y, v));
          var g = Zl(u, t);
          g != null && i.push(Kd(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function of(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== ae);
      return e || null;
    }
    function bT(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = of(s))
        u++;
      for (var f = 0, p = i; p; p = of(p))
        f++;
      for (; u - f > 0; )
        a = of(a), u--;
      for (; f - u > 0; )
        i = of(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = of(a), i = of(i);
      }
      return null;
    }
    function b0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, x = v.tag;
        if (y !== null && y === i)
          break;
        if (x === ae && g !== null) {
          var R = g;
          if (u) {
            var M = Zl(p, s);
            M != null && f.unshift(Kd(p, M, R));
          } else if (!u) {
            var z = Zl(p, s);
            z != null && f.push(Kd(p, z, R));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function DT(e, t, a, i, u) {
      var s = i && u ? bT(i, u) : null;
      i !== null && b0(e, t, i, s, !1), u !== null && a !== null && b0(e, a, u, s, !0);
    }
    function kT(e, t) {
      return e + "__bubble";
    }
    var ya = !1, Zd = "dangerouslySetInnerHTML", lh = "suppressContentEditableWarning", Eo = "suppressHydrationWarning", D0 = "autoFocus", Ys = "children", Is = "style", uh = "__html", wy, oh, Jd, k0, sh, O0, L0;
    wy = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, oh = function(e, t) {
      Yu(e, t), pv(e, t), ul(e, t, {
        registrationNameDependencies: Ht,
        possibleRegistrationNames: ea
      });
    }, O0 = vn && !document.documentMode, Jd = function(e, t, a) {
      if (!ya) {
        var i = ch(a), u = ch(t);
        u !== i && (ya = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, k0 = function(e) {
      if (!ya) {
        ya = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, sh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, L0 = function(e, t) {
      var a = e.namespaceURI === wi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var OT = /\r\n?/g, LT = /\u0000|\uFFFD/g;
    function ch(e) {
      hi(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(OT, `
`).replace(LT, "");
    }
    function fh(e, t, a, i) {
      var u = ch(t), s = ch(e);
      if (s !== u && (i && (ya || (ya = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && V))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function M0(e) {
      return e.nodeType === Fr ? e : e.ownerDocument;
    }
    function MT() {
    }
    function dh(e) {
      e.onclick = MT;
    }
    function NT(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Is)
            f && Object.freeze(f), uv(t, f);
          else if (s === Zd) {
            var p = f ? f[uh] : void 0;
            p != null && Zp(t, p);
          } else if (s === Ys)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && ns(t, f);
            } else typeof f == "number" && ns(t, "" + f);
          else s === lh || s === Eo || s === D0 || (Ht.hasOwnProperty(s) ? f != null && (typeof f != "function" && sh(s, f), s === "onScroll" && en("scroll", t)) : f != null && Lu(t, s, f, u));
        }
    }
    function zT(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Is ? uv(e, f) : s === Zd ? Zp(e, f) : s === Ys ? ns(e, f) : Lu(e, s, f, i);
      }
    }
    function UT(e, t, a, i) {
      var u, s = M0(a), f, p = i;
      if (p === wi && (p = Vf(e)), p === wi) {
        if (u = Xl(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
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
      return p === wi && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !qn.call(wy, e) && (wy[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function AT(e, t) {
      return M0(t).createTextNode(e);
    }
    function FT(e, t, a, i) {
      var u = Xl(t, a);
      oh(t, a);
      var s;
      switch (t) {
        case "dialog":
          en("cancel", e), en("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          en("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Xd.length; f++)
            en(Xd[f], e);
          s = a;
          break;
        case "source":
          en("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          en("error", e), en("load", e), s = a;
          break;
        case "details":
          en("toggle", e), s = a;
          break;
        case "input":
          C(e, a), s = h(e, a), en("invalid", e);
          break;
        case "option":
          xt(e, a), s = a;
          break;
        case "select":
          ts(e, a), s = es(e, a), en("invalid", e);
          break;
        case "textarea":
          qp(e, a), s = jf(e, a), en("invalid", e);
          break;
        default:
          s = a;
      }
      switch (is(t, s), NT(t, e, i, s, u), t) {
        case "input":
          Ci(e), W(e, a, !1);
          break;
        case "textarea":
          Ci(e), dc(e);
          break;
        case "option":
          _t(e, a);
          break;
        case "select":
          Hf(e, a);
          break;
        default:
          typeof s.onClick == "function" && dh(e);
          break;
      }
    }
    function HT(e, t, a, i, u) {
      oh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = h(e, a), p = h(e, i), s = [];
          break;
        case "select":
          f = es(e, a), p = es(e, i), s = [];
          break;
        case "textarea":
          f = jf(e, a), p = jf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && dh(e);
          break;
      }
      is(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Is) {
            var x = f[v];
            for (y in x)
              x.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else v === Zd || v === Ys || v === lh || v === Eo || v === D0 || (Ht.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var R = p[v], M = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || R === M || R == null && M == null))
          if (v === Is)
            if (R && Object.freeze(R), M) {
              for (y in M)
                M.hasOwnProperty(y) && (!R || !R.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in R)
                R.hasOwnProperty(y) && M[y] !== R[y] && (g || (g = {}), g[y] = R[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = R;
          else if (v === Zd) {
            var z = R ? R[uh] : void 0, F = M ? M[uh] : void 0;
            z != null && F !== z && (s = s || []).push(v, z);
          } else v === Ys ? (typeof R == "string" || typeof R == "number") && (s = s || []).push(v, "" + R) : v === lh || v === Eo || (Ht.hasOwnProperty(v) ? (R != null && (typeof R != "function" && sh(v, R), v === "onScroll" && en("scroll", e)), !s && M !== R && (s = [])) : (s = s || []).push(v, R));
      }
      return g && (ov(g, p[Is]), (s = s || []).push(Is, g)), s;
    }
    function jT(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && L(e, u);
      var s = Xl(a, i), f = Xl(a, u);
      switch (zT(e, t, s, f), a) {
        case "input":
          U(e, u);
          break;
        case "textarea":
          Kp(e, u);
          break;
        case "select":
          Am(e, u);
          break;
      }
    }
    function VT(e) {
      {
        var t = e.toLowerCase();
        return mc.hasOwnProperty(t) && mc[t] || null;
      }
    }
    function BT(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = Xl(t, a), oh(t, a), t) {
        case "dialog":
          en("cancel", e), en("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          en("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Xd.length; y++)
            en(Xd[y], e);
          break;
        case "source":
          en("error", e);
          break;
        case "img":
        case "image":
        case "link":
          en("error", e), en("load", e);
          break;
        case "details":
          en("toggle", e);
          break;
        case "input":
          C(e, a), en("invalid", e);
          break;
        case "option":
          xt(e, a);
          break;
        case "select":
          ts(e, a), en("invalid", e);
          break;
        case "textarea":
          qp(e, a), en("invalid", e);
          break;
      }
      is(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, x = 0; x < g.length; x++) {
          var R = g[x].name.toLowerCase();
          switch (R) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[x].name);
          }
        }
      }
      var M = null;
      for (var z in a)
        if (a.hasOwnProperty(z)) {
          var F = a[z];
          if (z === Ys)
            typeof F == "string" ? e.textContent !== F && (a[Eo] !== !0 && fh(e.textContent, F, s, f), M = [Ys, F]) : typeof F == "number" && e.textContent !== "" + F && (a[Eo] !== !0 && fh(e.textContent, F, s, f), M = [Ys, "" + F]);
          else if (Ht.hasOwnProperty(z))
            F != null && (typeof F != "function" && sh(z, F), z === "onScroll" && en("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var J = void 0, be = p && ze ? null : Zn(z);
            if (a[Eo] !== !0) {
              if (!(z === lh || z === Eo || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              z === "value" || z === "checked" || z === "selected")) {
                if (z === Zd) {
                  var Ee = e.innerHTML, ut = F ? F[uh] : void 0;
                  if (ut != null) {
                    var Ze = L0(e, ut);
                    Ze !== Ee && Jd(z, Ee, Ze);
                  }
                } else if (z === Is) {
                  if (v.delete(z), O0) {
                    var D = Qm(F);
                    J = e.getAttribute("style"), D !== J && Jd(z, J, D);
                  }
                } else if (p && !ze)
                  v.delete(z.toLowerCase()), J = Ia(e, z, F), F !== J && Jd(z, J, F);
                else if (!cn(z, be, p) && !jt(z, F, be, p)) {
                  var H = !1;
                  if (be !== null)
                    v.delete(be.attributeName), J = yi(e, z, F, be);
                  else {
                    var k = i;
                    if (k === wi && (k = Vf(t)), k === wi)
                      v.delete(z.toLowerCase());
                    else {
                      var Q = VT(z);
                      Q !== null && Q !== z && (H = !0, v.delete(Q)), v.delete(z);
                    }
                    J = Ia(e, z, F);
                  }
                  var oe = ze;
                  !oe && F !== J && !H && Jd(z, J, F);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[Eo] !== !0 && k0(v), t) {
        case "input":
          Ci(e), W(e, a, !0);
          break;
        case "textarea":
          Ci(e), dc(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && dh(e);
          break;
      }
      return M;
    }
    function PT(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function xy(e, t) {
      {
        if (ya)
          return;
        ya = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function _y(e, t) {
      {
        if (ya)
          return;
        ya = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function by(e, t, a) {
      {
        if (ya)
          return;
        ya = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Dy(e, t) {
      {
        if (t === "" || ya)
          return;
        ya = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function $T(e, t, a) {
      switch (t) {
        case "input":
          pe(e, a);
          return;
        case "textarea":
          Fm(e, a);
          return;
        case "select":
          Gp(e, a);
          return;
      }
    }
    var ep = function() {
    }, tp = function() {
    };
    {
      var YT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], N0 = [
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
      ], IT = N0.concat(["button"]), QT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], z0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      tp = function(e, t) {
        var a = Ie({}, e || z0), i = {
          tag: t
        };
        return N0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), IT.indexOf(t) !== -1 && (a.pTagInButtonScope = null), YT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var WT = function(e, t) {
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
            return QT.indexOf(t) === -1;
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
      }, GT = function(e, t) {
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
      }, U0 = {};
      ep = function(e, t, a) {
        a = a || z0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = WT(e, u) ? null : i, f = s ? null : GT(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!U0[y]) {
            U0[y] = !0;
            var g = e, x = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", x = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var R = "";
              v === "table" && e === "tr" && (R += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, x, R);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var ph = "suppressHydrationWarning", vh = "$", hh = "/$", np = "$?", rp = "$!", XT = "style", ky = null, Oy = null;
    function qT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Fr:
        case Pf: {
          t = i === Fr ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : Bf(null, "");
          break;
        }
        default: {
          var s = i === an ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = Bf(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = tp(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function KT(e, t, a) {
      {
        var i = e, u = Bf(i.namespace, t), s = tp(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function iD(e) {
      return e;
    }
    function ZT(e) {
      ky = Rn(), Oy = dT();
      var t = null;
      return ou(!1), t;
    }
    function JT(e) {
      pT(Oy), ou(ky), ky = null, Oy = null;
    }
    function eR(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (ep(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = tp(f.ancestorInfo, e);
          ep(null, p, v);
        }
        s = f.namespace;
      }
      var y = UT(e, t, a, s);
      return lp(u, y), Hy(y, t), y;
    }
    function tR(e, t) {
      e.appendChild(t);
    }
    function nR(e, t, a, i, u) {
      switch (FT(e, t, a, i), t) {
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
    function rR(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = tp(f.ancestorInfo, t);
          ep(null, p, v);
        }
      }
      return HT(e, t, a, i);
    }
    function Ly(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function aR(e, t, a, i) {
      {
        var u = a;
        ep(null, e, u.ancestorInfo);
      }
      var s = AT(e, t);
      return lp(i, s), s;
    }
    function iR() {
      var e = window.event;
      return e === void 0 ? Ha : cu(e.type);
    }
    var My = typeof setTimeout == "function" ? setTimeout : void 0, lR = typeof clearTimeout == "function" ? clearTimeout : void 0, Ny = -1, A0 = typeof Promise == "function" ? Promise : void 0, uR = typeof queueMicrotask == "function" ? queueMicrotask : typeof A0 < "u" ? function(e) {
      return A0.resolve(null).then(e).catch(oR);
    } : My;
    function oR(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function sR(e, t, a, i) {
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
    function cR(e, t, a, i, u, s) {
      jT(e, t, a, i, u), Hy(e, u);
    }
    function F0(e) {
      ns(e, "");
    }
    function fR(e, t, a) {
      e.nodeValue = a;
    }
    function dR(e, t) {
      e.appendChild(t);
    }
    function pR(e, t) {
      var a;
      e.nodeType === an ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && dh(a);
    }
    function vR(e, t, a) {
      e.insertBefore(t, a);
    }
    function hR(e, t, a) {
      e.nodeType === an ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function mR(e, t) {
      e.removeChild(t);
    }
    function yR(e, t) {
      e.nodeType === an ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function zy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === an) {
          var s = u.data;
          if (s === hh)
            if (i === 0) {
              e.removeChild(u), Wt(t);
              return;
            } else
              i--;
          else (s === vh || s === np || s === rp) && i++;
        }
        a = u;
      } while (a);
      Wt(t);
    }
    function gR(e, t) {
      e.nodeType === an ? zy(e.parentNode, t) : e.nodeType === Rr && zy(e, t), Wt(e);
    }
    function SR(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function ER(e) {
      e.nodeValue = "";
    }
    function CR(e, t) {
      e = e;
      var a = t[XT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = il("display", i);
    }
    function TR(e, t) {
      e.nodeValue = t;
    }
    function RR(e) {
      e.nodeType === Rr ? e.textContent = "" : e.nodeType === Fr && e.documentElement && e.removeChild(e.documentElement);
    }
    function wR(e, t, a) {
      return e.nodeType !== Rr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function xR(e, t) {
      return t === "" || e.nodeType !== xi ? null : e;
    }
    function _R(e) {
      return e.nodeType !== an ? null : e;
    }
    function H0(e) {
      return e.data === np;
    }
    function Uy(e) {
      return e.data === rp;
    }
    function bR(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function DR(e, t) {
      e._reactRetry = t;
    }
    function mh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Rr || t === xi)
          break;
        if (t === an) {
          var a = e.data;
          if (a === vh || a === rp || a === np)
            break;
          if (a === hh)
            return null;
        }
      }
      return e;
    }
    function ap(e) {
      return mh(e.nextSibling);
    }
    function kR(e) {
      return mh(e.firstChild);
    }
    function OR(e) {
      return mh(e.firstChild);
    }
    function LR(e) {
      return mh(e.nextSibling);
    }
    function MR(e, t, a, i, u, s, f) {
      lp(s, e), Hy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & we) !== K;
      return BT(e, t, a, p, i, y, f);
    }
    function NR(e, t, a, i) {
      return lp(a, e), a.mode & we, PT(e, t);
    }
    function zR(e, t) {
      lp(t, e);
    }
    function UR(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === an) {
          var i = t.data;
          if (i === hh) {
            if (a === 0)
              return ap(t);
            a--;
          } else (i === vh || i === rp || i === np) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function j0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === an) {
          var i = t.data;
          if (i === vh || i === rp || i === np) {
            if (a === 0)
              return t;
            a--;
          } else i === hh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function AR(e) {
      Wt(e);
    }
    function FR(e) {
      Wt(e);
    }
    function HR(e) {
      return e !== "head" && e !== "body";
    }
    function jR(e, t, a, i) {
      var u = !0;
      fh(t.nodeValue, a, i, u);
    }
    function VR(e, t, a, i, u, s) {
      if (t[ph] !== !0) {
        var f = !0;
        fh(i.nodeValue, u, s, f);
      }
    }
    function BR(e, t) {
      t.nodeType === Rr ? xy(e, t) : t.nodeType === an || _y(e, t);
    }
    function PR(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Rr ? xy(a, t) : t.nodeType === an || _y(a, t));
      }
    }
    function $R(e, t, a, i, u) {
      (u || t[ph] !== !0) && (i.nodeType === Rr ? xy(a, i) : i.nodeType === an || _y(a, i));
    }
    function YR(e, t, a) {
      by(e, t);
    }
    function IR(e, t) {
      Dy(e, t);
    }
    function QR(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && by(i, t);
      }
    }
    function WR(e, t) {
      {
        var a = e.parentNode;
        a !== null && Dy(a, t);
      }
    }
    function GR(e, t, a, i, u, s) {
      (s || t[ph] !== !0) && by(a, i);
    }
    function XR(e, t, a, i, u) {
      (u || t[ph] !== !0) && Dy(a, i);
    }
    function qR(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function KR(e) {
      qd(e);
    }
    var sf = Math.random().toString(36).slice(2), cf = "__reactFiber$" + sf, Ay = "__reactProps$" + sf, ip = "__reactContainer$" + sf, Fy = "__reactEvents$" + sf, ZR = "__reactListeners$" + sf, JR = "__reactHandles$" + sf;
    function ew(e) {
      delete e[cf], delete e[Ay], delete e[Fy], delete e[ZR], delete e[JR];
    }
    function lp(e, t) {
      t[cf] = e;
    }
    function yh(e, t) {
      t[ip] = e;
    }
    function V0(e) {
      e[ip] = null;
    }
    function up(e) {
      return !!e[ip];
    }
    function Qs(e) {
      var t = e[cf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[ip] || a[cf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = j0(e); u !== null; ) {
              var s = u[cf];
              if (s)
                return s;
              u = j0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Co(e) {
      var t = e[cf] || e[ip];
      return t && (t.tag === ae || t.tag === Te || t.tag === Ce || t.tag === ce) ? t : null;
    }
    function ff(e) {
      if (e.tag === ae || e.tag === Te)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function gh(e) {
      return e[Ay] || null;
    }
    function Hy(e, t) {
      e[Ay] = t;
    }
    function tw(e) {
      var t = e[Fy];
      return t === void 0 && (t = e[Fy] = /* @__PURE__ */ new Set()), t;
    }
    var B0 = {}, P0 = rt.ReactDebugCurrentFrame;
    function Sh(e) {
      if (e) {
        var t = e._owner, a = et(e.type, e._source, t ? t.type : null);
        P0.setExtraStackFrame(a);
      } else
        P0.setExtraStackFrame(null);
    }
    function Vi(e, t, a, i, u) {
      {
        var s = Function.call.bind(qn);
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
            p && !(p instanceof Error) && (Sh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Sh(null)), p instanceof Error && !(p.message in B0) && (B0[p.message] = !0, Sh(u), S("Failed %s type: %s", a, p.message), Sh(null));
          }
      }
    }
    var jy = [], Eh;
    Eh = [];
    var gu = -1;
    function To(e) {
      return {
        current: e
      };
    }
    function Lr(e, t) {
      if (gu < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== Eh[gu] && S("Unexpected Fiber popped."), e.current = jy[gu], jy[gu] = null, Eh[gu] = null, gu--;
    }
    function Mr(e, t, a) {
      gu++, jy[gu] = e.current, Eh[gu] = a, e.current = t;
    }
    var Vy;
    Vy = {};
    var Va = {};
    Object.freeze(Va);
    var Su = To(Va), _l = To(!1), By = Va;
    function df(e, t, a) {
      return a && bl(t) ? By : Su.current;
    }
    function $0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function pf(e, t) {
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
          Vi(i, s, "context", p);
        }
        return u && $0(e, t, s), s;
      }
    }
    function Ch() {
      return _l.current;
    }
    function bl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Th(e) {
      Lr(_l, e), Lr(Su, e);
    }
    function Py(e) {
      Lr(_l, e), Lr(Su, e);
    }
    function Y0(e, t, a) {
      {
        if (Su.current !== Va)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Mr(Su, t, e), Mr(_l, a, e);
      }
    }
    function I0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Ue(e) || "Unknown";
            Vy[s] || (Vy[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Ue(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Ue(e) || "Unknown";
          Vi(u, f, "child context", v);
        }
        return Ie({}, a, f);
      }
    }
    function Rh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || Va;
        return By = Su.current, Mr(Su, a, e), Mr(_l, _l.current, e), !0;
      }
    }
    function Q0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = I0(e, t, By);
          i.__reactInternalMemoizedMergedChildContext = u, Lr(_l, e), Lr(Su, e), Mr(Su, u, e), Mr(_l, a, e);
        } else
          Lr(_l, e), Mr(_l, a, e);
      }
    }
    function nw(e) {
      {
        if (!Vr(e) || e.tag !== xe)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case ce:
              return t.stateNode.context;
            case xe: {
              var a = t.type;
              if (bl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Ro = 0, wh = 1, Eu = null, $y = !1, Yy = !1;
    function W0(e) {
      Eu === null ? Eu = [e] : Eu.push(e);
    }
    function rw(e) {
      $y = !0, W0(e);
    }
    function G0() {
      $y && wo();
    }
    function wo() {
      if (!Yy && Eu !== null) {
        Yy = !0;
        var e = 0, t = rr();
        try {
          var a = !0, i = Eu;
          for (dt(Qr); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Eu = null, $y = !1;
        } catch (s) {
          throw Eu !== null && (Eu = Eu.slice(e + 1)), od(dl, wo), s;
        } finally {
          dt(t), Yy = !1;
        }
      }
      return null;
    }
    var vf = [], hf = 0, xh = null, _h = 0, oi = [], si = 0, Ws = null, Cu = 1, Tu = "";
    function aw(e) {
      return Xs(), (e.flags & wv) !== _e;
    }
    function iw(e) {
      return Xs(), _h;
    }
    function lw() {
      var e = Tu, t = Cu, a = t & ~uw(t);
      return a.toString(32) + e;
    }
    function Gs(e, t) {
      Xs(), vf[hf++] = _h, vf[hf++] = xh, xh = e, _h = t;
    }
    function X0(e, t, a) {
      Xs(), oi[si++] = Cu, oi[si++] = Tu, oi[si++] = Ws, Ws = e;
      var i = Cu, u = Tu, s = bh(i) - 1, f = i & ~(1 << s), p = a + 1, v = bh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, x = (f & g).toString(32), R = f >> y, M = s - y, z = bh(t) + M, F = p << M, J = F | R, be = x + u;
        Cu = 1 << z | J, Tu = be;
      } else {
        var Ee = p << s, ut = Ee | f, Ze = u;
        Cu = 1 << v | ut, Tu = Ze;
      }
    }
    function Iy(e) {
      Xs();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Gs(e, a), X0(e, a, i);
      }
    }
    function bh(e) {
      return 32 - Ju(e);
    }
    function uw(e) {
      return 1 << bh(e) - 1;
    }
    function Qy(e) {
      for (; e === xh; )
        xh = vf[--hf], vf[hf] = null, _h = vf[--hf], vf[hf] = null;
      for (; e === Ws; )
        Ws = oi[--si], oi[si] = null, Tu = oi[--si], oi[si] = null, Cu = oi[--si], oi[si] = null;
    }
    function ow() {
      return Xs(), Ws !== null ? {
        id: Cu,
        overflow: Tu
      } : null;
    }
    function sw(e, t) {
      Xs(), oi[si++] = Cu, oi[si++] = Tu, oi[si++] = Ws, Cu = t.id, Tu = t.overflow, Ws = e;
    }
    function Xs() {
      or() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var ur = null, ci = null, Bi = !1, qs = !1, xo = null;
    function cw() {
      Bi && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function q0() {
      qs = !0;
    }
    function fw() {
      return qs;
    }
    function dw(e) {
      var t = e.stateNode.containerInfo;
      return ci = OR(t), ur = e, Bi = !0, xo = null, qs = !1, !0;
    }
    function pw(e, t, a) {
      return ci = LR(t), ur = e, Bi = !0, xo = null, qs = !1, a !== null && sw(e, a), !0;
    }
    function K0(e, t) {
      switch (e.tag) {
        case ce: {
          BR(e.stateNode.containerInfo, t);
          break;
        }
        case ae: {
          var a = (e.mode & we) !== K;
          $R(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case Ce: {
          var i = e.memoizedState;
          i.dehydrated !== null && PR(i.dehydrated, t);
          break;
        }
      }
    }
    function Z0(e, t) {
      K0(e, t);
      var a = yb();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= mt) : i.push(a);
    }
    function Wy(e, t) {
      {
        if (qs)
          return;
        switch (e.tag) {
          case ce: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case ae:
                var i = t.type;
                t.pendingProps, YR(a, i);
                break;
              case Te:
                var u = t.pendingProps;
                IR(a, u);
                break;
            }
            break;
          }
          case ae: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case ae: {
                var v = t.type, y = t.pendingProps, g = (e.mode & we) !== K;
                GR(
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
              case Te: {
                var x = t.pendingProps, R = (e.mode & we) !== K;
                XR(
                  s,
                  f,
                  p,
                  x,
                  // TODO: Delete this argument when we remove the legacy root API.
                  R
                );
                break;
              }
            }
            break;
          }
          case Ce: {
            var M = e.memoizedState, z = M.dehydrated;
            if (z !== null) switch (t.tag) {
              case ae:
                var F = t.type;
                t.pendingProps, QR(z, F);
                break;
              case Te:
                var J = t.pendingProps;
                WR(z, J);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function J0(e, t) {
      t.flags = t.flags & ~Za | zt, Wy(e, t);
    }
    function eE(e, t) {
      switch (e.tag) {
        case ae: {
          var a = e.type;
          e.pendingProps;
          var i = wR(t, a);
          return i !== null ? (e.stateNode = i, ur = e, ci = kR(i), !0) : !1;
        }
        case Te: {
          var u = e.pendingProps, s = xR(t, u);
          return s !== null ? (e.stateNode = s, ur = e, ci = null, !0) : !1;
        }
        case Ce: {
          var f = _R(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: ow(),
              retryLane: Ir
            };
            e.memoizedState = p;
            var v = gb(f);
            return v.return = e, e.child = v, ur = e, ci = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Gy(e) {
      return (e.mode & we) !== K && (e.flags & Fe) === _e;
    }
    function Xy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function qy(e) {
      if (Bi) {
        var t = ci;
        if (!t) {
          Gy(e) && (Wy(ur, e), Xy()), J0(ur, e), Bi = !1, ur = e;
          return;
        }
        var a = t;
        if (!eE(e, t)) {
          Gy(e) && (Wy(ur, e), Xy()), t = ap(a);
          var i = ur;
          if (!t || !eE(e, t)) {
            J0(ur, e), Bi = !1, ur = e;
            return;
          }
          Z0(i, a);
        }
      }
    }
    function vw(e, t, a) {
      var i = e.stateNode, u = !qs, s = MR(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function hw(e) {
      var t = e.stateNode, a = e.memoizedProps, i = NR(t, a, e);
      if (i) {
        var u = ur;
        if (u !== null)
          switch (u.tag) {
            case ce: {
              var s = u.stateNode.containerInfo, f = (u.mode & we) !== K;
              jR(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case ae: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & we) !== K;
              VR(
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
    function mw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      zR(a, e);
    }
    function yw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return UR(a);
    }
    function tE(e) {
      for (var t = e.return; t !== null && t.tag !== ae && t.tag !== ce && t.tag !== Ce; )
        t = t.return;
      ur = t;
    }
    function Dh(e) {
      if (e !== ur)
        return !1;
      if (!Bi)
        return tE(e), Bi = !0, !1;
      if (e.tag !== ce && (e.tag !== ae || HR(e.type) && !Ly(e.type, e.memoizedProps))) {
        var t = ci;
        if (t)
          if (Gy(e))
            nE(e), Xy();
          else
            for (; t; )
              Z0(e, t), t = ap(t);
      }
      return tE(e), e.tag === Ce ? ci = yw(e) : ci = ur ? ap(e.stateNode) : null, !0;
    }
    function gw() {
      return Bi && ci !== null;
    }
    function nE(e) {
      for (var t = ci; t; )
        K0(e, t), t = ap(t);
    }
    function mf() {
      ur = null, ci = null, Bi = !1, qs = !1;
    }
    function rE() {
      xo !== null && (qC(xo), xo = null);
    }
    function or() {
      return Bi;
    }
    function Ky(e) {
      xo === null ? xo = [e] : xo.push(e);
    }
    var Sw = rt.ReactCurrentBatchConfig, Ew = null;
    function Cw() {
      return Sw.transition;
    }
    var Pi = {
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
      var Tw = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & $t && (t = a), a = a.return;
        return t;
      }, Ks = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, op = [], sp = [], cp = [], fp = [], dp = [], pp = [], Zs = /* @__PURE__ */ new Set();
      Pi.recordUnsafeLifecycleWarnings = function(e, t) {
        Zs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && op.push(e), e.mode & $t && typeof t.UNSAFE_componentWillMount == "function" && sp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && cp.push(e), e.mode & $t && typeof t.UNSAFE_componentWillReceiveProps == "function" && fp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && dp.push(e), e.mode & $t && typeof t.UNSAFE_componentWillUpdate == "function" && pp.push(e));
      }, Pi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        op.length > 0 && (op.forEach(function(R) {
          e.add(Ue(R) || "Component"), Zs.add(R.type);
        }), op = []);
        var t = /* @__PURE__ */ new Set();
        sp.length > 0 && (sp.forEach(function(R) {
          t.add(Ue(R) || "Component"), Zs.add(R.type);
        }), sp = []);
        var a = /* @__PURE__ */ new Set();
        cp.length > 0 && (cp.forEach(function(R) {
          a.add(Ue(R) || "Component"), Zs.add(R.type);
        }), cp = []);
        var i = /* @__PURE__ */ new Set();
        fp.length > 0 && (fp.forEach(function(R) {
          i.add(Ue(R) || "Component"), Zs.add(R.type);
        }), fp = []);
        var u = /* @__PURE__ */ new Set();
        dp.length > 0 && (dp.forEach(function(R) {
          u.add(Ue(R) || "Component"), Zs.add(R.type);
        }), dp = []);
        var s = /* @__PURE__ */ new Set();
        if (pp.length > 0 && (pp.forEach(function(R) {
          s.add(Ue(R) || "Component"), Zs.add(R.type);
        }), pp = []), t.size > 0) {
          var f = Ks(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Ks(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Ks(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = Ks(e);
          ot(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = Ks(a);
          ot(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var x = Ks(u);
          ot(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, x);
        }
      };
      var kh = /* @__PURE__ */ new Map(), aE = /* @__PURE__ */ new Set();
      Pi.recordLegacyContextWarning = function(e, t) {
        var a = Tw(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!aE.has(e.type)) {
          var i = kh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], kh.set(a, i)), i.push(e));
        }
      }, Pi.flushLegacyContextWarning = function() {
        kh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Ue(s) || "Component"), aE.add(s.type);
            });
            var u = Ks(i);
            try {
              Zt(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              Vt();
            }
          }
        });
      }, Pi.discardPendingWarnings = function() {
        op = [], sp = [], cp = [], fp = [], dp = [], pp = [], kh = /* @__PURE__ */ new Map();
      };
    }
    var Zy, Jy, eg, tg, ng, iE = function(e, t) {
    };
    Zy = !1, Jy = !1, eg = {}, tg = {}, ng = {}, iE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ue(t) || "Component";
        tg[a] || (tg[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Rw(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function vp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & $t || Ye) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== xe) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !Rw(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Ue(e) || "Component";
          eg[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), eg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== xe)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          Un(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(x) {
            var R = v.refs;
            x === null ? delete R[y] : R[y] = x;
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
    function Oh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Lh(e) {
      {
        var t = Ue(e) || "Component";
        if (ng[t])
          return;
        ng[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function lE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function uE(e) {
      function t(D, H) {
        if (e) {
          var k = D.deletions;
          k === null ? (D.deletions = [H], D.flags |= mt) : k.push(H);
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
        var k = uc(D, H);
        return k.index = 0, k.sibling = null, k;
      }
      function s(D, H, k) {
        if (D.index = k, !e)
          return D.flags |= wv, H;
        var Q = D.alternate;
        if (Q !== null) {
          var oe = Q.index;
          return oe < H ? (D.flags |= zt, H) : oe;
        } else
          return D.flags |= zt, H;
      }
      function f(D) {
        return e && D.alternate === null && (D.flags |= zt), D;
      }
      function p(D, H, k, Q) {
        if (H === null || H.tag !== Te) {
          var oe = KS(k, D.mode, Q);
          return oe.return = D, oe;
        } else {
          var te = u(H, k);
          return te.return = D, te;
        }
      }
      function v(D, H, k, Q) {
        var oe = k.type;
        if (oe === Da)
          return g(D, H, k.props.children, Q, k.key);
        if (H !== null && (H.elementType === oe || // Keep this check inline so it only runs on the false path:
        d1(H, k) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof oe == "object" && oe !== null && oe.$$typeof === _n && lE(oe) === H.type)) {
          var te = u(H, k.props);
          return te.ref = vp(D, H, k), te.return = D, te._debugSource = k._source, te._debugOwner = k._owner, te;
        }
        var Me = qS(k, D.mode, Q);
        return Me.ref = vp(D, H, k), Me.return = D, Me;
      }
      function y(D, H, k, Q) {
        if (H === null || H.tag !== Ve || H.stateNode.containerInfo !== k.containerInfo || H.stateNode.implementation !== k.implementation) {
          var oe = ZS(k, D.mode, Q);
          return oe.return = D, oe;
        } else {
          var te = u(H, k.children || []);
          return te.return = D, te;
        }
      }
      function g(D, H, k, Q, oe) {
        if (H === null || H.tag !== at) {
          var te = Ao(k, D.mode, Q, oe);
          return te.return = D, te;
        } else {
          var Me = u(H, k);
          return Me.return = D, Me;
        }
      }
      function x(D, H, k) {
        if (typeof H == "string" && H !== "" || typeof H == "number") {
          var Q = KS("" + H, D.mode, k);
          return Q.return = D, Q;
        }
        if (typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case aa: {
              var oe = qS(H, D.mode, k);
              return oe.ref = vp(D, null, H), oe.return = D, oe;
            }
            case ia: {
              var te = ZS(H, D.mode, k);
              return te.return = D, te;
            }
            case _n: {
              var Me = H._payload, Pe = H._init;
              return x(D, Pe(Me), k);
            }
          }
          if (ct(H) || Qa(H)) {
            var Mt = Ao(H, D.mode, k, null);
            return Mt.return = D, Mt;
          }
          Oh(D, H);
        }
        return typeof H == "function" && Lh(D), null;
      }
      function R(D, H, k, Q) {
        var oe = H !== null ? H.key : null;
        if (typeof k == "string" && k !== "" || typeof k == "number")
          return oe !== null ? null : p(D, H, "" + k, Q);
        if (typeof k == "object" && k !== null) {
          switch (k.$$typeof) {
            case aa:
              return k.key === oe ? v(D, H, k, Q) : null;
            case ia:
              return k.key === oe ? y(D, H, k, Q) : null;
            case _n: {
              var te = k._payload, Me = k._init;
              return R(D, H, Me(te), Q);
            }
          }
          if (ct(k) || Qa(k))
            return oe !== null ? null : g(D, H, k, Q, null);
          Oh(D, k);
        }
        return typeof k == "function" && Lh(D), null;
      }
      function M(D, H, k, Q, oe) {
        if (typeof Q == "string" && Q !== "" || typeof Q == "number") {
          var te = D.get(k) || null;
          return p(H, te, "" + Q, oe);
        }
        if (typeof Q == "object" && Q !== null) {
          switch (Q.$$typeof) {
            case aa: {
              var Me = D.get(Q.key === null ? k : Q.key) || null;
              return v(H, Me, Q, oe);
            }
            case ia: {
              var Pe = D.get(Q.key === null ? k : Q.key) || null;
              return y(H, Pe, Q, oe);
            }
            case _n:
              var Mt = Q._payload, yt = Q._init;
              return M(D, H, k, yt(Mt), oe);
          }
          if (ct(Q) || Qa(Q)) {
            var wn = D.get(k) || null;
            return g(H, wn, Q, oe, null);
          }
          Oh(H, Q);
        }
        return typeof Q == "function" && Lh(H), null;
      }
      function z(D, H, k) {
        {
          if (typeof D != "object" || D === null)
            return H;
          switch (D.$$typeof) {
            case aa:
            case ia:
              iE(D, k);
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
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", Q);
              break;
            case _n:
              var oe = D._payload, te = D._init;
              z(te(oe), H, k);
              break;
          }
        }
        return H;
      }
      function F(D, H, k, Q) {
        for (var oe = null, te = 0; te < k.length; te++) {
          var Me = k[te];
          oe = z(Me, oe, D);
        }
        for (var Pe = null, Mt = null, yt = H, wn = 0, gt = 0, gn = null; yt !== null && gt < k.length; gt++) {
          yt.index > gt ? (gn = yt, yt = null) : gn = yt.sibling;
          var zr = R(D, yt, k[gt], Q);
          if (zr === null) {
            yt === null && (yt = gn);
            break;
          }
          e && yt && zr.alternate === null && t(D, yt), wn = s(zr, wn, gt), Mt === null ? Pe = zr : Mt.sibling = zr, Mt = zr, yt = gn;
        }
        if (gt === k.length) {
          if (a(D, yt), or()) {
            var hr = gt;
            Gs(D, hr);
          }
          return Pe;
        }
        if (yt === null) {
          for (; gt < k.length; gt++) {
            var Pa = x(D, k[gt], Q);
            Pa !== null && (wn = s(Pa, wn, gt), Mt === null ? Pe = Pa : Mt.sibling = Pa, Mt = Pa);
          }
          if (or()) {
            var Zr = gt;
            Gs(D, Zr);
          }
          return Pe;
        }
        for (var Jr = i(D, yt); gt < k.length; gt++) {
          var Ur = M(Jr, D, gt, k[gt], Q);
          Ur !== null && (e && Ur.alternate !== null && Jr.delete(Ur.key === null ? gt : Ur.key), wn = s(Ur, wn, gt), Mt === null ? Pe = Ur : Mt.sibling = Ur, Mt = Ur);
        }
        if (e && Jr.forEach(function(Uf) {
          return t(D, Uf);
        }), or()) {
          var ku = gt;
          Gs(D, ku);
        }
        return Pe;
      }
      function J(D, H, k, Q) {
        var oe = Qa(k);
        if (typeof oe != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          k[Symbol.toStringTag] === "Generator" && (Jy || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Jy = !0), k.entries === oe && (Zy || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Zy = !0);
          var te = oe.call(k);
          if (te)
            for (var Me = null, Pe = te.next(); !Pe.done; Pe = te.next()) {
              var Mt = Pe.value;
              Me = z(Mt, Me, D);
            }
        }
        var yt = oe.call(k);
        if (yt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var wn = null, gt = null, gn = H, zr = 0, hr = 0, Pa = null, Zr = yt.next(); gn !== null && !Zr.done; hr++, Zr = yt.next()) {
          gn.index > hr ? (Pa = gn, gn = null) : Pa = gn.sibling;
          var Jr = R(D, gn, Zr.value, Q);
          if (Jr === null) {
            gn === null && (gn = Pa);
            break;
          }
          e && gn && Jr.alternate === null && t(D, gn), zr = s(Jr, zr, hr), gt === null ? wn = Jr : gt.sibling = Jr, gt = Jr, gn = Pa;
        }
        if (Zr.done) {
          if (a(D, gn), or()) {
            var Ur = hr;
            Gs(D, Ur);
          }
          return wn;
        }
        if (gn === null) {
          for (; !Zr.done; hr++, Zr = yt.next()) {
            var ku = x(D, Zr.value, Q);
            ku !== null && (zr = s(ku, zr, hr), gt === null ? wn = ku : gt.sibling = ku, gt = ku);
          }
          if (or()) {
            var Uf = hr;
            Gs(D, Uf);
          }
          return wn;
        }
        for (var Qp = i(D, gn); !Zr.done; hr++, Zr = yt.next()) {
          var Ul = M(Qp, D, hr, Zr.value, Q);
          Ul !== null && (e && Ul.alternate !== null && Qp.delete(Ul.key === null ? hr : Ul.key), zr = s(Ul, zr, hr), gt === null ? wn = Ul : gt.sibling = Ul, gt = Ul);
        }
        if (e && Qp.forEach(function(Xb) {
          return t(D, Xb);
        }), or()) {
          var Gb = hr;
          Gs(D, Gb);
        }
        return wn;
      }
      function be(D, H, k, Q) {
        if (H !== null && H.tag === Te) {
          a(D, H.sibling);
          var oe = u(H, k);
          return oe.return = D, oe;
        }
        a(D, H);
        var te = KS(k, D.mode, Q);
        return te.return = D, te;
      }
      function Ee(D, H, k, Q) {
        for (var oe = k.key, te = H; te !== null; ) {
          if (te.key === oe) {
            var Me = k.type;
            if (Me === Da) {
              if (te.tag === at) {
                a(D, te.sibling);
                var Pe = u(te, k.props.children);
                return Pe.return = D, Pe._debugSource = k._source, Pe._debugOwner = k._owner, Pe;
              }
            } else if (te.elementType === Me || // Keep this check inline so it only runs on the false path:
            d1(te, k) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Me == "object" && Me !== null && Me.$$typeof === _n && lE(Me) === te.type) {
              a(D, te.sibling);
              var Mt = u(te, k.props);
              return Mt.ref = vp(D, te, k), Mt.return = D, Mt._debugSource = k._source, Mt._debugOwner = k._owner, Mt;
            }
            a(D, te);
            break;
          } else
            t(D, te);
          te = te.sibling;
        }
        if (k.type === Da) {
          var yt = Ao(k.props.children, D.mode, Q, k.key);
          return yt.return = D, yt;
        } else {
          var wn = qS(k, D.mode, Q);
          return wn.ref = vp(D, H, k), wn.return = D, wn;
        }
      }
      function ut(D, H, k, Q) {
        for (var oe = k.key, te = H; te !== null; ) {
          if (te.key === oe)
            if (te.tag === Ve && te.stateNode.containerInfo === k.containerInfo && te.stateNode.implementation === k.implementation) {
              a(D, te.sibling);
              var Me = u(te, k.children || []);
              return Me.return = D, Me;
            } else {
              a(D, te);
              break;
            }
          else
            t(D, te);
          te = te.sibling;
        }
        var Pe = ZS(k, D.mode, Q);
        return Pe.return = D, Pe;
      }
      function Ze(D, H, k, Q) {
        var oe = typeof k == "object" && k !== null && k.type === Da && k.key === null;
        if (oe && (k = k.props.children), typeof k == "object" && k !== null) {
          switch (k.$$typeof) {
            case aa:
              return f(Ee(D, H, k, Q));
            case ia:
              return f(ut(D, H, k, Q));
            case _n:
              var te = k._payload, Me = k._init;
              return Ze(D, H, Me(te), Q);
          }
          if (ct(k))
            return F(D, H, k, Q);
          if (Qa(k))
            return J(D, H, k, Q);
          Oh(D, k);
        }
        return typeof k == "string" && k !== "" || typeof k == "number" ? f(be(D, H, "" + k, Q)) : (typeof k == "function" && Lh(D), a(D, H));
      }
      return Ze;
    }
    var yf = uE(!0), oE = uE(!1);
    function ww(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = uc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = uc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function xw(e, t) {
      for (var a = e.child; a !== null; )
        db(a, t), a = a.sibling;
    }
    var rg = To(null), ag;
    ag = {};
    var Mh = null, gf = null, ig = null, Nh = !1;
    function zh() {
      Mh = null, gf = null, ig = null, Nh = !1;
    }
    function sE() {
      Nh = !0;
    }
    function cE() {
      Nh = !1;
    }
    function fE(e, t, a) {
      Mr(rg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== ag && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = ag;
    }
    function lg(e, t) {
      var a = rg.current;
      Lr(rg, t), e._currentValue = a;
    }
    function ug(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (Sl(i.childLanes, t) ? u !== null && !Sl(u.childLanes, t) && (u.childLanes = $e(u.childLanes, t)) : (i.childLanes = $e(i.childLanes, t), u !== null && (u.childLanes = $e(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function _w(e, t, a) {
      bw(e, t, a);
    }
    function bw(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === xe) {
                var p = oo(a), v = Ru(At, p);
                v.tag = Ah;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, x = g.pending;
                  x === null ? v.next = v : (v.next = x.next, x.next = v), g.pending = v;
                }
              }
              i.lanes = $e(i.lanes, a);
              var R = i.alternate;
              R !== null && (R.lanes = $e(R.lanes, a)), ug(i.return, a, e), s.lanes = $e(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === It)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Qt) {
          var M = i.return;
          if (M === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          M.lanes = $e(M.lanes, a);
          var z = M.alternate;
          z !== null && (z.lanes = $e(z.lanes, a)), ug(M, a, e), u = i.sibling;
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
    function Sf(e, t) {
      Mh = e, gf = null, ig = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Or(a.lanes, t) && kp(), a.firstContext = null);
      }
    }
    function Ln(e) {
      Nh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (ig !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (gf === null) {
          if (Mh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          gf = a, Mh.dependencies = {
            lanes: P,
            firstContext: a
          };
        } else
          gf = gf.next = a;
      }
      return t;
    }
    var Js = null;
    function og(e) {
      Js === null ? Js = [e] : Js.push(e);
    }
    function Dw() {
      if (Js !== null) {
        for (var e = 0; e < Js.length; e++) {
          var t = Js[e], a = t.interleaved;
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
        Js = null;
      }
    }
    function dE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, og(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Uh(e, i);
    }
    function kw(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, og(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Ow(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, og(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Uh(e, i);
    }
    function ga(e, t) {
      return Uh(e, t);
    }
    var Lw = Uh;
    function Uh(e, t) {
      e.lanes = $e(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = $e(a.lanes, t)), a === null && (e.flags & (zt | Za)) !== _e && o1(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = $e(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = $e(a.childLanes, t) : (u.flags & (zt | Za)) !== _e && o1(e), i = u, u = u.return;
      if (i.tag === ce) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var pE = 0, vE = 1, Ah = 2, sg = 3, Fh = !1, cg, Hh;
    cg = !1, Hh = null;
    function fg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: P
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function hE(e, t) {
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
    function Ru(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: pE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function _o(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Hh === u && !cg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), cg = !0), k_()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, Lw(e, a);
      } else
        return Ow(e, u, t, a);
    }
    function jh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Fv(a)) {
          var s = u.lanes;
          s = xd(s, e.pendingLanes);
          var f = $e(s, a);
          u.lanes = f, Qc(e, f);
        }
      }
    }
    function dg(e, t) {
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
    function Mw(e, t, a, i, u, s) {
      switch (a.tag) {
        case vE: {
          var f = a.payload;
          if (typeof f == "function") {
            sE();
            var p = f.call(s, i, u);
            {
              if (e.mode & $t) {
                Tn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  Tn(!1);
                }
              }
              cE();
            }
            return p;
          }
          return f;
        }
        case sg:
          e.flags = e.flags & ~Fn | Fe;
        case pE: {
          var v = a.payload, y;
          if (typeof v == "function") {
            sE(), y = v.call(s, i, u);
            {
              if (e.mode & $t) {
                Tn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  Tn(!1);
                }
              }
              cE();
            }
          } else
            y = v;
          return y == null ? i : Ie({}, i, y);
        }
        case Ah:
          return Fh = !0, i;
      }
      return i;
    }
    function Vh(e, t, a, i) {
      var u = e.updateQueue;
      Fh = !1, Hh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var x = g.updateQueue, R = x.lastBaseUpdate;
          R !== f && (R === null ? x.firstBaseUpdate = y : R.next = y, x.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var M = u.baseState, z = P, F = null, J = null, be = null, Ee = s;
        do {
          var ut = Ee.lane, Ze = Ee.eventTime;
          if (Sl(i, ut)) {
            if (be !== null) {
              var H = {
                eventTime: Ze,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Ut,
                tag: Ee.tag,
                payload: Ee.payload,
                callback: Ee.callback,
                next: null
              };
              be = be.next = H;
            }
            M = Mw(e, u, Ee, M, t, a);
            var k = Ee.callback;
            if (k !== null && // If the update was already committed, we should not queue its
            // callback again.
            Ee.lane !== Ut) {
              e.flags |= bn;
              var Q = u.effects;
              Q === null ? u.effects = [Ee] : Q.push(Ee);
            }
          } else {
            var D = {
              eventTime: Ze,
              lane: ut,
              tag: Ee.tag,
              payload: Ee.payload,
              callback: Ee.callback,
              next: null
            };
            be === null ? (J = be = D, F = M) : be = be.next = D, z = $e(z, ut);
          }
          if (Ee = Ee.next, Ee === null) {
            if (p = u.shared.pending, p === null)
              break;
            var oe = p, te = oe.next;
            oe.next = null, Ee = te, u.lastBaseUpdate = oe, u.shared.pending = null;
          }
        } while (!0);
        be === null && (F = M), u.baseState = F, u.firstBaseUpdate = J, u.lastBaseUpdate = be;
        var Me = u.shared.interleaved;
        if (Me !== null) {
          var Pe = Me;
          do
            z = $e(z, Pe.lane), Pe = Pe.next;
          while (Pe !== Me);
        } else s === null && (u.shared.lanes = P);
        Bp(z), e.lanes = z, e.memoizedState = M;
      }
      Hh = null;
    }
    function Nw(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function mE() {
      Fh = !1;
    }
    function Bh() {
      return Fh;
    }
    function yE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, Nw(f, a));
        }
    }
    var hp = {}, bo = To(hp), mp = To(hp), Ph = To(hp);
    function $h(e) {
      if (e === hp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function gE() {
      var e = $h(Ph.current);
      return e;
    }
    function pg(e, t) {
      Mr(Ph, t, e), Mr(mp, e, e), Mr(bo, hp, e);
      var a = qT(t);
      Lr(bo, e), Mr(bo, a, e);
    }
    function Ef(e) {
      Lr(bo, e), Lr(mp, e), Lr(Ph, e);
    }
    function vg() {
      var e = $h(bo.current);
      return e;
    }
    function SE(e) {
      $h(Ph.current);
      var t = $h(bo.current), a = KT(t, e.type);
      t !== a && (Mr(mp, e, e), Mr(bo, a, e));
    }
    function hg(e) {
      mp.current === e && (Lr(bo, e), Lr(mp, e));
    }
    var zw = 0, EE = 1, CE = 1, yp = 2, $i = To(zw);
    function mg(e, t) {
      return (e & t) !== 0;
    }
    function Cf(e) {
      return e & EE;
    }
    function yg(e, t) {
      return e & EE | t;
    }
    function Uw(e, t) {
      return e | t;
    }
    function Do(e, t) {
      Mr($i, t, e);
    }
    function Tf(e) {
      Lr($i, e);
    }
    function Aw(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Yh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Ce) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || H0(i) || Uy(i))
              return t;
          }
        } else if (t.tag === ft && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Fe) !== _e;
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
    var Sa = (
      /*   */
      0
    ), Vn = (
      /* */
      1
    ), Dl = (
      /*  */
      2
    ), Bn = (
      /*    */
      4
    ), sr = (
      /*   */
      8
    ), gg = [];
    function Sg() {
      for (var e = 0; e < gg.length; e++) {
        var t = gg[e];
        t._workInProgressVersionPrimary = null;
      }
      gg.length = 0;
    }
    function Fw(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var ie = rt.ReactCurrentDispatcher, gp = rt.ReactCurrentBatchConfig, Eg, Rf;
    Eg = /* @__PURE__ */ new Set();
    var ec = P, Lt = null, Pn = null, $n = null, Ih = !1, Sp = !1, Ep = 0, Hw = 0, jw = 25, j = null, fi = null, ko = -1, Cg = !1;
    function Rt() {
      {
        var e = j;
        fi === null ? fi = [e] : fi.push(e);
      }
    }
    function q() {
      {
        var e = j;
        fi !== null && (ko++, fi[ko] !== e && Vw(e));
      }
    }
    function wf(e) {
      e != null && !ct(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", j, typeof e);
    }
    function Vw(e) {
      {
        var t = Ue(Lt);
        if (!Eg.has(t) && (Eg.add(t), fi !== null)) {
          for (var a = "", i = 30, u = 0; u <= ko; u++) {
            for (var s = fi[u], f = u === ko ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function Nr() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Tg(e, t) {
      if (Cg)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", j), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, j, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Se(e[a], t[a]))
          return !1;
      return !0;
    }
    function xf(e, t, a, i, u, s) {
      ec = s, Lt = t, fi = e !== null ? e._debugHookTypes : null, ko = -1, Cg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = P, e !== null && e.memoizedState !== null ? ie.current = $E : fi !== null ? ie.current = PE : ie.current = BE;
      var f = a(i, u);
      if (Sp) {
        var p = 0;
        do {
          if (Sp = !1, Ep = 0, p >= jw)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Cg = !1, Pn = null, $n = null, t.updateQueue = null, ko = -1, ie.current = YE, f = a(i, u);
        } while (Sp);
      }
      ie.current = am, t._debugHookTypes = fi;
      var v = Pn !== null && Pn.next !== null;
      if (ec = P, Lt = null, Pn = null, $n = null, j = null, fi = null, ko = -1, e !== null && (e.flags & Hn) !== (t.flags & Hn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & we) !== K && S("Internal React error: Expected static flag was missing. Please notify the React team."), Ih = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function _f() {
      var e = Ep !== 0;
      return Ep = 0, e;
    }
    function TE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Dr) !== K ? t.flags &= ~(eu | da | wr | me) : t.flags &= ~(wr | me), e.lanes = so(e.lanes, a);
    }
    function RE() {
      if (ie.current = am, Ih) {
        for (var e = Lt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Ih = !1;
      }
      ec = P, Lt = null, Pn = null, $n = null, fi = null, ko = -1, j = null, AE = !1, Sp = !1, Ep = 0;
    }
    function kl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return $n === null ? Lt.memoizedState = $n = e : $n = $n.next = e, $n;
    }
    function di() {
      var e;
      if (Pn === null) {
        var t = Lt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Pn.next;
      var a;
      if ($n === null ? a = Lt.memoizedState : a = $n.next, a !== null)
        $n = a, a = $n.next, Pn = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Pn = e;
        var i = {
          memoizedState: Pn.memoizedState,
          baseState: Pn.baseState,
          baseQueue: Pn.baseQueue,
          queue: Pn.queue,
          next: null
        };
        $n === null ? Lt.memoizedState = $n = i : $n = $n.next = i;
      }
      return $n;
    }
    function wE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Rg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function wg(e, t, a) {
      var i = kl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: P,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = Yw.bind(null, Lt, s);
      return [i.memoizedState, f];
    }
    function xg(e, t, a) {
      var i = di(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = Pn, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, x = s.baseState, R = null, M = null, z = null, F = g;
        do {
          var J = F.lane;
          if (Sl(ec, J)) {
            if (z !== null) {
              var Ee = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Ut,
                action: F.action,
                hasEagerState: F.hasEagerState,
                eagerState: F.eagerState,
                next: null
              };
              z = z.next = Ee;
            }
            if (F.hasEagerState)
              x = F.eagerState;
            else {
              var ut = F.action;
              x = e(x, ut);
            }
          } else {
            var be = {
              lane: J,
              action: F.action,
              hasEagerState: F.hasEagerState,
              eagerState: F.eagerState,
              next: null
            };
            z === null ? (M = z = be, R = x) : z = z.next = be, Lt.lanes = $e(Lt.lanes, J), Bp(J);
          }
          F = F.next;
        } while (F !== null && F !== g);
        z === null ? R = x : z.next = M, Se(x, i.memoizedState) || kp(), i.memoizedState = x, i.baseState = R, i.baseQueue = z, u.lastRenderedState = x;
      }
      var Ze = u.interleaved;
      if (Ze !== null) {
        var D = Ze;
        do {
          var H = D.lane;
          Lt.lanes = $e(Lt.lanes, H), Bp(H), D = D.next;
        } while (D !== Ze);
      } else f === null && (u.lanes = P);
      var k = u.dispatch;
      return [i.memoizedState, k];
    }
    function _g(e, t, a) {
      var i = di(), u = i.queue;
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
        Se(p, i.memoizedState) || kp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function lD(e, t, a) {
    }
    function uD(e, t, a) {
    }
    function bg(e, t, a) {
      var i = Lt, u = kl(), s, f = or();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Rf || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), Rf = !0);
      } else {
        if (s = t(), !Rf) {
          var p = t();
          Se(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Rf = !0);
        }
        var v = Rm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ws(v, ec) || xE(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, qh(bE.bind(null, i, y, e), [e]), i.flags |= wr, Cp(Vn | sr, _E.bind(null, i, y, s, t), void 0, null), s;
    }
    function Qh(e, t, a) {
      var i = Lt, u = di(), s = t();
      if (!Rf) {
        var f = t();
        Se(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Rf = !0);
      }
      var p = u.memoizedState, v = !Se(p, s);
      v && (u.memoizedState = s, kp());
      var y = u.queue;
      if (Rp(bE.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      $n !== null && $n.memoizedState.tag & Vn) {
        i.flags |= wr, Cp(Vn | sr, _E.bind(null, i, y, s, t), void 0, null);
        var g = Rm();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ws(g, ec) || xE(i, t, s);
      }
      return s;
    }
    function xE(e, t, a) {
      e.flags |= Jl;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Lt.updateQueue;
      if (u === null)
        u = wE(), Lt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function _E(e, t, a, i) {
      t.value = a, t.getSnapshot = i, DE(t) && kE(e);
    }
    function bE(e, t, a) {
      var i = function() {
        DE(t) && kE(e);
      };
      return a(i);
    }
    function DE(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !Se(a, i);
      } catch {
        return !0;
      }
    }
    function kE(e) {
      var t = ga(e, ge);
      t !== null && Wn(t, e, ge, At);
    }
    function Wh(e) {
      var t = kl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: P,
        dispatch: null,
        lastRenderedReducer: Rg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Iw.bind(null, Lt, a);
      return [t.memoizedState, i];
    }
    function Dg(e) {
      return xg(Rg);
    }
    function kg(e) {
      return _g(Rg);
    }
    function Cp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Lt.updateQueue;
      if (s === null)
        s = wE(), Lt.updateQueue = s, s.lastEffect = u.next = u;
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
    function Og(e) {
      var t = kl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Gh(e) {
      var t = di();
      return t.memoizedState;
    }
    function Tp(e, t, a, i) {
      var u = kl(), s = i === void 0 ? null : i;
      Lt.flags |= e, u.memoizedState = Cp(Vn | t, a, void 0, s);
    }
    function Xh(e, t, a, i) {
      var u = di(), s = i === void 0 ? null : i, f = void 0;
      if (Pn !== null) {
        var p = Pn.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (Tg(s, v)) {
            u.memoizedState = Cp(t, a, f, s);
            return;
          }
        }
      }
      Lt.flags |= e, u.memoizedState = Cp(Vn | t, a, f, s);
    }
    function qh(e, t) {
      return (Lt.mode & Dr) !== K ? Tp(eu | wr | cl, sr, e, t) : Tp(wr | cl, sr, e, t);
    }
    function Rp(e, t) {
      return Xh(wr, sr, e, t);
    }
    function Lg(e, t) {
      return Tp(me, Dl, e, t);
    }
    function Kh(e, t) {
      return Xh(me, Dl, e, t);
    }
    function Mg(e, t) {
      var a = me;
      return a |= fa, (Lt.mode & Dr) !== K && (a |= da), Tp(a, Bn, e, t);
    }
    function Zh(e, t) {
      return Xh(me, Bn, e, t);
    }
    function OE(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function Ng(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = me;
      return u |= fa, (Lt.mode & Dr) !== K && (u |= da), Tp(u, Bn, OE.bind(null, t, e), i);
    }
    function Jh(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Xh(me, Bn, OE.bind(null, t, e), i);
    }
    function Bw(e, t) {
    }
    var em = Bw;
    function zg(e, t) {
      var a = kl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function tm(e, t) {
      var a = di(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Tg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Ug(e, t) {
      var a = kl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function nm(e, t) {
      var a = di(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Tg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Ag(e) {
      var t = kl();
      return t.memoizedState = e, e;
    }
    function LE(e) {
      var t = di(), a = Pn, i = a.memoizedState;
      return NE(t, i, e);
    }
    function ME(e) {
      var t = di();
      if (Pn === null)
        return t.memoizedState = e, e;
      var a = Pn.memoizedState;
      return NE(t, a, e);
    }
    function NE(e, t, a) {
      var i = !zv(ec);
      if (i) {
        if (!Se(a, t)) {
          var u = tr();
          Lt.lanes = $e(Lt.lanes, u), Bp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, kp()), e.memoizedState = a, a;
    }
    function Pw(e, t, a) {
      var i = rr();
      dt(ry(i, ai)), e(!0);
      var u = gp.transition;
      gp.transition = {};
      var s = gp.transition;
      gp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (dt(i), gp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && ot("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Fg() {
      var e = Wh(!1), t = e[0], a = e[1], i = Pw.bind(null, a), u = kl();
      return u.memoizedState = i, [t, i];
    }
    function zE() {
      var e = Dg(), t = e[0], a = di(), i = a.memoizedState;
      return [t, i];
    }
    function UE() {
      var e = kg(), t = e[0], a = di(), i = a.memoizedState;
      return [t, i];
    }
    var AE = !1;
    function $w() {
      return AE;
    }
    function Hg() {
      var e = kl(), t = Rm(), a = t.identifierPrefix, i;
      if (or()) {
        var u = lw();
        i = ":" + a + "R" + u;
        var s = Ep++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Hw++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function rm() {
      var e = di(), t = e.memoizedState;
      return t;
    }
    function Yw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = zo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (FE(e))
        HE(t, u);
      else {
        var s = dE(e, t, u, i);
        if (s !== null) {
          var f = Kr();
          Wn(s, e, i, f), jE(s, t, i);
        }
      }
      VE(e, i);
    }
    function Iw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = zo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (FE(e))
        HE(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === P && (s === null || s.lanes === P)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = ie.current, ie.current = Yi;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, Se(y, v)) {
                kw(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              ie.current = p;
            }
          }
        }
        var g = dE(e, t, u, i);
        if (g !== null) {
          var x = Kr();
          Wn(g, e, i, x), jE(g, t, i);
        }
      }
      VE(e, i);
    }
    function FE(e) {
      var t = e.alternate;
      return e === Lt || t !== null && t === Lt;
    }
    function HE(e, t) {
      Sp = Ih = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function jE(e, t, a) {
      if (Fv(a)) {
        var i = t.lanes;
        i = xd(i, e.pendingLanes);
        var u = $e(i, a);
        t.lanes = u, Qc(e, u);
      }
    }
    function VE(e, t, a) {
      zi(e, t);
    }
    var am = {
      readContext: Ln,
      useCallback: Nr,
      useContext: Nr,
      useEffect: Nr,
      useImperativeHandle: Nr,
      useInsertionEffect: Nr,
      useLayoutEffect: Nr,
      useMemo: Nr,
      useReducer: Nr,
      useRef: Nr,
      useState: Nr,
      useDebugValue: Nr,
      useDeferredValue: Nr,
      useTransition: Nr,
      useMutableSource: Nr,
      useSyncExternalStore: Nr,
      useId: Nr,
      unstable_isNewReconciler: ve
    }, BE = null, PE = null, $E = null, YE = null, Ol = null, Yi = null, im = null;
    {
      var jg = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, He = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      BE = {
        readContext: function(e) {
          return Ln(e);
        },
        useCallback: function(e, t) {
          return j = "useCallback", Rt(), wf(t), zg(e, t);
        },
        useContext: function(e) {
          return j = "useContext", Rt(), Ln(e);
        },
        useEffect: function(e, t) {
          return j = "useEffect", Rt(), wf(t), qh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return j = "useImperativeHandle", Rt(), wf(a), Ng(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return j = "useInsertionEffect", Rt(), wf(t), Lg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return j = "useLayoutEffect", Rt(), wf(t), Mg(e, t);
        },
        useMemo: function(e, t) {
          j = "useMemo", Rt(), wf(t);
          var a = ie.current;
          ie.current = Ol;
          try {
            return Ug(e, t);
          } finally {
            ie.current = a;
          }
        },
        useReducer: function(e, t, a) {
          j = "useReducer", Rt();
          var i = ie.current;
          ie.current = Ol;
          try {
            return wg(e, t, a);
          } finally {
            ie.current = i;
          }
        },
        useRef: function(e) {
          return j = "useRef", Rt(), Og(e);
        },
        useState: function(e) {
          j = "useState", Rt();
          var t = ie.current;
          ie.current = Ol;
          try {
            return Wh(e);
          } finally {
            ie.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return j = "useDebugValue", Rt(), void 0;
        },
        useDeferredValue: function(e) {
          return j = "useDeferredValue", Rt(), Ag(e);
        },
        useTransition: function() {
          return j = "useTransition", Rt(), Fg();
        },
        useMutableSource: function(e, t, a) {
          return j = "useMutableSource", Rt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return j = "useSyncExternalStore", Rt(), bg(e, t, a);
        },
        useId: function() {
          return j = "useId", Rt(), Hg();
        },
        unstable_isNewReconciler: ve
      }, PE = {
        readContext: function(e) {
          return Ln(e);
        },
        useCallback: function(e, t) {
          return j = "useCallback", q(), zg(e, t);
        },
        useContext: function(e) {
          return j = "useContext", q(), Ln(e);
        },
        useEffect: function(e, t) {
          return j = "useEffect", q(), qh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return j = "useImperativeHandle", q(), Ng(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return j = "useInsertionEffect", q(), Lg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return j = "useLayoutEffect", q(), Mg(e, t);
        },
        useMemo: function(e, t) {
          j = "useMemo", q();
          var a = ie.current;
          ie.current = Ol;
          try {
            return Ug(e, t);
          } finally {
            ie.current = a;
          }
        },
        useReducer: function(e, t, a) {
          j = "useReducer", q();
          var i = ie.current;
          ie.current = Ol;
          try {
            return wg(e, t, a);
          } finally {
            ie.current = i;
          }
        },
        useRef: function(e) {
          return j = "useRef", q(), Og(e);
        },
        useState: function(e) {
          j = "useState", q();
          var t = ie.current;
          ie.current = Ol;
          try {
            return Wh(e);
          } finally {
            ie.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return j = "useDebugValue", q(), void 0;
        },
        useDeferredValue: function(e) {
          return j = "useDeferredValue", q(), Ag(e);
        },
        useTransition: function() {
          return j = "useTransition", q(), Fg();
        },
        useMutableSource: function(e, t, a) {
          return j = "useMutableSource", q(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return j = "useSyncExternalStore", q(), bg(e, t, a);
        },
        useId: function() {
          return j = "useId", q(), Hg();
        },
        unstable_isNewReconciler: ve
      }, $E = {
        readContext: function(e) {
          return Ln(e);
        },
        useCallback: function(e, t) {
          return j = "useCallback", q(), tm(e, t);
        },
        useContext: function(e) {
          return j = "useContext", q(), Ln(e);
        },
        useEffect: function(e, t) {
          return j = "useEffect", q(), Rp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return j = "useImperativeHandle", q(), Jh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return j = "useInsertionEffect", q(), Kh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return j = "useLayoutEffect", q(), Zh(e, t);
        },
        useMemo: function(e, t) {
          j = "useMemo", q();
          var a = ie.current;
          ie.current = Yi;
          try {
            return nm(e, t);
          } finally {
            ie.current = a;
          }
        },
        useReducer: function(e, t, a) {
          j = "useReducer", q();
          var i = ie.current;
          ie.current = Yi;
          try {
            return xg(e, t, a);
          } finally {
            ie.current = i;
          }
        },
        useRef: function(e) {
          return j = "useRef", q(), Gh();
        },
        useState: function(e) {
          j = "useState", q();
          var t = ie.current;
          ie.current = Yi;
          try {
            return Dg(e);
          } finally {
            ie.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return j = "useDebugValue", q(), em();
        },
        useDeferredValue: function(e) {
          return j = "useDeferredValue", q(), LE(e);
        },
        useTransition: function() {
          return j = "useTransition", q(), zE();
        },
        useMutableSource: function(e, t, a) {
          return j = "useMutableSource", q(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return j = "useSyncExternalStore", q(), Qh(e, t);
        },
        useId: function() {
          return j = "useId", q(), rm();
        },
        unstable_isNewReconciler: ve
      }, YE = {
        readContext: function(e) {
          return Ln(e);
        },
        useCallback: function(e, t) {
          return j = "useCallback", q(), tm(e, t);
        },
        useContext: function(e) {
          return j = "useContext", q(), Ln(e);
        },
        useEffect: function(e, t) {
          return j = "useEffect", q(), Rp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return j = "useImperativeHandle", q(), Jh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return j = "useInsertionEffect", q(), Kh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return j = "useLayoutEffect", q(), Zh(e, t);
        },
        useMemo: function(e, t) {
          j = "useMemo", q();
          var a = ie.current;
          ie.current = im;
          try {
            return nm(e, t);
          } finally {
            ie.current = a;
          }
        },
        useReducer: function(e, t, a) {
          j = "useReducer", q();
          var i = ie.current;
          ie.current = im;
          try {
            return _g(e, t, a);
          } finally {
            ie.current = i;
          }
        },
        useRef: function(e) {
          return j = "useRef", q(), Gh();
        },
        useState: function(e) {
          j = "useState", q();
          var t = ie.current;
          ie.current = im;
          try {
            return kg(e);
          } finally {
            ie.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return j = "useDebugValue", q(), em();
        },
        useDeferredValue: function(e) {
          return j = "useDeferredValue", q(), ME(e);
        },
        useTransition: function() {
          return j = "useTransition", q(), UE();
        },
        useMutableSource: function(e, t, a) {
          return j = "useMutableSource", q(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return j = "useSyncExternalStore", q(), Qh(e, t);
        },
        useId: function() {
          return j = "useId", q(), rm();
        },
        unstable_isNewReconciler: ve
      }, Ol = {
        readContext: function(e) {
          return jg(), Ln(e);
        },
        useCallback: function(e, t) {
          return j = "useCallback", He(), Rt(), zg(e, t);
        },
        useContext: function(e) {
          return j = "useContext", He(), Rt(), Ln(e);
        },
        useEffect: function(e, t) {
          return j = "useEffect", He(), Rt(), qh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return j = "useImperativeHandle", He(), Rt(), Ng(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return j = "useInsertionEffect", He(), Rt(), Lg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return j = "useLayoutEffect", He(), Rt(), Mg(e, t);
        },
        useMemo: function(e, t) {
          j = "useMemo", He(), Rt();
          var a = ie.current;
          ie.current = Ol;
          try {
            return Ug(e, t);
          } finally {
            ie.current = a;
          }
        },
        useReducer: function(e, t, a) {
          j = "useReducer", He(), Rt();
          var i = ie.current;
          ie.current = Ol;
          try {
            return wg(e, t, a);
          } finally {
            ie.current = i;
          }
        },
        useRef: function(e) {
          return j = "useRef", He(), Rt(), Og(e);
        },
        useState: function(e) {
          j = "useState", He(), Rt();
          var t = ie.current;
          ie.current = Ol;
          try {
            return Wh(e);
          } finally {
            ie.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return j = "useDebugValue", He(), Rt(), void 0;
        },
        useDeferredValue: function(e) {
          return j = "useDeferredValue", He(), Rt(), Ag(e);
        },
        useTransition: function() {
          return j = "useTransition", He(), Rt(), Fg();
        },
        useMutableSource: function(e, t, a) {
          return j = "useMutableSource", He(), Rt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return j = "useSyncExternalStore", He(), Rt(), bg(e, t, a);
        },
        useId: function() {
          return j = "useId", He(), Rt(), Hg();
        },
        unstable_isNewReconciler: ve
      }, Yi = {
        readContext: function(e) {
          return jg(), Ln(e);
        },
        useCallback: function(e, t) {
          return j = "useCallback", He(), q(), tm(e, t);
        },
        useContext: function(e) {
          return j = "useContext", He(), q(), Ln(e);
        },
        useEffect: function(e, t) {
          return j = "useEffect", He(), q(), Rp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return j = "useImperativeHandle", He(), q(), Jh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return j = "useInsertionEffect", He(), q(), Kh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return j = "useLayoutEffect", He(), q(), Zh(e, t);
        },
        useMemo: function(e, t) {
          j = "useMemo", He(), q();
          var a = ie.current;
          ie.current = Yi;
          try {
            return nm(e, t);
          } finally {
            ie.current = a;
          }
        },
        useReducer: function(e, t, a) {
          j = "useReducer", He(), q();
          var i = ie.current;
          ie.current = Yi;
          try {
            return xg(e, t, a);
          } finally {
            ie.current = i;
          }
        },
        useRef: function(e) {
          return j = "useRef", He(), q(), Gh();
        },
        useState: function(e) {
          j = "useState", He(), q();
          var t = ie.current;
          ie.current = Yi;
          try {
            return Dg(e);
          } finally {
            ie.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return j = "useDebugValue", He(), q(), em();
        },
        useDeferredValue: function(e) {
          return j = "useDeferredValue", He(), q(), LE(e);
        },
        useTransition: function() {
          return j = "useTransition", He(), q(), zE();
        },
        useMutableSource: function(e, t, a) {
          return j = "useMutableSource", He(), q(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return j = "useSyncExternalStore", He(), q(), Qh(e, t);
        },
        useId: function() {
          return j = "useId", He(), q(), rm();
        },
        unstable_isNewReconciler: ve
      }, im = {
        readContext: function(e) {
          return jg(), Ln(e);
        },
        useCallback: function(e, t) {
          return j = "useCallback", He(), q(), tm(e, t);
        },
        useContext: function(e) {
          return j = "useContext", He(), q(), Ln(e);
        },
        useEffect: function(e, t) {
          return j = "useEffect", He(), q(), Rp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return j = "useImperativeHandle", He(), q(), Jh(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return j = "useInsertionEffect", He(), q(), Kh(e, t);
        },
        useLayoutEffect: function(e, t) {
          return j = "useLayoutEffect", He(), q(), Zh(e, t);
        },
        useMemo: function(e, t) {
          j = "useMemo", He(), q();
          var a = ie.current;
          ie.current = Yi;
          try {
            return nm(e, t);
          } finally {
            ie.current = a;
          }
        },
        useReducer: function(e, t, a) {
          j = "useReducer", He(), q();
          var i = ie.current;
          ie.current = Yi;
          try {
            return _g(e, t, a);
          } finally {
            ie.current = i;
          }
        },
        useRef: function(e) {
          return j = "useRef", He(), q(), Gh();
        },
        useState: function(e) {
          j = "useState", He(), q();
          var t = ie.current;
          ie.current = Yi;
          try {
            return kg(e);
          } finally {
            ie.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return j = "useDebugValue", He(), q(), em();
        },
        useDeferredValue: function(e) {
          return j = "useDeferredValue", He(), q(), ME(e);
        },
        useTransition: function() {
          return j = "useTransition", He(), q(), UE();
        },
        useMutableSource: function(e, t, a) {
          return j = "useMutableSource", He(), q(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return j = "useSyncExternalStore", He(), q(), Qh(e, t);
        },
        useId: function() {
          return j = "useId", He(), q(), rm();
        },
        unstable_isNewReconciler: ve
      };
    }
    var Oo = A.unstable_now, IE = 0, lm = -1, wp = -1, um = -1, Vg = !1, om = !1;
    function QE() {
      return Vg;
    }
    function Qw() {
      om = !0;
    }
    function Ww() {
      Vg = !1, om = !1;
    }
    function Gw() {
      Vg = om, om = !1;
    }
    function WE() {
      return IE;
    }
    function GE() {
      IE = Oo();
    }
    function Bg(e) {
      wp = Oo(), e.actualStartTime < 0 && (e.actualStartTime = Oo());
    }
    function XE(e) {
      wp = -1;
    }
    function sm(e, t) {
      if (wp >= 0) {
        var a = Oo() - wp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), wp = -1;
      }
    }
    function Ll(e) {
      if (lm >= 0) {
        var t = Oo() - lm;
        lm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case ce:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case St:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Pg(e) {
      if (um >= 0) {
        var t = Oo() - um;
        um = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case ce:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case St:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Ml() {
      lm = Oo();
    }
    function $g() {
      um = Oo();
    }
    function Yg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Ii(e, t) {
      if (e && e.defaultProps) {
        var a = Ie({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var Ig = {}, Qg, Wg, Gg, Xg, qg, qE, cm, Kg, Zg, Jg, xp;
    {
      Qg = /* @__PURE__ */ new Set(), Wg = /* @__PURE__ */ new Set(), Gg = /* @__PURE__ */ new Set(), Xg = /* @__PURE__ */ new Set(), Kg = /* @__PURE__ */ new Set(), qg = /* @__PURE__ */ new Set(), Zg = /* @__PURE__ */ new Set(), Jg = /* @__PURE__ */ new Set(), xp = /* @__PURE__ */ new Set();
      var KE = /* @__PURE__ */ new Set();
      cm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          KE.has(a) || (KE.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, qE = function(e, t) {
        if (t === void 0) {
          var a = tt(e) || "Component";
          qg.has(a) || (qg.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Ig, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Ig);
    }
    function eS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & $t) {
          Tn(!0);
          try {
            s = a(i, u);
          } finally {
            Tn(!1);
          }
        }
        qE(t, s);
      }
      var f = s == null ? u : Ie({}, u, s);
      if (e.memoizedState = f, e.lanes === P) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var tS = {
      isMounted: Br,
      enqueueSetState: function(e, t, a) {
        var i = Ka(e), u = Kr(), s = zo(i), f = Ru(u, s);
        f.payload = t, a != null && (cm(a, "setState"), f.callback = a);
        var p = _o(i, f, s);
        p !== null && (Wn(p, i, s, u), jh(p, i, s)), zi(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Ka(e), u = Kr(), s = zo(i), f = Ru(u, s);
        f.tag = vE, f.payload = t, a != null && (cm(a, "replaceState"), f.callback = a);
        var p = _o(i, f, s);
        p !== null && (Wn(p, i, s, u), jh(p, i, s)), zi(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Ka(e), i = Kr(), u = zo(a), s = Ru(i, u);
        s.tag = Ah, t != null && (cm(t, "forceUpdate"), s.callback = t);
        var f = _o(a, s, u);
        f !== null && (Wn(f, a, u, i), jh(f, a, u)), md(a, u);
      }
    };
    function ZE(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & $t) {
            Tn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              Tn(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", tt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !sn(a, i) || !sn(u, s) : !0;
    }
    function Xw(e, t, a) {
      var i = e.stateNode;
      {
        var u = tt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !xp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & $t) === K && (xp.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !xp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & $t) === K && (xp.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !Zg.has(t) && (Zg.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", tt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Gg.has(t) && (Gg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", tt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || ct(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function JE(e, t) {
      t.updater = tS, e.stateNode = t, Tc(t, e), t._reactInternalInstance = Ig;
    }
    function eC(e, t, a) {
      var i = !1, u = Va, s = Va, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === jo && f._context === void 0
        );
        if (!p && !Jg.has(t)) {
          Jg.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === Nu ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", tt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = Ln(f);
      else {
        u = df(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? pf(e, u) : Va;
      }
      var g = new t(a, s);
      if (e.mode & $t) {
        Tn(!0);
        try {
          g = new t(a, s);
        } finally {
          Tn(!1);
        }
      }
      var x = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      JE(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && x === null) {
          var R = tt(t) || "Component";
          Wg.has(R) || (Wg.add(R), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", R, g.state === null ? "null" : "undefined", R));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var M = null, z = null, F = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? M = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (M = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? z = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (z = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? F = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (F = "UNSAFE_componentWillUpdate"), M !== null || z !== null || F !== null) {
            var J = tt(t) || "Component", be = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Xg.has(J) || (Xg.add(J), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, J, be, M !== null ? `
  ` + M : "", z !== null ? `
  ` + z : "", F !== null ? `
  ` + F : ""));
          }
        }
      }
      return i && $0(e, u, s), g;
    }
    function qw(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ue(e) || "Component"), tS.enqueueReplaceState(t, t.state, null));
    }
    function tC(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Ue(e) || "Component";
          Qg.has(s) || (Qg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        tS.enqueueReplaceState(t, t.state, null);
      }
    }
    function nS(e, t, a, i) {
      Xw(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, fg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = Ln(s);
      else {
        var f = df(e, t, !0);
        u.context = pf(e, f);
      }
      {
        if (u.state === a) {
          var p = tt(t) || "Component";
          Kg.has(p) || (Kg.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & $t && Pi.recordLegacyContextWarning(e, u), Pi.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (eS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (qw(e, u), Vh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = me;
        y |= fa, (e.mode & Dr) !== K && (y |= da), e.flags |= y;
      }
    }
    function Kw(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = Va;
      if (typeof p == "object" && p !== null)
        v = Ln(p);
      else {
        var y = df(e, t, !0);
        v = pf(e, y);
      }
      var g = t.getDerivedStateFromProps, x = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !x && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && tC(e, u, a, v), mE();
      var R = e.memoizedState, M = u.state = R;
      if (Vh(e, a, u, i), M = e.memoizedState, s === a && R === M && !Ch() && !Bh()) {
        if (typeof u.componentDidMount == "function") {
          var z = me;
          z |= fa, (e.mode & Dr) !== K && (z |= da), e.flags |= z;
        }
        return !1;
      }
      typeof g == "function" && (eS(e, t, g, a), M = e.memoizedState);
      var F = Bh() || ZE(e, t, s, a, R, M, v);
      if (F) {
        if (!x && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var J = me;
          J |= fa, (e.mode & Dr) !== K && (J |= da), e.flags |= J;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var be = me;
          be |= fa, (e.mode & Dr) !== K && (be |= da), e.flags |= be;
        }
        e.memoizedProps = a, e.memoizedState = M;
      }
      return u.props = a, u.state = M, u.context = v, F;
    }
    function Zw(e, t, a, i, u) {
      var s = t.stateNode;
      hE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : Ii(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, x = Va;
      if (typeof g == "object" && g !== null)
        x = Ln(g);
      else {
        var R = df(t, a, !0);
        x = pf(t, R);
      }
      var M = a.getDerivedStateFromProps, z = typeof M == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !z && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== x) && tC(t, s, i, x), mE();
      var F = t.memoizedState, J = s.state = F;
      if (Vh(t, i, s, u), J = t.memoizedState, f === v && F === J && !Ch() && !Bh() && !ne)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= me), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= hn), !1;
      typeof M == "function" && (eS(t, a, M, i), J = t.memoizedState);
      var be = Bh() || ZE(t, a, p, i, F, J, x) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      ne;
      return be ? (!z && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, J, x), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, J, x)), typeof s.componentDidUpdate == "function" && (t.flags |= me), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= hn)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= me), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || F !== e.memoizedState) && (t.flags |= hn), t.memoizedProps = i, t.memoizedState = J), s.props = i, s.state = J, s.context = x, be;
    }
    function tc(e, t) {
      return {
        value: e,
        source: t,
        stack: Uu(t),
        digest: null
      };
    }
    function rS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function Jw(e, t) {
      return !0;
    }
    function aS(e, t) {
      try {
        var a = Jw(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === xe)
            return;
          console.error(i);
        }
        var p = u ? Ue(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === ce)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Ue(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var x = v + `
` + f + `

` + ("" + y);
        console.error(x);
      } catch (R) {
        setTimeout(function() {
          throw R;
        });
      }
    }
    var ex = typeof WeakMap == "function" ? WeakMap : Map;
    function nC(e, t, a) {
      var i = Ru(At, a);
      i.tag = sg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        Q_(u), aS(e, t);
      }, i;
    }
    function iS(e, t, a) {
      var i = Ru(At, a);
      i.tag = sg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          p1(e), aS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        p1(e), aS(e, t), typeof u != "function" && Y_(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (Or(e.lanes, ge) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ue(e) || "Unknown"));
      }), i;
    }
    function rC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new ex(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = W_.bind(null, e, t, a);
        Pr && Pp(e, a), t.then(s, s);
      }
    }
    function tx(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function nx(e, t) {
      var a = e.tag;
      if ((e.mode & we) === K && (a === je || a === Ne || a === Be)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function aC(e) {
      var t = e;
      do {
        if (t.tag === Ce && Aw(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function iC(e, t, a, i, u) {
      if ((e.mode & we) === K) {
        if (e === t)
          e.flags |= Fn;
        else {
          if (e.flags |= Fe, a.flags |= Rc, a.flags &= ~(Rv | sl), a.tag === xe) {
            var s = a.alternate;
            if (s === null)
              a.tag = En;
            else {
              var f = Ru(At, ge);
              f.tag = Ah, _o(a, f, ge);
            }
          }
          a.lanes = $e(a.lanes, ge);
        }
        return e;
      }
      return e.flags |= Fn, e.lanes = u, e;
    }
    function rx(e, t, a, i, u) {
      if (a.flags |= sl, Pr && Pp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        nx(a), or() && a.mode & we && q0();
        var f = aC(t);
        if (f !== null) {
          f.flags &= ~er, iC(f, t, a, e, u), f.mode & we && rC(e, s, u), tx(f, e, s);
          return;
        } else {
          if (!Td(u)) {
            rC(e, s, u), HS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (or() && a.mode & we) {
        q0();
        var v = aC(t);
        if (v !== null) {
          (v.flags & Fn) === _e && (v.flags |= er), iC(v, t, a, e, u), Ky(tc(i, a));
          return;
        }
      }
      i = tc(i, a), A_(i);
      var y = t;
      do {
        switch (y.tag) {
          case ce: {
            var g = i;
            y.flags |= Fn;
            var x = oo(u);
            y.lanes = $e(y.lanes, x);
            var R = nC(y, g, x);
            dg(y, R);
            return;
          }
          case xe:
            var M = i, z = y.type, F = y.stateNode;
            if ((y.flags & Fe) === _e && (typeof z.getDerivedStateFromError == "function" || F !== null && typeof F.componentDidCatch == "function" && !a1(F))) {
              y.flags |= Fn;
              var J = oo(u);
              y.lanes = $e(y.lanes, J);
              var be = iS(y, M, J);
              dg(y, be);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function ax() {
      return null;
    }
    var _p = rt.ReactCurrentOwner, Qi = !1, lS, bp, uS, oS, sS, nc, cS, fm, Dp;
    lS = {}, bp = {}, uS = {}, oS = {}, sS = {}, nc = !1, cS = {}, fm = {}, Dp = {};
    function Xr(e, t, a, i) {
      e === null ? t.child = oE(t, null, a, i) : t.child = yf(t, e.child, a, i);
    }
    function ix(e, t, a, i) {
      t.child = yf(t, e.child, null, i), t.child = yf(t, null, a, i);
    }
    function lC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Vi(
          s,
          i,
          // Resolved props
          "prop",
          tt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Sf(t, u), $r(t);
      {
        if (_p.current = t, An(!0), v = xf(e, t, f, i, p, u), y = _f(), t.mode & $t) {
          Tn(!0);
          try {
            v = xf(e, t, f, i, p, u), y = _f();
          } finally {
            Tn(!1);
          }
        }
        An(!1);
      }
      return Yr(), e !== null && !Qi ? (TE(e, t, u), wu(e, t, u)) : (or() && y && Iy(t), t.flags |= za, Xr(e, t, v, u), t.child);
    }
    function uC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (cb(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = zf(s), t.tag = Be, t.type = f, pS(t, s), oC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && Vi(
            p,
            i,
            // Resolved props
            "prop",
            tt(s)
          ), a.defaultProps !== void 0) {
            var v = tt(s) || "Unknown";
            Dp[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Dp[v] = !0);
          }
        }
        var y = XS(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var g = a.type, x = g.propTypes;
        x && Vi(
          x,
          i,
          // Resolved props
          "prop",
          tt(g)
        );
      }
      var R = e.child, M = SS(e, u);
      if (!M) {
        var z = R.memoizedProps, F = a.compare;
        if (F = F !== null ? F : sn, F(z, i) && e.ref === t.ref)
          return wu(e, t, u);
      }
      t.flags |= za;
      var J = uc(R, i);
      return J.ref = t.ref, J.return = t, t.child = J, J;
    }
    function oC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === _n) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && Vi(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            tt(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (sn(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (Qi = !1, t.pendingProps = i = g, SS(e, u))
            (e.flags & Rc) !== _e && (Qi = !0);
          else return t.lanes = e.lanes, wu(e, t, u);
      }
      return fS(e, t, a, i, u);
    }
    function sC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || _)
        if ((t.mode & we) === K) {
          var f = {
            baseLanes: P,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, wm(t, a);
        } else if (Or(a, Ir)) {
          var x = {
            baseLanes: P,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = x;
          var R = s !== null ? s.baseLanes : a;
          wm(t, R);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = $e(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = Ir;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, wm(t, v), null;
        }
      else {
        var M;
        s !== null ? (M = $e(s.baseLanes, a), t.memoizedState = null) : M = a, wm(t, M);
      }
      return Xr(e, t, u, a), t.child;
    }
    function lx(e, t, a) {
      var i = t.pendingProps;
      return Xr(e, t, i, a), t.child;
    }
    function ux(e, t, a) {
      var i = t.pendingProps.children;
      return Xr(e, t, i, a), t.child;
    }
    function ox(e, t, a) {
      {
        t.flags |= me;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Xr(e, t, s, a), t.child;
    }
    function cC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= jr, t.flags |= Ja);
    }
    function fS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Vi(
          s,
          i,
          // Resolved props
          "prop",
          tt(a)
        );
      }
      var f;
      {
        var p = df(t, a, !0);
        f = pf(t, p);
      }
      var v, y;
      Sf(t, u), $r(t);
      {
        if (_p.current = t, An(!0), v = xf(e, t, a, i, f, u), y = _f(), t.mode & $t) {
          Tn(!0);
          try {
            v = xf(e, t, a, i, f, u), y = _f();
          } finally {
            Tn(!1);
          }
        }
        An(!1);
      }
      return Yr(), e !== null && !Qi ? (TE(e, t, u), wu(e, t, u)) : (or() && y && Iy(t), t.flags |= za, Xr(e, t, v, u), t.child);
    }
    function fC(e, t, a, i, u) {
      {
        switch (xb(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= Fe, t.flags |= Fn;
            var y = new Error("Simulated error coming from DevTools"), g = oo(u);
            t.lanes = $e(t.lanes, g);
            var x = iS(t, tc(y, t), g);
            dg(t, x);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var R = a.propTypes;
          R && Vi(
            R,
            i,
            // Resolved props
            "prop",
            tt(a)
          );
        }
      }
      var M;
      bl(a) ? (M = !0, Rh(t)) : M = !1, Sf(t, u);
      var z = t.stateNode, F;
      z === null ? (pm(e, t), eC(t, a, i), nS(t, a, i, u), F = !0) : e === null ? F = Kw(t, a, i, u) : F = Zw(e, t, a, i, u);
      var J = dS(e, t, a, F, M, u);
      {
        var be = t.stateNode;
        F && be.props !== i && (nc || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ue(t) || "a component"), nc = !0);
      }
      return J;
    }
    function dS(e, t, a, i, u, s) {
      cC(e, t);
      var f = (t.flags & Fe) !== _e;
      if (!i && !f)
        return u && Q0(t, a, !1), wu(e, t, s);
      var p = t.stateNode;
      _p.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, XE();
      else {
        $r(t);
        {
          if (An(!0), v = p.render(), t.mode & $t) {
            Tn(!0);
            try {
              p.render();
            } finally {
              Tn(!1);
            }
          }
          An(!1);
        }
        Yr();
      }
      return t.flags |= za, e !== null && f ? ix(e, t, v, s) : Xr(e, t, v, s), t.memoizedState = p.state, u && Q0(t, a, !0), t.child;
    }
    function dC(e) {
      var t = e.stateNode;
      t.pendingContext ? Y0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Y0(e, t.context, !1), pg(e, t.containerInfo);
    }
    function sx(e, t, a) {
      if (dC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      hE(e, t), Vh(t, i, null, a);
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
        if (y.baseState = v, t.memoizedState = v, t.flags & er) {
          var g = tc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return pC(e, t, p, a, g);
        } else if (p !== s) {
          var x = tc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return pC(e, t, p, a, x);
        } else {
          dw(t);
          var R = oE(t, null, p, a);
          t.child = R;
          for (var M = R; M; )
            M.flags = M.flags & ~zt | Za, M = M.sibling;
        }
      } else {
        if (mf(), p === s)
          return wu(e, t, a);
        Xr(e, t, p, a);
      }
      return t.child;
    }
    function pC(e, t, a, i, u) {
      return mf(), Ky(u), t.flags |= er, Xr(e, t, a, i), t.child;
    }
    function cx(e, t, a) {
      SE(t), e === null && qy(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Ly(i, u);
      return p ? f = null : s !== null && Ly(i, s) && (t.flags |= ca), cC(e, t), Xr(e, t, f, a), t.child;
    }
    function fx(e, t) {
      return e === null && qy(t), null;
    }
    function dx(e, t, a, i) {
      pm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = fb(v), g = Ii(v, u), x;
      switch (y) {
        case je:
          return pS(t, v), t.type = v = zf(v), x = fS(null, t, v, g, i), x;
        case xe:
          return t.type = v = $S(v), x = fC(null, t, v, g, i), x;
        case Ne:
          return t.type = v = YS(v), x = lC(null, t, v, g, i), x;
        case Je: {
          if (t.type !== t.elementType) {
            var R = v.propTypes;
            R && Vi(
              R,
              g,
              // Resolved for outer only
              "prop",
              tt(v)
            );
          }
          return x = uC(
            null,
            t,
            v,
            Ii(v.type, g),
            // The inner type can have defaults too
            i
          ), x;
        }
      }
      var M = "";
      throw v !== null && typeof v == "object" && v.$$typeof === _n && (M = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + M));
    }
    function px(e, t, a, i, u) {
      pm(e, t), t.tag = xe;
      var s;
      return bl(a) ? (s = !0, Rh(t)) : s = !1, Sf(t, u), eC(t, a, i), nS(t, a, i, u), dS(null, t, a, !0, s, u);
    }
    function vx(e, t, a, i) {
      pm(e, t);
      var u = t.pendingProps, s;
      {
        var f = df(t, a, !1);
        s = pf(t, f);
      }
      Sf(t, i);
      var p, v;
      $r(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = tt(a) || "Unknown";
          lS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), lS[y] = !0);
        }
        t.mode & $t && Pi.recordLegacyContextWarning(t, null), An(!0), _p.current = t, p = xf(null, t, a, u, s, i), v = _f(), An(!1);
      }
      if (Yr(), t.flags |= za, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = tt(a) || "Unknown";
        bp[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), bp[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var x = tt(a) || "Unknown";
          bp[x] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", x, x, x), bp[x] = !0);
        }
        t.tag = xe, t.memoizedState = null, t.updateQueue = null;
        var R = !1;
        return bl(a) ? (R = !0, Rh(t)) : R = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, fg(t), JE(t, p), nS(t, a, u, i), dS(null, t, a, !0, R, i);
      } else {
        if (t.tag = je, t.mode & $t) {
          Tn(!0);
          try {
            p = xf(null, t, a, u, s, i), v = _f();
          } finally {
            Tn(!1);
          }
        }
        return or() && v && Iy(t), Xr(null, t, p, i), pS(t, a), t.child;
      }
    }
    function pS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = ua();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), sS[u] || (sS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = tt(t) || "Unknown";
          Dp[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Dp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = tt(t) || "Unknown";
          oS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), oS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = tt(t) || "Unknown";
          uS[v] || (S("%s: Function components do not support contextType.", v), uS[v] = !0);
        }
      }
    }
    var vS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Ut
    };
    function hS(e) {
      return {
        baseLanes: e,
        cachePool: ax(),
        transitions: null
      };
    }
    function hx(e, t) {
      var a = null;
      return {
        baseLanes: $e(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function mx(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return mg(e, yp);
    }
    function yx(e, t) {
      return so(e.childLanes, t);
    }
    function vC(e, t, a) {
      var i = t.pendingProps;
      _b(t) && (t.flags |= Fe);
      var u = $i.current, s = !1, f = (t.flags & Fe) !== _e;
      if (f || mx(u, e) ? (s = !0, t.flags &= ~Fe) : (e === null || e.memoizedState !== null) && (u = Uw(u, CE)), u = Cf(u), Do(t, u), e === null) {
        qy(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return Tx(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var x = gx(t, y, g, a), R = t.child;
          return R.memoizedState = hS(a), t.memoizedState = vS, x;
        } else
          return mS(t, y);
      } else {
        var M = e.memoizedState;
        if (M !== null) {
          var z = M.dehydrated;
          if (z !== null)
            return Rx(e, t, f, i, z, M, a);
        }
        if (s) {
          var F = i.fallback, J = i.children, be = Ex(e, t, J, F, a), Ee = t.child, ut = e.child.memoizedState;
          return Ee.memoizedState = ut === null ? hS(a) : hx(ut, a), Ee.childLanes = yx(e, a), t.memoizedState = vS, be;
        } else {
          var Ze = i.children, D = Sx(e, t, Ze, a);
          return t.memoizedState = null, D;
        }
      }
    }
    function mS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = yS(u, i);
      return s.return = e, e.child = s, s;
    }
    function gx(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & we) === K && s !== null ? (p = s, p.childLanes = P, p.pendingProps = f, e.mode & Ae && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Ao(a, u, i, null)) : (p = yS(f, u), v = Ao(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function yS(e, t, a) {
      return h1(e, t, P, null);
    }
    function hC(e, t) {
      return uc(e, t);
    }
    function Sx(e, t, a, i) {
      var u = e.child, s = u.sibling, f = hC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & we) === K && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= mt) : p.push(s);
      }
      return t.child = f, f;
    }
    function Ex(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & we) === K && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = P, y.pendingProps = v, t.mode & Ae && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = hC(f, v), y.subtreeFlags = f.subtreeFlags & Hn;
      var x;
      return p !== null ? x = uc(p, i) : (x = Ao(i, s, u, null), x.flags |= zt), x.return = t, y.return = t, y.sibling = x, t.child = y, x;
    }
    function dm(e, t, a, i) {
      i !== null && Ky(i), yf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = mS(t, s);
      return f.flags |= zt, t.memoizedState = null, f;
    }
    function Cx(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = yS(f, s), v = Ao(i, s, u, null);
      return v.flags |= zt, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & we) !== K && yf(t, e.child, null, u), v;
    }
    function Tx(e, t, a) {
      return (e.mode & we) === K ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = ge) : Uy(t) ? e.lanes = Ui : e.lanes = Ir, null;
    }
    function Rx(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & er) {
          t.flags &= ~er;
          var D = rS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return dm(e, t, f, D);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Fe, null;
          var H = i.children, k = i.fallback, Q = Cx(e, t, H, k, f), oe = t.child;
          return oe.memoizedState = hS(f), t.memoizedState = vS, Q;
        }
      else {
        if (cw(), (t.mode & we) === K)
          return dm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Uy(u)) {
          var p, v, y;
          {
            var g = bR(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var x;
          v ? x = new Error(v) : x = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var R = rS(x, p, y);
          return dm(e, t, f, R);
        }
        var M = Or(f, e.childLanes);
        if (Qi || M) {
          var z = Rm();
          if (z !== null) {
            var F = Dd(z, f);
            if (F !== Ut && F !== s.retryLane) {
              s.retryLane = F;
              var J = At;
              ga(e, F), Wn(z, e, F, J);
            }
          }
          HS();
          var be = rS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return dm(e, t, f, be);
        } else if (H0(u)) {
          t.flags |= Fe, t.child = e.child;
          var Ee = G_.bind(null, e);
          return DR(u, Ee), null;
        } else {
          pw(t, u, s.treeContext);
          var ut = i.children, Ze = mS(t, ut);
          return Ze.flags |= Za, Ze;
        }
      }
    }
    function mC(e, t, a) {
      e.lanes = $e(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = $e(i.lanes, t)), ug(e.return, t, a);
    }
    function wx(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Ce) {
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
    function xx(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Yh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function _x(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !cS[e])
        if (cS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function bx(e, t) {
      e !== void 0 && !fm[e] && (e !== "collapsed" && e !== "hidden" ? (fm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (fm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function yC(e, t) {
      {
        var a = ct(e), i = !a && typeof Qa(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Dx(e, t) {
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
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function gS(e, t, a, i, u) {
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
      _x(u), bx(s, u), Dx(f, u), Xr(e, t, f, a);
      var p = $i.current, v = mg(p, yp);
      if (v)
        p = yg(p, yp), t.flags |= Fe;
      else {
        var y = e !== null && (e.flags & Fe) !== _e;
        y && wx(t, t.child, a), p = Cf(p);
      }
      if (Do(t, p), (t.mode & we) === K)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = xx(t.child), x;
            g === null ? (x = t.child, t.child = null) : (x = g.sibling, g.sibling = null), gS(
              t,
              !1,
              // isBackwards
              x,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var R = null, M = t.child;
            for (t.child = null; M !== null; ) {
              var z = M.alternate;
              if (z !== null && Yh(z) === null) {
                t.child = M;
                break;
              }
              var F = M.sibling;
              M.sibling = R, R = M, M = F;
            }
            gS(
              t,
              !0,
              // isBackwards
              R,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            gS(
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
    function kx(e, t, a) {
      pg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = yf(t, null, i, a) : Xr(e, t, i, a), t.child;
    }
    var SC = !1;
    function Ox(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || SC || (SC = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Vi(v, s, "prop", "Context.Provider");
      }
      if (fE(t, u, p), f !== null) {
        var y = f.value;
        if (Se(y, p)) {
          if (f.children === s.children && !Ch())
            return wu(e, t, a);
        } else
          _w(t, u, a);
      }
      var g = s.children;
      return Xr(e, t, g, a), t.child;
    }
    var EC = !1;
    function Lx(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (EC || (EC = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Sf(t, a);
      var f = Ln(i);
      $r(t);
      var p;
      return _p.current = t, An(!0), p = s(f), An(!1), Yr(), t.flags |= za, Xr(e, t, p, a), t.child;
    }
    function kp() {
      Qi = !0;
    }
    function pm(e, t) {
      (t.mode & we) === K && e !== null && (e.alternate = null, t.alternate = null, t.flags |= zt);
    }
    function wu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), XE(), Bp(t.lanes), Or(a, t.childLanes) ? (ww(e, t), t.child) : null;
    }
    function Mx(e, t, a) {
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
        return s === null ? (i.deletions = [e], i.flags |= mt) : s.push(e), a.flags |= zt, a;
      }
    }
    function SS(e, t) {
      var a = e.lanes;
      return !!Or(a, t);
    }
    function Nx(e, t, a) {
      switch (t.tag) {
        case ce:
          dC(t), t.stateNode, mf();
          break;
        case ae:
          SE(t);
          break;
        case xe: {
          var i = t.type;
          bl(i) && Rh(t);
          break;
        }
        case Ve:
          pg(t, t.stateNode.containerInfo);
          break;
        case It: {
          var u = t.memoizedProps.value, s = t.type._context;
          fE(t, s, u);
          break;
        }
        case St:
          {
            var f = Or(a, t.childLanes);
            f && (t.flags |= me);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Ce: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Do(t, Cf($i.current)), t.flags |= Fe, null;
            var y = t.child, g = y.childLanes;
            if (Or(a, g))
              return vC(e, t, a);
            Do(t, Cf($i.current));
            var x = wu(e, t, a);
            return x !== null ? x.sibling : null;
          } else
            Do(t, Cf($i.current));
          break;
        }
        case ft: {
          var R = (e.flags & Fe) !== _e, M = Or(a, t.childLanes);
          if (R) {
            if (M)
              return gC(e, t, a);
            t.flags |= Fe;
          }
          var z = t.memoizedState;
          if (z !== null && (z.rendering = null, z.tail = null, z.lastEffect = null), Do(t, $i.current), M)
            break;
          return null;
        }
        case We:
        case st:
          return t.lanes = P, sC(e, t, a);
      }
      return wu(e, t, a);
    }
    function CC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Mx(e, t, XS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Ch() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Qi = !0;
        else {
          var s = SS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Fe) === _e)
            return Qi = !1, Nx(e, t, a);
          (e.flags & Rc) !== _e ? Qi = !0 : Qi = !1;
        }
      } else if (Qi = !1, or() && aw(t)) {
        var f = t.index, p = iw();
        X0(t, p, f);
      }
      switch (t.lanes = P, t.tag) {
        case Ke:
          return vx(e, t, t.type, a);
        case Sn: {
          var v = t.elementType;
          return dx(e, t, v, a);
        }
        case je: {
          var y = t.type, g = t.pendingProps, x = t.elementType === y ? g : Ii(y, g);
          return fS(e, t, y, x, a);
        }
        case xe: {
          var R = t.type, M = t.pendingProps, z = t.elementType === R ? M : Ii(R, M);
          return fC(e, t, R, z, a);
        }
        case ce:
          return sx(e, t, a);
        case ae:
          return cx(e, t, a);
        case Te:
          return fx(e, t);
        case Ce:
          return vC(e, t, a);
        case Ve:
          return kx(e, t, a);
        case Ne: {
          var F = t.type, J = t.pendingProps, be = t.elementType === F ? J : Ii(F, J);
          return lC(e, t, F, be, a);
        }
        case at:
          return lx(e, t, a);
        case Mn:
          return ux(e, t, a);
        case St:
          return ox(e, t, a);
        case It:
          return Ox(e, t, a);
        case Nn:
          return Lx(e, t, a);
        case Je: {
          var Ee = t.type, ut = t.pendingProps, Ze = Ii(Ee, ut);
          if (t.type !== t.elementType) {
            var D = Ee.propTypes;
            D && Vi(
              D,
              Ze,
              // Resolved for outer only
              "prop",
              tt(Ee)
            );
          }
          return Ze = Ii(Ee.type, Ze), uC(e, t, Ee, Ze, a);
        }
        case Be:
          return oC(e, t, t.type, t.pendingProps, a);
        case En: {
          var H = t.type, k = t.pendingProps, Q = t.elementType === H ? k : Ii(H, k);
          return px(e, t, H, Q, a);
        }
        case ft:
          return gC(e, t, a);
        case nn:
          break;
        case We:
          return sC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function bf(e) {
      e.flags |= me;
    }
    function TC(e) {
      e.flags |= jr, e.flags |= Ja;
    }
    var RC, ES, wC, xC;
    RC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === ae || u.tag === Te)
          tR(e, u.stateNode);
        else if (u.tag !== Ve) {
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
    }, ES = function(e, t) {
    }, wC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = vg(), v = rR(f, a, s, i, u, p);
        t.updateQueue = v, v && bf(t);
      }
    }, xC = function(e, t, a, i) {
      a !== i && bf(t);
    };
    function Op(e, t) {
      if (!or())
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
    function cr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = P, i = _e;
      if (t) {
        if ((e.mode & Ae) !== K) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = $e(a, $e(y.lanes, y.childLanes)), i |= y.subtreeFlags & Hn, i |= y.flags & Hn, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = $e(a, $e(g.lanes, g.childLanes)), i |= g.subtreeFlags & Hn, i |= g.flags & Hn, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Ae) !== K) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = $e(a, $e(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = $e(a, $e(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function zx(e, t, a) {
      if (gw() && (t.mode & we) !== K && (t.flags & Fe) === _e)
        return nE(t), mf(), t.flags |= er | sl | Fn, !1;
      var i = Dh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (mw(t), cr(t), (t.mode & Ae) !== K) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (mf(), (t.flags & Fe) === _e && (t.memoizedState = null), t.flags |= me, cr(t), (t.mode & Ae) !== K) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return rE(), !0;
    }
    function _C(e, t, a) {
      var i = t.pendingProps;
      switch (Qy(t), t.tag) {
        case Ke:
        case Sn:
        case Be:
        case je:
        case Ne:
        case at:
        case Mn:
        case St:
        case Nn:
        case Je:
          return cr(t), null;
        case xe: {
          var u = t.type;
          return bl(u) && Th(t), cr(t), null;
        }
        case ce: {
          var s = t.stateNode;
          if (Ef(t), Py(t), Sg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Dh(t);
            if (f)
              bf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & er) !== _e) && (t.flags |= hn, rE());
            }
          }
          return ES(e, t), cr(t), null;
        }
        case ae: {
          hg(t);
          var v = gE(), y = t.type;
          if (e !== null && t.stateNode != null)
            wC(e, t, y, i, v), e.ref !== t.ref && TC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return cr(t), null;
            }
            var g = vg(), x = Dh(t);
            if (x)
              vw(t, v, g) && bf(t);
            else {
              var R = eR(y, i, v, g, t);
              RC(R, t, !1, !1), t.stateNode = R, nR(R, y, i, v) && bf(t);
            }
            t.ref !== null && TC(t);
          }
          return cr(t), null;
        }
        case Te: {
          var M = i;
          if (e && t.stateNode != null) {
            var z = e.memoizedProps;
            xC(e, t, z, M);
          } else {
            if (typeof M != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var F = gE(), J = vg(), be = Dh(t);
            be ? hw(t) && bf(t) : t.stateNode = aR(M, F, J, t);
          }
          return cr(t), null;
        }
        case Ce: {
          Tf(t);
          var Ee = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var ut = zx(e, t, Ee);
            if (!ut)
              return t.flags & Fn ? t : null;
          }
          if ((t.flags & Fe) !== _e)
            return t.lanes = a, (t.mode & Ae) !== K && Yg(t), t;
          var Ze = Ee !== null, D = e !== null && e.memoizedState !== null;
          if (Ze !== D && Ze) {
            var H = t.child;
            if (H.flags |= ol, (t.mode & we) !== K) {
              var k = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !B);
              k || mg($i.current, CE) ? U_() : HS();
            }
          }
          var Q = t.updateQueue;
          if (Q !== null && (t.flags |= me), cr(t), (t.mode & Ae) !== K && Ze) {
            var oe = t.child;
            oe !== null && (t.treeBaseDuration -= oe.treeBaseDuration);
          }
          return null;
        }
        case Ve:
          return Ef(t), ES(e, t), e === null && KR(t.stateNode.containerInfo), cr(t), null;
        case It:
          var te = t.type._context;
          return lg(te, t), cr(t), null;
        case En: {
          var Me = t.type;
          return bl(Me) && Th(t), cr(t), null;
        }
        case ft: {
          Tf(t);
          var Pe = t.memoizedState;
          if (Pe === null)
            return cr(t), null;
          var Mt = (t.flags & Fe) !== _e, yt = Pe.rendering;
          if (yt === null)
            if (Mt)
              Op(Pe, !1);
            else {
              var wn = F_() && (e === null || (e.flags & Fe) === _e);
              if (!wn)
                for (var gt = t.child; gt !== null; ) {
                  var gn = Yh(gt);
                  if (gn !== null) {
                    Mt = !0, t.flags |= Fe, Op(Pe, !1);
                    var zr = gn.updateQueue;
                    return zr !== null && (t.updateQueue = zr, t.flags |= me), t.subtreeFlags = _e, xw(t, a), Do(t, yg($i.current, yp)), t.child;
                  }
                  gt = gt.sibling;
                }
              Pe.tail !== null && mn() > WC() && (t.flags |= Fe, Mt = !0, Op(Pe, !1), t.lanes = Lv);
            }
          else {
            if (!Mt) {
              var hr = Yh(yt);
              if (hr !== null) {
                t.flags |= Fe, Mt = !0;
                var Pa = hr.updateQueue;
                if (Pa !== null && (t.updateQueue = Pa, t.flags |= me), Op(Pe, !0), Pe.tail === null && Pe.tailMode === "hidden" && !yt.alternate && !or())
                  return cr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              mn() * 2 - Pe.renderingStartTime > WC() && a !== Ir && (t.flags |= Fe, Mt = !0, Op(Pe, !1), t.lanes = Lv);
            }
            if (Pe.isBackwards)
              yt.sibling = t.child, t.child = yt;
            else {
              var Zr = Pe.last;
              Zr !== null ? Zr.sibling = yt : t.child = yt, Pe.last = yt;
            }
          }
          if (Pe.tail !== null) {
            var Jr = Pe.tail;
            Pe.rendering = Jr, Pe.tail = Jr.sibling, Pe.renderingStartTime = mn(), Jr.sibling = null;
            var Ur = $i.current;
            return Mt ? Ur = yg(Ur, yp) : Ur = Cf(Ur), Do(t, Ur), Jr;
          }
          return cr(t), null;
        }
        case nn:
          break;
        case We:
        case st: {
          FS(t);
          var ku = t.memoizedState, Uf = ku !== null;
          if (e !== null) {
            var Qp = e.memoizedState, Ul = Qp !== null;
            Ul !== Uf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !_ && (t.flags |= ol);
          }
          return !Uf || (t.mode & we) === K ? cr(t) : Or(zl, Ir) && (cr(t), t.subtreeFlags & (zt | me) && (t.flags |= ol)), null;
        }
        case Dt:
          return null;
        case Ge:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ux(e, t, a) {
      switch (Qy(t), t.tag) {
        case xe: {
          var i = t.type;
          bl(i) && Th(t);
          var u = t.flags;
          return u & Fn ? (t.flags = u & ~Fn | Fe, (t.mode & Ae) !== K && Yg(t), t) : null;
        }
        case ce: {
          t.stateNode, Ef(t), Py(t), Sg();
          var s = t.flags;
          return (s & Fn) !== _e && (s & Fe) === _e ? (t.flags = s & ~Fn | Fe, t) : null;
        }
        case ae:
          return hg(t), null;
        case Ce: {
          Tf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            mf();
          }
          var p = t.flags;
          return p & Fn ? (t.flags = p & ~Fn | Fe, (t.mode & Ae) !== K && Yg(t), t) : null;
        }
        case ft:
          return Tf(t), null;
        case Ve:
          return Ef(t), null;
        case It:
          var v = t.type._context;
          return lg(v, t), null;
        case We:
        case st:
          return FS(t), null;
        case Dt:
          return null;
        default:
          return null;
      }
    }
    function bC(e, t, a) {
      switch (Qy(t), t.tag) {
        case xe: {
          var i = t.type.childContextTypes;
          i != null && Th(t);
          break;
        }
        case ce: {
          t.stateNode, Ef(t), Py(t), Sg();
          break;
        }
        case ae: {
          hg(t);
          break;
        }
        case Ve:
          Ef(t);
          break;
        case Ce:
          Tf(t);
          break;
        case ft:
          Tf(t);
          break;
        case It:
          var u = t.type._context;
          lg(u, t);
          break;
        case We:
        case st:
          FS(t);
          break;
      }
    }
    var DC = null;
    DC = /* @__PURE__ */ new Set();
    var vm = !1, fr = !1, Ax = typeof WeakSet == "function" ? WeakSet : Set, de = null, Df = null, kf = null;
    function Fx(e) {
      Na(null, function() {
        throw e;
      }), Oi();
    }
    var Hx = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Ae)
        try {
          Ml(), t.componentWillUnmount();
        } finally {
          Ll(e);
        }
      else
        t.componentWillUnmount();
    };
    function kC(e, t) {
      try {
        Lo(Bn, e);
      } catch (a) {
        Yt(e, t, a);
      }
    }
    function CS(e, t, a) {
      try {
        Hx(e, a);
      } catch (i) {
        Yt(e, t, i);
      }
    }
    function jx(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        Yt(e, t, i);
      }
    }
    function OC(e, t) {
      try {
        MC(e);
      } catch (a) {
        Yt(e, t, a);
      }
    }
    function Of(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (ht && it && e.mode & Ae)
              try {
                Ml(), i = a(null);
              } finally {
                Ll(e);
              }
            else
              i = a(null);
          } catch (u) {
            Yt(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ue(e));
        } else
          a.current = null;
    }
    function hm(e, t, a) {
      try {
        a();
      } catch (i) {
        Yt(e, t, i);
      }
    }
    var LC = !1;
    function Vx(e, t) {
      ZT(e.containerInfo), de = t, Bx();
      var a = LC;
      return LC = !1, a;
    }
    function Bx() {
      for (; de !== null; ) {
        var e = de, t = e.child;
        (e.subtreeFlags & xr) !== _e && t !== null ? (t.return = e, de = t) : Px();
      }
    }
    function Px() {
      for (; de !== null; ) {
        var e = de;
        Zt(e);
        try {
          $x(e);
        } catch (a) {
          Yt(e, e.return, a);
        }
        Vt();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, de = t;
          return;
        }
        de = e.return;
      }
    }
    function $x(e) {
      var t = e.alternate, a = e.flags;
      if ((a & hn) !== _e) {
        switch (Zt(e), e.tag) {
          case je:
          case Ne:
          case Be:
            break;
          case xe: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !nc && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ue(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ue(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : Ii(e.type, i), u);
              {
                var p = DC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ue(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case ce: {
            {
              var v = e.stateNode;
              RR(v.containerInfo);
            }
            break;
          }
          case ae:
          case Te:
          case Ve:
          case En:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Vt();
      }
    }
    function Wi(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & sr) !== Sa ? Oc(t) : (e & Bn) !== Sa && qu(t), (e & Dl) !== Sa && $p(!0), hm(t, a, p), (e & Dl) !== Sa && $p(!1), (e & sr) !== Sa ? kv() : (e & Bn) !== Sa && Ku());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Lo(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & sr) !== Sa ? kc(t) : (e & Bn) !== Sa && ms(t);
            var f = s.create;
            (e & Dl) !== Sa && $p(!0), s.destroy = f(), (e & Dl) !== Sa && $p(!1), (e & sr) !== Sa ? Dv() : (e & Bn) !== Sa && ei();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & Bn) !== _e ? v = "useLayoutEffect" : (s.tag & Dl) !== _e ? v = "useInsertionEffect" : v = "useEffect";
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

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, S("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function Yx(e, t) {
      if ((t.flags & me) !== _e)
        switch (t.tag) {
          case St: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = WE(), p = t.alternate === null ? "mount" : "update";
            QE() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case ce:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case St:
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
    function Ix(e, t, a, i) {
      if ((a.flags & Ua) !== _e)
        switch (a.tag) {
          case je:
          case Ne:
          case Be: {
            if (!fr)
              if (a.mode & Ae)
                try {
                  Ml(), Lo(Bn | Vn, a);
                } finally {
                  Ll(a);
                }
              else
                Lo(Bn | Vn, a);
            break;
          }
          case xe: {
            var u = a.stateNode;
            if (a.flags & me && !fr)
              if (t === null)
                if (a.type === a.elementType && !nc && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ue(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ue(a) || "instance")), a.mode & Ae)
                  try {
                    Ml(), u.componentDidMount();
                  } finally {
                    Ll(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : Ii(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !nc && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ue(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ue(a) || "instance")), a.mode & Ae)
                  try {
                    Ml(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Ll(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !nc && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ue(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ue(a) || "instance")), yE(a, p, u));
            break;
          }
          case ce: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case ae:
                    y = a.child.stateNode;
                    break;
                  case xe:
                    y = a.child.stateNode;
                    break;
                }
              yE(a, v, y);
            }
            break;
          }
          case ae: {
            var g = a.stateNode;
            if (t === null && a.flags & me) {
              var x = a.type, R = a.memoizedProps;
              sR(g, x, R);
            }
            break;
          }
          case Te:
            break;
          case Ve:
            break;
          case St: {
            {
              var M = a.memoizedProps, z = M.onCommit, F = M.onRender, J = a.stateNode.effectDuration, be = WE(), Ee = t === null ? "mount" : "update";
              QE() && (Ee = "nested-update"), typeof F == "function" && F(a.memoizedProps.id, Ee, a.actualDuration, a.treeBaseDuration, a.actualStartTime, be);
              {
                typeof z == "function" && z(a.memoizedProps.id, Ee, J, be), P_(a);
                var ut = a.return;
                e: for (; ut !== null; ) {
                  switch (ut.tag) {
                    case ce:
                      var Ze = ut.stateNode;
                      Ze.effectDuration += J;
                      break e;
                    case St:
                      var D = ut.stateNode;
                      D.effectDuration += J;
                      break e;
                  }
                  ut = ut.return;
                }
              }
            }
            break;
          }
          case Ce: {
            Jx(e, a);
            break;
          }
          case ft:
          case En:
          case nn:
          case We:
          case st:
          case Ge:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      fr || a.flags & jr && MC(a);
    }
    function Qx(e) {
      switch (e.tag) {
        case je:
        case Ne:
        case Be: {
          if (e.mode & Ae)
            try {
              Ml(), kC(e, e.return);
            } finally {
              Ll(e);
            }
          else
            kC(e, e.return);
          break;
        }
        case xe: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && jx(e, e.return, t), OC(e, e.return);
          break;
        }
        case ae: {
          OC(e, e.return);
          break;
        }
      }
    }
    function Wx(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === ae) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? SR(u) : CR(i.stateNode, i.memoizedProps);
            } catch (f) {
              Yt(e, e.return, f);
            }
          }
        } else if (i.tag === Te) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? ER(s) : TR(s, i.memoizedProps);
            } catch (f) {
              Yt(e, e.return, f);
            }
        } else if (!((i.tag === We || i.tag === st) && i.memoizedState !== null && i !== e)) {
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
          case ae:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Ae)
            try {
              Ml(), u = t(i);
            } finally {
              Ll(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ue(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ue(e)), t.current = i;
      }
    }
    function Gx(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function NC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, NC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === ae) {
          var a = e.stateNode;
          a !== null && ew(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Xx(e) {
      for (var t = e.return; t !== null; ) {
        if (zC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function zC(e) {
      return e.tag === ae || e.tag === ce || e.tag === Ve;
    }
    function UC(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || zC(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== ae && t.tag !== Te && t.tag !== Qt; ) {
          if (t.flags & zt || t.child === null || t.tag === Ve)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & zt))
          return t.stateNode;
      }
    }
    function qx(e) {
      var t = Xx(e);
      switch (t.tag) {
        case ae: {
          var a = t.stateNode;
          t.flags & ca && (F0(a), t.flags &= ~ca);
          var i = UC(e);
          RS(e, i, a);
          break;
        }
        case ce:
        case Ve: {
          var u = t.stateNode.containerInfo, s = UC(e);
          TS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function TS(e, t, a) {
      var i = e.tag, u = i === ae || i === Te;
      if (u) {
        var s = e.stateNode;
        t ? hR(a, s, t) : pR(a, s);
      } else if (i !== Ve) {
        var f = e.child;
        if (f !== null) {
          TS(f, t, a);
          for (var p = f.sibling; p !== null; )
            TS(p, t, a), p = p.sibling;
        }
      }
    }
    function RS(e, t, a) {
      var i = e.tag, u = i === ae || i === Te;
      if (u) {
        var s = e.stateNode;
        t ? vR(a, s, t) : dR(a, s);
      } else if (i !== Ve) {
        var f = e.child;
        if (f !== null) {
          RS(f, t, a);
          for (var p = f.sibling; p !== null; )
            RS(p, t, a), p = p.sibling;
        }
      }
    }
    var dr = null, Gi = !1;
    function Kx(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case ae: {
              dr = i.stateNode, Gi = !1;
              break e;
            }
            case ce: {
              dr = i.stateNode.containerInfo, Gi = !0;
              break e;
            }
            case Ve: {
              dr = i.stateNode.containerInfo, Gi = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (dr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        AC(e, t, a), dr = null, Gi = !1;
      }
      Gx(a);
    }
    function Mo(e, t, a) {
      for (var i = a.child; i !== null; )
        AC(e, t, i), i = i.sibling;
    }
    function AC(e, t, a) {
      switch (cd(a), a.tag) {
        case ae:
          fr || Of(a, t);
        case Te: {
          {
            var i = dr, u = Gi;
            dr = null, Mo(e, t, a), dr = i, Gi = u, dr !== null && (Gi ? yR(dr, a.stateNode) : mR(dr, a.stateNode));
          }
          return;
        }
        case Qt: {
          dr !== null && (Gi ? gR(dr, a.stateNode) : zy(dr, a.stateNode));
          return;
        }
        case Ve: {
          {
            var s = dr, f = Gi;
            dr = a.stateNode.containerInfo, Gi = !0, Mo(e, t, a), dr = s, Gi = f;
          }
          return;
        }
        case je:
        case Ne:
        case Je:
        case Be: {
          if (!fr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var x = g, R = x.destroy, M = x.tag;
                  R !== void 0 && ((M & Dl) !== Sa ? hm(a, t, R) : (M & Bn) !== Sa && (qu(a), a.mode & Ae ? (Ml(), hm(a, t, R), Ll(a)) : hm(a, t, R), Ku())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Mo(e, t, a);
          return;
        }
        case xe: {
          if (!fr) {
            Of(a, t);
            var z = a.stateNode;
            typeof z.componentWillUnmount == "function" && CS(a, t, z);
          }
          Mo(e, t, a);
          return;
        }
        case nn: {
          Mo(e, t, a);
          return;
        }
        case We: {
          if (
            // TODO: Remove this dead flag
            a.mode & we
          ) {
            var F = fr;
            fr = F || a.memoizedState !== null, Mo(e, t, a), fr = F;
          } else
            Mo(e, t, a);
          break;
        }
        default: {
          Mo(e, t, a);
          return;
        }
      }
    }
    function Zx(e) {
      e.memoizedState;
    }
    function Jx(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && FR(s);
          }
        }
      }
    }
    function FC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Ax()), t.forEach(function(i) {
          var u = X_.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Pr)
              if (Df !== null && kf !== null)
                Pp(kf, Df);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function e_(e, t, a) {
      Df = a, kf = e, Zt(t), HC(t, e), Zt(t), Df = null, kf = null;
    }
    function Xi(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            Kx(e, t, s);
          } catch (v) {
            Yt(s, t, v);
          }
        }
      var f = qo();
      if (t.subtreeFlags & _r)
        for (var p = t.child; p !== null; )
          Zt(p), HC(p, e), p = p.sibling;
      Zt(f);
    }
    function HC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case je:
        case Ne:
        case Je:
        case Be: {
          if (Xi(t, e), Nl(e), u & me) {
            try {
              Wi(Dl | Vn, e, e.return), Lo(Dl | Vn, e);
            } catch (Me) {
              Yt(e, e.return, Me);
            }
            if (e.mode & Ae) {
              try {
                Ml(), Wi(Bn | Vn, e, e.return);
              } catch (Me) {
                Yt(e, e.return, Me);
              }
              Ll(e);
            } else
              try {
                Wi(Bn | Vn, e, e.return);
              } catch (Me) {
                Yt(e, e.return, Me);
              }
          }
          return;
        }
        case xe: {
          Xi(t, e), Nl(e), u & jr && i !== null && Of(i, i.return);
          return;
        }
        case ae: {
          Xi(t, e), Nl(e), u & jr && i !== null && Of(i, i.return);
          {
            if (e.flags & ca) {
              var s = e.stateNode;
              try {
                F0(s);
              } catch (Me) {
                Yt(e, e.return, Me);
              }
            }
            if (u & me) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    cR(f, g, y, v, p, e);
                  } catch (Me) {
                    Yt(e, e.return, Me);
                  }
              }
            }
          }
          return;
        }
        case Te: {
          if (Xi(t, e), Nl(e), u & me) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var x = e.stateNode, R = e.memoizedProps, M = i !== null ? i.memoizedProps : R;
            try {
              fR(x, M, R);
            } catch (Me) {
              Yt(e, e.return, Me);
            }
          }
          return;
        }
        case ce: {
          if (Xi(t, e), Nl(e), u & me && i !== null) {
            var z = i.memoizedState;
            if (z.isDehydrated)
              try {
                AR(t.containerInfo);
              } catch (Me) {
                Yt(e, e.return, Me);
              }
          }
          return;
        }
        case Ve: {
          Xi(t, e), Nl(e);
          return;
        }
        case Ce: {
          Xi(t, e), Nl(e);
          var F = e.child;
          if (F.flags & ol) {
            var J = F.stateNode, be = F.memoizedState, Ee = be !== null;
            if (J.isHidden = Ee, Ee) {
              var ut = F.alternate !== null && F.alternate.memoizedState !== null;
              ut || z_();
            }
          }
          if (u & me) {
            try {
              Zx(e);
            } catch (Me) {
              Yt(e, e.return, Me);
            }
            FC(e);
          }
          return;
        }
        case We: {
          var Ze = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & we
          ) {
            var D = fr;
            fr = D || Ze, Xi(t, e), fr = D;
          } else
            Xi(t, e);
          if (Nl(e), u & ol) {
            var H = e.stateNode, k = e.memoizedState, Q = k !== null, oe = e;
            if (H.isHidden = Q, Q && !Ze && (oe.mode & we) !== K) {
              de = oe;
              for (var te = oe.child; te !== null; )
                de = te, n_(te), te = te.sibling;
            }
            Wx(oe, Q);
          }
          return;
        }
        case ft: {
          Xi(t, e), Nl(e), u & me && FC(e);
          return;
        }
        case nn:
          return;
        default: {
          Xi(t, e), Nl(e);
          return;
        }
      }
    }
    function Nl(e) {
      var t = e.flags;
      if (t & zt) {
        try {
          qx(e);
        } catch (a) {
          Yt(e, e.return, a);
        }
        e.flags &= ~zt;
      }
      t & Za && (e.flags &= ~Za);
    }
    function t_(e, t, a) {
      Df = a, kf = t, de = e, jC(e, t, a), Df = null, kf = null;
    }
    function jC(e, t, a) {
      for (var i = (e.mode & we) !== K; de !== null; ) {
        var u = de, s = u.child;
        if (u.tag === We && i) {
          var f = u.memoizedState !== null, p = f || vm;
          if (p) {
            wS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || fr, x = vm, R = fr;
            vm = p, fr = g, fr && !R && (de = u, r_(u));
            for (var M = s; M !== null; )
              de = M, jC(
                M,
                // New root; bubble back up to here and stop.
                t,
                a
              ), M = M.sibling;
            de = u, vm = x, fr = R, wS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Ua) !== _e && s !== null ? (s.return = u, de = s) : wS(e, t, a);
      }
    }
    function wS(e, t, a) {
      for (; de !== null; ) {
        var i = de;
        if ((i.flags & Ua) !== _e) {
          var u = i.alternate;
          Zt(i);
          try {
            Ix(t, u, i, a);
          } catch (f) {
            Yt(i, i.return, f);
          }
          Vt();
        }
        if (i === e) {
          de = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, de = s;
          return;
        }
        de = i.return;
      }
    }
    function n_(e) {
      for (; de !== null; ) {
        var t = de, a = t.child;
        switch (t.tag) {
          case je:
          case Ne:
          case Je:
          case Be: {
            if (t.mode & Ae)
              try {
                Ml(), Wi(Bn, t, t.return);
              } finally {
                Ll(t);
              }
            else
              Wi(Bn, t, t.return);
            break;
          }
          case xe: {
            Of(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && CS(t, t.return, i);
            break;
          }
          case ae: {
            Of(t, t.return);
            break;
          }
          case We: {
            var u = t.memoizedState !== null;
            if (u) {
              VC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, de = a) : VC(e);
      }
    }
    function VC(e) {
      for (; de !== null; ) {
        var t = de;
        if (t === e) {
          de = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, de = a;
          return;
        }
        de = t.return;
      }
    }
    function r_(e) {
      for (; de !== null; ) {
        var t = de, a = t.child;
        if (t.tag === We) {
          var i = t.memoizedState !== null;
          if (i) {
            BC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, de = a) : BC(e);
      }
    }
    function BC(e) {
      for (; de !== null; ) {
        var t = de;
        Zt(t);
        try {
          Qx(t);
        } catch (i) {
          Yt(t, t.return, i);
        }
        if (Vt(), t === e) {
          de = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, de = a;
          return;
        }
        de = t.return;
      }
    }
    function a_(e, t, a, i) {
      de = t, i_(t, e, a, i);
    }
    function i_(e, t, a, i) {
      for (; de !== null; ) {
        var u = de, s = u.child;
        (u.subtreeFlags & br) !== _e && s !== null ? (s.return = u, de = s) : l_(e, t, a, i);
      }
    }
    function l_(e, t, a, i) {
      for (; de !== null; ) {
        var u = de;
        if ((u.flags & wr) !== _e) {
          Zt(u);
          try {
            u_(t, u, a, i);
          } catch (f) {
            Yt(u, u.return, f);
          }
          Vt();
        }
        if (u === e) {
          de = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, de = s;
          return;
        }
        de = u.return;
      }
    }
    function u_(e, t, a, i) {
      switch (t.tag) {
        case je:
        case Ne:
        case Be: {
          if (t.mode & Ae) {
            $g();
            try {
              Lo(sr | Vn, t);
            } finally {
              Pg(t);
            }
          } else
            Lo(sr | Vn, t);
          break;
        }
      }
    }
    function o_(e) {
      de = e, s_();
    }
    function s_() {
      for (; de !== null; ) {
        var e = de, t = e.child;
        if ((de.flags & mt) !== _e) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              de = u, d_(u, e);
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
            de = e;
          }
        }
        (e.subtreeFlags & br) !== _e && t !== null ? (t.return = e, de = t) : c_();
      }
    }
    function c_() {
      for (; de !== null; ) {
        var e = de;
        (e.flags & wr) !== _e && (Zt(e), f_(e), Vt());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, de = t;
          return;
        }
        de = e.return;
      }
    }
    function f_(e) {
      switch (e.tag) {
        case je:
        case Ne:
        case Be: {
          e.mode & Ae ? ($g(), Wi(sr | Vn, e, e.return), Pg(e)) : Wi(sr | Vn, e, e.return);
          break;
        }
      }
    }
    function d_(e, t) {
      for (; de !== null; ) {
        var a = de;
        Zt(a), v_(a, t), Vt();
        var i = a.child;
        i !== null ? (i.return = a, de = i) : p_(e);
      }
    }
    function p_(e) {
      for (; de !== null; ) {
        var t = de, a = t.sibling, i = t.return;
        if (NC(t), t === e) {
          de = null;
          return;
        }
        if (a !== null) {
          a.return = i, de = a;
          return;
        }
        de = i;
      }
    }
    function v_(e, t) {
      switch (e.tag) {
        case je:
        case Ne:
        case Be: {
          e.mode & Ae ? ($g(), Wi(sr, e, t), Pg(e)) : Wi(sr, e, t);
          break;
        }
      }
    }
    function h_(e) {
      switch (e.tag) {
        case je:
        case Ne:
        case Be: {
          try {
            Lo(Bn | Vn, e);
          } catch (a) {
            Yt(e, e.return, a);
          }
          break;
        }
        case xe: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            Yt(e, e.return, a);
          }
          break;
        }
      }
    }
    function m_(e) {
      switch (e.tag) {
        case je:
        case Ne:
        case Be: {
          try {
            Lo(sr | Vn, e);
          } catch (t) {
            Yt(e, e.return, t);
          }
          break;
        }
      }
    }
    function y_(e) {
      switch (e.tag) {
        case je:
        case Ne:
        case Be: {
          try {
            Wi(Bn | Vn, e, e.return);
          } catch (a) {
            Yt(e, e.return, a);
          }
          break;
        }
        case xe: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && CS(e, e.return, t);
          break;
        }
      }
    }
    function g_(e) {
      switch (e.tag) {
        case je:
        case Ne:
        case Be:
          try {
            Wi(sr | Vn, e, e.return);
          } catch (t) {
            Yt(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Lp = Symbol.for;
      Lp("selector.component"), Lp("selector.has_pseudo_class"), Lp("selector.role"), Lp("selector.test_id"), Lp("selector.text");
    }
    var S_ = [];
    function E_() {
      S_.forEach(function(e) {
        return e();
      });
    }
    var C_ = rt.ReactCurrentActQueue;
    function T_(e) {
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
        return !e && C_.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var R_ = Math.ceil, xS = rt.ReactCurrentDispatcher, _S = rt.ReactCurrentOwner, pr = rt.ReactCurrentBatchConfig, qi = rt.ReactCurrentActQueue, Yn = (
      /*             */
      0
    ), $C = (
      /*               */
      1
    ), vr = (
      /*                */
      2
    ), pi = (
      /*                */
      4
    ), xu = 0, Mp = 1, rc = 2, mm = 3, Np = 4, YC = 5, bS = 6, lt = Yn, qr = null, pn = null, In = P, zl = P, DS = To(P), Qn = xu, zp = null, ym = P, Up = P, gm = P, Ap = null, Ea = null, kS = 0, IC = 500, QC = 1 / 0, w_ = 500, _u = null;
    function Fp() {
      QC = mn() + w_;
    }
    function WC() {
      return QC;
    }
    var Sm = !1, OS = null, Lf = null, ac = !1, No = null, Hp = P, LS = [], MS = null, x_ = 50, jp = 0, NS = null, zS = !1, Em = !1, __ = 50, Mf = 0, Cm = null, Vp = At, Tm = P, GC = !1;
    function Rm() {
      return qr;
    }
    function Kr() {
      return (lt & (vr | pi)) !== Yn ? mn() : (Vp !== At || (Vp = mn()), Vp);
    }
    function zo(e) {
      var t = e.mode;
      if ((t & we) === K)
        return ge;
      if ((lt & vr) !== Yn && In !== P)
        return oo(In);
      var a = Cw() !== Ew;
      if (a) {
        if (pr.transition !== null) {
          var i = pr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Tm === Ut && (Tm = tr()), Tm;
      }
      var u = rr();
      if (u !== Ut)
        return u;
      var s = iR();
      return s;
    }
    function b_(e) {
      var t = e.mode;
      return (t & we) === K ? ge : nr();
    }
    function Wn(e, t, a, i) {
      K_(), GC && S("useInsertionEffect must not schedule updates."), zS && (Em = !0), co(e, a, i), (lt & vr) !== P && e === qr ? eb(t) : (Pr && kd(e, t, a), tb(t), e === qr && ((lt & vr) === Yn && (Up = $e(Up, a)), Qn === Np && Uo(e, In)), Ca(e, i), a === ge && lt === Yn && (t.mode & we) === K && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !qi.isBatchingLegacy && (Fp(), G0()));
    }
    function D_(e, t, a) {
      var i = e.current;
      i.lanes = t, co(e, t, a), Ca(e, a);
    }
    function k_(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (lt & vr) !== Yn
      );
    }
    function Ca(e, t) {
      var a = e.callbackNode;
      Cd(e, t);
      var i = Ts(e, e === qr ? In : P);
      if (i === P) {
        a !== null && c1(a), e.callbackNode = null, e.callbackPriority = Ut;
        return;
      }
      var u = yl(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(qi.current !== null && a !== BS)) {
        a == null && s !== ge && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && c1(a);
      var f;
      if (u === ge)
        e.tag === Ro ? (qi.isBatchingLegacy !== null && (qi.didScheduleLegacyUpdate = !0), rw(KC.bind(null, e))) : W0(KC.bind(null, e)), qi.current !== null ? qi.current.push(wo) : uR(function() {
          (lt & (vr | pi)) === Yn && wo();
        }), f = null;
      else {
        var p;
        switch (Hv(i)) {
          case Qr:
            p = dl;
            break;
          case ai:
            p = Gu;
            break;
          case Ha:
            p = pl;
            break;
          case Ds:
            p = vl;
            break;
          default:
            p = pl;
            break;
        }
        f = PS(p, XC.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function XC(e, t) {
      if (Ww(), Vp = At, Tm = P, (lt & (vr | pi)) !== Yn)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Du();
      if (i && e.callbackNode !== a)
        return null;
      var u = Ts(e, e === qr ? In : P);
      if (u === P)
        return null;
      var s = !ws(e, u) && !Av(e, u) && !t, f = s ? j_(e, u) : xm(e, u);
      if (f !== xu) {
        if (f === rc) {
          var p = Rs(e);
          p !== P && (u = p, f = US(e, p));
        }
        if (f === Mp) {
          var v = zp;
          throw ic(e, P), Uo(e, u), Ca(e, mn()), v;
        }
        if (f === bS)
          Uo(e, u);
        else {
          var y = !ws(e, u), g = e.current.alternate;
          if (y && !L_(g)) {
            if (f = xm(e, u), f === rc) {
              var x = Rs(e);
              x !== P && (u = x, f = US(e, x));
            }
            if (f === Mp) {
              var R = zp;
              throw ic(e, P), Uo(e, u), Ca(e, mn()), R;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, O_(e, f, u);
        }
      }
      return Ca(e, mn()), e.callbackNode === a ? XC.bind(null, e) : null;
    }
    function US(e, t) {
      var a = Ap;
      if (ue(e)) {
        var i = ic(e, t);
        i.flags |= er, qR(e.containerInfo);
      }
      var u = xm(e, t);
      if (u !== rc) {
        var s = Ea;
        Ea = a, s !== null && qC(s);
      }
      return u;
    }
    function qC(e) {
      Ea === null ? Ea = e : Ea.push.apply(Ea, e);
    }
    function O_(e, t, a) {
      switch (t) {
        case xu:
        case Mp:
          throw new Error("Root did not complete. This is a bug in React.");
        case rc: {
          lc(e, Ea, _u);
          break;
        }
        case mm: {
          if (Uo(e, a), wd(a) && // do not delay if we're inside an act() scope
          !f1()) {
            var i = kS + IC - mn();
            if (i > 10) {
              var u = Ts(e, P);
              if (u !== P)
                break;
              var s = e.suspendedLanes;
              if (!Sl(s, a)) {
                Kr(), _s(e, s);
                break;
              }
              e.timeoutHandle = My(lc.bind(null, e, Ea, _u), i);
              break;
            }
          }
          lc(e, Ea, _u);
          break;
        }
        case Np: {
          if (Uo(e, a), Uv(a))
            break;
          if (!f1()) {
            var f = Mv(e, a), p = f, v = mn() - p, y = q_(v) - v;
            if (y > 10) {
              e.timeoutHandle = My(lc.bind(null, e, Ea, _u), y);
              break;
            }
          }
          lc(e, Ea, _u);
          break;
        }
        case YC: {
          lc(e, Ea, _u);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function L_(e) {
      for (var t = e; ; ) {
        if (t.flags & Jl) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!Se(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & Jl && v !== null) {
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
    function Uo(e, t) {
      t = so(t, gm), t = so(t, Up), bd(e, t);
    }
    function KC(e) {
      if (Gw(), (lt & (vr | pi)) !== Yn)
        throw new Error("Should not already be working.");
      Du();
      var t = Ts(e, P);
      if (!Or(t, ge))
        return Ca(e, mn()), null;
      var a = xm(e, t);
      if (e.tag !== Ro && a === rc) {
        var i = Rs(e);
        i !== P && (t = i, a = US(e, i));
      }
      if (a === Mp) {
        var u = zp;
        throw ic(e, P), Uo(e, t), Ca(e, mn()), u;
      }
      if (a === bS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, lc(e, Ea, _u), Ca(e, mn()), null;
    }
    function M_(e, t) {
      t !== P && (Qc(e, $e(t, ge)), Ca(e, mn()), (lt & (vr | pi)) === Yn && (Fp(), wo()));
    }
    function AS(e, t) {
      var a = lt;
      lt |= $C;
      try {
        return e(t);
      } finally {
        lt = a, lt === Yn && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !qi.isBatchingLegacy && (Fp(), G0());
      }
    }
    function N_(e, t, a, i, u) {
      var s = rr(), f = pr.transition;
      try {
        return pr.transition = null, dt(Qr), e(t, a, i, u);
      } finally {
        dt(s), pr.transition = f, lt === Yn && Fp();
      }
    }
    function bu(e) {
      No !== null && No.tag === Ro && (lt & (vr | pi)) === Yn && Du();
      var t = lt;
      lt |= $C;
      var a = pr.transition, i = rr();
      try {
        return pr.transition = null, dt(Qr), e ? e() : void 0;
      } finally {
        dt(i), pr.transition = a, lt = t, (lt & (vr | pi)) === Yn && wo();
      }
    }
    function ZC() {
      return (lt & (vr | pi)) !== Yn;
    }
    function wm(e, t) {
      Mr(DS, zl, e), zl = $e(zl, t);
    }
    function FS(e) {
      zl = DS.current, Lr(DS, e);
    }
    function ic(e, t) {
      e.finishedWork = null, e.finishedLanes = P;
      var a = e.timeoutHandle;
      if (a !== Ny && (e.timeoutHandle = Ny, lR(a)), pn !== null)
        for (var i = pn.return; i !== null; ) {
          var u = i.alternate;
          bC(u, i), i = i.return;
        }
      qr = e;
      var s = uc(e.current, null);
      return pn = s, In = zl = t, Qn = xu, zp = null, ym = P, Up = P, gm = P, Ap = null, Ea = null, Dw(), Pi.discardPendingWarnings(), s;
    }
    function JC(e, t) {
      do {
        var a = pn;
        try {
          if (zh(), RE(), Vt(), _S.current = null, a === null || a.return === null) {
            Qn = Mp, zp = t, pn = null;
            return;
          }
          if (ht && a.mode & Ae && sm(a, !0), Xe)
            if (Yr(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              pd(a, i, In);
            } else
              ru(a, t, In);
          rx(e, a.return, a, t, In), r1(a);
        } catch (u) {
          t = u, pn === a && a !== null ? (a = a.return, pn = a) : a = pn;
          continue;
        }
        return;
      } while (!0);
    }
    function e1() {
      var e = xS.current;
      return xS.current = am, e === null ? am : e;
    }
    function t1(e) {
      xS.current = e;
    }
    function z_() {
      kS = mn();
    }
    function Bp(e) {
      ym = $e(e, ym);
    }
    function U_() {
      Qn === xu && (Qn = mm);
    }
    function HS() {
      (Qn === xu || Qn === mm || Qn === rc) && (Qn = Np), qr !== null && (Rd(ym) || Rd(Up)) && Uo(qr, In);
    }
    function A_(e) {
      Qn !== Np && (Qn = rc), Ap === null ? Ap = [e] : Ap.push(e);
    }
    function F_() {
      return Qn === xu;
    }
    function xm(e, t) {
      var a = lt;
      lt |= vr;
      var i = e1();
      if (qr !== e || In !== t) {
        if (Pr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Pp(e, In), u.clear()), bs(e, t);
        }
        _u = ri(), ic(e, t);
      }
      ys(t);
      do
        try {
          H_();
          break;
        } catch (s) {
          JC(e, s);
        }
      while (!0);
      if (zh(), lt = a, t1(i), pn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Lc(), qr = null, In = P, Qn;
    }
    function H_() {
      for (; pn !== null; )
        n1(pn);
    }
    function j_(e, t) {
      var a = lt;
      lt |= vr;
      var i = e1();
      if (qr !== e || In !== t) {
        if (Pr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Pp(e, In), u.clear()), bs(e, t);
        }
        _u = ri(), Fp(), ic(e, t);
      }
      ys(t);
      do
        try {
          V_();
          break;
        } catch (s) {
          JC(e, s);
        }
      while (!0);
      return zh(), t1(i), lt = a, pn !== null ? (hd(), xu) : (Lc(), qr = null, In = P, Qn);
    }
    function V_() {
      for (; pn !== null && !xv(); )
        n1(pn);
    }
    function n1(e) {
      var t = e.alternate;
      Zt(e);
      var a;
      (e.mode & Ae) !== K ? (Bg(e), a = jS(t, e, zl), sm(e, !0)) : a = jS(t, e, zl), Vt(), e.memoizedProps = e.pendingProps, a === null ? r1(e) : pn = a, _S.current = null;
    }
    function r1(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & sl) === _e) {
          Zt(t);
          var u = void 0;
          if ((t.mode & Ae) === K ? u = _C(a, t, zl) : (Bg(t), u = _C(a, t, zl), sm(t, !1)), Vt(), u !== null) {
            pn = u;
            return;
          }
        } else {
          var s = Ux(a, t);
          if (s !== null) {
            s.flags &= Li, pn = s;
            return;
          }
          if ((t.mode & Ae) !== K) {
            sm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= sl, i.subtreeFlags = _e, i.deletions = null;
          else {
            Qn = bS, pn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          pn = v;
          return;
        }
        t = i, pn = t;
      } while (t !== null);
      Qn === xu && (Qn = YC);
    }
    function lc(e, t, a) {
      var i = rr(), u = pr.transition;
      try {
        pr.transition = null, dt(Qr), B_(e, t, a, i);
      } finally {
        pr.transition = u, dt(i);
      }
      return null;
    }
    function B_(e, t, a, i) {
      do
        Du();
      while (No !== null);
      if (Z_(), (lt & (vr | pi)) !== Yn)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (fd(s), u === null)
        return dd(), null;
      if (s === P && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = P, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Ut;
      var f = $e(u.lanes, u.childLanes);
      ty(e, f), e === qr && (qr = null, pn = null, In = P), ((u.subtreeFlags & br) !== _e || (u.flags & br) !== _e) && (ac || (ac = !0, MS = a, PS(pl, function() {
        return Du(), null;
      })));
      var p = (u.subtreeFlags & (xr | _r | Ua | br)) !== _e, v = (u.flags & (xr | _r | Ua | br)) !== _e;
      if (p || v) {
        var y = pr.transition;
        pr.transition = null;
        var g = rr();
        dt(Qr);
        var x = lt;
        lt |= pi, _S.current = null, Vx(e, u), GE(), e_(e, u, s), JT(e.containerInfo), e.current = u, Zu(s), t_(u, e, s), Ov(), Wu(), lt = x, dt(g), pr.transition = y;
      } else
        e.current = u, GE();
      var R = ac;
      if (ac ? (ac = !1, No = e, Hp = s) : (Mf = 0, Cm = null), f = e.pendingLanes, f === P && (Lf = null), R || u1(e.current, !1), ha(u.stateNode, i), Pr && e.memoizedUpdaters.clear(), E_(), Ca(e, mn()), t !== null)
        for (var M = e.onRecoverableError, z = 0; z < t.length; z++) {
          var F = t[z], J = F.stack, be = F.digest;
          M(F.value, {
            componentStack: J,
            digest: be
          });
        }
      if (Sm) {
        Sm = !1;
        var Ee = OS;
        throw OS = null, Ee;
      }
      return Or(Hp, ge) && e.tag !== Ro && Du(), f = e.pendingLanes, Or(f, ge) ? (Qw(), e === NS ? jp++ : (jp = 0, NS = e)) : jp = 0, wo(), dd(), null;
    }
    function Du() {
      if (No !== null) {
        var e = Hv(Hp), t = Wc(Ha, e), a = pr.transition, i = rr();
        try {
          return pr.transition = null, dt(t), $_();
        } finally {
          dt(i), pr.transition = a;
        }
      }
      return !1;
    }
    function P_(e) {
      LS.push(e), ac || (ac = !0, PS(pl, function() {
        return Du(), null;
      }));
    }
    function $_() {
      if (No === null)
        return !1;
      var e = MS;
      MS = null;
      var t = No, a = Hp;
      if (No = null, Hp = P, (lt & (vr | pi)) !== Yn)
        throw new Error("Cannot flush passive effects while already rendering.");
      zS = !0, Em = !1, vd(a);
      var i = lt;
      lt |= pi, o_(t.current), a_(t, t.current, a, e);
      {
        var u = LS;
        LS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Yx(t, f);
        }
      }
      Jt(), u1(t.current, !0), lt = i, wo(), Em ? t === Cm ? Mf++ : (Mf = 0, Cm = t) : Mf = 0, zS = !1, Em = !1, nu(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function a1(e) {
      return Lf !== null && Lf.has(e);
    }
    function Y_(e) {
      Lf === null ? Lf = /* @__PURE__ */ new Set([e]) : Lf.add(e);
    }
    function I_(e) {
      Sm || (Sm = !0, OS = e);
    }
    var Q_ = I_;
    function i1(e, t, a) {
      var i = tc(a, t), u = nC(e, i, ge), s = _o(e, u, ge), f = Kr();
      s !== null && (co(s, ge, f), Ca(s, f));
    }
    function Yt(e, t, a) {
      if (Fx(a), $p(!1), e.tag === ce) {
        i1(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === ce) {
          i1(i, e, a);
          return;
        } else if (i.tag === xe) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !a1(s)) {
            var f = tc(a, e), p = iS(i, f, ge), v = _o(i, p, ge), y = Kr();
            v !== null && (co(v, ge, y), Ca(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function W_(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Kr();
      _s(e, a), nb(e), qr === e && Sl(In, a) && (Qn === Np || Qn === mm && wd(In) && mn() - kS < IC ? ic(e, P) : gm = $e(gm, a)), Ca(e, u);
    }
    function l1(e, t) {
      t === Ut && (t = b_(e));
      var a = Kr(), i = ga(e, t);
      i !== null && (co(i, t, a), Ca(i, a));
    }
    function G_(e) {
      var t = e.memoizedState, a = Ut;
      t !== null && (a = t.retryLane), l1(e, a);
    }
    function X_(e, t) {
      var a = Ut, i;
      switch (e.tag) {
        case Ce:
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
    function q_(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : R_(e / 1960) * 1960;
    }
    function K_() {
      if (jp > x_)
        throw jp = 0, NS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Mf > __ && (Mf = 0, Cm = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function Z_() {
      Pi.flushLegacyContextWarning(), Pi.flushPendingUnsafeLifecycleWarnings();
    }
    function u1(e, t) {
      Zt(e), _m(e, da, y_), t && _m(e, eu, g_), _m(e, da, h_), t && _m(e, eu, m_), Vt();
    }
    function _m(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== _e ? i = i.child : ((i.flags & t) !== _e && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var bm = null;
    function o1(e) {
      {
        if ((lt & vr) !== Yn || !(e.mode & we))
          return;
        var t = e.tag;
        if (t !== Ke && t !== ce && t !== xe && t !== je && t !== Ne && t !== Je && t !== Be)
          return;
        var a = Ue(e) || "ReactComponent";
        if (bm !== null) {
          if (bm.has(a))
            return;
          bm.add(a);
        } else
          bm = /* @__PURE__ */ new Set([a]);
        var i = Kt;
        try {
          Zt(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Zt(e) : Vt();
        }
      }
    }
    var jS;
    {
      var J_ = null;
      jS = function(e, t, a) {
        var i = m1(J_, t);
        try {
          return CC(e, t, a);
        } catch (s) {
          if (fw() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (zh(), RE(), bC(e, t), m1(t, i), t.mode & Ae && Bg(t), Na(null, CC, null, e, t, a), qm()) {
            var u = Oi();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var s1 = !1, VS;
    VS = /* @__PURE__ */ new Set();
    function eb(e) {
      if (Cr && !$w())
        switch (e.tag) {
          case je:
          case Ne:
          case Be: {
            var t = pn && Ue(pn) || "Unknown", a = t;
            if (!VS.has(a)) {
              VS.add(a);
              var i = Ue(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case xe: {
            s1 || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), s1 = !0);
            break;
          }
        }
    }
    function Pp(e, t) {
      if (Pr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          kd(e, i, t);
        });
      }
    }
    var BS = {};
    function PS(e, t) {
      {
        var a = qi.current;
        return a !== null ? (a.push(t), BS) : od(e, t);
      }
    }
    function c1(e) {
      if (e !== BS)
        return bc(e);
    }
    function f1() {
      return qi.current !== null;
    }
    function tb(e) {
      {
        if (e.mode & we) {
          if (!PC())
            return;
        } else if (!T_() || lt !== Yn || e.tag !== je && e.tag !== Ne && e.tag !== Be)
          return;
        if (qi.current === null) {
          var t = Kt;
          try {
            Zt(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ue(e));
          } finally {
            t ? Zt(e) : Vt();
          }
        }
      }
    }
    function nb(e) {
      e.tag !== Ro && PC() && qi.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function $p(e) {
      GC = e;
    }
    var vi = null, Nf = null, rb = function(e) {
      vi = e;
    };
    function zf(e) {
      {
        if (vi === null)
          return e;
        var t = vi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function $S(e) {
      return zf(e);
    }
    function YS(e) {
      {
        if (vi === null)
          return e;
        var t = vi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = zf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: Ot,
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
        if (vi === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case xe: {
            typeof i == "function" && (u = !0);
            break;
          }
          case je: {
            (typeof i == "function" || s === _n) && (u = !0);
            break;
          }
          case Ne: {
            (s === Ot || s === _n) && (u = !0);
            break;
          }
          case Je:
          case Be: {
            (s === Vl || s === _n) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = vi(a);
          if (f !== void 0 && f === vi(i))
            return !0;
        }
        return !1;
      }
    }
    function p1(e) {
      {
        if (vi === null || typeof WeakSet != "function")
          return;
        Nf === null && (Nf = /* @__PURE__ */ new WeakSet()), Nf.add(e);
      }
    }
    var ab = function(e, t) {
      {
        if (vi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Du(), bu(function() {
          IS(e.current, i, a);
        });
      }
    }, ib = function(e, t) {
      {
        if (e.context !== Va)
          return;
        Du(), bu(function() {
          Yp(t, e, null, null);
        });
      }
    };
    function IS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case je:
          case Be:
          case xe:
            v = p;
            break;
          case Ne:
            v = p.render;
            break;
        }
        if (vi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var x = vi(v);
          x !== void 0 && (a.has(x) ? g = !0 : t.has(x) && (f === xe ? g = !0 : y = !0));
        }
        if (Nf !== null && (Nf.has(e) || i !== null && Nf.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var R = ga(e, ge);
          R !== null && Wn(R, e, ge, At);
        }
        u !== null && !g && IS(u, t, a), s !== null && IS(s, t, a);
      }
    }
    var lb = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return QS(e.current, i, a), a;
      }
    };
    function QS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case je:
          case Be:
          case xe:
            p = f;
            break;
          case Ne:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? ub(e, a) : i !== null && QS(i, t, a), u !== null && QS(u, t, a);
      }
    }
    function ub(e, t) {
      {
        var a = ob(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case ae:
              t.add(i.stateNode);
              return;
            case Ve:
              t.add(i.stateNode.containerInfo);
              return;
            case ce:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function ob(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === ae)
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
    var WS;
    {
      WS = !1;
      try {
        var v1 = Object.preventExtensions({});
      } catch {
        WS = !0;
      }
    }
    function sb(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = _e, this.subtreeFlags = _e, this.deletions = null, this.lanes = P, this.childLanes = P, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !WS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Ba = function(e, t, a, i) {
      return new sb(e, t, a, i);
    };
    function GS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function cb(e) {
      return typeof e == "function" && !GS(e) && e.defaultProps === void 0;
    }
    function fb(e) {
      if (typeof e == "function")
        return GS(e) ? xe : je;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Ot)
          return Ne;
        if (t === Vl)
          return Je;
      }
      return Ke;
    }
    function uc(e, t) {
      var a = e.alternate;
      a === null ? (a = Ba(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = _e, a.subtreeFlags = _e, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Hn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Ke:
        case je:
        case Be:
          a.type = zf(e.type);
          break;
        case xe:
          a.type = $S(e.type);
          break;
        case Ne:
          a.type = YS(e.type);
          break;
      }
      return a;
    }
    function db(e, t) {
      e.flags &= Hn | zt;
      var a = e.alternate;
      if (a === null)
        e.childLanes = P, e.lanes = t, e.child = null, e.subtreeFlags = _e, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = _e, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function pb(e, t, a) {
      var i;
      return e === wh ? (i = we, t === !0 && (i |= $t, i |= Dr)) : i = K, Pr && (i |= Ae), Ba(ce, null, null, i);
    }
    function XS(e, t, a, i, u, s) {
      var f = Ke, p = e;
      if (typeof e == "function")
        GS(e) ? (f = xe, p = $S(p)) : p = zf(p);
      else if (typeof e == "string")
        f = ae;
      else
        e: switch (e) {
          case Da:
            return Ao(a.children, u, s, t);
          case Fl:
            f = Mn, u |= $t, (u & we) !== K && (u |= Dr);
            break;
          case Mu:
            return vb(a, u, s, t);
          case Hl:
            return hb(a, u, s, t);
          case jl:
            return mb(a, u, s, t);
          case Vo:
            return h1(a, u, s, t);
          case Af:
          case sc:
          case Ff:
          case qt:
          case cc:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Nu:
                  f = It;
                  break e;
                case jo:
                  f = Nn;
                  break e;
                case Ot:
                  f = Ne, p = YS(p);
                  break e;
                case Vl:
                  f = Je;
                  break e;
                case _n:
                  f = Sn, p = null;
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
      var u = e.type, s = e.key, f = e.props, p = XS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Ao(e, t, a, i) {
      var u = Ba(at, e, i, t);
      return u.lanes = a, u;
    }
    function vb(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = Ba(St, e, i, t | Ae);
      return u.elementType = Mu, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function hb(e, t, a, i) {
      var u = Ba(Ce, e, i, t);
      return u.elementType = Hl, u.lanes = a, u;
    }
    function mb(e, t, a, i) {
      var u = Ba(ft, e, i, t);
      return u.elementType = jl, u.lanes = a, u;
    }
    function h1(e, t, a, i) {
      var u = Ba(We, e, i, t);
      u.elementType = Vo, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function KS(e, t, a) {
      var i = Ba(Te, e, null, t);
      return i.lanes = a, i;
    }
    function yb() {
      var e = Ba(ae, null, null, K);
      return e.elementType = "DELETED", e;
    }
    function gb(e) {
      var t = Ba(Qt, null, null, K);
      return t.stateNode = e, t;
    }
    function ZS(e, t, a) {
      var i = e.children !== null ? e.children : [], u = Ba(Ve, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function m1(e, t) {
      return e === null && (e = Ba(Ke, null, null, K)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function Sb(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Ny, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Ut, this.eventTimes = xs(P), this.expirationTimes = xs(At), this.pendingLanes = P, this.suspendedLanes = P, this.pingedLanes = P, this.expiredLanes = P, this.mutableReadLanes = P, this.finishedLanes = P, this.entangledLanes = P, this.entanglements = xs(P), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < gs; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case wh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Ro:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function y1(e, t, a, i, u, s, f, p, v, y) {
      var g = new Sb(e, t, a, p, v), x = pb(t, s);
      g.current = x, x.stateNode = g;
      {
        var R = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        x.memoizedState = R;
      }
      return fg(x), g;
    }
    var JS = "18.3.1";
    function Eb(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return wa(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: ia,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var e0, t0;
    e0 = !1, t0 = {};
    function g1(e) {
      if (!e)
        return Va;
      var t = Ka(e), a = nw(t);
      if (t.tag === xe) {
        var i = t.type;
        if (bl(i))
          return I0(t, i, a);
      }
      return a;
    }
    function Cb(e, t) {
      {
        var a = Ka(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = id(a);
        if (u === null)
          return null;
        if (u.mode & $t) {
          var s = Ue(a) || "Component";
          if (!t0[s]) {
            t0[s] = !0;
            var f = Kt;
            try {
              Zt(u), a.mode & $t ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Zt(f) : Vt();
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
      var g = !0, x = y1(a, i, g, e, u, s, f, p, v);
      x.context = g1(null);
      var R = x.current, M = Kr(), z = zo(R), F = Ru(M, z);
      return F.callback = t ?? null, _o(R, F, z), D_(x, z, M), x;
    }
    function Yp(e, t, a, i) {
      Xu(t, e);
      var u = t.current, s = Kr(), f = zo(u);
      Mc(f);
      var p = g1(a);
      t.context === null ? t.context = p : t.pendingContext = p, Cr && Kt !== null && !e0 && (e0 = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ue(Kt) || "Unknown"));
      var v = Ru(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = _o(u, v, f);
      return y !== null && (Wn(y, u, f, s), jh(y, u, f)), f;
    }
    function Dm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case ae:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function Tb(e) {
      switch (e.tag) {
        case ce: {
          var t = e.stateNode;
          if (ue(t)) {
            var a = uo(t);
            M_(t, a);
          }
          break;
        }
        case Ce: {
          bu(function() {
            var u = ga(e, ge);
            if (u !== null) {
              var s = Kr();
              Wn(u, e, ge, s);
            }
          });
          var i = ge;
          n0(e, i);
          break;
        }
      }
    }
    function C1(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = _d(a.retryLane, t));
    }
    function n0(e, t) {
      C1(e, t);
      var a = e.alternate;
      a && C1(a, t);
    }
    function Rb(e) {
      if (e.tag === Ce) {
        var t = ao, a = ga(e, t);
        if (a !== null) {
          var i = Kr();
          Wn(a, e, t, i);
        }
        n0(e, t);
      }
    }
    function wb(e) {
      if (e.tag === Ce) {
        var t = zo(e), a = ga(e, t);
        if (a !== null) {
          var i = Kr();
          Wn(a, e, t, i);
        }
        n0(e, t);
      }
    }
    function T1(e) {
      var t = ud(e);
      return t === null ? null : t.stateNode;
    }
    var R1 = function(e) {
      return null;
    };
    function xb(e) {
      return R1(e);
    }
    var w1 = function(e) {
      return !1;
    };
    function _b(e) {
      return w1(e);
    }
    var x1 = null, _1 = null, b1 = null, D1 = null, k1 = null, O1 = null, L1 = null, M1 = null, N1 = null;
    {
      var z1 = function(e, t, a) {
        var i = t[a], u = ct(e) ? e.slice() : Ie({}, e);
        return a + 1 === t.length ? (ct(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = z1(e[i], t, a + 1), u);
      }, U1 = function(e, t) {
        return z1(e, t, 0);
      }, A1 = function(e, t, a, i) {
        var u = t[i], s = ct(e) ? e.slice() : Ie({}, e);
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
          ot("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              ot("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return A1(e, t, a, 0);
      }, H1 = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = ct(e) ? e.slice() : Ie({}, e);
        return s[u] = H1(e[u], t, a + 1, i), s;
      }, j1 = function(e, t, a) {
        return H1(e, t, 0, a);
      }, r0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      x1 = function(e, t, a, i) {
        var u = r0(e, t);
        if (u !== null) {
          var s = j1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Ie({}, e.memoizedProps);
          var f = ga(e, ge);
          f !== null && Wn(f, e, ge, At);
        }
      }, _1 = function(e, t, a) {
        var i = r0(e, t);
        if (i !== null) {
          var u = U1(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = Ie({}, e.memoizedProps);
          var s = ga(e, ge);
          s !== null && Wn(s, e, ge, At);
        }
      }, b1 = function(e, t, a, i) {
        var u = r0(e, t);
        if (u !== null) {
          var s = F1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Ie({}, e.memoizedProps);
          var f = ga(e, ge);
          f !== null && Wn(f, e, ge, At);
        }
      }, D1 = function(e, t, a) {
        e.pendingProps = j1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ga(e, ge);
        i !== null && Wn(i, e, ge, At);
      }, k1 = function(e, t) {
        e.pendingProps = U1(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = ga(e, ge);
        a !== null && Wn(a, e, ge, At);
      }, O1 = function(e, t, a) {
        e.pendingProps = F1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ga(e, ge);
        i !== null && Wn(i, e, ge, At);
      }, L1 = function(e) {
        var t = ga(e, ge);
        t !== null && Wn(t, e, ge, At);
      }, M1 = function(e) {
        R1 = e;
      }, N1 = function(e) {
        w1 = e;
      };
    }
    function bb(e) {
      var t = id(e);
      return t === null ? null : t.stateNode;
    }
    function Db(e) {
      return null;
    }
    function kb() {
      return Kt;
    }
    function Ob(e) {
      var t = e.findFiberByHostInstance, a = rt.ReactCurrentDispatcher;
      return sd({
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
        findHostInstanceByFiber: bb,
        findFiberByHostInstance: t || Db,
        // React Refresh
        findHostInstancesForRefresh: lb,
        scheduleRefresh: ab,
        scheduleRoot: ib,
        setRefreshHandler: rb,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: kb,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: JS
      });
    }
    var V1 = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function a0(e) {
      this._internalRoot = e;
    }
    km.prototype.render = a0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Om(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== an) {
          var i = T1(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Yp(e, t, null, null);
    }, km.prototype.unmount = a0.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        ZC() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), bu(function() {
          Yp(null, e, null, null);
        }), V0(t);
      }
    };
    function Lb(e, t) {
      if (!Om(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      B1(e);
      var a = !1, i = !1, u = "", s = V1;
      t != null && (t.hydrate ? ot("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === aa && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = S1(e, wh, null, a, i, u, s);
      yh(f.current, e);
      var p = e.nodeType === an ? e.parentNode : e;
      return qd(p), new a0(f);
    }
    function km(e) {
      this._internalRoot = e;
    }
    function Mb(e) {
      e && Gc(e);
    }
    km.prototype.unstable_scheduleHydration = Mb;
    function Nb(e, t, a) {
      if (!Om(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      B1(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = V1;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = E1(t, null, e, wh, i, s, f, p, v);
      if (yh(y.current, e), qd(e), u)
        for (var g = 0; g < u.length; g++) {
          var x = u[g];
          Fw(y, x);
        }
      return new km(y);
    }
    function Om(e) {
      return !!(e && (e.nodeType === Rr || e.nodeType === Fr || e.nodeType === Pf || !De));
    }
    function Ip(e) {
      return !!(e && (e.nodeType === Rr || e.nodeType === Fr || e.nodeType === Pf || e.nodeType === an && e.nodeValue === " react-mount-point-unstable "));
    }
    function B1(e) {
      e.nodeType === Rr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), up(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var zb = rt.ReactCurrentOwner, P1;
    P1 = function(e) {
      if (e._reactRootContainer && e.nodeType !== an) {
        var t = T1(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = i0(e), u = !!(i && Co(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Rr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function i0(e) {
      return e ? e.nodeType === Fr ? e.documentElement : e.firstChild : null;
    }
    function $1() {
    }
    function Ub(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var R = Dm(f);
            s.call(R);
          };
        }
        var f = E1(
          t,
          i,
          e,
          Ro,
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
        e._reactRootContainer = f, yh(f.current, e);
        var p = e.nodeType === an ? e.parentNode : e;
        return qd(p), bu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var R = Dm(g);
            y.call(R);
          };
        }
        var g = S1(
          e,
          Ro,
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
        e._reactRootContainer = g, yh(g.current, e);
        var x = e.nodeType === an ? e.parentNode : e;
        return qd(x), bu(function() {
          Yp(t, g, a, i);
        }), g;
      }
    }
    function Ab(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Lm(e, t, a, i, u) {
      P1(a), Ab(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = Ub(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Dm(f);
            p.call(v);
          };
        }
        Yp(t, f, e, u);
      }
      return Dm(f);
    }
    var Y1 = !1;
    function Fb(e) {
      {
        Y1 || (Y1 = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = zb.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", tt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Rr ? e : Cb(e, "findDOMNode");
    }
    function Hb(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Ip(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = up(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Lm(null, e, t, !0, a);
    }
    function jb(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Ip(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = up(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Lm(null, e, t, !1, a);
    }
    function Vb(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Ip(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !Qu(e))
        throw new Error("parentComponent must be a valid React Component");
      return Lm(e, t, a, !1, i);
    }
    var I1 = !1;
    function Bb(e) {
      if (I1 || (I1 = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Ip(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = up(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = i0(e), i = a && !Co(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return bu(function() {
          Lm(null, null, e, !1, function() {
            e._reactRootContainer = null, V0(e);
          });
        }), !0;
      } else {
        {
          var u = i0(e), s = !!(u && Co(u)), f = e.nodeType === Rr && Ip(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Od(Tb), ks(Rb), Md(wb), Vv(rr), Ud(ny), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), qf($T), Cc(AS, N_, bu);
    function Pb(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Om(t))
        throw new Error("Target container is not a DOM element.");
      return Eb(e, t, null, a);
    }
    function $b(e, t, a, i) {
      return Vb(e, t, a, i);
    }
    var l0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Co, ff, gh, Iu, Kl, AS]
    };
    function Yb(e, t) {
      return l0.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Lb(e, t);
    }
    function Ib(e, t, a) {
      return l0.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Nb(e, t, a);
    }
    function Qb(e) {
      return ZC() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), bu(e);
    }
    var Wb = Ob({
      findFiberByHostInstance: Qs,
      bundleType: 1,
      version: JS,
      rendererPackageName: "react-dom"
    });
    if (!Wb && vn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var Q1 = window.location.protocol;
      /^(https?|file):$/.test(Q1) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (Q1 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ra.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = l0, Ra.createPortal = Pb, Ra.createRoot = Yb, Ra.findDOMNode = Fb, Ra.flushSync = Qb, Ra.hydrate = Hb, Ra.hydrateRoot = Ib, Ra.render = jb, Ra.unmountComponentAtNode = Bb, Ra.unstable_batchedUpdates = AS, Ra.unstable_renderSubtreeIntoContainer = $b, Ra.version = JS, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), Ra;
}
var aT = {};
function iT() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (aT.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(iT);
    } catch (X) {
      console.error(X);
    }
  }
}
aT.NODE_ENV === "production" ? (iT(), s0.exports = nD()) : s0.exports = rD();
var lT = s0.exports;
const cD = /* @__PURE__ */ tT(lT);
var f0, aD = {}, Nm = lT;
if (aD.NODE_ENV === "production")
  f0 = Nm.createRoot, Nm.hydrateRoot;
else {
  var eT = Nm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  f0 = function(X, se) {
    eT.usingClientEntryPoint = !0;
    try {
      return Nm.createRoot(X, se);
    } finally {
      eT.usingClientEntryPoint = !1;
    }
  };
}
const zm = (X, se = {}) => {
  import("./App-CSpvdrzK.mjs").then((A) => {
    zm.root = f0(X), zm.root.render(nT.createElement(A.default, se == null ? void 0 : se.props));
  });
}, fD = () => zm.root && zm.root.unmount();
export {
  nT as R,
  cD as a,
  lT as b,
  oD as c,
  tT as g,
  sD as j,
  zm as m,
  Um as r,
  fD as u
};
