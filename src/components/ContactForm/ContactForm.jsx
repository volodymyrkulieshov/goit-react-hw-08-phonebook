import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContactThunk } from '../../redux/contacts/contactsThunks';
import { selectAllContacts } from '../../redux/contacts/selectors';
import { Button, TextField } from '@mui/material';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { contacts } = useSelector(selectAllContacts);
  const dispatch = useDispatch();

  // console.log('contacts', contacts)
  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const normalizedName = name.toLowerCase();

    const isAdded = contacts.find(
      el => el.name.toLowerCase() === normalizedName
    );

    if (isAdded) {
      alert(`${name}: is already in contacts`);
      setName('');
      setNumber('');
      return;
    }
    dispatch(addContactThunk({ id: nanoid(), name, number }));
    alert(`Contact ${name} has been added to your Contacts`);
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* <label className={css.label} htmlFor="example">
          Name
        </label> */}
        <TextField
          style={{ marginBottom: 20 }}
          onChange={handleChange}
          id="outlined-basic"
          name="name"
          type="text"
          value={name}
          label="Name"
          fullWidth
          required
        />
        {/* <label className={css.label} htmlFor="example">
          Number
        </label> */}
        <TextField
          style={{ marginBottom: 20 }}
          onChange={handleChange}
          type="tel"
          name="number"
          value={number}
          label="Number"
          fullWidth
          required
        />
        <Button
          style={{ textTransform: 'none', margin: 'auto', display: 'block' }}
          variant="contained"
          type="submit"
        >
          Add contact
        </Button>
      </form>
    </>
  );
};

export default ContactForm;
