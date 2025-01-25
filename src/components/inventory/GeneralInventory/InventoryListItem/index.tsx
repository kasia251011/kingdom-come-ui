import { useAppSelector } from "@/redux/hooks";
import { ItemType } from "@/types/common";
import { Item } from "@/types/item";
import { useMemo } from "react";

const InventoryListItem = ({ item }: { item: Item }) => {
  const { activeInventory, currentItem } = useAppSelector((state) => state.app);

  console.log(currentItem.name);

  const isOnPLayer = useMemo(
    () => activeInventory[item.type as ItemType]?.id === item.id,
    [activeInventory, item.id, item.type]
  );

  const isSelected = useMemo(
    () => item.id === currentItem?.id,
    [currentItem, item.id]
  );

  return (
    <div
      className={`flex items-center justify-between cursor-pointer px-3 ${
        isSelected ? "bg-amber-400" : ""
      }`}
    >
      <div className="flex gap-4 items-center">
        <img src={item.image} className="size-10" />
        <p>{item.name}</p>
      </div>
      <div className="flex items-center pr-4">
        {isOnPLayer && <div className="size-2 bg-amber-950 rounded" />}
        <p className="w-16 text-right ">{item.count}</p>
        <p className="w-16 text-right ">{item.durability}</p>
        <p className="w-16 text-right "> {item.price}</p>
      </div>
    </div>
  );
};

export default InventoryListItem;
