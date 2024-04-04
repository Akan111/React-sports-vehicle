import React, { useContext, useState } from "react";
import "./header.css";
import NavListItem from "./NavListItem";
import navListData from "../data/navListData";
import { useLocation, Link } from "react-router-dom";
import { AppContext } from "../App";

function Header() {
  const [open, setOpen] = useState(false);
  const [navList, setNavList] = useState(navListData);
  const location = useLocation();
  const { library, setLibrary } = useContext(AppContext);

  const handleToggleMenu = () => {
    setOpen(!open);
  };

  const handleNavOnClick = (id) => {
    //Reseting the navListData and turning all the active property values to false.
    //Return the nav object that has id equal to the id of the parameter
    const newNavList = navList.map((nav) => {
      nav.active = false;

      if (nav._id === id) {
        nav.active = true;
      }

      return nav;
    });

    setNavList(newNavList);
  };

  return (
    <header>
      <a
        href="/"
        className="logo"
        style={
          location.pathname === "/"
            ? { color: "#000000" }
            : { color: "#ffffff" }
        }
      >
        Sporty
      </a>
      <div>
        <Link to="/library" className="like">
          <i className="bi bi-heart-fill"></i>
          <span className="likeNumbers">{library.length}</span>
        </Link>
        <a href="#" className="menu" onClick={handleToggleMenu}>
          {open ? (
            <i className="bi bi-x-lg"></i>
          ) : (
            <i className="bi bi-list"></i>
          )}
        </a>
      </div>
      <ul className={`nav ${open ? "active" : ""}`}>
        {navList.map((nav) => (
          <NavListItem key={nav._id} nav={nav} navOnClick={handleNavOnClick} />
        ))}
      </ul>
    </header>
  );
}

export default Header;
