const Baseliner = {
  $body: null,

  setup: function() {
    // Fetch body element
    this.$body = document.getElementsByTagName("body")[0];

    // Add baseliner class to body
    this.$body.className += " baseliner";

    // Return OK or any other var needed to the extension UI
    return true;
  }
};

Baseliner.setup();
