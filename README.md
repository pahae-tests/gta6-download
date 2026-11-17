# Vice City — Fan-made download interface

A Next.js 14 Pages Router project styled with Tailwind CSS and lucide-react.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000/home

## Production build

```bash
npm run build
npm start
```

## Routes

- `/home` — landing page; `/home?error=true` shows the error modal
- `/downloads` — game catalogue
- `/download?game=gta6` — 5-second wait and 6-digit code verification
- `/gta` — 10-second wait
- `/extensions` — package format selection
- `/startdownload` — demo file download
- `/started` — success screen

The authentication page calls `https://authcode.vercel.app/api/code` and compares the returned `code` value. This client-side check is suitable only for a UI demonstration, not real authentication: a production system should verify codes server-side and protect the endpoint.

No GTA 6 game files or executable are included. The download is a harmless `public/gta6-demo.txt` placeholder. Replace it only with software you have the rights to distribute.

The supplied artwork is copied to `public/vice-city-art.jpg`.
