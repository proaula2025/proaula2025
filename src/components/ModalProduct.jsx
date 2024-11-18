import ReactModal from "react-modal";
import { categoryProducts, stateProducts } from "../helpers/productsHelpers";
import InputText from "./InputText";
import { PropTypes } from "prop-types";
import { backCompany } from "../images";
import { useModalProduct } from "../hooks";

const ModalProduct = ({
  isOpen,
  handleOpenModalProduct,
  fundacionSeleccionada,
  tipoDeProducto = "Donación",
  mensajeGuardado,
}) => {
  const {
    cargandoGuardado,
    formState,
    onGuardarProducto,
    onInputChange,
    usuarioEnLinea,
    handleFileChange,
    imagenSeleccionada,
    inputFileRef,
  } = useModalProduct({
    fundacionSeleccionada,
    handleOpenModalProduct,
    mensajeGuardado,
    tipoDeProducto,
  });

  return (
    <ReactModal
      isOpen={isOpen}
      className="w-[95%] max-w-[35rem] p-5 mx-auto my-10 bg-white rounded-lg shadow-lg"
      overlayClassName="fixed inset-0 z-50 bg-black bg-opacity-50 overflow-y-auto"
      onRequestClose={handleOpenModalProduct}
    >
      <div className="pb-5">
        <h2 className="text-2xl font-medium text-center uppercase pt-3 font-antonioSC tracking-wider">
          Un pequeño gesto, un gran cambio
        </h2>
        <p className="text-center text-gray-700">
          El producto que dones será de gran ayuda para las personas que lo
          necesitan.
        </p>
      </div>

      <form className="grid gap-2" onSubmit={onGuardarProducto}>
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-base font-medium text-gray-900"
          >
            Foto del producto
          </label>

          <div className="flex items-center justify-center w-full">
            <figure className="relative">
              <img
                className="w-full rounded-xl shadow-xl"
                src={
                  imagenSeleccionada
                    ? URL.createObjectURL(imagenSeleccionada)
                    : backCompany
                }
                alt="image description"
              />

              <svg
                className="w-10 h-10 p-2 shadow-lg bg-white rounded-full text-gray-800 absolute bottom-2 right-6 cursor-pointer"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                onClick={() => {
                  inputFileRef.current.click();
                }}
              >
                <path
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"
                />
                <path
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>

              <input
                type="file"
                ref={inputFileRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
              />
            </figure>
          </div>
        </div>

        <InputText
          label="Nombre del producto"
          placeholder="Bicicleta o Closet..."
          idLabel="nombreProducto"
          typeInput="text"
          name="nombreProducto"
          value={formState.nombreProducto}
          onChange={onInputChange}
        />

        <div className="grid grid-cols-2 gap-2">
          <div>
            <label
              htmlFor="tarjeta"
              className="block mb-2 text-base font-medium text-gray-900"
            >
              Categoria del producto
            </label>
            <select
              name="categoria"
              className="w-full p-2.5 mt-1 border bg-stone-100 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
              value={formState.categoria}
              onChange={onInputChange}
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
              htmlFor="estado"
              className="block mb-2 text-base font-medium text-gray-900"
            >
              Estado del producto
            </label>
            <select
              id="estado"
              name="estado"
              className="w-full p-2.5 mt-1 border bg-stone-100 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
              value={formState.estado}
              onChange={onInputChange}
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
          idLabel="direccion"
          typeInput="text"
          name="direccion"
          value={formState.direccion}
          onChange={onInputChange}
        />

        <div className="grid grid-cols-2 gap-2">
          <InputText
            label="Cantidad del producto"
            placeholder="20"
            idLabel="cantidad"
            typeInput="number"
            name="cantidad"
            value={formState.cantidad}
            onChange={onInputChange}
          />

          {usuarioEnLinea.tipoEntidad !== "Empresa" && (
            <InputText
              label="Precio del producto"
              placeholder="100.000..."
              idLabel="precio"
              typeInput="number"
              name="precio"
              value={formState.precio}
              onChange={onInputChange}
            />
          )}
        </div>

        {usuarioEnLinea.tipoEntidad !== "Empresa" && (
          <div>
            <label
              htmlFor="tipoProducto"
              className="block mb-2 text-base font-medium text-gray-900"
            >
              Acción del producto
            </label>
            <select
              id="tipoProducto"
              name="tipoProducto"
              className="w-full p-2.5 mt-1 border bg-stone-100 border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
              value={formState.tipoProducto}
              onChange={onInputChange}
            >
              <option value="" disabled>
                Seleccionar
              </option>
              <option value="Venta">Venta</option>
              <option value="Intercambio">Intercambio</option>
            </select>
          </div>
        )}

        <div>
          <label
            className="block mb-2 text-base font-medium text-gray-900"
            htmlFor="tarjeta"
          >
            Descripción del producto
          </label>
          <textarea
            className="w-full h-32 p-2.5 mt-1 border bg-stone-100 resize-none border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block"
            placeholder="Juguetes para que los niños se recreen..."
            name="descripcion"
            value={formState.descripcion}
            onChange={onInputChange}
          />
        </div>

        <div className="flex items-center justify-between gap-4">
          <button
            className="w-full py-3 mt-5 font-semibold text-white bg-green-600 rounded-lg focus:outline-none focus:ring-4 focus:ring-green-300"
            type="submit"
            disabled={cargandoGuardado}
          >
            {cargandoGuardado ? "Guardando..." : "Guardar producto"}
          </button>
          <button
            className="w-full py-3 mt-5 font-semibold text-black bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-gray-300"
            type="button"
            disabled={cargandoGuardado}
            onClick={handleOpenModalProduct}
          >
            Cancelar
          </button>
        </div>
      </form>
    </ReactModal>
  );
};

ModalProduct.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleOpenModalProduct: PropTypes.func.isRequired,
  fundacionSeleccionada: PropTypes.object,
  tipoDeProducto: PropTypes.string,
  mensajeGuardado: PropTypes.string,
};

export default ModalProduct;
