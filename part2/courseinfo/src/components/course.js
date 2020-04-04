import React from 'react';

import Header from './header';
import Content from './content';
import Total from './total';

const Course = ({ course: { name, parts } }) => {
  return (
    <div>
      <Header course={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default Course;
