import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { apiUrlBackend } from "../helpers/apiUrl";
import axios from "axios";
import { ProductosContext } from "../context/ProductsContext";
import { UserContext } from "../context/UserContext";

export const useVentaProduct = ({
  gestionVentaProducto,
  setOpenModalProducto,
}) => {
  const { setProductosPersona } = useContext(ProductosContext);
  const { usuarioEnLinea, setUsuarioEnLinea } = useContext(UserContext);
  const [cantidadAComprar, setCantidadAComprar] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState(
    "Por favor espere mientras validamos sus datos..."
  );

  // Función genérica para manejar solicitudes HTTP
  const makeRequest = async (method, url, data) => {
    try {
      const response = await axios({ method, url, data });
      if (!response.data.esValido) {
        throw new Error(response.data.mensaje || "Error en la solicitud");
      }
      return response.data;
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Ocurrió un error");
      throw error; // Permite manejo adicional si es necesario
    }
  };

  // Validar cantidad antes de comprar
  const validarCantidad = () => {
    if (cantidadAComprar <= 0) {
      toast.error("La cantidad a comprar debe ser mayor a 0");
      return false;
    }

    if (cantidadAComprar > gestionVentaProducto.cantidad) {
      toast.error(
        "La cantidad a comprar no puede ser mayor a la cantidad total"
      );
      return false;
    }

    return true;
  };

  // Realizar compra de producto
  const onComprarProductoSeleccionado = async (e) => {
    e.preventDefault();

    if (!validarCantidad()) return;

    setIsLoading(true);
    setTimeout(
      () => setLoadingMessage("Estamos validando su compra, ya casi..."),
      3000
    );

    try {
      await makeRequest("POST", `${apiUrlBackend}/compraProducto`, {
        producto: { idProducto: gestionVentaProducto.idProducto },
        cantidadComprada: cantidadAComprar,
        totalPrecio: gestionVentaProducto.precio * cantidadAComprar,
        fechaCompra: new Date(),
        usuarioCompro: { idUsuario: usuarioEnLinea.idUsuario },
        usuarioVendio: { idUsuario: gestionVentaProducto.usuario.idUsuario },
      });

      await actualizarDatosDelProducto();
      toast.success("Compra registrada exitosamente");
    } catch (error) {
      console.error("Error al comprar el producto:", error);
    } finally {
      setIsLoading(false);
      setLoadingMessage("Por favor espere...");
      setOpenModalProducto(false);
    }
  };

  // Actualizar datos del producto
  const actualizarDatosDelProducto = async () => {
    try {
      const data = await makeRequest("PUT", `${apiUrlBackend}/producto`, {
        idProducto: gestionVentaProducto.idProducto,
        cantidad: cantidadAComprar,
      });

      setProductosPersona((productos) =>
        productos.map((producto) =>
          producto.idProducto === data.productoDTO.idProducto
            ? data.productoDTO
            : producto
        )
      );

      await Promise.all([
        actualizarUsuario("comprador"),
        actualizarUsuario("vendedor"),
      ]);
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
    }
  };

  // Actualizar datos del usuario
  const actualizarUsuario = async (tipo) => {
    try {
      const usuario =
        tipo === "comprador"
          ? {
              ...usuarioEnLinea,
              productosComprados: usuarioEnLinea.productosComprados + 1,
            }
          : {
              ...gestionVentaProducto.usuario,
              productosVendidos:
                gestionVentaProducto.usuario.productosVendidos + 1,
            };

      await makeRequest("PUT", `${apiUrlBackend}/usuario`, usuario);

      if (tipo === "comprador") {
        setUsuarioEnLinea(usuario);
        localStorage.setItem("usuarioActivo", JSON.stringify(usuario));
      }

      toast.success(`Datos del ${tipo} actualizados correctamente`);
    } catch (error) {
      console.error(`Error al actualizar datos del ${tipo}:`, error);
    }
  };

  return {
    onComprarProductoSeleccionado,
    cantidadAComprar,
    setCantidadAComprar,
    isLoading,
    loadingMessage,
    usuarioEnLinea,
  };
};
