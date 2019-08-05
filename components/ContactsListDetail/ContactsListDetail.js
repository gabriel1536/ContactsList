import React from 'react';
import './ContactsListDetail.css';
import userIcon from '../../assets/objects/userIcon.png';

function ContactsListDetail(props) {
    const { contact, index } = props;
    const contactId = contact.id;
    return (
        <div>
            {index !== 0 ? <div className="border-bottom"></div> : ''}

            <div id={"card_contacts_" + contactId}>
                <div id={"contacts_" + contactId} className="panel-collapse collapse show" aria-expanded="true" >
                    <ul className="list-group" id={"contact-list_" + contactId}>
                        <li key={contactId} className="list-group-item">

                            <div className="row selectable">
                                <div className="col-sm-3">
                                    <img src={contact.smallImageURL} onError={(e) => { e.target.onerror = null; e.target.src = userIcon }} alt={contact.name} className="img-fluid mx-auto d-block img-fluid fixSize" />
                                </div>
                                <div className="col-12 col-sm-9 col-md-9 text-center text-sm-left">
                                    <label className={"star lead " + (!contact.isFavorite ? "star-bottom" : "")} style={{ visibility: !contact.isFavorite ? "hidden" : '' }}><span role="img" aria-label="emoji">⭐</span></label>
                                    <label className="name lead fixed-space">{contact.name}</label>
                                    <br />
                                    <label className="star lead star-bottom" style={{ visibility: "hidden" }}><span role="img" aria-label="emoji">⭐</span></label>
                                    <span className="text-muted fixed-space">{contact.companyName}</span>
                                </div>
                            </div>
                        </li>
                    </ul >
                </div>
            </div >
        </div>
    );
}

export default ContactsListDetail;