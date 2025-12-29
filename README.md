# Post To Null

A minimal server that accepts POSTed data and discards it without saving.

## Quick Start

Install dependencies and start the server (pnpm is assumed):

```bash
pnpm install
pnpm start
```

## Usage

Send a file with multipart/form-data to verify behavior. Example using curl:

```bash
curl -v -F "file=@/path/to/file" http://localhost:3000/null
```

The server does not persist uploaded files. Incoming upload metadata is logged to the server's standard output and the request is discarded.

## Notes

- The endpoint implemented in `src/server.js` listens on port `3000` by default and exposes `POST /null`.
- `multer` is used to parse multipart/form-data; ensure requests use `multipart/form-data` with proper boundaries.
