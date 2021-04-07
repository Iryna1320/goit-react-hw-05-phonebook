import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction(
  'contact/Add',
  function prepare({ name, number }) {
    return {
      payload: {
        id: uuidv4(),
        name,
        number,
      },
    };
  },
);

const deleteContact = createAction('contact/Delete');

const changeFilter = createAction('contact/chageFilter');

export default { addContact, deleteContact, changeFilter };
