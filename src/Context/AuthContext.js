import { createContext, useState, useContext } from "react";

const AuthContext = createContext({});

export default function ContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(() =>
    JSON.parse(localStorage.getItem("Auth")) ? true : false
  );
  const [name, setName] = useState(() =>
    JSON.parse(localStorage.getItem("Name"))
      ? JSON.parse(localStorage.getItem("Name"))
      : false
  );
  return (
    <AuthContext.Provider value={{ setIsAuth, isAuth, setName, name }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
