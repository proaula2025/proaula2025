import { userPhoto } from "../images";
import { PropTypes } from "prop-types";

const TableUsers = ({ usuarios }) => {
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
      <thead className="text-xs text-gray-700 uppercase bg-[#ffffff80] border-b">
        <tr>
          <th scope="col" className="px-6 py-3">
            Nombre
          </th>
          <th scope="col" className="px-6 py-3">
            Correo
          </th>
          <th scope="col" className="px-6 py-3">
            Tipo de cedula
          </th>
          <th scope="col" className="px-6 py-3">
            Cedula
          </th>
          <th scope="col" className="px-6 py-3">
            Telefono
          </th>
          <th scope="col" className="px-6 py-3">
            Tipo de usuario
          </th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map((usuario) => (
          <tr
            className="bg-[#ffffff47] border-b hover:bg-[#ffffff80]"
            key={usuario.idUsuario}
          >
            <th
              scope="row"
              className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
            >
              <img
                className="w-10 h-10 rounded-full"
                src={userPhoto}
                alt="Jese image"
              />
              <div className="ps-3">
                <div className="text-base font-semibold">
                  {usuario.nombreCompleto}
                </div>
                <div className="font-normal text-gray-500">{usuario.email}</div>
              </div>
            </th>
            <td className="px-6 py-4">{usuario.email}</td>
            <td className="px-6 py-4">{usuario.tipoDocumento}</td>
            <td className="px-6 py-4">{usuario.numeroDocumento}</td>
            <td className="px-6 py-4">{usuario.telefono}</td>
            <td className="px-6 py-4">{usuario.tipoEntidad}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TableUsers.propTypes = {
  usuarios: PropTypes.array.isRequired,
};

export default TableUsers;
