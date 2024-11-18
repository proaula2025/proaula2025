import PropTypes from "prop-types";
import InputText from "./InputText";
import { formatearPrecioColombiano } from "../helpers/productsHelpers";
import { useDisableScroll, useVentaProduct } from "../hooks";

const VentaProducto = ({ gestionVentaProducto, setOpenModalProducto }) => {
  useDisableScroll(true);

  const {
    cantidadAComprar,
    isLoading,
    loadingMessage,
    onComprarProductoSeleccionado,
    setCantidadAComprar,
  } = useVentaProduct({
    gestionVentaProducto,
    setOpenModalProducto,
  });

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-sm p-6 mx-auto bg-white rounded-lg shadow-lg text-center flex items-center flex-col">
            <p className="text-lg font-semibold text-gray-700">
              {loadingMessage}
            </p>
            <div className="mt-4 loader animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-green-500"></div>
          </div>
        </div>
      )}

      <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
        <section className="w-full max-w-md p-6 mx-auto bg-white rounded-lg shadow-lg relative">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-2">
            Compra producto
          </h2>
          <p className="text-gray-400">
            Ingrese los detalles de su compra aquí. Haga clic en guardar cuando
            termine.
          </p>

          <ul className="grid gap-2">
            <li className="mt-4 text-gray-400">
              <span className="font-semibold">Producto:</span>{" "}
              {gestionVentaProducto.nombreProducto}
            </li>
            <li className="mt-1 text-gray-400">
              <span className="font-semibold">Precio:</span>{" "}
              {formatearPrecioColombiano(gestionVentaProducto.precio)} pesos
            </li>
            <li className="mt-1 text-gray-400">
              <span className="font-semibold">Categoria:</span>{" "}
              {gestionVentaProducto.categoria}
            </li>
            <li className="mt-1 text-gray-400">
              <span className="font-semibold">Estado:</span>{" "}
              {gestionVentaProducto.estado}
            </li>
            <li className="mt-1 text-gray-400">
              <span className="font-semibold">Cantidad total:</span>{" "}
              {gestionVentaProducto.cantidad}
            </li>
            <li className="mt-1 text-gray-400 flex flex-col">
              <span className="font-semibold">Descripción:</span>{" "}
              {gestionVentaProducto.descripcion}
            </li>
          </ul>

          <form
            className="mt-4 grid gap-3"
            onSubmit={onComprarProductoSeleccionado}
          >
            <InputText
              label="Cantidad a comprar"
              typeInput="number"
              value={cantidadAComprar}
              placeholder="Cantidad a comprar..."
              onChange={(e) => setCantidadAComprar(Number(e.target.value))}
            />
            <div className="grid grid-cols-2 gap-4">
              <button
                type="submit"
                className="w-full px-4 py-2 mt-4 text-white bg-green-500 hover:bg-green-700 duration-150 rounded-lg focus:ring-4 focus:outline-none focus:ring-green-300"
              >
                Guardar
              </button>
              <button
                type="button"
                className="w-full px-4 py-2 mt-4 text-white bg-red-500 hover:bg-red-700 duration-150 rounded-lg focus:ring-4 focus:outline-none focus:ring-red-300"
                onClick={() => setOpenModalProducto(false)}
              >
                Cancelar
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

VentaProducto.propTypes = {
  gestionVentaProducto: PropTypes.object.isRequired,
  setOpenModalProducto: PropTypes.func.isRequired,
};

export default VentaProducto;
