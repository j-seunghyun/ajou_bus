import { Route, Routes } from "react-router-dom";
import {
  AdminCreate,
  AdminLogin,
  AdminMain,
  AdminUpdate,
} from "../../Pages/AdminPage";

export const AdminRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLogin />} />
      <Route path="/main" element={<AdminMain />} />
      <Route path="/create" element={<AdminCreate />} />
      <Route path="/update" element={<AdminUpdate />} />
    </Routes>
  );
};
