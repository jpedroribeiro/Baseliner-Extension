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
    const red = 255;
    const green = 0;
    const blue = 0;
    const opacity = 1;
    const height = 1;
    const top = 40;

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
            rgba(${red}, ${green}, ${blue}, ${opacity}) 1px,
            transparent 1px
          )
          left top / 1px ${height}px;
      }
  
      .baseliner:after {
        top: ${top}px;
      }
      
      body {
        height: auto;
      }
    `;
  }
};

Baseliner.setup();
