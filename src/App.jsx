import { BrowserRouter } from "react-router-dom";
import ReactModal from "react-modal";
import AppRouter from "./routes/AppRouter";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "./context/UserContext";

ReactModal.setAppElement("#root");

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <AppRouter />
      </UserProvider>

      <Toaster />
    </BrowserRouter>
  );
}

export default App;
