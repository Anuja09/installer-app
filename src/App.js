import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "./logo.svg";
import "./App.css";

import { Home } from "./app/components/Home";
import { theme } from "./app/theme/theme";
import LoginIn from "./app/components/Login";
import LandingPage from "./app/components/LandingPage";
import Header from "./app/components/Header";

function App() {
  const userInfo = useSelector((state) => state.main.user);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <>
          {userInfo?.username && userInfo.password ? (
            <>
              <Header />
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/installers" element={<Home />} />
                </Routes>
              </BrowserRouter>
            </>
          ) : (
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<LoginIn />} />
              </Routes>
            </BrowserRouter>
          )}
        </>
      </ThemeProvider>
    </div>
  );
}

export default App;
