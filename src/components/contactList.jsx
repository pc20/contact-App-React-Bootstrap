import React from "react";
import { Link } from "react-router-dom";
import Contact from "./contact";

export default function ContactList(props){

    const {contacts,deleteContact } = props;
    const totalCnt = contacts.length;
    return(<>
        <div className="container bg-dark text-white rounded-bottom h-100">
            <section className="pt-3 d-flex flex-row justify-content-between">
                <div className="p-2 mt-3">{`Total Contacts: ${totalCnt}`}</div>
                <div className="p-2">
                    <Link to={'/contacts/add'} className="">
                        <button className="btn btn-lg btn-primary "><i className="fa-solid fa-user-plus"/>  New Contact</button>
                    </Link>
                </div>
            </section>
            <hr/>
            <section className="list-group">
                    <div className="list-group-item">
                        <div className="d-flex w-100">
                            <div><i className="fa-solid fa-user"></i></div>
                            <div className="ms-5">My Profile</div>
                        </div>
                    </div>

                    {
                        contacts.map(
                            contact => {
                                return(
                                    <Contact key={contact.id} contact={contact} deleteContact ={deleteContact}></Contact>
                                )
                            }
                        )
                    }
            </section>
        </div>
    </>);
}