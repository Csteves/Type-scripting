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
  secondaryColor: string;
}

export const theme = {
  primaryColor: "black",
  secondaryColor:"lightgray",

};

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;