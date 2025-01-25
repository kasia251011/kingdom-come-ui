import { useAppSelector } from "@/redux/hooks";

import PAPER from "@/assets/general_inventory_paper.png";
import InventoryListItem from "./InventoryListItem";
import { allGroups } from "./groupLabels";

import ICON_CONTROLLER_L1 from "@/assets/controller-icons/pad_l1_x4.png";
import ICON_CONTROLLER_R1 from "@/assets/controller-icons/pad_r1_x4.png";

import LINE from "@/assets/line.png";

const GeneralInventory = () => {
  const { currentGroup, currentItems } = useAppSelector((state) => state.app);

  return (
    <div>
      <div className="flex gap-5 pb-2 pl-4 ">
        <img className="h-5" src={ICON_CONTROLLER_L1} />

        {allGroups.map((group, index) => (
          <div
            key={index}
            className={`${currentGroup === group ? "bg-amber-700" : ""} px-2`}
          >
            {group.slice(0, 2)}
          </div>
        ))}
        <img className="h-5" src={ICON_CONTROLLER_R1} />
      </div>
      <div
        className="flex flex-col  bg-no-repeat bg-center bg-contain h-[425px] p-5 text-black"
        style={{ backgroundImage: `url(${PAPER})` }}
      >
        {currentItems.map((item, index) => (
          <div>
            <InventoryListItem key={index} item={item} />
            <img className="w-full " src={LINE} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeneralInventory;
