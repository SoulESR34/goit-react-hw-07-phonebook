import { createAsyncThunk } from "@reduxjs/toolkit";


const URL_CONTACTS = 'https://65e7860c53d564627a8ef673.mockapi.io/contacts';

const fetchContacts = async (method, body, thunkAPI) => {
  const options = {
    method,
    body: JSON.stringify(body),
    headers: {
      'content-type': 'application/json',
    },
  };

  try {
    let res;
    if (method === 'GET') {
      res = await fetch(URL_CONTACTS );
    } else if (method === 'POST') {
      res = await fetch(URL_CONTACTS, options);
    } else {
      res = await fetch(`${URL_CONTACTS}/${body}`, { method });
    }
    const data = res.json()
    return data;
  } catch (err) {
    thunkAPI.rejectWithValue(err.message);
  }
};

export const requestContacts = createAsyncThunk(
  'contacts/request',
  async (thunkAPI) => {
    return await fetchContacts('GET', thunkAPI);
  }
);

export const addContacts = createAsyncThunk(
  'contacts/add',
  async (contact, thunkAPI) => {
    return await fetchContacts('POST', contact, thunkAPI);
  }
);

export const deleteContact = createAsyncThunk(
    'contacts/delete', 
    async (id, thunkAPI) => {
    return await fetchContacts('DELETE', id, thunkAPI);
});
