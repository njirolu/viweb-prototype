# be-wasm

Container-only notes app: frontend + backend berjalan di dalam WebContainer preview.

Frontend stack:
- `frontend/runner`: Vite + React + TypeScript + Tailwind + shadcn
- `frontend/notes`: Vite + React + TypeScript + Tailwind + shadcn

## Arsitektur

- Host server (`npm run dev`) hanya sebagai launcher runner.
- App bisnis (UI notes + REST API + DB) hanya aktif saat `WEB_CONTAINER_TARGET=1` di dalam WebContainer.
- Host tidak mengekspos direct UI app atau API bisnis.

## Host Routes (non-container)

- `GET /` -> halaman WebContainer runner
- `GET /webcontainer-runner/*` -> asset runner
- `GET /api/v1/*` -> `404 Not Found` (disabled di host)
- Semua route non-API lain -> redirect ke `/`

## Container Runtime Routes (`WEB_CONTAINER_TARGET=1`)

- `GET /` -> UI notes app
- `GET /api/v1/health`
- `GET /api/v1/notes?page=1&limit=10&search=keyword`
- `GET /api/v1/notes/:id`
- `POST /api/v1/notes`
- `PATCH /api/v1/notes/:id`
- `DELETE /api/v1/notes/:id`

## Menjalankan Lokal

```bash
npm install
npm run build:runner
npm run dev
```

Buka `http://localhost:3000/` lalu jalankan app melalui preview iframe WebContainer.

## Alur Runner (`/`)

1. Boot `@webcontainer/api`
2. Mount snapshot project runtime
3. Jalankan `npm install`
4. Jalankan `npm run dev:container` (Express API + Vite Notes dev server di port 4173)
5. Buka URL preview dari WebContainer

Runner UI berbentuk workspace mirip VSCode:
- kiri: file tree (live dari filesystem WebContainer)
- tengah: editor Monaco (multi-tab dasar, simpan `Ctrl/Cmd+S`)
- kanan atas: web preview
- kanan bawah: terminal interaktif (xterm)

## Build Runner Assets

```bash
npm run build:runner
```

Perintah ini akan:

- rebuild `public/app.js` + `public/styles.css` (Notes React bundle)
- regenerate `frontend/runner/src/generated-files.ts`
- rebuild `public/webcontainer-runner/runner.js`
- rebuild `public/webcontainer-runner/runner.css`

## Browser Requirements

- `Cross-Origin-Opener-Policy: same-origin`
- `Cross-Origin-Embedder-Policy: require-corp`
- `SharedArrayBuffer` tersedia
- HTTPS atau localhost

## API Request Body (Create/Patch)

```json
{
  "data": {
    "type": "notes",
    "attributes": {
      "title": "My note",
      "content": "Optional content"
    }
  }
}
```

## Troubleshooting

- Jika runner gagal start, cek panel terminal log di halaman runner.
- Jika asset runner hilang, jalankan `npm run build:runner`.
- Jika compatibility gagal, pastikan berjalan di localhost/HTTPS dengan COOP/COEP aktif.

## Test

```bash
npm test
```
