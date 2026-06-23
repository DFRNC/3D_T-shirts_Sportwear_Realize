var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __reflectGet = Reflect.get;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var __superGet = (cls, obj, key) => __reflectGet(__getProtoOf(cls), key, obj);
var _media, _isInit2, _remotePlayer, _remoteListeners, _state, _available, _callbacks, _callbackIds, _onTextTrackChange, _RemotePlayback_instances, castPlayer_get, disconnect_fn, hasDevicesAvailable_fn, onCastStateChanged_fn, onSessionStateChanged_fn, init_fn2, onRemoteMediaLoaded_fn, updateRemoteTextTrack_fn;
import { R as React, r as reactExports } from "./r3f-storefront-entry.js";
import { H as Hls, C as CapLevelController } from "./r3f-hls.js";
import { C as CustomVideoElement, M as MediaTracksMixin } from "./r3f-mixin.js";
var ta$1 = Object.create;
var pt$1 = Object.defineProperty;
var ra = Object.getOwnPropertyDescriptor;
var aa$1 = Object.getOwnPropertyNames;
var ia = Object.getPrototypeOf, na$1 = Object.prototype.hasOwnProperty;
var mt$2 = function(r11, e) {
  return function() {
    return r11 && (e = r11(r11 = 0)), e;
  };
};
var B$4 = function(r11, e) {
  return function() {
    return e || r11((e = { exports: {} }).exports, e), e.exports;
  };
};
var oa$1 = function(r11, e, t3, i2) {
  if (e && typeof e == "object" || typeof e == "function") for (var a = aa$1(e), n2 = 0, o2 = a.length, s3; n2 < o2; n2++) s3 = a[n2], !na$1.call(r11, s3) && s3 !== t3 && pt$1(r11, s3, { get: (function(u2) {
    return e[u2];
  }).bind(null, s3), enumerable: !(i2 = ra(e, s3)) || i2.enumerable });
  return r11;
};
var G$3 = function(r11, e, t3) {
  return t3 = r11 != null ? ta$1(ia(r11)) : {}, oa$1(!r11 || !r11.__esModule ? pt$1(t3, "default", { value: r11, enumerable: true }) : t3, r11);
};
var Q$2 = B$4(function(tn, gt2) {
  var De2;
  typeof window != "undefined" ? De2 = window : typeof global != "undefined" ? De2 = global : typeof self != "undefined" ? De2 = self : De2 = {};
  gt2.exports = De2;
});
function U$3(r11, e) {
  return e != null && typeof Symbol != "undefined" && e[Symbol.hasInstance] ? !!e[Symbol.hasInstance](r11) : U$3(r11, e);
}
var ae$3 = mt$2(function() {
  ae$3();
});
function Me$2(r11) {
  "@swc/helpers - typeof";
  return r11 && typeof Symbol != "undefined" && r11.constructor === Symbol ? "symbol" : typeof r11;
}
var Ke$2 = mt$2(function() {
});
var $e$1 = B$4(function(As, lr) {
  var ur2 = Array.prototype.slice;
  lr.exports = Ca;
  function Ca(r11, e) {
    for (("length" in r11) || (r11 = [r11]), r11 = ur2.call(r11); r11.length; ) {
      var t3 = r11.shift(), i2 = e(t3);
      if (i2) return i2;
      t3.childNodes && t3.childNodes.length && (r11 = ur2.call(t3.childNodes).concat(r11));
    }
  }
});
var cr$1 = B$4(function(Ps, dr) {
  ae$3();
  dr.exports = ye3;
  function ye3(r11, e) {
    if (!U$3(this, ye3)) return new ye3(r11, e);
    this.data = r11, this.nodeValue = r11, this.length = r11.length, this.ownerDocument = e || null;
  }
  ye3.prototype.nodeType = 8;
  ye3.prototype.nodeName = "#comment";
  ye3.prototype.toString = function() {
    return "[object Comment]";
  };
});
var fr$1 = B$4(function(Is, _r) {
  ae$3();
  _r.exports = ne2;
  function ne2(r11, e) {
    if (!U$3(this, ne2)) return new ne2(r11);
    this.data = r11 || "", this.length = this.data.length, this.ownerDocument = e || null;
  }
  ne2.prototype.type = "DOMTextNode";
  ne2.prototype.nodeType = 3;
  ne2.prototype.nodeName = "#text";
  ne2.prototype.toString = function() {
    return this.data;
  };
  ne2.prototype.replaceData = function(e, t3, i2) {
    var a = this.data, n2 = a.substring(0, e), o2 = a.substring(e + t3, a.length);
    this.data = n2 + i2 + o2, this.length = this.data.length;
  };
});
var Ze$1 = B$4(function(Ns, pr) {
  pr.exports = Ma2;
  function Ma2(r11) {
    var e = this, t3 = r11.type;
    r11.target || (r11.target = e), e.listeners || (e.listeners = {});
    var i2 = e.listeners[t3];
    if (i2) return i2.forEach(function(a) {
      r11.currentTarget = e, typeof a == "function" ? a(r11) : a.handleEvent(r11);
    });
    e.parentNode && e.parentNode.dispatchEvent(r11);
  }
});
var et$1 = B$4(function(Cs, mr2) {
  mr2.exports = Ha;
  function Ha(r11, e) {
    var t3 = this;
    t3.listeners || (t3.listeners = {}), t3.listeners[r11] || (t3.listeners[r11] = []), t3.listeners[r11].indexOf(e) === -1 && t3.listeners[r11].push(e);
  }
});
var tt$1 = B$4(function(Ms, vr) {
  vr.exports = Ba;
  function Ba(r11, e) {
    var t3 = this;
    if (t3.listeners && t3.listeners[r11]) {
      var i2 = t3.listeners[r11], a = i2.indexOf(e);
      a !== -1 && i2.splice(a, 1);
    }
  }
});
var br = B$4(function(Bs, gr2) {
  Ke$2();
  gr2.exports = hr;
  var Ua2 = ["area", "base", "br", "col", "embed", "hr", "img", "input", "keygen", "link", "menuitem", "meta", "param", "source", "track", "wbr"];
  function hr(r11) {
    switch (r11.nodeType) {
      case 3:
        return rt2(r11.data);
      case 8:
        return "<!--" + r11.data + "-->";
      default:
        return Fa(r11);
    }
  }
  function Fa(r11) {
    var e = [], t3 = r11.tagName;
    return r11.namespaceURI === "http://www.w3.org/1999/xhtml" && (t3 = t3.toLowerCase()), e.push("<" + t3 + Ga(r11) + Va(r11)), Ua2.indexOf(t3) > -1 ? e.push(" />") : (e.push(">"), r11.childNodes.length ? e.push.apply(e, r11.childNodes.map(hr)) : r11.textContent || r11.innerText ? e.push(rt2(r11.textContent || r11.innerText)) : r11.innerHTML && e.push(r11.innerHTML), e.push("</" + t3 + ">")), e.join("");
  }
  function Wa(r11, e) {
    var t3 = Me$2(r11[e]);
    return e === "style" && Object.keys(r11.style).length > 0 ? true : r11.hasOwnProperty(e) && (t3 === "string" || t3 === "boolean" || t3 === "number") && e !== "nodeName" && e !== "className" && e !== "tagName" && e !== "textContent" && e !== "innerText" && e !== "namespaceURI" && e !== "innerHTML";
  }
  function ja(r11) {
    if (typeof r11 == "string") return r11;
    var e = "";
    return Object.keys(r11).forEach(function(t3) {
      var i2 = r11[t3];
      t3 = t3.replace(/[A-Z]/g, function(a) {
        return "-" + a.toLowerCase();
      }), e += t3 + ":" + i2 + ";";
    }), e;
  }
  function Va(r11) {
    var e = r11.dataset, t3 = [];
    for (var i2 in e) t3.push({ name: "data-" + i2, value: e[i2] });
    return t3.length ? yr(t3) : "";
  }
  function yr(r11) {
    var e = [];
    return r11.forEach(function(t3) {
      var i2 = t3.name, a = t3.value;
      i2 === "style" && (a = ja(a)), e.push(i2 + '="' + Ja(a) + '"');
    }), e.length ? " " + e.join(" ") : "";
  }
  function Ga(r11) {
    var e = [];
    for (var t3 in r11) Wa(r11, t3) && e.push({ name: t3, value: r11[t3] });
    for (var i2 in r11._attributes) for (var a in r11._attributes[i2]) {
      var n2 = r11._attributes[i2][a], o2 = (n2.prefix ? n2.prefix + ":" : "") + a;
      e.push({ name: o2, value: n2.value });
    }
    return r11.className && e.push({ name: "class", value: r11.className }), e.length ? yr(e) : "";
  }
  function rt2(r11) {
    var e = "";
    return typeof r11 == "string" ? e = r11 : r11 && (e = r11.toString()), e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function Ja(r11) {
    return rt2(r11).replace(/"/g, "&quot;");
  }
});
var it$1 = B$4(function(Fs, Tr) {
  ae$3();
  var at2 = $e$1(), Qa = Ze$1(), za = et$1(), Ka = tt$1(), Ya = br(), wr = "http://www.w3.org/1999/xhtml";
  Tr.exports = I2;
  function I2(r11, e, t3) {
    if (!U$3(this, I2)) return new I2(r11);
    var i2 = t3 === void 0 ? wr : t3 || null;
    this.tagName = i2 === wr ? String(r11).toUpperCase() : r11, this.nodeName = this.tagName, this.className = "", this.dataset = {}, this.childNodes = [], this.parentNode = null, this.style = {}, this.ownerDocument = e || null, this.namespaceURI = i2, this._attributes = {}, this.tagName === "INPUT" && (this.type = "text");
  }
  I2.prototype.type = "DOMElement";
  I2.prototype.nodeType = 1;
  I2.prototype.appendChild = function(e) {
    return e.parentNode && e.parentNode.removeChild(e), this.childNodes.push(e), e.parentNode = this, e;
  };
  I2.prototype.replaceChild = function(e, t3) {
    e.parentNode && e.parentNode.removeChild(e);
    var i2 = this.childNodes.indexOf(t3);
    return t3.parentNode = null, this.childNodes[i2] = e, e.parentNode = this, t3;
  };
  I2.prototype.removeChild = function(e) {
    var t3 = this.childNodes.indexOf(e);
    return this.childNodes.splice(t3, 1), e.parentNode = null, e;
  };
  I2.prototype.insertBefore = function(e, t3) {
    e.parentNode && e.parentNode.removeChild(e);
    var i2 = t3 == null ? -1 : this.childNodes.indexOf(t3);
    return i2 > -1 ? this.childNodes.splice(i2, 0, e) : this.childNodes.push(e), e.parentNode = this, e;
  };
  I2.prototype.setAttributeNS = function(e, t3, i2) {
    var a = null, n2 = t3, o2 = t3.indexOf(":");
    if (o2 > -1 && (a = t3.substr(0, o2), n2 = t3.substr(o2 + 1)), this.tagName === "INPUT" && t3 === "type") this.type = i2;
    else {
      var s3 = this._attributes[e] || (this._attributes[e] = {});
      s3[n2] = { value: i2, prefix: a };
    }
  };
  I2.prototype.getAttributeNS = function(e, t3) {
    var i2 = this._attributes[e], a = i2 && i2[t3] && i2[t3].value;
    return this.tagName === "INPUT" && t3 === "type" ? this.type : typeof a != "string" ? null : a;
  };
  I2.prototype.removeAttributeNS = function(e, t3) {
    var i2 = this._attributes[e];
    i2 && delete i2[t3];
  };
  I2.prototype.hasAttributeNS = function(e, t3) {
    var i2 = this._attributes[e];
    return !!i2 && t3 in i2;
  };
  I2.prototype.setAttribute = function(e, t3) {
    return this.setAttributeNS(null, e, t3);
  };
  I2.prototype.getAttribute = function(e) {
    return this.getAttributeNS(null, e);
  };
  I2.prototype.removeAttribute = function(e) {
    return this.removeAttributeNS(null, e);
  };
  I2.prototype.hasAttribute = function(e) {
    return this.hasAttributeNS(null, e);
  };
  I2.prototype.removeEventListener = Ka;
  I2.prototype.addEventListener = za;
  I2.prototype.dispatchEvent = Qa;
  I2.prototype.focus = function() {
  };
  I2.prototype.toString = function() {
    return Ya(this);
  };
  I2.prototype.getElementsByClassName = function(e) {
    var t3 = e.split(" "), i2 = [];
    return at2(this, function(a) {
      if (a.nodeType === 1) {
        var n2 = a.className || "", o2 = n2.split(" ");
        t3.every(function(s3) {
          return o2.indexOf(s3) !== -1;
        }) && i2.push(a);
      }
    }), i2;
  };
  I2.prototype.getElementsByTagName = function(e) {
    e = e.toLowerCase();
    var t3 = [];
    return at2(this.childNodes, function(i2) {
      i2.nodeType === 1 && (e === "*" || i2.tagName.toLowerCase() === e) && t3.push(i2);
    }), t3;
  };
  I2.prototype.contains = function(e) {
    return at2(this, function(t3) {
      return e === t3;
    }) || false;
  };
});
var kr = B$4(function(js, Er2) {
  ae$3();
  var nt2 = it$1();
  Er2.exports = Y2;
  function Y2(r11) {
    if (!U$3(this, Y2)) return new Y2();
    this.childNodes = [], this.parentNode = null, this.ownerDocument = r11 || null;
  }
  Y2.prototype.type = "DocumentFragment";
  Y2.prototype.nodeType = 11;
  Y2.prototype.nodeName = "#document-fragment";
  Y2.prototype.appendChild = nt2.prototype.appendChild;
  Y2.prototype.replaceChild = nt2.prototype.replaceChild;
  Y2.prototype.removeChild = nt2.prototype.removeChild;
  Y2.prototype.toString = function() {
    return this.childNodes.map(function(e) {
      return String(e);
    }).join("");
  };
});
var Rr = B$4(function(Vs, xr) {
  xr.exports = ot2;
  function ot2(r11) {
  }
  ot2.prototype.initEvent = function(e, t3, i2) {
    this.type = e, this.bubbles = t3, this.cancelable = i2;
  };
  ot2.prototype.preventDefault = function() {
  };
});
var Sr = B$4(function(Js, Dr) {
  ae$3();
  var Xa = $e$1(), $a = cr$1(), Za = fr$1(), Ae2 = it$1(), ei = kr(), ti = Rr(), ri = Ze$1(), ai = et$1(), ii = tt$1();
  Dr.exports = We2;
  function We2() {
    if (!U$3(this, We2)) return new We2();
    this.head = this.createElement("head"), this.body = this.createElement("body"), this.documentElement = this.createElement("html"), this.documentElement.appendChild(this.head), this.documentElement.appendChild(this.body), this.childNodes = [this.documentElement], this.nodeType = 9;
  }
  var j2 = We2.prototype;
  j2.createTextNode = function(e) {
    return new Za(e, this);
  };
  j2.createElementNS = function(e, t3) {
    var i2 = e === null ? null : String(e);
    return new Ae2(t3, this, i2);
  };
  j2.createElement = function(e) {
    return new Ae2(e, this);
  };
  j2.createDocumentFragment = function() {
    return new ei(this);
  };
  j2.createEvent = function(e) {
    return new ti(e);
  };
  j2.createComment = function(e) {
    return new $a(e, this);
  };
  j2.getElementById = function(e) {
    e = String(e);
    var t3 = Xa(this.childNodes, function(i2) {
      if (String(i2.id) === e) return i2;
    });
    return t3 || null;
  };
  j2.getElementsByClassName = Ae2.prototype.getElementsByClassName;
  j2.getElementsByTagName = Ae2.prototype.getElementsByTagName;
  j2.contains = Ae2.prototype.contains;
  j2.removeEventListener = ii;
  j2.addEventListener = ai;
  j2.dispatchEvent = ri;
});
var Ar = B$4(function(Qs, qr) {
  var ni = Sr();
  qr.exports = new ni();
});
var st$1 = B$4(function(zs, Pr) {
  var Or = typeof global != "undefined" ? global : typeof window != "undefined" ? window : {}, oi = Ar(), Oe2;
  typeof document != "undefined" ? Oe2 = document : (Oe2 = Or["__GLOBAL_DOCUMENT_CACHE@4"], Oe2 || (Oe2 = Or["__GLOBAL_DOCUMENT_CACHE@4"] = oi));
  Pr.exports = Oe2;
});
function vt$2(r11) {
  if (Array.isArray(r11)) return r11;
}
function ht$2(r11, e) {
  var t3 = r11 == null ? null : typeof Symbol != "undefined" && r11[Symbol.iterator] || r11["@@iterator"];
  if (t3 != null) {
    var i2 = [], a = true, n2 = false, o2, s3;
    try {
      for (t3 = t3.call(r11); !(a = (o2 = t3.next()).done) && (i2.push(o2.value), !(e && i2.length === e)); a = true) ;
    } catch (u2) {
      n2 = true, s3 = u2;
    } finally {
      try {
        !a && t3.return != null && t3.return();
      } finally {
        if (n2) throw s3;
      }
    }
    return i2;
  }
}
function yt$2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function Re$2(r11, e) {
  (e == null || e > r11.length) && (e = r11.length);
  for (var t3 = 0, i2 = new Array(e); t3 < e; t3++) i2[t3] = r11[t3];
  return i2;
}
function Le$2(r11, e) {
  if (r11) {
    if (typeof r11 == "string") return Re$2(r11, e);
    var t3 = Object.prototype.toString.call(r11).slice(8, -1);
    if (t3 === "Object" && r11.constructor && (t3 = r11.constructor.name), t3 === "Map" || t3 === "Set") return Array.from(t3);
    if (t3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t3)) return Re$2(r11, e);
  }
}
function H$1(r11, e) {
  return vt$2(r11) || ht$2(r11, e) || Le$2(r11, e) || yt$2();
}
var Te$1 = G$3(Q$2());
var ze$2 = G$3(Q$2());
var bt$2 = G$3(Q$2()), sa$1 = { now: function() {
  var r11 = bt$2.default.performance, e = r11 && r11.timing, t3 = e && e.navigationStart, i2 = typeof t3 == "number" && typeof r11.now == "function" ? t3 + r11.now() : Date.now();
  return Math.round(i2);
} }, O$3 = sa$1;
var re$3 = function() {
  var e, t3, i2;
  if (typeof ((e = ze$2.default.crypto) === null || e === void 0 ? void 0 : e.getRandomValues) == "function") {
    i2 = new Uint8Array(32), ze$2.default.crypto.getRandomValues(i2);
    for (var a = 0; a < 32; a++) i2[a] = i2[a] % 16;
  } else {
    i2 = [];
    for (var n2 = 0; n2 < 32; n2++) i2[n2] = Math.random() * 16 | 0;
  }
  var o2 = 0;
  t3 = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(p2) {
    var y2 = p2 === "x" ? i2[o2] : i2[o2] & 3 | 8;
    return o2++, y2.toString(16);
  });
  var s3 = O$3.now(), u2 = s3 == null ? void 0 : s3.toString(16).substring(3);
  return u2 ? t3.substring(0, 28) + u2 : t3;
}, Ie$2 = function() {
  return ("000000" + (Math.random() * Math.pow(36, 6) << 0).toString(36)).slice(-6);
};
var J$2 = function(e) {
  if (e && typeof e.nodeName != "undefined") return e.muxId || (e.muxId = Ie$2()), e.muxId;
  var t3;
  try {
    t3 = document.querySelector(e);
  } catch (i2) {
  }
  return t3 && !t3.muxId && (t3.muxId = e), (t3 == null ? void 0 : t3.muxId) || e;
}, de$4 = function(e) {
  var t3;
  e && typeof e.nodeName != "undefined" ? (t3 = e, e = J$2(t3)) : t3 = document.querySelector(e);
  var i2 = t3 && t3.nodeName ? t3.nodeName.toLowerCase() : "";
  return [t3, e, i2];
};
function wt(r11) {
  if (Array.isArray(r11)) return Re$2(r11);
}
function Tt$2(r11) {
  if (typeof Symbol != "undefined" && r11[Symbol.iterator] != null || r11["@@iterator"] != null) return Array.from(r11);
}
function Et$1() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function W$2(r11) {
  return wt(r11) || Tt$2(r11) || Le$2(r11) || Et$1();
}
var X$1 = { TRACE: 0, DEBUG: 1, INFO: 2, WARN: 3, ERROR: 4 }, kt$2 = function(r11) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3, t3, i2, a, n2, o2, s3 = [console, r11], u2 = (t3 = console.trace).bind.apply(t3, W$2(s3)), p2 = (i2 = console.info).bind.apply(i2, W$2(s3)), y2 = (a = console.debug).bind.apply(a, W$2(s3)), x2 = (n2 = console.warn).bind.apply(n2, W$2(s3)), D2 = (o2 = console.error).bind.apply(o2, W$2(s3)), f2 = e;
  return { trace: function() {
    for (var v2 = arguments.length, w2 = new Array(v2), h2 = 0; h2 < v2; h2++) w2[h2] = arguments[h2];
    if (!(f2 > X$1.TRACE)) return u2.apply(void 0, W$2(w2));
  }, debug: function() {
    for (var v2 = arguments.length, w2 = new Array(v2), h2 = 0; h2 < v2; h2++) w2[h2] = arguments[h2];
    if (!(f2 > X$1.DEBUG)) return y2.apply(void 0, W$2(w2));
  }, info: function() {
    for (var v2 = arguments.length, w2 = new Array(v2), h2 = 0; h2 < v2; h2++) w2[h2] = arguments[h2];
    if (!(f2 > X$1.INFO)) return p2.apply(void 0, W$2(w2));
  }, warn: function() {
    for (var v2 = arguments.length, w2 = new Array(v2), h2 = 0; h2 < v2; h2++) w2[h2] = arguments[h2];
    if (!(f2 > X$1.WARN)) return x2.apply(void 0, W$2(w2));
  }, error: function() {
    for (var v2 = arguments.length, w2 = new Array(v2), h2 = 0; h2 < v2; h2++) w2[h2] = arguments[h2];
    if (!(f2 > X$1.ERROR)) return D2.apply(void 0, W$2(w2));
  }, get level() {
    return f2;
  }, set level(_3) {
    _3 !== this.level && (f2 = _3 != null ? _3 : e);
  } };
};
var q$1 = kt$2("[mux]");
var Ne$2 = G$3(Q$2());
function fe$2() {
  var r11 = Ne$2.default.doNotTrack || Ne$2.default.navigator && Ne$2.default.navigator.doNotTrack;
  return r11 === "1";
}
function b$3(r11) {
  if (r11 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r11;
}
ae$3();
function k$3(r11, e) {
  if (!U$3(r11, e)) throw new TypeError("Cannot call a class as a function");
}
function xt$1(r11, e) {
  for (var t3 = 0; t3 < e.length; t3++) {
    var i2 = e[t3];
    i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), Object.defineProperty(r11, i2.key, i2);
  }
}
function N$2(r11, e, t3) {
  return e && xt$1(r11.prototype, e), t3 && xt$1(r11, t3), r11;
}
function l$2(r11, e, t3) {
  return e in r11 ? Object.defineProperty(r11, e, { value: t3, enumerable: true, configurable: true, writable: true }) : r11[e] = t3, r11;
}
function $$2(r11) {
  return $$2 = Object.setPrototypeOf ? Object.getPrototypeOf : function(t3) {
    return t3.__proto__ || Object.getPrototypeOf(t3);
  }, $$2(r11);
}
function Rt$2(r11, e) {
  for (; !Object.prototype.hasOwnProperty.call(r11, e) && (r11 = $$2(r11), r11 !== null); ) ;
  return r11;
}
function Se$2(r11, e, t3) {
  return typeof Reflect != "undefined" && Reflect.get ? Se$2 = Reflect.get : Se$2 = function(a, n2, o2) {
    var s3 = Rt$2(a, n2);
    if (s3) {
      var u2 = Object.getOwnPropertyDescriptor(s3, n2);
      return u2.get ? u2.get.call(o2 || a) : u2.value;
    }
  }, Se$2(r11, e, t3 || r11);
}
function Ce$2(r11, e) {
  return Ce$2 = Object.setPrototypeOf || function(i2, a) {
    return i2.__proto__ = a, i2;
  }, Ce$2(r11, e);
}
function Dt$1(r11, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
  r11.prototype = Object.create(e && e.prototype, { constructor: { value: r11, writable: true, configurable: true } }), e && Ce$2(r11, e);
}
function St$2(r11, e) {
  if (r11 == null) return {};
  var t3 = {}, i2 = Object.keys(r11), a, n2;
  for (n2 = 0; n2 < i2.length; n2++) a = i2[n2], !(e.indexOf(a) >= 0) && (t3[a] = r11[a]);
  return t3;
}
function qt$2(r11, e) {
  if (r11 == null) return {};
  var t3 = St$2(r11, e), i2, a;
  if (Object.getOwnPropertySymbols) {
    var n2 = Object.getOwnPropertySymbols(r11);
    for (a = 0; a < n2.length; a++) i2 = n2[a], !(e.indexOf(i2) >= 0) && Object.prototype.propertyIsEnumerable.call(r11, i2) && (t3[i2] = r11[i2]);
  }
  return t3;
}
function At$2() {
  if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham) return false;
  if (typeof Proxy == "function") return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch (r11) {
    return false;
  }
}
Ke$2();
function Ot$1(r11, e) {
  return e && (Me$2(e) === "object" || typeof e == "function") ? e : b$3(r11);
}
function Pt$1(r11) {
  var e = At$2();
  return function() {
    var i2 = $$2(r11), a;
    if (e) {
      var n2 = $$2(this).constructor;
      a = Reflect.construct(i2, arguments, n2);
    } else a = i2.apply(this, arguments);
    return Ot$1(this, a);
  };
}
var F$1 = function(r11) {
  return ie$3(r11)[0];
};
var ie$3 = function(r11) {
  if (typeof r11 != "string" || r11 === "") return ["localhost"];
  var e = /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/, t3 = r11.match(e) || [], i2 = t3[4], a;
  return i2 && (a = (i2.match(/[^\.]+\.[^\.]+$/) || [])[0]), [i2, a];
};
var He$1 = G$3(Q$2()), ua$1 = { exists: function() {
  var r11 = He$1.default.performance, e = r11 && r11.timing;
  return e !== void 0;
}, domContentLoadedEventEnd: function() {
  var r11 = He$1.default.performance, e = r11 && r11.timing;
  return e && e.domContentLoadedEventEnd;
}, navigationStart: function() {
  var r11 = He$1.default.performance, e = r11 && r11.timing;
  return e && e.navigationStart;
} }, pe$2 = ua$1;
function P$4(r11, e, t3) {
  t3 = t3 === void 0 ? 1 : t3, r11[e] = r11[e] || 0, r11[e] += t3;
}
function Z$2(r11) {
  for (var e = 1; e < arguments.length; e++) {
    var t3 = arguments[e] != null ? arguments[e] : {}, i2 = Object.keys(t3);
    typeof Object.getOwnPropertySymbols == "function" && (i2 = i2.concat(Object.getOwnPropertySymbols(t3).filter(function(a) {
      return Object.getOwnPropertyDescriptor(t3, a).enumerable;
    }))), i2.forEach(function(a) {
      l$2(r11, a, t3[a]);
    });
  }
  return r11;
}
function la$1(r11, e) {
  var t3 = Object.keys(r11);
  if (Object.getOwnPropertySymbols) {
    var i2 = Object.getOwnPropertySymbols(r11);
    t3.push.apply(t3, i2);
  }
  return t3;
}
function me$3(r11, e) {
  return e = e != null ? e : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(r11, Object.getOwnPropertyDescriptors(e)) : la$1(Object(e)).forEach(function(t3) {
    Object.defineProperty(r11, t3, Object.getOwnPropertyDescriptor(e, t3));
  }), r11;
}
var da$1 = ["x-cdn", "content-type"], Lt$2 = ["x-request-id", "cf-ray", "x-amz-cf-id", "x-akamai-request-id"], ca$1 = da$1.concat(Lt$2);
function ve$1(r11) {
  r11 = r11 || "";
  var e = {}, t3 = r11.trim().split(/[\r\n]+/);
  return t3.forEach(function(i2) {
    if (i2) {
      var a = i2.split(": "), n2 = a.shift();
      n2 && (ca$1.indexOf(n2.toLowerCase()) >= 0 || n2.toLowerCase().indexOf("x-litix-") === 0) && (e[n2] = a.join(": "));
    }
  }), e;
}
function ce$2(r11) {
  if (r11) {
    var e = Lt$2.find(function(t3) {
      return r11[t3] !== void 0;
    });
    return e ? r11[e] : void 0;
  }
}
var _a$1 = function(r11) {
  var e = {};
  for (var t3 in r11) {
    var i2 = r11[t3], a = i2["DATA-ID"].search("io.litix.data.");
    if (a !== -1) {
      var n2 = i2["DATA-ID"].replace("io.litix.data.", "");
      e[n2] = i2.VALUE;
    }
  }
  return e;
}, Be$2 = _a$1;
var Ue$1 = function(r11) {
  if (!r11) return {};
  var e = pe$2.navigationStart(), t3 = r11.loading, i2 = t3 ? t3.start : r11.trequest, a = t3 ? t3.first : r11.tfirst, n2 = t3 ? t3.end : r11.tload;
  return { bytesLoaded: r11.total, requestStart: Math.round(e + i2), responseStart: Math.round(e + a), responseEnd: Math.round(e + n2) };
}, qe$1 = function(r11) {
  if (!(!r11 || typeof r11.getAllResponseHeaders != "function")) return ve$1(r11.getAllResponseHeaders());
}, It$2 = function(r11, e, t3) {
  var a = arguments.length > 4 ? arguments[4] : void 0, n2 = r11.log, o2 = r11.utils.secondsToMs, s3 = function(h2) {
    var m2 = parseInt(a.version), c2;
    return m2 === 1 && h2.programDateTime !== null && (c2 = h2.programDateTime), m2 === 0 && h2.pdt !== null && (c2 = h2.pdt), c2;
  };
  if (!pe$2.exists()) {
    n2.warn("performance timing not supported. Not tracking HLS.js.");
    return;
  }
  var u2 = function(h2, m2) {
    return r11.emit(e, h2, m2);
  }, p2 = function(h2, m2) {
    var c2 = m2.levels, d2 = m2.audioTracks, g2 = m2.url, T2 = m2.stats, E2 = m2.networkDetails, S3 = m2.sessionData, L2 = {}, C2 = {};
    c2.forEach(function(V2, le2) {
      L2[le2] = { width: V2.width, height: V2.height, bitrate: V2.bitrate, attrs: V2.attrs };
    }), d2.forEach(function(V2, le2) {
      C2[le2] = { name: V2.name, language: V2.lang, bitrate: V2.bitrate };
    });
    var A2 = Ue$1(T2), R2 = A2.bytesLoaded, te2 = A2.requestStart, Ee = A2.responseStart, ke2 = A2.responseEnd;
    u2("requestcompleted", me$3(Z$2({}, Be$2(S3)), { request_event_type: h2, request_bytes_loaded: R2, request_start: te2, request_response_start: Ee, request_response_end: ke2, request_type: "manifest", request_hostname: F$1(g2), request_response_headers: qe$1(E2), request_rendition_lists: { media: L2, audio: C2, video: {} } }));
  };
  t3.on(a.Events.MANIFEST_LOADED, p2);
  var y2 = function(h2, m2) {
    var c2 = m2.details, d2 = m2.level, g2 = m2.networkDetails, T2 = m2.stats, E2 = Ue$1(T2), S3 = E2.bytesLoaded, L2 = E2.requestStart, C2 = E2.responseStart, A2 = E2.responseEnd, R2 = c2.fragments[c2.fragments.length - 1], te2 = s3(R2) + o2(R2.duration);
    u2("requestcompleted", { request_event_type: h2, request_bytes_loaded: S3, request_start: L2, request_response_start: C2, request_response_end: A2, request_current_level: d2, request_type: "manifest", request_hostname: F$1(c2.url), request_response_headers: qe$1(g2), video_holdback: c2.holdBack && o2(c2.holdBack), video_part_holdback: c2.partHoldBack && o2(c2.partHoldBack), video_part_target_duration: c2.partTarget && o2(c2.partTarget), video_target_duration: c2.targetduration && o2(c2.targetduration), video_source_is_live: c2.live, player_manifest_newest_program_time: isNaN(te2) ? void 0 : te2 });
  };
  t3.on(a.Events.LEVEL_LOADED, y2);
  var x2 = function(h2, m2) {
    var c2 = m2.details, d2 = m2.networkDetails, g2 = m2.stats, T2 = Ue$1(g2), E2 = T2.bytesLoaded, S3 = T2.requestStart, L2 = T2.responseStart, C2 = T2.responseEnd;
    u2("requestcompleted", { request_event_type: h2, request_bytes_loaded: E2, request_start: S3, request_response_start: L2, request_response_end: C2, request_type: "manifest", request_hostname: F$1(c2.url), request_response_headers: qe$1(d2) });
  };
  t3.on(a.Events.AUDIO_TRACK_LOADED, x2);
  var D2 = function(h2, m2) {
    var c2 = m2.stats, d2 = m2.networkDetails, g2 = m2.frag;
    c2 = c2 || g2.stats;
    var T2 = Ue$1(c2), E2 = T2.bytesLoaded, S3 = T2.requestStart, L2 = T2.responseStart, C2 = T2.responseEnd, A2 = d2 ? qe$1(d2) : void 0, R2 = { request_event_type: h2, request_bytes_loaded: E2, request_start: S3, request_response_start: L2, request_response_end: C2, request_hostname: d2 ? F$1(d2.responseURL) : void 0, request_id: A2 ? ce$2(A2) : void 0, request_response_headers: A2, request_media_duration: g2.duration, request_url: d2 == null ? void 0 : d2.responseURL };
    g2.type === "main" ? (R2.request_type = "media", R2.request_current_level = g2.level, R2.request_video_width = (t3.levels[g2.level] || {}).width, R2.request_video_height = (t3.levels[g2.level] || {}).height, R2.request_labeled_bitrate = (t3.levels[g2.level] || {}).bitrate) : R2.request_type = g2.type, u2("requestcompleted", R2);
  };
  t3.on(a.Events.FRAG_LOADED, D2);
  var f2 = function(h2, m2) {
    var c2 = m2.frag, d2 = c2.start, g2 = s3(c2), T2 = { currentFragmentPDT: g2, currentFragmentStart: o2(d2) };
    u2("fragmentchange", T2);
  };
  t3.on(a.Events.FRAG_CHANGED, f2);
  var _3 = function(h2, m2) {
    var c2 = m2.type, d2 = m2.details, g2 = m2.response, T2 = m2.fatal, E2 = m2.frag, S3 = m2.networkDetails, L2 = (E2 == null ? void 0 : E2.url) || m2.url || "", C2 = S3 ? qe$1(S3) : void 0;
    if ((d2 === a.ErrorDetails.MANIFEST_LOAD_ERROR || d2 === a.ErrorDetails.MANIFEST_LOAD_TIMEOUT || d2 === a.ErrorDetails.FRAG_LOAD_ERROR || d2 === a.ErrorDetails.FRAG_LOAD_TIMEOUT || d2 === a.ErrorDetails.LEVEL_LOAD_ERROR || d2 === a.ErrorDetails.LEVEL_LOAD_TIMEOUT || d2 === a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR || d2 === a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT || d2 === a.ErrorDetails.SUBTITLE_LOAD_ERROR || d2 === a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT || d2 === a.ErrorDetails.KEY_LOAD_ERROR || d2 === a.ErrorDetails.KEY_LOAD_TIMEOUT) && u2("requestfailed", { request_error: d2, request_url: L2, request_hostname: F$1(L2), request_id: C2 ? ce$2(C2) : void 0, request_type: d2 === a.ErrorDetails.FRAG_LOAD_ERROR || d2 === a.ErrorDetails.FRAG_LOAD_TIMEOUT ? "media" : d2 === a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR || d2 === a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT ? "audio" : d2 === a.ErrorDetails.SUBTITLE_LOAD_ERROR || d2 === a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT ? "subtitle" : d2 === a.ErrorDetails.KEY_LOAD_ERROR || d2 === a.ErrorDetails.KEY_LOAD_TIMEOUT ? "encryption" : "manifest", request_error_code: g2 == null ? void 0 : g2.code, request_error_text: g2 == null ? void 0 : g2.text }), T2) {
      var A2, R2 = "".concat(L2 ? "url: ".concat(L2, "\n") : "") + "".concat(g2 && (g2.code || g2.text) ? "response: ".concat(g2.code, ", ").concat(g2.text, "\n") : "") + "".concat(m2.reason ? "failure reason: ".concat(m2.reason, "\n") : "") + "".concat(m2.level ? "level: ".concat(m2.level, "\n") : "") + "".concat(m2.parent ? "parent stream controller: ".concat(m2.parent, "\n") : "") + "".concat(m2.buffer ? "buffer length: ".concat(m2.buffer, "\n") : "") + "".concat(m2.error ? "error: ".concat(m2.error, "\n") : "") + "".concat(m2.event ? "event: ".concat(m2.event, "\n") : "") + "".concat(m2.err ? "error message: ".concat((A2 = m2.err) === null || A2 === void 0 ? void 0 : A2.message, "\n") : "");
      u2("error", { player_error_code: c2, player_error_message: d2, player_error_context: R2 });
    }
  };
  t3.on(a.Events.ERROR, _3);
  var v2 = function(h2, m2) {
    var c2 = m2.frag, d2 = c2 && c2._url || "";
    u2("requestcanceled", { request_event_type: h2, request_url: d2, request_type: "media", request_hostname: F$1(d2) });
  };
  t3.on(a.Events.FRAG_LOAD_EMERGENCY_ABORTED, v2);
  var w2 = function(h2, m2) {
    var c2 = m2.level, d2 = t3.levels[c2];
    if (d2 && d2.attrs && d2.attrs.BANDWIDTH) {
      var g2 = d2.attrs.BANDWIDTH, T2, E2 = parseFloat(d2.attrs["FRAME-RATE"]);
      isNaN(E2) || (T2 = E2), g2 ? u2("renditionchange", { video_source_fps: T2, video_source_bitrate: g2, video_source_width: d2.width, video_source_height: d2.height, video_source_rendition_name: d2.name, video_source_codec: d2 == null ? void 0 : d2.videoCodec }) : n2.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js");
    }
  };
  t3.on(a.Events.LEVEL_SWITCHED, w2), t3._stopMuxMonitor = function() {
    t3.off(a.Events.MANIFEST_LOADED, p2), t3.off(a.Events.LEVEL_LOADED, y2), t3.off(a.Events.AUDIO_TRACK_LOADED, x2), t3.off(a.Events.FRAG_LOADED, D2), t3.off(a.Events.FRAG_CHANGED, f2), t3.off(a.Events.ERROR, _3), t3.off(a.Events.FRAG_LOAD_EMERGENCY_ABORTED, v2), t3.off(a.Events.LEVEL_SWITCHED, w2), t3.off(a.Events.DESTROYING, t3._stopMuxMonitor), delete t3._stopMuxMonitor;
  }, t3.on(a.Events.DESTROYING, t3._stopMuxMonitor);
}, Nt$2 = function(r11) {
  r11 && typeof r11._stopMuxMonitor == "function" && r11._stopMuxMonitor();
};
var Ct$2 = function(r11, e) {
  if (!r11 || !r11.requestEndDate) return {};
  var t3 = F$1(r11.url), i2 = r11.url, a = r11.bytesLoaded, n2 = new Date(r11.requestStartDate).getTime(), o2 = new Date(r11.firstByteDate).getTime(), s3 = new Date(r11.requestEndDate).getTime(), u2 = isNaN(r11.duration) ? 0 : r11.duration, p2 = typeof e.getMetricsFor == "function" ? e.getMetricsFor(r11.mediaType).HttpList : e.getDashMetrics().getHttpRequests(r11.mediaType), y2;
  p2.length > 0 && (y2 = ve$1(p2[p2.length - 1]._responseHeaders || ""));
  var x2 = y2 ? ce$2(y2) : void 0;
  return { requestStart: n2, requestResponseStart: o2, requestResponseEnd: s3, requestBytesLoaded: a, requestResponseHeaders: y2, requestMediaDuration: u2, requestHostname: t3, requestUrl: i2, requestId: x2 };
}, fa$1 = function(r11, e) {
  if (typeof e.getCurrentRepresentationForType == "function") {
    var t3 = e.getCurrentRepresentationForType(r11);
    return t3 ? { currentLevel: t3.absoluteIndex, renditionWidth: t3.width || null, renditionHeight: t3.height || null, renditionBitrate: t3.bandwidth } : {};
  }
  var i2 = e.getQualityFor(r11), a = e.getCurrentTrackFor(r11).bitrateList;
  return a ? { currentLevel: i2, renditionWidth: a[i2].width || null, renditionHeight: a[i2].height || null, renditionBitrate: a[i2].bandwidth } : {};
}, pa$1 = function(r11) {
  var e;
  return (e = r11.match(/.*codecs\*?="(.*)"/)) === null || e === void 0 ? void 0 : e[1];
}, ma$1 = function(e) {
  try {
    var t3, i2, a = (i2 = e.getVersion) === null || i2 === void 0 || (t3 = i2.call(e)) === null || t3 === void 0 ? void 0 : t3.split(".").map(function(n2) {
      return parseInt(n2);
    })[0];
    return a;
  } catch (n2) {
    return false;
  }
}, Mt$2 = function(r11, e, t3) {
  var a = r11.log;
  if (!t3 || !t3.on) {
    a.warn("Invalid dash.js player reference. Monitoring blocked.");
    return;
  }
  var n2 = ma$1(t3), o2 = function(c2, d2) {
    return r11.emit(e, c2, d2);
  }, s3 = function(c2) {
    var d2 = c2.type, g2 = c2.data, T2 = (g2 || {}).url;
    o2("requestcompleted", { request_event_type: d2, request_start: 0, request_response_start: 0, request_response_end: 0, request_bytes_loaded: -1, request_type: "manifest", request_hostname: F$1(T2), request_url: T2 });
  };
  t3.on("manifestLoaded", s3);
  var u2 = {}, p2 = function(c2) {
    if (typeof c2.getRequests != "function") return null;
    var d2 = c2.getRequests({ state: "executed" });
    return d2.length === 0 ? null : d2[d2.length - 1];
  }, y2 = function(c2) {
    var d2 = c2.type, g2 = c2.fragmentModel, T2 = c2.chunk, E2 = p2(g2);
    x2({ type: d2, request: E2, chunk: T2 });
  }, x2 = function(c2) {
    var d2 = c2.type, g2 = c2.chunk, T2 = c2.request, E2 = (g2 || {}).mediaInfo, S3 = E2 || {}, L2 = S3.type, C2 = S3.bitrateList;
    C2 = C2 || [];
    var A2 = {};
    C2.forEach(function(xe2, K2) {
      A2[K2] = {}, A2[K2].width = xe2.width, A2[K2].height = xe2.height, A2[K2].bitrate = xe2.bandwidth, A2[K2].attrs = {};
    }), L2 === "video" ? u2.video = A2 : L2 === "audio" ? u2.audio = A2 : u2.media = A2;
    var R2 = Ct$2(T2, t3), te2 = R2.requestStart, Ee = R2.requestResponseStart, ke2 = R2.requestResponseEnd, V2 = R2.requestResponseHeaders, le2 = R2.requestMediaDuration, Ge2 = R2.requestHostname, Je2 = R2.requestUrl, Qe2 = R2.requestId;
    o2("requestcompleted", { request_event_type: d2, request_start: te2, request_response_start: Ee, request_response_end: ke2, request_bytes_loaded: -1, request_type: L2 + "_init", request_response_headers: V2, request_hostname: Ge2, request_id: Qe2, request_url: Je2, request_media_duration: le2, request_rendition_lists: u2 });
  };
  n2 >= 4 ? t3.on("initFragmentLoaded", x2) : t3.on("initFragmentLoaded", y2);
  var D2 = function(c2) {
    var d2 = c2.type, g2 = c2.fragmentModel, T2 = c2.chunk, E2 = p2(g2);
    f2({ type: d2, request: E2, chunk: T2 });
  }, f2 = function(c2) {
    var d2 = c2.type, g2 = c2.chunk, T2 = c2.request, E2 = g2 || {}, S3 = E2.mediaInfo, L2 = E2.start, C2 = S3 || {}, A2 = C2.type, R2 = Ct$2(T2, t3), te2 = R2.requestStart, Ee = R2.requestResponseStart, ke2 = R2.requestResponseEnd, V2 = R2.requestBytesLoaded, le2 = R2.requestResponseHeaders, Ge2 = R2.requestMediaDuration, Je2 = R2.requestHostname, Qe2 = R2.requestUrl, xe2 = R2.requestId, K2 = fa$1(A2, t3), Xr = K2.currentLevel, $r = K2.renditionWidth, Zr = K2.renditionHeight, ea2 = K2.renditionBitrate;
    o2("requestcompleted", { request_event_type: d2, request_start: te2, request_response_start: Ee, request_response_end: ke2, request_bytes_loaded: V2, request_type: A2, request_response_headers: le2, request_hostname: Je2, request_id: xe2, request_url: Qe2, request_media_start_time: L2, request_media_duration: Ge2, request_current_level: Xr, request_labeled_bitrate: ea2, request_video_width: $r, request_video_height: Zr });
  };
  n2 >= 4 ? t3.on("mediaFragmentLoaded", f2) : t3.on("mediaFragmentLoaded", D2);
  var _3 = { video: void 0, audio: void 0, totalBitrate: void 0 }, v2 = function() {
    if (_3.video && typeof _3.video.bitrate == "number") {
      if (!(_3.video.width && _3.video.height)) {
        a.warn("have bitrate info for video but missing width/height");
        return;
      }
      var c2 = _3.video.bitrate;
      if (_3.audio && typeof _3.audio.bitrate == "number" && (c2 += _3.audio.bitrate), c2 !== _3.totalBitrate) return _3.totalBitrate = c2, { video_source_bitrate: c2, video_source_height: _3.video.height, video_source_width: _3.video.width, video_source_codec: pa$1(_3.video.codec) };
    }
  }, w2 = function(c2, d2, g2) {
    var T2 = c2.mediaType;
    if (T2 === "audio" || T2 === "video") {
      var E2;
      if (typeof t3.getRepresentationsByType == "function") if (c2.newRepresentation) E2 = { bitrate: c2.newRepresentation.bandwidth, width: c2.newRepresentation.width, height: c2.newRepresentation.height, qualityIndex: c2.newRepresentation.absoluteIndex };
      else {
        var S3 = t3.getRepresentationsByType(T2);
        if (S3 && typeof c2.newQuality == "number") {
          var L2 = S3.find(function(A2) {
            return A2.absoluteIndex === c2.newQuality || A2.index === c2.newQuality;
          });
          L2 && (E2 = { bitrate: L2.bandwidth, width: L2.width, height: L2.height, qualityIndex: c2.newQuality });
        }
      }
      else {
        if (typeof c2.newQuality != "number") {
          a.warn("missing evt.newQuality in qualityChangeRendered event", c2);
          return;
        }
        E2 = t3.getBitrateInfoListFor(T2).find(function(A2) {
          var R2 = A2.qualityIndex;
          return R2 === c2.newQuality;
        });
      }
      if (!(E2 && typeof E2.bitrate == "number")) {
        a.warn("missing bitrate info for ".concat(T2));
        return;
      }
      _3[T2] = me$3(Z$2({}, E2), { codec: t3.getCurrentTrackFor(T2).codec });
      var C2 = v2();
      C2 && o2("renditionchange", C2);
    }
  };
  t3.on("qualityChangeRendered", w2);
  var h2 = function(c2) {
    var d2 = c2.request, g2 = c2.mediaType;
    d2 = d2 || {}, o2("requestcanceled", { request_event_type: d2.type + "_" + d2.action, request_url: d2.url, request_type: g2, request_hostname: F$1(d2.url) });
  };
  t3.on("fragmentLoadingAbandoned", h2);
  var m2 = function(c2) {
    var d2 = c2.error, g2, T2, E2 = (d2 == null || (g2 = d2.data) === null || g2 === void 0 ? void 0 : g2.request) || {}, S3 = (d2 == null || (T2 = d2.data) === null || T2 === void 0 ? void 0 : T2.response) || {};
    (d2 == null ? void 0 : d2.code) === 27 && o2("requestfailed", { request_error: E2.type + "_" + E2.action, request_url: E2.url, request_hostname: F$1(E2.url), request_type: E2.mediaType, request_error_code: S3.status, request_error_text: S3.statusText });
    var L2 = "".concat(E2 != null && E2.url ? "url: ".concat(E2.url, "\n") : "") + "".concat(S3 != null && S3.status || S3 != null && S3.statusText ? "response: ".concat(S3 == null ? void 0 : S3.status, ", ").concat(S3 == null ? void 0 : S3.statusText, "\n") : "");
    o2("error", { player_error_code: d2 == null ? void 0 : d2.code, player_error_message: d2 == null ? void 0 : d2.message, player_error_context: L2 });
  };
  t3.on("error", m2), t3._stopMuxMonitor = function() {
    t3.off("manifestLoaded", s3), t3.off("initFragmentLoaded", x2), t3.off("mediaFragmentLoaded", f2), t3.off("qualityChangeRendered", w2), t3.off("error", m2), t3.off("fragmentLoadingAbandoned", h2), delete t3._stopMuxMonitor;
  };
}, Ht$1 = function(r11) {
  r11 && typeof r11._stopMuxMonitor == "function" && r11._stopMuxMonitor();
};
var Bt$2 = 0, va$1 = (function() {
  function r11() {
    k$3(this, r11), l$2(this, "_listeners", void 0);
  }
  return N$2(r11, [{ key: "on", value: function(t3, i2, a) {
    return i2._eventEmitterGuid = i2._eventEmitterGuid || ++Bt$2, this._listeners = this._listeners || {}, this._listeners[t3] = this._listeners[t3] || [], a && (i2 = i2.bind(a)), this._listeners[t3].push(i2), i2;
  } }, { key: "off", value: function(t3, i2) {
    var a = this._listeners && this._listeners[t3];
    a && a.forEach(function(n2, o2) {
      n2._eventEmitterGuid === i2._eventEmitterGuid && a.splice(o2, 1);
    });
  } }, { key: "one", value: function(t3, i2, a) {
    var n2 = this;
    i2._eventEmitterGuid = i2._eventEmitterGuid || ++Bt$2;
    var o2 = function() {
      n2.off(t3, o2), i2.apply(a || this, arguments);
    };
    o2._eventEmitterGuid = i2._eventEmitterGuid, this.on(t3, o2);
  } }, { key: "emit", value: function(t3, i2) {
    var a = this;
    if (this._listeners) {
      i2 = i2 || {};
      var n2 = this._listeners["before" + t3] || [], o2 = this._listeners["before*"] || [], s3 = this._listeners[t3] || [], u2 = this._listeners["after" + t3] || [], p2 = function(y2, x2) {
        y2 = y2.slice(), y2.forEach(function(D2) {
          D2.call(a, { type: t3 }, x2);
        });
      };
      p2(n2, i2), p2(o2, i2), p2(s3, i2), p2(u2, i2);
    }
  } }]), r11;
})(), Ut$2 = va$1;
var Fe$1 = G$3(Q$2()), ha$1 = (function() {
  function r11(e) {
    var t3 = this;
    k$3(this, r11), l$2(this, "_playbackHeartbeatInterval", void 0), l$2(this, "_playheadShouldBeProgressing", void 0), l$2(this, "pm", void 0), this.pm = e, this._playbackHeartbeatInterval = null, this._playheadShouldBeProgressing = false, e.on("playing", function() {
      t3._playheadShouldBeProgressing = true;
    }), e.on("play", this._startPlaybackHeartbeatInterval.bind(this)), e.on("playing", this._startPlaybackHeartbeatInterval.bind(this)), e.on("adbreakstart", this._startPlaybackHeartbeatInterval.bind(this)), e.on("adplay", this._startPlaybackHeartbeatInterval.bind(this)), e.on("adplaying", this._startPlaybackHeartbeatInterval.bind(this)), e.on("devicewake", this._startPlaybackHeartbeatInterval.bind(this)), e.on("viewstart", this._startPlaybackHeartbeatInterval.bind(this)), e.on("rebufferstart", this._startPlaybackHeartbeatInterval.bind(this)), e.on("pause", this._stopPlaybackHeartbeatInterval.bind(this)), e.on("ended", this._stopPlaybackHeartbeatInterval.bind(this)), e.on("viewend", this._stopPlaybackHeartbeatInterval.bind(this)), e.on("error", this._stopPlaybackHeartbeatInterval.bind(this)), e.on("aderror", this._stopPlaybackHeartbeatInterval.bind(this)), e.on("adpause", this._stopPlaybackHeartbeatInterval.bind(this)), e.on("adended", this._stopPlaybackHeartbeatInterval.bind(this)), e.on("adbreakend", this._stopPlaybackHeartbeatInterval.bind(this)), e.on("seeked", function() {
      e.data.player_is_paused ? t3._stopPlaybackHeartbeatInterval() : t3._startPlaybackHeartbeatInterval();
    }), e.on("timeupdate", function() {
      t3._playbackHeartbeatInterval !== null && e.emit("playbackheartbeat");
    }), e.on("devicesleep", function(i2, a) {
      t3._playbackHeartbeatInterval !== null && (Fe$1.default.clearInterval(t3._playbackHeartbeatInterval), e.emit("playbackheartbeatend", { viewer_time: a.viewer_time }), t3._playbackHeartbeatInterval = null);
    });
  }
  return N$2(r11, [{ key: "_startPlaybackHeartbeatInterval", value: function() {
    var t3 = this;
    this._playbackHeartbeatInterval === null && (this.pm.emit("playbackheartbeat"), this._playbackHeartbeatInterval = Fe$1.default.setInterval(function() {
      t3.pm.emit("playbackheartbeat");
    }, this.pm.playbackHeartbeatTime));
  } }, { key: "_stopPlaybackHeartbeatInterval", value: function() {
    this._playheadShouldBeProgressing = false, this._playbackHeartbeatInterval !== null && (Fe$1.default.clearInterval(this._playbackHeartbeatInterval), this.pm.emit("playbackheartbeatend"), this._playbackHeartbeatInterval = null);
  } }]), r11;
})(), Ft$2 = ha$1;
var ya$1 = function r(e) {
  var t3 = this;
  k$3(this, r), l$2(this, "viewErrored", void 0), e.on("viewinit", function() {
    t3.viewErrored = false;
  }), e.on("error", function(i2, a) {
    try {
      var n2 = e.errorTranslator({ player_error_code: a.player_error_code, player_error_message: a.player_error_message, player_error_context: a.player_error_context, player_error_severity: a.player_error_severity, player_error_business_exception: a.player_error_business_exception });
      n2 && (e.data.player_error_code = n2.player_error_code || a.player_error_code, e.data.player_error_message = n2.player_error_message || a.player_error_message, e.data.player_error_context = n2.player_error_context || a.player_error_context, e.data.player_error_severity = n2.player_error_severity || a.player_error_severity, e.data.player_error_business_exception = n2.player_error_business_exception || a.player_error_business_exception, t3.viewErrored = true);
    } catch (o2) {
      e.mux.log.warn("Exception in error translator callback.", o2), t3.viewErrored = true;
    }
  }), e.on("aftererror", function() {
    var i2, a, n2, o2, s3;
    (i2 = e.data) === null || i2 === void 0 || delete i2.player_error_code, (a = e.data) === null || a === void 0 || delete a.player_error_message, (n2 = e.data) === null || n2 === void 0 || delete n2.player_error_context, (o2 = e.data) === null || o2 === void 0 || delete o2.player_error_severity, (s3 = e.data) === null || s3 === void 0 || delete s3.player_error_business_exception;
  });
}, Wt$2 = ya$1;
var ga$1 = (function() {
  function r11(e) {
    k$3(this, r11), l$2(this, "_watchTimeTrackerLastCheckedTime", void 0), l$2(this, "pm", void 0), this.pm = e, this._watchTimeTrackerLastCheckedTime = null, e.on("playbackheartbeat", this._updateWatchTime.bind(this)), e.on("playbackheartbeatend", this._clearWatchTimeState.bind(this));
  }
  return N$2(r11, [{ key: "_updateWatchTime", value: function(t3, i2) {
    var a = i2.viewer_time;
    this._watchTimeTrackerLastCheckedTime === null && (this._watchTimeTrackerLastCheckedTime = a), P$4(this.pm.data, "view_watch_time", a - this._watchTimeTrackerLastCheckedTime), this._watchTimeTrackerLastCheckedTime = a;
  } }, { key: "_clearWatchTimeState", value: function(t3, i2) {
    this._updateWatchTime(t3, i2), this._watchTimeTrackerLastCheckedTime = null;
  } }]), r11;
})(), jt$2 = ga$1;
var ba = (function() {
  function r11(e) {
    var t3 = this;
    k$3(this, r11), l$2(this, "_playbackTimeTrackerLastPlayheadPosition", void 0), l$2(this, "_lastTime", void 0), l$2(this, "_isAdPlaying", void 0), l$2(this, "_callbackUpdatePlaybackTime", void 0), l$2(this, "pm", void 0), this.pm = e, this._playbackTimeTrackerLastPlayheadPosition = -1, this._lastTime = O$3.now(), this._isAdPlaying = false, this._callbackUpdatePlaybackTime = null, e.on("viewinit", function() {
      t3.pm.data.view_playing_time_ms_cumulative = 0;
    });
    var i2 = this._startPlaybackTimeTracking.bind(this);
    e.on("playing", i2), e.on("adplaying", i2);
    var a = function() {
      t3.pm.data.player_is_paused || i2();
    };
    e.on("seeked", a), e.on("rebufferend", a);
    var n2 = this._stopPlaybackTimeTracking.bind(this);
    e.on("playbackheartbeatend", n2), e.on("seeking", n2), e.on("rebufferstart", n2), e.on("adplaying", function() {
      t3._isAdPlaying = true;
    }), e.on("adended", function() {
      t3._isAdPlaying = false;
    }), e.on("adpause", function() {
      t3._isAdPlaying = false;
    }), e.on("adbreakstart", function() {
      t3._isAdPlaying = false;
    }), e.on("adbreakend", function() {
      t3._isAdPlaying = false;
    }), e.on("adplay", function() {
      t3._isAdPlaying = false;
    }), e.on("viewinit", function() {
      t3._playbackTimeTrackerLastPlayheadPosition = -1, t3._lastTime = O$3.now(), t3._isAdPlaying = false, t3._callbackUpdatePlaybackTime = null;
    });
  }
  return N$2(r11, [{ key: "_startPlaybackTimeTracking", value: function() {
    this._callbackUpdatePlaybackTime === null && (this._callbackUpdatePlaybackTime = this._updatePlaybackTime.bind(this), this._playbackTimeTrackerLastPlayheadPosition = this.pm.data.player_playhead_time, this._lastTime = O$3.now(), this.pm.on("playbackheartbeat", this._callbackUpdatePlaybackTime));
  } }, { key: "_stopPlaybackTimeTracking", value: function() {
    this._callbackUpdatePlaybackTime && (this._updatePlaybackTime(), this.pm.off("playbackheartbeat", this._callbackUpdatePlaybackTime), this._callbackUpdatePlaybackTime = null, this._playbackTimeTrackerLastPlayheadPosition = -1);
  } }, { key: "_updatePlaybackTime", value: function() {
    var t3 = this.pm.data.player_playhead_time || 0, i2 = O$3.now(), a = i2 - this._lastTime, n2 = -1;
    this._playbackTimeTrackerLastPlayheadPosition >= 0 && t3 > this._playbackTimeTrackerLastPlayheadPosition ? n2 = t3 - this._playbackTimeTrackerLastPlayheadPosition : this._isAdPlaying && (n2 = a), n2 > 0 && n2 <= 1e3 && P$4(this.pm.data, "view_content_playback_time", n2), this._callbackUpdatePlaybackTime !== null && a > 0 && a <= 1e3 && (this._isAdPlaying && P$4(this.pm.data, "ad_playing_time_ms_cumulative", a), P$4(this.pm.data, "view_playing_time_ms_cumulative", a)), this._playbackTimeTrackerLastPlayheadPosition = t3, this._lastTime = i2;
  } }]), r11;
})(), Vt$2 = ba;
var wa$1 = (function() {
  function r11(e) {
    k$3(this, r11), l$2(this, "pm", void 0), this.pm = e;
    var t3 = this._updatePlayheadTime.bind(this);
    e.on("playbackheartbeat", t3), e.on("playbackheartbeatend", t3), e.on("timeupdate", t3), e.on("destroy", function() {
      e.off("timeupdate", t3);
    });
  }
  return N$2(r11, [{ key: "_updateMaxPlayheadPosition", value: function() {
    this.pm.data.view_max_playhead_position = typeof this.pm.data.view_max_playhead_position == "undefined" ? this.pm.data.player_playhead_time : Math.max(this.pm.data.view_max_playhead_position, this.pm.data.player_playhead_time);
  } }, { key: "_updatePlayheadTime", value: function(t3, i2) {
    var a = this, n2 = function() {
      a.pm.currentFragmentPDT && a.pm.currentFragmentStart && (a.pm.data.player_program_time = a.pm.currentFragmentPDT + a.pm.data.player_playhead_time - a.pm.currentFragmentStart);
    };
    if (i2 && i2.player_playhead_time) this.pm.data.player_playhead_time = i2.player_playhead_time, n2(), this._updateMaxPlayheadPosition();
    else if (this.pm.getPlayheadTime) {
      var o2 = this.pm.getPlayheadTime();
      typeof o2 != "undefined" && (this.pm.data.player_playhead_time = o2, n2(), this._updateMaxPlayheadPosition());
    }
  } }]), r11;
})(), Gt$2 = wa$1;
var Jt$1 = 5 * 60 * 1e3, Ta$1 = function r2(e) {
  if (k$3(this, r2), !e.disableRebufferTracking) {
    var t3, i2 = function(n2, o2) {
      a(o2), t3 = void 0;
    }, a = function(n2) {
      if (t3) {
        var o2 = n2.viewer_time - t3;
        P$4(e.data, "view_rebuffer_duration", o2), t3 = n2.viewer_time, e.data.view_rebuffer_duration > Jt$1 && (e.emit("viewend"), e.send("viewend"), e.mux.log.warn("Ending view after rebuffering for longer than ".concat(Jt$1, "ms, future events will be ignored unless a programchange or videochange occurs.")));
      }
      e.data.view_watch_time >= 0 && e.data.view_rebuffer_count > 0 && (e.data.view_rebuffer_frequency = e.data.view_rebuffer_count / e.data.view_watch_time, e.data.view_rebuffer_percentage = e.data.view_rebuffer_duration / e.data.view_watch_time);
    };
    e.on("playbackheartbeat", function(n2, o2) {
      return a(o2);
    }), e.on("rebufferstart", function(n2, o2) {
      t3 || (P$4(e.data, "view_rebuffer_count", 1), t3 = o2.viewer_time, e.one("rebufferend", i2));
    }), e.on("viewinit", function() {
      t3 = void 0, e.off("rebufferend", i2);
    });
  }
}, Qt$2 = Ta$1;
var Ea$1 = (function() {
  function r11(e) {
    var t3 = this;
    k$3(this, r11), l$2(this, "_lastCheckedTime", void 0), l$2(this, "_lastPlayheadTime", void 0), l$2(this, "_lastPlayheadTimeUpdatedTime", void 0), l$2(this, "_rebuffering", void 0), l$2(this, "pm", void 0), this.pm = e, !(e.disableRebufferTracking || e.disablePlayheadRebufferTracking) && (this._lastCheckedTime = null, this._lastPlayheadTime = null, this._lastPlayheadTimeUpdatedTime = null, e.on("playbackheartbeat", this._checkIfRebuffering.bind(this)), e.on("playbackheartbeatend", this._cleanupRebufferTracker.bind(this)), e.on("seeking", function() {
      t3._cleanupRebufferTracker(null, { viewer_time: O$3.now() });
    }));
  }
  return N$2(r11, [{ key: "_checkIfRebuffering", value: function(t3, i2) {
    if (this.pm.seekingTracker.isSeeking || this.pm.adTracker.isAdBreak || !this.pm.playbackHeartbeat._playheadShouldBeProgressing) {
      this._cleanupRebufferTracker(t3, i2);
      return;
    }
    if (this._lastCheckedTime === null) {
      this._prepareRebufferTrackerState(i2.viewer_time);
      return;
    }
    if (this._lastPlayheadTime !== this.pm.data.player_playhead_time) {
      this._cleanupRebufferTracker(t3, i2, true);
      return;
    }
    var a = i2.viewer_time - this._lastPlayheadTimeUpdatedTime;
    typeof this.pm.sustainedRebufferThreshold == "number" && a >= this.pm.sustainedRebufferThreshold && (this._rebuffering || (this._rebuffering = true, this.pm.emit("rebufferstart", { viewer_time: this._lastPlayheadTimeUpdatedTime }))), this._lastCheckedTime = i2.viewer_time;
  } }, { key: "_clearRebufferTrackerState", value: function() {
    this._lastCheckedTime = null, this._lastPlayheadTime = null, this._lastPlayheadTimeUpdatedTime = null;
  } }, { key: "_prepareRebufferTrackerState", value: function(t3) {
    this._lastCheckedTime = t3, this._lastPlayheadTime = this.pm.data.player_playhead_time, this._lastPlayheadTimeUpdatedTime = t3;
  } }, { key: "_cleanupRebufferTracker", value: function(t3, i2) {
    var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    if (this._rebuffering) this._rebuffering = false, this.pm.emit("rebufferend", { viewer_time: i2.viewer_time });
    else {
      if (this._lastCheckedTime === null) return;
      var n2 = this.pm.data.player_playhead_time - this._lastPlayheadTime, o2 = i2.viewer_time - this._lastPlayheadTimeUpdatedTime;
      typeof this.pm.minimumRebufferDuration == "number" && n2 > 0 && o2 - n2 > this.pm.minimumRebufferDuration && (this._lastCheckedTime = null, this.pm.emit("rebufferstart", { viewer_time: this._lastPlayheadTimeUpdatedTime }), this.pm.emit("rebufferend", { viewer_time: this._lastPlayheadTimeUpdatedTime + o2 - n2 }));
    }
    a ? this._prepareRebufferTrackerState(i2.viewer_time) : this._clearRebufferTrackerState();
  } }]), r11;
})(), zt$2 = Ea$1;
var ka = (function() {
  function r11(e) {
    var t3 = this;
    k$3(this, r11), l$2(this, "pm", void 0), this.pm = e, e.on("viewinit", function() {
      var i2 = e.data, a = i2.view_id;
      if (!i2.view_program_changed) {
        var n2 = function(o2, s3) {
          var u2 = s3.viewer_time;
          o2.type === "playing" && typeof e.data.view_time_to_first_frame == "undefined" ? t3.calculateTimeToFirstFrame(u2 || O$3.now(), a) : o2.type === "adplaying" && (typeof e.data.view_time_to_first_frame == "undefined" || t3._inPrerollPosition()) && t3.calculateTimeToFirstFrame(u2 || O$3.now(), a);
        };
        e.one("playing", n2), e.one("adplaying", n2), e.one("viewend", function() {
          e.off("playing", n2), e.off("adplaying", n2);
        });
      }
    });
  }
  return N$2(r11, [{ key: "_inPrerollPosition", value: function() {
    return typeof this.pm.data.view_content_playback_time == "undefined" || this.pm.data.view_content_playback_time <= 1e3;
  } }, { key: "calculateTimeToFirstFrame", value: function(t3, i2) {
    i2 === this.pm.data.view_id && (this.pm.watchTimeTracker._updateWatchTime(null, { viewer_time: t3 }), this.pm.data.view_time_to_first_frame = this.pm.data.view_watch_time, (this.pm.data.player_autoplay_on || this.pm.data.video_is_autoplay) && this.pm.pageLoadInitTime && (this.pm.data.view_aggregate_startup_time = this.pm.data.view_start + this.pm.data.view_watch_time - this.pm.pageLoadInitTime));
  } }]), r11;
})(), Kt$2 = ka;
var xa = function r3(e) {
  var t3 = this;
  k$3(this, r3), l$2(this, "_lastPlayerHeight", void 0), l$2(this, "_lastPlayerWidth", void 0), l$2(this, "_lastPlayheadPosition", void 0), l$2(this, "_lastSourceHeight", void 0), l$2(this, "_lastSourceWidth", void 0), e.on("viewinit", function() {
    t3._lastPlayheadPosition = -1;
  });
  var i2 = ["pause", "rebufferstart", "seeking", "error", "adbreakstart", "hb", "renditionchange", "orientationchange", "viewend", "playbackmodechange"], a = ["playing", "hb", "renditionchange", "orientationchange", "playbackmodechange"];
  i2.forEach(function(n2) {
    e.on(n2, function() {
      if (t3._lastPlayheadPosition >= 0 && e.data.player_playhead_time >= 0 && t3._lastPlayerWidth >= 0 && t3._lastSourceWidth > 0 && t3._lastPlayerHeight >= 0 && t3._lastSourceHeight > 0) {
        var o2 = e.data.player_playhead_time - t3._lastPlayheadPosition;
        if (o2 < 0) {
          t3._lastPlayheadPosition = -1;
          return;
        }
        var s3 = Math.min(t3._lastPlayerWidth / t3._lastSourceWidth, t3._lastPlayerHeight / t3._lastSourceHeight), u2 = Math.max(0, s3 - 1), p2 = Math.max(0, 1 - s3);
        e.data.view_max_upscale_percentage = Math.max(e.data.view_max_upscale_percentage || 0, u2), e.data.view_max_downscale_percentage = Math.max(e.data.view_max_downscale_percentage || 0, p2), P$4(e.data, "view_total_content_playback_time", o2), P$4(e.data, "view_total_upscaling", u2 * o2), P$4(e.data, "view_total_downscaling", p2 * o2);
      }
      t3._lastPlayheadPosition = -1;
    });
  }), a.forEach(function(n2) {
    e.on(n2, function() {
      t3._lastPlayheadPosition = e.data.player_playhead_time, t3._lastPlayerWidth = e.data.player_width, t3._lastPlayerHeight = e.data.player_height, t3._lastSourceWidth = e.data.video_source_width, t3._lastSourceHeight = e.data.video_source_height;
    });
  });
}, Yt$2 = xa;
var Ra = 2e3, Da$1 = function r4(e) {
  var t3 = this;
  k$3(this, r4), l$2(this, "isSeeking", void 0), this.isSeeking = false;
  var i2 = -1, a = function() {
    var n2 = O$3.now(), o2 = (e.data.viewer_time || n2) - (i2 || n2);
    P$4(e.data, "view_seek_duration", o2), e.data.view_max_seek_time = Math.max(e.data.view_max_seek_time || 0, o2), t3.isSeeking = false, i2 = -1;
  };
  e.on("seeking", function(n2, o2) {
    if (Object.assign(e.data, o2), t3.isSeeking && o2.viewer_time - i2 <= Ra) {
      i2 = o2.viewer_time;
      return;
    }
    t3.isSeeking && a(), t3.isSeeking = true, i2 = o2.viewer_time, P$4(e.data, "view_seek_count", 1), e.send("seeking");
  }), e.on("seeked", function() {
    a();
  }), e.on("viewend", function() {
    t3.isSeeking && (a(), e.send("seeked")), t3.isSeeking = false, i2 = -1;
  });
}, Xt$2 = Da$1;
var $t$2 = function(e, t3) {
  e.push(t3), e.sort(function(i2, a) {
    return i2.viewer_time - a.viewer_time;
  });
}, Sa$1 = ["adbreakstart", "adrequest", "adresponse", "adplay", "adplaying", "adpause", "adended", "adbreakend", "aderror", "adclicked", "adskipped"], qa = (function() {
  function r11(e) {
    var t3 = this;
    k$3(this, r11), l$2(this, "_adHasPlayed", void 0), l$2(this, "_adRequests", void 0), l$2(this, "_adResponses", void 0), l$2(this, "_currentAdRequestNumber", void 0), l$2(this, "_currentAdResponseNumber", void 0), l$2(this, "_prerollPlayTime", void 0), l$2(this, "_wouldBeNewAdPlay", void 0), l$2(this, "isAdBreak", void 0), l$2(this, "pm", void 0), this.pm = e, e.on("viewinit", function() {
      t3.isAdBreak = false, t3._currentAdRequestNumber = 0, t3._currentAdResponseNumber = 0, t3._adRequests = [], t3._adResponses = [], t3._adHasPlayed = false, t3._wouldBeNewAdPlay = true, t3._prerollPlayTime = void 0;
    }), Sa$1.forEach(function(a) {
      return e.on(a, t3._updateAdData.bind(t3));
    });
    var i2 = function() {
      t3.isAdBreak = false;
    };
    e.on("adbreakstart", function() {
      t3.isAdBreak = true;
    }), e.on("play", i2), e.on("playing", i2), e.on("viewend", i2), e.on("adrequest", function(a, n2) {
      n2 = Object.assign({ ad_request_id: "generatedAdRequestId" + t3._currentAdRequestNumber++ }, n2), $t$2(t3._adRequests, n2), P$4(e.data, "view_ad_request_count"), t3.inPrerollPosition() && (e.data.view_preroll_requested = true, t3._adHasPlayed || P$4(e.data, "view_preroll_request_count"));
    }), e.on("adresponse", function(a, n2) {
      n2 = Object.assign({ ad_request_id: "generatedAdRequestId" + t3._currentAdResponseNumber++ }, n2), $t$2(t3._adResponses, n2);
      var o2 = t3.findAdRequest(n2.ad_request_id);
      o2 && P$4(e.data, "view_ad_request_time", Math.max(0, n2.viewer_time - o2.viewer_time));
    }), e.on("adplay", function(a, n2) {
      t3._adHasPlayed = true, t3._wouldBeNewAdPlay && (t3._wouldBeNewAdPlay = false, P$4(e.data, "view_ad_played_count")), t3.inPrerollPosition() && !e.data.view_preroll_played && (e.data.view_preroll_played = true, t3._adRequests.length > 0 && (e.data.view_preroll_request_time = Math.max(0, n2.viewer_time - t3._adRequests[0].viewer_time)), e.data.view_start && (e.data.view_startup_preroll_request_time = Math.max(0, n2.viewer_time - e.data.view_start)), t3._prerollPlayTime = n2.viewer_time);
    }), e.on("adplaying", function(a, n2) {
      t3.inPrerollPosition() && typeof e.data.view_preroll_load_time == "undefined" && typeof t3._prerollPlayTime != "undefined" && (e.data.view_preroll_load_time = n2.viewer_time - t3._prerollPlayTime, e.data.view_startup_preroll_load_time = n2.viewer_time - t3._prerollPlayTime);
    }), e.on("adclicked", function(a, n2) {
      t3._wouldBeNewAdPlay || P$4(e.data, "view_ad_clicked_count");
    }), e.on("adskipped", function(a, n2) {
      t3._wouldBeNewAdPlay || P$4(e.data, "view_ad_skipped_count");
    }), e.on("adended", function() {
      t3._wouldBeNewAdPlay = true;
    }), e.on("aderror", function() {
      t3._wouldBeNewAdPlay = true;
    });
  }
  return N$2(r11, [{ key: "inPrerollPosition", value: function() {
    return typeof this.pm.data.view_content_playback_time == "undefined" || this.pm.data.view_content_playback_time <= 1e3;
  } }, { key: "findAdRequest", value: function(t3) {
    for (var i2 = 0; i2 < this._adRequests.length; i2++) if (this._adRequests[i2].ad_request_id === t3) return this._adRequests[i2];
  } }, { key: "_updateAdData", value: function(t3, i2) {
    if (this.inPrerollPosition()) {
      if (!this.pm.data.view_preroll_ad_tag_hostname && i2.ad_tag_url) {
        var a = H$1(ie$3(i2.ad_tag_url), 2), n2 = a[0], o2 = a[1];
        this.pm.data.view_preroll_ad_tag_domain = o2, this.pm.data.view_preroll_ad_tag_hostname = n2;
      }
      if (!this.pm.data.view_preroll_ad_asset_hostname && i2.ad_asset_url) {
        var s3 = H$1(ie$3(i2.ad_asset_url), 2), u2 = s3[0], p2 = s3[1];
        this.pm.data.view_preroll_ad_asset_domain = p2, this.pm.data.view_preroll_ad_asset_hostname = u2;
      }
      this.pm.data.ad_type = "preroll";
    }
    this.pm.data.ad_asset_url = i2 == null ? void 0 : i2.ad_asset_url, this.pm.data.ad_tag_url = i2 == null ? void 0 : i2.ad_tag_url, this.pm.data.ad_creative_id = i2 == null ? void 0 : i2.ad_creative_id, this.pm.data.ad_id = i2 == null ? void 0 : i2.ad_id, this.pm.data.ad_universal_id = i2 == null ? void 0 : i2.ad_universal_id, i2 != null && i2.ad_type && (this.pm.data.ad_type = i2 == null ? void 0 : i2.ad_type);
  } }]), r11;
})(), Zt$2 = qa;
var Aa$1 = function r5(e) {
  var t3 = this;
  k$3(this, r5), l$2(this, "lastWallClockTime", void 0);
  var i2 = function() {
    t3.lastWallClockTime = O$3.now(), e.on("before*", a);
  }, a = function(n2) {
    var o2 = O$3.now(), s3 = t3.lastWallClockTime;
    t3.lastWallClockTime = o2, o2 - s3 > 3e4 && (e.emit("devicesleep", { viewer_time: s3 }), Object.assign(e.data, { viewer_time: s3 }), e.send("devicesleep"), e.emit("devicewake", { viewer_time: o2 }), Object.assign(e.data, { viewer_time: o2 }), e.send("devicewake"));
  };
  e.one("playbackheartbeat", i2), e.on("playbackheartbeatend", function() {
    e.off("before*", a), e.one("playbackheartbeat", i2);
  });
}, er$1 = Aa$1;
var je$1 = G$3(Q$2());
var Ye$1 = (function(r11) {
  return r11();
})(function() {
  var r11 = function() {
    for (var i2 = 0, a = {}; i2 < arguments.length; i2++) {
      var n2 = arguments[i2];
      for (var o2 in n2) a[o2] = n2[o2];
    }
    return a;
  };
  function e(t3) {
    function i2(a, n2, o2) {
      var s3;
      if (typeof document != "undefined") {
        if (arguments.length > 1) {
          if (o2 = r11({ path: "/" }, i2.defaults, o2), typeof o2.expires == "number") {
            var u2 = /* @__PURE__ */ new Date();
            u2.setMilliseconds(u2.getMilliseconds() + o2.expires * 864e5), o2.expires = u2;
          }
          try {
            s3 = JSON.stringify(n2), /^[\{\[]/.test(s3) && (n2 = s3);
          } catch (v2) {
          }
          return t3.write ? n2 = t3.write(n2, a) : n2 = encodeURIComponent(String(n2)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), a = encodeURIComponent(String(a)), a = a.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), a = a.replace(/[\(\)]/g, escape), document.cookie = [a, "=", n2, o2.expires ? "; expires=" + o2.expires.toUTCString() : "", o2.path ? "; path=" + o2.path : "", o2.domain ? "; domain=" + o2.domain : "", o2.secure ? "; secure" : ""].join("");
        }
        a || (s3 = {});
        for (var p2 = document.cookie ? document.cookie.split("; ") : [], y2 = /(%[0-9A-Z]{2})+/g, x2 = 0; x2 < p2.length; x2++) {
          var D2 = p2[x2].split("="), f2 = D2.slice(1).join("=");
          f2.charAt(0) === '"' && (f2 = f2.slice(1, -1));
          try {
            var _3 = D2[0].replace(y2, decodeURIComponent);
            if (f2 = t3.read ? t3.read(f2, _3) : t3(f2, _3) || f2.replace(y2, decodeURIComponent), this.json) try {
              f2 = JSON.parse(f2);
            } catch (v2) {
            }
            if (a === _3) {
              s3 = f2;
              break;
            }
            a || (s3[_3] = f2);
          } catch (v2) {
          }
        }
        return s3;
      }
    }
    return i2.set = i2, i2.get = function(a) {
      return i2.call(i2, a);
    }, i2.getJSON = function() {
      return i2.apply({ json: true }, [].slice.call(arguments));
    }, i2.defaults = {}, i2.remove = function(a, n2) {
      i2(a, "", r11(n2, { expires: -1 }));
    }, i2.withConverter = e, i2;
  }
  return e(function() {
  });
});
var tr$1 = "muxData", Oa = function(r11) {
  return Object.entries(r11).map(function(e) {
    var t3 = H$1(e, 2), i2 = t3[0], a = t3[1];
    return "".concat(i2, "=").concat(a);
  }).join("&");
}, Pa$1 = function(r11) {
  return r11.split("&").reduce(function(e, t3) {
    var i2 = H$1(t3.split("="), 2), a = i2[0], n2 = i2[1], o2 = +n2, s3 = n2 && o2 == n2 ? o2 : n2;
    return e[a] = s3, e;
  }, {});
}, rr$1 = function() {
  var e;
  try {
    e = Pa$1(Ye$1.get(tr$1) || "");
  } catch (t3) {
    e = {};
  }
  return e;
}, ar$1 = function(e) {
  try {
    Ye$1.set(tr$1, Oa(e), { expires: 365 });
  } catch (t3) {
  }
}, ir$1 = function() {
  var e = rr$1();
  return e.mux_viewer_id = e.mux_viewer_id || re$3(), e.msn = e.msn || Math.random(), ar$1(e), { mux_viewer_id: e.mux_viewer_id, mux_sample_number: e.msn };
}, nr$1 = function() {
  var e = rr$1(), t3 = O$3.now();
  return e.session_start && (e.sst = e.session_start, delete e.session_start), e.session_id && (e.sid = e.session_id, delete e.session_id), e.session_expires && (e.sex = e.session_expires, delete e.session_expires), (!e.sex || e.sex < t3) && (e.sid = re$3(), e.sst = t3), e.sex = t3 + 25 * 60 * 1e3, ar$1(e), { session_id: e.sid, session_start: e.sst, session_expires: e.sex };
};
function Xe$1(r11, e) {
  var t3 = e.beaconCollectionDomain, i2 = e.beaconDomain;
  if (t3) {
    var a = /localhost(?::\d+)?$/.test(t3) ? "http://" : "https://";
    return a + t3;
  }
  r11 = r11 || "inferred";
  var n2 = i2 || "litix.io";
  return r11.match(/^[a-z0-9]+$/) ? "https://" + r11 + "." + n2 : "https://img.litix.io/a.gif";
}
var La$1 = { a: "env", b: "beacon", c: "custom", d: "ad", e: "event", f: "experiment", i: "internal", m: "mux", n: "response", p: "player", q: "request", r: "retry", s: "session", t: "timestamp", u: "viewer", v: "video", w: "page", x: "view", y: "sub" }, Ia$1 = sr$1(La$1), Na$1 = { ad: "ad", af: "affiliate", ag: "aggregate", ap: "api", al: "application", ao: "audio", ar: "architecture", as: "asset", au: "autoplay", av: "average", bi: "bitrate", bn: "brand", br: "break", bw: "browser", by: "bytes", bz: "business", ca: "cached", cb: "cancel", cc: "codec", cd: "code", cg: "category", ch: "changed", ci: "client", ck: "clicked", cl: "canceled", cm: "cmcd", cn: "config", co: "count", ce: "counter", cp: "complete", cq: "creator", cr: "creative", cs: "captions", ct: "content", cu: "current", cv: "cumulative", cx: "connection", cz: "context", da: "data", dg: "downscaling", dm: "domain", dn: "cdn", do: "downscale", dr: "drm", dp: "dropped", du: "duration", dv: "device", dy: "dynamic", eb: "enabled", ec: "encoding", ed: "edge", en: "end", eg: "engine", em: "embed", er: "error", ep: "experiments", es: "errorcode", et: "errortext", ee: "event", ev: "events", ex: "expires", ez: "exception", fa: "failed", fi: "first", fm: "family", ft: "format", fp: "fps", fq: "frequency", fr: "frame", fs: "fullscreen", ha: "has", hb: "holdback", he: "headers", ho: "host", hn: "hostname", ht: "height", id: "id", ii: "init", in: "instance", ip: "ip", is: "is", ke: "key", la: "language", lb: "labeled", le: "level", li: "live", ld: "loaded", lo: "load", lw: "low", ls: "lists", lt: "latency", ma: "max", md: "media", me: "message", mf: "manifest", mi: "mime", ml: "midroll", mm: "min", mn: "manufacturer", mo: "model", mp: "mode", ms: "ms", mx: "mux", ne: "newest", nm: "name", no: "number", on: "on", or: "origin", os: "os", pa: "paused", pb: "playback", pd: "producer", pe: "percentage", pf: "played", pg: "program", ph: "playhead", pi: "plugin", pl: "preroll", pn: "playing", po: "poster", pp: "pip", pr: "preload", ps: "position", pt: "part", pv: "previous", py: "property", px: "pop", pz: "plan", ra: "rate", rd: "requested", re: "rebuffer", rf: "rendition", rg: "range", rm: "remote", ro: "ratio", rp: "response", rq: "request", rs: "requests", sa: "sample", sd: "skipped", se: "session", sh: "shift", sk: "seek", sm: "stream", so: "source", sq: "sequence", sr: "series", ss: "status", st: "start", su: "startup", sv: "server", sw: "software", sy: "severity", ta: "tag", tc: "tech", te: "text", tg: "target", th: "throughput", ti: "time", tl: "total", to: "to", tt: "title", ty: "type", ug: "upscaling", un: "universal", up: "upscale", ur: "url", us: "user", va: "variant", vd: "viewed", vi: "video", ve: "version", vw: "view", vr: "viewer", wd: "width", wa: "watch", wt: "waiting" }, or$1 = sr$1(Na$1);
function sr$1(r11) {
  var e = {};
  for (var t3 in r11) r11.hasOwnProperty(t3) && (e[r11[t3]] = t3);
  return e;
}
function he$2(r11) {
  var e = {}, t3 = {};
  return Object.keys(r11).forEach(function(i2) {
    var a = false;
    if (r11.hasOwnProperty(i2) && r11[i2] !== void 0) {
      var n2 = i2.split("_"), o2 = n2[0], s3 = Ia$1[o2];
      s3 || (q$1.info("Data key word `" + n2[0] + "` not expected in " + i2), s3 = o2 + "_"), n2.splice(1).forEach(function(u2) {
        u2 === "url" && (a = true), or$1[u2] ? s3 += or$1[u2] : Number.isInteger(Number(u2)) ? s3 += u2 : (q$1.info("Data key word `" + u2 + "` not expected in " + i2), s3 += "_" + u2 + "_");
      }), a ? t3[s3] = r11[i2] : e[s3] = r11[i2];
    }
  }), Object.assign(e, t3);
}
var oe$3 = G$3(Q$2()), Lr = G$3(st$1());
var si = { maxBeaconSize: 300, maxQueueLength: 3600, baseTimeBetweenBeacons: 1e4, maxPayloadKBSize: 500 }, ui = 56 * 1024, li = ["hb", "requestcompleted", "requestfailed", "requestcanceled"], di = "https://img.litix.io", ee$3 = function(e) {
  var t3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  this._beaconUrl = e || di, this._eventQueue = [], this._postInFlight = false, this._resendAfterPost = false, this._failureCount = 0, this._sendTimeout = false, this._options = Object.assign({}, si, t3);
};
ee$3.prototype.queueEvent = function(r11, e) {
  var t3 = Object.assign({}, e);
  return this._eventQueue.length <= this._options.maxQueueLength || r11 === "eventrateexceeded" ? (this._eventQueue.push(t3), this._sendTimeout || this._startBeaconSending(), this._eventQueue.length <= this._options.maxQueueLength) : false;
};
ee$3.prototype.flushEvents = function() {
  var r11 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
  if (r11 && this._eventQueue.length === 1) {
    this._eventQueue.pop();
    return;
  }
  this._eventQueue.length && this._sendBeaconQueue(), this._startBeaconSending();
};
ee$3.prototype.destroy = function() {
  var r11 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
  this.destroyed = true, r11 ? this._clearBeaconQueue() : this.flushEvents(), oe$3.default.clearTimeout(this._sendTimeout);
};
ee$3.prototype._clearBeaconQueue = function() {
  var r11 = this._eventQueue.length > this._options.maxBeaconSize ? this._eventQueue.length - this._options.maxBeaconSize : 0, e = this._eventQueue.slice(r11);
  r11 > 0 && Object.assign(e[e.length - 1], he$2({ mux_view_message: "event queue truncated" }));
  var t3 = this._createPayload(e);
  Ir(this._beaconUrl, t3, true, function() {
  });
};
ee$3.prototype._sendBeaconQueue = function() {
  var r11 = this;
  if (this._postInFlight) {
    this._resendAfterPost = true;
    return;
  }
  var e = this._eventQueue.slice(0, this._options.maxBeaconSize);
  this._eventQueue = this._eventQueue.slice(this._options.maxBeaconSize), this._postInFlight = true;
  var t3 = this._createPayload(e), i2 = O$3.now();
  Ir(this._beaconUrl, t3, false, function(a, n2) {
    n2 ? (r11._eventQueue = e.concat(r11._eventQueue), r11._failureCount += 1, q$1.info("Error sending beacon: " + n2)) : r11._failureCount = 0, r11._roundTripTime = O$3.now() - i2, r11._postInFlight = false, r11._resendAfterPost && (r11._resendAfterPost = false, r11._eventQueue.length > 0 && r11._sendBeaconQueue());
  });
};
ee$3.prototype._getNextBeaconTime = function() {
  if (!this._failureCount) return this._options.baseTimeBetweenBeacons;
  var r11 = Math.pow(2, this._failureCount - 1);
  return r11 = r11 * Math.random(), (1 + r11) * this._options.baseTimeBetweenBeacons;
};
ee$3.prototype._startBeaconSending = function() {
  var r11 = this;
  oe$3.default.clearTimeout(this._sendTimeout), !this.destroyed && (this._sendTimeout = oe$3.default.setTimeout(function() {
    r11._eventQueue.length && r11._sendBeaconQueue(), r11._startBeaconSending();
  }, this._getNextBeaconTime()));
};
ee$3.prototype._createPayload = function(r11) {
  var e = this, t3 = { transmission_timestamp: Math.round(O$3.now()) };
  this._roundTripTime && (t3.rtt_ms = Math.round(this._roundTripTime));
  var i2, a, n2, o2 = function() {
    i2 = JSON.stringify({ metadata: t3, events: a || r11 }), n2 = i2.length / 1024;
  }, s3 = function() {
    return n2 <= e._options.maxPayloadKBSize;
  };
  return o2(), s3() || (q$1.info("Payload size is too big (" + n2 + " kb). Removing unnecessary events."), a = r11.filter(function(u2) {
    return li.indexOf(u2.e) === -1;
  }), o2()), s3() || (q$1.info("Payload size still too big (" + n2 + " kb). Cropping fields.."), a.forEach(function(u2) {
    for (var p2 in u2) {
      var y2 = u2[p2], x2 = 50 * 1024;
      typeof y2 == "string" && y2.length > x2 && (u2[p2] = y2.substring(0, x2));
    }
  }), o2()), i2;
};
var ci = typeof Lr.default.exitPictureInPicture == "function" ? function(r11) {
  return r11.length <= ui;
} : function(r11) {
  return false;
}, Ir = function(r11, e, t3, i2) {
  if (t3 && navigator && navigator.sendBeacon && navigator.sendBeacon(r11, e)) {
    i2();
    return;
  }
  if (oe$3.default.fetch) {
    oe$3.default.fetch(r11, { method: "POST", body: e, headers: { "Content-Type": "text/plain" }, keepalive: ci(e) }).then(function(n2) {
      return i2(null, n2.ok ? null : "Error");
    }).catch(function(n2) {
      return i2(null, n2);
    });
    return;
  }
  if (oe$3.default.XMLHttpRequest) {
    var a = new oe$3.default.XMLHttpRequest();
    a.onreadystatechange = function() {
      if (a.readyState === 4) return i2(null, a.status !== 200 ? "error" : void 0);
    }, a.open("POST", r11), a.setRequestHeader("Content-Type", "text/plain"), a.send(e);
    return;
  }
  i2();
}, Nr = ee$3;
var _i = ["env_key", "view_id", "view_sequence_number", "player_sequence_number", "beacon_domain", "player_playhead_time", "viewer_time", "mux_api_version", "event", "video_id", "player_instance_id", "player_error_code", "player_error_message", "player_error_context", "player_error_severity", "player_error_business_exception", "view_playing_time_ms_cumulative", "ad_playing_time_ms_cumulative"], fi = ["adplay", "adplaying", "adpause", "adfirstquartile", "admidpoint", "adthirdquartile", "adended", "adresponse", "adrequest"], pi = ["ad_id", "ad_creative_id", "ad_universal_id"], mi = ["viewstart", "error", "ended", "viewend"], vi = 10 * 60 * 1e3, Cr = (function() {
  function r11(e, t3) {
    var i2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    k$3(this, r11);
    var a, n2, o2, s3, u2, p2, y2, x2, D2, f2, _3, v2;
    l$2(this, "mux", void 0), l$2(this, "envKey", void 0), l$2(this, "options", void 0), l$2(this, "eventQueue", void 0), l$2(this, "sampleRate", void 0), l$2(this, "disableCookies", void 0), l$2(this, "respectDoNotTrack", void 0), l$2(this, "previousBeaconData", void 0), l$2(this, "lastEventTime", void 0), l$2(this, "rateLimited", void 0), l$2(this, "pageLevelData", void 0), l$2(this, "viewerData", void 0), this.mux = e, this.envKey = t3, this.options = i2, this.previousBeaconData = null, this.lastEventTime = 0, this.rateLimited = false, this.eventQueue = new Nr(Xe$1(this.envKey, this.options));
    var w2;
    this.sampleRate = (w2 = this.options.sampleRate) !== null && w2 !== void 0 ? w2 : 1;
    var h2;
    this.disableCookies = (h2 = this.options.disableCookies) !== null && h2 !== void 0 ? h2 : false;
    var m2;
    this.respectDoNotTrack = (m2 = this.options.respectDoNotTrack) !== null && m2 !== void 0 ? m2 : false, this.previousBeaconData = null, this.lastEventTime = 0, this.rateLimited = false, this.pageLevelData = { mux_api_version: this.mux.API_VERSION, mux_embed: this.mux.NAME, mux_embed_version: this.mux.VERSION, viewer_application_name: (a = this.options.platform) === null || a === void 0 ? void 0 : a.name, viewer_application_version: (n2 = this.options.platform) === null || n2 === void 0 ? void 0 : n2.version, viewer_application_engine: (o2 = this.options.platform) === null || o2 === void 0 ? void 0 : o2.layout, viewer_device_name: (s3 = this.options.platform) === null || s3 === void 0 ? void 0 : s3.product, viewer_device_category: "", viewer_device_manufacturer: (u2 = this.options.platform) === null || u2 === void 0 ? void 0 : u2.manufacturer, viewer_os_family: (y2 = this.options.platform) === null || y2 === void 0 || (p2 = y2.os) === null || p2 === void 0 ? void 0 : p2.family, viewer_os_architecture: (D2 = this.options.platform) === null || D2 === void 0 || (x2 = D2.os) === null || x2 === void 0 ? void 0 : x2.architecture, viewer_os_version: (_3 = this.options.platform) === null || _3 === void 0 || (f2 = _3.os) === null || f2 === void 0 ? void 0 : f2.version, page_url: je$1.default === null || je$1.default === void 0 || (v2 = je$1.default.location) === null || v2 === void 0 ? void 0 : v2.href }, this.viewerData = this.disableCookies ? {} : ir$1();
  }
  return N$2(r11, [{ key: "send", value: function(t3, i2) {
    if (!(!t3 || !(i2 != null && i2.view_id))) {
      if (this.respectDoNotTrack && fe$2()) return q$1.info("Not sending `" + t3 + "` because Do Not Track is enabled");
      if (!i2 || typeof i2 != "object") return q$1.error("A data object was expected in send() but was not provided");
      var a = this.disableCookies ? {} : nr$1(), n2 = me$3(Z$2({}, this.pageLevelData, i2, a, this.viewerData), { event: t3, env_key: this.envKey });
      n2.user_id && (n2.viewer_user_id = n2.user_id, delete n2.user_id);
      var o2, s3 = ((o2 = n2.mux_sample_number) !== null && o2 !== void 0 ? o2 : 0) >= this.sampleRate, u2 = this._deduplicateBeaconData(t3, n2), p2 = he$2(u2);
      if (this.lastEventTime = this.mux.utils.now(), s3) return q$1.info("Not sending event due to sample rate restriction", t3, n2, p2);
      if (this.envKey || q$1.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL", t3, n2, p2), !this.rateLimited) if (q$1.info("Sending event", t3, n2, p2), this.rateLimited = !this.eventQueue.queueEvent(t3, p2), this.mux.WINDOW_UNLOADING && t3 === "viewend") this.eventQueue.destroy(true);
      else {
        if (this.mux.WINDOW_HIDDEN && t3 === "hb") this.eventQueue.flushEvents(true);
        else if (mi.indexOf(t3) >= 0) {
          if (t3 === "error" && i2.player_error_severity === "warning") return;
          this.eventQueue.flushEvents();
        }
        if (this.rateLimited) return n2.event = "eventrateexceeded", p2 = he$2(n2), this.eventQueue.queueEvent(n2.event, p2), q$1.error("Beaconing disabled due to rate limit.");
      }
    }
  } }, { key: "destroy", value: function() {
    this.eventQueue.destroy(false);
  } }, { key: "_deduplicateBeaconData", value: function(t3, i2) {
    var a = this, n2 = {}, o2 = i2.view_id;
    if (o2 === "-1" || t3 === "viewstart" || t3 === "viewend" || !this.previousBeaconData || this.mux.utils.now() - this.lastEventTime >= vi) n2 = Z$2({}, i2), o2 && (this.previousBeaconData = n2), o2 && t3 === "viewend" && (this.previousBeaconData = null);
    else {
      var s3 = t3.indexOf("request") === 0;
      Object.entries(i2).forEach(function(u2) {
        var p2 = H$1(u2, 2), y2 = p2[0], x2 = p2[1];
        a.previousBeaconData && (x2 !== a.previousBeaconData[y2] || _i.indexOf(y2) > -1 || a.objectHasChanged(s3, y2, x2, a.previousBeaconData[y2]) || a.eventRequiresKey(t3, y2)) && (n2[y2] = x2, a.previousBeaconData[y2] = x2);
      });
    }
    return n2;
  } }, { key: "objectHasChanged", value: function(t3, i2, a, n2) {
    return !t3 || i2.indexOf("request_") !== 0 ? false : i2 === "request_response_headers" || typeof a != "object" || typeof n2 != "object" ? true : Object.keys(a || {}).length !== Object.keys(n2 || {}).length;
  } }, { key: "eventRequiresKey", value: function(t3, i2) {
    return !!(t3 === "renditionchange" && i2.indexOf("video_source_") === 0 || pi.includes(i2) && fi.includes(t3) || t3 === "playbackmodechange" && i2.indexOf("player_playback_mode") === 0);
  } }]), r11;
})();
var hi = function r6(e) {
  k$3(this, r6);
  var t3 = 0, i2 = 0, a = 0, n2 = 0, o2 = 0, s3 = 0, u2 = 0, p2 = function(D2, f2) {
    var _3 = f2.request_start, v2 = f2.request_response_start, w2 = f2.request_response_end, h2 = f2.request_bytes_loaded;
    n2++;
    var m2, c2;
    if (v2 ? (m2 = v2 - (_3 != null ? _3 : 0), c2 = (w2 != null ? w2 : 0) - v2) : c2 = (w2 != null ? w2 : 0) - (_3 != null ? _3 : 0), c2 > 0 && h2 && h2 > 0) {
      var d2 = h2 / c2 * 8e3;
      o2++, i2 += h2, a += c2, e.data.view_min_request_throughput = Math.min(e.data.view_min_request_throughput || 1 / 0, d2), e.data.view_average_request_throughput = i2 / a * 8e3, e.data.view_request_count = n2, m2 > 0 && (t3 += m2, e.data.view_max_request_latency = Math.max(e.data.view_max_request_latency || 0, m2), e.data.view_average_request_latency = t3 / o2);
    }
  }, y2 = function(D2, f2) {
    n2++, s3++, e.data.view_request_count = n2, e.data.view_request_failed_count = s3;
  }, x2 = function(D2, f2) {
    n2++, u2++, e.data.view_request_count = n2, e.data.view_request_canceled_count = u2;
  };
  e.on("requestcompleted", p2), e.on("requestfailed", y2), e.on("requestcanceled", x2);
}, Mr = hi;
var yi = 60 * 60 * 1e3, gi = function r7(e) {
  var t3 = this;
  k$3(this, r7), l$2(this, "_lastEventTime", void 0), e.on("before*", function(i2, a) {
    var n2 = a.viewer_time, o2 = O$3.now(), s3 = t3._lastEventTime;
    if (t3._lastEventTime = o2, s3 && o2 - s3 > yi) {
      var u2 = Object.keys(e.data).reduce(function(y2, x2) {
        return x2.indexOf("video_") === 0 ? Object.assign(y2, l$2({}, x2, e.data[x2])) : y2;
      }, {});
      e.mux.log.info("Received event after at least an hour inactivity, creating a new view");
      var p2 = e.playbackHeartbeat._playheadShouldBeProgressing;
      e._resetView(Object.assign({ viewer_time: n2 }, u2)), e.playbackHeartbeat._playheadShouldBeProgressing = p2, e.playbackHeartbeat._playheadShouldBeProgressing && i2.type !== "play" && i2.type !== "adbreakstart" && (e.emit("play", { viewer_time: n2 }), i2.type !== "playing" && e.emit("playing", { viewer_time: n2 }));
    }
  });
}, Hr = gi;
var bi = function r8(e) {
  k$3(this, r8);
  var t3 = function(u2) {
    var p2 = wi(u2), y2 = Ti(u2);
    if (p2 != null && !Br(p2, n2) && o2 <= y2) {
      n2 = p2, o2 = y2;
      var x2 = { video_cdn: p2 };
      e.emit("cdnchange", x2);
    }
  }, i2 = null, a = null, n2 = null, o2 = 0;
  e.on("viewinit", function() {
    i2 = null, a = null, n2 = null, o2 = 0;
  }), e.on("beforecdnchange", function(s3, u2) {
    var p2 = u2 == null ? void 0 : u2.video_cdn;
    p2 && (typeof u2.video_previous_cdn == "undefined" || u2.video_previous_cdn === null) && (Br(p2, a) ? u2.video_previous_cdn = i2 != null ? i2 : void 0 : (u2.video_previous_cdn = a != null ? a : void 0, i2 = a, a = p2));
  }), e.on("requestcompleted", function(s3, u2) {
    t3(u2);
  });
};
function Br(r11, e) {
  return (r11 == null ? void 0 : r11.toLowerCase()) === (e == null ? void 0 : e.toLowerCase());
}
function wi(r11) {
  var e;
  return r11 != null && r11.request_type && (r11.request_type === "media" || r11.request_type === "video") && (!((e = r11.request_response_headers) === null || e === void 0) && e["x-cdn"]) ? r11.request_response_headers["x-cdn"] : r11 != null && r11.video_cdn ? r11.video_cdn : null;
}
function Ti(r11) {
  return r11 != null && r11.request_start ? r11.request_start : r11 != null && r11.viewer_time ? r11.viewer_time : Date.now();
}
var Ur = bi;
var Ei = function(r11) {
  try {
    return JSON.parse(r11), true;
  } catch (e) {
    return false;
  }
}, ki = function r9(e) {
  var t3 = this;
  k$3(this, r9), l$2(this, "_emittingAutomaticEvent", false), l$2(this, "_hasInitialized", false), l$2(this, "_currentMode", "standard"), e.on("viewstart", function() {
    t3._hasInitialized || (t3._hasInitialized = true, t3._currentMode = e.data.player_playback_mode || "standard", t3._emittingAutomaticEvent = true, e.emit("playbackmodechange", { player_playback_mode: t3._currentMode, player_playback_mode_data: "{}" }), t3._emittingAutomaticEvent = false);
  }), e.on("viewend", function() {
    t3._hasInitialized = false;
  }), e.on("playbackmodechange", function(i2, a) {
    t3._emittingAutomaticEvent || (a.player_playback_mode_data ? Ei(a.player_playback_mode_data) || (e.mux.log.warn("Invalid JSON string for player_playback_mode_data"), a.player_playback_mode_data = "{}") : a.player_playback_mode_data = "{}", e.data.player_playback_mode_data = a.player_playback_mode_data, e.data.player_playback_mode = a.player_playback_mode, t3._currentMode = a.player_playback_mode);
  });
}, Fr = ki;
var xi = (function() {
  function r11(e) {
    k$3(this, r11), l$2(this, "pm", void 0), l$2(this, "_currentRangeStart", void 0), l$2(this, "_lastPlayheadTime", void 0), this.pm = e, this._currentRangeStart = null, this._lastPlayheadTime = null, e.on("playbackheartbeat", this._updatePlaybackRange.bind(this)), e.on("playbackheartbeatend", this._endPlaybackRange.bind(this));
  }
  return N$2(r11, [{ key: "_updateLastRangeEnd", value: function() {
    var t3 = this.pm.data.video_playback_ranges;
    if (t3 && t3.length > 0) {
      var i2 = this.pm.data.player_playhead_time || 0;
      t3[t3.length - 1][1] = i2;
    }
  } }, { key: "_updatePlaybackRange", value: function() {
    var t3, i2 = this.pm.data.player_playhead_time || 0;
    if (!(!this.pm.disableAdPlaybackRangeFiltering && (!((t3 = this.pm.adTracker) === null || t3 === void 0) && t3.isAdBreak) && this._lastPlayheadTime !== null && i2 < this._lastPlayheadTime)) {
      if (this._lastPlayheadTime !== null && this._currentRangeStart !== null) {
        var a = Math.abs(i2 - this._lastPlayheadTime);
        if (a > 1e3) {
          var n2 = this.pm.data.video_playback_ranges;
          n2 && n2.length > 0 && (n2[n2.length - 1][1] = this._lastPlayheadTime), this._currentRangeStart = null;
        }
      }
      if (this._currentRangeStart === null) {
        var o2 = this.pm.data.video_playback_ranges || [];
        o2.length > 0 && o2[o2.length - 1][1] === i2 ? this._currentRangeStart = o2[o2.length - 1][0] : (this._currentRangeStart = i2, o2.push([i2, i2])), this.pm.data.video_playback_ranges = o2;
      } else this._updateLastRangeEnd();
      this._lastPlayheadTime = i2;
    }
  } }, { key: "_endPlaybackRange", value: function() {
    this._currentRangeStart !== null && (this._updateLastRangeEnd(), this._currentRangeStart = null, this._lastPlayheadTime = null);
  } }]), r11;
})(), Wr = xi;
var z$1 = Object.freeze({ CELLULAR: "cellular", WIFI: "wifi", WIRED: "wired", OTHER: "other", NO_CONNECTION: "no_connection", UNKNOWN: "unknown" }), jr = function(r11) {
  if (!r11) return z$1.UNKNOWN;
  switch (r11) {
    case "cellular":
    case "wimax":
      return z$1.CELLULAR;
    case "wifi":
      return z$1.WIFI;
    case "ethernet":
      return z$1.WIRED;
    case "none":
      return z$1.NO_CONNECTION;
    case "bluetooth":
    case "other":
      return z$1.OTHER;
    case "unknown":
      return z$1.UNKNOWN;
    default:
      return z$1.OTHER;
  }
};
var Vr = function(r11) {
  return typeof r11 == "object" && "connection" in r11 && typeof r11.connection == "object";
};
var se$3 = G$3(Q$2()), Ri = (function() {
  function r11(e) {
    var t3 = this;
    k$3(this, r11), l$2(this, "pm", void 0), l$2(this, "lastType", void 0), l$2(this, "lastLowDataMode", void 0), this.pm = e, this.pm.one("viewinit", function() {
      var i2, a = t3.emit.bind(t3);
      a(), se$3.default.addEventListener("online", a), se$3.default.addEventListener("offline", a), (i2 = r11.connection) === null || i2 === void 0 || i2.addEventListener("change", a), t3.pm.on("destroy", function() {
        var n2;
        (n2 = r11.connection) === null || n2 === void 0 || n2.removeEventListener("change", a), se$3.default.removeEventListener("online", a), se$3.default.removeEventListener("offline", a);
      });
    });
  }
  return N$2(r11, [{ key: "type", get: function() {
    var t3, i2;
    return ((t3 = se$3.default.navigator) === null || t3 === void 0 ? void 0 : t3.onLine) === false ? z$1.NO_CONNECTION : !((i2 = r11.connection) === null || i2 === void 0) && i2.type ? jr(r11.connection.type) : z$1.UNKNOWN;
  } }, { key: "lowDataMode", get: function() {
    var t3;
    return (t3 = r11.connection) === null || t3 === void 0 ? void 0 : t3.saveData;
  } }, { key: "emit", value: function() {
    var t3 = this.type, i2 = this.lowDataMode;
    t3 === this.lastType && i2 === this.lastLowDataMode || (this.lastType = t3, this.lastLowDataMode = i2, this.pm.emit("networkchange", Z$2({ viewer_connection_type: t3 }, i2 !== void 0 && { viewer_connection_low_data_mode: i2 })));
  } }], [{ key: "connection", get: function() {
    return Vr(se$3.default.navigator) ? se$3.default.navigator.connection : null;
  } }]), r11;
})(), Gr = Ri;
var Di = ["viewstart", "ended", "loadstart", "pause", "play", "playing", "ratechange", "waiting", "adplay", "adpause", "adended", "aderror", "adplaying", "adrequest", "adresponse", "adbreakstart", "adbreakend", "adfirstquartile", "admidpoint", "adthirdquartile", "rebufferstart", "rebufferend", "seeked", "error", "hb", "requestcompleted", "requestfailed", "requestcanceled", "renditionchange", "networkchange", "cdnchange", "playbackmodechange"], Si = /* @__PURE__ */ new Set(["requestcompleted", "requestfailed", "requestcanceled"]), qi = (function(r11) {
  Dt$1(t3, r11);
  var e = Pt$1(t3);
  function t3(i2, a, n2) {
    k$3(this, t3);
    var o2;
    o2 = e.call(this), l$2(b$3(o2), "pageLoadEndTime", void 0), l$2(b$3(o2), "pageLoadInitTime", void 0), l$2(b$3(o2), "_destroyed", void 0), l$2(b$3(o2), "_heartBeatTimeout", void 0), l$2(b$3(o2), "adTracker", void 0), l$2(b$3(o2), "dashjs", void 0), l$2(b$3(o2), "data", void 0), l$2(b$3(o2), "disablePlayheadRebufferTracking", void 0), l$2(b$3(o2), "disableRebufferTracking", void 0), l$2(b$3(o2), "disableAdPlaybackRangeFiltering", void 0), l$2(b$3(o2), "errorTracker", void 0), l$2(b$3(o2), "errorTranslator", void 0), l$2(b$3(o2), "emitTranslator", void 0), l$2(b$3(o2), "getAdData", void 0), l$2(b$3(o2), "getPlayheadTime", void 0), l$2(b$3(o2), "getStateData", void 0), l$2(b$3(o2), "stateDataTranslator", void 0), l$2(b$3(o2), "hlsjs", void 0), l$2(b$3(o2), "id", void 0), l$2(b$3(o2), "longResumeTracker", void 0), l$2(b$3(o2), "minimumRebufferDuration", void 0), l$2(b$3(o2), "mux", void 0), l$2(b$3(o2), "playbackEventDispatcher", void 0), l$2(b$3(o2), "playbackHeartbeat", void 0), l$2(b$3(o2), "playbackHeartbeatTime", void 0), l$2(b$3(o2), "playheadTime", void 0), l$2(b$3(o2), "seekingTracker", void 0), l$2(b$3(o2), "sustainedRebufferThreshold", void 0), l$2(b$3(o2), "watchTimeTracker", void 0), l$2(b$3(o2), "currentFragmentPDT", void 0), l$2(b$3(o2), "currentFragmentStart", void 0), o2.pageLoadInitTime = pe$2.navigationStart(), o2.pageLoadEndTime = pe$2.domContentLoadedEventEnd();
    var s3 = { debug: false, minimumRebufferDuration: 250, sustainedRebufferThreshold: 1e3, playbackHeartbeatTime: 25, beaconDomain: "litix.io", sampleRate: 1, disableCookies: false, respectDoNotTrack: false, disableRebufferTracking: false, disablePlayheadRebufferTracking: false, disableAdPlaybackRangeFiltering: false, errorTranslator: function(_3) {
      return _3;
    }, emitTranslator: function() {
      for (var _3 = arguments.length, v2 = new Array(_3), w2 = 0; w2 < _3; w2++) v2[w2] = arguments[w2];
      return v2;
    }, stateDataTranslator: function(_3) {
      return _3;
    } };
    if (o2.mux = i2, o2.id = a, n2 != null && n2.beaconDomain && o2.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."), n2 = Object.assign(s3, n2), n2.data = n2.data || {}, false) ;
    n2.data.property_key && (n2.data.env_key = n2.data.property_key, delete n2.data.property_key), q$1.level = n2.debug ? X$1.DEBUG : X$1.WARN, o2.getPlayheadTime = n2.getPlayheadTime, o2.getStateData = n2.getStateData || function() {
      return {};
    }, o2.getAdData = n2.getAdData || function() {
    }, o2.minimumRebufferDuration = n2.minimumRebufferDuration, o2.sustainedRebufferThreshold = n2.sustainedRebufferThreshold, o2.playbackHeartbeatTime = n2.playbackHeartbeatTime, o2.disableRebufferTracking = n2.disableRebufferTracking, o2.disableRebufferTracking && o2.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."), o2.disablePlayheadRebufferTracking = n2.disablePlayheadRebufferTracking, o2.disableAdPlaybackRangeFiltering = n2.disableAdPlaybackRangeFiltering, o2.errorTranslator = n2.errorTranslator, o2.emitTranslator = n2.emitTranslator, o2.stateDataTranslator = n2.stateDataTranslator, o2.playbackEventDispatcher = new Cr(i2, n2.data.env_key, n2), o2.data = { player_instance_id: re$3(), mux_sample_rate: n2.sampleRate, beacon_domain: n2.beaconCollectionDomain || n2.beaconDomain }, o2.data.view_sequence_number = 1, o2.data.player_sequence_number = 1;
    var y2 = (function() {
      typeof this.data.view_start == "undefined" && (this.data.view_start = this.mux.utils.now(), this.emit("viewstart"), this.emit("renditionchange"));
    }).bind(b$3(o2));
    if (o2.on("viewinit", function(_3, v2) {
      this._resetVideoData(), this._resetViewData(), this._resetErrorData(), this._updateStateData(), Object.assign(this.data, v2), this._initializeViewData(), this.one("play", y2), this.one("adbreakstart", y2);
    }), o2.on("videochange", function(_3, v2) {
      this._resetView(v2);
    }), o2.on("programchange", function(_3, v2) {
      this.data.player_is_paused && this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."), this._resetView(Object.assign(v2, { view_program_changed: true })), y2(), this.emit("play"), this.emit("playing");
    }), o2.on("fragmentchange", function(_3, v2) {
      this.currentFragmentPDT = v2.currentFragmentPDT, this.currentFragmentStart = v2.currentFragmentStart;
    }), o2.on("destroy", o2.destroy), typeof window != "undefined" && typeof window.addEventListener == "function" && typeof window.removeEventListener == "function") {
      var x2 = function() {
        var _3 = typeof o2.data.view_start != "undefined";
        o2.mux.WINDOW_HIDDEN = document.visibilityState === "hidden", _3 && o2.mux.WINDOW_HIDDEN && (o2.data.player_is_paused || o2.emit("hb"));
      };
      window.addEventListener("visibilitychange", x2, false);
      var D2 = function(_3) {
        _3.persisted || o2.destroy();
      };
      window.addEventListener("pagehide", D2, false), o2.on("destroy", function() {
        window.removeEventListener("visibilitychange", x2), window.removeEventListener("pagehide", D2);
      });
    }
    o2.on("playerready", function(_3, v2) {
      Object.assign(this.data, v2);
    }), Di.forEach(function(_3) {
      o2.on(_3, function(v2, w2) {
        _3.indexOf("ad") !== 0 && this._updateStateData(), Object.assign(this.data, w2), this._sanitizeData();
      }), o2.on("after" + _3, function() {
        (_3 !== "error" || this.errorTracker.viewErrored) && this.send(_3);
      });
    }), o2.on("viewend", function(_3, v2) {
      Object.assign(o2.data, v2);
    });
    var f2 = function(v2) {
      var w2 = this.mux.utils.now();
      this.data.player_init_time && (this.data.player_startup_time = w2 - this.data.player_init_time), this.pageLoadInitTime = this.data.page_load_init_time || this.pageLoadInitTime, this.pageLoadEndTime = this.data.page_load_end_time || this.pageLoadEndTime, !this.mux.PLAYER_TRACKED && this.pageLoadInitTime && (this.mux.PLAYER_TRACKED = true, (this.data.player_init_time || this.pageLoadEndTime) && (this.data.page_load_time = Math.min(this.data.player_init_time || 1 / 0, this.pageLoadEndTime || 1 / 0) - this.pageLoadInitTime)), this.send("playerready"), delete this.data.player_startup_time, delete this.data.page_load_time;
    };
    return o2.one("playerready", f2), o2.longResumeTracker = new Hr(b$3(o2)), o2.errorTracker = new Wt$2(b$3(o2)), new er$1(b$3(o2)), o2.seekingTracker = new Xt$2(b$3(o2)), o2.playheadTime = new Gt$2(b$3(o2)), o2.playbackHeartbeat = new Ft$2(b$3(o2)), new Yt$2(b$3(o2)), o2.watchTimeTracker = new jt$2(b$3(o2)), new Vt$2(b$3(o2)), new Wr(b$3(o2)), o2.adTracker = new Zt$2(b$3(o2)), new zt$2(b$3(o2)), new Qt$2(b$3(o2)), new Kt$2(b$3(o2)), new Mr(b$3(o2)), new Ur(b$3(o2)), new Fr(b$3(o2)), new Gr(b$3(o2)), n2.hlsjs && o2.addHLSJS(n2), n2.dashjs && o2.addDashJS(n2), o2.emit("viewinit", n2.data), o2;
  }
  return N$2(t3, [{ key: "emit", value: function(a, n2) {
    var o2, s3 = Object.assign({ viewer_time: this.mux.utils.now() }, n2), u2 = [a, s3];
    if (this.emitTranslator) try {
      u2 = this.emitTranslator(a, s3);
    } catch (p2) {
      this.mux.log.warn("Exception in emit translator callback.", p2);
    }
    u2 != null && u2.length && (o2 = Se$2($$2(t3.prototype), "emit", this)).call.apply(o2, [this].concat(W$2(u2)));
  } }, { key: "destroy", value: function() {
    this._destroyed || (this._destroyed = true, typeof this.data.view_start != "undefined" && (this.emit("viewend"), this.send("viewend")), this.playbackEventDispatcher.destroy(), this.removeHLSJS(), this.removeDashJS(), window.clearTimeout(this._heartBeatTimeout));
  } }, { key: "send", value: function(a) {
    if (this.data.view_id) {
      var n2 = Object.assign({}, this.data), o2 = ["player_program_time", "player_manifest_newest_program_time", "player_live_edge_program_time", "player_program_time", "video_holdback", "video_part_holdback", "video_target_duration", "video_part_target_duration"];
      if (n2.video_source_is_live === void 0 && (n2.player_source_duration === 1 / 0 || n2.video_source_duration === 1 / 0 ? n2.video_source_is_live = true : (n2.player_source_duration > 0 || n2.video_source_duration > 0) && (n2.video_source_is_live = false)), n2.video_source_is_live || o2.forEach(function(y2) {
        n2[y2] = void 0;
      }), n2.video_source_url = n2.video_source_url || n2.player_source_url, n2.video_source_url) {
        var s3 = H$1(ie$3(n2.video_source_url), 2), u2 = s3[0], p2 = s3[1];
        n2.video_source_domain = p2, n2.video_source_hostname = u2;
      }
      delete n2.ad_request_id, n2.video_playback_ranges && (n2.video_playback_range = JSON.stringify(n2.video_playback_ranges.filter(function(y2) {
        return y2[0] !== y2[1];
      }).map(function(y2) {
        return "".concat(y2[0], ":").concat(y2[1]);
      })), delete n2.video_playback_ranges), this.playbackEventDispatcher.send(a, n2), this.data.view_sequence_number++, this.data.player_sequence_number++, Si.has(a) || this._restartHeartBeat(), a === "viewend" && delete this.data.view_id;
    }
  } }, { key: "_resetView", value: function(a) {
    this.emit("viewend"), this.send("viewend"), this.emit("viewinit", a);
  } }, { key: "_updateStateData", value: function() {
    var a, n2 = this.getStateData();
    if (typeof this.stateDataTranslator == "function") try {
      n2 = this.stateDataTranslator(n2);
    } catch (u2) {
      this.mux.log.warn("Exception in stateDataTranslator translator callback.", u2);
    }
    if (!((a = this.data) === null || a === void 0) && a.video_cdn && (n2 != null && n2.video_cdn)) {
      n2.video_cdn;
      var s3 = qt$2(n2, ["video_cdn"]);
      n2 = s3;
    }
    Object.assign(this.data, n2), this.playheadTime._updatePlayheadTime(), this._sanitizeData();
  } }, { key: "_sanitizeData", value: function() {
    var a = this, n2 = ["player_width", "player_height", "video_source_width", "video_source_height", "player_playhead_time", "video_source_bitrate"];
    n2.forEach(function(s3) {
      var u2 = parseInt(a.data[s3], 10);
      a.data[s3] = isNaN(u2) ? void 0 : u2;
    });
    var o2 = ["player_source_url", "video_source_url"];
    o2.forEach(function(s3) {
      if (a.data[s3]) {
        var u2 = a.data[s3].toLowerCase();
        (u2.indexOf("data:") === 0 || u2.indexOf("blob:") === 0) && (a.data[s3] = "MSE style URL");
      }
    });
  } }, { key: "_resetVideoData", value: function() {
    var a = this;
    Object.keys(this.data).forEach(function(n2) {
      n2.indexOf("video_") === 0 && delete a.data[n2];
    });
  } }, { key: "_resetViewData", value: function() {
    var a = this;
    Object.keys(this.data).forEach(function(n2) {
      n2.indexOf("view_") === 0 && delete a.data[n2];
    }), this.data.view_sequence_number = 1;
  } }, { key: "_resetErrorData", value: function() {
    delete this.data.player_error_code, delete this.data.player_error_message, delete this.data.player_error_context, delete this.data.player_error_severity, delete this.data.player_error_business_exception;
  } }, { key: "_initializeViewData", value: function() {
    var a = this, n2 = this.data.view_id = re$3(), o2 = function() {
      n2 === a.data.view_id && P$4(a.data, "player_view_count", 1);
    };
    this.data.player_is_paused ? this.one("play", o2) : o2();
  } }, { key: "_restartHeartBeat", value: function() {
    var a = this;
    window.clearTimeout(this._heartBeatTimeout), this._heartBeatTimeout = window.setTimeout(function() {
      a.data.player_is_paused || a.emit("hb");
    }, 1e4);
  } }, { key: "addHLSJS", value: function(a) {
    if (!a.hlsjs) {
      this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.");
      return;
    }
    if (this.hlsjs) {
      this.mux.log.warn("An instance of HLS.js is already being monitored for this player.");
      return;
    }
    this.hlsjs = a.hlsjs, It$2(this.mux, this.id, a.hlsjs, {}, a.Hls || window.Hls);
  } }, { key: "removeHLSJS", value: function() {
    this.hlsjs && (Nt$2(this.hlsjs), this.hlsjs = void 0);
  } }, { key: "addDashJS", value: function(a) {
    if (!a.dashjs) {
      this.mux.log.warn("You must pass a valid dashjs instance in order to track it.");
      return;
    }
    if (this.dashjs) {
      this.mux.log.warn("An instance of Dash.js is already being monitored for this player.");
      return;
    }
    this.dashjs = a.dashjs, Mt$2(this.mux, this.id, a.dashjs);
  } }, { key: "removeDashJS", value: function() {
    this.dashjs && (Ht$1(this.dashjs), this.dashjs = void 0);
  } }]), t3;
})(Ut$2), Jr = qi;
var ge$1 = G$3(st$1());
function Pe$3() {
  return ge$1.default && !!(ge$1.default.fullscreenElement || ge$1.default.webkitFullscreenElement || ge$1.default.mozFullScreenElement || ge$1.default.msFullscreenElement);
}
var Ai = ["loadstart", "pause", "play", "playing", "seeking", "seeked", "timeupdate", "ratechange", "stalled", "waiting", "error", "ended"], Oi = { 1: "MEDIA_ERR_ABORTED", 2: "MEDIA_ERR_NETWORK", 3: "MEDIA_ERR_DECODE", 4: "MEDIA_ERR_SRC_NOT_SUPPORTED" };
function ut$2(r11, e, t3) {
  var i2 = H$1(de$4(e), 3), a = i2[0], n2 = i2[1], o2 = i2[2], s3 = r11.log, u2 = r11.utils.getComputedStyle, p2 = r11.utils.secondsToMs, y2 = { automaticErrorTracking: true };
  if (a) {
    if (o2 !== "video" && o2 !== "audio") return s3.error("The element of `" + n2 + "` was not a media element.");
  } else return s3.error("No element was found with the `" + n2 + "` query selector.");
  a.mux && (a.mux.destroy(), delete a.mux, s3.warn("Already monitoring this video element, replacing existing event listeners"));
  var x2 = { getPlayheadTime: function() {
    return p2(a.currentTime);
  }, getStateData: function() {
    var _3, v2, w2, h2 = ((_3 = (v2 = this).getPlayheadTime) === null || _3 === void 0 ? void 0 : _3.call(v2)) || p2(a.currentTime), m2 = this.hlsjs && this.hlsjs.url, c2 = this.dashjs && typeof this.dashjs.getSource == "function" && this.dashjs.getSource(), d2 = { player_is_paused: a.paused, player_width: parseInt(u2(a, "width")), player_height: parseInt(u2(a, "height")), player_autoplay_on: a.autoplay, player_preload_on: a.preload, player_language_code: a.lang, player_is_fullscreen: Pe$3(), video_poster_url: a.poster, video_source_url: m2 || c2 || a.currentSrc, video_source_duration: p2(a.duration), video_source_height: a.videoHeight, video_source_width: a.videoWidth, view_dropped_frame_count: a == null || (w2 = a.getVideoPlaybackQuality) === null || w2 === void 0 ? void 0 : w2.call(a).droppedVideoFrames };
    if (a.getStartDate && h2 > 0) {
      var g2 = a.getStartDate();
      if (g2 && typeof g2.getTime == "function" && g2.getTime()) {
        var T2 = g2.getTime();
        if (d2.player_program_time = T2 + h2, a.seekable.length > 0) {
          var E2 = T2 + a.seekable.end(a.seekable.length - 1);
          d2.player_live_edge_program_time = E2;
        }
      }
    }
    return d2;
  } };
  t3 = Object.assign(y2, t3, x2), t3.data = Object.assign({ player_software: "HTML5 Video Element", player_mux_plugin_name: "VideoElementMonitor", player_mux_plugin_version: r11.VERSION }, t3.data), a.mux = a.mux || {}, a.mux.deleted = false, a.mux.emit = function(f2, _3) {
    r11.emit(n2, f2, _3);
  }, a.mux.updateData = function(f2) {
    a.mux.emit("hb", f2);
  };
  var D2 = function() {
    s3.error("The monitor for this video element has already been destroyed.");
  };
  a.mux.destroy = function() {
    Object.keys(a.mux.listeners).forEach(function(f2) {
      a.removeEventListener(f2, a.mux.listeners[f2], false);
    }), delete a.mux.listeners, a.mux.fullscreenChangeListener && (document.removeEventListener("fullscreenchange", a.mux.fullscreenChangeListener, false), delete a.mux.fullscreenChangeListener), a.mux.destroy = D2, a.mux.swapElement = D2, a.mux.emit = D2, a.mux.addHLSJS = D2, a.mux.addDashJS = D2, a.mux.removeHLSJS = D2, a.mux.removeDashJS = D2, a.mux.updateData = D2, a.mux.setEmitTranslator = D2, a.mux.setStateDataTranslator = D2, a.mux.setGetPlayheadTime = D2, a.mux.deleted = true, r11.emit(n2, "destroy");
  }, a.mux.swapElement = function(f2) {
    var _3 = H$1(de$4(f2), 3), v2 = _3[0], w2 = _3[1], h2 = _3[2];
    if (v2) {
      if (h2 !== "video" && h2 !== "audio") return r11.log.error("The element of `" + w2 + "` was not a media element.");
    } else return r11.log.error("No element was found with the `" + w2 + "` query selector.");
    v2.muxId = a.muxId, delete a.muxId, v2.mux = v2.mux || {}, v2.mux.listeners = Object.assign({}, a.mux.listeners), delete a.mux.listeners, Object.keys(v2.mux.listeners).forEach(function(m2) {
      a.removeEventListener(m2, v2.mux.listeners[m2], false), v2.addEventListener(m2, v2.mux.listeners[m2], false);
    }), v2.mux.fullscreenChangeListener = a.mux.fullscreenChangeListener, delete a.mux.fullscreenChangeListener, v2.mux.swapElement = a.mux.swapElement, v2.mux.destroy = a.mux.destroy, delete a.mux, a = v2;
  }, a.mux.addHLSJS = function(f2) {
    r11.addHLSJS(n2, f2);
  }, a.mux.addDashJS = function(f2) {
    r11.addDashJS(n2, f2);
  }, a.mux.removeHLSJS = function() {
    r11.removeHLSJS(n2);
  }, a.mux.removeDashJS = function() {
    r11.removeDashJS(n2);
  }, a.mux.setEmitTranslator = function(f2) {
    r11.setEmitTranslator(n2, f2);
  }, a.mux.setStateDataTranslator = function(f2) {
    r11.setStateDataTranslator(n2, f2);
  }, a.mux.setGetPlayheadTime = function(f2) {
    f2 || (f2 = t3.getPlayheadTime), r11.setGetPlayheadTime(n2, f2);
  }, r11.init(n2, t3), r11.emit(n2, "playerready"), a.paused || (r11.emit(n2, "play"), a.readyState > 2 && r11.emit(n2, "playing")), a.mux.listeners = {}, Ai.forEach(function(f2) {
    f2 === "error" && !t3.automaticErrorTracking || (a.mux.listeners[f2] = function() {
      var _3 = {};
      if (f2 === "error") {
        if (!a.error || a.error.code === 1) return;
        _3.player_error_code = a.error.code, _3.player_error_message = Oi[a.error.code] || a.error.message;
      }
      r11.emit(n2, f2, _3);
    }, a.addEventListener(f2, a.mux.listeners[f2], false));
  }), a.mux.listeners.enterpictureinpicture = function() {
    r11.emit(n2, "playbackmodechange", { player_playback_mode: "pip", player_playback_mode_data: "{}" });
  }, a.mux.listeners.leavepictureinpicture = function() {
    var f2 = Pe$3() ? "fullscreen" : "standard";
    r11.emit(n2, "playbackmodechange", { player_playback_mode: f2, player_playback_mode_data: "{}" });
  }, a.addEventListener("enterpictureinpicture", a.mux.listeners.enterpictureinpicture, false), a.addEventListener("leavepictureinpicture", a.mux.listeners.leavepictureinpicture, false), a.mux.fullscreenChangeListener = function() {
    var f2 = Pe$3(), _3 = document.fullscreenElement;
    if (f2 && (_3 === a || _3 != null && _3.contains(a))) r11.emit(n2, "playbackmodechange", { player_playback_mode: "fullscreen", player_playback_mode_data: "{}" });
    else if (!f2) {
      var v2 = document.pictureInPictureElement === a, w2 = v2 ? "pip" : "standard";
      r11.emit(n2, "playbackmodechange", { player_playback_mode: w2, player_playback_mode_data: "{}" });
    }
  }, document.addEventListener("fullscreenchange", a.mux.fullscreenChangeListener, false);
}
function lt$1(r11, e, t3, i2) {
  var a = i2;
  if (r11 && typeof r11[e] == "function") try {
    a = r11[e].apply(r11, t3);
  } catch (n2) {
    q$1.info("safeCall error", n2);
  }
  return a;
}
var we$1 = G$3(Q$2()), be$2;
we$1.default && we$1.default.WeakMap && (be$2 = /* @__PURE__ */ new WeakMap());
function dt$1(r11, e) {
  if (!r11 || !e || !we$1.default || typeof we$1.default.getComputedStyle != "function") return "";
  var t3;
  return be$2 && be$2.has(r11) && (t3 = be$2.get(r11)), t3 || (t3 = we$1.default.getComputedStyle(r11, null), be$2 && be$2.set(r11, t3)), t3.getPropertyValue(e);
}
function ct$2(r11) {
  return Math.floor(r11 * 1e3);
}
var _e$2 = { TARGET_DURATION: "#EXT-X-TARGETDURATION", PART_INF: "#EXT-X-PART-INF", SERVER_CONTROL: "#EXT-X-SERVER-CONTROL", INF: "#EXTINF", PROGRAM_DATE_TIME: "#EXT-X-PROGRAM-DATE-TIME", VERSION: "#EXT-X-VERSION", SESSION_DATA: "#EXT-X-SESSION-DATA" }, Ve$2 = function(e) {
  return this.buffer = "", this.manifest = { segments: [], serverControl: {}, sessionData: {} }, this.currentUri = {}, this.process(e), this.manifest;
};
Ve$2.prototype.process = function(r11) {
  var e;
  for (this.buffer += r11, e = this.buffer.indexOf("\n"); e > -1; e = this.buffer.indexOf("\n")) this.processLine(this.buffer.substring(0, e)), this.buffer = this.buffer.substring(e + 1);
};
Ve$2.prototype.processLine = function(r11) {
  var e = r11.indexOf(":"), t3 = Ni(r11, e), i2 = t3[0], a = t3.length === 2 ? ft$2(t3[1]) : void 0;
  if (i2[0] !== "#") this.currentUri.uri = i2, this.manifest.segments.push(this.currentUri), this.manifest.targetDuration && !("duration" in this.currentUri) && (this.currentUri.duration = this.manifest.targetDuration), this.currentUri = {};
  else switch (i2) {
    case _e$2.TARGET_DURATION: {
      if (!isFinite(a) || a < 0) return;
      this.manifest.targetDuration = a, this.setHoldBack();
      break;
    }
    case _e$2.PART_INF: {
      _t$1(this.manifest, t3), this.manifest.partInf.partTarget && (this.manifest.partTargetDuration = this.manifest.partInf.partTarget), this.setHoldBack();
      break;
    }
    case _e$2.SERVER_CONTROL: {
      _t$1(this.manifest, t3), this.setHoldBack();
      break;
    }
    case _e$2.INF: {
      a === 0 ? this.currentUri.duration = 0.01 : a > 0 && (this.currentUri.duration = a);
      break;
    }
    case _e$2.PROGRAM_DATE_TIME: {
      var n2 = a, o2 = new Date(n2);
      this.manifest.dateTimeString || (this.manifest.dateTimeString = n2, this.manifest.dateTimeObject = o2), this.currentUri.dateTimeString = n2, this.currentUri.dateTimeObject = o2;
      break;
    }
    case _e$2.VERSION: {
      _t$1(this.manifest, t3);
      break;
    }
    case _e$2.SESSION_DATA: {
      var s3 = Ci(t3[1]), u2 = Be$2(s3);
      Object.assign(this.manifest.sessionData, u2);
    }
  }
};
Ve$2.prototype.setHoldBack = function() {
  var r11 = this.manifest, e = r11.serverControl, t3 = r11.targetDuration, i2 = r11.partTargetDuration;
  if (e) {
    var a = "holdBack", n2 = "partHoldBack", o2 = t3 && t3 * 3, s3 = i2 && i2 * 2;
    t3 && !e.hasOwnProperty(a) && (e[a] = o2), o2 && e[a] < o2 && (e[a] = o2), i2 && !e.hasOwnProperty(n2) && (e[n2] = i2 * 3), i2 && e[n2] < s3 && (e[n2] = s3);
  }
};
var _t$1 = function(r11, e) {
  var t3 = Qr(e[0].replace("#EXT-X-", "")), i2;
  Ii$1(e[1]) ? (i2 = {}, i2 = Object.assign(Li(e[1]), i2)) : i2 = ft$2(e[1]), r11[t3] = i2;
}, Qr = function(r11) {
  return r11.toLowerCase().replace(/-(\w)/g, function(e) {
    return e[1].toUpperCase();
  });
}, ft$2 = function(r11) {
  if (r11.toLowerCase() === "yes" || r11.toLowerCase() === "no") return r11.toLowerCase() === "yes";
  var e = r11.indexOf(":") !== -1 ? r11 : parseFloat(r11);
  return isNaN(e) ? r11 : e;
}, Pi = function(r11) {
  var e = {}, t3 = r11.split("=");
  if (t3.length > 1) {
    var i2 = Qr(t3[0]);
    e[i2] = ft$2(t3[1]);
  }
  return e;
}, Li = function(r11) {
  for (var e = r11.split(","), t3 = {}, i2 = 0; e.length > i2; i2++) {
    var a = e[i2], n2 = Pi(a);
    t3 = Object.assign(n2, t3);
  }
  return t3;
}, Ii$1 = function(r11) {
  return r11.indexOf("=") > -1;
}, Ni = function(r11, e) {
  return e === -1 ? [r11] : [r11.substring(0, e), r11.substring(e + 1)];
}, Ci = function(r11) {
  var e = {};
  if (r11) {
    var t3 = r11.search(","), i2 = r11.slice(0, t3), a = r11.slice(t3 + 1), n2 = [i2, a];
    return n2.forEach(function(o2, s3) {
      for (var u2 = o2.replace(/['"]+/g, "").split("="), p2 = 0; p2 < u2.length; p2++) u2[p2] === "DATA-ID" && (e["DATA-ID"] = u2[1 - p2]), u2[p2] === "VALUE" && (e.VALUE = u2[1 - p2]);
    }), { data: e };
  }
}, zr = Ve$2;
var Mi = { safeCall: lt$1, safeIncrement: P$4, getComputedStyle: dt$1, secondsToMs: ct$2, assign: Object.assign, headersStringToObject: ve$1, cdnHeadersToRequestId: ce$2, extractHostnameAndDomain: ie$3, extractHostname: F$1, manifestParser: zr, generateShortID: Ie$2, generateUUID: re$3, now: O$3.now, findMediaElement: de$4 }, Kr = Mi;
var Hi = { PLAYER_READY: "playerready", VIEW_INIT: "viewinit", VIDEO_CHANGE: "videochange", PLAY: "play", PAUSE: "pause", PLAYING: "playing", TIME_UPDATE: "timeupdate", SEEKING: "seeking", SEEKED: "seeked", REBUFFER_START: "rebufferstart", REBUFFER_END: "rebufferend", ERROR: "error", ENDED: "ended", RENDITION_CHANGE: "renditionchange", ORIENTATION_CHANGE: "orientationchange", PLAYBACK_MODE_CHANGE: "playbackmodechange", NETWORK_CHANGE: "networkchange", AD_REQUEST: "adrequest", AD_RESPONSE: "adresponse", AD_BREAK_START: "adbreakstart", AD_PLAY: "adplay", AD_PLAYING: "adplaying", AD_PAUSE: "adpause", AD_FIRST_QUARTILE: "adfirstquartile", AD_MID_POINT: "admidpoint", AD_THIRD_QUARTILE: "adthirdquartile", AD_ENDED: "adended", AD_BREAK_END: "adbreakend", AD_ERROR: "aderror", REQUEST_COMPLETED: "requestcompleted", REQUEST_FAILED: "requestfailed", REQUEST_CANCELLED: "requestcanceled", HEARTBEAT: "hb", DESTROY: "destroy" }, Yr = Hi;
var Bi = "mux-embed", Ui = "5.18.1", Fi = "2.1", M$3 = {}, ue$2 = function(e) {
  var t3 = arguments;
  typeof e == "string" ? ue$2.hasOwnProperty(e) ? Te$1.default.setTimeout(function() {
    t3 = Array.prototype.splice.call(t3, 1), ue$2[e].apply(null, t3);
  }, 0) : q$1.warn("`" + e + "` is an unknown task") : typeof e == "function" ? Te$1.default.setTimeout(function() {
    e(ue$2);
  }, 0) : q$1.warn("`" + e + "` is invalid.");
}, Wi = { loaded: O$3.now(), NAME: Bi, VERSION: Ui, API_VERSION: Fi, PLAYER_TRACKED: false, monitor: function(e, t3) {
  return ut$2(ue$2, e, t3);
}, destroyMonitor: function(e) {
  var t3 = H$1(de$4(e), 1), i2 = t3[0];
  i2 && i2.mux && typeof i2.mux.destroy == "function" ? i2.mux.destroy() : q$1.error("A video element monitor for `" + e + "` has not been initialized via `mux.monitor`.");
}, addHLSJS: function(e, t3) {
  var i2 = J$2(e);
  M$3[i2] ? M$3[i2].addHLSJS(t3) : q$1.error("A monitor for `" + i2 + "` has not been initialized.");
}, addDashJS: function(e, t3) {
  var i2 = J$2(e);
  M$3[i2] ? M$3[i2].addDashJS(t3) : q$1.error("A monitor for `" + i2 + "` has not been initialized.");
}, removeHLSJS: function(e) {
  var t3 = J$2(e);
  M$3[t3] ? M$3[t3].removeHLSJS() : q$1.error("A monitor for `" + t3 + "` has not been initialized.");
}, removeDashJS: function(e) {
  var t3 = J$2(e);
  M$3[t3] ? M$3[t3].removeDashJS() : q$1.error("A monitor for `" + t3 + "` has not been initialized.");
}, init: function(e, t3) {
  fe$2() && t3 && t3.respectDoNotTrack && q$1.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");
  var i2 = J$2(e);
  M$3[i2] = new Jr(ue$2, i2, t3);
}, emit: function(e, t3, i2) {
  var a = J$2(e);
  M$3[a] ? (M$3[a].emit(t3, i2), t3 === "destroy" && delete M$3[a]) : q$1.error("A monitor for `" + a + "` has not been initialized.");
}, updateData: function(e, t3) {
  var i2 = J$2(e);
  M$3[i2] ? M$3[i2].emit("hb", t3) : q$1.error("A monitor for `" + i2 + "` has not been initialized.");
}, setEmitTranslator: function(e, t3) {
  var i2 = J$2(e);
  M$3[i2] ? M$3[i2].emitTranslator = t3 : q$1.error("A monitor for `" + i2 + "` has not been initialized.");
}, setStateDataTranslator: function(e, t3) {
  var i2 = J$2(e);
  M$3[i2] ? M$3[i2].stateDataTranslator = t3 : q$1.error("A monitor for `" + i2 + "` has not been initialized.");
}, setGetPlayheadTime: function(e, t3) {
  var i2 = J$2(e);
  M$3[i2] ? M$3[i2].getPlayheadTime = t3 : q$1.error("A monitor for `" + i2 + "` has not been initialized.");
}, checkDoNotTrack: fe$2, log: q$1, utils: Kr, events: Yr, WINDOW_HIDDEN: false, WINDOW_UNLOADING: false };
Object.assign(ue$2, Wi);
typeof Te$1.default != "undefined" && typeof Te$1.default.addEventListener == "function" && Te$1.default.addEventListener("pagehide", function(r11) {
  r11.persisted || (ue$2.WINDOW_UNLOADING = true);
}, false);
var Zl = ue$2;
/*!
* JavaScript Cookie v2.1.3
* https://github.com/js-cookie/js-cookie
*
* Copyright 2006, 2015 Klaus Hartl & Fagner Brack
* Released under the MIT license
*/
var R$1 = Hls;
var k$2 = { VIDEO: "video", THUMBNAIL: "thumbnail", STORYBOARD: "storyboard", DRM: "drm" }, C$1 = { NOT_AN_ERROR: 0, NETWORK_OFFLINE: 2000002, NETWORK_UNKNOWN_ERROR: 2e6, NETWORK_NO_STATUS: 2000001, NETWORK_INVALID_URL: 24e5, NETWORK_NOT_FOUND: 2404e3, NETWORK_NOT_READY: 2412e3, NETWORK_GENERIC_SERVER_FAIL: 25e5, NETWORK_TOKEN_MISSING: 2403201, NETWORK_TOKEN_MALFORMED: 2412202, NETWORK_TOKEN_EXPIRED: 2403210, NETWORK_TOKEN_AUD_MISSING: 2403221, NETWORK_TOKEN_AUD_MISMATCH: 2403222, NETWORK_TOKEN_SUB_MISMATCH: 2403232, ENCRYPTED_ERROR: 5e6, ENCRYPTED_UNSUPPORTED_KEY_SYSTEM: 5000001, ENCRYPTED_GENERATE_REQUEST_FAILED: 5000002, ENCRYPTED_UPDATE_LICENSE_FAILED: 5000003, ENCRYPTED_UPDATE_SERVER_CERT_FAILED: 5000004, ENCRYPTED_CDM_ERROR: 5000005, ENCRYPTED_OUTPUT_RESTRICTED: 5000006, ENCRYPTED_MISSING_TOKEN: 5000002 }, V = (e) => e === k$2.VIDEO ? "playback" : e, _$2 = class _ extends Error {
  constructor(t3, r11 = _.MEDIA_ERR_CUSTOM, n2, o2) {
    var s3;
    super(t3), this.name = "MediaError", this.code = r11, this.context = o2, this.fatal = n2 != null ? n2 : r11 >= _.MEDIA_ERR_NETWORK && r11 <= _.MEDIA_ERR_ENCRYPTED, this.message || (this.message = (s3 = _.defaultMessages[this.code]) != null ? s3 : "");
  }
};
_$2.MEDIA_ERR_ABORTED = 1, _$2.MEDIA_ERR_NETWORK = 2, _$2.MEDIA_ERR_DECODE = 3, _$2.MEDIA_ERR_SRC_NOT_SUPPORTED = 4, _$2.MEDIA_ERR_ENCRYPTED = 5, _$2.MEDIA_ERR_CUSTOM = 100, _$2.defaultMessages = { 1: "You aborted the media playback", 2: "A network error caused the media download to fail.", 3: "A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.", 4: "An unsupported error occurred. The server or network failed, or your browser does not support this format.", 5: "The media is encrypted and there are no keys to decrypt it." };
var T$1 = _$2;
var dt = (e) => e == null, K$2 = (e, t3) => dt(t3) ? false : e in t3, Y$2 = { ANY: "any", MUTED: "muted" }, h$2 = { ON_DEMAND: "on-demand", LIVE: "live", UNKNOWN: "unknown" }, te$2 = { MSE: "mse", NATIVE: "native" }, O$2 = { HEADER: "header", QUERY: "query", NONE: "none" }, fr = Object.values(O$2), w$1 = { M3U8: "application/vnd.apple.mpegurl", MP4: "video/mp4" }, $$1 = { HLS: w$1.M3U8 };
[...Object.values(w$1), "hls", "HLS"];
var mr = { upTo720p: "720p", upTo1080p: "1080p", upTo1440p: "1440p", upTo2160p: "2160p" }, Er = { noLessThan480p: "480p", noLessThan540p: "540p", noLessThan720p: "720p", noLessThan1080p: "1080p", noLessThan1440p: "1440p", noLessThan2160p: "2160p" }, gr = { DESCENDING: "desc" };
var pt = "en", B$3 = { code: pt };
var P$3 = (e, t3, r11, n2, o2 = e) => {
  o2.addEventListener(t3, r11, n2), e.addEventListener("teardown", () => {
    o2.removeEventListener(t3, r11);
  }, { once: true });
};
function Me$1(e, t3, r11) {
  t3 && r11 > t3 && (r11 = t3);
  for (let n2 = 0; n2 < e.length; n2++) if (e.start(n2) <= r11 && e.end(n2) >= r11) return true;
  return false;
}
var J$1 = (e) => {
  let t3 = e.indexOf("?");
  if (t3 < 0) return [e];
  let r11 = e.slice(0, t3), n2 = e.slice(t3);
  return [r11, n2];
}, W$1 = (e) => {
  let { type: t3 } = e;
  if (t3) {
    let r11 = t3.toUpperCase();
    return K$2(r11, $$1) ? $$1[r11] : t3;
  }
  return ft$1(e);
}, ne$2 = (e) => e === "VOD" ? h$2.ON_DEMAND : h$2.LIVE, oe$2 = (e) => e === "EVENT" ? Number.POSITIVE_INFINITY : e === "VOD" ? Number.NaN : 0, ft$1 = (e) => {
  let { src: t3 } = e;
  if (!t3) return "";
  let r11 = "";
  try {
    r11 = G$2(t3).pathname;
  } catch {
    console.error("Invalid url when trying to infer mime type", t3);
  }
  let n2 = r11.lastIndexOf(".");
  if (n2 < 0) return Tt$1(e) ? w$1.M3U8 : "";
  let s3 = r11.slice(n2 + 1).toUpperCase();
  return K$2(s3, w$1) ? w$1[s3] : "";
}, j = (e) => {
  try {
    return new URL(e), false;
  } catch {
    return true;
  }
}, be$1 = (e) => e.split(`
`).find((t3, r11, n2) => r11 > 0 && n2[r11 - 1].startsWith("#EXT-X-STREAM-INF")), G$2 = (e, t3) => {
  var o2;
  if (!j(e)) return new URL(e);
  let r11 = (o2 = window == null ? void 0 : window.location) == null ? void 0 : o2.href, n2 = t3 != null ? t3 : r11;
  return t3 && j(t3.toString()) && (n2 = new URL(t3, r11)), new URL(e, n2);
}, yt$1 = "mux.com", Tt$1 = ({ src: e, customDomain: t3 = yt$1 }) => {
  let r11;
  try {
    r11 = new URL(`${e}`);
  } catch {
    return false;
  }
  let n2 = r11.protocol === "https:", o2 = r11.hostname === `stream.${t3}`.toLowerCase(), s3 = r11.pathname.split("/"), a = s3.length === 2, i2 = !(s3 != null && s3[1].includes("."));
  return n2 && o2 && a && i2;
}, ae$2 = (e) => {
  let t3 = (e != null ? e : "").split(".")[1];
  if (t3) try {
    let r11 = t3.replace(/-/g, "+").replace(/_/g, "/"), n2 = decodeURIComponent(atob(r11).split("").map(function(o2) {
      return "%" + ("00" + o2.charCodeAt(0).toString(16)).slice(-2);
    }).join(""));
    return JSON.parse(n2);
  } catch {
    return;
  }
}, Re$1 = ({ exp: e }, t3 = Date.now()) => !e || e * 1e3 < t3, xe$1 = ({ sub: e }, t3) => e !== t3, Ce$1 = ({ aud: e }, t3) => !e, ve = ({ aud: e }, t3) => e !== t3, ke$1 = "en";
function x$2(e, t3 = true) {
  var o2, s3;
  let r11 = t3 && (s3 = (o2 = B$3) == null ? void 0 : o2[e]) != null ? s3 : e, n2 = t3 ? B$3.code : ke$1;
  return new re$2(r11, n2);
}
var re$2 = class re {
  constructor(t3, r11 = ((n2) => (n2 = B$3) != null ? n2 : ke$1)()) {
    this.message = t3, this.locale = r11;
  }
  format(t3) {
    return this.message.replace(/\{(\w+)\}/g, (r11, n2) => {
      var o2;
      return (o2 = t3[n2]) != null ? o2 : "";
    });
  }
  toString() {
    return this.message;
  }
};
var mt$1 = Object.values(Y$2), De = (e) => typeof e == "boolean" || typeof e == "string" && mt$1.includes(e), Pe$2 = (e, t3, r11) => {
  let { autoplay: n2 } = e, o2 = false, s3 = false, a = De(n2) ? n2 : !!n2, i2 = () => {
    o2 || P$3(t3, "playing", () => {
      o2 = true;
    }, { once: true });
  };
  if (i2(), P$3(t3, "loadstart", () => {
    o2 = false, i2(), se$2(t3, a);
  }, { once: true }), P$3(t3, "loadstart", () => {
    r11 || (e.streamType && e.streamType !== h$2.UNKNOWN ? s3 = e.streamType === h$2.LIVE : s3 = !Number.isFinite(t3.duration)), se$2(t3, a);
  }, { once: true }), r11 && r11.once(R$1.Events.LEVEL_LOADED, (u2, f2) => {
    var c2;
    e.streamType && e.streamType !== h$2.UNKNOWN ? s3 = e.streamType === h$2.LIVE : s3 = (c2 = f2.details.live) != null ? c2 : false;
  }), !a) {
    let u2 = () => {
      !s3 || Number.isFinite(e.startTime) || (r11 != null && r11.liveSyncPosition ? t3.currentTime = r11.liveSyncPosition : Number.isFinite(t3.seekable.end(0)) && (t3.currentTime = t3.seekable.end(0)));
    };
    r11 && P$3(t3, "play", () => {
      t3.preload === "metadata" ? r11.once(R$1.Events.LEVEL_UPDATED, u2) : u2();
    }, { once: true });
  }
  return (u2) => {
    o2 || (a = De(u2) ? u2 : !!u2, se$2(t3, a));
  };
}, se$2 = (e, t3) => {
  if (!t3) return;
  let r11 = e.muted, n2 = () => e.muted = r11;
  switch (t3) {
    case Y$2.ANY:
      e.play().catch(() => {
        e.muted = true, e.play().catch(n2);
      });
      break;
    case Y$2.MUTED:
      e.muted = true, e.play().catch(n2);
      break;
    default:
      e.play().catch(() => {
      });
      break;
  }
};
var Le$1 = ({ preload: e, src: t3 }, r11, n2) => {
  let o2 = (c2) => {
    c2 != null && ["", "none", "metadata", "auto"].includes(c2) ? r11.setAttribute("preload", c2) : r11.removeAttribute("preload");
  };
  if (!n2) return o2(e), o2;
  let s3 = false, a = false, i2 = n2.config.maxBufferLength, l2 = n2.config.maxBufferSize, u2 = (c2) => {
    o2(c2);
    let y2 = c2 != null ? c2 : r11.preload;
    a || y2 === "none" || (y2 === "metadata" ? (n2.config.maxBufferLength = 1, n2.config.maxBufferSize = 1) : (n2.config.maxBufferLength = i2, n2.config.maxBufferSize = l2), f2());
  }, f2 = () => {
    !s3 && t3 && (s3 = true, n2.loadSource(t3));
  };
  return P$3(r11, "play", () => {
    a = true, n2.config.maxBufferLength = i2, n2.config.maxBufferSize = l2, f2();
  }, { once: true }), u2(e), u2;
};
var he$1 = (e, t3, r11) => {
  let { minPreloadSegments: n2 } = e;
  if (n2 == null || n2 <= 0 || !r11) return;
  let o2 = 0, s3 = false, a = t3.playbackRate || 1, i2 = () => {
    t3.playbackRate !== 0 && (a = t3.playbackRate, t3.playbackRate = 0);
  };
  t3.playbackRate = 0, P$3(t3, "ratechange", i2);
  let l2 = (u2, { frag: f2 }) => {
    s3 || f2.type !== "main" || (o2++, o2 >= n2 && (s3 = true, t3.removeEventListener("ratechange", i2), t3.playbackRate = a));
  };
  r11.on(R$1.Events.FRAG_BUFFERED, l2), t3.addEventListener("teardown", () => {
    s3 || (s3 = true, r11.off(R$1.Events.FRAG_BUFFERED, l2), t3.playbackRate = a);
  }, { once: true });
}, _e$1 = (e, t3, r11) => {
  let { initialEstimateSegments: n2 } = e;
  if (n2 == null || n2 <= 0 || !r11) return;
  let o2 = 0;
  r11.on(R$1.Events.FRAG_BUFFERED, (s3, { frag: a }) => {
    a.type === "main" && (o2++, o2 < n2 && r11.abrController.resetEstimator(r11.config.abrEwmaDefaultEstimate));
  });
};
function we(e, t3) {
  var l2;
  if (!("videoTracks" in e)) return;
  let r11 = /* @__PURE__ */ new WeakMap();
  t3.on(R$1.Events.MANIFEST_PARSED, function(u2, f2) {
    i2();
    let c2 = e.addVideoTrack("main");
    c2.selected = true;
    for (let [y2, d2] of f2.levels.entries()) {
      let p2 = c2.addRendition(d2.url[0], d2.width, d2.height, d2.videoCodec, d2.bitrate);
      r11.set(d2, `${y2}`), p2.id = `${y2}`;
    }
  }), t3.on(R$1.Events.AUDIO_TRACKS_UPDATED, function(u2, f2) {
    a();
    for (let c2 of f2.audioTracks) {
      let y2 = c2.default ? "main" : "alternative", d2 = e.addAudioTrack(y2, c2.name, c2.lang);
      d2.id = `${c2.id}`, c2.default && (d2.enabled = true);
    }
  });
  let n2 = () => {
    var c2;
    let u2 = +((c2 = [...e.audioTracks].find((y2) => y2.enabled)) == null ? void 0 : c2.id), f2 = t3.audioTracks.map((y2) => y2.id);
    u2 != t3.audioTrack && f2.includes(u2) && (t3.audioTrack = u2);
  };
  e.audioTracks.addEventListener("change", n2), t3.on(R$1.Events.LEVELS_UPDATED, function(u2, f2) {
    var d2;
    let c2 = e.videoTracks[(d2 = e.videoTracks.selectedIndex) != null ? d2 : 0];
    if (!c2) return;
    let y2 = f2.levels.map((p2) => r11.get(p2));
    for (let p2 of e.videoRenditions) p2.id && !y2.includes(p2.id) && c2.removeRendition(p2);
  });
  let o2 = (u2) => {
    let f2 = u2.target.selectedIndex;
    f2 != t3.nextLevel && (t3.nextLevel = f2);
  };
  (l2 = e.videoRenditions) == null || l2.addEventListener("change", o2);
  let s3 = () => {
    for (let u2 of e.videoTracks) e.removeVideoTrack(u2);
  }, a = () => {
    for (let u2 of e.audioTracks) e.removeAudioTrack(u2);
  }, i2 = () => {
    s3(), a();
  };
  t3.once(R$1.Events.DESTROYING, () => {
    var u2, f2;
    i2(), (u2 = e.audioTracks) == null || u2.removeEventListener("change", n2), (f2 = e.videoRenditions) == null || f2.removeEventListener("change", o2);
  });
}
var ie$2 = (e) => "time" in e ? e.time : e.startTime;
function Ae$1(e, t3) {
  t3.on(R$1.Events.NON_NATIVE_TEXT_TRACKS_FOUND, (o2, { tracks: s3 }) => {
    s3.forEach((a) => {
      var f2, c2;
      let i2 = (f2 = a.subtitleTrack) != null ? f2 : a.closedCaptions, l2 = t3.subtitleTracks.findIndex(({ lang: y2, name: d2, type: p2 }) => y2 == (i2 == null ? void 0 : i2.lang) && d2 === a.label && p2.toLowerCase() === a.kind), u2 = ((c2 = a._id) != null ? c2 : a.default) ? "default" : `${a.kind}${l2}`;
      ce$1(e, a.kind, a.label, i2 == null ? void 0 : i2.lang, u2, a.default);
    });
  });
  let r11 = () => {
    if (!t3.subtitleTracks.length) return;
    let o2 = Array.from(e.textTracks).find((i2) => i2.id && i2.mode === "showing" && ["subtitles", "captions"].includes(i2.kind));
    if (!o2) return;
    let s3 = t3.subtitleTracks[t3.subtitleTrack], a = s3 ? s3.default ? "default" : `${t3.subtitleTracks[t3.subtitleTrack].type.toLowerCase()}${t3.subtitleTrack}` : void 0;
    if (t3.subtitleTrack < 0 || (o2 == null ? void 0 : o2.id) !== a) {
      let i2 = t3.subtitleTracks.findIndex(({ lang: l2, name: u2, type: f2, default: c2 }) => o2.id === "default" && c2 || l2 == o2.language && u2 === o2.label && f2.toLowerCase() === o2.kind);
      t3.subtitleTrack = i2;
    }
    (o2 == null ? void 0 : o2.id) === a && o2.cues && Array.from(o2.cues).forEach((i2) => {
      o2.addCue(i2);
    });
  };
  e.textTracks.addEventListener("change", r11), t3.on(R$1.Events.CUES_PARSED, (o2, { track: s3, cues: a }) => {
    let i2 = e.textTracks.getTrackById(s3);
    if (!i2) return;
    let l2 = i2.mode === "disabled";
    l2 && (i2.mode = "hidden"), a.forEach((u2) => {
      var f2;
      (f2 = i2.cues) != null && f2.getCueById(u2.id) || i2.addCue(u2);
    }), l2 && (i2.mode = "disabled");
  }), t3.once(R$1.Events.DESTROYING, () => {
    e.textTracks.removeEventListener("change", r11), e.querySelectorAll("track[data-removeondestroy]").forEach((s3) => {
      s3.remove();
    });
  });
  let n2 = () => {
    Array.from(e.textTracks).forEach((o2) => {
      var s3, a;
      if (!["subtitles", "caption"].includes(o2.kind) && (o2.label === "thumbnails" || o2.kind === "chapters")) {
        if (!((s3 = o2.cues) != null && s3.length)) {
          let i2 = "track";
          o2.kind && (i2 += `[kind="${o2.kind}"]`), o2.label && (i2 += `[label="${o2.label}"]`);
          let l2 = e.querySelector(i2), u2 = (a = l2 == null ? void 0 : l2.getAttribute("src")) != null ? a : "";
          l2 == null || l2.removeAttribute("src"), setTimeout(() => {
            l2 == null || l2.setAttribute("src", u2);
          }, 0);
        }
        o2.mode !== "hidden" && (o2.mode = "hidden");
      }
    });
  };
  t3.once(R$1.Events.MANIFEST_LOADED, n2), t3.once(R$1.Events.MEDIA_ATTACHED, n2);
}
function ce$1(e, t3, r11, n2, o2, s3) {
  let a = document.createElement("track");
  return a.kind = t3, a.label = r11, n2 && (a.srclang = n2), o2 && (a.id = o2), s3 && (a.default = true), a.track.mode = ["subtitles", "captions"].includes(t3) ? "disabled" : "hidden", a.setAttribute("data-removeondestroy", ""), e.append(a), a.track;
}
function Et(e, t3) {
  let r11 = Array.prototype.find.call(e.querySelectorAll("track"), (n2) => n2.track === t3);
  r11 == null || r11.remove();
}
function U$2(e, t3, r11) {
  var n2;
  return (n2 = Array.from(e.querySelectorAll("track")).find((o2) => o2.track.label === t3 && o2.track.kind === r11)) == null ? void 0 : n2.track;
}
async function Se$1(e, t3, r11, n2) {
  let o2 = U$2(e, r11, n2);
  return o2 || (o2 = ce$1(e, n2, r11), o2.mode = "hidden", await new Promise((s3) => setTimeout(() => s3(void 0), 0))), o2.mode !== "hidden" && (o2.mode = "hidden"), [...t3].sort((s3, a) => ie$2(a) - ie$2(s3)).forEach((s3) => {
    var l2, u2;
    let a = s3.value, i2 = ie$2(s3);
    if ("endTime" in s3 && s3.endTime != null) o2 == null || o2.addCue(new VTTCue(i2, s3.endTime, n2 === "chapters" ? a : JSON.stringify(a != null ? a : null)));
    else {
      let f2 = Array.prototype.findIndex.call(o2 == null ? void 0 : o2.cues, (p2) => p2.startTime >= i2), c2 = (l2 = o2 == null ? void 0 : o2.cues) == null ? void 0 : l2[f2], y2 = c2 ? c2.startTime : Number.isFinite(e.duration) ? e.duration : Number.MAX_SAFE_INTEGER, d2 = (u2 = o2 == null ? void 0 : o2.cues) == null ? void 0 : u2[f2 - 1];
      d2 && (d2.endTime = i2), o2 == null || o2.addCue(new VTTCue(i2, y2, n2 === "chapters" ? a : JSON.stringify(a != null ? a : null)));
    }
  }), e.textTracks.dispatchEvent(new Event("change", { bubbles: true, composed: true })), o2;
}
var ue$1 = "cuepoints", Ie$1 = Object.freeze({ label: ue$1 });
async function Ne$1(e, t3, r11 = Ie$1) {
  return Se$1(e, t3, r11.label, "metadata");
}
var q = (e) => ({ time: e.startTime, value: JSON.parse(e.text) });
function gt$1(e, t3 = { label: ue$1 }) {
  let r11 = U$2(e, t3.label, "metadata");
  return r11 != null && r11.cues ? Array.from(r11.cues, (n2) => q(n2)) : [];
}
function Oe$1(e, t3 = { label: ue$1 }) {
  var s3, a;
  let r11 = U$2(e, t3.label, "metadata");
  if (!((s3 = r11 == null ? void 0 : r11.activeCues) != null && s3.length)) return;
  if (r11.activeCues.length === 1) return q(r11.activeCues[0]);
  let { currentTime: n2 } = e, o2 = Array.prototype.find.call((a = r11.activeCues) != null ? a : [], ({ startTime: i2, endTime: l2 }) => i2 <= n2 && l2 > n2);
  return q(o2 || r11.activeCues[0]);
}
async function Ue(e, t3 = Ie$1) {
  return new Promise((r11) => {
    P$3(e, "loadstart", async () => {
      let n2 = await Ne$1(e, [], t3);
      P$3(e, "cuechange", () => {
        let o2 = Oe$1(e);
        if (o2) {
          let s3 = new CustomEvent("cuepointchange", { composed: true, bubbles: true, detail: o2 });
          e.dispatchEvent(s3);
        }
      }, {}, n2), r11(n2);
    });
  });
}
var le$1 = "chapters", He = Object.freeze({ label: le$1 }), z = (e) => ({ startTime: e.startTime, endTime: e.endTime, value: e.text });
async function Ke$1(e, t3, r11 = He) {
  return Se$1(e, t3, r11.label, "chapters");
}
function Mt$1(e, t3 = { label: le$1 }) {
  var n2;
  let r11 = U$2(e, t3.label, "chapters");
  return (n2 = r11 == null ? void 0 : r11.cues) != null && n2.length ? Array.from(r11.cues, (o2) => z(o2)) : [];
}
function We(e, t3 = { label: le$1 }) {
  var s3, a;
  let r11 = U$2(e, t3.label, "chapters");
  if (!((s3 = r11 == null ? void 0 : r11.activeCues) != null && s3.length)) return;
  if (r11.activeCues.length === 1) return z(r11.activeCues[0]);
  let { currentTime: n2 } = e, o2 = Array.prototype.find.call((a = r11.activeCues) != null ? a : [], ({ startTime: i2, endTime: l2 }) => i2 <= n2 && l2 > n2);
  return z(o2 || r11.activeCues[0]);
}
async function Fe(e, t3 = He) {
  return new Promise((r11) => {
    P$3(e, "loadstart", async () => {
      let n2 = await Ke$1(e, [], t3);
      P$3(e, "cuechange", () => {
        let o2 = We(e);
        if (o2) {
          let s3 = new CustomEvent("chapterchange", { composed: true, bubbles: true, detail: o2 });
          e.dispatchEvent(s3);
        }
      }, {}, n2), r11(n2);
    });
  });
}
function bt$1(e, t3) {
  if (t3) {
    let r11 = t3.playingDate;
    if (r11 != null) return new Date(r11.getTime() - e.currentTime * 1e3);
  }
  return typeof e.getStartDate == "function" ? e.getStartDate() : /* @__PURE__ */ new Date(NaN);
}
function Rt$1(e, t3) {
  if (t3 && t3.playingDate) return t3.playingDate;
  if (typeof e.getStartDate == "function") {
    let r11 = e.getStartDate();
    return new Date(r11.getTime() + e.currentTime * 1e3);
  }
  return /* @__PURE__ */ new Date(NaN);
}
var de$3 = { VIDEO: "v", THUMBNAIL: "t", STORYBOARD: "s", DRM: "d" }, xt = (e) => {
  if (e === k$2.VIDEO) return de$3.VIDEO;
  if (e === k$2.DRM) return de$3.DRM;
}, Ct$1 = (e, t3) => {
  var o2, s3;
  let r11 = V(e), n2 = `${r11}Token`;
  return (o2 = t3.tokens) != null && o2[r11] ? (s3 = t3.tokens) == null ? void 0 : s3[r11] : K$2(n2, t3) ? t3[n2] : void 0;
}, F = (e, t3, r11, n2, o2 = false, s3 = !((a) => (a = globalThis.navigator) == null ? void 0 : a.onLine)()) => {
  var E2, D2;
  if (s3) {
    let g2 = x$2("Your device appears to be offline", o2), b2 = void 0, m2 = T$1.MEDIA_ERR_NETWORK, v2 = new T$1(g2, m2, false, b2);
    return v2.errorCategory = t3, v2.muxCode = C$1.NETWORK_OFFLINE, v2.data = e, v2;
  }
  let i2 = "status" in e ? e.status : e.code, l2 = Date.now(), u2 = T$1.MEDIA_ERR_NETWORK;
  if (i2 === 200) return;
  let f2 = V(t3), c2 = Ct$1(t3, r11), y2 = xt(t3), [d2] = J$1((E2 = r11.playbackId) != null ? E2 : "");
  if (!i2 || !d2) return;
  let p2 = ae$2(c2);
  if (c2 && !p2) {
    let g2 = x$2("The {tokenNamePrefix}-token provided is invalid or malformed.", o2).format({ tokenNamePrefix: f2 }), b2 = x$2("Compact JWT string: {token}", o2).format({ token: c2 }), m2 = new T$1(g2, u2, true, b2);
    return m2.errorCategory = t3, m2.muxCode = C$1.NETWORK_TOKEN_MALFORMED, m2.data = e, m2;
  }
  if (i2 >= 500) {
    let g2 = new T$1("", u2, n2 != null ? n2 : true);
    return g2.errorCategory = t3, g2.muxCode = C$1.NETWORK_UNKNOWN_ERROR, g2;
  }
  if (i2 === 403) if (p2) {
    if (Re$1(p2, l2)) {
      let g2 = { timeStyle: "medium", dateStyle: "medium" }, b2 = x$2("The video’s secured {tokenNamePrefix}-token has expired.", o2).format({ tokenNamePrefix: f2 }), m2 = x$2("Expired at: {expiredDate}. Current time: {currentDate}.", o2).format({ expiredDate: new Intl.DateTimeFormat("en", g2).format((D2 = p2.exp) != null ? D2 : 0 * 1e3), currentDate: new Intl.DateTimeFormat("en", g2).format(l2) }), v2 = new T$1(b2, u2, true, m2);
      return v2.errorCategory = t3, v2.muxCode = C$1.NETWORK_TOKEN_EXPIRED, v2.data = e, v2;
    }
    if (xe$1(p2, d2)) {
      let g2 = x$2("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.", o2).format({ tokenNamePrefix: f2 }), b2 = x$2("Specified playback ID: {playbackId} and the playback ID encoded in the {tokenNamePrefix}-token: {tokenPlaybackId}", o2).format({ tokenNamePrefix: f2, playbackId: d2, tokenPlaybackId: p2.sub }), m2 = new T$1(g2, u2, true, b2);
      return m2.errorCategory = t3, m2.muxCode = C$1.NETWORK_TOKEN_SUB_MISMATCH, m2.data = e, m2;
    }
    if (Ce$1(p2)) {
      let g2 = x$2("The {tokenNamePrefix}-token is formatted with incorrect information.", o2).format({ tokenNamePrefix: f2 }), b2 = x$2("The {tokenNamePrefix}-token has no aud value. aud value should be {expectedAud}.", o2).format({ tokenNamePrefix: f2, expectedAud: y2 }), m2 = new T$1(g2, u2, true, b2);
      return m2.errorCategory = t3, m2.muxCode = C$1.NETWORK_TOKEN_AUD_MISSING, m2.data = e, m2;
    }
    if (ve(p2, y2)) {
      let g2 = x$2("The {tokenNamePrefix}-token is formatted with incorrect information.", o2).format({ tokenNamePrefix: f2 }), b2 = x$2("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.", o2).format({ tokenNamePrefix: f2, expectedAud: y2, aud: p2.aud }), m2 = new T$1(g2, u2, true, b2);
      return m2.errorCategory = t3, m2.muxCode = C$1.NETWORK_TOKEN_AUD_MISMATCH, m2.data = e, m2;
    }
  } else {
    let g2 = x$2("Authorization error trying to access this {category} URL. If this is a signed URL, you might need to provide a {tokenNamePrefix}-token.", o2).format({ tokenNamePrefix: f2, category: t3 }), b2 = x$2("Specified playback ID: {playbackId}", o2).format({ playbackId: d2 }), m2 = new T$1(g2, u2, n2 != null ? n2 : true, b2);
    return m2.errorCategory = t3, m2.muxCode = C$1.NETWORK_TOKEN_MISSING, m2.data = e, m2;
  }
  if (i2 === 412) {
    let g2 = x$2("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.", o2), b2 = x$2("Specified playback ID: {playbackId}", o2).format({ playbackId: d2 }), m2 = new T$1(g2, u2, n2 != null ? n2 : true, b2);
    return m2.errorCategory = t3, m2.muxCode = C$1.NETWORK_NOT_READY, m2.streamType = r11.streamType === h$2.LIVE ? "live" : r11.streamType === h$2.ON_DEMAND ? "on-demand" : "unknown", m2.data = e, m2;
  }
  if (i2 === 404) {
    let g2 = x$2("This URL or playback-id does not exist. You may have used an Asset ID or an ID from a different resource.", o2), b2 = x$2("Specified playback ID: {playbackId}", o2).format({ playbackId: d2 }), m2 = new T$1(g2, u2, n2 != null ? n2 : true, b2);
    return m2.errorCategory = t3, m2.muxCode = C$1.NETWORK_NOT_FOUND, m2.data = e, m2;
  }
  if (i2 === 400) {
    let g2 = x$2("The URL or playback-id was invalid. You may have used an invalid value as a playback-id."), b2 = x$2("Specified playback ID: {playbackId}", o2).format({ playbackId: d2 }), m2 = new T$1(g2, u2, n2 != null ? n2 : true, b2);
    return m2.errorCategory = t3, m2.muxCode = C$1.NETWORK_INVALID_URL, m2.data = e, m2;
  }
  let M2 = new T$1("", u2, n2 != null ? n2 : true);
  return M2.errorCategory = t3, M2.muxCode = C$1.NETWORK_UNKNOWN_ERROR, M2.data = e, M2;
};
var Ve$1 = R$1.DefaultConfig.capLevelController, vt$1 = { "720p": 921600, "1080p": 2073600, "1440p": 4194304, "2160p": 8294400 };
function kt$1(e) {
  let t3 = e.toLowerCase().trim();
  return vt$1[t3];
}
var S$1 = class S extends Ve$1 {
  constructor(t3) {
    super(t3);
  }
  static setMaxAutoResolution(t3, r11) {
    r11 ? S.maxAutoResolution.set(t3, r11) : S.maxAutoResolution.delete(t3);
  }
  getMaxAutoResolution() {
    var r11;
    let t3 = this.hls;
    return (r11 = S.maxAutoResolution.get(t3)) != null ? r11 : void 0;
  }
  get levels() {
    var t3;
    return (t3 = this.hls.levels) != null ? t3 : [];
  }
  getValidLevels(t3) {
    return this.levels.filter((r11, n2) => this.isLevelAllowed(r11) && n2 <= t3);
  }
  getMaxLevelCapped(t3) {
    let r11 = this.getValidLevels(t3), n2 = this.getMaxAutoResolution();
    if (!n2) return super.getMaxLevel(t3);
    let o2 = kt$1(n2);
    if (!o2) return super.getMaxLevel(t3);
    let s3 = r11.filter((l2) => l2.width * l2.height <= o2), a = s3.findIndex((l2) => l2.width * l2.height === o2);
    if (a !== -1) {
      let l2 = s3[a];
      return r11.findIndex((u2) => u2 === l2);
    }
    if (s3.length === 0) return 0;
    let i2 = s3[s3.length - 1];
    return r11.findIndex((l2) => l2 === i2);
  }
  getMaxLevel(t3) {
    if (this.getMaxAutoResolution() !== void 0) return this.getMaxLevelCapped(t3);
    let r11 = super.getMaxLevel(t3), n2 = this.getValidLevels(t3);
    if (!n2[r11]) return r11;
    let o2 = Math.min(n2[r11].width, n2[r11].height), s3 = S.minMaxResolution;
    return o2 >= s3 ? r11 : Ve$1.getMaxLevelByMediaSize(n2, s3 * (16 / 9), s3);
  }
};
S$1.minMaxResolution = 720, S$1.maxAutoResolution = /* @__PURE__ */ new WeakMap();
var pe$1 = S$1, X = pe$1;
var Dt = "com.apple.fps.1_0", Pt = "application/vnd.apple.mpegurl", Ye = ({ mediaEl: e, getAppCertificate: t3, getLicenseKey: r11, saveAndDispatchError: n2, drmTypeCb: o2 }) => {
  if (!window.WebKitMediaKeys || !("onwebkitneedkey" in e)) {
    console.error("No WebKitMediaKeys. FairPlay may not be supported");
    let y2 = x$2("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."), d2 = new T$1(y2, T$1.MEDIA_ERR_ENCRYPTED, true);
    return d2.errorCategory = k$2.DRM, d2.muxCode = C$1.ENCRYPTED_CDM_ERROR, n2(e, d2), () => {
    };
  }
  let s3 = e, a = t3(), i2 = null, l2 = (y2) => {
    (async () => {
      try {
        s3.webkitKeys || u2();
        let p2 = await a;
        if (y2.initData === null || p2 == null) return;
        let M2 = Lt$1(y2.initData, p2);
        f2(M2);
      } catch (p2) {
        console.error("Could not start encrypted playback due to exception", p2), n2(s3, p2);
      }
    })();
  }, u2 = () => {
    try {
      let y2 = new WebKitMediaKeys(Dt);
      s3.webkitSetMediaKeys(y2), o2();
    } catch {
      let y2 = "Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.", d2 = new T$1(y2, T$1.MEDIA_ERR_ENCRYPTED, true);
      throw d2.errorCategory = k$2.DRM, d2.muxCode = C$1.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM, d2;
    }
  }, f2 = (y2) => {
    let d2 = s3.webkitKeys.createSession(Pt, y2), p2 = async (D2) => {
      try {
        let g2 = D2.message, b2 = await r11(g2);
        d2.update(b2);
      } catch (g2) {
        console.error("Error on FairPlay session message", g2), n2(e, g2);
      }
    }, M2 = (D2) => {
      let g2 = D2.target.error;
      if (!g2) return;
      console.error(`Internal Webkit Key Session Error - sysCode: ${g2.systemCode} code: ${g2.code}`);
      let b2 = x$2("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser."), m2 = new T$1(b2, T$1.MEDIA_ERR_ENCRYPTED, true);
      m2.errorCategory = k$2.DRM, m2.muxCode = C$1.ENCRYPTED_CDM_ERROR, n2(e, m2);
    }, E2 = () => {
      d2.removeEventListener("webkitkeymessage", p2), d2.removeEventListener("webkitkeyerror", M2), e.removeEventListener("teardown", E2), "webkitCurrentPlaybackTargetIsWireless" in e && e.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged", E2), i2 = null;
      try {
        d2.close();
      } catch {
      }
    };
    "webkitCurrentPlaybackTargetIsWireless" in e && e.addEventListener("webkitcurrentplaybacktargetiswirelesschanged", E2, { once: true }), d2.addEventListener("webkitkeymessage", p2), d2.addEventListener("webkitkeyerror", M2), e.addEventListener("teardown", E2), i2 = E2;
  }, c2 = () => {
    e.removeEventListener("webkitneedkey", l2), e.removeEventListener("teardown", c2), i2 == null || i2();
    try {
      s3.webkitSetMediaKeys(null);
    } catch {
    }
  };
  return e.addEventListener("webkitneedkey", l2), e.addEventListener("teardown", c2, { once: true }), c2;
}, Lt$1 = (e, t3) => {
  let r11 = _t(ht$1(e)), n2 = new Uint8Array(e), o2 = new Uint8Array(r11), s3 = new Uint8Array(t3), a = n2.byteLength + 4 + s3.byteLength + 4 + o2.byteLength, i2 = new Uint8Array(a), l2 = 0, u2 = (c2) => {
    i2.set(c2, l2), l2 += c2.byteLength;
  }, f2 = (c2) => {
    let y2 = new DataView(i2.buffer), d2 = c2.byteLength;
    y2.setUint32(l2, d2, true), l2 += 4, u2(c2);
  };
  return u2(n2), f2(o2), f2(s3), i2;
}, ht$1 = (e) => new TextDecoder("utf-16le").decode(e).replace("skd://", "").slice(1);
function _t(e) {
  let t3 = new ArrayBuffer(e.length * 2), r11 = new DataView(t3);
  for (let n2 = 0; n2 < e.length; n2++) r11.setUint16(n2 * 2, e.charCodeAt(n2), true);
  return t3;
}
var $e = ({ mediaEl: e, getAppCertificate: t3, getLicenseKey: r11, saveAndDispatchError: n2, drmTypeCb: o2, fallbackToWebkitFairplay: s3 }) => {
  let a = null, i2 = async (c2) => {
    try {
      let y2 = c2.initDataType;
      if (y2 !== "skd") {
        console.error(`Received unexpected initialization data type "${y2}"`);
        return;
      }
      e.mediaKeys || await l2(y2);
      let d2 = c2.initData;
      if (d2 == null) {
        console.error(`Could not start encrypted playback due to missing initData in ${c2.type} event`);
        return;
      }
      await u2(y2, d2);
    } catch (y2) {
      n2(e, y2);
      return;
    }
  }, l2 = async (c2) => {
    let y2 = await navigator.requestMediaKeySystemAccess("com.apple.fps", [{ initDataTypes: [c2], videoCapabilities: [{ contentType: "application/vnd.apple.mpegurl", robustness: "" }], distinctiveIdentifier: "not-allowed", persistentState: "not-allowed", sessionTypes: ["temporary"] }]).then((p2) => (o2(), p2)).catch(() => {
      let p2 = x$2("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser."), M2 = new T$1(p2, T$1.MEDIA_ERR_ENCRYPTED, true);
      M2.errorCategory = k$2.DRM, M2.muxCode = C$1.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM, n2(e, M2);
    });
    if (!y2) return;
    let d2 = await y2.createMediaKeys();
    try {
      let p2 = await t3();
      await d2.setServerCertificate(p2).catch(() => {
        let M2 = x$2("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate."), E2 = new T$1(M2, T$1.MEDIA_ERR_ENCRYPTED, true);
        return E2.errorCategory = k$2.DRM, E2.muxCode = C$1.ENCRYPTED_UPDATE_SERVER_CERT_FAILED, Promise.reject(E2);
      });
    } catch (p2) {
      n2(e, p2);
      return;
    }
    await e.setMediaKeys(d2);
  }, u2 = async (c2, y2) => {
    let d2 = e.mediaKeys.createSession(), p2 = async (D2) => {
      let g2 = D2.message, b2 = await r11(g2);
      try {
        await d2.update(b2);
      } catch {
        let m2 = x$2("Failed to update DRM license. This may be an issue with the player or your protected content."), v2 = new T$1(m2, T$1.MEDIA_ERR_ENCRYPTED, true);
        v2.errorCategory = k$2.DRM, v2.muxCode = C$1.ENCRYPTED_UPDATE_LICENSE_FAILED, n2(e, v2);
      }
    }, M2 = () => {
      let D2 = (g2) => {
        let b2;
        if (g2 === "internal-error") {
          let m2 = x$2("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser.");
          b2 = new T$1(m2, T$1.MEDIA_ERR_ENCRYPTED, true), b2.errorCategory = k$2.DRM, b2.muxCode = C$1.ENCRYPTED_CDM_ERROR;
        } else if (g2 === "output-restricted" || g2 === "output-downscaled") {
          let m2 = x$2("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen.");
          b2 = new T$1(m2, T$1.MEDIA_ERR_ENCRYPTED, false), b2.errorCategory = k$2.DRM, b2.muxCode = C$1.ENCRYPTED_OUTPUT_RESTRICTED;
        }
        b2 && n2(e, b2);
      };
      d2.keyStatuses.forEach((g2) => D2(g2));
    };
    d2.addEventListener("keystatuseschange", M2), d2.addEventListener("message", p2);
    let E2 = async () => {
      d2.removeEventListener("keystatuseschange", M2), d2.removeEventListener("message", p2), "webkitCurrentPlaybackTargetIsWireless" in e && e.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged", E2), e.removeEventListener("teardown", E2), await d2.close().catch((D2) => {
        console.warn("There was an error when closing EME session", D2);
      }), a = null;
    };
    "webkitCurrentPlaybackTargetIsWireless" in e && e.addEventListener("webkitcurrentplaybacktargetiswirelesschanged", E2, { once: true }), e.addEventListener("teardown", E2, { once: true }), a = E2, await d2.generateRequest(c2, y2).catch(async (D2) => {
      if (D2.name === "NotSupportedError" && "webkitCurrentPlaybackTargetIsWireless" in e && e.webkitCurrentPlaybackTargetIsWireless) console.warn("Failed to generate a DRM license request. Attempting to fallback to Webkit DRM"), s3 == null || s3();
      else {
        let g2 = x$2("Failed to generate a DRM license request. This may be an issue with the player or your protected content."), b2 = new T$1(g2, T$1.MEDIA_ERR_ENCRYPTED, true);
        return b2.errorCategory = k$2.DRM, b2.muxCode = C$1.ENCRYPTED_GENERATE_REQUEST_FAILED, console.error("Failed to generate license request", D2), Promise.reject(b2);
      }
    });
  }, f2 = async () => {
    e.removeEventListener("encrypted", i2), e.removeEventListener("teardown", f2), a && await a(), await e.setMediaKeys(null).catch(() => {
    });
  };
  return e.addEventListener("encrypted", i2), e.addEventListener("teardown", f2, { once: true }), f2;
};
var Q$1 = { FAIRPLAY: "fairplay", PLAYREADY: "playready", WIDEVINE: "widevine" }, At$1 = (e) => {
  if (e.includes("fps")) return Q$1.FAIRPLAY;
  if (e.includes("playready")) return Q$1.PLAYREADY;
  if (e.includes("widevine")) return Q$1.WIDEVINE;
}, St$1 = (e, t3) => {
  let r11 = be$1(e);
  if (!r11) return Promise.reject(new Error("No media playlist URL found in multivariant playlist"));
  if (j(r11) && !t3) return Promise.reject(new Error("masterPlaylistUrl is required to resolve relative media playlist URL"));
  let n2;
  try {
    n2 = G$2(r11, t3);
  } catch (o2) {
    return Promise.reject(o2);
  }
  return fetch(n2).then((o2) => o2.status !== 200 ? Promise.reject(o2) : o2.text());
}, It$1 = (e) => {
  let t3 = e.split(`
`).filter((n2) => n2.startsWith("#EXT-X-SESSION-DATA"));
  if (!t3.length) return {};
  let r11 = {};
  for (let n2 of t3) {
    let o2 = Ot(n2), s3 = o2["DATA-ID"];
    s3 && (r11[s3] = { ...o2 });
  }
  return { sessionData: r11 };
}, Nt$1 = /([A-Z0-9-]+)="?(.*?)"?(?:,|$)/g;
function Ot(e) {
  let t3 = [...e.matchAll(Nt$1)];
  return Object.fromEntries(t3.map(([, r11, n2]) => [r11, n2]));
}
var Ut$1 = (e) => {
  var i2, l2, u2;
  let t3 = e.split(`
`), n2 = (l2 = ((i2 = t3.find((f2) => f2.startsWith("#EXT-X-PLAYLIST-TYPE"))) != null ? i2 : "").split(":")[1]) == null ? void 0 : l2.trim(), o2 = ne$2(n2), s3 = oe$2(n2), a;
  if (o2 === h$2.LIVE) {
    let f2 = t3.find((y2) => y2.startsWith("#EXT-X-PART-INF"));
    if (!!f2) a = +f2.split(":")[1].split("=")[1] * 2;
    else {
      let y2 = t3.find((M2) => M2.startsWith("#EXT-X-TARGETDURATION")), d2 = (u2 = y2 == null ? void 0 : y2.split(":")) == null ? void 0 : u2[1];
      a = +(d2 != null ? d2 : 6) * 3;
    }
  }
  return { streamType: o2, targetLiveWindow: s3, liveEdgeStartOffset: a };
}, Ht = async (e, t3) => {
  if (t3 === w$1.MP4) return { streamType: h$2.ON_DEMAND, targetLiveWindow: Number.NaN, liveEdgeStartOffset: void 0, sessionData: void 0 };
  if (t3 === w$1.M3U8) {
    let r11 = await fetch(e);
    if (!r11.ok) return Promise.reject(r11);
    let n2 = await r11.text(), o2 = await St$1(n2, r11.url);
    return { ...It$1(n2), ...Ut$1(o2) };
  }
  return console.error(`Media type ${t3} is an unrecognized or unsupported type for src ${e}.`), { streamType: void 0, targetLiveWindow: void 0, liveEdgeStartOffset: void 0, sessionData: void 0 };
}, Kt$1 = async (e, t3, r11 = W$1({ src: e })) => {
  var l2, u2, f2, c2;
  let { streamType: n2, targetLiveWindow: o2, liveEdgeStartOffset: s3, sessionData: a } = await Ht(e, r11), i2 = a == null ? void 0 : a["com.apple.hls.chapters"];
  (i2 != null && i2.URI || i2 != null && i2.VALUE.toLocaleLowerCase().startsWith("http")) && Te((l2 = i2.URI) != null ? l2 : i2.VALUE, t3), ((u2 = L.get(t3)) != null ? u2 : {}).liveEdgeStartOffset = s3, ((f2 = L.get(t3)) != null ? f2 : {}).targetLiveWindow = o2, t3.dispatchEvent(new CustomEvent("targetlivewindowchange", { composed: true, bubbles: true })), ((c2 = L.get(t3)) != null ? c2 : {}).streamType = n2, t3.dispatchEvent(new CustomEvent("streamtypechange", { composed: true, bubbles: true }));
}, Te = async (e, t3) => {
  var r11, n2;
  try {
    let o2 = await fetch(e);
    if (!o2.ok) throw new Error(`Failed to fetch Mux metadata: ${o2.status} ${o2.statusText}`);
    let s3 = await o2.json(), a = {};
    if (!((r11 = s3 == null ? void 0 : s3[0]) != null && r11.metadata)) return;
    for (let l2 of s3[0].metadata) l2.key && l2.value && (a[l2.key] = l2.value);
    ((n2 = L.get(t3)) != null ? n2 : {}).metadata = a;
    let i2 = new CustomEvent("muxmetadata");
    t3.dispatchEvent(i2);
  } catch (o2) {
    console.error(o2);
  }
}, Wt$1 = (e) => {
  var a;
  let t3 = e.type, r11 = ne$2(t3), n2 = oe$2(t3), o2, s3 = !!((a = e.partList) != null && a.length);
  return r11 === h$2.LIVE && (o2 = s3 ? e.partTarget * 2 : e.targetduration * 3), { streamType: r11, targetLiveWindow: n2, liveEdgeStartOffset: o2, lowLatency: s3 };
}, Ft$1 = (e, t3, r11) => {
  var i2, l2, u2, f2, c2, y2, d2, p2;
  let { streamType: n2, targetLiveWindow: o2, liveEdgeStartOffset: s3, lowLatency: a } = Wt$1(e);
  if (n2 === h$2.LIVE) {
    a ? (r11.config.backBufferLength = (i2 = r11.userConfig.backBufferLength) != null ? i2 : 4, r11.config.maxFragLookUpTolerance = (l2 = r11.userConfig.maxFragLookUpTolerance) != null ? l2 : 1e-3, r11.config.abrBandWidthUpFactor = (u2 = r11.userConfig.abrBandWidthUpFactor) != null ? u2 : r11.config.abrBandWidthFactor) : r11.config.backBufferLength = (f2 = r11.userConfig.backBufferLength) != null ? f2 : 8;
    let M2 = Object.freeze({ get length() {
      return t3.seekable.length;
    }, start(E2) {
      return t3.seekable.start(E2);
    }, end(E2) {
      var D2;
      return E2 > this.length || E2 < 0 || Number.isFinite(t3.duration) ? t3.seekable.end(E2) : (D2 = r11.liveSyncPosition) != null ? D2 : t3.seekable.end(E2);
    } });
    ((c2 = L.get(t3)) != null ? c2 : {}).seekable = M2;
  }
  ((y2 = L.get(t3)) != null ? y2 : {}).liveEdgeStartOffset = s3, ((d2 = L.get(t3)) != null ? d2 : {}).targetLiveWindow = o2, t3.dispatchEvent(new CustomEvent("targetlivewindowchange", { composed: true, bubbles: true })), ((p2 = L.get(t3)) != null ? p2 : {}).streamType = n2, t3.dispatchEvent(new CustomEvent("streamtypechange", { composed: true, bubbles: true }));
}, je, Je, Ze = (Je = (je = globalThis == null ? void 0 : globalThis.navigator) == null ? void 0 : je.userAgent) != null ? Je : "", Ge, qe, ze$1, Vt$1 = (ze$1 = (qe = (Ge = globalThis == null ? void 0 : globalThis.navigator) == null ? void 0 : Ge.userAgentData) == null ? void 0 : qe.platform) != null ? ze$1 : "", Yt$1 = Ze.toLowerCase().includes("android") || ["x11", "android"].some((e) => Vt$1.toLowerCase().includes(e)), $t$1 = (e) => /^((?!chrome|android).)*safari/i.test(Ze) && !!e.canPlayType("application/vnd.apple.mpegurl"), L = /* @__PURE__ */ new WeakMap(), A$1 = "mux.com", Xe, Qe, et = (Qe = (Xe = R$1).isSupported) == null ? void 0 : Qe.call(Xe), Bt$1 = (e) => Yt$1 || !$t$1(e), kn = () => {
  if (typeof window != "undefined") return Zl.utils.now();
}, jt$1 = Zl.utils.generateUUID, Dn = ({ playbackId: e, customDomain: t3 = A$1, maxResolution: r11, minResolution: n2, renditionOrder: o2, programStartTime: s3, programEndTime: a, assetStartTime: i2, assetEndTime: l2, playbackToken: u2, tokens: { playback: f2 = u2 } = {}, extraSourceParams: c2 = {} } = {}) => {
  if (!e) return;
  let [y2, d2 = ""] = J$1(e), p2 = new URL(`https://stream.${t3}/${y2}.m3u8${d2}`);
  return f2 || p2.searchParams.has("token") ? (p2.searchParams.forEach((M2, E2) => {
    E2 != "token" && p2.searchParams.delete(E2);
  }), f2 && p2.searchParams.set("token", f2)) : (r11 && p2.searchParams.set("max_resolution", r11), n2 && (p2.searchParams.set("min_resolution", n2), r11 && +r11.slice(0, -1) < +n2.slice(0, -1) && console.error("minResolution must be <= maxResolution", "minResolution", n2, "maxResolution", r11)), o2 && p2.searchParams.set("rendition_order", o2), s3 && p2.searchParams.set("program_start_time", `${s3}`), a && p2.searchParams.set("program_end_time", `${a}`), i2 && p2.searchParams.set("asset_start_time", `${i2}`), l2 && p2.searchParams.set("asset_end_time", `${l2}`), Object.entries(c2).forEach(([M2, E2]) => {
    E2 != null && p2.searchParams.set(M2, E2);
  })), p2.toString();
}, ee$2 = (e) => {
  if (!e) return;
  let [t3] = e.split("?");
  return t3 || void 0;
}, tt = (e) => {
  if (!e || !e.startsWith("https://stream.")) return;
  let [t3] = new URL(e).pathname.slice(1).split(/\.m3u8|\//);
  return t3 || void 0;
}, Jt = (e) => {
  var t3, r11, n2;
  return (t3 = e == null ? void 0 : e.metadata) != null && t3.video_id ? e.metadata.video_id : it(e) && (n2 = (r11 = ee$2(e.playbackId)) != null ? r11 : tt(e.src)) != null ? n2 : e.src;
}, Gt$1 = (e) => {
  var t3;
  return (t3 = L.get(e)) == null ? void 0 : t3.error;
}, Pn = (e) => {
  var t3;
  return (t3 = L.get(e)) == null ? void 0 : t3.metadata;
}, Be$1 = (e) => {
  var t3, r11;
  return (r11 = (t3 = L.get(e)) == null ? void 0 : t3.streamType) != null ? r11 : h$2.UNKNOWN;
}, Ln = (e) => {
  var t3, r11;
  return (r11 = (t3 = L.get(e)) == null ? void 0 : t3.targetLiveWindow) != null ? r11 : Number.NaN;
}, rt = (e) => {
  var t3, r11;
  return (r11 = (t3 = L.get(e)) == null ? void 0 : t3.seekable) != null ? r11 : e.seekable;
}, hn = (e) => {
  var n2;
  let t3 = (n2 = L.get(e)) == null ? void 0 : n2.liveEdgeStartOffset;
  if (typeof t3 != "number") return Number.NaN;
  let r11 = rt(e);
  return r11.length ? r11.end(r11.length - 1) - t3 : Number.NaN;
}, _n = (e) => {
  var t3;
  return (t3 = L.get(e)) == null ? void 0 : t3.coreReference;
}, me$2 = 0.034, qt$1 = (e, t3, r11 = me$2) => Math.abs(e - t3) <= r11, nt = (e, t3, r11 = me$2) => e > t3 || qt$1(e, t3, r11), zt$1 = (e, t3 = me$2) => e.paused && nt(e.currentTime, e.duration, t3), ot = (e, t3) => {
  var u2, f2, c2;
  if (!t3 || !e.buffered.length) return;
  if (e.readyState > 2) return false;
  let r11 = t3.currentLevel >= 0 ? (f2 = (u2 = t3.levels) == null ? void 0 : u2[t3.currentLevel]) == null ? void 0 : f2.details : (c2 = t3.levels.find((y2) => !!y2.details)) == null ? void 0 : c2.details;
  if (!r11 || r11.live) return;
  let { fragments: n2 } = r11;
  if (!(n2 != null && n2.length)) return;
  if (e.currentTime < e.duration - (r11.targetduration + 0.5)) return false;
  let o2 = n2[n2.length - 1];
  if (e.currentTime <= o2.start) return false;
  let s3 = o2.start + o2.duration / 2, a = e.buffered.start(e.buffered.length - 1), i2 = e.buffered.end(e.buffered.length - 1);
  return s3 > a && s3 < i2;
}, Xt$1 = (e, t3) => e.ended || e.loop ? e.ended : t3 && ot(e, t3) ? true : zt$1(e), Qt$1 = (e, t3, r11) => {
  Zt$1(t3, r11, e);
  let { metadata: n2 = {} } = e, { view_session_id: o2 = jt$1() } = n2, s3 = Jt(e);
  n2.view_session_id = o2, n2.video_id = s3, e.metadata = n2;
  let a = (y2) => {
    var d2;
    (d2 = t3.mux) == null || d2.emit("hb", { view_drm_type: y2 });
  };
  e.drmTypeCb = a, e.fallbackToWebkitFairplay = async () => {
    var E2;
    let y2 = !t3.paused, d2 = t3.currentTime;
    e.useWebkitFairplay = true;
    let p2 = e.muxDataKeepSession;
    e.muxDataKeepSession = true;
    let M2 = (E2 = L.get(t3)) == null ? void 0 : E2.coreReference;
    Qt$1(e, t3, M2), e.muxDataKeepSession = p2, e.useWebkitFairplay = false, y2 && await t3.play().then(() => {
      t3.currentTime = d2;
    }).catch(() => {
    }), t3.currentTime = d2;
  }, L.set(t3, { retryCount: 0 });
  let i2 = er(e, t3), l2 = Le$1(e, t3, i2);
  e != null && e.muxDataKeepSession && (t3 != null && t3.mux) && !t3.mux.deleted ? i2 && t3.mux.addHLSJS({ hlsjs: i2, Hls: i2 ? R$1 : void 0 }) : ir(e, t3, i2), cr(e, t3, i2), Ue(t3), Fe(t3);
  let u2 = Pe$2(e, t3, i2);
  he$1(e, t3, i2), _e$1(e, t3, i2);
  let f2 = { engine: i2, setAutoplay: u2, setPreload: l2 }, c2 = L.get(t3);
  return c2 && (c2.coreReference = f2), f2;
}, Zt$1 = (e, t3, r11) => {
  let n2 = t3 == null ? void 0 : t3.engine;
  e != null && e.mux && !e.mux.deleted && (r11 != null && r11.muxDataKeepSession ? n2 && e.mux.removeHLSJS() : (e.mux.destroy(), delete e.mux)), n2 && (n2.detachMedia(), n2.destroy()), e && (e.hasAttribute("src") && (e.removeAttribute("src"), e.load()), e.removeEventListener("error", ut$1), e.removeEventListener("error", fe$1), e.removeEventListener("durationchange", ct$1), L.delete(e), e.dispatchEvent(new Event("teardown")));
};
function at(e, t3) {
  var u2;
  let r11 = W$1(e);
  if (!(r11 === w$1.M3U8)) return true;
  let o2 = !r11 || ((u2 = t3.canPlayType(r11)) != null ? u2 : true), { preferPlayback: s3 } = e, a = s3 === te$2.MSE, i2 = s3 === te$2.NATIVE, l2 = et && (a || Bt$1(t3));
  return o2 && (i2 || !l2);
}
var er = (e, t3) => {
  let { debug: r11, streamType: n2, startTime: o2 = -1, metadata: s3, preferCmcd: a, _hlsConfig: i2 = {}, maxAutoResolution: l2, initialBandwidthEstimateKbps: u2 } = e, c2 = W$1(e) === w$1.M3U8, y2 = at(e, t3);
  if (c2 && !y2 && et) {
    let d2 = { backBufferLength: 30, renderTextTracksNatively: false, liveDurationInfinity: true, capLevelOnFPSDrop: true, ...u2 != null ? { abrEwmaDefaultEstimate: u2 * 1e3 } : {} }, p2 = tr(n2), M2 = rr(e), E2 = [O$2.QUERY, O$2.HEADER].includes(a) ? { useHeaders: a === O$2.HEADER, sessionId: s3 == null ? void 0 : s3.view_session_id, contentId: s3 == null ? void 0 : s3.video_id } : void 0, D2 = sr(e), g2 = new R$1({ debug: r11, startPosition: o2, cmcd: E2, xhrSetup: (b2, m2) => {
      var H2, Ee;
      if (a && a !== O$2.QUERY) return;
      let v2 = G$2(m2);
      if (!v2.searchParams.has("CMCD")) return;
      let N2 = ((Ee = (H2 = v2.searchParams.get("CMCD")) == null ? void 0 : H2.split(",")) != null ? Ee : []).filter((ge2) => ge2.startsWith("sid") || ge2.startsWith("cid")).join(",");
      v2.searchParams.set("CMCD", N2), b2.open("GET", v2);
    }, ...d2, ...D2, ...p2, ...M2, ...i2 });
    return D2.capLevelController === X && l2 !== void 0 && X.setMaxAutoResolution(g2, l2), g2.on(R$1.Events.MANIFEST_PARSED, async function(b2, m2) {
      var N2, H2;
      let v2 = (N2 = m2.sessionData) == null ? void 0 : N2["com.apple.hls.chapters"];
      (v2 != null && v2.URI || v2 != null && v2.VALUE.toLocaleLowerCase().startsWith("http")) && Te((H2 = v2 == null ? void 0 : v2.URI) != null ? H2 : v2 == null ? void 0 : v2.VALUE, t3);
    }), g2;
  }
}, tr = (e) => e === h$2.LIVE ? { backBufferLength: 8 } : {}, rr = (e) => {
  let { tokens: { drm: t3 } = {}, playbackId: r11, drmTypeCb: n2 } = e, o2 = ee$2(r11);
  return !t3 || !o2 ? {} : { emeEnabled: true, drmSystems: { "com.apple.fps": { licenseUrl: Z$1(e, "fairplay"), serverCertificateUrl: st(e, "fairplay") }, "com.widevine.alpha": { licenseUrl: Z$1(e, "widevine") }, "com.microsoft.playready": { licenseUrl: Z$1(e, "playready") } }, requestMediaKeySystemAccessFunc: (s3, a) => (s3 === "com.widevine.alpha" && (a = [...a.map((i2) => {
    var u2;
    let l2 = (u2 = i2.videoCapabilities) == null ? void 0 : u2.map((f2) => ({ ...f2, robustness: "HW_SECURE_ALL" }));
    return { ...i2, videoCapabilities: l2 };
  }), ...a]), navigator.requestMediaKeySystemAccess(s3, a).then((i2) => {
    let l2 = At$1(s3);
    return n2 == null || n2(l2), i2;
  })) };
}, nr = async (e) => {
  let t3 = await fetch(e);
  return t3.status !== 200 ? Promise.reject(t3) : await t3.arrayBuffer();
}, or = async (e, t3) => {
  let r11 = await fetch(t3, { method: "POST", headers: { "Content-type": "application/octet-stream" }, body: e });
  if (r11.status !== 200) return Promise.reject(r11);
  let n2 = await r11.arrayBuffer();
  return new Uint8Array(n2);
}, ar = (e, t3) => {
  let o2 = { mediaEl: t3, getAppCertificate: () => nr(st(e, "fairplay")).catch((s3) => {
    if (s3 instanceof Response) {
      let a = F(s3, k$2.DRM, e);
      return console.error("mediaError", a == null ? void 0 : a.message, a == null ? void 0 : a.context), a ? Promise.reject(a) : Promise.reject(new Error("Unexpected error in app cert request"));
    }
    return Promise.reject(s3);
  }), getLicenseKey: (s3) => or(s3, Z$1(e, "fairplay")).catch((a) => {
    if (a instanceof Response) {
      let i2 = F(a, k$2.DRM, e);
      return console.error("mediaError", i2 == null ? void 0 : i2.message, i2 == null ? void 0 : i2.context), i2 ? Promise.reject(i2) : Promise.reject(new Error("Unexpected error in license key request"));
    }
    return Promise.reject(a);
  }), saveAndDispatchError: I$2, drmTypeCb: () => {
    var s3;
    (s3 = e.drmTypeCb) == null || s3.call(e, Q$1.FAIRPLAY);
  } };
  if (e.useWebkitFairplay) Ye(o2);
  else {
    let s3 = { fallbackToWebkitFairplay: async () => {
      var i2;
      await a(), (i2 = e.fallbackToWebkitFairplay) == null || i2.call(e);
    }, ...o2 }, a = $e(s3);
  }
}, Z$1 = ({ playbackId: e, tokens: { drm: t3 } = {}, customDomain: r11 = A$1 }, n2) => {
  let o2 = ee$2(e);
  return `https://license.${r11.toLocaleLowerCase().endsWith(A$1) ? r11 : A$1}/license/${n2}/${o2}?token=${t3}`;
}, st = ({ playbackId: e, tokens: { drm: t3 } = {}, customDomain: r11 = A$1 }, n2) => {
  let o2 = ee$2(e);
  return `https://license.${r11.toLocaleLowerCase().endsWith(A$1) ? r11 : A$1}/appcert/${n2}/${o2}?token=${t3}`;
}, it = ({ playbackId: e, src: t3, customDomain: r11 }) => {
  if (e) return true;
  if (typeof t3 != "string") return false;
  let n2 = window == null ? void 0 : window.location.href, o2 = new URL(t3, n2).hostname.toLocaleLowerCase();
  return o2.includes(A$1) || !!r11 && o2.includes(r11.toLocaleLowerCase());
}, sr = (e, t3) => {
  let r11 = {};
  return r11.capLevelToPlayerSize = e.capRenditionToPlayerSize, r11.capLevelToPlayerSize == null ? (r11.capLevelController = X, r11.capLevelToPlayerSize = true) : r11.capLevelController = CapLevelController, r11;
}, ir = (e, t3, r11) => {
  var l2;
  let { envKey: n2, disableTracking: o2, muxDataSDK: s3 = Zl, muxDataSDKOptions: a = {} } = e, i2 = it(e);
  if (!o2 && (n2 || i2)) {
    let { playerInitTime: u2, playerSoftwareName: f2, playerSoftwareVersion: c2, beaconCollectionDomain: y2, debug: d2, disableCookies: p2 } = e, M2 = { ...e.metadata, video_title: ((l2 = e == null ? void 0 : e.metadata) == null ? void 0 : l2.video_title) || void 0 }, E2 = (D2) => typeof D2.player_error_code == "string" ? false : typeof e.errorTranslator == "function" ? e.errorTranslator(D2) : D2;
    s3.monitor(t3, { debug: d2, beaconCollectionDomain: y2, hlsjs: r11, Hls: r11 ? R$1 : void 0, automaticErrorTracking: false, errorTranslator: E2, disableCookies: p2, ...a, data: { ...n2 ? { env_key: n2 } : {}, player_software_name: f2, player_software: f2, player_software_version: c2, player_init_time: u2, ...M2 } });
  }
}, cr = (e, t3, r11) => {
  var f2, c2;
  let n2 = at(e, t3), { src: o2, customDomain: s3 = A$1 } = e, a = () => {
    t3.ended || e.disablePseudoEnded || !Xt$1(t3, r11) || (ot(t3, r11) ? t3.currentTime = t3.buffered.end(t3.buffered.length - 1) : t3.dispatchEvent(new Event("ended")));
  }, i2, l2, u2 = () => {
    let y2 = rt(t3), d2, p2;
    y2.length > 0 && (d2 = y2.start(0), p2 = y2.end(0)), (l2 !== p2 || i2 !== d2) && t3.dispatchEvent(new CustomEvent("seekablechange", { composed: true })), i2 = d2, l2 = p2;
  };
  if (P$3(t3, "durationchange", u2), t3 && n2) {
    let y2 = W$1(e);
    if (typeof o2 == "string") {
      if (o2.endsWith(".mp4") && o2.includes(s3)) {
        let M2 = tt(o2), E2 = new URL(`https://stream.${s3}/${M2}/metadata.json`);
        Te(E2.toString(), t3);
      }
      let d2 = () => {
        if (Be$1(t3) !== h$2.LIVE || Number.isFinite(t3.duration)) return;
        let M2 = setInterval(u2, 1e3);
        t3.addEventListener("teardown", () => {
          clearInterval(M2);
        }, { once: true }), P$3(t3, "durationchange", () => {
          Number.isFinite(t3.duration) && clearInterval(M2);
        });
      }, p2 = async () => Kt$1(o2, t3, y2).then(d2).catch((M2) => {
        if (M2 instanceof Response) {
          let E2 = F(M2, k$2.VIDEO, e);
          if (E2) {
            I$2(t3, E2);
            return;
          }
        }
      });
      if (t3.preload === "none") {
        let M2 = () => {
          p2(), t3.removeEventListener("loadedmetadata", E2);
        }, E2 = () => {
          p2(), t3.removeEventListener("play", M2);
        };
        P$3(t3, "play", M2, { once: true }), P$3(t3, "loadedmetadata", E2, { once: true });
      } else p2();
      (f2 = e.tokens) != null && f2.drm ? ar(e, t3) : P$3(t3, "encrypted", () => {
        let M2 = x$2("Attempting to play DRM-protected content without providing a DRM token."), E2 = new T$1(M2, T$1.MEDIA_ERR_ENCRYPTED, true);
        E2.errorCategory = k$2.DRM, E2.muxCode = C$1.ENCRYPTED_MISSING_TOKEN, I$2(t3, E2);
      }, { once: true }), t3.setAttribute("src", o2), e.startTime && (((c2 = L.get(t3)) != null ? c2 : {}).startTime = e.startTime, t3.addEventListener("durationchange", ct$1, { once: true }));
    } else t3.removeAttribute("src");
    t3.addEventListener("error", ut$1), t3.addEventListener("error", fe$1), t3.addEventListener("emptied", () => {
      t3.querySelectorAll("track[data-removeondestroy]").forEach((p2) => {
        p2.remove();
      });
    }, { once: true }), P$3(t3, "pause", a), P$3(t3, "seeked", a), P$3(t3, "play", () => {
      t3.ended || nt(t3.currentTime, t3.duration) && (t3.currentTime = t3.seekable.length ? t3.seekable.start(0) : 0);
    });
  } else r11 && o2 ? (r11.once(R$1.Events.LEVEL_LOADED, (y2, d2) => {
    Ft$1(d2.details, t3, r11), u2(), Be$1(t3) === h$2.LIVE && !Number.isFinite(t3.duration) && (r11.on(R$1.Events.LEVEL_UPDATED, u2), P$3(t3, "durationchange", () => {
      Number.isFinite(t3.duration) && r11.off(R$1.Events.LEVELS_UPDATED, u2);
    }));
  }), r11.on(R$1.Events.ERROR, (y2, d2) => {
    var M2, E2;
    let p2 = ur(d2, e);
    if (p2.muxCode === C$1.NETWORK_NOT_READY) {
      let g2 = (M2 = L.get(t3)) != null ? M2 : {}, b2 = (E2 = g2.retryCount) != null ? E2 : 0;
      if (b2 < 6) {
        let m2 = b2 === 0 ? 5e3 : 6e4, v2 = new T$1(`Retrying in ${m2 / 1e3} seconds...`, p2.code, p2.fatal);
        Object.assign(v2, p2), I$2(t3, v2);
        let N2 = setTimeout(() => {
          g2.retryCount = b2 + 1, d2.details === "manifestLoadError" && d2.url && r11.loadSource(d2.url);
        }, m2);
        t3.addEventListener("teardown", () => clearTimeout(N2), { once: true });
        return;
      } else {
        g2.retryCount = 0;
        let m2 = new T$1('Try again later or <a href="#" onclick="window.location.reload(); return false;" style="color: #4a90e2;">click here to retry</a>', p2.code, p2.fatal);
        Object.assign(m2, p2), I$2(t3, m2);
        return;
      }
    }
    I$2(t3, p2);
  }), r11.on(R$1.Events.MANIFEST_LOADED, () => {
    let y2 = L.get(t3);
    y2 && y2.error && (y2.error = null, y2.retryCount = 0, t3.dispatchEvent(new Event("emptied")), t3.dispatchEvent(new Event("loadstart")));
  }), t3.addEventListener("error", fe$1), P$3(t3, "waiting", a), we(e, r11), Ae$1(t3, r11), r11.attachMedia(t3)) : console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.");
};
function ct$1(e) {
  var n2;
  let t3 = e.target, r11 = (n2 = L.get(t3)) == null ? void 0 : n2.startTime;
  if (r11 && Me$1(t3.seekable, t3.duration, r11)) {
    let o2 = t3.preload === "auto";
    o2 && (t3.preload = "none"), t3.currentTime = r11, o2 && (t3.preload = "auto");
  }
}
async function ut$1(e) {
  if (!e.isTrusted) return;
  e.stopImmediatePropagation();
  let t3 = e.target;
  if (!(t3 != null && t3.error)) return;
  let { message: r11, code: n2 } = t3.error, o2 = new T$1(r11, n2);
  if (t3.src && n2 === T$1.MEDIA_ERR_SRC_NOT_SUPPORTED && t3.readyState === HTMLMediaElement.HAVE_NOTHING) {
    setTimeout(() => {
      var a;
      let s3 = (a = Gt$1(t3)) != null ? a : t3.error;
      (s3 == null ? void 0 : s3.code) === T$1.MEDIA_ERR_SRC_NOT_SUPPORTED && I$2(t3, o2);
    }, 500);
    return;
  }
  if (t3.src && (n2 !== T$1.MEDIA_ERR_DECODE || n2 !== void 0)) try {
    let { status: s3 } = await fetch(t3.src);
    o2.data = { response: { code: s3 } };
  } catch {
  }
  I$2(t3, o2);
}
function I$2(e, t3) {
  var r11;
  t3.fatal && (((r11 = L.get(e)) != null ? r11 : {}).error = t3, e.dispatchEvent(new CustomEvent("error", { detail: t3 })));
}
function fe$1(e) {
  var n2, o2;
  if (!(e instanceof CustomEvent) || !(e.detail instanceof T$1)) return;
  let t3 = e.target, r11 = e.detail;
  !r11 || !r11.fatal || (((n2 = L.get(t3)) != null ? n2 : {}).error = r11, (o2 = t3.mux) == null || o2.emit("error", { player_error_code: r11.code, player_error_message: r11.message, player_error_context: r11.context }));
}
var ur = (e, t3) => {
  var l2, u2, f2;
  !e.fatal ? t3.debug && console.warn("getErrorFromHlsErrorData() (non-fatal)", e) : console.error("getErrorFromHlsErrorData()", e);
  let n2 = { [R$1.ErrorTypes.NETWORK_ERROR]: T$1.MEDIA_ERR_NETWORK, [R$1.ErrorTypes.MEDIA_ERROR]: T$1.MEDIA_ERR_DECODE, [R$1.ErrorTypes.KEY_SYSTEM_ERROR]: T$1.MEDIA_ERR_ENCRYPTED }, o2 = (c2) => [R$1.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED, R$1.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED].includes(c2.details) ? T$1.MEDIA_ERR_NETWORK : n2[c2.type], s3 = (c2) => {
    if (c2.type === R$1.ErrorTypes.KEY_SYSTEM_ERROR) return k$2.DRM;
    if (c2.type === R$1.ErrorTypes.NETWORK_ERROR) return k$2.VIDEO;
  }, a, i2 = o2(e);
  if (i2 === T$1.MEDIA_ERR_NETWORK && e.response) {
    let c2 = (l2 = s3(e)) != null ? l2 : k$2.VIDEO;
    a = (u2 = F(e.response, c2, t3, e.fatal)) != null ? u2 : new T$1("", i2, e.fatal);
  } else if (i2 === T$1.MEDIA_ERR_ENCRYPTED) if (e.details === R$1.ErrorDetails.KEY_SYSTEM_NO_CONFIGURED_LICENSE) {
    let c2 = x$2("Attempting to play DRM-protected content without providing a DRM token.");
    a = new T$1(c2, T$1.MEDIA_ERR_ENCRYPTED, e.fatal), a.errorCategory = k$2.DRM, a.muxCode = C$1.ENCRYPTED_MISSING_TOKEN;
  } else if (e.details === R$1.ErrorDetails.KEY_SYSTEM_NO_ACCESS) {
    let c2 = x$2("Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.");
    a = new T$1(c2, T$1.MEDIA_ERR_ENCRYPTED, e.fatal), a.errorCategory = k$2.DRM, a.muxCode = C$1.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM;
  } else if (e.details === R$1.ErrorDetails.KEY_SYSTEM_NO_SESSION) {
    let c2 = x$2("Failed to generate a DRM license request. This may be an issue with the player or your protected content.");
    a = new T$1(c2, T$1.MEDIA_ERR_ENCRYPTED, true), a.errorCategory = k$2.DRM, a.muxCode = C$1.ENCRYPTED_GENERATE_REQUEST_FAILED;
  } else if (e.details === R$1.ErrorDetails.KEY_SYSTEM_SESSION_UPDATE_FAILED) {
    let c2 = x$2("Failed to update DRM license. This may be an issue with the player or your protected content.");
    a = new T$1(c2, T$1.MEDIA_ERR_ENCRYPTED, e.fatal), a.errorCategory = k$2.DRM, a.muxCode = C$1.ENCRYPTED_UPDATE_LICENSE_FAILED;
  } else if (e.details === R$1.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED) {
    let c2 = x$2("Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate.");
    a = new T$1(c2, T$1.MEDIA_ERR_ENCRYPTED, e.fatal), a.errorCategory = k$2.DRM, a.muxCode = C$1.ENCRYPTED_UPDATE_SERVER_CERT_FAILED;
  } else if (e.details === R$1.ErrorDetails.KEY_SYSTEM_STATUS_INTERNAL_ERROR) {
    let c2 = x$2("The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser.");
    a = new T$1(c2, T$1.MEDIA_ERR_ENCRYPTED, e.fatal), a.errorCategory = k$2.DRM, a.muxCode = C$1.ENCRYPTED_CDM_ERROR;
  } else if (e.details === R$1.ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED) {
    let c2 = x$2("DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen.");
    a = new T$1(c2, T$1.MEDIA_ERR_ENCRYPTED, false), a.errorCategory = k$2.DRM, a.muxCode = C$1.ENCRYPTED_OUTPUT_RESTRICTED;
  } else a = new T$1(e.error.message, T$1.MEDIA_ERR_ENCRYPTED, e.fatal), a.errorCategory = k$2.DRM, a.muxCode = C$1.ENCRYPTED_ERROR;
  else a = new T$1("", i2, e.fatal);
  return a.context || (a.context = `${e.url ? `url: ${e.url}
` : ""}${e.response && (e.response.code || e.response.text) ? `response: ${e.response.code}, ${e.response.text}
` : ""}${e.reason ? `failure reason: ${e.reason}
` : ""}${e.level ? `level: ${e.level}
` : ""}${e.parent ? `parent stream controller: ${e.parent}
` : ""}${e.buffer ? `buffer length: ${e.buffer}
` : ""}${e.error ? `error: ${e.error}
` : ""}${e.event ? `event: ${e.event}
` : ""}${e.err ? `error message: ${(f2 = e.err) == null ? void 0 : f2.message}
` : ""}`), a.data = e, a;
};
var D$1 = (n2) => {
  throw TypeError(n2);
};
var P$2 = (n2, a, e) => a.has(n2) || D$1("Cannot " + e);
var r$2 = (n2, a, e) => (P$2(n2, a, "read from private field"), e ? e.call(n2) : a.get(n2)), o$2 = (n2, a, e) => a.has(n2) ? D$1("Cannot add the same private member more than once") : a instanceof WeakSet ? a.add(n2) : a.set(n2, e), E$3 = (n2, a, e, i2) => (P$2(n2, a, "write to private field"), a.set(n2, e), e), b$2 = (n2, a, e) => (P$2(n2, a, "access private method"), e);
var Y$1 = () => {
  try {
    return "0.31.0";
  } catch {
  }
  return "UNKNOWN";
}, U$1 = Y$1(), k$1 = () => U$1;
var v = `
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" part="logo" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 1600 500"><g fill="#fff"><path d="M994.287 93.486c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m0-93.486c-34.509 0-62.484 27.976-62.484 62.486v187.511c0 68.943-56.09 125.033-125.032 125.033s-125.03-56.09-125.03-125.033V62.486C681.741 27.976 653.765 0 619.256 0s-62.484 27.976-62.484 62.486v187.511C556.772 387.85 668.921 500 806.771 500c137.851 0 250.001-112.15 250.001-250.003V62.486c0-34.51-27.976-62.486-62.485-62.486M1537.51 468.511c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m-275.883-218.509-143.33 143.329c-24.402 24.402-24.402 63.966 0 88.368 24.402 24.402 63.967 24.402 88.369 0l143.33-143.329 143.328 143.329c24.402 24.4 63.967 24.402 88.369 0 24.403-24.402 24.403-63.966.001-88.368l-143.33-143.329.001-.004 143.329-143.329c24.402-24.402 24.402-63.965 0-88.367s-63.967-24.402-88.369 0L1349.996 161.63 1206.667 18.302c-24.402-24.401-63.967-24.402-88.369 0s-24.402 63.965 0 88.367l143.329 143.329v.004ZM437.511 468.521c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31M461.426 4.759C438.078-4.913 411.2.432 393.33 18.303L249.999 161.632 106.669 18.303C88.798.432 61.922-4.913 38.573 4.759 15.224 14.43-.001 37.214-.001 62.488v375.026c0 34.51 27.977 62.486 62.487 62.486 34.51 0 62.486-27.976 62.486-62.486V213.341l80.843 80.844c24.404 24.402 63.965 24.402 88.369 0l80.843-80.844v224.173c0 34.51 27.976 62.486 62.486 62.486s62.486-27.976 62.486-62.486V62.488c0-25.274-15.224-48.058-38.573-57.729" style="fill-rule:nonzero"/></g></svg>`;
var t$1 = { BEACON_COLLECTION_DOMAIN: "beacon-collection-domain", CUSTOM_DOMAIN: "custom-domain", DEBUG: "debug", DISABLE_TRACKING: "disable-tracking", DISABLE_COOKIES: "disable-cookies", DISABLE_PSEUDO_ENDED: "disable-pseudo-ended", DRM_TOKEN: "drm-token", PLAYBACK_TOKEN: "playback-token", ENV_KEY: "env-key", MAX_RESOLUTION: "max-resolution", MIN_RESOLUTION: "min-resolution", MAX_AUTO_RESOLUTION: "max-auto-resolution", RENDITION_ORDER: "rendition-order", PROGRAM_START_TIME: "program-start-time", PROGRAM_END_TIME: "program-end-time", ASSET_START_TIME: "asset-start-time", ASSET_END_TIME: "asset-end-time", METADATA_URL: "metadata-url", PLAYBACK_ID: "playback-id", PLAYER_SOFTWARE_NAME: "player-software-name", PLAYER_SOFTWARE_VERSION: "player-software-version", PLAYER_INIT_TIME: "player-init-time", PREFER_CMCD: "prefer-cmcd", PREFER_PLAYBACK: "prefer-playback", START_TIME: "start-time", STREAM_TYPE: "stream-type", TARGET_LIVE_WINDOW: "target-live-window", LIVE_EDGE_OFFSET: "live-edge-offset", TYPE: "type", LOGO: "logo", CAP_RENDITION_TO_PLAYER_SIZE: "cap-rendition-to-player-size", INITIAL_BANDWIDTH_ESTIMATE_KBPS: "initial-bandwidth-estimate-kbps", INITIAL_ESTIMATE_SEGMENTS: "initial-estimate-segments", MIN_PRELOAD_SEGMENTS: "min-preload-segments" }, de$2 = Object.values(t$1), B$2 = k$1(), K$1 = "mux-video", T, _$1, m$2, I$1, p$2, S2, O$1, M$2, c$1, R, u$2, A, N$1, g$2, G$1 = class G extends CustomVideoElement {
  constructor() {
    super();
    o$2(this, u$2);
    o$2(this, T);
    o$2(this, _$1);
    o$2(this, m$2, {});
    o$2(this, I$1, {});
    o$2(this, p$2);
    o$2(this, S2);
    o$2(this, O$1);
    o$2(this, M$2);
    o$2(this, c$1, "");
    o$2(this, R, (e) => {
      var l2;
      let i2 = Pn(this.nativeEl), s3 = (l2 = this.metadata) != null ? l2 : {};
      this.metadata = { ...i2, ...s3 }, (i2 == null ? void 0 : i2["com.mux.video.branding"]) === "mux-free-plan" && (E$3(this, c$1, "default"), this.updateLogo());
    });
    o$2(this, N$1);
    E$3(this, _$1, kn());
  }
  static get NAME() {
    return K$1;
  }
  static get VERSION() {
    return B$2;
  }
  static get observedAttributes() {
    var e;
    return [...de$2, ...(e = CustomVideoElement.observedAttributes) != null ? e : []];
  }
  static getLogoHTML(e) {
    return !e || e === "false" ? "" : e === "default" ? v : `<img part="logo" src="${e}" />`;
  }
  static getTemplateHTML(e = {}) {
    var i2;
    return `
      ${CustomVideoElement.getTemplateHTML(e)}
      <style>
        :host {
          position: relative;
        }
        slot[name="logo"] {
          display: flex;
          justify-content: end;
          position: absolute;
          top: 1rem;
          right: 1rem;
          opacity: 0;
          transition: opacity 0.25s ease-in-out;
          z-index: 1;
        }
        slot[name="logo"]:has([part="logo"]) {
          opacity: 1;
        }
        slot[name="logo"] [part="logo"] {
          width: 5rem;
          pointer-events: none;
          user-select: none;
        }
      </style>
      <slot name="logo">
        ${this.getLogoHTML((i2 = e[t$1.LOGO]) != null ? i2 : "")}
      </slot>
    `;
  }
  get preferCmcd() {
    var e;
    return (e = this.getAttribute(t$1.PREFER_CMCD)) != null ? e : void 0;
  }
  set preferCmcd(e) {
    e !== this.preferCmcd && (e ? fr.includes(e) ? this.setAttribute(t$1.PREFER_CMCD, e) : console.warn(`Invalid value for preferCmcd. Must be one of ${fr.join()}`) : this.removeAttribute(t$1.PREFER_CMCD));
  }
  get playerInitTime() {
    return this.hasAttribute(t$1.PLAYER_INIT_TIME) ? +this.getAttribute(t$1.PLAYER_INIT_TIME) : r$2(this, _$1);
  }
  set playerInitTime(e) {
    e != this.playerInitTime && (e == null ? this.removeAttribute(t$1.PLAYER_INIT_TIME) : this.setAttribute(t$1.PLAYER_INIT_TIME, `${+e}`));
  }
  get playerSoftwareName() {
    var e;
    return (e = r$2(this, O$1)) != null ? e : K$1;
  }
  set playerSoftwareName(e) {
    E$3(this, O$1, e);
  }
  get playerSoftwareVersion() {
    var e;
    return (e = r$2(this, S2)) != null ? e : B$2;
  }
  set playerSoftwareVersion(e) {
    E$3(this, S2, e);
  }
  get _hls() {
    var e;
    return (e = r$2(this, u$2, A)) == null ? void 0 : e.engine;
  }
  get mux() {
    var e;
    return (e = this.nativeEl) == null ? void 0 : e.mux;
  }
  get error() {
    var e;
    return (e = Gt$1(this.nativeEl)) != null ? e : null;
  }
  get errorTranslator() {
    return r$2(this, M$2);
  }
  set errorTranslator(e) {
    E$3(this, M$2, e);
  }
  get src() {
    return this.getAttribute("src");
  }
  set src(e) {
    e !== this.src && (e == null ? this.removeAttribute("src") : this.setAttribute("src", e));
  }
  get type() {
    var e;
    return (e = this.getAttribute(t$1.TYPE)) != null ? e : void 0;
  }
  set type(e) {
    e !== this.type && (e ? this.setAttribute(t$1.TYPE, e) : this.removeAttribute(t$1.TYPE));
  }
  get preload() {
    let e = this.getAttribute("preload");
    return e === "" ? "auto" : ["none", "metadata", "auto"].includes(e) ? e : super.preload;
  }
  set preload(e) {
    e != this.getAttribute("preload") && (["", "none", "metadata", "auto"].includes(e) ? this.setAttribute("preload", e) : this.removeAttribute("preload"));
  }
  get debug() {
    return this.getAttribute(t$1.DEBUG) != null;
  }
  set debug(e) {
    e !== this.debug && (e ? this.setAttribute(t$1.DEBUG, "") : this.removeAttribute(t$1.DEBUG));
  }
  get disableTracking() {
    return this.hasAttribute(t$1.DISABLE_TRACKING);
  }
  set disableTracking(e) {
    e !== this.disableTracking && this.toggleAttribute(t$1.DISABLE_TRACKING, !!e);
  }
  get disableCookies() {
    return this.hasAttribute(t$1.DISABLE_COOKIES);
  }
  set disableCookies(e) {
    e !== this.disableCookies && (e ? this.setAttribute(t$1.DISABLE_COOKIES, "") : this.removeAttribute(t$1.DISABLE_COOKIES));
  }
  get disablePseudoEnded() {
    return this.hasAttribute(t$1.DISABLE_PSEUDO_ENDED);
  }
  set disablePseudoEnded(e) {
    e !== this.disablePseudoEnded && (e ? this.setAttribute(t$1.DISABLE_PSEUDO_ENDED, "") : this.removeAttribute(t$1.DISABLE_PSEUDO_ENDED));
  }
  get startTime() {
    let e = this.getAttribute(t$1.START_TIME);
    if (e == null) return;
    let i2 = +e;
    return Number.isNaN(i2) ? void 0 : i2;
  }
  set startTime(e) {
    e !== this.startTime && (e == null ? this.removeAttribute(t$1.START_TIME) : this.setAttribute(t$1.START_TIME, `${e}`));
  }
  get initialBandwidthEstimateKbps() {
    let e = this.getAttribute(t$1.INITIAL_BANDWIDTH_ESTIMATE_KBPS);
    if (e == null) return;
    let i2 = +e;
    return Number.isNaN(i2) ? void 0 : i2;
  }
  set initialBandwidthEstimateKbps(e) {
    e !== this.initialBandwidthEstimateKbps && (e == null ? this.removeAttribute(t$1.INITIAL_BANDWIDTH_ESTIMATE_KBPS) : this.setAttribute(t$1.INITIAL_BANDWIDTH_ESTIMATE_KBPS, `${e}`));
  }
  get initialEstimateSegments() {
    let e = this.getAttribute(t$1.INITIAL_ESTIMATE_SEGMENTS);
    if (e == null) return;
    let i2 = +e;
    return Number.isNaN(i2) ? void 0 : i2;
  }
  set initialEstimateSegments(e) {
    e !== this.initialEstimateSegments && (e == null ? this.removeAttribute(t$1.INITIAL_ESTIMATE_SEGMENTS) : this.setAttribute(t$1.INITIAL_ESTIMATE_SEGMENTS, `${e}`));
  }
  get minPreloadSegments() {
    let e = this.getAttribute(t$1.MIN_PRELOAD_SEGMENTS);
    if (e == null) return;
    let i2 = +e;
    return Number.isNaN(i2) ? void 0 : i2;
  }
  set minPreloadSegments(e) {
    e !== this.minPreloadSegments && (e == null ? this.removeAttribute(t$1.MIN_PRELOAD_SEGMENTS) : this.setAttribute(t$1.MIN_PRELOAD_SEGMENTS, `${e}`));
  }
  get playbackId() {
    var e;
    return this.hasAttribute(t$1.PLAYBACK_ID) ? this.getAttribute(t$1.PLAYBACK_ID) : (e = tt(this.src)) != null ? e : void 0;
  }
  set playbackId(e) {
    e !== this.playbackId && (e ? this.setAttribute(t$1.PLAYBACK_ID, e) : this.removeAttribute(t$1.PLAYBACK_ID));
  }
  get maxResolution() {
    var e;
    return (e = this.getAttribute(t$1.MAX_RESOLUTION)) != null ? e : void 0;
  }
  set maxResolution(e) {
    e !== this.maxResolution && (e ? this.setAttribute(t$1.MAX_RESOLUTION, e) : this.removeAttribute(t$1.MAX_RESOLUTION));
  }
  get minResolution() {
    var e;
    return (e = this.getAttribute(t$1.MIN_RESOLUTION)) != null ? e : void 0;
  }
  set minResolution(e) {
    e !== this.minResolution && (e ? this.setAttribute(t$1.MIN_RESOLUTION, e) : this.removeAttribute(t$1.MIN_RESOLUTION));
  }
  get maxAutoResolution() {
    var e;
    return (e = this.getAttribute(t$1.MAX_AUTO_RESOLUTION)) != null ? e : void 0;
  }
  set maxAutoResolution(e) {
    e == null ? this.removeAttribute(t$1.MAX_AUTO_RESOLUTION) : this.setAttribute(t$1.MAX_AUTO_RESOLUTION, e);
  }
  get renditionOrder() {
    var e;
    return (e = this.getAttribute(t$1.RENDITION_ORDER)) != null ? e : void 0;
  }
  set renditionOrder(e) {
    e !== this.renditionOrder && (e ? this.setAttribute(t$1.RENDITION_ORDER, e) : this.removeAttribute(t$1.RENDITION_ORDER));
  }
  get programStartTime() {
    let e = this.getAttribute(t$1.PROGRAM_START_TIME);
    if (e == null) return;
    let i2 = +e;
    return Number.isNaN(i2) ? void 0 : i2;
  }
  set programStartTime(e) {
    e == null ? this.removeAttribute(t$1.PROGRAM_START_TIME) : this.setAttribute(t$1.PROGRAM_START_TIME, `${e}`);
  }
  get programEndTime() {
    let e = this.getAttribute(t$1.PROGRAM_END_TIME);
    if (e == null) return;
    let i2 = +e;
    return Number.isNaN(i2) ? void 0 : i2;
  }
  set programEndTime(e) {
    e == null ? this.removeAttribute(t$1.PROGRAM_END_TIME) : this.setAttribute(t$1.PROGRAM_END_TIME, `${e}`);
  }
  get assetStartTime() {
    let e = this.getAttribute(t$1.ASSET_START_TIME);
    if (e == null) return;
    let i2 = +e;
    return Number.isNaN(i2) ? void 0 : i2;
  }
  set assetStartTime(e) {
    e == null ? this.removeAttribute(t$1.ASSET_START_TIME) : this.setAttribute(t$1.ASSET_START_TIME, `${e}`);
  }
  get assetEndTime() {
    let e = this.getAttribute(t$1.ASSET_END_TIME);
    if (e == null) return;
    let i2 = +e;
    return Number.isNaN(i2) ? void 0 : i2;
  }
  set assetEndTime(e) {
    e == null ? this.removeAttribute(t$1.ASSET_END_TIME) : this.setAttribute(t$1.ASSET_END_TIME, `${e}`);
  }
  get customDomain() {
    var e;
    return (e = this.getAttribute(t$1.CUSTOM_DOMAIN)) != null ? e : void 0;
  }
  set customDomain(e) {
    e !== this.customDomain && (e ? this.setAttribute(t$1.CUSTOM_DOMAIN, e) : this.removeAttribute(t$1.CUSTOM_DOMAIN));
  }
  get capRenditionToPlayerSize() {
    var e;
    return ((e = this._hlsConfig) == null ? void 0 : e.capLevelToPlayerSize) != null ? this._hlsConfig.capLevelToPlayerSize : r$2(this, N$1);
  }
  set capRenditionToPlayerSize(e) {
    E$3(this, N$1, e);
  }
  get drmToken() {
    var e;
    return (e = this.getAttribute(t$1.DRM_TOKEN)) != null ? e : void 0;
  }
  set drmToken(e) {
    e !== this.drmToken && (e ? this.setAttribute(t$1.DRM_TOKEN, e) : this.removeAttribute(t$1.DRM_TOKEN));
  }
  get playbackToken() {
    var e, i2, s3, l2;
    if (this.hasAttribute(t$1.PLAYBACK_TOKEN)) return (e = this.getAttribute(t$1.PLAYBACK_TOKEN)) != null ? e : void 0;
    if (this.hasAttribute(t$1.PLAYBACK_ID)) {
      let [, f2] = J$1((i2 = this.playbackId) != null ? i2 : "");
      return (s3 = new URLSearchParams(f2).get("token")) != null ? s3 : void 0;
    }
    if (this.src) return (l2 = new URLSearchParams(this.src).get("token")) != null ? l2 : void 0;
  }
  set playbackToken(e) {
    e !== this.playbackToken && (e ? this.setAttribute(t$1.PLAYBACK_TOKEN, e) : this.removeAttribute(t$1.PLAYBACK_TOKEN));
  }
  get tokens() {
    let e = this.getAttribute(t$1.PLAYBACK_TOKEN), i2 = this.getAttribute(t$1.DRM_TOKEN);
    return { ...r$2(this, I$1), ...e != null ? { playback: e } : {}, ...i2 != null ? { drm: i2 } : {} };
  }
  set tokens(e) {
    E$3(this, I$1, e != null ? e : {});
  }
  get ended() {
    return Xt$1(this.nativeEl, this._hls);
  }
  get envKey() {
    var e;
    return (e = this.getAttribute(t$1.ENV_KEY)) != null ? e : void 0;
  }
  set envKey(e) {
    e !== this.envKey && (e ? this.setAttribute(t$1.ENV_KEY, e) : this.removeAttribute(t$1.ENV_KEY));
  }
  get beaconCollectionDomain() {
    var e;
    return (e = this.getAttribute(t$1.BEACON_COLLECTION_DOMAIN)) != null ? e : void 0;
  }
  set beaconCollectionDomain(e) {
    e !== this.beaconCollectionDomain && (e ? this.setAttribute(t$1.BEACON_COLLECTION_DOMAIN, e) : this.removeAttribute(t$1.BEACON_COLLECTION_DOMAIN));
  }
  get streamType() {
    var e;
    return (e = this.getAttribute(t$1.STREAM_TYPE)) != null ? e : Be$1(this.nativeEl);
  }
  set streamType(e) {
    e !== this.streamType && (e ? this.setAttribute(t$1.STREAM_TYPE, e) : this.removeAttribute(t$1.STREAM_TYPE));
  }
  get targetLiveWindow() {
    return this.hasAttribute(t$1.TARGET_LIVE_WINDOW) ? +this.getAttribute(t$1.TARGET_LIVE_WINDOW) : Ln(this.nativeEl);
  }
  set targetLiveWindow(e) {
    e != this.targetLiveWindow && (e == null ? this.removeAttribute(t$1.TARGET_LIVE_WINDOW) : this.setAttribute(t$1.TARGET_LIVE_WINDOW, `${+e}`));
  }
  get liveEdgeStart() {
    var e, i2;
    if (this.hasAttribute(t$1.LIVE_EDGE_OFFSET)) {
      let { liveEdgeOffset: s3 } = this, l2 = (e = this.nativeEl.seekable.end(0)) != null ? e : 0, f2 = (i2 = this.nativeEl.seekable.start(0)) != null ? i2 : 0;
      return Math.max(f2, l2 - s3);
    }
    return hn(this.nativeEl);
  }
  get liveEdgeOffset() {
    if (this.hasAttribute(t$1.LIVE_EDGE_OFFSET)) return +this.getAttribute(t$1.LIVE_EDGE_OFFSET);
  }
  set liveEdgeOffset(e) {
    e != this.liveEdgeOffset && (e == null ? this.removeAttribute(t$1.LIVE_EDGE_OFFSET) : this.setAttribute(t$1.LIVE_EDGE_OFFSET, `${+e}`));
  }
  get seekable() {
    return rt(this.nativeEl);
  }
  async addCuePoints(e) {
    return Ne$1(this.nativeEl, e);
  }
  get activeCuePoint() {
    return Oe$1(this.nativeEl);
  }
  get cuePoints() {
    return gt$1(this.nativeEl);
  }
  async addChapters(e) {
    return Ke$1(this.nativeEl, e);
  }
  get activeChapter() {
    return We(this.nativeEl);
  }
  get chapters() {
    return Mt$1(this.nativeEl);
  }
  getStartDate() {
    return bt$1(this.nativeEl, this._hls);
  }
  get currentPdt() {
    return Rt$1(this.nativeEl, this._hls);
  }
  get preferPlayback() {
    let e = this.getAttribute(t$1.PREFER_PLAYBACK);
    if (e === te$2.MSE || e === te$2.NATIVE) return e;
  }
  set preferPlayback(e) {
    e !== this.preferPlayback && (e === te$2.MSE || e === te$2.NATIVE ? this.setAttribute(t$1.PREFER_PLAYBACK, e) : this.removeAttribute(t$1.PREFER_PLAYBACK));
  }
  get metadata() {
    return { ...this.getAttributeNames().filter((i2) => i2.startsWith("metadata-") && ![t$1.METADATA_URL].includes(i2)).reduce((i2, s3) => {
      let l2 = this.getAttribute(s3);
      return l2 != null && (i2[s3.replace(/^metadata-/, "").replace(/-/g, "_")] = l2), i2;
    }, {}), ...r$2(this, m$2) };
  }
  set metadata(e) {
    E$3(this, m$2, e != null ? e : {}), this.mux && this.mux.emit("hb", r$2(this, m$2));
  }
  get _hlsConfig() {
    return r$2(this, p$2);
  }
  set _hlsConfig(e) {
    E$3(this, p$2, e);
  }
  get logo() {
    var e;
    return (e = this.getAttribute(t$1.LOGO)) != null ? e : r$2(this, c$1);
  }
  set logo(e) {
    e ? this.setAttribute(t$1.LOGO, e) : this.removeAttribute(t$1.LOGO);
  }
  load() {
    Qt$1(this, this.nativeEl, r$2(this, u$2, A));
  }
  unload() {
    Zt$1(this.nativeEl, r$2(this, u$2, A), this);
  }
  attributeChangedCallback(e, i2, s3) {
    var f2, C2;
    switch (CustomVideoElement.observedAttributes.includes(e) && !["src", "autoplay", "preload"].includes(e) && super.attributeChangedCallback(e, i2, s3), e) {
      case t$1.PLAYER_SOFTWARE_NAME:
        this.playerSoftwareName = s3 != null ? s3 : void 0;
        break;
      case t$1.PLAYER_SOFTWARE_VERSION:
        this.playerSoftwareVersion = s3 != null ? s3 : void 0;
        break;
      case "src": {
        let d2 = !!i2, h2 = !!s3;
        !d2 && h2 ? b$2(this, u$2, g$2).call(this) : d2 && !h2 ? this.unload() : d2 && h2 && (this.unload(), b$2(this, u$2, g$2).call(this));
        break;
      }
      case "autoplay":
        if (s3 === i2) break;
        (f2 = r$2(this, u$2, A)) == null || f2.setAutoplay(this.autoplay);
        break;
      case "preload":
        if (s3 === i2) break;
        (C2 = r$2(this, u$2, A)) == null || C2.setPreload(s3);
        break;
      case t$1.PLAYBACK_ID:
      case t$1.CUSTOM_DOMAIN:
      case t$1.MAX_RESOLUTION:
      case t$1.MIN_RESOLUTION:
      case t$1.RENDITION_ORDER:
      case t$1.PROGRAM_START_TIME:
      case t$1.PROGRAM_END_TIME:
      case t$1.ASSET_START_TIME:
      case t$1.ASSET_END_TIME:
      case t$1.PLAYBACK_TOKEN:
        this.src = Dn(this);
        break;
      case t$1.DEBUG: {
        let d2 = this.debug;
        this.mux && console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."), this._hls && (this._hls.config.debug = d2);
        break;
      }
      case t$1.METADATA_URL:
        s3 && fetch(s3).then((d2) => d2.json()).then((d2) => this.metadata = d2).catch(() => console.error(`Unable to load or parse metadata JSON from metadata-url ${s3}!`));
        break;
      case t$1.STREAM_TYPE:
        (s3 == null || s3 !== i2) && this.dispatchEvent(new CustomEvent("streamtypechange", { composed: true, bubbles: true }));
        break;
      case t$1.TARGET_LIVE_WINDOW:
        (s3 == null || s3 !== i2) && this.dispatchEvent(new CustomEvent("targetlivewindowchange", { composed: true, bubbles: true, detail: this.targetLiveWindow }));
        break;
      case t$1.LOGO:
        (s3 == null || s3 !== i2) && this.updateLogo();
        break;
      case t$1.DISABLE_TRACKING: {
        if (s3 == null || s3 !== i2) {
          let d2 = this.currentTime, h2 = this.paused;
          this.unload(), b$2(this, u$2, g$2).call(this).then(() => {
            this.currentTime = d2, h2 || this.play();
          });
        }
        break;
      }
      case t$1.DISABLE_COOKIES: {
        (s3 == null || s3 !== i2) && this.disableCookies && document.cookie.split(";").forEach((h2) => {
          h2.trim().startsWith("muxData") && (document.cookie = h2.replace(/^ +/, "").replace(/=.*/, "=;expires=" + (/* @__PURE__ */ new Date()).toUTCString() + ";path=/"));
        });
        break;
      }
      case t$1.CAP_RENDITION_TO_PLAYER_SIZE:
        (s3 == null || s3 !== i2) && (this.capRenditionToPlayerSize = s3 != null ? true : void 0);
    }
  }
  updateLogo() {
    if (!this.shadowRoot) return;
    let e = this.shadowRoot.querySelector('slot[name="logo"]');
    if (!e) return;
    let i2 = this.constructor.getLogoHTML(r$2(this, c$1) || this.logo);
    e.innerHTML = i2;
  }
  connectedCallback() {
    var e, i2;
    (e = super.connectedCallback) == null || e.call(this), (i2 = this.nativeEl) == null || i2.addEventListener("muxmetadata", r$2(this, R)), this.nativeEl && this.src && !r$2(this, u$2, A) && b$2(this, u$2, g$2).call(this);
  }
  disconnectedCallback() {
    var e, i2;
    (e = this.nativeEl) == null || e.removeEventListener("muxmetadata", r$2(this, R)), this.unload(), (i2 = super.disconnectedCallback) == null || i2.call(this);
  }
  handleEvent(e) {
    e.target === this.nativeEl && this.dispatchEvent(new CustomEvent(e.type, { composed: true, detail: e.detail }));
  }
};
T = /* @__PURE__ */ new WeakMap(), _$1 = /* @__PURE__ */ new WeakMap(), m$2 = /* @__PURE__ */ new WeakMap(), I$1 = /* @__PURE__ */ new WeakMap(), p$2 = /* @__PURE__ */ new WeakMap(), S2 = /* @__PURE__ */ new WeakMap(), O$1 = /* @__PURE__ */ new WeakMap(), M$2 = /* @__PURE__ */ new WeakMap(), c$1 = /* @__PURE__ */ new WeakMap(), R = /* @__PURE__ */ new WeakMap(), u$2 = /* @__PURE__ */ new WeakSet(), A = function() {
  return _n(this.nativeEl);
}, N$1 = /* @__PURE__ */ new WeakMap(), g$2 = async function() {
  r$2(this, T) || (await E$3(this, T, Promise.resolve()), E$3(this, T, null), this.load());
};
const privateProps = /* @__PURE__ */ new WeakMap();
class InvalidStateError extends Error {
}
class NotSupportedError extends Error {
}
const HLS_RESPONSE_HEADERS = ["application/x-mpegURL", "application/vnd.apple.mpegurl", "audio/mpegurl"];
const IterableWeakSet = globalThis.WeakRef ? class extends Set {
  add(el) {
    super.add(new WeakRef(el));
  }
  forEach(fn) {
    super.forEach((ref) => {
      const value = ref.deref();
      if (value) fn(value);
    });
  }
} : Set;
function onCastApiAvailable(callback) {
  var _a2, _b, _c;
  if (!((_b = (_a2 = globalThis.chrome) == null ? void 0 : _a2.cast) == null ? void 0 : _b.isAvailable)) {
    globalThis.__onGCastApiAvailable = () => {
      customElements.whenDefined("google-cast-button").then(callback);
    };
  } else if (!((_c = globalThis.cast) == null ? void 0 : _c.framework)) {
    customElements.whenDefined("google-cast-button").then(callback);
  } else {
    callback();
  }
}
function requiresCastFramework() {
  return globalThis.chrome;
}
function loadCastFramework() {
  var _a2;
  const sdkUrl = "https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";
  if (((_a2 = globalThis.chrome) == null ? void 0 : _a2.cast) || document.querySelector(`script[src="${sdkUrl}"]`)) return;
  const script = document.createElement("script");
  script.src = sdkUrl;
  document.head.append(script);
}
function castContext() {
  var _a2, _b;
  return (_b = (_a2 = globalThis.cast) == null ? void 0 : _a2.framework) == null ? void 0 : _b.CastContext.getInstance();
}
function currentSession() {
  var _a2;
  return (_a2 = castContext()) == null ? void 0 : _a2.getCurrentSession();
}
function currentMedia() {
  var _a2;
  return (_a2 = currentSession()) == null ? void 0 : _a2.getSessionObj().media[0];
}
function editTracksInfo(request2) {
  return new Promise((resolve, reject) => {
    currentMedia().editTracksInfo(request2, resolve, reject);
  });
}
function getMediaStatus(request2) {
  return new Promise((resolve, reject) => {
    currentMedia().getStatus(request2, resolve, reject);
  });
}
function setCastOptions(options) {
  return castContext().setOptions({
    ...getDefaultCastOptions(),
    ...options
  });
}
function getDefaultCastOptions() {
  return {
    // Set the receiver application ID to your own (created in the
    // Google Cast Developer Console), or optionally
    // use the chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID
    receiverApplicationId: "CC1AD845",
    // Auto join policy can be one of the following three:
    // ORIGIN_SCOPED - Auto connect from same appId and page origin
    // TAB_AND_ORIGIN_SCOPED - Auto connect from same appId, page origin, and tab
    // PAGE_SCOPED - No auto connect
    autoJoinPolicy: "origin_scoped",
    // The following flag enables Cast Connect(requires Chrome 87 or higher)
    // https://developers.googleblog.com/2020/08/introducing-cast-connect-android-tv.html
    androidReceiverCompatible: false,
    language: "en-US",
    resumeSavedSession: true
  };
}
function getFormat(segment) {
  if (!segment) return void 0;
  const regex = /\.([a-zA-Z0-9]+)(?:\?.*)?$/;
  const match = segment.match(regex);
  return match ? match[1] : null;
}
function parseAudioRenditionUrl(playlistContent) {
  for (const line of playlistContent.split("\n")) {
    const trimmed = line.trim();
    if (trimmed.startsWith("#EXT-X-MEDIA") && /TYPE=AUDIO/i.test(trimmed)) {
      const match = trimmed.match(/URI="([^"]+)"/i);
      if (match) return match[1];
    }
  }
  return void 0;
}
function parsePlaylistUrls(playlistContent) {
  const lines = playlistContent.split("\n");
  const urls = [];
  for (let i2 = 0; i2 < lines.length; i2++) {
    const line = lines[i2].trim();
    if (line.startsWith("#EXT-X-STREAM-INF")) {
      const nextLine = lines[i2 + 1] ? lines[i2 + 1].trim() : "";
      if (nextLine && !nextLine.startsWith("#")) {
        urls.push(nextLine);
      }
    }
  }
  return urls;
}
function parseSegment(playlistContent) {
  const lines = playlistContent.split("\n");
  const url = lines.find((line) => !line.trim().startsWith("#") && line.trim() !== "");
  return url == null ? void 0 : url.trim();
}
async function isHls(url) {
  if (!url) return false;
  if (/\.m3u8?(\?.*)?$/i.test(url)) return true;
  if (url.startsWith("blob:")) return false;
  try {
    const response = await fetch(url, { method: "HEAD" });
    const contentType = response.headers.get("Content-Type");
    return HLS_RESPONSE_HEADERS.some((header) => contentType === header);
  } catch (err) {
    console.error("Error while trying to get the Content-Type of the manifest", err);
    return false;
  }
}
async function getPlaylistSegmentFormat(url) {
  if (!url || url.startsWith("blob:")) return { videoFormat: void 0, audioFormat: void 0 };
  try {
    const mainManifestContent = await (await fetch(url)).text();
    let videoChunksContent = mainManifestContent;
    const playlists = parsePlaylistUrls(mainManifestContent);
    if (playlists.length > 0) {
      const chosenPlaylistUrl = new URL(playlists[0], url).toString();
      videoChunksContent = await (await fetch(chosenPlaylistUrl)).text();
    }
    const videoSegment = parseSegment(videoChunksContent);
    const videoFormat = getFormat(videoSegment);
    const audioRenditionPath = parseAudioRenditionUrl(mainManifestContent);
    let audioFormat = videoFormat;
    if (audioRenditionPath) {
      try {
        const audioPlaylistUrl = new URL(audioRenditionPath, url).toString();
        const audioChunksContent = await (await fetch(audioPlaylistUrl)).text();
        const audioSegment = parseSegment(audioChunksContent);
        audioFormat = getFormat(audioSegment) ?? videoFormat;
      } catch (err) {
        console.error("Error while trying to parse the audio rendition playlist", err);
      }
    }
    return { videoFormat, audioFormat };
  } catch (err) {
    console.error("Error while trying to parse the manifest playlist", err);
    return { videoFormat: void 0, audioFormat: void 0 };
  }
}
const remoteInstances = new IterableWeakSet();
const castElementRef = /* @__PURE__ */ new WeakSet();
let cf;
onCastApiAvailable(() => {
  var _a2, _b, _c, _d;
  if (!((_b = (_a2 = globalThis.chrome) == null ? void 0 : _a2.cast) == null ? void 0 : _b.isAvailable)) {
    console.debug("chrome.cast.isAvailable", (_d = (_c = globalThis.chrome) == null ? void 0 : _c.cast) == null ? void 0 : _d.isAvailable);
    return;
  }
  if (!cf) {
    cf = cast.framework;
    castContext().addEventListener(cf.CastContextEventType.CAST_STATE_CHANGED, (e) => {
      remoteInstances.forEach((r11) => {
        var _a3, _b2;
        return (_b2 = (_a3 = privateProps.get(r11)).onCastStateChanged) == null ? void 0 : _b2.call(_a3, e);
      });
    });
    castContext().addEventListener(cf.CastContextEventType.SESSION_STATE_CHANGED, (e) => {
      remoteInstances.forEach((r11) => {
        var _a3, _b2;
        return (_b2 = (_a3 = privateProps.get(r11)).onSessionStateChanged) == null ? void 0 : _b2.call(_a3, e);
      });
    });
    remoteInstances.forEach((r11) => {
      var _a3, _b2;
      return (_b2 = (_a3 = privateProps.get(r11)).init) == null ? void 0 : _b2.call(_a3);
    });
  }
});
let remotePlaybackCallbackIdCount = 0;
class RemotePlayback extends EventTarget {
  constructor(media) {
    super();
    __privateAdd(this, _RemotePlayback_instances);
    __privateAdd(this, _media);
    __privateAdd(this, _isInit2);
    __privateAdd(this, _remotePlayer);
    __privateAdd(this, _remoteListeners);
    __privateAdd(this, _state, "disconnected");
    __privateAdd(this, _available, false);
    __privateAdd(this, _callbacks, /* @__PURE__ */ new Set());
    __privateAdd(this, _callbackIds, /* @__PURE__ */ new WeakMap());
    __privateAdd(this, _onTextTrackChange, () => __privateMethod(this, _RemotePlayback_instances, updateRemoteTextTrack_fn).call(this));
    __privateSet(this, _media, media);
    remoteInstances.add(this);
    privateProps.set(this, {
      init: () => __privateMethod(this, _RemotePlayback_instances, init_fn2).call(this),
      onCastStateChanged: () => __privateMethod(this, _RemotePlayback_instances, onCastStateChanged_fn).call(this),
      onSessionStateChanged: () => __privateMethod(this, _RemotePlayback_instances, onSessionStateChanged_fn).call(this),
      getCastPlayer: () => __privateGet(this, _RemotePlayback_instances, castPlayer_get)
    });
    __privateMethod(this, _RemotePlayback_instances, init_fn2).call(this);
  }
  destroy() {
    var _a2, _b, _c;
    (_b = (_a2 = __privateGet(this, _media)) == null ? void 0 : _a2.textTracks) == null ? void 0 : _b.removeEventListener("change", __privateGet(this, _onTextTrackChange));
    if (__privateGet(this, _remoteListeners) && ((_c = __privateGet(this, _remotePlayer)) == null ? void 0 : _c.controller)) {
      Object.entries(__privateGet(this, _remoteListeners)).forEach(([event, listener]) => {
        __privateGet(this, _remotePlayer).controller.removeEventListener(event, listener);
      });
    }
    if (__privateGet(this, _media)) castElementRef.delete(__privateGet(this, _media));
    __privateSet(this, _isInit2, false);
  }
  /**
   * https://developer.mozilla.org/en-US/docs/Web/API/RemotePlayback/state
   * @return {'disconnected'|'connecting'|'connected'}
   */
  get state() {
    return __privateGet(this, _state);
  }
  async watchAvailability(callback) {
    if (__privateGet(this, _media).disableRemotePlayback) {
      throw new InvalidStateError("disableRemotePlayback attribute is present.");
    }
    __privateGet(this, _callbackIds).set(callback, ++remotePlaybackCallbackIdCount);
    __privateGet(this, _callbacks).add(callback);
    queueMicrotask(() => callback(__privateMethod(this, _RemotePlayback_instances, hasDevicesAvailable_fn).call(this)));
    return remotePlaybackCallbackIdCount;
  }
  async cancelWatchAvailability(callback) {
    if (__privateGet(this, _media).disableRemotePlayback) {
      throw new InvalidStateError("disableRemotePlayback attribute is present.");
    }
    if (callback) {
      __privateGet(this, _callbacks).delete(callback);
    } else {
      __privateGet(this, _callbacks).clear();
    }
  }
  async prompt() {
    var _a2, _b, _c, _d;
    if (__privateGet(this, _media).disableRemotePlayback) {
      throw new InvalidStateError("disableRemotePlayback attribute is present.");
    }
    if (!((_b = (_a2 = globalThis.chrome) == null ? void 0 : _a2.cast) == null ? void 0 : _b.isAvailable)) {
      throw new NotSupportedError("The RemotePlayback API is disabled on this platform.");
    }
    const willDisconnect = castElementRef.has(__privateGet(this, _media));
    castElementRef.add(__privateGet(this, _media));
    setCastOptions(__privateGet(this, _media).castOptions);
    Object.entries(__privateGet(this, _remoteListeners)).forEach(([event, listener]) => {
      __privateGet(this, _remotePlayer).controller.addEventListener(event, listener);
    });
    try {
      await castContext().requestSession();
    } catch (err) {
      if (!willDisconnect) {
        castElementRef.delete(__privateGet(this, _media));
      }
      if (err === "cancel") {
        return;
      }
      throw new Error(err);
    }
    (_d = (_c = privateProps.get(__privateGet(this, _media))) == null ? void 0 : _c.loadOnPrompt) == null ? void 0 : _d.call(_c);
  }
}
_media = new WeakMap();
_isInit2 = new WeakMap();
_remotePlayer = new WeakMap();
_remoteListeners = new WeakMap();
_state = new WeakMap();
_available = new WeakMap();
_callbacks = new WeakMap();
_callbackIds = new WeakMap();
_onTextTrackChange = new WeakMap();
_RemotePlayback_instances = new WeakSet();
castPlayer_get = function() {
  if (castElementRef.has(__privateGet(this, _media))) return __privateGet(this, _remotePlayer);
  return void 0;
};
disconnect_fn = function() {
  if (!castElementRef.has(__privateGet(this, _media))) return;
  Object.entries(__privateGet(this, _remoteListeners)).forEach(([event, listener]) => {
    __privateGet(this, _remotePlayer).controller.removeEventListener(event, listener);
  });
  castElementRef.delete(__privateGet(this, _media));
  __privateGet(this, _media).muted = __privateGet(this, _remotePlayer).isMuted;
  __privateGet(this, _media).currentTime = __privateGet(this, _remotePlayer).savedPlayerState.currentTime;
  if (__privateGet(this, _remotePlayer).savedPlayerState.isPaused === false) {
    __privateGet(this, _media).play();
  }
};
hasDevicesAvailable_fn = function() {
  var _a2;
  const castState = (_a2 = castContext()) == null ? void 0 : _a2.getCastState();
  return castState && castState !== "NO_DEVICES_AVAILABLE";
};
onCastStateChanged_fn = function() {
  const castState = castContext().getCastState();
  if (castElementRef.has(__privateGet(this, _media))) {
    if (castState === "CONNECTING") {
      __privateSet(this, _state, "connecting");
      this.dispatchEvent(new Event("connecting"));
    }
  }
  if (!__privateGet(this, _available) && (castState == null ? void 0 : castState.includes("CONNECT"))) {
    __privateSet(this, _available, true);
    for (let callback of __privateGet(this, _callbacks)) callback(true);
  } else if (__privateGet(this, _available) && (!castState || castState === "NO_DEVICES_AVAILABLE")) {
    __privateSet(this, _available, false);
    for (let callback of __privateGet(this, _callbacks)) callback(false);
  }
};
onSessionStateChanged_fn = async function() {
  var _a2;
  const { SESSION_RESUMED } = cf.SessionState;
  if (castContext().getSessionState() === SESSION_RESUMED) {
    if (__privateGet(this, _media).castSrc === ((_a2 = currentMedia()) == null ? void 0 : _a2.media.contentId)) {
      castElementRef.add(__privateGet(this, _media));
      Object.entries(__privateGet(this, _remoteListeners)).forEach(([event, listener]) => {
        __privateGet(this, _remotePlayer).controller.addEventListener(event, listener);
      });
      try {
        await getMediaStatus(new chrome.cast.media.GetStatusRequest());
      } catch (error) {
        console.error(error);
      }
      __privateGet(this, _remoteListeners)[cf.RemotePlayerEventType.IS_PAUSED_CHANGED]();
      __privateGet(this, _remoteListeners)[cf.RemotePlayerEventType.PLAYER_STATE_CHANGED]();
    }
  }
};
init_fn2 = function() {
  if (!cf || __privateGet(this, _isInit2)) return;
  __privateSet(this, _isInit2, true);
  setCastOptions(__privateGet(this, _media).castOptions);
  __privateGet(this, _media).textTracks.addEventListener("change", __privateGet(this, _onTextTrackChange));
  __privateMethod(this, _RemotePlayback_instances, onCastStateChanged_fn).call(this);
  __privateSet(this, _remotePlayer, new cf.RemotePlayer());
  new cf.RemotePlayerController(__privateGet(this, _remotePlayer));
  __privateSet(this, _remoteListeners, {
    [cf.RemotePlayerEventType.IS_CONNECTED_CHANGED]: ({ value }) => {
      if (value === true) {
        __privateSet(this, _state, "connected");
        this.dispatchEvent(new Event("connect"));
      } else {
        __privateMethod(this, _RemotePlayback_instances, disconnect_fn).call(this);
        __privateSet(this, _state, "disconnected");
        this.dispatchEvent(new Event("disconnect"));
      }
    },
    [cf.RemotePlayerEventType.DURATION_CHANGED]: () => {
      __privateGet(this, _media).dispatchEvent(new Event("durationchange"));
    },
    [cf.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]: () => {
      __privateGet(this, _media).dispatchEvent(new Event("volumechange"));
    },
    [cf.RemotePlayerEventType.IS_MUTED_CHANGED]: () => {
      __privateGet(this, _media).dispatchEvent(new Event("volumechange"));
    },
    [cf.RemotePlayerEventType.CURRENT_TIME_CHANGED]: () => {
      var _a2;
      if (!((_a2 = __privateGet(this, _RemotePlayback_instances, castPlayer_get)) == null ? void 0 : _a2.isMediaLoaded)) return;
      __privateGet(this, _media).dispatchEvent(new Event("timeupdate"));
    },
    [cf.RemotePlayerEventType.VIDEO_INFO_CHANGED]: () => {
      __privateGet(this, _media).dispatchEvent(new Event("resize"));
    },
    [cf.RemotePlayerEventType.IS_PAUSED_CHANGED]: () => {
      __privateGet(this, _media).dispatchEvent(new Event(this.paused ? "pause" : "play"));
    },
    [cf.RemotePlayerEventType.PLAYER_STATE_CHANGED]: () => {
      var _a2, _b;
      if (((_a2 = __privateGet(this, _RemotePlayback_instances, castPlayer_get)) == null ? void 0 : _a2.playerState) === chrome.cast.media.PlayerState.PAUSED) {
        return;
      }
      __privateGet(this, _media).dispatchEvent(
        new Event(
          {
            [chrome.cast.media.PlayerState.PLAYING]: "playing",
            [chrome.cast.media.PlayerState.BUFFERING]: "waiting",
            [chrome.cast.media.PlayerState.IDLE]: "emptied"
          }[(_b = __privateGet(this, _RemotePlayback_instances, castPlayer_get)) == null ? void 0 : _b.playerState]
        )
      );
    },
    [cf.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]: async () => {
      var _a2;
      if (!((_a2 = __privateGet(this, _RemotePlayback_instances, castPlayer_get)) == null ? void 0 : _a2.isMediaLoaded)) return;
      await Promise.resolve();
      __privateMethod(this, _RemotePlayback_instances, onRemoteMediaLoaded_fn).call(this);
    }
  });
};
onRemoteMediaLoaded_fn = function() {
  __privateMethod(this, _RemotePlayback_instances, updateRemoteTextTrack_fn).call(this);
};
updateRemoteTextTrack_fn = async function() {
  var _a2, _b, _c;
  if (!__privateGet(this, _RemotePlayback_instances, castPlayer_get)) return;
  const remoteTracks = ((_a2 = __privateGet(this, _remotePlayer).mediaInfo) == null ? void 0 : _a2.tracks) ?? [];
  const remoteSubtitles = remoteTracks.filter(
    ({ type }) => type === chrome.cast.media.TrackType.TEXT
  );
  const localSubtitles = [...__privateGet(this, _media).textTracks].filter(
    ({ kind }) => kind === "subtitles" || kind === "captions"
  );
  const subtitles = remoteSubtitles.map(({ language, name, trackId }) => {
    const { mode } = localSubtitles.find(
      (local) => local.language === language && local.label === name
    ) ?? {};
    if (mode) return { mode, trackId };
    return false;
  }).filter(Boolean);
  const hiddenSubtitles = subtitles.filter(
    ({ mode }) => mode !== "showing"
  );
  const hiddenTrackIds = hiddenSubtitles.map(({ trackId }) => trackId);
  const showingSubtitle = subtitles.find(({ mode }) => mode === "showing");
  const activeTrackIds = ((_c = (_b = currentSession()) == null ? void 0 : _b.getSessionObj().media[0]) == null ? void 0 : _c.activeTrackIds) ?? [];
  let requestTrackIds = activeTrackIds;
  if (activeTrackIds.length) {
    requestTrackIds = requestTrackIds.filter(
      (id) => !hiddenTrackIds.includes(id)
    );
  }
  if (showingSubtitle == null ? void 0 : showingSubtitle.trackId) {
    requestTrackIds = [...requestTrackIds, showingSubtitle.trackId];
  }
  requestTrackIds = [...new Set(requestTrackIds)];
  const arrayEquals = (a, b2) => a.length === b2.length && a.every((a2) => b2.includes(a2));
  if (!arrayEquals(activeTrackIds, requestTrackIds)) {
    try {
      const request2 = new chrome.cast.media.EditTracksInfoRequest(
        requestTrackIds
      );
      await editTracksInfo(request2);
    } catch (error) {
      console.error(error);
    }
  }
};
const CastableMediaMixin = (superclass) => {
  var _a2, _localState, _castOptions, _castCustomData, _remote, _CastableMedia_instances, castPlayer_get2, loadOnPrompt_fn;
  return _a2 = class extends superclass {
    constructor() {
      super(...arguments);
      __privateAdd(this, _CastableMedia_instances);
      __privateAdd(this, _localState, { paused: false });
      __privateAdd(this, _castOptions, getDefaultCastOptions());
      __privateAdd(this, _castCustomData);
      __privateAdd(this, _remote);
    }
    get remote() {
      if (__privateGet(this, _remote)) return __privateGet(this, _remote);
      if (requiresCastFramework()) {
        if (!this.isConnected) return void 0;
        if (!this.disableRemotePlayback) {
          loadCastFramework();
        }
        privateProps.set(this, {
          loadOnPrompt: () => __privateMethod(this, _CastableMedia_instances, loadOnPrompt_fn).call(this)
        });
        return __privateSet(this, _remote, new RemotePlayback(this));
      }
      return super.remote;
    }
    disconnectedCallback() {
      var _a3, _b;
      (_a3 = __privateGet(this, _remote)) == null ? void 0 : _a3.destroy();
      __privateSet(this, _remote, null);
      privateProps.delete(this);
      (_b = super.disconnectedCallback) == null ? void 0 : _b.call(this);
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
      super.attributeChangedCallback(attrName, oldValue, newValue);
      if (attrName === "cast-receiver" && newValue) {
        __privateGet(this, _castOptions).receiverApplicationId = newValue;
        return;
      }
      if (!__privateGet(this, _CastableMedia_instances, castPlayer_get2)) return;
      switch (attrName) {
        case "cast-stream-type":
        case "cast-src":
          this.load();
          break;
      }
    }
    async load() {
      var _a3;
      if (!__privateGet(this, _CastableMedia_instances, castPlayer_get2)) return super.load();
      const mediaInfo = new chrome.cast.media.MediaInfo(this.castSrc, this.castContentType);
      mediaInfo.customData = this.castCustomData;
      const subtitles = [...this.querySelectorAll("track")].filter(
        ({ kind, src }) => src && (kind === "subtitles" || kind === "captions")
      );
      const activeTrackIds = [];
      let textTrackIdCount = 0;
      if (subtitles.length) {
        mediaInfo.tracks = subtitles.map((trackEl) => {
          const trackId = ++textTrackIdCount;
          if (activeTrackIds.length === 0 && trackEl.track.mode === "showing") {
            activeTrackIds.push(trackId);
          }
          const track = new chrome.cast.media.Track(trackId, chrome.cast.media.TrackType.TEXT);
          track.trackContentId = trackEl.src;
          track.trackContentType = "text/vtt";
          track.subtype = trackEl.kind === "captions" ? chrome.cast.media.TextTrackType.CAPTIONS : chrome.cast.media.TextTrackType.SUBTITLES;
          track.name = trackEl.label;
          track.language = trackEl.srclang;
          return track;
        });
      }
      if (this.castStreamType === "live") {
        mediaInfo.streamType = chrome.cast.media.StreamType.LIVE;
      } else {
        mediaInfo.streamType = chrome.cast.media.StreamType.BUFFERED;
      }
      mediaInfo.metadata = new chrome.cast.media.GenericMediaMetadata();
      mediaInfo.metadata.title = this.title;
      mediaInfo.metadata.images = [{ url: this.poster }];
      const hlsDetected = await isHls(this.castSrc);
      if (hlsDetected) {
        if (!mediaInfo.contentType) {
          mediaInfo.contentType = "application/x-mpegURL";
        }
        const { videoFormat, audioFormat } = await getPlaylistSegmentFormat(this.castSrc);
        const isVideoFMP4 = (videoFormat == null ? void 0 : videoFormat.includes("m4s")) || (videoFormat == null ? void 0 : videoFormat.includes("mp4")) || (videoFormat == null ? void 0 : videoFormat.includes("m4a"));
        if (isVideoFMP4) {
          mediaInfo.hlsSegmentFormat = chrome.cast.media.HlsSegmentFormat.FMP4;
          mediaInfo.hlsVideoSegmentFormat = chrome.cast.media.HlsVideoSegmentFormat.FMP4;
        } else if (audioFormat == null ? void 0 : audioFormat.includes("aac")) {
          mediaInfo.hlsSegmentFormat = chrome.cast.media.HlsSegmentFormat.AAC;
          mediaInfo.hlsVideoSegmentFormat = chrome.cast.media.HlsVideoSegmentFormat.MPEG2_TS;
        } else if ((videoFormat == null ? void 0 : videoFormat.includes("ts")) || (audioFormat == null ? void 0 : audioFormat.includes("ts"))) {
          mediaInfo.hlsSegmentFormat = chrome.cast.media.HlsSegmentFormat.TS;
          mediaInfo.hlsVideoSegmentFormat = chrome.cast.media.HlsVideoSegmentFormat.MPEG2_TS;
        }
      }
      const request2 = new chrome.cast.media.LoadRequest(mediaInfo);
      request2.currentTime = super.currentTime ?? 0;
      request2.autoplay = !__privateGet(this, _localState).paused;
      request2.activeTrackIds = activeTrackIds;
      await ((_a3 = currentSession()) == null ? void 0 : _a3.loadMedia(request2));
      this.dispatchEvent(new Event("volumechange"));
    }
    play() {
      var _a3;
      if (__privateGet(this, _CastableMedia_instances, castPlayer_get2)) {
        if (__privateGet(this, _CastableMedia_instances, castPlayer_get2).isPaused) {
          (_a3 = __privateGet(this, _CastableMedia_instances, castPlayer_get2).controller) == null ? void 0 : _a3.playOrPause();
        }
        return;
      }
      return super.play();
    }
    pause() {
      var _a3;
      if (__privateGet(this, _CastableMedia_instances, castPlayer_get2)) {
        if (!__privateGet(this, _CastableMedia_instances, castPlayer_get2).isPaused) {
          (_a3 = __privateGet(this, _CastableMedia_instances, castPlayer_get2).controller) == null ? void 0 : _a3.playOrPause();
        }
        return;
      }
      super.pause();
    }
    /**
     * @see https://developers.google.com/cast/docs/reference/web_sender/cast.framework.CastOptions
     * @readonly
     *
     * @typedef {Object} CastOptions
     * @property {string} [receiverApplicationId='CC1AD845'] - The app id of the cast receiver.
     * @property {string} [autoJoinPolicy='origin_scoped'] - The auto join policy.
     * @property {string} [language='en-US'] - The language to use for the cast receiver.
     * @property {boolean} [androidReceiverCompatible=false] - Whether to use the Cast Connect.
     * @property {boolean} [resumeSavedSession=true] - Whether to resume the last session.
     *
     * @return {CastOptions}
     */
    get castOptions() {
      return __privateGet(this, _castOptions);
    }
    get castReceiver() {
      return this.getAttribute("cast-receiver") ?? void 0;
    }
    set castReceiver(val) {
      if (this.castReceiver == val) return;
      this.setAttribute("cast-receiver", `${val}`);
    }
    // Allow the cast source url to be different than <video src>, could be a blob.
    get castSrc() {
      var _a3;
      const currentSrc = this.currentSrc;
      const resolvedSrc = (currentSrc == null ? void 0 : currentSrc.startsWith("blob:")) ? void 0 : currentSrc;
      return this.getAttribute("cast-src") ?? ((_a3 = this.querySelector("source")) == null ? void 0 : _a3.src) ?? resolvedSrc ?? this.getAttribute("src") ?? void 0;
    }
    set castSrc(val) {
      if (this.castSrc == val) return;
      this.setAttribute("cast-src", `${val}`);
    }
    get castContentType() {
      return this.getAttribute("cast-content-type") ?? void 0;
    }
    set castContentType(val) {
      this.setAttribute("cast-content-type", `${val}`);
    }
    get castStreamType() {
      return this.getAttribute("cast-stream-type") ?? this.streamType ?? void 0;
    }
    set castStreamType(val) {
      this.setAttribute("cast-stream-type", `${val}`);
    }
    get castCustomData() {
      return __privateGet(this, _castCustomData);
    }
    set castCustomData(val) {
      const valType = typeof val;
      if (!["object", "undefined"].includes(valType)) {
        console.error(`castCustomData must be nullish or an object but value was of type ${valType}`);
        return;
      }
      __privateSet(this, _castCustomData, val);
    }
    get readyState() {
      if (__privateGet(this, _CastableMedia_instances, castPlayer_get2)) {
        switch (__privateGet(this, _CastableMedia_instances, castPlayer_get2).playerState) {
          case chrome.cast.media.PlayerState.IDLE:
            return 0;
          case chrome.cast.media.PlayerState.BUFFERING:
            return 2;
          default:
            return 3;
        }
      }
      return super.readyState;
    }
    get paused() {
      if (__privateGet(this, _CastableMedia_instances, castPlayer_get2)) return __privateGet(this, _CastableMedia_instances, castPlayer_get2).isPaused;
      return super.paused;
    }
    get muted() {
      var _a3;
      if (__privateGet(this, _CastableMedia_instances, castPlayer_get2)) return (_a3 = __privateGet(this, _CastableMedia_instances, castPlayer_get2)) == null ? void 0 : _a3.isMuted;
      return super.muted;
    }
    set muted(val) {
      var _a3;
      if (__privateGet(this, _CastableMedia_instances, castPlayer_get2)) {
        if (val && !__privateGet(this, _CastableMedia_instances, castPlayer_get2).isMuted || !val && __privateGet(this, _CastableMedia_instances, castPlayer_get2).isMuted) {
          (_a3 = __privateGet(this, _CastableMedia_instances, castPlayer_get2).controller) == null ? void 0 : _a3.muteOrUnmute();
        }
        return;
      }
      super.muted = val;
    }
    get volume() {
      var _a3;
      if (__privateGet(this, _CastableMedia_instances, castPlayer_get2)) return ((_a3 = __privateGet(this, _CastableMedia_instances, castPlayer_get2)) == null ? void 0 : _a3.volumeLevel) ?? 1;
      return super.volume;
    }
    set volume(val) {
      var _a3;
      if (__privateGet(this, _CastableMedia_instances, castPlayer_get2)) {
        __privateGet(this, _CastableMedia_instances, castPlayer_get2).volumeLevel = +val;
        (_a3 = __privateGet(this, _CastableMedia_instances, castPlayer_get2).controller) == null ? void 0 : _a3.setVolumeLevel();
        return;
      }
      super.volume = val;
    }
    get duration() {
      var _a3, _b;
      if (__privateGet(this, _CastableMedia_instances, castPlayer_get2) && ((_a3 = __privateGet(this, _CastableMedia_instances, castPlayer_get2)) == null ? void 0 : _a3.isMediaLoaded)) {
        return ((_b = __privateGet(this, _CastableMedia_instances, castPlayer_get2)) == null ? void 0 : _b.duration) ?? NaN;
      }
      return super.duration;
    }
    get currentTime() {
      var _a3, _b;
      if (__privateGet(this, _CastableMedia_instances, castPlayer_get2) && ((_a3 = __privateGet(this, _CastableMedia_instances, castPlayer_get2)) == null ? void 0 : _a3.isMediaLoaded)) {
        return ((_b = __privateGet(this, _CastableMedia_instances, castPlayer_get2)) == null ? void 0 : _b.currentTime) ?? 0;
      }
      return super.currentTime;
    }
    set currentTime(val) {
      var _a3;
      if (__privateGet(this, _CastableMedia_instances, castPlayer_get2)) {
        __privateGet(this, _CastableMedia_instances, castPlayer_get2).currentTime = val;
        (_a3 = __privateGet(this, _CastableMedia_instances, castPlayer_get2).controller) == null ? void 0 : _a3.seek();
        return;
      }
      super.currentTime = val;
    }
  }, _localState = new WeakMap(), _castOptions = new WeakMap(), _castCustomData = new WeakMap(), _remote = new WeakMap(), _CastableMedia_instances = new WeakSet(), castPlayer_get2 = function() {
    var _a3, _b;
    return (_b = (_a3 = privateProps.get(__privateGet(this, _remote))) == null ? void 0 : _a3.getCastPlayer) == null ? void 0 : _b.call(_a3);
  }, loadOnPrompt_fn = async function() {
    __privateGet(this, _localState).paused = __superGet(_a2.prototype, this, "paused");
    __superGet(_a2.prototype, this, "pause").call(this);
    this.muted = __superGet(_a2.prototype, this, "muted");
    try {
      await this.load();
    } catch (err) {
      console.error(err);
    }
  }, __publicField(_a2, "observedAttributes", [
    ...superclass.observedAttributes ?? [],
    "cast-src",
    "cast-content-type",
    "cast-stream-type",
    "cast-receiver"
  ]), _a2;
};
var f$2 = (e) => {
  throw TypeError(e);
};
var g$1 = (e, o2, t3) => o2.has(e) || f$2("Cannot " + t3);
var u$1 = (e, o2, t3) => (g$1(e, o2, "read from private field"), t3 ? t3.call(e) : o2.get(e)), m$1 = (e, o2, t3) => o2.has(e) ? f$2("Cannot add the same private member more than once") : o2 instanceof WeakSet ? o2.add(e) : o2.set(e, t3), d = (e, o2, t3, l2) => (g$1(e, o2, "write to private field"), o2.set(e, t3), t3);
var s$1 = class s {
  addEventListener() {
  }
  removeEventListener() {
  }
  dispatchEvent(o2) {
    return true;
  }
};
if (typeof DocumentFragment == "undefined") {
  class e extends s$1 {
  }
  globalThis.DocumentFragment = e;
}
var n = class extends s$1 {
}, x$1 = { get(e) {
}, define(e, o2, t3) {
}, getName(e) {
  return null;
}, upgrade(e) {
}, whenDefined(e) {
  return Promise.resolve(n);
} };
var y$1 = { customElements: x$1 }, b$1 = typeof window == "undefined" || typeof globalThis.customElements == "undefined", c = b$1 ? y$1 : globalThis;
var r$1, i = class extends CastableMediaMixin(MediaTracksMixin(G$1)) {
  constructor() {
    super(...arguments);
    m$1(this, r$1);
  }
  get autoplay() {
    let t3 = this.getAttribute("autoplay");
    return t3 === null ? false : t3 === "" ? true : t3;
  }
  set autoplay(t3) {
    let l2 = this.autoplay;
    t3 !== l2 && (t3 ? this.setAttribute("autoplay", typeof t3 == "string" ? t3 : "") : this.removeAttribute("autoplay"));
  }
  get muxCastCustomData() {
    return { mux: { playbackId: this.playbackId, minResolution: this.minResolution, maxResolution: this.maxResolution, renditionOrder: this.renditionOrder, customDomain: this.customDomain, tokens: { drm: this.drmToken }, envKey: this.envKey, metadata: this.metadata, disableCookies: this.disableCookies, disableTracking: this.disableTracking, beaconCollectionDomain: this.beaconCollectionDomain, startTime: this.startTime, preferCmcd: this.preferCmcd } };
  }
  get castCustomData() {
    var t3;
    return (t3 = u$1(this, r$1)) != null ? t3 : this.muxCastCustomData;
  }
  set castCustomData(t3) {
    d(this, r$1, t3);
  }
};
r$1 = /* @__PURE__ */ new WeakMap();
c.customElements.get("mux-video") || (c.customElements.define("mux-video", i), c.MuxVideoElement = i);
const MediaUIEvents = {
  MEDIA_PLAY_REQUEST: "mediaplayrequest",
  MEDIA_PAUSE_REQUEST: "mediapauserequest",
  MEDIA_MUTE_REQUEST: "mediamuterequest",
  MEDIA_UNMUTE_REQUEST: "mediaunmuterequest",
  MEDIA_LOOP_REQUEST: "medialooprequest",
  MEDIA_VOLUME_REQUEST: "mediavolumerequest",
  MEDIA_SEEK_REQUEST: "mediaseekrequest",
  MEDIA_AIRPLAY_REQUEST: "mediaairplayrequest",
  MEDIA_ENTER_FULLSCREEN_REQUEST: "mediaenterfullscreenrequest",
  MEDIA_EXIT_FULLSCREEN_REQUEST: "mediaexitfullscreenrequest",
  MEDIA_PREVIEW_REQUEST: "mediapreviewrequest",
  MEDIA_ENTER_PIP_REQUEST: "mediaenterpiprequest",
  MEDIA_EXIT_PIP_REQUEST: "mediaexitpiprequest",
  MEDIA_ENTER_CAST_REQUEST: "mediaentercastrequest",
  MEDIA_EXIT_CAST_REQUEST: "mediaexitcastrequest",
  MEDIA_SHOW_TEXT_TRACKS_REQUEST: "mediashowtexttracksrequest",
  MEDIA_HIDE_TEXT_TRACKS_REQUEST: "mediahidetexttracksrequest",
  MEDIA_SHOW_SUBTITLES_REQUEST: "mediashowsubtitlesrequest",
  MEDIA_DISABLE_SUBTITLES_REQUEST: "mediadisablesubtitlesrequest",
  MEDIA_TOGGLE_SUBTITLES_REQUEST: "mediatogglesubtitlesrequest",
  MEDIA_PLAYBACK_RATE_REQUEST: "mediaplaybackraterequest",
  MEDIA_RENDITION_REQUEST: "mediarenditionrequest",
  MEDIA_AUDIO_TRACK_REQUEST: "mediaaudiotrackrequest",
  MEDIA_SEEK_TO_LIVE_REQUEST: "mediaseektoliverequest",
  REGISTER_MEDIA_STATE_RECEIVER: "registermediastatereceiver",
  UNREGISTER_MEDIA_STATE_RECEIVER: "unregistermediastatereceiver"
};
const MediaStateReceiverAttributes = {
  MEDIA_CHROME_ATTRIBUTES: "mediachromeattributes",
  MEDIA_CONTROLLER: "mediacontroller"
};
const MediaUIProps = {
  MEDIA_AIRPLAY_UNAVAILABLE: "mediaAirplayUnavailable",
  MEDIA_AUDIO_TRACK_ENABLED: "mediaAudioTrackEnabled",
  MEDIA_AUDIO_TRACK_LIST: "mediaAudioTrackList",
  MEDIA_AUDIO_TRACK_UNAVAILABLE: "mediaAudioTrackUnavailable",
  MEDIA_BUFFERED: "mediaBuffered",
  MEDIA_CAST_UNAVAILABLE: "mediaCastUnavailable",
  MEDIA_CHAPTERS_CUES: "mediaChaptersCues",
  MEDIA_CURRENT_TIME: "mediaCurrentTime",
  MEDIA_DURATION: "mediaDuration",
  MEDIA_ENDED: "mediaEnded",
  MEDIA_ERROR: "mediaError",
  MEDIA_ERROR_CODE: "mediaErrorCode",
  MEDIA_ERROR_MESSAGE: "mediaErrorMessage",
  MEDIA_FULLSCREEN_UNAVAILABLE: "mediaFullscreenUnavailable",
  MEDIA_HAS_PLAYED: "mediaHasPlayed",
  MEDIA_HEIGHT: "mediaHeight",
  MEDIA_IS_AIRPLAYING: "mediaIsAirplaying",
  MEDIA_IS_CASTING: "mediaIsCasting",
  MEDIA_IS_FULLSCREEN: "mediaIsFullscreen",
  MEDIA_IS_PIP: "mediaIsPip",
  MEDIA_LOADING: "mediaLoading",
  MEDIA_MUTED: "mediaMuted",
  MEDIA_LOOP: "mediaLoop",
  MEDIA_PAUSED: "mediaPaused",
  MEDIA_PIP_UNAVAILABLE: "mediaPipUnavailable",
  MEDIA_PLAYBACK_RATE: "mediaPlaybackRate",
  MEDIA_PREVIEW_CHAPTER: "mediaPreviewChapter",
  MEDIA_PREVIEW_COORDS: "mediaPreviewCoords",
  MEDIA_PREVIEW_IMAGE: "mediaPreviewImage",
  MEDIA_PREVIEW_TIME: "mediaPreviewTime",
  MEDIA_RENDITION_LIST: "mediaRenditionList",
  MEDIA_RENDITION_SELECTED: "mediaRenditionSelected",
  MEDIA_RENDITION_UNAVAILABLE: "mediaRenditionUnavailable",
  MEDIA_SEEKABLE: "mediaSeekable",
  MEDIA_STREAM_TYPE: "mediaStreamType",
  MEDIA_SUBTITLES_LIST: "mediaSubtitlesList",
  MEDIA_SUBTITLES_SHOWING: "mediaSubtitlesShowing",
  MEDIA_TARGET_LIVE_WINDOW: "mediaTargetLiveWindow",
  MEDIA_TIME_IS_LIVE: "mediaTimeIsLive",
  MEDIA_VOLUME: "mediaVolume",
  MEDIA_VOLUME_LEVEL: "mediaVolumeLevel",
  MEDIA_VOLUME_UNAVAILABLE: "mediaVolumeUnavailable",
  MEDIA_LANG: "mediaLang",
  MEDIA_WIDTH: "mediaWidth"
};
const MediaUIPropsEntries = Object.entries(
  MediaUIProps
);
const MediaUIAttributes = MediaUIPropsEntries.reduce(
  (dictObj, [key, propName]) => {
    dictObj[key] = propName.toLowerCase();
    return dictObj;
  },
  {}
);
const AdditionalStateChangeEvents = {
  USER_INACTIVE_CHANGE: "userinactivechange",
  BREAKPOINTS_CHANGE: "breakpointchange",
  BREAKPOINTS_COMPUTED: "breakpointscomputed"
};
const MediaStateChangeEvents = MediaUIPropsEntries.reduce(
  (dictObj, [key, propName]) => {
    dictObj[key] = propName.toLowerCase();
    return dictObj;
  },
  { ...AdditionalStateChangeEvents }
);
Object.entries(
  MediaStateChangeEvents
).reduce(
  (mapObj, [key, eventType]) => {
    const attrName = MediaUIAttributes[key];
    if (attrName) {
      mapObj[eventType] = attrName;
    }
    return mapObj;
  },
  { userinactivechange: "userinactive" }
);
const AttributeToStateChangeEventMap = Object.entries(
  MediaUIAttributes
).reduce(
  (mapObj, [key, attrName]) => {
    const evtType = MediaStateChangeEvents[key];
    if (evtType) {
      mapObj[attrName] = evtType;
    }
    return mapObj;
  },
  { userinactive: "userinactivechange" }
);
const TextTrackKinds = {
  SUBTITLES: "subtitles",
  CAPTIONS: "captions",
  CHAPTERS: "chapters",
  METADATA: "metadata"
};
const TextTrackModes = {
  DISABLED: "disabled",
  SHOWING: "showing"
};
const PointerTypes = {
  MOUSE: "mouse",
  PEN: "pen",
  TOUCH: "touch"
};
const AvailabilityStates = {
  UNAVAILABLE: "unavailable",
  UNSUPPORTED: "unsupported"
};
const StreamTypes = {
  LIVE: "live",
  ON_DEMAND: "on-demand",
  UNKNOWN: "unknown"
};
const WebkitPresentationModes = {
  FULLSCREEN: "fullscreen"
};
function stringifyRenditionList(renditions) {
  return renditions == null ? void 0 : renditions.map(stringifyRendition).join(" ");
}
function parseRenditionList(renditions) {
  return renditions == null ? void 0 : renditions.split(/\s+/).map(parseRendition);
}
function stringifyRendition(rendition) {
  if (rendition) {
    const { id, width, height } = rendition;
    return [id, width, height].filter((a) => a != null).join(":");
  }
}
function parseRendition(rendition) {
  if (rendition) {
    const [id, width, height] = rendition.split(":");
    return { id, width: +width, height: +height };
  }
}
function stringifyAudioTrackList(audioTracks) {
  return audioTracks == null ? void 0 : audioTracks.map(stringifyAudioTrack).join(" ");
}
function parseAudioTrackList(audioTracks) {
  return audioTracks == null ? void 0 : audioTracks.split(/\s+/).map(parseAudioTrack);
}
function stringifyAudioTrack(audioTrack) {
  if (audioTrack) {
    const { id, kind, language, label } = audioTrack;
    return [id, kind, language, label].filter((a) => a != null).join(":");
  }
}
function parseAudioTrack(audioTrack) {
  if (audioTrack) {
    const [id, kind, language, label] = audioTrack.split(":");
    return {
      id,
      kind,
      language,
      label
    };
  }
}
function camelCase(name) {
  return name.replace(/[-_]([a-z])/g, ($0, $1) => $1.toUpperCase());
}
function isValidNumber(x2) {
  return typeof x2 === "number" && !Number.isNaN(x2) && Number.isFinite(x2);
}
function isNumericString(str) {
  if (typeof str != "string")
    return false;
  return !isNaN(str) && !isNaN(parseFloat(str));
}
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const En = {
  "Start airplay": "Start airplay",
  "Stop airplay": "Stop airplay",
  Audio: "Audio",
  Captions: "Captions",
  "Enable captions": "Enable captions",
  "Disable captions": "Disable captions",
  "Start casting": "Start casting",
  "Stop casting": "Stop casting",
  "Enter fullscreen mode": "Enter fullscreen mode",
  "Exit fullscreen mode": "Exit fullscreen mode",
  Mute: "Mute",
  Unmute: "Unmute",
  Loop: "Loop",
  "Enter picture in picture mode": "Enter picture in picture mode",
  "Exit picture in picture mode": "Exit picture in picture mode",
  Play: "Play",
  Pause: "Pause",
  "Playback rate": "Playback rate",
  "Playback rate {playbackRate}": "Playback rate {playbackRate}",
  Quality: "Quality",
  "Seek backward": "Seek backward",
  "Seek forward": "Seek forward",
  Settings: "Settings",
  Auto: "Auto",
  "audio player": "audio player",
  "video player": "video player",
  volume: "volume",
  seek: "seek",
  "closed captions": "closed captions",
  "current playback rate": "current playback rate",
  "playback time": "playback time",
  "media loading": "media loading",
  settings: "settings",
  "audio tracks": "audio tracks",
  quality: "quality",
  play: "play",
  pause: "pause",
  mute: "mute",
  unmute: "unmute",
  "chapter: {chapterName}": "chapter: {chapterName}",
  live: "live",
  Off: "Off",
  "start airplay": "start airplay",
  "stop airplay": "stop airplay",
  "start casting": "start casting",
  "stop casting": "stop casting",
  "enter fullscreen mode": "enter fullscreen mode",
  "exit fullscreen mode": "exit fullscreen mode",
  "enter picture in picture mode": "enter picture in picture mode",
  "exit picture in picture mode": "exit picture in picture mode",
  "seek to live": "seek to live",
  "playing live": "playing live",
  "seek back {seekOffset} seconds": "seek back {seekOffset} seconds",
  "seek forward {seekOffset} seconds": "seek forward {seekOffset} seconds",
  "Network Error": "Network Error",
  "Decode Error": "Decode Error",
  "Source Not Supported": "Source Not Supported",
  "Encryption Error": "Encryption Error",
  "A network error caused the media download to fail.": "A network error caused the media download to fail.",
  "A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.": "A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",
  "An unsupported error occurred. The server or network failed, or your browser does not support this format.": "An unsupported error occurred. The server or network failed, or your browser does not support this format.",
  "The media is encrypted and there are no keys to decrypt it.": "The media is encrypted and there are no keys to decrypt it.",
  hour: "hour",
  hours: "hours",
  minute: "minute",
  minutes: "minutes",
  second: "second",
  seconds: "seconds",
  "{time} remaining": "{time} remaining",
  "{currentTime} of {totalTime}": "{currentTime} of {totalTime}",
  "video not loaded, unknown time.": "video not loaded, unknown time."
};
var _a;
const translations = {
  en: En
};
let currentLang = ((_a = globalThis.navigator) == null ? void 0 : _a.language) || "en";
const setLanguage = (langCode) => {
  currentLang = langCode;
};
const resolveTranslation = (key) => {
  var _a2, _b, _c;
  const [base] = currentLang.split("-");
  return ((_a2 = translations[currentLang]) == null ? void 0 : _a2[key]) || ((_b = translations[base]) == null ? void 0 : _b[key]) || ((_c = translations.en) == null ? void 0 : _c[key]) || key;
};
const getResolvedLanguage = () => {
  const [base] = currentLang.split("-");
  if (translations[currentLang])
    return currentLang;
  if (translations[base])
    return base;
  return "en";
};
const t = (key, vars = {}) => resolveTranslation(key).replace(
  /\{(\w+)\}/g,
  (_3, v2) => v2 in vars ? String(vars[v2]) : `{${v2}}`
);
const UnitLabels = [
  {
    singular: "hour",
    plural: "hours"
  },
  {
    singular: "minute",
    plural: "minutes"
  },
  {
    singular: "second",
    plural: "seconds"
  }
];
const toTimeUnitPhrase = (timeUnitValue, unitIndex) => {
  const unitLabel = timeUnitValue === 1 ? t(UnitLabels[unitIndex].singular) : t(UnitLabels[unitIndex].plural);
  return `${timeUnitValue} ${unitLabel}`;
};
const formatAsTimePhrase = (seconds) => {
  if (!isValidNumber(seconds))
    return "";
  const positiveSeconds = Math.abs(seconds);
  const negative = positiveSeconds !== seconds;
  const secondsDateTime = new Date(0, 0, 0, 0, 0, positiveSeconds, 0);
  const timeParts = [
    secondsDateTime.getHours(),
    secondsDateTime.getMinutes(),
    secondsDateTime.getSeconds()
  ];
  const timeString = timeParts.map(
    (timeUnitValue, index) => timeUnitValue && toTimeUnitPhrase(timeUnitValue, index)
  ).filter((x2) => x2).join(", ");
  if (negative) {
    return t("{time} remaining", { time: timeString });
  }
  return timeString;
};
function formatTime(seconds, guide) {
  let negative = false;
  if (seconds < 0) {
    negative = true;
    seconds = 0 - seconds;
  }
  seconds = seconds < 0 ? 0 : seconds;
  let s3 = Math.floor(seconds % 60);
  let m2 = Math.floor(seconds / 60 % 60);
  let h2 = Math.floor(seconds / 3600);
  const gm = Math.floor(guide / 60 % 60);
  const gh = Math.floor(guide / 3600);
  if (isNaN(seconds) || seconds === Infinity) {
    h2 = m2 = s3 = "0";
  }
  h2 = h2 > 0 || gh > 0 ? h2 + ":" : "";
  m2 = ((h2 || gm >= 10) && m2 < 10 ? "0" + m2 : m2) + ":";
  s3 = s3 < 10 ? "0" + s3 : s3;
  return (negative ? "-" : "") + h2 + m2 + s3;
}
let EventTarget$1 = class EventTarget2 {
  addEventListener() {
  }
  removeEventListener() {
  }
  dispatchEvent() {
    return true;
  }
};
class Node extends EventTarget$1 {
}
let Element$1 = class Element2 extends Node {
  constructor() {
    super(...arguments);
    this.role = null;
  }
};
class ResizeObserver {
  observe() {
  }
  unobserve() {
  }
  disconnect() {
  }
}
const documentShim = {
  createElement: function() {
    return new globalThisShim.HTMLElement();
  },
  createElementNS: function() {
    return new globalThisShim.HTMLElement();
  },
  addEventListener() {
  },
  removeEventListener() {
  },
  dispatchEvent(_event) {
    return false;
  }
};
const globalThisShim = {
  ResizeObserver,
  document: documentShim,
  Node,
  Element: Element$1,
  HTMLElement: class HTMLElement2 extends Element$1 {
    constructor() {
      super(...arguments);
      this.innerHTML = "";
    }
    get content() {
      return new globalThisShim.DocumentFragment();
    }
  },
  DocumentFragment: class DocumentFragment2 extends EventTarget$1 {
  },
  customElements: {
    get: function() {
    },
    define: function() {
    },
    whenDefined: function() {
    }
  },
  localStorage: {
    getItem(_key) {
      return null;
    },
    setItem(_key, _value2) {
    },
    removeItem(_key) {
    }
  },
  CustomEvent: function CustomEvent2() {
  },
  getComputedStyle: function() {
  },
  navigator: {
    languages: [],
    get userAgent() {
      return "";
    }
  },
  matchMedia(media) {
    return {
      matches: false,
      media
    };
  },
  DOMParser: class DOMParser {
    parseFromString(string, _contentType) {
      return {
        body: {
          textContent: string
        }
      };
    }
  }
};
const isServer = "global" in globalThis && (globalThis == null ? void 0 : globalThis.global) === globalThis || // node or node-like environments, whether or not there are global polyfills like jsdom
typeof window === "undefined" || typeof window.customElements === "undefined";
const isShimmed = Object.keys(globalThisShim).every((key) => key in globalThis);
const GlobalThis = isServer && !isShimmed ? globalThisShim : globalThis;
const Document$1 = isServer && !isShimmed ? documentShim : globalThis.document;
const callbacksMap = /* @__PURE__ */ new WeakMap();
const getCallbacks = (element) => {
  let callbacks = callbacksMap.get(element);
  if (!callbacks)
    callbacksMap.set(element, callbacks = /* @__PURE__ */ new Set());
  return callbacks;
};
const observer = new GlobalThis.ResizeObserver(
  (entries) => {
    for (const entry of entries) {
      for (const callback of getCallbacks(entry.target)) {
        callback(entry);
      }
    }
  }
);
function observeResize(element, callback) {
  getCallbacks(element).add(callback);
  observer.observe(element);
}
function unobserveResize(element, callback) {
  const callbacks = getCallbacks(element);
  callbacks.delete(callback);
  if (!callbacks.size) {
    observer.unobserve(element);
  }
}
function namedNodeMapToObject(namedNodeMap) {
  const obj = {};
  for (const attr of namedNodeMap) {
    obj[attr.name] = attr.value;
  }
  return obj;
}
function getMediaController(host) {
  var _a2;
  return (_a2 = getAttributeMediaController(host)) != null ? _a2 : closestComposedNode(host, "media-controller");
}
function getAttributeMediaController(host) {
  var _a2;
  const { MEDIA_CONTROLLER } = MediaStateReceiverAttributes;
  const mediaControllerId = host.getAttribute(MEDIA_CONTROLLER);
  if (mediaControllerId) {
    return (_a2 = getDocumentOrShadowRoot(host)) == null ? void 0 : _a2.getElementById(
      mediaControllerId
    );
  }
}
const updateIconText = (svg, value, selector = ".value") => {
  const node = svg.querySelector(selector);
  if (!node)
    return;
  node.textContent = value;
};
const getAllSlotted = (el, name) => {
  const slotSelector = `slot[name="${name}"]`;
  const slot = el.shadowRoot.querySelector(slotSelector);
  if (!slot)
    return [];
  return slot.children;
};
const getSlotted = (el, name) => getAllSlotted(el, name)[0];
const containsComposedNode = (rootNode, childNode) => {
  if (!rootNode || !childNode)
    return false;
  if (rootNode == null ? void 0 : rootNode.contains(childNode))
    return true;
  return containsComposedNode(
    rootNode,
    childNode.getRootNode().host
  );
};
const closestComposedNode = (childNode, selector) => {
  if (!childNode)
    return null;
  const closest = childNode.closest(selector);
  if (closest)
    return closest;
  return closestComposedNode(
    childNode.getRootNode().host,
    selector
  );
};
function getActiveElement(root = document) {
  var _a2;
  const activeEl = root == null ? void 0 : root.activeElement;
  if (!activeEl)
    return null;
  return (_a2 = getActiveElement(activeEl.shadowRoot)) != null ? _a2 : activeEl;
}
function getDocumentOrShadowRoot(node) {
  var _a2;
  const rootNode = (_a2 = node == null ? void 0 : node.getRootNode) == null ? void 0 : _a2.call(node);
  if (rootNode instanceof ShadowRoot || rootNode instanceof Document) {
    return rootNode;
  }
  return null;
}
function isElementVisible(element, { depth = 3, checkOpacity = true, checkVisibilityCSS = true } = {}) {
  if (element.checkVisibility) {
    return element.checkVisibility({
      checkOpacity,
      checkVisibilityCSS
    });
  }
  let el = element;
  while (el && depth > 0) {
    const style = getComputedStyle(el);
    if (checkOpacity && style.opacity === "0" || checkVisibilityCSS && style.visibility === "hidden" || style.display === "none") {
      return false;
    }
    el = el.parentElement;
    depth--;
  }
  return true;
}
function getPointProgressOnLine(x2, y2, p1, p2) {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  const lengthSquared = dx * dx + dy * dy;
  if (lengthSquared === 0)
    return 0;
  const projection = ((x2 - p1.x) * dx + (y2 - p1.y) * dy) / lengthSquared;
  return Math.max(0, Math.min(1, projection));
}
function getOrInsertCSSRule(styleParent, selectorText) {
  const cssRule = getCSSRule(styleParent, (st2) => st2 === selectorText);
  if (cssRule)
    return cssRule;
  return insertCSSRule(styleParent, selectorText);
}
function getCSSRule(styleParent, predicate) {
  var _a2, _b;
  let style;
  for (style of (_a2 = styleParent.querySelectorAll("style:not([media])")) != null ? _a2 : []) {
    let cssRules;
    try {
      cssRules = (_b = style.sheet) == null ? void 0 : _b.cssRules;
    } catch {
      continue;
    }
    for (const rule of cssRules != null ? cssRules : []) {
      if (predicate(rule.selectorText))
        return rule;
    }
  }
}
function insertCSSRule(styleParent, selectorText) {
  var _a2, _b;
  const styles = (_a2 = styleParent.querySelectorAll("style:not([media])")) != null ? _a2 : [];
  const style = styles == null ? void 0 : styles[styles.length - 1];
  if (!(style == null ? void 0 : style.sheet)) {
    console.warn(
      "Media Chrome: No style sheet found on style tag of",
      styleParent
    );
    return {
      // @ts-ignore
      style: {
        setProperty: () => {
        },
        removeProperty: () => "",
        getPropertyValue: () => ""
      }
    };
  }
  const cssRuleId = style == null ? void 0 : style.sheet.insertRule(`${selectorText}{}`, style.sheet.cssRules.length);
  return (_b = style.sheet.cssRules) == null ? void 0 : _b[cssRuleId];
}
function getNumericAttr(el, attrName, defaultValue = Number.NaN) {
  const attrVal = el.getAttribute(attrName);
  return attrVal != null ? +attrVal : defaultValue;
}
function setNumericAttr(el, attrName, value) {
  const nextNumericValue = +value;
  if (value == null || Number.isNaN(nextNumericValue)) {
    if (el.hasAttribute(attrName)) {
      el.removeAttribute(attrName);
    }
    return;
  }
  if (getNumericAttr(el, attrName, void 0) === nextNumericValue)
    return;
  el.setAttribute(attrName, `${nextNumericValue}`);
}
function getBooleanAttr(el, attrName) {
  return el.hasAttribute(attrName);
}
function setBooleanAttr(el, attrName, value) {
  if (value == null) {
    if (el.hasAttribute(attrName)) {
      el.removeAttribute(attrName);
    }
    return;
  }
  if (getBooleanAttr(el, attrName) == value)
    return;
  el.toggleAttribute(attrName, value);
}
function getStringAttr(el, attrName, defaultValue = null) {
  var _a2;
  return (_a2 = el.getAttribute(attrName)) != null ? _a2 : defaultValue;
}
function setStringAttr(el, attrName, value) {
  if (value == null) {
    if (el.hasAttribute(attrName)) {
      el.removeAttribute(attrName);
    }
    return;
  }
  const nextValue = `${value}`;
  if (getStringAttr(el, attrName, void 0) === nextValue)
    return;
  el.setAttribute(attrName, nextValue);
}
var __accessCheck$u = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet$u = (obj, member, getter) => {
  __accessCheck$u(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$u = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$q = (obj, member, value, setter) => {
  __accessCheck$u(obj, member, "write to private field");
  member.set(obj, value);
  return value;
};
var _mediaController$7;
function getTemplateHTML$h(_attrs) {
  return (
    /*html*/
    `
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `
  );
}
class MediaGestureReceiver extends GlobalThis.HTMLElement {
  constructor() {
    super();
    __privateAdd$u(this, _mediaController$7, void 0);
    if (!this.shadowRoot) {
      this.attachShadow(this.constructor.shadowRootOptions);
      const attrs = namedNodeMapToObject(this.attributes);
      this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(attrs);
    }
  }
  // NOTE: Currently "baking in" actions + attrs until we come up with
  // a more robust architecture (CJP)
  static get observedAttributes() {
    return [
      MediaStateReceiverAttributes.MEDIA_CONTROLLER,
      MediaUIAttributes.MEDIA_PAUSED
    ];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    var _a2, _b, _c, _d, _e2;
    if (attrName === MediaStateReceiverAttributes.MEDIA_CONTROLLER) {
      if (oldValue) {
        (_b = (_a2 = __privateGet$u(this, _mediaController$7)) == null ? void 0 : _a2.unassociateElement) == null ? void 0 : _b.call(_a2, this);
        __privateSet$q(this, _mediaController$7, null);
      }
      if (newValue && this.isConnected) {
        __privateSet$q(this, _mediaController$7, (_c = this.getRootNode()) == null ? void 0 : _c.getElementById(newValue));
        (_e2 = (_d = __privateGet$u(this, _mediaController$7)) == null ? void 0 : _d.associateElement) == null ? void 0 : _e2.call(_d, this);
      }
    }
  }
  connectedCallback() {
    var _a2, _b;
    this.tabIndex = -1;
    this.setAttribute("aria-hidden", "true");
    __privateSet$q(this, _mediaController$7, getMediaControllerEl(this));
    if (this.getAttribute(MediaStateReceiverAttributes.MEDIA_CONTROLLER)) {
      (_b = (_a2 = __privateGet$u(this, _mediaController$7)) == null ? void 0 : _a2.associateElement) == null ? void 0 : _b.call(_a2, this);
    }
    if (!__privateGet$u(this, _mediaController$7))
      return;
    __privateGet$u(this, _mediaController$7).addEventListener("pointerdown", this);
    __privateGet$u(this, _mediaController$7).addEventListener("click", this);
    if (!__privateGet$u(this, _mediaController$7).hasAttribute("tabindex")) {
      __privateGet$u(this, _mediaController$7).tabIndex = 0;
    }
  }
  disconnectedCallback() {
    var _a2, _b, _c, _d;
    if (this.getAttribute(MediaStateReceiverAttributes.MEDIA_CONTROLLER)) {
      (_b = (_a2 = __privateGet$u(this, _mediaController$7)) == null ? void 0 : _a2.unassociateElement) == null ? void 0 : _b.call(_a2, this);
    }
    (_c = __privateGet$u(this, _mediaController$7)) == null ? void 0 : _c.removeEventListener("pointerdown", this);
    (_d = __privateGet$u(this, _mediaController$7)) == null ? void 0 : _d.removeEventListener("click", this);
    __privateSet$q(this, _mediaController$7, null);
  }
  handleEvent(event) {
    var _a2;
    const composedTarget = (_a2 = event.composedPath()) == null ? void 0 : _a2[0];
    const allowList = ["video", "media-controller"];
    if (!allowList.includes(composedTarget == null ? void 0 : composedTarget.localName))
      return;
    if (event.type === "pointerdown") {
      this._pointerType = event.pointerType;
    } else if (event.type === "click") {
      const { clientX, clientY } = event;
      const { left, top, width, height } = this.getBoundingClientRect();
      const x2 = clientX - left;
      const y2 = clientY - top;
      if (x2 < 0 || y2 < 0 || x2 > width || y2 > height || // In case this element has no dimensions (or display: none) return.
      width === 0 && height === 0) {
        return;
      }
      const pointerType = this._pointerType || "mouse";
      this._pointerType = void 0;
      if (pointerType === PointerTypes.TOUCH) {
        this.handleTap(event);
        return;
      } else if (pointerType === PointerTypes.MOUSE || pointerType === PointerTypes.PEN) {
        this.handleMouseClick(event);
        return;
      }
    }
  }
  /**
   * @type {boolean} Is the media paused
   */
  get mediaPaused() {
    return getBooleanAttr(this, MediaUIAttributes.MEDIA_PAUSED);
  }
  set mediaPaused(value) {
    setBooleanAttr(this, MediaUIAttributes.MEDIA_PAUSED, value);
  }
  // NOTE: Currently "baking in" actions + attrs until we come up with
  // a more robust architecture (CJP)
  /**
   * @abstract
   * @argument {Event} e
   */
  handleTap(e) {
  }
  // eslint-disable-line
  // eslint-disable-next-line
  handleMouseClick(e) {
    const eventName = this.mediaPaused ? MediaUIEvents.MEDIA_PLAY_REQUEST : MediaUIEvents.MEDIA_PAUSE_REQUEST;
    this.dispatchEvent(
      new GlobalThis.CustomEvent(eventName, { composed: true, bubbles: true })
    );
  }
}
_mediaController$7 = /* @__PURE__ */ new WeakMap();
MediaGestureReceiver.shadowRootOptions = { mode: "open" };
MediaGestureReceiver.getTemplateHTML = getTemplateHTML$h;
function getMediaControllerEl(controlEl) {
  var _a2;
  const mediaControllerId = controlEl.getAttribute(
    MediaStateReceiverAttributes.MEDIA_CONTROLLER
  );
  if (mediaControllerId) {
    return (_a2 = controlEl.getRootNode()) == null ? void 0 : _a2.getElementById(mediaControllerId);
  }
  return closestComposedNode(controlEl, "media-controller");
}
if (!GlobalThis.customElements.get("media-gesture-receiver")) {
  GlobalThis.customElements.define(
    "media-gesture-receiver",
    MediaGestureReceiver
  );
}
var media_gesture_receiver_default = MediaGestureReceiver;
var __accessCheck$t = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet$t = (obj, member, getter) => {
  __accessCheck$t(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$t = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$p = (obj, member, value, setter) => {
  __accessCheck$t(obj, member, "write to private field");
  member.set(obj, value);
  return value;
};
var __privateMethod$e = (obj, member, method) => {
  __accessCheck$t(obj, member, "access private method");
  return method;
};
var _mutationObserver$1, _pointerDownTimeStamp, _currentMedia, _inactiveTimeout, _autohide, _handleMutation, _isResizePending, _handleResize, _handlePointerMove$2, handlePointerMove_fn$2, _handlePointerUp$1, handlePointerUp_fn$1, _setInactive, setInactive_fn, _setActive, setActive_fn, _scheduleInactive, scheduleInactive_fn, _chainedSlot, _handleSlotChange$2;
const Attributes$d = {
  AUDIO: "audio",
  AUTOHIDE: "autohide",
  BREAKPOINTS: "breakpoints",
  GESTURES_DISABLED: "gesturesdisabled",
  KEYBOARD_CONTROL: "keyboardcontrol",
  NO_AUTOHIDE: "noautohide",
  USER_INACTIVE: "userinactive",
  AUTOHIDE_OVER_CONTROLS: "autohideovercontrols"
};
function getTemplateHTML$g(_attrs) {
  return (
    /*html*/
    `
    <style>
      ${/*
    * outline on media is turned off because it is allowed to get focus to faciliate hotkeys.
    * However, on keyboard interactions, the focus outline is shown,
    * which is particularly noticeable when going fullscreen via hotkeys.
    */
    ""}
      :host([${MediaUIAttributes.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
        overflow: hidden;
      }

      :host(:not([${Attributes$d.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      ${/*
    * when in audio mode, hide the slotted media element by default
    */
    ""}
      :host([${Attributes$d.AUDIO}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      ${/*
    * when in audio mode, hide the gesture-layer which causes media-controller to be taller than the control bar
    */
    ""}
      :host([${Attributes$d.AUDIO}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      ${/*
    * if gestures are disabled, don't accept pointer-events
    */
    ""}
      :host(:not([${Attributes$d.AUDIO}])[${Attributes$d.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${Attributes$d.AUDIO}])[${Attributes$d.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      ${/*
    * any slotted element that isn't a poster or media slot should be pointer-events auto
    * we'll want to add here any slotted elements that shouldn't get pointer-events by default when slotted
    */
    ""}
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${Attributes$d.AUDIO}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${Attributes$d.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${Attributes$d.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      ${/* Position the media and poster elements to fill the container */
    ""}
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      ${/* Video specific styles */
    ""}
      :host(:not([${Attributes$d.AUDIO}])) .spacer {
        flex-grow: 1;
      }

      ${/* Safari needs this to actually make the element fill the window */
    ""}
      :host(:-webkit-full-screen) {
        ${/* Needs to use !important otherwise easy to break */
    ""}
        width: 100% !important;
        height: 100% !important;
      }

      ${/* Only add these if auto hide is not disabled */
    ""}
      ::slotted(:not([slot=media]):not([slot=poster]):not([${Attributes$d.NO_AUTOHIDE}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      ${/* Hide controls when inactive, not paused, not audio and auto hide not disabled */
    ""}
      :host([${Attributes$d.USER_INACTIVE}]:not([${MediaUIAttributes.MEDIA_PAUSED}]):not([${MediaUIAttributes.MEDIA_IS_AIRPLAYING}]):not([${MediaUIAttributes.MEDIA_IS_CASTING}]):not([${Attributes$d.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${Attributes$d.NO_AUTOHIDE}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${Attributes$d.USER_INACTIVE}]:not([${Attributes$d.NO_AUTOHIDE}]):not([${MediaUIAttributes.MEDIA_PAUSED}]):not([${MediaUIAttributes.MEDIA_IS_CASTING}]):not([${Attributes$d.AUDIO}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${Attributes$d.USER_INACTIVE}][${Attributes$d.AUTOHIDE_OVER_CONTROLS}]:not([${Attributes$d.NO_AUTOHIDE}]):not([${MediaUIAttributes.MEDIA_PAUSED}]):not([${MediaUIAttributes.MEDIA_IS_CASTING}]):not([${Attributes$d.AUDIO}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      ${/* ::slotted([slot=poster]) doesn't work for slot fallback content so hide parent slot instead */
    ""}
      :host(:not([${Attributes$d.AUDIO}])[${MediaUIAttributes.MEDIA_HAS_PLAYED}]) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${media_gesture_receiver_default.shadowRootOptions.mode}">
          ${media_gesture_receiver_default.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      ${/* default, effectively "bottom-chrome" */
    ""}
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `
  );
}
const MEDIA_UI_ATTRIBUTE_NAMES$1 = Object.values(MediaUIAttributes);
const defaultBreakpoints = "sm:384 md:576 lg:768 xl:960";
function resizeCallback(entry) {
  setBreakpoints(entry.target, entry.contentRect.width);
}
function setBreakpoints(container, width) {
  var _a2;
  if (!container.isConnected)
    return;
  const breakpoints = (_a2 = container.getAttribute(Attributes$d.BREAKPOINTS)) != null ? _a2 : defaultBreakpoints;
  const ranges = createBreakpointMap(breakpoints);
  const activeBreakpoints = getBreakpoints(ranges, width);
  let changed = false;
  Object.keys(ranges).forEach((name) => {
    if (activeBreakpoints.includes(name)) {
      if (!container.hasAttribute(`breakpoint${name}`)) {
        container.setAttribute(`breakpoint${name}`, "");
        changed = true;
      }
      return;
    }
    if (container.hasAttribute(`breakpoint${name}`)) {
      container.removeAttribute(`breakpoint${name}`);
      changed = true;
    }
  });
  if (changed) {
    const evt = new CustomEvent(MediaStateChangeEvents.BREAKPOINTS_CHANGE, {
      detail: activeBreakpoints
    });
    container.dispatchEvent(evt);
  }
  if (!container.breakpointsComputed) {
    container.breakpointsComputed = true;
    container.dispatchEvent(
      new CustomEvent(MediaStateChangeEvents.BREAKPOINTS_COMPUTED, {
        bubbles: true,
        composed: true
      })
    );
  }
}
function createBreakpointMap(breakpoints) {
  const pairs = breakpoints.split(/\s+/);
  return Object.fromEntries(pairs.map((pair) => pair.split(":")));
}
function getBreakpoints(breakpoints, width) {
  return Object.keys(breakpoints).filter((name) => {
    return width >= parseInt(breakpoints[name]);
  });
}
class MediaContainer extends GlobalThis.HTMLElement {
  constructor() {
    super();
    __privateAdd$t(this, _handlePointerMove$2);
    __privateAdd$t(this, _handlePointerUp$1);
    __privateAdd$t(this, _setInactive);
    __privateAdd$t(this, _setActive);
    __privateAdd$t(this, _scheduleInactive);
    __privateAdd$t(this, _mutationObserver$1, void 0);
    __privateAdd$t(this, _pointerDownTimeStamp, 0);
    __privateAdd$t(this, _currentMedia, null);
    __privateAdd$t(this, _inactiveTimeout, null);
    __privateAdd$t(this, _autohide, void 0);
    this.breakpointsComputed = false;
    __privateAdd$t(this, _handleMutation, (mutationsList) => {
      const media = this.media;
      for (const mutation of mutationsList) {
        if (mutation.type !== "childList")
          continue;
        const removedNodes = mutation.removedNodes;
        for (const node of removedNodes) {
          if (node.slot != "media" || mutation.target != this)
            continue;
          let previousSibling = mutation.previousSibling && mutation.previousSibling.previousElementSibling;
          if (!previousSibling || !media) {
            this.mediaUnsetCallback(node);
          } else {
            let wasFirst = previousSibling.slot !== "media";
            while ((previousSibling = previousSibling.previousSibling) !== null) {
              if (previousSibling.slot == "media")
                wasFirst = false;
            }
            if (wasFirst)
              this.mediaUnsetCallback(node);
          }
        }
        if (media) {
          for (const node of mutation.addedNodes) {
            if (node === media)
              this.handleMediaUpdated(media);
          }
        }
      }
    });
    __privateAdd$t(this, _isResizePending, false);
    __privateAdd$t(this, _handleResize, (entry) => {
      if (__privateGet$t(this, _isResizePending))
        return;
      setTimeout(() => {
        resizeCallback(entry);
        __privateSet$p(this, _isResizePending, false);
      }, 0);
      __privateSet$p(this, _isResizePending, true);
    });
    __privateAdd$t(this, _chainedSlot, void 0);
    __privateAdd$t(this, _handleSlotChange$2, () => {
      const slotEls = __privateGet$t(this, _chainedSlot).assignedElements({ flatten: true });
      if (!slotEls.length) {
        if (__privateGet$t(this, _currentMedia)) {
          this.mediaUnsetCallback(__privateGet$t(this, _currentMedia));
        }
        return;
      }
      this.handleMediaUpdated(this.media);
    });
    if (!this.shadowRoot) {
      this.attachShadow(this.constructor.shadowRootOptions);
      const attrs = namedNodeMapToObject(this.attributes);
      const html = this.constructor.getTemplateHTML(attrs);
      this.shadowRoot.setHTMLUnsafe ? this.shadowRoot.setHTMLUnsafe(html) : this.shadowRoot.innerHTML = html;
    }
    __privateSet$p(this, _mutationObserver$1, new MutationObserver(__privateGet$t(this, _handleMutation)));
  }
  static get observedAttributes() {
    return [Attributes$d.AUTOHIDE, Attributes$d.GESTURES_DISABLED].concat(MEDIA_UI_ATTRIBUTE_NAMES$1).filter(
      (name) => ![
        MediaUIAttributes.MEDIA_RENDITION_LIST,
        MediaUIAttributes.MEDIA_AUDIO_TRACK_LIST,
        MediaUIAttributes.MEDIA_CHAPTERS_CUES,
        MediaUIAttributes.MEDIA_WIDTH,
        MediaUIAttributes.MEDIA_HEIGHT,
        MediaUIAttributes.MEDIA_ERROR,
        MediaUIAttributes.MEDIA_ERROR_MESSAGE
      ].includes(name)
    );
  }
  // Could share this code with media-chrome-html-element instead
  attributeChangedCallback(attrName, _oldValue, newValue) {
    if (attrName.toLowerCase() == Attributes$d.AUTOHIDE) {
      this.autohide = newValue;
    }
  }
  // First direct child with slot=media, or null
  get media() {
    let media = this.querySelector(":scope > [slot=media]");
    if ((media == null ? void 0 : media.nodeName) == "SLOT")
      media = media.assignedElements({ flatten: true })[0];
    return media;
  }
  async handleMediaUpdated(media) {
    if (!media)
      return;
    __privateSet$p(this, _currentMedia, media);
    if (media.localName.includes("-")) {
      await GlobalThis.customElements.whenDefined(media.localName);
    }
    this.mediaSetCallback(media);
  }
  connectedCallback() {
    var _a2;
    __privateGet$t(this, _mutationObserver$1).observe(this, { childList: true, subtree: true });
    observeResize(this, __privateGet$t(this, _handleResize));
    const isAudioChrome = this.getAttribute(Attributes$d.AUDIO) != null;
    const label = isAudioChrome ? t("audio player") : t("video player");
    this.setAttribute("role", "region");
    this.setAttribute("aria-label", label);
    this.handleMediaUpdated(this.media);
    this.setAttribute(Attributes$d.USER_INACTIVE, "");
    setBreakpoints(this, this.getBoundingClientRect().width);
    const chainedSlot = this.querySelector(
      ":scope > slot[slot=media]"
    );
    if (chainedSlot) {
      __privateSet$p(this, _chainedSlot, chainedSlot);
      __privateGet$t(this, _chainedSlot).addEventListener("slotchange", __privateGet$t(this, _handleSlotChange$2));
    }
    this.addEventListener("pointerdown", this);
    this.addEventListener("pointermove", this);
    this.addEventListener("pointerup", this);
    this.addEventListener("mouseleave", this);
    this.addEventListener("keyup", this);
    (_a2 = GlobalThis.window) == null ? void 0 : _a2.addEventListener("mouseup", this);
  }
  disconnectedCallback() {
    var _a2;
    unobserveResize(this, __privateGet$t(this, _handleResize));
    clearTimeout(__privateGet$t(this, _inactiveTimeout));
    __privateGet$t(this, _mutationObserver$1).disconnect();
    if (this.media) {
      this.mediaUnsetCallback(this.media);
    }
    (_a2 = GlobalThis.window) == null ? void 0 : _a2.removeEventListener("mouseup", this);
    this.removeEventListener("pointerdown", this);
    this.removeEventListener("pointermove", this);
    this.removeEventListener("pointerup", this);
    this.removeEventListener("mouseleave", this);
    this.removeEventListener("keyup", this);
    if (__privateGet$t(this, _chainedSlot)) {
      __privateGet$t(this, _chainedSlot).removeEventListener("slotchange", __privateGet$t(this, _handleSlotChange$2));
      __privateSet$p(this, _chainedSlot, null);
    }
    __privateSet$p(this, _isResizePending, false);
  }
  /**
   * @abstract
   */
  mediaSetCallback(_media2) {
  }
  mediaUnsetCallback(_media2) {
    __privateSet$p(this, _currentMedia, null);
  }
  handleEvent(event) {
    switch (event.type) {
      case "pointerdown":
        __privateSet$p(this, _pointerDownTimeStamp, event.timeStamp);
        break;
      case "pointermove":
        __privateMethod$e(this, _handlePointerMove$2, handlePointerMove_fn$2).call(this, event);
        break;
      case "pointerup":
        __privateMethod$e(this, _handlePointerUp$1, handlePointerUp_fn$1).call(this, event);
        break;
      case "mouseleave":
        __privateMethod$e(this, _setInactive, setInactive_fn).call(this);
        break;
      case "mouseup":
        this.removeAttribute(Attributes$d.KEYBOARD_CONTROL);
        break;
      case "keyup":
        __privateMethod$e(this, _scheduleInactive, scheduleInactive_fn).call(this);
        this.setAttribute(Attributes$d.KEYBOARD_CONTROL, "");
        break;
    }
  }
  set autohide(seconds) {
    const parsedSeconds = Number(seconds);
    __privateSet$p(this, _autohide, isNaN(parsedSeconds) ? 0 : parsedSeconds);
  }
  get autohide() {
    return (__privateGet$t(this, _autohide) === void 0 ? 2 : __privateGet$t(this, _autohide)).toString();
  }
  get breakpoints() {
    return getStringAttr(this, Attributes$d.BREAKPOINTS);
  }
  set breakpoints(value) {
    setStringAttr(this, Attributes$d.BREAKPOINTS, value);
  }
  get audio() {
    return getBooleanAttr(this, Attributes$d.AUDIO);
  }
  set audio(value) {
    setBooleanAttr(this, Attributes$d.AUDIO, value);
  }
  get gesturesDisabled() {
    return getBooleanAttr(this, Attributes$d.GESTURES_DISABLED);
  }
  set gesturesDisabled(value) {
    setBooleanAttr(this, Attributes$d.GESTURES_DISABLED, value);
  }
  get keyboardControl() {
    return getBooleanAttr(this, Attributes$d.KEYBOARD_CONTROL);
  }
  set keyboardControl(value) {
    setBooleanAttr(this, Attributes$d.KEYBOARD_CONTROL, value);
  }
  get noAutohide() {
    return getBooleanAttr(this, Attributes$d.NO_AUTOHIDE);
  }
  set noAutohide(value) {
    setBooleanAttr(this, Attributes$d.NO_AUTOHIDE, value);
  }
  get autohideOverControls() {
    return getBooleanAttr(this, Attributes$d.AUTOHIDE_OVER_CONTROLS);
  }
  set autohideOverControls(value) {
    setBooleanAttr(this, Attributes$d.AUTOHIDE_OVER_CONTROLS, value);
  }
  get userInteractive() {
    return getBooleanAttr(this, Attributes$d.USER_INACTIVE);
  }
  set userInteractive(value) {
    setBooleanAttr(this, Attributes$d.USER_INACTIVE, value);
  }
}
_mutationObserver$1 = /* @__PURE__ */ new WeakMap();
_pointerDownTimeStamp = /* @__PURE__ */ new WeakMap();
_currentMedia = /* @__PURE__ */ new WeakMap();
_inactiveTimeout = /* @__PURE__ */ new WeakMap();
_autohide = /* @__PURE__ */ new WeakMap();
_handleMutation = /* @__PURE__ */ new WeakMap();
_isResizePending = /* @__PURE__ */ new WeakMap();
_handleResize = /* @__PURE__ */ new WeakMap();
_handlePointerMove$2 = /* @__PURE__ */ new WeakSet();
handlePointerMove_fn$2 = function(event) {
  if (event.pointerType !== "mouse") {
    const MAX_TAP_DURATION = 250;
    if (event.timeStamp - __privateGet$t(this, _pointerDownTimeStamp) < MAX_TAP_DURATION)
      return;
  }
  __privateMethod$e(this, _setActive, setActive_fn).call(this);
  clearTimeout(__privateGet$t(this, _inactiveTimeout));
  const autohideOverControls = this.hasAttribute(
    Attributes$d.AUTOHIDE_OVER_CONTROLS
  );
  if ([this, this.media].includes(event.target) || autohideOverControls) {
    __privateMethod$e(this, _scheduleInactive, scheduleInactive_fn).call(this);
  }
};
_handlePointerUp$1 = /* @__PURE__ */ new WeakSet();
handlePointerUp_fn$1 = function(event) {
  if (event.pointerType === "touch") {
    const controlsVisible = !this.hasAttribute(Attributes$d.USER_INACTIVE);
    if ([this, this.media].includes(event.target) && controlsVisible) {
      __privateMethod$e(this, _setInactive, setInactive_fn).call(this);
    } else {
      __privateMethod$e(this, _scheduleInactive, scheduleInactive_fn).call(this);
    }
  } else if (event.composedPath().some(
    (el) => ["media-play-button", "media-fullscreen-button"].includes(
      el == null ? void 0 : el.localName
    )
  )) {
    __privateMethod$e(this, _scheduleInactive, scheduleInactive_fn).call(this);
  }
};
_setInactive = /* @__PURE__ */ new WeakSet();
setInactive_fn = function() {
  if (__privateGet$t(this, _autohide) < 0)
    return;
  if (this.hasAttribute(Attributes$d.USER_INACTIVE))
    return;
  this.setAttribute(Attributes$d.USER_INACTIVE, "");
  const evt = new GlobalThis.CustomEvent(
    MediaStateChangeEvents.USER_INACTIVE_CHANGE,
    { composed: true, bubbles: true, detail: true }
  );
  this.dispatchEvent(evt);
};
_setActive = /* @__PURE__ */ new WeakSet();
setActive_fn = function() {
  if (!this.hasAttribute(Attributes$d.USER_INACTIVE))
    return;
  this.removeAttribute(Attributes$d.USER_INACTIVE);
  const evt = new GlobalThis.CustomEvent(
    MediaStateChangeEvents.USER_INACTIVE_CHANGE,
    { composed: true, bubbles: true, detail: false }
  );
  this.dispatchEvent(evt);
};
_scheduleInactive = /* @__PURE__ */ new WeakSet();
scheduleInactive_fn = function() {
  __privateMethod$e(this, _setActive, setActive_fn).call(this);
  clearTimeout(__privateGet$t(this, _inactiveTimeout));
  const autohide = parseInt(this.autohide);
  if (autohide < 0)
    return;
  __privateSet$p(this, _inactiveTimeout, setTimeout(() => {
    __privateMethod$e(this, _setInactive, setInactive_fn).call(this);
  }, autohide * 1e3));
};
_chainedSlot = /* @__PURE__ */ new WeakMap();
_handleSlotChange$2 = /* @__PURE__ */ new WeakMap();
MediaContainer.shadowRootOptions = { mode: "open" };
MediaContainer.getTemplateHTML = getTemplateHTML$g;
if (!GlobalThis.customElements.get("media-container")) {
  GlobalThis.customElements.define("media-container", MediaContainer);
}
var __accessCheck$s = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet$s = (obj, member, getter) => {
  __accessCheck$s(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$s = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$o = (obj, member, value, setter) => {
  __accessCheck$s(obj, member, "write to private field");
  member.set(obj, value);
  return value;
};
var _el, _attr, _defaultSet, _tokenSet, _tokens, tokens_get;
class AttributeTokenList {
  constructor(el, attr, { defaultValue } = { defaultValue: void 0 }) {
    __privateAdd$s(this, _tokens);
    __privateAdd$s(this, _el, void 0);
    __privateAdd$s(this, _attr, void 0);
    __privateAdd$s(this, _defaultSet, void 0);
    __privateAdd$s(this, _tokenSet, /* @__PURE__ */ new Set());
    __privateSet$o(this, _el, el);
    __privateSet$o(this, _attr, attr);
    __privateSet$o(this, _defaultSet, new Set(defaultValue));
  }
  [Symbol.iterator]() {
    return __privateGet$s(this, _tokens, tokens_get).values();
  }
  get length() {
    return __privateGet$s(this, _tokens, tokens_get).size;
  }
  get value() {
    var _a2;
    return (_a2 = [...__privateGet$s(this, _tokens, tokens_get)].join(" ")) != null ? _a2 : "";
  }
  set value(val) {
    var _a2;
    if (val === this.value)
      return;
    __privateSet$o(this, _tokenSet, /* @__PURE__ */ new Set());
    this.add(...(_a2 = val == null ? void 0 : val.split(" ")) != null ? _a2 : []);
  }
  toString() {
    return this.value;
  }
  item(index) {
    return [...__privateGet$s(this, _tokens, tokens_get)][index];
  }
  values() {
    return __privateGet$s(this, _tokens, tokens_get).values();
  }
  forEach(callback, thisArg) {
    __privateGet$s(this, _tokens, tokens_get).forEach(callback, thisArg);
  }
  add(...tokens) {
    var _a2, _b;
    tokens.forEach((t3) => __privateGet$s(this, _tokenSet).add(t3));
    if (this.value === "" && !((_a2 = __privateGet$s(this, _el)) == null ? void 0 : _a2.hasAttribute(`${__privateGet$s(this, _attr)}`))) {
      return;
    }
    (_b = __privateGet$s(this, _el)) == null ? void 0 : _b.setAttribute(`${__privateGet$s(this, _attr)}`, `${this.value}`);
  }
  remove(...tokens) {
    var _a2;
    tokens.forEach((t3) => __privateGet$s(this, _tokenSet).delete(t3));
    (_a2 = __privateGet$s(this, _el)) == null ? void 0 : _a2.setAttribute(`${__privateGet$s(this, _attr)}`, `${this.value}`);
  }
  contains(token) {
    return __privateGet$s(this, _tokens, tokens_get).has(token);
  }
  toggle(token, force) {
    if (typeof force !== "undefined") {
      if (force) {
        this.add(token);
        return true;
      } else {
        this.remove(token);
        return false;
      }
    }
    if (this.contains(token)) {
      this.remove(token);
      return false;
    }
    this.add(token);
    return true;
  }
  replace(oldToken, newToken) {
    this.remove(oldToken);
    this.add(newToken);
    return oldToken === newToken;
  }
}
_el = /* @__PURE__ */ new WeakMap();
_attr = /* @__PURE__ */ new WeakMap();
_defaultSet = /* @__PURE__ */ new WeakMap();
_tokenSet = /* @__PURE__ */ new WeakMap();
_tokens = /* @__PURE__ */ new WeakSet();
tokens_get = function() {
  return __privateGet$s(this, _tokenSet).size ? __privateGet$s(this, _tokenSet) : __privateGet$s(this, _defaultSet);
};
const splitTextTracksStr = (textTracksStr = "") => textTracksStr.split(/\s+/);
const parseTextTrackStr = (textTrackStr = "") => {
  const [kind, language, encodedLabel] = textTrackStr.split(":");
  const label = encodedLabel ? decodeURIComponent(encodedLabel) : void 0;
  return {
    kind: kind === "cc" ? TextTrackKinds.CAPTIONS : TextTrackKinds.SUBTITLES,
    language,
    label
  };
};
const parseTextTracksStr = (textTracksStr = "", textTrackLikeObj = {}) => {
  return splitTextTracksStr(textTracksStr).map((textTrackStr) => {
    const textTrackObj = parseTextTrackStr(textTrackStr);
    return {
      ...textTrackLikeObj,
      ...textTrackObj
    };
  });
};
const parseTracks = (trackOrTracks) => {
  if (!trackOrTracks)
    return [];
  if (Array.isArray(trackOrTracks)) {
    return trackOrTracks.map((trackObjOrStr) => {
      if (typeof trackObjOrStr === "string") {
        return parseTextTrackStr(trackObjOrStr);
      }
      return trackObjOrStr;
    });
  }
  if (typeof trackOrTracks === "string") {
    return parseTextTracksStr(trackOrTracks);
  }
  return [trackOrTracks];
};
const formatTextTrackObj = ({ kind, label, language } = { kind: "subtitles" }) => {
  if (!label)
    return language;
  return `${kind === "captions" ? "cc" : "sb"}:${language}:${encodeURIComponent(
    label
  )}`;
};
const stringifyTextTrackList = (textTracks = []) => {
  return Array.prototype.map.call(textTracks, formatTextTrackObj).join(" ");
};
const isMatchingPropOf = (key, value) => (obj) => obj[key] === value;
const textTrackObjAsPred = (filterObj) => {
  const preds = Object.entries(filterObj).map(([key, value]) => {
    return isMatchingPropOf(key, value);
  });
  return (textTrack) => preds.every((pred) => pred(textTrack));
};
const updateTracksModeTo = (mode, tracks = [], tracksToUpdate = []) => {
  const preds = parseTracks(tracksToUpdate).map(textTrackObjAsPred);
  const isTrackToUpdate = (textTrack) => {
    return preds.some((pred) => pred(textTrack));
  };
  Array.from(tracks).filter(isTrackToUpdate).forEach((textTrack) => {
    textTrack.mode = mode;
  });
};
const getTextTracksList = (media, filterPredOrObj = () => true) => {
  if (!(media == null ? void 0 : media.textTracks))
    return [];
  const filterPred = typeof filterPredOrObj === "function" ? filterPredOrObj : textTrackObjAsPred(filterPredOrObj);
  return Array.from(media.textTracks).filter(filterPred);
};
const areSubsOn = (el) => {
  var _a2;
  const showingSubtitles = !!((_a2 = el.mediaSubtitlesShowing) == null ? void 0 : _a2.length) || el.hasAttribute(MediaUIAttributes.MEDIA_SUBTITLES_SHOWING);
  return showingSubtitles;
};
const enterFullscreen = (stateOwners) => {
  var _a2;
  const { media, fullscreenElement } = stateOwners;
  try {
    const enterFullscreenKey = fullscreenElement && "requestFullscreen" in fullscreenElement ? "requestFullscreen" : fullscreenElement && "webkitRequestFullScreen" in fullscreenElement ? "webkitRequestFullScreen" : void 0;
    if (enterFullscreenKey) {
      const maybePromise = (_a2 = fullscreenElement[enterFullscreenKey]) == null ? void 0 : _a2.call(fullscreenElement);
      if (maybePromise instanceof Promise) {
        return maybePromise.catch(() => {
        });
      }
    } else if (media == null ? void 0 : media.webkitEnterFullscreen) {
      media.webkitEnterFullscreen();
    } else if (media == null ? void 0 : media.requestFullscreen) {
      media.requestFullscreen();
    }
  } catch (e) {
    console.error(e);
  }
};
const exitFullscreenKey = "exitFullscreen" in Document$1 ? "exitFullscreen" : "webkitExitFullscreen" in Document$1 ? "webkitExitFullscreen" : "webkitCancelFullScreen" in Document$1 ? "webkitCancelFullScreen" : void 0;
const exitFullscreen = (stateOwners) => {
  var _a2;
  const { documentElement } = stateOwners;
  if (exitFullscreenKey) {
    const maybePromise = (_a2 = documentElement == null ? void 0 : documentElement[exitFullscreenKey]) == null ? void 0 : _a2.call(documentElement);
    if (maybePromise instanceof Promise) {
      return maybePromise.catch(() => {
      });
    }
  }
};
const fullscreenElementKey = "fullscreenElement" in Document$1 ? "fullscreenElement" : "webkitFullscreenElement" in Document$1 ? "webkitFullscreenElement" : void 0;
const getFullscreenElement = (stateOwners) => {
  const { documentElement, media } = stateOwners;
  const docFullscreenElement = documentElement == null ? void 0 : documentElement[fullscreenElementKey];
  if (!docFullscreenElement && "webkitDisplayingFullscreen" in media && "webkitPresentationMode" in media && media.webkitDisplayingFullscreen && media.webkitPresentationMode === WebkitPresentationModes.FULLSCREEN) {
    return media;
  }
  return docFullscreenElement;
};
const isFullscreen = (stateOwners) => {
  var _a2;
  const { media, documentElement, fullscreenElement = media } = stateOwners;
  if (!media || !documentElement)
    return false;
  const currentFullscreenElement = getFullscreenElement(stateOwners);
  if (!currentFullscreenElement)
    return false;
  if (currentFullscreenElement === fullscreenElement || currentFullscreenElement === media) {
    return true;
  }
  if (currentFullscreenElement.localName.includes("-")) {
    let currentRoot = currentFullscreenElement.shadowRoot;
    if (!(fullscreenElementKey in currentRoot)) {
      return containsComposedNode(
        currentFullscreenElement,
        /** @TODO clean up type assumptions (e.g. Node) (CJP) */
        // @ts-ignore
        fullscreenElement
      );
    }
    while (currentRoot == null ? void 0 : currentRoot[fullscreenElementKey]) {
      if (currentRoot[fullscreenElementKey] === fullscreenElement)
        return true;
      currentRoot = (_a2 = currentRoot[fullscreenElementKey]) == null ? void 0 : _a2.shadowRoot;
    }
  }
  return false;
};
const fullscreenEnabledKey = "fullscreenEnabled" in Document$1 ? "fullscreenEnabled" : "webkitFullscreenEnabled" in Document$1 ? "webkitFullscreenEnabled" : void 0;
const isFullscreenEnabled = (stateOwners) => {
  const { documentElement, media } = stateOwners;
  return !!(documentElement == null ? void 0 : documentElement[fullscreenEnabledKey]) || media && "webkitSupportsFullscreen" in media;
};
let testMediaEl;
const getTestMediaEl = () => {
  var _a2, _b;
  if (testMediaEl)
    return testMediaEl;
  testMediaEl = (_b = (_a2 = Document$1) == null ? void 0 : _a2.createElement) == null ? void 0 : _b.call(_a2, "video");
  return testMediaEl;
};
const hasVolumeSupportAsync = async (mediaEl = getTestMediaEl()) => {
  if (!mediaEl)
    return false;
  const prevVolume = mediaEl.volume;
  mediaEl.volume = prevVolume / 2 + 0.1;
  const abortController = new AbortController();
  const volumeSupported2 = await Promise.race([
    dispatchedVolumeChange(mediaEl, abortController.signal),
    volumeChanged(mediaEl, prevVolume)
  ]);
  abortController.abort();
  return volumeSupported2;
};
const dispatchedVolumeChange = (mediaEl, signal) => {
  return new Promise((resolve) => {
    mediaEl.addEventListener("volumechange", () => resolve(true), { signal });
  });
};
const volumeChanged = async (mediaEl, prevVolume) => {
  for (let i2 = 0; i2 < 10; i2++) {
    if (mediaEl.volume === prevVolume)
      return false;
    await delay(10);
  }
  return mediaEl.volume !== prevVolume;
};
const isSafari = /.*Version\/.*Safari\/.*/.test(
  GlobalThis.navigator.userAgent
);
const hasPipSupport = (mediaEl = getTestMediaEl()) => {
  if (GlobalThis.matchMedia("(display-mode: standalone)").matches && isSafari)
    return false;
  return typeof (mediaEl == null ? void 0 : mediaEl.requestPictureInPicture) === "function";
};
const hasFullscreenSupport = (mediaEl = getTestMediaEl()) => {
  return isFullscreenEnabled({ documentElement: Document$1, media: mediaEl });
};
const fullscreenSupported = hasFullscreenSupport();
const pipSupported = hasPipSupport();
const airplaySupported = !!GlobalThis.WebKitPlaybackTargetAvailabilityEvent;
const castSupported = !!GlobalThis.chrome;
const getSubtitleTracks = (stateOwners) => {
  return getTextTracksList(stateOwners.media, (textTrack) => {
    return [TextTrackKinds.SUBTITLES, TextTrackKinds.CAPTIONS].includes(
      textTrack.kind
    );
  }).sort((a, b2) => a.kind >= b2.kind ? 1 : -1);
};
const getShowingSubtitleTracks = (stateOwners) => {
  return getTextTracksList(stateOwners.media, (textTrack) => {
    return textTrack.mode === TextTrackModes.SHOWING && [TextTrackKinds.SUBTITLES, TextTrackKinds.CAPTIONS].includes(
      textTrack.kind
    );
  });
};
const toggleSubtitleTracks = (stateOwners, force) => {
  const tracks = getSubtitleTracks(stateOwners);
  const showingSubitleTracks = getShowingSubtitleTracks(stateOwners);
  const subtitlesShowing = !!showingSubitleTracks.length;
  if (!tracks.length)
    return;
  if (force === false || subtitlesShowing && force !== true) {
    updateTracksModeTo(TextTrackModes.DISABLED, tracks, showingSubitleTracks);
  } else if (force === true || !subtitlesShowing && force !== false) {
    let subTrack = tracks[0];
    const { options } = stateOwners;
    if (!(options == null ? void 0 : options.noSubtitlesLangPref)) {
      const subtitlesPref = GlobalThis.localStorage.getItem(
        "media-chrome-pref-subtitles-lang"
      );
      const userLangPrefs = subtitlesPref ? [subtitlesPref, ...GlobalThis.navigator.languages] : GlobalThis.navigator.languages;
      const preferredAvailableSubs = tracks.filter((textTrack) => {
        return userLangPrefs.some(
          (lang) => textTrack.language.toLowerCase().startsWith(lang.split("-")[0])
        );
      }).sort((textTrackA, textTrackB) => {
        const idxA = userLangPrefs.findIndex(
          (lang) => textTrackA.language.toLowerCase().startsWith(lang.split("-")[0])
        );
        const idxB = userLangPrefs.findIndex(
          (lang) => textTrackB.language.toLowerCase().startsWith(lang.split("-")[0])
        );
        return idxA - idxB;
      });
      if (preferredAvailableSubs[0]) {
        subTrack = preferredAvailableSubs[0];
      }
    }
    const { language, label, kind } = subTrack;
    updateTracksModeTo(TextTrackModes.DISABLED, tracks, showingSubitleTracks);
    updateTracksModeTo(TextTrackModes.SHOWING, tracks, [
      { language, label, kind }
    ]);
  }
};
const areValuesEq = (x2, y2) => {
  if (x2 === y2)
    return true;
  if (x2 == null || y2 == null)
    return false;
  if (typeof x2 !== typeof y2)
    return false;
  if (typeof x2 === "number" && Number.isNaN(x2) && Number.isNaN(y2))
    return true;
  if (typeof x2 !== "object")
    return false;
  if (Array.isArray(x2))
    return areArraysEq(x2, y2);
  return Object.entries(x2).every(
    // NOTE: Checking key in y to disambiguate between between missing keys and keys whose value are undefined (CJP)
    ([key, value]) => key in y2 && areValuesEq(value, y2[key])
  );
};
const areArraysEq = (xs, ys) => {
  const xIsArray = Array.isArray(xs);
  const yIsArray = Array.isArray(ys);
  if (xIsArray !== yIsArray)
    return false;
  if (!(xIsArray || yIsArray))
    return true;
  if (xs.length !== ys.length)
    return false;
  return xs.every((x2, i2) => areValuesEq(x2, ys[i2]));
};
const StreamTypeValues = Object.values(StreamTypes);
let volumeSupported;
const volumeSupportPromise = hasVolumeSupportAsync().then((supported) => {
  volumeSupported = supported;
  return volumeSupported;
});
const prepareStateOwners = async (...stateOwners) => {
  await Promise.all(
    stateOwners.filter((x2) => x2).map(async (stateOwner) => {
      if (!("localName" in stateOwner && stateOwner instanceof GlobalThis.HTMLElement)) {
        return;
      }
      const name = stateOwner.localName;
      if (!name.includes("-"))
        return;
      const classDef = GlobalThis.customElements.get(name);
      if (classDef && stateOwner instanceof classDef)
        return;
      await GlobalThis.customElements.whenDefined(name);
      GlobalThis.customElements.upgrade(stateOwner);
    })
  );
};
const domParser = new GlobalThis.DOMParser();
const parseHtmlToText = (text) => text ? domParser.parseFromString(text, "text/html").body.textContent || text : text;
const stateMediator = {
  mediaError: {
    get(stateOwners, event) {
      const { media } = stateOwners;
      if ((event == null ? void 0 : event.type) === "playing")
        return;
      return media == null ? void 0 : media.error;
    },
    mediaEvents: ["emptied", "error", "playing"]
  },
  mediaErrorCode: {
    get(stateOwners, event) {
      var _a2;
      const { media } = stateOwners;
      if ((event == null ? void 0 : event.type) === "playing")
        return;
      return (_a2 = media == null ? void 0 : media.error) == null ? void 0 : _a2.code;
    },
    mediaEvents: ["emptied", "error", "playing"]
  },
  mediaErrorMessage: {
    get(stateOwners, event) {
      var _a2, _b;
      const { media } = stateOwners;
      if ((event == null ? void 0 : event.type) === "playing")
        return;
      return (_b = (_a2 = media == null ? void 0 : media.error) == null ? void 0 : _a2.message) != null ? _b : "";
    },
    mediaEvents: ["emptied", "error", "playing"]
  },
  mediaWidth: {
    get(stateOwners) {
      var _a2;
      const { media } = stateOwners;
      return (_a2 = media == null ? void 0 : media.videoWidth) != null ? _a2 : 0;
    },
    mediaEvents: ["resize"]
  },
  mediaHeight: {
    get(stateOwners) {
      var _a2;
      const { media } = stateOwners;
      return (_a2 = media == null ? void 0 : media.videoHeight) != null ? _a2 : 0;
    },
    mediaEvents: ["resize"]
  },
  mediaPaused: {
    get(stateOwners) {
      var _a2;
      const { media } = stateOwners;
      return (_a2 = media == null ? void 0 : media.paused) != null ? _a2 : true;
    },
    set(value, stateOwners) {
      var _a2;
      const { media } = stateOwners;
      if (!media)
        return;
      if (value) {
        media.pause();
      } else {
        (_a2 = media.play()) == null ? void 0 : _a2.catch(() => {
        });
      }
    },
    mediaEvents: ["play", "playing", "pause", "emptied"]
  },
  mediaHasPlayed: {
    // We want to let the user know that the media started playing at any point (`media-has-played`).
    // Since these propagators are all called when boostrapping state, let's verify this is
    // a real playing event by checking that 1) there's media and 2) it isn't currently paused.
    get(stateOwners, event) {
      const { media } = stateOwners;
      if (!media)
        return false;
      if (!event)
        return !media.paused;
      return event.type === "playing";
    },
    mediaEvents: ["playing", "emptied"]
  },
  mediaEnded: {
    get(stateOwners) {
      var _a2;
      const { media } = stateOwners;
      return (_a2 = media == null ? void 0 : media.ended) != null ? _a2 : false;
    },
    mediaEvents: ["seeked", "ended", "emptied"]
  },
  mediaPlaybackRate: {
    get(stateOwners) {
      var _a2;
      const { media } = stateOwners;
      return (_a2 = media == null ? void 0 : media.playbackRate) != null ? _a2 : 1;
    },
    set(value, stateOwners) {
      const { media } = stateOwners;
      if (!media)
        return;
      if (!Number.isFinite(+value))
        return;
      media.playbackRate = +value;
    },
    mediaEvents: ["ratechange", "loadstart"]
  },
  mediaMuted: {
    get(stateOwners) {
      var _a2;
      const { media } = stateOwners;
      return (_a2 = media == null ? void 0 : media.muted) != null ? _a2 : false;
    },
    set(value, stateOwners) {
      const { media, options: { noMutedPref } = {} } = stateOwners;
      if (!media)
        return;
      media.muted = value;
      try {
        const hasLocalStoragePrefMuted = GlobalThis.localStorage.getItem("media-chrome-pref-muted") !== null;
        const hasMutedAttribute = media.hasAttribute("muted");
        if (noMutedPref) {
          if (hasLocalStoragePrefMuted)
            GlobalThis.localStorage.removeItem("media-chrome-pref-muted");
          return;
        }
        if (hasMutedAttribute && !hasLocalStoragePrefMuted) {
          return;
        }
        GlobalThis.localStorage.setItem(
          "media-chrome-pref-muted",
          value ? "true" : "false"
        );
      } catch (e) {
        console.debug("Error setting muted pref", e);
      }
    },
    mediaEvents: ["volumechange"],
    stateOwnersUpdateHandlers: [
      (handler, stateOwners) => {
        const {
          options: { noMutedPref }
        } = stateOwners;
        const { media } = stateOwners;
        if (!media || media.muted || noMutedPref)
          return;
        try {
          const mutedPref = GlobalThis.localStorage.getItem("media-chrome-pref-muted") === "true";
          stateMediator.mediaMuted.set(mutedPref, stateOwners);
          handler(mutedPref);
        } catch (e) {
          console.debug("Error getting muted pref", e);
        }
      }
    ]
  },
  mediaLoop: {
    get(stateOwners) {
      const { media } = stateOwners;
      return media == null ? void 0 : media.loop;
    },
    set(value, stateOwners) {
      const { media } = stateOwners;
      if (!media)
        return;
      media.loop = value;
    },
    mediaEvents: ["medialooprequest"]
  },
  mediaVolume: {
    get(stateOwners) {
      var _a2;
      const { media } = stateOwners;
      return (_a2 = media == null ? void 0 : media.volume) != null ? _a2 : 1;
    },
    set(value, stateOwners) {
      const { media, options: { noVolumePref } = {} } = stateOwners;
      if (!media)
        return;
      try {
        if (value == null) {
          GlobalThis.localStorage.removeItem("media-chrome-pref-volume");
        } else if (!media.hasAttribute("muted") && !noVolumePref) {
          GlobalThis.localStorage.setItem(
            "media-chrome-pref-volume",
            value.toString()
          );
        }
      } catch (e) {
        console.debug("Error setting volume pref", e);
      }
      if (!Number.isFinite(+value))
        return;
      media.volume = +value;
    },
    mediaEvents: ["volumechange"],
    stateOwnersUpdateHandlers: [
      (handler, stateOwners) => {
        const {
          options: { noVolumePref }
        } = stateOwners;
        if (noVolumePref)
          return;
        try {
          const { media } = stateOwners;
          if (!media)
            return;
          const volumePref = GlobalThis.localStorage.getItem(
            "media-chrome-pref-volume"
          );
          if (volumePref == null)
            return;
          stateMediator.mediaVolume.set(+volumePref, stateOwners);
          handler(+volumePref);
        } catch (e) {
          console.debug("Error getting volume pref", e);
        }
      }
    ]
  },
  // NOTE: Keeping this roughly equivalent to prior impl to reduce number of changes,
  // however we may want to model "derived" state differently from "primary" state
  // (in this case, derived === mediaVolumeLevel, primary === mediaMuted, mediaVolume) (CJP)
  mediaVolumeLevel: {
    get(stateOwners) {
      const { media } = stateOwners;
      if (typeof (media == null ? void 0 : media.volume) == "undefined")
        return "high";
      if (media.muted || media.volume === 0)
        return "off";
      if (media.volume < 0.5)
        return "low";
      if (media.volume < 0.75)
        return "medium";
      return "high";
    },
    mediaEvents: ["volumechange"]
  },
  mediaCurrentTime: {
    get(stateOwners) {
      var _a2;
      const { media } = stateOwners;
      return (_a2 = media == null ? void 0 : media.currentTime) != null ? _a2 : 0;
    },
    set(value, stateOwners) {
      const { media } = stateOwners;
      if (!media || !isValidNumber(value))
        return;
      media.currentTime = value;
    },
    mediaEvents: ["timeupdate", "loadedmetadata"]
  },
  mediaDuration: {
    get(stateOwners) {
      const { media, options: { defaultDuration } = {} } = stateOwners;
      if (defaultDuration && (!media || !media.duration || Number.isNaN(media.duration) || !Number.isFinite(media.duration))) {
        return defaultDuration;
      }
      return Number.isFinite(media == null ? void 0 : media.duration) ? media.duration : Number.NaN;
    },
    mediaEvents: ["durationchange", "loadedmetadata", "emptied"]
  },
  mediaLoading: {
    get(stateOwners) {
      const { media } = stateOwners;
      return (media == null ? void 0 : media.readyState) < 3;
    },
    mediaEvents: ["waiting", "playing", "emptied"]
  },
  mediaSeekable: {
    get(stateOwners) {
      var _a2;
      const { media } = stateOwners;
      if (!((_a2 = media == null ? void 0 : media.seekable) == null ? void 0 : _a2.length))
        return void 0;
      const start = media.seekable.start(0);
      const end = media.seekable.end(media.seekable.length - 1);
      if (!start && !end)
        return void 0;
      return [Number(start.toFixed(3)), Number(end.toFixed(3))];
    },
    mediaEvents: ["loadedmetadata", "emptied", "progress", "seekablechange"]
  },
  mediaBuffered: {
    get(stateOwners) {
      var _a2;
      const { media } = stateOwners;
      const timeRanges = (_a2 = media == null ? void 0 : media.buffered) != null ? _a2 : [];
      return Array.from(timeRanges).map((_3, i2) => [
        Number(timeRanges.start(i2).toFixed(3)),
        Number(timeRanges.end(i2).toFixed(3))
      ]);
    },
    mediaEvents: ["progress", "emptied"]
  },
  mediaStreamType: {
    get(stateOwners) {
      const { media, options: { defaultStreamType } = {} } = stateOwners;
      const usedDefaultStreamType = [
        StreamTypes.LIVE,
        StreamTypes.ON_DEMAND
      ].includes(defaultStreamType) ? defaultStreamType : void 0;
      if (!media)
        return usedDefaultStreamType;
      const { streamType } = media;
      if (StreamTypeValues.includes(streamType)) {
        if (streamType === StreamTypes.UNKNOWN) {
          return usedDefaultStreamType;
        }
        return streamType;
      }
      const duration = media.duration;
      if (duration === Infinity) {
        return StreamTypes.LIVE;
      } else if (Number.isFinite(duration)) {
        return StreamTypes.ON_DEMAND;
      }
      return usedDefaultStreamType;
    },
    mediaEvents: [
      "emptied",
      "durationchange",
      "loadedmetadata",
      "streamtypechange"
    ]
  },
  mediaTargetLiveWindow: {
    get(stateOwners) {
      const { media } = stateOwners;
      if (!media)
        return Number.NaN;
      const { targetLiveWindow } = media;
      const streamType = stateMediator.mediaStreamType.get(stateOwners);
      if ((targetLiveWindow == null || Number.isNaN(targetLiveWindow)) && streamType === StreamTypes.LIVE) {
        return 0;
      }
      return targetLiveWindow;
    },
    mediaEvents: [
      "emptied",
      "durationchange",
      "loadedmetadata",
      "streamtypechange",
      "targetlivewindowchange"
    ]
  },
  mediaTimeIsLive: {
    get(stateOwners) {
      const {
        media,
        // Default to 10 seconds
        options: { liveEdgeOffset = 10 } = {}
      } = stateOwners;
      if (!media)
        return false;
      if (typeof media.liveEdgeStart === "number") {
        if (Number.isNaN(media.liveEdgeStart))
          return false;
        return media.currentTime >= media.liveEdgeStart;
      }
      const live = stateMediator.mediaStreamType.get(stateOwners) === StreamTypes.LIVE;
      if (!live)
        return false;
      const seekable = media.seekable;
      if (!seekable)
        return true;
      if (!seekable.length)
        return false;
      const liveEdgeStart = seekable.end(seekable.length - 1) - liveEdgeOffset;
      return media.currentTime >= liveEdgeStart;
    },
    mediaEvents: ["playing", "timeupdate", "progress", "waiting", "emptied"]
  },
  // Text Tracks modeling
  mediaSubtitlesList: {
    get(stateOwners) {
      return getSubtitleTracks(stateOwners).map(
        ({ kind, label, language }) => ({ kind, label, language })
      );
    },
    mediaEvents: ["loadstart"],
    textTracksEvents: ["addtrack", "removetrack"]
  },
  mediaSubtitlesShowing: {
    get(stateOwners) {
      return getShowingSubtitleTracks(stateOwners).map(
        ({ kind, label, language }) => ({ kind, label, language })
      );
    },
    mediaEvents: ["loadstart"],
    textTracksEvents: ["addtrack", "removetrack", "change"],
    stateOwnersUpdateHandlers: [
      (_handler, stateOwners) => {
        var _a2, _b;
        const { media, options } = stateOwners;
        if (!media)
          return;
        const updateDefaultSubtitlesCallback = (event) => {
          var _a22;
          if (!options.defaultSubtitles)
            return;
          const nonSubsEvent = event && ![TextTrackKinds.CAPTIONS, TextTrackKinds.SUBTITLES].includes(
            // @ts-ignore
            (_a22 = event == null ? void 0 : event.track) == null ? void 0 : _a22.kind
          );
          if (nonSubsEvent)
            return;
          toggleSubtitleTracks(stateOwners, true);
        };
        media.addEventListener(
          "loadstart",
          updateDefaultSubtitlesCallback
        );
        (_a2 = media.textTracks) == null ? void 0 : _a2.addEventListener(
          "addtrack",
          updateDefaultSubtitlesCallback
        );
        (_b = media.textTracks) == null ? void 0 : _b.addEventListener(
          "removetrack",
          updateDefaultSubtitlesCallback
        );
        return () => {
          var _a22, _b2;
          media.removeEventListener(
            "loadstart",
            updateDefaultSubtitlesCallback
          );
          (_a22 = media.textTracks) == null ? void 0 : _a22.removeEventListener(
            "addtrack",
            updateDefaultSubtitlesCallback
          );
          (_b2 = media.textTracks) == null ? void 0 : _b2.removeEventListener(
            "removetrack",
            updateDefaultSubtitlesCallback
          );
        };
      }
    ]
  },
  mediaChaptersCues: {
    get(stateOwners) {
      var _a2;
      const { media } = stateOwners;
      if (!media)
        return [];
      const [chaptersTrack] = getTextTracksList(media, {
        kind: TextTrackKinds.CHAPTERS
      });
      return Array.from((_a2 = chaptersTrack == null ? void 0 : chaptersTrack.cues) != null ? _a2 : []).map(
        ({ text, startTime, endTime }) => ({
          text: parseHtmlToText(text),
          startTime,
          endTime
        })
      );
    },
    mediaEvents: ["loadstart", "loadedmetadata"],
    textTracksEvents: ["addtrack", "removetrack", "change"],
    stateOwnersUpdateHandlers: [
      (handler, stateOwners) => {
        var _a2;
        const { media } = stateOwners;
        if (!media)
          return;
        const chaptersTrack = media.querySelector(
          'track[kind="chapters"][default][src]'
        );
        const shadowChaptersTrack = (_a2 = media.shadowRoot) == null ? void 0 : _a2.querySelector(
          ':is(video,audio) > track[kind="chapters"][default][src]'
        );
        chaptersTrack == null ? void 0 : chaptersTrack.addEventListener("load", handler);
        shadowChaptersTrack == null ? void 0 : shadowChaptersTrack.addEventListener("load", handler);
        return () => {
          chaptersTrack == null ? void 0 : chaptersTrack.removeEventListener("load", handler);
          shadowChaptersTrack == null ? void 0 : shadowChaptersTrack.removeEventListener("load", handler);
        };
      }
    ]
  },
  // Modeling state tied to root node
  mediaIsPip: {
    get(stateOwners) {
      var _a2, _b;
      const { media, documentElement } = stateOwners;
      if (!media || !documentElement)
        return false;
      if (!documentElement.pictureInPictureElement)
        return false;
      if (documentElement.pictureInPictureElement === media)
        return true;
      if (documentElement.pictureInPictureElement instanceof HTMLMediaElement) {
        if (!((_a2 = media.localName) == null ? void 0 : _a2.includes("-")))
          return false;
        return containsComposedNode(
          media,
          documentElement.pictureInPictureElement
        );
      }
      if (documentElement.pictureInPictureElement.localName.includes("-")) {
        let currentRoot = documentElement.pictureInPictureElement.shadowRoot;
        while (currentRoot == null ? void 0 : currentRoot.pictureInPictureElement) {
          if (currentRoot.pictureInPictureElement === media)
            return true;
          currentRoot = (_b = currentRoot.pictureInPictureElement) == null ? void 0 : _b.shadowRoot;
        }
      }
      return false;
    },
    set(value, stateOwners) {
      const { media } = stateOwners;
      if (!media)
        return;
      if (value) {
        if (!Document$1.pictureInPictureEnabled) {
          console.warn("MediaChrome: Picture-in-picture is not enabled");
          return;
        }
        if (!media.requestPictureInPicture) {
          console.warn(
            "MediaChrome: The current media does not support picture-in-picture"
          );
          return;
        }
        const warnNotReady = () => {
          console.warn(
            "MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0."
          );
        };
        media.requestPictureInPicture().catch((err) => {
          if (err.code === 11) {
            if (!media.src) {
              console.warn(
                "MediaChrome: The media is not ready for picture-in-picture. It must have a src set."
              );
              return;
            }
            if (media.readyState === 0 && media.preload === "none") {
              const cleanup = () => {
                media.removeEventListener("loadedmetadata", tryPip);
                media.preload = "none";
              };
              const tryPip = () => {
                media.requestPictureInPicture().catch(warnNotReady);
                cleanup();
              };
              media.addEventListener("loadedmetadata", tryPip);
              media.preload = "metadata";
              setTimeout(() => {
                if (media.readyState === 0)
                  warnNotReady();
                cleanup();
              }, 1e3);
            } else {
              throw err;
            }
          } else {
            throw err;
          }
        });
      } else if (Document$1.pictureInPictureElement) {
        Document$1.exitPictureInPicture();
      }
    },
    mediaEvents: ["enterpictureinpicture", "leavepictureinpicture"]
  },
  mediaRenditionList: {
    get(stateOwners) {
      var _a2;
      const { media } = stateOwners;
      return [...(_a2 = media == null ? void 0 : media.videoRenditions) != null ? _a2 : []].map((videoRendition) => ({
        ...videoRendition
      }));
    },
    mediaEvents: ["emptied", "loadstart"],
    videoRenditionsEvents: ["addrendition", "removerendition"]
  },
  /** @TODO Model this as a derived value? (CJP) */
  mediaRenditionSelected: {
    get(stateOwners) {
      var _a2, _b, _c;
      const { media } = stateOwners;
      return (_c = (_b = media == null ? void 0 : media.videoRenditions) == null ? void 0 : _b[(_a2 = media.videoRenditions) == null ? void 0 : _a2.selectedIndex]) == null ? void 0 : _c.id;
    },
    set(value, stateOwners) {
      const { media } = stateOwners;
      if (!(media == null ? void 0 : media.videoRenditions)) {
        console.warn(
          "MediaController: Rendition selection not supported by this media."
        );
        return;
      }
      const renditionId = value;
      const index = Array.prototype.findIndex.call(
        media.videoRenditions,
        (r11) => r11.id == renditionId
      );
      if (media.videoRenditions.selectedIndex != index) {
        media.videoRenditions.selectedIndex = index;
      }
    },
    mediaEvents: ["emptied"],
    videoRenditionsEvents: ["addrendition", "removerendition", "change"]
  },
  mediaAudioTrackList: {
    get(stateOwners) {
      var _a2;
      const { media } = stateOwners;
      return [...(_a2 = media == null ? void 0 : media.audioTracks) != null ? _a2 : []];
    },
    mediaEvents: ["emptied", "loadstart"],
    audioTracksEvents: ["addtrack", "removetrack"]
  },
  mediaAudioTrackEnabled: {
    get(stateOwners) {
      var _a2, _b;
      const { media } = stateOwners;
      return (_b = [...(_a2 = media == null ? void 0 : media.audioTracks) != null ? _a2 : []].find(
        (audioTrack) => audioTrack.enabled
      )) == null ? void 0 : _b.id;
    },
    set(value, stateOwners) {
      const { media } = stateOwners;
      if (!(media == null ? void 0 : media.audioTracks)) {
        console.warn(
          "MediaChrome: Audio track selection not supported by this media."
        );
        return;
      }
      const audioTrackId = value;
      for (const track of media.audioTracks) {
        track.enabled = audioTrackId == track.id;
      }
    },
    mediaEvents: ["emptied"],
    audioTracksEvents: ["addtrack", "removetrack", "change"]
  },
  mediaIsFullscreen: {
    get(stateOwners) {
      return isFullscreen(stateOwners);
    },
    set(value, stateOwners, event) {
      var _a2, _b;
      if (!value) {
        exitFullscreen(stateOwners);
      } else {
        enterFullscreen(stateOwners);
        const isPointer = event.detail;
        if (isPointer && !((_a2 = stateOwners.media) == null ? void 0 : _a2.inert))
          (_b = stateOwners.media) == null ? void 0 : _b.focus();
      }
    },
    // older Safari version may require webkit-specific events
    rootEvents: ["fullscreenchange", "webkitfullscreenchange"],
    // iOS requires webkit-specific events on the video.
    mediaEvents: [
      "webkitbeginfullscreen",
      "webkitendfullscreen",
      "webkitpresentationmodechanged"
    ]
  },
  mediaIsCasting: {
    // Note this relies on a customized castable-video element.
    get(stateOwners) {
      var _a2;
      const { media } = stateOwners;
      if (!(media == null ? void 0 : media.remote) || ((_a2 = media.remote) == null ? void 0 : _a2.state) === "disconnected")
        return false;
      return media.remote.state === "connected";
    },
    set(value, stateOwners) {
      var _a2, _b;
      const { media } = stateOwners;
      if (!media)
        return;
      if (value && ((_a2 = media.remote) == null ? void 0 : _a2.state) !== "disconnected")
        return;
      if (!value && ((_b = media.remote) == null ? void 0 : _b.state) !== "connected")
        return;
      if (typeof media.remote.prompt !== "function") {
        console.warn(
          "MediaChrome: Casting is not supported in this environment"
        );
        return;
      }
      media.remote.prompt().catch(() => {
      });
    },
    remoteEvents: ["connect", "connecting", "disconnect"]
  },
  // NOTE: Newly added state for tracking airplaying
  mediaIsAirplaying: {
    // NOTE: Cannot know if airplaying since Safari doesn't fully support HTMLMediaElement::remote yet (e.g. remote::state) (CJP)
    get() {
      return false;
    },
    set(_value2, stateOwners) {
      const { media } = stateOwners;
      if (!media)
        return;
      if (!(media.webkitShowPlaybackTargetPicker && GlobalThis.WebKitPlaybackTargetAvailabilityEvent)) {
        console.error(
          "MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment"
        );
        return;
      }
      media.webkitShowPlaybackTargetPicker();
    },
    mediaEvents: ["webkitcurrentplaybacktargetiswirelesschanged"]
  },
  mediaFullscreenUnavailable: {
    get(stateOwners) {
      const { media } = stateOwners;
      if (!fullscreenSupported || !hasFullscreenSupport(media))
        return AvailabilityStates.UNSUPPORTED;
      return void 0;
    }
  },
  mediaPipUnavailable: {
    get(stateOwners) {
      const { media } = stateOwners;
      if (!pipSupported || !hasPipSupport(media))
        return AvailabilityStates.UNSUPPORTED;
      else if (media == null ? void 0 : media.disablePictureInPicture)
        return AvailabilityStates.UNAVAILABLE;
      return void 0;
    }
  },
  mediaVolumeUnavailable: {
    get(stateOwners) {
      const { media } = stateOwners;
      if (volumeSupported === false || (media == null ? void 0 : media.volume) == void 0) {
        return AvailabilityStates.UNSUPPORTED;
      }
      return void 0;
    },
    // NOTE: Slightly different impl here. Added generic support for
    // "stateOwnersUpdateHandlers" since the original impl had to hack around
    // race conditions. (CJP)
    stateOwnersUpdateHandlers: [
      (handler) => {
        if (volumeSupported == null) {
          volumeSupportPromise.then(
            (supported) => handler(supported ? void 0 : AvailabilityStates.UNSUPPORTED)
          );
        }
      }
    ]
  },
  mediaCastUnavailable: {
    // @ts-ignore
    get(stateOwners, { availability = "not-available" } = {}) {
      var _a2;
      const { media } = stateOwners;
      if (!castSupported || !((_a2 = media == null ? void 0 : media.remote) == null ? void 0 : _a2.state)) {
        return AvailabilityStates.UNSUPPORTED;
      }
      if (availability == null || availability === "available")
        return void 0;
      return AvailabilityStates.UNAVAILABLE;
    },
    stateOwnersUpdateHandlers: [
      (handler, stateOwners) => {
        var _a2;
        const { media } = stateOwners;
        if (!media)
          return;
        const remotePlaybackDisabled = media.disableRemotePlayback || media.hasAttribute("disableremoteplayback");
        if (!remotePlaybackDisabled) {
          (_a2 = media == null ? void 0 : media.remote) == null ? void 0 : _a2.watchAvailability((availabilityBool) => {
            const availability = availabilityBool ? "available" : "not-available";
            handler({ availability });
          }).catch((error) => {
            if (error.name === "NotSupportedError") {
              handler({ availability: null });
            } else {
              handler({ availability: "not-available" });
            }
          });
        }
        return () => {
          var _a22;
          (_a22 = media == null ? void 0 : media.remote) == null ? void 0 : _a22.cancelWatchAvailability().catch(() => {
          });
        };
      }
    ]
  },
  mediaAirplayUnavailable: {
    get(_stateOwners, event) {
      if (!airplaySupported)
        return AvailabilityStates.UNSUPPORTED;
      if ((event == null ? void 0 : event.availability) === "not-available") {
        return AvailabilityStates.UNAVAILABLE;
      }
      return void 0;
    },
    // NOTE: Keeping this event, as it's still the documented way of monitoring
    // for AirPlay availability from Apple.
    // See: https://developer.apple.com/documentation/webkitjs/adding_an_airplay_button_to_your_safari_media_controls#2940021 (CJP)
    mediaEvents: ["webkitplaybacktargetavailabilitychanged"],
    stateOwnersUpdateHandlers: [
      (handler, stateOwners) => {
        var _a2;
        const { media } = stateOwners;
        if (!media)
          return;
        const remotePlaybackDisabled = media.disableRemotePlayback || media.hasAttribute("disableremoteplayback");
        if (!remotePlaybackDisabled) {
          (_a2 = media == null ? void 0 : media.remote) == null ? void 0 : _a2.watchAvailability((availabilityBool) => {
            const availability = availabilityBool ? "available" : "not-available";
            handler({ availability });
          }).catch((error) => {
            if (error.name === "NotSupportedError") {
              handler({ availability: null });
            } else {
              handler({ availability: "not-available" });
            }
          });
        }
        return () => {
          var _a22;
          (_a22 = media == null ? void 0 : media.remote) == null ? void 0 : _a22.cancelWatchAvailability().catch(() => {
          });
        };
      }
    ]
  },
  mediaRenditionUnavailable: {
    get(stateOwners) {
      var _a2;
      const { media } = stateOwners;
      if (!(media == null ? void 0 : media.videoRenditions)) {
        return AvailabilityStates.UNSUPPORTED;
      }
      if (!((_a2 = media.videoRenditions) == null ? void 0 : _a2.length)) {
        return AvailabilityStates.UNAVAILABLE;
      }
      return void 0;
    },
    mediaEvents: ["emptied", "loadstart"],
    videoRenditionsEvents: ["addrendition", "removerendition"]
  },
  mediaAudioTrackUnavailable: {
    get(stateOwners) {
      var _a2, _b;
      const { media } = stateOwners;
      if (!(media == null ? void 0 : media.audioTracks)) {
        return AvailabilityStates.UNSUPPORTED;
      }
      if (((_b = (_a2 = media.audioTracks) == null ? void 0 : _a2.length) != null ? _b : 0) <= 1) {
        return AvailabilityStates.UNAVAILABLE;
      }
      return void 0;
    },
    mediaEvents: ["emptied", "loadstart"],
    audioTracksEvents: ["addtrack", "removetrack"]
  },
  mediaLang: {
    get(stateOwners) {
      const { options: { mediaLang } = {} } = stateOwners;
      return mediaLang != null ? mediaLang : "en";
    }
  }
};
const requestMap = {
  /**
   * @TODO Consider adding state to `StateMediator` for e.g. `mediaThumbnailCues` and use that for derived state here (CJP)
   */
  [MediaUIEvents.MEDIA_PREVIEW_REQUEST](stateMediator2, stateOwners, { detail }) {
    var _a2, _b, _c;
    const { media } = stateOwners;
    const mediaPreviewTime = detail != null ? detail : void 0;
    let mediaPreviewImage = void 0;
    let mediaPreviewCoords = void 0;
    if (media && mediaPreviewTime != null) {
      const [track] = getTextTracksList(media, {
        kind: TextTrackKinds.METADATA,
        label: "thumbnails"
      });
      const cue = Array.prototype.find.call((_a2 = track == null ? void 0 : track.cues) != null ? _a2 : [], (c2, i2, cs) => {
        if (i2 === 0)
          return c2.endTime > mediaPreviewTime;
        if (i2 === cs.length - 1)
          return c2.startTime <= mediaPreviewTime;
        return c2.startTime <= mediaPreviewTime && c2.endTime > mediaPreviewTime;
      });
      if (cue) {
        const base = !/'^(?:[a-z]+:)?\/\//i.test(cue.text) ? (_b = media == null ? void 0 : media.querySelector(
          'track[label="thumbnails"]'
        )) == null ? void 0 : _b.src : void 0;
        const url = new URL(cue.text, base);
        const previewCoordsStr = new URLSearchParams(url.hash).get("#xywh");
        mediaPreviewCoords = previewCoordsStr.split(",").map((numStr) => +numStr);
        mediaPreviewImage = url.href;
      }
    }
    const mediaDuration = stateMediator2.mediaDuration.get(stateOwners);
    const mediaChaptersCues = stateMediator2.mediaChaptersCues.get(stateOwners);
    let mediaPreviewChapter = (_c = mediaChaptersCues.find((c2, i2, cs) => {
      if (i2 === cs.length - 1 && mediaDuration === c2.endTime) {
        return c2.startTime <= mediaPreviewTime && c2.endTime >= mediaPreviewTime;
      }
      return c2.startTime <= mediaPreviewTime && c2.endTime > mediaPreviewTime;
    })) == null ? void 0 : _c.text;
    if (detail != null && mediaPreviewChapter == null) {
      mediaPreviewChapter = "";
    }
    return {
      mediaPreviewTime,
      mediaPreviewImage,
      mediaPreviewCoords,
      mediaPreviewChapter
    };
  },
  [MediaUIEvents.MEDIA_PAUSE_REQUEST](stateMediator2, stateOwners) {
    const key = "mediaPaused";
    const value = true;
    stateMediator2[key].set(value, stateOwners);
  },
  [MediaUIEvents.MEDIA_PLAY_REQUEST](stateMediator2, stateOwners) {
    var _a2, _b, _c, _d;
    const key = "mediaPaused";
    const value = false;
    const isLive = stateMediator2.mediaStreamType.get(stateOwners) === StreamTypes.LIVE;
    const canAutoSeekToLive = !((_a2 = stateOwners.options) == null ? void 0 : _a2.noAutoSeekToLive);
    const isDVR = stateMediator2.mediaTargetLiveWindow.get(stateOwners) > 0;
    if (isLive && canAutoSeekToLive && !isDVR) {
      const seekableEnd = (_b = stateMediator2.mediaSeekable.get(stateOwners)) == null ? void 0 : _b[1];
      if (seekableEnd) {
        const seekToLiveOffset = (_d = (_c = stateOwners.options) == null ? void 0 : _c.seekToLiveOffset) != null ? _d : 0;
        const liveEdgeTime = seekableEnd - seekToLiveOffset;
        stateMediator2.mediaCurrentTime.set(liveEdgeTime, stateOwners);
      }
    }
    stateMediator2[key].set(value, stateOwners);
  },
  [MediaUIEvents.MEDIA_PLAYBACK_RATE_REQUEST](stateMediator2, stateOwners, { detail }) {
    const key = "mediaPlaybackRate";
    const value = detail;
    stateMediator2[key].set(value, stateOwners);
  },
  [MediaUIEvents.MEDIA_MUTE_REQUEST](stateMediator2, stateOwners) {
    const key = "mediaMuted";
    const value = true;
    stateMediator2[key].set(value, stateOwners);
  },
  [MediaUIEvents.MEDIA_UNMUTE_REQUEST](stateMediator2, stateOwners) {
    const key = "mediaMuted";
    const value = false;
    if (!stateMediator2.mediaVolume.get(stateOwners)) {
      stateMediator2.mediaVolume.set(0.25, stateOwners);
    }
    stateMediator2[key].set(value, stateOwners);
  },
  [MediaUIEvents.MEDIA_LOOP_REQUEST](stateMediator2, stateOwners, { detail }) {
    const key = "mediaLoop";
    const value = !!detail;
    stateMediator2[key].set(value, stateOwners);
    return { mediaLoop: value };
  },
  [MediaUIEvents.MEDIA_VOLUME_REQUEST](stateMediator2, stateOwners, { detail }) {
    const key = "mediaVolume";
    const value = detail;
    if (value && stateMediator2.mediaMuted.get(stateOwners)) {
      stateMediator2.mediaMuted.set(false, stateOwners);
    }
    stateMediator2[key].set(value, stateOwners);
  },
  [MediaUIEvents.MEDIA_SEEK_REQUEST](stateMediator2, stateOwners, { detail }) {
    const key = "mediaCurrentTime";
    const value = detail;
    stateMediator2[key].set(value, stateOwners);
  },
  [MediaUIEvents.MEDIA_SEEK_TO_LIVE_REQUEST](stateMediator2, stateOwners) {
    var _a2, _b, _c;
    const key = "mediaCurrentTime";
    const seekableEnd = (_a2 = stateMediator2.mediaSeekable.get(stateOwners)) == null ? void 0 : _a2[1];
    if (Number.isNaN(Number(seekableEnd)))
      return;
    const seekToLiveOffset = (_c = (_b = stateOwners.options) == null ? void 0 : _b.seekToLiveOffset) != null ? _c : 0;
    const value = seekableEnd - seekToLiveOffset;
    stateMediator2[key].set(value, stateOwners);
  },
  // Text Tracks state change requests
  [MediaUIEvents.MEDIA_SHOW_SUBTITLES_REQUEST](_stateMediator, stateOwners, { detail }) {
    var _a2;
    const { options } = stateOwners;
    const tracks = getSubtitleTracks(stateOwners);
    const tracksToUpdate = parseTracks(detail);
    const preferredLanguage = (_a2 = tracksToUpdate[0]) == null ? void 0 : _a2.language;
    if (preferredLanguage && !options.noSubtitlesLangPref) {
      GlobalThis.localStorage.setItem(
        "media-chrome-pref-subtitles-lang",
        preferredLanguage
      );
    }
    updateTracksModeTo(TextTrackModes.SHOWING, tracks, tracksToUpdate);
  },
  [MediaUIEvents.MEDIA_DISABLE_SUBTITLES_REQUEST](_stateMediator, stateOwners, { detail }) {
    const tracks = getSubtitleTracks(stateOwners);
    const tracksToUpdate = detail != null ? detail : [];
    updateTracksModeTo(TextTrackModes.DISABLED, tracks, tracksToUpdate);
  },
  [MediaUIEvents.MEDIA_TOGGLE_SUBTITLES_REQUEST](_stateMediator, stateOwners, { detail }) {
    toggleSubtitleTracks(stateOwners, detail);
  },
  // Renditions/Tracks state change requests
  [MediaUIEvents.MEDIA_RENDITION_REQUEST](stateMediator2, stateOwners, { detail }) {
    const key = "mediaRenditionSelected";
    const value = detail;
    stateMediator2[key].set(value, stateOwners);
  },
  [MediaUIEvents.MEDIA_AUDIO_TRACK_REQUEST](stateMediator2, stateOwners, { detail }) {
    const key = "mediaAudioTrackEnabled";
    const value = detail;
    stateMediator2[key].set(value, stateOwners);
  },
  // State change requests dependent on root node
  [MediaUIEvents.MEDIA_ENTER_PIP_REQUEST](stateMediator2, stateOwners) {
    const key = "mediaIsPip";
    const value = true;
    if (stateMediator2.mediaIsFullscreen.get(stateOwners)) {
      stateMediator2.mediaIsFullscreen.set(false, stateOwners);
    }
    stateMediator2[key].set(value, stateOwners);
  },
  [MediaUIEvents.MEDIA_EXIT_PIP_REQUEST](stateMediator2, stateOwners) {
    const key = "mediaIsPip";
    const value = false;
    stateMediator2[key].set(value, stateOwners);
  },
  [MediaUIEvents.MEDIA_ENTER_FULLSCREEN_REQUEST](stateMediator2, stateOwners, event) {
    const key = "mediaIsFullscreen";
    const value = true;
    if (stateMediator2.mediaIsPip.get(stateOwners)) {
      stateMediator2.mediaIsPip.set(false, stateOwners);
    }
    stateMediator2[key].set(value, stateOwners, event);
  },
  [MediaUIEvents.MEDIA_EXIT_FULLSCREEN_REQUEST](stateMediator2, stateOwners) {
    const key = "mediaIsFullscreen";
    const value = false;
    stateMediator2[key].set(value, stateOwners);
  },
  [MediaUIEvents.MEDIA_ENTER_CAST_REQUEST](stateMediator2, stateOwners) {
    const key = "mediaIsCasting";
    const value = true;
    if (stateMediator2.mediaIsFullscreen.get(stateOwners)) {
      stateMediator2.mediaIsFullscreen.set(false, stateOwners);
    }
    stateMediator2[key].set(value, stateOwners);
  },
  [MediaUIEvents.MEDIA_EXIT_CAST_REQUEST](stateMediator2, stateOwners) {
    const key = "mediaIsCasting";
    const value = false;
    stateMediator2[key].set(value, stateOwners);
  },
  [MediaUIEvents.MEDIA_AIRPLAY_REQUEST](stateMediator2, stateOwners) {
    const key = "mediaIsAirplaying";
    const value = true;
    stateMediator2[key].set(value, stateOwners);
  }
};
const createMediaStore = ({
  media,
  fullscreenElement,
  documentElement,
  stateMediator: stateMediator$1 = stateMediator,
  requestMap: requestMap$1 = requestMap,
  options = {},
  monitorStateOwnersOnlyWithSubscriptions = true
}) => {
  const callbacks = [];
  const stateOwners = {
    // Spreading options here since folks should not rely on holding onto references
    // for any app-level logic wrt options.
    options: { ...options }
  };
  let state = Object.freeze({
    mediaPreviewTime: void 0,
    mediaPreviewImage: void 0,
    mediaPreviewCoords: void 0,
    mediaPreviewChapter: void 0
  });
  const updateState = (nextStateDelta) => {
    if (nextStateDelta == void 0)
      return;
    if (areValuesEq(nextStateDelta, state)) {
      return;
    }
    state = Object.freeze({
      ...state,
      ...nextStateDelta
    });
    callbacks.forEach((cb) => cb(state));
  };
  const updateStateFromFacade = () => {
    const nextState = Object.entries(stateMediator$1).reduce(
      (nextState2, [stateName, { get }]) => {
        nextState2[stateName] = get(stateOwners);
        return nextState2;
      },
      {}
    );
    updateState(nextState);
  };
  const stateUpdateHandlers = {};
  let nextStateOwners = void 0;
  const updateStateOwners = async (nextStateOwnersDelta, nextSubscriberCount) => {
    var _a2, _b, _c, _d, _e2, _f, _g, _h, _i2, _j, _k, _l, _m, _n2, _o, _p;
    const pendingUpdate = !!nextStateOwners;
    nextStateOwners = {
      ...stateOwners,
      ...nextStateOwners != null ? nextStateOwners : {},
      ...nextStateOwnersDelta
    };
    if (pendingUpdate)
      return;
    await prepareStateOwners(...Object.values(nextStateOwnersDelta));
    const shouldTeardownFromSubscriberCount = callbacks.length > 0 && nextSubscriberCount === 0 && monitorStateOwnersOnlyWithSubscriptions;
    const mediaChanged = stateOwners.media !== nextStateOwners.media;
    const textTracksChanged = ((_a2 = stateOwners.media) == null ? void 0 : _a2.textTracks) !== ((_b = nextStateOwners.media) == null ? void 0 : _b.textTracks);
    const videoRenditionsChanged = ((_c = stateOwners.media) == null ? void 0 : _c.videoRenditions) !== ((_d = nextStateOwners.media) == null ? void 0 : _d.videoRenditions);
    const audioTracksChanged = ((_e2 = stateOwners.media) == null ? void 0 : _e2.audioTracks) !== ((_f = nextStateOwners.media) == null ? void 0 : _f.audioTracks);
    const remoteChanged = ((_g = stateOwners.media) == null ? void 0 : _g.remote) !== ((_h = nextStateOwners.media) == null ? void 0 : _h.remote);
    const rootNodeChanged = stateOwners.documentElement !== nextStateOwners.documentElement;
    const teardownMedia = !!stateOwners.media && (mediaChanged || shouldTeardownFromSubscriberCount);
    const teardownTextTracks = !!((_i2 = stateOwners.media) == null ? void 0 : _i2.textTracks) && (textTracksChanged || shouldTeardownFromSubscriberCount);
    const teardownVideoRenditions = !!((_j = stateOwners.media) == null ? void 0 : _j.videoRenditions) && (videoRenditionsChanged || shouldTeardownFromSubscriberCount);
    const teardownAudioTracks = !!((_k = stateOwners.media) == null ? void 0 : _k.audioTracks) && (audioTracksChanged || shouldTeardownFromSubscriberCount);
    const teardownRemote = !!((_l = stateOwners.media) == null ? void 0 : _l.remote) && (remoteChanged || shouldTeardownFromSubscriberCount);
    const teardownRootNode = !!stateOwners.documentElement && (rootNodeChanged || shouldTeardownFromSubscriberCount);
    const teardownSomething = teardownMedia || teardownTextTracks || teardownVideoRenditions || teardownAudioTracks || teardownRemote || teardownRootNode;
    const shouldSetupFromSubscriberCount = callbacks.length === 0 && nextSubscriberCount === 1 && monitorStateOwnersOnlyWithSubscriptions;
    const setupMedia = !!nextStateOwners.media && (mediaChanged || shouldSetupFromSubscriberCount);
    const setupTextTracks = !!((_m = nextStateOwners.media) == null ? void 0 : _m.textTracks) && (textTracksChanged || shouldSetupFromSubscriberCount);
    const setupVideoRenditions = !!((_n2 = nextStateOwners.media) == null ? void 0 : _n2.videoRenditions) && (videoRenditionsChanged || shouldSetupFromSubscriberCount);
    const setupAudioTracks = !!((_o = nextStateOwners.media) == null ? void 0 : _o.audioTracks) && (audioTracksChanged || shouldSetupFromSubscriberCount);
    const setupRemote = !!((_p = nextStateOwners.media) == null ? void 0 : _p.remote) && (remoteChanged || shouldSetupFromSubscriberCount);
    const setupRootNode = !!nextStateOwners.documentElement && (rootNodeChanged || shouldSetupFromSubscriberCount);
    const setupSomething = setupMedia || setupTextTracks || setupVideoRenditions || setupAudioTracks || setupRemote || setupRootNode;
    const somethingToDo = teardownSomething || setupSomething;
    if (!somethingToDo) {
      Object.entries(nextStateOwners).forEach(
        ([stateOwnerName, stateOwner]) => {
          stateOwners[stateOwnerName] = stateOwner;
        }
      );
      updateStateFromFacade();
      nextStateOwners = void 0;
      return;
    }
    Object.entries(stateMediator$1).forEach(
      ([
        stateName,
        {
          get,
          mediaEvents = [],
          textTracksEvents = [],
          videoRenditionsEvents = [],
          audioTracksEvents = [],
          remoteEvents = [],
          rootEvents = [],
          stateOwnersUpdateHandlers = []
        }
      ]) => {
        if (!stateUpdateHandlers[stateName]) {
          stateUpdateHandlers[stateName] = {};
        }
        const handler = (event) => {
          const nextValue = get(stateOwners, event);
          updateState({ [stateName]: nextValue });
        };
        let prevHandler;
        prevHandler = stateUpdateHandlers[stateName].mediaEvents;
        mediaEvents.forEach((eventType) => {
          if (prevHandler && teardownMedia) {
            stateOwners.media.removeEventListener(eventType, prevHandler);
            stateUpdateHandlers[stateName].mediaEvents = void 0;
          }
          if (setupMedia) {
            nextStateOwners.media.addEventListener(eventType, handler);
            stateUpdateHandlers[stateName].mediaEvents = handler;
          }
        });
        prevHandler = stateUpdateHandlers[stateName].textTracksEvents;
        textTracksEvents.forEach((eventType) => {
          var _a22, _b2;
          if (prevHandler && teardownTextTracks) {
            (_a22 = stateOwners.media.textTracks) == null ? void 0 : _a22.removeEventListener(
              eventType,
              prevHandler
            );
            stateUpdateHandlers[stateName].textTracksEvents = void 0;
          }
          if (setupTextTracks) {
            (_b2 = nextStateOwners.media.textTracks) == null ? void 0 : _b2.addEventListener(
              eventType,
              handler
            );
            stateUpdateHandlers[stateName].textTracksEvents = handler;
          }
        });
        prevHandler = stateUpdateHandlers[stateName].videoRenditionsEvents;
        videoRenditionsEvents.forEach((eventType) => {
          var _a22, _b2;
          if (prevHandler && teardownVideoRenditions) {
            (_a22 = stateOwners.media.videoRenditions) == null ? void 0 : _a22.removeEventListener(
              eventType,
              prevHandler
            );
            stateUpdateHandlers[stateName].videoRenditionsEvents = void 0;
          }
          if (setupVideoRenditions) {
            (_b2 = nextStateOwners.media.videoRenditions) == null ? void 0 : _b2.addEventListener(
              eventType,
              handler
            );
            stateUpdateHandlers[stateName].videoRenditionsEvents = handler;
          }
        });
        prevHandler = stateUpdateHandlers[stateName].audioTracksEvents;
        audioTracksEvents.forEach((eventType) => {
          var _a22, _b2;
          if (prevHandler && teardownAudioTracks) {
            (_a22 = stateOwners.media.audioTracks) == null ? void 0 : _a22.removeEventListener(
              eventType,
              prevHandler
            );
            stateUpdateHandlers[stateName].audioTracksEvents = void 0;
          }
          if (setupAudioTracks) {
            (_b2 = nextStateOwners.media.audioTracks) == null ? void 0 : _b2.addEventListener(
              eventType,
              handler
            );
            stateUpdateHandlers[stateName].audioTracksEvents = handler;
          }
        });
        prevHandler = stateUpdateHandlers[stateName].remoteEvents;
        remoteEvents.forEach((eventType) => {
          var _a22, _b2;
          if (prevHandler && teardownRemote) {
            (_a22 = stateOwners.media.remote) == null ? void 0 : _a22.removeEventListener(
              eventType,
              prevHandler
            );
            stateUpdateHandlers[stateName].remoteEvents = void 0;
          }
          if (setupRemote) {
            (_b2 = nextStateOwners.media.remote) == null ? void 0 : _b2.addEventListener(eventType, handler);
            stateUpdateHandlers[stateName].remoteEvents = handler;
          }
        });
        prevHandler = stateUpdateHandlers[stateName].rootEvents;
        rootEvents.forEach((eventType) => {
          if (prevHandler && teardownRootNode) {
            stateOwners.documentElement.removeEventListener(
              eventType,
              prevHandler
            );
            stateUpdateHandlers[stateName].rootEvents = void 0;
          }
          if (setupRootNode) {
            nextStateOwners.documentElement.addEventListener(
              eventType,
              handler
            );
            stateUpdateHandlers[stateName].rootEvents = handler;
          }
        });
        const prevHandlerTeardowns = stateUpdateHandlers[stateName].stateOwnersUpdateHandlers;
        if (prevHandlerTeardowns && teardownSomething) {
          const teardowns = Array.isArray(prevHandlerTeardowns) ? prevHandlerTeardowns : [prevHandlerTeardowns];
          teardowns.forEach((teardown) => {
            if (typeof teardown === "function") {
              teardown();
            }
          });
        }
        if (setupSomething) {
          const newTeardowns = stateOwnersUpdateHandlers.map((fn) => fn(handler, nextStateOwners)).filter((teardown) => typeof teardown === "function");
          stateUpdateHandlers[stateName].stateOwnersUpdateHandlers = newTeardowns.length === 1 ? newTeardowns[0] : newTeardowns;
        } else if (teardownSomething) {
          stateUpdateHandlers[stateName].stateOwnersUpdateHandlers = void 0;
        }
      }
    );
    Object.entries(nextStateOwners).forEach(([stateOwnerName, stateOwner]) => {
      stateOwners[stateOwnerName] = stateOwner;
    });
    updateStateFromFacade();
    nextStateOwners = void 0;
  };
  updateStateOwners({ media, fullscreenElement, documentElement, options });
  return {
    // note that none of these cases directly interact with the media element, root node, full screen element, etc.
    // note these "actions" could just be the events if we wanted, especially if we normalize on "detail" for
    // any payload-relevant values
    // This is roughly equivalent to our used to be in our state requests dictionary object, though much of the
    // "heavy lifting" is now moved into the facade `set()`
    dispatch(action) {
      const { type, detail } = action;
      if (requestMap$1[type] && state.mediaErrorCode == null) {
        updateState(requestMap$1[type](stateMediator$1, stateOwners, action));
        return;
      }
      if (type === "mediaelementchangerequest") {
        updateStateOwners({ media: detail });
      } else if (type === "fullscreenelementchangerequest") {
        updateStateOwners({ fullscreenElement: detail });
      } else if (type === "documentelementchangerequest") {
        updateStateOwners({ documentElement: detail });
      } else if (type === "optionschangerequest") {
        Object.entries(detail != null ? detail : {}).forEach(([optionName, optionValue]) => {
          stateOwners.options[optionName] = optionValue;
        });
        updateStateFromFacade();
      }
    },
    getState() {
      return state;
    },
    subscribe(callback) {
      updateStateOwners({}, callbacks.length + 1);
      callbacks.push(callback);
      callback(state);
      return () => {
        const idx = callbacks.indexOf(callback);
        if (idx >= 0) {
          updateStateOwners({}, callbacks.length - 1);
          callbacks.splice(idx, 1);
        }
      };
    }
  };
};
var __accessCheck$r = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet$r = (obj, member, getter) => {
  __accessCheck$r(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$r = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$n = (obj, member, value, setter) => {
  __accessCheck$r(obj, member, "write to private field");
  member.set(obj, value);
  return value;
};
var __privateMethod$d = (obj, member, method) => {
  __accessCheck$r(obj, member, "access private method");
  return method;
};
var _hotKeys, _fullscreenElement, _mediaStore, _keyboardShortcutsDialog, _mediaStateCallback, _mediaStoreUnsubscribe, _mediaStateEventHandler, _subtitlesState, _setupDefaultStore, setupDefaultStore_fn, _keyUpHandler$1, _keyDownHandler$2, keyDownHandler_fn, _showKeyboardShortcutsDialog, showKeyboardShortcutsDialog_fn;
const ButtonPressedKeys$1 = [
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "ArrowDown",
  "Enter",
  " ",
  "f",
  "m",
  "k",
  "c",
  "l",
  "j",
  ">",
  "<",
  "p"
];
const DEFAULT_SEEK_OFFSET$2 = 10;
const DEFAULT_VOLUME_STEP = 0.025;
const DEFAULT_PLAYBACK_RATE_STEP = 0.25;
const MIN_PLAYBACK_RATE = 0.25;
const MAX_PLAYBACK_RATE = 2;
const Attributes$c = {
  DEFAULT_SUBTITLES: "defaultsubtitles",
  DEFAULT_STREAM_TYPE: "defaultstreamtype",
  DEFAULT_DURATION: "defaultduration",
  FULLSCREEN_ELEMENT: "fullscreenelement",
  HOTKEYS: "hotkeys",
  KEYBOARD_BACKWARD_SEEK_OFFSET: "keyboardbackwardseekoffset",
  KEYBOARD_FORWARD_SEEK_OFFSET: "keyboardforwardseekoffset",
  KEYBOARD_DOWN_VOLUME_STEP: "keyboarddownvolumestep",
  KEYBOARD_UP_VOLUME_STEP: "keyboardupvolumestep",
  KEYS_USED: "keysused",
  LANG: "lang",
  LOOP: "loop",
  LIVE_EDGE_OFFSET: "liveedgeoffset",
  NO_AUTO_SEEK_TO_LIVE: "noautoseektolive",
  NO_DEFAULT_STORE: "nodefaultstore",
  NO_HOTKEYS: "nohotkeys",
  NO_MUTED_PREF: "nomutedpref",
  NO_SUBTITLES_LANG_PREF: "nosubtitleslangpref",
  NO_VOLUME_PREF: "novolumepref",
  SEEK_TO_LIVE_OFFSET: "seektoliveoffset"
};
class MediaController extends MediaContainer {
  constructor() {
    super();
    __privateAdd$r(this, _setupDefaultStore);
    __privateAdd$r(this, _keyDownHandler$2);
    __privateAdd$r(this, _showKeyboardShortcutsDialog);
    this.mediaStateReceivers = [];
    this.associatedElementSubscriptions = /* @__PURE__ */ new Map();
    __privateAdd$r(this, _hotKeys, new AttributeTokenList(this, Attributes$c.HOTKEYS));
    __privateAdd$r(this, _fullscreenElement, void 0);
    __privateAdd$r(this, _mediaStore, void 0);
    __privateAdd$r(this, _keyboardShortcutsDialog, null);
    __privateAdd$r(this, _mediaStateCallback, void 0);
    __privateAdd$r(this, _mediaStoreUnsubscribe, void 0);
    __privateAdd$r(this, _mediaStateEventHandler, (event) => {
      var _a2;
      (_a2 = __privateGet$r(this, _mediaStore)) == null ? void 0 : _a2.dispatch(event);
    });
    __privateAdd$r(this, _subtitlesState, void 0);
    __privateAdd$r(this, _keyUpHandler$1, (e) => {
      const { key, shiftKey } = e;
      const isShiftSlash = shiftKey && (key === "/" || key === "?");
      const shouldHandle = isShiftSlash || ButtonPressedKeys$1.includes(key);
      if (!shouldHandle) {
        this.removeEventListener("keyup", __privateGet$r(this, _keyUpHandler$1));
        return;
      }
      this.keyboardShortcutHandler(e);
    });
    this.associateElement(this);
    let prevState = {};
    __privateSet$n(this, _mediaStateCallback, (nextState) => {
      Object.entries(nextState).forEach(([stateName, stateValue]) => {
        if (stateName in prevState && prevState[stateName] === stateValue)
          return;
        this.propagateMediaState(stateName, stateValue);
        const attrName = stateName.toLowerCase();
        const evt = new GlobalThis.CustomEvent(
          AttributeToStateChangeEventMap[attrName],
          { composed: true, detail: stateValue }
        );
        this.dispatchEvent(evt);
      });
      prevState = nextState;
    });
  }
  static get observedAttributes() {
    return super.observedAttributes.concat(
      Attributes$c.NO_HOTKEYS,
      Attributes$c.HOTKEYS,
      Attributes$c.DEFAULT_STREAM_TYPE,
      Attributes$c.DEFAULT_SUBTITLES,
      Attributes$c.DEFAULT_DURATION,
      Attributes$c.NO_MUTED_PREF,
      Attributes$c.NO_VOLUME_PREF,
      Attributes$c.LANG,
      Attributes$c.LOOP,
      Attributes$c.LIVE_EDGE_OFFSET,
      Attributes$c.SEEK_TO_LIVE_OFFSET,
      Attributes$c.NO_AUTO_SEEK_TO_LIVE
    );
  }
  get mediaStore() {
    return __privateGet$r(this, _mediaStore);
  }
  set mediaStore(value) {
    var _a2, _b;
    if (__privateGet$r(this, _mediaStore)) {
      (_a2 = __privateGet$r(this, _mediaStoreUnsubscribe)) == null ? void 0 : _a2.call(this);
      __privateSet$n(this, _mediaStoreUnsubscribe, void 0);
    }
    __privateSet$n(this, _mediaStore, value);
    if (!__privateGet$r(this, _mediaStore) && !this.hasAttribute(Attributes$c.NO_DEFAULT_STORE)) {
      __privateMethod$d(this, _setupDefaultStore, setupDefaultStore_fn).call(this);
      return;
    }
    __privateSet$n(this, _mediaStoreUnsubscribe, (_b = __privateGet$r(this, _mediaStore)) == null ? void 0 : _b.subscribe(
      __privateGet$r(this, _mediaStateCallback)
    ));
  }
  get fullscreenElement() {
    var _a2;
    return (_a2 = __privateGet$r(this, _fullscreenElement)) != null ? _a2 : this;
  }
  set fullscreenElement(element) {
    var _a2;
    if (this.hasAttribute(Attributes$c.FULLSCREEN_ELEMENT)) {
      this.removeAttribute(Attributes$c.FULLSCREEN_ELEMENT);
    }
    __privateSet$n(this, _fullscreenElement, element);
    (_a2 = __privateGet$r(this, _mediaStore)) == null ? void 0 : _a2.dispatch({
      type: "fullscreenelementchangerequest",
      detail: this.fullscreenElement
    });
  }
  get defaultSubtitles() {
    return getBooleanAttr(this, Attributes$c.DEFAULT_SUBTITLES);
  }
  set defaultSubtitles(value) {
    setBooleanAttr(this, Attributes$c.DEFAULT_SUBTITLES, value);
  }
  get defaultStreamType() {
    return getStringAttr(this, Attributes$c.DEFAULT_STREAM_TYPE);
  }
  set defaultStreamType(value) {
    setStringAttr(this, Attributes$c.DEFAULT_STREAM_TYPE, value);
  }
  get defaultDuration() {
    return getNumericAttr(this, Attributes$c.DEFAULT_DURATION);
  }
  set defaultDuration(value) {
    setNumericAttr(this, Attributes$c.DEFAULT_DURATION, value);
  }
  get noHotkeys() {
    return getBooleanAttr(this, Attributes$c.NO_HOTKEYS);
  }
  set noHotkeys(value) {
    setBooleanAttr(this, Attributes$c.NO_HOTKEYS, value);
  }
  get keysUsed() {
    return getStringAttr(this, Attributes$c.KEYS_USED);
  }
  set keysUsed(value) {
    setStringAttr(this, Attributes$c.KEYS_USED, value);
  }
  get liveEdgeOffset() {
    return getNumericAttr(this, Attributes$c.LIVE_EDGE_OFFSET);
  }
  set liveEdgeOffset(value) {
    setNumericAttr(this, Attributes$c.LIVE_EDGE_OFFSET, value);
  }
  get noAutoSeekToLive() {
    return getBooleanAttr(this, Attributes$c.NO_AUTO_SEEK_TO_LIVE);
  }
  set noAutoSeekToLive(value) {
    setBooleanAttr(this, Attributes$c.NO_AUTO_SEEK_TO_LIVE, value);
  }
  get noVolumePref() {
    return getBooleanAttr(this, Attributes$c.NO_VOLUME_PREF);
  }
  set noVolumePref(value) {
    setBooleanAttr(this, Attributes$c.NO_VOLUME_PREF, value);
  }
  get noMutedPref() {
    return getBooleanAttr(this, Attributes$c.NO_MUTED_PREF);
  }
  set noMutedPref(value) {
    setBooleanAttr(this, Attributes$c.NO_MUTED_PREF, value);
  }
  get noSubtitlesLangPref() {
    return getBooleanAttr(this, Attributes$c.NO_SUBTITLES_LANG_PREF);
  }
  set noSubtitlesLangPref(value) {
    setBooleanAttr(this, Attributes$c.NO_SUBTITLES_LANG_PREF, value);
  }
  get noDefaultStore() {
    return getBooleanAttr(this, Attributes$c.NO_DEFAULT_STORE);
  }
  set noDefaultStore(value) {
    setBooleanAttr(this, Attributes$c.NO_DEFAULT_STORE, value);
  }
  get resolvedLang() {
    return getResolvedLanguage();
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    var _a2, _b, _c, _d, _e2, _f, _g, _h, _i2, _j, _k, _l;
    super.attributeChangedCallback(attrName, oldValue, newValue);
    if (attrName === Attributes$c.NO_HOTKEYS) {
      if (newValue !== oldValue && newValue === "") {
        if (this.hasAttribute(Attributes$c.HOTKEYS)) {
          console.warn(
            "Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."
          );
        }
        this.disableHotkeys();
      } else if (newValue !== oldValue && newValue === null) {
        this.enableHotkeys();
      }
    } else if (attrName === Attributes$c.HOTKEYS) {
      __privateGet$r(this, _hotKeys).value = newValue;
    } else if (attrName === Attributes$c.DEFAULT_SUBTITLES && newValue !== oldValue) {
      (_a2 = __privateGet$r(this, _mediaStore)) == null ? void 0 : _a2.dispatch({
        type: "optionschangerequest",
        detail: {
          defaultSubtitles: this.hasAttribute(Attributes$c.DEFAULT_SUBTITLES)
        }
      });
    } else if (attrName === Attributes$c.DEFAULT_STREAM_TYPE) {
      (_c = __privateGet$r(this, _mediaStore)) == null ? void 0 : _c.dispatch({
        type: "optionschangerequest",
        detail: {
          defaultStreamType: (_b = this.getAttribute(Attributes$c.DEFAULT_STREAM_TYPE)) != null ? _b : void 0
        }
      });
    } else if (attrName === Attributes$c.LIVE_EDGE_OFFSET && newValue !== oldValue) {
      (_d = __privateGet$r(this, _mediaStore)) == null ? void 0 : _d.dispatch({
        type: "optionschangerequest",
        detail: {
          liveEdgeOffset: this.hasAttribute(Attributes$c.LIVE_EDGE_OFFSET) ? +this.getAttribute(Attributes$c.LIVE_EDGE_OFFSET) : void 0,
          seekToLiveOffset: this.hasAttribute(Attributes$c.SEEK_TO_LIVE_OFFSET) ? +this.getAttribute(Attributes$c.SEEK_TO_LIVE_OFFSET) : this.hasAttribute(Attributes$c.LIVE_EDGE_OFFSET) ? +this.getAttribute(Attributes$c.LIVE_EDGE_OFFSET) : void 0
        }
      });
    } else if (attrName === Attributes$c.SEEK_TO_LIVE_OFFSET && newValue !== oldValue) {
      (_e2 = __privateGet$r(this, _mediaStore)) == null ? void 0 : _e2.dispatch({
        type: "optionschangerequest",
        detail: {
          // Mirror #setupDefaultStore: prefer seektoliveoffset, fall back to
          // liveedgeoffset, otherwise undefined.
          seekToLiveOffset: this.hasAttribute(Attributes$c.SEEK_TO_LIVE_OFFSET) ? +this.getAttribute(Attributes$c.SEEK_TO_LIVE_OFFSET) : this.hasAttribute(Attributes$c.LIVE_EDGE_OFFSET) ? +this.getAttribute(Attributes$c.LIVE_EDGE_OFFSET) : void 0
        }
      });
    } else if (attrName === Attributes$c.NO_AUTO_SEEK_TO_LIVE) {
      (_f = __privateGet$r(this, _mediaStore)) == null ? void 0 : _f.dispatch({
        type: "optionschangerequest",
        detail: {
          noAutoSeekToLive: this.hasAttribute(Attributes$c.NO_AUTO_SEEK_TO_LIVE)
        }
      });
    } else if (attrName === Attributes$c.FULLSCREEN_ELEMENT) {
      const el = newValue ? (_g = this.getRootNode()) == null ? void 0 : _g.getElementById(newValue) : void 0;
      __privateSet$n(this, _fullscreenElement, el);
      (_h = __privateGet$r(this, _mediaStore)) == null ? void 0 : _h.dispatch({
        type: "fullscreenelementchangerequest",
        detail: this.fullscreenElement
      });
    } else if (attrName === Attributes$c.LANG && newValue !== oldValue) {
      setLanguage(newValue);
      (_i2 = __privateGet$r(this, _mediaStore)) == null ? void 0 : _i2.dispatch({
        type: "optionschangerequest",
        detail: {
          mediaLang: newValue
        }
      });
    } else if (attrName === Attributes$c.LOOP && newValue !== oldValue) {
      (_j = __privateGet$r(this, _mediaStore)) == null ? void 0 : _j.dispatch({
        type: MediaUIEvents.MEDIA_LOOP_REQUEST,
        detail: newValue != null
      });
    } else if (attrName === Attributes$c.NO_VOLUME_PREF && newValue !== oldValue) {
      (_k = __privateGet$r(this, _mediaStore)) == null ? void 0 : _k.dispatch({
        type: "optionschangerequest",
        detail: {
          noVolumePref: this.hasAttribute(Attributes$c.NO_VOLUME_PREF)
        }
      });
    } else if (attrName === Attributes$c.NO_MUTED_PREF && newValue !== oldValue) {
      (_l = __privateGet$r(this, _mediaStore)) == null ? void 0 : _l.dispatch({
        type: "optionschangerequest",
        detail: {
          noMutedPref: this.hasAttribute(Attributes$c.NO_MUTED_PREF)
        }
      });
    }
  }
  connectedCallback() {
    var _a2, _b, _c;
    this.associateElement(this);
    if (!__privateGet$r(this, _mediaStore) && !this.hasAttribute(Attributes$c.NO_DEFAULT_STORE)) {
      __privateMethod$d(this, _setupDefaultStore, setupDefaultStore_fn).call(this);
    }
    (_a2 = __privateGet$r(this, _mediaStore)) == null ? void 0 : _a2.dispatch({
      type: "documentelementchangerequest",
      detail: Document$1
    });
    (_b = __privateGet$r(this, _mediaStore)) == null ? void 0 : _b.dispatch({
      type: "fullscreenelementchangerequest",
      detail: this.fullscreenElement
    });
    super.connectedCallback();
    if (__privateGet$r(this, _mediaStore) && !__privateGet$r(this, _mediaStoreUnsubscribe)) {
      __privateSet$n(this, _mediaStoreUnsubscribe, (_c = __privateGet$r(this, _mediaStore)) == null ? void 0 : _c.subscribe(
        __privateGet$r(this, _mediaStateCallback)
      ));
    }
    if (__privateGet$r(this, _subtitlesState) !== void 0 && __privateGet$r(this, _mediaStore) && this.media) {
      setTimeout(() => {
        var _a22, _b2, _c2;
        if ((_b2 = (_a22 = this.media) == null ? void 0 : _a22.textTracks) == null ? void 0 : _b2.length) {
          (_c2 = __privateGet$r(this, _mediaStore)) == null ? void 0 : _c2.dispatch({
            type: MediaUIEvents.MEDIA_TOGGLE_SUBTITLES_REQUEST,
            detail: __privateGet$r(this, _subtitlesState)
          });
        }
      }, 0);
    }
    this.hasAttribute(Attributes$c.NO_HOTKEYS) ? this.disableHotkeys() : this.enableHotkeys();
  }
  disconnectedCallback() {
    var _a2, _b, _c, _d, _e2, _f;
    (_a2 = super.disconnectedCallback) == null ? void 0 : _a2.call(this);
    this.disableHotkeys();
    if (__privateGet$r(this, _mediaStore)) {
      const currentState = __privateGet$r(this, _mediaStore).getState();
      __privateSet$n(this, _subtitlesState, !!((_b = currentState.mediaSubtitlesShowing) == null ? void 0 : _b.length));
      (_c = __privateGet$r(this, _mediaStore)) == null ? void 0 : _c.dispatch({
        type: "fullscreenelementchangerequest",
        detail: void 0
      });
      (_d = __privateGet$r(this, _mediaStore)) == null ? void 0 : _d.dispatch({
        type: "documentelementchangerequest",
        detail: void 0
      });
      (_e2 = __privateGet$r(this, _mediaStore)) == null ? void 0 : _e2.dispatch({
        type: MediaUIEvents.MEDIA_TOGGLE_SUBTITLES_REQUEST,
        detail: false
      });
    }
    if (__privateGet$r(this, _mediaStoreUnsubscribe)) {
      (_f = __privateGet$r(this, _mediaStoreUnsubscribe)) == null ? void 0 : _f.call(this);
      __privateSet$n(this, _mediaStoreUnsubscribe, void 0);
    }
    this.unassociateElement(this);
    if (__privateGet$r(this, _keyboardShortcutsDialog)) {
      __privateGet$r(this, _keyboardShortcutsDialog).remove();
      __privateSet$n(this, _keyboardShortcutsDialog, null);
    }
  }
  /**
   * @override
   * @param {HTMLMediaElement} media
   */
  mediaSetCallback(media) {
    var _a2;
    super.mediaSetCallback(media);
    (_a2 = __privateGet$r(this, _mediaStore)) == null ? void 0 : _a2.dispatch({
      type: "mediaelementchangerequest",
      detail: media
    });
    if (!media.hasAttribute("tabindex")) {
      media.tabIndex = -1;
    }
  }
  /**
   * @override
   * @param {HTMLMediaElement} media
   */
  mediaUnsetCallback(media) {
    var _a2;
    super.mediaUnsetCallback(media);
    (_a2 = __privateGet$r(this, _mediaStore)) == null ? void 0 : _a2.dispatch({
      type: "mediaelementchangerequest",
      detail: void 0
    });
  }
  propagateMediaState(stateName, state) {
    propagateMediaState(this.mediaStateReceivers, stateName, state);
  }
  associateElement(element) {
    if (!element)
      return;
    const { associatedElementSubscriptions } = this;
    if (associatedElementSubscriptions.has(element))
      return;
    const registerMediaStateReceiver = this.registerMediaStateReceiver.bind(this);
    const unregisterMediaStateReceiver = this.unregisterMediaStateReceiver.bind(this);
    const unsubscribe = monitorForMediaStateReceivers(
      element,
      registerMediaStateReceiver,
      unregisterMediaStateReceiver
    );
    Object.values(MediaUIEvents).forEach((eventName) => {
      element.addEventListener(eventName, __privateGet$r(this, _mediaStateEventHandler));
    });
    associatedElementSubscriptions.set(element, unsubscribe);
  }
  unassociateElement(element) {
    if (!element)
      return;
    const { associatedElementSubscriptions } = this;
    if (!associatedElementSubscriptions.has(element))
      return;
    const unsubscribe = associatedElementSubscriptions.get(element);
    unsubscribe();
    associatedElementSubscriptions.delete(element);
    Object.values(MediaUIEvents).forEach((eventName) => {
      element.removeEventListener(eventName, __privateGet$r(this, _mediaStateEventHandler));
    });
  }
  registerMediaStateReceiver(el) {
    if (!el)
      return;
    const els = this.mediaStateReceivers;
    const index = els.indexOf(el);
    if (index > -1)
      return;
    els.push(el);
    if (__privateGet$r(this, _mediaStore)) {
      Object.entries(__privateGet$r(this, _mediaStore).getState()).forEach(
        ([stateName, stateValue]) => {
          propagateMediaState([el], stateName, stateValue);
        }
      );
    }
  }
  unregisterMediaStateReceiver(el) {
    const els = this.mediaStateReceivers;
    const index = els.indexOf(el);
    if (index < 0)
      return;
    els.splice(index, 1);
  }
  enableHotkeys() {
    this.addEventListener("keydown", __privateMethod$d(this, _keyDownHandler$2, keyDownHandler_fn));
  }
  disableHotkeys() {
    this.removeEventListener("keydown", __privateMethod$d(this, _keyDownHandler$2, keyDownHandler_fn));
    this.removeEventListener("keyup", __privateGet$r(this, _keyUpHandler$1));
  }
  // Added string to support JSX compatibility
  get hotkeys() {
    return __privateGet$r(this, _hotKeys);
  }
  set hotkeys(value) {
    setStringAttr(this, Attributes$c.HOTKEYS, value);
  }
  keyboardShortcutHandler(e) {
    var _a2, _b, _c, _d, _e2, _f, _g, _h, _i2;
    const target = e.target;
    const keysUsed = ((_c = (_b = (_a2 = target.getAttribute(Attributes$c.KEYS_USED)) == null ? void 0 : _a2.split(" ")) != null ? _b : target == null ? void 0 : target.keysUsed) != null ? _c : []).map((key) => key === "Space" ? " " : key).filter(Boolean);
    if (keysUsed.includes(e.key)) {
      return;
    }
    let eventName, detail, evt;
    if (__privateGet$r(this, _hotKeys).contains(`no${e.key.toLowerCase()}`))
      return;
    if (e.key === " " && __privateGet$r(this, _hotKeys).contains(`nospace`))
      return;
    const isShiftSlash = e.shiftKey && (e.key === "/" || e.key === "?");
    if (isShiftSlash && __privateGet$r(this, _hotKeys).contains("noshift+/"))
      return;
    switch (e.key) {
      case " ":
      case "k":
        eventName = __privateGet$r(this, _mediaStore).getState().mediaPaused ? MediaUIEvents.MEDIA_PLAY_REQUEST : MediaUIEvents.MEDIA_PAUSE_REQUEST;
        this.dispatchEvent(
          new GlobalThis.CustomEvent(eventName, {
            composed: true,
            bubbles: true
          })
        );
        break;
      case "m":
        eventName = this.mediaStore.getState().mediaVolumeLevel === "off" ? MediaUIEvents.MEDIA_UNMUTE_REQUEST : MediaUIEvents.MEDIA_MUTE_REQUEST;
        this.dispatchEvent(
          new GlobalThis.CustomEvent(eventName, {
            composed: true,
            bubbles: true
          })
        );
        break;
      case "f":
        eventName = this.mediaStore.getState().mediaIsFullscreen ? MediaUIEvents.MEDIA_EXIT_FULLSCREEN_REQUEST : MediaUIEvents.MEDIA_ENTER_FULLSCREEN_REQUEST;
        this.dispatchEvent(
          new GlobalThis.CustomEvent(eventName, {
            composed: true,
            bubbles: true
          })
        );
        break;
      case "c":
        this.dispatchEvent(
          new GlobalThis.CustomEvent(
            MediaUIEvents.MEDIA_TOGGLE_SUBTITLES_REQUEST,
            { composed: true, bubbles: true }
          )
        );
        break;
      case "ArrowLeft":
      case "j": {
        const offsetValue = this.hasAttribute(
          Attributes$c.KEYBOARD_BACKWARD_SEEK_OFFSET
        ) ? +this.getAttribute(Attributes$c.KEYBOARD_BACKWARD_SEEK_OFFSET) : DEFAULT_SEEK_OFFSET$2;
        detail = Math.max(
          ((_d = this.mediaStore.getState().mediaCurrentTime) != null ? _d : 0) - offsetValue,
          0
        );
        evt = new GlobalThis.CustomEvent(MediaUIEvents.MEDIA_SEEK_REQUEST, {
          composed: true,
          bubbles: true,
          detail
        });
        this.dispatchEvent(evt);
        break;
      }
      case "ArrowRight":
      case "l": {
        const offsetValue = this.hasAttribute(
          Attributes$c.KEYBOARD_FORWARD_SEEK_OFFSET
        ) ? +this.getAttribute(Attributes$c.KEYBOARD_FORWARD_SEEK_OFFSET) : DEFAULT_SEEK_OFFSET$2;
        detail = Math.max(
          ((_e2 = this.mediaStore.getState().mediaCurrentTime) != null ? _e2 : 0) + offsetValue,
          0
        );
        evt = new GlobalThis.CustomEvent(MediaUIEvents.MEDIA_SEEK_REQUEST, {
          composed: true,
          bubbles: true,
          detail
        });
        this.dispatchEvent(evt);
        break;
      }
      case "ArrowUp": {
        const step = this.hasAttribute(Attributes$c.KEYBOARD_UP_VOLUME_STEP) ? +this.getAttribute(Attributes$c.KEYBOARD_UP_VOLUME_STEP) : DEFAULT_VOLUME_STEP;
        detail = Math.min(
          ((_f = this.mediaStore.getState().mediaVolume) != null ? _f : 1) + step,
          1
        );
        evt = new GlobalThis.CustomEvent(MediaUIEvents.MEDIA_VOLUME_REQUEST, {
          composed: true,
          bubbles: true,
          detail
        });
        this.dispatchEvent(evt);
        break;
      }
      case "ArrowDown": {
        const step = this.hasAttribute(Attributes$c.KEYBOARD_DOWN_VOLUME_STEP) ? +this.getAttribute(Attributes$c.KEYBOARD_DOWN_VOLUME_STEP) : DEFAULT_VOLUME_STEP;
        detail = Math.max(
          ((_g = this.mediaStore.getState().mediaVolume) != null ? _g : 1) - step,
          0
        );
        evt = new GlobalThis.CustomEvent(MediaUIEvents.MEDIA_VOLUME_REQUEST, {
          composed: true,
          bubbles: true,
          detail
        });
        this.dispatchEvent(evt);
        break;
      }
      case "<": {
        const playbackRate = (_h = this.mediaStore.getState().mediaPlaybackRate) != null ? _h : 1;
        detail = Math.max(
          playbackRate - DEFAULT_PLAYBACK_RATE_STEP,
          MIN_PLAYBACK_RATE
        ).toFixed(2);
        evt = new GlobalThis.CustomEvent(MediaUIEvents.MEDIA_PLAYBACK_RATE_REQUEST, {
          composed: true,
          bubbles: true,
          detail
        });
        this.dispatchEvent(evt);
        break;
      }
      case ">": {
        const playbackRate = (_i2 = this.mediaStore.getState().mediaPlaybackRate) != null ? _i2 : 1;
        detail = Math.min(
          playbackRate + DEFAULT_PLAYBACK_RATE_STEP,
          MAX_PLAYBACK_RATE
        ).toFixed(2);
        evt = new GlobalThis.CustomEvent(MediaUIEvents.MEDIA_PLAYBACK_RATE_REQUEST, {
          composed: true,
          bubbles: true,
          detail
        });
        this.dispatchEvent(evt);
        break;
      }
      case "/":
      case "?": {
        if (e.shiftKey) {
          __privateMethod$d(this, _showKeyboardShortcutsDialog, showKeyboardShortcutsDialog_fn).call(this);
        }
        break;
      }
      case "p": {
        eventName = this.mediaStore.getState().mediaIsPip ? MediaUIEvents.MEDIA_EXIT_PIP_REQUEST : MediaUIEvents.MEDIA_ENTER_PIP_REQUEST;
        evt = new GlobalThis.CustomEvent(eventName, {
          composed: true,
          bubbles: true
        });
        this.dispatchEvent(evt);
        break;
      }
    }
  }
}
_hotKeys = /* @__PURE__ */ new WeakMap();
_fullscreenElement = /* @__PURE__ */ new WeakMap();
_mediaStore = /* @__PURE__ */ new WeakMap();
_keyboardShortcutsDialog = /* @__PURE__ */ new WeakMap();
_mediaStateCallback = /* @__PURE__ */ new WeakMap();
_mediaStoreUnsubscribe = /* @__PURE__ */ new WeakMap();
_mediaStateEventHandler = /* @__PURE__ */ new WeakMap();
_subtitlesState = /* @__PURE__ */ new WeakMap();
_setupDefaultStore = /* @__PURE__ */ new WeakSet();
setupDefaultStore_fn = function() {
  var _a2;
  this.mediaStore = createMediaStore({
    media: this.media,
    fullscreenElement: this.fullscreenElement,
    options: {
      defaultSubtitles: this.hasAttribute(Attributes$c.DEFAULT_SUBTITLES),
      defaultDuration: this.hasAttribute(Attributes$c.DEFAULT_DURATION) ? +this.getAttribute(Attributes$c.DEFAULT_DURATION) : void 0,
      defaultStreamType: (
        /** @type {import('./media-store/state-mediator.js').StreamTypeValue} */
        (_a2 = this.getAttribute(
          Attributes$c.DEFAULT_STREAM_TYPE
        )) != null ? _a2 : void 0
      ),
      liveEdgeOffset: this.hasAttribute(Attributes$c.LIVE_EDGE_OFFSET) ? +this.getAttribute(Attributes$c.LIVE_EDGE_OFFSET) : void 0,
      seekToLiveOffset: this.hasAttribute(Attributes$c.SEEK_TO_LIVE_OFFSET) ? +this.getAttribute(Attributes$c.SEEK_TO_LIVE_OFFSET) : this.hasAttribute(Attributes$c.LIVE_EDGE_OFFSET) ? +this.getAttribute(Attributes$c.LIVE_EDGE_OFFSET) : void 0,
      noAutoSeekToLive: this.hasAttribute(Attributes$c.NO_AUTO_SEEK_TO_LIVE),
      // NOTE: This wasn't updated if it was changed later. Should it be? (CJP)
      noVolumePref: this.hasAttribute(Attributes$c.NO_VOLUME_PREF),
      noMutedPref: this.hasAttribute(Attributes$c.NO_MUTED_PREF),
      noSubtitlesLangPref: this.hasAttribute(
        Attributes$c.NO_SUBTITLES_LANG_PREF
      )
    }
  });
};
_keyUpHandler$1 = /* @__PURE__ */ new WeakMap();
_keyDownHandler$2 = /* @__PURE__ */ new WeakSet();
keyDownHandler_fn = function(e) {
  var _a2;
  const { metaKey, altKey, key, shiftKey } = e;
  const isShiftSlash = shiftKey && (key === "/" || key === "?");
  if (isShiftSlash && ((_a2 = __privateGet$r(this, _keyboardShortcutsDialog)) == null ? void 0 : _a2.open)) {
    this.removeEventListener("keyup", __privateGet$r(this, _keyUpHandler$1));
    return;
  }
  if (metaKey || altKey || !isShiftSlash && !ButtonPressedKeys$1.includes(key)) {
    this.removeEventListener("keyup", __privateGet$r(this, _keyUpHandler$1));
    return;
  }
  const target = e.target;
  const isRangeInput = target instanceof HTMLElement && (target.tagName.toLowerCase() === "media-volume-range" || target.tagName.toLowerCase() === "media-time-range");
  if ([" ", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(key) && !(__privateGet$r(this, _hotKeys).contains(`no${key.toLowerCase()}`) || key === " " && __privateGet$r(this, _hotKeys).contains("nospace")) && !isRangeInput) {
    e.preventDefault();
  }
  this.addEventListener("keyup", __privateGet$r(this, _keyUpHandler$1), { once: true });
};
_showKeyboardShortcutsDialog = /* @__PURE__ */ new WeakSet();
showKeyboardShortcutsDialog_fn = function() {
  if (!__privateGet$r(this, _keyboardShortcutsDialog)) {
    __privateSet$n(this, _keyboardShortcutsDialog, Document$1.createElement(
      "media-keyboard-shortcuts-dialog"
    ));
    this.appendChild(__privateGet$r(this, _keyboardShortcutsDialog));
  }
  __privateGet$r(this, _keyboardShortcutsDialog).open = true;
};
const MEDIA_UI_ATTRIBUTE_NAMES = Object.values(MediaUIAttributes);
const MEDIA_UI_PROP_NAMES = Object.values(MediaUIProps);
const getMediaUIAttributesFrom = (child) => {
  var _a2, _b, _c, _d;
  let { observedAttributes: observedAttributes2 } = child.constructor;
  if (!observedAttributes2 && ((_a2 = child.nodeName) == null ? void 0 : _a2.includes("-"))) {
    GlobalThis.customElements.upgrade(child);
    ({ observedAttributes: observedAttributes2 } = child.constructor);
  }
  const mediaChromeAttributesList = (_d = (_c = (_b = child == null ? void 0 : child.getAttribute) == null ? void 0 : _b.call(child, MediaStateReceiverAttributes.MEDIA_CHROME_ATTRIBUTES)) == null ? void 0 : _c.split) == null ? void 0 : _d.call(_c, /\s+/);
  if (!Array.isArray(observedAttributes2 || mediaChromeAttributesList))
    return [];
  return (observedAttributes2 || mediaChromeAttributesList).filter(
    (attrName) => MEDIA_UI_ATTRIBUTE_NAMES.includes(attrName)
  );
};
const hasMediaUIProps = (mediaStateReceiverCandidate) => {
  var _a2, _b;
  if (((_a2 = mediaStateReceiverCandidate.nodeName) == null ? void 0 : _a2.includes("-")) && !!GlobalThis.customElements.get(
    (_b = mediaStateReceiverCandidate.nodeName) == null ? void 0 : _b.toLowerCase()
  ) && !(mediaStateReceiverCandidate instanceof GlobalThis.customElements.get(
    mediaStateReceiverCandidate.nodeName.toLowerCase()
  ))) {
    GlobalThis.customElements.upgrade(mediaStateReceiverCandidate);
  }
  return MEDIA_UI_PROP_NAMES.some(
    (propName) => propName in mediaStateReceiverCandidate
  );
};
const isMediaStateReceiver = (child) => {
  return hasMediaUIProps(child) || !!getMediaUIAttributesFrom(child).length;
};
const serializeTuple = (tuple) => {
  var _a2;
  return (_a2 = tuple == null ? void 0 : tuple.join) == null ? void 0 : _a2.call(tuple, ":");
};
const CustomAttrSerializer = {
  [MediaUIAttributes.MEDIA_SUBTITLES_LIST]: stringifyTextTrackList,
  [MediaUIAttributes.MEDIA_SUBTITLES_SHOWING]: stringifyTextTrackList,
  [MediaUIAttributes.MEDIA_SEEKABLE]: serializeTuple,
  [MediaUIAttributes.MEDIA_BUFFERED]: (tuples) => tuples == null ? void 0 : tuples.map(serializeTuple).join(" "),
  [MediaUIAttributes.MEDIA_PREVIEW_COORDS]: (coords) => coords == null ? void 0 : coords.join(" "),
  [MediaUIAttributes.MEDIA_RENDITION_LIST]: stringifyRenditionList,
  [MediaUIAttributes.MEDIA_AUDIO_TRACK_LIST]: stringifyAudioTrackList
};
const setAttr = async (child, attrName, attrValue) => {
  var _a2, _b;
  if (!child.isConnected) {
    await delay(0);
  }
  if (typeof attrValue === "boolean" || attrValue == null) {
    return setBooleanAttr(child, attrName, attrValue);
  }
  if (typeof attrValue === "number") {
    return setNumericAttr(child, attrName, attrValue);
  }
  if (typeof attrValue === "string") {
    return setStringAttr(child, attrName, attrValue);
  }
  if (Array.isArray(attrValue) && !attrValue.length) {
    return child.removeAttribute(attrName);
  }
  const val = (_b = (_a2 = CustomAttrSerializer[attrName]) == null ? void 0 : _a2.call(CustomAttrSerializer, attrValue)) != null ? _b : attrValue;
  return child.setAttribute(attrName, val);
};
const isMediaSlotElementDescendant = (el) => {
  var _a2;
  return !!((_a2 = el.closest) == null ? void 0 : _a2.call(el, '*[slot="media"]'));
};
const traverseForMediaStateReceivers = (rootNode, mediaStateReceiverCallback) => {
  if (isMediaSlotElementDescendant(rootNode)) {
    return;
  }
  const traverseForMediaStateReceiversSync = (rootNode2, mediaStateReceiverCallback2) => {
    var _a2, _b;
    if (isMediaStateReceiver(rootNode2)) {
      mediaStateReceiverCallback2(rootNode2);
    }
    const { children = [] } = rootNode2 != null ? rootNode2 : {};
    const shadowChildren = (_b = (_a2 = rootNode2 == null ? void 0 : rootNode2.shadowRoot) == null ? void 0 : _a2.children) != null ? _b : [];
    const allChildren = [...children, ...shadowChildren];
    allChildren.forEach(
      (child) => traverseForMediaStateReceivers(
        child,
        mediaStateReceiverCallback2
      )
    );
  };
  const name = rootNode == null ? void 0 : rootNode.nodeName.toLowerCase();
  if (name.includes("-") && !isMediaStateReceiver(rootNode)) {
    GlobalThis.customElements.whenDefined(name).then(() => {
      traverseForMediaStateReceiversSync(rootNode, mediaStateReceiverCallback);
    });
    return;
  }
  traverseForMediaStateReceiversSync(rootNode, mediaStateReceiverCallback);
};
const propagateMediaState = (els, stateName, val) => {
  els.forEach((el) => {
    if (stateName in el) {
      el[stateName] = val;
      return;
    }
    const relevantAttrs = getMediaUIAttributesFrom(el);
    const attrName = stateName.toLowerCase();
    if (!relevantAttrs.includes(attrName))
      return;
    setAttr(el, attrName, val);
  });
};
const monitorForMediaStateReceivers = (rootNode, registerMediaStateReceiver, unregisterMediaStateReceiver) => {
  traverseForMediaStateReceivers(rootNode, registerMediaStateReceiver);
  const registerMediaStateReceiverHandler = (evt) => {
    var _a2;
    const el = (_a2 = evt == null ? void 0 : evt.composedPath()[0]) != null ? _a2 : evt.target;
    registerMediaStateReceiver(el);
  };
  const unregisterMediaStateReceiverHandler = (evt) => {
    var _a2;
    const el = (_a2 = evt == null ? void 0 : evt.composedPath()[0]) != null ? _a2 : evt.target;
    unregisterMediaStateReceiver(el);
  };
  rootNode.addEventListener(
    MediaUIEvents.REGISTER_MEDIA_STATE_RECEIVER,
    registerMediaStateReceiverHandler
  );
  rootNode.addEventListener(
    MediaUIEvents.UNREGISTER_MEDIA_STATE_RECEIVER,
    unregisterMediaStateReceiverHandler
  );
  const mutationCallback = (mutationsList) => {
    mutationsList.forEach((mutationRecord) => {
      const {
        addedNodes = [],
        removedNodes = [],
        type,
        target,
        attributeName
      } = mutationRecord;
      if (type === "childList") {
        Array.prototype.forEach.call(
          addedNodes,
          (node) => traverseForMediaStateReceivers(
            node,
            registerMediaStateReceiver
          )
        );
        Array.prototype.forEach.call(
          removedNodes,
          (node) => traverseForMediaStateReceivers(
            node,
            unregisterMediaStateReceiver
          )
        );
      } else if (type === "attributes" && attributeName === MediaStateReceiverAttributes.MEDIA_CHROME_ATTRIBUTES) {
        if (isMediaStateReceiver(target)) {
          registerMediaStateReceiver(target);
        } else {
          unregisterMediaStateReceiver(target);
        }
      }
    });
  };
  let prevSlotted = [];
  const slotChangeHandler = (event) => {
    const slotEl = event.target;
    if (slotEl.name === "media")
      return;
    prevSlotted.forEach(
      (node) => traverseForMediaStateReceivers(node, unregisterMediaStateReceiver)
    );
    prevSlotted = [
      ...slotEl.assignedElements({ flatten: true })
    ];
    prevSlotted.forEach(
      (node) => traverseForMediaStateReceivers(node, registerMediaStateReceiver)
    );
  };
  rootNode.addEventListener("slotchange", slotChangeHandler);
  const observer2 = new MutationObserver(mutationCallback);
  observer2.observe(rootNode, {
    childList: true,
    attributes: true,
    subtree: true
  });
  const unsubscribe = () => {
    traverseForMediaStateReceivers(rootNode, unregisterMediaStateReceiver);
    rootNode.removeEventListener("slotchange", slotChangeHandler);
    observer2.disconnect();
    rootNode.removeEventListener(
      MediaUIEvents.REGISTER_MEDIA_STATE_RECEIVER,
      registerMediaStateReceiverHandler
    );
    rootNode.removeEventListener(
      MediaUIEvents.UNREGISTER_MEDIA_STATE_RECEIVER,
      unregisterMediaStateReceiverHandler
    );
  };
  return unsubscribe;
};
if (!GlobalThis.customElements.get("media-controller")) {
  GlobalThis.customElements.define("media-controller", MediaController);
}
var media_controller_default = MediaController;
const Attributes$b = {
  PLACEMENT: "placement",
  BOUNDS: "bounds"
};
function getTemplateHTML$f(_attrs) {
  return (
    /*html*/
    `
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `
  );
}
class MediaTooltip extends GlobalThis.HTMLElement {
  constructor() {
    super();
    this.updateXOffset = () => {
      var _a2;
      if (!isElementVisible(this, { checkOpacity: false, checkVisibilityCSS: false }))
        return;
      const placement = this.placement;
      if (placement === "left" || placement === "right") {
        this.style.removeProperty("--media-tooltip-offset-x");
        return;
      }
      const tooltipStyle = getComputedStyle(this);
      const containingEl = (_a2 = closestComposedNode(this, "#" + this.bounds)) != null ? _a2 : getMediaController(this);
      if (!containingEl)
        return;
      const { x: containerX, width: containerWidth } = containingEl.getBoundingClientRect();
      const { x: tooltipX, width: tooltipWidth } = this.getBoundingClientRect();
      const tooltipRight = tooltipX + tooltipWidth;
      const containerRight = containerX + containerWidth;
      const offsetXVal = tooltipStyle.getPropertyValue(
        "--media-tooltip-offset-x"
      );
      const currOffsetX = offsetXVal ? parseFloat(offsetXVal.replace("px", "")) : 0;
      const marginVal = tooltipStyle.getPropertyValue(
        "--media-tooltip-container-margin"
      );
      const currMargin = marginVal ? parseFloat(marginVal.replace("px", "")) : 0;
      const leftDiff = tooltipX - containerX + currOffsetX - currMargin;
      const rightDiff = tooltipRight - containerRight + currOffsetX + currMargin;
      if (leftDiff < 0) {
        this.style.setProperty("--media-tooltip-offset-x", `${leftDiff}px`);
        return;
      }
      if (rightDiff > 0) {
        this.style.setProperty("--media-tooltip-offset-x", `${rightDiff}px`);
        return;
      }
      this.style.removeProperty("--media-tooltip-offset-x");
    };
    if (!this.shadowRoot) {
      this.attachShadow(this.constructor.shadowRootOptions);
      const attrs = namedNodeMapToObject(this.attributes);
      this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(attrs);
    }
    this.arrowEl = this.shadowRoot.querySelector("#arrow");
    if (Object.prototype.hasOwnProperty.call(this, "placement")) {
      const placement = this.placement;
      delete this.placement;
      this.placement = placement;
    }
  }
  static get observedAttributes() {
    return [Attributes$b.PLACEMENT, Attributes$b.BOUNDS];
  }
  /**
   * Get or set tooltip placement
   */
  get placement() {
    return getStringAttr(this, Attributes$b.PLACEMENT);
  }
  set placement(value) {
    setStringAttr(this, Attributes$b.PLACEMENT, value);
  }
  /**
   * Get or set tooltip container ID selector that will constrain the tooltips
   * horizontal position.
   */
  get bounds() {
    return getStringAttr(this, Attributes$b.BOUNDS);
  }
  set bounds(value) {
    setStringAttr(this, Attributes$b.BOUNDS, value);
  }
}
MediaTooltip.shadowRootOptions = { mode: "open" };
MediaTooltip.getTemplateHTML = getTemplateHTML$f;
if (!GlobalThis.customElements.get("media-tooltip")) {
  GlobalThis.customElements.define("media-tooltip", MediaTooltip);
}
var media_tooltip_default = MediaTooltip;
var __accessCheck$q = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet$q = (obj, member, getter) => {
  __accessCheck$q(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$q = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$m = (obj, member, value, setter) => {
  __accessCheck$q(obj, member, "write to private field");
  member.set(obj, value);
  return value;
};
var __privateMethod$c = (obj, member, method) => {
  __accessCheck$q(obj, member, "access private method");
  return method;
};
var _mediaController$6, _clickListener, _positionTooltip, _keyupListener, _keydownListener, _setupTooltip, setupTooltip_fn;
const Attributes$a = {
  TOOLTIP_PLACEMENT: "tooltipplacement",
  DISABLED: "disabled",
  NO_TOOLTIP: "notooltip"
};
function getTemplateHTML$e(_attrs, _props = {}) {
  return (
    /*html*/
    `
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      ${/*
      Only show outline when keyboard focusing.
      https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo
    */
    ""}
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }
      ${/*
    * hide default focus ring, particularly when using mouse
    */
    ""}
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      slot[name="icon"] {
        display: inline-flex;
        align-items: center;
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        ${/** Make sure unpositioned tooltip doesn't cause page overflow (scroll). */
    ""}
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(_attrs, _props)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${media_tooltip_default.shadowRootOptions.mode}">
          ${media_tooltip_default.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(_attrs)}
        </slot>
      </media-tooltip>
    </slot>
  `
  );
}
function getSlotTemplateHTML$n(_attrs, _props) {
  return (
    /*html*/
    `
    <slot></slot>
  `
  );
}
function getTooltipContentHTML$g() {
  return "";
}
class MediaChromeButton extends GlobalThis.HTMLElement {
  constructor() {
    super();
    __privateAdd$q(this, _setupTooltip);
    __privateAdd$q(this, _mediaController$6, void 0);
    this.preventClick = false;
    this.tooltipEl = null;
    __privateAdd$q(this, _clickListener, (e) => {
      if (!this.preventClick) {
        this.handleClick(e);
      }
      setTimeout(__privateGet$q(this, _positionTooltip), 0);
    });
    __privateAdd$q(this, _positionTooltip, () => {
      var _a2, _b;
      (_b = (_a2 = this.tooltipEl) == null ? void 0 : _a2.updateXOffset) == null ? void 0 : _b.call(_a2);
    });
    __privateAdd$q(this, _keyupListener, (e) => {
      const { key } = e;
      if (!this.keysUsed.includes(key)) {
        this.removeEventListener("keyup", __privateGet$q(this, _keyupListener));
        return;
      }
      if (!this.preventClick) {
        this.handleClick(e);
      }
    });
    __privateAdd$q(this, _keydownListener, (e) => {
      const { metaKey, altKey, key } = e;
      if (metaKey || altKey || !this.keysUsed.includes(key)) {
        this.removeEventListener("keyup", __privateGet$q(this, _keyupListener));
        return;
      }
      this.addEventListener("keyup", __privateGet$q(this, _keyupListener), { once: true });
    });
    if (!this.shadowRoot) {
      this.attachShadow(this.constructor.shadowRootOptions);
      const attrs = namedNodeMapToObject(this.attributes);
      const html = this.constructor.getTemplateHTML(attrs);
      this.shadowRoot.setHTMLUnsafe ? this.shadowRoot.setHTMLUnsafe(html) : this.shadowRoot.innerHTML = html;
    }
    this.tooltipEl = this.shadowRoot.querySelector("media-tooltip");
  }
  static get observedAttributes() {
    return [
      "disabled",
      Attributes$a.TOOLTIP_PLACEMENT,
      MediaStateReceiverAttributes.MEDIA_CONTROLLER,
      MediaUIAttributes.MEDIA_LANG
    ];
  }
  enable() {
    this.addEventListener("click", __privateGet$q(this, _clickListener));
    this.addEventListener("keydown", __privateGet$q(this, _keydownListener));
    this.tabIndex = 0;
  }
  disable() {
    this.removeEventListener("click", __privateGet$q(this, _clickListener));
    this.removeEventListener("keydown", __privateGet$q(this, _keydownListener));
    this.removeEventListener("keyup", __privateGet$q(this, _keyupListener));
    this.tabIndex = -1;
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    var _a2, _b, _c, _d, _e2;
    if (attrName === MediaStateReceiverAttributes.MEDIA_CONTROLLER) {
      if (oldValue) {
        (_b = (_a2 = __privateGet$q(this, _mediaController$6)) == null ? void 0 : _a2.unassociateElement) == null ? void 0 : _b.call(_a2, this);
        __privateSet$m(this, _mediaController$6, null);
      }
      if (newValue && this.isConnected) {
        __privateSet$m(this, _mediaController$6, (_c = this.getRootNode()) == null ? void 0 : _c.getElementById(newValue));
        (_e2 = (_d = __privateGet$q(this, _mediaController$6)) == null ? void 0 : _d.associateElement) == null ? void 0 : _e2.call(_d, this);
      }
    } else if (attrName === "disabled" && newValue !== oldValue) {
      if (newValue == null) {
        this.enable();
      } else {
        this.disable();
      }
    } else if (attrName === Attributes$a.TOOLTIP_PLACEMENT && this.tooltipEl && newValue !== oldValue) {
      this.tooltipEl.placement = newValue;
    } else if (attrName === MediaUIAttributes.MEDIA_LANG) {
      this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML = this.constructor.getTooltipContentHTML();
    }
    __privateGet$q(this, _positionTooltip).call(this);
  }
  connectedCallback() {
    var _a2, _b, _c;
    const { style } = getOrInsertCSSRule(this.shadowRoot, ":host");
    style.setProperty(
      "display",
      `var(--media-control-display, var(--${this.localName}-display, inline-flex))`
    );
    if (!this.hasAttribute("disabled")) {
      this.enable();
    } else {
      this.disable();
    }
    this.setAttribute("role", "button");
    const mediaControllerId = this.getAttribute(
      MediaStateReceiverAttributes.MEDIA_CONTROLLER
    );
    if (mediaControllerId) {
      __privateSet$m(
        this,
        _mediaController$6,
        // @ts-ignore
        (_a2 = this.getRootNode()) == null ? void 0 : _a2.getElementById(mediaControllerId)
      );
      (_c = (_b = __privateGet$q(this, _mediaController$6)) == null ? void 0 : _b.associateElement) == null ? void 0 : _c.call(_b, this);
    }
    GlobalThis.customElements.whenDefined("media-tooltip").then(() => __privateMethod$c(this, _setupTooltip, setupTooltip_fn).call(this));
  }
  disconnectedCallback() {
    var _a2, _b;
    this.disable();
    (_b = (_a2 = __privateGet$q(this, _mediaController$6)) == null ? void 0 : _a2.unassociateElement) == null ? void 0 : _b.call(_a2, this);
    __privateSet$m(this, _mediaController$6, null);
    this.removeEventListener("mouseenter", __privateGet$q(this, _positionTooltip));
    this.removeEventListener("focus", __privateGet$q(this, _positionTooltip));
    this.removeEventListener("click", __privateGet$q(this, _clickListener));
  }
  get keysUsed() {
    return ["Enter", " "];
  }
  /**
   * Get or set tooltip placement
   */
  get tooltipPlacement() {
    return getStringAttr(this, Attributes$a.TOOLTIP_PLACEMENT);
  }
  set tooltipPlacement(value) {
    setStringAttr(this, Attributes$a.TOOLTIP_PLACEMENT, value);
  }
  get mediaController() {
    return getStringAttr(this, MediaStateReceiverAttributes.MEDIA_CONTROLLER);
  }
  set mediaController(value) {
    setStringAttr(this, MediaStateReceiverAttributes.MEDIA_CONTROLLER, value);
  }
  get disabled() {
    return getBooleanAttr(this, Attributes$a.DISABLED);
  }
  set disabled(value) {
    setBooleanAttr(this, Attributes$a.DISABLED, value);
  }
  get noTooltip() {
    return getBooleanAttr(this, Attributes$a.NO_TOOLTIP);
  }
  set noTooltip(value) {
    setBooleanAttr(this, Attributes$a.NO_TOOLTIP, value);
  }
  /**
   * @abstract
   */
  handleClick(_e2) {
  }
}
_mediaController$6 = /* @__PURE__ */ new WeakMap();
_clickListener = /* @__PURE__ */ new WeakMap();
_positionTooltip = /* @__PURE__ */ new WeakMap();
_keyupListener = /* @__PURE__ */ new WeakMap();
_keydownListener = /* @__PURE__ */ new WeakMap();
_setupTooltip = /* @__PURE__ */ new WeakSet();
setupTooltip_fn = function() {
  this.addEventListener("mouseenter", __privateGet$q(this, _positionTooltip));
  this.addEventListener("focus", __privateGet$q(this, _positionTooltip));
  this.addEventListener("click", __privateGet$q(this, _clickListener));
  const initialPlacement = this.tooltipPlacement;
  if (initialPlacement && this.tooltipEl) {
    this.tooltipEl.placement = initialPlacement;
  }
};
MediaChromeButton.shadowRootOptions = { mode: "open" };
MediaChromeButton.getTemplateHTML = getTemplateHTML$e;
MediaChromeButton.getSlotTemplateHTML = getSlotTemplateHTML$n;
MediaChromeButton.getTooltipContentHTML = getTooltipContentHTML$g;
if (!GlobalThis.customElements.get("media-chrome-button")) {
  GlobalThis.customElements.define("media-chrome-button", MediaChromeButton);
}
const airplayIcon = `<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`;
function getSlotTemplateHTML$m(_attrs) {
  return (
    /*html*/
    `
    <style>
      :host([${MediaUIAttributes.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      ${/* Double negative, but safer if display doesn't equal 'block' */
    ""}
      :host(:not([${MediaUIAttributes.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${MediaUIAttributes.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${MediaUIAttributes.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${airplayIcon}</slot>
      <slot name="exit">${airplayIcon}</slot>
    </slot>
  `
  );
}
function getTooltipContentHTML$f() {
  return (
    /*html*/
    `
    <slot name="tooltip-enter">${t("start airplay")}</slot>
    <slot name="tooltip-exit">${t("stop airplay")}</slot>
  `
  );
}
const updateAriaLabel$a = (el) => {
  const label = el.mediaIsAirplaying ? t("stop airplay") : t("start airplay");
  el.setAttribute("aria-label", label);
};
class MediaAirplayButton extends MediaChromeButton {
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_IS_AIRPLAYING,
      MediaUIAttributes.MEDIA_AIRPLAY_UNAVAILABLE
    ];
  }
  connectedCallback() {
    super.connectedCallback();
    updateAriaLabel$a(this);
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    super.attributeChangedCallback(attrName, oldValue, newValue);
    if (attrName === MediaUIAttributes.MEDIA_IS_AIRPLAYING) {
      updateAriaLabel$a(this);
    }
  }
  /**
   * Are we currently airplaying
   */
  get mediaIsAirplaying() {
    return getBooleanAttr(this, MediaUIAttributes.MEDIA_IS_AIRPLAYING);
  }
  set mediaIsAirplaying(value) {
    setBooleanAttr(this, MediaUIAttributes.MEDIA_IS_AIRPLAYING, value);
  }
  /**
   * Airplay unavailability state
   */
  get mediaAirplayUnavailable() {
    return getStringAttr(this, MediaUIAttributes.MEDIA_AIRPLAY_UNAVAILABLE);
  }
  set mediaAirplayUnavailable(value) {
    setStringAttr(this, MediaUIAttributes.MEDIA_AIRPLAY_UNAVAILABLE, value);
  }
  handleClick() {
    const evt = new GlobalThis.CustomEvent(
      MediaUIEvents.MEDIA_AIRPLAY_REQUEST,
      {
        composed: true,
        bubbles: true
      }
    );
    this.dispatchEvent(evt);
  }
}
MediaAirplayButton.getSlotTemplateHTML = getSlotTemplateHTML$m;
MediaAirplayButton.getTooltipContentHTML = getTooltipContentHTML$f;
if (!GlobalThis.customElements.get("media-airplay-button")) {
  GlobalThis.customElements.define("media-airplay-button", MediaAirplayButton);
}
const ccIconOn$1 = `<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`;
const ccIconOff$1 = `<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;
function getSlotTemplateHTML$l(_attrs) {
  return (
    /*html*/
    `
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      ${/* Double negative, but safer if display doesn't equal 'block' */
    ""}
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${ccIconOn$1}</slot>
      <slot name="off">${ccIconOff$1}</slot>
    </slot>
  `
  );
}
function getTooltipContentHTML$e() {
  return (
    /*html*/
    `
    <slot name="tooltip-enable">${t("Enable captions")}</slot>
    <slot name="tooltip-disable">${t("Disable captions")}</slot>
  `
  );
}
const updateAriaChecked$1 = (el) => {
  el.setAttribute("aria-checked", areSubsOn(el).toString());
};
class MediaCaptionsButton extends MediaChromeButton {
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_SUBTITLES_LIST,
      MediaUIAttributes.MEDIA_SUBTITLES_SHOWING
    ];
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "button");
    this.setAttribute("aria-label", t("closed captions"));
    updateAriaChecked$1(this);
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    super.attributeChangedCallback(attrName, oldValue, newValue);
    if (attrName === MediaUIAttributes.MEDIA_SUBTITLES_SHOWING) {
      updateAriaChecked$1(this);
    }
  }
  /**
   * An array of TextTrack-like objects.
   * Objects must have the properties: kind, language, and label.
   */
  get mediaSubtitlesList() {
    return getSubtitlesListAttr$2(this, MediaUIAttributes.MEDIA_SUBTITLES_LIST);
  }
  set mediaSubtitlesList(list) {
    setSubtitlesListAttr$2(this, MediaUIAttributes.MEDIA_SUBTITLES_LIST, list);
  }
  /**
   * An array of TextTrack-like objects.
   * Objects must have the properties: kind, language, and label.
   */
  get mediaSubtitlesShowing() {
    return getSubtitlesListAttr$2(
      this,
      MediaUIAttributes.MEDIA_SUBTITLES_SHOWING
    );
  }
  set mediaSubtitlesShowing(list) {
    setSubtitlesListAttr$2(this, MediaUIAttributes.MEDIA_SUBTITLES_SHOWING, list);
  }
  handleClick() {
    this.dispatchEvent(
      new GlobalThis.CustomEvent(MediaUIEvents.MEDIA_TOGGLE_SUBTITLES_REQUEST, {
        composed: true,
        bubbles: true
      })
    );
  }
}
MediaCaptionsButton.getSlotTemplateHTML = getSlotTemplateHTML$l;
MediaCaptionsButton.getTooltipContentHTML = getTooltipContentHTML$e;
const getSubtitlesListAttr$2 = (el, attrName) => {
  const attrVal = el.getAttribute(attrName);
  return attrVal ? parseTextTracksStr(attrVal) : [];
};
const setSubtitlesListAttr$2 = (el, attrName, list) => {
  if (!(list == null ? void 0 : list.length)) {
    el.removeAttribute(attrName);
    return;
  }
  const newValStr = stringifyTextTrackList(list);
  const oldVal = el.getAttribute(attrName);
  if (oldVal === newValStr)
    return;
  el.setAttribute(attrName, newValStr);
};
if (!GlobalThis.customElements.get("media-captions-button")) {
  GlobalThis.customElements.define(
    "media-captions-button",
    MediaCaptionsButton
  );
}
const enterIcon = `<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg>`;
const exitIcon = `<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg>`;
function getSlotTemplateHTML$k(_attrs) {
  return (
    /*html*/
    `
    <style>
      :host([${MediaUIAttributes.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      ${/* Double negative, but safer if display doesn't equal 'block' */
    ""}
      :host(:not([${MediaUIAttributes.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${MediaUIAttributes.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${MediaUIAttributes.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${enterIcon}</slot>
      <slot name="exit">${exitIcon}</slot>
    </slot>
  `
  );
}
function getTooltipContentHTML$d() {
  return (
    /*html*/
    `
    <slot name="tooltip-enter">${t("Start casting")}</slot>
    <slot name="tooltip-exit">${t("Stop casting")}</slot>
  `
  );
}
const updateAriaLabel$9 = (el) => {
  const label = el.mediaIsCasting ? t("stop casting") : t("start casting");
  el.setAttribute("aria-label", label);
};
class MediaCastButton extends MediaChromeButton {
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_IS_CASTING,
      MediaUIAttributes.MEDIA_CAST_UNAVAILABLE
    ];
  }
  connectedCallback() {
    super.connectedCallback();
    updateAriaLabel$9(this);
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    super.attributeChangedCallback(attrName, oldValue, newValue);
    if (attrName === MediaUIAttributes.MEDIA_IS_CASTING) {
      updateAriaLabel$9(this);
    }
  }
  /**
   * @type {boolean} Are we currently casting
   */
  get mediaIsCasting() {
    return getBooleanAttr(this, MediaUIAttributes.MEDIA_IS_CASTING);
  }
  set mediaIsCasting(value) {
    setBooleanAttr(this, MediaUIAttributes.MEDIA_IS_CASTING, value);
  }
  /**
   * @type {string | undefined} Cast unavailability state
   */
  get mediaCastUnavailable() {
    return getStringAttr(this, MediaUIAttributes.MEDIA_CAST_UNAVAILABLE);
  }
  set mediaCastUnavailable(value) {
    setStringAttr(this, MediaUIAttributes.MEDIA_CAST_UNAVAILABLE, value);
  }
  handleClick() {
    const eventName = this.mediaIsCasting ? MediaUIEvents.MEDIA_EXIT_CAST_REQUEST : MediaUIEvents.MEDIA_ENTER_CAST_REQUEST;
    this.dispatchEvent(
      new GlobalThis.CustomEvent(eventName, { composed: true, bubbles: true })
    );
  }
}
MediaCastButton.getSlotTemplateHTML = getSlotTemplateHTML$k;
MediaCastButton.getTooltipContentHTML = getTooltipContentHTML$d;
if (!GlobalThis.customElements.get("media-cast-button")) {
  GlobalThis.customElements.define("media-cast-button", MediaCastButton);
}
var __accessCheck$p = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet$p = (obj, member, getter) => {
  __accessCheck$p(obj, member, "read from private field");
  return member.get(obj);
};
var __privateAdd$p = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$l = (obj, member, value, setter) => {
  __accessCheck$p(obj, member, "write to private field");
  member.set(obj, value);
  return value;
};
var __privateMethod$b = (obj, member, method) => {
  __accessCheck$p(obj, member, "access private method");
  return method;
};
var _isInit, _previouslyFocused$1, _invokerElement$1, _init, init_fn, _handleOpen$1, handleOpen_fn$1, _handleClosed$1, handleClosed_fn$1, _handleInvoke$1, handleInvoke_fn$1, _handleFocusOut$1, handleFocusOut_fn$1, _handleKeyDown$2, handleKeyDown_fn$1;
function getTemplateHTML$d(_attrs) {
  return (
    /*html*/
    `
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        ${/** The hide transition is defined below after a short delay. */
    ""}
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(_attrs)}
  `
  );
}
function getSlotTemplateHTML$j(_attrs) {
  return (
    /*html*/
    `
    <slot id="content"></slot>
  `
  );
}
const Attributes$9 = {
  OPEN: "open",
  ANCHOR: "anchor"
};
class MediaChromeDialog extends GlobalThis.HTMLElement {
  constructor() {
    super();
    __privateAdd$p(this, _init);
    __privateAdd$p(this, _handleOpen$1);
    __privateAdd$p(this, _handleClosed$1);
    __privateAdd$p(this, _handleInvoke$1);
    __privateAdd$p(this, _handleFocusOut$1);
    __privateAdd$p(this, _handleKeyDown$2);
    __privateAdd$p(this, _isInit, false);
    __privateAdd$p(this, _previouslyFocused$1, null);
    __privateAdd$p(this, _invokerElement$1, null);
  }
  static get observedAttributes() {
    return [Attributes$9.OPEN, Attributes$9.ANCHOR];
  }
  get open() {
    return getBooleanAttr(this, Attributes$9.OPEN);
  }
  set open(value) {
    setBooleanAttr(this, Attributes$9.OPEN, value);
  }
  handleEvent(event) {
    switch (event.type) {
      case "invoke":
        __privateMethod$b(this, _handleInvoke$1, handleInvoke_fn$1).call(this, event);
        break;
      case "focusout":
        __privateMethod$b(this, _handleFocusOut$1, handleFocusOut_fn$1).call(this, event);
        break;
      case "keydown":
        __privateMethod$b(this, _handleKeyDown$2, handleKeyDown_fn$1).call(this, event);
        break;
    }
  }
  connectedCallback() {
    __privateMethod$b(this, _init, init_fn).call(this);
    if (!this.role) {
      this.role = "dialog";
    }
    this.addEventListener("invoke", this);
    this.addEventListener("focusout", this);
    this.addEventListener("keydown", this);
  }
  disconnectedCallback() {
    this.removeEventListener("invoke", this);
    this.removeEventListener("focusout", this);
    this.removeEventListener("keydown", this);
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    __privateMethod$b(this, _init, init_fn).call(this);
    if (attrName === Attributes$9.OPEN && newValue !== oldValue) {
      if (this.open) {
        __privateMethod$b(this, _handleOpen$1, handleOpen_fn$1).call(this);
      } else {
        __privateMethod$b(this, _handleClosed$1, handleClosed_fn$1).call(this);
      }
    }
  }
  focus() {
    __privateSet$l(this, _previouslyFocused$1, getActiveElement());
    const focusCancelled = !this.dispatchEvent(new Event("focus", { composed: true, cancelable: true }));
    const focusInCancelled = !this.dispatchEvent(new Event("focusin", { composed: true, bubbles: true, cancelable: true }));
    if (focusCancelled || focusInCancelled)
      return;
    const focusable = this.querySelector(
      '[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]'
    );
    focusable == null ? void 0 : focusable.focus();
  }
  get keysUsed() {
    return ["Escape", "Tab"];
  }
}
_isInit = /* @__PURE__ */ new WeakMap();
_previouslyFocused$1 = /* @__PURE__ */ new WeakMap();
_invokerElement$1 = /* @__PURE__ */ new WeakMap();
_init = /* @__PURE__ */ new WeakSet();
init_fn = function() {
  if (__privateGet$p(this, _isInit))
    return;
  __privateSet$l(this, _isInit, true);
  if (!this.shadowRoot) {
    this.attachShadow(this.constructor.shadowRootOptions);
    const attrs = namedNodeMapToObject(this.attributes);
    this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(attrs);
    queueMicrotask(() => {
      const { style } = getOrInsertCSSRule(this.shadowRoot, ":host");
      style.setProperty(
        "transition",
        `display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in`
      );
    });
  }
};
_handleOpen$1 = /* @__PURE__ */ new WeakSet();
handleOpen_fn$1 = function() {
  var _a2;
  (_a2 = __privateGet$p(this, _invokerElement$1)) == null ? void 0 : _a2.setAttribute("aria-expanded", "true");
  this.dispatchEvent(new Event("open", { composed: true, bubbles: true }));
  this.addEventListener("transitionend", () => this.focus(), { once: true });
};
_handleClosed$1 = /* @__PURE__ */ new WeakSet();
handleClosed_fn$1 = function() {
  var _a2;
  (_a2 = __privateGet$p(this, _invokerElement$1)) == null ? void 0 : _a2.setAttribute("aria-expanded", "false");
  this.dispatchEvent(new Event("close", { composed: true, bubbles: true }));
};
_handleInvoke$1 = /* @__PURE__ */ new WeakSet();
handleInvoke_fn$1 = function(event) {
  __privateSet$l(this, _invokerElement$1, event.relatedTarget);
  if (!containsComposedNode(this, event.relatedTarget)) {
    this.open = !this.open;
  }
};
_handleFocusOut$1 = /* @__PURE__ */ new WeakSet();
handleFocusOut_fn$1 = function(event) {
  var _a2;
  if (!containsComposedNode(this, event.relatedTarget)) {
    (_a2 = __privateGet$p(this, _previouslyFocused$1)) == null ? void 0 : _a2.focus();
    if (__privateGet$p(this, _invokerElement$1) && __privateGet$p(this, _invokerElement$1) !== event.relatedTarget && this.open) {
      this.open = false;
    }
  }
};
_handleKeyDown$2 = /* @__PURE__ */ new WeakSet();
handleKeyDown_fn$1 = function(event) {
  var _a2, _b, _c, _d, _e2;
  const { key, ctrlKey, altKey, metaKey } = event;
  if (ctrlKey || altKey || metaKey) {
    return;
  }
  if (!this.keysUsed.includes(key)) {
    return;
  }
  event.preventDefault();
  event.stopPropagation();
  if (key === "Tab") {
    if (event.shiftKey) {
      (_b = (_a2 = this.previousElementSibling) == null ? void 0 : _a2.focus) == null ? void 0 : _b.call(_a2);
    } else {
      (_d = (_c = this.nextElementSibling) == null ? void 0 : _c.focus) == null ? void 0 : _d.call(_c);
    }
    this.blur();
  } else if (key === "Escape") {
    (_e2 = __privateGet$p(this, _previouslyFocused$1)) == null ? void 0 : _e2.focus();
    this.open = false;
  }
};
MediaChromeDialog.shadowRootOptions = { mode: "open" };
MediaChromeDialog.getTemplateHTML = getTemplateHTML$d;
MediaChromeDialog.getSlotTemplateHTML = getSlotTemplateHTML$j;
if (!GlobalThis.customElements.get("media-chrome-dialog")) {
  GlobalThis.customElements.define("media-chrome-dialog", MediaChromeDialog);
}
var __accessCheck$o = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet$o = (obj, member, getter) => {
  __accessCheck$o(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$o = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$k = (obj, member, value, setter) => {
  __accessCheck$o(obj, member, "write to private field");
  member.set(obj, value);
  return value;
};
var __privateMethod$a = (obj, member, method) => {
  __accessCheck$o(obj, member, "access private method");
  return method;
};
var _mediaController$5, _isInputTarget, _startpoint, _endpoint, _cssRules, _segments, _onFocusIn, _onFocusOut, _updateComputedStyles, _updateActiveSegment, updateActiveSegment_fn, _enableUserEvents, enableUserEvents_fn, _disableUserEvents, disableUserEvents_fn, _handlePointerDown, handlePointerDown_fn, _handlePointerEnter, handlePointerEnter_fn, _handlePointerUp, handlePointerUp_fn, _handlePointerLeave, handlePointerLeave_fn, _handlePointerMove$1, handlePointerMove_fn$1;
function getTemplateHTML$c(_attrs) {
  return (
    /*html*/
    `
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        ${/* Don't horizontal align w/ justify-content! #container can go negative on the x-axis w/ small width. */
    ""}
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; ${/* Prevent scrolling when dragging on mobile. */
    ""}
      }

      ${/* Reset before `outline` on track could be set by a CSS var */
    ""}
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        ${/* Not using the CSS `padding` prop makes it easier for slide open volume ranges so the width can be zero. */
    ""}
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        ${/* The input range acts as a hover and hit zone for input events. */
    ""}
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, 0);
        height: var(--media-time-range-hover-height, max(100% , 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; ${/* Hides the slider so that custom slider can be made */
    ""}
        -webkit-tap-highlight-color: transparent;
        background: transparent; ${/* Otherwise white in Chrome */
    ""}
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, 0);
          height: var(--media-time-range-hover-height, max(100%, 20px));
        }
      }

      ${/* Special styling for WebKit/Blink */
    ""}
      ${/* Make thumb width/height small so it has no effect on range click position. */
    ""}
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      ${/* The thumb is not positioned relative to the track in Firefox */
    ""}
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        ${/* Required for Safari to stop glitching track height on hover */
    ""}
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }

      /* Visible label for accessibility - positioned off-screen but technically visible (Firefox requires visible labels) */
      #range-label {
        position: absolute;
        left: -10000px;
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        pointer-events: none;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments" aria-hidden="true"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
        <input id="range" type="range" min="0" max="1" step="any" value="0">
        <label for="range" id="range-label"></label>

      ${this.getContainerTemplateHTML(_attrs)}
    </div>
    <div id="rightgap"></div>
  `
  );
}
function getContainerTemplateHTML$1(_attrs) {
  return "";
}
class MediaChromeRange extends GlobalThis.HTMLElement {
  constructor() {
    super();
    __privateAdd$o(this, _updateActiveSegment);
    __privateAdd$o(this, _enableUserEvents);
    __privateAdd$o(this, _disableUserEvents);
    __privateAdd$o(this, _handlePointerDown);
    __privateAdd$o(this, _handlePointerEnter);
    __privateAdd$o(this, _handlePointerUp);
    __privateAdd$o(this, _handlePointerLeave);
    __privateAdd$o(this, _handlePointerMove$1);
    __privateAdd$o(this, _mediaController$5, void 0);
    __privateAdd$o(this, _isInputTarget, void 0);
    __privateAdd$o(this, _startpoint, void 0);
    __privateAdd$o(this, _endpoint, void 0);
    __privateAdd$o(this, _cssRules, {});
    __privateAdd$o(this, _segments, []);
    __privateAdd$o(this, _onFocusIn, () => {
      if (this.range.matches(":focus-visible")) {
        const { style } = getOrInsertCSSRule(this.shadowRoot, ":host");
        style.setProperty(
          "--_focus-visible-box-shadow",
          "var(--_focus-box-shadow)"
        );
      }
    });
    __privateAdd$o(this, _onFocusOut, () => {
      const { style } = getOrInsertCSSRule(this.shadowRoot, ":host");
      style.removeProperty("--_focus-visible-box-shadow");
    });
    __privateAdd$o(this, _updateComputedStyles, () => {
      const clipping = this.shadowRoot.querySelector("#segments-clipping");
      if (clipping)
        clipping.parentNode.append(clipping);
    });
    if (!this.shadowRoot) {
      this.attachShadow(this.constructor.shadowRootOptions);
      const attrs = namedNodeMapToObject(this.attributes);
      const html = this.constructor.getTemplateHTML(attrs);
      this.shadowRoot.setHTMLUnsafe ? this.shadowRoot.setHTMLUnsafe(html) : this.shadowRoot.innerHTML = html;
    }
    this.container = this.shadowRoot.querySelector("#container");
    __privateSet$k(this, _startpoint, this.shadowRoot.querySelector("#startpoint"));
    __privateSet$k(this, _endpoint, this.shadowRoot.querySelector("#endpoint"));
    this.range = this.shadowRoot.querySelector("#range");
    this.appearance = this.shadowRoot.querySelector("#appearance");
  }
  static get observedAttributes() {
    return [
      "disabled",
      "aria-disabled",
      MediaStateReceiverAttributes.MEDIA_CONTROLLER
    ];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    var _a2, _b, _c, _d, _e2;
    if (attrName === MediaStateReceiverAttributes.MEDIA_CONTROLLER) {
      if (oldValue) {
        (_b = (_a2 = __privateGet$o(this, _mediaController$5)) == null ? void 0 : _a2.unassociateElement) == null ? void 0 : _b.call(_a2, this);
        __privateSet$k(this, _mediaController$5, null);
      }
      if (newValue && this.isConnected) {
        __privateSet$k(this, _mediaController$5, (_c = this.getRootNode()) == null ? void 0 : _c.getElementById(newValue));
        (_e2 = (_d = __privateGet$o(this, _mediaController$5)) == null ? void 0 : _d.associateElement) == null ? void 0 : _e2.call(_d, this);
      }
    } else if (attrName === "disabled" || attrName === "aria-disabled" && oldValue !== newValue) {
      if (newValue == null) {
        this.range.removeAttribute(attrName);
        __privateMethod$a(this, _enableUserEvents, enableUserEvents_fn).call(this);
      } else {
        this.range.setAttribute(attrName, newValue);
        __privateMethod$a(this, _disableUserEvents, disableUserEvents_fn).call(this);
      }
    }
  }
  connectedCallback() {
    var _a2, _b, _c;
    const { style } = getOrInsertCSSRule(this.shadowRoot, ":host");
    style.setProperty(
      "display",
      `var(--media-control-display, var(--${this.localName}-display, inline-flex))`
    );
    __privateGet$o(this, _cssRules).pointer = getOrInsertCSSRule(this.shadowRoot, "#pointer");
    __privateGet$o(this, _cssRules).progress = getOrInsertCSSRule(this.shadowRoot, "#progress");
    __privateGet$o(this, _cssRules).thumb = getOrInsertCSSRule(
      this.shadowRoot,
      '#thumb, ::slotted([slot="thumb"])'
    );
    __privateGet$o(this, _cssRules).activeSegment = getOrInsertCSSRule(
      this.shadowRoot,
      "#segments-clipping rect:nth-child(0)"
    );
    const mediaControllerId = this.getAttribute(
      MediaStateReceiverAttributes.MEDIA_CONTROLLER
    );
    if (mediaControllerId) {
      __privateSet$k(this, _mediaController$5, (_a2 = this.getRootNode()) == null ? void 0 : _a2.getElementById(
        mediaControllerId
      ));
      (_c = (_b = __privateGet$o(this, _mediaController$5)) == null ? void 0 : _b.associateElement) == null ? void 0 : _c.call(_b, this);
    }
    this.updateBar();
    this.shadowRoot.addEventListener("focusin", __privateGet$o(this, _onFocusIn));
    this.shadowRoot.addEventListener("focusout", __privateGet$o(this, _onFocusOut));
    __privateMethod$a(this, _enableUserEvents, enableUserEvents_fn).call(this);
    observeResize(this.container, __privateGet$o(this, _updateComputedStyles));
  }
  disconnectedCallback() {
    var _a2, _b;
    __privateMethod$a(this, _disableUserEvents, disableUserEvents_fn).call(this);
    (_b = (_a2 = __privateGet$o(this, _mediaController$5)) == null ? void 0 : _a2.unassociateElement) == null ? void 0 : _b.call(_a2, this);
    __privateSet$k(this, _mediaController$5, null);
    this.shadowRoot.removeEventListener("focusin", __privateGet$o(this, _onFocusIn));
    this.shadowRoot.removeEventListener("focusout", __privateGet$o(this, _onFocusOut));
    unobserveResize(this.container, __privateGet$o(this, _updateComputedStyles));
  }
  updatePointerBar(evt) {
    var _a2;
    (_a2 = __privateGet$o(this, _cssRules).pointer) == null ? void 0 : _a2.style.setProperty(
      "width",
      `${this.getPointerRatio(evt) * 100}%`
    );
  }
  updateBar() {
    var _a2, _b;
    const rangePercent = this.range.valueAsNumber * 100;
    (_a2 = __privateGet$o(this, _cssRules).progress) == null ? void 0 : _a2.style.setProperty("width", `${rangePercent}%`);
    (_b = __privateGet$o(this, _cssRules).thumb) == null ? void 0 : _b.style.setProperty("left", `${rangePercent}%`);
  }
  updateSegments(segments) {
    const clipping = this.shadowRoot.querySelector("#segments-clipping");
    clipping.textContent = "";
    this.container.classList.toggle("segments", !!(segments == null ? void 0 : segments.length));
    if (!(segments == null ? void 0 : segments.length))
      return;
    const normalized = [
      .../* @__PURE__ */ new Set([
        +this.range.min,
        ...segments.flatMap((s3) => [s3.start, s3.end]),
        +this.range.max
      ])
    ];
    __privateSet$k(this, _segments, [...normalized]);
    const lastMarker = normalized.pop();
    for (const [i2, marker] of normalized.entries()) {
      const [isFirst, isLast] = [i2 === 0, i2 === normalized.length - 1];
      const x2 = isFirst ? "calc(var(--segments-gap) / -1)" : `${marker * 100}%`;
      const x22 = isLast ? lastMarker : normalized[i2 + 1];
      const width = `calc(${(x22 - marker) * 100}%${isFirst || isLast ? "" : ` - var(--segments-gap)`})`;
      const segmentEl = Document$1.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
      );
      const cssRule = insertCSSRule(
        this.shadowRoot,
        `#segments-clipping rect:nth-child(${i2 + 1})`
      );
      cssRule.style.setProperty("x", x2);
      cssRule.style.setProperty("width", width);
      clipping.append(segmentEl);
    }
  }
  getPointerRatio(evt) {
    return getPointProgressOnLine(
      evt.clientX,
      evt.clientY,
      __privateGet$o(this, _startpoint).getBoundingClientRect(),
      __privateGet$o(this, _endpoint).getBoundingClientRect()
    );
  }
  get dragging() {
    return this.hasAttribute("dragging");
  }
  handleEvent(evt) {
    switch (evt.type) {
      case "pointermove":
        __privateMethod$a(this, _handlePointerMove$1, handlePointerMove_fn$1).call(this, evt);
        break;
      case "input":
        this.updateBar();
        break;
      case "pointerenter":
        __privateMethod$a(this, _handlePointerEnter, handlePointerEnter_fn).call(this, evt);
        break;
      case "pointerdown":
        __privateMethod$a(this, _handlePointerDown, handlePointerDown_fn).call(this, evt);
        break;
      case "pointerup":
        __privateMethod$a(this, _handlePointerUp, handlePointerUp_fn).call(this);
        break;
      case "pointerleave":
        __privateMethod$a(this, _handlePointerLeave, handlePointerLeave_fn).call(this);
        break;
    }
  }
  get keysUsed() {
    return ["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"];
  }
}
_mediaController$5 = /* @__PURE__ */ new WeakMap();
_isInputTarget = /* @__PURE__ */ new WeakMap();
_startpoint = /* @__PURE__ */ new WeakMap();
_endpoint = /* @__PURE__ */ new WeakMap();
_cssRules = /* @__PURE__ */ new WeakMap();
_segments = /* @__PURE__ */ new WeakMap();
_onFocusIn = /* @__PURE__ */ new WeakMap();
_onFocusOut = /* @__PURE__ */ new WeakMap();
_updateComputedStyles = /* @__PURE__ */ new WeakMap();
_updateActiveSegment = /* @__PURE__ */ new WeakSet();
updateActiveSegment_fn = function(evt) {
  const rule = __privateGet$o(this, _cssRules).activeSegment;
  if (!rule)
    return;
  const pointerRatio = this.getPointerRatio(evt);
  const segmentIndex = __privateGet$o(this, _segments).findIndex((start, i2, arr) => {
    const end = arr[i2 + 1];
    return end != null && pointerRatio >= start && pointerRatio <= end;
  });
  const selectorText = `#segments-clipping rect:nth-child(${segmentIndex + 1})`;
  if (rule.selectorText != selectorText || !rule.style.transform) {
    rule.selectorText = selectorText;
    rule.style.setProperty(
      "transform",
      "var(--media-range-segment-hover-transform, scaleY(2))"
    );
  }
};
_enableUserEvents = /* @__PURE__ */ new WeakSet();
enableUserEvents_fn = function() {
  if (this.hasAttribute("disabled") || !this.isConnected)
    return;
  this.addEventListener("input", this);
  this.addEventListener("pointerdown", this);
  this.addEventListener("pointerenter", this);
};
_disableUserEvents = /* @__PURE__ */ new WeakSet();
disableUserEvents_fn = function() {
  var _a2, _b;
  this.removeEventListener("input", this);
  this.removeEventListener("pointerdown", this);
  this.removeEventListener("pointerenter", this);
  this.removeEventListener("pointerleave", this);
  (_a2 = GlobalThis.window) == null ? void 0 : _a2.removeEventListener("pointerup", this);
  (_b = GlobalThis.window) == null ? void 0 : _b.removeEventListener("pointermove", this);
};
_handlePointerDown = /* @__PURE__ */ new WeakSet();
handlePointerDown_fn = function(evt) {
  var _a2;
  __privateSet$k(this, _isInputTarget, evt.composedPath().includes(this.range));
  (_a2 = GlobalThis.window) == null ? void 0 : _a2.addEventListener("pointerup", this, { once: true });
};
_handlePointerEnter = /* @__PURE__ */ new WeakSet();
handlePointerEnter_fn = function(evt) {
  var _a2;
  if (evt.pointerType !== "mouse")
    __privateMethod$a(this, _handlePointerDown, handlePointerDown_fn).call(this, evt);
  this.addEventListener("pointerleave", this, { once: true });
  (_a2 = GlobalThis.window) == null ? void 0 : _a2.addEventListener("pointermove", this);
};
_handlePointerUp = /* @__PURE__ */ new WeakSet();
handlePointerUp_fn = function() {
  var _a2;
  (_a2 = GlobalThis.window) == null ? void 0 : _a2.removeEventListener("pointerup", this);
  this.toggleAttribute("dragging", false);
  this.range.disabled = this.hasAttribute("disabled");
};
_handlePointerLeave = /* @__PURE__ */ new WeakSet();
handlePointerLeave_fn = function() {
  var _a2, _b;
  this.removeEventListener("pointerleave", this);
  (_a2 = GlobalThis.window) == null ? void 0 : _a2.removeEventListener("pointermove", this);
  this.toggleAttribute("dragging", false);
  this.range.disabled = this.hasAttribute("disabled");
  (_b = __privateGet$o(this, _cssRules).activeSegment) == null ? void 0 : _b.style.removeProperty("transform");
};
_handlePointerMove$1 = /* @__PURE__ */ new WeakSet();
handlePointerMove_fn$1 = function(evt) {
  if (evt.pointerType === "pen" && evt.buttons === 0) {
    return;
  }
  this.toggleAttribute(
    "dragging",
    evt.buttons === 1 || evt.pointerType !== "mouse"
  );
  this.updatePointerBar(evt);
  __privateMethod$a(this, _updateActiveSegment, updateActiveSegment_fn).call(this, evt);
  if (this.dragging && (evt.pointerType !== "mouse" || !__privateGet$o(this, _isInputTarget))) {
    this.range.disabled = true;
    this.range.valueAsNumber = this.getPointerRatio(evt);
    this.range.dispatchEvent(
      new Event("input", { bubbles: true, composed: true })
    );
  }
};
MediaChromeRange.shadowRootOptions = { mode: "open" };
MediaChromeRange.getTemplateHTML = getTemplateHTML$c;
MediaChromeRange.getContainerTemplateHTML = getContainerTemplateHTML$1;
if (!GlobalThis.customElements.get("media-chrome-range")) {
  GlobalThis.customElements.define("media-chrome-range", MediaChromeRange);
}
var __accessCheck$n = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet$n = (obj, member, getter) => {
  __accessCheck$n(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$n = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$j = (obj, member, value, setter) => {
  __accessCheck$n(obj, member, "write to private field");
  member.set(obj, value);
  return value;
};
var _mediaController$4;
function getTemplateHTML$b(_attrs) {
  return (
    /*html*/
    `
    <style>
      :host {
        ${/* Need position to display above video for some reason */
    ""}
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `
  );
}
class MediaControlBar extends GlobalThis.HTMLElement {
  constructor() {
    super();
    __privateAdd$n(this, _mediaController$4, void 0);
    if (!this.shadowRoot) {
      this.attachShadow(this.constructor.shadowRootOptions);
      const attrs = namedNodeMapToObject(this.attributes);
      this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(attrs);
    }
  }
  static get observedAttributes() {
    return [MediaStateReceiverAttributes.MEDIA_CONTROLLER];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    var _a2, _b, _c, _d, _e2;
    if (attrName === MediaStateReceiverAttributes.MEDIA_CONTROLLER) {
      if (oldValue) {
        (_b = (_a2 = __privateGet$n(this, _mediaController$4)) == null ? void 0 : _a2.unassociateElement) == null ? void 0 : _b.call(_a2, this);
        __privateSet$j(this, _mediaController$4, null);
      }
      if (newValue && this.isConnected) {
        __privateSet$j(this, _mediaController$4, (_c = this.getRootNode()) == null ? void 0 : _c.getElementById(newValue));
        (_e2 = (_d = __privateGet$n(this, _mediaController$4)) == null ? void 0 : _d.associateElement) == null ? void 0 : _e2.call(_d, this);
      }
    }
  }
  connectedCallback() {
    var _a2, _b, _c;
    const mediaControllerId = this.getAttribute(
      MediaStateReceiverAttributes.MEDIA_CONTROLLER
    );
    if (mediaControllerId) {
      __privateSet$j(this, _mediaController$4, (_a2 = this.getRootNode()) == null ? void 0 : _a2.getElementById(
        mediaControllerId
      ));
      (_c = (_b = __privateGet$n(this, _mediaController$4)) == null ? void 0 : _b.associateElement) == null ? void 0 : _c.call(_b, this);
    }
  }
  disconnectedCallback() {
    var _a2, _b;
    (_b = (_a2 = __privateGet$n(this, _mediaController$4)) == null ? void 0 : _a2.unassociateElement) == null ? void 0 : _b.call(_a2, this);
    __privateSet$j(this, _mediaController$4, null);
  }
}
_mediaController$4 = /* @__PURE__ */ new WeakMap();
MediaControlBar.shadowRootOptions = { mode: "open" };
MediaControlBar.getTemplateHTML = getTemplateHTML$b;
if (!GlobalThis.customElements.get("media-control-bar")) {
  GlobalThis.customElements.define("media-control-bar", MediaControlBar);
}
var __accessCheck$m = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet$m = (obj, member, getter) => {
  __accessCheck$m(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$m = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$i = (obj, member, value, setter) => {
  __accessCheck$m(obj, member, "write to private field");
  member.set(obj, value);
  return value;
};
var _mediaController$3;
function getTemplateHTML$a(_attrs, _props = {}) {
  return (
    /*html*/
    `
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      ${/*
      Only show outline when keyboard focusing.
      https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo
    */
    ""}
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }

      ${/*
    * hide default focus ring, particularly when using mouse
    */
    ""}
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(_attrs, _props)}
  `
  );
}
function getSlotTemplateHTML$i(_attrs, _props) {
  return (
    /*html*/
    `
    <slot></slot>
  `
  );
}
class MediaTextDisplay extends GlobalThis.HTMLElement {
  constructor() {
    super();
    __privateAdd$m(this, _mediaController$3, void 0);
    if (!this.shadowRoot) {
      this.attachShadow(this.constructor.shadowRootOptions);
      const attrs = namedNodeMapToObject(this.attributes);
      this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(attrs);
    }
  }
  static get observedAttributes() {
    return [MediaStateReceiverAttributes.MEDIA_CONTROLLER];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    var _a2, _b, _c, _d, _e2;
    if (attrName === MediaStateReceiverAttributes.MEDIA_CONTROLLER) {
      if (oldValue) {
        (_b = (_a2 = __privateGet$m(this, _mediaController$3)) == null ? void 0 : _a2.unassociateElement) == null ? void 0 : _b.call(_a2, this);
        __privateSet$i(this, _mediaController$3, null);
      }
      if (newValue && this.isConnected) {
        __privateSet$i(this, _mediaController$3, (_c = this.getRootNode()) == null ? void 0 : _c.getElementById(newValue));
        (_e2 = (_d = __privateGet$m(this, _mediaController$3)) == null ? void 0 : _d.associateElement) == null ? void 0 : _e2.call(_d, this);
      }
    }
  }
  connectedCallback() {
    var _a2, _b, _c;
    const { style } = getOrInsertCSSRule(this.shadowRoot, ":host");
    style.setProperty(
      "display",
      `var(--media-control-display, var(--${this.localName}-display, inline-flex))`
    );
    const mediaControllerId = this.getAttribute(
      MediaStateReceiverAttributes.MEDIA_CONTROLLER
    );
    if (mediaControllerId) {
      __privateSet$i(this, _mediaController$3, (_a2 = this.getRootNode()) == null ? void 0 : _a2.getElementById(
        mediaControllerId
      ));
      (_c = (_b = __privateGet$m(this, _mediaController$3)) == null ? void 0 : _b.associateElement) == null ? void 0 : _c.call(_b, this);
    }
  }
  disconnectedCallback() {
    var _a2, _b;
    (_b = (_a2 = __privateGet$m(this, _mediaController$3)) == null ? void 0 : _a2.unassociateElement) == null ? void 0 : _b.call(_a2, this);
    __privateSet$i(this, _mediaController$3, null);
  }
}
_mediaController$3 = /* @__PURE__ */ new WeakMap();
MediaTextDisplay.shadowRootOptions = { mode: "open" };
MediaTextDisplay.getTemplateHTML = getTemplateHTML$a;
MediaTextDisplay.getSlotTemplateHTML = getSlotTemplateHTML$i;
if (!GlobalThis.customElements.get("media-text-display")) {
  GlobalThis.customElements.define("media-text-display", MediaTextDisplay);
}
var __accessCheck$l = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet$l = (obj, member, getter) => {
  __accessCheck$l(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$l = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$h = (obj, member, value, setter) => {
  __accessCheck$l(obj, member, "write to private field");
  member.set(obj, value);
  return value;
};
var _slot$3;
function getSlotTemplateHTML$h(_attrs, props) {
  return (
    /*html*/
    `
    <slot>${formatTime(props.mediaDuration)}</slot>
  `
  );
}
class MediaDurationDisplay extends MediaTextDisplay {
  constructor() {
    var _a2;
    super();
    __privateAdd$l(this, _slot$3, void 0);
    __privateSet$h(this, _slot$3, this.shadowRoot.querySelector("slot"));
    __privateGet$l(this, _slot$3).textContent = formatTime((_a2 = this.mediaDuration) != null ? _a2 : 0);
  }
  static get observedAttributes() {
    return [...super.observedAttributes, MediaUIAttributes.MEDIA_DURATION];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === MediaUIAttributes.MEDIA_DURATION) {
      __privateGet$l(this, _slot$3).textContent = formatTime(+newValue);
    }
    super.attributeChangedCallback(attrName, oldValue, newValue);
  }
  /**
   * @type {number | undefined} In seconds
   */
  get mediaDuration() {
    return getNumericAttr(this, MediaUIAttributes.MEDIA_DURATION);
  }
  set mediaDuration(time) {
    setNumericAttr(this, MediaUIAttributes.MEDIA_DURATION, time);
  }
}
_slot$3 = /* @__PURE__ */ new WeakMap();
MediaDurationDisplay.getSlotTemplateHTML = getSlotTemplateHTML$h;
if (!GlobalThis.customElements.get("media-duration-display")) {
  GlobalThis.customElements.define(
    "media-duration-display",
    MediaDurationDisplay
  );
}
const defaultErrorTitles = {
  2: t("Network Error"),
  3: t("Decode Error"),
  4: t("Source Not Supported"),
  5: t("Encryption Error")
};
const defaultErrorMessages = {
  2: t("A network error caused the media download to fail."),
  3: t(
    "A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."
  ),
  4: t(
    "An unsupported error occurred. The server or network failed, or your browser does not support this format."
  ),
  5: t("The media is encrypted and there are no keys to decrypt it.")
};
const formatError = (error) => {
  var _a2, _b;
  if (error.code === 1)
    return null;
  return {
    title: (_a2 = defaultErrorTitles[error.code]) != null ? _a2 : `Error ${error.code}`,
    message: (_b = defaultErrorMessages[error.code]) != null ? _b : error.message
  };
};
var __accessCheck$k = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet$k = (obj, member, getter) => {
  __accessCheck$k(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$k = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$g = (obj, member, value, setter) => {
  __accessCheck$k(obj, member, "write to private field");
  member.set(obj, value);
  return value;
};
var _mediaError;
function getSlotTemplateHTML$g(attrs) {
  return (
    /*html*/
    `
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${attrs.mediaerrorcode}" id="content">
      ${formatErrorMessage({ code: +attrs.mediaerrorcode, message: attrs.mediaerrormessage })}
    </slot>
  `
  );
}
function shouldOpenErrorDialog(error) {
  return error.code && formatError(error) !== null;
}
function formatErrorMessage(error) {
  var _a2;
  const { title, message } = (_a2 = formatError(error)) != null ? _a2 : {};
  let html = "";
  if (title)
    html += `<slot name="error-${error.code}-title"><h3>${title}</h3></slot>`;
  if (message)
    html += `<slot name="error-${error.code}-message"><p>${message}</p></slot>`;
  return html;
}
const observedAttributes = [
  MediaUIAttributes.MEDIA_ERROR_CODE,
  MediaUIAttributes.MEDIA_ERROR_MESSAGE
];
class MediaErrorDialog extends MediaChromeDialog {
  constructor() {
    super(...arguments);
    __privateAdd$k(this, _mediaError, null);
  }
  static get observedAttributes() {
    return [...super.observedAttributes, ...observedAttributes];
  }
  formatErrorMessage(error) {
    return this.constructor.formatErrorMessage(error);
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    var _a2;
    super.attributeChangedCallback(attrName, oldValue, newValue);
    if (!observedAttributes.includes(attrName))
      return;
    const mediaError = (_a2 = this.mediaError) != null ? _a2 : {
      code: this.mediaErrorCode,
      message: this.mediaErrorMessage
    };
    this.open = shouldOpenErrorDialog(mediaError);
    if (this.open) {
      this.shadowRoot.querySelector("slot").name = `error-${this.mediaErrorCode}`;
      this.shadowRoot.querySelector("#content").innerHTML = this.formatErrorMessage(mediaError);
      if (!this.hasAttribute("aria-label")) {
        const { title } = formatError(mediaError);
        if (title)
          this.setAttribute("aria-label", title);
      }
    }
  }
  get mediaError() {
    return __privateGet$k(this, _mediaError);
  }
  set mediaError(value) {
    __privateSet$g(this, _mediaError, value);
  }
  get mediaErrorCode() {
    return getNumericAttr(this, "mediaerrorcode");
  }
  set mediaErrorCode(value) {
    setNumericAttr(this, "mediaerrorcode", value);
  }
  get mediaErrorMessage() {
    return getStringAttr(this, "mediaerrormessage");
  }
  set mediaErrorMessage(value) {
    setStringAttr(this, "mediaerrormessage", value);
  }
}
_mediaError = /* @__PURE__ */ new WeakMap();
MediaErrorDialog.getSlotTemplateHTML = getSlotTemplateHTML$g;
MediaErrorDialog.formatErrorMessage = formatErrorMessage;
if (!GlobalThis.customElements.get("media-error-dialog")) {
  GlobalThis.customElements.define("media-error-dialog", MediaErrorDialog);
}
var media_error_dialog_default = MediaErrorDialog;
var __accessCheck$j = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet$j = (obj, member, getter) => {
  __accessCheck$j(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$j = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var _clickHandler, _keyDownHandler$1;
function getSlotTemplateHTML$f(_attrs) {
  return (
    /*html*/
    `
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        background: rgb(20 20 30 / .8);
        backdrop-filter: blur(10px);
      }

      #content {
        display: block;
        width: clamp(400px, 40vw, 700px);
        max-width: 90vw;
        text-align: left;
      }

      h2 {
        margin: 0 0 1.5rem 0;
        font-size: 1.5rem;
        font-weight: 500;
        text-align: center;
      }

      .shortcuts-table {
        width: 100%;
        border-collapse: collapse;
      }

      .shortcuts-table tr {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .shortcuts-table tr:last-child {
        border-bottom: none;
      }

      .shortcuts-table td {
        padding: 0.75rem 0.5rem;
      }

      .shortcuts-table td:first-child {
        text-align: right;
        padding-right: 1rem;
        width: 40%;
        min-width: 120px;
      }

      .shortcuts-table td:last-child {
        padding-left: 1rem;
      }

      .key {
        display: inline-block;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        padding: 0.25rem 0.5rem;
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;
        font-weight: 500;
        min-width: 1.5rem;
        text-align: center;
        margin: 0 0.2rem;
      }

      .description {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.95rem;
      }

      .key-combo {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.3rem;
      }

      .key-separator {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.9rem;
      }
    </style>
    <slot id="content">
      ${formatKeyboardShortcuts()}
    </slot>
  `
  );
}
function formatKeyboardShortcuts() {
  const shortcuts = [
    { keys: ["Space", "k"], description: "Toggle Playback" },
    { keys: ["m"], description: "Toggle mute" },
    { keys: ["f"], description: "Toggle fullscreen" },
    { keys: ["c"], description: "Toggle captions or subtitles, if available" },
    { keys: ["p"], description: "Toggle Picture in Picture" },
    { keys: ["←", "j"], description: "Seek back 10s" },
    { keys: ["→", "l"], description: "Seek forward 10s" },
    { keys: ["↑"], description: "Turn volume up" },
    { keys: ["↓"], description: "Turn volume down" },
    { keys: ["< (SHIFT+,)"], description: "Decrease playback rate" },
    { keys: ["> (SHIFT+.)"], description: "Increase playback rate" }
  ];
  const rows = shortcuts.map(({ keys, description }) => {
    const keyCombo = keys.map(
      (key, index) => index > 0 ? `<span class="key-separator">or</span><span class="key">${key}</span>` : `<span class="key">${key}</span>`
    ).join("");
    return `
      <tr>
        <td>
          <div class="key-combo">${keyCombo}</div>
        </td>
        <td class="description">${description}</td>
      </tr>
    `;
  }).join("");
  return `
    <h2>Keyboard Shortcuts</h2>
    <table class="shortcuts-table">${rows}</table>
  `;
}
class MediaKeyboardShortcutsDialog extends MediaChromeDialog {
  constructor() {
    super(...arguments);
    __privateAdd$j(this, _clickHandler, (e) => {
      var _a2;
      if (!this.open)
        return;
      const content = (_a2 = this.shadowRoot) == null ? void 0 : _a2.querySelector("#content");
      if (!content)
        return;
      const path = e.composedPath();
      const isClickOnHost = path[0] === this || path.includes(this);
      const isClickInsideContent = path.includes(content);
      if (isClickOnHost && !isClickInsideContent) {
        this.open = false;
      }
    });
    __privateAdd$j(this, _keyDownHandler$1, (e) => {
      if (!this.open)
        return;
      const isShiftSlash = e.shiftKey && (e.key === "/" || e.key === "?");
      if ((e.key === "Escape" || isShiftSlash) && !e.ctrlKey && !e.altKey && !e.metaKey) {
        this.open = false;
        e.preventDefault();
        e.stopPropagation();
      }
    });
  }
  connectedCallback() {
    super.connectedCallback();
    if (this.open) {
      this.addEventListener("click", __privateGet$j(this, _clickHandler));
      document.addEventListener("keydown", __privateGet$j(this, _keyDownHandler$1));
    }
  }
  disconnectedCallback() {
    this.removeEventListener("click", __privateGet$j(this, _clickHandler));
    document.removeEventListener("keydown", __privateGet$j(this, _keyDownHandler$1));
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    super.attributeChangedCallback(attrName, oldValue, newValue);
    if (attrName === "open") {
      if (this.open) {
        this.addEventListener("click", __privateGet$j(this, _clickHandler));
        document.addEventListener("keydown", __privateGet$j(this, _keyDownHandler$1));
      } else {
        this.removeEventListener("click", __privateGet$j(this, _clickHandler));
        document.removeEventListener("keydown", __privateGet$j(this, _keyDownHandler$1));
      }
    }
  }
}
_clickHandler = /* @__PURE__ */ new WeakMap();
_keyDownHandler$1 = /* @__PURE__ */ new WeakMap();
MediaKeyboardShortcutsDialog.getSlotTemplateHTML = getSlotTemplateHTML$f;
if (!GlobalThis.customElements.get("media-keyboard-shortcuts-dialog")) {
  GlobalThis.customElements.define("media-keyboard-shortcuts-dialog", MediaKeyboardShortcutsDialog);
}
var __accessCheck$i = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet$i = (obj, member, getter) => {
  __accessCheck$i(obj, member, "read from private field");
  return member.get(obj);
};
var __privateAdd$i = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$f = (obj, member, value, setter) => {
  __accessCheck$i(obj, member, "write to private field");
  member.set(obj, value);
  return value;
};
var _lastActionEvent;
const enterFullscreenIcon = `<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`;
const exitFullscreenIcon = `<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`;
function getSlotTemplateHTML$e(_attrs) {
  return (
    /*html*/
    `
    <style>
      :host([${MediaUIAttributes.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      ${/* Double negative, but safer if display doesn't equal 'block' */
    ""}
      :host(:not([${MediaUIAttributes.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${MediaUIAttributes.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${MediaUIAttributes.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${enterFullscreenIcon}</slot>
      <slot name="exit">${exitFullscreenIcon}</slot>
    </slot>
  `
  );
}
function getTooltipContentHTML$c() {
  return (
    /*html*/
    `
    <slot name="tooltip-enter">${t("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${t("Exit fullscreen mode")}</slot>
  `
  );
}
const updateAriaLabel$8 = (el) => {
  const label = el.mediaIsFullscreen ? t("exit fullscreen mode") : t("enter fullscreen mode");
  el.setAttribute("aria-label", label);
};
class MediaFullscreenButton extends MediaChromeButton {
  constructor() {
    super(...arguments);
    __privateAdd$i(this, _lastActionEvent, null);
  }
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_IS_FULLSCREEN,
      MediaUIAttributes.MEDIA_FULLSCREEN_UNAVAILABLE
    ];
  }
  connectedCallback() {
    super.connectedCallback();
    updateAriaLabel$8(this);
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    super.attributeChangedCallback(attrName, oldValue, newValue);
    if (attrName === MediaUIAttributes.MEDIA_IS_FULLSCREEN) {
      updateAriaLabel$8(this);
    }
  }
  /**
   * @type {string | undefined} Fullscreen unavailability state
   */
  get mediaFullscreenUnavailable() {
    return getStringAttr(this, MediaUIAttributes.MEDIA_FULLSCREEN_UNAVAILABLE);
  }
  set mediaFullscreenUnavailable(value) {
    setStringAttr(this, MediaUIAttributes.MEDIA_FULLSCREEN_UNAVAILABLE, value);
  }
  /**
   * @type {boolean} Whether fullscreen is available
   */
  get mediaIsFullscreen() {
    return getBooleanAttr(this, MediaUIAttributes.MEDIA_IS_FULLSCREEN);
  }
  set mediaIsFullscreen(value) {
    setBooleanAttr(this, MediaUIAttributes.MEDIA_IS_FULLSCREEN, value);
  }
  handleClick(e) {
    __privateSet$f(this, _lastActionEvent, e);
    const isPointerEvent = __privateGet$i(this, _lastActionEvent) instanceof PointerEvent;
    const event = this.mediaIsFullscreen ? new GlobalThis.CustomEvent(
      MediaUIEvents.MEDIA_EXIT_FULLSCREEN_REQUEST,
      { composed: true, bubbles: true }
    ) : new GlobalThis.CustomEvent(
      MediaUIEvents.MEDIA_ENTER_FULLSCREEN_REQUEST,
      { composed: true, bubbles: true, detail: isPointerEvent }
    );
    this.dispatchEvent(event);
  }
}
_lastActionEvent = /* @__PURE__ */ new WeakMap();
MediaFullscreenButton.getSlotTemplateHTML = getSlotTemplateHTML$e;
MediaFullscreenButton.getTooltipContentHTML = getTooltipContentHTML$c;
if (!GlobalThis.customElements.get("media-fullscreen-button")) {
  GlobalThis.customElements.define(
    "media-fullscreen-button",
    MediaFullscreenButton
  );
}
const { MEDIA_TIME_IS_LIVE, MEDIA_PAUSED } = MediaUIAttributes;
const { MEDIA_SEEK_TO_LIVE_REQUEST, MEDIA_PLAY_REQUEST } = MediaUIEvents;
const indicatorSVG = '<svg viewBox="0 0 6 12" aria-hidden="true"><circle cx="3" cy="6" r="2"></circle></svg>';
function getSlotTemplateHTML$d(_attrs) {
  return (
    /*html*/
    `
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        ${/* Override styles for icon-only buttons */
    ""}
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${MEDIA_TIME_IS_LIVE}]:not([${MEDIA_PAUSED}])) slot[name=indicator] > *,
      :host([${MEDIA_TIME_IS_LIVE}]:not([${MEDIA_PAUSED}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${MEDIA_TIME_IS_LIVE}]:not([${MEDIA_PAUSED}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator">${indicatorSVG}</slot>
    ${/*
      A new line between spacer and text creates inconsistent spacing
      between slotted items and default slots.
    */
    ""}
    <slot name="spacer">&nbsp;</slot><slot name="text">${t("live")}</slot>
  `
  );
}
const updateAriaAttributes = (el) => {
  var _a2;
  const isPausedOrNotLive = el.mediaPaused || !el.mediaTimeIsLive;
  const label = isPausedOrNotLive ? t("seek to live") : t("playing live");
  el.setAttribute("aria-label", label);
  const textSlot = (_a2 = el.shadowRoot) == null ? void 0 : _a2.querySelector('slot[name="text"]');
  if (textSlot)
    textSlot.textContent = t("live");
  isPausedOrNotLive ? el.removeAttribute("aria-disabled") : el.setAttribute("aria-disabled", "true");
};
class MediaLiveButton extends MediaChromeButton {
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MEDIA_TIME_IS_LIVE,
      MEDIA_PAUSED
    ];
  }
  connectedCallback() {
    super.connectedCallback();
    updateAriaAttributes(this);
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    super.attributeChangedCallback(attrName, oldValue, newValue);
    updateAriaAttributes(this);
  }
  /**
   * @type {boolean} Is the media paused
   */
  get mediaPaused() {
    return getBooleanAttr(this, MediaUIAttributes.MEDIA_PAUSED);
  }
  set mediaPaused(value) {
    setBooleanAttr(this, MediaUIAttributes.MEDIA_PAUSED, value);
  }
  /**
   * @type {boolean} Is the media playback currently live
   */
  get mediaTimeIsLive() {
    return getBooleanAttr(this, MediaUIAttributes.MEDIA_TIME_IS_LIVE);
  }
  set mediaTimeIsLive(value) {
    setBooleanAttr(this, MediaUIAttributes.MEDIA_TIME_IS_LIVE, value);
  }
  handleClick() {
    if (!this.mediaPaused && this.mediaTimeIsLive)
      return;
    this.dispatchEvent(
      new GlobalThis.CustomEvent(MEDIA_SEEK_TO_LIVE_REQUEST, {
        composed: true,
        bubbles: true
      })
    );
    if (this.hasAttribute(MEDIA_PAUSED)) {
      this.dispatchEvent(
        new GlobalThis.CustomEvent(MEDIA_PLAY_REQUEST, {
          composed: true,
          bubbles: true
        })
      );
    }
  }
}
MediaLiveButton.getSlotTemplateHTML = getSlotTemplateHTML$d;
if (!GlobalThis.customElements.get("media-live-button")) {
  GlobalThis.customElements.define("media-live-button", MediaLiveButton);
}
var __accessCheck$h = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet$h = (obj, member, getter) => {
  __accessCheck$h(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$h = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$e = (obj, member, value, setter) => {
  __accessCheck$h(obj, member, "write to private field");
  member.set(obj, value);
  return value;
};
var _mediaController$2, _delay;
const Attributes$8 = {
  LOADING_DELAY: "loadingdelay",
  NO_AUTOHIDE: "noautohide"
};
const DEFAULT_LOADING_DELAY = 500;
const loadingIndicatorIcon = `
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;
function getTemplateHTML$9(_attrs) {
  return (
    /*html*/
    `
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, ${DEFAULT_LOADING_DELAY}ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${MediaUIAttributes.MEDIA_LOADING}]:not([${MediaUIAttributes.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${MediaUIAttributes.MEDIA_LOADING}]:not([${MediaUIAttributes.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${MediaUIAttributes.MEDIA_LOADING}]:not([${MediaUIAttributes.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${loadingIndicatorIcon}</slot>
    <div id="status" role="status" aria-live="polite">${t("media loading")}</div>
  `
  );
}
class MediaLoadingIndicator extends GlobalThis.HTMLElement {
  constructor() {
    super();
    __privateAdd$h(this, _mediaController$2, void 0);
    __privateAdd$h(this, _delay, DEFAULT_LOADING_DELAY);
    if (!this.shadowRoot) {
      this.attachShadow(this.constructor.shadowRootOptions);
      const attrs = namedNodeMapToObject(this.attributes);
      this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(attrs);
    }
  }
  static get observedAttributes() {
    return [
      MediaStateReceiverAttributes.MEDIA_CONTROLLER,
      MediaUIAttributes.MEDIA_PAUSED,
      MediaUIAttributes.MEDIA_LOADING,
      Attributes$8.LOADING_DELAY
    ];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    var _a2, _b, _c, _d, _e2;
    if (attrName === Attributes$8.LOADING_DELAY && oldValue !== newValue) {
      this.loadingDelay = Number(newValue);
    } else if (attrName === MediaStateReceiverAttributes.MEDIA_CONTROLLER) {
      if (oldValue) {
        (_b = (_a2 = __privateGet$h(this, _mediaController$2)) == null ? void 0 : _a2.unassociateElement) == null ? void 0 : _b.call(_a2, this);
        __privateSet$e(this, _mediaController$2, null);
      }
      if (newValue && this.isConnected) {
        __privateSet$e(this, _mediaController$2, (_c = this.getRootNode()) == null ? void 0 : _c.getElementById(newValue));
        (_e2 = (_d = __privateGet$h(this, _mediaController$2)) == null ? void 0 : _d.associateElement) == null ? void 0 : _e2.call(_d, this);
      }
    }
  }
  connectedCallback() {
    var _a2, _b, _c;
    const mediaControllerId = this.getAttribute(
      MediaStateReceiverAttributes.MEDIA_CONTROLLER
    );
    if (mediaControllerId) {
      __privateSet$e(this, _mediaController$2, (_a2 = this.getRootNode()) == null ? void 0 : _a2.getElementById(
        mediaControllerId
      ));
      (_c = (_b = __privateGet$h(this, _mediaController$2)) == null ? void 0 : _b.associateElement) == null ? void 0 : _c.call(_b, this);
    }
  }
  disconnectedCallback() {
    var _a2, _b;
    (_b = (_a2 = __privateGet$h(this, _mediaController$2)) == null ? void 0 : _a2.unassociateElement) == null ? void 0 : _b.call(_a2, this);
    __privateSet$e(this, _mediaController$2, null);
  }
  /**
   * Delay in ms
   */
  get loadingDelay() {
    return __privateGet$h(this, _delay);
  }
  set loadingDelay(delay2) {
    __privateSet$e(this, _delay, delay2);
    const { style } = getOrInsertCSSRule(this.shadowRoot, ":host");
    style.setProperty(
      "--_loading-indicator-delay",
      `var(--media-loading-indicator-transition-delay, ${delay2}ms)`
    );
  }
  /**
   * Is the media paused
   */
  get mediaPaused() {
    return getBooleanAttr(this, MediaUIAttributes.MEDIA_PAUSED);
  }
  set mediaPaused(value) {
    setBooleanAttr(this, MediaUIAttributes.MEDIA_PAUSED, value);
  }
  /**
   * Is the media loading
   */
  get mediaLoading() {
    return getBooleanAttr(this, MediaUIAttributes.MEDIA_LOADING);
  }
  set mediaLoading(value) {
    setBooleanAttr(this, MediaUIAttributes.MEDIA_LOADING, value);
  }
  get mediaController() {
    return getStringAttr(this, MediaStateReceiverAttributes.MEDIA_CONTROLLER);
  }
  set mediaController(value) {
    setStringAttr(this, MediaStateReceiverAttributes.MEDIA_CONTROLLER, value);
  }
  get noAutohide() {
    return getBooleanAttr(this, Attributes$8.NO_AUTOHIDE);
  }
  set noAutohide(value) {
    setBooleanAttr(this, Attributes$8.NO_AUTOHIDE, value);
  }
}
_mediaController$2 = /* @__PURE__ */ new WeakMap();
_delay = /* @__PURE__ */ new WeakMap();
MediaLoadingIndicator.shadowRootOptions = { mode: "open" };
MediaLoadingIndicator.getTemplateHTML = getTemplateHTML$9;
if (!GlobalThis.customElements.get("media-loading-indicator")) {
  GlobalThis.customElements.define(
    "media-loading-indicator",
    MediaLoadingIndicator
  );
}
const offIcon = `<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`;
const lowIcon = `<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`;
const highIcon = `<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`;
function getSlotTemplateHTML$c(_attrs) {
  return (
    /*html*/
    `
    <style>
      :host(:not([${MediaUIAttributes.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${MediaUIAttributes.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${MediaUIAttributes.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${MediaUIAttributes.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${MediaUIAttributes.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${MediaUIAttributes.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${MediaUIAttributes.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${offIcon}</slot>
      <slot name="low">${lowIcon}</slot>
      <slot name="medium">${lowIcon}</slot>
      <slot name="high">${highIcon}</slot>
    </slot>
  `
  );
}
function getTooltipContentHTML$b() {
  return (
    /*html*/
    `
    <slot name="tooltip-mute">${t("Mute")}</slot>
    <slot name="tooltip-unmute">${t("Unmute")}</slot>
  `
  );
}
const updateAriaLabel$7 = (el) => {
  const muted = el.mediaVolumeLevel === "off";
  const label = muted ? t("unmute") : t("mute");
  el.setAttribute("aria-label", label);
};
class MediaMuteButton extends MediaChromeButton {
  static get observedAttributes() {
    return [...super.observedAttributes, MediaUIAttributes.MEDIA_VOLUME_LEVEL];
  }
  connectedCallback() {
    super.connectedCallback();
    updateAriaLabel$7(this);
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    super.attributeChangedCallback(attrName, oldValue, newValue);
    if (attrName === MediaUIAttributes.MEDIA_VOLUME_LEVEL) {
      updateAriaLabel$7(this);
    }
  }
  /**
   * @type {string | undefined}
   */
  get mediaVolumeLevel() {
    return getStringAttr(this, MediaUIAttributes.MEDIA_VOLUME_LEVEL);
  }
  set mediaVolumeLevel(value) {
    setStringAttr(this, MediaUIAttributes.MEDIA_VOLUME_LEVEL, value);
  }
  handleClick() {
    const eventName = this.mediaVolumeLevel === "off" ? MediaUIEvents.MEDIA_UNMUTE_REQUEST : MediaUIEvents.MEDIA_MUTE_REQUEST;
    this.dispatchEvent(
      new GlobalThis.CustomEvent(eventName, { composed: true, bubbles: true })
    );
  }
}
MediaMuteButton.getSlotTemplateHTML = getSlotTemplateHTML$c;
MediaMuteButton.getTooltipContentHTML = getTooltipContentHTML$b;
if (!GlobalThis.customElements.get("media-mute-button")) {
  GlobalThis.customElements.define("media-mute-button", MediaMuteButton);
}
const pipIcon = `<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`;
function getSlotTemplateHTML$b(_attrs) {
  return (
    /*html*/
    `
    <style>
      :host([${MediaUIAttributes.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${MediaUIAttributes.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${MediaUIAttributes.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${MediaUIAttributes.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${pipIcon}</slot>
      <slot name="exit">${pipIcon}</slot>
    </slot>
  `
  );
}
function getTooltipContentHTML$a() {
  return (
    /*html*/
    `
    <slot name="tooltip-enter">${t("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${t("Exit picture in picture mode")}</slot>
  `
  );
}
const updateAriaLabel$6 = (el) => {
  const label = el.mediaIsPip ? t("exit picture in picture mode") : t("enter picture in picture mode");
  el.setAttribute("aria-label", label);
};
class MediaPipButton extends MediaChromeButton {
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_IS_PIP,
      MediaUIAttributes.MEDIA_PIP_UNAVAILABLE
    ];
  }
  connectedCallback() {
    super.connectedCallback();
    updateAriaLabel$6(this);
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    super.attributeChangedCallback(attrName, oldValue, newValue);
    if (attrName === MediaUIAttributes.MEDIA_IS_PIP) {
      updateAriaLabel$6(this);
    }
  }
  /**
   * @type {string | undefined} Pip unavailability state
   */
  get mediaPipUnavailable() {
    return getStringAttr(this, MediaUIAttributes.MEDIA_PIP_UNAVAILABLE);
  }
  set mediaPipUnavailable(value) {
    setStringAttr(this, MediaUIAttributes.MEDIA_PIP_UNAVAILABLE, value);
  }
  /**
   * @type {boolean} Is the media currently playing picture-in-picture
   */
  get mediaIsPip() {
    return getBooleanAttr(this, MediaUIAttributes.MEDIA_IS_PIP);
  }
  set mediaIsPip(value) {
    setBooleanAttr(this, MediaUIAttributes.MEDIA_IS_PIP, value);
  }
  handleClick() {
    const eventName = this.mediaIsPip ? MediaUIEvents.MEDIA_EXIT_PIP_REQUEST : MediaUIEvents.MEDIA_ENTER_PIP_REQUEST;
    this.dispatchEvent(
      new GlobalThis.CustomEvent(eventName, { composed: true, bubbles: true })
    );
  }
}
MediaPipButton.getSlotTemplateHTML = getSlotTemplateHTML$b;
MediaPipButton.getTooltipContentHTML = getTooltipContentHTML$a;
if (!GlobalThis.customElements.get("media-pip-button")) {
  GlobalThis.customElements.define("media-pip-button", MediaPipButton);
}
var __accessCheck$g = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet$g = (obj, member, getter) => {
  __accessCheck$g(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$g = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var _rates$1;
const Attributes$7 = {
  RATES: "rates"
};
const DEFAULT_RATES = [1, 1.2, 1.5, 1.7, 2];
const DEFAULT_RATE$1 = 1;
function normalizePlaybackRate(rate) {
  return Math.round(rate * 100) / 100;
}
function getSlotTemplateHTML$a(attrs) {
  const rate = attrs["mediaplaybackrate"] ? normalizePlaybackRate(+attrs["mediaplaybackrate"]) : DEFAULT_RATE$1;
  return (
    /*html*/
    `
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${rate}x</slot>
  `
  );
}
function getTooltipContentHTML$9() {
  return t("Playback rate");
}
class MediaPlaybackRateButton extends MediaChromeButton {
  constructor() {
    var _a2;
    super();
    __privateAdd$g(this, _rates$1, new AttributeTokenList(this, Attributes$7.RATES, {
      defaultValue: DEFAULT_RATES
    }));
    this.container = this.shadowRoot.querySelector('slot[name="icon"]');
    this.container.innerHTML = `${normalizePlaybackRate((_a2 = this.mediaPlaybackRate) != null ? _a2 : DEFAULT_RATE$1)}x`;
  }
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_PLAYBACK_RATE,
      Attributes$7.RATES
    ];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    super.attributeChangedCallback(attrName, oldValue, newValue);
    if (attrName === Attributes$7.RATES) {
      __privateGet$g(this, _rates$1).value = newValue;
    }
    if (attrName === MediaUIAttributes.MEDIA_PLAYBACK_RATE) {
      const newPlaybackRate = newValue ? +newValue : Number.NaN;
      const playbackRate = normalizePlaybackRate(
        !Number.isNaN(newPlaybackRate) ? newPlaybackRate : DEFAULT_RATE$1
      );
      this.container.innerHTML = `${playbackRate}x`;
      this.setAttribute(
        "aria-label",
        t("Playback rate {playbackRate}", { playbackRate })
      );
    }
  }
  /**
   * Get the playback rates for the button.
   */
  get rates() {
    return __privateGet$g(this, _rates$1);
  }
  /**
   * Set the playback rates for the button.
   * For React 19+ compatibility, accept a string of space-separated rates.
   */
  set rates(value) {
    if (!value) {
      __privateGet$g(this, _rates$1).value = "";
    } else if (Array.isArray(value)) {
      __privateGet$g(this, _rates$1).value = value.join(" ");
    } else if (typeof value === "string") {
      __privateGet$g(this, _rates$1).value = value;
    }
  }
  /**
   * @type {number} The current playback rate
   */
  get mediaPlaybackRate() {
    return getNumericAttr(
      this,
      MediaUIAttributes.MEDIA_PLAYBACK_RATE,
      DEFAULT_RATE$1
    );
  }
  set mediaPlaybackRate(value) {
    setNumericAttr(this, MediaUIAttributes.MEDIA_PLAYBACK_RATE, value);
  }
  handleClick() {
    var _a2, _b;
    const availableRates = Array.from(__privateGet$g(this, _rates$1).values(), (str) => +str).sort(
      (a, b2) => a - b2
    );
    const detail = (_b = (_a2 = availableRates.find((r11) => r11 > this.mediaPlaybackRate)) != null ? _a2 : availableRates[0]) != null ? _b : DEFAULT_RATE$1;
    const evt = new GlobalThis.CustomEvent(
      MediaUIEvents.MEDIA_PLAYBACK_RATE_REQUEST,
      { composed: true, bubbles: true, detail }
    );
    this.dispatchEvent(evt);
  }
}
_rates$1 = /* @__PURE__ */ new WeakMap();
MediaPlaybackRateButton.getSlotTemplateHTML = getSlotTemplateHTML$a;
MediaPlaybackRateButton.getTooltipContentHTML = getTooltipContentHTML$9;
if (!GlobalThis.customElements.get("media-playback-rate-button")) {
  GlobalThis.customElements.define(
    "media-playback-rate-button",
    MediaPlaybackRateButton
  );
}
const playIcon = `<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`;
const pauseIcon = `<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`;
function getSlotTemplateHTML$9(_attrs) {
  return (
    /*html*/
    `
    <style>
      :host([${MediaUIAttributes.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${MediaUIAttributes.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${MediaUIAttributes.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${MediaUIAttributes.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${playIcon}</slot>
      <slot name="pause">${pauseIcon}</slot>
    </slot>
  `
  );
}
function getTooltipContentHTML$8() {
  return (
    /*html*/
    `
    <slot name="tooltip-play">${t("Play")}</slot>
    <slot name="tooltip-pause">${t("Pause")}</slot>
  `
  );
}
const updateAriaLabel$5 = (el) => {
  const label = el.mediaPaused ? t("play") : t("pause");
  el.setAttribute("aria-label", label);
};
class MediaPlayButton extends MediaChromeButton {
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_PAUSED,
      MediaUIAttributes.MEDIA_ENDED
    ];
  }
  connectedCallback() {
    super.connectedCallback();
    updateAriaLabel$5(this);
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    super.attributeChangedCallback(attrName, oldValue, newValue);
    if (attrName === MediaUIAttributes.MEDIA_PAUSED || attrName === MediaUIAttributes.MEDIA_LANG) {
      updateAriaLabel$5(this);
    }
  }
  /**
   * Is the media paused
   */
  get mediaPaused() {
    return getBooleanAttr(this, MediaUIAttributes.MEDIA_PAUSED);
  }
  set mediaPaused(value) {
    setBooleanAttr(this, MediaUIAttributes.MEDIA_PAUSED, value);
  }
  handleClick() {
    const eventName = this.mediaPaused ? MediaUIEvents.MEDIA_PLAY_REQUEST : MediaUIEvents.MEDIA_PAUSE_REQUEST;
    this.dispatchEvent(
      new GlobalThis.CustomEvent(eventName, { composed: true, bubbles: true })
    );
  }
}
MediaPlayButton.getSlotTemplateHTML = getSlotTemplateHTML$9;
MediaPlayButton.getTooltipContentHTML = getTooltipContentHTML$8;
if (!GlobalThis.customElements.get("media-play-button")) {
  GlobalThis.customElements.define("media-play-button", MediaPlayButton);
}
const Attributes$6 = {
  PLACEHOLDER_SRC: "placeholdersrc",
  SRC: "src"
};
function getTemplateHTML$8(_attrs) {
  return (
    /*html*/
    `
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `
  );
}
const unsetBackgroundImage = (el) => {
  el.style.removeProperty("background-image");
};
const setBackgroundImage = (el, image) => {
  el.style["background-image"] = `url('${image}')`;
};
class MediaPosterImage extends GlobalThis.HTMLElement {
  static get observedAttributes() {
    return [Attributes$6.PLACEHOLDER_SRC, Attributes$6.SRC];
  }
  constructor() {
    super();
    if (!this.shadowRoot) {
      this.attachShadow(this.constructor.shadowRootOptions);
      const attrs = namedNodeMapToObject(this.attributes);
      this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(attrs);
    }
    this.image = this.shadowRoot.querySelector("#image");
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === Attributes$6.SRC) {
      if (newValue == null) {
        this.image.removeAttribute(Attributes$6.SRC);
      } else {
        this.image.setAttribute(Attributes$6.SRC, newValue);
      }
    }
    if (attrName === Attributes$6.PLACEHOLDER_SRC) {
      if (newValue == null) {
        unsetBackgroundImage(this.image);
      } else {
        setBackgroundImage(this.image, newValue);
      }
    }
  }
  /**
   *
   */
  get placeholderSrc() {
    return getStringAttr(this, Attributes$6.PLACEHOLDER_SRC);
  }
  set placeholderSrc(value) {
    setStringAttr(this, Attributes$6.SRC, value);
  }
  /**
   *
   */
  get src() {
    return getStringAttr(this, Attributes$6.SRC);
  }
  set src(value) {
    setStringAttr(this, Attributes$6.SRC, value);
  }
}
MediaPosterImage.shadowRootOptions = { mode: "open" };
MediaPosterImage.getTemplateHTML = getTemplateHTML$8;
if (!GlobalThis.customElements.get("media-poster-image")) {
  GlobalThis.customElements.define("media-poster-image", MediaPosterImage);
}
var __accessCheck$f = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet$f = (obj, member, getter) => {
  __accessCheck$f(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$f = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$d = (obj, member, value, setter) => {
  __accessCheck$f(obj, member, "write to private field");
  member.set(obj, value);
  return value;
};
var _slot$2;
class MediaPreviewChapterDisplay extends MediaTextDisplay {
  constructor() {
    super();
    __privateAdd$f(this, _slot$2, void 0);
    __privateSet$d(this, _slot$2, this.shadowRoot.querySelector("slot"));
  }
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_PREVIEW_CHAPTER,
      MediaUIAttributes.MEDIA_LANG
    ];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    super.attributeChangedCallback(attrName, oldValue, newValue);
    if (attrName === MediaUIAttributes.MEDIA_PREVIEW_CHAPTER || attrName === MediaUIAttributes.MEDIA_LANG) {
      if (newValue !== oldValue && newValue != null) {
        __privateGet$f(this, _slot$2).textContent = newValue;
        if (newValue !== "") {
          const ariaValueText = t("chapter: {chapterName}", {
            chapterName: newValue
          });
          this.setAttribute("aria-valuetext", ariaValueText);
        } else {
          this.removeAttribute("aria-valuetext");
        }
      }
    }
  }
  /**
   * @type {string | undefined} Timeline preview chapter
   */
  get mediaPreviewChapter() {
    return getStringAttr(this, MediaUIAttributes.MEDIA_PREVIEW_CHAPTER);
  }
  set mediaPreviewChapter(value) {
    setStringAttr(this, MediaUIAttributes.MEDIA_PREVIEW_CHAPTER, value);
  }
}
_slot$2 = /* @__PURE__ */ new WeakMap();
if (!GlobalThis.customElements.get("media-preview-chapter-display")) {
  GlobalThis.customElements.define(
    "media-preview-chapter-display",
    MediaPreviewChapterDisplay
  );
}
var __accessCheck$e = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet$e = (obj, member, getter) => {
  __accessCheck$e(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$e = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$c = (obj, member, value, setter) => {
  __accessCheck$e(obj, member, "write to private field");
  member.set(obj, value);
  return value;
};
var _mediaController$1;
function getTemplateHTML$7(_attrs) {
  return (
    /*html*/
    `
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `
  );
}
class MediaPreviewThumbnail extends GlobalThis.HTMLElement {
  constructor() {
    super();
    __privateAdd$e(this, _mediaController$1, void 0);
    if (!this.shadowRoot) {
      this.attachShadow(this.constructor.shadowRootOptions);
      const attrs = namedNodeMapToObject(this.attributes);
      this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(attrs);
    }
  }
  static get observedAttributes() {
    return [
      MediaStateReceiverAttributes.MEDIA_CONTROLLER,
      MediaUIAttributes.MEDIA_PREVIEW_IMAGE,
      MediaUIAttributes.MEDIA_PREVIEW_COORDS
    ];
  }
  connectedCallback() {
    var _a2, _b, _c;
    const mediaControllerId = this.getAttribute(
      MediaStateReceiverAttributes.MEDIA_CONTROLLER
    );
    if (mediaControllerId) {
      __privateSet$c(
        this,
        _mediaController$1,
        // @ts-ignore
        (_a2 = this.getRootNode()) == null ? void 0 : _a2.getElementById(mediaControllerId)
      );
      (_c = (_b = __privateGet$e(this, _mediaController$1)) == null ? void 0 : _b.associateElement) == null ? void 0 : _c.call(_b, this);
    }
  }
  disconnectedCallback() {
    var _a2, _b;
    (_b = (_a2 = __privateGet$e(this, _mediaController$1)) == null ? void 0 : _a2.unassociateElement) == null ? void 0 : _b.call(_a2, this);
    __privateSet$c(this, _mediaController$1, null);
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    var _a2, _b, _c, _d, _e2;
    if ([
      MediaUIAttributes.MEDIA_PREVIEW_IMAGE,
      MediaUIAttributes.MEDIA_PREVIEW_COORDS
    ].includes(attrName)) {
      this.update();
    }
    if (attrName === MediaStateReceiverAttributes.MEDIA_CONTROLLER) {
      if (oldValue) {
        (_b = (_a2 = __privateGet$e(this, _mediaController$1)) == null ? void 0 : _a2.unassociateElement) == null ? void 0 : _b.call(_a2, this);
        __privateSet$c(this, _mediaController$1, null);
      }
      if (newValue && this.isConnected) {
        __privateSet$c(this, _mediaController$1, (_c = this.getRootNode()) == null ? void 0 : _c.getElementById(newValue));
        (_e2 = (_d = __privateGet$e(this, _mediaController$1)) == null ? void 0 : _d.associateElement) == null ? void 0 : _e2.call(_d, this);
      }
    }
  }
  /**
   * @type {string | undefined} The url of the preview image
   */
  get mediaPreviewImage() {
    return getStringAttr(this, MediaUIAttributes.MEDIA_PREVIEW_IMAGE);
  }
  set mediaPreviewImage(value) {
    setStringAttr(this, MediaUIAttributes.MEDIA_PREVIEW_IMAGE, value);
  }
  /**
   * @type {Array<number> | undefined} Fixed length array [x, y, width, height] or undefined
   */
  get mediaPreviewCoords() {
    const attrVal = this.getAttribute(MediaUIAttributes.MEDIA_PREVIEW_COORDS);
    if (!attrVal)
      return void 0;
    return attrVal.split(/\s+/).map((coord) => +coord);
  }
  set mediaPreviewCoords(value) {
    if (!value) {
      this.removeAttribute(MediaUIAttributes.MEDIA_PREVIEW_COORDS);
      return;
    }
    this.setAttribute(MediaUIAttributes.MEDIA_PREVIEW_COORDS, value.join(" "));
  }
  update() {
    const coords = this.mediaPreviewCoords;
    const previewImage = this.mediaPreviewImage;
    if (!(coords && previewImage))
      return;
    const [x2, y2, w2, h2] = coords;
    const src = previewImage.split("#")[0];
    const computedStyle = getComputedStyle(this);
    const { maxWidth, maxHeight, minWidth, minHeight } = computedStyle;
    const objectFit = computedStyle.getPropertyValue("--media-preview-thumbnail-object-fit").trim() || "contain";
    let scaleX;
    let scaleY;
    if (objectFit === "fill") {
      const maxRatioX = parseInt(maxWidth) / w2;
      const maxRatioY = parseInt(maxHeight) / h2;
      const minRatioX = parseInt(minWidth) / w2;
      const minRatioY = parseInt(minHeight) / h2;
      scaleX = maxRatioX < 1 ? maxRatioX : Math.max(maxRatioX, minRatioX);
      scaleY = maxRatioY < 1 ? maxRatioY : Math.max(maxRatioY, minRatioY);
    } else {
      const maxRatio = Math.min(parseInt(maxWidth) / w2, parseInt(maxHeight) / h2);
      const minRatio = Math.max(parseInt(minWidth) / w2, parseInt(minHeight) / h2);
      const isScalingDown2 = maxRatio < 1;
      const scale = isScalingDown2 ? maxRatio : minRatio > 1 ? minRatio : 1;
      scaleX = scale;
      scaleY = scale;
    }
    const { style } = getOrInsertCSSRule(this.shadowRoot, ":host");
    const imgStyle = getOrInsertCSSRule(this.shadowRoot, "img").style;
    const img = this.shadowRoot.querySelector("img");
    const isScalingDown = Math.min(scaleX, scaleY) < 1;
    const extremum = isScalingDown ? "min" : "max";
    style.setProperty(`${extremum}-width`, "initial", "important");
    style.setProperty(`${extremum}-height`, "initial", "important");
    style.width = `${w2 * scaleX}px`;
    style.height = `${h2 * scaleY}px`;
    const resize = () => {
      imgStyle.width = `${this.imgWidth * scaleX}px`;
      imgStyle.height = `${this.imgHeight * scaleY}px`;
      imgStyle.display = "block";
    };
    if (img.src !== src) {
      img.onload = () => {
        this.imgWidth = img.naturalWidth;
        this.imgHeight = img.naturalHeight;
        resize();
        img.onload = null;
      };
      img.src = src;
      resize();
    }
    resize();
    imgStyle.transform = `translate(-${x2 * scaleX}px, -${y2 * scaleY}px)`;
  }
}
_mediaController$1 = /* @__PURE__ */ new WeakMap();
MediaPreviewThumbnail.shadowRootOptions = { mode: "open" };
MediaPreviewThumbnail.getTemplateHTML = getTemplateHTML$7;
if (!GlobalThis.customElements.get("media-preview-thumbnail")) {
  GlobalThis.customElements.define(
    "media-preview-thumbnail",
    MediaPreviewThumbnail
  );
}
var media_preview_thumbnail_default = MediaPreviewThumbnail;
var __accessCheck$d = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet$d = (obj, member, getter) => {
  __accessCheck$d(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$d = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$b = (obj, member, value, setter) => {
  __accessCheck$d(obj, member, "write to private field");
  member.set(obj, value);
  return value;
};
var _slot$1;
class MediaPreviewTimeDisplay extends MediaTextDisplay {
  constructor() {
    super();
    __privateAdd$d(this, _slot$1, void 0);
    __privateSet$b(this, _slot$1, this.shadowRoot.querySelector("slot"));
    __privateGet$d(this, _slot$1).textContent = formatTime(0);
  }
  static get observedAttributes() {
    return [...super.observedAttributes, MediaUIAttributes.MEDIA_PREVIEW_TIME];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    super.attributeChangedCallback(attrName, oldValue, newValue);
    if (attrName === MediaUIAttributes.MEDIA_PREVIEW_TIME && newValue != null) {
      __privateGet$d(this, _slot$1).textContent = formatTime(parseFloat(newValue));
    }
  }
  /**
   * Timeline preview time
   */
  get mediaPreviewTime() {
    return getNumericAttr(this, MediaUIAttributes.MEDIA_PREVIEW_TIME);
  }
  set mediaPreviewTime(value) {
    setNumericAttr(this, MediaUIAttributes.MEDIA_PREVIEW_TIME, value);
  }
}
_slot$1 = /* @__PURE__ */ new WeakMap();
if (!GlobalThis.customElements.get("media-preview-time-display")) {
  GlobalThis.customElements.define(
    "media-preview-time-display",
    MediaPreviewTimeDisplay
  );
}
const Attributes$5 = {
  SEEK_OFFSET: "seekoffset"
};
const DEFAULT_SEEK_OFFSET$1 = 30;
const backwardIcon = (seekOffset) => `
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${seekOffset}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`;
function getSlotTemplateHTML$8(_attrs, props) {
  return (
    /*html*/
    `
    <slot name="icon">${backwardIcon(props.seekOffset)}</slot>
  `
  );
}
const updateAriaLabel$4 = (el, seekOffset) => {
  el.setAttribute("aria-label", t("seek back {seekOffset} seconds", { seekOffset }));
};
function getTooltipContentHTML$7() {
  return t("Seek backward");
}
const DEFAULT_TIME$1 = 0;
class MediaSeekBackwardButton extends MediaChromeButton {
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_CURRENT_TIME,
      Attributes$5.SEEK_OFFSET
    ];
  }
  connectedCallback() {
    super.connectedCallback();
    this.seekOffset = getNumericAttr(
      this,
      Attributes$5.SEEK_OFFSET,
      DEFAULT_SEEK_OFFSET$1
    );
  }
  attributeChangedCallback(attrName, _oldValue, newValue) {
    super.attributeChangedCallback(attrName, _oldValue, newValue);
    updateAriaLabel$4(this, this.seekOffset);
    if (attrName === Attributes$5.SEEK_OFFSET) {
      this.seekOffset = getNumericAttr(
        this,
        Attributes$5.SEEK_OFFSET,
        DEFAULT_SEEK_OFFSET$1
      );
    }
  }
  // Own props
  /**
   * Seek amount in seconds
   */
  get seekOffset() {
    return getNumericAttr(this, Attributes$5.SEEK_OFFSET, DEFAULT_SEEK_OFFSET$1);
  }
  set seekOffset(value) {
    setNumericAttr(this, Attributes$5.SEEK_OFFSET, value);
    this.setAttribute(
      "aria-label",
      t("seek back {seekOffset} seconds", { seekOffset: this.seekOffset })
    );
    updateIconText(getSlotted(this, "icon"), this.seekOffset);
  }
  // Props derived from Media UI Attributes
  /**
   * The current time in seconds
   */
  get mediaCurrentTime() {
    return getNumericAttr(
      this,
      MediaUIAttributes.MEDIA_CURRENT_TIME,
      DEFAULT_TIME$1
    );
  }
  set mediaCurrentTime(time) {
    setNumericAttr(this, MediaUIAttributes.MEDIA_CURRENT_TIME, time);
  }
  handleClick() {
    const detail = Math.max(this.mediaCurrentTime - this.seekOffset, 0);
    const evt = new GlobalThis.CustomEvent(MediaUIEvents.MEDIA_SEEK_REQUEST, {
      composed: true,
      bubbles: true,
      detail
    });
    this.dispatchEvent(evt);
  }
}
MediaSeekBackwardButton.getSlotTemplateHTML = getSlotTemplateHTML$8;
MediaSeekBackwardButton.getTooltipContentHTML = getTooltipContentHTML$7;
if (!GlobalThis.customElements.get("media-seek-backward-button")) {
  GlobalThis.customElements.define(
    "media-seek-backward-button",
    MediaSeekBackwardButton
  );
}
const Attributes$4 = {
  SEEK_OFFSET: "seekoffset"
};
const DEFAULT_SEEK_OFFSET = 30;
const forwardIcon = (seekOffset) => `
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${seekOffset}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`;
function getSlotTemplateHTML$7(_attrs, props) {
  return (
    /*html*/
    `
    <slot name="icon">${forwardIcon(props.seekOffset)}</slot>
  `
  );
}
const updateAriaLabel$3 = (el, seekOffset) => {
  el.setAttribute("aria-label", t("seek forward {seekOffset} seconds", { seekOffset }));
};
function getTooltipContentHTML$6() {
  return t("Seek forward");
}
const DEFAULT_TIME = 0;
class MediaSeekForwardButton extends MediaChromeButton {
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_CURRENT_TIME,
      Attributes$4.SEEK_OFFSET
    ];
  }
  connectedCallback() {
    super.connectedCallback();
    this.seekOffset = getNumericAttr(
      this,
      Attributes$4.SEEK_OFFSET,
      DEFAULT_SEEK_OFFSET
    );
  }
  attributeChangedCallback(attrName, _oldValue, newValue) {
    super.attributeChangedCallback(attrName, _oldValue, newValue);
    updateAriaLabel$3(this, this.seekOffset);
    if (attrName === Attributes$4.SEEK_OFFSET) {
      this.seekOffset = getNumericAttr(
        this,
        Attributes$4.SEEK_OFFSET,
        DEFAULT_SEEK_OFFSET
      );
    }
  }
  // Own props
  /**
   * Seek amount in seconds
   */
  get seekOffset() {
    return getNumericAttr(this, Attributes$4.SEEK_OFFSET, DEFAULT_SEEK_OFFSET);
  }
  set seekOffset(value) {
    setNumericAttr(this, Attributes$4.SEEK_OFFSET, value);
    this.setAttribute(
      "aria-label",
      t("seek forward {seekOffset} seconds", { seekOffset: this.seekOffset })
    );
    updateIconText(getSlotted(this, "icon"), this.seekOffset);
  }
  // Props derived from Media UI Attributes
  /**
   * The current time in seconds
   */
  get mediaCurrentTime() {
    return getNumericAttr(
      this,
      MediaUIAttributes.MEDIA_CURRENT_TIME,
      DEFAULT_TIME
    );
  }
  set mediaCurrentTime(time) {
    setNumericAttr(this, MediaUIAttributes.MEDIA_CURRENT_TIME, time);
  }
  handleClick() {
    const detail = this.mediaCurrentTime + this.seekOffset;
    const evt = new GlobalThis.CustomEvent(MediaUIEvents.MEDIA_SEEK_REQUEST, {
      composed: true,
      bubbles: true,
      detail
    });
    this.dispatchEvent(evt);
  }
}
MediaSeekForwardButton.getSlotTemplateHTML = getSlotTemplateHTML$7;
MediaSeekForwardButton.getTooltipContentHTML = getTooltipContentHTML$6;
if (!GlobalThis.customElements.get("media-seek-forward-button")) {
  GlobalThis.customElements.define(
    "media-seek-forward-button",
    MediaSeekForwardButton
  );
}
var __accessCheck$c = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet$c = (obj, member, getter) => {
  __accessCheck$c(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$c = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$a = (obj, member, value, setter) => {
  __accessCheck$c(obj, member, "write to private field");
  member.set(obj, value);
  return value;
};
var __privateMethod$9 = (obj, member, method) => {
  __accessCheck$c(obj, member, "access private method");
  return method;
};
var _slot, _keyUpHandler, _keyDownHandler, _setupEventListeners, setupEventListeners_fn, _removeEventListeners, removeEventListeners_fn, _makeInteractive, makeInteractive_fn, _makeNonInteractive, makeNonInteractive_fn;
const Attributes$3 = {
  REMAINING: "remaining",
  SHOW_DURATION: "showduration",
  NO_TOGGLE: "notoggle"
};
const CombinedAttributes = [
  ...Object.values(Attributes$3),
  MediaUIAttributes.MEDIA_CURRENT_TIME,
  MediaUIAttributes.MEDIA_DURATION,
  MediaUIAttributes.MEDIA_SEEKABLE
];
const ButtonPressedKeys = ["Enter", " "];
const DEFAULT_TIMES_SEP = "&nbsp;/&nbsp;";
const formatTimesLabel = (el, { timesSep = DEFAULT_TIMES_SEP } = {}) => {
  var _a2, _b;
  const currentTime = (_a2 = el.mediaCurrentTime) != null ? _a2 : 0;
  const [, seekableEnd] = (_b = el.mediaSeekable) != null ? _b : [];
  let endTime = 0;
  if (Number.isFinite(el.mediaDuration)) {
    endTime = el.mediaDuration;
  } else if (Number.isFinite(seekableEnd)) {
    endTime = seekableEnd;
  }
  const timeLabel = el.remaining ? formatTime(0 - (endTime - currentTime)) : formatTime(currentTime);
  if (!el.showDuration)
    return timeLabel;
  return `${timeLabel}${timesSep}${formatTime(endTime)}`;
};
const updateAriaDescription = (el) => {
  var _a2;
  const currentTime = el.mediaCurrentTime;
  const [, seekableEnd] = (_a2 = el.mediaSeekable) != null ? _a2 : [];
  let endTime = null;
  if (Number.isFinite(el.mediaDuration)) {
    endTime = el.mediaDuration;
  } else if (Number.isFinite(seekableEnd)) {
    endTime = seekableEnd;
  }
  if (currentTime == null || endTime === null) {
    el.setAttribute("aria-description", t("video not loaded, unknown time."));
    return;
  }
  const currentTimePhrase = el.remaining ? formatAsTimePhrase(0 - (endTime - currentTime)) : formatAsTimePhrase(currentTime);
  if (!el.showDuration) {
    el.setAttribute("aria-description", currentTimePhrase);
    return;
  }
  const totalTimePhrase = formatAsTimePhrase(endTime);
  const fullPhrase = t("{currentTime} of {totalTime}", {
    currentTime: currentTimePhrase,
    totalTime: totalTimePhrase
  });
  el.setAttribute("aria-description", fullPhrase);
};
function getSlotTemplateHTML$6(_attrs, props) {
  return (
    /*html*/
    `
    <slot>${formatTimesLabel(props)}</slot>
  `
  );
}
const updateAriaLabel$2 = (el) => {
  el.setAttribute("aria-label", t("playback time"));
};
class MediaTimeDisplay extends MediaTextDisplay {
  constructor() {
    super();
    __privateAdd$c(this, _setupEventListeners);
    __privateAdd$c(this, _removeEventListeners);
    __privateAdd$c(this, _makeInteractive);
    __privateAdd$c(this, _makeNonInteractive);
    __privateAdd$c(this, _slot, void 0);
    __privateAdd$c(this, _keyUpHandler, null);
    __privateAdd$c(this, _keyDownHandler, (evt) => {
      const { metaKey, altKey, key } = evt;
      if (metaKey || altKey || !ButtonPressedKeys.includes(key)) {
        this.removeEventListener("keyup", __privateGet$c(this, _keyUpHandler));
        return;
      }
      this.addEventListener("keyup", __privateGet$c(this, _keyUpHandler));
    });
    __privateSet$a(this, _slot, this.shadowRoot.querySelector("slot"));
    __privateGet$c(this, _slot).innerHTML = `${formatTimesLabel(this)}`;
  }
  static get observedAttributes() {
    return [...super.observedAttributes, ...CombinedAttributes, "disabled"];
  }
  connectedCallback() {
    const { style } = getOrInsertCSSRule(
      this.shadowRoot,
      ":host(:hover:not([notoggle]))"
    );
    style.setProperty("cursor", "var(--media-cursor, pointer)");
    style.setProperty(
      "background",
      "var(--media-control-hover-background, rgba(50 50 70 / .7))"
    );
    this.setAttribute("aria-label", t("playback time"));
    __privateMethod$9(this, _makeInteractive, makeInteractive_fn).call(this);
    super.connectedCallback();
  }
  toggleTimeDisplay() {
    if (this.noToggle) {
      return;
    }
    if (this.hasAttribute("remaining")) {
      this.removeAttribute("remaining");
    } else {
      this.setAttribute("remaining", "");
    }
  }
  disconnectedCallback() {
    this.disable();
    __privateMethod$9(this, _removeEventListeners, removeEventListeners_fn).call(this);
    super.disconnectedCallback();
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    updateAriaLabel$2(this);
    if (CombinedAttributes.includes(attrName)) {
      this.update();
    } else if (attrName === "disabled" && newValue !== oldValue) {
      if (newValue == null) {
        __privateMethod$9(this, _makeInteractive, makeInteractive_fn).call(this);
      } else {
        __privateMethod$9(this, _makeNonInteractive, makeNonInteractive_fn).call(this);
      }
    } else if (attrName === Attributes$3.NO_TOGGLE && newValue !== oldValue) {
      if (this.noToggle) {
        __privateMethod$9(this, _makeNonInteractive, makeNonInteractive_fn).call(this);
      } else {
        __privateMethod$9(this, _makeInteractive, makeInteractive_fn).call(this);
      }
    }
    super.attributeChangedCallback(attrName, oldValue, newValue);
  }
  enable() {
    if (!this.noToggle) {
      this.tabIndex = 0;
    }
  }
  disable() {
    this.tabIndex = -1;
  }
  // Own props
  /**
   * Whether to show the remaining time
   */
  get remaining() {
    return getBooleanAttr(this, Attributes$3.REMAINING);
  }
  set remaining(show) {
    setBooleanAttr(this, Attributes$3.REMAINING, show);
  }
  /**
   * Whether to show the duration
   */
  get showDuration() {
    return getBooleanAttr(this, Attributes$3.SHOW_DURATION);
  }
  set showDuration(show) {
    setBooleanAttr(this, Attributes$3.SHOW_DURATION, show);
  }
  /**
   * Disable the default behavior that toggles between current and remaining time
   */
  get noToggle() {
    return getBooleanAttr(this, Attributes$3.NO_TOGGLE);
  }
  set noToggle(noToggle) {
    setBooleanAttr(this, Attributes$3.NO_TOGGLE, noToggle);
  }
  // Props derived from media UI attributes
  /**
   * Get the duration
   */
  get mediaDuration() {
    return getNumericAttr(this, MediaUIAttributes.MEDIA_DURATION);
  }
  set mediaDuration(time) {
    setNumericAttr(this, MediaUIAttributes.MEDIA_DURATION, time);
  }
  /**
   * The current time in seconds
   */
  get mediaCurrentTime() {
    return getNumericAttr(this, MediaUIAttributes.MEDIA_CURRENT_TIME);
  }
  set mediaCurrentTime(time) {
    setNumericAttr(this, MediaUIAttributes.MEDIA_CURRENT_TIME, time);
  }
  /**
   * Range of values that can be seeked to.
   * An array of two numbers [start, end]
   */
  get mediaSeekable() {
    const seekable = this.getAttribute(MediaUIAttributes.MEDIA_SEEKABLE);
    if (!seekable)
      return void 0;
    return seekable.split(":").map((time) => +time);
  }
  set mediaSeekable(range) {
    if (range == null) {
      this.removeAttribute(MediaUIAttributes.MEDIA_SEEKABLE);
      return;
    }
    this.setAttribute(MediaUIAttributes.MEDIA_SEEKABLE, range.join(":"));
  }
  update() {
    const timesLabel = formatTimesLabel(this);
    updateAriaDescription(this);
    if (timesLabel !== __privateGet$c(this, _slot).innerHTML) {
      __privateGet$c(this, _slot).innerHTML = timesLabel;
    }
  }
}
_slot = /* @__PURE__ */ new WeakMap();
_keyUpHandler = /* @__PURE__ */ new WeakMap();
_keyDownHandler = /* @__PURE__ */ new WeakMap();
_setupEventListeners = /* @__PURE__ */ new WeakSet();
setupEventListeners_fn = function() {
  if (__privateGet$c(this, _keyUpHandler)) {
    return;
  }
  __privateSet$a(this, _keyUpHandler, (evt) => {
    const { key } = evt;
    if (!ButtonPressedKeys.includes(key)) {
      this.removeEventListener("keyup", __privateGet$c(this, _keyUpHandler));
      return;
    }
    this.toggleTimeDisplay();
  });
  this.addEventListener("keydown", __privateGet$c(this, _keyDownHandler));
  this.addEventListener("click", this.toggleTimeDisplay);
};
_removeEventListeners = /* @__PURE__ */ new WeakSet();
removeEventListeners_fn = function() {
  if (__privateGet$c(this, _keyUpHandler)) {
    this.removeEventListener("keyup", __privateGet$c(this, _keyUpHandler));
    this.removeEventListener("keydown", __privateGet$c(this, _keyDownHandler));
    this.removeEventListener("click", this.toggleTimeDisplay);
    __privateSet$a(this, _keyUpHandler, null);
  }
};
_makeInteractive = /* @__PURE__ */ new WeakSet();
makeInteractive_fn = function() {
  if (!this.noToggle && !this.hasAttribute("disabled")) {
    this.setAttribute("role", "button");
    this.enable();
    __privateMethod$9(this, _setupEventListeners, setupEventListeners_fn).call(this);
  }
};
_makeNonInteractive = /* @__PURE__ */ new WeakSet();
makeNonInteractive_fn = function() {
  this.removeAttribute("role");
  this.disable();
  __privateMethod$9(this, _removeEventListeners, removeEventListeners_fn).call(this);
};
MediaTimeDisplay.getSlotTemplateHTML = getSlotTemplateHTML$6;
if (!GlobalThis.customElements.get("media-time-display")) {
  GlobalThis.customElements.define("media-time-display", MediaTimeDisplay);
}
var __accessCheck$b = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet$b = (obj, member, getter) => {
  __accessCheck$b(obj, member, "read from private field");
  return member.get(obj);
};
var __privateAdd$b = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$9 = (obj, member, value, setter) => {
  __accessCheck$b(obj, member, "write to private field");
  member.set(obj, value);
  return value;
};
var __privateWrapper = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet$9(obj, member, value);
  },
  get _() {
    return __privateGet$b(obj, member);
  }
});
var _range, _startTime, _previousTime, _deltaTime, _frameCount, _updateTimestamp, _updateStartValue, _lastRangeIncrease, _id, _animate;
class RangeAnimation {
  constructor(range, callback, fps) {
    __privateAdd$b(this, _range, void 0);
    __privateAdd$b(this, _startTime, void 0);
    __privateAdd$b(this, _previousTime, void 0);
    __privateAdd$b(this, _deltaTime, void 0);
    __privateAdd$b(this, _frameCount, void 0);
    __privateAdd$b(this, _updateTimestamp, void 0);
    __privateAdd$b(this, _updateStartValue, void 0);
    __privateAdd$b(this, _lastRangeIncrease, void 0);
    __privateAdd$b(this, _id, 0);
    __privateAdd$b(this, _animate, (now = performance.now()) => {
      __privateSet$9(this, _id, requestAnimationFrame(__privateGet$b(this, _animate)));
      __privateSet$9(this, _deltaTime, performance.now() - __privateGet$b(this, _previousTime));
      const fpsInterval = 1e3 / this.fps;
      if (__privateGet$b(this, _deltaTime) > fpsInterval) {
        __privateSet$9(this, _previousTime, now - __privateGet$b(this, _deltaTime) % fpsInterval);
        const fps2 = 1e3 / ((now - __privateGet$b(this, _startTime)) / ++__privateWrapper(this, _frameCount)._);
        const delta = (now - __privateGet$b(this, _updateTimestamp)) / 1e3 / this.duration;
        let value = __privateGet$b(this, _updateStartValue) + delta * this.playbackRate;
        const increase = value - __privateGet$b(this, _range).valueAsNumber;
        if (increase > 0) {
          __privateSet$9(this, _lastRangeIncrease, this.playbackRate / this.duration / fps2);
        } else {
          __privateSet$9(this, _lastRangeIncrease, 0.995 * __privateGet$b(this, _lastRangeIncrease));
          value = __privateGet$b(this, _range).valueAsNumber + __privateGet$b(this, _lastRangeIncrease);
        }
        this.callback(value);
      }
    });
    __privateSet$9(this, _range, range);
    this.callback = callback;
    this.fps = fps;
  }
  start() {
    if (__privateGet$b(this, _id) !== 0)
      return;
    __privateSet$9(this, _previousTime, performance.now());
    __privateSet$9(this, _startTime, __privateGet$b(this, _previousTime));
    __privateSet$9(this, _frameCount, 0);
    __privateGet$b(this, _animate).call(this);
  }
  stop() {
    if (__privateGet$b(this, _id) === 0)
      return;
    cancelAnimationFrame(__privateGet$b(this, _id));
    __privateSet$9(this, _id, 0);
  }
  update({ start, duration, playbackRate }) {
    const increase = start - __privateGet$b(this, _range).valueAsNumber;
    const durationDelta = Math.abs(duration - this.duration);
    if (increase > 0 || increase < -0.03 || durationDelta >= 0.5) {
      this.callback(start);
    }
    __privateSet$9(this, _updateStartValue, start);
    __privateSet$9(this, _updateTimestamp, performance.now());
    this.duration = duration;
    this.playbackRate = playbackRate;
  }
}
_range = /* @__PURE__ */ new WeakMap();
_startTime = /* @__PURE__ */ new WeakMap();
_previousTime = /* @__PURE__ */ new WeakMap();
_deltaTime = /* @__PURE__ */ new WeakMap();
_frameCount = /* @__PURE__ */ new WeakMap();
_updateTimestamp = /* @__PURE__ */ new WeakMap();
_updateStartValue = /* @__PURE__ */ new WeakMap();
_lastRangeIncrease = /* @__PURE__ */ new WeakMap();
_id = /* @__PURE__ */ new WeakMap();
_animate = /* @__PURE__ */ new WeakMap();
var __accessCheck$a = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet$a = (obj, member, getter) => {
  __accessCheck$a(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$a = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$8 = (obj, member, value, setter) => {
  __accessCheck$a(obj, member, "write to private field");
  member.set(obj, value);
  return value;
};
var __privateMethod$8 = (obj, member, method) => {
  __accessCheck$a(obj, member, "access private method");
  return method;
};
var _rootNode, _animation, _boxes, _previewTime, _previewBox, _currentBox, _boxPaddingLeft, _boxPaddingRight, _mediaChaptersCues, _isPointerDown, _toggleRangeAnimation, _shouldRangeAnimate, shouldRangeAnimate_fn, _updateRange, _getElementRects, getElementRects_fn, _getBoxPosition, getBoxPosition_fn, _getBoxShiftPosition, getBoxShiftPosition_fn, _handlePointerMove, handlePointerMove_fn, _previewRequest, previewRequest_fn, _seekRequest, seekRequest_fn;
const updateAriaValueText = (el) => {
  const range = el.range;
  const currentTimePhrase = formatAsTimePhrase(+calcTimeFromRangeValue(el));
  const totalTimePhrase = formatAsTimePhrase(+el.mediaSeekableEnd);
  const fullPhrase = !(currentTimePhrase && totalTimePhrase) ? t("video not loaded, unknown time.") : t("{currentTime} of {totalTime}", {
    currentTime: currentTimePhrase,
    totalTime: totalTimePhrase
  });
  range.setAttribute("aria-valuetext", fullPhrase);
};
function getContainerTemplateHTML(_attrs) {
  return (
    /*html*/
    `
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        ${/* 1% rail width trick was off in Safari, contain: layout seems to
    prevent the horizontal overflow as well. */
    ""}
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        ${/* absolute position is needed here so the box doesn't overflow the bounds */
    ""}
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${MediaUIAttributes.MEDIA_PREVIEW_IMAGE}], [${MediaUIAttributes.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${MediaUIAttributes.MEDIA_PREVIEW_IMAGE}], [${MediaUIAttributes.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        ${/* delay changing these CSS props until the preview box transition is ended */
    ""}
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${MediaUIAttributes.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${MediaUIAttributes.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${MediaUIAttributes.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${MediaUIAttributes.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${MediaUIAttributes.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        ${/* delay changing these CSS props until the preview box transition is ended */
    ""}
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${MediaUIAttributes.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${MediaUIAttributes.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${MediaUIAttributes.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${MediaUIAttributes.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        ${/* delay changing these CSS props until the preview box transition is ended */
    ""}
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${MediaUIAttributes.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${MediaUIAttributes.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${MediaUIAttributes.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        ${/* border-color has to come before border-top-color! */
    ""}
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${media_preview_thumbnail_default.shadowRootOptions.mode}">
            ${media_preview_thumbnail_default.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        ${/* Example: add the current time w/ arrow to the playhead
    <media-time-display slot="current"></media-time-display>
    <div part="arrow" slot="current"></div> */
    ""}
      </slot>
    </div>
  `
  );
}
const calcRangeValueFromTime = (el, time = el.mediaCurrentTime) => {
  const startTime = Number.isFinite(el.mediaSeekableStart) ? el.mediaSeekableStart : 0;
  const endTime = Number.isFinite(el.mediaDuration) ? el.mediaDuration : el.mediaSeekableEnd;
  if (Number.isNaN(endTime))
    return 0;
  const value = (time - startTime) / (endTime - startTime);
  return Math.max(0, Math.min(value, 1));
};
const calcTimeFromRangeValue = (el, value = el.range.valueAsNumber) => {
  const startTime = Number.isFinite(el.mediaSeekableStart) ? el.mediaSeekableStart : 0;
  const endTime = Number.isFinite(el.mediaDuration) ? el.mediaDuration : el.mediaSeekableEnd;
  if (Number.isNaN(endTime))
    return 0;
  return value * (endTime - startTime) + startTime;
};
class MediaTimeRange extends MediaChromeRange {
  constructor() {
    super();
    __privateAdd$a(this, _shouldRangeAnimate);
    __privateAdd$a(this, _getElementRects);
    __privateAdd$a(this, _getBoxPosition);
    __privateAdd$a(this, _getBoxShiftPosition);
    __privateAdd$a(this, _handlePointerMove);
    __privateAdd$a(this, _previewRequest);
    __privateAdd$a(this, _seekRequest);
    __privateAdd$a(this, _rootNode, null);
    __privateAdd$a(this, _animation, void 0);
    __privateAdd$a(this, _boxes, void 0);
    __privateAdd$a(this, _previewTime, void 0);
    __privateAdd$a(this, _previewBox, void 0);
    __privateAdd$a(this, _currentBox, void 0);
    __privateAdd$a(this, _boxPaddingLeft, void 0);
    __privateAdd$a(this, _boxPaddingRight, void 0);
    __privateAdd$a(this, _mediaChaptersCues, void 0);
    __privateAdd$a(this, _isPointerDown, void 0);
    __privateAdd$a(this, _toggleRangeAnimation, () => {
      if (__privateMethod$8(this, _shouldRangeAnimate, shouldRangeAnimate_fn).call(this)) {
        __privateGet$a(this, _animation).start();
      } else {
        __privateGet$a(this, _animation).stop();
      }
    });
    __privateAdd$a(this, _updateRange, (value) => {
      if (this.dragging)
        return;
      if (isValidNumber(value)) {
        this.range.valueAsNumber = value;
      }
      if (!__privateGet$a(this, _isPointerDown)) {
        this.updateBar();
      }
    });
    const track = this.shadowRoot.querySelector("#track");
    track.insertAdjacentHTML(
      "afterbegin",
      '<div id="buffered" part="buffered"></div>'
    );
    __privateSet$8(this, _boxes, this.shadowRoot.querySelectorAll('[part~="box"]'));
    __privateSet$8(this, _previewBox, this.shadowRoot.querySelector('[part~="preview-box"]'));
    __privateSet$8(this, _currentBox, this.shadowRoot.querySelector('[part~="current-box"]'));
    const computedStyle = getComputedStyle(this);
    __privateSet$8(this, _boxPaddingLeft, parseInt(
      computedStyle.getPropertyValue("--media-box-padding-left")
    ));
    __privateSet$8(this, _boxPaddingRight, parseInt(
      computedStyle.getPropertyValue("--media-box-padding-right")
    ));
    __privateSet$8(this, _animation, new RangeAnimation(this.range, __privateGet$a(this, _updateRange), 60));
  }
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_PAUSED,
      MediaUIAttributes.MEDIA_DURATION,
      MediaUIAttributes.MEDIA_SEEKABLE,
      MediaUIAttributes.MEDIA_CURRENT_TIME,
      MediaUIAttributes.MEDIA_PREVIEW_IMAGE,
      MediaUIAttributes.MEDIA_PREVIEW_TIME,
      MediaUIAttributes.MEDIA_PREVIEW_CHAPTER,
      MediaUIAttributes.MEDIA_BUFFERED,
      MediaUIAttributes.MEDIA_PLAYBACK_RATE,
      MediaUIAttributes.MEDIA_LOADING,
      MediaUIAttributes.MEDIA_ENDED
    ];
  }
  connectedCallback() {
    var _a2;
    super.connectedCallback();
    this.range.setAttribute("aria-label", t("seek"));
    __privateGet$a(this, _toggleRangeAnimation).call(this);
    __privateSet$8(this, _rootNode, this.getRootNode());
    (_a2 = __privateGet$a(this, _rootNode)) == null ? void 0 : _a2.addEventListener("transitionstart", this);
  }
  disconnectedCallback() {
    var _a2;
    super.disconnectedCallback();
    __privateGet$a(this, _animation).stop();
    (_a2 = __privateGet$a(this, _rootNode)) == null ? void 0 : _a2.removeEventListener("transitionstart", this);
    __privateSet$8(this, _rootNode, null);
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    super.attributeChangedCallback(attrName, oldValue, newValue);
    if (oldValue == newValue)
      return;
    if (attrName === MediaUIAttributes.MEDIA_CURRENT_TIME || attrName === MediaUIAttributes.MEDIA_PAUSED || attrName === MediaUIAttributes.MEDIA_ENDED || attrName === MediaUIAttributes.MEDIA_LOADING || attrName === MediaUIAttributes.MEDIA_DURATION || attrName === MediaUIAttributes.MEDIA_SEEKABLE) {
      __privateGet$a(this, _animation).update({
        start: calcRangeValueFromTime(this),
        duration: this.mediaSeekableEnd - this.mediaSeekableStart,
        playbackRate: this.mediaPlaybackRate
      });
      __privateGet$a(this, _toggleRangeAnimation).call(this);
      updateAriaValueText(this);
    } else if (attrName === MediaUIAttributes.MEDIA_BUFFERED) {
      this.updateBufferedBar();
    }
    if (attrName === MediaUIAttributes.MEDIA_DURATION || attrName === MediaUIAttributes.MEDIA_SEEKABLE) {
      this.mediaChaptersCues = __privateGet$a(this, _mediaChaptersCues);
      this.updateBar();
    }
  }
  get mediaChaptersCues() {
    return __privateGet$a(this, _mediaChaptersCues);
  }
  set mediaChaptersCues(value) {
    var _a2;
    __privateSet$8(this, _mediaChaptersCues, value);
    this.updateSegments(
      (_a2 = __privateGet$a(this, _mediaChaptersCues)) == null ? void 0 : _a2.map((c2) => ({
        start: calcRangeValueFromTime(this, c2.startTime),
        end: calcRangeValueFromTime(this, c2.endTime)
      }))
    );
  }
  /**
   * Is the media paused
   */
  get mediaPaused() {
    return getBooleanAttr(this, MediaUIAttributes.MEDIA_PAUSED);
  }
  set mediaPaused(value) {
    setBooleanAttr(this, MediaUIAttributes.MEDIA_PAUSED, value);
  }
  /**
   * Is the media loading
   */
  get mediaLoading() {
    return getBooleanAttr(this, MediaUIAttributes.MEDIA_LOADING);
  }
  set mediaLoading(value) {
    setBooleanAttr(this, MediaUIAttributes.MEDIA_LOADING, value);
  }
  /**
   *
   */
  get mediaDuration() {
    return getNumericAttr(this, MediaUIAttributes.MEDIA_DURATION);
  }
  set mediaDuration(value) {
    setNumericAttr(this, MediaUIAttributes.MEDIA_DURATION, value);
  }
  /**
   *
   */
  get mediaCurrentTime() {
    return getNumericAttr(this, MediaUIAttributes.MEDIA_CURRENT_TIME);
  }
  set mediaCurrentTime(value) {
    setNumericAttr(this, MediaUIAttributes.MEDIA_CURRENT_TIME, value);
  }
  /**
   *
   */
  get mediaPlaybackRate() {
    return getNumericAttr(this, MediaUIAttributes.MEDIA_PLAYBACK_RATE, 1);
  }
  set mediaPlaybackRate(value) {
    setNumericAttr(this, MediaUIAttributes.MEDIA_PLAYBACK_RATE, value);
  }
  /**
   * An array of ranges, each range being an array of two numbers.
   * e.g. [[1, 2], [3, 4]]
   */
  get mediaBuffered() {
    const buffered = this.getAttribute(MediaUIAttributes.MEDIA_BUFFERED);
    if (!buffered)
      return [];
    return buffered.split(" ").map((timePair) => timePair.split(":").map((timeStr) => +timeStr));
  }
  set mediaBuffered(list) {
    if (!list) {
      this.removeAttribute(MediaUIAttributes.MEDIA_BUFFERED);
      return;
    }
    const strVal = list.map((tuple) => tuple.join(":")).join(" ");
    this.setAttribute(MediaUIAttributes.MEDIA_BUFFERED, strVal);
  }
  /**
   * Range of values that can be seeked to
   * An array of two numbers [start, end]
   */
  get mediaSeekable() {
    const seekable = this.getAttribute(MediaUIAttributes.MEDIA_SEEKABLE);
    if (!seekable)
      return void 0;
    return seekable.split(":").map((time) => +time);
  }
  set mediaSeekable(range) {
    if (range == null) {
      this.removeAttribute(MediaUIAttributes.MEDIA_SEEKABLE);
      return;
    }
    this.setAttribute(MediaUIAttributes.MEDIA_SEEKABLE, range.join(":"));
  }
  /**
   *
   */
  get mediaSeekableEnd() {
    var _a2;
    const [, end = this.mediaDuration] = (_a2 = this.mediaSeekable) != null ? _a2 : [];
    return end;
  }
  get mediaSeekableStart() {
    var _a2;
    const [start = 0] = (_a2 = this.mediaSeekable) != null ? _a2 : [];
    return start;
  }
  /**
   * The url of the preview image
   */
  get mediaPreviewImage() {
    return getStringAttr(this, MediaUIAttributes.MEDIA_PREVIEW_IMAGE);
  }
  set mediaPreviewImage(value) {
    setStringAttr(this, MediaUIAttributes.MEDIA_PREVIEW_IMAGE, value);
  }
  /**
   *
   */
  get mediaPreviewTime() {
    return getNumericAttr(this, MediaUIAttributes.MEDIA_PREVIEW_TIME);
  }
  set mediaPreviewTime(value) {
    setNumericAttr(this, MediaUIAttributes.MEDIA_PREVIEW_TIME, value);
  }
  /**
   *
   */
  get mediaEnded() {
    return getBooleanAttr(this, MediaUIAttributes.MEDIA_ENDED);
  }
  set mediaEnded(value) {
    setBooleanAttr(this, MediaUIAttributes.MEDIA_ENDED, value);
  }
  /* Add a buffered progress bar */
  updateBar() {
    super.updateBar();
    this.updateBufferedBar();
    this.updateCurrentBox();
  }
  updateBufferedBar() {
    var _a2;
    const buffered = this.mediaBuffered;
    if (!buffered.length) {
      return;
    }
    let relativeBufferedEnd;
    if (!this.mediaEnded) {
      const currentTime = this.mediaCurrentTime;
      const [, bufferedEnd = this.mediaSeekableStart] = (_a2 = buffered.find(
        ([start, end]) => start <= currentTime && currentTime <= end
      )) != null ? _a2 : [];
      relativeBufferedEnd = calcRangeValueFromTime(this, bufferedEnd);
    } else {
      relativeBufferedEnd = 1;
    }
    const { style } = getOrInsertCSSRule(this.shadowRoot, "#buffered");
    style.setProperty("width", `${relativeBufferedEnd * 100}%`);
  }
  updateCurrentBox() {
    const currentSlot = this.shadowRoot.querySelector(
      'slot[name="current"]'
    );
    if (!currentSlot.assignedElements().length)
      return;
    const currentRailRule = getOrInsertCSSRule(
      this.shadowRoot,
      "#current-rail"
    );
    const currentBoxRule = getOrInsertCSSRule(
      this.shadowRoot,
      '[part~="current-box"]'
    );
    const rects = __privateMethod$8(this, _getElementRects, getElementRects_fn).call(this, __privateGet$a(this, _currentBox));
    const boxPos = __privateMethod$8(this, _getBoxPosition, getBoxPosition_fn).call(this, rects, this.range.valueAsNumber);
    const boxShift = __privateMethod$8(this, _getBoxShiftPosition, getBoxShiftPosition_fn).call(this, rects, this.range.valueAsNumber);
    currentRailRule.style.transform = `translateX(${boxPos})`;
    currentRailRule.style.setProperty("--_range-width", `${rects.range.width}`);
    currentBoxRule.style.setProperty("--_box-shift", `${boxShift}`);
    currentBoxRule.style.setProperty("--_box-width", `${rects.box.width}px`);
    currentBoxRule.style.setProperty("visibility", "initial");
  }
  handleEvent(evt) {
    super.handleEvent(evt);
    switch (evt.type) {
      case "input":
        __privateMethod$8(this, _seekRequest, seekRequest_fn).call(this);
        break;
      case "pointermove":
        __privateMethod$8(this, _handlePointerMove, handlePointerMove_fn).call(this, evt);
        break;
      case "pointerup":
        if (__privateGet$a(this, _isPointerDown))
          __privateSet$8(this, _isPointerDown, false);
        break;
      case "pointerdown":
        __privateSet$8(this, _isPointerDown, true);
        break;
      case "pointerleave":
        __privateMethod$8(this, _previewRequest, previewRequest_fn).call(this, null);
        break;
      case "transitionstart":
        if (containsComposedNode(evt.target, this)) {
          setTimeout(() => __privateGet$a(this, _toggleRangeAnimation).call(this), 0);
        }
        break;
    }
  }
}
_rootNode = /* @__PURE__ */ new WeakMap();
_animation = /* @__PURE__ */ new WeakMap();
_boxes = /* @__PURE__ */ new WeakMap();
_previewTime = /* @__PURE__ */ new WeakMap();
_previewBox = /* @__PURE__ */ new WeakMap();
_currentBox = /* @__PURE__ */ new WeakMap();
_boxPaddingLeft = /* @__PURE__ */ new WeakMap();
_boxPaddingRight = /* @__PURE__ */ new WeakMap();
_mediaChaptersCues = /* @__PURE__ */ new WeakMap();
_isPointerDown = /* @__PURE__ */ new WeakMap();
_toggleRangeAnimation = /* @__PURE__ */ new WeakMap();
_shouldRangeAnimate = /* @__PURE__ */ new WeakSet();
shouldRangeAnimate_fn = function() {
  return this.isConnected && !this.mediaPaused && !this.mediaLoading && !this.mediaEnded && this.mediaSeekableEnd > 0 && isElementVisible(this);
};
_updateRange = /* @__PURE__ */ new WeakMap();
_getElementRects = /* @__PURE__ */ new WeakSet();
getElementRects_fn = function(box) {
  var _a2;
  const bounds = (_a2 = this.getAttribute("bounds") ? closestComposedNode(this, `#${this.getAttribute("bounds")}`) : this.parentElement) != null ? _a2 : this;
  const boundsRect = bounds.getBoundingClientRect();
  const rangeRect = this.range.getBoundingClientRect();
  const width = box.offsetWidth;
  const min = -(rangeRect.left - boundsRect.left - width / 2);
  const max = boundsRect.right - rangeRect.left - width / 2;
  return {
    box: { width, min, max },
    bounds: boundsRect,
    range: rangeRect
  };
};
_getBoxPosition = /* @__PURE__ */ new WeakSet();
getBoxPosition_fn = function(rects, ratio) {
  let position = `${ratio * 100}%`;
  const { width, min, max } = rects.box;
  if (!width)
    return position;
  if (!Number.isNaN(min)) {
    const pad = `var(--media-box-padding-left)`;
    const minPos = `calc(1 / var(--_range-width) * 100 * ${min}% + ${pad})`;
    position = `max(${minPos}, ${position})`;
  }
  if (!Number.isNaN(max)) {
    const pad = `var(--media-box-padding-right)`;
    const maxPos = `calc(1 / var(--_range-width) * 100 * ${max}% - ${pad})`;
    position = `min(${position}, ${maxPos})`;
  }
  return position;
};
_getBoxShiftPosition = /* @__PURE__ */ new WeakSet();
getBoxShiftPosition_fn = function(rects, ratio) {
  const { width, min, max } = rects.box;
  const pointerX = ratio * rects.range.width;
  if (pointerX < min + __privateGet$a(this, _boxPaddingLeft)) {
    const offset = rects.range.left - rects.bounds.left - __privateGet$a(this, _boxPaddingLeft);
    return `${pointerX - width / 2 + offset}px`;
  }
  if (pointerX > max - __privateGet$a(this, _boxPaddingRight)) {
    const offset = rects.bounds.right - rects.range.right - __privateGet$a(this, _boxPaddingRight);
    return `${pointerX + width / 2 - offset - rects.range.width}px`;
  }
  return 0;
};
_handlePointerMove = /* @__PURE__ */ new WeakSet();
handlePointerMove_fn = function(evt) {
  const isOverBoxes = [...__privateGet$a(this, _boxes)].some(
    (b2) => evt.composedPath().includes(b2)
  );
  if (!this.dragging && (isOverBoxes || !evt.composedPath().includes(this))) {
    __privateMethod$8(this, _previewRequest, previewRequest_fn).call(this, null);
    return;
  }
  const duration = this.mediaSeekableEnd;
  if (!duration)
    return;
  const previewRailRule = getOrInsertCSSRule(
    this.shadowRoot,
    "#preview-rail"
  );
  const previewBoxRule = getOrInsertCSSRule(
    this.shadowRoot,
    '[part~="preview-box"]'
  );
  const rects = __privateMethod$8(this, _getElementRects, getElementRects_fn).call(this, __privateGet$a(this, _previewBox));
  let pointerRatio = (evt.clientX - rects.range.left) / rects.range.width;
  pointerRatio = Math.max(0, Math.min(1, pointerRatio));
  const boxPos = __privateMethod$8(this, _getBoxPosition, getBoxPosition_fn).call(this, rects, pointerRatio);
  const boxShift = __privateMethod$8(this, _getBoxShiftPosition, getBoxShiftPosition_fn).call(this, rects, pointerRatio);
  previewRailRule.style.transform = `translateX(${boxPos})`;
  previewRailRule.style.setProperty("--_range-width", `${rects.range.width}`);
  previewBoxRule.style.setProperty("--_box-shift", `${boxShift}`);
  previewBoxRule.style.setProperty("--_box-width", `${rects.box.width}px`);
  const diff = Math.round(__privateGet$a(this, _previewTime)) - Math.round(pointerRatio * duration);
  if (Math.abs(diff) < 1 && pointerRatio > 0.01 && pointerRatio < 0.99)
    return;
  __privateSet$8(this, _previewTime, pointerRatio * duration);
  __privateMethod$8(this, _previewRequest, previewRequest_fn).call(this, __privateGet$a(this, _previewTime));
};
_previewRequest = /* @__PURE__ */ new WeakSet();
previewRequest_fn = function(detail) {
  this.dispatchEvent(
    new GlobalThis.CustomEvent(MediaUIEvents.MEDIA_PREVIEW_REQUEST, {
      composed: true,
      bubbles: true,
      detail
    })
  );
};
_seekRequest = /* @__PURE__ */ new WeakSet();
seekRequest_fn = function() {
  __privateGet$a(this, _animation).stop();
  const detail = calcTimeFromRangeValue(this);
  this.dispatchEvent(
    new GlobalThis.CustomEvent(MediaUIEvents.MEDIA_SEEK_REQUEST, {
      composed: true,
      bubbles: true,
      detail
    })
  );
};
MediaTimeRange.shadowRootOptions = { mode: "open" };
MediaTimeRange.getContainerTemplateHTML = getContainerTemplateHTML;
if (!GlobalThis.customElements.get("media-time-range")) {
  GlobalThis.customElements.define("media-time-range", MediaTimeRange);
}
var __accessCheck$9 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet$9 = (obj, member, getter) => {
  __accessCheck$9(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$9 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var _handleRangeInput;
const DEFAULT_VOLUME = 1;
const toVolume = (el) => {
  if (el.mediaMuted)
    return 0;
  return el.mediaVolume;
};
const formatAsPercentString = (value) => `${Math.round(value * 100)}%`;
class MediaVolumeRange extends MediaChromeRange {
  constructor() {
    super(...arguments);
    __privateAdd$9(this, _handleRangeInput, () => {
      const detail = this.range.value;
      const evt = new GlobalThis.CustomEvent(
        MediaUIEvents.MEDIA_VOLUME_REQUEST,
        {
          composed: true,
          bubbles: true,
          detail
        }
      );
      this.dispatchEvent(evt);
    });
  }
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_VOLUME,
      MediaUIAttributes.MEDIA_MUTED,
      MediaUIAttributes.MEDIA_VOLUME_UNAVAILABLE
    ];
  }
  connectedCallback() {
    super.connectedCallback();
    this.range.setAttribute("aria-label", t("volume"));
    this.range.addEventListener("input", __privateGet$9(this, _handleRangeInput));
  }
  disconnectedCallback() {
    this.range.removeEventListener("input", __privateGet$9(this, _handleRangeInput));
    super.disconnectedCallback();
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    super.attributeChangedCallback(attrName, oldValue, newValue);
    if (attrName === MediaUIAttributes.MEDIA_VOLUME || attrName === MediaUIAttributes.MEDIA_MUTED) {
      this.range.valueAsNumber = toVolume(this);
      this.range.setAttribute(
        "aria-valuetext",
        formatAsPercentString(this.range.valueAsNumber)
      );
      this.updateBar();
    }
  }
  /**
   *
   */
  get mediaVolume() {
    return getNumericAttr(this, MediaUIAttributes.MEDIA_VOLUME, DEFAULT_VOLUME);
  }
  set mediaVolume(value) {
    setNumericAttr(this, MediaUIAttributes.MEDIA_VOLUME, value);
  }
  /**
   * Is the media currently muted
   */
  get mediaMuted() {
    return getBooleanAttr(this, MediaUIAttributes.MEDIA_MUTED);
  }
  set mediaMuted(value) {
    setBooleanAttr(this, MediaUIAttributes.MEDIA_MUTED, value);
  }
  /**
   * The volume unavailability state
   */
  get mediaVolumeUnavailable() {
    return getStringAttr(this, MediaUIAttributes.MEDIA_VOLUME_UNAVAILABLE);
  }
  set mediaVolumeUnavailable(value) {
    setStringAttr(this, MediaUIAttributes.MEDIA_VOLUME_UNAVAILABLE, value);
  }
}
_handleRangeInput = /* @__PURE__ */ new WeakMap();
if (!GlobalThis.customElements.get("media-volume-range")) {
  GlobalThis.customElements.define("media-volume-range", MediaVolumeRange);
}
function getSlotTemplateHTML$5(_attrs) {
  return (
    /*html*/
    `
      <style>
        :host {
          min-width: 4ch;
          padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
          width: 100%;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 1rem;
          font-weight: var(--media-button-font-weight, normal);
        }

        #checked-indicator {
          display: none;
        }

        :host([${MediaUIAttributes.MEDIA_LOOP}]) #checked-indicator {
          display: block;
        }
      </style>
      
      <span id="icon">
     </span>

      <div id="checked-indicator">
        <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
          <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
        </svg>
      </div>
    `
  );
}
function getTooltipContentHTML$5() {
  return t("Loop");
}
class MediaLoopButton extends MediaChromeButton {
  constructor() {
    super(...arguments);
    this.container = null;
  }
  static get observedAttributes() {
    return [...super.observedAttributes, MediaUIAttributes.MEDIA_LOOP];
  }
  connectedCallback() {
    var _a2;
    super.connectedCallback();
    this.container = ((_a2 = this.shadowRoot) == null ? void 0 : _a2.querySelector("#icon")) || null;
    if (this.container) {
      this.container.textContent = t("Loop");
    }
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    super.attributeChangedCallback(attrName, oldValue, newValue);
    if (attrName === MediaUIAttributes.MEDIA_LOOP && this.container) {
      this.setAttribute(
        "aria-checked",
        this.mediaLoop ? "true" : "false"
      );
    }
  }
  get mediaLoop() {
    return getBooleanAttr(this, MediaUIAttributes.MEDIA_LOOP);
  }
  set mediaLoop(value) {
    setBooleanAttr(this, MediaUIAttributes.MEDIA_LOOP, value);
  }
  handleClick() {
    const looping = !this.mediaLoop;
    const evt = new GlobalThis.CustomEvent(MediaUIEvents.MEDIA_LOOP_REQUEST, {
      composed: true,
      bubbles: true,
      detail: looping
    });
    this.dispatchEvent(evt);
  }
}
MediaLoopButton.getSlotTemplateHTML = getSlotTemplateHTML$5;
MediaLoopButton.getTooltipContentHTML = getTooltipContentHTML$5;
if (!GlobalThis.customElements.get("media-loop-button")) {
  GlobalThis.customElements.define("media-loop-button", MediaLoopButton);
}
var __accessCheck$8 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet$8 = (obj, member, getter) => {
  __accessCheck$8(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$8 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$7 = (obj, member, value, setter) => {
  __accessCheck$8(obj, member, "write to private field");
  member.set(obj, value);
  return value;
};
var _parts, _processor, _items, _value, _element, _attributeName, _namespaceURI, _list, list_get, _parentNode, _nodes;
const ELEMENT = 1;
const STRING = 0;
const PART = 1;
const defaultProcessor = {
  processCallback(instance, parts, state) {
    if (!state)
      return;
    for (const [expression, part] of parts) {
      if (expression in state) {
        const value = state[expression];
        if (typeof value === "boolean" && part instanceof AttrPart && typeof part.element[part.attributeName] === "boolean") {
          part.booleanValue = value;
        } else if (typeof value === "function" && part instanceof AttrPart) {
          part.element[part.attributeName] = value;
        } else {
          part.value = value;
        }
      }
    }
  }
};
class TemplateInstance extends GlobalThis.DocumentFragment {
  constructor(template, state, processor2 = defaultProcessor) {
    var _a2;
    super();
    __privateAdd$8(this, _parts, void 0);
    __privateAdd$8(this, _processor, void 0);
    this.append(template.content.cloneNode(true));
    __privateSet$7(this, _parts, parse(this));
    __privateSet$7(this, _processor, processor2);
    (_a2 = processor2.createCallback) == null ? void 0 : _a2.call(processor2, this, __privateGet$8(this, _parts), state);
    processor2.processCallback(this, __privateGet$8(this, _parts), state);
  }
  update(state) {
    __privateGet$8(this, _processor).processCallback(this, __privateGet$8(this, _parts), state);
  }
}
_parts = /* @__PURE__ */ new WeakMap();
_processor = /* @__PURE__ */ new WeakMap();
const parse = (element, parts = []) => {
  let type, value;
  for (const attr of element.attributes || []) {
    if (attr.value.includes("{{")) {
      const list = new AttrPartList();
      for ([type, value] of tokenize$1(attr.value)) {
        if (!type)
          list.append(value);
        else {
          const part = new AttrPart(element, attr.name, attr.namespaceURI);
          list.append(part);
          parts.push([value, part]);
        }
      }
      attr.value = list.toString();
    }
  }
  for (const node of element.childNodes) {
    if (node.nodeType === ELEMENT && !(node instanceof HTMLTemplateElement)) {
      parse(node, parts);
    } else {
      const data = node.data;
      if (node.nodeType === ELEMENT || data.includes("{{")) {
        const items = [];
        if (data) {
          for ([type, value] of tokenize$1(data))
            if (!type)
              items.push(new Text(value));
            else {
              const part = new ChildNodePart(element);
              items.push(part);
              parts.push([value, part]);
            }
        } else if (node instanceof HTMLTemplateElement) {
          const part = new InnerTemplatePart(element, node);
          items.push(part);
          parts.push([part.expression, part]);
        }
        node.replaceWith(
          ...items.flatMap((part) => part.replacementNodes || [part])
        );
      }
    }
  }
  return parts;
};
const mem = {};
const tokenize$1 = (text) => {
  let value = "", open = 0, tokens = mem[text], i2 = 0, c2;
  if (tokens)
    return tokens;
  else
    tokens = [];
  for (; c2 = text[i2]; i2++) {
    if (c2 === "{" && text[i2 + 1] === "{" && text[i2 - 1] !== "\\" && text[i2 + 2] && ++open == 1) {
      if (value)
        tokens.push([STRING, value]);
      value = "";
      i2++;
    } else if (c2 === "}" && text[i2 + 1] === "}" && text[i2 - 1] !== "\\" && !--open) {
      tokens.push([PART, value.trim()]);
      value = "";
      i2++;
    } else
      value += c2 || "";
  }
  if (value)
    tokens.push([STRING, (open > 0 ? "{{" : "") + value]);
  return mem[text] = tokens;
};
const FRAGMENT = 11;
class Part {
  get value() {
    return "";
  }
  set value(val) {
  }
  toString() {
    return this.value;
  }
}
const attrPartToList = /* @__PURE__ */ new WeakMap();
class AttrPartList {
  constructor() {
    __privateAdd$8(this, _items, []);
  }
  [Symbol.iterator]() {
    return __privateGet$8(this, _items).values();
  }
  get length() {
    return __privateGet$8(this, _items).length;
  }
  item(index) {
    return __privateGet$8(this, _items)[index];
  }
  append(...items) {
    for (const item of items) {
      if (item instanceof AttrPart) {
        attrPartToList.set(item, this);
      }
      __privateGet$8(this, _items).push(item);
    }
  }
  toString() {
    return __privateGet$8(this, _items).join("");
  }
}
_items = /* @__PURE__ */ new WeakMap();
class AttrPart extends Part {
  constructor(element, attributeName, namespaceURI) {
    super();
    __privateAdd$8(this, _list);
    __privateAdd$8(this, _value, "");
    __privateAdd$8(this, _element, void 0);
    __privateAdd$8(this, _attributeName, void 0);
    __privateAdd$8(this, _namespaceURI, void 0);
    __privateSet$7(this, _element, element);
    __privateSet$7(this, _attributeName, attributeName);
    __privateSet$7(this, _namespaceURI, namespaceURI);
  }
  get attributeName() {
    return __privateGet$8(this, _attributeName);
  }
  get attributeNamespace() {
    return __privateGet$8(this, _namespaceURI);
  }
  get element() {
    return __privateGet$8(this, _element);
  }
  get value() {
    return __privateGet$8(this, _value);
  }
  set value(newValue) {
    if (__privateGet$8(this, _value) === newValue)
      return;
    __privateSet$7(this, _value, newValue);
    if (!__privateGet$8(this, _list, list_get) || __privateGet$8(this, _list, list_get).length === 1) {
      if (newValue == null) {
        __privateGet$8(this, _element).removeAttributeNS(
          __privateGet$8(this, _namespaceURI),
          __privateGet$8(this, _attributeName)
        );
      } else {
        __privateGet$8(this, _element).setAttributeNS(
          __privateGet$8(this, _namespaceURI),
          __privateGet$8(this, _attributeName),
          newValue
        );
      }
    } else {
      __privateGet$8(this, _element).setAttributeNS(
        __privateGet$8(this, _namespaceURI),
        __privateGet$8(this, _attributeName),
        __privateGet$8(this, _list, list_get).toString()
      );
    }
  }
  get booleanValue() {
    return __privateGet$8(this, _element).hasAttributeNS(
      __privateGet$8(this, _namespaceURI),
      __privateGet$8(this, _attributeName)
    );
  }
  set booleanValue(value) {
    if (!__privateGet$8(this, _list, list_get) || __privateGet$8(this, _list, list_get).length === 1)
      this.value = value ? "" : null;
    else
      throw new DOMException("Value is not fully templatized");
  }
}
_value = /* @__PURE__ */ new WeakMap();
_element = /* @__PURE__ */ new WeakMap();
_attributeName = /* @__PURE__ */ new WeakMap();
_namespaceURI = /* @__PURE__ */ new WeakMap();
_list = /* @__PURE__ */ new WeakSet();
list_get = function() {
  return attrPartToList.get(this);
};
class ChildNodePart extends Part {
  constructor(parentNode, nodes) {
    super();
    __privateAdd$8(this, _parentNode, void 0);
    __privateAdd$8(this, _nodes, void 0);
    __privateSet$7(this, _parentNode, parentNode);
    __privateSet$7(this, _nodes, nodes ? [...nodes] : [new Text()]);
  }
  get replacementNodes() {
    return __privateGet$8(this, _nodes);
  }
  get parentNode() {
    return __privateGet$8(this, _parentNode);
  }
  get nextSibling() {
    return __privateGet$8(this, _nodes)[__privateGet$8(this, _nodes).length - 1].nextSibling;
  }
  get previousSibling() {
    return __privateGet$8(this, _nodes)[0].previousSibling;
  }
  // FIXME: not sure why do we need string serialization here? Just because parent class has type DOMString?
  get value() {
    return __privateGet$8(this, _nodes).map((node) => node.textContent).join("");
  }
  set value(newValue) {
    this.replace(newValue);
  }
  replace(...nodes) {
    const normalisedNodes = nodes.flat().flatMap(
      (node) => node == null ? [new Text()] : node.forEach ? [...node] : node.nodeType === FRAGMENT ? [...node.childNodes] : node.nodeType ? [node] : [new Text(node)]
    );
    if (!normalisedNodes.length)
      normalisedNodes.push(new Text());
    __privateSet$7(this, _nodes, swapdom(
      __privateGet$8(this, _nodes)[0].parentNode,
      __privateGet$8(this, _nodes),
      normalisedNodes,
      this.nextSibling
    ));
  }
}
_parentNode = /* @__PURE__ */ new WeakMap();
_nodes = /* @__PURE__ */ new WeakMap();
class InnerTemplatePart extends ChildNodePart {
  constructor(parentNode, template) {
    const directive = template.getAttribute("directive") || template.getAttribute("type");
    let expression = template.getAttribute("expression") || template.getAttribute(directive) || "";
    if (expression.startsWith("{{"))
      expression = expression.trim().slice(2, -2).trim();
    super(parentNode);
    this.expression = expression;
    this.template = template;
    this.directive = directive;
  }
}
function swapdom(parent, a, b2, end = null) {
  let i2 = 0, cur, next, bi2, n2 = b2.length, m2 = a.length;
  while (i2 < n2 && i2 < m2 && a[i2] == b2[i2])
    i2++;
  while (i2 < n2 && i2 < m2 && b2[n2 - 1] == a[m2 - 1])
    end = b2[--m2, --n2];
  if (i2 == m2)
    while (i2 < n2)
      parent.insertBefore(b2[i2++], end);
  if (i2 == n2)
    while (i2 < m2)
      parent.removeChild(a[i2++]);
  else {
    cur = a[i2];
    while (i2 < n2) {
      bi2 = b2[i2++], next = cur ? cur.nextSibling : end;
      if (cur == bi2)
        cur = next;
      else if (i2 < n2 && b2[i2] == next)
        parent.replaceChild(bi2, cur), cur = next;
      else
        parent.insertBefore(bi2, cur);
    }
    while (cur != end)
      next = cur.nextSibling, parent.removeChild(cur), cur = next;
  }
  return b2;
}
const pipeModifiers = {
  string: (value) => String(value)
};
class PartialTemplate {
  constructor(template) {
    this.template = template;
    this.state = void 0;
  }
}
const templates = /* @__PURE__ */ new WeakMap();
const templateInstances = /* @__PURE__ */ new WeakMap();
const Directives = {
  partial: (part, state) => {
    state[part.expression] = new PartialTemplate(part.template);
  },
  if: (part, state) => {
    var _a2;
    if (evaluateExpression(part.expression, state)) {
      if (templates.get(part) !== part.template) {
        templates.set(part, part.template);
        const tpl = new TemplateInstance(part.template, state, processor);
        part.replace(tpl);
        templateInstances.set(part, tpl);
      } else {
        (_a2 = templateInstances.get(part)) == null ? void 0 : _a2.update(state);
      }
    } else {
      part.replace("");
      templates.delete(part);
      templateInstances.delete(part);
    }
  }
};
const DirectiveNames = Object.keys(Directives);
const processor = {
  processCallback(instance, parts, state) {
    var _a2, _b;
    if (!state)
      return;
    for (const [expression, part] of parts) {
      if (part instanceof InnerTemplatePart) {
        if (!part.directive) {
          const directive = DirectiveNames.find(
            (n2) => part.template.hasAttribute(n2)
          );
          if (directive) {
            part.directive = directive;
            part.expression = part.template.getAttribute(directive);
          }
        }
        (_a2 = Directives[part.directive]) == null ? void 0 : _a2.call(Directives, part, state);
        continue;
      }
      let value = evaluateExpression(expression, state);
      if (value instanceof PartialTemplate) {
        if (templates.get(part) !== value.template) {
          templates.set(part, value.template);
          value = new TemplateInstance(value.template, value.state, processor);
          part.value = value;
          templateInstances.set(part, value);
        } else {
          (_b = templateInstances.get(part)) == null ? void 0 : _b.update(value.state);
        }
        continue;
      }
      if (value) {
        if (part instanceof AttrPart) {
          if (part.attributeName.startsWith("aria-")) {
            value = String(value);
          }
        }
        if (part instanceof AttrPart) {
          if (typeof value === "boolean") {
            part.booleanValue = value;
          } else if (typeof value === "function") {
            part.element[part.attributeName] = value;
          } else {
            part.value = value;
          }
        } else {
          part.value = value;
          templates.delete(part);
          templateInstances.delete(part);
        }
      } else {
        if (part instanceof AttrPart) {
          part.value = void 0;
        } else {
          part.value = void 0;
          templates.delete(part);
          templateInstances.delete(part);
        }
      }
    }
  }
};
const operators = {
  "!": (a) => !a,
  "!!": (a) => !!a,
  "==": (a, b2) => a == b2,
  "!=": (a, b2) => a != b2,
  ">": (a, b2) => a > b2,
  ">=": (a, b2) => a >= b2,
  "<": (a, b2) => a < b2,
  "<=": (a, b2) => a <= b2,
  "??": (a, b2) => a != null ? a : b2,
  "|": (a, b2) => {
    var _a2;
    return (_a2 = pipeModifiers[b2]) == null ? void 0 : _a2.call(pipeModifiers, a);
  }
};
function tokenizeExpression(expr) {
  return tokenize(expr, {
    boolean: /true|false/,
    number: /-?\d+\.?\d*/,
    string: /(["'])((?:\\.|[^\\])*?)\1/,
    operator: /[!=><][=!]?|\?\?|\|/,
    ws: /\s+/,
    param: /[$a-z_][$\w]*/i
  }).filter(({ type }) => type !== "ws");
}
function evaluateExpression(expr, state = {}) {
  var _a2, _b, _c, _d, _e2, _f, _g;
  const tokens = tokenizeExpression(expr);
  if (tokens.length === 0 || tokens.some(({ type }) => !type)) {
    return invalidExpression(expr);
  }
  if (((_a2 = tokens[0]) == null ? void 0 : _a2.token) === ">") {
    const partial = state[(_b = tokens[1]) == null ? void 0 : _b.token];
    if (!partial) {
      return invalidExpression(expr);
    }
    const partialState = { ...state };
    partial.state = partialState;
    const args = tokens.slice(2);
    for (let i2 = 0; i2 < args.length; i2 += 3) {
      const name = (_c = args[i2]) == null ? void 0 : _c.token;
      const operator = (_d = args[i2 + 1]) == null ? void 0 : _d.token;
      const value = (_e2 = args[i2 + 2]) == null ? void 0 : _e2.token;
      if (name && operator === "=") {
        partialState[name] = getParamValue(value, state);
      }
    }
    return partial;
  }
  if (tokens.length === 1) {
    if (!isValidParam(tokens[0])) {
      return invalidExpression(expr);
    }
    return getParamValue(tokens[0].token, state);
  }
  if (tokens.length === 2) {
    const operator = (_f = tokens[0]) == null ? void 0 : _f.token;
    const run = operators[operator];
    if (!run || !isValidParam(tokens[1])) {
      return invalidExpression(expr);
    }
    const a = getParamValue(tokens[1].token, state);
    return run(a);
  }
  if (tokens.length === 3) {
    const operator = (_g = tokens[1]) == null ? void 0 : _g.token;
    const run = operators[operator];
    if (!run || !isValidParam(tokens[0]) || !isValidParam(tokens[2])) {
      return invalidExpression(expr);
    }
    const a = getParamValue(tokens[0].token, state);
    if (operator === "|") {
      return run(a, tokens[2].token);
    }
    const b2 = getParamValue(tokens[2].token, state);
    return run(a, b2);
  }
}
function invalidExpression(expr) {
  console.warn(`Warning: invalid expression \`${expr}\``);
  return false;
}
function isValidParam({ type }) {
  return ["number", "boolean", "string", "param"].includes(type);
}
function getParamValue(raw, state) {
  const firstChar = raw[0];
  const lastChar = raw.slice(-1);
  if (raw === "true" || raw === "false") {
    return raw === "true";
  }
  if (firstChar === lastChar && [`'`, `"`].includes(firstChar)) {
    return raw.slice(1, -1);
  }
  if (isNumericString(raw)) {
    return parseFloat(raw);
  }
  return state[raw];
}
function tokenize(str, parsers) {
  let len, match, token;
  const tokens = [];
  while (str) {
    token = null;
    len = str.length;
    for (const key in parsers) {
      match = parsers[key].exec(str);
      if (match && match.index < len) {
        token = {
          token: match[0],
          type: key,
          matches: match.slice(1)
        };
        len = match.index;
      }
    }
    if (len) {
      tokens.push({
        token: str.substr(0, len),
        type: void 0
      });
    }
    if (token) {
      tokens.push(token);
    }
    str = str.substr(len + (token ? token.token.length : 0));
  }
  return tokens;
}
var __accessCheck$7 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet$7 = (obj, member, getter) => {
  __accessCheck$7(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$7 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$6 = (obj, member, value, setter) => {
  __accessCheck$7(obj, member, "write to private field");
  member.set(obj, value);
  return value;
};
var __privateMethod$7 = (obj, member, method) => {
  __accessCheck$7(obj, member, "access private method");
  return method;
};
var _template, _prevTemplate, _prevTemplateId, _observer, _upgradeProperty, upgradeProperty_fn, _updateTemplate, updateTemplate_fn, _renderBind;
const observedMediaAttributes = {
  mediatargetlivewindow: "targetlivewindow",
  mediastreamtype: "streamtype"
};
const prependTemplate = Document$1.createElement("template");
prependTemplate.innerHTML = /*html*/
`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;
class MediaThemeElement extends GlobalThis.HTMLElement {
  constructor() {
    super();
    __privateAdd$7(this, _upgradeProperty);
    __privateAdd$7(this, _updateTemplate);
    __privateAdd$7(this, _template, void 0);
    __privateAdd$7(this, _prevTemplate, void 0);
    __privateAdd$7(this, _prevTemplateId, void 0);
    __privateAdd$7(this, _observer, void 0);
    __privateAdd$7(this, _renderBind, void 0);
    if (this.shadowRoot) {
      this.renderRoot = this.shadowRoot;
    } else {
      this.renderRoot = this.attachShadow({ mode: "open" });
      this.createRenderer();
    }
    __privateSet$6(this, _observer, new MutationObserver((mutationList) => {
      var _a2;
      if (this.mediaController && !((_a2 = this.mediaController) == null ? void 0 : _a2.breakpointsComputed))
        return;
      if (mutationList.some((mutation) => {
        const target = mutation.target;
        if (target === this)
          return true;
        if (target.localName !== "media-controller")
          return false;
        if (observedMediaAttributes[mutation.attributeName])
          return true;
        if (mutation.attributeName.startsWith("breakpoint"))
          return true;
        return false;
      })) {
        this.render();
      }
    }));
    __privateSet$6(this, _renderBind, this.render.bind(this));
    __privateMethod$7(this, _upgradeProperty, upgradeProperty_fn).call(this, "template");
  }
  /** @type {HTMLElement & { breakpointsComputed?: boolean }} */
  get mediaController() {
    return this.renderRoot.querySelector("media-controller");
  }
  get template() {
    var _a2;
    return (_a2 = __privateGet$7(this, _template)) != null ? _a2 : this.constructor.template;
  }
  set template(value) {
    if (value === null) {
      this.removeAttribute("template");
      return;
    }
    if (typeof value === "string") {
      this.setAttribute("template", value);
    } else if (value instanceof HTMLTemplateElement) {
      __privateSet$6(this, _template, value);
      __privateSet$6(this, _prevTemplateId, null);
      this.createRenderer();
    }
  }
  get props() {
    var _a2, _b, _c;
    const observedAttributes2 = [
      ...Array.from((_b = (_a2 = this.mediaController) == null ? void 0 : _a2.attributes) != null ? _b : []).filter(
        ({ name }) => {
          return observedMediaAttributes[name] || name.startsWith("breakpoint");
        }
      ),
      ...Array.from(this.attributes)
    ];
    const props = {};
    for (const attr of observedAttributes2) {
      const name = (_c = observedMediaAttributes[attr.name]) != null ? _c : camelCase(attr.name);
      let { value } = attr;
      if (value != null) {
        if (isNumericString(value)) {
          value = parseFloat(value);
        }
        props[name] = value === "" ? true : value;
      } else {
        props[name] = false;
      }
    }
    return props;
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === "template" && oldValue != newValue) {
      __privateMethod$7(this, _updateTemplate, updateTemplate_fn).call(this);
    }
  }
  connectedCallback() {
    this.addEventListener(
      MediaStateChangeEvents.BREAKPOINTS_COMPUTED,
      __privateGet$7(this, _renderBind)
    );
    __privateGet$7(this, _observer).observe(this, { attributes: true });
    __privateGet$7(this, _observer).observe(this.renderRoot, {
      attributes: true,
      subtree: true
    });
    __privateMethod$7(this, _updateTemplate, updateTemplate_fn).call(this);
  }
  disconnectedCallback() {
    this.removeEventListener(
      MediaStateChangeEvents.BREAKPOINTS_COMPUTED,
      __privateGet$7(this, _renderBind)
    );
    __privateGet$7(this, _observer).disconnect();
  }
  createRenderer() {
    if (this.template instanceof HTMLTemplateElement && this.template !== __privateGet$7(this, _prevTemplate)) {
      __privateSet$6(this, _prevTemplate, this.template);
      this.renderer = new TemplateInstance(
        this.template,
        this.props,
        // @ts-ignore
        this.constructor.processor
      );
      this.renderRoot.textContent = "";
      this.renderRoot.append(
        prependTemplate.content.cloneNode(true),
        this.renderer
      );
    }
  }
  render() {
    var _a2;
    (_a2 = this.renderer) == null ? void 0 : _a2.update(this.props);
  }
}
_template = /* @__PURE__ */ new WeakMap();
_prevTemplate = /* @__PURE__ */ new WeakMap();
_prevTemplateId = /* @__PURE__ */ new WeakMap();
_observer = /* @__PURE__ */ new WeakMap();
_upgradeProperty = /* @__PURE__ */ new WeakSet();
upgradeProperty_fn = function(prop) {
  if (Object.prototype.hasOwnProperty.call(this, prop)) {
    const value = this[prop];
    delete this[prop];
    this[prop] = value;
  }
};
_updateTemplate = /* @__PURE__ */ new WeakSet();
updateTemplate_fn = function() {
  var _a2;
  const templateId = this.getAttribute("template");
  if (!templateId || templateId === __privateGet$7(this, _prevTemplateId))
    return;
  const rootNode = this.getRootNode();
  const template = (_a2 = rootNode == null ? void 0 : rootNode.getElementById) == null ? void 0 : _a2.call(
    rootNode,
    templateId
  );
  if (template) {
    __privateSet$6(this, _prevTemplateId, templateId);
    __privateSet$6(this, _template, template);
    this.createRenderer();
    return;
  }
  if (isValidUrl(templateId)) {
    __privateSet$6(this, _prevTemplateId, templateId);
    request(templateId).then((data) => {
      const template2 = Document$1.createElement("template");
      template2.innerHTML = data;
      __privateSet$6(this, _template, template2);
      this.createRenderer();
    }).catch(console.error);
  }
};
_renderBind = /* @__PURE__ */ new WeakMap();
MediaThemeElement.observedAttributes = ["template"];
MediaThemeElement.processor = processor;
function isValidUrl(url) {
  if (!/^(\/|\.\/|https?:\/\/)/.test(url))
    return false;
  const base = /^https?:\/\//.test(url) ? void 0 : location.origin;
  try {
    new URL(url, base);
  } catch (e) {
    return false;
  }
  return true;
}
async function request(resource) {
  const response = await fetch(resource);
  if (response.status !== 200) {
    throw new Error(
      `Failed to load resource: the server responded with a status of ${response.status}`
    );
  }
  return response.text();
}
if (!GlobalThis.customElements.get("media-theme")) {
  GlobalThis.customElements.define("media-theme", MediaThemeElement);
}
function computePosition({
  anchor,
  floating,
  placement
}) {
  const rects = getElementRects({ anchor, floating });
  const { x: x2, y: y2 } = computeCoordsFromPlacement(rects, placement);
  return { x: x2, y: y2 };
}
function getElementRects({
  anchor,
  floating
}) {
  return {
    anchor: getRectRelativeToOffsetParent(anchor, floating.offsetParent),
    floating: {
      x: 0,
      y: 0,
      width: floating.offsetWidth,
      height: floating.offsetHeight
    }
  };
}
function getRectRelativeToOffsetParent(element, offsetParent) {
  var _a2;
  const rect = element.getBoundingClientRect();
  const offsetRect = (_a2 = offsetParent == null ? void 0 : offsetParent.getBoundingClientRect()) != null ? _a2 : { x: 0, y: 0 };
  return {
    x: rect.x - offsetRect.x,
    y: rect.y - offsetRect.y,
    width: rect.width,
    height: rect.height
  };
}
function computeCoordsFromPlacement({ anchor, floating }, placement) {
  const alignmentAxis = getSideAxis(placement) === "x" ? "y" : "x";
  const alignLength = alignmentAxis === "y" ? "height" : "width";
  const side = getSide(placement);
  const commonX = anchor.x + anchor.width / 2 - floating.width / 2;
  const commonY = anchor.y + anchor.height / 2 - floating.height / 2;
  const commonAlign = anchor[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = { x: commonX, y: anchor.y - floating.height };
      break;
    case "bottom":
      coords = { x: commonX, y: anchor.y + anchor.height };
      break;
    case "right":
      coords = { x: anchor.x + anchor.width, y: commonY };
      break;
    case "left":
      coords = { x: anchor.x - floating.width, y: commonY };
      break;
    default:
      coords = { x: anchor.x, y: anchor.y };
  }
  switch (placement.split("-")[1]) {
    case "start":
      coords[alignmentAxis] -= commonAlign;
      break;
    case "end":
      coords[alignmentAxis] += commonAlign;
      break;
  }
  return coords;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
}
class InvokeEvent extends Event {
  /**
   * @param init - The event options.
   */
  constructor({ action = "auto", relatedTarget, ...options }) {
    super("invoke", options);
    this.action = action;
    this.relatedTarget = relatedTarget;
  }
}
class ToggleEvent extends Event {
  /**
   * @param init - The event options.
   */
  constructor({ newState, oldState, ...options }) {
    super("toggle", options);
    this.newState = newState;
    this.oldState = oldState;
  }
}
var __accessCheck$6 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet$6 = (obj, member, getter) => {
  __accessCheck$6(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$6 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$5 = (obj, member, value, setter) => {
  __accessCheck$6(obj, member, "write to private field");
  member.set(obj, value);
  return value;
};
var __privateMethod$6 = (obj, member, method) => {
  __accessCheck$6(obj, member, "access private method");
  return method;
};
var _mediaController, _previouslyFocused, _invokerElement, _previousItems, _mutationObserver, _isPopover, _cssRule, _handleSlotChange$1, handleSlotChange_fn$1, _toggleHeader, toggleHeader_fn, _handleMenuItems, _updateLayoutStyle, updateLayoutStyle_fn, _handleInvoke, handleInvoke_fn, _handleOpen, handleOpen_fn, _handleClosed, handleClosed_fn, _handleBoundsResize, _handleMenuResize, _positionMenu, positionMenu_fn, _resizeMenu, resizeMenu_fn, _handleClick, handleClick_fn, _backButtonElement, backButtonElement_get, _handleToggle, handleToggle_fn, _checkSubmenuHasExpanded, checkSubmenuHasExpanded_fn, _handleFocusOut, handleFocusOut_fn, _handleKeyDown$1, handleKeyDown_fn, _getItem, getItem_fn, _getTabItem, getTabItem_fn, _setTabItem, setTabItem_fn, _selectItem, selectItem_fn;
function createMenuItem({
  type,
  text,
  value,
  checked
}) {
  const item = Document$1.createElement(
    "media-chrome-menu-item"
  );
  item.type = type;
  item.part.add("menu-item");
  item.part.add(type);
  item.value = value;
  item.checked = checked;
  const label = Document$1.createElement("span");
  label.textContent = text;
  item.append(label);
  return item;
}
function createIndicator(el, name) {
  let customIndicator = el.querySelector(`:scope > [slot="${name}"]`);
  if ((customIndicator == null ? void 0 : customIndicator.nodeName) == "SLOT")
    customIndicator = customIndicator.assignedElements({ flatten: true })[0];
  if (customIndicator) {
    customIndicator = customIndicator.cloneNode(true);
    return customIndicator;
  }
  const fallbackIndicator = el.shadowRoot.querySelector(
    `[name="${name}"] > svg`
  );
  if (fallbackIndicator) {
    return fallbackIndicator.cloneNode(true);
  }
  return "";
}
function getTemplateHTML$6(_attrs) {
  return (
    /*html*/
    `
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));
        border-radius: var(--media-menu-border-radius);
        border: var(--media-menu-border, none);
        display: var(--media-menu-display, inline-flex) !important;
        ${/* ^^Prevent override by Tailwind CSS causing the menu to not hide properly. */
    ""}
        transition: var(--media-menu-transition-in,
          visibility 0s,
          opacity .2s ease-out,
          transform .15s ease-out,
          left .2s ease-in-out,
          min-width .2s ease-in-out,
          min-height .2s ease-in-out
        ) !important;
        ${/* ^^Prevent transition override by media-container */
    ""}
        visibility: var(--media-menu-visibility, visible);
        opacity: var(--media-menu-opacity, 1);
        max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
        transform: var(--media-menu-transform-in, translateY(0) scale(1));
        flex-direction: column;
        ${/* Prevent overflowing a flex container */
    ""}
        min-height: 0;
        position: relative;
        bottom: var(--_menu-bottom);
        box-sizing: border-box;
      } 

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([hidden]) {
        transition: var(--media-menu-transition-out,
          visibility .15s ease-in,
          opacity .15s ease-in,
          transform .15s ease-in
        ) !important;
        visibility: var(--media-menu-hidden-visibility, hidden);
        opacity: var(--media-menu-hidden-opacity, 0);
        max-height: var(--media-menu-hidden-max-height,
          var(--media-menu-max-height, var(--_menu-max-height, 300px)));
        transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
        pointer-events: none;
      }

      :host([slot="submenu"]) {
        background: none;
        width: 100%;
        min-height: 100%;
        position: absolute;
        bottom: 0;
        right: -100%;
      }

      #container {
        display: flex;
        flex-direction: column;
        min-height: 0;
        transition: transform .2s ease-out;
        transform: translate(0, 0);
      }

      #container.has-expanded {
        transition: transform .2s ease-in;
        transform: translate(-100%, 0);
      }

      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        outline: inherit;
        display: inline-flex;
        align-items: center;
      }

      slot[name="header"][hidden] {
        display: none;
      }

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .7em;
        border-bottom: 1px solid rgb(255 255 255 / .25);
        cursor: var(--media-cursor, default);
      }

      slot[name="header"] > button[part~="back"],
      slot[name="header"]::slotted(button[part~="back"]) {
        cursor: var(--media-cursor, pointer);
      }

      svg[part~="back"] {
        height: var(--media-menu-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
        margin-right: .5ch;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap);
        flex-direction: var(--media-menu-flex-direction, column);
        overflow: var(--media-menu-overflow, hidden auto);
        display: flex;
        min-height: 0;
      }

      :host([role="menu"]) slot:not([name]) {
        padding-block: .4em;
      }

      slot:not([name])::slotted([role="menu"]) {
        background: none;
      }

      media-chrome-menu-item > span {
        margin-right: .5ch;
        max-width: var(--media-menu-item-max-width);
        text-overflow: ellipsis;
        overflow: hidden;
      }
    </style>
    <style id="layout-row" media="width:0">

      slot[name="header"] > *,
      slot[name="header"]::slotted(*) {
        padding: .4em .5em;
      }

      slot:not([name]) {
        gap: var(--media-menu-gap, .25em);
        flex-direction: var(--media-menu-flex-direction, row);
        padding-inline: .5em;
      }

      media-chrome-menu-item {
        padding: .3em .5em;
      }

      media-chrome-menu-item[aria-checked="true"] {
        background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
      }

      ${/* In row layout hide the checked indicator completely. */
    ""}
      media-chrome-menu-item::part(checked-indicator) {
        display: var(--media-menu-item-checked-indicator-display, none);
      }
    </style>
    <div id="container" part="container">
      <slot name="header" hidden>
        <button part="back button" aria-label="Back to previous menu">
          <slot name="back-icon">
            <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
              <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
            </svg>
          </slot>
          <slot name="title"></slot>
        </button>
      </slot>
      <slot></slot>
    </div>
    <slot name="checked-indicator" hidden></slot>
  `
  );
}
const Attributes$2 = {
  STYLE: "style",
  HIDDEN: "hidden",
  DISABLED: "disabled",
  ANCHOR: "anchor"
};
class MediaChromeMenu extends GlobalThis.HTMLElement {
  constructor() {
    super();
    __privateAdd$6(this, _handleSlotChange$1);
    __privateAdd$6(this, _toggleHeader);
    __privateAdd$6(this, _updateLayoutStyle);
    __privateAdd$6(this, _handleInvoke);
    __privateAdd$6(this, _handleOpen);
    __privateAdd$6(this, _handleClosed);
    __privateAdd$6(this, _positionMenu);
    __privateAdd$6(this, _resizeMenu);
    __privateAdd$6(this, _handleClick);
    __privateAdd$6(this, _backButtonElement);
    __privateAdd$6(this, _handleToggle);
    __privateAdd$6(this, _checkSubmenuHasExpanded);
    __privateAdd$6(this, _handleFocusOut);
    __privateAdd$6(this, _handleKeyDown$1);
    __privateAdd$6(this, _getItem);
    __privateAdd$6(this, _getTabItem);
    __privateAdd$6(this, _setTabItem);
    __privateAdd$6(this, _selectItem);
    __privateAdd$6(this, _mediaController, null);
    __privateAdd$6(this, _previouslyFocused, null);
    __privateAdd$6(this, _invokerElement, null);
    __privateAdd$6(this, _previousItems, /* @__PURE__ */ new Set());
    __privateAdd$6(this, _mutationObserver, void 0);
    __privateAdd$6(this, _isPopover, false);
    __privateAdd$6(this, _cssRule, null);
    __privateAdd$6(this, _handleMenuItems, () => {
      const previousItems = __privateGet$6(this, _previousItems);
      const currentItems = new Set(this.items);
      for (const item of previousItems) {
        if (!currentItems.has(item)) {
          this.dispatchEvent(new CustomEvent("removemenuitem", { detail: item }));
        }
      }
      for (const item of currentItems) {
        if (!previousItems.has(item)) {
          this.dispatchEvent(new CustomEvent("addmenuitem", { detail: item }));
        }
      }
      __privateSet$5(this, _previousItems, currentItems);
    });
    __privateAdd$6(this, _handleBoundsResize, () => {
      __privateMethod$6(this, _positionMenu, positionMenu_fn).call(this);
      __privateMethod$6(this, _resizeMenu, resizeMenu_fn).call(this, false);
    });
    __privateAdd$6(this, _handleMenuResize, () => {
      __privateMethod$6(this, _positionMenu, positionMenu_fn).call(this);
    });
    if (!this.shadowRoot) {
      this.attachShadow(this.constructor.shadowRootOptions);
      const attrs = namedNodeMapToObject(this.attributes);
      this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(attrs);
    }
    this.container = this.shadowRoot.querySelector("#container");
    this.defaultSlot = this.shadowRoot.querySelector(
      "slot:not([name])"
    );
    __privateSet$5(this, _mutationObserver, new MutationObserver(__privateGet$6(this, _handleMenuItems)));
  }
  static get observedAttributes() {
    return [
      Attributes$2.DISABLED,
      Attributes$2.HIDDEN,
      Attributes$2.STYLE,
      Attributes$2.ANCHOR,
      MediaStateReceiverAttributes.MEDIA_CONTROLLER
    ];
  }
  static formatMenuItemText(text, _data) {
    return text;
  }
  enable() {
    this.addEventListener("click", this);
    this.addEventListener("focusout", this);
    this.addEventListener("keydown", this);
    this.addEventListener("invoke", this);
    this.addEventListener("toggle", this);
  }
  disable() {
    this.removeEventListener("click", this);
    this.removeEventListener("focusout", this);
    this.removeEventListener("keyup", this);
    this.removeEventListener("invoke", this);
    this.removeEventListener("toggle", this);
  }
  handleEvent(event) {
    switch (event.type) {
      case "slotchange":
        __privateMethod$6(this, _handleSlotChange$1, handleSlotChange_fn$1).call(this, event);
        break;
      case "invoke":
        __privateMethod$6(this, _handleInvoke, handleInvoke_fn).call(this, event);
        break;
      case "click":
        __privateMethod$6(this, _handleClick, handleClick_fn).call(this, event);
        break;
      case "toggle":
        __privateMethod$6(this, _handleToggle, handleToggle_fn).call(this, event);
        break;
      case "focusout":
        __privateMethod$6(this, _handleFocusOut, handleFocusOut_fn).call(this, event);
        break;
      case "keydown":
        __privateMethod$6(this, _handleKeyDown$1, handleKeyDown_fn).call(this, event);
        break;
    }
  }
  connectedCallback() {
    var _a2, _b;
    __privateGet$6(this, _mutationObserver).observe(this.defaultSlot, { childList: true });
    __privateSet$5(this, _cssRule, insertCSSRule(this.shadowRoot, ":host"));
    __privateMethod$6(this, _updateLayoutStyle, updateLayoutStyle_fn).call(this);
    if (!this.hasAttribute("disabled")) {
      this.enable();
    }
    if (!this.role) {
      this.role = "menu";
    }
    __privateSet$5(this, _mediaController, getAttributeMediaController(this));
    (_b = (_a2 = __privateGet$6(this, _mediaController)) == null ? void 0 : _a2.associateElement) == null ? void 0 : _b.call(_a2, this);
    if (!this.hidden) {
      observeResize(getBoundsElement(this), __privateGet$6(this, _handleBoundsResize));
      observeResize(this, __privateGet$6(this, _handleMenuResize));
    }
    __privateMethod$6(this, _toggleHeader, toggleHeader_fn).call(this);
    this.shadowRoot.addEventListener("slotchange", this);
  }
  disconnectedCallback() {
    var _a2, _b;
    __privateGet$6(this, _mutationObserver).disconnect();
    unobserveResize(getBoundsElement(this), __privateGet$6(this, _handleBoundsResize));
    unobserveResize(this, __privateGet$6(this, _handleMenuResize));
    this.disable();
    (_b = (_a2 = __privateGet$6(this, _mediaController)) == null ? void 0 : _a2.unassociateElement) == null ? void 0 : _b.call(_a2, this);
    __privateSet$5(this, _mediaController, null);
    __privateSet$5(this, _previouslyFocused, null);
    __privateSet$5(this, _invokerElement, null);
    this.shadowRoot.removeEventListener("slotchange", this);
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    var _a2, _b, _c, _d;
    if (attrName === Attributes$2.HIDDEN && newValue !== oldValue) {
      if (!__privateGet$6(this, _isPopover))
        __privateSet$5(this, _isPopover, true);
      if (this.hidden) {
        __privateMethod$6(this, _handleClosed, handleClosed_fn).call(this);
      } else {
        __privateMethod$6(this, _handleOpen, handleOpen_fn).call(this);
      }
      this.dispatchEvent(
        new ToggleEvent({
          oldState: this.hidden ? "open" : "closed",
          newState: this.hidden ? "closed" : "open",
          bubbles: true
        })
      );
    } else if (attrName === MediaStateReceiverAttributes.MEDIA_CONTROLLER) {
      if (oldValue) {
        (_b = (_a2 = __privateGet$6(this, _mediaController)) == null ? void 0 : _a2.unassociateElement) == null ? void 0 : _b.call(_a2, this);
        __privateSet$5(this, _mediaController, null);
      }
      if (newValue && this.isConnected) {
        __privateSet$5(this, _mediaController, getAttributeMediaController(this));
        (_d = (_c = __privateGet$6(this, _mediaController)) == null ? void 0 : _c.associateElement) == null ? void 0 : _d.call(_c, this);
      }
    } else if (attrName === Attributes$2.DISABLED && newValue !== oldValue) {
      if (newValue == null) {
        this.enable();
      } else {
        this.disable();
      }
    } else if (attrName === Attributes$2.STYLE && newValue !== oldValue) {
      __privateMethod$6(this, _updateLayoutStyle, updateLayoutStyle_fn).call(this);
    }
  }
  formatMenuItemText(text, data) {
    return this.constructor.formatMenuItemText(
      text,
      data
    );
  }
  get anchor() {
    return this.getAttribute("anchor");
  }
  set anchor(value) {
    this.setAttribute("anchor", `${value}`);
  }
  /**
   * Returns the anchor element when it is a floating menu.
   */
  get anchorElement() {
    var _a2;
    if (this.anchor) {
      return (_a2 = getDocumentOrShadowRoot(this)) == null ? void 0 : _a2.querySelector(
        `#${this.anchor}`
      );
    }
    return null;
  }
  /**
   * Returns the menu items.
   */
  get items() {
    return this.defaultSlot.assignedElements({ flatten: true }).filter(isMenuItem);
  }
  get radioGroupItems() {
    return this.items.filter((item) => item.role === "menuitemradio");
  }
  get checkedItems() {
    return this.items.filter((item) => item.checked);
  }
  get value() {
    var _a2, _b;
    return (_b = (_a2 = this.checkedItems[0]) == null ? void 0 : _a2.value) != null ? _b : "";
  }
  set value(newValue) {
    const item = this.items.find((item2) => item2.value === newValue);
    if (!item)
      return;
    __privateMethod$6(this, _selectItem, selectItem_fn).call(this, item);
  }
  focus() {
    __privateSet$5(this, _previouslyFocused, getActiveElement());
    if (this.items.length) {
      __privateMethod$6(this, _setTabItem, setTabItem_fn).call(this, this.items[0]);
      this.items[0].focus();
      return;
    }
    const focusable = this.querySelector(
      '[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]'
    );
    focusable == null ? void 0 : focusable.focus();
  }
  handleSelect(event) {
    var _a2;
    const item = __privateMethod$6(this, _getItem, getItem_fn).call(this, event);
    if (!item)
      return;
    __privateMethod$6(this, _selectItem, selectItem_fn).call(this, item, item.type === "checkbox");
    if (__privateGet$6(this, _invokerElement) && !this.hidden) {
      (_a2 = __privateGet$6(this, _previouslyFocused)) == null ? void 0 : _a2.focus();
      this.hidden = true;
    }
  }
  get keysUsed() {
    return [
      "Enter",
      "Escape",
      "Tab",
      " ",
      "ArrowDown",
      "ArrowUp",
      "Home",
      "End"
    ];
  }
  handleMove(event) {
    var _a2, _b;
    const { key } = event;
    const items = this.items;
    const currentItem = (_b = (_a2 = __privateMethod$6(this, _getItem, getItem_fn).call(this, event)) != null ? _a2 : __privateMethod$6(this, _getTabItem, getTabItem_fn).call(this)) != null ? _b : items[0];
    const currentIndex = items.indexOf(currentItem);
    let index = Math.max(0, currentIndex);
    if (key === "ArrowDown") {
      index++;
    } else if (key === "ArrowUp") {
      index--;
    } else if (event.key === "Home") {
      index = 0;
    } else if (event.key === "End") {
      index = items.length - 1;
    }
    if (index < 0) {
      index = items.length - 1;
    }
    if (index > items.length - 1) {
      index = 0;
    }
    __privateMethod$6(this, _setTabItem, setTabItem_fn).call(this, items[index]);
    items[index].focus();
  }
}
_mediaController = /* @__PURE__ */ new WeakMap();
_previouslyFocused = /* @__PURE__ */ new WeakMap();
_invokerElement = /* @__PURE__ */ new WeakMap();
_previousItems = /* @__PURE__ */ new WeakMap();
_mutationObserver = /* @__PURE__ */ new WeakMap();
_isPopover = /* @__PURE__ */ new WeakMap();
_cssRule = /* @__PURE__ */ new WeakMap();
_handleSlotChange$1 = /* @__PURE__ */ new WeakSet();
handleSlotChange_fn$1 = function(event) {
  const slot = event.target;
  for (const node of slot.assignedNodes({ flatten: true })) {
    if (node.nodeType === 3 && node.textContent.trim() === "") {
      node.remove();
    }
  }
  if (["header", "title"].includes(slot.name)) {
    __privateMethod$6(this, _toggleHeader, toggleHeader_fn).call(this);
  }
  if (!slot.name) {
    __privateGet$6(this, _handleMenuItems).call(this);
  }
};
_toggleHeader = /* @__PURE__ */ new WeakSet();
toggleHeader_fn = function() {
  const header = this.shadowRoot.querySelector(
    'slot[name="header"]'
  );
  const title = this.shadowRoot.querySelector(
    'slot[name="title"]'
  );
  header.hidden = title.assignedNodes().length === 0 && header.assignedNodes().length === 0;
};
_handleMenuItems = /* @__PURE__ */ new WeakMap();
_updateLayoutStyle = /* @__PURE__ */ new WeakSet();
updateLayoutStyle_fn = function() {
  var _a2;
  const layoutRowStyle = this.shadowRoot.querySelector("#layout-row");
  const menuLayout = (_a2 = getComputedStyle(this).getPropertyValue("--media-menu-layout")) == null ? void 0 : _a2.trim();
  layoutRowStyle.setAttribute("media", menuLayout === "row" ? "" : "width:0");
};
_handleInvoke = /* @__PURE__ */ new WeakSet();
handleInvoke_fn = function(event) {
  __privateSet$5(this, _invokerElement, event.relatedTarget);
  if (!containsComposedNode(this, event.relatedTarget)) {
    this.hidden = !this.hidden;
  }
};
_handleOpen = /* @__PURE__ */ new WeakSet();
handleOpen_fn = function() {
  var _a2;
  (_a2 = __privateGet$6(this, _invokerElement)) == null ? void 0 : _a2.setAttribute("aria-expanded", "true");
  this.addEventListener("transitionend", () => this.focus(), { once: true });
  observeResize(getBoundsElement(this), __privateGet$6(this, _handleBoundsResize));
  observeResize(this, __privateGet$6(this, _handleMenuResize));
};
_handleClosed = /* @__PURE__ */ new WeakSet();
handleClosed_fn = function() {
  var _a2;
  (_a2 = __privateGet$6(this, _invokerElement)) == null ? void 0 : _a2.setAttribute("aria-expanded", "false");
  unobserveResize(getBoundsElement(this), __privateGet$6(this, _handleBoundsResize));
  unobserveResize(this, __privateGet$6(this, _handleMenuResize));
};
_handleBoundsResize = /* @__PURE__ */ new WeakMap();
_handleMenuResize = /* @__PURE__ */ new WeakMap();
_positionMenu = /* @__PURE__ */ new WeakSet();
positionMenu_fn = function(menuWidth) {
  if (this.hasAttribute("mediacontroller") && !this.anchor)
    return;
  if (this.hidden || !this.anchorElement)
    return;
  const { x: x2, y: y2 } = computePosition({
    anchor: this.anchorElement,
    floating: this,
    placement: "top-start"
  });
  menuWidth != null ? menuWidth : menuWidth = this.offsetWidth;
  const bounds = getBoundsElement(this);
  const boundsRect = bounds.getBoundingClientRect();
  const right = boundsRect.width - x2 - menuWidth;
  const bottom = boundsRect.height - y2 - this.offsetHeight;
  const { style } = __privateGet$6(this, _cssRule);
  style.setProperty("position", "absolute");
  style.setProperty("right", `${Math.max(0, right)}px`);
  style.setProperty("--_menu-bottom", `${bottom}px`);
  const computedStyle = getComputedStyle(this);
  const isBottomCalc = style.getPropertyValue("--_menu-bottom") === computedStyle.bottom;
  const realBottom = isBottomCalc ? bottom : parseFloat(computedStyle.bottom);
  const maxHeight = boundsRect.height - realBottom - parseFloat(computedStyle.marginBottom);
  this.style.setProperty("--_menu-max-height", `${maxHeight}px`);
};
_resizeMenu = /* @__PURE__ */ new WeakSet();
resizeMenu_fn = function(animate) {
  const expandedMenuItem = this.querySelector(
    '[role="menuitem"][aria-haspopup][aria-expanded="true"]'
  );
  const expandedSubmenu = expandedMenuItem == null ? void 0 : expandedMenuItem.querySelector(
    '[role="menu"]'
  );
  const { style } = __privateGet$6(this, _cssRule);
  if (!animate) {
    style.setProperty("--media-menu-transition-in", "none");
  }
  if (expandedSubmenu) {
    const height = expandedSubmenu.offsetHeight;
    const width = Math.max(
      expandedSubmenu.offsetWidth,
      expandedMenuItem.offsetWidth
    );
    this.style.setProperty("min-width", `${width}px`);
    this.style.setProperty("min-height", `${height}px`);
    __privateMethod$6(this, _positionMenu, positionMenu_fn).call(this, width);
  } else {
    this.style.removeProperty("min-width");
    this.style.removeProperty("min-height");
    __privateMethod$6(this, _positionMenu, positionMenu_fn).call(this);
  }
  style.removeProperty("--media-menu-transition-in");
};
_handleClick = /* @__PURE__ */ new WeakSet();
handleClick_fn = function(event) {
  var _a2;
  event.stopPropagation();
  if (event.composedPath().includes(__privateGet$6(this, _backButtonElement, backButtonElement_get))) {
    (_a2 = __privateGet$6(this, _previouslyFocused)) == null ? void 0 : _a2.focus();
    this.hidden = true;
    return;
  }
  const item = __privateMethod$6(this, _getItem, getItem_fn).call(this, event);
  if (!item || item.hasAttribute("disabled"))
    return;
  __privateMethod$6(this, _setTabItem, setTabItem_fn).call(this, item);
  this.handleSelect(event);
};
_backButtonElement = /* @__PURE__ */ new WeakSet();
backButtonElement_get = function() {
  var _a2;
  const headerSlot = this.shadowRoot.querySelector(
    'slot[name="header"]'
  );
  return (_a2 = headerSlot.assignedElements({ flatten: true })) == null ? void 0 : _a2.find((el) => el.matches('button[part~="back"]'));
};
_handleToggle = /* @__PURE__ */ new WeakSet();
handleToggle_fn = function(event) {
  if (event.target === this)
    return;
  __privateMethod$6(this, _checkSubmenuHasExpanded, checkSubmenuHasExpanded_fn).call(this);
  const menuItemsWithSubmenu = Array.from(
    this.querySelectorAll('[role="menuitem"][aria-haspopup]')
  );
  for (const item of menuItemsWithSubmenu) {
    if (item.invokeTargetElement == event.target)
      continue;
    if (event.newState == "open" && item.getAttribute("aria-expanded") == "true" && !item.invokeTargetElement.hidden) {
      item.invokeTargetElement.dispatchEvent(
        new InvokeEvent({ relatedTarget: item })
      );
    }
  }
  for (const item of menuItemsWithSubmenu) {
    item.setAttribute("aria-expanded", `${!item.submenuElement.hidden}`);
  }
  __privateMethod$6(this, _resizeMenu, resizeMenu_fn).call(this, true);
};
_checkSubmenuHasExpanded = /* @__PURE__ */ new WeakSet();
checkSubmenuHasExpanded_fn = function() {
  const selector = '[role="menuitem"] > [role="menu"]:not([hidden])';
  const expandedMenuItem = this.querySelector(selector);
  this.container.classList.toggle("has-expanded", !!expandedMenuItem);
};
_handleFocusOut = /* @__PURE__ */ new WeakSet();
handleFocusOut_fn = function(event) {
  var _a2;
  if (!containsComposedNode(this, event.relatedTarget)) {
    if (__privateGet$6(this, _isPopover)) {
      (_a2 = __privateGet$6(this, _previouslyFocused)) == null ? void 0 : _a2.focus();
    }
    if (__privateGet$6(this, _invokerElement) && __privateGet$6(this, _invokerElement) !== event.relatedTarget && !this.hidden) {
      this.hidden = true;
    }
  }
};
_handleKeyDown$1 = /* @__PURE__ */ new WeakSet();
handleKeyDown_fn = function(event) {
  var _a2, _b, _c, _d, _e2;
  const { key, ctrlKey, altKey, metaKey } = event;
  if (ctrlKey || altKey || metaKey) {
    return;
  }
  if (!this.keysUsed.includes(key)) {
    return;
  }
  event.preventDefault();
  event.stopPropagation();
  if (key === "Tab") {
    if (__privateGet$6(this, _isPopover)) {
      this.hidden = true;
      return;
    }
    if (event.shiftKey) {
      (_b = (_a2 = this.previousElementSibling) == null ? void 0 : _a2.focus) == null ? void 0 : _b.call(_a2);
    } else {
      (_d = (_c = this.nextElementSibling) == null ? void 0 : _c.focus) == null ? void 0 : _d.call(_c);
    }
    this.blur();
  } else if (key === "Escape") {
    (_e2 = __privateGet$6(this, _previouslyFocused)) == null ? void 0 : _e2.focus();
    if (__privateGet$6(this, _isPopover)) {
      this.hidden = true;
    }
  } else if (key === "Enter" || key === " ") {
    this.handleSelect(event);
  } else {
    this.handleMove(event);
  }
};
_getItem = /* @__PURE__ */ new WeakSet();
getItem_fn = function(event) {
  return event.composedPath().find((el) => {
    return ["menuitemradio", "menuitemcheckbox"].includes(
      el.role
    );
  });
};
_getTabItem = /* @__PURE__ */ new WeakSet();
getTabItem_fn = function() {
  return this.items.find((item) => item.tabIndex === 0);
};
_setTabItem = /* @__PURE__ */ new WeakSet();
setTabItem_fn = function(tabItem) {
  for (const item of this.items) {
    item.tabIndex = item === tabItem ? 0 : -1;
  }
};
_selectItem = /* @__PURE__ */ new WeakSet();
selectItem_fn = function(item, toggle) {
  const oldCheckedItems = [...this.checkedItems];
  if (item.type === "radio") {
    this.radioGroupItems.forEach((el) => el.checked = false);
  }
  if (toggle) {
    item.checked = !item.checked;
  } else {
    item.checked = true;
  }
  if (this.checkedItems.some((opt, i2) => opt != oldCheckedItems[i2])) {
    this.dispatchEvent(
      new Event("change", { bubbles: true, composed: true })
    );
  }
};
MediaChromeMenu.shadowRootOptions = { mode: "open" };
MediaChromeMenu.getTemplateHTML = getTemplateHTML$6;
function isMenuItem(element) {
  return ["menuitem", "menuitemradio", "menuitemcheckbox"].includes(
    element == null ? void 0 : element.role
  );
}
function getBoundsElement(host) {
  var _a2;
  return (_a2 = host.getAttribute("bounds") ? closestComposedNode(host, `#${host.getAttribute("bounds")}`) : getMediaController(host) || host.parentElement) != null ? _a2 : host;
}
if (!GlobalThis.customElements.get("media-chrome-menu")) {
  GlobalThis.customElements.define("media-chrome-menu", MediaChromeMenu);
}
var __accessCheck$5 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet$5 = (obj, member, getter) => {
  __accessCheck$5(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$5 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$4 = (obj, member, value, setter) => {
  __accessCheck$5(obj, member, "write to private field");
  member.set(obj, value);
  return value;
};
var __privateMethod$5 = (obj, member, method) => {
  __accessCheck$5(obj, member, "access private method");
  return method;
};
var _dirty, _ownerElement, _handleSlotChange, handleSlotChange_fn, _submenuConnected, submenuConnected_fn, _submenuDisconnected, submenuDisconnected_fn, _handleMenuItem, _handleKeyUp, _handleKeyDown, _reset, reset_fn;
function getTemplateHTML$5(_attrs) {
  return (
    /*html*/
    `
    <style>
      :host {
        transition: var(--media-menu-item-transition,
          background .15s linear,
          opacity .2s ease-in-out
        );
        outline: var(--media-menu-item-outline, 0);
        outline-offset: var(--media-menu-item-outline-offset, -1px);
        cursor: var(--media-cursor, pointer);
        display: flex;
        align-items: center;
        align-self: stretch;
        justify-self: stretch;
        white-space: nowrap;
        white-space-collapse: collapse;
        text-wrap: nowrap;
        padding: .4em .8em .4em 1em;
      }

      :host(:focus-visible) {
        box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: var(--media-menu-item-hover-outline, 0);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host(:hover) {
        cursor: var(--media-cursor, pointer);
        background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
        outline: var(--media-menu-item-hover-outline);
        outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
      }

      :host([aria-checked="true"]) {
        background: var(--media-menu-item-checked-background);
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        pointer-events: none;
        color: rgba(255, 255, 255, .3);
      }

      slot:not([name]) {
        width: 100%;
      }

      slot:not([name="submenu"]) {
        display: inline-flex;
        align-items: center;
        transition: inherit;
        opacity: var(--media-menu-item-opacity, 1);
      }

      slot[name="description"] {
        justify-content: end;
      }

      slot[name="description"] > span {
        display: inline-block;
        margin-inline: 1em .2em;
        max-width: var(--media-menu-item-description-max-width, 100px);
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: .8em;
        font-weight: 400;
        text-align: right;
        position: relative;
        top: .04em;
      }

      slot[name="checked-indicator"] {
        display: none;
      }

      :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
        display: var(--media-menu-item-checked-indicator-display, inline-block);
      }

      ${/* For all slotted icons in prefix and suffix. */
    ""}
      svg, img, ::slotted(svg), ::slotted(img) {
        height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        display: block;
      }

      ${/* Only for indicator icons like checked-indicator or captions-indicator. */
    ""}
      [part~="indicator"],
      ::slotted([part~="indicator"]) {
        fill: var(--media-menu-item-indicator-fill,
          var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
        height: var(--media-menu-item-indicator-height, 1.25em);
        margin-right: .5ch;
      }

      [part~="checked-indicator"] {
        visibility: hidden;
      }

      :host([aria-checked="true"]) [part~="checked-indicator"] {
        visibility: visible;
      }
    </style>
    <slot name="checked-indicator">
      <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
        <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
      </svg>
    </slot>
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="description"></slot>
    <slot name="suffix">
      ${this.getSuffixSlotInnerHTML(_attrs)}
    </slot>
    <slot name="submenu"></slot>
  `
  );
}
function getSuffixSlotInnerHTML$1(_attrs) {
  return "";
}
const Attributes$1 = {
  TYPE: "type",
  VALUE: "value",
  CHECKED: "checked",
  DISABLED: "disabled"
};
class MediaChromeMenuItem extends GlobalThis.HTMLElement {
  constructor() {
    super();
    __privateAdd$5(this, _handleSlotChange);
    __privateAdd$5(this, _submenuConnected);
    __privateAdd$5(this, _submenuDisconnected);
    __privateAdd$5(this, _reset);
    __privateAdd$5(this, _dirty, false);
    __privateAdd$5(this, _ownerElement, void 0);
    __privateAdd$5(this, _handleMenuItem, () => {
      var _a2, _b;
      if (this.submenuElement.items) {
        this.setAttribute("submenusize", `${this.submenuElement.items.length}`);
      }
      const descriptionSlot = this.shadowRoot.querySelector(
        'slot[name="description"]'
      );
      const checkedItem = (_a2 = this.submenuElement.checkedItems) == null ? void 0 : _a2[0];
      const description = (_b = checkedItem == null ? void 0 : checkedItem.dataset.description) != null ? _b : checkedItem == null ? void 0 : checkedItem.text;
      const span = Document$1.createElement("span");
      span.textContent = description != null ? description : "";
      descriptionSlot.replaceChildren(span);
    });
    __privateAdd$5(this, _handleKeyUp, (event) => {
      const { key } = event;
      if (!this.keysUsed.includes(key)) {
        this.removeEventListener("keyup", __privateGet$5(this, _handleKeyUp));
        return;
      }
      this.handleClick(event);
    });
    __privateAdd$5(this, _handleKeyDown, (event) => {
      const { metaKey, altKey, key } = event;
      if (metaKey || altKey || !this.keysUsed.includes(key)) {
        this.removeEventListener("keyup", __privateGet$5(this, _handleKeyUp));
        return;
      }
      this.addEventListener("keyup", __privateGet$5(this, _handleKeyUp), { once: true });
    });
    if (!this.shadowRoot) {
      this.attachShadow(this.constructor.shadowRootOptions);
      const attrs = namedNodeMapToObject(this.attributes);
      this.shadowRoot.innerHTML = this.constructor.getTemplateHTML(attrs);
    }
  }
  static get observedAttributes() {
    return [
      Attributes$1.TYPE,
      Attributes$1.DISABLED,
      Attributes$1.CHECKED,
      Attributes$1.VALUE
    ];
  }
  enable() {
    if (!this.hasAttribute("tabindex")) {
      this.setAttribute("tabindex", "-1");
    }
    if (isCheckable(this) && !this.hasAttribute("aria-checked")) {
      this.setAttribute("aria-checked", "false");
    }
    this.addEventListener("click", this);
    this.addEventListener("keydown", this);
  }
  disable() {
    this.removeAttribute("tabindex");
    this.removeEventListener("click", this);
    this.removeEventListener("keydown", this);
    this.removeEventListener("keyup", this);
  }
  handleEvent(event) {
    switch (event.type) {
      case "slotchange":
        __privateMethod$5(this, _handleSlotChange, handleSlotChange_fn).call(this, event);
        break;
      case "click":
        this.handleClick(event);
        break;
      case "keydown":
        __privateGet$5(this, _handleKeyDown).call(this, event);
        break;
      case "keyup":
        __privateGet$5(this, _handleKeyUp).call(this, event);
        break;
    }
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (attrName === Attributes$1.CHECKED && isCheckable(this) && !__privateGet$5(this, _dirty)) {
      this.setAttribute("aria-checked", newValue != null ? "true" : "false");
    } else if (attrName === Attributes$1.TYPE && newValue !== oldValue) {
      this.role = "menuitem" + newValue;
    } else if (attrName === Attributes$1.DISABLED && newValue !== oldValue) {
      if (newValue == null) {
        this.enable();
      } else {
        this.disable();
      }
    }
  }
  connectedCallback() {
    if (!this.hasAttribute(Attributes$1.DISABLED)) {
      this.enable();
    }
    this.role = "menuitem" + this.type;
    __privateSet$4(this, _ownerElement, closestMenuItemsContainer(this, this.parentNode));
    __privateMethod$5(this, _reset, reset_fn).call(this);
    if (this.submenuElement) {
      __privateMethod$5(this, _submenuConnected, submenuConnected_fn).call(this);
    }
    this.shadowRoot.addEventListener("slotchange", this);
  }
  disconnectedCallback() {
    this.disable();
    __privateMethod$5(this, _reset, reset_fn).call(this);
    __privateSet$4(this, _ownerElement, null);
    this.shadowRoot.removeEventListener("slotchange", this);
  }
  get invokeTarget() {
    return this.getAttribute("invoketarget");
  }
  set invokeTarget(value) {
    this.setAttribute("invoketarget", `${value}`);
  }
  /**
   * Returns the element with the id specified by the `invoketarget` attribute
   * or the slotted submenu element.
   */
  get invokeTargetElement() {
    var _a2;
    if (this.invokeTarget) {
      return (_a2 = getDocumentOrShadowRoot(this)) == null ? void 0 : _a2.querySelector(
        `#${this.invokeTarget}`
      );
    }
    return this.submenuElement;
  }
  /**
   * Returns the slotted submenu element.
   */
  get submenuElement() {
    const submenuSlot = this.shadowRoot.querySelector(
      'slot[name="submenu"]'
    );
    return submenuSlot.assignedElements({
      flatten: true
    })[0];
  }
  get type() {
    var _a2;
    return (_a2 = this.getAttribute(Attributes$1.TYPE)) != null ? _a2 : "";
  }
  set type(val) {
    this.setAttribute(Attributes$1.TYPE, `${val}`);
  }
  get value() {
    var _a2;
    return (_a2 = this.getAttribute(Attributes$1.VALUE)) != null ? _a2 : this.text;
  }
  set value(val) {
    this.setAttribute(Attributes$1.VALUE, val);
  }
  get text() {
    var _a2;
    return ((_a2 = this.textContent) != null ? _a2 : "").trim();
  }
  get checked() {
    if (!isCheckable(this))
      return void 0;
    return this.getAttribute("aria-checked") === "true";
  }
  set checked(value) {
    if (!isCheckable(this))
      return;
    __privateSet$4(this, _dirty, true);
    this.setAttribute("aria-checked", value ? "true" : "false");
    if (value) {
      this.part.add("checked");
    } else {
      this.part.remove("checked");
    }
  }
  handleClick(event) {
    if (isCheckable(this))
      return;
    if (this.invokeTargetElement && containsComposedNode(this, event.target)) {
      this.invokeTargetElement.dispatchEvent(
        new InvokeEvent({ relatedTarget: this })
      );
    }
  }
  get keysUsed() {
    return ["Enter", " "];
  }
}
_dirty = /* @__PURE__ */ new WeakMap();
_ownerElement = /* @__PURE__ */ new WeakMap();
_handleSlotChange = /* @__PURE__ */ new WeakSet();
handleSlotChange_fn = function(event) {
  const slot = event.target;
  const isDefaultSlot = !(slot == null ? void 0 : slot.name);
  if (isDefaultSlot) {
    for (const node of slot.assignedNodes({ flatten: true })) {
      if (node instanceof Text && node.textContent.trim() === "") {
        node.remove();
      }
    }
  }
  if (slot.name === "submenu") {
    if (this.submenuElement) {
      __privateMethod$5(this, _submenuConnected, submenuConnected_fn).call(this);
    } else {
      __privateMethod$5(this, _submenuDisconnected, submenuDisconnected_fn).call(this);
    }
  }
};
_submenuConnected = /* @__PURE__ */ new WeakSet();
submenuConnected_fn = async function() {
  this.setAttribute("aria-haspopup", "menu");
  this.setAttribute("aria-expanded", `${!this.submenuElement.hidden}`);
  this.submenuElement.addEventListener("change", __privateGet$5(this, _handleMenuItem));
  this.submenuElement.addEventListener("addmenuitem", __privateGet$5(this, _handleMenuItem));
  this.submenuElement.addEventListener(
    "removemenuitem",
    __privateGet$5(this, _handleMenuItem)
  );
  __privateGet$5(this, _handleMenuItem).call(this);
};
_submenuDisconnected = /* @__PURE__ */ new WeakSet();
submenuDisconnected_fn = function() {
  this.removeAttribute("aria-haspopup");
  this.removeAttribute("aria-expanded");
  this.submenuElement.removeEventListener("change", __privateGet$5(this, _handleMenuItem));
  this.submenuElement.removeEventListener(
    "addmenuitem",
    __privateGet$5(this, _handleMenuItem)
  );
  this.submenuElement.removeEventListener(
    "removemenuitem",
    __privateGet$5(this, _handleMenuItem)
  );
  __privateGet$5(this, _handleMenuItem).call(this);
};
_handleMenuItem = /* @__PURE__ */ new WeakMap();
_handleKeyUp = /* @__PURE__ */ new WeakMap();
_handleKeyDown = /* @__PURE__ */ new WeakMap();
_reset = /* @__PURE__ */ new WeakSet();
reset_fn = function() {
  var _a2;
  const items = (_a2 = __privateGet$5(this, _ownerElement)) == null ? void 0 : _a2.radioGroupItems;
  if (!items)
    return;
  let checkedItem = items.filter((item) => item.getAttribute("aria-checked") === "true").pop();
  if (!checkedItem)
    checkedItem = items[0];
  for (const item of items) {
    item.setAttribute("aria-checked", "false");
  }
  checkedItem == null ? void 0 : checkedItem.setAttribute("aria-checked", "true");
};
MediaChromeMenuItem.shadowRootOptions = { mode: "open" };
MediaChromeMenuItem.getTemplateHTML = getTemplateHTML$5;
MediaChromeMenuItem.getSuffixSlotInnerHTML = getSuffixSlotInnerHTML$1;
function isCheckable(item) {
  return item.type === "radio" || item.type === "checkbox";
}
function closestMenuItemsContainer(childNode, parentNode) {
  if (!childNode)
    return null;
  const { host } = childNode.getRootNode();
  if (!parentNode && host)
    return closestMenuItemsContainer(childNode, host);
  if (parentNode == null ? void 0 : parentNode.items)
    return parentNode;
  return closestMenuItemsContainer(parentNode, parentNode == null ? void 0 : parentNode.parentNode);
}
if (!GlobalThis.customElements.get("media-chrome-menu-item")) {
  GlobalThis.customElements.define(
    "media-chrome-menu-item",
    MediaChromeMenuItem
  );
}
function getTemplateHTML$4(_attrs) {
  return (
    /*html*/
    `
    ${MediaChromeMenu.getTemplateHTML(_attrs)}
    <style>
      :host {
        --_menu-bg: rgb(20 20 30 / .8);
        background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
        min-width: var(--media-settings-menu-min-width, 170px);
        border-radius: 2px 2px 0 0;
        overflow: hidden;
      }

      @-moz-document url-prefix() {
        :host{
          --_menu-bg: rgb(20 20 30);
        }
      }

      :host([role="menu"]) {
        ${/* Bottom fix setting menu items for animation when the height expands. */
    ""}
        justify-content: end;
      }

      slot:not([name]) {
        justify-content: var(--media-settings-menu-justify-content);
        flex-direction: var(--media-settings-menu-flex-direction, column);
        overflow: visible;
      }

      #container.has-expanded {
        --media-settings-menu-item-opacity: 0;
      }
    </style>
  `
  );
}
class MediaSettingsMenu extends MediaChromeMenu {
  /**
   * Returns the anchor element when it is a floating menu.
   */
  get anchorElement() {
    if (this.anchor !== "auto")
      return super.anchorElement;
    return getMediaController(this).querySelector(
      "media-settings-menu-button"
    );
  }
}
MediaSettingsMenu.getTemplateHTML = getTemplateHTML$4;
if (!GlobalThis.customElements.get("media-settings-menu")) {
  GlobalThis.customElements.define("media-settings-menu", MediaSettingsMenu);
}
function getTemplateHTML$3(_attrs) {
  return (
    /*html*/
    `
    ${MediaChromeMenuItem.getTemplateHTML.call(this, _attrs)}
    <style>
      slot:not([name="submenu"]) {
        opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
      }

      :host([aria-expanded="true"]:hover) {
        background: transparent;
      }
    </style>
  `
  );
}
function getSuffixSlotInnerHTML(_attrs) {
  return (
    /*html*/
    `
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `
  );
}
class MediaSettingsMenuItem extends MediaChromeMenuItem {
}
MediaSettingsMenuItem.shadowRootOptions = { mode: "open" };
MediaSettingsMenuItem.getTemplateHTML = getTemplateHTML$3;
MediaSettingsMenuItem.getSuffixSlotInnerHTML = getSuffixSlotInnerHTML;
if (!GlobalThis.customElements.get("media-settings-menu-item")) {
  GlobalThis.customElements.define(
    "media-settings-menu-item",
    MediaSettingsMenuItem
  );
}
class MediaChromeMenuButton extends MediaChromeButton {
  connectedCallback() {
    super.connectedCallback();
    if (this.invokeTargetElement) {
      this.setAttribute("aria-haspopup", "menu");
    }
  }
  get invokeTarget() {
    return this.getAttribute("invoketarget");
  }
  set invokeTarget(value) {
    this.setAttribute("invoketarget", `${value}`);
  }
  /**
   * Returns the element with the id specified by the `invoketarget` attribute.
   * @return {HTMLElement | null}
   */
  get invokeTargetElement() {
    var _a2;
    if (this.invokeTarget) {
      return (_a2 = getDocumentOrShadowRoot(this)) == null ? void 0 : _a2.querySelector(
        `#${this.invokeTarget}`
      );
    }
    return null;
  }
  handleClick() {
    var _a2;
    (_a2 = this.invokeTargetElement) == null ? void 0 : _a2.dispatchEvent(
      new InvokeEvent({ relatedTarget: this })
    );
  }
}
if (!GlobalThis.customElements.get("media-chrome-menu-button")) {
  GlobalThis.customElements.define(
    "media-chrome-menu-button",
    MediaChromeMenuButton
  );
}
function getSlotTemplateHTML$4() {
  return (
    /*html*/
    `
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
      </svg>
    </slot>
  `
  );
}
function getTooltipContentHTML$4() {
  return t("Settings");
}
class MediaSettingsMenuButton extends MediaChromeMenuButton {
  static get observedAttributes() {
    return [...super.observedAttributes, "target"];
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("aria-label", t("settings"));
  }
  /**
   * Returns the element with the id specified by the `invoketarget` attribute.
   * @return {HTMLElement | null}
   */
  get invokeTargetElement() {
    if (this.invokeTarget != void 0)
      return super.invokeTargetElement;
    return getMediaController(this).querySelector("media-settings-menu");
  }
}
MediaSettingsMenuButton.getSlotTemplateHTML = getSlotTemplateHTML$4;
MediaSettingsMenuButton.getTooltipContentHTML = getTooltipContentHTML$4;
if (!GlobalThis.customElements.get("media-settings-menu-button")) {
  GlobalThis.customElements.define(
    "media-settings-menu-button",
    MediaSettingsMenuButton
  );
}
var __accessCheck$4 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet$4 = (obj, member, getter) => {
  __accessCheck$4(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$4 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$3 = (obj, member, value, setter) => {
  __accessCheck$4(obj, member, "write to private field");
  member.set(obj, value);
  return value;
};
var __privateMethod$4 = (obj, member, method) => {
  __accessCheck$4(obj, member, "access private method");
  return method;
};
var _audioTrackList, _prevState$2, _render$3, render_fn$3, _onChange$3, onChange_fn$3;
class MediaAudioTrackMenu extends MediaChromeMenu {
  constructor() {
    super(...arguments);
    __privateAdd$4(this, _render$3);
    __privateAdd$4(this, _onChange$3);
    __privateAdd$4(this, _audioTrackList, []);
    __privateAdd$4(this, _prevState$2, void 0);
  }
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_AUDIO_TRACK_LIST,
      MediaUIAttributes.MEDIA_AUDIO_TRACK_ENABLED,
      MediaUIAttributes.MEDIA_AUDIO_TRACK_UNAVAILABLE
    ];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    super.attributeChangedCallback(attrName, oldValue, newValue);
    if (attrName === MediaUIAttributes.MEDIA_AUDIO_TRACK_ENABLED && oldValue !== newValue) {
      this.value = newValue;
    } else if (attrName === MediaUIAttributes.MEDIA_AUDIO_TRACK_LIST && oldValue !== newValue) {
      __privateSet$3(this, _audioTrackList, parseAudioTrackList(newValue != null ? newValue : ""));
      __privateMethod$4(this, _render$3, render_fn$3).call(this);
    }
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("change", __privateMethod$4(this, _onChange$3, onChange_fn$3));
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("change", __privateMethod$4(this, _onChange$3, onChange_fn$3));
  }
  /**
   * Returns the anchor element when it is a floating menu.
   */
  get anchorElement() {
    var _a2;
    if (this.anchor !== "auto")
      return super.anchorElement;
    return (_a2 = getMediaController(this)) == null ? void 0 : _a2.querySelector(
      "media-audio-track-menu-button"
    );
  }
  get mediaAudioTrackList() {
    return __privateGet$4(this, _audioTrackList);
  }
  set mediaAudioTrackList(list) {
    __privateSet$3(this, _audioTrackList, list);
    __privateMethod$4(this, _render$3, render_fn$3).call(this);
  }
  /**
   * Get enabled audio track id.
   */
  get mediaAudioTrackEnabled() {
    var _a2;
    return (_a2 = getStringAttr(this, MediaUIAttributes.MEDIA_AUDIO_TRACK_ENABLED)) != null ? _a2 : "";
  }
  set mediaAudioTrackEnabled(id) {
    setStringAttr(this, MediaUIAttributes.MEDIA_AUDIO_TRACK_ENABLED, id);
  }
}
_audioTrackList = /* @__PURE__ */ new WeakMap();
_prevState$2 = /* @__PURE__ */ new WeakMap();
_render$3 = /* @__PURE__ */ new WeakSet();
render_fn$3 = function() {
  if (__privateGet$4(this, _prevState$2) === JSON.stringify(this.mediaAudioTrackList))
    return;
  __privateSet$3(this, _prevState$2, JSON.stringify(this.mediaAudioTrackList));
  const audioTrackList = this.mediaAudioTrackList;
  this.defaultSlot.textContent = "";
  audioTrackList.sort((a, b2) => a.id.localeCompare(b2.id, void 0, { numeric: true }));
  for (const audioTrack of audioTrackList) {
    const text = this.formatMenuItemText(audioTrack.label, audioTrack);
    const item = createMenuItem({
      type: "radio",
      text,
      value: `${audioTrack.id}`,
      checked: audioTrack.enabled
    });
    item.prepend(createIndicator(this, "checked-indicator"));
    this.defaultSlot.append(item);
  }
};
_onChange$3 = /* @__PURE__ */ new WeakSet();
onChange_fn$3 = function() {
  if (this.value == null)
    return;
  const event = new GlobalThis.CustomEvent(
    MediaUIEvents.MEDIA_AUDIO_TRACK_REQUEST,
    {
      composed: true,
      bubbles: true,
      detail: this.value
    }
  );
  this.dispatchEvent(event);
};
if (!GlobalThis.customElements.get("media-audio-track-menu")) {
  GlobalThis.customElements.define(
    "media-audio-track-menu",
    MediaAudioTrackMenu
  );
}
const audioTrackIcon = (
  /*html*/
  `<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`
);
function getSlotTemplateHTML$3() {
  return (
    /*html*/
    `
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${audioTrackIcon}</slot>
  `
  );
}
function getTooltipContentHTML$3() {
  return t("Audio");
}
const updateAriaLabel$1 = (el) => {
  const label = t("Audio");
  el.setAttribute("aria-label", label);
};
class MediaAudioTrackMenuButton extends MediaChromeMenuButton {
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_AUDIO_TRACK_ENABLED,
      MediaUIAttributes.MEDIA_AUDIO_TRACK_UNAVAILABLE
    ];
  }
  connectedCallback() {
    super.connectedCallback();
    updateAriaLabel$1(this);
  }
  attributeChangedCallback(attrName, _oldValue, newValue) {
    super.attributeChangedCallback(attrName, _oldValue, newValue);
    if (attrName === MediaUIAttributes.MEDIA_LANG) {
      updateAriaLabel$1(this);
    }
  }
  /**
   * Returns the element with the id specified by the `invoketarget` attribute.
   * @return {HTMLElement | null}
   */
  get invokeTargetElement() {
    var _a2;
    if (this.invokeTarget != void 0)
      return super.invokeTargetElement;
    return (_a2 = getMediaController(this)) == null ? void 0 : _a2.querySelector("media-audio-track-menu");
  }
  /**
   * Get enabled audio track id.
   * @return {string}
   */
  get mediaAudioTrackEnabled() {
    var _a2;
    return (_a2 = getStringAttr(this, MediaUIAttributes.MEDIA_AUDIO_TRACK_ENABLED)) != null ? _a2 : "";
  }
  set mediaAudioTrackEnabled(id) {
    setStringAttr(this, MediaUIAttributes.MEDIA_AUDIO_TRACK_ENABLED, id);
  }
}
MediaAudioTrackMenuButton.getSlotTemplateHTML = getSlotTemplateHTML$3;
MediaAudioTrackMenuButton.getTooltipContentHTML = getTooltipContentHTML$3;
if (!GlobalThis.customElements.get("media-audio-track-menu-button")) {
  GlobalThis.customElements.define(
    "media-audio-track-menu-button",
    MediaAudioTrackMenuButton
  );
}
var __accessCheck$3 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet$3 = (obj, member, getter) => {
  __accessCheck$3(obj, member, "read from private field");
  return member.get(obj);
};
var __privateAdd$3 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$2 = (obj, member, value, setter) => {
  __accessCheck$3(obj, member, "write to private field");
  member.set(obj, value);
  return value;
};
var __privateMethod$3 = (obj, member, method) => {
  __accessCheck$3(obj, member, "access private method");
  return method;
};
var _prevState$1, _render$2, render_fn$2, _onChange$2, onChange_fn$2;
const ccIcon = (
  /*html*/
  `
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`
);
function getTemplateHTML$2(_attrs) {
  return (
    /*html*/
    `
    ${MediaChromeMenu.getTemplateHTML(_attrs)}
    <slot name="captions-indicator" hidden>${ccIcon}</slot>
  `
  );
}
class MediaCaptionsMenu extends MediaChromeMenu {
  constructor() {
    super(...arguments);
    __privateAdd$3(this, _render$2);
    __privateAdd$3(this, _onChange$2);
    __privateAdd$3(this, _prevState$1, void 0);
  }
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_SUBTITLES_LIST,
      MediaUIAttributes.MEDIA_SUBTITLES_SHOWING
    ];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    super.attributeChangedCallback(attrName, oldValue, newValue);
    if (attrName === MediaUIAttributes.MEDIA_SUBTITLES_LIST && oldValue !== newValue) {
      __privateMethod$3(this, _render$2, render_fn$2).call(this);
    } else if (attrName === MediaUIAttributes.MEDIA_SUBTITLES_SHOWING && oldValue !== newValue) {
      this.value = newValue || "";
      __privateMethod$3(this, _render$2, render_fn$2).call(this);
    }
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("change", __privateMethod$3(this, _onChange$2, onChange_fn$2));
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("change", __privateMethod$3(this, _onChange$2, onChange_fn$2));
  }
  /**
   * Returns the anchor element when it is a floating menu.
   */
  get anchorElement() {
    if (this.anchor !== "auto")
      return super.anchorElement;
    return getMediaController(this).querySelector("media-captions-menu-button");
  }
  /**
   * @type {Array<object>} An array of TextTrack-like objects.
   * Objects must have the properties: kind, language, and label.
   */
  get mediaSubtitlesList() {
    return getSubtitlesListAttr$1(this, MediaUIAttributes.MEDIA_SUBTITLES_LIST);
  }
  set mediaSubtitlesList(list) {
    setSubtitlesListAttr$1(this, MediaUIAttributes.MEDIA_SUBTITLES_LIST, list);
  }
  /**
   * An array of TextTrack-like objects.
   * Objects must have the properties: kind, language, and label.
   */
  get mediaSubtitlesShowing() {
    return getSubtitlesListAttr$1(
      this,
      MediaUIAttributes.MEDIA_SUBTITLES_SHOWING
    );
  }
  set mediaSubtitlesShowing(list) {
    setSubtitlesListAttr$1(this, MediaUIAttributes.MEDIA_SUBTITLES_SHOWING, list);
  }
}
_prevState$1 = /* @__PURE__ */ new WeakMap();
_render$2 = /* @__PURE__ */ new WeakSet();
render_fn$2 = function() {
  var _a2;
  const hasListChanged = __privateGet$3(this, _prevState$1) !== JSON.stringify(this.mediaSubtitlesList);
  const hasShowingChanged = this.value !== this.getAttribute(MediaUIAttributes.MEDIA_SUBTITLES_SHOWING);
  if (!hasListChanged && !hasShowingChanged)
    return;
  __privateSet$2(this, _prevState$1, JSON.stringify(this.mediaSubtitlesList));
  this.defaultSlot.textContent = "";
  const isOff = !this.value;
  const item = createMenuItem({
    type: "radio",
    text: this.formatMenuItemText(t("Off")),
    value: "off",
    checked: isOff
  });
  item.prepend(createIndicator(this, "checked-indicator"));
  this.defaultSlot.append(item);
  const subtitlesList = this.mediaSubtitlesList;
  for (const subs of subtitlesList) {
    const item2 = createMenuItem({
      type: "radio",
      text: this.formatMenuItemText(subs.label, subs),
      value: formatTextTrackObj(subs),
      checked: this.value == formatTextTrackObj(subs)
    });
    item2.prepend(createIndicator(this, "checked-indicator"));
    const type = (_a2 = subs.kind) != null ? _a2 : "subs";
    if (type === "captions") {
      item2.append(createIndicator(this, "captions-indicator"));
    }
    this.defaultSlot.append(item2);
  }
};
_onChange$2 = /* @__PURE__ */ new WeakSet();
onChange_fn$2 = function() {
  const showingSubs = this.mediaSubtitlesShowing;
  const showingSubsStr = this.getAttribute(
    MediaUIAttributes.MEDIA_SUBTITLES_SHOWING
  );
  const localStateChange = this.value !== showingSubsStr;
  if ((showingSubs == null ? void 0 : showingSubs.length) && localStateChange) {
    this.dispatchEvent(
      new GlobalThis.CustomEvent(
        MediaUIEvents.MEDIA_DISABLE_SUBTITLES_REQUEST,
        {
          composed: true,
          bubbles: true,
          detail: showingSubs
        }
      )
    );
  }
  if (!this.value || !localStateChange)
    return;
  const event = new GlobalThis.CustomEvent(
    MediaUIEvents.MEDIA_SHOW_SUBTITLES_REQUEST,
    {
      composed: true,
      bubbles: true,
      detail: this.value
    }
  );
  this.dispatchEvent(event);
};
MediaCaptionsMenu.getTemplateHTML = getTemplateHTML$2;
const getSubtitlesListAttr$1 = (el, attrName) => {
  const attrVal = el.getAttribute(attrName);
  return attrVal ? parseTextTracksStr(attrVal) : [];
};
const setSubtitlesListAttr$1 = (el, attrName, list) => {
  if (!(list == null ? void 0 : list.length)) {
    el.removeAttribute(attrName);
    return;
  }
  const newValStr = stringifyTextTrackList(list);
  const oldVal = el.getAttribute(attrName);
  if (oldVal === newValStr)
    return;
  el.setAttribute(attrName, newValStr);
};
if (!GlobalThis.customElements.get("media-captions-menu")) {
  GlobalThis.customElements.define("media-captions-menu", MediaCaptionsMenu);
}
const ccIconOn = `<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`;
const ccIconOff = `<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;
function getSlotTemplateHTML$2() {
  return (
    /*html*/
    `
    <style>
      :host([data-captions-enabled="true"]) slot[name=off] {
        display: none !important;
      }

      ${/* Double negative, but safer if display doesn't equal 'block' */
    ""}
      :host(:not([data-captions-enabled="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${ccIconOn}</slot>
      <slot name="off">${ccIconOff}</slot>
    </slot>
  `
  );
}
function getTooltipContentHTML$2() {
  return t("Captions");
}
const updateAriaChecked = (el) => {
  el.setAttribute("data-captions-enabled", areSubsOn(el).toString());
};
const updateAriaLabel = (el) => {
  el.setAttribute("aria-label", t("closed captions"));
};
class MediaCaptionsMenuButton extends MediaChromeMenuButton {
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_SUBTITLES_LIST,
      MediaUIAttributes.MEDIA_SUBTITLES_SHOWING,
      MediaUIAttributes.MEDIA_LANG
    ];
  }
  connectedCallback() {
    super.connectedCallback();
    updateAriaLabel(this);
    updateAriaChecked(this);
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    super.attributeChangedCallback(attrName, oldValue, newValue);
    if (attrName === MediaUIAttributes.MEDIA_SUBTITLES_SHOWING) {
      updateAriaChecked(this);
    } else if (attrName === MediaUIAttributes.MEDIA_LANG) {
      updateAriaLabel(this);
    }
  }
  /**
   * Returns the element with the id specified by the `invoketarget` attribute.
   * @return {HTMLElement | null}
   */
  get invokeTargetElement() {
    var _a2;
    if (this.invokeTarget != void 0)
      return super.invokeTargetElement;
    return (_a2 = getMediaController(this)) == null ? void 0 : _a2.querySelector("media-captions-menu");
  }
  /**
   * An array of TextTrack-like objects.
   * Objects must have the properties: kind, language, and label.
   */
  get mediaSubtitlesList() {
    return getSubtitlesListAttr(this, MediaUIAttributes.MEDIA_SUBTITLES_LIST);
  }
  set mediaSubtitlesList(list) {
    setSubtitlesListAttr(this, MediaUIAttributes.MEDIA_SUBTITLES_LIST, list);
  }
  /**
   * An array of TextTrack-like objects.
   * Objects must have the properties: kind, language, and label.
   */
  get mediaSubtitlesShowing() {
    return getSubtitlesListAttr(
      this,
      MediaUIAttributes.MEDIA_SUBTITLES_SHOWING
    );
  }
  set mediaSubtitlesShowing(list) {
    setSubtitlesListAttr(this, MediaUIAttributes.MEDIA_SUBTITLES_SHOWING, list);
  }
}
MediaCaptionsMenuButton.getSlotTemplateHTML = getSlotTemplateHTML$2;
MediaCaptionsMenuButton.getTooltipContentHTML = getTooltipContentHTML$2;
const getSubtitlesListAttr = (el, attrName) => {
  const attrVal = el.getAttribute(attrName);
  return attrVal ? parseTextTracksStr(attrVal) : [];
};
const setSubtitlesListAttr = (el, attrName, list) => {
  if (!(list == null ? void 0 : list.length)) {
    el.removeAttribute(attrName);
    return;
  }
  const newValStr = stringifyTextTrackList(list);
  const oldVal = el.getAttribute(attrName);
  if (oldVal === newValStr)
    return;
  el.setAttribute(attrName, newValStr);
};
if (!GlobalThis.customElements.get("media-captions-menu-button")) {
  GlobalThis.customElements.define(
    "media-captions-menu-button",
    MediaCaptionsMenuButton
  );
}
var __accessCheck$2 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet$2 = (obj, member, getter) => {
  __accessCheck$2(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$2 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateMethod$2 = (obj, member, method) => {
  __accessCheck$2(obj, member, "access private method");
  return method;
};
var _rates, _render$1, render_fn$1, _onChange$1, onChange_fn$1;
const Attributes = {
  RATES: "rates"
};
class MediaPlaybackRateMenu extends MediaChromeMenu {
  constructor() {
    super();
    __privateAdd$2(this, _render$1);
    __privateAdd$2(this, _onChange$1);
    __privateAdd$2(this, _rates, new AttributeTokenList(this, Attributes.RATES, {
      defaultValue: DEFAULT_RATES
    }));
    __privateMethod$2(this, _render$1, render_fn$1).call(this);
  }
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_PLAYBACK_RATE,
      Attributes.RATES
    ];
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    super.attributeChangedCallback(attrName, oldValue, newValue);
    if (attrName === MediaUIAttributes.MEDIA_PLAYBACK_RATE && oldValue != newValue) {
      this.value = newValue;
      __privateMethod$2(this, _render$1, render_fn$1).call(this);
    } else if (attrName === Attributes.RATES && oldValue != newValue) {
      __privateGet$2(this, _rates).value = newValue;
      __privateMethod$2(this, _render$1, render_fn$1).call(this);
    }
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("change", __privateMethod$2(this, _onChange$1, onChange_fn$1));
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("change", __privateMethod$2(this, _onChange$1, onChange_fn$1));
  }
  /**
   * Returns the anchor element when it is a floating menu.
   */
  get anchorElement() {
    if (this.anchor !== "auto")
      return super.anchorElement;
    return getMediaController(this).querySelector(
      "media-playback-rate-menu-button"
    );
  }
  /**
   * Get the playback rates for the button.
   */
  get rates() {
    return __privateGet$2(this, _rates);
  }
  /**
   * Set the playback rates for the button.
   * For React 19+ compatibility, accept a string of space-separated rates.
   */
  set rates(value) {
    if (!value) {
      __privateGet$2(this, _rates).value = "";
    } else if (Array.isArray(value)) {
      __privateGet$2(this, _rates).value = value.join(" ");
    } else if (typeof value === "string") {
      __privateGet$2(this, _rates).value = value;
    }
    __privateMethod$2(this, _render$1, render_fn$1).call(this);
  }
  /**
   * The current playback rate
   */
  get mediaPlaybackRate() {
    return getNumericAttr(
      this,
      MediaUIAttributes.MEDIA_PLAYBACK_RATE,
      DEFAULT_RATE$1
    );
  }
  set mediaPlaybackRate(value) {
    setNumericAttr(this, MediaUIAttributes.MEDIA_PLAYBACK_RATE, value);
  }
}
_rates = /* @__PURE__ */ new WeakMap();
_render$1 = /* @__PURE__ */ new WeakSet();
render_fn$1 = function() {
  this.defaultSlot.textContent = "";
  const currentRate = normalizePlaybackRate(this.mediaPlaybackRate);
  const ratesSet = new Set(
    Array.from(__privateGet$2(this, _rates)).map((rate) => normalizePlaybackRate(Number(rate)))
  );
  if (currentRate > 0 && !ratesSet.has(currentRate)) {
    ratesSet.add(currentRate);
  }
  const sortedRates = Array.from(ratesSet).sort((a, b2) => a - b2);
  for (const rate of sortedRates) {
    const item = createMenuItem({
      type: "radio",
      text: this.formatMenuItemText(`${rate}x`, rate),
      value: rate.toString(),
      checked: currentRate === rate
    });
    item.prepend(createIndicator(this, "checked-indicator"));
    this.defaultSlot.append(item);
  }
};
_onChange$1 = /* @__PURE__ */ new WeakSet();
onChange_fn$1 = function() {
  if (!this.value)
    return;
  const event = new GlobalThis.CustomEvent(
    MediaUIEvents.MEDIA_PLAYBACK_RATE_REQUEST,
    {
      composed: true,
      bubbles: true,
      detail: this.value
    }
  );
  this.dispatchEvent(event);
};
if (!GlobalThis.customElements.get("media-playback-rate-menu")) {
  GlobalThis.customElements.define(
    "media-playback-rate-menu",
    MediaPlaybackRateMenu
  );
}
const DEFAULT_RATE = 1;
function getSlotTemplateHTML$1(attrs) {
  const rate = attrs["mediaplaybackrate"] ? normalizePlaybackRate(+attrs["mediaplaybackrate"]) : DEFAULT_RATE;
  return (
    /*html*/
    `
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }

      :host([aria-expanded="true"]) slot {
        display: block;
      }

      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${rate}x</slot>
  `
  );
}
function getTooltipContentHTML$1() {
  return t("Playback rate");
}
class MediaPlaybackRateMenuButton extends MediaChromeMenuButton {
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_PLAYBACK_RATE
    ];
  }
  constructor() {
    var _a2;
    super();
    this.container = this.shadowRoot.querySelector('slot[name="icon"]');
    this.container.innerHTML = `${normalizePlaybackRate((_a2 = this.mediaPlaybackRate) != null ? _a2 : DEFAULT_RATE)}x`;
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    super.attributeChangedCallback(attrName, oldValue, newValue);
    if (attrName === MediaUIAttributes.MEDIA_PLAYBACK_RATE) {
      const newPlaybackRate = newValue ? +newValue : Number.NaN;
      const playbackRate = normalizePlaybackRate(
        !Number.isNaN(newPlaybackRate) ? newPlaybackRate : DEFAULT_RATE
      );
      this.container.innerHTML = `${playbackRate}x`;
      this.setAttribute(
        "aria-label",
        t("Playback rate {playbackRate}", { playbackRate })
      );
    }
  }
  /**
   * Returns the element with the id specified by the `invoketarget` attribute.
   */
  get invokeTargetElement() {
    if (this.invokeTarget != void 0)
      return super.invokeTargetElement;
    return getMediaController(this).querySelector("media-playback-rate-menu");
  }
  /**
   * The current playback rate
   */
  get mediaPlaybackRate() {
    return getNumericAttr(
      this,
      MediaUIAttributes.MEDIA_PLAYBACK_RATE,
      DEFAULT_RATE
    );
  }
  set mediaPlaybackRate(value) {
    setNumericAttr(this, MediaUIAttributes.MEDIA_PLAYBACK_RATE, value);
  }
}
MediaPlaybackRateMenuButton.getSlotTemplateHTML = getSlotTemplateHTML$1;
MediaPlaybackRateMenuButton.getTooltipContentHTML = getTooltipContentHTML$1;
if (!GlobalThis.customElements.get("media-playback-rate-menu-button")) {
  GlobalThis.customElements.define(
    "media-playback-rate-menu-button",
    MediaPlaybackRateMenuButton
  );
}
var __accessCheck$1 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet$1 = (obj, member, getter) => {
  __accessCheck$1(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$1 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$1 = (obj, member, value, setter) => {
  __accessCheck$1(obj, member, "write to private field");
  member.set(obj, value);
  return value;
};
var __privateMethod$1 = (obj, member, method) => {
  __accessCheck$1(obj, member, "access private method");
  return method;
};
var _renditionList, _prevState, _render, render_fn, _onChange, onChange_fn;
class MediaRenditionMenu extends MediaChromeMenu {
  constructor() {
    super(...arguments);
    __privateAdd$1(this, _render);
    __privateAdd$1(this, _onChange);
    __privateAdd$1(this, _renditionList, []);
    __privateAdd$1(this, _prevState, {});
  }
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_RENDITION_LIST,
      MediaUIAttributes.MEDIA_RENDITION_SELECTED,
      MediaUIAttributes.MEDIA_RENDITION_UNAVAILABLE,
      MediaUIAttributes.MEDIA_HEIGHT,
      MediaUIAttributes.MEDIA_WIDTH
    ];
  }
  static formatMenuItemText(text, rendition) {
    return super.formatMenuItemText(text, rendition);
  }
  static formatRendition(rendition, { showBitrate = false } = {}) {
    const renditionText = `${Math.min(
      rendition.width,
      rendition.height
    )}p`;
    if (showBitrate && rendition.bitrate) {
      const mbps = rendition.bitrate / 1e6;
      const bitrateText = `${mbps.toFixed(mbps < 1 ? 1 : 0)} Mbps`;
      return `${renditionText} (${bitrateText})`;
    }
    return this.formatMenuItemText(renditionText, rendition);
  }
  static compareRendition(a, b2) {
    var _a2, _b;
    return b2.height === a.height ? ((_a2 = b2.bitrate) != null ? _a2 : 0) - ((_b = a.bitrate) != null ? _b : 0) : b2.height - a.height;
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    super.attributeChangedCallback(attrName, oldValue, newValue);
    if (oldValue !== newValue) {
      switch (attrName) {
        case MediaUIAttributes.MEDIA_RENDITION_SELECTED:
          this.value = newValue != null ? newValue : "auto";
          __privateMethod$1(this, _render, render_fn).call(this);
          break;
        case MediaUIAttributes.MEDIA_RENDITION_LIST:
          __privateSet$1(this, _renditionList, parseRenditionList(newValue));
          __privateMethod$1(this, _render, render_fn).call(this);
          break;
        case MediaUIAttributes.MEDIA_HEIGHT:
        case MediaUIAttributes.MEDIA_WIDTH:
          __privateMethod$1(this, _render, render_fn).call(this);
          break;
      }
    }
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("change", __privateMethod$1(this, _onChange, onChange_fn));
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("change", __privateMethod$1(this, _onChange, onChange_fn));
  }
  /**
   * Returns the anchor element when it is a floating menu.
   */
  get anchorElement() {
    if (this.anchor !== "auto")
      return super.anchorElement;
    return getMediaController(this).querySelector(
      "media-rendition-menu-button"
    );
  }
  get mediaRenditionList() {
    return __privateGet$1(this, _renditionList);
  }
  set mediaRenditionList(list) {
    __privateSet$1(this, _renditionList, list);
    __privateMethod$1(this, _render, render_fn).call(this);
  }
  /**
   * Get selected rendition id.
   */
  get mediaRenditionSelected() {
    return getStringAttr(this, MediaUIAttributes.MEDIA_RENDITION_SELECTED);
  }
  set mediaRenditionSelected(id) {
    setStringAttr(this, MediaUIAttributes.MEDIA_RENDITION_SELECTED, id);
  }
  get mediaHeight() {
    return getNumericAttr(this, MediaUIAttributes.MEDIA_HEIGHT);
  }
  set mediaHeight(height) {
    setNumericAttr(this, MediaUIAttributes.MEDIA_HEIGHT, height);
  }
  get mediaWidth() {
    return getNumericAttr(this, MediaUIAttributes.MEDIA_WIDTH);
  }
  set mediaWidth(width) {
    setNumericAttr(this, MediaUIAttributes.MEDIA_WIDTH, width);
  }
  compareRendition(a, b2) {
    const ctor = this.constructor;
    return ctor.compareRendition(a, b2);
  }
  formatMenuItemText(text, rendition) {
    const ctor = this.constructor;
    return ctor.formatMenuItemText(text, rendition);
  }
  formatRendition(rendition, options) {
    const ctor = this.constructor;
    return ctor.formatRendition(rendition, options);
  }
  showRenditionBitrate(rendition) {
    return this.mediaRenditionList.some(
      (r11) => r11 !== rendition && r11.height === rendition.height && r11.bitrate !== rendition.bitrate
    );
  }
}
_renditionList = /* @__PURE__ */ new WeakMap();
_prevState = /* @__PURE__ */ new WeakMap();
_render = /* @__PURE__ */ new WeakSet();
render_fn = function() {
  const isAuto = !this.mediaRenditionSelected;
  if (__privateGet$1(this, _prevState).mediaRenditionList === JSON.stringify(this.mediaRenditionList) && __privateGet$1(this, _prevState).mediaHeight === this.mediaHeight && __privateGet$1(this, _prevState).mediaWidth === this.mediaWidth && __privateGet$1(this, _prevState).isAuto === isAuto)
    return;
  __privateGet$1(this, _prevState).mediaRenditionList = JSON.stringify(
    this.mediaRenditionList
  );
  __privateGet$1(this, _prevState).mediaHeight = this.mediaHeight;
  __privateGet$1(this, _prevState).mediaWidth = this.mediaWidth;
  __privateGet$1(this, _prevState).isAuto = isAuto;
  const renditionList = this.mediaRenditionList.sort(
    this.compareRendition.bind(this)
  );
  const selectedRendition = renditionList.find(
    (rendition) => rendition.id === this.mediaRenditionSelected
  );
  for (const rendition of renditionList) {
    rendition.selected = rendition === selectedRendition;
  }
  this.defaultSlot.textContent = "";
  for (const rendition of renditionList) {
    const text = this.formatRendition(rendition, {
      showBitrate: this.showRenditionBitrate(rendition)
    });
    const item2 = createMenuItem({
      type: "radio",
      text,
      value: `${rendition.id}`,
      checked: rendition.selected && !isAuto
    });
    item2.prepend(createIndicator(this, "checked-indicator"));
    this.defaultSlot.append(item2);
  }
  const showSelectedBitrate = selectedRendition && this.showRenditionBitrate(selectedRendition);
  let autoText = void 0;
  if (isAuto) {
    if (selectedRendition) {
      autoText = this.formatMenuItemText(
        `${t("Auto")} • ${this.formatRendition(selectedRendition, {
          showBitrate: showSelectedBitrate
        })}`,
        selectedRendition
      );
    } else if (this.mediaHeight > 0 && this.mediaWidth > 0) {
      autoText = this.formatMenuItemText(`${t("Auto")} (${Math.min(this.mediaWidth, this.mediaHeight)}p)`);
    }
  }
  if (!autoText) {
    autoText = this.formatMenuItemText(t("Auto"));
  }
  const item = createMenuItem({
    type: "radio",
    text: autoText,
    value: "auto",
    checked: isAuto
  });
  item.dataset.description = autoText;
  item.prepend(createIndicator(this, "checked-indicator"));
  this.defaultSlot.append(item);
};
_onChange = /* @__PURE__ */ new WeakSet();
onChange_fn = function() {
  if (this.value == null)
    return;
  const event = new GlobalThis.CustomEvent(
    MediaUIEvents.MEDIA_RENDITION_REQUEST,
    {
      composed: true,
      bubbles: true,
      detail: this.value
    }
  );
  this.dispatchEvent(event);
};
if (!GlobalThis.customElements.get("media-rendition-menu")) {
  GlobalThis.customElements.define("media-rendition-menu", MediaRenditionMenu);
}
const renditionIcon = (
  /*html*/
  `<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`
);
function getSlotTemplateHTML() {
  return (
    /*html*/
    `
    <style>
      :host([aria-expanded="true"]) slot[name=tooltip] {
        display: none;
      }
    </style>
    <slot name="icon">${renditionIcon}</slot>
  `
  );
}
function getTooltipContentHTML() {
  return t("Quality");
}
class MediaRenditionMenuButton extends MediaChromeMenuButton {
  static get observedAttributes() {
    return [
      ...super.observedAttributes,
      MediaUIAttributes.MEDIA_RENDITION_SELECTED,
      MediaUIAttributes.MEDIA_RENDITION_UNAVAILABLE,
      MediaUIAttributes.MEDIA_HEIGHT
    ];
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("aria-label", t("quality"));
  }
  /**
   * Returns the element with the id specified by the `invoketarget` attribute.
   */
  get invokeTargetElement() {
    if (this.invokeTarget != void 0)
      return super.invokeTargetElement;
    return getMediaController(this).querySelector("media-rendition-menu");
  }
  /**
   * Get selected rendition id.
   */
  get mediaRenditionSelected() {
    return getStringAttr(this, MediaUIAttributes.MEDIA_RENDITION_SELECTED);
  }
  set mediaRenditionSelected(id) {
    setStringAttr(this, MediaUIAttributes.MEDIA_RENDITION_SELECTED, id);
  }
  get mediaHeight() {
    return getNumericAttr(this, MediaUIAttributes.MEDIA_HEIGHT);
  }
  set mediaHeight(height) {
    setNumericAttr(this, MediaUIAttributes.MEDIA_HEIGHT, height);
  }
}
MediaRenditionMenuButton.getSlotTemplateHTML = getSlotTemplateHTML;
MediaRenditionMenuButton.getTooltipContentHTML = getTooltipContentHTML;
if (!GlobalThis.customElements.get("media-rendition-menu-button")) {
  GlobalThis.customElements.define(
    "media-rendition-menu-button",
    MediaRenditionMenuButton
  );
}
var __accessCheck2 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet2 = (obj, member, getter) => {
  __accessCheck2(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd2 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet2 = (obj, member, value, setter) => {
  __accessCheck2(obj, member, "write to private field");
  member.set(obj, value);
  return value;
};
var __privateMethod2 = (obj, member, method) => {
  __accessCheck2(obj, member, "access private method");
  return method;
};
var _isContextMenuOpen, _updateVisibility, updateVisibility_fn, _closeContextMenu, closeContextMenu_fn, _closeOtherContextMenus, closeOtherContextMenus_fn, _isVideoContainer, isVideoContainer_fn, _onControllerContextMenu, _onContextMenu, onContextMenu_fn, _onDocumentClick, _onKeyDown, _onMenuClick;
function getTemplateHTML$1(_attrs) {
  return (
    /*html*/
    `
      ${MediaChromeMenu.getTemplateHTML(_attrs)}
      <style>
        :host {
          --_menu-bg: rgb(20 20 30 / .8);
          background: var(--media-settings-menu-background,
            var(--media-menu-background,
              var(--media-control-background,
                var(--media-secondary-color, var(--_menu-bg)))));
          min-width: var(--media-settings-menu-min-width, 170px);
          border-radius: 2px;
          overflow: hidden;
        }
      </style>
    `
  );
}
class MediaContextMenu extends MediaChromeMenu {
  constructor() {
    super();
    __privateAdd2(this, _updateVisibility);
    __privateAdd2(this, _closeContextMenu);
    __privateAdd2(this, _closeOtherContextMenus);
    __privateAdd2(this, _isVideoContainer);
    __privateAdd2(this, _onContextMenu);
    __privateAdd2(this, _isContextMenuOpen, false);
    __privateAdd2(this, _onControllerContextMenu, (event) => {
      const target = event.target;
      const isVideoElement = (target == null ? void 0 : target.nodeName) === "VIDEO";
      const isVideoContainer = __privateMethod2(this, _isVideoContainer, isVideoContainer_fn).call(this, target);
      if (isVideoElement || isVideoContainer) {
        if (!__privateGet2(this, _isContextMenuOpen)) {
          __privateMethod2(this, _onContextMenu, onContextMenu_fn).call(this, event);
        } else {
          __privateMethod2(this, _closeContextMenu, closeContextMenu_fn).call(this);
        }
      }
    });
    __privateAdd2(this, _onDocumentClick, (event) => {
      const target = event.target;
      const isInsideMenu = this.contains(target);
      const isRightClick = event.button === 2;
      const isVideo = (target == null ? void 0 : target.nodeName) === "VIDEO";
      const isVideoContainer = __privateMethod2(this, _isVideoContainer, isVideoContainer_fn).call(this, target);
      if (isInsideMenu) {
        return;
      }
      const isRightClickOnVideo = isRightClick && (isVideo || isVideoContainer);
      if (isRightClickOnVideo) {
        return;
      }
      __privateMethod2(this, _closeContextMenu, closeContextMenu_fn).call(this);
    });
    __privateAdd2(this, _onKeyDown, (event) => {
      if (event.key === "Escape") {
        __privateMethod2(this, _closeContextMenu, closeContextMenu_fn).call(this);
      }
    });
    __privateAdd2(this, _onMenuClick, (event) => {
      var _a2, _b;
      const target = event.target;
      if ((_a2 = target.matches) == null ? void 0 : _a2.call(target, 'button[invoke="copy"]')) {
        const input = (_b = target.closest("media-context-menu-item")) == null ? void 0 : _b.querySelector('input[slot="copy"]');
        input && navigator.clipboard.writeText(input.value);
      }
      __privateMethod2(this, _closeContextMenu, closeContextMenu_fn).call(this);
    });
    this.setAttribute("noautohide", "");
    __privateMethod2(this, _updateVisibility, updateVisibility_fn).call(this);
  }
  connectedCallback() {
    super.connectedCallback();
    getMediaController(this).addEventListener(
      "contextmenu",
      __privateGet2(this, _onControllerContextMenu)
    );
    this.addEventListener("click", __privateGet2(this, _onMenuClick));
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    getMediaController(this).removeEventListener(
      "contextmenu",
      __privateGet2(this, _onControllerContextMenu)
    );
    this.removeEventListener("click", __privateGet2(this, _onMenuClick));
    document.removeEventListener("mousedown", __privateGet2(this, _onDocumentClick));
    document.removeEventListener("keydown", __privateGet2(this, _onKeyDown));
  }
}
_isContextMenuOpen = /* @__PURE__ */ new WeakMap();
_updateVisibility = /* @__PURE__ */ new WeakSet();
updateVisibility_fn = function() {
  this.hidden = !__privateGet2(this, _isContextMenuOpen);
};
_closeContextMenu = /* @__PURE__ */ new WeakSet();
closeContextMenu_fn = function() {
  __privateSet2(this, _isContextMenuOpen, false);
  __privateMethod2(this, _updateVisibility, updateVisibility_fn).call(this);
};
_closeOtherContextMenus = /* @__PURE__ */ new WeakSet();
closeOtherContextMenus_fn = function() {
  const allContextMenus = document.querySelectorAll("media-context-menu");
  allContextMenus.forEach((menu) => {
    var _a2;
    if (menu !== this) {
      __privateMethod2(_a2 = menu, _closeContextMenu, closeContextMenu_fn).call(_a2);
    }
  });
};
_isVideoContainer = /* @__PURE__ */ new WeakSet();
isVideoContainer_fn = function(element) {
  if (!element)
    return false;
  if (element.hasAttribute("slot") && element.getAttribute("slot") === "media") {
    return true;
  }
  if (element.nodeName.includes("-") && element.tagName.includes("-")) {
    const hasVideoAttributes = element.hasAttribute("src") || element.hasAttribute("poster") || element.hasAttribute("preload") || element.hasAttribute("playsinline");
    return hasVideoAttributes;
  }
  return false;
};
_onControllerContextMenu = /* @__PURE__ */ new WeakMap();
_onContextMenu = /* @__PURE__ */ new WeakSet();
onContextMenu_fn = function(event) {
  event.preventDefault();
  __privateMethod2(this, _closeOtherContextMenus, closeOtherContextMenus_fn).call(this);
  __privateSet2(this, _isContextMenuOpen, true);
  this.style.position = "fixed";
  this.style.left = `${event.clientX}px`;
  this.style.top = `${event.clientY}px`;
  __privateMethod2(this, _updateVisibility, updateVisibility_fn).call(this);
  document.addEventListener("mousedown", __privateGet2(this, _onDocumentClick), {
    once: true
  });
  document.addEventListener("keydown", __privateGet2(this, _onKeyDown), { once: true });
};
_onDocumentClick = /* @__PURE__ */ new WeakMap();
_onKeyDown = /* @__PURE__ */ new WeakMap();
_onMenuClick = /* @__PURE__ */ new WeakMap();
MediaContextMenu.getTemplateHTML = getTemplateHTML$1;
if (!GlobalThis.customElements.get("media-context-menu")) {
  GlobalThis.customElements.define("media-context-menu", MediaContextMenu);
}
function getTemplateHTML(_attrs) {
  return (
    /*html*/
    `
    ${MediaChromeMenuItem.getTemplateHTML.call(this, _attrs)}
    <style>
        ::slotted(*) {
            color: var(--media-text-color, white);
            text-decoration: none;
            border: none;
            background: none;
            cursor: pointer;
            padding: 0;
            min-height: var(--media-control-height, 24px);
        }
    </style>
  `
  );
}
class MediaContextMenuItem extends MediaChromeMenuItem {
}
MediaContextMenuItem.shadowRootOptions = { mode: "open" };
MediaContextMenuItem.getTemplateHTML = getTemplateHTML;
if (!GlobalThis.customElements.get("media-context-menu-item")) {
  GlobalThis.customElements.define(
    "media-context-menu-item",
    MediaContextMenuItem
  );
}
var lt = (t3) => {
  throw TypeError(t3);
};
var Ae = (t3, a, e) => a.has(t3) || lt("Cannot " + e);
var l$1 = (t3, a, e) => (Ae(t3, a, "read from private field"), e ? e.call(t3) : a.get(t3)), h$1 = (t3, a, e) => a.has(t3) ? lt("Cannot add the same private member more than once") : a instanceof WeakSet ? a.add(t3) : a.set(t3, e), y = (t3, a, e, i2) => (Ae(t3, a, "write to private field"), a.set(t3, e), e), p$1 = (t3, a, e) => (Ae(t3, a, "access private method"), e);
var Y = class {
  addEventListener() {
  }
  removeEventListener() {
  }
  dispatchEvent(a) {
    return true;
  }
};
if (typeof DocumentFragment == "undefined") {
  class t3 extends Y {
  }
  globalThis.DocumentFragment = t3;
}
var Q = class extends Y {
}, Ce = class extends Y {
}, Gt = { get(t3) {
}, define(t3, a, e) {
}, getName(t3) {
  return null;
}, upgrade(t3) {
}, whenDefined(t3) {
  return Promise.resolve(Q);
} }, J, ke = class {
  constructor(a, e = {}) {
    h$1(this, J);
    y(this, J, e == null ? void 0 : e.detail);
  }
  get detail() {
    return l$1(this, J);
  }
  initCustomEvent() {
  }
};
J = /* @__PURE__ */ new WeakMap();
function jt(t3, a) {
  return new Q();
}
var ut = { document: { createElement: jt }, DocumentFragment, customElements: Gt, CustomEvent: ke, EventTarget: Y, HTMLElement: Q, HTMLVideoElement: Ce }, mt = typeof window == "undefined" || typeof globalThis.customElements == "undefined", _2 = mt ? ut : globalThis, D = mt ? ut.document : globalThis.document;
function ct(t3) {
  let a = "";
  return Object.entries(t3).forEach(([e, i2]) => {
    i2 != null && (a += `${me$1(e)}: ${i2}; `);
  }), a ? a.trim() : void 0;
}
function me$1(t3) {
  return t3.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function ce(t3) {
  return t3.replace(/[-_]([a-z])/g, (a, e) => e.toUpperCase());
}
function f$1(t3) {
  if (t3 == null) return;
  let a = +t3;
  return Number.isNaN(a) ? void 0 : a;
}
function _e(t3) {
  let a = zt(t3).toString();
  return a ? "?" + a : "";
}
function zt(t3) {
  let a = {};
  for (let e in t3) t3[e] != null && (a[e] = t3[e]);
  return new URLSearchParams(a);
}
var Re = (t3, a) => !t3 || !a ? false : t3.contains(a) ? true : Re(t3, a.getRootNode().host);
var bt = "mux.com", Xt = () => {
  try {
    return "3.13.0";
  } catch {
  }
  return "UNKNOWN";
}, qt = Xt(), be = () => qt, ht = (t3, { token: a, customDomain: e = bt, thumbnailTime: i2, programTime: r11 } = {}) => {
  var u2;
  let s3 = a == null ? i2 : void 0, { aud: d2 } = (u2 = ae$2(a)) != null ? u2 : {};
  if (!(a && d2 !== "t")) return `https://image.${e}/${t3}/thumbnail.webp${_e({ token: a, time: s3, program_time: r11 })}`;
}, gt = (t3, { token: a, customDomain: e = bt, programStartTime: i2, programEndTime: r11 } = {}) => {
  var d2;
  let { aud: s3 } = (d2 = ae$2(a)) != null ? d2 : {};
  if (!(a && s3 !== "s")) return `https://image.${e}/${t3}/storyboard.vtt${_e({ token: a, format: "webp", program_start_time: i2, program_end_time: r11 })}`;
}, ee$1 = (t3) => {
  if (t3) {
    if ([h$2.LIVE, h$2.ON_DEMAND].includes(t3)) return t3;
    if (t3 != null && t3.includes("live")) return h$2.LIVE;
  }
};
var Qt = { crossorigin: "crossOrigin", playsinline: "playsInline" };
function ft(t3) {
  var a;
  return (a = Qt[t3]) != null ? a : ce(t3);
}
var U, B$1, C, pe = class {
  constructor(a, e) {
    h$1(this, U);
    h$1(this, B$1);
    h$1(this, C, []);
    y(this, U, a), y(this, B$1, e);
  }
  [Symbol.iterator]() {
    return l$1(this, C).values();
  }
  get length() {
    return l$1(this, C).length;
  }
  get value() {
    var a;
    return (a = l$1(this, C).join(" ")) != null ? a : "";
  }
  set value(a) {
    var e;
    a !== this.value && (y(this, C, []), this.add(...(e = a == null ? void 0 : a.split(" ")) != null ? e : []));
  }
  toString() {
    return this.value;
  }
  item(a) {
    return l$1(this, C)[a];
  }
  values() {
    return l$1(this, C).values();
  }
  keys() {
    return l$1(this, C).keys();
  }
  forEach(a) {
    l$1(this, C).forEach(a);
  }
  add(...a) {
    var e, i2;
    a.forEach((r11) => {
      this.contains(r11) || l$1(this, C).push(r11);
    }), !(this.value === "" && !((e = l$1(this, U)) != null && e.hasAttribute(`${l$1(this, B$1)}`))) && ((i2 = l$1(this, U)) == null || i2.setAttribute(`${l$1(this, B$1)}`, `${this.value}`));
  }
  remove(...a) {
    var e;
    a.forEach((i2) => {
      l$1(this, C).splice(l$1(this, C).indexOf(i2), 1);
    }), (e = l$1(this, U)) == null || e.setAttribute(`${l$1(this, B$1)}`, `${this.value}`);
  }
  contains(a) {
    return l$1(this, C).includes(a);
  }
  toggle(a, e) {
    return typeof e != "undefined" ? e ? (this.add(a), true) : (this.remove(a), false) : this.contains(a) ? (this.remove(a), false) : (this.add(a), true);
  }
  replace(a, e) {
    this.remove(a), this.add(e);
  }
};
U = /* @__PURE__ */ new WeakMap(), B$1 = /* @__PURE__ */ new WeakMap(), C = /* @__PURE__ */ new WeakMap();
var yt = `[mux-player ${be()}]`;
function O(...t3) {
  console.warn(yt, ...t3);
}
function k(...t3) {
  console.error(yt, ...t3);
}
function Oe(t3) {
  var e;
  let a = (e = t3.message) != null ? e : "";
  t3.context && (a += ` ${t3.context}`), t3.file && (a += ` ${x$2("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${t3.file}`), O(a);
}
var E$2 = { AUTOPLAY: "autoplay", CROSSORIGIN: "crossorigin", LOOP: "loop", MUTED: "muted", PLAYSINLINE: "playsinline", PRELOAD: "preload" }, P$1 = { VOLUME: "volume", PLAYBACKRATE: "playbackrate", MUTED: "muted" }, Tt = Object.freeze({ length: 0, start(t3) {
  let a = t3 >>> 0;
  if (a >= this.length) throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${a}) is greater than or equal to the maximum bound (${this.length}).`);
  return 0;
}, end(t3) {
  let a = t3 >>> 0;
  if (a >= this.length) throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${a}) is greater than or equal to the maximum bound (${this.length}).`);
  return 0;
} }), ea = Object.values(E$2).filter((t3) => E$2.PLAYSINLINE !== t3), ta = Object.values(P$1), aa = [...ea, ...ta], Le = class extends _2.HTMLElement {
  static get observedAttributes() {
    return aa;
  }
  constructor() {
    super();
  }
  attributeChangedCallback(a, e, i2) {
    var r11, s3;
    switch (a) {
      case P$1.MUTED: {
        this.media && (this.media.muted = i2 != null, this.media.defaultMuted = i2 != null);
        return;
      }
      case P$1.VOLUME: {
        let d2 = (r11 = f$1(i2)) != null ? r11 : 1;
        this.media && (this.media.volume = d2);
        return;
      }
      case P$1.PLAYBACKRATE: {
        let d2 = (s3 = f$1(i2)) != null ? s3 : 1;
        this.media && (this.media.playbackRate = d2, this.media.defaultPlaybackRate = d2);
        return;
      }
    }
  }
  play() {
    var a, e;
    return (e = (a = this.media) == null ? void 0 : a.play()) != null ? e : Promise.reject();
  }
  pause() {
    var a;
    (a = this.media) == null || a.pause();
  }
  load() {
    var a;
    (a = this.media) == null || a.load();
  }
  get media() {
    var a;
    return (a = this.shadowRoot) == null ? void 0 : a.querySelector("mux-video");
  }
  get audioTracks() {
    return this.media.audioTracks;
  }
  get videoTracks() {
    return this.media.videoTracks;
  }
  get audioRenditions() {
    return this.media.audioRenditions;
  }
  get videoRenditions() {
    return this.media.videoRenditions;
  }
  get paused() {
    var a, e;
    return (e = (a = this.media) == null ? void 0 : a.paused) != null ? e : true;
  }
  get duration() {
    var a, e;
    return (e = (a = this.media) == null ? void 0 : a.duration) != null ? e : NaN;
  }
  get ended() {
    var a, e;
    return (e = (a = this.media) == null ? void 0 : a.ended) != null ? e : false;
  }
  get buffered() {
    var a, e;
    return (e = (a = this.media) == null ? void 0 : a.buffered) != null ? e : Tt;
  }
  get seekable() {
    var a, e;
    return (e = (a = this.media) == null ? void 0 : a.seekable) != null ? e : Tt;
  }
  get readyState() {
    var a, e;
    return (e = (a = this.media) == null ? void 0 : a.readyState) != null ? e : 0;
  }
  get videoWidth() {
    var a, e;
    return (e = (a = this.media) == null ? void 0 : a.videoWidth) != null ? e : 0;
  }
  get videoHeight() {
    var a, e;
    return (e = (a = this.media) == null ? void 0 : a.videoHeight) != null ? e : 0;
  }
  get currentSrc() {
    var a, e;
    return (e = (a = this.media) == null ? void 0 : a.currentSrc) != null ? e : "";
  }
  get currentTime() {
    var a, e;
    return (e = (a = this.media) == null ? void 0 : a.currentTime) != null ? e : 0;
  }
  set currentTime(a) {
    this.media && (this.media.currentTime = Number(a));
  }
  get volume() {
    var a, e;
    return (e = (a = this.media) == null ? void 0 : a.volume) != null ? e : 1;
  }
  set volume(a) {
    this.media && (this.media.volume = Number(a));
  }
  get playbackRate() {
    var a, e;
    return (e = (a = this.media) == null ? void 0 : a.playbackRate) != null ? e : 1;
  }
  set playbackRate(a) {
    this.media && (this.media.playbackRate = Number(a));
  }
  get defaultPlaybackRate() {
    var a;
    return (a = f$1(this.getAttribute(P$1.PLAYBACKRATE))) != null ? a : 1;
  }
  set defaultPlaybackRate(a) {
    a != null ? this.setAttribute(P$1.PLAYBACKRATE, `${a}`) : this.removeAttribute(P$1.PLAYBACKRATE);
  }
  get crossOrigin() {
    return te$1(this, E$2.CROSSORIGIN);
  }
  set crossOrigin(a) {
    this.setAttribute(E$2.CROSSORIGIN, `${a}`);
  }
  get autoplay() {
    return te$1(this, E$2.AUTOPLAY) != null;
  }
  set autoplay(a) {
    a ? this.setAttribute(E$2.AUTOPLAY, typeof a == "string" ? a : "") : this.removeAttribute(E$2.AUTOPLAY);
  }
  get loop() {
    return te$1(this, E$2.LOOP) != null;
  }
  set loop(a) {
    a ? this.setAttribute(E$2.LOOP, "") : this.removeAttribute(E$2.LOOP);
  }
  get muted() {
    var a, e;
    return (e = (a = this.media) == null ? void 0 : a.muted) != null ? e : false;
  }
  set muted(a) {
    this.media && (this.media.muted = !!a);
  }
  get defaultMuted() {
    return te$1(this, E$2.MUTED) != null;
  }
  set defaultMuted(a) {
    a ? this.setAttribute(E$2.MUTED, "") : this.removeAttribute(E$2.MUTED);
  }
  get playsInline() {
    return te$1(this, E$2.PLAYSINLINE) != null;
  }
  set playsInline(a) {
    k("playsInline is set to true by default and is not currently supported as a setter.");
  }
  get preload() {
    return this.media ? this.media.preload : this.getAttribute("preload");
  }
  set preload(a) {
    ["", "none", "metadata", "auto"].includes(a) ? this.setAttribute(E$2.PRELOAD, a) : this.removeAttribute(E$2.PRELOAD);
  }
};
function te$1(t3, a) {
  return t3.media ? t3.media.getAttribute(a) : t3.getAttribute(a);
}
var Me = Le;
var vt = `:host {
  --media-control-display: var(--controls);
  --media-loading-indicator-display: var(--loading-indicator);
  --media-dialog-display: var(--dialog);
  --media-play-button-display: var(--play-button);
  --media-live-button-display: var(--live-button);
  --media-seek-backward-button-display: var(--seek-backward-button);
  --media-seek-forward-button-display: var(--seek-forward-button);
  --media-mute-button-display: var(--mute-button);
  --media-captions-button-display: var(--captions-button);
  --media-captions-menu-button-display: var(--captions-menu-button, var(--media-captions-button-display));
  --media-rendition-menu-button-display: var(--rendition-menu-button);
  --media-audio-track-menu-button-display: var(--audio-track-menu-button);
  --media-airplay-button-display: var(--airplay-button);
  --media-pip-button-display: var(--pip-button);
  --media-fullscreen-button-display: var(--fullscreen-button);
  --media-cast-button-display: var(--cast-button, var(--_cast-button-drm-display));
  --media-playback-rate-button-display: var(--playback-rate-button);
  --media-playback-rate-menu-button-display: var(--playback-rate-menu-button);
  --media-volume-range-display: var(--volume-range);
  --media-time-range-display: var(--time-range);
  --media-time-display-display: var(--time-display);
  --media-duration-display-display: var(--duration-display);
  --media-title-display-display: var(--title-display);

  display: inline-block;
  line-height: 0;
  width: 100%;
}

a {
  color: #fff;
  font-size: 0.9em;
  text-decoration: underline;
}

media-theme {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
  direction: ltr;
}

media-poster-image {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
}

media-poster-image:not([src]):not([placeholdersrc]) {
  display: none;
}

::part(top),
[part~='top'] {
  --media-control-display: var(--controls, var(--top-controls));
  --media-play-button-display: var(--play-button, var(--top-play-button));
  --media-live-button-display: var(--live-button, var(--top-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--top-mute-button));
  --media-captions-button-display: var(--captions-button, var(--top-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--top-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--top-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--top-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--top-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--top-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --captions-menu-button,
    var(--media-playback-rate-button-display, var(--top-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--top-volume-range));
  --media-time-range-display: var(--time-range, var(--top-time-range));
  --media-time-display-display: var(--time-display, var(--top-time-display));
  --media-duration-display-display: var(--duration-display, var(--top-duration-display));
  --media-title-display-display: var(--title-display, var(--top-title-display));
}

::part(center),
[part~='center'] {
  --media-control-display: var(--controls, var(--center-controls));
  --media-play-button-display: var(--play-button, var(--center-play-button));
  --media-live-button-display: var(--live-button, var(--center-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--center-mute-button));
  --media-captions-button-display: var(--captions-button, var(--center-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--center-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--center-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--center-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--center-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--center-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--center-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--center-volume-range));
  --media-time-range-display: var(--time-range, var(--center-time-range));
  --media-time-display-display: var(--time-display, var(--center-time-display));
  --media-duration-display-display: var(--duration-display, var(--center-duration-display));
}

::part(bottom),
[part~='bottom'] {
  --media-control-display: var(--controls, var(--bottom-controls));
  --media-play-button-display: var(--play-button, var(--bottom-play-button));
  --media-live-button-display: var(--live-button, var(--bottom-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));
  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--bottom-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--bottom-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--bottom-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--bottom-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));
  --media-time-range-display: var(--time-range, var(--bottom-time-range));
  --media-time-display-display: var(--time-display, var(--bottom-time-display));
  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));
  --media-title-display-display: var(--title-display, var(--bottom-title-display));
}

:host([no-tooltips]) {
  --media-tooltip-display: none;
}
`;
var ae$1 = /* @__PURE__ */ new WeakMap(), Ne = class t2 {
  constructor(a, e) {
    this.element = a;
    this.type = e;
    this.element.addEventListener(this.type, this);
    let i2 = ae$1.get(this.element);
    i2 && i2.set(this.type, this);
  }
  set(a) {
    if (typeof a == "function") this.handleEvent = a.bind(this.element);
    else if (typeof a == "object" && typeof a.handleEvent == "function") this.handleEvent = a.handleEvent.bind(a);
    else {
      this.element.removeEventListener(this.type, this);
      let e = ae$1.get(this.element);
      e && e.delete(this.type);
    }
  }
  static for(a) {
    ae$1.has(a.element) || ae$1.set(a.element, /* @__PURE__ */ new Map());
    let e = a.attributeName.slice(2), i2 = ae$1.get(a.element);
    return i2 && i2.has(e) ? i2.get(e) : new t2(a.element, e);
  }
};
function oa(t3, a) {
  return t3 instanceof AttrPart && t3.attributeName.startsWith("on") ? (Ne.for(t3).set(a), t3.element.removeAttributeNS(t3.attributeNamespace, t3.attributeName), true) : false;
}
function na(t3, a) {
  return a instanceof he && t3 instanceof ChildNodePart ? (a.renderInto(t3), true) : false;
}
function sa(t3, a) {
  return a instanceof DocumentFragment && t3 instanceof ChildNodePart ? (a.childNodes.length && t3.replace(...a.childNodes), true) : false;
}
function da(t3, a) {
  if (t3 instanceof AttrPart) {
    let e = t3.attributeNamespace, i2 = t3.element.getAttributeNS(e, t3.attributeName);
    return String(a) !== i2 && (t3.value = String(a)), true;
  }
  return t3.value = String(a), true;
}
function la(t3, a) {
  if (t3 instanceof AttrPart && a instanceof Element) {
    let e = t3.element;
    return e[t3.attributeName] !== a && (t3.element.removeAttributeNS(t3.attributeNamespace, t3.attributeName), e[t3.attributeName] = a), true;
  }
  return false;
}
function ua(t3, a) {
  if (typeof a == "boolean" && t3 instanceof AttrPart) {
    let e = t3.attributeNamespace, i2 = t3.element.hasAttributeNS(e, t3.attributeName);
    return a !== i2 && (t3.booleanValue = a), true;
  }
  return false;
}
function ma(t3, a) {
  return a === false && t3 instanceof ChildNodePart ? (t3.replace(""), true) : false;
}
function ca(t3, a) {
  la(t3, a) || ua(t3, a) || oa(t3, a) || ma(t3, a) || na(t3, a) || sa(t3, a) || da(t3, a);
}
var Se = /* @__PURE__ */ new Map(), At = /* @__PURE__ */ new WeakMap(), Ct = /* @__PURE__ */ new WeakMap(), he = class {
  constructor(a, e, i2) {
    this.strings = a;
    this.values = e;
    this.processor = i2;
    this.stringsKey = this.strings.join("");
  }
  get template() {
    if (Se.has(this.stringsKey)) return Se.get(this.stringsKey);
    {
      let a = D.createElement("template"), e = this.strings.length - 1;
      return a.innerHTML = this.strings.reduce((i2, r11, s3) => i2 + r11 + (s3 < e ? `{{ ${s3} }}` : ""), ""), Se.set(this.stringsKey, a), a;
    }
  }
  renderInto(a) {
    var r11;
    let e = this.template;
    if (At.get(a) !== e) {
      At.set(a, e);
      let s3 = new TemplateInstance(e, this.values, this.processor);
      Ct.set(a, s3), a instanceof ChildNodePart ? a.replace(...s3.children) : a.appendChild(s3);
      return;
    }
    let i2 = Ct.get(a);
    (r11 = i2 == null ? void 0 : i2.update) == null || r11.call(i2, this.values);
  }
}, pa = { processCallback(t3, a, e) {
  var i2;
  if (e) {
    for (let [r11, s3] of a) if (r11 in e) {
      let d2 = (i2 = e[r11]) != null ? i2 : "";
      ca(s3, d2);
    }
  }
} };
function ie$1(t3, ...a) {
  return new he(t3, a, pa);
}
function kt(t3, a) {
  t3.renderInto(a);
}
var ha = (t3) => {
  let { tokens: a } = t3;
  return a.drm ? ":host(:not([cast-receiver])) { --_cast-button-drm-display: none; }" : "";
}, Rt = (t3) => ie$1`
  <style>
    ${ha(t3)}
    ${vt}
  </style>
  ${Ea(t3)}
`, ga = (t3) => {
  let a = t3.hotKeys ? `${t3.hotKeys}` : "";
  return ee$1(t3.streamType) === "live" && (a += " noarrowleft noarrowright"), a;
}, fa = { TOP: "top", CENTER: "center", BOTTOM: "bottom", LAYER: "layer", MEDIA_LAYER: "media-layer", POSTER_LAYER: "poster-layer", VERTICAL_LAYER: "vertical-layer", CENTERED_LAYER: "centered-layer", GESTURE_LAYER: "gesture-layer", CONTROLLER_LAYER: "controller", BUTTON: "button", RANGE: "range", THUMB: "thumb", DISPLAY: "display", CONTROL_BAR: "control-bar", MENU_BUTTON: "menu-button", MENU: "menu", MENU_ITEM: "menu-item", OPTION: "option", POSTER: "poster", LIVE: "live", PLAY: "play", PRE_PLAY: "pre-play", SEEK_BACKWARD: "seek-backward", SEEK_FORWARD: "seek-forward", MUTE: "mute", CAPTIONS: "captions", AIRPLAY: "airplay", PIP: "pip", FULLSCREEN: "fullscreen", CAST: "cast", PLAYBACK_RATE: "playback-rate", VOLUME: "volume", TIME: "time", TITLE: "title", AUDIO_TRACK: "audio-track", RENDITION: "rendition" }, ya = Object.values(fa).join(", "), Ea = (t3) => {
  var a, e, i2, r11, s3, d2, u2, b2, R2, j2, z2, A2, T2, x2, F2, g2, ue2, X2, q2, He2, $e2, Fe2, Ye2, We2, Ze2, Ge2, je2, ze2, Xe2, qe2, Qe2, Je2, et2, tt2, at2, it2, rt2, ot2, nt2, st2, dt2;
  return ie$1`
  <media-theme
    template="${t3.themeTemplate || false}"
    defaultstreamtype="${(a = t3.defaultStreamType) != null ? a : false}"
    hotkeys="${ga(t3) || false}"
    nohotkeys="${t3.noHotKeys || !t3.hasSrc || false}"
    noautoseektolive="${!!((e = t3.streamType) != null && e.includes(h$2.LIVE)) && t3.targetLiveWindow !== 0}"
    novolumepref="${t3.novolumepref || false}"
    nomutedpref="${t3.nomutedpref || false}"
    disabled="${!t3.hasSrc || t3.isDialogOpen}"
    audio="${(i2 = t3.audio) != null ? i2 : false}"
    style="${(r11 = ct({ "--media-primary-color": t3.primaryColor, "--media-secondary-color": t3.secondaryColor, "--media-accent-color": t3.accentColor })) != null ? r11 : false}"
    defaultsubtitles="${!t3.defaultHiddenCaptions}"
    forwardseekoffset="${(s3 = t3.forwardSeekOffset) != null ? s3 : false}"
    backwardseekoffset="${(d2 = t3.backwardSeekOffset) != null ? d2 : false}"
    playbackrates="${(u2 = t3.playbackRates) != null ? u2 : false}"
    defaultshowremainingtime="${(b2 = t3.defaultShowRemainingTime) != null ? b2 : false}"
    defaultduration="${(R2 = t3.defaultDuration) != null ? R2 : false}"
    hideduration="${(j2 = t3.hideDuration) != null ? j2 : false}"
    title="${(z2 = t3.title) != null ? z2 : false}"
    videotitle="${(A2 = t3.videoTitle) != null ? A2 : false}"
    proudlydisplaymuxbadge="${(T2 = t3.proudlyDisplayMuxBadge) != null ? T2 : false}"
    exportparts="${ya}"
    onclose="${t3.onCloseErrorDialog}"
    onfocusin="${t3.onFocusInErrorDialog}"
  >
    <mux-video
      slot="media"
      inert="${(x2 = t3.noHotKeys) != null ? x2 : false}"
      target-live-window="${(F2 = t3.targetLiveWindow) != null ? F2 : false}"
      stream-type="${(g2 = ee$1(t3.streamType)) != null ? g2 : false}"
      crossorigin="${(ue2 = t3.crossOrigin) != null ? ue2 : ""}"
      playsinline
      autoplay="${(X2 = t3.autoplay) != null ? X2 : false}"
      muted="${(q2 = t3.muted) != null ? q2 : false}"
      loop="${(He2 = t3.loop) != null ? He2 : false}"
      preload="${($e2 = t3.preload) != null ? $e2 : false}"
      debug="${(Fe2 = t3.debug) != null ? Fe2 : false}"
      prefer-cmcd="${(Ye2 = t3.preferCmcd) != null ? Ye2 : false}"
      disable-tracking="${(We2 = t3.disableTracking) != null ? We2 : false}"
      disable-cookies="${(Ze2 = t3.disableCookies) != null ? Ze2 : false}"
      prefer-playback="${(Ge2 = t3.preferPlayback) != null ? Ge2 : false}"
      start-time="${t3.startTime != null ? t3.startTime : false}"
      initial-bandwidth-estimate-kbps="${t3.initialBandwidthEstimateKbps != null ? t3.initialBandwidthEstimateKbps : false}"
      initial-estimate-segments="${t3.initialEstimateSegments != null ? t3.initialEstimateSegments : false}"
      min-preload-segments="${t3.minPreloadSegments != null ? t3.minPreloadSegments : false}"
      beacon-collection-domain="${(je2 = t3.beaconCollectionDomain) != null ? je2 : false}"
      player-init-time="${(ze2 = t3.playerInitTime) != null ? ze2 : false}"
      player-software-name="${(Xe2 = t3.playerSoftwareName) != null ? Xe2 : false}"
      player-software-version="${(qe2 = t3.playerSoftwareVersion) != null ? qe2 : false}"
      env-key="${(Qe2 = t3.envKey) != null ? Qe2 : false}"
      custom-domain="${(Je2 = t3.customDomain) != null ? Je2 : false}"
      src="${t3.src ? t3.src : t3.playbackId ? Dn(t3) : false}"
      cast-src="${t3.src ? t3.src : t3.playbackId ? Dn(t3) : false}"
      cast-receiver="${(et2 = t3.castReceiver) != null ? et2 : false}"
      drm-token="${(at2 = (tt2 = t3.tokens) == null ? void 0 : tt2.drm) != null ? at2 : false}"
      playback-token="${(rt2 = (it2 = t3.tokens) == null ? void 0 : it2.playback) != null ? rt2 : false}"
      exportparts="video"
      disable-pseudo-ended="${(ot2 = t3.disablePseudoEnded) != null ? ot2 : false}"
      max-auto-resolution="${(nt2 = t3.maxAutoResolution) != null ? nt2 : false}"
      cap-rendition-to-player-size="${(st2 = t3.capRenditionToPlayerSize) != null ? st2 : false}"
    >
      ${t3.storyboard ? ie$1`<track label="thumbnails" default kind="metadata" src="${t3.storyboard}" />` : ie$1``}
      <slot></slot>
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${t3.poster ? t3.poster : false}"
        placeholdersrc="${(dt2 = t3.placeholder) != null ? dt2 : false}"
      ></media-poster-image>
    </slot>
  </media-theme>
`;
};
var Lt = (t3) => t3.charAt(0).toUpperCase() + t3.slice(1), Ta = (t3, a = false) => {
  var e, i2;
  if (t3.muxCode) {
    let r11 = Lt((e = t3.errorCategory) != null ? e : "video"), s3 = V((i2 = t3.errorCategory) != null ? i2 : k$2.VIDEO);
    if (t3.muxCode === C$1.NETWORK_OFFLINE) return x$2("Your device appears to be offline", a);
    if (t3.muxCode === C$1.NETWORK_TOKEN_EXPIRED) return x$2("{category} URL has expired", a).format({ category: r11 });
    if ([C$1.NETWORK_TOKEN_SUB_MISMATCH, C$1.NETWORK_TOKEN_AUD_MISMATCH, C$1.NETWORK_TOKEN_AUD_MISSING, C$1.NETWORK_TOKEN_MALFORMED].includes(t3.muxCode)) return x$2("{category} URL is formatted incorrectly", a).format({ category: r11 });
    if (t3.muxCode === C$1.NETWORK_TOKEN_MISSING) return x$2("Invalid {categoryName} URL", a).format({ categoryName: s3 });
    if (t3.muxCode === C$1.NETWORK_NOT_FOUND) return x$2("{category} does not exist", a).format({ category: r11 });
    if (t3.muxCode === C$1.NETWORK_NOT_READY) {
      let d2 = t3.streamType === "live" ? "Live stream" : "Video";
      return x$2("{mediaType} is not currently available", a).format({ mediaType: d2 });
    }
  }
  if (t3.code) {
    if (t3.code === T$1.MEDIA_ERR_NETWORK) return x$2("Network Error", a);
    if (t3.code === T$1.MEDIA_ERR_DECODE) return x$2("Media Error", a);
    if (t3.code === T$1.MEDIA_ERR_SRC_NOT_SUPPORTED) return x$2("Source Not Supported", a);
  }
  return x$2("Error", a);
}, va = (t3, a = false) => {
  var e, i2;
  if (t3.muxCode) {
    let r11 = Lt((e = t3.errorCategory) != null ? e : "video"), s3 = V((i2 = t3.errorCategory) != null ? i2 : k$2.VIDEO);
    return t3.muxCode === C$1.NETWORK_OFFLINE ? x$2("Check your internet connection and try reloading this video.", a) : t3.muxCode === C$1.NETWORK_TOKEN_EXPIRED ? x$2("The video’s secured {tokenNamePrefix}-token has expired.", a).format({ tokenNamePrefix: s3 }) : t3.muxCode === C$1.NETWORK_TOKEN_SUB_MISMATCH ? x$2("The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.", a).format({ tokenNamePrefix: s3 }) : t3.muxCode === C$1.NETWORK_TOKEN_MALFORMED ? x$2("{category} URL is formatted incorrectly", a).format({ category: r11 }) : [C$1.NETWORK_TOKEN_AUD_MISMATCH, C$1.NETWORK_TOKEN_AUD_MISSING].includes(t3.muxCode) ? x$2("The {tokenNamePrefix}-token is formatted with incorrect information.", a).format({ tokenNamePrefix: s3 }) : [C$1.NETWORK_TOKEN_MISSING, C$1.NETWORK_INVALID_URL].includes(t3.muxCode) ? x$2("The video URL or {tokenNamePrefix}-token are formatted with incorrect or incomplete information.", a).format({ tokenNamePrefix: s3 }) : t3.muxCode === C$1.NETWORK_NOT_FOUND ? "" : t3.message;
  }
  return t3.code && (t3.code === T$1.MEDIA_ERR_NETWORK || t3.code === T$1.MEDIA_ERR_DECODE || t3.code === T$1.MEDIA_ERR_SRC_NOT_SUPPORTED), t3.message;
}, Mt = (t3, a = false) => {
  let e = Ta(t3, a).toString(), i2 = va(t3, a).toString();
  return { title: e, message: i2 };
}, Aa = (t3) => {
  if (t3.muxCode) {
    if (t3.muxCode === C$1.NETWORK_TOKEN_EXPIRED) return "403-expired-token.md";
    if (t3.muxCode === C$1.NETWORK_TOKEN_MALFORMED) return "403-malformatted-token.md";
    if ([C$1.NETWORK_TOKEN_AUD_MISMATCH, C$1.NETWORK_TOKEN_AUD_MISSING].includes(t3.muxCode)) return "403-incorrect-aud-value.md";
    if (t3.muxCode === C$1.NETWORK_TOKEN_SUB_MISMATCH) return "403-playback-id-mismatch.md";
    if (t3.muxCode === C$1.NETWORK_TOKEN_MISSING) return "missing-signed-tokens.md";
    if (t3.muxCode === C$1.NETWORK_NOT_FOUND) return "404-not-found.md";
    if (t3.muxCode === C$1.NETWORK_NOT_READY) return "412-not-playable.md";
  }
  if (t3.code) {
    if (t3.code === T$1.MEDIA_ERR_NETWORK) return "";
    if (t3.code === T$1.MEDIA_ERR_DECODE) return "media-decode-error.md";
    if (t3.code === T$1.MEDIA_ERR_SRC_NOT_SUPPORTED) return "media-src-not-supported.md";
  }
  return "";
}, Ie = (t3, a) => {
  let e = Aa(t3);
  return { message: t3.message, context: t3.context, file: e };
};
var St = `<template id="media-theme-gerwig">
  <style>
    @keyframes pre-play-hide {
      0% {
        transform: scale(1);
        opacity: 1;
      }

      30% {
        transform: scale(0.7);
      }

      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    :host {
      --_primary-color: var(--media-primary-color, #fff);
      --_secondary-color: var(--media-secondary-color, transparent);
      --_accent-color: var(--media-accent-color, #fa50b5);
      --_text-color: var(--media-text-color, #000);

      --media-icon-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_accent-color);
      --media-time-buffered-color: rgba(255, 255, 255, 0.4);
      --media-preview-time-text-shadow: none;
      --media-control-height: 14px;
      --media-control-padding: 6px;
      --media-tooltip-container-margin: 6px;
      --media-tooltip-distance: 18px;

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --_secondary-color: var(--media-secondary-color, black);
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
      background-color: var(--media-control-background);
    }

    /*
     * 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast.
     */
    media-controller {
      --media-webkit-text-track-transform: translateY(0) scale(0.98);
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused], :not([userinactive])) {
      --media-webkit-text-track-transform: translateY(-50px) scale(0.98);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    /*
     * CSS specific to iOS devices.
     * See: https://stackoverflow.com/questions/30102792/css-media-query-to-target-only-ios-devices/60220757#60220757
     */
    @supports (-webkit-touch-callout: none) {
      /* Disable subtitle adjusting for iOS Safari */
      media-controller[mediaisfullscreen] {
        --media-webkit-text-track-transform: unset;
        --media-webkit-text-track-transition: unset;
      }
    }

    media-time-range {
      --media-box-padding-left: 6px;
      --media-box-padding-right: 6px;
      --media-range-bar-color: var(--_accent-color);
      --media-time-range-buffered-color: var(--_primary-color);
      --media-range-track-color: transparent;
      --media-range-track-background: rgba(255, 255, 255, 0.4);
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_accent-color) 25%,
        var(--_accent-color)
      );
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-transform: scale(0);
      --media-range-thumb-transition: transform 0.3s;
      --media-range-thumb-opacity: 1;
      --media-preview-background: var(--_primary-color);
      --media-box-arrow-background: var(--_primary-color);
      --media-preview-thumbnail-border: 5px solid var(--_primary-color);
      --media-preview-border-radius: 5px;
      --media-text-color: var(--_text-color);
      --media-control-hover-background: transparent;
      --media-preview-chapter-text-shadow: none;
      color: var(--_accent-color);
      padding: 0 6px;
    }

    :host([audio]) media-time-range {
      --media-preview-time-padding: 1.5px 6px;
      --media-preview-box-margin: 0 0 -5px;
    }

    media-time-range:hover {
      --media-range-thumb-transform: scale(1);
    }

    media-preview-thumbnail {
      border-bottom-width: 0;
    }

    [part~='menu'] {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      bottom: 50px;
      padding: 2.5px 10px;
    }

    [part~='menu']::part(indicator) {
      fill: var(--_accent-color);
    }

    [part~='menu']::part(menu-item) {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 6px 10px;
      min-height: 34px;
    }

    [part~='menu']::part(checked) {
      font-weight: 700;
    }

    media-captions-menu,
    media-rendition-menu,
    media-audio-track-menu,
    media-playback-rate-menu {
      position: absolute; /* ensure they don't take up space in DOM on load */
      --media-menu-background: var(--_primary-color);
      --media-menu-item-checked-background: transparent;
      --media-text-color: var(--_text-color);
      --media-menu-item-hover-background: transparent;
      --media-menu-item-hover-outline: var(--_accent-color) solid 1px;
    }

    media-rendition-menu {
      min-width: 140px;
    }

    /* The icon is a circle so make it 16px high instead of 14px for more balance. */
    media-audio-track-menu-button {
      --media-control-padding: 5px;
      --media-control-height: 16px;
    }

    media-playback-rate-menu-button {
      --media-control-padding: 6px 3px;
      min-width: 4.4ch;
    }

    media-playback-rate-menu {
      --media-menu-flex-direction: row;
      --media-menu-item-checked-background: var(--_accent-color);
      --media-menu-item-checked-indicator-display: none;
      margin-right: 6px;
      padding: 0;
      --media-menu-gap: 0.25em;
    }

    media-playback-rate-menu[part~='menu']::part(menu-item) {
      padding: 6px 6px 6px 8px;
    }

    media-playback-rate-menu[part~='menu']::part(checked) {
      color: #fff;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is([part*='button'], [part*='range'], [part*='display']) {
      border-radius: 3px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot~='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    media-control-bar {
      --gradient-steps:
        hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%, hsl(0 0% 0% / 0.104) 22.5%,
        hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%, hsl(0 0% 0% / 0.45) 47.1%,
        hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%, hsl(0 0% 0% / 0.825) 71%,
        hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%, hsl(0 0% 0%) 100%;
    }

    :host([title]) media-control-bar[slot='top-chrome']::before,
    :host([videotitle]) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to top, var(--gradient-steps));
      opacity: 0.8;
      pointer-events: none;
    }

    :host(:not([audio])) media-control-bar[part~='bottom']::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to bottom, var(--gradient-steps));
      opacity: 0.8;
      z-index: 1;
      pointer-events: none;
    }

    media-control-bar[part~='bottom'] > * {
      z-index: 20;
    }

    media-control-bar[part~='bottom'] {
      padding: 6px 6px;
    }

    media-control-bar[slot~='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      --media-tooltip-display: none;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-control-padding: 0;
      width: 40px;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    [breakpointsm] .center-controls media-play-button {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      transition: background 0.4s;
      padding: 24px;
      --media-control-background: #000;
      --media-control-hover-background: var(--_accent-color);
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 20px;
      width: max(33px, min(8%, 40px));
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback {
      display: grid;
      align-items: initial;
      justify-content: initial;
      height: 100%;
      overflow: hidden;
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback media-play-button {
      place-self: var(--_pre-playback-place, center);
      grid-area: 1 / 1;
      margin: 16px;
    }

    /* Show and hide controls or pre-playback state */

    [breakpointsm]:is([mediahasplayed], :not([mediapaused])):not([audio])
      .center-controls.pre-playback
      media-play-button {
      /* Using \`forwards\` would lead to a laggy UI after the animation got in the end state */
      animation: 0.3s linear pre-play-hide;
      opacity: 0;
      pointer-events: none;
    }

    .autoplay-unmute {
      --media-control-hover-background: transparent;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .autoplay-unmute-btn {
      --media-control-height: 16px;
      border-radius: 8px;
      background: #000;
      color: var(--_primary-color);
      display: flex;
      align-items: center;
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }

    .autoplay-unmute-btn:hover {
      background: var(--_accent-color);
    }

    [breakpointsm] .autoplay-unmute-btn {
      --media-control-height: 30px;
      padding: 14px 24px;
      font-size: 26px;
    }

    .autoplay-unmute-btn svg {
      margin: 0 6px 0 0;
    }

    [breakpointsm] .autoplay-unmute-btn svg {
      margin: 0 10px 0 0;
    }

    media-controller:not([audio]):not([mediahasplayed]) *:is(media-control-bar, media-time-range) {
      display: none;
    }

    media-error-dialog:not([mediaerrorcode]) {
      opacity: 0;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_primary-color) 25%,
        var(--_primary-color)
      );
      --media-control-hover-background: none;
    }

    media-time-display {
      white-space: nowrap;
    }

    /* Generic style for explicitly disabled controls */
    media-control-bar[part~='bottom'] [disabled],
    media-control-bar[part~='bottom'] [aria-disabled='true'] {
      opacity: 60%;
      cursor: not-allowed;
    }

    media-text-display {
      --media-font-size: 16px;
      --media-control-padding: 14px;
      font-weight: 500;
    }

    media-play-button.animated *:is(g, path) {
      transition: all 0.3s;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt1 {
      opacity: 0;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt2 {
      transform-origin: center center;
      transform: scaleY(0);
    }

    media-play-button.animated[mediapaused] .play-icon {
      clip-path: inset(0 0 0 0);
    }

    media-play-button.animated:not([mediapaused]) .play-icon {
      clip-path: inset(0 0 0 100%);
    }

    media-seek-forward-button,
    media-seek-backward-button {
      --media-font-weight: 400;
    }

    .mute-icon {
      display: inline-block;
    }

    .mute-icon :is(path, g) {
      transition: opacity 0.5s;
    }

    .muted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='low'] :is(.volume-medium, .volume-high),
    media-mute-button[mediavolumelevel='medium'] :is(.volume-high) {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .unmuted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .muted {
      opacity: 1;
    }

    /**
     * Our defaults for these buttons are to hide them at small sizes
     * users can override this with CSS
     */
    media-controller:not([breakpointsm]):not([audio]) {
      --bottom-play-button: none;
      --bottom-seek-backward-button: none;
      --bottom-seek-forward-button: none;
      --bottom-time-display: none;
      --bottom-playback-rate-menu-button: none;
      --bottom-pip-button: none;
    }

    [part='mux-badge'] {
      position: absolute;
      bottom: 10px;
      right: 10px;
      z-index: 2;
      opacity: 0.6;
      transition:
        opacity 0.2s ease-in-out,
        bottom 0.2s ease-in-out;
    }

    [part='mux-badge']:hover {
      opacity: 1;
    }

    [part='mux-badge'] a {
      font-size: 14px;
      font-family: var(--_font-family);
      color: var(--_primary-color);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    [part='mux-badge'] .mux-badge-text {
      transition: opacity 0.5s ease-in-out;
      opacity: 0;
    }

    [part='mux-badge'] .mux-badge-logo {
      width: 40px;
      height: auto;
      display: inline-block;
    }

    [part='mux-badge'] .mux-badge-logo svg {
      width: 100%;
      height: 100%;
      fill: white;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'],
    media-controller:not([userinactive]) [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      transition: bottom 0.1s ease-in-out;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      transition: bottom 0.2s ease-in-out 0.62s;
    }

    media-controller:not([userinactive]) [part='mux-badge'] .mux-badge-text,
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] .mux-badge-text {
      opacity: 1;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] .mux-badge-text {
      opacity: 0;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive])[mediahasplayed] [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      bottom: calc(28px + var(--media-control-height, 0px) + var(--media-control-padding, 0px) * 2);
    }
  </style>

  <template partial="TitleDisplay">
    <template if="videotitle">
      <template if="videotitle != true">
        <media-text-display part="top title display" class="title-display">{{videotitle}}</media-text-display>
      </template>
    </template>
    <template if="!videotitle">
      <template if="title">
        <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
      </template>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      class="animated"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon">
        <g class="play-icon">
          <path
            d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
          />
        </g>
        <g class="pause-icon">
          <path
            class="pause-icon-pt1"
            d="M5.90709 0H2.96889C2.46857 0 2.06299 0.405585 2.06299 0.9059V13.0941C2.06299 13.5944 2.46857 14 2.96889 14H5.90709C6.4074 14 6.81299 13.5944 6.81299 13.0941V0.9059C6.81299 0.405585 6.4074 0 5.90709 0Z"
          />
          <path
            class="pause-icon-pt2"
            d="M15.1571 0H12.2189C11.7186 0 11.313 0.405585 11.313 0.9059V13.0941C11.313 13.5944 11.7186 14 12.2189 14H15.1571C15.6574 14 16.063 13.5944 16.063 13.0941V0.9059C16.063 0.405585 15.6574 0 15.1571 0Z"
          />
        </g>
      </svg>
    </media-play-button>
  </template>

  <template partial="PrePlayButton">
    <media-play-button
      part="{{section ?? 'center'}} play button pre-play"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon" style="transform: translate(3px, 0)">
        <path
          d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <path
          d="M3.65 2.07888L0.0864 6.7279C-0.0288 6.87812 -0.0288 7.12188 0.0864 7.2721L3.65 11.9211C3.7792 12.0896 4 11.9703 4 11.7321V2.26787C4 2.02968 3.7792 1.9104 3.65 2.07888Z"
        />
        <text transform="translate(6 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <g>
          <text transform="translate(-1 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset}}
          </text>
          <path
            d="M18.35 11.9211L21.9136 7.2721C22.0288 7.12188 22.0288 6.87812 21.9136 6.7279L18.35 2.07888C18.2208 1.91041 18 2.02968 18 2.26787V11.7321C18 11.9703 18.2208 12.0896 18.35 11.9211Z"
          />
        </g>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" slot="icon" class="mute-icon" aria-hidden="true">
        <g class="unmuted">
          <path
            d="M6.76786 1.21233L3.98606 3.98924H1.19937C0.593146 3.98924 0.101743 4.51375 0.101743 5.1607V6.96412L0 6.99998L0.101743 7.03583V8.83926C0.101743 9.48633 0.593146 10.0108 1.19937 10.0108H3.98606L6.76773 12.7877C7.23561 13.2547 8 12.9007 8 12.2171V1.78301C8 1.09925 7.23574 0.745258 6.76786 1.21233Z"
          />
          <path
            class="volume-low"
            d="M10 3.54781C10.7452 4.55141 11.1393 5.74511 11.1393 6.99991C11.1393 8.25471 10.7453 9.44791 10 10.4515L10.7988 11.0496C11.6734 9.87201 12.1356 8.47161 12.1356 6.99991C12.1356 5.52821 11.6735 4.12731 10.7988 2.94971L10 3.54781Z"
          />
          <path
            class="volume-medium"
            d="M12.3778 2.40086C13.2709 3.76756 13.7428 5.35806 13.7428 7.00026C13.7428 8.64246 13.2709 10.233 12.3778 11.5992L13.2106 12.1484C14.2107 10.6185 14.739 8.83796 14.739 7.00016C14.739 5.16236 14.2107 3.38236 13.2106 1.85156L12.3778 2.40086Z"
          />
          <path
            class="volume-high"
            d="M15.5981 0.75L14.7478 1.2719C15.7937 2.9919 16.3468 4.9723 16.3468 7C16.3468 9.0277 15.7937 11.0082 14.7478 12.7281L15.5981 13.25C16.7398 11.3722 17.343 9.211 17.343 7C17.343 4.789 16.7398 2.6268 15.5981 0.75Z"
          />
        </g>
        <g class="muted">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.39976 4.98924H1.19937C1.19429 4.98924 1.17777 4.98961 1.15296 5.01609C1.1271 5.04369 1.10174 5.09245 1.10174 5.1607V8.83926C1.10174 8.90761 1.12714 8.95641 1.15299 8.984C1.17779 9.01047 1.1943 9.01084 1.19937 9.01084H4.39977L7 11.6066V2.39357L4.39976 4.98924ZM7.47434 1.92006C7.4743 1.9201 7.47439 1.92002 7.47434 1.92006V1.92006ZM6.76773 12.7877L3.98606 10.0108H1.19937C0.593146 10.0108 0.101743 9.48633 0.101743 8.83926V7.03583L0 6.99998L0.101743 6.96412V5.1607C0.101743 4.51375 0.593146 3.98924 1.19937 3.98924H3.98606L6.76786 1.21233C7.23574 0.745258 8 1.09925 8 1.78301V12.2171C8 12.9007 7.23561 13.2547 6.76773 12.7877Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2677 9.30323C15.463 9.49849 15.7796 9.49849 15.9749 9.30323C16.1701 9.10796 16.1701 8.79138 15.9749 8.59612L14.2071 6.82841L15.9749 5.06066C16.1702 4.8654 16.1702 4.54882 15.9749 4.35355C15.7796 4.15829 15.4631 4.15829 15.2678 4.35355L13.5 6.1213L11.7322 4.35348C11.537 4.15822 11.2204 4.15822 11.0251 4.35348C10.8298 4.54874 10.8298 4.86532 11.0251 5.06058L12.7929 6.82841L11.0251 8.59619C10.8299 8.79146 10.8299 9.10804 11.0251 9.3033C11.2204 9.49856 11.537 9.49856 11.7323 9.3033L13.5 7.53552L15.2677 9.30323Z"
          />
        </g>
      </svg>
    </media-mute-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M15.9891 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.989C0 13.0996 0.9004 14 2.011 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0ZM17 11.9891C17 12.5465 16.5465 13 15.9891 13H2.011C1.4536 13 1.0001 12.5465 1.0001 11.9891V2.0109C1.0001 1.4535 1.4536 0.9999 2.011 0.9999H15.9891C16.5465 0.9999 17 1.4535 17 2.0109V11.9891Z"
        />
        <path
          d="M15.356 5.67822H8.19523C8.03253 5.67822 7.90063 5.81012 7.90063 5.97282V11.3836C7.90063 11.5463 8.03253 11.6782 8.19523 11.6782H15.356C15.5187 11.6782 15.6506 11.5463 15.6506 11.3836V5.97282C15.6506 5.81012 15.5187 5.67822 15.356 5.67822Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="CaptionsMenu">
    <media-captions-menu-button part="bottom captions button">
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="on">
        <path
          d="M15.989 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9004 14 2.011 14H15.989C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.989 0ZM4.2292 8.7639C4.5954 9.1902 5.0935 9.4031 5.7233 9.4031C6.1852 9.4031 6.5544 9.301 6.8302 9.0969C7.1061 8.8933 7.2863 8.614 7.3702 8.26H8.4322C8.3062 8.884 8.0093 9.3733 7.5411 9.7273C7.0733 10.0813 6.4703 10.2581 5.732 10.2581C5.108 10.2581 4.5699 10.1219 4.1168 9.8489C3.6637 9.5759 3.3141 9.1946 3.0685 8.7058C2.8224 8.2165 2.6994 7.6511 2.6994 7.009C2.6994 6.3611 2.8224 5.7927 3.0685 5.3034C3.3141 4.8146 3.6637 4.4323 4.1168 4.1559C4.5699 3.88 5.108 3.7418 5.732 3.7418C6.4703 3.7418 7.0733 3.922 7.5411 4.2818C8.0094 4.6422 8.3062 5.1461 8.4322 5.794H7.3702C7.2862 5.4283 7.106 5.1368 6.8302 4.921C6.5544 4.7052 6.1852 4.5968 5.7233 4.5968C5.0934 4.5968 4.5954 4.8116 4.2292 5.2404C3.8635 5.6696 3.6804 6.259 3.6804 7.009C3.6804 7.7531 3.8635 8.3381 4.2292 8.7639ZM11.0974 8.7639C11.4636 9.1902 11.9617 9.4031 12.5915 9.4031C13.0534 9.4031 13.4226 9.301 13.6984 9.0969C13.9743 8.8933 14.1545 8.614 14.2384 8.26H15.3004C15.1744 8.884 14.8775 9.3733 14.4093 9.7273C13.9415 10.0813 13.3385 10.2581 12.6002 10.2581C11.9762 10.2581 11.4381 10.1219 10.985 9.8489C10.5319 9.5759 10.1823 9.1946 9.9367 8.7058C9.6906 8.2165 9.5676 7.6511 9.5676 7.009C9.5676 6.3611 9.6906 5.7927 9.9367 5.3034C10.1823 4.8146 10.5319 4.4323 10.985 4.1559C11.4381 3.88 11.9762 3.7418 12.6002 3.7418C13.3385 3.7418 13.9415 3.922 14.4093 4.2818C14.8776 4.6422 15.1744 5.1461 15.3004 5.794H14.2384C14.1544 5.4283 13.9742 5.1368 13.6984 4.921C13.4226 4.7052 13.0534 4.5968 12.5915 4.5968C11.9616 4.5968 11.4636 4.8116 11.0974 5.2404C10.7317 5.6696 10.5486 6.259 10.5486 7.009C10.5486 7.7531 10.7317 8.3381 11.0974 8.7639Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="off">
        <path
          d="M5.73219 10.258C5.10819 10.258 4.57009 10.1218 4.11699 9.8488C3.66389 9.5758 3.31429 9.1945 3.06869 8.7057C2.82259 8.2164 2.69958 7.651 2.69958 7.0089C2.69958 6.361 2.82259 5.7926 3.06869 5.3033C3.31429 4.8145 3.66389 4.4322 4.11699 4.1558C4.57009 3.8799 5.10819 3.7417 5.73219 3.7417C6.47049 3.7417 7.07348 3.9219 7.54128 4.2817C8.00958 4.6421 8.30638 5.146 8.43238 5.7939H7.37039C7.28639 5.4282 7.10618 5.1367 6.83039 4.9209C6.55459 4.7051 6.18538 4.5967 5.72348 4.5967C5.09358 4.5967 4.59559 4.8115 4.22939 5.2403C3.86369 5.6695 3.68058 6.2589 3.68058 7.0089C3.68058 7.753 3.86369 8.338 4.22939 8.7638C4.59559 9.1901 5.09368 9.403 5.72348 9.403C6.18538 9.403 6.55459 9.3009 6.83039 9.0968C7.10629 8.8932 7.28649 8.6139 7.37039 8.2599H8.43238C8.30638 8.8839 8.00948 9.3732 7.54128 9.7272C7.07348 10.0812 6.47049 10.258 5.73219 10.258Z"
        />
        <path
          d="M12.6003 10.258C11.9763 10.258 11.4382 10.1218 10.9851 9.8488C10.532 9.5758 10.1824 9.1945 9.93685 8.7057C9.69075 8.2164 9.56775 7.651 9.56775 7.0089C9.56775 6.361 9.69075 5.7926 9.93685 5.3033C10.1824 4.8145 10.532 4.4322 10.9851 4.1558C11.4382 3.8799 11.9763 3.7417 12.6003 3.7417C13.3386 3.7417 13.9416 3.9219 14.4094 4.2817C14.8777 4.6421 15.1745 5.146 15.3005 5.7939H14.2385C14.1545 5.4282 13.9743 5.1367 13.6985 4.9209C13.4227 4.7051 13.0535 4.5967 12.5916 4.5967C11.9617 4.5967 11.4637 4.8115 11.0975 5.2403C10.7318 5.6695 10.5487 6.2589 10.5487 7.0089C10.5487 7.753 10.7318 8.338 11.0975 8.7638C11.4637 9.1901 11.9618 9.403 12.5916 9.403C13.0535 9.403 13.4227 9.3009 13.6985 9.0968C13.9744 8.8932 14.1546 8.6139 14.2385 8.2599H15.3005C15.1745 8.8839 14.8776 9.3732 14.4094 9.7272C13.9416 10.0812 13.3386 10.258 12.6003 10.258Z"
        />
        <path
          d="M15.9891 1C16.5465 1 17 1.4535 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H2.0109C1.4535 13 1 12.5465 1 11.9891V2.0109C1 1.4535 1.4535 0.9999 2.0109 0.9999L15.9891 1ZM15.9891 0H2.0109C0.9003 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9003 14 2.0109 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0Z"
        />
      </svg>
    </media-captions-menu-button>
    <media-captions-menu
      hidden
      anchor="auto"
      part="bottom captions menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg></div
    ></media-captions-menu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M16.1383 0H1.8618C0.8335 0 0 0.8335 0 1.8617V10.1382C0 11.1664 0.8335 12 1.8618 12H3.076C3.1204 11.9433 3.1503 11.8785 3.2012 11.826L4.004 11H1.8618C1.3866 11 1 10.6134 1 10.1382V1.8617C1 1.3865 1.3866 0.9999 1.8618 0.9999H16.1383C16.6135 0.9999 17.0001 1.3865 17.0001 1.8617V10.1382C17.0001 10.6134 16.6135 11 16.1383 11H13.9961L14.7989 11.826C14.8499 11.8785 14.8798 11.9432 14.9241 12H16.1383C17.1665 12 18.0001 11.1664 18.0001 10.1382V1.8617C18 0.8335 17.1665 0 16.1383 0Z"
        />
        <path
          d="M9.55061 8.21903C9.39981 8.06383 9.20001 7.98633 9.00011 7.98633C8.80021 7.98633 8.60031 8.06383 8.44951 8.21903L4.09771 12.697C3.62471 13.1838 3.96961 13.9998 4.64831 13.9998H13.3518C14.0304 13.9998 14.3754 13.1838 13.9023 12.697L9.55061 8.21903Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M1.00745 4.39539L1.01445 1.98789C1.01605 1.43049 1.47085 0.978289 2.02835 0.979989L6.39375 0.992589L6.39665 -0.007411L2.03125 -0.020011C0.920646 -0.023211 0.0176463 0.874489 0.0144463 1.98509L0.00744629 4.39539H1.00745Z"
        />
        <path
          d="M17.0144 2.03431L17.0076 4.39541H18.0076L18.0144 2.03721C18.0176 0.926712 17.1199 0.0237125 16.0093 0.0205125L11.6439 0.0078125L11.641 1.00781L16.0064 1.02041C16.5638 1.02201 17.016 1.47681 17.0144 2.03431Z"
        />
        <path
          d="M16.9925 9.60498L16.9855 12.0124C16.9839 12.5698 16.5291 13.022 15.9717 13.0204L11.6063 13.0078L11.6034 14.0078L15.9688 14.0204C17.0794 14.0236 17.9823 13.1259 17.9855 12.0153L17.9925 9.60498H16.9925Z"
        />
        <path
          d="M0.985626 11.9661L0.992426 9.60498H-0.0074737L-0.0142737 11.9632C-0.0174737 13.0738 0.880226 13.9767 1.99083 13.98L6.35623 13.9926L6.35913 12.9926L1.99373 12.98C1.43633 12.9784 0.983926 12.5236 0.985626 11.9661Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M5.39655 -0.0200195L5.38955 2.38748C5.38795 2.94488 4.93315 3.39708 4.37565 3.39538L0.0103463 3.38278L0.00744629 4.38278L4.37285 4.39538C5.48345 4.39858 6.38635 3.50088 6.38965 2.39028L6.39665 -0.0200195H5.39655Z"
        />
        <path
          d="M12.6411 2.36891L12.6479 0.0078125H11.6479L11.6411 2.36601C11.6379 3.47651 12.5356 4.37951 13.6462 4.38271L18.0116 4.39531L18.0145 3.39531L13.6491 3.38271C13.0917 3.38111 12.6395 2.92641 12.6411 2.36891Z"
        />
        <path
          d="M12.6034 14.0204L12.6104 11.613C12.612 11.0556 13.0668 10.6034 13.6242 10.605L17.9896 10.6176L17.9925 9.61759L13.6271 9.60499C12.5165 9.60179 11.6136 10.4995 11.6104 11.6101L11.6034 14.0204H12.6034Z"
        />
        <path
          d="M5.359 11.6315L5.3522 13.9926H6.3522L6.359 11.6344C6.3622 10.5238 5.4645 9.62088 4.3539 9.61758L-0.0115043 9.60498L-0.0144043 10.605L4.351 10.6176C4.9084 10.6192 5.3607 11.074 5.359 11.6315Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M16.0072 0H2.0291C0.9185 0 0.0181 0.9003 0.0181 2.011V5.5009C0.357 5.5016 0.6895 5.5275 1.0181 5.5669V2.011C1.0181 1.4536 1.4716 1 2.029 1H16.0072C16.5646 1 17.0181 1.4536 17.0181 2.011V11.9891C17.0181 12.5465 16.5646 13 16.0072 13H8.4358C8.4746 13.3286 8.4999 13.6611 8.4999 13.9999H16.0071C17.1177 13.9999 18.018 13.0996 18.018 11.989V2.011C18.0181 0.9003 17.1178 0 16.0072 0ZM0 6.4999V7.4999C3.584 7.4999 6.5 10.4159 6.5 13.9999H7.5C7.5 9.8642 4.1357 6.4999 0 6.4999ZM0 8.7499V9.7499C2.3433 9.7499 4.25 11.6566 4.25 13.9999H5.25C5.25 11.1049 2.895 8.7499 0 8.7499ZM0.0181 11V14H3.0181C3.0181 12.3431 1.675 11 0.0181 11Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M15.9891 0H2.01103C0.900434 0 3.35947e-05 0.9003 3.35947e-05 2.011V5.5009C0.338934 5.5016 0.671434 5.5275 1.00003 5.5669V2.011C1.00003 1.4536 1.45353 1 2.01093 1H15.9891C16.5465 1 17 1.4536 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H8.41773C8.45653 13.3286 8.48183 13.6611 8.48183 13.9999H15.989C17.0996 13.9999 17.9999 13.0996 17.9999 11.989V2.011C18 0.9003 17.0997 0 15.9891 0ZM-0.0180664 6.4999V7.4999C3.56593 7.4999 6.48193 10.4159 6.48193 13.9999H7.48193C7.48193 9.8642 4.11763 6.4999 -0.0180664 6.4999ZM-0.0180664 8.7499V9.7499C2.32523 9.7499 4.23193 11.6566 4.23193 13.9999H5.23193C5.23193 11.1049 2.87693 8.7499 -0.0180664 8.7499ZM3.35947e-05 11V14H3.00003C3.00003 12.3431 1.65693 11 3.35947e-05 11Z"
        />
        <path d="M2.15002 5.634C5.18352 6.4207 7.57252 8.8151 8.35282 11.8499H15.8501V2.1499H2.15002V5.634Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="LiveButton">
    <media-live-button part="{{section ?? 'top'}} live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <span slot="text">Live</span>
    </media-live-button>
  </template>

  <template partial="PlaybackRateMenu">
    <media-playback-rate-menu-button part="bottom playback-rate button"></media-playback-rate-menu-button>
    <media-playback-rate-menu
      hidden
      anchor="auto"
      rates="{{playbackrates}}"
      exportparts="menu-item"
      part="bottom playback-rate menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-playback-rate-menu>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range part="bottom time range" disabled="{{disabled}}" aria-disabled="{{disabled}}" exportparts="thumb">
      <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
      <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
      <media-preview-time-display slot="preview"></media-preview-time-display>
      <div slot="preview" part="arrow"></div>
    </media-time-range>
  </template>

  <template partial="AudioTrackMenu">
    <media-audio-track-menu-button part="bottom audio-track button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 16">
        <path d="M9 15A7 7 0 1 1 9 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 9 0a8 8 0 0 0 0 16Z" />
        <path
          d="M5.2 6.3a.5.5 0 0 1 .5.5v2.4a.5.5 0 1 1-1 0V6.8a.5.5 0 0 1 .5-.5Zm2.4-2.4a.5.5 0 0 1 .5.5v7.2a.5.5 0 0 1-1 0V4.4a.5.5 0 0 1 .5-.5ZM10 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.4-.8a.5.5 0 0 1 .5.5v5.6a.5.5 0 0 1-1 0V5.2a.5.5 0 0 1 .5-.5Z"
        />
      </svg>
    </media-audio-track-menu-button>
    <media-audio-track-menu
      hidden
      anchor="auto"
      part="bottom audio-track menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-audio-track-menu>
  </template>

  <template partial="RenditionMenu">
    <media-rendition-menu-button part="bottom rendition button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 14">
        <path
          d="M2.25 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      </svg>
    </media-rendition-menu-button>
    <media-rendition-menu
      hidden
      anchor="auto"
      part="bottom rendition menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            opacity: 0;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-rendition-menu>
  </template>

  <template partial="MuxBadge">
    <div part="mux-badge">
      <a href="https://www.mux.com/player" target="_blank">
        <span class="mux-badge-text">Powered by</span>
        <div class="mux-badge-logo">
          <svg
            viewBox="0 0 1600 500"
            style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2"
          >
            <g>
              <path
                d="M994.287,93.486c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m0,-93.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,68.943 -56.09,125.033 -125.032,125.033c-68.942,-0 -125.03,-56.09 -125.03,-125.033l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,137.853 112.149,250.003 249.999,250.003c137.851,-0 250.001,-112.15 250.001,-250.003l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M1537.51,468.511c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m-275.883,-218.509l-143.33,143.329c-24.402,24.402 -24.402,63.966 0,88.368c24.402,24.402 63.967,24.402 88.369,-0l143.33,-143.329l143.328,143.329c24.402,24.4 63.967,24.402 88.369,-0c24.403,-24.402 24.403,-63.966 0.001,-88.368l-143.33,-143.329l0.001,-0.004l143.329,-143.329c24.402,-24.402 24.402,-63.965 0,-88.367c-24.402,-24.402 -63.967,-24.402 -88.369,-0l-143.329,143.328l-143.329,-143.328c-24.402,-24.401 -63.967,-24.402 -88.369,-0c-24.402,24.402 -24.402,63.965 0,88.367l143.329,143.329l0,0.004Z"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M437.511,468.521c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m23.915,-463.762c-23.348,-9.672 -50.226,-4.327 -68.096,13.544l-143.331,143.329l-143.33,-143.329c-17.871,-17.871 -44.747,-23.216 -68.096,-13.544c-23.349,9.671 -38.574,32.455 -38.574,57.729l0,375.026c0,34.51 27.977,62.486 62.487,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-224.173l80.843,80.844c24.404,24.402 63.965,24.402 88.369,-0l80.843,-80.844l0,224.173c0,34.51 27.976,62.486 62.486,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-375.026c0,-25.274 -15.224,-48.058 -38.573,-57.729"
                style="fill-rule: nonzero"
              ></path>
            </g>
          </svg>
        </div>
      </a>
    </div>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:470"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
    style="--_pre-playback-place:{{preplaybackplace ?? 'center'}}"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>

    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>

    <template if="!audio">
      <media-error-dialog slot="dialog" noautohide></media-error-dialog>
      <!-- Pre-playback UI -->
      <!-- same for both on-demand and live -->
      <div slot="centered-chrome" class="center-controls pre-playback">
        <template if="!breakpointsm">{{>PlayButton section="center"}}</template>
        <template if="breakpointsm">{{>PrePlayButton section="center"}}</template>
      </div>

      <!-- Mux Badge -->
      <template if="proudlydisplaymuxbadge"> {{>MuxBadge}} </template>

      <!-- Autoplay centered unmute button -->
      <!--
        todo: figure out how show this with available state variables
        needs to show when:
        - autoplay is enabled
        - playback has been successful
        - audio is muted
        - in place / instead of the pre-plaback play button
        - not to show again after user has interacted with this button
          - OR user has interacted with the mute button in the control bar
      -->
      <!--
        There should be a >MuteButton to the left of the "Unmute" text, but a templating bug
        makes it appear even if commented out in the markup, add it back when code is un-commented
      -->
      <!-- <div slot="centered-chrome" class="autoplay-unmute">
        <div role="button" class="autoplay-unmute-btn">Unmute</div>
      </div> -->

      <template if="streamtype == 'on-demand'">
        <template if="breakpointsm">
          <media-control-bar part="control-bar top" slot="top-chrome">{{>TitleDisplay}} </media-control-bar>
        </template>
        {{>TimeRange}}
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>MuteButton}}
          {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>PlaybackRateMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}}
          {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <media-control-bar part="control-bar top" slot="top-chrome">
          {{>LiveButton}}
          <template if="breakpointsm"> {{>TitleDisplay}} </template>
        </media-control-bar>
        <template if="targetlivewindow > 0">{{>TimeRange}}</template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="targetlivewindow > 0">{{>SeekBackwardButton}} {{>SeekForwardButton}}</template>
          {{>MuteButton}} {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}}
          {{>FullscreenButton}}
        </media-control-bar>
      </template>
    </template>

    <template if="audio">
      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="breakpointsm"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          {{>MuteButton}}
          <template if="breakpointsm">{{>VolumeRange}}</template>
          {{>TimeDisplay}} {{>TimeRange}}
          <template if="breakpointsm">{{>PlaybackRateMenu}}</template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>LiveButton section="bottom"}} {{>MuteButton}}
          <template if="breakpointsm">
            {{>VolumeRange}}
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          </template>
          <template if="targetlivewindow > 0"> {{>TimeDisplay}} {{>TimeRange}} </template>
          <template if="!targetlivewindow"><div class="spacer"></div></template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>
    </template>

    <slot></slot>
  </media-controller>
</template>
`;
var Pe$1 = D.createElement("template");
"innerHTML" in Pe$1 && (Pe$1.innerHTML = St);
var Nt, It, ye$1 = class ye extends MediaThemeElement {
};
ye$1.template = (It = (Nt = Pe$1.content) == null ? void 0 : Nt.children) == null ? void 0 : It[0];
_2.customElements.get("media-theme-gerwig") || _2.customElements.define("media-theme-gerwig", ye$1);
var La = "gerwig", N = { SRC: "src", POSTER: "poster" }, o$1 = { STYLE: "style", DEFAULT_HIDDEN_CAPTIONS: "default-hidden-captions", PRIMARY_COLOR: "primary-color", SECONDARY_COLOR: "secondary-color", ACCENT_COLOR: "accent-color", FORWARD_SEEK_OFFSET: "forward-seek-offset", BACKWARD_SEEK_OFFSET: "backward-seek-offset", PLAYBACK_TOKEN: "playback-token", THUMBNAIL_TOKEN: "thumbnail-token", STORYBOARD_TOKEN: "storyboard-token", FULLSCREEN_ELEMENT: "fullscreen-element", DRM_TOKEN: "drm-token", STORYBOARD_SRC: "storyboard-src", THUMBNAIL_TIME: "thumbnail-time", AUDIO: "audio", NOHOTKEYS: "nohotkeys", HOTKEYS: "hotkeys", PLAYBACK_RATES: "playbackrates", DEFAULT_SHOW_REMAINING_TIME: "default-show-remaining-time", DEFAULT_DURATION: "default-duration", TITLE: "title", VIDEO_TITLE: "video-title", PLACEHOLDER: "placeholder", THEME: "theme", DEFAULT_STREAM_TYPE: "default-stream-type", TARGET_LIVE_WINDOW: "target-live-window", EXTRA_SOURCE_PARAMS: "extra-source-params", NO_VOLUME_PREF: "no-volume-pref", NO_MUTED_PREF: "no-muted-pref", CAST_RECEIVER: "cast-receiver", NO_TOOLTIPS: "no-tooltips", PROUDLY_DISPLAY_MUX_BADGE: "proudly-display-mux-badge", DISABLE_PSEUDO_ENDED: "disable-pseudo-ended" }, Be = ["audio", "backwardseekoffset", "defaultduration", "defaultshowremainingtime", "defaultsubtitles", "noautoseektolive", "disabled", "exportparts", "forwardseekoffset", "hideduration", "hotkeys", "nohotkeys", "playbackrates", "defaultstreamtype", "streamtype", "style", "targetlivewindow", "template", "title", "videotitle", "novolumepref", "nomutedpref", "proudlydisplaymuxbadge"];
function Ma(t3, a) {
  var i2, r11, s3;
  return { src: !t3.playbackId && t3.src, playbackId: t3.playbackId, hasSrc: !!t3.playbackId || !!t3.src || !!t3.currentSrc, poster: t3.poster, storyboard: ((i2 = t3.media) == null ? void 0 : i2.currentSrc) && t3.storyboard, storyboardSrc: t3.getAttribute(o$1.STORYBOARD_SRC), fullscreenElement: t3.getAttribute(o$1.FULLSCREEN_ELEMENT), placeholder: t3.getAttribute("placeholder"), themeTemplate: Na(t3), thumbnailTime: !t3.tokens.thumbnail && t3.thumbnailTime, autoplay: t3.autoplay, crossOrigin: t3.crossOrigin, loop: t3.loop, noHotKeys: t3.hasAttribute(o$1.NOHOTKEYS), hotKeys: t3.getAttribute(o$1.HOTKEYS), muted: t3.muted, paused: t3.paused, preload: t3.preload, envKey: t3.envKey, preferCmcd: t3.preferCmcd, debug: t3.debug, disableTracking: t3.disableTracking, disableCookies: t3.disableCookies, tokens: t3.tokens, beaconCollectionDomain: t3.beaconCollectionDomain, maxResolution: t3.maxResolution, minResolution: t3.minResolution, maxAutoResolution: t3.maxAutoResolution, programStartTime: t3.programStartTime, programEndTime: t3.programEndTime, assetStartTime: t3.assetStartTime, assetEndTime: t3.assetEndTime, renditionOrder: t3.renditionOrder, metadata: t3.metadata, playerInitTime: t3.playerInitTime, playerSoftwareName: t3.playerSoftwareName, playerSoftwareVersion: t3.playerSoftwareVersion, startTime: t3.startTime, initialBandwidthEstimateKbps: t3.initialBandwidthEstimateKbps, initialEstimateSegments: t3.initialEstimateSegments, minPreloadSegments: t3.minPreloadSegments, preferPlayback: t3.preferPlayback, audio: t3.audio, defaultStreamType: t3.defaultStreamType, targetLiveWindow: t3.getAttribute(t$1.TARGET_LIVE_WINDOW), streamType: ee$1(t3.getAttribute(t$1.STREAM_TYPE)), primaryColor: t3.getAttribute(o$1.PRIMARY_COLOR), secondaryColor: t3.getAttribute(o$1.SECONDARY_COLOR), accentColor: t3.getAttribute(o$1.ACCENT_COLOR), forwardSeekOffset: t3.forwardSeekOffset, backwardSeekOffset: t3.backwardSeekOffset, defaultHiddenCaptions: t3.defaultHiddenCaptions, defaultDuration: t3.defaultDuration, defaultShowRemainingTime: t3.defaultShowRemainingTime, hideDuration: Ia(t3), playbackRates: t3.getAttribute(o$1.PLAYBACK_RATES), customDomain: (r11 = t3.getAttribute(t$1.CUSTOM_DOMAIN)) != null ? r11 : void 0, title: t3.getAttribute(o$1.TITLE), videoTitle: (s3 = t3.getAttribute(o$1.VIDEO_TITLE)) != null ? s3 : t3.getAttribute(o$1.TITLE), novolumepref: t3.hasAttribute(o$1.NO_VOLUME_PREF), nomutedpref: t3.hasAttribute(o$1.NO_MUTED_PREF), proudlyDisplayMuxBadge: t3.hasAttribute(o$1.PROUDLY_DISPLAY_MUX_BADGE), castReceiver: t3.castReceiver, disablePseudoEnded: t3.hasAttribute(o$1.DISABLE_PSEUDO_ENDED), capRenditionToPlayerSize: t3.capRenditionToPlayerSize, ...a, extraSourceParams: t3.extraSourceParams };
}
var Sa = media_error_dialog_default.formatErrorMessage;
media_error_dialog_default.formatErrorMessage = (t3) => {
  var a, e;
  if (t3 instanceof T$1) {
    let i2 = Mt(t3, false);
    return `
      ${i2 != null && i2.title ? `<h3>${i2.title}</h3>` : ""}
      ${i2 != null && i2.message || i2 != null && i2.linkUrl ? `<p>
        ${i2 == null ? void 0 : i2.message}
        ${i2 != null && i2.linkUrl ? `<a
              href="${i2.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${(a = i2.linkText) != null ? a : ""} ${x$2("(opens in a new window)")}"
              >${(e = i2.linkText) != null ? e : i2.linkUrl}</a
            >` : ""}
      </p>` : ""}
    `;
  }
  return Sa(t3);
};
function Na(t3) {
  var e, i2;
  let a = t3.theme;
  if (a) {
    let r11 = (i2 = (e = t3.getRootNode()) == null ? void 0 : e.getElementById) == null ? void 0 : i2.call(e, a);
    if (r11 && r11 instanceof HTMLTemplateElement) return r11;
    a.startsWith("media-theme-") || (a = `media-theme-${a}`);
    let s3 = _2.customElements.get(a);
    if (s3 != null && s3.template) return s3.template;
  }
}
function Ia(t3) {
  var e;
  let a = (e = t3.mediaController) == null ? void 0 : e.querySelector("media-time-display");
  return a && getComputedStyle(a).getPropertyValue("--media-duration-display-display").trim() === "none";
}
function Ut(t3) {
  let a = t3.videoTitle ? { video_title: t3.videoTitle } : {};
  return t3.getAttributeNames().filter((e) => e.startsWith("metadata-")).reduce((e, i2) => {
    let r11 = t3.getAttribute(i2);
    return r11 !== null && (e[i2.replace(/^metadata-/, "").replace(/-/g, "_")] = r11), e;
  }, a);
}
var Pa = Object.values(t$1), wa = Object.values(N), Da = Object.values(o$1), Bt = be(), Vt = "mux-player", Kt = { isDialogOpen: false }, Ua = { redundant_streams: true }, re$1, W, oe$1, w, ne$1, Z, se$1, de$1, H, G2, $, le, m, I, $t, Ke, K, Ft, Yt, Wt, Zt, Ve = class extends Me {
  constructor() {
    super();
    h$1(this, m);
    h$1(this, re$1);
    h$1(this, W, false);
    h$1(this, oe$1, {});
    h$1(this, w, true);
    h$1(this, ne$1, new pe(this, "hotkeys"));
    h$1(this, Z);
    h$1(this, se$1, () => p$1(this, m, K).call(this));
    h$1(this, de$1, () => p$1(this, m, K).call(this));
    h$1(this, H, () => p$1(this, m, K).call(this));
    h$1(this, G2);
    h$1(this, $, { ...Kt, onCloseErrorDialog: (e) => {
      var r11;
      ((r11 = e.composedPath()[0]) == null ? void 0 : r11.localName) === "media-error-dialog" && p$1(this, m, Ke).call(this, { isDialogOpen: false });
    }, onFocusInErrorDialog: (e) => {
      var s3;
      if (((s3 = e.composedPath()[0]) == null ? void 0 : s3.localName) !== "media-error-dialog") return;
      Re(this, D.activeElement) || e.preventDefault();
    } });
    h$1(this, le, (e) => {
      var s3;
      let i2 = (s3 = this.media) == null ? void 0 : s3.error;
      if (!(i2 instanceof T$1)) {
        let { message: d2, code: u2 } = i2 != null ? i2 : {};
        i2 = new T$1(d2, u2);
      }
      if (!(i2 != null && i2.fatal)) {
        O(i2), i2.data && O(`${i2.name} data:`, i2.data);
        return;
      }
      let r11 = Ie(i2);
      r11.message && Oe(r11), k(i2), i2.data && k(`${i2.name} data:`, i2.data), p$1(this, m, Ke).call(this, { isDialogOpen: true });
    });
    y(this, re$1, kn()), this.attachShadow({ mode: "open" }), p$1(this, m, $t).call(this), this.isConnected && p$1(this, m, I).call(this);
  }
  static get NAME() {
    return Vt;
  }
  static get VERSION() {
    return Bt;
  }
  static get observedAttributes() {
    var e;
    return [...(e = Me.observedAttributes) != null ? e : [], ...wa, ...Pa, ...Da];
  }
  get mediaTheme() {
    var e;
    return (e = this.shadowRoot) == null ? void 0 : e.querySelector("media-theme");
  }
  get mediaController() {
    var e, i2;
    return (i2 = (e = this.mediaTheme) == null ? void 0 : e.shadowRoot) == null ? void 0 : i2.querySelector("media-controller");
  }
  connectedCallback() {
    p$1(this, m, I).call(this);
    let e = this.media;
    e && (e.metadata = Ut(this));
  }
  disconnectedCallback() {
    var e, i2, r11, s3, d2, u2, b2, R2;
    (e = l$1(this, Z)) == null || e.disconnect(), (i2 = this.media) == null || i2.removeEventListener("streamtypechange", l$1(this, se$1)), (r11 = this.media) == null || r11.removeEventListener("loadstart", l$1(this, de$1)), this.removeEventListener("error", l$1(this, le)), this.media && (this.media.errorTranslator = void 0), (d2 = (s3 = this.media) == null ? void 0 : s3.textTracks) == null || d2.removeEventListener("addtrack", l$1(this, H)), (b2 = (u2 = this.media) == null ? void 0 : u2.textTracks) == null || b2.removeEventListener("removetrack", l$1(this, H)), (R2 = l$1(this, G2)) == null || R2.call(this), y(this, G2, void 0), y(this, W, false);
  }
  attributeChangedCallback(e, i2, r11) {
    switch (p$1(this, m, I).call(this), super.attributeChangedCallback(e, i2, r11), e) {
      case o$1.HOTKEYS:
        l$1(this, ne$1).value = r11;
        break;
      case o$1.THUMBNAIL_TIME: {
        r11 != null && this.tokens.thumbnail && O(x$2("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.").toString());
        break;
      }
      case o$1.THUMBNAIL_TOKEN: {
        if (r11) {
          let d2 = ae$2(r11);
          if (d2) {
            let { aud: u2 } = d2, b2 = de$3.THUMBNAIL;
            u2 !== b2 && O(x$2("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({ aud: u2, expectedAud: b2, tokenNamePrefix: "thumbnail" }));
          }
        }
        break;
      }
      case o$1.STORYBOARD_TOKEN: {
        if (r11) {
          let d2 = ae$2(r11);
          if (d2) {
            let { aud: u2 } = d2, b2 = de$3.STORYBOARD;
            u2 !== b2 && O(x$2("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({ aud: u2, expectedAud: b2, tokenNamePrefix: "storyboard" }));
          }
        }
        break;
      }
      case o$1.DRM_TOKEN: {
        if (r11) {
          let d2 = ae$2(r11);
          if (d2) {
            let { aud: u2 } = d2, b2 = de$3.DRM;
            u2 !== b2 && O(x$2("The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.").format({ aud: u2, expectedAud: b2, tokenNamePrefix: "drm" }));
          }
        }
        break;
      }
      case t$1.PLAYBACK_ID: {
        r11 != null && r11.includes("?token") && k(x$2("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({ playbackId: r11 }));
        break;
      }
      case t$1.STREAM_TYPE: {
        r11 && ![h$2.LIVE, h$2.ON_DEMAND, h$2.UNKNOWN].includes(r11) ? ["ll-live", "live:dvr", "ll-live:dvr"].includes(this.streamType) ? this.targetLiveWindow = r11.includes("dvr") ? Number.POSITIVE_INFINITY : 0 : Oe({ file: "invalid-stream-type.md", message: x$2("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({ streamType: this.streamType }) }) : r11 === h$2.LIVE ? this.getAttribute(o$1.TARGET_LIVE_WINDOW) == null && (this.targetLiveWindow = 0) : this.targetLiveWindow = Number.NaN;
        break;
      }
      case o$1.FULLSCREEN_ELEMENT: {
        if (r11 != null || r11 !== i2) {
          let d2 = D.getElementById(r11), u2 = d2 == null ? void 0 : d2.querySelector("mux-player");
          this.mediaController && d2 && u2 && (this.mediaController.fullscreenElement = d2);
        }
        break;
      }
      case t$1.CAP_RENDITION_TO_PLAYER_SIZE: {
        (r11 == null || r11 !== i2) && (this.capRenditionToPlayerSize = r11 != null ? true : void 0);
        break;
      }
    }
    [t$1.PLAYBACK_ID, N.SRC, o$1.PLAYBACK_TOKEN].includes(e) && i2 !== r11 && y(this, $, { ...l$1(this, $), ...Kt }), p$1(this, m, K).call(this, { [ft(e)]: r11 });
  }
  async requestFullscreen(e) {
    var i2;
    if (!(!this.mediaController || this.mediaController.hasAttribute(MediaUIAttributes.MEDIA_IS_FULLSCREEN))) return (i2 = this.mediaController) == null || i2.dispatchEvent(new _2.CustomEvent(MediaUIEvents.MEDIA_ENTER_FULLSCREEN_REQUEST, { composed: true, bubbles: true })), new Promise((r11, s3) => {
      var d2;
      (d2 = this.mediaController) == null || d2.addEventListener(MediaStateChangeEvents.MEDIA_IS_FULLSCREEN, () => r11(), { once: true });
    });
  }
  async exitFullscreen() {
    var e;
    if (!(!this.mediaController || !this.mediaController.hasAttribute(MediaUIAttributes.MEDIA_IS_FULLSCREEN))) return (e = this.mediaController) == null || e.dispatchEvent(new _2.CustomEvent(MediaUIEvents.MEDIA_EXIT_FULLSCREEN_REQUEST, { composed: true, bubbles: true })), new Promise((i2, r11) => {
      var s3;
      (s3 = this.mediaController) == null || s3.addEventListener(MediaStateChangeEvents.MEDIA_IS_FULLSCREEN, () => i2(), { once: true });
    });
  }
  get preferCmcd() {
    var e;
    return (e = this.getAttribute(t$1.PREFER_CMCD)) != null ? e : void 0;
  }
  set preferCmcd(e) {
    e !== this.preferCmcd && (e ? fr.includes(e) ? this.setAttribute(t$1.PREFER_CMCD, e) : O(`Invalid value for preferCmcd. Must be one of ${fr.join()}`) : this.removeAttribute(t$1.PREFER_CMCD));
  }
  get hasPlayed() {
    var e, i2;
    return (i2 = (e = this.mediaController) == null ? void 0 : e.hasAttribute(MediaUIAttributes.MEDIA_HAS_PLAYED)) != null ? i2 : false;
  }
  get inLiveWindow() {
    var e;
    return (e = this.mediaController) == null ? void 0 : e.hasAttribute(MediaUIAttributes.MEDIA_TIME_IS_LIVE);
  }
  get _hls() {
    var e;
    return (e = this.media) == null ? void 0 : e._hls;
  }
  get mux() {
    var e;
    return (e = this.media) == null ? void 0 : e.mux;
  }
  get theme() {
    var e;
    return (e = this.getAttribute(o$1.THEME)) != null ? e : La;
  }
  set theme(e) {
    this.setAttribute(o$1.THEME, `${e}`);
  }
  get themeProps() {
    let e = this.mediaTheme;
    if (!e) return;
    let i2 = {};
    for (let r11 of e.getAttributeNames()) {
      if (Be.includes(r11)) continue;
      let s3 = e.getAttribute(r11);
      i2[ce(r11)] = s3 === "" ? true : s3;
    }
    return i2;
  }
  set themeProps(e) {
    var r11, s3;
    p$1(this, m, I).call(this);
    let i2 = { ...this.themeProps, ...e };
    for (let d2 in i2) {
      if (Be.includes(d2)) continue;
      let u2 = e == null ? void 0 : e[d2];
      typeof u2 == "boolean" || u2 == null ? (r11 = this.mediaTheme) == null || r11.toggleAttribute(me$1(d2), !!u2) : (s3 = this.mediaTheme) == null || s3.setAttribute(me$1(d2), u2);
    }
  }
  get playbackId() {
    var e;
    return (e = this.getAttribute(t$1.PLAYBACK_ID)) != null ? e : void 0;
  }
  set playbackId(e) {
    e ? this.setAttribute(t$1.PLAYBACK_ID, e) : this.removeAttribute(t$1.PLAYBACK_ID);
  }
  get src() {
    var e, i2;
    return this.playbackId ? (e = M$1(this, N.SRC)) != null ? e : void 0 : (i2 = this.getAttribute(N.SRC)) != null ? i2 : void 0;
  }
  set src(e) {
    e ? this.setAttribute(N.SRC, e) : this.removeAttribute(N.SRC);
  }
  get poster() {
    var r11;
    let e = this.getAttribute(N.POSTER);
    if (e != null) return e;
    let { tokens: i2 } = this;
    if (i2.playback && !i2.thumbnail) {
      O("Missing expected thumbnail token. No poster image will be shown");
      return;
    }
    if (this.playbackId && !this.audio) return ht(this.playbackId, { customDomain: this.customDomain, thumbnailTime: (r11 = this.thumbnailTime) != null ? r11 : this.startTime, programTime: this.programStartTime, token: i2.thumbnail });
  }
  set poster(e) {
    e || e === "" ? this.setAttribute(N.POSTER, e) : this.removeAttribute(N.POSTER);
  }
  get storyboardSrc() {
    var e;
    return (e = this.getAttribute(o$1.STORYBOARD_SRC)) != null ? e : void 0;
  }
  set storyboardSrc(e) {
    e ? this.setAttribute(o$1.STORYBOARD_SRC, e) : this.removeAttribute(o$1.STORYBOARD_SRC);
  }
  get storyboard() {
    let { tokens: e } = this;
    if (this.storyboardSrc && !e.storyboard) return this.storyboardSrc;
    if (!(this.audio || !this.playbackId || !this.streamType || [h$2.LIVE, h$2.UNKNOWN].includes(this.streamType) || e.playback && !e.storyboard)) return gt(this.playbackId, { customDomain: this.customDomain, token: e.storyboard, programStartTime: this.programStartTime, programEndTime: this.programEndTime });
  }
  get audio() {
    return this.hasAttribute(o$1.AUDIO);
  }
  set audio(e) {
    if (!e) {
      this.removeAttribute(o$1.AUDIO);
      return;
    }
    this.setAttribute(o$1.AUDIO, "");
  }
  get hotkeys() {
    return l$1(this, ne$1);
  }
  get nohotkeys() {
    return this.hasAttribute(o$1.NOHOTKEYS);
  }
  set nohotkeys(e) {
    if (!e) {
      this.removeAttribute(o$1.NOHOTKEYS);
      return;
    }
    this.setAttribute(o$1.NOHOTKEYS, "");
  }
  get thumbnailTime() {
    return f$1(this.getAttribute(o$1.THUMBNAIL_TIME));
  }
  set thumbnailTime(e) {
    this.setAttribute(o$1.THUMBNAIL_TIME, `${e}`);
  }
  get videoTitle() {
    var e, i2;
    return (i2 = (e = this.getAttribute(o$1.VIDEO_TITLE)) != null ? e : this.getAttribute(o$1.TITLE)) != null ? i2 : "";
  }
  set videoTitle(e) {
    e !== this.videoTitle && (e ? this.setAttribute(o$1.VIDEO_TITLE, e) : this.removeAttribute(o$1.VIDEO_TITLE));
  }
  get placeholder() {
    var e;
    return (e = M$1(this, o$1.PLACEHOLDER)) != null ? e : "";
  }
  set placeholder(e) {
    this.setAttribute(o$1.PLACEHOLDER, `${e}`);
  }
  get primaryColor() {
    var i2, r11;
    let e = this.getAttribute(o$1.PRIMARY_COLOR);
    if (e != null || this.mediaTheme && (e = (r11 = (i2 = _2.getComputedStyle(this.mediaTheme)) == null ? void 0 : i2.getPropertyValue("--_primary-color")) == null ? void 0 : r11.trim(), e)) return e;
  }
  set primaryColor(e) {
    this.setAttribute(o$1.PRIMARY_COLOR, `${e}`);
  }
  get secondaryColor() {
    var i2, r11;
    let e = this.getAttribute(o$1.SECONDARY_COLOR);
    if (e != null || this.mediaTheme && (e = (r11 = (i2 = _2.getComputedStyle(this.mediaTheme)) == null ? void 0 : i2.getPropertyValue("--_secondary-color")) == null ? void 0 : r11.trim(), e)) return e;
  }
  set secondaryColor(e) {
    this.setAttribute(o$1.SECONDARY_COLOR, `${e}`);
  }
  get accentColor() {
    var i2, r11;
    let e = this.getAttribute(o$1.ACCENT_COLOR);
    if (e != null || this.mediaTheme && (e = (r11 = (i2 = _2.getComputedStyle(this.mediaTheme)) == null ? void 0 : i2.getPropertyValue("--_accent-color")) == null ? void 0 : r11.trim(), e)) return e;
  }
  set accentColor(e) {
    this.setAttribute(o$1.ACCENT_COLOR, `${e}`);
  }
  get defaultShowRemainingTime() {
    return this.hasAttribute(o$1.DEFAULT_SHOW_REMAINING_TIME);
  }
  set defaultShowRemainingTime(e) {
    e ? this.setAttribute(o$1.DEFAULT_SHOW_REMAINING_TIME, "") : this.removeAttribute(o$1.DEFAULT_SHOW_REMAINING_TIME);
  }
  get playbackRates() {
    if (this.hasAttribute(o$1.PLAYBACK_RATES)) return this.getAttribute(o$1.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map((e) => Number(e)).filter((e) => !Number.isNaN(e)).sort((e, i2) => e - i2);
  }
  set playbackRates(e) {
    if (!e) {
      this.removeAttribute(o$1.PLAYBACK_RATES);
      return;
    }
    this.setAttribute(o$1.PLAYBACK_RATES, e.join(" "));
  }
  get forwardSeekOffset() {
    var e;
    return (e = f$1(this.getAttribute(o$1.FORWARD_SEEK_OFFSET))) != null ? e : 10;
  }
  set forwardSeekOffset(e) {
    this.setAttribute(o$1.FORWARD_SEEK_OFFSET, `${e}`);
  }
  get backwardSeekOffset() {
    var e;
    return (e = f$1(this.getAttribute(o$1.BACKWARD_SEEK_OFFSET))) != null ? e : 10;
  }
  set backwardSeekOffset(e) {
    this.setAttribute(o$1.BACKWARD_SEEK_OFFSET, `${e}`);
  }
  get defaultHiddenCaptions() {
    return this.hasAttribute(o$1.DEFAULT_HIDDEN_CAPTIONS);
  }
  set defaultHiddenCaptions(e) {
    e ? this.setAttribute(o$1.DEFAULT_HIDDEN_CAPTIONS, "") : this.removeAttribute(o$1.DEFAULT_HIDDEN_CAPTIONS);
  }
  get defaultDuration() {
    return f$1(this.getAttribute(o$1.DEFAULT_DURATION));
  }
  set defaultDuration(e) {
    e == null ? this.removeAttribute(o$1.DEFAULT_DURATION) : this.setAttribute(o$1.DEFAULT_DURATION, `${e}`);
  }
  get playerInitTime() {
    return this.hasAttribute(t$1.PLAYER_INIT_TIME) ? f$1(this.getAttribute(t$1.PLAYER_INIT_TIME)) : l$1(this, re$1);
  }
  set playerInitTime(e) {
    e != this.playerInitTime && (e == null ? this.removeAttribute(t$1.PLAYER_INIT_TIME) : this.setAttribute(t$1.PLAYER_INIT_TIME, `${+e}`));
  }
  get playerSoftwareName() {
    var e;
    return (e = this.getAttribute(t$1.PLAYER_SOFTWARE_NAME)) != null ? e : Vt;
  }
  get playerSoftwareVersion() {
    var e;
    return (e = this.getAttribute(t$1.PLAYER_SOFTWARE_VERSION)) != null ? e : Bt;
  }
  get beaconCollectionDomain() {
    var e;
    return (e = this.getAttribute(t$1.BEACON_COLLECTION_DOMAIN)) != null ? e : void 0;
  }
  set beaconCollectionDomain(e) {
    e !== this.beaconCollectionDomain && (e ? this.setAttribute(t$1.BEACON_COLLECTION_DOMAIN, e) : this.removeAttribute(t$1.BEACON_COLLECTION_DOMAIN));
  }
  get maxResolution() {
    var e;
    return (e = this.getAttribute(t$1.MAX_RESOLUTION)) != null ? e : void 0;
  }
  set maxResolution(e) {
    e !== this.maxResolution && (e ? this.setAttribute(t$1.MAX_RESOLUTION, e) : this.removeAttribute(t$1.MAX_RESOLUTION));
  }
  get minResolution() {
    var e;
    return (e = this.getAttribute(t$1.MIN_RESOLUTION)) != null ? e : void 0;
  }
  set minResolution(e) {
    e !== this.minResolution && (e ? this.setAttribute(t$1.MIN_RESOLUTION, e) : this.removeAttribute(t$1.MIN_RESOLUTION));
  }
  get maxAutoResolution() {
    var e;
    return (e = this.getAttribute(t$1.MAX_AUTO_RESOLUTION)) != null ? e : void 0;
  }
  set maxAutoResolution(e) {
    e == null ? this.removeAttribute(t$1.MAX_AUTO_RESOLUTION) : this.setAttribute(t$1.MAX_AUTO_RESOLUTION, e);
  }
  get renditionOrder() {
    var e;
    return (e = this.getAttribute(t$1.RENDITION_ORDER)) != null ? e : void 0;
  }
  set renditionOrder(e) {
    e !== this.renditionOrder && (e ? this.setAttribute(t$1.RENDITION_ORDER, e) : this.removeAttribute(t$1.RENDITION_ORDER));
  }
  get programStartTime() {
    return f$1(this.getAttribute(t$1.PROGRAM_START_TIME));
  }
  set programStartTime(e) {
    e == null ? this.removeAttribute(t$1.PROGRAM_START_TIME) : this.setAttribute(t$1.PROGRAM_START_TIME, `${e}`);
  }
  get programEndTime() {
    return f$1(this.getAttribute(t$1.PROGRAM_END_TIME));
  }
  set programEndTime(e) {
    e == null ? this.removeAttribute(t$1.PROGRAM_END_TIME) : this.setAttribute(t$1.PROGRAM_END_TIME, `${e}`);
  }
  get assetStartTime() {
    return f$1(this.getAttribute(t$1.ASSET_START_TIME));
  }
  set assetStartTime(e) {
    e == null ? this.removeAttribute(t$1.ASSET_START_TIME) : this.setAttribute(t$1.ASSET_START_TIME, `${e}`);
  }
  get assetEndTime() {
    return f$1(this.getAttribute(t$1.ASSET_END_TIME));
  }
  set assetEndTime(e) {
    e == null ? this.removeAttribute(t$1.ASSET_END_TIME) : this.setAttribute(t$1.ASSET_END_TIME, `${e}`);
  }
  get extraSourceParams() {
    return this.hasAttribute(o$1.EXTRA_SOURCE_PARAMS) ? [...new URLSearchParams(this.getAttribute(o$1.EXTRA_SOURCE_PARAMS)).entries()].reduce((e, [i2, r11]) => (e[i2] = r11, e), {}) : Ua;
  }
  set extraSourceParams(e) {
    e == null ? this.removeAttribute(o$1.EXTRA_SOURCE_PARAMS) : this.setAttribute(o$1.EXTRA_SOURCE_PARAMS, new URLSearchParams(e).toString());
  }
  get customDomain() {
    var e;
    return (e = this.getAttribute(t$1.CUSTOM_DOMAIN)) != null ? e : void 0;
  }
  set customDomain(e) {
    e !== this.customDomain && (e ? this.setAttribute(t$1.CUSTOM_DOMAIN, e) : this.removeAttribute(t$1.CUSTOM_DOMAIN));
  }
  get envKey() {
    var e;
    return (e = M$1(this, t$1.ENV_KEY)) != null ? e : void 0;
  }
  set envKey(e) {
    this.setAttribute(t$1.ENV_KEY, `${e}`);
  }
  get noVolumePref() {
    return this.hasAttribute(o$1.NO_VOLUME_PREF);
  }
  set noVolumePref(e) {
    e ? this.setAttribute(o$1.NO_VOLUME_PREF, "") : this.removeAttribute(o$1.NO_VOLUME_PREF);
  }
  get noMutedPref() {
    return this.hasAttribute(o$1.NO_MUTED_PREF);
  }
  set noMutedPref(e) {
    e ? this.setAttribute(o$1.NO_MUTED_PREF, "") : this.removeAttribute(o$1.NO_MUTED_PREF);
  }
  get debug() {
    return M$1(this, t$1.DEBUG) != null;
  }
  set debug(e) {
    e ? this.setAttribute(t$1.DEBUG, "") : this.removeAttribute(t$1.DEBUG);
  }
  get disableTracking() {
    return M$1(this, t$1.DISABLE_TRACKING) != null;
  }
  set disableTracking(e) {
    this.toggleAttribute(t$1.DISABLE_TRACKING, !!e);
  }
  get disableCookies() {
    return M$1(this, t$1.DISABLE_COOKIES) != null;
  }
  set disableCookies(e) {
    e ? this.setAttribute(t$1.DISABLE_COOKIES, "") : this.removeAttribute(t$1.DISABLE_COOKIES);
  }
  get streamType() {
    var e, i2, r11;
    return (r11 = (i2 = this.getAttribute(t$1.STREAM_TYPE)) != null ? i2 : (e = this.media) == null ? void 0 : e.streamType) != null ? r11 : h$2.UNKNOWN;
  }
  set streamType(e) {
    this.setAttribute(t$1.STREAM_TYPE, `${e}`);
  }
  get defaultStreamType() {
    var e, i2, r11;
    return (r11 = (i2 = this.getAttribute(o$1.DEFAULT_STREAM_TYPE)) != null ? i2 : (e = this.mediaController) == null ? void 0 : e.getAttribute(o$1.DEFAULT_STREAM_TYPE)) != null ? r11 : h$2.ON_DEMAND;
  }
  set defaultStreamType(e) {
    e ? this.setAttribute(o$1.DEFAULT_STREAM_TYPE, e) : this.removeAttribute(o$1.DEFAULT_STREAM_TYPE);
  }
  get targetLiveWindow() {
    var e, i2;
    return this.hasAttribute(o$1.TARGET_LIVE_WINDOW) ? +this.getAttribute(o$1.TARGET_LIVE_WINDOW) : (i2 = (e = this.media) == null ? void 0 : e.targetLiveWindow) != null ? i2 : Number.NaN;
  }
  set targetLiveWindow(e) {
    e == this.targetLiveWindow || Number.isNaN(e) && Number.isNaN(this.targetLiveWindow) || (e == null ? this.removeAttribute(o$1.TARGET_LIVE_WINDOW) : this.setAttribute(o$1.TARGET_LIVE_WINDOW, `${+e}`));
  }
  get liveEdgeStart() {
    var e;
    return (e = this.media) == null ? void 0 : e.liveEdgeStart;
  }
  get startTime() {
    return f$1(M$1(this, t$1.START_TIME));
  }
  set startTime(e) {
    this.setAttribute(t$1.START_TIME, `${e}`);
  }
  get initialBandwidthEstimateKbps() {
    return f$1(M$1(this, t$1.INITIAL_BANDWIDTH_ESTIMATE_KBPS));
  }
  set initialBandwidthEstimateKbps(e) {
    e == null ? this.removeAttribute(t$1.INITIAL_BANDWIDTH_ESTIMATE_KBPS) : this.setAttribute(t$1.INITIAL_BANDWIDTH_ESTIMATE_KBPS, `${e}`);
  }
  get initialEstimateSegments() {
    return f$1(M$1(this, t$1.INITIAL_ESTIMATE_SEGMENTS));
  }
  set initialEstimateSegments(e) {
    e == null ? this.removeAttribute(t$1.INITIAL_ESTIMATE_SEGMENTS) : this.setAttribute(t$1.INITIAL_ESTIMATE_SEGMENTS, `${e}`);
  }
  get minPreloadSegments() {
    return f$1(M$1(this, t$1.MIN_PRELOAD_SEGMENTS));
  }
  set minPreloadSegments(e) {
    e == null ? this.removeAttribute(t$1.MIN_PRELOAD_SEGMENTS) : this.setAttribute(t$1.MIN_PRELOAD_SEGMENTS, `${e}`);
  }
  get preferPlayback() {
    let e = this.getAttribute(t$1.PREFER_PLAYBACK);
    if (e === te$2.MSE || e === te$2.NATIVE) return e;
  }
  set preferPlayback(e) {
    e !== this.preferPlayback && (e === te$2.MSE || e === te$2.NATIVE ? this.setAttribute(t$1.PREFER_PLAYBACK, e) : this.removeAttribute(t$1.PREFER_PLAYBACK));
  }
  get metadata() {
    var e;
    return (e = this.media) == null ? void 0 : e.metadata;
  }
  set metadata(e) {
    if (p$1(this, m, I).call(this), !this.media) {
      k("underlying media element missing when trying to set metadata. metadata will not be set.");
      return;
    }
    this.media.metadata = { ...Ut(this), ...e };
  }
  get _hlsConfig() {
    var e;
    return (e = this.media) == null ? void 0 : e._hlsConfig;
  }
  set _hlsConfig(e) {
    if (p$1(this, m, I).call(this), !this.media) {
      k("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.");
      return;
    }
    this.media._hlsConfig = e;
  }
  async addCuePoints(e) {
    var i2;
    if (p$1(this, m, I).call(this), !this.media) {
      k("underlying media element missing when trying to addCuePoints. cuePoints will not be added.");
      return;
    }
    return (i2 = this.media) == null ? void 0 : i2.addCuePoints(e);
  }
  get activeCuePoint() {
    var e;
    return (e = this.media) == null ? void 0 : e.activeCuePoint;
  }
  get cuePoints() {
    var e, i2;
    return (i2 = (e = this.media) == null ? void 0 : e.cuePoints) != null ? i2 : [];
  }
  addChapters(e) {
    var i2;
    if (p$1(this, m, I).call(this), !this.media) {
      k("underlying media element missing when trying to addChapters. chapters will not be added.");
      return;
    }
    return (i2 = this.media) == null ? void 0 : i2.addChapters(e);
  }
  get activeChapter() {
    var e;
    return (e = this.media) == null ? void 0 : e.activeChapter;
  }
  get chapters() {
    var e, i2;
    return (i2 = (e = this.media) == null ? void 0 : e.chapters) != null ? i2 : [];
  }
  getStartDate() {
    var e;
    return (e = this.media) == null ? void 0 : e.getStartDate();
  }
  get currentPdt() {
    var e;
    return (e = this.media) == null ? void 0 : e.currentPdt;
  }
  get tokens() {
    let e = this.getAttribute(o$1.PLAYBACK_TOKEN), i2 = this.getAttribute(o$1.DRM_TOKEN), r11 = this.getAttribute(o$1.THUMBNAIL_TOKEN), s3 = this.getAttribute(o$1.STORYBOARD_TOKEN);
    return { ...l$1(this, oe$1), ...e != null ? { playback: e } : {}, ...i2 != null ? { drm: i2 } : {}, ...r11 != null ? { thumbnail: r11 } : {}, ...s3 != null ? { storyboard: s3 } : {} };
  }
  set tokens(e) {
    y(this, oe$1, e != null ? e : {});
  }
  get playbackToken() {
    var e;
    return (e = this.getAttribute(o$1.PLAYBACK_TOKEN)) != null ? e : void 0;
  }
  set playbackToken(e) {
    this.setAttribute(o$1.PLAYBACK_TOKEN, `${e}`);
  }
  get drmToken() {
    var e;
    return (e = this.getAttribute(o$1.DRM_TOKEN)) != null ? e : void 0;
  }
  set drmToken(e) {
    this.setAttribute(o$1.DRM_TOKEN, `${e}`);
  }
  get thumbnailToken() {
    var e;
    return (e = this.getAttribute(o$1.THUMBNAIL_TOKEN)) != null ? e : void 0;
  }
  set thumbnailToken(e) {
    this.setAttribute(o$1.THUMBNAIL_TOKEN, `${e}`);
  }
  get storyboardToken() {
    var e;
    return (e = this.getAttribute(o$1.STORYBOARD_TOKEN)) != null ? e : void 0;
  }
  set storyboardToken(e) {
    this.setAttribute(o$1.STORYBOARD_TOKEN, `${e}`);
  }
  addTextTrack(e, i2, r11, s3) {
    var u2;
    let d2 = (u2 = this.media) == null ? void 0 : u2.nativeEl;
    if (d2) return ce$1(d2, e, i2, r11, s3);
  }
  removeTextTrack(e) {
    var r11;
    let i2 = (r11 = this.media) == null ? void 0 : r11.nativeEl;
    if (i2) return Et(i2, e);
  }
  get textTracks() {
    var e;
    return (e = this.media) == null ? void 0 : e.textTracks;
  }
  get castReceiver() {
    var e;
    return (e = this.getAttribute(o$1.CAST_RECEIVER)) != null ? e : void 0;
  }
  set castReceiver(e) {
    e !== this.castReceiver && (e ? this.setAttribute(o$1.CAST_RECEIVER, e) : this.removeAttribute(o$1.CAST_RECEIVER));
  }
  get castCustomData() {
    var e;
    return (e = this.media) == null ? void 0 : e.castCustomData;
  }
  set castCustomData(e) {
    if (!this.media) {
      k("underlying media element missing when trying to set castCustomData. castCustomData will not be set.");
      return;
    }
    this.media.castCustomData = e;
  }
  get noTooltips() {
    return this.hasAttribute(o$1.NO_TOOLTIPS);
  }
  set noTooltips(e) {
    if (!e) {
      this.removeAttribute(o$1.NO_TOOLTIPS);
      return;
    }
    this.setAttribute(o$1.NO_TOOLTIPS, "");
  }
  get proudlyDisplayMuxBadge() {
    return this.hasAttribute(o$1.PROUDLY_DISPLAY_MUX_BADGE);
  }
  set proudlyDisplayMuxBadge(e) {
    e ? this.setAttribute(o$1.PROUDLY_DISPLAY_MUX_BADGE, "") : this.removeAttribute(o$1.PROUDLY_DISPLAY_MUX_BADGE);
  }
  get capRenditionToPlayerSize() {
    var e;
    return (e = this.media) == null ? void 0 : e.capRenditionToPlayerSize;
  }
  set capRenditionToPlayerSize(e) {
    if (!this.media) {
      k("underlying media element missing when trying to set capRenditionToPlayerSize");
      return;
    }
    this.media.capRenditionToPlayerSize = e;
  }
};
re$1 = /* @__PURE__ */ new WeakMap(), W = /* @__PURE__ */ new WeakMap(), oe$1 = /* @__PURE__ */ new WeakMap(), w = /* @__PURE__ */ new WeakMap(), ne$1 = /* @__PURE__ */ new WeakMap(), Z = /* @__PURE__ */ new WeakMap(), se$1 = /* @__PURE__ */ new WeakMap(), de$1 = /* @__PURE__ */ new WeakMap(), H = /* @__PURE__ */ new WeakMap(), G2 = /* @__PURE__ */ new WeakMap(), $ = /* @__PURE__ */ new WeakMap(), le = /* @__PURE__ */ new WeakMap(), m = /* @__PURE__ */ new WeakSet(), I = function() {
  var e, i2, r11, s3;
  if (!l$1(this, W)) {
    y(this, W, true), p$1(this, m, K).call(this);
    try {
      if (customElements.upgrade(this.mediaTheme), !(this.mediaTheme instanceof _2.HTMLElement)) throw "";
    } catch {
      k("<media-theme> failed to upgrade!");
    }
    try {
      customElements.upgrade(this.media);
    } catch {
      k("underlying media element failed to upgrade!");
    }
    try {
      if (customElements.upgrade(this.mediaController), !(this.mediaController instanceof media_controller_default)) throw "";
    } catch {
      k("<media-controller> failed to upgrade!");
    }
    p$1(this, m, Ft).call(this), p$1(this, m, Yt).call(this), p$1(this, m, Wt).call(this), y(this, w, (i2 = (e = this.mediaController) == null ? void 0 : e.hasAttribute(Attributes$d.USER_INACTIVE)) != null ? i2 : true), p$1(this, m, Zt).call(this), (r11 = this.media) == null || r11.addEventListener("streamtypechange", l$1(this, se$1)), (s3 = this.media) == null || s3.addEventListener("loadstart", l$1(this, de$1));
  }
}, $t = function() {
  var e, i2;
  try {
    (e = window == null ? void 0 : window.CSS) == null || e.registerProperty({ name: "--media-primary-color", syntax: "<color>", inherits: true }), (i2 = window == null ? void 0 : window.CSS) == null || i2.registerProperty({ name: "--media-secondary-color", syntax: "<color>", inherits: true });
  } catch {
  }
}, Ke = function(e) {
  Object.assign(l$1(this, $), e), p$1(this, m, K).call(this);
}, K = function(e = {}) {
  kt(Rt(Ma(this, { ...l$1(this, $), ...e })), this.shadowRoot);
}, Ft = function() {
  let e = (i2) => {
    var d2, u2;
    if (!(i2 != null && i2.startsWith("theme-"))) return;
    let r11 = i2.replace(/^theme-/, "");
    if (Be.includes(r11)) return;
    let s3 = this.getAttribute(i2);
    s3 != null ? (d2 = this.mediaTheme) == null || d2.setAttribute(r11, s3) : (u2 = this.mediaTheme) == null || u2.removeAttribute(r11);
  };
  y(this, Z, new MutationObserver((i2) => {
    for (let { attributeName: r11 } of i2) e(r11);
  })), l$1(this, Z).observe(this, { attributes: true }), this.getAttributeNames().forEach(e);
}, Yt = function() {
  this.addEventListener("error", l$1(this, le)), this.media && (this.media.errorTranslator = (e = {}) => {
    var r11, s3, d2;
    if (!(((r11 = this.media) == null ? void 0 : r11.error) instanceof T$1)) return e;
    let i2 = Ie((s3 = this.media) == null ? void 0 : s3.error);
    return { player_error_code: (d2 = this.media) == null ? void 0 : d2.error.code, player_error_message: i2.message ? String(i2.message) : e.player_error_message, player_error_context: i2.context ? String(i2.context) : e.player_error_context };
  });
}, Wt = function() {
  var e, i2, r11, s3;
  (i2 = (e = this.media) == null ? void 0 : e.textTracks) == null || i2.addEventListener("addtrack", l$1(this, H)), (s3 = (r11 = this.media) == null ? void 0 : r11.textTracks) == null || s3.addEventListener("removetrack", l$1(this, H));
}, Zt = function() {
  var j2, z2;
  if (!/Firefox/i.test(navigator.userAgent)) return;
  let i2, r11 = /* @__PURE__ */ new WeakMap(), s3 = () => this.streamType === h$2.LIVE && !this.secondaryColor && this.offsetWidth >= 800, d2 = (A2, T2, x2 = false) => {
    if (s3()) return;
    Array.from(A2 && A2.activeCues || []).forEach((g2) => {
      if (!(!g2.snapToLines || g2.line < -5 || g2.line >= 0 && g2.line < 10)) if (!T2 || this.paused) {
        let ue2 = g2.text.split(`
`).length, X2 = -3;
        this.streamType === h$2.LIVE && (X2 = -2);
        let q2 = X2 - ue2;
        if (g2.line === q2 && !x2) return;
        r11.has(g2) || r11.set(g2, g2.line), g2.line = q2;
      } else setTimeout(() => {
        g2.line = r11.get(g2) || "auto";
      }, 500);
    });
  }, u2 = () => {
    var A2, T2;
    d2(i2, (T2 = (A2 = this.mediaController) == null ? void 0 : A2.hasAttribute(Attributes$d.USER_INACTIVE)) != null ? T2 : false);
  }, b2 = () => {
    var x2, F2;
    let T2 = Array.from(((F2 = (x2 = this.mediaController) == null ? void 0 : x2.media) == null ? void 0 : F2.textTracks) || []).filter((g2) => ["subtitles", "captions"].includes(g2.kind) && g2.mode === "showing")[0];
    T2 !== i2 && (i2 == null || i2.removeEventListener("cuechange", u2)), i2 = T2, i2 == null || i2.addEventListener("cuechange", u2), d2(i2, l$1(this, w));
  };
  b2(), (j2 = this.textTracks) == null || j2.addEventListener("change", b2), (z2 = this.textTracks) == null || z2.addEventListener("addtrack", b2);
  let R2 = () => {
    var T2, x2;
    let A2 = (x2 = (T2 = this.mediaController) == null ? void 0 : T2.hasAttribute(Attributes$d.USER_INACTIVE)) != null ? x2 : true;
    l$1(this, w) !== A2 && (y(this, w, A2), d2(i2, l$1(this, w)));
  };
  this.addEventListener("userinactivechange", R2), y(this, G2, () => {
    var A2, T2;
    i2 == null || i2.removeEventListener("cuechange", u2), (A2 = this.textTracks) == null || A2.removeEventListener("change", b2), (T2 = this.textTracks) == null || T2.removeEventListener("addtrack", b2), this.removeEventListener("userinactivechange", R2);
  });
};
function M$1(t3, a) {
  return t3.media ? t3.media.getAttribute(a) : t3.getAttribute(a);
}
var Ii = Ve;
var o = class {
  addEventListener() {
  }
  removeEventListener() {
  }
  dispatchEvent(t3) {
    return true;
  }
};
if (typeof DocumentFragment == "undefined") {
  class e extends o {
  }
  globalThis.DocumentFragment = e;
}
var s2 = class extends o {
}, b = { get(e) {
}, define(e, t3, n2) {
}, getName(e) {
  return null;
}, upgrade(e) {
}, whenDefined(e) {
  return Promise.resolve(s2);
} };
var h = { customElements: b }, E$1 = typeof window == "undefined" || typeof globalThis.customElements == "undefined", l = E$1 ? h : globalThis;
l.customElements.get("mux-player") || (l.customElements.define("mux-player", Ii), l.MuxPlayerElement = Ii);
var M = parseInt(React.version) >= 19, E = { className: "class", classname: "class", htmlFor: "for", crossOrigin: "crossorigin", viewBox: "viewBox", playsInline: "playsinline", autoPlay: "autoplay", playbackRate: "playbackrate" }, B = (e) => e == null, ee = (e, t3) => B(t3) ? false : e in t3, te = (e) => e.replace(/[A-Z]/g, (t3) => `-${t3.toLowerCase()}`), ne = (e, t3) => {
  if (!(!M && typeof t3 == "boolean" && !t3)) {
    if (ee(e, E)) return E[e];
    if (typeof t3 != "undefined") return /[A-Z]/.test(e) ? te(e) : e;
  }
};
var ae = (e, t3) => !M && typeof e == "boolean" ? "" : e, P = (e = {}) => {
  let { ref: t3, ...n2 } = e;
  return Object.entries(n2).reduce((o2, [a, l2]) => {
    let i2 = ne(a, l2);
    if (!i2) return o2;
    let c2 = ae(l2);
    return o2[i2] = c2, o2;
  }, {});
};
function x(e, t3) {
  if (typeof e == "function") return e(t3);
  e != null && (e.current = t3);
}
function re2(...e) {
  return (t3) => {
    let n2 = false, o2 = e.map((a) => {
      let l2 = x(a, t3);
      return !n2 && typeof l2 == "function" && (n2 = true), l2;
    });
    if (n2) return () => {
      for (let a = 0; a < o2.length; a++) {
        let l2 = o2[a];
        typeof l2 == "function" ? l2() : x(e[a], null);
      }
    };
  };
}
function f(...e) {
  return reactExports.useCallback(re2(...e), e);
}
var oe = Object.prototype.hasOwnProperty, ue = (e, t3) => {
  if (Object.is(e, t3)) return true;
  if (typeof e != "object" || e === null || typeof t3 != "object" || t3 === null) return false;
  if (Array.isArray(e)) return !Array.isArray(t3) || e.length !== t3.length ? false : e.some((a, l2) => t3[l2] === a);
  let n2 = Object.keys(e), o2 = Object.keys(t3);
  if (n2.length !== o2.length) return false;
  for (let a = 0; a < n2.length; a++) if (!oe.call(t3, n2[a]) || !Object.is(e[n2[a]], t3[n2[a]])) return false;
  return true;
}, p = (e, t3, n2) => !ue(t3, e[n2]), se = (e, t3, n2) => {
  e[n2] = t3;
}, ie = (e, t3, n2, o2 = se, a = p) => reactExports.useEffect(() => {
  let l2 = n2 == null ? void 0 : n2.current;
  l2 && a(l2, t3, e) && o2(l2, t3, e);
}, [n2 == null ? void 0 : n2.current, t3]), u = ie;
var ye2 = () => {
  try {
    return "3.13.0";
  } catch {
  }
  return "UNKNOWN";
}, me = ye2(), g = () => me;
var r10 = (e, t3, n2) => reactExports.useEffect(() => {
  let o2 = t3 == null ? void 0 : t3.current;
  if (!o2 || !n2) return;
  let a = e, l2 = n2;
  return o2.addEventListener(a, l2), () => {
    o2.removeEventListener(a, l2);
  };
}, [t3 == null ? void 0 : t3.current, n2, e]);
var Pe = React.forwardRef(({ children: e, ...t3 }, n2) => React.createElement("mux-player", { suppressHydrationWarning: true, ...P(t3), ref: n2 }, e)), xe = (e, t3) => {
  let { onAbort: n2, onCanPlay: o2, onCanPlayThrough: a, onEmptied: l2, onLoadStart: i2, onLoadedData: c2, onLoadedMetadata: v2, onProgress: R2, onDurationChange: T2, onVolumeChange: h2, onRateChange: b2, onResize: C2, onWaiting: k2, onPlay: O2, onPlaying: S3, onTimeUpdate: w2, onPause: N2, onSeeking: L2, onSeeked: A2, onStalled: I2, onSuspend: _3, onEnded: K2, onError: H2, onCuePointChange: D2, onChapterChange: V2, metadata: W2, tokens: U2, paused: z2, playbackId: F2, playbackRates: G3, currentTime: Z2, themeProps: j2, extraSourceParams: q2, castCustomData: J2, _hlsConfig: Y2, ...$2 } = t3;
  return u("tokens", U2, e), u("playbackId", F2, e), u("playbackRates", G3, e), u("metadata", W2, e), u("extraSourceParams", q2, e), u("_hlsConfig", Y2, e), u("themeProps", j2, e), u("castCustomData", J2, e), u("paused", z2, e, (s3, y2) => {
    y2 != null && (y2 ? s3.pause() : s3.play());
  }, (s3, y2, Q2) => s3.hasAttribute("autoplay") && !s3.hasPlayed ? false : p(s3, y2, Q2)), u("currentTime", Z2, e, (s3, y2) => {
    y2 != null && (s3.currentTime = y2);
  }), r10("abort", e, n2), r10("canplay", e, o2), r10("canplaythrough", e, a), r10("emptied", e, l2), r10("loadstart", e, i2), r10("loadeddata", e, c2), r10("loadedmetadata", e, v2), r10("progress", e, R2), r10("durationchange", e, T2), r10("volumechange", e, h2), r10("ratechange", e, b2), r10("resize", e, C2), r10("waiting", e, k2), r10("play", e, O2), r10("playing", e, S3), r10("timeupdate", e, w2), r10("pause", e, N2), r10("seeking", e, L2), r10("seeked", e, A2), r10("stalled", e, I2), r10("suspend", e, _3), r10("ended", e, K2), r10("error", e, H2), r10("cuepointchange", e, D2), r10("chapterchange", e, V2), [$2];
}, de = g(), fe = "mux-player-react", ge = React.forwardRef((e, t3) => {
  var i2;
  let n2 = reactExports.useRef(null), o2 = f(n2, t3), [a] = xe(n2, e), [l2] = reactExports.useState((i2 = e.playerInitTime) != null ? i2 : kn());
  return React.createElement(Pe, { ref: o2, defaultHiddenCaptions: e.defaultHiddenCaptions, playerSoftwareName: fe, playerSoftwareVersion: de, playerInitTime: l2, ...a });
}), ze = ge;
export {
  mr as MaxResolution,
  T$1 as MediaError,
  Er as MinResolution,
  gr as RenditionOrder,
  ze as default,
  kn as generatePlayerInitTime,
  fe as playerSoftwareName,
  de as playerSoftwareVersion
};
//# sourceMappingURL=r3f-index3.js.map
