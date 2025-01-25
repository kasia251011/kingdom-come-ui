import { setCurrentItem } from "@/redux/appSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useCallback } from "react";

const useSelectItem = () => {
  const dispatch = useAppDispatch();
  const { currentItems, currentItem } = useAppSelector((state) => state.app);

  const selectNextItem = useCallback(() => {
    const currentIndex = currentItems.indexOf(currentItem);
    if (currentIndex === currentItems.length - 1) return;

    dispatch(setCurrentItem(currentItems[currentIndex + 1]));
  }, [currentItem, dispatch, currentItems]);

  const selectPreviousItem = useCallback(() => {
    const currentIndex = currentItems.indexOf(currentItem);

    if (currentIndex === 0) return;

    dispatch(setCurrentItem(currentItems[currentIndex - 1]));
  }, [currentItem, dispatch, currentItems]);

  return { selectNextItem, selectPreviousItem };
};

export default useSelectItem;
