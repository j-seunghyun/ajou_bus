import { Navigate } from "react-router-dom";
import { getUserId } from "../../Util/LocalStorage";

export const PrivateRouter = ({ Component }) => {
  const userId = getUserId();
  return <>{userId ? <Component /> : <Navigate to="/login" />} </>;
};
