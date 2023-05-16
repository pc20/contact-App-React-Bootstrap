import axios from "axios";

export class FetchData {
    static URL = `https://jsonplaceholder.typicode.com/users/`;

    static getData(){
        return axios.get(this.URL);
    }

    static createContact(contact){
        return axios.post(this.URL,contact);
    }

    static updateContact(contact,contactId){
        return axios.put(`${this.URL}/${contactId}`,contact).catch((err)=>{
            console.log("contact id not found in db");
            return null;
        });
    }

    static deleteContact(contactId){
        return axios.delete(`${this.URL}/${contactId}`);
    }
}