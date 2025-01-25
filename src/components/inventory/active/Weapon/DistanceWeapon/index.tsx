import DefenseStat from "../../DefenseStat";
import Slot from "../../Slot";

import BOW_PREVIEW from "@/assets/items-preview/bow.png";
import ARROWS_PREVIEW from "@/assets/items-preview/arrows.png";
import SLASH_ICON from "@/assets/defense-icons/slash.png";
import BLUNT_ICON from "@/assets/defense-icons/blunt.png";

const DistanceWeapon = () => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="flex gap-1">
        <DefenseStat defenseType="stab" itemTypes={["arrows"]} />
        <div className="flex w-10 justify-between">
          <img src={SLASH_ICON} className="w-5" />
          <p className={`text-right`}>-</p>
        </div>
        <div className="flex w-10 justify-between">
          <img src={BLUNT_ICON} className="w-5" />
          <p className={` text-right`}>-</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Slot
          slotLabel={{
            label: "bow",
            previewImage: BOW_PREVIEW,
          }}
        />
        <Slot
          slotLabel={{
            label: "arrows",
            previewImage: ARROWS_PREVIEW,
          }}
        />
      </div>
    </div>
  );
};

export default DistanceWeapon;
