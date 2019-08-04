import Contact from '../models/Contact';

function GetContacts() {
    return fetch('https://s3.amazonaws.com/technical-challenge/v3/contacts.json')
    .then(response => response.json())
    .then(contacts => contacts.map(contact => new Contact(contact)));
}

export default GetContacts;