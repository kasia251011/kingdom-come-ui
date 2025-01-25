import { useAppSelector } from "@/redux/hooks";
import SurvivalStat from "../SurvivalStat";
import { getSurvivalStat } from "./helpers";

const SurvivalStats = () => {
  const { energy, health, hunger } = useAppSelector(
    (state) => state.app.playerStats
  );

  return (
    <div className="flex flex-col gap-0.4">
      <SurvivalStat value={health} stats={getSurvivalStat("health")} />
      <SurvivalStat value={hunger} stats={getSurvivalStat("hunger")} />
      <SurvivalStat value={energy} stats={getSurvivalStat("energy")} />
    </div>
  );
};

export default SurvivalStats;
