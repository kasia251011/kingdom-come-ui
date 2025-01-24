import SLOT_PAPER from "@/assets/slot-paper.png";
import { ItemType } from "@/types/common";
import { SlotLabel } from "./slotLabels";
import { useAppSelector } from "@/redux/hooks";
import { useCallback } from "react";

interface SlotGroupProps {
  slots: SlotLabel[];
  label: string;
}

const SlotGroup = ({ slots, label }: SlotGroupProps) => {
  const activeInventory = useAppSelector((state) => state.app.activeInventory);

  const itemActive = useCallback(
    (slotLabel: string) => {
      return activeInventory[slotLabel as ItemType]?.image;
    },
    [activeInventory]
  );

  return (
    <div className="">
      <div className="flex gap-3 mb-1">
        <p className="uppercase">{label}</p>
        <div>stats</div>
      </div>
      <div className="flex gap-2">
        {slots.map((slot, index) => (
          <div
            style={{
              backgroundImage: `url(${SLOT_PAPER})`,
            }}
            key={index}
            className={`size-15 flex justify-center items-center bg-no-repeat bg-center bg-cover`}
          >
            <img
              src={itemActive(slot.label) ?? slot.previewImage}
              className={`${itemActive(slot.label) ? "size-10" : ""}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlotGroup;
