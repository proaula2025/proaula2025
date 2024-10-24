import { Navigate, Route, Routes } from "react-router-dom";
import SecondRouter from "./SecondRouter.jsx";
import LoginAuth from "./../auth/LoginAuth";
import RegisterAuth from "./../auth/RegisterAuth";

const AppRouter = () => {
  const isLoggedIn = false;

  return (
    <>
      <Routes>
        {isLoggedIn ? (
          <Route path="/*" element={<SecondRouter />} />
        ) : (
          <>
          <Route path="/auth/registrarse" element={<RegisterAuth />} />
            <Route path="/auth/iniciar" element={<LoginAuth />} />
          </>
        )}

        <Route path="/*" element={<Navigate to="/auth/iniciar" />} />
      </Routes>
    </>
  );
};

export default AppRouter;
