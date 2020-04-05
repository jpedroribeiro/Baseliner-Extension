/*global chrome*/
window.Baseliner = {
  setup: function() {
    // Add baseliner class to body
    document.body.classList.add("baseliner");

    // TODO on hold due to multi renders
    // this.loadUpFromStorage();
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

    /*language=LESS*/
    return `
      .baseliner {
        position: relative;
      }
      
      .baseliner:after {
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
      }
      
      .baseliner:active:after {
        display: none;
      }
  
      .baseliner:after {
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
      }
  
      .baseliner:after {
        top: ${baselinerPaddingTop}px;
      }
      
      body {
        height: auto;
      }
    `;
  },

  // TODO on hold due to multi renders
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

  // TODO on hold due to multi renders
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
