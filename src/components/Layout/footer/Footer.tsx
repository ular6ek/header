import scss from "./Footer.module.scss";
import logo from "../../../assets/react.svg";
import mod_1 from "../../../assets/instagram.svg";
import mod_2 from "../../../assets/tviter.svg";
import mod_3 from "../../../assets/IN.svg";

const foot = [
  {
    name: "Services",
    href: "/",
  },
  {
    name: "Product",
    href: "/",
  },
  {
    name: "Company",
    href: "/",
  },
];

const Footer = () => {
  return (
    <footer className={scss.container}>
      <div className={scss.footer}>
        <div className={scss.footer_2}>
          <div className={scss.imgBlock}>
            <img src={logo} alt="" />
            <div className={scss.mod}>
              <img src={mod_1} alt="" />
              <img src={mod_2} alt="" />
              <img src={mod_3} alt="" />
            </div>
            <h1 className={scss.h1}>
              Copy Right 2021. <br /> All rights reserved
            </h1>
          </div>

          <nav className={scss.nav}>
            <ul>
              {foot.map((el, index) => (
                <li key={index}>
                  <a href={el.href}>{el.name}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={scss.organis}>
          <div>
            <h1>Design</h1>
            <h1>Coding</h1>
            <h1>Development</h1>
            <h1>Marketing</h1>
            <h1>Digital Marketing</h1>
            <h1>Product Design</h1>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
