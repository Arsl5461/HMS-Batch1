import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { IoCaretDownOutline } from "react-icons/io5";

const Nav = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [color, setColor] = useState("white");

  return ( 
    <div className="index">
      <ul class="bar text-light ">
      <li className="grand8">
            <Link
              id="Summer Donate"
              to="/Donate"
              className={`nav-link ${activeLink === "donate" ? "active" : ""}`}
              onClick={() => setActiveLink("donate")}
            >
              Donate Now
            </Link>
          </li>
          <li className="grand2">
            <Link
              to="/Appointment"
              className={`nav-link ${activeLink === "appointment" ? "active" : ""}`}
              onClick={() => setActiveLink("appointment")}
            >
              Book Appointment
            </Link>
          </li>
        <div class="dropdown">
          <button class="dropbtn">
            Careers
            <IoCaretDownOutline />
          </button>
          <div class="dropdown-content">
            <Link to="/Vacent">Vacant Position</Link>
            <Link to="/Program">PG Programs</Link>
            <Link to="/ApplyOnline">Apply Online</Link>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Nav;
