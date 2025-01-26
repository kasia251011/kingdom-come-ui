import { Item } from "@/types/item";
import { v4 as id } from "uuid";

import RED_FEATHER from "@/assets/items/other/redFeather.png";
import COW_HIDE from "@/assets/items/other/cowHide.png";
import BROCADE from "@/assets/items/other/brocade.png";

export const otherItems: Item[] = [
    {
        id: id(),
        image: RED_FEATHER,
        name: "Czerwone pióro",
        description: "Czerwone pióro.",
        count: 5,
        weight: 0.1,
        price: 0.1,
        durability: 100,
        group: "other",
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
        image: COW_HIDE,
        name: "Krowia skóra",
        description: "Kawałek skóry z jałówki.",
        count: 3,
        weight: 6,
        price: 10,
        durability: 100,
        group: "other",
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
        image: BROCADE,
        name: "Brokat",
        description: "Tkany, jedwabny materiał. Ceniony przez szlachtę za swój kolorowy i bardzo szczegółowy wzór.",
        count: 1,
        weight: 2,
        price: 200,
        durability: 100,
        group: "other",
        survivalStats: {},
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