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
      const response = await axios.put(`${apiUrlBackend}/producto`, {
        idProducto: producto.idProducto,
        fundacionRecogioProducto: true,
      });

      if (response.data.esValido) {
        toast.success(response.data.mensaje);

        setProductos((productos) =>
          productos.map((producto) => {
            if (producto.idProducto === response.data.productoDTO.idProducto) {
              return response.data.productoDTO;
            }

            return producto;
          })
        );
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
            <p className="text-sm font-medium text-gray-900 truncate">
              {producto.nombreProducto}
            </p>
            <p className="text-sm text-gray-500 truncate">
              Correo:{producto.empresaDono.email}
            </p>
            <p className="text-sm text-gray-500 truncate">
              Categoria: {producto.categoria}
            </p>
            <p className="text-sm text-gray-500 truncate">
              Fecha de entrega: {producto.fecha.split("T")[0]}
            </p>
            <p className="text-sm text-gray-500 truncate">
              {producto.descripcion}
            </p>
          </div>
          <div className="text-base font-semibold text-gray-900">
            <button
              className="text-white bg-[#39c962] hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
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
