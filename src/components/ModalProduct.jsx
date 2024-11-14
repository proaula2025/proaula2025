import ReactModal from "react-modal";
import { categoryProducts, stateProducts } from "../helpers/productsHelpers";
import InputText from "./InputText";
import { useForm } from "./../hooks/useForm";
import { PropTypes } from "prop-types";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import toast from "react-hot-toast";
import axios from "axios";
import { ProductosContext } from "./../context/ProductsContext";

const ModalProduct = ({
  isOpen,
  handleOpenModalProduct,
  fundacionSeleccionada,
  tipoDeProducto = "Donación",
  mensajeGuardado,
}) => {
  const { setProductos, setProductosPersona } = useContext(ProductosContext);
  const { usuarioEnLinea } = useContext(UserContext);
  const [cargandoGuardado, setCargandoGuardado] = useState(false);

  const { formState, onInputChange } = useForm({
    nombreProducto: "",
    categoria: "",
    estado: "",
    direccion: "",
    cantidad: "",
    precio: "",
    descripcion: "",
    tipoProducto: "",
  });

  const validateForm = (formState) => {
    const errors = {};

    if (!formState.nombreProducto || formState.nombreProducto.length < 3) {
      errors.nombreProducto =
        "El nombre del producto es obligatorio y debe tener al menos 3 caracteres.";
    }

    if (!formState.categoria) {
      errors.categoria = "La categoría es obligatoria.";
    }

    if (!formState.estado) {
      errors.estado = "El estado es obligatorio.";
    }

    if (!formState.direccion || formState.direccion.length < 5) {
      errors.direccion =
        "La dirección es obligatoria y debe tener al menos 5 caracteres.";
    }

    if (
      !formState.cantidad ||
      isNaN(formState.cantidad) ||
      formState.cantidad <= 0
    ) {
      errors.cantidad =
        "La cantidad es obligatoria y debe ser un número positivo.";
    }

    if (usuarioEnLinea.tipoEntidad !== "Empresa") {
      if (
        !formState.precio ||
        isNaN(formState.precio) ||
        formState.precio <= 0
      ) {
        errors.precio =
          "El precio es obligatorio y debe ser un número positivo.";
      }
    }

    if (usuarioEnLinea.tipoEntidad !== "Empresa") {
      if (!formState.tipoProducto) {
        errors.tipoProducto = "El tipo de producto es obligatorio.";
      }
    }

    if (formState.descripcion && formState.descripcion.length > 250) {
      errors.descripcion =
        "La descripción no puede exceder los 250 caracteres.";
    }

    return errors;
  };

  const onGuardarProducto = async (e) => {
    e.preventDefault();

    const errors = validateForm(formState);

    if (Object.keys(errors).length > 0)
      return Object.values(errors).map((error) => toast.error(error));

    setCargandoGuardado(true);

    const loadingToast = toast.loading("Guardando producto...", {
      duration: 6000,
      style: {
        border: "1px solid #0a74da",
        padding: "16px",
        color: "#0a74da",
      },
      iconTheme: {
        primary: "#0a74da",
        secondary: "#fff",
      },
    });

    await new Promise((resolve) => setTimeout(resolve, 6000));

    try {
      // Crear el objeto base para el envío
      let productoData = {
        nombreProducto: formState.nombreProducto,
        categoria: formState.categoria,
        estado: formState.estado,
        direccionRecogida: formState.direccion,
        cantidad: formState.cantidad,
        precio: formState.precio,
        descripcion: formState.descripcion,
        fecha: new Date(),
        tipoProducto: formState.tipoProducto,
      };

      // Solo agregar empresaDono si no es una donación
      if (tipoDeProducto === "Donación") {
        productoData = {
          ...productoData,
          empresaDono: {
            idUsuario: usuarioEnLinea.idUsuario,
          },
          usuario: {
            idUsuario: fundacionSeleccionada.idUsuario,
          },
          tipoProducto: "Donación",
        };
      }

      if (tipoDeProducto !== "Donación") {
        productoData = {
          ...productoData,
          usuario: {
            idUsuario: usuarioEnLinea.idUsuario,
          },
        };
      }

      // Realizar la solicitud POST
      const response = await axios.post(
        "http://localhost:9999/api/producto",
        productoData
      );

      if (response.data.esValido) {
        toast.success(response.data.mensaje);
        toast.success(mensajeGuardado);

        if (tipoDeProducto === "Donación") {
          setProductos((productos) => [
            ...productos,
            response.data.productoDTO,
          ]);
        } else {
          setProductosPersona((productosPersona) => [
            ...productosPersona,
            response.data.productoDTO,
          ]);
        }

        handleOpenModalProduct();
      } else {
        toast.error(response.data.mensaje);
      }
    } catch (error) {
      console.log(error);

      toast.error(
        "Ocurrió un error al guardar el producto." + error.response.data.mensaje
      );
    } finally {
      toast.dismiss(loadingToast);

      setCargandoGuardado(false);
    }
  };

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
