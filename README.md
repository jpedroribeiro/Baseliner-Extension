WIP

# TODO 
- Add Typescript
- Nicer UI design
- Other features as per legacy version like service workers etc

# Notes
- simplify code, it could all be done using insertCSS
- Double check if manifest's permission are OK due to chunk hashes being dynamic

# Project concept:
- on load add baseliner class
- React handles UI
- It generates a state
- On Apply, build CSS linear-gradient
- Insert updated class
- on unmount, removes class
