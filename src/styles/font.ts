import { css } from "@emotion/react";

export const fontImport = css`
  @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap");
`;

const typography = {
  bold20: {
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 700,
    fontSize: "1.25rem",
  },
  medium16: {
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 500,
    fontSize: "1rem",
  },
  bold14: {
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 700,
    fontSize: "0.875rem",
  },
  medium14: {
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 500,
    fontSize: "0.875rem",
  },
  medium12: {
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 500,
    fontSize: "0.75rem",
  },
  medium8: {
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 500,
    fontSize: "0.5rem",
  },
};

export default typography;
