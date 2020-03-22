/*global chrome*/
import React from "react";
import "./App.css";

function App() {
  const ENV_EXTENSION = !!chrome;
  const [status, setStatus] = React.useState("loading...");

  if (ENV_EXTENSION) {
    chrome.tabs.executeScript(null, { file: "/baseliner.js" }, function(
      initialStyles
    ) {
      if (typeof initialStyles[0] === "string") {
        // Adding baseliner styles to class
        chrome.tabs.insertCSS(
          {
            code: initialStyles[0]
          },
          function() {
            setStatus("Baseliner styles updated");
          }
        );
      }

      /**
       * TODO #1 add complete styles for baseliner and test if the CSS used is the best we can do
       * TODO #2 add UI to customise #1
       * TODO #3 ...
       */
    });
  }

  return <div className="App">{status}</div>;
}

export default App;
