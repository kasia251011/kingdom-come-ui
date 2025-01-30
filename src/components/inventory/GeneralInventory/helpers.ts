import { GroupTypeAll } from "@/types/common";

export const mapGroupTypeToLabel = (group: GroupTypeAll) => {
  switch (group) {
    case "all":
      return "Wszystko";
    case "armour":
      return "Zbroja";
    case "weapon":
      return "Broń";
    case "food":
      return "Jedzenie";
    case "quest":
      return "Przedmioty fabularne";
    case "other":
      return "Inne";
  }
};
