import { DefaultTheme } from "styled-components/native";
import { LightTheme, DarkTheme } from "./../themes";

type ThemeL = typeof LightTheme;
type ThemeD = typeof DarkTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeL, ThemeD {}
}
