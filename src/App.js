import { ThemeProvider } from "styled-components";
import AppRouter from "./router/AppRouter";
import { GlobalStyles } from "./styles/Global.styles";
import { lightTheme, darkTheme } from "./styles/theme";
import { useThemeContext } from "./context/ThemeContext";
import AuthContextProvider from "./context/AuthContext";
import BooksContextProvider from "./context/BooksContext";
function App() {
  const { myTheme } = useThemeContext();
  const themes = myTheme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themes}>
      <GlobalStyles />
      <AuthContextProvider>
        <BooksContextProvider>
          <AppRouter />
        </BooksContextProvider>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
