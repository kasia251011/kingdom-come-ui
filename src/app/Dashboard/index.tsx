import PLAYER_FIGURE from "@/assets/player-figure.png";
import ButtonsInstruction from "@/components/ButtonsInstruction";
import Armor from "@/components/inventory/active/Armor";
import Weapon from "@/components/inventory/active/Weapon";
import GeneralInventory from "@/components/inventory/GeneralInventory";
import ItemInfo from "@/components/inventory/ItemInfo";
import Level from "@/components/Level";
import MainNav from "@/components/MainNav";
import GeneralStat from "@/components/stats/GeneralStat";
import SurvivalStats from "@/components/stats/survival-stats/SurvivalStats";
import useKeyHandler from "@/hooks/useKeyHandler";

const Dashboard = () => {
  useKeyHandler();

  return (
    <div className="container ">
      <MainNav />
      <div className="grid grid-cols-12">
        <div className="flex col-span-7">
          <div className="">
            <Armor />
            <div className="flex gap-4">
              <div className="">
                <GeneralStat statName="visibility" />
                <GeneralStat statName="conspiracy" />
                <GeneralStat statName="noise" />
              </div>
              <div className="">
                <GeneralStat statName="speed" />
                <GeneralStat statName="charisma" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center ">
            <Level />
            <img src={PLAYER_FIGURE} className="w-64" />
            <SurvivalStats />
          </div>
          <div className="">
            <Weapon />
          </div>
        </div>
        <div className="col-span-5">
          <GeneralInventory />
          <ItemInfo />
        </div>
      </div>
      <ButtonsInstruction />
    </div>
  );
};

export default Dashboard;
