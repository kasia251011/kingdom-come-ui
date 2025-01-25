import ICON_CONTROLLER_L2 from "@/assets/controller-icons/pad_l2_x4.png";
import ICON_CONTROLLER_R2 from "@/assets/controller-icons/pad_r2_x4.png";

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
    <div className="flex  items-center mb-10 gap-10 ">
      <img className="size-7" src={ICON_CONTROLLER_L2} />
      <div className=" flex-1  flex justify-between ">
        {navLabels.map((label, index) => (
          <p
            className="nav-item py-6 opacity-40 nth-2:opacity-100  text-white"
            key={index}
          >
            {label}
          </p>
        ))}
      </div>

      <img className="size-7" src={ICON_CONTROLLER_R2} />
    </div>
  );
};

export default MainNav;
