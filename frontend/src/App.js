import { Route, Routes } from "react-router-dom";
import {
  LoginPage,
  MainPage,
  MenuPage,
  NoticePage,
  RegisterPage,
  SemesterPage,
  VacationPage,
} from "./Pages";
import { AdminRouter, ChatRouter, PrivateRouter } from "./Router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/login"
          element={<PrivateRouter Component={LoginPage} />}
        />
        <Route
          path="/register"
          element={<PrivateRouter Component={RegisterPage} />}
        />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/notice/:id" element={<NoticePage />} />
        <Route path="/chat/*" element={<ChatRouter />} />
        <Route path="/admin/*" element={<AdminRouter />} />
        <Route path="/semester" element={<SemesterPage />} />
        <Route path="/vacation" element={<VacationPage />} />
      </Routes>
    </>
  );
}

export default App;
