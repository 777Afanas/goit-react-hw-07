import { createSlice } from "@reduxjs/toolkit"


const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
    },
    reducers: {
        addContact(state, action) {
            state.items.push({
                id: "",
                name: action.payload.name,
                number: action.payload.number,
            });
        },
        deleteContact(state, action) {
            const index = state.items.findIndex(
                (contact) => contact.id === action.payload
            );
            state.items.splice(index, 1);
        },
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export const selectContacts = (state) => state.contacts.items; 