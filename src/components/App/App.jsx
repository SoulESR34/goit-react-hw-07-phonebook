import React, { useEffect } from 'react';
import NewContact from '../NewContact/NewContact';
import { NewContactContainer, Container } from './App.style';
import { ContactsList } from '../ContactsList/ContactsList';
import { ContactFilter } from '../ContactFilter/ContactFilter';

import { selectContacts, selectfilters } from '../../redux/selectors';
import { requestContacts, addContacts, deleteContact } from '../../redux/operations';
import { setFilterByName } from '../../redux/slices/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const { filterByName: filterStatus } = useSelector(selectfilters);
  const dispatch = useDispatch();

  const createNewContact = (e, ContactsList) => {
    e.preventDefault();
    const nameContact = e.target.name.value;
    const numberContact = e.target.numberPhone.value;
    const newContact = {
      contactID: nanoid(),
      name: nameContact,
      number: numberContact,
    };
    const isExist = ContactsList.some(c => c.name === nameContact);
    console.log(newContact)
    !isExist
      ? dispatch(addContacts(newContact))
      : alert(`${nameContact} is already in contacts`);
  };

  const searchContact = e => {
    dispatch(setFilterByName(e.target.value));
  };

  const delContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  useEffect(() =>{
    dispatch(requestContacts())
  }, [dispatch])

  return (
    <main>
      <Container>
        <NewContactContainer>
          <h2>Phonebook</h2>
          <NewContact createContact={createNewContact} contactList={contacts} />
        </NewContactContainer>

        <h2>Contacts</h2>
        <ContactFilter validator={searchContact} />
        <ContactsList
          contacts={contacts}
          search={filterStatus}
          delContact={delContact}
        />
      </Container>
    </main>
  );
};
