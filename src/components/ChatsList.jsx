import { PropTypes } from "prop-types";
import { useState } from "react";
import { userPhoto } from "../images";

export const ChatsList = ({ chats, onChatSelect }) => {
  const [searchText, setSearchText] = useState("");

  // Filtra los chats según el texto de búsqueda
  const filteredChats = chats?.filter((chat) =>
    chat.usuario2.nombreCompleto
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );

  return (
    <div className="col-span-3 p-3 border-r h-full overflow-auto">
      {/* Input para buscar usuarios */}
      <div className="w-full p-2 bg-white">
        <input
          className="w-full h-12 px-2 bg-stone-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
          type="text"
          placeholder="Buscar usuario..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className="flex-grow">
        {/* Muestra los chats filtrados */}
        {filteredChats?.length > 0 ? (
          filteredChats.map((chat) => (
            <li
              className="flex justify-between items-center border-b bg-white mt-2 p-2 hover:shadow-md rounded cursor-pointer transition"
              key={chat.idChat}
              onClick={() => onChatSelect(chat)}
            >
              <div className="flex ml-2">
                <img
                  src={chat.usuario2.imageUrl || userPhoto}
                  width="40"
                  height="40"
                  className="rounded-full object-cover"
                />
                <div className="flex flex-col ml-2">
                  <span className="font-medium text-black">
                    {chat.usuario2.nombreCompleto}
                  </span>
                  <span className="text-sm text-gray-400 truncate w-32">
                    {chat.mensajes[chat.mensajes.length - 1]?.texto
                      ?.replace(/\\n/g, "")
                      ?.slice(0, 100)}
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-gray-300">11:26</span>
                <i className="fa fa-star text-green-400"></i>
              </div>
            </li>
          ))
        ) : (
          <p className="text-gray-500 text-center mt-4">
            No se encontraron chats.
          </p>
        )}
      </div>
    </div>
  );
};

ChatsList.propTypes = {
  chats: PropTypes.array.isRequired,
  onChatSelect: PropTypes.func.isRequired,
};
