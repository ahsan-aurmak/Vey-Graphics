# Vey Graphics Portfolio (Static HTML/CSS/JS)

This website is now a fully static site.

## Files

- `index.html`
- `styles.css`
- `script.js`
- `assets/veygraphics-logo.svg` (default logo fallback)

## Logo swap (your exact file)

If you want to use your exact supplied logo image, add it as:

- `assets/veygraphics-logo.png`

The site is already wired to prefer `veygraphics-logo.png` automatically.

## Run locally

You can open `index.html` directly, or run a simple static server:

```bash
python3 -m http.server 4173
```

Then open `http://127.0.0.1:4173/`.

## Deploy to GitHub Pages

1. Push to the `main` branch.
2. In GitHub, open `Settings` -> `Pages`.
3. Set `Source` to `GitHub Actions`.
4. The workflow at `.github/workflows/deploy-pages.yml` deploys this static site directly.
