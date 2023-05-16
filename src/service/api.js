import axios from "axios";

export class FetchData {
    static URL = `https://jsonplaceholder.typicode.com/users/`;

    // get data fetchAll contacts
    static getData(){
        return axios.get(this.URL);
    }

    // insert a contact to db
    static createContact(contact){
        return axios.post(this.URL,contact);
    }

    // update the contact
    static updateContact(contact,contactId){
        return axios.put(`${this.URL}/${contactId}`,contact).catch((err)=>{
            console.log("contact id not found in db");
            return null;
        });
    }

    // delete the contact
    static deleteContact(contactId){
        return axios.delete(`${this.URL}/${contactId}`);
    }
}