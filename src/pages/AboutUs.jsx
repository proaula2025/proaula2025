import TemplateMain from "../Templates/TemplateMain";

export const AboutUs = () => {
  return (
    <TemplateMain>
      <section className="py-2 shadow rounded-lg h-full bg-white grid gap-6">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl text-center font-semibold text-gray-800">
            Sobre Nosotros
          </h2>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed text-center">
            Somos estudiantes de sexto semestre de Desarrollo de Software en la
            Universidad de Comfenalco de Cartagena. Con esta aplicación, nuestro
            objetivo es contribuir al mundo promoviendo una economía circular
            que impulse la sostenibilidad y el aprovechamiento de los recursos.
            Creemos en un futuro más responsable y colaborativo, donde todos
            puedan ser parte de la transformación hacia un planeta más
            consciente y ecológico.
          </p>
        </div>
        <div className="mt-8 flex flex-col justify-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl text-center font-semibold text-gray-800 mb-8">
              Tecnologías que Usamos
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
              <div className="flex flex-col items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                  alt="React"
                  className="h-16 w-16"
                />
                <span className="mt-2 text-gray-700 font-medium">React</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg"
                  alt="Spring Boot"
                  className="h-16 w-16"
                />
                <span className="mt-2 text-gray-700 font-medium">
                  Spring Boot
                </span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg"
                  alt="MySQL"
                  className="h-16 w-16"
                />
                <span className="mt-2 text-gray-700 font-medium">MySQL</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                  alt="GitHub"
                  className="h-16 w-16"
                />
                <span className="mt-2 text-gray-700 font-medium">GitHub</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg"
                  alt="Git"
                  className="h-16 w-16"
                />
                <span className="mt-2 text-gray-700 font-medium">Git</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                  alt="Tailwind CSS"
                  className="h-16 w-16"
                />
                <span className="mt-2 text-gray-700 font-medium">
                  Tailwind CSS
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-3xl text-center font-semibold text-gray-800 mt-8">
              Integrantes
            </h2>
            <div className="flex justify-center py-6 gap-8 text-center">
              <div className="flex flex-col items-center">
                <img
                  src="https://avatars.githubusercontent.com/u/59531894?v=4"
                  alt="Valerin Cardenas"
                  className="h-16 w-16 rounded-full"
                />
                <span className="mt-2 text-gray-700 font-medium">
                  Valerin Cardenas
                </span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://avatars.githubusercontent.com/u/59531894?v=4"
                  alt="Sharick De Las Aguas"
                  className="h-16 w-16 rounded-full"
                />
                <span className="mt-2 text-gray-700 font-medium">
                  Sharick De Las Aguas
                </span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://avatars.githubusercontent.com/u/59531894?v=4"
                  alt="Martin Simarra"
                  className="h-16 w-16 rounded-full"
                />
                <span className="mt-2 text-gray-700 font-medium">
                  Martin Simarra
                </span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://avatars.githubusercontent.com/u/59531894?v=4"
                  alt="Camilo Salcedo"
                  className="h-16 w-16 rounded-full"
                />
                <span className="mt-2 text-gray-700 font-medium">
                  Camilo Salcedo
                </span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://avatars.githubusercontent.com/u/59531894?v=4"
                  alt="Jose Colon"
                  className="h-16 w-16 rounded-full"
                />
                <span className="mt-2 text-gray-700 font-medium">
                  Jose Colon
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </TemplateMain>
  );
};
