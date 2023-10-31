import React from "react";

function Navbar() {
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          MycoTek
        </div>
        <div className="navbar-menu">
          <a href="#home" className="navbar-item">Home</a>
          <a href="#features" className="navbar-item">Features</a>
          <a href="#contact" className="navbar-item">Contact</a>
        </div>
      </nav>
    );
  }
  
export default Navbar;
