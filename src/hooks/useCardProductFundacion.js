import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { UserContext } from "../context/UserContext";
import { apiUrlBackend } from "../helpers/apiUrl";
import axios from "axios";

export const useCardProductFundacion = ({ producto, setProductos }) => {
  const { usuarioEnLinea, setUsuarioEnLinea } = useContext(UserContext);
  const [recogiendoProducto, setRecogiendoProducto] = useState(false);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const actualizarUsuario = async (usuarioActualizado) => {
    try {
      const response = await axios.put(
        `${apiUrlBackend}/usuario`,
        usuarioActualizado
      );

      if (response.data.esValido) {
        toast.success(response.data.mensaje);
        return response.data.usuarioActualizado;
      }
    } catch (error) {
      console.error(error);
      toast.error("Error al actualizar el usuario.");
    }
    return null;
  };

  const onRecogerProducto = async () => {
    setRecogiendoProducto(true);
    await delay(5000);

    try {
      const response = await axios.put(`${apiUrlBackend}/producto`, {
        idProducto: producto.idProducto,
        fundacionRecogioProducto: true,
      });

      if (response.data.esValido) {
        toast.success(response.data.mensaje);

        setProductos((productos) =>
          productos.map((item) =>
            item.idProducto === response.data.productoDTO.idProducto
              ? response.data.productoDTO
              : item
          )
        );

        await Promise.all([onActualizarEmpresaDono(), onActualizarFundacion()]);
      }
    } catch (error) {
      console.error(error);
      toast.error("Error al recoger el producto.");
    } finally {
      setRecogiendoProducto(false);
    }
  };

  const onActualizarEmpresaDono = async () => {
    const usuarioActualizado = {
      ...producto.empresaDono,
      productosDonadosEmpresa: producto.empresaDono.productosDonadosEmpresa + 1,
    };
    await actualizarUsuario(usuarioActualizado);
  };

  const onActualizarFundacion = async () => {
    const usuarioActualizado = {
      ...usuarioEnLinea,
      productosRecibidosFundacion:
        producto.empresaDono.productosRecibidosFundacion + 1,
    };

    const usuarioEnLineaActualizado = await actualizarUsuario(
      usuarioActualizado
    );
    if (usuarioEnLineaActualizado) {
      setUsuarioEnLinea(usuarioEnLineaActualizado);
      localStorage.setItem(
        "usuarioActivo",
        JSON.stringify(usuarioEnLineaActualizado)
      );
    }
  };

  return {
    onRecogerProducto,
    recogiendoProducto,
  };
};
