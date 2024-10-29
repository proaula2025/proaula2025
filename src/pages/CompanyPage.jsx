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
        <h1 className="text-6xl font-medium text-center uppercase pt-3 font-antonioSC tracking-wider">
          Creando un mundo más sostenible
        </h1>
        <figure>
          <img src={backCompany} alt="Back company" />
        </figure>

        <h2 className="text-2xl font-medium text-center uppercase pt-3 font-antonioSC tracking-wider">
          Un pequeño gesto, un gran cambio
        </h2>
      </div>

      <div className="flex items-center justify-center pt-5">
        <input
          className="w-[50%] h-14 bg-stone-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Buscar una fundación..."
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
            <div className="p-5 grid gap-2">
              <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                {fundacion.nombreCompleto}
              </h5>
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
                className="px-3 py-3 text-sm font-medium text-white bg-[#39c962] hover:bg-green-700 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => handleOpenModalProduct(fundacion)}
              >
                Donar ahora
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
