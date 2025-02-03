'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const QuickLinks = () => {
  return (
    <div className="col-md-4">
      <h5 className="fw-bold text-white">Quick Links</h5>
      <ul className="list-unstyled">
        {[
          { href: "/", label: "Home" },
          { href: "/services", label: "Services" },
          { href: "/projects", label: "Projects" },
          { href: "/contact", label: "Contact Us" },
        ].map((link, index) => (
          <li key={index} className="mb-2">
            <Link
              href={link.href}
              className="text-light fw-semibold text-decoration-none d-block"
              style={{ transition: "color 0.3s" }}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5" id="contact">
      <div className="container">
        <div className="row">
          {/* Logo and About */}
          <div className="col-md-4 mb-4">
          <img
            src="https://ideal-interior-nepal.s3.ap-south-1.amazonaws.com/logos/logo-with-text-removebg-preview.png"
            alt="Logo"
            className="logo-rectangular me-2 img-fluid"
            style={{
              width: "350px", // Adjust the width for a rectangular appearance
              height: "200px", // Set a smaller height to fit within the navbar
              objectFit: "fill" // Stretches the image to fit the dimensions
            }}
          />
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                <a href="mailto:info@yourcompany.com" className="text-light">
                  info@yourcompany.com
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} className="me-2" />
                <a href="tel:+1234567890" className="text-light">
                  +123 456 7890
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                Kathmandu, Nepal
              </li>
            </ul>
          </div>

          {/* Navigation Links */}
          <QuickLinks />
        </div>

        <hr className="bg-light" />

        {/* Social Media Links */}
        <div className="row">
          <div className="col text-center">
            <h5>Follow Us</h5>
            <div className="d-flex justify-content-center mt-3">
              <a
                href="https://facebook.com"
                target="_blank"
                className="text-light me-4"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                className="text-light me-4"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                className="text-light"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          </div>
        </div>

        <hr className="bg-light" />

        {/* Copyright */}
        <div className="row">
          <div className="col text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
