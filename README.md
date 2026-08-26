Pakjes — Standalone web app (PWA)

Beschrijving
-----------
Dit is een eenvoudige, standalone Progressive Web App (PWA) om pakketten en trackingnummers te bewaren. De app is één HTML-bestand (index.html) en gebruikt localStorage voor persistente opslag. De service worker (sw.js) maakt de app offline-beschikbaar nadat deze eenmaal geladen is.

Inhoud van de map
-----------------
- index.html  — hoofd single-file web app (open in browser)
- sw.js       — service worker voor offline caching
- manifest.json — PWA manifest (referenties naar icon-*.svg)
- icon-192.svg, icon-512.svg — placeholder icons
- run-local.bat — script om lokaal een HTTP-server te starten (Windows)
- .gitignore  — aanbevolen git negeerregels
- LICENSE     — MIT-licentie

Snelstart (lokaal)
------------------
1. Open een terminal in deze folder.
2. Start een statische server (service worker vereist HTTP/HTTPS):
   - Met Python 3: python -m http.server 8000
   - Met Node.js: npx http-server -p 8000
3. Open http://localhost:8000 in je browser.

Git en publicatie naar GitHub (aanbevolen)
------------------------------------------
Voordat je pusht, kun je de volgende commit-message en commando's gebruiken. Deze voegen de bestanden toe, maken een initial commit en pushen naar een nieuwe public repository.

Aanbevolen commit-bericht:
  chore: initial standalone web app (PWA)

Uit te voeren commando's (copy/paste):
  cd "C:\Users\guype\OneDrive\Bureaublad\Pakjes\pakjes-web-standalone"
  git init
  git add .
  git commit -m "chore: initial standalone web app (PWA)"
  gh auth login          # volg prompts om in te loggen met GitHub CLI
  gh repo create guypeers-cmyk/guype-pakjes-web --public --source=. --remote=origin --push

Na pushen (GitHub Pages)
- Optioneel kun je GitHub Pages inschakelen: ga naar de repo → Settings → Pages en kies Branch = main, Folder = / (root). De site wordt gepubliceerd op https://guypeers-cmyk.github.io/guype-pakjes-web/ (kan enkele minuten duren).

Data & features
----------------
- Opslag: localStorage key = pakjes_app_packages_v1
- Import: verwacht JSON-array met package-objecten (id, code, carrier, note, status, createdAt). Ontbrekende ids worden gegenereerd.
- Export: genereert pakjes-export.json en pakjes-export.csv
- Filters en zoekfunctie zijn in de UI aanwezig

Beveiliging & aandachtspunten
-----------------------------
- Deel geen tokens of secrets. Als je gh auth login gebruikt, gebeurt authenticatie lokaal via de GitHub CLI.
- Als je meerdere tabs gebruikt, kan localStorage-race optreden. Voor multi-client sync overweeg server-side opslag (Firebase, etc.).
- Service worker cache: wijzig CACHE_NAME in sw.js om clients expliciet de nieuwe versie te laten ophalen.

Wil je dat ik:
- Een release/zip maak en upload naar de GitHub release-pagina na de push?
- De repository automatisch een README.md en topics (website, pwa) geef tijdens creatie? (ik kan een commit klaarmaken die je pusht)

Contact
-------
Als je wilt dat ik aanvullende bestanden toevoeg (CI, tests, of een Express wrapper), laat het weten en ik maak ze klaar.
