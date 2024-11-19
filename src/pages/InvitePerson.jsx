import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { marketplaceImagen } from "../images";
import { SectionAboutUsPage } from "../components/SectionAboutUsPage";
import { RatingApp } from "../components/RatingApp";
import { useEffect, useState } from "react";
import { apiUrlBackend } from "../helpers/apiUrl";
import axios from "axios";

const InvitePerson = () => {
  const navigate = useNavigate();
  const [listaComentarios, setListaComentarios] = useState([]);

  useEffect(() => {
    const getComentarios = async () => {
      try {
        const response = await axios.get(`${apiUrlBackend}/comentarios`);

        setListaComentarios(response.data.listaComentarios || []);
      } catch (error) {
        console.log(error);
      }
    };

    getComentarios();
  }, []);

  return (
    <main className="w-[85%] m-auto grid grid-rows-[auto,1fr,auto] gap-1 h-screen before:content before:w-full before:h-screen before:fixed before:top-0 before:left-0 before:-z-10 before:bg-[#cccccc21]">
      <Navbar />

      <section className="w-full h-full p-4 grid grid-cols-2 gap-2 shadow rounded-lg">
        <div className="flex flex-col justify-center p-8 rounded-lg">
          <h1 className="text-6xl font-semibold text-gray-800 mb-4">
            BIENVENIDO A MARKETPLACE
          </h1>
          <p className="text-lg text-gray-600 w-[72%] mb-10">
            Un lugar ideal para comprar, intercambiar y vender productos nuevos
            y usados. Encuentra todo lo que necesitas, desde ropa y accesorios
            hasta muebles y electrodomésticos, con la confianza que necesitas.
            Explora nuestro catálogo y encuentra lo que buscas.
          </p>
          <button
            className="w-2/3 h-12 bg-[#39c962] hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200 ease-in-out"
            type="button"
            onClick={() => navigate("/personas")}
          >
            Explorar Productos
          </button>
        </div>

        <figure>
          <img
            className="w-[90%] h-auto"
            src={marketplaceImagen}
            alt="marketplaceImagen"
          />
        </figure>
      </section>

      <SectionAboutUsPage />

      <section>
        <h2 className="text-4xl font-semibold text-gray-800 text-center my-10">
          Comentarios de nuestros usuarios
        </h2>

        <div className="flex flex-wrap gap-4 py-6 shadow-xl px-3 rounded-lg">
          {listaComentarios.map((comentario) => (
            <figure className="max-w-screen-md" key={comentario.idCommentario}>
              <div className="flex items-center mb-4 text-yellow-300">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <svg
                    key={starIndex}
                    className={`w-5 h-5 ${
                      starIndex < comentario.valoracion
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                ))}
              </div>
              <blockquote>
                <p className="text-2xl font-semibold text-gray-900">
                  {comentario.comentario}
                </p>
              </blockquote>
              <figcaption className="flex items-center mt-6 space-x-3 rtl:space-x-reverse">
                <img
                  className="w-6 h-6 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                  alt="profile picture"
                />
                <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-300">
                  <cite className="pe-3 font-medium text-gray-900">
                    {comentario.usuario.nombreCompleto}
                  </cite>
                  <cite className="ps-3 text-sm text-gray-500">
                    {comentario.usuario.tipoEntidad}
                  </cite>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <Footer />

      <RatingApp setListaComentarios={setListaComentarios} />
    </main>
  );
};

export default InvitePerson;
