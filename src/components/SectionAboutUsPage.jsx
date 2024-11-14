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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
          placeat nesciunt quos voluptatem quia recusandae qui consectetur
          officiis hic, rem minima, animi consequuntur aliquid asperiores autem?
          Repellat illo esse minima! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptates, quos. Quisquam, quod. Quisquam, quod.
          Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam, quod.
          Quisquam.
        </p>
      </div>

      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-4 relative">
          <img className="rounded-2xl shadow-lg" src={fondo2} alt="Imagen 1" />

          <div className="absolute bottom-0 p-4">
            <h3 className="text-white text-2xl font-semibold">
              ¿Por qué elegirnos?
            </h3>
            <p
              className="text-gray-200 text-base"
              style={{ textShadow: "1px 1px 1px #000" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, quos. Quisquam, quod. Quisquam, quod. Quisquam, quod.
              Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam.
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
                ¿Por qué elegirnos?
              </h3>
              <p
                className="text-gray-200 text-base"
                style={{ textShadow: "1px 1px 1px #000" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, quos Quisquam, quod. Quisquam, quod. Quisquam, quod.
                Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam.
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
                ¿Por qué elegirnos?
              </h3>
              <p
                className="text-gray-200 text-base"
                style={{ textShadow: "1px 1px 1px #000" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, quos Quisquam, quod. Quisquam, quod. Quisquam, quod.
                Quisquam, quod. Quisquam, quod. Quisquam, quod. Quisquam.
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, quos. Quisquam, quod. Quisquam, quod. Quisquam,
                quod. Quisquam, quod. Quisquam, quod. Quisquam.
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};
