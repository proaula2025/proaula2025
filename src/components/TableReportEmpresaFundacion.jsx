import { userPhoto } from "../images";
import { PropTypes } from "prop-types";

const TableReportEmpresaFundacion = ({
  registroProductos,
  usuarioEncontradoPerfil,
}) => {
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
      <thead className="text-sm text-gray-700 bg-[#ffffff80] border-b">
        <tr>
          <th scope="col" className="px-6 py-3">
            Producto que compro
          </th>
          <th scope="col" className="px-6 py-3">
            {usuarioEncontradoPerfil.tipoEntidad === "Empresa"
              ? "Se lo done a"
              : "Me lo dono"}
          </th>
          <th scope="col" className="px-6 py-3">
            Contacto
          </th>
          <th scope="col" className="px-6 py-3">
            Fecha donación
          </th>
          <th scope="col" className="px-6 py-3">
            Cantidad de productos
          </th>
        </tr>
      </thead>
      <tbody>
        {registroProductos.map((producto) => (
          <tr
            className="bg-[#ffffff47] border-b hover:bg-[#ffffff80]"
            key={producto.idProducto}
          >
            <th
              scope="row"
              className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
            >
              <img
                className="w-10 h-10 rounded-full"
                src={producto.imageUrl || userPhoto}
                alt={producto.nombreProducto}
              />
              <div className="ps-3">
                <div className="text-base font-semibold">
                  {producto.nombreProducto}
                </div>
              </div>
            </th>
            <td className="px-6 py-4">
              {
                producto[
                  usuarioEncontradoPerfil.tipoEntidad === "Empresa"
                    ? "usuario"
                    : "empresaDono"
                ].nombreCompleto
              }
            </td>
            <td className="px-6 py-4">
              {
                producto[
                  usuarioEncontradoPerfil.tipoEntidad === "Empresa"
                    ? "usuario"
                    : "empresaDono"
                ].telefono
              }
            </td>
            <td className="px-6 py-4">{producto.fecha.split("T")[0]}</td>
            <td className="px-6 py-4">1 producto</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TableReportEmpresaFundacion.propTypes = {
  registroProductos: PropTypes.array.isRequired,
  usuarioEncontradoPerfil: PropTypes.object.isRequired,
};

export default TableReportEmpresaFundacion;
