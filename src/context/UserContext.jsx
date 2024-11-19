import { createContext, useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [usuarioEnLinea, setUsuarioEnLinea] = useState({});
  const [estaEnLinea, setEstaEnLinea] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const usuarioActivo = localStorage.getItem("usuarioActivo");

    if (usuarioActivo) {
      setUsuarioEnLinea(JSON.parse(usuarioActivo));

      setEstaEnLinea(true);
    }
  }, []);

  const cerrarSesion = () => {
    setUsuarioEnLinea({});
    setEstaEnLinea(false);
    localStorage.removeItem("usuarioActivo");

    toast.success("Sesión cerrada correctamente");

    navigate("/inicio");
  };

  return (
    <UserContext.Provider
      value={{
        usuarioEnLinea,
        setUsuarioEnLinea,
        estaEnLinea,
        setEstaEnLinea,
        cerrarSesion,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
