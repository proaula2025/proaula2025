import { backCompany } from "../images";
import { PropTypes } from "prop-types";
import VentaProducto from "./VentaProducto";
import { formatearPrecioColombiano } from "../helpers/productsHelpers";
import { useState } from "react";

const CardProductPersona = ({ producto }) => {
  const [gestionVentaProducto, setGestionVentaProducto] = useState({
    producto: {},
    openModal: false,
  });

  const onComprarProducto = () => {
    setGestionVentaProducto({
      producto,
      openModal: !gestionVentaProducto.openModal,
    });
  };

  return (
    <>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="p-8 rounded-t-lg"
            src={backCompany}
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {producto.nombreProducto}
          </h5>
          <div className="flex flex-col">
            <p className="text-gray-400 py-1 dark:text-white">
              {producto.descripcion}
            </p>
            <p className="text-gray-400 py-1 dark:text-white">
              Estado: {producto.estado}
            </p>
            <p className="text-gray-400 py-1 dark:text-white">
              Estado: {producto.fecha.split("T")[0]}
            </p>
            <p className="text-gray-400 py-1 dark:text-white">
              Dueño: {producto.usuario.nombreCompleto}
            </p>
            <span className="text-xl font-bold mb-4 text-gray-400 dark:text-white">
              {formatearPrecioColombiano(producto.precio)} pesos
            </span>
            <button
              className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              onClick={onComprarProducto}
            >
              Comprar
            </button>
          </div>
        </div>
      </div>

      {gestionVentaProducto && (
        <VentaProducto
          gestionVentaProducto={gestionVentaProducto}
          setGestionVentaProducto={setGestionVentaProducto}
        />
      )}
    </>
  );
};

CardProductPersona.propTypes = {
  producto: PropTypes.object.isRequired,
};

export default CardProductPersona;
