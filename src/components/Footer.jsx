import { imagenNav } from "../images";

const Footer = () => {
  return (
    <footer className="rounded-lg shadow dark:bg-gray-900 bg-white mt-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img className="w-36 h-auto" src={imagenNav} alt="Logo nav" />
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Inicio
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Sobre nosotros
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Servicios
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contanctos
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Marketplace™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
