/*global chrome*/
import React from "react";
import "./App.css";

function App() {
  chrome.tabs.insertCSS(
    { code: "body { color: red!important}" },
    function() {}
  );

  return <div className="App">test</div>;
}

export default App;
