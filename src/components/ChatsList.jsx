import { PropTypes } from "prop-types";
import { userPhoto } from "../images";

export const ChatsList = ({ chats, onChatSelect }) => {
  const lastMessage = chats?.map((chat) => {
    return chat.mensajes[chat.mensajes.length - 1];
  });

  const cleanedText =
    lastMessage[0]?.texto.replace(/\\n/g, "").length > 100
      ? lastMessage[0]?.texto.replace(/\\n/g, "").slice(0, 100) + "..."
      : lastMessage[0]?.texto.replace(/\\n/g, "");

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
        {chats?.map((chat) => (
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
                {" "}
                <span className="font-medium text-black">
                  {chat.usuario2.nombreCompleto}
                </span>{" "}
                <span className="text-sm text-gray-400 truncate w-32">
                  {cleanedText}
                </span>{" "}
              </div>
            </div>
            <div className="flex flex-col items-center">
              {" "}
              <span className="text-gray-300">11:26</span>{" "}
              <i className="fa fa-star text-green-400"></i>{" "}
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

ChatsList.propTypes = {
  chats: PropTypes.array.isRequired,
  onChatSelect: PropTypes.func.isRequired,
};
