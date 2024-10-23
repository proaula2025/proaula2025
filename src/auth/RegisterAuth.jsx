import { Link } from "react-router-dom";
import InputText from "../components/InputText";
import { logoApp, registerImg } from "../images";
import { useForm } from "./../hooks/useForm";

const RegisterAuth = () => {
  const {
    tipoUsuario,
    nombre,
    tipoDocumento,
    numeroDocumento,
    telefono,
    correo,
    contrasena,
    onInputChange,
  } = useForm({
    tipoUsuario: "",
    nombre: "",
    tipoDocumento: "",
    numeroDocumento: "",
    telefono: "",
    correo: "",
    contrasena: "",
  });

  const onGuardarUsuario = (e) => {
    e.preventDefault();
    try {
      console.log(
        `Tipo de usuario: ${tipoUsuario}, Nombre: ${nombre}, Tipo de documento: ${tipoDocumento}, Numero de documento: ${numeroDocumento}, Telefono: ${telefono}, Correo: ${correo}, Contraseña: ${contrasena}`
      );
    } catch (error) {
      console.log(error);
    }
  };

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
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="tipoUsuario"
                value={tipoUsuario}
                onChange={onInputChange}
              >
                <option value="Persona natural">Persona natural</option>
                <option value="Fundacion">Fundación</option>
                <option value="Empresa">Empresa</option>
              </select>
            </div>
            <InputText
              label="Nombre"
              placeholder="Nombre..."
              idLabel="nombre"
              typeInput="text"
              name="nombre"
              value={nombre}
              onChange={onInputChange}
            />
            <div className="grid lg:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="tipoDocumento"
                  className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
                >
                  Tipo de documento
                </label>
                <select
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="tipoDocumento"
                  id="tipoDocumento"
                  value={tipoDocumento}
                  onChange={onInputChange}
                >
                  <option value="Persona natural">Selecciona</option>
                  <option value="Fundacion">Cedula</option>
                  <option value="Empresa">Nit</option>
                </select>
              </div>
              <InputText
                label="Número de documento"
                placeholder="Número de documento..."
                idLabel="numeroDocumento"
                typeInput="number"
                name="numeroDocumento"
                value={numeroDocumento}
                onChange={onInputChange}
              />
            </div>
            <InputText
              label="Telefono"
              placeholder="Telefono..."
              idLabel="telefono"
              typeInput="number"
              name="telefono"
              value={telefono}
              onChange={onInputChange}
            />
            <InputText
              label="Correo"
              placeholder="Correo..."
              idLabel="correo"
              typeInput="email"
              name="correo"
              value={correo}
              onChange={onInputChange}
            />
            <InputText
              label="Contraseña"
              placeholder="Contraseña..."
              idLabel="contrasena"
              typeInput="password"
              name="contrasena"
              value={contrasena}
              onChange={onInputChange}
            />

            <button
              className="w-full mt-4 bg-green-500 hover:bg-green-700 duration-200 text-white font-semibold p-4 rounded"
              onClick={onGuardarUsuario}
            >
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
