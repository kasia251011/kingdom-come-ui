import { useAppSelector } from "@/redux/hooks";
import { ItemType, GeneralStatName } from "@/types/common";
import { getStatLabel } from "./generalStatsLabels";

interface SideStatProps {
  statName: GeneralStatName;
}

const GeneralStat = ({ statName }: SideStatProps) => {
  const { label } = getStatLabel(statName);
  const activeInventory = useAppSelector((state) => state.app.activeInventory);

  const value = Object.keys(activeInventory).reduce(
    (sum, key) =>
      sum + (activeInventory[key as ItemType]?.sideStats[statName] ?? 0),
    0
  );

  return (
    <div className="flex gap-4 w-32 justify-between  ">
      <p>{label}</p> <p>{value}</p>
    </div>
  );
};

export default GeneralStat;
