import { Navigate, Route, Routes } from "react-router-dom";
import SecondRouter from "./SecondRouter";
import LoginAuth from "./../auth/LoginAuth";
import RegisterAuth from "./../auth/RegisterAuth";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const AppRouter = () => {
  const { estaEnLinea } = useContext(UserContext);

  return (
    <>
      <Routes>
        {estaEnLinea ? (
          <Route path="/*" element={<SecondRouter />} />
        ) : (
          <>
            <Route path="/auth/iniciar" element={<LoginAuth />} />
            <Route path="/auth/registrarse" element={<RegisterAuth />} />
          </>
        )}

        <Route path="/*" element={<Navigate to="/auth/iniciar" />} />
      </Routes>
    </>
  );
};

export default AppRouter;
