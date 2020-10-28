import React, { useState, createContext, useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import { backgroundColor, textColor } from "./theme";

const ThemeToggleContext = createContext({
  toggle: () => {
    // empty
  },
});

// type Props = {
//   children: JSX.Element,
// };

export const useTheme = () => useContext(ThemeToggleContext);

export const MyThemeProvider = ({children}: any) => {
  const Wrapper = styled.div`
    background-color: ${backgroundColor};
    color: ${textColor};
  `;

  // THEME STATE
  const [themeState, setThemeState] = useState({
    mode: "light",
  });

  const toggle = () => {
    //this only toggles between dark and light, make switch statement for other themes?
    const mode = (themeState.mode === "light" ? "dark" : "light");
    setThemeState({ mode: mode });

    console.log("Toggled!");
  };

  return (
    <ThemeToggleContext.Provider value={{ toggle: toggle }}>
      <ThemeProvider theme={{ mode: themeState.mode }}>
        <Wrapper>{children}</Wrapper>
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};
