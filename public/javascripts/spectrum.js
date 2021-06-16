!function(t) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], t)
    : "object" == typeof exports && "object" == typeof module
        ? module.exports = t(require("jquery"))
        : t(jQuery)
}(function(jt, Et) {
  "use strict";
  function Dt(t, e, r, n) {
    for (var a = [], i = 0; i < t.length; i++) {
      var o = t[i];
      if (o) {
        var s = tinycolor(o), l = s.toHsl().l < .5
                                    ? "sp-thumb-el sp-thumb-dark"
                                    : "sp-thumb-el sp-thumb-light";
        l += tinycolor.equals(e, o) ? " sp-thumb-active" : "";
        var c = s.toString(n.preferredFormat || "rgb"),
            f = Yt ? "background-color:" + s.toRgbString()
                   : "filter:" + s.toFilter();
        a.push('<span title="' + c + '" data-color="' + s.toRgbString() +
               '" class="' + l + '"><span class="sp-thumb-inner" style="' + f +
               ';" /></span>')
      } else {
        var u = "sp-clear-display";
        a.push(
          jt("<div />")
            .append(
              jt(
                '<span data-color="" style="background-color:transparent;" class="' +
                u + '"></span>')
                .attr("title", n.noColorSelectedText))
            .html())
      }
    }
    return "<div class='sp-cf " + r + "'>" + a.join("") + "</div>"
  }
  function It() {
    for (var t = 0; t < Wt.length; t++)
      Wt[t] && Wt[t].hide()
  }
  function zt(t, e) {
    var r = jt.extend({}, a, t);
    return r.callbacks = {
      move: n(r.move, e),
      change: n(r.change, e),
      show: n(r.show, e),
      hide: n(r.hide, e),
      beforeShow: n(r.beforeShow, e)
    },
           r
  }
  function e(t, e) {
    function n() {
      if (F.showPaletteOnly && (F.showPalette = !0),
          xt.text(F.showPaletteOnly ? F.togglePaletteMoreText
                                    : F.togglePaletteLessText),
          F.palette) {
        J = F.palette.slice(0), U = jt.isArray(J[0]) ? J : [J], Z = {};
        for (var t = 0; t < U.length; t++)
          for (var e = 0; e < U[t].length; e++) {
            var r = tinycolor(U[t][e]).toRgbString();
            Z[r] = !0
          }
      }
      st.toggleClass("sp-flat", T),
        st.toggleClass("sp-input-disabled", !F.showInput),
        st.toggleClass("sp-alpha-enabled", F.showAlpha),
        st.toggleClass("sp-clear-enabled", qt),
        st.toggleClass("sp-buttons-disabled", !F.showButtons),
        st.toggleClass("sp-palette-buttons-disabled", !F.togglePaletteOnly),
        st.toggleClass("sp-palette-disabled", !F.showPalette),
        st.toggleClass("sp-palette-only", F.showPaletteOnly),
        st.toggleClass("sp-initial-disabled", !F.showInitial),
        st.addClass(F.className).addClass(F.containerClassName), C()
    }
    function r() {
      function t(t) {
        return t.data && t.data.ignore
                 ? (m(jt(t.target).closest(".sp-thumb-el").data("color")), _())
                 : (m(jt(t.target).closest(".sp-thumb-el").data("color")), _(),
                    S(!0), F.hideAfterPaletteSelect && b()),
               !1
      }
      if (Xt && st.find("*:not(input)").attr("unselectable", "on"), n(),
          Ct && it.after(Pt).hide(), qt || wt.hide(), T)
        it.after(st).hide();
      else {
        var e = "parent" === F.appendTo ? it.parent() : jt(F.appendTo);
        1 !== e.length && (e = jt("body")), e.append(st)
      }
      a(),
        At.bind("click.spectrum touchstart.spectrum",
                function(t) {
                  ot || h(), t.stopPropagation(),
                    jt(t.target).is("input") || t.preventDefault()
                }),
        (it.is(":disabled") || !0 === F.disabled) && R(), st.click(Lt),
        bt.change(u),
        bt.bind("paste",
                function() {
                  setTimeout(u, 1)
                }),
        bt.keydown(function(t) {
          13 == t.keyCode && u()
        }),
        yt.text(F.cancelText),
        yt.bind("click.spectrum",
                function(t) {
                  t.stopPropagation(), t.preventDefault(), v(), b()
                }),
        wt.attr("title", F.clearText),
        wt.bind("click.spectrum",
                function(t) {
                  t.stopPropagation(), t.preventDefault(), Ot = !0, _(),
                                                           T && S(!0)
                }),
        _t.text(F.chooseText),
        _t.bind("click.spectrum",
                function(t) {
                  t.stopPropagation(), t.preventDefault(),
                    Xt && bt.is(":focus") && bt.trigger("change"),
                    w() && (S(!0), b())
                }),
        xt.text(F.showPaletteOnly ? F.togglePaletteMoreText
                                  : F.togglePaletteLessText),
        xt.bind("click.spectrum",
                function(t) {
                  t.stopPropagation(), t.preventDefault(),
                    F.showPaletteOnly = !F.showPaletteOnly,
                    F.showPaletteOnly || T ||
                      st.css("left", "-=" + (lt.outerWidth(!0) + 5)),
                    n()
                }),
        Kt(pt,
           function(t, e, r) {
             Q = t / V, Ot = !1, r.shiftKey && (Q = Math.round(10 * Q) / 10),
             _()
           },
           s, l),
        Kt(ut,
           function(t, e) {
             X = parseFloat(e / K), Ot = !1, F.showAlpha || (Q = 1), _()
           },
           s, l),
        Kt(ct,
           function(t, e, r) {
             if (r.shiftKey) {
               if (!nt) {
                 var n = Y * z, a = B - G * B,
                     i = Math.abs(t - n) > Math.abs(e - a);
                 nt = i ? "x" : "y"
               }
             } else
               nt = null;
             var o = !nt || "y" === nt;
             (!nt || "x" === nt) && (Y = parseFloat(t / z)),
               o && (G = parseFloat((B - e) / B)), Ot = !1,
                                                   F.showAlpha || (Q = 1), _()
           },
           s, l),
        Rt ? (m(Rt), x(), Ft = F.preferredFormat || tinycolor(Rt).format, i(Rt))
           : x(),
        T && d();
      var r = Xt ? "mousedown.spectrum" : "click.spectrum touchstart.spectrum";
      vt.delegate(".sp-thumb-el", r, t),
        mt.delegate(".sp-thumb-el:nth-child(1)", r, { ignore: !0 }, t)
    }
    function a() {
      if (q && window.localStorage) {
        try {
          var t = window.localStorage[q].split(",#");
          1 < t.length &&
            (delete window.localStorage[q], jt.each(t, function(t, e) {
              i(e)
            }))
        } catch (e) {
        }
        try {
          tt = window.localStorage[q].split(";")
        } catch (e) {
        }
      }
    }
    function i(t) {
      if (O) {
        var e = tinycolor(t).toRgbString();
        if (!Z[e] && -1 === jt.inArray(e, tt))
          for (tt.push(e); tt.length > et;)
            tt.shift();
        if (q && window.localStorage) try {
            window.localStorage[q] = tt.join(";")
          } catch (r) {
          }
      }
    }
    function o() {
      var t = [];
      if (F.showPalette)
        for (var e = 0; e < tt.length; e++) {
          var r = tinycolor(tt[e]).toRgbString();
          Z[r] || t.push(tt[e])
        }
      return t.reverse().slice(0, F.maxSelectionSize)
    }
    function c() {
      var r = y(), t = jt.map(U, function(t, e) {
        return Dt(t, r, "sp-palette-row sp-palette-row-" + e, F)
      });
      a(),
        tt && t.push(Dt(o(), r, "sp-palette-row sp-palette-row-selection", F)),
        vt.html(t.join(""))
    }
    function f() {
      if (F.showInitial) {
        var t = Ht, e = y();
        mt.html(Dt([t, e], e, "sp-palette-row-initial", F))
      }
    }
    function s() {
      (B <= 0 || z <= 0 || K <= 0) && C(),
        I = !0, st.addClass(rt), nt = null,
        it.trigger("dragstart.spectrum", [y()])
    }
    function l() {
      I = !1, st.removeClass(rt), it.trigger("dragstop.spectrum", [y()])
    }
    function u() {
      var t = bt.val();
      if (null !== t && "" !== t || !qt) {
        var e = tinycolor(t);
        e.isValid() ? (m(e), S(!0)) : bt.addClass("sp-validation-error")
      } else
        m(null), S(!0)
    }
    function h() {
      D ? b() : d()
    }
    function d() {
      var t = jt.Event("beforeShow.spectrum");
      D ? C()
        : (it.trigger(t, [y()]),
           !1 === j.beforeShow(y()) || t.isDefaultPrevented() ||
             (It(), D = !0, jt(at).bind("keydown.spectrum", p),
              jt(at).bind("click.spectrum", g),
              jt(window).bind("resize.spectrum", E), Pt.addClass("sp-active"),
              st.removeClass("sp-hidden"), C(), x(), Ht = y(), f(), j.show(Ht),
              it.trigger("show.spectrum", [Ht])))
    }
    function p(t) {
      27 === t.keyCode && b()
    }
    function g(t) {
      2 != t.button && (I || (Tt ? S(!0) : v(), b()))
    }
    function b() {
      D && !T &&
        (D = !1, jt(at).unbind("keydown.spectrum", p),
         jt(at).unbind("click.spectrum", g),
         jt(window).unbind("resize.spectrum", E), Pt.removeClass("sp-active"),
         st.addClass("sp-hidden"), j.hide(y()),
         it.trigger("hide.spectrum", [y()]))
    }
    function v() {
      m(Ht, !0)
    }
    function m(t, e) {
      var r, n;
      tinycolor.equals(t, y())
        ? x()
        : (!t &&qt ? Ot = !0
                   : (Ot = !1, n = (r = tinycolor(t)).toHsv(),
                      X = n.h % 360 / 360, Y = n.s, G = n.v, Q = n.a),
           x(),
           r && r.isValid() && !e && (Ft = F.preferredFormat || r.getFormat()))
    }
    function y(t) {
      return t = t || {},
             qt && Ot ? null
                      : tinycolor.fromRatio(
                          { h: X, s: Y, v: G, a: Math.round(100 * Q) / 100 },
                          { format: t.format || Ft })
    }
    function w() {
      return !bt.hasClass("sp-validation-error")
    }
    function _() {
      x(), j.move(y()), it.trigger("move.spectrum", [y()])
    }
    function x() {
      bt.removeClass("sp-validation-error"), k();
      var t = tinycolor.fromRatio({ h: X, s: 1, v: 1 });
      ct.css("background-color", t.toHexString());
      var e = Ft;
      Q < 1 && (0 !== Q || "name" !== e) &&
        ("hex" !== e && "hex3" !== e && "hex6" !== e && "name" !== e ||
         (e = "rgb"));
      var r = y({ format: e }), n = "";
      if (Mt.removeClass("sp-clear-display"),
          Mt.css("background-color", "transparent"), !r && qt)
        Mt.addClass("sp-clear-display");
      else {
        var a = r.toHexString(), i = r.toRgbString();
        if (Yt || 1 === r.alpha ? Mt.css("background-color", i)
                                : (Mt.css("background-color", "transparent"),
                                   Mt.css("filter", r.toFilter())),
            F.showAlpha) {
          var o = r.toRgb();
          o.a = 0;
          var s = tinycolor(o).toRgbString(),
              l = "linear-gradient(left, " + s + ", " + a + ")";
          Xt ? dt.css("filter", tinycolor(s).toFilter({ gradientType: 1 }, a))
             : (dt.css("background", "-webkit-" + l),
                dt.css("background", "-moz-" + l),
                dt.css("background", "-ms-" + l),
                dt.css("background",
                       "linear-gradient(to right, " + s + ", " + a + ")"))
        }
        n = r.toString(e)
      }
      F.showInput && bt.val(n), F.showPalette && c(), f()
    }
    function k() {
      var t = Y, e = G;
      if (qt && Ot)
        gt.hide(), ht.hide(), ft.hide();
      else {
        gt.show(), ht.show(), ft.show();
        var r = t * z, n = B - e * B;
        r = Math.max(-L, Math.min(z - L, r - L)),
        n = Math.max(-L, Math.min(B - L, n - L)),
        ft.css({ top: n + "px", left: r + "px" });
        var a = Q * V;
        gt.css({ left: a - $ / 2 + "px" });
        var i = X * K;
        ht.css({ top: i - W + "px" })
      }
    }
    function S(t) {
      var e = y(), r = "", n = !tinycolor.equals(e, Ht);
      e && (r = e.toString(Ft), i(e)), kt && it.val(r),
        t && n && (j.change(e), it.trigger("change", [e]))
    }
    function C() {
      D && (z = ct.width(), B = ct.height(), L = ft.height(), ut.width(),
            K = ut.height(), W = ht.height(), V = pt.width(), $ = gt.width(),
            T || (st.css("position", "absolute"),
                  F.offset ? st.offset(F.offset) : st.offset(Bt(st, At))),
            k(), F.showPalette && c(), it.trigger("reflow.spectrum"))
    }
    function P() {
      it.show(), At.unbind("click.spectrum touchstart.spectrum"), st.remove(),
        Pt.remove(), Wt[Nt.id] = null
    }
    function A(t, e) {
      return t === Et
               ? jt.extend({}, F)
               : e === Et
                   ? F[t]
                   : (F[t] = e,
                      "preferredFormat" === t && (Ft = F.preferredFormat),
                      void n())
    }
    function M() {
      ot = !1, it.attr("disabled", !1), At.removeClass("sp-disabled")
    }
    function R() {
      b(), ot = !0, it.attr("disabled", !0), At.addClass("sp-disabled")
    }
    function H(t) {
      F.offset = t, C()
    }
    var F = zt(e, t), T = F.flat, O = F.showSelectionPalette,
        q = F.localStorageKey, N = F.theme, j = F.callbacks, E = Vt(C, 10),
        D = !1, I = !1, z = 0, B = 0, L = 0, K = 0, V = 0, $ = 0, W = 0, X = 0,
        Y = 0, G = 0, Q = 1, J = [], U = [], Z = {},
        tt = F.selectionPalette.slice(0), et = F.maxSelectionSize,
        rt = "sp-dragging", nt = null, at = t.ownerDocument,
        it = (at.body, jt(t)), ot = !1, st = jt(Qt, at).addClass(N),
        lt = st.find(".sp-picker-container"), ct = st.find(".sp-color"),
        ft = st.find(".sp-dragger"), ut = st.find(".sp-hue"),
        ht = st.find(".sp-slider"), dt = st.find(".sp-alpha-inner"),
        pt = st.find(".sp-alpha"), gt = st.find(".sp-alpha-handle"),
        bt = st.find(".sp-input"), vt = st.find(".sp-palette"),
        mt = st.find(".sp-initial"), yt = st.find(".sp-cancel"),
        wt = st.find(".sp-clear"), _t = st.find(".sp-choose"),
        xt = st.find(".sp-palette-toggle"), kt = it.is("input"),
        St = kt && "color" === it.attr("type") && $t(), Ct = kt && !T,
        Pt = Ct ? jt(Gt)
                    .addClass(N)
                    .addClass(F.className)
                    .addClass(F.replacerClassName)
                : jt([]),
        At = Ct ? Pt : it, Mt = Pt.find(".sp-preview-inner"),
        Rt = F.color || kt && it.val(), Ht = !1, Ft = F.preferredFormat,
        Tt = !F.showButtons || F.clickoutFiresChange, Ot = !Rt,
        qt = F.allowEmpty && !St;
    r();
    var Nt = {
      show: d,
      hide: b,
      toggle: h,
      reflow: C,
      option: A,
      enable: M,
      disable: R,
      offset: H,
      set: function(t) {
        m(t), S()
      },
      get: y,
      destroy: P,
      container: st
    };
    return Nt.id = Wt.push(Nt) - 1, Nt
  }
  function Bt(t, e) {
    var r = 0, n = t.outerWidth(), a = t.outerHeight(), i = e.outerHeight(),
        o = t[0].ownerDocument, s = o.documentElement,
        l = s.clientWidth + jt(o).scrollLeft(),
        c = s.clientHeight + jt(o).scrollTop(), f = e.offset();
    return f.top += i,
           f.left -= Math.min(
             f.left, f.left + n > l && n < l ? Math.abs(f.left + n - l) : 0),
           f.top -=
           Math.min(f.top, f.top + a > c && a < c ? Math.abs(a + i - r) : r),
           f
  }
  function t() {}
  function Lt(t) {
    t.stopPropagation()
  }
  function n(t, e) {
    var r = Array.prototype.slice, n = r.call(arguments, 2);
    return function() {
      return t.apply(e, n.concat(r.call(arguments)))
    }
  }
  function Kt(o, s, e, t) {
    function l(t) {
      t.stopPropagation && t.stopPropagation(),
        t.preventDefault && t.preventDefault(), t.returnValue = !1
    }
    function r(t) {
      if (u) {
        if (Xt && f.documentMode < 9 && !t.button) return c();
        var e = t.originalEvent && t.originalEvent.touches &&
                t.originalEvent.touches[0],
            r = e && e.pageX || t.pageX, n = e && e.pageY || t.pageY,
            a = Math.max(0, Math.min(r - h.left, p)),
            i = Math.max(0, Math.min(n - h.top, d));
        g && l(t), s.apply(o, [a, i, t])
      }
    }
    function n(t) {
      (t.which ? 3 == t.which : 2 == t.button) || u ||
        !1 !== e.apply(o, arguments) &&
          (u = !0, d = jt(o).height(), p = jt(o).width(), h = jt(o).offset(),
           jt(f).bind(a), jt(f.body).addClass("sp-dragging"), r(t), l(t))
    }
    function c() {
      u && (jt(f).unbind(a), jt(f.body).removeClass("sp-dragging"),
            setTimeout(
              function() {
                t.apply(o, arguments)
              },
              0)),
        u = !1
    }
    s = s || function() {}, e = e || function() {}, t = t || function() {};
    var f = document, u = !1, h = {}, d = 0, p = 0,
        g = "ontouchstart" in window, a = {};
    a.selectstart = l, a.dragstart = l, a["touchmove mousemove"] = r,
    a["touchend mouseup"] = c, jt(o).bind("touchstart mousedown", n)
  }
  function Vt(n, a, i) {
    var o;
    return function() {
      var t = this, e = arguments, r = function() {
        o = null, n.apply(t, e)
      };
      i && clearTimeout(o), !i && o || (o = setTimeout(r, a))
    }
  }
  function $t() {
    return jt.fn.spectrum.inputTypeColorSupport()
  }
  var
    a = {
      beforeShow: t,
      move: t,
      change: t,
      show: t,
      hide: t,
      color: !1,
      flat: !1,
      showInput: !1,
      allowEmpty: !1,
      showButtons: !0,
      clickoutFiresChange: !0,
      showInitial: !1,
      showPalette: !1,
      showPaletteOnly: !1,
      hideAfterPaletteSelect: !1,
      togglePaletteOnly: !1,
      showSelectionPalette: !0,
      localStorageKey: !1,
      appendTo: "body",
      maxSelectionSize: 7,
      cancelText: "cancel",
      chooseText: "choose",
      togglePaletteMoreText: "more",
      togglePaletteLessText: "less",
      clearText: "Clear Color Selection",
      noColorSelectedText: "No Color Selected",
      preferredFormat: !1,
      className: "",
      containerClassName: "",
      replacerClassName: "",
      showAlpha: !1,
      theme: "sp-light",
      palette: [[
        "#ffffff", "#000000", "#ff0000", "#ff8000", "#ffff00", "#008000",
        "#0000ff", "#4b0082", "#9400d3"
      ]],
      selectionPalette: [],
      disabled: !1,
      offset: null
    },
    Wt = [], Xt = !!/msie/i.exec(window.navigator.userAgent),
    Yt =
      function() {
      function t(t, e) {
        return !!~("" + t).indexOf(e)
      }
      var e = document.createElement("div").style;
      return e.cssText = "background-color:rgba(0,0,0,.5)",
             t(e.backgroundColor, "rgba") || t(e.backgroundColor, "hsla")
    }(),
    Gt =
      [
        "<div class='sp-replacer'>",
        "<div class='sp-preview'><div class='sp-preview-inner'></div></div>",
        "<div class='sp-dd'>&#9660;</div>", "</div>"
      ].join(""),
    Qt = function() {
      var t = "";
      if (Xt)
        for (var e = 1; e <= 6; e++)
          t += "<div class='sp-" + e + "'></div>";
      return [
        "<div class='sp-container sp-hidden'>",
        "<div class='sp-palette-container'>",
        "<div class='sp-palette sp-thumb sp-cf'></div>",
        "<div class='sp-palette-button-container sp-cf'>",
        "<button type='button' class='sp-palette-toggle'></button>",
        "</div>",
        "</div>",
        "<div class='sp-picker-container'>",
        "<div class='sp-top sp-cf'>",
        "<div class='sp-fill'></div>",
        "<div class='sp-top-inner'>",
        "<div class='sp-color'>",
        "<div class='sp-sat'>",
        "<div class='sp-val'>",
        "<div class='sp-dragger'></div>",
        "</div>",
        "</div>",
        "</div>",
        "<div class='sp-clear sp-clear-display'>",
        "</div>",
        "<div class='sp-hue'>",
        "<div class='sp-slider'></div>",
        t,
        "</div>",
        "</div>",
        "<div class='sp-alpha'><div class='sp-alpha-inner'><div class='sp-alpha-handle'></div></div></div>",
        "</div>",
        "<div class='sp-input-container sp-cf'>",
        "<input class='sp-input' type='text' spellcheck='false'  />",
        "</div>",
        "<div class='sp-initial sp-thumb sp-cf'></div>",
        "<div class='sp-button-container sp-cf'>",
        "<a class='sp-cancel' href='#'></a>",
        "<button type='button' class='sp-choose'></button>",
        "</div>",
        "</div>",
        "</div>"
      ].join("")
    }(), i = "spectrum.id";
  jt.fn
    .spectrum =
    function(r) {
    if ("string" != typeof r)
      return this.spectrum("destroy").each(function() {
        var t = e(this, jt.extend({}, r, jt(this).data()));
        jt(this).data(i, t.id)
      });
    var n = this, a = Array.prototype.slice.call(arguments, 1);
    return this.each(function() {
      var t = Wt[jt(this).data(i)];
      if (t) {
        var e = t[r];
        if (!e) throw new Error("Spectrum: no such method: '" + r + "'");
        "get" == r
          ? n = t.get()
          : "container" == r
              ? n = t.container
              : "option" == r
                  ? n = t.option.apply(t, a)
                  : "destroy" == r ? (t.destroy(), jt(this).removeData(i))
                                   : e.apply(t, a)
      }
    }),
           n
  },
 jt.fn.spectrum.load = !0, jt.fn.spectrum.loadOpts = {},
 jt.fn.spectrum.draggable = Kt, jt.fn.spectrum.defaults = a,
 jt.fn.spectrum.inputTypeColorSupport =
    function $t() {
   if ("undefined" == typeof $t._cachedResult) {
     var t = jt("<input type='color'/>")[0];
     $t._cachedResult = "color" === t.type && "" !== t.value
   }
   return $t._cachedResult
 },
 jt.spectrum = {}, jt.spectrum.localization = {}, jt.spectrum.palettes = {},
 jt.fn.spectrum.processNativeColorInputs = function() {
   var t = jt("input[type=color]");
   t.length && !$t() && t.spectrum({ preferredFormat: "hex6" })
 }, function() {
   function n(t) {
     var e = { r: 0, g: 0, b: 0 }, r = 1, n = !1, a = !1;
     return "string" == typeof t && (t = T(t)),
            "object" == typeof t &&
              (t.hasOwnProperty("r") && t.hasOwnProperty("g") &&
                   t.hasOwnProperty("b")
                 ? (e = i(t.r, t.g, t.b), n = !0,
                    a = "%" === String(t.r).substr(-1) ? "prgb" : "rgb")
                 : t.hasOwnProperty("h") && t.hasOwnProperty("s") &&
                       t.hasOwnProperty("v")
                     ? (t.s = R(t.s), t.v = R(t.v), e = l(t.h, t.s, t.v),
                        n = !0, a = "hsv")
                     : t.hasOwnProperty("h") && t.hasOwnProperty("s") &&
                         t.hasOwnProperty("l") &&
                         (t.s = R(t.s), t.l = R(t.l), e = o(t.h, t.s, t.l),
                          n = !0, a = "hsl"),
               t.hasOwnProperty("a") && (r = t.a)),
            r = x(r), {
       ok: n, format: t.format || a, r: D(255, I(e.r, 0)), g: D(255, I(e.g, 0)),
         b: D(255, I(e.b, 0)), a: r
     }
   }
   function i(t, e, r) {
     return {
       r: 255 * k(t, 255), g: 255 * k(e, 255), b: 255 * k(r, 255)
     }
   }
   function a(t, e, r) {
     t = k(t, 255), e = k(e, 255), r = k(r, 255);
     var n, a, i = I(t, e, r), o = D(t, e, r), s = (i + o) / 2;
     if (i == o)
       n = a = 0;
     else {
       var l = i - o;
       switch (a = .5 < s ? l / (2 - i - o) : l / (i + o), i) {
       case t:
         n = (e - r) / l + (e < r ? 6 : 0);
         break;
       case e:
         n = (r - t) / l + 2;
         break;
       case r:
         n = (t - e) / l + 4
       }
       n /= 6
     }
     return {
       h: n, s: a, l: s
     }
   }
   function o(t, e, r) {
     function n(t, e, r) {
       return r < 0 && (r += 1), 1 < r && (r -= 1),
              r < 1 / 6
                ? t + 6 * (e - t) * r
                : r < .5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
     }
     var a, i, o;
     if (t = k(t, 360), e = k(e, 100), r = k(r, 100), 0 === e)
       a = i = o = r;
     else {
       var s = r < .5 ? r * (1 + e) : r + e - r * e, l = 2 * r - s;
       a = n(l, s, t + 1 / 3), i = n(l, s, t), o = n(l, s, t - 1 / 3)
     }
     return {
       r: 255 * a, g: 255 * i, b: 255 * o
     }
   }
   function s(t, e, r) {
     t = k(t, 255), e = k(e, 255), r = k(r, 255);
     var n, a, i = I(t, e, r), o = D(t, e, r), s = i, l = i - o;
     if (a = 0 === i ? 0 : l / i, i == o)
       n = 0;
     else {
       switch (i) {
       case t:
         n = (e - r) / l + (e < r ? 6 : 0);
         break;
       case e:
         n = (r - t) / l + 2;
         break;
       case r:
         n = (t - e) / l + 4
       }
       n /= 6
     }
     return {
       h: n, s: a, v: s
     }
   }
   function l(t, e, r) {
     t = 6 * k(t, 360), e = k(e, 100), r = k(r, 100);
     var n = j.floor(t), a = t - n, i = r * (1 - e), o = r * (1 - a * e),
         s = r * (1 - (1 - a) * e), l = n % 6;
     return {
       r: 255 * [r, o, i, i, s, r][l], g: 255 * [s, r, r, o, i, i][l],
         b: 255 * [i, i, s, r, r, o][l]
     }
   }
   function e(t, e, r, n) {
     var a = [M(E(t).toString(16)), M(E(e).toString(16)), M(E(r).toString(16))];
     return n && a[0].charAt(0) == a[0].charAt(1) &&
                a[1].charAt(0) == a[1].charAt(1) &&
                a[2].charAt(0) == a[2].charAt(1)
              ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0)
              : a.join("")
   }
   function c(t, e, r, n) {
     return [
       M(H(n)), M(E(t).toString(16)), M(E(e).toString(16)), M(E(r).toString(16))
     ].join("")
   }
   function t(t, e) {
     e = 0 === e ? 0 : e || 10;
     var r = B(t).toHsl();
     return r.s -= e / 100, r.s = S(r.s), B(r)
   }
   function r(t, e) {
     e = 0 === e ? 0 : e || 10;
     var r = B(t).toHsl();
     return r.s += e / 100, r.s = S(r.s), B(r)
   }
   function f(t) {
     return B(t).desaturate(100)
   }
   function u(t, e) {
     e = 0 === e ? 0 : e || 10;
     var r = B(t).toHsl();
     return r.l += e / 100, r.l = S(r.l), B(r)
   }
   function h(t, e) {
     e = 0 === e ? 0 : e || 10;
     var r = B(t).toRgb();
     return r.r = I(0, D(255, r.r - E(-e / 100 * 255))),
            r.g = I(0, D(255, r.g - E(-e / 100 * 255))),
            r.b = I(0, D(255, r.b - E(-e / 100 * 255))), B(r)
   }
   function d(t, e) {
     e = 0 === e ? 0 : e || 10;
     var r = B(t).toHsl();
     return r.l -= e / 100, r.l = S(r.l), B(r)
   }
   function p(t, e) {
     var r = B(t).toHsl(), n = (E(r.h) + e) % 360;
     return r.h = n < 0 ? 360 + n : n, B(r)
   }
   function g(t) {
     var e = B(t).toHsl();
     return e.h = (e.h + 180) % 360, B(e)
   }
   function b(t) {
     var e = B(t).toHsl(), r = e.h;
     return [
       B(t), B({ h: (r + 120) % 360, s: e.s, l: e.l }),
       B({ h: (r + 240) % 360, s: e.s, l: e.l })
     ]
   }
   function v(t) {
     var e = B(t).toHsl(), r = e.h;
     return [
       B(t), B({ h: (r + 90) % 360, s: e.s, l: e.l }),
       B({ h: (r + 180) % 360, s: e.s, l: e.l }),
       B({ h: (r + 270) % 360, s: e.s, l: e.l })
     ]
   }
   function m(t) {
     var e = B(t).toHsl(), r = e.h;
     return [
       B(t), B({ h: (r + 72) % 360, s: e.s, l: e.l }),
       B({ h: (r + 216) % 360, s: e.s, l: e.l })
     ]
   }
   function y(t, e, r) {
     e = e || 6, r = r || 30;
     var n = B(t).toHsl(), a = 360 / r, i = [B(t)];
     for (n.h = (n.h - (a * e >> 1) + 720) % 360; --e;)
       n.h = (n.h + a) % 360, i.push(B(n));
     return i
   }
   function w(t, e) {
     e = e || 6;
     for (var r = B(t).toHsv(), n = r.h, a = r.s, i = r.v, o = [], s = 1 / e;
          e--;)
       o.push(B({ h: n, s: a, v: i })), i = (i + s) % 1;
     return o
   }
   function _(t) {
     var e = {};
     for (var r in t)
       t.hasOwnProperty(r) && (e[t[r]] = r);
     return e
   }
   function x(t) {
     return t = parseFloat(t), (isNaN(t) || t < 0 || 1 < t) && (t = 1), t
   }
   function k(t, e) {
     P(t) && (t = "100%");
     var r = A(t);
     return t = D(e, I(0, parseFloat(t))), r && (t = parseInt(t * e, 10) / 100),
            j.abs(t - e) < 1e-6 ? 1 : t % e / parseFloat(e)
   }
   function S(t) {
     return D(1, I(0, t))
   }
   function C(t) {
     return parseInt(t, 16)
   }
   function P(t) {
     return "string" == typeof t && -1 != t.indexOf(".") && 1 === parseFloat(t)
   }
   function A(t) {
     return "string" == typeof t && -1 != t.indexOf("%")
   }
   function M(t) {
     return 1 == t.length ? "0" + t : "" + t
   }
   function R(t) {
     return t <= 1 && (t = 100 * t + "%"), t
   }
   function H(t) {
     return Math.round(255 * parseFloat(t)).toString(16)
   }
   function F(t) {
     return C(t) / 255
   }
   function T(t) {
     t = t.replace(O, "").replace(q, "").toLowerCase();
     var e, r = !1;
     if ($[t])
       t = $[t], r = !0;
     else if ("transparent" == t)
       return { r: 0, g: 0, b: 0, a: 0, format: "name" };
     return (e = X.rgb.exec(t))
              ? { r: e[1], g: e[2], b: e[3] }
              : (e = X.rgba.exec(t))
                  ? { r: e[1], g: e[2], b: e[3], a: e[4] }
                  : (e = X.hsl.exec(t))
                      ? { h: e[1], s: e[2], l: e[3] }
                      : (e = X.hsla.exec(t))
                          ? { h: e[1], s: e[2], l: e[3], a: e[4] }
                          : (e = X.hsv.exec(t))
                              ? { h: e[1], s: e[2], v: e[3] }
                              : (e = X.hsva.exec(t))
                                  ? { h: e[1], s: e[2], v: e[3], a: e[4] }
                                  : (e = X.hex8.exec(t))
                                      ? {
                                          a: F(e[1]),
                                          r: C(e[2]),
                                          g: C(e[3]),
                                          b: C(e[4]),
                                          format: r ? "name" : "hex8"
                                        }
                                      : (e = X.hex6.exec(t))
                                          ? {
                                              r: C(e[1]),
                                              g: C(e[2]),
                                              b: C(e[3]),
                                              format: r ? "name" : "hex"
                                            }
                                          : !!(e = X.hex3.exec(t)) && {
       r: C(e[1] + "" + e[1]), g: C(e[2] + "" + e[2]), b: C(e[3] + "" + e[3]),
         format: r ? "name" : "hex"
     }
   }
   var O = /^[\s,#]+/, q = /\s+$/, N = 0, j = Math, E = j.round, D = j.min,
       I = j.max, z = j.random, B = function(t, e) {
         if (e = e || {}, (t = t || "") instanceof B) return t;
         if (!(this instanceof B)) return new B(t, e);
         var r = n(t);
         this._originalInput = t, this._r = r.r, this._g = r.g, this._b = r.b,
         this._a = r.a, this._roundA = E(100 * this._a) / 100,
         this._format = e.format || r.format,
         this._gradientType = e.gradientType,
         this._r < 1 && (this._r = E(this._r)),
         this._g < 1 && (this._g = E(this._g)),
         this._b < 1 && (this._b = E(this._b)), this._ok = r.ok,
         this._tc_id = N++
       };
   B.prototype = {
     isDark: function() {
       return this.getBrightness() < 128
     },
     isLight: function() {
       return !this.isDark()
     },
     isValid: function() {
       return this._ok
     },
     getOriginalInput: function() {
       return this._originalInput
     },
     getFormat: function() {
       return this._format
     },
     getAlpha: function() {
       return this._a
     },
     getBrightness: function() {
       var t = this.toRgb();
       return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3
     },
     setAlpha: function(t) {
       return this._a = x(t), this._roundA = E(100 * this._a) / 100, this
     },
     toHsv: function() {
       var t = s(this._r, this._g, this._b);
       return {
         h: 360 * t.h, s: t.s, v: t.v, a: this._a
       }
     },
     toHsvString: function() {
       var t = s(this._r, this._g, this._b), e = E(360 * t.h), r = E(100 * t.s),
           n = E(100 * t.v);
       return 1 == this._a ? "hsv(" + e + ", " + r + "%, " + n + "%)"
                           : "hsva(" + e + ", " + r + "%, " + n + "%, " +
                               this._roundA + ")"
     },
     toHsl: function() {
       var t = a(this._r, this._g, this._b);
       return {
         h: 360 * t.h, s: t.s, l: t.l, a: this._a
       }
     },
     toHslString: function() {
       var t = a(this._r, this._g, this._b), e = E(360 * t.h), r = E(100 * t.s),
           n = E(100 * t.l);
       return 1 == this._a ? "hsl(" + e + ", " + r + "%, " + n + "%)"
                           : "hsla(" + e + ", " + r + "%, " + n + "%, " +
                               this._roundA + ")"
     },
     toHex: function(t) {
       return e(this._r, this._g, this._b, t)
     },
     toHexString: function(t) {
       return "#" + this.toHex(t)
     },
     toHex8: function() {
       return c(this._r, this._g, this._b, this._a)
     },
     toHex8String: function() {
       return "#" + this.toHex8()
     },
     toRgb: function() {
       return {
         r: E(this._r), g: E(this._g), b: E(this._b), a: this._a
       }
     },
     toRgbString: function() {
       return 1 == this._a ? "rgb(" + E(this._r) + ", " + E(this._g) + ", " +
                               E(this._b) + ")"
                           : "rgba(" + E(this._r) + ", " + E(this._g) + ", " +
                               E(this._b) + ", " + this._roundA + ")"
     },
     toPercentageRgb: function() {
       return {
         r: E(100 * k(this._r, 255)) + "%", g: E(100 * k(this._g, 255)) + "%",
           b: E(100 * k(this._b, 255)) + "%", a: this._a
       }
     },
     toPercentageRgbString: function() {
       return 1 == this._a
                ? "rgb(" + E(100 * k(this._r, 255)) + "%, " +
                    E(100 * k(this._g, 255)) + "%, " +
                    E(100 * k(this._b, 255)) + "%)"
                : "rgba(" + E(100 * k(this._r, 255)) + "%, " +
                    E(100 * k(this._g, 255)) + "%, " +
                    E(100 * k(this._b, 255)) + "%, " + this._roundA + ")"
     },
     toName: function() {
       return 0 === this._a
                ? "transparent"
                : !(this._a < 1) && (W[e(this._r, this._g, this._b, !0)] || !1)
     },
     toFilter: function(t) {
       var e = "#" + c(this._r, this._g, this._b, this._a), r = e,
           n = this._gradientType ? "GradientType = 1, " : "";
       t && (r = B(t).toHex8String());
       return "progid:DXImageTransform.Microsoft.gradient(" + n +
              "startColorstr=" + e + ",endColorstr=" + r + ")"
     },
     toString: function(t) {
       var e = !!t;
       t = t || this._format;
       var r = !1, n = this._a < 1 && 0 <= this._a;
       return e || !n ||
                  "hex" !== t && "hex6" !== t && "hex3" !== t && "name" !== t
                ? ("rgb" === t && (r = this.toRgbString()),
                   "prgb" === t && (r = this.toPercentageRgbString()),
                   "hex" !== t && "hex6" !== t || (r = this.toHexString()),
                   "hex3" === t && (r = this.toHexString(!0)),
                   "hex8" === t && (r = this.toHex8String()),
                   "name" === t && (r = this.toName()),
                   "hsl" === t && (r = this.toHslString()),
                   "hsv" === t && (r = this.toHsvString()),
                   r || this.toHexString())
                : "name" === t && 0 === this._a ? this.toName()
                                                : this.toRgbString()
     },
     _applyModification: function(t, e) {
       var r = t.apply(null, [this].concat([].slice.call(e)));
       return this._r = r._r, this._g = r._g, this._b = r._b,
              this.setAlpha(r._a), this
     },
     lighten: function() {
       return this._applyModification(u, arguments)
     },
     brighten: function() {
       return this._applyModification(h, arguments)
     },
     darken: function() {
       return this._applyModification(d, arguments)
     },
     desaturate: function() {
       return this._applyModification(t, arguments)
     },
     saturate: function() {
       return this._applyModification(r, arguments)
     },
     greyscale: function() {
       return this._applyModification(f, arguments)
     },
     spin: function() {
       return this._applyModification(p, arguments)
     },
     _applyCombination: function(t, e) {
       return t.apply(null, [this].concat([].slice.call(e)))
     },
     analogous: function() {
       return this._applyCombination(y, arguments)
     },
     complement: function() {
       return this._applyCombination(g, arguments)
     },
     monochromatic: function() {
       return this._applyCombination(w, arguments)
     },
     splitcomplement: function() {
       return this._applyCombination(m, arguments)
     },
     triad: function() {
       return this._applyCombination(b, arguments)
     },
     tetrad: function() {
       return this._applyCombination(v, arguments)
     }
   },
   B.fromRatio = function(t, e) {
     if ("object" == typeof t) {
       var r = {};
       for (var n in t)
         t.hasOwnProperty(n) && (r[n] = "a" === n ? t[n] : R(t[n]));
       t = r
     }
     return B(t, e)
   }, B.equals = function(t, e) {
     return !(!t || !e) && B(t).toRgbString() == B(e).toRgbString()
   }, B.random = function() {
     return B.fromRatio({ r: z(), g: z(), b: z() })
   }, B.mix = function(t, e, r) {
     r = 0 === r ? 0 : r || 50;
     var n,
       a = B(t).toRgb(), i = B(e).toRgb(), o = r / 100, s = 2 * o - 1,
       l = i.a - a.a,
       c = 1 - (n = ((n = s * l == -1 ? s : (s + l) / (1 + s * l)) + 1) / 2),
       f = {
         r: i.r * n + a.r * c,
         g: i.g * n + a.g * c,
         b: i.b * n + a.b * c,
         a: i.a * o + a.a * (1 - o)
       };
     return B(f)
   }, B.readability = function(t, e) {
     var r = B(t), n = B(e), a = r.toRgb(), i = n.toRgb(),
         o = r.getBrightness(), s = n.getBrightness(),
         l = Math.max(a.r, i.r) - Math.min(a.r, i.r) + Math.max(a.g, i.g) -
             Math.min(a.g, i.g) + Math.max(a.b, i.b) - Math.min(a.b, i.b);
     return {
       brightness: Math.abs(o - s), color: l
     }
   }, B.isReadable = function(t, e) {
     var r = B.readability(t, e);
     return 125 < r.brightness && 500 < r.color
   }, B.mostReadable = function(t, e) {
     for (var r = null, n = 0, a = !1, i = 0; i < e.length; i++) {
       var o = B.readability(t, e[i]), s = 125 < o.brightness && 500 < o.color,
           l = o.brightness / 125 * 3 + o.color / 500;
       (s && !a || s && a && n < l || !s && !a && n < l) &&
         (a = s, n = l, r = B(e[i]))
     }
     return r
   };
   var L, K, V,
     $ = B.names = {
       aliceblue: "f0f8ff",
       antiquewhite: "faebd7",
       aqua: "0ff",
       aquamarine: "7fffd4",
       azure: "f0ffff",
       beige: "f5f5dc",
       bisque: "ffe4c4",
       black: "000",
       blanchedalmond: "ffebcd",
       blue: "00f",
       blueviolet: "8a2be2",
       brown: "a52a2a",
       burlywood: "deb887",
       burntsienna: "ea7e5d",
       cadetblue: "5f9ea0",
       chartreuse: "7fff00",
       chocolate: "d2691e",
       coral: "ff7f50",
       cornflowerblue: "6495ed",
       cornsilk: "fff8dc",
       crimson: "dc143c",
       cyan: "0ff",
       darkblue: "00008b",
       darkcyan: "008b8b",
       darkgoldenrod: "b8860b",
       darkgray: "a9a9a9",
       darkgreen: "006400",
       darkgrey: "a9a9a9",
       darkkhaki: "bdb76b",
       darkmagenta: "8b008b",
       darkolivegreen: "556b2f",
       darkorange: "ff8c00",
       darkorchid: "9932cc",
       darkred: "8b0000",
       darksalmon: "e9967a",
       darkseagreen: "8fbc8f",
       darkslateblue: "483d8b",
       darkslategray: "2f4f4f",
       darkslategrey: "2f4f4f",
       darkturquoise: "00ced1",
       darkviolet: "9400d3",
       deeppink: "ff1493",
       deepskyblue: "00bfff",
       dimgray: "696969",
       dimgrey: "696969",
       dodgerblue: "1e90ff",
       firebrick: "b22222",
       floralwhite: "fffaf0",
       forestgreen: "228b22",
       fuchsia: "f0f",
       gainsboro: "dcdcdc",
       ghostwhite: "f8f8ff",
       gold: "ffd700",
       goldenrod: "daa520",
       gray: "808080",
       green: "008000",
       greenyellow: "adff2f",
       grey: "808080",
       honeydew: "f0fff0",
       hotpink: "ff69b4",
       indianred: "cd5c5c",
       indigo: "4b0082",
       ivory: "fffff0",
       khaki: "f0e68c",
       lavender: "e6e6fa",
       lavenderblush: "fff0f5",
       lawngreen: "7cfc00",
       lemonchiffon: "fffacd",
       lightblue: "add8e6",
       lightcoral: "f08080",
       lightcyan: "e0ffff",
       lightgoldenrodyellow: "fafad2",
       lightgray: "d3d3d3",
       lightgreen: "90ee90",
       lightgrey: "d3d3d3",
       lightpink: "ffb6c1",
       lightsalmon: "ffa07a",
       lightseagreen: "20b2aa",
       lightskyblue: "87cefa",
       lightslategray: "789",
       lightslategrey: "789",
       lightsteelblue: "b0c4de",
       lightyellow: "ffffe0",
       lime: "0f0",
       limegreen: "32cd32",
       linen: "faf0e6",
       magenta: "f0f",
       maroon: "800000",
       mediumaquamarine: "66cdaa",
       mediumblue: "0000cd",
       mediumorchid: "ba55d3",
       mediumpurple: "9370db",
       mediumseagreen: "3cb371",
       mediumslateblue: "7b68ee",
       mediumspringgreen: "00fa9a",
       mediumturquoise: "48d1cc",
       mediumvioletred: "c71585",
       midnightblue: "191970",
       mintcream: "f5fffa",
       mistyrose: "ffe4e1",
       moccasin: "ffe4b5",
       navajowhite: "ffdead",
       navy: "000080",
       oldlace: "fdf5e6",
       olive: "808000",
       olivedrab: "6b8e23",
       orange: "ffa500",
       orangered: "ff4500",
       orchid: "da70d6",
       palegoldenrod: "eee8aa",
       palegreen: "98fb98",
       paleturquoise: "afeeee",
       palevioletred: "db7093",
       papayawhip: "ffefd5",
       peachpuff: "ffdab9",
       peru: "cd853f",
       pink: "ffc0cb",
       plum: "dda0dd",
       powderblue: "b0e0e6",
       purple: "800080",
       rebeccapurple: "663399",
       red: "f00",
       rosybrown: "bc8f8f",
       royalblue: "4169e1",
       saddlebrown: "8b4513",
       salmon: "fa8072",
       sandybrown: "f4a460",
       seagreen: "2e8b57",
       seashell: "fff5ee",
       sienna: "a0522d",
       silver: "c0c0c0",
       skyblue: "87ceeb",
       slateblue: "6a5acd",
       slategray: "708090",
       slategrey: "708090",
       snow: "fffafa",
       springgreen: "00ff7f",
       steelblue: "4682b4",
       tan: "d2b48c",
       teal: "008080",
       thistle: "d8bfd8",
       tomato: "ff6347",
       turquoise: "40e0d0",
       violet: "ee82ee",
       wheat: "f5deb3",
       white: "fff",
       whitesmoke: "f5f5f5",
       yellow: "ff0",
       yellowgreen: "9acd32"
     },
     W = B.hexNames = _($),
     X =
       (K = "[\\s|\\(]+(" +
            (L = "(?:" +
                 "[-\\+]?\\d*\\.\\d+%?" +
                 ")|(?:" +
                 "[-\\+]?\\d+%?" +
                 ")") +
            ")[,|\\s]+(" + L + ")[,|\\s]+(" + L + ")\\s*\\)?",
        V = "[\\s|\\(]+(" + L + ")[,|\\s]+(" + L + ")[,|\\s]+(" + L +
            ")[,|\\s]+(" + L + ")\\s*\\)?",
        {
          rgb: new RegExp("rgb" + K),
          rgba: new RegExp("rgba" + V),
          hsl: new RegExp("hsl" + K),
          hsla: new RegExp("hsla" + V),
          hsv: new RegExp("hsv" + K),
          hsva: new RegExp("hsva" + V),
          hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
          hex8:
            /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
        });
   window.tinycolor = B
 }(), jt(function() {
    jt.fn.spectrum.load && jt.fn.spectrum.processNativeColorInputs()
  })
});