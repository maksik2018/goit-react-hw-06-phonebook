import { React, useState } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { addContact } from '../redux/phonebook-actions';

 function ContactForm ({contacts, onSubmit}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
 
  const onChange = e => {
       const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
   
     const checkOnContact = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (checkOnContact) {
      alert(`${name} is already in contacts`);
      setName("");
      setNumber("");
      return;
    }
     if (name === "" && number === "") {
      alert("Please fill empty fields");
      return;
    }
    onSubmit({ name, number });
    setName("");
    setNumber("");
    // else {
    //   setContacts((prev) => [...prev, newContact]);
    // }
  };

    
    return (
      <form onSubmit={handleSubmit}>
         <input
          placeholder="indicate your name"
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={onChange}
        />
           <input
          placeholder="indicate your phone number"
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={onChange}
        />
        <button type='submit'>Add contact</button>
      </form>
    );
  }

  const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (data) => dispatch(addContact(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

ContactForm.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
};
