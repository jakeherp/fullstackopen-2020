import React from 'react';

const Content = ({ parts }) => (
  <>
    {parts.map(({ part, exercises }) => (
      <p>{part} {exercises}</p>
    ))}
  </>
);

export default Content;
