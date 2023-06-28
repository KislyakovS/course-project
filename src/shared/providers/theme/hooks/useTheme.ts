import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme } from "../constants";
import { ThemeContext } from "../Context";

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  if (!(theme && setTheme)) {
    throw new Error("useTheme has to be used within <ThemeProvider>")
  }

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };


  return {
    theme,
    toggleTheme,
  }
}
