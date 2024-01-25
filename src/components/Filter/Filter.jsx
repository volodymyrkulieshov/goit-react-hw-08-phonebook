import React from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/contacts/selectors';
import { changeFilter } from '../../redux/contacts/filterSlice';
import { TextField } from '@mui/material';

const filterInputId = nanoid();

const Filter = () => {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();

  const setFilter = event => {
    const normalizedValue = event.target.value.toLowerCase();

    dispatch(changeFilter(normalizedValue));
  };

  return (
    <div
      style={{
        marginTop: 40,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 450,
      }}
    >
      <TextField
        style={{ marginBottom: 15 }}
        onChange={setFilter}
        id={filterInputId}
        type="text"
        value={filterValue}
        label=" Find contacts by name"
        placeholder="Search"
        fullWidth
      />
    </div>
  );
};

export default Filter;
