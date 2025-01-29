import { useAppSelector } from "@/redux/hooks";
import { ItemType, GeneralStatName } from "@/types/common";
import { getStatLabel } from "./generalStatsLabels";
import { useEffect, useMemo, useState } from "react";

interface SideStatProps {
  statName: GeneralStatName;
  statImage: string;
}

const GeneralStat = ({ statName, statImage }: SideStatProps) => {
  const { label } = getStatLabel(statName);
  const { activeInventory, currentItem } = useAppSelector((state) => state.app);
  const [virtualValue, setVirtualValue] = useState<number | null>(null);

  const value = Object.keys(activeInventory).reduce(
    (sum, key) =>
      sum + (activeInventory[key as ItemType]?.sideStats[statName] ?? 0),
    0
  );

  useEffect(() => {
    const setComparedItemStats = () => {
      if (!currentItem.type || currentItem.sideStats[statName] === value) {
        setVirtualValue(null);
        return;
      }
      const newVirtualValue =
        value -
        (activeInventory[currentItem.type]?.sideStats[statName] ?? 0) +
        currentItem.sideStats[statName];
      setVirtualValue(newVirtualValue);
    };
    setComparedItemStats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentItem]);

  const statColor = useMemo((): string => {
    if (!virtualValue || value === virtualValue) {
      return "";
    }
    if (
      statName === "noise" ||
      statName === "conspiracy" ||
      statName === "visibility"
    ) {
      return virtualValue > value ? "text-red-500" : "text-blue-500";
    }
    return value > virtualValue ? "text-red-500" : "text-blue-500";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [virtualValue, value]);

  return (
    <div className="flex gap-2 w-34 text-sm justify-between items-center">
      <img src={statImage} alt={label} className="size-7" />
      <p className="font-semibold self-end">{label}</p>
      <p className={`font-semibold self-end w-3 ${statColor}`}>
        {virtualValue ? virtualValue : value}
      </p>
    </div>
  );
};

export default GeneralStat;
