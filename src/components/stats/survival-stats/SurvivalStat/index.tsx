import { SurvivalStats } from "./types";

interface SurvivalStatProps {
  value: number;
  stats: SurvivalStats;
}

const SurvivalStat = ({
  value,
  stats: { fieldName, icon, bar, fill },
}: SurvivalStatProps) => {
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

export default SurvivalStat;
