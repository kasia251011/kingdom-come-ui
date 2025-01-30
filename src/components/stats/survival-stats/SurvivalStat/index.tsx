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
    <div className="flex items-center gap-2.5">
      <img
        src={icon}
        className={`${
          fieldName === "energy" ? "w-3 h-4 ml-1 mr-2" : "w-6 h-6"
        }`}
      />
      <div className="relative w-50 ">
        <img src={bar} />
        <img
          src={fill}
          alt={`${fieldName} fill`}
          className={`absolute top-1/10 left-0.5 h-7/10 object-cover`}
          style={{ width: `${value - 1}%` }}
        />
      </div>
      <p className="text-sm">{value}/100</p>
    </div>
  );
};

export default SurvivalStat;
