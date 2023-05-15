import React from 'react'
import { Link } from 'react-router-dom';
import { FetchData } from '../service/api';

function Contact(props) {
   const  {contact,deleteContact} = props;

   function getName(fullname){
    const names = fullname.split(" ");
    let abbr = names[0].charAt(0);
    if(names[1]){
        abbr = abbr + names[1].charAt(0);
   }
    return abbr;
}

const handleDeleteContact = () => {
    try {
        let res = FetchData.deleteContact(contact.id);
        if(res){
            console.log("deleted successfully");
            deleteContact(contact.id);
        }
    } catch (err) {
         console.log("delete api failed",err);
    }
}

  return (
    <div className="list-group-item my-1 rounded">
        <div className="row g-4">
            <div className="col-1 circle text-center">{getName(contact.name)}</div>
            <div className=" col-md-5">{contact.name.trim()}</div>
            <div className='col-md-4'>{contact.phone.split(" ")[0].trim()}</div>
            <div className="col-md-2">
                <Link to={`/contacts/edit/${contact.id}`}>
                    <i className="fa-regular fa-pen-to-square px-2"></i>
                </Link>
                <Link to={'/contacts/list'} onClick={handleDeleteContact}>
                    <i className="fa-solid fa-trash px-2"></i>
                </Link>
            </div>   
        </div>
    </div>
  )
}

export default Contact;