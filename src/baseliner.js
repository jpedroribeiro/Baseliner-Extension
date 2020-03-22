const Baseliner = {
  $body: null,

  setup: function() {
    // Fetch body element
    this.$body = document.getElementsByTagName("body")[0];

    // Add baseliner class to body
    this.$body.className += " baseliner";
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
  }
};

Baseliner.setup();
