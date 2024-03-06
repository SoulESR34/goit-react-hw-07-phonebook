import { createSlice } from '@reduxjs/toolkit';
import { requestContacts, addContacts, deleteContact } from '../operations';

const contactsInitialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder.addCase(requestContacts.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(requestContacts.fulfilled, (state, action) => {
      state.contacts = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(requestContacts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(addContacts.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(addContacts.fulfilled, (state, action) => {
      state.contacts.push(action.payload)
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(addContacts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(deleteContact.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      console.log(action.payload)
      state.contacts = state.contacts.filter(c => c.id !== action.payload.id);
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(deleteContact.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default contactsSlice.reducer;

