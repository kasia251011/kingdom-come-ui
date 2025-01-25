import { SurvivalStatName } from "@/types/common";
import ENERGY_ICON from "@/assets/stats/survival-stats/energy-icon.png";
import ENERGYBAR_FILL from "@/assets/stats/survival-stats/energybar-fill.png";
import ENERGYBAR from "@/assets/stats/survival-stats/energybar.png";
import HEALTH_ICON from "@/assets/stats/survival-stats/health-icon.png";
import HEALTHBAR_FILL from "@/assets/stats/survival-stats/healthbar-fill.png";
import HEALTHBAR from "@/assets/stats/survival-stats/healthbar.png";
import HUNGER_ICON from "@/assets/stats/survival-stats/hunger-icon.png";
import HUNGERBAR_FILL from "@/assets/stats/survival-stats/hungerbar-fill.png";
import HUNGERBAR from "@/assets/stats/survival-stats/hungerbar.png";
import { SurvivalStats } from "../SurvivalStat/types";

const survivalStatsLabel: SurvivalStats[] = [
  {
    label: "Zdrowie",
    fieldName: "health",
    icon: HEALTH_ICON,
    bar: HEALTHBAR,
    fill: HEALTHBAR_FILL,
  },
  {
    label: "Głód",
    fieldName: "hunger",
    icon: HUNGER_ICON,
    bar: HUNGERBAR,
    fill: HUNGERBAR_FILL,
  },
  {
    label: "Energia",
    fieldName: "energy",
    icon: ENERGY_ICON,
    bar: ENERGYBAR,
    fill: ENERGYBAR_FILL,
  },
];

export function getSurvivalStat(name: SurvivalStatName) {
  return (
    survivalStatsLabel.find((stat) => stat.fieldName === name) ??
    survivalStatsLabel[0]
  );
}
