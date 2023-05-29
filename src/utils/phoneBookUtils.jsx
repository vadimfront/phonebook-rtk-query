export const contactsFilter = (data, searchTerm) => {
  return data.filter(el =>
    el.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
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
