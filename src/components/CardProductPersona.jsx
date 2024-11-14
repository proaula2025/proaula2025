import { backCompany } from "../images";
import { PropTypes } from "prop-types";
import VentaProducto from "./VentaProducto";
import { formatearPrecioColombiano } from "../helpers/productsHelpers";
import { useState } from "react";
import { Link } from "react-router-dom";

const CardProductPersona = ({
  producto,
  handleOpenModalRegistrarse,
  estaEnLinea,
}) => {
  const [gestionVentaProducto, setGestionVentaProducto] = useState({});
  const [openModalProducto, setOpenModalProducto] = useState(false);

  const onComprarProducto = () => {
    if (!estaEnLinea) {
      handleOpenModalRegistrarse();
      return;
    }

    setGestionVentaProducto(producto);
    setOpenModalProducto(true);
  };

  return (
    <>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <a href="#">
          <img
            className="p-8 rounded-t-lg"
            src={backCompany}
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <h5 className="text-2xl font-semibold tracking-tight text-gray-900">
            {producto.nombreProducto}
          </h5>
          <div className="flex flex-col">
            <p className="text-gray-400 py-1">{producto.descripcion}</p>
            <p className="text-gray-400 py-1">Estado: {producto.estado}</p>
            <p className="text-gray-400 py-1">Cantidad: {producto.cantidad}</p>
            <p className="text-gray-400 py-1">
              Estado: {producto.fecha.split("T")[0]}
            </p>
            <p className="text-gray-400 py-1 hover:underline">
              Dueño:{" "}
              <Link
                to={`/${producto.usuario.idUsuario}/${producto.usuario.nombreCompleto}`}
              >
                {producto.usuario.nombreCompleto}
              </Link>
            </p>
            <span className="text-xl font-bold mb-4 text-gray-400">
              {formatearPrecioColombiano(producto.precio)} pesos
            </span>

            <button
              className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={onComprarProducto}
              style={{
                backgroundColor: producto.cantidad === 0 ? "#ccc" : "",
                cursor: producto.cantidad === 0 ? "not-allowed" : "pointer",
              }}
            >
              {producto.cantidad !== 0 ? "Comprar" : "¡Agotado!"}
            </button>
          </div>
        </div>
      </div>

      {openModalProducto && (
        <VentaProducto
          gestionVentaProducto={gestionVentaProducto}
          setOpenModalProducto={setOpenModalProducto}
        />
      )}
    </>
  );
};

CardProductPersona.propTypes = {
  producto: PropTypes.object.isRequired,
  handleOpenModalRegistrarse: PropTypes.func.isRequired,
  estaEnLinea: PropTypes.bool.isRequired,
};

export default CardProductPersona;
