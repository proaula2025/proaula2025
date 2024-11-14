import { productsTotal, userPhoto } from "../images";
import { useContext } from "react";
import TemplateMain from "../Templates/TemplateMain";
import { UserContext } from "../context/UserContext";
import { ProductosContext } from "../context/ProductsContext";
import CardProductFundacion from "../components/CardProductFundacion";

const FoundationPage = () => {
  const { usuarioEnLinea } = useContext(UserContext);
  const { productos, setProductos } = useContext(ProductosContext);

  const productosRecogidos = productos.filter(
    (producto) => producto.fundacionRecogioProducto
  ).length;
  const productosSinRecoger = productos.length - productosRecogidos;

  return (
    <TemplateMain>
      <div className="grid grid-cols-3 gap-2">
        <div className="w-full border-2 bg-white border-stone-100 p-4 rounded-lg grid gap-4 cursor-pointer hover:transform hover:scale-95 duration-200">
          <div className="flex gap-2">
            <img
              className="w-24 h-24 rounded-full object-cover"
              src={usuarioEnLinea.imageUrl || userPhoto}
              alt="Productos totales"
            />
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold">
                {usuarioEnLinea.nombreCompleto}
              </h2>
              <p className="text-base text-gray-500 truncate">
                {usuarioEnLinea.email}
              </p>
              <p className="text-base text-gray-500 truncate">
                {usuarioEnLinea.telefono}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full border-2 bg-white border-stone-100 p-4 rounded-lg grid gap-4 cursor-pointer hover:transform hover:scale-95 duration-200">
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold">
              Total de productos sin recoger
            </h2>
            <img className="w-8" src={productsTotal} alt="Productos totales" />
          </div>
          <p className="text-4xl font-bold">{productosSinRecoger}</p>
        </div>
        <div className="w-full border-2 bg-white border-stone-100 p-4 rounded-lg grid gap-4 cursor-pointer hover:transform hover:scale-95 duration-200">
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold">
              Total de productos recibidos
            </h2>
            <img className="w-8" src={productsTotal} alt="Productos totales" />
          </div>
          <p className="text-4xl font-bold">{productosRecogidos}</p>
        </div>
      </div>

      <div className="w-full mt-6 bg-white p-4 shadow rounded-md">
        <div className="w-full min-h-[35rem] bg-white rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h5 className="text-xl font-semibold leading-none text-[#39c962]">
              Últimos productos donados
            </h5>
          </div>
          <div className="flow-root">
            <ul role="list" className="divide-y divide-gray-200">
              {productos.map((producto) => (
                <CardProductFundacion
                  key={producto.idProducto}
                  producto={producto}
                  setProductos={setProductos}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </TemplateMain>
  );
};

export default FoundationPage;
