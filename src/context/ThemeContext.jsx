import { createContext, useEffect, useMemo, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage.js";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [storedTheme, setStoredTheme] = useLocalStorage("cyber-theme", "light");
  const [theme, setTheme] = useState(storedTheme);

  useEffect(() => {
    setStoredTheme(theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme, setStoredTheme]);

  const value = useMemo(
    () => ({ theme, setTheme, isDark: theme === "dark" }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
