# Overview

Uses [visjs network](https://visjs.github.io/vis-network/docs/network/) to render a family tree.

# Usage
1. Clone this project
2. Replace `<root>/public/tree.json`
3. Run `npm start`

# tree.json Structure
* Order does not matter (e.g. children before parents, or vice versa)
* Object with integer keys, and object values with shape:
  * `name` (string), `relations` (object), `metadata` (object) - all three required
  * `relations` and `metadata` keys may be empty objects (i.e. `{}`)
