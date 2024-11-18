import axios from "axios";
import { formatearPrecioColombiano } from "../helpers/productsHelpers";
import { useDisableScroll, useForm } from "../hooks";
import InputText from "./InputText";
import { PropTypes } from "prop-types";
import { apiUrlBackend } from "./../helpers/apiUrl";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const IntercambiarProducto = ({
  gestionIntercambiarProducto,
  setOpenModalProducto,
}) => {
  const { usuarioEnLinea } = useContext(UserContext);
  useDisableScroll(true);

  const { formState, onInputChange } = useForm({
    cantidad: 1,
    mensaje: "",
  });

  const onIntercambiarProducto = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${apiUrlBackend}/chat/crear?idUsuario=${usuarioEnLinea.idUsuario}&idUsuarioOtro=${gestionIntercambiarProducto.usuario.idUsuario}`
      );

      if (response.data.esValido) {
        const responseIntercambio = await axios.post(
          `${apiUrlBackend}/chat/mensaje/${response.data.chatDTO.idChat}/${usuarioEnLinea.idUsuario}`,
          {
            texto: `
              Hola, me gustaría intercambiar tu producto ${
                gestionIntercambiarProducto.nombreProducto
              } estoy interesado en comprar ${
              formState.cantidad === 1 ? "unidad" : "unidades"
            }. ¿Por que producto en especifico te gustaria intercambiar tu producto?. ${
              formState.mensaje
            }
            `,
          }
        );

        console.log(responseIntercambio);

        if (responseIntercambio.data.esValido) {
          setOpenModalProducto(false);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
      <section className="w-full max-w-md p-6 mx-auto bg-white rounded-lg shadow-lg relative">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-2">
          Intercambiar producto
        </h2>
        <p className="text-gray-400">
          Ingrese los detalles de su compra aquí. Haga clic en guardar cuando
          termine.
        </p>

        <ul className="grid gap-2">
          <li className="mt-4 text-gray-400">
            <span className="font-semibold">Producto:</span>{" "}
            {gestionIntercambiarProducto.nombreProducto}
          </li>
          <li className="mt-1 text-gray-400">
            <span className="font-semibold">Precio:</span>{" "}
            {formatearPrecioColombiano(gestionIntercambiarProducto.precio)}{" "}
            pesos
          </li>
          <li className="mt-1 text-gray-400">
            <span className="font-semibold">Categoria:</span>{" "}
            {gestionIntercambiarProducto.categoria}
          </li>
          <li className="mt-1 text-gray-400">
            <span className="font-semibold">Estado:</span>{" "}
            {gestionIntercambiarProducto.estado}
          </li>
          <li className="mt-1 text-gray-400">
            <span className="font-semibold">Cantidad total:</span>{" "}
            {gestionIntercambiarProducto.cantidad}
          </li>
          <li className="mt-1 text-gray-400 flex flex-col">
            <span className="font-semibold">Descripción:</span>{" "}
            {gestionIntercambiarProducto.descripcion}
          </li>
        </ul>

        <form className="mt-4 grid gap-3" onSubmit={onIntercambiarProducto}>
          <InputText
            label="Cantidad a comprar"
            typeInput="number"
            placeholder="Cantidad a comprar..."
            name="cantidad"
            value={formState.cantidad}
            onChange={onInputChange}
          />

          <div>
            <label className="block mb-2 text-base font-medium text-gray-900">
              Mensaje para el dueño, del por qué quieres intercambiar este
              producto
            </label>

            <textarea
              className="block w-full h-44 px-4 py-[0.55rem] text-base text-gray-900 border border-gray-300 rounded-lg bg-[#ffffff47] focus:ring-blue-500 focus:border-blue-500 resize-none"
              placeholder="Mensaje..."
              name="mensaje"
              value={formState.mensaje}
              onChange={onInputChange}
            ></textarea>
          </div>

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
  );
};

IntercambiarProducto.propTypes = {
  gestionIntercambiarProducto: PropTypes.object.isRequired,
  setOpenModalProducto: PropTypes.func.isRequired,
};
