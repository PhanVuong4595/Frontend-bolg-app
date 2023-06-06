import { Outlet } from "react-router-dom";
import Header from "../Components/Web/Header";
import Footer from "../Components/Web/Footer";

const LayoutWeb = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default LayoutWeb;
