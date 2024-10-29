import { Link } from "react-router-dom";
import InputText from "../components/InputText";
import { logoApp, registerImg } from "../images";
import { useRegister } from "../hooks";

const RegisterAuth = () => {
  const {
    contrasena,
    correo,
    nombre,
    numeroDocumento,
    onGuardarUsuario,
    onInputChange,
    telefono,
    tipoDocumento,
    tipoUsuario,
    handleFileChange,
    imagenSeleccionada,
  } = useRegister();

  const nombreCampo =
    tipoUsuario === "Persona natural"
      ? "Nombre completo"
      : tipoUsuario === "Fundacion"
      ? "Nombre de la fundación"
      : "Nombre de la empresa";

  return (
    <section className="p-4 before:bg-[#cccccc21] grid items-center before:w-full before:h-screen before:fixed before:top-0 before:left-0 before:-z-10 h-screen">
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

      <article className="w-full lg:grid lg:grid-cols-2 lg:justify-items-center mt-8">
        <div className="lg:w-[70%] bg-white p-4 rounded-md shadow">
          <h2 className="text-4xl font-semibold text-center my-5">
            Registrate
          </h2>

          <form className="grid gap-2">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
              >
                Foto de perfil
              </label>

              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-20 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                  <div className="flex flex-col items-center justify-center">
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">
                        {imagenSeleccionada
                          ? imagenSeleccionada.name
                          : "Agrega foto de perfil"}
                      </span>
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
            </div>
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
              label={nombreCampo}
              placeholder={nombreCampo + "..."}
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
                  <option value="">Selecciona</option>
                  <option value="Cedula">Cedula</option>
                  <option value="Nit">Nit</option>
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
              <Link
                className="text-green-500 hover:underline"
                to="/auth/iniciar"
              >
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
