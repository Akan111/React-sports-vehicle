import React from "react";
import "./navListItem.css";
import { Link } from "react-router-dom";

function NavListItem({ nav, navOnClick }) {
  return (
    <li>
      <Link
        className={nav.active ? "active" : undefined}
        to={nav.link}
        onClick={() => navOnClick(nav._id)}
      >
        {nav.name === "home" ? <i className="bi bi-house-door"></i> : nav.name}
      </Link>
    </li>
  );
}

export default NavListItem;
