export const contactsFilter = (contacts, searchTerm) => {
  const term = searchTerm.trim().toLowerCase();

  if (!contacts.length || !term.length) return contacts;

  const filtered = contacts.filter(contact =>
    contact.contactName.toLowerCase().includes(term)
  );

  return filtered.length ? filtered : [];
};

export const checkIfContactExists = (contacts, contactFilterByName) => {
  if (!contacts.length) return false;
  const isContactExist = contacts.some(
    ({ contactName }) =>
      contactName.toLowerCase() === contactFilterByName.toLowerCase()
  );
  return isContactExist;
};
