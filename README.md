# Lernmaterialien für den Unterricht

Statische Website für GitHub Pages. `index.html` muss im Hauptverzeichnis des Repositorys liegen. Pages-Einstellung: `Deploy from a branch`, Branch `main`, Ordner `/(root)`.

## Inhalt
- `mathematik/12-13/index.html`: gegliederte Übersicht mit linker Sprungnavigation (Analysis, Analytische Geometrie, Stochastik).
- `mathematik/12-13/applets/grafische-rekonstruktion/index.html`: unverändertes HTML aus `Applet_IServ_Upload(1).zip`.
- `mathematik/12-13/applets/stammfunktion-konstanter-faktor/index.html`: unverändertes HTML aus `Faktorregel_Netlify_Upload_LaTeX(1).zip`.
- `css/style.css`: gemeinsames Design für die Website.
- `js/main.js`: bestehende JS-Interaktionen.

Beide Applets nutzen die externe GeoGebra-Bibliothek (`www.geogebra.org/apps/deployggb.js`); das zweite lädt außerdem MathJax über jsDelivr. Für ihre vollständige Funktion ist deshalb Internetzugang notwendig. Die HTML-Dateien selbst liegen direkt bei GitHub Pages, nicht bei Netlify.

## Einspielen
Kopiere **den Inhalt dieses Ordners** (nicht den übergeordneten Ordner) in die Wurzel deines lokalen GitHub-Repositories. Anschließend in VS Code: Stage → Commit → Push. Die bisherige Platzhalter-Appletseite wurde entfernt. Prüfe die öffentlichen Dateien vor dem Push auf persönliche Daten.

## Designaktualisierung
Die Jahrgangsseite hat eine linke CSS-Grid-Sprungnavigation und farbige Abschnittsbalken.
Ein `?v=3` am CSS-Link der Jahrgangsseite hilft gegen einen alten Browser-Cache.
