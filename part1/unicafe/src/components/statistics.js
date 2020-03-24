import React from 'react'
import Statistic from './statistic';

const Statistics = ({ good, neutral, bad }) => {
  const all = good + bad + neutral;
  const average = (good + bad * -1) / all;
  const positive = (good / all) * 100;

  return (
    <>
      <h2>statistics</h2>
      {good > 0 || neutral > 0 || bad > 0 ? (
        <table>
          <tbody>
            <Statistic type="good" value={good} />
            <Statistic type="neutral" value={neutral} />
            <Statistic type="bad" value={bad} />

            <Statistic type="all" value={all} />
            <Statistic type="average" value={average} />
            <Statistic type="positive" value={positive} unit="%" />
          </tbody>
        </table>
      ) : (
        <p>No feedback given</p>
      )}
    </>
  )
}

export default Statistics
