import { useAppSelector } from "@/redux/hooks";
import { ItemType } from "@/types/common";
import { Item } from "@/types/item";
import { useMemo } from "react";
import IS_ON_PLAYER from "@/assets/general-inventory/is_on_player.png";
import BROKEN from "@/assets/general-inventory/broken.png";

const InventoryListItem = ({ item }: { item: Item }) => {
  const { activeInventory, currentItem } = useAppSelector((state) => state.app);

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
        <div className="relative">
          <img src={item.image} className="size-10" />
          {isOnPLayer && (
            <img
              src={IS_ON_PLAYER}
              className="size-3.5 absolute bottom-1 -right-2.5"
            />
          )}
          {item.durability < 20 && (
            <img
              src={BROKEN}
              className="size-5 absolute bottom-0.5 -left-2.5"
            />
          )}
        </div>
        <p>{item.name}</p>
      </div>
      <div className="flex items-center pr-4">
        <p className="w-16 text-right font-semibold">{item.count}</p>
        <p
          className={`w-16 text-right font-semibold ${
            item.durability < 20 ? "text-red-500" : ""
          } `}
        >
          {item.durability}
        </p>
        <p className="w-16 text-right font-semibold"> {item.price}</p>
      </div>
    </div>
  );
};

export default InventoryListItem;
