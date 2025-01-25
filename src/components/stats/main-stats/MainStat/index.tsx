import { MainStats } from "./types";

interface MainStatsProps {
  value: number;
  stats: MainStats;
}

const MainStat = ({
  value,
  stats: { fieldName, icon, bar, fill },
}: MainStatsProps) => {
  return (
    <div className="flex place-items-start items-center gap-2.5">
      <img
        src={icon}
        alt={`${fieldName} icon`}
        className={`${
          fieldName === "energy" ? "w-4 h-5 ml-1 mr-1" : "w-6 h-6"
        }`}
      />
      <div className="relative w-65">
        <img src={bar} alt={`${fieldName} bar`} />
        <img
          src={fill}
          alt={`${fieldName} fill`}
          className={`absolute top-1/10 left-0.5 h-7/10 object-cover`}
          style={{ width: `${value - 1}%` }}
        />
      </div>
      <p>{value}/100</p>
    </div>
  );
};

/* helth bar */

// position: absolute;
// width: 295px;
// height: 10px;
// left: 561px;
// top: 902px;

// /* image 164 */

// position: absolute;
// width: 295px;
// height: 10px;
// left: 561px;
// top: 902px;

// background: url(image.png);
// opacity: 0.39;
// border: 1px solid #FFFFFF;

// /* image 165 */

// position: absolute;
// width: 250px;
// height: 8.47px;
// left: 561px;
// top: 902.76px;

export default MainStat;
