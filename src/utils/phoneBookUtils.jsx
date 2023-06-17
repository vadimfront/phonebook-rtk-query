export const contactsFilter = (contacts, searchTerm) => {
  const term = searchTerm.toLowerCase();

  if (!contacts.length) return contacts;

  const filtered = contacts.filter(contact =>
    contact.name.toLowerCase().includes(term)
  );

  return filtered.length ? filtered : [];
};

export const checkIfUserExists = (contacts, newUser) => {
  if (!contacts.length) return false;
  const isUserExist = contacts.some(
    ({ name }) => name.toLowerCase() === newUser.name.toLowerCase()
  );
  return isUserExist;
};
