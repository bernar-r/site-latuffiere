// Tarifs réels 2026 (transcrits depuis la fiche tarifs du gîte — à valider/mettre à jour avec Bénédicte & Christian).
export const nightRates = [
  { label: "Chambre individuelle", price: "61,00 €" },
  { label: "Chambre double (par personne)", price: "47,50 €" },
  { label: "Chambre de 3 ou 4 (par personne)", price: "42,00 €" },
];

export const childRate = "Enfant (3 à 11 ans) dans la chambre des parents : 31,50 €";
export const touristTax = "+ Taxe de séjour : 0,83 € / adulte / nuit à partir de 18 ans";

// Table d'hôtes en demi-pension (hors boissons) — hors hébergement : +10%
export const halfBoardMenus = [
  { label: "Menu tradition, plat + dessert", price: "20,00 €" },
  { label: "Menu tradition, entrée + plat + dessert", price: "25,00 €" },
  { label: "Menu tradition, entrée + plat + fromage + dessert", price: "30,00 €" },
  { label: "Menu enfant (< 12 ans), plat + dessert", price: "13,00 €" },
  { label: "Menu dégustation", price: "41,00 €" },
];

export const packedLunch = "Panier repas randonneur à emporter : 12,90 €, à consommer à l'extérieur du gîte.";

export const groupRates = [
  {
    label: "20 adultes minimum, sur 3 nuits consécutives",
    price: "65,00 € / personne / nuit",
    note: "Demi-pension, menu tradition (entrée, plat, dessert)",
  },
  {
    label: "25 adultes minimum, sur 2 nuits consécutives",
    price: "65,00 € / personne / nuit",
    note: "Demi-pension, menu tradition (entrée, plat, dessert)",
  },
  {
    label: "30 adultes minimum, pour 1 nuit",
    price: "67,00 € / personne / nuit",
    note: "Demi-pension, menu tradition (entrée, plat, dessert)",
  },
];

export const drinks = {
  nonAlcoholic: [
    { label: "Sirop à l'eau (fraise, grenadine, sapin, menthe…) — 20 cl", price: "1,00 €" },
    { label: "Diabolo — 20 cl", price: "1,50 €" },
    { label: "Jus de fruits (orange, pomme, raisin, ananas) — 25 cl", price: "2,50 €" },
    { label: "Perrier / Coca / Schweppes agrumes — 33 cl", price: "2,50 €" },
    { label: "Limonade 1 L", price: "4,50 €" },
    { label: "Badoit 1 L / Perrier 1 L", price: "4,00 €" },
  ],
  hot: [
    { label: "Café filtre — 10 cl", price: "1,50 €" },
    { label: "Thé, tisane — 15 cl", price: "1,50 €" },
    { label: "Chocolat chaud — 15 cl", price: "2,50 €" },
  ],
  beer: [
    { label: "Bière de la vallée (blanche, blonde, rousse, ambrée) — 75 cl", price: "10,00 €" },
    { label: "Bière pression — 25 cl", price: "3,20 €" },
    { label: "Bière pression + sirop — 25 cl", price: "3,50 €" },
    { label: "Picon bière — 25 cl", price: "4,20 €" },
  ],
  aperitif: [
    { label: "Pontarlier ou Ricard — 4 cl", price: "2,60 €" },
    { label: "Punch Lorrain — 12 cl", price: "3,50 €" },
    { label: "Crémant nature — 12 cl", price: "4,00 €" },
    { label: "Marcotton (Crémant / Macvin) — 12 cl", price: "4,50 €" },
    { label: "Macvin blanc du Jura — 6 cl", price: "3,50 €" },
    { label: "Vodka Absolut — 6 cl", price: "4,00 €" },
    { label: "Whisky J&B ou Clan Campbell — 6 cl", price: "4,00 €" },
    { label: "Whisky Jack Daniel's — 6 cl", price: "5,00 €" },
    { label: "Suze — 6 cl", price: "2,50 €" },
    { label: "Absinthe — 3 cl", price: "5,50 €" },
  ],
  digestif: [{ label: "Eau de vie, Calva, Bourgeon de sapin… — 3 cl", price: "4,00 €" }],
};

export const wines = {
  white: [
    { label: "Crémant du Jura — bouteille 75 cl", price: "23,00 €" },
    { label: "Arbois F. Lornet Chardonnay — bouteille 75 cl", price: "23,00 €" },
    { label: "Arbois F. Lornet Savagnin — bouteille 75 cl", price: "36,00 €" },
    { label: "Arbois Bethanie — bouteille 75 cl", price: "32,00 €" },
    { label: "Arbois Chardonnay — pichet 1/4", price: "5,00 €" },
    { label: "Arbois Chardonnay — pichet 1/2", price: "10,00 €" },
  ],
  red: [
    { label: "Arbois Ploussard — bouteille 75 cl", price: "23,00 €" },
    { label: "Arbois Pinot Noir — bouteille 75 cl", price: "23,00 €" },
    { label: "Arbois Trousseau — bouteille 75 cl", price: "28,00 €" },
    { label: "Arbois tradition — pichet 1/4", price: "5,00 €" },
    { label: "Arbois tradition — pichet 1/2", price: "10,00 €" },
  ],
  rose: [
    { label: "Rosé d'Ardèche ou du Gard — pichet 1/4", price: "4,00 €" },
    { label: "Rosé d'Ardèche ou du Gard — pichet 1/2", price: "8,00 €" },
  ],
};
