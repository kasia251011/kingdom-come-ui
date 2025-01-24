import ICON_CONTROLLER_L2 from "../../assets/icons/pad_l2_x4.png";
import ICON_CONTROLLER_R2 from "../../assets/icons/pad_r2_x4.png";

const navLabels = [
  "INWENTARZ",
  "DZIENNIK",
  "MAPA",
  "GRACZ",
  "POMOCNICY",
  "KODEKS",
];

const MainNav = () => {
  return (
    <div className="flex justify-around">
      <img className="nav-icons" src={ICON_CONTROLLER_L2} />
      {navLabels.map((label, index) => (
        <p className="nav-item pt-7 pb-9" key={index}>{label}</p>
      ))}
      <img className="nav-icons" src={ICON_CONTROLLER_R2} />
    </div>
  );
};

export default MainNav;
