import { allGroups } from "@/components/inventory/GeneralInventory/groupLabels";
import { setCurrentGroup } from "@/redux/appSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useCallback } from "react";

const useSelectGroup = () => {
  const dispatch = useAppDispatch();
  const { currentGroup } = useAppSelector((state) => state.app);

  const selectNextGroup = useCallback(() => {
    const currentIndex = allGroups.indexOf(currentGroup);
    if (currentIndex === allGroups.length - 1) return;

    dispatch(setCurrentGroup(allGroups[currentIndex + 1]));
  }, [currentGroup, dispatch]);

  const selectPreviousGroup = useCallback(() => {
    const currentIndex = allGroups.indexOf(currentGroup);
    if (currentIndex === 0) return;

    dispatch(setCurrentGroup(allGroups[currentIndex - 1]));
  }, [currentGroup, dispatch]);

  return { selectNextGroup, selectPreviousGroup };
};

export default useSelectGroup;
