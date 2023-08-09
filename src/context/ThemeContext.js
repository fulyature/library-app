import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [myTheme, setMyTheme] = useState("light");
  const values = { myTheme, setMyTheme };
};
export const useThemeContext = () => {
  return useContext(ThemeContext);
};
export default ThemeContextProvider;
