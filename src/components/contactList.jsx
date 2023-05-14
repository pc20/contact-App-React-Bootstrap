import React from "react";
import { Link } from "react-router-dom";

export default function ContactList(){
    const totalCnt = 0;
    return(<>
        <div className="container bg-dark text-white">
            <section className="pt-3 d-flex flex-row justify-content-around">
                <div className="p-2 mt-3">{`Total Contacts: ${totalCnt}`}</div>
                <div className="p-2">
                    <Link to={'/contacts/add'} className="navbar-brand mx-2">
                        <button className="btn btn-lg btn-primary "><i className="fa-solid fa-user-plus"></i></button>
                    </Link>
                </div>
            </section>
            <hr/>
            <section className="list-group">
                    <div className="list-group-item">
                        <div className="d-flex w-100">
                            <div><i class="fa-solid fa-user"></i></div>
                            <div className="ms-5">My Profile</div>
                        </div>
                    </div>

                    <div className="list-group-item">
                        <div className="d-flex w-100">
                            <div className="circle">SG</div>
                            <div className="ms-5 d-flex w-100 justify-content-between">
                                <div className="me-5">Sanjeev Gupta Perf Team</div>
                                <div>9876543210</div>
                            </div>
                            <div className="ms-5 d-flex w-50 justify-content-around">
                                <Link to={'/contacts/edit'}>
                                    <i class="fa-regular fa-pen-to-square"></i>
                                </Link>
                                <Link to={'/contacts/list'}>
                                    <i class="fa-solid fa-trash"></i>
                                </Link>
                            </div>   
                        </div>
                    </div>
            </section>
        </div>
    </>);
}