import React from 'react'

const Form = ({
  values: {
    newName,
    newNumber,
  },
  handlers: {
    addContact,
    handleNameChange,
    handleNumberChange,
  }
}) => {
  return (
    <form onSubmit={addContact}>
      <div>
        name: <input onChange={handleNameChange} value={newName} />
          number: <input onChange={handleNumberChange} value={newNumber} />
      </div>
      <div>
        <button type="submit" on>add</button>
      </div>
    </form>
  )
}

export default Form
