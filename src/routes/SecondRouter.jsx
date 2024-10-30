import { Navigate, Route, Routes } from "react-router-dom";
import AdminPage from "./../pages/AdminPage";
import CompanyPage from "./../pages/CompanyPage";
import ProfilePage from "./../pages/ProfilePage";
import FoundationPage from "./../pages/FoundationPage";
import ChangeChats from "./../pages/ChangeChats";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import InvitePerson from "../pages/InvitePerson";
import { AboutUs } from "../pages/AboutUs";
import { PersonPage } from "../pages/PersonPage";
import { ContactUs } from "../pages/ContactUs";

const SecondRouter = () => {
  const { usuarioEnLinea } = useContext(UserContext);

  const redirect =
    usuarioEnLinea.tipoEntidad === "Empresa"
      ? "/empresas"
      : usuarioEnLinea.tipoEntidad === "Fundacion"
      ? "/fundaciones"
      : "/personas";

  return (
    <>
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/intercambio" element={<ChangeChats />} />
        <Route path="/inicio" element={<InvitePerson />} />
        <Route path="/sobre-nosotros" element={<AboutUs />} />
        <Route path="/contactanos" element={<ContactUs />} />

        {usuarioEnLinea.tipoEntidad === "Empresa" && (
          <Route path="/empresas" element={<CompanyPage />} />
        )}
        {usuarioEnLinea.tipoEntidad === "Fundacion" && (
          <Route path="/fundaciones" element={<FoundationPage />} />
        )}

        {(usuarioEnLinea.tipoEntidad !== "Empresa" ||
          usuarioEnLinea.tipoEntidad !== "Fundacion") && (
          <Route path="/Personas" element={<PersonPage />} />
        )}

        <Route path="/profile" element={<ProfilePage />} />

        <Route path="*" element={<Navigate to={redirect} />} />
      </Routes>
    </>
  );
};

export default SecondRouter;
