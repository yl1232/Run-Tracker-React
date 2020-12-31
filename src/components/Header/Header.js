import React from "react";
import "../../styles/Header.css";
import logo from "../../images/logo.png";
import Image from "react-bootstrap/Image";

const Header = () => {
    return (
        <div className="header">
            <Image id="logo" src={logo} thumbnail />
            <h1>Run Tracker</h1>
        </div>
    );
}

export default Header;