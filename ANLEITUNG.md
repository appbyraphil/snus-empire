# Snus Empire Tycoon – als App aufs iPhone

## 1. Auf GitHub hochladen (einmalig, ca. 5 Minuten)
1. Auf github.com kostenlos registrieren und einloggen.
2. Oben rechts auf **+** und dann **New repository** tippen.
   - Name: `snus-empire`
   - Sichtbarkeit: **Public** (nötig für kostenloses GitHub Pages)
   - Auf **Create repository** tippen.
3. Auf der neuen Seite **uploading an existing file** wählen.
4. Alle Dateien aus diesem Ordner hineinziehen:
   `index.html`, `manifest.webmanifest`, `sw.js`, `icon-180.png`, `icon-192.png`, `icon-512.png`
5. Unten auf **Commit changes** tippen.

## 2. GitHub Pages einschalten
1. Im Repository **Settings** öffnen und links **Pages** wählen.
2. Unter „Build and deployment“ Folgendes einstellen:
   - **Source:** Deploy from a branch
   - **Branch:** `main`, Ordner `/ (root)`
   - Auf **Save** tippen.
3. Nach 1–2 Minuten erscheint dort deine Adresse:
   `https://DEIN-NAME.github.io/snus-empire/`

## 3. Auf dem iPhone installieren
1. Die Adresse in **Safari** öffnen (nicht Chrome).
2. Auf **Teilen** (Quadrat mit Pfeil) tippen und dann **Zum Home-Bildschirm** wählen.
3. Fertig: Das Spiel hat jetzt ein eigenes Icon, startet im Vollbild und läuft auch offline.

## Updates einspielen
Neue Version der `index.html` im Repository hochladen und die alte ersetzen
(„Add file“ → „Upload files“). Beim nächsten Start lädt die App die neue Version.

## Wichtig zum Spielstand
Der Spielstand ist an die Adresse gebunden. Auf der neuen Adresse startest du neu.
So nimmst du deinen Fortschritt mit:
1. Im alten Spiel **Mehr → Code erzeugen & kopieren** tippen.
2. In der App **Mehr → Code einfügen → Code laden** tippen.
