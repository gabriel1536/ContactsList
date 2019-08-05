import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './ContactsList.css';
import ContactsListDetail from '../ContactsListDetail/ContactsListDetail';

function ContactsList(props) {
  const { contacts, isLoading, maxWidth } = props;
  const [otherContacts, setOtherContacts] = useState([]);
  const [favoriteContacts, setFavoriteContacts] = useState([]);
  

  useEffect(() => {
    let otherContacts = [], favoriteContacts = [];
    contacts.forEach(contact => contact.isFavorite ? favoriteContacts.push(contact) : otherContacts.push(contact));
    setOtherContacts(otherContacts);
    setFavoriteContacts(favoriteContacts);
  }, [contacts]);

  if (isLoading) {
    return <p> Loading... </p>
  }

  return (
    <div className={'container ' + maxWidth}>
      <div className="panel panel-default">
        <div className="panel-heading c-list">
          <span className="title">Contacts</span>
        </div>
        <div className="panel-separator">
          <span className="subtitle">FAVORITE CONTACTS</span>
        </div>
        {favoriteContacts.map((contact, index) =>
          <div key={contact.id}>
            <Link to={"/contactDetail/" + contact.id}>
              <ContactsListDetail contact={contact} index={index} />
            </Link>
          </div>
        )}
        <div className="panel-separator">
          <span className="subtitle">OTHER CONTACTS</span>
        </div>
        {otherContacts.map((contact, index) =>
          <div key={contact.id}>
            <Link to={"/contactDetail/" + contact.id}>
              <ContactsListDetail contact={contact} index={index} />
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default ContactsList;