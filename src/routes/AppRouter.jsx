import { Navigate, Route, Routes } from "react-router-dom";
import SecondRouter from "./SecondRouter";
import LoginAuth from "./../auth/LoginAuth";
import RegisterAuth from "./../auth/RegisterAuth";
import InvitePerson from "../pages/InvitePerson";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<SecondRouter />} />
        <>
          <Route path="/auth/iniciar" element={<LoginAuth />} />
          <Route path="/auth/registrarse" element={<RegisterAuth />} />
        </>

        <Route path="/invitado" element={<InvitePerson />} />
        <Route path="/*" element={<Navigate to="/auth/iniciar" />} />
      </Routes>
    </>
  );
};

export default AppRouter;
