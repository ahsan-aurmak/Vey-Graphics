# Vey Graphics Portfolio

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Start the Vite development server:

```bash
npm run dev -- --host 127.0.0.1 --port 4173
```

3. Open:

- http://127.0.0.1:4173/

## Important

Do **not** run this project with `python3 -m http.server` from the root folder.
This is a React + Vite app and requires Vite to transpile JSX.

## Deploy to GitHub Pages

1. Push this project to GitHub on the `main` branch.
2. In your repo, go to `Settings` -> `Pages`.
3. Under `Build and deployment`, set `Source` to `GitHub Actions`.
4. The included workflow at `.github/workflows/deploy-pages.yml` will build and publish on each push to `main`.

## If the page still does not load

- Check if port `4173` is in use:

```bash
lsof -nP -iTCP:4173 -sTCP:LISTEN
```

- Stop that process, then restart Vite.
