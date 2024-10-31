import { Navigate, Route, Routes } from "react-router-dom";
import SecondRouter from "./SecondRouter";
import LoginAuth from "./../auth/LoginAuth";
import RegisterAuth from "./../auth/RegisterAuth";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import InvitePerson from "../pages/InvitePerson";
import { AboutUs } from "../pages/AboutUs";
import { ContactUs } from "../pages/ContactUs";
import { PersonPage } from "../pages/PersonPage";
import ProfilePage from "../pages/ProfilePage";
import ChangeChats from "../pages/ChangeChats";

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

        <Route path="/:idUsuario/:nombreUsuario" element={<ProfilePage />} />
        <Route path="/intercambio" element={<ChangeChats />} />
        <Route path="/inicio" element={<InvitePerson />} />
        <Route path="/sobre-nosotros" element={<AboutUs />} />
        <Route path="/personas" element={<PersonPage />} />
        <Route path="/contactanos" element={<ContactUs />} />

        <Route path="/*" element={<Navigate to="/inicio" />} />
      </Routes>
    </>
  );
};

export default AppRouter;
