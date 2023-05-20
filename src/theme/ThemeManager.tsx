import React, { createContext, useContext } from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "./theme";

const ThemeContext = createContext(theme);
export const useTheme = () => useContext(ThemeContext);

export const ThemeManagerProvider = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[] | null;
}) => {
  return (
    <ThemeContext.Provider value={theme}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

