import { useState, useEffect } from "react";

const DEFAULT_THEME = "dark";

/** 
A hook to take care of theming Juno apps.
The hook stores the current theme and exposes a function to toggle the theme.
The hook is used by the Juno StyleProvider, which will then again expose the current theme as well as the handler to toggle the theme in its context.

TODO: 
* use local storage to check for existing theme
* use theme from storage if exists
* persist theme in storage if not 
* update theme in local storage when user toggles the theme
 */
function useTheme() {
  const [theme, setTheme] = useState(DEFAULT_THEME);

  useEffect(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  const setTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return { theme, toggleTheme, setTheme };
}

export default useTheme;
