(window["webpackJsonpbaseliner-extension"] =
  window["webpackJsonpbaseliner-extension"] || []).push([
  [0],
  [
    ,
    ,
    ,
    ,
    function(e, a, t) {
      e.exports = t(11);
    },
    ,
    ,
    ,
    ,
    function(e, a, t) {},
    function(e, a, t) {},
    function(e, a, t) {
      "use strict";
      t.r(a);
      var n = t(0),
        r = t.n(n),
        c = t(3),
        l = t.n(c),
        o = (t(9), t(1)),
        i =
          (t(10),
          function(e) {
            e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(
              e,
              a,
              t,
              n
            ) {
              return a + a + t + t + n + n;
            });
            var a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
            return a
              ? {
                  r: parseInt(a[1], 16),
                  g: parseInt(a[2], 16),
                  b: parseInt(a[3], 16)
                }
              : null;
          });
      var s = function() {
        var e = chrome && chrome.tabs,
          a = r.a.useState(!0),
          t = Object(o.a)(a, 2),
          n = t[0],
          c = t[1],
          l = r.a.useState("loading..."),
          s = Object(o.a)(l, 2),
          u = s[0],
          d = s[1],
          m = r.a.useState("#ff0000"),
          g = Object(o.a)(m, 2),
          b = g[0],
          p = g[1],
          v = r.a.useState(100),
          f = Object(o.a)(v, 2),
          h = f[0],
          E = f[1],
          y = r.a.useState(8),
          w = Object(o.a)(y, 2),
          S = w[0],
          z = w[1],
          N = r.a.useState("#00ff00"),
          O = Object(o.a)(N, 2),
          j = O[0],
          C = O[1],
          T = r.a.useState(100),
          x = Object(o.a)(T, 2),
          B = x[0],
          H = x[1],
          V = r.a.useState(8),
          k = Object(o.a)(V, 2),
          F = k[0],
          I = k[1];
        function $(e) {
          "vertical" === e.currentTarget.dataset.grid
            ? p(e.currentTarget.value)
            : C(e.currentTarget.value);
        }
        function J(e) {
          "vertical" === e.currentTarget.dataset.grid
            ? z(e.currentTarget.value)
            : I(e.currentTarget.value);
        }
        function W(e) {
          "vertical" === e.currentTarget.dataset.grid
            ? E(e.currentTarget.value)
            : H(e.currentTarget.value);
        }
        return (
          r.a.useEffect(
            function() {
              e &&
                (chrome.tabs.executeScript(null, { file: "/baseliner.js" }),
                chrome.runtime.onMessage.addListener(function(e) {
                  switch (null === e || void 0 === e ? void 0 : e.status) {
                    case "ready":
                      c(!1);
                      break;
                    case "foo":
                      break;
                    default:
                      console.error("No recognized status message", e);
                  }
                }));
            },
            [e]
          ),
          r.a.useEffect(
            function() {
              if (e && !n) {
                var a = i(b),
                  t = {
                    red: a.r,
                    green: a.g,
                    blue: a.b,
                    opacity: h,
                    baseline: S
                  },
                  r = i(j),
                  c = {
                    red: r.r,
                    green: r.g,
                    blue: r.b,
                    opacity: B,
                    baseline: F
                  };
                chrome.tabs.executeScript(
                  {
                    code: "Baseliner.generateStyles("
                      .concat(t.red, ", ")
                      .concat(t.blue, ", ")
                      .concat(t.green, ", ")
                      .concat(t.opacity, " ,")
                      .concat(t.baseline, ", ")
                      .concat(c.red, ", ")
                      .concat(c.blue, ", ")
                      .concat(c.green, ", ")
                      .concat(c.opacity, " ,")
                      .concat(c.baseline, ")")
                  },
                  function(e) {
                    e[0] &&
                      (d("Updating Baseliner"),
                      chrome.tabs.insertCSS({ code: e[0] }, function() {
                        d("Baseliner styles updated");
                      }));
                  }
                );
              }
            },
            [n, b, j, h, B, S, F]
          ),
          r.a.createElement(
            "div",
            { className: "Popup" },
            r.a.createElement("p", null, "Status: ", u),
            r.a.createElement(
              "div",
              { className: "grid vertical" },
              r.a.createElement("h1", null, "Vertical"),
              r.a.createElement(
                "div",
                { className: "row" },
                r.a.createElement(
                  "label",
                  { htmlFor: "colourVertical" },
                  "Colour"
                ),
                r.a.createElement("input", {
                  type: "color",
                  id: "colourVertical",
                  value: b,
                  "data-grid": "vertical",
                  onChange: $
                })
              ),
              r.a.createElement(
                "div",
                { className: "row" },
                r.a.createElement(
                  "label",
                  { htmlFor: "opacityVertical" },
                  "Opacity"
                ),
                r.a.createElement("input", {
                  type: "range",
                  min: 0,
                  max: 100,
                  id: "opacityVertical",
                  value: h,
                  "data-grid": "vertical",
                  onChange: W
                }),
                r.a.createElement("span", null, h, "%")
              ),
              r.a.createElement(
                "div",
                { className: "row" },
                r.a.createElement(
                  "label",
                  { htmlFor: "baselineVertical" },
                  "Baseline"
                ),
                r.a.createElement("input", {
                  type: "number",
                  min: 2,
                  id: "baselineVertical",
                  value: S,
                  "data-grid": "vertical",
                  onChange: J
                })
              )
            ),
            r.a.createElement(
              "div",
              { className: "grid horizontal" },
              r.a.createElement("h1", null, "Horizontal"),
              r.a.createElement(
                "div",
                { className: "row" },
                r.a.createElement(
                  "label",
                  { htmlFor: "colourHorizontal" },
                  "Colour"
                ),
                r.a.createElement("input", {
                  type: "color",
                  id: "colourHorizontal",
                  value: j,
                  "data-grid": "horizontal",
                  onChange: $
                })
              ),
              r.a.createElement(
                "div",
                { className: "row" },
                r.a.createElement(
                  "label",
                  { htmlFor: "opacityHorizontal" },
                  "Opacity"
                ),
                r.a.createElement("input", {
                  type: "range",
                  min: 0,
                  max: 100,
                  id: "opacityHorizontal",
                  value: B,
                  "data-grid": "horizontal",
                  onChange: W
                }),
                r.a.createElement("span", null, B, "%")
              ),
              r.a.createElement(
                "div",
                { className: "row" },
                r.a.createElement(
                  "label",
                  { htmlFor: "baselineHorizontal" },
                  "Baseline"
                ),
                r.a.createElement("input", {
                  type: "number",
                  min: 2,
                  id: "baselineHorizontal",
                  value: F,
                  "data-grid": "horizontal",
                  onChange: J
                })
              )
            )
          )
        );
      };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      l.a.render(r.a.createElement(s, null), document.getElementById("root")),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    }
  ],
  [[4, 1, 2]]
]);
//# sourceMappingURL=main.18ec07ca.chunk.js.map
