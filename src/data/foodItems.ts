import { Item } from "@/types/item";
import { v4 as id } from "uuid";

import APPLE from "@/assets/items/food/apple.png";

export const foodItems: Item[] = [
  {
    id: id(),
    image: APPLE,
    name: "Jabłko",
    description:
      "Jedno jabłko dziennie trzyma aptekarza z daleka. Nie jest szczególnie pożywne, ale długo utrzymuje świeżość.",
    count: 3,
    weight: 0.3,
    price: 0.5,
    durability: 100,
    type: "food",
    group: "food",
    mainStats: {
      hunger: 2,
      energy: 0,
      health: 2,
    },
    sideStats: {
      visibility: 0,
      conspiracy: 0,
      noise: 0,
      charisma: 0,
      speed: 0,
      stab: 0,
      slash: 0,
      blunt: 0,
    },
  },
];
