import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../types/item";
import { PlayerStats } from "../types/playerStats";
import { ItemType } from "../types/common";
import { armourItems } from "@/data/armourItems";
import { foodItems } from "@/data/foodItems";

export interface AppState {
  currentItem: Item;
  playerStats: PlayerStats;
  activeInventory: {
    [key in ItemType]: Item | undefined;
  };
  items: Item[];
}

const initialState: AppState = {
  currentItem: armourItems[0],
  playerStats: {
    energy: 90,
    health: 85,
    hunger: 65,
    level: {
      maxPoints: 100,
      points: 32,
      value: 4,
    },
    sideStats: {
      charisma: 2,
      conspiracy: 4,
      noise: 5,
      speed: 6,
      visibility: 2,
    },
  },
  activeInventory: {
    helmet: undefined,
    coif: undefined,
    headChainmail: undefined,
    bodyChainmail: undefined,
    bodyPlate: undefined,
    outerGarment: undefined,
    bodyGarment: undefined,
    gloves: undefined,
    armArmour: undefined,
    legChainmail: undefined,
    hose: undefined,
    legPlate: undefined,
    boots: undefined,
    offHand: undefined,
    mainHand: undefined,
    bow: undefined,
    arrows: undefined,
    ring: undefined,
    necklace: undefined,
    spurs: undefined,
  },
  items: [...armourItems, ...foodItems],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    wearItem(state, { payload: item }: PayloadAction<Item>) {
      if (item.type in state.activeInventory) {
        const type = item.type as ItemType;
        state.activeInventory[type] = state.currentItem;
      }
    },
    eatItem(state, { payload: item }: PayloadAction<Item>) {
      state.playerStats.hunger += item.mainStats.hunger ?? 0;
      state.playerStats.energy += item.mainStats.energy ?? 0;
      state.playerStats.health += item.mainStats.health ?? 0;
      if (state.playerStats.hunger > 100) {
        state.playerStats.hunger = 100;
      }
      if (state.playerStats.energy > 100) {
        state.playerStats.energy = 100;
      }
      if (state.playerStats.health > 100) {
        state.playerStats.health = 100;
      }

      state.items = state.items.map((oldItem) => {
        console.log("halko");

        if (oldItem.id === item.id) {
          return {
            ...oldItem,
            count: oldItem.count - 1,
          };
        }
        return oldItem;
      });
      state.items = state.items.filter((oldItem) => oldItem.count !== 0);
    },
    setCurrentItem(state, action: PayloadAction<Item>) {
      state.currentItem = action.payload;
    },
    takeOffItem(state, { payload: item }: PayloadAction<Item>) {
      if (item.type in state.activeInventory) {
        const type = item.type as ItemType;
        state.activeInventory[type] = undefined;
      }
    },
  },
});

export const { wearItem, takeOffItem, setCurrentItem, eatItem } =
  authSlice.actions;
export default authSlice.reducer;
