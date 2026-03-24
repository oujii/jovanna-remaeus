# Jovanna Remaeus — Portfolio Site

## Vad är detta?
Portfolio-sajt för Jovanna Remaeus, Production Designer. Byggd med Astro utifrån `../prototype_d.html`.

**VIKTIGT: Hennes namn är Jovanna Remaeus — inte Larsen.**

## URLs
- **Live:** https://jovanna-remaeus.netlify.app
- **GitHub:** https://github.com/oujii/jovanna-remaeus
- **Netlify dashboard:** https://app.netlify.com/projects/monumental-bienenstitch-a5f063

## Deploy-flöde
Push till `main` → GitHub Action bygger → Netlify uppdateras automatiskt.
Workflow: `.github/workflows/deploy.yml`

## Projektstruktur
```
src/
  data/projects.ts       ← all projektdata här (lägg till/ändra projekt)
  components/
    Header.astro         ← namn + nav (CV, Contact)
    ProjectCard.astro    ← ett projektkort i list-vyn
    ReelView.astro       ← fullscreen reel + filmstrip
  styles/global.css      ← all CSS
  pages/index.astro      ← huvudsida + all interaktiv JavaScript
```

## Lägga till/ändra projekt
Redigera `src/data/projects.ts` — varje projekt har:
- `title` / `titleLines` (för fullscreen-vyn, radbrytningar)
- `type` (Featured Work / Short Film / Commercial / Feature Film)
- `director`, `production`, `year`, `format`
- `videoSrc` (MP4-url)
- `thumbnail` (bild för filmstrips, 160px bred)

## Interaktivitet (JavaScript i index.astro)
- Klick på videokort → expanderar med detaljer
- "Play fullscreen" → öppnar fullscreen reel
- Scroll-snap mellan slides i fullscreen
- Filmstrip längst ner navigerar mellan slides
- Svep nedåt i fullscreen → tillbaka till list-vyn
- Klick på reel → mute/unmute

## Köra lokalt
```bash
cd /Users/carl/jovanna/site
npm run dev        # http://localhost:4321
npm run build      # bygger till dist/
```

## Kända fixar gjorda
- `←`-pilen i headern är dold med `max-width: 0` (inte bara opacity) för att inte ta layout-utrymme
- Header-namnet är en plain `<span class="hdr-name">` — inte en button/div med id, för att undvika browser-default styles
- goHome() (tillbaka från fullscreen) triggas inte längre via namnklick — kan läggas till på annat element om önskat
