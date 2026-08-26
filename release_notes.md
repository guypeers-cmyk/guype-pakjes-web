# v1.0.0 — Initial standalone web app (PWA)

## Korte samenvatting
Deze release introduceert de eerste openbare versie van "Pakjes": een compacte standalone Progressive Web App (PWA) om trackingnummers en opmerkingen lokaal te bewaren. De app is bedoeld voor snelle, offline‑vriendelijke tracking van pakketjes met import/exportfunctionaliteit.

## Belangrijkste highlights
- Volledige single‑file webapp: `index.html` (geen build stap benodigd)
- PWA‑ondersteuning met service worker (`sw.js`) en `manifest.json` — offline beschikbare app na eerste load
- `localStorage` persistente opslag (key: `pakjes_app_packages_v1`)
- Voeg pakketten toe, bewerk en verwijder; zoek/filter op trackingnummer, carrier en status
- Import / Export: JSON- en CSV‑export, import via JSON (merge, genereert ids indien nodig)
- Eenvoudige carrier‑detectie met verbeterde normalisatie
- Voorzien van iconen (SVG), `README.md`, `LICENSE` en een `run-local.bat` voor lokale tests

## Volledige changelog
- feat: single-file PWA app (`index.html`)
- feat: `localStorage` persistence & import/export (JSON, CSV)
- feat: search, filters (carrier, status)
- feat: carrier detection (normaliseert input en matcht patronen)
- feat: service worker (offline caching) en `manifest.json`
- docs: uitgebreide `README.md`, `.gitignore` en `LICENSE` (MIT)

## Hoe te gebruiken (lokaal)
1. Pak de repository uit of clone:
   ```bash
   git clone https://github.com/guypeers-cmyk/guype-pakjes-web.git
   ```
2. Start een simpele HTTP‑server (service worker vereist HTTP(S)):
   - Python 3: `python -m http.server 8000`
   - Node: `npx http-server -p 8000`
3. Open `http://localhost:8000` in je browser

## GitHub Pages (publicatie)
De site kan gehost worden op GitHub Pages via branch `main` (root). Na inschakeling is de site bereikbaar op:
https://guypeers-cmyk.github.io/guype-pakjes-web/

## Known issues & beperkingen
- Opslag: `localStorage` is cliënt‑gebonden; geen automatische cross‑device sync. Voor multi‑device synchronisatie is server‑backing (bijv. Firebase) nodig.
- Race conditions mogelijk als meerdere tabs tegelijk schrijven naar `localStorage`.
- Service worker cacheversiebeheer: update de `CACHE_NAME` in `sw.js` om clients geforceerd te laten vernieuwen.
- Icons zijn SVG‑placeholders — vervang door PNGs voor bredere PWA‑compatibiliteit op sommige platforms.

## Security & privacy
- Alle data blijft lokaal op het apparaat (`localStorage`). Geen externe API’s of tracking.
- Deel nooit je GitHub Personal Access Tokens in onveilige kanalen; maak tokens met korte levensduur en intrek ze na gebruik.

## Bestanden inbegrepen
- `index.html` — hoofdapp (UI + logica)
- `sw.js` — service worker
- `manifest.json` — PWA manifest
- `icon-192.svg`, `icon-512.svg` — placeholder iconen
- `README.md`, `LICENSE`, `.gitignore`, `run-local.bat`
- `pakjes-web-standalone.zip` — release asset (de volledige folder)

## Credits
Ontwikkeld door guypeers-cmyk — MIT License
