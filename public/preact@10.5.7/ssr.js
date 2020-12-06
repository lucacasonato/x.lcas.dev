import {options, createElement, Fragment} from "./mod.js";
var n = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;
function a(e) {
  typeof e != "string" && (e = String(e));
  for (var t = "", r = 0; r < e.length; r++) {
    var n2 = e[r];
    switch (n2) {
      case "<":
        t += "&lt;";
        break;
      case ">":
        t += "&gt;";
        break;
      case '"':
        t += "&quot;";
        break;
      case "&":
        t += "&amp;";
        break;
      default:
        t += n2;
    }
  }
  return t;
}
var o = function(e, t) {
  return String(e).replace(/(\n+)/g, "$1" + (t || "	"));
}, i = function(e, t, r) {
  return String(e).length > (t || 40) || !r && String(e).indexOf("\n") !== -1 || String(e).indexOf("<") !== -1;
}, l = {};
function s(e) {
  var t = "";
  for (var r in e) {
    var a2 = e[r];
    a2 != null && (t && (t += " "), t += r[0] == "-" ? r : l[r] || (l[r] = r.replace(/([A-Z])/g, "-$1").toLowerCase()), t += ": ", t += a2, typeof a2 == "number" && n.test(r) === false && (t += "px"), t += ";");
  }
  return t || void 0;
}
function f(e, t) {
  for (var r in t)
    e[r] = t[r];
  return e;
}
function c(e, t) {
  return Array.isArray(t) ? t.reduce(c, e) : t != null && t !== false && e.push(t), e;
}
var u = {shallow: true}, p = [], _ = /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/, v = function() {
};
h.render = h;
var d = function(e, t) {
  return h(e, t, u);
}, g = [];
function h(n2, l2, u2) {
  var d2 = function n3(l3, u3, d3, g2, h2, m) {
    if (l3 == null || typeof l3 == "boolean")
      return "";
    Array.isArray(l3) && (l3 = createElement(Fragment, null, l3));
    var x = l3.type, y = l3.props, b = false;
    u3 = u3 || {};
    d3 = d3 || {};
    var S = d3.pretty, k = S && typeof S == "string" ? S : "	";
    if (typeof l3 != "object" && !x)
      return a(l3);
    if (typeof x == "function") {
      if (b = true, !d3.shallow || !g2 && d3.renderRootComponent !== false) {
        if (x === Fragment) {
          var w = "", O = [];
          c(O, l3.props.children);
          for (var C = 0; C < O.length; C++)
            w += (C > 0 && S ? "\n" : "") + n3(O[C], u3, d3, d3.shallowHighOrder !== false, h2, m);
          return w;
        }
        var A, H = l3.__c = {__v: l3, context: u3, props: l3.props, setState: v, forceUpdate: v, __h: []};
        if (options.__b && options.__b(l3), options.__r && options.__r(l3), x.prototype && typeof x.prototype.render == "function") {
          var j = x.contextType, F = j && u3[j.__c], M = j != null ? F ? F.props.value : j.__ : u3;
          (H = l3.__c = new x(y, M)).__v = l3, H._dirty = H.__d = true, H.props = y, H.state == null && (H.state = {}), H._nextState == null && H.__s == null && (H._nextState = H.__s = H.state), H.context = M, x.getDerivedStateFromProps ? H.state = f(f({}, H.state), x.getDerivedStateFromProps(H.props, H.state)) : H.componentWillMount && (H.componentWillMount(), H.state = H._nextState !== H.state ? H._nextState : H.__s !== H.state ? H.__s : H.state), A = H.render(H.props, H.state, H.context);
        } else {
          var T = x.contextType, $ = T && u3[T.__c], L = T != null ? $ ? $.props.value : T.__ : u3;
          A = x.call(l3.__c, y, L);
        }
        return H.getChildContext && (u3 = f(f({}, u3), H.getChildContext())), options.diffed && options.diffed(l3), n3(A, u3, d3, d3.shallowHighOrder !== false, h2, m);
      }
      x = (E = x).displayName || E !== Function && E.name || function(e) {
        var t = (Function.prototype.toString.call(e).match(/^\s*function\s+([^( ]+)/) || "")[1];
        if (!t) {
          for (var r = -1, n4 = p.length; n4--; )
            if (p[n4] === e) {
              r = n4;
              break;
            }
          r < 0 && (r = p.push(e) - 1), t = "UnnamedComponent" + r;
        }
        return t;
      }(E);
    }
    var E;
    var D, N, P = "";
    if (y) {
      var R = Object.keys(y);
      d3 && d3.sortAttributes === true && R.sort();
      for (var U = 0; U < R.length; U++) {
        var W = R[U], q = y[W];
        if (W !== "children") {
          if (!W.match(/[\s\n\\/='"\0<>]/) && (d3 && d3.allAttributes || W !== "key" && W !== "ref" && W !== "__self" && W !== "__source" && W !== "defaultValue")) {
            if (W === "className") {
              if (y.class)
                continue;
              W = "class";
            } else
              h2 && W.match(/^xlink:?./) && (W = W.toLowerCase().replace(/^xlink:?/, "xlink:"));
            if (W === "htmlFor") {
              if (y.for)
                continue;
              W = "for";
            }
            W === "style" && q && typeof q == "object" && (q = s(q)), W[0] === "a" && W[1] === "r" && typeof q == "boolean" && (q = String(q));
            var z = d3.attributeHook && d3.attributeHook(W, q, u3, d3, b);
            if (z || z === "")
              P += z;
            else if (W === "dangerouslySetInnerHTML")
              N = q && q.__html;
            else if (x === "textarea" && W === "value")
              D = q;
            else if ((q || q === 0 || q === "") && typeof q != "function") {
              if (!(q !== true && q !== "" || (q = W, d3 && d3.xml))) {
                P += " " + W;
                continue;
              }
              if (W === "value") {
                if (x === "select") {
                  m = q;
                  continue;
                }
                x === "option" && m == q && (P += " selected");
              }
              P += " " + W + '="' + a(q) + '"';
            }
          }
        } else
          D = q;
      }
    }
    if (S) {
      var I = P.replace(/^\n\s*/, " ");
      I === P || ~I.indexOf("\n") ? S && ~P.indexOf("\n") && (P += "\n") : P = I;
    }
    P = "<" + x + P + ">";
    if (String(x).match(/[\s\n\\/='"\0<>]/))
      throw new Error(x + " is not a valid HTML tag name in " + P);
    var V = String(x).match(_) || d3.voidElements && String(x).match(d3.voidElements);
    var Z = [];
    var B;
    if (N)
      S && i(N) && (N = "\n" + k + o(N, k)), P += N;
    else if (D != null && c(B = [], D).length) {
      for (var G = S && ~P.indexOf("\n"), J = false, K = 0; K < B.length; K++) {
        var Q = B[K];
        if (Q != null && Q !== false) {
          var X = x === "svg" || x !== "foreignObject" && h2, Y = n3(Q, u3, d3, true, X, m);
          if (S && !G && i(Y) && (G = true), Y)
            if (S) {
              var ee = Y.length > 0 && Y[0] != "<";
              J && ee ? Z[Z.length - 1] += Y : Z.push(Y), J = ee;
            } else
              Z.push(Y);
        }
      }
      if (S && G)
        for (var te = Z.length; te--; )
          Z[te] = "\n" + k + o(Z[te], k);
    }
    if (Z.length || N)
      P += Z.join("");
    else if (d3 && d3.xml)
      return P.substring(0, P.length - 1) + " />";
    !V || B || N ? (S && ~P.indexOf("\n") && (P += "\n"), P += "</" + x + ">") : P = P.replace(/>$/, " />");
    return P;
  }(n2, l2, u2);
  return options.__c && options.__c(n2, g), d2;
}
h.shallowRender = d;
export default h;
export {h as render, h as renderToStaticMarkup, h as renderToString, d as shallowRender};