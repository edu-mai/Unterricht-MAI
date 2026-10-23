# Lernmaterialien für den Unterricht

Statische Website für GitHub Pages. `index.html` liegt im Hauptverzeichnis; CSS unter `css/style.css`, JavaScript unter `js/main.js`.

## Veröffentlichen
Dateien in das geklonte GitHub-Repository kopieren, committen, pushen. Unter GitHub → Settings → Pages: Deploy from a branch → `main` → `/ (root)`.

## Applet hinzufügen
`mathematik/12-13/applets/mein-erstes-applet/` enthält zunächst eine Platzhalter-`index.html`. Diese durch dein echtes Applet (HTML sowie benötigte CSS-/JS-/Asset-Dateien) ersetzen. Liegt es als Vite/React-Projekt vor, zuerst einen Produktions-Build mit passendem `base`-Pfad erzeugen und den Inhalt des Build-Ordners veröffentlichen. Eine bestehende Netlify-Adresse allein kopiert den Applet-Quellcode nicht auf GitHub Pages.

## Lokaler Test
`index.html` im Browser öffnen. Für Applets mit `fetch`, ES-Modulen o. Ä. besser mit lokalem Entwicklungsserver testen (z. B. `python3 -m http.server 8000` im Projektverzeichnis).
