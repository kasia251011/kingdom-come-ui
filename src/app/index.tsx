import Armor from "../components/inventory/Armor";
import Level from "../components/Level";
import MainNav from "../components/MainNav";
import MainStats from "../components/stats/MainStats";
import Weapon from "../components/inventory/Weapon";
import GeneralInventory from "../components/inventory/GeneralInventory";
import ButtonsInstruction from "../components/ButtonsInstruction";
import PLAYER_FIGURE from "../assets/player-figure.png";
import BACKGROUND from "../assets/background.jpg";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import GeneralStat from "../components/stats/GeneralStat";

const App = () => {
  return (
    <Provider store={store}>
      <div
        className="bg-cover flex justify-center bg-center bg-no-repeat text-white h-screen w-full"
        style={{ backgroundImage: `url(${BACKGROUND})` }}
      >
        <div className="container ">
          <MainNav />
          <div className="grid grid-cols-2">
            <div className="flex">
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
                <img src={PLAYER_FIGURE} className="w-40" />
                <MainStats />
              </div>
              <div className="">
                <Weapon />
              </div>
            </div>
            <div>
              <GeneralInventory />
            </div>
          </div>
          <ButtonsInstruction />
        </div>
      </div>
    </Provider>
  );
};

export default App;
