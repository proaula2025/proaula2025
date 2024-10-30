import InputText from "./InputText";
import { PropTypes } from "prop-types";
import axios from "axios";
import { apiUrlBackend } from "./../helpers/apiUrl";
import { formatearPrecioColombiano } from "../helpers/productsHelpers";
import { useState } from "react";

const VentaProducto = ({ gestionVentaProducto, setOpenModalProducto }) => {
  const [cantidadAComprar, setCantidadAComprar] = useState(1);

  const onComprarProductoSeleccionado = async () => {
    try {
      const response = await axios.post(apiUrlBackend + "/compraProducto", {
        producto: gestionVentaProducto,
        cantidad: 1,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="w-full max-w-md p-4 mx-auto bg-white rounded-lg shadow dark:bg-gray-800">
      <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-2 dark:text-white">
        Compra producto
      </h2>
      <p className="text-gray-400 dark:text-gray-300">
        Ingrese los detalles de su compra aquí. Haga clic en guardar cuando
        termine.
      </p>

      <ul className="grid gap-2">
        <li className="mt-4 text-gray-400 dark:text-gray-300">
          <span className="font-semibold">Producto:</span>{" "}
          {gestionVentaProducto.nombreProducto}
        </li>
        <li className="mt-1 text-gray-400 dark:text-gray-300">
          <span className="font-semibold">Precio:</span>{" "}
          {formatearPrecioColombiano(gestionVentaProducto.precio)} pesos
        </li>
        <li className="mt-1 text-gray-400 dark:text-gray-300">
          <span className="font-semibold">Categoria:</span>{" "}
          {gestionVentaProducto.categoria}
        </li>
        <li className="mt-1 text-gray-400 dark:text-gray-300">
          <span className="font-semibold">Estado:</span>{" "}
          {gestionVentaProducto.estado}
        </li>
        <li className="mt-1 text-gray-400 dark:text-gray-300">
          <span className="font-semibold">Cantidad total:</span>{" "}
          {gestionVentaProducto.cantidad}
        </li>
        <li className="mt-1 text-gray-400 dark:text-gray-300">
          {gestionVentaProducto.descripcion}
        </li>
      </ul>

      <form className="mt-4 grid gap-3">
        <InputText
          label="Cantidad a comprar"
          typeInput="number"
          value={cantidadAComprar}
          placeholder="Cantidad a comprar..."
          onChange={(e) => setCantidadAComprar(e.target.value)}
        />

        <button
          type="submit"
          className="w-full px-4 py-2 mt-4 text-white bg-green-500 hover:bg-green-700 duration-150 rounded-lg focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:focus:ring-green-800"
        >
          Guardar
        </button>
      </form>
    </section>
  );
};

VentaProducto.propTypes = {
  gestionVentaProducto: PropTypes.object.isRequired,
  setOpenModalProducto: PropTypes.func.isRequired,
};

export default VentaProducto;
