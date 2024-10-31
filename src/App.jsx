import { BrowserRouter } from "react-router-dom";
import ReactModal from "react-modal";
import AppRouter from "./routes/AppRouter";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "./context/UserContext";
import { ProductosProvider } from "./context/ProductsContext";
import { ReportProductsProvider } from "./context/ReportProductsContext";

ReactModal.setAppElement("#root");

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <ProductosProvider>
          <ReportProductsProvider>
            <AppRouter />
          </ReportProductsProvider>
        </ProductosProvider>
      </UserProvider>

      <Toaster />
    </BrowserRouter>
  );
}

export default App;
