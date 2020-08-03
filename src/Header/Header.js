import React from 'react';
import './header.scss';
import { Link } from "react-router-dom";

function Header({isAuth}) {
    const clickHandle = (e) => {
        if(isAuth) {
            localStorage.removeItem('app-token');
            window.location.replace("/");
        }
    }

    return (
        <header className="header">
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        {/* <img src={Logo} className="logo" alt="twitter search logo" /> */}
                        <b>SearchMyTweet</b></Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="btn btn-primary ml-lg-3" onClick={(e) => clickHandle(e)}>{isAuth ? 'Log out' : 'Log in'}</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                </nav>
        </header>
    )
}

export default Header
