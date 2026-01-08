import { createContext, useState, useEffect } from "react";
import { getToken, setToken, removeToken } from "../utils/storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setAuthToken] = useState(null);

  useEffect(() => {
    const storedToken = getToken();
    if (storedToken) setAuthToken(storedToken);
  }, []);

  const login = (token) => {
    setToken(token);
    setAuthToken(token);
  };

  const logout = () => {
    removeToken();
    setAuthToken(null);
  };

  return (
    <AuthContext.Provider
      value={{ token, isAuthenticated: !!token, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
