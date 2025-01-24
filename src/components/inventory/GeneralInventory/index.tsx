import { useCallback } from "react";
import { setCurrentItem, takeOffItem, wearItem } from "@/redux/appSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Item } from "@/types/item";
import { ItemType } from "@/types/common";

const GeneralInventory = () => {
  const { items, activeInventory } = useAppSelector((state) => state.app);

  const dispatch = useAppDispatch();
  const isOnPLayer = useCallback(
    (item: Item) => activeInventory[item.type as ItemType]?.id === item.id,
    [activeInventory]
  );
  const selectItem = (item: Item) => {
    dispatch(setCurrentItem(item));
    if (!isOnPLayer(item)) {
      dispatch(wearItem(item));
    } else {
      dispatch(takeOffItem(item));
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex justify-between cursor-pointer "
          onClick={() => selectItem(item)}
        >
          <div className="flex gap-4 items-center">
            <img src={item.image} className="size-10" />
            <p>{item.name}</p>

            <p className="w-16 text-right">{isOnPLayer(item) && "Założone"}</p>
          </div>
          <div className="flex">
            <p className="w-16 text-right">{item.count}</p>
            <p className="w-16 text-right">{item.durability}</p>
            <p className="w-16 text-right"> {item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GeneralInventory;
