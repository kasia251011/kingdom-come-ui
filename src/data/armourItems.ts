import { Item } from "@/types/item";
import { v4 as id } from "uuid";

import HELMET from "@/assets/items/armour/helmet.png";
import BODY_CHAINMAIL from "@/assets/items/armour/bodyChainmail.png";
import BODY_GARMENT from "@/assets/items/armour/bodyGarment.png";
import ARM_ARMOUR from "@/assets/items/armour/arm_armour.png";

export const armourItems: Item[] = [
  {
    id: id(),
    image: HELMET,
    name: "Hełm rycerski",
    description:
      "Solidny stalowy hełm zapewniający doskonałą ochronę głowy. Jednak znacznie ogranicza jego pole widzenia.",
    count: 1,
    weight: 6,
    price: 2419,
    durability: 78,
    type: "helmet",
    group: "armour",
    sideStats: {
      visibility: 78,
      conspiracy: 67,
      noise: 100,
      charisma: 15,
      speed: 0,
      stab: 23,
      slash: 23,
      blunt: 9,
    },
    survivalStats: {},
  },
  {
    id: id(),
    image: BODY_CHAINMAIL,
    name: "Kolczuga",
    description: `Kolczugi i kamizelki wykonane są z małych metalowych pierścieni połączonych w siatkę. 
      Różnią się wielkością i kształtem pierścieni, a także systemem ich łączenia. Pierścienie są zazwyczaj nitowane na zamknięcie. 
      Kolczuga zapewnia dobrą ochronę przed cięciami, ale można ją stosunkowo łatwo przebić, a bez warstwy wyściółki prawie nie chroni przed tępymi, miażdżącymi uderzeniami.`,
    count: 1,
    weight: 19,
    price: 400.9,
    durability: 50,
    type: "bodyChainmail",
    group: "armour",
    sideStats: {
      visibility: 61,
      conspiracy: 55,
      noise: 86,
      charisma: 3,
      speed: 0,
      stab: 10,
      slash: 13,
      blunt: 8,
    },
    survivalStats: {},
  },
  {
    id: id(),
    image: BODY_GARMENT,
    name: "Koszula od Stefanii",
    description: `Wytworna koszula od Lady Stefanii, podarowana w dowód uznania za wyświadczone przysługi.`,
    count: 1,
    weight: 1,
    price: 95,
    durability: 45,
    type: "bodyGarment",
    group: "armour",
    sideStats: {
      visibility: 55,
      conspiracy: 70,
      noise: 100,
      charisma: 18,
      speed: 0,
    },
    survivalStats: {},
  },
  {
    id: id(),
    image: ARM_ARMOUR,
    name: "Naramienniki",
    description: `Naramiennik to element zbroi chroniący przedramię wojownika. 
    Oprócz ochrony w walce wręcz, jest również przydatny w łucznictwie, zabezpieczając ramię łucznika przed uderzeniem cięciwy.`,
    count: 1,
    weight: 1.5,
    price: 120,
    durability: 60,
    type: "armArmour",
    group: "armour",
    sideStats: {
      visibility: 52,
      conspiracy: 59,
      noise: 69,
      charisma: 8,
      speed: 0,
      stab: 10,
      slash: 10,
      blunt: 4,
    },
    survivalStats: {},
  },
];
