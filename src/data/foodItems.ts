import { Item } from "@/types/item";
import { v4 as id } from "uuid";

import APPLE from "@/assets/items/food/apple.png";
import PEAR from "@/assets/items/food/pear.png";
import SALAMI from "@/assets/items/food/salami.png";
import PORK from "@/assets/items/food/pork.png";

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
    group: "food",
    survivalStats: {
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
  {
    id: id(),
    image: PEAR,
    name: "Gruszka",
    description: "Gotowanie gruszki zmiękcza i uwalnia cudowny zapach.",
    count: 2,
    weight: 0.3,
    price: 0.2,
    durability: 100,
    group: "food",
    survivalStats: {
      hunger: 3,
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
  {
    id: id(),
    image: SALAMI,
    name: "Salami",
    description: "Przyprawione salami. Dobre do noszenia, gdy jesteś głodny i daleko od miasta.",
    count: 1,
    weight: 0.3,
    price: 0.2,
    durability: 100,
    group: "food",
    survivalStats: {
      hunger: 17,
      energy: -5,
      health: 0,
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
  {
    id: id(),
    image: PORK,
    name: "Wieprzowina",
    description: "Dobra wieprzowina od czeskich świń.",
    count: 1,
    weight: 0.5,
    price: 2,
    durability: 100,
    group: "food",
    survivalStats: {
      hunger: 8,
      energy: -7,
      health: 0,
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
