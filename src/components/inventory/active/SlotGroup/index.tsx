import { SlotLabel } from "../slotLabels";
import Slot from "../Slot";
import DefenseStat from "../DefenseStat";

interface SlotGroupProps {
  slots: SlotLabel[];
  label: string;
}

const SlotGroup = ({ slots, label }: SlotGroupProps) => {
  return (
    <div>
      <div className="flex gap-3 mb-1 items-center">
        <p className="uppercase text-sm">{label}</p>
        <div className="flex gap-2">
          <DefenseStat
            defenseType="stab"
            itemTypes={slots.map((slot) => slot.label)}
          />
          <DefenseStat
            defenseType="slash"
            itemTypes={slots.map((slot) => slot.label)}
          />
          <DefenseStat
            defenseType="blunt"
            itemTypes={slots.map((slot) => slot.label)}
          />
        </div>
      </div>
      <div className="flex gap-2">
        {slots.map((slot, index) => (
          <Slot key={index} slotLabel={slot} />
        ))}
      </div>
    </div>
  );
};

export default SlotGroup;
