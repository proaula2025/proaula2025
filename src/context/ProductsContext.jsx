import { createContext, useContext, useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { apiUrlBackend } from "../helpers/apiUrl";
import axios from "axios";
import { UserContext } from "./UserContext";

export const ProductosContext = createContext();

export const ProductosProvider = ({ children }) => {
  const { usuarioEnLinea } = useContext(UserContext);

  const [productos, setProductos] = useState([]);
  const [productosPersona, setProductosPersona] = useState([]);

  useEffect(() => {
    if (
      !usuarioEnLinea?.idUsuario ||
      usuarioEnLinea.tipoEntidad !== "Fundacion"
    ) {
      return;
    }

    const getProductos = async () => {
      try {
        const response = await axios.get(
          `${apiUrlBackend}/productos/usuario/${usuarioEnLinea?.idUsuario}`
        );

        setProductos(response.data.listaproductos);
      } catch (error) {
        console.log(error);
      }
    };

    getProductos();
  }, [usuarioEnLinea]);

  useEffect(() => {
    if (!usuarioEnLinea?.idUsuario) {
      return;
    }

    const getProductosPorTipo = async () => {
      try {
        const response = await axios.get(
          `${apiUrlBackend}/productos/categoria`,
          {
            params: {
              categoria: "Venta",
            },
          }
        );

        setProductosPersona(response.data.listaproductos);
      } catch (error) {
        console.log(error);
      }
    };

    getProductosPorTipo();
  }, [usuarioEnLinea]);

  return (
    <ProductosContext.Provider
      value={{ productos, setProductos, productosPersona, setProductosPersona }}
    >
      {children}
    </ProductosContext.Provider>
  );
};

ProductosProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
