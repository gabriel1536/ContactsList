import Phone from './Phone';
import Address from './Address';

class Contact {
    constructor(data){
        this.phone = new Phone(data.phone);
        this.address = new Address(data.address);
        this.name = data.name;
        this.id = data.id;
        this.companyName = data.companyName;
        this.isFavorite = data.isFavorite;
        this.smallImageURL = data.smallImageURL;
        this.largeImageURL = data.largeImageURL
        this.emailAddress = data.emailAddress;
        this.birthdate = data.birthdate;
    }
}

export default Contact;