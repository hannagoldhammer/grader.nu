/*! AST v0.34.0 Updated: 2020-11-19 */ !(function (e) {
  var t = {};
  function n(a) {
    if (t[a]) return t[a].exports;
    var r = (t[a] = { i: a, l: !1, exports: {} });
    return e[a].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, a) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (n.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          n.d(
            a,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return a;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 1));
})([
  function (e) {
    e.exports = {
      m: { UT_IFRAME: "utif_", UT_DIV: "div_utif_" },
      j: { WARN: "WARN" },
      e: {
        DEBUG_MODE: "ast_debug",
        AST_DONGLE: "ast_dongle",
        AST_DEBUG_MEMBER: "ast_debug_member",
        AST_DEBUG_BIDDER: "ast_debug_bidder",
        AST_TEST: "ast_test",
        AST_TOOLKIT: "ast_toolkit",
        AST_OVERRIDE: {
          BASE: "ast_override_",
          DIV: "div",
          INDEX: "index",
          TAG_ID: "tag_id",
          INV_CODE: "inv_code",
          PUBLISHER_ID: "publisher_id",
        },
      },
      l: {
        UNDEFINED: "undefined",
        OBJECT: "object",
        STRING: "string",
        NUMBER: "number",
      },
      c: { IE: "msie", OPERA: "opera" },
      n: { LOADED: "loaded", IMPRESSION: "impression" },
      f: {
        UT_BASE: "/ut/v3",
        IMPBUS: "ib.adnxs.com",
        UT_PREBID: "/ut/v3/prebid",
      },
      q: {
        MEDIA_TYPE: "media_type",
        CREATIVE_ID: "creative_id",
        AD_TYPE: "ad_type",
        BANNER: "banner",
        VIDEO: "video",
        CONTENT: "content",
        UUID: "uuid",
      },
      k: { BANNER: "banner", NATIVE: "native", VIDEO: "video" },
      a: {
        CREATIVE_ID: "creative_id",
        NOTIFY: "notify_url",
        NOAD: "no_ad_url",
        IMP_URLS: "impression_urls",
        TRACKERS: "trackers",
      },
      d: { RTB: "rtb", CSM: "csm", SSM: "ssm" },
      b: { BANNER: "banner", NATIVE: "native", VIDEO: "video" },
      i: {
        VIDEO_MEDIATION_JS:
          "//acdn.adnxs.com/video/astMediation/AstMediationManager.js",
        BANNER_MEDIATION_JS:
          "//acdn.adnxs.com/ast/mediation/0.34.0/mediation.js",
        SAFE_FRAME_URL:
          "//acdn.adnxs.com/ast/safeframe/static/0.34.0/html/safeframe-v2.html",
        CDN_ORIGIN: "acdn.adnxs.com",
      },
      g: {
        REQUEST: "adRequested",
        AVAILABLE: "adAvailable",
        LOADED: "adLoaded",
        LOADED_MEDIATED: "adLoadedMediated",
        NO_BID_MEDIATED: "adNoBidMediated",
        REQUEST_FAIL: "adRequestFailure",
        NO_BID: "adNoBid",
        DEFAULT: "adDefault",
        ERROR: "adError",
        COLLAPSE: "adCollapse",
        BAD_REQUEST: "adBadRequest",
      },
      p: {
        ARRAY: "Array",
        STRING: "String",
        FUNC: "Function",
        NUM: "Number",
        OBJ: "Object",
        BOOL: "Boolean",
      },
      o: {
        DEFAULT_ZINDEX: 3e3,
        STATUS: {
          READY: "ready",
          NOTIFY_EXPANDED: "expanded",
          NOTIFY_COLLAPSED: "collapsed",
          NOTIFY_ERROR: "error",
          FOCUS_CHANGE: "focus-change",
          GEOM_UPDATE: "geom-update",
          CMP: "cmp",
        },
      },
      h: { CREATIVE: "creative" },
    };
  },
  function (e, t, n) {
    "use strict";
    n.r(t),
      (Object.defineProperty &&
        (function () {
          try {
            return Object.defineProperty({}, "x", {}), !0;
          } catch (e) {
            return !1;
          }
        })()) ||
        (Object.defineProperty = function (e, t, n) {
          e[t] = n.value;
        });
    var a,
      r =
        '<div class="ancookie-header" id="ancookie-container">\n  <div id="ancookie-nav">\n    <div></div>\n  </div>\n  <div id="ancookie-slider">\n    <p id="ancookie-msg">Your browser blocks 3rd party cookies by default. By clicking on page you allow our partner AppNexus to place cookies to show relevant ads. Read more or opt out of these cookies <a href="https://www.appnexus.com/en/company/platform-privacy-policy#choices" target="_blank" style="color: #4f4f4f;">here</a>. This notice appears once </p>\n    <div id="ancookie-close">&times</div>\n  </div>\n</div>\n',
      i =
        ".ancookie-header {\n  background: #d3d3d3;\n  text-overflow: ellipsis;\n  border-collapse: collapse;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  min-height: 38px;\n}\n\n.ancookie-header * {\n  font-size: 12px;\n  font-family: Verdana, Arial, Helvetica, sans-serif !important;\n  color: #555;\n  line-height: normal !important;\n  margin: 0;\n  padding: 0;\n}\n\n.ancookie-header p {\n  padding: 10px 10px 10px 38px;\n  text-align: left;\n}\n\n.ancookie-header a:link,\n.ancookie-header a:hover,\n.ancookie-header a:visited,\n.ancookie-header a:active {\n  color: #e6e6e6;\n  text-decoration: underline;\n  font-weight: 700;\n}\n\n.ancookie-header {\n  position: fixed;\n  opacity: 0.9;\n}\n\n.ancookie-header * {\n  font-size: 11px !important;\n}\n\n#ancookie-msg {\n  height: 34px;\n  opacity: 0;\n}\n\n@media only screen and (min-width: 1224px) {\n  .ancookie-header * {\n    font-size: 12px !important;\n  }\n\n  #ancookie-msg {\n    height: 20px;\n    opacity: 0;\n  }\n}\n\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {\n  .ancookie-header {\n    position: fixed;\n  }\n}\n\n.ancookie-header {\n  z-index: 9999;\n  opacity: 1;\n}\n\n#ancookie-slider {\n  overflow: hidden;\n  padding: 10px;\n  box-sizing: border-box;\n}\n\n#ancookie-slider p {\n  position: relative;\n  margin: 0;\n  padding: 0;\n  opacity: 0;\n  -webkit-column-gap: 20px;\n  -webkit-column-rule-width: 0;\n}\n\n#ancookie-nav {\n  position: absolute;\n  right: 0;\n  left: 0;\n  top: -11px;\n  z-index: 200;\n  text-align: center;\n}\n\n#ancookie-nav div {\n  display: inline-block;\n  padding: 0 10px;\n  background-color: #d3d3d3;\n  border-radius: 10px 10px 0 0;\n}\n\n#ancookie-nav span {\n  display: inline-block;\n  width: 6px;\n  height: 6px;\n  background-color: #e6e6e6;\n  border-radius: 50%;\n  margin: 1px 2px;\n  box-sizing: border-box;\n  -webkit-transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-opacity: 0.5;\n}\n\n#ancookie-nav span.selected {\n  background-color: #555;\n  -webkit-transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-opacity: 1;\n}\n\n#ancookie-close {\n  position: absolute;\n  right: 5px;\n  bottom: 20px;\n  cursor: pointer;\n  -webkit-transform: scale(1.5);\n  transform: scale(1.5);\n}\n";
    function o(e) {
      s.setParentNode(e),
        s
          .getContainer()
          .querySelector("#ancookie-close")
          .addEventListener("click", function () {
            e.remove();
          });
      var t,
        n = function () {
          var e = s.getSliderElement(),
            n = d(e),
            r = s.getMessageElement();
          r.setAttribute(
            "style",
            "-webkit-transition: none; -webkit-transform: translateX(0); -webkit-column-width: " +
              n +
              "px;"
          );
          var i = s.getNav();
          (i.innerHTML = ""),
            clearTimeout(t),
            (t = setTimeout(function () {
              clearInterval(a),
                (r.style.webkitTransition = "opacity 0.3s ease-out"),
                (r.style.opacity = 1);
              var t = e.scrollWidth + 10,
                o = Math.round(t / n);
              1 < o &&
                ((function (e) {
                  for (
                    var t = "<span class=selected></span>", n = 1;
                    n < 2;
                    n++
                  )
                    t += "<span></span>";
                  e.innerHTML = t;
                })(i),
                (function () {
                  var e,
                    t = d(s.getSliderElement()),
                    n = { cycles: 2, isFirstSlide: !0 };
                  a = setInterval(function () {
                    n.cycles || clearInterval(a),
                      (e = n.isFirstSlide ? 1 : 0),
                      (n = (function (e, t, n) {
                        var a = s.getMessageElement();
                        (a.style.webkitTransition =
                          "opacity 0.3s ease-out, -webkit-transform " +
                          t +
                          "s cubic-bezier(0.23, 1, 0.32, 1)"),
                          (a.style.webkitTransform = "translateX(" + e + "px)"),
                          0 == e && n.cycles--,
                          (n.isFirstSlide = !n.isFirstSlide);
                        for (
                          var r = s.getContainer().querySelectorAll("span"),
                            i = 0;
                          i < r.length;
                          i++
                        )
                          "selected" === r[i].className
                            ? r[i].removeAttribute("class")
                            : r[i].setAttribute("class", "selected");
                        return n;
                      })(-1 * e * t, 1.2, n));
                  }, 3e3);
                })());
            }, 300));
        };
      n(), window.addEventListener("resize", n);
    }
    var s = (function () {
      var e, t, n, a, r;
      return {
        getContainer: function () {
          return e || (e = r.querySelector("#ancookie-container")), e;
        },
        getMessageElement: function () {
          return t || (t = r.querySelector("#ancookie-msg")), t;
        },
        getSliderElement: function () {
          return n || (n = r.querySelector("#ancookie-slider")), n;
        },
        getNav: function () {
          return a || (a = r.querySelector("#ancookie-nav div")), a;
        },
        setParentNode: function (e) {
          r = e;
        },
      };
    })();
    function d(e) {
      return e.offsetWidth;
    }
    var c = "http://ib.adnxs.com/seg?add=1&redir=",
      u = "//ib.adnxs.com/getuidj",
      l = !1;
    function f() {
      l ||
        ((l = !0),
        /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
          ? ((function () {
              if (
                "true" !==
                document.cookie.replace(
                  /(?:(?:^|.*;\s*)anCookiesetFooter\s*\=\s*([^;]*).*$)|^.*$/,
                  "$1"
                )
              ) {
                var e = (function () {
                  var e = document.createElement("div");
                  e.id = "cookiemsg-slider";
                  var t = '<style media="screen">' + i + "</style>";
                  return (e.innerHTML = t + r), e;
                })();
                document.body.appendChild(e),
                  o(e),
                  (document.cookie =
                    "anCookiesetFooter=true; expires=Fri, 31 Dec 9999 23:59:59 GMT");
              }
            })(),
            (function (e, t) {
              var n;
              try {
                n = new XMLHttpRequest();
              } catch (e) {
                return;
              }
              n.open("GET", e),
                (n.withCredentials = !0),
                (n.onreadystatechange = function () {
                  if (4 === n.readyState && 200 === n.status)
                    try {
                      var e = JSON.parse(n.responseText);
                      t(e);
                    } catch (e) {
                      console.error(e);
                    }
                }),
                n.send();
            })(u, p))
          : console.log("Not safari, skipping link override"));
    }
    function p(e) {
      console.log(e.uid),
        0 === (parseInt(e.uid, 10) || 0) &&
          (function () {
            console.log("Perfoming link override.");
            for (var e = 0; e < document.links.length; e++) {
              var t = document.links[e];
              t.href = c + encodeURIComponent(t.href);
            }
          })();
    }
    var g = n(0),
      m = g.p.ARRAY,
      v = g.p.STRING,
      h = g.p.FUNC,
      y = g.p.NUM,
      b = g.p.OBJ,
      w = Object.prototype.hasOwnProperty,
      I = !1,
      _ = g.e.DEBUG_MODE,
      E = g.l.UNDEFINED,
      T = g.d.RTB,
      k = g.d.CSM,
      x = g.d.SSM,
      S = g.h,
      A = null;
    try {
      A =
        "object" == typeof console.info
          ? console.info
          : console.info.bind(window.console);
    } catch (e) {}
    var R = function (e, t, n, a) {
        e.addEventListener
          ? e.addEventListener(t, n, a)
          : e.attachEvent && e.attachEvent("on" + t, n);
      },
      D = function (e, t, n, a) {
        e.removeEventListener
          ? e.removeEventListener(t, n, a)
          : e.detachEvent && e.detachEvent("on" + t, n);
      },
      N = function (e, t) {
        return Object.prototype.toString.call(e) === "[object " + t + "]";
      },
      C = function (e) {
        return N(e, b);
      },
      q = function (e) {
        return N(e, h);
      },
      O = function (e) {
        return N(e, v);
      },
      M = function (e) {
        return N(e, m);
      },
      B = function (e) {
        return N(e, y);
      },
      P = function (e) {
        if (!e) return !0;
        if (M(e) || O(e)) return 0 === e.length;
        for (var t in e) if (w.call(e, t)) return !1;
        return !0;
      },
      U = function () {
        return window.console && window.console.log;
      },
      F = function () {
        var e = new Date();
        return (
          "[" +
          e.getHours() +
          ":" +
          e.getMinutes() +
          ":" +
          e.getSeconds() +
          ":" +
          e.getMilliseconds() +
          "] "
        );
      },
      L = function (e) {
        if (K() && U()) {
          var t = F(),
            n = de() ? "SAFEFRAME MESSAGE: " : "MESSAGE: ";
          console.log(t + n + e);
        }
      },
      z = function (e) {
        if (K() && U()) {
          var t = F(),
            n = de() ? "SAFEFRAME WARN: " : "WARN: ";
          console.warn ? console.warn(t + n + e) : console.log(t + n + e);
        }
      },
      W = function (e, t) {
        if (K() && U()) {
          var n = t || "GENERAL_ERROR",
            a = F(),
            r = de() ? "SAFEFRAME " : "";
          console.error
            ? console.error(a + r + n + ": " + e)
            : console.log(a + r + n + ": " + e);
        }
      },
      j = function (e) {
        K() && U() && console.timeStamp && console.timeStamp(e);
      },
      V = function (e, t) {
        if (K() && U()) {
          var n = F();
          if (A) {
            (t && 0 !== t.length) || (t = "");
            var a = de() ? "SAFEFRAME INFO: " : "INFO: ";
            A(n + a + e + ("" === t ? "" : " : params : "), t);
          }
        }
      },
      H = function (e, t, n) {
        var a = e.document,
          r = a.createElement("script");
        (r.type = "text/javascript"),
          (r.async = !0),
          n &&
            "function" == typeof n &&
            (r.readyState
              ? (r.onreadystatechange = function () {
                  ("loaded" !== r.readyState && "complete" !== r.readyState) ||
                    ((r.onreadystatechange = null), n());
                })
              : (r.onload = function () {
                  n();
                })),
          (r.src = t);
        var i = a.getElementsByTagName("head");
        return (
          (i = i.length ? i : a.getElementsByTagName("body")).length &&
            (i = i[0]).insertBefore(r, i.firstChild),
          r
        );
      },
      X = function () {
        var e = new Date().getTime();
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
          /[xy]/g,
          function (t) {
            var n = (e + 16 * Math.random()) % 16 | 0;
            return (
              (e = Math.floor(e / 16)),
              ("x" === t ? n : (3 & n) | 8).toString(16)
            );
          }
        );
      },
      J = function (e, t, n) {
        var a = void 0;
        if (((n = "anx_" + n + new Date().getTime()), e && t)) {
          ((a = new Image()).id = n),
            (a.src = t),
            (a.height = 0),
            (a.width = 0),
            (a.style.display = "none"),
            (a.onload = function () {
              try {
                this.parentNode.removeChild(this);
              } catch (e) {}
            });
          try {
            e.insertBefore(a, e.firstChild);
          } catch (e) {
            W("Error logging impression for tag: " + n + " :" + e.message);
          }
        }
      },
      G = function (e, t) {
        if (!P(e)) {
          if (q(e.forEach)) return e.forEach(t);
          var n = 0,
            a = e.length;
          if (a > 0) for (; n < a; n++) t(e[n], n, e);
          else for (n in e) w.call(e, n) && t(e[n], n, e);
        }
      },
      Y = function (e, t) {
        if (P(e)) return !1;
        for (var n = e.length; n--; ) if (e[n] === t) return !0;
        return !1;
      },
      K = function () {
        return (
          !!de() ||
          ((ie().apntag = ie().apntag || {}),
          apntag &&
            !1 === apntag.debug &&
            !1 === I &&
            ((apntag.debug = "TRUE" === ee(_).toUpperCase()), (I = !0)),
          !(!apntag || !apntag.debug))
        );
      },
      $ = function (e) {
        var t = apntag.requests.tags[e],
          n = t && t.initCollapsed,
          a = n && n.expandBy && le(S).indexOf(n.expandBy) >= 0;
        return n && a;
      },
      Q = function (e, t) {
        return !!e && -1 !== e.indexOf(t);
      },
      Z = function () {
        try {
          return window.top.location.search;
        } catch (e) {
          try {
            return window.location.search;
          } catch (e) {
            return "";
          }
        }
      },
      ee = function (e, t) {
        var n = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(t || Z());
        return null === n ? "" : decodeURIComponent(n[1].replace(/\+/g, " "));
      },
      te = function (e, t) {
        return e.hasOwnProperty
          ? e.hasOwnProperty(t)
          : typeof e[t] !== E && e.constructor.prototype[t] !== e[t];
      },
      ne = function (e, t) {
        if (P(e)) return [];
        if (q(e.map)) return e.map(t);
        var n = [];
        return (
          G(e, function (a, r) {
            n.push(t(a, r, e));
          }),
          n
        );
      },
      ae = function (e, t, n) {
        return null == t
          ? n
          : O(t)
          ? t
          : B(t)
          ? t.toString()
          : void z(
              "Unsuported type for param: " + e + " required type: String"
            );
      },
      re = function (e, t, n, a) {
        return null == t
          ? a
          : N(t, n)
          ? t
          : (z("Unsuported type for param: " + e + " required type: " + n),
            n === y && (t = Number(t)),
            isNaN(t) ? a : t);
      },
      ie = function () {
        return window;
      },
      oe = function (e) {
        if (e && e.length > 0) {
          if (e[0][T]) return e[0][T];
          if (e[0][k]) return e[0][k];
          if (e[0][x]) return e[0][x];
        }
      },
      se = function (e) {
        if (null === e || !(e instanceof Object)) return e;
        var t = e instanceof Array ? [] : {};
        for (var n in e) t[n] = se(e[n]);
        return t;
      };
    function de() {
      return !(typeof $sf === E || !$sf.ext) && !!$sf.ext.debug;
    }
    var ce = function (e) {
        return g.m.UT_DIV + e.targetId;
      },
      ue = function () {
        return ie().document.location.protocol + "//" + g.i.CDN_ORIGIN;
      },
      le = function (e) {
        var t = [];
        for (var n in e) e.hasOwnProperty(n) && t.push(e[n]);
        return t;
      },
      fe = function (e, t) {
        var n = void 0;
        if (q(e))
          return function () {
            return e && ((n = e.apply(t || this, arguments)), (e = null)), n;
          };
      },
      pe = function (e, t) {
        var n = {};
        return (
          [
            "debug",
            "displayed",
            "initialHeight",
            "initialWidth",
            "member",
            "showTagCalled",
            "sizes",
            "targetId",
            "utCalled",
            "utDivId",
            "utiframeId",
            "uuid",
            "keywords",
          ].forEach(function (t) {
            n[t] = e[t];
          }),
          t &&
            ((n.on = t.on),
            (n.off = t.off),
            (n.modifyTag = t.modifyTag),
            (n.setKeywords = t.setKeywords)),
          n
        );
      },
      ge = function (e) {
        apntag.requests.tags = apntag.requests.tags || {};
        var t = !0;
        return typeof apntag.requests.tags[e] === E && (t = !1), t;
      },
      me = function () {
        (apntag.requests.hasLeft = !1),
          G(apntag.requests.tags, function (e, t) {
            e.displayed ||
              e.prebid ||
              e.isMediated ||
              (z(t + " is not displayed.", g.j.WARN),
              (apntag.requests.hasLeft = !0));
          }),
          apntag.requests.hasLeft || L("all Tags are displayed.");
      },
      ve = Array.prototype.slice,
      he = ne(g.g, function (e) {
        return e;
      }),
      ye = (function () {
        var e = {},
          t = {};
        return (
          (t.on = function (t, n, a) {
            if (
              (function (e) {
                return Y(he, e);
              })(t)
            ) {
              var r = {};
              (r[n] = a), (e[t] = e[t] || []), e[t].push(r);
            } else W("Wrong event name : " + t + " Valid event names :" + he);
          }),
          (t.emit = function (t) {
            !(function (t, n) {
              var a = n[0],
                r = ve.call(n, 1);
              L("Emitting event for: " + t + " for ad tag: " + a),
                G(e[t], function (e) {
                  var t = "";
                  if (
                    null != (t = te(e, "*") ? e["*"] : e[a]) &&
                    "function" == typeof t
                  )
                    try {
                      t.apply(null, r);
                    } catch (e) {
                      W(
                        "events._dispatch: Error executing event handler function: " +
                          e.message
                      );
                    }
                });
            })(t, ve.call(arguments, 1));
          }),
          (t.off = function (t, n, a) {
            P(e[t]) ||
              G(e[t], function (e) {
                "*" === n &&
                null !== e[Object.keys(e)[0]] &&
                void 0 !== e[Object.keys(e)[0]]
                  ? (void 0 !== a && Object.values(e) !== a) ||
                    (e[Object.keys(e)[0]] = null)
                  : null !== e[n] &&
                    void 0 !== e[n] &&
                    ((void 0 !== a && e[n] !== a) || (e[n] = null));
              });
          }),
          (t.get = function () {
            return e;
          }),
          t
        );
      })(),
      be = "https:" === ie().document.location.protocol ? "https:" : "http:",
      we = [],
      Ie = !1,
      _e = be + g.i.VIDEO_MEDIATION_JS,
      Ee = be + g.i.BANNER_MEDIATION_JS,
      Te = g.q.AD_TYPE,
      ke = g.b.BANNER,
      xe = g.b.VIDEO,
      Se = function (e) {
        var t = !1;
        return (
          e &&
            G(e, function (e) {
              "csm" === e.content_source && (t = !0);
            }),
          t
        );
      },
      Ae = function (e) {
        var t = ke;
        return (
          Array.isArray(e) && e.length > 0 && e[0][Te] === xe && (t = xe), t
        );
      },
      Re = function (e, t, n, a) {
        e === xe &&
          (null !== t && we.push(t),
          Ie && window.APNVideo_AstMediationManager
            ? G(we, function (e) {
                if (!e.called)
                  try {
                    window.APNVideo_AstMediationManager.selectAd(
                      e.uuid,
                      e,
                      n,
                      a
                    ),
                      (e.called = !0);
                  } catch (e) {
                    W(
                      "Error invoking video mediation",
                      "mediationmanager.js",
                      e
                    );
                  }
              })
            : (H(window, _e, function () {
                Re(xe, null, n, a);
              }),
              (Ie = !0)));
      },
      De = function (e, t) {
        var n = {};
        return (
          G(e, function (e) {
            e.uuid === t.uuid && e.mediationOptions && (n = e.mediationOptions);
          }),
          n
        );
      },
      Ne = function (e) {
        return e.isMediated || e.isRtbVideoFallback
          ? e.adResponse.ad
          : e.adResponse.ads[0];
      },
      Ce = function (e) {
        return (
          e.isMediated ||
            e.isRtbVideoFallback ||
            (e.adResponse.ad = e.adResponse.ads[0]),
          e
        );
      },
      qe = function (e) {
        var t = e.content_source,
          n = e.ad_type;
        if (t) return e[t][n];
      },
      Oe = function (e, t) {
        var n = "<script>";
        return (
          (n += "var APN_macros = {};"),
          (n += 'APN_macros.uuid = "' + e + '";'),
          (n +=
            "APN_macros.enableMediationEvents = " +
            apntag.requests.enableMediationEvents +
            ";"),
          (n += "APN_macros.expandByCreative = " + $(e) + ";"),
          (n += "APN_macros.ads = "),
          (n +=
            'window.parent.apntag.getAdMarkup("' + e + '", "' + t.uuid + '");'),
          (n += ";"),
          (n +=
            "document.write('<scr' + 'ipt src=\"" +
            Ee +
            "\"></scr' + 'ipt>');"),
          (n += "</script>")
        );
      },
      Me = [],
      Be = g.e.AST_OVERRIDE,
      Pe = Be.BASE,
      Ue = Pe + Be.DIV,
      Fe = Pe + Be.INDEX,
      Le = Pe + Be.TAG_ID,
      ze = Pe + Be.INV_CODE,
      We = "force_creative_id",
      je = void 0;
    function Ve(e) {
      return ee(e, je);
    }
    function He(e, t, n) {
      var a = Number(t);
      if (isNaN(a)) W("Force Creative must be a number");
      else {
        e[We] = a;
        var r = (function (e, t) {
          var n = null;
          return (
            G(t, function (t) {
              t.uuid === e.uuid && (n = t.targetId);
            }),
            n
          );
        })(e, n);
        L("Force Creative in use for targetId: " + r);
      }
    }
    var Xe = void 0;
    try {
      Xe = window.localStorage;
    } catch (e) {
      z("localStorage not available for current browser");
    }
    var Je = Xe,
      Ge = (function (e) {
        function t() {
          var t = (function () {
              var t = [],
                n = void 0;
              do {
                try {
                  n = n ? n.parent : e;
                  try {
                    t.push({
                      referrer: n.document.referrer || null,
                      location: n.location.href || null,
                      isTop: n === e.top,
                    });
                  } catch (a) {
                    t.push({
                      referrer: null,
                      location: null,
                      isTop: n === e.top,
                    }),
                      z(
                        "Trying to access cross domain iframe. Continuing without referrer and location"
                      );
                  }
                } catch (e) {
                  return (
                    t.push({ referrer: null, location: null, isTop: !1 }), t
                  );
                }
              } while (n !== e.top);
              return t;
            })(),
            n = (function () {
              try {
                if (!e.location.ancestorOrigins) return;
                return e.location.ancestorOrigins;
              } catch (e) {}
            })();
          if (n) for (var a = 0, r = n.length; a < r; a++) t[a].ancestor = n[a];
          return t;
        }
        return function () {
          try {
            var e = t(),
              n = e.length - 1,
              a =
                null !== e[n].location || (n > 0 && null !== e[n - 1].referrer),
              r = (function (e) {
                var t = [],
                  n = null,
                  a = null,
                  r = null,
                  i = null,
                  o = null,
                  s = null,
                  d = void 0;
                for (d = e.length - 1; d >= 0; d--) {
                  try {
                    a = e[d].location;
                  } catch (e) {}
                  if (a) (n = encodeURIComponent(a)), t.push(n), s || (s = n);
                  else if (0 !== d) {
                    r = e[d - 1];
                    try {
                      (i = r.referrer), (o = r.ancestor);
                    } catch (e) {}
                    i
                      ? ((n = encodeURIComponent(i)), t.push(n), s || (s = n))
                      : o
                      ? ((n = encodeURIComponent(o)), t.push(n), s || (s = n))
                      : t.push(null);
                  } else t.push(null);
                }
                return { stack: t, detectedRefererUrl: s };
              })(e);
            return {
              referer: r.detectedRefererUrl,
              reachedTop: a,
              numIframes: n,
              stack: r.stack,
            };
          } catch (e) {}
        };
      })(window),
      Ye = g.p.STRING,
      Ke = g.p.NUM,
      $e = g.p.BOOL,
      Qe = g.e.AST_DONGLE,
      Ze = g.e.AST_TOOLKIT,
      et = g.e.AST_TEST,
      tt = g.e.AST_DEBUG_MEMBER,
      nt = g.e.AST_DEBUG_BIDDER;
    function at(e) {
      var t = [];
      return (
        G(e, function (e, n) {
          if (M(e)) {
            var a = [];
            G(e, function (e) {
              (e = ae("keywords." + n, e)) && a.push(e);
            }),
              (e = a);
          } else {
            if (((e = ae("keywords." + n, e)), !O(e))) return;
            e = [e];
          }
          var r = { key: n, value: e };
          t.push(r);
        }),
        t
      );
    }
    var rt = function (e) {
        var t = [],
          n = {};
        if (M(e) && 2 === e.length && !M(e[0]))
          (n.width = parseInt(e[0], 10)),
            (n.height = parseInt(e[1], 10)),
            t.push(n);
        else if ("object" == typeof e)
          for (var a = 0; a < e.length; a++) {
            var r = e[a];
            ((n = {}).width = parseInt(r[0], 10)),
              (n.height = parseInt(r[1], 10)),
              t.push(n);
          }
        return t;
      },
      it = function (e, t, n, a) {
        var r = {};
        e.disablePsa &&
          G(e.tags, function (e) {
            e.disablePsa = !0;
          }),
          e.gdpr_consent && (r.gdpr_consent = e.gdpr_consent),
          e.us_privacy && (r.us_privacy = e.us_privacy),
          e.geoOverride &&
            (r.geo_override = {
              country_code: e.geoOverride.countryCode,
              postal_code: e.geoOverride.zip,
            });
        var i = [],
          o = 0;
        G(e.tags, function (e) {
          if (
            !e.utCalled &&
            e.member === t &&
            (function (e) {
              if (!a) return !0;
              var t = !1;
              return (
                G(a, function (n) {
                  e.targetId === n && (t = !0);
                }),
                t
              );
            })(e)
          ) {
            var n = (function (e) {
              var t = {};
              if (((e.uuid = X()), !P(e.sizes))) {
                var n = rt(e.sizes);
                P(n) || ((t.sizes = n), (t.primary_size = n[0]));
              }
              if (!P(e.privateSizes)) {
                var a = rt(e.privateSizes);
                P(a) || (t.private_sizes = a);
              }
              if (
                (e.supplyType &&
                  O(e.supplyType) &&
                  (t.supply_type = e.supplyType),
                e.pubClick &&
                  O(e.pubClick) &&
                  (t.pubclick = { url: e.pubClick }),
                e.pubClickEnc &&
                  O(e.pubClickEnc) &&
                  (t.pubclickenc = { url: e.pubClickEnc }),
                e.reserve &&
                  (B(e.reserve) || M(e.reserve)) &&
                  (t.reserve = e.reserve),
                e.extInvCode &&
                  O(e.extInvCode) &&
                  (t.ext_inv_code = e.extInvCode),
                (t.uuid = e.uuid),
                e.tagId && (t.id = e.tagId),
                e.formats && (t.formats = e.formats),
                e.position &&
                  ("above" === e.position
                    ? (t.position = 1)
                    : "below" === e.position
                    ? (t.position = 2)
                    : (t.position = 0)),
                e.invCode && (t.code = e.invCode),
                e.prebid && (t.prebid = e.prebid),
                e.externalImpId && (t.external_imp_id = e.externalImpId),
                !0 === e.allowSmallerSizes
                  ? (t.allow_smaller_sizes = !0)
                  : (t.allow_smaller_sizes = !1),
                !0 === e.disablePsa && (t.disable_psa = !0),
                e.allowedFormats && (t.ad_types = e.allowedFormats),
                (!0 !== e.usePmtRule && !1 !== e.usePmtRule) ||
                  (t.use_pmt_rule = e.usePmtRule),
                !P(e.video))
              ) {
                var r = e.video,
                  i = {};
                r.id && (i.id = r.id),
                  P(r.mimes) || (i.mimes = r.mimes),
                  r.maxDuration && (i.maxduration = r.maxDuration),
                  r.minDuration && (i.minduration = r.minDuration),
                  r.startDelay && (i.startdelay = r.startDelay),
                  r.skippable && (i.skippable = r.skippable),
                  r.skipOffset && (i.skipoffset = r.skipOffset),
                  P(r.playbackMethod) || (i.playback_method = r.playbackMethod),
                  P(r.frameworks) || (i.frameworks = r.frameworks),
                  (t.video = i);
              }
              if (!P(e.native)) {
                var o = e.native,
                  s = {};
                o.renderer_id && (s.renderer_id = o.renderer_id),
                  o.placement_type && (s.placement_type = o.placement_type);
                var d = {};
                o.id && (d.id = o.id),
                  o.title && (d.title = o.title),
                  o.body && (d.description = o.body),
                  o.sponsoredBy && (d.sponsored_by = o.sponsoredBy),
                  o.image &&
                    ((d.main_image = o.image),
                    P(d.main_image.sizes) && (d.main_image.sizes = [{}])),
                  o.icon &&
                    ((d.icon = o.icon),
                    P(d.icon.sizes) && (d.icon.sizes = [{}])),
                  o.cta && (d.ctatext = o.cta),
                  o.desc2 && (d.desc2 = o.desc2),
                  o.rating && (d.rating = o.rating),
                  o.displayUrl && (d.displayurl = o.displayUrl),
                  o.likes && (d.likes = o.likes),
                  o.downloads && (d.downloads = o.downloads),
                  o.price && (d.price = o.price),
                  o.salePrice && (d.saleprice = o.salePrice),
                  o.phone && (d.phone = o.phone),
                  o.address && (d.address = o.address),
                  o.video &&
                    (d.video = {
                      required: o.video.required || !1,
                      min_duration: o.video.minDuration || 0,
                      max_duration: o.video.maxDuration,
                    }),
                  o.privacySupported && (d.privacy_supported = !0),
                  o.customTitle1 && (d.customtitle1 = o.customTitle1),
                  o.customTitle2 && (d.customtitle2 = o.customTitle2),
                  o.customTitle3 && (d.customtitle3 = o.customTitle3),
                  o.customTitle4 && (d.customtitle4 = o.customTitle4),
                  o.customTitle5 && (d.customtitle5 = o.customTitle5),
                  o.customBody1 && (d.custombody1 = o.customBody1),
                  o.customBody2 && (d.custombody2 = o.customBody2),
                  o.customBody3 && (d.custombody3 = o.customBody3),
                  o.customBody4 && (d.custombody4 = o.customBody4),
                  o.customBody5 && (d.custombody5 = o.customBody5),
                  o.customCta1 && (d.customctatext1 = o.customCta1),
                  o.customCta2 && (d.customctatext2 = o.customCta2),
                  o.customCta3 && (d.customctatext3 = o.customCta3),
                  o.customCta4 && (d.customctatext4 = o.customCta4),
                  o.customCta5 && (d.customctatext5 = o.customCta5),
                  o.customDisplayUrl1 &&
                    (d.customdisplayurl1 = o.customDisplayUrl1),
                  o.customDisplayUrl2 &&
                    (d.customdisplayurl2 = o.customDisplayUrl2),
                  o.customDisplayUrl3 &&
                    (d.customdisplayurl3 = o.customDisplayUrl3),
                  o.customDisplayUrl4 &&
                    (d.customdisplayurl4 = o.customDisplayUrl4),
                  o.customDisplayUrl5 &&
                    (d.customdisplayurl5 = o.customDisplayUrl5),
                  o.customSocialUrl1 &&
                    (d.customsocialurl1 = o.customSocialUrl1),
                  o.customSocialUrl2 &&
                    (d.customsocialurl2 = o.customSocialUrl2),
                  o.customSocialUrl3 &&
                    (d.customsocialurl3 = o.customSocialUrl3),
                  o.customSocialUrl4 &&
                    (d.customsocialurl4 = o.customSocialUrl4),
                  o.customSocialUrl5 &&
                    (d.customsocialurl5 = o.customSocialUrl5),
                  o.customImage1 && (d.customimage1 = o.customImage1),
                  o.customImage2 && (d.customimage2 = o.customImage2),
                  o.customImage3 && (d.customimage3 = o.customImage3),
                  o.customImage4 && (d.customimage4 = o.customImage4),
                  o.customImage5 && (d.customimage5 = o.customImage5),
                  o.customIcon1 && (d.customicon1 = o.customIcon1),
                  o.customIcon2 && (d.customicon2 = o.customIcon2),
                  o.customIcon3 && (d.customicon3 = o.customIcon3),
                  o.customIcon4 && (d.customicon4 = o.customIcon4),
                  o.customIcon5 && (d.customicon5 = o.customIcon5),
                  o.customSocialIcon1 &&
                    (d.customsocialicon1 = o.customSocialIcon1),
                  o.customSocialIcon2 &&
                    (d.customsocialicon2 = o.customSocialIcon2),
                  o.customSocialIcon3 &&
                    (d.customsocialicon3 = o.customSocialIcon3),
                  o.customSocialIcon4 &&
                    (d.customsocialicon4 = o.customSocialIcon4),
                  o.customSocialIcon5 &&
                    (d.customsocialicon5 = o.customSocialIcon5),
                  d && (s.layouts = [d]),
                  (t.ad_types = t.ad_types || []),
                  -1 === t.ad_types.indexOf("native") &&
                    t.ad_types.push("native"),
                  (t.native = s);
              }
              if (!P(e.keywords)) {
                var c = at(e.keywords);
                t.keywords = c;
              }
              if (e.forceCreativeId) {
                var u = Number(e.forceCreativeId);
                isNaN(u)
                  ? W("Force Creative must be a number")
                  : ((t.force_creative_id = u),
                    L("Force Creative in use for targetId: " + e.targetId));
              }
              return (
                e.nobidIfUnsold && (t.nobid_if_unsold = !0),
                e.trafficSourceCode &&
                  (t.traffic_source_code = e.trafficSourceCode.toString()),
                e.customPubLog &&
                  (O(e.customPubLog)
                    ? (t.custom_pub_log = e.customPubLog)
                    : W("customPubLog must be a string")),
                t
              );
            })(e);
            (e.utCalled = !0), (e.tagNumber = o), o++, i.push(n);
          }
        }),
          (function (e, t, n) {
            if (Q(je || Z(), Pe)) {
              var a = void 0,
                r = void 0,
                i = void 0,
                o = void 0,
                s = void 0,
                d = void 0;
              if (!P(Ve(Fe)))
                for (Me = Ve(Fe).split(","), a = 0; a < Me.length; a++) {
                  s = Me[a].split(":");
                  var c = Number(s[0]);
                  if (isNaN(c) || void 0 === t[c])
                    W("Invalid ast_override value for index : " + c);
                  else {
                    d = null;
                    var u = null;
                    for (o = 0; o < n.length; o++) o === c && (u = n[o].uuid);
                    for (i = 0; i < t.length; i++)
                      t[i].uuid === u && He(t[i], s[1], e);
                  }
                }
              if (!P(Ve(Ue)))
                for (Me = Ve(Ue).split(","), a = 0; a < Me.length; a++) {
                  s = Me[a].split(":");
                  var l = null,
                    f = Object.keys(e);
                  for (i = 0; i < f.length; i++)
                    s[0] === f[i] && (l = e[f[i]].uuid);
                  if (l)
                    for (r = 0; r < t.length; r++)
                      t[r].uuid === l && He(t[r], s[1], e);
                  else
                    W("Invalid ast_override value for target div id : " + s[0]);
                }
              if (!P(Ve(Le)))
                for (Me = Ve(Le).split(","), a = 0; a < Me.length; a++) {
                  s = Me[a].split(":");
                  var p = !1;
                  for (r = 0; r < t.length; r++)
                    (d = t[r]).id === Number(s[0]) &&
                      (He(d, s[1], e), (p = !0));
                  p || W("Invalid ast_override value for tag id : " + s[0]);
                }
              if (!P(Ve(ze)))
                for (Me = Ve(ze).split(","), a = 0; a < Me.length; a++) {
                  s = Me[a].split(":");
                  var g = !1;
                  for (r = 0; r < t.length; r++)
                    (d = t[r]).code === s[0] && (He(d, s[1], e), (g = !0));
                  g || W("Invalid ast_override value for invCode : " + s[0]);
                }
            }
          })(e.tags, i, n);
        var s = Ge(),
          d = {
            rd_ref: s.referer,
            rd_top: s.reachedTop,
            rd_ifs: s.numIframes,
            rd_stk: s.stack.join(","),
          };
        (r.referrer_detection = d),
          (r.tags = i),
          (r.uuid = X()),
          (r.member_id = t),
          (r.sdk = { source: "ast", version: "0.34.0" });
        var c = null;
        if (
          (P(e.keywords)
            ? P(e.targetingParams) ||
              ((c = at(e.targetingParams)), (r.keywords = c))
            : ((c = at(e.keywords)), (r.keywords = c)),
          !P(e.user) &&
            ((r.user = (function (e) {
              var t = {};
              if (!P(e)) {
                e.externalUid &&
                  O(e.externalUid) &&
                  (t.external_uid = e.externalUid),
                  P(e.segments) || (t.segments = e.segments);
                var n = re("user.age", e.age, Ke);
                t.age = n;
                var a = re("user.gender", e.gender, Ke);
                t.gender = a;
                var r = re("user.language", e.language, Ye);
                t.language = r;
                var i = re("user.dnt", e.dnt, $e);
                t.dnt = i;
              }
              return t;
            })(e.user)),
            !P(e.user.userIds)))
        ) {
          var u = (function (e) {
              var t = [],
                n = [];
              return (
                M(e)
                  ? G(e, function (e) {
                      if (C(e) && O(e.type) && O(e.id))
                        if ("criteo" === e.type) {
                          var a = { provider: "criteo", user_id: e.id };
                          n.push(a);
                        } else if ("ttd" === e.type) {
                          var r = {
                            source: "adserver.org",
                            id: e.id,
                            rti_partner: "TDID",
                          };
                          t.push(r);
                        } else t.push(e);
                      else z("Invalid userId object", e);
                    })
                  : z("Invalid userIds", e),
                { eids: t, tpuids: n }
              );
            })(e.user.userIds),
            l = u.eids,
            f = u.tpuids;
          (r.eids = l), (r.tpuids = f);
        }
        P(e.device) ||
          (r.device = (function (e) {
            var t = {},
              n = e.device;
            if (!P(n)) {
              P(n.useragent) || (t.useragent = n.useragent),
                P(n.geo) || (t.geo = n.geo),
                P(n.ip) || (t.ip = n.ip),
                P(n.deviceType) || (t.devicetype = n.deviceType),
                P(n.make) || (t.make = n.make),
                P(n.model) || (t.model = n.model),
                P(n.os) || (t.os = n.os),
                P(n.osVersion) || (t.os_version = n.osVersion),
                P(n.carrier) || (t.carrier = n.carrier);
              var a = re("device.connectionType", n.connectionType, Ke);
              (t.connectiontype = a),
                P(n.mcc) || (t.mcc = n.mcc),
                P(n.mnc) || (t.mnc = n.mnc),
                P(n.lmt) || (t.lmt = n.lmt),
                P(n.deviceId) || (t.device_id = n.deviceId);
              var r = re("device.devTime", n.devTime, Ke);
              t.devtime = r;
            }
            return t;
          })(e)),
          P(e.app) ||
            (r.app = (function (e) {
              var t = {},
                n = e.app;
              return P(n) || P(n.appid) || (t.appid = n.appid), t;
            })(e)),
          P(e.site) ||
            (r.site = (function (e) {
              var t = {},
                n = e.site;
              return P(n) || P(n.id) || (t.id = n.id), t;
            })(e)),
          e.publisherId && (r.publisher_id = e.publisherId),
          e.auctionTimeout && (r.auction_timeout_ms = e.auctionTimeout),
          (r.tags = i);
        var p = ee(Qe),
          g = Je && Je.getItem(Qe),
          m = p || apntag.dongle || g;
        m && !apntag.dongle && (apntag.dongle = m),
          (((ee(Ze) || apntag.toolkit) && m) || !P(e.toolkit)) &&
            (r.toolkit = { enabled: !0, dongle: m || e.toolkit.dongle });
        var v = ee(tt);
        v && "" !== v && (apntag.debug_member = v);
        var h = ee(nt);
        h && "" !== h && (apntag.debug_bidder = h);
        var y = "TRUE" === ee(et).toUpperCase();
        if (
          (y && "" !== y && (apntag.requests.test = y),
          apntag.debug && !P(apntag.dongle))
        ) {
          var b = "";
          apntag.debug_member && (b = apntag.debug_member);
          var w = (function (e, t, n) {
            var a = {};
            return (
              apntag.debug &&
                !P(t) &&
                ((a.enabled = !0),
                e && (a.member_id = Number(e)),
                t && (a.dongle = String(t)),
                n && (a.bidder_id = Number(n)),
                (a.debug_timeout = 1e3)),
              a
            );
          })(b, apntag.dongle, apntag.debug_bidder);
          r.debug = w;
        }
        return r;
      },
      ot = g.d.RTB,
      st = g.q.BANNER,
      dt = g.q.CONTENT,
      ct = "https:" === ie().document.location.protocol ? "https:" : "http:",
      ut = function (e, t) {
        var n = void 0,
          a = (function (e) {
            return g.m.UT_IFRAME + e.targetId + "_" + X();
          })(e),
          r = ie();
        if (
          (((n =
            null !== r.document.getElementById(a)
              ? r.document.getElementById(a)
              : r.document.createElement("iframe")).id = a),
          e.alwaysUseXDomainIframe || e.enableSafeFrame)
        ) {
          L(
            "targetId: " +
              e.targetId +
              " is using safeFrame. Loading this ad into sandboxed iframe"
          );
          var i = void 0;
          t.renderer_url
            ? (i = "\x3c!-- renderer loading in SF--\x3e")
            : e.isBannerMediation
            ? (i = apntag.getAdMarkup(e.targetId, e.uuid))
            : e.isVideoMediation
            ? (i = e.adResponse.ad[ot][st][dt])
            : ((i = mt(e)),
              (i =
                "" +
                (i = i
                  .replace("/&/g", "&amp;")
                  .replace("/</g", "&lt;")
                  .replace("/>/g", "&gt;")
                  .replace('/"/g', "&quot;")
                  .replace("/'/g", "&#39;"))));
          var o = e.curWindow;
          delete e.curWindow;
          var s = {
            targetId: e.targetId,
            ad: i,
            host: r.location.protocol + "//" + r.location.host,
            geom: e.geom,
            debug: K(),
            hasFocus: document.hasFocus(),
            hostSfSupport: e.safeframe,
            isMediated: e.isMediated,
            rendererUrl: t.renderer_url,
            enableMediationEvents: apntag.requests.enableMediationEvents,
            expandByCreative: $(e.targetId),
            currentTag: e,
          };
          e.safeframe.meta && (s.meta = e.safeframe.meta),
            (n.name = JSON.stringify(s)),
            (e.curWindow = o),
            e.safeframe.sandbox &&
              (n.sandbox =
                "allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts");
        } else n.name = a;
        return (
          n.setAttribute("height", e.initialHeight),
          n.setAttribute("width", e.initialWidth),
          (n.tabIndex = "-1"),
          (n.width = e.initialWidth + "px"),
          (n.height = e.initialHeight + "px"),
          (n.border = "0"),
          (n.hspace = "0"),
          (n.vspace = "0"),
          (n.marginWidth = "0"),
          (n.marginHeight = "0"),
          (n.style.border = "0"),
          (n.scrolling = "no"),
          (n.frameBorder = "0"),
          e.customIframeProps &&
            G(e.customIframeProps, function (e, t) {
              n[t] = e;
            }),
          n
        );
      },
      lt = function (e, t) {
        if (t.alwaysUseXDomainIframe || t.enableSafeFrame)
          e.src = ct + g.i.SAFE_FRAME_URL;
        else {
          var n;
          n = mt(t);
          try {
            e.contentWindow.contents = n;
          } catch (t) {
            (e.src =
              "javascript:document.write('<script>document.domain=\"" +
              document.domain +
              "\"</script>')"),
              (e.contentWindow.contents = n);
          }
          var a = document.getElementsByTagName("base"),
            r = void 0;
          a.length && ((r = a.target), (a[0].target = "_self")),
            (e.src = 'javascript:window["contents"];'),
            a.length && (a[0].target = r);
        }
      },
      ft = function (e, t) {
        if (t.alwaysUseXDomainIframe || t.enableSafeFrame)
          e.src = ct + g.i.SAFE_FRAME_URL;
        else {
          var n,
            a = (function (e) {
              var t = void 0;
              try {
                t = e.contentWindow
                  ? e.contentWindow.document
                  : e.contentDocument.document
                  ? e.contentDocument.document
                  : e.contentDocument;
              } catch (e) {
                W("Error getting iframe document: " + e);
              }
              return t;
            })(e);
          (n = mt(t)), a.open("text/html", "replace"), a.write(n), a.close();
        }
      },
      pt = function (e) {
        var t = e.strategy,
          n = e.data,
          a = ie().document.createElement("iframe");
        (a.width = 0),
          (a.height = 0),
          (a.border = "0"),
          (a.hspace = "0"),
          (a.vspace = "0"),
          (a.tabIndex = "-1"),
          (a.marginWidth = "0"),
          (a.marginHeight = "0"),
          (a.style.border = "0"),
          (a.style.display = "none"),
          (a.scrolling = "no"),
          (a.frameBorder = "0"),
          "WithContent" === t &&
            (function (e, t) {
              gt(e),
                e.contentWindow.document.open(),
                e.contentWindow.document.write(t),
                e.contentWindow.document.close();
            })(a, n),
          "WithAttributes" === t &&
            (function (e, t) {
              (e.src = t.src), (e.id = t.id), gt(e);
            })(a, n);
      };
    function gt(e) {
      var t = ie().document.getElementsByTagName("body");
      t.length && t[0].appendChild(e);
    }
    function mt(e) {
      var t = e.targetId,
        n = "";
      if (e.isMediated)
        (n = e.ad.mediatedContent),
          L("Invoking mediation for displaying banner ad: " + t);
      else if (e.adResponse && 1 === e.adResponse.ads.length) {
        n = oe(e.adResponse.ads)[st][dt];
      }
      return (function (e, t, n) {
        var a = (function (e, t) {
          if (t) return "";
          return (
            'window.onerror = function(e) {\n        if(window.parent && window.parent.apntag) {\n          window.parent.apntag.recordErrorEvent(e,"' +
            e +
            '");\n          return true;\n        }\n      };'
          );
        })(e, n);
        return (
          '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head>\n    <script>inDapIF=true;\n    apntag_targetId = "' +
          e +
          '";\n    ' +
          a +
          '\n    </script></head>\n    <body>\n    <script>\n    document.body.id = "' +
          e +
          '";\n    </script>\n    ' +
          t +
          "\n    </body></html>"
        );
      })(t, n, e.alwaysUseXDomainIframe || e.enableSafeFrame);
    }
    var vt = {};
    function ht(e, t) {
      var n = (function (e) {
        var t = {};
        return (
          G(apntag.requests.tags, function (n) {
            e === n.uuid && (t = n);
          }),
          t
        );
      })(e.uuid);
      if (((this.targetId = n.targetId), e.nobid))
        return (
          (this.nobid = !0),
          (this.tagId = e.tag_id),
          (this.auctionId = e.auction_id),
          this
        );
      e.ads && e.ads.length,
        (this.tagId = e.tag_id),
        (this.auctionId = e.auction_id);
      var a = t || e.ads[0],
        r = this;
      G(_t(a), function (e, t) {
        r[t] = e;
      });
      var i = void 0,
        o = void 0,
        s = (function (e) {
          var t = [];
          P(e.sizes) || (t = rt(e.sizes));
          return t;
        })(n);
      M(s) && s[0] && ((i = s[0].height), (o = s[0].width));
      var d = a.content_source ? a.content_source : "rtb";
      if (a[d] && a[d].banner)
        (this.banner = {
          width: a[d].banner.width,
          height: a[d].banner.height,
          content: a[d].banner.content,
          trackers: a[d].trackers,
        }),
          (i = a[d].banner.height),
          (o = a[d].banner.width);
      else if (a.rtb && a.rtb.video) {
        var c = a.rtb.video;
        this.video = {
          duration: c.duration_ms,
          playbackMethods: c.playback_methods,
          frameworks: c.frameworks,
          content: c.content,
          trackers: a.rtb.trackers,
        };
      } else if (a.rtb && a.rtb[g.k.NATIVE]) {
        var u = a.rtb[g.k.NATIVE];
        (this[g.k.NATIVE] = Et(u)), yt(a, this.targetId);
      }
      (this.height = i), (this.width = o);
    }
    var yt = function (e, t) {
        if (e.viewability && e.viewability.config) {
          var n = e.viewability.config;
          "string" == typeof t &&
            ((n = n.replace("%native_dom_id%", t)),
            K() &&
              null === document.getElementById(t) &&
              z(
                "No element found in the page for the native creative " +
                  t +
                  ", see https://wiki.appnexus.com/display/sdk/DefineTag 'targetId'"
              )),
            pt({ strategy: "WithContent", data: n });
        }
      },
      bt = function (e, t) {
        if (!e || !e.uuid) return {};
        if (vt[e.uuid] && !t) return vt[e.uuid];
        try {
          var n = (function (e, t) {
            return new ht(e, t);
          })(e, t);
          return t || (vt[e.uuid] = n), n;
        } catch (e) {
          W(
            "adManager.getAdObj: Error trying to instantiate new adObj: " +
              e.message
          );
        }
      },
      wt = function (e, t, n) {
        var a = e.adResponse && e.adResponse.ads && e.adResponse.ads.length,
          r = a && e.adResponse.ads[a - 1].ad_type === g.b.NATIVE;
        return e.isMediated && r && !n
          ? bt(e.adResponse, e.adResponse.ads[a - 1])
          : bt(e.adResponse, n);
      };
    var It = function (e, t, n, a) {
      return { code: a, errMessage: e || n.message, exception: n, targetId: t };
    };
    function _t(e) {
      return {
        adType: e.ad_type,
        buyerMemberId: e.buyer_member_id,
        source: e.content_source,
        cpm: e.cpm,
        creativeId: e.creative_id,
        mediaSubtypeId: e.media_subtype_id,
        mediaTypeId: e.media_type_id,
        brandCategoryId: e.brand_category_id,
        dealId: e.deal_id,
      };
    }
    function Et(e) {
      return {
        type: e.type,
        title: e.title,
        body: e.desc,
        desc2: e.desc2,
        fullText: e.full_text,
        icon: e.icon,
        image: e.main_img,
        cta: e.ctatext,
        sponsoredBy: e.sponsored,
        impressionTrackers: e.impression_trackers,
        clickTrackers: e.link && e.link.click_trackers,
        clickUrl: e.link && e.link.url,
        clickFallbackUrl: e.link && e.link.fallback_url,
        javascriptTrackers: e.javascript_trackers,
        video: e.video,
        privacyLink: e.privacy_link,
        rating: e.rating,
        displayUrl: e.displayurl,
        likes: e.likes,
        downloads: e.downloads,
        price: e.price,
        salePrice: e.saleprice,
        phone: e.phone,
        address: e.address,
        customTitle1: e.title1,
        customTitle2: e.title2,
        customTitle3: e.title3,
        customTitle4: e.title4,
        customTitle5: e.title5,
        customBody1: e.body1,
        customBody2: e.body2,
        customBody3: e.body3,
        customBody4: e.body4,
        customBody5: e.body5,
        customCta1: e.ctatext1,
        customCta2: e.ctatext2,
        customCta3: e.ctatext3,
        customCta4: e.ctatext4,
        customCta5: e.ctatext5,
        customDisplayUrl1: e.displayurl1,
        customDisplayUrl2: e.displayurl2,
        customDisplayUrl3: e.displayurl3,
        customDisplayUrl4: e.displayurl4,
        customDisplayUrl5: e.displayurl5,
        customSocialUrl1: e.socialurl1,
        customSocialUrl2: e.socialurl2,
        customSocialUrl3: e.socialurl3,
        customSocialUrl4: e.socialurl4,
        customSocialUrl5: e.socialurl5,
        customImage1: e.image1,
        customImage2: e.image2,
        customImage3: e.image3,
        customImage4: e.image4,
        customImage5: e.image5,
        customIcon1: e.icon1,
        customIcon2: e.icon2,
        customIcon3: e.icon3,
        customIcon4: e.icon4,
        customIcon5: e.icon5,
        customSocialIcon1: e.socialicon1,
        customSocialIcon2: e.socialicon2,
        customSocialIcon3: e.socialicon3,
        customSocialIcon4: e.socialicon4,
        customSocialIcon5: e.socialicon5,
      };
    }
    var Tt = (function () {
        var e = void 0,
          t = {};
        return {
          getInstance: function () {
            return (
              e ||
                (e = {
                  add: function (e, n) {
                    t[e] = n;
                  },
                  getIframe: function (e) {
                    return te(t, e) ? t[e] : null;
                  },
                  getIframes: function () {
                    return t;
                  },
                  resetInstance: function () {
                    t = {};
                  },
                }),
              e
            );
          },
        };
      })(),
      kt = window.document,
      xt = "compatMode",
      St = "documentElement",
      At = "nodeType",
      Rt = "hidden",
      Dt = "auto",
      Nt = "contains",
      Ct = 10,
      qt = "scroll",
      Ot = "getAttribute",
      Mt = "setAttribute",
      Bt = "removeAttribute",
      Pt = "clip",
      Ut = window.Number,
      Ft = Ut && Ut.MAX_VALUE,
      Lt = -1 * Ft,
      zt = "compareDocumentPosition",
      Wt = "object",
      jt = "string",
      Vt = "number",
      Ht = "toLowerCase",
      Xt = "toFixed",
      Jt = "elementFromPoint",
      Gt = "length",
      Yt = "overflow",
      Kt = "document",
      $t = "onscroll",
      Qt = window.String,
      Zt = window.Math,
      en = Math.max,
      tn = Math.min,
      nn = Math.round,
      an = window,
      rn = window.navigator,
      on = rn.userAgent || "",
      sn =
        !(!window.ActiveXObject && "ActiveXObject" in window) &&
        an &&
        "ActiveXObject" in an,
      dn = null,
      cn = !0,
      un = !1,
      ln = (function () {
        var e,
          t = {};
        (t.ie = t.opera = t.gecko = t.webkit = t.safari = t.chrome = t.air = t.ipod = t.ipad = t.iphone = t.android = t.webos = t.silk = t.nodejs = t.phantomjs = 0),
          (t.mobile = t.ios = t.caja = rn && rn.cajaVersion);
        var n = on;
        n &&
          (Fn(/KHTML/, n) && (t.webkit = 1),
          Fn(/IEMobile|XBLWP7/, n) && (t.mobile = "windows"),
          Fn(/Fennec/, n) && (t.mobile = "gecko"),
          (e = Un(n, /AppleWebKit\/([^\s]*)/, 1)) &&
            ((t.webkit = Pn(e)),
            (t.safari = t.webkit),
            Fn(/PhantomJS/, n) &&
              (e = Un(n, /PhantomJS\/([^\s]*)/, 1)) &&
              (t.phantomjs = Pn(e)),
            Fn(/ Mobile\//, n) || Fn(/iPad|iPod|iPhone/, n)
              ? ((t.mobile = "Apple"),
                (e = (e = Un(n, /OS ([^\s]*)/, 1)) && Pn(e.replace("_", "."))),
                (t.ios = e),
                (t.ipad = t.ipod = t.iphone = 0),
                (e = Un(n, /iPad|iPod|iPhone/, 0)) && (t[e[Ht]()] = t.ios))
              : ((e = Un(n, /NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/, 0)) &&
                  (t.mobile = e),
                Fn(/webOS/, n) &&
                  ((t.mobile = "WebOS"),
                  (e = Un(n, /webOS\/([^\s]*);/, 1)) && (t.webos = Pn(e))),
                Fn(/ Android/, n) &&
                  ((t.mobile = "Android"),
                  (e = Un(n, /Android ([^\s]*);/, 1)) && (t.android = Pn(e))),
                Fn(/Silk/, n) &&
                  (e = Un(n, /Silk\/([^\s]*)\)/, 1)) &&
                  (t.silk = Pn(e))),
            (e = n.match(/(Chrome|CrMo)\/([^\s]*)/)) && e[1] && e[2]
              ? ((t.chrome = Pn(e[2])),
                (t.safari = 0),
                "CrMo" === e[1] && (t.mobile = "chrome"))
              : (e = Un(n, /AdobeAIR\/([^\s]*)/)) && (t.air = e[0])),
          t.webkit ||
            ((e = Un(n, /Opera[\s\/]([^\s]*)/, 1))
              ? ((t.opera = Pn(e)),
                (e = Un(n, /Opera Mini[^;]*/, 0)) && (t.mobile = e))
              : (e = Un(n, /MSIE\s([^;]*)/, 1))
              ? (t.ie = Pn(e))
              : (e = Un(n, /Gecko\/([^\s]*)/)) &&
                ((t.gecko = 1),
                (e = Un(n, /rv:([^\s\)]*)/, 1)) && (t.gecko = Pn(e)))));
        return t;
      })(),
      fn = ln.ie || 0,
      pn = ln.webkit || 0,
      gn = ln.gecko || 0,
      mn = ln.opera || 0,
      vn = 0,
      hn = {},
      yn = qt + "Width",
      bn = qt + "Height",
      wn = qt + "Top",
      In = qt + "Left",
      _n = "offsetParent",
      En = "offsetTop",
      Tn = "offsetLeft",
      kn = "offsetWidth",
      xn = "offsetHeight",
      Sn = "clientWidth",
      An = "clientHeight",
      Rn = "innerWidth",
      Dn = "innerHeight",
      Nn = "parentNode";
    function Cn(e) {
      var t,
        n,
        a,
        r,
        i,
        o,
        s,
        d,
        c,
        u = { t: 0, l: 0, r: 0, b: 0, w: 0, h: 0, z: 0 },
        l = "getBoundingClientRect",
        f = 0,
        p = 0,
        g = 0,
        m = 0,
        v = un,
        h = Vn(e) || an[Kt],
        y = h[xt],
        b = h.documentMode || 0;
      if (qn(e))
        try {
          if (
            ((i = zn(e)),
            (t = Hn(e)),
            (n = $n(e)),
            (u.l = e[Tn] || 0),
            (u.t = e[En] || 0),
            (a = e),
            (r = dn),
            (v = gn || pn > 519),
            !(e === t) && e[l])
          )
            sn &&
              (!b || (b > 0 && b < 8) || "BackCompat" === y) &&
              ((s = t.clientLeft), (d = t.clientTop)),
              (c = e[l]()),
              (u.t = c.top),
              (u.l = c.left),
              (s || d) && ((u.l -= s), (u.t -= d)),
              (n.y || n.x) &&
                (!ln.ios || ln.ios >= 4.2) &&
                ((u.l += n.x), (u.t += n.y));
          else {
            for (; (a = a[_n]) && qn(a) && r !== a; )
              (s = a[Tn]),
                (d = a[En]),
                (u.t += d),
                (u.l += s),
                v && (u = Wn(a, u)),
                (r = a);
            if ("fixed" != i.position) {
              for (a = e, r = dn; (a = a[Nn]) && qn(a) && r !== a && a != t; )
                (f = a[wn]),
                  (p = a[In]),
                  gn && "visible" != (o = zn(a))[Yt] && (u = Wn(a, u, o)),
                  (f || p) && ((u.l -= p), (u.t -= f)),
                  (r = a);
              (u.l += n.x), (u.t += n.y);
            } else (u.l += n.x), (u.t += n.y);
          }
          e == t ? ((m = e[An]), (g = e[Sn])) : ((m = e[xn]), (g = e[kn])),
            (u.b = u.t + m),
            (u.r = u.l + g),
            (u.w = en(g, 0)),
            (u.h = en(m, 0)),
            (u.z = i.zIndex);
        } catch (e) {
          u = { t: 0, l: 0, r: 0, b: 0, w: 0, h: 0, z: 0 };
        }
      return u;
    }
    function qn(e) {
      return 1 === On(e);
    }
    function On(e) {
      return Jn(e && e.nodeType, -1);
    }
    function Mn(e) {
      return (e = Bn(e)) && -1 == e.search(/\D+/g)
        ? cn
        : e && -1 != e.search(/px/gi)
        ? cn
        : void 0;
    }
    function Bn(e) {
      var t = typeof e;
      return t == jt
        ? e
        : t != Vt || e
        ? t == Wt && e && e.join
          ? e.join("")
          : !1 === e
          ? "false"
          : !0 === e
          ? "true"
          : e
          ? Qt(e)
          : ""
        : "0";
    }
    function Pn(e) {
      var t = 0;
      return parseFloat(
        e.replace(/\./g, function () {
          return 1 == t++ ? "" : ".";
        })
      );
    }
    function Un(e, t, n) {
      var a = e && e.match(t);
      return n == dn ? a : (a && a[n]) || dn;
    }
    function Fn(e, t) {
      return e.test(t);
    }
    function Ln(e) {
      var t,
        n = dn;
      try {
        e &&
          ((n = e.parentWindow || e.defaultView || dn) ||
            (n = ((t = Vn(e)) && (t.parentWindow || t.defaultView)) || dn));
      } catch (e) {
        n = dn;
      }
      return n;
    }
    function zn(e) {
      var t;
      if (Ln(e).getComputedStyle)
        try {
          t = Ln(e).getComputedStyle(e, dn);
        } catch (e) {
          t = dn;
        }
      else
        try {
          t = e.currentStyle;
        } catch (e) {
          t = dn;
        }
      return t;
    }
    function Wn(e, t, n) {
      var a = 0,
        r = 0;
      return (
        (n = n || zn(e)) &&
          ((a = n.borderTopWidth),
          (r = n.borderLeftWidth),
          (a = Mn(a) ? Jn(a, 0) : 0),
          (r = Mn(r) ? Jn(r, 0) : 0),
          gn && /^t(?:able|d|h|r|head|foot)$/i.test(Yn(e)) && (a = r = 0)),
        ((t = t || { t: 0, l: 0 }).t += a),
        (t.l += r),
        t
      );
    }
    function jn(e) {
      return e && (e.parentNode || e.parentElement);
    }
    function Vn(e) {
      var t = dn;
      try {
        e && (t = 9 == On(e) ? e : e[Kt] || e.ownerDocument || dn);
      } catch (e) {
        t = dn;
      }
      return t;
    }
    function Hn(e) {
      var t = (e && Vn(e)) || kt,
        n = t[xt],
        a = t[St];
      return n && !mn && "CSS1Compat" != n && (a = t.body), a;
    }
    function Xn(e) {
      var t,
        n,
        a,
        r,
        i = [-1, -1, -1, -1],
        o = [Pt + "Top", Pt + "Right", Pt + "Bottom", Pt + "Left"],
        s = 0;
      if (!e) return i;
      if (fn)
        for (; (n = o[s]); )
          Mn((t = e[n])) && (t = Jn(t, -1)) >= 0 && (i[s] = t), s++;
      else if ((t = e[Pt]) && -1 != t.search(/\d+/g))
        for (
          r = (i =
            (i = (t = t.replace(/\w+\(([^\)]*?)\)/g, "$1")).split(" "))[Gt] <= 1
              ? i.split(",")
              : i)[Gt],
            s = 0;
          r--;

        )
          Mn((a = i[s])) ? (i[s] = Jn(a, -1)) : (i[s] = -1), s++;
      return i;
    }
    function Jn(e, t, n, a) {
      if (typeof e != Vt)
        try {
          e = e ? parseFloat(e) : Ut.NaN;
        } catch (t) {
          e = Ut.NaN;
        }
      return (
        a == dn && (a = Ft),
        n == dn && (n = Lt),
        (isNaN(e) || e < n || e > a) && t != dn ? t : e
      );
    }
    function Gn(e, t) {
      var n = un,
        a = (e && e[At]) || -1,
        r = (t && t[At]) || -1;
      if (1 == a && -1 != r)
        if (e[Nt])
          if (mn || 1 == r) n = e[Nt](t);
          else
            for (; t; ) {
              if (e === t) {
                n = cn;
                break;
              }
              t = t.parentNode;
            }
        else e[zt] && (n = e === t || !!(16 & e[zt](t)));
      return n;
    }
    function Yn(e) {
      return (e && 1 == e[At] && e.tagName[Ht]()) || "";
    }
    function Kn(e, t, n) {
      try {
        arguments[Gt] > 2
          ? n === dn
            ? e[Bt](t)
            : ((n = Bn(n)),
              "class" == t[Ht]() ? (e.className = n) : e[Mt](t, n))
          : (n = Bn(e[Ot](t)));
      } catch (e) {
        n = "";
      }
      return n;
    }
    function $n(e) {
      var t,
        n,
        a,
        r,
        i = { x: 0, y: 0, w: 0, h: 0 },
        o = { scrollLeft: 0, scrollTop: 0, scrollWidth: 0, scrollHeight: 0 },
        s = 0,
        d = 0;
      return (
        (n = (t = Vn(e) || kt)[St] || o),
        (r = t.body || o),
        (a = t.defaultView) &&
          ((s = Jn(a.pageXOffset, 0)), (d = Jn(a.pageYOffset, 0))),
        (i.x = en(n.scrollLeft, r.scrollLeft, s)),
        (i.y = en(n.scrollTop, r.scrollTop, d)),
        (i.w = en(n.scrollWidth, r.scrollWidth, 0)),
        (i.h = en(n.scrollHeight, r.scrollHeight, 0)),
        i
      );
    }
    function Qn(e, t, n) {
      var a,
        r,
        i,
        o,
        s,
        d,
        c,
        u,
        l,
        f,
        p,
        g,
        m,
        v,
        h,
        y,
        b,
        w,
        I,
        _,
        E,
        T,
        k,
        x,
        S,
        A,
        R,
        D,
        N,
        C,
        q,
        O,
        M,
        B,
        P,
        U = e && jn(e),
        F = Hn(e),
        L = Cn(e),
        z = Cn(F),
        W = $n(F),
        j = (function (e) {
          var t = Hn(e),
            n = 0,
            a = 0;
          return (
            t && ((n = t.scrollWidth || 0), (a = t.scrollHeight || 0)),
            { t: 0, l: 0, b: a, r: n, w: n, h: a }
          );
        })(e),
        V = { t: 0, l: 0, r: 0, b: 0, w: 0, h: 0 },
        H = {
          t: 0,
          l: 0,
          r: 0,
          b: 0,
          xs: 0,
          ys: 0,
          xiv: 0,
          yiv: 0,
          iv: 0,
          w: 0,
          h: 0,
        },
        X = [],
        J = un,
        G = { left: dn, right: dn, top: dn, bottom: dn };
      if (((t = t && "object" == typeof t ? t : {}), U))
        for (
          a = z.t, r = z.l, i = z.r, o = z.b;
          (c = zn(U)) &&
          (("block" != c.display &&
            "absolute" != c.position &&
            "none" == c.float &&
            "none" == c.clear) ||
            ((J = U == F),
            (f = (B = Cn(U)).t),
            (p = B.l),
            (g = B.r),
            (m = B.b),
            (_ = c[Yt + "X"]),
            (E = c[Yt + "Y"]),
            (T = c[Yt]),
            (k = J ? [-1, -1, -1, -1] : Xn(c)),
            (P = un),
            J ? ((v = W.w), (b = W.h)) : ((v = U[yn]), (b = U[bn])),
            (h = U[kn]),
            (w = U[xn]),
            (y = U[Sn]),
            (I = U[An]),
            !d && h > y && (d = h - y),
            !s && w > I && (s = w - I),
            J
              ? (v > y &&
                  ((p = 0) > r && (r = p),
                  (g = (an[Rn] || h) + W.x) < i && (i = g)),
                b > I &&
                  ((f = 0) > a && (a = f),
                  (m = (an[Dn] || w) + W.y) < o && (o = m)))
              : (d && g - p == h && (g -= d),
                s && m - f == w && (m -= s),
                (_ != Rt &&
                  _ != qt &&
                  _ != Dt &&
                  T != Rt &&
                  T != qt &&
                  T != Dt) ||
                  (p > r && ((r = p), (G.left = U)),
                  g < i && ((i = g), (G.right = U)),
                  _ == qt || T == qt
                    ? (X.push(U), (P = cn))
                    : (_ == Dt || T == Dt) && v > y && (X.push(U), (P = cn))),
                k[3] > 0 && (D = p + k[3]) > r && ((r = D), (G.left = U)),
                k[1] > 0 && (N = g + k[1]) < i && ((i = N), (G.right = U)),
                (E != Rt &&
                  E != qt &&
                  E != Dt &&
                  T != Rt &&
                  T != qt &&
                  T != Dt) ||
                  (f > a && ((a = f), (G.top = U)),
                  m < o && ((o = m), (G.bottom = U)),
                  P ||
                    (E == qt || T == qt
                      ? (X.push(U), (P = cn))
                      : (E == Dt || T == Dt) &&
                        b > I &&
                        (X.push(U), (P = cn)))),
                k[0] > 0 && (A = f + k[0]) > a && ((a = A), (G.top = U)),
                k[2] > 0 && (R = B.t + k[2]) < o && ((o = R), (G.bottom = U)))),
          U != F) &&
          (U = jn(U)) &&
          Yn(U);

        );
      return (
        ((V = { t: en(a, 0), l: en(r, 0), r: en(i, 0), b: en(o, 0) }).w = en(
          V.r - V.l,
          0
        )),
        (V.h = en(V.b - V.t, 0)),
        (p = L.l),
        (g = L.r),
        (f = L.t),
        (u = g - p),
        (l = (m = L.b) - f),
        (D = V.l),
        (N = V.r),
        (A = V.t),
        N - D,
        (R = V.b) - A,
        (S = (S = (S = tn(m, R) - en(f, A)) < 0 ? 0 : S) > l ? l : S),
        (x = (x = (x = tn(g, N) - en(p, D)) < 0 ? 0 : x) > u ? u : x),
        (H.t = A < f ? (R <= f ? 0 : en(f - A, 0)) : 0),
        (H.b = R > m ? (m <= A ? 0 : en(R - m, 0)) : 0),
        (H.l =
          D < p ? (N <= p ? 0 : R <= f ? 0 : m <= A ? 0 : en(p - D, 0)) : 0),
        (H.r = N > g ? (g <= D ? 0 : R <= f ? 0 : en(N - g, 0)) : 0),
        (H.w = en(H.r - H.l, 0)),
        (H.h = en(H.b - H.t, 0)),
        (H.xiv = u > 0 ? Jn((x / u)[Xt](2)) : 0),
        (H.yiv = l > 0 ? Jn((S / l)[Xt](2)) : 0),
        (H.iv = u > 0 || l > 0 ? Jn(((x * S) / (u * l))[Xt](2)) : 0),
        (H.civ = 0),
        n &&
          H.iv > 0.49 &&
          ((C = (M = (function (e) {
            var t,
              n,
              a,
              r,
              i,
              o,
              s,
              d,
              c,
              u,
              l,
              f,
              p,
              g,
              m,
              v,
              h = Cn(e),
              y = Vn(e),
              b = Hn(y),
              w = h.t,
              I = h.l,
              _ = Ct,
              E = [],
              T = 0;
            if (
              ((E.on = 0),
              (t = h.w),
              (n = h.h),
              (i = a = nn(t / _)),
              (o = r = nn(n / _)),
              t <= 1 || n <= 1 || a < 1 || r < 1)
            )
              return E;
            if (
              ((m = (v = $n()).y),
              (g = v.x),
              (f = I + t),
              (p = w + n),
              y && b && y[Jt])
            ) {
              for (; i < t; ) {
                for (o = r; o < n; )
                  (d = w + o),
                    (s = I + i) <= f && d <= p && E.push({ x: s, y: d, on: 0 }),
                    (o += r);
                i += a;
              }
              for (; (c = E[T++]); )
                (s = en(c.x - g, 0)),
                  (s = tn(s, c.x)),
                  (d = en(c.y - m, 0)),
                  (d = tn(d, c.y)),
                  0 != s
                    ? 0 != d
                      ? (l = y[Jt](s, d)) &&
                        l !== b &&
                        l !== e &&
                        !Gn(l, e) &&
                        ((u = Kn(l, "id")) ||
                          Kn(
                            l,
                            "id",
                            (u = Bn([
                              "geom_inter",
                              "_",
                              new Date().getTime(),
                              "_",
                              Zt.round(100 * Zt.random()),
                              "_",
                              vn++,
                            ]))
                          ),
                        (c.on = u),
                        E.on++)
                      : ((c.on = "!y-offscreen"), E.on++)
                    : ((c.on = "!x-offscreen"), E.on++);
            }
            return E;
          })(e))[Gt]),
          (q = Jn(M.on, 0)) &&
            ((O = 1 - Jn((q / C)[Xt](2), 0)), (H.civ = H.iv = O))),
        (t.rect = L),
        (t.clipRect = V),
        (t.docRect = j),
        X[Gt]
          ? ((t.isRoot = un), (t.canScroll = cn), (H.xs = !!s), (H.ys = !!d))
          : z.b >= V.b || z.r >= V.r
          ? ((t.isRoot = cn),
            (H.xs = !!(j.w > z.w && s)),
            (H.ys = !!(j.h > z.h && d)),
            (t.canScroll = j.w > z.w || j.h > z.h))
          : (H.ys = H.xs = t.isRoot = t.canScroll = un),
        (t.scrollNodes = X),
        (t.clipNodes = G),
        (t.expRect = H),
        H
      );
    }
    function Zn(e, t, n) {
      var a,
        r,
        i,
        o,
        s,
        d,
        c,
        u,
        l,
        f,
        p,
        g,
        m = {},
        v = {};
      if (
        (Qn(t, v, cn),
        !n && !v.isRoot && v.canScroll && ((r = v.expRect).xs || r.ys))
      ) {
        ta(e), (a = []), (hn[e] = a);
        for (var h = 0; h < v.scrollNodes.length; h++) {
          var y = v.scrollNodes[h],
            b = {};
          (b.node = y),
            (b[$t] = function (t) {
              ea(t, e, y);
            }),
            R(y, qt, b[$t]),
            a.push(b);
        }
      }
      return (
        (m.win =
          ((s = (o && Ln(o)) || an),
          (d = s.innerHeight || 0),
          (c = s.innerWidth || 0),
          (u = s.screenY || s.screenTop || 0),
          (l = d + u),
          (f = s.screenX || s.screenLeft || 0),
          (p = c + f),
          (g = Hn(o)),
          d ||
            c ||
            !g ||
            ((d = g.clientHeight || 0),
            (p = f + (c = g.clientWidth || 0)),
            (l = u + d)),
          { t: u, l: f, b: l, r: p, w: c, h: d })),
        (m.par = v.clipRect),
        (r = v.expRect),
        ((i = v.rect).iv = r.iv),
        (i.xiv = r.xiv),
        (i.yiv = r.yiv),
        delete r.iv,
        delete r.xiv,
        delete r.yiv,
        (m.exp = r),
        (m.self = i),
        m
      );
    }
    function ea(e, t, n) {
      var a = hn[t];
      if (a)
        for (var r = 0; r < a.length; r++) {
          var i = a[r];
          if (i.node === n) {
            i.tID && (clearTimeout(i.tID), delete i.tID),
              (i.tID = setTimeout(function () {
                var e = Tt().getIframe(t);
                e && Ma(e.iframe, t, Zn(t, e.iframe, cn));
              }, Sa));
            break;
          }
        }
    }
    function ta(e) {
      var t,
        n = hn[e];
      if (n)
        for (; (t = n.pop()); )
          t.tID && clearTimeout(t.tID),
            D(t.node, qt, t[$t]),
            (t.node = t[$t] = dn),
            (hn[e] = dn);
      delete hn[e];
    }
    var na = ie();
    function aa(e) {
      pt({
        strategy: "WithAttributes",
        data: { id: "itunes-launch-store", src: e.detail.url },
      });
    }
    var ra = [],
      ia = {},
      oa = {},
      sa = [],
      da = {},
      ca = fe(function () {
        R(na, "focus", Na),
          R(na, "blur", Ca),
          R(na, "resize", Pa),
          R(na, "scroll", Pa),
          R(na, "unload", function () {
            try {
              D(na, "focus", Na),
                D(na, "blur", Ca),
                D(na, "resize", Pa),
                D(na, "scroll", Pa),
                Ua();
            } catch (e) {}
          });
      }),
      ua = ie(),
      la = !1,
      fa = {},
      pa = void 0,
      ga = {},
      ma = function () {
        return fa;
      },
      va = function () {
        return ga;
      },
      ha = function (e) {
        e
          ? ((pa = Q(e, "http") || Q(e, "https") ? e : "https://" + e),
            L("Setting endpoint to: " + pa))
          : W("Cannot set an empty endpoint");
      },
      ya = function (e) {
        la = e;
      };
    var ba = void 0,
      wa = void 0,
      Ia = !0,
      _a = function (e, t) {
        var n = t,
          a = void 0,
          r = void 0;
        function i(e) {
          var t = Ia ? "tcString" : "consentData";
          Ia &&
            e &&
            e.gdprApplies &&
            e.purpose &&
            e.purpose.consents &&
            !e.purpose.consents[1] &&
            ya(!0);
          var n = {
            consent_string: e ? e[t] : void 0,
            consent_required: e ? e.gdprApplies : void 0,
          };
          wa.gdpr_consent = n;
        }
        function o(e) {
          clearTimeout(a), i(ba), fe(s(e));
        }
        function s(e) {
          e && z(e + " Resuming request without consent information."), n();
        }
        if (
          (wa = e).consentManagement &&
          (wa.consentManagement.disabled ||
            (wa.consentManagement.tcf && wa.consentManagement.tcf.disabled))
        )
          return fe(s());
        var d = 1e4;
        if (
          (wa.consentManagement &&
            B(wa.consentManagement.timeout) &&
            (d = wa.consentManagement.timeout),
          ba)
        )
          return i(ba), fe(s());
        (a = setTimeout(function () {
          o(ba ? "" : "CMP workflow exceeded timeout threshold.");
        }, d)),
          (function (e, t) {
            var n = {};
            try {
              (r = window.__tcfapi || window.top.__tcfapi) ||
                ((r = window.__cmp || window.top.__cmp) && (Ia = !1));
            } catch (e) {}
            if (q(r)) r(Ia ? "addEventListener" : "getConsentData", null, e);
            else if (
              window.$sf &&
              window.$sf.ext &&
              "function" == typeof window.$sf.ext.cmp
            )
              (Ia = !1),
                (o = Object.keys(wa.tags)),
                (s = rt(wa.tags[o[0]].sizes)),
                window.$sf.ext.register(
                  s[0].width,
                  s[0].height,
                  function (t, n) {
                    "cmpReturn" === t && e(n.vendorConsentData);
                  }
                ),
                window.$sf.ext.cmp("getConsentData");
            else {
              for (var a = window, i = void 0; !i; ) {
                try {
                  (a.frames.__tcfapiLocator || a.frames.__cmpLocator) &&
                    (i = a),
                    a.frames.__cmpLocator && (Ia = !1);
                } catch (e) {}
                if (a === window.top) break;
                a = a.parent;
              }
              if (!i) return t("CMP not found.");
              !(function (t) {
                var a = Ia ? "__tcfapi" : "__cmp";
                function r(e) {
                  var t = Ia ? "__tcfapiReturn" : "__cmpReturn",
                    a =
                      "string" == typeof e.data && e.data.includes(t)
                        ? JSON.parse(e.data)
                        : e.data;
                  if (a[t]) {
                    var r = a[t];
                    n[r.callId](r.returnValue, r.success),
                      Ia || delete n[r.callId];
                  }
                }
                function i(t, n) {
                  Ia || D(window, "message", r, !1), e(t, n);
                }
                (window[a] = function (e, r, i) {
                  var o,
                    s,
                    d,
                    c = "" + Math.random(),
                    u =
                      ((d = { command: e, parameter: r, callId: c }),
                      (s = a + "Call") in (o = {})
                        ? Object.defineProperty(o, s, {
                            value: d,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                          })
                        : (o[s] = d),
                      o);
                  (n[c] = i), t.postMessage(u, "*");
                }),
                  R(window, "message", r, !1),
                  Ia
                    ? window.__tcfapi("addEventListener", null, i)
                    : window.__cmp("getConsentData", null, i);
              })(i);
            }
            var o, s;
          })(function e(t, n) {
            Ia
              ? (function () {
                  function d() {
                    r && r("removeEventListener", 2, function () {}, e);
                  }
                  n && "object" == typeof t && "string" == typeof t.tcString
                    ? "useractioncomplete" === t.eventStatus ||
                      "tcloaded" === t.eventStatus
                      ? (d(), clearTimeout(a), i((ba = t)), fe(s()))
                      : "cmpuishown" === t.eventStatus &&
                        ((ba = t),
                        t.tcString &&
                          t.purposeOneTreatment &&
                          (d(), clearTimeout(a), i(ba), fe(s())))
                    : o(
                        "CMP returned unexpected consentObject during lookup process; returned value was (" +
                          t +
                          ")"
                      );
                })()
              : "object" != typeof t ||
                "string" != typeof t.consentData ||
                "" === t.consentData
              ? o(
                  "CMP returned unexpected consentObject during lookup process; returned value was (" +
                    t +
                    ")"
                )
              : (clearTimeout(a), i((ba = t)), fe(s()));
          }, o);
      },
      Ea = g.p.NUM,
      Ta = 0,
      ka = 0,
      xa = 0,
      Sa = 500,
      Aa = 2,
      Ra = function (e) {
        L("Expand iframe started by host");
        var t = !1,
          n = !1,
          a = 0,
          r = 0,
          i = 0,
          o = 0,
          s = void 0,
          d = void 0,
          c = ie().document.getElementById(g.m.UT_DIV + e.targetId),
          u = Tt.getInstance().getIframe(e.targetId),
          l = u.iframe.style,
          f = c.style;
        f.display = "";
        var p = parseInt(f.width, 10),
          m = parseInt(f.height, 10);
        if (
          (isNaN(p) && (p = 0),
          isNaN(m) && (m = 0),
          e.bounds.multiDir
            ? ((i =
                p +
                (d = re("data.bounds.left", e.bounds.left, Ea)) +
                re("data.bounds.right", e.bounds.right, Ea)),
              (o =
                m +
                (s = re("data.bounds.top", e.bounds.top, Ea)) +
                re("data.bounds.bottom", e.bounds.bottom, Ea)),
              s ? ((r = -1 * s), (n = !0)) : (r = 0),
              d ? ((a = -1 * d), (t = !0)) : (a = 0))
            : ((i = (t = (a = e.bounds.x) < 0) ? p + -1 * a : p + a),
              (o = (n = (r = e.bounds.y) < 0) ? m + -1 * r : m + r)),
          !(i <= p && o <= m))
        ) {
          (l.width = i + "px"),
            (l.height = o + "px"),
            t && (l.left = a + "px"),
            n && (l.top = r + "px"),
            (l.zIndex = g.o.DEFAULT_ZINDEX),
            (l.position = "relative"),
            (f.position = "relative"),
            e.bounds.push
              ? ((f.width = i + "px"), (f.height = o + "px"))
              : ((f.width = p + "px"), (f.height = m + "px"));
          var v = function () {
            !(function (e, t, n) {
              var a = n.iframe.contentWindow,
                r = {};
              (r.targetId = t.targetId),
                (r.status = e),
                (r.geom = Da(t.targetId, n.iframe)),
                za(a, JSON.stringify(r), ue());
            })(g.o.STATUS.NOTIFY_EXPANDED, e, u);
          };
          e.ext && "number" == typeof e.ext.tweenTime
            ? (function (e, t, n, a) {
                var r = t.style;
                (r.transition = "height " + e.ext.tweenTime + "ms ease"),
                  (r.height = n),
                  (r["overflow-y"] = "hidden"),
                  R(t, "transitionend", function () {
                    "function" == typeof a && a();
                  });
              })(e, c, o, v)
            : v();
        }
      };
    var Da = function (e, t) {
        var n = Zn(e, t);
        return (
          (n.anx = (function () {
            try {
              if (void 0 !== window.top.location.href) {
                var e = window,
                  t = 0,
                  n = 0;
                do {
                  (t +=
                    e.pageYOffset ||
                    e.document.documentElement.scrollTop ||
                    e.document.body.scrollTop),
                    (n +=
                      e.pageXOffset ||
                      e.document.documentElement.scrollLeft ||
                      e.document.body.scrollLeft),
                    (e = e.parent);
                } while (e.parent !== window.top);
                return { scrollTop: t, scrollLeft: n };
              }
            } catch (e) {}
            return { scrollTop: 0, scrollLeft: 0 };
          })()),
          n
        );
      },
      Na = function () {
        qa(!0);
      },
      Ca = function () {
        qa(!1);
      };
    function qa(e) {
      Oa(),
        (ka = window.setTimeout(function () {
          var t, n;
          (t = e),
            (n = Tt.getInstance().getIframes()),
            G(n, function (e, n) {
              var a = apntag.requests.tags[n];
              if (a.alwaysUseXDomainIframe || a.enableSafeFrame) {
                var r = e.iframe.contentWindow,
                  i = {};
                (i.targetId = n),
                  (i.value = t),
                  (i.status = g.o.STATUS.FOCUS_CHANGE),
                  za(r, JSON.stringify(i), ue());
              }
            }),
            Oa();
        }, Aa));
    }
    function Oa() {
      ka && (clearTimeout(ka), (ka = 0));
    }
    var Ma = function (e, t, n) {
        var a = e.contentWindow,
          r = {};
        (r.targetId = t),
          (r.geom = n),
          (r.status = g.o.STATUS.GEOM_UPDATE),
          za(a, JSON.stringify(r), ue());
      },
      Ba = function (e, t) {
        Ma(e, t, Da(t, e));
      };
    var Pa = function () {
        Ta || (Ta = window.setTimeout(La, Sa));
      },
      Ua = function () {
        var e = Tt.getInstance().getIframes();
        G(e, function (e, t) {
          var n = apntag.requests.tags[t];
          (n.alwaysUseXDomainIframe || n.enableSafeFrame) &&
            (clearInterval(xa), (xa = 0), ta(t));
        });
      },
      Fa = function (e, t, n) {
        var a = Tt.getInstance().getIframe(n).iframe.contentWindow;
        za(
          a,
          { messageType: e, messagePayload: t, status: "notify", targetId: n },
          ue()
        );
      };
    function La() {
      var e = Tt.getInstance().getIframes();
      G(e, function (e, t) {
        var n = apntag.requests.tags[t];
        (n.alwaysUseXDomainIframe || n.enableSafeFrame) && Ba(e.iframe, t);
      }),
        Ta && (clearTimeout(Ta), (Ta = 0));
    }
    var za = function (e, t, n) {
        "string" != typeof t && (t = JSON.stringify(t)), e.postMessage(t, n);
      },
      Wa = (function () {
        var e = {},
          t = [],
          n = "";
        return {
          invokeNotify: function (n, a, r) {
            t.push(o(n, a, r)),
              G(e, function (e) {
                e.addNotifyMessage(o(n, a, r)), e.status !== Ha && i(e);
              });
          },
          loadRenderer: function (t, n) {
            var i = n.renderer_id;
            if (t.enableSafeFrame && (!window.$sf || !window.$sf.ext))
              return (
                (i = (function (e, t) {
                  return t.renderer_id + "_" + e.targetId;
                })(t, n)),
                void (e[i] = d(n.renderer_url, i, t))
              );
            var o = e[i];
            if (o) {
              var s = e[i];
              o.status === Xa
                ? (u(t), a(s, t, r), (t.displayed = !0))
                : o.addTag(t);
            } else H(window, n.renderer_url), (e[i] = d(n.renderer_url, i, t));
          },
          setRendererStatus: function (t, n) {
            var a = e[t];
            a && ((a.status = n), i(a));
          },
          registerRenderer: function (t, o, s) {
            if (
              ((n = s),
              (o = (function (e) {
                if (q(e)) return { renderAd: e, notify: function () {} };
                if (C(e) && q(e.renderAd))
                  return { renderAd: e.renderAd, notify: e.notify };
              })(o)),
              t && e[t] && C(o))
            ) {
              var d = e[t];
              (d.renderFn = o.renderAd),
                (d.notifyFn = o.notify),
                (d.status = Xa),
                window.currentTag &&
                  window.currentTag.enableSafeFrame &&
                  ((c = window.currentTag),
                  (l = t),
                  (f = Xa),
                  (p = {
                    name: "updateRenderStatus",
                    targetId: c.targetId,
                    rId: l,
                    status: f,
                  }),
                  za(window.parent, p, n)),
                i(d),
                G(d.getTags(), function (e) {
                  e.displayed ||
                    (u(e),
                    a(d.renderFn, e, function (e, t) {
                      r(e, t, d);
                    }),
                    (e.displayed = !0));
                });
            } else
              W("ast.js", "registerRenderer must be called with (id, cbFn)");
            var c, l, f, p;
          },
          clearState: function () {
            (e = {}), (t = []);
          },
        };
        function a(e, t, n) {
          q(e)
            ? e.call(apntag, t, n)
            : C(e) &&
              (q(e.renderFn)
                ? e.renderFn.call(apntag, t, n)
                : W(
                    "Error invoking rendererObj.renderAd(). renderAd must be a function"
                  ));
        }
        function r(e, t, a) {
          a && a.isSafeFrame
            ? (function (e, t) {
                var a = { name: "emitEvent", cmd: [e, t] };
                if (
                  (za(window.parent, a, n),
                  apntag.mockSfListner && apntag.mockSfListner.handler)
                ) {
                  apntag.mockSfListner.handler(apntag.mockSfListner.adObj);
                  var r = {
                    name: "resizeAd",
                    targetId: e,
                    cmd: ["auto", "auto"],
                  };
                  za(window.parent, r, n);
                }
              })(e, t)
            : apntag.emitEvent(e, t);
        }
        function i(e) {
          q(e.notifyFn) &&
            G(e.getNotifyMessages(), function (t) {
              t.sent ||
                ((t.sent = !0), e.notifyFn(t.messageType, t.messagePayload));
            });
        }
        function o(e, t, n) {
          return { messageType: e, messagePayload: t, targetId: n, sent: !1 };
        }
        function s(e, t, n) {
          var a = [],
            r = [];
          (this.getTags = function () {
            return a;
          }),
            (this.addTag = function (e) {
              a.push(e);
            }),
            (this.addNotifyMessage = function (e) {
              r.push(e);
            }),
            (this.getNotifyMessages = function () {
              return r;
            }),
            (this.url = e),
            (this.id = t),
            (this.status = Ha),
            (this.renderFn = function () {}),
            (this.notifyFn = c),
            (this.isSafeFrame = n.enableSafeFrame || !1),
            this.addTag(n);
        }
        function d(e, n, a) {
          var r = new s(e, n, a);
          return (
            (function (e) {
              G(t, function (t) {
                e.addNotifyMessage(t);
              });
            })(r),
            r
          );
        }
        function c(e, t) {
          var n = this.getTags()[0].targetId;
          Fa(e, t, n);
        }
        function u(e) {
          if (!e || !e.isMediated) {
            var t = Ne(e);
            J(window.document.body, t[ja], t[Va]);
          }
        }
      })(),
      ja = g.a.NOTIFY,
      Va = g.a.CREATIVE_ID,
      Ha = "loading",
      Xa = "loaded";
    var Ja = function (e) {
        if (e) {
          if (
            (e.member && (apntag.requests.member = Number(e.member)),
            e.targetingParams &&
              ((apntag.requests.targetingParams = e.targetingParams),
              z(
                "targetingParams will be deprecated soon. Please use keywords instead"
              )),
            e.keywords && (apntag.requests.keywords = e.keywords),
            e.user && (apntag.requests.user = e.user),
            e.app && (apntag.requests.app = e.app),
            e.device && (apntag.requests.device = e.device),
            e.geoOverride)
          ) {
            var t = (function (e) {
              var t = e.countryCode;
              if ("string" == typeof t && 2 === t.length) {
                var n = e.zip;
                if (!("string" != typeof n || n.length < 1))
                  return { countryCode: t.toUpperCase(), zip: n };
                z(
                  "Ignoring geoOveride options, Invalid zip code, it should be of type String and of atleast 1 character."
                );
              } else
                z(
                  "Ignoring geoOveride options, Invalid country code, it should be of type String and of 2 characters."
                );
            })(e.geoOverride);
            t && (apntag.requests.geoOverride = t);
          }
          e.site && (apntag.requests.site = e.site),
            e.disablePsa && (apntag.requests.disablePsa = !0),
            (apntag.requests.enableSafeFrame = !1),
            e.enableSafeFrame && (ca(), (apntag.requests.enableSafeFrame = !0)),
            e.publisherId && (apntag.requests.publisherId = e.publisherId),
            e.consentManagement &&
              (apntag.requests.consentManagement = e.consentManagement),
            e.auctionTimeout &&
              (apntag.requests.auctionTimeout = e.auctionTimeout),
            e.enableMediationEvents &&
              (apntag.requests.enableMediationEvents = !0),
            e.us_privacy &&
              (O(e.us_privacy)
                ? (apntag.requests.us_privacy = e.us_privacy)
                : z("Ignoring us_privacy, it should be a string")),
            e.test && (apntag.requests.test = !0);
        }
      },
      Ga = void 0,
      Ya = function (e) {
        if (
          !(function (e) {
            if (M(e) && e.length > 0) return !0;
            return V("No size mapping defined"), !1;
          })(e.sizeMapping)
        )
          return e.sizes;
        var t,
          n,
          a,
          r =
            ((n = t || Ga || ie()),
            (a = n.document),
            n.innerWidth
              ? n.innerWidth
              : a.body.clientWidth
              ? a.body.clientWidth
              : a.documentElement.clientWidth
              ? a.documentElement.clientWidth
              : 0),
          i = void 0;
        if (!r) {
          i = e.sizeMapping[0];
          for (var o = 0; o < e.sizeMapping.length; o++)
            parseInt(e.sizeMapping[o].minWidth, 10) >
              parseInt(i.minWidth, 10) && (i = e.sizeMapping[o]);
          return i.sizes ? i.sizes : e.sizes;
        }
        for (
          var s = "",
            d = e.sizeMapping.slice().sort(function (e, t) {
              return e.minWidth - t.minWidth;
            }),
            c = 0;
          c < d.length;
          c++
        )
          r >= d[c].minWidth && (i = d[c]);
        return (
          i && i.sizes
            ? ((s = i.sizes),
              L(
                "tag : " +
                  e.targetId +
                  " resized based on device width to : " +
                  s
              ))
            : L(
                "tag : " +
                  e.targetId +
                  " not mapped to any sizes for device width. This request will be suppressed."
              ),
          s
        );
      };
    var Ka = g.l.UNDEFINED;
    function $a(e, t) {
      var n = !1,
        a = e;
      if (
        (2 === arguments.length
          ? ((a = ua.apntag.requests.tags[t]),
            e.sizes && a.sizeMapping
              ? (n = !0)
              : e.sizeMapping && !a.sizeMapping && (n = !0))
          : ((t = e.targetId), e.sizes && e.sizeMapping && (n = !0)),
        n)
      )
        return (
          W("sizes and sizeMapping both cannot be defined for targetId: " + t),
          !1
        );
      if (e.sizeMapping) {
        var r = Ya(e);
        if ("" === r) return "";
        e.sizes = r;
      }
      return !0;
    }
    var Qa = function (e) {
        if (
          (e.rid && (apntag.requests.keywords.rid = e.rid),
          e.provider_id &&
            (apntag.requests.keywords.provider_id = e.provider_id),
          e.debug && (apntag.debug = e.debug),
          e.astToolkit &&
            e.astDongle &&
            (apntag.requests.toolkit = { enabled: !0, dongle: e.astDongle }),
          e.size)
        )
          W("Size is deprecated, please use sizes instead.");
        else if (
          (e.member
            ? (e.member = Number(e.member))
            : (e.member = apntag.requests.member),
          e.member || (e.member = "none"),
          e.tagId || (e.invCode && e.member))
        ) {
          if (e.sizeMapping)
            if (!$a(e))
              return void W(
                "tag not mapped to any sizes for device width: " + e.targetId
              );
          try {
            var t = e.targetId,
              n = (function (e, t) {
                var n = e.member;
                return (
                  (apntag.requests = apntag.requests || {}),
                  (apntag.requests.tags = apntag.requests.tags || {}),
                  (apntag.requests.utCalled = apntag.requests.utCalled || !1),
                  (apntag.requests.hasLeft = apntag.requests.hasLeft || !1),
                  (apntag.requests.cbCalled = apntag.requests.cbCalled || !1),
                  apntag.requests.enableSafeFrame && (e.enableSafeFrame = !0),
                  (e.safeframe = se(da) || {}),
                  te(e, "safeframeConfig") &&
                    (te(e.safeframeConfig, "allowExpansionByPush") &&
                      (e.safeframe.expansionByPush =
                        e.safeframeConfig.allowExpansionByPush),
                    te(e.safeframeConfig, "allowExpansionByOverlay") &&
                      (e.safeframe.expansionByOverlay =
                        e.safeframeConfig.allowExpansionByOverlay),
                    te(e.safeframeConfig, "sandbox") &&
                      (e.safeframe.sandbox = e.safeframeConfig.sandbox),
                    te(e.safeframeConfig, "meta") &&
                      (e.safeframe.meta = e.safeframeConfig.meta)),
                  (apntag.requests.tags[t] = e),
                  (apntag.requests.tags[t].utCalled =
                    apntag.requests.tags[t].utCalled || !1),
                  (apntag.requests.tags[t].showTagCalled =
                    apntag.requests.tags[t].showTagCalled || !1),
                  (apntag.requests.tags[t].displayed =
                    apntag.requests.tags[t].displayed || !1),
                  (apntag.requests.tags[t].initialHeight = 1),
                  (apntag.requests.tags[t].initialWidth = 1),
                  (apntag.requests.tags[t].on = apntag.onEvent || void 0),
                  (apntag.requests.tags[t].off = apntag.offEvent || void 0),
                  (apntag.requests.tags[t].setSizes =
                    apntag.setSizes || void 0),
                  (apntag.requests.tags[t].modifyTag =
                    apntag.modifyTag || void 0),
                  (apntag.requests.tags[t].refresh = function () {
                    return apntag.refresh(this.targetId);
                  }),
                  (apntag.requests.tags[t].setKeywords = function (e, t) {
                    return apntag.setKeywords(this.targetId, e, t);
                  }),
                  (ia[n] = typeof ia[n] === Ka ? [] : ia[n]),
                  ia[n].push(e.targetId),
                  va()[e.targetId] &&
                    (apntag.requests.tags[t].showTagCalled = !0),
                  apntag.requests.tags[t]
                );
              })(e, t);
            return (
              L("defineTag called for: " + t),
              apntag.requests &&
                !0 === apntag.requests.utCalled &&
                !apntag.requests.tags[t].utCalled &&
                L(
                  "A placement was loaded after ut call was started. These ad calls will not be coordinated"
                ),
              n
            );
          } catch (e) {
            W("buildAdTagContainer: " + e.message);
          }
        } else
          W(
            "tagId or (invCode & memberId) should be defined for targetId: " +
              e.targetId
          );
      },
      Za = function (e) {
        (e = e.replace(/(\n)/g, "<br>")), (e = nr() + e);
        var t = document.body,
          n = document.createElement("div");
        n.id = "appnexus_debug_window";
        var a = document.createElement("div");
        (a.style.width = "100%"),
          (a.style.height = "400px"),
          (a.style.clear = "both"),
          t.insertBefore(a, null);
        var r = n.style;
        (r.position = "fixed"),
          (r.bottom = "0px"),
          (r.left = "0px"),
          (r.width = "100%"),
          (r.height = "450px"),
          (r.overflow = "hidden"),
          (r["border-top"] = "1px solid"),
          (r["z-index"] = 999999),
          (r.background = "white"),
          t.insertBefore(n, null);
        var i = document.createElement("div");
        (i.style.width = "100%"), (i.style.height = "30px");
        var o = tr();
        n.appendChild(o);
        var s = o.contentWindow.document;
        o.onload = function () {
          for (
            var e = s.getElementsByTagName("br"),
              t = e.length,
              n = 0,
              a = void 0;
            n < t - 1;
            n++
          )
            "br" === ((a = e[n].nextSibling) && a.nodeName.toLowerCase()) &&
              (a.style.display = "none");
        };
        s.open(), s.write(e), s.write("</script>"), s.close();
      },
      er = function (e) {
        var t =
            nr() +
            e
              .map(function (e) {
                return (
                  '\n      <table style="border: 1px solid black; border-radius: 5px; font-family: sans-serif; margin: 1em; padding: .5em">\n        <tr>\n          <td style="padding-right: 5em;"><b>Target&nbsp;ID</b></td>\n          <td style="width: 100%;">' +
                  ar(e) +
                  "</td>\n        </tr>\n        <tr>\n          <td><b>Creative ID</b></td>\n          <td>" +
                  ir(e, "creative_id") +
                  "</td>\n        </tr>\n        <tr>\n          <td><b>Buyer Member ID</b></td>\n          <td>" +
                  ir(e, "buyer_member_id") +
                  "</td></tr>\n        <tr>\n          <td><b>Creative Size</b></td>\n          <td>" +
                  (function (e) {
                    if (e.nobid) return rr;
                    var t = null,
                      n = null,
                      a = e.ads && e.ads.length ? e.ads[0] : {};
                    return (
                      a.rtb &&
                        a.rtb.banner &&
                        ((t = a.rtb.banner.height), (n = a.rtb.banner.width)),
                      t && n ? n + " x " + t : ""
                    );
                  })(e) +
                  "</td>\n        </tr>\n        <tr>\n          <td><b>Available Sizes</b></td>\n          <td>" +
                  (function (e) {
                    try {
                      var t = ar(e),
                        n = apntag.requests.tags[t].sizes;
                      return JSON.stringify(n);
                    } catch (e) {
                      return "";
                    }
                  })(e) +
                  "</td></tr>\n        <tr>\n          <td><b>Winning Bid</b></td>\n          <td>" +
                  ir(e, "cpm") +
                  "</td></tr>\n        <tr>\n          <td><b>Demand Source</b></td>\n          <td>" +
                  (function (e) {
                    if (e.nobid) return rr;
                    var t = (function (e) {
                      var t = apntag.requests.tags;
                      if (e.ads.length && e.ads[0].seller_member_id)
                        return e.ads[0].seller_member_id;
                      for (var n in t)
                        if (t.hasOwnProperty(n) && t[n].uuid === e.uuid)
                          return t[n].member;
                      return null;
                    })(e);
                    return e.ads[0].csm
                      ? "CSM"
                      : e.ads[0].buyer_member_id === t || e.ads[0].deal_id
                      ? e.ads[0].buyer_member_id !== t && e.ads[0].deal_id
                        ? "Deal"
                        : e.ads[0].buyer_member_id === t
                        ? "Direct"
                        : ""
                      : "RTB";
                  })(e) +
                  "</td></tr>\n        <tr>\n          <td><b>Ad Type</b></td>\n          <td>" +
                  ir(e, "ad_type") +
                  "</td></tr>\n        <tr>\n          <td><b>Media Type</b></td>\n          <td>" +
                  ir(e, "media_type_id") +
                  '</td></tr>\n        <tr>\n          <td style="color: #555; font-size: smaller; padding-top: .5em;" colspan="2">\n            Console Ad Profile:\n            <a href="' +
                  (function (e) {
                    return (
                      "//console.appnexus.com/ad-quality?id=" +
                      e.placement.publisher.id
                    );
                  })(e) +
                  '" target="_blank">' +
                  e.ad_profile_id +
                  "</a>\n            " +
                  (function (e) {
                    return e.ads
                      ? '| <a href="//ib.adnxs.com/cr?id=' +
                          e.ads[0].creative_id +
                          '" target="_blank">Creative Preview<a/>'
                      : "";
                  })(e) +
                  "\n          </td>\n        </tr>\n      </table>\n    "
                );
              })
              .join(" "),
          n = document.body,
          a = document.createElement("div");
        a.id = "appnexus_debug_window";
        var r = document.createElement("div");
        (r.style.width = "100%"),
          (r.style.height = "400px"),
          (r.style.clear = "both"),
          n.insertBefore(r, null);
        var i = a.style;
        (i.position = "fixed"),
          (i.bottom = "0px"),
          (i.left = "0px"),
          (i.width = "100%"),
          (i.height = "450px"),
          (i.overflow = "hidden"),
          (i["border-top"] = "1px solid"),
          (i["z-index"] = 999999),
          (i.background = "white"),
          n.insertBefore(a, null);
        var o = document.createElement("div");
        (o.style.width = "100%"), (o.style.height = "30px");
        var s = tr();
        a.appendChild(s);
        var d = s.contentWindow.document;
        d.open(), d.write(t), d.close();
      };
    function tr() {
      var e = document.createElement("iframe");
      return (
        (e.id = "appnexus-debug-console-loader"),
        (e.height = "100%"),
        (e.width = "100%"),
        (e.border = "0px"),
        (e.hspace = "0"),
        (e.vspace = "0"),
        (e.marginWidth = "0"),
        (e.marginHeight = "0"),
        (e.style.border = "0"),
        (e.frameBorder = "0"),
        e
      );
    }
    function nr() {
      var e = void 0;
      return (
        Je && (e = Je.getItem("ast_dongle")),
        '<div style="margin-top:10px;margin-bottom:10px;"><span style="font-weight:bold">AST Dongle Value:</span> <input\n            id="ast-dongle-input"\n            type="text"\n            length="400"\n            style="border-radius:5px;"\n            placeholder="Enter ast_dongle value"\n            onkeyup=if(' +
          Je +
          "){" +
          Je +
          ".setItem('ast_dongle',event.target.value)};\n            value=" +
          e +
          "\n         /></div>"
      );
    }
    function ar(e) {
      try {
        return Object.keys(apntag.requests.tags).filter(function (t) {
          return apntag.requests.tags[t].uuid === e.uuid;
        })[0];
      } catch (e) {
        return "";
      }
    }
    var rr = '<span style="color: #ccc">nobid</span>';
    function ir(e, t) {
      if (e.nobid) return rr;
      var n = e.ads && e.ads[0][t];
      return n || 0 === n ? n : "";
    }
    var or = function () {
        var e = navigator.userAgent.toLowerCase();
        return (/(webkit)[ \/]([\w.]+)/.exec(e) ||
          /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) ||
          /(msie) ([\w.]+)/.exec(e) ||
          (e.indexOf("compatible") < 0 &&
            /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)) ||
          [])[1];
      },
      sr = g.b.BANNER,
      dr = g.b.NATIVE,
      cr = g.q.AD_TYPE,
      ur = g.b.VIDEO,
      lr = g.q.BANNER,
      fr = g.q.CONTENT,
      pr = g.a.CREATIVE_ID,
      gr = g.h,
      mr = g.a.IMP_URLS,
      vr = g.a.NOAD,
      hr = g.l.OBJECT,
      yr = g.d.RTB,
      br = g.a.TRACKERS,
      wr = g.l.UNDEFINED,
      Ir = function (e, t, n, a) {
        var r = void 0,
          i = void 0,
          o = void 0,
          s = e.adResponse;
        !(function (e) {
          if (e.adResponse && e.adResponse.ads) {
            var t = oe(e.adResponse.ads);
            if (t.banner) {
              var n = e.initCollapsed,
                a = n && n.expandBy && le(gr).indexOf(n.expandBy) >= 0;
              n &&
                !a &&
                z(
                  "TagID " +
                    e.tagId +
                    " initCollapsed is set but expandBy is not recognized, initial size will not be collapsed"
                ),
                (e.initialHeight = a ? 0 : t.banner.height),
                (e.initialWidth = a ? 0 : t.banner.width);
            }
          }
        })(e);
        var d,
          c = Ne(e);
        if (typeof c === wr || null === c || typeof c.error !== wr)
          return (d = s), void J(window.document.body, d[vr], d.uuid);
        if (
          s &&
          e.showTagCalled &&
          !(function (e, t) {
            if (t.renderer_url && t.renderer_id) {
              if (
                ((e.usesRenderer = !0),
                2 === t.renderer_id &&
                  e.enableSafeFrame &&
                  ((e.safeframe.expansionByPush = !0),
                  (e.customIframeProps = {
                    style: "overflow:hidden",
                    allow: "autoplay",
                  })),
                !e.enableSafeFrame)
              )
                return (
                  (function (e, t) {
                    var n = qe(t);
                    if (typeof n === wr)
                      return void W("No Content Source Found");
                    t[t.ad_type] = n;
                    Ce(e), Wa.loadRenderer(e, t);
                  })(e, t),
                  !0
                );
              Wa.loadRenderer(e, t);
            }
          })(e, c)
        ) {
          if (c[cr] === dr && !e.usesRenderer)
            return (
              L(
                "Render for the following ad should be handled outside of ast.js :" +
                  e.targetId
              ),
              (e.displayed = !0),
              (o = bt(e.adResponse)),
              ye.emit(g.g.LOADED, e.targetId, o),
              void j("The " + e.targetId + " ad is loaded.")
            );
          if (c[cr] !== ur || e.usesRenderer) {
            if (c[cr] === sr || e.usesRenderer) {
              if (c.content_source === yr && !e.usesRenderer) {
                var u = c[yr][lr];
                if (P(u) || typeof u !== hr)
                  return void W("Response has no banner object");
                if (!te(u, fr)) return void W("Response has no banner content");
                if (!te(u, "width"))
                  return void W("Response has no banner width");
                if (!te(u, "height"))
                  return void W("Response has no banner height");
              }
              var l = void 0;
              te(n, e.targetId) && (l = n[e.targetId]);
              var f = void 0;
              if (e.alwaysUseXDomainIframe || e.enableSafeFrame) {
                a();
                var p = (f = window.document.getElementById(e.targetId)).style
                    .height,
                  m = f.style.width;
                (f.style.height = e.initialHeight),
                  (f.style.width = e.initialWidth),
                  (f.style.height = p),
                  (f.style.width = m);
              }
              var v = se(t);
              te(e.safeframe, "expansionByPush") &&
                (v.expansionByPush = e.safeframe.expansionByPush),
                te(e.safeframe, "expansionByOverlay") &&
                  (v.expansionByOverlay = e.safeframe.expansionByOverlay),
                te(e.safeframe, "sandbox") && (v.sandbox = e.safeframe.sandbox),
                te(e.safeframe, "meta") && (v.meta = e.safeframe.meta),
                (e.safeframe = v),
                (i = (function (e) {
                  var t = void 0,
                    n = ce(e),
                    a = e.curWindow || window;
                  t = a.document.getElementById(n)
                    ? a.document.getElementById(n)
                    : a.document.createElement("div");
                  return (t.style.display = "none"), (t.id = n), t;
                })(e)),
                (e.alwaysUseXDomainIframe || e.enableSafeFrame) &&
                  ((i.style.height = e.initialHeight + "px"),
                  (i.style.width = e.initialWidth + "px"),
                  (i.style.display = "block"),
                  f.appendChild(i),
                  (e.geom = (function (e, t) {
                    L("Geom starting");
                    var n = Da(e, t);
                    return 0 === xa && (xa = setInterval(Pa, 1e3)), n;
                  })(e.targetId, i))),
                (r = ut(e, c));
              var h = Tt.getInstance(),
                y = {};
              if (
                ((y.iframe = r),
                (y.originalWidth = e.initialWidth),
                (y.originalHeight = e.initialHeight),
                h.add(e.targetId, y),
                (n[e.targetId] = r),
                typeof l !== wr && window.document.getElementById(l.id)
                  ? i.replaceChild(r, l)
                  : i.appendChild(r),
                (e.displayed = !0),
                window.document.body)
              )
                try {
                  !(function (e, t, n) {
                    var a = or(),
                      r = (e.curWindow || window).document.getElementById(
                        e.targetId
                      );
                    if (r) {
                      e.alwaysUseXDomainIframe ||
                        e.enableSafeFrame ||
                        (r.appendChild(t), (t.style.display = "inline")),
                        (e.utDivId = t.id),
                        (e.utiframeId = n.id),
                        a === g.c.IE || a === g.c.OPERA ? lt(n, e) : ft(n, e);
                      var i = e.adResponse.ads
                        ? e.adResponse.ads[0]
                        : e.adResponse.ad;
                      if (void 0 === i)
                        return void z(
                          "No ad found in response, nothing to display."
                        );
                      ((!e.isMediated && !e.usesRenderer) ||
                        (e.adResponse.ad &&
                          "rtb" === e.adResponse.ad.content_source)) &&
                        (!(function (e, t) {
                          for (
                            var n = e[yr][br][0][mr], a = 0;
                            a < n.length;
                            a++
                          )
                            J(t.parentElement, n[a], e[pr]);
                        })(i, n),
                        L("Win notification sent for ad tag: " + e.targetId));
                      var o = qe(i),
                        s = Number(r.style.width.replace(/[^\d\.\-]/g, ""));
                      !isNaN(s) &&
                        s > o.width &&
                        ("center" === e.promoAlignment
                          ? r.setAttribute("align", "center")
                          : r.setAttribute("align", "left")),
                        L("The " + e.targetId + " ad is loaded."),
                        j("The " + e.targetId + " ad is loaded.");
                      var d = bt(e.adResponse);
                      e.usesRenderer ||
                        (apntag.requests.enableMediationEvents &&
                          e.isMediated) ||
                        ye.emit(g.g.LOADED, e.targetId, d);
                    } else
                      z(
                        "No div element found for display ad. This ad will not show. Div id: " +
                          e.targetId
                      );
                  })(e, i, r);
                } catch (e) {
                  W("Error rendering ad: ", e);
                }
              else W("Error rendering ad: window.document.body is undefined");
            } else W("Error rendering ad: unknown type");
            return e.targetId;
          }
          z("Response has no renderer for video");
        }
      };
    var _r = g.b.NATIVE,
      Er = g.b.BANNER,
      Tr = g.b.VIDEO,
      kr = g.l.UNDEFINED;
    function xr(e, t, n) {
      L("renderAd is called"),
        G(apntag.requests.tags, function (e) {
          if (e.uuid === t) {
            e.adResponse = n;
            try {
              if (n.ad && n.ad.ad_type === Er) {
                var a = n.ad.content_source;
                (e.ad = { mediatedContent: n.ad[a].banner.content }),
                  (e.initialHeight = n.ad[a].banner.height),
                  (e.initialWidth = n.ad[a].banner.width);
              }
            } catch (e) {
              W(
                "Error while setting mediated content for banner in renderAd" +
                  e
              );
            }
            var r = Ir(e, da, ma(), ca);
            ra.push(r);
          }
        });
    }
    function Sr(e, t, n) {
      var a = void 0;
      if (e.uuid === t.uuid)
        if (!0 === t.nobid)
          L("No bid for targetId:" + e.targetId),
            (a = bt(t)),
            ye.emit(g.g.NO_BID, n, a);
        else if (
          ((e.adResponse = t),
          (e.utCalled = !0),
          (a = bt(t)),
          ye.emit(g.g.AVAILABLE, n, a),
          !e.prebid && !e.displayed)
        ) {
          var r = Ir(e, da, ma(), ca);
          ra.push(r);
        }
    }
    function Ar(e, t) {
      var n = null;
      if (
        ((apntag.requests.cbCalled = !0),
        typeof e === kr || null === e || e.error)
      ) {
        var a = "malformed response from ad server";
        e && e.error && (a = e.error), W("Error response from impbus: " + a);
        var r = {};
        try {
          r = JSON.parse(t);
        } catch (e) {}
        G(apntag.requests.tags, function (e, t) {
          var i = It(a, t, void 0, 200);
          e && (n = bt(e.adResponse)),
            G(r.tags, function (a) {
              a.uuid === e.uuid && ye.emit(g.g.BAD_REQUEST, t, i, n);
            });
        });
      } else
        e.debug && e.debug.debug_info && Za(e.debug.debug_info),
          e.toolkit && e.toolkit.enabled && er(e.tags),
          G(e.tags, function (e) {
            if (e.error)
              G(apntag.requests.tags, function (t) {
                if (t.uuid === e.uuid) {
                  var n =
                    "There was an exception from targetId:" +
                    t.targetId +
                    " this usually means there is a setup error on the tag (invalid ID etc)";
                  W(n, e.error);
                  var a = It(n, t.targetId, void 0, 200);
                  ye.emit(g.g.BAD_REQUEST, t.targetId, a);
                }
              });
            else {
              if (e.ads && e.ads.length && e.ads[0].ad_type === _r)
                if (
                  !(function (e) {
                    var t = {},
                      n = void 0;
                    G(sa, function (t) {
                      t.uuid === e.uuid && (n = t);
                    }),
                      n && (t = n.native);
                    var a = [];
                    G(t, function (e, t) {
                      !0 === e.required && a.push(t);
                    });
                    var r = bt(e),
                      i = [];
                    G(r.native, function (e, t) {
                      P(e) || i.push(t);
                    });
                    var o = i.length > 0;
                    return (
                      G(a, function (e) {
                        o = o && i.indexOf(e) > -1;
                      }),
                      o
                    );
                  })(e)
                )
                  return void W("required native assets missing from response");
              var t = e.ads,
                a = Se(t),
                r = e.rtb_video_fallback;
              G(
                apntag.requests.tags,
                a || r
                  ? function (r, i) {
                      if (r.uuid === e.uuid) {
                        (r.utCalled = !0),
                          a ? (r.isMediated = !0) : (r.isRtbVideoFallback = !0);
                        var o = Ae(t),
                          s = De(apntag.requests.tags, e);
                        if (o === Tr)
                          (r.isVideoMediation = !0),
                            (n = bt(e)),
                            ye.emit(g.g.AVAILABLE, i, n),
                            Re(o, e, s, xr);
                        else {
                          r.isBannerMediation = !0;
                          var d = Oe(r.targetId, e);
                          (e.ad = { ad_type: Er }),
                            (r.ad = { mediatedContent: d }),
                            Sr(r, e, i);
                        }
                      }
                    }
                  : function (t, n) {
                      Sr(t, e, n);
                    }
              );
            }
          }),
          apntag.requests.checkDisplay && me();
    }
    var Rr = 1,
      Dr = void 0,
      Nr = void 0,
      Cr = function (e, t) {
        var n = t,
          a = void 0;
        function r(e) {
          var t = { us_privacy: e ? e.uspString : void 0 };
          Nr.us_privacy = t.us_privacy;
        }
        function i(e) {
          clearTimeout(a), r(), fe(o(e));
        }
        function o(e) {
          e && z(e + " Resuming request without CCPA USP consent information."),
            n();
        }
        if (
          (Nr = e).consentManagement &&
          (Nr.consentManagement.disabled ||
            (Nr.consentManagement.usp && Nr.consentManagement.usp.disabled))
        )
          return fe(o());
        var s = 1e4;
        if (
          (Nr.consentManagement &&
            B(Nr.consentManagement.timeout) &&
            (s = Nr.consentManagement.timeout),
          Dr)
        )
          return r(Dr), fe(o());
        (a = setTimeout(function () {
          i("CCPA USP CMP workflow exceeded timeout threshold.");
        }, s)),
          (function (e, t) {
            var n = {},
              a = void 0;
            try {
              a = window.__uspapi || window.top.__uspapi;
            } catch (e) {}
            if (q(a)) a("getUSPData", Rr, e);
            else {
              for (var r = window, i = void 0; !i; ) {
                try {
                  r.frames.__uspapiLocator && (i = r);
                } catch (e) {}
                if (r === window.top) break;
                r = r.parent;
              }
              if (!i) return t("CCPA USP CMP not found.");
              !(function (t) {
                function a(e) {
                  var t =
                    "string" == typeof e.data && e.data.includes("uspapiReturn")
                      ? JSON.parse(e.data)
                      : e.data;
                  if (t.__uspapiReturn) {
                    var a = t.__uspapiReturn;
                    n[a.callId](a.returnValue, a.success), delete n[a.callId];
                  }
                }
                (window.__uspapi = function (e, a, r) {
                  var i = "" + Math.random(),
                    o = { __uspapiCall: { command: e, version: a, callId: i } };
                  (n[i] = r), t.postMessage(o, "*");
                }),
                  R(window, "message", a, !1),
                  window.__uspapi("getUSPData", Rr, function (t) {
                    D(window, "message", a, !1), e(t);
                  });
              })(i);
            }
          })(function (e) {
            "object" != typeof e ||
            "string" != typeof e.uspString ||
            "" === e.uspString
              ? i(
                  "CCPA USP CMP returned unexpected consentObject during lookup process; returned value was (" +
                    e +
                    ")"
                )
              : (clearTimeout(a), r((Dr = e)), fe(o()));
          }, i);
      };
    function qr(e, t, n, a, r) {
      G(ia[t], function (t) {
        !(function (e, t, n, a, r) {
          0 === n &&
            (e =
              "Failure to contact endpoint. This can be caused by invalid CORS headers or failure of server to respond.");
          var i = apntag.requests.tags[t],
            o = void 0;
          i && (o = bt(i.adResponse));
          var s = It(e, t, r, n);
          ye.emit(a, t, s, o);
        })(e, t, n, a, r);
      });
    }
    var Or = function (e, t) {
        var n = ua,
          a = (function (e) {
            return (
              e.url +
              (e.url.indexOf("?") + 1 ? "&" : "?") +
              "cb=apntag.handleCb&q=" +
              encodeURI(e.data)
            );
          })(e),
          r = H(n, a);
        (apntag.requests.utCalled = !0),
          (r.onload = function () {
            L("JSONP fallback used instead of POST.");
          }),
          (r.onerror = function (n) {
            if (!apntag.requests.errorReported) {
              var a =
                "Unknown script error contacting endpoint over JSONP. Endpoint: " +
                e.url;
              qr(a, t, "-1", g.g.REQUEST_FAIL, n), W(a);
            }
          }),
          (r.onreadystatechange = function (n) {
            if (
              !(
                ("loaded" !== r.readyState && "complete" !== r.readyState) ||
                apntag.requests.cbCalled ||
                apntag.requests.errorReported
              )
            ) {
              apntag.requests.errorReported = !0;
              var a =
                "Unknown network error contacting endpoint over JSONP. Endpoint: " +
                e.url;
              qr(a, t, "-1", g.g.REQUEST_FAIL, n), W(a);
            }
          });
      },
      Mr = function (e, t) {
        var n = e.data,
          a = new XMLHttpRequest();
        (a.onload = function () {
          var e = null;
          if (200 === a.status)
            try {
              (e = JSON.parse(a.responseText)), apntag.handleCb(e, n);
            } catch (e) {
              W("failed to parse ad response from impbus: " + e.message),
                qr(e.message, t, a.status, g.g.REQUEST_FAIL, e);
            }
          else
            W(a.status + " : " + a.statusText),
              qr(a.statusText, t, a.status, g.g.REQUEST_FAIL);
        }),
          (a.onerror = function (n) {
            var a = n.target.status;
            qr(
              "Error contacting impbus endpoint: " +
                e.url +
                " http response code:" +
                a,
              t,
              a,
              g.g.REQUEST_FAIL
            );
          }),
          a.open("POST", e.url, !0),
          a.setRequestHeader("Content-Type", "text/plain"),
          apntag.requests.test && a.setRequestHeader("X-Is-Test", 1),
          (a.withCredentials = !la);
        try {
          a.send(n), (apntag.requests.utCalled = !0);
        } catch (n) {
          W("Error making POST request: " + n), Or(e, t);
        }
      },
      Br = function (e) {
        var t,
          n = {},
          a =
            ((t = !1),
            G(apntag.requests.tags, function (e) {
              e.prebid && (t = !0);
            }),
            t ? pa + g.f.UT_PREBID : pa + g.f.UT_BASE);
        return (n.url = a), (n.data = JSON.stringify(e)), n;
      },
      Pr = function (e, t) {
        !(function (e) {
          G(apntag.requests.tags, function (e) {
            e.utCalled || ye.emit(g.g.REQUEST, e.targetId);
          }),
            j("Ad is requested for member " + e);
        })(e);
        var n = it(apntag.requests, e, sa, t);
        n = (function (e) {
          if (ie().context && "AMP-AD" === ie().context.tagName) {
            (e.is_amp = !0),
              e.referrer_detection &&
                (e.referrer_detection.rd_can = ie().context.canonicalUrl);
            var t = ie().context.consentSharedData;
            if (t) {
              var n = {
                consent_string: t.consentString,
                consent_required: t.consentRequired,
              };
              e.gdpr_consent = n;
            }
          }
          return e;
        })(n);
        var a = Br(n);
        P(n.tags)
          ? z(
              "ast.loadTagsByMemberId: no defined tags at this point so no /UT request will be made"
            )
          : "withCredentials" in new XMLHttpRequest()
          ? Mr(a, e)
          : Or(a, e);
      },
      Ur = function (e) {
        G(ia, function (t, n) {
          if ("none" === n) Pr(n, e);
          else {
            var a = Number(n);
            isNaN(a) ? W("Invalid value for member") : Pr(a, e);
          }
        });
      },
      Fr = function (e) {
        (e =
          e ||
          ne(apntag.requests.tags, function (e) {
            return e.targetId;
          })),
          M(e) || (e = [e]);
        var t = !1,
          n = !1;
        _a(apntag.requests, function () {
          (t = !0), n && Ur(e);
        }),
          Cr(apntag.requests, function () {
            (n = !0), t && Ur(e);
          });
      };
    function Lr(e) {
      if ((L("getTag called for tag " + e), ge(e)))
        return e && oa[e] ? oa[e] : void 0;
      W("the " + e + " tag is not defined.", g.j.WARN);
    }
    var zr = function (e) {
      (apntag.requests.utCalled = !1),
        (apntag.requests.hasLeft = !1),
        (apntag.requests.cbCalled = !1),
        (apntag.requests.errorReported = !1);
      var t = (function (e) {
        var t = {};
        return 0 === e.length
          ? apntag.requests.tags
          : (G(apntag.requests.tags, function (n, a) {
              for (var r = 0; r < e.length; r++) e[r] === a && (t[a] = n);
            }),
            t);
      })(
        (function (e) {
          var t = [];
          return M(e) ? (t = e) : O(e) && t.push(e), t;
        })(e)
      );
      G(t, function (e, t) {
        G(ra, function (e) {
          if (t === e) {
            var n = ua.document.getElementById(e);
            if (!n) return;
            for (; n.hasChildNodes(); ) n.removeChild(n.firstChild);
          }
        });
      }),
        G(t, function (e) {
          (e.utCalled = !1),
            (e.displayed = !1),
            (e.isMediated = !1),
            (e.isBannerMediation = !1),
            (e.isVideoMediation = !1),
            (e.ad = {});
        });
      try {
        Fr();
      } catch (e) {
        W("refreshTags " + e.message);
      }
    };
    var Wr = g.b.NATIVE,
      jr = g.b.VIDEO,
      Vr = g.l.UNDEFINED,
      Hr = g.l.NUMBER,
      Xr = g.a.NOAD;
    R(ua, "message", function (e) {
      if (e.origin === ue() && "string" == typeof e.data) {
        V("Data sent from creative", e.data);
        var t = void 0;
        try {
          t = JSON.parse(e.data);
        } catch (t) {
          return void ("nobid" === e.data
            ? L("No bid response returned")
            : W("Invalid data from creative: " + e.data));
        }
        if (te(t, "eventType"))
          "adError" === t.eventType &&
            window.apntag.recordErrorEvent(t.exception, t.targetId);
        else
          switch (t.name) {
            case "expand":
              Ra(t);
              break;
            case "collapse":
              !(function (e) {
                L("Collapse iframe started by host");
                var t = ie().document.getElementById(g.m.UT_DIV + e.targetId)
                    .style,
                  n = Tt.getInstance().getIframe(e.targetId),
                  a = n.iframe.style,
                  r = n.originalWidth,
                  i = n.originalHeight;
                e.ext &&
                  (0 === e.ext.width && (r = 0), 0 === e.ext.height && (i = 0)),
                  (a.left = ""),
                  (a.top = "0px"),
                  (t.width = r + "px"),
                  (a.width = r + "px"),
                  (t.height = i + "px"),
                  (a.height = i + "px"),
                  (a.zIndex = "");
                var o = n.iframe.contentWindow,
                  s = {};
                (s.targetId = e.targetId),
                  (s.geom = Da(e.targetId, n.iframe)),
                  (s.status = g.o.STATUS.NOTIFY_COLLAPSED),
                  za(o, JSON.stringify(s), ue());
              })(t);
              break;
            case "cmp":
              !(function (e) {
                function t() {
                  var t = apntag.requests.gdpr_consent,
                    n = Tt.getInstance().getIframe(e.targetId).iframe
                      .contentWindow,
                    a = {
                      targetId: e.targetId,
                      gdpr_consent: t,
                      status: g.o.STATUS.CMP,
                    };
                  za(n, a, ue());
                }
                apntag.requests.gdpr_consent ? t() : _a(apntag.requests, t);
              })(t);
              break;
            case "resizeAd":
              apntag.resizeAd(t.targetId, t.cmd);
              break;
            case "mediatedNative":
              apntag.handleMediationBid(t.targetId);
              break;
            case "emitEvent":
              apntag.emitEvent.apply(null, t.cmd);
              break;
            case "message":
              break;
            case "updateRenderStatus":
              Wa.setRendererStatus(t.rId + "_" + t.targetId, t.status);
              break;
            case "setParentDivStyleDefaultProp":
              var n = document.getElementById(g.m.UT_DIV + t.targetId);
              G(t.cmd, function (e, t) {
                "" === n.style[t] && (n.style[t] = e);
              });
          }
      }
    }),
      (da.expansionByPush = !1),
      (da.expansionByOverlay = !0),
      (da.readCookie = !1),
      (da.writeCookie = !1),
      (da.sandbox = !1),
      (function () {
        if (/(iPhone)/i.test(navigator.userAgent))
          try {
            R(na.document, "apntag_iTunesLaunch", aa);
          } catch (e) {}
      })();
    try {
      console.info
        ? console.info("AST library loaded: 0.34.0")
        : console.log("AST library loaded: 0.34.0");
    } catch (e) {}
    ua.apntag = typeof ua.apntag !== Vr ? ua.apntag : {};
    var Jr = ua.apntag;
    function Gr(e) {
      var t = {};
      return (
        G(Jr.requests.tags, function (n) {
          (e !== n.uuid && e !== n.targetId) || (t = n);
        }),
        t
      );
    }
    (Jr.anq = Jr.anq || []),
      (Jr.debug = Jr.debug || !1),
      (Jr.dongle = Jr.dongle || void 0),
      (Jr.loaded = !0),
      (Jr.requests = Jr.requests || {}),
      (Jr.requests.keywords = Jr.requests.keywords || {}),
      ha(g.f.IMPBUS),
      (Jr.requests.tagsOnPageCount = Jr.requests.tagsOnPageCount || 0),
      (Jr.requests.waitOnTagsCount = Jr.requests.waitOnTagsCount || 0),
      (Jr.requests.showTagDefinedMap = Jr.requests.showTagDefinedMap || va()),
      (Jr.highlightAd = function (e) {
        if ((V("Invoking apntag.highlightAd", arguments), e)) {
          var t = ma()[e];
          t && (t.style.border = "3px solid #e67300");
        }
      }),
      (Jr.anq.push = function (e) {
        e.call();
      }),
      (Jr.setEndpoint = function (e) {
        V("Invoking apntag.setEndpoint", arguments), ha(e);
      }),
      (Jr.setPageOpts = function (e) {
        V("Invoking apntag.setPageOpts", arguments), Ja(e);
      }),
      (Jr.defineTag = function (e) {
        return (
          V("Invoking apntag.defineTag", arguments),
          (function (e) {
            V("Invoking apntag.defineTag", arguments);
            var t = Qa(e);
            if (t) {
              if ((sa.push(t), oa[t.targetId])) return oa[t.targetId];
              var n = {
                targetId: t.targetId,
                on: t.on,
                off: t.off,
                modifyTag: t.modifyTag,
                setKeywords: t.setKeywords,
              };
              return (oa[t.targetId] = n), n;
            }
            W("No ad will be requested for targetId: " + e.targetId);
          })(e)
        );
      }),
      (Jr.getTag = function (e) {
        if (!e || ge(e)) {
          var t = void 0,
            n = void 0;
          return (
            e
              ? ((n = Lr(e)), (t = pe(Jr.requests.tags[e], n)))
              : ((t = {}),
                Object.keys(Jr.requests.tags).forEach(function (e) {
                  (n = Lr(e)), (t[e] = pe(Jr.requests.tags[e], n));
                })),
            t
          );
        }
        W(e + " is not defined.", g.j.WARN);
      }),
      (Jr.getAdWrap = function (e) {
        if ((V("Invoking apntag.getAdWrap", arguments), ge(e)))
          return e &&
            Jr.requests.tags &&
            Jr.requests.tags[e] &&
            Jr.requests.tags[e].adWrap
            ? Jr.requests.tags[e].adWrap
            : void 0;
        W("the " + e + " tag is not defined.", g.j.WARN);
      }),
      (Jr.setSizes = function (e, t) {
        V("Invoking apntag.setSizes", arguments),
          arguments.length < 2 && ((t = e), (e = this.targetId)),
          ge(e)
            ? (Jr.requests.tags[e].sizes = t)
            : W("the " + e + " tag is not defined.", g.j.WARN);
      }),
      (Jr.modifyTag = function (e, t) {
        V("Invoking apntag.modifyTag", arguments);
        var n = {};
        arguments.length < 2 && ((t = e), (e = this.targetId)),
          ge(e)
            ? ((t.sizes || t.sizeMapping) && $a(t, e),
              G(Jr.requests.tags[e], function (e, t) {
                n[t] = e;
              }),
              G(t, function (e, t) {
                n[t] = e;
              }),
              (Jr.requests.tags[e] = n))
            : W("the " + e + " tag is not defined.", g.j.WARN);
      }),
      (Jr.setKeywords = function (e, t, n) {
        V("Invoking apntag.setKeywords", arguments);
        var a = {};
        "object" == typeof t && null !== t
          ? ge(e)
            ? (G(Jr.requests.tags[e], function (e, t) {
                a[t] = e;
              }),
              (a.keywords = a.keywords || {}),
              "object" == typeof n && null !== n && !0 === n.overrideKeyValue
                ? G(t, function (e, t) {
                    a.keywords[t] = e;
                  })
                : G(t, function (e, t) {
                    te(a.keywords, t)
                      ? M(a.keywords[t])
                        ? (a.keywords[t] = a.keywords[t].concat(e))
                        : (a.keywords[t] = [a.keywords[t]].concat(e))
                      : (a.keywords[t] = e);
                  }),
              (Jr.requests.tags[e] = a))
            : W("the " + e + " tag is not defined.", g.j.WARN)
          : z("unable to set keywords it should be an object");
      }),
      (Jr.onEvent = function (e, t, n) {
        if (
          (V("Invoking apntag.onEvent", arguments),
          2 === arguments.length &&
            "function" == typeof t &&
            typeof this.targetId === Vr)
        )
          (n = t), (t = "*");
        else if (arguments.length < 3 && ((n = t), (t = this.targetId), !ge(t)))
          return void W("the " + t + " tag is not defined.", g.j.WARN);
        ye.on(e, t, n);
      }),
      (Jr.offEvent = function (e, t, n) {
        if (
          (V("Invoking apntag.offEvent", arguments),
          1 === arguments.length && typeof this.targetId === Vr)
        )
          t = "*";
        else if (arguments.length < 2 && ((t = this.targetId), !ge(t)))
          return void W("the " + t + " tag is not defined.", g.j.WARN);
        if (M(e)) for (var a = 0; a < e.length; a++) ye.off(e[a], t, n);
        else ye.off(e, t, n);
      }),
      (Jr.loadTags = function (e) {
        V("Invoking apntag.loadTags", arguments), Fr(e);
      }),
      (Jr.refresh = function (e) {
        V("Invoking apntag.refresh", arguments), zr(e);
      }),
      (Jr.resizeAd = function (e, t) {
        V("Invoking apntag.resizeAd", arguments),
          (function (e, t) {
            var n = 0,
              a = 0;
            M(t) && 2 === t.length
              ? ((a = t[0]), (n = t[1]))
              : W("resizeAd must be invoked with a (targetId,[width, height])");
            var r = ma()[e];
            if (r) {
              var i = Lr(e),
                o = ce(i),
                s = ua.document.getElementById(o);
              if (s) {
                (s.style.height = n),
                  (s.style.width = a),
                  (r.height = n + "px"),
                  (r.width = a + "px"),
                  (r.height = n),
                  (r.width = a);
                var d = apntag.requests.tags[e];
                if (
                  (d &&
                    !d.enableSafeFrame &&
                    ("none" !== s.style.display && 0 === n && 0 === a
                      ? ((d.styleDisplay = s.style.display),
                        (s.style.display = "none"))
                      : "none" === s.style.display &&
                        0 !== n &&
                        0 !== a &&
                        (s.style.display = d.styleDisplay || "inline")),
                  L("ResizeAd successful for targetId: " + e),
                  d && d.isMediated && r.contentWindow)
                ) {
                  var c = ie(),
                    u = c.location.protocol + "//" + c.location.host,
                    l = { name: "resizeAd", size: [a, n] };
                  r.contentWindow.postMessage(JSON.stringify(l), u);
                }
              } else W("Failed to find target for resizeAd: " + e);
            } else W("Failed to find target for resizeAd : " + e);
          })(e, t);
      }),
      (Jr.enableCookieSet = function () {
        z("apntag.enableCookieSet has been depreciated"),
          (function (e) {
            e && e.override && (c = e.override),
              e && e.cookieUrl && (u = e.cookieUrl);
            var t = window.addEventListener
                ? "addEventListener"
                : "attachEvent",
              n = window[t],
              a = "attachEvent" == t ? "onload" : "load";
            "complete" === document.readyState ||
            "interactive" === document.readyState
              ? f()
              : n(
                  a,
                  function (e) {
                    f();
                  },
                  !1
                );
          })();
      }),
      (Jr.collapseAd = function (e, t, n) {
        V("Invoking apntag.collapseAd", arguments),
          z(
            "apntag.collapseAd has been depreciated, Please use apntag.resizeAd"
          );
        var a = 0,
          r = 0,
          i = Lr(e);
        if (i) {
          var o = ce(i);
          typeof t === Hr && (a = t), typeof n === Hr && (r = n);
          var s = ua.document.getElementById(o);
          if (null !== s) {
            Jr.resizeAd(e, [r, a]),
              (s.style.height = a),
              (s.style.width = r),
              (s.style.display = "none");
            var d = Jr.requests.tags[e],
              c = bt(d.adResponse);
            ye.emit(g.g.COLLAPSE, e, c);
          } else W("CollapseAd failed to find ad div : " + e);
        } else W("CollapseAd failed to find targetId : " + e);
      }),
      (Jr.showTag = function (e, t) {
        V("Invoking apntag.showTag", arguments),
          (function (e, t) {
            if ((L("showTag called for " + e), (va()[e] = !0), ge(e))) {
              var n = apntag.requests.tags[e];
              if (((n.showTagCalled = !0), (n.curWindow = t), n.displayed))
                return void z(
                  "Attempting to display ad that is already displayed, will not render this ad again: " +
                    e
                );
              if (apntag.requests.utCalled)
                if (n.adResponse) {
                  var a = Ir(n, da, ma(), ca);
                  ra.push(a), apntag.requests.hasLeft && me();
                } else apntag.requests.checkDisplay = !0;
              else
                z(
                  e +
                    " : showTag() called before ad request was made. This placement might not display if a subsequent loadTags() call is not made"
                );
            } else
              L(
                "the " +
                  e +
                  " tag was loaded before the ad placement was available.",
                g.j.WARN
              );
          })(e, (t = t || ua));
      }),
      (Jr.setPageTargeting = function (e, t) {
        V("Invoking apntag.setPageTargeting", arguments),
          Jr.requests.targetingParams &&
            e &&
            t &&
            (Jr.requests.targetingParams[e] = t);
      }),
      (Jr.getPageTargeting = function (e) {
        if (
          (V("Invoking apntag.getPageTargeting", arguments),
          Jr.requests.targetingParams && e)
        )
          return Jr.requests.targetingParams[e];
      }),
      (Jr.clearPageTargeting = function (e) {
        V("Invoking apntag.clearPageTargeting", arguments),
          Jr.requests.targetingParams &&
            e &&
            delete Jr.requests.targetingParams[e];
      }),
      (Jr.enableDebug = function () {
        (Jr.debug = !0), V("Invoking apntag.enableDebug", arguments);
      }),
      (Jr.disableDebug = function () {
        V("Invoking apntag.disableDebug", arguments), (Jr.debug = !1);
      }),
      (Jr.notify = function (e, t, n) {
        e
          ? Wa.invokeNotify(e, t, n)
          : W("apntag.notify must be called with `messageType`");
      }),
      (Jr.registerRenderer = function (e, t) {
        V("Invoking apntag.registerRenderer", arguments),
          Wa.registerRenderer(e, t);
      }),
      (Jr.getAstVersion = function () {
        return V("Invoking apntag.getAstVersion"), "0.34.0";
      }),
      (Jr.recordErrorEvent = function (e, t) {
        V("Invoking apntag.recordErrorEvent", arguments);
        var n = Jr.requests.tags[t],
          a = bt(n.adResponse),
          r = It(e.message, t, e, 200);
        ye.emit(g.g.ERROR, t, r, a);
      }),
      (Jr.clearRequest = function () {
        V("Invoking apntag.clearRequest", arguments),
          (Jr.requests = {}),
          (Jr.requests.tags = {}),
          (ga = {}),
          Tt.getInstance().resetInstance(),
          (function (e) {
            fa = e;
          })({});
      }),
      (Jr.handleCb = function (e, t) {
        V("Invoking apntag.handleCb", arguments);
        try {
          Ar(e, t);
        } catch (e) {
          var n = e.message ? e.message : e;
          W("Internal AST error : ", e);
          qr(n, void 0, 200, g.g.BAD_REQUEST, e);
        }
      }),
      (Jr.emitEvent = function (e, t, n) {
        (n && n.content_source && !Jr.requests.enableMediationEvents) ||
          (V("Invoking apntag.emitEvent", arguments),
          (function (e, t, n) {
            var a = Gr(e),
              r = wt(a, e, n);
            L(
              "handling event for DOM ID:  " + r.targetId + " eventType : " + t
            ),
              (t = t === g.n.LOADED ? "adLoaded" : t) === g.g.LOADED ||
              t === g.g.LOADED_MEDIATED ||
              t === g.g.NO_BID_MEDIATED
                ? ye.emit(t, r.targetId, r)
                : ye.emit(t, r.targetId);
            t === g.g.NO_BID &&
              a.isMediated &&
              ((i = a.adResponse), J(window.document.body, i[Xr], i.uuid));
            var i;
          })(e, t, n));
      }),
      (Jr.getAdMarkup = function (e, t) {
        if (Jr.requests.tags && Jr.requests.tags[e]) {
          var n = Jr.requests.tags[e];
          if (n.uuid === t) return n.adResponse.ads;
        }
      }),
      (Jr.setSafeFrameConfig = function (e) {
        te(e, "allowExpansionByPush") &&
          (da.expansionByPush = e.allowExpansionByPush),
          te(e, "allowExpansionByOverlay") &&
            (da.expansionByOverlay = e.allowExpansionByOverlay),
          te(e, "sandbox") && (da.sandbox = e.sandbox),
          te(e, "meta") && (da.meta = e.meta);
      }),
      (Jr.fireImpressionTrackers = function (e) {
        if (!e.impressionTrackersFired) {
          (e.impressionTrackersFired = !0),
            V("Firing impression trackers for", e.tagId);
          var t = e.native && e.native.impressionTrackers;
          t &&
            t.length &&
            t.forEach(function (e) {
              J(ua.document.body, e);
            });
          var n = e.native && e.native.javascriptTrackers;
          n && pt({ strategy: "WithContent", data: n });
        }
      }),
      (Jr.attachClickTrackers = function (e, t) {
        var n = document.getElementById(t);
        n
          ? (V("Attaching click track handler to", t),
            R(n, "click", function () {
              var t = e.native && e.native.clickTrackers;
              t &&
                t.length &&
                (V("Firing click trackers for", e.tagId),
                t.forEach(function (e) {
                  J(ua.document.body, e);
                }));
            }))
          : W(
              "HTML element with id " +
                t +
                " not found, click trackers not attached"
            );
      }),
      (Jr.checkAdAvailable = function (e) {
        return (function (e) {
          var t = apntag.requests.tags[e],
            n = t && t.adResponse,
            a = t && t.utCalled && !t.showTagCalled && n && bt(n);
          return function (e) {
            a && (n.nobid || e.resolve(a), n.nobid && e.reject());
          };
        })(e);
      }),
      (Jr.handleMediationBid = function (e) {
        var t = Gr(e),
          n = [];
        try {
          var a = t.adResponse.ads;
          n = a[a.length - 1];
        } catch (e) {
          V("Trying to get mediated adresponse for renderer", e);
        }
        function r() {
          Jr.resizeAd(e, [0, 0]);
        }
        if (n.renderer_url)
          (t.displayed = !1),
            (n.targetId = e),
            n.ad_type === jr &&
              ((function (e) {
                try {
                  Jr.requests.tags[e].adResponse.ads = [n];
                } catch (e) {
                  V("Trying to set adresponse for video renderer", e);
                }
              })(t.targetId),
              t.enableSafeFrame &&
                (function (e) {
                  var t = Tt.getInstance().getIframe(e);
                  t &&
                    t.iframe &&
                    ((t.iframe.allow = "autoplay"),
                    (t.iframe.style = "overflow:hidden"));
                })(t.targetId)),
            t.enableSafeFrame
              ? (function (e) {
                  var t = Tt.getInstance().getIframe(e.targetId).iframe
                    .contentWindow;
                  delete e.curWindow;
                  var n = { status: "nativeAssembly", targetId: e.targetId };
                  za(t, JSON.stringify(n), ue());
                })(t)
              : Wa.loadRenderer(t, n),
            r();
        else {
          var i = bt(t.adResponse, n);
          i.adType === Wr && r(), ye.emit(g.g.LOADED, e, i);
        }
      });
    j("AST library loaded"),
      (function () {
        for (var e = 0; e < Jr.anq.length; e++)
          typeof Jr.anq[e].called === Vr &&
            (Jr.anq[e].call(), (Jr.anq[e].called = !0));
      })(),
      Jr.requests.checkDisplay ||
        (function (e) {
          var t = !1;
          function n() {
            t || ((t = !0), e());
          }
          if (document.addEventListener)
            document.addEventListener("DOMContentLoaded", n, !1);
          else if (document.attachEvent) {
            var a = void 0;
            try {
              a = null !== window.frameElement;
            } catch (e) {}
            if (document.documentElement.doScroll && !a) {
              var r = function () {
                if (!t)
                  try {
                    document.documentElement.doScroll("left"), n();
                  } catch (e) {
                    setTimeout(r, 10);
                  }
              };
              r();
            }
            document.attachEvent("onreadystatechange", function () {
              "complete" === document.readyState && n();
            });
          }
          if (window.addEventListener) window.addEventListener("load", n, !1);
          else if (window.attachEvent) window.attachEvent("onload", n);
          else {
            var i = window.onload;
            window.onload = function () {
              i && i(), n();
            };
          }
        })(me),
      "function" == typeof window.define &&
        window.define.amd &&
        window.define("appnexusAst", [], function () {
          return window.apntag;
        });
  },scroll
]);
