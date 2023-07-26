import { defaultTheme } from "@/theme/_defaultTheme";
import "styled-components";

type ThemeType = typeof defaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
