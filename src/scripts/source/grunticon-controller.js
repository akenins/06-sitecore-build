let grunticonPath = 'http://localhost:3000/assets/icons/',
  svgPath,
  pngPath,
  fallbackPath

!(function () {
  function e(e, t) {
    function n() {
      !o && t && ((o = !0), t.call(e))
    }
    var o
    e.addEventListener && e.addEventListener('load', n),
      e.attachEvent && e.attachEvent('onload', n),
      'isApplicationInstalled' in navigator &&
        'onloadcssdefined' in e &&
        e.onloadcssdefined(n)
  }
  !(function (e) {
    'use strict'
    var t = function (t, n, o) {
      function r(e) {
        if (d.body) return e()
        setTimeout(function () {
          r(e)
        })
      }
      function a() {
        c.addEventListener && c.removeEventListener('load', a),
          (c.media = o || 'all')
      }
      var i,
        d = e.document,
        c = d.createElement('link')
      if (n) i = n
      else {
        var s = (d.body || d.getElementsByTagName('head')[0]).childNodes
        i = s[s.length - 1]
      }
      var u = d.styleSheets
      ;(c.rel = 'stylesheet'),
        (c.href = t),
        (c.media = 'only x'),
        r(function () {
          i.parentNode.insertBefore(c, n ? i : i.nextSibling)
        })
      var l = function (e) {
        for (var t = c.href, n = u.length; n--; )
          if (u[n].href === t) return e()
        setTimeout(function () {
          l(e)
        })
      }
      return (
        c.addEventListener && c.addEventListener('load', a),
        (c.onloadcssdefined = l),
        l(a),
        c
      )
    }
    'undefined' != typeof exports ? (exports.loadCSS = t) : (e.loadCSS = t)
  })('undefined' != typeof global ? global : this),
    (function (t) {
      var n = function (o, r) {
        'use strict'
        if (o && 3 === o.length) {
          var a = t.navigator,
            i = t.document,
            d = t.Image,
            c = !(
              !i.createElementNS ||
              !i.createElementNS('http://www.w3.org/2000/svg', 'svg')
                .createSVGRect ||
              !i.implementation.hasFeature(
                'http://www.w3.org/TR/SVG11/feature#Image',
                '1.1'
              ) ||
              (t.opera && -1 === a.userAgent.indexOf('Chrome')) ||
              -1 !== a.userAgent.indexOf('Series40')
            ),
            s = new d()
          ;(s.onerror = function () {
            ;(n.method = 'png'), (n.href = o[2]), loadCSS(o[2])
          }),
            (s.onload = function () {
              var t = 1 === s.width && 1 === s.height,
                a = o[t && c ? 0 : t ? 1 : 2]
              ;(n.method = t && c ? 'svg' : t ? 'datapng' : 'png'),
                (n.href = a),
                e(loadCSS(a), r)
            }),
            (s.src =
              'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=='),
            (i.documentElement.className += ' grunticon')
        }
      }
      ;(n.loadCSS = loadCSS), (n.onloadCSS = e), (t.grunticon = n)
    })(this),
    (function (e, t) {
      'use strict'
      var n,
        o = t.document,
        r = function (e) {
          if (
            o.attachEvent
              ? 'complete' === o.readyState
              : 'loading' !== o.readyState
          )
            e()
          else {
            var t = !1
            o.addEventListener(
              'readystatechange',
              function () {
                t || ((t = !0), e())
              },
              !1
            )
          }
        },
        a = function (e) {
          return t.document.querySelector('link[href$="' + e + '"]')
        },
        i = function (e, t) {
          if (n && !t) return n
          n = {}
          var o, r, a, i, d, c
          if (!(o = e.sheet)) return n
          r = o.cssRules ? o.cssRules : o.rules
          for (var s = 0; s < r.length; s++)
            (a = r[s].cssText),
              (i = 'grunticon:' + r[s].selectorText),
              (d = a.split(');')[0].match(/US\-ASCII\,([^"']+)/)) &&
                d[1] &&
                ((c = decodeURIComponent(d[1])), (n[i] = c))
          return n
        },
        d = function (e, t) {
          var n, r, a, i, d
          t ? (n = e) : ((t = e), (n = o)), (i = 'data-grunticon-embed')
          for (var c in t) {
            d = c.slice('grunticon:'.length)
            try {
              r = n.querySelectorAll(d)
            } catch (e) {
              continue
            }
            a = []
            for (var s = 0; s < r.length; s++)
              null !== r[s].getAttribute(i) && a.push(r[s])
            if (a.length)
              for (s = 0; s < a.length; s++)
                (a[s].innerHTML = t[c]),
                  (a[s].style.backgroundImage = 'none'),
                  a[s].removeAttribute(i)
          }
          return a
        },
        c = function (t, n) {
          'svg' === e.method &&
            r(function () {
              var o = i(a(e.href))
              'function' == typeof n ? (d(t, o), n()) : d(o),
                'function' == typeof t && t()
            })
        }
      ;(e.embedIcons = d),
        (e.getCSS = a),
        (e.getIcons = i),
        (e.ready = r),
        (e.svgLoadedCallback = c),
        (e.embedSVG = c)
    })(grunticon, this),
    (function (e, t) {
      'use strict'
      var n = t.document,
        o = function (e, n) {
          var o = new t.XMLHttpRequest()
          return (
            'withCredentials' in o
              ? o.open('GET', e, !0)
              : void 0 !== t.XDomainRequest &&
                ((o = new t.XDomainRequest()), o.open('GET', e)),
            n && (o.onload = n),
            o.send(),
            o
          )
        },
        r = function (t) {
          'svg' === e.method &&
            e.ready(function () {
              o(e.href, function () {
                var o = n.createElement('style')
                o.innerHTML = this.responseText
                var r = e.getCSS(e.href)
                r &&
                  (r.parentNode.insertBefore(o, r),
                  r.parentNode.removeChild(r),
                  e.embedIcons(e.getIcons(o)),
                  'function' == typeof t && t())
              })
            })
        }
      ;(e.ajaxGet = o), (e.svgLoadedCORSCallback = r), (e.embedSVGCors = r)
    })(grunticon, this)
})()
function doGrunticon() {
  svgPath = grunticonPath + 'icons.data.svg.css'
  pngPath = grunticonPath + 'icons.data.png.css'
  fallbackPath = grunticonPath + 'icons.fallback.css'
  console.log(svgPath)
}

grunticon([svgPath, pngPath, fallbackPath], function () {
  grunticon.svgLoadedCORSCallback()
})

document.addEventListener('DOMContentLoaded', doGrunticon)
