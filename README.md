# be-wasm

WebContainer runner + notes app dalam monorepo npm workspaces.

Frontend stack:
- `app`: Vite + React + TypeScript + Tailwind + shadcn (runner UI)
- `packages/client`: Vite + React + TypeScript + Tailwind + shadcn (notes UI)

Workspace layout:
- `app`: WebContainer runner UI + snapshot generator
- `packages/client`: notes frontend
- `packages/server`: Express + SQLite API
- `packages/shared`: shared UI components/utilities/styles

## Arsitektur

- `GET /` selalu menampilkan runner shell dari `public/index.html`.
- API `/api/v1/*` selalu aktif di server.
- Frontend bisnis notes tetap dibuka dari preview iframe WebContainer (Vite dev server port `4173`).

## Runtime Routes

- `GET /` -> halaman WebContainer runner (single shell)
- `GET /dist/webcontainer-runner/*` -> asset runner
- `GET /api/v1/health`
- `GET /api/v1/notes?page=1&limit=10&search=keyword`
- `GET /api/v1/notes/:id`
- `POST /api/v1/notes`
- `PATCH /api/v1/notes/:id`
- `DELETE /api/v1/notes/:id`
- Semua route non-API lain -> redirect ke `/`

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

- rebuild `dist/app.js` + `dist/styles.css` (Notes React bundle)
- regenerate `app/src/generated-files.ts`
- rebuild `dist/webcontainer-runner/runner.js`
- rebuild `dist/webcontainer-runner/runner.css`

`public/` dipakai sebagai source template HTML (`index.html`), sedangkan hasil build runtime berada di `dist/`.

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

`npm test` otomatis menjalankan build dependency frontend (`pretest`) agar test tetap valid saat `dist/` tidak di-commit.
