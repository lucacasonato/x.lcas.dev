import {options as n} from "./mod.js";
var t, u, r, o = 0, i = [], c = n.__b, f = n.__r, e = n.diffed, a = n.__c, v = n.unmount;
function m(t2, r2) {
  n.__h && n.__h(u, t2, o || r2), o = 0;
  var i2 = u.__H || (u.__H = {__: [], __h: []});
  return t2 >= i2.__.length && i2.__.push({}), i2.__[t2];
}
function l(n2) {
  return o = 1, p(w, n2);
}
function p(n2, r2, o2) {
  var i2 = m(t++, 2);
  return i2.t = n2, i2.__c || (i2.__ = [o2 ? o2(r2) : w(void 0, r2), function(n3) {
    var t2 = i2.t(i2.__[0], n3);
    i2.__[0] !== t2 && (i2.__ = [t2, i2.__[1]], i2.__c.setState({}));
  }], i2.__c = u), i2.__;
}
function y(r2, o2) {
  var i2 = m(t++, 3);
  !n.__s && k(i2.__H, o2) && (i2.__ = r2, i2.__H = o2, u.__H.__h.push(i2));
}
function h(r2, o2) {
  var i2 = m(t++, 4);
  !n.__s && k(i2.__H, o2) && (i2.__ = r2, i2.__H = o2, u.__h.push(i2));
}
function s(n2) {
  return o = 5, d(function() {
    return {current: n2};
  }, []);
}
function _(n2, t2, u2) {
  o = 6, h(function() {
    typeof n2 == "function" ? n2(t2()) : n2 && (n2.current = t2());
  }, u2 == null ? u2 : u2.concat(n2));
}
function d(n2, u2) {
  var r2 = m(t++, 7);
  return k(r2.__H, u2) && (r2.__ = n2(), r2.__H = u2, r2.__h = n2), r2.__;
}
function A(n2, t2) {
  return o = 8, d(function() {
    return n2;
  }, t2);
}
function F(n2) {
  var r2 = u.context[n2.__c], o2 = m(t++, 9);
  return o2.__c = n2, r2 ? (o2.__ == null && (o2.__ = true, r2.sub(u)), r2.props.value) : n2.__;
}
function T(t2, u2) {
  n.useDebugValue && n.useDebugValue(u2 ? u2(t2) : t2);
}
function q(n2) {
  var r2 = m(t++, 10), o2 = l();
  return r2.__ = n2, u.componentDidCatch || (u.componentDidCatch = function(n3) {
    r2.__ && r2.__(n3), o2[1](n3);
  }), [o2[0], function() {
    o2[1](void 0);
  }];
}
function x() {
  i.forEach(function(t2) {
    if (t2.__P)
      try {
        t2.__H.__h.forEach(g), t2.__H.__h.forEach(j), t2.__H.__h = [];
      } catch (u2) {
        t2.__H.__h = [], n.__e(u2, t2.__v);
      }
  }), i = [];
}
n.__b = function(n2) {
  u = null, c && c(n2);
}, n.__r = function(n2) {
  f && f(n2), t = 0;
  var r2 = (u = n2.__c).__H;
  r2 && (r2.__h.forEach(g), r2.__h.forEach(j), r2.__h = []);
}, n.diffed = function(t2) {
  e && e(t2);
  var o2 = t2.__c;
  o2 && o2.__H && o2.__H.__h.length && (i.push(o2) !== 1 && r === n.requestAnimationFrame || ((r = n.requestAnimationFrame) || function(n2) {
    var t3, u2 = function() {
      clearTimeout(r2), b && cancelAnimationFrame(t3), setTimeout(n2);
    }, r2 = setTimeout(u2, 100);
    b && (t3 = requestAnimationFrame(u2));
  })(x)), u = void 0;
}, n.__c = function(t2, u2) {
  u2.some(function(t3) {
    try {
      t3.__h.forEach(g), t3.__h = t3.__h.filter(function(n2) {
        return !n2.__ || j(n2);
      });
    } catch (r2) {
      u2.some(function(n2) {
        n2.__h && (n2.__h = []);
      }), u2 = [], n.__e(r2, t3.__v);
    }
  }), a && a(t2, u2);
}, n.unmount = function(t2) {
  v && v(t2);
  var u2 = t2.__c;
  if (u2 && u2.__H)
    try {
      u2.__H.__.forEach(g);
    } catch (t3) {
      n.__e(t3, u2.__v);
    }
};
var b = typeof requestAnimationFrame == "function";
function g(n2) {
  var t2 = u;
  typeof n2.__c == "function" && n2.__c(), u = t2;
}
function j(n2) {
  var t2 = u;
  n2.__c = n2.__(), u = t2;
}
function k(n2, t2) {
  return !n2 || n2.length !== t2.length || t2.some(function(t3, u2) {
    return t3 !== n2[u2];
  });
}
function w(n2, t2) {
  return typeof t2 == "function" ? t2(n2) : t2;
}
export {A as useCallback, F as useContext, T as useDebugValue, y as useEffect, q as useErrorBoundary, _ as useImperativeHandle, h as useLayoutEffect, d as useMemo, p as useReducer, s as useRef, l as useState};
export default null;