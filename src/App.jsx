import "./index.css";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import Messages from "./pages/Messages";
import Explore from "./pages/Explore";
import Bookmarks from "./pages/Bookmarks";
import ChirpThreadPage from "./pages/ChirpThreadPage";
import MainPage from "./pages/MainPage";
import SignUp from "./pages/SignUp";
import SignUpProvider from "./context/SignUpUserContext";
import ContextLayout from "./layouts/ContextLayout";
import AuthProvider from "./context/AuthContext";
import RequireAuthLayout from "./layouts/RequireAuthLayout";
import ChirpProvider from "./context/ChirpContext";

export default function App() {
  return (
    <Routes>
      <Route element={<ContextLayout provider={SignUpProvider} />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
      <Route element={<ContextLayout provider={AuthProvider} />}>
        <Route element={<RequireAuthLayout />}>
          <Route element={<ContextLayout provider={ChirpProvider} />}>
            <Route element={<MainLayout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/bookmarks" element={<Bookmarks />} />
              <Route
                path="/:username/status/:cid"
                element={<ChirpThreadPage />}
              />
            </Route>
          </Route>
          <Route path="/messages" element={<Messages />} />
        </Route>
      </Route>
    </Routes>
  );
}
