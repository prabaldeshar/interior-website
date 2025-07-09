"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLink = ({ href, children }) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <li className="nav-item">
      <Link
        href={href}
        className={`nav-link px-3 py-2 rounded-md transition-all duration-300 ease-in-out ${
          isActive ? "fw-bold active text-light font-bold" : "text-light hover:bg-light/10 hover:text-primary"
        }`}
        style={{ fontSize: "1.05rem" }}
      >
        {children}
      </Link>
    </li>
  )
}

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-dark shadow-md nav-fixed">
      <div className="container-fluid">
        {/* Logo */}
        <Link href="/" className="navbar-brand">
          <img
            src="https://ideal-interior-nepal.s3.ap-south-1.amazonaws.com/logos/logo-top-removebg-preview.png"
            alt="Logo"
            className="logo-rectangular img-fluid"
            style={{
              width: "125px",
              height: "57px",
              objectFit: "contain",
            }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            role="img"
            focusable="false"
          >
            <title>Menu</title>
            <path
              stroke="white"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="2"
              d="M4 7h22M4 15h22M4 23h22"
            />
          </svg>
        </button>

        <div className={`collapse navbar-collapse justify-content-end ${isMobileMenuOpen ? "show" : ""}`}>
          <ul className="navbar-nav align-items-center">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/contact">Contact Us</NavLink>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar

