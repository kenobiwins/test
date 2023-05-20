import "styled-components";

import { colorsMap, fontsMap, pxsMap } from "./types";

declare module "styled-components" {
  export interface DefaultTheme {
    px: pxsMap;
    font: fontsMap;
    color: colorsMap;
  }
}
