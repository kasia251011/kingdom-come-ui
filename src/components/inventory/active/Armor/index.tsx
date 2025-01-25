import SlotGroup from "../SlotGroup";
import {
  accessorySlotLabels,
  armsSlotLabels,
  bodySlotLabels,
  headSlotLabels,
  legSlotLabels,
} from "../slotLabels";

const Armor = () => {
  return (
    <div className="flex flex-col gap-4">
      <SlotGroup label="Ochrona głowy" slots={headSlotLabels} />
      <SlotGroup label="Ochrona Ciała" slots={bodySlotLabels} />
      <SlotGroup label="Ochrona Rąk" slots={armsSlotLabels} />
      <SlotGroup label="Ochrona Nóg" slots={legSlotLabels} />
      <SlotGroup label="Dodatki" slots={accessorySlotLabels} />
    </div>
  );
};

export default Armor;
