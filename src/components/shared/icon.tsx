import AddIcon from "../../assets/svgs/add.svg?react";
import CloseIcon from "../../assets/svgs/close.svg?react";
import MenuIcon from "../../assets/svgs/menu.svg?react";
import MoonIcon from "../../assets/svgs/moon.svg?react";
import SunIcon from "../../assets/svgs/sun.svg?react";

import type { Theme } from "@emotion/react";

// SVG를 인라인으로 사용하는 방식
interface IconProps {
  type: "sun" | "moon" | "menu" | "close" | "add";
  size?: number;
  theme: Theme;
}

export default function Icon({ type, size = 24, theme }: IconProps) {
  // 테마에 따른 기본 색상
  const color =
    theme.themeType === "dark"
      ? "#FFFFFF" // 다크모드 기본 색상
      : "#000000"; // 라이트모드 기본 색상

  // 아이콘 컴포넌트 매핑
  const renderIcon = () => {
    switch (type) {
      case "sun":
        return (
          <SunIcon
            fill={color}
            stroke={color}
            style={{ width: size, height: size }}
          />
        );
      case "moon":
        return (
          <MoonIcon
            fill={color}
            stroke={color}
            style={{ width: size, height: size }}
          />
        );
      case "menu":
        return (
          <MenuIcon
            fill={color}
            stroke={color}
            style={{ width: size, height: size }}
          />
        );
      case "close":
        return (
          <CloseIcon
            fill={color}
            stroke={color}
            style={{ width: size, height: size }}
          />
        );
      case "add":
        return (
          <AddIcon
            fill={color}
            stroke={color}
            style={{ width: size, height: size }}
          />
        );
      default:
        return null;
    }
  };

  return renderIcon();
}
