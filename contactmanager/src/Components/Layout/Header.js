import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <i className="fas fa-home"></i> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Contact/AddContact" className="nav-link">
              <i className="fas fa-plus"></i> Add Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/About" className="nav-link">
              <i className="fas fa-question"></i> About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

Header.defaultProps = {
  branding: "Contact Manager",
};

Header.propTypes = {
  branding: PropTypes.string.isRequired,
};
