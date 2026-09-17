import siteData from "./site.json";

export const site = siteData;

export const nav = [
  { label: "Accueil", href: "/" },
  { label: "Gîte", href: "/gite/" },
  { label: "Table d'hôtes", href: "/table-dhotes/" },
  { label: "Tarifs", href: "/tarifs/" },
  { label: "Galerie", href: "/galerie/" },
  { label: "Activités", href: "/activites/" },
  { label: "Contact", href: "/contact/" },
];

export const labels = [
  {
    title: "Gîtes de France",
    description: "Hébergement labellisé Gîtes de France, gage de qualité et d'authenticité.",
    logo: "/images/logo-gites-de-france.png",
    href: "https://www.gites-de-france.com/fr/search?f%5B0%5D=type%3A36172&seed=4658d321&data-ori=ADSWFNGFFR",
  },
  {
    title: "Motard Bienvenue",
    description: "Accueil adapté pour les motards de passage ou en séjour.",
    logo: "/images/logo-motards.png",
    href: "https://www.doubs.travel/sejourner/hebergements/tous-les-hebergements/les-structures-labellises-motards-bienvenue/",
  },
  {
    title: "Label Pêche — Relais St Pierre",
    description: "Hébergement labellisé pêche au bord de la Loue.",
    logo: "/images/logo-relais-saint-pierre.png",
    href: "https://www.doubs.travel/sejourner/hebergements/tous-les-hebergements/hebergements-relais-saint-pierre/",
  },
];
