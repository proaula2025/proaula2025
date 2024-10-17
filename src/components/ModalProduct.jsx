import ReactModal from "react-modal";
import { categoryProducts, stateProducts } from "../helpers/productsHelpers";
import InputText from "./InputText";

ReactModal.setAppElement("#root");

const ModalProduct = ({ isOpen, handleOpenModalProduct }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      className="w-[95%] max-w-[35rem] p-5 mx-auto my-10 bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:text-white"
      overlayClassName="fixed inset-0 z-50 bg-black bg-opacity-50 overflow-y-auto"
      onRequestClose={handleOpenModalProduct}
    >
      <div className="pb-5">
        <h2 className="text-2xl font-medium text-center uppercase pt-3 font-antonioSC tracking-wider">
          Un pequeño gesto, un gran cambio
        </h2>
        <p className="text-center text-gray-700 dark:text-gray-400">
          El producto que dones será de gran ayuda para las personas que lo
          necesitan.
        </p>
      </div>

      <form className="grid gap-2">
        <InputText
          label="Nombre del producto"
          placeholder="Bicicleta o Closet..."
          idLabel="nombreProducto"
          typeInput="text"
        />

        <div className="grid grid-cols-2 gap-2">
          <div>
            <label
              htmlFor="tarjeta"
              className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
            >
              Categoria del producto
            </label>
            <select
              name="categoria"
              className="w-full p-2.5 mt-1 border bg-stone-100 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              defaultValue=""
            >
              <option value="" disabled>
                Seleccionar
              </option>
              {categoryProducts.map(({ id, category }) => (
                <option key={id} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="tarjeta"
              className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
            >
              Estado del producto
            </label>
            <select
              name="estado"
              className="w-full p-2.5 mt-1 border bg-stone-100 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              defaultValue=""
            >
              <option value="" disabled>
                Seleccionar
              </option>
              {stateProducts.map(({ id, state }) => (
                <option key={id} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
        </div>

        <InputText
          label="Lugar para recoger el producto"
          placeholder="Calle bogota 43-45..."
          idLabel="place"
          typeInput="text"
        />

        <InputText
          label="Cantidad del producto"
          placeholder="20"
          idLabel="quality"
          typeInput="number"
        />

        <InputText
          label="Precio del producto"
          placeholder="100.000..."
          idLabel="precio"
          typeInput="number"
        />

        <div>
          <label
            className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
            htmlFor="tarjeta"
          >
            Descripción del producto
          </label>
          <textarea
            className="w-full h-32 p-2.5 mt-1 border bg-stone-100 resize-none border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Juguetes para que los niños se recreen..."
            name="descripcion"
          />
        </div>

        <div className="flex items-center justify-between gap-4">
          <button
            className="w-full py-3 mt-5 font-semibold text-white bg-blue-600 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
            type="submit"
          >
            Donar
          </button>
          <button
            className="w-full py-3 mt-5 font-semibold text-white bg-red-600 rounded-lg focus:outline-none focus:ring-4 focus:ring-red-300"
            type="button"
            onClick={handleOpenModalProduct}
          >
            Cancelar
          </button>
        </div>
      </form>
    </ReactModal>
  );
};

export default ModalProduct;
