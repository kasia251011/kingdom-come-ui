import { Item } from "@/types/item";
import { v4 as id } from "uuid";

import HORN from "@/assets/items/quest/horn.png";
import BOUQUET from "@/assets/items/quest/bouquet.png";
import CROSS from "@/assets/items/quest/cross.png";

export const questItems: Item[] = [
    {
        id: id(),
        image: HORN,
        name: "Róg myśliwski Mikołaja",
        description: "Róg myśliwski Mikołaja. Słychać go z dużej odległości.",
        count: 1,
        weight: 0,
        price: 0,
        durability: 100,
        group: "quest",
        survivalStats: {
          hunger: 0,
          energy: 0,
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
        image: BOUQUET,
        name: "Bukiet dla Klary",
        description: "Bukiet dla łaziebnej Klary.",
        count: 1,
        weight: 0,
        price: 0,
        durability: 100,
        group: "quest",
        survivalStats: {
          hunger: 0,
          energy: 0,
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
        image: CROSS,
        name: "Drewniany krzyż",
        description: "Drewniany krzyż, który znalazłem w miejscu spotkań heretyków.",
        count: 1,
        weight: 0,
        price: 0,
        durability: 100,
        group: "quest",
        survivalStats: {
          hunger: 0,
          energy: 0,
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
]