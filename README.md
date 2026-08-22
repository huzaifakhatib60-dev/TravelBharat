# TravelBharat

TravelBharat is a React/Vite client with an Express and MongoDB API. It is configured for a single Vercel deployment: the Vite app is served statically and `/api/*` is handled by the Vercel function in `api/index.js`.

## Local development

1. Copy `backend/.env.example` to `backend/.env` and set `MONGODB_URI` and `JWT_SECRET`.
2. Install dependencies:

   ```sh
   npm --prefix backend ci
   npm --prefix frontend ci
   ```

3. In separate terminals, run:

   ```sh
   npm --prefix backend run dev
   npm --prefix frontend run dev
   ```

The Vite development server proxies `/api` requests to `http://localhost:5000`.

## GitHub and Vercel deployment

1. Create a GitHub repository, then commit and push this project. Do not commit `backend/.env`.
2. In Vercel, import that repository with its root directory set to the repository root.
3. Add these Production, Preview, and Development environment variables in Vercel:
   - `MONGODB_URI`
   - `JWT_SECRET` (use a long, random value)
4. Deploy. `vercel.json` installs both packages, builds `frontend/dist`, sends `/api/*` to the serverless API, and rewrites other routes to the React entry point.

GitHub Actions validates linting, the client build, and server-side syntax on pushes and pull requests.

## Verification commands

```sh
npm --prefix frontend run lint
npm --prefix frontend run build
npm --prefix backend test
node --check api/index.js
```
