import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
export default function PrivateRoute({ children }) {
  const { isAuth } = useAuth();
  return isAuth ? children : <Navigate to="/login" />;
}
