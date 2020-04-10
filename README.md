WIP

# TODO
(2) Avoid injecting CSS constantly, find a way to have a cleaner injected CSS (might be sorted after #2)
(3) Load and save to storage
(4) Nicer UI design
(5) Add Typescript
(6) Other features as per legacy version like service workers etc

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
