import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { userPhoto } from "../images";
import { UserContext } from "../context/UserContext";

export const NavbarUser = () => {
  const { usuarioEnLinea, cerrarSesion } = useContext(UserContext);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const goToProfile = `/${usuarioEnLinea.idUsuario}/${usuarioEnLinea.nombreCompleto}`;
  const goToHome =
    usuarioEnLinea.tipoEntidad === "Empresa"
      ? "/empresas"
      : usuarioEnLinea.tipoEntidad === "Fundacion"
      ? "/fundaciones"
      : "/personas";

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center text-sm pe-1 font-medium text-gray-900 rounded-full hover:text-green-600 md:me-0 focus:ring-4 focus:ring-gray-100"
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="w-8 h-8 me-2 rounded-full object-cover"
          src={usuarioEnLinea.imageUrl || userPhoto}
          alt="user photo"
        />
        {usuarioEnLinea.nombreCompleto}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        className={`z-10 transition-opacity duration-200 ${
          dropdownVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute right-0 top-12`}
      >
        <div className="px-4 py-3 text-sm text-gray-900">
          <div className="font-medium">{usuarioEnLinea.nombreCompleto}</div>
          <div className="truncate">{usuarioEnLinea.email}</div>
        </div>
        <ul className="py-2 text-sm text-gray-700">
          <li>
            <Link to="/inicio" className="block px-4 py-2 hover:bg-gray-100">
              Inicio
            </Link>
          </li>
          <li>
            <Link to={goToHome} className="block px-4 py-2 hover:bg-gray-100">
              Pantalla
            </Link>
          </li>
          <li>
            <Link
              to={goToProfile}
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Perfil
            </Link>
          </li>
        </ul>
        <div className="py-2">
          <button
            className="w-full text-start px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
            onClick={cerrarSesion}
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
};
