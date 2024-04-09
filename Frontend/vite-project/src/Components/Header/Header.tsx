import logo from "../../assets/logo.png";
import { FaUser } from "react-icons/fa"; 
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
    <div className="header_logo">
  <a href="/" className="header_logoLink">
    <img src={logo} alt="Logo" className="header_logoImg" />
  </a>
</div>

      <div className="header_title">WellNest</div>
      <nav className="header_nav">
        <ul className="header_menu">
          <li className="header_menuItem">
            <a href="/" className="header_link">
              Home
            </a>
          </li>
          <li className="header_menuItem">
            <a href="/services" className="header_link">
              Services
            </a>
          </li>
          <li className="header_menuItem">
            <a href="/contact" className="header_link">
              Contact
            </a>
          </li>
          <li className="header_menuItem">
            <a href="/about" className="header_link">
              About
            </a>
          </li>
        </ul>
      </nav>
      <div className="header_appointment">
        <a href="/book-appointment" className="header_link">
          Book An Appointment
        </a>
      </div>
      <div className="header_login">
        <a href="/login" className="header_link">
          <FaUser className="header_icon" />
          Log in
        </a>
      </div>
    </header>
  );
};

export default Header;
