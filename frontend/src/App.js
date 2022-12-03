import { Route, Routes } from "react-router-dom";
import {
  LoginPage,
  MainPage,
  MenuPage,
  NoticePage,
  RegisterPage, SemesterPage, VacationPage,
} from "./Pages";
import { AdminRouter, ChatRouter } from "./Router";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/notice" element={<NoticePage />} />
        <Route path="/chat/*" element={<ChatRouter />} />
        <Route path="/admin/*" element={<AdminRouter />} />
        <Route path="/semester" element ={<SemesterPage/>} />
        <Route path="/vacation" element ={<VacationPage/>} />
      </Routes>
    </>
  );
}

export default App;
