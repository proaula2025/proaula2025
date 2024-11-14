import { createContext, useContext, useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { apiUrlBackend } from "../helpers/apiUrl";
import axios from "axios";
import { UserContext } from "./UserContext";

export const ReportProductsContext = createContext();

export const ReportProductsProvider = ({ children }) => {
  const { usuarioEnLinea } = useContext(UserContext);
  const [registroProductos, setRegistroProductos] = useState([]);

  useEffect(() => {
    if (!usuarioEnLinea?.idUsuario) {
      return;
    }

    const obtenerProductos = async () => {
      try {
        const response = await axios.get(apiUrlBackend + "/compraProductos");

        setRegistroProductos(response.data.listaCompraProductos);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerProductos();
  }, [usuarioEnLinea]);

  return (
    <ReportProductsContext.Provider
      value={{ registroProductos, setRegistroProductos }}
    >
      {children}
    </ReportProductsContext.Provider>
  );
};

ReportProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
