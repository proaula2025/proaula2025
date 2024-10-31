import { useContext, useEffect, useState } from "react";
import TemplateMain from "../Templates/TemplateMain";
import { ReportProductsContext } from "./../context/ReportProductsContext";
import axios from "axios";
import { apiUrlBackend } from "../helpers/apiUrl";
import TableUsers from "../components/TableUsers";
import TableReports from "./../components/TableReports";

const AdminPage = () => {
  const { registroProductos } = useContext(ReportProductsContext);
  const [usuarios, setUsuarios] = useState([]);
  const [showUsers, setShowUsers] = useState(true); // State to track which table to show

  useEffect(() => {
    const getTodosUsuarios = async () => {
      try {
        const response = await axios.get(apiUrlBackend + "/todos-usuarios");
        setUsuarios(response.data.listaUsuario);
      } catch (error) {
        console.log(error);
      }
    };

    getTodosUsuarios();
  }, []);

  const toggleTable = () => {
    setShowUsers(!showUsers); // Toggle the table view
  };

  console.log({
    usuarios,
    registroProductos,
  });

  return (
    <TemplateMain>
      <section>
        <div className="flex flex-col items-center justify-center py-10 gap-2">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
            Dashboard administrativo
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-400">
            Esta es la página de administración. Puede ver la actividad de los
            usuarios en la plataforma.
          </p>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4">
            <button
              className={`${
                showUsers
                  ? "bg-green-500 hover:bg-green-700"
                  : "bg-gray-300 hover:bg-gray-500"
              } text-white font-bold py-2 px-4 rounded`}
              onClick={toggleTable}
            >
              Usuarios
            </button>
            <button
              className={`${
                !showUsers
                  ? "bg-green-500 hover:bg-green-700"
                  : "bg-gray-300 hover:bg-gray-500"
              } text-white font-bold py-2 px-4 rounded`}
              onClick={toggleTable}
            >
              Registros
            </button>
          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-h-[40rem]">
            {showUsers ? (
              <TableUsers usuarios={usuarios} />
            ) : (
              <TableReports registroProductos={registroProductos} />
            )}
          </div>
        </div>
      </section>
    </TemplateMain>
  );
};

export default AdminPage;
