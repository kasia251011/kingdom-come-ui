import DefenseStat from "../../DefenseStat";
import Slot from "../../Slot";
import MAIN_HAND_PREVIEW from "@/assets/items-preview/main_hand.png";
import OFF_HAND_PREVIEW from "@/assets/items-preview/off_hand.png";

const MeleeWeapon = () => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="flex gap-1">
        <DefenseStat defenseType="stab" itemTypes={["mainHand", "offHand"]} />
        <DefenseStat defenseType="slash" itemTypes={["mainHand", "offHand"]} />
        <DefenseStat defenseType="blunt" itemTypes={["mainHand", "offHand"]} />
      </div>
      <div className="flex flex-col gap-2">
        <Slot
          slotLabel={{
            label: "mainHand",
            previewImage: MAIN_HAND_PREVIEW,
          }}
        />
        <Slot
          slotLabel={{
            label: "offHand",
            previewImage: OFF_HAND_PREVIEW,
          }}
        />
      </div>
    </div>
  );
};

export default MeleeWeapon;
