import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../types/item";
import { PlayerStats } from "../types/playerStats";
import { GroupTypeAll, ItemType } from "../types/common";
import { armourItems } from "@/data/armourItems";
import { foodItems } from "@/data/foodItems";
import { weaponItems } from "@/data/weaponItems";
import { questItems } from "@/data/questItems";
import { otherItems } from "@/data/otherItems";

export interface AppState {
  currentItem: Item;
  currentGroup: GroupTypeAll;
  currentItems: Item[];
  playerStats: PlayerStats;
  activeInventory: {
    [key in ItemType]: Item | undefined;
  };
  items: Item[];
  currentGold: number,
  maxEquipLoad: number
}

const allItems = [...armourItems, ...foodItems, ...weaponItems, ...questItems, ...otherItems];

const initialState: AppState = {
  currentItem: armourItems[0],
  currentItems: allItems,
  currentGold: 2000,
  maxEquipLoad: 200,
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
  items: allItems,
  currentGroup: "all",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    wearItem(state, { payload: item }: PayloadAction<Item>) {
      if (item.type && item.type in state.activeInventory) {
        const type = item.type as ItemType;
        state.activeInventory[type] = state.currentItem;
      }
    },
    eatItem(state, { payload: item }: PayloadAction<Item>) {
      state.playerStats.hunger += item.survivalStats.hunger ?? 0;
      state.playerStats.energy += item.survivalStats.energy ?? 0;
      state.playerStats.health += item.survivalStats.health ?? 0;
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
        if (oldItem.id === item.id) {
          return {
            ...oldItem,
            count: oldItem.count - 1,
          };
        }
        return oldItem;
      });

      state.items = state.items.filter((oldItem) => oldItem.count !== 0);
      state.currentItems = state.items.filter((item) =>
        state.currentGroup === "all" ? item : item.group === state.currentGroup
      );

      state.currentItem =
        state.currentItems.find((oldItem) => oldItem.id === item.id) ??
        state.currentItems[0];
    },
    setCurrentItem(state, action: PayloadAction<Item>) {
      state.currentItem = action.payload;
    },
    takeOffItem(state, { payload: item }: PayloadAction<Item>) {
      if (item.type && item.type in state.activeInventory) {
        const type = item.type as ItemType;
        state.activeInventory[type] = undefined;
      }
    },
    setCurrentGroup(state, { payload: group }: PayloadAction<GroupTypeAll>) {
      state.currentGroup = group;
      const filteredItems = state.items.filter((item) =>
        group === "all" ? item : item.group === group
      );

      state.currentItems = filteredItems;
      state.currentItem = filteredItems[0];
    },
  },
});

export const {
  wearItem,
  takeOffItem,
  setCurrentItem,
  eatItem,
  setCurrentGroup,
} = authSlice.actions;
export default authSlice.reducer;
