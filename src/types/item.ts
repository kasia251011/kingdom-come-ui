import { DefenseStats, ItemType, GeneralStatName, GroupType } from "./common";

export interface Item {
  id: string;
  image: string;
  name: string;
  group: GroupType;
  // only for weapons and armour
  type?: ItemType;
  description: string;
  weight: number;
  price: number;
  count: number;
  durability: number;
  sideStats: {
    [key in GeneralStatName]: number;
  } & Partial<DefenseStats>;
  survivalStats: {
    health?: number;
    energy?: number;
    hunger?: number;
  };
}
