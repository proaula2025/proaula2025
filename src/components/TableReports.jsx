import { userPhoto } from "../images";
import { PropTypes } from "prop-types";
import { formatearPrecioColombiano } from "./../helpers/productsHelpers";

const TableReports = ({ registroProductos }) => {
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-[#ffffff80] border-b dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            Producto que compro
          </th>
          <th scope="col" className="px-6 py-3">
            Quien lo vendio
          </th>
          <th scope="col" className="px-6 py-3">
            Contacto
          </th>
          <th scope="col" className="px-6 py-3">
            cedula
          </th>
          <th scope="col" className="px-6 py-3">
            Fecha de compra
          </th>
          <th scope="col" className="px-6 py-3">
            Cantidad de productos
          </th>
          <th scope="col" className="px-6 py-3">
            Total de la compra
          </th>
          <th scope="col" className="px-6 py-3">
            Quien lo compro
          </th>
          <th scope="col" className="px-6 py-3">
            Contacto
          </th>
          <th scope="col" className="px-6 py-3">
            cedula
          </th>
        </tr>
      </thead>
      <tbody>
        {registroProductos.map((producto) => (
          <tr
            className="bg-[#ffffff47] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-[#ffffff80] dark:hover:bg-gray-600"
            key={producto.idCompra}
          >
            <th
              scope="row"
              className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
            >
              <img
                className="w-10 h-10 rounded-full"
                src={userPhoto}
                alt="Jese image"
              />
              <div className="ps-3">
                <div className="text-base font-semibold">
                  {producto.producto.nombreProducto}
                </div>
                <div className="font-normal text-gray-500">
                  {formatearPrecioColombiano(producto.producto.precio)} pesos
                </div>
              </div>
            </th>
            <td className="px-6 py-4">
              {producto.usuarioVendio.nombreCompleto}
            </td>
            <td className="px-6 py-4">{producto.usuarioVendio.telefono}</td>
            <td className="px-6 py-4">
              {producto.usuarioVendio.numeroDocumento}
            </td>
            <td className="px-6 py-4">{producto.fechaCompra.split("T")[0]}</td>
            <td className="px-6 py-4">{producto.cantidadComprada} producto</td>
            <td className="px-6 py-4">
              {formatearPrecioColombiano(producto.totalPrecio)} pesos
            </td>
            <td className="px-6 py-4">
              {producto.usuarioCompro.nombreCompleto}
            </td>
            <td className="px-6 py-4">{producto.usuarioCompro.telefono}</td>
            <td className="px-6 py-4">
              {producto.usuarioCompro.numeroDocumento}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TableReports.propTypes = {
  registroProductos: PropTypes.array.isRequired,
};

export default TableReports;
