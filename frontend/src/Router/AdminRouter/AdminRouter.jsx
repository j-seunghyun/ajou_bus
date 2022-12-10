import { Navigate, Route, Routes } from "react-router-dom";
import { AdminCreate, AdminMain, AdminUpdate } from "../../Pages/AdminPage";
import { getLevel } from "../../Util/LocalStorage";

const AdminPrivateRouter = ({ Component }) => {
  const level = getLevel();
  if (level !== "1") return <Navigate to="/" />;
  return <Component />;
};

export const AdminRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminPrivateRouter Component={AdminMain} />} />
      <Route
        path="/create"
        element={<AdminPrivateRouter Component={AdminCreate} />}
      />
      <Route
        path="/update/:id"
        element={<AdminPrivateRouter Component={AdminUpdate} />}
      />
    </Routes>
  );
};
