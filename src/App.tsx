import { useTheme } from "@/theme/hooks/useTheme";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>{theme}</button>
  );
};
