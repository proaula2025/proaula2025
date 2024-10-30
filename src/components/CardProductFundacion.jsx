import axios from "axios";
import { PropTypes } from "prop-types";
import { apiUrlBackend } from "../helpers/apiUrl";
import { useState } from "react";
import { recogiendo1 } from "../images";
import toast from "react-hot-toast";

const CardProductFundacion = ({ producto, setProductos }) => {
  const [recogiendoProducto, setRecogiendoProducto] = useState(false);

  const onRecogerProducto = async () => {
    setRecogiendoProducto(true);

    await new Promise((resolve) => setTimeout(resolve, 5000));

    try {
      const response = await axios.put(
        `${apiUrlBackend}/producto/${producto.idProducto}`
      );

      if (response.data.esValido) {
        toast.success(response.data.mensaje);

        setProductos((productos) => [...productos, response.data.producto]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setRecogiendoProducto(false);
    }
  };

  return (
    <>
      <li className="py-3 p-4 border rounded-md">
        <div className="flex items-center">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              {producto.nombreProducto}
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              Correo:{producto.empresaDono.email}
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              Categoria: {producto.categoria}
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              Fecha de entrega: {producto.fecha.split("T")[0]}
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              {producto.descripcion}
            </p>
          </div>
          <div className="text-base font-semibold text-gray-900 dark:text-white">
            <button
              className="text-white bg-[#39c962] hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={onRecogerProducto}
              style={
                producto.fundacionRecogioProducto
                  ? { cursor: "not-allowed", backgroundColor: "gray" }
                  : { backgroundColor: "#ff5722" }
              }
            >
              {producto.fundacionRecogioProducto
                ? "Producto recogido"
                : "Confirmar recogida"}
            </button>
          </div>
        </div>
      </li>

      {recogiendoProducto && (
        <div className="w-full h-screen fixed flex flex-col justify-center items-center bottom-0 left-0 z-50 p-4 m-4 bg-[#ffffff7a] rounded-lg">
          <img src={recogiendo1} className="animate-pulse" alt="recogiendo" />
          <h2 className="text-2xl font-semibold animate-bounce">
            Recogiendo producto...
          </h2>
        </div>
      )}
    </>
  );
};

CardProductFundacion.propTypes = {
  producto: PropTypes.object.isRequired,
  setProductos: PropTypes.func.isRequired,
};

export default CardProductFundacion;
