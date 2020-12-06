var n, l, u, i, t, o, r, f = {}, e = [], c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function s(n2, l2) {
  for (var u2 in l2)
    n2[u2] = l2[u2];
  return n2;
}
function a(n2) {
  var l2 = n2.parentNode;
  l2 && l2.removeChild(n2);
}
function v(n2, l2, u2) {
  var i2, t2, o2, r2 = arguments, f2 = {};
  for (o2 in l2)
    o2 == "key" ? i2 = l2[o2] : o2 == "ref" ? t2 = l2[o2] : f2[o2] = l2[o2];
  if (arguments.length > 3)
    for (u2 = [u2], o2 = 3; o2 < arguments.length; o2++)
      u2.push(r2[o2]);
  if (u2 != null && (f2.children = u2), typeof n2 == "function" && n2.defaultProps != null)
    for (o2 in n2.defaultProps)
      f2[o2] === void 0 && (f2[o2] = n2.defaultProps[o2]);
  return h(n2, f2, i2, t2, null);
}
function h(l2, u2, i2, t2, o2) {
  var r2 = {type: l2, props: u2, key: i2, ref: t2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o2 == null ? ++n.__v : o2};
  return n.vnode != null && n.vnode(r2), r2;
}
function y() {
  return {current: null};
}
function p(n2) {
  return n2.children;
}
function d(n2, l2) {
  this.props = n2, this.context = l2;
}
function _(n2, l2) {
  if (l2 == null)
    return n2.__ ? _(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
  for (var u2; l2 < n2.__k.length; l2++)
    if ((u2 = n2.__k[l2]) != null && u2.__e != null)
      return u2.__e;
  return typeof n2.type == "function" ? _(n2) : null;
}
function w(n2) {
  var l2, u2;
  if ((n2 = n2.__) != null && n2.__c != null) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
      if ((u2 = n2.__k[l2]) != null && u2.__e != null) {
        n2.__e = n2.__c.base = u2.__e;
        break;
      }
    return w(n2);
  }
}
function k(l2) {
  (!l2.__d && (l2.__d = true) && u.push(l2) && !g.__r++ || t !== n.debounceRendering) && ((t = n.debounceRendering) || i)(g);
}
function g() {
  for (var n2; g.__r = u.length; )
    n2 = u.sort(function(n3, l2) {
      return n3.__v.__b - l2.__v.__b;
    }), u = [], n2.some(function(n3) {
      var l2, u2, i2, t2, o2, r2, f2;
      n3.__d && (r2 = (o2 = (l2 = n3).__v).__e, (f2 = l2.__P) && (u2 = [], (i2 = s({}, o2)).__v = o2.__v + 1, t2 = $(f2, o2, i2, l2.__n, f2.ownerSVGElement !== void 0, o2.__h != null ? [r2] : null, u2, r2 == null ? _(o2) : r2, o2.__h), j(u2, o2), t2 != r2 && w(o2)));
    });
}
function m(n2, l2, u2, i2, t2, o2, r2, c2, s2, v2) {
  var y2, d2, w2, k2, g2, m2, b2, A2 = i2 && i2.__k || e, P2 = A2.length;
  for (s2 == f && (s2 = r2 != null ? r2[0] : P2 ? _(i2, 0) : null), u2.__k = [], y2 = 0; y2 < l2.length; y2++)
    if ((k2 = u2.__k[y2] = (k2 = l2[y2]) == null || typeof k2 == "boolean" ? null : typeof k2 == "string" || typeof k2 == "number" ? h(null, k2, null, null, k2) : Array.isArray(k2) ? h(p, {children: k2}, null, null, null) : k2.__e != null || k2.__c != null ? h(k2.type, k2.props, k2.key, null, k2.__v) : k2) != null) {
      if (k2.__ = u2, k2.__b = u2.__b + 1, (w2 = A2[y2]) === null || w2 && k2.key == w2.key && k2.type === w2.type)
        A2[y2] = void 0;
      else
        for (d2 = 0; d2 < P2; d2++) {
          if ((w2 = A2[d2]) && k2.key == w2.key && k2.type === w2.type) {
            A2[d2] = void 0;
            break;
          }
          w2 = null;
        }
      g2 = $(n2, k2, w2 = w2 || f, t2, o2, r2, c2, s2, v2), (d2 = k2.ref) && w2.ref != d2 && (b2 || (b2 = []), w2.ref && b2.push(w2.ref, null, k2), b2.push(d2, k2.__c || g2, k2)), g2 != null ? (m2 == null && (m2 = g2), s2 = x(n2, k2, w2, A2, r2, g2, s2), v2 || u2.type != "option" ? typeof u2.type == "function" && (u2.__d = s2) : n2.value = "") : s2 && w2.__e == s2 && s2.parentNode != n2 && (s2 = _(w2));
    }
  if (u2.__e = m2, r2 != null && typeof u2.type != "function")
    for (y2 = r2.length; y2--; )
      r2[y2] != null && a(r2[y2]);
  for (y2 = P2; y2--; )
    A2[y2] != null && L(A2[y2], A2[y2]);
  if (b2)
    for (y2 = 0; y2 < b2.length; y2++)
      I(b2[y2], b2[++y2], b2[++y2]);
}
function b(n2, l2) {
  return l2 = l2 || [], n2 == null || typeof n2 == "boolean" || (Array.isArray(n2) ? n2.some(function(n3) {
    b(n3, l2);
  }) : l2.push(n2)), l2;
}
function x(n2, l2, u2, i2, t2, o2, r2) {
  var f2, e2, c2;
  if (l2.__d !== void 0)
    f2 = l2.__d, l2.__d = void 0;
  else if (t2 == u2 || o2 != r2 || o2.parentNode == null)
    n:
      if (r2 == null || r2.parentNode !== n2)
        n2.appendChild(o2), f2 = null;
      else {
        for (e2 = r2, c2 = 0; (e2 = e2.nextSibling) && c2 < i2.length; c2 += 2)
          if (e2 == o2)
            break n;
        n2.insertBefore(o2, r2), f2 = r2;
      }
  return f2 !== void 0 ? f2 : o2.nextSibling;
}
function A(n2, l2, u2, i2, t2) {
  var o2;
  for (o2 in u2)
    o2 === "children" || o2 === "key" || o2 in l2 || C(n2, o2, null, u2[o2], i2);
  for (o2 in l2)
    t2 && typeof l2[o2] != "function" || o2 === "children" || o2 === "key" || o2 === "value" || o2 === "checked" || u2[o2] === l2[o2] || C(n2, o2, l2[o2], u2[o2], i2);
}
function P(n2, l2, u2) {
  l2[0] === "-" ? n2.setProperty(l2, u2) : n2[l2] = u2 == null ? "" : typeof u2 != "number" || c.test(l2) ? u2 : u2 + "px";
}
function C(n2, l2, u2, i2, t2) {
  var o2, r2, f2;
  if (t2 && l2 == "className" && (l2 = "class"), l2 === "style")
    if (typeof u2 == "string")
      n2.style.cssText = u2;
    else {
      if (typeof i2 == "string" && (n2.style.cssText = i2 = ""), i2)
        for (l2 in i2)
          u2 && l2 in u2 || P(n2.style, l2, "");
      if (u2)
        for (l2 in u2)
          i2 && u2[l2] === i2[l2] || P(n2.style, l2, u2[l2]);
    }
  else
    l2[0] === "o" && l2[1] === "n" ? (o2 = l2 !== (l2 = l2.replace(/Capture$/, "")), (r2 = l2.toLowerCase()) in n2 && (l2 = r2), l2 = l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + o2] = u2, f2 = o2 ? N : z, u2 ? i2 || n2.addEventListener(l2, f2, o2) : n2.removeEventListener(l2, f2, o2)) : l2 !== "list" && l2 !== "tagName" && l2 !== "form" && l2 !== "type" && l2 !== "size" && l2 !== "download" && l2 !== "href" && !t2 && l2 in n2 ? n2[l2] = u2 == null ? "" : u2 : typeof u2 != "function" && l2 !== "dangerouslySetInnerHTML" && (l2 !== (l2 = l2.replace(/xlink:?/, "")) ? u2 == null || u2 === false ? n2.removeAttributeNS("http://www.w3.org/1999/xlink", l2.toLowerCase()) : n2.setAttributeNS("http://www.w3.org/1999/xlink", l2.toLowerCase(), u2) : u2 == null || u2 === false && !/^ar/.test(l2) ? n2.removeAttribute(l2) : n2.setAttribute(l2, u2));
}
function z(l2) {
  this.l[l2.type + false](n.event ? n.event(l2) : l2);
}
function N(l2) {
  this.l[l2.type + true](n.event ? n.event(l2) : l2);
}
function T(n2, l2, u2) {
  var i2, t2;
  for (i2 = 0; i2 < n2.__k.length; i2++)
    (t2 = n2.__k[i2]) && (t2.__ = n2, t2.__e && (typeof t2.type == "function" && t2.__k.length > 1 && T(t2, l2, u2), l2 = x(u2, t2, t2, n2.__k, null, t2.__e, l2), typeof n2.type == "function" && (n2.__d = l2)));
}
function $(l2, u2, i2, t2, o2, r2, f2, e2, c2) {
  var a2, v2, h2, y2, _2, w2, k2, g2, b2, x2, A2, P2 = u2.type;
  if (u2.constructor !== void 0)
    return null;
  i2.__h != null && (c2 = i2.__h, e2 = u2.__e = i2.__e, u2.__h = null, r2 = [e2]), (a2 = n.__b) && a2(u2);
  try {
    n:
      if (typeof P2 == "function") {
        if (g2 = u2.props, b2 = (a2 = P2.contextType) && t2[a2.__c], x2 = a2 ? b2 ? b2.props.value : a2.__ : t2, i2.__c ? k2 = (v2 = u2.__c = i2.__c).__ = v2.__E : ("prototype" in P2 && P2.prototype.render ? u2.__c = v2 = new P2(g2, x2) : (u2.__c = v2 = new d(g2, x2), v2.constructor = P2, v2.render = M), b2 && b2.sub(v2), v2.props = g2, v2.state || (v2.state = {}), v2.context = x2, v2.__n = t2, h2 = v2.__d = true, v2.__h = []), v2.__s == null && (v2.__s = v2.state), P2.getDerivedStateFromProps != null && (v2.__s == v2.state && (v2.__s = s({}, v2.__s)), s(v2.__s, P2.getDerivedStateFromProps(g2, v2.__s))), y2 = v2.props, _2 = v2.state, h2)
          P2.getDerivedStateFromProps == null && v2.componentWillMount != null && v2.componentWillMount(), v2.componentDidMount != null && v2.__h.push(v2.componentDidMount);
        else {
          if (P2.getDerivedStateFromProps == null && g2 !== y2 && v2.componentWillReceiveProps != null && v2.componentWillReceiveProps(g2, x2), !v2.__e && v2.shouldComponentUpdate != null && v2.shouldComponentUpdate(g2, v2.__s, x2) === false || u2.__v === i2.__v) {
            v2.props = g2, v2.state = v2.__s, u2.__v !== i2.__v && (v2.__d = false), v2.__v = u2, u2.__e = i2.__e, u2.__k = i2.__k, v2.__h.length && f2.push(v2), T(u2, e2, l2);
            break n;
          }
          v2.componentWillUpdate != null && v2.componentWillUpdate(g2, v2.__s, x2), v2.componentDidUpdate != null && v2.__h.push(function() {
            v2.componentDidUpdate(y2, _2, w2);
          });
        }
        v2.context = x2, v2.props = g2, v2.state = v2.__s, (a2 = n.__r) && a2(u2), v2.__d = false, v2.__v = u2, v2.__P = l2, a2 = v2.render(v2.props, v2.state, v2.context), v2.state = v2.__s, v2.getChildContext != null && (t2 = s(s({}, t2), v2.getChildContext())), h2 || v2.getSnapshotBeforeUpdate == null || (w2 = v2.getSnapshotBeforeUpdate(y2, _2)), A2 = a2 != null && a2.type == p && a2.key == null ? a2.props.children : a2, m(l2, Array.isArray(A2) ? A2 : [A2], u2, i2, t2, o2, r2, f2, e2, c2), v2.base = u2.__e, u2.__h = null, v2.__h.length && f2.push(v2), k2 && (v2.__E = v2.__ = null), v2.__e = false;
      } else
        r2 == null && u2.__v === i2.__v ? (u2.__k = i2.__k, u2.__e = i2.__e) : u2.__e = H(i2.__e, u2, i2, t2, o2, r2, f2, c2);
    (a2 = n.diffed) && a2(u2);
  } catch (l3) {
    u2.__v = null, (c2 || r2 != null) && (u2.__e = e2, u2.__h = !!c2, r2[r2.indexOf(e2)] = null), n.__e(l3, u2, i2);
  }
  return u2.__e;
}
function j(l2, u2) {
  n.__c && n.__c(u2, l2), l2.some(function(u3) {
    try {
      l2 = u3.__h, u3.__h = [], l2.some(function(n2) {
        n2.call(u3);
      });
    } catch (l3) {
      n.__e(l3, u3.__v);
    }
  });
}
function H(n2, l2, u2, i2, t2, o2, r2, c2) {
  var s2, a2, v2, h2, y2, p2 = u2.props, d2 = l2.props;
  if (t2 = l2.type === "svg" || t2, o2 != null) {
    for (s2 = 0; s2 < o2.length; s2++)
      if ((a2 = o2[s2]) != null && ((l2.type === null ? a2.nodeType === 3 : a2.localName === l2.type) || n2 == a2)) {
        n2 = a2, o2[s2] = null;
        break;
      }
  }
  if (n2 == null) {
    if (l2.type === null)
      return document.createTextNode(d2);
    n2 = t2 ? document.createElementNS("http://www.w3.org/2000/svg", l2.type) : document.createElement(l2.type, d2.is && {is: d2.is}), o2 = null, c2 = false;
  }
  if (l2.type === null)
    p2 === d2 || c2 && n2.data === d2 || (n2.data = d2);
  else {
    if (o2 != null && (o2 = e.slice.call(n2.childNodes)), v2 = (p2 = u2.props || f).dangerouslySetInnerHTML, h2 = d2.dangerouslySetInnerHTML, !c2) {
      if (o2 != null)
        for (p2 = {}, y2 = 0; y2 < n2.attributes.length; y2++)
          p2[n2.attributes[y2].name] = n2.attributes[y2].value;
      (h2 || v2) && (h2 && (v2 && h2.__html == v2.__html || h2.__html === n2.innerHTML) || (n2.innerHTML = h2 && h2.__html || ""));
    }
    A(n2, d2, p2, t2, c2), h2 ? l2.__k = [] : (s2 = l2.props.children, m(n2, Array.isArray(s2) ? s2 : [s2], l2, u2, i2, l2.type !== "foreignObject" && t2, o2, r2, f, c2)), c2 || ("value" in d2 && (s2 = d2.value) !== void 0 && (s2 !== n2.value || l2.type === "progress" && !s2) && C(n2, "value", s2, p2.value, false), "checked" in d2 && (s2 = d2.checked) !== void 0 && s2 !== n2.checked && C(n2, "checked", s2, p2.checked, false));
  }
  return n2;
}
function I(l2, u2, i2) {
  try {
    typeof l2 == "function" ? l2(u2) : l2.current = u2;
  } catch (l3) {
    n.__e(l3, i2);
  }
}
function L(l2, u2, i2) {
  var t2, o2, r2;
  if (n.unmount && n.unmount(l2), (t2 = l2.ref) && (t2.current && t2.current !== l2.__e || I(t2, null, u2)), i2 || typeof l2.type == "function" || (i2 = (o2 = l2.__e) != null), l2.__e = l2.__d = void 0, (t2 = l2.__c) != null) {
    if (t2.componentWillUnmount)
      try {
        t2.componentWillUnmount();
      } catch (l3) {
        n.__e(l3, u2);
      }
    t2.base = t2.__P = null;
  }
  if (t2 = l2.__k)
    for (r2 = 0; r2 < t2.length; r2++)
      t2[r2] && L(t2[r2], u2, i2);
  o2 != null && a(o2);
}
function M(n2, l2, u2) {
  return this.constructor(n2, u2);
}
function O(l2, u2, i2) {
  var t2, r2, c2;
  n.__ && n.__(l2, u2), r2 = (t2 = i2 === o) ? null : i2 && i2.__k || u2.__k, l2 = v(p, null, [l2]), c2 = [], $(u2, (t2 ? u2 : i2 || u2).__k = l2, r2 || f, f, u2.ownerSVGElement !== void 0, i2 && !t2 ? [i2] : r2 ? null : u2.childNodes.length ? e.slice.call(u2.childNodes) : null, c2, i2 || f, t2), j(c2, l2);
}
function S(n2, l2) {
  O(n2, l2, o);
}
function q(n2, l2, u2) {
  var i2, t2, o2, r2 = arguments, f2 = s({}, n2.props);
  for (o2 in l2)
    o2 == "key" ? i2 = l2[o2] : o2 == "ref" ? t2 = l2[o2] : f2[o2] = l2[o2];
  if (arguments.length > 3)
    for (u2 = [u2], o2 = 3; o2 < arguments.length; o2++)
      u2.push(r2[o2]);
  return u2 != null && (f2.children = u2), h(n2.type, f2, i2 || n2.key, t2 || n2.ref, null);
}
function B(n2, l2) {
  var u2 = {__c: l2 = "__cC" + r++, __: n2, Consumer: function(n3, l3) {
    return n3.children(l3);
  }, Provider: function(n3, u3, i2) {
    return this.getChildContext || (u3 = [], (i2 = {})[l2] = this, this.getChildContext = function() {
      return i2;
    }, this.shouldComponentUpdate = function(n4) {
      this.props.value !== n4.value && u3.some(k);
    }, this.sub = function(n4) {
      u3.push(n4);
      var l3 = n4.componentWillUnmount;
      n4.componentWillUnmount = function() {
        u3.splice(u3.indexOf(n4), 1), l3 && l3.call(n4);
      };
    }), n3.children;
  }};
  return u2.Provider.__ = u2.Consumer.contextType = u2;
}
n = {__e: function(n2, l2) {
  for (var u2, i2, t2, o2 = l2.__h; l2 = l2.__; )
    if ((u2 = l2.__c) && !u2.__)
      try {
        if ((i2 = u2.constructor) && i2.getDerivedStateFromError != null && (u2.setState(i2.getDerivedStateFromError(n2)), t2 = u2.__d), u2.componentDidCatch != null && (u2.componentDidCatch(n2), t2 = u2.__d), t2)
          return l2.__h = o2, u2.__E = u2;
      } catch (l3) {
        n2 = l3;
      }
  throw n2;
}, __v: 0}, l = function(n2) {
  return n2 != null && n2.constructor === void 0;
}, d.prototype.setState = function(n2, l2) {
  var u2;
  u2 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), typeof n2 == "function" && (n2 = n2(s({}, u2), this.props)), n2 && s(u2, n2), n2 != null && this.__v && (l2 && this.__h.push(l2), k(this));
}, d.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), k(this));
}, d.prototype.render = p, u = [], i = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g.__r = 0, o = f, r = 0;
export {d as Component, p as Fragment, L as __u, q as cloneElement, B as createContext, v as createElement, y as createRef, v as h, S as hydrate, l as isValidElement, n as options, O as render, b as toChildArray};
export default null;