import React from "react";
import { Link } from "react-router-dom";

export default function AddContact(){
    return(
    <div className="container bg-dark h-100 rounded">
        <div className="grid bg-light text-dark w-75 mx-auto pt-5 rounded">
            <div className="row">
                <div className="col-md-12">
                    <div className="h3 text-center">New Contact</div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="w-25  m-auto">
                        <img className="img-fluid" src="https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-10 mx-auto my-2">
                    <form action="">
                        <div className="mb-2">
                            <input type="text" className="form-control" placeholder="Name"/>
                        </div>
                        <div className="mb-2">
                            <input type="number" className="form-control" placeholder="Phone Number"/>
                        </div>
                        <div className="mb-2">
                            <input type="email" className="form-control" placeholder="Email"/>
                        </div>
                        <div className="mb-2">
                            <input type="text" className="form-control" placeholder="Company Name"/>
                        </div>
                        <div className="mb-2">
                            <input type="Submit" className="btn btn-success me-2" value="Create"/>
                            <Link to={'/contacts/list'} className="btn btn-dark"> Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
}