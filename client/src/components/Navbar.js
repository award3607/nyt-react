import React from 'react'

const Navbar = () =>
    <nav className="navbar navbar-inverse">
        <div className="container-fluid">
            {/* <div className="navbar-header"> */}
            <ul className="nav navbar-nav">
                <li><a href="/home">Home</a></li>
                <li><a href="/saved">Saved</a></li>
            </ul>
        </div>
    </nav>

export default Navbar