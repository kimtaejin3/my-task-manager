import AddIcon from "../../assets/svgs/add.svg?react";
import CheckIcon from "../../assets/svgs/check.svg?react";
import CloseIcon from "../../assets/svgs/close.svg?react";
import MenuIcon from "../../assets/svgs/menu.svg?react";
import MoonIcon from "../../assets/svgs/moon.svg?react";
import SunIcon from "../../assets/svgs/sun.svg?react";

import type { Theme } from "@emotion/react";

interface IconProps {
  svgName: "sun" | "moon" | "menu" | "close" | "add" | "check";
  size?: number;
  theme?: Theme;
  color?: string;
}

export default function Icon({ svgName, size = 24, theme, color }: IconProps) {
  const finalColor = (() => {
    if (theme) {
      return theme.themeType === "dark" ? "#FFF" : "#000";
    }
    return color;
  })();

  const renderIcon = () => {
    switch (svgName) {
      case "sun":
        return (
          <SunIcon
            fill={finalColor}
            stroke={finalColor}
            style={{ width: size, height: size }}
          />
        );
      case "moon":
        return (
          <MoonIcon
            fill={finalColor}
            stroke={finalColor}
            style={{ width: size, height: size }}
          />
        );
      case "menu":
        return (
          <MenuIcon
            fill={finalColor}
            stroke={finalColor}
            style={{ width: size, height: size }}
          />
        );
      case "close":
        return (
          <CloseIcon
            fill={finalColor}
            stroke={finalColor}
            style={{ width: size, height: size }}
          />
        );
      case "add":
        return (
          <AddIcon
            fill={finalColor}
            stroke={finalColor}
            style={{ width: size, height: size }}
          />
        );
      case "check":
        return (
          <CheckIcon
            stroke={finalColor}
            style={{ width: size, height: size }}
          />
        );
      default: {
        svgName satisfies never;
        return null;
      }
    }
  };

  return renderIcon();
}
