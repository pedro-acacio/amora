# Amor à Palavra

Landing page for Loja Amor à Palavra — devotional notebooks, Bible study
materials, planners and handmade diaries, crafted by Gabi Andrade in Recife-PE, Brazil.

## Stack

- [Vite](https://vite.dev/) + [React](https://react.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [lucide-react](https://lucide.dev/) for icons

## Running locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Content

This project was created from the structure of the Mahut Arquitetura landing
page, adapted for Amor à Palavra. The copy and palette are a draft based on
the public Instagram bio and feed (@amor_apalavra) — update them in
`src/data.js` with the brand's real copy.

The "Galeria" (Gallery) section (`src/components/Galeria.jsx`) uses illustrated
placeholders instead of real product photos, to avoid reusing Instagram
images without permission. To swap in real photos, the simplest approach is
to follow the pattern used in Mahut: put the images in
`src/assets/produtos/<category>/*.webp` and load them with `import.meta.glob`
in `data.js`, as done with `PROJETOS` in the original project.

## Visual identity

The store's official logo is in `src/assets/logo.jpg` (also used as the
favicon in `public/favicon.jpg`) and is displayed by `src/components/Logo.jsx`,
used in the header, footer, hero and "Sobre" (About) section. Palette taken
from it: `#faf3e4` (cream), `#d8527d` (pink), `#55231f` (wine), `#cf9a4c`
(gold). Display typeface: Playfair Display; handwritten accents: Caveat;
body text: Nunito.

The spiral notebooks in `src/components/NotebookMock.jsx` are a reference
to the store's real product, used as a placeholder in the gallery until we
have real photos.
