import React, { useState, createContext, useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import { buttonBackgroundColor, buttonTextColor, writingFieldBackground, writingFieldText, backgroundColor, textColor } from "./theme";



const ThemeToggleContext = createContext({
  toggle: () => {
    // empty, why is this here?
  },
});

// type Props = {
//   children: JSX.Element,
// };

// STYLED COMPONENTS 

export const Button = styled.button`
background-color: ${buttonBackgroundColor}
color: ${buttonTextColor}
`;

export const TextArea = styled.textarea`
background-color: ${writingFieldBackground};
color: ${writingFieldText};
`;

export const Wrapper = styled.div`
    background-color: ${backgroundColor};
    color: ${textColor};
  `;

export const useTheme = () => useContext(ThemeToggleContext);

export const MyThemeProvider = ({children}: any) => {
  //the style properties are in the small components like 'Wrapper' and 'Button'
  

  

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
