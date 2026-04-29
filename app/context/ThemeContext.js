import React, { createContext, useState, useContext } from 'react';
import { COLORS, DARK_COLORS } from '../../constants'; // Adjust path if needed

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Dynamically select the correct palette
  const colors = isDarkMode ? DARK_COLORS : COLORS;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, colors, theme: isDarkMode ? 'dark' : 'light' }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);