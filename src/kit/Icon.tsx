import { FC, createElement } from "react";
import sprite from "assets/sprite.svg"; // sprite for all our icons

export enum ICON_NAMES {
  "logo" = "logo",
  "frame" = "frame",
}

export type IconName = `${ICON_NAMES}`;

export interface IconProps {
  name: IconName;
  color?: string;
  width?: string;
  height?: string;
}

export const Icon: FC<IconProps> = ({ name, width = "24px", height = "24px", color = "black" }) => {
  return (
    <svg height={height} width={width} color={color}>
      {createElement("use", {
        href: `${sprite}#${name}`,
        xlinkHref: `${sprite}#${name}`,
      })}
    </svg>
  );
};
