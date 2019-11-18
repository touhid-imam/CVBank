! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,
        h = {},
        i = h.toString,
        j = h.hasOwnProperty,
        k = {},
        l = a.document,
        m = "2.1.3",
        n = function(a, b) {
            return new n.fn.init(a, b)
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a, b) {
            return n.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            return !n.isArray(a) && a - parseFloat(a) + 1 >= 0
        },
        isPlainObject: function(a) {
            return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, c = eval;
            a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, c) {
            var d, e = 0,
                f = a.length,
                g = s(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)
                        if (d = b.apply(a[e], c), d === !1) break
                } else
                    for (e in a)
                        if (d = b.apply(a[e], c), d === !1) break
            } else if (g) {
                for (; f > e; e++)
                    if (d = b.call(a[e], e, a[e]), d === !1) break
            } else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]), d === !1) break; return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : g.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, f = 0,
                g = a.length,
                h = s(a),
                i = [];
            if (h)
                for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);
            else
                for (f in a) d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function() {
                return a.apply(b || this, e.concat(d.call(arguments)))
            }, f.guid = a.guid = a.guid || n.guid++, f) : void 0
        },
        now: Date.now,
        support: k
    }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });

    function s(a) {
        var b = a.length,
            c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = hb(),
            z = hb(),
            A = hb(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = M.replace("w", "w#"),
            O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
            P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
            Q = new RegExp(L + "+", "g"),
            R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            S = new RegExp("^" + L + "*," + L + "*"),
            T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            V = new RegExp(P),
            W = new RegExp("^" + N + "$"),
            X = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + O),
                PSEUDO: new RegExp("^" + P),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            $ = /^[^{]+\{\s*\[native \w/,
            _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ab = /[+~]/,
            bb = /'|\\/g,
            cb = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            db = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            eb = function() {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (fb) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function gb(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;
            if (!e && p) {
                if (11 !== k && (f = _.exec(a)))
                    if (j = f[1]) {
                        if (9 === k) {
                            if (h = b.getElementById(j), !h || !h.parentNode) return d;
                            if (h.id === j) return d.push(h), d
                        } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d
                    } else {
                        if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                        if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d
                    }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                        while (l--) o[l] = s + rb(o[l]);
                        w = ab.test(a) && pb(b.parentNode) || b, x = o.join(",")
                    }
                    if (x) try {
                        return H.apply(d, w.querySelectorAll(x)), d
                    } catch (y) {} finally {
                        r || b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }

        function hb() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function ib(a) {
            return a[u] = !0, a
        }

        function jb(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function kb(a, b) {
            var c = a.split("|"),
                e = a.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function lb(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function mb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function nb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function ob(a) {
            return ib(function(b) {
                return b = +b, ib(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function pb(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = gb.support = {}, f = gb.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = gb.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", eb, !1) : e.attachEvent && e.attachEvent("onunload", eb)), p = !f(g), c.attributes = jb(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = jb(function(a) {
                return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = jb(function(a) {
                return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(cb, db);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(cb, db);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (jb(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), jb(function(a) {
                var b = g.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && jb(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    h = [a],
                    i = [b];
                if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return lb(a, b);
                c = a;
                while (c = c.parentNode) h.unshift(c);
                c = b;
                while (c = c.parentNode) i.unshift(c);
                while (h[d] === i[d]) d++;
                return d ? lb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }, g) : n
        }, gb.matches = function(a, b) {
            return gb(a, null, null, b)
        }, gb.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return gb(b, n, null, [a]).length > 0
        }, gb.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, gb.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, gb.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, gb.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = gb.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = gb.selectors = {
            cacheLength: 50,
            createPseudo: ib,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || gb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && gb.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(cb, db).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = gb.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [w, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];
                            else
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break; return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || gb.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ib(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ib(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(R, "$1"));
                    return d[u] ? ib(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ib(function(a) {
                    return function(b) {
                        return gb(a, b).length > 0
                    }
                }),
                contains: ib(function(a) {
                    return a = a.replace(cb, db),
                        function(b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ib(function(a) {
                    return W.test(a || "") || gb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                            while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Z.test(a.nodeName)
                },
                input: function(a) {
                    return Y.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: ob(function() {
                    return [0]
                }),
                last: ob(function(a, b) {
                    return [b - 1]
                }),
                eq: ob(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: ob(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: ob(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: ob(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: ob(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) d.pseudos[b] = mb(b);
        for (b in {
            submit: !0,
            reset: !0
        }) d.pseudos[b] = nb(b);

        function qb() {}
        qb.prototype = d.filters = d.pseudos, d.setFilters = new qb, g = gb.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? gb.error(a) : z(a, i).slice(0)
        };

        function rb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function sb(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g)) return !0
                        }
            }
        }

        function tb(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function ub(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) gb(a, b[d], c);
            return c
        }

        function vb(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function wb(a, b, c, d, e, f) {
            return d && !d[u] && (d = wb(d)), e && !e[u] && (e = wb(e, f)), ib(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || ub(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : vb(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = vb(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = vb(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function xb(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sb(function(a) {
                return a === b
            }, h, !0), l = sb(function(a) {
                return J(b, a) > -1
            }, h, !0), m = [function(a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null, e
            }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [sb(tb(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return wb(i > 1 && tb(m), i > 1 && rb(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(R, "$1"), c, e > i && xb(a.slice(i, e)), f > e && xb(a = a.slice(e)), f > e && rb(a))
                    }
                    m.push(c)
                }
            return tb(m)
        }

        function yb(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, m, o, p = 0,
                        q = "0",
                        r = f && [],
                        s = [],
                        t = j,
                        u = f || e && d.find.TAG("*", k),
                        v = w += null == t ? 1 : Math.random() || .1,
                        x = u.length;
                    for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                        if (e && l) {
                            m = 0;
                            while (o = a[m++])
                                if (o(l, g, h)) {
                                    i.push(l);
                                    break
                                }
                            k && (w = v)
                        }
                        c && ((l = !o && l) && p--, f && r.push(l))
                    }
                    if (p += q, c && q !== p) {
                        m = 0;
                        while (o = b[m++]) o(r, s, g, h);
                        if (f) {
                            if (p > 0)
                                while (q--) r[q] || s[q] || (s[q] = F.call(i));
                            s = vb(s)
                        }
                        H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && gb.uniqueSort(i)
                    }
                    return k && (w = v, j = t), r
                };
            return c ? ib(f) : f
        }
        return h = gb.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = xb(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, yb(e, d)), f.selector = a
            }
            return f
        }, i = gb.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && pb(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && rb(j), !a) return H.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, ab.test(a) && pb(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = jb(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), jb(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || kb("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && jb(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || kb("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), jb(function(a) {
            return null == a.getAttribute("disabled")
        }) || kb(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), gb
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = n.expr.match.needsContext,
        v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        w = /^.[^:#\[\.,]*$/;

    function x(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return n.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (w.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return g.call(b, a) >= 0 !== c
        })
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function(a) {
            var b, c = this.length,
                d = [],
                e = this;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
                for (b = 0; c > b; b++)
                    if (n.contains(e[b], this)) return !0
            }));
            for (b = 0; c > b; b++) n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        },
        filter: function(a) {
            return this.pushStack(x(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(x(this, a || [], !0))
        },
        is: function(a) {
            return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
        }
    });
    var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        A = n.fn.init = function(a, b) {
            var c, d;
            if (!a) return this;
            if ("string" == typeof a) {
                if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b))
                        for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
        };
    A.prototype = n.fn, y = n(l);
    var B = /^(?:parents|prev(?:Until|All))/,
        C = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    n.extend({
        dir: function(a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && n(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), n.fn.extend({
        has: function(a) {
            var b = n(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (n.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? n.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function D(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType);
        return a
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return n.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return n.dir(a, "parentNode", c)
        },
        next: function(a) {
            return D(a, "nextSibling")
        },
        prev: function(a) {
            return D(a, "previousSibling")
        },
        nextAll: function(a) {
            return n.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return n.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return n.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return n.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return n.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return n.sibling(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var E = /\S+/g,
        F = {};

    function G(a) {
        var b = F[a] = {};
        return n.each(a.match(E) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
        var b, c, d, e, f, g, h = [],
            i = !a.once && [],
            j = function(l) {
                for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++)
                    if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                        b = !1;
                        break
                    }
                d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable())
            },
            k = {
                add: function() {
                    if (h) {
                        var c = h.length;
                        ! function g(b) {
                            n.each(b, function(b, c) {
                                var d = n.type(c);
                                "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c)
                            })
                        }(arguments), d ? f = h.length : b && (e = c, j(b))
                    }
                    return this
                },
                remove: function() {
                    return h && n.each(arguments, function(a, b) {
                        var c;
                        while ((c = n.inArray(b, h, c)) > -1) h.splice(c, 1), d && (f >= c && f--, g >= c && g--)
                    }), this
                },
                has: function(a) {
                    return a ? n.inArray(a, h) > -1 : !(!h || !h.length)
                },
                empty: function() {
                    return h = [], f = 0, this
                },
                disable: function() {
                    return h = i = b = void 0, this
                },
                disabled: function() {
                    return !h
                },
                lock: function() {
                    return i = void 0, b || k.disable(), this
                },
                locked: function() {
                    return !i
                },
                fireWith: function(a, b) {
                    return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this
                },
                fire: function() {
                    return k.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!c
                }
            };
        return k
    }, n.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", n.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return n.Deferred(function(c) {
                            n.each(b, function(b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? n.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = d.call(arguments),
                e = c.length,
                f = 1 !== e || a && n.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function(a, b, c) {
                    return function(e) {
                        b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (e > 1)
                for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))))
        }
    });

    function I() {
        l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready()
    }
    n.ready.promise = function(b) {
        return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b)
    }, n.ready.promise();
    var J = n.access = function(a, b, c, d, e, f, g) {
        var h = 0,
            i = a.length,
            j = null == c;
        if ("object" === n.type(c)) {
            e = !0;
            for (h in c) n.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                return j.call(n(a), c)
            })), b))
            for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    };
    n.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };

    function K() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = n.expando + K.uid++
    }
    K.uid = 1, K.accepts = n.acceptData, K.prototype = {
        key: function(a) {
            if (!K.accepts(a)) return 0;
            var b = {},
                c = a[this.expando];
            if (!c) {
                c = K.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    }, Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c, n.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c
        },
        set: function(a, b, c) {
            var d, e = this.key(a),
                f = this.cache[e];
            if ("string" == typeof b) f[b] = c;
            else if (n.isEmptyObject(f)) n.extend(this.cache[e], b);
            else
                for (d in b) f[d] = b[d];
            return f
        },
        get: function(a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d, e, f = this.key(a),
                g = this.cache[f];
            if (void 0 === b) this.cache[f] = {};
            else {
                n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;
                while (c--) delete g[d[c]]
            }
        },
        hasData: function(a) {
            return !n.isEmptyObject(this.cache[a[this.expando]] || {})
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var L = new K,
        M = new K,
        N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        O = /([A-Z])/g;

    function P(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
                } catch (e) {}
                M.set(a, b, c)
            } else c = void 0;
        return c
    }
    n.extend({
        hasData: function(a) {
            return M.hasData(a) || L.hasData(a)
        },
        data: function(a, b, c) {
            return M.access(a, b, c)
        },
        removeData: function(a, b) {
            M.remove(a, b)
        },
        _data: function(a, b, c) {
            return L.access(a, b, c)
        },
        _removeData: function(a, b) {
            L.remove(a, b)
        }
    }), n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                    L.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                M.set(this, a)
            }) : J(this, function(b) {
                var c, d = n.camelCase(a);
                if (f && void 0 === b) {
                    if (c = M.get(f, a), void 0 !== c) return c;
                    if (c = M.get(f, d), void 0 !== c) return c;
                    if (c = P(f, d, void 0), void 0 !== c) return c
                } else this.each(function() {
                    var c = M.get(this, d);
                    M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                M.remove(this, a)
            })
        }
    }), n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = n._queueHooks(a, b),
                g = function() {
                    n.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return L.get(a, c) || L.access(a, c, {
                empty: n.Callbacks("once memory").add(function() {
                    L.remove(a, [b + "queue", c])
                })
            })
        }
    }), n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = n.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        R = ["Top", "Right", "Bottom", "Left"],
        S = function(a, b) {
            return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
        },
        T = /^(?:checkbox|radio)$/i;
    ! function() {
        var a = l.createDocumentFragment(),
            b = a.appendChild(l.createElement("div")),
            c = l.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var U = "undefined";
    k.focusinBubbles = "onfocusin" in a;
    var V = /^key/,
        W = /^(?:mouse|pointer|contextmenu)|click/,
        X = /^(?:focusinfocus|focusoutblur)$/,
        Y = /^([^.]*)(?:\.(.+)|)$/;

    function Z() {
        return !0
    }

    function $() {
        return !1
    }

    function _() {
        try {
            return l.activeElement
        } catch (a) {}
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
            if (r) {
                c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function(b) {
                    return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(E) || [""], j = b.length;
                while (j--) h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
            if (r && (i = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;
                while (j--)
                    if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                        while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
                    } else
                        for (o in i) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, m, o, p = [d || l],
                q = j.call(b, "type") ? b.type : b,
                r = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
                if (!e && !o.noBubble && !n.isWindow(d)) {
                    for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) p.push(g), h = g;
                    h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a)
                }
                f = 0;
                while ((g = p[f++]) && !b.isPropagationStopped()) b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, e, f, g, h = [],
                i = d.call(arguments),
                j = (L.get(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i !== this; i = i.parentNode || this)
                    if (i.disabled !== !0 || "click" !== a.type) {
                        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        fix: function(a) {
            if (a[n.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
            while (b--) c = d[b], a[c] = f[c];
            return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== _() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === _() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, n.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        isDefaultPrevented: $,
        isPropagationStopped: $,
        isImmediatePropagationStopped: $,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), k.focusinBubbles || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a), !0)
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = L.access(d, b);
                e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = L.access(d, b) - 1;
                e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b))
            }
        }
    }), n.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a) this.on(g, b, c, a[g], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = $;
            else if (!d) return this;
            return 1 === e && (f = d, d = function(a) {
                return n().off(a), f.apply(this, arguments)
            }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function() {
                n.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function() {
                n.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });
    var ab = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        bb = /<([\w:]+)/,
        cb = /<|&#?\w+;/,
        db = /<(?:script|style|link)/i,
        eb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        fb = /^$|\/(?:java|ecma)script/i,
        gb = /^true\/(.*)/,
        hb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ib = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ib.optgroup = ib.option, ib.tbody = ib.tfoot = ib.colgroup = ib.caption = ib.thead, ib.th = ib.td;

    function jb(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function kb(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function lb(a) {
        var b = gb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function mb(a, b) {
        for (var c = 0, d = a.length; d > c; c++) L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"))
    }

    function nb(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c])
            }
            M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i))
        }
    }

    function ob(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
    }

    function pb(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }
    n.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = n.contains(a.ownerDocument, a);
            if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (g = ob(h), f = ob(a), d = 0, e = f.length; e > d; d++) pb(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || ob(a), g = g || ob(h), d = 0, e = f.length; e > d; d++) nb(f[d], g[d]);
                else nb(a, h);
            return g = ob(h, "script"), g.length > 0 && mb(g, !i && ob(a, "script")), h
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++)
                if (e = a[m], e || 0 === e)
                    if ("object" === n.type(e)) n.merge(l, e.nodeType ? [e] : e);
                    else if (cb.test(e)) {
                        f = f || k.appendChild(b.createElement("div")), g = (bb.exec(e) || ["", ""])[1].toLowerCase(), h = ib[g] || ib._default, f.innerHTML = h[1] + e.replace(ab, "<$1></$2>") + h[2], j = h[0];
                        while (j--) f = f.lastChild;
                        n.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
                    } else l.push(b.createTextNode(e));
            k.textContent = "", m = 0;
            while (e = l[m++])
                if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = ob(k.appendChild(e), "script"), i && mb(f), c)) {
                    j = 0;
                    while (e = f[j++]) fb.test(e.type || "") && c.push(e)
                }
            return k
        },
        cleanData: function(a) {
            for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
                    if (b.events)
                        for (d in b.events) f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                    L.cache[e] && delete L.cache[e]
                }
                delete M.cache[c[M.expando]]
            }
        }
    }), n.fn.extend({
        text: function(a) {
            return J(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = jb(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = jb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || n.cleanData(ob(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && mb(ob(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(ob(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return J(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !db.test(a) && !ib[(bb.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(ab, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ob(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, n.cleanData(ob(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0,
                l = this.length,
                m = this,
                o = l - 1,
                p = a[0],
                q = n.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && eb.test(p)) return this.each(function(c) {
                var d = m.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
            });
            if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                for (f = n.map(ob(c, "script"), kb), g = f.length; l > j; j++) h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, ob(h, "script"))), b.call(this[j], h, j);
                if (g)
                    for (i = f[f.length - 1].ownerDocument, n.map(f, lb), j = 0; g > j; j++) h = f[j], fb.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(hb, "")))
            }
            return this
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++) c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var qb, rb = {};

    function sb(b, c) {
        var d, e = n(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
        return e.detach(), f
    }

    function tb(a) {
        var b = l,
            c = rb[a];
        return c || (c = sb(a, b), "none" !== c && c || (qb = (qb || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qb[0].contentDocument, b.write(), b.close(), c = sb(a, b), qb.detach()), rb[a] = c), c
    }
    var ub = /^margin/,
        vb = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
        wb = function(b) {
            return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
        };

    function xb(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || wb(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), vb.test(g) && ub.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function yb(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }! function() {
        var b, c, d = l.documentElement,
            e = l.createElement("div"),
            f = l.createElement("div");
        if (f.style) {
            f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f);

            function g() {
                f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);
                var g = a.getComputedStyle(f, null);
                b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e)
            }
            a.getComputedStyle && n.extend(k, {
                pixelPosition: function() {
                    return g(), b
                },
                boxSizingReliable: function() {
                    return null == c && g(), c
                },
                reliableMarginRight: function() {
                    var b, c = f.appendChild(l.createElement("div"));
                    return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), f.removeChild(c), b
                }
            })
        }
    }(), n.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var zb = /^(none|table(?!-c[ea]).+)/,
        Ab = new RegExp("^(" + Q + ")(.*)$", "i"),
        Bb = new RegExp("^([+-])=(" + Q + ")", "i"),
        Cb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Db = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Eb = ["Webkit", "O", "Moz", "ms"];

    function Fb(a, b) {
        if (b in a) return b;
        var c = b[0].toUpperCase() + b.slice(1),
            d = b,
            e = Eb.length;
        while (e--)
            if (b = Eb[e] + c, b in a) return b;
        return d
    }

    function Gb(a, b, c) {
        var d = Ab.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Hb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
        return g
    }

    function Ib(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = wb(a),
            g = "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = xb(a, b, f), (0 > e || null == e) && (e = a.style[b]), vb.test(e)) return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Hb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function Jb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", tb(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = xb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b),
                    i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Fb(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Bb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Fb(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xb(a, b, d)), "normal" === e && b in Db && (e = Db[b]), "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e
        }
    }), n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? zb.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Cb, function() {
                    return Ib(a, b, d)
                }) : Ib(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && wb(a);
                return Gb(a, c, d ? Hb(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), n.cssHooks.marginRight = yb(k.reliableMarginRight, function(a, b) {
        return b ? n.swap(a, {
            display: "inline-block"
        }, xb, [a, "marginRight"]) : void 0
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, ub.test(a) || (n.cssHooks[a + b].set = Gb)
    }), n.fn.extend({
        css: function(a, b) {
            return J(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (n.isArray(b)) {
                    for (d = wb(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Jb(this, !0)
        },
        hide: function() {
            return Jb(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                S(this) ? n(this).show() : n(this).hide()
            })
        }
    });

    function Kb(a, b, c, d, e) {
        return new Kb.prototype.init(a, b, c, d, e)
    }
    n.Tween = Kb, Kb.prototype = {
        constructor: Kb,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Kb.propHooks[this.prop];
            return a && a.get ? a.get(this) : Kb.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Kb.propHooks[this.prop];
            return this.pos = b = this.options.duration ? n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Kb.propHooks._default.set(this), this
        }
    }, Kb.prototype.init.prototype = Kb.prototype, Kb.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, Kb.propHooks.scrollTop = Kb.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, n.fx = Kb.prototype.init, n.fx.step = {};
    var Lb, Mb, Nb = /^(?:toggle|show|hide)$/,
        Ob = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
        Pb = /queueHooks$/,
        Qb = [Vb],
        Rb = {
            "*": [function(a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = Ob.exec(b),
                    f = e && e[3] || (n.cssNumber[a] ? "" : "px"),
                    g = (n.cssNumber[a] || "px" !== f && +d) && Ob.exec(n.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };

    function Sb() {
        return setTimeout(function() {
            Lb = void 0
        }), Lb = n.now()
    }

    function Tb(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = R[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function Ub(a, b, c) {
        for (var d, e = (Rb[b] || []).concat(Rb["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function Vb(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this,
            m = {},
            o = a.style,
            p = a.nodeType && S(a),
            q = L.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || tb(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function() {
            o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], Nb.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d]) continue;
                    p = !0
                }
                m[d] = q && q[d] || n.style(a, d)
            } else j = void 0;
        if (n.isEmptyObject(m)) "inline" === ("none" === j ? tb(a.nodeName) : j) && (o.display = j);
        else {
            q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function() {
                n(a).hide()
            }), l.done(function() {
                var b;
                L.remove(a, "fxshow");
                for (b in m) n.style(a, b, m[b])
            });
            for (d in m) g = Ub(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function Wb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function Xb(a, b, c) {
        var d, e, f = 0,
            g = Qb.length,
            h = n.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = Lb || Sb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Lb || Sb(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (Wb(k, j.opts.specialEasing); g > f; f++)
            if (d = Qb[f].call(j, a, k, j.opts)) return d;
        return n.map(k, Ub, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(Xb, {
        tweener: function(a, b) {
            n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], Rb[c] = Rb[c] || [], Rb[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? Qb.unshift(a) : Qb.push(a)
        }
    }), n.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
        }, d
    }, n.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(S).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = n.isEmptyObject(a),
                f = n.speed(b, c, d),
                g = function() {
                    var b = Xb(this, n.extend({}, a), f);
                    (e || L.get(this, "finish")) && b.stop(!0)
                };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                var b = !0,
                    e = null != a && a + "queueHooks",
                    f = n.timers,
                    g = L.get(this);
                if (e) g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g) g[e] && g[e].stop && Pb.test(e) && d(g[e]);
                for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                (b || !c) && n.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = L.get(this),
                    d = c[a + "queue"],
                    e = c[a + "queueHooks"],
                    f = n.timers,
                    g = d ? d.length : 0;
                for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), n.each(["toggle", "show", "hide"], function(a, b) {
        var c = n.fn[b];
        n.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Tb(b, !0), a, d, e)
        }
    }), n.each({
        slideDown: Tb("show"),
        slideUp: Tb("hide"),
        slideToggle: Tb("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        n.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), n.timers = [], n.fx.tick = function() {
        var a, b = 0,
            c = n.timers;
        for (Lb = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || n.fx.stop(), Lb = void 0
    }, n.fx.timer = function(a) {
        n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
    }, n.fx.interval = 13, n.fx.start = function() {
        Mb || (Mb = setInterval(n.fx.tick, n.fx.interval))
    }, n.fx.stop = function() {
        clearInterval(Mb), Mb = null
    }, n.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, n.fn.delay = function(a, b) {
        return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d)
            }
        })
    },
        function() {
            var a = l.createElement("input"),
                b = l.createElement("select"),
                c = b.appendChild(l.createElement("option"));
            a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value
        }();
    var Yb, Zb, $b = n.expr.attrHandle;
    n.fn.extend({
        attr: function(a, b) {
            return J(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Zb : Yb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b))
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(E);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), Zb = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = $b[b] || n.find.attr;
        $b[b] = function(a, b, d) {
            var e, f;
            return d || (f = $b[b], $b[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $b[b] = f), e
        }
    });
    var _b = /^(?:input|select|textarea|button)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return J(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[n.propFix[a] || a]
            })
        }
    }), n.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || _b.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    }), k.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    });
    var ac = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a,
                i = 0,
                j = this.length;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).addClass(a.call(this, b, this.className))
            });
            if (h)
                for (b = (a || "").match(E) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : " ")) {
                        f = 0;
                        while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = n.trim(d), c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a,
                i = 0,
                j = this.length;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).removeClass(a.call(this, b, this.className))
            });
            if (h)
                for (b = (a || "").match(E) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : "")) {
                        f = 0;
                        while (e = b[f++])
                            while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
                        g = a ? n.trim(d) : "", c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function(c) {
                n(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function() {
                if ("string" === c) {
                    var b, d = 0,
                        e = n(this),
                        f = a.match(E) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else(c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ac, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    });
    var bc = /\r/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bc, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = n.makeArray(b),
                        g = e.length;
                    while (g--) d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
            }
        }, k.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var cc = n.now(),
        dc = /\?/;
    n.parseJSON = function(a) {
        return JSON.parse(a + "")
    }, n.parseXML = function(a) {
        var b, c;
        if (!a || "string" != typeof a) return null;
        try {
            c = new DOMParser, b = c.parseFromString(a, "text/xml")
        } catch (d) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b
    };
    var ec = /#.*$/,
        fc = /([?&])_=[^&]*/,
        gc = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        hc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        ic = /^(?:GET|HEAD)$/,
        jc = /^\/\//,
        kc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        lc = {},
        mc = {},
        nc = "*/".concat("*"),
        oc = a.location.href,
        pc = kc.exec(oc.toLowerCase()) || [];

    function qc(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(E) || [];
            if (n.isFunction(c))
                while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function rc(a, b, c, d) {
        var e = {},
            f = a === mc;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function sc(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d), a
    }

    function tc(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function uc(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f], !g)
                        for (e in j)
                            if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                                break
                            }
                    if (g !== !0)
                        if (g && a["throws"]) b = g(b);
                        else try {
                            b = g(b)
                        } catch (l) {
                            return {
                                state: "parsererror",
                                error: g ? l : "No conversion from " + i + " to " + f
                            }
                        }
                }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: oc,
            type: "GET",
            isLocal: hc.test(pc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": nc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? sc(sc(a, n.ajaxSettings), b) : sc(n.ajaxSettings, a)
        },
        ajaxPrefilter: qc(lc),
        ajaxTransport: qc(mc),
        ajax: function(a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b),
                l = k.context || k,
                m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
                o = n.Deferred(),
                p = n.Callbacks("once memory"),
                q = k.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === t) {
                            if (!f) {
                                f = {};
                                while (b = gc.exec(e)) f[b[1].toLowerCase()] = b[2]
                            }
                            b = f[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === t ? e : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return t || (k.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a) q[b] = [q[b], a[b]];
                            else v.always(a[v.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || u;
                        return c && c.abort(b), x(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || oc) + "").replace(ec, "").replace(jc, pc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = kc.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === pc[1] && h[2] === pc[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pc[3] || ("http:" === pc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), rc(lc, k, b, v), 2 === t) return v;
            i = n.event && k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !ic.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (dc.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = fc.test(d) ? d.replace(fc, "$1_=" + cc++) : d + (dc.test(d) ? "&" : "?") + "_=" + cc++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nc + "; q=0.01" : "") : k.accepts["*"]);
            for (j in k.headers) v.setRequestHeader(j, k.headers[j]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (j in {
                success: 1,
                error: 1,
                complete: 1
            }) v[j](k[j]);
            if (c = rc(mc, k, b, v)) {
                v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, c.send(r, x)
                } catch (w) {
                    if (!(2 > t)) throw w;
                    x(-1, w)
                }
            } else x(-1, "No Transport");

            function x(a, b, f, h) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = tc(k, v, f)), u = uc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")))
            }
            return v
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, n.fn.extend({
        wrapAll: function(a) {
            var b;
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                var a = this;
                while (a.firstElementChild) a = a.firstElementChild;
                return a
            }).append(this)), this)
        },
        wrapInner: function(a) {
            return this.each(n.isFunction(a) ? function(b) {
                n(this).wrapInner(a.call(this, b))
            } : function() {
                var b = n(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }), n.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, n.expr.filters.visible = function(a) {
        return !n.expr.filters.hidden(a)
    };
    var vc = /%20/g,
        wc = /\[\]$/,
        xc = /\r?\n/g,
        yc = /^(?:submit|button|image|reset|file)$/i,
        zc = /^(?:input|select|textarea|keygen)/i;

    function Ac(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function(b, e) {
            c || wc.test(a) ? d(a, e) : Ac(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== n.type(b)) d(a, b);
        else
            for (e in b) Ac(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) Ac(c, a[c], b, e);
        return d.join("&").replace(vc, "+")
    }, n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && zc.test(this.nodeName) && !yc.test(a) && (this.checked || !T.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(xc, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(xc, "\r\n")
                }
            }).get()
        }
    }), n.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (a) {}
    };
    var Bc = 0,
        Cc = {},
        Dc = {
            0: 200,
            1223: 204
        },
        Ec = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in Cc) Cc[a]()
    }), k.cors = !!Ec && "withCredentials" in Ec, k.ajax = Ec = !!Ec, n.ajaxTransport(function(a) {
        var b;
        return k.cors || Ec && !a.crossDomain ? {
            send: function(c, d) {
                var e, f = a.xhr(),
                    g = ++Bc;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                    for (e in a.xhrFields) f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c) f.setRequestHeader(e, c[e]);
                b = function(a) {
                    return function() {
                        b && (delete Cc[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Dc[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                            text: f.responseText
                        } : void 0, f.getAllResponseHeaders()))
                    }
                }, f.onload = b(), f.onerror = b("error"), b = Cc[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null)
                } catch (h) {
                    if (b) throw h
                }
            },
            abort: function() {
                b && b()
            }
        } : void 0
    }), n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = n("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), l.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Fc = [],
        Gc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Fc.pop() || n.expando + "_" + cc++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Gc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Gc, "$1" + e) : b.jsonp !== !1 && (b.url += (dc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Fc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || l;
        var d = v.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes))
    };
    var Hc = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && Hc) return Hc.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, f || [a.responseText, b, a])
        }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    };
    var Ic = a.document.documentElement;

    function Jc(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"),
                l = n(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0],
                e = {
                    top: 0,
                    left: 0
                },
                f = d && d.ownerDocument;
            if (f) return b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Jc(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || Ic;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
                return a || Ic
            })
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var d = "pageYOffset" === c;
        n.fn[b] = function(e) {
            return J(this, function(b, e, f) {
                var g = Jc(b);
                return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
            }, b, e, arguments.length, null)
        }
    }), n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = yb(k.pixelPosition, function(a, c) {
            return c ? (c = xb(a, b), vb.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return J(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.size = function() {
        return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var Kc = a.jQuery,
        Lc = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = Lc), b && a.jQuery === n && (a.jQuery = Kc), n
    }, typeof b === U && (a.jQuery = a.$ = n), n
});
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(a) {
    "use strict";

    function b() {
        var a = document.createElement("bootstrap"),
            b = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var c in b)
            if (void 0 !== a.style[c]) return {
                end: b[c]
            };
        return !1
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1,
            d = this;
        a(this).one(a.support.transition.end, function() {
            c = !0
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function() {
        a.support.transition = b()
    })
}(jQuery), + function(a) {
    "use strict";
    var b = '[data-dismiss="alert"]',
        c = function(c) {
            a(c).on("click", b, this.close)
        };
    c.prototype.close = function(b) {
        function c() {
            f.trigger("closed.bs.alert").remove()
        }
        var d = a(this),
            e = d.attr("data-target");
        e || (e = d.attr("href"), e = e && e.replace(/.*(?=#[^\s]*$)/, ""));
        var f = a(e);
        b && b.preventDefault(), f.length || (f = d.hasClass("alert") ? d : d.parent()), f.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one(a.support.transition.end, c).emulateTransitionEnd(150) : c())
    };
    var d = a.fn.alert;
    a.fn.alert = function(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.alert");
            e || d.data("bs.alert", e = new c(this)), "string" == typeof b && e[b].call(d)
        })
    }, a.fn.alert.Constructor = c, a.fn.alert.noConflict = function() {
        return a.fn.alert = d, this
    }, a(document).on("click.bs.alert.data-api", b, c.prototype.close)
}(jQuery), + function(a) {
    "use strict";
    var b = function(c, d) {
        this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d), this.isLoading = !1
    };
    b.DEFAULTS = {
        loadingText: "loading..."
    }, b.prototype.setState = function(b) {
        var c = "disabled",
            d = this.$element,
            e = d.is("input") ? "val" : "html",
            f = d.data();
        b += "Text", f.resetText || d.data("resetText", d[e]()), d[e](f[b] || this.options[b]), setTimeout(a.proxy(function() {
            "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
        }, this), 0)
    }, b.prototype.toggle = function() {
        var a = !0,
            b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? a = !1 : b.find(".active").removeClass("active")), a && c.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        a && this.$element.toggleClass("active")
    };
    var c = a.fn.button;
    a.fn.button = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.button"),
                f = "object" == typeof c && c;
            e || d.data("bs.button", e = new b(this, f)), "toggle" == c ? e.toggle() : c && e.setState(c)
        })
    }, a.fn.button.Constructor = b, a.fn.button.noConflict = function() {
        return a.fn.button = c, this
    }, a(document).on("click.bs.button.data-api", "[data-toggle^=button]", function(b) {
        var c = a(b.target);
        c.hasClass("btn") || (c = c.closest(".btn")), c.button("toggle"), b.preventDefault()
    })
}(jQuery), + function(a) {
    "use strict";
    var b = function(b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", a.proxy(this.pause, this)).on("mouseleave", a.proxy(this.cycle, this))
    };
    b.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    }, b.prototype.cycle = function(b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, b.prototype.getActiveIndex = function() {
        return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
    }, b.prototype.to = function(b) {
        var c = this,
            d = this.getActiveIndex();
        return b > this.$items.length - 1 || 0 > b ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            c.to(b)
        }) : d == b ? this.pause().cycle() : this.slide(b > d ? "next" : "prev", a(this.$items[b]))
    }, b.prototype.pause = function(b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, b.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, b.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, b.prototype.slide = function(b, c) {
        var d = this.$element.find(".item.active"),
            e = c || d[b](),
            f = this.interval,
            g = "next" == b ? "left" : "right",
            h = "next" == b ? "first" : "last",
            i = this;
        if (!e.length) {
            if (!this.options.wrap) return;
            e = this.$element.find(".item")[h]()
        }
        if (e.hasClass("active")) return this.sliding = !1;
        var j = a.Event("slide.bs.carousel", {
            relatedTarget: e[0],
            direction: g
        });
        return this.$element.trigger(j), j.isDefaultPrevented() ? void 0 : (this.sliding = !0, f && this.pause(), this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid.bs.carousel", function() {
            var b = a(i.$indicators.children()[i.getActiveIndex()]);
            b && b.addClass("active")
        })), a.support.transition && this.$element.hasClass("slide") ? (e.addClass(b), e[0].offsetWidth, d.addClass(g), e.addClass(g), d.one(a.support.transition.end, function() {
            e.removeClass([b, g].join(" ")).addClass("active"), d.removeClass(["active", g].join(" ")), i.sliding = !1, setTimeout(function() {
                i.$element.trigger("slid.bs.carousel")
            }, 0)
        }).emulateTransitionEnd(1e3 * d.css("transition-duration").slice(0, -1))) : (d.removeClass("active"), e.addClass("active"), this.sliding = !1, this.$element.trigger("slid.bs.carousel")), f && this.cycle(), this)
    };
    var c = a.fn.carousel;
    a.fn.carousel = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.carousel"),
                f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c),
                g = "string" == typeof c ? c : f.slide;
            e || d.data("bs.carousel", e = new b(this, f)), "number" == typeof c ? e.to(c) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }, a.fn.carousel.Constructor = b, a.fn.carousel.noConflict = function() {
        return a.fn.carousel = c, this
    }, a(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(b) {
        var c, d = a(this),
            e = a(d.attr("data-target") || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "")),
            f = a.extend({}, e.data(), d.data()),
            g = d.attr("data-slide-to");
        g && (f.interval = !1), e.carousel(f), (g = d.attr("data-slide-to")) && e.data("bs.carousel").to(g), b.preventDefault()
    }), a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
            var b = a(this);
            b.carousel(b.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";
    var b = function(c, d) {
        this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d), this.transitioning = null, this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle()
    };
    b.DEFAULTS = {
        toggle: !0
    }, b.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, b.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b = a.Event("show.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.$parent && this.$parent.find("> .panel > .in");
                if (c && c.length) {
                    var d = c.data("bs.collapse");
                    if (d && d.transitioning) return;
                    c.collapse("hide"), d || c.data("bs.collapse", null)
                }
                var e = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[e](0), this.transitioning = 1;
                var f = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                };
                if (!a.support.transition) return f.call(this);
                var g = a.camelCase(["scroll", e].join("-"));
                this.$element.one(a.support.transition.end, a.proxy(f, this)).emulateTransitionEnd(350)[e](this.$element[0][g])
            }
        }
    }, b.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                var d = function() {
                    this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                };
                return a.support.transition ? void this.$element[c](0).one(a.support.transition.end, a.proxy(d, this)).emulateTransitionEnd(350) : d.call(this)
            }
        }
    }, b.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var c = a.fn.collapse;
    a.fn.collapse = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.collapse"),
                f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c);
            !e && f.toggle && "show" == c && (c = !c), e || d.data("bs.collapse", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }, a.fn.collapse.Constructor = b, a.fn.collapse.noConflict = function() {
        return a.fn.collapse = c, this
    }, a(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function(b) {
        var c, d = a(this),
            e = d.attr("data-target") || b.preventDefault() || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""),
            f = a(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : d.data(),
            i = d.attr("data-parent"),
            j = i && a(i);
        g && g.transitioning || (j && j.find('[data-toggle=collapse][data-parent="' + i + '"]').not(d).addClass("collapsed"), d[f.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), f.collapse(h)
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        a(d).remove(), a(e).each(function() {
            var d = c(a(this)),
                e = {
                    relatedTarget: this
                };
            d.hasClass("open") && (d.trigger(b = a.Event("hide.bs.dropdown", e)), b.isDefaultPrevented() || d.removeClass("open").trigger("hidden.bs.dropdown", e))
        })
    }

    function c(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }
    var d = ".dropdown-backdrop",
        e = "[data-toggle=dropdown]",
        f = function(b) {
            a(b).on("click.bs.dropdown", this.toggle)
        };
    f.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = c(e),
                g = f.hasClass("open");
            if (b(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                f.toggleClass("open").trigger("shown.bs.dropdown", h), e.focus()
            }
            return !1
        }
    }, f.prototype.keydown = function(b) {
        if (/(38|40|27)/.test(b.keyCode)) {
            var d = a(this);
            if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
                var f = c(d),
                    g = f.hasClass("open");
                if (!g || g && 27 == b.keyCode) return 27 == b.which && f.find(e).focus(), d.click();
                var h = " li:not(.divider):visible a",
                    i = f.find("[role=menu]" + h + ", [role=listbox]" + h);
                if (i.length) {
                    var j = i.index(i.filter(":focus"));
                    38 == b.keyCode && j > 0 && j--, 40 == b.keyCode && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).focus()
                }
            }
        }
    };
    var g = a.fn.dropdown;
    a.fn.dropdown = function(b) {
        return this.each(function() {
            var c = a(this),
                d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new f(this)), "string" == typeof b && d[b].call(c)
        })
    }, a.fn.dropdown.Constructor = f, a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = g, this
    }, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", e, f.prototype.toggle).on("keydown.bs.dropdown.data-api", e + ", [role=menu], [role=listbox]", f.prototype.keydown)
}(jQuery), + function(a) {
    "use strict";
    var b = function(b, c) {
        this.options = c, this.$element = a(b), this.$backdrop = this.isShown = null, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    b.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, b.prototype.toggle = function(a) {
        return this[this.isShown ? "hide" : "show"](a)
    }, b.prototype.show = function(b) {
        var c = this,
            d = a.Event("show.bs.modal", {
                relatedTarget: b
            });
        this.$element.trigger(d), this.isShown || d.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function() {
            var d = a.support.transition && c.$element.hasClass("fade");
            c.$element.parent().length || c.$element.appendTo(document.body), c.$element.show().scrollTop(0), d && c.$element[0].offsetWidth, c.$element.addClass("in").attr("aria-hidden", !1), c.enforceFocus();
            var e = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            d ? c.$element.find(".modal-dialog").one(a.support.transition.end, function() {
                c.$element.focus().trigger(e)
            }).emulateTransitionEnd(300) : c.$element.focus().trigger(e)
        }))
    }, b.prototype.hide = function(b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one(a.support.transition.end, a.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }, b.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.focus()
        }, this))
    }, b.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, b.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(), this.backdrop(function() {
            a.removeBackdrop(), a.$element.trigger("hidden.bs.modal")
        })
    }, b.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, b.prototype.backdrop = function(b) {
        var c = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var d = a.support.transition && c;
            if (this.$backdrop = a('<div class="modal-backdrop ' + c + '" />').appendTo(document.body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                    a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                }, this)), d && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            d ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()
        } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()) : b && b()
    };
    var c = a.fn.modal;
    a.fn.modal = function(c, d) {
        return this.each(function() {
            var e = a(this),
                f = e.data("bs.modal"),
                g = a.extend({}, b.DEFAULTS, e.data(), "object" == typeof c && c);
            f || e.data("bs.modal", f = new b(this, g)), "string" == typeof c ? f[c](d) : g.show && f.show(d)
        })
    }, a.fn.modal.Constructor = b, a.fn.modal.noConflict = function() {
        return a.fn.modal = c, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(b) {
        var c = a(this),
            d = c.attr("href"),
            e = a(c.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, "")),
            f = e.data("bs.modal") ? "toggle" : a.extend({
                remote: !/#/.test(d) && d
            }, e.data(), c.data());
        c.is("a") && b.preventDefault(), e.modal(f, this).one("hide", function() {
            c.is(":visible") && c.focus()
        })
    }), a(document).on("show.bs.modal", ".modal", function() {
        a(document.body).addClass("modal-open")
    }).on("hidden.bs.modal", ".modal", function() {
        a(document.body).removeClass("modal-open")
    })
}(jQuery), + function(a) {
    "use strict";
    var b = function(a, b) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", a, b)
    };
    b.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    }, b.prototype.init = function(b, c, d) {
        this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d);
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin",
                    i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, b.prototype.getDefaults = function() {
        return b.DEFAULTS
    }, b.prototype.getOptions = function(b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b
    }, b.prototype.getDelegateOptions = function() {
        var b = {},
            c = this.getDefaults();
        return this._options && a.each(this._options, function(a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, b.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show()
    }, b.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide()
    }, b.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(b), b.isDefaultPrevented()) return;
            var c = this,
                d = this.tip();
            this.setContent(), this.options.animation && d.addClass("fade");
            var e = "function" == typeof this.options.placement ? this.options.placement.call(this, d[0], this.$element[0]) : this.options.placement,
                f = /\s?auto?\s?/i,
                g = f.test(e);
            g && (e = e.replace(f, "") || "top"), d.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(e), this.options.container ? d.appendTo(this.options.container) : d.insertAfter(this.$element);
            var h = this.getPosition(),
                i = d[0].offsetWidth,
                j = d[0].offsetHeight;
            if (g) {
                var k = this.$element.parent(),
                    l = e,
                    m = document.documentElement.scrollTop || document.body.scrollTop,
                    n = "body" == this.options.container ? window.innerWidth : k.outerWidth(),
                    o = "body" == this.options.container ? window.innerHeight : k.outerHeight(),
                    p = "body" == this.options.container ? 0 : k.offset().left;
                e = "bottom" == e && h.top + h.height + j - m > o ? "top" : "top" == e && h.top - m - j < 0 ? "bottom" : "right" == e && h.right + i > n ? "left" : "left" == e && h.left - i < p ? "right" : e, d.removeClass(l).addClass(e)
            }
            var q = this.getCalculatedOffset(e, h, i, j);
            this.applyPlacement(q, e), this.hoverState = null;
            var r = function() {
                c.$element.trigger("shown.bs." + c.type)
            };
            a.support.transition && this.$tip.hasClass("fade") ? d.one(a.support.transition.end, r).emulateTransitionEnd(150) : r()
        }
    }, b.prototype.applyPlacement = function(b, c) {
        var d, e = this.tip(),
            f = e[0].offsetWidth,
            g = e[0].offsetHeight,
            h = parseInt(e.css("margin-top"), 10),
            i = parseInt(e.css("margin-left"), 10);
        isNaN(h) && (h = 0), isNaN(i) && (i = 0), b.top = b.top + h, b.left = b.left + i, a.offset.setOffset(e[0], a.extend({
            using: function(a) {
                e.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                })
            }
        }, b), 0), e.addClass("in");
        var j = e[0].offsetWidth,
            k = e[0].offsetHeight;
        if ("top" == c && k != g && (d = !0, b.top = b.top + g - k), /bottom|top/.test(c)) {
            var l = 0;
            b.left < 0 && (l = -2 * b.left, b.left = 0, e.offset(b), j = e[0].offsetWidth, k = e[0].offsetHeight), this.replaceArrow(l - f + j, j, "left")
        } else this.replaceArrow(k - g, k, "top");
        d && e.offset(b)
    }, b.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "")
    }, b.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, b.prototype.hide = function() {
        function b() {
            "in" != c.hoverState && d.detach(), c.$element.trigger("hidden.bs." + c.type)
        }
        var c = this,
            d = this.tip(),
            e = a.Event("hide.bs." + this.type);
        return this.$element.trigger(e), e.isDefaultPrevented() ? void 0 : (d.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? d.one(a.support.transition.end, b).emulateTransitionEnd(150) : b(), this.hoverState = null, this)
    }, b.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, b.prototype.hasContent = function() {
        return this.getTitle()
    }, b.prototype.getPosition = function() {
        var b = this.$element[0];
        return a.extend({}, "function" == typeof b.getBoundingClientRect ? b.getBoundingClientRect() : {
            width: b.offsetWidth,
            height: b.offsetHeight
        }, this.$element.offset())
    }, b.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }, b.prototype.getTitle = function() {
        var a, b = this.$element,
            c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, b.prototype.tip = function() {
        return this.$tip = this.$tip || a(this.options.template)
    }, b.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, b.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, b.prototype.enable = function() {
        this.enabled = !0
    }, b.prototype.disable = function() {
        this.enabled = !1
    }, b.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, b.prototype.toggle = function(b) {
        var c = b ? a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
        c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, b.prototype.destroy = function() {
        clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var c = a.fn.tooltip;
    a.fn.tooltip = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tooltip"),
                f = "object" == typeof c && c;
            (e || "destroy" != c) && (e || d.data("bs.tooltip", e = new b(this, f)), "string" == typeof c && e[c]())
        })
    }, a.fn.tooltip.Constructor = b, a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = c, this
    }
}(jQuery), + function(a) {
    "use strict";
    var b = function(a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    b.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), b.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), b.prototype.constructor = b, b.prototype.getDefaults = function() {
        return b.DEFAULTS
    }, b.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle(),
            c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content")[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, b.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, b.prototype.getContent = function() {
        var a = this.$element,
            b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, b.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, b.prototype.tip = function() {
        return this.$tip || (this.$tip = a(this.options.template)), this.$tip
    };
    var c = a.fn.popover;
    a.fn.popover = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.popover"),
                f = "object" == typeof c && c;
            (e || "destroy" != c) && (e || d.data("bs.popover", e = new b(this, f)), "string" == typeof c && e[c]())
        })
    }, a.fn.popover.Constructor = b, a.fn.popover.noConflict = function() {
        return a.fn.popover = c, this
    }
}(jQuery), + function(a) {
    "use strict";

    function b(c, d) {
        var e, f = a.proxy(this.process, this);
        this.$element = a(a(c).is("body") ? window : c), this.$body = a("body"), this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", f), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || (e = a(c).attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.offsets = a([]), this.targets = a([]), this.activeTarget = null, this.refresh(), this.process()
    }
    b.DEFAULTS = {
        offset: 10
    }, b.prototype.refresh = function() {
        var b = this.$element[0] == window ? "offset" : "position";
        this.offsets = a([]), this.targets = a([]); {
            var c = this;
            this.$body.find(this.selector).map(function() {
                var d = a(this),
                    e = d.data("target") || d.attr("href"),
                    f = /^#./.test(e) && a(e);
                return f && f.length && f.is(":visible") && [
                    [f[b]().top + (!a.isWindow(c.$scrollElement.get(0)) && c.$scrollElement.scrollTop()), e]
                ] || null
            }).sort(function(a, b) {
                return a[0] - b[0]
            }).each(function() {
                c.offsets.push(this[0]), c.targets.push(this[1])
            })
        }
    }, b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset,
            c = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
            d = c - this.$scrollElement.height(),
            e = this.offsets,
            f = this.targets,
            g = this.activeTarget;
        if (b >= d) return g != (a = f.last()[0]) && this.activate(a);
        if (g && b <= e[0]) return g != (a = f[0]) && this.activate(a);
        for (a = e.length; a--;) g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function(b) {
        this.activeTarget = b, a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
    };
    var c = a.fn.scrollspy;
    a.fn.scrollspy = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.scrollspy"),
                f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = c, this
    }, a(window).on("load", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            b.scrollspy(b.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";
    var b = function(b) {
        this.element = a(b)
    };
    b.prototype.show = function() {
        var b = this.element,
            c = b.closest("ul:not(.dropdown-menu)"),
            d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a")[0],
                f = a.Event("show.bs.tab", {
                    relatedTarget: e
                });
            if (b.trigger(f), !f.isDefaultPrevented()) {
                var g = a(d);
                this.activate(b.parent("li"), c), this.activate(g, g.parent(), function() {
                    b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e
                    })
                })
            }
        }
    }, b.prototype.activate = function(b, c, d) {
        function e() {
            f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), b.addClass("active"), g ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"), d && d()
        }
        var f = c.find("> .active"),
            g = d && a.support.transition && f.hasClass("fade");
        g ? f.one(a.support.transition.end, e).emulateTransitionEnd(150) : e(), f.removeClass("in")
    };
    var c = a.fn.tab;
    a.fn.tab = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tab");
            e || d.data("bs.tab", e = new b(this)), "string" == typeof c && e[c]()
        })
    }, a.fn.tab.Constructor = b, a.fn.tab.noConflict = function() {
        return a.fn.tab = c, this
    }, a(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(b) {
        b.preventDefault(), a(this).tab("show")
    })
}(jQuery), + function(a) {
    "use strict";
    var b = function(c, d) {
        this.options = a.extend({}, b.DEFAULTS, d), this.$window = a(window).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(c), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
    };
    b.RESET = "affix affix-top affix-bottom", b.DEFAULTS = {
        offset: 0
    }, b.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(b.RESET).addClass("affix");
        var a = this.$window.scrollTop(),
            c = this.$element.offset();
        return this.pinnedOffset = c.top - a
    }, b.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, b.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var c = a(document).height(),
                d = this.$window.scrollTop(),
                e = this.$element.offset(),
                f = this.options.offset,
                g = f.top,
                h = f.bottom;
            "top" == this.affixed && (e.top += d), "object" != typeof f && (h = g = f), "function" == typeof g && (g = f.top(this.$element)), "function" == typeof h && (h = f.bottom(this.$element));
            var i = null != this.unpin && d + this.unpin <= e.top ? !1 : null != h && e.top + this.$element.height() >= c - h ? "bottom" : null != g && g >= d ? "top" : !1;
            if (this.affixed !== i) {
                this.unpin && this.$element.css("top", "");
                var j = "affix" + (i ? "-" + i : ""),
                    k = a.Event(j + ".bs.affix");
                this.$element.trigger(k), k.isDefaultPrevented() || (this.affixed = i, this.unpin = "bottom" == i ? this.getPinnedOffset() : null, this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix", "affixed"))), "bottom" == i && this.$element.offset({
                    top: c - h - this.$element.height()
                }))
            }
        }
    };
    var c = a.fn.affix;
    a.fn.affix = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.affix"),
                f = "object" == typeof c && c;
            e || d.data("bs.affix", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }, a.fn.affix.Constructor = b, a.fn.affix.noConflict = function() {
        return a.fn.affix = c, this
    }, a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var b = a(this),
                c = b.data();
            c.offset = c.offset || {}, c.offsetBottom && (c.offset.bottom = c.offsetBottom), c.offsetTop && (c.offset.top = c.offsetTop), b.affix(c)
        })
    })
}(jQuery);
(function() {
    var AjaxMonitor, Bar, DocumentMonitor, ElementMonitor, ElementTracker, EventLagMonitor, Evented, Events, NoTargetError, RequestIntercept, SOURCE_KEYS, Scaler, SocketRequestTracker, XHRRequestTracker, animation, avgAmplitude, bar, cancelAnimation, cancelAnimationFrame, defaultOptions, extend, extendNative, getFromDOM, getIntercept, handlePushState, ignoreStack, init, now, options, requestAnimationFrame, result, runAnimation, scalers, shouldIgnoreURL, shouldTrack, source, sources, uniScaler, _WebSocket, _XDomainRequest, _XMLHttpRequest, _i, _intercept, _len, _pushState, _ref, _ref1, _replaceState, __slice = [].slice,
        __hasProp = {}.hasOwnProperty,
        __extends = function(child, parent) {
            for (var key in parent)
                if (__hasProp.call(parent, key)) child[key] = parent[key];
            function ctor() {
                this.constructor = child
            }
            ctor.prototype = parent.prototype;
            child.prototype = new ctor;
            child.__super__ = parent.prototype;
            return child
        },
        __indexOf = [].indexOf || function(item) {
            for (var i = 0, l = this.length; i < l; i++)
                if (i in this && this[i] === item) return i;
            return -1
        };
    defaultOptions = {
        catchupTime: 500,
        initialRate: .03,
        minTime: 500,
        ghostTime: 500,
        maxProgressPerFrame: 10,
        easeFactor: 1.25,
        startOnPageLoad: !0,
        restartOnPushState: !0,
        restartOnRequestAfter: 500,
        target: "#page-loader",
        elements: {
            checkInterval: 100,
            selectors: ["#page-loader"]
        },
        eventLag: {
            minSamples: 10,
            sampleCount: 3,
            lagThreshold: 3
        },
        ajax: {
            trackMethods: ["GET"],
            trackWebSockets: !0,
            ignoreURLs: []
        }
    };
    now = function() {
        var _ref;
        return (_ref = typeof performance !== "undefined" && performance !== null ? typeof performance.now === "function" ? performance.now() : void 0 : void 0) != null ? _ref : +new Date
    };
    requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
    if (requestAnimationFrame == null) {
        requestAnimationFrame = function(fn) {
            return setTimeout(fn, 50)
        };
        cancelAnimationFrame = function(id) {
            return clearTimeout(id)
        }
    }
    runAnimation = function(fn) {
        var last, tick;
        last = now();
        tick = function() {
            var diff;
            diff = now() - last;
            if (diff >= 33) {
                last = now();
                return fn(diff, function() {
                    return requestAnimationFrame(tick)
                })
            } else return setTimeout(tick, 33 - diff)
        };
        return tick()
    };
    result = function() {
        var args, key, obj;
        obj = arguments[0], key = arguments[1], args = 3 <= arguments.length ? __slice.call(arguments, 2) : [];
        if (typeof obj[key] === "function") return obj[key].apply(obj, args);
        else return obj[key]
    };
    extend = function() {
        var key, out, source, sources, val, _i, _len;
        out = arguments[0], sources = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
        for (_i = 0, _len = sources.length; _i < _len; _i++) {
            source = sources[_i];
            if (source)
                for (key in source) {
                    if (!__hasProp.call(source, key)) continue;
                    val = source[key];
                    if (out[key] != null && typeof out[key] === "object" && val != null && typeof val === "object") extend(out[key], val);
                    else out[key] = val
                }
        }
        return out
    };
    avgAmplitude = function(arr) {
        var count, sum, v, _i, _len;
        sum = count = 0;
        for (_i = 0, _len = arr.length; _i < _len; _i++) {
            v = arr[_i];
            sum += Math.abs(v);
            count++
        }
        return sum / count
    };
    getFromDOM = function(key, json) {
        var data, e, el;
        if (key == null) key = "options";
        if (json == null) json = !0;
        el = document.querySelector("[data-pace-" + key + "]");
        if (!el) return;
        data = el.getAttribute("data-pace-" + key);
        if (!json) return data;
        try {
            return JSON.parse(data)
        } catch (_error) {
            e = _error;
            return typeof console !== "undefined" && console !== null ? console.error("Error parsing inline pace options", e) : void 0
        }
    };
    Evented = function() {
        function Evented() {}
        Evented.prototype.on = function(event, handler, ctx, once) {
            var _base;
            if (once == null) once = !1;
            if (this.bindings == null) this.bindings = {};
            if ((_base = this.bindings)[event] == null) _base[event] = [];
            return this.bindings[event].push({
                handler: handler,
                ctx: ctx,
                once: once
            })
        };
        Evented.prototype.once = function(event, handler, ctx) {
            return this.on(event, handler, ctx, !0)
        };
        Evented.prototype.off = function(event, handler) {
            var i, _ref, _results;
            if (((_ref = this.bindings) != null ? _ref[event] : void 0) == null) return;
            if (handler == null) return delete this.bindings[event];
            else {
                i = 0;
                _results = [];
                while (i < this.bindings[event].length)
                    if (this.bindings[event][i].handler === handler) _results.push(this.bindings[event].splice(i, 1));
                    else _results.push(i++);
                return _results
            }
        };
        Evented.prototype.trigger = function() {
            var args, ctx, event, handler, i, once, _ref, _ref1, _results;
            event = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
            if ((_ref = this.bindings) != null ? _ref[event] : void 0) {
                i = 0;
                _results = [];
                while (i < this.bindings[event].length) {
                    _ref1 = this.bindings[event][i], handler = _ref1.handler, ctx = _ref1.ctx, once = _ref1.once;
                    handler.apply(ctx != null ? ctx : this, args);
                    if (once) _results.push(this.bindings[event].splice(i, 1));
                    else _results.push(i++)
                }
                return _results
            }
        };
        return Evented
    }();
    if (window.Pace == null) window.Pace = {};
    extend(Pace, Evented.prototype);
    options = Pace.options = extend({}, defaultOptions, window.paceOptions, getFromDOM());
    _ref = ["ajax", "document", "eventLag", "elements"];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        source = _ref[_i];
        if (options[source] === !0) options[source] = defaultOptions[source]
    }
    NoTargetError = function(_super) {
        __extends(NoTargetError, _super);

        function NoTargetError() {
            _ref1 = NoTargetError.__super__.constructor.apply(this, arguments);
            return _ref1
        }
        return NoTargetError
    }(Error);
    Bar = function() {
        function Bar() {
            this.progress = 0
        }
        Bar.prototype.getElement = function() {
            var targetElement;
            if (this.el == null) {
                targetElement = document.querySelector(options.target);
                if (!targetElement) throw new NoTargetError;
                this.el = document.createElement("div");
                this.el.className = "pace pace-active";
                document.body.className = document.body.className.replace(/pace-done/g, "");
                document.body.className += " pace-running";
                this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>';
                if (targetElement.firstChild != null) targetElement.insertBefore(this.el, targetElement.firstChild);
                else targetElement.appendChild(this.el)
            }
            return this.el
        };
        Bar.prototype.finish = function() {
            var el;
            el = this.getElement();
            el.className = el.className.replace("pace-active", "");
            el.className += " pace-inactive";
            document.body.className = document.body.className.replace("pace-running", "");
            $("#page-loader").delay(100).fadeOut(700);
            return document.body.className += " pace-done"
        };
        Bar.prototype.update = function(prog) {
            this.progress = prog;
            return this.render()
        };
        Bar.prototype.destroy = function() {
            try {
                this.getElement().parentNode.removeChild(this.getElement())
            } catch (_error) {
                NoTargetError = _error
            }
            return this.el = void 0
        };
        Bar.prototype.render = function() {
            var el, progressStr;
            if (document.querySelector(options.target) == null) return !1;
            el = this.getElement();
            el.children[0].style.width = "" + this.progress + "%";
            if (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) {
                el.children[0].setAttribute("data-progress-text", "" + (this.progress | 0) + "%");
                if (this.progress >= 100) progressStr = "99";
                else {
                    progressStr = this.progress < 10 ? "0" : "";
                    progressStr += this.progress | 0
                }
                el.children[0].setAttribute("data-progress", "" + progressStr)
            }
            return this.lastRenderedProgress = this.progress
        };
        Bar.prototype.done = function() {
            return this.progress >= 100
        };
        return Bar
    }();
    Events = function() {
        function Events() {
            this.bindings = {}
        }
        Events.prototype.trigger = function(name, val) {
            var binding, _j, _len1, _ref2, _results;
            if (this.bindings[name] != null) {
                _ref2 = this.bindings[name];
                _results = [];
                for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
                    binding = _ref2[_j];
                    _results.push(binding.call(this, val))
                }
                return _results
            }
        };
        Events.prototype.on = function(name, fn) {
            var _base;
            if ((_base = this.bindings)[name] == null) _base[name] = [];
            return this.bindings[name].push(fn)
        };
        return Events
    }();
    _XMLHttpRequest = window.XMLHttpRequest;
    _XDomainRequest = window.XDomainRequest;
    _WebSocket = window.WebSocket;
    extendNative = function(to, from) {
        var e, key, val, _results;
        _results = [];
        for (key in from.prototype) try {
            val = from.prototype[key];
            if (to[key] == null && typeof val !== "function") _results.push(to[key] = val);
            else _results.push(void 0)
        } catch (_error) {
            e = _error
        }
        return _results
    };
    ignoreStack = [];
    Pace.ignore = function() {
        var args, fn, ret;
        fn = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
        ignoreStack.unshift("ignore");
        ret = fn.apply(null, args);
        ignoreStack.shift();
        return ret
    };
    Pace.track = function() {
        var args, fn, ret;
        fn = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
        ignoreStack.unshift("track");
        ret = fn.apply(null, args);
        ignoreStack.shift();
        return ret
    };
    shouldTrack = function(method) {
        var _ref2;
        if (method == null) method = "GET";
        if (ignoreStack[0] === "track") return "force";
        if (!ignoreStack.length && options.ajax)
            if (method === "socket" && options.ajax.trackWebSockets) return !0;
            else if (_ref2 = method.toUpperCase(), __indexOf.call(options.ajax.trackMethods, _ref2) >= 0) return !0;
        return !1
    };
    RequestIntercept = function(_super) {
        __extends(RequestIntercept, _super);

        function RequestIntercept() {
            var monitorXHR, _this = this;
            RequestIntercept.__super__.constructor.apply(this, arguments);
            monitorXHR = function(req) {
                var _open;
                _open = req.open;
                return req.open = function(type, url, async) {
                    if (shouldTrack(type)) _this.trigger("request", {
                        type: type,
                        url: url,
                        request: req
                    });
                    return _open.apply(req, arguments)
                }
            };
            window.XMLHttpRequest = function(flags) {
                var req;
                req = new _XMLHttpRequest(flags);
                monitorXHR(req);
                return req
            };
            extendNative(window.XMLHttpRequest, _XMLHttpRequest);
            if (_XDomainRequest != null) {
                window.XDomainRequest = function() {
                    var req;
                    req = new _XDomainRequest;
                    monitorXHR(req);
                    return req
                };
                extendNative(window.XDomainRequest, _XDomainRequest)
            }
            if (_WebSocket != null && options.ajax.trackWebSockets) {
                window.WebSocket = function(url, protocols) {
                    var req;
                    if (protocols != null) req = new _WebSocket(url, protocols);
                    else req = new _WebSocket(url);
                    if (shouldTrack("socket")) _this.trigger("request", {
                        type: "socket",
                        url: url,
                        protocols: protocols,
                        request: req
                    });
                    return req
                };
                extendNative(window.WebSocket, _WebSocket)
            }
        }
        return RequestIntercept
    }(Events);
    _intercept = null;
    getIntercept = function() {
        if (_intercept == null) _intercept = new RequestIntercept;
        return _intercept
    };
    shouldIgnoreURL = function(url) {
        var pattern, _j, _len1, _ref2;
        _ref2 = options.ajax.ignoreURLs;
        for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
            pattern = _ref2[_j];
            if (typeof pattern === "string") {
                if (url.indexOf(pattern) !== -1) return !0
            } else if (pattern.test(url)) return !0
        }
        return !1
    };
    getIntercept().on("request", function(_arg) {
        var after, args, request, type, url;
        type = _arg.type, request = _arg.request, url = _arg.url;
        if (shouldIgnoreURL(url)) return;
        if (!Pace.running && (options.restartOnRequestAfter !== !1 || shouldTrack(type) === "force")) {
            args = arguments;
            after = options.restartOnRequestAfter || 0;
            if (typeof after === "boolean") after = 0;
            return setTimeout(function() {
                var stillActive, _j, _len1, _ref2, _ref3, _results;
                if (type === "socket") stillActive = request.readyState < 2;
                else stillActive = 0 < (_ref2 = request.readyState) && _ref2 < 4;
                if (stillActive) {
                    Pace.restart();
                    _ref3 = Pace.sources;
                    _results = [];
                    for (_j = 0, _len1 = _ref3.length; _j < _len1; _j++) {
                        source = _ref3[_j];
                        if (source instanceof AjaxMonitor) {
                            source.watch.apply(source, args);
                            break
                        } else _results.push(void 0)
                    }
                    return _results
                }
            }, after)
        }
    });
    AjaxMonitor = function() {
        function AjaxMonitor() {
            var _this = this;
            this.elements = [];
            getIntercept().on("request", function() {
                return _this.watch.apply(_this, arguments)
            })
        }
        AjaxMonitor.prototype.watch = function(_arg) {
            var request, tracker, type, url;
            type = _arg.type, request = _arg.request, url = _arg.url;
            if (shouldIgnoreURL(url)) return;
            if (type === "socket") tracker = new SocketRequestTracker(request);
            else tracker = new XHRRequestTracker(request);
            return this.elements.push(tracker)
        };
        return AjaxMonitor
    }();
    XHRRequestTracker = function() {
        function XHRRequestTracker(request) {
            var event, size, _j, _len1, _onreadystatechange, _ref2, _this = this;
            this.progress = 0;
            if (window.ProgressEvent != null) {
                size = null;
                request.addEventListener("progress", function(evt) {
                    if (evt.lengthComputable) return _this.progress = 100 * evt.loaded / evt.total;
                    else return _this.progress = _this.progress + (100 - _this.progress) / 2
                });
                _ref2 = ["load", "abort", "timeout", "error"];
                for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
                    event = _ref2[_j];
                    request.addEventListener(event, function() {
                        return _this.progress = 100
                    })
                }
            } else {
                _onreadystatechange = request.onreadystatechange;
                request.onreadystatechange = function() {
                    var _ref3;
                    if ((_ref3 = request.readyState) === 0 || _ref3 === 4) _this.progress = 100;
                    else if (request.readyState === 3) _this.progress = 50;
                    return typeof _onreadystatechange === "function" ? _onreadystatechange.apply(null, arguments) : void 0
                }
            }
        }
        return XHRRequestTracker
    }();
    SocketRequestTracker = function() {
        function SocketRequestTracker(request) {
            var event, _j, _len1, _ref2, _this = this;
            this.progress = 0;
            _ref2 = ["error", "open"];
            for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
                event = _ref2[_j];
                request.addEventListener(event, function() {
                    return _this.progress = 100
                })
            }
        }
        return SocketRequestTracker
    }();
    ElementMonitor = function() {
        function ElementMonitor(options) {
            var selector, _j, _len1, _ref2;
            if (options == null) options = {};
            this.elements = [];
            if (options.selectors == null) options.selectors = [];
            _ref2 = options.selectors;
            for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
                selector = _ref2[_j];
                this.elements.push(new ElementTracker(selector))
            }
        }
        return ElementMonitor
    }();
    ElementTracker = function() {
        function ElementTracker(selector) {
            this.selector = selector;
            this.progress = 0;
            this.check()
        }
        ElementTracker.prototype.check = function() {
            var _this = this;
            if (document.querySelector(this.selector)) return this.done();
            else return setTimeout(function() {
                return _this.check()
            }, options.elements.checkInterval)
        };
        ElementTracker.prototype.done = function() {
            return this.progress = 100
        };
        return ElementTracker
    }();
    DocumentMonitor = function() {
        DocumentMonitor.prototype.states = {
            loading: 0,
            interactive: 50,
            complete: 100
        };

        function DocumentMonitor() {
            var _onreadystatechange, _ref2, _this = this;
            this.progress = (_ref2 = this.states[document.readyState]) != null ? _ref2 : 100;
            _onreadystatechange = document.onreadystatechange;
            document.onreadystatechange = function() {
                if (_this.states[document.readyState] != null) _this.progress = _this.states[document.readyState];
                return typeof _onreadystatechange === "function" ? _onreadystatechange.apply(null, arguments) : void 0
            }
        }
        return DocumentMonitor
    }();
    EventLagMonitor = function() {
        function EventLagMonitor() {
            var avg, interval, last, points, samples, _this = this;
            this.progress = 0;
            avg = 0;
            samples = [];
            points = 0;
            last = now();
            interval = setInterval(function() {
                var diff;
                diff = now() - last - 50;
                last = now();
                samples.push(diff);
                if (samples.length > options.eventLag.sampleCount) samples.shift();
                avg = avgAmplitude(samples);
                if (++points >= options.eventLag.minSamples && avg < options.eventLag.lagThreshold) {
                    _this.progress = 100;
                    return clearInterval(interval)
                } else return _this.progress = 100 * (3 / (avg + 3))
            }, 50)
        }
        return EventLagMonitor
    }();
    Scaler = function() {
        function Scaler(source) {
            this.source = source;
            this.last = this.sinceLastUpdate = 0;
            this.rate = options.initialRate;
            this.catchup = 0;
            this.progress = this.lastProgress = 0;
            if (this.source != null) this.progress = result(this.source, "progress")
        }
        Scaler.prototype.tick = function(frameTime, val) {
            var scaling;
            if (val == null) val = result(this.source, "progress");
            if (val >= 100) this.done = !0;
            if (val === this.last) this.sinceLastUpdate += frameTime;
            else {
                if (this.sinceLastUpdate) this.rate = (val - this.last) / this.sinceLastUpdate;
                this.catchup = (val - this.progress) / options.catchupTime;
                this.sinceLastUpdate = 0;
                this.last = val
            }
            if (val > this.progress) this.progress += this.catchup * frameTime;
            scaling = 1 - Math.pow(this.progress / 100, options.easeFactor);
            this.progress += scaling * this.rate * frameTime;
            this.progress = Math.min(this.lastProgress + options.maxProgressPerFrame, this.progress);
            this.progress = Math.max(0, this.progress);
            this.progress = Math.min(100, this.progress);
            this.lastProgress = this.progress;
            return this.progress
        };
        return Scaler
    }();
    sources = null;
    scalers = null;
    bar = null;
    uniScaler = null;
    animation = null;
    cancelAnimation = null;
    Pace.running = !1;
    handlePushState = function() {
        if (options.restartOnPushState) return Pace.restart()
    };
    if (window.history.pushState != null) {
        _pushState = window.history.pushState;
        window.history.pushState = function() {
            handlePushState();
            return _pushState.apply(window.history, arguments)
        }
    }
    if (window.history.replaceState != null) {
        _replaceState = window.history.replaceState;
        window.history.replaceState = function() {
            handlePushState();
            return _replaceState.apply(window.history, arguments)
        }
    }
    SOURCE_KEYS = {
        ajax: AjaxMonitor,
        elements: ElementMonitor,
        document: DocumentMonitor,
        eventLag: EventLagMonitor
    };
    (init = function() {
        var type, _j, _k, _len1, _len2, _ref2, _ref3, _ref4;
        Pace.sources = sources = [];
        _ref2 = ["ajax", "elements", "document", "eventLag"];
        for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
            type = _ref2[_j];
            if (options[type] !== !1) sources.push(new SOURCE_KEYS[type](options[type]))
        }
        _ref4 = (_ref3 = options.extraSources) != null ? _ref3 : [];
        for (_k = 0, _len2 = _ref4.length; _k < _len2; _k++) {
            source = _ref4[_k];
            sources.push(new source(options))
        }
        Pace.bar = bar = new Bar;
        scalers = [];
        return uniScaler = new Scaler
    })();
    Pace.stop = function() {
        Pace.trigger("stop");
        Pace.running = !1;
        bar.destroy();
        cancelAnimation = !0;
        if (animation != null) {
            if (typeof cancelAnimationFrame === "function") cancelAnimationFrame(animation);
            animation = null
        }
        return init()
    };
    Pace.restart = function() {
        Pace.trigger("restart");
        Pace.stop();
        return Pace.start()
    };
    Pace.go = function() {
        var start;
        Pace.running = !0;
        bar.render();
        start = now();
        cancelAnimation = !1;
        return animation = runAnimation(function(frameTime, enqueueNextFrame) {
            var avg, count, done, element, elements, i, j, remaining, scaler, scalerList, sum, _j, _k, _len1, _len2, _ref2;
            remaining = 100 - bar.progress;
            count = sum = 0;
            done = !0;
            for (i = _j = 0, _len1 = sources.length; _j < _len1; i = ++_j) {
                source = sources[i];
                scalerList = scalers[i] != null ? scalers[i] : scalers[i] = [];
                elements = (_ref2 = source.elements) != null ? _ref2 : [source];
                for (j = _k = 0, _len2 = elements.length; _k < _len2; j = ++_k) {
                    element = elements[j];
                    scaler = scalerList[j] != null ? scalerList[j] : scalerList[j] = new Scaler(element);
                    done &= scaler.done;
                    if (scaler.done) continue;
                    count++;
                    sum += scaler.tick(frameTime)
                }
            }
            avg = sum / count;
            bar.update(uniScaler.tick(frameTime, avg));
            if (bar.done() || done || cancelAnimation) {
                bar.update(100);
                Pace.trigger("done");
                return setTimeout(function() {
                    bar.finish();
                    Pace.running = !1;
                    return Pace.trigger("hide")
                }, Math.max(options.ghostTime, Math.max(options.minTime - (now() - start), 0)))
            } else return enqueueNextFrame()
        })
    };
    Pace.start = function(_options) {
        extend(options, _options);
        Pace.running = !0;
        try {
            bar.render()
        } catch (_error) {
            NoTargetError = _error
        }
        if (!document.querySelector(".pace")) return setTimeout(Pace.start, 50);
        else {
            Pace.trigger("start");
            return Pace.go()
        }
    };
    if (typeof define === "function" && define.amd) define(function() {
        return Pace
    });
    else if (typeof exports === "object") module.exports = Pace;
    else if (options.startOnPageLoad) Pace.start()
}).call(this);
(function($) {
    var types = ["DOMMouseScroll", "mousewheel"];
    if ($.event.fixHooks)
        for (var i = types.length; i;) $.event.fixHooks[types[--i]] = $.event.mouseHooks;
    $.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener)
                for (var i = types.length; i;) this.addEventListener(types[--i], handler, !1);
            else this.onmousewheel = handler
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var i = types.length; i;) this.removeEventListener(types[--i], handler, !1);
            else this.onmousewheel = null
        }
    };
    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel")
        },
        unmousewheel: function(fn) {
            return this.unbind("mousewheel", fn)
        }
    });

    function handler(event) {
        var orgEvent = event || window.event,
            args = [].slice.call(arguments, 1),
            delta = 0,
            returnValue = !0,
            deltaX = 0,
            deltaY = 0;
        event = $.event.fix(orgEvent);
        event.type = "mousewheel";
        if (orgEvent.wheelDelta) delta = orgEvent.wheelDelta / 120;
        if (orgEvent.detail) delta = -orgEvent.detail / 3;
        deltaY = delta;
        if (orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
            deltaY = 0;
            deltaX = -1 * delta
        }
        if (orgEvent.wheelDeltaY !== undefined) deltaY = orgEvent.wheelDeltaY / 120;
        if (orgEvent.wheelDeltaX !== undefined) deltaX = -1 * orgEvent.wheelDeltaX / 120;
        args.unshift(event, delta, deltaX, deltaY);
        return ($.event.dispatch || $.event.handle).apply(this, args)
    }
})(jQuery);
(function(window, $, undefined) {
    var $event = $.event,
        resizeTimeout;
    $event.special.smartresize = {
        setup: function() {
            $(this).bind("resize", $event.special.smartresize.handler)
        },
        teardown: function() {
            $(this).unbind("resize", $event.special.smartresize.handler)
        },
        handler: function(event, execAsap) {
            var context = this,
                args = arguments;
            event.type = "smartresize";
            if (resizeTimeout) clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(function() {
                jQuery.event.dispatch.apply(context, args)
            }, execAsap === "execAsap" ? 0 : 50)
        }
    };
    $.fn.smartresize = function(fn) {
        return fn ? this.bind("smartresize", fn) : this.trigger("smartresize", ["execAsap"])
    }
})(window, jQuery);
(function(b, a, c) {
    b.fn.jScrollPane = function(e) {
        function d(D, O) {
            var az, Q = this,
                Y, ak, v, am, T, Z, y, q, aA, aF, av, i, I, h, j, aa, U, aq, X, t, A, ar, af, an, G, l, au, ay, x, aw, aI, f, L, aj = !0,
                P = !0,
                aH = !1,
                k = !1,
                ap = D.clone(!1, !1).empty(),
                ac = b.fn.mwheelIntent ? "mwheelIntent.jsp" : "mousewheel.jsp";
            aI = D.css("paddingTop") + " " + D.css("paddingRight") + " " + D.css("paddingBottom") + " " + D.css("paddingLeft");
            f = (parseInt(D.css("paddingLeft"), 10) || 0) + (parseInt(D.css("paddingRight"), 10) || 0);

            function at(aR) {
                var aM, aO, aN, aK, aJ, aQ, aP = !1,
                    aL = !1;
                az = aR;
                if (Y === c) {
                    aJ = D.scrollTop();
                    aQ = D.scrollLeft();
                    D.css({
                        overflow: "hidden",
                        padding: 0
                    });
                    ak = D.innerWidth() + f;
                    v = D.innerHeight();
                    D.width(ak);
                    Y = b('<div class="jspPane" />').css("padding", aI).append(D.children());
                    am = b('<div class="jspContainer" />').css({
                        width: ak + "px",
                        height: v + "px"
                    }).append(Y).appendTo(D)
                } else {
                    D.css("width", "");
                    aP = az.stickToBottom && K();
                    aL = az.stickToRight && B();
                    aK = D.innerWidth() + f != ak || D.outerHeight() != v;
                    if (aK) {
                        ak = D.innerWidth() + f;
                        v = D.innerHeight();
                        am.css({
                            width: ak + "px",
                            height: v + "px"
                        })
                    }
                    if (!aK && L == T && Y.outerHeight() == Z) {
                        D.width(ak);
                        return
                    }
                    L = T;
                    Y.css("width", "");
                    D.width(ak);
                    am.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()
                }
                Y.css("overflow", "auto");
                if (aR.contentWidth) T = aR.contentWidth;
                else T = Y[0].scrollWidth;
                Z = Y[0].scrollHeight;
                Y.css("overflow", "");
                y = T / ak;
                q = Z / v;
                aA = q > 1;
                aF = y > 1;
                if (!(aF || aA)) {
                    D.removeClass("jspScrollable");
                    Y.css({
                        top: 0,
                        width: am.width() - f
                    });
                    n();
                    E();
                    R();
                    w();
                    ai()
                } else {
                    D.addClass("jspScrollable");
                    aM = az.maintainPosition && (I || aa);
                    if (aM) {
                        aO = aD();
                        aN = aB()
                    }
                    aG();
                    z();
                    F();
                    if (aM) {
                        N(aL ? T - ak : aO, !1);
                        M(aP ? Z - v : aN, !1)
                    }
                    J();
                    ag();
                    ao();
                    if (az.enableKeyboardNavigation) S();
                    if (az.clickOnTrack) p();
                    C();
                    if (az.hijackInternalLinks) m()
                }
                if (az.autoReinitialise && !aw) aw = setInterval(function() {
                    at(az)
                }, az.autoReinitialiseDelay);
                else if (!az.autoReinitialise && aw) clearInterval(aw);
                aJ && D.scrollTop(0) && M(aJ, !1);
                aQ && D.scrollLeft(0) && N(aQ, !1);
                D.trigger("jsp-initialised", [aF || aA])
            }

            function aG() {
                if (aA) {
                    am.append(b('<div class="jspVerticalBar" />').append(b('<div class="jspCap jspCapTop" />'), b('<div class="jspTrack" />').append(b('<div class="jspDrag" />').append(b('<div class="jspDragTop" />'), b('<div class="jspDragBottom" />'))), b('<div class="jspCap jspCapBottom" />')));
                    U = am.find(">.jspVerticalBar");
                    aq = U.find(">.jspTrack");
                    av = aq.find(">.jspDrag");
                    if (az.showArrows) {
                        ar = b('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp", aE(0, -1)).bind("click.jsp", aC);
                        af = b('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp", aE(0, 1)).bind("click.jsp", aC);
                        if (az.arrowScrollOnHover) {
                            ar.bind("mouseover.jsp", aE(0, -1, ar));
                            af.bind("mouseover.jsp", aE(0, 1, af))
                        }
                        al(aq, az.verticalArrowPositions, ar, af)
                    }
                    t = v;
                    am.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function() {
                        t -= b(this).outerHeight()
                    });
                    av.hover(function() {
                        av.addClass("jspHover")
                    }, function() {
                        av.removeClass("jspHover")
                    }).bind("mousedown.jsp", function(aJ) {
                        b("html").bind("dragstart.jsp selectstart.jsp", aC);
                        av.addClass("jspActive");
                        var s = aJ.pageY - av.position().top;
                        b("html").bind("mousemove.jsp", function(aK) {
                            V(aK.pageY - s, !1)
                        }).bind("mouseup.jsp mouseleave.jsp", ax);
                        return !1
                    });
                    o()
                }
            }

            function o() {
                aq.height(t + "px");
                I = 0;
                X = az.verticalGutter + aq.outerWidth();
                Y.width(ak - X - f);
                try {
                    if (U.position().left === 0) Y.css("margin-left", X + "px")
                } catch (s) {}
            }

            function z() {
                if (aF) {
                    am.append(b('<div class="jspHorizontalBar" />').append(b('<div class="jspCap jspCapLeft" />'), b('<div class="jspTrack" />').append(b('<div class="jspDrag" />').append(b('<div class="jspDragLeft" />'), b('<div class="jspDragRight" />'))), b('<div class="jspCap jspCapRight" />')));
                    an = am.find(">.jspHorizontalBar");
                    G = an.find(">.jspTrack");
                    h = G.find(">.jspDrag");
                    if (az.showArrows) {
                        ay = b('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp", aE(-1, 0)).bind("click.jsp", aC);
                        x = b('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp", aE(1, 0)).bind("click.jsp", aC);
                        if (az.arrowScrollOnHover) {
                            ay.bind("mouseover.jsp", aE(-1, 0, ay));
                            x.bind("mouseover.jsp", aE(1, 0, x))
                        }
                        al(G, az.horizontalArrowPositions, ay, x)
                    }
                    h.hover(function() {
                        h.addClass("jspHover")
                    }, function() {
                        h.removeClass("jspHover")
                    }).bind("mousedown.jsp", function(aJ) {
                        b("html").bind("dragstart.jsp selectstart.jsp", aC);
                        h.addClass("jspActive");
                        var s = aJ.pageX - h.position().left;
                        b("html").bind("mousemove.jsp", function(aK) {
                            W(aK.pageX - s, !1)
                        }).bind("mouseup.jsp mouseleave.jsp", ax);
                        return !1
                    });
                    l = am.innerWidth();
                    ah()
                }
            }

            function ah() {
                am.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function() {
                    l -= b(this).outerWidth()
                });
                G.width(l + "px");
                aa = 0
            }

            function F() {
                if (aF && aA) {
                    var aJ = G.outerHeight(),
                        s = aq.outerWidth();
                    t -= aJ;
                    b(an).find(">.jspCap:visible,>.jspArrow").each(function() {
                        l += b(this).outerWidth()
                    });
                    l -= s;
                    v -= s;
                    ak -= aJ;
                    G.parent().append(b('<div class="jspCorner" />').css("width", aJ + "px"));
                    o();
                    ah()
                }
                if (aF) Y.width(am.outerWidth() - f + "px");
                Z = Y.outerHeight();
                q = Z / v;
                if (aF) {
                    au = Math.ceil(1 / y * l);
                    if (au > az.horizontalDragMaxWidth) au = az.horizontalDragMaxWidth;
                    else if (au < az.horizontalDragMinWidth) au = az.horizontalDragMinWidth;
                    h.width(au + "px");
                    j = l - au;
                    ae(aa)
                }
                if (aA) {
                    A = Math.ceil(1 / q * t);
                    if (A > az.verticalDragMaxHeight) A = az.verticalDragMaxHeight;
                    else if (A < az.verticalDragMinHeight) A = az.verticalDragMinHeight;
                    av.height(A + "px");
                    i = t - A;
                    ad(I)
                }
            }

            function al(aK, aM, aJ, s) {
                var aO = "before",
                    aL = "after",
                    aN;
                if (aM == "os") aM = /Mac/.test(navigator.platform) ? "after" : "split";
                if (aM == aO) aL = aM;
                else if (aM == aL) {
                    aO = aM;
                    aN = aJ;
                    aJ = s;
                    s = aN
                }
                aK[aO](aJ)[aL](s)
            }

            function aE(aJ, s, aK) {
                return function() {
                    H(aJ, s, this, aK);
                    this.blur();
                    return !1
                }
            }

            function H(aM, aL, aP, aO) {
                aP = b(aP).addClass("jspActive");
                var aN, aK, aJ = !0,
                    s = function() {
                        if (aM !== 0) Q.scrollByX(aM * az.arrowButtonSpeed);
                        if (aL !== 0) Q.scrollByY(aL * az.arrowButtonSpeed);
                        aK = setTimeout(s, aJ ? az.initialDelay : az.arrowRepeatFreq);
                        aJ = !1
                    };
                s();
                aN = aO ? "mouseout.jsp" : "mouseup.jsp";
                aO = aO || b("html");
                aO.bind(aN, function() {
                    aP.removeClass("jspActive");
                    aK && clearTimeout(aK);
                    aK = null;
                    aO.unbind(aN)
                })
            }

            function p() {
                w();
                if (aA) aq.bind("mousedown.jsp", function(aO) {
                    if (aO.originalTarget === c || aO.originalTarget == aO.currentTarget) {
                        var aM = b(this),
                            aP = aM.offset(),
                            aN = aO.pageY - aP.top - I,
                            aK, aJ = !0,
                            s = function() {
                                var aS = aM.offset(),
                                    aT = aO.pageY - aS.top - A / 2,
                                    aQ = v * az.scrollPagePercent,
                                    aR = i * aQ / (Z - v);
                                if (aN < 0)
                                    if (I - aR > aT) Q.scrollByY(-aQ);
                                    else V(aT);
                                else if (aN > 0)
                                    if (I + aR < aT) Q.scrollByY(aQ);
                                    else V(aT);
                                else {
                                    aL();
                                    return
                                }
                                aK = setTimeout(s, aJ ? az.initialDelay : az.trackClickRepeatFreq);
                                aJ = !1
                            },
                            aL = function() {
                                aK && clearTimeout(aK);
                                aK = null;
                                b(document).unbind("mouseup.jsp", aL)
                            };
                        s();
                        b(document).bind("mouseup.jsp", aL);
                        return !1
                    }
                });
                if (aF) G.bind("mousedown.jsp", function(aO) {
                    if (aO.originalTarget === c || aO.originalTarget == aO.currentTarget) {
                        var aM = b(this),
                            aP = aM.offset(),
                            aN = aO.pageX - aP.left - aa,
                            aK, aJ = !0,
                            s = function() {
                                var aS = aM.offset(),
                                    aT = aO.pageX - aS.left - au / 2,
                                    aQ = ak * az.scrollPagePercent,
                                    aR = j * aQ / (T - ak);
                                if (aN < 0)
                                    if (aa - aR > aT) Q.scrollByX(-aQ);
                                    else W(aT);
                                else if (aN > 0)
                                    if (aa + aR < aT) Q.scrollByX(aQ);
                                    else W(aT);
                                else {
                                    aL();
                                    return
                                }
                                aK = setTimeout(s, aJ ? az.initialDelay : az.trackClickRepeatFreq);
                                aJ = !1
                            },
                            aL = function() {
                                aK && clearTimeout(aK);
                                aK = null;
                                b(document).unbind("mouseup.jsp", aL)
                            };
                        s();
                        b(document).bind("mouseup.jsp", aL);
                        return !1
                    }
                })
            }

            function w() {
                if (G) G.unbind("mousedown.jsp");
                if (aq) aq.unbind("mousedown.jsp")
            }

            function ax() {
                b("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp");
                if (av) av.removeClass("jspActive");
                if (h) h.removeClass("jspActive")
            }

            function V(s, aJ) {
                if (!aA) return;
                if (s < 0) s = 0;
                else if (s > i) s = i;
                if (aJ === c) aJ = az.animateScroll;
                if (aJ) Q.animate(av, "top", s, ad);
                else {
                    av.css("top", s);
                    ad(s)
                }
            }

            function ad(aJ) {
                if (aJ === c) aJ = av.position().top;
                am.scrollTop(0);
                I = aJ;
                var aM = I === 0,
                    aK = I == i,
                    aL = aJ / i,
                    s = -aL * (Z - v);
                if (aj != aM || aH != aK) {
                    aj = aM;
                    aH = aK;
                    D.trigger("jsp-arrow-change", [aj, aH, P, k])
                }
                u(aM, aK);
                Y.css("top", s);
                D.trigger("jsp-scroll-y", [-s, aM, aK]).trigger("scroll")
            }

            function W(aJ, s) {
                if (!aF) return;
                if (aJ < 0) aJ = 0;
                else if (aJ > j) aJ = j;
                if (s === c) s = az.animateScroll;
                if (s) Q.animate(h, "left", aJ, ae);
                else {
                    h.css("left", aJ);
                    ae(aJ)
                }
            }

            function ae(aJ) {
                if (aJ === c) aJ = h.position().left;
                am.scrollTop(0);
                aa = aJ;
                var aM = aa === 0,
                    aL = aa == j,
                    aK = aJ / j,
                    s = -aK * (T - ak);
                if (P != aM || k != aL) {
                    P = aM;
                    k = aL;
                    D.trigger("jsp-arrow-change", [aj, aH, P, k])
                }
                r(aM, aL);
                Y.css("left", s);
                D.trigger("jsp-scroll-x", [-s, aM, aL]).trigger("scroll")
            }

            function u(aJ, s) {
                if (az.showArrows) {
                    ar[aJ ? "addClass" : "removeClass"]("jspDisabled");
                    af[s ? "addClass" : "removeClass"]("jspDisabled")
                }
            }

            function r(aJ, s) {
                if (az.showArrows) {
                    ay[aJ ? "addClass" : "removeClass"]("jspDisabled");
                    x[s ? "addClass" : "removeClass"]("jspDisabled")
                }
            }

            function M(s, aJ) {
                var aK = s / (Z - v);
                V(aK * i, aJ)
            }

            function N(aJ, s) {
                var aK = aJ / (T - ak);
                W(aK * j, s)
            }

            function ab(aW, aR, aK) {
                var aO, aL, aM, s = 0,
                    aV = 0,
                    aJ, aQ, aP, aT, aS, aU;
                try {
                    aO = b(aW)
                } catch (aN) {
                    return
                }
                aL = aO.outerHeight();
                aM = aO.outerWidth();
                am.scrollTop(0);
                am.scrollLeft(0);
                while (!aO.is(".jspPane")) {
                    s += aO.position().top;
                    aV += aO.position().left;
                    aO = aO.offsetParent();
                    if (/^body|html$/i.test(aO[0].nodeName)) return
                }
                aJ = aB();
                aP = aJ + v;
                if (s < aJ || aR) aS = s - az.verticalGutter;
                else if (s + aL > aP) aS = s - v + aL + az.verticalGutter;
                if (aS) M(aS, aK);
                aQ = aD();
                aT = aQ + ak;
                if (aV < aQ || aR) aU = aV - az.horizontalGutter;
                else if (aV + aM > aT) aU = aV - ak + aM + az.horizontalGutter;
                if (aU) N(aU, aK)
            }

            function aD() {
                return -Y.position().left
            }

            function aB() {
                return -Y.position().top
            }

            function K() {
                var s = Z - v;
                return s > 20 && s - aB() < 10
            }

            function B() {
                var s = T - ak;
                return s > 20 && s - aD() < 10
            }

            function ag() {
                am.unbind(ac).bind(ac, function(aM, aN, aL, aJ) {
                    var aK = aa,
                        s = I;
                    Q.scrollBy(aL * az.mouseWheelSpeed, -aJ * az.mouseWheelSpeed, !1);
                    return aK == aa && s == I
                })
            }

            function n() {
                am.unbind(ac)
            }

            function aC() {
                return !1
            }

            function J() {
                Y.find(":input,a").unbind("focus.jsp").bind("focus.jsp", function(s) {
                    ab(s.target, !1)
                })
            }

            function E() {
                Y.find(":input,a").unbind("focus.jsp")
            }

            function S() {
                var s, aJ, aL = [];
                aF && aL.push(an[0]);
                aA && aL.push(U[0]);
                Y.focus(function() {
                    D.focus()
                });
                D.attr("tabindex", 0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp", function(aO) {
                    if (aO.target !== this && !(aL.length && b(aO.target).closest(aL).length)) return;
                    var aN = aa,
                        aM = I;
                    switch (aO.keyCode) {
                        case 40:
                        case 38:
                        case 34:
                        case 32:
                        case 33:
                        case 39:
                        case 37:
                            s = aO.keyCode;
                            aK();
                            break;
                        case 35:
                            M(Z - v);
                            s = null;
                            break;
                        case 36:
                            M(0);
                            s = null;
                            break
                    }
                    aJ = aO.keyCode == s && aN != aa || aM != I;
                    return !aJ
                }).bind("keypress.jsp", function(aM) {
                    if (aM.keyCode == s) aK();
                    return !aJ
                });
                if (az.hideFocus) {
                    D.css("outline", "none");
                    if ("hideFocus" in am[0]) D.attr("hideFocus", !0)
                } else {
                    D.css("outline", "");
                    if ("hideFocus" in am[0]) D.attr("hideFocus", !1)
                }

                function aK() {
                    var aN = aa,
                        aM = I;
                    switch (s) {
                        case 40:
                            Q.scrollByY(az.keyboardSpeed, !1);
                            break;
                        case 38:
                            Q.scrollByY(-az.keyboardSpeed, !1);
                            break;
                        case 34:
                        case 32:
                            Q.scrollByY(v * az.scrollPagePercent, !1);
                            break;
                        case 33:
                            Q.scrollByY(-v * az.scrollPagePercent, !1);
                            break;
                        case 39:
                            Q.scrollByX(az.keyboardSpeed, !1);
                            break;
                        case 37:
                            Q.scrollByX(-az.keyboardSpeed, !1);
                            break
                    }
                    aJ = aN != aa || aM != I;
                    return aJ
                }
            }

            function R() {
                D.attr("tabindex", "-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp")
            }

            function C() {
                if (location.hash && location.hash.length > 1) {
                    var aL, aJ, aK = escape(location.hash);
                    try {
                        aL = b(aK)
                    } catch (s) {
                        return
                    }
                    if (aL.length && Y.find(aK))
                        if (am.scrollTop() === 0) aJ = setInterval(function() {
                            if (am.scrollTop() > 0) {
                                ab(aK, !0);
                                b(document).scrollTop(am.position().top);
                                clearInterval(aJ)
                            }
                        }, 50);
                        else {
                            ab(aK, !0);
                            b(document).scrollTop(am.position().top)
                        }
                }
            }

            function ai() {
                b("a.jspHijack").unbind("click.jsp-hijack").removeClass("jspHijack")
            }

            function m() {
                ai();
                b("a[href^=#]").addClass("jspHijack").bind("click.jsp-hijack", function() {
                    var s = this.href.split("#"),
                        aJ;
                    if (s.length > 1) {
                        aJ = s[1];
                        if (aJ.length > 0 && Y.find("#" + aJ).length > 0) {
                            ab("#" + aJ, !0);
                            return !1
                        }
                    }
                })
            }

            function ao() {
                var aK, aJ, aM, aL, aN, s = !1;
                am.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp", function(aO) {
                    var aP = aO.originalEvent.touches[0];
                    aK = aD();
                    aJ = aB();
                    aM = aP.pageX;
                    aL = aP.pageY;
                    aN = !1;
                    s = !0
                }).bind("touchmove.jsp", function(aR) {
                    if (!s) return;
                    var aQ = aR.originalEvent.touches[0],
                        aP = aa,
                        aO = I;
                    Q.scrollTo(aK + aM - aQ.pageX, aJ + aL - aQ.pageY);
                    aN = aN || Math.abs(aM - aQ.pageX) > 5 || Math.abs(aL - aQ.pageY) > 5;
                    return aP == aa && aO == I
                }).bind("touchend.jsp", function(aO) {
                    s = !1
                }).bind("click.jsp-touchclick", function(aO) {
                    if (aN) {
                        aN = !1;
                        return !1
                    }
                })
            }

            function g() {
                var s = aB(),
                    aJ = aD();
                D.removeClass("jspScrollable").unbind(".jsp");
                D.replaceWith(ap.append(Y.children()));
                ap.scrollTop(s);
                ap.scrollLeft(aJ)
            }
            b.extend(Q, {
                reinitialise: function(aJ) {
                    aJ = b.extend({}, az, aJ);
                    at(aJ)
                },
                scrollToElement: function(aK, aJ, s) {
                    ab(aK, aJ, s)
                },
                scrollTo: function(aK, s, aJ) {
                    N(aK, aJ);
                    M(s, aJ)
                },
                scrollToX: function(aJ, s) {
                    N(aJ, s)
                },
                scrollToY: function(s, aJ) {
                    M(s, aJ)
                },
                scrollToPercentX: function(aJ, s) {
                    N(aJ * (T - ak), s)
                },
                scrollToPercentY: function(aJ, s) {
                    M(aJ * (Z - v), s)
                },
                scrollBy: function(aJ, s, aK) {
                    Q.scrollByX(aJ, aK);
                    Q.scrollByY(s, aK)
                },
                scrollByX: function(s, aK) {
                    var aJ = aD() + Math[s < 0 ? "floor" : "ceil"](s),
                        aL = aJ / (T - ak);
                    W(aL * j, aK)
                },
                scrollByY: function(s, aK) {
                    var aJ = aB() + Math[s < 0 ? "floor" : "ceil"](s),
                        aL = aJ / (Z - v);
                    V(aL * i, aK)
                },
                positionDragX: function(s, aJ) {
                    W(s, aJ)
                },
                positionDragY: function(aJ, s) {
                    V(aJ, s)
                },
                animate: function(aJ, aM, s, aL) {
                    var aK = {};
                    aK[aM] = s;
                    aJ.animate(aK, {
                        duration: az.animateDuration,
                        easing: az.animateEase,
                        queue: !1,
                        step: aL
                    })
                },
                getContentPositionX: function() {
                    return aD()
                },
                getContentPositionY: function() {
                    return aB()
                },
                getContentWidth: function() {
                    return T
                },
                getContentHeight: function() {
                    return Z
                },
                getPercentScrolledX: function() {
                    return aD() / (T - ak)
                },
                getPercentScrolledY: function() {
                    return aB() / (Z - v)
                },
                getIsScrollableH: function() {
                    return aF
                },
                getIsScrollableV: function() {
                    return aA
                },
                getContentPane: function() {
                    return Y
                },
                scrollToBottom: function(s) {
                    V(i, s)
                },
                hijackInternalLinks: function() {
                    m()
                },
                destroy: function() {
                    g()
                }
            });
            at(O)
        }
        e = b.extend({}, b.fn.jScrollPane.defaults, e);
        b.each(["mouseWheelSpeed", "arrowButtonSpeed", "trackClickSpeed", "keyboardSpeed"], function() {
            e[this] = e[this] || e.speed
        });
        return this.each(function() {
            var f = b(this),
                g = f.data("jsp");
            if (g) g.reinitialise(e);
            else {
                g = new d(f, e);
                f.data("jsp", g)
            }
        })
    };
    b.fn.jScrollPane.defaults = {
        showArrows: !1,
        maintainPosition: !0,
        stickToBottom: !1,
        stickToRight: !1,
        clickOnTrack: !0,
        autoReinitialise: !1,
        autoReinitialiseDelay: 500,
        verticalDragMinHeight: 0,
        verticalDragMaxHeight: 99999,
        horizontalDragMinWidth: 0,
        horizontalDragMaxWidth: 99999,
        contentWidth: c,
        animateScroll: !1,
        animateDuration: 300,
        animateEase: "linear",
        hijackInternalLinks: !1,
        verticalGutter: 4,
        horizontalGutter: 4,
        mouseWheelSpeed: 0,
        arrowButtonSpeed: 0,
        arrowRepeatFreq: 50,
        arrowScrollOnHover: !1,
        trackClickSpeed: 0,
        trackClickRepeatFreq: 70,
        verticalArrowPositions: "split",
        horizontalArrowPositions: "split",
        enableKeyboardNavigation: !0,
        hideFocus: !1,
        keyboardSpeed: 0,
        initialDelay: 300,
        speed: 30,
        scrollPagePercent: .8
    }
})(jQuery, this);
(function($) {
    var mwheelI = {
            pos: [-260, -260]
        },
        minDif = 3,
        doc = document,
        root = doc.documentElement,
        body = doc.body,
        longDelay, shortDelay;

    function unsetPos() {
        if (this === mwheelI.elem) {
            mwheelI.pos = [-260, -260];
            mwheelI.elem = !1;
            minDif = 3
        }
    }
    $.event.special.mwheelIntent = {
        setup: function() {
            var jElm = $(this).bind("mousewheel", $.event.special.mwheelIntent.handler);
            if (this !== doc && this !== root && this !== body) jElm.bind("mouseleave", unsetPos);
            jElm = null;
            return !0
        },
        teardown: function() {
            $(this).unbind("mousewheel", $.event.special.mwheelIntent.handler).unbind("mouseleave", unsetPos);
            return !0
        },
        handler: function(e, d) {
            var pos = [e.clientX, e.clientY];
            if (this === mwheelI.elem || Math.abs(mwheelI.pos[0] - pos[0]) > minDif || Math.abs(mwheelI.pos[1] - pos[1]) > minDif) {
                mwheelI.elem = this;
                mwheelI.pos = pos;
                minDif = 250;
                clearTimeout(shortDelay);
                shortDelay = setTimeout(function() {
                    minDif = 10
                }, 200);
                clearTimeout(longDelay);
                longDelay = setTimeout(function() {
                    minDif = 3
                }, 1500);
                e = $.extend({}, e, {
                    type: "mwheelIntent"
                });
                return ($.event.dispatch || $.event.handle).apply(this, arguments)
            }
        }
    };
    $.fn.extend({
        mwheelIntent: function(fn) {
            return fn ? this.bind("mwheelIntent", fn) : this.trigger("mwheelIntent")
        },
        unmwheelIntent: function(fn) {
            return this.unbind("mwheelIntent", fn)
        }
    });
    $(function() {
        body = doc.body;
        $(doc).bind("mwheelIntent.mwheelIntentDefault", $.noop)
    })
})(jQuery);
window.JSON || (window.JSON = {}),
    function() {
        function f(a) {
            return a < 10 ? "0" + a : a
        }

        function quote(a) {
            return escapable.lastIndex = 0, escapable.test(a) ? '"' + a.replace(escapable, function(a) {
                var b = meta[a];
                return typeof b == "string" ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + a + '"'
        }

        function str(a, b) {
            var c, d, e, f, g = gap,
                h, i = b[a];
            i && typeof i == "object" && typeof i.toJSON == "function" && (i = i.toJSON(a)), typeof rep == "function" && (i = rep.call(b, a, i));
            switch (typeof i) {
                case "string":
                    return quote(i);
                case "number":
                    return isFinite(i) ? String(i) : "null";
                case "boolean":
                case "null":
                    return String(i);
                case "object":
                    if (!i) return "null";
                    gap += indent, h = [];
                    if (Object.prototype.toString.apply(i) === "[object Array]") {
                        f = i.length;
                        for (c = 0; c < f; c += 1) h[c] = str(c, i) || "null";
                        return e = h.length === 0 ? "[]" : gap ? "[\n" + gap + h.join(",\n" + gap) + "\n" + g + "]" : "[" + h.join(",") + "]", gap = g, e
                    }
                    if (rep && typeof rep == "object") {
                        f = rep.length;
                        for (c = 0; c < f; c += 1) d = rep[c], typeof d == "string" && (e = str(d, i), e && h.push(quote(d) + (gap ? ": " : ":") + e))
                    } else
                        for (d in i) Object.hasOwnProperty.call(i, d) && (e = str(d, i), e && h.push(quote(d) + (gap ? ": " : ":") + e));
                    return e = h.length === 0 ? "{}" : gap ? "{\n" + gap + h.join(",\n" + gap) + "\n" + g + "}" : "{" + h.join(",") + "}", gap = g, e
            }
        }
        "use strict", typeof Date.prototype.toJSON != "function" && (Date.prototype.toJSON = function(a) {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(a) {
            return this.valueOf()
        });
        var JSON = window.JSON,
            cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            rep;
        typeof JSON.stringify != "function" && (JSON.stringify = function(a, b, c) {
            var d;
            gap = "", indent = "";
            if (typeof c == "number")
                for (d = 0; d < c; d += 1) indent += " ";
            else typeof c == "string" && (indent = c);
            rep = b;
            if (!b || typeof b == "function" || typeof b == "object" && typeof b.length == "number") return str("", {
                "": a
            });
            throw new Error("JSON.stringify")
        }), typeof JSON.parse != "function" && (JSON.parse = function(text, reviver) {
            function walk(a, b) {
                var c, d, e = a[b];
                if (e && typeof e == "object")
                    for (c in e) Object.hasOwnProperty.call(e, c) && (d = walk(e, c), d !== undefined ? e[c] = d : delete e[c]);
                return reviver.call(a, b, e)
            }
            var j;
            text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(a) {
                return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }));
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), typeof reviver == "function" ? walk({
                "": j
            }, "") : j;
            throw new SyntaxError("JSON.parse")
        })
    }(),
    function(a, b) {
        var c = a.History = a.History || {},
            d = a.jQuery;
        if (typeof c.Adapter != "undefined") throw new Error("History.js Adapter has already been loaded...");
        c.Adapter = {
            bind: function(a, b, c) {
                d(a).bind(b, c)
            },
            trigger: function(a, b, c) {
                d(a).trigger(b, c)
            },
            extractEventData: function(a, c, d) {
                var e = c && c.originalEvent && c.originalEvent[a] || d && d[a] || b;
                return e
            },
            onDomLoad: function(a) {
                d(a)
            }
        }, typeof c.init != "undefined" && c.init()
    }(window),
    function(a, b) {
        var c = a.document,
            d = a.setTimeout || d,
            e = a.clearTimeout || e,
            f = a.setInterval || f,
            g = a.History = a.History || {};
        if (typeof g.initHtml4 != "undefined") throw new Error("History.js HTML4 Support has already been loaded...");
        g.initHtml4 = function() {
            if (typeof g.initHtml4.initialized != "undefined") return !1;
            g.initHtml4.initialized = !0, g.enabled = !0, g.savedHashes = [], g.isLastHash = function(a) {
                var b = g.getHashByIndex(),
                    c;
                return c = a === b, c
            }, g.saveHash = function(a) {
                return g.isLastHash(a) ? !1 : (g.savedHashes.push(a), !0)
            }, g.getHashByIndex = function(a) {
                var b = null;
                return typeof a == "undefined" ? b = g.savedHashes[g.savedHashes.length - 1] : a < 0 ? b = g.savedHashes[g.savedHashes.length + a] : b = g.savedHashes[a], b
            }, g.discardedHashes = {}, g.discardedStates = {}, g.discardState = function(a, b, c) {
                var d = g.getHashByState(a),
                    e;
                return e = {
                    discardedState: a,
                    backState: c,
                    forwardState: b
                }, g.discardedStates[d] = e, !0
            }, g.discardHash = function(a, b, c) {
                var d = {
                    discardedHash: a,
                    backState: c,
                    forwardState: b
                };
                return g.discardedHashes[a] = d, !0
            }, g.discardedState = function(a) {
                var b = g.getHashByState(a),
                    c;
                return c = g.discardedStates[b] || !1, c
            }, g.discardedHash = function(a) {
                var b = g.discardedHashes[a] || !1;
                return b
            }, g.recycleState = function(a) {
                var b = g.getHashByState(a);
                return g.discardedState(a) && delete g.discardedStates[b], !0
            }, g.emulated.hashChange && (g.hashChangeInit = function() {
                g.checkerFunction = null;
                var b = "",
                    d, e, h, i;
                return g.isInternetExplorer() ? (d = "historyjs-iframe", e = c.createElement("iframe"), e.setAttribute("id", d), e.style.display = "none", c.body.appendChild(e), e.contentWindow.document.open(), e.contentWindow.document.close(), h = "", i = !1, g.checkerFunction = function() {
                    if (i) return !1;
                    i = !0;
                    var c = g.getHash() || "",
                        d = g.unescapeHash(e.contentWindow.document.location.hash) || "";
                    return c !== b ? (b = c, d !== c && (h = d = c, e.contentWindow.document.open(), e.contentWindow.document.close(), e.contentWindow.document.location.hash = g.escapeHash(c)), g.Adapter.trigger(a, "hashchange")) : d !== h && (h = d, g.setHash(d, !1)), i = !1, !0
                }) : g.checkerFunction = function() {
                    var c = g.getHash();
                    return c !== b && (b = c, g.Adapter.trigger(a, "hashchange")), !0
                }, g.intervalList.push(f(g.checkerFunction, g.options.hashChangeInterval)), !0
            }, g.Adapter.onDomLoad(g.hashChangeInit)), g.emulated.pushState && (g.onHashChange = function(b) {
                var d = b && b.newURL || c.location.href,
                    e = g.getHashByUrl(d),
                    f = null,
                    h = null,
                    i = null,
                    j;
                return g.isLastHash(e) ? (g.busy(!1), !1) : (g.doubleCheckComplete(), g.saveHash(e), e && g.isTraditionalAnchor(e) ? (g.Adapter.trigger(a, "anchorchange"), g.busy(!1), !1) : (f = g.extractState(g.getFullUrl(e || c.location.href, !1), !0), g.isLastSavedState(f) ? (g.busy(!1), !1) : (h = g.getHashByState(f), j = g.discardedState(f), j ? (g.getHashByIndex(-2) === g.getHashByState(j.forwardState) ? g.back(!1) : g.forward(!1), !1) : (g.pushState(f.data, f.title, f.url, !1), !0))))
            }, g.Adapter.bind(a, "hashchange", g.onHashChange), g.pushState = function(b, d, e, f) {
                if (g.getHashByUrl(e)) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (f !== !1 && g.busy()) return g.pushQueue({
                    scope: g,
                    callback: g.pushState,
                    args: arguments,
                    queue: f
                }), !1;
                g.busy(!0);
                var h = g.createStateObject(b, d, e),
                    i = g.getHashByState(h),
                    j = g.getState(!1),
                    k = g.getHashByState(j),
                    l = g.getHash();
                return g.storeState(h), g.expectedStateId = h.id, g.recycleState(h), g.setTitle(h), i === k ? (g.busy(!1), !1) : i !== l && i !== g.getShortUrl(c.location.href) ? (g.setHash(i, !1), !1) : (g.saveState(h), g.Adapter.trigger(a, "statechange"), g.busy(!1), !0)
            }, g.replaceState = function(a, b, c, d) {
                if (g.getHashByUrl(c)) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (d !== !1 && g.busy()) return g.pushQueue({
                    scope: g,
                    callback: g.replaceState,
                    args: arguments,
                    queue: d
                }), !1;
                g.busy(!0);
                var e = g.createStateObject(a, b, c),
                    f = g.getState(!1),
                    h = g.getStateByIndex(-2);
                return g.discardState(f, e, h), g.pushState(e.data, e.title, e.url, !1), !0
            }), g.emulated.pushState && g.getHash() && !g.emulated.hashChange && g.Adapter.onDomLoad(function() {
                g.Adapter.trigger(a, "hashchange")
            })
        }, typeof g.init != "undefined" && g.init()
    }(window),
    function(a, b) {
        var c = a.console || b,
            d = a.document,
            e = a.navigator,
            f = a.sessionStorage || !1,
            g = a.setTimeout,
            h = a.clearTimeout,
            i = a.setInterval,
            j = a.clearInterval,
            k = a.JSON,
            l = a.alert,
            m = a.History = a.History || {},
            n = a.history;
        k.stringify = k.stringify || k.encode, k.parse = k.parse || k.decode;
        if (typeof m.init != "undefined") throw new Error("History.js Core has already been loaded...");
        m.init = function() {
            return typeof m.Adapter == "undefined" ? !1 : (typeof m.initCore != "undefined" && m.initCore(), typeof m.initHtml4 != "undefined" && m.initHtml4(), !0)
        }, m.initCore = function() {
            if (typeof m.initCore.initialized != "undefined") return !1;
            m.initCore.initialized = !0, m.options = m.options || {}, m.options.hashChangeInterval = m.options.hashChangeInterval || 100, m.options.safariPollInterval = m.options.safariPollInterval || 500, m.options.doubleCheckInterval = m.options.doubleCheckInterval || 500, m.options.storeInterval = m.options.storeInterval || 1E3, m.options.busyDelay = m.options.busyDelay || 250, m.options.debug = m.options.debug || !1, m.options.initialTitle = m.options.initialTitle || d.title, m.intervalList = [], m.clearAllIntervals = function() {
                var a, b = m.intervalList;
                if (typeof b != "undefined" && b !== null) {
                    for (a = 0; a < b.length; a++) j(b[a]);
                    m.intervalList = null
                }
            }, m.debug = function() {
                (m.options.debug || !1) && m.log.apply(m, arguments)
            }, m.log = function() {
                var a = typeof c != "undefined" && typeof c.log != "undefined" && typeof c.log.apply != "undefined",
                    b = d.getElementById("log"),
                    e, f, g, h, i;
                a ? (h = Array.prototype.slice.call(arguments), e = h.shift(), typeof c.debug != "undefined" ? c.debug.apply(c, [e, h]) : c.log.apply(c, [e, h])) : e = "\n" + arguments[0] + "\n";
                for (f = 1, g = arguments.length; f < g; ++f) {
                    i = arguments[f];
                    if (typeof i == "object" && typeof k != "undefined") try {
                        i = k.stringify(i)
                    } catch (j) {}
                    e += "\n" + i + "\n"
                }
                return b ? (b.value += e + "\n-----\n", b.scrollTop = b.scrollHeight - b.clientHeight) : a || l(e), !0
            }, m.getInternetExplorerMajorVersion = function() {
                var a = m.getInternetExplorerMajorVersion.cached = typeof m.getInternetExplorerMajorVersion.cached != "undefined" ? m.getInternetExplorerMajorVersion.cached : function() {
                    var a = 3,
                        b = d.createElement("div"),
                        c = b.getElementsByTagName("i");
                    while ((b.innerHTML = "\x3c!--[if gt IE " + ++a + "]><i></i><![endif]--\x3e") && c[0]);
                    return a > 4 ? a : !1
                }();
                return a
            }, m.isInternetExplorer = function() {
                var a = m.isInternetExplorer.cached = typeof m.isInternetExplorer.cached != "undefined" ? m.isInternetExplorer.cached : Boolean(m.getInternetExplorerMajorVersion());
                return a
            }, m.emulated = {
                pushState: !Boolean(a.history && a.history.pushState && a.history.replaceState && !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(e.userAgent) && !/AppleWebKit\/5([0-2]|3[0-2])/i.test(e.userAgent)),
                hashChange: Boolean(!("onhashchange" in a || "onhashchange" in d) || m.isInternetExplorer() && m.getInternetExplorerMajorVersion() < 8)
            }, m.enabled = !m.emulated.pushState, m.bugs = {
                setHash: Boolean(!m.emulated.pushState && e.vendor === "Apple Computer, Inc." && /AppleWebKit\/5([0-2]|3[0-3])/.test(e.userAgent)),
                safariPoll: Boolean(!m.emulated.pushState && e.vendor === "Apple Computer, Inc." && /AppleWebKit\/5([0-2]|3[0-3])/.test(e.userAgent)),
                ieDoubleCheck: Boolean(m.isInternetExplorer() && m.getInternetExplorerMajorVersion() < 8),
                hashEscape: Boolean(m.isInternetExplorer() && m.getInternetExplorerMajorVersion() < 7)
            }, m.isEmptyObject = function(a) {
                for (var b in a) return !1;
                return !0
            }, m.cloneObject = function(a) {
                var b, c;
                return a ? (b = k.stringify(a), c = k.parse(b)) : c = {}, c
            }, m.getRootUrl = function() {
                var a = d.location.protocol + "//" + (d.location.hostname || d.location.host);
                if (d.location.port || !1) a += ":" + d.location.port;
                return a += "/", a
            }, m.getBaseHref = function() {
                var a = d.getElementsByTagName("base"),
                    b = null,
                    c = "";
                return a.length === 1 && (b = a[0], c = b.href.replace(/[^\/]+$/, "")), c = c.replace(/\/+$/, ""), c && (c += "/"), c
            }, m.getBaseUrl = function() {
                var a = m.getBaseHref() || m.getBasePageUrl() || m.getRootUrl();
                return a
            }, m.getPageUrl = function() {
                var a = m.getState(!1, !1),
                    b = (a || {}).url || d.location.href,
                    c;
                return c = b.replace(/\/+$/, "").replace(/[^\/]+$/, function(a, b, c) {
                    return /\./.test(a) ? a : a + "/"
                }), c
            }, m.getBasePageUrl = function() {
                var a = d.location.href.replace(/[#\?].*/, "").replace(/[^\/]+$/, function(a, b, c) {
                    return /[^\/]$/.test(a) ? "" : a
                }).replace(/\/+$/, "") + "/";
                return a
            }, m.getFullUrl = function(a, b) {
                var c = a,
                    d = a.substring(0, 1);
                return b = typeof b == "undefined" ? !0 : b, /[a-z]+\:\/\//.test(a) || (d === "/" ? c = m.getRootUrl() + a.replace(/^\/+/, "") : d === "#" ? c = m.getPageUrl().replace(/#.*/, "") + a : d === "?" ? c = m.getPageUrl().replace(/[\?#].*/, "") + a : b ? c = m.getBaseUrl() + a.replace(/^(\.\/)+/, "") : c = m.getBasePageUrl() + a.replace(/^(\.\/)+/, "")), c.replace(/\#$/, "")
            }, m.getShortUrl = function(a) {
                var b = a,
                    c = m.getBaseUrl(),
                    d = m.getRootUrl();
                return m.emulated.pushState && (b = b.replace(c, "")), b = b.replace(d, "/"), m.isTraditionalAnchor(b) && (b = "./" + b), b = b.replace(/^(\.\/)+/g, "./").replace(/\#$/, ""), b
            }, m.store = {}, m.idToState = m.idToState || {}, m.stateToId = m.stateToId || {}, m.urlToId = m.urlToId || {}, m.storedStates = m.storedStates || [], m.savedStates = m.savedStates || [], m.normalizeStore = function() {
                m.store.idToState = m.store.idToState || {}, m.store.urlToId = m.store.urlToId || {}, m.store.stateToId = m.store.stateToId || {}
            }, m.getState = function(a, b) {
                typeof a == "undefined" && (a = !0), typeof b == "undefined" && (b = !0);
                var c = m.getLastSavedState();
                return !c && b && (c = m.createStateObject()), a && (c = m.cloneObject(c), c.url = c.cleanUrl || c.url), c
            }, m.getIdByState = function(a) {
                var b = m.extractId(a.url),
                    c;
                if (!b) {
                    c = m.getStateString(a);
                    if (typeof m.stateToId[c] != "undefined") b = m.stateToId[c];
                    else if (typeof m.store.stateToId[c] != "undefined") b = m.store.stateToId[c];
                    else {
                        for (;;) {
                            b = (new Date).getTime() + String(Math.random()).replace(/\D/g, "");
                            if (typeof m.idToState[b] == "undefined" && typeof m.store.idToState[b] == "undefined") break
                        }
                        m.stateToId[c] = b, m.idToState[b] = a
                    }
                }
                return b
            }, m.normalizeState = function(a) {
                var b, c;
                if (!a || typeof a != "object") a = {};
                if (typeof a.normalized != "undefined") return a;
                if (!a.data || typeof a.data != "object") a.data = {};
                b = {}, b.normalized = !0, b.title = a.title || "", b.url = m.getFullUrl(m.unescapeString(a.url || d.location.href)), b.hash = m.getShortUrl(b.url), b.data = m.cloneObject(a.data), b.id = m.getIdByState(b), b.cleanUrl = b.url.replace(/\??\&_suid.*/, ""), b.url = b.cleanUrl, c = !m.isEmptyObject(b.data);
                if (b.title || c) b.hash = m.getShortUrl(b.url).replace(/\??\&_suid.*/, ""), /\?/.test(b.hash) || (b.hash += "?"), b.hash += "&_suid=" + b.id;
                return b.hashedUrl = m.getFullUrl(b.hash), (m.emulated.pushState || m.bugs.safariPoll) && m.hasUrlDuplicate(b) && (b.url = b.hashedUrl), b
            }, m.createStateObject = function(a, b, c) {
                var d = {
                    data: a,
                    title: b,
                    url: c
                };
                return d = m.normalizeState(d), d
            }, m.getStateById = function(a) {
                a = String(a);
                var c = m.idToState[a] || m.store.idToState[a] || b;
                return c
            }, m.getStateString = function(a) {
                var b, c, d;
                return b = m.normalizeState(a), c = {
                    data: b.data,
                    title: a.title,
                    url: a.url
                }, d = k.stringify(c), d
            }, m.getStateId = function(a) {
                var b, c;
                return b = m.normalizeState(a), c = b.id, c
            }, m.getHashByState = function(a) {
                var b, c;
                return b = m.normalizeState(a), c = b.hash, c
            }, m.extractId = function(a) {
                var b, c, d;
                return c = /(.*)\&_suid=([0-9]+)$/.exec(a), d = c ? c[1] || a : a, b = c ? String(c[2] || "") : "", b || !1
            }, m.isTraditionalAnchor = function(a) {
                var b = !/[\/\?\.]/.test(a);
                return b
            }, m.extractState = function(a, b) {
                var c = null,
                    d, e;
                return b = b || !1, d = m.extractId(a), d && (c = m.getStateById(d)), c || (e = m.getFullUrl(a), d = m.getIdByUrl(e) || !1, d && (c = m.getStateById(d)), !c && b && !m.isTraditionalAnchor(a) && (c = m.createStateObject(null, null, e))), c
            }, m.getIdByUrl = function(a) {
                var c = m.urlToId[a] || m.store.urlToId[a] || b;
                return c
            }, m.getLastSavedState = function() {
                return m.savedStates[m.savedStates.length - 1] || b
            }, m.getLastStoredState = function() {
                return m.storedStates[m.storedStates.length - 1] || b
            }, m.hasUrlDuplicate = function(a) {
                var b = !1,
                    c;
                return c = m.extractState(a.url), b = c && c.id !== a.id, b
            }, m.storeState = function(a) {
                return m.urlToId[a.url] = a.id, m.storedStates.push(m.cloneObject(a)), a
            }, m.isLastSavedState = function(a) {
                var b = !1,
                    c, d, e;
                return m.savedStates.length && (c = a.id, d = m.getLastSavedState(), e = d.id, b = c === e), b
            }, m.saveState = function(a) {
                return m.isLastSavedState(a) ? !1 : (m.savedStates.push(m.cloneObject(a)), !0)
            }, m.getStateByIndex = function(a) {
                var b = null;
                return typeof a == "undefined" ? b = m.savedStates[m.savedStates.length - 1] : a < 0 ? b = m.savedStates[m.savedStates.length + a] : b = m.savedStates[a], b
            }, m.getHash = function() {
                var a = m.unescapeHash(d.location.hash);
                return a
            }, m.unescapeString = function(b) {
                var c = b,
                    d;
                for (;;) {
                    d = a.unescape(c);
                    if (d === c) break;
                    c = d
                }
                return c
            }, m.unescapeHash = function(a) {
                var b = m.normalizeHash(a);
                return b = m.unescapeString(b), b
            }, m.normalizeHash = function(a) {
                var b = a.replace(/[^#]*#/, "").replace(/#.*/, "");
                return b
            }, m.setHash = function(a, b) {
                var c, e, f;
                return b !== !1 && m.busy() ? (m.pushQueue({
                    scope: m,
                    callback: m.setHash,
                    args: arguments,
                    queue: b
                }), !1) : (c = m.escapeHash(a), m.busy(!0), e = m.extractState(a, !0), e && !m.emulated.pushState ? m.pushState(e.data, e.title, e.url, !1) : d.location.hash !== c && (m.bugs.setHash ? (f = m.getPageUrl(), m.pushState(null, null, f + "#" + c, !1)) : d.location.hash = c), m)
            }, m.escapeHash = function(b) {
                var c = m.normalizeHash(b);
                return c = a.escape(c), m.bugs.hashEscape || (c = c.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")), c
            }, m.getHashByUrl = function(a) {
                var b = String(a).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");
                return b = m.unescapeHash(b), b
            }, m.setTitle = function(a) {
                var b = a.title,
                    c;
                b || (c = m.getStateByIndex(0), c && c.url === a.url && (b = c.title || m.options.initialTitle));
                try {
                    d.getElementsByTagName("title")[0].innerHTML = b.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ")
                } catch (e) {}
                return d.title = b, m
            }, m.queues = [], m.busy = function(a) {
                typeof a != "undefined" ? m.busy.flag = a : typeof m.busy.flag == "undefined" && (m.busy.flag = !1);
                if (!m.busy.flag) {
                    h(m.busy.timeout);
                    var b = function() {
                        var a, c, d;
                        if (m.busy.flag) return;
                        for (a = m.queues.length - 1; a >= 0; --a) {
                            c = m.queues[a];
                            if (c.length === 0) continue;
                            d = c.shift(), m.fireQueueItem(d), m.busy.timeout = g(b, m.options.busyDelay)
                        }
                    };
                    m.busy.timeout = g(b, m.options.busyDelay)
                }
                return m.busy.flag
            }, m.busy.flag = !1, m.fireQueueItem = function(a) {
                return a.callback.apply(a.scope || m, a.args || [])
            }, m.pushQueue = function(a) {
                return m.queues[a.queue || 0] = m.queues[a.queue || 0] || [], m.queues[a.queue || 0].push(a), m
            }, m.queue = function(a, b) {
                return typeof a == "function" && (a = {
                    callback: a
                }), typeof b != "undefined" && (a.queue = b), m.busy() ? m.pushQueue(a) : m.fireQueueItem(a), m
            }, m.clearQueue = function() {
                return m.busy.flag = !1, m.queues = [], m
            }, m.stateChanged = !1, m.doubleChecker = !1, m.doubleCheckComplete = function() {
                return m.stateChanged = !0, m.doubleCheckClear(), m
            }, m.doubleCheckClear = function() {
                return m.doubleChecker && (h(m.doubleChecker), m.doubleChecker = !1), m
            }, m.doubleCheck = function(a) {
                return m.stateChanged = !1, m.doubleCheckClear(), m.bugs.ieDoubleCheck && (m.doubleChecker = g(function() {
                    return m.doubleCheckClear(), m.stateChanged || a(), !0
                }, m.options.doubleCheckInterval)), m
            }, m.safariStatePoll = function() {
                var b = m.extractState(d.location.href),
                    c;
                if (!m.isLastSavedState(b)) c = b;
                else return;
                return c || (c = m.createStateObject()), m.Adapter.trigger(a, "popstate"), m
            }, m.back = function(a) {
                return a !== !1 && m.busy() ? (m.pushQueue({
                    scope: m,
                    callback: m.back,
                    args: arguments,
                    queue: a
                }), !1) : (m.busy(!0), m.doubleCheck(function() {
                    m.back(!1)
                }), n.go(-1), !0)
            }, m.forward = function(a) {
                return a !== !1 && m.busy() ? (m.pushQueue({
                    scope: m,
                    callback: m.forward,
                    args: arguments,
                    queue: a
                }), !1) : (m.busy(!0), m.doubleCheck(function() {
                    m.forward(!1)
                }), n.go(1), !0)
            }, m.go = function(a, b) {
                var c;
                if (a > 0)
                    for (c = 1; c <= a; ++c) m.forward(b);
                else {
                    if (!(a < 0)) throw new Error("History.go: History.go requires a positive or negative integer passed.");
                    for (c = -1; c >= a; --c) m.back(b)
                }
                return m
            };
            if (m.emulated.pushState) {
                var o = function() {};
                m.pushState = m.pushState || o, m.replaceState = m.replaceState || o
            } else m.onPopState = function(b, c) {
                var e = !1,
                    f = !1,
                    g, h;
                return m.doubleCheckComplete(), g = m.getHash(), g ? (h = m.extractState(g || d.location.href, !0), h ? m.replaceState(h.data, h.title, h.url, !1) : (m.Adapter.trigger(a, "anchorchange"), m.busy(!1)), m.expectedStateId = !1, !1) : (e = m.Adapter.extractEventData("state", b, c) || !1, e ? f = m.getStateById(e) : m.expectedStateId ? f = m.getStateById(m.expectedStateId) : f = m.extractState(d.location.href), f || (f = m.createStateObject(null, null, d.location.href)), m.expectedStateId = !1, m.isLastSavedState(f) ? (m.busy(!1), !1) : (m.storeState(f), m.saveState(f), m.setTitle(f), m.Adapter.trigger(a, "statechange"), m.busy(!1), !0))
            }, m.Adapter.bind(a, "popstate", m.onPopState), m.pushState = function(b, c, d, e) {
                if (m.getHashByUrl(d) && m.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (e !== !1 && m.busy()) return m.pushQueue({
                    scope: m,
                    callback: m.pushState,
                    args: arguments,
                    queue: e
                }), !1;
                m.busy(!0);
                var f = m.createStateObject(b, c, d);
                return m.isLastSavedState(f) ? m.busy(!1) : (m.storeState(f), m.expectedStateId = f.id, n.pushState(f.id, f.title, f.url), m.Adapter.trigger(a, "popstate")), !0
            }, m.replaceState = function(b, c, d, e) {
                if (m.getHashByUrl(d) && m.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");
                if (e !== !1 && m.busy()) return m.pushQueue({
                    scope: m,
                    callback: m.replaceState,
                    args: arguments,
                    queue: e
                }), !1;
                m.busy(!0);
                var f = m.createStateObject(b, c, d);
                return m.isLastSavedState(f) ? m.busy(!1) : (m.storeState(f), m.expectedStateId = f.id, n.replaceState(f.id, f.title, f.url), m.Adapter.trigger(a, "popstate")), !0
            };
            if (f) {
                try {
                    m.store = k.parse(f.getItem("History.store")) || {}
                } catch (p) {
                    m.store = {}
                }
                m.normalizeStore()
            } else m.store = {}, m.normalizeStore();
            m.Adapter.bind(a, "beforeunload", m.clearAllIntervals), m.Adapter.bind(a, "unload", m.clearAllIntervals), m.saveState(m.storeState(m.extractState(d.location.href, !0))), f && (m.onUnload = function() {
                var a, b;
                try {
                    a = k.parse(f.getItem("History.store")) || {}
                } catch (c) {
                    a = {}
                }
                a.idToState = a.idToState || {}, a.urlToId = a.urlToId || {}, a.stateToId = a.stateToId || {};
                for (b in m.idToState) {
                    if (!m.idToState.hasOwnProperty(b)) continue;
                    a.idToState[b] = m.idToState[b]
                }
                for (b in m.urlToId) {
                    if (!m.urlToId.hasOwnProperty(b)) continue;
                    a.urlToId[b] = m.urlToId[b]
                }
                for (b in m.stateToId) {
                    if (!m.stateToId.hasOwnProperty(b)) continue;
                    a.stateToId[b] = m.stateToId[b]
                }
                m.store = a, m.normalizeStore(), f.setItem("History.store", k.stringify(a))
            }, m.intervalList.push(i(m.onUnload, m.options.storeInterval)), m.Adapter.bind(a, "beforeunload", m.onUnload), m.Adapter.bind(a, "unload", m.onUnload));
            if (!m.emulated.pushState) {
                m.bugs.safariPoll && m.intervalList.push(i(m.safariStatePoll, m.options.safariPollInterval));
                if (e.vendor === "Apple Computer, Inc." || (e.appCodeName || "") === "Mozilla") m.Adapter.bind(a, "hashchange", function() {
                    m.Adapter.trigger(a, "popstate")
                }), m.getHash() && m.Adapter.onDomLoad(function() {
                    m.Adapter.trigger(a, "hashchange")
                })
            }
        }, m.init()
    }(window);
String.prototype.trim = String.prototype.trim || function() {
    return this.replace(/^\s+|\s+$/g, "")
};
String.prototype.strip = String.prototype.strip || function(value, regex) {
    value = String(value);
    var str = this;
    if (value.length) {
        if (!(regex || !1)) value = value.replace(/([\[\]\(\)\^\$\.\?\|\/\\])/g, "\\$1");
        str = str.replace(eval("/^" + value + "+|" + value + "+$/g"), "")
    }
    return String(str)
};
String.prototype.stripLeft = String.prototype.stripLeft || function(value, regex) {
    value = String(value);
    var str = this;
    if (value.length) {
        if (!(regex || !1)) value = value.replace(/([\[\]\(\)\^\$\.\?\|\/\\])/g, "\\$1");
        str = str.replace(eval("/^" + value + "+/g"), "")
    }
    return String(str)
};
String.prototype.stripRight = String.prototype.stripRight || function(value, regex) {
    value = String(value);
    var str = this;
    if (value.length) {
        if (!(regex || !1)) value = value.replace(/([\[\]\(\)\^\$\.\?\|\/\\])/g, "\\$1");
        str = str.replace(eval("/" + value + "+$/g"), "")
    }
    return String(str)
};
String.prototype.toInt = String.prototype.toInt || function() {
    return parseInt(this, 10)
};
String.prototype.wrap = String.prototype.wrap || function(start, end) {
    return start + this + end
};
String.prototype.wrapSelection = String.prototype.wrapSelection || function(start, end, a, z) {
    if (typeof a === "undefined" || a === null) a = this.length;
    if (typeof z === "undefined" || z === null) z = this.length;
    return this.substring(0, a) + start + this.substring(a, z) + end + this.substring(z)
};
String.prototype.toSlug = String.prototype.toSlug || function() {
    return this.toLowerCase().replace(/[\s_]/g, "-").replace(/[^-a-z0-9]/g, "").replace(/--+/g, "-").replace(/^-+|-+$/g, "")
};
String.prototype.queryStringToJSON = String.prototype.queryStringToJSON || function() {
    var params = String(this);
    params = params.substring(params.indexOf("?") + 1);
    params = params.replace(/\+/g, "%20");
    if (params.substring(0, 1) === "{" && params.substring(params.length - 1) === "}") return eval(decodeURIComponent(params));
    params = params.split(/\&(amp\;)?/);
    var json = {};
    for (var i = 0, n = params.length; i < n; ++i) {
        var param = params[i] || null;
        if (param === null) continue;
        param = param.split("=");
        if (param === null) continue;
        var key = param[0] || null;
        if (key === null) continue;
        if (typeof param[1] === "undefined") continue;
        var value = param[1];
        key = decodeURIComponent(key);
        value = decodeURIComponent(value);
        try {
            value = eval(value)
        } catch (e) {}
        var keys = key.split(".");
        if (keys.length === 1) json[key] = value;
        else {
            var path = "",
                cmd = "";
            $.each(keys, function(ii, key) {
                path += '["' + key.replace(/"/g, '\\"') + '"]';
                jsonCLOSUREGLOBAL = json;
                cmd = "if ( typeof jsonCLOSUREGLOBAL" + path + ' === "undefined" ) jsonCLOSUREGLOBAL' + path + " = {}";
                eval(cmd);
                json = jsonCLOSUREGLOBAL;
                delete jsonCLOSUREGLOBAL
            });
            jsonCLOSUREGLOBAL = json;
            valueCLOSUREGLOBAL = value;
            cmd = "jsonCLOSUREGLOBAL" + path + " = valueCLOSUREGLOBAL";
            eval(cmd);
            json = jsonCLOSUREGLOBAL;
            delete jsonCLOSUREGLOBAL;
            delete valueCLOSUREGLOBAL
        }
    }
    return json
};
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(x, t, b, c, d) {
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d)
    },
    easeInQuad: function(x, t, b, c, d) {
        return c * (t /= d) * t + b
    },
    easeOutQuad: function(x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b
    },
    easeInOutQuad: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * (--t * (t - 2) - 1) + b
    },
    easeInCubic: function(x, t, b, c, d) {
        return c * (t /= d) * t * t + b
    },
    easeOutCubic: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b
    },
    easeInOutCubic: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b
    },
    easeInQuart: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t + b
    },
    easeOutQuart: function(x, t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b
    },
    easeInOutQuart: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b
    },
    easeInQuint: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b
    },
    easeOutQuint: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b
    },
    easeInOutQuint: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b
    },
    easeInSine: function(x, t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b
    },
    easeOutSine: function(x, t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b
    },
    easeInOutSine: function(x, t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b
    },
    easeInExpo: function(x, t, b, c, d) {
        return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b
    },
    easeOutExpo: function(x, t, b, c, d) {
        return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b
    },
    easeInOutExpo: function(x, t, b, c, d) {
        if (t == 0) return b;
        if (t == d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b
    },
    easeInCirc: function(x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b
    },
    easeOutCirc: function(x, t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b
    },
    easeInOutCirc: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b
    },
    easeInElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b
    },
    easeOutElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b
    },
    easeInOutElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d / 2) == 2) return b + c;
        if (!p) p = d * (.3 * 1.5);
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b
    },
    easeInBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b
    },
    easeOutBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
    },
    easeInOutBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b
    },
    easeInBounce: function(x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b
    },
    easeOutBounce: function(x, t, b, c, d) {
        if ((t /= d) < 1 / 2.75) return c * (7.5625 * t * t) + b;
        else if (t < 2 / 2.75) return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;
        else if (t < 2.5 / 2.75) return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;
        else return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b
    },
    easeInOutBounce: function(x, t, b, c, d) {
        if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
        return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b
    }
});
window.Modernizr = function(a, b, c) {
    function z(a) {
        j.cssText = a
    }

    function A(a, b) {
        return z(m.join(a + ";") + (b || ""))
    }

    function B(a, b) {
        return typeof a === b
    }

    function C(a, b) {
        return !!~("" + a).indexOf(b)
    }

    function D(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!C(e, "-") && j[e] !== c) return b == "pfx" ? e : !0
        }
        return !1
    }

    function E(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];
            if (f !== c) return d === !1 ? a[e] : B(f, "function") ? f.bind(d || b) : f
        }
        return !1
    }

    function F(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1),
            e = (a + " " + o.join(d + " ") + d).split(" ");
        return B(b, "string") || B(b, "undefined") ? D(e, b) : (e = (a + " " + p.join(d + " ") + d).split(" "), E(e, b, c))
    }
    var d = "2.6.2",
        e = {},
        f = !0,
        g = b.documentElement,
        h = "modernizr",
        i = b.createElement(h),
        j = i.style,
        k, l = {}.toString,
        m = " -webkit- -moz- -o- -ms- ".split(" "),
        n = "Webkit Moz O ms",
        o = n.split(" "),
        p = n.toLowerCase().split(" "),
        q = {},
        r = {},
        s = {},
        t = [],
        u = t.slice,
        v, w = function(a, c, d, e) {
            var f, i, j, k, l = b.createElement("div"),
                m = b.body,
                n = m || b.createElement("body");
            if (parseInt(d, 10))
                while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
            return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i
        },
        x = {}.hasOwnProperty,
        y;
    !B(x, "undefined") && !B(x.call, "undefined") ? y = function(a, b) {
        return x.call(a, b)
    } : y = function(a, b) {
        return b in a && B(a.constructor.prototype[b], "undefined")
    }, Function.prototype.bind || (Function.prototype.bind = function(b) {
        var c = this;
        if (typeof c != "function") throw new TypeError;
        var d = u.call(arguments, 1),
            e = function() {
                if (this instanceof e) {
                    var a = function() {};
                    a.prototype = c.prototype;
                    var f = new a,
                        g = c.apply(f, d.concat(u.call(arguments)));
                    return Object(g) === g ? g : f
                }
                return c.apply(b, d.concat(u.call(arguments)))
            };
        return e
    }), q.csstransforms = function() {
        return !!F("transform")
    }, q.csstransforms3d = function() {
        var a = !!F("perspective");
        return a && "webkitPerspective" in g.style && w("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b, c) {
            a = b.offsetLeft === 9 && b.offsetHeight === 3
        }), a
    }, q.csstransitions = function() {
        return F("transition")
    };
    for (var G in q) y(q, G) && (v = G.toLowerCase(), e[v] = q[G](), t.push((e[v] ? "" : "no-") + v));
    return e.addTest = function(a, b) {
        if (typeof a == "object")
            for (var d in a) y(a, d) && e.addTest(d, a[d]);
        else {
            a = a.toLowerCase();
            if (e[a] !== c) return e;
            b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
        }
        return e
    }, z(""), i = k = null, e._version = d, e._prefixes = m, e._domPrefixes = p, e._cssomPrefixes = o, e.testProp = function(a) {
        return D([a])
    }, e.testAllProps = F, e.testStyles = w, e.prefixed = function(a, b, c) {
        return b ? F(a, b, c) : F(a, "pfx")
    }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + t.join(" ") : ""), e
}(this, this.document);
(function(b, c) {
    var $ = b.jQuery || b.Cowboy || (b.Cowboy = {}),
        a;
    $.throttle = a = function(e, f, j, i) {
        var h, d = 0;
        if (typeof f !== "boolean") {
            i = j;
            j = f;
            f = c
        }

        function g() {
            var o = this,
                m = +new Date - d,
                n = arguments;

            function l() {
                d = +new Date;
                j.apply(o, n)
            }

            function k() {
                h = c
            }
            if (i && !h) l();
            h && clearTimeout(h);
            if (i === c && m > e) l();
            else if (f !== !0) h = setTimeout(i ? k : l, i === c ? e - m : e)
        }
        if ($.guid) g.guid = j.guid = j.guid || $.guid++;
        return g
    };
    $.debounce = function(d, e, f) {
        return f === c ? a(d, e, !1) : a(d, f, e !== !1)
    }
})(this);
! function(t, e, i) {
    t.fn.sorted = function(e) {
        var n = t.extend({}, t.fn.sorted.defaults, e),
            s = this.get(),
            r = !1;
        return s.length ? n.randomize ? t.fn.sorted.randomize(s) : (n.by !== t.noop && null !== n.by && n.by !== i && s.sort(function(e, s) {
            if (r) return 0;
            var o = n.by(t(e)),
                a = n.by(t(s));
            return o === i && a === i ? (r = !0, 0) : "sortFirst" === o || "sortLast" === a ? -1 : "sortLast" === o || "sortFirst" === a ? 1 : a > o ? -1 : o > a ? 1 : 0
        }), r ? this.get() : (n.reverse && s.reverse(), s)) : []
    }, t.fn.sorted.defaults = {
        reverse: !1,
        by: null,
        randomize: !1
    }, t.fn.sorted.randomize = function(t) {
        var e, i, n = t.length;
        if (!n) return t;
        for (; --n;) i = Math.floor(Math.random() * (n + 1)), e = t[i], t[i] = t[n], t[n] = e;
        return t
    };
    var n = 0,
        s = function(e, i) {
            var r = this;
            t.extend(r, s.options, i, s.settings), r.$container = e, r.$window = t(window), r.unique = "shuffle_" + n++, r._fire("loading"), r._init(), r._fire("done")
        };
    s.prototype = {
        _init: function() {
            var e, i = this,
                n = t.proxy(i._onResize, i),
                s = i.throttle ? i.throttle(i.throttleTime, n) : n,
                r = i.initialSort ? i.initialSort : null;
            i._setVars(), i._resetCols(), i._addClasses(), i._initItems(), i.$window.on("resize.shuffle." + i.unique, s), e = i.$container.css(["paddingLeft", "paddingRight", "position", "width"]), "static" === e.position && i.$container.css("position", "relative"), i.offset = {
                left: parseInt(e.paddingLeft, 10) || 0,
                top: parseInt(e.paddingTop, 10) || 0
            }, i._setColumns(parseInt(e.width, 10)), i.shuffle(i.group, r), i.supported && setTimeout(function() {
                i._setTransitions(), i.$container[0].style[i.transitionName] = "height " + i.speed + "ms " + i.easing
            }, 0)
        },
        _addClasses: function() {
            var t = this;
            return t.$container.addClass("shuffle"), t.$items.addClass("shuffle-item filtered"), t
        },
        _setVars: function() {
            var e = this;
            return e.$items = e._getItems(), e.transitionName = e.prefixed("transition"), e.transitionDelayName = e.prefixed("transitionDelay"), e.transitionDuration = e.prefixed("transitionDuration"), e.transform = e.getPrefixed("transform"), e.transitionend = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                msTransition: "MSTransitionEnd",
                transition: "transitionend"
            }[e.transitionName], e.isFluid = e.columnWidth && "function" == typeof e.columnWidth, 0 === e.columnWidth && null !== e.sizer && (e.columnWidth = e.sizer), "string" == typeof e.columnWidth ? e.$sizer = e.$container.find(e.columnWidth) : e.columnWidth && e.columnWidth.nodeType && 1 === e.columnWidth.nodeType ? e.$sizer = t(e.columnWidth) : e.columnWidth && e.columnWidth.jquery && (e.$sizer = e.columnWidth), e.$sizer && e.$sizer.length && (e.useSizer = !0, e.sizer = e.$sizer[0]), e
        },
        _filter: function(e, n) {
            var s = this,
                r = n !== i,
                o = r ? n : s.$items,
                a = t();
            return e = e || s.lastFilter, s._fire("filter"), t.isFunction(e) ? o.each(function() {
                var i = t(this),
                    n = e.call(i[0], i, s);
                n && (a = a.add(i))
            }) : (s.group = e, "all" !== e ? o.each(function() {
                var i = t(this),
                    n = i.data("groups"),
                    r = s.delimeter && !t.isArray(n) ? n.split(s.delimeter) : n,
                    o = t.inArray(e, r) > -1;
                o && (a = a.add(i))
            }) : a = o), s._toggleFilterClasses(o, a), o = null, n = null, a
        },
        _toggleFilterClasses: function(e, i) {
            var n = "concealed",
                s = "filtered";
            e.filter(i).each(function() {
                var e = t(this);
                e.hasClass(n) && e.removeClass(n), e.hasClass(s) || e.addClass(s)
            }), e.not(i).each(function() {
                var e = t(this);
                e.hasClass(n) || e.addClass(n), e.hasClass(s) && e.removeClass(s)
            })
        },
        _initItems: function(t) {
            return t = t || this.$items, t.css(this.itemCss)
        },
        _updateItemCount: function() {
            return this.visibleItems = this.$items.filter(".filtered").length, this
        },
        _setTransition: function(t) {
            var e = this;
            return t.style[e.transitionName] = e.transform + " " + e.speed + "ms " + e.easing + ", opacity " + e.speed + "ms " + e.easing, t
        },
        _setTransitions: function(t) {
            var e = this;
            return t = t || e.$items, t.each(function() {
                e._setTransition(this)
            }), e
        },
        _setSequentialDelay: function(e) {
            var i = this;
            i.supported && t.each(e, function(e) {
                this.style[i.transitionDelayName] = "0ms," + (e + 1) * i.sequentialFadeDelay + "ms", t(this).one(i.transitionend, function() {
                    this.style[i.transitionDelayName] = "0ms"
                })
            })
        },
        _getItems: function() {
            return this.$container.children(this.itemSelector)
        },
        _getPreciseDimension: function(e, i) {
            var n;
            return n = window.getComputedStyle ? window.getComputedStyle(e, null)[i] : t(e).css(i), parseFloat(n)
        },
        _setColumns: function(t) {
            var e, i = this,
                n = t || i.$container.width(),
                s = "function" == typeof i.gutterWidth ? i.gutterWidth(n) : i.useSizer ? i._getPreciseDimension(i.sizer, "marginLeft") : i.gutterWidth;
            i.colWidth = i.isFluid ? i.columnWidth(n) : i.useSizer ? i._getPreciseDimension(i.sizer, "width") : i.columnWidth || i.$items.outerWidth(!0) || n, i.colWidth = i.colWidth || n, i.colWidth += s, e = (n + s) / i.colWidth, Math.ceil(e) - e < .01 && (e = Math.ceil(e)), i.cols = Math.floor(e), i.cols = Math.max(i.cols, 1), i.containerWidth = n
        },
        _setContainerSize: function() {
            var t = this,
                e = Math.max.apply(Math, t.colYs);
            t.$container.css("height", e + "px")
        },
        _fire: function(t, e) {
            this.$container.trigger(t + ".shuffle", e && e.length ? e : [this])
        },
        _layout: function(e, i, n, s) {
            var r = this;
            i = i || r.filterEnd, r.layoutTransitionEnded = !1, t.each(e, function(o) {
                var a = t(e[o]),
                    l = Math.ceil(a.outerWidth(!0) / r.colWidth);
                if (l = Math.min(l, r.cols), 1 === l) r._placeItem(a, r.colYs, i, n, s);
                else {
                    var u, d, c = r.cols + 1 - l,
                        f = [];
                    for (d = 0; c > d; d++) u = r.colYs.slice(d, d + l), f[d] = Math.max.apply(Math, u);
                    r._placeItem(a, f, i, n, s)
                }
            }), r._processStyleQueue(), r._setContainerSize()
        },
        _resetCols: function() {
            var t = this.cols;
            for (this.colYs = []; t--;) this.colYs.push(0)
        },
        _reLayout: function(t, e) {
            var i = this;
            t = t || i.filterEnd, i._resetCols(), i.keepSorted && i.lastSort ? i.sort(i.lastSort, !0, e) : i._layout(i.$items.filter(".filtered").get(), i.filterEnd, e)
        },
        _placeItem: function(t, e, i, n, s) {
            for (var r = this, o = Math.min.apply(Math, e), a = 0, l = 0, u = e.length; u > l; l++)
                if (e[l] >= o - r.buffer && e[l] <= o + r.buffer) {
                    a = l;
                    break
                }
            var d = r.colWidth * a,
                c = o;
            d = Math.round(d + r.offset.left), c = Math.round(c + r.offset.top), t.data({
                x: d,
                y: c
            });
            var f = o + t.outerHeight(!0),
                h = r.cols + 1 - u;
            for (l = 0; h > l; l++) r.colYs[a + l] = f;
            var p = {
                from: "layout",
                $this: t,
                x: d,
                y: c,
                scale: 1
            };
            n ? p.skipTransition = !0 : (p.opacity = 1, p.callback = i), s && (p.opacity = 0), r.styleQueue.push(p)
        },
        _shrink: function(e, i) {
            var n = this,
                s = e || n.$items.filter(".concealed"),
                r = {},
                o = i || n.shrinkEnd;
            s.length && (n._fire("shrink"), n.shrinkTransitionEnded = !1, s.each(function() {
                var e = t(this),
                    i = e.data();
                r = {
                    from: "shrink",
                    $this: e,
                    x: i.x,
                    y: i.y,
                    scale: .001,
                    opacity: 0,
                    callback: o
                }, n.styleQueue.push(r)
            }))
        },
        _onResize: function() {
            var t, e = this;
            e.enabled && !e.destroyed && (t = e.$container.width(), t !== e.containerWidth && e.resized())
        },
        setPrefixedCss: function(t, e, i) {
            t.css(this.prefixed(e), i)
        },
        getPrefixed: function(t) {
            var e = this.prefixed(t);
            return e ? e.replace(/([A-Z])/g, function(t, e) {
                return "-" + e.toLowerCase()
            }).replace(/^ms-/, "-ms-") : e
        },
        transition: function(e) {
            var n, s = this,
                r = function() {
                    s.layoutTransitionEnded || "layout" !== e.from ? s.shrinkTransitionEnded || "shrink" !== e.from || (e.callback.call(s), s.shrinkTransitionEnded = !0) : (s._fire("layout"), e.callback.call(s), s.layoutTransitionEnded = !0)
                };
            if (e.callback = e.callback || t.noop, s.supported) e.scale === i && (e.scale = 1), n = s.threeD ? "translate3d(" + e.x + "px, " + e.y + "px, 0) scale3d(" + e.scale + ", " + e.scale + ", 1)" : "translate(" + e.x + "px, " + e.y + "px) scale(" + e.scale + ", " + e.scale + ")", e.x !== i && s.setPrefixedCss(e.$this, "transform", n), e.opacity !== i && e.$this.css("opacity", e.opacity), e.$this.one(s.transitionend, r);
            else {
                var o = {
                    left: e.x,
                    top: e.y,
                    opacity: e.opacity
                };
                e.$this.stop(!0).animate(o, s.speed, "swing", r)
            }
        },
        _processStyleQueue: function() {
            var e = this,
                i = e.styleQueue;
            t.each(i, function(t, i) {
                i.skipTransition ? e._skipTransition(i.$this[0], function() {
                    e.transition(i)
                }) : e.transition(i)
            }), e.styleQueue.length = 0
        },
        shrinkEnd: function() {
            this._fire("shrunk")
        },
        filterEnd: function() {
            this._fire("filtered")
        },
        sortEnd: function() {
            this._fire("sorted")
        },
        _skipTransition: function(e, i, n) {
            var s, r = this,
                o = r.transitionDuration,
                a = e.style[o];
            e.style[o] = "0ms", t.isFunction(i) ? i() : e.style[i] = n, s = e.offsetWidth, e.style[o] = a
        },
        _addItems: function(t, e, n) {
            var s, r, o = this;
            o.supported || (e = !1), t.addClass("shuffle-item"), o._initItems(t), o._setTransitions(t), o.$items = o._getItems(), t.css("opacity", 0), s = o._filter(i, t), r = s.get(), o._updateItemCount(), e ? (o._layout(r, null, !0, !0), n && o._setSequentialDelay(s), o._revealAppended(s)) : o._layout(r)
        },
        _revealAppended: function(e) {
            var i = this;
            setTimeout(function() {
                e.each(function(e, n) {
                    i.transition({
                        from: "reveal",
                        $this: t(n),
                        opacity: 1
                    })
                })
            }, i.revealAppendedDelay)
        },
        shuffle: function(t, e) {
            var i = this;
            i.enabled && (t || (t = "all"), i._filter(t), i.lastFilter = t, i._updateItemCount(), i._resetCols(), i._shrink(), e && (i.lastSort = e), i._reLayout())
        },
        sort: function(t, e, i) {
            var n = this,
                s = n.$items.filter(".filtered").sorted(t);
            e || n._resetCols(), n._layout(s, function() {
                e && n.filterEnd(), n.sortEnd()
            }, i), n.lastSort = t
        },
        resized: function(t) {
            this.enabled && (t || this._setColumns(), this._reLayout())
        },
        layout: function() {
            this.update(!0)
        },
        update: function(t) {
            this.resized(t)
        },
        appended: function(t, e, i) {
            e = e === !1 ? !1 : !0, i = i === !1 ? !1 : !0, this._addItems(t, e, i)
        },
        disable: function() {
            this.enabled = !1
        },
        enable: function(t) {
            this.enabled = !0, t !== !1 && this.update()
        },
        remove: function(t) {
            if (t.length && t.jquery) {
                var e = this;
                return e._shrink(t, function() {
                    var e = this;
                    t.remove(), setTimeout(function() {
                        e.$items = e._getItems(), e.layout(), e._updateItemCount(), e._fire("removed", [t, e]), t = null
                    }, 0)
                }), e._processStyleQueue(), e
            }
        },
        destroy: function() {
            var t = this;
            t.$window.off("." + t.unique), t.$container.removeClass("shuffle").removeAttr("style").removeData("shuffle"), t.$items.removeAttr("style").removeClass("concealed filtered shuffle-item"), t.destroyed = !0
        }
    }, s.options = {
        group: "all",
        speed: 250,
        easing: "ease-out",
        itemSelector: "",
        sizer: null,
        gutterWidth: 0,
        columnWidth: 0,
        delimeter: null,
        buffer: 0,
        initialSort: null,
        throttle: t.throttle || null,
        throttleTime: 300,
        sequentialFadeDelay: 150,
        supported: e.csstransforms && e.csstransitions
    }, s.settings = {
        $sizer: null,
        useSizer: !1,
        itemCss: {
            position: "absolute",
            top: 0,
            left: 0
        },
        offset: {
            top: 0,
            left: 0
        },
        revealAppendedDelay: 300,
        keepSorted: !0,
        enabled: !0,
        destroyed: !1,
        styleQueue: [],
        prefixed: e.prefixed,
        threeD: e.csstransforms3d
    }, t.fn.shuffle = function(e) {
        var i = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var n = t(this),
                r = n.data("shuffle");
            r || (r = new s(n, e), n.data("shuffle", r)), "string" == typeof e && r[e] && r[e].apply(r, i)
        })
    }
}(jQuery, Modernizr);
(function(e) {
    var t, n, i, o, r, a, s, l = "Close",
        c = "BeforeClose",
        d = "AfterClose",
        u = "BeforeAppend",
        p = "MarkupParse",
        f = "Open",
        m = "Change",
        g = "mfp",
        h = "." + g,
        v = "mfp-ready",
        C = "mfp-removing",
        y = "mfp-prevent-close",
        w = function() {},
        b = !!window.jQuery,
        I = e(window),
        x = function(e, n) {
            t.ev.on(g + e + h, n)
        },
        k = function(t, n, i, o) {
            var r = document.createElement("div");
            return r.className = "mfp-" + t, i && (r.innerHTML = i), o ? n && n.appendChild(r) : (r = e(r), n && r.appendTo(n)), r
        },
        T = function(n, i) {
            t.ev.triggerHandler(g + n, i), t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i]))
        },
        E = function(n) {
            return n === s && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), s = n), t.currTemplate.closeBtn
        },
        _ = function() {
            e.magnificPopup.instance || (t = new w, t.init(), e.magnificPopup.instance = t)
        },
        S = function() {
            var e = document.createElement("p").style,
                t = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== e.transition) return !0;
            for (; t.length;)
                if (t.pop() + "Transition" in e) return !0;
            return !1
        };
    w.prototype = {
        constructor: w,
        init: function() {
            var n = navigator.appVersion;
            t.isIE7 = -1 !== n.indexOf("MSIE 7."), t.isIE8 = -1 !== n.indexOf("MSIE 8."), t.isLowIE = t.isIE7 || t.isIE8, t.isAndroid = /android/gi.test(n), t.isIOS = /iphone|ipad|ipod/gi.test(n), t.supportsTransition = S(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), o = e(document), t.popupsCache = {}
        },
        open: function(n) {
            i || (i = e(document.body));
            var r;
            if (n.isObj === !1) {
                t.items = n.items.toArray(), t.index = 0;
                var s, l = n.items;
                for (r = 0; l.length > r; r++)
                    if (s = l[r], s.parsed && (s = s.el[0]), s === n.el[0]) {
                        t.index = r;
                        break
                    }
            } else t.items = e.isArray(n.items) ? n.items : [n.items], t.index = n.index || 0;
            if (t.isOpen) return t.updateItemHTML(), void 0;
            t.types = [], a = "", t.ev = n.mainEl && n.mainEl.length ? n.mainEl.eq(0) : o, n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, n), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = k("bg").on("click" + h, function() {
                t.close()
            }), t.wrap = k("wrap").attr("tabindex", -1).on("click" + h, function(e) {
                t._checkIfClose(e.target) && t.close()
            }), t.container = k("container", t.wrap)), t.contentContainer = k("content"), t.st.preloader && (t.preloader = k("preloader", t.container, t.st.tLoading));
            var c = e.magnificPopup.modules;
            for (r = 0; c.length > r; r++) {
                var d = c[r];
                d = d.charAt(0).toUpperCase() + d.slice(1), t["init" + d].call(t)
            }
            T("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (x(p, function(e, t, n, i) {
                n.close_replaceWith = E(i.type)
            }), a += " mfp-close-btn-in") : t.wrap.append(E())), t.st.alignTop && (a += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({
                overflow: t.st.overflowY,
                overflowX: "hidden",
                overflowY: t.st.overflowY
            }) : t.wrap.css({
                top: I.scrollTop(),
                position: "absolute"
            }), (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
                height: o.height(),
                position: "absolute"
            }), t.st.enableEscapeKey && o.on("keyup" + h, function(e) {
                27 === e.keyCode && t.close()
            }), I.on("resize" + h, function() {
                t.updateSize()
            }), t.st.closeOnContentClick || (a += " mfp-auto-cursor"), a && t.wrap.addClass(a);
            var u = t.wH = I.height(),
                m = {};
            if (t.fixedContentPos && t._hasScrollBar(u)) {
                var g = t._getScrollbarSize();
                g && (m.marginRight = g)
            }
            t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : m.overflow = "hidden");
            var C = t.st.mainClass;
            return t.isIE7 && (C += " mfp-ie7"), C && t._addClassToMFP(C), t.updateItemHTML(), T("BuildControls"), e("html").css(m), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || i), t._lastFocusedEl = document.activeElement, setTimeout(function() {
                t.content ? (t._addClassToMFP(v), t._setFocus()) : t.bgOverlay.addClass(v), o.on("focusin" + h, t._onFocusIn)
            }, 16), t.isOpen = !0, t.updateSize(u), T(f), n
        },
        close: function() {
            t.isOpen && (T(c), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(C), setTimeout(function() {
                t._close()
            }, t.st.removalDelay)) : t._close())
        },
        _close: function() {
            T(l);
            var n = C + " " + v + " ";
            if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (n += t.st.mainClass + " "), t._removeClassFromMFP(n), t.fixedContentPos) {
                var i = {
                    marginRight: ""
                };
                t.isIE7 ? e("body, html").css("overflow", "") : i.overflow = "", e("html").css(i)
            }
            o.off("keyup" + h + " focusin" + h), t.ev.off(h), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, T(d)
        },
        updateSize: function(e) {
            if (t.isIOS) {
                var n = document.documentElement.clientWidth / window.innerWidth,
                    i = window.innerHeight * n;
                t.wrap.css("height", i), t.wH = i
            } else t.wH = e || I.height();
            t.fixedContentPos || t.wrap.css("height", t.wH), T("Resize")
        },
        updateItemHTML: function() {
            var n = t.items[t.index];
            t.contentContainer.detach(), t.content && t.content.detach(), n.parsed || (n = t.parseEl(t.index));
            var i = n.type;
            if (T("BeforeChange", [t.currItem ? t.currItem.type : "", i]), t.currItem = n, !t.currTemplate[i]) {
                var o = t.st[i] ? t.st[i].markup : !1;
                T("FirstMarkupParse", o), t.currTemplate[i] = o ? e(o) : !0
            }
            r && r !== n.type && t.container.removeClass("mfp-" + r + "-holder");
            var a = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, t.currTemplate[i]);
            t.appendContent(a, i), n.preloaded = !0, T(m, n), r = n.type, t.container.prepend(t.contentContainer), T("AfterChange")
        },
        appendContent: function(e, n) {
            t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[n] === !0 ? t.content.find(".mfp-close").length || t.content.append(E()) : t.content = e : t.content = "", T(u), t.container.addClass("mfp-" + n + "-holder"), t.contentContainer.append(t.content)
        },
        parseEl: function(n) {
            var i, o = t.items[n];
            if (o.tagName ? o = {
                    el: e(o)
                } : (i = o.type, o = {
                    data: o,
                    src: o.src
                }), o.el) {
                for (var r = t.types, a = 0; r.length > a; a++)
                    if (o.el.hasClass("mfp-" + r[a])) {
                        i = r[a];
                        break
                    }
                o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"))
            }
            return o.type = i || t.st.type || "inline", o.index = n, o.parsed = !0, t.items[n] = o, T("ElementParse", o), t.items[n]
        },
        addGroup: function(e, n) {
            var i = function(i) {
                i.mfpEl = this, t._openClick(i, e, n)
            };
            n || (n = {});
            var o = "click.magnificPopup";
            n.mainEl = e, n.items ? (n.isObj = !0, e.off(o).on(o, i)) : (n.isObj = !1, n.delegate ? e.off(o).on(o, n.delegate, i) : (n.items = e, e.off(o).on(o, i)))
        },
        _openClick: function(n, i, o) {
            var r = void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick;
            if (r || 2 !== n.which && !n.ctrlKey && !n.metaKey) {
                var a = void 0 !== o.disableOn ? o.disableOn : e.magnificPopup.defaults.disableOn;
                if (a)
                    if (e.isFunction(a)) {
                        if (!a.call(t)) return !0
                    } else if (a > I.width()) return !0;
                n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()), o.el = e(n.mfpEl), o.delegate && (o.items = i.find(o.delegate)), t.open(o)
            }
        },
        updateStatus: function(e, i) {
            if (t.preloader) {
                n !== e && t.container.removeClass("mfp-s-" + n), i || "loading" !== e || (i = t.st.tLoading);
                var o = {
                    status: e,
                    text: i
                };
                T("UpdateStatus", o), e = o.status, i = o.text, t.preloader.html(i), t.preloader.find("a").on("click", function(e) {
                    e.stopImmediatePropagation()
                }), t.container.addClass("mfp-s-" + e), n = e
            }
        },
        _checkIfClose: function(n) {
            if (!e(n).hasClass(y)) {
                var i = t.st.closeOnContentClick,
                    o = t.st.closeOnBgClick;
                if (i && o) return !0;
                if (!t.content || e(n).hasClass("mfp-close") || t.preloader && n === t.preloader[0]) return !0;
                if (n === t.content[0] || e.contains(t.content[0], n)) {
                    if (i) return !0
                } else if (o && e.contains(document, n)) return !0;
                return !1
            }
        },
        _addClassToMFP: function(e) {
            t.bgOverlay.addClass(e), t.wrap.addClass(e)
        },
        _removeClassFromMFP: function(e) {
            this.bgOverlay.removeClass(e), t.wrap.removeClass(e)
        },
        _hasScrollBar: function(e) {
            return (t.isIE7 ? o.height() : document.body.scrollHeight) > (e || I.height())
        },
        _setFocus: function() {
            (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
        },
        _onFocusIn: function(n) {
            return n.target === t.wrap[0] || e.contains(t.wrap[0], n.target) ? void 0 : (t._setFocus(), !1)
        },
        _parseMarkup: function(t, n, i) {
            var o;
            i.data && (n = e.extend(i.data, n)), T(p, [t, n, i]), e.each(n, function(e, n) {
                if (void 0 === n || n === !1) return !0;
                if (o = e.split("_"), o.length > 1) {
                    var i = t.find(h + "-" + o[0]);
                    if (i.length > 0) {
                        var r = o[1];
                        "replaceWith" === r ? i[0] !== n[0] && i.replaceWith(n) : "img" === r ? i.is("img") ? i.attr("src", n) : i.replaceWith('<img src="' + n + '" class="' + i.attr("class") + '" />') : i.attr(o[1], n)
                    }
                } else t.find(h + "-" + e).html(n)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === t.scrollbarSize) {
                var e = document.createElement("div");
                e.id = "mfp-sbm", e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
            }
            return t.scrollbarSize
        }
    }, e.magnificPopup = {
        instance: null,
        proto: w.prototype,
        modules: [],
        open: function(t, n) {
            return _(), t = t ? e.extend(!0, {}, t) : {}, t.isObj = !0, t.index = n || 0, this.instance.open(t)
        },
        close: function() {
            return e.magnificPopup.instance && e.magnificPopup.instance.close()
        },
        registerModule: function(t, n) {
            n.options && (e.magnificPopup.defaults[t] = n.options), e.extend(this.proto, n.proto), this.modules.push(t)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading..."
        }
    }, e.fn.magnificPopup = function(n) {
        _();
        var i = e(this);
        if ("string" == typeof n)
            if ("open" === n) {
                var o, r = b ? i.data("magnificPopup") : i[0].magnificPopup,
                    a = parseInt(arguments[1], 10) || 0;
                r.items ? o = r.items[a] : (o = i, r.delegate && (o = o.find(r.delegate)), o = o.eq(a)), t._openClick({
                    mfpEl: o
                }, i, r)
            } else t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
        else n = e.extend(!0, {}, n), b ? i.data("magnificPopup", n) : i[0].magnificPopup = n, t.addGroup(i, n);
        return i
    };
    var P, O, z, M = "inline",
        B = function() {
            z && (O.after(z.addClass(P)).detach(), z = null)
        };
    e.magnificPopup.registerModule(M, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                t.types.push(M), x(l + "." + M, function() {
                    B()
                })
            },
            getInline: function(n, i) {
                if (B(), n.src) {
                    var o = t.st.inline,
                        r = e(n.src);
                    if (r.length) {
                        var a = r[0].parentNode;
                        a && a.tagName && (O || (P = o.hiddenClass, O = k(P), P = "mfp-" + P), z = r.after(O).detach().removeClass(P)), t.updateStatus("ready")
                    } else t.updateStatus("error", o.tNotFound), r = e("<div>");
                    return n.inlineElement = r, r
                }
                return t.updateStatus("ready"), t._parseMarkup(i, {}, n), i
            }
        }
    });
    var F, H = "ajax",
        L = function() {
            F && i.removeClass(F)
        },
        A = function() {
            L(), t.req && t.req.abort()
        };
    e.magnificPopup.registerModule(H, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                t.types.push(H), F = t.st.ajax.cursor, x(l + "." + H, A), x("BeforeChange." + H, A)
            },
            getAjax: function(n) {
                F && i.addClass(F), t.updateStatus("loading");
                var o = e.extend({
                    url: n.src,
                    success: function(i, o, r) {
                        var a = {
                            data: i,
                            xhr: r
                        };
                        T("ParseAjax", a), t.appendContent(e(a.data), H), n.finished = !0, L(), t._setFocus(), setTimeout(function() {
                            t.wrap.addClass(v)
                        }, 16), t.updateStatus("ready"), T("AjaxContentAdded")
                    },
                    error: function() {
                        L(), n.finished = n.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src))
                    }
                }, t.st.ajax.settings);
                return t.req = e.ajax(o), ""
            }
        }
    });
    var j, N = function(n) {
        if (n.data && void 0 !== n.data.title) return n.data.title;
        var i = t.st.image.titleSrc;
        if (i) {
            if (e.isFunction(i)) return i.call(t, n);
            if (n.el) return n.el.attr(i) || ""
        }
        return ""
    };
    e.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var e = t.st.image,
                    n = ".image";
                t.types.push("image"), x(f + n, function() {
                    "image" === t.currItem.type && e.cursor && i.addClass(e.cursor)
                }), x(l + n, function() {
                    e.cursor && i.removeClass(e.cursor), I.off("resize" + h)
                }), x("Resize" + n, t.resizeImage), t.isLowIE && x("AfterChange", t.resizeImage)
            },
            resizeImage: function() {
                var e = t.currItem;
                if (e && e.img && t.st.image.verticalFit) {
                    var n = 0;
                    t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - n)
                }
            },
            _onImageHasSize: function(e) {
                e.img && (e.hasSize = !0, j && clearInterval(j), e.isCheckingImgSize = !1, T("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1))
            },
            findImageSize: function(e) {
                var n = 0,
                    i = e.img[0],
                    o = function(r) {
                        j && clearInterval(j), j = setInterval(function() {
                            return i.naturalWidth > 0 ? (t._onImageHasSize(e), void 0) : (n > 200 && clearInterval(j), n++, 3 === n ? o(10) : 40 === n ? o(50) : 100 === n && o(500), void 0)
                        }, r)
                    };
                o(1)
            },
            getImage: function(n, i) {
                var o = 0,
                    r = function() {
                        n && (n.img[0].complete ? (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, T("ImageLoadComplete")) : (o++, 200 > o ? setTimeout(r, 100) : a()))
                    },
                    a = function() {
                        n && (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("error", s.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0)
                    },
                    s = t.st.image,
                    l = i.find(".mfp-img");
                if (l.length) {
                    var c = document.createElement("img");
                    c.className = "mfp-img", n.img = e(c).on("load.mfploader", r).on("error.mfploader", a), c.src = n.src, l.is("img") && (n.img = n.img.clone()), c = n.img[0], c.naturalWidth > 0 ? n.hasSize = !0 : c.width || (n.hasSize = !1)
                }
                return t._parseMarkup(i, {
                    title: N(n),
                    img_replaceWith: n.img
                }, n), t.resizeImage(), n.hasSize ? (j && clearInterval(j), n.loadError ? (i.addClass("mfp-loading"), t.updateStatus("error", s.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"), t.updateStatus("ready")), i) : (t.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, i.addClass("mfp-loading"), t.findImageSize(n)), i)
            }
        }
    });
    var W, R = function() {
        return void 0 === W && (W = void 0 !== document.createElement("p").style.MozTransform), W
    };
    e.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(e) {
                return e.is("img") ? e : e.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var e, n = t.st.zoom,
                    i = ".zoom";
                if (n.enabled && t.supportsTransition) {
                    var o, r, a = n.duration,
                        s = function(e) {
                            var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                i = "all " + n.duration / 1E3 + "s " + n.easing,
                                o = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                r = "transition";
                            return o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = i, t.css(o), t
                        },
                        d = function() {
                            t.content.css("visibility", "visible")
                        };
                    x("BuildControls" + i, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(o), t.content.css("visibility", "hidden"), e = t._getItemToZoom(), !e) return d(), void 0;
                            r = s(e), r.css(t._getOffset()), t.wrap.append(r), o = setTimeout(function() {
                                r.css(t._getOffset(!0)), o = setTimeout(function() {
                                    d(), setTimeout(function() {
                                        r.remove(), e = r = null, T("ZoomAnimationEnded")
                                    }, 16)
                                }, a)
                            }, 16)
                        }
                    }), x(c + i, function() {
                        if (t._allowZoom()) {
                            if (clearTimeout(o), t.st.removalDelay = a, !e) {
                                if (e = t._getItemToZoom(), !e) return;
                                r = s(e)
                            }
                            r.css(t._getOffset(!0)), t.wrap.append(r), t.content.css("visibility", "hidden"), setTimeout(function() {
                                r.css(t._getOffset())
                            }, 16)
                        }
                    }), x(l + i, function() {
                        t._allowZoom() && (d(), r && r.remove(), e = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === t.currItem.type
            },
            _getItemToZoom: function() {
                return t.currItem.hasSize ? t.currItem.img : !1
            },
            _getOffset: function(n) {
                var i;
                i = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
                var o = i.offset(),
                    r = parseInt(i.css("padding-top"), 10),
                    a = parseInt(i.css("padding-bottom"), 10);
                o.top -= e(window).scrollTop() - r;
                var s = {
                    width: i.width(),
                    height: (b ? i.innerHeight() : i[0].offsetHeight) - a - r
                };
                return R() ? s["-moz-transform"] = s.transform = "translate(" + o.left + "px," + o.top + "px)" : (s.left = o.left, s.top = o.top), s
            }
        }
    });
    var Z = "iframe",
        q = "//about:blank",
        D = function(e) {
            if (t.currTemplate[Z]) {
                var n = t.currTemplate[Z].find("iframe");
                n.length && (e || (n[0].src = q), t.isIE8 && n.css("display", e ? "block" : "none"))
            }
        };
    e.magnificPopup.registerModule(Z, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                t.types.push(Z), x("BeforeChange", function(e, t, n) {
                    t !== n && (t === Z ? D() : n === Z && D(!0))
                }), x(l + "." + Z, function() {
                    D()
                })
            },
            getIframe: function(n, i) {
                var o = n.src,
                    r = t.st.iframe;
                e.each(r.patterns, function() {
                    return o.indexOf(this.index) > -1 ? (this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1) : void 0
                });
                var a = {};
                return r.srcAction && (a[r.srcAction] = o), t._parseMarkup(i, a, n), t.updateStatus("ready"), i
            }
        }
    });
    var K = function(e) {
            var n = t.items.length;
            return e > n - 1 ? e - n : 0 > e ? n + e : e
        },
        Y = function(e, t, n) {
            return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n)
        };
    e.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var n = t.st.gallery,
                    i = ".mfp-gallery",
                    r = Boolean(e.fn.mfpFastClick);
                return t.direction = !0, n && n.enabled ? (a += " mfp-gallery", x(f + i, function() {
                    n.navigateByImgClick && t.wrap.on("click" + i, ".mfp-img", function() {
                        return t.items.length > 1 ? (t.next(), !1) : void 0
                    }), o.on("keydown" + i, function(e) {
                        37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
                    })
                }), x("UpdateStatus" + i, function(e, n) {
                    n.text && (n.text = Y(n.text, t.currItem.index, t.items.length))
                }), x(p + i, function(e, i, o, r) {
                    var a = t.items.length;
                    o.counter = a > 1 ? Y(n.tCounter, r.index, a) : ""
                }), x("BuildControls" + i, function() {
                    if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
                        var i = n.arrowMarkup,
                            o = t.arrowLeft = e(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(y),
                            a = t.arrowRight = e(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(y),
                            s = r ? "mfpFastClick" : "click";
                        o[s](function() {
                            t.prev()
                        }), a[s](function() {
                            t.next()
                        }), t.isIE7 && (k("b", o[0], !1, !0), k("a", o[0], !1, !0), k("b", a[0], !1, !0), k("a", a[0], !1, !0)), t.container.append(o.add(a))
                    }
                }), x(m + i, function() {
                    t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function() {
                        t.preloadNearbyImages(), t._preloadTimeout = null
                    }, 16)
                }), x(l + i, function() {
                    o.off(i), t.wrap.off("click" + i), t.arrowLeft && r && t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(), t.arrowRight = t.arrowLeft = null
                }), void 0) : !1
            },
            next: function() {
                t.direction = !0, t.index = K(t.index + 1), t.updateItemHTML()
            },
            prev: function() {
                t.direction = !1, t.index = K(t.index - 1), t.updateItemHTML()
            },
            goTo: function(e) {
                t.direction = e >= t.index, t.index = e, t.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var e, n = t.st.gallery.preload,
                    i = Math.min(n[0], t.items.length),
                    o = Math.min(n[1], t.items.length);
                for (e = 1;
                     (t.direction ? o : i) >= e; e++) t._preloadItem(t.index + e);
                for (e = 1;
                     (t.direction ? i : o) >= e; e++) t._preloadItem(t.index - e)
            },
            _preloadItem: function(n) {
                if (n = K(n), !t.items[n].preloaded) {
                    var i = t.items[n];
                    i.parsed || (i = t.parseEl(n)), T("LazyLoad", i), "image" === i.type && (i.img = e('<img class="mfp-img" />').on("load.mfploader", function() {
                        i.hasSize = !0
                    }).on("error.mfploader", function() {
                        i.hasSize = !0, i.loadError = !0, T("LazyLoadError", i)
                    }).attr("src", i.src)), i.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    e.magnificPopup.registerModule(U, {
        options: {
            replaceSrc: function(e) {
                return e.src.replace(/\.\w+$/, function(e) {
                    return "@2x" + e
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var e = t.st.retina,
                        n = e.ratio;
                    n = isNaN(n) ? n() : n, n > 1 && (x("ImageHasSize." + U, function(e, t) {
                        t.img.css({
                            "max-width": t.img[0].naturalWidth / n,
                            width: "100%"
                        })
                    }), x("ElementParse." + U, function(t, i) {
                        i.src = e.replaceSrc(i, n)
                    }))
                }
            }
        }
    }),
        function() {
            var t = 1E3,
                n = "ontouchstart" in window,
                i = function() {
                    I.off("touchmove" + r + " touchend" + r)
                },
                o = "mfpFastClick",
                r = "." + o;
            e.fn.mfpFastClick = function(o) {
                return e(this).each(function() {
                    var a, s = e(this);
                    if (n) {
                        var l, c, d, u, p, f;
                        s.on("touchstart" + r, function(e) {
                            u = !1, f = 1, p = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0], c = p.clientX, d = p.clientY, I.on("touchmove" + r, function(e) {
                                p = e.originalEvent ? e.originalEvent.touches : e.touches, f = p.length, p = p[0], (Math.abs(p.clientX - c) > 10 || Math.abs(p.clientY - d) > 10) && (u = !0, i())
                            }).on("touchend" + r, function(e) {
                                i(), u || f > 1 || (a = !0, e.preventDefault(), clearTimeout(l), l = setTimeout(function() {
                                    a = !1
                                }, t), o())
                            })
                        })
                    }
                    s.on("click" + r, function() {
                        a || o()
                    })
                })
            }, e.fn.destroyMfpFastClick = function() {
                e(this).off("touchstart" + r + " click" + r), n && I.off("touchmove" + r + " touchend" + r)
            }
        }(), _()
})(window.jQuery || window.Zepto);
(function($) {
    var cards = $(".card-drop"),
        toggler = cards.find(".toggle"),
        links = cards.find("ul>li>a"),
        li = links.parent("li"),
        count = links.length,
        width = links.outerWidth();
    links.parent("li").each(function(i) {
        $(this).css("z-index", count - i)
    });
    links.each(function() {
        $(this).css("box-shadow", "none")
    });

    function setClosed() {
        li.each(function(index) {
            $(this).css("top", index * 0).css("width", width - index * 0).css("margin-left", index * 2 / 2)
        });
        li.addClass("closed");
        toggler.removeClass("active")
    }
    setClosed();
    toggler.on("mousedown", function() {
        var $this = $(this);
        if ($this.is(".active")) {
            setClosed();
            links.each(function() {
                $(this).css("box-shadow", "none")
            })
        } else {
            $this.addClass("active");
            li.removeClass("closed");
            links.each(function() {
                $(this).css("box-shadow", "0px 1px 3px rgba(0, 0, 0, 0.1)")
            });
            li.each(function(index) {
                $(this).css("top", 40 * (index + 1)).css("width", "100%").css("margin-left", "0px")
            })
        }
    });
    links.on("click", function(e) {
        var $this = $(this),
            label = $this.data("label");
        li.removeClass("active");
        if ($this.parent("li").is("active")) $this.parent("li").removeClass("active");
        else $this.parent("li").addClass("active");
        toggler.children("span").text(label);
        links.each(function() {
            $(this).css("box-shadow", "none")
        });
        setClosed();
        e.preventDefault
    })
})(jQuery);
(function(window, document, $) {
    var isOperaMini = Object.prototype.toString.call(window.operamini) == "[object OperaMini]";
    var isInputSupported = "placeholder" in document.createElement("input") && !isOperaMini;
    var isTextareaSupported = "placeholder" in document.createElement("textarea") && !isOperaMini;
    var prototype = $.fn;
    var valHooks = $.valHooks;
    var propHooks = $.propHooks;
    var hooks;
    var placeholder;
    if (isInputSupported && isTextareaSupported) {
        placeholder = prototype.placeholder = function() {
            return this
        };
        placeholder.input = placeholder.textarea = !0
    } else {
        placeholder = prototype.placeholder = function() {
            var $this = this;
            $this.filter((isInputSupported ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
                "focus.placeholder": clearPlaceholder,
                "blur.placeholder": setPlaceholder
            }).data("placeholder-enabled", !0).trigger("blur.placeholder");
            return $this
        };
        placeholder.input = isInputSupported;
        placeholder.textarea = isTextareaSupported;
        hooks = {
            "get": function(element) {
                var $element = $(element);
                var $passwordInput = $element.data("placeholder-password");
                if ($passwordInput) return $passwordInput[0].value;
                return $element.data("placeholder-enabled") && $element.hasClass("placeholder") ? "" : element.value
            },
            "set": function(element, value) {
                var $element = $(element);
                var $passwordInput = $element.data("placeholder-password");
                if ($passwordInput) return $passwordInput[0].value = value;
                if (!$element.data("placeholder-enabled")) return element.value = value;
                if (value == "") {
                    element.value = value;
                    if (element != safeActiveElement()) setPlaceholder.call(element)
                } else if ($element.hasClass("placeholder")) clearPlaceholder.call(element, !0, value) || (element.value = value);
                else element.value = value;
                return $element
            }
        };
        if (!isInputSupported) {
            valHooks.input = hooks;
            propHooks.value = hooks
        }
        if (!isTextareaSupported) {
            valHooks.textarea = hooks;
            propHooks.value = hooks
        }
        $(function() {
            $(document).delegate("form", "submit.placeholder", function() {
                var $inputs = $(".placeholder", this).each(clearPlaceholder);
                setTimeout(function() {
                    $inputs.each(setPlaceholder)
                }, 10)
            })
        });
        $(window).bind("beforeunload.placeholder", function() {
            $(".placeholder").each(function() {
                this.value = ""
            })
        })
    }

    function args(elem) {
        var newAttrs = {};
        var rinlinejQuery = /^jQuery\d+$/;
        $.each(elem.attributes, function(i, attr) {
            if (attr.specified && !rinlinejQuery.test(attr.name)) newAttrs[attr.name] = attr.value
        });
        return newAttrs
    }

    function clearPlaceholder(event, value) {
        var input = this;
        var $input = $(input);
        if (input.value == $input.attr("placeholder") && $input.hasClass("placeholder"))
            if ($input.data("placeholder-password")) {
                $input = $input.hide().next().show().attr("id", $input.removeAttr("id").data("placeholder-id"));
                if (event === !0) return $input[0].value = value;
                $input.focus()
            } else {
                input.value = "";
                $input.removeClass("placeholder");
                input == safeActiveElement() && input.select()
            }
    }

    function setPlaceholder() {
        var $replacement;
        var input = this;
        var $input = $(input);
        var id = this.id;
        if (input.value == "") {
            if (input.type == "password") {
                if (!$input.data("placeholder-textinput")) {
                    try {
                        $replacement = $input.clone().attr({
                            "type": "text"
                        })
                    } catch (e) {
                        $replacement = $("<input>").attr($.extend(args(this), {
                            "type": "text"
                        }))
                    }
                    $replacement.removeAttr("name").data({
                        "placeholder-password": $input,
                        "placeholder-id": id
                    }).bind("focus.placeholder", clearPlaceholder);
                    $input.data({
                        "placeholder-textinput": $replacement,
                        "placeholder-id": id
                    }).before($replacement)
                }
                $input = $input.removeAttr("id").hide().prev().attr("id", id).show()
            }
            $input.addClass("placeholder");
            $input[0].value = $input.attr("placeholder")
        } else $input.removeClass("placeholder")
    }

    function safeActiveElement() {
        try {
            return document.activeElement
        } catch (exception) {}
    }
})(this, document, jQuery);
(function(e) {
    function r(e, r) {
        var i = e.outerWidth(!0),
            s = {},
            o = {};
        if (e.is(":visible") || n) return;
        n = !0;
        e.addClass("ps-active-panel").css({
            position: "fixed",
            top: 0,
            height: "100%",
            "z-index": 999999
        });
        e.data(r);
        switch (r.side) {
            case "left":
                e.css({
                    left: "-" + i + "px",
                    right: "auto"
                });
                s["margin-left"] = "+=" + i;
                o.left = "+=" + i;
                break;
            case "right":
                e.css({
                    left: "auto",
                    right: "-" + i + "px"
                });
                s["margin-left"] = "-=" + i;
                o.right = "+=" + i;
                break
        }
        t.animate(s, r.duration);
        e.show().animate(o, r.duration, function() {
            n = !1
        })
    }
    var t = e("body"),
        n = !1;
    e.panelslider = function(t, n) {
        var i = e(".ps-active-panel");
        var s = {
            side: "left",
            duration: 200,
            clickClose: !0
        };
        n = e.extend({}, s, n);
        if (i.is(":visible") && i[0] != t[0]) e.panelslider.close(function() {
            r(t, n)
        });
        else if (!i.length || i.is(":hidden")) r(t, n)
    };
    e.panelslider.close = function(r) {
        var i = e(".ps-active-panel"),
            s = i.data("duration"),
            o = i.outerWidth(!0),
            u = {},
            a = {};
        if (!i.length || i.is(":hidden") || n) return;
        n = !0;
        switch (i.data("side")) {
            case "left":
                u["margin-left"] = "-=" + o;
                a.left = "-=" + o;
                break;
            case "right":
                u["margin-left"] = "+=" + o;
                a.right = "-=" + o;
                break
        }
        i.animate(a, s);
        t.animate(u, s, function() {
            i.hide();
            i.removeClass("ps-active-panel");
            n = !1;
            if (r) r()
        })
    };
    e(document).bind("click keyup", function(t) {
        var n = e(".ps-active-panel");
        if (t.type == "keyup" && t.keyCode != 27) return;
        if (n.is(":visible") && n.data("clickClose")) e.panelslider.close()
    });
    e(document).on("click", ".ps-active-panel", function(e) {
        e.stopPropagation()
    });
    e.fn.panelslider = function(t) {
        this.click(function(n) {
            var r = e(".ps-active-panel"),
                i = e(this.getAttribute("href"));
            if (r.is(":visible") && i[0] == r[0]) e.panelslider.close();
            else e.panelslider(i, t);
            n.preventDefault();
            n.stopPropagation()
        });
        return this
    }
})(jQuery);
(function($, h, c) {
    var a = $([]),
        e = $.resize = $.extend($.resize, {}),
        i, k = "setTimeout",
        j = "resize",
        d = j + "-special-event",
        b = "delay",
        f = "throttleWindow";
    e[b] = 250;
    e[f] = !0;
    $.event.special[j] = {
        setup: function() {
            if (!e[f] && this[k]) return !1;
            var l = $(this);
            a = a.add(l);
            $.data(this, d, {
                w: l.width(),
                h: l.height()
            });
            if (a.length === 1) g()
        },
        teardown: function() {
            if (!e[f] && this[k]) return !1;
            var l = $(this);
            a = a.not(l);
            l.removeData(d);
            if (!a.length) clearTimeout(i)
        },
        add: function(l) {
            if (!e[f] && this[k]) return !1;
            var n;

            function m(s, o, p) {
                var q = $(this),
                    r = $.data(this, d);
                r.w = o !== c ? o : q.width();
                r.h = p !== c ? p : q.height();
                n.apply(this, arguments)
            }
            if ($.isFunction(l)) {
                n = l;
                return m
            } else {
                n = l.handler;
                l.handler = m
            }
        }
    };

    function g() {
        i = h[k](function() {
            a.each(function() {
                var n = $(this),
                    m = n.width(),
                    l = n.height(),
                    o = $.data(this, d);
                if (m !== o.w || l !== o.h) n.trigger(j, [o.w = m, o.h = l])
            });
            g()
        }, e[b])
    }
})(jQuery, this);
(function(A) {
    A.marquee = {
        version: "1.0.01"
    };
    A.fn.marquee = function(E) {
        var F = typeof arguments[0] == "string" && arguments[0];
        var D = F && Array.prototype.slice.call(arguments, 1) || arguments;
        var C = this.length == 0 ? null : A.data(this[0], "marquee");
        if (C && F && this.length)
            if (F.toLowerCase() == "object") return C;
            else if (C[F]) {
                var B;
                this.each(function(G) {
                    var H = A.data(this, "marquee")[F].apply(C, D);
                    if (G == 0 && H)
                        if (!!H.jquery) B = A([]).add(H);
                        else {
                            B = H;
                            return !1
                        } else if (!!H && !!H.jquery) B = B.add(H)
                });
                return B || this
            } else return this;
        else return this.each(function() {
            new A.Marquee(this, E)
        })
    };
    A.Marquee = function(E, Q) {
        Q = A.extend({}, A.Marquee.defaults, Q);
        var O = this,
            M = A(E),
            F = M.find("> li"),
            H = -1,
            G = !1,
            L = !1,
            N = 0;
        A.data(M[0], "marquee", O);
        this.pause = function() {
            G = !0;
            P()
        };
        this.resume = function() {
            G = !1;
            D()
        };
        this.update = function() {
            var R = F.length;
            F = M.find("> li");
            if (R <= 1) D()
        };

        function K(R) {
            if (F.filter("." + Q.cssShowing).length > 0) return !1;
            var T = F.eq(R);
            if (A.isFunction(Q.beforeshow)) Q.beforeshow.apply(O, [M, T]);
            var S = {
                top: (Q.yScroll == "top" ? "-" : "+") + T.outerHeight() + "px",
                left: 0
            };
            M.data("marquee.showing", !0);
            T.addClass(Q.cssShowing);
            T.css(S).animate({
                top: "0px"
            }, Q.showSpeed, Q.fxEasingShow, function() {
                if (A.isFunction(Q.show)) Q.show.apply(O, [M, T]);
                M.data("marquee.showing", !1);
                J(T)
            })
        }

        function J(S, R) {
            if (L == !0) return !1;
            R = R || Q.pauseSpeed;
            if (C(S)) setTimeout(function() {
                if (L == !0) return !1;
                var V = S.outerWidth(),
                    T = V * -1,
                    U = parseInt(S.css("left"), 10);
                S.animate({
                    left: T + "px"
                }, (V + U) * Q.scrollSpeed, Q.fxEasingScroll, function() {
                    I(S)
                })
            }, R);
            else if (F.length > 1) setTimeout(function() {
                if (L == !0) return !1;
                S.animate({
                    top: (Q.yScroll == "top" ? "+" : "-") + M.innerHeight() + "px"
                }, Q.showSpeed, Q.fxEasingScroll);
                I(S)
            }, R)
        }

        function I(R) {
            if (A.isFunction(Q.aftershow)) Q.aftershow.apply(O, [M, R]);
            R.removeClass(Q.cssShowing);
            B()
        }

        function P() {
            L = !0;
            if (M.data("marquee.showing") != !0) F.filter("." + Q.cssShowing).dequeue().stop()
        }

        function D() {
            L = !1;
            if (M.data("marquee.showing") != !0) J(F.filter("." + Q.cssShowing), 1)
        }
        if (Q.pauseOnHover) M.hover(function() {
            if (G) return !1;
            P()
        }, function() {
            if (G) return !1;
            D()
        });

        function C(R) {
            return R.outerWidth() > M.innerWidth()
        }

        function B() {
            H++;
            if (H >= F.length) {
                if (!isNaN(Q.loop) && Q.loop > 0 && ++N >= Q.loop) return !1;
                H = 0
            }
            K(H)
        }
        if (A.isFunction(Q.init)) Q.init.apply(O, [M, Q]);
        B()
    };
    A.Marquee.defaults = {
        yScroll: "top",
        showSpeed: 850,
        scrollSpeed: 12,
        pauseSpeed: 5E3,
        pauseOnHover: !0,
        loop: -1,
        fxEasingShow: "swing",
        fxEasingScroll: "linear",
        cssShowing: "marquee-showing",
        init: null,
        beforeshow: null,
        show: null,
        aftershow: null
    }
})(jQuery);
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
        var e, i, s, r = _gsScope.GreenSockGlobals || _gsScope,
            n = r.com.greensock,
            a = 2 * Math.PI,
            o = Math.PI / 2,
            h = n._class,
            l = function(e, i) {
                var s = h("easing." + e, function() {}, !0),
                    r = s.prototype = new t;
                return r.constructor = s, r.getRatio = i, s
            },
            _ = t.register || function() {},
            u = function(t, e, i, s) {
                var r = h("easing." + t, {
                    easeOut: new e,
                    easeIn: new i,
                    easeInOut: new s
                }, !0);
                return _(r, t), r
            },
            c = function(t, e, i) {
                this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
            },
            p = function(e, i) {
                var s = h("easing." + e, function(t) {
                        this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                    }, !0),
                    r = s.prototype = new t;
                return r.constructor = s, r.getRatio = i, r.config = function(t) {
                    return new s(t)
                }, s
            },
            f = u("Back", p("BackOut", function(t) {
                return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
            }), p("BackIn", function(t) {
                return t * t * ((this._p1 + 1) * t - this._p1)
            }), p("BackInOut", function(t) {
                return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
            })),
            m = h("easing.SlowMo", function(t, e, i) {
                e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
            }, !0),
            d = m.prototype = new t;
        return d.constructor = m, d.getRatio = function(t) {
            var e = t + (.5 - t) * this._p;
            return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
        }, m.ease = new m(.7, .7), d.config = m.config = function(t, e, i) {
            return new m(t, e, i)
        }, e = h("easing.SteppedEase", function(t) {
            t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
        }, !0), d = e.prototype = new t, d.constructor = e, d.getRatio = function(t) {
            return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
        }, d.config = e.config = function(t) {
            return new e(t)
        }, i = h("easing.RoughEase", function(e) {
            e = e || {};
            for (var i, s, r, n, a, o, h = e.taper || "none", l = [], _ = 0, u = 0 | (e.points || 20), p = u, f = e.randomize !== !1, m = e.clamp === !0, d = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --p > -1;) i = f ? Math.random() : 1 / u * p, s = d ? d.getRatio(i) : i, "none" === h ? r = g : "out" === h ? (n = 1 - i, r = n * n * g) : "in" === h ? r = i * i * g : .5 > i ? (n = 2 * i, r = .5 * n * n * g) : (n = 2 * (1 - i), r = .5 * n * n * g), f ? s += Math.random() * r - .5 * r : p % 2 ? s += .5 * r : s -= .5 * r, m && (s > 1 ? s = 1 : 0 > s && (s = 0)), l[_++] = {
                x: i,
                y: s
            };
            for (l.sort(function(t, e) {
                return t.x - e.x
            }), o = new c(1, 1, null), p = u; --p > -1;) a = l[p], o = new c(a.x, a.y, o);
            this._prev = new c(0, 0, 0 !== o.t ? o : o.next)
        }, !0), d = i.prototype = new t, d.constructor = i, d.getRatio = function(t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t;) e = e.next;
                e = e.prev
            } else
                for (; e.prev && e.t >= t;) e = e.prev;
            return this._prev = e, e.v + (t - e.t) / e.gap * e.c
        }, d.config = function(t) {
            return new i(t)
        }, i.ease = new i, u("Bounce", l("BounceOut", function(t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }), l("BounceIn", function(t) {
            return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }), l("BounceInOut", function(t) {
            var e = .5 > t;
            return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
        })), u("Circ", l("CircOut", function(t) {
            return Math.sqrt(1 - (t -= 1) * t)
        }), l("CircIn", function(t) {
            return -(Math.sqrt(1 - t * t) - 1)
        }), l("CircInOut", function(t) {
            return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        })), s = function(e, i, s) {
            var r = h("easing." + e, function(t, e) {
                    this._p1 = t || 1, this._p2 = e || s, this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0)
                }, !0),
                n = r.prototype = new t;
            return n.constructor = r, n.getRatio = i, n.config = function(t, e) {
                return new r(t, e)
            }, r
        }, u("Elastic", s("ElasticOut", function(t) {
            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * a / this._p2) + 1
        }, .3), s("ElasticIn", function(t) {
            return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2))
        }, .3), s("ElasticInOut", function(t) {
            return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) + 1
        }, .45)), u("Expo", l("ExpoOut", function(t) {
            return 1 - Math.pow(2, -10 * t)
        }), l("ExpoIn", function(t) {
            return Math.pow(2, 10 * (t - 1)) - .001
        }), l("ExpoInOut", function(t) {
            return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        })), u("Sine", l("SineOut", function(t) {
            return Math.sin(t * o)
        }), l("SineIn", function(t) {
            return -Math.cos(t * o) + 1
        }), l("SineInOut", function(t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
        })), h("easing.EaseLookup", {
            find: function(e) {
                return t.map[e]
            }
        }, !0), _(r.SlowMo, "SlowMo", "ease,"), _(i, "RoughEase", "ease,"), _(e, "SteppedEase", "ease,"), f
    }, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()();
