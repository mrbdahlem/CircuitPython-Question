function ny(z) {
  return z && z.__esModule && Object.prototype.hasOwnProperty.call(z, "default") ? z.default : z;
}
var kc = { exports: {} }, X = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $v;
function q1() {
  if ($v) return X;
  $v = 1;
  var z = Symbol.for("react.transitional.element"), ul = Symbol.for("react.portal"), V = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), sl = Symbol.for("react.consumer"), rl = Symbol.for("react.context"), ql = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), A = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), nl = Symbol.iterator;
  function al(s) {
    return s === null || typeof s != "object" ? null : (s = nl && s[nl] || s["@@iterator"], typeof s == "function" ? s : null);
  }
  var Yl = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Bl = Object.assign, vt = {};
  function Gl(s, E, M) {
    this.props = s, this.context = E, this.refs = vt, this.updater = M || Yl;
  }
  Gl.prototype.isReactComponent = {}, Gl.prototype.setState = function(s, E) {
    if (typeof s != "object" && typeof s != "function" && s != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, s, E, "setState");
  }, Gl.prototype.forceUpdate = function(s) {
    this.updater.enqueueForceUpdate(this, s, "forceUpdate");
  };
  function yu() {
  }
  yu.prototype = Gl.prototype;
  function At(s, E, M) {
    this.props = s, this.context = E, this.refs = vt, this.updater = M || Yl;
  }
  var Ml = At.prototype = new yu();
  Ml.constructor = At, Bl(Ml, Gl.prototype), Ml.isPureReactComponent = !0;
  var yt = Array.isArray, L = { H: null, A: null, T: null, S: null, V: null }, Cl = Object.prototype.hasOwnProperty;
  function Vl(s, E, M, O, N, K) {
    return M = K.ref, {
      $$typeof: z,
      type: s,
      key: E,
      ref: M !== void 0 ? M : null,
      props: K
    };
  }
  function Ll(s, E) {
    return Vl(
      s.type,
      E,
      void 0,
      void 0,
      void 0,
      s.props
    );
  }
  function mt(s) {
    return typeof s == "object" && s !== null && s.$$typeof === z;
  }
  function qu(s) {
    var E = { "=": "=0", ":": "=2" };
    return "$" + s.replace(/[=:]/g, function(M) {
      return E[M];
    });
  }
  var zt = /\/+/g;
  function Dl(s, E) {
    return typeof s == "object" && s !== null && s.key != null ? qu("" + s.key) : E.toString(36);
  }
  function du() {
  }
  function hu(s) {
    switch (s.status) {
      case "fulfilled":
        return s.value;
      case "rejected":
        throw s.reason;
      default:
        switch (typeof s.status == "string" ? s.then(du, du) : (s.status = "pending", s.then(
          function(E) {
            s.status === "pending" && (s.status = "fulfilled", s.value = E);
          },
          function(E) {
            s.status === "pending" && (s.status = "rejected", s.reason = E);
          }
        )), s.status) {
          case "fulfilled":
            return s.value;
          case "rejected":
            throw s.reason;
        }
    }
    throw s;
  }
  function Ul(s, E, M, O, N) {
    var K = typeof s;
    (K === "undefined" || K === "boolean") && (s = null);
    var G = !1;
    if (s === null) G = !0;
    else
      switch (K) {
        case "bigint":
        case "string":
        case "number":
          G = !0;
          break;
        case "object":
          switch (s.$$typeof) {
            case z:
            case ul:
              G = !0;
              break;
            case R:
              return G = s._init, Ul(
                G(s._payload),
                E,
                M,
                O,
                N
              );
          }
      }
    if (G)
      return N = N(s), G = O === "" ? "." + Dl(s, 0) : O, yt(N) ? (M = "", G != null && (M = G.replace(zt, "$&/") + "/"), Ul(N, E, M, "", function(xt) {
        return xt;
      })) : N != null && (mt(N) && (N = Ll(
        N,
        M + (N.key == null || s && s.key === N.key ? "" : ("" + N.key).replace(
          zt,
          "$&/"
        ) + "/") + G
      )), E.push(N)), 1;
    G = 0;
    var Kl = O === "" ? "." : O + ":";
    if (yt(s))
      for (var fl = 0; fl < s.length; fl++)
        O = s[fl], K = Kl + Dl(O, fl), G += Ul(
          O,
          E,
          M,
          K,
          N
        );
    else if (fl = al(s), typeof fl == "function")
      for (s = fl.call(s), fl = 0; !(O = s.next()).done; )
        O = O.value, K = Kl + Dl(O, fl++), G += Ul(
          O,
          E,
          M,
          K,
          N
        );
    else if (K === "object") {
      if (typeof s.then == "function")
        return Ul(
          hu(s),
          E,
          M,
          O,
          N
        );
      throw E = String(s), Error(
        "Objects are not valid as a React child (found: " + (E === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : E) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return G;
  }
  function g(s, E, M) {
    if (s == null) return s;
    var O = [], N = 0;
    return Ul(s, O, "", "", function(K) {
      return E.call(M, K, N++);
    }), O;
  }
  function _(s) {
    if (s._status === -1) {
      var E = s._result;
      E = E(), E.then(
        function(M) {
          (s._status === 0 || s._status === -1) && (s._status = 1, s._result = M);
        },
        function(M) {
          (s._status === 0 || s._status === -1) && (s._status = 2, s._result = M);
        }
      ), s._status === -1 && (s._status = 0, s._result = E);
    }
    if (s._status === 1) return s._result.default;
    throw s._result;
  }
  var B = typeof reportError == "function" ? reportError : function(s) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var E = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof s == "object" && s !== null && typeof s.message == "string" ? String(s.message) : String(s),
        error: s
      });
      if (!window.dispatchEvent(E)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", s);
      return;
    }
    console.error(s);
  };
  function ll() {
  }
  return X.Children = {
    map: g,
    forEach: function(s, E, M) {
      g(
        s,
        function() {
          E.apply(this, arguments);
        },
        M
      );
    },
    count: function(s) {
      var E = 0;
      return g(s, function() {
        E++;
      }), E;
    },
    toArray: function(s) {
      return g(s, function(E) {
        return E;
      }) || [];
    },
    only: function(s) {
      if (!mt(s))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return s;
    }
  }, X.Component = Gl, X.Fragment = V, X.Profiler = P, X.PureComponent = At, X.StrictMode = r, X.Suspense = H, X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = L, X.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(s) {
      return L.H.useMemoCache(s);
    }
  }, X.cache = function(s) {
    return function() {
      return s.apply(null, arguments);
    };
  }, X.cloneElement = function(s, E, M) {
    if (s == null)
      throw Error(
        "The argument must be a React element, but you passed " + s + "."
      );
    var O = Bl({}, s.props), N = s.key, K = void 0;
    if (E != null)
      for (G in E.ref !== void 0 && (K = void 0), E.key !== void 0 && (N = "" + E.key), E)
        !Cl.call(E, G) || G === "key" || G === "__self" || G === "__source" || G === "ref" && E.ref === void 0 || (O[G] = E[G]);
    var G = arguments.length - 2;
    if (G === 1) O.children = M;
    else if (1 < G) {
      for (var Kl = Array(G), fl = 0; fl < G; fl++)
        Kl[fl] = arguments[fl + 2];
      O.children = Kl;
    }
    return Vl(s.type, N, void 0, void 0, K, O);
  }, X.createContext = function(s) {
    return s = {
      $$typeof: rl,
      _currentValue: s,
      _currentValue2: s,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, s.Provider = s, s.Consumer = {
      $$typeof: sl,
      _context: s
    }, s;
  }, X.createElement = function(s, E, M) {
    var O, N = {}, K = null;
    if (E != null)
      for (O in E.key !== void 0 && (K = "" + E.key), E)
        Cl.call(E, O) && O !== "key" && O !== "__self" && O !== "__source" && (N[O] = E[O]);
    var G = arguments.length - 2;
    if (G === 1) N.children = M;
    else if (1 < G) {
      for (var Kl = Array(G), fl = 0; fl < G; fl++)
        Kl[fl] = arguments[fl + 2];
      N.children = Kl;
    }
    if (s && s.defaultProps)
      for (O in G = s.defaultProps, G)
        N[O] === void 0 && (N[O] = G[O]);
    return Vl(s, K, void 0, void 0, null, N);
  }, X.createRef = function() {
    return { current: null };
  }, X.forwardRef = function(s) {
    return { $$typeof: ql, render: s };
  }, X.isValidElement = mt, X.lazy = function(s) {
    return {
      $$typeof: R,
      _payload: { _status: -1, _result: s },
      _init: _
    };
  }, X.memo = function(s, E) {
    return {
      $$typeof: A,
      type: s,
      compare: E === void 0 ? null : E
    };
  }, X.startTransition = function(s) {
    var E = L.T, M = {};
    L.T = M;
    try {
      var O = s(), N = L.S;
      N !== null && N(M, O), typeof O == "object" && O !== null && typeof O.then == "function" && O.then(ll, B);
    } catch (K) {
      B(K);
    } finally {
      L.T = E;
    }
  }, X.unstable_useCacheRefresh = function() {
    return L.H.useCacheRefresh();
  }, X.use = function(s) {
    return L.H.use(s);
  }, X.useActionState = function(s, E, M) {
    return L.H.useActionState(s, E, M);
  }, X.useCallback = function(s, E) {
    return L.H.useCallback(s, E);
  }, X.useContext = function(s) {
    return L.H.useContext(s);
  }, X.useDebugValue = function() {
  }, X.useDeferredValue = function(s, E) {
    return L.H.useDeferredValue(s, E);
  }, X.useEffect = function(s, E, M) {
    var O = L.H;
    if (typeof M == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return O.useEffect(s, E);
  }, X.useId = function() {
    return L.H.useId();
  }, X.useImperativeHandle = function(s, E, M) {
    return L.H.useImperativeHandle(s, E, M);
  }, X.useInsertionEffect = function(s, E) {
    return L.H.useInsertionEffect(s, E);
  }, X.useLayoutEffect = function(s, E) {
    return L.H.useLayoutEffect(s, E);
  }, X.useMemo = function(s, E) {
    return L.H.useMemo(s, E);
  }, X.useOptimistic = function(s, E) {
    return L.H.useOptimistic(s, E);
  }, X.useReducer = function(s, E, M) {
    return L.H.useReducer(s, E, M);
  }, X.useRef = function(s) {
    return L.H.useRef(s);
  }, X.useState = function(s) {
    return L.H.useState(s);
  }, X.useSyncExternalStore = function(s, E, M) {
    return L.H.useSyncExternalStore(
      s,
      E,
      M
    );
  }, X.useTransition = function() {
    return L.H.useTransition();
  }, X.version = "19.1.0", X;
}
var kv;
function ui() {
  return kv || (kv = 1, kc.exports = q1()), kc.exports;
}
var Yn = ui();
const fy = /* @__PURE__ */ ny(Yn);
var Fc = { exports: {} }, me = {}, Ic = { exports: {} }, Pc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fv;
function Y1() {
  return Fv || (Fv = 1, function(z) {
    function ul(g, _) {
      var B = g.length;
      g.push(_);
      l: for (; 0 < B; ) {
        var ll = B - 1 >>> 1, s = g[ll];
        if (0 < P(s, _))
          g[ll] = _, g[B] = s, B = ll;
        else break l;
      }
    }
    function V(g) {
      return g.length === 0 ? null : g[0];
    }
    function r(g) {
      if (g.length === 0) return null;
      var _ = g[0], B = g.pop();
      if (B !== _) {
        g[0] = B;
        l: for (var ll = 0, s = g.length, E = s >>> 1; ll < E; ) {
          var M = 2 * (ll + 1) - 1, O = g[M], N = M + 1, K = g[N];
          if (0 > P(O, B))
            N < s && 0 > P(K, O) ? (g[ll] = K, g[N] = B, ll = N) : (g[ll] = O, g[M] = B, ll = M);
          else if (N < s && 0 > P(K, B))
            g[ll] = K, g[N] = B, ll = N;
          else break l;
        }
      }
      return _;
    }
    function P(g, _) {
      var B = g.sortIndex - _.sortIndex;
      return B !== 0 ? B : g.id - _.id;
    }
    if (z.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var sl = performance;
      z.unstable_now = function() {
        return sl.now();
      };
    } else {
      var rl = Date, ql = rl.now();
      z.unstable_now = function() {
        return rl.now() - ql;
      };
    }
    var H = [], A = [], R = 1, nl = null, al = 3, Yl = !1, Bl = !1, vt = !1, Gl = !1, yu = typeof setTimeout == "function" ? setTimeout : null, At = typeof clearTimeout == "function" ? clearTimeout : null, Ml = typeof setImmediate < "u" ? setImmediate : null;
    function yt(g) {
      for (var _ = V(A); _ !== null; ) {
        if (_.callback === null) r(A);
        else if (_.startTime <= g)
          r(A), _.sortIndex = _.expirationTime, ul(H, _);
        else break;
        _ = V(A);
      }
    }
    function L(g) {
      if (vt = !1, yt(g), !Bl)
        if (V(H) !== null)
          Bl = !0, Cl || (Cl = !0, Dl());
        else {
          var _ = V(A);
          _ !== null && Ul(L, _.startTime - g);
        }
    }
    var Cl = !1, Vl = -1, Ll = 5, mt = -1;
    function qu() {
      return Gl ? !0 : !(z.unstable_now() - mt < Ll);
    }
    function zt() {
      if (Gl = !1, Cl) {
        var g = z.unstable_now();
        mt = g;
        var _ = !0;
        try {
          l: {
            Bl = !1, vt && (vt = !1, At(Vl), Vl = -1), Yl = !0;
            var B = al;
            try {
              t: {
                for (yt(g), nl = V(H); nl !== null && !(nl.expirationTime > g && qu()); ) {
                  var ll = nl.callback;
                  if (typeof ll == "function") {
                    nl.callback = null, al = nl.priorityLevel;
                    var s = ll(
                      nl.expirationTime <= g
                    );
                    if (g = z.unstable_now(), typeof s == "function") {
                      nl.callback = s, yt(g), _ = !0;
                      break t;
                    }
                    nl === V(H) && r(H), yt(g);
                  } else r(H);
                  nl = V(H);
                }
                if (nl !== null) _ = !0;
                else {
                  var E = V(A);
                  E !== null && Ul(
                    L,
                    E.startTime - g
                  ), _ = !1;
                }
              }
              break l;
            } finally {
              nl = null, al = B, Yl = !1;
            }
            _ = void 0;
          }
        } finally {
          _ ? Dl() : Cl = !1;
        }
      }
    }
    var Dl;
    if (typeof Ml == "function")
      Dl = function() {
        Ml(zt);
      };
    else if (typeof MessageChannel < "u") {
      var du = new MessageChannel(), hu = du.port2;
      du.port1.onmessage = zt, Dl = function() {
        hu.postMessage(null);
      };
    } else
      Dl = function() {
        yu(zt, 0);
      };
    function Ul(g, _) {
      Vl = yu(function() {
        g(z.unstable_now());
      }, _);
    }
    z.unstable_IdlePriority = 5, z.unstable_ImmediatePriority = 1, z.unstable_LowPriority = 4, z.unstable_NormalPriority = 3, z.unstable_Profiling = null, z.unstable_UserBlockingPriority = 2, z.unstable_cancelCallback = function(g) {
      g.callback = null;
    }, z.unstable_forceFrameRate = function(g) {
      0 > g || 125 < g ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Ll = 0 < g ? Math.floor(1e3 / g) : 5;
    }, z.unstable_getCurrentPriorityLevel = function() {
      return al;
    }, z.unstable_next = function(g) {
      switch (al) {
        case 1:
        case 2:
        case 3:
          var _ = 3;
          break;
        default:
          _ = al;
      }
      var B = al;
      al = _;
      try {
        return g();
      } finally {
        al = B;
      }
    }, z.unstable_requestPaint = function() {
      Gl = !0;
    }, z.unstable_runWithPriority = function(g, _) {
      switch (g) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          g = 3;
      }
      var B = al;
      al = g;
      try {
        return _();
      } finally {
        al = B;
      }
    }, z.unstable_scheduleCallback = function(g, _, B) {
      var ll = z.unstable_now();
      switch (typeof B == "object" && B !== null ? (B = B.delay, B = typeof B == "number" && 0 < B ? ll + B : ll) : B = ll, g) {
        case 1:
          var s = -1;
          break;
        case 2:
          s = 250;
          break;
        case 5:
          s = 1073741823;
          break;
        case 4:
          s = 1e4;
          break;
        default:
          s = 5e3;
      }
      return s = B + s, g = {
        id: R++,
        callback: _,
        priorityLevel: g,
        startTime: B,
        expirationTime: s,
        sortIndex: -1
      }, B > ll ? (g.sortIndex = B, ul(A, g), V(H) === null && g === V(A) && (vt ? (At(Vl), Vl = -1) : vt = !0, Ul(L, B - ll))) : (g.sortIndex = s, ul(H, g), Bl || Yl || (Bl = !0, Cl || (Cl = !0, Dl()))), g;
    }, z.unstable_shouldYield = qu, z.unstable_wrapCallback = function(g) {
      var _ = al;
      return function() {
        var B = al;
        al = _;
        try {
          return g.apply(this, arguments);
        } finally {
          al = B;
        }
      };
    };
  }(Pc)), Pc;
}
var Iv;
function B1() {
  return Iv || (Iv = 1, Ic.exports = Y1()), Ic.exports;
}
var li = { exports: {} }, Nl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pv;
function p1() {
  if (Pv) return Nl;
  Pv = 1;
  var z = ui();
  function ul(H) {
    var A = "https://react.dev/errors/" + H;
    if (1 < arguments.length) {
      A += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var R = 2; R < arguments.length; R++)
        A += "&args[]=" + encodeURIComponent(arguments[R]);
    }
    return "Minified React error #" + H + "; visit " + A + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function V() {
  }
  var r = {
    d: {
      f: V,
      r: function() {
        throw Error(ul(522));
      },
      D: V,
      C: V,
      L: V,
      m: V,
      X: V,
      S: V,
      M: V
    },
    p: 0,
    findDOMNode: null
  }, P = Symbol.for("react.portal");
  function sl(H, A, R) {
    var nl = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: P,
      key: nl == null ? null : "" + nl,
      children: H,
      containerInfo: A,
      implementation: R
    };
  }
  var rl = z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function ql(H, A) {
    if (H === "font") return "";
    if (typeof A == "string")
      return A === "use-credentials" ? A : "";
  }
  return Nl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, Nl.createPortal = function(H, A) {
    var R = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!A || A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11)
      throw Error(ul(299));
    return sl(H, A, null, R);
  }, Nl.flushSync = function(H) {
    var A = rl.T, R = r.p;
    try {
      if (rl.T = null, r.p = 2, H) return H();
    } finally {
      rl.T = A, r.p = R, r.d.f();
    }
  }, Nl.preconnect = function(H, A) {
    typeof H == "string" && (A ? (A = A.crossOrigin, A = typeof A == "string" ? A === "use-credentials" ? A : "" : void 0) : A = null, r.d.C(H, A));
  }, Nl.prefetchDNS = function(H) {
    typeof H == "string" && r.d.D(H);
  }, Nl.preinit = function(H, A) {
    if (typeof H == "string" && A && typeof A.as == "string") {
      var R = A.as, nl = ql(R, A.crossOrigin), al = typeof A.integrity == "string" ? A.integrity : void 0, Yl = typeof A.fetchPriority == "string" ? A.fetchPriority : void 0;
      R === "style" ? r.d.S(
        H,
        typeof A.precedence == "string" ? A.precedence : void 0,
        {
          crossOrigin: nl,
          integrity: al,
          fetchPriority: Yl
        }
      ) : R === "script" && r.d.X(H, {
        crossOrigin: nl,
        integrity: al,
        fetchPriority: Yl,
        nonce: typeof A.nonce == "string" ? A.nonce : void 0
      });
    }
  }, Nl.preinitModule = function(H, A) {
    if (typeof H == "string")
      if (typeof A == "object" && A !== null) {
        if (A.as == null || A.as === "script") {
          var R = ql(
            A.as,
            A.crossOrigin
          );
          r.d.M(H, {
            crossOrigin: R,
            integrity: typeof A.integrity == "string" ? A.integrity : void 0,
            nonce: typeof A.nonce == "string" ? A.nonce : void 0
          });
        }
      } else A == null && r.d.M(H);
  }, Nl.preload = function(H, A) {
    if (typeof H == "string" && typeof A == "object" && A !== null && typeof A.as == "string") {
      var R = A.as, nl = ql(R, A.crossOrigin);
      r.d.L(H, R, {
        crossOrigin: nl,
        integrity: typeof A.integrity == "string" ? A.integrity : void 0,
        nonce: typeof A.nonce == "string" ? A.nonce : void 0,
        type: typeof A.type == "string" ? A.type : void 0,
        fetchPriority: typeof A.fetchPriority == "string" ? A.fetchPriority : void 0,
        referrerPolicy: typeof A.referrerPolicy == "string" ? A.referrerPolicy : void 0,
        imageSrcSet: typeof A.imageSrcSet == "string" ? A.imageSrcSet : void 0,
        imageSizes: typeof A.imageSizes == "string" ? A.imageSizes : void 0,
        media: typeof A.media == "string" ? A.media : void 0
      });
    }
  }, Nl.preloadModule = function(H, A) {
    if (typeof H == "string")
      if (A) {
        var R = ql(A.as, A.crossOrigin);
        r.d.m(H, {
          as: typeof A.as == "string" && A.as !== "script" ? A.as : void 0,
          crossOrigin: R,
          integrity: typeof A.integrity == "string" ? A.integrity : void 0
        });
      } else r.d.m(H);
  }, Nl.requestFormReset = function(H) {
    r.d.r(H);
  }, Nl.unstable_batchedUpdates = function(H, A) {
    return H(A);
  }, Nl.useFormState = function(H, A, R) {
    return rl.H.useFormState(H, A, R);
  }, Nl.useFormStatus = function() {
    return rl.H.useHostTransitionStatus();
  }, Nl.version = "19.1.0", Nl;
}
var ly;
function G1() {
  if (ly) return li.exports;
  ly = 1;
  function z() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z);
      } catch (ul) {
        console.error(ul);
      }
  }
  return z(), li.exports = p1(), li.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ty;
