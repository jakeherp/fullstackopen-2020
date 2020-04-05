import React from 'react'

const Person = ({ name, number }) => {
  return (
    <>
      <h3>{name}</h3>
      <p>{number}</p>
    </>
  )
}

export default Person
