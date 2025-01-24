import { useAppSelector } from "@/redux/hooks";

const Level = () => {
  const level = useAppSelector((state) => state.app.playerStats.level);
  return (
    <div>
      <p>
        Poziom {level.value} - {level.points}/{level.maxPoints}
      </p>
    </div>
  );
};

export default Level;
