import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { eatItem, takeOffItem, wearItem } from "@/redux/appSlice";
import { useCallback } from "react";
import { ItemType } from "@/types/common";

const useActionItem = () => {
  const dispatch = useAppDispatch();
  const { currentItem, activeInventory } = useAppSelector((state) => state.app);

  const actionItem = useCallback(() => {
    if (currentItem.type === "food") {
      dispatch(eatItem(currentItem));
      return;
    }

    const isOnPlayer =
      activeInventory[currentItem.type as ItemType]?.id === currentItem.id;

    if (!isOnPlayer) {
      dispatch(wearItem(currentItem));
    } else {
      dispatch(takeOffItem(currentItem));
    }
  }, [activeInventory, currentItem, dispatch]);

  return actionItem;
};

export default useActionItem;
