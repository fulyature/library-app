import { lightTheme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/theme";
function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
