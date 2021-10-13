// import { React, useState, useEffect } from "react";
// import nextId from "react-id-generator";
import Container from "./components/Container";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import "./App.css";

export default function App() {
  // const [contacts, setContacts] = useState([
  //   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  //   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  //   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  //   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  // ]);

  // const [filter, setFilter] = useState("");

  // useEffect(() => {
  //   const contacts = localStorage.getItem("contacts");
  //   const parsedContacts = JSON.parse(contacts);
  //   // console.log(parsedContacts);
  //   if (parsedContacts) {
  //     setContacts(parsedContacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = (data) => {
  //   const { name, number } = data;
  //   // const { contacts } = this.state;
  //   const id = nextId();
  //   const newContact = {
  //     name,
  //     id,
  //     number,
  //   };

  //   const checkOnContact = contacts.find(
  //     (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
  //   );

  //   if (checkOnContact) {
  //     alert(`${newContact.name} is already in contacts`);
  //   } else {
  //     setContacts((prev) => [...prev, newContact]);
  //   }
  // };

  // const deleteContact = (contactId) => {
  //   setContacts((prev) => prev.filter((contact) => contactId !== contact.id));
  // };

  // const onFilterChange = (event) => {
  //   const targetValue = event.target.value;
  //   setFilter(targetValue);
  // };

  // const filterByName = () => {
  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  return (
    <Container>
      <h1> Phonebook </h1>
      <h2>Add new contact</h2>
      {/* <ContactForm onSubmit={addContact} /> */}
      <ContactForm />
      <h2>Find contact</h2>
      <Filter />
      {/* <Filter value={filter} onChange={onFilterChange} /> */}
      <h2>Contact list</h2>
      {/* <ContactList contacts={filterByName()} onDeleteContact={deleteContact} /> */}
      <ContactList />
    </Container>
  );
}

// import ContactForm from "./Components/ContactForm/ContactForm";
// import ContactList from "./Components/ContactList/ContactList";
// import Filter from "./Components/Filter/Filter";
// import Container from "./Components/Utils/Container/Container";
// import Title from "./Components/Utils/Title/Title";

// function App() {
//   // useEffect(() => {
//   //   const contacts = localStorage.getItem("contacts");
//   //   const parsedContacts = JSON.parse(contacts);

//   //   if (parsedContacts) {
//   //     setContacts(parsedContacts);
//   //   }
//   // }, []);

//   // useEffect(() => {
//   //   localStorage.setItem("contacts", JSON.stringify(contacts));
//   //   if (contacts.length === 0) {
//   //     localStorage.removeItem("contacts");
//   //   }
//   // }, [contacts]);

//   return (
//     <Container>
//       <Title color="#424242" size={30} text="Phonebook" />
//       <div
//         style={{
//           border: "1px solid gray",
//           width: "fit-content",
//           padding: "20px",
//         }}
//       >
//         <ContactForm />
//       </div>
//       <Filter />
//       <Title marginT={40} size={20} text="Contacts" />
//       <ContactList />
//     </Container>
//   );
// }

// export default App;
