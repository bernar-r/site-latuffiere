# Gîte La Tuffière — site internet

Site statique du gîte La Tuffière (Vuillafans, Doubs), construit avec [Astro](https://astro.build).

## Développement

```sh
npm install
npm run dev       # serveur local sur http://localhost:4321
npm run build     # génère le site statique dans dist/
```

## Structure du contenu

- `src/pages/` — une page par fichier (`.astro`), reflète les URL du site.
- `src/data/` — textes réutilisables et données à modifier en premier (tarifs, menus, chambres, coordonnées, labels).
- `src/components/` — en-tête, pied de page, galerie, modale de disponibilités.
- `public/images/` — toutes les photos réelles du gîte.

## Modifier un contenu courant

| Je veux changer… | Fichier à éditer |
| :--- | :--- |
| Téléphone, adresse, horaires | `src/data/site.ts` |
| Tarifs (nuit, table d'hôtes, groupes, boissons) | `src/data/tarifs.ts` |
| Menus de la table d'hôtes | `src/data/menus.ts` |
| Détail des chambres | `src/data/rooms.ts` |
| Photos de la galerie | `src/data/gallery.ts` + ajouter le fichier dans `public/images/` |

## Publier une mise à jour

Le développement actif tourne sur une copie locale hors OneDrive/Google Drive (nécessaire pour que `npm install` fonctionne correctement). Procédure : modifier les fichiers, `npm run build`, puis recopier `dist/` dans le dossier `docs/` du dépôt GitHub `bernar-r/site-latuffiere` avant de committer et pousser sur `main` (GitHub Pages sert le site depuis `main` / `docs`).

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
