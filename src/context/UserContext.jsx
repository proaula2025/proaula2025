import { createContext, useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import toast from "react-hot-toast";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [usuarioEnLinea, setUsuarioEnLinea] = useState({});
  const [estaEnLinea, setEstaEnLinea] = useState(false);

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
