import Navbar from "../components/Navbar";
import PropTypes from "prop-types";
import Footer from "./../components/Footer";

const TemplateMain = ({ children }) => {
  return (
    <main className="w-[85%] grid grid-rows-[auto,1fr,auto] m-auto before:bg-[#cccccc21] before:w-full before:h-screen before:fixed before:top-0 before:left-0 before:-z-10 h-screen">
      <Navbar />

      <section className="w-full m-auto pt-3">{children}</section>

      <Footer />
    </main>
  );
};

TemplateMain.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TemplateMain;
