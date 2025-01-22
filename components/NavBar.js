"use client"

import React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const NavLink = ({ href, children }) => {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()

    // Check if we're on the homepage
    if (window.location.pathname === "/") {
      // If on homepage, smooth scroll to the section
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // If not on homepage, navigate to homepage + anchor
      router.push(`/${href}`)
    }
  }

  return (
    <li className="nav-item">
      <a
        href={href}
        onClick={handleClick}
        className="nav-link px-3 py-2 text-light hover:bg-light hover:text-primary rounded-md fw-semibold"
        style={{ fontSize: "1.4rem" }}
      >
        {children}
      </a>
    </li>
  )
}

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm border-bottom border-secondary">
      <div className="container-fluid">
        {/* Logo */}
        <Link href="/" className="navbar-brand fw-bold text-primary">
          <img
            src="https://ideal-interior-nepal.s3.ap-south-1.amazonaws.com/logos/logo-top-removebg-preview.png"
            alt="Logo"
            className="logo-rectangular img-fluid"
            style={{
              width: "150px", // Adjust the width for a rectangular appearance
              height: "90px", // Set a smaller height to fit within the navbar
              objectFit: "fill", // Stretches the image to fit the dimensions
            }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav align-items-center">
            <NavLink href="#about">About Us</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact Us</NavLink>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
