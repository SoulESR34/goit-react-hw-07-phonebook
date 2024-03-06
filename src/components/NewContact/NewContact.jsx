import React from 'react';
import { Form } from './NewContact.styled'
import PropTypes from 'prop-types';

const NewContact = ({ createContact, contactList }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    createContact(e, contactList)
  }
  
  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="name">
        Name
        <input
          id="name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor="numberPhone">
        Number
        <input id="numberPhone" type="tel" name="numberPhone" required />
      </label>
      <button type="submit">Add Contact</button>
    </Form>
  );
};

export default NewContact;


NewContact.propTypes = {
  createContact: PropTypes.func
}