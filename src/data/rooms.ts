// Détail des chambres réelles du gîte (Bénédicte & Christian).
// Capacité totale : 35 personnes réparties en 10 chambres avec sanitaires privés.

export interface Room {
  name: string;
  beds: string;
  capacity: number;
  floor: string;
  pmr?: boolean;
  tag: string;
  description?: string;
}

export const rooms: Room[] = [
  {
    name: "La Sitelle",
    capacity: 2,
    beds: "2 lits individuels (90×190)",
    floor: "1er étage",
    tag: "Chambre 2 personnes",
    description: "Chambre lumineuse au calme, vue sur la nature. Idéale pour deux randonneurs ou amis.",
  },
  {
    name: "La Gelinotte",
    capacity: 2,
    beds: "2 lits individuels (90×190)",
    floor: "Rez-de-chaussée",
    pmr: true,
    tag: "Accès PMR · RDC",
    description: "Chambre de plain-pied spécialement aménagée pour les personnes à mobilité réduite, avec douche à l'italienne et WC adaptés.",
  },
  {
    name: "La Mésange",
    capacity: 3,
    beds: "3 lits individuels (90×190)",
    floor: "1er étage",
    tag: "Chambre 3 personnes",
    description: "Configuration idéale pour un trio de voyageurs, cyclotouristes ou randonneurs.",
  },
  {
    name: "La Hulotte",
    capacity: 3,
    beds: "1 lit double (140×190) + 1 lit individuel (90×190)",
    floor: "1er étage",
    tag: "Couple & enfant / 3 pers.",
    description: "Parfaite pour un couple avec un enfant ou pour trois adultes en quête de confort.",
  },
  {
    name: "L'Hirondelle",
    capacity: 3,
    beds: "1 lit double (140×190) + 1 lit individuel (90×190)",
    floor: "1er étage",
    tag: "Couple & enfant / 3 pers.",
    description: "Chambre chaleureuse et spacieuse, vue dégagée sur le vallon.",
  },
  {
    name: "La Fauvette",
    capacity: 4,
    beds: "4 lits individuels dont 1 superposé",
    floor: "1er étage",
    tag: "Famille ou groupe 4 pers.",
    description: "Conviviale et fonctionnelle pour les petites familles ou groupes d'amis.",
  },
  {
    name: "La Grive",
    capacity: 4,
    beds: "1 lit double (140×190) + 2 lits individuels dont 1 superposé",
    floor: "1er étage",
    tag: "Famille 4 pers.",
    description: "Très demandée par les familles avec enfants pour son espace et sa praticité.",
  },
  {
    name: "La Bergeronnette",
    capacity: 4,
    beds: "4 lits individuels dont 1 superposé",
    floor: "1er étage",
    tag: "Groupe / Famille 4 pers.",
    description: "Chambre confortable avec rangements, idéale pour les étapes de randonnée.",
  },
  {
    name: "La Buse",
    capacity: 4,
    beds: "4 lits individuels dont 1 superposé",
    floor: "1er étage",
    tag: "Groupe / Famille 4 pers.",
    description: "Grande chambre aérée, appréciée des clubs motards et marcheurs.",
  },
  {
    name: "La Colombe",
    capacity: 6,
    beds: "6 lits individuels dont 2 superposés",
    floor: "1er étage",
    tag: "Dortoir confort 6 pers.",
    description: "Notre plus grande chambre ! Esprit gîte d'étape chaleureux tout en conservant salle d'eau et WC privatifs.",
  },
];

export const equipment = [
  { icon: "users", text: "Capacité d'accueil : 35 personnes (10 chambres)" },
  { icon: "bath", text: "Toutes les chambres avec salle d'eau (douche, lavabo) et WC privatifs" },
  { icon: "wheelchair", text: "Chambre accessible PMR de plain-pied (La Gelinotte)" },
  { icon: "presentation", text: "Grande salle commune / salle de séminaire et réunions" },
  { icon: "sun", text: "Terrasse ombragée avec tables extérieures sous les arbres" },
  { icon: "tree", text: "Grand parc arboré au calme, à 200 mètres de la rivière la Loue" },
  { icon: "ball", text: "Terrain de boules (pétanque) et terrain de volley sur place" },
  { icon: "bike", text: "Garage fermé sécurisé pour motos et vélos (Label Motard Bienvenue)" },
  { icon: "wifi", text: "Connexion Wi-Fi disponible gratuitement" },
  { icon: "utensils", text: "Table d'hôtes le soir mitonnée maison par les propriétaires" },
];
