import Navbar from "../components/Navbar";
import PropTypes from "prop-types";

const TemplateMain = ({ children }) => {
  return (
    <main className="before:bg-gradient-to-tr from-white to-[rgba(8,195,55,0.66)] before:w-full before:h-screen before:fixed before:top-0 before:left-0 before:-z-10 h-screen">
      <Navbar />

      <section className="w-[83%] m-auto p-4 pt-6">{children}</section>
    </main>
  );
};

TemplateMain.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TemplateMain;
