import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Projects", to: "/projects" },
    { name: "Testimonials", to: "/testimonials" },
    { name: "Contact", to: "/contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/LOGO.jpeg" alt="RockChem Solutions Logo" />
        </Link>

        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger ${isOpen ? "open" : ""}`}></span>
          <span className={`hamburger ${isOpen ? "open" : ""}`}></span>
          <span className={`hamburger ${isOpen ? "open" : ""}`}></span>
        </button>

        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          {links.map(({ name, to }) => (
            <li key={to}>
              <NavLink
                to={to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;



