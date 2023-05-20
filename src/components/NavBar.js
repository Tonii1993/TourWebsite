import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";

export default function NavBar() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    setIsClicked(!isClicked);
  };

  const closeNavBar = () => {
    setIsClicked(false);
  };

  return (
    <nav className="navbarItems">
      <Link to="/">
        <h1 className="navbar-logo">TrippyAlb</h1>
      </Link>
      <div className="menu-icons" onClick={handleClick}>
        <i className={isClicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={isClicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link onClick={closeNavBar} className={item.cName} to={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          );
        })}
        <Link to="/signup">
          <button>Sign up</button>
        </Link>
      </ul>
    </nav>
  );
}
