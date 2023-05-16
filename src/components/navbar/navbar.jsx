import React from "react";


export default function Navbar(props){
    return(
        <nav className="navbar navbar-dark bg-dark navbar-collapse-md rounded-top">
              <div className="d-flex align-items-center mx-auto">
                <span className="mx-2"><i className="fa-solid fa-address-book fa-2xl text-white"> </i></span>
                <span className="h1 text-white">CONTACT APP</span>
              </div>
        </nav>
    );

}