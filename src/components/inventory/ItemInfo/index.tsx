import PAPER from "@/assets/item_info_paper.png";
import { useAppSelector } from "@/redux/hooks";

import STAB_DARK from "@/assets/defense-icons/stab_dark.png";
import SLASH_DARK from "@/assets/defense-icons/slash_dark.png";
import BLUNT_DARK from "@/assets/defense-icons/blunt_dark.png";
import { useEffect, useRef } from "react";

const ItemInfo = () => {
  const { currentItem } = useAppSelector((state) => state.app);
  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (divRef.current) {
        if (event.key === "k") {
          divRef.current.scrollBy({ top: 7, behavior: "smooth" });
        }
        if (event.key === "i") {
          divRef.current.scrollBy({ top: -7, behavior: "smooth" });
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div
      className="flex gap-3 bg-no-repeat bg-center bg-contain h-[200px] w-[650px] -ml-2 -mt-6 px-7 pt-10 text-black"
      style={{ backgroundImage: `url(${PAPER})` }}
    >
      {currentItem !== undefined && (
        <>
          <img src={currentItem.image} className="size-20" />
          <div className="">
            <p className="text-xl nav-item">{currentItem.name}</p>
            <div className="mt-2 overflow-y-auto h-14" ref={divRef}>
              <p className="text-sm ">{currentItem.description}</p>
            </div>
            <div className="flex gap-6 mt-2">
              {!!currentItem.sideStats.stab && (
                <div className="flex gap-2">
                  <img src={STAB_DARK} className="w-5" />
                  <p> {currentItem.sideStats.stab}</p>
                </div>
              )}

              {!!currentItem.sideStats.slash && (
                <div className="flex ">
                  <img src={SLASH_DARK} className="w-5" />
                  <p> {currentItem.sideStats.slash}</p>
                </div>
              )}

              {!!currentItem.sideStats.blunt && (
                <div className="flex  ">
                  <img src={BLUNT_DARK} className="w-5" />
                  <p> {currentItem.sideStats.blunt}</p>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ItemInfo;
