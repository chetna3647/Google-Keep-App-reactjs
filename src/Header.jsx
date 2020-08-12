import React from "react";
import logo from "./Images/logo.png";

const Header = () => {
    return ( 
        <>
            <div className="Header">
                <img src={logo} alt="logo" width="150" height="100" />
            </div>
        </>
    );
};

export default Header;