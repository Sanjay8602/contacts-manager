import React, { useState, useEffect } from 'react';
import ContactForm from './Components/contactform';
import ContactsTable from './Components/contacttable';
import { getContacts, addContact, updateContact, deleteContact } from './services/contactsService';

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setContacts(getContacts());
  }, []);

  const handleAddContact = (contact) => {
    addContact(contact);
    setContacts(getContacts());
  };

  const handleDeleteContact = (id) => {
    deleteContact(id);
    setContacts(getContacts());
  };

  return (
    <div>
      <h1>Contacts Manager</h1>
      <ContactForm onAddContact={handleAddContact} />
      <ContactsTable contacts={contacts} onDeleteContact={handleDeleteContact} />
    </div>
  );
}

export default App;
