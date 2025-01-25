import LEFT_INSTRUCTIONS from "@/assets/placeholders/left_instructions.png";
import RIGHT_INSTRUCTIONS from "@/assets/placeholders/right_instructions.png";

const ButtonsInstruction = () => {
  return (
    <div className="flex justify-between mt-4">
      <img src={LEFT_INSTRUCTIONS} />
      <img src={RIGHT_INSTRUCTIONS} />
    </div>
  );
};
export default ButtonsInstruction;
