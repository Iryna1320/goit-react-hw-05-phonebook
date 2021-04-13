import React from 'react';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1 className="App_title">Phonebook</h1>
      <ContactForm />
      <h2 className="App_title">Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
