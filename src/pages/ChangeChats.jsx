import { useContext, useEffect, useState } from "react";
import TemplateMain from "./../Templates/TemplateMain";
import axios from "axios";
import { apiUrlBackend } from "./../helpers/apiUrl";
import { UserContext } from "../context/UserContext";
import { ChatsList } from "./../components/ChatsList";
import { Link } from "react-router-dom";
import { ChatsMessages } from "../components/ChatsMessages";
import { InputMessageChat } from "../components/InputMessageChat";

const ChangeChats = () => {
  const { usuarioEnLinea } = useContext(UserContext);
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedChat, setSelectedChat] = useState(null);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await axios.get(
          `${apiUrlBackend}/chat/usuario/${usuarioEnLinea.idUsuario}`
        );

        if (response.data.esValido) {
          setChats(response.data.chatsDTO);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchChats();
  }, [usuarioEnLinea.idUsuario]);

  const handleChatSelect = (chat) => {
    setSelectedChat(chat); // Set the selected chat when a user clicks on a chat
  };

  if (loading) {
    return "Loading...";
  }

  const chatsSorted = chats.sort((a, b) => {
    const fechaA = new Date(a.mensajes[a.mensajes.length - 1].fecha);
    const fechaB = new Date(b.mensajes[b.mensajes.length - 1].fecha);

    return fechaB - fechaA;
  });

  const handleNewMessage = (newMessage) => {
    setSelectedChat((prevChat) => ({
      ...prevChat,
      mensajes: [...prevChat.mensajes, newMessage],
    }));

    setChats((prevChats) => {
      const chatIndex = prevChats.findIndex(
        (chat) => chat.idChat === newMessage.idChat
      );

      prevChats[chatIndex] = {
        ...prevChats[chatIndex],
        mensajes: [...prevChats[chatIndex].mensajes, newMessage],
      };

      return prevChats;
    });
  };

  return (
    <TemplateMain>
      <section className="w-full h-[calc(100vh-7.5rem)] grid grid-cols-10 gap-2 bg-[#fff] shadow p-2 rounded-md">
        <ChatsList chats={chatsSorted} onChatSelect={handleChatSelect} />

        {selectedChat ? (
          <article className="w-full col-span-7 h-full grid grid-rows-[auto,1fr,auto] gap-4 overflow-auto">
            <div className="flex justify-between items-center border-b pb-2">
              <p className="text-3xl font-semibold">
                {selectedChat.usuario2.nombreCompleto}
              </p>

              <Link
                to={`/${selectedChat.usuario2.idUsuario}/${selectedChat.usuario2.nombreCompleto}`}
              >
                <svg
                  className="w-7 h-7 text-gray-800 cursor-pointer"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </Link>
            </div>

            <ChatsMessages
              selectedChat={selectedChat}
              usuarioEnLinea={usuarioEnLinea}
            />

            <InputMessageChat
              selectedChat={selectedChat}
              usuarioEnLinea={usuarioEnLinea}
              handleNewMessage={handleNewMessage}
            />
          </article>
        ) : (
          <div className="w-full flex justify-center items-center col-span-7">
            <p className="text-gray-500">
              No hay chat seleccionado, escoja uno para ver los mensajes
            </p>
          </div>
        )}
      </section>
    </TemplateMain>
  );
};

export default ChangeChats;
