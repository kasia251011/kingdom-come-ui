import { useCallback, useEffect } from "react";
import useSelectItem from "./useSelectItem";
import useActionItem from "./useActionItem";
import useSelectGroup from "./useSelectGroup";

const useKeyHandler = () => {
  const { selectNextItem, selectPreviousItem } = useSelectItem();
  const { selectPreviousGroup, selectNextGroup } = useSelectGroup();
  const actionItem = useActionItem();

  const handleKeyDown = useCallback(
    (e: globalThis.KeyboardEvent) => {
      switch (e.key) {
        case "w":
          selectPreviousItem();
          break;
        case "s":
          selectNextItem();
          break;
        case "a":
          selectPreviousGroup();
          break;
        case "d":
          selectNextGroup();
          break;
        case "Enter":
          actionItem();
          break;
        default:
          break;
      }
    },
    [
      actionItem,
      selectNextGroup,
      selectNextItem,
      selectPreviousGroup,
      selectPreviousItem,
    ]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
};

export default useKeyHandler;
