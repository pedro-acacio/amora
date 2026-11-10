# Amora · Papelaria Afetiva

Landing page for Amora (formerly Amor à Palavra) — devotional notebooks,
Bible study materials, planners and handmade diaries, crafted by Gabi Andrade
in Recife-PE, Brazil.

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
page, adapted for Amor à Palavra (now Amora). The copy is a draft based on
the public Instagram bio and feed (now @amora.afetivaa) — update it in
`src/data.js` with the brand's real copy.

The "Galeria" (Gallery) section (`src/components/Galeria.jsx`) uses illustrated
placeholders instead of real product photos, to avoid reusing Instagram
images without permission. To swap in real photos, the simplest approach is
to follow the pattern used in Mahut: put the images in
`src/assets/produtos/<category>/*.webp` and load them with `import.meta.glob`
in `data.js`, as done with `PROJETOS` in the original project.

## Visual identity

Rebrand of Nov 2026: the store is now **Amora · Papelaria Afetiva**.
Everything comes from the official brand presentation sent by the client
(`Logo_Amora_Apresentação.pdf`):

- `src/assets/marca/*.svg`: vector logo extracted from the PDF, in colour and
  cream versions, plus the standalone symbol (leaves + mulberries) and the
  standalone "Amora" wordmark. `src/components/Logo.jsx` builds the
  horizontal version (nav) and the full one (footer, "Sobre" section).
- `src/assets/marca/*.webp`: illustrations from the presentation itself
  (cut-out mulberry branch, leaf, wine leaf texture, notebook mockup).
- Palette (tokens in `src/index.css`): wines `#391120` `#703945` `#a16b71`,
  olives `#343419` `#56583c` `#9d9a79`, cream `#eee3d7`. Gold `#c9a24d` is
  only used as a finish, like the hot stamping in the mockups.
- Typography: DM Serif Display for headings (high-contrast serif, close to
  the logo's wordmark) and Nunito Sans for body text (free stand-in for the
  Avenir used in "PAPELARIA AFETIVA").
- Elements: the logo's ——✦—— divider (`Ornamento.jsx`), the leaf texture on
  wine sections (`.fundo-folhas`) and gold-spiral notebooks with the symbol
  (`NotebookMock.jsx`) as gallery placeholders until we have real photos.
- Favicon: `public/favicon.svg` (symbol) + 32/180/512 PNGs.
