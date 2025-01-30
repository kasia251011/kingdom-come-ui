import SLOT_PAPER from "@/assets/slot-paper.png";
import SLOT_SELECT from "@/assets/slot_select.png";
import { ItemType } from "@/types/common";
import { SlotLabel } from "../slotLabels";
import { useAppSelector } from "@/redux/hooks";
import SELECTION_MARKER from "@/assets/selection-marker.png";
import { useMemo } from "react";

interface SlotProps {
  slotLabel: SlotLabel;
}

const Slot = ({ slotLabel }: SlotProps) => {
  const { activeInventory, currentItem } = useAppSelector((state) => state.app);

  const itemActive = useMemo(() => {
    return activeInventory[slotLabel.label as ItemType]?.image;
  }, [activeInventory, slotLabel.label]);

  const isItemSelected = useMemo(() => {
    return currentItem?.type === slotLabel.label;
  }, [currentItem?.type, slotLabel.label]);

  return (
    <div
      style={{
        backgroundImage: `url(${isItemSelected ? SLOT_SELECT : SLOT_PAPER})`,
      }}
      className={`relative size-15 flex justify-center items-center bg-no-repeat bg-center bg-cover`}
    > 
      {isItemSelected && (
        <img src={SELECTION_MARKER} className="absolute left-0 -translate-x-[80%] h-7" alt="" />
      )}
      <img
        src={itemActive ?? slotLabel.previewImage}
        className={`${itemActive ? "size-10 " : "opacity-30"}   `}
      />
    </div>
  );
};

export default Slot;
