import React from 'react'

const Filter = ({ filter, handler }) => {
  return (
    <form>
      <input onChange={handler} value={filter} placeholder="Search contact" />
    </form>
  )
}

export default Filter
