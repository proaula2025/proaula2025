import { useContext } from "react";
import { imagenNav } from "../images";
import { UserContext } from "./../context/UserContext";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const { estaEnLinea, cerrarSesion, usuarioEnLinea } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  const isActiveLink = (path) =>
    location.pathname === path ? "text-[#39c962] font-bold" : "text-gray-400";

  return (
    <nav className="relative px-4 py-4 flex justify-between items-center bg-white border-b">
      <Link className="font-bold leading-none cursor-pointer" to="/inicio">
        <img className="w-32 h-auto" src={imagenNav} alt="Logo nav" />
      </Link>
      <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
        <li>
          <Link
            className={`text-sm hover:text-gray-500 ${isActiveLink("/inicio")}`}
            to="/inicio"
          >
            Inicio
          </Link>
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
          <Link
            className={`text-sm hover:text-gray-500 ${isActiveLink(
              "/sobre-nosotros"
            )}`}
            to="/sobre-nosotros"
          >
            Sobre nosotros
          </Link>
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
        {usuarioEnLinea.tipoEntidad !== "Empresa" &&
          usuarioEnLinea.tipoEntidad !== "Fundacion" && (
            <li>
              <Link
                className={`text-sm hover:text-gray-500 ${isActiveLink(
                  "/personas"
                )}`}
                to="/personas"
              >
                Servicios
              </Link>
            </li>
          )}
        {usuarioEnLinea.tipoEntidad === "Fundacion" && (
          <li>
            <Link
              className={`text-sm hover:text-gray-500 ${isActiveLink(
                "/fundaciones"
              )}`}
              to="/fundaciones"
            >
              Donaciones
            </Link>
          </li>
        )}
        {usuarioEnLinea.tipoEntidad === "Empresa" && (
          <li>
            <Link
              className={`text-sm hover:text-gray-500 ${isActiveLink(
                "/empresas"
              )}`}
              to="/empresas"
            >
              Empresas
            </Link>
          </li>
        )}
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
          <Link
            className={`text-sm hover:text-gray-500 ${isActiveLink(
              "/contactanos"
            )}`}
            to="/contactanos"
          >
            Contactanos
          </Link>
        </li>
      </ul>

      {!estaEnLinea && (
        <>
          <button
            className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-xl transition duration-200"
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
