export const contactsFilter = (data, searchTerm) => {
  const term = searchTerm.toLowerCase();
  return data.filter(el => el.name.toLowerCase().includes(term));
};

export const checkIfUserExists = (contacts, newUser) => {
  const userName = newUser.name;
  const filtered = contactsFilter(contacts, userName);
  if (filtered.length) {
    alert(`${userName} is already in contacts.`);
    return true;
  }
  return false;
};
