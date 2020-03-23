import React from 'react';
import Part from './part';

const Content = ({ parts }) => (
  <>
    {parts.map(({ name, exercises }) => (
      <Part part={name} exercises={exercises} key={name} />
    ))}
  </>
);

export default Content;
