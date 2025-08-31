import { TAGS } from "../constants/task";
import colors from "../styles/color";

export default function getTagStyles({
  tagName,
}: {
  tagName: (typeof TAGS)[number];
}) {
  switch (tagName) {
    case "easy":
      return {
        backgroundColor: colors.yellowLight,
        textColor: colors.yellowPrimary,
      };
    case "medium":
      return {
        backgroundColor: colors.blueLight,
        textColor: colors.bluePrimary,
      };
    case "hard":
      return {
        backgroundColor: colors.redLight,
        textColor: colors.redPrimary,
      };
    case "front-end":
      return {
        backgroundColor: colors.greenLight,
        textColor: colors.greenPrimary,
      };
    case "back-end":
      return {
        backgroundColor: colors.greenLight,
        textColor: colors.greenPrimary,
      };
    case "write-code":
      return {
        backgroundColor: colors.blueLight,
        textColor: colors.bluePrimary,
      };
    case "just-reading":
      return {
        backgroundColor: colors.logoPurple,
        textColor: colors.slate900,
      };
    case "meeting":
      return {
        backgroundColor: colors.logoOrange,
        textColor: colors.slate900,
      };
    default:
      return {
        backgroundColor: "#f0f0f0",
        textColor: "#333",
      };
  }
}
