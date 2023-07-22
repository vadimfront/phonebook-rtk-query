export const contactsFilter = (contacts, searchTerm) => {
  const term = searchTerm.toLowerCase();

  if (!contacts.length) return contacts;

  const filtered = contacts.filter(contact =>
    contact.name.toLowerCase().includes(term)
  );

  return filtered.length ? filtered : [];
};

export const checkIfContactExists = (contacts, contactName) => {
  if (!contacts.length) return false;
  const isContactExist = contacts.some(
    ({ name }) => name.toLowerCase() === contactName.toLowerCase()
  );
  return isContactExist;
};
