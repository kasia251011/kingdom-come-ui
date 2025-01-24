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
    <div className="flex f-full items-center justify-between px-20">
      <img className="size-8" src={ICON_CONTROLLER_L2} />
      {navLabels.map((label, index) => (
        <p
          className="nav-item py-6 opacity-40 nth-2:opacity-100  text-white"
          key={index}
        >
          {label}
        </p>
      ))}

      <img className="size-8" src={ICON_CONTROLLER_R2} />
    </div>
  );
};

export default MainNav;
