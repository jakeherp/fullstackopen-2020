import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0])
  const [selected, setSelected] = useState(0);

  const nextAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const vote = () => {
    const allVotes = [...votes];
    allVotes[selected]++;
    setVotes(allVotes);
  }

  const mostVoted = () => votes.indexOf(Math.max(...votes))

  return (
    <>
      <p>{props.anecdotes[selected]}</p>
      <p>{`has ${votes[selected]} ${votes[selected] === 1 ? `vote` : `votes`}`}</p>
      <button onClick={() => nextAnecdote()}>Next anecdote</button>
      <button onClick={() => vote(selected)}>Vote</button>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[mostVoted()]}</p>
      <p>{`has ${votes[mostVoted()]} ${votes[mostVoted()] === 1 ? `vote` : `votes`}`}</p>
    </>
  );
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
);