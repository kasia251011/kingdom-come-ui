import { useAppSelector } from "@/redux/hooks";

import PAPER from "@/assets/general-inventory/general_inventory_paper.png";
import InventoryListItem from "./InventoryListItem";
import { allGroups } from "./groupLabels";

import ICON_CONTROLLER_L1 from "@/assets/controller-icons/pad_l1_x4.png";
import ICON_CONTROLLER_R1 from "@/assets/controller-icons/pad_r1_x4.png";

import LINE from "@/assets/general-inventory/line.png";
import DECORATION_TOP from "@/assets/general-inventory/decoration_top.png";

import QUANTITY from "@/assets/stats/item-stats/quantity.png";
import DURABILITY from "@/assets/stats/item-stats/durability.png";
import WEIGHT from "@/assets/stats/item-stats/weight.png";
import PRICE from "@/assets/stats/item-stats/price.png";

const GeneralInventory = () => {
  const { currentGroup, currentItems, items, maxEquipLoad, currentGold } =
    useAppSelector((state) => state.app);

  const calculateCurrentEquipLoad = (): number => {
    const currentEquipLoad = items
      .map((item) => item.weight)
      .reduce((sum, weight) => sum + weight, 0);
    return Math.round(currentEquipLoad * 10) / 10;
  };

  return (
    <div>
      <div className="flex gap-3 pb-2 pl-4 ">
        <div className="flex w-2/3 justify-between items-center">
          <img className="h-5" src={ICON_CONTROLLER_L1} />
          {/*TODO: ADD ICONS FOR CATEGORIES*/}
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
        <div className="flex gap-5 w-1/3 items-center justify-end mr-4">
          <div className="flex gap-0.5">
            <img src={WEIGHT} className="size-7" />
            <p className="self-end">{`${calculateCurrentEquipLoad()} / ${maxEquipLoad}`}</p>
          </div>
          <div className="flex gap-0.5">
            <img src={PRICE} className="size-7" />
            <p className="self-end">{currentGold}</p>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col bg-no-repeat bg-cover h-[500px] p-5 text-black"
        style={{ backgroundImage: `url(${PAPER})` }}
      >
        <div
          className="bg-no-repeat flex items-center justify-between px-3 py-1"
          style={{ backgroundImage: `url(${DECORATION_TOP})` }}
        >
          <p className="ml-2 text-yellow-300">Nazwa przedmiotu</p>
          <div className="flex items-center pr-4">
            <div className="flex w-15 justify-end">
              <img src={QUANTITY} className="size-7" />
            </div>
            <div className="flex w-15 justify-end">
              <img src={DURABILITY} className="size-7" />
            </div>
            <div className="flex w-15 justify-end">
              <img src={WEIGHT} className="size-7" />
            </div>
            <div className="flex w-15 justify-end">
              <img src={PRICE} className="size-7" />
            </div>
          </div>
        </div>
        <div className="h-full overflow-hidden">
          {" "}
          {currentItems.map((item, index) => (
            <div key={index}>
              <InventoryListItem item={item} />
              <img className="w-full" src={LINE} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GeneralInventory;
