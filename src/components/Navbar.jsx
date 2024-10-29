import { useContext } from "react";
import { imagenNav } from "../images";
import { UserContext } from "./../context/UserContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { usuarioEnLinea, estaEnLinea, cerrarSesion } = useContext(UserContext);

  const navigate = useNavigate();

  return (
    <nav className="relative px-4 py-4 flex justify-between items-center bg-white border-b">
      <a className="font-bold leading-none cursor-pointer">
        <img className="w-32 h-auto" src={imagenNav} alt="Logo nav" />
      </a>
      <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2  lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
        <li>
          <a
            className="text-sm text-[#39c962] font-bold hover:text-gray-500"
            href="#"
          >
            Inicio
          </a>
        </li>
        <li className="text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            className="w-4 h-4 current-fill"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </li>
        <li>
          <a className="text-sm text-gray-400" href="#">
            Sobre nosotros
          </a>
        </li>
        <li className="text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            className="w-4 h-4 current-fill"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </li>
        <li>
          <a className="text-sm text-gray-400 hover:text-gray-500" href="#">
            Servicios
          </a>
        </li>
        <li className="text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            className="w-4 h-4 current-fill"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </li>
        <li>
          <a className="text-sm text-gray-400 hover:text-gray-500" href="#">
            Contanctos
          </a>
        </li>
      </ul>

      {!estaEnLinea && (
        <>
          <button
            className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
            onClick={() => navigate("/auth/iniciar")}
          >
            Ingresa
          </button>
          <button
            className="hidden lg:inline-block py-2 px-6 bg-[#39c962] hover:bg-green-600 text-sm text-white font-bold rounded-xl transition duration-200"
            onClick={() => navigate("/auth/registrarse")}
          >
            Registrate
          </button>
        </>
      )}

      {estaEnLinea && (
        <button
          className="hidden lg:inline-block py-2 px-6 bg-[#39c962] hover:bg-green-600 text-sm text-white font-bold rounded-xl transition duration-200"
          onClick={cerrarSesion}
        >
          Cerrar sesión
        </button>
      )}
    </nav>
  );
};

export default Navbar;
