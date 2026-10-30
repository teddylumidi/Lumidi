# Replit setup

## Run the site

Use the existing workflow or run:

```bash
npm run dev
```

The Express server binds to `0.0.0.0` and uses Replit's `PORT` environment
variable, falling back to port `5000` for local development. The Replit
preview is configured for port `5000`.

## Health check

The server exposes `GET /api/health`, which returns a JSON status response.

No application secrets are required. The live site is static (GitHub Pages);
this server only adds `/api/youtube` so the vlog shows video cards locally.
See README.md for the file layout and how to edit content.