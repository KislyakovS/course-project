import { useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme } from "./constants";
import { ThemeProviderProps } from "./types";
import { ThemeContext } from "./Context";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

export const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props;

  const [theme, setTheme] = useState(defaultTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
