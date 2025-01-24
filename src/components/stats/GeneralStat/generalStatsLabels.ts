import { GeneralStatName } from "@/types/common";

interface GeneralStatsLabel {
  label: string;
  fieldName: GeneralStatName;
  icon?: string;
}

const generalStatsLabels: GeneralStatsLabel[] = [
  {
    label: "Widoczność",
    fieldName: "visibility",
  },
  {
    label: "Ekspozycja",
    fieldName: "conspiracy",
  },
  {
    label: "Hałas",
    fieldName: "noise",
  },
  {
    label: "Charyzma",
    fieldName: "charisma",
  },
  {
    label: "Tempo",
    fieldName: "speed",
  },
];

export function getStatLabel(fieldName: GeneralStatName) {
  return generalStatsLabels.find((stat) => stat.fieldName === fieldName)!;
}
