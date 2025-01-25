import { useAppSelector } from "@/redux/hooks";

interface SurvivalStatProps {
  value: number;
  label: string;
}

const SurvivalStat = ({ value, label }: SurvivalStatProps) => {
  return (
    <div>
      <p>
        {label}: {value}/100
      </p>
    </div>
  );
};

const SurvivalStats = () => {
  const { energy, health, hunger } = useAppSelector(
    (state) => state.app.playerStats
  );

  return (
    <div>
      <SurvivalStat label="Zdrowie" value={health} />
      <SurvivalStat label="Głód" value={hunger} />
      <SurvivalStat label="Energia" value={energy} />
    </div>
  );
};

export default SurvivalStats;
