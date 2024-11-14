import { Navigate, Route, Routes } from "react-router-dom";
import AdminPage from "./../pages/AdminPage";
import CompanyPage from "./../pages/CompanyPage";
import FoundationPage from "./../pages/FoundationPage";
import ChangeChats from "./../pages/ChangeChats";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { PersonPage } from "../pages/PersonPage";

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

        {usuarioEnLinea.tipoEntidad === "Empresa" && (
          <Route path="/empresas" element={<CompanyPage />} />
        )}
        {usuarioEnLinea.tipoEntidad === "Fundacion" && (
          <Route path="/fundaciones" element={<FoundationPage />} />
        )}

        {(usuarioEnLinea.tipoEntidad !== "Empresa" ||
          usuarioEnLinea.tipoEntidad !== "Fundacion") && (
          <Route path="/personas" element={<PersonPage />} />
        )}

        {usuarioEnLinea.tipoEntidad === "Persona natural" && (
          <Route path="/chats-intercambio" element={<ChangeChats />} />
        )}

        <Route path="*" element={<Navigate to={redirect} />} />
      </Routes>
    </>
  );
};

export default SecondRouter;
