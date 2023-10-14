(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [338], {
        227: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getDomainLocale = function (e, t, o, n) {
                return !1
            }, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        9749: function (e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = o(6495).Z,
                r = o(2648).Z,
                i = o(1598).Z,
                l = o(7273).Z,
                a = i(o(7294)),
                s = r(o(3121)),
                c = o(2675),
                u = o(139),
                f = o(8730);
            o(7238);
            var d = r(o(9824));
            let p = {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                path: "/simulacao-protecao-veicular/_next/image/",
                loader: "default",
                dangerouslyAllowSVG: !1,
                unoptimized: !0
            };

            function h(e) {
                return void 0 !== e.default
            }

            function v(e) {
                return "number" == typeof e || void 0 === e ? e : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
            }

            function g(e, t, o, r, i, l, a) {
                if (!e || e["data-loaded-src"] === t) return;
                e["data-loaded-src"] = t;
                let s = "decode" in e ? e.decode() : Promise.resolve();
                s.catch(() => {}).then(() => {
                    if (e.parentNode) {
                        if ("blur" === o && l(!0), null == r ? void 0 : r.current) {
                            let t = new Event("load");
                            Object.defineProperty(t, "target", {
                                writable: !1,
                                value: e
                            });
                            let o = !1,
                                i = !1;
                            r.current(n({}, t, {
                                nativeEvent: t,
                                currentTarget: e,
                                target: e,
                                isDefaultPrevented: () => o,
                                isPropagationStopped: () => i,
                                persist: () => {},
                                preventDefault: () => {
                                    o = !0, t.preventDefault()
                                },
                                stopPropagation: () => {
                                    i = !0, t.stopPropagation()
                                }
                            }))
                        }(null == i ? void 0 : i.current) && i.current(e)
                    }
                })
            }
            let m = a.forwardRef((e, t) => {
                    var {
                        imgAttributes: o,
                        heightInt: r,
                        widthInt: i,
                        qualityInt: s,
                        className: c,
                        imgStyle: u,
                        blurStyle: f,
                        isLazy: d,
                        fill: p,
                        placeholder: h,
                        loading: v,
                        srcString: m,
                        config: y,
                        unoptimized: b,
                        loader: w,
                        onLoadRef: E,
                        onLoadingCompleteRef: _,
                        setBlurComplete: O,
                        setShowAltText: C,
                        onLoad: S,
                        onError: j
                    } = e, x = l(e, ["imgAttributes", "heightInt", "widthInt", "qualityInt", "className", "imgStyle", "blurStyle", "isLazy", "fill", "placeholder", "loading", "srcString", "config", "unoptimized", "loader", "onLoadRef", "onLoadingCompleteRef", "setBlurComplete", "setShowAltText", "onLoad", "onError"]);
                    return v = d ? "lazy" : v, a.default.createElement(a.default.Fragment, null, a.default.createElement("img", Object.assign({}, x, o, {
                        width: i,
                        height: r,
                        decoding: "async",
                        "data-nimg": p ? "fill" : "1",
                        className: c,
                        loading: v,
                        style: n({}, u, f),
                        ref: a.useCallback(e => {
                            t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e)), e && (j && (e.src = e.src), e.complete && g(e, m, h, E, _, O, b))
                        }, [m, h, E, _, O, j, b, t]),
                        onLoad: e => {
                            let t = e.currentTarget;
                            g(t, m, h, E, _, O, b)
                        },
                        onError: e => {
                            C(!0), "blur" === h && O(!0), j && j(e)
                        }
                    })))
                }),
                y = a.forwardRef((e, t) => {
                    let o, r;
                    var i, {
                            src: g,
                            sizes: y,
                            unoptimized: b = !1,
                            priority: w = !1,
                            loading: E,
                            className: _,
                            quality: O,
                            width: C,
                            height: S,
                            fill: j,
                            style: x,
                            onLoad: k,
                            onLoadingComplete: M,
                            placeholder: R = "empty",
                            blurDataURL: P,
                            layout: I,
                            objectFit: T,
                            objectPosition: L,
                            lazyBoundary: z,
                            lazyRoot: B
                        } = e,
                        A = l(e, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "fill", "style", "onLoad", "onLoadingComplete", "placeholder", "blurDataURL", "layout", "objectFit", "objectPosition", "lazyBoundary", "lazyRoot"]);
                    let N = a.useContext(f.ImageConfigContext),
                        X = a.useMemo(() => {
                            let e = p || N || u.imageConfigDefault,
                                t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                                o = e.deviceSizes.sort((e, t) => e - t);
                            return n({}, e, {
                                allSizes: t,
                                deviceSizes: o
                            })
                        }, [N]),
                        Y = A,
                        D = Y.loader || d.default;
                    delete Y.loader;
                    let V = "__next_img_default" in D;
                    if (V) {
                        if ("custom" === X.loader) throw Error('Image with src "'.concat(g, '" is missing "loader" prop.') + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")
                    } else {
                        let e = D;
                        D = t => {
                            let {
                                config: o
                            } = t, n = l(t, ["config"]);
                            return e(n)
                        }
                    }
                    if (I) {
                        "fill" === I && (j = !0);
                        let e = {
                            intrinsic: {
                                maxWidth: "100%",
                                height: "auto"
                            },
                            responsive: {
                                width: "100%",
                                height: "auto"
                            }
                        } [I];
                        e && (x = n({}, x, e));
                        let t = {
                            responsive: "100vw",
                            fill: "100vw"
                        } [I];
                        t && !y && (y = t)
                    }
                    let q = "",
                        W = v(C),
                        H = v(S);
                    if ("object" == typeof (i = g) && (h(i) || void 0 !== i.src)) {
                        let e = h(g) ? g.default : g;
                        if (!e.src) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));
                        if (!e.height || !e.width) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));
                        if (o = e.blurWidth, r = e.blurHeight, P = P || e.blurDataURL, q = e.src, !j) {
                            if (W || H) {
                                if (W && !H) {
                                    let t = W / e.width;
                                    H = Math.round(e.height * t)
                                } else if (!W && H) {
                                    let t = H / e.height;
                                    W = Math.round(e.width * t)
                                }
                            } else W = e.width, H = e.height
                        }
                    }
                    let F = !w && ("lazy" === E || void 0 === E);
                    ((g = "string" == typeof g ? g : q).startsWith("data:") || g.startsWith("blob:")) && (b = !0, F = !1), X.unoptimized && (b = !0), V && g.endsWith(".svg") && !X.dangerouslyAllowSVG && (b = !0);
                    let [Z, U] = a.useState(!1), [G, K] = a.useState(!1), $ = v(O), J = Object.assign(j ? {
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        objectFit: T,
                        objectPosition: L
                    } : {}, G ? {} : {
                        color: "transparent"
                    }, x), Q = "blur" === R && P && !Z ? {
                        backgroundSize: J.objectFit || "cover",
                        backgroundPosition: J.objectPosition || "50% 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: 'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({
                            widthInt: W,
                            heightInt: H,
                            blurWidth: o,
                            blurHeight: r,
                            blurDataURL: P
                        }), '")')
                    } : {}, ee = function (e) {
                        let {
                            config: t,
                            src: o,
                            unoptimized: n,
                            width: r,
                            quality: i,
                            sizes: l,
                            loader: a
                        } = e;
                        if (n) return {
                            src: o,
                            srcSet: void 0,
                            sizes: void 0
                        };
                        let {
                            widths: s,
                            kind: c
                        } = function (e, t, o) {
                            let {
                                deviceSizes: n,
                                allSizes: r
                            } = e;
                            if (o) {
                                let e = /(^|\s)(1?\d?\d)vw/g,
                                    t = [];
                                for (let n; n = e.exec(o); n) t.push(parseInt(n[2]));
                                if (t.length) {
                                    let e = .01 * Math.min(...t);
                                    return {
                                        widths: r.filter(t => t >= n[0] * e),
                                        kind: "w"
                                    }
                                }
                                return {
                                    widths: r,
                                    kind: "w"
                                }
                            }
                            if ("number" != typeof t) return {
                                widths: n,
                                kind: "w"
                            };
                            let i = [...new Set([t, 2 * t].map(e => r.find(t => t >= e) || r[r.length - 1]))];
                            return {
                                widths: i,
                                kind: "x"
                            }
                        }(t, r, l), u = s.length - 1;
                        return {
                            sizes: l || "w" !== c ? l : "100vw",
                            srcSet: s.map((e, n) => "".concat(a({
                                config: t,
                                src: o,
                                quality: i,
                                width: e
                            }), " ").concat("w" === c ? e : n + 1).concat(c)).join(", "),
                            src: a({
                                config: t,
                                src: o,
                                quality: i,
                                width: s[u]
                            })
                        }
                    }({
                        config: X,
                        src: g,
                        unoptimized: b,
                        width: W,
                        quality: $,
                        sizes: y,
                        loader: D
                    }), et = g, eo = {
                        imageSrcSet: ee.srcSet,
                        imageSizes: ee.sizes,
                        crossOrigin: Y.crossOrigin
                    }, en = a.useRef(k);
                    a.useEffect(() => {
                        en.current = k
                    }, [k]);
                    let er = a.useRef(M);
                    a.useEffect(() => {
                        er.current = M
                    }, [M]);
                    let ei = n({
                        isLazy: F,
                        imgAttributes: ee,
                        heightInt: H,
                        widthInt: W,
                        qualityInt: $,
                        className: _,
                        imgStyle: J,
                        blurStyle: Q,
                        loading: E,
                        config: X,
                        fill: j,
                        unoptimized: b,
                        placeholder: R,
                        loader: D,
                        srcString: et,
                        onLoadRef: en,
                        onLoadingCompleteRef: er,
                        setBlurComplete: U,
                        setShowAltText: K
                    }, Y);
                    return a.default.createElement(a.default.Fragment, null, a.default.createElement(m, Object.assign({}, ei, {
                        ref: t
                    })), w ? a.default.createElement(s.default, null, a.default.createElement("link", Object.assign({
                        key: "__nimg-" + ee.src + ee.srcSet + ee.sizes,
                        rel: "preload",
                        as: "image",
                        href: ee.srcSet ? void 0 : ee.src
                    }, eo))) : null)
                });
            t.default = y, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        1551: function (e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = o(2648).Z,
                r = o(7273).Z,
                i = n(o(7294)),
                l = o(1003),
                a = o(7795),
                s = o(4465),
                c = o(2692),
                u = o(8245),
                f = o(9246),
                d = o(227),
                p = o(3468);
            let h = new Set;

            function v(e, t, o, n) {
                if (l.isLocalURL(t)) {
                    if (!n.bypassPrefetchedCheck) {
                        let r = void 0 !== n.locale ? n.locale : "locale" in e ? e.locale : void 0,
                            i = t + "%" + o + "%" + r;
                        if (h.has(i)) return;
                        h.add(i)
                    }
                    Promise.resolve(e.prefetch(t, o, n)).catch(e => {})
                }
            }

            function g(e) {
                return "string" == typeof e ? e : a.formatUrl(e)
            }
            let m = i.default.forwardRef(function (e, t) {
                let o, n;
                let {
                    href: a,
                    as: h,
                    children: m,
                    prefetch: y,
                    passHref: b,
                    replace: w,
                    shallow: E,
                    scroll: _,
                    locale: O,
                    onClick: C,
                    onMouseEnter: S,
                    onTouchStart: j,
                    legacyBehavior: x = !1
                } = e, k = r(e, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
                o = m, x && ("string" == typeof o || "number" == typeof o) && (o = i.default.createElement("a", null, o));
                let M = !1 !== y,
                    R = i.default.useContext(c.RouterContext),
                    P = i.default.useContext(u.AppRouterContext),
                    I = null != R ? R : P,
                    T = !R,
                    {
                        href: L,
                        as: z
                    } = i.default.useMemo(() => {
                        if (!R) {
                            let e = g(a);
                            return {
                                href: e,
                                as: h ? g(h) : e
                            }
                        }
                        let [e, t] = l.resolveHref(R, a, !0);
                        return {
                            href: e,
                            as: h ? l.resolveHref(R, h) : t || e
                        }
                    }, [R, a, h]),
                    B = i.default.useRef(L),
                    A = i.default.useRef(z);
                x && (n = i.default.Children.only(o));
                let N = x ? n && "object" == typeof n && n.ref : t,
                    [X, Y, D] = f.useIntersection({
                        rootMargin: "200px"
                    }),
                    V = i.default.useCallback(e => {
                        (A.current !== z || B.current !== L) && (D(), A.current = z, B.current = L), X(e), N && ("function" == typeof N ? N(e) : "object" == typeof N && (N.current = e))
                    }, [z, N, L, D, X]);
                i.default.useEffect(() => {
                    I && Y && M && v(I, L, z, {
                        locale: O
                    })
                }, [z, L, Y, O, M, null == R ? void 0 : R.locale, I]);
                let q = {
                    ref: V,
                    onClick(e) {
                        x || "function" != typeof C || C(e), x && n.props && "function" == typeof n.props.onClick && n.props.onClick(e), I && !e.defaultPrevented && function (e, t, o, n, r, a, s, c, u, f) {
                            let {
                                nodeName: d
                            } = e.currentTarget, p = "A" === d.toUpperCase();
                            if (p && (function (e) {
                                    let {
                                        target: t
                                    } = e.currentTarget;
                                    return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                                }(e) || !l.isLocalURL(o))) return;
                            e.preventDefault();
                            let h = () => {
                                "beforePopState" in t ? t[r ? "replace" : "push"](o, n, {
                                    shallow: a,
                                    locale: c,
                                    scroll: s
                                }) : t[r ? "replace" : "push"](n || o, {
                                    forceOptimisticNavigation: !f
                                })
                            };
                            u ? i.default.startTransition(h) : h()
                        }(e, I, L, z, w, E, _, O, T, M)
                    },
                    onMouseEnter(e) {
                        x || "function" != typeof S || S(e), x && n.props && "function" == typeof n.props.onMouseEnter && n.props.onMouseEnter(e), I && (M || !T) && v(I, L, z, {
                            locale: O,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        })
                    },
                    onTouchStart(e) {
                        x || "function" != typeof j || j(e), x && n.props && "function" == typeof n.props.onTouchStart && n.props.onTouchStart(e), I && (M || !T) && v(I, L, z, {
                            locale: O,
                            priority: !0,
                            bypassPrefetchedCheck: !0
                        })
                    }
                };
                if (!x || b || "a" === n.type && !("href" in n.props)) {
                    let e = void 0 !== O ? O : null == R ? void 0 : R.locale,
                        t = (null == R ? void 0 : R.isLocaleDomain) && d.getDomainLocale(z, e, null == R ? void 0 : R.locales, null == R ? void 0 : R.domainLocales);
                    q.href = t || p.addBasePath(s.addLocale(z, e, null == R ? void 0 : R.defaultLocale))
                }
                return x ? i.default.cloneElement(n, q) : i.default.createElement("a", Object.assign({}, k, q), o)
            });
            t.default = m, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        9246: function (e, t, o) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.useIntersection = function (e) {
                let {
                    rootRef: t,
                    rootMargin: o,
                    disabled: s
                } = e, c = s || !i, [u, f] = n.useState(!1), d = n.useRef(null), p = n.useCallback(e => {
                    d.current = e
                }, []);
                n.useEffect(() => {
                    if (i) {
                        if (c || u) return;
                        let e = d.current;
                        if (e && e.tagName) {
                            let n = function (e, t, o) {
                                let {
                                    id: n,
                                    observer: r,
                                    elements: i
                                } = function (e) {
                                    let t;
                                    let o = {
                                            root: e.root || null,
                                            margin: e.rootMargin || ""
                                        },
                                        n = a.find(e => e.root === o.root && e.margin === o.margin);
                                    if (n && (t = l.get(n))) return t;
                                    let r = new Map,
                                        i = new IntersectionObserver(e => {
                                            e.forEach(e => {
                                                let t = r.get(e.target),
                                                    o = e.isIntersecting || e.intersectionRatio > 0;
                                                t && o && t(o)
                                            })
                                        }, e);
                                    return t = {
                                        id: o,
                                        observer: i,
                                        elements: r
                                    }, a.push(o), l.set(o, t), t
                                }(o);
                                return i.set(e, t), r.observe(e),
                                    function () {
                                        if (i.delete(e), r.unobserve(e), 0 === i.size) {
                                            r.disconnect(), l.delete(n);
                                            let e = a.findIndex(e => e.root === n.root && e.margin === n.margin);
                                            e > -1 && a.splice(e, 1)
                                        }
                                    }
                            }(e, e => e && f(e), {
                                root: null == t ? void 0 : t.current,
                                rootMargin: o
                            });
                            return n
                        }
                    } else if (!u) {
                        let e = r.requestIdleCallback(() => f(!0));
                        return () => r.cancelIdleCallback(e)
                    }
                }, [c, o, t, u, d.current]);
                let h = n.useCallback(() => {
                    f(!1)
                }, []);
                return [p, u, h]
            };
            var n = o(7294),
                r = o(4686);
            let i = "function" == typeof IntersectionObserver,
                l = new Map,
                a = [];
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        2675: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getImageBlurSvg = function (e) {
                let {
                    widthInt: t,
                    heightInt: o,
                    blurWidth: n,
                    blurHeight: r,
                    blurDataURL: i
                } = e, l = n || t, a = r || o, s = i.startsWith("data:image/jpeg") ? "%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%" : "";
                return l && a ? "%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(l, " ").concat(a, "'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n && r ? "1" : "20", "'/%3E").concat(s, "%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(i, "'/%3E%3C/svg%3E") : "%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(i, "'/%3E%3C/svg%3E")
            }
        },
        9824: function (e, t) {
            "use strict";

            function o(e) {
                let {
                    config: t,
                    src: o,
                    width: n,
                    quality: r
                } = e;
                return "".concat(t.path, "?url=").concat(encodeURIComponent(o), "&w=").concat(n, "&q=").concat(r || 75)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, o.__next_img_default = !0, t.default = o
        },
        9008: function (e, t, o) {
            e.exports = o(3121)
        },
        5675: function (e, t, o) {
            o(9749)
        },
        1664: function (e, t, o) {
            e.exports = o(1551)
        },
        1163: function (e, t, o) {
            o(880)
        },
        4925: function (e, t, o) {
            var n;
            "undefined" != typeof self && self, e.exports = (n = o(7294), function (e) {
                var t = {};

                function o(n) {
                    if (t[n]) return t[n].exports;
                    var r = t[n] = {
                        i: n,
                        l: !1,
                        exports: {}
                    };
                    return e[n].call(r.exports, r, r.exports, o), r.l = !0, r.exports
                }
                return o.m = e, o.c = t, o.d = function (e, t, n) {
                    o.o(e, t) || Object.defineProperty(e, t, {
                        configurable: !1,
                        enumerable: !0,
                        get: n
                    })
                }, o.n = function (e) {
                    var t = e && e.__esModule ? function () {
                        return e.default
                    } : function () {
                        return e
                    };
                    return o.d(t, "a", t), t
                }, o.o = function (e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, o.p = "", o(o.s = 0)
            }([function (e, t, o) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n, r = (n = o(1)) && n.__esModule ? n : {
                    default: n
                };
                t.default = r.default
            }, function (e, t, o) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n = Object.assign || function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var o = arguments[t];
                            for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
                        }
                        return e
                    },
                    r = function () {
                        function e(e, t) {
                            for (var o = 0; o < t.length; o++) {
                                var n = t[o];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                            }
                        }
                        return function (t, o, n) {
                            return o && e(t.prototype, o), n && e(t, n), t
                        }
                    }(),
                    i = o(2),
                    l = i && i.__esModule ? i : {
                        default: i
                    },
                    a = function (e) {
                        function t(e) {
                            ! function (e, t) {
                                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                            }(this, t);
                            var o = function (e, t) {
                                if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return t && ("object" == typeof t || "function" == typeof t) ? t : e
                            }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                            return o.smoothScroll = o.smoothScroll.bind(o), o
                        }
                        return function (e, t) {
                            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                        }(t, e), r(t, [{
                            key: "componentDidMount",
                            value: function () {
                                o(3).polyfill()
                            }
                        }, {
                            key: "smoothScroll",
                            value: function (e) {
                                var t = this;
                                e.preventDefault();
                                var o = function () {
                                    return 0
                                };
                                void 0 !== this.props.offset && (o = this.props.offset && this.props.offset.constructor && this.props.offset.apply ? this.props.offset : function () {
                                    return parseInt(t.props.offset)
                                });
                                var n = e.currentTarget.getAttribute("href").slice(1),
                                    r = document.getElementById(n).getBoundingClientRect().top + window.pageYOffset;
                                window.scroll({
                                    top: r - o(),
                                    behavior: "smooth"
                                }), this.props.onClick && this.props.onClick(e)
                            }
                        }, {
                            key: "render",
                            value: function () {
                                var e = this.props,
                                    t = (e.offset, function (e, t) {
                                        var o = {};
                                        for (var n in e) !(t.indexOf(n) >= 0) && Object.prototype.hasOwnProperty.call(e, n) && (o[n] = e[n]);
                                        return o
                                    }(e, ["offset"]));
                                return l.default.createElement("a", n({}, t, {
                                    onClick: this.smoothScroll
                                }))
                            }
                        }]), t
                    }(i.Component);
                t.default = a
            }, function (e, t) {
                e.exports = n
            }, function (e, t, o) {
                e.exports = {
                    polyfill: function () {
                        var e, t = window,
                            o = document;
                        if (!("scrollBehavior" in o.documentElement.style) || !0 === t.__forceSmoothScrollPolyfill__) {
                            var n = t.HTMLElement || t.Element,
                                r = {
                                    scroll: t.scroll || t.scrollTo,
                                    scrollBy: t.scrollBy,
                                    elementScroll: n.prototype.scroll || a,
                                    scrollIntoView: n.prototype.scrollIntoView
                                },
                                i = t.performance && t.performance.now ? t.performance.now.bind(t.performance) : Date.now,
                                l = (e = t.navigator.userAgent, RegExp("MSIE |Trident/|Edge/").test(e)) ? 1 : 0;
                            t.scroll = t.scrollTo = function () {
                                if (void 0 !== arguments[0]) {
                                    if (!0 === s(arguments[0])) {
                                        r.scroll.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : t.scrollY || t.pageYOffset);
                                        return
                                    }
                                    f.call(t, o.body, void 0 !== arguments[0].left ? ~~arguments[0].left : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : t.scrollY || t.pageYOffset)
                                }
                            }, t.scrollBy = function () {
                                if (void 0 !== arguments[0]) {
                                    if (s(arguments[0])) {
                                        r.scrollBy.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0);
                                        return
                                    }
                                    f.call(t, o.body, ~~arguments[0].left + (t.scrollX || t.pageXOffset), ~~arguments[0].top + (t.scrollY || t.pageYOffset))
                                }
                            }, n.prototype.scroll = n.prototype.scrollTo = function () {
                                if (void 0 !== arguments[0]) {
                                    if (!0 === s(arguments[0])) {
                                        if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw SyntaxError("Value could not be converted");
                                        r.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop);
                                        return
                                    }
                                    var e = arguments[0].left,
                                        t = arguments[0].top;
                                    f.call(this, this, void 0 === e ? this.scrollLeft : ~~e, void 0 === t ? this.scrollTop : ~~t)
                                }
                            }, n.prototype.scrollBy = function () {
                                if (void 0 !== arguments[0]) {
                                    if (!0 === s(arguments[0])) {
                                        r.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop);
                                        return
                                    }
                                    this.scroll({
                                        left: ~~arguments[0].left + this.scrollLeft,
                                        top: ~~arguments[0].top + this.scrollTop,
                                        behavior: arguments[0].behavior
                                    })
                                }
                            }, n.prototype.scrollIntoView = function () {
                                if (!0 === s(arguments[0])) {
                                    r.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0]);
                                    return
                                }
                                var e = function (e) {
                                        var t;
                                        do t = (e = e.parentNode) === o.body; while (!1 === t && !1 === function (e) {
                                                var t = c(e, "Y") && u(e, "Y"),
                                                    o = c(e, "X") && u(e, "X");
                                                return t || o
                                            }(e));
                                        return t = null, e
                                    }(this),
                                    n = e.getBoundingClientRect(),
                                    i = this.getBoundingClientRect();
                                e !== o.body ? (f.call(this, e, e.scrollLeft + i.left - n.left, e.scrollTop + i.top - n.top), "fixed" !== t.getComputedStyle(e).position && t.scrollBy({
                                    left: n.left,
                                    top: n.top,
                                    behavior: "smooth"
                                })) : t.scrollBy({
                                    left: i.left,
                                    top: i.top,
                                    behavior: "smooth"
                                })
                            }
                        }

                        function a(e, t) {
                            this.scrollLeft = e, this.scrollTop = t
                        }

                        function s(e) {
                            if (null === e || "object" != typeof e || void 0 === e.behavior || "auto" === e.behavior || "instant" === e.behavior) return !0;
                            if ("object" == typeof e && "smooth" === e.behavior) return !1;
                            throw TypeError("behavior member of ScrollOptions " + e.behavior + " is not a valid value for enumeration ScrollBehavior.")
                        }

                        function c(e, t) {
                            return "Y" === t ? e.clientHeight + l < e.scrollHeight : "X" === t ? e.clientWidth + l < e.scrollWidth : void 0
                        }

                        function u(e, o) {
                            var n = t.getComputedStyle(e, null)["overflow" + o];
                            return "auto" === n || "scroll" === n
                        }

                        function f(e, n, l) {
                            var s, c, u, f, d = i();
                            e === o.body ? (s = t, c = t.scrollX || t.pageXOffset, u = t.scrollY || t.pageYOffset, f = r.scroll) : (s = e, c = e.scrollLeft, u = e.scrollTop, f = a),
                                function e(o) {
                                    var n, r, l, a = (i() - o.startTime) / 468;
                                    n = .5 * (1 - Math.cos(Math.PI * (a = a > 1 ? 1 : a))), r = o.startX + (o.x - o.startX) * n, l = o.startY + (o.y - o.startY) * n, o.method.call(o.scrollable, r, l), (r !== o.x || l !== o.y) && t.requestAnimationFrame(e.bind(t, o))
                                }({
                                    scrollable: s,
                                    method: f,
                                    startTime: d,
                                    startX: c,
                                    startY: u,
                                    x: n,
                                    y: l
                                })
                        }
                    }
                }
            }]))
        },
        7005: function (e, t, o) {
            var n = o(7294),
                r = n && "object" == typeof n && "default" in n ? n : {
                    default: n
                },
                i = function () {
                    return (i = Object.assign || function (e) {
                        for (var t, o = 1, n = arguments.length; o < n; o++)
                            for (var r in t = arguments[o]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        return e
                    }).apply(this, arguments)
                };
            ! function (e) {
                if (!e || "undefined" == typeof window) return;
                let t = document.createElement("style");
                t.setAttribute("type", "text/css"), t.innerHTML = e, document.head.appendChild(t)
            }('.marquee-container {\n  overflow-x: hidden !important;\n  display: flex !important;\n  flex-direction: row !important;\n  position: relative;\n  width: 100%;\n}\n.marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.overlay::before, .overlay::after {\n  background: linear-gradient(to right, var(--gradient-color));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n}\n.overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.marquee {\n  flex: 0 0 auto;\n  min-width: 100%;\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}'), t.Z = function (e) {
                var t, o, l, a, s = e.style,
                    c = e.className,
                    u = e.play,
                    f = void 0 === u || u,
                    d = e.pauseOnHover,
                    p = void 0 !== d && d,
                    h = e.pauseOnClick,
                    v = void 0 !== h && h,
                    g = e.direction,
                    m = void 0 === g ? "left" : g,
                    y = e.speed,
                    b = void 0 === y ? 20 : y,
                    w = e.delay,
                    E = void 0 === w ? 0 : w,
                    _ = e.loop,
                    O = void 0 === _ ? 0 : _,
                    C = e.gradient,
                    S = e.gradientColor,
                    j = void 0 === S ? [255, 255, 255] : S,
                    x = e.gradientWidth,
                    k = void 0 === x ? 200 : x,
                    M = e.onFinish,
                    R = e.onCycleComplete,
                    P = e.children,
                    I = n.useState(0),
                    T = I[0],
                    L = I[1],
                    z = n.useState(0),
                    B = z[0],
                    A = z[1],
                    N = n.useState(!1),
                    X = N[0],
                    Y = N[1],
                    D = n.useRef(null),
                    V = n.useRef(null);
                n.useEffect(function () {
                    if (X) {
                        var e = function () {
                            V.current && D.current && (L(D.current.getBoundingClientRect().width), A(V.current.getBoundingClientRect().width))
                        };
                        return e(), window.addEventListener("resize", e),
                            function () {
                                window.removeEventListener("resize", e)
                            }
                    }
                }, [X]), n.useEffect(function () {
                    Y(!0)
                }, []);
                var q = "rgba(" + j[0] + ", " + j[1] + ", " + j[2],
                    W = B < T ? T / b : B / b;
                return r.default.createElement(n.Fragment, null, X ? r.default.createElement("div", {
                    ref: D,
                    style: i(i({}, void 0 === s ? {} : s), ((t = {})["--pause-on-hover"] = !f || p ? "paused" : "running", t["--pause-on-click"] = !f || p && !v || v ? "paused" : "running", t)),
                    className: (void 0 === c ? "" : c) + " marquee-container"
                }, (void 0 === C || C) && r.default.createElement("div", {
                    style: ((o = {})["--gradient-color"] = q + ", 1), " + q + ", 0)", o["--gradient-width"] = "number" == typeof k ? k + "px" : k, o),
                    className: "overlay"
                }), r.default.createElement("div", {
                    ref: V,
                    style: ((l = {})["--play"] = f ? "running" : "paused", l["--direction"] = "left" === m ? "normal" : "reverse", l["--duration"] = W + "s", l["--delay"] = E + "s", l["--iteration-count"] = O ? "" + O : "infinite", l),
                    className: "marquee",
                    onAnimationIteration: R,
                    onAnimationEnd: M
                }, P), r.default.createElement("div", {
                    style: ((a = {})["--play"] = f ? "running" : "paused", a["--direction"] = "left" === m ? "normal" : "reverse", a["--duration"] = W + "s", a["--delay"] = E + "s", a["--iteration-count"] = O ? "" + O : "infinite", a),
                    className: "marquee",
                    "aria-hidden": "true"
                }, P)) : null)
            }
        },
        7650: function (e, t, o) {
            "use strict";
            let n;
            o.d(t, {
                YD: function () {
                    return s
                }
            });
            var r = o(7294);
            let i = new Map,
                l = new WeakMap,
                a = 0;

            function s({
                threshold: e,
                delay: t,
                trackVisibility: o,
                rootMargin: s,
                root: c,
                triggerOnce: u,
                skip: f,
                initialInView: d,
                fallbackInView: p,
                onChange: h
            } = {}) {
                var v;
                let [g, m] = r.useState(null), y = r.useRef(), [b, w] = r.useState({
                    inView: !!d,
                    entry: void 0
                });
                y.current = h, r.useEffect(() => {
                    let r;
                    if (!f && g) return r = function (e, t, o = {}, r = n) {
                        if (void 0 === window.IntersectionObserver && void 0 !== r) {
                            let n = e.getBoundingClientRect();
                            return t(r, {
                                isIntersecting: r,
                                target: e,
                                intersectionRatio: "number" == typeof o.threshold ? o.threshold : 0,
                                time: 0,
                                boundingClientRect: n,
                                intersectionRect: n,
                                rootBounds: n
                            }), () => {}
                        }
                        let {
                            id: s,
                            observer: c,
                            elements: u
                        } = function (e) {
                            let t = Object.keys(e).sort().filter(t => void 0 !== e[t]).map(t => {
                                    var o;
                                    return `${t}_${"root"===t?(o=e.root)?(l.has(o)||(a+=1,l.set(o,a.toString())),l.get(o)):"0":e[t]}`
                                }).toString(),
                                o = i.get(t);
                            if (!o) {
                                let n;
                                let r = new Map,
                                    l = new IntersectionObserver(t => {
                                        t.forEach(t => {
                                            var o;
                                            let i = t.isIntersecting && n.some(e => t.intersectionRatio >= e);
                                            e.trackVisibility && void 0 === t.isVisible && (t.isVisible = i), null == (o = r.get(t.target)) || o.forEach(e => {
                                                e(i, t)
                                            })
                                        })
                                    }, e);
                                n = l.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), o = {
                                    id: t,
                                    observer: l,
                                    elements: r
                                }, i.set(t, o)
                            }
                            return o
                        }(o), f = u.get(e) || [];
                        return u.has(e) || u.set(e, f), f.push(t), c.observe(e),
                            function () {
                                f.splice(f.indexOf(t), 1), 0 === f.length && (u.delete(e), c.unobserve(e)), 0 === u.size && (c.disconnect(), i.delete(s))
                            }
                    }(g, (e, t) => {
                        w({
                            inView: e,
                            entry: t
                        }), y.current && y.current(e, t), t.isIntersecting && u && r && (r(), r = void 0)
                    }, {
                        root: c,
                        rootMargin: s,
                        threshold: e,
                        trackVisibility: o,
                        delay: t
                    }, p), () => {
                        r && r()
                    }
                }, [Array.isArray(e) ? e.toString() : e, g, c, s, u, f, o, p, t]);
                let E = null == (v = b.entry) ? void 0 : v.target;
                r.useEffect(() => {
                    g || !E || u || f || w({
                        inView: !!d,
                        entry: void 0
                    })
                }, [g, E, u, f, d]);
                let _ = [m, b.inView, b.entry];
                return _.ref = _[0], _.inView = _[1], _.entry = _[2], _
            }
        }
    }
]);