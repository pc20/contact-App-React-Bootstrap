import React, { useEffect, useState } from 'react';
import './App.css';
import { Routes,Route,Navigate } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import ContactList from './components/contactList';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import { FetchData } from './service/api';

function App() {
 let [contactList,setContactList] = useState([]);

    useEffect( () => {
        const fetchData = async () => {
        try {
            let response = await FetchData.getData(); // fetch the contact list
            const fetchedList = response.data;

            fetchedList.sort((a,b) => { // sort the list  based on First name
                let aName = a.name.toLowerCase();
                let bName = b.name.toLowerCase();
                if(aName>bName){
                  return 1;
                }else{
                  return -1;
                }
            });
            setContactList(fetchedList);
        } catch (error) {
            console.log("Error in fetching data",error)
        }
    }
      fetchData(); 
    },[]);

    //update the contactList
    let updateContacts = (contact,contactId) => {
      let newList = [];
      if(contactId){
        //if contactId is not null update that contact
        console.log("update call made")
        contactList.forEach(element => {
          if(element.id=== parseInt(contactId)){
            newList.push(contact);
          }else{
            newList.push(element);
          }
        });
      }else{
        // if contactId is null then add contact to the List
          newList = [...contactList,contact];
      }
      
      // sort the contactList
      newList.sort((a,b) => {
        let aName = a.name.toLowerCase();
        let bName = b.name.toLowerCase();
        if(aName>bName){
          return 1;
        }else{
          return -1;
        }
      });
      setContactList(newList);
    }

    //Delete the contactList
    let deleteContact = (contactId) => {
       let newList = [];
       // create new List by skipping contact referring to contactId
        contactList.forEach(element => {
          if(element.id!== parseInt(contactId)){
            newList.push(element);
          }
        });
      setContactList(newList);
    }

  return (
    <div className="App d-flex justify-content-around">
     <div className="container w-75 mr-auto">
      {/* NavBar */}
      <Navbar/> 

    {/* Routes  */}
      <Routes>
        <Route path={'/'} element={<Navigate to={'/contacts/list'}/>}/>
        {/* call contactList component by passing contactList and deletContact method */}
        <Route path={'/contacts/list'} element={<ContactList contacts={contactList} deleteContact={deleteContact}/>}/>

        <Route path={'/contacts/add'} element={<AddContact updateContacts={updateContacts}/>}/>

        {/* passing both contactList and updateContactList method */}
        <Route path={'/contacts/edit/:contactId'} element={<EditContact contacts={contactList} updateContacts={updateContacts}/>}/>
     </Routes>


     </div>
    </div>
  );
}

export default App;
