import React from "react";

function Navbar() {
    return (
        // Using Bulma's navbar classes for styling
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    MycoTek
                </a>

                {/* This is for the hamburger menu on smaller screens */}
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    {/* Navigation items on the left */}
                    <a className="navbar-item" href="/home">Home</a>
                    <a className="navbar-item" href="/myTeks">myTeks</a>
                    <a className="navbar-item" href="/mycelium">mycelium</a>
                </div>

                <div className="navbar-end">
                    {/* Items aligned to the right, such as login */}
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-light" href="/login">
                                Log in
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
