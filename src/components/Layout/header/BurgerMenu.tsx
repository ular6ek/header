 import { FC } from "react";
import scss from "./BusgerMenu.module.scss"

 interface LinksType {
    name:string;
    href:string;
 }

 interface BurgerMenuProps {
    links: LinksType[]
 }

const BurgerMenu: FC<BurgerMenuProps> = ({links}) => {
  return(
  <div className={scss.burger_menu}>
  <div className={scss.content}>
    <nav className={scss.nav}>
        <ul>
            {links.map((item,index) =>(
                <li key={index}>
                    <a href={item.href}>{item.name}</a>
                </li>
            ))}
        </ul>
    </nav>
  </div>
  </div>
  );
};

export default BurgerMenu;
