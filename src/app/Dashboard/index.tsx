import PLAYER_FIGURE from "@/assets/player-figure.png";
import ButtonsInstruction from "@/components/ButtonsInstruction";
import Armor from "@/components/inventory/active/Armor";
import DistanceWeapon from "@/components/inventory/active/Weapon/DistanceWeapon";
import MeleeWeapon from "@/components/inventory/active/Weapon/MeleeWeapon";
import GeneralInventory from "@/components/inventory/GeneralInventory";
import ItemInfo from "@/components/inventory/ItemInfo";
import Level from "@/components/Level";
import MainNav from "@/components/MainNav";
import GeneralStat from "@/components/stats/GeneralStat";
import SurvivalStats from "@/components/stats/survival-stats/SurvivalStats";
import useKeyHandler from "@/hooks/useKeyHandler";
import STATS_BACKGROUND from "@/assets/stats_background.png";
import CHARISMA from "@/assets/stats/player-stats/charisma.png";
import CONSPIRACY from "@/assets/stats/player-stats/conspiracy.png";
import NOISE from "@/assets/stats/player-stats/noise.png";
import SPEED from "@/assets/stats/player-stats/speed.png";
import VISIBILITY from "@/assets/stats/player-stats/visibility.png";

const Dashboard = () => {
  useKeyHandler();

  return (
    <div className="container ">
      <MainNav />
      <div className="grid grid-cols-12">
        <div className="flex col-span-7">
          <div className="mt-20">
            <Armor />
            <div
              className="flex gap-4 p-5 mt-8 bg-no-repeat bg-center "
              style={{
                backgroundImage: `url(${STATS_BACKGROUND})`,
                backgroundSize: "100% 100%",
              }}
            >
              <div className="mr-2">
                <GeneralStat statName="visibility" statImage={VISIBILITY} />
                <GeneralStat statName="conspiracy" statImage={CONSPIRACY} />
                <GeneralStat statName="noise" statImage={NOISE} />
              </div>
              <div className="">
                <GeneralStat statName="speed" statImage={SPEED} />
                <GeneralStat statName="charisma" statImage={CHARISMA} />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center ">
            <Level />
            <img src={PLAYER_FIGURE} className="w-64 mt-8 mx-10" />
            <SurvivalStats />
          </div>
          <div className="mt-20 flex flex-col gap-4">
            <MeleeWeapon />
            <DistanceWeapon />
          </div>
        </div>
        <div className="col-span-5 mt-10">
          <GeneralInventory />
          <ItemInfo />
        </div>
      </div>
      <ButtonsInstruction />
    </div>
  );
};

export default Dashboard;
