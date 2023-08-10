import React from "react";
import { useAuthContext } from "../context/AuthContext";
// import Login from "../pages/login/Login";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const { user } = useAuthContext();
  //hem about hemde detail render edilebilsin diye outlet i kullanıyorum. kim gelirse gelsin onu render lemek ıcın
  //Login syfasına direk yazarsan browser history kullanamazsın.bu yüzden react router dom dan Navigate hookunu kullanıyorum
  // return user ? <Outlet /> : <Login />;
  return user ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRouter;
