import { useContext, useState } from "react";
import CardProductPersona from "../components/CardProductPersona";
import { categoryProducts, stateProducts } from "../helpers/productsHelpers";
import TemplateMain from "../Templates/TemplateMain";
import InputText from "./../components/InputText";
import ModalProduct from "./../components/ModalProduct";
import { ProductosContext } from "./../context/ProductsContext";
import { MensajeInvitadoRegistrarse } from "../components/MensajeInvitadoRegistrarse";
import { UserContext } from "../context/UserContext";

export const PersonPage = () => {
  const { estaEnLinea } = useContext(UserContext);
  const { productosPersona, setProductosPersona } =
    useContext(ProductosContext);
  const [openModalProduct, setOpenModalProduct] = useState(false);
  const [abrirModalRegistrarse, setAbrirModalRegistrarse] = useState(false);
  const [searchProducto, setSearchProducto] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedEstado, setSelectedEstado] = useState("");
  const [selectedTipo, setSelectedTipo] = useState("");

  const getProductosByName = (
    name = "",
    category = "",
    estado = "",
    tipo = ""
  ) => {
    name = name.toLocaleLowerCase().trim();
    return productosPersona.filter((prod) => {
      const matchesName =
        name.length === 0 ||
        prod.nombreProducto.toLocaleLowerCase().includes(name) ||
        prod.categoria.toLocaleLowerCase().includes(name) ||
        prod.estado.toLocaleLowerCase().includes(name);

      const matchesCategory = category === "" || prod.categoria === category;

      const matchesEstado = estado === "" || prod.estado === estado;

      const matchesTipo = tipo === "" || prod.tipoProducto === tipo;

      return matchesName && matchesCategory && matchesEstado && matchesTipo;
    });
  };

  const productosFiltrados = getProductosByName(
    searchProducto,
    selectedCategory,
    selectedEstado,
    selectedTipo
  );

  const handleOpenModalRegistrarse = () => {
    setAbrirModalRegistrarse(!abrirModalRegistrarse);
  };

  const handleOpenModalProduct = () => {
    if (!estaEnLinea) {
      handleOpenModalRegistrarse();
      return;
    }

    setOpenModalProduct(!openModalProduct);
  };

  return (
    <TemplateMain>
      <section className="">
        <div>
          <h1 className="text-5xl mb-4 m-0 font-bold text-gray-900">
            Descubre productos
          </h1>
          <p className="text-lg text-gray-700 w-[60rem] mb-5">
            Encuentra una gran variedad de productos que otras personas están
            vendiendo o intercambiando. ¡Desde artículos de colección hasta
            gadgets de última tecnología, lo que buscas está a solo un clic!
            ¿Listo para encontrar algo especial? ¡Empieza tu búsqueda ahora!
          </p>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div>
            <InputText
              label="Buscar"
              placeholder="Buscar..."
              value={searchProducto}
              onChange={(e) => setSearchProducto(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="category"
              className="block mb-2 text-base font-medium text-gray-900"
            >
              Categoria
            </label>
            <select
              id="category"
              className="cursor-pointer block w-full px-4 py-[0.55rem] text-base text-gray-900 border border-gray-300 rounded-lg bg-[#ffffff47] focus:ring-green-500 focus:border-green-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">Selecciona</option>
              {categoryProducts.map((categoria) => (
                <option key={categoria.id} value={categoria.category}>
                  {categoria.category}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="estado"
              className="block mb-2 text-base font-medium text-gray-900"
            >
              Estado
            </label>
            <select
              id="estado"
              className="cursor-pointer block w-full px-4 py-[0.55rem] text-base text-gray-900 border border-gray-300 rounded-lg bg-[#ffffff47] focus:ring-blue-500 focus:border-blue-500"
              value={selectedEstado}
              onChange={(e) => setSelectedEstado(e.target.value)}
            >
              <option value="">Selecciona</option>
              {stateProducts.map((estado) => (
                <option key={estado.id} value={estado.state}>
                  {estado.state}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="tipo"
              className="block mb-2 text-base font-medium text-gray-900"
            >
              Tipo de producto
            </label>
            <select
              id="tipo"
              className="cursor-pointer block w-full px-4 py-[0.55rem] text-base text-gray-900 border border-gray-300 rounded-lg bg-[#ffffff47] focus:ring-blue-500 focus:border-blue-500"
              value={selectedTipo}
              onChange={(e) => setSelectedTipo(e.target.value)}
            >
              <option value="">Selecciona</option>
              <option value="Venta">En venta</option>
              <option value="Intercambio">Por intercambio</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2 mt-4 shadow rounded-md min-h-72 bg-white p-4">
          {productosFiltrados.map((producto) => (
            <CardProductPersona
              key={producto.idProducto}
              producto={producto}
              handleOpenModalRegistrarse={handleOpenModalRegistrarse}
              estaEnLinea={estaEnLinea}
            />
          ))}
        </div>
      </section>

      <button
        className="fixed bottom-6 right-6 p-4 font-medium text-white bg-green-500 hover:bg-green-700 duration-150 rounded-full focus:ring-4 focus:outline-none focus:ring-green-300"
        type="button"
        onClick={handleOpenModalProduct}
      >
        <svg
          className="w-6 h-6 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 17h6m-3 3v-6M4.857 4h4.286c.473 0 .857.384.857.857v4.286a.857.857 0 0 1-.857.857H4.857A.857.857 0 0 1 4 9.143V4.857C4 4.384 4.384 4 4.857 4Zm10 0h4.286c.473 0 .857.384.857.857v4.286a.857.857 0 0 1-.857.857h-4.286A.857.857 0 0 1 14 9.143V4.857c0-.473.384-.857.857-.857Zm-10 10h4.286c.473 0 .857.384.857.857v4.286a.857.857 0 0 1-.857.857H4.857A.857.857 0 0 1 4 19.143v-4.286c0-.473.384-.857.857-.857Z"
          />
        </svg>
      </button>

      {openModalProduct && (
        <ModalProduct
          isOpen={openModalProduct}
          handleOpenModalProduct={handleOpenModalProduct}
          mensajeGuardado="Producto guardado correctamente"
          setProductosPersona={setProductosPersona}
          tipoDeProducto="Venta"
        />
      )}

      {abrirModalRegistrarse && (
        <MensajeInvitadoRegistrarse
          handleOpenModalRegistrarse={handleOpenModalRegistrarse}
        />
      )}
    </TemplateMain>
  );
};
