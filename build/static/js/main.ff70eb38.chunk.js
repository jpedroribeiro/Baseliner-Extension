(window["webpackJsonpbaseliner-extension"] =
  window["webpackJsonpbaseliner-extension"] || []).push([
  [0],
  [
    ,
    ,
    ,
    ,
    function(e, n, t) {
      e.exports = t(11);
    },
    ,
    ,
    ,
    ,
    function(e, n, t) {},
    function(e, n, t) {},
    function(e, n, t) {
      "use strict";
      t.r(n);
      var o = t(0),
        a = t.n(o),
        i = t(2),
        r = t.n(i),
        c = (t(9), t(3));
      t(10);
      var s = function() {
        var e = !!chrome,
          n = a.a.useState("loading..."),
          t = Object(c.a)(n, 2),
          o = t[0],
          i = t[1];
        return (
          e &&
            chrome.tabs.executeScript(null, { file: "/baseliner.js" }, function(
              e
            ) {
              "string" === typeof e[0] &&
                chrome.tabs.insertCSS({ code: e[0] }, function() {
                  i("Baseliner styles updated");
                });
            }),
          a.a.createElement("div", { className: "App" }, o)
        );
      };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      r.a.render(a.a.createElement(s, null), document.getElementById("root")),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    }
  ],
  [[4, 1, 2]]
]);
//# sourceMappingURL=main.ff70eb38.chunk.js.map
