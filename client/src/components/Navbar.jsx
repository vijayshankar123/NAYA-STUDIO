import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-dark">
        <h6>
          <Link to="/">
            <i style={{ color: "steelblue" }} className="fas fa-code" />{" "}
            <span style={{ color: "aqua" }}>NAYA STUDIO</span>
          </Link>
        </h6>
      </nav>
    </div>
  );
};

export default Navbar;
