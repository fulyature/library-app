import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("false");

  const values = { user, setUser };
  return (
    <AuthContext.Provider value={{ values }}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
