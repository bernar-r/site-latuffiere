// Données centralisées : coordonnées, navigation, labels — modifiées ici, répercutées partout.

export const site = {
  name: "Gîte La Tuffière",
  tagline: "Vuillafans · Vallée de la Loue · Doubs",
  phone: "03 81 60 96 76",
  phoneHref: "tel:0381609676",
  phoneSecondary: "06 16 61 81 78",
  phoneSecondaryHref: "tel:0616618178",
  email: "latuffiere2@wanadoo.fr",
  address: {
    line1: "1 chemin de Montgesoye",
    line2: "25840 Vuillafans",
  },
  // À confirmer avec Bénédicte & Christian (horaires week-end ?)
  hours: "Lundi – Vendredi : 08h00 – 18h00",
  facebook: "https://www.facebook.com/chrisetbene/",
  googleMaps: "https://www.google.com/maps/place/G%C3%AEte+La+Tuffi%C3%A8re/@47.0684357,6.204781,15z",
  capacity: "Capacité d'accueil : 35 personnes",
  tagline: "Le repère des motards, randonneurs et pêcheurs dans le Doubs : votre prochain hébergement",
  // Widget officiel Gîtes de France / Tourinsoft — URL réelle, ne pas modifier sans vérification.
  dispoIframeUrl:
    "https://wcf.tourinsoft.com/Syndication/decibelles-data/c03a5d77-24d5-40e9-8393-08d8ac3e8524/object/HCOBFC025345000122/",
};

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
