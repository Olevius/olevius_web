import { GridLayout, Text } from "../../components/basics/defaults";
import { customColors } from "../../theme/colors";
import { cssNumbers } from "../../theme/theme";

export const Transition = () => {
  return (
    <GridLayout
      style={{
        backgroundColor: customColors.highlight,
        border: cssNumbers.testing.border,
        zIndex: 2,
      }}
      className="transition-title-box"
    >
      <Text
        className="transition-text"
        style={{
          color: "black",
          border: cssNumbers.testing.border,
        }}
      >
        What is Olevius?
      </Text>
    </GridLayout>
  );
};
