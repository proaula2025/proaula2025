import { userPhoto } from "../images";
import TemplateMain from "../Templates/TemplateMain";

const AdminPage = () => {
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
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-[#ffffff80] border-b dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Position
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#ffffff47] border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-[#ffffff80] dark:hover:bg-gray-600">
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
                      <div className="text-base font-semibold">Neil Sims</div>
                      <div className="font-normal text-gray-500">
                        neil.sims@flowbite.com
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4">React Developer</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
                      Online
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Info usuario
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </TemplateMain>
  );
};

export default AdminPage;
