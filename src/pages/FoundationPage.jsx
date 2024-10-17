import { productsTotal } from "../images";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import TemplateMain from "../Templates/TemplateMain";

const FoundationPage = () => {
  const [chartOptions] = useState({
    series: [52.8, 26.8, 20.4],
    options: {
      colors: ["#1C64F2", "#16BDCA", "#9061F9"],
      chart: {
        height: 420,
        width: "100%",
        type: "pie",
      },
      stroke: {
        colors: ["white"],
        lineCap: "",
      },
      plotOptions: {
        pie: {
          labels: {
            show: true,
          },
          size: "100%",
          dataLabels: {
            offset: -25,
          },
        },
      },
      labels: ["Direct", "Organic search", "Referrals"],
      dataLabels: {
        enabled: true,
        style: {
          fontFamily: "Inter, sans-serif",
        },
      },
      legend: {
        position: "bottom",
        fontFamily: "Inter, sans-serif",
      },
      yaxis: {
        labels: {
          formatter: function (value) {
            return value + "%";
          },
        },
      },
      xaxis: {
        labels: {
          formatter: function (value) {
            return value + "%";
          },
        },
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
      },
    },
  });

  return (
    <TemplateMain>
      <div className="grid grid-cols-4 gap-2">
        <div className="w-full border-2 bg-[#ffffff47] border-stone-100 p-4 rounded-lg grid gap-4 cursor-pointer hover:transform hover:scale-95 duration-200">
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold">
              Total de productos donados
            </h2>
            <img className="w-8" src={productsTotal} alt="Productos totales" />
          </div>
          <p className="text-4xl font-bold">20</p>
        </div>
        <div className="w-full border-2 bg-[#ffffff47] border-stone-100 p-4 rounded-lg grid gap-4 cursor-pointer hover:transform hover:scale-95 duration-200">
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold">
              Total de productos donados
            </h2>
            <img className="w-8" src={productsTotal} alt="Productos totales" />
          </div>
          <p className="text-4xl font-bold">20</p>
        </div>
        <div className="w-full border-2 bg-[#ffffff47] border-stone-100 p-4 rounded-lg grid gap-4 cursor-pointer hover:transform hover:scale-95 duration-200">
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold">
              Total de productos donados
            </h2>
            <img className="w-8" src={productsTotal} alt="Productos totales" />
          </div>
          <p className="text-4xl font-bold">20</p>
        </div>
        <div className="w-full border-2 bg-[#ffffff47] border-stone-100 p-4 rounded-lg grid gap-4 cursor-pointer hover:transform hover:scale-95 duration-200">
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold">
              Total de productos donados
            </h2>
            <img className="w-8" src={productsTotal} alt="Productos totales" />
          </div>
          <p className="text-4xl font-bold">20</p>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-2 mt-6">
        <div className="w-full col-span-3 grid gap-4">
          <h2 className="text-2xl font-semibold">Productos donados</h2>

          <div className="w-full p-4 bg-[#ffffff47] border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                Últimos productos donados
              </h5>
              <a
                href="#"
                className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Ver todos
              </a>
            </div>
            <div className="flow-root">
              <ul
                role="list"
                className="divide-y divide-gray-200 dark:divide-gray-700"
              >
                <li className="py-3 sm:py-4">
                  <div className="flex items-center">
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Nombre de la empresa
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        CorreoDeLaEmpresa@gmail.com
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        Descripcion del producto
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        Fecha de entrega
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      <button className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Recoger
                      </button>
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center ">
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Nombre de la empresa
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        CorreoDeLaEmpresa@gmail.com
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        Descripcion del producto
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        Fecha de entrega
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      <button className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Recoger
                      </button>
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center">
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Nombre de la empresa
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        CorreoDeLaEmpresa@gmail.com
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        Descripcion del producto
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        Fecha de entrega
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      <button className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Recoger
                      </button>
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center ">
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Nombre de la empresa
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        CorreoDeLaEmpresa@gmail.com
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        Descripcion del producto
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        Fecha de entrega
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      <button className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Recoger
                      </button>
                    </div>
                  </div>
                </li>
                <li className="pt-3 pb-0 sm:pt-4">
                  <div className="flex items-center ">
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        Nombre de la empresa
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        CorreoDeLaEmpresa@gmail.com
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        Descripcion del producto
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        Fecha de entrega
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      <button className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Recoger
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="w-full h-full col-span-3 flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">Grafica de productos</h2>

            <div className="bg-[#ffffff47] rounded-lg shadow h-full flex flex-col justify-center">
              <div id="pie-chart">
                <ReactApexChart
                  options={chartOptions.options}
                  series={chartOptions.series}
                  type="pie"
                  height={420}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </TemplateMain>
  );
};

export default FoundationPage;