(function(t, e) {
    var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
    if (!i.TweenLite) {
        var s, n, r, a, o, l = function(t) {
                var e, s = t.split("."),
                    n = i;
                for (e = 0; s.length > e; e++) n[s[e]] = n = n[s[e]] || {};
                return n
            },
            h = l("com.greensock"),
            _ = 1E-10,
            u = function(t) {
                var e, i = [],
                    s = t.length;
                for (e = 0; e !== s; i.push(t[e++]));
                return i
            },
            f = function() {},
            m = function() {
                var t = Object.prototype.toString,
                    e = t.call([]);
                return function(i) {
                    return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                }
            }(),
            p = {},
            c = function(s, n, r, a) {
                this.sc = p[s] ? p[s].sc : [], p[s] = this, this.gsClass = null, this.func = r;
                var o = [];
                this.check = function(h) {
                    for (var _, u, f, m, d = n.length, v = d; --d > -1;)(_ = p[n[d]] || new c(n[d], [])).gsClass ? (o[d] = _.gsClass, v--) : h && _.sc.push(this);
                    if (0 === v && r)
                        for (u = ("com.greensock." + s).split("."), f = u.pop(), m = l(u.join("."))[f] = this.gsClass = r.apply(r, o), a && (i[f] = m, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + s.split(".").pop(), [], function() {
                            return m
                        }) : s === e && "undefined" != typeof module && module.exports && (module.exports = m)), d = 0; this.sc.length > d; d++) this.sc[d].check()
                }, this.check(!0)
            },
            d = t._gsDefine = function(t, e, i, s) {
                return new c(t, e, i, s)
            },
            v = h._class = function(t, e, i) {
                return e = e || function() {}, d(t, [], function() {
                    return e
                }, i), e
            };
        d.globals = i;
        var g = [0, 0, 1, 1],
            T = [],
            y = v("easing.Ease", function(t, e, i, s) {
                this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? g.concat(e) : g
            }, !0),
            w = y.map = {},
            P = y.register = function(t, e, i, s) {
                for (var n, r, a, o, l = e.split(","), _ = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --_ > -1;)
                    for (r = l[_], n = s ? v("easing." + r, null, !0) : h.easing[r] || {}, a = u.length; --a > -1;) o = u[a], w[r + "." + o] = w[o + r] = n[o] = t.getRatio ? t : t[o] || new t
            };
        for (r = y.prototype, r._calcEnd = !1, r.getRatio = function(t) {
            if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
            var e = this._type,
                i = this._power,
                s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
            return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2
        }, s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], n = s.length; --n > -1;) r = s[n] + ",Power" + n, P(new y(null, null, 1, n), r, "easeOut", !0), P(new y(null, null, 2, n), r, "easeIn" + (0 === n ? ",easeNone" : "")), P(new y(null, null, 3, n), r, "easeInOut");
        w.linear = h.easing.Linear.easeIn, w.swing = h.easing.Quad.easeInOut;
        var b = v("events.EventDispatcher", function(t) {
            this._listeners = {}, this._eventTarget = t || this
        });
        r = b.prototype, r.addEventListener = function(t, e, i, s, n) {
            n = n || 0;
            var r, l, h = this._listeners[t],
                _ = 0;
            for (null == h && (this._listeners[t] = h = []), l = h.length; --l > -1;) r = h[l], r.c === e && r.s === i ? h.splice(l, 1) : 0 === _ && n > r.pr && (_ = l + 1);
            h.splice(_, 0, {
                c: e,
                s: i,
                up: s,
                pr: n
            }), this !== a || o || a.wake()
        }, r.removeEventListener = function(t, e) {
            var i, s = this._listeners[t];
            if (s)
                for (i = s.length; --i > -1;)
                    if (s[i].c === e) return s.splice(i, 1), void 0
        }, r.dispatchEvent = function(t) {
            var e, i, s, n = this._listeners[t];
            if (n)
                for (e = n.length, i = this._eventTarget; --e > -1;) s = n[e], s.up ? s.c.call(s.s || i, {
                    type: t,
                    target: i
                }) : s.c.call(s.s || i)
        };
        var k = t.requestAnimationFrame,
            A = t.cancelAnimationFrame,
            S = Date.now || function() {
                return (new Date).getTime()
            },
            x = S();
        for (s = ["ms", "moz", "webkit", "o"], n = s.length; --n > -1 && !k;) k = t[s[n] + "RequestAnimationFrame"], A = t[s[n] + "CancelAnimationFrame"] || t[s[n] + "CancelRequestAnimationFrame"];
        v("Ticker", function(t, e) {
            var i, s, n, r, l, h = this,
                u = S(),
                m = e !== !1 && k,
                p = 500,
                c = 33,
                d = function(t) {
                    var e, a, o = S() - x;
                    o > p && (u += o - c), x += o, h.time = (x - u) / 1E3, e = h.time - l, (!i || e > 0 || t === !0) && (h.frame++, l += e + (e >= r ? .004 : r - e), a = !0), t !== !0 && (n = s(d)), a && h.dispatchEvent("tick")
                };
            b.call(h), h.time = h.frame = 0, h.tick = function() {
                d(!0)
            }, h.lagSmoothing = function(t, e) {
                p = t || 1 / _, c = Math.min(e, p, 0)
            }, h.sleep = function() {
                null != n && (m && A ? A(n) : clearTimeout(n), s = f, n = null, h === a && (o = !1))
            }, h.wake = function() {
                null !== n ? h.sleep() : h.frame > 10 && (x = S() - p + 5), s = 0 === i ? f : m && k ? k : function(t) {
                    return setTimeout(t, 0 | 1E3 * (l - h.time) + 1)
                }, h === a && (o = !0), d(2)
            }, h.fps = function(t) {
                return arguments.length ? (i = t, r = 1 / (i || 60), l = this.time + r, h.wake(), void 0) : i
            }, h.useRAF = function(t) {
                return arguments.length ? (h.sleep(), m = t, h.fps(i), void 0) : m
            }, h.fps(t), setTimeout(function() {
                m && (!n || 5 > h.frame) && h.useRAF(!1)
            }, 1500)
        }), r = h.Ticker.prototype = new h.events.EventDispatcher, r.constructor = h.Ticker;
        var C = v("core.Animation", function(t, e) {
            if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, B) {
                o || a.wake();
                var i = this.vars.useFrames ? q : B;
                i.add(this, i._time), this.vars.paused && this.paused(!0)
            }
        });
        a = C.ticker = new h.Ticker, r = C.prototype, r._dirty = r._gc = r._initted = r._paused = !1, r._totalTime = r._time = 0, r._rawPrevTime = -1, r._next = r._last = r._onUpdate = r._timeline = r.timeline = null, r._paused = !1;
        var R = function() {
            o && S() - x > 2E3 && a.wake(), setTimeout(R, 2E3)
        };
        R(), r.play = function(t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, r.pause = function(t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, r.resume = function(t, e) {
            return null != t && this.seek(t, e), this.paused(!1)
        }, r.seek = function(t, e) {
            return this.totalTime(Number(t), e !== !1)
        }, r.restart = function(t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
        }, r.reverse = function(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, r.render = function() {}, r.invalidate = function() {
            return this
        }, r.isActive = function() {
            var t, e = this._timeline,
                i = this._startTime;
            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
        }, r._enabled = function(t, e) {
            return o || a.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
        }, r._kill = function() {
            return this._enabled(!1, !1)
        }, r.kill = function(t, e) {
            return this._kill(t, e), this
        }, r._uncache = function(t) {
            for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
            return this
        }, r._swapSelfInParams = function(t) {
            for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
            return i
        }, r.eventCallback = function(t, e, i, s) {
            if ("on" === (t || "").substr(0, 2)) {
                var n = this.vars;
                if (1 === arguments.length) return n[t];
                null == e ? delete n[t] : (n[t] = e, n[t + "Params"] = m(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, n[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        }, r.delay = function(t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
        }, r.duration = function(t) {
            return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, r.totalDuration = function(t) {
            return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
        }, r.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
        }, r.totalTime = function(t, e, i) {
            if (o || a.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var s = this._totalDuration,
                        n = this._timeline;
                    if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : n._time) - (this._reversed ? s - t : t) / this._timeScale, n._dirty || this._uncache(!1), n._timeline)
                        for (; n._timeline;) n._timeline._time !== (n._startTime + n._totalTime) / n._timeScale && n.totalTime(n._totalTime, !0), n = n._timeline
                }
                this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), O.length && M())
            }
            return this
        }, r.progress = r.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
        }, r.startTime = function(t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
        }, r.timeScale = function(t) {
            if (!arguments.length) return this._timeScale;
            if (t = t || _, this._timeline && this._timeline.smoothChildTiming) {
                var e = this._pauseTime,
                    i = e || 0 === e ? e : this._timeline.totalTime();
                this._startTime = i - (i - this._startTime) * this._timeScale / t
            }
            return this._timeScale = t, this._uncache(!1)
        }, r.reversed = function(t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        }, r.paused = function(t) {
            if (!arguments.length) return this._paused;
            if (t != this._paused && this._timeline) {
                o || t || a.wake();
                var e = this._timeline,
                    i = e.rawTime(),
                    s = i - this._pauseTime;
                !t && e.smoothChildTiming && (this._startTime += s, this._uncache(!1)), this._pauseTime = t ? i : null, this._paused = t, this._active = this.isActive(), !t && 0 !== s && this._initted && this.duration() && this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)
            }
            return this._gc && !t && this._enabled(!0, !1), this
        };
        var D = v("core.SimpleTimeline", function(t) {
            C.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        r = D.prototype = new C, r.constructor = D, r.kill()._gc = !1, r._first = r._last = null, r._sortChildren = !1, r.add = r.insert = function(t, e) {
            var i, s;
            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                for (s = t._startTime; i && i._startTime > s;) i = i._prev;
            return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._timeline && this._uncache(!0), this
        }, r._remove = function(t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, this._timeline && this._uncache(!0)), this
        }, r.render = function(t, e, i) {
            var s, n = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; n;) s = n._next, (n._active || t >= n._startTime && !n._paused) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = s
        }, r.rawTime = function() {
            return o || a.wake(), this._totalTime
        };
        var I = v("TweenLite", function(e, i, s) {
                if (C.call(this, i, s), this.render = I.prototype.render, null == e) throw "Cannot tween a null target.";
                this.target = e = "string" != typeof e ? e : I.selector(e) || e;
                var n, r, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                    l = this.vars.overwrite;
                if (this._overwrite = l = null == l ? Q[I.defaultOverwrite] : "number" == typeof l ? l >> 0 : Q[l], (o || e instanceof Array || e.push && m(e)) && "number" != typeof e[0])
                    for (this._targets = a = u(e), this._propLookup = [], this._siblings = [], n = 0; a.length > n; n++) r = a[n], r ? "string" != typeof r ? r.length && r !== t && r[0] && (r[0] === t || r[0].nodeType && r[0].style && !r.nodeType) ? (a.splice(n--, 1), this._targets = a = a.concat(u(r))) : (this._siblings[n] = $(r, this, !1), 1 === l && this._siblings[n].length > 1 && K(r, this, null, 1, this._siblings[n])) : (r = a[n--] = I.selector(r), "string" == typeof r && a.splice(n + 1, 1)) : a.splice(n--, 1);
                else this._propLookup = {}, this._siblings = $(e, this, !1), 1 === l && this._siblings.length > 1 && K(e, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -_, this.render(-this._delay))
            }, !0),
            E = function(e) {
                return e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
            },
            z = function(t, e) {
                var i, s = {};
                for (i in t) G[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!U[i] || U[i] && U[i]._autoCSS) || (s[i] = t[i], delete t[i]);
                t.css = s
            };
        r = I.prototype = new C, r.constructor = I, r.kill()._gc = !1, r.ratio = 0, r._firstPT = r._targets = r._overwrittenProps = r._startAt = null, r._notifyPluginsOfEnabled = r._lazy = !1, I.version = "1.13.1", I.defaultEase = r._ease = new y(null, null, 1, 1), I.defaultOverwrite = "auto", I.ticker = a, I.autoSleep = !0, I.lagSmoothing = function(t, e) {
            a.lagSmoothing(t, e)
        }, I.selector = t.$ || t.jQuery || function(e) {
            var i = t.$ || t.jQuery;
            return i ? (I.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
        };
        var O = [],
            L = {},
            N = I._internals = {
                isArray: m,
                isSelector: E,
                lazyTweens: O
            },
            U = I._plugins = {},
            F = N.tweenLookup = {},
            j = 0,
            G = N.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1,
                lazy: 1
            },
            Q = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                "true": 1,
                "false": 0
            },
            q = C._rootFramesTimeline = new D,
            B = C._rootTimeline = new D,
            M = N.lazyRender = function() {
                var t = O.length;
                for (L = {}; --t > -1;) s = O[t], s && s._lazy !== !1 && (s.render(s._lazy, !1, !0), s._lazy = !1);
                O.length = 0
            };
        B._startTime = a.time, q._startTime = a.frame, B._active = q._active = !0, setTimeout(M, 1), C._updateRoot = I.render = function() {
            var t, e, i;
            if (O.length && M(), B.render((a.time - B._startTime) * B._timeScale, !1, !1), q.render((a.frame - q._startTime) * q._timeScale, !1, !1), O.length && M(), !(a.frame % 120)) {
                for (i in F) {
                    for (e = F[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete F[i]
                }
                if (i = B._first, (!i || i._paused) && I.autoSleep && !q._first && 1 === a._listeners.tick.length) {
                    for (; i && i._paused;) i = i._next;
                    i || a.sleep()
                }
            }
        }, a.addEventListener("tick", C._updateRoot);
        var $ = function(t, e, i) {
                var s, n, r = t._gsTweenID;
                if (F[r || (t._gsTweenID = r = "t" + j++)] || (F[r] = {
                        target: t,
                        tweens: []
                    }), e && (s = F[r].tweens, s[n = s.length] = e, i))
                    for (; --n > -1;) s[n] === e && s.splice(n, 1);
                return F[r].tweens
            },
            K = function(t, e, i, s, n) {
                var r, a, o, l;
                if (1 === s || s >= 4) {
                    for (l = n.length, r = 0; l > r; r++)
                        if ((o = n[r]) !== e) o._gc || o._enabled(!1, !1) && (a = !0);
                        else if (5 === s) break;
                    return a
                }
                var h, u = e._startTime + _,
                    f = [],
                    m = 0,
                    p = 0 === e._duration;
                for (r = n.length; --r > -1;)(o = n[r]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (h = h || H(e, 0, p), 0 === H(o, h, p) && (f[m++] = o)) : u >= o._startTime && o._startTime + o.totalDuration() / o._timeScale > u && ((p || !o._initted) && 2E-10 >= u - o._startTime || (f[m++] = o)));
                for (r = m; --r > -1;) o = f[r], 2 === s && o._kill(i, t) && (a = !0), (2 !== s || !o._firstPT && o._initted) && o._enabled(!1, !1) && (a = !0);
                return a
            },
            H = function(t, e, i) {
                for (var s = t._timeline, n = s._timeScale, r = t._startTime; s._timeline;) {
                    if (r += s._startTime, n *= s._timeScale, s._paused) return -100;
                    s = s._timeline
                }
                return r /= n, r > e ? r - e : i && r === e || !t._initted && 2 * _ > r - e ? _ : (r += t.totalDuration() / t._timeScale / n) > e + _ ? 0 : r - e - _
            };
        r._init = function() {
            var t, e, i, s, n, r = this.vars,
                a = this._overwrittenProps,
                o = this._duration,
                l = !!r.immediateRender,
                h = r.ease;
            if (r.startAt) {
                this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), n = {};
                for (s in r.startAt) n[s] = r.startAt[s];
                if (n.overwrite = !1, n.immediateRender = !0, n.lazy = l && r.lazy !== !1, n.startAt = n.delay = null, this._startAt = I.to(this.target, 0, n), l)
                    if (this._time > 0) this._startAt = null;
                    else if (0 !== o) return
            } else if (r.runBackwards && 0 !== o)
                if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                else {
                    i = {};
                    for (s in r) G[s] && "autoCSS" !== s || (i[s] = r[s]);
                    if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && r.lazy !== !1, i.immediateRender = l, this._startAt = I.to(this.target, 0, i), l) {
                        if (0 === this._time) return
                    } else this._startAt._init(), this._startAt._enabled(!1)
                }
            if (this._ease = h = h ? h instanceof y ? h : "function" == typeof h ? new y(h, r.easeParams) : w[h] || I.defaultEase : I.defaultEase, r.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, r.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null) && (e = !0);
            else e = this._initProps(this.target, this._propLookup, this._siblings, a);
            if (e && I._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), r.runBackwards)
                for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
            this._onUpdate = r.onUpdate, this._initted = !0
        }, r._initProps = function(e, i, s, n) {
            var r, a, o, l, h, _;
            if (null == e) return !1;
            L[e._gsTweenID] && M(), this.vars.css || e.style && e !== t && e.nodeType && U.css && this.vars.autoCSS !== !1 && z(this.vars, e);
            for (r in this.vars) {
                if (_ = this.vars[r], G[r]) _ && (_ instanceof Array || _.push && m(_)) && -1 !== _.join("").indexOf("{self}") && (this.vars[r] = _ = this._swapSelfInParams(_, this));
                else if (U[r] && (l = new U[r])._onInitTween(e, this.vars[r], this)) {
                    for (this._firstPT = h = {
                        _next: this._firstPT,
                        t: l,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: !0,
                        n: r,
                        pg: !0,
                        pr: l._priority
                    }, a = l._overwriteProps.length; --a > -1;) i[l._overwriteProps[a]] = this._firstPT;
                    (l._priority || l._onInitAllProps) && (o = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
                } else this._firstPT = i[r] = h = {
                    _next: this._firstPT,
                    t: e,
                    p: r,
                    f: "function" == typeof e[r],
                    n: r,
                    pg: !1,
                    pr: 0
                }, h.s = h.f ? e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : parseFloat(e[r]), h.c = "string" == typeof _ && "=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * Number(_.substr(2)) : Number(_) - h.s || 0;
                h && h._next && (h._next._prev = h)
            }
            return n && this._kill(n, e) ? this._initProps(e, i, s, n) : this._overwrite > 1 && this._firstPT && s.length > 1 && K(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, n)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (L[e._gsTweenID] = !0), o)
        }, r.render = function(t, e, i) {
            var s, n, r, a, o = this._time,
                l = this._duration,
                h = this._rawPrevTime;
            if (t >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, n = "onComplete"), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > h || h === _) && h !== t && (i = !0, h > _ && (n = "onReverseComplete")), this._rawPrevTime = a = !e || t || h === t ? t : _);
            else if (1E-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && h > 0 && h !== _) && (n = "onReverseComplete", s = this._reversed), 0 > t ? (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (i = !0), this._rawPrevTime = a = !e || t || h === t ? t : _)) : this._initted || (i = !0);
            else if (this._totalTime = this._time = t, this._easeType) {
                var u = t / l,
                    f = this._easeType,
                    m = this._easePower;
                (1 === f || 3 === f && u >= .5) && (u = 1 - u), 3 === f && (u *= 2), 1 === m ? u *= u : 2 === m ? u *= u * u : 3 === m ? u *= u * u * u : 4 === m && (u *= u * u * u * u), this.ratio = 1 === f ? 1 - u : 2 === f ? u : .5 > t / l ? u / 2 : 1 - u / 2
            } else this.ratio = this._ease.getRatio(t / l);
            if (this._time !== o || i) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = h, O.push(this), this._lazy = t, void 0;
                    this._time && !s ? this.ratio = this._ease.getRatio(this._time / l) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : n || (n = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || T))), r = this._firstPT; r;) r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s, r = r._next;
                this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._time !== o || s) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || T)), n && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[n] && this.vars[n].apply(this.vars[n + "Scope"] || this, this.vars[n + "Params"] || T), 0 === l && this._rawPrevTime === _ && a !== _ && (this._rawPrevTime = 0))
            }
        }, r._kill = function(t, e) {
            if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : I.selector(e) || e;
            var i, s, n, r, a, o, l, h;
            if ((m(e) || E(e)) && "number" != typeof e[0])
                for (i = e.length; --i > -1;) this._kill(t, e[i]) && (o = !0);
            else {
                if (this._targets)
                    for (i = this._targets.length; --i > -1;) {
                        if (e === this._targets[i]) {
                            a = this._propLookup[i] || {}, this._overwrittenProps = this._overwrittenProps || [], s = this._overwrittenProps[i] = t ? this._overwrittenProps[i] || {} : "all";
                            break
                        }
                    } else {
                    if (e !== this.target) return !1;
                    a = this._propLookup, s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (a) {
                    l = t || a, h = t !== s && "all" !== s && t !== a && ("object" != typeof t || !t._tempKill);
                    for (n in l)(r = a[n]) && (r.pg && r.t._kill(l) && (o = !0), r.pg && 0 !== r.t._overwriteProps.length || (r._prev ? r._prev._next = r._next : r === this._firstPT && (this._firstPT = r._next), r._next && (r._next._prev = r._prev), r._next = r._prev = null), delete a[n]), h && (s[n] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return o
        }, r.invalidate = function() {
            return this._notifyPluginsOfEnabled && I._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate = null, this._startAt = null, this._initted = this._active = this._notifyPluginsOfEnabled = this._lazy = !1, this._propLookup = this._targets ? {} : [], this
        }, r._enabled = function(t, e) {
            if (o || a.wake(), t && this._gc) {
                var i, s = this._targets;
                if (s)
                    for (i = s.length; --i > -1;) this._siblings[i] = $(s[i], this, !0);
                else this._siblings = $(this.target, this, !0)
            }
            return C.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? I._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
        }, I.to = function(t, e, i) {
            return new I(t, e, i)
        }, I.from = function(t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new I(t, e, i)
        }, I.fromTo = function(t, e, i, s) {
            return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new I(t, e, s)
        }, I.delayedCall = function(t, e, i, s, n) {
            return new I(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                onCompleteScope: s,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                onReverseCompleteScope: s,
                immediateRender: !1,
                useFrames: n,
                overwrite: 0
            })
        }, I.set = function(t, e) {
            return new I(t, 0, e)
        }, I.getTweensOf = function(t, e) {
            if (null == t) return [];
            t = "string" != typeof t ? t : I.selector(t) || t;
            var i, s, n, r;
            if ((m(t) || E(t)) && "number" != typeof t[0]) {
                for (i = t.length, s = []; --i > -1;) s = s.concat(I.getTweensOf(t[i], e));
                for (i = s.length; --i > -1;)
                    for (r = s[i], n = i; --n > -1;) r === s[n] && s.splice(i, 1)
            } else
                for (s = $(t).concat(), i = s.length; --i > -1;)(s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
            return s
        }, I.killTweensOf = I.killDelayedCallsTo = function(t, e, i) {
            "object" == typeof e && (i = e, e = !1);
            for (var s = I.getTweensOf(t, e), n = s.length; --n > -1;) s[n]._kill(i, t)
        };
        var J = v("plugins.TweenPlugin", function(t, e) {
            this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = J.prototype
        }, !0);
        if (r = J.prototype, J.version = "1.10.1", J.API = 2, r._firstPT = null, r._addTween = function(t, e, i, s, n, r) {
                var a, o;
                return null != s && (a = "number" == typeof s || "=" !== s.charAt(1) ? Number(s) - i : parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2))) ? (this._firstPT = o = {
                    _next: this._firstPT,
                    t: t,
                    p: e,
                    s: i,
                    c: a,
                    f: "function" == typeof t[e],
                    n: n || e,
                    r: r
                }, o._next && (o._next._prev = o), o) : void 0
            }, r.setRatio = function(t) {
                for (var e, i = this._firstPT, s = 1E-6; i;) e = i.c * t + i.s, i.r ? e = Math.round(e) : s > e && e > -s && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
            }, r._kill = function(t) {
                var e, i = this._overwriteProps,
                    s = this._firstPT;
                if (null != t[this._propName]) this._overwriteProps = [];
                else
                    for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                for (; s;) null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
                return !1
            }, r._roundProps = function(t, e) {
                for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
            }, I._onPluginEvent = function(t, e) {
                var i, s, n, r, a, o = e._firstPT;
                if ("_onInitAllProps" === t) {
                    for (; o;) {
                        for (a = o._next, s = n; s && s.pr > o.pr;) s = s._next;
                        (o._prev = s ? s._prev : r) ? o._prev._next = o: n = o, (o._next = s) ? s._prev = o : r = o, o = a
                    }
                    o = e._firstPT = n
                }
                for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
                return i
            }, J.activate = function(t) {
                for (var e = t.length; --e > -1;) t[e].API === J.API && (U[(new t[e])._propName] = t[e]);
                return !0
            }, d.plugin = function(t) {
                if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                var e, i = t.propName,
                    s = t.priority || 0,
                    n = t.overwriteProps,
                    r = {
                        init: "_onInitTween",
                        set: "setRatio",
                        kill: "_kill",
                        round: "_roundProps",
                        initAll: "_onInitAllProps"
                    },
                    a = v("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                        J.call(this, i, s), this._overwriteProps = n || []
                    }, t.global === !0),
                    o = a.prototype = new J(i);
                o.constructor = a, a.API = t.API;
                for (e in r) "function" == typeof t[e] && (o[r[e]] = t[e]);
                return a.version = t.version, J.activate([a]), a
            }, s = t._gsQueue) {
            for (n = 0; s.length > n; n++) s[n]();
            for (r in p) p[r].func || t.console.log("GSAP encountered missing dependency: com.greensock." + r)
        }
        o = !1
    }
})("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite");
(function() {
    var width, height, largeHeader, canvas, ctx, points, target, animateHeader = !0;
    (function() {
        var lastTime = 0;
        var vendors = ["ms", "moz", "webkit", "o"];
        for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
            window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"];
            window.cancelAnimationFrame = window[vendors[x] + "CancelAnimationFrame"] || window[vendors[x] + "CancelRequestAnimationFrame"]
        }
        if (!window.requestAnimationFrame) window.requestAnimationFrame = function(callback, element) {
            var currTime = (new Date).getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() {
                callback(currTime + timeToCall)
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id
        };
        if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function(id) {
            clearTimeout(id)
        }
    })();
    initHeader();
    initAnimation();
    addListeners();

    function initHeader() {
        width = window.innerWidth;
        height = window.innerHeight;
        target = {
            x: width / 2,
            y: height / 2
        };
        largeHeader = document.getElementById("page-loader");
        largeHeader.style.height = height + "px";
        canvas = document.getElementById("demo-canvas");
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext("2d");
        points = [];
        for (var x = 0; x < width; x = x + width / 20)
            for (var y = 0; y < height; y = y + height / 20) {
                var px = x + Math.random() * width / 20;
                var py = y + Math.random() * height / 20;
                var p = {
                    x: px,
                    originX: px,
                    y: py,
                    originY: py
                };
                points.push(p)
            }
        for (var i = 0; i < points.length; i++) {
            var closest = [];
            var p1 = points[i];
            for (var j = 0; j < points.length; j++) {
                var p2 = points[j];
                if (!(p1 == p2)) {
                    var placed = !1;
                    for (var k = 0; k < 5; k++)
                        if (!placed)
                            if (closest[k] == undefined) {
                                closest[k] = p2;
                                placed = !0
                            }
                    for (var k = 0; k < 5; k++)
                        if (!placed)
                            if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                                closest[k] = p2;
                                placed = !0
                            }
                }
            }
            p1.closest = closest
        }
        for (var i in points) {
            var c = new Circle(points[i], 2 + Math.random() * 2, "rgba(255,255,255,0.3)");
            points[i].circle = c
        }
    }

    function addListeners() {
        if (!("ontouchstart" in window)) window.addEventListener("mousemove", mouseMove);
        window.addEventListener("scroll", scrollCheck);
        window.addEventListener("resize", resize)
    }

    function mouseMove(e) {
        var posx = posy = 0;
        if (e.pageX || e.pageY) {
            posx = e.pageX;
            posy = e.pageY
        } else if (e.clientX || e.clientY) {
            posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop
        }
        target.x = posx;
        target.y = posy
    }

    function scrollCheck() {
        if (document.body.scrollTop > height) animateHeader = !1;
        else animateHeader = !0
    }

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        largeHeader.style.height = height + "px";
        canvas.width = width;
        canvas.height = height
    }

    function initAnimation() {
        animate();
        for (var i in points) shiftPoint(points[i])
    }

    function animate() {
        if (animateHeader) {
            ctx.clearRect(0, 0, width, height);
            for (var i in points) {
                if (Math.abs(getDistance(target, points[i])) < 4E3) {
                    points[i].active = .3;
                    points[i].circle.active = .6
                } else if (Math.abs(getDistance(target, points[i])) < 2E4) {
                    points[i].active = .1;
                    points[i].circle.active = .3
                } else if (Math.abs(getDistance(target, points[i])) < 4E4) {
                    points[i].active = .02;
                    points[i].circle.active = .1
                } else {
                    points[i].active = 0;
                    points[i].circle.active = 0
                }
                drawLines(points[i]);
                points[i].circle.draw()
            }
        }
        window.requestAnimationFrame(animate)
    }

    function shiftPoint(p) {
        TweenLite.to(p, 1 + 1 * Math.random(), {
            x: p.originX - 50 + Math.random() * 100,
            y: p.originY - 50 + Math.random() * 100,
            ease: Circ.easeInOut,
            onComplete: function() {
                shiftPoint(p)
            }
        })
    }

    function drawLines(p) {
        if (!p.active) return;
        for (var i in p.closest) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.closest[i].x, p.closest[i].y);
            ctx.strokeStyle = "rgba(156,217,249," + p.active + ")";
            ctx.stroke()
        }
    }

    function Circle(pos, rad, color) {
        var _this = this;
        (function() {
            _this.pos = pos || null;
            _this.radius = rad || null;
            _this.color = color || null
        })();
        this.draw = function() {
            if (!_this.active) return;
            ctx.beginPath();
            ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, !1);
            ctx.fillStyle = "rgba(156,217,249," + _this.active + ")";
            ctx.fill()
        }
    }

    function getDistance(p1, p2) {
        return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
    }
})();
(function(window) {
    var _watch = function(elements, props, options, callback) {
        var self = this;
        var check;
        var toArray;
        toArray = function(obj) {
            var arr = [];
            for (var i = obj.length >>> 0; i--;) {
                arr[i] = obj[i]
            }
            return arr
        };
        check = function(e) {
            var self = this;
            for (var i = 0; i < self.watching.length; i++) {
                var data = self.watching[i];
                var changed = !0;
                var temp;
                for (var j = 0; j < data.props.length; j++) {
                    temp = self.attributes[data.props[j]] || self.style[data.props[j]];
                    if (data.vals[j] != temp) {
                        data.vals[j] = temp;
                        data.changed[j] = !0
                    }
                }
                for (var k = 0; k < data.props.length; k++) {
                    if (!data.changed[k]) {
                        changed = !1;
                        break
                    }
                }
                if (changed && data.callback) {
                    data.callback.apply(self, e)
                }
            }
        };
        elements = toArray(elements);
        if (typeof(options) == 'function') {
            callback = options;
            options = {}
        }
        if (typeof(callback) != 'function') {
            callback = function() {}
        }
        options.throttle = options.throttle || 10;
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            var data = {
                props: props.split(' '),
                vals: [],
                changed: [],
                callback: callback
            };
            for (var j = 0; j < data.props.length; j++) {
                data.vals[j] = element.attributes[data.props[j]] || element.style[data.props[j]];
                data.changed[j] = !1
            }
            if (!element.watching) {
                element.watching = []
            }
            element.watching.push(data);
            var observer = new MutationObserver(function(mutations) {
                for (var k = 0; k < mutations.length; k++) {
                    check.call(mutations[k].target, mutations[k])
                }
            });
            observer.observe(element, {
                subtree: !1,
                attributes: !0
            })
        }
        return self
    };
    window.watch = function() {
        return _watch.apply(arguments[0], arguments)
    };
    (function($) {
        $.fn.watch = function() {
            Array.prototype.unshift.call(arguments, this);
            return _watch.apply(this, arguments)
        }
    })(jQuery)
})(window);
if (typeof WeakMap === 'undefined') {
    (function() {
        var defineProperty = Object.defineProperty;
        var counter = Date.now() % 1e9;
        var WeakMap = function() {
            this.name = '__st' + (Math.random() * 1e9 >>> 0) + (counter++ + '__')
        };
        WeakMap.prototype = {
            set: function(key, value) {
                var entry = key[this.name];
                if (entry && entry[0] === key)
                    entry[1] = value;
                else defineProperty(key, this.name, {
                    value: [key, value],
                    writable: !0
                })
            },
            get: function(key) {
                var entry;
                return (entry = key[this.name]) && entry[0] === key ? entry[1] : undefined
            },
            delete: function(key) {
                var entry = key[this.name];
                if (!entry) return !1;
                var hasValue = entry[0] === key;
                entry[0] = entry[1] = undefined;
                return hasValue
            },
            has: function(key) {
                var entry = key[this.name];
                if (!entry) return !1;
                return entry[0] === key
            }
        };
        window.WeakMap = WeakMap
    })()
}(function(global) {
    var registrationsTable = new WeakMap();
    var setImmediate = window.msSetImmediate;
    if (!setImmediate) {
        var setImmediateQueue = [];
        var sentinel = String(Math.random());
        window.addEventListener('message', function(e) {
            if (e.data === sentinel) {
                var queue = setImmediateQueue;
                setImmediateQueue = [];
                queue.forEach(function(func) {
                    func()
                })
            }
        });
        setImmediate = function(func) {
            setImmediateQueue.push(func);
            window.postMessage(sentinel, '*')
        }
    }
    var isScheduled = !1;
    var scheduledObservers = [];

    function scheduleCallback(observer) {
        scheduledObservers.push(observer);
        if (!isScheduled) {
            isScheduled = !0;
            setImmediate(dispatchCallbacks)
        }
    }

    function wrapIfNeeded(node) {
        return window.ShadowDOMPolyfill && window.ShadowDOMPolyfill.wrapIfNeeded(node) || node
    }

    function dispatchCallbacks() {
        isScheduled = !1;
        var observers = scheduledObservers;
        scheduledObservers = [];
        observers.sort(function(o1, o2) {
            return o1.uid_ - o2.uid_
        });
        var anyNonEmpty = !1;
        observers.forEach(function(observer) {
            var queue = observer.takeRecords();
            removeTransientObserversFor(observer);
            if (queue.length) {
                observer.callback_(queue, observer);
                anyNonEmpty = !0
            }
        });
        if (anyNonEmpty)
            dispatchCallbacks()
    }

    function removeTransientObserversFor(observer) {
        observer.nodes_.forEach(function(node) {
            var registrations = registrationsTable.get(node);
            if (!registrations)
                return;
            registrations.forEach(function(registration) {
                if (registration.observer === observer)
                    registration.removeTransientObservers()
            })
        })
    }

    function forEachAncestorAndObserverEnqueueRecord(target, callback) {
        for (var node = target; node; node = node.parentNode) {
            var registrations = registrationsTable.get(node);
            if (registrations) {
                for (var j = 0; j < registrations.length; j++) {
                    var registration = registrations[j];
                    var options = registration.options;
                    if (node !== target && !options.subtree)
                        continue;
                    var record = callback(options);
                    if (record)
                        registration.enqueue(record)
                }
            }
        }
    }
    var uidCounter = 0;

    function JsMutationObserver(callback) {
        this.callback_ = callback;
        this.nodes_ = [];
        this.records_ = [];
        this.uid_ = ++uidCounter
    }
    JsMutationObserver.prototype = {
        observe: function(target, options) {
            target = wrapIfNeeded(target);
            if (!options.childList && !options.attributes && !options.characterData || options.attributeOldValue && !options.attributes || options.attributeFilter && options.attributeFilter.length && !options.attributes || options.characterDataOldValue && !options.characterData) {
                throw new SyntaxError()
            }
            var registrations = registrationsTable.get(target);
            if (!registrations)
                registrationsTable.set(target, registrations = []);
            var registration;
            for (var i = 0; i < registrations.length; i++) {
                if (registrations[i].observer === this) {
                    registration = registrations[i];
                    registration.removeListeners();
                    registration.options = options;
                    break
                }
            }
            if (!registration) {
                registration = new Registration(this, target, options);
                registrations.push(registration);
                this.nodes_.push(target)
            }
            registration.addListeners()
        },
        disconnect: function() {
            this.nodes_.forEach(function(node) {
                var registrations = registrationsTable.get(node);
                for (var i = 0; i < registrations.length; i++) {
                    var registration = registrations[i];
                    if (registration.observer === this) {
                        registration.removeListeners();
                        registrations.splice(i, 1);
                        break
                    }
                }
            }, this);
            this.records_ = []
        },
        takeRecords: function() {
            var copyOfRecords = this.records_;
            this.records_ = [];
            return copyOfRecords
        }
    };

    function MutationRecord(type, target) {
        this.type = type;
        this.target = target;
        this.addedNodes = [];
        this.removedNodes = [];
        this.previousSibling = null;
        this.nextSibling = null;
        this.attributeName = null;
        this.attributeNamespace = null;
        this.oldValue = null
    }

    function copyMutationRecord(original) {
        var record = new MutationRecord(original.type, original.target);
        record.addedNodes = original.addedNodes.slice();
        record.removedNodes = original.removedNodes.slice();
        record.previousSibling = original.previousSibling;
        record.nextSibling = original.nextSibling;
        record.attributeName = original.attributeName;
        record.attributeNamespace = original.attributeNamespace;
        record.oldValue = original.oldValue;
        return record
    };
    var currentRecord, recordWithOldValue;

    function getRecord(type, target) {
        return currentRecord = new MutationRecord(type, target)
    }

    function getRecordWithOldValue(oldValue) {
        if (recordWithOldValue)
            return recordWithOldValue;
        recordWithOldValue = copyMutationRecord(currentRecord);
        recordWithOldValue.oldValue = oldValue;
        return recordWithOldValue
    }

    function clearRecords() {
        currentRecord = recordWithOldValue = undefined
    }

    function recordRepresentsCurrentMutation(record) {
        return record === recordWithOldValue || record === currentRecord
    }

    function selectRecord(lastRecord, newRecord) {
        if (lastRecord === newRecord)
            return lastRecord;
        if (recordWithOldValue && recordRepresentsCurrentMutation(lastRecord))
            return recordWithOldValue;
        return null
    }

    function Registration(observer, target, options) {
        this.observer = observer;
        this.target = target;
        this.options = options;
        this.transientObservedNodes = []
    }
    Registration.prototype = {
        enqueue: function(record) {
            var records = this.observer.records_;
            var length = records.length;
            if (records.length > 0) {
                var lastRecord = records[length - 1];
                var recordToReplaceLast = selectRecord(lastRecord, record);
                if (recordToReplaceLast) {
                    records[length - 1] = recordToReplaceLast;
                    return
                }
            } else {
                scheduleCallback(this.observer)
            }
            records[length] = record
        },
        addListeners: function() {
            this.addListeners_(this.target)
        },
        addListeners_: function(node) {
            var options = this.options;
            if (options.attributes)
                node.addEventListener('DOMAttrModified', this, !0);
            if (options.characterData)
                node.addEventListener('DOMCharacterDataModified', this, !0);
            if (options.childList)
                node.addEventListener('DOMNodeInserted', this, !0);
            if (options.childList || options.subtree)
                node.addEventListener('DOMNodeRemoved', this, !0)
        },
        removeListeners: function() {
            this.removeListeners_(this.target)
        },
        removeListeners_: function(node) {
            var options = this.options;
            if (options.attributes)
                node.removeEventListener('DOMAttrModified', this, !0);
            if (options.characterData)
                node.removeEventListener('DOMCharacterDataModified', this, !0);
            if (options.childList)
                node.removeEventListener('DOMNodeInserted', this, !0);
            if (options.childList || options.subtree)
                node.removeEventListener('DOMNodeRemoved', this, !0)
        },
        addTransientObserver: function(node) {
            if (node === this.target)
                return;
            this.addListeners_(node);
            this.transientObservedNodes.push(node);
            var registrations = registrationsTable.get(node);
            if (!registrations)
                registrationsTable.set(node, registrations = []);
            registrations.push(this)
        },
        removeTransientObservers: function() {
            var transientObservedNodes = this.transientObservedNodes;
            this.transientObservedNodes = [];
            transientObservedNodes.forEach(function(node) {
                this.removeListeners_(node);
                var registrations = registrationsTable.get(node);
                for (var i = 0; i < registrations.length; i++) {
                    if (registrations[i] === this) {
                        registrations.splice(i, 1);
                        break
                    }
                }
            }, this)
        },
        handleEvent: function(e) {
            e.stopImmediatePropagation();
            switch (e.type) {
                case 'DOMAttrModified':
                    var name = e.attrName;
                    var namespace = e.relatedNode.namespaceURI;
                    var target = e.target;
                    var record = new getRecord('attributes', target);
                    record.attributeName = name;
                    record.attributeNamespace = namespace;
                    var oldValue = e.attrChange === MutationEvent.ADDITION ? null : e.prevValue;
                    forEachAncestorAndObserverEnqueueRecord(target, function(options) {
                        if (!options.attributes)
                            return;
                        if (options.attributeFilter && options.attributeFilter.length && options.attributeFilter.indexOf(name) === -1 && options.attributeFilter.indexOf(namespace) === -1) {
                            return
                        }
                        if (options.attributeOldValue)
                            return getRecordWithOldValue(oldValue);
                        return record
                    });
                    break;
                case 'DOMCharacterDataModified':
                    var target = e.target;
                    var record = getRecord('characterData', target);
                    var oldValue = e.prevValue;
                    forEachAncestorAndObserverEnqueueRecord(target, function(options) {
                        if (!options.characterData)
                            return;
                        if (options.characterDataOldValue)
                            return getRecordWithOldValue(oldValue);
                        return record
                    });
                    break;
                case 'DOMNodeRemoved':
                    this.addTransientObserver(e.target);
                case 'DOMNodeInserted':
                    var target = e.relatedNode;
                    var changedNode = e.target;
                    var addedNodes, removedNodes;
                    if (e.type === 'DOMNodeInserted') {
                        addedNodes = [changedNode];
                        removedNodes = []
                    } else {
                        addedNodes = [];
                        removedNodes = [changedNode]
                    }
                    var previousSibling = changedNode.previousSibling;
                    var nextSibling = changedNode.nextSibling;
                    var record = getRecord('childList', target);
                    record.addedNodes = addedNodes;
                    record.removedNodes = removedNodes;
                    record.previousSibling = previousSibling;
                    record.nextSibling = nextSibling;
                    forEachAncestorAndObserverEnqueueRecord(target, function(options) {
                        if (!options.childList)
                            return;
                        return record
                    })
            }
            clearRecords()
        }
    };
    global.JsMutationObserver = JsMutationObserver;
    if (!global.MutationObserver)
        global.MutationObserver = JsMutationObserver
})(this);
jQuery(document).ready(function($) {
    "use strict";
    var title = $('html head').find('title').text();
    var Page = (function() {
        var $container = $('#hs-container'),
            $scroller = $container.find('div.hs-content-scroller'),
            $menu = $container.find('aside'),
            $links = $menu.find('nav > a'),
            $articles = $container.find('div.hs-content-wrapper > article'),
            $toTop = $container.find('a.hs-totop-link'),
            History = window.History,
            animation = {
                speed: 800,
                easing: 'easeInOutQuad'
            },
            scrollOptions = {
                verticalGutter: 0,
                hideFocus: !1,
                contentWidth: '0px'
            },
            init = function() {
                _initCustomScroll();
                _initEvents();
                _layout();
                _goto()
            },
            _initCustomScroll = function() {
                if ($(window).width() > 755) {
                    $articles.jScrollPane(scrollOptions)
                }
                $menu.children('nav').jScrollPane(scrollOptions)
            },
            _goto = function(section) {
                var section = section || History.getState().url.queryStringToJSON().section,
                    isHome = (section === undefined),
                    $article = $(section ? '#' + 'section' + section : '#' + 'section1');
                if ($article.length) {
                    var left = $article.position().left,
                        top = $article.position().top,
                        is_v = ($(document).height() - $(window).height() > 0),
                        param = (is_v) ? {
                            scrollTop: (isHome) ? top : top + $menu.outerHeight(!0)
                        } : {
                            scrollLeft: left
                        },
                        $elScroller = (is_v) ? $('html, body') : $scroller;
                    $elScroller.stop().animate(param, animation.speed, animation.easing);
                    $('nav a').removeClass('active-sec');
                    $('.hs-content .sec-icon').removeClass('active-sec');
                    $('[href="' + "#" + $article.attr("id") + '"]').addClass('active-sec');
                    $("#" + $article.attr("id") + ' .sec-icon').addClass('active-sec')
                }
                $('html head').find('title').text(title)
            },
            _saveState = function(section) {
                if (History.getState().url.queryStringToJSON().section !== section) {
                    History.pushState(null, null, '?section=' + section)
                }
            },
            _layout = function() {
                var windowWidth = $(window).width();
                switch (!0) {
                    case (windowWidth <= 755):
                        $scroller.scrollLeft(0).css('overflow', 'visible');
                        break;
                    case (windowWidth <= 1024):
                        $scroller.css('overflow-x', 'scroll');
                        break;
                    case (windowWidth > 1024):
                        $scroller.css('overflow', 'hidden');
                        break
                }
            },
            _initEvents = function() {
                _initWindowEvents();
                _initMenuEvents();
                _initArticleEvents();
                _initArrowEvents()
            },
            _initWindowEvents = function() {
                $(window).on({
                    'smartresize': function(event) {
                        _layout();
                        $('article.hs-content').each(function() {
                            var $article = $(this),
                                aJSP = $article.data('jsp');
                            if ($(window).width() > 755) {
                                (aJSP === undefined) ? $article.jScrollPane(scrollOptions): aJSP.reinitialise();
                                _initArticleEvents()
                            } else {
                                if (aJSP !== undefined)
                                    aJSP.destroy();
                                $container.off('click', 'article.hs-content')
                            }
                        });
                        var nJSP = $menu.children('nav').data('jsp');
                        nJSP.reinitialise();
                        _goto()
                    },
                    'statechange': function(event) {
                        _goto()
                    }
                })
            },
            _initMenuEvents = function() {
                $links.on('click', function(event) {
                    var href = $(this).attr('href'),
                        section = (href.search(/section/) !== -1) ? href.substring(8) : 0;
                    _saveState(section);
                    return !1
                });
                $('.home').on('click', function() {
                    _saveState(1)
                });
                $('.contact-button').on('click', function() {
                    _saveState(8)
                });
                $(window).on('scroll', function() {
                    if ($(this).scrollTop() > 100) {
                        $toTop.fadeIn()
                    } else {
                        $toTop.fadeOut()
                    }
                });
                $toTop.on('click', function(event) {
                    $('html, body').stop().animate({
                        scrollTop: 0
                    }, animation.speed, animation.easing);
                    return !1
                });
                $('html head').find('title').text(title)
            },
            _initArticleEvents = function() {
                $container.on('click', 'article.hs-content', function(event) {
                    var id = $(this).attr('id'),
                        section = (id.search(/section/) !== -1) ? id.substring(7) : 0;
                    _saveState(section)
                })
            },
            _initArrowEvents = function() {
                $container.on("click", ".previous-page", function(event) {
                    $(".next-page").css("color", "#878e98");
                    var section = section || History.getState().url.queryStringToJSON().section;
                    if (section == undefined) {
                        _saveState(1)
                    } else {
                        if (section != 1) {
                            _saveState(section - 1);
                            if ((section - 1) == 1) {
                                console.log("kayna");
                                $(".previous-page").css("color", "#D2D6DB")
                            }
                        }
                    }
                    return !1
                });
                $container.on("click", ".next-page", function(event) {
                    $(".previous-page").css("color", "#878e98");
                    var section = section || History.getState().url.queryStringToJSON().section;
                    if (section == undefined) {
                        _saveState(2)
                    } else {
                        if (section != $articles.length) {
                            _saveState(section + 1);
                            if ((section + 1) == $articles.length) {
                                $(".next-page").css("color", "#D2D6DB")
                            }
                        }
                    }
                    return !1
                });
                $(".hs-content-scroller").on('scroll', function() {
                    var section = section || History.getState().url.queryStringToJSON().section;
                    if ((section) != 1 || (section != $articles.length)) {
                        $(".previous-page").css("color", "#878e98");
                        $(".next-page").css("color", "#878e98")
                    }
                    if ((section) == 1) {
                        $(".previous-page").css("color", "#D2D6DB");
                        $(".next-page").css("color", "#878e98")
                    }
                    if (section == $articles.length) {
                        $(".previous-page").css("color", "#878e98");
                        $(".next-page").css("color", "#D2D6DB")
                    }
                });
                var section = section || History.getState().url.queryStringToJSON().section;
                if (section == undefined) {
                    section = 1
                }
                if ((section) != 1 || (section != $articles.length)) {
                    $(".previous-page").css("color", "#878e98");
                    $(".next-page").css("color", "#878e98")
                }
                if ((section) == 1) {
                    $(".previous-page").css("color", "#D2D6DB");
                    $(".next-page").css("color", "#878e98")
                }
                if (section == $articles.length) {
                    $(".previous-page").css("color", "#878e98");
                    $(".next-page").css("color", "#D2D6DB")
                }
            };
        return {
            init: init
        }
    })();
    Page.init()
});
jQuery(document).ready(function($) {
    "use strict";
    watch($('.pace-progress'), 'width', function() {
        if (this.style.width > 99 + '%') {
            Pace.stop()
        }
    });
    var $mygrid = $('#mygrid');
    $mygrid.shuffle({
        itemSelector: '.publication_item',
        speed: 500
    });
    $('#filter a').on('click', function(e) {
        e.preventDefault();
        var groupName = $(this).attr('data-group');
        $mygrid.shuffle('shuffle', groupName)
    });
    $mygrid.shuffle('shuffle', 'all');
    $('.desc').on('click', function() {
        var sort = "date-publication",
            opts = {
                reverse: !0,
                by: function($el) {
                    return $el.data('date-publication')
                }
            }
        $mygrid.shuffle('sort', opts)
    });
    $('.asc').on('click', function() {
        var sort = "date-publication",
            opts = {
                reverse: !1,
                by: function($el) {
                    return $el.data('date-publication')
                }
            }
        $mygrid.shuffle('sort', opts)
    });
    var currentSlide = 1,
        currentDate = $('.slide-wrapper .active').data("date"),
        slideName = $('div.slide'),
        totalSlides = slideName.length,
        slideCounter = $('.slide-counter'),
        sliderDate = $('.slide-date'),
        btnNext = $('a#btn-next'),
        btnPrev = $('a#btn-prev'),
        addSlide = $('a#add-slide');
    slideCounter.text(currentSlide + ' / ' + totalSlides);
    sliderDate.html('<span class="research-date-label"><i class="fa fa-calendar"></i>Research Date : </span>' + currentDate);

    function btnTransition(button, direction) {
        $(button).on('click', function() {
            if (button === btnNext && currentSlide >= totalSlides) {
                currentSlide = 1
            } else if (button === btnPrev && currentSlide === 1) {
                currentSlide = totalSlides
            } else {
                direction()
            };
            currentDate = $(slideName).eq(currentSlide - 1).data("date");
            slideName.filter('.active').animate({
                opacity: 0,
                left: -40
            }, 400, function() {
                $(this).removeClass('active').css('left', 0);
                $(slideName).eq(currentSlide - 1).css({
                    'opacity': 0,
                    'left': 40
                }).addClass('active').animate({
                    opacity: 1,
                    left: 0
                }, 400)
            });
            slideCounter.text(currentSlide + ' / ' + totalSlides);
            sliderDate.html('<span class="research-date-label"><i class="fa fa-calendar"></i>Research Date : </span>' + currentDate)
        })
    };
    btnTransition(btnNext, function() {
        currentSlide++
    });
    btnTransition(btnPrev, function() {
        currentSlide--
    });
    $("#marquee").marquee();
    $('.open_popup').magnificPopup({
        type: 'inline',
        midClick: !0,
        removalDelay: 500,
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect')
            }
        }
    });
    $('.bar-percentage[data-percentage]').each(function() {
        var progress = $(this);
        var percentage = Math.ceil($(this).attr('data-percentage'));
        progress.text(percentage + '%');
        progress.siblings().children().css('width', percentage + '%')
    });
    jQuery('.jspPane').bind('resize', function(e) {
        var pane = $('div.hs-content-wrapper > article')
        pane.jScrollPane({
            verticalGutter: 0,
            hideFocus: !1,
            contentWidth: '0px'
        });
        var api = pane.data('jsp');
        api.reinitialise()
    });
    var menu_trigger = $("[data-card-front]");
    var back_trigger = $("[data-card-back]");
    menu_trigger.on('click', function() {
        $(".about-card").toggleClass("show-menu")
    });
    back_trigger.on('click', function() {
        $(".about-card").toggleClass("show-menu")
    });
    $("#submit_btn").on('click', function() {
        var user_name = $('input[name=name]').val();
        var user_email = $('input[name=email]').val();
        var user_message = $('textarea[name=message]').val();
        var proceed = !0;
        if (user_name == "") {
            $('input[name=name]').css('border-color', 'red');
            proceed = !1
        }
        if (user_email == "") {
            $('input[name=email]').css('border-color', 'red');
            proceed = !1
        }
        if (user_message == "") {
            $('textarea[name=message]').css('border-color', 'red');
            proceed = !1
        }
        if (proceed) {
            var post_data = {
                'userName': user_name,
                'userEmail': user_email,
                'userMessage': user_message
            };
            var output;
            $.post('php/contact.php', post_data, function(response) {
                if (response.type == 'error') {
                    output = '<div class="error">' + response.text + '</div>'
                } else {
                    output = '<div class="success">' + response.text + '</div>';
                    $('#contact_form input').val('');
                    $('#contact_form textarea').val('')
                }
                $("#result").hide().html(output).slideDown().delay(4000).slideUp()
            }, 'json')
        }
    });
    $("#contact_form input, #contact_form textarea").on('keyup', function() {
        $("#contact_form input, #contact_form textarea").css('border-color', '');
        $("#result").slideUp()
    });
    $('input, textarea').placeholder();
    var content = $('.hs-menu nav').contents();
    $('#my-panel').jScrollPane();
    $(window).bind("load resize", function() {
        if ($(window).width() <= 755) {
            $('#my-link').panelslider({
                side: 'left',
                clickClose: !1,
                duration: 200
            });
            content.appendTo('#my-panel')
        } else {
            $.panelslider.close();
            content.appendTo('.hs-menu nav')
        }
        jQuery('.jspPane').bind('resize', function(e) {
            var pane = $('div.hs-content-wrapper > article')
            pane.jScrollPane({
                verticalGutter: 0,
                hideFocus: !1,
                contentWidth: '0px'
            });
            var api = pane.data('jsp');
            api.reinitialise()
        })
    });
    $("body").on('keydown', function(e) {
        if (e.keyCode == 37) {
            $(".previous-page").click()
        } else if (e.keyCode == 39) {
            $(".next-page").click()
        }
    });
    $(".map-location").on('click', function() {
        var latitude = 37.775,
            longitude = -122.4183333,
            map_zoom = 14;
        var is_internetExplorer11 = navigator.userAgent.toLowerCase().indexOf('trident') > -1;
        var marker_url = (is_internetExplorer11) ? 'images/gmaps/cd-icon-location.png' : 'images/gmaps/cd-icon-location.svg';
        var main_color = '#2d313f',
            saturation_value = -20,
            brightness_value = 5;
        var style = [{
            "featureType": "landscape",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "water",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "stylers": [{
                "hue": "#00aaff"
            }, {
                "saturation": -100
            }, {
                "gamma": 2.15
            }, {
                "lightness": 12
            }]
        }, {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [{
                "visibility": "on"
            }, {
                "lightness": 24
            }]
        }, {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{
                "lightness": 57
            }]
        }]
        var map_options = {
            center: new google.maps.LatLng(latitude, longitude),
            zoom: map_zoom,
            panControl: !1,
            zoomControl: !1,
            mapTypeControl: !1,
            streetViewControl: !1,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: !1,
            styles: style
        }
        var map = new google.maps.Map(document.getElementById('google-container'), map_options);
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(latitude, longitude),
            map: map,
            visible: !0,
            icon: marker_url
        });

        function CustomZoomControl(controlDiv, map) {
            var controlUIzoomIn = document.getElementById('cd-zoom-in'),
                controlUIzoomOut = document.getElementById('cd-zoom-out');
            controlDiv.appendChild(controlUIzoomIn);
            controlDiv.appendChild(controlUIzoomOut);
            google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
                map.setZoom(map.getZoom() + 1)
            });
            google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
                map.setZoom(map.getZoom() - 1)
            })
        }
        var zoomControlDiv = document.createElement('div');
        var zoomControl = new CustomZoomControl(zoomControlDiv, map);
        map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv)
    });
    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        var oldsldrwidth = $('.research-section .slider-details').width();
        $('.research-section .slider-details').width(oldsldrwidth - 100);
        $(window).bind("load resize", function() {
            if ($(window).width() > 755) {
                var heightdoc = $(document).height();
                $('.hs-content-wrapper').height(heightdoc - 47);
                var heightwrp = $('.hs-content-wrapper').height();
                $('.hs-content').height(heightwrp - 22);
                var pane = $('div.hs-content-wrapper > article')
                pane.jScrollPane({
                    verticalGutter: 0,
                    hideFocus: !1,
                    contentWidth: '0px'
                });
                var api = pane.data('jsp');
                api.reinitialise()
            } else {
                $('.hs-content-wrapper').css('height', 'auto')
            }
        })
    }
    // var testimonials = {};
    // testimonials.slider = (function() {
    //     var currentItemIndex = 0,
    //         prevBtn = $('.prev-testimonial'),
    //         nextBtn = $('.next-testimonial'),
    //         items = (function() {
    //             var items = [];
    //             $('.testimonial').each(function() {
    //                 items.push($(this))
    //             });
    //             return items
    //         })();
    //
    //     function getCurrent() {
    //         $('.testimonial').each(function(index) {
    //             $(this).removeClass('current')
    //         });
    //         $('.testimonial').eq(currentItemIndex).addClass('current')
    //     }
    //
    //     function greyOut(prevBtn, nextBtn) {
    //         if ($(prevBtn).hasClass('grey-out')) {
    //             $(prevBtn).removeClass('grey-out')
    //         }
    //         if ($(nextBtn).hasClass('grey-out')) {
    //             $(nextBtn).removeClass('grey-out')
    //         }
    //         if (currentItemIndex == 0) {
    //             $(prevBtn).addClass('grey-out')
    //         }
    //         if (currentItemIndex == items.length - 1) {
    //             $(nextBtn).addClass('grey-out')
    //         }
    //     }
    //     return {
    //         init: function(prevBtn, nextBtn) {
    //             items[currentItemIndex].addClass('current');
    //             greyOut(prevBtn, nextBtn);
    //             $(prevBtn).click(function() {
    //                 if (currentItemIndex > 0) {
    //                     currentItemIndex--
    //                 }
    //                 getCurrent();
    //                 greyOut(prevBtn, nextBtn)
    //             });
    //             $(nextBtn).click(function() {
    //                 if (currentItemIndex < items.length - 1) {
    //                     currentItemIndex++
    //                 }
    //                 getCurrent();
    //                 greyOut(prevBtn, nextBtn)
    //             })
    //         }
    //     }
    // })();
    // testimonials.slider.init('.prev-testimonial', '.next-testimonial')
})