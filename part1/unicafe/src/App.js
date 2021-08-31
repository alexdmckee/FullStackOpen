import React, { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistic = ({name, value}) => {

  if( name === 'positive') {
    return (<tr><td>{name}</td><td>{value * 100 }%</td></tr>)
  }

  return (
  <tr>
    <td>
      {name}
    </td>
    <td>
      {value}
    </td>
  </tr>
  )
} 

const Statistics = ({good, bad, neutral}) => {

  const total = good + bad + neutral
  const average = (good + bad * -1) / total
  const positive = good / total
  
  if(total === 0)
  {
    return ( <p> Nothing has been entered yet </p>)
  }
  else {
    return ( 
    <table>
      <tbody>
        <Statistic name='good' value={good} />     
        <Statistic name='bad'  value={bad}  />
        <Statistic name='neutral' value={neutral} />
        <Statistic name='all' value={total} />
        <Statistic name='average' value={average} />
        <Statistic name='positive' value={positive} /> 
      </tbody>
    </table> 
    )
  }
  

}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick =  () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1) 

  return (
    <div>
      <h1> give feedback </h1>
      
      <Button handleClick={handleGoodClick} text='good'/>
      <Button handleClick={handleNeutralClick} text='neutral' />     
      <Button handleClick={handleBadClick} text='bad' />
      
      <h1> statistics </h1>
      
      <Statistics good={good} bad={bad} neutral={neutral}/>   
          
    </div>
  )
}

export default App