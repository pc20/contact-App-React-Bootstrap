import React from 'react';
import './App.css';
import { Routes,Route,Navigate } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import ContactList from './components/contactList';

function App() {
  return (
    <div className="App d-flex justify-content-around">
     <div className="container w-50 mr-auto">
      <Navbar/>
      <Routes>
        <Route path={'/'} element={<Navigate to={'/contacts/list'}/>}/>
        <Route path={'/contacts/list'} element={<ContactList/>}/>
     </Routes>
     </div>
    </div>
  );
}

export default App;
