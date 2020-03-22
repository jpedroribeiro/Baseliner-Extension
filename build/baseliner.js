const Baseliner = {
  $body: null,

  setup: function() {
    // Fetch body element
    this.$body = document.getElementsByTagName("body")[0];

    // Add baseliner class to body
    this.$body.className += " baseliner";

    return true;
  }
};

Baseliner.setup();
