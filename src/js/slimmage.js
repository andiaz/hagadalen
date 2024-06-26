﻿/* Slimmage 0.2.1, use with ImageResizer. MIT/Apache2 dual licensed by Imazen */

(function (b) {
    function p() { b.slimmage.verbose && (b.console && b.console.log) && b.console.log.apply(b.console, arguments) } var a = window.slimmage || {}; window.slimmage = a; void 0 === a.verbose && (a.verbose = !0); void 0 === a.tryWebP && (a.tryWebP = !1); a.h = function () { if (a.tryWebP && !a.e) { a.e = !0; var e = new Image; e.onload = e.onerror = function () { a.d = 2 == e.height }; e.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA" } }; a.j = function (a) {
        var c = "undefined" != typeof window.getComputedStyle &&
        window.getComputedStyle(a, null).getPropertyValue("max-width"); !c && a.currentStyle && (c = a.currentStyle["max-width".replace(/([a-z])\-([a-z])/, function (a, e, c) { return e + c.toUpperCase() })] || a.currentStyle["max-width"]); return c
    }; a.i = function (e) { var c = a.j(e); if ("px" == c.slice(-2)) return parseFloat(c.slice(0, -2)); var d = document.createElement("div"); d.style.overflow = d.style.visibility = "hidden"; e.parentNode.appendChild(d); d.style.width = c; c = d.offsetWidth; e.parentNode.removeChild(d); return c }; a.c = function (a) {
        for (var c =
        [], d = a.length >>> 0; d--;) c[d] = a[d]; return c
    }; a.g = function (e, c, d) { var b = window.devicePixelRatio || 1, n = 1.49 < b ? 90 : 80; a.d && (n = 1.49 < b ? 65 : 78); d = Math.min(2048, d * b); d = d - d % 160 + 160; b = e.getAttribute("data-pixel-width") | 0; d > b && (c = c.replace(/width=\d+/i, "width=" + d).replace(/quality=[0-9]+/i, "quality=" + n), a.d && (c = c.replace(/format=[a-z]+/i, "format=webp")), e.src = c, e.setAttribute("data-pixel-width", d), p("Slimming: updating " + c)) }; a.f = function (b, c) { a.g(b, c, a.i(b)) }; a.b = function (e) {
        0 < a.a && b.clearTimeout(a.a); a.a = 0; if (e &&
        0 < e) a.a = b.setTimeout(a.b, e); else {
            e = (new Date).getTime(); for (var c = 0, d = a.c(b.document.getElementsByTagName("noscript")), k = 0, n = d.length; k < n; k++) {
                var f = d[k]; if (null !== f.getAttribute("data-slimmage")) {
                    var m = b.document.createElement("div"), l = f.textContent || f.innerHTML; if (l && 0 != l.replace(/[\s\t\r\n]+/, "").length) m.innerHTML = l.replace(/\s+src\s*=\s*(['"])/i, " data-src=$1").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&"); else {
                        for (var l = new Image, h = 0; h < f.attributes.length; h++) {
                            var g = f.attributes[h];
                            g && (g.specified && 0 == g.name.indexOf("data-img-")) && l.setAttribute(g.name.slice(9 - g.name.length), g.value)
                        } m.appendChild(l)
                    } m = m.getElementsByTagName("img"); l = 0; for (h = m.length; l < h; l++) g = m[l], null !== g.src && 0 < g.src.length && (g.setAttribute("data-src", g.src), g.src = ""), g.setAttribute("data-slimmage", !0), f.parentNode.insertBefore(g, f), c++; f.parentNode.removeChild(f)
                }
            } d = 0; f = a.c(b.document.getElementsByTagName("img")); k = 0; for (n = f.length; k < n; k++) null !== f[k].getAttribute("data-slimmage") && (m = f[k].getAttribute("data-src") ||
            f[k].src, a.f(f[k], m), d++); p("Slimmage: restored " + c + " images from noscript tags; sizing " + d + " images. " + ((new Date).getTime() - e) + "ms")
        }
    }; var h = a.b; b.addEventListener ? (b.addEventListener("resize", function () { h(500) }, !1), b.addEventListener("DOMContentLoaded", function () { h(); b.removeEventListener("load", h, !1) }, !1), b.addEventListener("load", h, !1)) : b.attachEvent && b.attachEvent("onload", h); a.h()
})(this);
