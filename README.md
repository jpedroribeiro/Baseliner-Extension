WIP

# Workflow
On every build we need to:
- copy baseliner.js from `src` to `build`
- might need to update `web_accessible_resources` with main.js chunk hash

# TODO
- Find a way to automate workflow above
- Double check if manifest's permission are OK 

# Notes
- simplify code, it could all be done using insertCSS

# Project concept:
- on load add baseliner class
- React handles UI
- It generates a state
- On Apply, build CSS linear-gradient
- Insert updated class
- on unmount, removes class
