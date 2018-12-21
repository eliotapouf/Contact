import { Contacts, ContactName, ContactField, ContactFieldType, ContactFindOptions } from '@ionic-native/contacts';
import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private contact: Contacts) {}

  async getContacts() {
    try{
      const selectedContact = await this.contact.pickContact();
      console.log(`Selected contact:`, selectedContact);
    }catch(e){
      console.error(e);
    }
  }

  async addContact(){
    try{
      const newContact = this.contact.create();

      newContact.name = new ContactName(null, 'Thiaka', 'Badji')
      newContact.phoneNumbers = [new ContactField('mobile', '00221777739260')];

      await newContact.save();

      console.log(`New contact saved`, newContact);
    }catch(e){
      console.error(e);
    }
  }
  

  async findContact() {
    try{
      const options = new ContactFindOptions();
      
      options.filter = 'A Test Contact';
      options.hasPhoneNumber = true;

      const fields: ContactFieldType[] = ['name'];

      const filteredContact = await this.contact.find(fields, options)
      console.log(`Filtered contacts: `, filteredContact);
    }catch(e){
      console.error(e);
    }
  }

}
