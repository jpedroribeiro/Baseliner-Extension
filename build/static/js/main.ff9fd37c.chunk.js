(window["webpackJsonpbaseliner-extension"] =
  window["webpackJsonpbaseliner-extension"] || []).push([
  [0],
  [
    ,
    ,
    ,
    ,
    function(e, n, o) {
      e.exports = o(11);
    },
    ,
    ,
    ,
    ,
    function(e, n, o) {},
    function(e, n, o) {},
    function(e, n, o) {
      "use strict";
      o.r(n);
      var t = o(0),
        a = o.n(t),
        i = o(2),
        r = o.n(i),
        c = (o(9), o(3));
      o(10);
      var s = function() {
        var e = a.a.useState("loading..."),
          n = Object(c.a)(e, 2),
          o = n[0],
          t = n[1];
        return (
          chrome.tabs.executeScript(null, { file: "/baseliner.js" }, function(
            e
          ) {
            e && t("Loaded!"),
              console.log(e),
              chrome.tabs.insertCSS(
                { code: "body { color: red!important}" },
                function() {
                  console.log("Test");
                }
              );
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
//# sourceMappingURL=main.ff9fd37c.chunk.js.map
