import { useAppSelector } from "@/redux/hooks";

import PAPER from "@/assets/general_inventory_paper.png";
import InventoryListItem from "./InventoryListItem";

const GeneralInventory = () => {
  const { items } = useAppSelector((state) => state.app);

  return (
    <div
      className="flex flex-col gap-4 bg-no-repeat bg-center bg-contain h-[720px] p-5 text-black"
      style={{ backgroundImage: `url(${PAPER})` }}
    >
      {items.map((item, index) => (
        <InventoryListItem key={index} item={item} />
      ))}
    </div>
  );
};

export default GeneralInventory;
