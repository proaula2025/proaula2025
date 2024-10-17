import { BrowserRouter } from "react-router-dom";
import RegisterAuth from "./auth/RegisterAuth";
import LoginAuth from "./auth/LoginAuth";
import FoundationPage from "./pages/FoundationPage";
import CompanyPage from "./pages/CompanyPage";
import ReactModal from "react-modal";
import { PersonPage } from "./pages/PersonPage";
import AdminPage from "./pages/AdminPage";
import ProfilePage from "./pages/ProfilePage";

ReactModal.setAppElement("#root");

function App() {
  return (
    <BrowserRouter>
      <AdminPage />
    </BrowserRouter>
  );
}

export default App;
