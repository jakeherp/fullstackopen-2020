import React from 'react'

const Statistic = ({ type, value, unit }) => (
  <tr>
    <td>{type}</td>
    <td>{value} {unit && unit}</td>
  </tr>
)

export default Statistic
