/*global chrome*/
window.Baseliner = {
  styleTagID: "baselinerStyleEl",

  setup: function() {
    // Add Baseliner class to body
    document.body.classList.add("baseliner");

    // Add Baseliner style tag
    if (!document.getElementById(this.styleTagID)) {
      const styleTag = document.createElement("style");
      styleTag.id = this.styleTagID;
      styleTag.appendChild(document.createTextNode("")); // WebKit hack :(
      document.head.appendChild(styleTag);
    }

    // TODO
    // this.loadUpFromStorage();

    // Tells extension we're ready
    chrome.runtime.sendMessage({ status: "ready" });
  },

  generateStyles: function(
    verticalRed,
    verticalBlue,
    verticalGreen,
    verticalOpacity,
    verticalBaseline,
    horizontalRed,
    horizontalBlue,
    horizontalGreen,
    horizontalOpacity,
    horizontalBaseline
  ) {
    const baselinerPaddingTop = 0; // Note: disabling this feature for now
    const sheet = document.getElementById(this.styleTagID).sheet;

    /*language=LESS*/
    const stylesArray = [
      `.baseliner:active:after {
        display: none; /* NOTE: this could be optional? */
      }`,
      `.baseliner {
        position: relative;
      }`,
      `.baseliner:after {
        position: absolute;
        width: auto;
        height: auto;
        z-index: 9999;
        content: "";
        display: block;
        pointer-events: none;
        right: 0;
        bottom: 0;
        left: 0;
        background: linear-gradient(
            rgba(${verticalRed}, ${verticalGreen}, ${verticalBlue}, ${verticalOpacity /
        100}) 1px,
            transparent 1px
          )
          left top / 100% ${verticalBaseline}px repeat-y,
          linear-gradient(
            to right, rgba(${horizontalRed}, ${horizontalGreen}, ${horizontalBlue}, ${horizontalOpacity /
        100}) 1px,
            transparent 1px
          )
          left top / ${horizontalBaseline}px 100% repeat-x;
        top: ${baselinerPaddingTop}px;
      }`,
      `body {
        height: auto;
      }`
    ];

    // Remove previous styles
    if (Array.from(sheet.cssRules).length > 0) {
      console.log(sheet.cssRules);
      Array.from(sheet.cssRules).forEach((rule, index) => {
        if (index < Array.from(sheet.cssRules).length) {
          sheet.deleteRule(index);
        }
      });
    }

    // Apply new styles
    stylesArray.forEach(styleRule => {
      sheet.insertRule(styleRule);
    });

    // Tells extension we're done updating
    chrome.runtime.sendMessage({ status: "updated" });
  },

  // TODO
  loadUpFromStorage: function() {
    const url = window.location.origin;

    chrome.storage.sync.get(url, data => {
      const item = data[url];
      if (item) {
        // All done!
        console.log(
          "%c Baseliner loaded from Storage 🗄 ",
          "background: #DFDFDF; color: #209C39"
        );
      }
      // Tells extension we got data
      chrome.runtime.sendMessage({ data: item });
    });
  },

  // TODO
  saveToStorage: function(objOfValues) {
    const url = window.location.origin;
    const save = {};
    save[url] = objOfValues;

    if (!!url) {
      chrome.storage.sync.set(save, function() {
        console.log(
          "%c Baseliner data saved to storage 💾",
          "background: #DFDFDF; color: #209C39"
        );
      });
    }
  }
};

Baseliner.setup();
