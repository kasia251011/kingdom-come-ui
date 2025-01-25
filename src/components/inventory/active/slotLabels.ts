import { ItemType } from "@/types/common";
import COIF_PREVIEW from "@/assets/items-preview/coif.png";
import HELMET_PREVIEW from "@/assets/items-preview/helmet.png";
import CHAINMAIL_PREVIEW from "@/assets/items-preview/chainmail.png";
import BODY_CHAINMAIL_PREVIEW from "@/assets/items-preview/body_chainmail.png";
import BODY_PLATE_PREVIEW from "@/assets/items-preview/body_plate.png";
import OUTER_GARMENT_PREVIEW from "@/assets/items-preview/outer_garment.png";
import BODY_GARMENT_PREVIEW from "@/assets/items-preview/body_garment.png";
import GLOVES_PREVIEW from "@/assets/items-preview/gloves.png";
import ARM_ARMOUR_PREVIEW from "@/assets/items-preview/arm_armour.png";
import HOSE_PREVIEW from "@/assets/items-preview/hose.png";
// import LEG_PLATE_PREVIEW from "@/assets/items-preview/leg_plate.png";
import LEG_CHAINMAIL_PREVIEW from "@/assets/items-preview/leg_chainmail.png";
import BOOTS_PREVIEW from "@/assets/items-preview/boots.png";
import RING_PREVIEW from "@/assets/items-preview/ring.png";
import NECK_CHAIN_PREVIEW from "@/assets/items-preview/neck_chain.png";
import SPURS_PREVIEW from "@/assets/items-preview/spurs.png";

export interface SlotLabel {
  label: ItemType;
  previewImage: string;
}

export const headSlotLabels: SlotLabel[] = [
  {
    label: "helmet",
    previewImage: HELMET_PREVIEW,
  },
  {
    label: "headChainmail",
    previewImage: CHAINMAIL_PREVIEW,
  },
  {
    label: "coif",
    previewImage: COIF_PREVIEW,
  },
];

export const bodySlotLabels: SlotLabel[] = [
  {
    label: "bodyChainmail",
    previewImage: BODY_CHAINMAIL_PREVIEW,
  },
  {
    label: "bodyPlate",
    previewImage: BODY_PLATE_PREVIEW,
  },
  {
    label: "outerGarment",
    previewImage: OUTER_GARMENT_PREVIEW,
  },
  {
    label: "bodyGarment",
    previewImage: BODY_GARMENT_PREVIEW,
  },
];

export const armsSlotLabels: SlotLabel[] = [
  {
    label: "gloves",
    previewImage: GLOVES_PREVIEW,
  },
  {
    label: "armArmour",
    previewImage: ARM_ARMOUR_PREVIEW,
  },
];

export const legSlotLabels: SlotLabel[] = [
  {
    label: "legChainmail",
    previewImage: LEG_CHAINMAIL_PREVIEW,
  },
  {
    label: "hose",
    previewImage: HOSE_PREVIEW,
  },
  {
    label: "legPlate",
    previewImage: HOSE_PREVIEW,
  },
  {
    label: "boots",
    previewImage: BOOTS_PREVIEW,
  },
];

export const accessorySlotLabels: SlotLabel[] = [
  {
    previewImage: RING_PREVIEW,
    label: "ring",
  },
  {
    previewImage: NECK_CHAIN_PREVIEW,
    label: "necklace",
  },
  {
    previewImage: SPURS_PREVIEW,
    label: "spurs",
  },
];
