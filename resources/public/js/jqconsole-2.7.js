/*
Copyrights 2011, the repl.it project.
Licensed under the MIT license
*/
(function () {
    var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L = function (a, b) {
            return function () {
                return a.apply(b, arguments)
            }
        },
        M = Array.prototype.slice;
    a = jQuery, H = 0, I = 1, J = 2, y = 13, E = 9, v = 46, u = 8, A = 37, D = 39, F = 38, w = 40, z = 36, x = 35, C = 33, B = 34, i = "jqconsole-", e = "" + i + "cursor", f = "" + i + "header", j = "" + i + "prompt", h = "" + i + "old-prompt", g = "" + i + "input", d = "" + i + "blurred", s = "keypress", p = "<span/>", n = "<div/>", o = ":empty", G = "\n", m = ">>> ", l = "... ", k = 2, c = "" + i + "ansi-", q = "", r = /\[(\d*)(?:;(\d*))*m/, b = function () {
        function a() {
            this.stylize = L(this.stylize, this), this._closeSpan = L(this._closeSpan, this), this._openSpan = L(this._openSpan, this), this.getClasses = L(this.getClasses, this), this._style = L(this._style, this), this._color = L(this._color, this), this._remove = L(this._remove, this), this._append = L(this._append, this), this.klasses = []
        }
        return a.prototype.COLORS = ["black", "red", "green", "yellow", "blue", "magenta", "cyan", "white"], a.prototype._append = function (a) {
            a = "" + c + a;
            if (this.klasses.indexOf(a) === -1) return this.klasses.push(a)
        }, a.prototype._remove = function () {
            var a, b, d, e, f, g;
            d = 1 <= arguments.length ? M.call(arguments, 0) : [], g = [];
            for (e = 0, f = d.length; e < f; e++) b = d[e], b === "fonts" || b === "color" || b === "background-color" ? g.push(this.klasses = function () {
                var d, e, f, g;
                f = this.klasses, g = [];
                for (d = 0, e = f.length; d < e; d++) a = f[d], a.indexOf(b) !== c.length && g.push(a);
                return g
            }.call(this)) : (b = "" + c + b, g.push(this.klasses = function () {
                var c, d, e, f;
                e = this.klasses, f = [];
                for (c = 0, d = e.length; c < d; c++) a = e[c], a !== b && f.push(a);
                return f
            }.call(this)));
            return g
        }, a.prototype._color = function (a) {
            return this.COLORS[a]
        }, a.prototype._style = function (a) {
            a === "" && (a = 0), a = parseInt(a);
            if (isNaN(a)) return;
            switch (a) {
            case 0:
                return this.klasses = [];
            case 1:
                return this._append("bold");
            case 2:
                return this._append("lighter");
            case 3:
                return this._append("italic");
            case 4:
                return this._append("underline");
            case 5:
                return this._append("blink");
            case 6:
                return this._append("blink-rapid");
            case 8:
                return this._append("hidden");
            case 9:
                return this._append("line-through");
            case 10:
                return this._remove("fonts");
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
                return this._append("fonts-" + (a - 10));
            case 20:
                return this._append("fraktur");
            case 21:
                return this._remove("bold", "lighter");
            case 22:
                return this._remove("bold", "lighter");
            case 23:
                return this._remove("italic", "fraktur");
            case 24:
                return this._remove("underline");
            case 25:
                return this._remove("blink", "blink-rapid");
            case 28:
                return this._remove("hidden");
            case 29:
                return this._remove("line-through");
            case 30:
            case 31:
            case 32:
            case 33:
            case 34:
            case 35:
            case 36:
            case 37:
                return this._append("color-" + this._color(a - 30));
            case 39:
                return this._remove("color");
            case 40:
            case 41:
            case 42:
            case 43:
            case 44:
            case 45:
            case 46:
            case 47:
                return this._append("background-color-" + this._color(a - 40));
            case 49:
                return this._remove("background-color");
            case 51:
                return this._append("framed");
            case 53:
                return this._append("overline");
            case 54:
                return this._remove("framed");
            case 55:
                return this._remove("overline")
            }
        }, a.prototype.getClasses = function () {
            return this.klasses.join(" ")
        }, a.prototype._openSpan = function (a) {
            return '<span class="' + this.getClasses() + '">' + a
        }, a.prototype._closeSpan = function (a) {
            return "" + a + "</span>"
        }, a.prototype.stylize = function (a) {
            var b, c, d, e, f, g;
            a = this._openSpan(a), d = 0;
            while ((d = a.indexOf(q, d)) && d !== -1) if (c = a.slice(d).match(r)) {
                g = c.slice(1);
                for (e = 0, f = g.length; e < f; e++) b = g[e], this._style(b);
                a = this._closeSpan(a.slice(0, d)) + this._openSpan(a.slice(d + 1 + c[0].length))
            } else d++;
            return this._closeSpan(a)
        }, a
    }(), K = function (a, b) {
        return '<span class="' + a + '">' + (b || "") + "</span>"
    }, t = function () {
        function c(c, d, e, g) {
            this.container = c, this._HideComposition = L(this._HideComposition, this), this._ShowComposition = L(this._ShowComposition, this), this._UpdateComposition = L(this._UpdateComposition, this), this._EndComposition = L(this._EndComposition, this), this._StartComposition = L(this._StartComposition, this), this._CheckComposition = L(this._CheckComposition, this), this._ProcessMatch = L(this._ProcessMatch, this), this._HandleKey = L(this._HandleKey, this), this._HandleChar = L(this._HandleChar, this), this.isMobile = !! navigator.userAgent.match(/iPhone|iPad|iPod|Android/i), this.isIos = !! navigator.userAgent.match(/iPhone|iPad|iPod/i), this.isAndroid = !! navigator.userAgent.match(/Android/i), this.$window = a(window), this.header = d || "", this.prompt_label_main = e || m, this.prompt_label_continue = " \n" + (g || l), this.indent_width = k, this.state = I, this.input_queue = [], this.input_callback = null, this.multiline_callback = null, this.history = [], this.history_index = 0, this.history_new = "", this.history_active = !1, this.shortcuts = {}, this.$console = a('<pre class="jqconsole"/>').appendTo(this.container), this.$console.css({
                position: "absolute",
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                margin: 0,
                overflow: "auto"
            }), this.$console_focused = !0, this.$input_container = a(n).appendTo(this.container), this.$input_container.css({
                position: "relative",
                width: 1,
                height: 0,
                overflow: "hidden"
            }), this.$input_source = a("<textarea/>"), this.$input_source.attr("wrap", "off").css({
                position: "absolute",
                width: 2
            }), this.$input_source.appendTo(this.$input_container), this.$composition = a(n), this.$composition.addClass("" + i + "composition"), this.$composition.css({
                display: "inline",
                position: "relative"
            }), this.matchings = {
                openings: {},
                closings: {},
                clss: []
            }, this.ansi = new b, this._InitPrompt(), this._SetupEvents(), this.Write(this.header, f), a(this.container).data("jqconsole", this)
        }
        return c.prototype.ResetHistory = function () {
            return this.history = [], this.history_index = 0, this.history_current = ""
        }, c.prototype.ResetShortcuts = function () {
            return this.shortcuts = {}
        }, c.prototype.ResetMatchings = function () {
            return this.matchings = {
                openings: {},
                closings: {},
                clss: []
            }
        }, c.prototype.Reset = function () {
            this.state !== I && this.ClearPromptText(!0), this.state = I, this.input_queue = [], this.input_callback = null, this.multiline_callback = null, this.ResetHistory(), this.ResetShortcuts(), this.ResetMatchings(), this.$prompt.detach(), this.$input_container.detach(), this.$console.html(""), this.$prompt.appendTo(this.$console), this.$input_container.appendTo(this.container), this.Write(this.header, f)
        }, c.prototype._CheckKeyCode = function (a) {
            isNaN(a) ? a = a.charCodeAt(0) : a = parseInt(a, 10);
            if (0 < a && a < 256 && !isNaN(a)) return a;
            throw new Error("Key code must be a number between 0 and 256 exclusive.")
        }, c.prototype._LetterCaseHelper = function (a, b) {
            b(a), 65 <= a && a <= 90 && b(a + 32);
            if (97 <= a && a <= 122) return b(a - 32)
        }, c.prototype.RegisterShortcut = function (a, b) {
            var c, d = this;
            a = this._CheckKeyCode(a);
            if (!b instanceof Function) throw new Error("Callback must be a function, not " + b + ".");
            c = function (a) {
                return a in d.shortcuts || (d.shortcuts[a] = []), d.shortcuts[a].push(b)
            }, this._LetterCaseHelper(a, c)
        }, c.prototype.UnRegisterShortcut = function (a, b) {
            var c, d = this;
            a = this._CheckKeyCode(a), c = function (a) {
                if (a in d.shortcuts) return b ? d.shortcuts[a].splice(d.shortcuts[a].indexOf(b), 1) : delete d.shortcuts[a]
            }, this._LetterCaseHelper(a, c)
        }, c.prototype.GetColumn = function () {
            var a;
            return this.$prompt_cursor.text(""), a = this.$console.text().split(G), this.$prompt_cursor.html("&nbsp;"), a[a.length - 1].length
        }, c.prototype.GetLine = function () {
            return this.$console.text().split(G).length - 1
        }, c.prototype.ClearPromptText = function (a) {
            if (this.state === I) throw new Error("ClearPromptText() is not allowed in output state.");
            this.$prompt_before.html(""), this.$prompt_after.html(""), this.$prompt_label.text(a ? "" : this._SelectPromptLabel(!1)), this.$prompt_left.text(""), this.$prompt_right.text("")
        }, c.prototype.GetPromptText = function (b) {
            var c, d, e, f, g;
            if (this.state === I) throw new Error("GetPromptText() is not allowed in output state.");
            return b ? (this.$prompt_cursor.text(""), g = this.$prompt.text(), this.$prompt_cursor.html("&nbsp;"), g) : (f = function (b) {
                var c;
                return c = [], b.children().each(function () {
                    return c.push(a(this).children().last().text())
                }), c.join(G)
            }, d = f(this.$prompt_before), d && (d += G), e = this.$prompt_left.text() + this.$prompt_right.text(), c = f(this.$prompt_after), c && (c = G + c), d + e + c)
        }, c.prototype.SetPromptText = function (a) {
            if (this.state === I) throw new Error("SetPromptText() is not allowed in output state.");
            this.ClearPromptText(!1), this._AppendPromptText(a), this._ScrollToEnd()
        }, c.prototype.Write = function (b, c, d) {
            var e;
            d == null && (d = !0), d && (b = this.ansi.stylize(a(p).text(b).html())), e = a(p).html(b), c != null && e.addClass(c), e.insertBefore(this.$prompt), this._ScrollToEnd(), this.$prompt_cursor.detach().insertAfter(this.$prompt_left)
        }, c.prototype.Input = function (a) {
            var b, c, d, e, f = this;
            if (this.state === J) d = this.input_callback, e = this.multiline_callback, c = this.history_active, b = this.async_multiline, this.AbortPrompt(), this.input_queue.unshift(function () {
                return f.Prompt(c, d, e, b)
            });
            else if (this.state !== I) {
                this.input_queue.push(function () {
                    return f.Input(a)
                });
                return
            }
            this.history_active = !1, this.input_callback = a, this.multiline_callback = null, this.state = H, this.$prompt.attr("class", g), this.$prompt_label.text(this._SelectPromptLabel(!1)), this.Focus(), this._ScrollToEnd()
        }, c.prototype.Prompt = function (a, b, c, d) {
            var e = this;
            if (this.state !== I) {
                this.input_queue.push(function () {
                    return e.Prompt(a, b, c, d)
                });
                return
            }
            this.history_active = a, this.input_callback = b, this.multiline_callback = c, this.async_multiline = d, this.state = J, this.$prompt.attr("class", j + " " + this.ansi.getClasses()), this.$prompt_label.text(this._SelectPromptLabel(!1)), this.Focus(), this._ScrollToEnd()
        }, c.prototype.AbortPrompt = function () {
            if (this.state !== J) throw new Error("Cannot abort prompt when not in prompt state.");
            this.Write(this.GetPromptText(!0) + G, h), this.ClearPromptText(!0), this.state = I, this.input_callback = this.multiline_callback = null, this._CheckInputQueue()
        }, c.prototype.Focus = function () {
            this.IsDisabled() || this.$input_source.focus()
        }, c.prototype.SetIndentWidth = function (a) {
            return this.indent_width = a
        }, c.prototype.GetIndentWidth = function () {
            return this.indent_width
        }, c.prototype.RegisterMatching = function (a, b, c) {
            var d;
            return d = {
                opening_char: a,
                closing_char: b,
                cls: c
            }, this.matchings.clss.push(c), this.matchings.openings[a] = d, this.matchings.closings[b] = d
        }, c.prototype.UnRegisterMatching = function (a, b) {
            var c;
            return c = this.matchings.openings[a].cls, delete this.matchings.openings[a], delete this.matchings.closings[b], this.matchings.clss.splice(this.matchings.clss.indexOf(c), 1)
        }, c.prototype.Dump = function () {
            var b, c;
            return b = this.$console.find("." + f).nextUntil("." + j), function () {
                var d, e, f;
                f = [];
                for (d = 0, e = b.length; d < e; d++) c = b[d], a(c).is("." + h) ? f.push(a(c).text().replace(/^\s+/, ">>> ")) : f.push(a(c).text());
                return f
            }().join(" ")
        }, c.prototype.GetState = function () {
            return this.state === H ? "input" : this.state === I ? "output" : "prompt"
        }, c.prototype.Disable = function () {
            return this.$input_source.attr("disabled", !0), this.$input_source.blur()
        }, c.prototype.Enable = function () {
            return this.$input_source.attr("disabled", !1)
        }, c.prototype.IsDisabled = function () {
            return Boolean(this.$input_source.attr("disabled"))
        }, c.prototype.MoveToStart = function (a) {
            this._MoveTo(a, !0)
        }, c.prototype.MoveToEnd = function (a) {
            this._MoveTo(a, !1)
        }, c.prototype._CheckInputQueue = function () {
            if (this.input_queue.length) return this.input_queue.shift()()
        }, c.prototype._InitPrompt = function () {
            this.$prompt = a(K(g)).appendTo(this.$console), this.$prompt_before = a(p).appendTo(this.$prompt), this.$prompt_current = a(p).appendTo(this.$prompt), this.$prompt_after = a(p).appendTo(this.$prompt), this.$prompt_label = a(p).appendTo(this.$prompt_current), this.$prompt_left = a(p).appendTo(this.$prompt_current), this.$prompt_right = a(p).appendTo(this.$prompt_current), this.$prompt_right.css({
                position: "relative"
            }), this.$prompt_cursor = a(K(e, "&nbsp;")), this.$prompt_cursor.insertBefore(this.$prompt_right), this.$prompt_cursor.css({
                color: "transparent",
                display: "inline",
                zIndex: 0
            });
            if (!this.isMobile) return this.$prompt_cursor.css("position", "absolute")
        }, c.prototype._SetupEvents = function () {
            var b, c, e, f = this;
            this.isMobile ? this.$console.click(function (a) {
                return a.preventDefault(), f.Focus()
            }) : this.$console.mouseup(function (a) {
                var b;
                return b = function () {
                    if (!window.getSelection().toString()) return a.preventDefault(), f.Focus()
                }, setTimeout(b, 0)
            }), this.$input_source.focus(function () {
                var a, b;
                return f._ScrollToEnd(), f.$console_focused = !0, f.$console.removeClass(d), b = function () {
                    if (f.$console_focused) return f.$console.removeClass(d)
                }, setTimeout(b, 100), a = function () {
                    if (f.isIos && f.$console_focuseded) return f.$input_source.hide()
                }, setTimeout(a, 500)
            }), this.$input_source.blur(function () {
                var a;
                return f.$console_focused = !1, f.isIos && f.$input_source.show(), a = function () {
                    if (!f.$console_focused) return f.$console.addClass(d)
                }, setTimeout(a, 100)
            }), e = a.browser.opera ? "input" : "paste", this.$input_source.bind(e, function () {
                var a;
                return a = function () {
                    if (f.in_composition) return;
                    return f._AppendPromptText(f.$input_source.val()), f.$input_source.val(""), f.Focus()
                }, setTimeout(a, 0)
            }), this.$input_source.keypress(this._HandleChar), c = a.browser.mozilla || a.browser.opera ? s : "keydown", this.$input_source[c](this._HandleKey), this.$input_source.keydown(this._CheckComposition), a.browser.mozilla != null && (this.$input_source.bind("compositionstart", this._StartComposition), this.$input_source.bind("compositionend", this._EndCommposition), this.$input_source.bind("text", this._UpdateComposition));
            if (a.browser.opera != null) return b = function () {
                if (f.in_composition) return;
                if (f.$input_source.val().length) return f._StartComposition()
            }, setInterval(b, 200)
        }, c.prototype._HandleChar = function (b) {
            var c;
            if (this.state === I || b.metaKey || b.ctrlKey) return !0;
            c = b.which;
            if (c === 8 || c === 9 || c === 13) return !1;
            if (a.browser.mozilla) if (b.keyCode || b.altKey) return !0;
            return a.browser.opera && b.altKey ? !0 : (this.$prompt_left.text(this.$prompt_left.text() + String.fromCharCode(c)), this._ScrollToEnd(), !1)
        }, c.prototype._HandleKey = function (b) {
            var c;
            if (this.state === I) return !0;
            c = b.keyCode || b.which, setTimeout(a.proxy(this._CheckMatchings, this), 0);
            if (b.altKey) return !0;
            if (b.ctrlKey || b.metaKey) return this._HandleCtrlShortcut(c);
            if (b.shiftKey) {
                switch (c) {
                case y:
                    this._HandleEnter(!0);
                    break;
                case E:
                    this._Unindent();
                    break;
                case F:
                    this._MoveUp();
                    break;
                case w:
                    this._MoveDown();
                    break;
                case C:
                    this._ScrollUp();
                    break;
                case B:
                    this._ScrollDown();
                    break;
                default:
                    return !0
                }
                return !1
            }
            switch (c) {
            case y:
                this._HandleEnter(!1);
                break;
            case E:
                this._Indent();
                break;
            case v:
                this._Delete(!1);
                break;
            case u:
                this._Backspace(!1);
                break;
            case A:
                this._MoveLeft(!1);
                break;
            case D:
                this._MoveRight(!1);
                break;
            case F:
                this._HistoryPrevious();
                break;
            case w:
                this._HistoryNext();
                break;
            case z:
                this.MoveToStart(!1);
                break;
            case x:
                this.MoveToEnd(!1);
                break;
            case C:
                this._ScrollUp();
                break;
            case B:
                this._ScrollDown();
                break;
            default:
                return !0
            }
            return !1
        }, c.prototype._HandleCtrlShortcut = function (a) {
            var b, c, d, e;
            switch (a) {
            case v:
                this._Delete(!0);
                break;
            case u:
                this._Backspace(!0);
                break;
            case A:
                this._MoveLeft(!0);
                break;
            case D:
                this._MoveRight(!0);
                break;
            case F:
                this._MoveUp();
                break;
            case w:
                this._MoveDown();
                break;
            case x:
                this.MoveToEnd(!0);
                break;
            case z:
                this.MoveToStart(!0);
                break;
            default:
                if (a in this.shortcuts) {
                    e = this.shortcuts[a];
                    for (c = 0, d = e.length; c < d; c++) b = e[c], b.call(this);
                    return !1
                }
                return !0
            }
            return !1
        }, c.prototype._HandleEnter = function (a) {
            var b, c, d = this;
            return a ? this._InsertNewLine(!0) : (c = this.GetPromptText(), b = function (a) {
                var b, e, f, g, h;
                if (a !== !1) {
                    d.MoveToEnd(!0), d._InsertNewLine(!0), h = [];
                    for (f = 0, g = Math.abs(a); 0 <= g ? f < g : f > g; 0 <= g ? f++ : f--) a > 0 ? h.push(d._Indent()) : h.push(d._Unindent());
                    return h
                }
                return e = d.state === H ? "input" : "prompt", d.Write(d.GetPromptText(!0) + G, "" + i + "old-" + e), d.ClearPromptText(!0), d.history_active && ((!d.history.length || d.history[d.history.length - 1] !== c) && d.history.push(c), d.history_index = d.history.length), d.state = I, b = d.input_callback, d.input_callback = null, b && b(c), d._CheckInputQueue()
            }, this.multiline_callback ? this.async_multiline ? this.multiline_callback(c, b) : b(this.multiline_callback(c)) : b(!1))
        }, c.prototype._GetDirectionals = function (b) {
            var c, d, e, f, g, h, i, j;
            return f = b ? this.$prompt_left : this.$prompt_right, c = b ? this.$prompt_right : this.$prompt_left, e = b ? this.$prompt_before : this.$prompt_after, d = b ? this.$prompt_after : this.$prompt_before, h = b ? a.proxy(this.MoveToStart, this) : a.proxy(this.MoveToEnd, this), g = b ? a.proxy(this._MoveLeft, this) : a.proxy(this._MoveRight, this), j = b ? "last" : "first", i = b ? "prependTo" : "appendTo", {
                $prompt_which: f,
                $prompt_opposite: c,
                $prompt_relative: e,
                $prompt_rel_opposite: d,
                MoveToLimit: h,
                MoveDirection: g,
                which_end: j,
                where_append: i
            }
        }, c.prototype._VerticalMove = function (a) {
            var b, c, d, e, f, g, h, i;
            i = this._GetDirectionals(a), d = i.$prompt_which, b = i.$prompt_opposite, c = i.$prompt_relative, f = i.MoveToLimit, e = i.MoveDirection;
            if (c.is(o)) return;
            return g = this.$prompt_left.text().length, f(), e(), h = d.text(), b.text(a ? h.slice(g) : h.slice(0, g)), d.text(a ? h.slice(0, g) : h.slice(g))
        }, c.prototype._MoveUp = function () {
            return this._VerticalMove(!0)
        }, c.prototype._MoveDown = function () {
            return this._VerticalMove()
        }, c.prototype._HorizontalMove = function (b, c) {
            var d, e, f, g, h, i, j, k, l, m, n, q, r, s;
            s = this._GetDirectionals(c), h = s.$prompt_which, e = s.$prompt_opposite, g = s.$prompt_relative, f = s.$prompt_rel_opposite, q = s.which_end, n = s.where_append, k = c ? /\w*\W*$/ : /^\w*\W*/, l = h.text();
            if (l) {
                if (b) {
                    r = l.match(k);
                    if (!r) return;
                    return r = r[0], m = e.text(), e.text(c ? r + m : m + r), j = r.length, h.text(c ? l.slice(0, -j) : l.slice(j))
                }
                return m = e.text(), e.text(c ? l.slice(-1) + m : m + l[0]), h.text(c ? l.slice(0, -1) : l.slice(1))
            }
            if (!g.is(o)) return i = a(p)[n](f), i.append(a(p).text(this.$prompt_label.text())), i.append(a(p).text(e.text())), d = g.children()[q]().detach(), this.$prompt_label.text(d.children().first().text()), h.text(d.children().last().text()), e.text("")
        }, c.prototype._MoveLeft = function (a) {
            return this._HorizontalMove(a, !0)
        }, c.prototype._MoveRight = function (a) {
            return this._HorizontalMove(a)
        }, c.prototype._MoveTo = function (a, b) {
            var c, d, e, f, g, h, i;
            h = this._GetDirectionals(b), e = h.$prompt_which, c = h.$prompt_opposite, d = h.$prompt_relative, g = h.MoveToLimit, f = h.MoveDirection;
            if (a) {
                i = [];
                while (!d.is(o) || e.text() !== "") g(!1), i.push(f(!1));
                return i
            }
            return c.text(this.$prompt_left.text() + this.$prompt_right.text()), e.text("")
        }, c.prototype._Delete = function (a) {
            var b, c, d;
            c = this.$prompt_right.text();
            if (c) {
                if (a) {
                    d = c.match(/^\w*\W*/);
                    if (!d) return;
                    return d = d[0], this.$prompt_right.text(c.slice(d.length))
                }
                return this.$prompt_right.text(c.slice(1))
            }
            if (!this.$prompt_after.is(o)) return b = this.$prompt_after.children().first().detach(), this.$prompt_right.text(b.children().last().text())
        }, c.prototype._Backspace = function (b) {
            var c, d, e;
            setTimeout(a.proxy(this._ScrollToEnd, this), 0), d = this.$prompt_left.text();
            if (d) {
                if (b) {
                    e = d.match(/\w*\W*$/);
                    if (!e) return;
                    return e = e[0], this.$prompt_left.text(d.slice(0, -e.length))
                }
                return this.$prompt_left.text(d.slice(0, -1))
            }
            if (!this.$prompt_before.is(o)) return c = this.$prompt_before.children().last().detach(), this.$prompt_label.text(c.children().first().text()), this.$prompt_left.text(c.children().last().text())
        }, c.prototype._Indent = function () {
            var a;
            return this.$prompt_left.prepend(function () {
                var b, c;
                c = [];
                for (a = 1, b = this.indent_width; 1 <= b ? a <= b : a >= b; 1 <= b ? a++ : a--) c.push(" ");
                return c
            }.call(this).join(""))
        }, c.prototype._Unindent = function () {
            var a, b, c, d;
            a = this.$prompt_left.text() + this.$prompt_right.text(), d = [];
            for (b = 1, c = this.indent_width; 1 <= c ? b <= c : b >= c; 1 <= c ? b++ : b--) {
                if (!/^ /.test(a)) break;
                this.$prompt_left.text() ? this.$prompt_left.text(this.$prompt_left.text().slice(1)) : this.$prompt_right.text(this.$prompt_right.text().slice(1)), d.push(a = a.slice(1))
            }
            return d
        }, c.prototype._InsertNewLine = function (b) {
            var c, d, e;
            return b == null && (b = !1), e = this._SelectPromptLabel(!this.$prompt_before.is(o)), c = a(p).appendTo(this.$prompt_before), c.append(a(p).text(e)), c.append(a(p).text(this.$prompt_left.text())), this.$prompt_label.text(this._SelectPromptLabel(!0)), b && (d = this.$prompt_left.text().match(/^\s+/)) ? this.$prompt_left.text(d[0]) : this.$prompt_left.text(""), this._ScrollToEnd()
        }, c.prototype._AppendPromptText = function (a) {
            var b, c, d, e, f, g;
            c = a.split(G), this.$prompt_left.text(this.$prompt_left.text() + c[0]), f = c.slice(1), g = [];
            for (d = 0, e = f.length; d < e; d++) b = f[d], this._InsertNewLine(), g.push(this.$prompt_left.text(b));
            return g
        }, c.prototype._ScrollUp = function () {
            var a;
            return a = this.$console[0].scrollTop - this.$console.height(), this.$console.stop().animate({
                scrollTop: a
            }, "fast")
        }, c.prototype._ScrollDown = function () {
            var a;
            return a = this.$console[0].scrollTop + this.$console.height(), this.$console.stop().animate({
                scrollTop: a
            }, "fast")
        }, c.prototype._ScrollToEnd = function () {
            var a, b = this;
            return this.$console.scrollTop(this.$console[0].scrollHeight), a = function () {
                var a, c, d, e, f, g, h;
                c = b.$prompt_cursor.height(), h = b.$window.scrollTop(), g = b.$window.scrollLeft(), a = document.documentElement.clientHeight, e = b.$prompt_cursor.offset(), f = b.$prompt_cursor.position(), b.$input_container.css({
                    left: f.left,
                    top: f.top
                }), d = e.top - 2 * c;
                if (b.isMobile && typeof orientation != "undefined" && orientation !== null) {
                    if (h < e.top || h > e.top) return b.$window.scrollTop(d)
                } else {
                    if (h + a < e.top) return b.$window.scrollTop(e.top - a + c);
                    if (h > d) return b.$window.scrollTop(e.top)
                }
            }, setTimeout(a, 0)
        }, c.prototype._SelectPromptLabel = function (a) {
            return this.state === J ? a ? this.prompt_label_continue : this.prompt_label_main : a ? "\n " : " "
        }, c.prototype._outerHTML = function (b) {
            return document.body.outerHTML ? b.get(0).outerHTML : a(n).append(b.eq(0).clone()).html()
        }, c.prototype._Wrap = function (a, b, c) {
            var d, e;
            return e = a.html(), d = e.slice(0, b) + K(c, e[b]) + e.slice(b + 1), a.html(d)
        }, c.prototype._WalkCharacters = function (a, b, c, d, e) {
            var f, g, h;
            g = e ? a.length : 0, a = a.split(""), h = function () {
                var b, c, d, f;
                return e ? (d = a, a = 2 <= d.length ? M.call(d, 0, c = d.length - 1) : (c = 0, []), b = d[c++]) : (f = a, b = f[0], a = 2 <= f.length ? M.call(f, 1) : []), b && (g += e ? -1 : 1), b
            };
            while (f = h()) {
                f === b ? d++ : f === c && d--;
                if (d === 0) return {
                    index: g,
                    current_count: d
                }
            }
            return {
                index: -1,
                current_count: d
            }
        }, c.prototype._ProcessMatch = function (b, c, d) {
            var e, f, g, h, i, j, k, l, m, n, o, p, q = this;
            return n = c ? [b.closing_char, b.opening_char] : [b.opening_char, b.closing_char], h = n[0], l = n[1], o = this._GetDirectionals(c), g = o.$prompt_which, f = o.$prompt_relative, i = 1, j = !1, m = g.html(), c || (m = m.slice(1)), d && c && (m = m.slice(0, -1)), p = this._WalkCharacters(m, h, l, i, c), k = p.index, i = p.current_count, k > -1 ? (this._Wrap(g, k, b.cls), j = !0) : (e = f.children(), e = c ? Array.prototype.reverse.call(e) : e, e.each(function (d, e) {
                var f, g;
                f = a(e).children().last(), m = f.html(), g = q._WalkCharacters(m, h, l, i, c), k = g.index, i = g.current_count;
                if (k > -1) return c || k--, q._Wrap(f, k, b.cls), j = !0, !1
            })), j
        }, c.prototype._CheckMatchings = function (b) {
            var c, d, e, f, g, h, i;
            e = b ? this.$prompt_left.text().slice(this.$prompt_left.text().length - 1) : this.$prompt_right.text()[0], i = this.matchings.clss;
            for (g = 0, h = i.length; g < h; g++) c = i[g], a("." + c, this.$console).contents().unwrap();
            (d = this.matchings.closings[e]) ? f = this._ProcessMatch(d, !0, b) : (d = this.matchings.openings[e]) ? f = this._ProcessMatch(d, !1, b) : b || this._CheckMatchings(!0);
            if (b) {
                if (f) return this._Wrap(this.$prompt_left, this.$prompt_left.html().length - 1, d.cls)
            } else if (f) return this._Wrap(this.$prompt_right, 0, d.cls)
        }, c.prototype._HistoryPrevious = function () {
            if (!this.history_active) return;
            if (this.history_index <= 0) return;
            return this.history_index === this.history.length && (this.history_new = this.GetPromptText()), this.SetPromptText(this.history[--this.history_index])
        }, c.prototype._HistoryNext = function () {
            if (!this.history_active) return;
            if (this.history_index >= this.history.length) return;
            return this.history_index === this.history.length - 1 ? (this.history_index++, this.SetPromptText(this.history_new)) : this.SetPromptText(this.history[++this.history_index])
        }, c.prototype._CheckComposition = function (b) {
            var c;
            c = b.keyCode || b.which, a.browser.opera != null && this.in_composition && this._UpdateComposition();
            if (c === 229) return this.in_composition ? this._UpdateComposition() : this._StartComposition()
        }, c.prototype._StartComposition = function () {
            return this.$input_source.bind(s, this._EndComposition), this.in_composition = !0, this._ShowComposition(), setTimeout(this._UpdateComposition, 0)
        }, c.prototype._EndComposition = function () {
            return this.$input_source.unbind(s, this._EndComposition), this.in_composition = !1, this._HideComposition(), this.$input_source.val("")
        }, c.prototype._UpdateComposition = function (a) {
            var b, c = this;
            return b = function () {
                if (!c.in_composition) return;
                return c.$composition.text(c.$input_source.val())
            }, setTimeout(b, 0)
        }, c.prototype._ShowComposition = function () {
            return this.$composition.css("height", this.$prompt_cursor.height()), this.$composition.empty(), this.$composition.appendTo(this.$prompt_left)
        }, c.prototype._HideComposition = function () {
            return this.$composition.detach()
        }, c
    }(), a.fn.jqconsole = function (a, b, c) {
        return new t(this, a, b, c)
    }
}).call(this)
