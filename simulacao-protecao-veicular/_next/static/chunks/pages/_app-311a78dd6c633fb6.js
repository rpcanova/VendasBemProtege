(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [888], {
        1118: function (t, e, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function () {
                return a(8484)
            }])
        },
        8484: function (t, e, a) {
            "use strict";
            a.r(e);
            var n = a(5893);
            a(7475);
            var r = a(7294);
            a(6745), a(8415), a(9935), a(4579);
            var i = a(1785),
                d = a.n(i);
            e.default = function (t) {
                let {
                    Component: e,
                    pageProps: a
                } = t;
                return (0, r.useEffect)(() => {
                    d().initialize({
                        gtmId: "GTM-TBZ95GK"
                    })
                }, []), (0, n.jsx)(e, {
                    ...a
                })
            }
        },
        9935: function () {},
        6745: function () {},
        8415: function () {},
        4579: function () {},
        7475: function () {},
        6421: function (t, e, a) {
            "use strict";
            var n, r = (n = a(6425)) && n.__esModule ? n : {
                default: n
            };
            t.exports = {
                tags: function (t) {
                    var e = t.id,
                        a = t.events,
                        n = t.dataLayer,
                        i = t.dataLayerName,
                        d = t.preview,
                        o = "&gtm_auth=" + t.auth,
                        u = "&gtm_preview=" + d;
                    e || (0, r.default)("GTM Id is required");
                    var c = "\n      (function(w,d,s,l,i){w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', " + JSON.stringify(a).slice(1, -1) + "});\n        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\n        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'" + o + u + "&gtm_cookies_win=x';\n        f.parentNode.insertBefore(j,f);\n      })(window,document,'script','" + i + "','" + e + "');";
                    return {
                        iframe: '\n      <iframe src="https://www.googletagmanager.com/ns.html?id=' + e + o + u + '&gtm_cookies_win=x"\n        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>',
                        script: c,
                        dataLayerVar: this.dataLayer(n, i)
                    }
                },
                dataLayer: function (t, e) {
                    return "\n      window." + e + " = window." + e + " || [];\n      window." + e + ".push(" + JSON.stringify(t) + ")"
                }
            }
        },
        8676: function (t, e, a) {
            "use strict";
            var n, r = (n = a(6421)) && n.__esModule ? n : {
                default: n
            };
            t.exports = {
                dataScript: function (t) {
                    var e = document.createElement("script");
                    return e.innerHTML = t, e
                },
                gtm: function (t) {
                    var e = r.default.tags(t);
                    return {
                        noScript: function () {
                            var t = document.createElement("noscript");
                            return t.innerHTML = e.iframe, t
                        },
                        script: function () {
                            var t = document.createElement("script");
                            return t.innerHTML = e.script, t
                        },
                        dataScript: this.dataScript(e.dataLayerVar)
                    }
                },
                initialize: function (t) {
                    var e = t.gtmId,
                        a = t.events,
                        n = t.dataLayer,
                        r = t.dataLayerName,
                        i = t.auth,
                        d = t.preview,
                        o = this.gtm({
                            id: e,
                            events: void 0 === a ? {} : a,
                            dataLayer: n || void 0,
                            dataLayerName: void 0 === r ? "dataLayer" : r,
                            auth: void 0 === i ? "" : i,
                            preview: void 0 === d ? "" : d
                        });
                    n && document.head.appendChild(o.dataScript), document.head.insertBefore(o.script(), document.head.childNodes[0]), document.body.insertBefore(o.noScript(), document.body.childNodes[0])
                },
                dataLayer: function (t) {
                    var e = t.dataLayer,
                        a = t.dataLayerName,
                        n = void 0 === a ? "dataLayer" : a;
                    if (window[n]) return window[n].push(e);
                    var i = r.default.dataLayer(e, n),
                        d = this.dataScript(i);
                    document.head.insertBefore(d, document.head.childNodes[0])
                }
            }
        },
        1785: function (t, e, a) {
            "use strict";
            var n, r = (n = a(8676)) && n.__esModule ? n : {
                default: n
            };
            t.exports = r.default
        },
        6425: function (t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function (t) {
                console.warn("[react-gtm]", t)
            }
        }
    },
    function (t) {
        var e = function (e) {
            return t(t.s = e)
        };
        t.O(0, [774, 179], function () {
            return e(1118), e(880)
        }), _N_E = t.O()
    }
]);