import { userPhoto } from "../images";
import TemplateMain from "../Templates/TemplateMain";

export const AboutUs = () => {
  return (
    <TemplateMain>
      <section className="py-20 shadow rounded-lg h-full bg-white grid gap-6">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl text-center font-semibold text-gray-800">
            Sobre Nosotros
          </h2>
          <p className="mt-8 text-gray-600 text-lg leading-relaxed text-center">
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
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-12 text-center">
              <div className="flex flex-col items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                  alt="React"
                  className="h-24 w-24"
                />
                <span className="mt-2 text-gray-700 font-medium">React</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg"
                  alt="Spring Boot"
                  className="h-24 w-24"
                />
                <span className="mt-2 text-gray-700 font-medium">
                  Spring Boot
                </span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg"
                  alt="MySQL"
                  className="h-24 w-24"
                />
                <span className="mt-2 text-gray-700 font-medium">MySQL</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                  alt="GitHub"
                  className="h-24 w-24"
                />
                <span className="mt-2 text-gray-700 font-medium">GitHub</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg"
                  alt="Git"
                  className="h-24 w-24"
                />
                <span className="mt-2 text-gray-700 font-medium">Git</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                  alt="Tailwind CSS"
                  className="h-24 w-24"
                />
                <span className="mt-2 text-gray-700 font-medium">
                  Tailwind CSS
                </span>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-7xl pt-32 px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="font-manrope text-5xl text-center font-bold text-gray-900 ">
                Our team
              </h2>
            </div>
            <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-6 lg:grid-cols-5 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
              <div className="block group md:col-span-2 lg:col-span-1 ">
                <div className="relative mb-6">
                  <img
                    src="https://scontent.fbaq2-2.fna.fbcdn.net/v/t1.6435-9/70688905_2779769435418764_6877981484175589376_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFzmDPhJlFDC2DakzO1zGGjhbEkjef7YZaFsSSN5_thlhEfPVpPFkKAzZKzCPhmFdY8arCbbioVmmM4GpD_A8Vj&_nc_ohc=pkMGLZMNI7EQ7kNvgGynulR&_nc_zt=23&_nc_ht=scontent.fbaq2-2.fna&_nc_gid=AXRhKfKSZ-whLMcmfSzI4ZH&oh=00_AYDUnc9abQ9ND0LfZ4tp4iCfDjLed-HTZxthCFnLzVlW0Q&oe=675E470F"
                    alt="Antonio image"
                    className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-green-500"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-green-500">
                  Valerin Cardenas
                </h4>
                <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                  - Jefa de Proyecto <br /> - Desarrollador de bases de datos
                </span>
              </div>
              <div className="block group md:col-span-2 lg:col-span-1 ">
                <div className="relative mb-6">
                  <img
                    src="https://scontent.fbaq2-2.fna.fbcdn.net/v/t39.30808-6/454702489_18036104717491432_7203254074014486671_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHG1cVRyOQFIjvCmhzSNfrCTUay7wXpVr5NRrLvBelWvu5eykXBEQHX21wMSkyJjoJKMRl-zarkLitQNll_p4Fe&_nc_ohc=HRaCF0Kc9oMQ7kNvgGzW12m&_nc_zt=23&_nc_ht=scontent.fbaq2-2.fna&_nc_gid=AMo4VgNEYXyK4GzCfdhav08&oh=00_AYA96-a17lyjcTuqERIecKW9RCDjnvCh1SAgPS0sAuUzvQ&oe=673C9031"
                    alt="Patricia image"
                    className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-green-500"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-green-500">
                  Sharick De Las Aguas
                </h4>
                <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                  - Diseñadora grafica <br />- Desarrollador de bases de datos
                </span>
              </div>
              <div className="group group md:col-span-2 lg:col-span-1">
                <div className="relative mb-6">
                  <img
                    src="https://scontent.fbaq2-2.fna.fbcdn.net/v/t39.30808-6/319281705_5698570330232891_8027698949381597004_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEm1RsdAr-gH67HdUQeP273maH38IkwIheZoffwiTAiF5VHnFCw9JybcOevEOCjwvuX_d2rH5jiKJrKU4n_N_AT&_nc_ohc=PsReLUe5jqMQ7kNvgHfkaH0&_nc_zt=23&_nc_ht=scontent.fbaq2-2.fna&_nc_gid=AH7PaxKH_HDcxhEU2UxfCu9&oh=00_AYCnumLpClwzkimaYR6c112ueP6XS33IElbFfRe7xyAIMA&oe=673CA73F"
                    alt="Jerom image"
                    className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-green-500"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-green-500">
                  Jose Colon
                </h4>
                <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                  - Desarrollador Backend <br />- Desarrollador de bases de
                  datos
                </span>
              </div>
              <div className="block group md:col-span-2 lg:col-span-1 md:col-start-2 lg:col-start-4">
                <div className="relative mb-6">
                  <img
                    src="https://scontent.fbaq2-2.fna.fbcdn.net/v/t1.6435-9/120325087_2736888856547343_8840731980571149901_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeF5T_4r1NyXNT8CcUiz6L3DSWCdOoDFV4xJYJ06gMVXjOMlhEIEOQe3pwq9BNNsJHwP_SIJmwOiRkQ8964jviTB&_nc_ohc=Sdv_HkI8vLoQ7kNvgFToa7c&_nc_zt=23&_nc_ht=scontent.fbaq2-2.fna&_nc_gid=AVXs6btS1wXMxshe-M0_3c7&oh=00_AYB0oyIMhZbcsWYmTX6k6-ecMX64XKRfn0Db87ysqXhZxA&oe=675E3571"
                    alt="Yasmine image"
                    className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-green-500"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-green-500">
                  Camilo Salcedo
                </h4>
                <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                  - Desarrollador Backend <br />- Desarrollador de bases de
                  datos
                </span>
              </div>
              <div className="block group min-[500px]:col-span-2 mx-auto md:col-span-2 lg:col-span-1 ">
                <div className="relative mb-6">
                  <img
                    src="https://scontent.fbaq2-2.fna.fbcdn.net/v/t39.30808-6/275683410_2203568849783776_8921314690219511393_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHB9ol9ZyEes7Fv5GFzaIXZg8oNnLb32fGDyg2ctvfZ8Wue380JohrxFn7nUgkJTzG3BnyNwl_o3RHu7PAFlhpb&_nc_ohc=Dg5f8FqPPzwQ7kNvgF6KY0a&_nc_zt=23&_nc_ht=scontent.fbaq2-2.fna&_nc_gid=AXvgzu5UF6oCdTsg7XVyVmh&oh=00_AYBuVIMxmu46-f0rbx2Y0U42Zco_9xf4K3ouQdtNdw43Zw&oe=673CA221"
                    alt="Martin image"
                    className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-green-500"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-green-500">
                  Martin Simarra
                </h4>
                <span className="text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                  - Programador Full Stack <br /> - Desarrollador de bases de
                  datos
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </TemplateMain>
  );
};
