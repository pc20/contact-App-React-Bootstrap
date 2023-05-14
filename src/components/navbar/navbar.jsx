import React from "react";
import { Link } from "react-router-dom";


export default function Navbar(){

    return(
        <nav className="navbar navbar-dark bg-dark navbar-collapse-md">
             <Link to={'/'} className="navbar-brand mx-2">
                <i className="fa-solid fa-address-book fa-xl text-white"> </i>
                <span className="text-white">CONTACT APP</span>
            </Link>
             <form className="form-inline">
                <input className=""type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-dark" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </nav>
    );

}