const contacts = JSON.parse(localStorage.getItem('contacts')) || [];

export const getContacts = () => contacts;

export const addContact = (contact) => {
  contact.id = Date.now();
  contacts.push(contact);
  localStorage.setItem('contacts', JSON.stringify(contacts));
};

export const updateContact = (updatedContact) => {
  const index = contacts.findIndex((c) => c.id === updatedContact.id);
  if (index !== -1) {
    contacts[index] = updatedContact;
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }
};

export const deleteContact = (id) => {
  const updatedContacts = contacts.filter((c) => c.id !== id);
  localStorage.setItem('contacts', JSON.stringify(updatedContacts));
};
