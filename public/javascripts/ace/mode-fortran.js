ace.define(
  "ace/mode/fortran_highlight_rules",
  [
    "require", "exports", "module", "ace/lib/oop",
    "ace/mode/text_highlight_rules"
  ],
  function(e, t, n) {
    "use strict";
    var
      r = e("../lib/oop"),
      i = e("./text_highlight_rules").TextHighlightRules, s = function() {
        var
          e =
            "call|case|contains|continue|cycle|do|else|elseif|end|enddo|endif|function|if|implicit|in|include|inout|intent|module|none|only|out|print|program|return|select|status|stop|subroutine|return|then|use|while|write|CALL|CASE|CONTAINS|CONTINUE|CYCLE|DO|ELSE|ELSEIF|END|ENDDO|ENDIF|FUNCTION|IF|IMPLICIT|IN|INCLUDE|INOUT|INTENT|MODULE|NONE|ONLY|OUT|PRINT|PROGRAM|RETURN|SELECT|STATUS|STOP|SUBROUTINE|RETURN|THEN|USE|WHILE|WRITE",
          t = "and|or|not|eq|ne|gt|ge|lt|le|AND|OR|NOT|EQ|NE|GT|GE|LT|LE",
          n = "true|false|TRUE|FALSE", r = "abs|achar|acos|acosh|adjustl|adjustr|aimag|aint|all|allocate|anint|any|asin|asinh|associated|atan|atan2|atanh|bessel_j0|bessel_j1|bessel_jn|bessel_y0|bessel_y1|bessel_yn|bge|bgt|bit_size|ble|blt|btest|ceiling|char|cmplx|conjg|cos|cosh|count|cpu_time|cshift|date_and_time|dble|deallocate|digits|dim|dot_product|dprod|dshiftl|dshiftr|dsqrt|eoshift|epsilon|erf|erfc|erfc_scaled|exp|float|floor|format|fraction|gamma|input|len|lge|lgt|lle|llt|log|log10|maskl|maskr|matmul|max|maxloc|maxval|merge|min|minloc|minval|mod|modulo|nint|not|norm2|null|nullify|pack|parity|popcnt|poppar|precision|present|product|radix|random_number|random_seed|range|repeat|reshape|round|rrspacing|same_type_as|scale|scan|selected_char_kind|selected_int_kind|selected_real_kind|set_exponent|shape|shifta|shiftl|shiftr|sign|sin|sinh|size|sngl|spacing|spread|sqrt|sum|system_clock|tan|tanh|tiny|trailz|transfer|transpose|trim|ubound|unpack|verify|ABS|ACHAR|ACOS|ACOSH|ADJUSTL|ADJUSTR|AIMAG|AINT|ALL|ALLOCATE|ANINT|ANY|ASIN|ASINH|ASSOCIATED|ATAN|ATAN2|ATANH|BESSEL_J0|BESSEL_J1|BESSEL_JN|BESSEL_Y0|BESSEL_Y1|BESSEL_YN|BGE|BGT|BIT_SIZE|BLE|BLT|BTEST|CEILING|CHAR|CMPLX|CONJG|COS|COSH|COUNT|CPU_TIME|CSHIFT|DATE_AND_TIME|DBLE|DEALLOCATE|DIGITS|DIM|DOT_PRODUCT|DPROD|DSHIFTL|DSHIFTR|DSQRT|EOSHIFT|EPSILON|ERF|ERFC|ERFC_SCALED|EXP|FLOAT|FLOOR|FORMAT|FRACTION|GAMMA|INPUT|LEN|LGE|LGT|LLE|LLT|LOG|LOG10|MASKL|MASKR|MATMUL|MAX|MAXLOC|MAXVAL|MERGE|MIN|MINLOC|MINVAL|MOD|MODULO|NINT|NOT|NORM2|NULL|NULLIFY|PACK|PARITY|POPCNT|POPPAR|PRECISION|PRESENT|PRODUCT|RADIX|RANDOM_NUMBER|RANDOM_SEED|RANGE|REPEAT|RESHAPE|ROUND|RRSPACING|SAME_TYPE_AS|SCALE|SCAN|SELECTED_CHAR_KIND|SELECTED_INT_KIND|SELECTED_REAL_KIND|SET_EXPONENT|SHAPE|SHIFTA|SHIFTL|SHIFTR|SIGN|SIN|SINH|SIZE|SNGL|SPACING|SPREAD|SQRT|SUM|SYSTEM_CLOCK|TAN|TANH|TINY|TRAILZ|TRANSFER|TRANSPOSE|TRIM|UBOUND|UNPACK|VERIFY",
          i =
            "logical|character|integer|real|type|LOGICAL|CHARACTER|INTEGER|REAL|TYPE",
          s =
            "allocatable|dimension|intent|parameter|pointer|target|private|public|ALLOCATABLE|DIMENSION|INTENT|PARAMETER|POINTER|TARGET|PRIVATE|PUBLIC",
          o = this.createKeywordMapper({
            "invalid.deprecated": "debugger",
            "support.function": r,
            "constant.language": n,
            keyword: e,
            "keyword.operator": t,
            "storage.type": i,
            "storage.modifier": s
          },
                                       "identifier"),
          u = "(?:r|u|ur|R|U|UR|Ur|uR)?", a = "(?:(?:[1-9]\\d*)|(?:0))",
          f = "(?:0[oO]?[0-7]+)", l = "(?:0[xX][\\dA-Fa-f]+)",
          c = "(?:0[bB][01]+)",
          h = "(?:" + a + "|" + f + "|" + l + "|" + c + ")",
          p = "(?:[eE][+-]?\\d+)", d = "(?:\\.\\d+)", v = "(?:\\d+)",
          m = "(?:(?:" + v + "?" + d + ")|(?:" + v + "\\.))",
          g = "(?:(?:" + m + "|" + v + ")" + p + ")",
          y = "(?:" + g + "|" + m + ")",
          b =
            "\\\\(x[0-9A-Fa-f]{2}|[0-7]{3}|[\\\\abfnrtv'\"]|U[0-9A-Fa-f]{8}|u[0-9A-Fa-f]{4})";
        this.$rules = {
          start: [
            { token: "comment", regex: "!.*$" },
            { token: "string", regex: u + '"{3}', next: "qqstring3" },
            { token: "string", regex: u + '"(?=.)', next: "qqstring" },
            { token: "string", regex: u + "'{3}", next: "qstring3" },
            { token: "string", regex: u + "'(?=.)", next: "qstring" },
            { token: "constant.numeric", regex: "(?:" + y + "|\\d+)[jJ]\\b" },
            { token: "constant.numeric", regex: y },
            { token: "constant.numeric", regex: h + "[lL]\\b" },
            { token: "constant.numeric", regex: h + "\\b" }, {
              token: "keyword",
              regex:
                "#\\s*(?:include|import|define|undef|INCLUDE|IMPORT|DEFINE|UNDEF)\\b"
            },
            {
              token: "keyword",
              regex:
                "#\\s*(?:endif|ifdef|else|elseif|ifndef|ENDIF|IFDEF|ELSE|ELSEIF|IFNDEF)\\b"
            },
            { token: o, regex: "[a-zA-Z_$][a-zA-Z0-9_$]*\\b" }, {
              token: "keyword.operator",
              regex:
                "\\+|\\-|\\*|\\*\\*|\\/|\\/\\/|%|<<|>>|&|\\||\\^|~|<|>|<=|=>|==|!=|<>|="
            },
            { token: "paren.lparen", regex: "[\\[\\(\\{]" },
            { token: "paren.rparen", regex: "[\\]\\)\\}]" },
            { token: "text", regex: "\\s+" }
          ],
          qqstring3: [
            { token: "constant.language.escape", regex: b },
            { token: "string", regex: '"{3}', next: "start" },
            { defaultToken: "string" }
          ],
          qstring3: [
            { token: "constant.language.escape", regex: b },
            { token: "string", regex: '"{3}', next: "start" },
            { defaultToken: "string" }
          ],
          qqstring: [
            { token: "constant.language.escape", regex: b },
            { token: "string", regex: "\\\\$", next: "qqstring" },
            { token: "string", regex: '"|$', next: "start" },
            { defaultToken: "string" }
          ],
          qstring: [
            { token: "constant.language.escape", regex: b },
            { token: "string", regex: "\\\\$", next: "qstring" },
            { token: "string", regex: "'|$", next: "start" },
            { defaultToken: "string" }
          ]
        }
      };
    r.inherits(s, i), t.FortranHighlightRules = s
  }),
  ace.define("ace/mode/folding/cstyle",
             [
               "require", "exports", "module", "ace/lib/oop", "ace/range",
               "ace/mode/folding/fold_mode"
             ],
             function(e, t, n) {
               "use strict";
               var r = e("../../lib/oop"), i = e("../../range").Range,
                   s = e("./fold_mode").FoldMode, o = t.FoldMode = function(e) {
                     e && (this.foldingStartMarker =
                             new RegExp(this.foldingStartMarker.source.replace(
                               /\|[^|]*?$/, "|" + e.start)),
                           this.foldingStopMarker =
                             new RegExp(this.foldingStopMarker.source.replace(
                               /\|[^|]*?$/, "|" + e.end)))
                   };
               r.inherits(o, s), function() {
                 this.foldingStartMarker = /([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,
                 this.foldingStopMarker =
                   /^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,
                 this.singleLineBlockCommentRe = /^\s*(\/\*).*\*\/\s*$/,
                 this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/,
                 this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/,
                 this._getFoldWidgetBase = this.getFoldWidget,
                 this.getFoldWidget = function(e, t, n) {
                   var r = e.getLine(n);
                   if (this.singleLineBlockCommentRe.test(r) &&
                       !this.startRegionRe.test(r) &&
                       !this.tripleStarBlockCommentRe.test(r))
                     return "";
                   var i = this._getFoldWidgetBase(e, t, n);
                   return !i && this.startRegionRe.test(r) ? "start" : i
                 }, this.getFoldWidgetRange = function(e, t, n, r) {
                   var i = e.getLine(n);
                   if (this.startRegionRe.test(i))
                     return this.getCommentRegionBlock(e, i, n);
                   var s = i.match(this.foldingStartMarker);
                   if (s) {
                     var o = s.index;
                     if (s[1]) return this.openingBracketBlock(e, s[1], n, o);
                     var u = e.getCommentFoldRange(n, o + s[0].length, 1);
                     return u && !u.isMultiLine() &&
                              (r ? u = this.getSectionRange(e, n)
                                 : t != "all" && (u = null)),
                            u
                   }
                   if (t === "markbegin") return;
                   var s = i.match(this.foldingStopMarker);
                   if (s) {
                     var o = s.index + s[0].length;
                     return s[1] ? this.closingBracketBlock(e, s[1], n, o)
                                 : e.getCommentFoldRange(n, o, -1)
                   }
                 }, this.getSectionRange = function(e, t) {
                   var n = e.getLine(t), r = n.search(/\S/), s = t,
                       o = n.length;
                   t += 1;
                   var u = t, a = e.getLength();
                   while (++t < a) {
                     n = e.getLine(t);
                     var f = n.search(/\S/);
                     if (f === -1) continue;
                     if (r > f) break;
                     var l = this.getFoldWidgetRange(e, "all", t);
                     if (l) {
                       if (l.start.row <= s) break;
                       if (l.isMultiLine())
                         t = l.end.row;
                       else if (r == f)
                         break
                     }
                     u = t
                   }
                   return new i(s, o, u, e.getLine(u).length)
                 }, this.getCommentRegionBlock = function(e, t, n) {
                   var r = t.search(/\s*$/), s = e.getLength(), o = n,
                       u = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/, a = 1;
                   while (++n < s) {
                     t = e.getLine(n);
                     var f = u.exec(t);
                     if (!f) continue;
                     f[1] ? a-- : a++;
                     if (!a) break
                   }
                   var l = n;
                   if (l > o) return new i(o, r, l, t.length)
                 }
               }.call(o.prototype)
             }),
  ace.define(
    "ace/mode/fortran",
    [
      "require", "exports", "module", "ace/lib/oop", "ace/mode/text",
      "ace/mode/fortran_highlight_rules", "ace/mode/folding/cstyle", "ace/range"
    ],
    function(e, t, n) {
      "use strict";
      var r = e("../lib/oop"), i = e("./text").Mode,
          s = e("./fortran_highlight_rules").FortranHighlightRules,
          o = e("./folding/cstyle").FoldMode, u = e("../range").Range,
          a = function() {
            this.HighlightRules = s, this.foldingRules = new o,
            this.$behaviour = this.$defaultBehaviour
          };
      r.inherits(a, i), function() {
        this.lineCommentStart = "!",
        this.getNextLineIndent = function(e, t, n) {
          var r = this.$getIndent(t),
              i = this.getTokenizer().getLineTokens(t, e), s = i.tokens;
          if (s.length && s[s.length - 1].type == "comment") return r;
          if (e == "start") {
            var o = t.match(/^.*[\{\(\[:]\s*$/);
            o && (r += n)
          }
          return r
        };
        var e = {
          "return": 1,
          "break": 1,
          "continue": 1,
          RETURN: 1,
          BREAK: 1,
          CONTINUE: 1
        };
        this.checkOutdent = function(t, n, r) {
          if (r !== "\r\n" && r !== "\r" && r !== "\n") return !1;
          var i = this.getTokenizer().getLineTokens(n.trim(), t).tokens;
          if (!i) return !1;
          do
            var s = i.pop();
          while (s && (s.type == "comment" ||
                       s.type == "text" && s.value.match(/^\s+$/)));
          return s ? s.type == "keyword" && e[s.value] : !1
        }, this.autoOutdent = function(e, t, n) {
          n += 1;
          var r = this.$getIndent(t.getLine(n)), i = t.getTabString();
          r.slice(-i.length) == i &&
            t.remove(new u(n, r.length - i.length, n, r.length))
        }, this.$id = "ace/mode/fortran"
      }.call(a.prototype), t.Mode = a
    });
(function() {
ace.require(["ace/mode/fortran"], function(m) {
  if (typeof module == "object" && typeof exports == "object" && module) {
    module.exports = m;
  }
});
})();
