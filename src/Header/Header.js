import React from 'react';
import './header.scss';

import Logo from "../../logo-twitter.png";

function Header() {
    return (
        <header className="header">
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        {/* <img src={Logo} className="logo" alt="twitter search logo" /> */}
                        <b>SearchMyTweet</b></a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                            <a href="/" className="btn btn-primary ml-lg-3">Log in</a>
                            </li>
                        </ul>
                    </div>
                </div>
                </nav>
        </header>
    )
}

export default Header
