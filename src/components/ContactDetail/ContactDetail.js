import React from 'react';
import { Link } from 'react-router-dom';
import './ContactDetail.css';
import Detail from './Detail';
import favoriteStar from '../../assets/objects/favorite-true.png';
import otherStar from '../../assets/objects/favorite-false.png';
import userIcon from '../../assets/objects/userIconLarge.png';

function ContactDetail(props) {
    const { contacts, match, contactsUpdater, maxWidth } = props;
    const contactId = match.params.id;
    const contact = contacts.find(contact => contact.id === contactId);
    
    window.scrollTo(0, 0);

    const setFavorite = (() => {
        let filteredContacts = contacts.filter(contact => contact.id !== contactId);
        contact.isFavorite = !contact.isFavorite;

        contactsUpdater([...filteredContacts, contact])
    });

    const formatPhoneNumber = ((phoneNumber) => {
        try {
            const splittedNumber = phoneNumber.split(/-(.+)/);
            return `(${splittedNumber[0]}) ${splittedNumber[1]}`;
        }
        catch {
            return '';
        }
    });

    return (
        <div className={"container " + maxWidth}>
            <div className="panel panel-default">
                <div className="panel-heading2 c-list">
                    <Link to={"/"}>
                        <span className="title-minor bolder">〈</span>
                        <span className="title-contacts pad2">Contacts</span>
                    </Link>
                    <span className="right-sided-text" onClick={setFavorite}>
                        <img className="fix-star" src={contact.isFavorite ? favoriteStar : otherStar} alt={contact.name}></img>
                    </span>
                </div>
                <div id={"card_contacts_" + contactId}>
                    <div id={"contacts_" + contactId} className="panel-collapse collapse show" aria-expanded="true" >
                        <ul className="list-group" id={"contact-list_" + contactId}>
                            <li key={contactId} className="list-group-item">
                                <div className="row">
                                    <div className="profile">
                                        <img src={contact.largeImageURL} onError={(e) => { e.target.onerror = null; e.target.src = userIcon }} alt={contact.name} className="img-fluid mx-auto d-block img-fluid fix-large-size" />
                                    </div>
                                    <div className="col-12 text-center profile-title fix-line">
                                        <label className="name2">{contact.name}</label>
                                        <br />
                                        <span className="text-muted2">{contact.companyName}</span>
                                    </div>
                                </div>
                                {Object.keys(contact.phone).sort().map((typeOfPhone, index) => {
                                    if (!contact.phone[typeOfPhone]) {
                                        return '';
                                    }
                                    return (
                                        <div key={'' + contactId + index}>
                                            <Detail subtitleName="PHONE" subValue={formatPhoneNumber(contact.phone[typeOfPhone])} phoneType={typeOfPhone.toLocaleUpperCase()} />
                                        </div>
                                    );
                                })}
                                {!contact.address ? '' :
                                    <div>
                                        <div className="border-bottom"></div>
                                        <div className="row">
                                            <div className="col-12 profile-subtitle text-sm-left">
                                                <label className="text-muted subtitle-size fixed-space">ADDRESS:</label>
                                                <br />
                                                <span className="value-name text-sm-left">{contact.address.street}</span>
                                                <br />
                                                <span className="value-name subtitle-size text-sm-left">{contact.address.city}, {contact.address.zipCode}, {contact.address.country}</span>
                                            </div>
                                        </div>
                                    </div>
                                }
                                <Detail subtitleName="BIRTHDATE" subValue={contact.birthdate} />
                                <Detail subtitleName="EMAIL" subValue={contact.emailAddress} />
                            </li>
                        </ul >
                    </div>
                </div >
            </div>
        </div>
    )
}

export default ContactDetail;