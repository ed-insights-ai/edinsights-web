# EDInsights.AI web site

The home page for EDInsights.AI and the launch point for Touchline, Touchline Desk and Touchline Learn. It is served at [edinsights.ai](https://edinsights.ai).

The site is one static page, `index.html`, with its styles, scripts and map inline. Vite serves it in development and copies it, with everything in `public/`, into `dist/` for production. No framework.

## Develop

```sh
npm install
npm run dev       # http://localhost:8080
npm run build     # writes dist/
npm run preview   # serves dist/
```

## Deploy

Every push to `main` builds the site and publishes `dist/` to GitHub Pages (`.github/workflows/deploy.yml`). The workflow writes the `CNAME` for edinsights.ai.

## Notes

- Motion plays once as each part scrolls into view. With reduced motion, or without JavaScript, the page shows its final state.
- The Desk early-access form opens the visitor's email app with a note to founder@edinsights.ai. Nothing is stored.
- `404.html` sends old links, such as `/about`, to the home page.
