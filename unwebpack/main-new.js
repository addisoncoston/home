"use strict"
if (typeof exports === 'undefined') {
  var exports = {};
};

function D0(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i && Object.defineProperty(e, o, i.get ? i : {
            enumerable: !0,
            get: () => r[o]
          })
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
    value: "Module"
  }))
}

function fm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var pm = {
    exports: {}
  },
  ja = {},
  hm = {
    exports: {}
  },
  he = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gi = Symbol.for("react.element"),
  z0 = Symbol.for("react.portal"),
  B0 = Symbol.for("react.fragment"),
  V0 = Symbol.for("react.strict_mode"),
  F0 = Symbol.for("react.profiler"),
  U0 = Symbol.for("react.provider"),
  W0 = Symbol.for("react.context"),
  j0 = Symbol.for("react.forward_ref"),
  H0 = Symbol.for("react.suspense"),
  K0 = Symbol.for("react.memo"),
  G0 = Symbol.for("react.lazy"),
  Bf = Symbol.iterator;

function q0(e) {
  return e === null || typeof e != "object" ? null : (e = Bf && e[Bf] || e["@@iterator"], typeof e == "function" ? e : null)
}
var mm = {
    isMounted: function() {
      return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
  },
  vm = Object.assign,
  gm = {};

function No(e, t, n) {
  this.props = e, this.context = t, this.refs = gm, this.updater = n || mm
}
No.prototype.isReactComponent = {};
No.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState")
};
No.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function ym() {}
ym.prototype = No.prototype;

function rd(e, t, n) {
  this.props = e, this.context = t, this.refs = gm, this.updater = n || mm
}
var od = rd.prototype = new ym;
od.constructor = rd;
vm(od, No.prototype);
od.isPureReactComponent = !0;
var Vf = Array.isArray,
  Sm = Object.prototype.hasOwnProperty,
  id = {
    current: null
  },
  wm = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };

function _m(e, t, n) {
  var r, o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (i = "" + t.key), t) Sm.call(t, r) && !wm.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    o.children = l
  }
  if (e && e.defaultProps)
    for (r in a = e.defaultProps, a) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: Gi,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: id.current
  }
}

function Y0(e, t) {
  return {
    $$typeof: Gi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner
  }
}

function sd(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Gi
}

function Q0(e) {
  var t = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n]
  })
}
var Ff = /\/+/g;

function su(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Q0("" + e.key) : t.toString(36)
}

function Ks(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else switch (i) {
    case "string":
    case "number":
      s = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case Gi:
        case z0:
          s = !0
      }
  }
  if (s) return s = e, o = o(s), e = r === "" ? "." + su(s, 0) : r, Vf(o) ? (n = "", e != null && (n = e.replace(Ff, "$&/") + "/"), Ks(o, t, n, "", function(u) {
    return u
  })) : o != null && (sd(o) && (o = Y0(o, n + (!o.key || s && s.key === o.key ? "" : ("" + o.key).replace(Ff, "$&/") + "/") + e)), t.push(o)), 1;
  if (s = 0, r = r === "" ? "." : r + ":", Vf(e))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var l = r + su(i, a);
      s += Ks(i, t, n, l, o)
    } else if (l = q0(e), typeof l == "function")
      for (e = l.call(e), a = 0; !(i = e.next()).done;) i = i.value, l = r + su(i, a++), s += Ks(i, t, n, l, o);
    else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return s
}

function ys(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return Ks(e, r, "", "", function(i) {
    return t.call(n, i, o++)
  }), r
}

function X0(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
    }), e._status === -1 && (e._status = 0, e._result = t)
  }
  if (e._status === 1) return e._result.default;
  throw e._result
}
var vt = {
    current: null
  },
  Gs = {
    transition: null
  },
  Z0 = {
    ReactCurrentDispatcher: vt,
    ReactCurrentBatchConfig: Gs,
    ReactCurrentOwner: id
  };
he.Children = {
  map: ys,
  forEach: function(e, t, n) {
    ys(e, function() {
      t.apply(this, arguments)
    }, n)
  },
  count: function(e) {
    var t = 0;
    return ys(e, function() {
      t++
    }), t
  },
  toArray: function(e) {
    return ys(e, function(t) {
      return t
    }) || []
  },
  only: function(e) {
    if (!sd(e)) throw Error("React.Children.only expected to receive a single React element child.");
    return e
  }
};
he.Component = No;
he.Fragment = B0;
he.Profiler = F0;
he.PureComponent = rd;
he.StrictMode = V0;
he.Suspense = H0;
he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Z0;
he.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = vm({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, s = id.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var a = e.type.defaultProps;
    for (l in t) Sm.call(t, l) && !wm.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a
  }
  return {
    $$typeof: Gi,
    type: e.type,
    key: o,
    ref: i,
    props: r,
    _owner: s
  }
};
he.createContext = function(e) {
  return e = {
    $$typeof: W0,
    _currentValue: e,
    _currentValue2: e,
    _threadCount: 0,
    Provider: null,
    Consumer: null,
    _defaultValue: null,
    _globalName: null
  }, e.Provider = {
    $$typeof: U0,
    _context: e
  }, e.Consumer = e
};
he.createElement = _m;
he.createFactory = function(e) {
  var t = _m.bind(null, e);
  return t.type = e, t
};
he.createRef = function() {
  return {
    current: null
  }
};
he.forwardRef = function(e) {
  return {
    $$typeof: j0,
    render: e
  }
};
he.isValidElement = sd;
he.lazy = function(e) {
  return {
    $$typeof: G0,
    _payload: {
      _status: -1,
      _result: e
    },
    _init: X0
  }
};
he.memo = function(e, t) {
  return {
    $$typeof: K0,
    type: e,
    compare: t === void 0 ? null : t
  }
};
he.startTransition = function(e) {
  var t = Gs.transition;
  Gs.transition = {};
  try {
    e()
  } finally {
    Gs.transition = t
  }
};
he.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.")
};
he.useCallback = function(e, t) {
  return vt.current.useCallback(e, t)
};
he.useContext = function(e) {
  return vt.current.useContext(e)
};
he.useDebugValue = function() {};
he.useDeferredValue = function(e) {
  return vt.current.useDeferredValue(e)
};
he.useEffect = function(e, t) {
  return vt.current.useEffect(e, t)
};
he.useId = function() {
  return vt.current.useId()
};
he.useImperativeHandle = function(e, t, n) {
  return vt.current.useImperativeHandle(e, t, n)
};
he.useInsertionEffect = function(e, t) {
  return vt.current.useInsertionEffect(e, t)
};
he.useLayoutEffect = function(e, t) {
  return vt.current.useLayoutEffect(e, t)
};
he.useMemo = function(e, t) {
  return vt.current.useMemo(e, t)
};
he.useReducer = function(e, t, n) {
  return vt.current.useReducer(e, t, n)
};
he.useRef = function(e) {
  return vt.current.useRef(e)
};
he.useState = function(e) {
  return vt.current.useState(e)
};
he.useSyncExternalStore = function(e, t, n) {
  return vt.current.useSyncExternalStore(e, t, n)
};
he.useTransition = function() {
  return vt.current.useTransition()
};
he.version = "18.2.0";
hm.exports = he;
var k = hm.exports;
const ge = fm(k),
  Uf = D0({
    __proto__: null,
    default: ge
  }, [k]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var J0 = k,
  e1 = Symbol.for("react.element"),
  t1 = Symbol.for("react.fragment"),
  n1 = Object.prototype.hasOwnProperty,
  r1 = J0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  o1 = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };

function xm(e, t, n) {
  var r, o = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (s = t.ref);
  for (r in t) n1.call(t, r) && !o1.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: e1,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: r1.current
  }
}
ja.Fragment = t1;
ja.jsx = xm;
ja.jsxs = xm;
pm.exports = ja;
var ad = pm.exports;
const i1 = ad.Fragment,
  I = ad.jsx,
  De = ad.jsxs;
var ju = {},
  Rm = {
    exports: {}
  },
  It = {},
  Em = {
    exports: {}
  },
  bm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t($, V) {
    var z = $.length;
    $.push(V);
    e: for (; 0 < z;) {
      var K = z - 1 >>> 1,
        E = $[K];
      if (0 < o(E, V)) $[K] = V, $[z] = E, z = K;
      else break e
    }
  }

  function n($) {
    return $.length === 0 ? null : $[0]
  }

  function r($) {
    if ($.length === 0) return null;
    var V = $[0],
      z = $.pop();
    if (z !== V) {
      $[0] = z;
      e: for (var K = 0, E = $.length, D = E >>> 1; K < D;) {
        var L = 2 * (K + 1) - 1,
          Q = $[L],
          P = L + 1,
          X = $[P];
        if (0 > o(Q, z)) P < E && 0 > o(X, Q) ? ($[K] = X, $[P] = z, K = P) : ($[K] = Q, $[L] = z, K = L);
        else if (P < E && 0 > o(X, z)) $[K] = X, $[P] = z, K = P;
        else break e
      }
    }
    return V
  }

  function o($, V) {
    var z = $.sortIndex - V.sortIndex;
    return z !== 0 ? z : $.id - V.id
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now()
    }
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function() {
      return s.now() - a
    }
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    p = 3,
    y = !1,
    h = !1,
    v = !1,
    N = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

  function m($) {
    for (var V = n(u); V !== null;) {
      if (V.callback === null) r(u);
      else if (V.startTime <= $) r(u), V.sortIndex = V.expirationTime, t(l, V);
      else break;
      V = n(u)
    }
  }

  function S($) {
    if (v = !1, m($), !h)
      if (n(l) !== null) h = !0, J(x);
      else {
        var V = n(u);
        V !== null && ee(S, V.startTime - $)
      }
  }

  function x($, V) {
    h = !1, v && (v = !1, g(A), A = -1), y = !0;
    var z = p;
    try {
      for (m(V), d = n(l); d !== null && (!(d.expirationTime > V) || $ && !W());) {
        var K = d.callback;
        if (typeof K == "function") {
          d.callback = null, p = d.priorityLevel;
          var E = K(d.expirationTime <= V);
          V = e.unstable_now(), typeof E == "function" ? d.callback = E : d === n(l) && r(l), m(V)
        } else r(l);
        d = n(l)
      }
      if (d !== null) var D = !0;
      else {
        var L = n(u);
        L !== null && ee(S, L.startTime - V), D = !1
      }
      return D
    } finally {
      d = null, p = z, y = !1
    }
  }
  var C = !1,
    R = null,
    A = -1,
    B = 5,
    T = -1;

  function W() {
    return !(e.unstable_now() - T < B)
  }

  function Z() {
    if (R !== null) {
      var $ = e.unstable_now();
      T = $;
      var V = !0;
      try {
        V = R(!0, $)
      } finally {
        V ? Y() : (C = !1, R = null)
      }
    } else C = !1
  }
  var Y;
  if (typeof f == "function") Y = function() {
    f(Z)
  };
  else if (typeof MessageChannel < "u") {
    var H = new MessageChannel,
      ie = H.port2;
    H.port1.onmessage = Z, Y = function() {
      ie.postMessage(null)
    }
  } else Y = function() {
    N(Z, 0)
  };

  function J($) {
    R = $, C || (C = !0, Y())
  }

  function ee($, V) {
    A = N(function() {
      $(e.unstable_now())
    }, V)
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function($) {
    $.callback = null
  }, e.unstable_continueExecution = function() {
    h || y || (h = !0, J(x))
  }, e.unstable_forceFrameRate = function($) {
    0 > $ || 125 < $ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : B = 0 < $ ? Math.floor(1e3 / $) : 5
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p
  }, e.unstable_getFirstCallbackNode = function() {
    return n(l)
  }, e.unstable_next = function($) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var V = 3;
        break;
      default:
        V = p
    }
    var z = p;
    p = V;
    try {
      return $()
    } finally {
      p = z
    }
  }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function($, V) {
    switch ($) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        $ = 3
    }
    var z = p;
    p = $;
    try {
      return V()
    } finally {
      p = z
    }
  }, e.unstable_scheduleCallback = function($, V, z) {
    var K = e.unstable_now();
    switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? K + z : K) : z = K, $) {
      case 1:
        var E = -1;
        break;
      case 2:
        E = 250;
        break;
      case 5:
        E = 1073741823;
        break;
      case 4:
        E = 1e4;
        break;
      default:
        E = 5e3
    }
    return E = z + E, $ = {
      id: c++,
      callback: V,
      priorityLevel: $,
      startTime: z,
      expirationTime: E,
      sortIndex: -1
    }, z > K ? ($.sortIndex = z, t(u, $), n(l) === null && $ === n(u) && (v ? (g(A), A = -1) : v = !0, ee(S, z - K))) : ($.sortIndex = E, t(l, $), h || y || (h = !0, J(x))), $
  }, e.unstable_shouldYield = W, e.unstable_wrapCallback = function($) {
    var V = p;
    return function() {
      var z = p;
      p = V;
      try {
        return $.apply(this, arguments)
      } finally {
        p = z
      }
    }
  }
})(bm);
Em.exports = bm;
var s1 = Em.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var km = k,
  Lt = s1;

function O(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Cm = new Set,
  Ei = {};

function br(e, t) {
  po(e, t), po(e + "Capture", t)
}

function po(e, t) {
  for (Ei[e] = t, e = 0; e < t.length; e++) Cm.add(t[e])
}
var bn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
  Hu = Object.prototype.hasOwnProperty,
  a1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Wf = {},
  jf = {};

function l1(e) {
  return Hu.call(jf, e) ? !0 : Hu.call(Wf, e) ? !1 : a1.test(e) ? jf[e] = !0 : (Wf[e] = !0, !1)
}

function u1(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1
  }
}

function c1(e, t, n, r) {
  if (t === null || typeof t > "u" || u1(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t
  }
  return !1
}

function gt(e, t, n, r, o, i, s) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = s
}
var st = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  st[e] = new gt(e, 0, !1, e, null, !1, !1)
});
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"]
].forEach(function(e) {
  var t = e[0];
  st[t] = new gt(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  st[e] = new gt(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  st[e] = new gt(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  st[e] = new gt(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  st[e] = new gt(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
  st[e] = new gt(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
  st[e] = new gt(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
  st[e] = new gt(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var ld = /[\-:]([a-z])/g;

function ud(e) {
  return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(ld, ud);
  st[t] = new gt(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(ld, ud);
  st[t] = new gt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(ld, ud);
  st[t] = new gt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  st[e] = new gt(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
st.xlinkHref = new gt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  st[e] = new gt(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function cd(e, t, n, r) {
  var o = st.hasOwnProperty(t) ? st[t] : null;
  (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (c1(t, n, o, r) && (n = null), r || o === null ? l1(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var $n = km.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ss = Symbol.for("react.element"),
  jr = Symbol.for("react.portal"),
  Hr = Symbol.for("react.fragment"),
  dd = Symbol.for("react.strict_mode"),
  Ku = Symbol.for("react.profiler"),
  Tm = Symbol.for("react.provider"),
  Nm = Symbol.for("react.context"),
  fd = Symbol.for("react.forward_ref"),
  Gu = Symbol.for("react.suspense"),
  qu = Symbol.for("react.suspense_list"),
  pd = Symbol.for("react.memo"),
  Mn = Symbol.for("react.lazy"),
  $m = Symbol.for("react.offscreen"),
  Hf = Symbol.iterator;

function Vo(e) {
  return e === null || typeof e != "object" ? null : (e = Hf && e[Hf] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Be = Object.assign,
  au;

function ni(e) {
  if (au === void 0) try {
    throw Error()
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    au = t && t[1] || ""
  }
  return `
` + au + e
}
var lu = !1;

function uu(e, t) {
  if (!e || lu) return "";
  lu = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (t = function() {
          throw Error()
        }, Object.defineProperty(t.prototype, "props", {
          set: function() {
            throw Error()
          }
        }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, [])
        } catch (u) {
          var r = u
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (u) {
          r = u
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (u) {
        r = u
      }
      e()
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (var o = u.stack.split(`
`), i = r.stack.split(`
`), s = o.length - 1, a = i.length - 1; 1 <= s && 0 <= a && o[s] !== i[a];) a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (o[s] !== i[a]) {
          if (s !== 1 || a !== 1)
            do
              if (s--, a--, 0 > a || o[s] !== i[a]) {
                var l = `
` + o[s].replace(" at new ", " at ");
                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l
              } while (1 <= s && 0 <= a);
          break
        }
    }
  } finally {
    lu = !1, Error.prepareStackTrace = n
  }
  return (e = e ? e.displayName || e.name : "") ? ni(e) : ""
}

function d1(e) {
  switch (e.tag) {
    case 5:
      return ni(e.type);
    case 16:
      return ni("Lazy");
    case 13:
      return ni("Suspense");
    case 19:
      return ni("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = uu(e.type, !1), e;
    case 11:
      return e = uu(e.type.render, !1), e;
    case 1:
      return e = uu(e.type, !0), e;
    default:
      return ""
  }
}

function Yu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Hr:
      return "Fragment";
    case jr:
      return "Portal";
    case Ku:
      return "Profiler";
    case dd:
      return "StrictMode";
    case Gu:
      return "Suspense";
    case qu:
      return "SuspenseList"
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Nm:
      return (e.displayName || "Context") + ".Consumer";
    case Tm:
      return (e._context.displayName || "Context") + ".Provider";
    case fd:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case pd:
      return t = e.displayName || null, t !== null ? t : Yu(e.type) || "Memo";
    case Mn:
      t = e._payload, e = e._init;
      try {
        return Yu(e(t))
      } catch {}
  }
  return null
}

function f1(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Yu(t);
    case 8:
      return t === dd ? "StrictMode" : "Mode";
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
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t
  }
  return null
}

function Xn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return ""
  }
}

function Pm(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function p1(e) {
  var t = Pm(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get,
      i = n.set;
    return Object.defineProperty(e, t, {
      configurable: !0,
      get: function() {
        return o.call(this)
      },
      set: function(s) {
        r = "" + s, i.call(this, s)
      }
    }), Object.defineProperty(e, t, {
      enumerable: n.enumerable
    }), {
      getValue: function() {
        return r
      },
      setValue: function(s) {
        r = "" + s
      },
      stopTracking: function() {
        e._valueTracker = null, delete e[t]
      }
    }
  }
}

function ws(e) {
  e._valueTracker || (e._valueTracker = p1(e))
}

function Am(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return e && (r = Pm(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function ca(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}

function Qu(e, t) {
  var n = t.checked;
  return Be({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n != null ? n : e._wrapperState.initialChecked
  })
}

function Kf(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  n = Xn(t.value != null ? t.value : n), e._wrapperState = {
    initialChecked: r,
    initialValue: n,
    controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
  }
}

function Lm(e, t) {
  t = t.checked, t != null && cd(e, "checked", t, !1)
}

function Xu(e, t) {
  Lm(e, t);
  var n = Xn(t.value),
    r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return
  }
  t.hasOwnProperty("value") ? Zu(e, t.type, n) : t.hasOwnProperty("defaultValue") && Zu(e, t.type, Xn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Gf(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function Zu(e, t, n) {
  (t !== "number" || ca(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var ri = Array.isArray;

function ro(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0)
  } else {
    for (n = "" + Xn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return
      }
      t !== null || e[o].disabled || (t = e[o])
    }
    t !== null && (t.selected = !0)
  }
}

function Ju(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(O(91));
  return Be({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue
  })
}

function qf(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(O(92));
      if (ri(n)) {
        if (1 < n.length) throw Error(O(93));
        n = n[0]
      }
      t = n
    }
    t == null && (t = ""), n = t
  }
  e._wrapperState = {
    initialValue: Xn(n)
  }
}

function Im(e, t) {
  var n = Xn(t.value),
    r = Xn(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function Yf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function Mm(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml"
  }
}

function ec(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Mm(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var _s, Om = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o)
    })
  } : e
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (_s = _s || document.createElement("div"), _s.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = _s.firstChild; e.firstChild;) e.removeChild(e.firstChild);
    for (; t.firstChild;) e.appendChild(t.firstChild)
  }
});

function bi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return
    }
  }
  e.textContent = t
}
var ui = {
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
  },
  h1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(ui).forEach(function(e) {
  h1.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), ui[t] = ui[e]
  })
});

function Dm(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || ui.hasOwnProperty(e) && ui[e] ? ("" + t).trim() : t + "px"
}

function zm(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = Dm(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o
    }
}
var m1 = Be({
  menuitem: !0
}, {
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
});

function tc(e, t) {
  if (t) {
    if (m1[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(O(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(O(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(O(61))
    }
    if (t.style != null && typeof t.style != "object") throw Error(O(62))
  }
}

function nc(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
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
      return !0
  }
}
var rc = null;

function hd(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var oc = null,
  oo = null,
  io = null;

function Qf(e) {
  if (e = Qi(e)) {
    if (typeof oc != "function") throw Error(O(280));
    var t = e.stateNode;
    t && (t = Ya(t), oc(e.stateNode, e.type, t))
  }
}

function Bm(e) {
  oo ? io ? io.push(e) : io = [e] : oo = e
}

function Vm() {
  if (oo) {
    var e = oo,
      t = io;
    if (io = oo = null, Qf(e), t)
      for (e = 0; e < t.length; e++) Qf(t[e])
  }
}

function Fm(e, t) {
  return e(t)
}

function Um() {}
var cu = !1;

function Wm(e, t, n) {
  if (cu) return e(t, n);
  cu = !0;
  try {
    return Fm(e, t, n)
  } finally {
    cu = !1, (oo !== null || io !== null) && (Um(), Vm())
  }
}

function ki(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ya(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
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
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(O(231, t, typeof n));
  return n
}
var ic = !1;
if (bn) try {
  var Fo = {};
  Object.defineProperty(Fo, "passive", {
    get: function() {
      ic = !0
    }
  }), window.addEventListener("test", Fo, Fo), window.removeEventListener("test", Fo, Fo)
} catch {
  ic = !1
}

function v1(e, t, n, r, o, i, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u)
  } catch (c) {
    this.onError(c)
  }
}
var ci = !1,
  da = null,
  fa = !1,
  sc = null,
  g1 = {
    onError: function(e) {
      ci = !0, da = e
    }
  };

function y1(e, t, n, r, o, i, s, a, l) {
  ci = !1, da = null, v1.apply(g1, arguments)
}

function S1(e, t, n, r, o, i, s, a, l) {
  if (y1.apply(this, arguments), ci) {
    if (ci) {
      var u = da;
      ci = !1, da = null
    } else throw Error(O(198));
    fa || (fa = !0, sc = u)
  }
}

function kr(e) {
  var t = e,
    n = e;
  if (e.alternate)
    for (; t.return;) t = t.return;
  else {
    e = t;
    do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
  }
  return t.tag === 3 ? n : null
}

function jm(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
  }
  return null
}

function Xf(e) {
  if (kr(e) !== e) throw Error(O(188))
}

function w1(e) {
  var t = e.alternate;
  if (!t) {
    if (t = kr(e), t === null) throw Error(O(188));
    return t !== e ? null : e
  }
  for (var n = e, r = t;;) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (r = o.return, r !== null) {
        n = r;
        continue
      }
      break
    }
    if (o.child === i.child) {
      for (i = o.child; i;) {
        if (i === n) return Xf(o), e;
        if (i === r) return Xf(o), t;
        i = i.sibling
      }
      throw Error(O(188))
    }
    if (n.return !== r.return) n = o, r = i;
    else {
      for (var s = !1, a = o.child; a;) {
        if (a === n) {
          s = !0, n = o, r = i;
          break
        }
        if (a === r) {
          s = !0, r = o, n = i;
          break
        }
        a = a.sibling
      }
      if (!s) {
        for (a = i.child; a;) {
          if (a === n) {
            s = !0, n = i, r = o;
            break
          }
          if (a === r) {
            s = !0, r = i, n = o;
            break
          }
          a = a.sibling
        }
        if (!s) throw Error(O(189))
      }
    }
    if (n.alternate !== r) throw Error(O(190))
  }
  if (n.tag !== 3) throw Error(O(188));
  return n.stateNode.current === n ? e : t
}

function Hm(e) {
  return e = w1(e), e !== null ? Km(e) : null
}

function Km(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null;) {
    var t = Km(e);
    if (t !== null) return t;
    e = e.sibling
  }
  return null
}
var Gm = Lt.unstable_scheduleCallback,
  Zf = Lt.unstable_cancelCallback,
  _1 = Lt.unstable_shouldYield,
  x1 = Lt.unstable_requestPaint,
  We = Lt.unstable_now,
  R1 = Lt.unstable_getCurrentPriorityLevel,
  md = Lt.unstable_ImmediatePriority,
  qm = Lt.unstable_UserBlockingPriority,
  pa = Lt.unstable_NormalPriority,
  E1 = Lt.unstable_LowPriority,
  Ym = Lt.unstable_IdlePriority,
  Ha = null,
  cn = null;

function b1(e) {
  if (cn && typeof cn.onCommitFiberRoot == "function") try {
    cn.onCommitFiberRoot(Ha, e, void 0, (e.current.flags & 128) === 128)
  } catch {}
}
var Xt = Math.clz32 ? Math.clz32 : T1,
  k1 = Math.log,
  C1 = Math.LN2;

function T1(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (k1(e) / C1 | 0) | 0
}
var xs = 64,
  Rs = 4194304;

function oi(e) {
  switch (e & -e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e
  }
}

function ha(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~o;
    a !== 0 ? r = oi(a) : (i &= s, i !== 0 && (r = oi(i)))
  } else s = n & ~o, s !== 0 ? r = oi(s) : i !== 0 && (r = oi(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
    for (e = e.entanglements, t &= r; 0 < t;) n = 31 - Xt(t), o = 1 << n, r |= e[n], t &= ~o;
  return r
}

function N1(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
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
      return t + 5e3;
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
      return -1
  }
}

function $1(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
    var s = 31 - Xt(i),
      a = 1 << s,
      l = o[s];
    l === -1 ? (!(a & n) || a & r) && (o[s] = N1(a, t)) : l <= t && (e.expiredLanes |= a), i &= ~a
  }
}

function ac(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function Qm() {
  var e = xs;
  return xs <<= 1, !(xs & 4194240) && (xs = 64), e
}

function du(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t
}

function qi(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Xt(t), e[t] = n
}

function P1(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n;) {
    var o = 31 - Xt(n),
      i = 1 << o;
    t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i
  }
}

function vd(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n;) {
    var r = 31 - Xt(n),
      o = 1 << r;
    o & t | e[r] & t && (e[r] |= t), n &= ~o
  }
}
var Ee = 0;

function Xm(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Zm, gd, Jm, ev, tv, lc = !1,
  Es = [],
  Un = null,
  Wn = null,
  jn = null,
  Ci = new Map,
  Ti = new Map,
  zn = [],
  A1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Jf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Un = null;
      break;
    case "dragenter":
    case "dragleave":
      Wn = null;
      break;
    case "mouseover":
    case "mouseout":
      jn = null;
      break;
    case "pointerover":
    case "pointerout":
      Ci.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ti.delete(t.pointerId)
  }
}

function Uo(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = {
    blockedOn: t,
    domEventName: n,
    eventSystemFlags: r,
    nativeEvent: i,
    targetContainers: [o]
  }, t !== null && (t = Qi(t), t !== null && gd(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e)
}

function L1(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return Un = Uo(Un, e, t, n, r, o), !0;
    case "dragenter":
      return Wn = Uo(Wn, e, t, n, r, o), !0;
    case "mouseover":
      return jn = Uo(jn, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return Ci.set(i, Uo(Ci.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, Ti.set(i, Uo(Ti.get(i) || null, e, t, n, r, o)), !0
  }
  return !1
}

function nv(e) {
  var t = dr(e.target);
  if (t !== null) {
    var n = kr(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = jm(n), t !== null) {
          e.blockedOn = t, tv(e.priority, function() {
            Jm(n)
          });
          return
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return
      }
    }
  }
  e.blockedOn = null
}

function qs(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length;) {
    var n = uc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      rc = r, n.target.dispatchEvent(r), rc = null
    } else return t = Qi(n), t !== null && gd(t), e.blockedOn = n, !1;
    t.shift()
  }
  return !0
}

function ep(e, t, n) {
  qs(e) && n.delete(t)
}

function I1() {
  lc = !1, Un !== null && qs(Un) && (Un = null), Wn !== null && qs(Wn) && (Wn = null), jn !== null && qs(jn) && (jn = null), Ci.forEach(ep), Ti.forEach(ep)
}

function Wo(e, t) {
  e.blockedOn === t && (e.blockedOn = null, lc || (lc = !0, Lt.unstable_scheduleCallback(Lt.unstable_NormalPriority, I1)))
}

function Ni(e) {
  function t(o) {
    return Wo(o, e)
  }
  if (0 < Es.length) {
    Wo(Es[0], e);
    for (var n = 1; n < Es.length; n++) {
      var r = Es[n];
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (Un !== null && Wo(Un, e), Wn !== null && Wo(Wn, e), jn !== null && Wo(jn, e), Ci.forEach(t), Ti.forEach(t), n = 0; n < zn.length; n++) r = zn[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < zn.length && (n = zn[0], n.blockedOn === null);) nv(n), n.blockedOn === null && zn.shift()
}
var so = $n.ReactCurrentBatchConfig,
  ma = !0;

function M1(e, t, n, r) {
  var o = Ee,
    i = so.transition;
  so.transition = null;
  try {
    Ee = 1, yd(e, t, n, r)
  } finally {
    Ee = o, so.transition = i
  }
}

function O1(e, t, n, r) {
  var o = Ee,
    i = so.transition;
  so.transition = null;
  try {
    Ee = 4, yd(e, t, n, r)
  } finally {
    Ee = o, so.transition = i
  }
}

function yd(e, t, n, r) {
  if (ma) {
    var o = uc(e, t, n, r);
    if (o === null) _u(e, t, r, va, n), Jf(e, r);
    else if (L1(o, e, t, n, r)) r.stopPropagation();
    else if (Jf(e, r), t & 4 && -1 < A1.indexOf(e)) {
      for (; o !== null;) {
        var i = Qi(o);
        if (i !== null && Zm(i), i = uc(e, t, n, r), i === null && _u(e, t, r, va, n), i === o) break;
        o = i
      }
      o !== null && r.stopPropagation()
    } else _u(e, t, r, null, n)
  }
}
var va = null;

function uc(e, t, n, r) {
  if (va = null, e = hd(r), e = dr(e), e !== null)
    if (t = kr(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
    if (e = jm(t), e !== null) return e;
    e = null
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null
  } else t !== e && (e = null);
  return va = e, null
}

function rv(e) {
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
      switch (R1()) {
        case md:
          return 1;
        case qm:
          return 4;
        case pa:
        case E1:
          return 16;
        case Ym:
          return 536870912;
        default:
          return 16
      }
    default:
      return 16
  }
}
var Vn = null,
  Sd = null,
  Ys = null;

function ov() {
  if (Ys) return Ys;
  var e, t = Sd,
    n = t.length,
    r, o = "value" in Vn ? Vn.value : Vn.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return Ys = o.slice(e, 1 < r ? 1 - r : void 0)
}

function Qs(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function bs() {
  return !0
}

function tp() {
  return !1
}

function Mt(e) {
  function t(n, r, o, i, s) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = s, this.currentTarget = null;
    for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(i) : i[a]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? bs : tp, this.isPropagationStopped = tp, this
  }
  return Be(t.prototype, {
    preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = bs)
    },
    stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = bs)
    },
    persist: function() {},
    isPersistent: bs
  }), t
}
var $o = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
  },
  wd = Mt($o),
  Yi = Be({}, $o, {
    view: 0,
    detail: 0
  }),
  D1 = Mt(Yi),
  fu, pu, jo, Ka = Be({}, Yi, {
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
    getModifierState: _d,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== jo && (jo && e.type === "mousemove" ? (fu = e.screenX - jo.screenX, pu = e.screenY - jo.screenY) : pu = fu = 0, jo = e), fu)
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : pu
    }
  }),
  np = Mt(Ka),
  z1 = Be({}, Ka, {
    dataTransfer: 0
  }),
  B1 = Mt(z1),
  V1 = Be({}, Yi, {
    relatedTarget: 0
  }),
  hu = Mt(V1),
  F1 = Be({}, $o, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }),
  U1 = Mt(F1),
  W1 = Be({}, $o, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData
    }
  }),
  j1 = Mt(W1),
  H1 = Be({}, $o, {
    data: 0
  }),
  rp = Mt(H1),
  K1 = {
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
  },
  G1 = {
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
  },
  q1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };

function Y1(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = q1[e]) ? !!t[e] : !1
}

function _d() {
  return Y1
}
var Q1 = Be({}, Yi, {
    key: function(e) {
      if (e.key) {
        var t = K1[e.key] || e.key;
        if (t !== "Unidentified") return t
      }
      return e.type === "keypress" ? (e = Qs(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? G1[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: _d,
    charCode: function(e) {
      return e.type === "keypress" ? Qs(e) : 0
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
      return e.type === "keypress" ? Qs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
  }),
  X1 = Mt(Q1),
  Z1 = Be({}, Ka, {
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
  }),
  op = Mt(Z1),
  J1 = Be({}, Yi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: _d
  }),
  eS = Mt(J1),
  tS = Be({}, $o, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }),
  nS = Mt(tS),
  rS = Be({}, Ka, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
  }),
  oS = Mt(rS),
  iS = [9, 13, 27, 32],
  xd = bn && "CompositionEvent" in window,
  di = null;
bn && "documentMode" in document && (di = document.documentMode);
var sS = bn && "TextEvent" in window && !di,
  iv = bn && (!xd || di && 8 < di && 11 >= di),
  ip = String.fromCharCode(32),
  sp = !1;

function sv(e, t) {
  switch (e) {
    case "keyup":
      return iS.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1
  }
}

function av(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var Kr = !1;

function aS(e, t) {
  switch (e) {
    case "compositionend":
      return av(t);
    case "keypress":
      return t.which !== 32 ? null : (sp = !0, ip);
    case "textInput":
      return e = t.data, e === ip && sp ? null : e;
    default:
      return null
  }
}

function lS(e, t) {
  if (Kr) return e === "compositionend" || !xd && sv(e, t) ? (e = ov(), Ys = Sd = Vn = null, Kr = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which)
      }
      return null;
    case "compositionend":
      return iv && t.locale !== "ko" ? null : t.data;
    default:
      return null
  }
}
var uS = {
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

function ap(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!uS[e.type] : t === "textarea"
}

function lv(e, t, n, r) {
  Bm(r), t = ga(t, "onChange"), 0 < t.length && (n = new wd("onChange", "change", null, n, r), e.push({
    event: n,
    listeners: t
  }))
}
var fi = null,
  $i = null;

function cS(e) {
  Sv(e, 0)
}

function Ga(e) {
  var t = Yr(e);
  if (Am(t)) return e
}

function dS(e, t) {
  if (e === "change") return t
}
var uv = !1;
if (bn) {
  var mu;
  if (bn) {
    var vu = "oninput" in document;
    if (!vu) {
      var lp = document.createElement("div");
      lp.setAttribute("oninput", "return;"), vu = typeof lp.oninput == "function"
    }
    mu = vu
  } else mu = !1;
  uv = mu && (!document.documentMode || 9 < document.documentMode)
}

function up() {
  fi && (fi.detachEvent("onpropertychange", cv), $i = fi = null)
}

function cv(e) {
  if (e.propertyName === "value" && Ga($i)) {
    var t = [];
    lv(t, $i, e, hd(e)), Wm(cS, t)
  }
}

function fS(e, t, n) {
  e === "focusin" ? (up(), fi = t, $i = n, fi.attachEvent("onpropertychange", cv)) : e === "focusout" && up()
}

function pS(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ga($i)
}

function hS(e, t) {
  if (e === "click") return Ga(t)
}

function mS(e, t) {
  if (e === "input" || e === "change") return Ga(t)
}

function vS(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var en = typeof Object.is == "function" ? Object.is : vS;

function Pi(e, t) {
  if (en(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Hu.call(t, o) || !en(e[o], t[o])) return !1
  }
  return !0
}

function cp(e) {
  for (; e && e.firstChild;) e = e.firstChild;
  return e
}

function dp(e, t) {
  var n = cp(e);
  e = 0;
  for (var r; n;) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return {
        node: n,
        offset: t - e
      };
      e = r
    }
    e: {
      for (; n;) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e
        }
        n = n.parentNode
      }
      n = void 0
    }
    n = cp(n)
  }
}

function dv(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? dv(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function fv() {
  for (var e = window, t = ca(); t instanceof e.HTMLIFrameElement;) {
    try {
      var n = typeof t.contentWindow.location.href == "string"
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow;
    else break;
    t = ca(e.document)
  }
  return t
}

function Rd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function gS(e) {
  var t = fv(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && dv(n.ownerDocument.documentElement, n)) {
    if (r !== null && Rd(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        r = r.end === void 0 ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = dp(n, i);
        var s = dp(n, r);
        o && s && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)))
      }
    }
    for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
      element: e,
      left: e.scrollLeft,
      top: e.scrollTop
    });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
  }
}
var yS = bn && "documentMode" in document && 11 >= document.documentMode,
  Gr = null,
  cc = null,
  pi = null,
  dc = !1;

function fp(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  dc || Gr == null || Gr !== ca(r) || (r = Gr, "selectionStart" in r && Rd(r) ? r = {
    start: r.selectionStart,
    end: r.selectionEnd
  } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
    anchorNode: r.anchorNode,
    anchorOffset: r.anchorOffset,
    focusNode: r.focusNode,
    focusOffset: r.focusOffset
  }), pi && Pi(pi, r) || (pi = r, r = ga(cc, "onSelect"), 0 < r.length && (t = new wd("onSelect", "select", null, t, n), e.push({
    event: t,
    listeners: r
  }), t.target = Gr)))
}

function ks(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var qr = {
    animationend: ks("Animation", "AnimationEnd"),
    animationiteration: ks("Animation", "AnimationIteration"),
    animationstart: ks("Animation", "AnimationStart"),
    transitionend: ks("Transition", "TransitionEnd")
  },
  gu = {},
  pv = {};
bn && (pv = document.createElement("div").style, "AnimationEvent" in window || (delete qr.animationend.animation, delete qr.animationiteration.animation, delete qr.animationstart.animation), "TransitionEvent" in window || delete qr.transitionend.transition);

function qa(e) {
  if (gu[e]) return gu[e];
  if (!qr[e]) return e;
  var t = qr[e],
    n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in pv) return gu[e] = t[n];
  return e
}
var hv = qa("animationend"),
  mv = qa("animationiteration"),
  vv = qa("animationstart"),
  gv = qa("transitionend"),
  yv = new Map,
  pp = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function Jn(e, t) {
  yv.set(e, t), br(t, [e])
}
for (var yu = 0; yu < pp.length; yu++) {
  var Su = pp[yu],
    SS = Su.toLowerCase(),
    wS = Su[0].toUpperCase() + Su.slice(1);
  Jn(SS, "on" + wS)
}
Jn(hv, "onAnimationEnd");
Jn(mv, "onAnimationIteration");
Jn(vv, "onAnimationStart");
Jn("dblclick", "onDoubleClick");
Jn("focusin", "onFocus");
Jn("focusout", "onBlur");
Jn(gv, "onTransitionEnd");
po("onMouseEnter", ["mouseout", "mouseover"]);
po("onMouseLeave", ["mouseout", "mouseover"]);
po("onPointerEnter", ["pointerout", "pointerover"]);
po("onPointerLeave", ["pointerout", "pointerover"]);
br("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
br("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
br("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
br("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
br("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
br("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ii = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
  _S = new Set("cancel close invalid load scroll toggle".split(" ").concat(ii));

function hp(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, S1(r, t, void 0, e), e.currentTarget = null
}

function Sv(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (a = a.listener, l !== i && o.isPropagationStopped()) break e;
          hp(o, a, u), i = l
        } else
          for (s = 0; s < r.length; s++) {
            if (a = r[s], l = a.instance, u = a.currentTarget, a = a.listener, l !== i && o.isPropagationStopped()) break e;
            hp(o, a, u), i = l
          }
    }
  }
  if (fa) throw e = sc, fa = !1, sc = null, e
}

function Ne(e, t) {
  var n = t[vc];
  n === void 0 && (n = t[vc] = new Set);
  var r = e + "__bubble";
  n.has(r) || (wv(t, e, 2, !1), n.add(r))
}

function wu(e, t, n) {
  var r = 0;
  t && (r |= 4), wv(n, e, r, t)
}
var Cs = "_reactListening" + Math.random().toString(36).slice(2);

function Ai(e) {
  if (!e[Cs]) {
    e[Cs] = !0, Cm.forEach(function(n) {
      n !== "selectionchange" && (_S.has(n) || wu(n, !1, e), wu(n, !0, e))
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Cs] || (t[Cs] = !0, wu("selectionchange", !1, t))
  }
}

function wv(e, t, n, r) {
  switch (rv(t)) {
    case 1:
      var o = M1;
      break;
    case 4:
      o = O1;
      break;
    default:
      o = yd
  }
  n = o.bind(null, t, n, e), o = void 0, !ic || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, {
    capture: !0,
    passive: o
  }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
    passive: o
  }) : e.addEventListener(t, n, !1)
}

function _u(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
    if (r === null) return;
    var s = r.tag;
    if (s === 3 || s === 4) {
      var a = r.stateNode.containerInfo;
      if (a === o || a.nodeType === 8 && a.parentNode === o) break;
      if (s === 4)
        for (s = r.return; s !== null;) {
          var l = s.tag;
          if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo, l === o || l.nodeType === 8 && l.parentNode === o)) return;
          s = s.return
        }
      for (; a !== null;) {
        if (s = dr(a), s === null) return;
        if (l = s.tag, l === 5 || l === 6) {
          r = i = s;
          continue e
        }
        a = a.parentNode
      }
    }
    r = r.return
  }
  Wm(function() {
    var u = i,
      c = hd(n),
      d = [];
    e: {
      var p = yv.get(e);
      if (p !== void 0) {
        var y = wd,
          h = e;
        switch (e) {
          case "keypress":
            if (Qs(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = X1;
            break;
          case "focusin":
            h = "focus", y = hu;
            break;
          case "focusout":
            h = "blur", y = hu;
            break;
          case "beforeblur":
          case "afterblur":
            y = hu;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = np;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = B1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = eS;
            break;
          case hv:
          case mv:
          case vv:
            y = U1;
            break;
          case gv:
            y = nS;
            break;
          case "scroll":
            y = D1;
            break;
          case "wheel":
            y = oS;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = j1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = op
        }
        var v = (t & 4) !== 0,
          N = !v && e === "scroll",
          g = v ? p !== null ? p + "Capture" : null : p;
        v = [];
        for (var f = u, m; f !== null;) {
          m = f;
          var S = m.stateNode;
          if (m.tag === 5 && S !== null && (m = S, g !== null && (S = ki(f, g), S != null && v.push(Li(f, S, m)))), N) break;
          f = f.return
        }
        0 < v.length && (p = new y(p, h, null, n, c), d.push({
          event: p,
          listeners: v
        }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", p && n !== rc && (h = n.relatedTarget || n.fromElement) && (dr(h) || h[kn])) break e;
        if ((y || p) && (p = c.window === c ? c : (p = c.ownerDocument) ? p.defaultView || p.parentWindow : window, y ? (h = n.relatedTarget || n.toElement, y = u, h = h ? dr(h) : null, h !== null && (N = kr(h), h !== N || h.tag !== 5 && h.tag !== 6) && (h = null)) : (y = null, h = u), y !== h)) {
          if (v = np, S = "onMouseLeave", g = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (v = op, S = "onPointerLeave", g = "onPointerEnter", f = "pointer"), N = y == null ? p : Yr(y), m = h == null ? p : Yr(h), p = new v(S, f + "leave", y, n, c), p.target = N, p.relatedTarget = m, S = null, dr(c) === u && (v = new v(g, f + "enter", h, n, c), v.target = m, v.relatedTarget = N, S = v), N = S, y && h) t: {
            for (v = y, g = h, f = 0, m = v; m; m = Ar(m)) f++;
            for (m = 0, S = g; S; S = Ar(S)) m++;
            for (; 0 < f - m;) v = Ar(v),
            f--;
            for (; 0 < m - f;) g = Ar(g),
            m--;
            for (; f--;) {
              if (v === g || g !== null && v === g.alternate) break t;
              v = Ar(v), g = Ar(g)
            }
            v = null
          }
          else v = null;
          y !== null && mp(d, p, y, v, !1), h !== null && N !== null && mp(d, N, h, v, !0)
        }
      }
      e: {
        if (p = u ? Yr(u) : window, y = p.nodeName && p.nodeName.toLowerCase(), y === "select" || y === "input" && p.type === "file") var x = dS;
        else if (ap(p))
          if (uv) x = mS;
          else {
            x = pS;
            var C = fS
          }
        else(y = p.nodeName) && y.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (x = hS);
        if (x && (x = x(e, u))) {
          lv(d, x, n, c);
          break e
        }
        C && C(e, p, u),
        e === "focusout" && (C = p._wrapperState) && C.controlled && p.type === "number" && Zu(p, "number", p.value)
      }
      switch (C = u ? Yr(u) : window, e) {
        case "focusin":
          (ap(C) || C.contentEditable === "true") && (Gr = C, cc = u, pi = null);
          break;
        case "focusout":
          pi = cc = Gr = null;
          break;
        case "mousedown":
          dc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          dc = !1, fp(d, n, c);
          break;
        case "selectionchange":
          if (yS) break;
        case "keydown":
        case "keyup":
          fp(d, n, c)
      }
      var R;
      if (xd) e: {
        switch (e) {
          case "compositionstart":
            var A = "onCompositionStart";
            break e;
          case "compositionend":
            A = "onCompositionEnd";
            break e;
          case "compositionupdate":
            A = "onCompositionUpdate";
            break e
        }
        A = void 0
      }
      else Kr ? sv(e, n) && (A = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (A = "onCompositionStart");A && (iv && n.locale !== "ko" && (Kr || A !== "onCompositionStart" ? A === "onCompositionEnd" && Kr && (R = ov()) : (Vn = c, Sd = "value" in Vn ? Vn.value : Vn.textContent, Kr = !0)), C = ga(u, A), 0 < C.length && (A = new rp(A, e, null, n, c), d.push({
        event: A,
        listeners: C
      }), R ? A.data = R : (R = av(n), R !== null && (A.data = R)))),
      (R = sS ? aS(e, n) : lS(e, n)) && (u = ga(u, "onBeforeInput"), 0 < u.length && (c = new rp("onBeforeInput", "beforeinput", null, n, c), d.push({
        event: c,
        listeners: u
      }), c.data = R))
    }
    Sv(d, t)
  })
}

function Li(e, t, n) {
  return {
    instance: e,
    listener: t,
    currentTarget: n
  }
}

function ga(e, t) {
  for (var n = t + "Capture", r = []; e !== null;) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = ki(e, n), i != null && r.unshift(Li(e, i, o)), i = ki(e, t), i != null && r.push(Li(e, i, o))), e = e.return
  }
  return r
}

function Ar(e) {
  if (e === null) return null;
  do e = e.return; while (e && e.tag !== 5);
  return e || null
}

function mp(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r;) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 && u !== null && (a = u, o ? (l = ki(n, i), l != null && s.unshift(Li(n, l, a))) : o || (l = ki(n, i), l != null && s.push(Li(n, l, a)))), n = n.return
  }
  s.length !== 0 && e.push({
    event: t,
    listeners: s
  })
}
var xS = /\r\n?/g,
  RS = /\u0000|\uFFFD/g;

function vp(e) {
  return (typeof e == "string" ? e : "" + e).replace(xS, `
`).replace(RS, "")
}

function Ts(e, t, n) {
  if (t = vp(t), vp(e) !== t && n) throw Error(O(425))
}

function ya() {}
var fc = null,
  pc = null;

function hc(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var mc = typeof setTimeout == "function" ? setTimeout : void 0,
  ES = typeof clearTimeout == "function" ? clearTimeout : void 0,
  gp = typeof Promise == "function" ? Promise : void 0,
  bS = typeof queueMicrotask == "function" ? queueMicrotask : typeof gp < "u" ? function(e) {
    return gp.resolve(null).then(e).catch(kS)
  } : mc;

function kS(e) {
  setTimeout(function() {
    throw e
  })
}

function xu(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if (e.removeChild(n), o && o.nodeType === 8)
      if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), Ni(t);
          return
        }
        r--
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = o
  } while (n);
  Ni(t)
}

function Hn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null
    }
  }
  return e
}

function yp(e) {
  e = e.previousSibling;
  for (var t = 0; e;) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--
      } else n === "/$" && t++
    }
    e = e.previousSibling
  }
  return null
}
var Po = Math.random().toString(36).slice(2),
  an = "__reactFiber$" + Po,
  Ii = "__reactProps$" + Po,
  kn = "__reactContainer$" + Po,
  vc = "__reactEvents$" + Po,
  CS = "__reactListeners$" + Po,
  TS = "__reactHandles$" + Po;

function dr(e) {
  var t = e[an];
  if (t) return t;
  for (var n = e.parentNode; n;) {
    if (t = n[kn] || n[an]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
        for (e = yp(e); e !== null;) {
          if (n = e[an]) return n;
          e = yp(e)
        }
      return t
    }
    e = n, n = e.parentNode
  }
  return null
}

function Qi(e) {
  return e = e[an] || e[kn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function Yr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(O(33))
}

function Ya(e) {
  return e[Ii] || null
}
var gc = [],
  Qr = -1;

function er(e) {
  return {
    current: e
  }
}

function Pe(e) {
  0 > Qr || (e.current = gc[Qr], gc[Qr] = null, Qr--)
}

function Te(e, t) {
  Qr++, gc[Qr] = e.current, e.current = t
}
var Zn = {},
  dt = er(Zn),
  xt = er(!1),
  gr = Zn;

function ho(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Zn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
}

function Rt(e) {
  return e = e.childContextTypes, e != null
}

function Sa() {
  Pe(xt), Pe(dt)
}

function Sp(e, t, n) {
  if (dt.current !== Zn) throw Error(O(168));
  Te(dt, t), Te(xt, n)
}

function _v(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r)
    if (!(o in t)) throw Error(O(108, f1(e) || "Unknown", o));
  return Be({}, n, r)
}

function wa(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Zn, gr = dt.current, Te(dt, e), Te(xt, xt.current), !0
}

function wp(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(O(169));
  n ? (e = _v(e, t, gr), r.__reactInternalMemoizedMergedChildContext = e, Pe(xt), Pe(dt), Te(dt, e)) : Pe(xt), Te(xt, n)
}
var yn = null,
  Qa = !1,
  Ru = !1;

function xv(e) {
  yn === null ? yn = [e] : yn.push(e)
}

function NS(e) {
  Qa = !0, xv(e)
}

function tr() {
  if (!Ru && yn !== null) {
    Ru = !0;
    var e = 0,
      t = Ee;
    try {
      var n = yn;
      for (Ee = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0); while (r !== null)
      }
      yn = null, Qa = !1
    } catch (o) {
      throw yn !== null && (yn = yn.slice(e + 1)), Gm(md, tr), o
    } finally {
      Ee = t, Ru = !1
    }
  }
  return null
}
var Xr = [],
  Zr = 0,
  _a = null,
  xa = 0,
  Bt = [],
  Vt = 0,
  yr = null,
  wn = 1,
  _n = "";

function sr(e, t) {
  Xr[Zr++] = xa, Xr[Zr++] = _a, _a = e, xa = t
}

function Rv(e, t, n) {
  Bt[Vt++] = wn, Bt[Vt++] = _n, Bt[Vt++] = yr, yr = e;
  var r = wn;
  e = _n;
  var o = 32 - Xt(r) - 1;
  r &= ~(1 << o), n += 1;
  var i = 32 - Xt(t) + o;
  if (30 < i) {
    var s = o - o % 5;
    i = (r & (1 << s) - 1).toString(32), r >>= s, o -= s, wn = 1 << 32 - Xt(t) + o | n << o | r, _n = i + e
  } else wn = 1 << i | n << o | r, _n = e
}

function Ed(e) {
  e.return !== null && (sr(e, 1), Rv(e, 1, 0))
}

function bd(e) {
  for (; e === _a;) _a = Xr[--Zr], Xr[Zr] = null, xa = Xr[--Zr], Xr[Zr] = null;
  for (; e === yr;) yr = Bt[--Vt], Bt[Vt] = null, _n = Bt[--Vt], Bt[Vt] = null, wn = Bt[--Vt], Bt[Vt] = null
}
var Pt = null,
  $t = null,
  Ie = !1,
  Qt = null;

function Ev(e, t) {
  var n = Ft(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function _p(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Pt = e, $t = Hn(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Pt = e, $t = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = yr !== null ? {
        id: wn,
        overflow: _n
      } : null, e.memoizedState = {
        dehydrated: t,
        treeContext: n,
        retryLane: 1073741824
      }, n = Ft(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Pt = e, $t = null, !0) : !1;
    default:
      return !1
  }
}

function yc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function Sc(e) {
  if (Ie) {
    var t = $t;
    if (t) {
      var n = t;
      if (!_p(e, t)) {
        if (yc(e)) throw Error(O(418));
        t = Hn(n.nextSibling);
        var r = Pt;
        t && _p(e, t) ? Ev(r, n) : (e.flags = e.flags & -4097 | 2, Ie = !1, Pt = e)
      }
    } else {
      if (yc(e)) throw Error(O(418));
      e.flags = e.flags & -4097 | 2, Ie = !1, Pt = e
    }
  }
}

function xp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
  Pt = e
}

function Ns(e) {
  if (e !== Pt) return !1;
  if (!Ie) return xp(e), Ie = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !hc(e.type, e.memoizedProps)), t && (t = $t)) {
    if (yc(e)) throw bv(), Error(O(418));
    for (; t;) Ev(e, t), t = Hn(t.nextSibling)
  }
  if (xp(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(O(317));
    e: {
      for (e = e.nextSibling, t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              $t = Hn(e.nextSibling);
              break e
            }
            t--
          } else n !== "$" && n !== "$!" && n !== "$?" || t++
        }
        e = e.nextSibling
      }
      $t = null
    }
  } else $t = Pt ? Hn(e.stateNode.nextSibling) : null;
  return !0
}

function bv() {
  for (var e = $t; e;) e = Hn(e.nextSibling)
}

function mo() {
  $t = Pt = null, Ie = !1
}

function kd(e) {
  Qt === null ? Qt = [e] : Qt.push(e)
}
var $S = $n.ReactCurrentBatchConfig;

function qt(e, t) {
  if (e && e.defaultProps) {
    t = Be({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t
  }
  return t
}
var Ra = er(null),
  Ea = null,
  Jr = null,
  Cd = null;

function Td() {
  Cd = Jr = Ea = null
}

function Nd(e) {
  var t = Ra.current;
  Pe(Ra), e._currentValue = t
}

function wc(e, t, n) {
  for (; e !== null;) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return
  }
}

function ao(e, t) {
  Ea = e, Cd = Jr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (_t = !0), e.firstContext = null)
}

function Wt(e) {
  var t = e._currentValue;
  if (Cd !== e)
    if (e = {
        context: e,
        memoizedValue: t,
        next: null
      }, Jr === null) {
      if (Ea === null) throw Error(O(308));
      Jr = e, Ea.dependencies = {
        lanes: 0,
        firstContext: e
      }
    } else Jr = Jr.next = e;
  return t
}
var fr = null;

function $d(e) {
  fr === null ? fr = [e] : fr.push(e)
}

function kv(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? (n.next = n, $d(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Cn(e, r)
}

function Cn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null
}
var On = !1;

function Pd(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: {
      pending: null,
      interleaved: null,
      lanes: 0
    },
    effects: null
  }
}

function Cv(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
    baseState: e.baseState,
    firstBaseUpdate: e.firstBaseUpdate,
    lastBaseUpdate: e.lastBaseUpdate,
    shared: e.shared,
    effects: e.effects
  })
}

function Rn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null
  }
}

function Kn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, ye & 2) {
    var o = r.pending;
    return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Cn(e, n)
  }
  return o = r.interleaved, o === null ? (t.next = t, $d(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Cn(e, n)
}

function Xs(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, vd(e, n)
  }
}

function Rp(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null,
      i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null
        };
        i === null ? o = i = s : i = i.next = s, n = n.next
      } while (n !== null);
      i === null ? o = i = t : i = i.next = t
    } else o = i = t;
    n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects
    }, e.updateQueue = n;
    return
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function ba(e, t, n, r) {
  var o = e.updateQueue;
  On = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var l = a,
      u = l.next;
    l.next = null, s === null ? i = u : s.next = u, s = l;
    var c = e.alternate;
    c !== null && (c = c.updateQueue, a = c.lastBaseUpdate, a !== s && (a === null ? c.firstBaseUpdate = u : a.next = u, c.lastBaseUpdate = l))
  }
  if (i !== null) {
    var d = o.baseState;
    s = 0, c = u = l = null, a = i;
    do {
      var p = a.lane,
        y = a.eventTime;
      if ((r & p) === p) {
        c !== null && (c = c.next = {
          eventTime: y,
          lane: 0,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null
        });
        e: {
          var h = e,
            v = a;
          switch (p = t, y = n, v.tag) {
            case 1:
              if (h = v.payload, typeof h == "function") {
                d = h.call(y, d, p);
                break e
              }
              d = h;
              break e;
            case 3:
              h.flags = h.flags & -65537 | 128;
            case 0:
              if (h = v.payload, p = typeof h == "function" ? h.call(y, d, p) : h, p == null) break e;
              d = Be({}, d, p);
              break e;
            case 2:
              On = !0
          }
        }
        a.callback !== null && a.lane !== 0 && (e.flags |= 64, p = o.effects, p === null ? o.effects = [a] : p.push(a))
      } else y = {
        eventTime: y,
        lane: p,
        tag: a.tag,
        payload: a.payload,
        callback: a.callback,
        next: null
      }, c === null ? (u = c = y, l = d) : c = c.next = y, s |= p;
      if (a = a.next, a === null) {
        if (a = o.shared.pending, a === null) break;
        p = a, a = p.next, p.next = null, o.lastBaseUpdate = p, o.shared.pending = null
      }
    } while (1);
    if (c === null && (l = d), o.baseState = l, o.firstBaseUpdate = u, o.lastBaseUpdate = c, t = o.shared.interleaved, t !== null) {
      o = t;
      do s |= o.lane, o = o.next; while (o !== t)
    } else i === null && (o.shared.lanes = 0);
    wr |= s, e.lanes = s, e.memoizedState = d
  }
}

function Ep(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null)
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (r.callback = null, r = n, typeof o != "function") throw Error(O(191, o));
        o.call(r)
      }
    }
}
var Tv = new km.Component().refs;

function _c(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Be({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Xa = {
  isMounted: function(e) {
    return (e = e._reactInternals) ? kr(e) === e : !1
  },
  enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = mt(),
      o = qn(e),
      i = Rn(r, o);
    i.payload = t, n != null && (i.callback = n), t = Kn(e, i, o), t !== null && (Zt(t, e, o, r), Xs(t, e, o))
  },
  enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = mt(),
      o = qn(e),
      i = Rn(r, o);
    i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Kn(e, i, o), t !== null && (Zt(t, e, o, r), Xs(t, e, o))
  },
  enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = mt(),
      r = qn(e),
      o = Rn(n, r);
    o.tag = 2, t != null && (o.callback = t), t = Kn(e, o, r), t !== null && (Zt(t, e, r, n), Xs(t, e, r))
  }
};

function bp(e, t, n, r, o, i, s) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, s) : t.prototype && t.prototype.isPureReactComponent ? !Pi(n, r) || !Pi(o, i) : !0
}

function Nv(e, t, n) {
  var r = !1,
    o = Zn,
    i = t.contextType;
  return typeof i == "object" && i !== null ? i = Wt(i) : (o = Rt(t) ? gr : dt.current, r = t.contextTypes, i = (r = r != null) ? ho(e, o) : Zn), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Xa, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t
}

function kp(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Xa.enqueueReplaceState(t, t.state, null)
}

function xc(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = Tv, Pd(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = Wt(i) : (i = Rt(t) ? gr : dt.current, o.context = ho(e, i)), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (_c(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Xa.enqueueReplaceState(o, o.state, null), ba(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}

function Ho(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(O(309));
        var r = n.stateNode
      }
      if (!r) throw Error(O(147, e));
      var o = r,
        i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(s) {
        var a = o.refs;
        a === Tv && (a = o.refs = {}), s === null ? delete a[i] : a[i] = s
      }, t._stringRef = i, t)
    }
    if (typeof e != "string") throw Error(O(284));
    if (!n._owner) throw Error(O(290, e))
  }
  return e
}

function $s(e, t) {
  throw e = Object.prototype.toString.call(t), Error(O(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function Cp(e) {
  var t = e._init;
  return t(e._payload)
}

function $v(e) {
  function t(g, f) {
    if (e) {
      var m = g.deletions;
      m === null ? (g.deletions = [f], g.flags |= 16) : m.push(f)
    }
  }

  function n(g, f) {
    if (!e) return null;
    for (; f !== null;) t(g, f), f = f.sibling;
    return null
  }

  function r(g, f) {
    for (g = new Map; f !== null;) f.key !== null ? g.set(f.key, f) : g.set(f.index, f), f = f.sibling;
    return g
  }

  function o(g, f) {
    return g = Yn(g, f), g.index = 0, g.sibling = null, g
  }

  function i(g, f, m) {
    return g.index = m, e ? (m = g.alternate, m !== null ? (m = m.index, m < f ? (g.flags |= 2, f) : m) : (g.flags |= 2, f)) : (g.flags |= 1048576, f)
  }

  function s(g) {
    return e && g.alternate === null && (g.flags |= 2), g
  }

  function a(g, f, m, S) {
    return f === null || f.tag !== 6 ? (f = $u(m, g.mode, S), f.return = g, f) : (f = o(f, m), f.return = g, f)
  }

  function l(g, f, m, S) {
    var x = m.type;
    return x === Hr ? c(g, f, m.props.children, S, m.key) : f !== null && (f.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Mn && Cp(x) === f.type) ? (S = o(f, m.props), S.ref = Ho(g, f, m), S.return = g, S) : (S = ra(m.type, m.key, m.props, null, g.mode, S), S.ref = Ho(g, f, m), S.return = g, S)
  }

  function u(g, f, m, S) {
    return f === null || f.tag !== 4 || f.stateNode.containerInfo !== m.containerInfo || f.stateNode.implementation !== m.implementation ? (f = Pu(m, g.mode, S), f.return = g, f) : (f = o(f, m.children || []), f.return = g, f)
  }

  function c(g, f, m, S, x) {
    return f === null || f.tag !== 7 ? (f = vr(m, g.mode, S, x), f.return = g, f) : (f = o(f, m), f.return = g, f)
  }

  function d(g, f, m) {
    if (typeof f == "string" && f !== "" || typeof f == "number") return f = $u("" + f, g.mode, m), f.return = g, f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Ss:
          return m = ra(f.type, f.key, f.props, null, g.mode, m), m.ref = Ho(g, null, f), m.return = g, m;
        case jr:
          return f = Pu(f, g.mode, m), f.return = g, f;
        case Mn:
          var S = f._init;
          return d(g, S(f._payload), m)
      }
      if (ri(f) || Vo(f)) return f = vr(f, g.mode, m, null), f.return = g, f;
      $s(g, f)
    }
    return null
  }

  function p(g, f, m, S) {
    var x = f !== null ? f.key : null;
    if (typeof m == "string" && m !== "" || typeof m == "number") return x !== null ? null : a(g, f, "" + m, S);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Ss:
          return m.key === x ? l(g, f, m, S) : null;
        case jr:
          return m.key === x ? u(g, f, m, S) : null;
        case Mn:
          return x = m._init, p(g, f, x(m._payload), S)
      }
      if (ri(m) || Vo(m)) return x !== null ? null : c(g, f, m, S, null);
      $s(g, m)
    }
    return null
  }

  function y(g, f, m, S, x) {
    if (typeof S == "string" && S !== "" || typeof S == "number") return g = g.get(m) || null, a(f, g, "" + S, x);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Ss:
          return g = g.get(S.key === null ? m : S.key) || null, l(f, g, S, x);
        case jr:
          return g = g.get(S.key === null ? m : S.key) || null, u(f, g, S, x);
        case Mn:
          var C = S._init;
          return y(g, f, m, C(S._payload), x)
      }
      if (ri(S) || Vo(S)) return g = g.get(m) || null, c(f, g, S, x, null);
      $s(f, S)
    }
    return null
  }

  function h(g, f, m, S) {
    for (var x = null, C = null, R = f, A = f = 0, B = null; R !== null && A < m.length; A++) {
      R.index > A ? (B = R, R = null) : B = R.sibling;
      var T = p(g, R, m[A], S);
      if (T === null) {
        R === null && (R = B);
        break
      }
      e && R && T.alternate === null && t(g, R), f = i(T, f, A), C === null ? x = T : C.sibling = T, C = T, R = B
    }
    if (A === m.length) return n(g, R), Ie && sr(g, A), x;
    if (R === null) {
      for (; A < m.length; A++) R = d(g, m[A], S), R !== null && (f = i(R, f, A), C === null ? x = R : C.sibling = R, C = R);
      return Ie && sr(g, A), x
    }
    for (R = r(g, R); A < m.length; A++) B = y(R, g, A, m[A], S), B !== null && (e && B.alternate !== null && R.delete(B.key === null ? A : B.key), f = i(B, f, A), C === null ? x = B : C.sibling = B, C = B);
    return e && R.forEach(function(W) {
      return t(g, W)
    }), Ie && sr(g, A), x
  }

  function v(g, f, m, S) {
    var x = Vo(m);
    if (typeof x != "function") throw Error(O(150));
    if (m = x.call(m), m == null) throw Error(O(151));
    for (var C = x = null, R = f, A = f = 0, B = null, T = m.next(); R !== null && !T.done; A++, T = m.next()) {
      R.index > A ? (B = R, R = null) : B = R.sibling;
      var W = p(g, R, T.value, S);
      if (W === null) {
        R === null && (R = B);
        break
      }
      e && R && W.alternate === null && t(g, R), f = i(W, f, A), C === null ? x = W : C.sibling = W, C = W, R = B
    }
    if (T.done) return n(g, R), Ie && sr(g, A), x;
    if (R === null) {
      for (; !T.done; A++, T = m.next()) T = d(g, T.value, S), T !== null && (f = i(T, f, A), C === null ? x = T : C.sibling = T, C = T);
      return Ie && sr(g, A), x
    }
    for (R = r(g, R); !T.done; A++, T = m.next()) T = y(R, g, A, T.value, S), T !== null && (e && T.alternate !== null && R.delete(T.key === null ? A : T.key), f = i(T, f, A), C === null ? x = T : C.sibling = T, C = T);
    return e && R.forEach(function(Z) {
      return t(g, Z)
    }), Ie && sr(g, A), x
  }

  function N(g, f, m, S) {
    if (typeof m == "object" && m !== null && m.type === Hr && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Ss:
          e: {
            for (var x = m.key, C = f; C !== null;) {
              if (C.key === x) {
                if (x = m.type, x === Hr) {
                  if (C.tag === 7) {
                    n(g, C.sibling), f = o(C, m.props.children), f.return = g, g = f;
                    break e
                  }
                } else if (C.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Mn && Cp(x) === C.type) {
                  n(g, C.sibling), f = o(C, m.props), f.ref = Ho(g, C, m), f.return = g, g = f;
                  break e
                }
                n(g, C);
                break
              } else t(g, C);
              C = C.sibling
            }
            m.type === Hr ? (f = vr(m.props.children, g.mode, S, m.key), f.return = g, g = f) : (S = ra(m.type, m.key, m.props, null, g.mode, S), S.ref = Ho(g, f, m), S.return = g, g = S)
          }
          return s(g);
        case jr:
          e: {
            for (C = m.key; f !== null;) {
              if (f.key === C)
                if (f.tag === 4 && f.stateNode.containerInfo === m.containerInfo && f.stateNode.implementation === m.implementation) {
                  n(g, f.sibling), f = o(f, m.children || []), f.return = g, g = f;
                  break e
                } else {
                  n(g, f);
                  break
                }
              else t(g, f);
              f = f.sibling
            }
            f = Pu(m, g.mode, S),
            f.return = g,
            g = f
          }
          return s(g);
        case Mn:
          return C = m._init, N(g, f, C(m._payload), S)
      }
      if (ri(m)) return h(g, f, m, S);
      if (Vo(m)) return v(g, f, m, S);
      $s(g, m)
    }
    return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, f !== null && f.tag === 6 ? (n(g, f.sibling), f = o(f, m), f.return = g, g = f) : (n(g, f), f = $u(m, g.mode, S), f.return = g, g = f), s(g)) : n(g, f)
  }
  return N
}
var vo = $v(!0),
  Pv = $v(!1),
  Xi = {},
  dn = er(Xi),
  Mi = er(Xi),
  Oi = er(Xi);

function pr(e) {
  if (e === Xi) throw Error(O(174));
  return e
}

function Ad(e, t) {
  switch (Te(Oi, t), Te(Mi, e), Te(dn, Xi), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ec(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ec(t, e)
  }
  Pe(dn), Te(dn, t)
}

function go() {
  Pe(dn), Pe(Mi), Pe(Oi)
}

function Av(e) {
  pr(Oi.current);
  var t = pr(dn.current),
    n = ec(t, e.type);
  t !== n && (Te(Mi, e), Te(dn, n))
}

function Ld(e) {
  Mi.current === e && (Pe(dn), Pe(Mi))
}
var Oe = er(0);

function ka(e) {
  for (var t = e; t !== null;) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue
    }
    if (t === e) break;
    for (; t.sibling === null;) {
      if (t.return === null || t.return === e) return null;
      t = t.return
    }
    t.sibling.return = t.return, t = t.sibling
  }
  return null
}
var Eu = [];

function Id() {
  for (var e = 0; e < Eu.length; e++) Eu[e]._workInProgressVersionPrimary = null;
  Eu.length = 0
}
var Zs = $n.ReactCurrentDispatcher,
  bu = $n.ReactCurrentBatchConfig,
  Sr = 0,
  ze = null,
  Qe = null,
  et = null,
  Ca = !1,
  hi = !1,
  Di = 0,
  PS = 0;

function at() {
  throw Error(O(321))
}

function Md(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!en(e[n], t[n])) return !1;
  return !0
}

function Od(e, t, n, r, o, i) {
  if (Sr = i, ze = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Zs.current = e === null || e.memoizedState === null ? MS : OS, e = n(r, o), hi) {
    i = 0;
    do {
      if (hi = !1, Di = 0, 25 <= i) throw Error(O(301));
      i += 1, et = Qe = null, t.updateQueue = null, Zs.current = DS, e = n(r, o)
    } while (hi)
  }
  if (Zs.current = Ta, t = Qe !== null && Qe.next !== null, Sr = 0, et = Qe = ze = null, Ca = !1, t) throw Error(O(300));
  return e
}

function Dd() {
  var e = Di !== 0;
  return Di = 0, e
}

function rn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null
  };
  return et === null ? ze.memoizedState = et = e : et = et.next = e, et
}

function jt() {
  if (Qe === null) {
    var e = ze.alternate;
    e = e !== null ? e.memoizedState : null
  } else e = Qe.next;
  var t = et === null ? ze.memoizedState : et.next;
  if (t !== null) et = t, Qe = e;
  else {
    if (e === null) throw Error(O(310));
    Qe = e, e = {
      memoizedState: Qe.memoizedState,
      baseState: Qe.baseState,
      baseQueue: Qe.baseQueue,
      queue: Qe.queue,
      next: null
    }, et === null ? ze.memoizedState = et = e : et = et.next = e
  }
  return et
}

function zi(e, t) {
  return typeof t == "function" ? t(e) : t
}

function ku(e) {
  var t = jt(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = Qe,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      o.next = i.next, i.next = s
    }
    r.baseQueue = o = i, n.pending = null
  }
  if (o !== null) {
    i = o.next, r = r.baseState;
    var a = s = null,
      l = null,
      u = i;
    do {
      var c = u.lane;
      if ((Sr & c) === c) l !== null && (l = l.next = {
        lane: 0,
        action: u.action,
        hasEagerState: u.hasEagerState,
        eagerState: u.eagerState,
        next: null
      }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null
        };
        l === null ? (a = l = d, s = r) : l = l.next = d, ze.lanes |= c, wr |= c
      }
      u = u.next
    } while (u !== null && u !== i);
    l === null ? s = r : l.next = a, en(r, t.memoizedState) || (_t = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = l, n.lastRenderedState = r
  }
  if (e = n.interleaved, e !== null) {
    o = e;
    do i = o.lane, ze.lanes |= i, wr |= i, o = o.next; while (o !== e)
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch]
}

function Cu(e) {
  var t = jt(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = o = o.next;
    do i = e(i, s.action), s = s.next; while (s !== o);
    en(i, t.memoizedState) || (_t = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i
  }
  return [i, r]
}

function Lv() {}

function Iv(e, t) {
  var n = ze,
    r = jt(),
    o = t(),
    i = !en(r.memoizedState, o);
  if (i && (r.memoizedState = o, _t = !0), r = r.queue, zd(Dv.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || et !== null && et.memoizedState.tag & 1) {
    if (n.flags |= 2048, Bi(9, Ov.bind(null, n, r, o, t), void 0, null), tt === null) throw Error(O(349));
    Sr & 30 || Mv(n, t, o)
  }
  return o
}

function Mv(e, t, n) {
  e.flags |= 16384, e = {
    getSnapshot: t,
    value: n
  }, t = ze.updateQueue, t === null ? (t = {
    lastEffect: null,
    stores: null
  }, ze.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function Ov(e, t, n, r) {
  t.value = n, t.getSnapshot = r, zv(t) && Bv(e)
}

function Dv(e, t, n) {
  return n(function() {
    zv(t) && Bv(e)
  })
}

function zv(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !en(e, n)
  } catch {
    return !0
  }
}

function Bv(e) {
  var t = Cn(e, 1);
  t !== null && Zt(t, e, 1, -1)
}

function Tp(e) {
  var t = rn();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
    pending: null,
    interleaved: null,
    lanes: 0,
    dispatch: null,
    lastRenderedReducer: zi,
    lastRenderedState: e
  }, t.queue = e, e = e.dispatch = IS.bind(null, ze, e), [t.memoizedState, e]
}

function Bi(e, t, n, r) {
  return e = {
    tag: e,
    create: t,
    destroy: n,
    deps: r,
    next: null
  }, t = ze.updateQueue, t === null ? (t = {
    lastEffect: null,
    stores: null
  }, ze.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function Vv() {
  return jt().memoizedState
}

function Js(e, t, n, r) {
  var o = rn();
  ze.flags |= e, o.memoizedState = Bi(1 | t, n, void 0, r === void 0 ? null : r)
}

function Za(e, t, n, r) {
  var o = jt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Qe !== null) {
    var s = Qe.memoizedState;
    if (i = s.destroy, r !== null && Md(r, s.deps)) {
      o.memoizedState = Bi(t, n, i, r);
      return
    }
  }
  ze.flags |= e, o.memoizedState = Bi(1 | t, n, i, r)
}

function Np(e, t) {
  return Js(8390656, 8, e, t)
}

function zd(e, t) {
  return Za(2048, 8, e, t)
}

function Fv(e, t) {
  return Za(4, 2, e, t)
}

function Uv(e, t) {
  return Za(4, 4, e, t)
}

function Wv(e, t) {
  if (typeof t == "function") return e = e(), t(e),
    function() {
      t(null)
    };
  if (t != null) return e = e(), t.current = e,
    function() {
      t.current = null
    }
}

function jv(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Za(4, 4, Wv.bind(null, t, e), n)
}

function Bd() {}

function Hv(e, t) {
  var n = jt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Md(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function Kv(e, t) {
  var n = jt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Md(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function Gv(e, t, n) {
  return Sr & 21 ? (en(n, t) || (n = Qm(), ze.lanes |= n, wr |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, _t = !0), e.memoizedState = n)
}

function AS(e, t) {
  var n = Ee;
  Ee = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = bu.transition;
  bu.transition = {};
  try {
    e(!1), t()
  } finally {
    Ee = n, bu.transition = r
  }
}

function qv() {
  return jt().memoizedState
}

function LS(e, t, n) {
  var r = qn(e);
  if (n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Yv(e)) Qv(t, n);
  else if (n = kv(e, t, n, r), n !== null) {
    var o = mt();
    Zt(n, e, r, o), Xv(n, t, r)
  }
}

function IS(e, t, n) {
  var r = qn(e),
    o = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
  if (Yv(e)) Qv(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var s = t.lastRenderedState,
        a = i(s, n);
      if (o.hasEagerState = !0, o.eagerState = a, en(a, s)) {
        var l = t.interleaved;
        l === null ? (o.next = o, $d(t)) : (o.next = l.next, l.next = o), t.interleaved = o;
        return
      }
    } catch {} finally {}
    n = kv(e, t, o, r), n !== null && (o = mt(), Zt(n, e, r, o), Xv(n, t, r))
  }
}

function Yv(e) {
  var t = e.alternate;
  return e === ze || t !== null && t === ze
}

function Qv(e, t) {
  hi = Ca = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function Xv(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, vd(e, n)
  }
}
var Ta = {
    readContext: Wt,
    useCallback: at,
    useContext: at,
    useEffect: at,
    useImperativeHandle: at,
    useInsertionEffect: at,
    useLayoutEffect: at,
    useMemo: at,
    useReducer: at,
    useRef: at,
    useState: at,
    useDebugValue: at,
    useDeferredValue: at,
    useTransition: at,
    useMutableSource: at,
    useSyncExternalStore: at,
    useId: at,
    unstable_isNewReconciler: !1
  },
  MS = {
    readContext: Wt,
    useCallback: function(e, t) {
      return rn().memoizedState = [e, t === void 0 ? null : t], e
    },
    useContext: Wt,
    useEffect: Np,
    useImperativeHandle: function(e, t, n) {
      return n = n != null ? n.concat([e]) : null, Js(4194308, 4, Wv.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
      return Js(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
      return Js(4, 2, e, t)
    },
    useMemo: function(e, t) {
      var n = rn();
      return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
    },
    useReducer: function(e, t, n) {
      var r = rn();
      return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: t
      }, r.queue = e, e = e.dispatch = LS.bind(null, ze, e), [r.memoizedState, e]
    },
    useRef: function(e) {
      var t = rn();
      return e = {
        current: e
      }, t.memoizedState = e
    },
    useState: Tp,
    useDebugValue: Bd,
    useDeferredValue: function(e) {
      return rn().memoizedState = e
    },
    useTransition: function() {
      var e = Tp(!1),
        t = e[0];
      return e = AS.bind(null, e[1]), rn().memoizedState = e, [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
      var r = ze,
        o = rn();
      if (Ie) {
        if (n === void 0) throw Error(O(407));
        n = n()
      } else {
        if (n = t(), tt === null) throw Error(O(349));
        Sr & 30 || Mv(r, t, n)
      }
      o.memoizedState = n;
      var i = {
        value: n,
        getSnapshot: t
      };
      return o.queue = i, Np(Dv.bind(null, r, i, e), [e]), r.flags |= 2048, Bi(9, Ov.bind(null, r, i, n, t), void 0, null), n
    },
    useId: function() {
      var e = rn(),
        t = tt.identifierPrefix;
      if (Ie) {
        var n = _n,
          r = wn;
        n = (r & ~(1 << 32 - Xt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Di++, 0 < n && (t += "H" + n.toString(32)), t += ":"
      } else n = PS++, t = ":" + t + "r" + n.toString(32) + ":";
      return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
  },
  OS = {
    readContext: Wt,
    useCallback: Hv,
    useContext: Wt,
    useEffect: zd,
    useImperativeHandle: jv,
    useInsertionEffect: Fv,
    useLayoutEffect: Uv,
    useMemo: Kv,
    useReducer: ku,
    useRef: Vv,
    useState: function() {
      return ku(zi)
    },
    useDebugValue: Bd,
    useDeferredValue: function(e) {
      var t = jt();
      return Gv(t, Qe.memoizedState, e)
    },
    useTransition: function() {
      var e = ku(zi)[0],
        t = jt().memoizedState;
      return [e, t]
    },
    useMutableSource: Lv,
    useSyncExternalStore: Iv,
    useId: qv,
    unstable_isNewReconciler: !1
  },
  DS = {
    readContext: Wt,
    useCallback: Hv,
    useContext: Wt,
    useEffect: zd,
    useImperativeHandle: jv,
    useInsertionEffect: Fv,
    useLayoutEffect: Uv,
    useMemo: Kv,
    useReducer: Cu,
    useRef: Vv,
    useState: function() {
      return Cu(zi)
    },
    useDebugValue: Bd,
    useDeferredValue: function(e) {
      var t = jt();
      return Qe === null ? t.memoizedState = e : Gv(t, Qe.memoizedState, e)
    },
    useTransition: function() {
      var e = Cu(zi)[0],
        t = jt().memoizedState;
      return [e, t]
    },
    useMutableSource: Lv,
    useSyncExternalStore: Iv,
    useId: qv,
    unstable_isNewReconciler: !1
  };

function yo(e, t) {
  try {
    var n = "",
      r = t;
    do n += d1(r), r = r.return; while (r);
    var o = n
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack
  }
  return {
    value: e,
    source: t,
    stack: o,
    digest: null
  }
}

function Tu(e, t, n) {
  return {
    value: e,
    source: null,
    stack: n != null ? n : null,
    digest: t != null ? t : null
  }
}

function Rc(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function() {
      throw n
    })
  }
}
var zS = typeof WeakMap == "function" ? WeakMap : Map;

function Zv(e, t, n) {
  n = Rn(-1, n), n.tag = 3, n.payload = {
    element: null
  };
  var r = t.value;
  return n.callback = function() {
    $a || ($a = !0, Lc = r), Rc(e, t)
  }, n
}

function Jv(e, t, n) {
  n = Rn(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return r(o)
    }, n.callback = function() {
      Rc(e, t)
    }
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Rc(e, t), typeof r != "function" && (Gn === null ? Gn = new Set([this]) : Gn.add(this));
    var s = t.stack;
    this.componentDidCatch(t.value, {
      componentStack: s !== null ? s : ""
    })
  }), n
}

function $p(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new zS;
    var o = new Set;
    r.set(t, o)
  } else o = r.get(t), o === void 0 && (o = new Set, r.set(t, o));
  o.has(n) || (o.add(n), e = ZS.bind(null, e, t, n), t.then(e, e))
}

function Pp(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return
  } while (e !== null);
  return null
}

function Ap(e, t, n, r, o) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Rn(-1, 1), t.tag = 2, Kn(n, t, 1))), n.lanes |= 1), e)
}
var BS = $n.ReactCurrentOwner,
  _t = !1;

function pt(e, t, n, r) {
  t.child = e === null ? Pv(t, null, n, r) : vo(t, e.child, n, r)
}

function Lp(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return ao(t, o), r = Od(e, t, n, r, i, o), n = Dd(), e !== null && !_t ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Tn(e, t, o)) : (Ie && n && Ed(t), t.flags |= 1, pt(e, t, r, o), t.child)
}

function Ip(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Gd(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, eg(e, t, i, r, o)) : (e = ra(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e)
  }
  if (i = e.child, !(e.lanes & o)) {
    var s = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Pi, n(s, r) && e.ref === t.ref) return Tn(e, t, o)
  }
  return t.flags |= 1, e = Yn(i, r), e.ref = t.ref, e.return = t, t.child = e
}

function eg(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Pi(i, r) && e.ref === t.ref)
      if (_t = !1, t.pendingProps = r = i, (e.lanes & o) !== 0) e.flags & 131072 && (_t = !0);
      else return t.lanes = e.lanes, Tn(e, t, o)
  }
  return Ec(e, t, n, r, o)
}

function tg(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1)) t.memoizedState = {
      baseLanes: 0,
      cachePool: null,
      transitions: null
    }, Te(to, Tt), Tt |= n;
    else {
      if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
        baseLanes: e,
        cachePool: null,
        transitions: null
      }, t.updateQueue = null, Te(to, Tt), Tt |= e, null;
      t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
      }, r = i !== null ? i.baseLanes : n, Te(to, Tt), Tt |= r
    }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Te(to, Tt), Tt |= r;
  return pt(e, t, o, n), t.child
}

function ng(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function Ec(e, t, n, r, o) {
  var i = Rt(n) ? gr : dt.current;
  return i = ho(t, i), ao(t, o), n = Od(e, t, n, r, i, o), r = Dd(), e !== null && !_t ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Tn(e, t, o)) : (Ie && r && Ed(t), t.flags |= 1, pt(e, t, n, o), t.child)
}

function Mp(e, t, n, r, o) {
  if (Rt(n)) {
    var i = !0;
    wa(t)
  } else i = !1;
  if (ao(t, o), t.stateNode === null) ea(e, t), Nv(t, n, r), xc(t, n, r, o), r = !0;
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null ? u = Wt(u) : (u = Rt(n) ? gr : dt.current, u = ho(t, u));
    var c = n.getDerivedStateFromProps,
      d = typeof c == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    d || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== r || l !== u) && kp(t, s, r, u), On = !1;
    var p = t.memoizedState;
    s.state = p, ba(t, r, s, o), l = t.memoizedState, a !== r || p !== l || xt.current || On ? (typeof c == "function" && (_c(t, n, c, r), l = t.memoizedState), (a = On || bp(t, n, a, r, p, l, u)) ? (d || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), s.props = r, s.state = l, s.context = u, r = a) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
  } else {
    s = t.stateNode, Cv(e, t), a = t.memoizedProps, u = t.type === t.elementType ? a : qt(t.type, a), s.props = u, d = t.pendingProps, p = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = Wt(l) : (l = Rt(n) ? gr : dt.current, l = ho(t, l));
    var y = n.getDerivedStateFromProps;
    (c = typeof y == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (a !== d || p !== l) && kp(t, s, r, l), On = !1, p = t.memoizedState, s.state = p, ba(t, r, s, o);
    var h = t.memoizedState;
    a !== d || p !== h || xt.current || On ? (typeof y == "function" && (_c(t, n, y, r), h = t.memoizedState), (u = On || bp(t, n, u, r, p, h, l) || !1) ? (c || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, h, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, h, l)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = h), s.props = r, s.state = h, s.context = l, r = u) : (typeof s.componentDidUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1)
  }
  return bc(e, t, n, r, i, o)
}

function bc(e, t, n, r, o, i) {
  ng(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && wp(t, n, !1), Tn(e, t, i);
  r = t.stateNode, BS.current = t;
  var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && s ? (t.child = vo(t, e.child, null, i), t.child = vo(t, null, a, i)) : pt(e, t, a, i), t.memoizedState = r.state, o && wp(t, n, !0), t.child
}

function rg(e) {
  var t = e.stateNode;
  t.pendingContext ? Sp(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Sp(e, t.context, !1), Ad(e, t.containerInfo)
}

function Op(e, t, n, r, o) {
  return mo(), kd(o), t.flags |= 256, pt(e, t, n, r), t.child
}
var kc = {
  dehydrated: null,
  treeContext: null,
  retryLane: 0
};

function Cc(e) {
  return {
    baseLanes: e,
    cachePool: null,
    transitions: null
  }
}

function og(e, t, n) {
  var r = t.pendingProps,
    o = Oe.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    a;
  if ((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), a ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), Te(Oe, o & 1), e === null) return Sc(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, s = {
    mode: "hidden",
    children: s
  }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = s) : i = tl(s, r, 0, null), e = vr(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Cc(n), t.memoizedState = kc, e) : Vd(t, s));
  if (o = e.memoizedState, o !== null && (a = o.dehydrated, a !== null)) return VS(e, t, s, r, a, o, n);
  if (i) {
    i = r.fallback, s = t.mode, o = e.child, a = o.sibling;
    var l = {
      mode: "hidden",
      children: r.children
    };
    return !(s & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = Yn(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), a !== null ? i = Yn(a, i) : (i = vr(i, s, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, s = e.child.memoizedState, s = s === null ? Cc(n) : {
      baseLanes: s.baseLanes | n,
      cachePool: null,
      transitions: s.transitions
    }, i.memoizedState = s, i.childLanes = e.childLanes & ~n, t.memoizedState = kc, r
  }
  return i = e.child, e = i.sibling, r = Yn(i, {
    mode: "visible",
    children: r.children
  }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function Vd(e, t) {
  return t = tl({
    mode: "visible",
    children: t
  }, e.mode, 0, null), t.return = e, e.child = t
}

function Ps(e, t, n, r) {
  return r !== null && kd(r), vo(t, e.child, null, n), e = Vd(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function VS(e, t, n, r, o, i, s) {
  if (n) return t.flags & 256 ? (t.flags &= -257, r = Tu(Error(O(422))), Ps(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = tl({
    mode: "visible",
    children: r.children
  }, o, 0, null), i = vr(i, o, s, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && vo(t, e.child, null, s), t.child.memoizedState = Cc(s), t.memoizedState = kc, i);
  if (!(t.mode & 1)) return Ps(e, t, s, null);
  if (o.data === "$!") {
    if (r = o.nextSibling && o.nextSibling.dataset, r) var a = r.dgst;
    return r = a, i = Error(O(419)), r = Tu(i, r, void 0), Ps(e, t, s, r)
  }
  if (a = (s & e.childLanes) !== 0, _t || a) {
    if (r = tt, r !== null) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
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
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0
      }
      o = o & (r.suspendedLanes | s) ? 0 : o, o !== 0 && o !== i.retryLane && (i.retryLane = o, Cn(e, o), Zt(r, e, o, -1))
    }
    return Kd(), r = Tu(Error(O(421))), Ps(e, t, s, r)
  }
  return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = JS.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, $t = Hn(o.nextSibling), Pt = t, Ie = !0, Qt = null, e !== null && (Bt[Vt++] = wn, Bt[Vt++] = _n, Bt[Vt++] = yr, wn = e.id, _n = e.overflow, yr = t), t = Vd(t, r.children), t.flags |= 4096, t)
}

function Dp(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), wc(e.return, t, n)
}

function Nu(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = {
    isBackwards: t,
    rendering: null,
    renderingStartTime: 0,
    last: r,
    tail: n,
    tailMode: o
  } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o)
}

function ig(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if (pt(e, t, r.children, n), r = Oe.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
      if (e.tag === 13) e.memoizedState !== null && Dp(e, n, t);
      else if (e.tag === 19) Dp(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue
      }
      if (e === t) break e;
      for (; e.sibling === null;) {
        if (e.return === null || e.return === t) break e;
        e = e.return
      }
      e.sibling.return = e.return, e = e.sibling
    }
    r &= 1
  }
  if (Te(Oe, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null;) e = n.alternate, e !== null && ka(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Nu(t, !1, o, n, i);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null;) {
        if (e = o.alternate, e !== null && ka(e) === null) {
          t.child = o;
          break
        }
        e = o.sibling, o.sibling = n, n = o, o = e
      }
      Nu(t, !0, n, null, i);
      break;
    case "together":
      Nu(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null
  }
  return t.child
}

function ea(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function Tn(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), wr |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(O(153));
  if (t.child !== null) {
    for (e = t.child, n = Yn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Yn(e, e.pendingProps), n.return = t;
    n.sibling = null
  }
  return t.child
}

function FS(e, t, n) {
  switch (t.tag) {
    case 3:
      rg(t), mo();
      break;
    case 5:
      Av(t);
      break;
    case 1:
      Rt(t.type) && wa(t);
      break;
    case 4:
      Ad(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      Te(Ra, r._currentValue), r._currentValue = o;
      break;
    case 13:
      if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (Te(Oe, Oe.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? og(e, t, n) : (Te(Oe, Oe.current & 1), e = Tn(e, t, n), e !== null ? e.sibling : null);
      Te(Oe, Oe.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return ig(e, t, n);
        t.flags |= 128
      }
      if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Te(Oe, Oe.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, tg(e, t, n)
  }
  return Tn(e, t, n)
}
var sg, Tc, ag, lg;
sg = function(e, t) {
  for (var n = t.child; n !== null;) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue
    }
    if (n === t) break;
    for (; n.sibling === null;) {
      if (n.return === null || n.return === t) return;
      n = n.return
    }
    n.sibling.return = n.return, n = n.sibling
  }
};
Tc = function() {};
ag = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, pr(dn.current);
    var i = null;
    switch (n) {
      case "input":
        o = Qu(e, o), r = Qu(e, r), i = [];
        break;
      case "select":
        o = Be({}, o, {
          value: void 0
        }), r = Be({}, r, {
          value: void 0
        }), i = [];
        break;
      case "textarea":
        o = Ju(e, o), r = Ju(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ya)
    }
    tc(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), n[s] = "")
        } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Ei.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (a = o != null ? o[u] : void 0, r.hasOwnProperty(u) && l !== a && (l != null || a != null))
        if (u === "style")
          if (a) {
            for (s in a) !a.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
            for (s in l) l.hasOwnProperty(s) && a[s] !== l[s] && (n || (n = {}), n[s] = l[s])
          } else n || (i || (i = []), i.push(u, n)), n = l;
      else u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, a = a ? a.__html : void 0, l != null && a !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Ei.hasOwnProperty(u) ? (l != null && u === "onScroll" && Ne("scroll", e), i || a === l || (i = [])) : (i = i || []).push(u, l))
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4)
  }
};
lg = function(e, t, n, r) {
  n !== r && (t.flags |= 4)
};

function Ko(e, t) {
  if (!Ie) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
  }
}

function lt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
  else
    for (o = e.child; o !== null;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t
}

function US(e, t, n) {
  var r = t.pendingProps;
  switch (bd(t), t.tag) {
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
      return lt(t), null;
    case 1:
      return Rt(t.type) && Sa(), lt(t), null;
    case 3:
      return r = t.stateNode, go(), Pe(xt), Pe(dt), Id(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ns(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Qt !== null && (Oc(Qt), Qt = null))), Tc(e, t), lt(t), null;
    case 5:
      Ld(t);
      var o = pr(Oi.current);
      if (n = t.type, e !== null && t.stateNode != null) ag(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(O(166));
          return lt(t), null
        }
        if (e = pr(dn.current), Ns(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[an] = t, r[Ii] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              Ne("cancel", r), Ne("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Ne("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < ii.length; o++) Ne(ii[o], r);
              break;
            case "source":
              Ne("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Ne("error", r), Ne("load", r);
              break;
            case "details":
              Ne("toggle", r);
              break;
            case "input":
              Kf(r, i), Ne("invalid", r);
              break;
            case "select":
              r._wrapperState = {
                wasMultiple: !!i.multiple
              }, Ne("invalid", r);
              break;
            case "textarea":
              qf(r, i), Ne("invalid", r)
          }
          tc(n, i), o = null;
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var a = i[s];
              s === "children" ? typeof a == "string" ? r.textContent !== a && (i.suppressHydrationWarning !== !0 && Ts(r.textContent, a, e), o = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (i.suppressHydrationWarning !== !0 && Ts(r.textContent, a, e), o = ["children", "" + a]) : Ei.hasOwnProperty(s) && a != null && s === "onScroll" && Ne("scroll", r)
            } switch (n) {
            case "input":
              ws(r), Gf(r, i, !0);
              break;
            case "textarea":
              ws(r), Yf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ya)
          }
          r = o, t.updateQueue = r, r !== null && (t.flags |= 4)
        } else {
          s = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Mm(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
            is: r.is
          }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[an] = t, e[Ii] = r, sg(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (s = nc(n, r), n) {
              case "dialog":
                Ne("cancel", e), Ne("close", e), o = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                Ne("load", e), o = r;
                break;
              case "video":
              case "audio":
                for (o = 0; o < ii.length; o++) Ne(ii[o], e);
                o = r;
                break;
              case "source":
                Ne("error", e), o = r;
                break;
              case "img":
              case "image":
              case "link":
                Ne("error", e), Ne("load", e), o = r;
                break;
              case "details":
                Ne("toggle", e), o = r;
                break;
              case "input":
                Kf(e, r), o = Qu(e, r), Ne("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                e._wrapperState = {
                  wasMultiple: !!r.multiple
                }, o = Be({}, r, {
                  value: void 0
                }), Ne("invalid", e);
                break;
              case "textarea":
                qf(e, r), o = Ju(e, r), Ne("invalid", e);
                break;
              default:
                o = r
            }
            tc(n, o),
            a = o;
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style" ? zm(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && Om(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && bi(e, l) : typeof l == "number" && bi(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Ei.hasOwnProperty(i) ? l != null && i === "onScroll" && Ne("scroll", e) : l != null && cd(e, i, l, s))
              } switch (n) {
              case "input":
                ws(e), Gf(e, r, !1);
                break;
              case "textarea":
                ws(e), Yf(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Xn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? ro(e, !!r.multiple, i, !1) : r.defaultValue != null && ro(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = ya)
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1
            }
          }
          r && (t.flags |= 4)
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
      }
      return lt(t), null;
    case 6:
      if (e && t.stateNode != null) lg(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(O(166));
        if (n = pr(Oi.current), pr(dn.current), Ns(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[an] = t, (i = r.nodeValue !== n) && (e = Pt, e !== null)) switch (e.tag) {
            case 3:
              Ts(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Ts(r.nodeValue, n, (e.mode & 1) !== 0)
          }
          i && (t.flags |= 4)
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[an] = t, t.stateNode = r
      }
      return lt(t), null;
    case 13:
      if (Pe(Oe), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (Ie && $t !== null && t.mode & 1 && !(t.flags & 128)) bv(), mo(), t.flags |= 98560, i = !1;
        else if (i = Ns(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(O(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(O(317));
            i[an] = t
          } else mo(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          lt(t), i = !1
        } else Qt !== null && (Oc(Qt), Qt = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Oe.current & 1 ? Xe === 0 && (Xe = 3) : Kd())), t.updateQueue !== null && (t.flags |= 4), lt(t), null);
    case 4:
      return go(), Tc(e, t), e === null && Ai(t.stateNode.containerInfo), lt(t), null;
    case 10:
      return Nd(t.type._context), lt(t), null;
    case 17:
      return Rt(t.type) && Sa(), lt(t), null;
    case 19:
      if (Pe(Oe), i = t.memoizedState, i === null) return lt(t), null;
      if (r = (t.flags & 128) !== 0, s = i.rendering, s === null)
        if (r) Ko(i, !1);
        else {
          if (Xe !== 0 || e !== null && e.flags & 128)
            for (e = t.child; e !== null;) {
              if (s = ka(e), s !== null) {
                for (t.flags |= 128, Ko(i, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) i = n, e = r, i.flags &= 14680066, s = i.alternate, s === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = s.childLanes, i.lanes = s.lanes, i.child = s.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = s.memoizedProps, i.memoizedState = s.memoizedState, i.updateQueue = s.updateQueue, i.type = s.type, e = s.dependencies, i.dependencies = e === null ? null : {
                  lanes: e.lanes,
                  firstContext: e.firstContext
                }), n = n.sibling;
                return Te(Oe, Oe.current & 1 | 2), t.child
              }
              e = e.sibling
            }
          i.tail !== null && We() > So && (t.flags |= 128, r = !0, Ko(i, !1), t.lanes = 4194304)
        }
      else {
        if (!r)
          if (e = ka(s), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Ko(i, !0), i.tail === null && i.tailMode === "hidden" && !s.alternate && !Ie) return lt(t), null
          } else 2 * We() - i.renderingStartTime > So && n !== 1073741824 && (t.flags |= 128, r = !0, Ko(i, !1), t.lanes = 4194304);
        i.isBackwards ? (s.sibling = t.child, t.child = s) : (n = i.last, n !== null ? n.sibling = s : t.child = s, i.last = s)
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = We(), t.sibling = null, n = Oe.current, Te(Oe, r ? n & 1 | 2 : n & 1), t) : (lt(t), null);
    case 22:
    case 23:
      return Hd(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Tt & 1073741824 && (lt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : lt(t), null;
    case 24:
      return null;
    case 25:
      return null
  }
  throw Error(O(156, t.tag))
}

function WS(e, t) {
  switch (bd(t), t.tag) {
    case 1:
      return Rt(t.type) && Sa(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return go(), Pe(xt), Pe(dt), Id(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Ld(t), null;
    case 13:
      if (Pe(Oe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(O(340));
        mo()
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return Pe(Oe), null;
    case 4:
      return go(), null;
    case 10:
      return Nd(t.type._context), null;
    case 22:
    case 23:
      return Hd(), null;
    case 24:
      return null;
    default:
      return null
  }
}
var As = !1,
  ct = !1,
  jS = typeof WeakSet == "function" ? WeakSet : Set,
  G = null;

function eo(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function") try {
      n(null)
    } catch (r) {
      Ue(e, t, r)
    } else n.current = null
}

function Nc(e, t, n) {
  try {
    n()
  } catch (r) {
    Ue(e, t, r)
  }
}
var zp = !1;

function HS(e, t) {
  if (fc = ma, e = fv(), Rd(e)) {
    if ("selectionStart" in e) var n = {
      start: e.selectionStart,
      end: e.selectionEnd
    };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var o = r.anchorOffset,
          i = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, i.nodeType
        } catch {
          n = null;
          break e
        }
        var s = 0,
          a = -1,
          l = -1,
          u = 0,
          c = 0,
          d = e,
          p = null;
        t: for (;;) {
          for (var y; d !== n || o !== 0 && d.nodeType !== 3 || (a = s + o), d !== i || r !== 0 && d.nodeType !== 3 || (l = s + r), d.nodeType === 3 && (s += d.nodeValue.length), (y = d.firstChild) !== null;) p = d, d = y;
          for (;;) {
            if (d === e) break t;
            if (p === n && ++u === o && (a = s), p === i && ++c === r && (l = s), (y = d.nextSibling) !== null) break;
            d = p, p = d.parentNode
          }
          d = y
        }
        n = a === -1 || l === -1 ? null : {
          start: a,
          end: l
        }
      } else n = null
    }
    n = n || {
      start: 0,
      end: 0
    }
  } else n = null;
  for (pc = {
      focusedElem: e,
      selectionRange: n
    }, ma = !1, G = t; G !== null;)
    if (t = G, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, G = e;
    else
      for (; G !== null;) {
        t = G;
        try {
          var h = t.alternate;
          if (t.flags & 1024) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              break;
            case 1:
              if (h !== null) {
                var v = h.memoizedProps,
                  N = h.memoizedState,
                  g = t.stateNode,
                  f = g.getSnapshotBeforeUpdate(t.elementType === t.type ? v : qt(t.type, v), N);
                g.__reactInternalSnapshotBeforeUpdate = f
              }
              break;
            case 3:
              var m = t.stateNode.containerInfo;
              m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
              break;
            case 5:
            case 6:
            case 4:
            case 17:
              break;
            default:
              throw Error(O(163))
          }
        } catch (S) {
          Ue(t, t.return, S)
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, G = e;
          break
        }
        G = t.return
      }
  return h = zp, zp = !1, h
}

function mi(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var o = r = r.next;
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        o.destroy = void 0, i !== void 0 && Nc(t, n, i)
      }
      o = o.next
    } while (o !== r)
  }
}

function Ja(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r()
      }
      n = n.next
    } while (n !== t)
  }
}

function $c(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n
    }
    typeof t == "function" ? t(e) : t.current = e
  }
}

function ug(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, ug(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[an], delete t[Ii], delete t[vc], delete t[CS], delete t[TS])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function cg(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function Bp(e) {
  e: for (;;) {
    for (; e.sibling === null;) {
      if (e.return === null || cg(e.return)) return null;
      e = e.return
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}

function Pc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ya));
  else if (r !== 4 && (e = e.child, e !== null))
    for (Pc(e, t, n), e = e.sibling; e !== null;) Pc(e, t, n), e = e.sibling
}

function Ac(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (Ac(e, t, n), e = e.sibling; e !== null;) Ac(e, t, n), e = e.sibling
}
var rt = null,
  Yt = !1;

function In(e, t, n) {
  for (n = n.child; n !== null;) dg(e, t, n), n = n.sibling
}

function dg(e, t, n) {
  if (cn && typeof cn.onCommitFiberUnmount == "function") try {
    cn.onCommitFiberUnmount(Ha, n)
  } catch {}
  switch (n.tag) {
    case 5:
      ct || eo(n, t);
    case 6:
      var r = rt,
        o = Yt;
      rt = null, In(e, t, n), rt = r, Yt = o, rt !== null && (Yt ? (e = rt, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : rt.removeChild(n.stateNode));
      break;
    case 18:
      rt !== null && (Yt ? (e = rt, n = n.stateNode, e.nodeType === 8 ? xu(e.parentNode, n) : e.nodeType === 1 && xu(e, n), Ni(e)) : xu(rt, n.stateNode));
      break;
    case 4:
      r = rt, o = Yt, rt = n.stateNode.containerInfo, Yt = !0, In(e, t, n), rt = r, Yt = o;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ct && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          i = i.tag, s !== void 0 && (i & 2 || i & 4) && Nc(n, t, s), o = o.next
        } while (o !== r)
      }
      In(e, t, n);
      break;
    case 1:
      if (!ct && (eo(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
      } catch (a) {
        Ue(n, t, a)
      }
      In(e, t, n);
      break;
    case 21:
      In(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ct = (r = ct) || n.memoizedState !== null, In(e, t, n), ct = r) : In(e, t, n);
      break;
    default:
      In(e, t, n)
  }
}

function Vp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new jS), t.forEach(function(r) {
      var o = ew.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o))
    })
  }
}

function Kt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          a = s;
        e: for (; a !== null;) {
          switch (a.tag) {
            case 5:
              rt = a.stateNode, Yt = !1;
              break e;
            case 3:
              rt = a.stateNode.containerInfo, Yt = !0;
              break e;
            case 4:
              rt = a.stateNode.containerInfo, Yt = !0;
              break e
          }
          a = a.return
        }
        if (rt === null) throw Error(O(160));
        dg(i, s, o), rt = null, Yt = !1;
        var l = o.alternate;
        l !== null && (l.return = null), o.return = null
      } catch (u) {
        Ue(o, t, u)
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null;) fg(t, e), t = t.sibling
}

function fg(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Kt(t, e), nn(e), r & 4) {
        try {
          mi(3, e, e.return), Ja(3, e)
        } catch (v) {
          Ue(e, e.return, v)
        }
        try {
          mi(5, e, e.return)
        } catch (v) {
          Ue(e, e.return, v)
        }
      }
      break;
    case 1:
      Kt(t, e), nn(e), r & 512 && n !== null && eo(n, n.return);
      break;
    case 5:
      if (Kt(t, e), nn(e), r & 512 && n !== null && eo(n, n.return), e.flags & 32) {
        var o = e.stateNode;
        try {
          bi(o, "")
        } catch (v) {
          Ue(e, e.return, v)
        }
      }
      if (r & 4 && (o = e.stateNode, o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          a = e.type,
          l = e.updateQueue;
        if (e.updateQueue = null, l !== null) try {
          a === "input" && i.type === "radio" && i.name != null && Lm(o, i), nc(a, s);
          var u = nc(a, i);
          for (s = 0; s < l.length; s += 2) {
            var c = l[s],
              d = l[s + 1];
            c === "style" ? zm(o, d) : c === "dangerouslySetInnerHTML" ? Om(o, d) : c === "children" ? bi(o, d) : cd(o, c, d, u)
          }
          switch (a) {
            case "input":
              Xu(o, i);
              break;
            case "textarea":
              Im(o, i);
              break;
            case "select":
              var p = o._wrapperState.wasMultiple;
              o._wrapperState.wasMultiple = !!i.multiple;
              var y = i.value;
              y != null ? ro(o, !!i.multiple, y, !1) : p !== !!i.multiple && (i.defaultValue != null ? ro(o, !!i.multiple, i.defaultValue, !0) : ro(o, !!i.multiple, i.multiple ? [] : "", !1))
          }
          o[Ii] = i
        } catch (v) {
          Ue(e, e.return, v)
        }
      }
      break;
    case 6:
      if (Kt(t, e), nn(e), r & 4) {
        if (e.stateNode === null) throw Error(O(162));
        o = e.stateNode, i = e.memoizedProps;
        try {
          o.nodeValue = i
        } catch (v) {
          Ue(e, e.return, v)
        }
      }
      break;
    case 3:
      if (Kt(t, e), nn(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Ni(t.containerInfo)
      } catch (v) {
        Ue(e, e.return, v)
      }
      break;
    case 4:
      Kt(t, e), nn(e);
      break;
    case 13:
      Kt(t, e), nn(e), o = e.child, o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Wd = We())), r & 4 && Vp(e);
      break;
    case 22:
      if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (ct = (u = ct) || c, Kt(t, e), ct = u) : Kt(t, e), nn(e), r & 8192) {
        if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && e.mode & 1)
          for (G = e, c = e.child; c !== null;) {
            for (d = G = c; G !== null;) {
              switch (p = G, y = p.child, p.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  mi(4, p, p.return);
                  break;
                case 1:
                  eo(p, p.return);
                  var h = p.stateNode;
                  if (typeof h.componentWillUnmount == "function") {
                    r = p, n = p.return;
                    try {
                      t = r, h.props = t.memoizedProps, h.state = t.memoizedState, h.componentWillUnmount()
                    } catch (v) {
                      Ue(r, n, v)
                    }
                  }
                  break;
                case 5:
                  eo(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Up(d);
                    continue
                  }
              }
              y !== null ? (y.return = p, G = y) : Up(d)
            }
            c = c.sibling
          }
        e: for (c = null, d = e;;) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                o = d.stateNode, u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (a = d.stateNode, l = d.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, a.style.display = Dm("display", s))
              } catch (v) {
                Ue(e, e.return, v)
              }
            }
          } else if (d.tag === 6) {
            if (c === null) try {
              d.stateNode.nodeValue = u ? "" : d.memoizedProps
            } catch (v) {
              Ue(e, e.return, v)
            }
          } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
            d.child.return = d, d = d.child;
            continue
          }
          if (d === e) break e;
          for (; d.sibling === null;) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), d = d.return
          }
          c === d && (c = null), d.sibling.return = d.return, d = d.sibling
        }
      }
      break;
    case 19:
      Kt(t, e), nn(e), r & 4 && Vp(e);
      break;
    case 21:
      break;
    default:
      Kt(t, e), nn(e)
  }
}

function nn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null;) {
          if (cg(n)) {
            var r = n;
            break e
          }
          n = n.return
        }
        throw Error(O(160))
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (bi(o, ""), r.flags &= -33);
          var i = Bp(e);
          Ac(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = Bp(e);
          Pc(e, a, s);
          break;
        default:
          throw Error(O(161))
      }
    }
    catch (l) {
      Ue(e, e.return, l)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}

function KS(e, t, n) {
  G = e, pg(e)
}

function pg(e, t, n) {
  for (var r = (e.mode & 1) !== 0; G !== null;) {
    var o = G,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || As;
      if (!s) {
        var a = o.alternate,
          l = a !== null && a.memoizedState !== null || ct;
        a = As;
        var u = ct;
        if (As = s, (ct = l) && !u)
          for (G = o; G !== null;) s = G, l = s.child, s.tag === 22 && s.memoizedState !== null ? Wp(o) : l !== null ? (l.return = s, G = l) : Wp(o);
        for (; i !== null;) G = i, pg(i), i = i.sibling;
        G = o, As = a, ct = u
      }
      Fp(e)
    } else o.subtreeFlags & 8772 && i !== null ? (i.return = o, G = i) : Fp(e)
  }
}

function Fp(e) {
  for (; G !== null;) {
    var t = G;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            ct || Ja(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !ct)
              if (n === null) r.componentDidMount();
              else {
                var o = t.elementType === t.type ? n.memoizedProps : qt(t.type, n.memoizedProps);
                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
              } var i = t.updateQueue;
            i !== null && Ep(t, i, r);
            break;
          case 3:
            var s = t.updateQueue;
            if (s !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode
              }
              Ep(t, s, n)
            }
            break;
          case 5:
            var a = t.stateNode;
            if (n === null && t.flags & 4) {
              n = a;
              var l = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  l.autoFocus && n.focus();
                  break;
                case "img":
                  l.src && (n.src = l.src)
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
            if (t.memoizedState === null) {
              var u = t.alternate;
              if (u !== null) {
                var c = u.memoizedState;
                if (c !== null) {
                  var d = c.dehydrated;
                  d !== null && Ni(d)
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
            throw Error(O(163))
        }
        ct || t.flags & 512 && $c(t)
      } catch (p) {
        Ue(t, t.return, p)
      }
    }
    if (t === e) {
      G = null;
      break
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, G = n;
      break
    }
    G = t.return
  }
}

function Up(e) {
  for (; G !== null;) {
    var t = G;
    if (t === e) {
      G = null;
      break
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, G = n;
      break
    }
    G = t.return
  }
}

function Wp(e) {
  for (; G !== null;) {
    var t = G;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ja(4, t)
          } catch (l) {
            Ue(t, n, l)
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount()
            } catch (l) {
              Ue(t, o, l)
            }
          }
          var i = t.return;
          try {
            $c(t)
          } catch (l) {
            Ue(t, i, l)
          }
          break;
        case 5:
          var s = t.return;
          try {
            $c(t)
          } catch (l) {
            Ue(t, s, l)
          }
      }
    } catch (l) {
      Ue(t, t.return, l)
    }
    if (t === e) {
      G = null;
      break
    }
    var a = t.sibling;
    if (a !== null) {
      a.return = t.return, G = a;
      break
    }
    G = t.return
  }
}
var GS = Math.ceil,
  Na = $n.ReactCurrentDispatcher,
  Fd = $n.ReactCurrentOwner,
  Ut = $n.ReactCurrentBatchConfig,
  ye = 0,
  tt = null,
  qe = null,
  it = 0,
  Tt = 0,
  to = er(0),
  Xe = 0,
  Vi = null,
  wr = 0,
  el = 0,
  Ud = 0,
  vi = null,
  wt = null,
  Wd = 0,
  So = 1 / 0,
  gn = null,
  $a = !1,
  Lc = null,
  Gn = null,
  Ls = !1,
  Fn = null,
  Pa = 0,
  gi = 0,
  Ic = null,
  ta = -1,
  na = 0;

function mt() {
  return ye & 6 ? We() : ta !== -1 ? ta : ta = We()
}

function qn(e) {
  return e.mode & 1 ? ye & 2 && it !== 0 ? it & -it : $S.transition !== null ? (na === 0 && (na = Qm()), na) : (e = Ee, e !== 0 || (e = window.event, e = e === void 0 ? 16 : rv(e.type)), e) : 1
}

function Zt(e, t, n, r) {
  if (50 < gi) throw gi = 0, Ic = null, Error(O(185));
  qi(e, n, r), (!(ye & 2) || e !== tt) && (e === tt && (!(ye & 2) && (el |= n), Xe === 4 && Bn(e, it)), Et(e, r), n === 1 && ye === 0 && !(t.mode & 1) && (So = We() + 500, Qa && tr()))
}

function Et(e, t) {
  var n = e.callbackNode;
  $1(e, t);
  var r = ha(e, e === tt ? it : 0);
  if (r === 0) n !== null && Zf(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Zf(n), t === 1) e.tag === 0 ? NS(jp.bind(null, e)) : xv(jp.bind(null, e)), bS(function() {
      !(ye & 6) && tr()
    }), n = null;
    else {
      switch (Xm(r)) {
        case 1:
          n = md;
          break;
        case 4:
          n = qm;
          break;
        case 16:
          n = pa;
          break;
        case 536870912:
          n = Ym;
          break;
        default:
          n = pa
      }
      n = _g(n, hg.bind(null, e))
    }
    e.callbackPriority = t, e.callbackNode = n
  }
}

function hg(e, t) {
  if (ta = -1, na = 0, ye & 6) throw Error(O(327));
  var n = e.callbackNode;
  if (lo() && e.callbackNode !== n) return null;
  var r = ha(e, e === tt ? it : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Aa(e, r);
  else {
    t = r;
    var o = ye;
    ye |= 2;
    var i = vg();
    (tt !== e || it !== t) && (gn = null, So = We() + 500, mr(e, t));
    do try {
      QS();
      break
    } catch (a) {
      mg(e, a)
    }
    while (1);
    Td(), Na.current = i, ye = o, qe !== null ? t = 0 : (tt = null, it = 0, t = Xe)
  }
  if (t !== 0) {
    if (t === 2 && (o = ac(e), o !== 0 && (r = o, t = Mc(e, o))), t === 1) throw n = Vi, mr(e, 0), Bn(e, r), Et(e, We()), n;
    if (t === 6) Bn(e, r);
    else {
      if (o = e.current.alternate, !(r & 30) && !qS(o) && (t = Aa(e, r), t === 2 && (i = ac(e), i !== 0 && (r = i, t = Mc(e, i))), t === 1)) throw n = Vi, mr(e, 0), Bn(e, r), Et(e, We()), n;
      switch (e.finishedWork = o, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(O(345));
        case 2:
          ar(e, wt, gn);
          break;
        case 3:
          if (Bn(e, r), (r & 130023424) === r && (t = Wd + 500 - We(), 10 < t)) {
            if (ha(e, 0) !== 0) break;
            if (o = e.suspendedLanes, (o & r) !== r) {
              mt(), e.pingedLanes |= e.suspendedLanes & o;
              break
            }
            e.timeoutHandle = mc(ar.bind(null, e, wt, gn), t);
            break
          }
          ar(e, wt, gn);
          break;
        case 4:
          if (Bn(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, o = -1; 0 < r;) {
            var s = 31 - Xt(r);
            i = 1 << s, s = t[s], s > o && (o = s), r &= ~i
          }
          if (r = o, r = We() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * GS(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = mc(ar.bind(null, e, wt, gn), r);
            break
          }
          ar(e, wt, gn);
          break;
        case 5:
          ar(e, wt, gn);
          break;
        default:
          throw Error(O(329))
      }
    }
  }
  return Et(e, We()), e.callbackNode === n ? hg.bind(null, e) : null
}

function Mc(e, t) {
  var n = vi;
  return e.current.memoizedState.isDehydrated && (mr(e, t).flags |= 256), e = Aa(e, t), e !== 2 && (t = wt, wt = n, t !== null && Oc(t)), e
}

function Oc(e) {
  wt === null ? wt = e : wt.push.apply(wt, e)
}

function qS(e) {
  for (var t = e;;) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!en(i(), o)) return !1
          } catch {
            return !1
          }
        }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null;) {
        if (t.return === null || t.return === e) return !0;
        t = t.return
      }
      t.sibling.return = t.return, t = t.sibling
    }
  }
  return !0
}

function Bn(e, t) {
  for (t &= ~Ud, t &= ~el, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
    var n = 31 - Xt(t),
      r = 1 << n;
    e[n] = -1, t &= ~r
  }
}

function jp(e) {
  if (ye & 6) throw Error(O(327));
  lo();
  var t = ha(e, 0);
  if (!(t & 1)) return Et(e, We()), null;
  var n = Aa(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ac(e);
    r !== 0 && (t = r, n = Mc(e, r))
  }
  if (n === 1) throw n = Vi, mr(e, 0), Bn(e, t), Et(e, We()), n;
  if (n === 6) throw Error(O(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, ar(e, wt, gn), Et(e, We()), null
}

function jd(e, t) {
  var n = ye;
  ye |= 1;
  try {
    return e(t)
  } finally {
    ye = n, ye === 0 && (So = We() + 500, Qa && tr())
  }
}

function _r(e) {
  Fn !== null && Fn.tag === 0 && !(ye & 6) && lo();
  var t = ye;
  ye |= 1;
  var n = Ut.transition,
    r = Ee;
  try {
    if (Ut.transition = null, Ee = 1, e) return e()
  } finally {
    Ee = r, Ut.transition = n, ye = t, !(ye & 6) && tr()
  }
}

function Hd() {
  Tt = to.current, Pe(to)
}

function mr(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, ES(n)), qe !== null)
    for (n = qe.return; n !== null;) {
      var r = n;
      switch (bd(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Sa();
          break;
        case 3:
          go(), Pe(xt), Pe(dt), Id();
          break;
        case 5:
          Ld(r);
          break;
        case 4:
          go();
          break;
        case 13:
          Pe(Oe);
          break;
        case 19:
          Pe(Oe);
          break;
        case 10:
          Nd(r.type._context);
          break;
        case 22:
        case 23:
          Hd()
      }
      n = n.return
    }
  if (tt = e, qe = e = Yn(e.current, null), it = Tt = t, Xe = 0, Vi = null, Ud = el = wr = 0, wt = vi = null, fr !== null) {
    for (t = 0; t < fr.length; t++)
      if (n = fr[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          i.next = o, r.next = s
        }
        n.pending = r
      } fr = null
  }
  return e
}

function mg(e, t) {
  do {
    var n = qe;
    try {
      if (Td(), Zs.current = Ta, Ca) {
        for (var r = ze.memoizedState; r !== null;) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next
        }
        Ca = !1
      }
      if (Sr = 0, et = Qe = ze = null, hi = !1, Di = 0, Fd.current = null, n === null || n.return === null) {
        Xe = 1, Vi = t, qe = null;
        break
      }
      e: {
        var i = e,
          s = n.return,
          a = n,
          l = t;
        if (t = it, a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
          var u = l,
            c = a,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var p = c.alternate;
            p ? (c.updateQueue = p.updateQueue, c.memoizedState = p.memoizedState, c.lanes = p.lanes) : (c.updateQueue = null, c.memoizedState = null)
          }
          var y = Pp(s);
          if (y !== null) {
            y.flags &= -257, Ap(y, s, a, i, t), y.mode & 1 && $p(i, u, t), t = y, l = u;
            var h = t.updateQueue;
            if (h === null) {
              var v = new Set;
              v.add(l), t.updateQueue = v
            } else h.add(l);
            break e
          } else {
            if (!(t & 1)) {
              $p(i, u, t), Kd();
              break e
            }
            l = Error(O(426))
          }
        } else if (Ie && a.mode & 1) {
          var N = Pp(s);
          if (N !== null) {
            !(N.flags & 65536) && (N.flags |= 256), Ap(N, s, a, i, t), kd(yo(l, a));
            break e
          }
        }
        i = l = yo(l, a),
        Xe !== 4 && (Xe = 2),
        vi === null ? vi = [i] : vi.push(i),
        i = s;do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var g = Zv(i, l, t);
              Rp(i, g);
              break e;
            case 1:
              a = l;
              var f = i.type,
                m = i.stateNode;
              if (!(i.flags & 128) && (typeof f.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Gn === null || !Gn.has(m)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var S = Jv(i, a, t);
                Rp(i, S);
                break e
              }
          }
          i = i.return
        } while (i !== null)
      }
      yg(n)
    } catch (x) {
      t = x, qe === n && n !== null && (qe = n = n.return);
      continue
    }
    break
  } while (1)
}

function vg() {
  var e = Na.current;
  return Na.current = Ta, e === null ? Ta : e
}

function Kd() {
  (Xe === 0 || Xe === 3 || Xe === 2) && (Xe = 4), tt === null || !(wr & 268435455) && !(el & 268435455) || Bn(tt, it)
}

function Aa(e, t) {
  var n = ye;
  ye |= 2;
  var r = vg();
  (tt !== e || it !== t) && (gn = null, mr(e, t));
  do try {
    YS();
    break
  } catch (o) {
    mg(e, o)
  }
  while (1);
  if (Td(), ye = n, Na.current = r, qe !== null) throw Error(O(261));
  return tt = null, it = 0, Xe
}

function YS() {
  for (; qe !== null;) gg(qe)
}

function QS() {
  for (; qe !== null && !_1();) gg(qe)
}

function gg(e) {
  var t = wg(e.alternate, e, Tt);
  e.memoizedProps = e.pendingProps, t === null ? yg(e) : qe = t, Fd.current = null
}

function yg(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = WS(n, t), n !== null) {
        n.flags &= 32767, qe = n;
        return
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Xe = 6, qe = null;
        return
      }
    } else if (n = US(n, t, Tt), n !== null) {
      qe = n;
      return
    }
    if (t = t.sibling, t !== null) {
      qe = t;
      return
    }
    qe = t = e
  } while (t !== null);
  Xe === 0 && (Xe = 5)
}

function ar(e, t, n) {
  var r = Ee,
    o = Ut.transition;
  try {
    Ut.transition = null, Ee = 1, XS(e, t, n, r)
  } finally {
    Ut.transition = o, Ee = r
  }
  return null
}

function XS(e, t, n, r) {
  do lo(); while (Fn !== null);
  if (ye & 6) throw Error(O(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(O(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (P1(e, i), e === tt && (qe = tt = null, it = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ls || (Ls = !0, _g(pa, function() {
      return lo(), null
    })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Ut.transition, Ut.transition = null;
    var s = Ee;
    Ee = 1;
    var a = ye;
    ye |= 4, Fd.current = null, HS(e, n), fg(n, e), gS(pc), ma = !!fc, pc = fc = null, e.current = n, KS(n), x1(), ye = a, Ee = s, Ut.transition = i
  } else e.current = n;
  if (Ls && (Ls = !1, Fn = e, Pa = o), i = e.pendingLanes, i === 0 && (Gn = null), b1(n.stateNode), Et(e, We()), t !== null)
    for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, {
      componentStack: o.stack,
      digest: o.digest
    });
  if ($a) throw $a = !1, e = Lc, Lc = null, e;
  return Pa & 1 && e.tag !== 0 && lo(), i = e.pendingLanes, i & 1 ? e === Ic ? gi++ : (gi = 0, Ic = e) : gi = 0, tr(), null
}

function lo() {
  if (Fn !== null) {
    var e = Xm(Pa),
      t = Ut.transition,
      n = Ee;
    try {
      if (Ut.transition = null, Ee = 16 > e ? 16 : e, Fn === null) var r = !1;
      else {
        if (e = Fn, Fn = null, Pa = 0, ye & 6) throw Error(O(331));
        var o = ye;
        for (ye |= 4, G = e.current; G !== null;) {
          var i = G,
            s = i.child;
          if (G.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (G = u; G !== null;) {
                  var c = G;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      mi(8, c, i)
                  }
                  var d = c.child;
                  if (d !== null) d.return = c, G = d;
                  else
                    for (; G !== null;) {
                      c = G;
                      var p = c.sibling,
                        y = c.return;
                      if (ug(c), c === u) {
                        G = null;
                        break
                      }
                      if (p !== null) {
                        p.return = y, G = p;
                        break
                      }
                      G = y
                    }
                }
              }
              var h = i.alternate;
              if (h !== null) {
                var v = h.child;
                if (v !== null) {
                  h.child = null;
                  do {
                    var N = v.sibling;
                    v.sibling = null, v = N
                  } while (v !== null)
                }
              }
              G = i
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) s.return = i, G = s;
          else e: for (; G !== null;) {
            if (i = G, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                mi(9, i, i.return)
            }
            var g = i.sibling;
            if (g !== null) {
              g.return = i.return, G = g;
              break e
            }
            G = i.return
          }
        }
        var f = e.current;
        for (G = f; G !== null;) {
          s = G;
          var m = s.child;
          if (s.subtreeFlags & 2064 && m !== null) m.return = s, G = m;
          else e: for (s = f; G !== null;) {
            if (a = G, a.flags & 2048) try {
              switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  Ja(9, a)
              }
            } catch (x) {
              Ue(a, a.return, x)
            }
            if (a === s) {
              G = null;
              break e
            }
            var S = a.sibling;
            if (S !== null) {
              S.return = a.return, G = S;
              break e
            }
            G = a.return
          }
        }
        if (ye = o, tr(), cn && typeof cn.onPostCommitFiberRoot == "function") try {
          cn.onPostCommitFiberRoot(Ha, e)
        } catch {}
        r = !0
      }
      return r
    } finally {
      Ee = n, Ut.transition = t
    }
  }
  return !1
}

function Hp(e, t, n) {
  t = yo(n, t), t = Zv(e, t, 1), e = Kn(e, t, 1), t = mt(), e !== null && (qi(e, 1, t), Et(e, t))
}

function Ue(e, t, n) {
  if (e.tag === 3) Hp(e, e, n);
  else
    for (; t !== null;) {
      if (t.tag === 3) {
        Hp(t, e, n);
        break
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Gn === null || !Gn.has(r))) {
          e = yo(n, e), e = Jv(t, e, 1), t = Kn(t, e, 1), e = mt(), t !== null && (qi(t, 1, e), Et(t, e));
          break
        }
      }
      t = t.return
    }
}

function ZS(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = mt(), e.pingedLanes |= e.suspendedLanes & n, tt === e && (it & n) === n && (Xe === 4 || Xe === 3 && (it & 130023424) === it && 500 > We() - Wd ? mr(e, 0) : Ud |= n), Et(e, t)
}

function Sg(e, t) {
  t === 0 && (e.mode & 1 ? (t = Rs, Rs <<= 1, !(Rs & 130023424) && (Rs = 4194304)) : t = 1);
  var n = mt();
  e = Cn(e, t), e !== null && (qi(e, t, n), Et(e, n))
}

function JS(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Sg(e, n)
}

function ew(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(O(314))
  }
  r !== null && r.delete(t), Sg(e, n)
}
var wg;
wg = function(e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || xt.current) _t = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return _t = !1, FS(e, t, n);
      _t = !!(e.flags & 131072)
    }
  else _t = !1, Ie && t.flags & 1048576 && Rv(t, xa, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      ea(e, t), e = t.pendingProps;
      var o = ho(t, dt.current);
      ao(t, n), o = Od(null, t, r, e, o, n);
      var i = Dd();
      return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Rt(r) ? (i = !0, wa(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Pd(t), o.updater = Xa, t.stateNode = o, o._reactInternals = t, xc(t, r, e, n), t = bc(null, t, r, !0, i, n)) : (t.tag = 0, Ie && i && Ed(t), pt(null, t, o, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (ea(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = nw(r), e = qt(r, e), o) {
          case 0:
            t = Ec(null, t, r, e, n);
            break e;
          case 1:
            t = Mp(null, t, r, e, n);
            break e;
          case 11:
            t = Lp(null, t, r, e, n);
            break e;
          case 14:
            t = Ip(null, t, r, qt(r.type, e), n);
            break e
        }
        throw Error(O(306, r, ""))
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : qt(r, o), Ec(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : qt(r, o), Mp(e, t, r, o, n);
    case 3:
      e: {
        if (rg(t), e === null) throw Error(O(387));r = t.pendingProps,
        i = t.memoizedState,
        o = i.element,
        Cv(e, t),
        ba(t, r, null, n);
        var s = t.memoizedState;
        if (r = s.element, i.isDehydrated)
          if (i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions
            }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
            o = yo(Error(O(423)), t), t = Op(e, t, r, n, o);
            break e
          } else if (r !== o) {
          o = yo(Error(O(424)), t), t = Op(e, t, r, n, o);
          break e
        } else
          for ($t = Hn(t.stateNode.containerInfo.firstChild), Pt = t, Ie = !0, Qt = null, n = Pv(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (mo(), r === o) {
            t = Tn(e, t, n);
            break e
          }
          pt(e, t, r, n)
        }
        t = t.child
      }
      return t;
    case 5:
      return Av(t), e === null && Sc(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, s = o.children, hc(r, o) ? s = null : i !== null && hc(r, i) && (t.flags |= 32), ng(e, t), pt(e, t, s, n), t.child;
    case 6:
      return e === null && Sc(t), null;
    case 13:
      return og(e, t, n);
    case 4:
      return Ad(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = vo(t, null, r, n) : pt(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : qt(r, o), Lp(e, t, r, o, n);
    case 7:
      return pt(e, t, t.pendingProps, n), t.child;
    case 8:
      return pt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return pt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, s = o.value, Te(Ra, r._currentValue), r._currentValue = s, i !== null)
          if (en(i.value, s)) {
            if (i.children === o.children && !xt.current) {
              t = Tn(e, t, n);
              break e
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null;) {
              var a = i.dependencies;
              if (a !== null) {
                s = i.child;
                for (var l = a.firstContext; l !== null;) {
                  if (l.context === r) {
                    if (i.tag === 1) {
                      l = Rn(-1, n & -n), l.tag = 2;
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null ? l.next = l : (l.next = c.next, c.next = l), u.pending = l
                      }
                    }
                    i.lanes |= n, l = i.alternate, l !== null && (l.lanes |= n), wc(i.return, n, t), a.lanes |= n;
                    break
                  }
                  l = l.next
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (s = i.return, s === null) throw Error(O(341));
                s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), wc(s, n, t), s = i.sibling
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null;) {
                  if (s === t) {
                    s = null;
                    break
                  }
                  if (i = s.sibling, i !== null) {
                    i.return = s.return, s = i;
                    break
                  }
                  s = s.return
                }
              i = s
            }
        pt(e, t, o.children, n),
        t = t.child
      }
      return t;
    case 9:
      return o = t.type, r = t.pendingProps.children, ao(t, n), o = Wt(o), r = r(o), t.flags |= 1, pt(e, t, r, n), t.child;
    case 14:
      return r = t.type, o = qt(r, t.pendingProps), o = qt(r.type, o), Ip(e, t, r, o, n);
    case 15:
      return eg(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : qt(r, o), ea(e, t), t.tag = 1, Rt(r) ? (e = !0, wa(t)) : e = !1, ao(t, n), Nv(t, r, o), xc(t, r, o, n), bc(null, t, r, !0, e, n);
    case 19:
      return ig(e, t, n);
    case 22:
      return tg(e, t, n)
  }
  throw Error(O(156, t.tag))
};

function _g(e, t) {
  return Gm(e, t)
}

function tw(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function Ft(e, t, n, r) {
  return new tw(e, t, n, r)
}

function Gd(e) {
  return e = e.prototype, !(!e || !e.isReactComponent)
}

function nw(e) {
  if (typeof e == "function") return Gd(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === fd) return 11;
    if (e === pd) return 14
  }
  return 2
}

function Yn(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ft(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
    lanes: t.lanes,
    firstContext: t.firstContext
  }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function ra(e, t, n, r, o, i) {
  var s = 2;
  if (r = e, typeof e == "function") Gd(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else e: switch (e) {
    case Hr:
      return vr(n.children, o, i, t);
    case dd:
      s = 8, o |= 8;
      break;
    case Ku:
      return e = Ft(12, n, t, o | 2), e.elementType = Ku, e.lanes = i, e;
    case Gu:
      return e = Ft(13, n, t, o), e.elementType = Gu, e.lanes = i, e;
    case qu:
      return e = Ft(19, n, t, o), e.elementType = qu, e.lanes = i, e;
    case $m:
      return tl(n, o, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Tm:
          s = 10;
          break e;
        case Nm:
          s = 9;
          break e;
        case fd:
          s = 11;
          break e;
        case pd:
          s = 14;
          break e;
        case Mn:
          s = 16, r = null;
          break e
      }
      throw Error(O(130, e == null ? e : typeof e, ""))
  }
  return t = Ft(s, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t
}

function vr(e, t, n, r) {
  return e = Ft(7, e, r, t), e.lanes = n, e
}

function tl(e, t, n, r) {
  return e = Ft(22, e, r, t), e.elementType = $m, e.lanes = n, e.stateNode = {
    isHidden: !1
  }, e
}

function $u(e, t, n) {
  return e = Ft(6, e, null, t), e.lanes = n, e
}

function Pu(e, t, n) {
  return t = Ft(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
    containerInfo: e.containerInfo,
    pendingChildren: null,
    implementation: e.implementation
  }, t
}

function rw(e, t, n, r, o) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = du(0), this.expirationTimes = du(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = du(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null
}

function qd(e, t, n, r, o, i, s, a, l) {
  return e = new rw(e, t, n, a, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Ft(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
    element: r,
    isDehydrated: n,
    cache: null,
    transitions: null,
    pendingSuspenseBoundaries: null
  }, Pd(i), e
}

function ow(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: jr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n
  }
}

function xg(e) {
  if (!e) return Zn;
  e = e._reactInternals;
  e: {
    if (kr(e) !== e || e.tag !== 1) throw Error(O(170));
    var t = e;do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Rt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e
          }
      }
      t = t.return
    } while (t !== null);
    throw Error(O(171))
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Rt(n)) return _v(e, n, t)
  }
  return t
}

function Rg(e, t, n, r, o, i, s, a, l) {
  return e = qd(n, r, !0, e, o, i, s, a, l), e.context = xg(null), n = e.current, r = mt(), o = qn(n), i = Rn(r, o), i.callback = t != null ? t : null, Kn(n, i, o), e.current.lanes = o, qi(e, o, r), Et(e, r), e
}

function nl(e, t, n, r) {
  var o = t.current,
    i = mt(),
    s = qn(o);
  return n = xg(n), t.context === null ? t.context = n : t.pendingContext = n, t = Rn(i, s), t.payload = {
    element: e
  }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Kn(o, t, s), e !== null && (Zt(e, o, s, i), Xs(e, o, s)), s
}

function La(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode
  }
}

function Kp(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t
  }
}

function Yd(e, t) {
  Kp(e, t), (e = e.alternate) && Kp(e, t)
}

function iw() {
  return null
}
var Eg = typeof reportError == "function" ? reportError : function(e) {
  console.error(e)
};

function Qd(e) {
  this._internalRoot = e
}
rl.prototype.render = Qd.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(O(409));
  nl(e, t, null, null)
};
rl.prototype.unmount = Qd.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    _r(function() {
      nl(null, e, null, null)
    }), t[kn] = null
  }
};

function rl(e) {
  this._internalRoot = e
}
rl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = ev();
    e = {
      blockedOn: null,
      target: e,
      priority: t
    };
    for (var n = 0; n < zn.length && t !== 0 && t < zn[n].priority; n++);
    zn.splice(n, 0, e), n === 0 && nv(e)
  }
};

function Xd(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function ol(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Gp() {}

function sw(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var u = La(s);
        i.call(u)
      }
    }
    var s = Rg(t, r, e, 0, null, !1, !1, "", Gp);
    return e._reactRootContainer = s, e[kn] = s.current, Ai(e.nodeType === 8 ? e.parentNode : e), _r(), s
  }
  for (; o = e.lastChild;) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function() {
      var u = La(l);
      a.call(u)
    }
  }
  var l = qd(e, 0, !1, null, null, !1, !1, "", Gp);
  return e._reactRootContainer = l, e[kn] = l.current, Ai(e.nodeType === 8 ? e.parentNode : e), _r(function() {
    nl(t, l, n, r)
  }), l
}

function il(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var a = o;
      o = function() {
        var l = La(s);
        a.call(l)
      }
    }
    nl(t, s, e, o)
  } else s = sw(n, t, e, o, r);
  return La(s)
}
Zm = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = oi(t.pendingLanes);
        n !== 0 && (vd(t, n | 1), Et(t, We()), !(ye & 6) && (So = We() + 500, tr()))
      }
      break;
    case 13:
      _r(function() {
        var r = Cn(e, 1);
        if (r !== null) {
          var o = mt();
          Zt(r, e, 1, o)
        }
      }), Yd(e, 1)
  }
};
gd = function(e) {
  if (e.tag === 13) {
    var t = Cn(e, 134217728);
    if (t !== null) {
      var n = mt();
      Zt(t, e, 134217728, n)
    }
    Yd(e, 134217728)
  }
};
Jm = function(e) {
  if (e.tag === 13) {
    var t = qn(e),
      n = Cn(e, t);
    if (n !== null) {
      var r = mt();
      Zt(n, e, t, r)
    }
    Yd(e, t)
  }
};
ev = function() {
  return Ee
};
tv = function(e, t) {
  var n = Ee;
  try {
    return Ee = e, t()
  } finally {
    Ee = n
  }
};
oc = function(e, t, n) {
  switch (t) {
    case "input":
      if (Xu(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode;) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Ya(r);
            if (!o) throw Error(O(90));
            Am(r), Xu(r, o)
          }
        }
      }
      break;
    case "textarea":
      Im(e, n);
      break;
    case "select":
      t = n.value, t != null && ro(e, !!n.multiple, t, !1)
  }
};
Fm = jd;
Um = _r;
var aw = {
    usingClientEntryPoint: !1,
    Events: [Qi, Yr, Ya, Bm, Vm, jd]
  },
  Go = {
    findFiberByHostInstance: dr,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom"
  },
  lw = {
    bundleType: Go.bundleType,
    version: Go.version,
    rendererPackageName: Go.rendererPackageName,
    rendererConfig: Go.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: $n.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
      return e = Hm(e), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Go.findFiberByHostInstance || iw,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Is = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Is.isDisabled && Is.supportsFiber) try {
    Ha = Is.inject(lw), cn = Is
  } catch {}
}
It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = aw;
It.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Xd(t)) throw Error(O(200));
  return ow(e, t, null, n)
};
It.createRoot = function(e, t) {
  if (!Xd(e)) throw Error(O(299));
  var n = !1,
    r = "",
    o = Eg;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = qd(e, 1, !1, null, null, n, !1, r, o), e[kn] = t.current, Ai(e.nodeType === 8 ? e.parentNode : e), new Qd(t)
};
It.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0) throw typeof e.render == "function" ? Error(O(188)) : (e = Object.keys(e).join(","), Error(O(268, e)));
  return e = Hm(t), e = e === null ? null : e.stateNode, e
};
It.flushSync = function(e) {
  return _r(e)
};
It.hydrate = function(e, t, n) {
  if (!ol(t)) throw Error(O(200));
  return il(null, e, t, !0, n)
};
It.hydrateRoot = function(e, t, n) {
  if (!Xd(e)) throw Error(O(405));
  var r = n != null && n.hydratedSources || null,
    o = !1,
    i = "",
    s = Eg;
  if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Rg(t, null, e, 1, n != null ? n : null, o, !1, i, s), e[kn] = t.current, Ai(e), r)
    for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
  return new rl(t)
};
It.render = function(e, t, n) {
  if (!ol(t)) throw Error(O(200));
  return il(null, e, t, !1, n)
};
It.unmountComponentAtNode = function(e) {
  if (!ol(e)) throw Error(O(40));
  return e._reactRootContainer ? (_r(function() {
    il(null, null, e, !1, function() {
      e._reactRootContainer = null, e[kn] = null
    })
  }), !0) : !1
};
It.unstable_batchedUpdates = jd;
It.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!ol(n)) throw Error(O(200));
  if (e == null || e._reactInternals === void 0) throw Error(O(38));
  return il(e, t, n, !1, r)
};
It.version = "18.2.0-next-9e3b772b8-20220608";

function bg() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bg)
  } catch (e) {
    console.error(e)
  }
}
bg(), Rm.exports = It;
var Zd = Rm.exports;
const si = fm(Zd);
var qp = Zd;
ju.createRoot = qp.createRoot, ju.hydrateRoot = qp.hydrateRoot;

function uw(e) {
  const t = new Error(e);
  if (t.stack === void 0) try {
    throw t
  } catch {}
  return t
}
var cw = uw,
  le = cw;

function dw(e) {
  return !!e && typeof e.then == "function"
}
var $e = dw;

function fw(e, t) {
  if (e != null) return e;
  throw le(t != null ? t : "Got unexpected null or undefined")
}
var Me = fw;

function ae(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class sl {
  getValue() {
    throw le("BaseLoadable")
  }
  toPromise() {
    throw le("BaseLoadable")
  }
  valueMaybe() {
    throw le("BaseLoadable")
  }
  valueOrThrow() {
    throw le(`Loadable expected value, but in "${this.state}" state`)
  }
  promiseMaybe() {
    throw le("BaseLoadable")
  }
  promiseOrThrow() {
    throw le(`Loadable expected promise, but in "${this.state}" state`)
  }
  errorMaybe() {
    throw le("BaseLoadable")
  }
  errorOrThrow() {
    throw le(`Loadable expected error, but in "${this.state}" state`)
  }
  is(t) {
    return t.state === this.state && t.contents === this.contents
  }
  map(t) {
    throw le("BaseLoadable")
  }
}
class pw extends sl {
  constructor(t) {
    super(), ae(this, "state", "hasValue"), ae(this, "contents", void 0), this.contents = t
  }
  getValue() {
    return this.contents
  }
  toPromise() {
    return Promise.resolve(this.contents)
  }
  valueMaybe() {
    return this.contents
  }
  valueOrThrow() {
    return this.contents
  }
  promiseMaybe() {}
  errorMaybe() {}
  map(t) {
    try {
      const n = t(this.contents);
      return $e(n) ? xr(n) : wo(n) ? n : Zi(n)
    } catch (n) {
      return $e(n) ? xr(n.next(() => this.map(t))) : al(n)
    }
  }
}
class hw extends sl {
  constructor(t) {
    super(), ae(this, "state", "hasError"), ae(this, "contents", void 0), this.contents = t
  }
  getValue() {
    throw this.contents
  }
  toPromise() {
    return Promise.reject(this.contents)
  }
  valueMaybe() {}
  promiseMaybe() {}
  errorMaybe() {
    return this.contents
  }
  errorOrThrow() {
    return this.contents
  }
  map(t) {
    return this
  }
}
class kg extends sl {
  constructor(t) {
    super(), ae(this, "state", "loading"), ae(this, "contents", void 0), this.contents = t
  }
  getValue() {
    throw this.contents
  }
  toPromise() {
    return this.contents
  }
  valueMaybe() {}
  promiseMaybe() {
    return this.contents
  }
  promiseOrThrow() {
    return this.contents
  }
  errorMaybe() {}
  map(t) {
    return xr(this.contents.then(n => {
      const r = t(n);
      if (wo(r)) {
        const o = r;
        switch (o.state) {
          case "hasValue":
            return o.contents;
          case "hasError":
            throw o.contents;
          case "loading":
            return o.contents
        }
      }
      return r
    }).catch(n => {
      if ($e(n)) return n.then(() => this.map(t).contents);
      throw n
    }))
  }
}

function Zi(e) {
  return Object.freeze(new pw(e))
}

function al(e) {
  return Object.freeze(new hw(e))
}

function xr(e) {
  return Object.freeze(new kg(e))
}

function Cg() {
  return Object.freeze(new kg(new Promise(() => {})))
}

function mw(e) {
  return e.every(t => t.state === "hasValue") ? Zi(e.map(t => t.contents)) : e.some(t => t.state === "hasError") ? al(Me(e.find(t => t.state === "hasError"), "Invalid loadable passed to loadableAll").contents) : xr(Promise.all(e.map(t => t.contents)))
}

function Tg(e) {
  const n = (Array.isArray(e) ? e : Object.getOwnPropertyNames(e).map(o => e[o])).map(o => wo(o) ? o : $e(o) ? xr(o) : Zi(o)),
    r = mw(n);
  return Array.isArray(e) ? r : r.map(o => Object.getOwnPropertyNames(e).reduce((i, s, a) => ({
    ...i,
    [s]: o[a]
  }), {}))
}

function wo(e) {
  return e instanceof sl
}
const vw = {
  of: e => $e(e) ? xr(e) : wo(e) ? e : Zi(e),
  error: e => al(e),
  loading: () => Cg(),
  all: Tg,
  isLoadable: wo
};
var Cr = {
    loadableWithValue: Zi,
    loadableWithError: al,
    loadableWithPromise: xr,
    loadableLoading: Cg,
    loadableAll: Tg,
    isLoadable: wo,
    RecoilLoadable: vw
  },
  gw = Cr.loadableWithValue,
  yw = Cr.loadableWithError,
  Sw = Cr.loadableWithPromise,
  ww = Cr.loadableLoading,
  _w = Cr.loadableAll,
  xw = Cr.isLoadable,
  Rw = Cr.RecoilLoadable,
  Ji = Object.freeze({
    __proto__: null,
    loadableWithValue: gw,
    loadableWithError: yw,
    loadableWithPromise: Sw,
    loadableLoading: ww,
    loadableAll: _w,
    isLoadable: xw,
    RecoilLoadable: Rw
  });
const Dc = {
  RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED: !0,
  RECOIL_GKS_ENABLED: new Set(["recoil_hamt_2020", "recoil_sync_external_store", "recoil_suppress_rerender_in_callback", "recoil_memory_managament_2020"])
};

function Ew(e, t) {
  var n, r;
  const o = (n = process.env[e]) === null || n === void 0 || (r = n.toLowerCase()) === null || r === void 0 ? void 0 : r.trim();
  if (o == null || o === "") return;
  if (!["true", "false"].includes(o)) throw le(`({}).${e} value must be 'true', 'false', or empty: ${o}`);
  t(o === "true")
}

function bw(e, t) {
  var n;
  const r = (n = process.env[e]) === null || n === void 0 ? void 0 : n.trim();
  r == null || r === "" || t(r.split(/\s*,\s*|\s+/))
}

function kw() {
  var e;
  typeof process > "u" || ((e = process) === null || e === void 0 ? void 0 : e.env) != null && (Ew("RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED", t => {
    Dc.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = t
  }), bw("RECOIL_GKS_ENABLED", t => {
    t.forEach(n => {
      Dc.RECOIL_GKS_ENABLED.add(n)
    })
  }))
}
kw();
var Ao = Dc;

function ll(e) {
  return Ao.RECOIL_GKS_ENABLED.has(e)
}
ll.setPass = e => {
  Ao.RECOIL_GKS_ENABLED.add(e)
};
ll.setFail = e => {
  Ao.RECOIL_GKS_ENABLED.delete(e)
};
ll.clear = () => {
  Ao.RECOIL_GKS_ENABLED.clear()
};
var ke = ll;

function Cw(e, t, {
  error: n
} = {}) {
  return null
}
var Tw = Cw,
  Jd = Tw,
  Au, Lu, Iu;
const Nw = (Au = ge.createMutableSource) !== null && Au !== void 0 ? Au : ge.unstable_createMutableSource,
  Ng = (Lu = ge.useMutableSource) !== null && Lu !== void 0 ? Lu : ge.unstable_useMutableSource,
  $g = (Iu = ge.useSyncExternalStore) !== null && Iu !== void 0 ? Iu : ge.unstable_useSyncExternalStore;

function $w() {
  var e;
  const {
    ReactCurrentDispatcher: t,
    ReactCurrentOwner: n
  } = ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  return ((e = t == null ? void 0 : t.current) !== null && e !== void 0 ? e : n.currentDispatcher).useSyncExternalStore != null
}

function Pw() {
  return ke("recoil_transition_support") ? {
    mode: "TRANSITION_SUPPORT",
    early: !0,
    concurrent: !0
  } : ke("recoil_sync_external_store") && $g != null ? {
    mode: "SYNC_EXTERNAL_STORE",
    early: !0,
    concurrent: !1
  } : ke("recoil_mutable_source") && Ng != null && typeof window < "u" && !window.$disableRecoilValueMutableSource_TEMP_HACK_DO_NOT_USE ? ke("recoil_suppress_rerender_in_callback") ? {
    mode: "MUTABLE_SOURCE",
    early: !0,
    concurrent: !0
  } : {
    mode: "MUTABLE_SOURCE",
    early: !1,
    concurrent: !1
  } : ke("recoil_suppress_rerender_in_callback") ? {
    mode: "LEGACY",
    early: !0,
    concurrent: !1
  } : {
    mode: "LEGACY",
    early: !1,
    concurrent: !1
  }
}

function Aw() {
  return !1
}
var es = {
  createMutableSource: Nw,
  useMutableSource: Ng,
  useSyncExternalStore: $g,
  currentRendererSupportsUseSyncExternalStore: $w,
  reactMode: Pw,
  isFastRefreshEnabled: Aw
};
class ef {
  constructor(t) {
    ae(this, "key", void 0), this.key = t
  }
  toJSON() {
    return {
      key: this.key
    }
  }
}
class Pg extends ef {}
class Ag extends ef {}

function Lw(e) {
  return e instanceof Pg || e instanceof Ag
}
var ul = {
    AbstractRecoilValue: ef,
    RecoilState: Pg,
    RecoilValueReadOnly: Ag,
    isRecoilValue: Lw
  },
  Iw = ul.AbstractRecoilValue,
  Mw = ul.RecoilState,
  Ow = ul.RecoilValueReadOnly,
  Dw = ul.isRecoilValue,
  _o = Object.freeze({
    __proto__: null,
    AbstractRecoilValue: Iw,
    RecoilState: Mw,
    RecoilValueReadOnly: Ow,
    isRecoilValue: Dw
  });

function zw(e, t) {
  return function*() {
    let n = 0;
    for (const r of e) yield t(r, n++)
  }()
}
var cl = zw;
class Lg {}
const Bw = new Lg,
  Rr = new Map,
  tf = new Map;

function Vw(e) {
  return cl(e, t => Me(tf.get(t)))
}

function Fw(e) {
  if (Rr.has(e)) {
    const t = `Duplicate atom key "${e}". This is a FATAL ERROR in
      production. But it is safe to ignore this warning if it occurred because of
      hot module replacement.`;
    console.warn(t)
  }
}

function Uw(e) {
  Ao.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED && Fw(e.key), Rr.set(e.key, e);
  const t = e.set == null ? new _o.RecoilValueReadOnly(e.key) : new _o.RecoilState(e.key);
  return tf.set(e.key, t), t
}
class Ig extends Error {}

function Ww(e) {
  const t = Rr.get(e);
  if (t == null) throw new Ig(`Missing definition for RecoilValue: "${e}""`);
  return t
}

function jw(e) {
  return Rr.get(e)
}
const Ia = new Map;

function Hw(e) {
  var t;
  if (!ke("recoil_memory_managament_2020")) return;
  const n = Rr.get(e);
  if (n != null && (t = n.shouldDeleteConfigOnRelease) !== null && t !== void 0 && t.call(n)) {
    var r;
    Rr.delete(e), (r = Mg(e)) === null || r === void 0 || r(), Ia.delete(e)
  }
}

function Kw(e, t) {
  ke("recoil_memory_managament_2020") && (t === void 0 ? Ia.delete(e) : Ia.set(e, t))
}

function Mg(e) {
  return Ia.get(e)
}
var Ct = {
  nodes: Rr,
  recoilValues: tf,
  registerNode: Uw,
  getNode: Ww,
  getNodeMaybe: jw,
  deleteNodeConfigIfPossible: Hw,
  setConfigDeletionHandler: Kw,
  getConfigDeletionHandler: Mg,
  recoilValuesForKeys: Vw,
  NodeMissingError: Ig,
  DefaultValue: Lg,
  DEFAULT_VALUE: Bw
};

function Gw(e, t) {
  t()
}
var qw = {
  enqueueExecution: Gw
};

function Yw(e, t) {
  return t = {
    exports: {}
  }, e(t, t.exports), t.exports
}
var Qw = Yw(function(e) {
  var t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(b) {
      return typeof b
    } : function(b) {
      return b && typeof Symbol == "function" && b.constructor === Symbol && b !== Symbol.prototype ? "symbol" : typeof b
    },
    n = {},
    r = 5,
    o = Math.pow(2, r),
    i = o - 1,
    s = o / 2,
    a = o / 4,
    l = {},
    u = function(w) {
      return function() {
        return w
      }
    },
    c = n.hash = function(b) {
      var w = typeof b > "u" ? "undefined" : t(b);
      if (w === "number") return b;
      w !== "string" && (b += "");
      for (var M = 0, F = 0, U = b.length; F < U; ++F) {
        var q = b.charCodeAt(F);
        M = (M << 5) - M + q | 0
      }
      return M
    },
    d = function(w) {
      return w -= w >> 1 & 1431655765, w = (w & 858993459) + (w >> 2 & 858993459), w = w + (w >> 4) & 252645135, w += w >> 8, w += w >> 16, w & 127
    },
    p = function(w, M) {
      return M >>> w & i
    },
    y = function(w) {
      return 1 << w
    },
    h = function(w, M) {
      return d(w & M - 1)
    },
    v = function(w, M, F, U) {
      var q = U;
      if (!w) {
        var oe = U.length;
        q = new Array(oe);
        for (var ne = 0; ne < oe; ++ne) q[ne] = U[ne]
      }
      return q[M] = F, q
    },
    N = function(w, M, F) {
      var U = F.length - 1,
        q = 0,
        oe = 0,
        ne = F;
      if (w) q = oe = M;
      else
        for (ne = new Array(U); q < M;) ne[oe++] = F[q++];
      for (++q; q <= U;) ne[oe++] = F[q++];
      return w && (ne.length = U), ne
    },
    g = function(w, M, F, U) {
      var q = U.length;
      if (w) {
        for (var oe = q; oe >= M;) U[oe--] = U[oe];
        return U[M] = F, U
      }
      for (var ne = 0, re = 0, de = new Array(q + 1); ne < M;) de[re++] = U[ne++];
      for (de[M] = F; ne < q;) de[++re] = U[ne++];
      return de
    },
    f = 1,
    m = 2,
    S = 3,
    x = 4,
    C = {
      __hamt_isEmpty: !0
    },
    R = function(w) {
      return w === C || w && w.__hamt_isEmpty
    },
    A = function(w, M, F, U) {
      return {
        type: f,
        edit: w,
        hash: M,
        key: F,
        value: U,
        _modify: $
      }
    },
    B = function(w, M, F) {
      return {
        type: m,
        edit: w,
        hash: M,
        children: F,
        _modify: V
      }
    },
    T = function(w, M, F) {
      return {
        type: S,
        edit: w,
        mask: M,
        children: F,
        _modify: z
      }
    },
    W = function(w, M, F) {
      return {
        type: x,
        edit: w,
        size: M,
        children: F,
        _modify: K
      }
    },
    Z = function(w) {
      return w === C || w.type === f || w.type === m
    },
    Y = function(w, M, F, U, q) {
      for (var oe = [], ne = U, re = 0, de = 0; ne; ++de) ne & 1 && (oe[de] = q[re++]), ne >>>= 1;
      return oe[M] = F, W(w, re + 1, oe)
    },
    H = function(w, M, F, U) {
      for (var q = new Array(M - 1), oe = 0, ne = 0, re = 0, de = U.length; re < de; ++re)
        if (re !== F) {
          var Ae = U[re];
          Ae && !R(Ae) && (q[oe++] = Ae, ne |= 1 << re)
        } return T(w, ne, q)
    },
    ie = function b(w, M, F, U, q, oe) {
      if (F === q) return B(w, F, [oe, U]);
      var ne = p(M, F),
        re = p(M, q);
      return T(w, y(ne) | y(re), ne === re ? [b(w, M + r, F, U, q, oe)] : ne < re ? [U, oe] : [oe, U])
    },
    J = function(w, M, F, U, q, oe, ne, re) {
      for (var de = q.length, Ae = 0; Ae < de; ++Ae) {
        var St = q[Ae];
        if (F(ne, St.key)) {
          var Je = St.value,
            Dt = oe(Je);
          return Dt === Je ? q : Dt === l ? (--re.value, N(w, Ae, q)) : v(w, Ae, A(M, U, ne, Dt), q)
        }
      }
      var Ht = oe();
      return Ht === l ? q : (++re.value, v(w, de, A(M, U, ne, Ht), q))
    },
    ee = function(w, M) {
      return w === M.edit
    },
    $ = function(w, M, F, U, q, oe, ne) {
      if (M(oe, this.key)) {
        var re = U(this.value);
        return re === this.value ? this : re === l ? (--ne.value, C) : ee(w, this) ? (this.value = re, this) : A(w, q, oe, re)
      }
      var de = U();
      return de === l ? this : (++ne.value, ie(w, F, this.hash, this, q, A(w, q, oe, de)))
    },
    V = function(w, M, F, U, q, oe, ne) {
      if (q === this.hash) {
        var re = ee(w, this),
          de = J(re, w, M, this.hash, this.children, U, oe, ne);
        return de === this.children ? this : de.length > 1 ? B(w, this.hash, de) : de[0]
      }
      var Ae = U();
      return Ae === l ? this : (++ne.value, ie(w, F, this.hash, this, q, A(w, q, oe, Ae)))
    },
    z = function(w, M, F, U, q, oe, ne) {
      var re = this.mask,
        de = this.children,
        Ae = p(F, q),
        St = y(Ae),
        Je = h(re, St),
        Dt = re & St,
        Ht = Dt ? de[Je] : C,
        Pr = Ht._modify(w, M, F + r, U, q, oe, ne);
      if (Ht === Pr) return this;
      var gs = ee(w, this),
        zo = re,
        Bo = void 0;
      if (Dt && R(Pr)) {
        if (zo &= ~St, !zo) return C;
        if (de.length <= 2 && Z(de[Je ^ 1])) return de[Je ^ 1];
        Bo = N(gs, Je, de)
      } else if (!Dt && !R(Pr)) {
        if (de.length >= s) return Y(w, Ae, Pr, re, de);
        zo |= St, Bo = g(gs, Je, Pr, de)
      } else Bo = v(gs, Je, Pr, de);
      return gs ? (this.mask = zo, this.children = Bo, this) : T(w, zo, Bo)
    },
    K = function(w, M, F, U, q, oe, ne) {
      var re = this.size,
        de = this.children,
        Ae = p(F, q),
        St = de[Ae],
        Je = (St || C)._modify(w, M, F + r, U, q, oe, ne);
      if (St === Je) return this;
      var Dt = ee(w, this),
        Ht = void 0;
      if (R(St) && !R(Je)) ++re, Ht = v(Dt, Ae, Je, de);
      else if (!R(St) && R(Je)) {
        if (--re, re <= a) return H(w, re, Ae, de);
        Ht = v(Dt, Ae, C, de)
      } else Ht = v(Dt, Ae, Je, de);
      return Dt ? (this.size = re, this.children = Ht, this) : W(w, re, Ht)
    };
  C._modify = function(b, w, M, F, U, q, oe) {
    var ne = F();
    return ne === l ? C : (++oe.value, A(b, U, q, ne))
  };

  function E(b, w, M, F, U) {
    this._editable = b, this._edit = w, this._config = M, this._root = F, this._size = U
  }
  E.prototype.setTree = function(b, w) {
    return this._editable ? (this._root = b, this._size = w, this) : b === this._root ? this : new E(this._editable, this._edit, this._config, b, w)
  };
  var D = n.tryGetHash = function(b, w, M, F) {
    for (var U = F._root, q = 0, oe = F._config.keyEq;;) switch (U.type) {
      case f:
        return oe(M, U.key) ? U.value : b;
      case m: {
        if (w === U.hash)
          for (var ne = U.children, re = 0, de = ne.length; re < de; ++re) {
            var Ae = ne[re];
            if (oe(M, Ae.key)) return Ae.value
          }
        return b
      }
      case S: {
        var St = p(q, w),
          Je = y(St);
        if (U.mask & Je) {
          U = U.children[h(U.mask, Je)], q += r;
          break
        }
        return b
      }
      case x: {
        if (U = U.children[p(q, w)], U) {
          q += r;
          break
        }
        return b
      }
      default:
        return b
    }
  };
  E.prototype.tryGetHash = function(b, w, M) {
    return D(b, w, M, this)
  };
  var L = n.tryGet = function(b, w, M) {
    return D(b, M._config.hash(w), w, M)
  };
  E.prototype.tryGet = function(b, w) {
    return L(b, w, this)
  };
  var Q = n.getHash = function(b, w, M) {
    return D(void 0, b, w, M)
  };
  E.prototype.getHash = function(b, w) {
    return Q(b, w, this)
  }, n.get = function(b, w) {
    return D(void 0, w._config.hash(b), b, w)
  }, E.prototype.get = function(b, w) {
    return L(w, b, this)
  };
  var P = n.has = function(b, w, M) {
    return D(l, b, w, M) !== l
  };
  E.prototype.hasHash = function(b, w) {
    return P(b, w, this)
  };
  var X = n.has = function(b, w) {
    return P(w._config.hash(b), b, w)
  };
  E.prototype.has = function(b) {
    return X(b, this)
  };
  var te = function(w, M) {
    return w === M
  };
  n.make = function(b) {
    return new E(0, 0, {
      keyEq: b && b.keyEq || te,
      hash: b && b.hash || c
    }, C, 0)
  }, n.empty = n.make();
  var j = n.isEmpty = function(b) {
    return b && !!R(b._root)
  };
  E.prototype.isEmpty = function() {
    return j(this)
  };
  var ve = n.modifyHash = function(b, w, M, F) {
    var U = {
        value: F._size
      },
      q = F._root._modify(F._editable ? F._edit : NaN, F._config.keyEq, 0, b, w, M, U);
    return F.setTree(q, U.value)
  };
  E.prototype.modifyHash = function(b, w, M) {
    return ve(M, b, w, this)
  };
  var Ce = n.modify = function(b, w, M) {
    return ve(b, M._config.hash(w), w, M)
  };
  E.prototype.modify = function(b, w) {
    return Ce(w, b, this)
  };
  var Se = n.setHash = function(b, w, M, F) {
    return ve(u(M), b, w, F)
  };
  E.prototype.setHash = function(b, w, M) {
    return Se(b, w, M, this)
  };
  var we = n.set = function(b, w, M) {
    return Se(M._config.hash(b), b, w, M)
  };
  E.prototype.set = function(b, w) {
    return we(b, w, this)
  };
  var Ze = u(l),
    mn = n.removeHash = function(b, w, M) {
      return ve(Ze, b, w, M)
    };
  E.prototype.removeHash = E.prototype.deleteHash = function(b, w) {
    return mn(b, w, this)
  };
  var yt = n.remove = function(b, w) {
    return mn(w._config.hash(b), b, w)
  };
  E.prototype.remove = E.prototype.delete = function(b) {
    return yt(b, this)
  };
  var ft = n.beginMutation = function(b) {
    return new E(b._editable + 1, b._edit + 1, b._config, b._root, b._size)
  };
  E.prototype.beginMutation = function() {
    return ft(this)
  };
  var ps = n.endMutation = function(b) {
    return b._editable = b._editable && b._editable - 1, b
  };
  E.prototype.endMutation = function() {
    return ps(this)
  };
  var tu = n.mutate = function(b, w) {
    var M = ft(w);
    return b(M), ps(M)
  };
  E.prototype.mutate = function(b) {
    return tu(b, this)
  };
  var or = function(w) {
      return w && $r(w[0], w[1], w[2], w[3], w[4])
    },
    $r = function(w, M, F, U, q) {
      for (; F < w;) {
        var oe = M[F++];
        if (oe && !R(oe)) return hs(oe, U, [w, M, F, U, q])
      }
      return or(q)
    },
    hs = function(w, M, F) {
      switch (w.type) {
        case f:
          return {
            value: M(w), rest: F
          };
        case m:
        case x:
        case S:
          var U = w.children;
          return $r(U.length, U, 0, M, F);
        default:
          return or(F)
      }
    },
    nu = {
      done: !0
    };

  function Ln(b) {
    this.v = b
  }
  Ln.prototype.next = function() {
    if (!this.v) return nu;
    var b = this.v;
    return this.v = or(b.rest), b
  }, Ln.prototype[Symbol.iterator] = function() {
    return this
  };
  var vn = function(w, M) {
      return new Ln(hs(w._root, M))
    },
    ru = function(w) {
      return [w.key, w.value]
    },
    ms = n.entries = function(b) {
      return vn(b, ru)
    };
  E.prototype.entries = E.prototype[Symbol.iterator] = function() {
    return ms(this)
  };
  var ou = function(w) {
      return w.key
    },
    se = n.keys = function(b) {
      return vn(b, ou)
    };
  E.prototype.keys = function() {
    return se(this)
  };
  var vs = function(w) {
      return w.value
    },
    iu = n.values = E.prototype.values = function(b) {
      return vn(b, vs)
    };
  E.prototype.values = function() {
    return iu(this)
  };
  var Do = n.fold = function(b, w, M) {
    var F = M._root;
    if (F.type === f) return b(w, F.value, F.key);
    for (var U = [F.children], q = void 0; q = U.pop();)
      for (var oe = 0, ne = q.length; oe < ne;) {
        var re = q[oe++];
        re && re.type && (re.type === f ? w = b(w, re.value, re.key) : U.push(re.children))
      }
    return w
  };
  E.prototype.fold = function(b, w) {
    return Do(b, w, this)
  };
  var zf = n.forEach = function(b, w) {
    return Do(function(M, F, U) {
      return b(F, U, w)
    }, null, w)
  };
  E.prototype.forEach = function(b) {
    return zf(b, this)
  };
  var O0 = n.count = function(b) {
    return b._size
  };
  E.prototype.count = function() {
    return O0(this)
  }, Object.defineProperty(E.prototype, "size", {
    get: E.prototype.count
  }), e.exports ? e.exports = n : (void 0).hamt = n
});
class Xw {
  constructor(t) {
    ae(this, "_map", void 0), this._map = new Map(t == null ? void 0 : t.entries())
  }
  keys() {
    return this._map.keys()
  }
  entries() {
    return this._map.entries()
  }
  get(t) {
    return this._map.get(t)
  }
  has(t) {
    return this._map.has(t)
  }
  set(t, n) {
    return this._map.set(t, n), this
  }
  delete(t) {
    return this._map.delete(t), this
  }
  clone() {
    return rf(this)
  }
  toMap() {
    return new Map(this._map)
  }
}
class nf {
  constructor(t) {
    if (ae(this, "_hamt", Qw.empty.beginMutation()), t instanceof nf) {
      const n = t._hamt.endMutation();
      t._hamt = n.beginMutation(), this._hamt = n.beginMutation()
    } else if (t)
      for (const [n, r] of t.entries()) this._hamt.set(n, r)
  }
  keys() {
    return this._hamt.keys()
  }
  entries() {
    return this._hamt.entries()
  }
  get(t) {
    return this._hamt.get(t)
  }
  has(t) {
    return this._hamt.has(t)
  }
  set(t, n) {
    return this._hamt.set(t, n), this
  }
  delete(t) {
    return this._hamt.delete(t), this
  }
  clone() {
    return rf(this)
  }
  toMap() {
    return new Map(this._hamt)
  }
}

function rf(e) {
  return ke("recoil_hamt_2020") ? new nf(e) : new Xw(e)
}
var Zw = {
    persistentMap: rf
  },
  Jw = Zw.persistentMap,
  e_ = Object.freeze({
    __proto__: null,
    persistentMap: Jw
  });

function t_(e, ...t) {
  const n = new Set;
  e: for (const r of e) {
    for (const o of t)
      if (o.has(r)) continue e;
    n.add(r)
  }
  return n
}
var yi = t_;

function n_(e, t) {
  const n = new Map;
  return e.forEach((r, o) => {
    n.set(o, t(r, o))
  }), n
}
var Ma = n_;

function r_() {
  return {
    nodeDeps: new Map,
    nodeToNodeSubscriptions: new Map
  }
}

function o_(e) {
  return {
    nodeDeps: Ma(e.nodeDeps, t => new Set(t)),
    nodeToNodeSubscriptions: Ma(e.nodeToNodeSubscriptions, t => new Set(t))
  }
}

function Mu(e, t, n, r) {
  const {
    nodeDeps: o,
    nodeToNodeSubscriptions: i
  } = n, s = o.get(e);
  if (s && r && s !== r.nodeDeps.get(e)) return;
  o.set(e, t);
  const a = s == null ? t : yi(t, s);
  for (const l of a) i.has(l) || i.set(l, new Set), Me(i.get(l)).add(e);
  if (s) {
    const l = yi(s, t);
    for (const u of l) {
      if (!i.has(u)) return;
      const c = Me(i.get(u));
      c.delete(e), c.size === 0 && i.delete(u)
    }
  }
}

function i_(e, t, n, r) {
  var o, i, s, a;
  const l = n.getState();
  r === l.currentTree.version || r === ((o = l.nextTree) === null || o === void 0 ? void 0 : o.version) || ((i = l.previousTree) === null || i === void 0 || i.version);
  const u = n.getGraph(r);
  if (Mu(e, t, u), r === ((s = l.previousTree) === null || s === void 0 ? void 0 : s.version)) {
    const d = n.getGraph(l.currentTree.version);
    Mu(e, t, d, u)
  }
  if (r === ((a = l.previousTree) === null || a === void 0 ? void 0 : a.version) || r === l.currentTree.version) {
    var c;
    const d = (c = l.nextTree) === null || c === void 0 ? void 0 : c.version;
    if (d !== void 0) {
      const p = n.getGraph(d);
      Mu(e, t, p, u)
    }
  }
}
var ts = {
  cloneGraph: o_,
  graph: r_,
  saveDepsToStore: i_
};
let s_ = 0;
const a_ = () => s_++;
let l_ = 0;
const u_ = () => l_++;
let c_ = 0;
const d_ = () => c_++;
var dl = {
  getNextTreeStateVersion: a_,
  getNextStoreID: u_,
  getNextComponentID: d_
};
const {
  persistentMap: Yp
} = e_, {
  graph: f_
} = ts, {
  getNextTreeStateVersion: Og
} = dl;

function Dg() {
  const e = Og();
  return {
    version: e,
    stateID: e,
    transactionMetadata: {},
    dirtyAtoms: new Set,
    atomValues: Yp(),
    nonvalidatedAtoms: Yp()
  }
}

function p_() {
  const e = Dg();
  return {
    currentTree: e,
    nextTree: null,
    previousTree: null,
    commitDepth: 0,
    knownAtoms: new Set,
    knownSelectors: new Set,
    transactionSubscriptions: new Map,
    nodeTransactionSubscriptions: new Map,
    nodeToComponentSubscriptions: new Map,
    queuedComponentCallbacks_DEPRECATED: [],
    suspendedComponentResolvers: new Set,
    graphsByVersion: new Map().set(e.version, f_()),
    retention: {
      referenceCounts: new Map,
      nodesRetainedByZone: new Map,
      retainablesToCheckForRelease: new Set
    },
    nodeCleanupFunctions: new Map
  }
}
var zg = {
  makeEmptyTreeState: Dg,
  makeEmptyStoreState: p_,
  getNextTreeStateVersion: Og
};
class Bg {}

function h_() {
  return new Bg
}
var fl = {
  RetentionZone: Bg,
  retentionZone: h_
};

function m_(e, t) {
  const n = new Set(e);
  return n.add(t), n
}

function v_(e, t) {
  const n = new Set(e);
  return n.delete(t), n
}

function g_(e, t, n) {
  const r = new Map(e);
  return r.set(t, n), r
}

function y_(e, t, n) {
  const r = new Map(e);
  return r.set(t, n(r.get(t))), r
}

function S_(e, t) {
  const n = new Map(e);
  return n.delete(t), n
}

function w_(e, t) {
  const n = new Map(e);
  return t.forEach(r => n.delete(r)), n
}
var Vg = {
  setByAddingToSet: m_,
  setByDeletingFromSet: v_,
  mapBySettingInMap: g_,
  mapByUpdatingInMap: y_,
  mapByDeletingFromMap: S_,
  mapByDeletingMultipleFromMap: w_
};

function* __(e, t) {
  let n = 0;
  for (const r of e) t(r, n++) && (yield r)
}
var of = __;

function x_(e, t) {
  return new Proxy(e, {
    get: (r, o) => (!(o in r) && o in t && (r[o] = t[o]()), r[o]),
    ownKeys: r => Object.keys(r)
  })
}
var Fg = x_;
const {
  getNode: ns,
  getNodeMaybe: R_,
  recoilValuesForKeys: Qp
} = Ct, {
  RetentionZone: Xp
} = fl, {
  setByAddingToSet: E_
} = Vg, b_ = Object.freeze(new Set);
class k_ extends Error {}

function C_(e, t, n) {
  if (!ke("recoil_memory_managament_2020")) return () => {};
  const {
    nodesRetainedByZone: r
  } = e.getState().retention;

  function o(i) {
    let s = r.get(i);
    s || r.set(i, s = new Set), s.add(t)
  }
  if (n instanceof Xp) o(n);
  else if (Array.isArray(n))
    for (const i of n) o(i);
  return () => {
    if (!ke("recoil_memory_managament_2020")) return;
    const {
      retention: i
    } = e.getState();

    function s(a) {
      const l = i.nodesRetainedByZone.get(a);
      l == null || l.delete(t), l && l.size === 0 && i.nodesRetainedByZone.delete(a)
    }
    if (n instanceof Xp) s(n);
    else if (Array.isArray(n))
      for (const a of n) s(a)
  }
}

function sf(e, t, n, r) {
  const o = e.getState();
  if (o.nodeCleanupFunctions.has(n)) return;
  const i = ns(n),
    s = C_(e, n, i.retainedBy),
    a = i.init(e, t, r);
  o.nodeCleanupFunctions.set(n, () => {
    a(), s()
  })
}

function T_(e, t, n) {
  sf(e, e.getState().currentTree, t, n)
}

function N_(e, t) {
  var n;
  const r = e.getState();
  (n = r.nodeCleanupFunctions.get(t)) === null || n === void 0 || n(), r.nodeCleanupFunctions.delete(t)
}

function $_(e, t, n) {
  return sf(e, t, n, "get"), ns(n).get(e, t)
}

function Ug(e, t, n) {
  return ns(n).peek(e, t)
}

function P_(e, t, n) {
  var r;
  const o = R_(t);
  return o == null || (r = o.invalidate) === null || r === void 0 || r.call(o, e), {
    ...e,
    atomValues: e.atomValues.clone().delete(t),
    nonvalidatedAtoms: e.nonvalidatedAtoms.clone().set(t, n),
    dirtyAtoms: E_(e.dirtyAtoms, t)
  }
}

function A_(e, t, n, r) {
  const o = ns(n);
  if (o.set == null) throw new k_(`Attempt to set read-only RecoilValue: ${n}`);
  const i = o.set;
  return sf(e, t, n, "set"), i(e, t, r)
}

function L_(e, t, n) {
  const r = e.getState(),
    o = e.getGraph(t.version),
    i = ns(n).nodeType;
  return Fg({
    type: i
  }, {
    loadable: () => Ug(e, t, n),
    isActive: () => r.knownAtoms.has(n) || r.knownSelectors.has(n),
    isSet: () => i === "selector" ? !1 : t.atomValues.has(n),
    isModified: () => t.dirtyAtoms.has(n),
    deps: () => {
      var s;
      return Qp((s = o.nodeDeps.get(n)) !== null && s !== void 0 ? s : [])
    },
    subscribers: () => {
      var s, a;
      return {
        nodes: Qp(of(Wg(e, t, new Set([n])), l => l !== n)),
        components: cl((s = (a = r.nodeToComponentSubscriptions.get(n)) === null || a === void 0 ? void 0 : a.values()) !== null && s !== void 0 ? s : [], ([l]) => ({
          name: l
        }))
      }
    }
  })
}

function Wg(e, t, n) {
  const r = new Set,
    o = Array.from(n),
    i = e.getGraph(t.version);
  for (let a = o.pop(); a; a = o.pop()) {
    var s;
    r.add(a);
    const l = (s = i.nodeToNodeSubscriptions.get(a)) !== null && s !== void 0 ? s : b_;
    for (const u of l) r.has(u) || o.push(u)
  }
  return r
}
var nr = {
  getNodeLoadable: $_,
  peekNodeLoadable: Ug,
  setNodeValue: A_,
  initializeNode: T_,
  cleanUpNode: N_,
  setUnvalidatedAtomValue_DEPRECATED: P_,
  peekNodeInfo: L_,
  getDownstreamNodes: Wg
};
let jg = null;

function I_(e) {
  jg = e
}

function M_() {
  var e;
  (e = jg) === null || e === void 0 || e()
}
var Hg = {
  setInvalidateMemoizedSnapshot: I_,
  invalidateMemoizedSnapshot: M_
};
const {
  getDownstreamNodes: O_,
  getNodeLoadable: Kg,
  setNodeValue: D_
} = nr, {
  getNextComponentID: z_
} = dl, {
  getNode: B_,
  getNodeMaybe: Gg
} = Ct, {
  DefaultValue: af
} = Ct, {
  reactMode: V_
} = es, {
  AbstractRecoilValue: F_,
  RecoilState: U_,
  RecoilValueReadOnly: W_,
  isRecoilValue: j_
} = _o, {
  invalidateMemoizedSnapshot: H_
} = Hg;

function K_(e, {
  key: t
}, n = e.getState().currentTree) {
  var r, o;
  const i = e.getState();
  n.version === i.currentTree.version || n.version === ((r = i.nextTree) === null || r === void 0 ? void 0 : r.version) || (n.version, (o = i.previousTree) === null || o === void 0 || o.version);
  const s = Kg(e, n, t);
  return s.state === "loading" && s.contents.catch(() => {}), s
}

function G_(e, t) {
  const n = e.clone();
  return t.forEach((r, o) => {
    r.state === "hasValue" && r.contents instanceof af ? n.delete(o) : n.set(o, r)
  }), n
}

function q_(e, t, {
  key: n
}, r) {
  if (typeof r == "function") {
    const o = Kg(e, t, n);
    if (o.state === "loading") {
      const i = `Tried to set atom or selector "${n}" using an updater function while the current state is pending, this is not currently supported.`;
      throw le(i)
    } else if (o.state === "hasError") throw o.contents;
    return r(o.contents)
  } else return r
}

function Y_(e, t, n) {
  if (n.type === "set") {
    const {
      recoilValue: o,
      valueOrUpdater: i
    } = n, s = q_(e, t, o, i), a = D_(e, t, o.key, s);
    for (const [l, u] of a.entries()) zc(t, l, u)
  } else if (n.type === "setLoadable") {
    const {
      recoilValue: {
        key: o
      },
      loadable: i
    } = n;
    zc(t, o, i)
  } else if (n.type === "markModified") {
    const {
      recoilValue: {
        key: o
      }
    } = n;
    t.dirtyAtoms.add(o)
  } else if (n.type === "setUnvalidated") {
    var r;
    const {
      recoilValue: {
        key: o
      },
      unvalidatedValue: i
    } = n, s = Gg(o);
    s == null || (r = s.invalidate) === null || r === void 0 || r.call(s, t), t.atomValues.delete(o), t.nonvalidatedAtoms.set(o, i), t.dirtyAtoms.add(o)
  } else Jd(`Unknown action ${n.type}`)
}

function zc(e, t, n) {
  n.state === "hasValue" && n.contents instanceof af ? e.atomValues.delete(t) : e.atomValues.set(t, n), e.dirtyAtoms.add(t), e.nonvalidatedAtoms.delete(t)
}

function qg(e, t) {
  e.replaceState(n => {
    const r = Yg(n);
    for (const o of t) Y_(e, r, o);
    return Qg(e, r), H_(), r
  })
}

function pl(e, t) {
  if (Si.length) {
    const n = Si[Si.length - 1];
    let r = n.get(e);
    r || n.set(e, r = []), r.push(t)
  } else qg(e, [t])
}
const Si = [];

function Q_() {
  const e = new Map;
  return Si.push(e), () => {
    for (const [t, n] of e) qg(t, n);
    Si.pop()
  }
}

function Yg(e) {
  return {
    ...e,
    atomValues: e.atomValues.clone(),
    nonvalidatedAtoms: e.nonvalidatedAtoms.clone(),
    dirtyAtoms: new Set(e.dirtyAtoms)
  }
}

function Qg(e, t) {
  const n = O_(e, t, t.dirtyAtoms);
  for (const i of n) {
    var r, o;
    (r = Gg(i)) === null || r === void 0 || (o = r.invalidate) === null || o === void 0 || o.call(r, t)
  }
}

function Xg(e, t, n) {
  pl(e, {
    type: "set",
    recoilValue: t,
    valueOrUpdater: n
  })
}

function X_(e, t, n) {
  if (n instanceof af) return Xg(e, t, n);
  pl(e, {
    type: "setLoadable",
    recoilValue: t,
    loadable: n
  })
}

function Z_(e, t) {
  pl(e, {
    type: "markModified",
    recoilValue: t
  })
}

function J_(e, t, n) {
  pl(e, {
    type: "setUnvalidated",
    recoilValue: t,
    unvalidatedValue: n
  })
}

function ex(e, {
  key: t
}, n, r = null) {
  const o = z_(),
    i = e.getState();
  i.nodeToComponentSubscriptions.has(t) || i.nodeToComponentSubscriptions.set(t, new Map), Me(i.nodeToComponentSubscriptions.get(t)).set(o, [r != null ? r : "<not captured>", n]);
  const s = V_();
  if (s.early && (s.mode === "LEGACY" || s.mode === "MUTABLE_SOURCE")) {
    const a = e.getState().nextTree;
    a && a.dirtyAtoms.has(t) && n(a)
  }
  return {
    release: () => {
      const a = e.getState(),
        l = a.nodeToComponentSubscriptions.get(t);
      l === void 0 || !l.has(o) || (l.delete(o), l.size === 0 && a.nodeToComponentSubscriptions.delete(t))
    }
  }
}

function tx(e, t) {
  var n;
  const {
    currentTree: r
  } = e.getState(), o = B_(t.key);
  (n = o.clearCache) === null || n === void 0 || n.call(o, e, r)
}
var pn = {
  RecoilValueReadOnly: W_,
  AbstractRecoilValue: F_,
  RecoilState: U_,
  getRecoilValueAsLoadable: K_,
  setRecoilValue: Xg,
  setRecoilValueLoadable: X_,
  markRecoilValueModified: Z_,
  setUnvalidatedRecoilValue: J_,
  subscribeToRecoilValue: ex,
  isRecoilValue: j_,
  applyAtomValueWrites: G_,
  batchStart: Q_,
  writeLoadableToTreeState: zc,
  invalidateDownstreams: Qg,
  copyTreeState: Yg,
  refreshRecoilValue: tx
};

function nx(e, t, n) {
  const r = e.entries();
  let o = r.next();
  for (; !o.done;) {
    const i = o.value;
    if (t.call(n, i[1], i[0], e)) return !0;
    o = r.next()
  }
  return !1
}
var rx = nx;
const {
  cleanUpNode: ox
} = nr, {
  deleteNodeConfigIfPossible: ix,
  getNode: Zg
} = Ct, {
  RetentionZone: Jg
} = fl, sx = 12e4, ey = new Set;

function ty(e, t) {
  const n = e.getState(),
    r = n.currentTree;
  if (n.nextTree) return;
  const o = new Set;
  for (const s of t)
    if (s instanceof Jg)
      for (const a of cx(n, s)) o.add(a);
    else o.add(s);
  const i = ax(e, o);
  for (const s of i) ux(e, r, s)
}

function ax(e, t) {
  const n = e.getState(),
    r = n.currentTree,
    o = e.getGraph(r.version),
    i = new Set,
    s = new Set;
  return a(t), i;

  function a(l) {
    const u = new Set,
      c = lx(e, r, l, i, s);
    for (const h of c) {
      var d;
      if (Zg(h).retainedBy === "recoilRoot") {
        s.add(h);
        continue
      }
      if (((d = n.retention.referenceCounts.get(h)) !== null && d !== void 0 ? d : 0) > 0) {
        s.add(h);
        continue
      }
      if (ny(h).some(N => n.retention.referenceCounts.get(N))) {
        s.add(h);
        continue
      }
      const v = o.nodeToNodeSubscriptions.get(h);
      if (v && rx(v, N => s.has(N))) {
        s.add(h);
        continue
      }
      i.add(h), u.add(h)
    }
    const p = new Set;
    for (const h of u)
      for (const v of (y = o.nodeDeps.get(h)) !== null && y !== void 0 ? y : ey) {
        var y;
        i.has(v) || p.add(v)
      }
    p.size && a(p)
  }
}

function lx(e, t, n, r, o) {
  const i = e.getGraph(t.version),
    s = [],
    a = new Set;
  for (; n.size > 0;) l(Me(n.values().next().value));
  return s;

  function l(u) {
    if (r.has(u) || o.has(u)) {
      n.delete(u);
      return
    }
    if (a.has(u)) return;
    const c = i.nodeToNodeSubscriptions.get(u);
    if (c)
      for (const d of c) l(d);
    a.add(u), n.delete(u), s.push(u)
  }
}

function ux(e, t, n) {
  if (!ke("recoil_memory_managament_2020")) return;
  ox(e, n);
  const r = e.getState();
  r.knownAtoms.delete(n), r.knownSelectors.delete(n), r.nodeTransactionSubscriptions.delete(n), r.retention.referenceCounts.delete(n);
  const o = ny(n);
  for (const l of o) {
    var i;
    (i = r.retention.nodesRetainedByZone.get(l)) === null || i === void 0 || i.delete(n)
  }
  t.atomValues.delete(n), t.dirtyAtoms.delete(n), t.nonvalidatedAtoms.delete(n);
  const s = r.graphsByVersion.get(t.version);
  if (s) {
    const l = s.nodeDeps.get(n);
    if (l !== void 0) {
      s.nodeDeps.delete(n);
      for (const u of l) {
        var a;
        (a = s.nodeToNodeSubscriptions.get(u)) === null || a === void 0 || a.delete(n)
      }
    }
    s.nodeToNodeSubscriptions.delete(n)
  }
  ix(n)
}

function cx(e, t) {
  var n;
  return (n = e.retention.nodesRetainedByZone.get(t)) !== null && n !== void 0 ? n : ey
}

function ny(e) {
  const t = Zg(e).retainedBy;
  return t === void 0 || t === "components" || t === "recoilRoot" ? [] : t instanceof Jg ? [t] : t
}

function dx(e, t) {
  const n = e.getState();
  n.nextTree ? n.retention.retainablesToCheckForRelease.add(t) : ty(e, new Set([t]))
}

function fx(e, t, n) {
  var r;
  if (!ke("recoil_memory_managament_2020")) return;
  const o = e.getState().retention.referenceCounts,
    i = ((r = o.get(t)) !== null && r !== void 0 ? r : 0) + n;
  i === 0 ? ry(e, t) : o.set(t, i)
}

function ry(e, t) {
  if (!ke("recoil_memory_managament_2020")) return;
  e.getState().retention.referenceCounts.delete(t), dx(e, t)
}

function px(e) {
  if (!ke("recoil_memory_managament_2020")) return;
  const t = e.getState();
  ty(e, t.retention.retainablesToCheckForRelease), t.retention.retainablesToCheckForRelease.clear()
}

function hx(e) {
  return e === void 0 ? "recoilRoot" : e
}
var Tr = {
  SUSPENSE_TIMEOUT_MS: sx,
  updateRetainCount: fx,
  updateRetainCountToZero: ry,
  releaseScheduledRetainablesNow: px,
  retainedByOptionWithDefault: hx
};
const {
  unstable_batchedUpdates: mx
} = si;
var vx = {
  unstable_batchedUpdates: mx
};
const {
  unstable_batchedUpdates: gx
} = vx;
var yx = {
  unstable_batchedUpdates: gx
};
const {
  batchStart: Sx
} = pn, {
  unstable_batchedUpdates: wx
} = yx;
let lf = wx || (e => e());
const _x = e => {
    lf = e
  },
  xx = () => lf,
  Rx = e => {
    lf(() => {
      let t = () => {};
      try {
        t = Sx(), e()
      } finally {
        t()
      }
    })
  };
var hl = {
  getBatcher: xx,
  setBatcher: _x,
  batchUpdates: Rx
};

function* Ex(e) {
  for (const t of e)
    for (const n of t) yield n
}
var oy = Ex;
const iy = typeof Window > "u" || typeof window > "u",
  bx = e => !iy && (e === window || e instanceof Window),
  kx = typeof navigator < "u" && navigator.product === "ReactNative";
var ml = {
  isSSR: iy,
  isReactNative: kx,
  isWindow: bx
};

function Cx(e, t) {
  let n;
  return (...r) => {
    n || (n = {});
    const o = t(...r);
    return Object.hasOwnProperty.call(n, o) || (n[o] = e(...r)), n[o]
  }
}

function Tx(e, t) {
  let n, r;
  return (...o) => {
    const i = t(...o);
    return n === i || (n = i, r = e(...o)), r
  }
}

function Nx(e, t) {
  let n, r;
  return [(...s) => {
    const a = t(...s);
    return n === a || (n = a, r = e(...s)), r
  }, () => {
    n = null
  }]
}
var $x = {
  memoizeWithArgsHash: Cx,
  memoizeOneWithArgsHash: Tx,
  memoizeOneWithArgsHashAndInvalidation: Nx
};
const {
  batchUpdates: Bc
} = hl, {
  initializeNode: Px,
  peekNodeInfo: Ax
} = nr, {
  graph: Lx
} = ts, {
  getNextStoreID: Ix
} = dl, {
  DEFAULT_VALUE: Mx,
  recoilValues: Zp,
  recoilValuesForKeys: Jp
} = Ct, {
  AbstractRecoilValue: Ox,
  getRecoilValueAsLoadable: Dx,
  setRecoilValue: eh,
  setUnvalidatedRecoilValue: zx
} = pn, {
  updateRetainCount: oa
} = Tr, {
  setInvalidateMemoizedSnapshot: Bx
} = Hg, {
  getNextTreeStateVersion: Vx,
  makeEmptyStoreState: Fx
} = zg, {
  isSSR: Ux
} = ml, {
  memoizeOneWithArgsHashAndInvalidation: Wx
} = $x;
class vl {
  constructor(t, n) {
    ae(this, "_store", void 0), ae(this, "_refCount", 1), ae(this, "getLoadable", r => (this.checkRefCount_INTERNAL(), Dx(this._store, r))), ae(this, "getPromise", r => (this.checkRefCount_INTERNAL(), this.getLoadable(r).toPromise())), ae(this, "getNodes_UNSTABLE", r => {
      if (this.checkRefCount_INTERNAL(), (r == null ? void 0 : r.isModified) === !0) {
        if ((r == null ? void 0 : r.isInitialized) === !1) return [];
        const s = this._store.getState().currentTree;
        return Jp(s.dirtyAtoms)
      }
      const o = this._store.getState().knownAtoms,
        i = this._store.getState().knownSelectors;
      return (r == null ? void 0 : r.isInitialized) == null ? Zp.values() : r.isInitialized === !0 ? Jp(oy([o, i])) : of(Zp.values(), ({
        key: s
      }) => !o.has(s) && !i.has(s))
    }), ae(this, "getInfo_UNSTABLE", ({
      key: r
    }) => (this.checkRefCount_INTERNAL(), Ax(this._store, this._store.getState().currentTree, r))), ae(this, "map", r => {
      this.checkRefCount_INTERNAL();
      const o = new Vc(this, Bc);
      return r(o), o
    }), ae(this, "asyncMap", async r => {
      this.checkRefCount_INTERNAL();
      const o = new Vc(this, Bc);
      return o.retain(), await r(o), o.autoRelease_INTERNAL(), o
    }), this._store = {
      storeID: Ix(),
      parentStoreID: n,
      getState: () => t,
      replaceState: r => {
        t.currentTree = r(t.currentTree)
      },
      getGraph: r => {
        const o = t.graphsByVersion;
        if (o.has(r)) return Me(o.get(r));
        const i = Lx();
        return o.set(r, i), i
      },
      subscribeToTransactions: () => ({
        release: () => {}
      }),
      addTransactionMetadata: () => {
        throw le("Cannot subscribe to Snapshots")
      }
    };
    for (const r of this._store.getState().knownAtoms) Px(this._store, r, "get"), oa(this._store, r, 1);
    this.autoRelease_INTERNAL()
  }
  retain() {
    this._refCount <= 0, this._refCount++;
    let t = !1;
    return () => {
      t || (t = !0, this._release())
    }
  }
  autoRelease_INTERNAL() {
    Ux || window.setTimeout(() => this._release(), 10)
  }
  _release() {
    if (this._refCount--, this._refCount === 0) {
      if (this._store.getState().nodeCleanupFunctions.forEach(t => t()), this._store.getState().nodeCleanupFunctions.clear(), !ke("recoil_memory_managament_2020")) return
    } else this._refCount < 0
  }
  isRetained() {
    return this._refCount > 0
  }
  checkRefCount_INTERNAL() {
    ke("recoil_memory_managament_2020") && this._refCount <= 0
  }
  getStore_INTERNAL() {
    return this.checkRefCount_INTERNAL(), this._store
  }
  getID() {
    return this.checkRefCount_INTERNAL(), this._store.getState().currentTree.stateID
  }
  getStoreID() {
    return this.checkRefCount_INTERNAL(), this._store.storeID
  }
}

function sy(e, t, n = !1) {
  const r = e.getState(),
    o = n ? Vx() : t.version;
  return {
    currentTree: {
      version: n ? o : t.version,
      stateID: n ? o : t.stateID,
      transactionMetadata: {
        ...t.transactionMetadata
      },
      dirtyAtoms: new Set(t.dirtyAtoms),
      atomValues: t.atomValues.clone(),
      nonvalidatedAtoms: t.nonvalidatedAtoms.clone()
    },
    commitDepth: 0,
    nextTree: null,
    previousTree: null,
    knownAtoms: new Set(r.knownAtoms),
    knownSelectors: new Set(r.knownSelectors),
    transactionSubscriptions: new Map,
    nodeTransactionSubscriptions: new Map,
    nodeToComponentSubscriptions: new Map,
    queuedComponentCallbacks_DEPRECATED: [],
    suspendedComponentResolvers: new Set,
    graphsByVersion: new Map().set(o, e.getGraph(t.version)),
    retention: {
      referenceCounts: new Map,
      nodesRetainedByZone: new Map,
      retainablesToCheckForRelease: new Set
    },
    nodeCleanupFunctions: new Map(cl(r.nodeCleanupFunctions.entries(), ([i]) => [i, () => {}]))
  }
}

function jx(e) {
  const t = new vl(Fx());
  return e != null ? t.map(e) : t
}
const [th, ay] = Wx((e, t) => {
  var n;
  const r = e.getState(),
    o = t === "latest" ? (n = r.nextTree) !== null && n !== void 0 ? n : r.currentTree : Me(r.previousTree);
  return new vl(sy(e, o), e.storeID)
}, (e, t) => {
  var n, r;
  return String(t) + String(e.storeID) + String((n = e.getState().nextTree) === null || n === void 0 ? void 0 : n.version) + String(e.getState().currentTree.version) + String((r = e.getState().previousTree) === null || r === void 0 ? void 0 : r.version)
});
Bx(ay);

function Hx(e, t = "latest") {
  const n = th(e, t);
  return n.isRetained() ? n : (ay(), th(e, t))
}
class Vc extends vl {
  constructor(t, n) {
    super(sy(t.getStore_INTERNAL(), t.getStore_INTERNAL().getState().currentTree, !0), t.getStoreID()), ae(this, "_batch", void 0), ae(this, "set", (r, o) => {
      this.checkRefCount_INTERNAL();
      const i = this.getStore_INTERNAL();
      this._batch(() => {
        oa(i, r.key, 1), eh(this.getStore_INTERNAL(), r, o)
      })
    }), ae(this, "reset", r => {
      this.checkRefCount_INTERNAL();
      const o = this.getStore_INTERNAL();
      this._batch(() => {
        oa(o, r.key, 1), eh(this.getStore_INTERNAL(), r, Mx)
      })
    }), ae(this, "setUnvalidatedAtomValues_DEPRECATED", r => {
      this.checkRefCount_INTERNAL();
      const o = this.getStore_INTERNAL();
      Bc(() => {
        for (const [i, s] of r.entries()) oa(o, i, 1), zx(o, new Ox(i), s)
      })
    }), this._batch = n
  }
}
var gl = {
    Snapshot: vl,
    MutableSnapshot: Vc,
    freshSnapshot: jx,
    cloneSnapshot: Hx
  },
  Kx = gl.Snapshot,
  Gx = gl.MutableSnapshot,
  qx = gl.freshSnapshot,
  Yx = gl.cloneSnapshot,
  yl = Object.freeze({
    __proto__: null,
    Snapshot: Kx,
    MutableSnapshot: Gx,
    freshSnapshot: qx,
    cloneSnapshot: Yx
  });

function Qx(...e) {
  const t = new Set;
  for (const n of e)
    for (const r of n) t.add(r);
  return t
}
var Xx = Qx;
const {
  useRef: Zx
} = ge;

function Jx(e) {
  const t = Zx(e);
  return t.current === e && typeof e == "function" && (t.current = e()), t
}
var nh = Jx;
const {
  getNextTreeStateVersion: eR,
  makeEmptyStoreState: ly
} = zg, {
  cleanUpNode: tR,
  getDownstreamNodes: nR,
  initializeNode: rR,
  setNodeValue: oR,
  setUnvalidatedAtomValue_DEPRECATED: iR
} = nr, {
  graph: sR
} = ts, {
  cloneGraph: aR
} = ts, {
  getNextStoreID: uy
} = dl, {
  createMutableSource: Ou,
  reactMode: cy
} = es, {
  applyAtomValueWrites: lR
} = pn, {
  releaseScheduledRetainablesNow: dy
} = Tr, {
  freshSnapshot: uR
} = yl, {
  useCallback: cR,
  useContext: fy,
  useEffect: Fc,
  useMemo: dR,
  useRef: fR,
  useState: pR
} = ge;

function qo() {
  throw le("This component must be used inside a <RecoilRoot> component.")
}
const py = Object.freeze({
  storeID: uy(),
  getState: qo,
  replaceState: qo,
  getGraph: qo,
  subscribeToTransactions: qo,
  addTransactionMetadata: qo
});
let Uc = !1;

function rh(e) {
  if (Uc) throw le("An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions.");
  const t = e.getState();
  if (t.nextTree === null) {
    ke("recoil_memory_managament_2020") && ke("recoil_release_on_cascading_update_killswitch_2021") && t.commitDepth > 0 && dy(e);
    const n = t.currentTree.version,
      r = eR();
    t.nextTree = {
      ...t.currentTree,
      version: r,
      stateID: r,
      dirtyAtoms: new Set,
      transactionMetadata: {}
    }, t.graphsByVersion.set(r, aR(Me(t.graphsByVersion.get(n))))
  }
}
const hy = ge.createContext({
    current: py
  }),
  Sl = () => fy(hy),
  my = ge.createContext(null);

function hR() {
  return fy(my)
}

function uf(e, t, n) {
  const r = nR(e, n, n.dirtyAtoms);
  for (const o of r) {
    const i = t.nodeToComponentSubscriptions.get(o);
    if (i)
      for (const [s, [a, l]] of i) l(n)
  }
}

function vy(e) {
  const t = e.getState(),
    n = t.currentTree,
    r = n.dirtyAtoms;
  if (r.size) {
    for (const [o, i] of t.nodeTransactionSubscriptions)
      if (r.has(o))
        for (const [s, a] of i) a(e);
    for (const [o, i] of t.transactionSubscriptions) i(e);
    (!cy().early || t.suspendedComponentResolvers.size > 0) && (uf(e, t, n), t.suspendedComponentResolvers.forEach(o => o()), t.suspendedComponentResolvers.clear())
  }
  t.queuedComponentCallbacks_DEPRECATED.forEach(o => o(n)), t.queuedComponentCallbacks_DEPRECATED.splice(0, t.queuedComponentCallbacks_DEPRECATED.length)
}

function mR(e) {
  const t = e.getState();
  t.commitDepth++;
  try {
    const {
      nextTree: n
    } = t;
    if (n == null) return;
    t.previousTree = t.currentTree, t.currentTree = n, t.nextTree = null, vy(e), t.previousTree != null ? t.graphsByVersion.delete(t.previousTree.version) : Jd("Ended batch with no previous state, which is unexpected", "recoil"), t.previousTree = null, ke("recoil_memory_managament_2020") && n == null && dy(e)
  } finally {
    t.commitDepth--
  }
}

function vR({
  setNotifyBatcherOfChange: e
}) {
  const t = Sl(),
    [, n] = pR([]);
  return e(() => n({})), Fc(() => (e(() => n({})), () => {
    e(() => {})
  }), [e]), Fc(() => {
    qw.enqueueExecution("Batcher", () => {
      mR(t.current)
    })
  }), null
}

function gR(e, t) {
  const n = ly();
  return t({
    set: (r, o) => {
      const i = n.currentTree,
        s = oR(e, i, r.key, o),
        a = new Set(s.keys()),
        l = i.nonvalidatedAtoms.clone();
      for (const u of a) l.delete(u);
      n.currentTree = {
        ...i,
        dirtyAtoms: Xx(i.dirtyAtoms, a),
        atomValues: lR(i.atomValues, s),
        nonvalidatedAtoms: l
      }
    },
    setUnvalidatedAtomValues: r => {
      r.forEach((o, i) => {
        n.currentTree = iR(n.currentTree, i, o)
      })
    }
  }), n
}

function yR(e) {
  const t = uR(e),
    n = t.getStore_INTERNAL().getState();
  return t.retain(), n.nodeCleanupFunctions.forEach(r => r()), n.nodeCleanupFunctions.clear(), n
}
let oh = 0;

function SR({
  initializeState_DEPRECATED: e,
  initializeState: t,
  store_INTERNAL: n,
  children: r
}) {
  let o;
  const i = y => {
      const h = o.current.graphsByVersion;
      if (h.has(y)) return Me(h.get(y));
      const v = sR();
      return h.set(y, v), v
    },
    s = (y, h) => {
      if (h == null) {
        const {
          transactionSubscriptions: v
        } = d.current.getState(), N = oh++;
        return v.set(N, y), {
          release: () => {
            v.delete(N)
          }
        }
      } else {
        const {
          nodeTransactionSubscriptions: v
        } = d.current.getState();
        v.has(h) || v.set(h, new Map);
        const N = oh++;
        return Me(v.get(h)).set(N, y), {
          release: () => {
            const g = v.get(h);
            g && (g.delete(N), g.size === 0 && v.delete(h))
          }
        }
      }
    },
    a = y => {
      rh(d.current);
      for (const h of Object.keys(y)) Me(d.current.getState().nextTree).transactionMetadata[h] = y[h]
    },
    l = y => {
      rh(d.current);
      const h = Me(o.current.nextTree);
      let v;
      try {
        Uc = !0, v = y(h)
      } finally {
        Uc = !1
      }
      v !== h && (o.current.nextTree = v, cy().early && uf(d.current, o.current, v), Me(u.current)())
    },
    u = fR(null),
    c = cR(y => {
      u.current = y
    }, [u]),
    d = nh(() => n != null ? n : {
      storeID: uy(),
      getState: () => o.current,
      replaceState: l,
      getGraph: i,
      subscribeToTransactions: s,
      addTransactionMetadata: a
    });
  n != null && (d.current = n), o = nh(() => e != null ? gR(d.current, e) : t != null ? yR(t) : ly());
  const p = dR(() => Ou == null ? void 0 : Ou(o, () => o.current.currentTree.version), [o]);
  return Fc(() => {
    const y = d.current;
    for (const h of new Set(y.getState().knownAtoms)) rR(y, h, "get");
    return () => {
      for (const h of y.getState().knownAtoms) tR(y, h)
    }
  }, [d]), ge.createElement(hy.Provider, {
    value: d
  }, ge.createElement(my.Provider, {
    value: p
  }, ge.createElement(vR, {
    setNotifyBatcherOfChange: c
  }), r))
}

function wR(e) {
  const {
    override: t,
    ...n
  } = e, r = Sl();
  return t === !1 && r.current !== py ? e.children : ge.createElement(SR, n)
}

function _R() {
  return Sl().current.storeID
}
var Pn = {
  RecoilRoot: wR,
  useStoreRef: Sl,
  useRecoilMutableSource: hR,
  useRecoilStoreID: _R,
  notifyComponents_FOR_TESTING: uf,
  sendEndOfBatchNotifications_FOR_TESTING: vy
};

function xR(e, t) {
  if (e === t) return !0;
  if (e.length !== t.length) return !1;
  for (let n = 0, r = e.length; n < r; n++)
    if (e[n] !== t[n]) return !1;
  return !0
}
var RR = xR;
const {
  useEffect: ER,
  useRef: bR
} = ge;

function kR(e) {
  const t = bR();
  return ER(() => {
    t.current = e
  }), t.current
}
var gy = kR;
const {
  useStoreRef: CR
} = Pn, {
  SUSPENSE_TIMEOUT_MS: TR
} = Tr, {
  updateRetainCount: Yo
} = Tr, {
  RetentionZone: NR
} = fl, {
  useEffect: $R,
  useRef: PR
} = ge, {
  isSSR: ih
} = ml;

function AR(e) {
  if (ke("recoil_memory_managament_2020")) return LR(e)
}

function LR(e) {
  const n = (Array.isArray(e) ? e : [e]).map(s => s instanceof NR ? s : s.key),
    r = CR();
  $R(() => {
    if (!ke("recoil_memory_managament_2020")) return;
    const s = r.current;
    if (o.current && !ih) window.clearTimeout(o.current), o.current = null;
    else
      for (const a of n) Yo(s, a, 1);
    return () => {
      for (const a of n) Yo(s, a, -1)
    }
  }, [r, ...n]);
  const o = PR(),
    i = gy(n);
  if (!ih && (i === void 0 || !RR(i, n))) {
    const s = r.current;
    for (const a of n) Yo(s, a, 1);
    if (i)
      for (const a of i) Yo(s, a, -1);
    o.current && window.clearTimeout(o.current), o.current = window.setTimeout(() => {
      o.current = null;
      for (const a of n) Yo(s, a, -1)
    }, TR)
  }
}
var cf = AR;

function IR() {
  return "<component name not available>"
}
var rs = IR;
const {
  batchUpdates: MR
} = hl, {
  DEFAULT_VALUE: yy
} = Ct, {
  currentRendererSupportsUseSyncExternalStore: OR,
  reactMode: Lo,
  useMutableSource: DR,
  useSyncExternalStore: zR
} = es, {
  useRecoilMutableSource: BR,
  useStoreRef: hn
} = Pn, {
  AbstractRecoilValue: Wc,
  getRecoilValueAsLoadable: os,
  setRecoilValue: Oa,
  setUnvalidatedRecoilValue: VR,
  subscribeToRecoilValue: xo
} = pn, {
  useCallback: bt,
  useEffect: Ro,
  useMemo: Sy,
  useRef: wi,
  useState: df
} = ge, {
  setByAddingToSet: FR
} = Vg, {
  isSSR: UR
} = ml;

function ff(e, t, n) {
  if (e.state === "hasValue") return e.contents;
  throw e.state === "loading" ? new Promise(o => {
    const i = n.current.getState().suspendedComponentResolvers;
    i.add(o), UR && $e(e.contents) && e.contents.finally(() => {
      i.delete(o)
    })
  }) : e.state === "hasError" ? e.contents : le(`Invalid value of loadable atom "${t.key}"`)
}

function WR() {
  const e = rs(),
    t = hn(),
    [, n] = df([]),
    r = wi(new Set);
  r.current = new Set;
  const o = wi(new Set),
    i = wi(new Map),
    s = bt(l => {
      const u = i.current.get(l);
      u && (u.release(), i.current.delete(l))
    }, [i]),
    a = bt((l, u) => {
      i.current.has(u) && n([])
    }, []);
  return Ro(() => {
    const l = t.current;
    yi(r.current, o.current).forEach(u => {
      if (i.current.has(u)) return;
      const c = xo(l, new Wc(u), p => a(p, u), e);
      i.current.set(u, c), l.getState().nextTree ? l.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
        a(l.getState(), u)
      }) : a(l.getState(), u)
    }), yi(o.current, r.current).forEach(u => {
      s(u)
    }), o.current = r.current
  }), Ro(() => {
    const l = i.current;
    return yi(r.current, new Set(l.keys())).forEach(u => {
      const c = xo(t.current, new Wc(u), d => a(d, u), e);
      l.set(u, c)
    }), () => l.forEach((u, c) => s(c))
  }, [e, t, s, a]), Sy(() => {
    function l(h) {
      return v => {
        Oa(t.current, h, v)
      }
    }

    function u(h) {
      return () => Oa(t.current, h, yy)
    }

    function c(h) {
      var v;
      r.current.has(h.key) || (r.current = FR(r.current, h.key));
      const N = t.current.getState();
      return os(t.current, h, Lo().early && (v = N.nextTree) !== null && v !== void 0 ? v : N.currentTree)
    }

    function d(h) {
      const v = c(h);
      return ff(v, h, t)
    }

    function p(h) {
      return [d(h), l(h)]
    }

    function y(h) {
      return [c(h), l(h)]
    }
    return {
      getRecoilValue: d,
      getRecoilValueLoadable: c,
      getRecoilState: p,
      getRecoilStateLoadable: y,
      getSetRecoilState: l,
      getResetRecoilState: u
    }
  }, [r, t])
}
const jR = {
  current: 0
};

function HR(e) {
  const t = hn(),
    n = rs(),
    r = bt(() => {
      var a;
      const l = t.current,
        u = l.getState(),
        c = Lo().early && (a = u.nextTree) !== null && a !== void 0 ? a : u.currentTree;
      return {
        loadable: os(l, e, c),
        key: e.key
      }
    }, [t, e]),
    o = bt(a => {
      let l;
      return () => {
        var u, c;
        const d = a();
        return (u = l) !== null && u !== void 0 && u.loadable.is(d.loadable) && ((c = l) === null || c === void 0 ? void 0 : c.key) === d.key ? l : (l = d, d)
      }
    }, []),
    i = Sy(() => o(r), [r, o]),
    s = bt(a => {
      const l = t.current;
      return xo(l, e, a, n).release
    }, [t, e, n]);
  return zR(s, i, i).loadable
}

function KR(e) {
  const t = hn(),
    n = bt(() => {
      var u;
      const c = t.current,
        d = c.getState(),
        p = Lo().early && (u = d.nextTree) !== null && u !== void 0 ? u : d.currentTree;
      return os(c, e, p)
    }, [t, e]),
    r = bt(() => n(), [n]),
    o = rs(),
    i = bt((u, c) => {
      const d = t.current;
      return xo(d, e, () => {
        if (!ke("recoil_suppress_rerender_in_callback")) return c();
        const y = n();
        l.current.is(y) || c(), l.current = y
      }, o).release
    }, [t, e, o, n]),
    s = BR();
  if (s == null) throw le("Recoil hooks must be used in components contained within a <RecoilRoot> component.");
  const a = DR(s, r, i),
    l = wi(a);
  return Ro(() => {
    l.current = a
  }), a
}

function jc(e) {
  const t = hn(),
    n = rs(),
    r = bt(() => {
      var l;
      const u = t.current,
        c = u.getState(),
        d = Lo().early && (l = c.nextTree) !== null && l !== void 0 ? l : c.currentTree;
      return os(u, e, d)
    }, [t, e]),
    o = bt(() => ({
      loadable: r(),
      key: e.key
    }), [r, e.key]),
    i = bt(l => {
      const u = o();
      return l.loadable.is(u.loadable) && l.key === u.key ? l : u
    }, [o]);
  Ro(() => {
    const l = xo(t.current, e, u => {
      a(i)
    }, n);
    return a(i), l.release
  }, [n, e, t, i]);
  const [s, a] = df(o);
  return s.key !== e.key ? o().loadable : s.loadable
}

function GR(e) {
  const t = hn(),
    [, n] = df([]),
    r = rs(),
    o = bt(() => {
      var a;
      const l = t.current,
        u = l.getState(),
        c = Lo().early && (a = u.nextTree) !== null && a !== void 0 ? a : u.currentTree;
      return os(l, e, c)
    }, [t, e]),
    i = o(),
    s = wi(i);
  return Ro(() => {
    s.current = i
  }), Ro(() => {
    const a = t.current,
      l = a.getState(),
      u = xo(a, e, d => {
        var p;
        if (!ke("recoil_suppress_rerender_in_callback")) return n([]);
        const y = o();
        (p = s.current) !== null && p !== void 0 && p.is(y) || n(y), s.current = y
      }, r);
    if (l.nextTree) a.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
      s.current = null, n([])
    });
    else {
      var c;
      if (!ke("recoil_suppress_rerender_in_callback")) return n([]);
      const d = o();
      (c = s.current) !== null && c !== void 0 && c.is(d) || n(d), s.current = d
    }
    return u.release
  }, [r, o, e, t]), i
}

function pf(e) {
  return ke("recoil_memory_managament_2020") && cf(e), {
    TRANSITION_SUPPORT: jc,
    SYNC_EXTERNAL_STORE: OR() ? HR : jc,
    MUTABLE_SOURCE: KR,
    LEGACY: GR
  } [Lo().mode](e)
}

function wy(e) {
  const t = hn(),
    n = pf(e);
  return ff(n, e, t)
}

function wl(e) {
  const t = hn();
  return bt(n => {
    Oa(t.current, e, n)
  }, [t, e])
}

function qR(e) {
  const t = hn();
  return bt(() => {
    Oa(t.current, e, yy)
  }, [t, e])
}

function YR(e) {
  return [wy(e), wl(e)]
}

function QR(e) {
  return [pf(e), wl(e)]
}

function XR() {
  const e = hn();
  return (t, n = {}) => {
    MR(() => {
      e.current.addTransactionMetadata(n), t.forEach((r, o) => VR(e.current, new Wc(o), r))
    })
  }
}

function _y(e) {
  return ke("recoil_memory_managament_2020") && cf(e), jc(e)
}

function xy(e) {
  const t = hn(),
    n = _y(e);
  return ff(n, e, t)
}

function ZR(e) {
  return [xy(e), wl(e)]
}
var JR = {
  recoilComponentGetRecoilValueCount_FOR_TESTING: jR,
  useRecoilInterface: WR,
  useRecoilState: YR,
  useRecoilStateLoadable: QR,
  useRecoilValue: wy,
  useRecoilValueLoadable: pf,
  useResetRecoilState: qR,
  useSetRecoilState: wl,
  useSetUnvalidatedAtomValues: XR,
  useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: _y,
  useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: xy,
  useRecoilState_TRANSITION_SUPPORT_UNSTABLE: ZR
};

function eE(e, t) {
  const n = new Map;
  for (const [r, o] of e) t(o, r) && n.set(r, o);
  return n
}
var tE = eE;

function nE(e, t) {
  const n = new Set;
  for (const r of e) t(r) && n.add(r);
  return n
}
var rE = nE;

function oE(...e) {
  const t = new Map;
  for (let n = 0; n < e.length; n++) {
    const r = e[n].keys();
    let o;
    for (; !(o = r.next()).done;) t.set(o.value, e[n].get(o.value))
  }
  return t
}
var iE = oE;
const {
  batchUpdates: sE
} = hl, {
  DEFAULT_VALUE: aE,
  getNode: Ry,
  nodes: lE
} = Ct, {
  useStoreRef: hf
} = Pn, {
  AbstractRecoilValue: uE,
  setRecoilValueLoadable: cE
} = pn, {
  SUSPENSE_TIMEOUT_MS: dE
} = Tr, {
  cloneSnapshot: Da
} = yl, {
  useCallback: _l,
  useEffect: Ey,
  useRef: sh,
  useState: fE
} = ge, {
  isSSR: ah
} = ml;

function xl(e) {
  const t = hf();
  Ey(() => t.current.subscribeToTransactions(e).release, [e, t])
}

function lh(e) {
  const t = e.atomValues.toMap(),
    n = Ma(tE(t, (r, o) => {
      const s = Ry(o).persistence_UNSTABLE;
      return s != null && s.type !== "none" && r.state === "hasValue"
    }), r => r.contents);
  return iE(e.nonvalidatedAtoms.toMap(), n)
}

function pE(e) {
  xl(_l(t => {
    let n = t.getState().previousTree;
    const r = t.getState().currentTree;
    n || (n = t.getState().currentTree);
    const o = lh(r),
      i = lh(n),
      s = Ma(lE, l => {
        var u, c, d, p;
        return {
          persistence_UNSTABLE: {
            type: (u = (c = l.persistence_UNSTABLE) === null || c === void 0 ? void 0 : c.type) !== null && u !== void 0 ? u : "none",
            backButton: (d = (p = l.persistence_UNSTABLE) === null || p === void 0 ? void 0 : p.backButton) !== null && d !== void 0 ? d : !1
          }
        }
      }),
      a = rE(r.dirtyAtoms, l => o.has(l) || i.has(l));
    e({
      atomValues: o,
      previousAtomValues: i,
      atomInfo: s,
      modifiedAtoms: a,
      transactionMetadata: {
        ...r.transactionMetadata
      }
    })
  }, [e]))
}

function hE(e) {
  xl(_l(t => {
    const n = Da(t, "latest"),
      r = Da(t, "previous");
    e({
      snapshot: n,
      previousSnapshot: r
    })
  }, [e]))
}

function mE() {
  const e = hf(),
    [t, n] = fE(() => Da(e.current)),
    r = gy(t),
    o = sh(),
    i = sh();
  if (xl(_l(a => n(Da(a)), [])), Ey(() => {
      const a = t.retain();
      if (o.current && !ah) {
        var l;
        window.clearTimeout(o.current), o.current = null, (l = i.current) === null || l === void 0 || l.call(i), i.current = null
      }
      return () => {
        window.setTimeout(a, 10)
      }
    }, [t]), r !== t && !ah) {
    if (o.current) {
      var s;
      window.clearTimeout(o.current), o.current = null, (s = i.current) === null || s === void 0 || s.call(i), i.current = null
    }
    i.current = t.retain(), o.current = window.setTimeout(() => {
      var a;
      o.current = null, (a = i.current) === null || a === void 0 || a.call(i), i.current = null
    }, dE)
  }
  return t
}

function by(e, t) {
  var n;
  const r = e.getState(),
    o = (n = r.nextTree) !== null && n !== void 0 ? n : r.currentTree,
    i = t.getStore_INTERNAL().getState().currentTree;
  sE(() => {
    const s = new Set;
    for (const u of [o.atomValues.keys(), i.atomValues.keys()])
      for (const c of u) {
        var a, l;
        ((a = o.atomValues.get(c)) === null || a === void 0 ? void 0 : a.contents) !== ((l = i.atomValues.get(c)) === null || l === void 0 ? void 0 : l.contents) && Ry(c).shouldRestoreFromSnapshots && s.add(c)
      }
    s.forEach(u => {
      cE(e, new uE(u), i.atomValues.has(u) ? Me(i.atomValues.get(u)) : aE)
    }), e.replaceState(u => ({
      ...u,
      stateID: t.getID()
    }))
  })
}

function vE() {
  const e = hf();
  return _l(t => by(e.current, t), [e])
}
var ky = {
  useRecoilSnapshot: mE,
  gotoSnapshot: by,
  useGotoRecoilSnapshot: vE,
  useRecoilTransactionObserver: hE,
  useTransactionObservation_DEPRECATED: pE,
  useTransactionSubscription_DEPRECATED: xl
};
const {
  peekNodeInfo: gE
} = nr, {
  useStoreRef: yE
} = Pn;

function SE() {
  const e = yE();
  return ({
    key: t
  }) => gE(e.current, e.current.getState().currentTree, t)
}
var wE = SE;
const {
  reactMode: _E
} = es, {
  RecoilRoot: xE,
  useStoreRef: RE
} = Pn, {
  useMemo: EE
} = ge;

function bE() {
  _E().mode === "MUTABLE_SOURCE" && console.warn("Warning: There are known issues using useRecoilBridgeAcrossReactRoots() in recoil_mutable_source rendering mode.  Please consider upgrading to recoil_sync_external_store mode.");
  const e = RE().current;
  return EE(() => {
    function t({
      children: n
    }) {
      return ge.createElement(xE, {
        store_INTERNAL: e
      }, n)
    }
    return t
  }, [e])
}
var kE = bE;
const {
  loadableWithValue: CE
} = Ji, {
  initializeNode: TE
} = nr, {
  DEFAULT_VALUE: NE,
  getNode: $E
} = Ct, {
  copyTreeState: PE,
  getRecoilValueAsLoadable: AE,
  invalidateDownstreams: LE,
  writeLoadableToTreeState: IE
} = pn;

function uh(e) {
  return $E(e.key).nodeType === "atom"
}
class ME {
  constructor(t, n) {
    ae(this, "_store", void 0), ae(this, "_treeState", void 0), ae(this, "_changes", void 0), ae(this, "get", r => {
      if (this._changes.has(r.key)) return this._changes.get(r.key);
      if (!uh(r)) throw le("Reading selectors within atomicUpdate is not supported");
      const o = AE(this._store, r, this._treeState);
      if (o.state === "hasValue") return o.contents;
      throw o.state === "hasError" ? o.contents : le(`Expected Recoil atom ${r.key} to have a value, but it is in a loading state.`)
    }), ae(this, "set", (r, o) => {
      if (!uh(r)) throw le("Setting selectors within atomicUpdate is not supported");
      if (typeof o == "function") {
        const i = this.get(r);
        this._changes.set(r.key, o(i))
      } else TE(this._store, r.key, "set"), this._changes.set(r.key, o)
    }), ae(this, "reset", r => {
      this.set(r, NE)
    }), this._store = t, this._treeState = n, this._changes = new Map
  }
  newTreeState_INTERNAL() {
    if (this._changes.size === 0) return this._treeState;
    const t = PE(this._treeState);
    for (const [n, r] of this._changes) IE(t, n, CE(r));
    return LE(this._store, t), t
  }
}

function OE(e) {
  return t => {
    e.replaceState(n => {
      const r = new ME(e, n);
      return t(r), r.newTreeState_INTERNAL()
    })
  }
}
var DE = {
    atomicUpdater: OE
  },
  zE = DE.atomicUpdater,
  Cy = Object.freeze({
    __proto__: null,
    atomicUpdater: zE
  });

function BE(e, t) {
  if (!e) throw new Error(t)
}
var VE = BE,
  ai = VE;
const {
  atomicUpdater: FE
} = Cy, {
  batchUpdates: UE
} = hl, {
  DEFAULT_VALUE: WE
} = Ct, {
  useStoreRef: jE
} = Pn, {
  refreshRecoilValue: HE,
  setRecoilValue: ch
} = pn, {
  cloneSnapshot: KE
} = yl, {
  gotoSnapshot: GE
} = ky, {
  useCallback: qE
} = ge;
class Ty {}
const YE = new Ty;

function Ny(e, t, n, r) {
  let o = YE,
    i;
  if (UE(() => {
      const a = "useRecoilCallback() expects a function that returns a function: it accepts a function of the type (RecoilInterface) => (Args) => ReturnType and returns a callback function (Args) => ReturnType, where RecoilInterface is an object {snapshot, set, ...} and Args and ReturnType are the argument and return types of the callback you want to create.  Please see the docs at recoiljs.org for details.";
      if (typeof t != "function") throw le(a);
      const l = Fg({
          ...r != null ? r : {},
          set: (c, d) => ch(e, c, d),
          reset: c => ch(e, c, WE),
          refresh: c => HE(e, c),
          gotoSnapshot: c => GE(e, c),
          transact_UNSTABLE: c => FE(e)(c)
        }, {
          snapshot: () => {
            const c = KE(e);
            return i = c.retain(), c
          }
        }),
        u = t(l);
      if (typeof u != "function") throw le(a);
      o = u(...n)
    }), o instanceof Ty && ai(!1), $e(o)) o = o.finally(() => {
    var a;
    (a = i) === null || a === void 0 || a()
  });
  else {
    var s;
    (s = i) === null || s === void 0 || s()
  }
  return o
}

function QE(e, t) {
  const n = jE();
  return qE((...r) => Ny(n.current, e, r), t != null ? [...t, n] : void 0)
}
var $y = {
  recoilCallback: Ny,
  useRecoilCallback: QE
};
const {
  useStoreRef: XE
} = Pn, {
  refreshRecoilValue: ZE
} = pn, {
  useCallback: JE
} = ge;

function eb(e) {
  const t = XE();
  return JE(() => {
    const n = t.current;
    ZE(n, e)
  }, [e, t])
}
var tb = eb;
const {
  atomicUpdater: nb
} = Cy, {
  useStoreRef: rb
} = Pn, {
  useMemo: ob
} = ge;

function ib(e, t) {
  const n = rb();
  return ob(() => (...r) => {
    nb(n.current)(i => {
      e(i)(...r)
    })
  }, t != null ? [...t, n] : void 0)
}
var sb = ib;
class ab {
  constructor(t) {
    ae(this, "value", void 0), this.value = t
  }
}
var lb = {
    WrappedValue: ab
  },
  ub = lb.WrappedValue,
  Py = Object.freeze({
    __proto__: null,
    WrappedValue: ub
  });
const {
  isFastRefreshEnabled: cb
} = es;
class dh extends Error {}
class db {
  constructor(t) {
    var n, r, o;
    ae(this, "_name", void 0), ae(this, "_numLeafs", void 0), ae(this, "_root", void 0), ae(this, "_onHit", void 0), ae(this, "_onSet", void 0), ae(this, "_mapNodeValue", void 0), this._name = t == null ? void 0 : t.name, this._numLeafs = 0, this._root = null, this._onHit = (n = t == null ? void 0 : t.onHit) !== null && n !== void 0 ? n : () => {}, this._onSet = (r = t == null ? void 0 : t.onSet) !== null && r !== void 0 ? r : () => {}, this._mapNodeValue = (o = t == null ? void 0 : t.mapNodeValue) !== null && o !== void 0 ? o : i => i
  }
  size() {
    return this._numLeafs
  }
  root() {
    return this._root
  }
  get(t, n) {
    var r;
    return (r = this.getLeafNode(t, n)) === null || r === void 0 ? void 0 : r.value
  }
  getLeafNode(t, n) {
    if (this._root == null) return;
    let r = this._root;
    for (; r;) {
      if (n == null || n.onNodeVisit(r), r.type === "leaf") return this._onHit(r), r;
      const o = this._mapNodeValue(t(r.nodeKey));
      r = r.branches.get(o)
    }
  }
  set(t, n, r) {
    const o = () => {
      var i, s, a, l;
      let u, c;
      for (const [N, g] of t) {
        var d, p, y;
        const f = this._root;
        if ((f == null ? void 0 : f.type) === "leaf") throw this.invalidCacheError();
        const m = u;
        if (u = m ? m.branches.get(c) : f, u = (d = u) !== null && d !== void 0 ? d : {
            type: "branch",
            nodeKey: N,
            parent: m,
            branches: new Map,
            branchKey: c
          }, u.type !== "branch" || u.nodeKey !== N) throw this.invalidCacheError();
        m == null || m.branches.set(c, u), r == null || (p = r.onNodeVisit) === null || p === void 0 || p.call(r, u), c = this._mapNodeValue(g), this._root = (y = this._root) !== null && y !== void 0 ? y : u
      }
      const h = u ? (i = u) === null || i === void 0 ? void 0 : i.branches.get(c) : this._root;
      if (h != null && (h.type !== "leaf" || h.branchKey !== c)) throw this.invalidCacheError();
      const v = {
        type: "leaf",
        value: n,
        parent: u,
        branchKey: c
      };
      (s = u) === null || s === void 0 || s.branches.set(c, v), this._root = (a = this._root) !== null && a !== void 0 ? a : v, this._numLeafs++, this._onSet(v), r == null || (l = r.onNodeVisit) === null || l === void 0 || l.call(r, v)
    };
    try {
      o()
    } catch (i) {
      if (i instanceof dh) this.clear(), o();
      else throw i
    }
  }
  delete(t) {
    const n = this.root();
    if (!n) return !1;
    if (t === n) return this._root = null, this._numLeafs = 0, !0;
    let r = t.parent,
      o = t.branchKey;
    for (; r;) {
      var i;
      if (r.branches.delete(o), r === n) return r.branches.size === 0 ? (this._root = null, this._numLeafs = 0) : this._numLeafs--, !0;
      if (r.branches.size > 0) break;
      o = (i = r) === null || i === void 0 ? void 0 : i.branchKey, r = r.parent
    }
    for (; r !== n; r = r.parent)
      if (r == null) return !1;
    return this._numLeafs--, !0
  }
  clear() {
    this._numLeafs = 0, this._root = null
  }
  invalidCacheError() {
    const t = cb() ? "Possible Fast Refresh module reload detected.  This may also be caused by an selector returning inconsistent values. Resetting cache." : "Invalid cache values.  This happens when selectors do not return consistent values for the same input dependency values.  That may also be caused when using Fast Refresh to change a selector implementation.  Resetting cache.";
    throw Jd(t + (this._name != null ? ` - ${this._name}` : "")), new dh
  }
}
var fb = {
    TreeCache: db
  },
  pb = fb.TreeCache,
  Ay = Object.freeze({
    __proto__: null,
    TreeCache: pb
  });
class hb {
  constructor(t) {
    var n;
    ae(this, "_maxSize", void 0), ae(this, "_size", void 0), ae(this, "_head", void 0), ae(this, "_tail", void 0), ae(this, "_map", void 0), ae(this, "_keyMapper", void 0), this._maxSize = t.maxSize, this._size = 0, this._head = null, this._tail = null, this._map = new Map, this._keyMapper = (n = t.mapKey) !== null && n !== void 0 ? n : r => r
  }
  head() {
    return this._head
  }
  tail() {
    return this._tail
  }
  size() {
    return this._size
  }
  maxSize() {
    return this._maxSize
  }
  has(t) {
    return this._map.has(this._keyMapper(t))
  }
  get(t) {
    const n = this._keyMapper(t),
      r = this._map.get(n);
    if (r) return this.set(t, r.value), r.value
  }
  set(t, n) {
    const r = this._keyMapper(t);
    this._map.get(r) && this.delete(t);
    const i = this.head(),
      s = {
        key: t,
        right: i,
        left: null,
        value: n
      };
    i ? i.left = s : this._tail = s, this._map.set(r, s), this._head = s, this._size++, this._maybeDeleteLRU()
  }
  _maybeDeleteLRU() {
    this.size() > this.maxSize() && this.deleteLru()
  }
  deleteLru() {
    const t = this.tail();
    t && this.delete(t.key)
  }
  delete(t) {
    const n = this._keyMapper(t);
    if (!this._size || !this._map.has(n)) return;
    const r = Me(this._map.get(n)),
      o = r.right,
      i = r.left;
    o && (o.left = r.left), i && (i.right = r.right), r === this.head() && (this._head = o), r === this.tail() && (this._tail = i), this._map.delete(n), this._size--
  }
  clear() {
    this._size = 0, this._head = null, this._tail = null, this._map = new Map
  }
}
var mb = {
    LRUCache: hb
  },
  vb = mb.LRUCache,
  Ly = Object.freeze({
    __proto__: null,
    LRUCache: vb
  });
const {
  LRUCache: gb
} = Ly, {
  TreeCache: yb
} = Ay;

function Sb({
  name: e,
  maxSize: t,
  mapNodeValue: n = r => r
}) {
  const r = new gb({
      maxSize: t
    }),
    o = new yb({
      name: e,
      mapNodeValue: n,
      onHit: i => {
        r.set(i, !0)
      },
      onSet: i => {
        const s = r.tail();
        r.set(i, !0), s && o.size() > t && o.delete(s.key)
      }
    });
  return o
}
var fh = Sb;

function Gt(e, t, n) {
  if (typeof e == "string" && !e.includes('"') && !e.includes("\\")) return `"${e}"`;
  switch (typeof e) {
    case "undefined":
      return "";
    case "boolean":
      return e ? "true" : "false";
    case "number":
    case "symbol":
      return String(e);
    case "string":
      return JSON.stringify(e);
    case "function":
      if ((t == null ? void 0 : t.allowFunctions) !== !0) throw le("Attempt to serialize function in a Recoil cache key");
      return `__FUNCTION(${e.name})__`
  }
  if (e === null) return "null";
  if (typeof e != "object") {
    var r;
    return (r = JSON.stringify(e)) !== null && r !== void 0 ? r : ""
  }
  if ($e(e)) return "__PROMISE__";
  if (Array.isArray(e)) return `[${e.map((o,i)=>Gt(o,t,i.toString()))}]`;
  if (typeof e.toJSON == "function") return Gt(e.toJSON(n), t, n);
  if (e instanceof Map) {
    const o = {};
    for (const [i, s] of e) o[typeof i == "string" ? i : Gt(i, t)] = s;
    return Gt(o, t, n)
  }
  return e instanceof Set ? Gt(Array.from(e).sort((o, i) => Gt(o, t).localeCompare(Gt(i, t))), t, n) : Symbol !== void 0 && e[Symbol.iterator] != null && typeof e[Symbol.iterator] == "function" ? Gt(Array.from(e), t, n) : `{${Object.keys(e).filter(o=>e[o]!==void 0).sort().map(o=>`${Gt(o,t)}:${Gt(e[o],t,o)}`).join(",")}}`
}

function wb(e, t = {
  allowFunctions: !1
}) {
  return Gt(e, t)
}
var Rl = wb;
const {
  TreeCache: _b
} = Ay, Ms = {
  equality: "reference",
  eviction: "keep-all",
  maxSize: 1 / 0
};

function xb({
  equality: e = Ms.equality,
  eviction: t = Ms.eviction,
  maxSize: n = Ms.maxSize
} = Ms, r) {
  const o = Rb(e);
  return Eb(t, n, o, r)
}

function Rb(e) {
  switch (e) {
    case "reference":
      return t => t;
    case "value":
      return t => Rl(t)
  }
  throw le(`Unrecognized equality policy ${e}`)
}

function Eb(e, t, n, r) {
  switch (e) {
    case "keep-all":
      return new _b({
        name: r,
        mapNodeValue: n
      });
    case "lru":
      return fh({
        name: r,
        maxSize: Me(t),
        mapNodeValue: n
      });
    case "most-recent":
      return fh({
        name: r,
        maxSize: 1,
        mapNodeValue: n
      })
  }
  throw le(`Unrecognized eviction policy ${e}`)
}
var bb = xb;

function kb(e) {
  return () => null
}
var Cb = {
  startPerfBlock: kb
};
const {
  isLoadable: Tb,
  loadableWithError: Os,
  loadableWithPromise: Nb,
  loadableWithValue: Du
} = Ji, {
  WrappedValue: Iy
} = Py, {
  getNodeLoadable: Ds,
  peekNodeLoadable: $b,
  setNodeValue: Pb
} = nr, {
  saveDepsToStore: Ab
} = ts, {
  DEFAULT_VALUE: Lb,
  getConfigDeletionHandler: Ib,
  getNode: Mb,
  registerNode: ph
} = Ct, {
  isRecoilValue: Ob
} = _o, {
  markRecoilValueModified: hh
} = pn, {
  retainedByOptionWithDefault: Db
} = Tr, {
  recoilCallback: zb
} = $y, {
  startPerfBlock: Bb
} = Cb;
class My {}
const Qo = new My,
  Xo = [],
  zs = new Map,
  Vb = (() => {
    let e = 0;
    return () => e++
  })();

function Oy(e) {
  let t = null;
  const {
    key: n,
    get: r,
    cachePolicy_UNSTABLE: o
  } = e, i = e.set != null ? e.set : void 0, s = new Set, a = bb(o != null ? o : {
    equality: "reference",
    eviction: "keep-all"
  }, n), l = Db(e.retainedBy_UNSTABLE), u = new Map;
  let c = 0;

  function d() {
    return !ke("recoil_memory_managament_2020") || c > 0
  }

  function p(E) {
    return E.getState().knownSelectors.add(n), c++, () => {
      c--
    }
  }

  function y() {
    return Ib(n) !== void 0 && !d()
  }

  function h(E, D, L, Q, P) {
    J(D, Q, P), v(E, L)
  }

  function v(E, D) {
    H(E, D) && Y(E), g(D, !0)
  }

  function N(E, D) {
    H(E, D) && (Me(T(E)).stateVersions.clear(), g(D, !1))
  }

  function g(E, D) {
    const L = zs.get(E);
    if (L != null) {
      for (const Q of L) hh(Q, Me(t));
      D && zs.delete(E)
    }
  }

  function f(E, D) {
    let L = zs.get(D);
    L == null && zs.set(D, L = new Set), L.add(E)
  }

  function m(E, D, L, Q, P, X) {
    return D.then(te => {
      if (!d()) throw Y(E), Qo;
      const j = Du(te);
      return h(E, L, P, j, Q), te
    }).catch(te => {
      if (!d()) throw Y(E), Qo;
      if ($e(te)) return S(E, te, L, Q, P, X);
      const j = Os(te);
      throw h(E, L, P, j, Q), te
    })
  }

  function S(E, D, L, Q, P, X) {
    return D.then(te => {
      if (!d()) throw Y(E), Qo;
      X.loadingDepKey != null && X.loadingDepPromise === D ? L.atomValues.set(X.loadingDepKey, Du(te)) : E.getState().knownSelectors.forEach(Se => {
        L.atomValues.delete(Se)
      });
      const j = R(E, L);
      if (j && j.state !== "loading") {
        if ((H(E, P) || T(E) == null) && v(E, P), j.state === "hasValue") return j.contents;
        throw j.contents
      }
      if (!H(E, P)) {
        const Se = B(E, L);
        if (Se != null) return Se.loadingLoadable.contents
      }
      const [ve, Ce] = C(E, L, P);
      if (ve.state !== "loading" && h(E, L, P, ve, Ce), ve.state === "hasError") throw ve.contents;
      return ve.contents
    }).catch(te => {
      if (te instanceof My) throw Qo;
      if (!d()) throw Y(E), Qo;
      const j = Os(te);
      throw h(E, L, P, j, Q), te
    })
  }

  function x(E, D, L, Q) {
    var P, X, te, j;
    if (H(E, Q) || D.version === ((P = E.getState()) === null || P === void 0 || (X = P.currentTree) === null || X === void 0 ? void 0 : X.version) || D.version === ((te = E.getState()) === null || te === void 0 || (j = te.nextTree) === null || j === void 0 ? void 0 : j.version)) {
      var ve, Ce, Se;
      Ab(n, L, E, (ve = (Ce = E.getState()) === null || Ce === void 0 || (Se = Ce.nextTree) === null || Se === void 0 ? void 0 : Se.version) !== null && ve !== void 0 ? ve : E.getState().currentTree.version)
    }
    for (const we of L) s.add(we)
  }

  function C(E, D, L) {
    const Q = Bb(n);
    let P = !0,
      X = !0;
    const te = () => {
      Q(), X = !1
    };
    let j, ve = !1,
      Ce;
    const Se = {
        loadingDepKey: null,
        loadingDepPromise: null
      },
      we = new Map;

    function Ze({
      key: yt
    }) {
      const ft = Ds(E, D, yt);
      switch (we.set(yt, ft), P || (x(E, D, new Set(we.keys()), L), N(E, L)), ft.state) {
        case "hasValue":
          return ft.contents;
        case "hasError":
          throw ft.contents;
        case "loading":
          throw Se.loadingDepKey = yt, Se.loadingDepPromise = ft.contents, ft.contents
      }
      throw le("Invalid Loadable state")
    }
    const mn = yt => (...ft) => {
      if (X) throw le("Callbacks from getCallback() should only be called asynchronously after the selector is evalutated.  It can be used for selectors to return objects with callbacks that can work with Recoil state without a subscription.");
      return t == null && ai(!1), zb(E, yt, ft, {
        node: t
      })
    };
    try {
      j = r({
        get: Ze,
        getCallback: mn
      }), j = Ob(j) ? Ze(j) : j, Tb(j) && (j.state === "hasError" && (ve = !0), j = j.contents), $e(j) ? j = m(E, j, D, we, L, Se).finally(te) : te(), j = j instanceof Iy ? j.value : j
    } catch (yt) {
      j = yt, $e(j) ? j = S(E, j, D, we, L, Se).finally(te) : (ve = !0, te())
    }
    return ve ? Ce = Os(j) : $e(j) ? Ce = Nb(j) : Ce = Du(j), P = !1, Z(E, L, we), x(E, D, new Set(we.keys()), L), [Ce, we]
  }

  function R(E, D) {
    let L = D.atomValues.get(n);
    if (L != null) return L;
    const Q = new Set;
    try {
      L = a.get(X => (typeof X != "string" && ai(!1), Ds(E, D, X).contents), {
        onNodeVisit: X => {
          X.type === "branch" && X.nodeKey !== n && Q.add(X.nodeKey)
        }
      })
    } catch (X) {
      throw le(`Problem with cache lookup for selector "${n}": ${X.message}`)
    }
    if (L) {
      var P;
      D.atomValues.set(n, L), x(E, D, Q, (P = T(E)) === null || P === void 0 ? void 0 : P.executionID)
    }
    return L
  }

  function A(E, D) {
    const L = R(E, D);
    if (L != null) return Y(E), L;
    const Q = B(E, D);
    if (Q != null) {
      var P;
      return ((P = Q.loadingLoadable) === null || P === void 0 ? void 0 : P.state) === "loading" && f(E, Q.executionID), Q.loadingLoadable
    }
    const X = Vb(),
      [te, j] = C(E, D, X);
    return te.state === "loading" ? (W(E, X, te, j, D), f(E, X)) : (Y(E), J(D, te, j)), te
  }

  function B(E, D) {
    const L = oy([u.has(E) ? [Me(u.get(E))] : [], cl(of(u, ([P]) => P !== E), ([, P]) => P)]);

    function Q(P) {
      for (const [X, te] of P)
        if (!Ds(E, D, X).is(te)) return !0;
      return !1
    }
    for (const P of L) {
      if (P.stateVersions.get(D.version) || !Q(P.depValuesDiscoveredSoFarDuringAsyncWork)) return P.stateVersions.set(D.version, !0), P;
      P.stateVersions.set(D.version, !1)
    }
  }

  function T(E) {
    return u.get(E)
  }

  function W(E, D, L, Q, P) {
    u.set(E, {
      depValuesDiscoveredSoFarDuringAsyncWork: Q,
      executionID: D,
      loadingLoadable: L,
      stateVersions: new Map([
        [P.version, !0]
      ])
    })
  }

  function Z(E, D, L) {
    if (H(E, D)) {
      const Q = T(E);
      Q != null && (Q.depValuesDiscoveredSoFarDuringAsyncWork = L)
    }
  }

  function Y(E) {
    u.delete(E)
  }

  function H(E, D) {
    var L;
    return D === ((L = T(E)) === null || L === void 0 ? void 0 : L.executionID)
  }

  function ie(E) {
    return Array.from(E.entries()).map(([D, L]) => [D, L.contents])
  }

  function J(E, D, L) {
    E.atomValues.set(n, D);
    try {
      a.set(ie(L), D)
    } catch (Q) {
      throw le(`Problem with setting cache for selector "${n}": ${Q.message}`)
    }
  }

  function ee(E) {
    if (Xo.includes(n)) {
      const D = `Recoil selector has circular dependencies: ${Xo.slice(Xo.indexOf(n)).join(" → ")}`;
      return Os(le(D))
    }
    Xo.push(n);
    try {
      return E()
    } finally {
      Xo.pop()
    }
  }

  function $(E, D) {
    const L = D.atomValues.get(n);
    return L != null ? L : a.get(Q => {
      var P;
      return typeof Q != "string" && ai(!1), (P = $b(E, D, Q)) === null || P === void 0 ? void 0 : P.contents
    })
  }

  function V(E, D) {
    return ee(() => A(E, D))
  }

  function z(E) {
    E.atomValues.delete(n)
  }

  function K(E, D) {
    t == null && ai(!1);
    for (const Q of s) {
      var L;
      const P = Mb(Q);
      (L = P.clearCache) === null || L === void 0 || L.call(P, E, D)
    }
    s.clear(), z(D), a.clear(), hh(E, t)
  }
  return i != null ? t = ph({
    key: n,
    nodeType: "selector",
    peek: $,
    get: V,
    set: (D, L, Q) => {
      let P = !1;
      const X = new Map;

      function te({
        key: Se
      }) {
        if (P) throw le("Recoil: Async selector sets are not currently supported.");
        const we = Ds(D, L, Se);
        if (we.state === "hasValue") return we.contents;
        if (we.state === "loading") {
          const Ze = `Getting value of asynchronous atom or selector "${Se}" in a pending state while setting selector "${n}" is not yet supported.`;
          throw le(Ze)
        } else throw we.contents
      }

      function j(Se, we) {
        if (P) throw le("Recoil: Async selector sets are not currently supported.");
        const Ze = typeof we == "function" ? we(te(Se)) : we;
        Pb(D, L, Se.key, Ze).forEach((yt, ft) => X.set(ft, yt))
      }

      function ve(Se) {
        j(Se, Lb)
      }
      const Ce = i({
        set: j,
        get: te,
        reset: ve
      }, Q);
      if (Ce !== void 0) throw $e(Ce) ? le("Recoil: Async selector sets are not currently supported.") : le("Recoil: selector set should be a void function.");
      return P = !0, X
    },
    init: p,
    invalidate: z,
    clearCache: K,
    shouldDeleteConfigOnRelease: y,
    dangerouslyAllowMutability: e.dangerouslyAllowMutability,
    shouldRestoreFromSnapshots: !1,
    retainedBy: l
  }) : t = ph({
    key: n,
    nodeType: "selector",
    peek: $,
    get: V,
    init: p,
    invalidate: z,
    clearCache: K,
    shouldDeleteConfigOnRelease: y,
    dangerouslyAllowMutability: e.dangerouslyAllowMutability,
    shouldRestoreFromSnapshots: !1,
    retainedBy: l
  })
}
Oy.value = e => new Iy(e);
var Eo = Oy;
const {
  isLoadable: Fb,
  loadableWithError: zu,
  loadableWithPromise: Bu,
  loadableWithValue: Lr
} = Ji, {
  WrappedValue: Dy
} = Py, {
  peekNodeInfo: Ub
} = nr, {
  DEFAULT_VALUE: cr,
  DefaultValue: Dn,
  getConfigDeletionHandler: zy,
  registerNode: Wb,
  setConfigDeletionHandler: jb
} = Ct, {
  isRecoilValue: Hb
} = _o, {
  getRecoilValueAsLoadable: Kb,
  markRecoilValueModified: Gb,
  setRecoilValue: mh,
  setRecoilValueLoadable: qb
} = pn, {
  retainedByOptionWithDefault: Yb
} = Tr, Zo = e => e instanceof Dy ? e.value : e;

function Qb(e) {
  const {
    key: t,
    persistence_UNSTABLE: n
  } = e, r = Yb(e.retainedBy_UNSTABLE);
  let o = 0;

  function i(f) {
    return Bu(f.then(m => (s = Lr(m), m)).catch(m => {
      throw s = zu(m), m
    }))
  }
  let s = $e(e.default) ? i(e.default) : Fb(e.default) ? e.default.state === "loading" ? i(e.default.contents) : e.default : Lr(Zo(e.default));
  s.contents;
  let a;
  const l = new Map;

  function u(f) {
    return f
  }

  function c(f, m) {
    const S = m.then(x => {
      var C, R;
      return ((R = ((C = f.getState().nextTree) !== null && C !== void 0 ? C : f.getState().currentTree).atomValues.get(t)) === null || R === void 0 ? void 0 : R.contents) === S && mh(f, g, x), x
    }).catch(x => {
      var C, R;
      throw ((R = ((C = f.getState().nextTree) !== null && C !== void 0 ? C : f.getState().currentTree).atomValues.get(t)) === null || R === void 0 ? void 0 : R.contents) === S && qb(f, g, zu(x)), x
    });
    return S
  }

  function d(f, m, S) {
    var x;
    o++;
    const C = () => {
      var T;
      o--, (T = l.get(f)) === null || T === void 0 || T.forEach(W => W()), l.delete(f)
    };
    if (f.getState().knownAtoms.add(t), s.state === "loading") {
      const T = () => {
        var W;
        ((W = f.getState().nextTree) !== null && W !== void 0 ? W : f.getState().currentTree).atomValues.has(t) || Gb(f, g)
      };
      s.contents.finally(T)
    }
    const R = (x = e.effects) !== null && x !== void 0 ? x : e.effects_UNSTABLE;
    if (R != null) {
      let H = function(z) {
          if (W && z.key === t) {
            const K = T;
            return K instanceof Dn ? p(f, m) : $e(K) ? Bu(K.then(E => E instanceof Dn ? s.toPromise() : E)) : Lr(K)
          }
          return Kb(f, z)
        },
        ie = function(z) {
          return H(z).toPromise()
        },
        J = function(z) {
          var K;
          const E = Ub(f, (K = f.getState().nextTree) !== null && K !== void 0 ? K : f.getState().currentTree, z.key);
          return W && z.key === t && !(T instanceof Dn) ? {
            ...E,
            isSet: !0,
            loadable: H(z)
          } : E
        },
        T = cr,
        W = !0,
        Z = !1,
        Y = null;
      const ee = z => K => {
          if (W) {
            const E = H(g),
              D = E.state === "hasValue" ? E.contents : cr;
            T = typeof K == "function" ? K(D) : K, $e(T) && (T = T.then(L => (Y = {
              effect: z,
              value: L
            }, L)))
          } else {
            if ($e(K)) throw le("Setting atoms to async values is not implemented.");
            typeof K != "function" && (Y = {
              effect: z,
              value: Zo(K)
            }), mh(f, g, typeof K == "function" ? E => {
              const D = Zo(K(E));
              return Y = {
                effect: z,
                value: D
              }, D
            } : Zo(K))
          }
        },
        $ = z => () => ee(z)(cr),
        V = z => K => {
          var E;
          const {
            release: D
          } = f.subscribeToTransactions(L => {
            var Q;
            let {
              currentTree: P,
              previousTree: X
            } = L.getState();
            X || (X = P);
            const te = (Q = P.atomValues.get(t)) !== null && Q !== void 0 ? Q : s;
            if (te.state === "hasValue") {
              var j, ve, Ce, Se;
              const we = te.contents,
                Ze = (j = X.atomValues.get(t)) !== null && j !== void 0 ? j : s,
                mn = Ze.state === "hasValue" ? Ze.contents : cr;
              ((ve = Y) === null || ve === void 0 ? void 0 : ve.effect) !== z || ((Ce = Y) === null || Ce === void 0 ? void 0 : Ce.value) !== we ? K(we, mn, !P.atomValues.has(t)) : ((Se = Y) === null || Se === void 0 ? void 0 : Se.effect) === z && (Y = null)
            }
          }, t);
          l.set(f, [...(E = l.get(f)) !== null && E !== void 0 ? E : [], D])
        };
      for (const z of R) try {
        const K = z({
          node: g,
          storeID: f.storeID,
          parentStoreID_UNSTABLE: f.parentStoreID,
          trigger: S,
          setSelf: ee(z),
          resetSelf: $(z),
          onSet: V(z),
          getPromise: ie,
          getLoadable: H,
          getInfo_UNSTABLE: J
        });
        if (K != null) {
          var A;
          l.set(f, [...(A = l.get(f)) !== null && A !== void 0 ? A : [], K])
        }
      } catch (K) {
        T = K, Z = !0
      }
      if (W = !1, !(T instanceof Dn)) {
        var B;
        const z = Z ? zu(T) : $e(T) ? Bu(c(f, T)) : Lr(Zo(T));
        z.contents, m.atomValues.set(t, z), (B = f.getState().nextTree) === null || B === void 0 || B.atomValues.set(t, z)
      }
    }
    return C
  }

  function p(f, m) {
    var S, x;
    return (S = (x = m.atomValues.get(t)) !== null && x !== void 0 ? x : a) !== null && S !== void 0 ? S : s
  }

  function y(f, m) {
    if (m.atomValues.has(t)) return Me(m.atomValues.get(t));
    if (m.nonvalidatedAtoms.has(t)) {
      if (a != null) return a;
      if (n == null) return s;
      const S = m.nonvalidatedAtoms.get(t),
        x = n.validator(S, cr);
      return a = x instanceof Dn ? s : Lr(x), a
    } else return s
  }

  function h() {
    a = void 0
  }

  function v(f, m, S) {
    if (m.atomValues.has(t)) {
      const x = Me(m.atomValues.get(t));
      if (x.state === "hasValue" && S === x.contents) return new Map
    } else if (!m.nonvalidatedAtoms.has(t) && S instanceof Dn) return new Map;
    return a = void 0, new Map().set(t, Lr(S))
  }

  function N() {
    return zy(t) !== void 0 && o <= 0
  }
  const g = Wb({
    key: t,
    nodeType: "atom",
    peek: p,
    get: y,
    set: v,
    init: d,
    invalidate: h,
    shouldDeleteConfigOnRelease: N,
    dangerouslyAllowMutability: e.dangerouslyAllowMutability,
    persistence_UNSTABLE: e.persistence_UNSTABLE ? {
      type: e.persistence_UNSTABLE.type,
      backButton: e.persistence_UNSTABLE.backButton
    } : void 0,
    shouldRestoreFromSnapshots: !0,
    retainedBy: r
  });
  return g
}

function mf(e) {
  const {
    ...t
  } = e, n = "default" in e ? e.default : new Promise(() => {});
  return Hb(n) ? Xb({
    ...t,
    default: n
  }) : Qb({
    ...t,
    default: n
  })
}

function Xb(e) {
  const t = mf({
      ...e,
      default: cr,
      persistence_UNSTABLE: e.persistence_UNSTABLE === void 0 ? void 0 : {
        ...e.persistence_UNSTABLE,
        validator: r => r instanceof Dn ? r : Me(e.persistence_UNSTABLE).validator(r, cr)
      },
      effects: e.effects,
      effects_UNSTABLE: e.effects_UNSTABLE
    }),
    n = Eo({
      key: `${e.key}__withFallback`,
      get: ({
        get: r
      }) => {
        const o = r(t);
        return o instanceof Dn ? e.default : o
      },
      set: ({
        set: r
      }, o) => r(t, o),
      cachePolicy_UNSTABLE: {
        eviction: "most-recent"
      },
      dangerouslyAllowMutability: e.dangerouslyAllowMutability
    });
  return jb(n.key, zy(e.key)), n
}
mf.value = e => new Dy(e);
var By = mf;
class Zb {
  constructor(t) {
    var n;
    ae(this, "_map", void 0), ae(this, "_keyMapper", void 0), this._map = new Map, this._keyMapper = (n = t == null ? void 0 : t.mapKey) !== null && n !== void 0 ? n : r => r
  }
  size() {
    return this._map.size
  }
  has(t) {
    return this._map.has(this._keyMapper(t))
  }
  get(t) {
    return this._map.get(this._keyMapper(t))
  }
  set(t, n) {
    this._map.set(this._keyMapper(t), n)
  }
  delete(t) {
    this._map.delete(this._keyMapper(t))
  }
  clear() {
    this._map.clear()
  }
}
var Jb = {
    MapCache: Zb
  },
  ek = Jb.MapCache,
  tk = Object.freeze({
    __proto__: null,
    MapCache: ek
  });
const {
  LRUCache: vh
} = Ly, {
  MapCache: nk
} = tk, Bs = {
  equality: "reference",
  eviction: "none",
  maxSize: 1 / 0
};

function rk({
  equality: e = Bs.equality,
  eviction: t = Bs.eviction,
  maxSize: n = Bs.maxSize
} = Bs) {
  const r = ok(e);
  return ik(t, n, r)
}

function ok(e) {
  switch (e) {
    case "reference":
      return t => t;
    case "value":
      return t => Rl(t)
  }
  throw le(`Unrecognized equality policy ${e}`)
}

function ik(e, t, n) {
  switch (e) {
    case "keep-all":
      return new nk({
        mapKey: n
      });
    case "lru":
      return new vh({
        mapKey: n,
        maxSize: Me(t)
      });
    case "most-recent":
      return new vh({
        mapKey: n,
        maxSize: 1
      })
  }
  throw le(`Unrecognized eviction policy ${e}`)
}
var Vy = rk;
const {
  setConfigDeletionHandler: sk
} = Ct;

function ak(e) {
  var t, n;
  const r = Vy({
    equality: (t = (n = e.cachePolicyForParams_UNSTABLE) === null || n === void 0 ? void 0 : n.equality) !== null && t !== void 0 ? t : "value",
    eviction: "keep-all"
  });
  return o => {
    var i, s;
    const a = r.get(o);
    if (a != null) return a;
    const {
      cachePolicyForParams_UNSTABLE: l,
      ...u
    } = e, c = "default" in e ? e.default : new Promise(() => {}), d = By({
      ...u,
      key: `${e.key}__${(i=Rl(o))!==null&&i!==void 0?i:"void"}`,
      default: typeof c == "function" ? c(o) : c,
      retainedBy_UNSTABLE: typeof e.retainedBy_UNSTABLE == "function" ? e.retainedBy_UNSTABLE(o) : e.retainedBy_UNSTABLE,
      effects: typeof e.effects == "function" ? e.effects(o) : typeof e.effects_UNSTABLE == "function" ? e.effects_UNSTABLE(o) : (s = e.effects) !== null && s !== void 0 ? s : e.effects_UNSTABLE
    });
    return r.set(o, d), sk(d.key, () => {
      r.delete(o)
    }), d
  }
}
var lk = ak;
const {
  setConfigDeletionHandler: uk
} = Ct;
let ck = 0;

function dk(e) {
  var t, n;
  const r = Vy({
    equality: (t = (n = e.cachePolicyForParams_UNSTABLE) === null || n === void 0 ? void 0 : n.equality) !== null && t !== void 0 ? t : "value",
    eviction: "keep-all"
  });
  return o => {
    var i;
    let s;
    try {
      s = r.get(o)
    } catch (p) {
      throw le(`Problem with cache lookup for selector ${e.key}: ${p.message}`)
    }
    if (s != null) return s;
    const a = `${e.key}__selectorFamily/${(i=Rl(o,{allowFunctions:!0}))!==null&&i!==void 0?i:"void"}/${ck++}`,
      l = p => e.get(o)(p),
      u = e.cachePolicy_UNSTABLE,
      c = typeof e.retainedBy_UNSTABLE == "function" ? e.retainedBy_UNSTABLE(o) : e.retainedBy_UNSTABLE;
    let d;
    if (e.set != null) {
      const p = e.set;
      d = Eo({
        key: a,
        get: l,
        set: (h, v) => p(o)(h, v),
        cachePolicy_UNSTABLE: u,
        dangerouslyAllowMutability: e.dangerouslyAllowMutability,
        retainedBy_UNSTABLE: c
      })
    } else d = Eo({
      key: a,
      get: l,
      cachePolicy_UNSTABLE: u,
      dangerouslyAllowMutability: e.dangerouslyAllowMutability,
      retainedBy_UNSTABLE: c
    });
    return r.set(o, d), uk(d.key, () => {
      r.delete(o)
    }), d
  }
}
var rr = dk;
const fk = rr({
  key: "__constant",
  get: e => () => e,
  cachePolicyForParams_UNSTABLE: {
    equality: "reference"
  }
});

function pk(e) {
  return fk(e)
}
var hk = pk;
const mk = rr({
  key: "__error",
  get: e => () => {
    throw le(e)
  },
  cachePolicyForParams_UNSTABLE: {
    equality: "reference"
  }
});

function vk(e) {
  return mk(e)
}
var gk = vk;

function yk(e) {
  return e
}
var Sk = yk;
const {
  loadableWithError: Fy,
  loadableWithPromise: Uy,
  loadableWithValue: Wy
} = Ji;

function El(e, t) {
  const n = Array(t.length).fill(void 0),
    r = Array(t.length).fill(void 0);
  for (const [o, i] of t.entries()) try {
    n[o] = e(i)
  } catch (s) {
    r[o] = s
  }
  return [n, r]
}

function wk(e) {
  return e != null && !$e(e)
}

function bl(e) {
  return Array.isArray(e) ? e : Object.getOwnPropertyNames(e).map(t => e[t])
}

function Hc(e, t) {
  return Array.isArray(e) ? t : Object.getOwnPropertyNames(e).reduce((n, r, o) => ({
    ...n,
    [r]: t[o]
  }), {})
}

function uo(e, t, n) {
  const r = n.map((o, i) => o == null ? Wy(t[i]) : $e(o) ? Uy(o) : Fy(o));
  return Hc(e, r)
}

function _k(e, t) {
  return t.map((n, r) => n === void 0 ? e[r] : n)
}
const xk = rr({
    key: "__waitForNone",
    get: e => ({
      get: t
    }) => {
      const n = bl(e),
        [r, o] = El(t, n);
      return uo(e, r, o)
    },
    dangerouslyAllowMutability: !0
  }),
  Rk = rr({
    key: "__waitForAny",
    get: e => ({
      get: t
    }) => {
      const n = bl(e),
        [r, o] = El(t, n);
      return o.some(i => !$e(i)) ? uo(e, r, o) : new Promise(i => {
        for (const [s, a] of o.entries()) $e(a) && a.then(l => {
          r[s] = l, o[s] = void 0, i(uo(e, r, o))
        }).catch(l => {
          o[s] = l, i(uo(e, r, o))
        })
      })
    },
    dangerouslyAllowMutability: !0
  }),
  Ek = rr({
    key: "__waitForAll",
    get: e => ({
      get: t
    }) => {
      const n = bl(e),
        [r, o] = El(t, n);
      if (o.every(s => s == null)) return Hc(e, r);
      const i = o.find(wk);
      if (i != null) throw i;
      return Promise.all(o).then(s => Hc(e, _k(r, s)))
    },
    dangerouslyAllowMutability: !0
  }),
  bk = rr({
    key: "__waitForAllSettled",
    get: e => ({
      get: t
    }) => {
      const n = bl(e),
        [r, o] = El(t, n);
      return o.every(i => !$e(i)) ? uo(e, r, o) : Promise.all(o.map((i, s) => $e(i) ? i.then(a => {
        r[s] = a, o[s] = void 0
      }).catch(a => {
        r[s] = void 0, o[s] = a
      }) : null)).then(() => uo(e, r, o))
    },
    dangerouslyAllowMutability: !0
  }),
  kk = rr({
    key: "__noWait",
    get: e => ({
      get: t
    }) => {
      try {
        return Eo.value(Wy(t(e)))
      } catch (n) {
        return Eo.value($e(n) ? Uy(n) : Fy(n))
      }
    },
    dangerouslyAllowMutability: !0
  });
var Ck = {
  waitForNone: xk,
  waitForAny: Rk,
  waitForAll: Ek,
  waitForAllSettled: bk,
  noWait: kk
};
const {
  RecoilLoadable: Tk
} = Ji, {
  DefaultValue: Nk
} = Ct, {
  RecoilRoot: $k,
  useRecoilStoreID: Pk
} = Pn, {
  isRecoilValue: Ak
} = _o, {
  retentionZone: Lk
} = fl, {
  freshSnapshot: Ik
} = yl, {
  useRecoilState: Mk,
  useRecoilState_TRANSITION_SUPPORT_UNSTABLE: Ok,
  useRecoilStateLoadable: Dk,
  useRecoilValue: zk,
  useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: Bk,
  useRecoilValueLoadable: Vk,
  useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: Fk,
  useResetRecoilState: Uk,
  useSetRecoilState: Wk
} = JR, {
  useGotoRecoilSnapshot: jk,
  useRecoilSnapshot: Hk,
  useRecoilTransactionObserver: Kk
} = ky, {
  useRecoilCallback: Gk
} = $y, {
  noWait: qk,
  waitForAll: Yk,
  waitForAllSettled: Qk,
  waitForAny: Xk,
  waitForNone: Zk
} = Ck;
var kl = {
    DefaultValue: Nk,
    isRecoilValue: Ak,
    RecoilLoadable: Tk,
    RecoilEnv: Ao,
    RecoilRoot: $k,
    useRecoilStoreID: Pk,
    useRecoilBridgeAcrossReactRoots_UNSTABLE: kE,
    atom: By,
    selector: Eo,
    atomFamily: lk,
    selectorFamily: rr,
    constSelector: hk,
    errorSelector: gk,
    readOnlySelector: Sk,
    noWait: qk,
    waitForNone: Zk,
    waitForAny: Xk,
    waitForAll: Yk,
    waitForAllSettled: Qk,
    useRecoilValue: zk,
    useRecoilValueLoadable: Vk,
    useRecoilState: Mk,
    useRecoilStateLoadable: Dk,
    useSetRecoilState: Wk,
    useResetRecoilState: Uk,
    useGetRecoilValueInfo_UNSTABLE: wE,
    useRecoilRefresher_UNSTABLE: tb,
    useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: Fk,
    useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: Bk,
    useRecoilState_TRANSITION_SUPPORT_UNSTABLE: Ok,
    useRecoilCallback: Gk,
    useRecoilTransaction_UNSTABLE: sb,
    useGotoRecoilSnapshot: jk,
    useRecoilSnapshot: Hk,
    useRecoilTransactionObserver_UNSTABLE: Kk,
    snapshot_UNSTABLE: Ik,
    useRetain: cf,
    retentionZone: Lk
  },
  Jk = kl.RecoilEnv,
  eC = kl.RecoilRoot,
  is = kl.atom,
  Jo = kl.useRecoilState;

function tC(e, t, n) {
  this.menuItemLabel = e, this.enabled = t, this.checked = n
}

function nC(e, t, n) {
  this.menuItemID = e, this.enabled = t, this.checked = n
}

function pe() {}
pe.THEME_COLOR_CHANGED_EVENT = "com.adobe.csxs.events.ThemeColorChanged";
pe.prototype.hostEnvironment = window.__adobe_cep__ ? JSON.parse(window.__adobe_cep__.getHostEnvironment()) : null;
pe.prototype.getHostEnvironment = function() {
  return this.hostEnvironment = JSON.parse(window.__adobe_cep__.getHostEnvironment()), this.hostEnvironment
};
pe.prototype.loadBinAsync = function(e, t) {
  try {
    var n = new XMLHttpRequest;
    n.responseType = "arraybuffer", n.open("GET", e, !0), n.onerror = function() {
      return console.log("Unable to load snapshot from given URL"), !1
    }, n.send(), n.onload = () => {
      window.__adobe_cep__.loadSnapshot(n.response), typeof t == "function" ? t() : typeof t < "u" && console.log("Provided callback is not a function")
    }
  } catch (r) {
    return console.log(r), !1
  }
  return !0
};
pe.prototype.loadBinSync = function(e) {
  try {
    var t = this.getOSInformation();
    if (e.startsWith("file://")) return t.indexOf("Windows") >= 0 ? e = e.replace("file:///", "") : t.indexOf("Mac") >= 0 && (e = e.replace("file://", "")), window.__adobe_cep__.loadSnapshot(e), !0
  } catch (n) {
    return console.log(n), !1
  }
  return !1
};
pe.prototype.closeExtension = function() {
  window.__adobe_cep__.closeExtension()
};
pe.prototype.getSystemPath = function(e) {
  var t = decodeURI(window.__adobe_cep__.getSystemPath(e)),
    n = this.getOSInformation();
  return n.indexOf("Windows") >= 0 ? t = t.replace("file:///", "") : n.indexOf("Mac") >= 0 && (t = t.replace("file://", "")), t
};
pe.prototype.evalScript = function(e, t) {
  t == null && (t = function(n) {}), window.__adobe_cep__.evalScript(e, t)
};
pe.prototype.getApplicationID = function() {
  var e = this.hostEnvironment.appId;
  return e
};
pe.prototype.getHostCapabilities = function() {
  var e = JSON.parse(window.__adobe_cep__.getHostCapabilities());
  return e
};
pe.prototype.dispatchEvent = function(e) {
  typeof e.data == "object" && (e.data = JSON.stringify(e.data)), window.__adobe_cep__.dispatchEvent(e)
};
pe.prototype.addEventListener = function(e, t, n) {
  window.__adobe_cep__.addEventListener(e, t, n)
};
pe.prototype.removeEventListener = function(e, t, n) {
  window.__adobe_cep__.removeEventListener(e, t, n)
};
pe.prototype.requestOpenExtension = function(e, t) {
  window.__adobe_cep__.requestOpenExtension(e, t)
};
pe.prototype.getExtensions = function(e) {
  var t = JSON.stringify(e),
    n = window.__adobe_cep__.getExtensions(t),
    r = JSON.parse(n);
  return r
};
pe.prototype.getNetworkPreferences = function() {
  var e = window.__adobe_cep__.getNetworkPreferences(),
    t = JSON.parse(e);
  return t
};
pe.prototype.initResourceBundle = function() {
  for (var e = JSON.parse(window.__adobe_cep__.initResourceBundle()), t = document.querySelectorAll("[data-locale]"), n = 0; n < t.length; n++) {
    var r = t[n],
      o = r.getAttribute("data-locale");
    if (o) {
      for (var i in e)
        if (i.indexOf(o) === 0) {
          var s = e[i];
          if (i.length == o.length) r.innerHTML = s;
          else if (i.charAt(o.length) == ".") {
            var a = i.substring(o.length + 1);
            r[a] = s
          }
        }
    }
  }
  return e
};
pe.prototype.dumpInstallationInfo = function() {
  return window.__adobe_cep__.dumpInstallationInfo()
};
pe.prototype.getOSInformation = function() {
  var e = navigator.userAgent;
  if (navigator.platform == "Win32" || navigator.platform == "Windows") {
    var t = "Windows",
      n = "";
    return e.indexOf("Windows") > -1 && (e.indexOf("Windows NT 5.0") > -1 ? t = "Windows 2000" : e.indexOf("Windows NT 5.1") > -1 ? t = "Windows XP" : e.indexOf("Windows NT 5.2") > -1 ? t = "Windows Server 2003" : e.indexOf("Windows NT 6.0") > -1 ? t = "Windows Vista" : e.indexOf("Windows NT 6.1") > -1 ? t = "Windows 7" : e.indexOf("Windows NT 6.2") > -1 ? t = "Windows 8" : e.indexOf("Windows NT 6.3") > -1 ? t = "Windows 8.1" : e.indexOf("Windows NT 10") > -1 && (t = "Windows 10"), e.indexOf("WOW64") > -1 || e.indexOf("Win64") > -1 ? n = " 64-bit" : n = " 32-bit"), t + n
  } else if (navigator.platform == "MacIntel" || navigator.platform == "Macintosh") {
    var r = "Mac OS X";
    return e.indexOf("Mac OS X") > -1 && (r = e.substring(e.indexOf("Mac OS X"), e.indexOf(")")), r = r.replace(/_/g, ".")), r
  }
  return "Unknown Operation System"
};
pe.prototype.openURLInDefaultBrowser = function(e) {
  return cep.util.openURLInDefaultBrowser(e)
};
pe.prototype.getExtensionID = function() {
  return window.__adobe_cep__.getExtensionId()
};
pe.prototype.getScaleFactor = function() {
  return window.__adobe_cep__.getScaleFactor()
};
navigator.appVersion.toLowerCase().indexOf("windows") >= 0 && (pe.prototype.getMonitorScaleFactor = function() {
  return window.__adobe_cep__.getMonitorScaleFactor()
});
pe.prototype.setScaleFactorChangedHandler = function(e) {
  window.__adobe_cep__.setScaleFactorChangedHandler(e)
};
pe.prototype.getCurrentApiVersion = function() {
  var e = JSON.parse(window.__adobe_cep__.getCurrentApiVersion());
  return e
};
pe.prototype.setPanelFlyoutMenu = function(e) {
  typeof e == "string" && window.__adobe_cep__.invokeSync("setPanelFlyoutMenu", e)
};
pe.prototype.updatePanelMenuItem = function(e, t, n) {
  var r = !1;
  if (this.getHostCapabilities().EXTENDED_PANEL_MENU) {
    var o = new tC(e, t, n);
    r = window.__adobe_cep__.invokeSync("updatePanelMenuItem", JSON.stringify(o))
  }
  return r
};
pe.prototype.setContextMenu = function(e, t) {
  typeof e == "string" && window.__adobe_cep__.invokeAsync("setContextMenu", e, t)
};
pe.prototype.setContextMenuByJSON = function(e, t) {
  typeof e == "string" && window.__adobe_cep__.invokeAsync("setContextMenuByJSON", e, t)
};
pe.prototype.updateContextMenuItem = function(e, t, n) {
  var r = new nC(e, t, n);
  ret = window.__adobe_cep__.invokeSync("updateContextMenuItem", JSON.stringify(r))
};
pe.prototype.isWindowVisible = function() {
  return window.__adobe_cep__.invokeSync("isWindowVisible", "")
};
pe.prototype.resizeContent = function(e, t) {
  window.__adobe_cep__.resizeContent(e, t)
};
pe.prototype.registerInvalidCertificateCallback = function(e) {
  return window.__adobe_cep__.registerInvalidCertificateCallback(e)
};
pe.prototype.registerKeyEventsInterest = function(e) {
  return window.__adobe_cep__.registerKeyEventsInterest(e)
};
pe.prototype.setWindowTitle = function(e) {
  window.__adobe_cep__.invokeSync("setWindowTitle", e)
};
pe.prototype.getWindowTitle = function() {
  return window.__adobe_cep__.invokeSync("getWindowTitle", "")
};
String.format = function(e) {
  if (arguments.length === 0) return null;
  var t = Array.prototype.slice.call(arguments, 1);
  return e.replace(/\{(\d+)\}/g, function(n, r) {
    return t[r]
  })
};
const rC = "0.0.1",
  Cl = {
    version: rC,
    id: "com.nfl.premiere-toolkit",
    displayName: "NFL Premiere Toolkit",
    symlink: "local",
    port: 3e3,
    servePort: 5e3,
    startingDebugPort: 9895,
    extensionManifestVersion: 6,
    requiredRuntimeVersion: 9,
    hosts: [{
      name: "PPRO",
      version: "[23.0,99.9]"
    }],
    type: "Panel",
    iconDarkNormal: "./src/assets/light-icon.png",
    iconNormal: "./src/assets/dark-icon.png",
    iconDarkNormalRollOver: "./src/assets/light-icon.png",
    iconNormalRollOver: "./src/assets/dark-icon.png",
    parameters: ["--v=0", "--enable-nodejs", "--mixed-context"],
    width: 500,
    height: 550,
    panels: [{
      mainPath: "./main/index.html",
      name: "main",
      panelDisplayName: "NFL Premiere Toolkit",
      autoVisible: !0,
      width: 600,
      height: 650
    }],
    build: {
      jsxBin: "off",
      sourceMap: !0
    },
    zxp: {
      country: "US",
      province: "CA",
      org: "MyCompany",
      password: "mypassword",
      tsa: "http://timestamp.digicert.com/",
      sourceMap: !1,
      jsxBin: "off"
    },
    installModules: [],
    copyAssets: [],
    copyZipAssets: []
  },
  Tl = Cl.id,
  oC = Cl.displayName,
  iC = Cl.version,
  sC = "Hyper Brew",
  aC = "https://hyperbrew.co/",
  lC = "https://portal.hyperbrew.co/?project=nfl-premiere-toolkit",
  gh = "info@hyperbrew.co";
typeof window.cep < "u" && require("crypto");
typeof window.cep < "u" && require("assert");
typeof window.cep < "u" && require("buffer");
const uC = typeof window.cep < "u" ? require("child_process") : {};
typeof window.cep < "u" && require("cluster");
typeof window.cep < "u" && require("dgram");
typeof window.cep < "u" && require("dns");
typeof window.cep < "u" && require("domain");
typeof window.cep < "u" && require("events");
const ln = typeof window.cep < "u" ? require("fs") : {};
typeof window.cep < "u" && require("http");
typeof window.cep < "u" && require("https");
typeof window.cep < "u" && require("net");
const Kc = typeof window.cep < "u" ? require("os") : {},
  Nr = typeof window.cep < "u" ? require("path") : {};
typeof window.cep < "u" && require("punycode");
typeof window.cep < "u" && require("querystring");
typeof window.cep < "u" && require("readline");
typeof window.cep < "u" && require("stream");
typeof window.cep < "u" && require("string_decoder");
typeof window.cep < "u" && require("timers");
typeof window.cep < "u" && require("tls");
typeof window.cep < "u" && require("tty");
typeof window.cep < "u" && require("url");
typeof window.cep < "u" && require("util");
typeof window.cep < "u" && require("v8");
typeof window.cep < "u" && require("vm");
typeof window.cep < "u" && require("zlib");
const cC = () => {
    const e = `<Menu>
  <MenuItem Label="---" />
  <MenuItem Id="info" Label="${oC} ${iC}" Enabled="true" Checked="false"/>
  <MenuItem Id="website" Label="by ${sC}" Enabled="true" Checked="false"/>
  <MenuItem Label="---" />
  <MenuItem Id="info" Label="Product Info" Enabled="true" Checked="false"/>
  <MenuItem Id="support" Label="Support: ${gh}" Enabled="true" Checked="false"/>
  <MenuItem Label="---" />
  <MenuItem Id="refresh" Label="Refresh" Enabled="true" Checked="false"/>
  <MenuItem Id="forceReload" Label="Force Reload" Enabled="true" Checked="false"/>
  <MenuItem Id="openDebugger" Label="Open Debugger" Enabled="true" Checked="false"/>
  </Menu>`,
      t = n => {
        let r;
        if (typeof n.data == "string") try {
          r = JSON.parse(n.data.replace(/\$/g, "").replace(/\=2/g, ":")).menuId
        } catch (o) {
          console.error(o)
        } else r = n.data.menuId;
        if (r === "website") Vs(aC);
        else if (r === "info") Vs(lC);
        else if (r === "support") Vs(`mailto:${gh}`);
        else if (r === "refresh") location.reload();
        else if (r === "forceReload") process.abort();
        else if (r === "openDebugger") Vs(`http://localhost:${Cl.startingDebugPort}/`);
        else if (r === "scriptIcons") {
          const o = Kc.platform() === "win32" ? "explorer.exe" : "open";
          uC.execFile(o, [Nr.join(__dirname, "script-icons")])
        }
      };
    window.__adobe_cep__.invokeSync("setPanelFlyoutMenu", e), window.__adobe_cep__.addEventListener("com.adobe.csxs.events.flyoutMenuClicked", t)
  },
  dC = () => {
    window.__adobe_cep__.invokeAsync("setContextMenuByJSON", JSON.stringify({
      menu: [{
        label: "Reload",
        enabled: !0,
        checked: !1,
        checkable: !1,
        id: "c-0",
        callback: () => {
          location.reload()
        }
      }, {
        label: "Force Reload",
        enabled: !0,
        checked: !1,
        checkable: !1,
        id: "c-1",
        callback: () => {
          process.abort()
        }
      }]
    }), () => {
      location.reload()
    })
  },
  fC = () => {
    cC(), dC()
  },
  ss = new pe,
  pC = (e, t = !1) => new Promise(function(n, r) {
    const i = (t ? "" : `var host = typeof $ !== 'undefined' ? $ : window; host["${Tl}"].`) + e;
    ss.evalScript("try{" + i + "}catch(e){alert(e);}", s => {
      n(s)
    })
  }),
  ir = (e, ...t) => new Promise(function(n, r) {
    const o = t.map(i => (console.log(JSON.stringify(i)), `${JSON.stringify(i)}`)).join(",");
    ss.evalScript(`try{
          var host = typeof $ !== 'undefined' ? $ : window;
          var res = host["${Tl}"].${e}(${o});
          JSON.stringify(res);
        }catch(e){
          e.fileName = new File(e.fileName).fsName;
          JSON.stringify(e);
        }`, i => {
      try {
        if (i === "undefined") return n();
        const s = JSON.parse(i);
        s.name === "ReferenceError" ? (console.error("REFERENCE ERROR"), r(s)) : n(s)
      } catch {
        r(i)
      }
    })
  }),
  yh = e => pC(`typeof $ !== 'undefined' ? $.evalFile("` + e + '") : fl.runScript(FLfile.platformPathToURI("' + e + '"));', !0),
  hC = (e = !0) => {
    if (window.cep) {
      fC();
      const t = ss.getSystemPath("extension"),
        n = `${t}/jsx/index.js`,
        r = `${t}/jsx/index.jsxbin`;
      ln.existsSync(n) ? (e && console.log(n), yh(n)) : ln.existsSync(r) && (e && console.log(r), yh(r))
    }
  },
  mC = e => e.replace(/\\/g, "/"),
  Vs = e => {
    window.cep ? ss.openURLInDefaultBrowser(e) : location.href = e
  },
  vC = () => {
    const {
      green: e,
      blue: t,
      red: n
    } = JSON.parse(window.__adobe_cep__.getHostEnvironment()).appSkinInfo.panelBackgroundColor.color;
    return {
      rgb: {
        r: n,
        g: e,
        b: t
      },
      hex: `#${n.toString(16)}${e.toString(16)}${t.toString(16)}`
    }
  },
  gC = e => {
    const t = () => {
      const n = vC();
      console.log("BG Color Updated: ", {
        rgb: n.rgb
      });
      const {
        r,
        g: o,
        b: i
      } = n.rgb;
      return `rgb(${r}, ${o}, ${i})`
    };
    e(t()), ss.addEventListener("com.adobe.csxs.events.ThemeColorChanged", () => e(t()), {})
  };
const yC = "../assets/nfl-e835a04c.svg";
const SC = {
    black: "#000",
    white: "#fff"
  },
  Fi = SC,
  wC = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000"
  },
  Ir = wC,
  _C = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff"
  },
  Mr = _C,
  xC = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff"
  },
  Or = xC,
  RC = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea"
  },
  Dr = RC,
  EC = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853"
  },
  zr = EC,
  bC = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00"
  },
  ei = bC,
  kC = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161"
  },
  CC = kC;

function _() {
  return _ = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  }, _.apply(this, arguments)
}

function Sn(e) {
  return e !== null && typeof e == "object" && e.constructor === Object
}

function jy(e) {
  if (!Sn(e)) return e;
  const t = {};
  return Object.keys(e).forEach(n => {
    t[n] = jy(e[n])
  }), t
}

function Jt(e, t, n = {
  clone: !0
}) {
  const r = n.clone ? _({}, e) : e;
  return Sn(e) && Sn(t) && Object.keys(t).forEach(o => {
    o !== "__proto__" && (Sn(t[o]) && o in e && Sn(e[o]) ? r[o] = Jt(e[o], t[o], n) : n.clone ? r[o] = Sn(t[o]) ? jy(t[o]) : t[o] : r[o] = t[o])
  }), r
}

function bo(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message."
}

function fe(e) {
  if (typeof e != "string") throw new Error(bo(7));
  return e.charAt(0).toUpperCase() + e.slice(1)
}

function Sh(...e) {
  return e.reduce((t, n) => n == null ? t : function(...o) {
    t.apply(this, o), n.apply(this, o)
  }, () => {})
}

function TC(e, t = 166) {
  let n;

  function r(...o) {
    const i = () => {
      e.apply(this, o)
    };
    clearTimeout(n), n = setTimeout(i, t)
  }
  return r.clear = () => {
    clearTimeout(n)
  }, r
}

function NC(e, t) {
  var n, r;
  return k.isValidElement(e) && t.indexOf((n = e.type.muiName) != null ? n : (r = e.type) == null || (r = r._payload) == null || (r = r.value) == null ? void 0 : r.muiName) !== -1
}

function Qn(e) {
  return e && e.ownerDocument || document
}

function as(e) {
  return Qn(e).defaultView || window
}

function Gc(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t)
}
const $C = typeof window < "u" ? k.useLayoutEffect : k.useEffect,
  Ui = $C;

function no(e) {
  const t = k.useRef(e);
  return Ui(() => {
    t.current = e
  }), k.useRef((...n) => (0, t.current)(...n)).current
}

function tn(...e) {
  return k.useMemo(() => e.every(t => t == null) ? null : t => {
    e.forEach(n => {
      Gc(n, t)
    })
  }, e)
}
let Nl = !0,
  qc = !1,
  wh;
const PC = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0
};

function AC(e) {
  const {
    type: t,
    tagName: n
  } = e;
  return !!(n === "INPUT" && PC[t] && !e.readOnly || n === "TEXTAREA" && !e.readOnly || e.isContentEditable)
}

function LC(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Nl = !0)
}

function Vu() {
  Nl = !1
}

function IC() {
  this.visibilityState === "hidden" && qc && (Nl = !0)
}

function MC(e) {
  e.addEventListener("keydown", LC, !0), e.addEventListener("mousedown", Vu, !0), e.addEventListener("pointerdown", Vu, !0), e.addEventListener("touchstart", Vu, !0), e.addEventListener("visibilitychange", IC, !0)
}

function OC(e) {
  const {
    target: t
  } = e;
  try {
    return t.matches(":focus-visible")
  } catch {}
  return Nl || AC(t)
}

function DC() {
  const e = k.useCallback(o => {
      o != null && MC(o.ownerDocument)
    }, []),
    t = k.useRef(!1);

  function n() {
    return t.current ? (qc = !0, window.clearTimeout(wh), wh = window.setTimeout(() => {
      qc = !1
    }, 100), t.current = !1, !0) : !1
  }

  function r(o) {
    return OC(o) ? (t.current = !0, !0) : !1
  }
  return {
    isFocusVisibleRef: t,
    onFocus: r,
    onBlur: n,
    ref: e
  }
}

function zC(e) {
  const t = e.documentElement.clientWidth;
  return Math.abs(window.innerWidth - t)
}

function vf(e, t) {
  const n = _({}, t);
  return Object.keys(e).forEach(r => {
    if (r.toString().match(/^(components|slots)$/)) n[r] = _({}, e[r], n[r]);
    else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
      const o = e[r] || {},
        i = t[r];
      n[r] = {}, !i || !Object.keys(i) ? n[r] = o : !o || !Object.keys(o) ? n[r] = i : (n[r] = _({}, i), Object.keys(o).forEach(s => {
        n[r][s] = vf(o[s], i[s])
      }))
    } else n[r] === void 0 && (n[r] = e[r])
  }), n
}

function Ye(e, t, n = void 0) {
  const r = {};
  return Object.keys(e).forEach(o => {
    r[o] = e[o].reduce((i, s) => {
      if (s) {
        const a = t(s);
        a !== "" && i.push(a), n && n[s] && i.push(n[s])
      }
      return i
    }, []).join(" ")
  }), r
}
const _h = e => e,
  BC = () => {
    let e = _h;
    return {
      configure(t) {
        e = t
      },
      generate(t) {
        return e(t)
      },
      reset() {
        e = _h
      }
    }
  },
  VC = BC(),
  Hy = VC,
  FC = {
    active: "active",
    checked: "checked",
    completed: "completed",
    disabled: "disabled",
    error: "error",
    expanded: "expanded",
    focused: "focused",
    focusVisible: "focusVisible",
    open: "open",
    readOnly: "readOnly",
    required: "required",
    selected: "selected"
  };

function je(e, t, n = "Mui") {
  const r = FC[t];
  return r ? `${n}-${r}` : `${Hy.generate(e)}-${t}`
}

function He(e, t, n = "Mui") {
  const r = {};
  return t.forEach(o => {
    r[o] = je(e, o, n)
  }), r
}
const ko = "$$material";

function ce(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o, i;
  for (i = 0; i < r.length; i++) o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n
}

function Ky(e) {
  var t = Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n]
  }
}
var UC = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  WC = Ky(function(e) {
    return UC.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91
  });

function jC(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
}

function HC(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t
}
var KC = function() {
    function e(n) {
      var r = this;
      this._insertTag = function(o) {
        var i;
        r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, i), r.tags.push(o)
      }, this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null
    }
    var t = e.prototype;
    return t.hydrate = function(r) {
      r.forEach(this._insertTag)
    }, t.insert = function(r) {
      this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(HC(this));
      var o = this.tags[this.tags.length - 1];
      if (this.isSpeedy) {
        var i = jC(o);
        try {
          i.insertRule(r, i.cssRules.length)
        } catch {}
      } else o.appendChild(document.createTextNode(r));
      this.ctr++
    }, t.flush = function() {
      this.tags.forEach(function(r) {
        return r.parentNode && r.parentNode.removeChild(r)
      }), this.tags = [], this.ctr = 0
    }, e
  }(),
  ut = "-ms-",
  za = "-moz-",
  _e = "-webkit-",
  Gy = "comm",
  gf = "rule",
  yf = "decl",
  GC = "@import",
  qy = "@keyframes",
  qC = "@layer",
  YC = Math.abs,
  $l = String.fromCharCode,
  QC = Object.assign;

function XC(e, t) {
  return ot(e, 0) ^ 45 ? (((t << 2 ^ ot(e, 0)) << 2 ^ ot(e, 1)) << 2 ^ ot(e, 2)) << 2 ^ ot(e, 3) : 0
}

function Yy(e) {
  return e.trim()
}

function ZC(e, t) {
  return (e = t.exec(e)) ? e[0] : e
}

function xe(e, t, n) {
  return e.replace(t, n)
}

function Yc(e, t) {
  return e.indexOf(t)
}

function ot(e, t) {
  return e.charCodeAt(t) | 0
}

function Wi(e, t, n) {
  return e.slice(t, n)
}

function on(e) {
  return e.length
}

function Sf(e) {
  return e.length
}

function Fs(e, t) {
  return t.push(e), e
}

function JC(e, t) {
  return e.map(t).join("")
}
var Pl = 1,
  Co = 1,
  Qy = 0,
  kt = 0,
  Ge = 0,
  Io = "";

function Al(e, t, n, r, o, i, s) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: Pl,
    column: Co,
    length: s,
    return: ""
  }
}

function ti(e, t) {
  return QC(Al("", null, null, "", null, null, 0), e, {
    length: -e.length
  }, t)
}

function eT() {
  return Ge
}

function tT() {
  return Ge = kt > 0 ? ot(Io, --kt) : 0, Co--, Ge === 10 && (Co = 1, Pl--), Ge
}

function At() {
  return Ge = kt < Qy ? ot(Io, kt++) : 0, Co++, Ge === 10 && (Co = 1, Pl++), Ge
}

function fn() {
  return ot(Io, kt)
}

function ia() {
  return kt
}

function ls(e, t) {
  return Wi(Io, e, t)
}

function ji(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1
  }
  return 0
}

function Xy(e) {
  return Pl = Co = 1, Qy = on(Io = e), kt = 0, []
}

function Zy(e) {
  return Io = "", e
}

function sa(e) {
  return Yy(ls(kt - 1, Qc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)))
}

function nT(e) {
  for (;
    (Ge = fn()) && Ge < 33;) At();
  return ji(e) > 2 || ji(Ge) > 3 ? "" : " "
}

function rT(e, t) {
  for (; --t && At() && !(Ge < 48 || Ge > 102 || Ge > 57 && Ge < 65 || Ge > 70 && Ge < 97););
  return ls(e, ia() + (t < 6 && fn() == 32 && At() == 32))
}

function Qc(e) {
  for (; At();) switch (Ge) {
    case e:
      return kt;
    case 34:
    case 39:
      e !== 34 && e !== 39 && Qc(Ge);
      break;
    case 40:
      e === 41 && Qc(e);
      break;
    case 92:
      At();
      break
  }
  return kt
}

function oT(e, t) {
  for (; At() && e + Ge !== 47 + 10;)
    if (e + Ge === 42 + 42 && fn() === 47) break;
  return "/*" + ls(t, kt - 1) + "*" + $l(e === 47 ? e : At())
}

function iT(e) {
  for (; !ji(fn());) At();
  return ls(e, kt)
}

function sT(e) {
  return Zy(aa("", null, null, null, [""], e = Xy(e), 0, [0], e))
}

function aa(e, t, n, r, o, i, s, a, l) {
  for (var u = 0, c = 0, d = s, p = 0, y = 0, h = 0, v = 1, N = 1, g = 1, f = 0, m = "", S = o, x = i, C = r, R = m; N;) switch (h = f, f = At()) {
    case 40:
      if (h != 108 && ot(R, d - 1) == 58) {
        Yc(R += xe(sa(f), "&", "&\f"), "&\f") != -1 && (g = -1);
        break
      }
    case 34:
    case 39:
    case 91:
      R += sa(f);
      break;
    case 9:
    case 10:
    case 13:
    case 32:
      R += nT(h);
      break;
    case 92:
      R += rT(ia() - 1, 7);
      continue;
    case 47:
      switch (fn()) {
        case 42:
        case 47:
          Fs(aT(oT(At(), ia()), t, n), l);
          break;
        default:
          R += "/"
      }
      break;
    case 123 * v:
      a[u++] = on(R) * g;
    case 125 * v:
    case 59:
    case 0:
      switch (f) {
        case 0:
        case 125:
          N = 0;
        case 59 + c:
          g == -1 && (R = xe(R, /\f/g, "")), y > 0 && on(R) - d && Fs(y > 32 ? Rh(R + ";", r, n, d - 1) : Rh(xe(R, " ", "") + ";", r, n, d - 2), l);
          break;
        case 59:
          R += ";";
        default:
          if (Fs(C = xh(R, t, n, u, c, o, a, m, S = [], x = [], d), i), f === 123)
            if (c === 0) aa(R, t, C, C, S, i, d, a, x);
            else switch (p === 99 && ot(R, 3) === 110 ? 100 : p) {
              case 100:
              case 108:
              case 109:
              case 115:
                aa(e, C, C, r && Fs(xh(e, C, C, 0, 0, o, a, m, o, S = [], d), x), o, x, d, a, r ? S : x);
                break;
              default:
                aa(R, C, C, C, [""], x, 0, a, x)
            }
      }
      u = c = y = 0, v = g = 1, m = R = "", d = s;
      break;
    case 58:
      d = 1 + on(R), y = h;
    default:
      if (v < 1) {
        if (f == 123) --v;
        else if (f == 125 && v++ == 0 && tT() == 125) continue
      }
      switch (R += $l(f), f * v) {
        case 38:
          g = c > 0 ? 1 : (R += "\f", -1);
          break;
        case 44:
          a[u++] = (on(R) - 1) * g, g = 1;
          break;
        case 64:
          fn() === 45 && (R += sa(At())), p = fn(), c = d = on(m = R += iT(ia())), f++;
          break;
        case 45:
          h === 45 && on(R) == 2 && (v = 0)
      }
  }
  return i
}

function xh(e, t, n, r, o, i, s, a, l, u, c) {
  for (var d = o - 1, p = o === 0 ? i : [""], y = Sf(p), h = 0, v = 0, N = 0; h < r; ++h)
    for (var g = 0, f = Wi(e, d + 1, d = YC(v = s[h])), m = e; g < y; ++g)(m = Yy(v > 0 ? p[g] + " " + f : xe(f, /&\f/g, p[g]))) && (l[N++] = m);
  return Al(e, t, n, o === 0 ? gf : a, l, u, c)
}

function aT(e, t, n) {
  return Al(e, t, n, Gy, $l(eT()), Wi(e, 2, -2), 0)
}

function Rh(e, t, n, r) {
  return Al(e, t, n, yf, Wi(e, 0, r), Wi(e, r + 1, -1), r)
}

function co(e, t) {
  for (var n = "", r = Sf(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
  return n
}

function lT(e, t, n, r) {
  switch (e.type) {
    case qC:
      if (e.children.length) break;
    case GC:
    case yf:
      return e.return = e.return || e.value;
    case Gy:
      return "";
    case qy:
      return e.return = e.value + "{" + co(e.children, r) + "}";
    case gf:
      e.value = e.props.join(",")
  }
  return on(n = co(e.children, r)) ? e.return = e.value + "{" + n + "}" : ""
}

function uT(e) {
  var t = Sf(e);
  return function(n, r, o, i) {
    for (var s = "", a = 0; a < t; a++) s += e[a](n, r, o, i) || "";
    return s
  }
}

function cT(e) {
  return function(t) {
    t.root || (t = t.return) && e(t)
  }
}
var dT = function(t, n, r) {
    for (var o = 0, i = 0; o = i, i = fn(), o === 38 && i === 12 && (n[r] = 1), !ji(i);) At();
    return ls(t, kt)
  },
  fT = function(t, n) {
    var r = -1,
      o = 44;
    do switch (ji(o)) {
      case 0:
        o === 38 && fn() === 12 && (n[r] = 1), t[r] += dT(kt - 1, n, r);
        break;
      case 2:
        t[r] += sa(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = fn() === 58 ? "&\f" : "", n[r] = t[r].length;
          break
        }
      default:
        t[r] += $l(o)
    }
    while (o = At());
    return t
  },
  pT = function(t, n) {
    return Zy(fT(Xy(t), n))
  },
  Eh = new WeakMap,
  hT = function(t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule";)
        if (r = r.parent, !r) return;
      if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Eh.get(r)) && !o) {
        Eh.set(t, !0);
        for (var i = [], s = pT(n, i), a = r.props, l = 0, u = 0; l < s.length; l++)
          for (var c = 0; c < a.length; c++, u++) t.props[u] = i[l] ? s[l].replace(/&\f/g, a[c]) : a[c] + " " + s[l]
      }
    }
  },
  mT = function(t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 && n.charCodeAt(2) === 98 && (t.return = "", t.value = "")
    }
  };

function Jy(e, t) {
  switch (XC(e, t)) {
    case 5103:
      return _e + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return _e + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return _e + e + za + e + ut + e + e;
    case 6828:
    case 4268:
      return _e + e + ut + e + e;
    case 6165:
      return _e + e + ut + "flex-" + e + e;
    case 5187:
      return _e + e + xe(e, /(\w+).+(:[^]+)/, _e + "box-$1$2" + ut + "flex-$1$2") + e;
    case 5443:
      return _e + e + ut + "flex-item-" + xe(e, /flex-|-self/, "") + e;
    case 4675:
      return _e + e + ut + "flex-line-pack" + xe(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return _e + e + ut + xe(e, "shrink", "negative") + e;
    case 5292:
      return _e + e + ut + xe(e, "basis", "preferred-size") + e;
    case 6060:
      return _e + "box-" + xe(e, "-grow", "") + _e + e + ut + xe(e, "grow", "positive") + e;
    case 4554:
      return _e + xe(e, /([^-])(transform)/g, "$1" + _e + "$2") + e;
    case 6187:
      return xe(xe(xe(e, /(zoom-|grab)/, _e + "$1"), /(image-set)/, _e + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return xe(e, /(image-set\([^]*)/, _e + "$1$`$1");
    case 4968:
      return xe(xe(e, /(.+:)(flex-)?(.*)/, _e + "box-pack:$3" + ut + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + _e + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return xe(e, /(.+)-inline(.+)/, _e + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (on(e) - 1 - t > 6) switch (ot(e, t + 1)) {
        case 109:
          if (ot(e, t + 4) !== 45) break;
        case 102:
          return xe(e, /(.+:)(.+)-([^]+)/, "$1" + _e + "$2-$3$1" + za + (ot(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Yc(e, "stretch") ? Jy(xe(e, "stretch", "fill-available"), t) + e : e
      }
      break;
    case 4949:
      if (ot(e, t + 1) !== 115) break;
    case 6444:
      switch (ot(e, on(e) - 3 - (~Yc(e, "!important") && 10))) {
        case 107:
          return xe(e, ":", ":" + _e) + e;
        case 101:
          return xe(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + _e + (ot(e, 14) === 45 ? "inline-" : "") + "box$3$1" + _e + "$2$3$1" + ut + "$2box$3") + e
      }
      break;
    case 5936:
      switch (ot(e, t + 11)) {
        case 114:
          return _e + e + ut + xe(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return _e + e + ut + xe(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return _e + e + ut + xe(e, /[svh]\w+-[tblr]{2}/, "lr") + e
      }
      return _e + e + ut + e + e
  }
  return e
}
var vT = function(t, n, r, o) {
    if (t.length > -1 && !t.return) switch (t.type) {
      case yf:
        t.return = Jy(t.value, t.length);
        break;
      case qy:
        return co([ti(t, {
          value: xe(t.value, "@", "@" + _e)
        })], o);
      case gf:
        if (t.length) return JC(t.props, function(i) {
          switch (ZC(i, /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              return co([ti(t, {
                props: [xe(i, /:(read-\w+)/, ":" + za + "$1")]
              })], o);
            case "::placeholder":
              return co([ti(t, {
                props: [xe(i, /:(plac\w+)/, ":" + _e + "input-$1")]
              }), ti(t, {
                props: [xe(i, /:(plac\w+)/, ":" + za + "$1")]
              }), ti(t, {
                props: [xe(i, /:(plac\w+)/, ut + "input-$1")]
              })], o)
          }
          return ""
        })
    }
  },
  gT = [vT],
  yT = function(t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function(v) {
        var N = v.getAttribute("data-emotion");
        N.indexOf(" ") !== -1 && (document.head.appendChild(v), v.setAttribute("data-s", ""))
      })
    }
    var o = t.stylisPlugins || gT,
      i = {},
      s, a = [];
    s = t.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + n + ' "]'), function(v) {
      for (var N = v.getAttribute("data-emotion").split(" "), g = 1; g < N.length; g++) i[N[g]] = !0;
      a.push(v)
    });
    var l, u = [hT, mT];
    {
      var c, d = [lT, cT(function(v) {
          c.insert(v)
        })],
        p = uT(u.concat(o, d)),
        y = function(N) {
          return co(sT(N), p)
        };
      l = function(N, g, f, m) {
        c = f, y(N ? N + "{" + g.styles + "}" : g.styles), m && (h.inserted[g.name] = !0)
      }
    }
    var h = {
      key: n,
      sheet: new KC({
        key: n,
        container: s,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: l
    };
    return h.sheet.hydrate(a), h
  },
  e0 = {
    exports: {}
  },
  be = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nt = typeof Symbol == "function" && Symbol.for,
  wf = nt ? Symbol.for("react.element") : 60103,
  _f = nt ? Symbol.for("react.portal") : 60106,
  Ll = nt ? Symbol.for("react.fragment") : 60107,
  Il = nt ? Symbol.for("react.strict_mode") : 60108,
  Ml = nt ? Symbol.for("react.profiler") : 60114,
  Ol = nt ? Symbol.for("react.provider") : 60109,
  Dl = nt ? Symbol.for("react.context") : 60110,
  xf = nt ? Symbol.for("react.async_mode") : 60111,
  zl = nt ? Symbol.for("react.concurrent_mode") : 60111,
  Bl = nt ? Symbol.for("react.forward_ref") : 60112,
  Vl = nt ? Symbol.for("react.suspense") : 60113,
  ST = nt ? Symbol.for("react.suspense_list") : 60120,
  Fl = nt ? Symbol.for("react.memo") : 60115,
  Ul = nt ? Symbol.for("react.lazy") : 60116,
  wT = nt ? Symbol.for("react.block") : 60121,
  _T = nt ? Symbol.for("react.fundamental") : 60117,
  xT = nt ? Symbol.for("react.responder") : 60118,
  RT = nt ? Symbol.for("react.scope") : 60119;

function Ot(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case wf:
        switch (e = e.type, e) {
          case xf:
          case zl:
          case Ll:
          case Ml:
          case Il:
          case Vl:
            return e;
          default:
            switch (e = e && e.$$typeof, e) {
              case Dl:
              case Bl:
              case Ul:
              case Fl:
              case Ol:
                return e;
              default:
                return t
            }
        }
      case _f:
        return t
    }
  }
}

function t0(e) {
  return Ot(e) === zl
}
be.AsyncMode = xf;
be.ConcurrentMode = zl;
be.ContextConsumer = Dl;
be.ContextProvider = Ol;
be.Element = wf;
be.ForwardRef = Bl;
be.Fragment = Ll;
be.Lazy = Ul;
be.Memo = Fl;
be.Portal = _f;
be.Profiler = Ml;
be.StrictMode = Il;
be.Suspense = Vl;
be.isAsyncMode = function(e) {
  return t0(e) || Ot(e) === xf
};
be.isConcurrentMode = t0;
be.isContextConsumer = function(e) {
  return Ot(e) === Dl
};
be.isContextProvider = function(e) {
  return Ot(e) === Ol
};
be.isElement = function(e) {
  return typeof e == "object" && e !== null && e.$$typeof === wf
};
be.isForwardRef = function(e) {
  return Ot(e) === Bl
};
be.isFragment = function(e) {
  return Ot(e) === Ll
};
be.isLazy = function(e) {
  return Ot(e) === Ul
};
be.isMemo = function(e) {
  return Ot(e) === Fl
};
be.isPortal = function(e) {
  return Ot(e) === _f
};
be.isProfiler = function(e) {
  return Ot(e) === Ml
};
be.isStrictMode = function(e) {
  return Ot(e) === Il
};
be.isSuspense = function(e) {
  return Ot(e) === Vl
};
be.isValidElementType = function(e) {
  return typeof e == "string" || typeof e == "function" || e === Ll || e === zl || e === Ml || e === Il || e === Vl || e === ST || typeof e == "object" && e !== null && (e.$$typeof === Ul || e.$$typeof === Fl || e.$$typeof === Ol || e.$$typeof === Dl || e.$$typeof === Bl || e.$$typeof === _T || e.$$typeof === xT || e.$$typeof === RT || e.$$typeof === wT)
};
be.typeOf = Ot;
e0.exports = be;
var ET = e0.exports,
  n0 = ET,
  bT = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  },
  kT = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  },
  r0 = {};
r0[n0.ForwardRef] = bT;
r0[n0.Memo] = kT;
var CT = !0;

function TT(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : r += o + " "
  }), r
}
var o0 = function(t, n, r) {
    var o = t.key + "-" + n.name;
    (r === !1 || CT === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles)
  },
  NT = function(t, n, r) {
    o0(t, n, r);
    var o = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var i = n;
      do t.insert(n === i ? "." + o : "", i, t.sheet, !0), i = i.next; while (i !== void 0)
    }
  };

function $T(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4) n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= n >>> 24, t = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16)
  }
  return t ^= t >>> 13, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36)
}
var PT = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
  },
  AT = /[A-Z]|^ms/g,
  LT = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  i0 = function(t) {
    return t.charCodeAt(1) === 45
  },
  bh = function(t) {
    return t != null && typeof t != "boolean"
  },
  Fu = Ky(function(e) {
    return i0(e) ? e : e.replace(AT, "-$&").toLowerCase()
  }),
  kh = function(t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string") return n.replace(LT, function(r, o, i) {
          return sn = {
            name: o,
            styles: i,
            next: sn
          }, o
        })
    }
    return PT[t] !== 1 && !i0(t) && typeof n == "number" && n !== 0 ? n + "px" : n
  };

function Hi(e, t, n) {
  if (n == null) return "";
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1) return sn = {
        name: n.name,
        styles: n.styles,
        next: sn
      }, n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0;) sn = {
            name: r.name,
            styles: r.styles,
            next: sn
          }, r = r.next;
        var o = n.styles + ";";
        return o
      }
      return IT(e, t, n)
    }
    case "function": {
      if (e !== void 0) {
        var i = sn,
          s = n(e);
        return sn = i, Hi(e, t, s)
      }
      break
    }
  }
  if (t == null) return n;
  var a = t[n];
  return a !== void 0 ? a : n
}

function IT(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++) r += Hi(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var s = n[i];
      if (typeof s != "object") t != null && t[s] !== void 0 ? r += i + "{" + t[s] + "}" : bh(s) && (r += Fu(i) + ":" + kh(i, s) + ";");
      else if (Array.isArray(s) && typeof s[0] == "string" && (t == null || t[s[0]] === void 0))
        for (var a = 0; a < s.length; a++) bh(s[a]) && (r += Fu(i) + ":" + kh(i, s[a]) + ";");
      else {
        var l = Hi(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            r += Fu(i) + ":" + l + ";";
            break
          }
          default:
            r += i + "{" + l + "}"
        }
      }
    }
  return r
}
var Ch = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  sn, s0 = function(t, n, r) {
    if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0) return t[0];
    var o = !0,
      i = "";
    sn = void 0;
    var s = t[0];
    s == null || s.raw === void 0 ? (o = !1, i += Hi(r, n, s)) : i += s[0];
    for (var a = 1; a < t.length; a++) i += Hi(r, n, t[a]), o && (i += s[a]);
    Ch.lastIndex = 0;
    for (var l = "", u;
      (u = Ch.exec(i)) !== null;) l += "-" + u[1];
    var c = $T(i) + l;
    return {
      name: c,
      styles: i,
      next: sn
    }
  },
  MT = function(t) {
    return t()
  },
  OT = Uf["useInsertionEffect"] ? Uf["useInsertionEffect"] : !1,
  DT = OT || MT,
  a0 = k.createContext(typeof HTMLElement < "u" ? yT({
    key: "css"
  }) : null);
a0.Provider;
var zT = function(t) {
    return k.forwardRef(function(n, r) {
      var o = k.useContext(a0);
      return t(n, o, r)
    })
  },
  Rf = k.createContext({});

function Wl() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  return s0(t)
}
var Mo = function() {
    var t = Wl.apply(void 0, arguments),
      n = "animation-" + t.name;
    return {
      name: n,
      styles: "@keyframes " + n + "{" + t.styles + "}",
      anim: 1,
      toString: function() {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_"
      }
    }
  },
  BT = WC,
  VT = function(t) {
    return t !== "theme"
  },
  Th = function(t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? BT : VT
  },
  Nh = function(t, n, r) {
    var o;
    if (n) {
      var i = n.shouldForwardProp;
      o = t.__emotion_forwardProp && i ? function(s) {
        return t.__emotion_forwardProp(s) && i(s)
      } : i
    }
    return typeof o != "function" && r && (o = t.__emotion_forwardProp), o
  },
  FT = function(t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag;
    return o0(n, r, o), DT(function() {
      return NT(n, r, o)
    }), null
  },
  UT = function e(t, n) {
    var r = t.__emotion_real === t,
      o = r && t.__emotion_base || t,
      i, s;
    n !== void 0 && (i = n.label, s = n.target);
    var a = Nh(t, n, r),
      l = a || Th(o),
      u = !l("as");
    return function() {
      var c = arguments,
        d = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (i !== void 0 && d.push("label:" + i + ";"), c[0] == null || c[0].raw === void 0) d.push.apply(d, c);
      else {
        d.push(c[0][0]);
        for (var p = c.length, y = 1; y < p; y++) d.push(c[y], c[0][y])
      }
      var h = zT(function(v, N, g) {
        var f = u && v.as || o,
          m = "",
          S = [],
          x = v;
        if (v.theme == null) {
          x = {};
          for (var C in v) x[C] = v[C];
          x.theme = k.useContext(Rf)
        }
        typeof v.className == "string" ? m = TT(N.registered, S, v.className) : v.className != null && (m = v.className + " ");
        var R = s0(d.concat(S), N.registered, x);
        m += N.key + "-" + R.name, s !== void 0 && (m += " " + s);
        var A = u && a === void 0 ? Th(f) : l,
          B = {};
        for (var T in v) u && T === "as" || A(T) && (B[T] = v[T]);
        return B.className = m, B.ref = g, k.createElement(k.Fragment, null, k.createElement(FT, {
          cache: N,
          serialized: R,
          isStringTag: typeof f == "string"
        }), k.createElement(f, B))
      });
      return h.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", h.defaultProps = t.defaultProps, h.__emotion_real = h, h.__emotion_base = o, h.__emotion_styles = d, h.__emotion_forwardProp = a, Object.defineProperty(h, "toString", {
        value: function() {
          return "." + s
        }
      }), h.withComponent = function(v, N) {
        return e(v, _({}, n, N, {
          shouldForwardProp: Nh(h, N, !0)
        })).apply(void 0, d)
      }, h
    }
  },
  WT = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"],
  Xc = UT.bind();
WT.forEach(function(e) {
  Xc[e] = Xc(e)
});
/**
 * @mui/styled-engine v5.14.18
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function l0(e, t) {
  return Xc(e, t)
}
const jT = (e, t) => {
    Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles))
  },
  HT = ["values", "unit", "step"],
  KT = e => {
    const t = Object.keys(e).map(n => ({
      key: n,
      val: e[n]
    })) || [];
    return t.sort((n, r) => n.val - r.val), t.reduce((n, r) => _({}, n, {
      [r.key]: r.val
    }), {})
  };

function GT(e) {
  const {
    values: t = {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    },
    unit: n = "px",
    step: r = 5
  } = e, o = ce(e, HT), i = KT(t), s = Object.keys(i);

  function a(p) {
    return `@media (min-width:${typeof t[p]=="number"?t[p]:p}${n})`
  }

  function l(p) {
    return `@media (max-width:${(typeof t[p]=="number"?t[p]:p)-r/100}${n})`
  }

  function u(p, y) {
    const h = s.indexOf(y);
    return `@media (min-width:${typeof t[p]=="number"?t[p]:p}${n}) and (max-width:${(h!==-1&&typeof t[s[h]]=="number"?t[s[h]]:y)-r/100}${n})`
  }

  function c(p) {
    return s.indexOf(p) + 1 < s.length ? u(p, s[s.indexOf(p) + 1]) : a(p)
  }

  function d(p) {
    const y = s.indexOf(p);
    return y === 0 ? a(s[1]) : y === s.length - 1 ? l(s[y]) : u(p, s[s.indexOf(p) + 1]).replace("@media", "@media not all and")
  }
  return _({
    keys: s,
    values: i,
    up: a,
    down: l,
    between: u,
    only: c,
    not: d,
    unit: n
  }, o)
}
const qT = {
    borderRadius: 4
  },
  YT = qT;

function _i(e, t) {
  return t ? Jt(e, t, {
    clone: !1
  }) : e
}
const Ef = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536
  },
  $h = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: e => `@media (min-width:${Ef[e]}px)`
  };

function Nn(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || $h;
    return t.reduce((s, a, l) => (s[i.up(i.keys[l])] = n(t[l]), s), {})
  }
  if (typeof t == "object") {
    const i = r.breakpoints || $h;
    return Object.keys(t).reduce((s, a) => {
      if (Object.keys(i.values || Ef).indexOf(a) !== -1) {
        const l = i.up(a);
        s[l] = n(t[a], a)
      } else {
        const l = a;
        s[l] = t[l]
      }
      return s
    }, {})
  }
  return n(t)
}

function QT(e = {}) {
  var t;
  return ((t = e.keys) == null ? void 0 : t.reduce((r, o) => {
    const i = e.up(o);
    return r[i] = {}, r
  }, {})) || {}
}

function XT(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n
  }, t)
}

function jl(e, t, n = !0) {
  if (!t || typeof t != "string") return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (r != null) return r
  }
  return t.split(".").reduce((r, o) => r && r[o] != null ? r[o] : null, e)
}

function Ba(e, t, n, r = n) {
  let o;
  return typeof e == "function" ? o = e(n) : Array.isArray(e) ? o = e[n] || r : o = jl(e, n) || r, t && (o = t(o, r, e)), o
}

function Re(e) {
  const {
    prop: t,
    cssProperty: n = e.prop,
    themeKey: r,
    transform: o
  } = e, i = s => {
    if (s[t] == null) return null;
    const a = s[t],
      l = s.theme,
      u = jl(l, r) || {};
    return Nn(s, a, d => {
      let p = Ba(u, o, d);
      return d === p && typeof d == "string" && (p = Ba(u, o, `${t}${d==="default"?"":fe(d)}`, d)), n === !1 ? p : {
        [n]: p
      }
    })
  };
  return i.propTypes = {}, i.filterProps = [t], i
}

function ZT(e) {
  const t = {};
  return n => (t[n] === void 0 && (t[n] = e(n)), t[n])
}
const JT = {
    m: "margin",
    p: "padding"
  },
  e2 = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"]
  },
  Ph = {
    marginX: "mx",
    marginY: "my",
    paddingX: "px",
    paddingY: "py"
  },
  t2 = ZT(e => {
    if (e.length > 2)
      if (Ph[e]) e = Ph[e];
      else return [e];
    const [t, n] = e.split(""), r = JT[t], o = e2[n] || "";
    return Array.isArray(o) ? o.map(i => r + i) : [r + o]
  }),
  bf = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"],
  kf = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...bf, ...kf];

function us(e, t, n, r) {
  var o;
  const i = (o = jl(e, t, !1)) != null ? o : n;
  return typeof i == "number" ? s => typeof s == "string" ? s : i * s : Array.isArray(i) ? s => typeof s == "string" ? s : i[s] : typeof i == "function" ? i : () => {}
}

function u0(e) {
  return us(e, "spacing", 8)
}

function cs(e, t) {
  if (typeof t == "string" || t == null) return t;
  const n = Math.abs(t),
    r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`
}

function n2(e, t) {
  return n => e.reduce((r, o) => (r[o] = cs(t, n), r), {})
}

function r2(e, t, n, r) {
  if (t.indexOf(n) === -1) return null;
  const o = t2(n),
    i = n2(o, r),
    s = e[n];
  return Nn(e, s, i)
}

function c0(e, t) {
  const n = u0(e.theme);
  return Object.keys(e).map(r => r2(e, t, r, n)).reduce(_i, {})
}

function Ve(e) {
  return c0(e, bf)
}
Ve.propTypes = {};
Ve.filterProps = bf;

function Fe(e) {
  return c0(e, kf)
}
Fe.propTypes = {};
Fe.filterProps = kf;

function o2(e = 8) {
  if (e.mui) return e;
  const t = u0({
      spacing: e
    }),
    n = (...r) => (r.length === 0 ? [1] : r).map(i => {
      const s = t(i);
      return typeof s == "number" ? `${s}px` : s
    }).join(" ");
  return n.mui = !0, n
}

function Hl(...e) {
  const t = e.reduce((r, o) => (o.filterProps.forEach(i => {
      r[i] = o
    }), r), {}),
    n = r => Object.keys(r).reduce((o, i) => t[i] ? _i(o, t[i](r)) : o, {});
  return n.propTypes = {}, n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), []), n
}

function un(e) {
  return typeof e != "number" ? e : `${e}px solid`
}
const i2 = Re({
    prop: "border",
    themeKey: "borders",
    transform: un
  }),
  s2 = Re({
    prop: "borderTop",
    themeKey: "borders",
    transform: un
  }),
  a2 = Re({
    prop: "borderRight",
    themeKey: "borders",
    transform: un
  }),
  l2 = Re({
    prop: "borderBottom",
    themeKey: "borders",
    transform: un
  }),
  u2 = Re({
    prop: "borderLeft",
    themeKey: "borders",
    transform: un
  }),
  c2 = Re({
    prop: "borderColor",
    themeKey: "palette"
  }),
  d2 = Re({
    prop: "borderTopColor",
    themeKey: "palette"
  }),
  f2 = Re({
    prop: "borderRightColor",
    themeKey: "palette"
  }),
  p2 = Re({
    prop: "borderBottomColor",
    themeKey: "palette"
  }),
  h2 = Re({
    prop: "borderLeftColor",
    themeKey: "palette"
  }),
  Kl = e => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = us(e.theme, "shape.borderRadius", 4),
        n = r => ({
          borderRadius: cs(t, r)
        });
      return Nn(e, e.borderRadius, n)
    }
    return null
  };
Kl.propTypes = {};
Kl.filterProps = ["borderRadius"];
Hl(i2, s2, a2, l2, u2, c2, d2, f2, p2, h2, Kl);
const Gl = e => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = us(e.theme, "spacing", 8),
      n = r => ({
        gap: cs(t, r)
      });
    return Nn(e, e.gap, n)
  }
  return null
};
Gl.propTypes = {};
Gl.filterProps = ["gap"];
const ql = e => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = us(e.theme, "spacing", 8),
      n = r => ({
        columnGap: cs(t, r)
      });
    return Nn(e, e.columnGap, n)
  }
  return null
};
ql.propTypes = {};
ql.filterProps = ["columnGap"];
const Yl = e => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = us(e.theme, "spacing", 8),
      n = r => ({
        rowGap: cs(t, r)
      });
    return Nn(e, e.rowGap, n)
  }
  return null
};
Yl.propTypes = {};
Yl.filterProps = ["rowGap"];
const m2 = Re({
    prop: "gridColumn"
  }),
  v2 = Re({
    prop: "gridRow"
  }),
  g2 = Re({
    prop: "gridAutoFlow"
  }),
  y2 = Re({
    prop: "gridAutoColumns"
  }),
  S2 = Re({
    prop: "gridAutoRows"
  }),
  w2 = Re({
    prop: "gridTemplateColumns"
  }),
  _2 = Re({
    prop: "gridTemplateRows"
  }),
  x2 = Re({
    prop: "gridTemplateAreas"
  }),
  R2 = Re({
    prop: "gridArea"
  });
Hl(Gl, ql, Yl, m2, v2, g2, y2, S2, w2, _2, x2, R2);

function fo(e, t) {
  return t === "grey" ? t : e
}
const E2 = Re({
    prop: "color",
    themeKey: "palette",
    transform: fo
  }),
  b2 = Re({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: fo
  }),
  k2 = Re({
    prop: "backgroundColor",
    themeKey: "palette",
    transform: fo
  });
Hl(E2, b2, k2);

function Nt(e) {
  return e <= 1 && e !== 0 ? `${e*100}%` : e
}
const C2 = Re({
    prop: "width",
    transform: Nt
  }),
  Cf = e => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = n => {
        var r, o;
        const i = ((r = e.theme) == null || (r = r.breakpoints) == null || (r = r.values) == null ? void 0 : r[n]) || Ef[n];
        return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
          maxWidth: `${i}${e.theme.breakpoints.unit}`
        } : {
          maxWidth: i
        } : {
          maxWidth: Nt(n)
        }
      };
      return Nn(e, e.maxWidth, t)
    }
    return null
  };
Cf.filterProps = ["maxWidth"];
const T2 = Re({
    prop: "minWidth",
    transform: Nt
  }),
  N2 = Re({
    prop: "height",
    transform: Nt
  }),
  $2 = Re({
    prop: "maxHeight",
    transform: Nt
  }),
  P2 = Re({
    prop: "minHeight",
    transform: Nt
  });
Re({
  prop: "size",
  cssProperty: "width",
  transform: Nt
});
Re({
  prop: "size",
  cssProperty: "height",
  transform: Nt
});
const A2 = Re({
  prop: "boxSizing"
});
Hl(C2, Cf, T2, N2, $2, P2, A2);
const L2 = {
    border: {
      themeKey: "borders",
      transform: un
    },
    borderTop: {
      themeKey: "borders",
      transform: un
    },
    borderRight: {
      themeKey: "borders",
      transform: un
    },
    borderBottom: {
      themeKey: "borders",
      transform: un
    },
    borderLeft: {
      themeKey: "borders",
      transform: un
    },
    borderColor: {
      themeKey: "palette"
    },
    borderTopColor: {
      themeKey: "palette"
    },
    borderRightColor: {
      themeKey: "palette"
    },
    borderBottomColor: {
      themeKey: "palette"
    },
    borderLeftColor: {
      themeKey: "palette"
    },
    borderRadius: {
      themeKey: "shape.borderRadius",
      style: Kl
    },
    color: {
      themeKey: "palette",
      transform: fo
    },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: fo
    },
    backgroundColor: {
      themeKey: "palette",
      transform: fo
    },
    p: {
      style: Fe
    },
    pt: {
      style: Fe
    },
    pr: {
      style: Fe
    },
    pb: {
      style: Fe
    },
    pl: {
      style: Fe
    },
    px: {
      style: Fe
    },
    py: {
      style: Fe
    },
    padding: {
      style: Fe
    },
    paddingTop: {
      style: Fe
    },
    paddingRight: {
      style: Fe
    },
    paddingBottom: {
      style: Fe
    },
    paddingLeft: {
      style: Fe
    },
    paddingX: {
      style: Fe
    },
    paddingY: {
      style: Fe
    },
    paddingInline: {
      style: Fe
    },
    paddingInlineStart: {
      style: Fe
    },
    paddingInlineEnd: {
      style: Fe
    },
    paddingBlock: {
      style: Fe
    },
    paddingBlockStart: {
      style: Fe
    },
    paddingBlockEnd: {
      style: Fe
    },
    m: {
      style: Ve
    },
    mt: {
      style: Ve
    },
    mr: {
      style: Ve
    },
    mb: {
      style: Ve
    },
    ml: {
      style: Ve
    },
    mx: {
      style: Ve
    },
    my: {
      style: Ve
    },
    margin: {
      style: Ve
    },
    marginTop: {
      style: Ve
    },
    marginRight: {
      style: Ve
    },
    marginBottom: {
      style: Ve
    },
    marginLeft: {
      style: Ve
    },
    marginX: {
      style: Ve
    },
    marginY: {
      style: Ve
    },
    marginInline: {
      style: Ve
    },
    marginInlineStart: {
      style: Ve
    },
    marginInlineEnd: {
      style: Ve
    },
    marginBlock: {
      style: Ve
    },
    marginBlockStart: {
      style: Ve
    },
    marginBlockEnd: {
      style: Ve
    },
    displayPrint: {
      cssProperty: !1,
      transform: e => ({
        "@media print": {
          display: e
        }
      })
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: {
      style: Gl
    },
    rowGap: {
      style: Yl
    },
    columnGap: {
      style: ql
    },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: {
      themeKey: "zIndex"
    },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: {
      themeKey: "shadows"
    },
    width: {
      transform: Nt
    },
    maxWidth: {
      style: Cf
    },
    minWidth: {
      transform: Nt
    },
    height: {
      transform: Nt
    },
    maxHeight: {
      transform: Nt
    },
    minHeight: {
      transform: Nt
    },
    boxSizing: {},
    fontFamily: {
      themeKey: "typography"
    },
    fontSize: {
      themeKey: "typography"
    },
    fontStyle: {
      themeKey: "typography"
    },
    fontWeight: {
      themeKey: "typography"
    },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: {
      cssProperty: !1,
      themeKey: "typography"
    }
  },
  Ql = L2;

function I2(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
    n = new Set(t);
  return e.every(r => n.size === Object.keys(r).length)
}

function M2(e, t) {
  return typeof e == "function" ? e(t) : e
}

function O2() {
  function e(n, r, o, i) {
    const s = {
        [n]: r,
        theme: o
      },
      a = i[n];
    if (!a) return {
      [n]: r
    };
    const {
      cssProperty: l = n,
      themeKey: u,
      transform: c,
      style: d
    } = a;
    if (r == null) return null;
    if (u === "typography" && r === "inherit") return {
      [n]: r
    };
    const p = jl(o, u) || {};
    return d ? d(s) : Nn(s, r, h => {
      let v = Ba(p, c, h);
      return h === v && typeof h == "string" && (v = Ba(p, c, `${n}${h==="default"?"":fe(h)}`, h)), l === !1 ? v : {
        [l]: v
      }
    })
  }

  function t(n) {
    var r;
    const {
      sx: o,
      theme: i = {}
    } = n || {};
    if (!o) return null;
    const s = (r = i.unstable_sxConfig) != null ? r : Ql;

    function a(l) {
      let u = l;
      if (typeof l == "function") u = l(i);
      else if (typeof l != "object") return l;
      if (!u) return null;
      const c = QT(i.breakpoints),
        d = Object.keys(c);
      let p = c;
      return Object.keys(u).forEach(y => {
        const h = M2(u[y], i);
        if (h != null)
          if (typeof h == "object")
            if (s[y]) p = _i(p, e(y, h, i, s));
            else {
              const v = Nn({
                theme: i
              }, h, N => ({
                [y]: N
              }));
              I2(v, h) ? p[y] = t({
                sx: h,
                theme: i
              }) : p = _i(p, v)
            }
        else p = _i(p, e(y, h, i, s))
      }), XT(d, p)
    }
    return Array.isArray(o) ? o.map(a) : a(o)
  }
  return t
}
const d0 = O2();
d0.filterProps = ["sx"];
const Xl = d0,
  D2 = ["breakpoints", "palette", "spacing", "shape"];

function Tf(e = {}, ...t) {
  const {
    breakpoints: n = {},
    palette: r = {},
    spacing: o,
    shape: i = {}
  } = e, s = ce(e, D2), a = GT(n), l = o2(o);
  let u = Jt({
    breakpoints: a,
    direction: "ltr",
    components: {},
    palette: _({
      mode: "light"
    }, r),
    spacing: l,
    shape: _({}, YT, i)
  }, s);
  return u = t.reduce((c, d) => Jt(c, d), u), u.unstable_sxConfig = _({}, Ql, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(d) {
    return Xl({
      sx: d,
      theme: this
    })
  }, u
}

function z2(e) {
  return Object.keys(e).length === 0
}

function f0(e = null) {
  const t = k.useContext(Rf);
  return !t || z2(t) ? e : t
}
const B2 = Tf();

function Nf(e = B2) {
  return f0(e)
}
const V2 = ["sx"],
  F2 = e => {
    var t, n;
    const r = {
        systemProps: {},
        otherProps: {}
      },
      o = (t = e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) != null ? t : Ql;
    return Object.keys(e).forEach(i => {
      o[i] ? r.systemProps[i] = e[i] : r.otherProps[i] = e[i]
    }), r
  };

function p0(e) {
  const {
    sx: t
  } = e, n = ce(e, V2), {
    systemProps: r,
    otherProps: o
  } = F2(n);
  let i;
  return Array.isArray(t) ? i = [r, ...t] : typeof t == "function" ? i = (...s) => {
    const a = t(...s);
    return Sn(a) ? _({}, r, a) : r
  } : i = _({}, r, t), _({}, o, {
    sx: i
  })
}

function h0(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++) e[t] && (n = h0(e[t])) && (r && (r += " "), r += n);
    else
      for (t in e) e[t] && (r && (r += " "), r += t);
  return r
}

function ue() {
  for (var e, t, n = 0, r = ""; n < arguments.length;)(e = arguments[n++]) && (t = h0(e)) && (r && (r += " "), r += t);
  return r
}
const U2 = ["className", "component"];

function m0(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: r = "MuiBox-root",
    generateClassName: o
  } = e, i = l0("div", {
    shouldForwardProp: a => a !== "theme" && a !== "sx" && a !== "as"
  })(Xl);
  return k.forwardRef(function(l, u) {
    const c = Nf(n),
      d = p0(l),
      {
        className: p,
        component: y = "div"
      } = d,
      h = ce(d, U2);
    return I(i, _({
      as: y,
      ref: u,
      className: ue(p, o ? o(r) : r),
      theme: t && c[t] || c
    }, h))
  })
}
const W2 = m0(),
  Ah = W2,
  j2 = ["variant"];

function Lh(e) {
  return e.length === 0
}

function v0(e) {
  const {
    variant: t
  } = e, n = ce(e, j2);
  let r = t || "";
  return Object.keys(n).sort().forEach(o => {
    o === "color" ? r += Lh(r) ? e[o] : fe(e[o]) : r += `${Lh(r)?o:fe(o)}${fe(e[o].toString())}`
  }), r
}
const H2 = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];

function K2(e) {
  return Object.keys(e).length === 0
}

function G2(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96
}
const q2 = (e, t) => t.components && t.components[e] && t.components[e].styleOverrides ? t.components[e].styleOverrides : null,
  Va = e => {
    const t = {};
    return e && e.forEach(n => {
      const r = v0(n.props);
      t[r] = n.style
    }), t
  },
  Y2 = (e, t) => {
    let n = [];
    return t && t.components && t.components[e] && t.components[e].variants && (n = t.components[e].variants), Va(n)
  },
  Fa = (e, t, n) => {
    const {
      ownerState: r = {}
    } = e, o = [];
    return n && n.forEach(i => {
      let s = !0;
      Object.keys(i.props).forEach(a => {
        r[a] !== i.props[a] && e[a] !== i.props[a] && (s = !1)
      }), s && o.push(t[v0(i.props)])
    }), o
  },
  Q2 = (e, t, n, r) => {
    var o;
    const i = n == null || (o = n.components) == null || (o = o[r]) == null ? void 0 : o.variants;
    return Fa(e, t, i)
  };

function la(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as"
}
const X2 = Tf(),
  Z2 = e => e && e.charAt(0).toLowerCase() + e.slice(1);

function ua({
  defaultTheme: e,
  theme: t,
  themeId: n
}) {
  return K2(t) ? e : t[n] || t
}

function J2(e) {
  return e ? (t, n) => n[e] : null
}
const Ih = ({
  styledArg: e,
  props: t,
  defaultTheme: n,
  themeId: r
}) => {
  const o = e(_({}, t, {
    theme: ua(_({}, t, {
      defaultTheme: n,
      themeId: r
    }))
  }));
  let i;
  if (o && o.variants && (i = o.variants, delete o.variants), i) {
    const s = Fa(t, Va(i), i);
    return [o, ...s]
  }
  return o
};

function eN(e = {}) {
  const {
    themeId: t,
    defaultTheme: n = X2,
    rootShouldForwardProp: r = la,
    slotShouldForwardProp: o = la
  } = e, i = s => Xl(_({}, s, {
    theme: ua(_({}, s, {
      defaultTheme: n,
      themeId: t
    }))
  }));
  return i.__mui_systemSx = !0, (s, a = {}) => {
    jT(s, S => S.filter(x => !(x != null && x.__mui_systemSx)));
    const {
      name: l,
      slot: u,
      skipVariantsResolver: c,
      skipSx: d,
      overridesResolver: p = J2(Z2(u))
    } = a, y = ce(a, H2), h = c !== void 0 ? c : u && u !== "Root" && u !== "root" || !1, v = d || !1;
    let N, g = la;
    u === "Root" || u === "root" ? g = r : u ? g = o : G2(s) && (g = void 0);
    const f = l0(s, _({
        shouldForwardProp: g,
        label: N
      }, y)),
      m = (S, ...x) => {
        const C = x ? x.map(T => {
          if (typeof T == "function" && T.__emotion_real !== T) return W => Ih({
            styledArg: T,
            props: W,
            defaultTheme: n,
            themeId: t
          });
          if (Sn(T)) {
            let W = T,
              Z;
            return T && T.variants && (Z = T.variants, delete W.variants, W = Y => {
              let H = T;
              return Fa(Y, Va(Z), Z).forEach(J => {
                H = Jt(H, J)
              }), H
            }), W
          }
          return T
        }) : [];
        let R = S;
        if (Sn(S)) {
          let T;
          S && S.variants && (T = S.variants, delete R.variants, R = W => {
            let Z = S;
            return Fa(W, Va(T), T).forEach(H => {
              Z = Jt(Z, H)
            }), Z
          })
        } else typeof S == "function" && S.__emotion_real !== S && (R = T => Ih({
          styledArg: S,
          props: T,
          defaultTheme: n,
          themeId: t
        }));
        l && p && C.push(T => {
          const W = ua(_({}, T, {
              defaultTheme: n,
              themeId: t
            })),
            Z = q2(l, W);
          if (Z) {
            const Y = {};
            return Object.entries(Z).forEach(([H, ie]) => {
              Y[H] = typeof ie == "function" ? ie(_({}, T, {
                theme: W
              })) : ie
            }), p(T, Y)
          }
          return null
        }), l && !h && C.push(T => {
          const W = ua(_({}, T, {
            defaultTheme: n,
            themeId: t
          }));
          return Q2(T, Y2(l, W), W, l)
        }), v || C.push(i);
        const A = C.length - x.length;
        if (Array.isArray(S) && A > 0) {
          const T = new Array(A).fill("");
          R = [...S, ...T], R.raw = [...S.raw, ...T]
        }
        const B = f(R, ...C);
        return s.muiName && (B.muiName = s.muiName), B
      };
    return f.withConfig && (m.withConfig = f.withConfig), m
  }
}

function tN(e) {
  const {
    theme: t,
    name: n,
    props: r
  } = e;
  return !t || !t.components || !t.components[n] || !t.components[n].defaultProps ? r : vf(t.components[n].defaultProps, r)
}

function nN({
  props: e,
  name: t,
  defaultTheme: n,
  themeId: r
}) {
  let o = Nf(n);
  return r && (o = o[r] || o), tN({
    theme: o,
    name: t,
    props: e
  })
}

function $f(e, t = 0, n = 1) {
  return Math.min(Math.max(t, e), n)
}

function rN(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length>=6?2:1}}`, "g");
  let n = e.match(t);
  return n && n[0].length === 1 && (n = n.map(r => r + r)), n ? `rgb${n.length===4?"a":""}(${n.map((r,o)=>o<3?parseInt(r,16):Math.round(parseInt(r,16)/255*1e3)/1e3).join(", ")})` : ""
}

function Er(e) {
  if (e.type) return e;
  if (e.charAt(0) === "#") return Er(rN(e));
  const t = e.indexOf("("),
    n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1) throw new Error(bo(9, e));
  let r = e.substring(t + 1, e.length - 1),
    o;
  if (n === "color") {
    if (r = r.split(" "), o = r.shift(), r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1) throw new Error(bo(10, o))
  } else r = r.split(",");
  return r = r.map(i => parseFloat(i)), {
    type: n,
    values: r,
    colorSpace: o
  }
}

function Zl(e) {
  const {
    type: t,
    colorSpace: n
  } = e;
  let {
    values: r
  } = e;
  return t.indexOf("rgb") !== -1 ? r = r.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.indexOf("hsl") !== -1 && (r[1] = `${r[1]}%`, r[2] = `${r[2]}%`), t.indexOf("color") !== -1 ? r = `${n} ${r.join(" ")}` : r = `${r.join(", ")}`, `${t}(${r})`
}

function oN(e) {
  e = Er(e);
  const {
    values: t
  } = e, n = t[0], r = t[1] / 100, o = t[2] / 100, i = r * Math.min(o, 1 - o), s = (u, c = (u + n / 30) % 12) => o - i * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  let a = "rgb";
  const l = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (a += "a", l.push(t[3])), Zl({
    type: a,
    values: l
  })
}

function Mh(e) {
  e = Er(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Er(oN(e)).values : e.values;
  return t = t.map(n => (e.type !== "color" && (n /= 255), n <= .03928 ? n / 12.92 : ((n + .055) / 1.055) ** 2.4)), Number((.2126 * t[0] + .7152 * t[1] + .0722 * t[2]).toFixed(3))
}

function iN(e, t) {
  const n = Mh(e),
    r = Mh(t);
  return (Math.max(n, r) + .05) / (Math.min(n, r) + .05)
}

function ht(e, t) {
  return e = Er(e), t = $f(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Zl(e)
}

function g0(e, t) {
  if (e = Er(e), t = $f(t), e.type.indexOf("hsl") !== -1) e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
  return Zl(e)
}

function y0(e, t) {
  if (e = Er(e), t = $f(t), e.type.indexOf("hsl") !== -1) e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
  return Zl(e)
}
const sN = k.createContext(null),
  S0 = sN;

function w0() {
  return k.useContext(S0)
}
const aN = typeof Symbol == "function" && Symbol.for,
  lN = aN ? Symbol.for("mui.nested") : "__THEME_NESTED__";

function uN(e, t) {
  return typeof t == "function" ? t(e) : _({}, e, t)
}

function cN(e) {
  const {
    children: t,
    theme: n
  } = e, r = w0(), o = k.useMemo(() => {
    const i = r === null ? n : uN(r, n);
    return i != null && (i[lN] = r !== null), i
  }, [n, r]);
  return I(S0.Provider, {
    value: o,
    children: t
  })
}
const Oh = {};

function Dh(e, t, n, r = !1) {
  return k.useMemo(() => {
    const o = e && t[e] || t;
    if (typeof n == "function") {
      const i = n(o),
        s = e ? _({}, t, {
          [e]: i
        }) : i;
      return r ? () => s : s
    }
    return e ? _({}, t, {
      [e]: n
    }) : _({}, t, n)
  }, [e, t, n, r])
}

function dN(e) {
  const {
    children: t,
    theme: n,
    themeId: r
  } = e, o = f0(Oh), i = w0() || Oh, s = Dh(r, o, n), a = Dh(r, i, n, !0);
  return I(cN, {
    theme: a,
    children: I(Rf.Provider, {
      value: s,
      children: t
    })
  })
}

function fN(e, t) {
  return _({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, t)
}
const pN = ["mode", "contrastThreshold", "tonalOffset"],
  zh = {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: {
      paper: Fi.white,
      default: Fi.white
    },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: .04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: .08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: .38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: .12,
      activatedOpacity: .12
    }
  },
  Uu = {
    text: {
      primary: Fi.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: Fi.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: .08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: .16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: .38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: .12,
      activatedOpacity: .24
    }
  };

function Bh(e, t, n, r) {
  const o = r.light || r,
    i = r.dark || r * 1.5;
  e[t] || (e.hasOwnProperty(n) ? e[t] = e[n] : t === "light" ? e.light = y0(e.main, o) : t === "dark" && (e.dark = g0(e.main, i)))
}

function hN(e = "light") {
  return e === "dark" ? {
    main: Or[200],
    light: Or[50],
    dark: Or[400]
  } : {
    main: Or[700],
    light: Or[400],
    dark: Or[800]
  }
}

function mN(e = "light") {
  return e === "dark" ? {
    main: Mr[200],
    light: Mr[50],
    dark: Mr[400]
  } : {
    main: Mr[500],
    light: Mr[300],
    dark: Mr[700]
  }
}

function vN(e = "light") {
  return e === "dark" ? {
    main: Ir[500],
    light: Ir[300],
    dark: Ir[700]
  } : {
    main: Ir[700],
    light: Ir[400],
    dark: Ir[800]
  }
}

function gN(e = "light") {
  return e === "dark" ? {
    main: Dr[400],
    light: Dr[300],
    dark: Dr[700]
  } : {
    main: Dr[700],
    light: Dr[500],
    dark: Dr[900]
  }
}

function yN(e = "light") {
  return e === "dark" ? {
    main: zr[400],
    light: zr[300],
    dark: zr[700]
  } : {
    main: zr[800],
    light: zr[500],
    dark: zr[900]
  }
}

function SN(e = "light") {
  return e === "dark" ? {
    main: ei[400],
    light: ei[300],
    dark: ei[700]
  } : {
    main: "#ed6c02",
    light: ei[500],
    dark: ei[900]
  }
}

function wN(e) {
  const {
    mode: t = "light",
    contrastThreshold: n = 3,
    tonalOffset: r = .2
  } = e, o = ce(e, pN), i = e.primary || hN(t), s = e.secondary || mN(t), a = e.error || vN(t), l = e.info || gN(t), u = e.success || yN(t), c = e.warning || SN(t);

  function d(v) {
    return iN(v, Uu.text.primary) >= n ? Uu.text.primary : zh.text.primary
  }
  const p = ({
      color: v,
      name: N,
      mainShade: g = 500,
      lightShade: f = 300,
      darkShade: m = 700
    }) => {
      if (v = _({}, v), !v.main && v[g] && (v.main = v[g]), !v.hasOwnProperty("main")) throw new Error(bo(11, N ? ` (${N})` : "", g));
      if (typeof v.main != "string") throw new Error(bo(12, N ? ` (${N})` : "", JSON.stringify(v.main)));
      return Bh(v, "light", f, r), Bh(v, "dark", m, r), v.contrastText || (v.contrastText = d(v.main)), v
    },
    y = {
      dark: Uu,
      light: zh
    };
  return Jt(_({
    common: _({}, Fi),
    mode: t,
    primary: p({
      color: i,
      name: "primary"
    }),
    secondary: p({
      color: s,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    error: p({
      color: a,
      name: "error"
    }),
    warning: p({
      color: c,
      name: "warning"
    }),
    info: p({
      color: l,
      name: "info"
    }),
    success: p({
      color: u,
      name: "success"
    }),
    grey: CC,
    contrastThreshold: n,
    getContrastText: d,
    augmentColor: p,
    tonalOffset: r
  }, y[t]), o)
}
const _N = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];

function xN(e) {
  return Math.round(e * 1e5) / 1e5
}
const Vh = {
    textTransform: "uppercase"
  },
  Fh = '"Roboto", "Helvetica", "Arial", sans-serif';

function RN(e, t) {
  const n = typeof t == "function" ? t(e) : t,
    {
      fontFamily: r = Fh,
      fontSize: o = 14,
      fontWeightLight: i = 300,
      fontWeightRegular: s = 400,
      fontWeightMedium: a = 500,
      fontWeightBold: l = 700,
      htmlFontSize: u = 16,
      allVariants: c,
      pxToRem: d
    } = n,
    p = ce(n, _N),
    y = o / 14,
    h = d || (g => `${g/u*y}rem`),
    v = (g, f, m, S, x) => _({
      fontFamily: r,
      fontWeight: g,
      fontSize: h(f),
      lineHeight: m
    }, r === Fh ? {
      letterSpacing: `${xN(S/f)}em`
    } : {}, x, c),
    N = {
      h1: v(i, 96, 1.167, -1.5),
      h2: v(i, 60, 1.2, -.5),
      h3: v(s, 48, 1.167, 0),
      h4: v(s, 34, 1.235, .25),
      h5: v(s, 24, 1.334, 0),
      h6: v(a, 20, 1.6, .15),
      subtitle1: v(s, 16, 1.75, .15),
      subtitle2: v(a, 14, 1.57, .1),
      body1: v(s, 16, 1.5, .15),
      body2: v(s, 14, 1.43, .15),
      button: v(a, 14, 1.75, .4, Vh),
      caption: v(s, 12, 1.66, .4),
      overline: v(s, 12, 2.66, 1, Vh),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit"
      }
    };
  return Jt(_({
    htmlFontSize: u,
    pxToRem: h,
    fontFamily: r,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: s,
    fontWeightMedium: a,
    fontWeightBold: l
  }, N), p, {
    clone: !1
  })
}
const EN = .2,
  bN = .14,
  kN = .12;

function Le(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${EN})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${bN})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${kN})`].join(",")
}
const CN = ["none", Le(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Le(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Le(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Le(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Le(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Le(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Le(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Le(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Le(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Le(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Le(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Le(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Le(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Le(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Le(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Le(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Le(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Le(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Le(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Le(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Le(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Le(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Le(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Le(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)],
  TN = CN,
  NN = ["duration", "easing", "delay"],
  $N = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
  },
  _0 = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195
  };

function Uh(e) {
  return `${Math.round(e)}ms`
}

function PN(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** .25 + t / 5) * 10)
}

function AN(e) {
  const t = _({}, $N, e.easing),
    n = _({}, _0, e.duration);
  return _({
    getAutoHeightDuration: PN,
    create: (o = ["all"], i = {}) => {
      const {
        duration: s = n.standard,
        easing: a = t.easeInOut,
        delay: l = 0
      } = i;
      return ce(i, NN), (Array.isArray(o) ? o : [o]).map(u => `${u} ${typeof s=="string"?s:Uh(s)} ${a} ${typeof l=="string"?l:Uh(l)}`).join(",")
    }
  }, e, {
    easing: t,
    duration: n
  })
}
const LN = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  },
  IN = LN,
  MN = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];

function Pf(e = {}, ...t) {
  const {
    mixins: n = {},
    palette: r = {},
    transitions: o = {},
    typography: i = {}
  } = e, s = ce(e, MN);
  if (e.vars) throw new Error(bo(18));
  const a = wN(r),
    l = Tf(e);
  let u = Jt(l, {
    mixins: fN(l.breakpoints, n),
    palette: a,
    shadows: TN.slice(),
    typography: RN(a, i),
    transitions: AN(o),
    zIndex: _({}, IN)
  });
  return u = Jt(u, s), u = t.reduce((c, d) => Jt(c, d), u), u.unstable_sxConfig = _({}, Ql, s == null ? void 0 : s.unstable_sxConfig), u.unstable_sx = function(d) {
    return Xl({
      sx: d,
      theme: this
    })
  }, u
}
const ON = Pf(),
  Af = ON;

function ds() {
  const e = Nf(Af);
  return e[ko] || e
}

function Ke({
  props: e,
  name: t
}) {
  return nN({
    props: e,
    name: t,
    defaultTheme: Af,
    themeId: ko
  })
}
const Jl = e => la(e) && e !== "classes",
  DN = eN({
    themeId: ko,
    defaultTheme: Af,
    rootShouldForwardProp: Jl
  }),
  me = DN,
  zN = ["theme"];

function BN(e) {
  let {
    theme: t
  } = e, n = ce(e, zN);
  const r = t[ko];
  return I(dN, _({}, n, {
    themeId: r ? ko : void 0,
    theme: r || t
  }))
}
const VN = e => {
    let t;
    return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, (t / 100).toFixed(2)
  },
  Wh = VN;

function FN(e) {
  return je("MuiSvgIcon", e)
}
He("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const UN = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"],
  WN = e => {
    const {
      color: t,
      fontSize: n,
      classes: r
    } = e, o = {
      root: ["root", t !== "inherit" && `color${fe(t)}`, `fontSize${fe(n)}`]
    };
    return Ye(o, FN, r)
  },
  jN = me("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const {
        ownerState: n
      } = e;
      return [t.root, n.color !== "inherit" && t[`color${fe(n.color)}`], t[`fontSize${fe(n.fontSize)}`]]
    }
  })(({
    theme: e,
    ownerState: t
  }) => {
    var n, r, o, i, s, a, l, u, c, d, p, y, h;
    return {
      userSelect: "none",
      width: "1em",
      height: "1em",
      display: "inline-block",
      fill: t.hasSvgAsChild ? void 0 : "currentColor",
      flexShrink: 0,
      transition: (n = e.transitions) == null || (r = n.create) == null ? void 0 : r.call(n, "fill", {
        duration: (o = e.transitions) == null || (o = o.duration) == null ? void 0 : o.shorter
      }),
      fontSize: {
        inherit: "inherit",
        small: ((i = e.typography) == null || (s = i.pxToRem) == null ? void 0 : s.call(i, 20)) || "1.25rem",
        medium: ((a = e.typography) == null || (l = a.pxToRem) == null ? void 0 : l.call(a, 24)) || "1.5rem",
        large: ((u = e.typography) == null || (c = u.pxToRem) == null ? void 0 : c.call(u, 35)) || "2.1875rem"
      } [t.fontSize],
      color: (d = (p = (e.vars || e).palette) == null || (p = p[t.color]) == null ? void 0 : p.main) != null ? d : {
        action: (y = (e.vars || e).palette) == null || (y = y.action) == null ? void 0 : y.active,
        disabled: (h = (e.vars || e).palette) == null || (h = h.action) == null ? void 0 : h.disabled,
        inherit: void 0
      } [t.color]
    }
  }),
  x0 = k.forwardRef(function(t, n) {
    const r = Ke({
        props: t,
        name: "MuiSvgIcon"
      }),
      {
        children: o,
        className: i,
        color: s = "inherit",
        component: a = "svg",
        fontSize: l = "medium",
        htmlColor: u,
        inheritViewBox: c = !1,
        titleAccess: d,
        viewBox: p = "0 0 24 24"
      } = r,
      y = ce(r, UN),
      h = k.isValidElement(o) && o.type === "svg",
      v = _({}, r, {
        color: s,
        component: a,
        fontSize: l,
        instanceFontSize: t.fontSize,
        inheritViewBox: c,
        viewBox: p,
        hasSvgAsChild: h
      }),
      N = {};
    c || (N.viewBox = p);
    const g = WN(v);
    return De(jN, _({
      as: a,
      className: ue(g.root, i),
      focusable: "false",
      color: u,
      "aria-hidden": d ? void 0 : !0,
      role: d ? "img" : void 0,
      ref: n
    }, N, y, h && o.props, {
      ownerState: v,
      children: [h ? o.props.children : o, d ? I("title", {
        children: d
      }) : null]
    }))
  });
x0.muiName = "SvgIcon";
const jh = x0;

function fs(e, t) {
  function n(r, o) {
    return I(jh, _({
      "data-testid": `${t}Icon`,
      ref: o
    }, r, {
      children: e
    }))
  }
  return n.muiName = jh.muiName, k.memo(k.forwardRef(n))
}

function Zc(e, t) {
  return Zc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r
  }, Zc(e, t)
}

function R0(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Zc(e, t)
}
const Hh = {
    disabled: !1
  },
  Ua = ge.createContext(null);
var HN = function(t) {
    return t.scrollTop
  },
  li = "unmounted",
  lr = "exited",
  ur = "entering",
  Fr = "entered",
  Jc = "exiting",
  An = function(e) {
    R0(t, e);

    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var s = o,
        a = s && !s.isMounting ? r.enter : r.appear,
        l;
      return i.appearStatus = null, r.in ? a ? (l = lr, i.appearStatus = ur) : l = Fr : r.unmountOnExit || r.mountOnEnter ? l = li : l = lr, i.state = {
        status: l
      }, i.nextCallback = null, i
    }
    t.getDerivedStateFromProps = function(o, i) {
      var s = o.in;
      return s && i.status === li ? {
        status: lr
      } : null
    };
    var n = t.prototype;
    return n.componentDidMount = function() {
      this.updateStatus(!0, this.appearStatus)
    }, n.componentDidUpdate = function(o) {
      var i = null;
      if (o !== this.props) {
        var s = this.state.status;
        this.props.in ? s !== ur && s !== Fr && (i = ur) : (s === ur || s === Fr) && (i = Jc)
      }
      this.updateStatus(!1, i)
    }, n.componentWillUnmount = function() {
      this.cancelNextCallback()
    }, n.getTimeouts = function() {
      var o = this.props.timeout,
        i, s, a;
      return i = s = a = o, o != null && typeof o != "number" && (i = o.exit, s = o.enter, a = o.appear !== void 0 ? o.appear : s), {
        exit: i,
        enter: s,
        appear: a
      }
    }, n.updateStatus = function(o, i) {
      if (o === void 0 && (o = !1), i !== null)
        if (this.cancelNextCallback(), i === ur) {
          if (this.props.unmountOnExit || this.props.mountOnEnter) {
            var s = this.props.nodeRef ? this.props.nodeRef.current : si.findDOMNode(this);
            s && HN(s)
          }
          this.performEnter(o)
        } else this.performExit();
      else this.props.unmountOnExit && this.state.status === lr && this.setState({
        status: li
      })
    }, n.performEnter = function(o) {
      var i = this,
        s = this.props.enter,
        a = this.context ? this.context.isMounting : o,
        l = this.props.nodeRef ? [a] : [si.findDOMNode(this), a],
        u = l[0],
        c = l[1],
        d = this.getTimeouts(),
        p = a ? d.appear : d.enter;
      if (!o && !s || Hh.disabled) {
        this.safeSetState({
          status: Fr
        }, function() {
          i.props.onEntered(u)
        });
        return
      }
      this.props.onEnter(u, c), this.safeSetState({
        status: ur
      }, function() {
        i.props.onEntering(u, c), i.onTransitionEnd(p, function() {
          i.safeSetState({
            status: Fr
          }, function() {
            i.props.onEntered(u, c)
          })
        })
      })
    }, n.performExit = function() {
      var o = this,
        i = this.props.exit,
        s = this.getTimeouts(),
        a = this.props.nodeRef ? void 0 : si.findDOMNode(this);
      if (!i || Hh.disabled) {
        this.safeSetState({
          status: lr
        }, function() {
          o.props.onExited(a)
        });
        return
      }
      this.props.onExit(a), this.safeSetState({
        status: Jc
      }, function() {
        o.props.onExiting(a), o.onTransitionEnd(s.exit, function() {
          o.safeSetState({
            status: lr
          }, function() {
            o.props.onExited(a)
          })
        })
      })
    }, n.cancelNextCallback = function() {
      this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null)
    }, n.safeSetState = function(o, i) {
      i = this.setNextCallback(i), this.setState(o, i)
    }, n.setNextCallback = function(o) {
      var i = this,
        s = !0;
      return this.nextCallback = function(a) {
        s && (s = !1, i.nextCallback = null, o(a))
      }, this.nextCallback.cancel = function() {
        s = !1
      }, this.nextCallback
    }, n.onTransitionEnd = function(o, i) {
      this.setNextCallback(i);
      var s = this.props.nodeRef ? this.props.nodeRef.current : si.findDOMNode(this),
        a = o == null && !this.props.addEndListener;
      if (!s || a) {
        setTimeout(this.nextCallback, 0);
        return
      }
      if (this.props.addEndListener) {
        var l = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback],
          u = l[0],
          c = l[1];
        this.props.addEndListener(u, c)
      }
      o != null && setTimeout(this.nextCallback, o)
    }, n.render = function() {
      var o = this.state.status;
      if (o === li) return null;
      var i = this.props,
        s = i.children;
      i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
      var a = ce(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
      return ge.createElement(Ua.Provider, {
        value: null
      }, typeof s == "function" ? s(o, a) : ge.cloneElement(ge.Children.only(s), a))
    }, t
  }(ge.Component);
An.contextType = Ua;
An.propTypes = {};

function Br() {}
An.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Br,
  onEntering: Br,
  onEntered: Br,
  onExit: Br,
  onExiting: Br,
  onExited: Br
};
An.UNMOUNTED = li;
An.EXITED = lr;
An.ENTERING = ur;
An.ENTERED = Fr;
An.EXITING = Jc;
const Lf = An;

function KN(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e
}

function If(e, t) {
  var n = function(i) {
      return t && k.isValidElement(i) ? t(i) : i
    },
    r = Object.create(null);
  return e && k.Children.map(e, function(o) {
    return o
  }).forEach(function(o) {
    r[o.key] = n(o)
  }), r
}

function GN(e, t) {
  e = e || {}, t = t || {};

  function n(c) {
    return c in t ? t[c] : e[c]
  }
  var r = Object.create(null),
    o = [];
  for (var i in e) i in t ? o.length && (r[i] = o, o = []) : o.push(i);
  var s, a = {};
  for (var l in t) {
    if (r[l])
      for (s = 0; s < r[l].length; s++) {
        var u = r[l][s];
        a[r[l][s]] = n(u)
      }
    a[l] = n(l)
  }
  for (s = 0; s < o.length; s++) a[o[s]] = n(o[s]);
  return a
}

function hr(e, t, n) {
  return n[t] != null ? n[t] : e.props[t]
}

function qN(e, t) {
  return If(e.children, function(n) {
    return k.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: hr(n, "appear", e),
      enter: hr(n, "enter", e),
      exit: hr(n, "exit", e)
    })
  })
}

function YN(e, t, n) {
  var r = If(e.children),
    o = GN(t, r);
  return Object.keys(o).forEach(function(i) {
    var s = o[i];
    if (k.isValidElement(s)) {
      var a = i in t,
        l = i in r,
        u = t[i],
        c = k.isValidElement(u) && !u.props.in;
      l && (!a || c) ? o[i] = k.cloneElement(s, {
        onExited: n.bind(null, s),
        in: !0,
        exit: hr(s, "exit", e),
        enter: hr(s, "enter", e)
      }) : !l && a && !c ? o[i] = k.cloneElement(s, {
        in: !1
      }) : l && a && k.isValidElement(u) && (o[i] = k.cloneElement(s, {
        onExited: n.bind(null, s),
        in: u.props.in,
        exit: hr(s, "exit", e),
        enter: hr(s, "enter", e)
      }))
    }
  }), o
}
var QN = Object.values || function(e) {
    return Object.keys(e).map(function(t) {
      return e[t]
    })
  },
  XN = {
    component: "div",
    childFactory: function(t) {
      return t
    }
  },
  Mf = function(e) {
    R0(t, e);

    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var s = i.handleExited.bind(KN(i));
      return i.state = {
        contextValue: {
          isMounting: !0
        },
        handleExited: s,
        firstRender: !0
      }, i
    }
    var n = t.prototype;
    return n.componentDidMount = function() {
      this.mounted = !0, this.setState({
        contextValue: {
          isMounting: !1
        }
      })
    }, n.componentWillUnmount = function() {
      this.mounted = !1
    }, t.getDerivedStateFromProps = function(o, i) {
      var s = i.children,
        a = i.handleExited,
        l = i.firstRender;
      return {
        children: l ? qN(o, a) : YN(o, s, a),
        firstRender: !1
      }
    }, n.handleExited = function(o, i) {
      var s = If(this.props.children);
      o.key in s || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(a) {
        var l = _({}, a.children);
        return delete l[o.key], {
          children: l
        }
      }))
    }, n.render = function() {
      var o = this.props,
        i = o.component,
        s = o.childFactory,
        a = ce(o, ["component", "childFactory"]),
        l = this.state.contextValue,
        u = QN(this.state.children).map(s);
      return delete a.appear, delete a.enter, delete a.exit, i === null ? ge.createElement(Ua.Provider, {
        value: l
      }, u) : ge.createElement(Ua.Provider, {
        value: l
      }, ge.createElement(i, a, u))
    }, t
  }(ge.Component);
Mf.propTypes = {};
Mf.defaultProps = XN;
const ZN = Mf,
  E0 = e => e.scrollTop;

function To(e, t) {
  var n, r;
  const {
    timeout: o,
    easing: i,
    style: s = {}
  } = e;
  return {
    duration: (n = s.transitionDuration) != null ? n : typeof o == "number" ? o : o[t.mode] || 0,
    easing: (r = s.transitionTimingFunction) != null ? r : typeof i == "object" ? i[t.mode] : i,
    delay: s.transitionDelay
  }
}

function JN(e) {
  return je("MuiCollapse", e)
}
He("MuiCollapse", ["root", "horizontal", "vertical", "entered", "hidden", "wrapper", "wrapperInner"]);
const e$ = ["addEndListener", "children", "className", "collapsedSize", "component", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "orientation", "style", "timeout", "TransitionComponent"],
  t$ = e => {
    const {
      orientation: t,
      classes: n
    } = e, r = {
      root: ["root", `${t}`],
      entered: ["entered"],
      hidden: ["hidden"],
      wrapper: ["wrapper", `${t}`],
      wrapperInner: ["wrapperInner", `${t}`]
    };
    return Ye(r, JN, n)
  },
  n$ = me("div", {
    name: "MuiCollapse",
    slot: "Root",
    overridesResolver: (e, t) => {
      const {
        ownerState: n
      } = e;
      return [t.root, t[n.orientation], n.state === "entered" && t.entered, n.state === "exited" && !n.in && n.collapsedSize === "0px" && t.hidden]
    }
  })(({
    theme: e,
    ownerState: t
  }) => _({
    height: 0,
    overflow: "hidden",
    transition: e.transitions.create("height")
  }, t.orientation === "horizontal" && {
    height: "auto",
    width: 0,
    transition: e.transitions.create("width")
  }, t.state === "entered" && _({
    height: "auto",
    overflow: "visible"
  }, t.orientation === "horizontal" && {
    width: "auto"
  }), t.state === "exited" && !t.in && t.collapsedSize === "0px" && {
    visibility: "hidden"
  })),
  r$ = me("div", {
    name: "MuiCollapse",
    slot: "Wrapper",
    overridesResolver: (e, t) => t.wrapper
  })(({
    ownerState: e
  }) => _({
    display: "flex",
    width: "100%"
  }, e.orientation === "horizontal" && {
    width: "auto",
    height: "100%"
  })),
  o$ = me("div", {
    name: "MuiCollapse",
    slot: "WrapperInner",
    overridesResolver: (e, t) => t.wrapperInner
  })(({
    ownerState: e
  }) => _({
    width: "100%"
  }, e.orientation === "horizontal" && {
    width: "auto",
    height: "100%"
  })),
  b0 = k.forwardRef(function(t, n) {
    const r = Ke({
        props: t,
        name: "MuiCollapse"
      }),
      {
        addEndListener: o,
        children: i,
        className: s,
        collapsedSize: a = "0px",
        component: l,
        easing: u,
        in: c,
        onEnter: d,
        onEntered: p,
        onEntering: y,
        onExit: h,
        onExited: v,
        onExiting: N,
        orientation: g = "vertical",
        style: f,
        timeout: m = _0.standard,
        TransitionComponent: S = Lf
      } = r,
      x = ce(r, e$),
      C = _({}, r, {
        orientation: g,
        collapsedSize: a
      }),
      R = t$(C),
      A = ds(),
      B = k.useRef(),
      T = k.useRef(null),
      W = k.useRef(),
      Z = typeof a == "number" ? `${a}px` : a,
      Y = g === "horizontal",
      H = Y ? "width" : "height";
    k.useEffect(() => () => {
      clearTimeout(B.current)
    }, []);
    const ie = k.useRef(null),
      J = tn(n, ie),
      ee = P => X => {
        if (P) {
          const te = ie.current;
          X === void 0 ? P(te) : P(te, X)
        }
      },
      $ = () => T.current ? T.current[Y ? "clientWidth" : "clientHeight"] : 0,
      V = ee((P, X) => {
        T.current && Y && (T.current.style.position = "absolute"), P.style[H] = Z, d && d(P, X)
      }),
      z = ee((P, X) => {
        const te = $();
        T.current && Y && (T.current.style.position = "");
        const {
          duration: j,
          easing: ve
        } = To({
          style: f,
          timeout: m,
          easing: u
        }, {
          mode: "enter"
        });
        if (m === "auto") {
          const Ce = A.transitions.getAutoHeightDuration(te);
          P.style.transitionDuration = `${Ce}ms`, W.current = Ce
        } else P.style.transitionDuration = typeof j == "string" ? j : `${j}ms`;
        P.style[H] = `${te}px`, P.style.transitionTimingFunction = ve, y && y(P, X)
      }),
      K = ee((P, X) => {
        P.style[H] = "auto", p && p(P, X)
      }),
      E = ee(P => {
        P.style[H] = `${$()}px`, h && h(P)
      }),
      D = ee(v),
      L = ee(P => {
        const X = $(),
          {
            duration: te,
            easing: j
          } = To({
            style: f,
            timeout: m,
            easing: u
          }, {
            mode: "exit"
          });
        if (m === "auto") {
          const ve = A.transitions.getAutoHeightDuration(X);
          P.style.transitionDuration = `${ve}ms`, W.current = ve
        } else P.style.transitionDuration = typeof te == "string" ? te : `${te}ms`;
        P.style[H] = Z, P.style.transitionTimingFunction = j, N && N(P)
      });
    return I(S, _({
      in: c,
      onEnter: V,
      onEntered: K,
      onEntering: z,
      onExit: E,
      onExited: D,
      onExiting: L,
      addEndListener: P => {
        m === "auto" && (B.current = setTimeout(P, W.current || 0)), o && o(ie.current, P)
      },
      nodeRef: ie,
      timeout: m === "auto" ? null : m
    }, x, {
      children: (P, X) => I(n$, _({
        as: l,
        className: ue(R.root, s, {
          entered: R.entered,
          exited: !c && Z === "0px" && R.hidden
        } [P]),
        style: _({
          [Y ? "minWidth" : "minHeight"]: Z
        }, f),
        ownerState: _({}, C, {
          state: P
        }),
        ref: J
      }, X, {
        children: I(r$, {
          ownerState: _({}, C, {
            state: P
          }),
          className: R.wrapper,
          ref: T,
          children: I(o$, {
            ownerState: _({}, C, {
              state: P
            }),
            className: R.wrapperInner,
            children: i
          })
        })
      }))
    }))
  });
b0.muiSupportAuto = !0;
const i$ = b0;

function s$(e) {
  return je("MuiPaper", e)
}
He("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const a$ = ["className", "component", "elevation", "square", "variant"],
  l$ = e => {
    const {
      square: t,
      elevation: n,
      variant: r,
      classes: o
    } = e, i = {
      root: ["root", r, !t && "rounded", r === "elevation" && `elevation${n}`]
    };
    return Ye(i, s$, o)
  },
  u$ = me("div", {
    name: "MuiPaper",
    slot: "Root",
    overridesResolver: (e, t) => {
      const {
        ownerState: n
      } = e;
      return [t.root, t[n.variant], !n.square && t.rounded, n.variant === "elevation" && t[`elevation${n.elevation}`]]
    }
  })(({
    theme: e,
    ownerState: t
  }) => {
    var n;
    return _({
      backgroundColor: (e.vars || e).palette.background.paper,
      color: (e.vars || e).palette.text.primary,
      transition: e.transitions.create("box-shadow")
    }, !t.square && {
      borderRadius: e.shape.borderRadius
    }, t.variant === "outlined" && {
      border: `1px solid ${(e.vars||e).palette.divider}`
    }, t.variant === "elevation" && _({
      boxShadow: (e.vars || e).shadows[t.elevation]
    }, !e.vars && e.palette.mode === "dark" && {
      backgroundImage: `linear-gradient(${ht("#fff",Wh(t.elevation))}, ${ht("#fff",Wh(t.elevation))})`
    }, e.vars && {
      backgroundImage: (n = e.vars.overlays) == null ? void 0 : n[t.elevation]
    }))
  }),
  c$ = k.forwardRef(function(t, n) {
    const r = Ke({
        props: t,
        name: "MuiPaper"
      }),
      {
        className: o,
        component: i = "div",
        elevation: s = 1,
        square: a = !1,
        variant: l = "elevation"
      } = r,
      u = ce(r, a$),
      c = _({}, r, {
        component: i,
        elevation: s,
        square: a,
        variant: l
      }),
      d = l$(c);
    return I(u$, _({
      as: i,
      ownerState: c,
      className: ue(d.root, o),
      ref: n
    }, u))
  }),
  k0 = c$;

function d$(e) {
  const {
    className: t,
    classes: n,
    pulsate: r = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: s,
    in: a,
    onExited: l,
    timeout: u
  } = e, [c, d] = k.useState(!1), p = ue(t, n.ripple, n.rippleVisible, r && n.ripplePulsate), y = {
    width: s,
    height: s,
    top: -(s / 2) + i,
    left: -(s / 2) + o
  }, h = ue(n.child, c && n.childLeaving, r && n.childPulsate);
  return !a && !c && d(!0), k.useEffect(() => {
    if (!a && l != null) {
      const v = setTimeout(l, u);
      return () => {
        clearTimeout(v)
      }
    }
  }, [l, a, u]), I("span", {
    className: p,
    style: y,
    children: I("span", {
      className: h
    })
  })
}
const f$ = He("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]),
  zt = f$,
  p$ = ["center", "classes", "className"];
let eu = e => e,
  Kh, Gh, qh, Yh;
const ed = 550,
  h$ = 80,
  m$ = Mo(Kh || (Kh = eu`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),
  v$ = Mo(Gh || (Gh = eu`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),
  g$ = Mo(qh || (qh = eu`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),
  y$ = me("span", {
    name: "MuiTouchRipple",
    slot: "Root"
  })({
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: "inherit"
  }),
  S$ = me(d$, {
    name: "MuiTouchRipple",
    slot: "Ripple"
  })(Yh || (Yh = eu`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), zt.rippleVisible, m$, ed, ({
    theme: e
  }) => e.transitions.easing.easeInOut, zt.ripplePulsate, ({
    theme: e
  }) => e.transitions.duration.shorter, zt.child, zt.childLeaving, v$, ed, ({
    theme: e
  }) => e.transitions.easing.easeInOut, zt.childPulsate, g$, ({
    theme: e
  }) => e.transitions.easing.easeInOut),
  w$ = k.forwardRef(function(t, n) {
    const r = Ke({
        props: t,
        name: "MuiTouchRipple"
      }),
      {
        center: o = !1,
        classes: i = {},
        className: s
      } = r,
      a = ce(r, p$),
      [l, u] = k.useState([]),
      c = k.useRef(0),
      d = k.useRef(null);
    k.useEffect(() => {
      d.current && (d.current(), d.current = null)
    }, [l]);
    const p = k.useRef(!1),
      y = k.useRef(0),
      h = k.useRef(null),
      v = k.useRef(null);
    k.useEffect(() => () => {
      y.current && clearTimeout(y.current)
    }, []);
    const N = k.useCallback(S => {
        const {
          pulsate: x,
          rippleX: C,
          rippleY: R,
          rippleSize: A,
          cb: B
        } = S;
        u(T => [...T, I(S$, {
          classes: {
            ripple: ue(i.ripple, zt.ripple),
            rippleVisible: ue(i.rippleVisible, zt.rippleVisible),
            ripplePulsate: ue(i.ripplePulsate, zt.ripplePulsate),
            child: ue(i.child, zt.child),
            childLeaving: ue(i.childLeaving, zt.childLeaving),
            childPulsate: ue(i.childPulsate, zt.childPulsate)
          },
          timeout: ed,
          pulsate: x,
          rippleX: C,
          rippleY: R,
          rippleSize: A
        }, c.current)]), c.current += 1, d.current = B
      }, [i]),
      g = k.useCallback((S = {}, x = {}, C = () => {}) => {
        const {
          pulsate: R = !1,
          center: A = o || x.pulsate,
          fakeElement: B = !1
        } = x;
        if ((S == null ? void 0 : S.type) === "mousedown" && p.current) {
          p.current = !1;
          return
        }(S == null ? void 0 : S.type) === "touchstart" && (p.current = !0);
        const T = B ? null : v.current,
          W = T ? T.getBoundingClientRect() : {
            width: 0,
            height: 0,
            left: 0,
            top: 0
          };
        let Z, Y, H;
        if (A || S === void 0 || S.clientX === 0 && S.clientY === 0 || !S.clientX && !S.touches) Z = Math.round(W.width / 2), Y = Math.round(W.height / 2);
        else {
          const {
            clientX: ie,
            clientY: J
          } = S.touches && S.touches.length > 0 ? S.touches[0] : S;
          Z = Math.round(ie - W.left), Y = Math.round(J - W.top)
        }
        if (A) H = Math.sqrt((2 * W.width ** 2 + W.height ** 2) / 3), H % 2 === 0 && (H += 1);
        else {
          const ie = Math.max(Math.abs((T ? T.clientWidth : 0) - Z), Z) * 2 + 2,
            J = Math.max(Math.abs((T ? T.clientHeight : 0) - Y), Y) * 2 + 2;
          H = Math.sqrt(ie ** 2 + J ** 2)
        }
        S != null && S.touches ? h.current === null && (h.current = () => {
          N({
            pulsate: R,
            rippleX: Z,
            rippleY: Y,
            rippleSize: H,
            cb: C
          })
        }, y.current = setTimeout(() => {
          h.current && (h.current(), h.current = null)
        }, h$)) : N({
          pulsate: R,
          rippleX: Z,
          rippleY: Y,
          rippleSize: H,
          cb: C
        })
      }, [o, N]),
      f = k.useCallback(() => {
        g({}, {
          pulsate: !0
        })
      }, [g]),
      m = k.useCallback((S, x) => {
        if (clearTimeout(y.current), (S == null ? void 0 : S.type) === "touchend" && h.current) {
          h.current(), h.current = null, y.current = setTimeout(() => {
            m(S, x)
          });
          return
        }
        h.current = null, u(C => C.length > 0 ? C.slice(1) : C), d.current = x
      }, []);
    return k.useImperativeHandle(n, () => ({
      pulsate: f,
      start: g,
      stop: m
    }), [f, g, m]), I(y$, _({
      className: ue(zt.root, i.root, s),
      ref: v
    }, a, {
      children: I(ZN, {
        component: null,
        exit: !0,
        children: l
      })
    }))
  }),
  _$ = w$;

function x$(e) {
  return je("MuiButtonBase", e)
}
const R$ = He("MuiButtonBase", ["root", "disabled", "focusVisible"]),
  E$ = R$,
  b$ = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"],
  k$ = e => {
    const {
      disabled: t,
      focusVisible: n,
      focusVisibleClassName: r,
      classes: o
    } = e, s = Ye({
      root: ["root", t && "disabled", n && "focusVisible"]
    }, x$, o);
    return n && r && (s.root += ` ${r}`), s
  },
  C$ = me("button", {
    name: "MuiButtonBase",
    slot: "Root",
    overridesResolver: (e, t) => t.root
  })({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    MozAppearance: "none",
    WebkitAppearance: "none",
    textDecoration: "none",
    color: "inherit",
    "&::-moz-focus-inner": {
      borderStyle: "none"
    },
    [`&.${E$.disabled}`]: {
      pointerEvents: "none",
      cursor: "default"
    },
    "@media print": {
      colorAdjust: "exact"
    }
  }),
  T$ = k.forwardRef(function(t, n) {
    const r = Ke({
        props: t,
        name: "MuiButtonBase"
      }),
      {
        action: o,
        centerRipple: i = !1,
        children: s,
        className: a,
        component: l = "button",
        disabled: u = !1,
        disableRipple: c = !1,
        disableTouchRipple: d = !1,
        focusRipple: p = !1,
        LinkComponent: y = "a",
        onBlur: h,
        onClick: v,
        onContextMenu: N,
        onDragLeave: g,
        onFocus: f,
        onFocusVisible: m,
        onKeyDown: S,
        onKeyUp: x,
        onMouseDown: C,
        onMouseLeave: R,
        onMouseUp: A,
        onTouchEnd: B,
        onTouchMove: T,
        onTouchStart: W,
        tabIndex: Z = 0,
        TouchRippleProps: Y,
        touchRippleRef: H,
        type: ie
      } = r,
      J = ce(r, b$),
      ee = k.useRef(null),
      $ = k.useRef(null),
      V = tn($, H),
      {
        isFocusVisibleRef: z,
        onFocus: K,
        onBlur: E,
        ref: D
      } = DC(),
      [L, Q] = k.useState(!1);
    u && L && Q(!1), k.useImperativeHandle(o, () => ({
      focusVisible: () => {
        Q(!0), ee.current.focus()
      }
    }), []);
    const [P, X] = k.useState(!1);
    k.useEffect(() => {
      X(!0)
    }, []);
    const te = P && !c && !u;
    k.useEffect(() => {
      L && p && !c && P && $.current.pulsate()
    }, [c, p, L, P]);

    function j(se, vs, iu = d) {
      return no(Do => (vs && vs(Do), !iu && $.current && $.current[se](Do), !0))
    }
    const ve = j("start", C),
      Ce = j("stop", N),
      Se = j("stop", g),
      we = j("stop", A),
      Ze = j("stop", se => {
        L && se.preventDefault(), R && R(se)
      }),
      mn = j("start", W),
      yt = j("stop", B),
      ft = j("stop", T),
      ps = j("stop", se => {
        E(se), z.current === !1 && Q(!1), h && h(se)
      }, !1),
      tu = no(se => {
        ee.current || (ee.current = se.currentTarget), K(se), z.current === !0 && (Q(!0), m && m(se)), f && f(se)
      }),
      or = () => {
        const se = ee.current;
        return l && l !== "button" && !(se.tagName === "A" && se.href)
      },
      $r = k.useRef(!1),
      hs = no(se => {
        p && !$r.current && L && $.current && se.key === " " && ($r.current = !0, $.current.stop(se, () => {
          $.current.start(se)
        })), se.target === se.currentTarget && or() && se.key === " " && se.preventDefault(), S && S(se), se.target === se.currentTarget && or() && se.key === "Enter" && !u && (se.preventDefault(), v && v(se))
      }),
      nu = no(se => {
        p && se.key === " " && $.current && L && !se.defaultPrevented && ($r.current = !1, $.current.stop(se, () => {
          $.current.pulsate(se)
        })), x && x(se), v && se.target === se.currentTarget && or() && se.key === " " && !se.defaultPrevented && v(se)
      });
    let Ln = l;
    Ln === "button" && (J.href || J.to) && (Ln = y);
    const vn = {};
    Ln === "button" ? (vn.type = ie === void 0 ? "button" : ie, vn.disabled = u) : (!J.href && !J.to && (vn.role = "button"), u && (vn["aria-disabled"] = u));
    const ru = tn(n, D, ee),
      ms = _({}, r, {
        centerRipple: i,
        component: l,
        disabled: u,
        disableRipple: c,
        disableTouchRipple: d,
        focusRipple: p,
        tabIndex: Z,
        focusVisible: L
      }),
      ou = k$(ms);
    return De(C$, _({
      as: Ln,
      className: ue(ou.root, a),
      ownerState: ms,
      onBlur: ps,
      onClick: v,
      onContextMenu: Ce,
      onFocus: tu,
      onKeyDown: hs,
      onKeyUp: nu,
      onMouseDown: ve,
      onMouseLeave: Ze,
      onMouseUp: we,
      onDragLeave: Se,
      onTouchEnd: yt,
      onTouchMove: ft,
      onTouchStart: mn,
      ref: ru,
      tabIndex: u ? -1 : Z,
      type: ie
    }, vn, J, {
      children: [s, te ? I(_$, _({
        ref: V,
        center: i
      }, Y)) : null]
    }))
  }),
  Of = T$;

function N$(e) {
  return je("MuiTypography", e)
}
He("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const $$ = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"],
  P$ = e => {
    const {
      align: t,
      gutterBottom: n,
      noWrap: r,
      paragraph: o,
      variant: i,
      classes: s
    } = e, a = {
      root: ["root", i, e.align !== "inherit" && `align${fe(t)}`, n && "gutterBottom", r && "noWrap", o && "paragraph"]
    };
    return Ye(a, N$, s)
  },
  A$ = me("span", {
    name: "MuiTypography",
    slot: "Root",
    overridesResolver: (e, t) => {
      const {
        ownerState: n
      } = e;
      return [t.root, n.variant && t[n.variant], n.align !== "inherit" && t[`align${fe(n.align)}`], n.noWrap && t.noWrap, n.gutterBottom && t.gutterBottom, n.paragraph && t.paragraph]
    }
  })(({
    theme: e,
    ownerState: t
  }) => _({
    margin: 0
  }, t.variant === "inherit" && {
    font: "inherit"
  }, t.variant !== "inherit" && e.typography[t.variant], t.align !== "inherit" && {
    textAlign: t.align
  }, t.noWrap && {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, t.gutterBottom && {
    marginBottom: "0.35em"
  }, t.paragraph && {
    marginBottom: 16
  })),
  Qh = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subtitle1: "h6",
    subtitle2: "h6",
    body1: "p",
    body2: "p",
    inherit: "p"
  },
  L$ = {
    primary: "primary.main",
    textPrimary: "text.primary",
    secondary: "secondary.main",
    textSecondary: "text.secondary",
    error: "error.main"
  },
  I$ = e => L$[e] || e,
  M$ = k.forwardRef(function(t, n) {
    const r = Ke({
        props: t,
        name: "MuiTypography"
      }),
      o = I$(r.color),
      i = p0(_({}, r, {
        color: o
      })),
      {
        align: s = "inherit",
        className: a,
        component: l,
        gutterBottom: u = !1,
        noWrap: c = !1,
        paragraph: d = !1,
        variant: p = "body1",
        variantMapping: y = Qh
      } = i,
      h = ce(i, $$),
      v = _({}, i, {
        align: s,
        color: o,
        className: a,
        component: l,
        gutterBottom: u,
        noWrap: c,
        paragraph: d,
        variant: p,
        variantMapping: y
      }),
      N = l || (d ? "p" : y[p] || Qh[p]) || "span",
      g = P$(v);
    return I(A$, _({
      as: N,
      ref: n,
      ownerState: v,
      className: ue(g.root, a)
    }, h))
  }),
  xn = M$;

function O$(e) {
  return je("MuiAppBar", e)
}
He("MuiAppBar", ["root", "positionFixed", "positionAbsolute", "positionSticky", "positionStatic", "positionRelative", "colorDefault", "colorPrimary", "colorSecondary", "colorInherit", "colorTransparent", "colorError", "colorInfo", "colorSuccess", "colorWarning"]);
const D$ = ["className", "color", "enableColorOnDark", "position"],
  z$ = e => {
    const {
      color: t,
      position: n,
      classes: r
    } = e, o = {
      root: ["root", `color${fe(t)}`, `position${fe(n)}`]
    };
    return Ye(o, O$, r)
  },
  Us = (e, t) => e ? `${e==null?void 0:e.replace(")","")}, ${t})` : t,
  B$ = me(k0, {
    name: "MuiAppBar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const {
        ownerState: n
      } = e;
      return [t.root, t[`position${fe(n.position)}`], t[`color${fe(n.color)}`]]
    }
  })(({
    theme: e,
    ownerState: t
  }) => {
    const n = e.palette.mode === "light" ? e.palette.grey[100] : e.palette.grey[900];
    return _({
      display: "flex",
      flexDirection: "column",
      width: "100%",
      boxSizing: "border-box",
      flexShrink: 0
    }, t.position === "fixed" && {
      position: "fixed",
      zIndex: (e.vars || e).zIndex.appBar,
      top: 0,
      left: "auto",
      right: 0,
      "@media print": {
        position: "absolute"
      }
    }, t.position === "absolute" && {
      position: "absolute",
      zIndex: (e.vars || e).zIndex.appBar,
      top: 0,
      left: "auto",
      right: 0
    }, t.position === "sticky" && {
      position: "sticky",
      zIndex: (e.vars || e).zIndex.appBar,
      top: 0,
      left: "auto",
      right: 0
    }, t.position === "static" && {
      position: "static"
    }, t.position === "relative" && {
      position: "relative"
    }, !e.vars && _({}, t.color === "default" && {
      backgroundColor: n,
      color: e.palette.getContrastText(n)
    }, t.color && t.color !== "default" && t.color !== "inherit" && t.color !== "transparent" && {
      backgroundColor: e.palette[t.color].main,
      color: e.palette[t.color].contrastText
    }, t.color === "inherit" && {
      color: "inherit"
    }, e.palette.mode === "dark" && !t.enableColorOnDark && {
      backgroundColor: null,
      color: null
    }, t.color === "transparent" && _({
      backgroundColor: "transparent",
      color: "inherit"
    }, e.palette.mode === "dark" && {
      backgroundImage: "none"
    })), e.vars && _({}, t.color === "default" && {
      "--AppBar-background": t.enableColorOnDark ? e.vars.palette.AppBar.defaultBg : Us(e.vars.palette.AppBar.darkBg, e.vars.palette.AppBar.defaultBg),
      "--AppBar-color": t.enableColorOnDark ? e.vars.palette.text.primary : Us(e.vars.palette.AppBar.darkColor, e.vars.palette.text.primary)
    }, t.color && !t.color.match(/^(default|inherit|transparent)$/) && {
      "--AppBar-background": t.enableColorOnDark ? e.vars.palette[t.color].main : Us(e.vars.palette.AppBar.darkBg, e.vars.palette[t.color].main),
      "--AppBar-color": t.enableColorOnDark ? e.vars.palette[t.color].contrastText : Us(e.vars.palette.AppBar.darkColor, e.vars.palette[t.color].contrastText)
    }, {
      backgroundColor: "var(--AppBar-background)",
      color: t.color === "inherit" ? "inherit" : "var(--AppBar-color)"
    }, t.color === "transparent" && {
      backgroundImage: "none",
      backgroundColor: "transparent",
      color: "inherit"
    }))
  }),
  V$ = k.forwardRef(function(t, n) {
    const r = Ke({
        props: t,
        name: "MuiAppBar"
      }),
      {
        className: o,
        color: i = "primary",
        enableColorOnDark: s = !1,
        position: a = "fixed"
      } = r,
      l = ce(r, D$),
      u = _({}, r, {
        color: i,
        position: a,
        enableColorOnDark: s
      }),
      c = z$(u);
    return I(B$, _({
      square: !0,
      component: "header",
      ownerState: u,
      elevation: 4,
      className: ue(c.root, o, a === "fixed" && "mui-fixed"),
      ref: n
    }, l))
  }),
  F$ = V$;

function td(e) {
  return typeof e == "string"
}

function U$(e, t, n) {
  return e === void 0 || td(e) ? t : _({}, t, {
    ownerState: _({}, t.ownerState, n)
  })
}

function C0(e, t = []) {
  if (e === void 0) return {};
  const n = {};
  return Object.keys(e).filter(r => r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)).forEach(r => {
    n[r] = e[r]
  }), n
}

function W$(e, t, n) {
  return typeof e == "function" ? e(t, n) : e
}

function Xh(e) {
  if (e === void 0) return {};
  const t = {};
  return Object.keys(e).filter(n => !(n.match(/^on[A-Z]/) && typeof e[n] == "function")).forEach(n => {
    t[n] = e[n]
  }), t
}

function j$(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i
  } = e;
  if (!t) {
    const y = ue(n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className),
      h = _({}, n == null ? void 0 : n.style, o == null ? void 0 : o.style, r == null ? void 0 : r.style),
      v = _({}, n, o, r);
    return y.length > 0 && (v.className = y), Object.keys(h).length > 0 && (v.style = h), {
      props: v,
      internalRef: void 0
    }
  }
  const s = C0(_({}, o, r)),
    a = Xh(r),
    l = Xh(o),
    u = t(s),
    c = ue(u == null ? void 0 : u.className, n == null ? void 0 : n.className, i, o == null ? void 0 : o.className, r == null ? void 0 : r.className),
    d = _({}, u == null ? void 0 : u.style, n == null ? void 0 : n.style, o == null ? void 0 : o.style, r == null ? void 0 : r.style),
    p = _({}, u, n, l, a);
  return c.length > 0 && (p.className = c), Object.keys(d).length > 0 && (p.style = d), {
    props: p,
    internalRef: u.ref
  }
}
const H$ = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];

function Zh(e) {
  var t;
  const {
    elementType: n,
    externalSlotProps: r,
    ownerState: o,
    skipResolvingSlotProps: i = !1
  } = e, s = ce(e, H$), a = i ? {} : W$(r, o), {
    props: l,
    internalRef: u
  } = j$(_({}, s, {
    externalSlotProps: a
  })), c = tn(u, a == null ? void 0 : a.ref, (t = e.additionalProps) == null ? void 0 : t.ref);
  return U$(n, _({}, l, {
    ref: c
  }), o)
}
const K$ = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");

function G$(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t
}

function q$(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name) return !1;
  const t = r => e.ownerDocument.querySelector(`input[type="radio"]${r}`);
  let n = t(`[name="${e.name}"]:checked`);
  return n || (n = t(`[name="${e.name}"]`)), n !== e
}

function Y$(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || q$(e))
}

function Q$(e) {
  const t = [],
    n = [];
  return Array.from(e.querySelectorAll(K$)).forEach((r, o) => {
    const i = G$(r);
    i === -1 || !Y$(r) || (i === 0 ? t.push(r) : n.push({
      documentOrder: o,
      tabIndex: i,
      node: r
    }))
  }), n.sort((r, o) => r.tabIndex === o.tabIndex ? r.documentOrder - o.documentOrder : r.tabIndex - o.tabIndex).map(r => r.node).concat(t)
}

function X$() {
  return !0
}

function Z$(e) {
  const {
    children: t,
    disableAutoFocus: n = !1,
    disableEnforceFocus: r = !1,
    disableRestoreFocus: o = !1,
    getTabbable: i = Q$,
    isEnabled: s = X$,
    open: a
  } = e, l = k.useRef(!1), u = k.useRef(null), c = k.useRef(null), d = k.useRef(null), p = k.useRef(null), y = k.useRef(!1), h = k.useRef(null), v = tn(t.ref, h), N = k.useRef(null);
  k.useEffect(() => {
    !a || !h.current || (y.current = !n)
  }, [n, a]), k.useEffect(() => {
    if (!a || !h.current) return;
    const m = Qn(h.current);
    return h.current.contains(m.activeElement) || (h.current.hasAttribute("tabIndex") || h.current.setAttribute("tabIndex", "-1"), y.current && h.current.focus()), () => {
      o || (d.current && d.current.focus && (l.current = !0, d.current.focus()), d.current = null)
    }
  }, [a]), k.useEffect(() => {
    if (!a || !h.current) return;
    const m = Qn(h.current),
      S = R => {
        N.current = R, !(r || !s() || R.key !== "Tab") && m.activeElement === h.current && R.shiftKey && (l.current = !0, c.current && c.current.focus())
      },
      x = () => {
        const R = h.current;
        if (R === null) return;
        if (!m.hasFocus() || !s() || l.current) {
          l.current = !1;
          return
        }
        if (R.contains(m.activeElement) || r && m.activeElement !== u.current && m.activeElement !== c.current) return;
        if (m.activeElement !== p.current) p.current = null;
        else if (p.current !== null) return;
        if (!y.current) return;
        let A = [];
        if ((m.activeElement === u.current || m.activeElement === c.current) && (A = i(h.current)), A.length > 0) {
          var B, T;
          const W = !!((B = N.current) != null && B.shiftKey && ((T = N.current) == null ? void 0 : T.key) === "Tab"),
            Z = A[0],
            Y = A[A.length - 1];
          typeof Z != "string" && typeof Y != "string" && (W ? Y.focus() : Z.focus())
        } else R.focus()
      };
    m.addEventListener("focusin", x), m.addEventListener("keydown", S, !0);
    const C = setInterval(() => {
      m.activeElement && m.activeElement.tagName === "BODY" && x()
    }, 50);
    return () => {
      clearInterval(C), m.removeEventListener("focusin", x), m.removeEventListener("keydown", S, !0)
    }
  }, [n, r, o, s, a, i]);
  const g = m => {
      d.current === null && (d.current = m.relatedTarget), y.current = !0, p.current = m.target;
      const S = t.props.onFocus;
      S && S(m)
    },
    f = m => {
      d.current === null && (d.current = m.relatedTarget), y.current = !0
    };
  return De(k.Fragment, {
    children: [I("div", {
      tabIndex: a ? 0 : -1,
      onFocus: f,
      ref: u,
      "data-testid": "sentinelStart"
    }), k.cloneElement(t, {
      ref: v,
      onFocus: g
    }), I("div", {
      tabIndex: a ? 0 : -1,
      onFocus: f,
      ref: c,
      "data-testid": "sentinelEnd"
    })]
  })
}

function J$(e) {
  return typeof e == "function" ? e() : e
}
const eP = k.forwardRef(function(t, n) {
  const {
    children: r,
    container: o,
    disablePortal: i = !1
  } = t, [s, a] = k.useState(null), l = tn(k.isValidElement(r) ? r.ref : null, n);
  if (Ui(() => {
      i || a(J$(o) || document.body)
    }, [o, i]), Ui(() => {
      if (s && !i) return Gc(n, s), () => {
        Gc(n, null)
      }
    }, [n, s, i]), i) {
    if (k.isValidElement(r)) {
      const u = {
        ref: l
      };
      return k.cloneElement(r, u)
    }
    return I(k.Fragment, {
      children: r
    })
  }
  return I(k.Fragment, {
    children: s && Zd.createPortal(r, s)
  })
});

function tP(e) {
  const t = Qn(e);
  return t.body === e ? as(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight
}

function xi(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden")
}

function Jh(e) {
  return parseInt(as(e).getComputedStyle(e).paddingRight, 10) || 0
}

function nP(e) {
  const n = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(e.tagName) !== -1,
    r = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return n || r
}

function em(e, t, n, r, o) {
  const i = [t, n, ...r];
  [].forEach.call(e.children, s => {
    const a = i.indexOf(s) === -1,
      l = !nP(s);
    a && l && xi(s, o)
  })
}

function Wu(e, t) {
  let n = -1;
  return e.some((r, o) => t(r) ? (n = o, !0) : !1), n
}

function rP(e, t) {
  const n = [],
    r = e.container;
  if (!t.disableScrollLock) {
    if (tP(r)) {
      const s = zC(Qn(r));
      n.push({
        value: r.style.paddingRight,
        property: "padding-right",
        el: r
      }), r.style.paddingRight = `${Jh(r)+s}px`;
      const a = Qn(r).querySelectorAll(".mui-fixed");
      [].forEach.call(a, l => {
        n.push({
          value: l.style.paddingRight,
          property: "padding-right",
          el: l
        }), l.style.paddingRight = `${Jh(l)+s}px`
      })
    }
    let i;
    if (r.parentNode instanceof DocumentFragment) i = Qn(r).body;
    else {
      const s = r.parentElement,
        a = as(r);
      i = (s == null ? void 0 : s.nodeName) === "HTML" && a.getComputedStyle(s).overflowY === "scroll" ? s : r
    }
    n.push({
      value: i.style.overflow,
      property: "overflow",
      el: i
    }, {
      value: i.style.overflowX,
      property: "overflow-x",
      el: i
    }, {
      value: i.style.overflowY,
      property: "overflow-y",
      el: i
    }), i.style.overflow = "hidden"
  }
  return () => {
    n.forEach(({
      value: i,
      el: s,
      property: a
    }) => {
      i ? s.style.setProperty(a, i) : s.style.removeProperty(a)
    })
  }
}

function oP(e) {
  const t = [];
  return [].forEach.call(e.children, n => {
    n.getAttribute("aria-hidden") === "true" && t.push(n)
  }), t
}
class iP {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = []
  }
  add(t, n) {
    let r = this.modals.indexOf(t);
    if (r !== -1) return r;
    r = this.modals.length, this.modals.push(t), t.modalRef && xi(t.modalRef, !1);
    const o = oP(n);
    em(n, t.mount, t.modalRef, o, !0);
    const i = Wu(this.containers, s => s.container === n);
    return i !== -1 ? (this.containers[i].modals.push(t), r) : (this.containers.push({
      modals: [t],
      container: n,
      restore: null,
      hiddenSiblings: o
    }), r)
  }
  mount(t, n) {
    const r = Wu(this.containers, i => i.modals.indexOf(t) !== -1),
      o = this.containers[r];
    o.restore || (o.restore = rP(o, n))
  }
  remove(t, n = !0) {
    const r = this.modals.indexOf(t);
    if (r === -1) return r;
    const o = Wu(this.containers, s => s.modals.indexOf(t) !== -1),
      i = this.containers[o];
    if (i.modals.splice(i.modals.indexOf(t), 1), this.modals.splice(r, 1), i.modals.length === 0) i.restore && i.restore(), t.modalRef && xi(t.modalRef, n), em(i.container, t.mount, t.modalRef, i.hiddenSiblings, !1), this.containers.splice(o, 1);
    else {
      const s = i.modals[i.modals.length - 1];
      s.modalRef && xi(s.modalRef, !1)
    }
    return r
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t
  }
}

function sP(e) {
  return typeof e == "function" ? e() : e
}

function aP(e) {
  return e ? e.props.hasOwnProperty("in") : !1
}
const lP = new iP;

function uP(e) {
  const {
    container: t,
    disableEscapeKeyDown: n = !1,
    disableScrollLock: r = !1,
    manager: o = lP,
    closeAfterTransition: i = !1,
    onTransitionEnter: s,
    onTransitionExited: a,
    children: l,
    onClose: u,
    open: c,
    rootRef: d
  } = e, p = k.useRef({}), y = k.useRef(null), h = k.useRef(null), v = tn(h, d), [N, g] = k.useState(!c), f = aP(l);
  let m = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (m = !1);
  const S = () => Qn(y.current),
    x = () => (p.current.modalRef = h.current, p.current.mount = y.current, p.current),
    C = () => {
      o.mount(x(), {
        disableScrollLock: r
      }), h.current && (h.current.scrollTop = 0)
    },
    R = no(() => {
      const J = sP(t) || S().body;
      o.add(x(), J), h.current && C()
    }),
    A = k.useCallback(() => o.isTopModal(x()), [o]),
    B = no(J => {
      y.current = J, J && (c && A() ? C() : h.current && xi(h.current, m))
    }),
    T = k.useCallback(() => {
      o.remove(x(), m)
    }, [m, o]);
  k.useEffect(() => () => {
    T()
  }, [T]), k.useEffect(() => {
    c ? R() : (!f || !i) && T()
  }, [c, T, f, i, R]);
  const W = J => ee => {
      var $;
      ($ = J.onKeyDown) == null || $.call(J, ee), !(ee.key !== "Escape" || ee.which === 229 || !A()) && (n || (ee.stopPropagation(), u && u(ee, "escapeKeyDown")))
    },
    Z = J => ee => {
      var $;
      ($ = J.onClick) == null || $.call(J, ee), ee.target === ee.currentTarget && u && u(ee, "backdropClick")
    };
  return {
    getRootProps: (J = {}) => {
      const ee = C0(e);
      delete ee.onTransitionEnter, delete ee.onTransitionExited;
      const $ = _({}, ee, J);
      return _({
        role: "presentation"
      }, $, {
        onKeyDown: W($),
        ref: v
      })
    },
    getBackdropProps: (J = {}) => {
      const ee = J;
      return _({
        "aria-hidden": !0
      }, ee, {
        onClick: Z(ee),
        open: c
      })
    },
    getTransitionProps: () => {
      const J = () => {
          g(!1), s && s()
        },
        ee = () => {
          g(!0), a && a(), i && T()
        };
      return {
        onEnter: Sh(J, l == null ? void 0 : l.props.onEnter),
        onExited: Sh(ee, l == null ? void 0 : l.props.onExited)
      }
    },
    rootRef: v,
    portalRef: B,
    isTopModal: A,
    exited: N,
    hasTransition: f
  }
}
const cP = fs(I("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), "Person");

function dP(e) {
  return je("MuiAvatar", e)
}
He("MuiAvatar", ["root", "colorDefault", "circular", "rounded", "square", "img", "fallback"]);
const fP = ["alt", "children", "className", "component", "imgProps", "sizes", "src", "srcSet", "variant"],
  pP = e => {
    const {
      classes: t,
      variant: n,
      colorDefault: r
    } = e;
    return Ye({
      root: ["root", n, r && "colorDefault"],
      img: ["img"],
      fallback: ["fallback"]
    }, dP, t)
  },
  hP = me("div", {
    name: "MuiAvatar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const {
        ownerState: n
      } = e;
      return [t.root, t[n.variant], n.colorDefault && t.colorDefault]
    }
  })(({
    theme: e,
    ownerState: t
  }) => _({
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    width: 40,
    height: 40,
    fontFamily: e.typography.fontFamily,
    fontSize: e.typography.pxToRem(20),
    lineHeight: 1,
    borderRadius: "50%",
    overflow: "hidden",
    userSelect: "none"
  }, t.variant === "rounded" && {
    borderRadius: (e.vars || e).shape.borderRadius
  }, t.variant === "square" && {
    borderRadius: 0
  }, t.colorDefault && _({
    color: (e.vars || e).palette.background.default
  }, e.vars ? {
    backgroundColor: e.vars.palette.Avatar.defaultBg
  } : {
    backgroundColor: e.palette.mode === "light" ? e.palette.grey[400] : e.palette.grey[600]
  }))),
  mP = me("img", {
    name: "MuiAvatar",
    slot: "Img",
    overridesResolver: (e, t) => t.img
  })({
    width: "100%",
    height: "100%",
    textAlign: "center",
    objectFit: "cover",
    color: "transparent",
    textIndent: 1e4
  }),
  vP = me(cP, {
    name: "MuiAvatar",
    slot: "Fallback",
    overridesResolver: (e, t) => t.fallback
  })({
    width: "75%",
    height: "75%"
  });

function gP({
  crossOrigin: e,
  referrerPolicy: t,
  src: n,
  srcSet: r
}) {
  const [o, i] = k.useState(!1);
  return k.useEffect(() => {
    if (!n && !r) return;
    i(!1);
    let s = !0;
    const a = new Image;
    return a.onload = () => {
      s && i("loaded")
    }, a.onerror = () => {
      s && i("error")
    }, a.crossOrigin = e, a.referrerPolicy = t, a.src = n, r && (a.srcset = r), () => {
      s = !1
    }
  }, [e, t, n, r]), o
}
const yP = k.forwardRef(function(t, n) {
    const r = Ke({
        props: t,
        name: "MuiAvatar"
      }),
      {
        alt: o,
        children: i,
        className: s,
        component: a = "div",
        imgProps: l,
        sizes: u,
        src: c,
        srcSet: d,
        variant: p = "circular"
      } = r,
      y = ce(r, fP);
    let h = null;
    const v = gP(_({}, l, {
        src: c,
        srcSet: d
      })),
      N = c || d,
      g = N && v !== "error",
      f = _({}, r, {
        colorDefault: !g,
        component: a,
        variant: p
      }),
      m = pP(f);
    return g ? h = I(mP, _({
      alt: o,
      srcSet: d,
      src: c,
      sizes: u,
      ownerState: f,
      className: m.img
    }, l)) : i != null ? h = i : N && o ? h = o[0] : h = I(vP, {
      ownerState: f,
      className: m.fallback
    }), I(hP, _({
      as: a,
      ownerState: f,
      className: ue(m.root, s),
      ref: n
    }, y, {
      children: h
    }))
  }),
  SP = yP,
  wP = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"],
  _P = {
    entering: {
      opacity: 1
    },
    entered: {
      opacity: 1
    }
  },
  xP = k.forwardRef(function(t, n) {
    const r = ds(),
      o = {
        enter: r.transitions.duration.enteringScreen,
        exit: r.transitions.duration.leavingScreen
      },
      {
        addEndListener: i,
        appear: s = !0,
        children: a,
        easing: l,
        in: u,
        onEnter: c,
        onEntered: d,
        onEntering: p,
        onExit: y,
        onExited: h,
        onExiting: v,
        style: N,
        timeout: g = o,
        TransitionComponent: f = Lf
      } = t,
      m = ce(t, wP),
      S = k.useRef(null),
      x = tn(S, a.ref, n),
      C = H => ie => {
        if (H) {
          const J = S.current;
          ie === void 0 ? H(J) : H(J, ie)
        }
      },
      R = C(p),
      A = C((H, ie) => {
        E0(H);
        const J = To({
          style: N,
          timeout: g,
          easing: l
        }, {
          mode: "enter"
        });
        H.style.webkitTransition = r.transitions.create("opacity", J), H.style.transition = r.transitions.create("opacity", J), c && c(H, ie)
      }),
      B = C(d),
      T = C(v),
      W = C(H => {
        const ie = To({
          style: N,
          timeout: g,
          easing: l
        }, {
          mode: "exit"
        });
        H.style.webkitTransition = r.transitions.create("opacity", ie), H.style.transition = r.transitions.create("opacity", ie), y && y(H)
      }),
      Z = C(h);
    return I(f, _({
      appear: s,
      in: u,
      nodeRef: S,
      onEnter: A,
      onEntered: B,
      onEntering: R,
      onExit: W,
      onExited: Z,
      onExiting: T,
      addEndListener: H => {
        i && i(S.current, H)
      },
      timeout: g
    }, m, {
      children: (H, ie) => k.cloneElement(a, _({
        style: _({
          opacity: 0,
          visibility: H === "exited" && !u ? "hidden" : void 0
        }, _P[H], N, a.props.style),
        ref: x
      }, ie))
    }))
  }),
  RP = xP;

function EP(e) {
  return je("MuiBackdrop", e)
}
He("MuiBackdrop", ["root", "invisible"]);
const bP = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"],
  kP = e => {
    const {
      classes: t,
      invisible: n
    } = e;
    return Ye({
      root: ["root", n && "invisible"]
    }, EP, t)
  },
  CP = me("div", {
    name: "MuiBackdrop",
    slot: "Root",
    overridesResolver: (e, t) => {
      const {
        ownerState: n
      } = e;
      return [t.root, n.invisible && t.invisible]
    }
  })(({
    ownerState: e
  }) => _({
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    WebkitTapHighlightColor: "transparent"
  }, e.invisible && {
    backgroundColor: "transparent"
  })),
  TP = k.forwardRef(function(t, n) {
    var r, o, i;
    const s = Ke({
        props: t,
        name: "MuiBackdrop"
      }),
      {
        children: a,
        className: l,
        component: u = "div",
        components: c = {},
        componentsProps: d = {},
        invisible: p = !1,
        open: y,
        slotProps: h = {},
        slots: v = {},
        TransitionComponent: N = RP,
        transitionDuration: g
      } = s,
      f = ce(s, bP),
      m = _({}, s, {
        component: u,
        invisible: p
      }),
      S = kP(m),
      x = (r = h.root) != null ? r : d.root;
    return I(N, _({
      in: y,
      timeout: g
    }, f, {
      children: I(CP, _({
        "aria-hidden": !0
      }, x, {
        as: (o = (i = v.root) != null ? i : c.Root) != null ? o : u,
        className: ue(S.root, l, x == null ? void 0 : x.className),
        ownerState: _({}, m, x == null ? void 0 : x.ownerState),
        classes: S,
        ref: n,
        children: a
      }))
    }))
  }),
  NP = TP,
  $P = Pf(),
  PP = m0({
    themeId: ko,
    defaultTheme: $P,
    defaultClassName: "MuiBox-root",
    generateClassName: Hy.generate
  }),
  Vr = PP;

function AP(e) {
  return je("MuiButton", e)
}
const LP = He("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]),
  Ws = LP,
  IP = k.createContext({}),
  MP = IP,
  OP = k.createContext(void 0),
  DP = OP,
  zP = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"],
  BP = e => {
    const {
      color: t,
      disableElevation: n,
      fullWidth: r,
      size: o,
      variant: i,
      classes: s
    } = e, a = {
      root: ["root", i, `${i}${fe(t)}`, `size${fe(o)}`, `${i}Size${fe(o)}`, t === "inherit" && "colorInherit", n && "disableElevation", r && "fullWidth"],
      label: ["label"],
      startIcon: ["startIcon", `iconSize${fe(o)}`],
      endIcon: ["endIcon", `iconSize${fe(o)}`]
    }, l = Ye(a, AP, s);
    return _({}, s, l)
  },
  T0 = e => _({}, e.size === "small" && {
    "& > *:nth-of-type(1)": {
      fontSize: 18
    }
  }, e.size === "medium" && {
    "& > *:nth-of-type(1)": {
      fontSize: 20
    }
  }, e.size === "large" && {
    "& > *:nth-of-type(1)": {
      fontSize: 22
    }
  }),
  VP = me(Of, {
    shouldForwardProp: e => Jl(e) || e === "classes",
    name: "MuiButton",
    slot: "Root",
    overridesResolver: (e, t) => {
      const {
        ownerState: n
      } = e;
      return [t.root, t[n.variant], t[`${n.variant}${fe(n.color)}`], t[`size${fe(n.size)}`], t[`${n.variant}Size${fe(n.size)}`], n.color === "inherit" && t.colorInherit, n.disableElevation && t.disableElevation, n.fullWidth && t.fullWidth]
    }
  })(({
    theme: e,
    ownerState: t
  }) => {
    var n, r;
    const o = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800],
      i = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
    return _({}, e.typography.button, {
      minWidth: 64,
      padding: "6px 16px",
      borderRadius: (e.vars || e).shape.borderRadius,
      transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
        duration: e.transitions.duration.short
      }),
      "&:hover": _({
        textDecoration: "none",
        backgroundColor: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : ht(e.palette.text.primary, e.palette.action.hoverOpacity),
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }, t.variant === "text" && t.color !== "inherit" && {
        backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : ht(e.palette[t.color].main, e.palette.action.hoverOpacity),
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }, t.variant === "outlined" && t.color !== "inherit" && {
        border: `1px solid ${(e.vars||e).palette[t.color].main}`,
        backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : ht(e.palette[t.color].main, e.palette.action.hoverOpacity),
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }, t.variant === "contained" && {
        backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedHoverBg : i,
        boxShadow: (e.vars || e).shadows[4],
        "@media (hover: none)": {
          boxShadow: (e.vars || e).shadows[2],
          backgroundColor: (e.vars || e).palette.grey[300]
        }
      }, t.variant === "contained" && t.color !== "inherit" && {
        backgroundColor: (e.vars || e).palette[t.color].dark,
        "@media (hover: none)": {
          backgroundColor: (e.vars || e).palette[t.color].main
        }
      }),
      "&:active": _({}, t.variant === "contained" && {
        boxShadow: (e.vars || e).shadows[8]
      }),
      [`&.${Ws.focusVisible}`]: _({}, t.variant === "contained" && {
        boxShadow: (e.vars || e).shadows[6]
      }),
      [`&.${Ws.disabled}`]: _({
        color: (e.vars || e).palette.action.disabled
      }, t.variant === "outlined" && {
        border: `1px solid ${(e.vars||e).palette.action.disabledBackground}`
      }, t.variant === "contained" && {
        color: (e.vars || e).palette.action.disabled,
        boxShadow: (e.vars || e).shadows[0],
        backgroundColor: (e.vars || e).palette.action.disabledBackground
      })
    }, t.variant === "text" && {
      padding: "6px 8px"
    }, t.variant === "text" && t.color !== "inherit" && {
      color: (e.vars || e).palette[t.color].main
    }, t.variant === "outlined" && {
      padding: "5px 15px",
      border: "1px solid currentColor"
    }, t.variant === "outlined" && t.color !== "inherit" && {
      color: (e.vars || e).palette[t.color].main,
      border: e.vars ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)` : `1px solid ${ht(e.palette[t.color].main,.5)}`
    }, t.variant === "contained" && {
      color: e.vars ? e.vars.palette.text.primary : (n = (r = e.palette).getContrastText) == null ? void 0 : n.call(r, e.palette.grey[300]),
      backgroundColor: e.vars ? e.vars.palette.Button.inheritContainedBg : o,
      boxShadow: (e.vars || e).shadows[2]
    }, t.variant === "contained" && t.color !== "inherit" && {
      color: (e.vars || e).palette[t.color].contrastText,
      backgroundColor: (e.vars || e).palette[t.color].main
    }, t.color === "inherit" && {
      color: "inherit",
      borderColor: "currentColor"
    }, t.size === "small" && t.variant === "text" && {
      padding: "4px 5px",
      fontSize: e.typography.pxToRem(13)
    }, t.size === "large" && t.variant === "text" && {
      padding: "8px 11px",
      fontSize: e.typography.pxToRem(15)
    }, t.size === "small" && t.variant === "outlined" && {
      padding: "3px 9px",
      fontSize: e.typography.pxToRem(13)
    }, t.size === "large" && t.variant === "outlined" && {
      padding: "7px 21px",
      fontSize: e.typography.pxToRem(15)
    }, t.size === "small" && t.variant === "contained" && {
      padding: "4px 10px",
      fontSize: e.typography.pxToRem(13)
    }, t.size === "large" && t.variant === "contained" && {
      padding: "8px 22px",
      fontSize: e.typography.pxToRem(15)
    }, t.fullWidth && {
      width: "100%"
    })
  }, ({
    ownerState: e
  }) => e.disableElevation && {
    boxShadow: "none",
    "&:hover": {
      boxShadow: "none"
    },
    [`&.${Ws.focusVisible}`]: {
      boxShadow: "none"
    },
    "&:active": {
      boxShadow: "none"
    },
    [`&.${Ws.disabled}`]: {
      boxShadow: "none"
    }
  }),
  FP = me("span", {
    name: "MuiButton",
    slot: "StartIcon",
    overridesResolver: (e, t) => {
      const {
        ownerState: n
      } = e;
      return [t.startIcon, t[`iconSize${fe(n.size)}`]]
    }
  })(({
    ownerState: e
  }) => _({
    display: "inherit",
    marginRight: 8,
    marginLeft: -4
  }, e.size === "small" && {
    marginLeft: -2
  }, T0(e))),
  UP = me("span", {
    name: "MuiButton",
    slot: "EndIcon",
    overridesResolver: (e, t) => {
      const {
        ownerState: n
      } = e;
      return [t.endIcon, t[`iconSize${fe(n.size)}`]]
    }
  })(({
    ownerState: e
  }) => _({
    display: "inherit",
    marginRight: -4,
    marginLeft: 8
  }, e.size === "small" && {
    marginRight: -2
  }, T0(e))),
  WP = k.forwardRef(function(t, n) {
    const r = k.useContext(MP),
      o = k.useContext(DP),
      i = vf(r, t),
      s = Ke({
        props: i,
        name: "MuiButton"
      }),
      {
        children: a,
        color: l = "primary",
        component: u = "button",
        className: c,
        disabled: d = !1,
        disableElevation: p = !1,
        disableFocusRipple: y = !1,
        endIcon: h,
        focusVisibleClassName: v,
        fullWidth: N = !1,
        size: g = "medium",
        startIcon: f,
        type: m,
        variant: S = "text"
      } = s,
      x = ce(s, zP),
      C = _({}, s, {
        color: l,
        component: u,
        disabled: d,
        disableElevation: p,
        disableFocusRipple: y,
        fullWidth: N,
        size: g,
        type: m,
        variant: S
      }),
      R = BP(C),
      A = f && I(FP, {
        className: R.startIcon,
        ownerState: C,
        children: f
      }),
      B = h && I(UP, {
        className: R.endIcon,
        ownerState: C,
        children: h
      }),
      T = o || "";
    return De(VP, _({
      ownerState: C,
      className: ue(r.className, R.root, c, T),
      component: u,
      disabled: d,
      focusRipple: !y,
      focusVisibleClassName: ue(R.focusVisible, v),
      ref: n,
      type: m
    }, x, {
      classes: R,
      children: [A, a, B]
    }))
  }),
  Wa = WP;

function jP(e) {
  return je("MuiModal", e)
}
He("MuiModal", ["root", "hidden", "backdrop"]);
const HP = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"],
  KP = e => {
    const {
      open: t,
      exited: n,
      classes: r
    } = e;
    return Ye({
      root: ["root", !t && n && "hidden"],
      backdrop: ["backdrop"]
    }, jP, r)
  },
  GP = me("div", {
    name: "MuiModal",
    slot: "Root",
    overridesResolver: (e, t) => {
      const {
        ownerState: n
      } = e;
      return [t.root, !n.open && n.exited && t.hidden]
    }
  })(({
    theme: e,
    ownerState: t
  }) => _({
    position: "fixed",
    zIndex: (e.vars || e).zIndex.modal,
    right: 0,
    bottom: 0,
    top: 0,
    left: 0
  }, !t.open && t.exited && {
    visibility: "hidden"
  })),
  qP = me(NP, {
    name: "MuiModal",
    slot: "Backdrop",
    overridesResolver: (e, t) => t.backdrop
  })({
    zIndex: -1
  }),
  YP = k.forwardRef(function(t, n) {
    var r, o, i, s, a, l;
    const u = Ke({
        name: "MuiModal",
        props: t
      }),
      {
        BackdropComponent: c = qP,
        BackdropProps: d,
        className: p,
        closeAfterTransition: y = !1,
        children: h,
        container: v,
        component: N,
        components: g = {},
        componentsProps: f = {},
        disableAutoFocus: m = !1,
        disableEnforceFocus: S = !1,
        disableEscapeKeyDown: x = !1,
        disablePortal: C = !1,
        disableRestoreFocus: R = !1,
        disableScrollLock: A = !1,
        hideBackdrop: B = !1,
        keepMounted: T = !1,
        onBackdropClick: W,
        open: Z,
        slotProps: Y,
        slots: H
      } = u,
      ie = ce(u, HP),
      J = _({}, u, {
        closeAfterTransition: y,
        disableAutoFocus: m,
        disableEnforceFocus: S,
        disableEscapeKeyDown: x,
        disablePortal: C,
        disableRestoreFocus: R,
        disableScrollLock: A,
        hideBackdrop: B,
        keepMounted: T
      }),
      {
        getRootProps: ee,
        getBackdropProps: $,
        getTransitionProps: V,
        portalRef: z,
        isTopModal: K,
        exited: E,
        hasTransition: D
      } = uP(_({}, J, {
        rootRef: n
      })),
      L = _({}, J, {
        exited: E
      }),
      Q = KP(L),
      P = {};
    if (h.props.tabIndex === void 0 && (P.tabIndex = "-1"), D) {
      const {
        onEnter: we,
        onExited: Ze
      } = V();
      P.onEnter = we, P.onExited = Ze
    }
    const X = (r = (o = H == null ? void 0 : H.root) != null ? o : g.Root) != null ? r : GP,
      te = (i = (s = H == null ? void 0 : H.backdrop) != null ? s : g.Backdrop) != null ? i : c,
      j = (a = Y == null ? void 0 : Y.root) != null ? a : f.root,
      ve = (l = Y == null ? void 0 : Y.backdrop) != null ? l : f.backdrop,
      Ce = Zh({
        elementType: X,
        externalSlotProps: j,
        externalForwardedProps: ie,
        getSlotProps: ee,
        additionalProps: {
          ref: n,
          as: N
        },
        ownerState: L,
        className: ue(p, j == null ? void 0 : j.className, Q == null ? void 0 : Q.root, !L.open && L.exited && (Q == null ? void 0 : Q.hidden))
      }),
      Se = Zh({
        elementType: te,
        externalSlotProps: ve,
        additionalProps: d,
        getSlotProps: we => $(_({}, we, {
          onClick: Ze => {
            W && W(Ze), we != null && we.onClick && we.onClick(Ze)
          }
        })),
        className: ue(ve == null ? void 0 : ve.className, d == null ? void 0 : d.className, Q == null ? void 0 : Q.backdrop),
        ownerState: L
      });
    return !T && !Z && (!D || E) ? null : I(eP, {
      ref: z,
      container: v,
      disablePortal: C,
      children: De(X, _({}, Ce, {
        children: [!B && c ? I(te, _({}, Se)) : null, I(Z$, {
          disableEnforceFocus: S,
          disableAutoFocus: m,
          disableRestoreFocus: R,
          isEnabled: K,
          open: Z,
          children: k.cloneElement(h, P)
        })]
      }))
    })
  }),
  QP = YP;

function XP(e) {
  return je("MuiDivider", e)
}
He("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]);
const ZP = ["absolute", "children", "className", "component", "flexItem", "light", "orientation", "role", "textAlign", "variant"],
  JP = e => {
    const {
      absolute: t,
      children: n,
      classes: r,
      flexItem: o,
      light: i,
      orientation: s,
      textAlign: a,
      variant: l
    } = e;
    return Ye({
      root: ["root", t && "absolute", l, i && "light", s === "vertical" && "vertical", o && "flexItem", n && "withChildren", n && s === "vertical" && "withChildrenVertical", a === "right" && s !== "vertical" && "textAlignRight", a === "left" && s !== "vertical" && "textAlignLeft"],
      wrapper: ["wrapper", s === "vertical" && "wrapperVertical"]
    }, XP, r)
  },
  eA = me("div", {
    name: "MuiDivider",
    slot: "Root",
    overridesResolver: (e, t) => {
      const {
        ownerState: n
      } = e;
      return [t.root, n.absolute && t.absolute, t[n.variant], n.light && t.light, n.orientation === "vertical" && t.vertical, n.flexItem && t.flexItem, n.children && t.withChildren, n.children && n.orientation === "vertical" && t.withChildrenVertical, n.textAlign === "right" && n.orientation !== "vertical" && t.textAlignRight, n.textAlign === "left" && n.orientation !== "vertical" && t.textAlignLeft]
    }
  })(({
    theme: e,
    ownerState: t
  }) => _({
    margin: 0,
    flexShrink: 0,
    borderWidth: 0,
    borderStyle: "solid",
    borderColor: (e.vars || e).palette.divider,
    borderBottomWidth: "thin"
  }, t.absolute && {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%"
  }, t.light && {
    borderColor: e.vars ? `rgba(${e.vars.palette.dividerChannel} / 0.08)` : ht(e.palette.divider, .08)
  }, t.variant === "inset" && {
    marginLeft: 72
  }, t.variant === "middle" && t.orientation === "horizontal" && {
    marginLeft: e.spacing(2),
    marginRight: e.spacing(2)
  }, t.variant === "middle" && t.orientation === "vertical" && {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  }, t.orientation === "vertical" && {
    height: "100%",
    borderBottomWidth: 0,
    borderRightWidth: "thin"
  }, t.flexItem && {
    alignSelf: "stretch",
    height: "auto"
  }), ({
    ownerState: e
  }) => _({}, e.children && {
    display: "flex",
    whiteSpace: "nowrap",
    textAlign: "center",
    border: 0,
    "&::before, &::after": {
      content: '""',
      alignSelf: "center"
    }
  }), ({
    theme: e,
    ownerState: t
  }) => _({}, t.children && t.orientation !== "vertical" && {
    "&::before, &::after": {
      width: "100%",
      borderTop: `thin solid ${(e.vars||e).palette.divider}`
    }
  }), ({
    theme: e,
    ownerState: t
  }) => _({}, t.children && t.orientation === "vertical" && {
    flexDirection: "column",
    "&::before, &::after": {
      height: "100%",
      borderLeft: `thin solid ${(e.vars||e).palette.divider}`
    }
  }), ({
    ownerState: e
  }) => _({}, e.textAlign === "right" && e.orientation !== "vertical" && {
    "&::before": {
      width: "90%"
    },
    "&::after": {
      width: "10%"
    }
  }, e.textAlign === "left" && e.orientation !== "vertical" && {
    "&::before": {
      width: "10%"
    },
    "&::after": {
      width: "90%"
    }
  })),
  tA = me("span", {
    name: "MuiDivider",
    slot: "Wrapper",
    overridesResolver: (e, t) => {
      const {
        ownerState: n
      } = e;
      return [t.wrapper, n.orientation === "vertical" && t.wrapperVertical]
    }
  })(({
    theme: e,
    ownerState: t
  }) => _({
    display: "inline-block",
    paddingLeft: `calc(${e.spacing(1)} * 1.2)`,
    paddingRight: `calc(${e.spacing(1)} * 1.2)`
  }, t.orientation === "vertical" && {
    paddingTop: `calc(${e.spacing(1)} * 1.2)`,
    paddingBottom: `calc(${e.spacing(1)} * 1.2)`
  })),
  N0 = k.forwardRef(function(t, n) {
    const r = Ke({
        props: t,
        name: "MuiDivider"
      }),
      {
        absolute: o = !1,
        children: i,
        className: s,
        component: a = i ? "div" : "hr",
        flexItem: l = !1,
        light: u = !1,
        orientation: c = "horizontal",
        role: d = a !== "hr" ? "separator" : void 0,
        textAlign: p = "center",
        variant: y = "fullWidth"
      } = r,
      h = ce(r, ZP),
      v = _({}, r, {
        absolute: o,
        component: a,
        flexItem: l,
        light: u,
        orientation: c,
        role: d,
        textAlign: p,
        variant: y
      }),
      N = JP(v);
    return I(eA, _({
      as: a,
      className: ue(N.root, s),
      role: d,
      ref: n,
      ownerState: v
    }, h, {
      children: i ? I(tA, {
        className: N.wrapper,
        ownerState: v,
        children: i
      }) : null
    }))
  });
N0.muiSkipListHighlight = !0;
const nA = N0,
  rA = ["addEndListener", "appear", "children", "container", "direction", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];

function oA(e, t, n) {
  const r = t.getBoundingClientRect(),
    o = n && n.getBoundingClientRect(),
    i = as(t);
  let s;
  if (t.fakeTransform) s = t.fakeTransform;
  else {
    const u = i.getComputedStyle(t);
    s = u.getPropertyValue("-webkit-transform") || u.getPropertyValue("transform")
  }
  let a = 0,
    l = 0;
  if (s && s !== "none" && typeof s == "string") {
    const u = s.split("(")[1].split(")")[0].split(",");
    a = parseInt(u[4], 10), l = parseInt(u[5], 10)
  }
  return e === "left" ? o ? `translateX(${o.right+a-r.left}px)` : `translateX(${i.innerWidth+a-r.left}px)` : e === "right" ? o ? `translateX(-${r.right-o.left-a}px)` : `translateX(-${r.left+r.width-a}px)` : e === "up" ? o ? `translateY(${o.bottom+l-r.top}px)` : `translateY(${i.innerHeight+l-r.top}px)` : o ? `translateY(-${r.top-o.top+r.height-l}px)` : `translateY(-${r.top+r.height-l}px)`
}

function iA(e) {
  return typeof e == "function" ? e() : e
}

function js(e, t, n) {
  const r = iA(n),
    o = oA(e, t, r);
  o && (t.style.webkitTransform = o, t.style.transform = o)
}
const sA = k.forwardRef(function(t, n) {
    const r = ds(),
      o = {
        enter: r.transitions.easing.easeOut,
        exit: r.transitions.easing.sharp
      },
      i = {
        enter: r.transitions.duration.enteringScreen,
        exit: r.transitions.duration.leavingScreen
      },
      {
        addEndListener: s,
        appear: a = !0,
        children: l,
        container: u,
        direction: c = "down",
        easing: d = o,
        in: p,
        onEnter: y,
        onEntered: h,
        onEntering: v,
        onExit: N,
        onExited: g,
        onExiting: f,
        style: m,
        timeout: S = i,
        TransitionComponent: x = Lf
      } = t,
      C = ce(t, rA),
      R = k.useRef(null),
      A = tn(l.ref, R, n),
      B = $ => V => {
        $ && (V === void 0 ? $(R.current) : $(R.current, V))
      },
      T = B(($, V) => {
        js(c, $, u), E0($), y && y($, V)
      }),
      W = B(($, V) => {
        const z = To({
          timeout: S,
          style: m,
          easing: d
        }, {
          mode: "enter"
        });
        $.style.webkitTransition = r.transitions.create("-webkit-transform", _({}, z)), $.style.transition = r.transitions.create("transform", _({}, z)), $.style.webkitTransform = "none", $.style.transform = "none", v && v($, V)
      }),
      Z = B(h),
      Y = B(f),
      H = B($ => {
        const V = To({
          timeout: S,
          style: m,
          easing: d
        }, {
          mode: "exit"
        });
        $.style.webkitTransition = r.transitions.create("-webkit-transform", V), $.style.transition = r.transitions.create("transform", V), js(c, $, u), N && N($)
      }),
      ie = B($ => {
        $.style.webkitTransition = "", $.style.transition = "", g && g($)
      }),
      J = $ => {
        s && s(R.current, $)
      },
      ee = k.useCallback(() => {
        R.current && js(c, R.current, u)
      }, [c, u]);
    return k.useEffect(() => {
      if (p || c === "down" || c === "right") return;
      const $ = TC(() => {
          R.current && js(c, R.current, u)
        }),
        V = as(R.current);
      return V.addEventListener("resize", $), () => {
        $.clear(), V.removeEventListener("resize", $)
      }
    }, [c, p, u]), k.useEffect(() => {
      p || ee()
    }, [p, ee]), I(x, _({
      nodeRef: R,
      onEnter: T,
      onEntered: Z,
      onEntering: W,
      onExit: H,
      onExited: ie,
      onExiting: Y,
      addEndListener: J,
      appear: a,
      in: p,
      timeout: S
    }, C, {
      children: ($, V) => k.cloneElement(l, _({
        ref: A,
        style: _({
          visibility: $ === "exited" && !p ? "hidden" : void 0
        }, m, l.props.style)
      }, V))
    }))
  }),
  aA = sA;

function lA(e) {
  return je("MuiDrawer", e)
}
He("MuiDrawer", ["root", "docked", "paper", "paperAnchorLeft", "paperAnchorRight", "paperAnchorTop", "paperAnchorBottom", "paperAnchorDockedLeft", "paperAnchorDockedRight", "paperAnchorDockedTop", "paperAnchorDockedBottom", "modal"]);
const uA = ["BackdropProps"],
  cA = ["anchor", "BackdropProps", "children", "className", "elevation", "hideBackdrop", "ModalProps", "onClose", "open", "PaperProps", "SlideProps", "TransitionComponent", "transitionDuration", "variant"],
  $0 = (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, (n.variant === "permanent" || n.variant === "persistent") && t.docked, t.modal]
  },
  dA = e => {
    const {
      classes: t,
      anchor: n,
      variant: r
    } = e, o = {
      root: ["root"],
      docked: [(r === "permanent" || r === "persistent") && "docked"],
      modal: ["modal"],
      paper: ["paper", `paperAnchor${fe(n)}`, r !== "temporary" && `paperAnchorDocked${fe(n)}`]
    };
    return Ye(o, lA, t)
  },
  fA = me(QP, {
    name: "MuiDrawer",
    slot: "Root",
    overridesResolver: $0
  })(({
    theme: e
  }) => ({
    zIndex: (e.vars || e).zIndex.drawer
  })),
  tm = me("div", {
    shouldForwardProp: Jl,
    name: "MuiDrawer",
    slot: "Docked",
    skipVariantsResolver: !1,
    overridesResolver: $0
  })({
    flex: "0 0 auto"
  }),
  pA = me(k0, {
    name: "MuiDrawer",
    slot: "Paper",
    overridesResolver: (e, t) => {
      const {
        ownerState: n
      } = e;
      return [t.paper, t[`paperAnchor${fe(n.anchor)}`], n.variant !== "temporary" && t[`paperAnchorDocked${fe(n.anchor)}`]]
    }
  })(({
    theme: e,
    ownerState: t
  }) => _({
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    flex: "1 0 auto",
    zIndex: (e.vars || e).zIndex.drawer,
    WebkitOverflowScrolling: "touch",
    position: "fixed",
    top: 0,
    outline: 0
  }, t.anchor === "left" && {
    left: 0
  }, t.anchor === "top" && {
    top: 0,
    left: 0,
    right: 0,
    height: "auto",
    maxHeight: "100%"
  }, t.anchor === "right" && {
    right: 0
  }, t.anchor === "bottom" && {
    top: "auto",
    left: 0,
    bottom: 0,
    right: 0,
    height: "auto",
    maxHeight: "100%"
  }, t.anchor === "left" && t.variant !== "temporary" && {
    borderRight: `1px solid ${(e.vars||e).palette.divider}`
  }, t.anchor === "top" && t.variant !== "temporary" && {
    borderBottom: `1px solid ${(e.vars||e).palette.divider}`
  }, t.anchor === "right" && t.variant !== "temporary" && {
    borderLeft: `1px solid ${(e.vars||e).palette.divider}`
  }, t.anchor === "bottom" && t.variant !== "temporary" && {
    borderTop: `1px solid ${(e.vars||e).palette.divider}`
  })),
  P0 = {
    left: "right",
    right: "left",
    top: "down",
    bottom: "up"
  };

function hA(e) {
  return ["left", "right"].indexOf(e) !== -1
}

function mA(e, t) {
  return e.direction === "rtl" && hA(t) ? P0[t] : t
}
const vA = k.forwardRef(function(t, n) {
    const r = Ke({
        props: t,
        name: "MuiDrawer"
      }),
      o = ds(),
      i = {
        enter: o.transitions.duration.enteringScreen,
        exit: o.transitions.duration.leavingScreen
      },
      {
        anchor: s = "left",
        BackdropProps: a,
        children: l,
        className: u,
        elevation: c = 16,
        hideBackdrop: d = !1,
        ModalProps: {
          BackdropProps: p
        } = {},
        onClose: y,
        open: h = !1,
        PaperProps: v = {},
        SlideProps: N,
        TransitionComponent: g = aA,
        transitionDuration: f = i,
        variant: m = "temporary"
      } = r,
      S = ce(r.ModalProps, uA),
      x = ce(r, cA),
      C = k.useRef(!1);
    k.useEffect(() => {
      C.current = !0
    }, []);
    const R = mA(o, s),
      B = _({}, r, {
        anchor: s,
        elevation: c,
        open: h,
        variant: m
      }, x),
      T = dA(B),
      W = I(pA, _({
        elevation: m === "temporary" ? c : 0,
        square: !0
      }, v, {
        className: ue(T.paper, v.className),
        ownerState: B,
        children: l
      }));
    if (m === "permanent") return I(tm, _({
      className: ue(T.root, T.docked, u),
      ownerState: B,
      ref: n
    }, x, {
      children: W
    }));
    const Z = I(g, _({
      in: h,
      direction: P0[R],
      timeout: f,
      appear: C.current
    }, N, {
      children: W
    }));
    return m === "persistent" ? I(tm, _({
      className: ue(T.root, T.docked, u),
      ownerState: B,
      ref: n
    }, x, {
      children: Z
    })) : I(fA, _({
      BackdropProps: _({}, a, p, {
        transitionDuration: f
      }),
      className: ue(T.root, T.modal, u),
      open: h,
      ownerState: B,
      onClose: y,
      hideBackdrop: d,
      ref: n
    }, x, S, {
      children: Z
    }))
  }),
  gA = vA;

function yA(e) {
  return je("MuiLinearProgress", e)
}
He("MuiLinearProgress", ["root", "colorPrimary", "colorSecondary", "determinate", "indeterminate", "buffer", "query", "dashed", "dashedColorPrimary", "dashedColorSecondary", "bar", "barColorPrimary", "barColorSecondary", "bar1Indeterminate", "bar1Determinate", "bar1Buffer", "bar2Indeterminate", "bar2Buffer"]);
const SA = ["className", "color", "value", "valueBuffer", "variant"];
let Oo = e => e,
  nm, rm, om, im, sm, am;
const nd = 4,
  wA = Mo(nm || (nm = Oo`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)),
  _A = Mo(rm || (rm = Oo`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)),
  xA = Mo(om || (om = Oo`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)),
  RA = e => {
    const {
      classes: t,
      variant: n,
      color: r
    } = e, o = {
      root: ["root", `color${fe(r)}`, n],
      dashed: ["dashed", `dashedColor${fe(r)}`],
      bar1: ["bar", `barColor${fe(r)}`, (n === "indeterminate" || n === "query") && "bar1Indeterminate", n === "determinate" && "bar1Determinate", n === "buffer" && "bar1Buffer"],
      bar2: ["bar", n !== "buffer" && `barColor${fe(r)}`, n === "buffer" && `color${fe(r)}`, (n === "indeterminate" || n === "query") && "bar2Indeterminate", n === "buffer" && "bar2Buffer"]
    };
    return Ye(o, yA, t)
  },
  Df = (e, t) => t === "inherit" ? "currentColor" : e.vars ? e.vars.palette.LinearProgress[`${t}Bg`] : e.palette.mode === "light" ? y0(e.palette[t].main, .62) : g0(e.palette[t].main, .5),
  EA = me("span", {
    name: "MuiLinearProgress",
    slot: "Root",
    overridesResolver: (e, t) => {
      const {
        ownerState: n
      } = e;
      return [t.root, t[`color${fe(n.color)}`], t[n.variant]]
    }
  })(({
    ownerState: e,
    theme: t
  }) => _({
    position: "relative",
    overflow: "hidden",
    display: "block",
    height: 4,
    zIndex: 0,
    "@media print": {
      colorAdjust: "exact"
    },
    backgroundColor: Df(t, e.color)
  }, e.color === "inherit" && e.variant !== "buffer" && {
    backgroundColor: "none",
    "&::before": {
      content: '""',
      position: "absolute",
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "currentColor",
      opacity: .3
    }
  }, e.variant === "buffer" && {
    backgroundColor: "transparent"
  }, e.variant === "query" && {
    transform: "rotate(180deg)"
  })),
  bA = me("span", {
    name: "MuiLinearProgress",
    slot: "Dashed",
    overridesResolver: (e, t) => {
      const {
        ownerState: n
      } = e;
      return [t.dashed, t[`dashedColor${fe(n.color)}`]]
    }
  })(({
    ownerState: e,
    theme: t
  }) => {
    const n = Df(t, e.color);
    return _({
      position: "absolute",
      marginTop: 0,
      height: "100%",
      width: "100%"
    }, e.color === "inherit" && {
      opacity: .3
    }, {
      backgroundImage: `radial-gradient(${n} 0%, ${n} 16%, transparent 42%)`,
      backgroundSize: "10px 10px",
      backgroundPosition: "0 -23px"
    })
  }, Wl(im || (im = Oo`
    animation: ${0} 3s infinite linear;
  `), xA)),
  kA = me("span", {
    name: "MuiLinearProgress",
    slot: "Bar1",
    overridesResolver: (e, t) => {
      const {
        ownerState: n
      } = e;
      return [t.bar, t[`barColor${fe(n.color)}`], (n.variant === "indeterminate" || n.variant === "query") && t.bar1Indeterminate, n.variant === "determinate" && t.bar1Determinate, n.variant === "buffer" && t.bar1Buffer]
    }
  })(({
    ownerState: e,
    theme: t
  }) => _({
    width: "100%",
    position: "absolute",
    left: 0,
    bottom: 0,
    top: 0,
    transition: "transform 0.2s linear",
    transformOrigin: "left",
    backgroundColor: e.color === "inherit" ? "currentColor" : (t.vars || t).palette[e.color].main
  }, e.variant === "determinate" && {
    transition: `transform .${nd}s linear`
  }, e.variant === "buffer" && {
    zIndex: 1,
    transition: `transform .${nd}s linear`
  }), ({
    ownerState: e
  }) => (e.variant === "indeterminate" || e.variant === "query") && Wl(sm || (sm = Oo`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `), wA)),
  CA = me("span", {
    name: "MuiLinearProgress",
    slot: "Bar2",
    overridesResolver: (e, t) => {
      const {
        ownerState: n
      } = e;
      return [t.bar, t[`barColor${fe(n.color)}`], (n.variant === "indeterminate" || n.variant === "query") && t.bar2Indeterminate, n.variant === "buffer" && t.bar2Buffer]
    }
  })(({
    ownerState: e,
    theme: t
  }) => _({
    width: "100%",
    position: "absolute",
    left: 0,
    bottom: 0,
    top: 0,
    transition: "transform 0.2s linear",
    transformOrigin: "left"
  }, e.variant !== "buffer" && {
    backgroundColor: e.color === "inherit" ? "currentColor" : (t.vars || t).palette[e.color].main
  }, e.color === "inherit" && {
    opacity: .3
  }, e.variant === "buffer" && {
    backgroundColor: Df(t, e.color),
    transition: `transform .${nd}s linear`
  }), ({
    ownerState: e
  }) => (e.variant === "indeterminate" || e.variant === "query") && Wl(am || (am = Oo`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `), _A)),
  TA = k.forwardRef(function(t, n) {
    const r = Ke({
        props: t,
        name: "MuiLinearProgress"
      }),
      {
        className: o,
        color: i = "primary",
        value: s,
        valueBuffer: a,
        variant: l = "indeterminate"
      } = r,
      u = ce(r, SA),
      c = _({}, r, {
        color: i,
        variant: l
      }),
      d = RA(c),
      p = ds(),
      y = {},
      h = {
        bar1: {},
        bar2: {}
      };
    if ((l === "determinate" || l === "buffer") && s !== void 0) {
      y["aria-valuenow"] = Math.round(s), y["aria-valuemin"] = 0, y["aria-valuemax"] = 100;
      let v = s - 100;
      p.direction === "rtl" && (v = -v), h.bar1.transform = `translateX(${v}%)`
    }
    if (l === "buffer" && a !== void 0) {
      let v = (a || 0) - 100;
      p.direction === "rtl" && (v = -v), h.bar2.transform = `translateX(${v}%)`
    }
    return De(EA, _({
      className: ue(d.root, o),
      ownerState: c,
      role: "progressbar"
    }, y, {
      ref: n
    }, u, {
      children: [l === "buffer" ? I(bA, {
        className: d.dashed,
        ownerState: c
      }) : null, I(kA, {
        className: d.bar1,
        ownerState: c,
        style: h.bar1
      }), l === "determinate" ? null : I(CA, {
        className: d.bar2,
        ownerState: c,
        style: h.bar2
      })]
    }))
  }),
  NA = TA,
  $A = k.createContext({}),
  En = $A;

function PA(e) {
  return je("MuiList", e)
}
He("MuiList", ["root", "padding", "dense", "subheader"]);
const AA = ["children", "className", "component", "dense", "disablePadding", "subheader"],
  LA = e => {
    const {
      classes: t,
      disablePadding: n,
      dense: r,
      subheader: o
    } = e;
    return Ye({
      root: ["root", !n && "padding", r && "dense", o && "subheader"]
    }, PA, t)
  },
  IA = me("ul", {
    name: "MuiList",
    slot: "Root",
    overridesResolver: (e, t) => {
      const {
        ownerState: n
      } = e;
      return [t.root, !n.disablePadding && t.padding, n.dense && t.dense, n.subheader && t.subheader]
    }
  })(({
    ownerState: e
  }) => _({
    listStyle: "none",
    margin: 0,
    padding: 0,
    position: "relative"
  }, !e.disablePadding && {
    paddingTop: 8,
    paddingBottom: 8
  }, e.subheader && {
    paddingTop: 0
  })),
  MA = k.forwardRef(function(t, n) {
    const r = Ke({
        props: t,
        name: "MuiList"
      }),
      {
        children: o,
        className: i,
        component: s = "ul",
        dense: a = !1,
        disablePadding: l = !1,
        subheader: u
      } = r,
      c = ce(r, AA),
      d = k.useMemo(() => ({
        dense: a
      }), [a]),
      p = _({}, r, {
        component: s,
        dense: a,
        disablePadding: l
      }),
      y = LA(p);
    return I(En.Provider, {
      value: d,
      children: De(IA, _({
        as: s,
        className: ue(y.root, i),
        ref: n,
        ownerState: p
      }, c, {
        children: [u, o]
      }))
    })
  }),
  A0 = MA;

function OA(e) {
  return je("MuiListItem", e)
}
const DA = He("MuiListItem", ["root", "container", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "padding", "button", "secondaryAction", "selected"]),
  Ur = DA;

function zA(e) {
  return je("MuiListItemButton", e)
}
const BA = He("MuiListItemButton", ["root", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "selected"]),
  Wr = BA,
  VA = ["alignItems", "autoFocus", "component", "children", "dense", "disableGutters", "divider", "focusVisibleClassName", "selected", "className"],
  FA = (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.dense && t.dense, n.alignItems === "flex-start" && t.alignItemsFlexStart, n.divider && t.divider, !n.disableGutters && t.gutters]
  },
  UA = e => {
    const {
      alignItems: t,
      classes: n,
      dense: r,
      disabled: o,
      disableGutters: i,
      divider: s,
      selected: a
    } = e, u = Ye({
      root: ["root", r && "dense", !i && "gutters", s && "divider", o && "disabled", t === "flex-start" && "alignItemsFlexStart", a && "selected"]
    }, zA, n);
    return _({}, n, u)
  },
  WA = me(Of, {
    shouldForwardProp: e => Jl(e) || e === "classes",
    name: "MuiListItemButton",
    slot: "Root",
    overridesResolver: FA
  })(({
    theme: e,
    ownerState: t
  }) => _({
    display: "flex",
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    position: "relative",
    textDecoration: "none",
    minWidth: 0,
    boxSizing: "border-box",
    textAlign: "left",
    paddingTop: 8,
    paddingBottom: 8,
    transition: e.transitions.create("background-color", {
      duration: e.transitions.duration.shortest
    }),
    "&:hover": {
      textDecoration: "none",
      backgroundColor: (e.vars || e).palette.action.hover,
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    },
    [`&.${Wr.selected}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : ht(e.palette.primary.main, e.palette.action.selectedOpacity),
      [`&.${Wr.focusVisible}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : ht(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
      }
    },
    [`&.${Wr.selected}:hover`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : ht(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
      "@media (hover: none)": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : ht(e.palette.primary.main, e.palette.action.selectedOpacity)
      }
    },
    [`&.${Wr.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette.action.focus
    },
    [`&.${Wr.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity
    }
  }, t.divider && {
    borderBottom: `1px solid ${(e.vars||e).palette.divider}`,
    backgroundClip: "padding-box"
  }, t.alignItems === "flex-start" && {
    alignItems: "flex-start"
  }, !t.disableGutters && {
    paddingLeft: 16,
    paddingRight: 16
  }, t.dense && {
    paddingTop: 4,
    paddingBottom: 4
  })),
  jA = k.forwardRef(function(t, n) {
    const r = Ke({
        props: t,
        name: "MuiListItemButton"
      }),
      {
        alignItems: o = "center",
        autoFocus: i = !1,
        component: s = "div",
        children: a,
        dense: l = !1,
        disableGutters: u = !1,
        divider: c = !1,
        focusVisibleClassName: d,
        selected: p = !1,
        className: y
      } = r,
      h = ce(r, VA),
      v = k.useContext(En),
      N = k.useMemo(() => ({
        dense: l || v.dense || !1,
        alignItems: o,
        disableGutters: u
      }), [o, v.dense, l, u]),
      g = k.useRef(null);
    Ui(() => {
      i && g.current && g.current.focus()
    }, [i]);
    const f = _({}, r, {
        alignItems: o,
        dense: N.dense,
        disableGutters: u,
        divider: c,
        selected: p
      }),
      m = UA(f),
      S = tn(g, n);
    return I(En.Provider, {
      value: N,
      children: I(WA, _({
        ref: S,
        href: h.href || h.to,
        component: (h.href || h.to) && s === "div" ? "button" : s,
        focusVisibleClassName: ue(m.focusVisible, d),
        ownerState: f,
        className: ue(m.root, y)
      }, h, {
        classes: m,
        children: a
      }))
    })
  }),
  lm = jA;

function HA(e) {
  return je("MuiListItemSecondaryAction", e)
}
He("MuiListItemSecondaryAction", ["root", "disableGutters"]);
const KA = ["className"],
  GA = e => {
    const {
      disableGutters: t,
      classes: n
    } = e;
    return Ye({
      root: ["root", t && "disableGutters"]
    }, HA, n)
  },
  qA = me("div", {
    name: "MuiListItemSecondaryAction",
    slot: "Root",
    overridesResolver: (e, t) => {
      const {
        ownerState: n
      } = e;
      return [t.root, n.disableGutters && t.disableGutters]
    }
  })(({
    ownerState: e
  }) => _({
    position: "absolute",
    right: 16,
    top: "50%",
    transform: "translateY(-50%)"
  }, e.disableGutters && {
    right: 0
  })),
  L0 = k.forwardRef(function(t, n) {
    const r = Ke({
        props: t,
        name: "MuiListItemSecondaryAction"
      }),
      {
        className: o
      } = r,
      i = ce(r, KA),
      s = k.useContext(En),
      a = _({}, r, {
        disableGutters: s.disableGutters
      }),
      l = GA(a);
    return I(qA, _({
      className: ue(l.root, o),
      ownerState: a,
      ref: n
    }, i))
  });
L0.muiName = "ListItemSecondaryAction";
const YA = L0,
  QA = ["className"],
  XA = ["alignItems", "autoFocus", "button", "children", "className", "component", "components", "componentsProps", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "disablePadding", "divider", "focusVisibleClassName", "secondaryAction", "selected", "slotProps", "slots"],
  ZA = (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.dense && t.dense, n.alignItems === "flex-start" && t.alignItemsFlexStart, n.divider && t.divider, !n.disableGutters && t.gutters, !n.disablePadding && t.padding, n.button && t.button, n.hasSecondaryAction && t.secondaryAction]
  },
  JA = e => {
    const {
      alignItems: t,
      button: n,
      classes: r,
      dense: o,
      disabled: i,
      disableGutters: s,
      disablePadding: a,
      divider: l,
      hasSecondaryAction: u,
      selected: c
    } = e;
    return Ye({
      root: ["root", o && "dense", !s && "gutters", !a && "padding", l && "divider", i && "disabled", n && "button", t === "flex-start" && "alignItemsFlexStart", u && "secondaryAction", c && "selected"],
      container: ["container"]
    }, OA, r)
  },
  eL = me("div", {
    name: "MuiListItem",
    slot: "Root",
    overridesResolver: ZA
  })(({
    theme: e,
    ownerState: t
  }) => _({
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "relative",
    textDecoration: "none",
    width: "100%",
    boxSizing: "border-box",
    textAlign: "left"
  }, !t.disablePadding && _({
    paddingTop: 8,
    paddingBottom: 8
  }, t.dense && {
    paddingTop: 4,
    paddingBottom: 4
  }, !t.disableGutters && {
    paddingLeft: 16,
    paddingRight: 16
  }, !!t.secondaryAction && {
    paddingRight: 48
  }), !!t.secondaryAction && {
    [`& > .${Wr.root}`]: {
      paddingRight: 48
    }
  }, {
    [`&.${Ur.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette.action.focus
    },
    [`&.${Ur.selected}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : ht(e.palette.primary.main, e.palette.action.selectedOpacity),
      [`&.${Ur.focusVisible}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : ht(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
      }
    },
    [`&.${Ur.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity
    }
  }, t.alignItems === "flex-start" && {
    alignItems: "flex-start"
  }, t.divider && {
    borderBottom: `1px solid ${(e.vars||e).palette.divider}`,
    backgroundClip: "padding-box"
  }, t.button && {
    transition: e.transitions.create("background-color", {
      duration: e.transitions.duration.shortest
    }),
    "&:hover": {
      textDecoration: "none",
      backgroundColor: (e.vars || e).palette.action.hover,
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    },
    [`&.${Ur.selected}:hover`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : ht(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
      "@media (hover: none)": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : ht(e.palette.primary.main, e.palette.action.selectedOpacity)
      }
    }
  }, t.hasSecondaryAction && {
    paddingRight: 48
  })),
  tL = me("li", {
    name: "MuiListItem",
    slot: "Container",
    overridesResolver: (e, t) => t.container
  })({
    position: "relative"
  }),
  nL = k.forwardRef(function(t, n) {
    const r = Ke({
        props: t,
        name: "MuiListItem"
      }),
      {
        alignItems: o = "center",
        autoFocus: i = !1,
        button: s = !1,
        children: a,
        className: l,
        component: u,
        components: c = {},
        componentsProps: d = {},
        ContainerComponent: p = "li",
        ContainerProps: {
          className: y
        } = {},
        dense: h = !1,
        disabled: v = !1,
        disableGutters: N = !1,
        disablePadding: g = !1,
        divider: f = !1,
        focusVisibleClassName: m,
        secondaryAction: S,
        selected: x = !1,
        slotProps: C = {},
        slots: R = {}
      } = r,
      A = ce(r.ContainerProps, QA),
      B = ce(r, XA),
      T = k.useContext(En),
      W = k.useMemo(() => ({
        dense: h || T.dense || !1,
        alignItems: o,
        disableGutters: N
      }), [o, T.dense, h, N]),
      Z = k.useRef(null);
    Ui(() => {
      i && Z.current && Z.current.focus()
    }, [i]);
    const Y = k.Children.toArray(a),
      H = Y.length && NC(Y[Y.length - 1], ["ListItemSecondaryAction"]),
      ie = _({}, r, {
        alignItems: o,
        autoFocus: i,
        button: s,
        dense: W.dense,
        disabled: v,
        disableGutters: N,
        disablePadding: g,
        divider: f,
        hasSecondaryAction: H,
        selected: x
      }),
      J = JA(ie),
      ee = tn(Z, n),
      $ = R.root || c.Root || eL,
      V = C.root || d.root || {},
      z = _({
        className: ue(J.root, V.className, l),
        disabled: v
      }, B);
    let K = u || "li";
    return s && (z.component = u || "div", z.focusVisibleClassName = ue(Ur.focusVisible, m), K = Of), H ? (K = !z.component && !u ? "div" : K, p === "li" && (K === "li" ? K = "div" : z.component === "li" && (z.component = "div")), I(En.Provider, {
      value: W,
      children: De(tL, _({
        as: p,
        className: ue(J.container, y),
        ref: ee,
        ownerState: ie
      }, A, {
        children: [I($, _({}, V, !td($) && {
          as: K,
          ownerState: _({}, ie, V.ownerState)
        }, z, {
          children: Y
        })), Y.pop()]
      }))
    })) : I(En.Provider, {
      value: W,
      children: De($, _({}, V, {
        as: K,
        ref: ee
      }, !td($) && {
        ownerState: _({}, ie, V.ownerState)
      }, z, {
        children: [Y, S && I(YA, {
          children: S
        })]
      }))
    })
  }),
  rL = nL;

function oL(e) {
  return je("MuiListItemIcon", e)
}
He("MuiListItemIcon", ["root", "alignItemsFlexStart"]);
const iL = ["className"],
  sL = e => {
    const {
      alignItems: t,
      classes: n
    } = e;
    return Ye({
      root: ["root", t === "flex-start" && "alignItemsFlexStart"]
    }, oL, n)
  },
  aL = me("div", {
    name: "MuiListItemIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const {
        ownerState: n
      } = e;
      return [t.root, n.alignItems === "flex-start" && t.alignItemsFlexStart]
    }
  })(({
    theme: e,
    ownerState: t
  }) => _({
    minWidth: 56,
    color: (e.vars || e).palette.action.active,
    flexShrink: 0,
    display: "inline-flex"
  }, t.alignItems === "flex-start" && {
    marginTop: 8
  })),
  lL = k.forwardRef(function(t, n) {
    const r = Ke({
        props: t,
        name: "MuiListItemIcon"
      }),
      {
        className: o
      } = r,
      i = ce(r, iL),
      s = k.useContext(En),
      a = _({}, r, {
        alignItems: s.alignItems
      }),
      l = sL(a);
    return I(aL, _({
      className: ue(l.root, o),
      ownerState: a,
      ref: n
    }, i))
  }),
  um = lL;

function uL(e) {
  return je("MuiListItemText", e)
}
const cL = He("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]),
  cm = cL,
  dL = ["children", "className", "disableTypography", "inset", "primary", "primaryTypographyProps", "secondary", "secondaryTypographyProps"],
  fL = e => {
    const {
      classes: t,
      inset: n,
      primary: r,
      secondary: o,
      dense: i
    } = e;
    return Ye({
      root: ["root", n && "inset", i && "dense", r && o && "multiline"],
      primary: ["primary"],
      secondary: ["secondary"]
    }, uL, t)
  },
  pL = me("div", {
    name: "MuiListItemText",
    slot: "Root",
    overridesResolver: (e, t) => {
      const {
        ownerState: n
      } = e;
      return [{
        [`& .${cm.primary}`]: t.primary
      }, {
        [`& .${cm.secondary}`]: t.secondary
      }, t.root, n.inset && t.inset, n.primary && n.secondary && t.multiline, n.dense && t.dense]
    }
  })(({
    ownerState: e
  }) => _({
    flex: "1 1 auto",
    minWidth: 0,
    marginTop: 4,
    marginBottom: 4
  }, e.primary && e.secondary && {
    marginTop: 6,
    marginBottom: 6
  }, e.inset && {
    paddingLeft: 56
  })),
  hL = k.forwardRef(function(t, n) {
    const r = Ke({
        props: t,
        name: "MuiListItemText"
      }),
      {
        children: o,
        className: i,
        disableTypography: s = !1,
        inset: a = !1,
        primary: l,
        primaryTypographyProps: u,
        secondary: c,
        secondaryTypographyProps: d
      } = r,
      p = ce(r, dL),
      {
        dense: y
      } = k.useContext(En);
    let h = l != null ? l : o,
      v = c;
    const N = _({}, r, {
        disableTypography: s,
        inset: a,
        primary: !!h,
        secondary: !!v,
        dense: y
      }),
      g = fL(N);
    return h != null && h.type !== xn && !s && (h = I(xn, _({
      variant: y ? "body2" : "body1",
      className: g.primary,
      component: u != null && u.variant ? void 0 : "span",
      display: "block"
    }, u, {
      children: h
    }))), v != null && v.type !== xn && !s && (v = I(xn, _({
      variant: "body2",
      className: g.secondary,
      color: "text.secondary",
      display: "block"
    }, d, {
      children: v
    }))), De(pL, _({
      className: ue(g.root, i),
      ownerState: N,
      ref: n
    }, p, {
      children: [h, v]
    }))
  }),
  dm = hL;

function mL(e) {
  return je("MuiToolbar", e)
}
He("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const vL = ["className", "component", "disableGutters", "variant"],
  gL = e => {
    const {
      classes: t,
      disableGutters: n,
      variant: r
    } = e;
    return Ye({
      root: ["root", !n && "gutters", r]
    }, mL, t)
  },
  yL = me("div", {
    name: "MuiToolbar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const {
        ownerState: n
      } = e;
      return [t.root, !n.disableGutters && t.gutters, t[n.variant]]
    }
  })(({
    theme: e,
    ownerState: t
  }) => _({
    position: "relative",
    display: "flex",
    alignItems: "center"
  }, !t.disableGutters && {
    paddingLeft: e.spacing(2),
    paddingRight: e.spacing(2),
    [e.breakpoints.up("sm")]: {
      paddingLeft: e.spacing(3),
      paddingRight: e.spacing(3)
    }
  }, t.variant === "dense" && {
    minHeight: 48
  }), ({
    theme: e,
    ownerState: t
  }) => t.variant === "regular" && e.mixins.toolbar),
  SL = k.forwardRef(function(t, n) {
    const r = Ke({
        props: t,
        name: "MuiToolbar"
      }),
      {
        className: o,
        component: i = "div",
        disableGutters: s = !1,
        variant: a = "regular"
      } = r,
      l = ce(r, vL),
      u = _({}, r, {
        component: i,
        disableGutters: s,
        variant: a
      }),
      c = gL(u);
    return I(yL, _({
      as: i,
      className: ue(c.root, o),
      ref: n,
      ownerState: u
    }, l))
  }),
  wL = SL,
  _L = fs(I("path", {
    d: "m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
  }), "ExpandLess"),
  xL = fs(I("path", {
    d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }), "ExpandMore"),
  RL = fs(I("path", {
    d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
  }), "Menu"),
  EL = fs(I("path", {
    d: "M12 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm0 1c-1.84 0-3.56.5-5.03 1.37-.61.35-.97 1.02-.97 1.72V17h12v-1.91c0-.7-.36-1.36-.97-1.72C15.56 12.5 13.84 12 12 12zm9.23-3.85 1.85-.77c-1.22-2.91-3.55-5.25-6.46-6.46l-.77 1.85c2.42 1.02 4.36 2.96 5.38 5.38zM8.15 2.77 7.38.92C4.47 2.14 2.14 4.47.92 7.38l1.85.77c1.02-2.42 2.96-4.36 5.38-5.38zM2.77 15.85l-1.85.77c1.22 2.91 3.55 5.25 6.46 6.46l.77-1.85c-2.42-1.02-4.36-2.96-5.38-5.38zm13.08 5.38.77 1.85c2.91-1.22 5.25-3.55 6.46-6.46l-1.85-.77c-1.02 2.42-2.96 4.36-5.38 5.38z"
  }), "SensorOccupied"),
  bL = ({
    tab: e,
    setSelectedTab: t
  }) => {
    const [n, r] = k.useState(!1), o = () => {
      r(!n)
    };
    return De(i1, {
      children: [I(rL, {
        disablePadding: !0,
        children: De(lm, {
          onClick: () => e.children ? o() : t(e.id),
          sx: {
            paddingRight: "1rem",
            paddingLeft: "1rem"
          },
          disabled: e.disabled,
          children: [I(um, {
            children: e.icon
          }), I(dm, {
            primary: e.name,
            sx: {
              mr: "1rem"
            }
          }), e.children && (n ? I(_L, {}) : I(xL, {})) || ""]
        })
      }, e.id), e.children && I(i$, {
        in: n,
        timeout: "auto",
        unmountOnExit: !0,
        children: I(A0, {
          component: "div",
          disablePadding: !0,
          children: e.children.map(i => De(lm, {
            sx: {
              pl: "2rem"
            },
            onClick: () => {
              t(i.id)
            },
            children: [I(um, {
              children: i.icon
            }), I(dm, {
              primary: i.name
            })]
          }, i.id))
        })
      })]
    })
  },
  kL = ({
    setSelectedTab: e,
    showDrawer: t,
    setShowDrawer: n,
    tabs: r
  }) => I(gA, {
    anchor: "left",
    open: t,
    onClose: () => n(!1),
    children: I(A0, {
      children: r.map((o, i) => I(bL, {
        tab: o,
        setSelectedTab: s => {
          e(s), n(!1)
        }
      }, i))
    })
  }),
  CL = is({
    key: "statusState",
    default: "idle"
  }),
  TL = is({
    key: "messageState",
    default: "..."
  }),
  NL = is({
    key: "progressState",
    default: 0
  }),
  $L = is({
    key: "resultsSlimState",
    default: []
  }),
  PL = is({
    key: "resultsState",
    default: []
  });
var AL = require("request");
const LL = "115YKGUVZAPT",
  IL = e => new Promise((t, n) => {
    var r = require("fs"),
      o = {
        method: "POST",
        url: "https://api-staging.nfl-mediarequest.com/tickets/api/v1/lombardi-access-key/upload-image",
        headers: {
          "lombardi-access-key": LL
        },
        formData: {
          image: {
            value: r.createReadStream(e),
            options: {
              filename: "image.png",
              contentType: "image/png"
            }
          }
        }
      };
    AL(o, function(i, s) {
      i && (console.log(i), n(i)), console.log(s.body);
      const a = JSON.parse(s.body);
      t(a)
    })
  }),
  ML = e => ({
    x: Math.round(e.left + e.width / 2),
    y: Math.round(e.top + e.height / 2)
  }),
  OL = e => (e.sort((t, n) => t.box.top - n.box.top), e.sort((t, n) => t.box.left - n.box.left), e),
  DL = (e, t) => {
    let n = t.payload.map((r, o) => {
      const i = r.result[0],
        s = {
          width: Math.round(i.box.Width * e.resolution.width),
          height: Math.round(i.box.Height * e.resolution.height),
          left: Math.round(i.box.Left * e.resolution.width),
          top: Math.round(i.box.Top * e.resolution.height)
        };
      return {
        name: i.playerName,
        season: i.Season,
        uuid: i.UUID,
        playerId: i.PlayerID,
        confidence: i.confidence,
        imageUrl: t.resultName[o],
        box: s,
        center: ML(s)
      }
    });
    return n = OL(n), {
      time: t.insertedAt,
      source: e,
      players: n
    }
  },
  zL = e => {
    let t = ln.readFileSync(e);
    const n = Nr.extname(e).split(".").pop(),
      r = Buffer.from(t).toString("base64");
    return `data:image/${n};base64,${r}`
  },
  Hs = e => new Promise(t => setTimeout(t, e)),
  BL = Kc.platform ? Kc.platform() : "",
  I0 = BL === "darwin" ? `${{}.HOME||window.cep_node.process.env.HOME}/Library/Preferences` : {}.APPDATA || window.cep_node.process.env.APPDATA,
  Ki = window.cep ? Nr.join(I0, Tl) : "",
  Ri = window.cep ? Nr.join(I0, Tl, "tmp") : "",
  VL = window.cep ? Nr.join(Ki, "prefs.json") : "",
  M0 = window.cep ? Nr.join(Ki, "logs") : "";
console.log({
  prefsDir: Ki,
  tmpDir: Ri,
  prefsPath: VL,
  logPath: M0
});
const FL = () => {
    window.cep && (console.log("prefs is:", Ki), ln.mkdirSync(Ki, {
      recursive: !0
    }), ln.existsSync(Ri) && ln.rmdirSync(Ri, {
      recursive: !0
    }), ln.mkdirSync(Ri, {
      recursive: !0
    }), ln.mkdirSync(M0, {
      recursive: !0
    }))
  },
  UL = () => {
    const [e, t] = Jo(CL), [n, r] = Jo(TL), [o, i] = Jo(PL), [s, a] = Jo($L), [l, u] = Jo(NL), c = async y => {
      let v = 0,
        N = 10;
      for (;;) try {
        ln.readFileSync(y), console.log("File is readable");
        break
      } catch {
        if (await Hs(1e3), console.log("File is not readable, retrying in 1s..."), v++, v > N) throw new Error("Could not read exported file. Max attempts reached.")
      }
    }, d = async (y, h) => {
      let v = !1,
        N = 4,
        g = 0,
        f = 10;
      for (; !v;) {
        if (g % N === 0) {
          console.log("Exporting frame...");
          const m = await ir("exportFrame", mC(y), h);
          console.log(`Export Result: ${m}`)
        }
        if (await Hs(1e3), v = ln.existsSync(y), v || console.log("File does not exist, retrying in 1s..."), g++, g > f) throw new Error("Could not Export Frame, max attempts reached")
      }
    }, p = async y => {
      let h;
      try {
        u(10), r("Exporting image for analysis");
        const v = Nr.join(Ri, `${new Date().valueOf().toString()}.png`);
        if (h = y === "timeline" ? await ir("getSequenceSettings") : await ir("getSourceSettings"), !h) throw new Error("Sequence Settings not found");
        console.log(h), await d(v, h.id), y === "source" && await ir("deleteSequence", h.id), await c(v), u(20), r("Uploading image to API Service");
        let N = [];
        for (let x = 0; x < 40; x++) N.push(setTimeout(() => {
          u(20 + x * 1.25)
        }, 1e3 * (x + 1)));
        const {
          data: g,
          isError: f
        } = await IL(v);
        N.forEach(x => clearTimeout(x)), i([g, ...o]);
        const m = DL({
          path: v,
          resolution: {
            width: h.width,
            height: h.height
          }
        }, g);
        a([m, ...s]), u(80), r(`Found ${g.payload.length} players ${g.playerNames}`), await Hs(1e3), u(90), r("Generating Marker");
        const S = m.players.map(x => `${x.name} [ ${x.center.x}px x ${x.center.y}px ]`).join(", ");
        y === "timeline" ? ir("createSequenceMarker", "", S, h.playhead, h.id) : y === "source" && (console.log("Creating clip marker"), console.log(["", S, h.playhead, h.nodeId]), ir("createClipMarker", "", S, h.playhead, h.nodeId)), await Hs(1e3), u(100), r("Complete")
      } catch (v) {
        console.error(v), r("Error: " + v.message), u(0), t("idle"), y === "source" && h && await ir("deleteSequence", h.id)
      }
    };
    return k.useEffect(() => {
      FL()
    }, []), De(Vr, {
      className: "inner-block",
      sx: {
        display: "flex",
        flexDirection: "column",
        gap: ".5rem",
        color: "white",
        padding: ".5rem",
        alignText: "left",
        height: "100%"
      },
      children: [De(Vr, {
        className: "block",
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: ".5rem"
        },
        children: [De(Vr, {
          sx: {
            display: "flex",
            flexDirection: "row",
            gap: ".5rem"
          },
          children: [I(Wa, {
            onClick: () => p("source"),
            variant: "outlined",
            sx: {
              width: "100%"
            },
            children: "Analyze Source Frame"
          }), I(Wa, {
            onClick: () => p("timeline"),
            variant: "outlined",
            sx: {
              width: "100%"
            },
            children: "Analyze Timeline Frame"
          })]
        }), I(NA, {
          variant: "determinate",
          value: l
        }), I(xn, {
          children: n
        })]
      }), I(nA, {}), s.length > 0 && [s[0]].map((y, h) => De(Vr, {
        className: "block",
        sx: {
          display: "flex",
          flexDirection: "column",
          gap: ".5rem",
          textAlign: "left"
        },
        children: [I(Vr, {
          sx: {
            height: "200px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: `url(${zL(y.source.path)})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
          }
        }), De(xn, {
          fontWeight: "bold",
          children: ["Players Identified: ", y.players.length]
        }), De(xn, {
          children: ["Frame Resolution: ", y.source.resolution.width, "px x", " ", y.source.resolution.height, "px"]
        }), y.players.map((v, N) => I(Vr, {
          className: "block",
          sx: {
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            padding: ".5rem",
            backgroundColor: "#333"
          },
          children: De(xn, {
            children: [N, ". ", v.name, " [ ", v.center.x, "px x ", v.center.y, "px ]"]
          })
        }, N))]
      }, h))]
    })
  },
  WL = () => {
    var c, d;
    const [e, t] = k.useState("#282c34"), n = Pf({
      spacing: [0, 4, 8, 16, 32, 64],
      components: {
        MuiFormControl: {
          defaultProps: {
            variant: "standard",
            fullWidth: !0,
            required: !0,
            sx: {
              display: "flex",
              flexDirection: "column",
              gap: ".5rem",
              marginBottom: ".5rem"
            }
          }
        },
        MuiButton: {
          defaultProps: {
            sx: {
              outlineWidth: "4px"
            }
          }
        },
        MuiDivider: {
          defaultProps: {
            sx: {
              marginBottom: "1rem"
            }
          }
        },
        MuiRadio: {
          defaultProps: {
            sx: {
              fontSize: ".5rem"
            }
          }
        },
        MuiSlider: {
          defaultProps: {
            sx: {
              marginTop: "1.25rem"
            }
          }
        },
        MuiTab: {
          defaultProps: {
            sx: {
              fontSize: ".75rem"
            }
          }
        },
        MuiAlert: {
          defaultProps: {
            sx: {
              backgroundColor: "#e7bc4236"
            }
          }
        }
      },
      palette: {
        mode: "dark",
        error: {
          main: "#e7bc42"
        }
      }
    });
    k.useEffect(() => {
      window.cep && gC(t)
    }, []);
    const r = () => {},
      [o, i] = k.useState(!1),
      [s, a] = k.useState("facial-recognition"),
      l = [{
        name: "Facial Recognition",
        icon: I(EL, {}),
        id: "facial-recognition"
      }],
      u = () => {
        let p = l[0];
        return l.map(y => {
          y.id === s ? p = y : y.children && y.children.map(h => {
            h.id === s && (p = h)
          })
        }), p
      };
    return I(BN, {
      theme: n,
      children: De("div", {
        className: "app",
        style: {
          backgroundColor: e
        },
        children: [I(kL, {
          setSelectedTab: p => a(p),
          setShowDrawer: p => i(p),
          showDrawer: o,
          tabs: l
        }), I(F$, {
          position: "static",
          variant: "elevation",
          children: De(wL, {
            children: [I(Wa, {
              color: "inherit",
              onClick: () => i(!o),
              children: I(RL, {})
            }), De(Ah, {
              sx: {
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
                justifyContent: "center",
                alignItems: "center"
              },
              flexGrow: 1,
              children: [(c = u()) == null ? void 0 : c.icon, I(xn, {
                justifyContent: "center",
                textAlign: "center",
                variant: "h5",
                children: (d = u()) == null ? void 0 : d.name
              })]
            }), I(Wa, {
              color: "inherit",
              onClick: r,
              children: I(SP, {
                src: yC
              })
            })]
          })
        }), I(Ah, {
          className: "main",
          children: s === "facial-recognition" && I(UL, {})
        })]
      })
    })
  };
location.href.includes("localhost") && (Jk.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = !1);
hC();
ju.createRoot(document.getElementById("root")).render(I(ge.StrictMode, {
  children: I(eC, {
    children: I(WL, {})
  })
}));