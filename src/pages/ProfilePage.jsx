import { useContext, useEffect, useState } from "react";
import { productsTotal, userPhoto } from "../images";
import TemplateMain from "./../Templates/TemplateMain";
import { UserContext } from "../context/UserContext";
import { useParams } from "react-router-dom";
import axios from "axios";
import { apiUrlBackend } from "../helpers/apiUrl";
import TableReports from "../components/TableReports";
import TableReportEmpresaFundacion from "./../components/TableReportEmpresaFundacion";

const ProfilePage = () => {
  const { estaEnLinea } = useContext(UserContext);
  const { idUsuario, nombreUsuario } = useParams();
  const [usuarioEncontradoPerfil, setUsuarioEncontradoPerfil] = useState({});
  const [productosComprados, setProductosComprados] = useState([]);
  const [productosDonados, setProductosDonados] = useState([]);

  useEffect(() => {
    if (!estaEnLinea) {
      return;
    }

    const getUsuarioPerfil = async () => {
      try {
        const response = await axios.get(
          `${apiUrlBackend}/usuario/${idUsuario}/${nombreUsuario}`
        );

        setUsuarioEncontradoPerfil(response.data.usuario);
      } catch (error) {
        console.error("error", error);
      }
    };

    getUsuarioPerfil();
  }, [idUsuario, nombreUsuario, estaEnLinea]);

  useEffect(() => {
    const getProductosRelacionados = async () => {
      if (!estaEnLinea) {
        return;
      }

      try {
        let response;

        if (usuarioEncontradoPerfil.tipoEntidad === "Administrador") {
          response = await axios.get(apiUrlBackend + "/compraProductos");
          setProductosComprados(response.data.listaCompraProductos || []);
        } else if (
          usuarioEncontradoPerfil.tipoEntidad === "Fundacion" ||
          usuarioEncontradoPerfil.tipoEntidad === "Empresa"
        ) {
          response = await axios.get(
            `${apiUrlBackend}/productos/usuario/${idUsuario}`
          );

          setProductosDonados(response.data.listaproductos || []);
        } else {
          response = await axios.get(`${apiUrlBackend}/usuario/${idUsuario}`);

          setProductosComprados(response.data.listaCompraProductos || []);
        }
      } catch (error) {
        console.error("error", error);
      }
    };

    getProductosRelacionados();
  }, [idUsuario, usuarioEncontradoPerfil.tipoEntidad, estaEnLinea]);

  return (
    <TemplateMain>
      <section className="w-full relative">
        <div className="w-full h-72 top-0 bg-[#ffffffdc] absolute -z-10 rounded-t-xl shadow"></div>

        <div className="rounded-full mx-auto border-white pt-56">
          <figure className="flex gap-7 items-center pl-10">
            <img
              src={usuarioEncontradoPerfil.imageUrl || userPhoto}
              alt="user"
              className="w-52 h-52 rounded-full shadow-2xl border-4 border-white"
            />
            <figcaption>
              <h3 className="text-3xl font-semibold">
                {estaEnLinea
                  ? usuarioEncontradoPerfil?.nombreCompleto
                  : "Invitado"}
              </h3>
              <span className="text-lg font-medium text-gray-600">
                {estaEnLinea
                  ? usuarioEncontradoPerfil?.email
                  : "Anonimo@anonimo.com"}
              </span>
            </figcaption>
          </figure>

          <div className="grid grid-cols-4 gap-4 pt-10">
            <div className="w-full border-2 bg-[#ffffff47] border-stone-100 p-4 rounded-lg grid gap-4 cursor-pointer hover:transform hover:scale-95 duration-200">
              <div className="flex justify-between">
                <h2 className="text-lg font-semibold">
                  Total de productos comprados
                </h2>
                <img
                  className="w-8"
                  src={productsTotal}
                  alt="Productos totales"
                />
              </div>
              <p className="text-4xl font-bold">
                {usuarioEncontradoPerfil?.productosComprados || 0}
              </p>
            </div>
            {usuarioEncontradoPerfil.tipoEntidad === "Fundacion" && (
              <div className="w-full border-2 bg-[#ffffff47] border-stone-100 p-4 rounded-lg grid gap-4 cursor-pointer hover:transform hover:scale-95 duration-200">
                <div className="flex justify-between">
                  <h2 className="text-lg font-semibold">
                    Total de productos donados recibidos
                  </h2>
                  <img
                    className="w-8"
                    src={productsTotal}
                    alt="Productos totales"
                  />
                </div>
                <p className="text-4xl font-bold">
                  {usuarioEncontradoPerfil?.productosRecibidosFundacion || 0}
                </p>
              </div>
            )}
            {usuarioEncontradoPerfil.tipoEntidad === "Empresa" && (
              <div className="w-full border-2 bg-[#ffffff47] border-stone-100 p-4 rounded-lg grid gap-4 cursor-pointer hover:transform hover:scale-95 duration-200">
                <div className="flex justify-between">
                  <h2 className="text-lg font-semibold">
                    Total de productos donados
                  </h2>
                  <img
                    className="w-8"
                    src={productsTotal}
                    alt="Productos totales"
                  />
                </div>
                <p className="text-4xl font-bold">
                  {usuarioEncontradoPerfil?.productosDonadosEmpresa || 0}
                </p>
              </div>
            )}
            <div className="w-full border-2 bg-[#ffffff47] border-stone-100 p-4 rounded-lg grid gap-4 cursor-pointer hover:transform hover:scale-95 duration-200">
              <div className="flex justify-between">
                <h2 className="text-lg font-semibold">
                  Total de productos vendidos
                </h2>
                <img
                  className="w-8"
                  src={productsTotal}
                  alt="Productos totales"
                />
              </div>
              <p className="text-4xl font-bold">
                {usuarioEncontradoPerfil?.productosVendidos || 0}
              </p>
            </div>
            <div className="w-full border-2 bg-[#ffffff47] border-stone-100 p-4 rounded-lg grid gap-4 cursor-pointer hover:transform hover:scale-95 duration-200">
              <div className="flex justify-between">
                <h2 className="text-lg font-semibold">
                  Total de productos intercambiados
                </h2>
                <img
                  className="w-8"
                  src={productsTotal}
                  alt="Productos totales"
                />
              </div>
              <p className="text-4xl font-bold">
                {usuarioEncontradoPerfil?.productosIntercambiados || 0}
              </p>
            </div>
          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
            {usuarioEncontradoPerfil.tipoEntidad === "Administrador" ||
              (usuarioEncontradoPerfil.tipoEntidad === "Persona natural" ? (
                <TableReports registroProductos={productosComprados} />
              ) : (
                <TableReportEmpresaFundacion
                  registroProductos={productosDonados}
                  usuarioEncontradoPerfil={usuarioEncontradoPerfil}
                />
              ))}
          </div>
        </div>
      </section>
    </TemplateMain>
  );
};

export default ProfilePage;
