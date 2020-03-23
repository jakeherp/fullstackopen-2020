import React from 'react';
import Part from './part';

const Content = ({ parts }) => (
  <>
    {parts.map(({ part, exercises }) => (
      <Part part={part} exercises={exercises} />
    ))}
  </>
);

export default Content;
