import { setCurrentItem } from "@/redux/appSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useCallback } from "react";

const useSelectItem = () => {
  const dispatch = useAppDispatch();
  const { items, currentItem } = useAppSelector((state) => state.app);

  const selectNextItem = useCallback(() => {
    const currentIndex = items.indexOf(currentItem);
    if (currentIndex === items.length - 1) return;

    dispatch(setCurrentItem(items[currentIndex + 1]));
  }, [currentItem, dispatch, items]);

  const selectPreviousItem = useCallback(() => {
    const currentIndex = items.indexOf(currentItem);
    if (currentIndex === 0) return;

    dispatch(setCurrentItem(items[currentIndex - 1]));
  }, [currentItem, dispatch, items]);

  return { selectNextItem, selectPreviousItem };
};

export default useSelectItem;
