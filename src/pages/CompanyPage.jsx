import { useState } from "react";
import ModalProduct from "../components/ModalProduct";
import { backCompany } from "../images";
import TemplateMain from "./../Templates/TemplateMain";

const CompanyPage = () => {
  const [openModalProduct, setOpenModalProduct] = useState(false);

  const handleOpenModalProduct = () => {
    setOpenModalProduct(!openModalProduct);
  };

  return (
    <TemplateMain>
      <div className="w-full flex flex-col items-center justify-center">
        <figure>
          <img src={backCompany} alt="Back company" />
        </figure>

        <h1 className="text-6xl font-medium text-center uppercase pt-3 font-antonioSC tracking-wider">
          Creando un mundo más sostenible
        </h1>
        <h2 className="text-2xl font-medium text-center uppercase pt-3 font-antonioSC tracking-wider">
          Un pequeño gesto, un gran cambio
        </h2>
      </div>

      <div className="flex items-center justify-center pt-5">
        <input
          className="w-[50%] h-16 rounded-full bg-transparent border-2 border-black p-4 font-normal"
          placeholder="Buscar una fundación"
        />
      </div>

      <div className="flex items-center gap-4 pt-10">
        <div className="max-w-sm bg-[#ffffff47] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src={backCompany} alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Donar ahora
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <ModalProduct
        isOpen={openModalProduct}
        handleOpenModalProduct={handleOpenModalProduct}
      />
    </TemplateMain>
  );
};

export default CompanyPage;
