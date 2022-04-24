import React from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import UserLayout from "./components/layouts/UserLayout";
import Login from "./components/pages/Login";
import Achievement from "./components/pages/Achievement";
import AddAchievement from "./components/pages/Achievement/AddAchievement";
import Event from "./components/pages/Event";
import AddEvent from "./components/pages/Event/AddEvent";
import Gallery from "./components/pages/Gallery";
import AddGallery from "./components/pages/Gallery/AddGallery";
import DashBoardLayout from "./components/layouts/DashBoardLayout";
import { LoadingProvider } from "./context/loadingContext";
import { storageKey } from "./const";

export default function App() {
  const token = localStorage.getItem(storageKey.token);
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <LoadingProvider>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="app" element={<DashBoardLayout />}>
              <Route path="achievement">
                <Route
                  path="/app/achievement/"
                  element={<Navigate to="/app/achievement/home" />}
                />
                <Route path="home" element={<Achievement />} />
                <Route path="add" element={<AddAchievement />} />
              </Route>
              <Route path="event">
                <Route
                  path="/app/event/"
                  element={<Navigate to="/app/event/home" />}
                />
                <Route path="home" element={<Event />} />
                <Route path="add" element={<AddEvent />} />
              </Route>
              <Route path="gallery">
                <Route
                  path="/app/gallery/"
                  element={<Navigate to="/app/gallery/home" />}
                />
                <Route path="home" element={<Gallery />} />
                <Route path="add" element={<AddGallery />} />
              </Route>
            </Route>
            <Route path="user" element={<UserLayout />}>
              <Route path="login" element={<Login />} />
            </Route>
            <Route
              path="/"
              element={
                <Navigate to={token ? "/app/event/home" : "/user/login"} />
              }
            />
          </Routes>
        </Router>
      </LoadingProvider>
    </ThemeProvider>
  );
}
