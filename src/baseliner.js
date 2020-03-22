const Baseliner = {
  $body: null,

  setup: function() {
    // Fetch body element
    this.$body = document.getElementsByTagName("body")[0];

    // Add baseliner class to body
    this.$body.className += " baseliner";

    // Return OK or any other var needed to the extension UI
    return this.generateStyles();
  },

  generateStyles: function() {
    const baselinerPaddingTop = 0; // Note: disabling this feature for now
    const vertical = {
      red: 255,
      green: 0,
      blue: 0,
      opacity: 0.5,
      spacingBetweenLines: 5 // Minimum 2
    };
    const horizontal = {
      red: 0,
      green: 255,
      blue: 0,
      opacity: 0.5,
      spacingBetweenLines: 5 // Minimum 2
    };

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
            rgba(${vertical.red}, ${vertical.green}, ${vertical.blue}, ${vertical.opacity}) 1px,
            transparent 1px
          )
          left top / 100% ${vertical.spacingBetweenLines}px repeat-y,
          linear-gradient(
            to right, rgba(${horizontal.red}, ${horizontal.green}, ${horizontal.blue}, ${horizontal.opacity}) 1px,
            transparent 1px
          )
          left top / ${horizontal.spacingBetweenLines}px 100% repeat-x;
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

/**
 linear-gradient(rgba(255, 0, 0, 0.1) 1px, transparent 0px) left top / 100% 2px repeat-y,
 linear-gradient(to right, rgba(0, 255, 0, 0.9) 1px, transparent 1px) left top / 2px 100% repeat-x!important
 */
