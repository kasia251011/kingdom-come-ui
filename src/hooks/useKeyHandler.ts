import { useCallback, useEffect } from "react";
import useSelectItem from "./useSelectItem";
import useActionItem from "./useActionItem";

const useKeyHandler = () => {
  const { selectNextItem, selectPreviousItem } = useSelectItem();
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
        case "Enter":
          actionItem();
          break;
        default:
          break;
      }
    },
    [actionItem, selectNextItem, selectPreviousItem]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
};

export default useKeyHandler;
