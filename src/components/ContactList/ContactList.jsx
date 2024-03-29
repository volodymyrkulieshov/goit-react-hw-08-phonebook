import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContactThunk,
  getAllContactsThunk,
} from '../../redux/contacts/contactsThunks';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { Box, Button, List, ListItem, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect } from 'react';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  // console.log('contacts', contacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContactsThunk());
  }, [dispatch]);

  const onDeleteContact = (id, name) => {
    dispatch(deleteContactThunk(id));
    return alert(`Contact ${name} has been deleted from your Contacts`);
  };
  return (
    <>
      <List style={{ width: '100%', backgroundColor: '#fff' }}>
        {contacts.map(({ name, number, id }) => {
          return (
            <ListItem
              style={{
                display: 'flex',
                alignItems: 'center',
                width: 550,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
              key={id}
            >
              <Typography
                style={{ marginRight: 25 }}
                typography="h6"
                color="#1976d2"
                component="span"
              >
                {name}:
              </Typography>
              <Box style={{ marginLeft: 'auto' }}>
                <Typography
                  style={{ marginRight: 25 }}
                  typography="h6"
                  color="#1976d2"
                  component="span"
                >
                  {number}
                </Typography>
                <Button
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  style={{ backgroundColor: '#1976d2', color: 'white' }}
                  type="button"
                  onClick={() => onDeleteContact(id, name)}
                >
                  Delete
                </Button>
              </Box>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};
export default ContactList;
