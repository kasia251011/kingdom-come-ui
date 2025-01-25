import { useAppSelector } from "@/redux/hooks";
import MainStat from "../MainStat";
import { getMainStatLabel } from "./helpers";

const MainStats = () => {
  const { energy, health, hunger } = useAppSelector(
    (state) => state.app.playerStats
  );

  return (
    <div className="flex flex-col gap-0.4">
      <MainStat value={health} stats={getMainStatLabel("health")} />
      <MainStat value={hunger} stats={getMainStatLabel("hunger")} />
      <MainStat value={100} stats={getMainStatLabel("energy")} />
    </div>
  );
};

export default MainStats;
