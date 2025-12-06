import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-sections">

          {/* About */}
          <div className="footer-section">
            <h3>RockChem Solutions</h3>
            <p>
              Serving Gauteng, Limpopo, North West, Free State, Mpumalanga and Northern Cape,
              South Africa. Experts in non-explosive rock breaking.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Phone: +27 76 891 8779</p>
            <p>Email: thabang@rockchemsolutions.co.za</p>
            

            {/* Social Media */}
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.03H7.9v-2.9h2.54V9.65c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34v7.03C18.34 21.25 22 17.1 22 12.07z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.38 8.6 8.6 0 01-2.72 1.04 4.28 4.28 0 00-7.3 3.9A12.15 12.15 0 013 4.79a4.28 4.28 0 001.32 5.7 4.25 4.25 0 01-1.94-.54v.05a4.29 4.29 0 003.44 4.2 4.29 4.29 0 01-1.93.07 4.29 4.29 0 004 2.97A8.6 8.6 0 012 19.54a12.14 12.14 0 006.56 1.92c7.88 0 12.2-6.54 12.2-12.2 0-.19 0-.38-.01-.57A8.72 8.72 0 0022.46 6z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3A2 2 0 0121 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.34 17H6.14v-6h2.2v6zM7.24 9.79a1.27 1.27 0 110-2.54 1.27 1.27 0 010 2.54zM18 17h-2.2v-3a1.11 1.11 0 00-2.2 0v3H11.4v-6h2.11v.78a2.38 2.38 0 012.1-1.17c1.5 0 2.6.99 2.6 3.12v3.27z"/></svg>
              </a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} RockChem Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


