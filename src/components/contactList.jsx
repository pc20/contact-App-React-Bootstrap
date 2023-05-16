import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Contact from "./contact";

export default function ContactList(props){
    
    const {contacts,deleteContact } = props;
    const totalCnt = contacts.length;
    const [query,setQuery] = useState({
        text:''
    })

    let [filterContactList,setFilterContactList] = useState(contacts);
    
    
    const searchContact = (event) => {
        setQuery(event.target.value);
        if(event.target.value){
             setFilterContactList(contacts.filter(contact => {
            return contact.name.toLowerCase().includes(event.target.value.toLowerCase());
            }));
        }else{
            setFilterContactList(contacts);
        }
    }
    useEffect(()=>{
            setFilterContactList(contacts);
        },[contacts])

    return(<>
        <div className="container bg-dark  text-light rounded-bottom h-100">
            <section className="pt-3 d-flex flex-row justify-content-between align-items-center">
                <div>{`Total Contacts: ${totalCnt}`}</div>
                <div>
                    <Link to={'/contacts/add'} className="">
                        <button className="btn btn btn-info "><i className="fa-solid fa-user-plus"/>  New Contact</button>
                    </Link>
                </div>
                <div>
                    <form className="form-inline row">
                        <div className="col-md-12">
                            <input name='text' value={query.text}
                            onChange={searchContact}
                            className="form-control"type="search" placeholder="Search" aria-label="Search"/>
                        </div>
                    </form>
                </div>
            </section>
            <hr/>
            <section className="list-group">
                    {
                        filterContactList.map(
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