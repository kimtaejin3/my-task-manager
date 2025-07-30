import { css } from "@emotion/react";

export const fontImport = css`
  @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap");
`;

const typography = {
  bold20: {
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 700,
    fontSize: "1.25rem",
    lineHeight: 1.5,
  },
  medium16: {
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 500,
    fontSize: "1rem",
    lineHeight: 1.5,
  },
  bold14: {
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 700,
    fontSize: "0.875rem",
    lineHeight: 1.5,
  },
  medium14: {
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 500,
    fontSize: "0.875rem",
    lineHeight: 1.5,
  },
  medium12: {
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 500,
    fontSize: "0.75rem",
    lineHeight: 1.5,
  },
  medium8: {
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 500,
    fontSize: "0.5rem",
    lineHeight: 1.5,
  },
};

export default typography;
