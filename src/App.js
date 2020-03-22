/*global chrome*/
import React from "react";
import "./App.css";

function App() {
  const [status, setStatus] = React.useState("loading...");

  chrome.tabs.executeScript(null, { file: "/baseliner.js" }, function(success) {
    if (success) {
      // TODO - Baseliner is loaded, UI should reflect that
      setStatus("Loaded!");
    }

    // NOTE we could insert CSS to our .baseliner class like this:
    chrome.tabs.insertCSS({ code: "body { color: red!important}" }, function() {
      console.log("Test");
    });

    /**
     * TODO #1 add complete styles for baseliner and test if the CSS used is the best we can do
     * TODO #2 add UI to customise #1
     * TODO #3 ...
     */
  });

  return <div className="App">{status}</div>;
}

export default App;
