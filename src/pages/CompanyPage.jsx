import { useEffect, useState } from "react";
import ModalProduct from "../components/ModalProduct";
import { backCompany } from "../images";
import TemplateMain from "./../Templates/TemplateMain";
import axios from "axios";

const CompanyPage = () => {
  const [openModalProduct, setOpenModalProduct] = useState(false);
  const [listaFundaciones, setListaFundaciones] = useState([]);
  const [fundacionSeleccionada, setFundacionSeleccionada] = useState(null);

  const handleOpenModalProduct = (fundacion) => {
    if (fundacion) {
      setFundacionSeleccionada(fundacion);
    }
    setOpenModalProduct(!openModalProduct);
  };

  const obtenerFundaciones = async () => {
    try {
      const response = await axios.get(
        "http://localhost:9999/api/lista-usuarios?tipoEntidad=Fundacion"
      );

      setListaFundaciones(response.data.listaUsuario);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerFundaciones();
  }, []);

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
        {listaFundaciones.map((fundacion) => (
          <div
            className="max-w-sm bg-[#ffffff47] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            key={fundacion.idUsuario}
          >
            <a href="#">
              <img className="rounded-t-lg" src={backCompany} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {fundacion.nombreCompleto}
                </h5>
              </a>
              <p className=" font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <p className=" font-normal text-gray-700 dark:text-gray-400">
                Correo: {fundacion.email}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Telefono: {fundacion.telefono}
              </p>
              <button
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => handleOpenModalProduct(fundacion)}
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
              </button>
            </div>
          </div>
        ))}
      </div>

      {openModalProduct && (
        <ModalProduct
          isOpen={openModalProduct}
          handleOpenModalProduct={handleOpenModalProduct}
          fundacionSeleccionada={fundacionSeleccionada}
        />
      )}
    </TemplateMain>
  );
};

export default CompanyPage;
