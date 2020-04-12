/*global chrome*/
import React from "react";
import "./Popup.css";
import hexToRGB from "./hexToRGB";
import rgbToHex from "./rgbToHex";

function Popup() {
  const ENV_EXTENSION = chrome && chrome.tabs;
  const [hasStartedUp, setHasStartedUp] = React.useState(false);
  const [statusLabel, setStatusLabel] = React.useState("loading...");
  const [enableVertical, setEnableVertical] = React.useState(true);
  const [colourVertical, setColourVertical] = React.useState("#ff0000");
  const [opacityVertical, setOpacityVertical] = React.useState(100);
  const [baselineVertical, setBaselineVertical] = React.useState(8);
  const [enableHorizontal, setEnableHorizontal] = React.useState(true);
  const [colourHorizontal, setColourHorizontal] = React.useState("#00ff00");
  const [opacityHorizontal, setOpacityHorizontal] = React.useState(100);
  const [baselineHorizontal, setBaselineHorizontal] = React.useState(8);

  function handleEnable(e) {
    const grid = e.currentTarget.dataset.grid;
    if (grid === "vertical") {
      setEnableVertical(e.currentTarget.value);
    } else {
      setEnableHorizontal(e.currentTarget.value);
    }
  }
  function handleColour(e) {
    const grid = e.currentTarget.dataset.grid;
    if (grid === "vertical") {
      setColourVertical(e.currentTarget.value);
    } else {
      setColourHorizontal(e.currentTarget.value);
    }
  }

  function handleBaseline(e) {
    const grid = e.currentTarget.dataset.grid;
    if (grid === "vertical") {
      setBaselineVertical(e.currentTarget.value);
    } else {
      setBaselineHorizontal(e.currentTarget.value);
    }
  }

  function handleOpacity(e) {
    const grid = e.currentTarget.dataset.grid;
    if (grid === "vertical") {
      setOpacityVertical(e.currentTarget.value);
    } else {
      setOpacityHorizontal(e.currentTarget.value);
    }
  }

  function handleRemoveButtonClick(e) {
    e.preventDefault();
    chrome.tabs.executeScript({
      code: `Baseliner.removeBaseliner()`
    });
  }

  React.useEffect(() => {
    /* Note: renders based on first load */
    if (ENV_EXTENSION) {
      // Load up Baseliner script
      chrome.tabs.executeScript(null, { file: "/baseliner.js" });

      // Start listening to messages
      chrome.runtime.onMessage.addListener(function(message) {
        switch (message?.status) {
          case "default":
            setStatusLabel("Baseliner extension ready with defaults");
            setHasStartedUp(true);
            break;

          case "update":
            setStatusLabel("Baseliner styles updated");
            setHasStartedUp(true);

            // Save to storage
            chrome.tabs.executeScript({
              code: `Baseliner.saveToStorage({
                verticalRed: ${message.objOfValues.verticalRed},
                verticalBlue: ${message.objOfValues.verticalBlue},
                verticalGreen: ${message.objOfValues.verticalGreen},
                verticalOpacity: ${message.objOfValues.verticalOpacity},
                verticalBaseline: ${message.objOfValues.verticalBaseline},
                horizontalRed: ${message.objOfValues.horizontalRed},
                horizontalBlue: ${message.objOfValues.horizontalBlue},
                horizontalGreen: ${message.objOfValues.horizontalGreen},
                horizontalOpacity: ${message.objOfValues.horizontalOpacity},
                horizontalBaseline: ${message.objOfValues.horizontalBaseline}
              })`
            });
            break;

          case "load":
            setStatusLabel("Baseliner loaded from storage");
            const {
              storage: {
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
              }
            } = message;

            setColourHorizontal(
              rgbToHex(horizontalRed, horizontalGreen, horizontalBlue)
            );
            setOpacityHorizontal(horizontalOpacity);
            setBaselineHorizontal(horizontalBaseline);
            setColourVertical(
              rgbToHex(verticalRed, verticalGreen, verticalBlue)
            );
            setOpacityVertical(verticalOpacity);
            setBaselineVertical(verticalBaseline);

            // Generate and apply styles
            chrome.tabs.executeScript({
              code: `Baseliner.generateStyles(${verticalRed}, ${verticalBlue}, ${verticalGreen}, ${verticalOpacity} ,${verticalBaseline}, ${horizontalRed}, ${horizontalBlue}, ${horizontalGreen}, ${horizontalOpacity} ,${horizontalBaseline})`
            });
            break;

          case "removed":
            setStatusLabel("Baseliner removed");
            break;

          default:
            // Note: needed at all?
            console.error("No recognized status message", message);
        }
      });
    }
  }, [ENV_EXTENSION]);

  React.useEffect(() => {
    /* Note: renders based on UI changes OR when it has started up */
    if (ENV_EXTENSION && hasStartedUp) {
      const colourVerticalRGB = hexToRGB(colourVertical);
      const vertical = {
        red: colourVerticalRGB.r,
        green: colourVerticalRGB.g,
        blue: colourVerticalRGB.b,
        opacity: opacityVertical,
        baseline: baselineVertical
      };
      const colourHorizontalRGB = hexToRGB(colourHorizontal);
      const horizontal = {
        red: colourHorizontalRGB.r,
        green: colourHorizontalRGB.g,
        blue: colourHorizontalRGB.b,
        opacity: opacityHorizontal,
        baseline: baselineHorizontal
      };

      // Generate and apply styles
      chrome.tabs.executeScript({
        code: `Baseliner.generateStyles(${vertical.red}, ${vertical.blue}, ${vertical.green}, ${vertical.opacity} ,${vertical.baseline}, ${horizontal.red}, ${horizontal.blue}, ${horizontal.green}, ${horizontal.opacity} ,${horizontal.baseline})`
      });
    }
  }, [
    hasStartedUp,
    colourVertical,
    colourHorizontal,
    opacityVertical,
    opacityHorizontal,
    baselineVertical,
    baselineHorizontal
  ]);

  return (
    <div className="Popup">
      <p>Status: {statusLabel}</p>
      <div className={"grid vertical"}>
        <h1>Vertical</h1>
        <div className={"row"}>
          <label htmlFor={"enableVertical"}>Enable</label>
          <input
            type="checkbox"
            id="enableVertical"
            checked={enableVertical}
            data-grid="vertical"
            onChange={handleEnable}
          />
        </div>
        <div className={"row"}>
          <label htmlFor={"colourVertical"}>Colour</label>
          <input
            type="color"
            id="colourVertical"
            value={colourVertical}
            data-grid="vertical"
            onChange={handleColour}
          />
        </div>

        <div className={"row"}>
          <label htmlFor={"opacityVertical"}>Opacity</label>
          <input
            type="range"
            min={0}
            max={100}
            id="opacityVertical"
            value={opacityVertical}
            data-grid="vertical"
            onChange={handleOpacity}
          />
          <span>{opacityVertical}%</span>
        </div>

        <div className={"row"}>
          <label htmlFor={"baselineVertical"}>Baseline</label>
          <input
            type="number"
            min={2}
            id="baselineVertical"
            value={baselineVertical}
            data-grid="vertical"
            onChange={handleBaseline}
          />
        </div>
      </div>
      <div className={"grid horizontal"}>
        <h1>Horizontal</h1>
        <div className={"row"}>
          <label htmlFor={"enableHorizontal"}>Enable</label>
          <input
            type="checkbox"
            id="enableHorizontal"
            checked={enableHorizontal}
            data-grid="horizontal"
            onChange={handleEnable}
          />
        </div>
        <div className={"row"}>
          <label htmlFor={"colourHorizontal"}>Colour</label>
          <input
            type="color"
            id="colourHorizontal"
            value={colourHorizontal}
            data-grid="horizontal"
            onChange={handleColour}
          />
        </div>

        <div className={"row"}>
          <label htmlFor={"opacityHorizontal"}>Opacity</label>
          <input
            type="range"
            min={0}
            max={100}
            id="opacityHorizontal"
            value={opacityHorizontal}
            data-grid="horizontal"
            onChange={handleOpacity}
          />
          <span>{opacityHorizontal}%</span>
        </div>

        <div className={"row"}>
          <label htmlFor={"baselineHorizontal"}>Baseline</label>
          <input
            type="number"
            min={2}
            id="baselineHorizontal"
            value={baselineHorizontal}
            data-grid="horizontal"
            onChange={handleBaseline}
          />
        </div>
      </div>
      <div>
        <button className={`buttonRemove`} onClick={handleRemoveButtonClick}>
          Remove Baseliner
        </button>
      </div>
    </div>
  );
}

export default Popup;
