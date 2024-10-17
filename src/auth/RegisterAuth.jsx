import { Link } from "react-router-dom";
import InputText from "../components/InputText";
import { logoApp, registerImg } from "../images";

const RegisterAuth = () => {
  return (
    <section className="p-4 before:bg-gradient-to-tr from-white to-[rgba(8,195,55,0.66)] before:w-full before:h-screen before:fixed before:top-0 before:left-0 before:-z-10 h-screen">
      <figure className="w-44">
        <img src={logoApp} alt="logo app" />
      </figure>

      <article className="w-full lg:grid lg:grid-cols-2 lg:justify-items-center mt-8">
        <div className="lg:w-[60%]">
          <h2 className="text-4xl font-semibold text-center my-5">
            Registrate
          </h2>

          <form className="grid gap-2">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
              >
                Tipo de usuario
              </label>
              <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="Persona natural">Persona natural</option>
                <option value="Fundacion">Fundación</option>
                <option value="Empresa">Empresa</option>
              </select>
            </div>
            <InputText label="Nombre" />
            <div className="grid lg:grid-cols-2 gap-4">
              <InputText label="Tipo de documento" />
              <InputText label="Número de documento" />
            </div>
            <InputText label="Telefono" />
            <InputText label="Correo" />
            <InputText label="Contraseña" />

            <button className="w-full mt-4 bg-green-500 hover:bg-green-700 duration-200 text-white font-semibold p-4 rounded">
              Registrarse
            </button>

            <p className="text-end mt-4">
              ¿Ya tienes una cuenta?{" "}
              <Link className="text-green-500 hover:underline" to="/">
                Ingresa
              </Link>
            </p>
          </form>
        </div>

        <figure className="hidden lg:flex w-full">
          <img className="w-[80%]" src={registerImg} alt="registerImg" />
        </figure>
      </article>
    </section>
  );
};

export default RegisterAuth;
