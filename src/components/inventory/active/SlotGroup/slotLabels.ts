import { ItemType } from "@/types/common";
import COIF_PREVIEW from "@/assets/items-preview/coif-preview.png";

export interface SlotLabel {
  label: ItemType;
  previewImage: string;
}

export const headSlotLabels: SlotLabel[] = [
  {
    label: "helmet",
    previewImage: COIF_PREVIEW,
  },
  {
    label: "headChainmail",
    previewImage: COIF_PREVIEW,
  },
  {
    label: "coif",
    previewImage: COIF_PREVIEW,
  },
];

export const bodySlotLabels: SlotLabel[] = [
  {
    label: "bodyChainmail",
    previewImage: COIF_PREVIEW,
  },
  {
    label: "bodyPlate",
    previewImage: COIF_PREVIEW,
  },
  {
    label: "outerGarment",
    previewImage: COIF_PREVIEW,
  },
  {
    label: "bodyGarment",
    previewImage: COIF_PREVIEW,
  },
];

export const armsSlotLabels: SlotLabel[] = [
  {
    label: "gloves",
    previewImage: COIF_PREVIEW,
  },
  {
    label: "armArmour",
    previewImage: COIF_PREVIEW,
  },
];

export const legSlotLabels: SlotLabel[] = [
  {
    label: "legChainmail",
    previewImage: COIF_PREVIEW,
  },
  {
    label: "hose",
    previewImage: COIF_PREVIEW,
  },
  {
    label: "legPlate",
    previewImage: COIF_PREVIEW,
  },
  {
    label: "boots",
    previewImage: COIF_PREVIEW,
  },
];

export const accessorySlotLabels: SlotLabel[] = [
  {
    previewImage: COIF_PREVIEW,
    label: "ring",
  },
  {
    previewImage: COIF_PREVIEW,
    label: "necklace",
  },
  {
    previewImage: COIF_PREVIEW,
    label: "spurs",
  },
];

export const getSlotLabel = (name: ItemType) =>
  headSlotLabels.find((slot) => slot.label === name) ||
  bodySlotLabels.find((slot) => slot.label === name) ||
  armsSlotLabels.find((slot) => slot.label === name) ||
  legSlotLabels.find((slot) => slot.label === name) ||
  accessorySlotLabels.find((slot) => slot.label === name)!;
