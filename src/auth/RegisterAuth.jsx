import { Link } from "react-router-dom";
import InputText from "../components/InputText";
import { imagenNav, registerImg, userPhoto } from "../images";
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
    inputFileRef,
  } = useRegister();

  const nombreCampo =
    tipoUsuario === "Persona natural"
      ? "Nombre completo"
      : tipoUsuario === "Fundacion"
      ? "Nombre de la fundación"
      : "Nombre de la empresa";

  return (
    <section className="p-4 before:bg-[#cccccc21] grid items-center before:w-full before:h-screen before:fixed before:top-0 before:left-0 before:-z-10">
      <div className="flex justify-between items-center">
        <Link
          to="/inicio"
          className="w-44 text-lg flex gap-2 items-center text-green-500 cursor-pointer"
        >
          <svg
            className="w-6 h-6 text-gray-500"
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

        <figure className="w-44">
          <img src={imagenNav} alt="logo app" />
        </figure>
      </div>

      <article className="w-full lg:grid lg:grid-cols-2 lg:justify-items-center mt-8">
        <div className="lg:w-[70%] bg-white p-4 rounded-md shadow">
          <h2 className="text-4xl font-semibold text-center my-5">
            Registrate
          </h2>

          <form className="grid gap-2">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-xl font-medium text-gray-900"
              >
                Foto de perfil
              </label>

              <div className="flex items-center justify-center w-full">
                <figure className="relative">
                  <img
                    className="rounded-full w-52 h-52"
                    src={
                      imagenSeleccionada
                        ? URL.createObjectURL(imagenSeleccionada)
                        : userPhoto
                    }
                    alt="image description"
                  />

                  <svg
                    className="w-10 h-10 p-2 shadow-lg bg-white rounded-full text-gray-800 absolute bottom-2 right-6 cursor-pointer"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    onClick={() => {
                      inputFileRef.current.click();
                    }}
                  >
                    <path
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 18V8a1 1 0 0 1 1-1h1.5l1.707-1.707A1 1 0 0 1 8.914 5h6.172a1 1 0 0 1 .707.293L17.5 7H19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"
                    />
                    <path
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>

                  <input
                    type="file"
                    ref={inputFileRef}
                    onChange={handleFileChange}
                    accept="image/*"
                    className="hidden"
                  />
                </figure>
              </div>
            </div>
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-base font-medium text-gray-900"
              >
                Tipo de usuario
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
                  className="block mb-2 text-base font-medium text-gray-900"
                >
                  Tipo de documento
                </label>
                <select
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
