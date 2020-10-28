import theme from "styled-theming";

export const backgroundColor = theme("mode", {
  light: "#fafafa",
  dark: "#222",
  synthwave: "#8008ff",
});

export const textColor = theme("mode", {
  light: "#000",
  dark: "#fff",
  synthwave: "#fc08ff",
});

export const buttonBackgroundColor = theme("mode", {
  light: "#222",
  dark: "#eee",
});

export const buttonTextColor = theme("mode", {
  light: "white",
  dark: "black",
});
