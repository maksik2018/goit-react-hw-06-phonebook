// import { FILTER_CONTACT } from "../types";
import { createReducer } from "@reduxjs/toolkit";
import { filterContact } from "../phonebook-actions";

// const filterReducer = (state = "", action) => {
//   switch (action.type) {
//     case FILTER_CONTACT:
//       return action.payload;
//     default:
//       return state;
//   }
// };

const filterReducer = createReducer("", {
  [filterContact]: (state, action) => action.payload,
});

export default filterReducer;
