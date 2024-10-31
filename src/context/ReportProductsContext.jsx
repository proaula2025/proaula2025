import { createContext, useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { apiUrlBackend } from "../helpers/apiUrl";
import axios from "axios";

export const ReportProductsContext = createContext();

export const ReportProductsProvider = ({ children }) => {
  const [registroProductos, setRegistroProductos] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const response = await axios.get(apiUrlBackend + "/compraProductos");

        setRegistroProductos(response.data.listaCompraProductos);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerProductos();
  }, []);

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
