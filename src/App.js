import React from 'react';
import './App.css';
import { Routes,Route,Navigate } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import ContactList from './components/contactList';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';

function App() {
  return (
    <div className="App d-flex justify-content-around">
     <div className="container w-50 mr-auto">
      <Navbar/>
      <Routes>
        <Route path={'/'} element={<Navigate to={'/contacts/list'}/>}/>
        <Route path={'/contacts/list'} element={<ContactList/>}/>
        <Route path={'/contacts/add'} element={<AddContact/>}/>
        <Route path={'/contacts/edit'} element={<EditContact/>}/>
     </Routes>
     </div>
    </div>
  );
}

export default App;
