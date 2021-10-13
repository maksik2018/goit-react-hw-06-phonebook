import React from 'react';
import { connect } from "react-redux";
import { deleteContact } from "../redux/phonebook-actions";
import PropTypes from "prop-types";
import { List, Item} from "../components/ContactList.styled";

const ContactList = ({ contacts, onDeleteContact }) => (
// const ContactList = ({ contacts, filter, onDeleteContact }) => {
//   const filtered = contacts.filter((contact) => contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim()));
//   return (
    <List>
      {contacts.map((contact) => (
      // {filtered.map((contact) => (
        <Item key={contact.id} >
          <p>{contact.name}</p>
          <p>{contact.number}</p>
          <button type="button" onClick={() => onDeleteContact(contact.id)}>Удалить</button>
        </Item>
      ))}
    </List>
  );
// }
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      number: PropTypes.string,
    }).isRequired,
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

const filterByName = (state) => {
  return state.contacts.items.filter((contact) =>
    contact.name.toLowerCase().includes(state.contacts.filter.toLowerCase())
     
  );
 
};
  const mapStateToProps = (state) => ({
  contacts: filterByName(state),
});
// const mapStateToProps = state => ({
//   contacts: state.contacts.items,
//   filter: state.contacts.filter
// })

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);