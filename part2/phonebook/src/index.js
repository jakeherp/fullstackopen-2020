import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom';
import Filter from './components/filter';
import Form from './components/form';
import Persons from './components/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(res => {
        setPersons(res.data)
      })
  }, [])

  const addContact = (e) => {
    e.preventDefault();

    const contacts = [...persons];
    const res = contacts.find(person => person.name === newName);

    if (res) {
      // const confirm = window.confirm(
      //   `${newName} is already added to the phonebook. Replace the old number with the new one?`
      // )
      alert(`${newName} is already added to the phonebook.`)
    } else if (newName.length < 3 || newNumber.length < 3) {
      alert(`name or number too short.`)
    } else {
      setPersons([...persons, { name: newName, number: newNumber }]);
      resetForm();
    }
  }
  const filteredContacts = !filter
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));

  const handleFilter = e => setFilter(e.target.value);
  const handleNameChange = e => setNewName(e.target.value);
  const handleNumberChange = e => setNewNumber(e.target.value);

  const resetForm = () => {
    setNewName('');
    setNewNumber('');
  }


  return (
    <>
      <h2>Phonebook</h2>
      <Filter value={filter} handler={handleFilter} />

      <hr />

      <Form
        values={{
          newName,
          newNumber,
        }}
        handlers={{
          handleNameChange,
          handleNumberChange,
          addContact,
        }}
      />

      <h2>Numbers</h2>
      <Persons filteredContacts={filteredContacts} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));