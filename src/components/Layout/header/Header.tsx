import scss from "./Header.module.scss";
import logo from "../../../assets/react.svg";

const links = [
  {
    name: "Products",
    href: "/",
  },
  {
    name: "Developers",
    href: "/dev",
  },
  {
    name: "Company",
    href: "/com",
  },
  {
    name: "Pricing",
    href: "/pri",
  },
];

const Header = () => {
  return (
    <header className={scss.header}>
      <div className={scss.container}>
        <div className={scss.content}>
          <div className={scss.logo}>
            <img src={logo} alt="" />
          </div>

          <nav className={scss.nav}>
            <ul>
              {links.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div
            className={scss.buttons}
            style={{ display: "flex", alignItems: "center", gap: "20px" }}
          >
            <button
              style={{
                border: "none",
                background: "none",
                color: "white",
                fontSize: "16px",
              }}
            >
              Support
            </button>
            <button
              style={{
                fontSize: "16px",
                background: "rgb(255, 188, 81)",
                padding: "12px 40px",
                border: "none",
                borderRadius: "18px",
              }}
            >
              Sing up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
