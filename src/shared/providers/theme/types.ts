import { ReactNode } from "react";
import { Theme } from "./constants";

export interface ThemeProviderProps {
  children: ReactNode;
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
};
