import Armor from "@/components/inventory/active/Armor";
import Level from "@/components/Level";
import MainNav from "@/components/MainNav";
import SurvivalStats from "@/components/stats/SurvivalStats";
import Weapon from "@/components/inventory/active/Weapon";
import GeneralInventory from "@/components/inventory/GeneralInventory";
import ButtonsInstruction from "@/components/ButtonsInstruction";
import PLAYER_FIGURE from "@/assets/player-figure.png";
import GeneralStat from "@/components/stats/GeneralStat";
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
          <div className="">
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
        </div>
      </div>
      <ButtonsInstruction />
    </div>
  );
};

export default Dashboard;
