import React from "react";
import Link from "next/link";

const NavLink = ({ href, children }) => {
  return (
    <li className="nav-item">
      <Link href={href} className="nav-link px-3 py-2 text-gray-600 hover:bg-light hover:text-primary rounded-md fw-semibold">
        {children}
      </Link>
    </li>
  )
}

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm py-3">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand fw-bold text-primary" href="#">
          <img
            src="/logo.png"
            alt="Logo"
            className="me-2"
            style={{ height: "30px" }}
          />
        </a>


        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto align-items-center">
            <NavLink href="#about">About Us</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact Us</NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
