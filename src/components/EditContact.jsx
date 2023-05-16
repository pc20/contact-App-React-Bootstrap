import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FetchData } from "../service/api";

export default function EditContact(props){

    let {contactId} = useParams();
    let {contacts, updateContacts} = props;
    const navigate = useNavigate();
    let [displayContact,setDisplayContact] = useState({
        id: 0,
        name: "",
        email: "",
        phone: "",
        company: {
            name: ""
        }   
    });

    // since new added contacts will not be present in db
    //  so fetching them will fail. hence I am taking the contact details
    //  directly from contactList 
    useEffect(()=>{
        for(const element of contacts){
        if(element &&  element.id===parseInt(contactId)){ 
            setDisplayContact(element);
        }
    }
    },[contactId,contacts]);

    // update input method
    const updateInputs = (event) => {
        console.log(event.target)
        setDisplayContact({
            ...displayContact,
            [event.target.name] : event.target.value
        });
    }

    // update company name
    const updateCompanyName = (event) => {
        setDisplayContact({
                ...displayContact,
                company:{
                    name: event.target.value
                }
        });
    }

    // handle update contact submit button
    const updateContact = async (event) =>{
        event.preventDefault();
        try{
            // API call to update the contac
            let res = FetchData.updateContact(displayContact,contactId);
            if(res){
                console.log('contact added successfully ');
            }
            // since api call is fake so updating manually
            updateContacts(displayContact,contactId);
            navigate('/contacts/list',{replace:true});
        }catch(err){
            console.log("api called failed ",err);
            navigate(`/contacts/list/${contactId}`,{replace:false});
        }
    }


    return(
    <div className="container bg-dark h-100 rounded-bottom">
        <div className="grid bg-light text-dark w-75 mx-auto pt-5 rounded">
            <div className="row">
                <div className="col-md-12">
                    {/* heading */}
                    <div className="h3 text-center">Edit Contact</div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="w-25  m-auto">
                        {/* image */}
                        <img className="img-fluid" src="https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-10 mx-auto my-2">
                    <form onSubmit={updateContact}>
                        {/* name */}
                        <div className="row w-100 mb-2 g-0">
                            <div className="col-1 pt-2"><i className="fa-solid fa-xl fa-user"></i></div>
                            <div className="col-10">
                                <input type="text" required={true} name="name" value={displayContact.name} onChange={updateInputs} className="form-control" placeholder="Name"/>
                            </div>
                        </div>
                        {/* phone number */}
                        <div className="row w-100 mb-2 g-0">
                            <div className="col-1 pt-2"><i className="fa-solid fa-lg fa-phone"></i></div>
                            <div className="col-10">
                                <input type="text" required={true} name="phone" value={displayContact.phone} onChange={updateInputs} className="form-control" placeholder="Phone Number"/>
                            </div>
                        </div>
                        {/* email */}
                        <div className="row w-100 mb-2 g-0">
                            <div className="col-1 pt-2"><i className="fa-solid fa-lg fa-envelope"></i></div>
                            <div className="col-10">
                                <input type="email" name="email" value={displayContact.email}  onChange={updateInputs} className="form-control" placeholder="Email"/>
                            </div>
                        </div>

                        {/* company Name */}
                        <div className="row w-100 mb-2 g-0">
                            <div className="col-1 pt-2"><i className="fa-solid fa-xl fa-building"></i></div>
                            <div className="col-10">
                                <input type="text" name="company" value={displayContact.company.name}  onChange={updateCompanyName} className="form-control" placeholder="Company"/>
                            </div>
                        </div>

                        {/* Submit and cancel button */}
                        <div className="mb-2">
                            <input type="Submit" className="btn btn-success me-2" value="Save" readOnly={true}/>
                            <Link to={'/contacts/list'} className="btn btn-dark"> Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
}