import React from "react";
import { Link } from "react-router-dom";


export default function Navbar(){

    return(
        <nav className="navbar navbar-dark bg-dark navbar-collapse-md rounded">
             <Link to={'/'} className="navbar-brand mx-2">
                <i className="fa-solid fa-address-book fa-xl text-white"> </i>
                <span className="text-white h4">CONTACT APP</span>
            </Link>
             <form className="form-inline row g-1">
                <div className="col-md-9">
                    <input className="form-control"type="search" placeholder="Search" aria-label="Search"/>
                </div>
                 <div className="col-md-1">
                    <button className="btn btn-light" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </form>
        </nav>
    );

}