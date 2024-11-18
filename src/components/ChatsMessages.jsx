import { formatTime } from "../helpers/productsHelpers";
import { PropTypes } from "prop-types";

export const ChatsMessages = ({ selectedChat, usuarioEnLinea }) => {
  return (
    <div className="h-full overflow-auto max-h-screen">
      {selectedChat.mensajes.map((mensaje) => (
        <div key={mensaje.idMensaje}>
          {mensaje.usuario.idUsuario !== usuarioEnLinea.idUsuario && (
            <div className="grid">
              <div className="flex gap-2.5 mb-4">
                <img
                  src={mensaje.usuario.imageUrl}
                  alt={mensaje.usuario.nombreCompleto}
                  className="w-10 h-11"
                />
                <div className="grid">
                  <h5 className="text-gray-900 text-sm font-semibold leading-snug pb-1">
                    {mensaje.usuario.nombreCompleto}
                  </h5>
                  <div className="w-max grid">
                    <div className="px-3.5 py-2 bg-gray-100 rounded justify-start  items-center gap-3 inline-flex">
                      <h5 className="text-gray-900 text-sm font-normal leading-snug">
                        {mensaje.texto.replace(/\\n/g, "")}
                      </h5>
                    </div>
                    <div className="justify-end items-center inline-flex mb-2.5">
                      <h6 className="text-gray-500 text-xs font-normal leading-4 py-1">
                        {formatTime(mensaje.fecha)}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {mensaje.usuario.idUsuario === usuarioEnLinea.idUsuario && (
            <div className="flex gap-2.5 justify-end pl-96">
              <div className="">
                <div className="grid mb-2">
                  <h5 className="text-right text-gray-900 text-sm font-semibold leading-snug pb-1">
                    Tú
                  </h5>

                  <div className="justify-start items-center inline-flex">
                    <h3 className="text-gray-500 text-xs font-normal leading-4 py-1">
                      {formatTime(mensaje.fecha)}
                    </h3>
                  </div>
                </div>
                <div className="justify-center">
                  <div className="grid w-fit ml-auto">
                    <div className="px-3 py-2 bg-green-500 rounded ">
                      <h2 className="text-white text-sm font-normal leading-snug">
                        {mensaje.texto.replace(/\\n/g, "")}
                      </h2>
                    </div>
                    <div className="justify-start items-center inline-flex">
                      <h3 className="text-gray-500 text-xs font-normal leading-4 py-1">
                        Tú
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <img
                src={usuarioEnLinea.imageUrl}
                alt={usuarioEnLinea.nombreCompleto}
                className="w-10 h-11 rounded-full object-cover"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

ChatsMessages.propTypes = {
  selectedChat: PropTypes.object.isRequired,
  usuarioEnLinea: PropTypes.object.isRequired,
};
