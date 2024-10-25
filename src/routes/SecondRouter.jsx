import { Navigate, Route, Routes } from "react-router-dom";
import AdminPage from "./../pages/AdminPage";
import CompanyPage from "./../pages/CompanyPage";
import ProfilePage from "./../pages/ProfilePage";
import { PersonPage } from "./../pages/PersonPage";
import FoundationPage from "./../pages/FoundationPage";
import ChangeChats from "./../pages/ChangeChats";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const SecondRouter = () => {
  const { usuarioEnLinea } = useContext(UserContext);

  return (
    <>
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/empresas" element={<CompanyPage />} />
        <Route path="/personas" element={<PersonPage />} />
        <Route path="/fundaciones" element={<FoundationPage />} />
        <Route path="/intercambio" element={<ChangeChats />} />

        <Route path="/:username" element={<ProfilePage />} />

        <Route
          path="*"
          element={
            usuarioEnLinea.tipoEntidad === "Persona natural" ? (
              <Navigate to="/personas" />
            ) : usuarioEnLinea.tipoEntidad === "Fundacion" ? (
              <Navigate to="/fundaciones" />
            ) : (
              <Navigate to="/empresas" />
            )
          }
        />
      </Routes>
    </>
  );
};

export default SecondRouter;