function X1() {
  if (ty) return me;
  ty = 1;
  var z = B1(), ul = ui(), V = G1();
  function r(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        t += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function P(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function sl(l) {
    var t = l, u = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do
        t = l, (t.flags & 4098) !== 0 && (u = t.return), l = t.return;
      while (l);
    }
    return t.tag === 3 ? u : null;
  }
  function rl(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function ql(l) {
    if (sl(l) !== l)
      throw Error(r(188));
  }
  function H(l) {
    var t = l.alternate;
    if (!t) {
      if (t = sl(l), t === null) throw Error(r(188));
      return t !== l ? null : l;
    }
    for (var u = l, a = t; ; ) {
      var e = u.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (a = e.return, a !== null) {
          u = a;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === u) return ql(e), l;
          if (n === a) return ql(e), t;
          n = n.sibling;
        }
        throw Error(r(188));
      }
      if (u.return !== a.return) u = e, a = n;
      else {
        for (var f = !1, c = e.child; c; ) {
          if (c === u) {
            f = !0, u = e, a = n;
            break;
          }
          if (c === a) {
            f = !0, a = e, u = n;
            break;
          }
          c = c.sibling;
        }
        if (!f) {
          for (c = n.child; c; ) {
            if (c === u) {
              f = !0, u = n, a = e;
              break;
            }
            if (c === a) {
              f = !0, a = n, u = e;
              break;
            }
            c = c.sibling;
          }
          if (!f) throw Error(r(189));
        }
      }
      if (u.alternate !== a) throw Error(r(190));
    }
    if (u.tag !== 3) throw Error(r(188));
    return u.stateNode.current === u ? l : t;
  }
  function A(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = A(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var R = Object.assign, nl = Symbol.for("react.element"), al = Symbol.for("react.transitional.element"), Yl = Symbol.for("react.portal"), Bl = Symbol.for("react.fragment"), vt = Symbol.for("react.strict_mode"), Gl = Symbol.for("react.profiler"), yu = Symbol.for("react.provider"), At = Symbol.for("react.consumer"), Ml = Symbol.for("react.context"), yt = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), Cl = Symbol.for("react.suspense_list"), Vl = Symbol.for("react.memo"), Ll = Symbol.for("react.lazy"), mt = Symbol.for("react.activity"), qu = Symbol.for("react.memo_cache_sentinel"), zt = Symbol.iterator;
  function Dl(l) {
    return l === null || typeof l != "object" ? null : (l = zt && l[zt] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var du = Symbol.for("react.client.reference");
  function hu(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === du ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Bl:
        return "Fragment";
      case Gl:
        return "Profiler";
      case vt:
        return "StrictMode";
      case L:
        return "Suspense";
      case Cl:
        return "SuspenseList";
      case mt:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Yl:
          return "Portal";
        case Ml:
          return (l.displayName || "Context") + ".Provider";
        case At:
          return (l._context.displayName || "Context") + ".Consumer";
        case yt:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case Vl:
          return t = l.displayName || null, t !== null ? t : hu(l.type) || "Memo";
        case Ll:
          t = l._payload, l = l._init;
          try {
            return hu(l(t));
          } catch {
          }
      }
    return null;
  }
  var Ul = Array.isArray, g = ul.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _ = V.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ll = [], s = -1;
  function E(l) {
    return { current: l };
  }
  function M(l) {
    0 > s || (l.current = ll[s], ll[s] = null, s--);
  }
  function O(l, t) {
    s++, ll[s] = l.current, l.current = t;
  }
  var N = E(null), K = E(null), G = E(null), Kl = E(null);
  function fl(l, t) {
    switch (O(G, t), O(K, l), O(N, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? zv(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = zv(t), l = Ov(t, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    M(N), O(N, l);
  }
  function xt() {
    M(N), M(K), M(G);
  }
  function Bn(l) {
    l.memoizedState !== null && O(Kl, l);
    var t = N.current, u = Ov(t, l.type);
    t !== u && (O(K, l), O(N, u));
  }
  function Se(l) {
    K.current === l && (M(N), M(K)), Kl.current === l && (M(Kl), ve._currentValue = B);
  }
  var pn = Object.prototype.hasOwnProperty, Gn = z.unstable_scheduleCallback, Xn = z.unstable_cancelCallback, vy = z.unstable_shouldYield, yy = z.unstable_requestPaint, rt = z.unstable_now, dy = z.unstable_getCurrentPriorityLevel, ai = z.unstable_ImmediatePriority, ei = z.unstable_UserBlockingPriority, ge = z.unstable_NormalPriority, hy = z.unstable_LowPriority, ni = z.unstable_IdlePriority, oy = z.log, my = z.unstable_setDisableYieldValue, ga = null, Jl = null;
  function Zt(l) {
    if (typeof oy == "function" && my(l), Jl && typeof Jl.setStrictMode == "function")
      try {
        Jl.setStrictMode(ga, l);
      } catch {
      }
  }
  var wl = Math.clz32 ? Math.clz32 : gy, ry = Math.log, Sy = Math.LN2;
  function gy(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (ry(l) / Sy | 0) | 0;
  }
  var be = 256, Te = 4194304;
  function ou(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
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
        return 64;
      case 128:
        return 128;
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
        return l & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Ee(l, t, u) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var e = 0, n = l.suspendedLanes, f = l.pingedLanes;
    l = l.warmLanes;
    var c = a & 134217727;
    return c !== 0 ? (a = c & ~n, a !== 0 ? e = ou(a) : (f &= c, f !== 0 ? e = ou(f) : u || (u = c & ~l, u !== 0 && (e = ou(u))))) : (c = a & ~n, c !== 0 ? e = ou(c) : f !== 0 ? e = ou(f) : u || (u = a & ~l, u !== 0 && (e = ou(u)))), e === 0 ? 0 : t !== 0 && t !== e && (t & n) === 0 && (n = e & -e, u = t & -t, n >= u || n === 32 && (u & 4194048) !== 0) ? t : e;
  }
  function ba(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function by(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
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
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function fi() {
    var l = be;
    return be <<= 1, (be & 4194048) === 0 && (be = 256), l;
  }
  function ci() {
    var l = Te;
    return Te <<= 1, (Te & 62914560) === 0 && (Te = 4194304), l;
  }
  function Qn(l) {
    for (var t = [], u = 0; 31 > u; u++) t.push(l);
    return t;
  }
  function Ta(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Ty(l, t, u, a, e, n) {
    var f = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var c = l.entanglements, i = l.expirationTimes, h = l.hiddenUpdates;
    for (u = f & ~u; 0 < u; ) {
      var S = 31 - wl(u), T = 1 << S;
      c[S] = 0, i[S] = -1;
      var o = h[S];
      if (o !== null)
        for (h[S] = null, S = 0; S < o.length; S++) {
          var m = o[S];
          m !== null && (m.lane &= -536870913);
        }
      u &= ~T;
    }
    a !== 0 && ii(l, a, 0), n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~t));
  }
  function ii(l, t, u) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var a = 31 - wl(t);
    l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | u & 4194090;
  }
  function si(l, t) {
    var u = l.entangledLanes |= t;
    for (l = l.entanglements; u; ) {
      var a = 31 - wl(u), e = 1 << a;
      e & t | l[a] & t && (l[a] |= t), u &= ~e;
    }
  }
  function xn(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
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
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Zn(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function vi() {
    var l = _.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Vv(l.type));
  }
  function Ey(l, t) {
    var u = _.p;
    try {
      return _.p = l, t();
    } finally {
      _.p = u;
    }
  }
  var jt = Math.random().toString(36).slice(2), Rl = "__reactFiber$" + jt, Xl = "__reactProps$" + jt, Yu = "__reactContainer$" + jt, jn = "__reactEvents$" + jt, Ay = "__reactListeners$" + jt, zy = "__reactHandles$" + jt, yi = "__reactResources$" + jt, Ea = "__reactMarker$" + jt;
  function Cn(l) {
    delete l[Rl], delete l[Xl], delete l[jn], delete l[Ay], delete l[zy];
  }
  function Bu(l) {
    var t = l[Rl];
    if (t) return t;
    for (var u = l.parentNode; u; ) {
      if (t = u[Yu] || u[Rl]) {
        if (u = t.alternate, t.child !== null || u !== null && u.child !== null)
          for (l = Uv(l); l !== null; ) {
            if (u = l[Rl]) return u;
            l = Uv(l);
          }
        return t;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function pu(l) {
    if (l = l[Rl] || l[Yu]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function Aa(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(r(33));
  }
  function Gu(l) {
    var t = l[yi];
    return t || (t = l[yi] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function bl(l) {
    l[Ea] = !0;
  }
  var di = /* @__PURE__ */ new Set(), hi = {};
  function mu(l, t) {
    Xu(l, t), Xu(l + "Capture", t);
  }
  function Xu(l, t) {
    for (hi[l] = t, l = 0; l < t.length; l++)
      di.add(t[l]);
  }
  var Oy = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), oi = {}, mi = {};
  function _y(l) {
    return pn.call(mi, l) ? !0 : pn.call(oi, l) ? !1 : Oy.test(l) ? mi[l] = !0 : (oi[l] = !0, !1);
  }
  function Ae(l, t, u) {
    if (_y(t))
      if (u === null) l.removeAttribute(t);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + u);
      }
  }
  function ze(l, t, u) {
    if (u === null) l.removeAttribute(t);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + u);
    }
  }
  function Ot(l, t, u, a) {
    if (a === null) l.removeAttribute(u);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(t, u, "" + a);
    }
  }
  var Vn, ri;
  function Qu(l) {
    if (Vn === void 0)
      try {
        throw Error();
      } catch (u) {
        var t = u.stack.trim().match(/\n( *(at )?)/);
        Vn = t && t[1] || "", ri = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Vn + l + ri;
  }
  var Ln = !1;
  function Kn(l, t) {
    if (!l || Ln) return "";
    Ln = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var T = function() {
                throw Error();
              };
              if (Object.defineProperty(T.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(T, []);
                } catch (m) {
                  var o = m;
                }
                Reflect.construct(l, [], T);
              } else {
                try {
                  T.call();
                } catch (m) {
                  o = m;
                }
                l.call(T.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (m) {
                o = m;
              }
              (T = l()) && typeof T.catch == "function" && T.catch(function() {
              });
            }
          } catch (m) {
            if (m && o && typeof m.stack == "string")
              return [m.stack, o.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      e && e.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var n = a.DetermineComponentFrameRoot(), f = n[0], c = n[1];
      if (f && c) {
        var i = f.split(`
`), h = c.split(`
`);
        for (e = a = 0; a < i.length && !i[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; e < h.length && !h[e].includes(
          "DetermineComponentFrameRoot"
        ); )
          e++;
        if (a === i.length || e === h.length)
          for (a = i.length - 1, e = h.length - 1; 1 <= a && 0 <= e && i[a] !== h[e]; )
            e--;
        for (; 1 <= a && 0 <= e; a--, e--)
          if (i[a] !== h[e]) {
            if (a !== 1 || e !== 1)
              do
                if (a--, e--, 0 > e || i[a] !== h[e]) {
                  var S = `
` + i[a].replace(" at new ", " at ");
                  return l.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", l.displayName)), S;
                }
              while (1 <= a && 0 <= e);
            break;
          }
      }
    } finally {
      Ln = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? Qu(u) : "";
  }
  function My(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Qu(l.type);
      case 16:
        return Qu("Lazy");
      case 13:
        return Qu("Suspense");
      case 19:
        return Qu("SuspenseList");
      case 0:
      case 15:
        return Kn(l.type, !1);
      case 11:
        return Kn(l.type.render, !1);
      case 1:
        return Kn(l.type, !0);
      case 31:
        return Qu("Activity");
      default:
        return "";
    }
  }
  function Si(l) {
    try {
      var t = "";
      do
        t += My(l), l = l.return;
      while (l);
      return t;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  function tt(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function gi(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Dy(l) {
    var t = gi(l) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      t
    ), a = "" + l[t];
    if (!l.hasOwnProperty(t) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var e = u.get, n = u.set;
      return Object.defineProperty(l, t, {
        configurable: !0,
        get: function() {
          return e.call(this);
        },
        set: function(f) {
          a = "" + f, n.call(this, f);
        }
      }), Object.defineProperty(l, t, {
        enumerable: u.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(f) {
          a = "" + f;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[t];
        }
      };
    }
  }
  function Oe(l) {
    l._valueTracker || (l._valueTracker = Dy(l));
  }
  function bi(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var u = t.getValue(), a = "";
    return l && (a = gi(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== u ? (t.setValue(l), !0) : !1;
  }
  function _e(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Uy = /[\n"\\]/g;
  function ut(l) {
    return l.replace(
      Uy,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Jn(l, t, u, a, e, n, f, c) {
    l.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.type = f : l.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + tt(t)) : l.value !== "" + tt(t) && (l.value = "" + tt(t)) : f !== "submit" && f !== "reset" || l.removeAttribute("value"), t != null ? wn(l, f, tt(t)) : u != null ? wn(l, f, tt(u)) : a != null && l.removeAttribute("value"), e == null && n != null && (l.defaultChecked = !!n), e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + tt(c) : l.removeAttribute("name");
  }
  function Ti(l, t, u, a, e, n, f, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || u != null) {
      if (!(n !== "submit" && n !== "reset" || t != null))
        return;
      u = u != null ? "" + tt(u) : "", t = t != null ? "" + tt(t) : u, c || t === l.value || (l.value = t), l.defaultValue = t;
    }
    a = a ?? e, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = c ? l.checked : !!a, l.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (l.name = f);
  }
  function wn(l, t, u) {
    t === "number" && _e(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function xu(l, t, u, a) {
    if (l = l.options, t) {
      t = {};
      for (var e = 0; e < u.length; e++)
        t["$" + u[e]] = !0;
      for (u = 0; u < l.length; u++)
        e = t.hasOwnProperty("$" + l[u].value), l[u].selected !== e && (l[u].selected = e), e && a && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + tt(u), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === u) {
          l[e].selected = !0, a && (l[e].defaultSelected = !0);
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ei(l, t, u) {
    if (t != null && (t = "" + tt(t), t !== l.value && (l.value = t), u == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = u != null ? "" + tt(u) : "";
  }
  function Ai(l, t, u, a) {
    if (t == null) {
      if (a != null) {
        if (u != null) throw Error(r(92));
        if (Ul(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        u = a;
      }
      u == null && (u = ""), t = u;
    }
    u = tt(t), l.defaultValue = u, a = l.textContent, a === u && a !== "" && a !== null && (l.value = a);
  }
  function Zu(l, t) {
    if (t) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Ry = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function zi(l, t, u) {
    var a = t.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, u) : typeof u != "number" || u === 0 || Ry.has(t) ? t === "float" ? l.cssFloat = u : l[t] = ("" + u).trim() : l[t] = u + "px";
  }
  function Oi(l, t, u) {
    if (t != null && typeof t != "object")
      throw Error(r(62));
    if (l = l.style, u != null) {
      for (var a in u)
        !u.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "");
      for (var e in t)
        a = t[e], t.hasOwnProperty(e) && u[e] !== a && zi(l, e, a);
    } else
      for (var n in t)
        t.hasOwnProperty(n) && zi(l, n, t[n]);
  }
  function Wn(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
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
  var Hy = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Ny = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Me(l) {
    return Ny.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  var $n = null;
  function kn(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var ju = null, Cu = null;
  function _i(l) {
    var t = pu(l);
    if (t && (l = t.stateNode)) {
      var u = l[Xl] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (Jn(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), t = u.name, u.type === "radio" && t != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + ut(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < u.length; t++) {
              var a = u[t];
              if (a !== l && a.form === l.form) {
                var e = a[Xl] || null;
                if (!e) throw Error(r(90));
                Jn(
                  a,
                  e.value,
                  e.defaultValue,
                  e.defaultValue,
                  e.checked,
                  e.defaultChecked,
                  e.type,
                  e.name
                );
              }
            }
            for (t = 0; t < u.length; t++)
              a = u[t], a.form === l.form && bi(a);
          }
          break l;
        case "textarea":
          Ei(l, u.value, u.defaultValue);
          break l;
        case "select":
          t = u.value, t != null && xu(l, !!u.multiple, t, !1);
      }
    }
  }
  var Fn = !1;
  function Mi(l, t, u) {
    if (Fn) return l(t, u);
    Fn = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (Fn = !1, (ju !== null || Cu !== null) && (dn(), ju && (t = ju, l = Cu, Cu = ju = null, _i(t), l)))
        for (t = 0; t < l.length; t++) _i(l[t]);
    }
  }
  function za(l, t) {
    var u = l.stateNode;
    if (u === null) return null;
    var a = u[Xl] || null;
    if (a === null) return null;
    u = a[t];
    l: switch (t) {
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
        (a = !a.disabled) || (l = l.type, a = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !a;
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        r(231, t, typeof u)
      );
    return u;
  }
  var _t = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), In = !1;
  if (_t)
    try {
      var Oa = {};
      Object.defineProperty(Oa, "passive", {
        get: function() {
          In = !0;
        }
      }), window.addEventListener("test", Oa, Oa), window.removeEventListener("test", Oa, Oa);
    } catch {
      In = !1;
    }
  var Ct = null, Pn = null, De = null;
  function Di() {
    if (De) return De;
    var l, t = Pn, u = t.length, a, e = "value" in Ct ? Ct.value : Ct.textContent, n = e.length;
    for (l = 0; l < u && t[l] === e[l]; l++) ;
    var f = u - l;
    for (a = 1; a <= f && t[u - a] === e[n - a]; a++) ;
    return De = e.slice(l, 1 < a ? 1 - a : void 0);
  }
  function Ue(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function Re() {
    return !0;
  }
  function Ui() {
    return !1;
  }
  function Ql(l) {
    function t(u, a, e, n, f) {
      this._reactName = u, this._targetInst = e, this.type = a, this.nativeEvent = n, this.target = f, this.currentTarget = null;
      for (var c in l)
        l.hasOwnProperty(c) && (u = l[c], this[c] = u ? u(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? Re : Ui, this.isPropagationStopped = Ui, this;
    }
    return R(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = Re);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = Re);
      },
      persist: function() {
      },
      isPersistent: Re
    }), t;
  }
  var ru = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, He = Ql(ru), _a = R({}, ru, { view: 0, detail: 0 }), qy = Ql(_a), lf, tf, Ma, Ne = R({}, _a, {
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
    getModifierState: af,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Ma && (Ma && l.type === "mousemove" ? (lf = l.screenX - Ma.screenX, tf = l.screenY - Ma.screenY) : tf = lf = 0, Ma = l), lf);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : tf;
    }
  }), Ri = Ql(Ne), Yy = R({}, Ne, { dataTransfer: 0 }), By = Ql(Yy), py = R({}, _a, { relatedTarget: 0 }), uf = Ql(py), Gy = R({}, ru, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Xy = Ql(Gy), Qy = R({}, ru, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), xy = Ql(Qy), Zy = R({}, ru, { data: 0 }), Hi = Ql(Zy), jy = {
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
  }, Cy = {
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
  }, Vy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Ly(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = Vy[l]) ? !!t[l] : !1;
  }
  function af() {
    return Ly;
  }
  var Ky = R({}, _a, {
    key: function(l) {
      if (l.key) {
        var t = jy[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = Ue(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Cy[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: af,
    charCode: function(l) {
      return l.type === "keypress" ? Ue(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Ue(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), Jy = Ql(Ky), wy = R({}, Ne, {
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
  }), Ni = Ql(wy), Wy = R({}, _a, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: af
  }), $y = Ql(Wy), ky = R({}, ru, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Fy = Ql(ky), Iy = R({}, Ne, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Py = Ql(Iy), ld = R({}, ru, {
    newState: 0,
    oldState: 0
  }), td = Ql(ld), ud = [9, 13, 27, 32], ef = _t && "CompositionEvent" in window, Da = null;
  _t && "documentMode" in document && (Da = document.documentMode);
  var ad = _t && "TextEvent" in window && !Da, qi = _t && (!ef || Da && 8 < Da && 11 >= Da), Yi = " ", Bi = !1;
  function pi(l, t) {
    switch (l) {
      case "keyup":
        return ud.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Gi(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Vu = !1;
  function ed(l, t) {
    switch (l) {
      case "compositionend":
        return Gi(t);
      case "keypress":
        return t.which !== 32 ? null : (Bi = !0, Yi);
      case "textInput":
        return l = t.data, l === Yi && Bi ? null : l;
      default:
        return null;
    }
  }
  function nd(l, t) {
    if (Vu)
      return l === "compositionend" || !ef && pi(l, t) ? (l = Di(), De = Pn = Ct = null, Vu = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return qi && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var fd = {
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
  function Xi(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!fd[l.type] : t === "textarea";
  }
  function Qi(l, t, u, a) {
    ju ? Cu ? Cu.push(a) : Cu = [a] : ju = a, t = gn(t, "onChange"), 0 < t.length && (u = new He(
      "onChange",
      "change",
      null,
      u,
      a
    ), l.push({ event: u, listeners: t }));
  }
  var Ua = null, Ra = null;
  function cd(l) {
    gv(l, 0);
  }
  function qe(l) {
    var t = Aa(l);
    if (bi(t)) return l;
  }
  function xi(l, t) {
    if (l === "change") return t;
  }
  var Zi = !1;
  if (_t) {
    var nf;
    if (_t) {
      var ff = "oninput" in document;
      if (!ff) {
        var ji = document.createElement("div");
        ji.setAttribute("oninput", "return;"), ff = typeof ji.oninput == "function";
      }
      nf = ff;
    } else nf = !1;
    Zi = nf && (!document.documentMode || 9 < document.documentMode);
  }
  function Ci() {
    Ua && (Ua.detachEvent("onpropertychange", Vi), Ra = Ua = null);
  }
  function Vi(l) {
    if (l.propertyName === "value" && qe(Ra)) {
      var t = [];
      Qi(
        t,
        Ra,
        l,
        kn(l)
      ), Mi(cd, t);
    }
  }
  function id(l, t, u) {
    l === "focusin" ? (Ci(), Ua = t, Ra = u, Ua.attachEvent("onpropertychange", Vi)) : l === "focusout" && Ci();
  }
  function sd(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return qe(Ra);
  }
  function vd(l, t) {
    if (l === "click") return qe(t);
  }
  function yd(l, t) {
    if (l === "input" || l === "change")
      return qe(t);
  }
  function dd(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var Wl = typeof Object.is == "function" ? Object.is : dd;
  function Ha(l, t) {
    if (Wl(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var u = Object.keys(l), a = Object.keys(t);
    if (u.length !== a.length) return !1;
    for (a = 0; a < u.length; a++) {
      var e = u[a];
      if (!pn.call(t, e) || !Wl(l[e], t[e]))
        return !1;
    }
    return !0;
  }
  function Li(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Ki(l, t) {
    var u = Li(l);
    l = 0;
    for (var a; u; ) {
      if (u.nodeType === 3) {
        if (a = l + u.textContent.length, l <= t && a >= t)
          return { node: u, offset: t - l };
        l = a;
      }
      l: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break l;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = Li(u);
    }
  }
  function Ji(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ji(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function wi(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = _e(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof t.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = t.contentWindow;
      else break;
      t = _e(l.document);
    }
    return t;
  }
  function cf(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var hd = _t && "documentMode" in document && 11 >= document.documentMode, Lu = null, sf = null, Na = null, vf = !1;
  function Wi(l, t, u) {
    var a = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    vf || Lu == null || Lu !== _e(a) || (a = Lu, "selectionStart" in a && cf(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Na && Ha(Na, a) || (Na = a, a = gn(sf, "onSelect"), 0 < a.length && (t = new He(
      "onSelect",
      "select",
      null,
      t,
      u
    ), l.push({ event: t, listeners: a }), t.target = Lu)));
  }
  function Su(l, t) {
    var u = {};
    return u[l.toLowerCase()] = t.toLowerCase(), u["Webkit" + l] = "webkit" + t, u["Moz" + l] = "moz" + t, u;
  }
  var Ku = {
    animationend: Su("Animation", "AnimationEnd"),
    animationiteration: Su("Animation", "AnimationIteration"),
    animationstart: Su("Animation", "AnimationStart"),
    transitionrun: Su("Transition", "TransitionRun"),
    transitionstart: Su("Transition", "TransitionStart"),
    transitioncancel: Su("Transition", "TransitionCancel"),
    transitionend: Su("Transition", "TransitionEnd")
  }, yf = {}, $i = {};
  _t && ($i = document.createElement("div").style, "AnimationEvent" in window || (delete Ku.animationend.animation, delete Ku.animationiteration.animation, delete Ku.animationstart.animation), "TransitionEvent" in window || delete Ku.transitionend.transition);
  function gu(l) {
    if (yf[l]) return yf[l];
    if (!Ku[l]) return l;
    var t = Ku[l], u;
    for (u in t)
      if (t.hasOwnProperty(u) && u in $i)
        return yf[l] = t[u];
    return l;
  }
  var ki = gu("animationend"), Fi = gu("animationiteration"), Ii = gu("animationstart"), od = gu("transitionrun"), md = gu("transitionstart"), rd = gu("transitioncancel"), Pi = gu("transitionend"), l0 = /* @__PURE__ */ new Map(), df = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  df.push("scrollEnd");
  function dt(l, t) {
    l0.set(l, t), mu(t, [l]);
  }
  var t0 = /* @__PURE__ */ new WeakMap();
  function at(l, t) {
    if (typeof l == "object" && l !== null) {
      var u = t0.get(l);
      return u !== void 0 ? u : (t = {
        value: l,
        source: t,
        stack: Si(t)
      }, t0.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: Si(t)
    };
  }
  var et = [], Ju = 0, hf = 0;
  function Ye() {
    for (var l = Ju, t = hf = Ju = 0; t < l; ) {
      var u = et[t];
      et[t++] = null;
      var a = et[t];
      et[t++] = null;
      var e = et[t];
      et[t++] = null;
      var n = et[t];
      if (et[t++] = null, a !== null && e !== null) {
        var f = a.pending;
        f === null ? e.next = e : (e.next = f.next, f.next = e), a.pending = e;
      }
      n !== 0 && u0(u, e, n);
    }
  }
  function Be(l, t, u, a) {
    et[Ju++] = l, et[Ju++] = t, et[Ju++] = u, et[Ju++] = a, hf |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
  }
  function of(l, t, u, a) {
    return Be(l, t, u, a), pe(l);
  }
  function wu(l, t) {
    return Be(l, null, null, t), pe(l);
  }
  function u0(l, t, u) {
    l.lanes |= u;
    var a = l.alternate;
    a !== null && (a.lanes |= u);
    for (var e = !1, n = l.return; n !== null; )
      n.childLanes |= u, a = n.alternate, a !== null && (a.childLanes |= u), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (e = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, e && t !== null && (e = 31 - wl(u), l = n.hiddenUpdates, a = l[e], a === null ? l[e] = [t] : a.push(t), t.lane = u | 536870912), n) : null;
  }
  function pe(l) {
    if (50 < ue)
      throw ue = 0, Tc = null, Error(r(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Wu = {};
  function Sd(l, t, u, a) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function $l(l, t, u, a) {
    return new Sd(l, t, u, a);
  }
  function mf(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Mt(l, t) {
    var u = l.alternate;
    return u === null ? (u = $l(
      l.tag,
      t,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = t, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, t = l.dependencies, u.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function a0(l, t) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, t = u.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function Ge(l, t, u, a, e, n) {
    var f = 0;
    if (a = l, typeof l == "function") mf(l) && (f = 1);
    else if (typeof l == "string")
      f = b1(
        l,
        u,
        N.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case mt:
          return l = $l(31, u, t, e), l.elementType = mt, l.lanes = n, l;
        case Bl:
          return bu(u.children, e, n, t);
        case vt:
          f = 8, e |= 24;
          break;
        case Gl:
          return l = $l(12, u, t, e | 2), l.elementType = Gl, l.lanes = n, l;
        case L:
          return l = $l(13, u, t, e), l.elementType = L, l.lanes = n, l;
        case Cl:
          return l = $l(19, u, t, e), l.elementType = Cl, l.lanes = n, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case yu:
              case Ml:
                f = 10;
                break l;
              case At:
                f = 9;
                break l;
              case yt:
                f = 11;
                break l;
              case Vl:
                f = 14;
                break l;
              case Ll:
                f = 16, a = null;
                break l;
            }
          f = 29, u = Error(
            r(130, l === null ? "null" : typeof l, "")
          ), a = null;
      }
    return t = $l(f, u, t, e), t.elementType = l, t.type = a, t.lanes = n, t;
  }
  function bu(l, t, u, a) {
    return l = $l(7, l, a, t), l.lanes = u, l;
  }
  function rf(l, t, u) {
    return l = $l(6, l, null, t), l.lanes = u, l;
  }
  function Sf(l, t, u) {
    return t = $l(
      4,
      l.children !== null ? l.children : [],
      l.key,
      t
    ), t.lanes = u, t.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, t;
  }
  var $u = [], ku = 0, Xe = null, Qe = 0, nt = [], ft = 0, Tu = null, Dt = 1, Ut = "";
  function Eu(l, t) {
    $u[ku++] = Qe, $u[ku++] = Xe, Xe = l, Qe = t;
  }
  function e0(l, t, u) {
    nt[ft++] = Dt, nt[ft++] = Ut, nt[ft++] = Tu, Tu = l;
    var a = Dt;
    l = Ut;
    var e = 32 - wl(a) - 1;
    a &= ~(1 << e), u += 1;
    var n = 32 - wl(t) + e;
    if (30 < n) {
      var f = e - e % 5;
      n = (a & (1 << f) - 1).toString(32), a >>= f, e -= f, Dt = 1 << 32 - wl(t) + e | u << e | a, Ut = n + l;
    } else
      Dt = 1 << n | u << e | a, Ut = l;
  }
  function gf(l) {
    l.return !== null && (Eu(l, 1), e0(l, 1, 0));
  }
  function bf(l) {
    for (; l === Xe; )
      Xe = $u[--ku], $u[ku] = null, Qe = $u[--ku], $u[ku] = null;
    for (; l === Tu; )
      Tu = nt[--ft], nt[ft] = null, Ut = nt[--ft], nt[ft] = null, Dt = nt[--ft], nt[ft] = null;
  }
  var pl = null, vl = null, w = !1, Au = null, St = !1, Tf = Error(r(519));
  function zu(l) {
    var t = Error(r(418, ""));
    throw Ba(at(t, l)), Tf;
  }
  function n0(l) {
    var t = l.stateNode, u = l.type, a = l.memoizedProps;
    switch (t[Rl] = l, t[Xl] = a, u) {
      case "dialog":
        j("cancel", t), j("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        j("load", t);
        break;
      case "video":
      case "audio":
        for (u = 0; u < ee.length; u++)
          j(ee[u], t);
        break;
      case "source":
        j("error", t);
        break;
      case "img":
      case "image":
      case "link":
        j("error", t), j("load", t);
        break;
      case "details":
        j("toggle", t);
        break;
      case "input":
        j("invalid", t), Ti(
          t,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        ), Oe(t);
        break;
      case "select":
        j("invalid", t);
        break;
      case "textarea":
        j("invalid", t), Ai(t, a.value, a.defaultValue, a.children), Oe(t);
    }
    u = a.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || t.textContent === "" + u || a.suppressHydrationWarning === !0 || Av(t.textContent, u) ? (a.popover != null && (j("beforetoggle", t), j("toggle", t)), a.onScroll != null && j("scroll", t), a.onScrollEnd != null && j("scrollend", t), a.onClick != null && (t.onclick = bn), t = !0) : t = !1, t || zu(l);
  }
  function f0(l) {
    for (pl = l.return; pl; )
      switch (pl.tag) {
        case 5:
        case 13:
          St = !1;
          return;
        case 27:
        case 3:
          St = !0;
          return;
        default:
          pl = pl.return;
      }
  }
  function qa(l) {
    if (l !== pl) return !1;
    if (!w) return f0(l), w = !0, !1;
    var t = l.tag, u;
    if ((u = t !== 3 && t !== 27) && ((u = t === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Gc(l.type, l.memoizedProps)), u = !u), u && vl && zu(l), f0(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(r(317));
      l: {
        for (l = l.nextSibling, t = 0; l; ) {
          if (l.nodeType === 8)
            if (u = l.data, u === "/$") {
              if (t === 0) {
                vl = ot(l.nextSibling);
                break l;
              }
              t--;
            } else
              u !== "$" && u !== "$!" && u !== "$?" || t++;
          l = l.nextSibling;
        }
        vl = null;
      }
    } else
      t === 27 ? (t = vl, eu(l.type) ? (l = Zc, Zc = null, vl = l) : vl = t) : vl = pl ? ot(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Ya() {
    vl = pl = null, w = !1;
  }
  function c0() {
    var l = Au;
    return l !== null && (jl === null ? jl = l : jl.push.apply(
      jl,
      l
    ), Au = null), l;
  }
  function Ba(l) {
    Au === null ? Au = [l] : Au.push(l);
  }
  var Ef = E(null), Ou = null, Rt = null;
  function Vt(l, t, u) {
    O(Ef, t._currentValue), t._currentValue = u;
  }
  function Ht(l) {
    l._currentValue = Ef.current, M(Ef);
  }
  function Af(l, t, u) {
    for (; l !== null; ) {
      var a = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === u) break;
      l = l.return;
    }
  }
  function zf(l, t, u, a) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var f = e.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var c = n;
          n = e;
          for (var i = 0; i < t.length; i++)
            if (c.context === t[i]) {
              n.lanes |= u, c = n.alternate, c !== null && (c.lanes |= u), Af(
                n.return,
                u,
                l
              ), a || (f = null);
              break l;
            }
          n = c.next;
        }
      } else if (e.tag === 18) {
        if (f = e.return, f === null) throw Error(r(341));
        f.lanes |= u, n = f.alternate, n !== null && (n.lanes |= u), Af(f, u, l), f = null;
      } else f = e.child;
      if (f !== null) f.return = e;
      else
        for (f = e; f !== null; ) {
          if (f === l) {
            f = null;
            break;
          }
          if (e = f.sibling, e !== null) {
            e.return = f.return, f = e;
            break;
          }
          f = f.return;
        }
      e = f;
    }
  }
  function pa(l, t, u, a) {
    l = null;
    for (var e = t, n = !1; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var f = e.alternate;
        if (f === null) throw Error(r(387));
        if (f = f.memoizedProps, f !== null) {
          var c = e.type;
          Wl(e.pendingProps.value, f.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (e === Kl.current) {
        if (f = e.alternate, f === null) throw Error(r(387));
        f.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push(ve) : l = [ve]);
      }
      e = e.return;
    }
    l !== null && zf(
      t,
      l,
      u,
      a
    ), t.flags |= 262144;
  }
  function xe(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Wl(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function _u(l) {
    Ou = l, Rt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Hl(l) {
    return i0(Ou, l);
  }
  function Ze(l, t) {
    return Ou === null && _u(l), i0(l, t);
  }
  function i0(l, t) {
    var u = t._currentValue;
    if (t = { context: t, memoizedValue: u, next: null }, Rt === null) {
      if (l === null) throw Error(r(308));
      Rt = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else Rt = Rt.next = t;
    return u;
  }
  var gd = typeof AbortController < "u" ? AbortController : function() {
    var l = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(u, a) {
        l.push(a);
      }
    };
    this.abort = function() {
      t.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, bd = z.unstable_scheduleCallback, Td = z.unstable_NormalPriority, Sl = {
    $$typeof: Ml,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Of() {
    return {
      controller: new gd(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ga(l) {
    l.refCount--, l.refCount === 0 && bd(Td, function() {
      l.controller.abort();
    });
  }
  var Xa = null, _f = 0, Fu = 0, Iu = null;
  function Ed(l, t) {
    if (Xa === null) {
      var u = Xa = [];
      _f = 0, Fu = Dc(), Iu = {
        status: "pending",
        value: void 0,
        then: function(a) {
          u.push(a);
        }
      };
    }
    return _f++, t.then(s0, s0), t;
  }
  function s0() {
    if (--_f === 0 && Xa !== null) {
      Iu !== null && (Iu.status = "fulfilled");
      var l = Xa;
      Xa = null, Fu = 0, Iu = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function Ad(l, t) {
    var u = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(e) {
        u.push(e);
      }
    };
    return l.then(
      function() {
        a.status = "fulfilled", a.value = t;
        for (var e = 0; e < u.length; e++) (0, u[e])(t);
      },
      function(e) {
        for (a.status = "rejected", a.reason = e, e = 0; e < u.length; e++)
          (0, u[e])(void 0);
      }
    ), a;
  }
  var v0 = g.S;
  g.S = function(l, t) {
    typeof t == "object" && t !== null && typeof t.then == "function" && Ed(l, t), v0 !== null && v0(l, t);
  };
  var Mu = E(null);
  function Mf() {
    var l = Mu.current;
    return l !== null ? l : el.pooledCache;
  }
  function je(l, t) {
    t === null ? O(Mu, Mu.current) : O(Mu, t.pool);
  }
  function y0() {
    var l = Mf();
    return l === null ? null : { parent: Sl._currentValue, pool: l };
  }
  var Qa = Error(r(460)), d0 = Error(r(474)), Ce = Error(r(542)), Df = { then: function() {
  } };
  function h0(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Ve() {
  }
  function o0(l, t, u) {
    switch (u = l[u], u === void 0 ? l.push(t) : u !== t && (t.then(Ve, Ve), t = u), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, r0(l), l;
      default:
        if (typeof t.status == "string") t.then(Ve, Ve);
        else {
          if (l = el, l !== null && 100 < l.shellSuspendCounter)
            throw Error(r(482));
          l = t, l.status = "pending", l.then(
            function(a) {
              if (t.status === "pending") {
                var e = t;
                e.status = "fulfilled", e.value = a;
              }
            },
            function(a) {
              if (t.status === "pending") {
                var e = t;
                e.status = "rejected", e.reason = a;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, r0(l), l;
        }
        throw xa = t, Qa;
    }
  }
  var xa = null;
  function m0() {
    if (xa === null) throw Error(r(459));
    var l = xa;
    return xa = null, l;
  }
  function r0(l) {
    if (l === Qa || l === Ce)
      throw Error(r(483));
  }
  var Lt = !1;
  function Uf(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Rf(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function Kt(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function Jt(l, t, u) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (W & 2) !== 0) {
      var e = a.pending;
      return e === null ? t.next = t : (t.next = e.next, e.next = t), a.pending = t, t = pe(l), u0(l, null, u), t;
    }
    return Be(l, a, t, u), pe(l);
  }
  function Za(l, t, u) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (u & 4194048) !== 0)) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, si(l, u);
    }
  }
  function Hf(l, t) {
    var u = l.updateQueue, a = l.alternate;
    if (a !== null && (a = a.updateQueue, u === a)) {
      var e = null, n = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var f = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          n === null ? e = n = f : n = n.next = f, u = u.next;
        } while (u !== null);
        n === null ? e = n = t : n = n.next = t;
      } else e = n = t;
      u = {
        baseState: a.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: a.shared,
        callbacks: a.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = t : l.next = t, u.lastBaseUpdate = t;
  }
  var Nf = !1;
  function ja() {
    if (Nf) {
      var l = Iu;
      if (l !== null) throw l;
    }
  }
  function Ca(l, t, u, a) {
    Nf = !1;
    var e = l.updateQueue;
    Lt = !1;
    var n = e.firstBaseUpdate, f = e.lastBaseUpdate, c = e.shared.pending;
    if (c !== null) {
      e.shared.pending = null;
      var i = c, h = i.next;
      i.next = null, f === null ? n = h : f.next = h, f = i;
      var S = l.alternate;
      S !== null && (S = S.updateQueue, c = S.lastBaseUpdate, c !== f && (c === null ? S.firstBaseUpdate = h : c.next = h, S.lastBaseUpdate = i));
    }
    if (n !== null) {
      var T = e.baseState;
      f = 0, S = h = i = null, c = n;
      do {
        var o = c.lane & -536870913, m = o !== c.lane;
        if (m ? (C & o) === o : (a & o) === o) {
          o !== 0 && o === Fu && (Nf = !0), S !== null && (S = S.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          l: {
            var p = l, q = c;
            o = t;
            var I = u;
            switch (q.tag) {
              case 1:
                if (p = q.payload, typeof p == "function") {
                  T = p.call(I, T, o);
                  break l;
                }
                T = p;
                break l;
              case 3:
                p.flags = p.flags & -65537 | 128;
              case 0:
                if (p = q.payload, o = typeof p == "function" ? p.call(I, T, o) : p, o == null) break l;
                T = R({}, T, o);
                break l;
              case 2:
                Lt = !0;
            }
          }
          o = c.callback, o !== null && (l.flags |= 64, m && (l.flags |= 8192), m = e.callbacks, m === null ? e.callbacks = [o] : m.push(o));
        } else
          m = {
            lane: o,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, S === null ? (h = S = m, i = T) : S = S.next = m, f |= o;
        if (c = c.next, c === null) {
          if (c = e.shared.pending, c === null)
            break;
          m = c, c = m.next, m.next = null, e.lastBaseUpdate = m, e.shared.pending = null;
        }
      } while (!0);
      S === null && (i = T), e.baseState = i, e.firstBaseUpdate = h, e.lastBaseUpdate = S, n === null && (e.shared.lanes = 0), lu |= f, l.lanes = f, l.memoizedState = T;
    }
  }
  function S0(l, t) {
    if (typeof l != "function")
      throw Error(r(191, l));
    l.call(t);
  }
  function g0(l, t) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        S0(u[l], t);
  }
  var Pu = E(null), Le = E(0);
  function b0(l, t) {
    l = Xt, O(Le, l), O(Pu, t), Xt = l | t.baseLanes;
  }
  function qf() {
    O(Le, Xt), O(Pu, Pu.current);
  }
  function Yf() {
    Xt = Le.current, M(Pu), M(Le);
  }
  var wt = 0, Q = null, k = null, ol = null, Ke = !1, la = !1, Du = !1, Je = 0, Va = 0, ta = null, zd = 0;
  function dl() {
    throw Error(r(321));
  }
  function Bf(l, t) {
    if (t === null) return !1;
    for (var u = 0; u < t.length && u < l.length; u++)
      if (!Wl(l[u], t[u])) return !1;
    return !0;
  }
  function pf(l, t, u, a, e, n) {
    return wt = n, Q = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, g.H = l === null || l.memoizedState === null ? us : as, Du = !1, n = u(a, e), Du = !1, la && (n = E0(
      t,
      u,
      a,
      e
    )), T0(l), n;
  }
  function T0(l) {
    g.H = Ie;
    var t = k !== null && k.next !== null;
    if (wt = 0, ol = k = Q = null, Ke = !1, Va = 0, ta = null, t) throw Error(r(300));
    l === null || Tl || (l = l.dependencies, l !== null && xe(l) && (Tl = !0));
  }
  function E0(l, t, u, a) {
    Q = l;
    var e = 0;
    do {
      if (la && (ta = null), Va = 0, la = !1, 25 <= e) throw Error(r(301));
      if (e += 1, ol = k = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      g.H = Hd, n = t(u, a);
    } while (la);
    return n;
  }
  function Od() {
    var l = g.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? La(t) : t, l = l.useState()[0], (k !== null ? k.memoizedState : null) !== l && (Q.flags |= 1024), t;
  }
  function Gf() {
    var l = Je !== 0;
    return Je = 0, l;
  }
  function Xf(l, t, u) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~u;
  }
  function Qf(l) {
    if (Ke) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      Ke = !1;
    }
    wt = 0, ol = k = Q = null, la = !1, Va = Je = 0, ta = null;
  }
  function xl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return ol === null ? Q.memoizedState = ol = l : ol = ol.next = l, ol;
  }
  function ml() {
    if (k === null) {
      var l = Q.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = k.next;
    var t = ol === null ? Q.memoizedState : ol.next;
    if (t !== null)
      ol = t, k = l;
    else {
      if (l === null)
        throw Q.alternate === null ? Error(r(467)) : Error(r(310));
      k = l, l = {
        memoizedState: k.memoizedState,
        baseState: k.baseState,
        baseQueue: k.baseQueue,
        queue: k.queue,
        next: null
      }, ol === null ? Q.memoizedState = ol = l : ol = ol.next = l;
    }
    return ol;
  }
  function xf() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function La(l) {
    var t = Va;
    return Va += 1, ta === null && (ta = []), l = o0(ta, l, t), t = Q, (ol === null ? t.memoizedState : ol.next) === null && (t = t.alternate, g.H = t === null || t.memoizedState === null ? us : as), l;
  }
  function we(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return La(l);
      if (l.$$typeof === Ml) return Hl(l);
    }
    throw Error(r(438, String(l)));
  }
  function Zf(l) {
    var t = null, u = Q.updateQueue;
    if (u !== null && (t = u.memoCache), t == null) {
      var a = Q.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(e) {
          return e.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), u === null && (u = xf(), Q.updateQueue = u), u.memoCache = t, u = t.data[t.index], u === void 0)
      for (u = t.data[t.index] = Array(l), a = 0; a < l; a++)
        u[a] = qu;
    return t.index++, u;
  }
  function Nt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function We(l) {
    var t = ml();
    return jf(t, k, l);
  }
  function jf(l, t, u) {
    var a = l.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = u;
    var e = l.baseQueue, n = a.pending;
    if (n !== null) {
      if (e !== null) {
        var f = e.next;
        e.next = n.next, n.next = f;
      }
      t.baseQueue = e = n, a.pending = null;
    }
    if (n = l.baseState, e === null) l.memoizedState = n;
    else {
      t = e.next;
      var c = f = null, i = null, h = t, S = !1;
      do {
        var T = h.lane & -536870913;
        if (T !== h.lane ? (C & T) === T : (wt & T) === T) {
          var o = h.revertLane;
          if (o === 0)
            i !== null && (i = i.next = {
              lane: 0,
              revertLane: 0,
              action: h.action,
              hasEagerState: h.hasEagerState,
              eagerState: h.eagerState,
              next: null
            }), T === Fu && (S = !0);
          else if ((wt & o) === o) {
            h = h.next, o === Fu && (S = !0);
            continue;
          } else
            T = {
              lane: 0,
              revertLane: h.revertLane,
              action: h.action,
              hasEagerState: h.hasEagerState,
              eagerState: h.eagerState,
              next: null
            }, i === null ? (c = i = T, f = n) : i = i.next = T, Q.lanes |= o, lu |= o;
          T = h.action, Du && u(n, T), n = h.hasEagerState ? h.eagerState : u(n, T);
        } else
          o = {
            lane: T,
            revertLane: h.revertLane,
            action: h.action,
            hasEagerState: h.hasEagerState,
            eagerState: h.eagerState,
            next: null
          }, i === null ? (c = i = o, f = n) : i = i.next = o, Q.lanes |= T, lu |= T;
        h = h.next;
      } while (h !== null && h !== t);
      if (i === null ? f = n : i.next = c, !Wl(n, l.memoizedState) && (Tl = !0, S && (u = Iu, u !== null)))
        throw u;
      l.memoizedState = n, l.baseState = f, l.baseQueue = i, a.lastRenderedState = n;
    }
    return e === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function Cf(l) {
    var t = ml(), u = t.queue;
    if (u === null) throw Error(r(311));
    u.lastRenderedReducer = l;
    var a = u.dispatch, e = u.pending, n = t.memoizedState;
    if (e !== null) {
      u.pending = null;
      var f = e = e.next;
      do
        n = l(n, f.action), f = f.next;
      while (f !== e);
      Wl(n, t.memoizedState) || (Tl = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), u.lastRenderedState = n;
    }
    return [n, a];
  }
  function A0(l, t, u) {
    var a = Q, e = ml(), n = w;
    if (n) {
      if (u === void 0) throw Error(r(407));
      u = u();
    } else u = t();
    var f = !Wl(
      (k || e).memoizedState,
      u
    );
    f && (e.memoizedState = u, Tl = !0), e = e.queue;
    var c = _0.bind(null, a, e, l);
    if (Ka(2048, 8, c, [l]), e.getSnapshot !== t || f || ol !== null && ol.memoizedState.tag & 1) {
      if (a.flags |= 2048, ua(
        9,
        $e(),
        O0.bind(
          null,
          a,
          e,
          u,
          t
        ),
        null
      ), el === null) throw Error(r(349));
      n || (wt & 124) !== 0 || z0(a, t, u);
    }
    return u;
  }
  function z0(l, t, u) {
    l.flags |= 16384, l = { getSnapshot: t, value: u }, t = Q.updateQueue, t === null ? (t = xf(), Q.updateQueue = t, t.stores = [l]) : (u = t.stores, u === null ? t.stores = [l] : u.push(l));
  }
  function O0(l, t, u, a) {
    t.value = u, t.getSnapshot = a, M0(t) && D0(l);
  }
  function _0(l, t, u) {
    return u(function() {
      M0(t) && D0(l);
    });
  }
  function M0(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var u = t();
      return !Wl(l, u);
    } catch {
      return !0;
    }
  }
  function D0(l) {
    var t = wu(l, 2);
    t !== null && lt(t, l, 2);
  }
  function Vf(l) {
    var t = xl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), Du) {
        Zt(!0);
        try {
          u();
        } finally {
          Zt(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Nt,
      lastRenderedState: l
    }, t;
  }
  function U0(l, t, u, a) {
    return l.baseState = u, jf(
      l,
      k,
      typeof a == "function" ? a : Nt
    );
  }
  function _d(l, t, u, a, e) {
    if (Fe(l)) throw Error(r(485));
    if (l = t.action, l !== null) {
      var n = {
        payload: e,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(f) {
          n.listeners.push(f);
        }
      };
      g.T !== null ? u(!0) : n.isTransition = !1, a(n), u = t.pending, u === null ? (n.next = t.pending = n, R0(t, n)) : (n.next = u.next, t.pending = u.next = n);
    }
  }
  function R0(l, t) {
    var u = t.action, a = t.payload, e = l.state;
    if (t.isTransition) {
      var n = g.T, f = {};
      g.T = f;
      try {
        var c = u(e, a), i = g.S;
        i !== null && i(f, c), H0(l, t, c);
      } catch (h) {
        Lf(l, t, h);
      } finally {
        g.T = n;
      }
    } else
      try {
        n = u(e, a), H0(l, t, n);
      } catch (h) {
        Lf(l, t, h);
      }
  }
  function H0(l, t, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(a) {
        N0(l, t, a);
      },
      function(a) {
        return Lf(l, t, a);
      }
    ) : N0(l, t, u);
  }
  function N0(l, t, u) {
    t.status = "fulfilled", t.value = u, q0(t), l.state = u, t = l.pending, t !== null && (u = t.next, u === t ? l.pending = null : (u = u.next, t.next = u, R0(l, u)));
  }
  function Lf(l, t, u) {
    var a = l.pending;
    if (l.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = u, q0(t), t = t.next;
      while (t !== a);
    }
    l.action = null;
  }
  function q0(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function Y0(l, t) {
    return t;
  }
  function B0(l, t) {
    if (w) {
      var u = el.formState;
      if (u !== null) {
        l: {
          var a = Q;
          if (w) {
            if (vl) {
              t: {
                for (var e = vl, n = St; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (e = ot(
                    e.nextSibling
                  ), e === null) {
                    e = null;
                    break t;
                  }
                }
                n = e.data, e = n === "F!" || n === "F" ? e : null;
              }
              if (e) {
                vl = ot(
                  e.nextSibling
                ), a = e.data === "F!";
                break l;
              }
            }
            zu(a);
          }
          a = !1;
        }
        a && (t = u[0]);
      }
    }
    return u = xl(), u.memoizedState = u.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Y0,
      lastRenderedState: t
    }, u.queue = a, u = P0.bind(
      null,
      Q,
      a
    ), a.dispatch = u, a = Vf(!1), n = $f.bind(
      null,
      Q,
      !1,
      a.queue
    ), a = xl(), e = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, a.queue = e, u = _d.bind(
      null,
      Q,
      e,
      n,
      u
    ), e.dispatch = u, a.memoizedState = l, [t, u, !1];
  }
  function p0(l) {
    var t = ml();
    return G0(t, k, l);
  }
  function G0(l, t, u) {
    if (t = jf(
      l,
      t,
      Y0
    )[0], l = We(Nt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = La(t);
      } catch (f) {
        throw f === Qa ? Ce : f;
      }
    else a = t;
    t = ml();
    var e = t.queue, n = e.dispatch;
    return u !== t.memoizedState && (Q.flags |= 2048, ua(
      9,
      $e(),
      Md.bind(null, e, u),
      null
    )), [a, n, l];
  }
  function Md(l, t) {
    l.action = t;
  }
  function X0(l) {
    var t = ml(), u = k;
    if (u !== null)
      return G0(t, u, l);
    ml(), t = t.memoizedState, u = ml();
    var a = u.queue.dispatch;
    return u.memoizedState = l, [t, a, !1];
  }
  function ua(l, t, u, a) {
    return l = { tag: l, create: u, deps: a, inst: t, next: null }, t = Q.updateQueue, t === null && (t = xf(), Q.updateQueue = t), u = t.lastEffect, u === null ? t.lastEffect = l.next = l : (a = u.next, u.next = l, l.next = a, t.lastEffect = l), l;
  }
  function $e() {
    return { destroy: void 0, resource: void 0 };
  }
  function Q0() {
    return ml().memoizedState;
  }
  function ke(l, t, u, a) {
    var e = xl();
    a = a === void 0 ? null : a, Q.flags |= l, e.memoizedState = ua(
      1 | t,
      $e(),
      u,
      a
    );
  }
  function Ka(l, t, u, a) {
    var e = ml();
    a = a === void 0 ? null : a;
    var n = e.memoizedState.inst;
    k !== null && a !== null && Bf(a, k.memoizedState.deps) ? e.memoizedState = ua(t, n, u, a) : (Q.flags |= l, e.memoizedState = ua(
      1 | t,
      n,
      u,
      a
    ));
  }
  function x0(l, t) {
    ke(8390656, 8, l, t);
  }
  function Z0(l, t) {
    Ka(2048, 8, l, t);
  }
  function j0(l, t) {
    return Ka(4, 2, l, t);
  }
  function C0(l, t) {
    return Ka(4, 4, l, t);
  }
  function V0(l, t) {
    if (typeof t == "function") {
      l = l();
      var u = t(l);
      return function() {
        typeof u == "function" ? u() : t(null);
      };
    }
    if (t != null)
      return l = l(), t.current = l, function() {
        t.current = null;
      };
  }
  function L0(l, t, u) {
    u = u != null ? u.concat([l]) : null, Ka(4, 4, V0.bind(null, t, l), u);
  }
  function Kf() {
  }
  function K0(l, t) {
    var u = ml();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    return t !== null && Bf(t, a[1]) ? a[0] : (u.memoizedState = [l, t], l);
  }
  function J0(l, t) {
    var u = ml();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    if (t !== null && Bf(t, a[1]))
      return a[0];
    if (a = l(), Du) {
      Zt(!0);
      try {
        l();
      } finally {
        Zt(!1);
      }
    }
    return u.memoizedState = [a, t], a;
  }
  function Jf(l, t, u) {
    return u === void 0 || (wt & 1073741824) !== 0 ? l.memoizedState = t : (l.memoizedState = u, l = $s(), Q.lanes |= l, lu |= l, u);
  }
  function w0(l, t, u, a) {
    return Wl(u, t) ? u : Pu.current !== null ? (l = Jf(l, u, a), Wl(l, t) || (Tl = !0), l) : (wt & 42) === 0 ? (Tl = !0, l.memoizedState = u) : (l = $s(), Q.lanes |= l, lu |= l, t);
  }
  function W0(l, t, u, a, e) {
    var n = _.p;
    _.p = n !== 0 && 8 > n ? n : 8;
    var f = g.T, c = {};
    g.T = c, $f(l, !1, t, u);
    try {
      var i = e(), h = g.S;
      if (h !== null && h(c, i), i !== null && typeof i == "object" && typeof i.then == "function") {
        var S = Ad(
          i,
          a
        );
        Ja(
          l,
          t,
          S,
          Pl(l)
        );
      } else
        Ja(
          l,
          t,
          a,
          Pl(l)
        );
    } catch (T) {
      Ja(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: T },
        Pl()
      );
    } finally {
      _.p = n, g.T = f;
    }
  }
  function Dd() {
  }
  function wf(l, t, u, a) {
    if (l.tag !== 5) throw Error(r(476));
    var e = $0(l).queue;
    W0(
      l,
      e,
      t,
      B,
      u === null ? Dd : function() {
        return k0(l), u(a);
      }
    );
  }
  function $0(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: B,
      baseState: B,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Nt,
        lastRenderedState: B
      },
      next: null
    };
    var u = {};
    return t.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Nt,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function k0(l) {
    var t = $0(l).next.queue;
    Ja(l, t, {}, Pl());
  }
  function Wf() {
    return Hl(ve);
  }
  function F0() {
    return ml().memoizedState;
  }
  function I0() {
    return ml().memoizedState;
  }
  function Ud(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var u = Pl();
          l = Kt(u);
          var a = Jt(t, l, u);
          a !== null && (lt(a, t, u), Za(a, t, u)), t = { cache: Of() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Rd(l, t, u) {
    var a = Pl();
    u = {
      lane: a,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Fe(l) ? ls(t, u) : (u = of(l, t, u, a), u !== null && (lt(u, l, a), ts(u, t, a)));
  }
  function P0(l, t, u) {
    var a = Pl();
    Ja(l, t, u, a);
  }
  function Ja(l, t, u, a) {
    var e = {
      lane: a,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Fe(l)) ls(t, e);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
        try {
          var f = t.lastRenderedState, c = n(f, u);
          if (e.hasEagerState = !0, e.eagerState = c, Wl(c, f))
            return Be(l, t, e, 0), el === null && Ye(), !1;
        } catch {
        } finally {
        }
      if (u = of(l, t, e, a), u !== null)
        return lt(u, l, a), ts(u, t, a), !0;
    }
    return !1;
  }
  function $f(l, t, u, a) {
    if (a = {
      lane: 2,
      revertLane: Dc(),
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Fe(l)) {
      if (t) throw Error(r(479));
    } else
      t = of(
        l,
        u,
        a,
        2
      ), t !== null && lt(t, l, 2);
  }
  function Fe(l) {
    var t = l.alternate;
    return l === Q || t !== null && t === Q;
  }
  function ls(l, t) {
    la = Ke = !0;
    var u = l.pending;
    u === null ? t.next = t : (t.next = u.next, u.next = t), l.pending = t;
  }
  function ts(l, t, u) {
    if ((u & 4194048) !== 0) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, si(l, u);
    }
  }
  var Ie = {
    readContext: Hl,
    use: we,
    useCallback: dl,
    useContext: dl,
    useEffect: dl,
    useImperativeHandle: dl,
    useLayoutEffect: dl,
    useInsertionEffect: dl,
    useMemo: dl,
    useReducer: dl,
    useRef: dl,
    useState: dl,
    useDebugValue: dl,
    useDeferredValue: dl,
    useTransition: dl,
    useSyncExternalStore: dl,
    useId: dl,
    useHostTransitionStatus: dl,
    useFormState: dl,
    useActionState: dl,
    useOptimistic: dl,
    useMemoCache: dl,
    useCacheRefresh: dl
  }, us = {
    readContext: Hl,
    use: we,
    useCallback: function(l, t) {
      return xl().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: Hl,
    useEffect: x0,
    useImperativeHandle: function(l, t, u) {
      u = u != null ? u.concat([l]) : null, ke(
        4194308,
        4,
        V0.bind(null, t, l),
        u
      );
    },
    useLayoutEffect: function(l, t) {
      return ke(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      ke(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var u = xl();
      t = t === void 0 ? null : t;
      var a = l();
      if (Du) {
        Zt(!0);
        try {
          l();
        } finally {
          Zt(!1);
        }
      }
      return u.memoizedState = [a, t], a;
    },
    useReducer: function(l, t, u) {
      var a = xl();
      if (u !== void 0) {
        var e = u(t);
        if (Du) {
          Zt(!0);
          try {
            u(t);
          } finally {
            Zt(!1);
          }
        }
      } else e = t;
      return a.memoizedState = a.baseState = e, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: e
      }, a.queue = l, l = l.dispatch = Rd.bind(
        null,
        Q,
        l
      ), [a.memoizedState, l];
    },
    useRef: function(l) {
      var t = xl();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = Vf(l);
      var t = l.queue, u = P0.bind(null, Q, t);
      return t.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: Kf,
    useDeferredValue: function(l, t) {
      var u = xl();
      return Jf(u, l, t);
    },
    useTransition: function() {
      var l = Vf(!1);
      return l = W0.bind(
        null,
        Q,
        l.queue,
        !0,
        !1
      ), xl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, u) {
      var a = Q, e = xl();
      if (w) {
        if (u === void 0)
          throw Error(r(407));
        u = u();
      } else {
        if (u = t(), el === null)
          throw Error(r(349));
        (C & 124) !== 0 || z0(a, t, u);
      }
      e.memoizedState = u;
      var n = { value: u, getSnapshot: t };
      return e.queue = n, x0(_0.bind(null, a, n, l), [
        l
      ]), a.flags |= 2048, ua(
        9,
        $e(),
        O0.bind(
          null,
          a,
          n,
          u,
          t
        ),
        null
      ), u;
    },
    useId: function() {
      var l = xl(), t = el.identifierPrefix;
      if (w) {
        var u = Ut, a = Dt;
        u = (a & ~(1 << 32 - wl(a) - 1)).toString(32) + u, t = "«" + t + "R" + u, u = Je++, 0 < u && (t += "H" + u.toString(32)), t += "»";
      } else
        u = zd++, t = "«" + t + "r" + u.toString(32) + "»";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: Wf,
    useFormState: B0,
    useActionState: B0,
    useOptimistic: function(l) {
      var t = xl();
      t.memoizedState = t.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = u, t = $f.bind(
        null,
        Q,
        !0,
        u
      ), u.dispatch = t, [l, t];
    },
    useMemoCache: Zf,
    useCacheRefresh: function() {
      return xl().memoizedState = Ud.bind(
        null,
        Q
      );
    }
  }, as = {
    readContext: Hl,
    use: we,
    useCallback: K0,
    useContext: Hl,
    useEffect: Z0,
    useImperativeHandle: L0,
    useInsertionEffect: j0,
    useLayoutEffect: C0,
    useMemo: J0,
    useReducer: We,
    useRef: Q0,
    useState: function() {
      return We(Nt);
    },
    useDebugValue: Kf,
    useDeferredValue: function(l, t) {
      var u = ml();
      return w0(
        u,
        k.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = We(Nt)[0], t = ml().memoizedState;
      return [
        typeof l == "boolean" ? l : La(l),
        t
      ];
    },
    useSyncExternalStore: A0,
    useId: F0,
    useHostTransitionStatus: Wf,
    useFormState: p0,
    useActionState: p0,
    useOptimistic: function(l, t) {
      var u = ml();
      return U0(u, k, l, t);
    },
    useMemoCache: Zf,
    useCacheRefresh: I0
  }, Hd = {
    readContext: Hl,
    use: we,
    useCallback: K0,
    useContext: Hl,
    useEffect: Z0,
    useImperativeHandle: L0,
    useInsertionEffect: j0,
    useLayoutEffect: C0,
    useMemo: J0,
    useReducer: Cf,
    useRef: Q0,
    useState: function() {
      return Cf(Nt);
    },
    useDebugValue: Kf,
    useDeferredValue: function(l, t) {
      var u = ml();
      return k === null ? Jf(u, l, t) : w0(
        u,
        k.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = Cf(Nt)[0], t = ml().memoizedState;
      return [
        typeof l == "boolean" ? l : La(l),
        t
      ];
    },
    useSyncExternalStore: A0,
    useId: F0,
    useHostTransitionStatus: Wf,
    useFormState: X0,
    useActionState: X0,
    useOptimistic: function(l, t) {
      var u = ml();
      return k !== null ? U0(u, k, l, t) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Zf,
    useCacheRefresh: I0
  }, aa = null, wa = 0;
  function Pe(l) {
    var t = wa;
    return wa += 1, aa === null && (aa = []), o0(aa, l, t);
  }
  function Wa(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function ln(l, t) {
    throw t.$$typeof === nl ? Error(r(525)) : (l = Object.prototype.toString.call(t), Error(
      r(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function es(l) {
    var t = l._init;
    return t(l._payload);
  }
  function ns(l) {
    function t(y, v) {
      if (l) {
        var d = y.deletions;
        d === null ? (y.deletions = [v], y.flags |= 16) : d.push(v);
      }
    }
    function u(y, v) {
      if (!l) return null;
      for (; v !== null; )
        t(y, v), v = v.sibling;
      return null;
    }
    function a(y) {
      for (var v = /* @__PURE__ */ new Map(); y !== null; )
        y.key !== null ? v.set(y.key, y) : v.set(y.index, y), y = y.sibling;
      return v;
    }
    function e(y, v) {
      return y = Mt(y, v), y.index = 0, y.sibling = null, y;
    }
    function n(y, v, d) {
      return y.index = d, l ? (d = y.alternate, d !== null ? (d = d.index, d < v ? (y.flags |= 67108866, v) : d) : (y.flags |= 67108866, v)) : (y.flags |= 1048576, v);
    }
    function f(y) {
      return l && y.alternate === null && (y.flags |= 67108866), y;
    }
    function c(y, v, d, b) {
      return v === null || v.tag !== 6 ? (v = rf(d, y.mode, b), v.return = y, v) : (v = e(v, d), v.return = y, v);
    }
    function i(y, v, d, b) {
      var D = d.type;
      return D === Bl ? S(
        y,
        v,
        d.props.children,
        b,
        d.key
      ) : v !== null && (v.elementType === D || typeof D == "object" && D !== null && D.$$typeof === Ll && es(D) === v.type) ? (v = e(v, d.props), Wa(v, d), v.return = y, v) : (v = Ge(
        d.type,
        d.key,
        d.props,
        null,
        y.mode,
        b
      ), Wa(v, d), v.return = y, v);
    }
    function h(y, v, d, b) {
      return v === null || v.tag !== 4 || v.stateNode.containerInfo !== d.containerInfo || v.stateNode.implementation !== d.implementation ? (v = Sf(d, y.mode, b), v.return = y, v) : (v = e(v, d.children || []), v.return = y, v);
    }
    function S(y, v, d, b, D) {
      return v === null || v.tag !== 7 ? (v = bu(
        d,
        y.mode,
        b,
        D
      ), v.return = y, v) : (v = e(v, d), v.return = y, v);
    }
    function T(y, v, d) {
      if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint")
        return v = rf(
          "" + v,
          y.mode,
          d
        ), v.return = y, v;
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case al:
            return d = Ge(
              v.type,
              v.key,
              v.props,
              null,
              y.mode,
              d
            ), Wa(d, v), d.return = y, d;
          case Yl:
            return v = Sf(
              v,
              y.mode,
              d
            ), v.return = y, v;
          case Ll:
            var b = v._init;
            return v = b(v._payload), T(y, v, d);
        }
        if (Ul(v) || Dl(v))
          return v = bu(
            v,
            y.mode,
            d,
            null
          ), v.return = y, v;
        if (typeof v.then == "function")
          return T(y, Pe(v), d);
        if (v.$$typeof === Ml)
          return T(
            y,
            Ze(y, v),
            d
          );
        ln(y, v);
      }
      return null;
    }
    function o(y, v, d, b) {
      var D = v !== null ? v.key : null;
      if (typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint")
        return D !== null ? null : c(y, v, "" + d, b);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case al:
            return d.key === D ? i(y, v, d, b) : null;
          case Yl:
            return d.key === D ? h(y, v, d, b) : null;
          case Ll:
            return D = d._init, d = D(d._payload), o(y, v, d, b);
        }
        if (Ul(d) || Dl(d))
          return D !== null ? null : S(y, v, d, b, null);
        if (typeof d.then == "function")
          return o(
            y,
            v,
            Pe(d),
            b
          );
        if (d.$$typeof === Ml)
          return o(
            y,
            v,
            Ze(y, d),
            b
          );
        ln(y, d);
      }
      return null;
    }
    function m(y, v, d, b, D) {
      if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint")
        return y = y.get(d) || null, c(v, y, "" + b, D);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case al:
            return y = y.get(
              b.key === null ? d : b.key
            ) || null, i(v, y, b, D);
          case Yl:
            return y = y.get(
              b.key === null ? d : b.key
            ) || null, h(v, y, b, D);
          case Ll:
            var x = b._init;
            return b = x(b._payload), m(
              y,
              v,
              d,
              b,
              D
            );
        }
        if (Ul(b) || Dl(b))
          return y = y.get(d) || null, S(v, y, b, D, null);
        if (typeof b.then == "function")
          return m(
            y,
            v,
            d,
            Pe(b),
            D
          );
        if (b.$$typeof === Ml)
          return m(
            y,
            v,
            d,
            Ze(v, b),
            D
          );
        ln(v, b);
      }
      return null;
    }
    function p(y, v, d, b) {
      for (var D = null, x = null, U = v, Y = v = 0, Al = null; U !== null && Y < d.length; Y++) {
        U.index > Y ? (Al = U, U = null) : Al = U.sibling;
        var J = o(
          y,
          U,
          d[Y],
          b
        );
        if (J === null) {
          U === null && (U = Al);
          break;
        }
        l && U && J.alternate === null && t(y, U), v = n(J, v, Y), x === null ? D = J : x.sibling = J, x = J, U = Al;
      }
      if (Y === d.length)
        return u(y, U), w && Eu(y, Y), D;
      if (U === null) {
        for (; Y < d.length; Y++)
          U = T(y, d[Y], b), U !== null && (v = n(
            U,
            v,
            Y
          ), x === null ? D = U : x.sibling = U, x = U);
        return w && Eu(y, Y), D;
      }
      for (U = a(U); Y < d.length; Y++)
        Al = m(
          U,
          y,
          Y,
          d[Y],
          b
        ), Al !== null && (l && Al.alternate !== null && U.delete(
          Al.key === null ? Y : Al.key
        ), v = n(
          Al,
          v,
          Y
        ), x === null ? D = Al : x.sibling = Al, x = Al);
      return l && U.forEach(function(su) {
        return t(y, su);
      }), w && Eu(y, Y), D;
    }
    function q(y, v, d, b) {
      if (d == null) throw Error(r(151));
      for (var D = null, x = null, U = v, Y = v = 0, Al = null, J = d.next(); U !== null && !J.done; Y++, J = d.next()) {
        U.index > Y ? (Al = U, U = null) : Al = U.sibling;
        var su = o(y, U, J.value, b);
        if (su === null) {
          U === null && (U = Al);
          break;
        }
        l && U && su.alternate === null && t(y, U), v = n(su, v, Y), x === null ? D = su : x.sibling = su, x = su, U = Al;
      }
      if (J.done)
        return u(y, U), w && Eu(y, Y), D;
      if (U === null) {
        for (; !J.done; Y++, J = d.next())
          J = T(y, J.value, b), J !== null && (v = n(J, v, Y), x === null ? D = J : x.sibling = J, x = J);
        return w && Eu(y, Y), D;
      }
      for (U = a(U); !J.done; Y++, J = d.next())
        J = m(U, y, Y, J.value, b), J !== null && (l && J.alternate !== null && U.delete(J.key === null ? Y : J.key), v = n(J, v, Y), x === null ? D = J : x.sibling = J, x = J);
      return l && U.forEach(function(N1) {
        return t(y, N1);
      }), w && Eu(y, Y), D;
    }
    function I(y, v, d, b) {
      if (typeof d == "object" && d !== null && d.type === Bl && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case al:
            l: {
              for (var D = d.key; v !== null; ) {
                if (v.key === D) {
                  if (D = d.type, D === Bl) {
                    if (v.tag === 7) {
                      u(
                        y,
                        v.sibling
                      ), b = e(
                        v,
                        d.props.children
                      ), b.return = y, y = b;
                      break l;
                    }
                  } else if (v.elementType === D || typeof D == "object" && D !== null && D.$$typeof === Ll && es(D) === v.type) {
                    u(
                      y,
                      v.sibling
                    ), b = e(v, d.props), Wa(b, d), b.return = y, y = b;
                    break l;
                  }
                  u(y, v);
                  break;
                } else t(y, v);
                v = v.sibling;
              }
              d.type === Bl ? (b = bu(
                d.props.children,
                y.mode,
                b,
                d.key
              ), b.return = y, y = b) : (b = Ge(
                d.type,
                d.key,
                d.props,
                null,
                y.mode,
                b
              ), Wa(b, d), b.return = y, y = b);
            }
            return f(y);
          case Yl:
            l: {
              for (D = d.key; v !== null; ) {
                if (v.key === D)
                  if (v.tag === 4 && v.stateNode.containerInfo === d.containerInfo && v.stateNode.implementation === d.implementation) {
                    u(
                      y,
                      v.sibling
                    ), b = e(v, d.children || []), b.return = y, y = b;
                    break l;
                  } else {
                    u(y, v);
                    break;
                  }
                else t(y, v);
                v = v.sibling;
              }
              b = Sf(d, y.mode, b), b.return = y, y = b;
            }
            return f(y);
          case Ll:
            return D = d._init, d = D(d._payload), I(
              y,
              v,
              d,
              b
            );
        }
        if (Ul(d))
          return p(
            y,
            v,
            d,
            b
          );
        if (Dl(d)) {
          if (D = Dl(d), typeof D != "function") throw Error(r(150));
          return d = D.call(d), q(
            y,
            v,
            d,
            b
          );
        }
        if (typeof d.then == "function")
          return I(
            y,
            v,
            Pe(d),
            b
          );
        if (d.$$typeof === Ml)
          return I(
            y,
            v,
            Ze(y, d),
            b
          );
        ln(y, d);
      }
      return typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint" ? (d = "" + d, v !== null && v.tag === 6 ? (u(y, v.sibling), b = e(v, d), b.return = y, y = b) : (u(y, v), b = rf(d, y.mode, b), b.return = y, y = b), f(y)) : u(y, v);
    }
    return function(y, v, d, b) {
      try {
        wa = 0;
        var D = I(
          y,
          v,
          d,
          b
        );
        return aa = null, D;
      } catch (U) {
        if (U === Qa || U === Ce) throw U;
        var x = $l(29, U, null, y.mode);
        return x.lanes = b, x.return = y, x;
      } finally {
      }
    };
  }
  var ea = ns(!0), fs = ns(!1), ct = E(null), gt = null;
  function Wt(l) {
    var t = l.alternate;
    O(gl, gl.current & 1), O(ct, l), gt === null && (t === null || Pu.current !== null || t.memoizedState !== null) && (gt = l);
  }
  function cs(l) {
    if (l.tag === 22) {
      if (O(gl, gl.current), O(ct, l), gt === null) {
        var t = l.alternate;
        t !== null && t.memoizedState !== null && (gt = l);
      }
    } else $t();
  }
  function $t() {
    O(gl, gl.current), O(ct, ct.current);
  }
  function qt(l) {
    M(ct), gt === l && (gt = null), M(gl);
  }
  var gl = E(0);
  function tn(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var u = t.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || u.data === "$?" || xc(u)))
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  function kf(l, t, u, a) {
    t = l.memoizedState, u = u(a, t), u = u == null ? t : R({}, t, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var Ff = {
    enqueueSetState: function(l, t, u) {
      l = l._reactInternals;
      var a = Pl(), e = Kt(a);
      e.payload = t, u != null && (e.callback = u), t = Jt(l, e, a), t !== null && (lt(t, l, a), Za(t, l, a));
    },
    enqueueReplaceState: function(l, t, u) {
      l = l._reactInternals;
      var a = Pl(), e = Kt(a);
      e.tag = 1, e.payload = t, u != null && (e.callback = u), t = Jt(l, e, a), t !== null && (lt(t, l, a), Za(t, l, a));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var u = Pl(), a = Kt(u);
      a.tag = 2, t != null && (a.callback = t), t = Jt(l, a, u), t !== null && (lt(t, l, u), Za(t, l, u));
    }
  };
  function is(l, t, u, a, e, n, f) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, n, f) : t.prototype && t.prototype.isPureReactComponent ? !Ha(u, a) || !Ha(e, n) : !0;
  }
  function ss(l, t, u, a) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(u, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(u, a), t.state !== l && Ff.enqueueReplaceState(t, t.state, null);
  }
  function Uu(l, t) {
    var u = t;
    if ("ref" in t) {
      u = {};
      for (var a in t)
        a !== "ref" && (u[a] = t[a]);
    }
    if (l = l.defaultProps) {
      u === t && (u = R({}, u));
      for (var e in l)
        u[e] === void 0 && (u[e] = l[e]);
    }
    return u;
  }
  var un = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  };
  function vs(l) {
    un(l);
  }
  function ys(l) {
    console.error(l);
  }
  function ds(l) {
    un(l);
  }
  function an(l, t) {
    try {
      var u = l.onUncaughtError;
      u(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function hs(l, t, u) {
    try {
      var a = l.onCaughtError;
      a(u.value, {
        componentStack: u.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function If(l, t, u) {
    return u = Kt(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      an(l, t);
    }, u;
  }
  function os(l) {
    return l = Kt(l), l.tag = 3, l;
  }
  function ms(l, t, u, a) {
    var e = u.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = a.value;
      l.payload = function() {
        return e(n);
      }, l.callback = function() {
        hs(t, u, a);
      };
    }
    var f = u.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (l.callback = function() {
      hs(t, u, a), typeof e != "function" && (tu === null ? tu = /* @__PURE__ */ new Set([this]) : tu.add(this));
      var c = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function Nd(l, t, u, a, e) {
    if (u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = u.alternate, t !== null && pa(
        t,
        u,
        e,
        !0
      ), u = ct.current, u !== null) {
        switch (u.tag) {
          case 13:
            return gt === null ? Ac() : u.alternate === null && yl === 0 && (yl = 3), u.flags &= -257, u.flags |= 65536, u.lanes = e, a === Df ? u.flags |= 16384 : (t = u.updateQueue, t === null ? u.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Oc(l, a, e)), !1;
          case 22:
            return u.flags |= 65536, a === Df ? u.flags |= 16384 : (t = u.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, u.updateQueue = t) : (u = t.retryQueue, u === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : u.add(a)), Oc(l, a, e)), !1;
        }
        throw Error(r(435, u.tag));
      }
      return Oc(l, a, e), Ac(), !1;
    }
    if (w)
      return t = ct.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = e, a !== Tf && (l = Error(r(422), { cause: a }), Ba(at(l, u)))) : (a !== Tf && (t = Error(r(423), {
        cause: a
      }), Ba(
        at(t, u)
      )), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, a = at(a, u), e = If(
        l.stateNode,
        a,
        e
      ), Hf(l, e), yl !== 4 && (yl = 2)), !1;
    var n = Error(r(520), { cause: a });
    if (n = at(n, u), te === null ? te = [n] : te.push(n), yl !== 4 && (yl = 2), t === null) return !0;
    a = at(a, u), u = t;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = e & -e, u.lanes |= l, l = If(u.stateNode, a, l), Hf(u, l), !1;
        case 1:
          if (t = u.type, n = u.stateNode, (u.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (tu === null || !tu.has(n))))
            return u.flags |= 65536, e &= -e, u.lanes |= e, e = os(e), ms(
              e,
              l,
              u,
              a
            ), Hf(u, e), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var rs = Error(r(461)), Tl = !1;
  function zl(l, t, u, a) {
    t.child = l === null ? fs(t, null, u, a) : ea(
      t,
      l.child,
      u,
      a
    );
  }
  function Ss(l, t, u, a, e) {
    u = u.render;
    var n = t.ref;
    if ("ref" in a) {
      var f = {};
      for (var c in a)
        c !== "ref" && (f[c] = a[c]);
    } else f = a;
    return _u(t), a = pf(
      l,
      t,
      u,
      f,
      n,
      e
    ), c = Gf(), l !== null && !Tl ? (Xf(l, t, e), Yt(l, t, e)) : (w && c && gf(t), t.flags |= 1, zl(l, t, a, e), t.child);
  }
  function gs(l, t, u, a, e) {
    if (l === null) {
      var n = u.type;
      return typeof n == "function" && !mf(n) && n.defaultProps === void 0 && u.compare === null ? (t.tag = 15, t.type = n, bs(
        l,
        t,
        n,
        a,
        e
      )) : (l = Ge(
        u.type,
        null,
        a,
        t,
        t.mode,
        e
      ), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !fc(l, e)) {
      var f = n.memoizedProps;
      if (u = u.compare, u = u !== null ? u : Ha, u(f, a) && l.ref === t.ref)
        return Yt(l, t, e);
    }
    return t.flags |= 1, l = Mt(n, a), l.ref = t.ref, l.return = t, t.child = l;
  }
  function bs(l, t, u, a, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Ha(n, a) && l.ref === t.ref)
        if (Tl = !1, t.pendingProps = a = n, fc(l, e))
          (l.flags & 131072) !== 0 && (Tl = !0);
        else
          return t.lanes = l.lanes, Yt(l, t, e);
    }
    return Pf(
      l,
      t,
      u,
      a,
      e
    );
  }
  function Ts(l, t, u) {
    var a = t.pendingProps, e = a.children, n = l !== null ? l.memoizedState : null;
    if (a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (a = n !== null ? n.baseLanes | u : u, l !== null) {
          for (e = t.child = l.child, n = 0; e !== null; )
            n = n | e.lanes | e.childLanes, e = e.sibling;
          t.childLanes = n & ~a;
        } else t.childLanes = 0, t.child = null;
        return Es(
          l,
          t,
          a,
          u
        );
      }
      if ((u & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && je(
          t,
          n !== null ? n.cachePool : null
        ), n !== null ? b0(t, n) : qf(), cs(t);
      else
        return t.lanes = t.childLanes = 536870912, Es(
          l,
          t,
          n !== null ? n.baseLanes | u : u,
          u
        );
    } else
      n !== null ? (je(t, n.cachePool), b0(t, n), $t(), t.memoizedState = null) : (l !== null && je(t, null), qf(), $t());
    return zl(l, t, e, u), t.child;
  }
  function Es(l, t, u, a) {
    var e = Mf();
    return e = e === null ? null : { parent: Sl._currentValue, pool: e }, t.memoizedState = {
      baseLanes: u,
      cachePool: e
    }, l !== null && je(t, null), qf(), cs(t), l !== null && pa(l, t, a, !0), null;
  }
  function en(l, t) {
    var u = t.ref;
    if (u === null)
      l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(r(284));
      (l === null || l.ref !== u) && (t.flags |= 4194816);
    }
  }
  function Pf(l, t, u, a, e) {
    return _u(t), u = pf(
      l,
      t,
      u,
      a,
      void 0,
      e
    ), a = Gf(), l !== null && !Tl ? (Xf(l, t, e), Yt(l, t, e)) : (w && a && gf(t), t.flags |= 1, zl(l, t, u, e), t.child);
  }
  function As(l, t, u, a, e, n) {
    return _u(t), t.updateQueue = null, u = E0(
      t,
      a,
      u,
      e
    ), T0(l), a = Gf(), l !== null && !Tl ? (Xf(l, t, n), Yt(l, t, n)) : (w && a && gf(t), t.flags |= 1, zl(l, t, u, n), t.child);
  }
  function zs(l, t, u, a, e) {
    if (_u(t), t.stateNode === null) {
      var n = Wu, f = u.contextType;
      typeof f == "object" && f !== null && (n = Hl(f)), n = new u(a, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = Ff, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = a, n.state = t.memoizedState, n.refs = {}, Uf(t), f = u.contextType, n.context = typeof f == "object" && f !== null ? Hl(f) : Wu, n.state = t.memoizedState, f = u.getDerivedStateFromProps, typeof f == "function" && (kf(
        t,
        u,
        f,
        a
      ), n.state = t.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (f = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), f !== n.state && Ff.enqueueReplaceState(n, n.state, null), Ca(t, a, n, e), ja(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps, i = Uu(u, c);
      n.props = i;
      var h = n.context, S = u.contextType;
      f = Wu, typeof S == "object" && S !== null && (f = Hl(S));
      var T = u.getDerivedStateFromProps;
      S = typeof T == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, S || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || h !== f) && ss(
        t,
        n,
        a,
        f
      ), Lt = !1;
      var o = t.memoizedState;
      n.state = o, Ca(t, a, n, e), ja(), h = t.memoizedState, c || o !== h || Lt ? (typeof T == "function" && (kf(
        t,
        u,
        T,
        a
      ), h = t.memoizedState), (i = Lt || is(
        t,
        u,
        i,
        a,
        o,
        h,
        f
      )) ? (S || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = h), n.props = a, n.state = h, n.context = f, a = i) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      n = t.stateNode, Rf(l, t), f = t.memoizedProps, S = Uu(u, f), n.props = S, T = t.pendingProps, o = n.context, h = u.contextType, i = Wu, typeof h == "object" && h !== null && (i = Hl(h)), c = u.getDerivedStateFromProps, (h = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== T || o !== i) && ss(
        t,
        n,
        a,
        i
      ), Lt = !1, o = t.memoizedState, n.state = o, Ca(t, a, n, e), ja();
      var m = t.memoizedState;
      f !== T || o !== m || Lt || l !== null && l.dependencies !== null && xe(l.dependencies) ? (typeof c == "function" && (kf(
        t,
        u,
        c,
        a
      ), m = t.memoizedState), (S = Lt || is(
        t,
        u,
        S,
        a,
        o,
        m,
        i
      ) || l !== null && l.dependencies !== null && xe(l.dependencies)) ? (h || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, m, i), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        a,
        m,
        i
      )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && o === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && o === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = m), n.props = a, n.state = m, n.context = i, a = S) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && o === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && o === l.memoizedState || (t.flags |= 1024), a = !1);
    }
    return n = a, en(l, t), a = (t.flags & 128) !== 0, n || a ? (n = t.stateNode, u = a && typeof u.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && a ? (t.child = ea(
      t,
      l.child,
      null,
      e
    ), t.child = ea(
      t,
      null,
      u,
      e
    )) : zl(l, t, u, e), t.memoizedState = n.state, l = t.child) : l = Yt(
      l,
      t,
      e
    ), l;
  }
  function Os(l, t, u, a) {
    return Ya(), t.flags |= 256, zl(l, t, u, a), t.child;
  }
  var lc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function tc(l) {
    return { baseLanes: l, cachePool: y0() };
  }
  function uc(l, t, u) {
    return l = l !== null ? l.childLanes & ~u : 0, t && (l |= it), l;
  }
  function _s(l, t, u) {
    var a = t.pendingProps, e = !1, n = (t.flags & 128) !== 0, f;
    if ((f = n) || (f = l !== null && l.memoizedState === null ? !1 : (gl.current & 2) !== 0), f && (e = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (w) {
        if (e ? Wt(t) : $t(), w) {
          var c = vl, i;
          if (i = c) {
            l: {
              for (i = c, c = St; i.nodeType !== 8; ) {
                if (!c) {
                  c = null;
                  break l;
                }
                if (i = ot(
                  i.nextSibling
                ), i === null) {
                  c = null;
                  break l;
                }
              }
              c = i;
            }
            c !== null ? (t.memoizedState = {
              dehydrated: c,
              treeContext: Tu !== null ? { id: Dt, overflow: Ut } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, i = $l(
              18,
              null,
              null,
              0
            ), i.stateNode = c, i.return = t, t.child = i, pl = t, vl = null, i = !0) : i = !1;
          }
          i || zu(t);
        }
        if (c = t.memoizedState, c !== null && (c = c.dehydrated, c !== null))
          return xc(c) ? t.lanes = 32 : t.lanes = 536870912, null;
        qt(t);
      }
      return c = a.children, a = a.fallback, e ? ($t(), e = t.mode, c = nn(
        { mode: "hidden", children: c },
        e
      ), a = bu(
        a,
        e,
        u,
        null
      ), c.return = t, a.return = t, c.sibling = a, t.child = c, e = t.child, e.memoizedState = tc(u), e.childLanes = uc(
        l,
        f,
        u
      ), t.memoizedState = lc, a) : (Wt(t), ac(t, c));
    }
    if (i = l.memoizedState, i !== null && (c = i.dehydrated, c !== null)) {
      if (n)
        t.flags & 256 ? (Wt(t), t.flags &= -257, t = ec(
          l,
          t,
          u
        )) : t.memoizedState !== null ? ($t(), t.child = l.child, t.flags |= 128, t = null) : ($t(), e = a.fallback, c = t.mode, a = nn(
          { mode: "visible", children: a.children },
          c
        ), e = bu(
          e,
          c,
          u,
          null
        ), e.flags |= 2, a.return = t, e.return = t, a.sibling = e, t.child = a, ea(
          t,
          l.child,
          null,
          u
        ), a = t.child, a.memoizedState = tc(u), a.childLanes = uc(
          l,
          f,
          u
        ), t.memoizedState = lc, t = e);
      else if (Wt(t), xc(c)) {
        if (f = c.nextSibling && c.nextSibling.dataset, f) var h = f.dgst;
        f = h, a = Error(r(419)), a.stack = "", a.digest = f, Ba({ value: a, source: null, stack: null }), t = ec(
          l,
          t,
          u
        );
      } else if (Tl || pa(l, t, u, !1), f = (u & l.childLanes) !== 0, Tl || f) {
        if (f = el, f !== null && (a = u & -u, a = (a & 42) !== 0 ? 1 : xn(a), a = (a & (f.suspendedLanes | u)) !== 0 ? 0 : a, a !== 0 && a !== i.retryLane))
          throw i.retryLane = a, wu(l, a), lt(f, l, a), rs;
        c.data === "$?" || Ac(), t = ec(
          l,
          t,
          u
        );
      } else
        c.data === "$?" ? (t.flags |= 192, t.child = l.child, t = null) : (l = i.treeContext, vl = ot(
          c.nextSibling
        ), pl = t, w = !0, Au = null, St = !1, l !== null && (nt[ft++] = Dt, nt[ft++] = Ut, nt[ft++] = Tu, Dt = l.id, Ut = l.overflow, Tu = t), t = ac(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return e ? ($t(), e = a.fallback, c = t.mode, i = l.child, h = i.sibling, a = Mt(i, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = i.subtreeFlags & 65011712, h !== null ? e = Mt(h, e) : (e = bu(
      e,
      c,
      u,
      null
    ), e.flags |= 2), e.return = t, a.return = t, a.sibling = e, t.child = a, a = e, e = t.child, c = l.child.memoizedState, c === null ? c = tc(u) : (i = c.cachePool, i !== null ? (h = Sl._currentValue, i = i.parent !== h ? { parent: h, pool: h } : i) : i = y0(), c = {
      baseLanes: c.baseLanes | u,
      cachePool: i
    }), e.memoizedState = c, e.childLanes = uc(
      l,
      f,
      u
    ), t.memoizedState = lc, a) : (Wt(t), u = l.child, l = u.sibling, u = Mt(u, {
      mode: "visible",
      children: a.children
    }), u.return = t, u.sibling = null, l !== null && (f = t.deletions, f === null ? (t.deletions = [l], t.flags |= 16) : f.push(l)), t.child = u, t.memoizedState = null, u);
  }
  function ac(l, t) {
    return t = nn(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function nn(l, t) {
    return l = $l(22, l, null, t), l.lanes = 0, l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, l;
  }
  function ec(l, t, u) {
    return ea(t, l.child, null, u), l = ac(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function Ms(l, t, u) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), Af(l.return, t, u);
  }
  function nc(l, t, u, a, e) {
    var n = l.memoizedState;
    n === null ? l.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: u,
      tailMode: e
    } : (n.isBackwards = t, n.rendering = null, n.renderingStartTime = 0, n.last = a, n.tail = u, n.tailMode = e);
  }
  function Ds(l, t, u) {
    var a = t.pendingProps, e = a.revealOrder, n = a.tail;
    if (zl(l, t, a.children, u), a = gl.current, (a & 2) !== 0)
      a = a & 1 | 2, t.flags |= 128;
    else {
      if (l !== null && (l.flags & 128) !== 0)
        l: for (l = t.child; l !== null; ) {
          if (l.tag === 13)
            l.memoizedState !== null && Ms(l, u, t);
          else if (l.tag === 19)
            Ms(l, u, t);
          else if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
          if (l === t) break l;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === t)
              break l;
            l = l.return;
          }
          l.sibling.return = l.return, l = l.sibling;
        }
      a &= 1;
    }
    switch (O(gl, a), e) {
      case "forwards":
        for (u = t.child, e = null; u !== null; )
          l = u.alternate, l !== null && tn(l) === null && (e = u), u = u.sibling;
        u = e, u === null ? (e = t.child, t.child = null) : (e = u.sibling, u.sibling = null), nc(
          t,
          !1,
          e,
          u,
          n
        );
        break;
      case "backwards":
        for (u = null, e = t.child, t.child = null; e !== null; ) {
          if (l = e.alternate, l !== null && tn(l) === null) {
            t.child = e;
            break;
          }
          l = e.sibling, e.sibling = u, u = e, e = l;
        }
        nc(
          t,
          !0,
          u,
          null,
          n
        );
        break;
      case "together":
        nc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Yt(l, t, u) {
    if (l !== null && (t.dependencies = l.dependencies), lu |= t.lanes, (u & t.childLanes) === 0)
      if (l !== null) {
        if (pa(
          l,
          t,
          u,
          !1
        ), (u & t.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && t.child !== l.child)
      throw Error(r(153));
    if (t.child !== null) {
      for (l = t.child, u = Mt(l, l.pendingProps), t.child = u, u.return = t; l.sibling !== null; )
        l = l.sibling, u = u.sibling = Mt(l, l.pendingProps), u.return = t;
      u.sibling = null;
    }
    return t.child;
  }
  function fc(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && xe(l)));
  }
  function qd(l, t, u) {
    switch (t.tag) {
      case 3:
        fl(t, t.stateNode.containerInfo), Vt(t, Sl, l.memoizedState.cache), Ya();
        break;
      case 27:
      case 5:
        Bn(t);
        break;
      case 4:
        fl(t, t.stateNode.containerInfo);
        break;
      case 10:
        Vt(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (Wt(t), t.flags |= 128, null) : (u & t.child.childLanes) !== 0 ? _s(l, t, u) : (Wt(t), l = Yt(
            l,
            t,
            u
          ), l !== null ? l.sibling : null);
        Wt(t);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (a = (u & t.childLanes) !== 0, a || (pa(
          l,
          t,
          u,
          !1
        ), a = (u & t.childLanes) !== 0), e) {
          if (a)
            return Ds(
              l,
              t,
              u
            );
          t.flags |= 128;
        }
        if (e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), O(gl, gl.current), a) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Ts(l, t, u);
      case 24:
        Vt(t, Sl, l.memoizedState.cache);
    }
    return Yt(l, t, u);
  }
  function Us(l, t, u) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        Tl = !0;
      else {
        if (!fc(l, u) && (t.flags & 128) === 0)
          return Tl = !1, qd(
            l,
            t,
            u
          );
        Tl = (l.flags & 131072) !== 0;
      }
    else
      Tl = !1, w && (t.flags & 1048576) !== 0 && e0(t, Qe, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          l = t.pendingProps;
          var a = t.elementType, e = a._init;
          if (a = e(a._payload), t.type = a, typeof a == "function")
            mf(a) ? (l = Uu(a, l), t.tag = 1, t = zs(
              null,
              t,
              a,
              l,
              u
            )) : (t.tag = 0, t = Pf(
              null,
              t,
              a,
              l,
              u
            ));
          else {
            if (a != null) {
              if (e = a.$$typeof, e === yt) {
                t.tag = 11, t = Ss(
                  null,
                  t,
                  a,
                  l,
                  u
                );
                break l;
              } else if (e === Vl) {
                t.tag = 14, t = gs(
                  null,
                  t,
                  a,
                  l,
                  u
                );
                break l;
              }
            }
            throw t = hu(a) || a, Error(r(306, t, ""));
          }
        }
        return t;
      case 0:
        return Pf(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 1:
        return a = t.type, e = Uu(
          a,
          t.pendingProps
        ), zs(
          l,
          t,
          a,
          e,
          u
        );
      case 3:
        l: {
          if (fl(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(r(387));
          a = t.pendingProps;
          var n = t.memoizedState;
          e = n.element, Rf(l, t), Ca(t, a, null, u);
          var f = t.memoizedState;
          if (a = f.cache, Vt(t, Sl, a), a !== n.cache && zf(
            t,
            [Sl],
            u,
            !0
          ), ja(), a = f.element, n.isDehydrated)
            if (n = {
              element: a,
              isDehydrated: !1,
              cache: f.cache
            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
              t = Os(
                l,
                t,
                a,
                u
              );
              break l;
            } else if (a !== e) {
              e = at(
                Error(r(424)),
                t
              ), Ba(e), t = Os(
                l,
                t,
                a,
                u
              );
              break l;
            } else {
              switch (l = t.stateNode.containerInfo, l.nodeType) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (vl = ot(l.firstChild), pl = t, w = !0, Au = null, St = !0, u = fs(
                t,
                null,
                a,
                u
              ), t.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
            }
          else {
            if (Ya(), a === e) {
              t = Yt(
                l,
                t,
                u
              );
              break l;
            }
            zl(
              l,
              t,
              a,
              u
            );
          }
          t = t.child;
        }
        return t;
      case 26:
        return en(l, t), l === null ? (u = qv(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = u : w || (u = t.type, l = t.pendingProps, a = Tn(
          G.current
        ).createElement(u), a[Rl] = t, a[Xl] = l, _l(a, u, l), bl(a), t.stateNode = a) : t.memoizedState = qv(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Bn(t), l === null && w && (a = t.stateNode = Rv(
          t.type,
          t.pendingProps,
          G.current
        ), pl = t, St = !0, e = vl, eu(t.type) ? (Zc = e, vl = ot(
          a.firstChild
        )) : vl = e), zl(
          l,
          t,
          t.pendingProps.children,
          u
        ), en(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && w && ((e = a = vl) && (a = f1(
          a,
          t.type,
          t.pendingProps,
          St
        ), a !== null ? (t.stateNode = a, pl = t, vl = ot(
          a.firstChild
        ), St = !1, e = !0) : e = !1), e || zu(t)), Bn(t), e = t.type, n = t.pendingProps, f = l !== null ? l.memoizedProps : null, a = n.children, Gc(e, n) ? a = null : f !== null && Gc(e, f) && (t.flags |= 32), t.memoizedState !== null && (e = pf(
          l,
          t,
          Od,
          null,
          null,
          u
        ), ve._currentValue = e), en(l, t), zl(l, t, a, u), t.child;
      case 6:
        return l === null && w && ((l = u = vl) && (u = c1(
          u,
          t.pendingProps,
          St
        ), u !== null ? (t.stateNode = u, pl = t, vl = null, l = !0) : l = !1), l || zu(t)), null;
      case 13:
        return _s(l, t, u);
      case 4:
        return fl(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, l === null ? t.child = ea(
          t,
          null,
          a,
          u
        ) : zl(
          l,
          t,
          a,
          u
        ), t.child;
      case 11:
        return Ss(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 7:
        return zl(
          l,
          t,
          t.pendingProps,
          u
        ), t.child;
      case 8:
        return zl(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 12:
        return zl(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 10:
        return a = t.pendingProps, Vt(t, t.type, a.value), zl(
          l,
          t,
          a.children,
          u
        ), t.child;
      case 9:
        return e = t.type._context, a = t.pendingProps.children, _u(t), e = Hl(e), a = a(e), t.flags |= 1, zl(l, t, a, u), t.child;
      case 14:
        return gs(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 15:
        return bs(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 19:
        return Ds(l, t, u);
      case 31:
        return a = t.pendingProps, u = t.mode, a = {
          mode: a.mode,
          children: a.children
        }, l === null ? (u = nn(
          a,
          u
        ), u.ref = t.ref, t.child = u, u.return = t, t = u) : (u = Mt(l.child, a), u.ref = t.ref, t.child = u, u.return = t, t = u), t;
      case 22:
        return Ts(l, t, u);
      case 24:
        return _u(t), a = Hl(Sl), l === null ? (e = Mf(), e === null && (e = el, n = Of(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= u), e = n), t.memoizedState = {
          parent: a,
          cache: e
        }, Uf(t), Vt(t, Sl, e)) : ((l.lanes & u) !== 0 && (Rf(l, t), Ca(t, null, null, u), ja()), e = l.memoizedState, n = t.memoizedState, e.parent !== a ? (e = { parent: a, cache: a }, t.memoizedState = e, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = e), Vt(t, Sl, a)) : (a = n.cache, Vt(t, Sl, a), a !== e.cache && zf(
          t,
          [Sl],
          u,
          !0
        ))), zl(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(r(156, t.tag));
  }
  function Bt(l) {
    l.flags |= 4;
  }
  function Rs(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !Xv(t)) {
      if (t = ct.current, t !== null && ((C & 4194048) === C ? gt !== null : (C & 62914560) !== C && (C & 536870912) === 0 || t !== gt))
        throw xa = Df, d0;
      l.flags |= 8192;
    }
  }
  function fn(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? ci() : 536870912, l.lanes |= t, ia |= t);
  }
  function $a(l, t) {
    if (!w)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var u = null; t !== null; )
            t.alternate !== null && (u = t), t = t.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var a = null; u !== null; )
            u.alternate !== null && (a = u), u = u.sibling;
          a === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : a.sibling = null;
      }
  }
  function il(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, u = 0, a = 0;
    if (t)
      for (var e = l.child; e !== null; )
        u |= e.lanes | e.childLanes, a |= e.subtreeFlags & 65011712, a |= e.flags & 65011712, e.return = l, e = e.sibling;
    else
      for (e = l.child; e !== null; )
        u |= e.lanes | e.childLanes, a |= e.subtreeFlags, a |= e.flags, e.return = l, e = e.sibling;
    return l.subtreeFlags |= a, l.childLanes = u, t;
  }
  function Yd(l, t, u) {
    var a = t.pendingProps;
    switch (bf(t), t.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return il(t), null;
      case 1:
        return il(t), null;
      case 3:
        return u = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Ht(Sl), xt(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (qa(t) ? Bt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, c0())), il(t), null;
      case 26:
        return u = t.memoizedState, l === null ? (Bt(t), u !== null ? (il(t), Rs(t, u)) : (il(t), t.flags &= -16777217)) : u ? u !== l.memoizedState ? (Bt(t), il(t), Rs(t, u)) : (il(t), t.flags &= -16777217) : (l.memoizedProps !== a && Bt(t), il(t), t.flags &= -16777217), null;
      case 27:
        Se(t), u = G.current;
        var e = t.type;
        if (l !== null && t.stateNode != null)
          l.memoizedProps !== a && Bt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(r(166));
            return il(t), null;
          }
          l = N.current, qa(t) ? n0(t) : (l = Rv(e, a, u), t.stateNode = l, Bt(t));
        }
        return il(t), null;
      case 5:
        if (Se(t), u = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && Bt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(r(166));
            return il(t), null;
          }
          if (l = N.current, qa(t))
            n0(t);
          else {
            switch (e = Tn(
              G.current
            ), l) {
              case 1:
                l = e.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                l = e.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    l = e.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    l = e.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    l = e.createElement("div"), l.innerHTML = "<script><\/script>", l = l.removeChild(l.firstChild);
                    break;
                  case "select":
                    l = typeof a.is == "string" ? e.createElement("select", { is: a.is }) : e.createElement("select"), a.multiple ? l.multiple = !0 : a.size && (l.size = a.size);
                    break;
                  default:
                    l = typeof a.is == "string" ? e.createElement(u, { is: a.is }) : e.createElement(u);
                }
            }
            l[Rl] = t, l[Xl] = a;
            l: for (e = t.child; e !== null; ) {
              if (e.tag === 5 || e.tag === 6)
                l.appendChild(e.stateNode);
              else if (e.tag !== 4 && e.tag !== 27 && e.child !== null) {
                e.child.return = e, e = e.child;
                continue;
              }
              if (e === t) break l;
              for (; e.sibling === null; ) {
                if (e.return === null || e.return === t)
                  break l;
                e = e.return;
              }
              e.sibling.return = e.return, e = e.sibling;
            }
            t.stateNode = l;
            l: switch (_l(l, u, a), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!a.autoFocus;
                break l;
              case "img":
                l = !0;
                break l;
              default:
                l = !1;
            }
            l && Bt(t);
          }
        }
        return il(t), t.flags &= -16777217, null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== a && Bt(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(r(166));
          if (l = G.current, qa(t)) {
            if (l = t.stateNode, u = t.memoizedProps, a = null, e = pl, e !== null)
              switch (e.tag) {
                case 27:
                case 5:
                  a = e.memoizedProps;
              }
            l[Rl] = t, l = !!(l.nodeValue === u || a !== null && a.suppressHydrationWarning === !0 || Av(l.nodeValue, u)), l || zu(t);
          } else
            l = Tn(l).createTextNode(
              a
            ), l[Rl] = t, t.stateNode = l;
        }
        return il(t), null;
      case 13:
        if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (e = qa(t), a !== null && a.dehydrated !== null) {
            if (l === null) {
              if (!e) throw Error(r(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
              e[Rl] = t;
            } else
              Ya(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            il(t), e = !1;
          } else
            e = c0(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), e = !0;
          if (!e)
            return t.flags & 256 ? (qt(t), t) : (qt(t), null);
        }
        if (qt(t), (t.flags & 128) !== 0)
          return t.lanes = u, t;
        if (u = a !== null, l = l !== null && l.memoizedState !== null, u) {
          a = t.child, e = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (e = a.alternate.memoizedState.cachePool.pool);
          var n = null;
          a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== e && (a.flags |= 2048);
        }
        return u !== l && u && (t.child.flags |= 8192), fn(t, t.updateQueue), il(t), null;
      case 4:
        return xt(), l === null && Nc(t.stateNode.containerInfo), il(t), null;
      case 10:
        return Ht(t.type), il(t), null;
      case 19:
        if (M(gl), e = t.memoizedState, e === null) return il(t), null;
        if (a = (t.flags & 128) !== 0, n = e.rendering, n === null)
          if (a) $a(e, !1);
          else {
            if (yl !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = tn(l), n !== null) {
                  for (t.flags |= 128, $a(e, !1), l = n.updateQueue, t.updateQueue = l, fn(t, l), t.subtreeFlags = 0, l = u, u = t.child; u !== null; )
                    a0(u, l), u = u.sibling;
                  return O(
                    gl,
                    gl.current & 1 | 2
                  ), t.child;
                }
                l = l.sibling;
              }
            e.tail !== null && rt() > vn && (t.flags |= 128, a = !0, $a(e, !1), t.lanes = 4194304);
          }
        else {
          if (!a)
            if (l = tn(n), l !== null) {
              if (t.flags |= 128, a = !0, l = l.updateQueue, t.updateQueue = l, fn(t, l), $a(e, !0), e.tail === null && e.tailMode === "hidden" && !n.alternate && !w)
                return il(t), null;
            } else
              2 * rt() - e.renderingStartTime > vn && u !== 536870912 && (t.flags |= 128, a = !0, $a(e, !1), t.lanes = 4194304);
          e.isBackwards ? (n.sibling = t.child, t.child = n) : (l = e.last, l !== null ? l.sibling = n : t.child = n, e.last = n);
        }
        return e.tail !== null ? (t = e.tail, e.rendering = t, e.tail = t.sibling, e.renderingStartTime = rt(), t.sibling = null, l = gl.current, O(gl, a ? l & 1 | 2 : l & 1), t) : (il(t), null);
      case 22:
      case 23:
        return qt(t), Yf(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (u & 536870912) !== 0 && (t.flags & 128) === 0 && (il(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : il(t), u = t.updateQueue, u !== null && fn(t, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== u && (t.flags |= 2048), l !== null && M(Mu), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), Ht(Sl), il(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function Bd(l, t) {
    switch (bf(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return Ht(Sl), xt(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Se(t), null;
      case 13:
        if (qt(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(r(340));
          Ya();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return M(gl), null;
      case 4:
        return xt(), null;
      case 10:
        return Ht(t.type), null;
      case 22:
      case 23:
        return qt(t), Yf(), l !== null && M(Mu), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return Ht(Sl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Hs(l, t) {
    switch (bf(t), t.tag) {
      case 3:
        Ht(Sl), xt();
        break;
      case 26:
      case 27:
      case 5:
        Se(t);
        break;
      case 4:
        xt();
        break;
      case 13:
        qt(t);
        break;
      case 19:
        M(gl);
        break;
      case 10:
        Ht(t.type);
        break;
      case 22:
      case 23:
        qt(t), Yf(), l !== null && M(Mu);
        break;
      case 24:
        Ht(Sl);
    }
  }
  function ka(l, t) {
    try {
      var u = t.updateQueue, a = u !== null ? u.lastEffect : null;
      if (a !== null) {
        var e = a.next;
        u = e;
        do {
          if ((u.tag & l) === l) {
            a = void 0;
            var n = u.create, f = u.inst;
            a = n(), f.destroy = a;
          }
          u = u.next;
        } while (u !== e);
      }
    } catch (c) {
      tl(t, t.return, c);
    }
  }
  function kt(l, t, u) {
    try {
      var a = t.updateQueue, e = a !== null ? a.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        a = n;
        do {
          if ((a.tag & l) === l) {
            var f = a.inst, c = f.destroy;
            if (c !== void 0) {
              f.destroy = void 0, e = t;
              var i = u, h = c;
              try {
                h();
              } catch (S) {
                tl(
                  e,
                  i,
                  S
                );
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (S) {
      tl(t, t.return, S);
    }
  }
  function Ns(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var u = l.stateNode;
      try {
        g0(t, u);
      } catch (a) {
        tl(l, l.return, a);
      }
    }
  }
  function qs(l, t, u) {
    u.props = Uu(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (a) {
      tl(l, t, a);
    }
  }
  function Fa(l, t) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var a = l.stateNode;
            break;
          case 30:
            a = l.stateNode;
            break;
          default:
            a = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(a) : u.current = a;
      }
    } catch (e) {
      tl(l, t, e);
    }
  }
  function bt(l, t) {
    var u = l.ref, a = l.refCleanup;
    if (u !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (e) {
          tl(l, t, e);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (e) {
          tl(l, t, e);
        }
      else u.current = null;
  }
  function Ys(l) {
    var t = l.type, u = l.memoizedProps, a = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && a.focus();
          break l;
        case "img":
          u.src ? a.src = u.src : u.srcSet && (a.srcset = u.srcSet);
      }
    } catch (e) {
      tl(l, l.return, e);
    }
  }
  function cc(l, t, u) {
    try {
      var a = l.stateNode;
      t1(a, l.type, u, t), a[Xl] = t;
    } catch (e) {
      tl(l, l.return, e);
    }
  }
  function Bs(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && eu(l.type) || l.tag === 4;
  }
  function ic(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Bs(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && eu(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function sc(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, t) : (t = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, t.appendChild(l), u = u._reactRootContainer, u != null || t.onclick !== null || (t.onclick = bn));
    else if (a !== 4 && (a === 27 && eu(l.type) && (u = l.stateNode, t = null), l = l.child, l !== null))
      for (sc(l, t, u), l = l.sibling; l !== null; )
        sc(l, t, u), l = l.sibling;
  }
  function cn(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? u.insertBefore(l, t) : u.appendChild(l);
    else if (a !== 4 && (a === 27 && eu(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (cn(l, t, u), l = l.sibling; l !== null; )
        cn(l, t, u), l = l.sibling;
  }
  function ps(l) {
    var t = l.stateNode, u = l.memoizedProps;
    try {
      for (var a = l.type, e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      _l(t, a, u), t[Rl] = l, t[Xl] = u;
    } catch (n) {
      tl(l, l.return, n);
    }
  }
  var pt = !1, hl = !1, vc = !1, Gs = typeof WeakSet == "function" ? WeakSet : Set, El = null;
  function pd(l, t) {
    if (l = l.containerInfo, Bc = Mn, l = wi(l), cf(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        l: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var a = u.getSelection && u.getSelection();
          if (a && a.rangeCount !== 0) {
            u = a.anchorNode;
            var e = a.anchorOffset, n = a.focusNode;
            a = a.focusOffset;
            try {
              u.nodeType, n.nodeType;
            } catch {
              u = null;
              break l;
            }
            var f = 0, c = -1, i = -1, h = 0, S = 0, T = l, o = null;
            t: for (; ; ) {
              for (var m; T !== u || e !== 0 && T.nodeType !== 3 || (c = f + e), T !== n || a !== 0 && T.nodeType !== 3 || (i = f + a), T.nodeType === 3 && (f += T.nodeValue.length), (m = T.firstChild) !== null; )
                o = T, T = m;
              for (; ; ) {
                if (T === l) break t;
                if (o === u && ++h === e && (c = f), o === n && ++S === a && (i = f), (m = T.nextSibling) !== null) break;
                T = o, o = T.parentNode;
              }
              T = m;
            }
            u = c === -1 || i === -1 ? null : { start: c, end: i };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (pc = { focusedElem: l, selectionRange: u }, Mn = !1, El = t; El !== null; )
      if (t = El, l = t.child, (t.subtreeFlags & 1024) !== 0 && l !== null)
        l.return = t, El = l;
      else
        for (; El !== null; ) {
          switch (t = El, n = t.alternate, l = t.flags, t.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                l = void 0, u = t, e = n.memoizedProps, n = n.memoizedState, a = u.stateNode;
                try {
                  var p = Uu(
                    u.type,
                    e,
                    u.elementType === u.type
                  );
                  l = a.getSnapshotBeforeUpdate(
                    p,
                    n
                  ), a.__reactInternalSnapshotBeforeUpdate = l;
                } catch (q) {
                  tl(
                    u,
                    u.return,
                    q
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = t.stateNode.containerInfo, u = l.nodeType, u === 9)
                  Qc(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Qc(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(r(163));
          }
          if (l = t.sibling, l !== null) {
            l.return = t.return, El = l;
            break;
          }
          El = t.return;
        }
  }
  function Xs(l, t, u) {
    var a = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        Ft(l, u), a & 4 && ka(5, u);
        break;
      case 1:
        if (Ft(l, u), a & 4)
          if (l = u.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (f) {
              tl(u, u.return, f);
            }
          else {
            var e = Uu(
              u.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              l.componentDidUpdate(
                e,
                t,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (f) {
              tl(
                u,
                u.return,
                f
              );
            }
          }
        a & 64 && Ns(u), a & 512 && Fa(u, u.return);
        break;
      case 3:
        if (Ft(l, u), a & 64 && (l = u.updateQueue, l !== null)) {
          if (t = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                t = u.child.stateNode;
                break;
              case 1:
                t = u.child.stateNode;
            }
          try {
            g0(l, t);
          } catch (f) {
            tl(u, u.return, f);
          }
        }
        break;
      case 27:
        t === null && a & 4 && ps(u);
      case 26:
      case 5:
        Ft(l, u), t === null && a & 4 && Ys(u), a & 512 && Fa(u, u.return);
        break;
      case 12:
        Ft(l, u);
        break;
      case 13:
        Ft(l, u), a & 4 && Zs(l, u), a & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = Ld.bind(
          null,
          u
        ), i1(l, u))));
        break;
      case 22:
        if (a = u.memoizedState !== null || pt, !a) {
          t = t !== null && t.memoizedState !== null || hl, e = pt;
          var n = hl;
          pt = a, (hl = t) && !n ? It(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : Ft(l, u), pt = e, hl = n;
        }
        break;
      case 30:
        break;
      default:
        Ft(l, u);
    }
  }
  function Qs(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, Qs(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && Cn(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var cl = null, Zl = !1;
  function Gt(l, t, u) {
    for (u = u.child; u !== null; )
      xs(l, t, u), u = u.sibling;
  }
  function xs(l, t, u) {
    if (Jl && typeof Jl.onCommitFiberUnmount == "function")
      try {
        Jl.onCommitFiberUnmount(ga, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        hl || bt(u, t), Gt(
          l,
          t,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        hl || bt(u, t);
        var a = cl, e = Zl;
        eu(u.type) && (cl = u.stateNode, Zl = !1), Gt(
          l,
          t,
          u
        ), fe(u.stateNode), cl = a, Zl = e;
        break;
      case 5:
        hl || bt(u, t);
      case 6:
        if (a = cl, e = Zl, cl = null, Gt(
          l,
          t,
          u
        ), cl = a, Zl = e, cl !== null)
          if (Zl)
            try {
              (cl.nodeType === 9 ? cl.body : cl.nodeName === "HTML" ? cl.ownerDocument.body : cl).removeChild(u.stateNode);
            } catch (n) {
              tl(
                u,
                t,
                n
              );
            }
          else
            try {
              cl.removeChild(u.stateNode);
            } catch (n) {
              tl(
                u,
                t,
                n
              );
            }
        break;
      case 18:
        cl !== null && (Zl ? (l = cl, Dv(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), oe(l)) : Dv(cl, u.stateNode));
        break;
      case 4:
        a = cl, e = Zl, cl = u.stateNode.containerInfo, Zl = !0, Gt(
          l,
          t,
          u
        ), cl = a, Zl = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        hl || kt(2, u, t), hl || kt(4, u, t), Gt(
          l,
          t,
          u
        );
        break;
      case 1:
        hl || (bt(u, t), a = u.stateNode, typeof a.componentWillUnmount == "function" && qs(
          u,
          t,
          a
        )), Gt(
          l,
          t,
          u
        );
        break;
      case 21:
        Gt(
          l,
          t,
          u
        );
        break;
      case 22:
        hl = (a = hl) || u.memoizedState !== null, Gt(
          l,
          t,
          u
        ), hl = a;
        break;
      default:
        Gt(
          l,
          t,
          u
        );
    }
  }
  function Zs(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        oe(l);
      } catch (u) {
        tl(t, t.return, u);
      }
  }
  function Gd(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new Gs()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new Gs()), t;
      default:
        throw Error(r(435, l.tag));
    }
  }
  function yc(l, t) {
    var u = Gd(l);
    t.forEach(function(a) {
      var e = Kd.bind(null, l, a);
      u.has(a) || (u.add(a), a.then(e, e));
    });
  }
  function kl(l, t) {
    var u = t.deletions;
    if (u !== null)
      for (var a = 0; a < u.length; a++) {
        var e = u[a], n = l, f = t, c = f;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (eu(c.type)) {
                cl = c.stateNode, Zl = !1;
                break l;
              }
              break;
            case 5:
              cl = c.stateNode, Zl = !1;
              break l;
            case 3:
            case 4:
              cl = c.stateNode.containerInfo, Zl = !0;
              break l;
          }
          c = c.return;
        }
        if (cl === null) throw Error(r(160));
        xs(n, f, e), cl = null, Zl = !1, n = e.alternate, n !== null && (n.return = null), e.return = null;
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; )
        js(t, l), t = t.sibling;
  }
  var ht = null;
  function js(l, t) {
    var u = l.alternate, a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        kl(t, l), Fl(l), a & 4 && (kt(3, l, l.return), ka(3, l), kt(5, l, l.return));
        break;
      case 1:
        kl(t, l), Fl(l), a & 512 && (hl || u === null || bt(u, u.return)), a & 64 && pt && (l = l.updateQueue, l !== null && (a = l.callbacks, a !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? a : u.concat(a))));
        break;
      case 26:
        var e = ht;
        if (kl(t, l), Fl(l), a & 512 && (hl || u === null || bt(u, u.return)), a & 4) {
          var n = u !== null ? u.memoizedState : null;
          if (a = l.memoizedState, u === null)
            if (a === null)
              if (l.stateNode === null) {
                l: {
                  a = l.type, u = l.memoizedProps, e = e.ownerDocument || e;
                  t: switch (a) {
                    case "title":
                      n = e.getElementsByTagName("title")[0], (!n || n[Ea] || n[Rl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = e.createElement(a), e.head.insertBefore(
                        n,
                        e.querySelector("head > title")
                      )), _l(n, a, u), n[Rl] = l, bl(n), a = n;
                      break l;
                    case "link":
                      var f = pv(
                        "link",
                        "href",
                        e
                      ).get(a + (u.href || ""));
                      if (f) {
                        for (var c = 0; c < f.length; c++)
                          if (n = f[c], n.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && n.getAttribute("rel") === (u.rel == null ? null : u.rel) && n.getAttribute("title") === (u.title == null ? null : u.title) && n.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            f.splice(c, 1);
                            break t;
                          }
                      }
                      n = e.createElement(a), _l(n, a, u), e.head.appendChild(n);
                      break;
                    case "meta":
                      if (f = pv(
                        "meta",
                        "content",
                        e
                      ).get(a + (u.content || ""))) {
                        for (c = 0; c < f.length; c++)
                          if (n = f[c], n.getAttribute("content") === (u.content == null ? null : "" + u.content) && n.getAttribute("name") === (u.name == null ? null : u.name) && n.getAttribute("property") === (u.property == null ? null : u.property) && n.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && n.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            f.splice(c, 1);
                            break t;
                          }
                      }
                      n = e.createElement(a), _l(n, a, u), e.head.appendChild(n);
                      break;
                    default:
                      throw Error(r(468, a));
                  }
                  n[Rl] = l, bl(n), a = n;
                }
                l.stateNode = a;
              } else
                Gv(
                  e,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = Bv(
                e,
                a,
                l.memoizedProps
              );
          else
            n !== a ? (n === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : n.count--, a === null ? Gv(
              e,
              l.type,
              l.stateNode
            ) : Bv(
              e,
              a,
              l.memoizedProps
            )) : a === null && l.stateNode !== null && cc(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        kl(t, l), Fl(l), a & 512 && (hl || u === null || bt(u, u.return)), u !== null && a & 4 && cc(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (kl(t, l), Fl(l), a & 512 && (hl || u === null || bt(u, u.return)), l.flags & 32) {
          e = l.stateNode;
          try {
            Zu(e, "");
          } catch (m) {
            tl(l, l.return, m);
          }
        }
        a & 4 && l.stateNode != null && (e = l.memoizedProps, cc(
          l,
          e,
          u !== null ? u.memoizedProps : e
        )), a & 1024 && (vc = !0);
        break;
      case 6:
        if (kl(t, l), Fl(l), a & 4) {
          if (l.stateNode === null)
            throw Error(r(162));
          a = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = a;
          } catch (m) {
            tl(l, l.return, m);
          }
        }
        break;
      case 3:
        if (zn = null, e = ht, ht = En(t.containerInfo), kl(t, l), ht = e, Fl(l), a & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            oe(t.containerInfo);
          } catch (m) {
            tl(l, l.return, m);
          }
        vc && (vc = !1, Cs(l));
        break;
      case 4:
        a = ht, ht = En(
          l.stateNode.containerInfo
        ), kl(t, l), Fl(l), ht = a;
        break;
      case 12:
        kl(t, l), Fl(l);
        break;
      case 13:
        kl(t, l), Fl(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (Sc = rt()), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, yc(l, a)));
        break;
      case 22:
        e = l.memoizedState !== null;
        var i = u !== null && u.memoizedState !== null, h = pt, S = hl;
        if (pt = h || e, hl = S || i, kl(t, l), hl = S, pt = h, Fl(l), a & 8192)
          l: for (t = l.stateNode, t._visibility = e ? t._visibility & -2 : t._visibility | 1, e && (u === null || i || pt || hl || Ru(l)), u = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (u === null) {
                i = u = t;
                try {
                  if (n = i.stateNode, e)
                    f = n.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    c = i.stateNode;
                    var T = i.memoizedProps.style, o = T != null && T.hasOwnProperty("display") ? T.display : null;
                    c.style.display = o == null || typeof o == "boolean" ? "" : ("" + o).trim();
                  }
                } catch (m) {
                  tl(i, i.return, m);
                }
              }
            } else if (t.tag === 6) {
              if (u === null) {
                i = t;
                try {
                  i.stateNode.nodeValue = e ? "" : i.memoizedProps;
                } catch (m) {
                  tl(i, i.return, m);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              u === t && (u = null), t = t.return;
            }
            u === t && (u = null), t.sibling.return = t.return, t = t.sibling;
          }
        a & 4 && (a = l.updateQueue, a !== null && (u = a.retryQueue, u !== null && (a.retryQueue = null, yc(l, u))));
        break;
      case 19:
        kl(t, l), Fl(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, yc(l, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        kl(t, l), Fl(l);
    }
  }
  function Fl(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var u, a = l.return; a !== null; ) {
          if (Bs(a)) {
            u = a;
            break;
          }
          a = a.return;
        }
        if (u == null) throw Error(r(160));
        switch (u.tag) {
          case 27:
            var e = u.stateNode, n = ic(l);
            cn(l, n, e);
            break;
          case 5:
            var f = u.stateNode;
            u.flags & 32 && (Zu(f, ""), u.flags &= -33);
            var c = ic(l);
            cn(l, c, f);
            break;
          case 3:
          case 4:
            var i = u.stateNode.containerInfo, h = ic(l);
            sc(
              l,
              h,
              i
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (S) {
        tl(l, l.return, S);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function Cs(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        Cs(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
      }
  }
  function Ft(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Xs(l, t.alternate, t), t = t.sibling;
  }
  function Ru(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          kt(4, t, t.return), Ru(t);
          break;
        case 1:
          bt(t, t.return);
          var u = t.stateNode;
          typeof u.componentWillUnmount == "function" && qs(
            t,
            t.return,
            u
          ), Ru(t);
          break;
        case 27:
          fe(t.stateNode);
        case 26:
        case 5:
          bt(t, t.return), Ru(t);
          break;
        case 22:
          t.memoizedState === null && Ru(t);
          break;
        case 30:
          Ru(t);
          break;
        default:
          Ru(t);
      }
      l = l.sibling;
    }
  }
  function It(l, t, u) {
    for (u = u && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, e = l, n = t, f = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          It(
            e,
            n,
            u
          ), ka(4, n);
          break;
        case 1:
          if (It(
            e,
            n,
            u
          ), a = n, e = a.stateNode, typeof e.componentDidMount == "function")
            try {
              e.componentDidMount();
            } catch (h) {
              tl(a, a.return, h);
            }
          if (a = n, e = a.updateQueue, e !== null) {
            var c = a.stateNode;
            try {
              var i = e.shared.hiddenCallbacks;
              if (i !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < i.length; e++)
                  S0(i[e], c);
            } catch (h) {
              tl(a, a.return, h);
            }
          }
          u && f & 64 && Ns(n), Fa(n, n.return);
          break;
        case 27:
          ps(n);
        case 26:
        case 5:
          It(
            e,
            n,
            u
          ), u && a === null && f & 4 && Ys(n), Fa(n, n.return);
          break;
        case 12:
          It(
            e,
            n,
            u
          );
          break;
        case 13:
          It(
            e,
            n,
            u
          ), u && f & 4 && Zs(e, n);
          break;
        case 22:
          n.memoizedState === null && It(
            e,
            n,
            u
          ), Fa(n, n.return);
          break;
        case 30:
          break;
        default:
          It(
            e,
            n,
            u
          );
      }
      t = t.sibling;
    }
  }
  function dc(l, t) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && Ga(u));
  }
  function hc(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Ga(l));
  }
  function Tt(l, t, u, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Vs(
          l,
          t,
          u,
          a
        ), t = t.sibling;
  }
  function Vs(l, t, u, a) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Tt(
          l,
          t,
          u,
          a
        ), e & 2048 && ka(9, t);
        break;
      case 1:
        Tt(
          l,
          t,
          u,
          a
        );
        break;
      case 3:
        Tt(
          l,
          t,
          u,
          a
        ), e & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Ga(l)));
        break;
      case 12:
        if (e & 2048) {
          Tt(
            l,
            t,
            u,
            a
          ), l = t.stateNode;
          try {
            var n = t.memoizedProps, f = n.id, c = n.onPostCommit;
            typeof c == "function" && c(
              f,
              t.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (i) {
            tl(t, t.return, i);
          }
        } else
          Tt(
            l,
            t,
            u,
            a
          );
        break;
      case 13:
        Tt(
          l,
          t,
          u,
          a
        );
        break;
      case 23:
        break;
      case 22:
        n = t.stateNode, f = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? Tt(
          l,
          t,
          u,
          a
        ) : Ia(l, t) : n._visibility & 2 ? Tt(
          l,
          t,
          u,
          a
        ) : (n._visibility |= 2, na(
          l,
          t,
          u,
          a,
          (t.subtreeFlags & 10256) !== 0
        )), e & 2048 && dc(f, t);
        break;
      case 24:
        Tt(
          l,
          t,
          u,
          a
        ), e & 2048 && hc(t.alternate, t);
        break;
      default:
        Tt(
          l,
          t,
          u,
          a
        );
    }
  }
  function na(l, t, u, a, e) {
    for (e = e && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var n = l, f = t, c = u, i = a, h = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          na(
            n,
            f,
            c,
            i,
            e
          ), ka(8, f);
          break;
        case 23:
          break;
        case 22:
          var S = f.stateNode;
          f.memoizedState !== null ? S._visibility & 2 ? na(
            n,
            f,
            c,
            i,
            e
          ) : Ia(
            n,
            f
          ) : (S._visibility |= 2, na(
            n,
            f,
            c,
            i,
            e
          )), e && h & 2048 && dc(
            f.alternate,
            f
          );
          break;
        case 24:
          na(
            n,
            f,
            c,
            i,
            e
          ), e && h & 2048 && hc(f.alternate, f);
          break;
        default:
          na(
            n,
            f,
            c,
            i,
            e
          );
      }
      t = t.sibling;
    }
  }
  function Ia(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var u = l, a = t, e = a.flags;
        switch (a.tag) {
          case 22:
            Ia(u, a), e & 2048 && dc(
              a.alternate,
              a
            );
            break;
          case 24:
            Ia(u, a), e & 2048 && hc(a.alternate, a);
            break;
          default:
            Ia(u, a);
        }
        t = t.sibling;
      }
  }
  var Pa = 8192;
  function fa(l) {
    if (l.subtreeFlags & Pa)
      for (l = l.child; l !== null; )
        Ls(l), l = l.sibling;
  }
  function Ls(l) {
    switch (l.tag) {
      case 26:
        fa(l), l.flags & Pa && l.memoizedState !== null && E1(
          ht,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        fa(l);
        break;
      case 3:
      case 4:
        var t = ht;
        ht = En(l.stateNode.containerInfo), fa(l), ht = t;
        break;
      case 22:
        l.memoizedState === null && (t = l.alternate, t !== null && t.memoizedState !== null ? (t = Pa, Pa = 16777216, fa(l), Pa = t) : fa(l));
        break;
      default:
        fa(l);
    }
  }
  function Ks(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function le(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var a = t[u];
          El = a, ws(
            a,
            l
          );
        }
      Ks(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        Js(l), l = l.sibling;
  }
  function Js(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        le(l), l.flags & 2048 && kt(9, l, l.return);
        break;
      case 3:
        le(l);
        break;
      case 12:
        le(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, sn(l)) : le(l);
        break;
      default:
        le(l);
    }
  }
  function sn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var a = t[u];
          El = a, ws(
            a,
            l
          );
        }
      Ks(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          kt(8, t, t.return), sn(t);
          break;
        case 22:
          u = t.stateNode, u._visibility & 2 && (u._visibility &= -3, sn(t));
          break;
        default:
          sn(t);
      }
      l = l.sibling;
    }
  }
  function ws(l, t) {
    for (; El !== null; ) {
      var u = El;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          kt(8, u, t);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var a = u.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Ga(u.memoizedState.cache);
      }
      if (a = u.child, a !== null) a.return = u, El = a;
      else
        l: for (u = l; El !== null; ) {
          a = El;
          var e = a.sibling, n = a.return;
          if (Qs(a), a === u) {
            El = null;
            break l;
          }
          if (e !== null) {
            e.return = n, El = e;
            break l;
          }
          El = n;
        }
    }
  }
  var Xd = {
    getCacheForType: function(l) {
      var t = Hl(Sl), u = t.data.get(l);
      return u === void 0 && (u = l(), t.data.set(l, u)), u;
    }
  }, Qd = typeof WeakMap == "function" ? WeakMap : Map, W = 0, el = null, Z = null, C = 0, $ = 0, Il = null, Pt = !1, ca = !1, oc = !1, Xt = 0, yl = 0, lu = 0, Hu = 0, mc = 0, it = 0, ia = 0, te = null, jl = null, rc = !1, Sc = 0, vn = 1 / 0, yn = null, tu = null, Ol = 0, uu = null, sa = null, va = 0, gc = 0, bc = null, Ws = null, ue = 0, Tc = null;
  function Pl() {
    if ((W & 2) !== 0 && C !== 0)
      return C & -C;
    if (g.T !== null) {
      var l = Fu;
      return l !== 0 ? l : Dc();
    }
    return vi();
  }
  function $s() {
    it === 0 && (it = (C & 536870912) === 0 || w ? fi() : 536870912);
    var l = ct.current;
    return l !== null && (l.flags |= 32), it;
  }
  function lt(l, t, u) {
    (l === el && ($ === 2 || $ === 9) || l.cancelPendingCommit !== null) && (ya(l, 0), au(
      l,
      C,
      it,
      !1
    )), Ta(l, u), ((W & 2) === 0 || l !== el) && (l === el && ((W & 2) === 0 && (Hu |= u), yl === 4 && au(
      l,
      C,
      it,
      !1
    )), Et(l));
  }
  function ks(l, t, u) {
    if ((W & 6) !== 0) throw Error(r(327));
    var a = !u && (t & 124) === 0 && (t & l.expiredLanes) === 0 || ba(l, t), e = a ? jd(l, t) : zc(l, t, !0), n = a;
    do {
      if (e === 0) {
        ca && !a && au(l, t, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, n && !xd(u)) {
          e = zc(l, t, !1), n = !1;
          continue;
        }
        if (e === 2) {
          if (n = t, l.errorRecoveryDisabledLanes & n)
            var f = 0;
          else
            f = l.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            t = f;
            l: {
              var c = l;
              e = te;
              var i = c.current.memoizedState.isDehydrated;
              if (i && (ya(c, f).flags |= 256), f = zc(
                c,
                f,
                !1
              ), f !== 2) {
                if (oc && !i) {
                  c.errorRecoveryDisabledLanes |= n, Hu |= n, e = 4;
                  break l;
                }
                n = jl, jl = e, n !== null && (jl === null ? jl = n : jl.push.apply(
                  jl,
                  n
                ));
              }
              e = f;
            }
            if (n = !1, e !== 2) continue;
          }
        }
        if (e === 1) {
          ya(l, 0), au(l, t, 0, !0);
          break;
        }
        l: {
          switch (a = l, n = e, n) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              au(
                a,
                t,
                it,
                !Pt
              );
              break l;
            case 2:
              jl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((t & 62914560) === t && (e = Sc + 300 - rt(), 10 < e)) {
            if (au(
              a,
              t,
              it,
              !Pt
            ), Ee(a, 0, !0) !== 0) break l;
            a.timeoutHandle = _v(
              Fs.bind(
                null,
                a,
                u,
                jl,
                yn,
                rc,
                t,
                it,
                Hu,
                ia,
                Pt,
                n,
                2,
                -0,
                0
              ),
              e
            );
            break l;
          }
          Fs(
            a,
            u,
            jl,
            yn,
            rc,
            t,
            it,
            Hu,
            ia,
            Pt,
            n,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Et(l);
  }
  function Fs(l, t, u, a, e, n, f, c, i, h, S, T, o, m) {
    if (l.timeoutHandle = -1, T = t.subtreeFlags, (T & 8192 || (T & 16785408) === 16785408) && (se = { stylesheets: null, count: 0, unsuspend: T1 }, Ls(t), T = A1(), T !== null)) {
      l.cancelPendingCommit = T(
        ev.bind(
          null,
          l,
          t,
          n,
          u,
          a,
          e,
          f,
          c,
          i,
          S,
          1,
          o,
          m
        )
      ), au(l, n, f, !h);
      return;
    }
    ev(
      l,
      t,
      n,
      u,
      a,
      e,
      f,
      c,
      i
    );
  }
  function xd(l) {
    for (var t = l; ; ) {
      var u = t.tag;
      if ((u === 0 || u === 11 || u === 15) && t.flags & 16384 && (u = t.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var a = 0; a < u.length; a++) {
          var e = u[a], n = e.getSnapshot;
          e = e.value;
          try {
            if (!Wl(n(), e)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = t.child, t.subtreeFlags & 16384 && u !== null)
        u.return = t, t = u;
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function au(l, t, u, a) {
    t &= ~mc, t &= ~Hu, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
    for (var e = t; 0 < e; ) {
      var n = 31 - wl(e), f = 1 << n;
      a[n] = -1, e &= ~f;
    }
    u !== 0 && ii(l, u, t);
  }
  function dn() {
    return (W & 6) === 0 ? (ae(0), !1) : !0;
  }
  function Ec() {
    if (Z !== null) {
      if ($ === 0)
        var l = Z.return;
      else
        l = Z, Rt = Ou = null, Qf(l), aa = null, wa = 0, l = Z;
      for (; l !== null; )
        Hs(l.alternate, l), l = l.return;
      Z = null;
    }
  }
  function ya(l, t) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, a1(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), Ec(), el = l, Z = u = Mt(l.current, null), C = t, $ = 0, Il = null, Pt = !1, ca = ba(l, t), oc = !1, ia = it = mc = Hu = lu = yl = 0, jl = te = null, rc = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= t; 0 < a; ) {
        var e = 31 - wl(a), n = 1 << e;
        t |= l[e], a &= ~n;
      }
    return Xt = t, Ye(), u;
  }
  function Is(l, t) {
    Q = null, g.H = Ie, t === Qa || t === Ce ? (t = m0(), $ = 3) : t === d0 ? (t = m0(), $ = 4) : $ = t === rs ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Il = t, Z === null && (yl = 1, an(
      l,
      at(t, l.current)
    ));
  }
  function Ps() {
    var l = g.H;
    return g.H = Ie, l === null ? Ie : l;
  }
  function lv() {
    var l = g.A;
    return g.A = Xd, l;
  }
  function Ac() {
    yl = 4, Pt || (C & 4194048) !== C && ct.current !== null || (ca = !0), (lu & 134217727) === 0 && (Hu & 134217727) === 0 || el === null || au(
      el,
      C,
      it,
      !1
    );
  }
  function zc(l, t, u) {
    var a = W;
    W |= 2;
    var e = Ps(), n = lv();
    (el !== l || C !== t) && (yn = null, ya(l, t)), t = !1;
    var f = yl;
    l: do
      try {
        if ($ !== 0 && Z !== null) {
          var c = Z, i = Il;
          switch ($) {
            case 8:
              Ec(), f = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              ct.current === null && (t = !0);
              var h = $;
              if ($ = 0, Il = null, da(l, c, i, h), u && ca) {
                f = 0;
                break l;
              }
              break;
            default:
              h = $, $ = 0, Il = null, da(l, c, i, h);
          }
        }
        Zd(), f = yl;
        break;
      } catch (S) {
        Is(l, S);
      }
    while (!0);
    return t && l.shellSuspendCounter++, Rt = Ou = null, W = a, g.H = e, g.A = n, Z === null && (el = null, C = 0, Ye()), f;
  }
  function Zd() {
    for (; Z !== null; ) tv(Z);
  }
  function jd(l, t) {
    var u = W;
    W |= 2;
    var a = Ps(), e = lv();
    el !== l || C !== t ? (yn = null, vn = rt() + 500, ya(l, t)) : ca = ba(
      l,
      t
    );
    l: do
      try {
        if ($ !== 0 && Z !== null) {
          t = Z;
          var n = Il;
          t: switch ($) {
            case 1:
              $ = 0, Il = null, da(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (h0(n)) {
                $ = 0, Il = null, uv(t);
                break;
              }
              t = function() {
                $ !== 2 && $ !== 9 || el !== l || ($ = 7), Et(l);
              }, n.then(t, t);
              break l;
            case 3:
              $ = 7;
              break l;
            case 4:
              $ = 5;
              break l;
            case 7:
              h0(n) ? ($ = 0, Il = null, uv(t)) : ($ = 0, Il = null, da(l, t, n, 7));
              break;
            case 5:
              var f = null;
              switch (Z.tag) {
                case 26:
                  f = Z.memoizedState;
                case 5:
                case 27:
                  var c = Z;
                  if (!f || Xv(f)) {
                    $ = 0, Il = null;
                    var i = c.sibling;
                    if (i !== null) Z = i;
                    else {
                      var h = c.return;
                      h !== null ? (Z = h, hn(h)) : Z = null;
                    }
                    break t;
                  }
              }
              $ = 0, Il = null, da(l, t, n, 5);
              break;
            case 6:
              $ = 0, Il = null, da(l, t, n, 6);
              break;
            case 8:
              Ec(), yl = 6;
              break l;
            default:
              throw Error(r(462));
          }
        }
        Cd();
        break;
      } catch (S) {
        Is(l, S);
      }
    while (!0);
    return Rt = Ou = null, g.H = a, g.A = e, W = u, Z !== null ? 0 : (el = null, C = 0, Ye(), yl);
  }
  function Cd() {
    for (; Z !== null && !vy(); )
      tv(Z);
  }
  function tv(l) {
    var t = Us(l.alternate, l, Xt);
    l.memoizedProps = l.pendingProps, t === null ? hn(l) : Z = t;
  }
  function uv(l) {
    var t = l, u = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = As(
          u,
          t,
          t.pendingProps,
          t.type,
          void 0,
          C
        );
        break;
      case 11:
        t = As(
          u,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          C
        );
        break;
      case 5:
        Qf(t);
      default:
        Hs(u, t), t = Z = a0(t, Xt), t = Us(u, t, Xt);
    }
    l.memoizedProps = l.pendingProps, t === null ? hn(l) : Z = t;
  }
  function da(l, t, u, a) {
    Rt = Ou = null, Qf(t), aa = null, wa = 0;
    var e = t.return;
    try {
      if (Nd(
        l,
        e,
        t,
        u,
        C
      )) {
        yl = 1, an(
          l,
          at(u, l.current)
        ), Z = null;
        return;
      }
    } catch (n) {
      if (e !== null) throw Z = e, n;
      yl = 1, an(
        l,
        at(u, l.current)
      ), Z = null;
      return;
    }
    t.flags & 32768 ? (w || a === 1 ? l = !0 : ca || (C & 536870912) !== 0 ? l = !1 : (Pt = l = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = ct.current, a !== null && a.tag === 13 && (a.flags |= 16384))), av(t, l)) : hn(t);
  }
  function hn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        av(
          t,
          Pt
        );
        return;
      }
      l = t.return;
      var u = Yd(
        t.alternate,
        t,
        Xt
      );
      if (u !== null) {
        Z = u;
        return;
      }
      if (t = t.sibling, t !== null) {
        Z = t;
        return;
      }
      Z = t = l;
    } while (t !== null);
    yl === 0 && (yl = 5);
  }
  function av(l, t) {
    do {
      var u = Bd(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, Z = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !t && (l = l.sibling, l !== null)) {
        Z = l;
        return;
      }
      Z = l = u;
    } while (l !== null);
    yl = 6, Z = null;
  }
  function ev(l, t, u, a, e, n, f, c, i) {
    l.cancelPendingCommit = null;
    do
      on();
    while (Ol !== 0);
    if ((W & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === l.current) throw Error(r(177));
      if (n = t.lanes | t.childLanes, n |= hf, Ty(
        l,
        u,
        n,
        f,
        c,
        i
      ), l === el && (Z = el = null, C = 0), sa = t, uu = l, va = u, gc = n, bc = e, Ws = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Jd(ge, function() {
        return sv(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = g.T, g.T = null, e = _.p, _.p = 2, f = W, W |= 4;
        try {
          pd(l, t, u);
        } finally {
          W = f, _.p = e, g.T = a;
        }
      }
      Ol = 1, nv(), fv(), cv();
    }
  }
  function nv() {
    if (Ol === 1) {
      Ol = 0;
      var l = uu, t = sa, u = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || u) {
        u = g.T, g.T = null;
        var a = _.p;
        _.p = 2;
        var e = W;
        W |= 4;
        try {
          js(t, l);
          var n = pc, f = wi(l.containerInfo), c = n.focusedElem, i = n.selectionRange;
          if (f !== c && c && c.ownerDocument && Ji(
            c.ownerDocument.documentElement,
            c
          )) {
            if (i !== null && cf(c)) {
              var h = i.start, S = i.end;
              if (S === void 0 && (S = h), "selectionStart" in c)
                c.selectionStart = h, c.selectionEnd = Math.min(
                  S,
                  c.value.length
                );
              else {
                var T = c.ownerDocument || document, o = T && T.defaultView || window;
                if (o.getSelection) {
                  var m = o.getSelection(), p = c.textContent.length, q = Math.min(i.start, p), I = i.end === void 0 ? q : Math.min(i.end, p);
                  !m.extend && q > I && (f = I, I = q, q = f);
                  var y = Ki(
                    c,
                    q
                  ), v = Ki(
                    c,
                    I
                  );
                  if (y && v && (m.rangeCount !== 1 || m.anchorNode !== y.node || m.anchorOffset !== y.offset || m.focusNode !== v.node || m.focusOffset !== v.offset)) {
                    var d = T.createRange();
                    d.setStart(y.node, y.offset), m.removeAllRanges(), q > I ? (m.addRange(d), m.extend(v.node, v.offset)) : (d.setEnd(v.node, v.offset), m.addRange(d));
                  }
                }
              }
            }
            for (T = [], m = c; m = m.parentNode; )
              m.nodeType === 1 && T.push({
                element: m,
                left: m.scrollLeft,
                top: m.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < T.length; c++) {
              var b = T[c];
              b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
            }
          }
          Mn = !!Bc, pc = Bc = null;
        } finally {
          W = e, _.p = a, g.T = u;
        }
      }
      l.current = t, Ol = 2;
    }
  }
  function fv() {
    if (Ol === 2) {
      Ol = 0;
      var l = uu, t = sa, u = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || u) {
        u = g.T, g.T = null;
        var a = _.p;
        _.p = 2;
        var e = W;
        W |= 4;
        try {
          Xs(l, t.alternate, t);
        } finally {
          W = e, _.p = a, g.T = u;
        }
      }
      Ol = 3;
    }
  }
  function cv() {
    if (Ol === 4 || Ol === 3) {
      Ol = 0, yy();
      var l = uu, t = sa, u = va, a = Ws;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Ol = 5 : (Ol = 0, sa = uu = null, iv(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (e === 0 && (tu = null), Zn(u), t = t.stateNode, Jl && typeof Jl.onCommitFiberRoot == "function")
        try {
          Jl.onCommitFiberRoot(
            ga,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = g.T, e = _.p, _.p = 2, g.T = null;
        try {
          for (var n = l.onRecoverableError, f = 0; f < a.length; f++) {
            var c = a[f];
            n(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          g.T = t, _.p = e;
        }
      }
      (va & 3) !== 0 && on(), Et(l), e = l.pendingLanes, (u & 4194090) !== 0 && (e & 42) !== 0 ? l === Tc ? ue++ : (ue = 0, Tc = l) : ue = 0, ae(0);
    }
  }
  function iv(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Ga(t)));
  }
  function on(l) {
    return nv(), fv(), cv(), sv();
  }
  function sv() {
    if (Ol !== 5) return !1;
    var l = uu, t = gc;
    gc = 0;
    var u = Zn(va), a = g.T, e = _.p;
    try {
      _.p = 32 > u ? 32 : u, g.T = null, u = bc, bc = null;
      var n = uu, f = va;
      if (Ol = 0, sa = uu = null, va = 0, (W & 6) !== 0) throw Error(r(331));
      var c = W;
      if (W |= 4, Js(n.current), Vs(
        n,
        n.current,
        f,
        u
      ), W = c, ae(0, !1), Jl && typeof Jl.onPostCommitFiberRoot == "function")
        try {
          Jl.onPostCommitFiberRoot(ga, n);
        } catch {
        }
      return !0;
    } finally {
      _.p = e, g.T = a, iv(l, t);
    }
  }
  function vv(l, t, u) {
    t = at(u, t), t = If(l.stateNode, t, 2), l = Jt(l, t, 2), l !== null && (Ta(l, 2), Et(l));
  }
  function tl(l, t, u) {
    if (l.tag === 3)
      vv(l, l, u);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          vv(
            t,
            l,
            u
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (tu === null || !tu.has(a))) {
            l = at(u, l), u = os(2), a = Jt(t, u, 2), a !== null && (ms(
              u,
              a,
              t,
              l
            ), Ta(a, 2), Et(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Oc(l, t, u) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new Qd();
      var e = /* @__PURE__ */ new Set();
      a.set(t, e);
    } else
      e = a.get(t), e === void 0 && (e = /* @__PURE__ */ new Set(), a.set(t, e));
    e.has(u) || (oc = !0, e.add(u), l = Vd.bind(null, l, t, u), t.then(l, l));
  }
  function Vd(l, t, u) {
    var a = l.pingCache;
    a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, el === l && (C & u) === u && (yl === 4 || yl === 3 && (C & 62914560) === C && 300 > rt() - Sc ? (W & 2) === 0 && ya(l, 0) : mc |= u, ia === C && (ia = 0)), Et(l);
  }
  function yv(l, t) {
    t === 0 && (t = ci()), l = wu(l, t), l !== null && (Ta(l, t), Et(l));
  }
  function Ld(l) {
    var t = l.memoizedState, u = 0;
    t !== null && (u = t.retryLane), yv(l, u);
  }
  function Kd(l, t) {
    var u = 0;
    switch (l.tag) {
      case 13:
        var a = l.stateNode, e = l.memoizedState;
        e !== null && (u = e.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    a !== null && a.delete(t), yv(l, u);
  }
  function Jd(l, t) {
    return Gn(l, t);
  }
  var mn = null, ha = null, _c = !1, rn = !1, Mc = !1, Nu = 0;
  function Et(l) {
    l !== ha && l.next === null && (ha === null ? mn = ha = l : ha = ha.next = l), rn = !0, _c || (_c = !0, Wd());
  }
  function ae(l, t) {
    if (!Mc && rn) {
      Mc = !0;
      do
        for (var u = !1, a = mn; a !== null; ) {
          if (l !== 0) {
            var e = a.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var f = a.suspendedLanes, c = a.pingedLanes;
              n = (1 << 31 - wl(42 | l) + 1) - 1, n &= e & ~(f & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (u = !0, mv(a, n));
          } else
            n = C, n = Ee(
              a,
              a === el ? n : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (n & 3) === 0 || ba(a, n) || (u = !0, mv(a, n));
          a = a.next;
        }
      while (u);
      Mc = !1;
    }
  }
  function wd() {
    dv();
  }
  function dv() {
    rn = _c = !1;
    var l = 0;
    Nu !== 0 && (u1() && (l = Nu), Nu = 0);
    for (var t = rt(), u = null, a = mn; a !== null; ) {
      var e = a.next, n = hv(a, t);
      n === 0 ? (a.next = null, u === null ? mn = e : u.next = e, e === null && (ha = u)) : (u = a, (l !== 0 || (n & 3) !== 0) && (rn = !0)), a = e;
    }
    ae(l);
  }
  function hv(l, t) {
    for (var u = l.suspendedLanes, a = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var f = 31 - wl(n), c = 1 << f, i = e[f];
      i === -1 ? ((c & u) === 0 || (c & a) !== 0) && (e[f] = by(c, t)) : i <= t && (l.expiredLanes |= c), n &= ~c;
    }
    if (t = el, u = C, u = Ee(
      l,
      l === t ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a = l.callbackNode, u === 0 || l === t && ($ === 2 || $ === 9) || l.cancelPendingCommit !== null)
      return a !== null && a !== null && Xn(a), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || ba(l, u)) {
      if (t = u & -u, t === l.callbackPriority) return t;
      switch (a !== null && Xn(a), Zn(u)) {
        case 2:
        case 8:
          u = ei;
          break;
        case 32:
          u = ge;
          break;
        case 268435456:
          u = ni;
          break;
        default:
          u = ge;
      }
      return a = ov.bind(null, l), u = Gn(u, a), l.callbackPriority = t, l.callbackNode = u, t;
    }
    return a !== null && a !== null && Xn(a), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function ov(l, t) {
    if (Ol !== 0 && Ol !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (on() && l.callbackNode !== u)
      return null;
    var a = C;
    return a = Ee(
      l,
      l === el ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a === 0 ? null : (ks(l, a, t), hv(l, rt()), l.callbackNode != null && l.callbackNode === u ? ov.bind(null, l) : null);
  }
  function mv(l, t) {
    if (on()) return null;
    ks(l, t, !0);
  }
  function Wd() {
    e1(function() {
      (W & 6) !== 0 ? Gn(
        ai,
        wd
      ) : dv();
    });
  }
  function Dc() {
    return Nu === 0 && (Nu = fi()), Nu;
  }
  function rv(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Me("" + l);
  }
  function Sv(l, t) {
    var u = t.ownerDocument.createElement("input");
    return u.name = t.name, u.value = t.value, l.id && u.setAttribute("form", l.id), t.parentNode.insertBefore(u, t), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function $d(l, t, u, a, e) {
    if (t === "submit" && u && u.stateNode === e) {
      var n = rv(
        (e[Xl] || null).action
      ), f = a.submitter;
      f && (t = (t = f[Xl] || null) ? rv(t.formAction) : f.getAttribute("formAction"), t !== null && (n = t, f = null));
      var c = new He(
        "action",
        "action",
        null,
        a,
        e
      );
      l.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (Nu !== 0) {
                  var i = f ? Sv(e, f) : new FormData(e);
                  wf(
                    u,
                    {
                      pending: !0,
                      data: i,
                      method: e.method,
                      action: n
                    },
                    null,
                    i
                  );
                }
              } else
                typeof n == "function" && (c.preventDefault(), i = f ? Sv(e, f) : new FormData(e), wf(
                  u,
                  {
                    pending: !0,
                    data: i,
                    method: e.method,
                    action: n
                  },
                  n,
                  i
                ));
            },
            currentTarget: e
          }
        ]
      });
    }
  }
  for (var Uc = 0; Uc < df.length; Uc++) {
    var Rc = df[Uc], kd = Rc.toLowerCase(), Fd = Rc[0].toUpperCase() + Rc.slice(1);
    dt(
      kd,
      "on" + Fd
    );
  }
  dt(ki, "onAnimationEnd"), dt(Fi, "onAnimationIteration"), dt(Ii, "onAnimationStart"), dt("dblclick", "onDoubleClick"), dt("focusin", "onFocus"), dt("focusout", "onBlur"), dt(od, "onTransitionRun"), dt(md, "onTransitionStart"), dt(rd, "onTransitionCancel"), dt(Pi, "onTransitionEnd"), Xu("onMouseEnter", ["mouseout", "mouseover"]), Xu("onMouseLeave", ["mouseout", "mouseover"]), Xu("onPointerEnter", ["pointerout", "pointerover"]), Xu("onPointerLeave", ["pointerout", "pointerover"]), mu(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), mu(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), mu("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), mu(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), mu(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), mu(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ee = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Id = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ee)
  );
  function gv(l, t) {
    t = (t & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var a = l[u], e = a.event;
      a = a.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var f = a.length - 1; 0 <= f; f--) {
            var c = a[f], i = c.instance, h = c.currentTarget;
            if (c = c.listener, i !== n && e.isPropagationStopped())
              break l;
            n = c, e.currentTarget = h;
            try {
              n(e);
            } catch (S) {
              un(S);
            }
            e.currentTarget = null, n = i;
          }
        else
          for (f = 0; f < a.length; f++) {
            if (c = a[f], i = c.instance, h = c.currentTarget, c = c.listener, i !== n && e.isPropagationStopped())
              break l;
            n = c, e.currentTarget = h;
            try {
              n(e);
            } catch (S) {
              un(S);
            }
            e.currentTarget = null, n = i;
          }
      }
    }
  }
  function j(l, t) {
    var u = t[jn];
    u === void 0 && (u = t[jn] = /* @__PURE__ */ new Set());
    var a = l + "__bubble";
    u.has(a) || (bv(t, l, 2, !1), u.add(a));
  }
  function Hc(l, t, u) {
    var a = 0;
    t && (a |= 4), bv(
      u,
      l,
      a,
      t
    );
  }
  var Sn = "_reactListening" + Math.random().toString(36).slice(2);
  function Nc(l) {
    if (!l[Sn]) {
      l[Sn] = !0, di.forEach(function(u) {
        u !== "selectionchange" && (Id.has(u) || Hc(u, !1, l), Hc(u, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Sn] || (t[Sn] = !0, Hc("selectionchange", !1, t));
    }
  }
  function bv(l, t, u, a) {
    switch (Vv(t)) {
      case 2:
        var e = _1;
        break;
      case 8:
        e = M1;
        break;
      default:
        e = Kc;
    }
    u = e.bind(
      null,
      t,
      u,
      l
    ), e = void 0, !In || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (e = !0), a ? e !== void 0 ? l.addEventListener(t, u, {
      capture: !0,
      passive: e
    }) : l.addEventListener(t, u, !0) : e !== void 0 ? l.addEventListener(t, u, {
      passive: e
    }) : l.addEventListener(t, u, !1);
  }
  function qc(l, t, u, a, e) {
    var n = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      l: for (; ; ) {
        if (a === null) return;
        var f = a.tag;
        if (f === 3 || f === 4) {
          var c = a.stateNode.containerInfo;
          if (c === e) break;
          if (f === 4)
            for (f = a.return; f !== null; ) {
              var i = f.tag;
              if ((i === 3 || i === 4) && f.stateNode.containerInfo === e)
                return;
              f = f.return;
            }
          for (; c !== null; ) {
            if (f = Bu(c), f === null) return;
            if (i = f.tag, i === 5 || i === 6 || i === 26 || i === 27) {
              a = n = f;
              continue l;
            }
            c = c.parentNode;
          }
        }
        a = a.return;
      }
    Mi(function() {
      var h = n, S = kn(u), T = [];
      l: {
        var o = l0.get(l);
        if (o !== void 0) {
          var m = He, p = l;
          switch (l) {
            case "keypress":
              if (Ue(u) === 0) break l;
            case "keydown":
            case "keyup":
              m = Jy;
              break;
            case "focusin":
              p = "focus", m = uf;
              break;
            case "focusout":
              p = "blur", m = uf;
              break;
            case "beforeblur":
            case "afterblur":
              m = uf;
              break;
            case "click":
              if (u.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              m = Ri;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              m = By;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              m = $y;
              break;
            case ki:
            case Fi:
            case Ii:
              m = Xy;
              break;
            case Pi:
              m = Fy;
              break;
            case "scroll":
            case "scrollend":
              m = qy;
              break;
            case "wheel":
              m = Py;
              break;
            case "copy":
            case "cut":
            case "paste":
              m = xy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              m = Ni;
              break;
            case "toggle":
            case "beforetoggle":
              m = td;
          }
          var q = (t & 4) !== 0, I = !q && (l === "scroll" || l === "scrollend"), y = q ? o !== null ? o + "Capture" : null : o;
          q = [];
          for (var v = h, d; v !== null; ) {
            var b = v;
            if (d = b.stateNode, b = b.tag, b !== 5 && b !== 26 && b !== 27 || d === null || y === null || (b = za(v, y), b != null && q.push(
              ne(v, b, d)
            )), I) break;
            v = v.return;
          }
          0 < q.length && (o = new m(
            o,
            p,
            null,
            u,
            S
          ), T.push({ event: o, listeners: q }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (o = l === "mouseover" || l === "pointerover", m = l === "mouseout" || l === "pointerout", o && u !== $n && (p = u.relatedTarget || u.fromElement) && (Bu(p) || p[Yu]))
            break l;
          if ((m || o) && (o = S.window === S ? S : (o = S.ownerDocument) ? o.defaultView || o.parentWindow : window, m ? (p = u.relatedTarget || u.toElement, m = h, p = p ? Bu(p) : null, p !== null && (I = sl(p), q = p.tag, p !== I || q !== 5 && q !== 27 && q !== 6) && (p = null)) : (m = null, p = h), m !== p)) {
            if (q = Ri, b = "onMouseLeave", y = "onMouseEnter", v = "mouse", (l === "pointerout" || l === "pointerover") && (q = Ni, b = "onPointerLeave", y = "onPointerEnter", v = "pointer"), I = m == null ? o : Aa(m), d = p == null ? o : Aa(p), o = new q(
              b,
              v + "leave",
              m,
              u,
              S
            ), o.target = I, o.relatedTarget = d, b = null, Bu(S) === h && (q = new q(
              y,
              v + "enter",
              p,
              u,
              S
            ), q.target = d, q.relatedTarget = I, b = q), I = b, m && p)
              t: {
                for (q = m, y = p, v = 0, d = q; d; d = oa(d))
                  v++;
                for (d = 0, b = y; b; b = oa(b))
                  d++;
                for (; 0 < v - d; )
                  q = oa(q), v--;
                for (; 0 < d - v; )
                  y = oa(y), d--;
                for (; v--; ) {
                  if (q === y || y !== null && q === y.alternate)
                    break t;
                  q = oa(q), y = oa(y);
                }
                q = null;
              }
            else q = null;
            m !== null && Tv(
              T,
              o,
              m,
              q,
              !1
            ), p !== null && I !== null && Tv(
              T,
              I,
              p,
              q,
              !0
            );
          }
        }
        l: {
          if (o = h ? Aa(h) : window, m = o.nodeName && o.nodeName.toLowerCase(), m === "select" || m === "input" && o.type === "file")
            var D = xi;
          else if (Xi(o))
            if (Zi)
              D = yd;
            else {
              D = sd;
              var x = id;
            }
          else
            m = o.nodeName, !m || m.toLowerCase() !== "input" || o.type !== "checkbox" && o.type !== "radio" ? h && Wn(h.elementType) && (D = xi) : D = vd;
          if (D && (D = D(l, h))) {
            Qi(
              T,
              D,
              u,
              S
            );
            break l;
          }
          x && x(l, o, h), l === "focusout" && h && o.type === "number" && h.memoizedProps.value != null && wn(o, "number", o.value);
        }
        switch (x = h ? Aa(h) : window, l) {
          case "focusin":
            (Xi(x) || x.contentEditable === "true") && (Lu = x, sf = h, Na = null);
            break;
          case "focusout":
            Na = sf = Lu = null;
            break;
          case "mousedown":
            vf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            vf = !1, Wi(T, u, S);
            break;
          case "selectionchange":
            if (hd) break;
          case "keydown":
          case "keyup":
            Wi(T, u, S);
        }
        var U;
        if (ef)
          l: {
            switch (l) {
              case "compositionstart":
                var Y = "onCompositionStart";
                break l;
              case "compositionend":
                Y = "onCompositionEnd";
                break l;
              case "compositionupdate":
                Y = "onCompositionUpdate";
                break l;
            }
            Y = void 0;
          }
        else
          Vu ? pi(l, u) && (Y = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (Y = "onCompositionStart");
        Y && (qi && u.locale !== "ko" && (Vu || Y !== "onCompositionStart" ? Y === "onCompositionEnd" && Vu && (U = Di()) : (Ct = S, Pn = "value" in Ct ? Ct.value : Ct.textContent, Vu = !0)), x = gn(h, Y), 0 < x.length && (Y = new Hi(
          Y,
          l,
          null,
          u,
          S
        ), T.push({ event: Y, listeners: x }), U ? Y.data = U : (U = Gi(u), U !== null && (Y.data = U)))), (U = ad ? ed(l, u) : nd(l, u)) && (Y = gn(h, "onBeforeInput"), 0 < Y.length && (x = new Hi(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          S
        ), T.push({
          event: x,
          listeners: Y
        }), x.data = U)), $d(
          T,
          l,
          h,
          u,
          S
        );
      }
      gv(T, t);
    });
  }
  function ne(l, t, u) {
    return {
      instance: l,
      listener: t,
      currentTarget: u
    };
  }
  function gn(l, t) {
    for (var u = t + "Capture", a = []; l !== null; ) {
      var e = l, n = e.stateNode;
      if (e = e.tag, e !== 5 && e !== 26 && e !== 27 || n === null || (e = za(l, u), e != null && a.unshift(
        ne(l, e, n)
      ), e = za(l, t), e != null && a.push(
        ne(l, e, n)
      )), l.tag === 3) return a;
      l = l.return;
    }
    return [];
  }
  function oa(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Tv(l, t, u, a, e) {
    for (var n = t._reactName, f = []; u !== null && u !== a; ) {
      var c = u, i = c.alternate, h = c.stateNode;
      if (c = c.tag, i !== null && i === a) break;
      c !== 5 && c !== 26 && c !== 27 || h === null || (i = h, e ? (h = za(u, n), h != null && f.unshift(
        ne(u, h, i)
      )) : e || (h = za(u, n), h != null && f.push(
        ne(u, h, i)
      ))), u = u.return;
    }
    f.length !== 0 && l.push({ event: t, listeners: f });
  }
  var Pd = /\r\n?/g, l1 = /\u0000|\uFFFD/g;
  function Ev(l) {
    return (typeof l == "string" ? l : "" + l).replace(Pd, `
`).replace(l1, "");
  }
  function Av(l, t) {
    return t = Ev(t), Ev(l) === t;
  }
  function bn() {
  }
  function F(l, t, u, a, e, n) {
    switch (u) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Zu(l, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Zu(l, "" + a);
        break;
      case "className":
        ze(l, "class", a);
        break;
      case "tabIndex":
        ze(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ze(l, u, a);
        break;
      case "style":
        Oi(l, a, n);
        break;
      case "data":
        if (t !== "object") {
          ze(l, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        a = Me("" + a), l.setAttribute(u, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" && (u === "formAction" ? (t !== "input" && F(l, t, "name", e.name, e, null), F(
            l,
            t,
            "formEncType",
            e.formEncType,
            e,
            null
          ), F(
            l,
            t,
            "formMethod",
            e.formMethod,
            e,
            null
          ), F(
            l,
            t,
            "formTarget",
            e.formTarget,
            e,
            null
          )) : (F(l, t, "encType", e.encType, e, null), F(l, t, "method", e.method, e, null), F(l, t, "target", e.target, e, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        a = Me("" + a), l.setAttribute(u, a);
        break;
      case "onClick":
        a != null && (l.onclick = bn);
        break;
      case "onScroll":
        a != null && j("scroll", l);
        break;
      case "onScrollEnd":
        a != null && j("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (u = a.__html, u != null) {
            if (e.children != null) throw Error(r(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = Me("" + a), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, "" + a) : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        a === !0 ? l.setAttribute(u, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, a) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? l.setAttribute(u, a) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? l.removeAttribute(u) : l.setAttribute(u, a);
        break;
      case "popover":
        j("beforetoggle", l), j("toggle", l), Ae(l, "popover", a);
        break;
      case "xlinkActuate":
        Ot(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Ot(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Ot(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Ot(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Ot(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Ot(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Ot(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Ot(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Ot(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        Ae(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = Hy.get(u) || u, Ae(l, u, a));
    }
  }
  function Yc(l, t, u, a, e, n) {
    switch (u) {
      case "style":
        Oi(l, a, n);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (u = a.__html, u != null) {
            if (e.children != null) throw Error(r(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof a == "string" ? Zu(l, a) : (typeof a == "number" || typeof a == "bigint") && Zu(l, "" + a);
        break;
      case "onScroll":
        a != null && j("scroll", l);
        break;
      case "onScrollEnd":
        a != null && j("scrollend", l);
        break;
      case "onClick":
        a != null && (l.onclick = bn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!hi.hasOwnProperty(u))
          l: {
            if (u[0] === "o" && u[1] === "n" && (e = u.endsWith("Capture"), t = u.slice(2, e ? u.length - 7 : void 0), n = l[Xl] || null, n = n != null ? n[u] : null, typeof n == "function" && l.removeEventListener(t, n, e), typeof a == "function")) {
              typeof n != "function" && n !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(t, a, e);
              break l;
            }
            u in l ? l[u] = a : a === !0 ? l.setAttribute(u, "") : Ae(l, u, a);
          }
    }
  }
  function _l(l, t, u) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        j("error", l), j("load", l);
        var a = !1, e = !1, n;
        for (n in u)
          if (u.hasOwnProperty(n)) {
            var f = u[n];
            if (f != null)
              switch (n) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, t));
                default:
                  F(l, t, n, f, u, null);
              }
          }
        e && F(l, t, "srcSet", u.srcSet, u, null), a && F(l, t, "src", u.src, u, null);
        return;
      case "input":
        j("invalid", l);
        var c = n = f = e = null, i = null, h = null;
        for (a in u)
          if (u.hasOwnProperty(a)) {
            var S = u[a];
            if (S != null)
              switch (a) {
                case "name":
                  e = S;
                  break;
                case "type":
                  f = S;
                  break;
                case "checked":
                  i = S;
                  break;
                case "defaultChecked":
                  h = S;
                  break;
                case "value":
                  n = S;
                  break;
                case "defaultValue":
                  c = S;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (S != null)
                    throw Error(r(137, t));
                  break;
                default:
                  F(l, t, a, S, u, null);
              }
          }
        Ti(
          l,
          n,
          c,
          i,
          h,
          f,
          e,
          !1
        ), Oe(l);
        return;
      case "select":
        j("invalid", l), a = f = n = null;
        for (e in u)
          if (u.hasOwnProperty(e) && (c = u[e], c != null))
            switch (e) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                f = c;
                break;
              case "multiple":
                a = c;
              default:
                F(l, t, e, c, u, null);
            }
        t = n, u = f, l.multiple = !!a, t != null ? xu(l, !!a, t, !1) : u != null && xu(l, !!a, u, !0);
        return;
      case "textarea":
        j("invalid", l), n = e = a = null;
        for (f in u)
          if (u.hasOwnProperty(f) && (c = u[f], c != null))
            switch (f) {
              case "value":
                a = c;
                break;
              case "defaultValue":
                e = c;
                break;
              case "children":
                n = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(r(91));
                break;
              default:
                F(l, t, f, c, u, null);
            }
        Ai(l, a, e, n), Oe(l);
        return;
      case "option":
        for (i in u)
          if (u.hasOwnProperty(i) && (a = u[i], a != null))
            switch (i) {
              case "selected":
                l.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                F(l, t, i, a, u, null);
            }
        return;
      case "dialog":
        j("beforetoggle", l), j("toggle", l), j("cancel", l), j("close", l);
        break;
      case "iframe":
      case "object":
        j("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ee.length; a++)
          j(ee[a], l);
        break;
      case "image":
        j("error", l), j("load", l);
        break;
      case "details":
        j("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        j("error", l), j("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (h in u)
          if (u.hasOwnProperty(h) && (a = u[h], a != null))
            switch (h) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, t));
              default:
                F(l, t, h, a, u, null);
            }
        return;
      default:
        if (Wn(t)) {
          for (S in u)
            u.hasOwnProperty(S) && (a = u[S], a !== void 0 && Yc(
              l,
              t,
              S,
              a,
              u,
              void 0
            ));
          return;
        }
    }
    for (c in u)
      u.hasOwnProperty(c) && (a = u[c], a != null && F(l, t, c, a, u, null));
  }
  function t1(l, t, u, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var e = null, n = null, f = null, c = null, i = null, h = null, S = null;
        for (m in u) {
          var T = u[m];
          if (u.hasOwnProperty(m) && T != null)
            switch (m) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                i = T;
              default:
                a.hasOwnProperty(m) || F(l, t, m, null, a, T);
            }
        }
        for (var o in a) {
          var m = a[o];
          if (T = u[o], a.hasOwnProperty(o) && (m != null || T != null))
            switch (o) {
              case "type":
                n = m;
                break;
              case "name":
                e = m;
                break;
              case "checked":
                h = m;
                break;
              case "defaultChecked":
                S = m;
                break;
              case "value":
                f = m;
                break;
              case "defaultValue":
                c = m;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (m != null)
                  throw Error(r(137, t));
                break;
              default:
                m !== T && F(
                  l,
                  t,
                  o,
                  m,
                  a,
                  T
                );
            }
        }
        Jn(
          l,
          f,
          c,
          i,
          h,
          S,
          n,
          e
        );
        return;
      case "select":
        m = f = c = o = null;
        for (n in u)
          if (i = u[n], u.hasOwnProperty(n) && i != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                m = i;
              default:
                a.hasOwnProperty(n) || F(
                  l,
                  t,
                  n,
                  null,
                  a,
                  i
                );
            }
        for (e in a)
          if (n = a[e], i = u[e], a.hasOwnProperty(e) && (n != null || i != null))
            switch (e) {
              case "value":
                o = n;
                break;
              case "defaultValue":
                c = n;
                break;
              case "multiple":
                f = n;
              default:
                n !== i && F(
                  l,
                  t,
                  e,
                  n,
                  a,
                  i
                );
            }
        t = c, u = f, a = m, o != null ? xu(l, !!u, o, !1) : !!a != !!u && (t != null ? xu(l, !!u, t, !0) : xu(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        m = o = null;
        for (c in u)
          if (e = u[c], u.hasOwnProperty(c) && e != null && !a.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                F(l, t, c, null, a, e);
            }
        for (f in a)
          if (e = a[f], n = u[f], a.hasOwnProperty(f) && (e != null || n != null))
            switch (f) {
              case "value":
                o = e;
                break;
              case "defaultValue":
                m = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(r(91));
                break;
              default:
                e !== n && F(l, t, f, e, a, n);
            }
        Ei(l, o, m);
        return;
      case "option":
        for (var p in u)
          if (o = u[p], u.hasOwnProperty(p) && o != null && !a.hasOwnProperty(p))
            switch (p) {
              case "selected":
                l.selected = !1;
                break;
              default:
                F(
                  l,
                  t,
                  p,
                  null,
                  a,
                  o
                );
            }
        for (i in a)
          if (o = a[i], m = u[i], a.hasOwnProperty(i) && o !== m && (o != null || m != null))
            switch (i) {
              case "selected":
                l.selected = o && typeof o != "function" && typeof o != "symbol";
                break;
              default:
                F(
                  l,
                  t,
                  i,
                  o,
                  a,
                  m
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var q in u)
          o = u[q], u.hasOwnProperty(q) && o != null && !a.hasOwnProperty(q) && F(l, t, q, null, a, o);
        for (h in a)
          if (o = a[h], m = u[h], a.hasOwnProperty(h) && o !== m && (o != null || m != null))
            switch (h) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (o != null)
                  throw Error(r(137, t));
                break;
              default:
                F(
                  l,
                  t,
                  h,
                  o,
                  a,
                  m
                );
            }
        return;
      default:
        if (Wn(t)) {
          for (var I in u)
            o = u[I], u.hasOwnProperty(I) && o !== void 0 && !a.hasOwnProperty(I) && Yc(
              l,
              t,
              I,
              void 0,
              a,
              o
            );
          for (S in a)
            o = a[S], m = u[S], !a.hasOwnProperty(S) || o === m || o === void 0 && m === void 0 || Yc(
              l,
              t,
              S,
              o,
              a,
              m
            );
          return;
        }
    }
    for (var y in u)
      o = u[y], u.hasOwnProperty(y) && o != null && !a.hasOwnProperty(y) && F(l, t, y, null, a, o);
    for (T in a)
      o = a[T], m = u[T], !a.hasOwnProperty(T) || o === m || o == null && m == null || F(l, t, T, o, a, m);
  }
  var Bc = null, pc = null;
  function Tn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function zv(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Ov(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Gc(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Xc = null;
  function u1() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Xc ? !1 : (Xc = l, !0) : (Xc = null, !1);
  }
  var _v = typeof setTimeout == "function" ? setTimeout : void 0, a1 = typeof clearTimeout == "function" ? clearTimeout : void 0, Mv = typeof Promise == "function" ? Promise : void 0, e1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Mv < "u" ? function(l) {
    return Mv.resolve(null).then(l).catch(n1);
  } : _v;
  function n1(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function eu(l) {
    return l === "head";
  }
  function Dv(l, t) {
    var u = t, a = 0, e = 0;
    do {
      var n = u.nextSibling;
      if (l.removeChild(u), n && n.nodeType === 8)
        if (u = n.data, u === "/$") {
          if (0 < a && 8 > a) {
            u = a;
            var f = l.ownerDocument;
            if (u & 1 && fe(f.documentElement), u & 2 && fe(f.body), u & 4)
              for (u = f.head, fe(u), f = u.firstChild; f; ) {
                var c = f.nextSibling, i = f.nodeName;
                f[Ea] || i === "SCRIPT" || i === "STYLE" || i === "LINK" && f.rel.toLowerCase() === "stylesheet" || u.removeChild(f), f = c;
              }
          }
          if (e === 0) {
            l.removeChild(n), oe(t);
            return;
          }
          e--;
        } else
          u === "$" || u === "$?" || u === "$!" ? e++ : a = u.charCodeAt(0) - 48;
      else a = 0;
      u = n;
    } while (u);
    oe(t);
  }
  function Qc(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var u = t;
      switch (t = t.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Qc(u), Cn(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function f1(l, t, u, a) {
    for (; l.nodeType === 1; ) {
      var e = u;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (a) {
        if (!l[Ea])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (n !== e.rel || l.getAttribute("href") !== (e.href == null || e.href === "" ? null : e.href) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin) || l.getAttribute("title") !== (e.title == null ? null : e.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (n = l.getAttribute("src"), (n !== (e.src == null ? null : e.src) || l.getAttribute("type") !== (e.type == null ? null : e.type) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && l.getAttribute("name") === n)
          return l;
      } else return l;
      if (l = ot(l.nextSibling), l === null) break;
    }
    return null;
  }
  function c1(l, t, u) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = ot(l.nextSibling), l === null)) return null;
    return l;
  }
  function xc(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState === "complete";
  }
  function i1(l, t) {
    var u = l.ownerDocument;
    if (l.data !== "$?" || u.readyState === "complete")
      t();
    else {
      var a = function() {
        t(), u.removeEventListener("DOMContentLoaded", a);
      };
      u.addEventListener("DOMContentLoaded", a), l._reactRetry = a;
    }
  }
  function ot(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
          break;
        if (t === "/$") return null;
      }
    }
    return l;
  }
  var Zc = null;
  function Uv(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?") {
          if (t === 0) return l;
          t--;
        } else u === "/$" && t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Rv(l, t, u) {
    switch (t = Tn(u), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(r(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(r(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(r(454));
        return l;
      default:
        throw Error(r(451));
    }
  }
  function fe(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    Cn(l);
  }
  var st = /* @__PURE__ */ new Map(), Hv = /* @__PURE__ */ new Set();
  function En(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Qt = _.d;
  _.d = {
    f: s1,
    r: v1,
    D: y1,
    C: d1,
    L: h1,
    m: o1,
    X: r1,
    S: m1,
    M: S1
  };
  function s1() {
    var l = Qt.f(), t = dn();
    return l || t;
  }
  function v1(l) {
    var t = pu(l);
    t !== null && t.tag === 5 && t.type === "form" ? k0(t) : Qt.r(l);
  }
  var ma = typeof document > "u" ? null : document;
  function Nv(l, t, u) {
    var a = ma;
    if (a && typeof t == "string" && t) {
      var e = ut(t);
      e = 'link[rel="' + l + '"][href="' + e + '"]', typeof u == "string" && (e += '[crossorigin="' + u + '"]'), Hv.has(e) || (Hv.add(e), l = { rel: l, crossOrigin: u, href: t }, a.querySelector(e) === null && (t = a.createElement("link"), _l(t, "link", l), bl(t), a.head.appendChild(t)));
    }
  }
  function y1(l) {
    Qt.D(l), Nv("dns-prefetch", l, null);
  }
  function d1(l, t) {
    Qt.C(l, t), Nv("preconnect", l, t);
  }
  function h1(l, t, u) {
    Qt.L(l, t, u);
    var a = ma;
    if (a && l && t) {
      var e = 'link[rel="preload"][as="' + ut(t) + '"]';
      t === "image" && u && u.imageSrcSet ? (e += '[imagesrcset="' + ut(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (e += '[imagesizes="' + ut(
        u.imageSizes
      ) + '"]')) : e += '[href="' + ut(l) + '"]';
      var n = e;
      switch (t) {
        case "style":
          n = ra(l);
          break;
        case "script":
          n = Sa(l);
      }
      st.has(n) || (l = R(
        {
          rel: "preload",
          href: t === "image" && u && u.imageSrcSet ? void 0 : l,
          as: t
        },
        u
      ), st.set(n, l), a.querySelector(e) !== null || t === "style" && a.querySelector(ce(n)) || t === "script" && a.querySelector(ie(n)) || (t = a.createElement("link"), _l(t, "link", l), bl(t), a.head.appendChild(t)));
    }
  }
  function o1(l, t) {
    Qt.m(l, t);
    var u = ma;
    if (u && l) {
      var a = t && typeof t.as == "string" ? t.as : "script", e = 'link[rel="modulepreload"][as="' + ut(a) + '"][href="' + ut(l) + '"]', n = e;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Sa(l);
      }
      if (!st.has(n) && (l = R({ rel: "modulepreload", href: l }, t), st.set(n, l), u.querySelector(e) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(ie(n)))
              return;
        }
        a = u.createElement("link"), _l(a, "link", l), bl(a), u.head.appendChild(a);
      }
    }
  }
  function m1(l, t, u) {
    Qt.S(l, t, u);
    var a = ma;
    if (a && l) {
      var e = Gu(a).hoistableStyles, n = ra(l);
      t = t || "default";
      var f = e.get(n);
      if (!f) {
        var c = { loading: 0, preload: null };
        if (f = a.querySelector(
          ce(n)
        ))
          c.loading = 5;
        else {
          l = R(
            { rel: "stylesheet", href: l, "data-precedence": t },
            u
          ), (u = st.get(n)) && jc(l, u);
          var i = f = a.createElement("link");
          bl(i), _l(i, "link", l), i._p = new Promise(function(h, S) {
            i.onload = h, i.onerror = S;
          }), i.addEventListener("load", function() {
            c.loading |= 1;
          }), i.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, An(f, t, a);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: c
        }, e.set(n, f);
      }
    }
  }
  function r1(l, t) {
    Qt.X(l, t);
    var u = ma;
    if (u && l) {
      var a = Gu(u).hoistableScripts, e = Sa(l), n = a.get(e);
      n || (n = u.querySelector(ie(e)), n || (l = R({ src: l, async: !0 }, t), (t = st.get(e)) && Cc(l, t), n = u.createElement("script"), bl(n), _l(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(e, n));
    }
  }
  function S1(l, t) {
    Qt.M(l, t);
    var u = ma;
    if (u && l) {
      var a = Gu(u).hoistableScripts, e = Sa(l), n = a.get(e);
      n || (n = u.querySelector(ie(e)), n || (l = R({ src: l, async: !0, type: "module" }, t), (t = st.get(e)) && Cc(l, t), n = u.createElement("script"), bl(n), _l(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(e, n));
    }
  }
  function qv(l, t, u, a) {
    var e = (e = G.current) ? En(e) : null;
    if (!e) throw Error(r(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (t = ra(u.href), u = Gu(
          e
        ).hoistableStyles, a = u.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = ra(u.href);
          var n = Gu(
            e
          ).hoistableStyles, f = n.get(l);
          if (f || (e = e.ownerDocument || e, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(l, f), (n = e.querySelector(
            ce(l)
          )) && !n._p && (f.instance = n, f.state.loading = 5), st.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, st.set(l, u), n || g1(
            e,
            l,
            u,
            f.state
          ))), t && a === null)
            throw Error(r(528, ""));
          return f;
        }
        if (t && a !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return t = u.async, u = u.src, typeof u == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Sa(u), u = Gu(
          e
        ).hoistableScripts, a = u.get(t), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, l));
    }
  }
  function ra(l) {
    return 'href="' + ut(l) + '"';
  }
  function ce(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Yv(l) {
    return R({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function g1(l, t, u, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = l.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), _l(t, "link", u), bl(t), l.head.appendChild(t));
  }
  function Sa(l) {
    return '[src="' + ut(l) + '"]';
  }
  function ie(l) {
    return "script[async]" + l;
  }
  function Bv(l, t, u) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = l.querySelector(
            'style[data-href~="' + ut(u.href) + '"]'
          );
          if (a)
            return t.instance = a, bl(a), a;
          var e = R({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return a = (l.ownerDocument || l).createElement(
            "style"
          ), bl(a), _l(a, "style", e), An(a, u.precedence, l), t.instance = a;
        case "stylesheet":
          e = ra(u.href);
          var n = l.querySelector(
            ce(e)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, bl(n), n;
          a = Yv(u), (e = st.get(e)) && jc(a, e), n = (l.ownerDocument || l).createElement("link"), bl(n);
          var f = n;
          return f._p = new Promise(function(c, i) {
            f.onload = c, f.onerror = i;
          }), _l(n, "link", a), t.state.loading |= 4, An(n, u.precedence, l), t.instance = n;
        case "script":
          return n = Sa(u.src), (e = l.querySelector(
            ie(n)
          )) ? (t.instance = e, bl(e), e) : (a = u, (e = st.get(n)) && (a = R({}, u), Cc(a, e)), l = l.ownerDocument || l, e = l.createElement("script"), bl(e), _l(e, "link", a), l.head.appendChild(e), t.instance = e);
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, An(a, u.precedence, l));
    return t.instance;
  }
  function An(l, t, u) {
    for (var a = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), e = a.length ? a[a.length - 1] : null, n = e, f = 0; f < a.length; f++) {
      var c = a[f];
      if (c.dataset.precedence === t) n = c;
      else if (n !== e) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = u.nodeType === 9 ? u.head : u, t.insertBefore(l, t.firstChild));
  }
  function jc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function Cc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var zn = null;
  function pv(l, t, u) {
    if (zn === null) {
      var a = /* @__PURE__ */ new Map(), e = zn = /* @__PURE__ */ new Map();
      e.set(u, a);
    } else
      e = zn, a = e.get(u), a || (a = /* @__PURE__ */ new Map(), e.set(u, a));
    if (a.has(l)) return a;
    for (a.set(l, null), u = u.getElementsByTagName(l), e = 0; e < u.length; e++) {
      var n = u[e];
      if (!(n[Ea] || n[Rl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = n.getAttribute(t) || "";
        f = l + f;
        var c = a.get(f);
        c ? c.push(n) : a.set(f, [n]);
      }
    }
    return a;
  }
  function Gv(l, t, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function b1(l, t, u) {
    if (u === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        switch (t.rel) {
          case "stylesheet":
            return l = t.disabled, typeof t.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function Xv(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  var se = null;
  function T1() {
  }
  function E1(l, t, u) {
    if (se === null) throw Error(r(475));
    var a = se;
    if (t.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var e = ra(u.href), n = l.querySelector(
          ce(e)
        );
        if (n) {
          l = n._p, l !== null && typeof l == "object" && typeof l.then == "function" && (a.count++, a = On.bind(a), l.then(a, a)), t.state.loading |= 4, t.instance = n, bl(n);
          return;
        }
        n = l.ownerDocument || l, u = Yv(u), (e = st.get(e)) && jc(u, e), n = n.createElement("link"), bl(n);
        var f = n;
        f._p = new Promise(function(c, i) {
          f.onload = c, f.onerror = i;
        }), _l(n, "link", u), t.instance = n;
      }
      a.stylesheets === null && (a.stylesheets = /* @__PURE__ */ new Map()), a.stylesheets.set(t, l), (l = t.state.preload) && (t.state.loading & 3) === 0 && (a.count++, t = On.bind(a), l.addEventListener("load", t), l.addEventListener("error", t));
    }
  }
  function A1() {
    if (se === null) throw Error(r(475));
    var l = se;
    return l.stylesheets && l.count === 0 && Vc(l, l.stylesheets), 0 < l.count ? function(t) {
      var u = setTimeout(function() {
        if (l.stylesheets && Vc(l, l.stylesheets), l.unsuspend) {
          var a = l.unsuspend;
          l.unsuspend = null, a();
        }
      }, 6e4);
      return l.unsuspend = t, function() {
        l.unsuspend = null, clearTimeout(u);
      };
    } : null;
  }
  function On() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Vc(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var _n = null;
  function Vc(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, _n = /* @__PURE__ */ new Map(), t.forEach(z1, l), _n = null, On.call(l));
  }
  function z1(l, t) {
    if (!(t.state.loading & 4)) {
      var u = _n.get(l);
      if (u) var a = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), _n.set(l, u);
        for (var e = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < e.length; n++) {
          var f = e[n];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (u.set(f.dataset.precedence, f), a = f);
        }
        a && u.set(null, a);
      }
      e = t.instance, f = e.getAttribute("data-precedence"), n = u.get(f) || a, n === a && u.set(null, e), u.set(f, e), this.count++, a = On.bind(this), e.addEventListener("load", a), e.addEventListener("error", a), n ? n.parentNode.insertBefore(e, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(e, l.firstChild)), t.state.loading |= 4;
    }
  }
  var ve = {
    $$typeof: Ml,
    Provider: null,
    Consumer: null,
    _currentValue: B,
    _currentValue2: B,
    _threadCount: 0
  };
  function O1(l, t, u, a, e, n, f, c) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Qn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Qn(0), this.hiddenUpdates = Qn(null), this.identifierPrefix = a, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Qv(l, t, u, a, e, n, f, c, i, h, S, T) {
    return l = new O1(
      l,
      t,
      u,
      f,
      c,
      i,
      h,
      T
    ), t = 1, n === !0 && (t |= 24), n = $l(3, null, null, t), l.current = n, n.stateNode = l, t = Of(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: a,
      isDehydrated: u,
      cache: t
    }, Uf(n), l;
  }
  function xv(l) {
    return l ? (l = Wu, l) : Wu;
  }
  function Zv(l, t, u, a, e, n) {
    e = xv(e), a.context === null ? a.context = e : a.pendingContext = e, a = Kt(t), a.payload = { element: u }, n = n === void 0 ? null : n, n !== null && (a.callback = n), u = Jt(l, a, t), u !== null && (lt(u, l, t), Za(u, l, t));
  }
  function jv(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < t ? u : t;
    }
  }
  function Lc(l, t) {
    jv(l, t), (l = l.alternate) && jv(l, t);
  }
  function Cv(l) {
    if (l.tag === 13) {
      var t = wu(l, 67108864);
      t !== null && lt(t, l, 67108864), Lc(l, 67108864);
    }
  }
  var Mn = !0;
  function _1(l, t, u, a) {
    var e = g.T;
    g.T = null;
    var n = _.p;
    try {
      _.p = 2, Kc(l, t, u, a);
    } finally {
      _.p = n, g.T = e;
    }
  }
  function M1(l, t, u, a) {
    var e = g.T;
    g.T = null;
    var n = _.p;
    try {
      _.p = 8, Kc(l, t, u, a);
    } finally {
      _.p = n, g.T = e;
    }
  }
  function Kc(l, t, u, a) {
    if (Mn) {
      var e = Jc(a);
      if (e === null)
        qc(
          l,
          t,
          a,
          Dn,
          u
        ), Lv(l, a);
      else if (U1(
        e,
        l,
        t,
        u,
        a
      ))
        a.stopPropagation();
      else if (Lv(l, a), t & 4 && -1 < D1.indexOf(l)) {
        for (; e !== null; ) {
          var n = pu(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var f = ou(n.pendingLanes);
                  if (f !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; f; ) {
                      var i = 1 << 31 - wl(f);
                      c.entanglements[1] |= i, f &= ~i;
                    }
                    Et(n), (W & 6) === 0 && (vn = rt() + 500, ae(0));
                  }
                }
                break;
              case 13:
                c = wu(n, 2), c !== null && lt(c, n, 2), dn(), Lc(n, 2);
            }
          if (n = Jc(a), n === null && qc(
            l,
            t,
            a,
            Dn,
            u
          ), n === e) break;
          e = n;
        }
        e !== null && a.stopPropagation();
      } else
        qc(
          l,
          t,
          a,
          null,
          u
        );
    }
  }
  function Jc(l) {
    return l = kn(l), wc(l);
  }
  var Dn = null;
  function wc(l) {
    if (Dn = null, l = Bu(l), l !== null) {
      var t = sl(l);
      if (t === null) l = null;
      else {
        var u = t.tag;
        if (u === 13) {
          if (l = rl(t), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return Dn = l, null;
  }
  function Vv(l) {
    switch (l) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (dy()) {
          case ai:
            return 2;
          case ei:
            return 8;
          case ge:
          case hy:
            return 32;
          case ni:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Wc = !1, nu = null, fu = null, cu = null, ye = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), iu = [], D1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Lv(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        nu = null;
        break;
      case "dragenter":
      case "dragleave":
        fu = null;
        break;
      case "mouseover":
      case "mouseout":
        cu = null;
        break;
      case "pointerover":
      case "pointerout":
        ye.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        de.delete(t.pointerId);
    }
  }
  function he(l, t, u, a, e, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: t,
      domEventName: u,
      eventSystemFlags: a,
      nativeEvent: n,
      targetContainers: [e]
    }, t !== null && (t = pu(t), t !== null && Cv(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, e !== null && t.indexOf(e) === -1 && t.push(e), l);
  }
  function U1(l, t, u, a, e) {
    switch (t) {
      case "focusin":
        return nu = he(
          nu,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "dragenter":
        return fu = he(
          fu,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "mouseover":
        return cu = he(
          cu,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "pointerover":
        var n = e.pointerId;
        return ye.set(
          n,
          he(
            ye.get(n) || null,
            l,
            t,
            u,
            a,
            e
          )
        ), !0;
      case "gotpointercapture":
        return n = e.pointerId, de.set(
          n,
          he(
            de.get(n) || null,
            l,
            t,
            u,
            a,
            e
          )
        ), !0;
    }
    return !1;
  }
  function Kv(l) {
    var t = Bu(l.target);
    if (t !== null) {
      var u = sl(t);
      if (u !== null) {
        if (t = u.tag, t === 13) {
          if (t = rl(u), t !== null) {
            l.blockedOn = t, Ey(l.priority, function() {
              if (u.tag === 13) {
                var a = Pl();
                a = xn(a);
                var e = wu(u, a);
                e !== null && lt(e, u, a), Lc(u, a);
              }
            });
            return;
          }
        } else if (t === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Un(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var u = Jc(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var a = new u.constructor(
          u.type,
          u
        );
        $n = a, u.target.dispatchEvent(a), $n = null;
      } else
        return t = pu(u), t !== null && Cv(t), l.blockedOn = u, !1;
      t.shift();
    }
    return !0;
  }
  function Jv(l, t, u) {
    Un(l) && u.delete(t);
  }
  function R1() {
    Wc = !1, nu !== null && Un(nu) && (nu = null), fu !== null && Un(fu) && (fu = null), cu !== null && Un(cu) && (cu = null), ye.forEach(Jv), de.forEach(Jv);
  }
  function Rn(l, t) {
    l.blockedOn === t && (l.blockedOn = null, Wc || (Wc = !0, z.unstable_scheduleCallback(
      z.unstable_NormalPriority,
      R1
    )));
  }
  var Hn = null;
  function wv(l) {
    Hn !== l && (Hn = l, z.unstable_scheduleCallback(
      z.unstable_NormalPriority,
      function() {
        Hn === l && (Hn = null);
        for (var t = 0; t < l.length; t += 3) {
          var u = l[t], a = l[t + 1], e = l[t + 2];
          if (typeof a != "function") {
            if (wc(a || u) === null)
              continue;
            break;
          }
          var n = pu(u);
          n !== null && (l.splice(t, 3), t -= 3, wf(
            n,
            {
              pending: !0,
              data: e,
              method: u.method,
              action: a
            },
            a,
            e
          ));
        }
      }
    ));
  }
  function oe(l) {
    function t(i) {
      return Rn(i, l);
    }
    nu !== null && Rn(nu, l), fu !== null && Rn(fu, l), cu !== null && Rn(cu, l), ye.forEach(t), de.forEach(t);
    for (var u = 0; u < iu.length; u++) {
      var a = iu[u];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < iu.length && (u = iu[0], u.blockedOn === null); )
      Kv(u), u.blockedOn === null && iu.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (a = 0; a < u.length; a += 3) {
        var e = u[a], n = u[a + 1], f = e[Xl] || null;
        if (typeof n == "function")
          f || wv(u);
        else if (f) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (e = n, f = n[Xl] || null)
              c = f.formAction;
            else if (wc(e) !== null) continue;
          } else c = f.action;
          typeof c == "function" ? u[a + 1] = c : (u.splice(a, 3), a -= 3), wv(u);
        }
      }
  }
  function $c(l) {
    this._internalRoot = l;
  }
  Nn.prototype.render = $c.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(r(409));
    var u = t.current, a = Pl();
    Zv(u, a, l, t, null, null);
  }, Nn.prototype.unmount = $c.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      Zv(l.current, 2, null, l, null, null), dn(), t[Yu] = null;
    }
  };
  function Nn(l) {
    this._internalRoot = l;
  }
  Nn.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = vi();
      l = { blockedOn: null, target: l, priority: t };
      for (var u = 0; u < iu.length && t !== 0 && t < iu[u].priority; u++) ;
      iu.splice(u, 0, l), u === 0 && Kv(l);
    }
  };
  var Wv = ul.version;
  if (Wv !== "19.1.0")
    throw Error(
      r(
        527,
        Wv,
        "19.1.0"
      )
    );
  _.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(r(188)) : (l = Object.keys(l).join(","), Error(r(268, l)));
    return l = H(t), l = l !== null ? A(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var H1 = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: g,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var qn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!qn.isDisabled && qn.supportsFiber)
      try {
        ga = qn.inject(
          H1
        ), Jl = qn;
      } catch {
      }
  }
  return me.createRoot = function(l, t) {
    if (!P(l)) throw Error(r(299));
    var u = !1, a = "", e = vs, n = ys, f = ds, c = null;
    return t != null && (t.unstable_strictMode === !0 && (u = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (e = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (c = t.unstable_transitionCallbacks)), t = Qv(
      l,
      1,
      !1,
      null,
      null,
      u,
      a,
      e,
      n,
      f,
      c,
      null
    ), l[Yu] = t.current, Nc(l), new $c(t);
  }, me.hydrateRoot = function(l, t, u) {
    if (!P(l)) throw Error(r(299));
    var a = !1, e = "", n = vs, f = ys, c = ds, i = null, h = null;
    return u != null && (u.unstable_strictMode === !0 && (a = !0), u.identifierPrefix !== void 0 && (e = u.identifierPrefix), u.onUncaughtError !== void 0 && (n = u.onUncaughtError), u.onCaughtError !== void 0 && (f = u.onCaughtError), u.onRecoverableError !== void 0 && (c = u.onRecoverableError), u.unstable_transitionCallbacks !== void 0 && (i = u.unstable_transitionCallbacks), u.formState !== void 0 && (h = u.formState)), t = Qv(
      l,
      1,
      !0,
      t,
      u ?? null,
      a,
      e,
      n,
      f,
      c,
      i,
      h
    ), t.context = xv(null), u = t.current, a = Pl(), a = xn(a), e = Kt(a), e.callback = null, Jt(u, e, a), u = a, t.current.lanes = u, Ta(t, u), Et(t), l[Yu] = t.current, Nc(l), new Nn(t);
  }, me.version = "19.1.0", me;
}
var uy;
function Q1() {
  if (uy) return Fc.exports;
  uy = 1;
  function z() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z);
      } catch (ul) {
        console.error(ul);
      }
  }
  return z(), Fc.exports = X1(), Fc.exports;
}
var x1 = Q1();
const cy = /* @__PURE__ */ ny(x1);
var ti = { exports: {} }, re = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ay;
function Z1() {
  if (ay) return re;
  ay = 1;
  var z = Symbol.for("react.transitional.element"), ul = Symbol.for("react.fragment");
  function V(r, P, sl) {
    var rl = null;
    if (sl !== void 0 && (rl = "" + sl), P.key !== void 0 && (rl = "" + P.key), "key" in P) {
      sl = {};
      for (var ql in P)
        ql !== "key" && (sl[ql] = P[ql]);
    } else sl = P;
    return P = sl.ref, {
      $$typeof: z,
      type: r,
      key: rl,
      ref: P !== void 0 ? P : null,
      props: sl
    };
  }
  return re.Fragment = ul, re.jsx = V, re.jsxs = V, re;
}
var ey;
function j1() {
  return ey || (ey = 1, ti.exports = Z1()), ti.exports;
}
var vu = j1();
function C1({ questionData: z, responseData: ul, onResponseChange: V }) {
  const [r, P] = Yn.useState("");
  return Yn.useEffect(() => {
    ul ? P(ul.code || "") : z != null && z.initialCode && P(z.initialCode);
  }, [z, ul]), Yn.useEffect(() => {
    V && V({ code: r });
  }, [r]), /* @__PURE__ */ vu.jsxs("div", { className: "bg-white rounded-lg shadow p-4 space-y-4", children: [
    /* @__PURE__ */ vu.jsx("div", { className: "text-gray-800", children: /* @__PURE__ */ vu.jsx(
      "div",
      {
        className: "prose",
        dangerouslySetInnerHTML: { __html: (z == null ? void 0 : z.prompt) || "<p>Loading prompt...</p>" }
      }
    ) }),
    /* @__PURE__ */ vu.jsx("div", { className: "bg-blue p-4", children: "Student View" })
  ] });
}
function V1({ questionData: z, onChange: ul }) {
  return /* @__PURE__ */ vu.jsxs("div", { className: "bg-gray-50 border p-4 rounded", children: [
    /* @__PURE__ */ vu.jsx("h4", { className: "text-lg font-bold mb-2", children: "Instructor Editor" }),
    /* @__PURE__ */ vu.jsx("p", { className: "text-sm text-gray-600", children: "This will be the instructor view for configuring the question." }),
    /* @__PURE__ */ vu.jsx(
      "textarea",
      {
        className: "w-full mt-2 p-2 border rounded font-mono text-sm",
        placeholder: "Starter code...",
        value: (z == null ? void 0 : z.initialCode) || "",
        readOnly: !0
      }
    )
  ] });
}
let iy = {}, sy = {};
function J1(z) {
  return JSON.stringify(iy[z.id] || { code: "" });
}
function w1(z) {
  return sy[z.id] || {};
}
console.log("✅ circuitpython.js loaded and not tree-shaken");
const L1 = (z, ul, V) => {
  const r = z.querySelector("#circuitpython-root"), P = (rl) => {
    iy[z.id] = rl;
  };
  cy.createRoot(r).render(
    fy.createElement(C1, {
      questionData: ul,
      responseData: V,
      onResponseChange: P
    })
  );
};
function K1(z, ul) {
  const V = z.querySelector("#circuitpython-root"), r = (sl) => {
    sy[z.id] = sl;
  };
  cy.createRoot(V).render(
    fy.createElement(V1, {
      questionData: ul,
      onChange: r
    })
  );
}
console.log("Exports:", {
  CircuitPythonStudentUI: L1,
  CircuitPythonInstructorUI: K1
});
export {
  K1 as CircuitPythonInstructorUI,
  L1 as CircuitPythonStudentUI,
  w1 as getQuestionEditorData,
  J1 as getResponse
};
//# sourceMappingURL=circuitpython.js.map
