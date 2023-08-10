import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("user") || false);

  const handleAuth = (val) => {
    localStorage.setItem("user", val);
    setUser(val);
  };
  const values = { user, setUser: handleAuth };
  return (
    <AuthContext.Provider value={{ ...values }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
