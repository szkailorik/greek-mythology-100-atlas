# Deity Portrait Assets

This folder contains web-ready generated portrait assets used by the site.

- `*.jpg`: optimized website images loaded by `app.js`.
- `*.png`: local intermediate exports from image generation and conversion; ignored by Git.

The site checks `rasterPortraitIds` in `app.js`. If a deity id is listed there, the page loads `assets/deities/{id}.jpg`; otherwise it falls back to the built-in generated SVG portrait.
