import * as styledComponents from "styled-components";

// import IThemeInterface from "./theme";

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<IThemeInterface>;

export interface IThemeInterface {
  primaryColor: string;
  primaryColorInverted: string;
}

export const theme = {
  primaryColor: "#e9e9eb",
  primaryColorInverted:"#9e9e9b"
};

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;