import { MainStatName } from "@/types/common";
import HEALTH_ICON from "../../../../assets/icons/main-stats/health-icon.png";
import HUNGER_ICON from "../../../../assets/icons/main-stats/hunger-icon.png";
import ENERGY_ICON from "../../../../assets/icons/main-stats/energy-icon.png";
import HEALTHBAR from "../../../../assets/icons/main-stats/healthbar.png";
import HEALTHBAR_FILL from "../../../../assets/icons/main-stats/healthbar-fill.png";
import HUNGERBAR from "../../../../assets/icons/main-stats/hungerbar.png";
import HUNGERBAR_FILL from "../../../../assets/icons/main-stats/hungerbar-fill.png";
import ENERGYBAR from "../../../../assets/icons/main-stats/energybar.png";
import ENERGYBAR_FILL from "../../../../assets/icons/main-stats/energybar-fill.png";
import { MainStats } from "../MainStat/types";

const mainStatsLabels: MainStats[] = [
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

export function getMainStatLabel(name: MainStatName) {
  return (
    mainStatsLabels.find((stat) => stat.fieldName === name) ??
    mainStatsLabels[0]
  );
}
