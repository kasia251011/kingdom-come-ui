import { GeneralStatName } from "./common";

export interface PlayerStats {
  level: {
    value: number;
    points: number;
    maxPoints: number;
  };
  health: number;
  hunger: number;
  energy: number;
  sideStats: {
    [key in GeneralStatName]: number;
  };
}
