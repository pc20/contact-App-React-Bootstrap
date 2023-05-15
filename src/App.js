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
            let response = await FetchData.getData();
            const fetchedList = response.data;
            fetchedList.sort((a,b) => {
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

    let updateContacts = (contact,contactId) => {
      let newList = [];
      if(contactId){
        console.log("update call made")
        contactList.forEach(element => {
          if(element.id=== parseInt(contactId)){
            newList.push(contact);
          }else{
            newList.push(element);
          }
        });
      }else{
          newList = [...contactList,contact];
      }
      
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

    let deleteContact = (contactId) => {
       let newList = [];
        contactList.forEach(element => {
          if(element.id!== parseInt(contactId)){
            newList.push(element);
          }
        });
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

  return (
    <div className="App d-flex justify-content-around">
     <div className="container w-50 mr-auto">
      <Navbar/>
      <Routes>
        <Route path={'/'} element={<Navigate to={'/contacts/list'}/>}/>
        <Route path={'/contacts/list'} element={<ContactList contacts={contactList} deleteContact={deleteContact}/>}/>
        <Route path={'/contacts/add'} element={<AddContact updateContacts={updateContacts}/>}/>
        <Route path={'/contacts/edit/:contactId'} element={<EditContact contacts={contactList} updateContacts={updateContacts}/>}/>
     </Routes>
     </div>
    </div>
  );
}

export default App;
