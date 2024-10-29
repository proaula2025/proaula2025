import { Link } from "react-router-dom";
import { logoApp, registerImg } from "../images";
import InputText from "./../components/InputText";
import { useLogin } from "./../hooks";

const LoginAuth = () => {
  const { formState, onIniciarSesion, onInputChange } = useLogin();

  return (
    <section className="p-4 before:bg-[#cccccc21] before:w-full before:h-screen before:fixed before:top-0 before:left-0 before:-z-10 h-screen flex items-center">
      <figure className="w-44 absolute top-4 right-6">
        <img src={logoApp} alt="logo app" />
      </figure>

      <Link
        to="/inicio"
        className="w-44 absolute top-4 left-6 text-lg flex gap-2 items-center text-green-500 cursor-pointer"
      >
        <svg
          className="w-6 h-6 text-gray-500 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 12h14M5 12l4-4m-4 4 4 4"
          />
        </svg>

        <p>Volver</p>
      </Link>

      <article className="w-full lg:grid lg:grid-cols-2 lg:justify-items-center lg:items-center">
        <div className="lg:w-[55%] h-max lg:flex lg:flex-col lg:justify-center bg-white p-4 rounded-md shadow">
          <h2 className="text-4xl font-semibold text-center my-5">
            Inicia sesión
          </h2>

          <form className="grid gap-2">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
              >
                Tipo de usuario
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="tipoUsuario"
                value={formState.tipoUsuario}
                onChange={onInputChange}
              >
                <option value="Persona natural">Persona natural</option>
                <option value="Fundacion">Fundación</option>
                <option value="Empresa">Empresa</option>
              </select>
            </div>

            <InputText
              label="Correo"
              placeholder="Correo..."
              idLabel="correo"
              typeInput="email"
              name="correo"
              value={formState.correo}
              onChange={onInputChange}
            />
            <InputText
              label="Contraseña"
              placeholder="Contraseña..."
              idLabel="contrasena"
              typeInput="password"
              name="contrasena"
              value={formState.contrasena}
              onChange={onInputChange}
            />

            <button
              className="w-full mt-4 bg-green-500 hover:bg-green-700 duration-200 text-white font-semibold p-4 rounded"
              onClick={onIniciarSesion}
            >
              Iniciar sesión
            </button>

            <p className="text-end mt-4">
              ¿No tienes una cuenta?{" "}
              <Link
                className="text-green-500 hover:underline"
                to="/auth/registrarse"
              >
                Registrate
              </Link>
            </p>
          </form>
        </div>

        <figure className="hidden lg:flex w-full">
          <img className="w-[80%]" src={registerImg} alt="Register img" />
        </figure>
      </article>
    </section>
  );
};

export default LoginAuth;
