import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { marketplaceImagen } from "../images";

const InvitePerson = () => {
  return (
    <main className="w-[85%] m-auto grid grid-rows-[auto,1fr,auto] gap-1 h-screen before:content before:w-full before:h-screen before:fixed before:top-0 before:left-0 before:-z-10 before:bg-[#cccccc21]">
      <Navbar />

      <section className="w-full h-full p-4 grid grid-cols-2 gap-2 shadow rounded-lg ">
        <div className="flex flex-col justify-center p-8 rounded-lg ">
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

      <Footer />
    </main>
  );
};

export default InvitePerson;
