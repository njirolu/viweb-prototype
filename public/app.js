function Df(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var Ki = { exports: {} }, Or = {}, Yi = { exports: {} }, re = {}, qa;
function Ff() {
  if (qa) return re;
  qa = 1;
  var s = /* @__PURE__ */ Symbol.for("react.element"), f = /* @__PURE__ */ Symbol.for("react.portal"), u = /* @__PURE__ */ Symbol.for("react.fragment"), v = /* @__PURE__ */ Symbol.for("react.strict_mode"), _ = /* @__PURE__ */ Symbol.for("react.profiler"), E = /* @__PURE__ */ Symbol.for("react.provider"), P = /* @__PURE__ */ Symbol.for("react.context"), F = /* @__PURE__ */ Symbol.for("react.forward_ref"), C = /* @__PURE__ */ Symbol.for("react.suspense"), L = /* @__PURE__ */ Symbol.for("react.memo"), B = /* @__PURE__ */ Symbol.for("react.lazy"), J = Symbol.iterator;
  function V(p) {
    return p === null || typeof p != "object" ? null : (p = J && p[J] || p["@@iterator"], typeof p == "function" ? p : null);
  }
  var fe = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, pe = Object.assign, H = {};
  function W(p, w, b) {
    this.props = p, this.context = w, this.refs = H, this.updater = b || fe;
  }
  W.prototype.isReactComponent = {}, W.prototype.setState = function(p, w) {
    if (typeof p != "object" && typeof p != "function" && p != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, p, w, "setState");
  }, W.prototype.forceUpdate = function(p) {
    this.updater.enqueueForceUpdate(this, p, "forceUpdate");
  };
  function _e() {
  }
  _e.prototype = W.prototype;
  function me(p, w, b) {
    this.props = p, this.context = w, this.refs = H, this.updater = b || fe;
  }
  var Le = me.prototype = new _e();
  Le.constructor = me, pe(Le, W.prototype), Le.isPureReactComponent = !0;
  var ge = Array.isArray, ze = Object.prototype.hasOwnProperty, ve = { current: null }, Ce = { key: !0, ref: !0, __self: !0, __source: !0 };
  function j(p, w, b) {
    var ee, Y = {}, X = null, ue = null;
    if (w != null) for (ee in w.ref !== void 0 && (ue = w.ref), w.key !== void 0 && (X = "" + w.key), w) ze.call(w, ee) && !Ce.hasOwnProperty(ee) && (Y[ee] = w[ee]);
    var ie = arguments.length - 2;
    if (ie === 1) Y.children = b;
    else if (1 < ie) {
      for (var q = Array(ie), We = 0; We < ie; We++) q[We] = arguments[We + 2];
      Y.children = q;
    }
    if (p && p.defaultProps) for (ee in ie = p.defaultProps, ie) Y[ee] === void 0 && (Y[ee] = ie[ee]);
    return { $$typeof: s, type: p, key: X, ref: ue, props: Y, _owner: ve.current };
  }
  function we(p, w) {
    return { $$typeof: s, type: p.type, key: w, ref: p.ref, props: p.props, _owner: p._owner };
  }
  function Ke(p) {
    return typeof p == "object" && p !== null && p.$$typeof === s;
  }
  function nt(p) {
    var w = { "=": "=0", ":": "=2" };
    return "$" + p.replace(/[=:]/g, function(b) {
      return w[b];
    });
  }
  var Be = /\/+/g;
  function K(p, w) {
    return typeof p == "object" && p !== null && p.key != null ? nt("" + p.key) : w.toString(36);
  }
  function le(p, w, b, ee, Y) {
    var X = typeof p;
    (X === "undefined" || X === "boolean") && (p = null);
    var ue = !1;
    if (p === null) ue = !0;
    else switch (X) {
      case "string":
      case "number":
        ue = !0;
        break;
      case "object":
        switch (p.$$typeof) {
          case s:
          case f:
            ue = !0;
        }
    }
    if (ue) return ue = p, Y = Y(ue), p = ee === "" ? "." + K(ue, 0) : ee, ge(Y) ? (b = "", p != null && (b = p.replace(Be, "$&/") + "/"), le(Y, w, b, "", function(We) {
      return We;
    })) : Y != null && (Ke(Y) && (Y = we(Y, b + (!Y.key || ue && ue.key === Y.key ? "" : ("" + Y.key).replace(Be, "$&/") + "/") + p)), w.push(Y)), 1;
    if (ue = 0, ee = ee === "" ? "." : ee + ":", ge(p)) for (var ie = 0; ie < p.length; ie++) {
      X = p[ie];
      var q = ee + K(X, ie);
      ue += le(X, w, b, q, Y);
    }
    else if (q = V(p), typeof q == "function") for (p = q.call(p), ie = 0; !(X = p.next()).done; ) X = X.value, q = ee + K(X, ie++), ue += le(X, w, b, q, Y);
    else if (X === "object") throw w = String(p), Error("Objects are not valid as a React child (found: " + (w === "[object Object]" ? "object with keys {" + Object.keys(p).join(", ") + "}" : w) + "). If you meant to render a collection of children, use an array instead.");
    return ue;
  }
  function ae(p, w, b) {
    if (p == null) return p;
    var ee = [], Y = 0;
    return le(p, ee, "", "", function(X) {
      return w.call(b, X, Y++);
    }), ee;
  }
  function he(p) {
    if (p._status === -1) {
      var w = p._result;
      w = w(), w.then(function(b) {
        (p._status === 0 || p._status === -1) && (p._status = 1, p._result = b);
      }, function(b) {
        (p._status === 0 || p._status === -1) && (p._status = 2, p._result = b);
      }), p._status === -1 && (p._status = 0, p._result = w);
    }
    if (p._status === 1) return p._result.default;
    throw p._result;
  }
  var ce = { current: null }, z = { transition: null }, $ = { ReactCurrentDispatcher: ce, ReactCurrentBatchConfig: z, ReactCurrentOwner: ve };
  function y() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return re.Children = { map: ae, forEach: function(p, w, b) {
    ae(p, function() {
      w.apply(this, arguments);
    }, b);
  }, count: function(p) {
    var w = 0;
    return ae(p, function() {
      w++;
    }), w;
  }, toArray: function(p) {
    return ae(p, function(w) {
      return w;
    }) || [];
  }, only: function(p) {
    if (!Ke(p)) throw Error("React.Children.only expected to receive a single React element child.");
    return p;
  } }, re.Component = W, re.Fragment = u, re.Profiler = _, re.PureComponent = me, re.StrictMode = v, re.Suspense = C, re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $, re.act = y, re.cloneElement = function(p, w, b) {
    if (p == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + p + ".");
    var ee = pe({}, p.props), Y = p.key, X = p.ref, ue = p._owner;
    if (w != null) {
      if (w.ref !== void 0 && (X = w.ref, ue = ve.current), w.key !== void 0 && (Y = "" + w.key), p.type && p.type.defaultProps) var ie = p.type.defaultProps;
      for (q in w) ze.call(w, q) && !Ce.hasOwnProperty(q) && (ee[q] = w[q] === void 0 && ie !== void 0 ? ie[q] : w[q]);
    }
    var q = arguments.length - 2;
    if (q === 1) ee.children = b;
    else if (1 < q) {
      ie = Array(q);
      for (var We = 0; We < q; We++) ie[We] = arguments[We + 2];
      ee.children = ie;
    }
    return { $$typeof: s, type: p.type, key: Y, ref: X, props: ee, _owner: ue };
  }, re.createContext = function(p) {
    return p = { $$typeof: P, _currentValue: p, _currentValue2: p, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, p.Provider = { $$typeof: E, _context: p }, p.Consumer = p;
  }, re.createElement = j, re.createFactory = function(p) {
    var w = j.bind(null, p);
    return w.type = p, w;
  }, re.createRef = function() {
    return { current: null };
  }, re.forwardRef = function(p) {
    return { $$typeof: F, render: p };
  }, re.isValidElement = Ke, re.lazy = function(p) {
    return { $$typeof: B, _payload: { _status: -1, _result: p }, _init: he };
  }, re.memo = function(p, w) {
    return { $$typeof: L, type: p, compare: w === void 0 ? null : w };
  }, re.startTransition = function(p) {
    var w = z.transition;
    z.transition = {};
    try {
      p();
    } finally {
      z.transition = w;
    }
  }, re.unstable_act = y, re.useCallback = function(p, w) {
    return ce.current.useCallback(p, w);
  }, re.useContext = function(p) {
    return ce.current.useContext(p);
  }, re.useDebugValue = function() {
  }, re.useDeferredValue = function(p) {
    return ce.current.useDeferredValue(p);
  }, re.useEffect = function(p, w) {
    return ce.current.useEffect(p, w);
  }, re.useId = function() {
    return ce.current.useId();
  }, re.useImperativeHandle = function(p, w, b) {
    return ce.current.useImperativeHandle(p, w, b);
  }, re.useInsertionEffect = function(p, w) {
    return ce.current.useInsertionEffect(p, w);
  }, re.useLayoutEffect = function(p, w) {
    return ce.current.useLayoutEffect(p, w);
  }, re.useMemo = function(p, w) {
    return ce.current.useMemo(p, w);
  }, re.useReducer = function(p, w, b) {
    return ce.current.useReducer(p, w, b);
  }, re.useRef = function(p) {
    return ce.current.useRef(p);
  }, re.useState = function(p) {
    return ce.current.useState(p);
  }, re.useSyncExternalStore = function(p, w, b) {
    return ce.current.useSyncExternalStore(p, w, b);
  }, re.useTransition = function() {
    return ce.current.useTransition();
  }, re.version = "18.3.1", re;
}
var ba;
function es() {
  return ba || (ba = 1, Yi.exports = Ff()), Yi.exports;
}
var ec;
function Af() {
  if (ec) return Or;
  ec = 1;
  var s = es(), f = /* @__PURE__ */ Symbol.for("react.element"), u = /* @__PURE__ */ Symbol.for("react.fragment"), v = Object.prototype.hasOwnProperty, _ = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, E = { key: !0, ref: !0, __self: !0, __source: !0 };
  function P(F, C, L) {
    var B, J = {}, V = null, fe = null;
    L !== void 0 && (V = "" + L), C.key !== void 0 && (V = "" + C.key), C.ref !== void 0 && (fe = C.ref);
    for (B in C) v.call(C, B) && !E.hasOwnProperty(B) && (J[B] = C[B]);
    if (F && F.defaultProps) for (B in C = F.defaultProps, C) J[B] === void 0 && (J[B] = C[B]);
    return { $$typeof: f, type: F, key: V, ref: fe, props: J, _owner: _.current };
  }
  return Or.Fragment = u, Or.jsx = P, Or.jsxs = P, Or;
}
var tc;
function Uf() {
  return tc || (tc = 1, Ki.exports = Af()), Ki.exports;
}
var R = Uf(), te = es();
const Vf = /* @__PURE__ */ Df(te);
var Gl = {}, Xi = { exports: {} }, tt = {}, Zi = { exports: {} }, Ji = {};
var nc;
function Bf() {
  return nc || (nc = 1, (function(s) {
    function f(z, $) {
      var y = z.length;
      z.push($);
      e: for (; 0 < y; ) {
        var p = y - 1 >>> 1, w = z[p];
        if (0 < _(w, $)) z[p] = $, z[y] = w, y = p;
        else break e;
      }
    }
    function u(z) {
      return z.length === 0 ? null : z[0];
    }
    function v(z) {
      if (z.length === 0) return null;
      var $ = z[0], y = z.pop();
      if (y !== $) {
        z[0] = y;
        e: for (var p = 0, w = z.length, b = w >>> 1; p < b; ) {
          var ee = 2 * (p + 1) - 1, Y = z[ee], X = ee + 1, ue = z[X];
          if (0 > _(Y, y)) X < w && 0 > _(ue, Y) ? (z[p] = ue, z[X] = y, p = X) : (z[p] = Y, z[ee] = y, p = ee);
          else if (X < w && 0 > _(ue, y)) z[p] = ue, z[X] = y, p = X;
          else break e;
        }
      }
      return $;
    }
    function _(z, $) {
      var y = z.sortIndex - $.sortIndex;
      return y !== 0 ? y : z.id - $.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var E = performance;
      s.unstable_now = function() {
        return E.now();
      };
    } else {
      var P = Date, F = P.now();
      s.unstable_now = function() {
        return P.now() - F;
      };
    }
    var C = [], L = [], B = 1, J = null, V = 3, fe = !1, pe = !1, H = !1, W = typeof setTimeout == "function" ? setTimeout : null, _e = typeof clearTimeout == "function" ? clearTimeout : null, me = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Le(z) {
      for (var $ = u(L); $ !== null; ) {
        if ($.callback === null) v(L);
        else if ($.startTime <= z) v(L), $.sortIndex = $.expirationTime, f(C, $);
        else break;
        $ = u(L);
      }
    }
    function ge(z) {
      if (H = !1, Le(z), !pe) if (u(C) !== null) pe = !0, he(ze);
      else {
        var $ = u(L);
        $ !== null && ce(ge, $.startTime - z);
      }
    }
    function ze(z, $) {
      pe = !1, H && (H = !1, _e(j), j = -1), fe = !0;
      var y = V;
      try {
        for (Le($), J = u(C); J !== null && (!(J.expirationTime > $) || z && !nt()); ) {
          var p = J.callback;
          if (typeof p == "function") {
            J.callback = null, V = J.priorityLevel;
            var w = p(J.expirationTime <= $);
            $ = s.unstable_now(), typeof w == "function" ? J.callback = w : J === u(C) && v(C), Le($);
          } else v(C);
          J = u(C);
        }
        if (J !== null) var b = !0;
        else {
          var ee = u(L);
          ee !== null && ce(ge, ee.startTime - $), b = !1;
        }
        return b;
      } finally {
        J = null, V = y, fe = !1;
      }
    }
    var ve = !1, Ce = null, j = -1, we = 5, Ke = -1;
    function nt() {
      return !(s.unstable_now() - Ke < we);
    }
    function Be() {
      if (Ce !== null) {
        var z = s.unstable_now();
        Ke = z;
        var $ = !0;
        try {
          $ = Ce(!0, z);
        } finally {
          $ ? K() : (ve = !1, Ce = null);
        }
      } else ve = !1;
    }
    var K;
    if (typeof me == "function") K = function() {
      me(Be);
    };
    else if (typeof MessageChannel < "u") {
      var le = new MessageChannel(), ae = le.port2;
      le.port1.onmessage = Be, K = function() {
        ae.postMessage(null);
      };
    } else K = function() {
      W(Be, 0);
    };
    function he(z) {
      Ce = z, ve || (ve = !0, K());
    }
    function ce(z, $) {
      j = W(function() {
        z(s.unstable_now());
      }, $);
    }
    s.unstable_IdlePriority = 5, s.unstable_ImmediatePriority = 1, s.unstable_LowPriority = 4, s.unstable_NormalPriority = 3, s.unstable_Profiling = null, s.unstable_UserBlockingPriority = 2, s.unstable_cancelCallback = function(z) {
      z.callback = null;
    }, s.unstable_continueExecution = function() {
      pe || fe || (pe = !0, he(ze));
    }, s.unstable_forceFrameRate = function(z) {
      0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : we = 0 < z ? Math.floor(1e3 / z) : 5;
    }, s.unstable_getCurrentPriorityLevel = function() {
      return V;
    }, s.unstable_getFirstCallbackNode = function() {
      return u(C);
    }, s.unstable_next = function(z) {
      switch (V) {
        case 1:
        case 2:
        case 3:
          var $ = 3;
          break;
        default:
          $ = V;
      }
      var y = V;
      V = $;
      try {
        return z();
      } finally {
        V = y;
      }
    }, s.unstable_pauseExecution = function() {
    }, s.unstable_requestPaint = function() {
    }, s.unstable_runWithPriority = function(z, $) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3;
      }
      var y = V;
      V = z;
      try {
        return $();
      } finally {
        V = y;
      }
    }, s.unstable_scheduleCallback = function(z, $, y) {
      var p = s.unstable_now();
      switch (typeof y == "object" && y !== null ? (y = y.delay, y = typeof y == "number" && 0 < y ? p + y : p) : y = p, z) {
        case 1:
          var w = -1;
          break;
        case 2:
          w = 250;
          break;
        case 5:
          w = 1073741823;
          break;
        case 4:
          w = 1e4;
          break;
        default:
          w = 5e3;
      }
      return w = y + w, z = { id: B++, callback: $, priorityLevel: z, startTime: y, expirationTime: w, sortIndex: -1 }, y > p ? (z.sortIndex = y, f(L, z), u(C) === null && z === u(L) && (H ? (_e(j), j = -1) : H = !0, ce(ge, y - p))) : (z.sortIndex = w, f(C, z), pe || fe || (pe = !0, he(ze))), z;
    }, s.unstable_shouldYield = nt, s.unstable_wrapCallback = function(z) {
      var $ = V;
      return function() {
        var y = V;
        V = $;
        try {
          return z.apply(this, arguments);
        } finally {
          V = y;
        }
      };
    };
  })(Ji)), Ji;
}
var rc;
function Wf() {
  return rc || (rc = 1, Zi.exports = Bf()), Zi.exports;
}
var lc;
function Hf() {
  if (lc) return tt;
  lc = 1;
  var s = es(), f = Wf();
  function u(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var v = /* @__PURE__ */ new Set(), _ = {};
  function E(e, t) {
    P(e, t), P(e + "Capture", t);
  }
  function P(e, t) {
    for (_[e] = t, e = 0; e < t.length; e++) v.add(t[e]);
  }
  var F = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), C = Object.prototype.hasOwnProperty, L = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, B = {}, J = {};
  function V(e) {
    return C.call(J, e) ? !0 : C.call(B, e) ? !1 : L.test(e) ? J[e] = !0 : (B[e] = !0, !1);
  }
  function fe(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function pe(e, t, n, r) {
    if (t === null || typeof t > "u" || fe(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
    return !1;
  }
  function H(e, t, n, r, l, o, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i;
  }
  var W = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    W[e] = new H(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    W[t] = new H(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    W[e] = new H(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    W[e] = new H(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    W[e] = new H(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    W[e] = new H(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    W[e] = new H(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    W[e] = new H(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    W[e] = new H(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var _e = /[\-:]([a-z])/g;
  function me(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      _e,
      me
    );
    W[t] = new H(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(_e, me);
    W[t] = new H(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(_e, me);
    W[t] = new H(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    W[e] = new H(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), W.xlinkHref = new H("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    W[e] = new H(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function Le(e, t, n, r) {
    var l = W.hasOwnProperty(t) ? W[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (pe(t, n, l, r) && (n = null), r || l === null ? V(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var ge = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ze = /* @__PURE__ */ Symbol.for("react.element"), ve = /* @__PURE__ */ Symbol.for("react.portal"), Ce = /* @__PURE__ */ Symbol.for("react.fragment"), j = /* @__PURE__ */ Symbol.for("react.strict_mode"), we = /* @__PURE__ */ Symbol.for("react.profiler"), Ke = /* @__PURE__ */ Symbol.for("react.provider"), nt = /* @__PURE__ */ Symbol.for("react.context"), Be = /* @__PURE__ */ Symbol.for("react.forward_ref"), K = /* @__PURE__ */ Symbol.for("react.suspense"), le = /* @__PURE__ */ Symbol.for("react.suspense_list"), ae = /* @__PURE__ */ Symbol.for("react.memo"), he = /* @__PURE__ */ Symbol.for("react.lazy"), ce = /* @__PURE__ */ Symbol.for("react.offscreen"), z = Symbol.iterator;
  function $(e) {
    return e === null || typeof e != "object" ? null : (e = z && e[z] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var y = Object.assign, p;
  function w(e) {
    if (p === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      p = t && t[1] || "";
    }
    return `
` + p + e;
  }
  var b = !1;
  function ee(e, t) {
    if (!e || b) return "";
    b = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (g) {
          var r = g;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (g) {
          r = g;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (g) {
          r = g;
        }
        e();
      }
    } catch (g) {
      if (g && r && typeof g.stack == "string") {
        for (var l = g.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, a = o.length - 1; 1 <= i && 0 <= a && l[i] !== o[a]; ) a--;
        for (; 1 <= i && 0 <= a; i--, a--) if (l[i] !== o[a]) {
          if (i !== 1 || a !== 1)
            do
              if (i--, a--, 0 > a || l[i] !== o[a]) {
                var c = `
` + l[i].replace(" at new ", " at ");
                return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c;
              }
            while (1 <= i && 0 <= a);
          break;
        }
      }
    } finally {
      b = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? w(e) : "";
  }
  function Y(e) {
    switch (e.tag) {
      case 5:
        return w(e.type);
      case 16:
        return w("Lazy");
      case 13:
        return w("Suspense");
      case 19:
        return w("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = ee(e.type, !1), e;
      case 11:
        return e = ee(e.type.render, !1), e;
      case 1:
        return e = ee(e.type, !0), e;
      default:
        return "";
    }
  }
  function X(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Ce:
        return "Fragment";
      case ve:
        return "Portal";
      case we:
        return "Profiler";
      case j:
        return "StrictMode";
      case K:
        return "Suspense";
      case le:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case nt:
        return (e.displayName || "Context") + ".Consumer";
      case Ke:
        return (e._context.displayName || "Context") + ".Provider";
      case Be:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case ae:
        return t = e.displayName || null, t !== null ? t : X(e.type) || "Memo";
      case he:
        t = e._payload, e = e._init;
        try {
          return X(e(t));
        } catch {
        }
    }
    return null;
  }
  function ue(e) {
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
        return X(t);
      case 8:
        return t === j ? "StrictMode" : "Mode";
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
        if (typeof t == "string") return t;
    }
    return null;
  }
  function ie(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function q(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function We(e) {
    var t = q(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var l = n.get, o = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(i) {
        r = "" + i, o.call(this, i);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(i) {
        r = "" + i;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function _t(e) {
    e._valueTracker || (e._valueTracker = We(e));
  }
  function sn(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = q(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Dt(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ft(e, t) {
    var n = t.checked;
    return y({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function os(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = ie(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function is(e, t) {
    t = t.checked, t != null && Le(e, "checked", t, !1);
  }
  function eo(e, t) {
    is(e, t);
    var n = ie(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? to(e, t.type, n) : t.hasOwnProperty("defaultValue") && to(e, t.type, ie(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function ss(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function to(e, t, n) {
    (t !== "number" || Dt(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Zn = Array.isArray;
  function En(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + ie(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function no(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(u(91));
    return y({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function us(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(u(92));
        if (Zn(n)) {
          if (1 < n.length) throw Error(u(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: ie(n) };
  }
  function as(e, t) {
    var n = ie(t.value), r = ie(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function cs(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function ds(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ro(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? ds(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Ar, fs = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, l);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Ar = Ar || document.createElement("div"), Ar.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ar.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Jn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var qn = {
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
  }, Uc = ["Webkit", "ms", "Moz", "O"];
  Object.keys(qn).forEach(function(e) {
    Uc.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), qn[t] = qn[e];
    });
  });
  function ps(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || qn.hasOwnProperty(e) && qn[e] ? ("" + t).trim() : t + "px";
  }
  function ms(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = ps(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var Vc = y({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function lo(e, t) {
    if (t) {
      if (Vc[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(u(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(u(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(u(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(u(62));
    }
  }
  function oo(e, t) {
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
        return !0;
    }
  }
  var io = null;
  function so(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var uo = null, Nn = null, _n = null;
  function hs(e) {
    if (e = kr(e)) {
      if (typeof uo != "function") throw Error(u(280));
      var t = e.stateNode;
      t && (t = sl(t), uo(e.stateNode, e.type, t));
    }
  }
  function gs(e) {
    Nn ? _n ? _n.push(e) : _n = [e] : Nn = e;
  }
  function vs() {
    if (Nn) {
      var e = Nn, t = _n;
      if (_n = Nn = null, hs(e), t) for (e = 0; e < t.length; e++) hs(t[e]);
    }
  }
  function ys(e, t) {
    return e(t);
  }
  function ws() {
  }
  var ao = !1;
  function ks(e, t, n) {
    if (ao) return e(t, n);
    ao = !0;
    try {
      return ys(e, t, n);
    } finally {
      ao = !1, (Nn !== null || _n !== null) && (ws(), vs());
    }
  }
  function bn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = sl(n);
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
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(u(231, t, typeof n));
    return n;
  }
  var co = !1;
  if (F) try {
    var er = {};
    Object.defineProperty(er, "passive", { get: function() {
      co = !0;
    } }), window.addEventListener("test", er, er), window.removeEventListener("test", er, er);
  } catch {
    co = !1;
  }
  function Bc(e, t, n, r, l, o, i, a, c) {
    var g = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, g);
    } catch (x) {
      this.onError(x);
    }
  }
  var tr = !1, Ur = null, Vr = !1, fo = null, Wc = { onError: function(e) {
    tr = !0, Ur = e;
  } };
  function Hc(e, t, n, r, l, o, i, a, c) {
    tr = !1, Ur = null, Bc.apply(Wc, arguments);
  }
  function $c(e, t, n, r, l, o, i, a, c) {
    if (Hc.apply(this, arguments), tr) {
      if (tr) {
        var g = Ur;
        tr = !1, Ur = null;
      } else throw Error(u(198));
      Vr || (Vr = !0, fo = g);
    }
  }
  function un(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function xs(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Ss(e) {
    if (un(e) !== e) throw Error(u(188));
  }
  function Qc(e) {
    var t = e.alternate;
    if (!t) {
      if (t = un(e), t === null) throw Error(u(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var o = l.alternate;
      if (o === null) {
        if (r = l.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === o.child) {
        for (o = l.child; o; ) {
          if (o === n) return Ss(l), e;
          if (o === r) return Ss(l), t;
          o = o.sibling;
        }
        throw Error(u(188));
      }
      if (n.return !== r.return) n = l, r = o;
      else {
        for (var i = !1, a = l.child; a; ) {
          if (a === n) {
            i = !0, n = l, r = o;
            break;
          }
          if (a === r) {
            i = !0, r = l, n = o;
            break;
          }
          a = a.sibling;
        }
        if (!i) {
          for (a = o.child; a; ) {
            if (a === n) {
              i = !0, n = o, r = l;
              break;
            }
            if (a === r) {
              i = !0, r = o, n = l;
              break;
            }
            a = a.sibling;
          }
          if (!i) throw Error(u(189));
        }
      }
      if (n.alternate !== r) throw Error(u(190));
    }
    if (n.tag !== 3) throw Error(u(188));
    return n.stateNode.current === n ? e : t;
  }
  function Cs(e) {
    return e = Qc(e), e !== null ? Es(e) : null;
  }
  function Es(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Es(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Ns = f.unstable_scheduleCallback, _s = f.unstable_cancelCallback, Gc = f.unstable_shouldYield, Kc = f.unstable_requestPaint, Re = f.unstable_now, Yc = f.unstable_getCurrentPriorityLevel, po = f.unstable_ImmediatePriority, Ps = f.unstable_UserBlockingPriority, Br = f.unstable_NormalPriority, Xc = f.unstable_LowPriority, zs = f.unstable_IdlePriority, Wr = null, xt = null;
  function Zc(e) {
    if (xt && typeof xt.onCommitFiberRoot == "function") try {
      xt.onCommitFiberRoot(Wr, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var mt = Math.clz32 ? Math.clz32 : bc, Jc = Math.log, qc = Math.LN2;
  function bc(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Jc(e) / qc | 0) | 0;
  }
  var Hr = 64, $r = 4194304;
  function nr(e) {
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
        return e;
    }
  }
  function Qr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
    if (i !== 0) {
      var a = i & ~l;
      a !== 0 ? r = nr(a) : (o &= i, o !== 0 && (r = nr(o)));
    } else i = n & ~l, i !== 0 ? r = nr(i) : o !== 0 && (r = nr(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & l) === 0 && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - mt(t), l = 1 << n, r |= e[n], t &= ~l;
    return r;
  }
  function ed(e, t) {
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
        return -1;
    }
  }
  function td(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var i = 31 - mt(o), a = 1 << i, c = l[i];
      c === -1 ? ((a & n) === 0 || (a & r) !== 0) && (l[i] = ed(a, t)) : c <= t && (e.expiredLanes |= a), o &= ~a;
    }
  }
  function mo(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Rs() {
    var e = Hr;
    return Hr <<= 1, (Hr & 4194240) === 0 && (Hr = 64), e;
  }
  function ho(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function rr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - mt(t), e[t] = n;
  }
  function nd(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - mt(n), o = 1 << l;
      t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
    }
  }
  function go(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - mt(n), l = 1 << r;
      l & t | e[r] & t && (e[r] |= t), n &= ~l;
    }
  }
  var de = 0;
  function Ts(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Ls, vo, js, Is, Ms, yo = !1, Gr = [], At = null, Ut = null, Vt = null, lr = /* @__PURE__ */ new Map(), or = /* @__PURE__ */ new Map(), Bt = [], rd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Os(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        At = null;
        break;
      case "dragenter":
      case "dragleave":
        Ut = null;
        break;
      case "mouseover":
      case "mouseout":
        Vt = null;
        break;
      case "pointerover":
      case "pointerout":
        lr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        or.delete(t.pointerId);
    }
  }
  function ir(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = kr(t), t !== null && vo(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function ld(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return At = ir(At, e, t, n, r, l), !0;
      case "dragenter":
        return Ut = ir(Ut, e, t, n, r, l), !0;
      case "mouseover":
        return Vt = ir(Vt, e, t, n, r, l), !0;
      case "pointerover":
        var o = l.pointerId;
        return lr.set(o, ir(lr.get(o) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return o = l.pointerId, or.set(o, ir(or.get(o) || null, e, t, n, r, l)), !0;
    }
    return !1;
  }
  function Ds(e) {
    var t = an(e.target);
    if (t !== null) {
      var n = un(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = xs(n), t !== null) {
            e.blockedOn = t, Ms(e.priority, function() {
              js(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Kr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = ko(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        io = r, n.target.dispatchEvent(r), io = null;
      } else return t = kr(n), t !== null && vo(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Fs(e, t, n) {
    Kr(e) && n.delete(t);
  }
  function od() {
    yo = !1, At !== null && Kr(At) && (At = null), Ut !== null && Kr(Ut) && (Ut = null), Vt !== null && Kr(Vt) && (Vt = null), lr.forEach(Fs), or.forEach(Fs);
  }
  function sr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, yo || (yo = !0, f.unstable_scheduleCallback(f.unstable_NormalPriority, od)));
  }
  function ur(e) {
    function t(l) {
      return sr(l, e);
    }
    if (0 < Gr.length) {
      sr(Gr[0], e);
      for (var n = 1; n < Gr.length; n++) {
        var r = Gr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (At !== null && sr(At, e), Ut !== null && sr(Ut, e), Vt !== null && sr(Vt, e), lr.forEach(t), or.forEach(t), n = 0; n < Bt.length; n++) r = Bt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Bt.length && (n = Bt[0], n.blockedOn === null); ) Ds(n), n.blockedOn === null && Bt.shift();
  }
  var Pn = ge.ReactCurrentBatchConfig, Yr = !0;
  function id(e, t, n, r) {
    var l = de, o = Pn.transition;
    Pn.transition = null;
    try {
      de = 1, wo(e, t, n, r);
    } finally {
      de = l, Pn.transition = o;
    }
  }
  function sd(e, t, n, r) {
    var l = de, o = Pn.transition;
    Pn.transition = null;
    try {
      de = 4, wo(e, t, n, r);
    } finally {
      de = l, Pn.transition = o;
    }
  }
  function wo(e, t, n, r) {
    if (Yr) {
      var l = ko(e, t, n, r);
      if (l === null) Fo(e, t, r, Xr, n), Os(e, r);
      else if (ld(l, e, t, n, r)) r.stopPropagation();
      else if (Os(e, r), t & 4 && -1 < rd.indexOf(e)) {
        for (; l !== null; ) {
          var o = kr(l);
          if (o !== null && Ls(o), o = ko(e, t, n, r), o === null && Fo(e, t, r, Xr, n), o === l) break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else Fo(e, t, r, null, n);
    }
  }
  var Xr = null;
  function ko(e, t, n, r) {
    if (Xr = null, e = so(r), e = an(e), e !== null) if (t = un(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = xs(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Xr = e, null;
  }
  function As(e) {
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
        switch (Yc()) {
          case po:
            return 1;
          case Ps:
            return 4;
          case Br:
          case Xc:
            return 16;
          case zs:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Wt = null, xo = null, Zr = null;
  function Us() {
    if (Zr) return Zr;
    var e, t = xo, n = t.length, r, l = "value" in Wt ? Wt.value : Wt.textContent, o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++) ;
    return Zr = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Jr(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function qr() {
    return !0;
  }
  function Vs() {
    return !1;
  }
  function rt(e) {
    function t(n, r, l, o, i) {
      this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
      for (var a in e) e.hasOwnProperty(a) && (n = e[a], this[a] = n ? n(o) : o[a]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? qr : Vs, this.isPropagationStopped = Vs, this;
    }
    return y(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = qr);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = qr);
    }, persist: function() {
    }, isPersistent: qr }), t;
  }
  var zn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, So = rt(zn), ar = y({}, zn, { view: 0, detail: 0 }), ud = rt(ar), Co, Eo, cr, br = y({}, ar, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: _o, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== cr && (cr && e.type === "mousemove" ? (Co = e.screenX - cr.screenX, Eo = e.screenY - cr.screenY) : Eo = Co = 0, cr = e), Co);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Eo;
  } }), Bs = rt(br), ad = y({}, br, { dataTransfer: 0 }), cd = rt(ad), dd = y({}, ar, { relatedTarget: 0 }), No = rt(dd), fd = y({}, zn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), pd = rt(fd), md = y({}, zn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), hd = rt(md), gd = y({}, zn, { data: 0 }), Ws = rt(gd), vd = {
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
  }, yd = {
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
  }, wd = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function kd(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = wd[e]) ? !!t[e] : !1;
  }
  function _o() {
    return kd;
  }
  var xd = y({}, ar, { key: function(e) {
    if (e.key) {
      var t = vd[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Jr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? yd[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: _o, charCode: function(e) {
    return e.type === "keypress" ? Jr(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Jr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Sd = rt(xd), Cd = y({}, br, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Hs = rt(Cd), Ed = y({}, ar, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: _o }), Nd = rt(Ed), _d = y({}, zn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Pd = rt(_d), zd = y({}, br, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Rd = rt(zd), Td = [9, 13, 27, 32], Po = F && "CompositionEvent" in window, dr = null;
  F && "documentMode" in document && (dr = document.documentMode);
  var Ld = F && "TextEvent" in window && !dr, $s = F && (!Po || dr && 8 < dr && 11 >= dr), Qs = " ", Gs = !1;
  function Ks(e, t) {
    switch (e) {
      case "keyup":
        return Td.indexOf(t.keyCode) !== -1;
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
  function Ys(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Rn = !1;
  function jd(e, t) {
    switch (e) {
      case "compositionend":
        return Ys(t);
      case "keypress":
        return t.which !== 32 ? null : (Gs = !0, Qs);
      case "textInput":
        return e = t.data, e === Qs && Gs ? null : e;
      default:
        return null;
    }
  }
  function Id(e, t) {
    if (Rn) return e === "compositionend" || !Po && Ks(e, t) ? (e = Us(), Zr = xo = Wt = null, Rn = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return $s && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Md = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Xs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Md[e.type] : t === "textarea";
  }
  function Zs(e, t, n, r) {
    gs(r), t = ll(t, "onChange"), 0 < t.length && (n = new So("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var fr = null, pr = null;
  function Od(e) {
    mu(e, 0);
  }
  function el(e) {
    var t = Mn(e);
    if (sn(t)) return e;
  }
  function Dd(e, t) {
    if (e === "change") return t;
  }
  var Js = !1;
  if (F) {
    var zo;
    if (F) {
      var Ro = "oninput" in document;
      if (!Ro) {
        var qs = document.createElement("div");
        qs.setAttribute("oninput", "return;"), Ro = typeof qs.oninput == "function";
      }
      zo = Ro;
    } else zo = !1;
    Js = zo && (!document.documentMode || 9 < document.documentMode);
  }
  function bs() {
    fr && (fr.detachEvent("onpropertychange", eu), pr = fr = null);
  }
  function eu(e) {
    if (e.propertyName === "value" && el(pr)) {
      var t = [];
      Zs(t, pr, e, so(e)), ks(Od, t);
    }
  }
  function Fd(e, t, n) {
    e === "focusin" ? (bs(), fr = t, pr = n, fr.attachEvent("onpropertychange", eu)) : e === "focusout" && bs();
  }
  function Ad(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return el(pr);
  }
  function Ud(e, t) {
    if (e === "click") return el(t);
  }
  function Vd(e, t) {
    if (e === "input" || e === "change") return el(t);
  }
  function Bd(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var ht = typeof Object.is == "function" ? Object.is : Bd;
  function mr(e, t) {
    if (ht(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!C.call(t, l) || !ht(e[l], t[l])) return !1;
    }
    return !0;
  }
  function tu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function nu(e, t) {
    var n = tu(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = tu(n);
    }
  }
  function ru(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ru(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function lu() {
    for (var e = window, t = Dt(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Dt(e.document);
    }
    return t;
  }
  function To(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Wd(e) {
    var t = lu(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && ru(n.ownerDocument.documentElement, n)) {
      if (r !== null && To(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, o = Math.min(r.start, l);
          r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = nu(n, o);
          var i = nu(
            n,
            r
          );
          l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Hd = F && "documentMode" in document && 11 >= document.documentMode, Tn = null, Lo = null, hr = null, jo = !1;
  function ou(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    jo || Tn == null || Tn !== Dt(r) || (r = Tn, "selectionStart" in r && To(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), hr && mr(hr, r) || (hr = r, r = ll(Lo, "onSelect"), 0 < r.length && (t = new So("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Tn)));
  }
  function tl(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Ln = { animationend: tl("Animation", "AnimationEnd"), animationiteration: tl("Animation", "AnimationIteration"), animationstart: tl("Animation", "AnimationStart"), transitionend: tl("Transition", "TransitionEnd") }, Io = {}, iu = {};
  F && (iu = document.createElement("div").style, "AnimationEvent" in window || (delete Ln.animationend.animation, delete Ln.animationiteration.animation, delete Ln.animationstart.animation), "TransitionEvent" in window || delete Ln.transitionend.transition);
  function nl(e) {
    if (Io[e]) return Io[e];
    if (!Ln[e]) return e;
    var t = Ln[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in iu) return Io[e] = t[n];
    return e;
  }
  var su = nl("animationend"), uu = nl("animationiteration"), au = nl("animationstart"), cu = nl("transitionend"), du = /* @__PURE__ */ new Map(), fu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ht(e, t) {
    du.set(e, t), E(t, [e]);
  }
  for (var Mo = 0; Mo < fu.length; Mo++) {
    var Oo = fu[Mo], $d = Oo.toLowerCase(), Qd = Oo[0].toUpperCase() + Oo.slice(1);
    Ht($d, "on" + Qd);
  }
  Ht(su, "onAnimationEnd"), Ht(uu, "onAnimationIteration"), Ht(au, "onAnimationStart"), Ht("dblclick", "onDoubleClick"), Ht("focusin", "onFocus"), Ht("focusout", "onBlur"), Ht(cu, "onTransitionEnd"), P("onMouseEnter", ["mouseout", "mouseover"]), P("onMouseLeave", ["mouseout", "mouseover"]), P("onPointerEnter", ["pointerout", "pointerover"]), P("onPointerLeave", ["pointerout", "pointerover"]), E("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), E("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), E("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), E("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), E("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), E("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var gr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Gd = new Set("cancel close invalid load scroll toggle".split(" ").concat(gr));
  function pu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, $c(r, t, void 0, e), e.currentTarget = null;
  }
  function mu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (t) for (var i = r.length - 1; 0 <= i; i--) {
          var a = r[i], c = a.instance, g = a.currentTarget;
          if (a = a.listener, c !== o && l.isPropagationStopped()) break e;
          pu(l, a, g), o = c;
        }
        else for (i = 0; i < r.length; i++) {
          if (a = r[i], c = a.instance, g = a.currentTarget, a = a.listener, c !== o && l.isPropagationStopped()) break e;
          pu(l, a, g), o = c;
        }
      }
    }
    if (Vr) throw e = fo, Vr = !1, fo = null, e;
  }
  function ke(e, t) {
    var n = t[Ho];
    n === void 0 && (n = t[Ho] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (hu(t, e, 2, !1), n.add(r));
  }
  function Do(e, t, n) {
    var r = 0;
    t && (r |= 4), hu(n, e, r, t);
  }
  var rl = "_reactListening" + Math.random().toString(36).slice(2);
  function vr(e) {
    if (!e[rl]) {
      e[rl] = !0, v.forEach(function(n) {
        n !== "selectionchange" && (Gd.has(n) || Do(n, !1, e), Do(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[rl] || (t[rl] = !0, Do("selectionchange", !1, t));
    }
  }
  function hu(e, t, n, r) {
    switch (As(t)) {
      case 1:
        var l = id;
        break;
      case 4:
        l = sd;
        break;
      default:
        l = wo;
    }
    n = l.bind(null, t, n, e), l = void 0, !co || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function Fo(e, t, n, r, l) {
    var o = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var a = r.stateNode.containerInfo;
        if (a === l || a.nodeType === 8 && a.parentNode === l) break;
        if (i === 4) for (i = r.return; i !== null; ) {
          var c = i.tag;
          if ((c === 3 || c === 4) && (c = i.stateNode.containerInfo, c === l || c.nodeType === 8 && c.parentNode === l)) return;
          i = i.return;
        }
        for (; a !== null; ) {
          if (i = an(a), i === null) return;
          if (c = i.tag, c === 5 || c === 6) {
            r = o = i;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
    ks(function() {
      var g = o, x = so(n), S = [];
      e: {
        var k = du.get(e);
        if (k !== void 0) {
          var T = So, M = e;
          switch (e) {
            case "keypress":
              if (Jr(n) === 0) break e;
            case "keydown":
            case "keyup":
              T = Sd;
              break;
            case "focusin":
              M = "focus", T = No;
              break;
            case "focusout":
              M = "blur", T = No;
              break;
            case "beforeblur":
            case "afterblur":
              T = No;
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
              T = Bs;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              T = cd;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              T = Nd;
              break;
            case su:
            case uu:
            case au:
              T = pd;
              break;
            case cu:
              T = Pd;
              break;
            case "scroll":
              T = ud;
              break;
            case "wheel":
              T = Rd;
              break;
            case "copy":
            case "cut":
            case "paste":
              T = hd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              T = Hs;
          }
          var A = (t & 4) !== 0, Te = !A && e === "scroll", m = A ? k !== null ? k + "Capture" : null : k;
          A = [];
          for (var d = g, h; d !== null; ) {
            h = d;
            var N = h.stateNode;
            if (h.tag === 5 && N !== null && (h = N, m !== null && (N = bn(d, m), N != null && A.push(yr(d, N, h)))), Te) break;
            d = d.return;
          }
          0 < A.length && (k = new T(k, M, null, n, x), S.push({ event: k, listeners: A }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (k = e === "mouseover" || e === "pointerover", T = e === "mouseout" || e === "pointerout", k && n !== io && (M = n.relatedTarget || n.fromElement) && (an(M) || M[Pt])) break e;
          if ((T || k) && (k = x.window === x ? x : (k = x.ownerDocument) ? k.defaultView || k.parentWindow : window, T ? (M = n.relatedTarget || n.toElement, T = g, M = M ? an(M) : null, M !== null && (Te = un(M), M !== Te || M.tag !== 5 && M.tag !== 6) && (M = null)) : (T = null, M = g), T !== M)) {
            if (A = Bs, N = "onMouseLeave", m = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (A = Hs, N = "onPointerLeave", m = "onPointerEnter", d = "pointer"), Te = T == null ? k : Mn(T), h = M == null ? k : Mn(M), k = new A(N, d + "leave", T, n, x), k.target = Te, k.relatedTarget = h, N = null, an(x) === g && (A = new A(m, d + "enter", M, n, x), A.target = h, A.relatedTarget = Te, N = A), Te = N, T && M) t: {
              for (A = T, m = M, d = 0, h = A; h; h = jn(h)) d++;
              for (h = 0, N = m; N; N = jn(N)) h++;
              for (; 0 < d - h; ) A = jn(A), d--;
              for (; 0 < h - d; ) m = jn(m), h--;
              for (; d--; ) {
                if (A === m || m !== null && A === m.alternate) break t;
                A = jn(A), m = jn(m);
              }
              A = null;
            }
            else A = null;
            T !== null && gu(S, k, T, A, !1), M !== null && Te !== null && gu(S, Te, M, A, !0);
          }
        }
        e: {
          if (k = g ? Mn(g) : window, T = k.nodeName && k.nodeName.toLowerCase(), T === "select" || T === "input" && k.type === "file") var U = Dd;
          else if (Xs(k)) if (Js) U = Vd;
          else {
            U = Ad;
            var Q = Fd;
          }
          else (T = k.nodeName) && T.toLowerCase() === "input" && (k.type === "checkbox" || k.type === "radio") && (U = Ud);
          if (U && (U = U(e, g))) {
            Zs(S, U, n, x);
            break e;
          }
          Q && Q(e, k, g), e === "focusout" && (Q = k._wrapperState) && Q.controlled && k.type === "number" && to(k, "number", k.value);
        }
        switch (Q = g ? Mn(g) : window, e) {
          case "focusin":
            (Xs(Q) || Q.contentEditable === "true") && (Tn = Q, Lo = g, hr = null);
            break;
          case "focusout":
            hr = Lo = Tn = null;
            break;
          case "mousedown":
            jo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            jo = !1, ou(S, n, x);
            break;
          case "selectionchange":
            if (Hd) break;
          case "keydown":
          case "keyup":
            ou(S, n, x);
        }
        var G;
        if (Po) e: {
          switch (e) {
            case "compositionstart":
              var Z = "onCompositionStart";
              break e;
            case "compositionend":
              Z = "onCompositionEnd";
              break e;
            case "compositionupdate":
              Z = "onCompositionUpdate";
              break e;
          }
          Z = void 0;
        }
        else Rn ? Ks(e, n) && (Z = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Z = "onCompositionStart");
        Z && ($s && n.locale !== "ko" && (Rn || Z !== "onCompositionStart" ? Z === "onCompositionEnd" && Rn && (G = Us()) : (Wt = x, xo = "value" in Wt ? Wt.value : Wt.textContent, Rn = !0)), Q = ll(g, Z), 0 < Q.length && (Z = new Ws(Z, e, null, n, x), S.push({ event: Z, listeners: Q }), G ? Z.data = G : (G = Ys(n), G !== null && (Z.data = G)))), (G = Ld ? jd(e, n) : Id(e, n)) && (g = ll(g, "onBeforeInput"), 0 < g.length && (x = new Ws("onBeforeInput", "beforeinput", null, n, x), S.push({ event: x, listeners: g }), x.data = G));
      }
      mu(S, t);
    });
  }
  function yr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function ll(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e, o = l.stateNode;
      l.tag === 5 && o !== null && (l = o, o = bn(e, n), o != null && r.unshift(yr(e, o, l)), o = bn(e, t), o != null && r.push(yr(e, o, l))), e = e.return;
    }
    return r;
  }
  function jn(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function gu(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r; ) {
      var a = n, c = a.alternate, g = a.stateNode;
      if (c !== null && c === r) break;
      a.tag === 5 && g !== null && (a = g, l ? (c = bn(n, o), c != null && i.unshift(yr(n, c, a))) : l || (c = bn(n, o), c != null && i.push(yr(n, c, a)))), n = n.return;
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var Kd = /\r\n?/g, Yd = /\u0000|\uFFFD/g;
  function vu(e) {
    return (typeof e == "string" ? e : "" + e).replace(Kd, `
`).replace(Yd, "");
  }
  function ol(e, t, n) {
    if (t = vu(t), vu(e) !== t && n) throw Error(u(425));
  }
  function il() {
  }
  var Ao = null, Uo = null;
  function Vo(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Bo = typeof setTimeout == "function" ? setTimeout : void 0, Xd = typeof clearTimeout == "function" ? clearTimeout : void 0, yu = typeof Promise == "function" ? Promise : void 0, Zd = typeof queueMicrotask == "function" ? queueMicrotask : typeof yu < "u" ? function(e) {
    return yu.resolve(null).then(e).catch(Jd);
  } : Bo;
  function Jd(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Wo(e, t) {
    var n = t, r = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), ur(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = l;
    } while (n);
    ur(t);
  }
  function $t(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function wu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var In = Math.random().toString(36).slice(2), St = "__reactFiber$" + In, wr = "__reactProps$" + In, Pt = "__reactContainer$" + In, Ho = "__reactEvents$" + In, qd = "__reactListeners$" + In, bd = "__reactHandles$" + In;
  function an(e) {
    var t = e[St];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Pt] || n[St]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = wu(e); e !== null; ) {
          if (n = e[St]) return n;
          e = wu(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function kr(e) {
    return e = e[St] || e[Pt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Mn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(u(33));
  }
  function sl(e) {
    return e[wr] || null;
  }
  var $o = [], On = -1;
  function Qt(e) {
    return { current: e };
  }
  function xe(e) {
    0 > On || (e.current = $o[On], $o[On] = null, On--);
  }
  function ye(e, t) {
    On++, $o[On] = e.current, e.current = t;
  }
  var Gt = {}, He = Qt(Gt), Ze = Qt(!1), cn = Gt;
  function Dn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Gt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, o;
    for (o in n) l[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function Je(e) {
    return e = e.childContextTypes, e != null;
  }
  function ul() {
    xe(Ze), xe(He);
  }
  function ku(e, t, n) {
    if (He.current !== Gt) throw Error(u(168));
    ye(He, t), ye(Ze, n);
  }
  function xu(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(u(108, ue(e) || "Unknown", l));
    return y({}, n, r);
  }
  function al(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Gt, cn = He.current, ye(He, e), ye(Ze, Ze.current), !0;
  }
  function Su(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(u(169));
    n ? (e = xu(e, t, cn), r.__reactInternalMemoizedMergedChildContext = e, xe(Ze), xe(He), ye(He, e)) : xe(Ze), ye(Ze, n);
  }
  var zt = null, cl = !1, Qo = !1;
  function Cu(e) {
    zt === null ? zt = [e] : zt.push(e);
  }
  function ef(e) {
    cl = !0, Cu(e);
  }
  function Kt() {
    if (!Qo && zt !== null) {
      Qo = !0;
      var e = 0, t = de;
      try {
        var n = zt;
        for (de = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        zt = null, cl = !1;
      } catch (l) {
        throw zt !== null && (zt = zt.slice(e + 1)), Ns(po, Kt), l;
      } finally {
        de = t, Qo = !1;
      }
    }
    return null;
  }
  var Fn = [], An = 0, dl = null, fl = 0, ut = [], at = 0, dn = null, Rt = 1, Tt = "";
  function fn(e, t) {
    Fn[An++] = fl, Fn[An++] = dl, dl = e, fl = t;
  }
  function Eu(e, t, n) {
    ut[at++] = Rt, ut[at++] = Tt, ut[at++] = dn, dn = e;
    var r = Rt;
    e = Tt;
    var l = 32 - mt(r) - 1;
    r &= ~(1 << l), n += 1;
    var o = 32 - mt(t) + l;
    if (30 < o) {
      var i = l - l % 5;
      o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Rt = 1 << 32 - mt(t) + l | n << l | r, Tt = o + e;
    } else Rt = 1 << o | n << l | r, Tt = e;
  }
  function Go(e) {
    e.return !== null && (fn(e, 1), Eu(e, 1, 0));
  }
  function Ko(e) {
    for (; e === dl; ) dl = Fn[--An], Fn[An] = null, fl = Fn[--An], Fn[An] = null;
    for (; e === dn; ) dn = ut[--at], ut[at] = null, Tt = ut[--at], ut[at] = null, Rt = ut[--at], ut[at] = null;
  }
  var lt = null, ot = null, Se = !1, gt = null;
  function Nu(e, t) {
    var n = pt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function _u(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, lt = e, ot = $t(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, lt = e, ot = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = dn !== null ? { id: Rt, overflow: Tt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = pt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, lt = e, ot = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Yo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Xo(e) {
    if (Se) {
      var t = ot;
      if (t) {
        var n = t;
        if (!_u(e, t)) {
          if (Yo(e)) throw Error(u(418));
          t = $t(n.nextSibling);
          var r = lt;
          t && _u(e, t) ? Nu(r, n) : (e.flags = e.flags & -4097 | 2, Se = !1, lt = e);
        }
      } else {
        if (Yo(e)) throw Error(u(418));
        e.flags = e.flags & -4097 | 2, Se = !1, lt = e;
      }
    }
  }
  function Pu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    lt = e;
  }
  function pl(e) {
    if (e !== lt) return !1;
    if (!Se) return Pu(e), Se = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Vo(e.type, e.memoizedProps)), t && (t = ot)) {
      if (Yo(e)) throw zu(), Error(u(418));
      for (; t; ) Nu(e, t), t = $t(t.nextSibling);
    }
    if (Pu(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(u(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                ot = $t(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        ot = null;
      }
    } else ot = lt ? $t(e.stateNode.nextSibling) : null;
    return !0;
  }
  function zu() {
    for (var e = ot; e; ) e = $t(e.nextSibling);
  }
  function Un() {
    ot = lt = null, Se = !1;
  }
  function Zo(e) {
    gt === null ? gt = [e] : gt.push(e);
  }
  var tf = ge.ReactCurrentBatchConfig;
  function xr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(u(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(u(147, e));
        var l = r, o = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
          var a = l.refs;
          i === null ? delete a[o] : a[o] = i;
        }, t._stringRef = o, t);
      }
      if (typeof e != "string") throw Error(u(284));
      if (!n._owner) throw Error(u(290, e));
    }
    return e;
  }
  function ml(e, t) {
    throw e = Object.prototype.toString.call(t), Error(u(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Ru(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Tu(e) {
    function t(m, d) {
      if (e) {
        var h = m.deletions;
        h === null ? (m.deletions = [d], m.flags |= 16) : h.push(d);
      }
    }
    function n(m, d) {
      if (!e) return null;
      for (; d !== null; ) t(m, d), d = d.sibling;
      return null;
    }
    function r(m, d) {
      for (m = /* @__PURE__ */ new Map(); d !== null; ) d.key !== null ? m.set(d.key, d) : m.set(d.index, d), d = d.sibling;
      return m;
    }
    function l(m, d) {
      return m = tn(m, d), m.index = 0, m.sibling = null, m;
    }
    function o(m, d, h) {
      return m.index = h, e ? (h = m.alternate, h !== null ? (h = h.index, h < d ? (m.flags |= 2, d) : h) : (m.flags |= 2, d)) : (m.flags |= 1048576, d);
    }
    function i(m) {
      return e && m.alternate === null && (m.flags |= 2), m;
    }
    function a(m, d, h, N) {
      return d === null || d.tag !== 6 ? (d = Bi(h, m.mode, N), d.return = m, d) : (d = l(d, h), d.return = m, d);
    }
    function c(m, d, h, N) {
      var U = h.type;
      return U === Ce ? x(m, d, h.props.children, N, h.key) : d !== null && (d.elementType === U || typeof U == "object" && U !== null && U.$$typeof === he && Ru(U) === d.type) ? (N = l(d, h.props), N.ref = xr(m, d, h), N.return = m, N) : (N = Al(h.type, h.key, h.props, null, m.mode, N), N.ref = xr(m, d, h), N.return = m, N);
    }
    function g(m, d, h, N) {
      return d === null || d.tag !== 4 || d.stateNode.containerInfo !== h.containerInfo || d.stateNode.implementation !== h.implementation ? (d = Wi(h, m.mode, N), d.return = m, d) : (d = l(d, h.children || []), d.return = m, d);
    }
    function x(m, d, h, N, U) {
      return d === null || d.tag !== 7 ? (d = kn(h, m.mode, N, U), d.return = m, d) : (d = l(d, h), d.return = m, d);
    }
    function S(m, d, h) {
      if (typeof d == "string" && d !== "" || typeof d == "number") return d = Bi("" + d, m.mode, h), d.return = m, d;
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case ze:
            return h = Al(d.type, d.key, d.props, null, m.mode, h), h.ref = xr(m, null, d), h.return = m, h;
          case ve:
            return d = Wi(d, m.mode, h), d.return = m, d;
          case he:
            var N = d._init;
            return S(m, N(d._payload), h);
        }
        if (Zn(d) || $(d)) return d = kn(d, m.mode, h, null), d.return = m, d;
        ml(m, d);
      }
      return null;
    }
    function k(m, d, h, N) {
      var U = d !== null ? d.key : null;
      if (typeof h == "string" && h !== "" || typeof h == "number") return U !== null ? null : a(m, d, "" + h, N);
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case ze:
            return h.key === U ? c(m, d, h, N) : null;
          case ve:
            return h.key === U ? g(m, d, h, N) : null;
          case he:
            return U = h._init, k(
              m,
              d,
              U(h._payload),
              N
            );
        }
        if (Zn(h) || $(h)) return U !== null ? null : x(m, d, h, N, null);
        ml(m, h);
      }
      return null;
    }
    function T(m, d, h, N, U) {
      if (typeof N == "string" && N !== "" || typeof N == "number") return m = m.get(h) || null, a(d, m, "" + N, U);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case ze:
            return m = m.get(N.key === null ? h : N.key) || null, c(d, m, N, U);
          case ve:
            return m = m.get(N.key === null ? h : N.key) || null, g(d, m, N, U);
          case he:
            var Q = N._init;
            return T(m, d, h, Q(N._payload), U);
        }
        if (Zn(N) || $(N)) return m = m.get(h) || null, x(d, m, N, U, null);
        ml(d, N);
      }
      return null;
    }
    function M(m, d, h, N) {
      for (var U = null, Q = null, G = d, Z = d = 0, Ae = null; G !== null && Z < h.length; Z++) {
        G.index > Z ? (Ae = G, G = null) : Ae = G.sibling;
        var se = k(m, G, h[Z], N);
        if (se === null) {
          G === null && (G = Ae);
          break;
        }
        e && G && se.alternate === null && t(m, G), d = o(se, d, Z), Q === null ? U = se : Q.sibling = se, Q = se, G = Ae;
      }
      if (Z === h.length) return n(m, G), Se && fn(m, Z), U;
      if (G === null) {
        for (; Z < h.length; Z++) G = S(m, h[Z], N), G !== null && (d = o(G, d, Z), Q === null ? U = G : Q.sibling = G, Q = G);
        return Se && fn(m, Z), U;
      }
      for (G = r(m, G); Z < h.length; Z++) Ae = T(G, m, Z, h[Z], N), Ae !== null && (e && Ae.alternate !== null && G.delete(Ae.key === null ? Z : Ae.key), d = o(Ae, d, Z), Q === null ? U = Ae : Q.sibling = Ae, Q = Ae);
      return e && G.forEach(function(nn) {
        return t(m, nn);
      }), Se && fn(m, Z), U;
    }
    function A(m, d, h, N) {
      var U = $(h);
      if (typeof U != "function") throw Error(u(150));
      if (h = U.call(h), h == null) throw Error(u(151));
      for (var Q = U = null, G = d, Z = d = 0, Ae = null, se = h.next(); G !== null && !se.done; Z++, se = h.next()) {
        G.index > Z ? (Ae = G, G = null) : Ae = G.sibling;
        var nn = k(m, G, se.value, N);
        if (nn === null) {
          G === null && (G = Ae);
          break;
        }
        e && G && nn.alternate === null && t(m, G), d = o(nn, d, Z), Q === null ? U = nn : Q.sibling = nn, Q = nn, G = Ae;
      }
      if (se.done) return n(
        m,
        G
      ), Se && fn(m, Z), U;
      if (G === null) {
        for (; !se.done; Z++, se = h.next()) se = S(m, se.value, N), se !== null && (d = o(se, d, Z), Q === null ? U = se : Q.sibling = se, Q = se);
        return Se && fn(m, Z), U;
      }
      for (G = r(m, G); !se.done; Z++, se = h.next()) se = T(G, m, Z, se.value, N), se !== null && (e && se.alternate !== null && G.delete(se.key === null ? Z : se.key), d = o(se, d, Z), Q === null ? U = se : Q.sibling = se, Q = se);
      return e && G.forEach(function(Of) {
        return t(m, Of);
      }), Se && fn(m, Z), U;
    }
    function Te(m, d, h, N) {
      if (typeof h == "object" && h !== null && h.type === Ce && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case ze:
            e: {
              for (var U = h.key, Q = d; Q !== null; ) {
                if (Q.key === U) {
                  if (U = h.type, U === Ce) {
                    if (Q.tag === 7) {
                      n(m, Q.sibling), d = l(Q, h.props.children), d.return = m, m = d;
                      break e;
                    }
                  } else if (Q.elementType === U || typeof U == "object" && U !== null && U.$$typeof === he && Ru(U) === Q.type) {
                    n(m, Q.sibling), d = l(Q, h.props), d.ref = xr(m, Q, h), d.return = m, m = d;
                    break e;
                  }
                  n(m, Q);
                  break;
                } else t(m, Q);
                Q = Q.sibling;
              }
              h.type === Ce ? (d = kn(h.props.children, m.mode, N, h.key), d.return = m, m = d) : (N = Al(h.type, h.key, h.props, null, m.mode, N), N.ref = xr(m, d, h), N.return = m, m = N);
            }
            return i(m);
          case ve:
            e: {
              for (Q = h.key; d !== null; ) {
                if (d.key === Q) if (d.tag === 4 && d.stateNode.containerInfo === h.containerInfo && d.stateNode.implementation === h.implementation) {
                  n(m, d.sibling), d = l(d, h.children || []), d.return = m, m = d;
                  break e;
                } else {
                  n(m, d);
                  break;
                }
                else t(m, d);
                d = d.sibling;
              }
              d = Wi(h, m.mode, N), d.return = m, m = d;
            }
            return i(m);
          case he:
            return Q = h._init, Te(m, d, Q(h._payload), N);
        }
        if (Zn(h)) return M(m, d, h, N);
        if ($(h)) return A(m, d, h, N);
        ml(m, h);
      }
      return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, d !== null && d.tag === 6 ? (n(m, d.sibling), d = l(d, h), d.return = m, m = d) : (n(m, d), d = Bi(h, m.mode, N), d.return = m, m = d), i(m)) : n(m, d);
    }
    return Te;
  }
  var Vn = Tu(!0), Lu = Tu(!1), hl = Qt(null), gl = null, Bn = null, Jo = null;
  function qo() {
    Jo = Bn = gl = null;
  }
  function bo(e) {
    var t = hl.current;
    xe(hl), e._currentValue = t;
  }
  function ei(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Wn(e, t) {
    gl = e, Jo = Bn = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (qe = !0), e.firstContext = null);
  }
  function ct(e) {
    var t = e._currentValue;
    if (Jo !== e) if (e = { context: e, memoizedValue: t, next: null }, Bn === null) {
      if (gl === null) throw Error(u(308));
      Bn = e, gl.dependencies = { lanes: 0, firstContext: e };
    } else Bn = Bn.next = e;
    return t;
  }
  var pn = null;
  function ti(e) {
    pn === null ? pn = [e] : pn.push(e);
  }
  function ju(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, ti(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Lt(e, r);
  }
  function Lt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Yt = !1;
  function ni(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Iu(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function jt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Xt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (oe & 2) !== 0) {
      var l = r.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Lt(e, n);
    }
    return l = r.interleaved, l === null ? (t.next = t, ti(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Lt(e, n);
  }
  function vl(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, go(e, n);
    }
  }
  function Mu(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var l = null, o = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          o === null ? l = o = i : o = o.next = i, n = n.next;
        } while (n !== null);
        o === null ? l = o = t : o = o.next = t;
      } else l = o = t;
      n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function yl(e, t, n, r) {
    var l = e.updateQueue;
    Yt = !1;
    var o = l.firstBaseUpdate, i = l.lastBaseUpdate, a = l.shared.pending;
    if (a !== null) {
      l.shared.pending = null;
      var c = a, g = c.next;
      c.next = null, i === null ? o = g : i.next = g, i = c;
      var x = e.alternate;
      x !== null && (x = x.updateQueue, a = x.lastBaseUpdate, a !== i && (a === null ? x.firstBaseUpdate = g : a.next = g, x.lastBaseUpdate = c));
    }
    if (o !== null) {
      var S = l.baseState;
      i = 0, x = g = c = null, a = o;
      do {
        var k = a.lane, T = a.eventTime;
        if ((r & k) === k) {
          x !== null && (x = x.next = {
            eventTime: T,
            lane: 0,
            tag: a.tag,
            payload: a.payload,
            callback: a.callback,
            next: null
          });
          e: {
            var M = e, A = a;
            switch (k = t, T = n, A.tag) {
              case 1:
                if (M = A.payload, typeof M == "function") {
                  S = M.call(T, S, k);
                  break e;
                }
                S = M;
                break e;
              case 3:
                M.flags = M.flags & -65537 | 128;
              case 0:
                if (M = A.payload, k = typeof M == "function" ? M.call(T, S, k) : M, k == null) break e;
                S = y({}, S, k);
                break e;
              case 2:
                Yt = !0;
            }
          }
          a.callback !== null && a.lane !== 0 && (e.flags |= 64, k = l.effects, k === null ? l.effects = [a] : k.push(a));
        } else T = { eventTime: T, lane: k, tag: a.tag, payload: a.payload, callback: a.callback, next: null }, x === null ? (g = x = T, c = S) : x = x.next = T, i |= k;
        if (a = a.next, a === null) {
          if (a = l.shared.pending, a === null) break;
          k = a, a = k.next, k.next = null, l.lastBaseUpdate = k, l.shared.pending = null;
        }
      } while (!0);
      if (x === null && (c = S), l.baseState = c, l.firstBaseUpdate = g, l.lastBaseUpdate = x, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          i |= l.lane, l = l.next;
        while (l !== t);
      } else o === null && (l.shared.lanes = 0);
      gn |= i, e.lanes = i, e.memoizedState = S;
    }
  }
  function Ou(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function") throw Error(u(191, l));
        l.call(r);
      }
    }
  }
  var Sr = {}, Ct = Qt(Sr), Cr = Qt(Sr), Er = Qt(Sr);
  function mn(e) {
    if (e === Sr) throw Error(u(174));
    return e;
  }
  function ri(e, t) {
    switch (ye(Er, t), ye(Cr, e), ye(Ct, Sr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : ro(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ro(t, e);
    }
    xe(Ct), ye(Ct, t);
  }
  function Hn() {
    xe(Ct), xe(Cr), xe(Er);
  }
  function Du(e) {
    mn(Er.current);
    var t = mn(Ct.current), n = ro(t, e.type);
    t !== n && (ye(Cr, e), ye(Ct, n));
  }
  function li(e) {
    Cr.current === e && (xe(Ct), xe(Cr));
  }
  var Ee = Qt(0);
  function wl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var oi = [];
  function ii() {
    for (var e = 0; e < oi.length; e++) oi[e]._workInProgressVersionPrimary = null;
    oi.length = 0;
  }
  var kl = ge.ReactCurrentDispatcher, si = ge.ReactCurrentBatchConfig, hn = 0, Ne = null, Ie = null, De = null, xl = !1, Nr = !1, _r = 0, nf = 0;
  function $e() {
    throw Error(u(321));
  }
  function ui(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!ht(e[n], t[n])) return !1;
    return !0;
  }
  function ai(e, t, n, r, l, o) {
    if (hn = o, Ne = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, kl.current = e === null || e.memoizedState === null ? sf : uf, e = n(r, l), Nr) {
      o = 0;
      do {
        if (Nr = !1, _r = 0, 25 <= o) throw Error(u(301));
        o += 1, De = Ie = null, t.updateQueue = null, kl.current = af, e = n(r, l);
      } while (Nr);
    }
    if (kl.current = El, t = Ie !== null && Ie.next !== null, hn = 0, De = Ie = Ne = null, xl = !1, t) throw Error(u(300));
    return e;
  }
  function ci() {
    var e = _r !== 0;
    return _r = 0, e;
  }
  function Et() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return De === null ? Ne.memoizedState = De = e : De = De.next = e, De;
  }
  function dt() {
    if (Ie === null) {
      var e = Ne.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ie.next;
    var t = De === null ? Ne.memoizedState : De.next;
    if (t !== null) De = t, Ie = e;
    else {
      if (e === null) throw Error(u(310));
      Ie = e, e = { memoizedState: Ie.memoizedState, baseState: Ie.baseState, baseQueue: Ie.baseQueue, queue: Ie.queue, next: null }, De === null ? Ne.memoizedState = De = e : De = De.next = e;
    }
    return De;
  }
  function Pr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function di(e) {
    var t = dt(), n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var r = Ie, l = r.baseQueue, o = n.pending;
    if (o !== null) {
      if (l !== null) {
        var i = l.next;
        l.next = o.next, o.next = i;
      }
      r.baseQueue = l = o, n.pending = null;
    }
    if (l !== null) {
      o = l.next, r = r.baseState;
      var a = i = null, c = null, g = o;
      do {
        var x = g.lane;
        if ((hn & x) === x) c !== null && (c = c.next = { lane: 0, action: g.action, hasEagerState: g.hasEagerState, eagerState: g.eagerState, next: null }), r = g.hasEagerState ? g.eagerState : e(r, g.action);
        else {
          var S = {
            lane: x,
            action: g.action,
            hasEagerState: g.hasEagerState,
            eagerState: g.eagerState,
            next: null
          };
          c === null ? (a = c = S, i = r) : c = c.next = S, Ne.lanes |= x, gn |= x;
        }
        g = g.next;
      } while (g !== null && g !== o);
      c === null ? i = r : c.next = a, ht(r, t.memoizedState) || (qe = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = c, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        o = l.lane, Ne.lanes |= o, gn |= o, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function fi(e) {
    var t = dt(), n = t.queue;
    if (n === null) throw Error(u(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, l = n.pending, o = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var i = l = l.next;
      do
        o = e(o, i.action), i = i.next;
      while (i !== l);
      ht(o, t.memoizedState) || (qe = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
    }
    return [o, r];
  }
  function Fu() {
  }
  function Au(e, t) {
    var n = Ne, r = dt(), l = t(), o = !ht(r.memoizedState, l);
    if (o && (r.memoizedState = l, qe = !0), r = r.queue, pi(Bu.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || De !== null && De.memoizedState.tag & 1) {
      if (n.flags |= 2048, zr(9, Vu.bind(null, n, r, l, t), void 0, null), Fe === null) throw Error(u(349));
      (hn & 30) !== 0 || Uu(n, t, l);
    }
    return l;
  }
  function Uu(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ne.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ne.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Vu(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Wu(t) && Hu(e);
  }
  function Bu(e, t, n) {
    return n(function() {
      Wu(t) && Hu(e);
    });
  }
  function Wu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !ht(e, n);
    } catch {
      return !0;
    }
  }
  function Hu(e) {
    var t = Lt(e, 1);
    t !== null && kt(t, e, 1, -1);
  }
  function $u(e) {
    var t = Et();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Pr, lastRenderedState: e }, t.queue = e, e = e.dispatch = of.bind(null, Ne, e), [t.memoizedState, e];
  }
  function zr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Ne.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ne.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Qu() {
    return dt().memoizedState;
  }
  function Sl(e, t, n, r) {
    var l = Et();
    Ne.flags |= e, l.memoizedState = zr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function Cl(e, t, n, r) {
    var l = dt();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Ie !== null) {
      var i = Ie.memoizedState;
      if (o = i.destroy, r !== null && ui(r, i.deps)) {
        l.memoizedState = zr(t, n, o, r);
        return;
      }
    }
    Ne.flags |= e, l.memoizedState = zr(1 | t, n, o, r);
  }
  function Gu(e, t) {
    return Sl(8390656, 8, e, t);
  }
  function pi(e, t) {
    return Cl(2048, 8, e, t);
  }
  function Ku(e, t) {
    return Cl(4, 2, e, t);
  }
  function Yu(e, t) {
    return Cl(4, 4, e, t);
  }
  function Xu(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Zu(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Cl(4, 4, Xu.bind(null, t, e), n);
  }
  function mi() {
  }
  function Ju(e, t) {
    var n = dt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ui(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function qu(e, t) {
    var n = dt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ui(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function bu(e, t, n) {
    return (hn & 21) === 0 ? (e.baseState && (e.baseState = !1, qe = !0), e.memoizedState = n) : (ht(n, t) || (n = Rs(), Ne.lanes |= n, gn |= n, e.baseState = !0), t);
  }
  function rf(e, t) {
    var n = de;
    de = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = si.transition;
    si.transition = {};
    try {
      e(!1), t();
    } finally {
      de = n, si.transition = r;
    }
  }
  function ea() {
    return dt().memoizedState;
  }
  function lf(e, t, n) {
    var r = bt(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, ta(e)) na(t, n);
    else if (n = ju(e, t, n, r), n !== null) {
      var l = Xe();
      kt(n, e, r, l), ra(n, t, r);
    }
  }
  function of(e, t, n) {
    var r = bt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (ta(e)) na(t, l);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
        var i = t.lastRenderedState, a = o(i, n);
        if (l.hasEagerState = !0, l.eagerState = a, ht(a, i)) {
          var c = t.interleaved;
          c === null ? (l.next = l, ti(t)) : (l.next = c.next, c.next = l), t.interleaved = l;
          return;
        }
      } catch {
      }
      n = ju(e, t, l, r), n !== null && (l = Xe(), kt(n, e, r, l), ra(n, t, r));
    }
  }
  function ta(e) {
    var t = e.alternate;
    return e === Ne || t !== null && t === Ne;
  }
  function na(e, t) {
    Nr = xl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function ra(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, go(e, n);
    }
  }
  var El = { readContext: ct, useCallback: $e, useContext: $e, useEffect: $e, useImperativeHandle: $e, useInsertionEffect: $e, useLayoutEffect: $e, useMemo: $e, useReducer: $e, useRef: $e, useState: $e, useDebugValue: $e, useDeferredValue: $e, useTransition: $e, useMutableSource: $e, useSyncExternalStore: $e, useId: $e, unstable_isNewReconciler: !1 }, sf = { readContext: ct, useCallback: function(e, t) {
    return Et().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: ct, useEffect: Gu, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Sl(
      4194308,
      4,
      Xu.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return Sl(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Sl(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Et();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = Et();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = lf.bind(null, Ne, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = Et();
    return e = { current: e }, t.memoizedState = e;
  }, useState: $u, useDebugValue: mi, useDeferredValue: function(e) {
    return Et().memoizedState = e;
  }, useTransition: function() {
    var e = $u(!1), t = e[0];
    return e = rf.bind(null, e[1]), Et().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = Ne, l = Et();
    if (Se) {
      if (n === void 0) throw Error(u(407));
      n = n();
    } else {
      if (n = t(), Fe === null) throw Error(u(349));
      (hn & 30) !== 0 || Uu(r, t, n);
    }
    l.memoizedState = n;
    var o = { value: n, getSnapshot: t };
    return l.queue = o, Gu(Bu.bind(
      null,
      r,
      o,
      e
    ), [e]), r.flags |= 2048, zr(9, Vu.bind(null, r, o, n, t), void 0, null), n;
  }, useId: function() {
    var e = Et(), t = Fe.identifierPrefix;
    if (Se) {
      var n = Tt, r = Rt;
      n = (r & ~(1 << 32 - mt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = _r++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = nf++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, uf = {
    readContext: ct,
    useCallback: Ju,
    useContext: ct,
    useEffect: pi,
    useImperativeHandle: Zu,
    useInsertionEffect: Ku,
    useLayoutEffect: Yu,
    useMemo: qu,
    useReducer: di,
    useRef: Qu,
    useState: function() {
      return di(Pr);
    },
    useDebugValue: mi,
    useDeferredValue: function(e) {
      var t = dt();
      return bu(t, Ie.memoizedState, e);
    },
    useTransition: function() {
      var e = di(Pr)[0], t = dt().memoizedState;
      return [e, t];
    },
    useMutableSource: Fu,
    useSyncExternalStore: Au,
    useId: ea,
    unstable_isNewReconciler: !1
  }, af = { readContext: ct, useCallback: Ju, useContext: ct, useEffect: pi, useImperativeHandle: Zu, useInsertionEffect: Ku, useLayoutEffect: Yu, useMemo: qu, useReducer: fi, useRef: Qu, useState: function() {
    return fi(Pr);
  }, useDebugValue: mi, useDeferredValue: function(e) {
    var t = dt();
    return Ie === null ? t.memoizedState = e : bu(t, Ie.memoizedState, e);
  }, useTransition: function() {
    var e = fi(Pr)[0], t = dt().memoizedState;
    return [e, t];
  }, useMutableSource: Fu, useSyncExternalStore: Au, useId: ea, unstable_isNewReconciler: !1 };
  function vt(e, t) {
    if (e && e.defaultProps) {
      t = y({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function hi(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : y({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Nl = { isMounted: function(e) {
    return (e = e._reactInternals) ? un(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = Xe(), l = bt(e), o = jt(r, l);
    o.payload = t, n != null && (o.callback = n), t = Xt(e, o, l), t !== null && (kt(t, e, l, r), vl(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = Xe(), l = bt(e), o = jt(r, l);
    o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Xt(e, o, l), t !== null && (kt(t, e, l, r), vl(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Xe(), r = bt(e), l = jt(n, r);
    l.tag = 2, t != null && (l.callback = t), t = Xt(e, l, r), t !== null && (kt(t, e, r, n), vl(t, e, r));
  } };
  function la(e, t, n, r, l, o, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !mr(n, r) || !mr(l, o) : !0;
  }
  function oa(e, t, n) {
    var r = !1, l = Gt, o = t.contextType;
    return typeof o == "object" && o !== null ? o = ct(o) : (l = Je(t) ? cn : He.current, r = t.contextTypes, o = (r = r != null) ? Dn(e, l) : Gt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Nl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
  }
  function ia(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Nl.enqueueReplaceState(t, t.state, null);
  }
  function gi(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, ni(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? l.context = ct(o) : (o = Je(t) ? cn : He.current, l.context = Dn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (hi(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Nl.enqueueReplaceState(l, l.state, null), yl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function $n(e, t) {
    try {
      var n = "", r = t;
      do
        n += Y(r), r = r.return;
      while (r);
      var l = n;
    } catch (o) {
      l = `
Error generating stack: ` + o.message + `
` + o.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function vi(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function yi(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var cf = typeof WeakMap == "function" ? WeakMap : Map;
  function sa(e, t, n) {
    n = jt(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      jl || (jl = !0, Ii = r), yi(e, t);
    }, n;
  }
  function ua(e, t, n) {
    n = jt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      n.payload = function() {
        return r(l);
      }, n.callback = function() {
        yi(e, t);
      };
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
      yi(e, t), typeof r != "function" && (Jt === null ? Jt = /* @__PURE__ */ new Set([this]) : Jt.add(this));
      var i = t.stack;
      this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
    }), n;
  }
  function aa(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new cf();
      var l = /* @__PURE__ */ new Set();
      r.set(t, l);
    } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
    l.has(n) || (l.add(n), e = Ef.bind(null, e, t, n), t.then(e, e));
  }
  function ca(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function da(e, t, n, r, l) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = jt(-1, 1), t.tag = 2, Xt(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var df = ge.ReactCurrentOwner, qe = !1;
  function Ye(e, t, n, r) {
    t.child = e === null ? Lu(t, null, n, r) : Vn(t, e.child, n, r);
  }
  function fa(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return Wn(t, l), r = ai(e, t, n, r, o, l), n = ci(), e !== null && !qe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, It(e, t, l)) : (Se && n && Go(t), t.flags |= 1, Ye(e, t, r, l), t.child);
  }
  function pa(e, t, n, r, l) {
    if (e === null) {
      var o = n.type;
      return typeof o == "function" && !Vi(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, ma(e, t, o, r, l)) : (e = Al(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (o = e.child, (e.lanes & l) === 0) {
      var i = o.memoizedProps;
      if (n = n.compare, n = n !== null ? n : mr, n(i, r) && e.ref === t.ref) return It(e, t, l);
    }
    return t.flags |= 1, e = tn(o, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function ma(e, t, n, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (mr(o, r) && e.ref === t.ref) if (qe = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (qe = !0);
      else return t.lanes = e.lanes, It(e, t, l);
    }
    return wi(e, t, n, r, l);
  }
  function ha(e, t, n) {
    var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ye(Gn, it), it |= n;
    else {
      if ((n & 1073741824) === 0) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ye(Gn, it), it |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, ye(Gn, it), it |= r;
    }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, ye(Gn, it), it |= r;
    return Ye(e, t, l, n), t.child;
  }
  function ga(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function wi(e, t, n, r, l) {
    var o = Je(n) ? cn : He.current;
    return o = Dn(t, o), Wn(t, l), n = ai(e, t, n, r, o, l), r = ci(), e !== null && !qe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, It(e, t, l)) : (Se && r && Go(t), t.flags |= 1, Ye(e, t, n, l), t.child);
  }
  function va(e, t, n, r, l) {
    if (Je(n)) {
      var o = !0;
      al(t);
    } else o = !1;
    if (Wn(t, l), t.stateNode === null) Pl(e, t), oa(t, n, r), gi(t, n, r, l), r = !0;
    else if (e === null) {
      var i = t.stateNode, a = t.memoizedProps;
      i.props = a;
      var c = i.context, g = n.contextType;
      typeof g == "object" && g !== null ? g = ct(g) : (g = Je(n) ? cn : He.current, g = Dn(t, g));
      var x = n.getDerivedStateFromProps, S = typeof x == "function" || typeof i.getSnapshotBeforeUpdate == "function";
      S || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== r || c !== g) && ia(t, i, r, g), Yt = !1;
      var k = t.memoizedState;
      i.state = k, yl(t, r, i, l), c = t.memoizedState, a !== r || k !== c || Ze.current || Yt ? (typeof x == "function" && (hi(t, n, x, r), c = t.memoizedState), (a = Yt || la(t, n, a, r, k, c, g)) ? (S || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), i.props = r, i.state = c, i.context = g, r = a) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      i = t.stateNode, Iu(e, t), a = t.memoizedProps, g = t.type === t.elementType ? a : vt(t.type, a), i.props = g, S = t.pendingProps, k = i.context, c = n.contextType, typeof c == "object" && c !== null ? c = ct(c) : (c = Je(n) ? cn : He.current, c = Dn(t, c));
      var T = n.getDerivedStateFromProps;
      (x = typeof T == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (a !== S || k !== c) && ia(t, i, r, c), Yt = !1, k = t.memoizedState, i.state = k, yl(t, r, i, l);
      var M = t.memoizedState;
      a !== S || k !== M || Ze.current || Yt ? (typeof T == "function" && (hi(t, n, T, r), M = t.memoizedState), (g = Yt || la(t, n, g, r, k, M, c) || !1) ? (x || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, M, c), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, M, c)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && k === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && k === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = M), i.props = r, i.state = M, i.context = c, r = g) : (typeof i.componentDidUpdate != "function" || a === e.memoizedProps && k === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && k === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return ki(e, t, n, r, o, l);
  }
  function ki(e, t, n, r, l, o) {
    ga(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return l && Su(t, n, !1), It(e, t, o);
    r = t.stateNode, df.current = t;
    var a = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && i ? (t.child = Vn(t, e.child, null, o), t.child = Vn(t, null, a, o)) : Ye(e, t, a, o), t.memoizedState = r.state, l && Su(t, n, !0), t.child;
  }
  function ya(e) {
    var t = e.stateNode;
    t.pendingContext ? ku(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ku(e, t.context, !1), ri(e, t.containerInfo);
  }
  function wa(e, t, n, r, l) {
    return Un(), Zo(l), t.flags |= 256, Ye(e, t, n, r), t.child;
  }
  var xi = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Si(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function ka(e, t, n) {
    var r = t.pendingProps, l = Ee.current, o = !1, i = (t.flags & 128) !== 0, a;
    if ((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), a ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), ye(Ee, l & 1), e === null)
      return Xo(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, (r & 1) === 0 && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = Ul(i, r, 0, null), e = kn(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = Si(n), t.memoizedState = xi, e) : Ci(t, i));
    if (l = e.memoizedState, l !== null && (a = l.dehydrated, a !== null)) return ff(e, t, i, r, a, l, n);
    if (o) {
      o = r.fallback, i = t.mode, l = e.child, a = l.sibling;
      var c = { mode: "hidden", children: r.children };
      return (i & 1) === 0 && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = tn(l, c), r.subtreeFlags = l.subtreeFlags & 14680064), a !== null ? o = tn(a, o) : (o = kn(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? Si(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = xi, r;
    }
    return o = e.child, e = o.sibling, r = tn(o, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function Ci(e, t) {
    return t = Ul({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function _l(e, t, n, r) {
    return r !== null && Zo(r), Vn(t, e.child, null, n), e = Ci(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function ff(e, t, n, r, l, o, i) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = vi(Error(u(422))), _l(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = Ul({ mode: "visible", children: r.children }, l, 0, null), o = kn(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, (t.mode & 1) !== 0 && Vn(t, e.child, null, i), t.child.memoizedState = Si(i), t.memoizedState = xi, o);
    if ((t.mode & 1) === 0) return _l(e, t, i, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r) var a = r.dgst;
      return r = a, o = Error(u(419)), r = vi(o, r, void 0), _l(e, t, i, r);
    }
    if (a = (i & e.childLanes) !== 0, qe || a) {
      if (r = Fe, r !== null) {
        switch (i & -i) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
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
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        l = (l & (r.suspendedLanes | i)) !== 0 ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, Lt(e, l), kt(r, e, l, -1));
      }
      return Ui(), r = vi(Error(u(421))), _l(e, t, i, r);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Nf.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, ot = $t(l.nextSibling), lt = t, Se = !0, gt = null, e !== null && (ut[at++] = Rt, ut[at++] = Tt, ut[at++] = dn, Rt = e.id, Tt = e.overflow, dn = t), t = Ci(t, r.children), t.flags |= 4096, t);
  }
  function xa(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), ei(e.return, t, n);
  }
  function Ei(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
  }
  function Sa(e, t, n) {
    var r = t.pendingProps, l = r.revealOrder, o = r.tail;
    if (Ye(e, t, r.children, n), r = Ee.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && xa(e, n, t);
        else if (e.tag === 19) xa(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      r &= 1;
    }
    if (ye(Ee, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && wl(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Ei(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && wl(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        Ei(t, !0, n, null, o);
        break;
      case "together":
        Ei(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Pl(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function It(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), gn |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(u(153));
    if (t.child !== null) {
      for (e = t.child, n = tn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = tn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function pf(e, t, n) {
    switch (t.tag) {
      case 3:
        ya(t), Un();
        break;
      case 5:
        Du(t);
        break;
      case 1:
        Je(t.type) && al(t);
        break;
      case 4:
        ri(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, l = t.memoizedProps.value;
        ye(hl, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (ye(Ee, Ee.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? ka(e, t, n) : (ye(Ee, Ee.current & 1), e = It(e, t, n), e !== null ? e.sibling : null);
        ye(Ee, Ee.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return Sa(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), ye(Ee, Ee.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, ha(e, t, n);
    }
    return It(e, t, n);
  }
  var Ca, Ni, Ea, Na;
  Ca = function(e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }, Ni = function() {
  }, Ea = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = t.stateNode, mn(Ct.current);
      var o = null;
      switch (n) {
        case "input":
          l = Ft(e, l), r = Ft(e, r), o = [];
          break;
        case "select":
          l = y({}, l, { value: void 0 }), r = y({}, r, { value: void 0 }), o = [];
          break;
        case "textarea":
          l = no(e, l), r = no(e, r), o = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = il);
      }
      lo(n, r);
      var i;
      n = null;
      for (g in l) if (!r.hasOwnProperty(g) && l.hasOwnProperty(g) && l[g] != null) if (g === "style") {
        var a = l[g];
        for (i in a) a.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
      } else g !== "dangerouslySetInnerHTML" && g !== "children" && g !== "suppressContentEditableWarning" && g !== "suppressHydrationWarning" && g !== "autoFocus" && (_.hasOwnProperty(g) ? o || (o = []) : (o = o || []).push(g, null));
      for (g in r) {
        var c = r[g];
        if (a = l?.[g], r.hasOwnProperty(g) && c !== a && (c != null || a != null)) if (g === "style") if (a) {
          for (i in a) !a.hasOwnProperty(i) || c && c.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
          for (i in c) c.hasOwnProperty(i) && a[i] !== c[i] && (n || (n = {}), n[i] = c[i]);
        } else n || (o || (o = []), o.push(
          g,
          n
        )), n = c;
        else g === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, a = a ? a.__html : void 0, c != null && a !== c && (o = o || []).push(g, c)) : g === "children" ? typeof c != "string" && typeof c != "number" || (o = o || []).push(g, "" + c) : g !== "suppressContentEditableWarning" && g !== "suppressHydrationWarning" && (_.hasOwnProperty(g) ? (c != null && g === "onScroll" && ke("scroll", e), o || a === c || (o = [])) : (o = o || []).push(g, c));
      }
      n && (o = o || []).push("style", n);
      var g = o;
      (t.updateQueue = g) && (t.flags |= 4);
    }
  }, Na = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function Rr(e, t) {
    if (!Se) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
  }
  function Qe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function mf(e, t, n) {
    var r = t.pendingProps;
    switch (Ko(t), t.tag) {
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
        return Qe(t), null;
      case 1:
        return Je(t.type) && ul(), Qe(t), null;
      case 3:
        return r = t.stateNode, Hn(), xe(Ze), xe(He), ii(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (pl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, gt !== null && (Di(gt), gt = null))), Ni(e, t), Qe(t), null;
      case 5:
        li(t);
        var l = mn(Er.current);
        if (n = t.type, e !== null && t.stateNode != null) Ea(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(u(166));
            return Qe(t), null;
          }
          if (e = mn(Ct.current), pl(t)) {
            r = t.stateNode, n = t.type;
            var o = t.memoizedProps;
            switch (r[St] = t, r[wr] = o, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                ke("cancel", r), ke("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ke("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < gr.length; l++) ke(gr[l], r);
                break;
              case "source":
                ke("error", r);
                break;
              case "img":
              case "image":
              case "link":
                ke(
                  "error",
                  r
                ), ke("load", r);
                break;
              case "details":
                ke("toggle", r);
                break;
              case "input":
                os(r, o), ke("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!o.multiple }, ke("invalid", r);
                break;
              case "textarea":
                us(r, o), ke("invalid", r);
            }
            lo(n, o), l = null;
            for (var i in o) if (o.hasOwnProperty(i)) {
              var a = o[i];
              i === "children" ? typeof a == "string" ? r.textContent !== a && (o.suppressHydrationWarning !== !0 && ol(r.textContent, a, e), l = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (o.suppressHydrationWarning !== !0 && ol(
                r.textContent,
                a,
                e
              ), l = ["children", "" + a]) : _.hasOwnProperty(i) && a != null && i === "onScroll" && ke("scroll", r);
            }
            switch (n) {
              case "input":
                _t(r), ss(r, o, !0);
                break;
              case "textarea":
                _t(r), cs(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = il);
            }
            r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ds(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[St] = t, e[wr] = r, Ca(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (i = oo(n, r), n) {
                case "dialog":
                  ke("cancel", e), ke("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ke("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < gr.length; l++) ke(gr[l], e);
                  l = r;
                  break;
                case "source":
                  ke("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  ke(
                    "error",
                    e
                  ), ke("load", e), l = r;
                  break;
                case "details":
                  ke("toggle", e), l = r;
                  break;
                case "input":
                  os(e, r), l = Ft(e, r), ke("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = y({}, r, { value: void 0 }), ke("invalid", e);
                  break;
                case "textarea":
                  us(e, r), l = no(e, r), ke("invalid", e);
                  break;
                default:
                  l = r;
              }
              lo(n, l), a = l;
              for (o in a) if (a.hasOwnProperty(o)) {
                var c = a[o];
                o === "style" ? ms(e, c) : o === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && fs(e, c)) : o === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && Jn(e, c) : typeof c == "number" && Jn(e, "" + c) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (_.hasOwnProperty(o) ? c != null && o === "onScroll" && ke("scroll", e) : c != null && Le(e, o, c, i));
              }
              switch (n) {
                case "input":
                  _t(e), ss(e, r, !1);
                  break;
                case "textarea":
                  _t(e), cs(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + ie(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, o = r.value, o != null ? En(e, !!r.multiple, o, !1) : r.defaultValue != null && En(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = il);
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
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return Qe(t), null;
      case 6:
        if (e && t.stateNode != null) Na(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(u(166));
          if (n = mn(Er.current), mn(Ct.current), pl(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[St] = t, (o = r.nodeValue !== n) && (e = lt, e !== null)) switch (e.tag) {
              case 3:
                ol(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && ol(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            o && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[St] = t, t.stateNode = r;
        }
        return Qe(t), null;
      case 13:
        if (xe(Ee), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Se && ot !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) zu(), Un(), t.flags |= 98560, o = !1;
          else if (o = pl(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(u(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(u(317));
              o[St] = t;
            } else Un(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Qe(t), o = !1;
          } else gt !== null && (Di(gt), gt = null), o = !0;
          if (!o) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Ee.current & 1) !== 0 ? Me === 0 && (Me = 3) : Ui())), t.updateQueue !== null && (t.flags |= 4), Qe(t), null);
      case 4:
        return Hn(), Ni(e, t), e === null && vr(t.stateNode.containerInfo), Qe(t), null;
      case 10:
        return bo(t.type._context), Qe(t), null;
      case 17:
        return Je(t.type) && ul(), Qe(t), null;
      case 19:
        if (xe(Ee), o = t.memoizedState, o === null) return Qe(t), null;
        if (r = (t.flags & 128) !== 0, i = o.rendering, i === null) if (r) Rr(o, !1);
        else {
          if (Me !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (i = wl(e), i !== null) {
              for (t.flags |= 128, Rr(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return ye(Ee, Ee.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          o.tail !== null && Re() > Kn && (t.flags |= 128, r = !0, Rr(o, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = wl(i), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Rr(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !Se) return Qe(t), null;
          } else 2 * Re() - o.renderingStartTime > Kn && n !== 1073741824 && (t.flags |= 128, r = !0, Rr(o, !1), t.lanes = 4194304);
          o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Re(), t.sibling = null, n = Ee.current, ye(Ee, r ? n & 1 | 2 : n & 1), t) : (Qe(t), null);
      case 22:
      case 23:
        return Ai(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (it & 1073741824) !== 0 && (Qe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Qe(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(u(156, t.tag));
  }
  function hf(e, t) {
    switch (Ko(t), t.tag) {
      case 1:
        return Je(t.type) && ul(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Hn(), xe(Ze), xe(He), ii(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return li(t), null;
      case 13:
        if (xe(Ee), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(u(340));
          Un();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return xe(Ee), null;
      case 4:
        return Hn(), null;
      case 10:
        return bo(t.type._context), null;
      case 22:
      case 23:
        return Ai(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var zl = !1, Ge = !1, gf = typeof WeakSet == "function" ? WeakSet : Set, I = null;
  function Qn(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      Pe(e, t, r);
    }
    else n.current = null;
  }
  function _i(e, t, n) {
    try {
      n();
    } catch (r) {
      Pe(e, t, r);
    }
  }
  var _a = !1;
  function vf(e, t) {
    if (Ao = Yr, e = lu(), To(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset, o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0, a = -1, c = -1, g = 0, x = 0, S = e, k = null;
          t: for (; ; ) {
            for (var T; S !== n || l !== 0 && S.nodeType !== 3 || (a = i + l), S !== o || r !== 0 && S.nodeType !== 3 || (c = i + r), S.nodeType === 3 && (i += S.nodeValue.length), (T = S.firstChild) !== null; )
              k = S, S = T;
            for (; ; ) {
              if (S === e) break t;
              if (k === n && ++g === l && (a = i), k === o && ++x === r && (c = i), (T = S.nextSibling) !== null) break;
              S = k, k = S.parentNode;
            }
            S = T;
          }
          n = a === -1 || c === -1 ? null : { start: a, end: c };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Uo = { focusedElem: e, selectionRange: n }, Yr = !1, I = t; I !== null; ) if (t = I, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, I = e;
    else for (; I !== null; ) {
      t = I;
      try {
        var M = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (M !== null) {
              var A = M.memoizedProps, Te = M.memoizedState, m = t.stateNode, d = m.getSnapshotBeforeUpdate(t.elementType === t.type ? A : vt(t.type, A), Te);
              m.__reactInternalSnapshotBeforeUpdate = d;
            }
            break;
          case 3:
            var h = t.stateNode.containerInfo;
            h.nodeType === 1 ? h.textContent = "" : h.nodeType === 9 && h.documentElement && h.removeChild(h.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(u(163));
        }
      } catch (N) {
        Pe(t, t.return, N);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, I = e;
        break;
      }
      I = t.return;
    }
    return M = _a, _a = !1, M;
  }
  function Tr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          l.destroy = void 0, o !== void 0 && _i(t, n, o);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Rl(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Pi(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      e.tag, e = n, typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function Pa(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Pa(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[St], delete t[wr], delete t[Ho], delete t[qd], delete t[bd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function za(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Ra(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || za(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function zi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = il));
    else if (r !== 4 && (e = e.child, e !== null)) for (zi(e, t, n), e = e.sibling; e !== null; ) zi(e, t, n), e = e.sibling;
  }
  function Ri(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (Ri(e, t, n), e = e.sibling; e !== null; ) Ri(e, t, n), e = e.sibling;
  }
  var Ue = null, yt = !1;
  function Zt(e, t, n) {
    for (n = n.child; n !== null; ) Ta(e, t, n), n = n.sibling;
  }
  function Ta(e, t, n) {
    if (xt && typeof xt.onCommitFiberUnmount == "function") try {
      xt.onCommitFiberUnmount(Wr, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Ge || Qn(n, t);
      case 6:
        var r = Ue, l = yt;
        Ue = null, Zt(e, t, n), Ue = r, yt = l, Ue !== null && (yt ? (e = Ue, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Ue.removeChild(n.stateNode));
        break;
      case 18:
        Ue !== null && (yt ? (e = Ue, n = n.stateNode, e.nodeType === 8 ? Wo(e.parentNode, n) : e.nodeType === 1 && Wo(e, n), ur(e)) : Wo(Ue, n.stateNode));
        break;
      case 4:
        r = Ue, l = yt, Ue = n.stateNode.containerInfo, yt = !0, Zt(e, t, n), Ue = r, yt = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ge && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var o = l, i = o.destroy;
            o = o.tag, i !== void 0 && ((o & 2) !== 0 || (o & 4) !== 0) && _i(n, t, i), l = l.next;
          } while (l !== r);
        }
        Zt(e, t, n);
        break;
      case 1:
        if (!Ge && (Qn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (a) {
          Pe(n, t, a);
        }
        Zt(e, t, n);
        break;
      case 21:
        Zt(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Ge = (r = Ge) || n.memoizedState !== null, Zt(e, t, n), Ge = r) : Zt(e, t, n);
        break;
      default:
        Zt(e, t, n);
    }
  }
  function La(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new gf()), t.forEach(function(r) {
        var l = _f.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
    }
  }
  function wt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e, i = t, a = i;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              Ue = a.stateNode, yt = !1;
              break e;
            case 3:
              Ue = a.stateNode.containerInfo, yt = !0;
              break e;
            case 4:
              Ue = a.stateNode.containerInfo, yt = !0;
              break e;
          }
          a = a.return;
        }
        if (Ue === null) throw Error(u(160));
        Ta(o, i, l), Ue = null, yt = !1;
        var c = l.alternate;
        c !== null && (c.return = null), l.return = null;
      } catch (g) {
        Pe(l, t, g);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) ja(t, e), t = t.sibling;
  }
  function ja(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (wt(t, e), Nt(e), r & 4) {
          try {
            Tr(3, e, e.return), Rl(3, e);
          } catch (A) {
            Pe(e, e.return, A);
          }
          try {
            Tr(5, e, e.return);
          } catch (A) {
            Pe(e, e.return, A);
          }
        }
        break;
      case 1:
        wt(t, e), Nt(e), r & 512 && n !== null && Qn(n, n.return);
        break;
      case 5:
        if (wt(t, e), Nt(e), r & 512 && n !== null && Qn(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Jn(l, "");
          } catch (A) {
            Pe(e, e.return, A);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, a = e.type, c = e.updateQueue;
          if (e.updateQueue = null, c !== null) try {
            a === "input" && o.type === "radio" && o.name != null && is(l, o), oo(a, i);
            var g = oo(a, o);
            for (i = 0; i < c.length; i += 2) {
              var x = c[i], S = c[i + 1];
              x === "style" ? ms(l, S) : x === "dangerouslySetInnerHTML" ? fs(l, S) : x === "children" ? Jn(l, S) : Le(l, x, S, g);
            }
            switch (a) {
              case "input":
                eo(l, o);
                break;
              case "textarea":
                as(l, o);
                break;
              case "select":
                var k = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var T = o.value;
                T != null ? En(l, !!o.multiple, T, !1) : k !== !!o.multiple && (o.defaultValue != null ? En(
                  l,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : En(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[wr] = o;
          } catch (A) {
            Pe(e, e.return, A);
          }
        }
        break;
      case 6:
        if (wt(t, e), Nt(e), r & 4) {
          if (e.stateNode === null) throw Error(u(162));
          l = e.stateNode, o = e.memoizedProps;
          try {
            l.nodeValue = o;
          } catch (A) {
            Pe(e, e.return, A);
          }
        }
        break;
      case 3:
        if (wt(t, e), Nt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          ur(t.containerInfo);
        } catch (A) {
          Pe(e, e.return, A);
        }
        break;
      case 4:
        wt(t, e), Nt(e);
        break;
      case 13:
        wt(t, e), Nt(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (ji = Re())), r & 4 && La(e);
        break;
      case 22:
        if (x = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ge = (g = Ge) || x, wt(t, e), Ge = g) : wt(t, e), Nt(e), r & 8192) {
          if (g = e.memoizedState !== null, (e.stateNode.isHidden = g) && !x && (e.mode & 1) !== 0) for (I = e, x = e.child; x !== null; ) {
            for (S = I = x; I !== null; ) {
              switch (k = I, T = k.child, k.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Tr(4, k, k.return);
                  break;
                case 1:
                  Qn(k, k.return);
                  var M = k.stateNode;
                  if (typeof M.componentWillUnmount == "function") {
                    r = k, n = k.return;
                    try {
                      t = r, M.props = t.memoizedProps, M.state = t.memoizedState, M.componentWillUnmount();
                    } catch (A) {
                      Pe(r, n, A);
                    }
                  }
                  break;
                case 5:
                  Qn(k, k.return);
                  break;
                case 22:
                  if (k.memoizedState !== null) {
                    Oa(S);
                    continue;
                  }
              }
              T !== null ? (T.return = k, I = T) : Oa(S);
            }
            x = x.sibling;
          }
          e: for (x = null, S = e; ; ) {
            if (S.tag === 5) {
              if (x === null) {
                x = S;
                try {
                  l = S.stateNode, g ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (a = S.stateNode, c = S.memoizedProps.style, i = c != null && c.hasOwnProperty("display") ? c.display : null, a.style.display = ps("display", i));
                } catch (A) {
                  Pe(e, e.return, A);
                }
              }
            } else if (S.tag === 6) {
              if (x === null) try {
                S.stateNode.nodeValue = g ? "" : S.memoizedProps;
              } catch (A) {
                Pe(e, e.return, A);
              }
            } else if ((S.tag !== 22 && S.tag !== 23 || S.memoizedState === null || S === e) && S.child !== null) {
              S.child.return = S, S = S.child;
              continue;
            }
            if (S === e) break e;
            for (; S.sibling === null; ) {
              if (S.return === null || S.return === e) break e;
              x === S && (x = null), S = S.return;
            }
            x === S && (x = null), S.sibling.return = S.return, S = S.sibling;
          }
        }
        break;
      case 19:
        wt(t, e), Nt(e), r & 4 && La(e);
        break;
      case 21:
        break;
      default:
        wt(
          t,
          e
        ), Nt(e);
    }
  }
  function Nt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (za(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(u(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Jn(l, ""), r.flags &= -33);
            var o = Ra(e);
            Ri(e, o, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo, a = Ra(e);
            zi(e, a, i);
            break;
          default:
            throw Error(u(161));
        }
      } catch (c) {
        Pe(e, e.return, c);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function yf(e, t, n) {
    I = e, Ia(e);
  }
  function Ia(e, t, n) {
    for (var r = (e.mode & 1) !== 0; I !== null; ) {
      var l = I, o = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || zl;
        if (!i) {
          var a = l.alternate, c = a !== null && a.memoizedState !== null || Ge;
          a = zl;
          var g = Ge;
          if (zl = i, (Ge = c) && !g) for (I = l; I !== null; ) i = I, c = i.child, i.tag === 22 && i.memoizedState !== null ? Da(l) : c !== null ? (c.return = i, I = c) : Da(l);
          for (; o !== null; ) I = o, Ia(o), o = o.sibling;
          I = l, zl = a, Ge = g;
        }
        Ma(e);
      } else (l.subtreeFlags & 8772) !== 0 && o !== null ? (o.return = l, I = o) : Ma(e);
    }
  }
  function Ma(e) {
    for (; I !== null; ) {
      var t = I;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ge || Rl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ge) if (n === null) r.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : vt(t.type, n.memoizedProps);
                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var o = t.updateQueue;
              o !== null && Ou(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                Ou(t, i, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var c = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    c.autoFocus && n.focus();
                    break;
                  case "img":
                    c.src && (n.src = c.src);
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
                var g = t.alternate;
                if (g !== null) {
                  var x = g.memoizedState;
                  if (x !== null) {
                    var S = x.dehydrated;
                    S !== null && ur(S);
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
              throw Error(u(163));
          }
          Ge || t.flags & 512 && Pi(t);
        } catch (k) {
          Pe(t, t.return, k);
        }
      }
      if (t === e) {
        I = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, I = n;
        break;
      }
      I = t.return;
    }
  }
  function Oa(e) {
    for (; I !== null; ) {
      var t = I;
      if (t === e) {
        I = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, I = n;
        break;
      }
      I = t.return;
    }
  }
  function Da(e) {
    for (; I !== null; ) {
      var t = I;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Rl(4, t);
            } catch (c) {
              Pe(t, n, c);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (c) {
                Pe(t, l, c);
              }
            }
            var o = t.return;
            try {
              Pi(t);
            } catch (c) {
              Pe(t, o, c);
            }
            break;
          case 5:
            var i = t.return;
            try {
              Pi(t);
            } catch (c) {
              Pe(t, i, c);
            }
        }
      } catch (c) {
        Pe(t, t.return, c);
      }
      if (t === e) {
        I = null;
        break;
      }
      var a = t.sibling;
      if (a !== null) {
        a.return = t.return, I = a;
        break;
      }
      I = t.return;
    }
  }
  var wf = Math.ceil, Tl = ge.ReactCurrentDispatcher, Ti = ge.ReactCurrentOwner, ft = ge.ReactCurrentBatchConfig, oe = 0, Fe = null, je = null, Ve = 0, it = 0, Gn = Qt(0), Me = 0, Lr = null, gn = 0, Ll = 0, Li = 0, jr = null, be = null, ji = 0, Kn = 1 / 0, Mt = null, jl = !1, Ii = null, Jt = null, Il = !1, qt = null, Ml = 0, Ir = 0, Mi = null, Ol = -1, Dl = 0;
  function Xe() {
    return (oe & 6) !== 0 ? Re() : Ol !== -1 ? Ol : Ol = Re();
  }
  function bt(e) {
    return (e.mode & 1) === 0 ? 1 : (oe & 2) !== 0 && Ve !== 0 ? Ve & -Ve : tf.transition !== null ? (Dl === 0 && (Dl = Rs()), Dl) : (e = de, e !== 0 || (e = window.event, e = e === void 0 ? 16 : As(e.type)), e);
  }
  function kt(e, t, n, r) {
    if (50 < Ir) throw Ir = 0, Mi = null, Error(u(185));
    rr(e, n, r), ((oe & 2) === 0 || e !== Fe) && (e === Fe && ((oe & 2) === 0 && (Ll |= n), Me === 4 && en(e, Ve)), et(e, r), n === 1 && oe === 0 && (t.mode & 1) === 0 && (Kn = Re() + 500, cl && Kt()));
  }
  function et(e, t) {
    var n = e.callbackNode;
    td(e, t);
    var r = Qr(e, e === Fe ? Ve : 0);
    if (r === 0) n !== null && _s(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && _s(n), t === 1) e.tag === 0 ? ef(Aa.bind(null, e)) : Cu(Aa.bind(null, e)), Zd(function() {
        (oe & 6) === 0 && Kt();
      }), n = null;
      else {
        switch (Ts(r)) {
          case 1:
            n = po;
            break;
          case 4:
            n = Ps;
            break;
          case 16:
            n = Br;
            break;
          case 536870912:
            n = zs;
            break;
          default:
            n = Br;
        }
        n = Ga(n, Fa.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Fa(e, t) {
    if (Ol = -1, Dl = 0, (oe & 6) !== 0) throw Error(u(327));
    var n = e.callbackNode;
    if (Yn() && e.callbackNode !== n) return null;
    var r = Qr(e, e === Fe ? Ve : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Fl(e, r);
    else {
      t = r;
      var l = oe;
      oe |= 2;
      var o = Va();
      (Fe !== e || Ve !== t) && (Mt = null, Kn = Re() + 500, yn(e, t));
      do
        try {
          Sf();
          break;
        } catch (a) {
          Ua(e, a);
        }
      while (!0);
      qo(), Tl.current = o, oe = l, je !== null ? t = 0 : (Fe = null, Ve = 0, t = Me);
    }
    if (t !== 0) {
      if (t === 2 && (l = mo(e), l !== 0 && (r = l, t = Oi(e, l))), t === 1) throw n = Lr, yn(e, 0), en(e, r), et(e, Re()), n;
      if (t === 6) en(e, r);
      else {
        if (l = e.current.alternate, (r & 30) === 0 && !kf(l) && (t = Fl(e, r), t === 2 && (o = mo(e), o !== 0 && (r = o, t = Oi(e, o))), t === 1)) throw n = Lr, yn(e, 0), en(e, r), et(e, Re()), n;
        switch (e.finishedWork = l, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(u(345));
          case 2:
            wn(e, be, Mt);
            break;
          case 3:
            if (en(e, r), (r & 130023424) === r && (t = ji + 500 - Re(), 10 < t)) {
              if (Qr(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                Xe(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = Bo(wn.bind(null, e, be, Mt), t);
              break;
            }
            wn(e, be, Mt);
            break;
          case 4:
            if (en(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var i = 31 - mt(r);
              o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
            }
            if (r = l, r = Re() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * wf(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = Bo(wn.bind(null, e, be, Mt), r);
              break;
            }
            wn(e, be, Mt);
            break;
          case 5:
            wn(e, be, Mt);
            break;
          default:
            throw Error(u(329));
        }
      }
    }
    return et(e, Re()), e.callbackNode === n ? Fa.bind(null, e) : null;
  }
  function Oi(e, t) {
    var n = jr;
    return e.current.memoizedState.isDehydrated && (yn(e, t).flags |= 256), e = Fl(e, t), e !== 2 && (t = be, be = n, t !== null && Di(t)), e;
  }
  function Di(e) {
    be === null ? be = e : be.push.apply(be, e);
  }
  function kf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var l = n[r], o = l.getSnapshot;
          l = l.value;
          try {
            if (!ht(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function en(e, t) {
    for (t &= ~Li, t &= ~Ll, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - mt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Aa(e) {
    if ((oe & 6) !== 0) throw Error(u(327));
    Yn();
    var t = Qr(e, 0);
    if ((t & 1) === 0) return et(e, Re()), null;
    var n = Fl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = mo(e);
      r !== 0 && (t = r, n = Oi(e, r));
    }
    if (n === 1) throw n = Lr, yn(e, 0), en(e, t), et(e, Re()), n;
    if (n === 6) throw Error(u(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, wn(e, be, Mt), et(e, Re()), null;
  }
  function Fi(e, t) {
    var n = oe;
    oe |= 1;
    try {
      return e(t);
    } finally {
      oe = n, oe === 0 && (Kn = Re() + 500, cl && Kt());
    }
  }
  function vn(e) {
    qt !== null && qt.tag === 0 && (oe & 6) === 0 && Yn();
    var t = oe;
    oe |= 1;
    var n = ft.transition, r = de;
    try {
      if (ft.transition = null, de = 1, e) return e();
    } finally {
      de = r, ft.transition = n, oe = t, (oe & 6) === 0 && Kt();
    }
  }
  function Ai() {
    it = Gn.current, xe(Gn);
  }
  function yn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Xd(n)), je !== null) for (n = je.return; n !== null; ) {
      var r = n;
      switch (Ko(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && ul();
          break;
        case 3:
          Hn(), xe(Ze), xe(He), ii();
          break;
        case 5:
          li(r);
          break;
        case 4:
          Hn();
          break;
        case 13:
          xe(Ee);
          break;
        case 19:
          xe(Ee);
          break;
        case 10:
          bo(r.type._context);
          break;
        case 22:
        case 23:
          Ai();
      }
      n = n.return;
    }
    if (Fe = e, je = e = tn(e.current, null), Ve = it = t, Me = 0, Lr = null, Li = Ll = gn = 0, be = jr = null, pn !== null) {
      for (t = 0; t < pn.length; t++) if (n = pn[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, o = n.pending;
        if (o !== null) {
          var i = o.next;
          o.next = l, r.next = i;
        }
        n.pending = r;
      }
      pn = null;
    }
    return e;
  }
  function Ua(e, t) {
    do {
      var n = je;
      try {
        if (qo(), kl.current = El, xl) {
          for (var r = Ne.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          xl = !1;
        }
        if (hn = 0, De = Ie = Ne = null, Nr = !1, _r = 0, Ti.current = null, n === null || n.return === null) {
          Me = 1, Lr = t, je = null;
          break;
        }
        e: {
          var o = e, i = n.return, a = n, c = t;
          if (t = Ve, a.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
            var g = c, x = a, S = x.tag;
            if ((x.mode & 1) === 0 && (S === 0 || S === 11 || S === 15)) {
              var k = x.alternate;
              k ? (x.updateQueue = k.updateQueue, x.memoizedState = k.memoizedState, x.lanes = k.lanes) : (x.updateQueue = null, x.memoizedState = null);
            }
            var T = ca(i);
            if (T !== null) {
              T.flags &= -257, da(T, i, a, o, t), T.mode & 1 && aa(o, g, t), t = T, c = g;
              var M = t.updateQueue;
              if (M === null) {
                var A = /* @__PURE__ */ new Set();
                A.add(c), t.updateQueue = A;
              } else M.add(c);
              break e;
            } else {
              if ((t & 1) === 0) {
                aa(o, g, t), Ui();
                break e;
              }
              c = Error(u(426));
            }
          } else if (Se && a.mode & 1) {
            var Te = ca(i);
            if (Te !== null) {
              (Te.flags & 65536) === 0 && (Te.flags |= 256), da(Te, i, a, o, t), Zo($n(c, a));
              break e;
            }
          }
          o = c = $n(c, a), Me !== 4 && (Me = 2), jr === null ? jr = [o] : jr.push(o), o = i;
          do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var m = sa(o, c, t);
                Mu(o, m);
                break e;
              case 1:
                a = c;
                var d = o.type, h = o.stateNode;
                if ((o.flags & 128) === 0 && (typeof d.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (Jt === null || !Jt.has(h)))) {
                  o.flags |= 65536, t &= -t, o.lanes |= t;
                  var N = ua(o, a, t);
                  Mu(o, N);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        Wa(n);
      } catch (U) {
        t = U, je === n && n !== null && (je = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Va() {
    var e = Tl.current;
    return Tl.current = El, e === null ? El : e;
  }
  function Ui() {
    (Me === 0 || Me === 3 || Me === 2) && (Me = 4), Fe === null || (gn & 268435455) === 0 && (Ll & 268435455) === 0 || en(Fe, Ve);
  }
  function Fl(e, t) {
    var n = oe;
    oe |= 2;
    var r = Va();
    (Fe !== e || Ve !== t) && (Mt = null, yn(e, t));
    do
      try {
        xf();
        break;
      } catch (l) {
        Ua(e, l);
      }
    while (!0);
    if (qo(), oe = n, Tl.current = r, je !== null) throw Error(u(261));
    return Fe = null, Ve = 0, Me;
  }
  function xf() {
    for (; je !== null; ) Ba(je);
  }
  function Sf() {
    for (; je !== null && !Gc(); ) Ba(je);
  }
  function Ba(e) {
    var t = Qa(e.alternate, e, it);
    e.memoizedProps = e.pendingProps, t === null ? Wa(e) : je = t, Ti.current = null;
  }
  function Wa(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = mf(n, t, it), n !== null) {
          je = n;
          return;
        }
      } else {
        if (n = hf(n, t), n !== null) {
          n.flags &= 32767, je = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          Me = 6, je = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        je = t;
        return;
      }
      je = t = e;
    } while (t !== null);
    Me === 0 && (Me = 5);
  }
  function wn(e, t, n) {
    var r = de, l = ft.transition;
    try {
      ft.transition = null, de = 1, Cf(e, t, n, r);
    } finally {
      ft.transition = l, de = r;
    }
    return null;
  }
  function Cf(e, t, n, r) {
    do
      Yn();
    while (qt !== null);
    if ((oe & 6) !== 0) throw Error(u(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(u(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (nd(e, o), e === Fe && (je = Fe = null, Ve = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || Il || (Il = !0, Ga(Br, function() {
      return Yn(), null;
    })), o = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || o) {
      o = ft.transition, ft.transition = null;
      var i = de;
      de = 1;
      var a = oe;
      oe |= 4, Ti.current = null, vf(e, n), ja(n, e), Wd(Uo), Yr = !!Ao, Uo = Ao = null, e.current = n, yf(n), Kc(), oe = a, de = i, ft.transition = o;
    } else e.current = n;
    if (Il && (Il = !1, qt = e, Ml = l), o = e.pendingLanes, o === 0 && (Jt = null), Zc(n.stateNode), et(e, Re()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (jl) throw jl = !1, e = Ii, Ii = null, e;
    return (Ml & 1) !== 0 && e.tag !== 0 && Yn(), o = e.pendingLanes, (o & 1) !== 0 ? e === Mi ? Ir++ : (Ir = 0, Mi = e) : Ir = 0, Kt(), null;
  }
  function Yn() {
    if (qt !== null) {
      var e = Ts(Ml), t = ft.transition, n = de;
      try {
        if (ft.transition = null, de = 16 > e ? 16 : e, qt === null) var r = !1;
        else {
          if (e = qt, qt = null, Ml = 0, (oe & 6) !== 0) throw Error(u(331));
          var l = oe;
          for (oe |= 4, I = e.current; I !== null; ) {
            var o = I, i = o.child;
            if ((I.flags & 16) !== 0) {
              var a = o.deletions;
              if (a !== null) {
                for (var c = 0; c < a.length; c++) {
                  var g = a[c];
                  for (I = g; I !== null; ) {
                    var x = I;
                    switch (x.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Tr(8, x, o);
                    }
                    var S = x.child;
                    if (S !== null) S.return = x, I = S;
                    else for (; I !== null; ) {
                      x = I;
                      var k = x.sibling, T = x.return;
                      if (Pa(x), x === g) {
                        I = null;
                        break;
                      }
                      if (k !== null) {
                        k.return = T, I = k;
                        break;
                      }
                      I = T;
                    }
                  }
                }
                var M = o.alternate;
                if (M !== null) {
                  var A = M.child;
                  if (A !== null) {
                    M.child = null;
                    do {
                      var Te = A.sibling;
                      A.sibling = null, A = Te;
                    } while (A !== null);
                  }
                }
                I = o;
              }
            }
            if ((o.subtreeFlags & 2064) !== 0 && i !== null) i.return = o, I = i;
            else e: for (; I !== null; ) {
              if (o = I, (o.flags & 2048) !== 0) switch (o.tag) {
                case 0:
                case 11:
                case 15:
                  Tr(9, o, o.return);
              }
              var m = o.sibling;
              if (m !== null) {
                m.return = o.return, I = m;
                break e;
              }
              I = o.return;
            }
          }
          var d = e.current;
          for (I = d; I !== null; ) {
            i = I;
            var h = i.child;
            if ((i.subtreeFlags & 2064) !== 0 && h !== null) h.return = i, I = h;
            else e: for (i = d; I !== null; ) {
              if (a = I, (a.flags & 2048) !== 0) try {
                switch (a.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Rl(9, a);
                }
              } catch (U) {
                Pe(a, a.return, U);
              }
              if (a === i) {
                I = null;
                break e;
              }
              var N = a.sibling;
              if (N !== null) {
                N.return = a.return, I = N;
                break e;
              }
              I = a.return;
            }
          }
          if (oe = l, Kt(), xt && typeof xt.onPostCommitFiberRoot == "function") try {
            xt.onPostCommitFiberRoot(Wr, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        de = n, ft.transition = t;
      }
    }
    return !1;
  }
  function Ha(e, t, n) {
    t = $n(n, t), t = sa(e, t, 1), e = Xt(e, t, 1), t = Xe(), e !== null && (rr(e, 1, t), et(e, t));
  }
  function Pe(e, t, n) {
    if (e.tag === 3) Ha(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Ha(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Jt === null || !Jt.has(r))) {
          e = $n(n, e), e = ua(t, e, 1), t = Xt(t, e, 1), e = Xe(), t !== null && (rr(t, 1, e), et(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Ef(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Xe(), e.pingedLanes |= e.suspendedLanes & n, Fe === e && (Ve & n) === n && (Me === 4 || Me === 3 && (Ve & 130023424) === Ve && 500 > Re() - ji ? yn(e, 0) : Li |= n), et(e, t);
  }
  function $a(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = $r, $r <<= 1, ($r & 130023424) === 0 && ($r = 4194304)));
    var n = Xe();
    e = Lt(e, t), e !== null && (rr(e, t, n), et(e, n));
  }
  function Nf(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), $a(e, n);
  }
  function _f(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(u(314));
    }
    r !== null && r.delete(t), $a(e, n);
  }
  var Qa;
  Qa = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Ze.current) qe = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return qe = !1, pf(e, t, n);
      qe = (e.flags & 131072) !== 0;
    }
    else qe = !1, Se && (t.flags & 1048576) !== 0 && Eu(t, fl, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        Pl(e, t), e = t.pendingProps;
        var l = Dn(t, He.current);
        Wn(t, n), l = ai(null, t, r, e, l, n);
        var o = ci();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Je(r) ? (o = !0, al(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, ni(t), l.updater = Nl, t.stateNode = l, l._reactInternals = t, gi(t, r, e, n), t = ki(null, t, r, !0, o, n)) : (t.tag = 0, Se && o && Go(t), Ye(null, t, l, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (Pl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = zf(r), e = vt(r, e), l) {
            case 0:
              t = wi(null, t, r, e, n);
              break e;
            case 1:
              t = va(null, t, r, e, n);
              break e;
            case 11:
              t = fa(null, t, r, e, n);
              break e;
            case 14:
              t = pa(null, t, r, vt(r.type, e), n);
              break e;
          }
          throw Error(u(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : vt(r, l), wi(e, t, r, l, n);
      case 1:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : vt(r, l), va(e, t, r, l, n);
      case 3:
        e: {
          if (ya(t), e === null) throw Error(u(387));
          r = t.pendingProps, o = t.memoizedState, l = o.element, Iu(e, t), yl(t, r, null, n);
          var i = t.memoizedState;
          if (r = i.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
            l = $n(Error(u(423)), t), t = wa(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = $n(Error(u(424)), t), t = wa(e, t, r, n, l);
            break e;
          } else for (ot = $t(t.stateNode.containerInfo.firstChild), lt = t, Se = !0, gt = null, n = Lu(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Un(), r === l) {
              t = It(e, t, n);
              break e;
            }
            Ye(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Du(t), e === null && Xo(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, Vo(r, l) ? i = null : o !== null && Vo(r, o) && (t.flags |= 32), ga(e, t), Ye(e, t, i, n), t.child;
      case 6:
        return e === null && Xo(t), null;
      case 13:
        return ka(e, t, n);
      case 4:
        return ri(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Vn(t, null, r, n) : Ye(e, t, r, n), t.child;
      case 11:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : vt(r, l), fa(e, t, r, l, n);
      case 7:
        return Ye(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ye(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ye(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, ye(hl, r._currentValue), r._currentValue = i, o !== null) if (ht(o.value, i)) {
            if (o.children === l.children && !Ze.current) {
              t = It(e, t, n);
              break e;
            }
          } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
            var a = o.dependencies;
            if (a !== null) {
              i = o.child;
              for (var c = a.firstContext; c !== null; ) {
                if (c.context === r) {
                  if (o.tag === 1) {
                    c = jt(-1, n & -n), c.tag = 2;
                    var g = o.updateQueue;
                    if (g !== null) {
                      g = g.shared;
                      var x = g.pending;
                      x === null ? c.next = c : (c.next = x.next, x.next = c), g.pending = c;
                    }
                  }
                  o.lanes |= n, c = o.alternate, c !== null && (c.lanes |= n), ei(
                    o.return,
                    n,
                    t
                  ), a.lanes |= n;
                  break;
                }
                c = c.next;
              }
            } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
            else if (o.tag === 18) {
              if (i = o.return, i === null) throw Error(u(341));
              i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), ei(i, n, t), i = o.sibling;
            } else i = o.child;
            if (i !== null) i.return = o;
            else for (i = o; i !== null; ) {
              if (i === t) {
                i = null;
                break;
              }
              if (o = i.sibling, o !== null) {
                o.return = i.return, i = o;
                break;
              }
              i = i.return;
            }
            o = i;
          }
          Ye(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, r = t.pendingProps.children, Wn(t, n), l = ct(l), r = r(l), t.flags |= 1, Ye(e, t, r, n), t.child;
      case 14:
        return r = t.type, l = vt(r, t.pendingProps), l = vt(r.type, l), pa(e, t, r, l, n);
      case 15:
        return ma(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : vt(r, l), Pl(e, t), t.tag = 1, Je(r) ? (e = !0, al(t)) : e = !1, Wn(t, n), oa(t, r, l), gi(t, r, l, n), ki(null, t, r, !0, e, n);
      case 19:
        return Sa(e, t, n);
      case 22:
        return ha(e, t, n);
    }
    throw Error(u(156, t.tag));
  };
  function Ga(e, t) {
    return Ns(e, t);
  }
  function Pf(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function pt(e, t, n, r) {
    return new Pf(e, t, n, r);
  }
  function Vi(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function zf(e) {
    if (typeof e == "function") return Vi(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === Be) return 11;
      if (e === ae) return 14;
    }
    return 2;
  }
  function tn(e, t) {
    var n = e.alternate;
    return n === null ? (n = pt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function Al(e, t, n, r, l, o) {
    var i = 2;
    if (r = e, typeof e == "function") Vi(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else e: switch (e) {
      case Ce:
        return kn(n.children, l, o, t);
      case j:
        i = 8, l |= 8;
        break;
      case we:
        return e = pt(12, n, t, l | 2), e.elementType = we, e.lanes = o, e;
      case K:
        return e = pt(13, n, t, l), e.elementType = K, e.lanes = o, e;
      case le:
        return e = pt(19, n, t, l), e.elementType = le, e.lanes = o, e;
      case ce:
        return Ul(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case Ke:
            i = 10;
            break e;
          case nt:
            i = 9;
            break e;
          case Be:
            i = 11;
            break e;
          case ae:
            i = 14;
            break e;
          case he:
            i = 16, r = null;
            break e;
        }
        throw Error(u(130, e == null ? e : typeof e, ""));
    }
    return t = pt(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
  }
  function kn(e, t, n, r) {
    return e = pt(7, e, r, t), e.lanes = n, e;
  }
  function Ul(e, t, n, r) {
    return e = pt(22, e, r, t), e.elementType = ce, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function Bi(e, t, n) {
    return e = pt(6, e, null, t), e.lanes = n, e;
  }
  function Wi(e, t, n) {
    return t = pt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Rf(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ho(0), this.expirationTimes = ho(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ho(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function Hi(e, t, n, r, l, o, i, a, c) {
    return e = new Rf(e, t, n, a, c), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = pt(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ni(o), e;
  }
  function Tf(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ve, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function Ka(e) {
    if (!e) return Gt;
    e = e._reactInternals;
    e: {
      if (un(e) !== e || e.tag !== 1) throw Error(u(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Je(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(u(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Je(n)) return xu(e, n, t);
    }
    return t;
  }
  function Ya(e, t, n, r, l, o, i, a, c) {
    return e = Hi(n, r, !0, e, l, o, i, a, c), e.context = Ka(null), n = e.current, r = Xe(), l = bt(n), o = jt(r, l), o.callback = t ?? null, Xt(n, o, l), e.current.lanes = l, rr(e, l, r), et(e, r), e;
  }
  function Vl(e, t, n, r) {
    var l = t.current, o = Xe(), i = bt(l);
    return n = Ka(n), t.context === null ? t.context = n : t.pendingContext = n, t = jt(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Xt(l, t, i), e !== null && (kt(e, l, i, o), vl(e, l, i)), i;
  }
  function Bl(e) {
    return e = e.current, e.child ? (e.child.tag === 5, e.child.stateNode) : null;
  }
  function Xa(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function $i(e, t) {
    Xa(e, t), (e = e.alternate) && Xa(e, t);
  }
  function Lf() {
    return null;
  }
  var Za = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Qi(e) {
    this._internalRoot = e;
  }
  Wl.prototype.render = Qi.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(u(409));
    Vl(e, t, null, null);
  }, Wl.prototype.unmount = Qi.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      vn(function() {
        Vl(null, e, null, null);
      }), t[Pt] = null;
    }
  };
  function Wl(e) {
    this._internalRoot = e;
  }
  Wl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Is();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Bt.length && t !== 0 && t < Bt[n].priority; n++) ;
      Bt.splice(n, 0, e), n === 0 && Ds(e);
    }
  };
  function Gi(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Hl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Ja() {
  }
  function jf(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var o = r;
        r = function() {
          var g = Bl(i);
          o.call(g);
        };
      }
      var i = Ya(t, r, e, 0, null, !1, !1, "", Ja);
      return e._reactRootContainer = i, e[Pt] = i.current, vr(e.nodeType === 8 ? e.parentNode : e), vn(), i;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof r == "function") {
      var a = r;
      r = function() {
        var g = Bl(c);
        a.call(g);
      };
    }
    var c = Hi(e, 0, !1, null, null, !1, !1, "", Ja);
    return e._reactRootContainer = c, e[Pt] = c.current, vr(e.nodeType === 8 ? e.parentNode : e), vn(function() {
      Vl(t, c, n, r);
    }), c;
  }
  function $l(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
      var i = o;
      if (typeof l == "function") {
        var a = l;
        l = function() {
          var c = Bl(i);
          a.call(c);
        };
      }
      Vl(t, i, e, l);
    } else i = jf(n, t, e, l, r);
    return Bl(i);
  }
  Ls = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = nr(t.pendingLanes);
          n !== 0 && (go(t, n | 1), et(t, Re()), (oe & 6) === 0 && (Kn = Re() + 500, Kt()));
        }
        break;
      case 13:
        vn(function() {
          var r = Lt(e, 1);
          if (r !== null) {
            var l = Xe();
            kt(r, e, 1, l);
          }
        }), $i(e, 1);
    }
  }, vo = function(e) {
    if (e.tag === 13) {
      var t = Lt(e, 134217728);
      if (t !== null) {
        var n = Xe();
        kt(t, e, 134217728, n);
      }
      $i(e, 134217728);
    }
  }, js = function(e) {
    if (e.tag === 13) {
      var t = bt(e), n = Lt(e, t);
      if (n !== null) {
        var r = Xe();
        kt(n, e, t, r);
      }
      $i(e, t);
    }
  }, Is = function() {
    return de;
  }, Ms = function(e, t) {
    var n = de;
    try {
      return de = e, t();
    } finally {
      de = n;
    }
  }, uo = function(e, t, n) {
    switch (t) {
      case "input":
        if (eo(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var l = sl(r);
              if (!l) throw Error(u(90));
              sn(r), eo(r, l);
            }
          }
        }
        break;
      case "textarea":
        as(e, n);
        break;
      case "select":
        t = n.value, t != null && En(e, !!n.multiple, t, !1);
    }
  }, ys = Fi, ws = vn;
  var If = { usingClientEntryPoint: !1, Events: [kr, Mn, sl, gs, vs, Fi] }, Mr = { findFiberByHostInstance: an, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Mf = { bundleType: Mr.bundleType, version: Mr.version, rendererPackageName: Mr.rendererPackageName, rendererConfig: Mr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ge.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Cs(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Mr.findFiberByHostInstance || Lf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ql = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ql.isDisabled && Ql.supportsFiber) try {
      Wr = Ql.inject(Mf), xt = Ql;
    } catch {
    }
  }
  return tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = If, tt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Gi(t)) throw Error(u(200));
    return Tf(e, t, null, n);
  }, tt.createRoot = function(e, t) {
    if (!Gi(e)) throw Error(u(299));
    var n = !1, r = "", l = Za;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Hi(e, 1, !1, null, null, n, !1, r, l), e[Pt] = t.current, vr(e.nodeType === 8 ? e.parentNode : e), new Qi(t);
  }, tt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(u(188)) : (e = Object.keys(e).join(","), Error(u(268, e)));
    return e = Cs(t), e = e === null ? null : e.stateNode, e;
  }, tt.flushSync = function(e) {
    return vn(e);
  }, tt.hydrate = function(e, t, n) {
    if (!Hl(t)) throw Error(u(200));
    return $l(null, e, t, !0, n);
  }, tt.hydrateRoot = function(e, t, n) {
    if (!Gi(e)) throw Error(u(405));
    var r = n != null && n.hydratedSources || null, l = !1, o = "", i = Za;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = Ya(t, null, e, 1, n ?? null, l, !1, o, i), e[Pt] = t.current, vr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new Wl(t);
  }, tt.render = function(e, t, n) {
    if (!Hl(t)) throw Error(u(200));
    return $l(null, e, t, !1, n);
  }, tt.unmountComponentAtNode = function(e) {
    if (!Hl(e)) throw Error(u(40));
    return e._reactRootContainer ? (vn(function() {
      $l(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Pt] = null;
      });
    }), !0) : !1;
  }, tt.unstable_batchedUpdates = Fi, tt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Hl(n)) throw Error(u(200));
    if (e == null || e._reactInternals === void 0) throw Error(u(38));
    return $l(e, t, n, !1, r);
  }, tt.version = "18.3.1-next-f1338f8080-20240426", tt;
}
var oc;
function $f() {
  if (oc) return Xi.exports;
  oc = 1;
  function s() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (f) {
        console.error(f);
      }
  }
  return s(), Xi.exports = Hf(), Xi.exports;
}
var ic;
function Qf() {
  if (ic) return Gl;
  ic = 1;
  var s = $f();
  return Gl.createRoot = s.createRoot, Gl.hydrateRoot = s.hydrateRoot, Gl;
}
var Gf = Qf();
const Kf = (s) => s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Yf = (s) => s.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (f, u, v) => v ? v.toUpperCase() : u.toLowerCase()
), sc = (s) => {
  const f = Yf(s);
  return f.charAt(0).toUpperCase() + f.slice(1);
}, vc = (...s) => s.filter((f, u, v) => !!f && f.trim() !== "" && v.indexOf(f) === u).join(" ").trim(), Xf = (s) => {
  for (const f in s)
    if (f.startsWith("aria-") || f === "role" || f === "title")
      return !0;
};
var Zf = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const Jf = te.forwardRef(
  ({
    color: s = "currentColor",
    size: f = 24,
    strokeWidth: u = 2,
    absoluteStrokeWidth: v,
    className: _ = "",
    children: E,
    iconNode: P,
    ...F
  }, C) => te.createElement(
    "svg",
    {
      ref: C,
      ...Zf,
      width: f,
      height: f,
      stroke: s,
      strokeWidth: v ? Number(u) * 24 / Number(f) : u,
      className: vc("lucide", _),
      ...!E && !Xf(F) && { "aria-hidden": "true" },
      ...F
    },
    [
      ...P.map(([L, B]) => te.createElement(L, B)),
      ...Array.isArray(E) ? E : [E]
    ]
  )
);
const Xn = (s, f) => {
  const u = te.forwardRef(
    ({ className: v, ..._ }, E) => te.createElement(Jf, {
      ref: E,
      iconNode: f,
      className: vc(
        `lucide-${Kf(sc(s))}`,
        `lucide-${s}`,
        v
      ),
      ..._
    })
  );
  return u.displayName = sc(s), u;
};
const qf = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], bf = Xn("chevron-left", qf);
const ep = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], tp = Xn("chevron-right", ep);
const np = [
  ["path", { d: "M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4", key: "re6nr2" }],
  ["path", { d: "M2 6h4", key: "aawbzj" }],
  ["path", { d: "M2 10h4", key: "l0bgd4" }],
  ["path", { d: "M2 14h4", key: "1gsvsf" }],
  ["path", { d: "M2 18h4", key: "1bu2t1" }],
  [
    "path",
    {
      d: "M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
      key: "pqwjuv"
    }
  ]
], rp = Xn("notebook-pen", np);
const lp = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
], op = Xn("pencil", lp);
const ip = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
], sp = Xn("search", ip);
const up = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
], ap = Xn("trash-2", up);
function yc(s) {
  var f, u, v = "";
  if (typeof s == "string" || typeof s == "number") v += s;
  else if (typeof s == "object") if (Array.isArray(s)) {
    var _ = s.length;
    for (f = 0; f < _; f++) s[f] && (u = yc(s[f])) && (v && (v += " "), v += u);
  } else for (u in s) s[u] && (v && (v += " "), v += u);
  return v;
}
function wc() {
  for (var s, f, u = 0, v = "", _ = arguments.length; u < _; u++) (s = arguments[u]) && (f = yc(s)) && (v && (v += " "), v += f);
  return v;
}
const cp = (s, f) => {
  const u = new Array(s.length + f.length);
  for (let v = 0; v < s.length; v++)
    u[v] = s[v];
  for (let v = 0; v < f.length; v++)
    u[s.length + v] = f[v];
  return u;
}, dp = (s, f) => ({
  classGroupId: s,
  validator: f
}), kc = (s = /* @__PURE__ */ new Map(), f = null, u) => ({
  nextPart: s,
  validators: f,
  classGroupId: u
}), Xl = "-", uc = [], fp = "arbitrary..", pp = (s) => {
  const f = hp(s), {
    conflictingClassGroups: u,
    conflictingClassGroupModifiers: v
  } = s;
  return {
    getClassGroupId: (P) => {
      if (P.startsWith("[") && P.endsWith("]"))
        return mp(P);
      const F = P.split(Xl), C = F[0] === "" && F.length > 1 ? 1 : 0;
      return xc(F, C, f);
    },
    getConflictingClassGroupIds: (P, F) => {
      if (F) {
        const C = v[P], L = u[P];
        return C ? L ? cp(L, C) : C : L || uc;
      }
      return u[P] || uc;
    }
  };
}, xc = (s, f, u) => {
  if (s.length - f === 0)
    return u.classGroupId;
  const _ = s[f], E = u.nextPart.get(_);
  if (E) {
    const L = xc(s, f + 1, E);
    if (L) return L;
  }
  const P = u.validators;
  if (P === null)
    return;
  const F = f === 0 ? s.join(Xl) : s.slice(f).join(Xl), C = P.length;
  for (let L = 0; L < C; L++) {
    const B = P[L];
    if (B.validator(F))
      return B.classGroupId;
  }
}, mp = (s) => s.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const f = s.slice(1, -1), u = f.indexOf(":"), v = f.slice(0, u);
  return v ? fp + v : void 0;
})(), hp = (s) => {
  const {
    theme: f,
    classGroups: u
  } = s;
  return gp(u, f);
}, gp = (s, f) => {
  const u = kc();
  for (const v in s) {
    const _ = s[v];
    ts(_, u, v, f);
  }
  return u;
}, ts = (s, f, u, v) => {
  const _ = s.length;
  for (let E = 0; E < _; E++) {
    const P = s[E];
    vp(P, f, u, v);
  }
}, vp = (s, f, u, v) => {
  if (typeof s == "string") {
    yp(s, f, u);
    return;
  }
  if (typeof s == "function") {
    wp(s, f, u, v);
    return;
  }
  kp(s, f, u, v);
}, yp = (s, f, u) => {
  const v = s === "" ? f : Sc(f, s);
  v.classGroupId = u;
}, wp = (s, f, u, v) => {
  if (xp(s)) {
    ts(s(v), f, u, v);
    return;
  }
  f.validators === null && (f.validators = []), f.validators.push(dp(u, s));
}, kp = (s, f, u, v) => {
  const _ = Object.entries(s), E = _.length;
  for (let P = 0; P < E; P++) {
    const [F, C] = _[P];
    ts(C, Sc(f, F), u, v);
  }
}, Sc = (s, f) => {
  let u = s;
  const v = f.split(Xl), _ = v.length;
  for (let E = 0; E < _; E++) {
    const P = v[E];
    let F = u.nextPart.get(P);
    F || (F = kc(), u.nextPart.set(P, F)), u = F;
  }
  return u;
}, xp = (s) => "isThemeGetter" in s && s.isThemeGetter === !0, Sp = (s) => {
  if (s < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let f = 0, u = /* @__PURE__ */ Object.create(null), v = /* @__PURE__ */ Object.create(null);
  const _ = (E, P) => {
    u[E] = P, f++, f > s && (f = 0, v = u, u = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(E) {
      let P = u[E];
      if (P !== void 0)
        return P;
      if ((P = v[E]) !== void 0)
        return _(E, P), P;
    },
    set(E, P) {
      E in u ? u[E] = P : _(E, P);
    }
  };
}, bi = "!", ac = ":", Cp = [], cc = (s, f, u, v, _) => ({
  modifiers: s,
  hasImportantModifier: f,
  baseClassName: u,
  maybePostfixModifierPosition: v,
  isExternal: _
}), Ep = (s) => {
  const {
    prefix: f,
    experimentalParseClassName: u
  } = s;
  let v = (_) => {
    const E = [];
    let P = 0, F = 0, C = 0, L;
    const B = _.length;
    for (let H = 0; H < B; H++) {
      const W = _[H];
      if (P === 0 && F === 0) {
        if (W === ac) {
          E.push(_.slice(C, H)), C = H + 1;
          continue;
        }
        if (W === "/") {
          L = H;
          continue;
        }
      }
      W === "[" ? P++ : W === "]" ? P-- : W === "(" ? F++ : W === ")" && F--;
    }
    const J = E.length === 0 ? _ : _.slice(C);
    let V = J, fe = !1;
    J.endsWith(bi) ? (V = J.slice(0, -1), fe = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      J.startsWith(bi) && (V = J.slice(1), fe = !0)
    );
    const pe = L && L > C ? L - C : void 0;
    return cc(E, fe, V, pe);
  };
  if (f) {
    const _ = f + ac, E = v;
    v = (P) => P.startsWith(_) ? E(P.slice(_.length)) : cc(Cp, !1, P, void 0, !0);
  }
  if (u) {
    const _ = v;
    v = (E) => u({
      className: E,
      parseClassName: _
    });
  }
  return v;
}, Np = (s) => {
  const f = /* @__PURE__ */ new Map();
  return s.orderSensitiveModifiers.forEach((u, v) => {
    f.set(u, 1e6 + v);
  }), (u) => {
    const v = [];
    let _ = [];
    for (let E = 0; E < u.length; E++) {
      const P = u[E], F = P[0] === "[", C = f.has(P);
      F || C ? (_.length > 0 && (_.sort(), v.push(..._), _ = []), v.push(P)) : _.push(P);
    }
    return _.length > 0 && (_.sort(), v.push(..._)), v;
  };
}, _p = (s) => ({
  cache: Sp(s.cacheSize),
  parseClassName: Ep(s),
  sortModifiers: Np(s),
  ...pp(s)
}), Pp = /\s+/, zp = (s, f) => {
  const {
    parseClassName: u,
    getClassGroupId: v,
    getConflictingClassGroupIds: _,
    sortModifiers: E
  } = f, P = [], F = s.trim().split(Pp);
  let C = "";
  for (let L = F.length - 1; L >= 0; L -= 1) {
    const B = F[L], {
      isExternal: J,
      modifiers: V,
      hasImportantModifier: fe,
      baseClassName: pe,
      maybePostfixModifierPosition: H
    } = u(B);
    if (J) {
      C = B + (C.length > 0 ? " " + C : C);
      continue;
    }
    let W = !!H, _e = v(W ? pe.substring(0, H) : pe);
    if (!_e) {
      if (!W) {
        C = B + (C.length > 0 ? " " + C : C);
        continue;
      }
      if (_e = v(pe), !_e) {
        C = B + (C.length > 0 ? " " + C : C);
        continue;
      }
      W = !1;
    }
    const me = V.length === 0 ? "" : V.length === 1 ? V[0] : E(V).join(":"), Le = fe ? me + bi : me, ge = Le + _e;
    if (P.indexOf(ge) > -1)
      continue;
    P.push(ge);
    const ze = _(_e, W);
    for (let ve = 0; ve < ze.length; ++ve) {
      const Ce = ze[ve];
      P.push(Le + Ce);
    }
    C = B + (C.length > 0 ? " " + C : C);
  }
  return C;
}, Rp = (...s) => {
  let f = 0, u, v, _ = "";
  for (; f < s.length; )
    (u = s[f++]) && (v = Cc(u)) && (_ && (_ += " "), _ += v);
  return _;
}, Cc = (s) => {
  if (typeof s == "string")
    return s;
  let f, u = "";
  for (let v = 0; v < s.length; v++)
    s[v] && (f = Cc(s[v])) && (u && (u += " "), u += f);
  return u;
}, Tp = (s, ...f) => {
  let u, v, _, E;
  const P = (C) => {
    const L = f.reduce((B, J) => J(B), s());
    return u = _p(L), v = u.cache.get, _ = u.cache.set, E = F, F(C);
  }, F = (C) => {
    const L = v(C);
    if (L)
      return L;
    const B = zp(C, u);
    return _(C, B), B;
  };
  return E = P, (...C) => E(Rp(...C));
}, Lp = [], Oe = (s) => {
  const f = (u) => u[s] || Lp;
  return f.isThemeGetter = !0, f;
}, Ec = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Nc = /^\((?:(\w[\w-]*):)?(.+)\)$/i, jp = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, Ip = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Mp = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Op = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Dp = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Fp = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, rn = (s) => jp.test(s), ne = (s) => !!s && !Number.isNaN(Number(s)), ln = (s) => !!s && Number.isInteger(Number(s)), qi = (s) => s.endsWith("%") && ne(s.slice(0, -1)), Ot = (s) => Ip.test(s), _c = () => !0, Ap = (s) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Mp.test(s) && !Op.test(s)
), ns = () => !1, Up = (s) => Dp.test(s), Vp = (s) => Fp.test(s), Bp = (s) => !O(s) && !D(s), Wp = (s) => on(s, Rc, ns), O = (s) => Ec.test(s), xn = (s) => on(s, Tc, Ap), dc = (s) => on(s, Zp, ne), Hp = (s) => on(s, jc, _c), $p = (s) => on(s, Lc, ns), fc = (s) => on(s, Pc, ns), Qp = (s) => on(s, zc, Vp), Kl = (s) => on(s, Ic, Up), D = (s) => Nc.test(s), Dr = (s) => Cn(s, Tc), Gp = (s) => Cn(s, Lc), pc = (s) => Cn(s, Pc), Kp = (s) => Cn(s, Rc), Yp = (s) => Cn(s, zc), Yl = (s) => Cn(s, Ic, !0), Xp = (s) => Cn(s, jc, !0), on = (s, f, u) => {
  const v = Ec.exec(s);
  return v ? v[1] ? f(v[1]) : u(v[2]) : !1;
}, Cn = (s, f, u = !1) => {
  const v = Nc.exec(s);
  return v ? v[1] ? f(v[1]) : u : !1;
}, Pc = (s) => s === "position" || s === "percentage", zc = (s) => s === "image" || s === "url", Rc = (s) => s === "length" || s === "size" || s === "bg-size", Tc = (s) => s === "length", Zp = (s) => s === "number", Lc = (s) => s === "family-name", jc = (s) => s === "number" || s === "weight", Ic = (s) => s === "shadow", Jp = () => {
  const s = Oe("color"), f = Oe("font"), u = Oe("text"), v = Oe("font-weight"), _ = Oe("tracking"), E = Oe("leading"), P = Oe("breakpoint"), F = Oe("container"), C = Oe("spacing"), L = Oe("radius"), B = Oe("shadow"), J = Oe("inset-shadow"), V = Oe("text-shadow"), fe = Oe("drop-shadow"), pe = Oe("blur"), H = Oe("perspective"), W = Oe("aspect"), _e = Oe("ease"), me = Oe("animate"), Le = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], ge = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], ze = () => [...ge(), D, O], ve = () => ["auto", "hidden", "clip", "visible", "scroll"], Ce = () => ["auto", "contain", "none"], j = () => [D, O, C], we = () => [rn, "full", "auto", ...j()], Ke = () => [ln, "none", "subgrid", D, O], nt = () => ["auto", {
    span: ["full", ln, D, O]
  }, ln, D, O], Be = () => [ln, "auto", D, O], K = () => ["auto", "min", "max", "fr", D, O], le = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], ae = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], he = () => ["auto", ...j()], ce = () => [rn, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...j()], z = () => [rn, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...j()], $ = () => [rn, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...j()], y = () => [s, D, O], p = () => [...ge(), pc, fc, {
    position: [D, O]
  }], w = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], b = () => ["auto", "cover", "contain", Kp, Wp, {
    size: [D, O]
  }], ee = () => [qi, Dr, xn], Y = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    L,
    D,
    O
  ], X = () => ["", ne, Dr, xn], ue = () => ["solid", "dashed", "dotted", "double"], ie = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], q = () => [ne, qi, pc, fc], We = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    pe,
    D,
    O
  ], _t = () => ["none", ne, D, O], sn = () => ["none", ne, D, O], Dt = () => [ne, D, O], Ft = () => [rn, "full", ...j()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Ot],
      breakpoint: [Ot],
      color: [_c],
      container: [Ot],
      "drop-shadow": [Ot],
      ease: ["in", "out", "in-out"],
      font: [Bp],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Ot],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Ot],
      shadow: [Ot],
      spacing: ["px", ne],
      text: [Ot],
      "text-shadow": [Ot],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", rn, O, D, W]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [ne, O, D, F]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": Le()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Le()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: ze()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: ve()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": ve()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": ve()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: Ce()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": Ce()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": Ce()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Inset
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: we()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": we()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": we()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": we(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: we()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": we(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: we()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": we()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": we()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: we()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: we()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: we()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: we()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [ln, "auto", D, O]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [rn, "full", "auto", F, ...j()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [ne, rn, "auto", "initial", "none", O]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", ne, D, O]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", ne, D, O]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [ln, "first", "last", "none", D, O]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": Ke()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: nt()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": Be()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": Be()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": Ke()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: nt()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": Be()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": Be()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": K()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": K()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: j()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": j()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": j()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...le(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...ae(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...ae()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...le()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...ae(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...ae(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": le()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...ae(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...ae()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: j()
      }],
      /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: j()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: j()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: j()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: j()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: j()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: j()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: j()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: j()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: j()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: j()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: he()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: he()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: he()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: he()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: he()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: he()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: he()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: he()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: he()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: he()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: he()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": j()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": j()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: ce()
      }],
      /**
       * Inline Size
       * @see https://tailwindcss.com/docs/width
       */
      "inline-size": [{
        inline: ["auto", ...z()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...z()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-inline-size": [{
        "max-inline": ["none", ...z()]
      }],
      /**
       * Block Size
       * @see https://tailwindcss.com/docs/height
       */
      "block-size": [{
        block: ["auto", ...$()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-block-size": [{
        "min-block": ["auto", ...$()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-block-size": [{
        "max-block": ["none", ...$()]
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [F, "screen", ...ce()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          F,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...ce()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          F,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [P]
          },
          ...ce()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...ce()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...ce()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...ce()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", u, Dr, xn]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [v, Xp, Hp]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", qi, O]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Gp, $p, f]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      "font-features": [{
        "font-features": [O]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [_, D, O]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [ne, "none", D, dc]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          E,
          ...j()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", D, O]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", D, O]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: y()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: y()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...ue(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [ne, "from-font", "auto", D, xn]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: y()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [ne, "auto", D, O]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: j()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", D, O]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", D, O]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: p()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: w()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: b()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, ln, D, O],
          radial: ["", D, O],
          conic: [ln, D, O]
        }, Yp, Qp]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: y()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: ee()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: ee()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: ee()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: y()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: y()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: y()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: Y()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": Y()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": Y()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": Y()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": Y()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": Y()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": Y()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": Y()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": Y()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": Y()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": Y()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": Y()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": Y()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": Y()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": Y()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: X()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": X()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": X()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": X()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": X()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": X()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": X()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": X()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": X()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": X()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": X()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": X()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": X()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...ue(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...ue(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: y()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": y()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": y()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": y()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": y()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": y()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": y()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": y()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": y()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": y()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": y()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: y()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...ue(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ne, D, O]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ne, Dr, xn]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: y()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          B,
          Yl,
          Kl
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: y()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", J, Yl, Kl]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": y()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: X()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: y()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [ne, xn]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": y()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": X()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": y()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", V, Yl, Kl]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": y()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [ne, D, O]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ie(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ie()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [ne]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": q()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": q()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": y()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": y()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": q()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": q()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": y()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": y()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": q()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": q()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": y()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": y()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": q()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": q()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": y()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": y()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": q()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": q()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": y()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": y()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": q()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": q()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": y()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": y()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": q()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": q()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": y()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": y()
      }],
      "mask-image-radial": [{
        "mask-radial": [D, O]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": q()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": q()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": y()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": y()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": ge()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [ne]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": q()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": q()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": y()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": y()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: p()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: w()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: b()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", D, O]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          D,
          O
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: We()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [ne, D, O]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ne, D, O]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          fe,
          Yl,
          Kl
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": y()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", ne, D, O]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [ne, D, O]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", ne, D, O]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ne, D, O]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", ne, D, O]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          D,
          O
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": We()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [ne, D, O]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ne, D, O]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", ne, D, O]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [ne, D, O]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", ne, D, O]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [ne, D, O]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ne, D, O]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", ne, D, O]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": j()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": j()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": j()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", D, O]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [ne, "initial", D, O]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", _e, D, O]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [ne, D, O]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", me, D, O]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [H, D, O]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": ze()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: _t()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": _t()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": _t()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": _t()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: sn()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": sn()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": sn()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": sn()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: Dt()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": Dt()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": Dt()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [D, O, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ze()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: Ft()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Ft()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Ft()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Ft()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: y()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: y()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", D, O]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": j()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": j()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": j()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": j()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": j()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbs": [{
        "scroll-mbs": j()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbe": [{
        "scroll-mbe": j()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": j()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": j()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": j()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": j()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": j()
      }],
      /**
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": j()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": j()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": j()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": j()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbs": [{
        "scroll-pbs": j()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbe": [{
        "scroll-pbe": j()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": j()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": j()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": j()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": j()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", D, O]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...y()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ne, Dr, xn, dc]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...y()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, qp = /* @__PURE__ */ Tp(Jp);
function st(...s) {
  return qp(wc(s));
}
const Zl = te.forwardRef(
  ({ className: s, ...f }, u) => /* @__PURE__ */ R.jsx(
    "div",
    {
      ref: u,
      className: st("rounded-xl border border-border bg-card text-card-foreground shadow-sm", s),
      ...f
    }
  )
);
Zl.displayName = "Card";
const Jl = te.forwardRef(
  ({ className: s, ...f }, u) => /* @__PURE__ */ R.jsx("div", { ref: u, className: st("flex flex-col space-y-1.5 p-6", s), ...f })
);
Jl.displayName = "CardHeader";
const ql = te.forwardRef(
  ({ className: s, ...f }, u) => /* @__PURE__ */ R.jsx("h3", { ref: u, className: st("text-lg font-semibold leading-none tracking-tight", s), ...f })
);
ql.displayName = "CardTitle";
const Mc = te.forwardRef(
  ({ className: s, ...f }, u) => /* @__PURE__ */ R.jsx("p", { ref: u, className: st("text-sm text-muted-foreground", s), ...f })
);
Mc.displayName = "CardDescription";
const bl = te.forwardRef(
  ({ className: s, ...f }, u) => /* @__PURE__ */ R.jsx("div", { ref: u, className: st("p-6 pt-0", s), ...f })
);
bl.displayName = "CardContent";
const bp = te.forwardRef(
  ({ className: s, ...f }, u) => /* @__PURE__ */ R.jsx("div", { ref: u, className: st("flex items-center p-6 pt-0", s), ...f })
);
bp.displayName = "CardFooter";
const mc = (s) => typeof s == "boolean" ? `${s}` : s === 0 ? "0" : s, hc = wc, Oc = (s, f) => (u) => {
  var v;
  if (f?.variants == null) return hc(s, u?.class, u?.className);
  const { variants: _, defaultVariants: E } = f, P = Object.keys(_).map((L) => {
    const B = u?.[L], J = E?.[L];
    if (B === null) return null;
    const V = mc(B) || mc(J);
    return _[L][V];
  }), F = u && Object.entries(u).reduce((L, B) => {
    let [J, V] = B;
    return V === void 0 || (L[J] = V), L;
  }, {}), C = f == null || (v = f.compoundVariants) === null || v === void 0 ? void 0 : v.reduce((L, B) => {
    let { class: J, className: V, ...fe } = B;
    return Object.entries(fe).every((pe) => {
      let [H, W] = pe;
      return Array.isArray(W) ? W.includes({
        ...E,
        ...F
      }[H]) : {
        ...E,
        ...F
      }[H] === W;
    }) ? [
      ...L,
      J,
      V
    ] : L;
  }, []);
  return hc(s, P, C, u?.class, u?.className);
}, em = Oc(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        outline: "text-foreground",
        danger: "border-transparent bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function tm({ className: s, variant: f, ...u }) {
  return /* @__PURE__ */ R.jsx("div", { className: st(em({ variant: f }), s), ...u });
}
function nm({
  className: s,
  orientation: f = "horizontal"
}) {
  return f === "vertical" ? /* @__PURE__ */ R.jsx("div", { className: st("h-full w-px bg-border", s), role: "separator", "aria-orientation": "vertical" }) : /* @__PURE__ */ R.jsx("div", { className: st("h-px w-full bg-border", s), role: "separator", "aria-orientation": "horizontal" });
}
const rs = te.forwardRef(
  ({ className: s, type: f = "text", ...u }, v) => /* @__PURE__ */ R.jsx(
    "input",
    {
      type: f,
      className: st(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
        "placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 disabled:cursor-not-allowed disabled:opacity-50",
        s
      ),
      ref: v,
      ...u
    }
  )
);
rs.displayName = "Input";
const Dc = te.forwardRef(
  ({ className: s, ...f }, u) => /* @__PURE__ */ R.jsx(
    "textarea",
    {
      className: st(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
        "placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 disabled:cursor-not-allowed disabled:opacity-50",
        s
      ),
      ref: u,
      ...f
    }
  )
);
Dc.displayName = "Textarea";
const rm = Oc(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Sn = te.forwardRef(
  ({ className: s, variant: f, size: u, type: v = "button", ..._ }, E) => /* @__PURE__ */ R.jsx(
    "button",
    {
      type: v,
      className: st(rm({ variant: f, size: u }), s),
      ref: E,
      ..._
    }
  )
);
Sn.displayName = "Button";
function lm({
  noteId: s,
  title: f,
  content: u,
  pending: v,
  onTitleChange: _,
  onContentChange: E,
  onSubmit: P,
  onCancel: F
}) {
  const C = s !== null;
  return /* @__PURE__ */ R.jsxs(Zl, { className: "bg-card/80", children: [
    /* @__PURE__ */ R.jsx(Jl, { children: /* @__PURE__ */ R.jsx(ql, { children: C ? "Edit note" : "Create note" }) }),
    /* @__PURE__ */ R.jsx(bl, { children: /* @__PURE__ */ R.jsxs(
      "form",
      {
        className: "space-y-4",
        onSubmit: (L) => {
          L.preventDefault(), P();
        },
        children: [
          /* @__PURE__ */ R.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ R.jsx("label", { className: "text-sm font-medium", htmlFor: "title", children: "Title" }),
            /* @__PURE__ */ R.jsx(
              rs,
              {
                id: "title",
                value: f,
                maxLength: 120,
                required: !0,
                onChange: (L) => _(L.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ R.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ R.jsx("label", { className: "text-sm font-medium", htmlFor: "content", children: "Content" }),
            /* @__PURE__ */ R.jsx(
              Dc,
              {
                id: "content",
                value: u,
                rows: 6,
                onChange: (L) => E(L.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ R.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
            /* @__PURE__ */ R.jsx(Sn, { type: "submit", disabled: v, children: C ? "Update" : "Save" }),
            C ? /* @__PURE__ */ R.jsx(Sn, { type: "button", variant: "secondary", disabled: v, onClick: F, children: "Cancel edit" }) : null
          ] })
        ]
      }
    ) })
  ] });
}
const Fc = te.forwardRef(
  ({ className: s, ...f }, u) => /* @__PURE__ */ R.jsx("div", { ref: u, className: st("overflow-auto", s), ...f })
);
Fc.displayName = "ScrollArea";
function gc(s) {
  return new Date(s).toLocaleString();
}
function om({ notes: s, search: f, onSearchChange: u, onEdit: v, onDelete: _ }) {
  return /* @__PURE__ */ R.jsxs(Zl, { className: "bg-card/80", children: [
    /* @__PURE__ */ R.jsxs(Jl, { className: "space-y-3", children: [
      /* @__PURE__ */ R.jsx(ql, { children: "Notes" }),
      /* @__PURE__ */ R.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ R.jsx(sp, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
        /* @__PURE__ */ R.jsx(
          rs,
          {
            value: f,
            placeholder: "Search title/content...",
            className: "pl-9",
            onChange: (E) => u(E.target.value)
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ R.jsx(bl, { children: /* @__PURE__ */ R.jsx(Fc, { className: "max-h-[420px] pr-2", children: /* @__PURE__ */ R.jsxs("ul", { className: "grid list-none gap-3 p-0", children: [
      s.length === 0 ? /* @__PURE__ */ R.jsx("li", { className: "rounded-lg border border-dashed border-border bg-muted/40 px-3 py-5 text-sm text-muted-foreground", children: "No notes yet." }) : null,
      s.map((E) => /* @__PURE__ */ R.jsxs("li", { className: "rounded-lg border border-border bg-background/75 p-3 shadow-sm", children: [
        /* @__PURE__ */ R.jsx("h3", { className: "text-base font-semibold", children: E.title }),
        /* @__PURE__ */ R.jsx("p", { className: "mt-2 whitespace-pre-wrap text-sm text-muted-foreground", children: E.content || "(empty)" }),
        /* @__PURE__ */ R.jsxs("p", { className: "mt-2 text-xs text-muted-foreground", children: [
          "Created: ",
          gc(E.createdAt),
          " | Updated: ",
          gc(E.updatedAt)
        ] }),
        /* @__PURE__ */ R.jsxs("div", { className: "mt-3 flex gap-2", children: [
          /* @__PURE__ */ R.jsxs(Sn, { size: "sm", variant: "secondary", onClick: () => v(E), children: [
            /* @__PURE__ */ R.jsx(op, { className: "mr-1 h-4 w-4" }),
            "Edit"
          ] }),
          /* @__PURE__ */ R.jsxs(
            Sn,
            {
              size: "sm",
              variant: "destructive",
              onClick: () => {
                _(E);
              },
              children: [
                /* @__PURE__ */ R.jsx(ap, { className: "mr-1 h-4 w-4" }),
                "Delete"
              ]
            }
          )
        ] })
      ] }, E.id))
    ] }) }) })
  ] });
}
function im({ page: s, totalPages: f, total: u, canPrev: v, canNext: _, onPrev: E, onNext: P }) {
  return /* @__PURE__ */ R.jsxs("div", { className: "flex flex-col justify-between gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center", children: [
    /* @__PURE__ */ R.jsxs("p", { children: [
      "Page ",
      s,
      " of ",
      f,
      " (",
      u,
      " total)"
    ] }),
    /* @__PURE__ */ R.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ R.jsxs(
        Sn,
        {
          variant: "secondary",
          disabled: !v,
          onClick: () => {
            E();
          },
          children: [
            /* @__PURE__ */ R.jsx(bf, { className: "mr-1 h-4 w-4" }),
            "Previous"
          ]
        }
      ),
      /* @__PURE__ */ R.jsxs(
        Sn,
        {
          variant: "secondary",
          disabled: !_,
          onClick: () => {
            P();
          },
          children: [
            "Next",
            /* @__PURE__ */ R.jsx(tp, { className: "ml-1 h-4 w-4" })
          ]
        }
      )
    ] })
  ] });
}
const sm = "/api/v1";
function um(s) {
  if (s && typeof s == "object") {
    const f = s;
    if (Array.isArray(f.errors) && f.errors.length > 0) {
      const v = f.errors[0];
      return v.detail || v.title || "Request failed";
    }
    const u = s;
    if (typeof u.error == "string")
      return u.error;
  }
  return "Request failed";
}
async function Fr(s, f = {}) {
  const u = await fetch(`${sm}${s}`, {
    headers: {
      "Content-Type": "application/json",
      ...f.headers
    },
    ...f
  }), v = await u.json().catch(() => ({}));
  if (!u.ok)
    throw new Error(um(v));
  return v;
}
function ls(s) {
  return {
    id: Number.parseInt(s.id, 10),
    title: s.attributes.title || "",
    content: s.attributes.content || "",
    createdAt: s.attributes.createdAt,
    updatedAt: s.attributes.updatedAt
  };
}
async function am() {
  return (await Fr("/health")).data?.attributes?.time;
}
async function cm(s) {
  const f = new URLSearchParams({
    page: String(s.page),
    limit: String(s.limit)
  });
  s.search.trim() && f.set("search", s.search.trim());
  const u = await Fr(`/notes?${f.toString()}`), v = u.meta ?? {};
  return {
    notes: u.data.map(ls),
    meta: {
      page: Number.parseInt(String(v.page), 10) || s.page,
      limit: Number.parseInt(String(v.limit), 10) || s.limit,
      total: Number.parseInt(String(v.total), 10) || 0,
      totalPages: Number.parseInt(String(v.totalPages), 10) || 1
    }
  };
}
async function dm(s) {
  const f = await Fr("/notes", {
    method: "POST",
    body: JSON.stringify(s)
  });
  return ls(f.data);
}
async function fm(s, f) {
  const u = await Fr(`/notes/${s}`, {
    method: "PATCH",
    body: JSON.stringify(f)
  });
  return ls(u.data);
}
async function pm(s) {
  await Fr(`/notes/${s}`, { method: "DELETE" });
}
const mm = 10;
function hm() {
  const [s, f] = te.useState([]), [u, v] = te.useState(!1), [_, E] = te.useState(!1), [P, F] = te.useState({ message: "Initializing...", isError: !1 }), [C, L] = te.useState({ noteId: null, title: "", content: "" }), [B, J] = te.useState(""), [V, fe] = te.useState({
    page: 1,
    limit: mm,
    total: 0,
    totalPages: 1
  }), pe = te.useRef(void 0), H = te.useCallback((K) => {
    F({ message: K, isError: !1 });
  }, []), W = te.useCallback((K, le = "Request failed") => {
    const ae = K instanceof Error ? K.message : le;
    F({ message: ae, isError: !0 });
  }, []), _e = te.useCallback(() => {
    L({ noteId: null, title: "", content: "" });
  }, []), me = te.useCallback(
    async (K = V.page, le = B) => {
      try {
        v(!0), H("Loading notes...");
        const ae = await cm({
          page: K,
          limit: V.limit,
          search: le
        });
        f(ae.notes), fe((he) => ({
          ...he,
          page: ae.meta.page,
          limit: ae.meta.limit,
          total: ae.meta.total,
          totalPages: ae.meta.totalPages
        })), H(`Loaded ${ae.notes.length} note(s).`);
      } catch (ae) {
        W(ae);
      } finally {
        v(!1);
      }
    },
    [V.limit, W, H]
  );
  te.useEffect(() => {
    (async () => {
      try {
        const K = await am();
        if (K) {
          const le = new Date(K).toLocaleString();
          H(`API healthy at ${le}`);
        }
      } catch (K) {
        W(K, "Health check failed");
      }
      await me(1, "");
    })().catch(() => {
    });
  }, [me, W, H]), te.useEffect(() => () => {
    pe.current !== void 0 && window.clearTimeout(pe.current);
  }, []);
  const Le = te.useCallback((K) => {
    L((le) => ({ ...le, title: K }));
  }, []), ge = te.useCallback((K) => {
    L((le) => ({ ...le, content: K }));
  }, []), ze = te.useCallback(
    (K) => {
      J(K), pe.current !== void 0 && window.clearTimeout(pe.current), pe.current = window.setTimeout(() => {
        fe((le) => ({ ...le, page: 1 })), me(1, K);
      }, 250);
    },
    [me]
  ), ve = te.useCallback(async () => {
    const K = {
      data: {
        type: "notes",
        attributes: {
          title: C.title,
          content: C.content
        }
      }
    };
    try {
      E(!0), C.noteId ? (H("Updating note..."), await fm(C.noteId, K), H("Note updated.")) : (H("Creating note..."), await dm(K), H("Note created.")), _e(), fe((le) => ({ ...le, page: 1 })), await me(1, B);
    } catch (le) {
      W(le);
    } finally {
      E(!1);
    }
  }, [C.content, C.noteId, C.title, me, _e, B, W, H]), Ce = te.useCallback((K) => {
    L({ noteId: K.id, title: K.title, content: K.content });
  }, []), j = te.useCallback(() => {
    _e();
  }, [_e]), we = te.useCallback(
    async (K) => {
      if (window.confirm("Delete this note?"))
        try {
          H("Deleting..."), await pm(K.id), H("Note deleted."), await me(V.page, B);
        } catch (ae) {
          W(ae);
        }
    },
    [me, V.page, B, W, H]
  ), Ke = te.useCallback(async () => {
    if (V.page <= 1)
      return;
    const K = V.page - 1;
    fe((le) => ({ ...le, page: K })), await me(K, B);
  }, [me, V.page, B]), nt = te.useCallback(async () => {
    if (V.page >= V.totalPages)
      return;
    const K = V.page + 1;
    fe((le) => ({ ...le, page: K })), await me(K, B);
  }, [me, V.page, V.totalPages, B]);
  return te.useMemo(
    () => ({
      notes: s,
      status: P,
      isLoading: u,
      isSaving: _,
      form: C,
      search: B,
      pagination: V,
      updateTitle: Le,
      updateContent: ge,
      updateSearch: ze,
      saveNote: ve,
      editNote: Ce,
      cancelEditing: j,
      deleteNote: we,
      prevPage: Ke,
      nextPage: nt
    }),
    [
      j,
      we,
      Ce,
      C,
      u,
      _,
      nt,
      s,
      V,
      Ke,
      ve,
      B,
      P,
      ge,
      ze,
      Le
    ]
  );
}
function gm() {
  const s = hm();
  return /* @__PURE__ */ R.jsx("div", { className: "theme-notes min-h-full bg-[radial-gradient(circle_at_top,_hsl(195_95%_84%)_0%,_hsl(var(--background))_38%)]", children: /* @__PURE__ */ R.jsx("main", { className: "mx-auto grid w-full max-w-5xl gap-4 px-4 py-8 md:px-6", children: /* @__PURE__ */ R.jsxs(Zl, { className: "border-white/50 bg-card/90 backdrop-blur-sm", children: [
    /* @__PURE__ */ R.jsx(Jl, { className: "pb-4", children: /* @__PURE__ */ R.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
      /* @__PURE__ */ R.jsxs("div", { children: [
        /* @__PURE__ */ R.jsxs(ql, { className: "flex items-center gap-2 text-2xl", children: [
          /* @__PURE__ */ R.jsx(rp, { className: "h-6 w-6 text-primary" }),
          "Notes API v1 Demo"
        ] }),
        /* @__PURE__ */ R.jsx(Mc, { children: "Express + SQLite (WASM) in WebContainer, rewritten with React + TypeScript." })
      ] }),
      /* @__PURE__ */ R.jsx(tm, { variant: s.status.isError ? "danger" : "secondary", children: s.status.message || "Ready" })
    ] }) }),
    /* @__PURE__ */ R.jsxs(bl, { className: "space-y-6", children: [
      /* @__PURE__ */ R.jsxs("div", { className: "grid gap-4 lg:grid-cols-[0.9fr_1.1fr]", children: [
        /* @__PURE__ */ R.jsx(
          lm,
          {
            title: s.form.title,
            content: s.form.content,
            noteId: s.form.noteId,
            pending: s.isSaving,
            onTitleChange: s.updateTitle,
            onContentChange: s.updateContent,
            onSubmit: s.saveNote,
            onCancel: s.cancelEditing
          }
        ),
        /* @__PURE__ */ R.jsx(
          om,
          {
            notes: s.notes,
            search: s.search,
            onSearchChange: s.updateSearch,
            onEdit: s.editNote,
            onDelete: s.deleteNote
          }
        )
      ] }),
      /* @__PURE__ */ R.jsx(nm, {}),
      /* @__PURE__ */ R.jsx(
        im,
        {
          page: s.pagination.page,
          totalPages: s.pagination.totalPages,
          total: s.pagination.total,
          onPrev: s.prevPage,
          onNext: s.nextPage,
          canPrev: s.pagination.page > 1 && !s.isLoading,
          canNext: s.pagination.page < s.pagination.totalPages && !s.isLoading
        }
      )
    ] })
  ] }) }) });
}
const Ac = document.getElementById("root");
if (!Ac)
  throw new Error("Root container #root not found.");
Gf.createRoot(Ac).render(
  /* @__PURE__ */ R.jsx(Vf.StrictMode, { children: /* @__PURE__ */ R.jsx(gm, {}) })
);
