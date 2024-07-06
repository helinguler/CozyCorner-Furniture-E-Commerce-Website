// Navigation Bar
import React, { useContext, useRef, useState } from "react"; //6.9k (gzipped: 2.7k)
import "./navbar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import nav_dropdown from "../assets/nav_dropdown.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="CozyCorner logo" />
        {/*<p>CozyCorner</p>*/}
      </div>
      <img
        className="nav-dropdown"
        onClick={dropdown_toggle}
        src={nav_dropdown}
        alt="dropdown icon"
      />
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("sofas");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/sofas">
            Sofas
          </Link>
          {menu === "sofas" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("beds");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/beds">
            Beds
          </Link>
          {menu === "beds" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("wardrobes");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/wardrobes">
            Wardrobes
          </Link>
          {menu === "wardrobes" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("armchairs");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/armchairs">
            Armchairs
          </Link>
          {menu === "armchairs" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("tables");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/tables">
            Tables
          </Link>
          {menu === "tables" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
        <Link to="/cart">
          <img src={cart_icon} alt="Cart icon" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
