import {Component as p$1, Fragment as y$1, options as n} from "./mod.js";
function t(o, e) {
  return n.__a && n.__a(e), o;
}
typeof window != "undefined" && window.__PREACT_DEVTOOLS__ && window.__PREACT_DEVTOOLS__.attachPreact("10.5.12", n, {Fragment: y$1, Component: p$1});
export {t as addHookName};
var o = {};
function r() {
  o = {};
}
function a(n2) {
  return n2.type === y$1 ? "Fragment" : typeof n2.type == "function" ? n2.type.displayName || n2.type.name : typeof n2.type == "string" ? n2.type : "#text";
}
var i = [], s = [];
function c() {
  return i.length > 0 ? i[i.length - 1] : null;
}
var l = false;
function u(n2) {
  return typeof n2.type == "function" && n2.type != y$1;
}
function f(n2) {
  for (var t = [n2], e = n2; e.__o != null; )
    t.push(e.__o), e = e.__o;
  return t.reduce(function(n3, t2) {
    n3 += "  in " + a(t2);
    var e2 = t2.__source;
    return e2 ? n3 += " (at " + e2.fileName + ":" + e2.lineNumber + ")" : l || (l = true, console.warn("Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons.")), n3 + "\n";
  }, "");
}
var p = typeof WeakMap == "function", d = p$1.prototype.setState;
p$1.prototype.setState = function(n2, t) {
  return this.__v == null ? this.state == null && console.warn('Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.\n\n' + f(c())) : this.__P == null && console.warn(`Can't call "this.setState" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.

` + f(this.__v)), d.call(this, n2, t);
};
var h = p$1.prototype.forceUpdate;
function y(n2) {
  var t = n2.props, e = a(n2), o2 = "";
  for (var r2 in t)
    if (t.hasOwnProperty(r2) && r2 !== "children") {
      var i2 = t[r2];
      typeof i2 == "function" && (i2 = "function " + (i2.displayName || i2.name) + "() {}"), i2 = Object(i2) !== i2 || i2.toString ? i2 + "" : Object.prototype.toString.call(i2), o2 += " " + r2 + "=" + JSON.stringify(i2);
    }
  var s2 = t.children;
  return "<" + e + o2 + (s2 && s2.length ? ">..</" + e + ">" : " />");
}
p$1.prototype.forceUpdate = function(n2) {
  return this.__v == null ? console.warn('Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.\n\n' + f(c())) : this.__P == null && console.warn(`Can't call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.

` + f(this.__v)), h.call(this, n2);
}, function() {
  !function() {
    var t2 = n.__b, e2 = n.diffed, o2 = n.__, r3 = n.vnode, a2 = n.__r;
    n.diffed = function(n2) {
      u(n2) && s.pop(), i.pop(), e2 && e2(n2);
    }, n.__b = function(n2) {
      u(n2) && i.push(n2), t2 && t2(n2);
    }, n.__ = function(n2, t3) {
      s = [], o2 && o2(n2, t3);
    }, n.vnode = function(n2) {
      n2.__o = s.length > 0 ? s[s.length - 1] : null, r3 && r3(n2);
    }, n.__r = function(n2) {
      u(n2) && s.push(n2), a2 && a2(n2);
    };
  }();
  var t = false, e = n.__b, r2 = n.diffed, c2 = n.vnode, l2 = n.__e, d2 = n.__, h2 = n.__h, m = p ? {useEffect: new WeakMap(), useLayoutEffect: new WeakMap(), lazyPropTypes: new WeakMap()} : null, v = [];
  n.__e = function(n2, t2, e2) {
    if (t2 && t2.__c && typeof n2.then == "function") {
      var o2 = n2;
      n2 = new Error("Missing Suspense. The throwing component was: " + a(t2));
      for (var r3 = t2; r3; r3 = r3.__)
        if (r3.__c && r3.__c.__c) {
          n2 = o2;
          break;
        }
      if (n2 instanceof Error)
        throw n2;
    }
    try {
      l2(n2, t2, e2), typeof n2.then != "function" && setTimeout(function() {
        throw n2;
      });
    } catch (n3) {
      throw n3;
    }
  }, n.__ = function(n2, t2) {
    if (!t2)
      throw new Error("Undefined parent passed to render(), this is the second argument.\nCheck if the element is available in the DOM/has the correct id.");
    var e2;
    switch (t2.nodeType) {
      case 1:
      case 11:
      case 9:
        e2 = true;
        break;
      default:
        e2 = false;
    }
    if (!e2) {
      var o2 = a(n2);
      throw new Error("Expected a valid HTML node as a second argument to render.	Received " + t2 + " instead: render(<" + o2 + " />, " + t2 + ");");
    }
    d2 && d2(n2, t2);
  }, n.__b = function(n2) {
    var r3 = n2.type, i2 = function n3(t2) {
      return t2 ? typeof t2.type == "function" ? n3(t2.__) : t2 : {};
    }(n2.__);
    if (t = true, r3 === void 0)
      throw new Error("Undefined component passed to createElement()\n\nYou likely forgot to export your component or might have mixed up default and named imports" + y(n2) + "\n\n" + f(n2));
    if (r3 != null && typeof r3 == "object") {
      if (r3.__k !== void 0 && r3.__e !== void 0)
        throw new Error("Invalid type passed to createElement(): " + r3 + "\n\nDid you accidentally pass a JSX literal as JSX twice?\n\n  let My" + a(n2) + " = " + y(r3) + ";\n  let vnode = <My" + a(n2) + " />;\n\nThis usually happens when you export a JSX literal and not the component.\n\n" + f(n2));
      throw new Error("Invalid type passed to createElement(): " + (Array.isArray(r3) ? "array" : r3));
    }
    if (r3 !== "thead" && r3 !== "tfoot" && r3 !== "tbody" || i2.type === "table" ? r3 === "tr" && i2.type !== "thead" && i2.type !== "tfoot" && i2.type !== "tbody" && i2.type !== "table" ? console.error("Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot/table> parent." + y(n2) + "\n\n" + f(n2)) : r3 === "td" && i2.type !== "tr" ? console.error("Improper nesting of table. Your <td> should have a <tr> parent." + y(n2) + "\n\n" + f(n2)) : r3 === "th" && i2.type !== "tr" && console.error("Improper nesting of table. Your <th> should have a <tr>." + y(n2) + "\n\n" + f(n2)) : console.error("Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent." + y(n2) + "\n\n" + f(n2)), n2.ref !== void 0 && typeof n2.ref != "function" && typeof n2.ref != "object" && !("$$typeof" in n2))
      throw new Error(`Component's "ref" property should be a function, or an object created by createRef(), but got [` + typeof n2.ref + "] instead\n" + y(n2) + "\n\n" + f(n2));
    if (typeof n2.type == "string") {
      for (var s2 in n2.props)
        if (s2[0] === "o" && s2[1] === "n" && typeof n2.props[s2] != "function" && n2.props[s2] != null)
          throw new Error(`Component's "` + s2 + '" property should be a function, but got [' + typeof n2.props[s2] + "] instead\n" + y(n2) + "\n\n" + f(n2));
    }
    if (typeof n2.type == "function" && n2.type.propTypes) {
      if (n2.type.displayName === "Lazy" && m && !m.lazyPropTypes.has(n2.type)) {
        var c3 = "PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ";
        try {
          var l3 = n2.type();
          m.lazyPropTypes.set(n2.type, true), console.warn(c3 + "Component wrapped in lazy() is " + a(l3));
        } catch (n3) {
          console.warn(c3 + "We will log the wrapped component's name once it is loaded.");
        }
      }
      var u2 = n2.props;
      n2.type.__f && delete (u2 = function(n3, t2) {
        for (var e2 in t2)
          n3[e2] = t2[e2];
        return n3;
      }({}, u2)).ref, function(n3, t2, e2, r4, a2) {
        Object.keys(n3).forEach(function(e3) {
          var i3;
          try {
            i3 = n3[e3](t2, e3, r4, "prop", null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
          } catch (n4) {
            i3 = n4;
          }
          !i3 || i3.message in o || (o[i3.message] = true, console.error("Failed prop type: " + i3.message + (a2 && "\n" + a2() || "")));
        });
      }(n2.type.propTypes, u2, 0, a(n2), function() {
        return f(n2);
      });
    }
    e && e(n2);
  }, n.__h = function(n2, e2, o2) {
    if (!n2 || !t)
      throw new Error("Hook can only be invoked from render methods.");
    h2 && h2(n2, e2, o2);
  };
  var b = function(n2, t2) {
    return {get: function() {
      var e2 = "get" + n2 + t2;
      v && v.indexOf(e2) < 0 && (v.push(e2), console.warn("getting vnode." + n2 + " is deprecated, " + t2));
    }, set: function() {
      var e2 = "set" + n2 + t2;
      v && v.indexOf(e2) < 0 && (v.push(e2), console.warn("setting vnode." + n2 + " is not allowed, " + t2));
    }};
  }, w = {nodeName: b("nodeName", "use vnode.type"), attributes: b("attributes", "use vnode.props"), children: b("children", "use vnode.props.children")}, g = Object.create({}, w);
  n.vnode = function(n2) {
    var t2 = n2.props;
    if (n2.type !== null && t2 != null && ("__source" in t2 || "__self" in t2)) {
      var e2 = n2.props = {};
      for (var o2 in t2) {
        var r3 = t2[o2];
        o2 === "__source" ? n2.__source = r3 : o2 === "__self" ? n2.__self = r3 : e2[o2] = r3;
      }
    }
    n2.__proto__ = g, c2 && c2(n2);
  }, n.diffed = function(n2) {
    if (n2.__k && n2.__k.forEach(function(t2) {
      if (t2 && t2.type === void 0) {
        delete t2.__, delete t2.__b;
        var e3 = Object.keys(t2).join(",");
        throw new Error("Objects are not valid as a child. Encountered an object with the keys {" + e3 + "}.\n\n" + f(n2));
      }
    }), t = false, r2 && r2(n2), n2.__k != null)
      for (var e2 = [], o2 = 0; o2 < n2.__k.length; o2++) {
        var a2 = n2.__k[o2];
        if (a2 && a2.key != null) {
          var i2 = a2.key;
          if (e2.indexOf(i2) !== -1) {
            console.error('Following component has two or more children with the same key attribute: "' + i2 + '". This may cause glitches and misbehavior in rendering process. Component: \n\n' + y(n2) + "\n\n" + f(n2));
            break;
          }
          e2.push(i2);
        }
      }
  };
}();
export {r as resetPropWarnings};
export default null;