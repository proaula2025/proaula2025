import { PropTypes } from "prop-types";
import { recogiendo1 } from "../images";
import { useCardProductFundacion } from "../hooks";

const CardProductFundacion = ({ producto, setProductos }) => {
  const { onRecogerProducto, recogiendoProducto } = useCardProductFundacion({
    producto,
    setProductos,
  });

  return (
    <>
      <li className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={producto.imageUrl}
          alt={producto.nombreProducto}
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {producto.nombreProducto}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Empresa: {producto.empresaDono.nombreCompleto}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Empresa correo: {producto.empresaDono.email}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Categoria: {producto.categoria}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {producto.fecha.split("T")[0]}
          </p>

          <div className="mt-2 text-base font-semibold text-gray-900">
            <button
              className="w-full text-white bg-[#39c962] hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
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
