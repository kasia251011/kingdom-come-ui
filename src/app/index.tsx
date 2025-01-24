import BACKGROUND from "../assets/background.jpg";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Dashboard from "./Dashboard";

const App = () => {
  return (
    <Provider store={store}>
      <div
        className="bg-cover flex justify-center bg-center bg-no-repeat text-white h-screen w-full"
        style={{ backgroundImage: `url(${BACKGROUND})` }}
      >
        <Dashboard />
      </div>
    </Provider>
  );
};

export default App;
