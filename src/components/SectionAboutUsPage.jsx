import { useNavigate } from "react-router-dom";
import { fondo2, fondo3, fondo4, fondo5 } from "../images";

export const SectionAboutUsPage = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full my-5 p-24 bg-white rounded-lg shadow-md grid gap-20">
      <div className="grid grid-cols-2 gap-40">
        <div className="grid gap-6">
          <span className="text-green-500 text-base">Sobre nosotros</span>
          <h2 className="text-5xl font-semibold text-gray-800 mb-4">
            Marketplaces, haz de este mundo un lugar mejor para todos
          </h2>

          <button
            className="w-max h-12 bg-[#39c962] hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200 ease-in-out"
            type="button"
            onClick={() => navigate("/sobre-nosotros")}
          >
            Conocer más
          </button>
        </div>

        <p className="text-gray-600 text-lg w-[90%] text-justify">
          Reciclar es clave para reducir residuos, conservar recursos naturales
          y combatir el cambio climático. La economía circular prolonga la vida
          útil de materiales, minimizando desechos y promoviendo un consumo
          sostenible. Donar o intercambiar productos evita el desperdicio,
          fomenta la reutilización y fortalece comunidades, reduciendo la
          demanda de nuevos recursos y la huella ambiental.
        </p>
      </div>

      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-4 relative">
          <img className="rounded-2xl shadow-lg" src={fondo2} alt="Imagen 1" />

          <div className="absolute bottom-0 p-4">
            <h3 className="text-white text-2xl font-semibold">
              ¿Por qué es importante reciclar?
            </h3>
            <p
              className="text-gray-200 text-base"
              style={{ textShadow: "1px 1px 1px #000" }}
            >
              Reciclar reduce el impacto ambiental al disminuir la cantidad de
              residuos que terminan en vertederos y océanos. Ayuda a conservar
              recursos naturales, como madera, agua y minerales, y reduce la
              necesidad de extraer materias primas. Además, el reciclaje
              disminuye las emisiones de gases de efecto invernadero,
              contribuyendo a combatir el cambio climático.
            </p>
          </div>
        </div>

        <div className="grid grid-rows-2 col-span-2">
          <div className="w-full relative">
            <img
              className="w-[100%] rounded-2xl shadow-lg"
              src={fondo3}
              alt=""
            />
            <div className="absolute bottom-0 p-4">
              <h3 className="text-white text-2xl font-semibold">
                ¿Qué es la economía circular y por qué es esencial?
              </h3>
              <p
                className="text-white text-base"
                style={{ textShadow: "1px 1px 1px #000" }}
              >
                La economía circular es un modelo que busca mantener los
                recursos en uso durante el mayor tiempo posible, extrayendo su
                máximo valor. Se enfoca en reparar, reutilizar y reciclar en
                lugar de desechar.
              </p>
            </div>
          </div>
          <div className="w-full relative">
            <img
              className="w-full rounded-2xl shadow-lg relative"
              src={fondo4}
              alt=""
            />
            <div className="absolute bottom-0 p-4">
              <h3 className="text-white text-2xl font-semibold">
                ¿Qué beneficios tiene donar o intercambiar productos?
              </h3>
              <p
                className="text-gray-200 text-base"
                style={{ textShadow: "1px 1px 1px #000" }}
              >
                Donar o intercambiar productos fomenta la reutilización,
                evitando que objetos útiles se conviertan en residuos. Permite
                que otros puedan aprovechar lo que ya no usamos, reduciendo la
                demanda de nuevos recursos.
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-full col-span-6">
          <figure className="w-full relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <img
              className="w-full rounded-lg"
              src={fondo5}
              alt="image description"
            />
            <figcaption className="absolute px-4 text-lg text-white bottom-6">
              <p>
                Reciclar es clave para reducir residuos, conservar recursos
                naturales y combatir el cambio climático. La economía circular
                prolonga la vida útil de materiales, minimizando desechos y
                promoviendo un consumo sostenible. Donar o intercambiar
                productos evita el desperdicio, fomenta la reutilización y
                fortalece comunidades, reduciendo la demanda de nuevos recursos
                y la huella ambiental.
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};
