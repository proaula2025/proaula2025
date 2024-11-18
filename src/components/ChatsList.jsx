import { PropTypes } from "prop-types";
import { userPhoto } from "../images";

export const ChatsList = ({ chats, onChatSelect }) => {
  const lastMessage = chats.map((chat) => {
    return chat.mensajes[chat.mensajes.length - 1];
  });

  const cleanedText =
    lastMessage[0].texto.replace(/\\n/g, "").length > 100
      ? lastMessage[0].texto.replace(/\\n/g, "").slice(0, 100) + "..."
      : lastMessage[0].texto.replace(/\\n/g, "");

  return (
    <div className="col-span-3 p-3 border-r h-full overflow-auto">
      <div className="w-full p-2 bg-white">
        <input
          className="w-full h-12 px-2 bg-stone-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
          type="text"
          placeholder="Buscar usuario..."
        />
      </div>
      <div className="flex-grow">
        {chats.map((chat, index) => (
          <div
            key={index}
            className="w-full flex gap-3 p-3 border-b rounded-md cursor-pointer"
            onClick={() => onChatSelect(chat)}
          >
            <figure>
              <img
                className="w-10 rounded-full"
                src={chat.usuario2.imageUrl || userPhoto}
                alt="User photo"
              />
            </figure>
            <div className="w-full">
              <div className="w-full flex items-center justify-between">
                <h3 className="text-base font-semibold text-gray-900 truncate">
                  {chat.usuario2.nombreCompleto}
                </h3>
                <p className="text-xs">Ahora</p>
              </div>
              <div className="grid gap-1">
                <p className="text-sm text-gray-500">{chat.usuario2.email}</p>
                <p className="text-xs text-gray-500">{cleanedText}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

ChatsList.propTypes = {
  chats: PropTypes.array.isRequired,
  onChatSelect: PropTypes.func.isRequired,
};
