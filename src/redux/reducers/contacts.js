// import { ADD_CONTACT, DELETE_CONTACT } from "../types";
import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact } from "../phonebook-actions";

const initialContactsState = [
  { id: "id-1", name: "John Piters", phone: "555-55-55" },
  { id: "id-2", name: "Piter Johnson", phone: "444-44-44" },
  { id: "id-3", name: "Pit Ivans", phone: "333-33-33" },
  { id: "id-4", name: "Ivan Piterson", phone: "222-22-22" },
];

// const contactsReducer = (state = initialContactsState, action) => {
//   switch (action.type) {
//     case ADD_CONTACT:
//       return [...state, action.payload];
//     case DELETE_CONTACT:
//       return state.filter((contact) => action.payload !== contact.id);
//     default:
//       return state;
//   }
// };
const contactsReducer = createReducer(initialContactsState, {
  [addContact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, action) =>
    state.filter((contact) => action.payload !== contact.id),
});
export default contactsReducer;
