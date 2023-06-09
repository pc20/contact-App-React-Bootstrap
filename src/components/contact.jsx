import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FetchData } from '../service/api';



function Contact(props) {
    const navigate = useNavigate();
   const  {contact,deleteContact} = props;

//    get the Abbr of the fullname
   function getName(fullname){
    const names = fullname.split(" ");
    let abbr = names[0].charAt(0);
    if(names[1]){
        abbr = abbr + names[1].charAt(0);
   }
    return abbr;
}

// delete Contact
const handleDeleteContact = () => {
    try {
        let res = FetchData.deleteContact(contact.id); // API call to delete contact
        if(res){
            console.log("deleted successfully");
        }
        deleteContact(contact.id); //Since this is a fake API call so delete manually
        navigate('/contacts/list',{replace:true});
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
                {/* edit button */}
                <Link to={`/contacts/edit/${contact.id}`}>
                    <i className="fa-regular fa-pen-to-square px-2 text-dark"></i>
                </Link>
                <Link to={'/contacts/list'} onClick={handleDeleteContact}>
                    <i className="fa-solid fa-trash px-2 text-danger"></i>
                </Link>
            </div>   
        </div>
    </div>
  )
}

export default Contact;