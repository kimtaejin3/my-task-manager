import colors from "../styles/color";

export default function getTagStyles({ tagName }: { tagName: string }) {
  switch (tagName) {
    case "concept":
      return {
        backgroundColor: colors.redLight,
        textColor: colors.redPrimary,
      };
    case "technical":
      return {
        backgroundColor: colors.blueLight,
        textColor: colors.bluePrimary,
      };
    case "design":
      return {
        backgroundColor: colors.yellowLight,
        textColor: colors.yellowPrimary,
      };
    case "front-end":
      return {
        backgroundColor: colors.greenLight,
        textColor: colors.greenPrimary,
      };
    default:
      return {
        backgroundColor: "#f0f0f0",
        textColor: "#333",
      };
  }
}
