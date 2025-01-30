import PAPER from "@/assets/item_info_paper.png";
import { useAppSelector } from "@/redux/hooks";

import STAB_DARK from "@/assets/defense-icons/stab_dark.png";
import SLASH_DARK from "@/assets/defense-icons/slash_dark.png";
import BLUNT_DARK from "@/assets/defense-icons/blunt_dark.png";

import ENERGY_DARK from "@/assets/stats/survival-stats/energy-dark.png";
import HEALTH_DARK from "@/assets/stats/survival-stats/health-dark.png";
import FOOD_DARK from "@/assets/stats/survival-stats/food-dark.png";

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

  if (!currentItem) {
    return null;
  }

  return (
    <div
      className="flex gap-3 bg-no-repeat bg-center bg-contain h-[200px] w-[650px] -ml-2 -mt-6 px-7 pt-10 text-black"
      style={{ backgroundImage: `url(${PAPER})` }}
    >
      <img src={currentItem.image} className="size-20" />
      <div className="">
        <p className="text-xl nav-item">{currentItem.name}</p>
        <div className="mt-2 overflow-y-auto h-14" ref={divRef}>
          <p className="text-sm ">{currentItem.description}</p>
        </div>
        <div className="flex items-center gap-6 mt-4 text-gray-700">
          {currentItem.group === "armour" && (
            <span className="text-sm">Ochrona:</span>
          )}
          {currentItem.group === "weapon" && currentItem.type !== "bow" && (
            <span className="text-sm">Obrażenia:</span>
          )}

          {currentItem.group === "food" && (
            <>
              <div className="flex items-center gap-1">
                <p className="text-sm">Energia</p>
                <div
                  style={{ backgroundImage: `url(${ENERGY_DARK})` }}
                  className="w-3 h-3 bg-center bg-no-repeat bg-cover mr-1s"
                ></div>
                <p className="text-sm font-extrabold">
                  {currentItem.survivalStats.energy}
                </p>
              </div>

              <div className="flex items-center gap-1">
                <p className="text-sm">Zdrowie</p>
                <div
                  style={{ backgroundImage: `url(${HEALTH_DARK})` }}
                  className="w-5 h-5 bg-center bg-no-repeat bg-cover mb-1"
                ></div>
                <p className="text-sm font-extrabold">
                  {currentItem.survivalStats.health}
                </p>
              </div>

              <div className="flex items-center gap-1">
                <p className="text-sm">Strawa</p>
                <div
                  style={{ backgroundImage: `url(${FOOD_DARK})` }}
                  className="w-5 h-5 bg-center bg-no-repeat bg-cover"
                ></div>
                <p className="text-sm font-extrabold">
                  {currentItem.survivalStats.hunger}
                </p>
              </div>
            </>
          )}

          {(currentItem.group === "armour" ||
            currentItem.group === "weapon") && (
              <>
                {currentItem.sideStats.stab !== undefined && (
                  <div className="flex items-center gap-1">
                    <p className="text-sm">Kłute</p>
                    <div
                      style={{ backgroundImage: `url(${STAB_DARK})` }}
                      className="w-4 h-4 bg-center bg-no-repeat bg-cover"
                    ></div>
                    <p className="text-sm font-extrabold">
                      {currentItem.sideStats.stab}
                    </p>
                  </div>
                )}

                {currentItem.sideStats.slash !== undefined && (
                  <div className="flex items-center gap-1">
                    <p className="text-sm">Cięte</p>
                    <div
                      style={{ backgroundImage: `url(${SLASH_DARK})` }}
                      className="w-4 h-4 bg-center bg-no-repeat bg-cover"
                    ></div>
                    <p> {currentItem.sideStats.slash}</p>
                  </div>
                )}

                {currentItem.sideStats.blunt !== undefined && (
                  <div className="flex items-center gap-1">
                    <p className="text-sm">Obuchowe</p>
                    <div
                      style={{ backgroundImage: `url(${BLUNT_DARK})` }}
                      className="w-4 h-4 bg-center bg-no-repeat bg-cover"
                    ></div>
                    <p> {currentItem.sideStats.blunt}</p>
                  </div>
                )}
              </>
            )}
        </div>
      </div>
    </div>
  );
};

export default ItemInfo;
