import TemplateMain from "../Templates/TemplateMain";
import InputText from "../components/InputText";

export const ContactUs = () => {
  return (
    <TemplateMain>
      <section className="grid gap-10 pb-6 shadow rounded-lg">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl text-center font-bold text-gray-800">
            Contacta con nuestro equipo
          </h1>

          <p className="w-2/3 text-gray-600 text-lg leading-relaxed text-center">
            Si tienes alguna pregunta o sugerencia, no dudes en contactarnos.
            Estamos aquí para ayudarte y responder a tus inquietudes, así que no
            dudes en escribirnos un mensaje y te responderemos lo antes posible.
          </p>
        </div>

        <article
          className="
        w-[60%] m-auto"
        >
          <form className="w-full grid gap-4">
            <div className="grid grid-cols-2 gap-3">
              <InputText label="Nombre" placeholder="Nombre..." />
              <InputText label="Apellido" placeholder="Apellido..." />
            </div>
            <InputText label="Correo" placeholder="Correo..." />
            <InputText label="Telefono" placeholder="Telefono..." />
            <div>
              <label
                htmlFor="reason"
                className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
              >
                Razón del mensaje
              </label>
              <select
                name="reason"
                id="reason"
                className="bg-stone-100 border border-gray-300 duration-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
              >
                <option value="question">Pregunta</option>
                <option value="suggestion">Sugerencia</option>
                <option value="complaint">Queja</option>
                <option value="complaint">Otro</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
              >
                Mensaje
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Escribe tu mensaje aquí..."
                className="resize-none bg-stone-100 border border-gray-300 duration-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 duration-300 text-white font-bold py-3 px-4 rounded-lg mt-4"
            >
              Enviar mensaje
            </button>
          </form>
        </article>
      </section>
    </TemplateMain>
  );
};
