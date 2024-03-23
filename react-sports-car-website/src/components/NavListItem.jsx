import React from "react";
import "./navListItem.css";

function NavListItem({ nav, navOnClick }) {
  return (
    <li>
      <a
        className={nav.active ? "active" : undefined}
        href="#"
        onClick={() => navOnClick(nav._id)}
      >
        {nav.name === "home" ? <i className="bi bi-house-door"></i> : nav.name}
      </a>
    </li>
  );
}

export default NavListItem;
