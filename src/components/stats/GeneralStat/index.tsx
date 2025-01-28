import { useAppSelector } from "@/redux/hooks";
import { ItemType, GeneralStatName } from "@/types/common";
import { getStatLabel } from "./generalStatsLabels";

interface SideStatProps {
  statName: GeneralStatName;
  statImage: string;
}

const GeneralStat = ({ statName, statImage }: SideStatProps) => {
  const { label } = getStatLabel(statName);
  const activeInventory = useAppSelector((state) => state.app.activeInventory);

  const value = Object.keys(activeInventory).reduce(
    (sum, key) =>
      sum + (activeInventory[key as ItemType]?.sideStats[statName] ?? 0),
    0
  );

  return (
    <div className="flex gap-2 w-34 text-sm justify-between items-center">
      <img src={statImage} alt={label} className="size-7" />
      <p className="font-semibold self-end">{label}</p>
      <p className="font-semibold self-end w-3">{value}</p>
    </div>
  );
};

export default GeneralStat;
