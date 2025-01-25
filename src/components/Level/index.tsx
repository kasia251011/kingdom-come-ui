import { useAppSelector } from "@/redux/hooks";

import LEVELBAR_FILL from "@/assets/level/levelbar-fill.png";
import LEVELBAR from "@/assets/level/levelbar.png";

const Level = () => {
  const {
    value: level,
    points,
    maxPoints,
  } = useAppSelector((state) => state.app.playerStats.level);

  const levelProgress = Math.floor((points / maxPoints) * 100);

  return (
    <div className="flex place-items-start items-start gap-2.5">
      <p className="text-[#C5A987]">Poziom</p>
      <p className="text-5xl">{level}</p>
      <div className="flex flex-col items-end gap-1">
        <div className="relative w-55 h-5">
          <img
            src={LEVELBAR}
            alt="level bar"
            className="absolute top-0 left-0 w-full h-full object-cover z-1"
          />
          <div
            className="absolute top-0 left-0 h-full overflow-hidden"
            style={{
              width: `${32}%`,
            }}
          >
            <img
              src={LEVELBAR_FILL}
              alt="level bar fill"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <p>{levelProgress}%</p>
      </div>
    </div>
  );
};

export default Level;
