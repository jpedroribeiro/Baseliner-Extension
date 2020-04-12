WIP

# TODO
(3) Enable/Disable UI
(4) Nicer UI design
(5) Add Typescript
(6) Other features as per legacy version like service workers etc
(7) GA events?
(8) Domain and website?

# Notes
- Double check if manifest's permission are OK due to chunk hashes being dynamic

# Project concept:
- on load add baseliner class
- React handles UI
- It generates a state
- On Apply, build CSS linear-gradient
- Insert updated class
- on unmount, removes class

# Future ideas
- Use chrome.tabs.insertCSS instead of creating style tag: the caveat is that removeCSS is not supported in Chrome yet (FF only)