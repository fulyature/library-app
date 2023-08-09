import { ThemeProvider } from "styled-components";
import AppRouter from "./router/AppRouter";
import { GlobalStyles } from "./styles/Global.styles";
import { lightTheme, darkTheme } from "./styles/theme";
import { useThemeContext } from "./context/ThemeContext";
function App() {
  const { myTheme } = useThemeContext();
  const themes = myTheme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
