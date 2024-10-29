import { productsTotal, userPhoto } from "../images";
import TemplateMain from "./../Templates/TemplateMain";

const ProfilePage = () => {
  return (
    <TemplateMain>
      <section className="w-full relative">
        <div className="w-full h-72 top-0 bg-[#ffffffdc] absolute -z-10 rounded-t-xl shadow"></div>

        <div className="rounded-full mx-auto border-white pt-56 pl-10">
          <figure className="flex gap-7 items-center">
            <img
              src={userPhoto}
              alt="user"
              className="w-52 h-52 rounded-full shadow-2xl border-4 border-white"
            />
            <figcaption>
              <h3 className="text-3xl font-semibold">Martin Elias</h3>
              <span className="text-lg font-medium text-gray-600">
                martin@gmail.com
              </span>
            </figcaption>
          </figure>

          <div className="grid grid-cols-3 gap-4 pt-10">
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
              <p className="text-4xl font-bold">20</p>
            </div>
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
              <p className="text-4xl font-bold">20</p>
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
              <p className="text-4xl font-bold">20</p>
            </div>
          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
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

export default ProfilePage;
