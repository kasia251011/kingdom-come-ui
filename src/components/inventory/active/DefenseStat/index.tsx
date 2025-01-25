import { DefenseStats, ItemType } from "@/types/common";
import STAB_ICON from "@/assets/defense-icons/stab.png";
import SLASH_ICON from "@/assets/defense-icons/slash.png";
import BLUNT_ICON from "@/assets/defense-icons/blunt.png";
import { useMemo } from "react";
import { useAppSelector } from "@/redux/hooks";

interface DefenseStatProps {
  defenseType: keyof DefenseStats;
  itemTypes: ItemType[];
}

const DefenseStat = ({ defenseType, itemTypes }: DefenseStatProps) => {
  const { activeInventory, currentItem } = useAppSelector((state) => state.app);

  const sum = useMemo(() => {
    return itemTypes.reduce((acc, type) => {
      const item = activeInventory[type];
      return acc + (item?.sideStats[defenseType] || 0);
    }, 0);
  }, [activeInventory, itemTypes, defenseType]);

  const selectedItemValue = useMemo(() => {
    if (
      !currentItem ||
      (currentItem.group !== "armour" && currentItem.group !== "weapon")
    )
      return 0;

    const isItemOnPlayer =
      activeInventory[currentItem.type as ItemType]?.id === currentItem.id;
    const isSameType = itemTypes.find((type) => type === currentItem.type);

    if (isItemOnPlayer || !isSameType) {
      return 0;
    }

    const currentItemValue = currentItem.sideStats[defenseType] || 0;
    const activeItem = activeInventory[currentItem.type as ItemType];

    if (activeItem && activeItem.sideStats[defenseType]) {
      return currentItemValue - activeItem.sideStats[defenseType];
    }

    return currentItemValue;
  }, [activeInventory, currentItem, itemTypes, defenseType]);

  const valueColor = useMemo(() => {
    if (selectedItemValue < 0) {
      return "text-red-500";
    }
    if (selectedItemValue > 0) {
      return "text-blue-500";
    }
    return "";
  }, [selectedItemValue]);

  const icon = useMemo(() => {
    switch (defenseType) {
      case "stab":
        return STAB_ICON;
      case "slash":
        return SLASH_ICON;
      case "blunt":
        return BLUNT_ICON;
    }
  }, [defenseType]);

  return (
    <div className="flex w-10 justify-between">
      <img src={icon} alt={defenseType} className="w-5" />
      <p className={`${valueColor}  text-right`}> {sum + selectedItemValue}</p>
    </div>
  );
};

export default DefenseStat;
