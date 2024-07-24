import { ThemeProvider } from "@mui/material";
import logo from "./logo.svg";
import "./App.css";
import { Home } from "./app/components/Home";
import { theme } from "./app/theme/theme";

function App() {
  return (
    <div >
      <ThemeProvider theme={theme}>
      <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
