# Portfolio

Portfolio personnel construit avec React, Vite et Tailwind CSS.

## Développement

```bash
npm install
npm run dev
```

## Build de production

```bash
npm run build
npm run preview
```

## Personnaliser le contenu

Tout le contenu (nom, bio, projets, compétences, liens) est centralisé dans
[src/data/content.js](src/data/content.js) — modifie ce fichier pour mettre
tes propres informations, il n'y a rien d'autre à toucher pour changer le texte.

## Structure

```
src/
  components/   # Navbar, Hero, About, Projects, Skills, Contact, Footer, icons
  data/         # content.js — toutes les données du portfolio
  App.jsx       # assemble les sections
  index.css     # thème Tailwind (couleurs, police) + styles globaux
```
