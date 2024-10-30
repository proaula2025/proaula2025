import ReactModal from "react-modal";
import InputText from "./InputText";
import { PropTypes } from "prop-types";
import axios from "axios";
import { apiUrlBackend } from "./../helpers/apiUrl";

const VentaProducto = ({ onComprarProducto }) => {
  const onComprarProductoSeleccionado = async () => {
    try {
      const response = await axios.post(apiUrlBackend + "/compraProducto", {
        producto: producto._id,
        cantidad: 1,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ReactModal
      isOpen={true}
      className="w-[95%] max-w-[35rem] p-5 mx-auto my-10 bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:text-white"
      overlayClassName="fixed inset-0 z-50 bg-black bg-opacity-50 overflow-y-auto"
    >
      <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-2 dark:text-white">
        Compra producto
      </h2>
      <p className="text-gray-400 dark:text-gray-300">
        Ingrese los detalles de su compra aquí. Haga clic en guardar cuando
        termine.
      </p>

      <ul className="grid gap-2">
        <li className="mt-4 text-gray-400 dark:text-gray-300">
          <span className="font-semibold">Producto:</span> Nombre del producto
        </li>
        <li className="mt-1 text-gray-400 dark:text-gray-300">
          <span className="font-semibold">Precio:</span> $100.000
        </li>
        <li className="mt-1 text-gray-400 dark:text-gray-300">
          <span className="font-semibold">Categoria:</span> Categoria del
        </li>
        <li className="mt-1 text-gray-400 dark:text-gray-300">
          <span className="font-semibold">Estado:</span> Estado del producto
        </li>
        <li className="mt-1 text-gray-400 dark:text-gray-300">
          <span className="font-semibold">Cantidad:</span> 2
        </li>
        <li className="mt-1 text-gray-400 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vel
          molestiae earum eligendi, consequatur, laborum suscipit accusantium
          neque, officiis quos voluptas provident non nihil alias libero!
          Aliquam rem libero quia!
        </li>
      </ul>

      <form className="mt-4 grid gap-3">
        <InputText label="Cantidad a comprar" type="number" />

        <button
          type="submit"
          className="w-full px-4 py-2 mt-4 text-white bg-green-500 hover:bg-green-700 duration-150 rounded-lg focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:focus:ring-green-800"
        >
          Guardar
        </button>
      </form>
    </ReactModal>
  );
};

VentaProducto.propTypes = {
  onComprarProducto: PropTypes.func.isRequired,
};

export default VentaProducto;
