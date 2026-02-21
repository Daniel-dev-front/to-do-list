import React from "react";
import scss from "./Header.module.scss";
import logoImg from "../image/image 2.png";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div id="header" className={scss.header}>
        <a href="/admin">
          {" "}
          <img src={logoImg} alt="" />
        </a>
        <nav className={scss.nav}>
          <NavLink className={scss.navText} to="/">
            <h4>Menu</h4>
          </NavLink>
          <NavLink className={scss.navText} to="/orders">
            <h4>Orders</h4>
          </NavLink>
          <NavLink className={scss.navText} to="/admin">
            <h4>Admin</h4>
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
