import { useEffect, useMemo, useState } from "react";
import ModalProduct from "../components/ModalProduct";
import { backCompany, fondo1, fondo2, fondo3, fondo4 } from "../images";
import TemplateMain from "./../Templates/TemplateMain";
import axios from "axios";
import { getFundationByName } from "../helpers/searchFundation";

const CompanyPage = () => {
  const [openModalProduct, setOpenModalProduct] = useState(false);
  const [listaFundaciones, setListaFundaciones] = useState([]);
  const [fundacionSeleccionada, setFundacionSeleccionada] = useState(null);
  const [searchFundation, setSearchFundation] = useState("");

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

      if (!response.data.listaUsuario) {
        return;
      }

      setListaFundaciones(response.data.listaUsuario);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerFundaciones();
  }, []);

  const listaFundacionesFiltradas = useMemo(() => {
    return getFundationByName(listaFundaciones, searchFundation);
  }, [searchFundation, listaFundaciones]);

  return (
    <TemplateMain>
      <section className="grid grid-cols-2 gap-6 p-5 bg-white shadow rounded-lg">
        <article>
          <div className="grid gap-4">
            <span className="text-lg font-medium text-green-500">
              Nuestra lema
            </span>
            <h2 className="text-5xl font-medium">
              Creando un mundo más sostenible
            </h2>

            <p className="text-lg text-[#374151]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              eveniet fuga natus quod expedita! Voluptas repellat nam soluta
              aliquid qui, neque totam. Quos praesentium molestias sequi omnis
              numquam eius quod.
            </p>
          </div>

          <div className="pt-10 grid gap-6">
            <h3 className="text-2xl font-medium text-black">Nuestra misión</h3>

            <p className="text-lg text-[#374151]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              eveniet fuga natus quod expedita! Voluptas repellat nam soluta
              aliquid qui, neque totam. Quos praesentium molestias sequi omnis
              numquam eius quod, quibusdam, quia, voluptates quae. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. <br />
              <br /> Delectus eveniet fuga natus quod expedita! Voluptas
              repellat nam soluta aliquid qui, neque totam. Quos praesentium
              molestias sequi omnis numquam eius quod, quibusdam, quia,
              voluptates quae.
            </p>

            <div className="grid gap-4">
              <h3 className="text-2xl font-medium text-[#374151] border-b pb-6">
                Un pequeño gesto, un gran cambio
              </h3>

              <div className="grid grid-cols-2 gap-6">
                <div className="border-b pb-6 grid gap-3">
                  <h2 className="text-6xl font-bold text-gray-800">50</h2>
                  <span className="text-lg text-[#374151]">Donaciones</span>
                </div>
                <div className="border-b pb-6 grid gap-3">
                  <h2 className="text-6xl font-bold text-gray-800">30</h2>
                  <span className="text-lg text-[#374151]">Empresas</span>
                </div>
                <div className="border-b pb-6 grid gap-3">
                  <h2 className="text-6xl font-bold text-gray-800">10</h2>
                  <span className="text-lg text-[#374151]">Proyectos</span>
                </div>
                <div className="border-b pb-6 grid gap-3">
                  <h2 className="text-6xl font-bold text-gray-800">100</h2>
                  <span className="text-lg text-[#374151]">Productos</span>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="h-full flex items-center">
          <div className="grid grid-cols-2 gap-8">
            <div className="pt-52 grid gap-6">
              <img className="rounded-2xl shadow-xl" src={fondo1} alt="" />
              <img className="rounded-2xl shadow-xl" src={fondo2} alt="" />
            </div>

            <div className="flex flex-col gap-6">
              <img className="rounded-2xl shadow-xl" src={fondo3} alt="" />
              <img className="rounded-2xl shadow-xl" src={fondo4} alt="" />
            </div>
          </div>
        </article>

        <article className="col-span-2 pt-20">
          <h2 className="text-4xl font-medium text-center pt-3">
            Encuentra una empresa
          </h2>

          <div className="flex items-center justify-center pt-5">
            <input
              className="w-[50%] h-14 bg-stone-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
              placeholder="Buscar una fundación..."
              type="text"
              value={searchFundation}
              onChange={(e) => setSearchFundation(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-4 pt-10">
            {listaFundacionesFiltradas.map((fundation) => (
              <div
                className="max-w-sm bg-[#ffffff47] border border-gray-200 rounded-lg shadow"
                key={fundation.idUsuario}
              >
                <a href="#">
                  <img
                    className="rounded-t-lg"
                    src={fundation.imageUrl || backCompany}
                    alt={fundation.nombreCompleto}
                  />
                </a>
                <div className="p-5 grid gap-2">
                  <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900">
                    {fundation.nombreCompleto}
                  </h5>
                  <p className=" font-normal text-gray-700">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <p className=" font-normal text-gray-700">
                    Correo: {fundation.email}
                  </p>
                  <p className="mb-3 font-normal text-gray-700">
                    Telefono: {fundation.telefono}
                  </p>
                  <button
                    className="px-3 py-3 text-sm font-medium text-white bg-[#39c962] hover:bg-green-700 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300"
                    onClick={() => handleOpenModalProduct(fundation)}
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
              mensajeGuardado="Tu donación fue exitosa, la fundación recibirá la notificación de su pedido y recogerá el producto tan pronto como pueda."
            />
          )}
        </article>
      </section>
    </TemplateMain>
  );
};

export default CompanyPage;
