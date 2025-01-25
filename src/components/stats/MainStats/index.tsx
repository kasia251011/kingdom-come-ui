import { useAppSelector } from "@/redux/hooks";
import HEALTH_ICON from "../../../assets/icons/main-stats/health-icon.png";
import HUNGER_ICON from "../../../assets/icons/main-stats/hunger-icon.png";
import ENERGY_ICON from "../../../assets/icons/main-stats/energy-icon.png";
import HEALTHBAR from "../../../assets/icons/main-stats/healthbar.png";
import HEALTHBAR_FILL from "../../../assets/icons/main-stats/healthbar-fill.png";
import HUNGERBAR from "../../../assets/icons/main-stats/hungerbar.png";
import HUNGERBAR_FILL from "../../../assets/icons/main-stats/hungerbar-fill.png";
import ENERGYBAR from "../../../assets/icons/main-stats/energybar.png";
import ENERGYBAR_FILL from "../../../assets/icons/main-stats/energybar-fill.png";

interface MainStatProps {
  value: number;
  type: "health" | "hunger" | "energy";
}

const MainStat = ({ value, type }: MainStatProps) => {
  return (
    <div className="flex items-center gap-2.5">
      <img src={HEALTH_ICON} alt={`${type} icon`} className="h-8 w-8" />
      <div className="relative">
        <img src={HEALTHBAR} alt={`${type} bar`} />
        <img
          src={HEALTHBAR_FILL}
          alt={`${type} fill`}
          className={`absolute top-0 left-0 h-full object-cover`}
          style={{ width: `${value}%` }}
        />
      </div>
      <p>{value}/100</p>
    </div>
  );
};

const MainStats = () => {
  const { energy, health, hunger } = useAppSelector(
    (state) => state.app.playerStats
  );

  return (
    <div>
      <MainStat type="health" value={health} />
      <MainStat type="hunger" value={hunger} />
      <MainStat type="energy" value={energy} />
    </div>
  );
};

export default MainStats;
