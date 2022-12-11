import { Navigate } from "react-router-dom";
import { getUserId } from "../../Util/LocalStorage";

export const PublicRouter = ({ Component }) => {
  const userId = getUserId();
  return <>{userId ? <Navigate to="/" /> : <Component />} </>;
};
