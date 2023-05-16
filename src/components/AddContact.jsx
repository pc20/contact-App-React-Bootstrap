import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { FetchData } from "../service/api";

export default function AddContact(props){

    const navigate = useNavigate();

    // setContact with initial state 
    const [contact,setContact] = useState({
        id: Math.round(Math.random()*100),
        name: "",
        email: "",
        phone: "",
        company: {
            name: ""
        }   
    });

    // update inputs based on onChange method
    const updateInputs = (event) => {
        setContact({
            ...contact,
            [event.target.name] : event.target.value
        });
    }

    // update company name 
    const updateCompanyName = (event) => {
        setContact({
                ...contact,
                company:{
                    name: event.target.value
                }
        });
    }

    // handle addNewContact method
    const addNewContact = async (event) =>{
        event.preventDefault();
        try{
            let res = await FetchData.createContact(contact); // insert the contact into db
            if(res){
                // 200 response
                console.log('contact added successfully ',res.data)
                props.updateContacts(contact); // since the api call is fake so I manually updated in the contact List
                navigate('/contacts/list',{replace:true});
            }
        }catch(err){
             navigate('/contacts/add',{replace:false});
        }
    }

    return(
        
    <div className="container bg-dark h-100 rounded-bottom py-2">
        <div className="grid bg-light text-dark w-75 mx-auto pt-5 rounded">
            <div className="row">
                <div className="col-md-12">
                    {/* heading */}
                    <div className="h3 text-center">New Contact</div>
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
                    <form onSubmit={addNewContact}>

                        {/* Name */}
                        <div className="row w-100 mb-2 g-0">
                            <div className="col-1 pt-2"><i className="fa-solid fa-xl fa-user"></i></div>
                            <div className="col-10">
                                <input type="text" required={true} name="name" value={contact.name} onChange={updateInputs} className="form-control" placeholder="Name"/>
                            </div>
                        </div>

                        {/* Phone Number */}
                        <div className="row w-100 mb-2 g-0">
                            <div className="col-1 pt-2"><i className="fa-solid fa-lg fa-phone"></i></div>
                            <div className="col-10">
                                <input type="number" required={true} name="phone" value={contact.phone} onChange={updateInputs} className="form-control" placeholder="Phone Number"/>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="row w-100 mb-2 g-0">
                            <div className="col-1 pt-2"><i className="fa-solid fa-lg fa-envelope"></i></div>
                            <div className="col-10">
                                <input type="email" name="email" value={contact.email}  onChange={updateInputs} className="form-control" placeholder="Email"/>
                            </div>
                        </div>
                        {/* company Name */}
                        <div className="row w-100 mb-2 g-0">
                            <div className="col-1 pt-2"><i className="fa-solid fa-xl fa-building"></i></div>
                            <div className="col-10">
                                <input type="text" name="company" value={contact.company.name}  onChange={updateCompanyName} className="form-control" placeholder="Company"/>
                            </div>
                        </div>
                        <div className="mb-2">
                            {/* Submit buttons */}
                            <input type="Submit" className="btn btn-success me-2" value="Save" readOnly={true}/>

                            {/* if cancel redirect it to main page */}
                            <Link to={'/contacts/list'} className="btn btn-dark"> Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
}