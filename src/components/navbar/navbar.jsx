import React from "react";

// navbar
export default function Navbar(props){
    return(
        <nav className="navbar bg-dark bg-gradient navbar-collapse-md rounded-top">
              <div className="d-flex align-items-center mx-auto text-warning">
                {/* phonebook icon */}
                <span className="mx-2"><i className="fa-solid fa-address-book fa-2xl"> </i></span>
                
                {/* heading  */}
                <span className="h1">CONTACT APP</span>
              </div>
        </nav>
    );

}