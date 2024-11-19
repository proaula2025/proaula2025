import { backCompany } from "../images";
import { PropTypes } from "prop-types";
import VentaProducto from "./VentaProducto";
import { formatearPrecioColombiano } from "../helpers/productsHelpers";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IntercambiarProducto } from "./IntercambiarProducto";

const CardProductPersona = ({
  producto,
  handleOpenModalRegistrarse,
  estaEnLinea,
  usuarioEnLinea,
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
        <div>
          <img
            className="rounded-t-lg max-h-60 w-full object-cover"
            src={producto.imageUrl || backCompany}
            alt="product image"
          />
        </div>
        <div className="px-5 py-5">
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
            <span className="text-xl font-bold mb-4 text-black">
              {formatearPrecioColombiano(producto.precio)} pesos
            </span>

            {usuarioEnLinea.idUsuario !== producto.usuario.idUsuario &&
              usuarioEnLinea.tipoEntidad !== "Empresa" &&
              usuarioEnLinea.tipoEntidad !== "Fundacion" && (
                <button
                  className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  onClick={onComprarProducto}
                  style={{
                    backgroundColor: producto.cantidad === 0 ? "#ccc" : "",
                    cursor: producto.cantidad === 0 ? "not-allowed" : "pointer",
                  }}
                >
                  {producto.cantidad !== 0
                    ? producto.tipoProducto === "Venta"
                      ? "Comprar"
                      : "Intercambiar"
                    : "¡Agotado!"}
                </button>
              )}
          </div>
        </div>
      </div>

      {openModalProducto && gestionVentaProducto.tipoProducto === "Venta" && (
        <VentaProducto
          gestionVentaProducto={gestionVentaProducto}
          setOpenModalProducto={setOpenModalProducto}
        />
      )}

      {openModalProducto &&
        gestionVentaProducto.tipoProducto === "Intercambio" && (
          <IntercambiarProducto
            gestionIntercambiarProducto={gestionVentaProducto}
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
  usuarioEnLinea: PropTypes.object.isRequired,
};

export default CardProductPersona;
