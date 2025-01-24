import { DefenseStats, ItemType, GeneralStatName } from "./common";

export interface Item {
  id: string;
  image: string;
  name: string;
  type: ItemType | "other";
  group: string;
  description: string;
  weight: number;
  price: number;
  count: number;
  durability: number;
  sideStats: {
    [key in GeneralStatName]: number;
  } & Partial<DefenseStats>;
  mainStats: {
    health?: number;
    energy?: number;
    hunger?: number;
  };
}
