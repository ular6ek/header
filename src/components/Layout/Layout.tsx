import scss from "./Layout.module.scss";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import img from "../../assets/Vector 1.png";
import Main from "./main/Main";
import Belly from "./belly/Belly";
import Lini from "./Lini/Lini";
import Box from "./box/Box";

const Layout = () => {
  return (
    <div className={scss.layout}>
      <div className="container">
        <Header />
        <img className={scss.vector} src={img} alt="" />
        <Main />
        <Belly />
        <Lini />
        <Box />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
