import { copyFileSync } from 'node:fs'

// GitHub Pages (and similar static hosts) only serve files that exist, so
// deep links like /agents would 404. Copying the SPA shell to 404.html lets
// the host fall back to the app, where the router renders the right page.
copyFileSync('dist/index.html', 'dist/404.html')