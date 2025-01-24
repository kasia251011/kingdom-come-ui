import { useAppSelector } from "@/redux/hooks";

interface MainStatProps {
  value: number;
  label: string;
}

const MainStat = ({ value, label }: MainStatProps) => {
  return (
    <div>
      <p>
        {label}: {value}/100
      </p>
    </div>
  );
};

const MainStats = () => {
  const { energy, health, hunger } = useAppSelector(
    (state) => state.app.playerStats
  );

  return (
    <div>
      <MainStat label="Zdrowie" value={health} />
      <MainStat label="Głód" value={hunger} />
      <MainStat label="Energia" value={energy} />
    </div>
  );
};

export default MainStats;
