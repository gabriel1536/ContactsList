import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import './index.css';
import ContactDetail from './components/ContactDetail/ContactDetail';
import ContactsList from './components/ContactsList/ContactsList';
import GetContacts from './data/services/getContactsData';

class Root extends React.Component {
    state = {
        contacts: [],
        isLoading: false
    }

    contactsUpdater = (data) => {
        this.setState({ contacts: data.sort((a,b) => (a.name > b.name ? 1 : -1)) })
    };

    loadingUpdater = (isLoading) => {
        this.setState({ isLoading: isLoading });
    }

    componentDidMount(){
        this.loadingUpdater(true);
        GetContacts().then(data => {
            this.contactsUpdater(data);
            this.loadingUpdater(false);
        });
    }

    render() {
        return (
            <Router>
                <div>   
                    <Route exact path="/" render={props => <ContactsList {...props} contacts={this.state.contacts} isLoading={this.state.isLoading}></ContactsList>} />
                    <Route path="/contactDetail/:id" render={props => <ContactDetail {...props} contacts={this.state.contacts} contactsUpdater={this.contactsUpdater}></ContactDetail>} />
                </div>
            </Router>
        );
    }
};

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
