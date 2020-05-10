import React from 'react';
import Person from './person';

const Persons = ({ filteredContacts }) => {
  return (
    <>
      {filteredContacts.map(({ name, number }) => (
        <Person name={name} number={number} />
      ))}
    </>
  );
};

export default Persons;
