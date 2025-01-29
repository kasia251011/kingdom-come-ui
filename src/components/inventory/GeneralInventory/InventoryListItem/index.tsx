import { useAppSelector } from "@/redux/hooks";
import { ItemType } from "@/types/common";
import { Item } from "@/types/item";
import { useMemo, useRef } from "react";
import IS_ON_PLAYER from "@/assets/general-inventory/is_on_player.png";
import ITEM_SELECTOR from "@/assets/general-inventory/item_selector.png";
import BROKEN from "@/assets/general-inventory/broken.png";

const InventoryListItem = ({ item }: { item: Item }) => {
  const { activeInventory, currentItem } = useAppSelector((state) => state.app);
  const itemRef = useRef<null | HTMLDivElement>(null);

  const isOnPLayer = useMemo(
    () => activeInventory[item.type as ItemType]?.id === item.id,
    [activeInventory, item.id, item.type]
  );

  const isSelected = useMemo(
    () => item.id === currentItem?.id,
    [currentItem, item.id]
  );

  if (isSelected && itemRef.current) {
    itemRef.current.scrollIntoView({
      block: "nearest",
      inline: "nearest",
    });
  }

  return (
    <div
      ref={itemRef}
      className="relative flex items-center justify-between cursor-pointer px-3"
    >
      {isSelected && (
        <img
          src={ITEM_SELECTOR}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
      )}
      <div className="flex gap-4 items-center relative z-10">
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
      <div className="flex items-center pr-4 relative z-10">
        <p className="w-16 text-right font-semibold">{item.count}</p>
        <p
          className={`w-16 text-right font-semibold ${
            item.durability < 20 ? "text-red-500" : ""
          } `}
        >
          {item.durability}
        </p>
        <p className="w-16 text-right font-semibold"> {item.weight}</p>
        <p className="w-16 text-right font-semibold"> {item.price}</p>
      </div>
    </div>
  );
};

export default InventoryListItem;
