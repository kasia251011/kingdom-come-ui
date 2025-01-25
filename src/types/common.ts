export interface DefenseStats {
  stab: number;
  slash: number;
  blunt: number;
}

export type GroupType = "armour" | "weapon" | "other" | "food" | "quest";

export type GroupTypeAll = GroupType | "all";

export type GeneralStatName =
  | "visibility"
  | "conspiracy"
  | "noise"
  | "charisma"
  | "speed";

export type ItemType =
  | "helmet"
  | "coif"
  | "headChainmail"
  | "bodyChainmail"
  | "bodyPlate"
  | "outerGarment"
  | "bodyGarment"
  | "gloves"
  | "armArmour"
  | "legChainmail"
  | "hose"
  | "legPlate"
  | "boots"
  | "offHand"
  | "mainHand"
  | "bow"
  | "arrows"
  | "ring"
  | "necklace"
  | "spurs";

export type ItemGroup =
  | "armour"
  | "weapon"
  | "other"
  | "food"
  | "drink"
  | "quest";
